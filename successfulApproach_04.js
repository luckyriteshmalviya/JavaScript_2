// // Calculate the valid parenthesis in a string 

/** #1 Convert the string into an array.
 *  #2 Create two variable - (Stack and count).
 *  #3 Create a loop.
 *  #4 Inside the loop, put the each element in stack one bye one.
 *  #5 Create an another loop inside the previous loop.
 *  #5 Create a condition (if two adjacent index has the value of valid parenthesis) then count will increase by 2.
 *  #6 Now Remove that valid parenthesis from the stack variable.
 *  #7 Give output in the form of count.
 */
var str = "))(()))))(()))";
var arr = [...str];
var stack = [];
var count = 0;
for (let i=0; i<arr.length; i++){
       stack.push(arr[i]);
    for (j=0; j<arr.length; j++){
    if (stack[j]=="(" && stack[j+1]==")"){
        count+=2;
        stack.splice(j,2);
    }}
}
console.log(count);