
document.getElementById("demo1").addEventListener("click",fun);
function fun(){
    document.getElementById("demo1").innerHTML="hii";
}
const secretNumber=Math.trunc(Math.random()*20)+1;
document.getElementById("number").textContent=secretNumber;
document.getElementById("demo").addEventListener("click",function(){
    const guess=Number(document.querySelector('.guess').value);
    if(!guess){
        document.getElementById("message").textContent="no number";
    }else if(guess==secretNumber){
        document.getElementById("message").textContent="you are correct";
        document.getElementById("page").style.backgroundColor="green";
    }else if(guess!=secretNumber){
        document.getElementById("message").textContent="wrong guess";
    }
});
document.addEventListener("keydownss",function(e){
    if(e.key == "Escape"){
        alert("key pressed");
    }
});