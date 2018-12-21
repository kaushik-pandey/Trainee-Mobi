// List of @, #
// Text field with some input
// Text area inserted from list and text field and removed if clicked

var i=1;
var str;
function btnPress() // button
{
    
    var selectSymbol = document.getElementById('sel').value;
    var textField = document.getElementById('txt').value;
    
    var p = document.createElement("p");
    p.textContent = selectSymbol + textField;
    p.id = 'iden' + i++;
    p.setAttribute('onclick', 'addTextArea(`${this.id}`)');
    // p.onclick = addTextArea(p.id);
    document.body.appendChild(p);
    document.getElementById('txt').value = "";
    // alert(p.id);
   

}

function addTextArea(hold)
{
    str = document.getElementById('ta').value;
    if(str.search(document.getElementById(hold).innerHTML) != -1)
    {
        // str = document.getElementById('ta').value;
        str = str.replace(document.getElementById(hold).innerHTML, "");
        document.getElementById('ta').value = str;
    }
    else
    {
        str = document.getElementById('ta').value;
        str = str +" "+document.getElementById(hold).innerHTML;
        document.getElementById('ta').value = str;
    }
}s