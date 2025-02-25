//Exercícios de JavaScript: Operadores Aritméticos, Relacionais e Lógicos (Exibição via Função)

//Nível Iniciante

//Crie duas variáveis, num1 e num2, atribua valores numéricos a elas, e calcule a soma. Exiba o resultado em um elemento HTML usando uma função mostrarResultado(resultado).
//SOMA SIMPLES
var num1 = 5;
var num2 = 10;
var soma = num1 + num2;

console.log("A soma é: " + soma);

function mostrarResultado() {
  alert("A soma é: " + soma);
}

//Crie duas variáveis, valorInicial e desconto, atribua valores numéricos a elas, e calcule o valor final após o desconto. Exiba o resultado em um elemento HTML usando uma função mostrarResultado(resultado).
//SUBTRAÇÃO
var valorInicial = 20;
var desconto = 10;
var sub = valorInicial - desconto;

console.log("A subtraçã é: " + sub);

function mostrarSubtracao() {
  alert("A subtração é: " + sub);
}

//Calcule a área de um quadrado cujo lado é definido por uma variável. Exiba a área em um elemento HTML usando uma função mostrarResultado(resultado).
//MULTIPLICAÇÃO
var lado = 6;
var areaQuadrado = 6 * 6;

console.log("A área do quadrado é: " + areaQuadrado);

function mostrarMultiplicacao() {
  alert("A área é do quadrado é: " + areaQuadrado)
}

//Divida o valor total de uma conta de restaurante pelo número de pessoas para encontrar o valor que cada um deve pagar. Exiba o resultado em um elemento HTML usando uma função mostrarResultado(resultado).
//DIVISÃO
var conta = 200;
var NPessoas = 4;
var divisão = 200 / 4;

console.log("A divisão é: " + divisão)

function mostrarDivisao() {
  alert("A divisão é: " + divisão)
}

//Verifique se um número (armazenado em uma variável) é par ou ímpar usando o operador de resto (%). Exiba "Par" ou "Ímpar" em um elemento HTML usando uma função mostrarParImpar(mensagem).
//RESTO DA DVISÃO
var numero = 101;
var resto = numero % 5;

console.log("O número é: " + resto);

function mostrarParImpar() {
  if (numero % 2 === 0) {
    alert("O número " + resto + " é par.");
  } else {
    alert("O número " + resto + " é ímpar.");
  }
}

//Crie uma variável com valor inicial 0. Incremente essa variável em 1 a cada repetição de um loop (simule um loop com 5 iterações). Exiba o valor atualizado em um elemento HTML usando uma função mostrarIncremento(valor).
//INCREMENTO
var valorInicial = 0;

function mostrarIncremento() {
  alert("O valor final do contador é: " + valorInicial)
  valorInicial++; //Incremento em 1 (contador agora é 1)
}

//Crie uma variável com um valor inicial (ex: 10). Decremente-a em 1 a cada repetição de um loop (simule com 5 iterações). Exiba o valor atualizado em um elemento HTML usando uma função mostrarDecremento(valor).
//DECREMENTO
var valorInicial2 = 10;

function mostrarDecremento() {
  alert("O valor final do contador é: " + valorInicial2)
  valorInicial2--; //Incremento em 9 (contador agora é 9)
}

// Compare duas variáveis numéricas usando o operador de igualdade (==). Exiba true ou false em um elemento HTML usando uma função mostrarResultadoComparacao(mensagem).
//IGUALDADE
var numero1 = 20;
var numero2 = 20;

console.log("numero1 == numer2: " + (numero1 == numero2));

function mostrarResultadoComparacao() {
  if (numero1 === numero2) {
    alert("Os números são iguais");
  } else {
    alert("Os números não são iguais");
  }
}

//Compare duas variáveis de string usando o operador de desigualdade (!=). Exiba true ou false em um elemento HTML usando uma função mostrarResultadoComparacao(mensagem).
//DESIGUALDADE
var string3 = "20";
var string4 = "30";

function mostrarResultadoComparacaoS() {
  if (string3 != string4) {
    alert("As strings são iguais");
  } else {
    alert("As strings não são iguais");
  }
}

//Compare a idade de duas pessoas (armazenadas em variáveis) usando o operador >. Exiba true se a primeira pessoa for mais velha que a segunda, e false caso contrário, em um elemento HTML usando uma função mostrarResultadoComparacao(mensagem).
//MAIOR QUE
var numero3 = 40;
var numero4 = 50;

function mostrarResultadoComparacaoM() {
  if (numero3 > numero4) {
    alert("true");
  } else {
    alert("false");
  }
}

//Verifique se o preço de um produto (armazenado em uma variável) é menor que um orçamento (armazenado em outra variável). Exiba true se o preço estiver dentro do orçamento, e false caso contrário, em um elemento HTML usando uma função mostrarResultadoComparacao(mensagem).
//MENOR QUE
var preco = 80;
var orcamento = 100;

function mostrarResultadoComparacaoMQ() {
  if (preco < orcamento) {
    alert("true");
  } else {
    alert("false");
  }
}

//Determine se um aluno foi aprovado em uma prova (nota >= 7). Exiba "Aprovado" ou "Reprovado" em um elemento HTML usando uma função mostrarResultadoAprovacao(mensagem).
//MAIOR OU IGUAL A
var nota = 3;

function mostrarResultadoAprovacao() {
  if (nota >= 7) {
    alert("O aluno está: Aprovado");
  } else {
    alert("O aluno está: Reprovado");
  }
}

//Verifique se a quantidade de itens em estoque é suficiente para atender a um pedido (estoque <= quantidade solicitada). Exiba "Atender pedido" ou "Estoque insuficiente" em um elemento HTML usando uma função mostrarResultadoEstoque(mensagem).
//MENOR OU IGUAL A 
var qItens = 200;
var qSolicitada = 100

function mostrarResultadoEstoque() {
  if (qItens <= qSolicitada) {
    alert("Há estoque suficiente para o pedido");
  } else {
    alert("O estoque insuficiente para o pedido");
  }
}

//Verifique se uma pessoa pode votar (idade >= 16) e se possui título de eleitor (possuiTítulo === true). Exiba "Pode votar" ou "Não pode votar" em um elemento HTML usando uma função mostrarResultadoVoto(mensagem).
//AND LÓGICO
var idade = 19;
var titulo = "Sim";

function mostrarResultadoVoto() {
  if (idade >= 18 && titulo === "Sim") {
    alert("Pode Votar");
  } else {
    alert("Não pode votar");
  }
}

//Verifique se um aluno tem direito a bolsa se tiver nota >= 9 ou frequência >= 90%. Exiba "Tem direito a bolsa" ou "Não tem direito a bolsa" em um elemento HTML usando uma função mostrarResultadoBolsa(mensagem).
//OR LÓGICO
var nota2 = 8;
var frequencia = "80%"

function mostrarResultadoBolsa() {
  if (nota2 >= 9 || frequencia >= "90%") {
    alert("Tem direito a bolsa");
  } else {
    alert("Não tem direito a bolsa");
  }
}



//Nível Intermediário

//Calcule a média de três notas (armazenadas em variáveis) e determine se o aluno foi aprovado (média >= 7). Exiba "Aprovado" ou "Reprovado" em um elemento HTML usando uma função mostrarResultadoAprovacao(mensagem).
//CALCUALANDO MÉDIA
var m1 = 3;
var m2 = 4;
var m3 = 5;
var calculoMedia = (m1 + m2 + m3) / 3

function mostrarResultadoAprovacao2() {
  if (calculoMedia >= 7) {
    alert("Aprovado");
  } else {
    alert("Reprovado");
  }
}

//Converta uma temperatura de Celsius para Fahrenheit usando a fórmula (C * 9/5) + 32. Exiba a temperatura em Fahrenheit em um elemento HTML usando uma função mostrarTemperaturaFahrenheit(temperatura).
//CONVERSÃO DE TEMPERATURA
var C = 10;
var F = (C * 9 / 5) + 32;

console.log("A temperatura em fahrenheit é: " + F);

function mostrarTemperaturaFahrenheit() {
  alert("A temperatura em fahrenheit é: " + F);
}

//DESCONTO CONDICIONAL
var produto = 90;
var desconto = produto - (produto / 100) * 10

function mostrarValorFinalCompra() {
  if (produto >= 100) {
    alert("Seu produto tem direito ao desconto de 10%, sendo o valor atual: " + desconto);
  } else {
    alert("Seu produto não tem direito ao desconto de 10%, somente acima de R$100,00");
  }
}

//Determine se um número é múltiplo de 3 e de 5 ao mesmo tempo. Exiba "É múltiplo de 3 e 5" ou "Não é múltiplo de 3 e 5" em um elemento HTML usando uma função mostrarResultadoMultiplo(mensagem).
//VERIFICAÇÃO DE MÚLTPLOS
var nume = 16;

function mostrarResultadoMultiplo() {
  if (nume % 3 === 0 && nume % 5 === 0) {
    alert("É múltiplo de 3 e 5");
  } else {
    alert("Não é múltiplo de 3 e 5");
  }
}

// Verifique se um número está dentro de um intervalo específico (ex: entre 10 e 50, inclusive). Exiba "Está dentro do intervalo" ou "Não está dentro do intervalo" em um elemento HTML usando uma função mostrarResultadoIntervalo(mensagem).
//INTERVALO NUMÉRICO
var intn = 220;

function mostrarResultadoIntervalo() {
  if (intn >= 10 && intn <= 50) {
    alert("Está dentro do intervalo");
  } else {
    alert("Não está dentro do intervalo");
  }
}

// Determine se um ano (armazenado em uma variável) é bissexto. Exiba "É bissexto" ou "Não é bissexto" em um elemento HTML usando uma função mostrarResultadoBissexto(mensagem).
//ANO BISSEXTO
var ano = 2028

function mostrarResultadoBissexto() {
  //É divisível por 4 e não é divisível por 100 (a maioria dos anos bissextos se encaixa nessa regra), ou É divisível por 400
  if (ano % 4 === 0 && ano % 100 !== 0 || ano % 400 === 0) {
    alert("O ano é bissexto");
  } else {
    alert("O ano não é bissexto");
  }
}

//Crie um programa que receba dois números e um operador (+, -, *, /) e realize a operação correspondente. Exiba o resultado da operação em um elemento HTML usando uma função mostrarResultadoCalculadora(resultado). (Pode usar elementos de formulário para receber os números e o operador do usuário)
//CALCULADORA SIMPLES
function calcular() {
  // Pegar os valores digitados
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  var operador = document.getElementById("operador").value;
  
  // Converter para números
  numero1 = Number(numero1);
  numero2 = Number(numero2);
  
  // Realizar a operação
  var resultado;
  
  if (operador == "+") {
      resultado = numero1 + numero2;
  } else if (operador == "-") {
      resultado = numero1 - numero2;
  } else if (operador == "*") {
      resultado = numero1 * numero2;
  } else if (operador == "/") {
      if (numero2 == 0) {
          alert("Não é possível dividir por zero!");
          return;
      }
      resultado = numero1 / numero2;
  }
  
  // Mostrar o resultado
  mostrarResultadoCalculadora(resultado);
}

function mostrarResultadoCalculadora(resultado) {
  document.getElementById("resultado").innerHTML = "Resultado: " + resultado;
}

//Verifique se uma senha atende aos seguintes critérios: ter pelo menos 8 caracteres, conter pelo menos uma letra maiúscula e um número (pode simular sem usar regex). Exiba "Senha válida" ou "Senha inválida" em um elemento HTML usando uma função mostrarResultadoSenha(mensagem).
//VERIFICAÇÃO DE SENHA
var senha = "1234567";

function mostrarResultadoSenha() {
  if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[0-9]/.test(senha)) {
    alert("Senha inválida");
  } else {
    alert("Senha válida");
  }
}

//Dados três lados de um triângulo, determine se ele é equilátero, isósceles ou escaleno. Exiba o tipo de triângulo em um elemento HTML usando uma função mostrarTipoTriangulo(mensagem).
//TRIÂNGULO
var l1 = 3;
var l2 = 4;
var l3 = 5;

function mostrarTipoTriangulo() {
  if (l1 == l2 && l2 == l3) {
    alert("Ele é um triângulo equilátero");
  } else if ((l1 == l2 && l1 != l3) ||
    (l2 == l3 && l2 != l1) ||
    (l1 == l3 && l1 != l2)) {
    alert("Ele é um triângulo isósceles");
  } else {
    alert("Ele é um triângulo escaleno");
  }
}

//Calcule o Índice de Massa Corporal (IMC) de uma pessoa e classifique-o em "Abaixo do peso", "Peso normal", "Sobrepeso" ou "Obesidade". Exiba a classificação do IMC em um elemento HTML usando uma função mostrarClassificacaoIMC(mensagem).
//IMC


function mostrarClassificacaoIMC() {
  var peso = 30;
  console.log(peso);
  if (peso < 18.5) {
    alert("Abaixo do peso");
  }
  else if (peso >= 18.5 && peso <= 24.9) {
    alert("Peso normal");
  }
  else if (peso >= 25 && peso <= 29.9) {
    alert("Sobrepeso");
  }
  else {
    alert("Obesidade");
  }
}


//Nível Avançado
//Ordene três números (armazenados em variáveis) em ordem crescente. Exiba os números ordenados em um elemento HTML usando uma função mostrarNumerosOrdenados(num1, num2, num3).
//ORDENAÇÃO DE NÚMEROS
var num1 = 10;
var num2 = 5;
var num3 = 20;

function mostrarNumerosOrdenados() {
  var numeros = [num1, num2, num3];
  numeros.sort(function (a, b) {
    return a - b;
  });
  alert(numeros);
}

//Calcule as raízes de uma equação do segundo grau (ax² + bx + c = 0) usando a fórmula de Bhaskara. Exiba as raízes em um elemento HTML usando uma função mostrarRaizes(raiz1, raiz2).
//EQUAÇÃO DO SEGUNDO GRAU
var a = 1;
var b = 5;
var c = 6;

function mostrarRaizes() {
  var delta = b * b - 4 * a * c;
  var raiz1 = (-b + Math.sqrt(delta)) / (2 * a);
  var raiz2 = (-b - Math.sqrt(delta)) / (2 * a);
  alert("As raízes são: " + raiz1 + " e " + raiz2);
}

//Gere um número aleatório entre 1 e 100. Peça ao usuário para adivinhar o número e forneça dicas ("Muito alto", "Muito baixo") até que ele acerte. Exiba as dicas e o resultado final (número de tentativas) em elementos HTML.
//JOGO DE ADIVINHAÇÃO
var numeroAleatorio = Math.floor(Math.random() * 100) + 1;
var tentativas = 0;

function adivinharNumero() {
  var palpite = prompt("Adivinhe o número (1 a 100):");
  palpite = Number(palpite);
  tentativas++;

  if (palpite < numeroAleatorio) {
    alert("Muito baixo");
  } else if (palpite > numeroAleatorio) {
    alert("Muito alto");
  } else {
    alert("Parabéns! Você acertou em " + tentativas + " tentativas.");
  }
}

//Converta um número decimal para binário ou hexadecimal (peça para o usuário escolher a base de destino). Exiba o resultado da conversão em um elemento HTML.
//CONVERSÃO DE BASE
function converterBase() {
  var numeroDecimal = Number(prompt("Digite o número decimal:"));
  
  if (isNaN(numeroDecimal)) {
    alert("Por favor, digite um número válido!");
    return;
  }
  
  var base = prompt("Escolha a base de destino (2 para binário, 16 para hexadecimal):");
  base = Number(base);
  
  if (base === 2) {
    alert("O número " + numeroDecimal + " em binário é: " + numeroDecimal.toString(2));
  } else if (base === 16) {
    alert("O número " + numeroDecimal + " em hexadecimal é: " + numeroDecimal.toString(16));
  } else {
    alert("Base inválida! Por favor, escolha 2 ou 16.");
  }
}

//Calcule o montante final de um investimento com juros compostos, dadas as variáveis: capital inicial, taxa de juros mensal, e número de meses. Exiba o montante final em um elemento HTML.
//CALCULADORA DE JUROS COMPOSTOS
var capitalInicial = 1000;
var taxaJurosMensal = 0.2;
var numeroMeses = 12;

function calcularJurosCompostos() {
  var montanteFinal = capitalInicial * ((1 + taxaJurosMensal) ** numeroMeses);
  alert("O montante final é: " + montanteFinal.toFixed(2));
}
