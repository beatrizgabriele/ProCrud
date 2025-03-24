// CRUD

/*
    C = CREATE -> CRIAR
    R = READ   -> LER
    U = UPDATE -> ATUALIZAR
    D = DELETE -> APAGAR
*/

/*  localStorage 5MB
    Storage = armazenamento
    local = local (no caso, no Browser)
*/

//ENVIANDO DADOS PARA O LOCAL STORAGE
// localStorage.setItem('nome' , 'Beatriz');
// localStorage.setItem('idade' , '16');

// localStorage.setItem('nome1' , 'jennifer');
// localStorage.setItem('idade1' , '17');

// // PARA LER O DADO DO LOCAL STORAGE
// alert('Nome: '+ localStorage.getItem('nome')+ '\n' + 'Idade: '+ localStorage.getItem('idade'));
// alert('Nome: '+ localStorage.getItem('nome1')+ '\n' + 'Idade: '+ localStorage.getItem('idade1'));

// //PARA REMOVER UM ITEM
// localStorage.removeItem('nome');

// //PARA REMOVER TODOS OS DADOS DO LOCAL STORAGE
// localStorage.clear();

//Adicionando itens no local storage
// localStorage.setItem('id' ,  1);
// localStorage.setItem('Produto' , 'Prato');
// localStorage.setItem('Quantidade' , 1);
// localStorage.setItem('Valor' ,'R$ 12,90');

// localStorage.setItem('id 1' ,  2);
// localStorage.setItem('Produto 1' , 'Sabão');
// localStorage.setItem('Quantidade 1' , 2);
// localStorage.setItem('Valor 1' ,'R$ 5,99');

// localStorage.setItem('id 2' ,  3);
// localStorage.setItem('Produto 2' , 'Toalha');
// localStorage.setItem('Quantidade 2' , 13);
// localStorage.setItem('Valor 2' ,'R$ 82,97');

// localStorage.setItem('id 3' ,  4);
// localStorage.setItem('Produto 3' , 'Garfo');
// localStorage.setItem('Quantidade 3' , 1);
// localStorage.setItem('Valor 3' ,'R$ 10,00');

// //deletando itens do local storage
// localStorage.removeItem('id');
// localStorage.removeItem('Produto');
// localStorage.removeItem('Quantidade');
// localStorage.removeItem('Valor');

// //atualizando itens 
// localStorage.setItem('id 1', 5);
// localStorage.setItem('Produto 1' , 'Faca');
// localStorage.setItem('Quantidade 1' , '3');
// localStorage.setItem('Valor 1' , 'R$2,50');


//trabalhando com matriz
// localStorage.setItem('Usuário',['Astarote', 60, 'Sargitário', '1,77']);
// localStorage.setItem('Usuário1',['Beatriz', 16, 'Gemeos', '1,73']);
// localStorage.setItem('Usuário2',['Jennifer', 17, 'Leão', '1,55']);

// x = localStorage.getItem('Usuário');
// alert(x);
// document.getElementById('resultados').value = x;

//Criando um objeto 
// localStorage.setItem('Usuário', {'Nome' : 'Beatriz', 'Altura' : '1,73' , 'Signo' : 'Gêmeos'});

//Coonvertendo objeto em uma string para enviar ao localStorage
//var dados = JSON.stringify({'Nome' : 'Beatriz', 'Altura' : '1,73' , 'Signo' : 'Gêmeos'});

//Enviando o objeto convertido em string para o localStorage()
//localStorage.setItem('usuario1' , dados);


// var dados = JSON.stringify({'Nome' : 'Beatriz', 'Altura' : '1,73' , 'Signo' : 'Gêmeos'});
// localStorage.setItem('usuario1' , dados);

// var dados = JSON.stringify({'Nome' : 'Triz', 'Altura' : '1,83' , 'Signo' : 'Sargitario'});
// localStorage.setItem('usuario2' , dados);

// var dados = JSON.stringify({'Nome' : 'Bea', 'Altura' : '1,76' , 'Signo' : 'Virgem'});
// localStorage.setItem('usuario3' , dados);

// var dados = JSON.stringify({'Nome' : 'Atriz', 'Altura' : '1,53' , 'Signo' : 'Leão'});
// localStorage.setItem('usuario4' , dados);

// //Quando for fazer a leitura da STRING tem que converter em objeto usando JSON.parse()
// var volta = localStorage.getItem('usuario');
// //convertendo para objeto
// var cadastro = JSON.parse(volta);
// //Mostrando os dados com alert
// alert('Mostrando usuário localSTORAGE'+
//     '\nNome: '+cadastro.Nome+
//     '\nAltura :'+cadastro.Altura+
//     '\nSigno :'+cadastro.Signo);



//convertendo obj em uma string pr enviar local
var dados = JSON.stringify({'nome':'Jennifer Santos','altura':'1,54','signo':'Leão'});
// - enviando o  obj convertido em string pr o localStorage()
localStorage.setItem('usuario',dados);
 
//EX2 - adicionando + 3
// var dados = JSON.stringify({'nome':'Gael','altura':'1,09','signo':'Leão'});
// localStorage.setItem('usuario2',dados);
 
// var dados = JSON.stringify({'nome':'Júlia','altura':'1,90','signo':'Áries'});
// localStorage.setItem('usuario3',dados);
 
// var dados = JSON.stringify({'nome':'Felminto','altura':'1,34','signo':'Cancer'});
// localStorage.setItem('usuario4',dados);
 
//convertendo
var volta = localStorage.getItem('usuario');
// - convertendo pr obj
var cadastro = JSON.parse(volta);
// - mostrando
alert('mostrando usuário local STORAGE' +
    '\nNome: '+cadastro.nome+
    '\nAltura: '+cadastro.altura+
    '\nSigno: '+cadastro.signo);
