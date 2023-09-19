const cantons = ['ag', 'ar', 'bl', 'fr', 'gl', 'ju', 'ne', 'ow', 'sh', 'sz', 'ti', 'vd', 'zg', 'ai', 'be', 'bs', 'ge', 'gr', 'lu', 'nw', 'sg', 'so', 'tg', 'ur', 'vs', 'zh'];


const getFlagPath = function (canton) {
  return `../2.4/img/${canton}.png`;
}



document.addEventListener('DOMContentLoaded', function () {
    let pairs = 0
    let score = 0
    let scoreElement = document.querySelector(".score")

    startGame();
  
    console.log(cantonsShuffledDouble);

    let uncovered;
    
    window.addEventListener('click', event => {
      uncoverCards(event);
    });

    async function uncoverCards(event){
      target = event.target;
      canton = target.classList[0];
      target.classList.add("uncovered")
      target.setAttribute('src', getFlagPath(canton))
      let uncovered = document.querySelectorAll(".uncovered").length
      console.log(document.querySelectorAll(".uncovered"))
      
      if(uncovered == 2){
        console.log("uncovered!")
        cardsUncovered = document.querySelectorAll(".uncovered");
        console.log(cardsUncovered)
        if(cardsUncovered[0].classList[0] == cardsUncovered[1].classList[0]){
          cardsUncovered[0].classList.add("permanentely-uncovered");
          cardsUncovered[1].classList.add("permanentely-uncovered");
          cardsUncovered.forEach(function(value){
            canton = value.classList[0];
            value.classList.remove("uncovered")
          });
          score++;
          scoreElement.innerText = score;
          if(score == 10){
            const container = document.querySelector('.fireworks')
            const fireworks = new Fireworks.default(container)
            fireworks.start()
            await sleep(2000)
            score = 0;
            startGame();
            await sleep(3000)
            fireworks.stop()
            container.innerHTML = "";
          }
        } else {
          await sleep(1000)
          cardsUncovered = document.querySelectorAll(".uncovered");
          cardsUncovered.forEach(function(value){
            canton = value.classList[0];
            if(value.classList.contains("permanently-uncovered")){

            } else {
            value.classList.remove("uncovered")
            value.setAttribute('src', "img/card_back.jpg")
            };
          });
        }
      };
    };
    
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function shuffle(array){
  let currentIndex = array.length,  randomIndex;

  while (currentIndex > 0) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function startGame(){
  const playground = document.getElementById('playground');
    playground.innerHTML = "";
    cantonsShuffled = shuffle(cantons).slice(0,10)
    cantonsShuffledDouble = cantonsShuffled.concat(shuffle(cantonsShuffled));
    cantonsShuffledDouble.forEach(function (value) {
      const tile = document.createElement('div');
      const tileImage = document.createElement('img');
      //tileImage.setAttribute('src', getFlagPath(value));
      tileImage.setAttribute('src', "img/card_back.jpg");
      tileImage.classList.add(`${value}`)
      tileImage.classList.add("card-back")
      tile.appendChild(tileImage);
      playground.appendChild(tile);
    });
};
