/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.getElementsByClassName('navSection');
const navBar = document.getElementById('navBarList');


/**
 * End Global Variables
 * Begin Main Functions
 * 
*/


// build the nav
function secBuild() {
    for (let section of sections) {
        let theSections = document.createElement('li');
        const theAncher = document.createElement('a');
        theAncher.className = 'sectionsLink';
        theAncher.dataset.nav = section.id;
        theAncher.innerText = section.dataset.nav;
        theSections.appendChild(theAncher);
        navBar.appendChild(theSections);
    };
}



// Scroll to anchor ID using scrollTO event
function scrollTo() {
    for (let section of sections) {
        const listID = section.id;
        let link = document.querySelector(`a[data-nav = '${listID}']`);
        link.addEventListener('click', function () {
            section.scrollIntoView({ behavior: 'smooth' });
        });
    }
}



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu
secBuild();

// Scroll to section on link click
scrollTo();

