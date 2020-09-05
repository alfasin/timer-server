const os = require('os');

module.exports = {
    globalTeardown: '<rootDir>/__tests__/teardown.js',
    maxConcurrency: os.cpus().length,
    moduleFileExtensions: [
        'js',
        'json',
    ],
    rootDir: 'src',
    testEnvironment: 'node',
    testRegex: '/__tests__/.*test\\.js$',
    testTimeout: 1000,
};