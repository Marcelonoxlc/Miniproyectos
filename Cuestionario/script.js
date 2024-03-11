function calcularResultado() {
    var respuestas = document.getElementById("formulario").elements;
    var puntuacion = 0;
  
    // Pregunta 1
    if (respuestas["p1"].value === "a") {
      puntuacion += 1;
    }
  
    // Pregunta 2
    if (respuestas["p2"].value === "verdadero") {
      puntuacion += 1;
    }
  
    // Pregunta 3
    if (respuestas["p3"].value.toLowerCase() === "este") {
      puntuacion += 1;
    }
  
    // Pregunta 4
    var p4a = respuestas["p4a"].selectedIndex;
    var p4b = respuestas["p4b"].selectedIndex;
    
    if (p4a === 0 && p4b === 1) {
      puntuacion += 1;
    }
  
    // Mostrar resultado
    var resultado = document.getElementById("resultado");
    resultado.innerHTML = "Puntuación: " + puntuacion + " de 4";
  }
  