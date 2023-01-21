 let str ="Apple,Banana,kiwi,Banana";
const bananaindex =str.lastIndexOf ("Banana",);
console.log("position", bananaindex);
const newstring =str .slice(bananaindex);
document.getElementById("demo").innerHTML = newstring
console.log("New String After Slice",newstring);

let text2 = "The rain in SPAIN stays mainly in a plain";
const matchReturnValue =text2.match(/ain/gi);
console.log("returned value",matchReturnValue);

