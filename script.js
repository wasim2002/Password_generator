const input = document.querySelector("#input")
const length = 12
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowercase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = `~!@#$%^&*()_+=-{}[\|;:'"/?.>,<]`
const mix = uppercase+lowercase+number+symbol
function createPassword(){
    password = ""
    // password +=uppercase[Math.floor(Math.random()*uppercase.length)]
    // password +=lowercase[Math.floor(Math.random()*lowercase.length)]
    // password +=number[Math.floor(Math.random()*number.length)]
    // password +=symbol[Math.floor(Math.random()*symbol.length)]
    // password += mix[Math.floor(Math.random()*mix.length)]
    while(password.length<length){
        password += mix[Math.floor(Math.random()*mix.length)]
    }
    input.value=password
}
function copy(){
    input.select
    document.execCommand("copy")
}
