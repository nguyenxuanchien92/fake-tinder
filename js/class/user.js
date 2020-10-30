class User {
    constructor(name, age, images, desc) {
        function getRandomId() {
            const MAX = 100;
            const MIN = 1;
            return Math.floor(Math.random() * MAX + MIN);
        }

        this._idUser = getRandomId();
        this._name = name;
        this._age = age;
        this._images = images;
        this._desc = desc;
    }


    get idUser() {
        return this._idUser;
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
        let str = `<div class="space-self-life"><img class="self-life-header" src="${this._images[0]}" alt="hot girl"></div>
    <div id="information-user"><ul><li><h3 id="name-user">${this._name},${this._age}</h3></li>
        <li id="status-line">${this._desc._comment}</li>
        <li><img src="../tinder-fake/images/location.png" alt=""><p id="location-user">${this._desc._location}</p></li>
        <li><img src="../tinder-fake/images/height_person.png" alt=""><p id="height-user">${this._desc._height}</p></li>
        <li><img src="../tinder-fake/images/degree.png" alt=""><p id="career-user">${this._desc._career}</p></li>
        <li><img src="../tinder-fake/images/degree.png" alt=""><p id="degree-user">${this._desc._degree}</p></li></ul>
    </div> 
    <hr>
    <div id="favorite-saying">
        <p id="like-saying">${this._desc._comment_favorite}</p>
    </div>

    <div class="space-self-life">
        <img class="self-life" src="${this._images[1]}" alt="">
        <img class="self-life" src="${this._images[2]}" alt="">
    </div>`

        return str;
    }
}
