// this will be a greeting based on some criteria - getDay is getting the wrong day.
var today = new Date();
var dayNow = today.getDay();
var weekday;

if (dayNow === 0) {
    weekday = 'Sunday';
} else if (dayNow === 1) {
    weekday = 'Monday';
}  else if (dayNow === 2) {
    weekday = 'Tuesday'; 
}  else if (dayNow === 3) {
    weekday = 'Wednesday';  
}  else if (dayNow === 4) {
    weekday = 'Thursday'; 
}  else if (dayNow === 5) {
    weekday = 'Friday'; 
}  else if (dayNow === 6) {
    weekday = 'Saturday'; 
} else {
    weekday = 'Today';
}

document.write('<h3>' + weekday + ' is a great day for hiking!</h3>');