class Building {
    constructor(sqft) {
        if (this.constructor !== Building) {
            if(typeof this.evacuationWarningMessage !== 'function') {
                throw new TypeError ("Class extending Building must override evacuationWarningMessage");
            }
        }
        this.sqft = sqft;
    }
set sqft(sqft) {
    if(sqft !== 'number') {
        throw new TypeError("set sqft as a number");
    }
    this._sqft = sqft;
}
get sqft() {
    return this._sqft;
    }
}
export default Building;
