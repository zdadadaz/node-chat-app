// Jan 1st 1970 00:00:00 am
var moment = require('moment');

// var date = moment();
// date.add(1,'year');
// console.log(date.format('MMM Do, YYYY'))
// console.log(date.format('h:mm'))
// console.log(date.format('h:mm A'))
var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var cc=1234;
var date = moment(someTimestamp);
console.log(date.format('h:mm A'))
