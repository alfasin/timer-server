const moment = require('moment');

const { Termination, terminationToJSON } = require('./models/termination');

exports.resolvers = {
    Query: {
        terminations: async () => {
            const terminations = await Termination.findAll();
            const result = terminations.map(terminationToJSON);
            return result;
        },
    },
    Mutation: {
        // receiving a termination should include zoomId and timeLeftMinutes
        addTermination: async (_, { zoomId, timeLeftMinutes }) => {
            const ts = moment().add(timeLeftMinutes, 'minutes').toDate();            
            const t = await Termination.create(
                { zoom_id: zoomId, terminate_time: ts },
            );
            const termination = terminationToJSON(t);
            // console.log('about to return termination: ', t.toJSON());
            return termination;
        },
    },
};