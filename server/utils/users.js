[{
    id: '/32r2knkf',
    name:'jc',
    room:'The offfice'
}]

class Users{
    constructor(){
        this.users = [];
    }
    addUser(id,name,room){
        var user = {id,name,room};
        this.users.push(user);
        return user;
    }
    removeUser(id){
        var user = this.getUser(id);
        if(user){
            this.users = this.users.filter((user)=> user.id !==id);
        }
        return user;
    }
    getUser(id){
        var users = this.users.filter((user)=> user.id===id)[0];
        return users;
    }
    getUserList(room){
        var users = this.users.filter((user)=>{
            return user.room === room;
        });
        var namesArray = users.map((user)=>{
            return user.name;
        });
        return namesArray;
    }
}
module.exports={Users};

// class Person {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
//     getUserDescription(){

//     }
// }

// var me = new Person('Andrew',25);
