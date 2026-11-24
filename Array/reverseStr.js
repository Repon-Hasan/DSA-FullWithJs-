let str="hello"

let strArr=str.split("") //Convert to an array 
//console.log(strArr)

let reverseStr=[]
 for(i=strArr.length-1;i>=0;i--){
    ///console.log(strArr[i])
    reverseStr.push(strArr[i])
 }

 //console.log(reverseStr)


 let start=0
 let end=strArr.length-1
console.log("hello")
 while(start<end){
    let temp=strArr[start]
    strArr[start]=strArr[end]
    strArr[end]=temp
    start++
    end--
 }

 console.log("Reverse Array",strArr)
 console.log("Reverse Array",strArr.join(""))