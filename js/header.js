/*
  * Author: Nathan Boisleux 2024 *
*/
let header = document.querySelector("header")
let darkBtn = document.querySelector("#darkmode")
let toTopBtn = document.querySelector(".arrowTop")
let logo = document.querySelector("header img")

let mobileNav = document.querySelector("#mobile-nav")
let menu = document.querySelector("#menu-toggle")

// change header parameters
const headerSwap = (headerBoxShadow, headerHeight, headerPadding, headerBackColor) => {
    header.style.boxShadow = headerBoxShadow
    header.style.height = headerHeight
    header.style.padding = headerPadding
    header.style.backgroundColor = headerBackColor
}

// change arrow to top button parameters
const btnTopSwap = (btnDisplay) => {
    toTopBtn.style.display = btnDisplay
}

let swapNav = () => {
    menu.addEventListener("click", () => {
        console.log("swaped")
        mobileNav.classList.toggle("active")
    })
}

// event on scroll
window.addEventListener("scroll", () => {
    // if you scroll more than 20px down
    if (window.scrollY > 20) { 
        headerSwap("var(--bxs)","12vh", ".7rem", "var(--background)")
        btnTopSwap("block")
    } else {
        headerSwap("none","20vh", "3rem", "var(--background)")
        btnTopSwap("none")
    }
})

swapNav()
