let c = [0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0]

let totalSteps = 0;

for (let i = 0; i < c.length; i++){
    console.log(`i <> 0: ${i}`)
    console.log(`c[${i}]: ${c[i]}`)
    console.log(`c[${i+1}]: ${c[i+1]}`)
    console.log(`total: ${totalSteps}`)
    if (i===0){
        totalSteps++;
        console.log(`i: ${i}`)
        continue;
    }
    else {
        if (c[i] === 0 && c[i+1] === 1){
            totalSteps++
            console.log(`total: ${totalSteps}`)
            continue;
        }
        else {
            if (c[i]===1) {
                continue;
            }
            if(c[i+1]===0) {
                console.log(`total: ${totalSteps}`)
                totalSteps++
                i++
                continue;

            }
            console.log(`total: ${totalSteps}`)
            totalSteps++

        }


    }


}

console.log(`Total de passos: ${totalSteps}`)