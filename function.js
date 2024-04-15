function person(x,y){
    const name=frst(x);
    const age=scnd(y);
    console.log(name,age);
}
function frst(x){
    return `jatangi ${x}`;
}
function scnd(y){
    return y+5;
}
person("thanu",21)

