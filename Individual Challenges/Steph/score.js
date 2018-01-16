///score constructor

function score()
{
  this.s = 0;
  this.cx = 300;
  this.cy = 60;
    
    this.c = function () {
        fill(255);
        textSize(20);
        text("STREAK:", this.cx, this.cy - 20);
        text(this.s, this.cx + 60, this.cy); 
    }
    this.cu = function () {
        this.s += 1;
    }
    this.ca = function() {
        this.s = 0;
    }
}
