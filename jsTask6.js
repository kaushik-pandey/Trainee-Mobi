// List of @, #
// Text field with some input
// Text area inserted from list and text field and removed if clicked
// var arr = [];
// var tArr = [];
var str;
var i = 0;
arr.push(document.getElementById('ta').value);
function btnPress() // button
{
    var sym = document.getElementById('sel').value;
    var textField = document.getElementById('txt').value
    if(sym == '@')
        document.getElementById('p1').innerHTML = sym + textField;
    if(sym == '#')
        document.getElementById('p2').innerHTML = sym + textField;
    document.getElementById('txt').value = "";
    arr.push(document.getElementById(''))
}

function firstLine() // when first p is clicked
{ 
    str = document.getElementById('ta').value;
    if(str.search(document.getElementById('p1').innerHTML) != -1)
    {
        // str = document.getElementById('ta').value;
        str = str.replace(document.getElementById('p1').innerHTML, "");
        document.getElementById('ta').value = str;
    }
    else
    {
        str = document.getElementById('ta').value;
        str = str +" "+document.getElementById('p1').innerHTML;
        document.getElementById('ta').value = str;
    }
    
}
function secondLine() // when second p is clicked
{
    str = document.getElementById('ta').value;
    if(str.search(document.getElementById('p2').innerHTML) != -1)
    {
        // str = document.getElementById('ta').value;
        str = str.replace(document.getElementById('p2').innerHTML, "");
        document.getElementById('ta').value = str;
    }
    else
    {
        str = document.getElementById('ta').value;
        str = str +" "+document.getElementById('p2').innerHTML;
        document.getElementById('ta').value = str;
    }
    
}
function setTA(){
    document.getElementById('ta').value;
}