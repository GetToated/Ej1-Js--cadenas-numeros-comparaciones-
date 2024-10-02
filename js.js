// u1e1_numeros Lucas Vázquez Segura

var num1 = 1357;
var num2 = 1357;
var num3 = 135e7;
var num4 = 0o1357;
var num5 = 0x1356; 

alert("Numero entero: " + num1)
alert("Numero decimal: " + num2)
alert("Numero cientifico: " + num3)
alert("Numero octal: " + num4)
alert("Numero hexadecimal: " + num5)

//u1e2_cadenas Lucas Vázquez Segura

var text1 = "Hola";
var text2 = "7";
var text3 = "13";
var text4 = "Adios";

alert('Hola bon dia')
alert(text1 + " " + text4)
alert(text2 + text3)
alert(text1 + " " + text2 + " " + text3 + " " + text4)

//u1e3_comparacion Lucas Vázquez Segura

var oper1 = 10 == 10;
var oper2 = 10 === 10;
var oper3 = 10 == 10.0;
var oper4 = "Laura" == "Laura";
var oper5 = "Laura" > "Laura";
var oper6 = "Laura" < "Laura";
var oper7 = "123" == 123;
var oper8 = "123" === 123;
var oper9 = parseInt("123") === 123;

alert("La operacion 10 == 10 es " + oper1)
alert("La operacion 10 === 10 es " + oper2)
alert("La operacion 10 == 10.0 es " + oper3)
alert("La operacion Laura == Laura es " + oper4)
alert("La operacion Laura > Laura es " + oper5)
alert("La operacion Laura < Laura es " + oper6)
alert("La operacion 123 == 123 es " + oper7)
alert("La operacion 123 === 123 es " + oper8)
alert("La operacion convertida de 123 === 123 es " + oper9)