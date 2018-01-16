//lose constructor

function Lose () {
  createCanvas(400, 600);


  this.page = function()
  {
    background(0);
     text("YOU LOSE", 150, 200);
     text("SCORE:", 150, 230);
     Score.c();
     textSize(30);
     fill(255);
  }
}
