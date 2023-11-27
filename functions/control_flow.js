 const  month = 1
switch ( month){
    case 1: 
    console.log("january");
    break;

    default: 
    console.log("None")
    break;
}

// falsey value 
// NaN undefined , false , 0 , -0 , 0n , "", BigInt.

// truthy
//"0", "false" , " ",{}, [], function(){}

const emptyObj ={}

if(Object.keys(emptyObj).length===0){ console.log("object is empty");}