

var nome = document.getElementById('nome_usuario');
var elem = document.getElementById('btnExe1');
elem.addEventListener('click', function () {
    document.getElementById("res1").innerHTML = nome.value + ", seja bem vindo";
});


var valorq21 = document.getElementById('q2val1');
var valorq22 = document.getElementById('q2val2');
var operacao = document.getElementById('operacao');
var igual= document.getElementById('btnExe2');
igual.addEventListener('click', function () {

    valorq21 = parseFloat(valorq21.value);
    valorq22 = parseFloat(valorq22.value);
    if (operacao.value=="+"){
        document.getElementById("res2").innerHTML = (valorq21+valorq22);
    }
    if (operacao.value=="/"){
        document.getElementById("res2").innerHTML = (valorq21/valorq22);
    }
    if (operacao.value=="-"){
        document.getElementById("res2").innerHTML = (valorq21-valorq22);
    }
    if (operacao.value=="*"){
        document.getElementById("res2").innerHTML = (valorq21*valorq22);
    }
    
    
});
