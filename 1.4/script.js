document.addEventListener("DOMContentLoaded", function(){
    var button = document.getElementById("fizz-button");
    var container = document.getElementById("fizz-list");

    button.addEventListener("click", FizzBuzz);


    function FizzBuzz(){
        for(i = 1; i < 100; i++){
            if(i % 3 == 0 && i % 5 == 0){
                const node = document.createElement("li");
                const textnode = document.createTextNode("FizzBuzz");
                node.appendChild(textnode);
                container.appendChild(node);
            } else if(i % 3 == 0){
                const node = document.createElement("li");
                const textnode = document.createTextNode("Fizz");
                node.appendChild(textnode);
                container.appendChild(node);
            } else if(i % 5 == 0){
                const node = document.createElement("li");
                const textnode = document.createTextNode("Buzz");
                node.appendChild(textnode);
                container.appendChild(node);
            } else {
                const node = document.createElement("li");
                const textnode = document.createTextNode("");
                node.appendChild(textnode);
                container.appendChild(node);
            };
        }
    };
})

