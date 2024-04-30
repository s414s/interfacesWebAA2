class Keyboard {
    constructor() {
        this.controller = {
            ArrowUp: false,
            ArrowRight: false,
            ArrowDown: false,
            ArrowLeft: false
        }

        document.addEventListener("keydown", (e) => {
            if (Object.keys(this.controller).includes(e.code)) {
                this.controller[e.code] = true;
                this.changeBearing();
            }
        })

        document.addEventListener("keyup", (e) => {
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
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = 'blue';
        context.fill();
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
    context.strokeRect(0, 0, width, height);

    self.requestAnimationFrame(draw);
}

let ficha = new Ficha(0, 0, 25);
ficha.maxRange(width, height);

draw();