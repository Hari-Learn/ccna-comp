const x = ["H","A","R","I","H","A","R","A","N"];
const dup = [];
for(let i = 0;i<=x.length-1;i++){
    console.log(i);
    if(i !== x.indexOf(x[i]) && !dup.includes(x[i])){
        dup.push(x[i])
    }
}
console.log(dup)
const uni = [...new Set(x)]
console.log(uni)
