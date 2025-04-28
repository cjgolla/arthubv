///////JSON LOCALSTORAGE/////////

// const currentUser = ''
// const currentUserJSON = JSON.stringify(currentUser)
// localStorage.setItem("currentUser", currentUserJSON)


let currentUser = JSON.parse(localStorage.getItem("currentUser"))
console.log("The current user is: ", currentUser)


const jsonRetrieval = localStorage.getItem("userlist")
const userlist = JSON.parse(jsonRetrieval)
const jsonFlag = localStorage.getItem("loginTabFlag")
let loginTabFlag = JSON.parse(jsonFlag)
console.log(loginTabFlag)
localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 

const loginNav = (()=>{
  if(loginTabFlag === null){
    loginSignUp()
  }
  else if(loginTabFlag === 1){
    signOut()
  }
})();


/////////LOGIN STUFF/////////////
function inputStuff(){
  const loginInputs = document.querySelectorAll(".login-input")
  let lastInput = null
  const userNameLogin = document.getElementById("username_login")
  const passwordLogin = document.getElementById("password_login")
  for(let input of loginInputs){
    input.addEventListener('focus', function(){
      if(lastInput && lastInput.value === ''){
        lastInput.placeholder = `please input valid ${lastInput.name}`
      }
      lastInput = input
    })
    input.addEventListener('keydown', (event)=>{
      if(event.key === "Enter" ){
          console.log(passwordLogin.value)
          console.log(userNameLogin.value)
          console.log("Poggers")
          let flag = null
          for (x of Object.keys(userlist)){
            let i = 0
            if(userlist[x]["username"] === userNameLogin.value && userlist[x]["password"] === passwordLogin.value){
              localStorage.setItem("currentUser", JSON.stringify(userlist[x]))
              loginTabFlag = 1
              localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 
              location.reload()
            }
            i++
          }
          if(!flag){
            console.log("Please enter correct info")
          }
      }
    })
  }
}
inputStuff()
const tagsContainer = document.querySelector(".tags-list");

/**login sign up function */

function loginSignUp(){

  /*variables */
    const more = document.querySelector(".more-icon")
    const overlay = document.querySelector(".overlay")
    const dropdownItem = document.querySelector(".title-dropdown")
    overlay.classList.add('hide')
    let close = document.querySelector(".close");
    const arrow = document.querySelector(".arrow")

    const moreIcon = document.createElement("div")
    moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon" id="more-login-dropdown"></i>`

    const loginWrapper = document.querySelector(".login")
    const loginTab = document.querySelector(".login-tab");
    const loginBox = document.querySelector(".login") 
    let login = document.createElement("div")

    login.addEventListener("click", ()=>{
      loginTab.classList.toggle("display")
    })
    login.classList.add("login-btn2")
    login.textContent="Login"

    let signUp = document.createElement("div")
    signUp.classList.add("login-btn")
    signUp.textContent="Sign Up"

    const loginDropdown = document.createElement("div")
    loginDropdown.classList.add("login-dropdown")
    loginBox.appendChild(moreIcon)
    loginBox.appendChild(loginDropdown)
    loginDropdown.appendChild(login)
    loginDropdown.appendChild(signUp)
    login

    /*event listeners */
    close.addEventListener('click', ()=>{
      loginTab.classList.toggle("display");
    })
   
    moreIcon.addEventListener("click", ()=>{
      loginDropdown.classList.toggle("display-flex")
    })
    
    arrow.addEventListener("click", ()=>{
      dropdownItem.classList.toggle("display")
    })
  
}
function signOut(){

  /**////////DROPDOWN//////////// */

  const loginBox = document.querySelector(".login") 
  const signOutButton = document.createElement("div")
  signOutButton.textContent = "Sign out"
  signOutButton.classList.add("span-style")
  signOutButton.classList.add("sign-out")
  
  const userName = document.createElement("div")
  const alerts = document.createElement("div")
  alerts.innerHTML= `<span>Alerts</span><i class="ri-notification-3-line"></i>`
  alerts.classList.add("span-style")



  const notificationTick = document.createElement("div")
  notificationTick.classList.add("notification-tick")

  const mailIcon = document.createElement("div")
  mailIcon.classList.add("span-style")
  const plusIcon = document.createElement("div")
  const moreIcon = document.createElement("div")

  moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon"></i>`
  plusIcon.classList.add("span-style")

  plusIcon.innerHTML = `<span class="span-style">Add Post</span><i class="ri-add-fill"></i>`
  
  plusIcon.style.fontSize = '20px'
  mailIcon.innerHTML = `<span class="span-style">Mail</span><i class="ri-mail-line span-style"></i>`
  mailIcon.style.fontSize = '20px'

  userName.textContent = currentUser.username
  
  signOutButton.addEventListener("click", ()=>{

    loginTabFlag = null

    localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 
    localStorage.setItem("currentUser", JSON.stringify(''))
    location.reload()
  })

  const body = document.body
  /*/////////DROPDOWN//////////*/

  const overlay = document.querySelector(".overlay")


  const dropdown = document.createElement("div")
  dropdown.classList.add("dropdown-box")
  


  /**nav dropdown */
  const dropdownBoxNav = document.querySelector(".nav-dropdown")
  dropdownBoxNav.classList.add("hide")
  const arrow = document.querySelector(".arrow")

  /**user profilepic */
  const userProfilePic = document.createElement("div")
  const userProfileDisplay = document.createElement("div")
  userProfileDisplay.classList.add("current-user-icon-wrapper")
  userProfilePic.classList.add("current-user-icon")
  

  /*dropdown event listeners */


  const dropdownItem = document.querySelector(".title-dropdown")

    arrow.addEventListener("click", ()=>{
      dropdownItem.classList.toggle("display")
      overlay.classList.toggle("display")
      if(dropdown.classList.contains("display")){
        dropdown.classList.remove("display")
      }
    })

  userProfileDisplay.addEventListener("click", ()=>{

    if(overlay.classList.contains("display")&& !dropdown.classList.contains("display")){
      overlay.classList.add("display")
      dropdown.classList.toggle("display")
    } else {
      dropdown.classList.toggle("display")
      overlay.classList.toggle("display")
    }
    
    if(dropdownItem.classList.contains("display")){
      dropdownItem.classList.remove("display")
    }
  })

  overlay.addEventListener("click", ()=>{
    if (dropdownItem.classList.contains("display")){
      dropdownItem.classList.remove("display")
    }
    if (dropdown.classList.contains("display")){
      dropdown.classList.remove("display")
    }
    overlay.classList.remove("display")
  })

  loginBox.appendChild(userProfileDisplay)
  dropdown.appendChild(plusIcon)
  dropdown.appendChild(alerts)
  dropdown.appendChild(mailIcon)
  userProfileDisplay.appendChild(userProfilePic)
  userProfileDisplay.appendChild(moreIcon)
  userProfileDisplay.appendChild(notificationTick)
  loginBox.appendChild(dropdown)
  dropdown.appendChild(signOutButton)
  
}

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
      link:"/artwork/img2.jpg",
    },
    {
      link:"/artwork/img1.jpg",
    },
    {
      link:"/artwork/img3.jpg",
    },
    {
      link:"/artwork/img4.jpg",
    },
    {
      link:"/artwork/img5.jpg",
    },
    {
      link:"/artwork/img6.jpg",
    },
    {
      link:"/artwork/img7.jpg",
    },
    {
      link:"/artwork/img8.jpg",
    },
    {
      link:"/artwork/img9.jpg",
    },
    {
      link:"/artwork/img10.jpg",
    },
    
    {
      link:"/artwork/img11.jpg",
    },
    {
      link:"/artwork/img15.jpg",
    },
    {
      link:"/artwork/img13.jpg",
    },
    {
      link:"/artwork/img14.jpg",
    },
    {
      link:"/artwork/ismail-inceoglu-the-boy-who-cried-wolf.jpg",
    },
    {
      link:"/artwork/lane-brown-dunedrifter-v2.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
    },
    {
      link:"/artwork/img20.jpg",
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



// tagList.forEach((tag) =>{
//   tagsContainer.innerHTML += `<div class="tag swiper-slide" style="width:50px;"><span class="tag-dec">${tag.name}</span></div>`
// })

// const tags = document.querySelectorAll(".tag");

// tags.forEach((item) => {
//   item.addEventListener('click', ()=>{
//     item.classList.toggle("tag-toggle")
//     tags.forEach((btn)=>{
//       if(btn.classList.contains("tag-toggle") && !(btn===item)){
//         btn.classList.toggle("tag-toggle");
//       }
//     })
//     console.log("clicked")
//   })
// })



images.forEach((img) =>{
  grid.innerHTML += `<a href="#"><div style="background-image: url('${img.link}')" class="grid-item"></div></a>`
});

///// LOGIN BOX /////