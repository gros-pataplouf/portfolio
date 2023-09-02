import {drawBackground, addMobileNav, addScrollUpButton} from './scripts/main.js';
import { animateSkillCarousel } from './scripts/skills.js';
import { enableFilteringBio } from './scripts/bio.js';
import { optimizeContactForm } from './scripts/contact.js';
import { filterProjectsBySkills } from './scripts/projects.js';

drawBackground();
addMobileNav();
addScrollUpButton();

switch (window.location.pathname.replaceAll("/", "")) {
    case 'bio':
        enableFilteringBio();
        break;
    case 'projects':
        filterProjectsBySkills();
        break;
    case 'skills':
        animateSkillCarousel();
        break;
    case 'contact':
        optimizeContactForm();
        break;
    default:
        break;
}