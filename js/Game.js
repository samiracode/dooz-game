class Game {
    constructor (board, players, ready) {
        this.board = new Board ();
        this.players = [this.createPlayers()];
        this.ready = false;
    }

    /** 
    * Creates two player objects
    * @return  {Array}    An array of two Player objects.
    */
    createPlayers() {
        const players = []
        playerOne = new Player()
        playerTwo = new Player()
        players.push(playerOne)
        players.push(playerTwo)
        return players;
    }
}