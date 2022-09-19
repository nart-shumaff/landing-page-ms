/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


const sectionList = ['section1','section2','section3'];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

function navBuild() {
  // get ul elmant, to appnd child
  const navUl = document.getElementById('navbar__list');
  console.log(navUl);
// build the nav
  //loop section
  sectionList.forEach(section => {
    // creat li elmant 
    console.log(section);
    let newLi = document.createElement("li");
    console.log(newLi);
    // add class
    newLi.classList.add("Liclass");
    // creat a elmant
    let newA = document.createElement("a");
    console.log(newA);
    // add class
    newA.classList.add("menu__link");
    //add inar text
    newA.innerText = section
    //add link href = (.setAttribute('href', '#url'))
    newA.setAttribute('href',`#${section}`);
    // set innerHTML of the li to a
    newLi.appendChild(newA);
    //add class to links  
    newLi.classList.add(section);
    // append Child(li) to nav(ul)
    navUl.appendChild(newLi);
  }
  )
    
  }
  // Add class 'active' to section when near top of viewport
  // Scroll to anchor ID using scrollTO event
function whatSection(){
  // 
}


navBuild();
// let Section = whatSection();
// onSection(Section);




/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


