const Sequelize = require('sequelize-cockroachdb');

// Connect to CockroachDB through Sequelize.
const sequelize = new Sequelize('zoomkiller', 'maxroach', '', {
    dialect: 'postgres',
    port: 26257,
    logging: false
});

// Define the Termination model for the "terminations" table.
const Termination = sequelize.define('terminations', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    zoom_id: {
        type: Sequelize.STRING
    },
    terminate_time: {
        type: Sequelize.DATE
    },
});

// TODO: REMOVE //////////////////////////////////////////////////////////////
// Example that creates the "terminations" table + some content.
Termination.sync({ force: true }).then(function () {
    // Insert two rows into the "terminations" table.
    return Termination.bulkCreate([
        { id: 1, zoom_id: '1000', terminate_time: 'Fri, 04 Sep 2020 15:30:58 GMT' },
        { id: 2, zoom_id: '250', terminate_time: 'Fri, 04 Sep 2020 15:30:58 GMT' }
    ]);
}).then(function () {
    // Retrieve terminations.
    return Termination.findAll();
}).then(function (terminations) {
    // Print out the balances.
    terminations.forEach(function (termination) {
        console.log('[' + termination.id + ', ' + termination.zoom_id + ', ' + termination.terminate_time + ']');
    });
    process.exit(0);
}).catch(function (err) {
    console.error('error: ' + err.message);
    process.exit(1);
});

// now we can run from commandline:
// cockroach sql --insecure -e 'SHOW TABLES' --database=zoomkiller
// and
// cockroach sql --insecure -e 'select * from terminations' --database=zoomkiller
//
// REMOVE UNTIL THIS POINT /////////////////////////////////////////////////

exports = {
    Termination
};