const toggleMobileNavIcon = document.querySelector("#toggleMobileNavIcon");
const navbar =document.querySelector("#navbar");
toggleMobileNavIcon.addEventListener("click", () => {
    toggleMobileNavIcon.classList.toggle("fa-bars");
    toggleMobileNavIcon.classList.toggle("fa-xmark");
    console.log(navbar);
    navbar.classList.toggle("nav-invisible");
    navbar.classList.toggle("nav-visible");
    })