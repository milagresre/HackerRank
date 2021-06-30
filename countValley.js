let t = 0
let path = ['U','D','D','D','U','D','U','U']

let totalD = 0
let totalU = 0

let ehMontanha = false
let ehVale = false

let qtdVale = 0

for (let i = 0; i < path.length; i++){
   ehVale=false
   ehMontanha=false
    if (path[i] === 'D') {
        totalD++
        if (totalD === totalU) {
            ehMontanha = true
        }
        
    }
    else {
        totalU++
        if (totalU === totalD) {
            ehVale = true
            qtdVale++
        }
    }

    if (ehMontanha || ehVale){
        totalD = 0
        totalU = 0
    }
  

}

console.log(`Quantidade de vales ${qtdVale}`)

