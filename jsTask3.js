//CHECKIN CHECKOUT DATE SELECTION WITH RETURNING TOTAL DAYS INBETWEEN
function callThis(){
    var today= new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy= today.getFullYear();
if(dd<10)
    dd='0'+dd;
if(mm<10)
    mm='0'+mm;
today = yyyy+"-"+mm+"-"+dd;
document.getElementById("d1").setAttribute("min", today);
document.getElementById("d2").setAttribute("min", today);
enable();
}

function myDay()
{

    var dp1 = document.getElementById('d1').value;
    var dp2 = document.getElementById('d2').value;
    var ddp1 = new Date(dp1);
    var ddp2 = new Date(dp2);
    if(dp1.length == 0 || dp2.length == 0 )
    {
        alert("Enter dates first");
    }
    else
    {
        if(ddp2.getTime() < ddp1.getTime())
        {
            alert("Check-out should be after chech-in");
            document.getElementById('cin').innerHTML = "";
            document.getElementById('cout').innerHTML= "";
            document.getElementById('nday').innerHTML = "";
        }
        else
        {
            document.getElementById('cin').innerHTML = ddp1;
            document.getElementById('cout').innerHTML= ddp2;

            var timeDiff = Math.abs(ddp2.getTime() - ddp1.getTime());
            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
            document.getElementById('nday').innerHTML = diffDays;
        }
        
    }
        
}
function enable()
{
    document.getElementById("btn").disabled = false;
}

