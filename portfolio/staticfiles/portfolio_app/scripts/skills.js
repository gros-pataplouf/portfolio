export const animateSkillCarousel = () => {
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
        const skillNodeList = document.querySelectorAll(".js__show_skill_description");

        skillNodeList.forEach(skill => {
            skill.addEventListener("click", () => { 
                let nextDiv =  skill.childNodes[1];
                nextDiv.classList.toggle("hidden");
            })
        })
    }