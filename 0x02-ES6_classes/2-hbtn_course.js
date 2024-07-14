class HolbertonCourse{
    constructor(name, length, students){
        this.name = name;
        this.length = length;
        this.students = students;
    }
    set name(name){
        if(name !== 'string'){
            throw new TypeError('Name must be a string');
        }
        this._name = name;
    }
    get name(){
        return this._name;
    }
    set length(length){
        if(length !== 'number'){
            throw new TypeError('length must a number ');
        }
        this._length = length;
    }
    get length(){
        return this._length;
    }
    set students(students){
        if(students instanceof Array){
            this._students = students;
        }
        else{
            throw new TypeError("students must be a array");
        }
    }
    get students(){
        return this._students;
    }

    
}
export default HolbertonCourse;