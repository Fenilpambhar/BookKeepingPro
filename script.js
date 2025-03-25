// Loading Animation
window.addEventListener("load", function() {
    document.querySelector(".loading-screen").style.opacity = "0";
    setTimeout(() => {
        document.querySelector(".loading-screen").style.display = "none";
    }, 500);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Mobile Menu Toggle toggleMenu
function toggleMenu(){
    let menu = document.querySelector(".nav-links");
    menu.classList.toggle("show");
    let nav = document.querySelector(".navbar nav");
    nav.style.display = (nav.style.display === "block") ? "none" : "block";
}
