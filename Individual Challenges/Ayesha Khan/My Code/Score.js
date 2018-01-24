////
///score constructor

function Score()
{
  this.s = 0;
  this.cx = 300;
  this.cy = 60;

  this.c = function()
  {
    fill(255);
    text("SCORE:", this.cx, this.cy - 20);
    text(this.s , this.cx + 55, this.cy);
    textSize(20);
  }


  this.cu = function()
  {
    this.s += 1;
    console.log(this.s);
  }

  this.loss = function()
  {
    background(0);
     fill(255);
     text("YOU LOSE", 150, 200);
     text("SCORE:", 150, 230);
     text(this.s , 150, 260);
     textSize(30);

  }
}

