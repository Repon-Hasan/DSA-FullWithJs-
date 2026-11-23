let num=124
let originalNum = num;
let reverse=0

while(num>0){
    let lastDigit=num%10 
    reverse=reverse*10 + lastDigit
    num=Math.floor(num/10)
}
if (originalNum === reverse) {
    console.log("Your Number is Palindrome", reverse);
} else {
    console.log("Your Number is Not Palindrome");
}
