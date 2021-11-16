class User{
    constructor(name){
        this.name = name
    }
}

class DecoratedUser{
    constructor(user,address,city){
        this.name = user.name;
        this.address = address;
        this.city = city
    }
    logger(){
        console.log(this.name + ' '+ this.address+' '+this.city)
    }
}
const user = new User("Kelly");

const decorated = new DecoratedUser(user, "Broadway", "New York");
decorated.logger();