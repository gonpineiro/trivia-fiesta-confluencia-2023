const preguntas = {
    uno: {
        number: 1,
        quest: '¿Sabes cuál es el número de teléfono de atención a la ciudadanía de la Municipalidad de Neuquén?',
        respuestas: [
            {
                respuesta: '107',
                esCorrecta: false,
            },
            {
                respuesta: '108',
                esCorrecta: false,
            },
            {
                respuesta: '147',
                esCorrecta: true,
            },
        ],
        correcta: '147',
        variant: 'blue',

        color: '#7b30d1',

        description:
            'La línea 107 es el Sistema de Emergencias Médicas de Neuquén (SIEN) .\n\nLa línea 108 es Atención y Asistencia a Víctimas de Violencia de Genero.\n',
    },

    dos: {
        number: 2,
        quest: '¿La línea 108 es Atención y Asistencia a Víctimas de Violencia de Genero.',
        respuestas: [
            {
                respuesta: 'Castración',
                correcta: true,
            },
            {
                respuesta: 'Perrera',
                correcta: false,
            },
            {
                respuesta: 'Desparasitación',
                correcta: false,
            },
        ],
        correcta: 'Castración',

        color: '#ff4e83',

        description:
            'La Subsecretaría de Ciudades Saludables de la Secretaría de Ciudadanía cuenta con 6 quirófanos para castraciones de animales no humanos, 2 de ellos son móviles para operativos de castración en los barrios.',
    },

    tres: {
        number: 3,
        quest: '¿Cómo se llama la aplicación para seguimiento del trasporte público de pasajeros?',
        respuestas: [
            {
                respuesta: 'SUBE',
                correcta: false,
            },
            {
                respuesta: 'COLE',
                correcta: true,
            },
            {
                respuesta: 'GoogleMaps',
                correcta: false,
            },
        ],
        correcta: 'COLE',

        color: '#21d1ae',

        description:
            'NOSE',
    },
};

export default preguntas