window.onload = function(){
    
    document.getElementById("btn").onclick = function(){
        let image1=document.getElementById("input1")
        let image2=document.getElementById("input2")
        let x = image1.src;
        image1.src = image2.src
        image2.src = x
        
    }
 
}
