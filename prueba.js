// prueba.js - Herramienta modular de desarrollo y pruebas

document.addEventListener('DOMContentLoaded', () => {
    // 1. Localizar el header de la aplicación
    const headerContainer = document.querySelector('header div.flex, header');
    if (!headerContainer) return;

    // 2. Crear contenedor de botones de prueba
    const testControls = document.createElement('div');
    testControls.className = 'flex gap-2 mr-2';
    testControls.id = 'herramientas-prueba';

    testControls.innerHTML = `
        <button id="btn-llenar-prueba" class="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-3 rounded-lg shadow transition text-xs flex items-center gap-1">
            🧪 Llenar Datos
        </button>
        <button id="btn-limpiar-prueba" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-3 rounded-lg shadow transition text-xs flex items-center gap-1">
            🗑️ Limpiar
        </button>
    `;

    // Insertar los botones antes del botón de descargar PDF
    const btnDescargar = headerContainer.querySelector('button');
    if (btnDescargar) {
        headerContainer.insertBefore(testControls, btnDescargar);
    } else {
        headerContainer.appendChild(testControls);
    }

    // 3. Conectar eventos a Alpine.js
    document.getElementById('btn-llenar-prueba').addEventListener('click', () => {
        const alpineComponent = Alpine.$data(document.body);
        if (!alpineComponent) return;

        alpineComponent.usarMismoOficianteBautismo = false;
        alpineComponent.usarMismoOficianteConfirmacion = false;

        alpineComponent.programa = {
            fecha: '2026-05-18',
            barrio: 'Barrio San Juan',
            preside: 'Obispo Carlos Mendoza',
            dirige: 'Hermano Roberto Gómez',
            bienvenidaOrganizacion: 'Presidenta de la Primaria',
            bienvenidaBarrio: 'Obispado',
            oracionApertura: 'Hermana Ana Torres',
            oracionCierre: 'Hermano Luis Morales',
            confirmacionMismoDia: true,
            himnoApertura: { 
                numero: '136', 
                titulo: 'Haz el bien', 
                urlOriginal: 'https://www.churchofjesuschrist.org/study/music/hymns/do-what-is-right?lang=spa', 
                urlLimpia: 'https://www.churchofjesuschrist.org/study/music/hymns/do-what-is-right?lang=spa' 
            },
            himnoCierre: { 
                numero: '200', 
                titulo: 'Dios os guarde', 
                urlOriginal: 'https://www.churchofjesuschrist.org/study/music/hymns/god-be-with-you-till-we-meet-again?lang=spa', 
                urlLimpia: 'https://www.churchofjesuschrist.org/study/music/hymns/god-be-with-you-till-we-meet-again?lang=spa' 
            },
            bautizados: [
                { 
                    id: 101, 
                    nombres: 'Mateo', 
                    apellidos: 'Fernández Silva', 
                    oficianteBautismo: 'Élder Smith', 
                    oficianteBautismoAprobado: true,
                    oficianteConfirmacion: 'Obispo Carlos Mendoza',
                    oficianteConfirmacionAprobado: true,
                    testigo1: 'Hermano Juan López', 
                    testigo2: 'Hermano Pedro Ramírez' 
                },
                { 
                    id: 102, 
                    nombres: 'Sofia', 
                    apellidos: 'García Pérez', 
                    oficianteBautismo: 'Élder Johnson', 
                    oficianteBautismoAprobado: true,
                    oficianteConfirmacion: 'Hermano Roberto Gómez',
                    oficianteConfirmacionAprobado: true,
                    testigo1: 'Hermano Miguel Ángel', 
                    testigo2: 'Hermano David Castro' 
                }
            ],
            discursantes: [
                { nombre: 'Hermano Francisco Ríos', tema: 'Bautismo' },
                { nombre: 'Hermana Elena Vargas', tema: 'Espíritu Santo' }
            ],
            numeroEspecial: { 
                activo: true, 
                participantes: 'Coro de Niños de la Primaria', 
                descripcionAccion: 'Interpretación de "Soy un hijo de Dios"' 
            }
        };
    });

    document.getElementById('btn-limpiar-prueba').addEventListener('click', () => {
        const alpineComponent = Alpine.$data(document.body);
        if (!alpineComponent) return;

        alpineComponent.usarMismoOficianteBautismo = true;
        alpineComponent.oficianteBautismoGeneral = '';
        alpineComponent.oficianteBautismoGeneralAprobado = false;
        alpineComponent.usarMismoOficianteConfirmacion = true;
        alpineComponent.oficianteConfirmacionGeneral = '';
        alpineComponent.oficianteConfirmacionGeneralAprobado = false;

        alpineComponent.programa = {
            fecha: '',
            barrio: '',
            preside: '',
            dirige: '',
            bienvenidaOrganizacion: '',
            bienvenidaBarrio: '',
            oracionApertura: '',
            oracionCierre: '',
            confirmacionMismoDia: false,
            himnoApertura: { numero: '', titulo: '', urlOriginal: '', urlLimpia: '' },
            himnoCierre: { numero: '', titulo: '', urlOriginal: '', urlLimpia: '' },
            bautizados: [
                { 
                    id: Date.now(), 
                    nombres: '', 
                    apellidos: '', 
                    oficianteBautismo: '', 
                    oficianteBautismoAprobado: false,
                    oficianteConfirmacion: '',
                    oficianteConfirmacionAprobado: false,
                    testigo1: '', 
                    testigo2: '' 
                }
            ],
            discursantes: [
                { nombre: '', tema: 'Bautismo' },
                { nombre: '', tema: 'Espíritu Santo' }
            ],
            numeroEspecial: { activo: false, participantes: '', descripcionAccion: '' }
        };
    });
});