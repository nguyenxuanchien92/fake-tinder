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
        let str = ` <div id="menu-bar" class="navigation-bar">
            <button class="btn-navigation" id="btn-navigation" onclick="selectButton(this.id)"><i class="material-icons">&#xe5d3;</i></button>
            <button class="btn-navigation" id="btn-close" onclick="selectButton(this.id)"><i class="material-icons">&#xe5cd;</i></button>
        </div>
        <div class="space-self-life" ><img id="0" class="self-life-header" src="${this.images[0]}" alt="hot girl" 
        onclick="clickImage(this.id)"></div>
        <div id="information-user"><ul><li><h3 id="name-us er">${this.name},${this.age}</h3></li>
            <li id="status-line">${this.desc.comment}</li>
            <li><img src="../tinder-fake/images/location.png" alt=""><p id="location-user">${this.desc.location}</p></li>
            <li><img src="../tinder-fake/images/height_person.png" alt=""><p id="height-user">${this.desc.height}</p></li>
            <li><img src="../tinder-fake/images/degree.png" alt=""><p id="career-user">${this.desc.career}</p></li>
            <li><img src="../tinder-fake/images/degree.png" alt=""><p id="degree-user">${this.desc.degree}</p></li></ul>
        </div>
        <hr>
            <div id="favorite-saying">
                <p id="like-saying">${this.desc.comment_favorite}</p>
            </div>
            <div class="space-self-life" >
                <img class="self-life" id="1"src="${this.images[1]}" onclick="clickImage(this.id)" alt="">
                <img class="self-life" id="2"src="${this.images[2]}" onclick="clickImage(this.id)" alt="">
            </div>
            <div id="logo">
                <button id="btn-super-like" onclick="selectButton(this.id)"><i class="glyphicon glyphicon-heart-empty"></i></button>
                <button id="btn-like" onclick="selectButton(this.id)"><i class="glyphicon glyphicon-star-empty"></i></button>
                <button id="btn-dis-like" onclick="selectButton(this.id)"><i class="material-icons">&#xe5cd;</i></button>
            </div>`
        return str;
    }
}
