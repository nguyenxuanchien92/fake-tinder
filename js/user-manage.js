let content = document.getElementById("content");

let desc = new Desc();
desc.comment = "Ngày em gặp anh là cuộc đời em tỏa nắng";
desc.comment_favorite = "The best thing I can cook is..";
desc.height = "162 cm";
desc.career = "beU Model Management";
desc.degree = "Trường đại học Quốc gia Hà Nội";

//get link relative for src of tag image???
let images = [];

let user = new User("Thu Hà", 27, images, desc);

content.innerHTML = user.getInformation();

console.log(user);