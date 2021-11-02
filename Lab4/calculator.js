window.onload = function(){
    
    let btn = document.getElementById('btn')
    btn.addEventListener('click',function(){
        let input1 = +document.getElementById('input1').value
    let input2 = +document.getElementById('input2').value
    
        
        document.getElementById('input3').value = input1 + input2;
    })
}