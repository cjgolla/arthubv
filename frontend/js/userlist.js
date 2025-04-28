let users = {
    destroyer291: {
        username: "destroyer",
        email: "destroyer34@gmail.com",
        password: "notdestroyer",
        art: [] 
    },
    honeybuns: {
        username: "honeybuns",
        email: "honeybuns@gmail.com",
        password: '12345',
        art: []
    },
    sonicfan123: {
        username: "sonicfan123",
        email: "sonicfan123@gmail.com",
        password: "scourgefan",
        art: []
    },
    gobthegreat: {
        username: "gobthegreat",
        email: "gobthegreat@gmail.com",
        password: "12345",
        art: [],
    },
}

function gatherArtwork(){
   
    let obj = {};
    for(let x of Object.keys(users)){
        let i = 0;
        for(let y of users[x].art){
           
            obj = {...obj, [y.link]: {user: x, link: y.link, id: y.id, title: y.title}}
            
            i++;
            /*
            obj = {...obj, [x]: {title: y["title"]}}
            */
           
        }
    }
    console.log(obj)
    
    return obj;
}

const artwork= gatherArtwork()

export {users, artwork};