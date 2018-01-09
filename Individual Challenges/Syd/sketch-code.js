var bird;
function setup() {
    createCanvas(400, 600);
    console.log("Check, Check");
    bird = new Bird();
}

function draw() {
    background(0);
    bird.update();
    bird.show();
}

function keyPressed() {
    if (key ==' '){
        bird.up();
        //testing that space bar works
        //console.log("SPACE");
    }
}
