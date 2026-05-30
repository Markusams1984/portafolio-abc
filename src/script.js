function addRecommendation() {
  let recommendation = document.getElementById("new_recommendation");
  
  if (recommendation.value != null && recommendation.value.trim() != "") {
    alert("¡Muchas gracias! Tu recomendación ha sido enviada con éxito.");

    var element = document.createElement("div");
    element.setAttribute("class", "recommendation-card");
    element.innerHTML = "<p>\"" + recommendation.value + "\"</p><cite>— Nuevo Recomendante</cite>";
    
    document.getElementById("all_recommendations").appendChild(element);
    recommendation.value = "";
  } else {
    alert("Por favor, escribe un mensaje antes de enviar.");
  }
}
