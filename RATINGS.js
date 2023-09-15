function showMessage(rating) {
  switch (rating) {
    case 1:
      alert("Muy agradecidos de recibir la valoración más alta de parte suya, agradecemos su apoyo al negocio."); break;
    case 2:
      alert("Gracias por el apoyo que nos brinda, esperemos vuelva pronto para más pedidos."); break;
    case 3:
      alert("Seguiremos mejorando nuestra tienda y nos alegra que la haya visitado."); break;
    case 4:
      alert("Entendemos que quizás no haya encontrado nada de su agrado."); break;
    case 5:
      alert("Lamentamos que nuestra página no haya cumplido con sus espectativas."); break;
  }
}