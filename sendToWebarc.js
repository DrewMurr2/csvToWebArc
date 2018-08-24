var request = require('request');
var urlEncode = require('./urlEncode')
module.exports = function (url, headers) {
    return async function send(row) {
        return new Promise((resolve, reject) => {
            request({ method: 'POST', url, headers, json: true, body: urlEncode(row) }, function (err, remoteResponse, remoteBody) {
                if (err) reject(err)
                resolve({ remoteResponse, remoteBody })
            })
        })
    }
}


