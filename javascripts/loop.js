document.addEventListener("DOMContentLoaded", function () {
    let currentTime = Date.now();
    setInterval(mainLoop, 20);
    //setInterval(slowLoop, 1000);
    let elapsedTime = Date.now() - currentTime;

    function mainLoop() {
        elapsedTime += Date.now() - currentTime;
        currentTime = Date.now();
        if (elapsedTime > 100) { elapsedTime = 100 };
        while (elapsedTime > 20) {
            elapsedTime -= 20;
            //do stuff
            mainGameLoop();
        }
        updateDisplay();
    }
});

function mainGameLoop() {
    player.uniTimer += 1/50;
}

function updateDisplay() {
    let win = window;
    let doc = document;
    let docElem = doc.documentElement;
    let body = doc.getElementsByTagName('body')[0];
    var xAxis = win.innerWidth || docElem.clientWidth || body.clientWidth;
    var yAxis = win.innerHeight || docElem.clientHeight || body.clientHeight;
    if (trueX !== xAxis || trueY !== yAxis) {
        reloadWindow();
    }

    ctx.fillStyle = arrToRGB(player['color']['guideSpace']);
    ctx.fillRect(-(trueX/scale)/2, -(trueY/scale)/2, trueX/scale, trueY/scale);

    ctx.fillStyle = arrToRGB(player['color']['background']);

    ctx.fillRect(-800*RF, -450*RF, 1600*RF, 900*RF);






    //ctx.fillRect(canLeftS,canBottomS,canWidthTrue/scale,canHeightTrue/scale);

    /*ctx.fillStyle = 'black';
    ctx.fillRect(-40*RFWScale,40*RFHScale,40*RFWScale,40*RFHScale);
    ctx.fillRect(40*RFWScale,40*RFHScale,40*RFWScale,40*RFHScale);
    ctx.fillRect(-40*RFWScale,-40*RFHScale,40*RFWScale,40*RFHScale);
    ctx.fillRect(40*RFWScale,-40*RFHScale,40*RFWScale,40*RFHScale);

    ctx.strokeStyle = 'red';
    drawLine(canLeftS,canBottomS,canLeftS,canTopS);
    drawLine(canLeftS,canTopS,canRightS,canTopS);
    drawLine(canRightS,canTopS,canRightS,canBottomS);
    drawLine(canRightS,canBottomS,canLeftS,canBottomS);
    drawLine(0,10,10,10);*/
    loadBtn.draw();
    titleDisplay.draw();
}