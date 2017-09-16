const getInfoFromShell = require('../../lib/getInfoFromShell');

module.exports = async() => {
    return await getInfoFromShell('git', ['remote']);
};
