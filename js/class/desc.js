class Desc{
    constructor(comment,comment_favorite,location,height,career,degree) {
        this._comment = comment;
        this._comment_favorite = comment_favorite;
        this._location = location;
        this._height = height;
        this._career = career;
        this._degree = degree;
    }

    get comment() {
        return this._comment;
    }

    set comment(value) {
        this._comment = value;
    }

    get comment_favorite() {
        return this._comment_favorite;
    }

    set comment_favorite(value) {
        this._comment_favorite = value;
    }

    get location() {
        return this._location;
    }

    set location(value) {
        this._location = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get career() {
        return this._career;
    }

    set career(value) {
        this._career = value;
    }

    get degree() {
        return this._degree;
    }

    set degree(value) {
        this._degree = value;
    }
}