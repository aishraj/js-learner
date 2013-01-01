var filterStrength = 20;
var frameTime = 0, lastLoop = new Date(), thisLoop;
var canvas, ctx;


function startWatch() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    var currentDateTime = new Date();

    var hours = currentDateTime.getHours();
    if (hours < 10) {
        hours = "0" + hours;
    }

    var minutes = currentDateTime.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    var seconds = currentDateTime.getSeconds();
    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var timeString = hours + ':' + minutes + ':' + seconds;

    ctx.font = 'bold ' + canvas.width / 7 + 'px sans-serif';

    var dim = ctx.measureText(timeString);

    var y = (canvas.height - 30) / 2;
    var x = (canvas.width - dim.width) / 2;

    ctx.fillText(timeString, x, y);   
    
      var thisFrameTime = (thisLoop=new Date()) - lastLoop;
      frameTime+= (thisFrameTime - frameTime) / filterStrength;
      lastLoop = thisLoop;

}

$(document).ready(function() {
    canvas = $('#canvas')[0];
    ctx = canvas.getContext('2d');
    setInterval(startWatch,1000);
    var fpsOut = document.getElementById('fps');
    setInterval(function(){
      fpsOut.innerHTML = (1000/frameTime).toFixed(1) + " fps";
    },1000);
});
