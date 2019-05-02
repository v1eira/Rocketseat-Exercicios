/* 5.1 */
const arr = [1, 2, 3, 4, 5, 6];

const [x, ...y] = arr;
console.log(x);
console.log(y);

/* 5.2 */
function soma(...a) {
    return a.reduce((total, next) => total + next);
}

console.log(soma(2,3,4,5,6,));

/* 5.3 */
const usuario = {
    nome: 'Diego',
    idade: 23,
    endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
    }
};

const usuario2 = {...usuario, nome: 'Gabriel'};
const usuario3 = {...usuario, cidade: 'Lontras'};
console.log(usuario2);
console.log(usuario3);