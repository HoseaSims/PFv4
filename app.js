const add = document.querySelector('#add')
const remove = document.querySelector('#remove')
const home = document.querySelector('.home')
const nav = document.querySelector('.nav')

nav.addEventListener('click', e =>{

    if(e.target.id === 'home'){
        home.innerHTML = "<div><h1>I'm Hosea</h1><p>A frontend web Developer</p></div>"
    }
    else if(e.target.id === 'skills'){
        home.innerHTML = "<div><h2>Some of my many Skills</h2></div>"
    }
    else if(e.target.id === 'Projects'){
        home.innerHTML = "<div><h2>Projects</h2></div>"
    }
    else if(e.target.id === 'Contact'){
        home.innerHTML = "<div><h2>Hoseasims21@gmail.com</h2></div>"
    }
    
})