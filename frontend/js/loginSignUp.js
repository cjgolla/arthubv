import {users} from "./userlist.js";

let userlist = users;

let loginTabFlag = localStorage.getItem("loginTabFlag");

/////////LOGIN STUFF/////////////

export function signUp(){
  const redText = document.querySelector(".redtext")
  const username = document.getElementById('signup-username');
  const email = document.getElementById('signup-email');
  const password = document.getElementById('signup-password');
  const reEnterPassword = document.getElementById('signup-reenter-password');

  for(let x of Object.keys(userlist)){
    console.log(userlist[x])
    let i = 0;
    if(userlist[x]['username'] === username.value || userlist[x]['password'] === password.value){
      redText.style.display = "block";
      return;
    }
    else if(username.value === '' || password.value === ''){
      redText.textContent = "fill in all boxes"
      redText.classList.remove("hide")
      console.log("redtext")
      return;
    }
    else if(!validateEmail(email.value)){
      redText.textContent = "type in valid email"
      redText.classList.remove("hide")
    }

  }
    
}

export function validateEmail(email){
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function inputStuff(){
  const loginBtn = document.getElementById("login-submit-btn");
  const signUpBtn = document.getElementById("signup-submit-btn")
  const loginInputs = document.querySelectorAll(".login-input")
  let lastInput = null

  for(let input of loginInputs){
    input.addEventListener('focus', function(){
      if(lastInput && lastInput.value === ''){
        lastInput.placeholder = `please input valid ${lastInput.name}`
      }
      lastInput = input
    })
    
    input.addEventListener('keydown', (event)=>{
      if(event.key === "Enter" ){
           submitInfo()
      }
    })  
  }

  loginBtn.addEventListener('click', ()=>{
      submitInfo()
      console.log("SUBMITTED")

  })

  signUpBtn.addEventListener('click', ()=>{
    signUp();
  })
  
}

export function submitInfo(){
  const redText = document.querySelector('.redtext')
    redText.classList.remove("hide")



  const userNameLogin = document.getElementById("username_login")
  const passwordLogin = document.getElementById("password_login")

 
  let flag = null
  for (let x of Object.keys(userlist)){
    let i = 0
    console.log(userlist[x]['username'], userNameLogin.value)
    if(userlist[x]["username"] === userNameLogin.value && userlist[x]["password"] === passwordLogin.value){
        
      localStorage.setItem("currentUser", JSON.stringify(userlist[x]))
      loginTabFlag = 1
      localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 
      location.reload()
    }
    i++
  }
  if(!flag){
    redText.classList.remove("hide")
    redText.textContent = "enter correct info"
  }
   
}



const tagsContainer = document.querySelector(".tags-list");

/**login sign up function */

/**overlay toggle */

let overlayBool = false;

function overlayToggle(){
  const dropdownItem = document.querySelector(".title-dropdown")
  const dropdownBox = document.querySelector(".dropdown-box")
  const overlay = document.getElementById("overlay-dropdown")
        overlay.classList.toggle("hide")
        overlay.addEventListener('click', ()=>{
          dropdownItem.classList.add('hide')
          dropdownBox.classList.add('hide')
            overlay.classList.add('hide')
            
            
        })
       
}



export function loginSignUp(){
    const moreIcon2 = document.querySelector('.ri-more-2-line')
    moreIcon2.classList.remove("hide")
  /*variables */
    
    const redText = document.querySelector('.redtext')
    const loginBtn = document.getElementById("login-submit-btn");
    const signUpBtn = document.getElementById("signup-submit-btn");

    const overlay = document.querySelector(".overlay")
    const dropdownItem = document.querySelector(".title-dropdown")
    overlay.classList.add('hide')
    const closeLogin = document.getElementById("close-login");
    const closeSignup = document.getElementById("close-signup");

    const arrow = document.querySelector(".arrow")

    const loginInput  = document.querySelectorAll('.login-input')
    console.log(loginInput)
    const signUpInput = document.querySelectorAll(".signup")
    console.log(signUpInput)
    const loginText = document.querySelector(".login-text");


    const moreIcon = document.createElement("div")
    moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon" id="more-login-dropdown"></i>`

    const loginTab = document.querySelector(".login-tab");
    const loginBox = document.querySelector(".login") 
    let login = document.createElement("div")

    let signUp = document.createElement("div")
    signUp.classList.add("login-btn")
    signUp.textContent="Sign Up"

    const loginDropdown = document.createElement("div")
    loginDropdown.classList.add("login-dropdown")
    loginBox.appendChild(moreIcon)
    loginBox.appendChild(loginDropdown)
    loginDropdown.appendChild(login)
    loginDropdown.appendChild(signUp)

    /*event listeners */
    login.addEventListener("click", ()=>{
          closeLogin.classList.toggle("hide");
          loginTab.classList.toggle("hide");
          loginInput.forEach((x)=>{
            x.classList.toggle("hide")
          })
          loginText.textContent = "Login";
          loginBtn.classList.toggle('hide')
    })
    login.classList.add("login-btn2")
    login.textContent="Login"

    signUp.addEventListener('click', ()=>{
      closeSignup.classList.toggle("hide")
      loginTab.classList.toggle("hide")
      signUpInput.forEach((x)=>{
        x.classList.toggle('hide')
      })
      loginText.textContent = "Sign Up";
      signUpBtn.classList.toggle('hide');
    })

    closeLogin.addEventListener('click', ()=>{
      redText.classList.add("hide")
      loginTab.classList.toggle("hide");
      loginInput.forEach((x)=>{
        x.classList.toggle("hide")
      })
      closeLogin.classList.toggle('hide')
      loginBtn.classList.toggle('hide')
    })
  
    closeSignup.addEventListener('click', ()=>{
      redText.classList.add("hide")
      closeSignup.classList.toggle('hide')
      console.log("clicked")
      loginTab.classList.toggle("hide");
      signUpInput.forEach((x)=>{
        x.classList.toggle("hide")
      })
      signUpBtn.classList.toggle('hide')
    })
   
    moreIcon.addEventListener("click", ()=>{
      loginDropdown.classList.toggle("display-flex")
    })
    
    arrow.addEventListener("click", ()=>{
      dropdownItem.classList.toggle("hide")
    })

}

/*SIGNOUT FUNCTION */

export function signOut(){
  arrowFunc();
  const dropdown = document.createElement('div');
  dropdown.classList.add("dropdown-box");
  dropdown.classList.add("hide")

  const loginBox = document.querySelector(".login");
  const notificationTick = document.createElement("div");
  notificationTick.classList.add("notification-tick");
  const alerts = document.createElement("div");
  alerts.classList.add("span-style");

  const overlay = document.getElementById("overlay-dropdown")

  const mailIcon = document.createElement("div");
  mailIcon.classList.add("span-style");
  const plusIcon = document.createElement("div");
  const moreIcon = document.querySelector('.ri-more-2-line')
    moreIcon.classList.remove("hide")
  plusIcon.classList.add("span-style")

  plusIcon.innerHTML = `<span class="span-style">Add Post</span><i class="ri-add-fill"></i>`
  
  const signOutButton = document.createElement("div")
  signOutButton.classList.add("login-btn")
  signOutButton.classList.add("sign-out")

  signOutButton.textContent = "SignOut"
  plusIcon.style.fontSize = '20px'
  mailIcon.innerHTML = `<span class="span-style">Mail</span><i class="ri-mail-line span-style"></i>`
  mailIcon.style.fontSize = '20px'
  alerts.innerHTML = `<span class="span-style">Alerts</span><i class="ri-notification-4-line"></i>`
  
  loginBox.appendChild(moreIcon);
  dropdown.appendChild(mailIcon);
  dropdown.appendChild(plusIcon);
  dropdown.appendChild(signOutButton)
  

  overlay.addEventListener("click", ()=> {
    
  })
  moreIcon.addEventListener("click", ()=>{
    dropdown.classList.toggle("hide")
    
    overlayToggle()
    
  })
  
  
  loginBox.appendChild(dropdown)
  signOutButton.addEventListener("click", ()=>{

    loginTabFlag = null

    localStorage.setItem("loginTabFlag", JSON.stringify(loginTabFlag)) 
    localStorage.setItem("currentUser", JSON.stringify(''))
    location.reload()
  })

  const body = document.body
}

/*ARROW FUNCTION */
function arrowFunc(){
    document.querySelector(".arrow").addEventListener('click', ()=>{
        const dropdownItem = document.querySelector(".title-dropdown")
        dropdownItem.classList.toggle("hide")
        overlayToggle();
    })
}

export function loginSignUp2(){
  const moreIcon2 = document.querySelector('.ri-more-2-line')
  moreIcon2.classList.remove("hide")
/*variables */
  
  const redText = document.querySelector('.redtext')
  const loginBtn = document.getElementById("login-submit-btn");
  const signUpBtn = document.getElementById("signup-submit-btn");

  const overlay = document.querySelector(".overlay")
  const dropdownItem = document.querySelector(".title-dropdown")
  overlay.classList.add('hide')
  const closeLogin = document.getElementById("close-login");
  const closeSignup = document.getElementById("close-signup");

  const arrow = document.querySelector(".arrow")

  const loginInput  = document.querySelectorAll('.login-input')
  console.log(loginInput)
  const signUpInput = document.querySelectorAll(".signup")
  console.log(signUpInput)
  const loginText = document.querySelector(".login-text");


  const moreIcon = document.createElement("div")
  moreIcon.innerHTML = `<i class="ri-more-2-fill more-icon" id="more-login-dropdown"></i>`

  const loginTab = document.querySelector(".login-tab");
  const loginBox = document.querySelector(".login") 
  let login = document.createElement("div")

  let signUp = document.createElement("div")
  signUp.classList.add("login-btn")
  signUp.textContent="Sign Up"

  const loginDropdown = document.createElement("div")
  loginDropdown.classList.add("login-dropdown")
  loginBox.appendChild(moreIcon)
  loginBox.appendChild(loginDropdown)
  loginDropdown.appendChild(login)
  loginDropdown.appendChild(signUp)

  /*event listeners */
  login.addEventListener("click", ()=>{
        closeLogin.classList.toggle("hide");
        loginTab.classList.toggle("hide");
        loginInput.forEach((x)=>{
          x.classList.toggle("hide")
        })
        loginText.textContent = "Login";
        loginBtn.classList.toggle('hide')
  })
  login.classList.add("login-btn2")
  login.textContent="Login"

  signUp.addEventListener('click', ()=>{
    closeSignup.classList.toggle("hide")
    loginTab.classList.toggle("hide")
    signUpInput.forEach((x)=>{
      x.classList.toggle('hide')
    })
    loginText.textContent = "Sign Up";
    signUpBtn.classList.toggle('hide');
  })

  closeLogin.addEventListener('click', ()=>{
    redText.classList.add("hide")
    loginTab.classList.toggle("hide");
    loginInput.forEach((x)=>{
      x.classList.toggle("hide")
    })
    closeLogin.classList.toggle('hide')
    loginBtn.classList.toggle('hide')
  })

  closeSignup.addEventListener('click', ()=>{
    redText.classList.add("hide")
    closeSignup.classList.toggle('hide')
    console.log("clicked")
    loginTab.classList.toggle("hide");
    signUpInput.forEach((x)=>{
      x.classList.toggle("hide")
    })
    signUpBtn.classList.toggle('hide')
  })
 
  moreIcon.addEventListener("click", ()=>{
    loginDropdown.classList.toggle("display-flex")
  })
  
  arrow.addEventListener("click", ()=>{
    dropdownItem.classList.toggle("hide")
  })

}