AOS.init();

const dataDoEvento = new Date ("Feb 14, 2024 00:00:00"); //apontando data e hora para uma ação futura
const timeStampDoEvento = dataDoEvento.getTime(); //transdormando em calculo de tempo

const contaAsHoras = setInterval(function(){
    const agora = new Date(); //captura de dado de tempo
    const timeStampAtual = agora.getTime(); //atualização de conteúdo


    const distanciaTempoEvento = timeStampDoEvento - timeStampAtual;

    const diasAteEvento = Math.floor(distanciaTempoEvento / (1000 * 60 * 60 * 24)); //calculo Dias (milisegundo por seg * seg por min * min por hora * hora por dia)
    const horasAteEvento  = Math.floor((distanciaTempoEvento % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); //calculo Horas - %retorno de resto da divisão
    const minutosAteEvento  = Math.floor((distanciaTempoEvento % (1000 * 60 * 60)) / (1000 * 60)); //calculo Minutos
    const segundosAteEvento  = Math.floor((distanciaTempoEvento % (1000 * 60)) / 1000); //calculo Segundos
    
    document.getElementById('contador').innerHTML = ` começa em <b style="color: orangered;"> ${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m ${segundosAteEvento}s </b>`;

    if (distanciaTempoEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = ' <b style="color: red;">já acabou! </b><br> Mas calma, ano que vem tem mais!'
    }
}, 1000); //delimitação de tempo (1s)
