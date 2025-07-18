document.addEventListener("DOMContentLoaded", function() {
    // Cargar el archivo JSON desde GitHub
    fetch('https://github.com/Arla22/malla-interactiva/raw/main/malla-unimalla-2025-07-18T12_59_04.122Z.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        mostrarMalla(data);
    })
    .catch(error => {
        console.error('Error al cargar el JSON:', error);
        document.getElementById("malla").innerText = "Hubo un error al cargar la malla universitaria.";
    });

    // Función para mostrar la malla
    function mostrarMalla(data) {
        const contenedor = document.getElementById("malla");

        // Verifica si los datos están siendo cargados correctamente
        console.log(data);

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
