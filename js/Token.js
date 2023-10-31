class Token {
    constructor (owner, id) {
        this.owner = owner;
        this.id = `token-${index}-${owner.id}`;
        this.dropped = false;
    }
}