let microondas = { 
    "Pipoca": 10,
    "Macarrão": 8, 
    "Carne": 15,
    "Feijão": 12,
    "Brigadeiro": 8,

    "tempo": function (segundos, prato) { 
        if (this[prato] == undefined) { //prato é válidos
            console.log("Prato inexistente");
        } else {
            if (this[prato] > segundos) { //tempo do prato > superior = retorna tempo insuficiente
                console.log("Tempo insuficiente");
            } else if (segundos >2 * this[prato] && segundos  <= 3 * this[prato]) { //seg > 2* seg <3* = retorna queimou 
                console.log("Queimou");
            } else if (segundos  >  3 * this[prato]) { //seg > 3* = retorna kabum
                console.log("Kabum!");
            } else {
                console.log("Prato pronto, bom apetite!!!"); 
            }
        }
    }
}
/*Testando os possiveis resultados*/
microondas.tempo(15,"Carne"); // tempo = bom apetite
microondas.tempo(14,"Carne"); // menor = tempo insuficiente
microondas.tempo(25,"Limão"); // não existe
microondas.tempo(45,"Carne"); // tempo 2* = queimou
microondas.tempo(60,"Carne"); // tempo 3* = kabum