let n = 7
let myArray = [1,2,1,2,1,3,2]

function sockMerchant(n,myArray){

  let estoque = []
  let pares = 0;
  
  myArray.sort()

  console.log(myArray)
  
  
  for (let i =0; i < n; i++){
      if (i === myArray.length){
        break
      }
      if (myArray[i] === myArray[i+1] ){
        pares++;
        i++;
      }
      
  }

  console.log(pares)
}

let aaa = sockMerchant(n,myArray)