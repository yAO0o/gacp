const path = require('path');
const fse = require('fs-extra');

const cwd = process.cwd();
module.exports = async() => {
    const isFileExsits = await fse.pathExists(path.join(cwd, '.git'));
    if (isFileExsits) {
        return true;
    } else {
        return false;
    }
};
