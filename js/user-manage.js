let content = document.getElementById("content");





function selectButton(id) {
    switch (id) {
        case 'btn-super-like':
            show();
            break;
        case 'btn-like':
            show();
            break;
        case 'btn-dis-like':
            show();
            break;
        case 'btn-navigation':
            alert(`btn-navigation ${id}`);
            break;
        case 'btn-close':
            alert(`btn-close ${id}`);
            break;
    }
}

function createUser() {

    let desc = new Desc();
    desc.comment = "Ngày em gặp anh là cuộc đời em tỏa nắng";
    desc.comment_favorite = "The best thing I can cook is..";
    desc.height = "162 cm";
    desc.career = "beU Model Management";
    desc.degree = "Trường đại học Quốc gia Hà Nội";

    let images = ["../tinder-fake/images/hot_girl_03.jpg", "../tinder-fake/images/hot_girl_02.jpg", "../tinder-fake/images/hot_girl_01.jpg"];

    let images2 = ["../tinder-fake/images/13616940355_3294230bcd_o.jpg", "../tinder-fake/images/14599906298_39873d147e_o.jpg", "../tinder-fake/images/14767719162_e50201aa80_o.jpg"]

    let images3 = ["../tinder-fake/images/16255871879_2ec80ed592_o.jpg", "../tinder-fake/images/16592911572_0f2e053d4c_o.jpg", "../tinder-fake/images/16652325028_310f909447_k.jpg"];

    let user = new User("Thu Hà", 27, images, desc);
    let user1 = new User("Hương", 27, images2, desc);
    let user2 = new User("Hương", 27, images3, desc);

    let userArr = new Array(user,user1,user2);
    return userArr ;
}

function show() {

    let index = randomIndex();

    let user = createUser()[index];

    content.innerHTML = user.getInformation();
}

function randomIndex(){
    return Math.floor(Math.random()*2);
}

createUser();

show();


// console.log(user);