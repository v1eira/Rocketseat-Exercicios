const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

/* 2.1 */
const idades = usuarios.map(usuario => usuario.idade);

console.log(idades)

/* 2.2 */
const maior18 = usuarios.filter(usuario => usuario.empresa === "Rocketseat" && usuario.idade > 18);

console.log(maior18);

/* 2.3 */
const google = usuarios.find(usuario => usuario.empresa === "Google");

console.log(google);

/* 2.4 */
const operacoes = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2})).filter(usuario => usuario.idade <= 50);

console.log(operacoes);