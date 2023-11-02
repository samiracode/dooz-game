const game = new Game();

/** 
 * Listens for click on `#begin-game` and calls startGame() on game object
*/
document.getElementById('begin-game').addEventListener('click', function(){
    game.startGame();
    this.style.display = 'none';
    document.getElementById('play-area').style.opacity = '1';
});

/**
 * Listens for click `#restart`and calls startGame() on game object
*/
document.getElementById('restart').style.display = 'none';
document.getElementById('restart').addEventListener('click', function() {
    window.location.reload()
    this.style.display = 'none'
    document.getElementById('play-area').style.opacity = '1';
})
   


document.addEventListener("keydown", function(event){
    game.handleKeydown(event)
})


