// musica

let boton = document.querySelector(".reproducir")

    boton.addEventListener("click", () => {
      let etiquetaAudio = document.createElement("audio")
      etiquetaAudio.setAttribute("src", "sound/Dark.mp3")
      etiquetaAudio.play()
      let boton = document.querySelector(".reproducir").style.visibility = "hidden";
    })

// texto de inicio

document.getElementById("inicio").innerHTML = "<p>Despiertas en una habitación a oscuras. No recuerdas nada. ¿Qué haces?<span> </span></p><br>";


//diferentes opciones
    

function Paso1(Choice){
// La primera elección 
    // Palpar paredes
    if(Choice == "a"){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").innerHTML = "<p>Palpas las paredes con cuidado y consigues llegar a un interruptor. Le das pero no funciona. ¿Qué haces?</p><br>";
        document.getElementById('a').style.display = 'none';
        document.getElementById("result4").style.display = 'none';
        document.getElementById("result").style.color = "black";
        document.getElementById("b").style.display = 'inline';
        document.getElementById("c").style.display = 'inline';
        document.getElementById("result").style.display = 'inline';
    }
    // Palpar suelo
    if(Choice == "b"){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").innerHTML = "<p>Buscas con cuidado por el suelo intentando encontrar algo de utilidad. Tropiezas con algo. Intentas encontrar el objeto con el que has tropezado y notas que es una linterna. ¿Qué haces?</p><br>";
        document.getElementById("b").style.display = 'none';
        document.getElementById("c").style.display = 'none';
        document.getElementById('a').style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById("result4").style.display = 'none';
        document.getElementById("result").style.color = "black";
        document.getElementById('b1').style.display = 'inline';
        document.getElementById("b2").style.display = 'inline';
        document.getElementById("b3").style.display = 'inline';
    }
    // Buscar algo encima
    if(Choice == "c"){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").innerHTML = "<p>Buscas en tus bolsillos y encuentras un encendedor. ¿Qué haces?</p><br>";
        document.getElementById('a').style.display = 'none';
        document.getElementById("b").style.display = 'none';
        document.getElementById("c").style.display = 'none';
        document.getElementById("result").style.display = 'inline';
        document.getElementById('c1').style.display = 'inline';
        document.getElementById('c2').style.display = 'inline';
    }
}

function suelo(Choice){

    if(Choice == 'b1'){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("result2").innerHTML = '<p>Al encender la linterna ves una sombra que se esconde rápidamente al ver la luz. Escoge bien...!</p><br>';
        document.getElementById('b1').style.display = 'none';
        document.getElementById("b2").style.display = 'none';
        document.getElementById("b3").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById('b1_1').style.display = 'inline';
        document.getElementById("b1_2").style.display = 'inline';
        document.getElementById("b1_3").style.display = 'inline';
        }
        
    if(Choice == 'b2'){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("result2").innerHTML = "<p>Escuchas un ruido y algo (o alguien) te coge de las piernas... Al agarrarte caes al suelo y te das un golpe en la cabeza! <strong>¡Tu aventura ha terminado!</strong></p><br>";
        document.getElementById('b1').style.display = 'none';
        document.getElementById("b2").style.display = 'none';
        document.getElementById("b3").style.display = 'none';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'inline';
        }
        
    if(Choice == 'b3'){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("result2").innerHTML = "<p>¡Estás perdiendo el tiempo! En una situación así es mejor probarla que ponerte a mirar si lleva pilas, pero todos tomamos distintas decisiones en situaciones difíciles. Efectivamente, lleva pilas... ¿Qué vas a hacer?</p><br>";
        document.getElementById('izquierda2').style.display = 'none';
        document.getElementById("centro2").style.display = 'none';
        document.getElementById("derecha2").style.display = 'none';
        document.getElementById("tryagain").style.display = 'inline';
        document.getElementById("result2").style.display = 'inline';
        document.getElementById("loseGif1").style.display = 'block';
    }
}

// linterna encendida
function linterna(Choice){

        if(Choice == "b1_1"){
            document.getElementById("result3").innerHTML = "<p>¡Has decidido ir detrás de la sombra! Entras en una habitación. Allí no ves nada. ¿Qué haces?</p><br>";
            document.getElementById("result2").style.display = "none";
        document.getElementById('b1_1').style.display = 'none';
        document.getElementById("b1_2").style.display = 'none';
        document.getElementById("b1_3").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById('b1_1_1').style.display = 'inline';
        document.getElementById("b1_3").style.display = 'inline';
        }
        
        if(Choice == "b1_2"){
        document.getElementById("result3").innerHTML = "<p>No puedes moverte, y el miedo hace que te de un infarto al corazón y mueras. <strong>¡Tu aventura ha terminado!</strong></p><br>";
        document.getElementById("result2").style.display = "none";
        document.getElementById('b1_1').style.display = 'none';
        document.getElementById("b1_2").style.display = 'none';
        document.getElementById("b1_3").style.display = 'none';
        document.getElementById("result3").style.display = 'inline';
        document.getElementById("attack").style.display = 'inline';
        }

        if(Choice == "b1_3"){
            document.getElementById("result3").innerHTML = "<p>Bien hecho! Mejor actuar con cautela! Encuentras dos puertas. ¿Qué haces?</p><br>";
            document.getElementById("result2").style.display = "none";
            document.getElementById('b1_1').style.display = 'none';
            document.getElementById("b1_1_1").style.display = "none";
        document.getElementById("b1_2").style.display = 'none';
        document.getElementById("b1_3").style.display = 'none';
            document.getElementById("b1_1_2_1").style.display = 'inline';
            document.getElementById("b1_1_2_2").style.display = 'inline';
            }
        
}


// opción algo encima - encendedor

function Encendedor(Choice){ // encendedor encendido
    if(Choice == "c1"){
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("result4").innerHTML = "<p>El gas estaba puesto y al encenderlo el lugar donde te encontrabas ha explotado! ¡Tu aventura ha terminado!</p><br>";
        document.getElementById("c1").style.display = 'none';
        document.getElementById("c2").style.display = 'none';
        document.getElementById("result4").style.display = 'inline';
        document.getElementById('explosion').style.display = 'inline';
    }

    if(Choice == "c2"){ // encendedor guardado
        document.getElementById("inicio").style.display = "none";
        document.getElementById("result").style.display = "none";
        document.getElementById("result4").innerHTML = "<p>Nunca se sabe!! ¿Qué vas a hacer ahora?</p><br>";
        document.getElementById("c1").style.display = 'none';
        document.getElementById("c2").style.display = 'none';
        document.getElementById("result4").style.display = 'inline';
        document.getElementById('a').style.display = 'inline';
        document.getElementById('b').style.display = 'inline';
    }
}

// detras de la sombra 

function detrasSombra(Choice){
    
    if(Choice == "b1_1_1"){ //inspeccionar habitación
        document.getElementById("result5").innerHTML = "<p>En las películas de terror siempre pasa. Cuando escuchas un ruido nunca debes ir tras el... La sombra te atrapa y mueres! <strong>¡Tu aventura ha terminado!</strong></p><br>";
        document.getElementById("result5").style.display = 'inline';
        document.getElementById("result3").style.display = "none";
        document.getElementById('b1_1_1').style.display = 'none';
        document.getElementById("b1_3").style.display = 'none';
        document.getElementById("loseGif1").style.display = 'inline';
    }
}

// otra direccion
function Huir(Choice){
    if(Choice == "b1_1_2_1"){
        document.getElementById("result3").style.display="none";
        document.getElementById("result6").innerHTML = "<p><strong>¡Felicidades! ¡Has conseguido escapar con vida!</strong></p><br>";
        document.getElementById("b1_1_2_1").style.display = 'none';
        document.getElementById("b1_1_2_2").style.display = 'none';
        document.getElementById("winGif").style.display = 'inline';
    }
    
    if(Choice == "b1_1_2_2"){
        document.getElementById("result3").style.color="grey";
        document.getElementById("result6").innerHTML = "<p>¡Mala decisión! Un sistema automatizado con una escopeta apuntando hacia la puerta te dispara al abrir. <strong>¡Tu aventura ha terminado!</strong></p><br>";
        document.getElementById("b1_1_2_1").style.display = 'none';
        document.getElementById("b1_1_2_2").style.display = 'none';
        document.getElementById("loseGif1").style.display = 'inline';
    }
}
    


