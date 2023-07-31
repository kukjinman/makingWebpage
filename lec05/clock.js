
const curtime = new Date()

const timeString = String(curtime.getHours()).padStart(2, "0") + ":" + String(curtime.getMinutes()).padStart(2, "0") + ":" + String(curtime.getSeconds()).padStart(2, "0")
alert(timeString)
