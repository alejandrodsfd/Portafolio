/*============== SH=OW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')  
/*============== MENU SHOW ===============*/
// Validacion si la constante existe
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/*============== MENU HIDDEN ===============*/
// Validacion si la constante existe
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))
/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById('contact-form'),
//       contactMessage = document.getElementById('contact-message')

// const sendEmail = (e) =>{
//     e.prevetDefault()

//     emailjs.sendForm('service_lhx2eec', 'template_dipzzum', '#contact-form', 'hzK-VelghKsMMCKIy')
//         .then(() =>{
//              // Show sent message
//             contactMessage.textContent = 'Message sent successfully ✅'   
//         }, () =>{
//             // Show error message
//             contactMessage.textContent = 'Message not sent (service error) ❌'    
//         })
// }
// contactForm.addEventListener('submit', sendEmail)


const btn = document.getElementById('button'),
contactMessage = document.getElementById('contact-message'),
contactForm = document.getElementById('contact-form');


 contactForm.addEventListener('submit', function(event) {
   event.preventDefault();

   const serviceID = 'default_service';
   const templateID = 'template_dipzzum';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
        contactMessage.textContent = 'Message sent successfully ✅';
        // Remove message after five seconds
        setTimeout(()=>{
            contactMessage.textContent = ''
        }, 5000)
        // Clear input fields
        contactForm.reset()
    }, (err) => {
        contactMessage.textContent = 'Message not sent (service error) ❌';
      
    });
});
/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350? scrollUp.classList.add('show-scroll')
                : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionClass = document.querySelector('.nav__menu a[href*='+ sectionId + ']')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else {
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2800,
    delay: 350, 
    //reset:true //repetir animacion

})
sr.reveal(`.home__data, .home__social, .contact__container, .footer__container`)
sr.reveal(`.about__data, .skills__data`, {origin: 'left'})
sr.reveal(`.skills__content`, {origin: 'right'})
sr.reveal(`.services__card, .projects__card`, {interval: 100})