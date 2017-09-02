var doc = document;
function getClick(obj){ 
    var id1 =  doc.getElementById(obj.id1),
        id2 = doc.getElementById(obj.id2);
    id1.onclick = function(){
        if (id2.style.display != "block") {id2.style.display = "block";}
        else{id2.style.display = "none";}
    }
}
