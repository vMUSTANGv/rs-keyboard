let ROW1en = [49, 50, 51, 52, 53, 54, 55, 56, 57, 48];
let ROW2en = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221];
let ROW2enAttr = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight'];
let ROW3en = [65, 83, 68, 70, 71, 72, 74, 75, 76, 59, 222];
let ROW2ru = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221];
let KEYS = document.getElementsByClassName('key');
const BACKSPACE = document.querySelector('.Backspace');

function genDiv(arr, clas) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += `<div class="${clas}">${String.fromCharCode(arr[i])}</div>`;

    }
    return out;
}
let out = '';

// document.body.innerHTML = `
//  <div class="wrapper">
//  <textarea class="input">${out}</textarea>
//  ${genDiv(ROW2en, 'key')}</div>
// `;
document.body.innerHTML = `
<div class="container" id="w">
    <div class="keyboard_wrap" id="">
        <div class="wrapper">
        <textarea class="input">${out}</textarea>
            <div class="row">
                <div class="key BackQoute">\`</div>
                ${genDiv(ROW1en, 'key')}
                <div class="key">-</div>
                <div class="key">=</div>
                <div class="Backspace bs">Backspace</div>
            </div>
            <div class="row">
                <div class="key     tab">Tab</div>
                ${genDiv(ROW2en, 'key')}
                <div class="key">\\</div>
            </div>
            <div class="row">
                <div class="key">Caps Lock</div>
                ${genDiv(ROW3en, 'key')}
            </div>
            <div class="row"></div>
            <div class="row"></div>
        </div>
    </div>
</div>`;

for (let i = 0; i < KEYS.length; i++) {
    KEYS[i].setAttribute('data-keyName', ROW2enAttr[i]);
    // console.log(KEYS[i])
}
// console.log(KEYS)


function getKeyCodeRow() {
    let a = [];
    document.body.addEventListener('keydown', (e) => {
        a.push(e.code);
        console.log(a);
    })
}
// getKeyCodeRow()

let wrapper = document.querySelector('.wrapper');
let key = document.querySelectorAll('.key');
let input = document.querySelector('.input')



wrapper.addEventListener('mousedown', (e) => {
    let et = e.target;

    if (et.closest('.key')) {
        out += et.innerHTML;
        input.innerHTML = out;
        et.classList.add('active');
    }
})
wrapper.addEventListener('click', (e) => {
    let et = e.target;
    if (et.closest('.key')) {
        et.classList.remove('active');
    }
})

document.addEventListener('keydown', (e) => {
    for (let i = 0; i < KEYS.length; i++) {
        if (e.code == KEYS[i].dataset.keyname) {
            out += e.key.toUpperCase();
            input.innerHTML = out;
            KEYS[i].classList.add('active');
            console.log(e.key);
        }
    }
})

document.addEventListener('keyup', (e) => {
    for (let i = 0; i < KEYS.length; i++) {
        if (e.code == KEYS[i].dataset.keyname) {
            KEYS[i].classList.remove('active');
        }
    }
})
let BACKSPACE1 = document.querySelector('.bs');
document.addEventListener('keydown', (e) => {
    if (e.code == 'Backspace') {
        BACKSPACE1.classList.add('active');
        out = out.slice(0, -1);
        input.innerHTML = out;
    }
})

document.addEventListener('keyup', (e) => {
    if (e.code == 'Backspace') {
        BACKSPACE1.classList.remove('active');
    }
})
const tab = document.querySelector('.tab');
document.addEventListener('keydown', (e) => {

    if (e.code == 'Tab') {
        tab.classList.add('active');

    }
})

document.addEventListener('keyup', (e) => {
    console.log(e.code)
    if (e.code == 'Tab') {

        tab.classList.remove('active');
    }
})

// console.log(out);