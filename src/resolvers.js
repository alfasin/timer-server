const moment = require('moment');

const { Termination } = require('./models/termination');

const terminations = [
    {
        zoomId: '123abc',
        ttl: 8,
    },
    {
        zoomId: 'vgh-76ft',
        ttl: 8,
    },
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves terminations from the "terminations" array above.
exports.resolvers = {
    Query: {
        terminations: () => {
            return terminations;
        },
    },
    Mutation: {
        // receiving a termination should include zoomId and ttl in minutes
        addTermination: async (zoomId, timeLeftMinutes) => {
            console.log('addTermination:', zoomId, timeLeftMinutes);
            const ts = moment().add(timeLeftMinutes, 'minutes').toDate();            
            const t = await Termination.create(
                { zoom_id: zoomId, terminate_time: ts },
            );
            const termination = {
                zoomId,
                ttl: timeLeftMinutes,
            };
            terminations.push(termination);
            
            return {
                success: !!t,
                message: !!t
                    ? 'Termination saved successfully'
                    : `Failed to save termination: [${zoomId}, ${timeLeftMinutes}]`,
                termination,
            };
        },
    },
    MutationResponse: {
        __resolveType(mutationResponse, context, info) {
            return null;
        },
    },
};