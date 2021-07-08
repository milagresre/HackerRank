let a = [1,2,3,4,5];

let d = 2;

let b = [];

for(let i = d; i< a.length; i++){
    b.push(a[i])
    console.log(a[i])
}

for(let j = 0; j < d; j++){
    b.push(a[j])
   console.log(a[j])
}

console.log(b)