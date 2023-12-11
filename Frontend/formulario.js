document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();     
    
    
    const formData = new FormData(document.getElementById('contactForm'));

    
    fetch('http://127.0.0.1:5000/mensajes', {
    method: 'POST',
    body: formData
    })
    .then(response => {
    if (response.ok) {
       
        document.getElementById('contactForm').style.display = 'none'; 
      
        document.getElementById('mensajeEnviado').style.display = 'block';
        
        
        setTimeout(function() {
       
        document.getElementById('contactForm').reset();
        document.getElementById('contactForm').style.display = 'block'; 
        document.getElementById('mensajeEnviado').style.display = 'none';
        }, 2000);
    } else {
        throw new Error('Error al enviar los datos');
    }
    })
    .catch(error => {
    console.error('Error:', error);
    });
});


