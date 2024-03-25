document.addEventListener('DOMContentLoaded', function() {
    const sketchpad = document.getElementById("container");
    const setSize = document.getElementById("setSize");
    const input = document.getElementById("input");
    const reset = document.getElementById("reset");
    const black = document.getElementById("black");
    const erase = document.getElementById("erase");
    const random = document.getElementById("random");
    let size = 16;
    let isMouseDown = false;
    let button = 0;

    function createCell() {
        const cell = document.createElement('div');
        cell.draggable = false;
        cell.classList.add('white', 'column');
        const elements = document.getElementsByClassName('column');
        for (let i = 0; i < elements.length; i++) {
            const style = elements[i].style;
            style.width = `${700 / size}px`;
            style.height = `${700 / size}px`;
        }
        cell.addEventListener("mouseenter",  function () {
            if (isMouseDown && button === 0) {
                cell.classList.remove('white');
                cell.classList.add('black');
            } else if (isMouseDown && button === 1) {
                cell.classList.remove('black');
                cell.classList.add('white');
            }
        });
        cell.addEventListener("click",  function () {
            if (button === 0) {
                cell.classList.remove('white');
                cell.classList.add('black');
            } else if (button === 1) {
                cell.classList.remove('black');
                cell.classList.add('white');
            }
        });
        return cell;
    }

    function start() {
        sketchpad.innerHTML = '';
        for (let i = 0; i < size; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            for (let j = 0; j < size; j++) {
                const cell = createCell();
                row.appendChild(cell);
            }
            sketchpad.appendChild(row);
        }
    }

    

    sketchpad.addEventListener("mousedown", function() {
        isMouseDown = true;
    });

    sketchpad.addEventListener("mouseup", function() {
        isMouseDown = false;
    });

    reset.addEventListener("click", function() {
        start();
    });

    setSize.addEventListener("click", function() {
        const inputValue = input.value.trim();
        if (inputValue === '' || inputValue >= 51) {
            alert("value is either to high or invalid")
            console.log("Input value is empty");
            size = 16;
        } else if (!isNaN(inputValue)) {
            size = parseInt(inputValue);
            console.log(`Input value is a number: ${size}`);
        } else {
            console.log("Input value is not a number");
            size = 16; // Or any other default value
        }
        start();
    });
    

    black.addEventListener("click", function() {
        button = 0;
        black.classList.replace('unselected', 'selected');
        erase.classList.replace('selected', 'unselected');
        random.classList.replace('selected', 'unselected');
    });
    erase.addEventListener("click", function() {
        button = 1;
        black.classList.replace('selected', 'unselected');
        erase.classList.replace('unselected', 'selected');
        random.classList.replace('selected', 'unselected');
    });
    random.addEventListener("click", function() {
        button = 2;
        black.classList.replace('selected', 'unselected');
        erase.classList.replace('selected', 'unselected');
        random.classList.replace('unselected', 'selected');
    });
    start()

});
