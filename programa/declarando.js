$(document).ready(()=>{
    let historial=[];
    let habilidades=["Schreiben","Lesen","Hören","Lernen","Sprechen"]; 
    let opcion=["Gramática","Situación"];
    let niveles=["A1","A2","B1"];
    let origen=["Youtube","Curso"];
    let Y_GramaticaA1=["Sustantivos y articulos","Pronombres personales","Verbos básicos","Presente indicativo","Preposiciones locales","Adjetivos posesivos","Pronombres demostrativos","Pronombres personales en acusativo","Perfekt y Präteritum","Declinaciones","Verbos separables","Negación básica","Adjetivos"];
    let Y_GramaticaA2=["Todo lo del A1","Verbos básicos","Perfekt y Präteritum","Negación","Frases subordinadas","Verbos separables","Verbos y preposiciones que rigen a Dativo y/o Acusativo","Konjunktiv II","Verbos reflexivos","Comparativo y superlativo"];
    let Y_GramaticaB1=["Niveles anteriores","Perfekt y plusquamperket","Verbos, preposiciones y casos","Particulas interrogativas","Verbos modales","Brauchen + zu","Konjuktiv II","N-Deklination","Conjunciones als, obwohl...","Verbos reflexivos","Voz pasiva","Genitivo","Frases relativas","Condicionales","Conectores (damit, so...)","Causas y consecuencias"];
    let Y_SituacionA1=["Presentación básica","Expresiones cotidianas","Alfabeto y números","Idiomas y países","Profesiones","Tiempo libre","Fijar citas","Estaciones y clima","Vacaciones y cómo preparar un viaje","Medios de transporte","Temas de salud","Disculpas"];
    let Y_SituacionA2=["Todo lo del A1","Hechos pasados","Compras y vocabulario de dinero","Sueños, ¿qué haría si...?","Idiomas, países y nacionalidades","Cómo planear un viaje","Geografía y cómo describir un lugar"];
    let Y_SituacionB1=["Niveles anteriores","Improvisar y resumir","Familia, trabajo y tiempo libre...","Sueños, experiencias, ambiciones...","Explicar tu opinión y punto de vista","Reclamaciones y opiniones"];
    let C_Gramatica=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];    
    var numero;
    $('#mostrandoInfo').fadeOut();    

    $("#generar").click(function(){    
        document.getElementById("todaInfo").innerHTML="";                           
        
        numero=numeroAleatorio(5);

        $('#mostrandoNumero').html(numero);
        historial.push(numero);

        if(historial.length==1){
            $('#historial').html('-');
        }else{
            $('#historial').html(historial[historial.length-2]);
        }

        Toast.fire({
            icon: 'success',
            title: 'Numero generado'
        });      
        
        $('#mostrandoInfo').fadeIn(1500);
    });

    $('#mostrandoInfo').click(function(){  
        document.getElementById("todaInfo").innerHTML="";                             
        let mostrarFinal='';           
        for(var i=0; i<habilidades.length; i++){
            if(numero==i){
                mostrarFinal=habilidades[i];
            }
        }
        Toast2.fire({
            icon: 'info',
            title: mostrarFinal
        });

        var funcion= function(){               
            var sentencia='<tr>';
            if(numero==3){      
                var aux, auxNivel;                            
                sentencia+='<td>Área:</td>';
                sentencia+='<td>'+mostrarFinal+'</td>';
                sentencia+='</tr>';
                sentencia+='<tr>';
                sentencia+='<td>Nivel:</td>'; 
                auxNivel=numeroAleatorio(3);               
                sentencia+=buscando(niveles, auxNivel); 
                sentencia+='</tr>';
                sentencia+='<tr>';                    
                sentencia+='<td>Origen:</td>';    
                    aux=numeroAleatorio(2);          
                sentencia+=buscando(origen, aux);  
                //Saber si es de Youtube               
                    if(aux==0){
                sentencia+='</tr>';
                        sentencia+='<tr>';
                        sentencia+='<td>Opcion:</td>';         
                            aux=numeroAleatorio(2);       
                        sentencia+=buscando(opcion, aux); 
                        sentencia+='</tr>';
                        sentencia+='<tr>';                            
                            //Saber si salio una tematica o una situacion 
                            sentencia+='<td>Tema:</td>';
                            if(aux==0){
                                switch(auxNivel){
                                    case 0:
                                        sentencia+=buscando(Y_GramaticaA1, numeroAleatorio(Y_GramaticaA1.length));
                                        break;
                                    case 1:
                                        sentencia+=buscando(Y_GramaticaA2, numeroAleatorio(Y_GramaticaA2.length));
                                        break;
                                    case 2:
                                        sentencia+=buscando(Y_GramaticaB1, numeroAleatorio(Y_GramaticaB1.length));
                                        break;
                                }
                            }else{
                                switch(auxNivel){
                                    case 0:
                                        sentencia+=buscando(Y_SituacionA1, numeroAleatorio(Y_SituacionA1.length));
                                        break;
                                    case 1:
                                        sentencia+=buscando(Y_SituacionA2, numeroAleatorio(Y_SituacionA2.length));
                                        break;
                                    case 2:
                                        sentencia+=buscando(Y_SituacionB1, numeroAleatorio(Y_SituacionB1.length));
                                        break;
                                }
                            }
                    }else{//Saber si es de curso
                sentencia+='</tr>';
                        sentencia+='<tr>';
                        sentencia+='<td>Tema:</td>';                                           
                        sentencia+=buscando(C_Gramatica, numeroAleatorio(20));  
                    }                
                
            }else{
                sentencia+='<td>Área:</td>';
                sentencia+='<td>'+mostrarFinal+'</td>';
            }
            sentencia+='</tr>';        
            
            $('#todaInfo').append(sentencia);
        };

        setTimeout(funcion,2000);
    });       
    
    function numeroAleatorio(limite){
        var numero;
        do{
            numero=Math.floor(Math.random()*10);
        }while(numero<0||numero>=limite);
        return numero;
    }

    function buscando(vector, iterador){
        var sentencia="";
        for(var i=0; i<vector.length;i++){
            if(iterador==i){
                sentencia+='<td>'+vector[i]+'</td>';
            }
        } 
        return sentencia;
    }

    $("#putzenAlles").click(function(){
        location.reload();
    });
});