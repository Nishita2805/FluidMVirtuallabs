document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('animationCanvas');
    const ctx = canvas.getContext('2d');

    const maxHeight = 100;  // Maximum height of the water in the manometer
    const pipeWidth = 600;
    const pipeHeight = 20;
    const initialWaterHeight = 0;
    const waterSpeed = 1;

    let currentWaterHeight = initialWaterHeight;

    function drawPipe() {
        ctx.fillStyle = '#0097a7';
        ctx.fillRect(100, 150, pipeWidth, pipeHeight); // Draw the pipe
    }

    function drawWater() {
        ctx.fillStyle = '#0288d1';
        ctx.fillRect(100, 170 - currentWaterHeight, pipeWidth, currentWaterHeight); // Draw the water
    }

    function drawManometer(height) {
        ctx.fillStyle = '#000';
        ctx.fillRect(350, 70, 10, maxHeight); // Draw the manometer tube
        ctx.fillStyle = '#8a8a8a';
        ctx.fillRect(350, 170 - height, 10, height); // Draw the mercury column
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas
        drawPipe();
        drawWater();
        drawManometer(currentWaterHeight / 2);

        if (currentWaterHeight < maxHeight) {
            currentWaterHeight += waterSpeed;
            requestAnimationFrame(update);
        }
    }

    drawPipe();
    update();
});
