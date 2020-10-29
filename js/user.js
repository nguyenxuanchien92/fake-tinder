class User {
    constructor(name, age, images, desc) {
        this._name = name;
        this._age = age;
        this._images = images;
        this._desc = desc;
    }

    get images() {
        return this._images;
    }

    set images(value) {
        this._images = value;
    }

    get desc() {
        return this._desc;
    }

    set desc(value) {
        this._desc = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        this._age = value;
    }


    getInformation() {
        let str = "<ul>" +
            "<li>" +
            "<h3>" + `${this.name},${this.age}` + "</h3></li>" +
            "<li></li>" + "<li></li>" + "<li></li>" + "<li></li>" + "<li></li>" +
            "</ul>"
    }
}