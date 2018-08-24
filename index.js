async function run(params) {

    try {
        var { webarcUrl, csvPath, headers } = require('./readConfig')()
        var csvtojson = require("csvtojson");
        var jsonArray = await csvtojson().fromFile(csvPath);
        var sendToWebarc = require('./sendToWebarc')(webarcUrl, headers)
    } catch (e) {
        console.log('\n\nERROR LOADING:', e, '\n\n')
    }

    for (let row in jsonArray) {
        try {
            let responseFromWebarc = await sendToWebarc(row)
            console.log('\n\n', responseFromWebarc, '\n\n')
        } catch (e) {
            console.log('\n\nERROR SENDING:', e, '\n\n')
        }
    }

    console.log("\n\nAll done\n\n")

}

run()