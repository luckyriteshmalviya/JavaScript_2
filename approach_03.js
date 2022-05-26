var str = "(())()";
var arr = [...str];
var stack = [];
var count =0;
for (let i =0; i<arr.length; i++){
    if (arr[i] == "("){
        stack = arr.slice(i)
        console.log(stack)
        for (j=i+1; j<arr.length; j++){
            if(stack[j]==")"){
                count+=2;
            }
        }
    }
}
console.log(count);