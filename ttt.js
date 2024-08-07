
let currentPlayer = 'X';

window.onload = function() {
    render();
};

function checkRow1(outerGridId) {
    // Convert outerGridId to a string and escape if it starts with a number
    const escapedOuterGridId = outerGridId.id;
    // Select the three cells in the first row of the specified OuterGrid
    const cell1 = document.querySelector(`#${escapedOuterGridId}.InnerGrid[data-row="1"][data-col="1"]`);
    const cell2 = document.querySelector(`#${escapedOuterGridId}.InnerGrid[data-row="1"][data-col="2"]`);
    const cell3 = document.querySelector(`#${escapedOuterGridId}.InnerGrid[data-row="1"][data-col="3"]`);

    // Check if the text content of all three cells is the same and not empty
    if (cell1 && cell2 && cell3 &&
        cell1.textContent === cell2.textContent &&
        cell2.textContent === cell3.textContent &&
        cell1.textContent !== '') {
        return true; // All cells in the first row are the same
    }

    return false; // The cells in the first row are not the same
}

function render() {
    const container = document.getElementById('board');

    for (let outerGridId = 1; outerGridId <= 9; outerGridId++) {
        const outerGrid = document.createElement('div');
        outerGrid.className = 'OuterGrid';
        outerGrid.id = outerGridId;
        outerGrid.setAttribute('isComplete','false');   
        console.log(outerGrid);

        for (let row = 1; row <= 3; row++) {
      

            for (let col = 1; col <= 3; col++) {
                const innerGrid = document.createElement('div');
                innerGrid.className = 'InnerGrid';
                innerGrid.id = `${outerGridId}.${row}.${col}`;
                innerGrid.dataset.row = row;
                innerGrid.dataset.col = col;
                const elements = document.getElementsByClassName('InnerGrid');
                innerGrid.textContent='';
                // Convert the HTMLCollection to an array and add event listeners
                Array.from(elements).forEach(element => {
                    element.addEventListener('click', checker);
                });


                outerGrid.appendChild(innerGrid);
            }

        }

        container.appendChild(outerGrid);
    }
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        event.preventDefault();
        location.reload();
    }
});

function checker(event) {
    innerGrid=event.target.id;
    console.log(innerGrid);
    outerGridId=event.target.parentElement;
    console.log(outerGridId);

    innerGridId=document.getElementById(`${innerGrid}`)
    console.log(innerGridId.textContent);
    if (innerGridId.textContent === '') { // Check if cell is empty
        console.log(innerGridId.textContent);
        innerGridId.textContent = currentPlayer; // Place the current player's mark
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
        if (checkRow1(outerGridId)) {
            console.log('All cells in row 1 are the same!');
        } else {
            console.log('Cells in row 1 are not the same.');
        }
    }
};