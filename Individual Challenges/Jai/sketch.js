var bird;
function setup() {
    createCanvas(400,600);
    bird = new Bird();
}

function draw() {
    background(0);
    bird.update();
    bird.show();
}

function keyPress() {
    if (key == ''){
        bird.up();
        console.log("SPACE")
    }
}
