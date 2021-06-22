function Restaurante(nome, ...cardapio){
    this.nome = nome;
    this.cardapio=cardapio;
    this.entrada=() =>'Bem vindo ao '+ this.nome + ' Aqui está o cardápio: '+ '\n' + this.cardapio;

}

let novoRestaurante = new Restaurante(
    'Best Food', 'Miojo turma da mônica sabor galinha ',
    'Miojo gourmet ', 'Cup Noodles gourmet ', 'Suco de sazon de miojo'
  )

console.log(novoRestaurante.entrada())

