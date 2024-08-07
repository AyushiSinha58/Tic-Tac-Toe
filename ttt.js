
let currentPlayer = 'X';

window.onload = function() {
    render();
};

function checkRow1(outerGridId) {
    // console.log(outerGridId)
    // console.log(document.getElementById(`${outerGridId}.1`))
    // console.log(document.getElementById(`${outerGridId.id}.1`))

    // console.log(document.getElementById(`${outerGridId.id}.1`).textContent)
if (document.getElementById(`${outerGridId.id}.1`).textContent===document.getElementById(`${outerGridId.id}.2`).textContent && document.getElementById(`${outerGridId.id}.1`).textContent===document.getElementById(`${outerGridId.id}.3`).textContent)
    
    if (document.getElementById(`${outerGridId.id}.1`).textContent!=='')
        return true;

}
function checkRow2(outerGridId) {
if (document.getElementById(`${outerGridId.id}.4`).textContent===document.getElementById(`${outerGridId.id}.5`).textContent && document.getElementById(`${outerGridId.id}.4`).textContent===document.getElementById(`${outerGridId.id}.6`).textContent)
    if (document.getElementById(`${outerGridId.id}.4`).textContent!=='')
        return true;

}
function checkRow3(outerGridId) {
    if (document.getElementById(`${outerGridId.id}.7`).textContent===document.getElementById(`${outerGridId.id}.8`).textContent && document.getElementById(`${outerGridId.id}.7`).textContent===document.getElementById(`${outerGridId.id}.9`).textContent)
        if (document.getElementById(`${outerGridId.id}.7`).textContent!=='')
            return true;
    
    }


function checkCol1(outerGridId) {
        if (document.getElementById(`${outerGridId.id}.1`).textContent===document.getElementById(`${outerGridId.id}.4`).textContent && document.getElementById(`${outerGridId.id}.1`).textContent===document.getElementById(`${outerGridId.id}.7`).textContent)
            if (document.getElementById(`${outerGridId.id}.1`).textContent!=='')
                return true;
        
        }
 function checkCol2(outerGridId) {
        if (document.getElementById(`${outerGridId.id}.2`).textContent===document.getElementById(`${outerGridId.id}.5`).textContent && document.getElementById(`${outerGridId.id}.2`).textContent===document.getElementById(`${outerGridId.id}.8`).textContent)
            if (document.getElementById(`${outerGridId.id}.2`).textContent!=='')
                return true;
        
        }
function checkCol3(outerGridId) {
            if (document.getElementById(`${outerGridId.id}.3`).textContent===document.getElementById(`${outerGridId.id}.6`).textContent && document.getElementById(`${outerGridId.id}.3`).textContent===document.getElementById(`${outerGridId.id}.9`).textContent)
                if (document.getElementById(`${outerGridId.id}.3`).textContent!=='')
                    return true;
            
            }
 function checkDia1(outerGridId) {
        if (document.getElementById(`${outerGridId.id}.1`).textContent===document.getElementById(`${outerGridId.id}.5`).textContent && document.getElementById(`${outerGridId.id}.1`).textContent===document.getElementById(`${outerGridId.id}.9`).textContent)
            if (document.getElementById(`${outerGridId.id}.1`).textContent!=='')
                return true;
        
        }
function checkDia2(outerGridId) {
            if (document.getElementById(`${outerGridId.id}.7`).textContent===document.getElementById(`${outerGridId.id}.5`).textContent && document.getElementById(`${outerGridId.id}.7`).textContent===document.getElementById(`${outerGridId.id}.3`).textContent)
                if (document.getElementById(`${outerGridId.id}.7`).textContent!=='')
                    return true;
            
            }
function render() {
    const container = document.getElementById('board');

    for (let outerGridId = 1; outerGridId <= 9; outerGridId++) {
        const outerGrid = document.createElement('div');
        outerGrid.className = 'OuterGrid';
        outerGrid.id = outerGridId;
        outerGrid.setAttribute('isComplete','false');   
        console.log(outerGrid);

        for (let num = 1; num <= 9; num++) {

                const innerGrid = document.createElement('div');
                innerGrid.className = 'InnerGrid';
                innerGrid.id = `${outerGridId}.${num}`;
                const elements = document.getElementsByClassName('InnerGrid');
                innerGrid.textContent='';
                // Convert the HTMLCollection to an array and add event listeners
                Array.from(elements).forEach(element => {
                    element.addEventListener('click', checker);
                });


                outerGrid.appendChild(innerGrid);
            

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
        } 
        if (checkRow2(outerGridId)){
            console.log('All cells in row 2 are the same!');
        }
        if (checkRow3(outerGridId)){
            console.log('All cells in row 3 are the same!');
        }
        if (checkCol1(outerGridId)) {
            console.log('All cells in col 1 are the same!');
        } 
        if (checkCol2(outerGridId)){
            console.log('All cells in col 2 are the same!');
        }
        if (checkCol3(outerGridId)){
            console.log('All cells in col 3 are the same!');
        }
        if (checkDia1(outerGridId)){
            console.log('All cells in DIA 1 are the same!');
        }
        if (checkDia2(outerGridId)){
            console.log('All cells in DIA 2 are the same!');
        }


    }
};