function alertFunction(){
    alert ("Ready to play Tic Tac Toe?")
}

var gameMarker = "X"


function changeMarkerToX(){
    gameMarker = "X"
    console.log("The x button was clicked!")
}


function changeMarkerToO(){
    gameMarker = "O"
    console.log("The o button was clicked!")
}

function placeMark(e) {
    e.target.innerHTML = gameMarker

}

