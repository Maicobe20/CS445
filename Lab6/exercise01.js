
const isPrime = num => {
  return new Promise((resolve,reject)=>{
       setTimeout(function(){ for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) reject({prime:false}); 
    resolve({prime: num > 1})},500) ;
    })
}

async function process(num){
   try{ let result = await isPrime(num);
    console.log(result);
}catch(data){
    console.log(data);
} 
}


console.log('start');
process(4)
console.log('end');