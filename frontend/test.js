let users = {
    destroyer291: {
        username: "destroyer",
        email: "destroyer34@gmail.com",
        password: "notdestroyer",
        artwork: ["", "kronii", "gura"]
    },
    honeybuns: {
        username: "honeybuns",
        email: "honeybuns@gmail.com",
        password: "12345",
        artwork: ["fauna", "kronii", "gura"]
    },
    sonicfan123: {
        username: "sonicfan123",
        email: "sonicfan123@gmail.com",
        password: "scourgefan",
    },
    gobthegreat: {
        username: "gobthegreat",
        email: "gobthegreat@gmail.com",
        password: "123456",
    },
}

const user = users["honeybuns"];
const userArt = user["artwork"]
console.log(userArt)

localStorage.getItem(user)

// let usersStringed = JSON.stringify(users)
// localStorage.setItem("userlist", usersStringed)


// function addUser(username, email, password, list){
//     const newUser = new Object
//     newUser.username = username
//     newUser.email = email
//     newUser.password = password
    
//     const newUsers = {...list, [username]: newUser} 
//     console.log(newUsers)
//     return(newUsers)
// }

// users = addUser("magicgirl4", "magicgirl4@gmail.com", "12345", users)
// users = addUser("curseyoubale", "magicgirl4@gmail.com", "12345", users)