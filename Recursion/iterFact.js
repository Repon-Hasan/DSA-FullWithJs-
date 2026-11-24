function iterativeFact(num){
    let fact=1
    if(num===0 || num===1){
        return fact
    }

    for(i=1;i<=num;i++){
        fact *=i
    }
    return fact
}


const data=iterativeFact(5)
console.log("Recursive_Iterations",data)