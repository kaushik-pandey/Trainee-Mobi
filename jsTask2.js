// USER SELECTS DATE AND THEN PRINTS IN THE STANDARD FORMAT

function rDate(){
    var cDate= new Date(); //current date
    var x=document.getElementById('dt').value; //date input by user
    var  nx=new Date(x); // input date changed to standard format
    var arrD=["January", "February", "March", "April", "May", "June",
             "July", "August"," September", "October", "November", "December"];
    var dd=nx.getDate();
    var mm=nx.getMonth();
    var yy=nx.getFullYear();
    var suf; //variable that holds suffix

    switch(dd%10) //return last digit
    {
        case 1: if(dd%100>10 && dd%100<20 )
                    suf="th";
                else
                    suf="st";
        break;
        case 2: if(dd%100>10 && dd%100<20)
                    suf="th";
                else
                    suf="nd";
        break;
        case 3: if(dd%100>10 && dd%100<20)
                    suf="th";
                else
                    suf="rd";
        break;
        default: suf="th";
    }
    document.getElementById('lnk').innerHTML=dd+suf+" "+arrD[mm]+", "+yy;
    
}
function valIt()
{
    var today= new Date();
var dd = today.getDate() - 1;
var mm = today.getMonth()+1;
var yyyy= today.getFullYear();
if(dd<10)
    dd='0'+dd;
if(mm<10)
    mm='0'+mm;
today = yyyy+"-"+mm+"-"+dd;
document.getElementById("dt").setAttribute("max", today);
}