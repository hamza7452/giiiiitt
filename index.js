
let first="green";
if(first=="red"){
    console.log("stop");
}
if(first=="yellow"){
    console.log("wait");
}
if(first=="green"){
    console.log("go")
}

let size="xl";
if(size=="xl"){
    console.log("price is 250")
}
else if(size=="l"){
    console.log("price is 200")
}
else if(size=="m"){
    console.log("price is 100")
}
else{
    console.log("price is 50")
}

let day=5;
switch(day){
    case 1:
      console.log("monday");
      break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("thursday");
        break;
    case 5:
        console.log("friday");
        break;
    case 6:
        console.log("saturday");
        break;
    case 7:
        console.log("sunday");
        break;
    default:
        console.log("invalid");
        break;
}