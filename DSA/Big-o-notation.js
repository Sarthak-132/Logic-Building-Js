// Time-Complexity 
// Repeat code n times and other some single line (n+2) this process done because we can not measure absolute time of execution.
// 		- Worst case Time complexity o(n) - Linear - (input size increase so time complexity will increase.


// *** o(n) - Linear Time-Complexity
function sum (n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        total += i;
    }
    return total;
}
console.log(sum(6));



// *** o(n) - Constant  Time-Complexity
function sum1 (n){
    return (n * (n + 1) / 2);
}
console.log(sum1(6));



// *** o(n^2) - Quadratic Time-Complexity
function sum3 (n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            total += i * j;
        }
    }
    return total;
}
console.log(sum3(6));


// *** o(n^3) - CUBIC Time-Complexity

function sum4 (n){
    let total = 0;
    for(let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
            for(let k = 1; k <= n; k++){
                total += i * j * k;
            }
        }
    }
    return total;
}
console.log(sum4(6));