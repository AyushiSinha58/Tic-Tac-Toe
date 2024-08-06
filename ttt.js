window.onload = function() {
    render();
};

function checkVictory() {

}

function render() {
    const container = document.getElementById('board');
    let currentPlayer = 'X'; // Start with player 'X'

    for (let outerGridId = 1; outerGridId <= 9; outerGridId++) {
        const outerGrid = document.createElement('div');
        outerGrid.className = 'OuterGrid';
        outerGrid.id = outerGridId;

        for (let row = 1; row <= 3; row++) {
            const innerGridRow = document.createElement('div');
            innerGridRow.className = 'InnerGridRow';
            innerGridRow.id = `${outerGridId}.${row}`;

            for (let col = 1; col <= 3; col++) {
                const innerGrid = document.createElement('div');
                innerGrid.className = 'InnerGrid';
                innerGrid.id = `${outerGridId}.${row}.${col}`;
                innerGrid.dataset.row = row;
                innerGrid.dataset.col = col;

                // Add click event listener to each cell
                innerGrid.addEventListener('click', function() {
                    if (innerGrid.textContent === '') { // Check if cell is empty
                        innerGrid.textContent = currentPlayer; // Place the current player's mark
                        currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
                        checkVictory();
                    }
                });

                innerGridRow.appendChild(innerGrid);
            }

            outerGrid.appendChild(innerGridRow);
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



