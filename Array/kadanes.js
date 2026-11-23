// const arr = [-2, 1, -3, 4, -1, 2, 1];
const arr = [5,4,-1,7,8];

// function sumMax(num){
//     let maxSum=num[0]
//     let startIndex=0
//     let endIndex=0

//     for(i=0;i<num.length;i++){
//         let currentSum=0
//        // console.log("Current Sum",currentSum)
//         for(j=i;j<num.length;j++){
//             console.log(num[i],num[j])
//             currentSum+=num[j]
//         }
//         if(currentSum>maxSum){
//             maxSum=currentSum
//           startIndex=i
//           endIndex=j
//         }
//     }
//     console.log("max Sum is",maxSum,"And Array is",num.slice(startIndex,endIndex+1))
// }

// const data=sumMax(arr)

function sumMax(num){
   let max=num[0]
   let sum=0

   for(i=0;i<num.length;i++){
    sum +=num[i];

    if(sum>max){
        max=sum
    }if(sum<0){
        sum=0
    }
   }

   console.log("Max Value",max)
}

const data=sumMax(arr)