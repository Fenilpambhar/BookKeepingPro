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

// Mobile Menu Toggle
function toggleMenu(){
    document.querySelector(".nav-links").classList.toggle("show");
}
