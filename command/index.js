const git = require('../git');

module.exports = (config) => {
    const message = config._[0] || '.';
    git(message);
};
