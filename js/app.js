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
  
// build the nav
  //loop section
  sectionList.forEach(section => {
    // creat li elmant 
    
    let newLi = document.createElement("li");
    
    // add class
    newLi.classList.add("Liclass");
    // creat a elmant
    let newA = document.createElement("a");
    
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
// const sectionA = document.getElementById('section1')
// console.log(sectionA);
// console.log(sectionA.getBoundingClientRect());
navBuild();
// let Section = whatSection();
// onSection(Section);
//test 
function update() {

  const elemA = document.getElementById('section1');
  const elemB = document.getElementById('section2');
  const elemC = document.getElementById('section3');


  const rectA = elemA.getBoundingClientRect();
  const rectB = elemB.getBoundingClientRect();
  const rectC = elemC.getBoundingClientRect();


  if(rectA.y <= 10 && Math.abs(rectA.y) <= rectA.height){
    elemA.classList.add('your-active-class');
  }else{
    elemA.classList.remove('your-active-class');
  }

  if(rectB.y <= 10 && Math.abs(rectB.y) <= rectB.height){
    elemB.classList.add('your-active-class');
  }else{
    elemB.classList.remove('your-active-class');
  }
  
  if(rectC.y <= 10 && Math.abs(rectC.y) <= rectC.height){
    elemC.classList.add('your-active-class');
  }else{
    elemC.classList.remove('your-active-class');
  }
}

document.addEventListener('scroll', update);
update();
//test


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


