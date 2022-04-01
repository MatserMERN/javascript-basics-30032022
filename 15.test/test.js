console.log(multiply(2)(3)(4)) // 24

function multiply(x){
    return function(y){
        return function(z){
            return x*y*z
        }
    }
}

var a =10
var b = a
a =20
console.log(a)
console.log(b)

var a =[1,2]
var b = a
a.push(3)
console.log(a)
console.log(b)

var a =[1,2]
var b = a
a = [1,2,3]
console.log(a)
console.log(b)

var name = 1+ 2+ "scott" + 3 +4

console.log(name)

//12scott34
//3scott34

var output = (function(x){
    delete x
    return x
})(1)

console.log(output)

var output = (function(x){
    delete x
    return x
})({a:1})

console.log(output) 

var output = (function(x){
    delete x.a
    return x
})({a:1})

console.log(output) 