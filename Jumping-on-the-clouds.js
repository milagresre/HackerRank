let c = [0,0,1,0,0,1,0]
    //[0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0]
    //[0,0,1,0,0,1,0]
    //[0,0,0,1,0,0]
let totalJumps = 0;

let i = 1;
while(i < c.length ){
  
    
    console.log(`Jumps: ${totalJumps}`)
    
    if (c[i]===0 && c[i+1]===0){
        i+=2
        totalJumps++
    }
    else {
        if (c[i]===1) {
            i++
        }
        if(c[i]===0){
            i++;
            totalJumps++
        }
    }
    console.log(`i : ${i}`)
    console.log(`c[${i}]: ${c[i]}`) 

    


}
console.log(`Total de passos: ${totalJumps}`)

