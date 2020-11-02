let content = document.getElementById("content");

let desc = new Desc();
desc.comment = "Ngày em gặp anh là cuộc đời em tỏa nắng";
desc.comment_favorite = "The best thing I can cook is..";
desc.height = "162 cm";
desc.career = "beU Model Management";
desc.degree = "Trường đại học Quốc gia Hà Nội";

//get link relative for src of tag image???
let images = ["../tinder-fake/images/hot_girl_03.jpg","../tinder-fake/images/hot_girl_02.jpg","../tinder-fake/images/hot_girl_01.jpg"];
// let src = '../tinder-fake/images/';


let user = new User("Thu Hà", 27, images, desc);

function selectButton(id){
    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        let buttonId = buttons[i].getAttribute('id');
        switch (buttonId){
            case 'btn-super-like':
                alert(`btn-super-like ${id}`);
                break;
            case 'btn-like':
                alert(`btn-like ${id}`);
                break;
            case 'btn-dis-like':
                alert(`btn-dis-like ${id}`);
                break;
        }
    }
}

content.innerHTML = user.getInformation();

console.log(user);