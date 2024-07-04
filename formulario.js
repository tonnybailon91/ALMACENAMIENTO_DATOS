document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario

    var apellidos = document.getElementById('apellidos').value;
    var nombres = document.getElementById('nombres').value;
    var correo = document.getElementById('correo').value;
    var cedula = document.getElementById('cedula').value;
    var sexo = document.getElementById('sexo').value;
    var fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    var telefono = document.getElementById('telefono').value;
    var direccion = document.getElementById('direccion').value;

    var apellidosRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}$/;
    var nombresRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{1,20}$/;
    var correoRegex = /^[a-zA-Z0-9._-]{1,35}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    var cedulaRegex = /^[0-9]{10}$/;
    var telefonoRegex = /^\+?[0-9]{1,11}$/;
    var direccionRegex = /^[a-zA-Z0-9\s\.\-\(\)]{1,50}$/;

    if (!apellidosRegex.test(apellidos)) {
        mostrarMensaje("Apellidos inválidos. Solo se permiten letras y hasta 12 caracteres.", "error");
        return;
    }

    if (!nombresRegex.test(nombres)) {
        mostrarMensaje("Nombres inválidos. Solo se permiten letras y hasta 12 caracteres.", "error");
        return;
    }

    if (!correoRegex.test(correo)) {
        mostrarMensaje("Correo electrónico inválido. Solo se permiten letras, números, punto, guiones y arroba, hasta 20 caracteres.", "error");
        return;
    }

    if (!cedulaRegex.test(cedula)) {
        mostrarMensaje("Cédula/Pasaporte inválido. Solo se permiten números y debe tener 10 caracteres.", "error");
        return;
    }

    if (!telefonoRegex.test(telefono)) {
        mostrarMensaje("Teléfono inválido. Solo se permiten números y el signo +, hasta 11 caracteres.", "error");
        return;
    }

    if (!direccionRegex.test(direccion)) {
        mostrarMensaje("Dirección inválida. Solo se permiten letras, números, puntos, guiones y paréntesis, hasta 50 caracteres.", "error");
        return;
    }

    // Si todas las validaciones son correctas, guarda los datos en localStorage
    var cliente = {
        apellidos: apellidos,
        nombres: nombres,
        correo: correo,
        cedula: cedula,
        sexo: sexo,
        fechaNacimiento: fechaNacimiento,
        telefono: telefono,
        direccion: direccion
    };

    localStorage.setItem('cliente', JSON.stringify(cliente));

    // Muestra el mensaje de confirmación
    mostrarMensaje("Se ha registrado correctamente.", "success");

    // Limpia el formulario
    document.getElementById('formulario').reset();
});

function mostrarMensaje(mensaje, tipo) {
    var mensajeConfirmacion = document.getElementById('mensajeConfirmacion');
    mensajeConfirmacion.style.display = 'block';
    mensajeConfirmacion.textContent = mensaje;
    mensajeConfirmacion.style.color = tipo === 'success' ? 'green' : 'red';
}

// Agregar clase fijar a labels al llenar inputs
var inputs = document.getElementsByClassName('input');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('keyup', function() {
        if (this.value.length >= 1) {
            this.nextElementSibling.classList.add('fijar');
        } else {
            this.nextElementSibling.classList.remove('fijar');
        }
    });
}