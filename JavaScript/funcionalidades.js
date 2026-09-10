const formularioReserva = document.getElementById("formularioReserva");

if (formularioReserva) {

    formularioReserva.addEventListener("submit", function(event) {

        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const criatura = document.getElementById("criatura").value;
        const llegada = document.getElementById("llegada").value;
        const salida = document.getElementById("salida").value;
        const huespedes = document.getElementById("huespedes").value;

        const mensaje = document.getElementById("mensajeReserva");

        if (nombre === "" || criatura === "" || llegada === "" || salida === "" || huespedes === "") {

            mensaje.textContent = "Por favor, complete todos los campos obligatorios.";
            return;
        }

        const fechaLlegada = new Date(llegada);
        const fechaSalida = new Date(salida);

        if (fechaSalida <= fechaLlegada) {

            mensaje.textContent = "La fecha de salida debe ser posterior a la fecha de llegada.";
            return;
        }

        mensaje.textContent =
            "¡Reserva confirmada! Bienvenido al Hotel Transilvania, " + nombre + ".";

    });

}

const formularioLogin = document.getElementById("formularioLogin");

if (formularioLogin) {

    formularioLogin.addEventListener("submit", function(event) {

        event.preventDefault();

        const usuario = document.getElementById("usuario").value;
        const contrasena = document.getElementById("contrasena").value;

        const mensaje = document.getElementById("mensajeLogin");

        if (usuario === "" || contrasena === "") {

            mensaje.textContent = "Debe ingresar su usuario y contraseña.";
            return;
        }

        mensaje.textContent =
            "Acceso concedido. Bienvenido al Santuario Nocturno, " + usuario + ".";

    });

}