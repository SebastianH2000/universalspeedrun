//rgb functions
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    if (r !== undefined && g == undefined && b == undefined) {
        return "#" + componentToHex(r) + componentToHex(r) + componentToHex(r);
    }
    else {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }
}

function arrToRGB(arr,offset) {
    //console.log(arr)
    let rVal = 0;
    let gVal = 0;
    let bVal = 0;
    //console.log(typeof arr);
    if (typeof arr === 'object') {
        if (offset === undefined) {
            rVal = arr[0];
            gVal = arr[1];
            bVal = arr[2];
        }
        else {
            rVal = arr[offset];
            gVal = arr[offset+1];
            bVal = arr[offset+2];
        }
    }  
    //console.log(arr.typeof);
    return (rgbToHex(rVal,gVal,bVal));
}



//draw rectangle function
function drawRect(x1, y1, x2, y2) {
    ctx.fillRect(x1, y1, x2 - x1, y2 - y1);
}

function drawSquare(x1, y1, size) {
    ctx.beginPath();
    ctx.fillRect(x1, y1, size, size);
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
}



//distance and angle functions
function findDistance(x, y) {
    let d = Math.sqrt((x ** 2) + (y ** 2));
    return d;
}

function calcAngleDegrees(x, y) {
    return Math.atan2(y, x) * 180 / Math.PI;
}