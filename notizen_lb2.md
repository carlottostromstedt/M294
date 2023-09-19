# Gelernt aus der LB2 - Probeprüfung

## EventListener

1. `click`: Fires when an element is clicked by the user.
2. `mousedown`: Occurs when the mouse button is pressed down over an element.
3. `mouseup`: Occurs when the mouse button is released over an element.
4. `mouseover`: Triggered when the mouse pointer enters an element.
5. `mouseout`: Fired when the mouse pointer leaves an element.
6. `mousemove`: Occurs when the mouse pointer is moved over an element.
7. `keydown`: Fires when a keyboard key is pressed.
8. `keyup`: Triggered when a keyboard key is released.
9. `input`: Occurs when the value of an `<input>`, `<textarea>`, or `<select>` element changes.
10. `change`: Fired when the value of an `<input>`, `<select>`, or `<textarea>` element changes and loses focus.
11. `submit`: Occurs when a form is submitted.
12. `focus`: Triggered when an element receives focus.
13. `blur`: Fired when an element loses focus.
14. `load`: Occurs when a page or an element (e.g., an image) has finished loading.
15. `unload`: Fired when a page is about to be unloaded (e.g., when navigating away from a page).
16. `resize`: Triggered when the browser window is resized.
17. `scroll`: Occurs when an element with a scrollbar is scrolled.
18. `DOMContentLoaded`: Fired when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
19. `hashchange`: Occurs when the URL hash (fragment identifier) changes.
20. `touchstart`, `touchmove`, `touchend`: Events for handling touch interactions on touchscreen devices.

### Window event

```javascript
window.addEventListener('click', event => {
	target = event.target;
	canton = target.classList[0];
	target.classList.add("uncovered")
	// or
	target.classList.toggle("uncovered")
});
```

### Sleep

```javascript
function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}
```

### Adding nodes

```javascript
document.addEventListener("DOMContentLoaded", function(){

	let title = document.querySelector(".title-buttons");
	let grid = document.querySelector(".grid-container");
	let gridItem = document.querySelector(".grid-item");
	let child = document.querySelector(".grid-item").children

	const firstButton = document.createElement("button");
	// alternative 1
	const textnode1 = document.createTextNode("Add three more");
	firstButton.appendChild(textnode1);
	// alternative 2
	firstButton.innerText = "Add three more";
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
```


## querySelect & querySelectAll

### Wie kann aus jeder ungeordneten Liste der erste Eintrag selektiert werden?

```javascript
document.querySelectorAll("ul li:nth-child(1)")

//oder
  
document.querySelectorAll("ul li:first-child")
```

### Wie kann ich alle Element mit einer Klasse einholen?

```javascript
document.querySelectorAll('.rot')

//oder

document.getElementsByClassName('rot')
```

### Wie können alle Gemüse selektiert werden, wofür keine Farbe definiert ist, sprich, das Attribut 'class' fehlt?

```javascript
document.querySelectorAll('li:not(.gruen):not(.rot)')

//oder

document.querySelectorAll('li:not([class])')
```

### Wie können alle li-Elemente mit Sommergemüse selektiert werden (li Elemente aus dem ul nach dem H2 Sommergemüse)?

```javascript
document.getElementById('sommer').nextElementSibling.getElementsByTagName('li')

// oder

document.querySelectorAll('#sommer + ul li')

// xxx diese gehen nicht !!!!
  
document.getElementById('#sommer').nextSibling.getElementsByTagName('li')
document.querySelectorAll('#sommer ul li')
document.querySelectorAll('#sommer > ul li')
```


### Wie können alle Kinderelemente von der letzten ungeordneten Liste ausgegeben werden (es hat 4 uls)?

```javascript
document.getElementsByTagName('ul')[3].children

//oder

const ul = document.getElementsByTagName('ul');  
ul[ul.length - 1].children

//oder
  
document.querySelector('ul:last-of-type').children

// xxx dies geht nicht !!!

document.querySelector('ul:last-child').children

```

### Wie können alle roten Gemüse entfernt werden?

```javascript
document.getElementsByClassName('rot').removeAll()

// oder

document.querySelectorAll(".rot").delete()

// oder

document.querySelectorAll(".rot").forEach(n => n.remove())


```

### Wie kann dem Kürbis die Farbe orange als CSS Klasse hinzugefügt werden?

```javascript

const gemuese = document.getElementsByTagName('li');
for(let g of gemuese) {
  if(g.innerText === "Kürbis") {
    g.classList.add('orange');
  }
}

// oder


const gemuese = document.querySelectorAll('li');
for(let g of gemuese) {
  if(g.innerText === "Kürbis") {
    g.classList.add('orange');
  }
}

```

### Wie kann der Liste mit Frühlingsgemüse der Spargel hinzugefügt werden?

```javascript
  
const fruehlingsListe = document.querySelector('#fruehling + ul'); const spargel = document.createElement('li'); spargel.innerText = 'Spargel'; fruehlingsListe.appendChild(spargel);

```

### Entfernen und verstecken von DOM elementen

```javascript
// entfernen
const sommerTitel = document.getElementById('sommer');
sommerTitel.remove();

// Verstecken, der reservierte Platz des Elements wird freigegeben und die nachfolgenden Elemente rutschen nach
const sommerTitel = document.getElementById('sommer');
sommerTitel.style.display = 'none';

// Verstecken, der reservierte Platz des Elements bleibt bestehen und nichts verrutscht.
const sommerTitel = document.getElementById('sommer');
sommerTitel.style.visibility = 'hidden';

```


## CSS Animieren

```css
.anim-2{
width: 100px;
height: 100px;
background-color: blue;
transition: background-color 2s, color 2s, font-size 2s, transform 2s, width 2s, height 3s;
}

.anim-trans{
width: 800px;
height: 500px;
background-color: blueviolet;
color:goldenrod;
font-size: 250px;
}

.fade-element {
opacity: 1;
transition: opacity 0.5s ease;
}

.fade {
opacity: 0;
}
```

```javascript
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
```

### More examples

1. **Simple Hover Effect**: This example creates a smooth transition when you hover over a button, changing its background color:
   
```html
<style>
  .button {
    background-color: #3498db;
    transition: background-color 0.3s ease;
  }
  .button:hover {
    background-color: #2980b9;
  }
</style>

<button class="button">Hover me</button>

```

2. **Scaling on Hover**: This example scales an image when you hover over it:
   
```html
<style>
  .image {
    width: 100px;
    transition: transform 0.3s ease;
  }
  .image:hover {
    transform: scale(1.2);
  }
</style>

<img src="your-image.jpg" alt="Image" class="image">
```

3. **Fade In/Out**: Create a fade-in effect for an element when it's displayed or hidden:

```html
<style>
  .fade-element {
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  .fade-element.show {
    opacity: 1;
  }
</style>

<div class="fade-element">This element fades in and out.</div>
```

4. **Color Change on Click**: Change the color of a text when clicking a button:

```html
<style>
  .color-change {
    color: #333;
    transition: color 0.5s ease;
  }
  .color-button:hover + .color-change {
    color: #e74c3c;
  }
</style>

<button class="color-button">Change Color</button>
<p class="color-change">Text whose color will change.</p>
```


5. **Slide In From Left**: Create a sliding effect for an element to enter from the left:

```html
<style>
  .slide-element {
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }
  .slide-element.show {
    transform: translateX(0);
  }
</style>

<div class="slide-element show">Slide in from the left</div>

```