const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

canvas.width = visualViewport.width;
canvas.height = visualViewport.height;
let numOfHexagons = 2*Math.round(visualViewport.width / 60*Math.cos(Math.PI/6))
let numOfRows = 2*Math.round(visualViewport.height / 60);
drawRows(0, 32, 30, 8, numOfRows+5)


function drawHexagon(cx, cy, radius) {
    context.translate(cx, cy);
    let region = new Path2D();
    for (let i = 0; i < 6; i++) {
    const rotation = - Math.PI/6 + (Math.PI / 3) * i;

    if (i === 0) {
        region.moveTo(radius * Math.cos(rotation), radius * Math.sin(rotation));

    } else {
        region.lineTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
    }
    }
    const hue = Math.floor(360*Math.random()); 
    context.fillStyle = `hsla(${hue}, 50%, 70%, 0.1)`;
    context.fill(region);
    region.closePath();
    context.strokeStyle= "hsla(215, 40%, 40%, 0.2)";
    context.stroke(region);
}


function drawRow(cx, cy, radius, numOfHex) {
    for (let i = 0; i < numOfHex; i++) {
        if (i === 0){
        drawHexagon(cx, cy, radius)}
    
        else {
            drawHexagon(2*radius*Math.cos(Math.PI/6), 0, radius)
        }
    }
}

function drawRows(cx, cy, radius, numOfHexagons, numOfRows) {
    for (let i = 0; i < numOfRows; i++) {
        if (i === 0 ) {
            drawRow(cx, cy, radius, numOfHexagons); 
        } else if (i % 2 === 0) {
            drawRow(-(numOfHexagons - 1) * Math.cos(Math.PI/6) * 2 * radius - Math.cos(Math.PI/6) * radius , cy, radius, numOfHexagons); 

        }
        else {
            drawRow(-(numOfHexagons - 1) * Math.cos(Math.PI/6) * 2 * radius + Math.cos(Math.PI/6) * radius, cy, radius, numOfHexagons); 

        }
    }
}

setInterval(() => {
    const canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");

    canvas.width = visualViewport.width;
    canvas.height = visualViewport.height;
    let numOfHexagons = 2*Math.round(visualViewport.width / 60*Math.cos(Math.PI/6))
    let numOfRows = Math.round(visualViewport.height / 60)

    drawRows(0, 32, 30, numOfHexagons, numOfRows+15)}, 4000)
