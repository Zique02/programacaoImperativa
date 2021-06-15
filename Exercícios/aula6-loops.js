console.log("\n1°")
for(let i=1;i<=5;i++){

    console.log("Olá mundo")
}
console.log("\n2°")

for(let i=1;i<10;i=i+2){
    console.log(i)
}

console.log("\n3°")
for(let i=1;i<=10;i++){

    if (i>1){
        console.log("\n")
    }
    for(let m=1;m<=10;m++){
        console.log(i+"*"+m+"="+i*m)
    }
}