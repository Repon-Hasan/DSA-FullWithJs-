function getFibonacciSeries(n){
    if(n<0){
        return undefined
    }
    if(n===0){
           return 0
    }
    if(n===1){
        return 1
    }

    return getFibonacciSeries(n-1) + getFibonacciSeries(n-2)
}

const data=getFibonacciSeries(8)
console.log("Fibonacci Number:",data)