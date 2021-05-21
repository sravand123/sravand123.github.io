
const projects  = document.querySelector('#projects')
const skills    = document.querySelector('#skills');
const experiences = document.querySelector('#experiences');


projects.addEventListener('click',()=>{
    document.getElementById("project-content").scrollIntoView();
})
skills.addEventListener('click',()=>{
    document.getElementById("skill-content").scrollIntoView();
})
experiences.addEventListener('click',()=>{
    document.getElementById("experience-content").scrollIntoView();
})
