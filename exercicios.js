// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = prompt("Qual é a altura do retângulo?");
  const largura = prompt("Qual é a largura do retângulo?");

  const area = altura * largura;

  console.log(area);

}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt('Qual o ano atual?'))
  const anoDeNascimento = Number(prompt('Qual o ano do seu nascimento?'))
  const idade = anoAtual - anoDeNascimento


  console.log(idade)

  }

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual o seu nome?')
  const idade = Number(prompt('Qual sua idade?'))
  const email = prompt('Qual seu email?')

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Fale uma cor favorita')
  const cor2 = prompt('Fale outra cor favorita')
  const cor3 = prompt('Fale uma última cor favorita')
  const coresFavoritas = [cor1, cor2, cor3]

  console.log(coresFavoritas)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const breakEven = (custo/valorIngresso)
  return breakEven

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}
console.log(comprimentoIgual)
// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array.pop()

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiro = array.shift()
  const ultimo = array.pop()
  array.push(primeiro)
  array.unshift(ultimo)
  return array  
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
 return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Qual o ano atual?'))
  const anoDeNascimento = Number(prompt('Qual o seu ano de nascimento?'))
  const anoDeEmissao = Number(prompt('Qual o ano de emissão da carteira?'))

  const idade = anoAtual - anoDeNascimento
  const tempoDesdeEmissao = anoAtual - anoDeEmissao

  const precisaRenovar =
    (idade <= 20 && tempoDesdeEmissao >= 5) ||
    (idade > 20 && idade <= 50 && tempoDesdeEmissao >= 10) ||
    (idade > 50 && tempoDesdeEmissao >= 15)

  console.log(precisaRenovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const bissexto = (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0;
  return bissexto
  }

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  /*Escreva dentro da função checaValidadeInscricaoLabenu uma lógica que faz as seguintes perg
  untas ao usuário (condições para ser uma pessoa estudante da Labenu):/*/

  // // Você tem mais de 18 anos?
  const idade = prompt('Você tem mais de 18 anos?')
  const escolaridade = prompt('Você possui ensino médio completo?')
  // * Você possui ensino médio completo?
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
  
  const checaSeAlunoPodeEstudarNaLabenu = (idade === 'sim' && escolaridade === 'sim' && disponibilidade === 'sim' )

  console.log(checaSeAlunoPodeEstudarNaLabenu)

  // O usuário deve responder essas perguntas com "sim" ou "nao".

  // A função deve imprimir no console um booleano (true ou false) que indic
  // a se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer 
  // o curso da Labenu. A inscrição é válida quando todas as respostas para todas as perguntas forem positivas.*/

}