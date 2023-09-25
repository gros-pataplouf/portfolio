export const enableFilteringBio = () => {
    const toggleLeft = document.getElementById("js__skill-toggle-left");
    const toggleRight = document.getElementById("js__skill-toggle-right");
    const toggleMiddle = document.getElementById("js__skill-toggle-middle");
    const toggleCommand = document.getElementById("js__skill-toggle-command");
    toggleLeft.addEventListener("click", () => {
        console.log("left")

    toggleCommand.setAttribute("style", "transform: translateX(-30px)")
    toggleCommand.style.backgroundColor = "red"})
    toggleRight.addEventListener("click", () => {
        console.log("right")

    toggleCommand.setAttribute("style", "transform: translateX(30px)")
    toggleCommand.style.backgroundColor = "cyan"})
    toggleMiddle.addEventListener("click", () => {
    console.log("middle")
    toggleCommand.setAttribute("style", "transform: translateX(0px)");
    toggleCommand.style.backgroundColor = "purple"})


// const toggleEducation = document.getElementById("js__toggleEducation");
// const toggleWork = document.getElementById("js__toggleWork");

// [toggleEducation, toggleWork].forEach(node => {
//     node.addEventListener("click", () => {
//         node.classList.toggle("fa-toggle-on");
//         node.classList.toggle("fa-toggle-off");
//         if (node.id === "toggleWork") {
//             Array.from(document.getElementsByClassName("js__work-item")).forEach(elt => {
//                 elt.classList.toggle("hidden")
//             })
//         } else if (node.id === "toggleEducation") {
        

//             Array.from(document.getElementsByClassName("js__edu-item")).forEach(elt => {
//                 elt.classList.toggle("hidden")
                
//         })

//         }
//     })
// })
}