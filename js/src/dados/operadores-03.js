// Operadores lógicos

// AND
const planejamentoConcluido = true;
const estaSol = true;
const todosEstaoBem = true;

const temPicnic = planejamentoConcluido && estaSol && todosEstaoBem; // AND - Econst temPicnic === tru

function perfeito() {
    if(temPicnic) {
        let tem = "sim";
        return tem;
    }  
    return "nao"
}
console.log(perfeito())


console.log('Vamos fazer um picnic?', perfeito());

// OR
const estudei = true;
const liUmLivro = false;

const diaProdutivo = estudei || liUmLivro; // OR - OU
console.log('Foi um dia produtivo?', diaProdutivo);

// NOT
const estouCansado = false;
console.log('Vou para a academia?', !estouCansado); // NOT - NÃO

// XOR
const usandoCalca = true; // XOR - OU EXCLUSIVO
const usandoBermeuda = true;

const vestidoCorretamente = usandoCalca !== usandoBermeuda;
console.log('Estou vestindo corretamente?', vestidoCorretamente);
