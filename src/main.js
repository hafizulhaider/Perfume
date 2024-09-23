import Aos from "aos";
import "aos/dist/aos.css"

// Toggle Button //
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle("ri-close-large-line")
})

navLink.forEach( link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle("ri-close-large-line")
    })
})

// Scroll up

const goUp = () => {
    const goUpBtn = document.getElementById("scroll-up")
    console.log('Print')
    if(window.scrollY >= 250) {
        goUpBtn.classList.remove("-bottom-1/2")
        goUpBtn.classList.add("bottom-10")
    }
    else{
        goUpBtn.classList.add("-bottom-1/2")
        goUpBtn.classList.remove("bottom-10")
    }
}

window.addEventListener("scroll", goUp)

// Active

const activeLink = () => {
    const sections = document.querySelectorAll("section")
    const navLinks = document.querySelectorAll(".nav-link")

    let current = "hero"

    sections.forEach(section => {
        const sectionTop =section.offsetTop;

        if(window.scrollY >= sectionTop - 60){
            current = section.getAttribute("id")
        }
    })

    navLinks.forEach(item => {
        item.classList.remove("active")
        if(item.href.includes(current)){
            item.classList.add("active")
        }
    })
}

window.addEventListener("scroll", activeLink)


// Animation

Aos.init({
    duration: 1000,
    offset: 100,
})

