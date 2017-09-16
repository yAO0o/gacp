const execa = require('execa');
module.exports = async(file, arg) => {
    const { code, stdout } = await execa(file, arg);
    if (code === 0) {
        return stdout.split('\n')[0];
    }
    return null;
};

