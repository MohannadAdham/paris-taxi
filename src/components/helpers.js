// A function that parse ISO string and convert it to a date object
const parseISOString = (s) => {
    var b = s.split(/\D+/);
    return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
    }
    

// A function that converts duration in seconds to HHMMSS format
const convertToHHMMSS = (duration) => {
    var sec_num = parseInt(duration, 10); 
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}


// A function that calculates the end time of the ride based on the start time and the duration
// startTime in ISO string format, duration in seconds
// returns End time in ISO string format
const calculateEndTime = (startTime, duration) => {

    // Convert the start time from ISO string to Date object
    const startTimeJS = parseISOString(startTime);
    // Add the duration of the ride to the start time to obtain the end time
    let endTimeJS = new Date();
    endTimeJS.setTime(startTimeJS.getTime() + duration * 1000);
    const endTime = endTimeJS.toISOString();
    return endTime;
}


// A function that calculates the price of the ride
const calculatePrice = (distance, startTime) => {
    let result = 1 + (distance/(1/5) * 0.5);
    const startTimeJS = parseISOString(startTime);
    if (startTimeJS.getHours() >= 20 || startTimeJS.getHours() < 6) {
        console.log("Night time");
        result += 0.5;
    } else if (startTimeJS.getHours() >= 16 && startTimeJS.getHours() < 19) {
        console.log("Busy period");
        result += 1;
    }
    return result;
}


export default calculatePrice;
export {
    parseISOString,
    convertToHHMMSS,
    calculateEndTime
};