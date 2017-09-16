const getInfoFromShell = require('../../lib/getInfoFromShell');

module.exports = async() => {
    const info = await getInfoFromShell('git', ['status', '-s']);
    if (info === '') {
        return false;
    }
    return true;
};
