const { Connection, Request } = require("tedious");
const config = require('./dbConfig')

const connection = new Connection(config);

connection.on("connect", err => {
    if (err) {
        console.error(err.message);
    } else {
        console.log('Connected!')
    }
});
connection.connect()

module.exports = connection