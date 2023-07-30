const checarLogin = () =>{
    const valorEmail = document.getElementById("email").value 
    const valorSenha = document.getElementById("senha").value
    const emailConta = "diegogode.bonani@gmail.com"
    const senhaConta = "Pirulito222"
    if(valorEmail === emailConta){
        if(valorSenha === senhaConta){
            alert("Login efetuado")
        }
        alert("A senha está incorreta")
    }
    else if(valorSenha === senhaConta){
        alert("O email inserido está incorreto")
    }
    else{
        alert("O email e senha inserido são inválidos")
    }
}
const mudaPosicaoInputEmail = () =>{
    document.getElementById("span-email").style.top = "50%";
}
const mudaPosicaoInputSenha = () =>{
    document.getElementById("span-senha").style.top = "62%";
}
const mostraSobrenos = () =>{
    document.getElementById("sobre-page").style.display = "grid";
}
const escondeHome = () =>{
    document.getElementById("home").style.display = "none";
}
const mostraHome = () =>{
    document.getElementById("home").style.display = "block";
}
const escondeSobrenos = () =>{
    document.getElementById("sobre-page").style.display = "none";
}
const secaoSobre = () =>{
    mostraSobrenos();
    escondeHome();
}
const voltaHome = () =>{
    escondeSobrenos();
    mostraHome();
}