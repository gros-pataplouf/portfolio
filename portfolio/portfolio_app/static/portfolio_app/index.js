import {drawBackground, addMobileNav, addScrollUpButton, languageSwitcher} from './scripts/main.js';
import { animateSkillCarousel } from './scripts/skills.js';
import { optimizeContactForm } from './scripts/contact.js';
import { filterProjectsBySkills } from './scripts/projects.js';

drawBackground();
addMobileNav();
addScrollUpButton();
languageSwitcher();

if (window.location.pathname.includes('projects')) { 
    filterProjectsBySkills();
}
else if (window.location.pathname.includes('skills')) {
    animateSkillCarousel();
}
else if (window.location.pathname.includes('contact')) {
    optimizeContactForm();
}