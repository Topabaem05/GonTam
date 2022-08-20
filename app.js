const cal = {
    Plus: function (a,b){
        return a + b
    }, Minos: function (a,b){
        return a - b
    },Times: function (a,b){
        return a * b
    },divide: function (a,b){
        return a / b
    },Power: function (a,b){
        return a ** b
    },
};
const result = cal.Plus(4,5)

alert(result)