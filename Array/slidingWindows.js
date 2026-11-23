const arr = [1, 2, 3, 4, 5];

//Window Size=3

let window=[]
let i=0

for(i;i<arr.length;i++){
    //let slice=window.push(arr.slice(i,i+3)) 
    let slice=arr.slice(i,i+3)
    //console.log(slice)
    if(slice.length===3){
        window.push(slice)
    }
    
}

// console.log(window)
// console.log(window.length)

for(j=0;j<window.length;j++){
     console.log(`${j+1} chunk of Array:${window[j]}`)
}

