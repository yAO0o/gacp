const fs = require('fs');

module.exports = async(file) => {
    return new Promise((resolve) => {
        fs.stat(file, (err, res) => {
            if (err) {
                resolve(false);
            } else {
                resolve(res.isDirectory());
            }
        });
    });
};
