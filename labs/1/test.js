class User {
    constructor(props) {
        this.props = props;
    }
    sum(){
        return this.props.a+this.props.b;
    }
    printName(){
        console.log(`${this.props.userName}, id is ${this.props.id}`);
    }
  
}
var myUser = new User({userName:"Yoongi", id:3});
myUser.printName();
var myUser2 = new User({userName:"Namjoon", id:4});
myUser2.printName();
var myUser3 = new User({userName:"Taetae", id:5});
myUser3.printName();

function myFunction() {
    return this;
}

var objliteral = {
    a: 5,
    b: 6,
    c: myFunction
};

