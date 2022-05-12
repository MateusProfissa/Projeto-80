var nome_dos_convidados = [];

function enviar() {
    var Nome = document.getElementById("nome_do_convidado").value;
    console.log(Nome);
    nome_dos_convidados.push(" " + Nome);

    var tamanho_array = nome_dos_convidados.length;
    document.getElementById("tela_dos_nomes").innerHTML = nome_dos_convidados.toString();  
}
function organizar() {
    nome_dos_convidados.sort();
    var nomes = nome_dos_convidados.join("<br>");
    console.log(nome_dos_convidados);
    document.getElementById("tela_dos_nomes_organizada").innerHTML = nomes.toString();
}
function mostrar() {
    var nomes = nome_dos_convidados.join("<br>");
    console.log(nome_dos_convidados);
    document.getElementById("nome_do_convidado_exibido").innerHTML = nomes.toString();
    document.getElementById("botão_organizar").style.display = "block";
}
function pesquisar() {
    var valor =  document.getElementById("nome_buscado");
    var encontrado = 0;
    for (var index = 0; index < nome_dos_convidados.length; index++) {
        if (valor = nome_dos_convidados[index]) {
            encontrado = encontrado + 1;
        }
    }
    document.getElementById("nome_do_convidado_buscado").innerHTML = "Nome encontrado " + encontrado + "vez(es)";
}