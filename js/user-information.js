class UserInfo {
    constructor(images, desc, overviews) {
        this._images = images;
        this._desc = desc;
        this._overviews = overviews;
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

    get overviews() {
        return this._overviews;
    }

    set overviews(value) {
        this._overviews = value;
    }
}