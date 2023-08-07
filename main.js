const nav = document.querySelector("nav");
const mobilNav = document.querySelector("nav.mobile-nav");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 60){
        nav.classList.add("scrolled")
        mobilNav.classList.add("scrolled")
    }else{
        nav.classList.remove("scrolled")
        mobilNav.classList.remove("scrolled")
    }

});
