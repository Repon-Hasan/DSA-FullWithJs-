let arr=[3,7,2,9,1]
let sum=0
let prefixSum=[]

for(i=0;i<arr.length;i++){
   
    for(j=0;j<=i;j++){
        sum+=arr[j]
    }
    prefixSum.push(sum)
    console.log(" sum \n",sum)
    sum=0
}

console.log("sum",prefixSum)