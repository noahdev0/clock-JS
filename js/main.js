const secs = document.getElementById('sec');
const mins = document.getElementById('mins');
const hours = document.getElementById('hours');



function clocking(){
    var  today = new Date(),
         hour = today.getHours(),
         min= today.getMinutes(),
         sec=  today.getSeconds();
     let a = 270 + sec*6; 
     let b = 270 + min*6;
     let c = 270 + hour*30;
   secs.style.transform = `rotateZ(${a}deg)`;
   mins.style.transform = `rotateZ(${b}deg)`;
   hours.style.transform = `rotateZ(${c}deg)`;
 return 
} 

setInterval(clocking , 1000);
 
