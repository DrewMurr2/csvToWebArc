let fs = require('fs')
function returnConfig(params) {
    let file = fs.readFileSync('./config.json')
    let jsonConfig = JSON.parse(file)
    return jsonConfig
}

module.exports = returnConfig

