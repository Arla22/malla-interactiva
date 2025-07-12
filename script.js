// Función para marcar un ramo como aprobado o no aprobado
function toggleRamo(ramoId) {
    const ramo = document.getElementById(ramoId);
    if (ramo.classList.contains("aprobado")) {
        ramo.classList.remove("aprobado");
    } else {
        ramo.classList.add("aprobado");
        desbloquearRamos(ramoId);
    }
}

// Función para desbloquear ramos cuando uno es aprobado
function desbloquearRamos(ramoId) {
    if (ramoId === 'ramo1') {
        // Desbloquear ramo 2 cuando ramo 1 es aprobado
        document.getElementById("ramo2").classList.remove("disabled");
    }
    // Aquí puedes agregar más condiciones para desbloquear ramos adicionales
}

// Función para verificar si un ramo ya está aprobado
function verificarRamos() {
    // Si el ramo 1 está aprobado, desbloquear ramo 2
    if (document.getElementById("ramo1").classList.contains("aprobado")) {
        document.getElementById("ramo2").classList.remove("disabled");
    }
}
