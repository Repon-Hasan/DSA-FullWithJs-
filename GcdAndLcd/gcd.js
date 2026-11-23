let a=18
let b=12

let x=a
let y=b

while(b >0){
    let reminder=a%b
    a=b
    b=reminder
}

console.log("GCD is",a)
console.log(a,b)
let lcm=(x*y)/a
console.log("LCM is",lcm)
