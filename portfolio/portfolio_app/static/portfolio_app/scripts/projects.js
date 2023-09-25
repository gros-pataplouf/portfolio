export async function filterProjectsBySkills () {
    const skillItems = document.querySelectorAll(".js__skill");
    const projects = document.querySelectorAll(".js__project");
    const spinner = document.getElementById("js__skill-spinner");
    const projectWrapper = document.getElementById("js__project-wrapper");
    const projectPlaceholder = document.getElementById("js__project-placeholder");

    skillItems.forEach(item => item.addEventListener('click', (e) => {
        spinner.classList.toggle("hidden");
        projectWrapper.classList.toggle("hidden");
        projects.forEach(project => {
        project.setAttribute("style", "display: grid");
    })

    setTimeout(() => {
        spinner.classList.toggle("hidden");
        projectWrapper.classList.toggle("hidden");
        e.target.classList.toggle("bg-shade/50");
        e.target.classList.toggle("js__skill_active");
        const activeSkills = document.querySelectorAll(".js__skill_active");
        const skillList = Array.from(activeSkills).map(_ => {
            return _.innerText;
        })
        let relevantProjects = false;
        
        // fix horrible O(n²) complexity :()
        projects.forEach(project => {
            skillList.forEach(skill => {
                const projectSkills =  Array.from(project.querySelectorAll(".js__project_skill")).map(skillItem => {return skillItem.innerText});
                if (!projectSkills.some(projectSkill => projectSkill === skill)) {
                    project.setAttribute("style", "display: none");
                };
            });
            if(!relevantProjects && project.getAttribute("style") !== "display: none") {
                relevantProjects = true;
            }
        });
        !relevantProjects ? projectPlaceholder.classList.remove("hidden") : projectPlaceholder.classList.add("hidden");
   
    }, 1000)

}))
}
