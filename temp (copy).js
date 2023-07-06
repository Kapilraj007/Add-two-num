var friend_age = {
    krishna :{
   age :32,
   name:"krishna",
   town:"salem"
},

    suthakar :23,
    nikihl: 33,
    jey:34
}
console.log(friend_age.krishna.name)

var cars =[1,43,53,2,4,3,5]//array is heterogenous in javascprit
console.log(cars.sort())
/*var num =[1002,44,32,4,23,3,23,123]
for(var i=0; i<num.length/2 ; i++){
    console.log(num[i]);
}
for(var x in num){
    console.log(num[x]);
}
*/
var sum =0

function addall(x){
    for(var j in x){
        sum+=cars[j]
    }
    console.log(sum)
}

addall(cars)

var arr = [
    {
        name: "harsha" ,age:20
    },
    {
        name: "kavin", age:33
    }, 
    {
        name: "krishna", age:33
    }
]
console.log(arr[0].name)