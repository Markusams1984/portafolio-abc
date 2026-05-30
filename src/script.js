
// TAREA 7 y 9: Función para añadir recomendación y mostrar confirmación
function addRecommendation() {
  // 1. Obtener el mensaje del área de texto
  let recommendation = document.getElementById("new_recommendation");
  
  // 2. Validar que no esté vacío
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("Nueva recomendación recibida");

    // TAREA 9: Mostrar el pop-up de confirmación
    alert("¡Muchas gracias! Tu recomendación ha sido enviada con éxito.");

    // TAREA 7: Crear el nuevo elemento en el portafolio
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation-card");
    element.innerHTML = "<p>\"" + recommendation.value + "\"</p><cite>— Nuevo Recomendante (Recién añadido)</cite>";
    
    // Añadirlo a la lista existente
    document.getElementById("all_recommendations").appendChild(element);

    // Limpiar el campo de texto
    recommendation.value = "";
  } else {
    alert("Por favor, escribe un mensaje antes de enviar.");
  }
}