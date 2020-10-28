class User {
    constructor(name, age, userInfo) {
        this._name = name;
        this._age = age;
        this._userInfo = userInfo;
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


    get userInfo() {
        return this._userInfo;
    }

    set userInfo(value) {
        this._userInfo = value;
    }

    getInformation() {
        let str = "<ul>" +
            "<li>" +
            "<h3>" +`${this.name},${this.age}`+ "</h3></li>" +
            "<li></li>" + "<li></li>" + "<li></li>" + "<li></li>" + "<li></li>" +
            "</ul>"
    }
}