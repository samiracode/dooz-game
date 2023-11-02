class Game {
    constructor() {
        this.board = new Board();
        this.players = this.createPlayers();
        this.ready = false;
    }
    
    
    /** 
     * Returns active player.
     * @return  {Object}    player - The active player.
     */
	get activePlayer() {
        return this.players.find(player => player.active);
	}
    
    
    /** 
     * Creates two player objects
     * @return  {array}    An array of two player objects.
     */
    createPlayers() {
        const players = [new Player('Player 1', 1, '#e15258', true),
                         new Player('Player 2', 2, '#e59a13')];
        return players;
    }
    
    
    /** 
     * Initializes game. 
     */
    startGame(){
        this.board.drawHTMLBoard();
        this.activePlayer.activeToken.drawHTMLToken();
        this.ready = true;
    }

    /**
    * Branches code, depending on what key player presses
    * @param   {Object}    e - Keydown event object
    */
    handleKeydown (e) {
        if(this.ready) {
            if(e.key === "ArrowLeft") {
                // move left
               this.activePlayer.activeToken.moveLeft();
            } else if (e.key === "ArrowRight"){
                // move right
                this.activePlayer.activeToken.moveRight(this.board.columns)
            } else if (e.key === "ArrowDown") {
                // play token
                this.playToken()
            }
        }
    }


    playToken () {
        let spaces = this.board.spaces;
        let activeToken = this.activePlayer.activeToken;
        let targetColumn = spaces[activeToken.columnLocation];
        let targetSpace = null;

        for (let space of targetColumn){
            if (space.token === null ) {
                targetSpace = space;
            }
        }

        if (targetSpace !== null) {
            game.ready = false; 
            activeToken.drop(targetSpace);
        }
    }
}