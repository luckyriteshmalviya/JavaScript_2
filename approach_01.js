// // Calculate the valid parenthesis in a string 
// var str = "((())(("
// var arr = [...str];
// var count = 0;
// console.log(arr);
// for (let i=0; i<arr.length; i++){
// // var pair ="()"
// if (arr[i]=="("  && (arr.slice(i,arr.length)).match(")")==")" ){
//     count++;
//     arr.splice(i,1);
//     arr.splice(j,1);
// }
// }
//  var res = count*2;
//  console.log(res);



// Calculate the valid parenthesis in a string 
var str = "(((()))"           // Ans. 4
var arr = [...str];
var count = 0;
// console.log(arr);
for (let i=0; i<arr.length; i++){
    console.log("value of i:",[i]);
if (arr[i]=="(" )
{ 
    // console.log("ln28, value of i:" , [i])
    for (j=i++; j<=arr.length; j++){
    if (arr[j] == ")" ){
    count+=2;

    console.log("value of j :", [j]);
    arr.splice(i,0);
    console.log("ln 34:",arr);
    arr.splice(j,1);
    console.log("ln 36:",arr);
    // console.log("Ln 32: value of count:", count);
    break;}
    // else{
    // // console.log("else , value of j:" , [j]);
    // continue;}}
    }
}}
 console.log("ln 47, value of res:",count)