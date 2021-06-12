// Start date of 台灣 國小 109學年度 下學期 第ㄧ周 : 2021-02-21
var dateStart = new Date("2021-02-21T00:00:00.000+08:00"); //reguest a UTC+8 timestamp of 2021/2/21
//var dateStart = new Date("2021-06-09T00:00:00.000+08:00");

//count time diff, calculate week# for even/odd weeks
var msecStart = dateStart.getTime();
var msecNow = Date.now();  // get msec of Local-Time
var weekNo =  Math.floor((msecNow - msecStart) / ( 7* 24 * 3600000)) + 1;

// get Today's Date & Week String
const dateNow = new Date();
const weekdayStr = [ '日','ㄧ','二','三','四','五','六' ];

// assembly display string
var msgWeek = '今天 ' + dateNow.toLocaleDateString() + ' 第' + weekNo + '周 星期' + weekdayStr[dateNow.getDay()] ;
if ((weekNo % 2) == 0) {  msgWeek += " 偶數周"; } 
else { msgWeek += " 奇數周"; }

//console.log(msgWeek);

//
// check which session this time is
//
//console.log('Now: ' + Date().toLocaleString().slice(16,21));

function sessionNum () {
  const timeStrNow =  Date().toLocaleString().slice(16,21) ;
  
  if ( timeStrNow >= "15:00" && timeStrNow <="15:40") { return 3; }
  else return 0;
}
//console.log( 'Current Session Number is ' + sessionNum());

//
// get Table item
//
function markSess (weekType, dayNum, sessNum) {
  var tableEl = document.getElementsByTagName('table') ;
  console.log(tableEl);

  cellEl = tableEl[weekType].getElementsByTagName('td');
  //console.log(cellEl[ 5 + (dayNum-1) + sessNum*4]); 
  cellEl[ 5 + (dayNum-1) + sessNum*4].style.backgroundColor = '#fa520f' ;
}
//tableEl[5].style.backgroundColor = '#99999999' ;

markSess(0,2,1);
markSess(0,3,0);
markSess(1,1,0);
