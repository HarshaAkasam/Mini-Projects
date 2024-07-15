function fun(){
    milliseconds = setInterval(updateMilliSecond,10);
    seconds = setInterval(updateSecond,1000);
    minutes = setInterval(updateMinute,60000);
    hours = setInterval(updateHour,3600000);
}
function updateMilliSecond() {
    let x = document.getElementsByClassName("Meera")[0];
    var num = parseInt(x.innerHTML);
    x.innerHTML = (num+1)%1000;
}
function updateSecond() {
    let x = document.getElementsByClassName("sandhya")[0];
    var num = parseInt(x.innerHTML);
    x.innerHTML = (num +1)%60;
}
function updateMinute(){
    let x = document.getElementsByClassName("Madhu")[0];
    var num = parseInt(x.innerHTML);
    x.innerHTML = (num+1)%60;
}
function updateHour(){
    let x = document.getElementsByClassName("Hasini")[0];
    var num = parseInt(x.innerHTML);
    x.innerHTML = num + 1;
}
var seconds,minutes,hours,milliseconds;
function stp(){
    clearInterval(milliseconds);
    clearInterval(seconds);
    clearInterval(minutes);
    clearInterval(hours);
}
function rst(){
    clearInterval(milliseconds);
    clearInterval(seconds);
    clearInterval(minutes);
    clearInterval(hours);
    document.getElementsByClassName("Meera")[0].innerHTML = "00";
    document.getElementsByClassName("sandhya")[0].innerHTML = "00";
    document.getElementsByClassName("Madhu")[0].innerHTML = "00";
    document.getElementsByClassName("Hasini")[0].innerHTML = "00";
}