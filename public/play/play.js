



let selectedShip = 'none'

let shipSizes = {
    'carrier': 5,
    'battleship': 4,
    'destroyer': 3,
    'submarine': 3,
    'patrol': 2
}


function selectShip(name){
    selectedShip = name
    console.log(selectedShip)
}

function unselectShip(){
    selectShip = 'none'
}


//detects when user is hovering the left game board
document.getElementById('leftGameBoard').addEventListener("mouseover", e => {

    // calls the getNeighbors function for the tile the user is hovering
    if(selectedShip != 'none'){

        console.log(getNeighbors(e.target.id, shipSizes[selectedShip], true))
    }

})
















// ====================================================================================================================================== //
//  all functions will have go here because type=module makes variables super weird and I can't use import statements outside js modules  //
// ====================================================================================================================================== //

function getNeighbors(startCoord, amount, isVertical){

    let startCoordVertical = startCoord[0]
    let startCoordHorizontal = startCoord[1]

    let neighbors = []


    if(isVertical){
        // get vertical neighbors
    
        for(let i = 1; i <= amount; i++){

            let currentNeighbor = ''

            let temp = parseInt(startCoordVertical) + i

            currentNeighbor = currentNeighbor + temp.toString() + startCoordHorizontal

            neighbors.push(currentNeighbor)
        }



    }else{
        // get horizontal neighbors

        for(let i = 1; i <= amount; i++){

            let currentNeighbor = ''

            let temp = parseInt(startCoordHorizontal) + i

            currentNeighbor = currentNeighbor + startCoordVertical + temp.toString()

            neighbors.push(currentNeighbor)
        }


    }
    return neighbors
}



