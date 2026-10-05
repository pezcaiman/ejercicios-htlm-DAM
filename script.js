function mostrarMensaje() {
    alert("¡Gracias por visitar mi página!");
}const btnInfo = document.getElementById("btnInfo");
const btnContacto = document.getElementById("btnContacto");
const mensaje = document.getElementById("mensaje");

btnInfo.addEventListener("click", function() {
    mensaje.innerHTML = `
        <h3>Sobre mi proyecto</h3>
        <p>Este es mi primer proyecto web realizado en DAM.</p>
    `;

    mensaje.classList.add("mostrar");
});

btnContacto.addEventListener("click", function() {
    mensaje.innerHTML = `
        <h3>Contacto</h3>
        <p>Puedes contactar conmigo en:</p>
        <strong>vargasronaldale@gmail.com</strong>
    `;

    mensaje.classList.add("mostrar");
});