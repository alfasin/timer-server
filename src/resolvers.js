const moment = require('moment');

const { Termination, terminationToJSON } = require('./models/termination');

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves terminations from the "terminations" array above.
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
        addTermination: async (_, { zoomId, timeLeftMinutes }/*, ctx, info*/) => {
            // console.log('addTermination: ctx', ctx, '\n\ninfo:', info);
            const ts = moment().add(timeLeftMinutes, 'minutes').toDate();            
            const t = await Termination.create(
                { zoom_id: zoomId, terminate_time: ts },
            );
            const result = terminationToJSON(t);
            console.log('about to return termination: ', t.toJSON());
            return {
                success: !!t,
                message: !!t
                    ? 'Termination saved successfully'
                    : `Failed to save termination: [${zoomId}, ${timeLeftMinutes}]`,
                created: result,
            };
        },
    },
    MutationResponse: {
        __resolveType(mutationResponse, context, info) {
            console.log('mutationResponse:', mutationResponse)
            return null;
        },
    },
};