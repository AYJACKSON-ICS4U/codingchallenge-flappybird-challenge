//creating bird variable
var bird;
//creating array for pipes
var pipes = [];
function setup() {
    //background
    createCanvas(400, 600);
    console.log("Check, Check");
    bird = new Bird();
    pipes.push(new Pipe());
}

function draw() {
    //drawing background
    background(0);
    
    //looping through all elements of the array
    for (var i = pipes.length -1; i >= 0; i--){
        //calling update and display functions on the pipe
        pipes[i].show();
        pipes[i].update();
        
        if (pipes[i].hits(bird)){
            console.log("HIT");
        }
        
        //if pipe are off the screen then remove pipe from array
        if (pipes[i].offscreen()){
            pipes.splice(i, 1);
        }
    }
    
    //calling update and display functions on the bird
    bird.update();
    bird.show();
    
    //adding a new pipe to the array every 100 frames
    if (frameCount % 100 ==0){
        pipes.push(new Pipe());
    }
    
    
}

//if key is pressed
function keyPressed() {
    //if space bar is pressed
    if (key ==' '){
        bird.up();
        //testing that space bar works
        //console.log("SPACE");
    }
}

