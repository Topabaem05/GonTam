const age = parseInt(prompt("너는 몇살?"))
const Name = prompt("너의 이름")
 
if (isNaN(age)){
    alert("Plase Write a Number")
}
else {
    alert("Hello" + String(Name))
}