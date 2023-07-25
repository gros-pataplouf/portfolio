
const canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let radius = 30;
let overlap = radius;

canvas.width = visualViewport.width;
canvas.height = visualViewport.height;
const numOfHexagons = 2*Math.round(visualViewport.width / 60*Math.cos(Math.PI/6))
const numOfRows = 2*Math.round(visualViewport.height / 60) + 5;
let randomStructure = [];
function isShown(numOfHex, index) {
    return Math.floor(Math.random()*numOfHex/3) < Math.floor(numOfHex/10);
}

for (let j = 0; j < numOfRows; j++){
    let randomRow = [];
    for (let i = 0; i < numOfHexagons; i++) {
        randomRow.push(isShown(numOfHexagons, i))
    };
    randomStructure.push(randomRow); 
}




function drawHexagon(cx, cy, radius, position, row) {
    context.translate(cx, cy);
    let region = new Path2D();
    for (let i = 0; i < 6; i++) {
    const rotation = - Math.PI/6 + (Math.PI / 3) * i;

    if (i === 0) {
        region.moveTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
        
    } else {
        region.lineTo(radius * Math.cos(rotation), radius * Math.sin(rotation));
    }
};
if (randomStructure[row][position]) {
    const hue = Math.floor(360*Math.random()); 
    context.fillStyle = `hsla(${hue}, 50%, 70%, 0.6)`;
        // context.fill(region);
        region.closePath();
        context.strokeStyle= "hsla(215, 30%, 50%, 0.2)";
        context.stroke(region);
    }
    
}


function drawRow(cx, cy, radius, numOfHex, row) {
    for (let i = 0; i < numOfHex; i++) {
        if (i === 0){
        drawHexagon(cx, cy, radius, i+1, row)}
    
        else {
            drawHexagon(2*radius*Math.cos(Math.PI/6), 0, radius, i+1, row)
        }
    }
}

function drawRows(cx, cy, radius, numOfHexagons, numOfRows) {
    // if (visualViewport.width < 768) {
    //     return null;
    // }
    for (let i = 0; i < numOfRows; i++) {
        if (i === 0 ) {
            drawRow(cx, cy, radius, numOfHexagons, i); 
        } else if (i % 2 === 0) {
            drawRow(-(numOfHexagons - 1) * Math.cos(Math.PI/6) * 2 * radius - Math.cos(Math.PI/6) * radius , cy, radius, numOfHexagons, i); 
        }
        else {
            drawRow(-(numOfHexagons - 1) * Math.cos(Math.PI/6) * 2 * radius + Math.cos(Math.PI/6) * radius, cy, radius, numOfHexagons, i); 
            
        }
    }
}



drawRows(0, overlap, radius, numOfHexagons, numOfRows)


window.addEventListener("resize", () => {
    const canvas = document.getElementById("canvas");
    canvas.width = visualViewport.width;
    canvas.height = visualViewport.height;
    drawRows(0, overlap, radius, numOfHexagons, numOfRows)

})
