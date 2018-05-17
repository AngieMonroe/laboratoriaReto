var name = (prompt ("Hola, como te llamas?"))
//solicitando nombre
//imprimiendo nombre
var element=document.getElementById("Bienvenido");
element.innerHTML="Bienvenid@ " + name;
//Declaracion de variables "tener cuidado al nombrarlas para evitar confusiones"
var question1 = "¿De qué color es el caballo blanco de Napoleón?"
var question2 = "Un caracol cae a un pozo de cinco metros, ¿en cuántos días saldrá sí avanza tres metros en el día y de noche regresa dos metros?"
var question3 = "¿HTML es un lenguaje de programación?"
var questionAnswer1 = "BLANCO"
var questionAnswer2 = 3
var questionAnswer3 = "NO"
//Comenzar la trivia. Los prompt debe de guardar el valor, para ello creo una variable que sera el resultado del prompt
var answerConfirm = confirm ("Quieres comenzar a jugar " + name);
  if (answerConfirm == true) {
    var answerUser1 = (prompt ("Escribe la respuesta correcta.\n" + question1))
    var confirmAnswer1= (questionAnswer1 == answerUser1.toUpperCase());
    var answerUser2 = parseInt(prompt ("Escribe la respuesta correcta.\n" + question2))
    var confirmAnswer2= (questionAnswer2 == answerUser2);
    var answerUser3 = (prompt ("Escribe la respuesta correcta.\n" + question3))
    var confirmAnswer3= (questionAnswer3 == answerUser3.toUpperCase());
    //Imprimir resultados. como el flujo es continuo automaticamente al pasar las preguntas se imprimen los titulos
    var element=document.getElementById("Titulo1");
    element.innerHTML= "RESPUESTAS CORRECTAS";
    var element=document.getElementById("Titulo2");
    element.innerHTML= "RESPUESTAS INCORRECTAS";
//Una vez que termina el flujo de las preguntas, ahora se imprimen de acuerdo al lado que le corresponde izquierda correctas, derecha incorrectas
    if (confirmAnswer1 == true){
      var element=document.getElementById("Correcta1");
      element.innerHTML= question1 + "\n" + answerUser1;
    }
    else {
      var element=document.getElementById("Incorrecta1");
      element.innerHTML= question1 + "\n" + answerUser1;
    }

    if (confirmAnswer2 == true){
      var element=document.getElementById("Correcta2");
      element.innerHTML= question2 + "\n" + answerUser2;
    }
    else {
      var element=document.getElementById("Incorrecta2");
      element.innerHTML= question2 + "\n" + answerUser2;
    }

    if (confirmAnswer3 == true){
      var element=document.getElementById("Correcta3");
      element.innerHTML= question3 + "\n" + answerUser3;
    }
    else {
      var element=document.getElementById("Incorrecta3");
      element.innerHTML= question3 + "\n" + answerUser3;
    }
  }
  //Si en dado caso el usuario no acpeta comenzar se va a la ultima accion.
  else  {
    var element=document.getElementById("Sorry");
    element.innerHTML=":(  jugaremos en otro momento " + name;
  }
