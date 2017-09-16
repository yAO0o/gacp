module.exports = (t) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },t)
    })
}
