//Ayesha Khan
//1/9/18

var bird;
var pipes = [];
function setup () {
  createCanvas(400, 600);
  bird = new Bird();
  pipes.push(new Pipe());
}



function draw(){
  background(0);

  bird.update();
  bird.show();

  for (var i = 0; i < pipes.length; i++){
    pipes[i].show();
    pipes[i].update();
  }

  if (frameCount % 40 == 0){
    pipes.push(new Pipe());
  }

}

function keyPressed(){
  if (key ==' '){
    bird.up();
    //console.log("SPACE");
  }
}
