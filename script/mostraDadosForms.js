function mostraDadosForms(event) {
    event.preventDefault();
    let termos = document.getElementById("cbTermos").checked;
    let email = document.getElementById("ipEmail").value;
    let senha = document.getElementById("ipSenha").value;
    let mensagem = document.getElementById("taMensagem").value;
    let tipoMensagem = document.getElementById("slTipoMensagem").options[document.getElementById("slTipoMensagem").selectedIndex].text;

    if (email && senha && mensagem && termos) {

        if (termos) {
            termos = "Sim";
        } else {
            termos = "Não";
        }

        let retorno = "Email: " + email +
            "\nSenha: " + senha +
            "\nMensagem: " + mensagem +
            "\nTipo da Mensagem: " + tipoMensagem +
            "\nAceitou os termos?: " + termos;

        document.getElementById("titulo").innerText = "";
        document.getElementById("dados").innerText = "";

        escreve("Dados do formulário", "titulo", 0);
        escreve(retorno, "dados", 0);

        function escreve(palavra, id, i) {

            if (i == palavra.length) {
                return;
            }
            document.getElementById(id).innerText += palavra.charAt(i);
            setTimeout(function () {
                escreve(palavra, id, i + 1);
            }, 30);
        }
    } else {
        let verif = [false, false, false, false];

        if (!email) {
            verif[0] = true;
        }

        if (!senha) {
            verif[1] = true;
        }

        if (!mensagem) {
            verif[2] = true;
        }

        if (!termos) {
            verif[3] = true;
        }

        let quantTrue = 0;

        for (let i = 0; i < verif.length; i++) {
            if (verif[i]) {
                quantTrue++;
            }
        }

        let alerta = "Por favor,"
        let possAlertas = [" um email", " uma senha", " uma mensagem", " aceite os termos de uso e política de privacidade"];
        let quantAlertas = 0;

        if(verif[0] || verif[1] || verif[2]){
            alerta += " insira"
        }

        for (let i = 0; i < verif.length; i++) {
            if (verif[i]) {
                alerta += possAlertas[i];
                quantAlertas++;
            

                if(quantAlertas == 0){
                } else if (quantAlertas < quantTrue - 1) {
                    alerta += ",";
                } else if(quantAlertas < quantTrue){
                    alerta += " e";
                } else {
                    alerta += " para prosseguir.";
                }
            }
        }

        alert(alerta);

    }

}
