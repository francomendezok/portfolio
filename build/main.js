const images = {
    0: 
    {
        src: '../images/projects/battleship.png',
        title: 'Battleship',
        repo: 'https://github.com/francomendezok/battleship',
        web: 'https://francomendezok.github.io/battleship/',
        position: 0
    },
    1: 
    {
        src: '../images/projects/etch.png',
        title: 'Etch A Sketch',
        repo: 'https://github.com/francomendezok/Etch-A-Sketch',
        web: 'https://francomendezok.github.io/Etch-A-Sketch/',
        position: 1
    },
    2: 
    {
        src: '../images/projects/hazlo.png',
        title: 'Etch A Sketch',
        repo: 'https://github.com/francomendezok/hazlo-to-do-list',
        web: 'https://francomendezok.github.io/hazlo-to-do-list/',
        position: 2
    },
    3: 
    {
        src: '../images/projects/prode.png',
        title: 'Prode App',
        repo: 'https://github.com/francomendezok/Prode-Sign-Up-Form',
        web: 'https://francomendezok.github.io/Prode-Sign-Up-Form/',
        position: 3
    },
    4: 
    {
        src: '../images/projects/nocode.png',
        title: 'No Code Builder',
        repo: 'https://github.com/francomendezok/no-code-registration-form',
        web: 'https://francomendezok.github.io/no-code-registration-form/',
        position: 4
    },
    5: 
    {
        src: '../images/projects/landing.png',
        title: 'No Code Builder',
        repo: 'hhttps://github.com/francomendezok/freecodecamp/tree/main/Responsive%20Web%20Design/17.%20Landing%20Page%20(Project)',
        web: 'https://francomendezok.github.io/freecodecamp/Responsive%20Web%20Design/17.%20Landing%20Page%20(Project)/index.html/',
        position: 5
    },
    6: 
    {
        src: '../images/projects/weather.png',
        title: 'Weather App',
        repo: 'https://github.com/francomendezok/weather',
        web: 'https://francomendezok.github.io/weather/',
        position: 6
    },
    7: 
    {
        src: '../images/projects/oblivion.png',
        title: 'Oblivion Restaurant',
        repo: 'https://github.com/francomendezok/restaurant-menu',
        web: 'https://francomendezok.github.io/restaurant-menu/',
        position: 7
    },
}

const inputs = document.querySelectorAll('input[type="radio"]')

inputs.forEach(radio => {
    radio.addEventListener('click', () => {
        let position = radio.dataset.number;
        placeProjects(position);
    })
})
function placeProjects (position) {
    const container = document.getElementById('my-project');
    const img = document.getElementById('my-img');
    const title = document.getElementById('my-title');
    const github = document.getElementById('live-repo');
    const web = document.getElementById('live-web');
    // container.innerHTML = '';

    img.src = images[position].src;
    title.textContent = images[position].title;
    github.textContent = 'Live Repo';
    github.href = images[position].repo;
    web.textContent = 'View Project';
    web.href = images[position].web;
}

placeProjects(0);