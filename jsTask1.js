//SECOND LARGEST ELEMENT

var arr= [1,2,3,4,5,6,7,9,7,8];
temp=arr[0];
var max= Math.max(...arr);
for(i=0; i<arr.length; i++)
{
    if(arr[i]!=max){
        if(temp<arr[i])
    {
        temp= arr[i];
    }
    }
    
}
console.log(temp);