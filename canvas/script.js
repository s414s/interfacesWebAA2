
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

class Keyboard {
    constructor() {
        this.controller = {
            ArrowUp: false,
            ArrowRight: false,
            ArrowDown: false,
            ArrowLeft: false
        }

        document.addEventListener("keydown", (e) => {
            // console.log("key pressed", e.code)
            if (Object.keys(this.controller).includes(e.code)) {
                this.controller[e.code] = true;
                this.changeBearing();
            }
        })

        document.addEventListener("keyup", (e) => {
            // console.log("key pressed", e.code)
            if (Object.keys(this.controller).includes(e.code)) {
                this.controller[e.code] = false;
                this.changeBearing();
            }
        })
    }

    changeBearing() {
        const tc = this.controller;
        let bearing = null;

        if (tc.ArrowUp) {
            bearing = "up";
            return "up";
        } else if (tc.ArrowRight) {
            bearing = "right";
            return "right";
        } else if (tc.ArrowDown) {
            bearing = "down";
            return "down";
        } else if (tc.ArrowLeft) {
            bearing = "left";
            return "left";
        } else {
            return null
        }
    }
}

class Ficha {

    constructor(x, y, radius) {
        this.x = x + radius;
        this.y = y + radius;
        this.radius = radius;
        this.speed = 10;
    }

    maxRange(canvasWidth, canvasHeight) {
        this.minX = this.radius;
        this.maxX = canvasWidth - this.radius;
        this.minY = this.radius;
        this.maxY = canvasHeight - this.radius;
    }

    clamp() {
        this.x = Math.min(Math.max(this.x, this.minX), this.maxX);
        this.y = Math.min(Math.max(this.y, this.minY), this.maxY);
    }

    dibuja() {
        context.beginPath(); // Comienza un nuevo camino.
        context.arc(ficha.x, ficha.y, ficha.radius, 0, Math.PI * 2); // Dibuja un círculo completo.
        context.fillStyle = 'blue'; // Color de la ficha.
        context.fill(); // Rellena el círculo.
    }

    move(movementType) {
        if (movementType === 'down') {
            this.y += this.speed;
            this.clamp();
        } else if (movementType === 'up') {
            this.y -= this.speed;
            this.clamp();
        } else if (movementType === 'right') {
            this.x += this.speed;
            this.clamp();
        } else if (movementType === 'left') {
            this.x -= this.speed;
            this.clamp();
        }
    }

}

// ==============
const width = 600;
const height = 600;

var canvas = document.getElementById('tablero');
var context = canvas.getContext('2d');
var keyboard = new Keyboard();

canvas.width = width;
canvas.height = height;

function draw() {
    context.clearRect(0, 0, window.innerWidth, window.innerHeight);

    var bearing = keyboard.changeBearing();
    console.log("new bearing", bearing)

    ficha.move(bearing);
    ficha.dibuja();

    // dibuja rectangulo
    context.strokeStyle = 'red';
    context.lineWidth = 10;
    context.strokeRect(0, 0, width, height); // Draws an empty rectangle with a 10-pixel margin around it inside the canvas.

    self.requestAnimationFrame(draw);
}

let ficha = new Ficha(0, 0, 25);
ficha.maxRange(width, height);

draw();