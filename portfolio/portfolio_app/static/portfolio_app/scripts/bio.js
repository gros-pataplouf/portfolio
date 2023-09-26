export const enableFilteringBio = () => {
    const toggleLeft = document.getElementById("js__skill-toggle-left");
    const toggleRight = document.getElementById("js__skill-toggle-right");
    const toggleMiddle = document.getElementById("js__skill-toggle-middle");
    const toggleCommand = document.getElementById("js__skill-toggle-command");
    toggleLeft.addEventListener("click", () => {
        //push toggle command to the left and only show work related experiences
        toggleCommand.setAttribute("class", "w-7 h-7 md:w-9 md:h-9 absolute transition-colors transition-transform bg-action rounded-full flex justify-center");
        toggleCommand.setAttribute("style", "transform: translateX(-1.66rem");
        Array.from(document.getElementsByClassName("js__work-item")).forEach(elt => {
            elt.classList.remove("hidden")});
        Array.from(document.getElementsByClassName("js__edu-item")).forEach(elt => {
            elt.classList.add("hidden")});

    })
    toggleRight.addEventListener("click", () => {
        //push toggle command to the right and only show study-related experiences
        toggleCommand.setAttribute("class", "w-7 h-7 md:w-9 md:h-9 absolute transition-colors transition-transform bg-terminal rounded-full flex justify-center");
        toggleCommand.setAttribute("style", "transform: translateX(1.66rem)");
        Array.from(document.getElementsByClassName("js__work-item")).forEach(elt => {
            elt.classList.add("hidden")});
        Array.from(document.getElementsByClassName("js__edu-item")).forEach(elt => {
            elt.classList.remove("hidden")});
        })
    toggleMiddle.addEventListener("click", () => {
        //push toggle command to the middle and only show both work and studies
        toggleCommand.setAttribute("class", "w-7 h-7 md:w-9 md:h-9 absolute transition-colors transition-transform bg-lilac rounded-full flex justify-center");
        toggleCommand.setAttribute("style", "transform: translateX(0px");
        Array.from(document.getElementsByClassName("js__work-item")).forEach(elt => {
            elt.classList.remove("hidden")});
        Array.from(document.getElementsByClassName("js__edu-item")).forEach(elt => {
            elt.classList.remove("hidden")});
    })}