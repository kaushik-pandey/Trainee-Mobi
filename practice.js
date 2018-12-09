
function myFunc(){
    var x=document.getElementById("enter").value;
    arr.push(x);
    var  val = document.getElementById("iden").innerHTML=arr;
    document.getElementById("enter").value="";
}
var arr=[];