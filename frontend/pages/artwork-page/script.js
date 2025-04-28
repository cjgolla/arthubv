import {users, artwork} from "../../js/userlist.js";



const url = new URL(window.location.href)

const urlUser = url.searchParams.get("user")
const urlLink = url.searchParams.get("link")
const userObj = users[urlUser]
console.log(artwork)
const artworkTitle = artwork[urlLink].title
console.log(artworkTitle)

const titleHolder = document.querySelector(".main-art-title");
titleHolder.textContent = artworkTitle;

const art = localStorage.getItem("current-artwork")

const artElement = document.createElement("img");
artElement.setAttribute('src', `/art-website/artwork/${urlLink}`)
artElement.classList.add("main-art-img")
const wrap = document.querySelector(".main-art-wrapper");
wrap.appendChild(artElement)

const nameElement = localStorage.getItem("selected-user")

const nameHolder = document.querySelector(".name")
nameHolder.textContent = urlUser;





function Comment(name, comment, profilePic) {
    this.name = name;
    this.comment = comment;
    this.profilePic = profilePic;
}


Comment.prototype.addComment = function() {
    const commentBox = document.querySelector(".comment-display-wrapper");

    const commentContainer = document.createElement("div");
    commentContainer.classList.add("comment-container")

    const commentFlex = document.createElement("div");
    commentFlex.classList.add("comment");
    commentFlex.classList.add("flex");

    const profilePic = document.createElement("div");
    profilePic.classList.add("profile-pic");
    profilePic.style.background = `url(${this.profilePic})`
    profilePic.style.backgroundSize = "cover";
    profilePic.style.backgroundPosition = "center";

    const commentTextWrapper = document.createElement("div");
    commentTextWrapper.classList.add("comment-text-wrapper");

    const commentText = document.createElement("div");
    commentText.classList.add("comment-text")

    const userName = document.createElement("span");
    userName.classList.add("user-name");
    userName.innerText = this.name;

    const text = document.createElement("span");
    text.innerText = this.comment;

    const likeContainer = document.createElement("div");
    likeContainer.classList.add("like");

    const thumbsUpIcon = document.createElement("i");
    thumbsUpIcon.classList.add("ri-thumb-up-fill");
    

    const replyIcon = document.createElement("span");
    replyIcon.classList.add("reply");
    replyIcon.innerText = "reply";


    commentBox.appendChild(commentContainer);
    commentContainer.appendChild(commentFlex)
    commentFlex.appendChild(profilePic);
    commentFlex.appendChild(commentTextWrapper);
    commentTextWrapper.appendChild(commentText);
    commentText.appendChild(userName);
    commentText.appendChild(text);
    commentContainer.appendChild(likeContainer);
    likeContainer.appendChild(thumbsUpIcon);
    likeContainer.appendChild(replyIcon);

}


const commentList = [
    "This was a good work of Art!", "I met them in real life!", "Gorgeous", "The work of the devil!"
]

const nameList = [
    "billy", "randall", "fillip", "philly", "dave", "tyrone1997"
]

const profilePicList = [
    "/profile-pics/img1.jpg", "/profile-pics/img2.jpg", "/profile-pics/img3.jpg", "/profile-pics/img4.jpg", "/profile-pics/img5.jpg",
    "/profile-pics/img5.jpg", "/profile-pics/img8.jpg", "/profile-pics/img9.png", "/profile-pics/img10.jpg", "/profile-pics/img6.jpg",
    "/profile-pics/img11.jpg", "/profile-pics/img12.jpg", "/profile-pics/img13.png", "/profile-pics/img14.jpg", "/profile-pics/img15.jpg",
    "/profile-pics/img16.jpg", "/profile-pics/img18.jpeg", "/profile-pics/img19.png", "/profile-pics/img20.png", "/profile-pics/img16.jpg",
    "/profile-pics/img21.jpg", "/profile-pics/img22.jpg", "/profile-pics/img23.png", "/profile-pics/img24.jpg", "/profile-pics/img25.jpg",
    "/profile-pics/img26.jpg", "/profile-pics/img28.jfif", "/profile-pics/img29.jfif", "/profile-pics/img20.jpg", "/profile-pics/img27.png",
]
function createComments(commentArrayList, nameArrayList, profilePicList, numOfComments){
    
    let randNum3 = Math.random()*numOfComments;
    console.log(commentArrayList);
    for(let i = 0; i <= numOfComments; i++){
        
        const randNum1 = Math.floor(Math.random()*(commentArrayList.length));
        const randNum2 = Math.floor(Math.random()*(nameArrayList.length));
        const randNum3 = Math.floor(Math.random()*(profilePicList.length));
        const comment = new Comment(nameArrayList[randNum2], commentArrayList[randNum1], profilePicList[randNum3]);
        comment.addComment();
    }
}


createComments(commentList, nameList,profilePicList, 4);

function displayMainArt(arr){
    let randNum = Math.floor(Math.random()*(arr.length));
    arr[randNum].display()
}


mainImage.addEventListener('click', ()=>{
    mainImageEnlarge.classList.toggle("display");
})

