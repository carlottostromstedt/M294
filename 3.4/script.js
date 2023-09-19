document.addEventListener("DOMContentLoaded", function(){
    let title = document.querySelector(".title-buttons");
    let grid = document.querySelector(".grid-container");
    let gridItem = document.querySelector(".grid-item");
    let child = document.querySelector(".grid-item").children

    const firstButton = document.createElement("button");
    const textnode1 = document.createTextNode("Add three more");
    firstButton.appendChild(textnode1);
    firstButton.classList.add("btn")
    firstButton.classList.add("btn-light")
    title.appendChild(firstButton);

    const secondButton = document.createElement("button");
    const textnode2 = document.createTextNode("Remove first three");
    secondButton.appendChild(textnode2);
    secondButton.classList.add("btn")
    secondButton.classList.add("btn-light")
    secondButton.classList.add("mx-3")
    title.appendChild(secondButton);

    function addNodes(amountOfNodes){
        for(i = 0; i < amountOfNodes; i++){
            let clone = gridItem.cloneNode(true)
            let randomNumber = Math.floor(Math.random() * 100)
            clone.children[0].src=`https://loremflickr.com/480/480/cd,album,cover?random=${randomNumber}`
            grid.append(clone);
        }
    }

    function removeNodes(amountOfNodes){
        for(i = 0; i < amountOfNodes; i++){
            grid.removeChild(grid.children[0])
        }
    }

    firstButton.addEventListener("click", function(){
        addNodes(3);
    });

    secondButton.addEventListener("click", function(){
        if (grid.children.length > 0){
            removeNodes(3);
        }
    });
});