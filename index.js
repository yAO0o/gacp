const git = require('./git');
const index = require('./command');

const initYargsConfig = () => {
    return require('yargs')
        .version()
        .help()
        .argv;
};

const config = initYargsConfig();
index(config);

