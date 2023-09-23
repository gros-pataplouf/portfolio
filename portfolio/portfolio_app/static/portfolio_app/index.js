import {drawBackground, addMobileNav, addScrollUpButton} from './scripts/main.js';
import { animateSkillCarousel } from './scripts/skills.js';
import { enableFilteringBio } from './scripts/bio.js';
import { optimizeContactForm } from './scripts/contact.js';
import { filterProjectsBySkills } from './scripts/projects.js';

drawBackground();
addMobileNav();
addScrollUpButton();

if (window.location.pathname.includes('bio')) {
    enableFilteringBio();
}
else if (window.location.pathname.includes('projects')) { 
    filterProjectsBySkills();
}
else if (window.location.pathname.includes('skills')) {
    animateSkillCarousel();
}
else if (window.location.pathname.includes('contact')) {
    optimizeContactForm();
}

const languageSwitcherButtons = document.getElementsByClassName("js__language-switcher");

Array.from(languageSwitcherButtons).forEach(element => {
    element.addEventListener("click", (e) => {
        const path = window.location.pathname.replaceAll("/", ",/,").split(",");
        const newPath = path.map(i => i === 'en' || i == 'fr' ||  i == 'de' ? e.target.getAttribute('data') : i ).join("")
        window.location.pathname = newPath;
    })
});