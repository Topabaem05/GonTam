const age = parseInt(prompt("너는 몇살?"))
 
if (isNaN(age) || age < 0){
    alert("Plase Write a Number")
}else if(age < 18) {
    alert("You are too young.")
}else if(age > 50 && age <= 80){
    alert("You are daninger")
}else if(age > 80) {
    alert("You are What ever")
}