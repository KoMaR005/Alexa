function successfullMessage(msg) {
    return "✅ *Alexa*:  ```" + msg + "```"
}
function errorMessage(msg) {
    return "🛑 *Alexa*:  ```" + msg + "```"
}
function infoMessage(msg) {
    return "⏺️ *Alexa*:  ```" + msg + "```"
}


module.exports = {
    successfullMessage,
    errorMessage,
    infoMessage
}
