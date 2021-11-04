Array.prototype.removeDuplicatesAsync = function()  {
    let arr = this
new Promise(function(resolve){
    resolve(arr)
    
}).then(array=>{console.log(array.filter((a, b) => array.indexOf(a) === b))})
}

console.log(`start`);
[4, 1, 5, 7, 2, 3, 1, 4, 6, 5, 2].removeDuplicatesAsync(); 
console.log(`end`);

