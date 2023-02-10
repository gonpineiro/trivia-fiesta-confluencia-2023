const preguntas = {
    uno: {
        number: 1,
        quest: '¿Sabes cuál es el número de teléfono de atención a la ciudadanía de la Municipalidad de Neuquén?',
        respuestas: [
            {
                respuesta: '107',
            },
            {
                respuesta: '108',
            },
            {
                respuesta: '147',
            },
        ],
        correcta: '147',

        color: '#7b30d1',

        description: [
            'La línea 107 es el Sistema de Emergencias Médicas de Neuquén (SIEN) .',
            'La línea 108 es Atención y Asistencia a Víctimas de Violencia de Genero.'
        ]
    },

    dos: {
        number: 2,
        quest: '¿La línea 108 es Atención y Asistencia a Víctimas de Violencia de Genero?',
        respuestas: [
            {
                respuesta: 'Castración',
            },
            {
                respuesta: 'Perrera',
            },
            {
                respuesta: 'Desparasitación',
            },
        ],
        correcta: 'Castración',

        color: '#ff4e83',

        description:
            ['La Subsecretaría de Ciudades Saludables de la Secretaría de Ciudadanía cuenta con 6 quirófanos para castraciones de animales no humanos, 2 de ellos son móviles para operativos de castración en los barrios.']
    },

    tres: {
        number: 3,
        quest: '¿Cómo se llama la aplicación para seguimiento del trasporte público de pasajeros?',
        respuestas: [
            {
                respuesta: 'SUBE',
            },
            {
                respuesta: 'COLE',
            },
            {
                respuesta: 'GoogleMaps',
            },
        ],
        correcta: 'COLE',

        color: '#21d1ae',

        description:
            ['Podes encontrarla en Play Store y App Store como COLE NEUQUÉN'],
    },

    cuatro: {
        number: 4,
        quest: '¿Cómo pódes pagar tus impuestos?',
        respuestas: [
            {
                respuesta: 'Por la web',
            },
            {
                respuesta: 'Whatsapp',
            },
            {
                respuesta: 'Todas las anteriores',
            },
        ],
        correcta: 'Todas las anteriores',

        color: '#fc620a',

        description:
            ['Ingresando en www.neuquencapital.gov.ar pódes conocer todos los medios de pago.'],
    },

    cinco: {
        number: 5,
        quest: '¿Cuántas cámaras en vivo tiene la Ciudad?',
        respuestas: [
            {
                respuesta: '3',
            },
            {
                respuesta: '6',
            },
            {
                respuesta: '9',
            },
        ],
        correcta: '9',

        color: '#ff1200',

        description:
            ['Ingresando en www.neuquencapital.gov.ar pódes conocer todos los medios de pago.'],
    },
};

export default preguntas