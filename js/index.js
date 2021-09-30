const navToggle=document.querySelector(".nav_toggle");
const navMenu=document.querySelector(".nav_menu");

navToggle.addEventListener("click",()=>{
    navMenu.classList.toggle("nav_menu_visible");
    if(navMenu.classList.contains("nav_menu_visible")){
        navToggle.setAttribute("aria-label","Close menu");
    }else{
        navToggle.setAttribute("aria-label","Open menu");
    }
});

const menuLinks=document.querySelectorAll(".nav_menu a[href^=\"#\"]");

menuLinks.forEach(menuLinks=>{
    menuLinks.addEventListener("click",function(){
       navMenu.classList.remove("nav_menu_visible"); 
    })
})