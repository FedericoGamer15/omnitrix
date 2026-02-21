   **👽 Omnitrix 3D Interactivo - Ben 10 Clásico**

<img width="521" height="584" alt="omnitrix_image" src="https://github.com/user-attachments/assets/5f1755e4-0380-4058-b4f9-cdad207b54a8" />

Un simulador web inmersivo y altamente personalizable del Omnitrix Clásico de Ben 10, construido íntegramente con tecnologías web estándar, renderizado 3D en tiempo real y animaciones fluidas.

Este proyecto permite a los usuarios interactuar con un modelo 3D del Omnitrix, escuchar los efectos de sonido originales, ver secuencias cinemáticas de transformación y gestionar la "batería" del reloj, brindando una experiencia nostálgica y realista.

✨ Características Principales

Renderizado 3D en Tiempo Real: Utiliza Three.js para cargar, renderizar y manipular un modelo .glb del Omnitrix con iluminación dinámica.

Mecánica Auténtica del Dial: Al girar para seleccionar un alienígena, la anilla exterior rota mientras que el núcleo central y la pantalla holográfica se mantienen estáticos, replicando fielmente el funcionamiento de la serie animada.

Hologramas 2D Sólidos: Proyección de imágenes PNG de los alienígenas sobre el disco central del reloj, con soporte para transparencias y colores puros.

Secuencias Cinemáticas: * Videos introductorios (Intro de la serie y obtención del reloj) con opción de salto (⏭️).

Video de transformación ininterrumpible al seleccionar un alienígena.

Sistema de Batería y Recarga: Temporizador interno de 8 segundos de uso tras la transformación, seguido de un estado de "Recarga" (luz roja) y sonidos característicos de enfriamiento.

Sistema de Audio Completo: Soporte para múltiples pistas de audio superpuestas (activación, giro de dial, transformación, recarga y loop de espera).

Responsive Design: Soporte para PC (mouse) y Dispositivos Móviles (pantalla táctil), incluyendo una alerta para girar el dispositivo a modo horizontal.

🛠️ Panel Secreto de Desarrollador: Herramienta oculta en tiempo real para ajustar la posición del holograma, el tamaño, la opacidad y las luces de la escena sin tocar el código.

🚀 Tecnologías Utilizadas

HTML5 & CSS3: Estructura e interfaz de usuario, diseño fluido y superposiciones.

Vanilla JavaScript (ES6): Lógica del simulador, máquina de estados y control de eventos.

Three.js: Motor WebGL para la renderización e interacción con el modelo 3D (GLTFLoader, OrbitControls).

GSAP (GreenSock): Librería líder en animaciones para transiciones suaves, desvanecimientos y movimientos mecánicos del reloj.

📂 Estructura de Archivos Recomendada

Para que el proyecto funcione correctamente "out-of-the-box", asegúrate de organizar tus recursos en la siguiente estructura de carpetas:

    /tu-repositorio
    │
    ├── index.html              # Archivo principal (Todo el código)
    ├── classic_omnitrix.glb       # Tu modelo 3D del Omnitrix
    │
    ├── /aliens/256x256/           # Siluetas PNG transparentes de los aliens
    │   ├── fuego.png
    │   ├── bestia.png
    │   └── ... (hasta 10 aliens)
    │
    ├── /cinematicas/              # Videos de introducción (.mp4)
    │   ├── ben-10-classic_intro.mp4
    │   └── ben-10-classic_obtain-the-omnitrix.mp4
    │
    ├── /videos_aliens/            # Cinemáticas de transformación (.mp4)
    │   ├── fuego.mp4
    │   ├── bestia.mp4
    │   └── ... 
    │
    └── /sonidos/                  # Efectos de audio (.mp3 / .wav)
    ├── omnitrix_activate.mp3
    ├── omnitrix_girar-dial.mp3
    ├── omnitrix_transform.mp3
    ├── omnitrix_power-down.mp3
    ├── omnitrix_cargado.mp3
    └── omnitrix_dial-loop.wav


Nota: Si te falta algún video o imagen, el código tiene "blindajes" integrados. Mostrará hologramas procedurales de emergencia o saltará la cinemática sin romper la página.

🎮 Controles e Interacción

Acción

PC (Ratón / Teclado)

Móvil (Táctil)

Rotar Cámara

Mantener Clic Izquierdo y arrastrar

Deslizar un dedo

Acercar / Alejar

Rueda del ratón (Scroll)

Pellizcar con dos dedos

Activar Omnitrix

Clic en el botón verde inferior o clic físico en el modelo 3D

Toque en el botón inferior o en el modelo

Cambiar Alien

Clic en botones "◀ ALIEN" / "ALIEN ▶"

Toque en botones laterales

Transformarse

Clic en "¡TRANSFORMAR!" o en el dial físico levantado

Toque en el botón o en el dial físico

🛠️ Panel Secreto de Desarrollador

Este proyecto incluye una herramienta interna muy potente para calibrar la apariencia visual en tiempo real sin recargar la página.

¿Cómo abrirlo?

En PC: Presiona las teclas Alt + H simultáneamente.

En Celulares: Toca rápidamente 3 veces el título verde principal que dice "OMNITRIX CLÁSICO".

¿Qué puedes ajustar?

Posición X / Z: Centra el holograma milimétricamente.

Altura Y: Define cuánto "flota" la imagen sobre el cristal del reloj.

Tamaño: Agranda o achica la silueta del alienígena.

Opacidad: Haz la imagen totalmente sólida (1.0) o dale un efecto holográfico fantasmal (0.5).

Iluminación: Controla la intensidad de la luz base y la luz direccional para destacar los brillos metálicos de tu modelo 3D.

Una vez encuentres los valores perfectos en el panel, recuerda copiarlos y pegarlos en la sección de "CONFIGURACIÓN DE MODELO Y PANTALLA" dentro del archivo omnitrix.html para guardarlos permanentemente.

⚙️ Notas para Modificadores (Modding)

Si vas a usar tu propio modelo 3D, asegúrate de que contenga mallas (Meshes) con los siguientes nombres (sin importar mayúsculas/minúsculas) para que el código las reconozca automáticamente y las anime:

dial o nucleo: La anilla exterior que rota.

discos_dial: La base interior bajo el cristal donde se proyecta la imagen.

reloj_arena_verde: El símbolo icónico del centro.

object_16 (opcional): Otras partes centrales que requieran mantenerse estáticas al girar el alien.

boton: El botón lateral que se presiona.

📝 Licencia y Créditos

Creado con pasión e imaginación por [Federico Cámara] y usando vibecoding (Gemini 3.1 Pro)
Siéntete libre de clonar (fork), modificar y mejorar este proyecto. Si lo usas de base para tus propias creaciones, ¡una mención en los créditos es más que bienvenida!

Ben 10 es propiedad de Cartoon Network / Warner Bros. Discovery. Este proyecto es una recreación fan-made sin fines de lucro.
