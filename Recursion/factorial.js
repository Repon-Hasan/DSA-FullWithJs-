function Recursion(num){
    if(num<0){
        return undefined
    }
   if(num===0){
    return 0
   } 
   if(num===1){
    return 1
   }
   
    return num * Recursion(num-1)
   
}

const data=Recursion(6)

console.log("Recursion is:",data)