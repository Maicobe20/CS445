
const isPrime = num => {
  return new Promise((resolve,reject)=>{
       setTimeout(function(){ for(let i = 2, s = Math.sqrt(num); i <= s; i++)
        if(num % i === 0) resolve({prime:false}); 
    reject({prime: num > 1})}) ;
    })
   
}


console.log('start');
isPrime(7)
   .then(res => console.log(res))
    .catch(err => console.error(err));
console.log('end');


async function prime(){
    let x = await isPrime()
}