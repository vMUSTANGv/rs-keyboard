// alert("Проверь пожалуйста в последний день). Спасибо)");
let obj = {};
let line1 = {
    "Backquote": "`",
    "Digit1": "1",
    "Digit2": "2",
    "Digit3": "3",
    "Digit4": "4",
    "Digit5": "5",
    "Digit6": "6",
    "Digit7": "7",
    "Digit8": "8",
    "Digit9": "9",
    "Digit0": "0",
    "Minus": "-",
    "Equal": "=",
    "Backspace": "Backspace"
};
let line2 = {
    "Tab": "Tab",
    "KeyQ": "q",
    "KeyW": "w",
    "KeyE": "e",
    "KeyR": "r",
    "KeyT": "t",
    "KeyY": "y",
    "KeyU": "u",
    "KeyI": "i",
    "KeyO": "o",
    "KeyP": "p",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Enter": "Enter"
};
let line3 = {
    "CapsLock": "CapsLock",
    "KeyA": "a",
    "KeyS": "s",
    "KeyD": "d",
    "KeyF": "f",
    "KeyG": "g",
    "KeyH": "h",
    "KeyJ": "j",
    "KeyK": "k",
    "KeyL": "l",
    "Semicolon": ";",
    "Quote": "'",
    "Backslash": "\\"
};
let line4 = {
    "ShiftLeft": "Shift",
    "KeyZ": "z",
    "KeyX": "x",
    "KeyC": "c",
    "KeyV": "v",
    "KeyB": "b",
    "KeyN": "n",
    "KeyM": "m",
    "Comma": ",",
    "Period": ".",
    "Slash": "/",
    "ShiftRight": "Shift"
};
let line5 = {
    "ControlLeft": "Control",
    "MetaLeft": "Meta",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Control"
};

document.body.innerHTML = `<div class="container">
  <textarea name="" id="" cols="103" rows="5" class="input"></textarea>
    <div class="keyboard_lines">
      <div class="line line1">${genDiv(line1)}</div>
      <div class="line line2">${genDiv(line2)}</div>
      <div class="line line3">${genDiv(line3)}</div>
      <div class="line line4">${genDiv(line4)}</div>
      <div class="line line5">${genDiv(line5)}</div>
  </div>
  </div>`;
const KEYS = document.querySelectorAll('.key');
const INPUT = document.querySelector('.input');
const CAPSLOCK = document.querySelector('.CapsLock');
CAPSLOCK.classList.remove('key');
const LINE2 = document.querySelector('.line2');
const BACKSPACE = document.querySelector('.Backspace');
//backspace
document.addEventListener('keydown', (e) => {
    if (e.key == 'Backspace') {
        let out = INPUT.textContent;
        INPUT.innerHTML = out.slice(0, -1);
    }
})

//capslock
document.addEventListener('keydown', (e) => {
    if (e.key == 'CapsLock') {
        CAPSLOCK.classList.toggle('active')
    }
})






document.addEventListener('click', (e) => {
    if (e.target.classList.contains('Backspace')) {
        let out = INPUT.textContent;
        INPUT.innerHTML = out.slice(0, -1);
    }
})



document.addEventListener('click', (e) => {
    if (e.target.classList.contains('CapsLock')) {
        CAPSLOCK.classList.toggle('active');
    }
})


document.addEventListener('mousedown', (e) => {

    if (e.target.closest('.key')) {
        e.target.classList.add('active');
    }
    if (e.target.textContent.length < 2) {
        if (CAPSLOCK.classList.contains('active')) {
            INPUT.append(e.target.textContent.toUpperCase());
        } else { INPUT.append(e.target.textContent); }
    }
})
document.addEventListener('mouseup', (e) => {
    if (e.target.closest('.key')) { e.target.classList.remove('active') }
})




let out = '';

function genDiv(line) {
    let out = '';
    for (let key in line) {
        out += `<div id="${key}" class="${key} key">${line[key]}</div>`
            // console.log(key)
    }
    return out;
}

//print key
document.addEventListener('keydown', (e) => {
    for (let item of KEYS) {
        if (e.key == item.textContent && e.key.length < 2) {
            item.classList.add('active');
            INPUT.append(e.key)
        }
    }
})
document.addEventListener('keyup', (e) => {
    console.log(e.key)
    for (let item of KEYS) {
        if (e.key == item.textContent && e.key.length < 2) {
            item.classList.remove('active');
        }
    }
})