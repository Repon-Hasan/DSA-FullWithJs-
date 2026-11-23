let arr=[3,7,2,9,1]
let min=arr[0]

// for(i=0;i<=arr.length;i++){
//     if(arr[i]>max){
//         max=arr[i] 
//     }
// }
//  console.log(`Max element ${max}`)
//TimeComplexity O(n),SpaceComplexity O(1)

function minValue(arr){
for(i=1;i<=arr.length;i++){
    if(arr[i]<min){
        min=arr[i] 
    }
}
return min
}
data=minValue(arr)

console.log("Maximum Value",data)
