const sayHello = function (name){
    console.log("hello " + name);
}
sayHello("Sara");


const returnSayHello = function (name){

    return "hello " + name;

}

console.log(returnSayHello('Andy'));

const isEven = function(num){

    return num%2 ===0;

}
console.log(isEven(40));