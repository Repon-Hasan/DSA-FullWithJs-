let arr=[3,7,2,9,1]
let max=arr[0]

// for(i=0;i<=arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i] 
//     }
// }
//  console.log(`Max element ${max}`)

function maxValue(arr){
for(i=1;i<=arr.length;i++){
    if(arr[i]>max){
        max=arr[i] 
    }
}
return max
}
data=maxValue(arr)

console.log("Maximum Value",data)
