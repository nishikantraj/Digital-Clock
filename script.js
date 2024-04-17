tm = document.querySelector(".time")


setInterval(function(){
    let date = new Date();
    tm.innerHTML = date.toLocaleTimeString();
},1000);