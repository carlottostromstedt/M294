document.addEventListener("DOMContentLoaded", function(){
    let button = document.querySelector("#choose");

    button.addEventListener("click", chooseCountry);

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function chooseCountry(){
        removeClass2();
        let min = 0;
        let max = 193;
        let randomNumber = Math.floor(Math.random() * (max - min) + min);
        let destinations = document.querySelector("#destinations");
        
        for(i = 0; i < randomNumber; i++){
            console.log(i)
            let childNode = destinations.children[i];
            sleep(1000)
            childNode.classList.add("country-bold");
            setTimeout(removeClass, 1000);
        }
        let childNode = destinations.children[randomNumber];
        sleep(1000)
        childNode.classList.add("country-bold2")
        childNode.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" })
    }

    function removeClass(){
        var elems = document.querySelectorAll(".country-bold");

        elems.forEach((el) => {
            el.classList.remove("country-bold");
        });
    }

    function removeClass2(){
        var elems = document.querySelectorAll(".country-bold2");

        elems.forEach((el) => {
            el.classList.remove("country-bold2");
        });
    }
});