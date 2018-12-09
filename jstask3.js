function myVal(){
    var x= new Date(document.getElementById('idate').value);
    var y= new Date(document.getElementById('odate').value);
    var a=new Date(y-x);
    var b=a.getDate();
    document.getElementById('setit').innerHTML= "<br/>"+b+" Days";
}