export function filterProjectsBySkills () {
    const skillItems = document.querySelectorAll(".js__skill");
    const spinner = document.getElementById("js__skill-spinner");
    const projectWrapper = document.getElementById("js__project-wrapper");
    skillItems.forEach(item => item.addEventListener('click', (e) => {
        spinner.classList.toggle("hidden");
        projectWrapper.classList.toggle("hidden");
        e.target.classList.toggle("bg-shade/50");
        e.target.classList.toggle("js__skill_active");
        let skillsArr = [];
        if (window.location.search) {
            skillsArr = window.location.search.replace("?", "")
            .split("&")
            .filter(item => item.includes("skills="))[0]
            .split("=")[1].split(",")
        }
        const targetId = e.target.id.replace("_", "")
        if (targetId == "0") {
            return window.location = window.location.href.split("?")[0] //delete query string if reset button (id _0) is hit
        }
        if (!skillsArr.includes(targetId)) { // if skill id is not in the query string, append id
            console.log(skillsArr, targetId)
            window.location = window.location.href.split("?")[0] + "?" + "skills=" + [...skillsArr, targetId].join(",")
        } else {
            const newSkillsArrayString = skillsArr.filter(q => q != targetId).join(",")
            window.location = window.location.host + window.location.pathname + newSkillsArrayString.length && "?skills=" + newSkillsArrayString
        }
    }))
}
