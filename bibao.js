function sum(arr){
    return arr.reduce(function(x,y){
        return x + y;
    });
}

console.log(sum([1, 2, 3, 4, 5])); // 15

function lazy_sum(arr){
    var sum = function(){
        return arr.reduce(function(x,y){
            return x + y;
        });
    }
    return sum;
}
/*
我们在函数lazy_sum中又定义了函数sum，并且，内部函数sum可以引用外部函数lazy_sum的参数和局部变量，当lazy_sum返回函数sum时，相关参数和变量都保存在返回的函数中，这种称为“闭包（Closure）”的程序结构拥有极大的威力。

请再注意一点，当我们调用lazy_sum()时，每次调用都会返回一个新的函数，即使传入相同的参数：

var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
f1 === f2; // false
f1()和f2()的调用结果互不影响。
*/
console.log(lazy_sum([1, 2, 3, 4, 5])()); 