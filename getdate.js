// Date object
let today = new Date();
let date = today.getFullYear()+'-'+(today.getMonth()+1)+' '+today.getDate();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// Current Date and Time
let dateTime = date+' '+time;
  
document.getElementById("date-sub").innerHTML = dateTime;