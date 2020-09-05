const Sequelize = require('sequelize-cockroachdb');
const DataTypes = Sequelize.DataTypes;

// Connect to CockroachDB through Sequelize.
const sequelize = new Sequelize('zoomkiller', 'maxroach', '', {
    dialect: 'postgres',
    port: 26257,
    logging: false
});

// Define the Termination model for the "terminations" table.
exports.Termination = sequelize.define('terminations', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    zoom_id: {
        type: Sequelize.STRING
    },
    terminate_time: {
        type: Sequelize.DATE
    },
});

exports.terminationToJSON = function (termination) {
    // console.log('terminationToJSON:', termination.toJSON());
    return {
        id: termination.id,
        zoomId: termination.zoom_id,
        terminateTime: termination.terminate_time.toISOString()
    };
};

exports.Termination.sync({ force: true })
// now we can run from commandline:
// cockroach sql --insecure -e 'SHOW TABLES' --database=zoomkiller
// and
// cockroach sql --insecure -e 'select * from terminations' --database=zoomkiller
