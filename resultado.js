
// Array de mensajes de broma aleatorios
const messages = [
    "estás en la cima... de mi miembro.\n¡felicidades! 🍆",
    "eres mi miembro.\n¡felicidades! 🎊",
    "¡felicidades!\neres mi miembro favorito. 😏",
    "estás en mi lista...\nla de miembros destacados. 😎",
    "tu Dato fue seleccionado...\npara ser mi miembro. 🎯",
    "¡sorpresa!\neres miembro VIP... de mi colección. 💎",
    "verificado ✓\neres oficialmente mi miembro. 🔥",
    "¡qué coincidencia!\neres justo el miembro que buscaba. 🎰",
    "felicitaciones...\ntu miembro ha sido aprobado. 🏆",
    "¡importante!\neres mi miembro del mes. 📅",
    "resultado:\nmiembro certificado. 💯",
    "¡alerta!\ndetectado como mi miembro especial. 🚨",
    "tu Dato confirma que...\neres mi miembro premium. ⭐",
    "¡ganaste!\neres mi miembro de oro. 🥇",
    "búsqueda completada:\nmiembro encontrado con éxito. 🔍",
    "¡enhorabuena!\ntu miembro está en nuestro registro. 🎪",
    "¡atención!\nmiembro exclusivo detectado. 💼",
    "procesando...\n¡miembro confirmado! ✅",
    "resultado positivo:\nmiembro calificado. 🌟",
    "¡increíble!\neres mi miembro estrella. ⭐"
];

// Array de emojis aleatorios
const emojis = ['🎉', '🎊', '🥳', '✨', '🎈', '🎯', '💫', '🌟', '⚡', '🔥'];

// Función que se ejecuta al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    // Obtener el dato del localStorage
    const dato = localStorage.getItem('datoIngresado');
    
    // Si no hay dato, redirigir al inicio
    if (!dato) {
        window.location.href = 'index.html';
        return;
    }
    
    // Mostrar resultado
    mostrarResultado(dato);
    
    // Crear confetti
    createConfetti();
});

// Función para mostrar el resultado
function mostrarResultado(dato) {
    // Seleccionar mensaje y emoji aleatorio
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    
    // Actualizar contenido
    document.getElementById('resultMessage').textContent = randomMessage;
    document.getElementById('datoDisplay').textContent = dato;
    document.getElementById('resultEmoji').textContent = randomEmoji;
}

// Función para volver al inicio
function volverInicio() {
    // Limpiar localStorage
    localStorage.removeItem('datoIngresado');
    
    // Redirigir al index
    window.location.href = 'index.html';
}

// Función para crear el efecto de confetti
function createConfetti() {
    const colors = ['#f59e0b', '#3b82f6', '#10b981', '#ef4444', '#8b5cf6', '#ec4899'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            document.body.appendChild(confetti);
            
            // Remover confetti después de 5 segundos
            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }
}
