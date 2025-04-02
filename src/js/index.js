import projects from './projects.js'

const rightArrow = document.getElementById('right-arrow')
const leftArrow = document.getElementById('left-arrow')

const profile = document.getElementById('profile-info')
const skills = document.getElementById('skills')

rightArrow.addEventListener('click', () => {
    profile.classList.add('hide')
    rightArrow.classList.add('hide')
    skills.classList.remove('hide')
    leftArrow.classList.remove('hide')
})

leftArrow.addEventListener('click', () => {
    profile.classList.remove('hide')
    rightArrow.classList.remove('hide')
    skills.classList.add('hide')
    leftArrow.classList.add('hide')
})

const projectsEl = document.getElementById('projects')

projects.forEach(project => {
    projectsEl.innerHTML += 
    `<a href="${project.link}" target="_blank">
        <div class="project">
        <img src="${project.image}" alt="${project.alt}">
        <h3>${project.name}</h3>
        </div>
        </a>`
})