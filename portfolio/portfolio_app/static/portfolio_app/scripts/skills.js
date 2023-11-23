export const animateSkillCarousel = () => {
    const jsSpinCarouselForward = document.getElementById("js__spin_carousel-forward");
    const jsSpinCarouselBack = document.getElementById("js__spin_carousel-back");

    const jsCarouselCells = document.getElementsByClassName("carousel_cell");
    let counter = 0;
    jsSpinCarouselBack.addEventListener("click", () => {
    console.log("click")
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
        const skillNodeList = document.querySelectorAll(".js__show_skill_description");

        skillNodeList.forEach(skill => {
            skill.addEventListener("mouseover", (e) => {
                const dialog =  e.target.querySelector("dialog");
                dialog && dialog.classList.toggle("hidden");
            })
        })

        skillNodeList.forEach(skill => {
            skill.addEventListener("click", (e) => {
                const dialog =  e.target.querySelector("dialog");
                dialog.classList.toggle("hidden");
            })
        })


        const closeIconList = document.querySelectorAll(".js__close-skill-description");
        closeIconList.forEach(icon => {
            icon.addEventListener("mouseover", (e)  => {
                icon.closest("dialog").classList.toggle("hidden");
            })
        })
    }