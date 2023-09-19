document.addEventListener("DOMContentLoaded", function(){
    let carets = document.querySelectorAll(".caret");

    carets.forEach(function(caret){
    caret.addEventListener("click", function() {
        console.log("click")
        this.parentElement.querySelector(".nested").classList.toggle("active");
        this.classList.toggle("caret-down");
    });
    })
});