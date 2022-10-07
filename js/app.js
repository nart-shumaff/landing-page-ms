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
// 

//const sectionList = ['section1','section2','section3','section4','section5'];
const sectionList = document.querySelectorAll('[data-nav]');

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
    newA.innerText = section.dataset.nav;
    //add link href = (.setAttribute('href', '#url'))
    //newA.setAttribute('href',`#${section.id}`);

    newA.addEventListener('click',(e) => {
      //e.preventDefault();
      console.log(section);
      section.scrollIntoView({       
        behavior : 'smooth'
      });
    })
    // set innerHTML of the li to a
    newLi.appendChild(newA);
    //add class to links  
    //newLi.classList.add(section.dataset.nav);
    // append Child(li) to nav(ul)
    navUl.appendChild(newLi);
    console.log(newLi)

  }
)
    
  }
  // Add class 'active' to section when near top of viewport
  // Scroll to anchor ID using scrollTO event

// const sectionA = document.getElementById('section1')
// console.log(sectionA);
// console.log(sectionA.getBoundingClientRect());
navBuild();
// let Section = whatSection();
// onSection(Section);
//test 

// // get all section element and element boundingclient 
// // in an arry
// const elemList = [];
// const rectList = [];
//   sectionList.forEach(section => {
//     let elem = document.getElementById(`${section}`);
//     elemList.push(elem);
//     rectList.push(elem.getBoundingClientRect())
//     console.log(`${section}`)
//   })



function update() {
  // get all section element
  const elemA = document.getElementById('section1');
  const elemB = document.getElementById('section2');
  const elemC = document.getElementById('section3');
  const elemD = document.getElementById('section4');
  const elemE = document.getElementById('section5');
  // get element boundingclient in to var's
  const rectA = elemA.getBoundingClientRect();
  const rectB = elemB.getBoundingClientRect();
  const rectC = elemC.getBoundingClientRect();
  const rectD = elemD.getBoundingClientRect();
  const rectE = elemE.getBoundingClientRect();
  // get nav elements 



  // if element is in view add active-class else remove
  if(rectA.y <= 20 && Math.abs(rectA.y) <= (rectA.height - 5)){
    elemA.classList.add('your-active-class');
    
  }else{
    elemA.classList.remove('your-active-class');

  }
  // if element is in view add active-class else remove
  if(rectB.y <= 20 && Math.abs(rectB.y) <= rectB.height - 5){
    elemB.classList.add('your-active-class');
  }else{
    elemB.classList.remove('your-active-class');
  }
  // if element is in view add active-class else remove
  if(rectC.y <= 20 && Math.abs(rectC.y) <= rectC.height - 5){
    elemC.classList.add('your-active-class');
  }else{
    elemC.classList.remove('your-active-class');
  }
  // if element is in view add active-class else remove
  if(rectD.y <= 20 && Math.abs(rectD.y) <= rectD.height - 5){
    elemD.classList.add('your-active-class');
  }else{
    elemD.classList.remove('your-active-class');
  }
  // if element is in view add active-class else remove
  if(rectE.y <= 20 && Math.abs(rectE.y) <= rectE.height - 5){
    elemE.classList.add('your-active-class');
  }else{
    elemE.classList.remove('your-active-class');
  }
}

// do update if scroll 
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


