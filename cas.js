var currentTime = Date.now()
var GMT = -(new Date()).getTimezoneOffset()/60;
var totalSeconds = Math.floor(currentTime/1000);
seconds = ('0' + totalSeconds % 60).slice(-2);
var totalMinutes = Math.floor(totalSeconds/60);
minutes = ('0' + totalMinutes % 60).slice(-2);
var totalHours = Math.floor(totalMinutes/60);
hours = ('0' + (totalHours+GMT) % 24).slice(-2);
var timeDisplay = hours + ":" + minutes + ":" + seconds;
console.log(timeDisplay);