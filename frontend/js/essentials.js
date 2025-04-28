///////JSON LOCALSTORAGE/////////
import {signOut, loginSignUp, inputStuff} from "./router/login.js";


window.onload = function(){

  if (localStorage.getItem('loginTabFlag') === null) {
    localStorage.setItem('loginTabFlag', null)
  }
  const navBar = document.querySelector(".nav");
  fetch('./html/navbar.html')
    .then(response => response.text())
    .then(data => {
      navBar.innerHTML = data;
    })
    .catch(error => console.error('Error loading navbar', error));
  
  const loginSignUpTab = document.querySelector(".login-tab");
  fetch('./html/login-signup.html')
    .then(response => response.text())
    .then(data =>{
      loginSignUpTab.innerHTML = data;

  let loginTabFlag = JSON.parse(localStorage.getItem('loginTabFlag'));


  if(loginTabFlag === null){
    console.log("ITS DONE")
    loginSignUp();
  } else {
    console.log(loginTabFlag)
    console.log("WTF")
    signOut();
  }

  inputStuff();
  

})
.catch(error => console.error(`Error loading login`, error))
};

