const toggleMobileNavIcon = document.querySelector("#toggleMobileNavIcon");
const navbar =document.querySelector("#navbar");
toggleMobileNavIcon.addEventListener("click", () => {
    toggleMobileNavIcon.classList.toggle("fa-bars");
    toggleMobileNavIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("nav-invisible");
    navbar.classList.toggle("nav-visible");
    })

const jsSpinCarouselForward = document.getElementById("js__spin_carousel-forward");
const jsSpinCarouselBack = document.getElementById("js__spin_carousel-back");

const jsCarouselCells = document.getElementsByClassName("carousel_cell");
let counter = 0;
jsSpinCarouselBack.addEventListener("click", () => {
counter ++;
for (let i = 0; i < jsCarouselCells.length; i++) {
    let cell = jsCarouselCells.item(i);
    cell.setAttribute("style", `transform: rotateY( ${-60*(i+counter)-5}deg) translateZ(22vw)`)
}
})
jsSpinCarouselForward.addEventListener("click", () => {
    counter --;
    for (let i = 0; i < jsCarouselCells.length; i++) {
        let cell = jsCarouselCells.item(i);
        cell.setAttribute("style", `transform: rotateY( ${-60*(i+counter)-5}deg) translateZ(22vw)`)
    }
    })