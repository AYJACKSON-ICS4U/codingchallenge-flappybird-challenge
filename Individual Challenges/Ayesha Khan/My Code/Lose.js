//lose constructor
var count;
function Lose () {
  createCanvas(400, 600);
  //sc = new Score();

  this.page = function(count)
  {
    background(0);
     text("YOU LOSE", 150, 200);
     text("SCORE:", 150, 230);
     text(count, 150, 260);
     textSize(30);
     fill(255);
  }
}
