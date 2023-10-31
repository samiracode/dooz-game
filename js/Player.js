class Player {
    constructor (name, id, color, active = false, ) {
        this.name = name;
        this.id = id;
        this.color = color;
        this.active = active;
        this.tokens = [];
    }
}