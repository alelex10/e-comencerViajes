document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombre").value;
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("email").value;
        const horario = document.getElementById("horario").value;
        const comentarios = document.getElementById("comentarios").value;

        // Validación básica: verificar que los campos obligatorios no estén vacíos
        if (nombre.trim() === "" || telefono.trim() === "" || email.trim() === "") {
            alert("Por favor, complete los campos obligatorios.");
            return;
        }

        // Inicializar Email.js
        emailjs.init("user_your_user_id"); // Reemplaza "user_your_user_id" con tu propio ID de usuario

        // Configuración de Email.js
        const emailData = {
            nombre: nombre,
            telefono: telefono,
            email: email,
            horario: horario,
            comentarios: comentarios
        };

        // Enviar correo electrónico
        emailjs.send("service_your_service_id", "template_your_template_id", emailData)
            .then(function (response) {
                alert("Formulario enviado con éxito.");
                form.reset();
            })
            .catch(function (error) {
                alert("Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.");
            });
    });
});
