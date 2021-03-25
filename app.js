const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const home = document.querySelector('.home')
const nav = document.querySelector('.nav')
const infoBox = document.querySelector('.info-box')
const body = document.querySelector('body')

infoBox.classList.add('visible')

let test = `<div>

            </div>`

nav.addEventListener('click', e =>{

    if(e.target.id === 'home'){
        home.classList.add('hidden')
        setTimeout(() =>{
            home.classList.remove('hidden')
            home.innerHTML = "<div><h1>I'm Hosea</h1><p>A frontend Web Developer!</p></div>"
        }, 700)
        
    }
    else if(e.target.id === 'skills'){
        home.classList.add('hidden')
        setTimeout( () =>{
            home.classList.remove('hidden')
            home.innerHTML = `<div>
            
            <h2>Some of my many Skills</h2>
            <i class="fab skill-icons fa-html5"></i>
      <p>HTML</p>
      <i class="fab skill-icons fa-css3-alt"></i>
      <p>CSS</p>
      <i class="fab skill-icons fa-js-square"></i>
      <p>JavaScript</p>
      <i class="fab skill-icons fa-react"></i>
      <p>React</p>
            
            </div>`
        }, 700) 
        
        
    }
    else if(e.target.id === 'Projects'){
        home.classList.add('hidden')
        body.classList.add('bodyH')
        setTimeout( () =>{
            home.classList.remove('hidden')
            home.innerHTML = `<div>
            <h2>Projects</h2>
            <div class="project-cards">
            <img src="/PFv4/img/Weather-app img.png">
            <div class="container">
              <h3><b>Weather App</b></h3>
              <p>A weather app constructed with HTML, CSS, JavaScript, and the AccuWeather API. Simple and straightforward. Users can search for a city or zip code to acquire the location, temperature, and current condition using the AccuWeather API. Displays changing background images depending on current conditions. </p>
            </div>

            <div class="project-cards">
            <img src="/PFv4/img/todo app image.png">
            <div class="container">
              <h3><b>Todo App</b></h3>
              <p>Todo list constructed with HTML, CSS and JavaScript</p>
            </div>

            <div class="project-cards">
            <img src="/PFv4/img/DinnerDeciderOrange.png">
            <div class="container">
              <h3><b>Dinner Decider</b></h3>
              <p>Enter the future where machines make all the decisions for you. A simple app for the indecisive. made with HTML, CSS, JavaScript</p>
            </div>






          </div>`
        }, 700)
    }
    else if(e.target.id === 'Contact'){
        home.classList.add('hidden')
        setTimeout(() =>{
            home.classList.remove('hidden')
            home.innerHTML = `<div class='contact'>
            <h2>Hoseasims21@gmail.com</h2>
            <a href="mailto:Hoseasims21@gmail.com"
        ><i class="fas fa-envelope"></i></a>
      <a href="https://github.com/HoseaSims" target="_blank"
        ><i class="fab fa-github"></i></a>
            </div>`
        }, 700)
    }
    
})