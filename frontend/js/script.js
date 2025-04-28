

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



tagList.forEach((tag) =>{
  tag.innerHTML += `<div class="tag swiper-slide" style="width:50px;"><span class="tag-dec">${tag.name}</span></div>`
})

const tags = document.querySelectorAll(".tag");

tags.forEach((item) => {
  item.addEventListener('click', ()=>{
    item.classList.toggle("tag-toggle")
    tags.forEach((btn)=>{
      if(btn.classList.contains("tag-toggle") && !(btn===item)){
        btn.classList.toggle("tag-toggle");
      }
    })
    console.log("clicked")
  })
})

///// LOGIN BOX /////