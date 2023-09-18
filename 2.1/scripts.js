//2.1.1
let capital = document.querySelector(".voy-qb-item-value1").innerText
// result = Sofia


//2.1.2
let regionCount = document.querySelectorAll(".voy-regionName").length
// result = 5

// 2.1.3
nature = document.querySelectorAll('[data-group="nature"]')

nature.forEach((entry) => {
    console.log(entry.querySelector(".p-name").innerText)
});
/*
Result:
Biosphärenreservat Srebarna
Pirin Nationalpark
Balkangebirge
Piringebirge
Rilagebirge
Rhodopen
Witoschagebirge
*/

//2.3.4
let area = document.querySelector(".voy-qb-item-area").innerText
// result: 'Fläche\t110.994 km²'
