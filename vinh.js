function add() {
  var number1 = document.getElementById('number1').value;
  var number2 = document.getElementById('number2').value;
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  var result = number1 + number2;
  alert('Your answer is: ' + result);
}
function sub() {
  var n1 = document.getElementById('number1').value;
  var n2 = document.getElementById('number2').value;
  var result = n1 - n2
  alert('Your answer is: ' + result);
}
function multi() {
  var n1 = document.getElementById('number1').value;
  var n2 = document.getElementById('number2').value;
  var result = n1*n2;
  alert('Your answer is: ' + result);
}
function div() { 
    var n1 = document.getElementById('number1').value;
    var n2 = document.getElementById('number2').value;
    var result = n1/n2;
    alert('Your answer is: ' + result);
}