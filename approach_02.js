var str_01 = "(())())"
var str = [...str_01];
var stack = [];
var count = 0;
for (let i= 0; i<str.length; i++){
    if (str[i]==  "(" ){
        stack.push(str[i]);
        console.log("ln 10:",stack , [i]);
        for (let j = i+1; j<=str.length; j++){
            if (str[j]==")"){
                stack.push(str[j]);
                console.log("ln 14:",stack, [j]);
                if (stack.includes("(") && stack.includes(")")){
                    count+=2;
                    console.log("count:", count)
                    str.pop("(");
                    str.pop(")");
                    console.log("ln 20: stack", stack);
                    break;
                }
                str.pop("(");
                str.pop(")");
            }
        }
    }
}
console.log(count);