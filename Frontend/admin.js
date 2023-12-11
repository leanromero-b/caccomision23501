document.getElementById('btnTraerMensajes').addEventListener('click', () => {
    fetch('http://127.0.0.1:5000/mensajes')
      .then(response => response.json())
      .then(datos => {
        console.log("datos", datos)
        const tablaBody = document.querySelector('#tablaMensajes tbody');
        tablaBody.innerHTML = ''; 

        
        datos.forEach(dato => {
          const fila = document.createElement('tr');
          fila.innerHTML = `
            <td>${dato.id}</td>
            <td>${dato.apellido}</td>
            <td>${dato.nombre}</td>
            <td>${dato.ciudad}</td>
            <td>${dato.email}</td>
            <td>${dato.fecha_envio}</td>
            <td>${dato.descripcion}</td>
            <td>${dato.leido}</td>
          `;
          tablaBody.appendChild(fila);
        });
      })
      .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
});

document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    
    const id = document.getElementById('idInput').value;
    const gestion = document.getElementById('detalleInput').value;

    const formData = new FormData();
    formData.append('gestion', gestion);

    fetch(`http://127.0.0.1:5000/mensajes/${id}`, {
      method: 'PUT',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      
    })
    .catch(error => {
      console.error('Error al enviar los datos:', error);
    });
});
