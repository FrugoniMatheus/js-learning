// Exibir algo na tela:
// Usamos o método `log` que está dentro do objeto `console`.
console.log('Matheus "Frugoni"');

// Quando usamos aspas simples, não conseguimos exibir aspas simples dentro do mesmo texto,
// a não ser que sejam de outro tipo, como aspas duplas:
console.log("Matheus 'Frugoni'");

// Com aspas duplas, o mesmo acontece: conseguimos usar aspas simples dentro.
console.log(`Matheus Frugoni`);

// Aqui usamos Template Strings, que permitem o uso de qualquer tipo de aspas dentro do texto.
// As crases (`) aceitam aspas simples e duplas tranquilamente.

// O ponto e vírgula (;) é opcional no JavaScript.
// Todo texto precisa estar entre aspas simples, duplas ou crases.
// O `console.log` sempre quebra a linha automaticamente ao exibir o conteúdo.

// Todo texto em JavaScript é considerado uma **string**.
// O tipo do valor foi configurado automaticamente como string.

console.log(5);
// Este é um número. O tipo aqui é **number**, usado para valores numéricos.

console.log(3.4);
// Números com vírgula (como 3,4) são escritos com ponto (3.4) e são chamados de **ponto flutuante**.

console.log(45, 4.2, "Teste novo string");
// Podemos exibir vários valores juntos: números e textos (strings).
