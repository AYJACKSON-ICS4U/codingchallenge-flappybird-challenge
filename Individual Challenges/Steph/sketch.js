var bird;
var pipes = [];
var score;

function setup() {
    createCanvas(400, 600);
    bird = new Bird();
    pipes.push(new Pipe());
    score = new score();
}

function draw() {
    background(0);
    
    score.c();
    for (var i = pipes.length-1; i >= 0; i--) {
        pipes[i].show();
        pipes[i].update();
        
        if (pipes[i].hits(bird)) {
            console.log("HIT");
            score.ca();
        }
        
        if (pipes[i].upscore(bird)) {
            score.cu();
        }
        
        if (pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }
    
    bird.update();
    bird.show();
    
    if (frameCount % 100 == 0) {
        pipes.push(new Pipe()); 
    }
}

function keyPressed() {
    if(key == ' '){
        bird.up();
        //console.log("SpaceBar");
    }
}
