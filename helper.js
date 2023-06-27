// this file is used to print large amounts of text without someone having to manually type all of it
// and other useful things


for(let i=0; i<=9; i++){
    for(let j=0; j<=9; j++){
        console.log('<div clas="mapTile" id="'+ i.toString() + j.toString() + 'r' + '"></div>');
    }
}