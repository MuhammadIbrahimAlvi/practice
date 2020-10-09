// var name = 'sheryar';
// let jhoota = 'chal nikal';
// console.log(`my name is ${name} and i'm not a terrorist.`) 

// var name;

// setTimeout(function(){
// name ="number1"
// console.log(name)
// },1000);

// console.log("number 2");
// console.log("number 3");
// console.log("number 1");


// setTimeout(function(){
// name ="number1"
// // console.log(name)
// },1000);

// console.log(name);


var promise = new Promise(function(resolve,reject){
    var zinger = 'availables';
    if(zinger ==='available')
    resolve('han basit ne zinger khilaya');
    else
    reject('maya oo');
});

promise.then(function(data){
    console.log(data);
}).catch(function(error){
    console.log(error);
})