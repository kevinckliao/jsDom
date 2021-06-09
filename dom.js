// Start date of 台灣 國小 109學年度 下學期 第ㄧ周 : 2021-02-21
var dateStart = new Date("2021-02-21T00:00:00.000+08:00"); //reguest a UTC+8 timestamp of 2021/2/21
//var dateStart = new Date("2021-06-09T00:00:00.000+08:00");

var msStart = dateStart.getTime();
var msNow = Date.now();  // you got Local, UTC+8, timestamp in ms

//var hourDiff = Math.floor ((msNow - msStart) / 3600000);
//console.log(hourDiff);

var weekNo =  Math.floor((msNow - msStart) / ( 7* 24 * 3600000)) + 1;
console.log( weekNo );

if ((weekNo % 2) == 0) {
  console.log("偶數周");
} else {
  console.log("奇數周");
}
