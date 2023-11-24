/* prettier-plugin-tailwind disabled */


const images = {
    0: 
    {   
        src: './images/projects/nocode.png',
        title: 'No Code Builder',
        repo: 'https://github.com/francomendezok/no-code-registration-form',
        web: 'https://francomendezok.github.io/no-code-registration-form',
        position: 0
    },
    1: 
    {
        src: './images/projects/etch.png',
        title: 'Etch A Sketch',
        repo: 'https://github.com/francomendezok/Etch-A-Sketch',
        web: 'https://francomendezok.github.io/Etch-A-Sketch/',
        position: 1
    },
    2: 
    {
        src: './images/projects/hazlo.png',
        title: 'Hazlo ToDo List',
        repo: 'https://github.com/francomendezok/hazlo-todo-list',
        web: 'https://francomendezok.github.io/hazlo-todo-list/',
        position: 2
    },
    3: 
    {
        src: './images/projects/prode.png',
        title: 'Prode App',
        repo: 'https://github.com/francomendezok/Prode-Sign-Up-Form',
        web: 'https://francomendezok.github.io/Prode-Sign-Up-Form/',
        position: 3
    },
    4: 
    {
        src: './images/projects/battleship.png',
        title: 'Battleship',
        repo: 'https://github.com/francomendezok/battleship',
        web: 'https://francomendezok.github.io/battleship/',
        position: 4   
    },
    5: 
    {
        src: './images/projects/weather.png',
        title: 'Weather App',
        repo: 'https://github.com/francomendezok/weather',
        web: 'https://francomendezok.github.io/weather/',
        position: 5
    },
    6: 
    {
        src: './images/projects/oblivion.png',
        title: 'Oblivion Restaurant',
        repo: 'https://github.com/francomendezok/restaurant-menu',
        web: 'https://francomendezok.github.io/restaurant-menu/',
        position: 6
    },
}

const inputs = document.querySelectorAll('input[type="radio"]');
const firstInput = document.querySelector('input[data-number="0"]');


inputs.forEach(radio => {
    radio.addEventListener('click', () => {
        let position = radio.dataset.number;
        placeProjects(position);
    })
})
function placeProjects (position) {
    const img = document.getElementById('my-img');
    const title = document.getElementById('my-title');
    const github = document.getElementById('live-repo');
    const web = document.getElementById('live-web');

    img.src = images[position].src;
    title.textContent = images[position].title;
    github.href = images[position].repo;
    web.href = images[position].web;
    img.style.width = '36rem';
    img.style.height = '36rem';
}

const selectFlag = document.getElementById('select-flag');
const english = document.getElementById('english');
const spanish = document.getElementById('spanish');
const flag = document.getElementById('flag');

// selectFlag.addEventListener('change', () => {
//     if (selectFlag.value === 'EN') flag.src = './images/usa.png';
//     if (selectFlag.value === 'SP') flag.src = './images/arg.png';
//     translate();
// })


function translate () {
    const home = document.getElementById('text-home');
    const about = document.getElementById('text-about');
    const projects = document.getElementById('text-projects');
    const contact = document.getElementById('text-contact');
    const english = document.getElementById('english');
    const spanish = document.getElementById('spanish');
    
    const webDeveloper = document.getElementById('web-developer');
    
    const presentation = document.getElementById('text-title');
    const textP1 = document.getElementById('text-p-1');
    const textP2 = document.getElementById('text-p-2');
    const textP3 = document.getElementById('text-p-3');
    const textP4 = document.getElementById('text-p-4');



    const skillsText = document.getElementById('p-skills');

    const projectsText = document.getElementById('p-projects');
    const liveRepo = document.getElementById('live-repo');
    const liveWeb = document.getElementById('live-web');

    const textContact = document.getElementById('text-contact-h3');


    home.textContent === "Home" ? home.textContent = "Inicio" : home.textContent = "Home";
    about.textContent === "About" ? about.textContent = "Franco" : about.textContent = "About";
    projects.textContent === "Projects" ? projects.textContent = "Proyectos" : projects.textContent = "Projects";
    contact.textContent === "Contact" ? contact.textContent = "Contacto" : contact.textContent = "Contact";
    english.textContent === "English" ? english.textContent = "Ingles" : english.textContent = "English";
    spanish.textContent === "Spanish" ? spanish.textContent = "Español" : spanish.textContent = "Spanish";

    webDeveloper.textContent === "WEB DEVELOPER" ? webDeveloper.textContent = "DESARROLLADOR WEB" : webDeveloper.textContent = "WEB DEVELOPER";

    presentation.textContent === "I am Franco!" ? presentation.textContent = "Soy Franco!" : presentation.textContent = "I am Franco!";
    textP1.innerHTML === `I am a Front-End Developer from <span id="text-span-1" style="color: #18bdec; font-weight: 500;">Argentina</span> who loves to learn and create with new technologies.` ? textP1.innerHTML = `Soy un Desarrollador Front-End <span style="color: #18bdec; font-weight: 500;">Argentino</span>. Me encanta aprender y crear con nuevas tecnologías.` : textP1.innerHTML = `I am a Front-End Developer from <span id="text-span-1" style="color: #18bdec; font-weight: 500;">Argentina</span> who loves to learn and create with new technologies.`;
    textP2.innerHTML === `My focus is <span id="text-span-2" style="color: #18bdec; font-weight: 500;">Business</span> and <span id="text-span-3" style="color: #18bdec; font-weight: 500;">Marketing-driven,</span> so I can help your Business with a new <span id="text-span-4" style="color: #18bdec; font-weight: 500;">Website</span>, Landing page, Form, or interface that you might need to implement.` ? textP2.innerHTML = `Mi foco esta orientado a una perspectiva de <span style="color: #18bdec; font-weight: 500;">Negocios</span> y <span style="color: #18bdec; font-weight: 500;">Marketing,</span>. De este modo puedo ayudar a su negocio con un nuevo <span style="color: #18bdec; font-weight: 500;">Sitio web</span>, Landing Page, Formulario o interfaz que necesites implementar.` : textP2.innerHTML = `My focus is <span id="text-span-2" style="color: #18bdec; font-weight: 500;">Business</span> and <span id="text-span-3" style="color: #18bdec; font-weight: 500;">Marketing-driven,</span> so I can help your Business with a new <span id="text-span-4" style="color: #18bdec; font-weight: 500;">Website</span>, Landing page, Form, or interface that you might need to implement.`; 
    textP3.innerHTML === `Also, I know the importance of a <span id="text-span-5" style="color: #18bdec; font-weight: 500;">Great Design</span>, fast and <span id="text-span-6" style="color: #18bdec; font-weight: 500;">Responsive Website</span> and good <span id="text-span-7" style="color: #18bdec; font-weight: 500;">SEO</span>.` ? textP3.innerHTML = `Además, entiendo la importancia de un <span style="color: #18bdec; font-weight: 500;">gran diseño</span>, un sitio web rápido y <span style="color: #18bdec; font-weight: 500;">Responsive</span> y un buen <span style="color: #18bdec; font-weight: 500;">posicionamiento</span> en buscadores.` : textP3.innerHTML = `Also, I know the importance of a <span id="text-span-5" style="color: #18bdec; font-weight: 500;">Great Design</span>, fast and <span id="text-span-6" style="color: #18bdec; font-weight: 500;">Responsive Website</span> and good <span id="text-span-7" style="color: #18bdec; font-weight: 500;">SEO</span>.`;
    textP4.innerHTML === `I find coding to be a useful tool for providing clients with the right <span id="text-span-8" style="color: #18bdec; font-weight: 500;">solutions</span> to their problems. My focus is always on creating a better <span id="text-span-9" style="color: #18bdec; font-weight: 500;">User Experience</span> above all.` ? textP4.innerHTML = `La programación web es una herramienta útil para proporcionar a los clientes las <span style="color: #18bdec; font-weight: 500;">soluciones</span> adecuadas a sus problemas. Mi enfoque siempre está en crear una mejor <span style="color: #18bdec; font-weight: 500;">Experiencia de usuario</span> por sobre todo.` : textP4.innerHTML = `I find coding to be a useful tool for providing clients with the right <span id="text-span-8" style="color: #18bdec; font-weight: 500;">solutions</span> to their problems. My focus is always on creating a better <span id="text-span-9" style="color: #18bdec; font-weight: 500;">User Experience</span> above all.`;

    skillsText.textContent === "Skills" ? skillsText.textContent = "Habilidades" : skillsText.textContent = "Skills";
    
    projectsText.textContent === "Projects" ? projectsText.textContent = "Proyectos" : projectsText.textContent = "Projects";
    liveRepo.textContent === "Live Repo" ? liveRepo.textContent = "Ver Código" : liveRepo.textContent = "Live Repo";
    liveWeb.textContent === "View Project" ? liveWeb.textContent = "Web" : liveWeb.textContent = "View Project";

    textContact.textContent === "Contact" ? textContact.textContent = "Contacto" : textContact.textContent = "Contact";

}

const menu = document.getElementById('menu-icon');
const nav = document.getElementById('nav');


menu.addEventListener('click', () => {
    nav.classList.toggle('hidden');
    nav.classList.toggle('flex');

})

// firstInput.click();

