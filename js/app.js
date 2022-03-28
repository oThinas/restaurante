var campos = [
    document.querySelector('#nome'),
    document.querySelector('#telefone'),
    document.querySelector('#qtdPessoas'),
    document.querySelector('#observacoes'),
];
console.log(campos);

//var tbody = document.createElement('table tbody');
var table = document.querySelector('table') //Não consta na apostila
var tbody = document.createElement('tbody'); //Não consta na apostila
table.appendChild(tbody) //Não consta na apostila

document.querySelector('form').addEventListener('submit', function (evento) {
    evento.preventDefault();
    var tr = document.createElement('tr');
    
    campos.forEach(function (campo) {
        var td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });

    tbody.appendChild(tr);

    this.reset();
    campos[0].focus();
});