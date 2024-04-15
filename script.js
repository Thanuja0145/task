
document.getElementById("demo").addEventListener("click", myFunction);
function myFunction() {

document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

}
let x=[1,2,3,[4,5]];
const [a, , c,[d,e]]=x;
console.log(a,c,d,e)
const q=[prompt('let\'s make webpage'),prompt('add another')];
console.log(q)
const z={
    k:{
        name:"thanu",
        id:100,
    },
    
};
const game={
    team1:"bavern munich",
    team2:"borrussia dortmund",
    players:[[
        "a",
        "b",
        "c",
        "d",
        "e",
    ],
    [
        'x',
        'y',
        'z',
        
    ]],
    score:'4:0',
    scored:['a','b'],
    date:'nov 9th,2037',
    odds:{
        team1:1.33,
        x:3.2,
        team2:5,
    
    },
    z,

};

const [players1,players2]=game.players;
console.log(players1,players2)
console.log(game.z)
const A={
    1:"q",
    y:2,
    z:"e"
};
console.log(Object.values(A))
const fun=function(a=1,b=2,c=3){
    console.log(a,b,c);
};
fun(10);
var v1=10
var v2=20
const fun1=function(v1,v2){
    let temp;
    temp=v1;
    v1=v2;
    v2=temp;
    console.log(`${v1},${v2}`)
};
fun1(v1,v2)
console.log(v1,v2)
const obj={num:2};
const arr1=[1,2,3]
const fun2=function(a,b,c){
    return this.num+a+b+c;
    
};
console.log(fun2.apply(obj,arr1));
(function(){
    console.log("hii");
})();
arr=[1,2,3,4];
arr.forEach(function(x){
    console.log(x);
});
for(let i=0;i<10;i++){
    console.log(i)
}