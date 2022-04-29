
document.addEventListener("DOMContentLoaded", function(e) {
    // Aqui vai o seu código
    if(e==undefined){
        return e;
    }
    
    /*
    var element=document.getElementById('bt1');
    try{
        element.addEventListener("onclick", sayit("opa"));
    }catch(er){
        alert(er);
    }
    
    alert(element);
*/
});

function sayit(xxx){
    if(xxx=='1') return;
    alert('header.js!!'+xxx);

    
}
sayit('1')
