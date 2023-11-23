function getQueryObj(searchStr, queryObj=null) {
    if (queryObj == null) {
        queryObj = {}
    }
    const searchString = window.location.search.replace("?", "")
    const searchStringArr = searchString.split("&")
    for (let item of searchStringArr) {
        queryObj[item.split("=")[0]] =  item.split("=")[1].split(",")
    }
    return queryObj;
}


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
        const queryObj = window.location.search && getQueryObj(window.location.search);
        if (window.location.search && Object.keys(queryObj).includes("skills")) {
            skillsArr = queryObj.skills;
        }
        const targetId = e.target.id.replace("_", "")
        if (targetId == "0") {
            return window.location.href = window.location.href.split("?")[0] //delete query string if reset button (id _0) is hit
        }
        if (!skillsArr.includes(targetId)) { // if skill id is not in the query string, append it
            window.location.href = window.location.href.split("?")[0] + "?" + "skills=" + [...skillsArr, targetId].join(",")
        } else {
            console.log(skillsArr)
            const newSkillsArrayString = skillsArr.filter(q => q != targetId).join(",")
            let query = "";
            if (newSkillsArrayString) {
                query = `?skills=${newSkillsArrayString}`
            }
           window.location.href = window.location.pathname + query;
        }
    }))
}
