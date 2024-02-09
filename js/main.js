
function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    // Cargar la información de usuarios desde el archivo JSON
    fetch('users.json')
        .then(response => response.json())
        .then(users => {
            // Buscar el usuario en la base de datos
            let user = users.find(user => user.username === username && user.password === password);

            if (user) {

                localStorage.setItem('username', username);

                Swal.fire({
                    icon: "success",
                    text: "ya te encuentras registrado",
                    footer: '<a href="../index.html">Why do I have this issue?</a>'
                  });
                
            } else {

                updateStatusMessage('Usuario o contraseña incorrectos', 'error');
            }
        })
        .catch(error => {      
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Error al cargar la base de datos de usuarios",
                footer: '<a href="../index.html">Desea volver al home?</a>'
              });
        });
}

// Función para actualizar el mensaje de estado
function updateStatusMessage(message, type) {
    let statusMessage = document.getElementById('statusMessage');
    statusMessage.textContent = message;

    
    if (type === 'success') {
        statusMessage.style.color = '#4caf50'; 
    } else if (type === 'error') {
        statusMessage.style.color = '#ff'; 
    }

}

//Función para manejar la tecla Enter
function checkEnter(event) {
    if (event.key === 'Enter') {
        login();
    }
}


