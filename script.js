// Event listener para el formulario
document.getElementById('datoForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const datoInput = document.getElementById('dato');
    const dato = datoInput.value.trim();
    
    if (dato.length < 8) {
        alert('Por favor ingresa un Dato válido de 8 dígitos');
        return;
    }
    
    // Guardar el dato en localStorage y redirigir a la página de resultados
    localStorage.setItem('datoIngresado', dato);
    window.location.href = 'resultado.html';
});

// Validación para solo números en el input
document.getElementById('dato').addEventListener('input', function(e) {
    this.value = this.value.replace(/[^0-9]/g, '');
});

