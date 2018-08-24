module.exports = function urlEncode(obj) {
    var str = ""
    var notFirst
    for (var prop in obj) {
        str += (notFirst ? "&" : '') + encodeURIComponent(prop) + "=" + encodeURIComponent(obj[prop])
        notFirst = true
    }
    return str
}