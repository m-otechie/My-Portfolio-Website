//looks for docs
const navToggle= document.querySelector('.nav-toggle');

//To select all the nav links
constnavLinks = document.querySelectorAll('.nav__link')

//
navToggle.addEventListener('click', () =>{
    document.body.classList.toggle('nav-open')
});

//ForEach 
navLinks.forEach(link => {
    link.addEventListener('clcik', () =>{
        document.body.classList.remove('nav-open');
    })
});



