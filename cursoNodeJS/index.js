let somar = (x1, operador, x2) => {

return eval(`${x1} ${operador} ${x2} `);

}

console.log(somar(2, "+" , 2));
let resultado = somar(3, "*" ,3);
console.log(resultado);