const moment = require('moment');

const { Termination, terminationToJSON } = require('./models/termination');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves terminations from the "terminations" array above.
exports.resolvers = {
    Query: {
        terminations: async () => {
            const terminations = await Termination.findAll();
            const result = terminations.map(terminationToJSON);
            console.log('terminations', terminations);
            console.log('result', result);
            return result;
        },
    },
    Mutation: {
        // receiving a termination should include zoomId and timeLeftMinutes
        addTermination: async (_, { zoomId, timeLeftMinutes }) => {
            // console.log('addTermination:', zoomId, timeLeftMinutes);
            const ts = moment().add(timeLeftMinutes, 'minutes').toDate();            
            const t = await Termination.create(
                { zoom_id: zoomId, terminate_time: ts },
            );
            const result = terminationToJSON(t);
            console.log('returned t:', result);
            console.log('about to return termination: ', result);
            return {
                success: !!t,
                message: !!t
                    ? 'Termination saved successfully'
                    : `Failed to save termination: [${zoomId}, ${timeLeftMinutes}]`,
                termination: result,
            };
        },
    },
    MutationResponse: {
        __resolveType(mutationResponse, context, info) {
            return null;
        },
    },
};