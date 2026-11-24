function getFibonacciSeries(n){
    if(n<0){
        return undefined
    }
    if(n===0){
           return [0]
    }
    if(n===1){
        return [0,1]
    }
   let series=[0,1]


   for(i=2;i<n;i++){
    
    const nextValues=series[i-1] + series[i-2]

    series.push(nextValues)
   }

   return series
  
}

const data=getFibonacciSeries(5)
console.log("Fibonacci Number:",data)