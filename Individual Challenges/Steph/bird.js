function Bird() {
    this.y = height/2;
    this.x = 65;
    
    this.gravity = 0.1;
    this.lift = -15;
    this.velocity = 0;
    
    this.show = function(){
        fill(0, 200, 300);
        ellipse(this.x,this.y, 30, 30);
        noStroke();
        fill(0);
        ellipse(this.x+5,this.y-5,6,6)
        fill(242, 255, 0);
        triangle(this.x+15,this.y-4,this.x+15,this.y+4,this.x+30,this.y)
    }
    
    this.up = function() {
        this.velocity += this.lift;
    }
    
    this.update = function() {
        this.velocity += this.gravity;
        this.velocity += 0.9;
        this.y += this.velocity;
        
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }
}
