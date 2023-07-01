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



export default getNeighbors