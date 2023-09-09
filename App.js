//time format
function formatTime(part){
return part < 10 ? '0' + part: part;
}

let date = new Date();
let utcTime = date.toUTCString();
//array for days
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
let day = days[date.getUTCDay()];

let dat = date.getDate();

//Array for months 
const months = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "Octorber", "November", "December"];

let month = months[date.getMonth()];

let year = date.getFullYear();

// time struture
let minutes =  formatTime(date.getMinutes());
let seconds =  formatTime(date.getSeconds());
let milliseconds = date.getMilliseconds();
let hour =  formatTime(date.getHours());
let period;
if (hour >= 12) {
    period='pm';
    if (hour >= 12){
        hour = hour - 12;
        
    }
} else {
    period = 'am';
}

document.getElementById('currentUtcTime').textContent = `${hour}: ${minutes}: ${seconds}: ${milliseconds} ${period}`;
document.getElementById("currentDayOfTheWeek").textContent = ` ${day}, ${dat} ${month} ${year}`;



console.log(date);