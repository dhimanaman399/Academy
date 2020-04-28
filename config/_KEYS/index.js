if (process.env.NeV === 'production') {
    module.exports = requrie("./keys-prod.js");
} else {
    module.exports = requrie("./keys-dev.js");
}