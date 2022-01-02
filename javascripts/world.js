var can = document.getElementById("myCanvas");
var ctx = can.getContext("2d");

var canX = 0;
var canY = 0;
var canXS = 0;
var canYS = 0;
var trueX = 0;
var trueY = 0;
var scale = 0;
var scaleAmount = 1;
var canTop = 0;
var canRight = 0;
var canBottom = 0;
var canLeft = 0;
var canTopS = 0;
var canRightS = 0;
var canBottomS = 0;
var canLeftS = 0;
var heightLim = false;

var RF = 0;

var smallest = 0;

window.onload = function() {
    reloadWindow();
}
function reloadWindow() {
    let win = window;
    let doc = document;
    let docElem = doc.documentElement;
    let body = doc.getElementsByTagName('body')[0];
    var xAxis = win.innerWidth || docElem.clientWidth || body.clientWidth;
    var yAxis = win.innerHeight || docElem.clientHeight || body.clientHeight;
    can.width = xAxis;
    can.height = yAxis;
    canX = xAxis;
    canY = yAxis; 
    trueX = xAxis;
    trueY = yAxis;
    //scale = xAxis/500*scaleAmount;
    if (canY/9 > canX/16) {
        heightLim = false;
    }
    else {
        heightLim = true;
    }
    smallest = Math.min(canX/16,canY/9);
    scale = smallest/50*scaleAmount;
    ctx.translate(xAxis/2,yAxis/2);
    ctx.scale(1*scale,-1*scale);
    //console.log(canX + "," + canY);
    if (heightLim) {
        canLeft = (0-canY*(16/9))/2;
        canRight = (canY*(16/9))/2;
        canTop = (canY/2);
        canBottom = (0-canY/2);
    }
    else {
        canLeft = (0-canX/2);
        canRight = (canX/2);
        canTop = (canX/2/(16/9));
        canBottom = (0-canX/2)/(16/9);
    }
    canLeftS = canLeft/scale;
    canRightS = canRight/scale;
    canTopS = canTop/scale;
    canBottomS = canBottom/scale;

    canHeightTrue = canTop*2;
    canWidthTrue = canRight*2;
    
    canXS = xAxis/scale;
    canYS = yAxis/scale;

    RF = (canHeightTrue/900)/scale;

    console.log(canHeightTrue + ',' + canWidthTrue);
}