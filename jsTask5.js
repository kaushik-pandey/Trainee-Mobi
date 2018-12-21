var firstArray = [1,2,3,2]; 
        //  0 1 2 3
var secondArray = [3,4,5]; 
        //  0 1 2

var thirdArray = firstArray.concat(secondArray);
var finalArray = [];

for(var i = 0; i < thirdArray.length; i++)
{
    for(var j = 0; j < i; j++)
    {
        if(thirdArray[i] == thirdArray[j])
            break;
       
    }
    if(i == j)
        finalArray.push(thirdArray[i]);
}

console.log(finalArray);
