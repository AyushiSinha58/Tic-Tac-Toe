
let currentPlayer = 'X';
let validBox = 0;
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
                innerGrid.textContent='';
                innerGrid.addEventListener('click', checker);
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

function checkBoxWin(outerGridId){
    if (checkRow1(outerGridId)||checkRow2(outerGridId)||checkRow3(outerGridId)|| checkCol1(outerGridId)||checkCol2(outerGridId) ||checkCol3(outerGridId) || checkDia1(outerGridId)||checkDia2(outerGridId) ) {
        return true;
    } 
}
function isBoxValid(boxId){
    if (validBox!==0){    
        if (document.getElementById(validBox).getAttribute('isComplete')==="true"){
            console.log(1);
            validBox=0;
            console.log(`validBox id${validBox}`)
        }
    }
    if(validBox===0 && document.getElementById(boxId).getAttribute('isComplete')==="false"){
        return true;
        console.log(2);

    }
    if (boxId===validBox && document.getElementById(boxId).getAttribute('isComplete')==="false"){
        return true;
    }
    else
    { 
        console.log("here");
        return false;

    }
}
function checker(event) {

    innerGrid=event.target.id;
    //console.log('innerGrid');
    //console.log(innerGrid);
    outerGridId=event.target.parentElement;
    //console.log(outerGridId);

    innerGridId=document.getElementById(`${innerGrid}`)
    console.log(outerGridId.getAttribute('isComplete'))
 
        if (innerGridId.textContent === '' && isBoxValid(outerGridId.id)) { // Check if cell is empty
    
            innerGridId.textContent = currentPlayer; // Place the current player's mark
            validBox=innerGrid.slice(2);  
            console.log("validbox")
            console.log(validBox);
            if(checkBoxWin(outerGridId)) {
                console.log(`${innerGridId.textContent} wins`)
                outerGridId.setAttribute('isComplete','true');        
                console.log(outerGridId)
                if (currentPlayer === 'X') {
                    outerGridId.classList.add('X');
                } else {
                    outerGridId.classList.add('O');
                }

            }
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'; // Switch player
        }
    }
;