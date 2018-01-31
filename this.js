
var xiaoming = {
    name:"小明",
    birth:'1990',
    age:function(){
        var y = new Date().getFullYear();
        return y - this.birth;
    }

}

console.log(xiaoming.age);
/*
ƒ (){
        var y = new Date().getFullYear();
        return y - this.birth;
    }
*/
console.log(xiaoming.age());

var xiaoming1 = {
    name:"小明",
    birth:'1990',
    age:getAge

}


function getAge(){
    var y = new Date().getFullYear();
    return y - this.birth;
}

console.log(xiaoming1.age());
console.log(getAge());//NaN

var fn = xiaoming1.age; // 先拿到xiaoming的age函数
console.log(fn()); // NaN

console.log(fn.apply(xiaoming1,[]));

Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5