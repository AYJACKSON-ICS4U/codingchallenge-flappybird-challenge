//Ayesha Khan
//1/9/18

var bird;
var pipes = [];
var score;
var lose;
function setup () {
  createCanvas(400, 600);
  bird = new Bird();
  score = new Score();
  lose = new Lose();
  pipes.push(new Pipe());
}



function draw(){
  background(0);
  score.c();
  for (var i = pipes.length-1; i >=0; i--){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)){
      console.log("got it");
      lose.page(score.cu());
    }
    else if (pipes[i].crosses(bird))
    {
          score.cu();
    }

    if (pipes[i].offscreen()){
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0){
    pipes.push(new Pipe());
  }

}

function keyPressed(){
  if (key ==' '){
    bird.up();
    //console.log("SPACE");
  }
}
//////////////////////////////////////////////////////


//Ayesha Khan
//1/9/18

var bird;
var pipes = [];
var score;
var lose;
var count = 0;
function setup () {
  createCanvas(400, 600);
  bird = new Bird();
  score = new Score();
  lose = new Lose();
  pipes.push(new Pipe());
}



function draw(){
  background(0);
  score.c();
  count = score.cu.s;
  for (var i = pipes.length-1; i >=0; i--){
    pipes[i].show();
    pipes[i].update();

    if (pipes[i].hits(bird)){
      console.log("got it");
      score.loss();
    }
   else if (pipes[i].crosses(bird))
    {
          score.cu();
    }

    if (pipes[i].offscreen()){
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0){
    pipes.push(new Pipe());
  }

}

function keyPressed(){
  if (key ==' '){
    bird.up();
    //console.log("SPACE");
  }
}

