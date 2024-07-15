class Currency{
    constructor(code, name){
        this._code = code;
        this._name = name; 
    }

    set code(code){
        if(typeof code !== 'string'){
            throw new TypeError("code must be string");
        }
        this._code;
    }
    get code(){
        return this._code;
    }

    set name(name){
        if(typeof name !== 'string'){
            throw new TypeError("name must be string");
        }

        this._name;
    }

    get name(){
        return this._name;
    }
    displayFullCurrency(){
        return `${this._name} (${this._code})`;
    }
}
export default Currency;

