
//draw a background of hexagonal shapes randomly disposed

export const drawBackground = () => {
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
        //comment in to fill with random color:
        // const hue = Math.floor(360*Math.random()); 
        // context.fillStyle = `hsla(${hue}, 50%, 70%, 0.6)`;
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

}

//show a scroll up button if site has been scrolled down at least 100px;

export const addScrollUpButton = () => {

const scrollUpButton = document.getElementById("js__scroll_up");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100 && scrollUpButton.classList.contains("hidden")) {
        scrollUpButton.classList.remove("hidden");
        scrollUpButton.classList.add("flex");}
    else if (window.scrollY < 100 && scrollUpButton.classList.contains("flex")) {
        scrollUpButton.classList.remove("flex");
        scrollUpButton.classList.add("hidden");}
            
    })


scrollUpButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
})}



export const addMobileNav = () => {
//make the hamburger button clickable to show mobile nav

const toggleMobileNavIcon = document.querySelector("#toggleMobileNavIcon");
const navbar = document.querySelector("#navbar");
toggleMobileNavIcon.addEventListener("click", () => {
    toggleMobileNavIcon.classList.toggle("fa-bars");
    toggleMobileNavIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("js__nav-invisible");
    navbar.classList.toggle("js__nav-visible");
    })
}

// enable language switching
const languageSwitcherButtons = document.getElementsByClassName("js__language-switcher");

export const languageSwitcher = () => Array.from(languageSwitcherButtons).forEach(element => {
    element.addEventListener("click", (e) => {
        const path = window.location.pathname.replaceAll("/", ",/,").split(",");
        const newPath = path.map(i => i === 'en' || i == 'fr' ||  i == 'de' ? e.target.getAttribute('data') : i ).join("");
        console.log(e.target.getAttribute("data"));
        window.location.pathname = newPath;
    })
});
