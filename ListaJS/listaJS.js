function escreveData() {
    var data = document.getElementById('dta').value.split('-');
    var dia = data[2];
    var mes = data[1];
    var ano = data[0];

    var mesE = "";
    switch (mes) {
        case '01':
            mesE = "Janeiro";
            break;
        case '02':
            mesE = "Fevereiro";
            break;
        case '03':
            mesE = "Março";
            break;
        case '04':
            mesE = "Abril";
            break;
        case '05':
            mesE = "Maio";
            break;
        case '06':
            mesE = "Junho";
            break;
        case '07':
            mesE = "Julho";
            break;
        case '08':
            mesE = "Agosto";
            break;
        case '09':
            mesE = "Setembro";
            break;
        case '10':
            mesE = "Outubro";
            break;
        case '11':
            mesE = "Novembro";
            break;
        case '12':
            mesE = "Dezembro";
            break;
    }

    document.getElementById('dtaE').innerHTML = dia +" de "+ mesE +" de "+ano;
}

function verificaIdade() {
    document.getElementById('adultoS').innerHTML = "";
    document.getElementById('adultoN').innerHTML = "";
    if ( document.getElementById('idade').value != "" ) {
        if ( document.getElementById('idade').value < '18' ) {
            document.getElementById('adultoN').innerHTML = "Você ainda não pode tirar carteira";
        } else {
            document.getElementById('adultoS').innerHTML = "Você já pode tirar carteira";
        } 
    } else {
        document.getElementById('adultoN').innerHTML = "Insira uma idade!";
    }
}

function mudaImagem() {
    var imgTopo = document.getElementById('topoDinamico');
    var src = imgTopo.getAttribute('src');
    const img1 = "img/img1.jpg";
    const img2 = "img/img2.jpg";
    const img3 = "img/img3.jpg";
    if (src == img1){
        imgTopo.setAttribute('src', img2);
    } else if (src == img2){
        imgTopo.setAttribute('src', img3);
    } else if (src == img3){
        imgTopo.setAttribute('src', img1);
    }
    
}