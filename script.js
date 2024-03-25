document.addEventListener('DOMContentLoaded', function() {
    
    const sketchpad = document.getElementById("container");
    const size = 16;

    function start() {
        sketchpad.innerHTML = '';
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < size; j++) {
                const cell = document.createElement('div');
                cell.classList.add('white', 'column');
                row.appendChild(cell);
            }
            sketchpad.appendChild(row);
        }
    }

    function black() {
        
    }
    function erase() {

    }
    function random() {

    }
    function reset() {

    }


    function setSize() {

    }

    start();
})