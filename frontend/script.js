
import {users, artwork} from "./js/userlist.js";
import {Cloudinary} from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudname: 'dlskbjlfy'
  }
})

const artWrapper = document.getElementById("art-img")
artWrapper.src = cld.image("cld-sample-5")

/////////GET NAVBAR INFO////////////


let currentUser = JSON.parse(localStorage.getItem("currentUser"))
console.log("The current user is: ", currentUser)

console.log(artwork)
console.log(users)


const jsonRetrieval = localStorage.getItem("userlist")
const userlist = JSON.parse(jsonRetrieval)
const jsonFlag = localStorage.getItem("loginTabFlag")
let loginTabFlag = JSON.parse(jsonFlag)
console.log(loginTabFlag)
localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 



//////////// SWIPER ////////////
const imageSwiper = new Swiper('.wrapper', {

    loop: true,
    spaceBetween: 10,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      0: {
        slidesPerView: 1
      },
      768: {
        slidesPerView: 3
      },
      1076: {
        slidesPerView: 4
      },
      1234: {
        slidesPerView: 4
      },
      2076: {
        slidesPerView: 4
      },
      2406: {
        slidesPerView: 6
      },
      
    }


  });

  const tagSwiper = new Swiper('.tags-swiper', {

    loop: true,
    spaceBetween: 1,

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
      450: {
        slidesPerView: 2
      },
      768: {
        slidesPerView: 5
      },
      1024: {
        slidesPerView: 6
      },
      1664: {
        slidesPerView: 12
      },
      3000: {
        slidesPerView: 12
      },
      
    }


  });


const images = [
    {
      link:"artwork/img2.jpg",
    },
    {
      link:"artwork/img1.jpg",
    },
    {
      link:"artwork/img3.jpg",
    },
    {
      link:"artwork/img4.jpg",
    },
    {
      link:"artwork/img5.jpg",
    },
    {
      link:"artwork/img6.jpg",
    },
    {
      link:"artwork/img7.jpg",
    },
    {
      link:"artwork/img8.jpg",
    },
    {
      link:"artwork/img9.jpg",
    },
    {
      link:"artwork/img10.jpg",
    },
    
    {
      link:"artwork/img11.jpg",
    },
    {
      link:"artwork/img15.jpg",
    },
    {
      link:"artwork/img13.jpg",
    },
    {
      link:"artwork/img14.jpg",
    },

  ];

const grid = document.querySelector(".grid");

const tagList = [
  {
    name:"Anime"
  },
  {
    name:"Concept Art"
  },
  {
    name:"Portraits"
  },
  {
    name:"Cartoon"
  },
  {
    name:"Fan Art"
  },
  {
    name:"PENIS"
  },
  {
    name:"Landscape"
  },
  {
    name:"Abstract"
  },
  {
    name:"Sketch"
  },
  {
    name:"Anime"
  },
  {
    name:"Concept Art"
  },
  {
    name:"Portraits"
  },
  {
    name:"Cartoon"
  },
  {
    name:"Fan Art"
  },
  {
    name:"PENIS"
  },
  {
    name:"Landscape"
  },
  {
    name:"Abstract"
  },
  {
    name:"Sketch"
  },

]


for(let art of Object.keys(artwork)){

  const link = document.createElement("a");
  link.setAttribute('href', `/art-website/pages/artwork-page/index.html?user=${artwork[art].user}&link=${artwork[art].link}`);
  const img = document.createElement("div");

  link.addEventListener('click', ()=>{
    
    localStorage.setItem("current-artwork", artwork[art].link)
    localStorage.setItem('selected-user', artwork[art].user)
  })
 
  img.setAttribute('style', `background-image: url('/art-website/artwork/${artwork[art]['link']}')`)
  img.classList.add("grid-item")
  link.appendChild(img)
  grid.appendChild(link)
}
