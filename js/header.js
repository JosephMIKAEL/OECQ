let header = document.querySelector("header")
let darkBtn = document.querySelector("#darkmode")
let toTopBtn = document.querySelector(".arrowTop")
let logo = document.querySelector("header img")


// change header parameters
function headerSwap(headerBoxShadow, headerHeight, headerPadding, headerBackColor) {
    header.style.boxShadow = headerBoxShadow
    header.style.height = headerHeight
    header.style.padding = headerPadding
    header.style.backgroundColor = headerBackColor

}
// change arrow to top button parameters
function btnTopSwap(btnDisplay) {
    toTopBtn.style.display = btnDisplay
}
// event on scroll
window.addEventListener("scroll", () => {
    // if you scroll more than 20px down
    if (window.scrollY > 20) { 
        headerSwap("0 10px 15px var(--secondary)","12vh", ".7rem", "var(--background)")
        btnTopSwap("block")
    } else {
        headerSwap("none","20vh", "3rem", "var(--background)")
        btnTopSwap("none")
    }
})