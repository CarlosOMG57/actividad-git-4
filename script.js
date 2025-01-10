
function cargarCarta() {
    // Cargar el archivo JSON
    fetch('carta.json')
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar el archivo JSON.");
            }
            return response.json();
        })
        .then(data => {
     
            const fechaActual = new Date().toLocaleDateString("es-ES", {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
            });
 
            document.getElementById("fecha").textContent = fechaActual;

      
            document.getElementById("emisor").textContent = data.emisor;
            document.getElementById("destinatario").textContent = data.destinatario;
            document.getElementById("contenido").textContent = data.contenido;
            document.getElementById("firma").textContent = `Firma: ${data.firma}`;
            document.getElementById("pie_pagina").textContent = data.pie_pagina;
        })
        .catch(error => {
            console.error("Error al cargar la carta:", error);
        });
}


document.addEventListener("DOMContentLoaded", cargarCarta);
