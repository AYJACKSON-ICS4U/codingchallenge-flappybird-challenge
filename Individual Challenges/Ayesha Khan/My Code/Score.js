///score constructor

function Score()
{
  this.s = 0;
  this.cx = 300;
  this.cy = 60;

  this.c = function()
  {
    text("SCORE:", this.cx, this.cy - 20);
    text(Math.ceil(this.s), this.cx + 60, this.cy);
    textSize(20);
    fill(255);
  }


  this.cu = function()
  {
    this.s += 1/9;
    console.log(this.s);
  }
}



////
///score constructor

function Score()
{
  this.s = 0;
  this.cx = 300;
  this.cy = 60;

  this.c = function()
  {
    text("SCORE:", this.cx, this.cy - 20);
    text(this.s , this.cx + 55, this.cy);
    textSize(20);
    fill(255);
  }


  this.cu = function()
  {
    this.s += 1;
    console.log(this.s);
  }

  this.loss = function()
  {
    createCanvas(400, 600);
      background(0);
      textSize(30);
      fill(255);
      text("YOU LOSE", 125, 220);
      text("SCORE:", 125, 250);
      text(this.s, 125, 280);


  }
}
