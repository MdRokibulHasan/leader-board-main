/* const differentColor = document.getElementsByClassName('section-title');
for (item of differentColor) {
    item.style.color = 'green';
}
 */



const differentColor = document.getElementsByTagName('h2');
for (item of differentColor) {
    item.style.color = 'green';
}

/* const backColor = document.getElementById('top-player');
backColor.style.backgroundColor = 'rgba(154, 210, 234, 1)'; */

const backColor = document.getElementsByClassName('top-player');
for (item of backColor) {
    item.style.backgroundColor = 'rgba(154, 210, 234, 1)';
}

// set li by user input

function addLi() {
    let inputText = document.getElementById('text-input').value;
    let list = document.getElementById('ul-list');
    console.log(list);
    if (inputText.length <= 2) {
        let liText = document.createElement('li');
        liText.innerText = inputText.value;
        list.appendChild(liText);
        inputVaue = inputVaue + 1;
    }
    else {
        const addButton = document.getElementById('add-button');
        addButton.setAttribute("disabled", true);
    }
    inputText.value = '';





}
