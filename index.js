document.querySelector('#task-form').addEventListener('submit', addItem);

document.querySelectorAll('ul li').forEach(li => {
    li.addEventListener('click', toggleDone);
    li.querySelector('button').addEventListener('click', removeItem);
})


function addItem(e) {
    e.preventDefault();
    const ul = document.querySelector('ul');

    //id
    const id = Date.now();

    //tworzenie pojedynczego elementu - taska (bez buttona usuwania)
    const input = document.querySelector('#task-title');
    const text = input.value;
    const html = `<li data-id="${id}"                
                >${text}<button 
                class="btn btn-sm btn-danger">X</button>
                </li>`;
    ul.insertAdjacentHTML('beforeend', html);
    input.value = ' ';

    //dodajemy funkcjonalnosci odznaczani i usuwania do nowych elementow
    document.querySelector(`[data-id="${id}"]`).addEventListener('click', toggleDone);
    document.querySelector(`[data-id="${id}"]`).addEventListener('click', removeItem);
}

function removeItem(event) {
    const button = event.target;
    const li = button.parentElement;
    li.remove();
}

function toggleDone() {
    const li = event.target;
    li.classList.toggle('done');
}