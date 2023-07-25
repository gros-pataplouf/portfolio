const toggleMobileNavIcon = document.querySelector("#toggleMobileNavIcon");
const navbar =document.querySelector("#navbar");
toggleMobileNavIcon.addEventListener("click", () => {
    toggleMobileNavIcon.classList.toggle("fa-bars");
    toggleMobileNavIcon.classList.toggle("fa-xmark");
    console.log(navbar);
    navbar.classList.toggle("nav-invisible");
    navbar.classList.toggle("nav-visible");
    })

const jsSpinCarousel = document.getElementById("js__spin_carousel");
const jsCarouselCells = document.getElementsByClassName("carousel_cell");
let counter = 0;
jsSpinCarousel.addEventListener("click", () => {
counter ++;
for (let i = 0; i < jsCarouselCells.length; i++) {
    let cell = jsCarouselCells.item(i);
    cell.setAttribute("style", `transform: rotateY( ${-60*(i+counter)}deg) translateZ(330px)`)
}
})