document.addEventListener("DOMContentLoaded", function() {
    // Cargar el archivo JSON desde GitHub
    fetch('https://github.com/Arla22/malla-interactiva/raw/main/malla-unimalla-2025-07-18T12_59_04.122Z.json')
    .then(response => response.json())
    .then(data => {
        mostrarMalla(data);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

    // Función para mostrar la malla
    function mostrarMalla(data) {
        const contenedor = document.getElementById("malla");

        data.mallaData.forEach(anio => {
            const divAnio = document.createElement('div');
            divAnio.classList.add('anio');
            
            // Mostrar los semestres por cada año
            anio.periodo.forEach(periodo => {
                const divPeriodo = document.createElement('div');
                divPeriodo.classList.add('semester');
                divPeriodo.innerHTML = `<h2>${anio.año} - ${periodo}</h2>`;
                
                // Mostrar las materias dentro de cada semestre
                periodo.materias.forEach(materia => {
                    const divMateria = document.createElement('div');
                    divMateria.classList.add('materia');
                    divMateria.innerHTML = `
                        <strong>${materia.nombre}</strong> 
                        <span>Creditos: ${materia.creditos}</span>
                    `;
                    divPeriodo.appendChild(divMateria);
                });
                divAnio.appendChild(divPeriodo);
            });
            contenedor.appendChild(divAnio);
        });
    }
});
