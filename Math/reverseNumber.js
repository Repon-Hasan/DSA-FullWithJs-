let num=1234
let reverse=0

while(num > 0){
    let lastDigit=num%10
    reverse=reverse*10 + lastDigit
    num=Math.floor(num/10)
}
console.log("reverseString",reverse,typeof(reverse))