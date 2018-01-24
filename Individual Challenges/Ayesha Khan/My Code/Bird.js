//bird function

function Bird() {
  this.y = height/2;
  this.x = 64;

  this.gravity = 0.6;
  this.lift = -13;
  this.velocity = 0;

  this.show = function(){
    fill(231, 76, 60);
    ellipse( this.x, this.y, 32, 32);
    fill(225);
    ellipse(this.x+5, this.y-5, 10,10);
    fill(0);
    ellipse(this.x+5, this.y-5, 5,5);
    fill(243, 156, 18);
    triangle(this.x+15,this.y-4,this.x+15,this.y+4,this.x+30,this.y)  }

  this.up = function(){
    this.velocity += this.lift;
  }

  this.update = function(){
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity*= 0.9;

    if (this. y > height){
      this.y = height;
      this.velocity = 0;
    }

    if (this. y < 0){
      this.y = 0;
      this.velocity = 0;
    }
  }


}
