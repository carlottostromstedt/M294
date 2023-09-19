document.addEventListener("DOMContentLoaded", function(){
    let anim = document.querySelector(".anim-2")
    let fade = document.querySelector(".fade-element")

    

    anim.addEventListener("click", function(){
        anim.classList.toggle("anim-trans");
    });

    fade.addEventListener("mouseover", function(){
        fade.classList.toggle("fade");
    });

})

