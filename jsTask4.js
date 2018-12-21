//INPUT NUMBER INTO THE LIST AND PRINT SEPARATED BY , + *

function myList(){ //function called when button is clicked
    var input=document.getElementById('val').value;
    if(input != parseInt(input)) //check if entered string is number or not
    {   // if not number, then enter into this block
        alert("Please enter number"); //show alert message on top
        document.getElementById('val').value=""; //text field gets empty
    }
    else{ // if number, then enters into this block
        arr.push(input); //inserts the user value into array
        arr.push(sym[i]); // elements of 'sym' array is inserted into 'arr' array one by one
        i++; //increments i by 1
        if(i==3)
        {
            i=0; //i reset to 0 to insert 'sym' elements
        }

        document.getElementById('print').innerHTML=arr.join(" "); //prints array separated by space " " only
        document.getElementById('val').value=""; //text field set to empty
        
    }
        
        
    
    
}
var i=0;
var arr=[];
var sym = [',', '+', '*'];