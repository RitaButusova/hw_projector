let btn_turn = document.getElementById('btn-turn');
let container = document.querySelector('.container');


window.addEventListener('load', () => {
    let page = document.body;
    btn_turn.innerHTML = localStorage.getItem('btn_text');
    let color = localStorage.getItem('color');
    let background = localStorage.getItem('background')
    page.style.background = background;
    let text = localStorage.getItem('lastDate');
    replaceText(color, text);
})


btn_turn.addEventListener('click', displayBackground);

function displayBackground() {
    let page = document.body;
    if (btn_turn.innerHTML === 'Turn off') {
        page.style.background = '#000000';
        btn_turn.innerHTML = 'Turn on';
        let data = new Date().toLocaleString().split('/').join('-');
        text = `Last turn off: ${data}`
        let color = '#ffffff'
        replaceText(color, text);
        localStorage.setItem('lastDate', text);
        localStorage.setItem('background', '#000000');
        localStorage.setItem('color', color);
        localStorage.setItem('btn_text', btn_turn.textContent);
    } else {
        page.style.background = '#ffffff';
        btn_turn.innerHTML = 'Turn off';
        let data = new Date().toLocaleString().split('/').join('-');
        text = `Last turn on: ${data}`
        let color = '#000000'
        replaceText(color, text);
        localStorage.setItem('lastDate', text);
        localStorage.setItem('background', '#ffffff');
        localStorage.setItem('color', color);
        localStorage.setItem('btn_text', btn_turn.textContent);
    }
}


function replaceText(color, text) {
    let lastTurnOff = document.createElement('p');
    lastTurnOff.className = 'information';

    for (let elem of container.children) {
        if (elem.matches('.information')) {
            elem.remove();
        }
    }
    container.insertAdjacentElement('beforeend', lastTurnOff);
    lastTurnOff.textContent = text;
    lastTurnOff.style.color = color;
}
