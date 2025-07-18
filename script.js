document.addEventListener("DOMContentLoaded", function() {
    // Cargar el archivo JSON
    fetch('malla.json')
    .then(response => response.json())
    .then(data => {
        mostrarMalla(data);
    })
    .catch(error => console.error('Error al cargar el JSON:', error));

    // Mostrar la malla
    function mostrarMalla(data) {
        const contenedor = document.getElementById("malla");

        data.mallaData.forEach(anio => {
            const divAnio = document.createElement('div');
            divAnio.classList.add('anio');
            
            anio.periodo.forEach(periodo => {
                const divPeriodo = document.createElement('div');
                divPeriodo.classList.add('semester');
                divPeriodo.innerHTML = `<h2>${anio.año} - ${periodo}</h2>`;
                
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
