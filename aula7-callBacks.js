/*-- function acaoCarro(callback){
    return callback()
};

function andar(){
   console.log('O carro está andando')
}

function parar(){
    console.log('O carro parou.')
}

acaoCarro(andar) --*/

/* --------------------------------------------------------------------------*/
/* arrow function */

let acaoCarro=(callback) => callback();

let andar=() => console.log('O carro está andando');

let parar=() => console.log('O carro parou.');

acaoCarro(parar)

