class Ficha {
    constructor(x, y, radio) {
        this.x = x + radio; // Asegura que la ficha no se salga del canvas.
        this.y = y + radio; // Ajusta la posición inicial para que el círculo quede completamente dentro del canvas.
        this.radio = radio;
    }

    dibuja(context) {
        context.beginPath(); // Comienza un nuevo camino.
        context.arc(this.x, this.y, this.radio, 0, Math.PI * 2); // Dibuja un círculo completo.
        context.fillStyle = 'blue'; // Color de la ficha.
        context.fill(); // Rellena el círculo.
    }

    actualiza() {
        // Aquí puedes agregar lógica para actualizar la posición de la ficha si es necesario.
    }
}

function anima() {
    requestAnimationFrame(anima); // Crea un bucle de animación.
    context.clearRect(0, 0, canvas.width, canvas.height); // Limpia el canvas.

    // Dibuja el tablero (cuadrado transparente).
    context.beginPath();
    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'rgba(255, 255, 255, 0.5)'; // Semi-transparente para visualizar el "tablero".
    context.fill();

    ficha.dibuja(context); // Dibuja la ficha.
}

// Esto es mio
class Tablero {
    constructor(width, height, canvasHTMLElement) {
        this.width = width;
        this.height = height;
        this.canvas = canvasHTMLElement;
    }

    init() {
        this.context = this.canvas.getContext('2d');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ficha = new Ficha(0, 0, 25);
    }

    dibuja(context) {
        context.beginPath(); // Comienza un nuevo camino.
        context.arc(this.x, this.y, this.radio, 0, Math.PI * 2); // Dibuja un círculo completo.
        context.fillStyle = 'blue'; // Color de la ficha.
        context.fill(); // Rellena el círculo.
    }

    actualiza() {
        // Aquí puedes agregar lógica para actualizar la posición de la ficha si es necesario.
    }
}


// Configuración inicial del canvas.
const canvas = document.getElementById('miCanvas');
const tablero = new Tablero(400, 400, canvas);
tablero.init();

const context = canvas.getContext('2d');

// canvas.width = 400;
// canvas.height = 400;

// Inicializa la ficha en la esquina superior izquierda del tablero.
let ficha = new Ficha(0, 0, 25); // La posición (0, 0) ajustada con el radio de la ficha.

anima(); // Comienza la animación.
