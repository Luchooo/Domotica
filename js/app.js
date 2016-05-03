$(document).ready(function() {
    //Inicializamos la API de reconocimiento de Voz
    //Recuerda que solo funciona en pocos navegadores
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = true;
    //establecemos el idioma que reconocera
    recognition.lang = "es";

    //Cuando haga click en las letras...empezara a escuchar





    var recognition;
  	var recognizing = false;

    $('#microfono').hover(function(event) {

    		if (recognizing == false) {
    			recognition.start();
    			recognizing = true;
          console.log("hablando");


    		} else {
    			recognition.stop();
    			recognizing = false
        }





    });



        //Evento que se genera cuando terminamos de hablar...
           recognition.onresult = function (event)
           {
                finalResult = '';
                //event.resultIndex contiene las palabras que reconocio la API
                for (var i = event.resultIndex; i < event.results.length; ++i)
                {
                    //Verificamos todas las palabras reconocidas y las concatenamos para mostrarlas
                    if (event.results[i].isFinal)
                    {
                        finalResult = event.results[i][0].transcript;
                        $('#buscar').val(finalResult);

                    }
                }

                finalResult=finalResult.toLocaleLowerCase();
                if (finalResult==="encender")
                {
                  console.log("Todas las luces estan encendidas");
                  httpGet('http://luchooo.github.io/Domotica/?serverfunction=ledtodas&value=1');
                }

                if (finalResult==="apagar")
                {
                  console.log("Todas las luces estan apagadas");
                  httpGet('http://luchooo.github.io/Domotica/?serverfunction=ledtodas&value=0');
                }






                  function httpGet( theUrl ){



                 var audios = [
                                    {
                                        sonido  :   "apaga_bano.mp3",
                                        label   :   "apaga_bano"
                                    },
                                    {
                                        sonido  :   "enciende_bano.mp3",
                                        label   :   "enciende_bano"
                                    },
                                    {
                                        sonido  :   "apaga_habitacion.mp3",
                                        label   :   "apaga_habitacion"
                                    },
                                    {
                                        sonido  :   "enciende_habitacion.mp3",
                                        label   :   "enciende_habitacion"
                                    },
                                    {
                                        sonido  :   "apaga_parqueadero.mp3",
                                        label   :   "apaga_parqueadero"
                                    },
                                    {
                                        sonido  :   "enciende_parqueadero.mp3",
                                        label   :   "enciende_parqueadero"
                                    },
                                    {
                                        sonido  :   "cocina_off.mp3",
                                        label   :   "cocina_off"
                                    },
                                    {
                                        sonido  :   "cocina_on.mp3",
                                        label   :   "cocina_on"
                                    },
                                    {
                                        sonido  :   "party_on.mp3",
                                        label   :   "party_on"
                                    },
                                    {
                                        sonido  :   "stop_party.mp3",
                                        label   :   "stop_party"
                                    },
                                    {
                                        sonido  :   "tada.mp3",
                                        label   :   "tada"
                                    }
                                ];



                //Para cargar los audios del juego...
                    for(var audio = 0; audio < audios.length; audio++)
                    {
                        createjs.Sound.registerSound("sonidos/" + audios[audio].sonido, audios[audio].label);


                    }









                 			    var xmlHttp = null;

                			    xmlHttp = new XMLHttpRequest();
                			    xmlHttp.open( 'GET', theUrl, false );
                			    xmlHttp.send( null );


                			    return xmlHttp.responseText;
                		    }









            };

});
