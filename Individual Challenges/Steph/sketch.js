var bird;
function setup() {
    createCanvas(400, 600);
    background(mouseX, 100, 100);
    bird = new Bird();
}

function draw() {
    background(0);
    bird.update();
    bird.show();
}

function keyPressed() {
    if(key == ' '){
        console.log("SpaceBar");
    }
}



4:40 time
