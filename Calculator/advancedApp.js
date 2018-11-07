let printCalculation = function(operator, calculate) {
    console.log("20 " +operator+ " 3= " +calculate(20,3));
}

let plus = function(num1, num2) {
    return num1 + num2;
}

let minus = function(num1, num2) {
    return num1 - num2;
}

let mal = function(num1, num2){
    return num1 * num2;
}

let division = function(num1, num2){
    return num1 / num2;
}

printCalculation("+", plus);
printCalculation("-", minus);
printCalculation("*", mal);
printCalculation(":", division);

printCalculation("^", function (num1, num2) {
    return num1 ** num2;
});
printCalculation("%", function (num1, num2) {
    return num1 % num2;
});

printCalculation(("^"), (num1, num2) => num1 ** num2);

printCalculation(("%"), (num1, num2) => num1 % num2);
