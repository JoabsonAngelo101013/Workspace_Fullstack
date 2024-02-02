const mediaAprovado = 7;
const notas = [10.0, 10.0, 10.0];

console.log(`A primeira nota é: ${notas[0]}`);
console.log(`A segunda notas é: ${notas[1]}`);
console.log(`Á terceira nota é: ${notas[2]}`);

var media = (notas[0]+notas[1]+notas[2])/notas.length;

console.log(`a media é: ${media}`);

if (media >= mediaAprovado) {
    if (media == 10) {
      console.log("Aprovado com Mérito");
    } else {
      console.log("Aprovado");
    }
  } else {
    console.log("Reprovado");
  }