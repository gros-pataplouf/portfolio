export const filterProjectsBySkills = () => {
    const skillItems = document.querySelectorAll(".js__skill");
    const projects = document.querySelectorAll(".js__project");

    skillItems.forEach(item => item.addEventListener('click', (e) => {
        projects.forEach(project => {
        project.setAttribute("style", "display: block");
        console.log(project);
    })
    e.target.classList.toggle("bg-shade/50");
    e.target.classList.toggle("js__skill_active");
    const activeSkills = document.querySelectorAll(".js__skill_active");
    const skillList = Array.from(activeSkills).map(_ => {
        return _.innerText;
    })
    projects.forEach(project => {
        skillList.forEach(skill => {
            const projectSkills =  Array.from(project.querySelectorAll(".js__project_skill")).map(skillItem => {return skillItem.innerText});
            if (!projectSkills.some(projectSkill => projectSkill === skill)) {
                project.setAttribute("style", "display: none");
                            }            
        })
    })

}))
}
