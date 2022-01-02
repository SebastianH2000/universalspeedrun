var clicked = false;
var clickedX = 0;
var clickedY = 0;

function mouseDown() {
  if (clicked === false) {
    clickedX = mouseX;
    clickedY = mouseY;
  }
  clicked = true;
}

function mouseUp() {
  clicked = false;
}


(function () {
  document.onmousemove = handleMouseMove;
  document.onpointermove = handleMouseMove;
  document.onclick = handleMouseMove;
  function handleMouseMove(event) {
    var eventDoc, doc, body;

    event = event || window.event; // IE-ism

    // If pageX/Y aren't available and clientX/Y are,
    // calculate pageX/Y - logic taken from jQuery.
    // (This is to support old IE)
    if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }

    mouseX = (event.pageX - (canX / 2)) / RF / scale;
    mouseY = (event.pageY - (canY / 2)) / -RF / scale;
    mouseY = Math.min(mouseY, 450);
    mouseY = Math.max(mouseY, -450);
    mouseX = Math.min(mouseX, 800);
    mouseX = Math.max(mouseX, -800);
    //ctx.fillStyle = 'white';
    //ctx.fillRect((mouseX-10)*RF,(mouseY-10)*RF,20*RF,20*RF);
    //console.log(RF);
    //console.log(mouseX + "," + mouseY);
  }
})();

function toggleBool(x) {
  return !x;
}



//button class
class button {
  constructor(positionType, positionX, positionY, width, height, displayed, text, available) {
    this.positionType = positionType;
    this.positionX = positionX;
    this.positionY = positionY;
    this.width = width;
    this.height = height;
    this.text = text;
    this.displayed = displayed;
    this.available = available;
  }

  draw() {
    if (this.displayed) {
      if (this.available) {
        ctx.strokeStyle = arrToRGB(player['color']['validEdge']);
        ctx.fillStyle = arrToRGB(player['color']['validBtnFillA']);
      }
      else {
        ctx.strokeStyle = arrToRGB(player['color']['invalidEdge']);
        ctx.fillStyle = arrToRGB(player['color']['invalidBtnFillA']);
      }
      if (this.positionType = 'center') {
        ctx.fillRect((this.positionX - this.width / 2) * RF, (this.positionY - this.height / 2) * RF, this.width * RF, this.height * RF);
      }
    }
  }

  click() {
    //console.log(mouseX + ' - ' + (this.positionX+this.width/2) + ' , ' + (this.positionX-this.width/2));
    //console.log(mouseY + ' - ' + (this.positionY+this.height/2) + ' , ' + (this.positionY-this.height/2))
    if (mouseX < (this.positionX + this.width / 2) && mouseX > (this.positionX - this.width / 2) && mouseY < (this.positionY + this.height / 2) && mouseY > (this.positionY - this.height / 2)) {
      return true;
    }
    else {
      return false;
    }
  }
}

class textBox {
  constructor(positionType, positionX, positionY, displayed, text, fontSize, lineSpace, outline, outlineColor, outlineWidth) {
    this.positionType = positionType;
    this.positionX = positionX;
    this.positionY = positionY;
    this.displayed = displayed;
    this.text = text;
    this.fontSize = fontSize;
    this.lineSpace = lineSpace;
    this.currentYLvl = 0;
    this.timer = 0;
    if (outline !== undefined) {
      this.outline = outline;
      if (outlineColor !== undefined) {
        this.outlineColor = outlineColor;
        if (outlineWidth !== undefined) {
          this.outlineWidth = outlineWidth;
        }
      }
    }
    else {
      this.outline = false;
    }
  }

  draw() {
    this.currentYLvl = 0;
    this.currentXLvl = 0;
    ctx.fillStyle = 'white';
    ctx.font = '30px Arial';
    ctx.fillText(0,0,this.text[2]);
    if (this.displayed) {
      if (this.positionType = 'center') {
        if (typeof this.text !== 'string') {
          if (typeof this.text === 'object') {
            for (let i = 0; i < this.text.length; i++) {
              if (i % 3 === 0) {
                this.fillStyle = this.text[i];
              }
              if (i % 3 === 1) {
                if (this.text[i]) {
                  this.currentYLvl -= this.lineSpace;
                  this.currentXLvl = 0;
                }
              }
              if (i % 3 === 2) {
                titleDisplay.fillStyle = rgbToHex(Math.floor(Math.abs(Math.sin(player.uniTimer/4)*255)),50,Math.floor(Math.abs(Math.cos(player.uniTimer/2)*255)));
                ctx.fillStyle = this.fillStyle;
                if (this.outline) {
                  ctx.strokeStyle = this.outlineColor;
                  ctx.lineWidth = this.outlineWidth*RF;
                }
                ctx.font = (this.fontSize + 'px ' + player['font']);
                ctx.scale(1,-1);
                ctx.beginPath();
                ctx.fillText(this.text[i],(this.currentXLvl + this.positionX - ctx.measureText(this.text[i]).width)*RF,((this.positionY - this.fontSize/2) + this.currentYLvl)*-RF);
                if (this.outline) {
                  ctx.strokeText(this.text[i],(this.currentXLvl + this.positionX - ctx.measureText(this.text[i]).width)*RF,((this.positionY - this.fontSize/2) + this.currentYLvl)*-RF);
                }
                ctx.scale(1,-1);
              }
            }
          }
        }
      }
    }
  }
}



function clickedDown() {
  mousePressed = true;

  if (player.menuSelected === 'main') {
    if (loadBtn.click()) {
      loadBtn.available = toggleBool(loadBtn.available);
      titleDisplay.outline = toggleBool(titleDisplay.outline);
    }
  }
}

function clickedUp() {
  mousePressed = false;
}
