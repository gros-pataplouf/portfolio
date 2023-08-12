export const enableFilteringBio = () => {

const toggleEducation = document.getElementById("toggleEducation");
const toggleWork = document.getElementById("toggleWork");

[toggleEducation, toggleWork].forEach(node => {
    node.addEventListener("click", () => {
        node.classList.toggle("fa-toggle-on");
        node.classList.toggle("fa-toggle-off");
        if (node.id === "toggleWork") {
            Array.from(document.getElementsByClassName("js__work-item")).forEach(elt => {
                elt.classList.toggle("hidden")
            })
        } else if (node.id === "toggleEducation") {
        

            Array.from(document.getElementsByClassName("js__edu-item")).forEach(elt => {
                elt.classList.toggle("hidden")
                
        })

        }
    })
})}