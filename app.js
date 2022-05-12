let line1en = {
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
let line2en = {
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
let line3en = {
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
let line4en = {
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
let line5en = {
    "ControlLeft": "Control",
    "MetaLeft": "Meta",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Control"
};

let line1ru = {
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
let line2ru = {
    "Tab": "Tab",
    "KeyQ": "й",
    "KeyW": "ц",
    "KeyE": "у",
    "KeyR": "к",
    "KeyT": "е",
    "KeyY": "н",
    "KeyU": "г",
    "KeyI": "ш",
    "KeyO": "щ",
    "KeyP": "з",
    "BracketLeft": "[",
    "BracketRight": "]",
    "Enter": "Enter"
};
let line3ru = {
    "CapsLock": "CapsLock",
    "KeyA": "ф",
    "KeyS": "ы",
    "KeyD": "в",
    "KeyF": "а",
    "KeyG": "п",
    "KeyH": "р",
    "KeyJ": "о",
    "KeyK": "л",
    "KeyL": "д",
    "Semicolon": "ж",
    "Quote": "э",
    "Backslash": "\\"
};
let line4ru = {
    "ShiftLeft": "Shift",
    "KeyZ": "я",
    "KeyX": "ч",
    "KeyC": "с",
    "KeyV": "м",
    "KeyB": "и",
    "KeyN": "т",
    "KeyM": "ь",
    "Comma": "б",
    "Period": "ю",
    "Slash": "/",
    "ShiftRight": "Shift"
};
let line5ru = {
    "ControlLeft": "Control",
    "MetaLeft": "Meta",
    "AltLeft": "Alt",
    "Space": " ",
    "AltRight": "Alt",
    "ControlRight": "Control"
};
let lang = 0;

document.addEventListener("keydown", function(zEvent) {
    if (zEvent.ctrlKey && zEvent.altKey) {
        console.log(lang)
        if (lang == 0) {
            lang += 1;
        } else { lang -= 1 }
        return lang;

    }
});


function genDiv(line) {
    let out = '';
    for (let key in line) {
        out += `<div id="${key}" class="${key} key">${line[key]}</div>`
            // console.log(key)
    }
    return out;
}
if (lang == 0) {
    document.body.innerHTML = `<div class="container">
  <textarea name="" id="" cols="103" rows="5" class="input"></textarea>
    <div class="keyboard_lines">
      <div class="line line1">${genDiv(line1en)}</div>
      <div class="line line2">${genDiv(line2en)}</div>
      <div class="line line3">${genDiv(line3en)}</div>
      <div class="line line4">${genDiv(line4en)}</div>
      <div class="line line5">${genDiv(line5en)}</div>
  </div>
  </div>`;
}
if (lang == 1) {
    document.body.innerHTML = `<div class="container">
  <textarea name="" id="" cols="103" rows="5" class="input"></textarea>
    <div class="keyboard_lines">
      <div class="line line1">${genDiv(line1ru)}</div>
      <div class="line line2">${genDiv(line2ru)}</div>
      <div class="line line3">${genDiv(line3ru)}</div>
      <div class="line line4">${genDiv(line4ru)}</div>
      <div class="line line5">${genDiv(line5ru)}</div>
  </div>
  </div>`;
}


const keys = document.querySelectorAll('.key');
const input = document.querySelector('.input');
// let shift = false;
let capslock = false;
// let ctrl = false;


for (let item of keys) {
    if (item.textContent.length < 3) {
        item.classList.add('alpha');
    }
}
let alphab = document.querySelectorAll('.alpha');



function capsL() {
    if (capslock == false) {
        for (let i = 0; i < alphab.length; i++) {
            let letter = alphab[i].textContent;
            const upper = letter.toUpperCase();
            alphab[i].textContent = upper;
        }
        capslock = true;
    } else {
        for (let i = 0; i < alphab.length; i++) {
            let letter = alphab[i].textContent;
            const lower = letter.toLowerCase();
            alphab[i].textContent = lower;
        }
        capslock = false;
    }
}
document.addEventListener('mousedown', (e) => {
    if (e.target.classList.contains('CapsLock')) {
        e.target.classList.toggle('active');
    } else if (e.target.classList.contains('key')) {
        e.target.classList.add('active');
    }
})

document.addEventListener('mouseup', (e) => {

    if (e.target.classList.contains('key') && !e.target.classList.contains('CapsLock')) {
        e.target.classList.remove('active');
    }
})


document.addEventListener('click', (e) => {
    if (e.target.classList.contains('key')) {
        if (e.target.classList.contains('Space')) {
            input.textContent += ' ';
        }
        if (e.target.classList.contains('CapsLock')) {
            capsL();
        }
        if (e.target.classList.contains('alpha')) {
            const getContent = e.target.textContent;
            input.textContent += getContent;
        }
        if (e.target.classList.contains('Backspace')) {
            input.textContent = input.textContent.substring(
                0, input.textContent.length - 1
            );
        } else {
            return;
        }
    }
})

document.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i++) {
        // console.log(e.key)

        if (e.key == keys[i].textContent) {

            if (e.key == ' ') {
                input.textContent += ' ';
            }
            if (e.key == 'CapsLock') {
                capsL();
            }
            if (e.key == keys[i].textContent && e.key.length < 3) {
                const getContent = e.key;
                input.textContent += getContent;
            }
            if (e.key == 'Backspace') {
                input.textContent = input.textContent.substring(
                    0, input.textContent.length - 1
                );
            } else {
                return;
            }
        }
    }

})

document.addEventListener('keydown', (e) => {
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        if (e.key == element.textContent) {
            element.classList.add('active')
        }

    }
})
document.addEventListener('keyup', (e) => {
    for (let i = 0; i < keys.length; i++) {
        const element = keys[i];
        if (e.key == element.textContent) {
            element.classList.remove('active')
        }
    }
})