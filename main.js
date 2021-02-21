array_1=[];
array_2=[];

function S(){
document.getElementById("1").innerHTML = "Deluxe veggie pizza"
document.getElementById("2").innerHTML = "Pepperoni  pizza"
document.getElementById("3").innerHTML = "Mexican green wave pizza"
document.getElementById("4").innerHTML = "Paneer pizza"
document.getElementById("5").innerHTML = "pasta pizza"
}


function Add_I(){
array_2 = [];
for(var J=1; J<=1;J++){
var S = document.getElementById("more").value;
array_2.push(S);
}
console.log(array_2);
for(var K=0; K<array_2.length; K++){
array_1.push("<h4>"+array_2[K]+"</h4>");
}
console.log(array_1);
array_3 = array_1.join("");
document.getElementById("output").innerHTML= array_3;
}