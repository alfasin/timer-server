const Sequelize = require('sequelize-cockroachdb');
const DataTypes = Sequelize.DataTypes;

const db = process.env.DB_NAME || 'zoomkiller';
const user = process.env.DB_USER || 'maxroach';
const pwd = process.env.DB_PWD || '';
const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '26257';

// Connect to CockroachDB through Sequelize.
const sequelize = new Sequelize(db, user, pwd, {
    dialect: 'postgres',
    host,
    port,
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
