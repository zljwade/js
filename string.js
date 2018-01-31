//ES6新增了一种模板字符串，表示方法和上面的多行字符串一样，但是它会自动替换字符串中的变量
var name = "lisi";
var age = 3;
console.log(`name : ${name},age : ${age}`);

//需要特别注意的是，字符串是不可变的，如果对字符串的某个索引赋值，不会有任何错误，但是，也没有任何效果：

var s = 'Test';
s[0] = 'X';
console.log(s); // s仍然为'Test'


const PI = 3.14;
//PI = 3; // chrome 下报错 string.js:14 Uncaught TypeError: Assignment to constant variable.at string.js:14
PI; // 3.14