var player = {
    version: 1,
    menuSelected: 'main',
    font: 'Arial',
    uniTimer: 0,
    color: {
        guideSpace: [60,60,60],
        background: [0,0,0],
        text: [255,255,255],
        validEdge: [255,255,255],
        invalidEdge: [255,50,50],
        validBtnFillA: [80,80,80],
        validBtnFillHover: [100,100,100],
        invalidBtnFillA: [120,0,0],
    }
}

var loadBtn = new button ('center',0,200,400,50,true,'LOAD',true);
var titleDisplay = new textBox ('center',0,350,true, ['#FF00FF',false,'Universal Speedrun'], 60, 50, true, '#FFFFFF', 1);
var mousePressed = false;