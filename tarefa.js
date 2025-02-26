function verificar(ano) {

    if ((0 == ano % 4) && (0 != ano % 100) || (0 == ano % 400)) {
        alert(ano + ' é um ano bissexto');
    } else {
        alert(ano + ' não é um ano bissexto');
    }
}

const ano = prompt('Insira o ano:');

verificar(ano);