let ROW2en = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221];
let ROW2enAttr = ['KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight'];
let ROW2ru = [81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221];
let KEYS = document.getElementsByClassName('key');

function genDiv(arr, clas) {
    let out = '';
    for (let i = 0; i < arr.length; i++) {
        out += `<div class="${clas}">${String.fromCharCode(arr[i])}</div>`;

    }
    return out;
}
let out = '';

document.body.innerHTML = `
 <div class="wrapper">
 <textarea class="input">${out}</textarea>
 ${genDiv(ROW2en, 'key')}</div>
`;

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
    out += et.innerHTML;
    input.innerHTML = out;
    if (et.closest('.key')) {
        et.classList.add('active');
    }
})
wrapper.addEventListener('click', (e) => {
    let et = e.target;
    // if (et.closest('.key')) {
    et.classList.remove('active');
    // }
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


// console.log(out);