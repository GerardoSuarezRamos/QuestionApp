
//preguntas a realizar
var question = [{
    pregunta: "Entre dos lo tejen, entre dos repican unos no llegan a nada y otros se multiplican. ¿Qué es?", 
    respuesta1:"El matrimonio", 
    respuesta2: "el amor", 
    respuesta3: "las drogas", 
    respuesta4:"yo que se",
    correcta: "El matrimonio",
    },
    {
        pregunta: "Tienen nombre de casadas, hijo plural pero solo una cosa, mis manos son maniatadas por esta cosa curiosa", 
        respuesta1:"Las esposas", 
        respuesta2: "Las mujeres", 
        respuesta3: "Las niñas", 
        respuesta4:"El payaso",
        correcta: "Las esposas",
    },
    {
        pregunta: "¿Cuál es el mar más querido por las mujeres?", 
        respuesta1:"El mar ido", 
        respuesta2: "Puerto colombia", 
        respuesta3: "Puerto timbal", 
        respuesta4:"Santa Marta",
        correcta: "El mar ido",
    }
];

var contadorAciertos=0;
var contadorDerrotas=0;
i = 0;

var pregu = question[i].pregunta;
document.getElementById('hacer').innerHTML = pregu;
document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);

    // validar respuestas segun el boton presionado
    var validar1 = () =>{
        contadorValidator();
        if(document.getElementById('respuesta1').value === question[i].correcta){
            contadorAciertos +=1;
            document.getElementById('aciertos').innerHTML = contadorAciertos;
            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);

        } else{
            contadorDerrotas +=1;
            document.getElementById('fallas').innerHTML = contadorDerrotas;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        }
    }
    var validar2 = () =>{
        contadorValidator();
        if(document.getElementById('respuesta2').value === question[i].correcta){
            contadorAciertos +=1;
            document.getElementById('aciertos').innerHTML = contadorAciertos;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        } else{
            contadorDerrotas +=1;
            document.getElementById('fallas').innerHTML = contadorDerrotas;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        }
    }
    var validar3 = () =>{
        contadorValidator();
        if(document.getElementById('respuesta3').value === question[i].correcta){
            contadorAciertos +=1;
            document.getElementById('aciertos').innerHTML = contadorAciertos;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        } else{
            contadorDerrotas +=1;
            document.getElementById('fallas').innerHTML = contadorDerrotas;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        }
    }
    var validar4 = () =>{
        contadorValidator();
        if(document.getElementById('respuesta4').value === question[i].correcta){
            contadorAciertos +=1;
            document.getElementById('aciertos').innerHTML = contadorAciertos;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        } else{
            contadorDerrotas +=1;
            document.getElementById('fallas').innerHTML = contadorDerrotas;

            i +=1;
            var pregu = question[i].pregunta;
            document.getElementById('hacer').innerHTML = pregu;
            document.getElementById('respuesta1').setAttribute("value", question[i].respuesta1);
            document.getElementById('respuesta2').setAttribute("value", question[i].respuesta2);
            document.getElementById('respuesta3').setAttribute("value", question[i].respuesta3);
            document.getElementById('respuesta4').setAttribute("value", question[i].respuesta4);
        }
    }

// validar el marcador 
var contadorValidator = () =>{
    if(i+1 == question.length){
        if(contadorAciertos > contadorDerrotas){
            var modal = document.getElementById('modal');
            modal.style.display ="block";
            var modalctn = document.getElementById('text');
            modalctn.innerHTML ="Felicidades ganaste!";
        } else {
            var modal = document.getElementById('modal');
            modal.style.display ="block";
            var modalctn = document.getElementById('text');
            modalctn.innerHTML ="Que lastima, perdiste";
        }
    }
}