function send(){
    var r = new XMLHttpRequest();
    var nome = document.getElementById("cfn").value;
    var email = document.getElementById("cfe").value;
    var assunto = document.getElementById("cfa").value;
    var mensagem = document.getElementById("cfm").value;

    if(!nome || !email || !assunto || !mensagem){
        snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Preencha todos os campos'});
    }
    else{
        r.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                document.getElementById('formulario').reset();
                snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Agradecemos sua mensagem, ela sera respondida em breve.'});
            }
            else if (this.readyState == 4 && this.status == 202) {
                snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Por favor, preencha todos os campos do formulário.'});
            }
            else if (this.readyState == 4 && this.status == 203) {
                snackbarContainer.MaterialSnackbar.showSnackbar({message: 'Algo deu errado. :('});
            }
        };

        var url = "https://www.crimapp.ml/src/system/mailm2.php"; // server url
        r.open("POST", url ,true);
        r.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        r.send("nome=" + nome +"&email=" + email + "&assunto=" + assunto + "&mensagem="+ mensagem);
    }
}