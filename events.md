# Events

```javascript
// Initialisierung einer Zählvariable
let counter = 1;

// Auswahl des HTML-Elements mit der ID 'log' und Speicherung in der Konstanten 'log'
const log = document.querySelector('#log');

// Auswahl des ersten Buttons auf der Seite und Speicherung in der Konstanten 'button'
const button = document.querySelector('button');

// Auswahl des ersten Inputfelds auf der Seite und Speicherung in der Konstanten 'input'
const input = document.querySelector('input');

// Auswahl des ersten Formulars auf der Seite und Speicherung in der Konstanten 'form'
const form = document.querySelector('form');

// Eine Liste von Ereignissen, die in der 'registerEvents' Funktion nicht erfasst werden sollen
const blackList = ['mousemove', 'mouseout'];

// Eine Funktion, die ein Ereignis protokolliert und im 'log'-Bereich anzeigt
function logEvent(name, origin, value) {
  const message = document.createElement('p');
  if(value) {
    message.innerText = `${counter}: "${name}"-Ereignis durch ${origin} mit dem Wert ${value} ausgelöst.`;
  } else {
    message.innerText = `${counter}: "${name}"-Ereignis durch ${origin} ausgelöst.`;
  }
  log.prepend(message);
  counter++;
}

// Eine Funktion, die Ereignisse auf einem gegebenen HTML-Element (hier: 'window') registriert
function registerEvents(element) {
  for(const key in element) {
    if (/^on/.test(key)) {
      const eventName = key.slice(2);
      if(blackList.includes(eventName)) {
        break; // Beendet die Schleife, wenn das Ereignis in der Blacklist ist
      }
      window.addEventListener(eventName, (e) => {
        logEvent(eventName, e.target.nodeName ,e.target.value);
      });
    }
  };
}

// Registrierung von Ereignissen auf dem 'window'-Objekt
registerEvents(window);

// Verhindern, dass die Seite beim Abschicken des Formulars neu geladen wird und so die Protokolle verschwinden.
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
```

**Erklärungen zu den Ereignissen**:

1. **load**:
 - Das `load`-Ereignis tritt auf, wenn das gesamte Dokument und alle Ressourcen, wie Bilder, vollständig geladen sind. Es wird nicht explizit im Code gezeigt, aber es ist ein wichtiges Ereignis im Webseiten-Lebenszyklus.
2. **click**:  
- Das `click`-Ereignis tritt auf, wenn auf das ausgewählte HTML-Element geklickt wird. Im Code wird dieses Ereignis nicht explizit verwendet, aber es ist ein häufig genutztes Ereignis für Schaltflächen.
3. **input**:
- Das `input`-Ereignis tritt auf, wenn der Wert eines Eingabefelds (hier: `<input>`) geändert wird. Dieses Ereignis wird verwendet, um Änderungen im Eingabefeld zu verfolgen und zu protokollieren.
4. **submit**:   
- Das `submit`-Ereignis tritt auf, wenn ein Formular (hier: `<form>`) abgesendet wird, z.B. durch Klicken auf die Schaltfläche "Senden". Im Code wird dieses Ereignis verwendet, um das Neuladen der Seite zu verhindern und die Protokolle beizubehalten.
5. **mousemove** und **mouseout**:
- Diese beiden Ereignisse sind in der `blackList` und werden daher im Code nicht erfasst. `mousemove` tritt auf, wenn die Maus über ein Element bewegt wird, und `mouseout` tritt auf, wenn die Maus ein Element verlässt. Sie werden in diesem Fall bewusst ignoriert.

Die `registerEvents`-Funktion durchläuft die Eigenschaften des `window`-Objekts und erfasst Ereignisse, die mit "on" beginnen, wie z.B. `oninput`. Bei jedem ausgelösten Ereignis wird die `logEvent`-Funktion aufgerufen, um das Ereignis und gegebenenfalls den Wert des auslösenden Elements zu protokollieren.