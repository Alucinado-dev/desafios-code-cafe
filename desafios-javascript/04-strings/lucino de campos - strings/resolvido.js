// 📘 INSTRUÇÕES GERAIS
// Resolva os exercícios abaixo praticando a manipulação de strings usando métodos e propriedades.
// Use console.log() para exibir os resultados.
// Teste no navegador com HTML ou pelo terminal usando Node.js.

// ----------------------------
// 🧠 Exercício 1
// Crie uma variável chamada `frase` com o valor "JavaScript é incrível".
// Exiba o tamanho da string usando .length
// ----------------------------

const frase = "JavaScript é incrível";
console.log(frase.length);


// ----------------------------
// 🧠 Exercício 2
// Exiba os caracteres das posições 0, 5 e 10 da variável `frase` usando charAt()
// ----------------------------

console.log(frase.charAt(0));
console.log(frase.charAt(5));
console.log(frase.charAt(10)); /* espaço */


// ----------------------------
// 🧠 Exercício 3
// Use o método toUpperCase() para exibir a frase toda em letras maiúsculas.
// ----------------------------

console.log(frase.toUpperCase());

// ----------------------------
// 🧠 Exercício 4
// Use o método toLowerCase() para exibir a frase toda em letras minúsculas.
// ----------------------------

console.log(frase.toLowerCase());

// ----------------------------
// 🧠 Exercício 5
// Verifique se a palavra "incrível" está dentro da frase usando includes()
// ----------------------------

console.log(frase.includes('incrível'));

// ----------------------------
// 🧠 Exercício 6
// Verifique se a frase começa com "Java" usando startsWith()
// ----------------------------

console.log(frase.startsWith('Java'));

// ----------------------------
// 🧠 Exercício 7
// Verifique se a frase termina com "l" usando endsWith()
// ----------------------------

console.log(frase.endsWith('l'));

// ----------------------------
// 🧠 Exercício 8
// Substitua a palavra "incrível" por "fantástico" usando replace()
// ----------------------------

console.log(frase.replace('incrível', 'fantástico'));

// ----------------------------
// 🧠 Exercício 9
// Corte a string para exibir apenas a palavra "JavaScript" usando slice()
// ----------------------------

console.log(frase.slice(0,10)); /* detalhe, segundo parametro é a posição que não vai mais aparecer na fatia */

// ----------------------------
// 🧠 Exercício 10
// Divida a frase em palavras usando split(" ") e exiba o array resultante.
// ----------------------------

 const fraseSeparada = frase.split(" ");
 console.log(fraseSeparada);  /* interessante */

// ----------------------------
// 🧠 Exercício 11
// Una as palavras do array anterior usando join("-") para formar uma nova string.
// ----------------------------

console.log(fraseSeparada.join('-'));

// ----------------------------
// 🧠 Exercício 12
// Remova os espaços extras da string "   Olá, mundo!   " usando trim()
// ----------------------------

const hello = '     Olá, mundo!     '

console.log(hello.trim());

// ----------------------------
// 🧠 Exercício 13
// Crie uma string com o valor "banana".
// Use padStart() para deixá-la com 10 caracteres, preenchendo com "*"
// ----------------------------

const fruta = 'banana'

const tamanhoFruta = fruta.length /* não foi necessário */

const preenchidoFruta = fruta.padStart(10,'*')

console.log(preenchidoFruta);

// ----------------------------
// 🧠 Exercício 14
// Agora use padEnd() para fazer o mesmo, preenchendo com "-"
// ----------------------------

const preenchidoFrutaEnd = fruta.padEnd(10, '-')

console.log(preenchidoFrutaEnd);


// ----------------------------
// 🧠 Exercício 15
// Crie uma string "Aprender JavaScript é divertido!".
// Substitua "divertido" por "essencial" e exiba a nova frase.
// ----------------------------

const novaFrase = "Aprender JavaScript é divertido!";
console.log(novaFrase.replace('divertido', 'essencial'));

// ----------------------------
// 🧠 Exercício 16
// 📘 DESAFIOS BÔNUS – NÍVEL EXTRA
// Desafios a seguir exigem mais lógica e/ou o uso combinado de métodos de strings.

// ----------------------------
// 💡 Desafio Bônus 16
// Crie uma função que receba uma string e retorne essa string invertida.
// Ex: "javascript" → "tpircsavaj"
// ----------------------------

const inverterFrase = (frase) =>{
    let tamanho = frase.length

    let invertida = frase[tamanho - 1];

    while (tamanho > 1) {
        tamanho--
        invertida += frase[tamanho - 1] 
    }

    return invertida
}

console.log(inverterFrase('javascript')); /* tentei fazer usando algoritmo recursivo e não deu muito certo */

// ----------------------------
// 💡 Desafio Bônus 17
// Crie uma função que conte quantas vogais (a, e, i, o, u) existem em uma string.
// Ex: "JavaScript é incrível" → 8 vogais
// ----------------------------

const contarVogais = (frase) => {
    const vogais = 'aeiouAEIOUéí';
    
    let contador = 0;
    
    for (let i = 0; i < frase.length; i++) {
        if (vogais.includes(frase[i])) {
            contador++;
        }
    }
    
    return contador;
}

console.log(contarVogais("JavaScript é incrível"));  /* desse jeito não conta letras com acento a menos que coloque explicitamente nas vogais a versão com acento */


// ----------------------------
// 💡 Desafio Bônus 18
// Crie uma função que receba um nome completo e retorne as iniciais.
// Ex: "Igor Gazineo" → "IG"
// ----------------------------

const pegarIniciais = (nome) => {
    const nomeSeparado = nome.split(' ')

    let iniciais = ''

    for(let i = 0; i < nomeSeparado.length; i ++) {
        iniciais += nomeSeparado[i].charAt(0)
    }

    return iniciais
}

console.log(pegarIniciais('Lucino Gabriel Carneiro De Campos'))

// ----------------------------
// 💡 Desafio Bônus 19
// Crie uma função que formate um número de telefone no formato (XX) XXXX-XXXX.
// A função deve receber uma string com apenas os números, ex: "1198765432"
// ----------------------------

const formatarTelefone = (numero) => {
    const ddd = numero.substring(0, 2);
    const parte1 = numero.substring(2, 6);
    const parte2 = numero.substring(6, 10);

    return `(${ddd}) ${parte1}-${parte2}`;
}

console.log(formatarTelefone("9197456235"));


// ----------------------------
// 💡 Desafio Bônus 20
// Crie uma função que transforme a primeira letra de cada palavra de uma frase em maiúscula.
// Ex: "javascript é incrível" → "Javascript É Incrível"
// ----------------------------

const capitalizarPalavras = (frase) => {
	const fraseSeparada = frase.split(" ");

	for (let i = 0; i < fraseSeparada.length; i++) {
		fraseSeparada[i] = fraseSeparada[i].charAt(0).toUpperCase() + fraseSeparada[i].slice(1);
	}

	return fraseSeparada.join(" ");
};

console.log(capitalizarPalavras("javascript é incrível"));


// ----------------------------
// 💡 Desafio Bônus 21
// Crie uma função que receba uma string e retorne quantas palavras ela contém.
// Considere que as palavras estão separadas por espaço.
// ----------------------------

const contadorDePalavras = (frase) => {
    const fraseSeparada = frase.split(' ')

    return fraseSeparada.length
}

console.log(contadorDePalavras('eu sou apenas uma frase com 8 palavras'));

// ----------------------------
// 💡 Desafio Bônus 22
// Crie uma função que substitua todos os espaços de uma string por underline "_"
// Ex: "isso é um teste" → "isso_é_um_teste"
// ----------------------------

const substituirEspacos = (frase) => {
    const fraseSeparada = frase.split(' ')

    return fraseSeparada.join('_')
}

console.log(substituirEspacos('isso é um teste'));


// ----------------------------
// 💡 Desafio Bônus 23
// Crie uma função que receba uma string e retorne se ela é um palíndromo.
// Ex: "ana", "arara", "radar" → true
// ----------------------------

const verificadorDePalindromo = (palavra) => {
    for (let i = 0; i < palavra.length; i++) {
        const ultimaPosicao = palavra.length - 1
        const letra = palavra[i];
        const letraInvertida = palavra[ultimaPosicao - i];

        if (letra !== letraInvertida) {
            return false;
        }
    }

    return true;
    
}

console.log(`arara é um palíndromo? ${verificadorDePalindromo('arara')}`);
console.log(`nayane é um palíndromo? ${verificadorDePalindromo('nayane')}`);


// ----------------------------
// 💡 Desafio Bônus 24
// Crie uma função que simule o método repeat() sem usá-lo.
// Receba uma string e um número, e retorne a string repetida esse número de vezes.
// ----------------------------

const repetirString = (string, numero) => {
    let novaString = ''

    for (let i = 0; i < numero; i++) {
        novaString += string
    }
    return novaString
}

console.log(repetirString('aeiou', 55)); /* não vou contar se foi o numero certo de vezes mas spammou */

// ----------------------------
// 💡 Desafio Bônus 25
// Crie uma função que receba uma string e remova todos os números dela.
// Ex: "abc123def456" → "abcdef"
// ----------------------------

const removerNumeros = (string) => {
    let novaString = '';
    for (let i = 0; i < string.length; i++) {
        if (!(parseInt(string[i]))) {
            novaString += string[i];
        }
    }
    return novaString;
}

console.log(removerNumeros("lhsjhaka6sd+a45d1a5as5ad4a+d4a4sda6asdasd4ad4afaf4s6g6sgs4g+4sd84ffd8g48err84")); /* deu certo */

