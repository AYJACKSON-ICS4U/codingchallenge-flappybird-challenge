

function Pipe() {
    this.top = random(height/2);
    this.bottom = random(height/2);
    this.x = width;
    this.w = 20;
    this.speed = 0.5;
    this.s = 0;
    
    this.highlight = false;
    
    this.hits = function(bird){
        if (bird.y < this.top || bird.y > height - this.bottom){
            if (bird.x > this.x && bird.x < this.x+this.w){
                this.highlight = true;
                return true;
            }
        }
 
        this.highlight = false;
        return false;
    }
    
    
    this.show = function() {
        fill(235, 172, 242);
        if (this.highlight === true){
            fill(255, 0, 0);
        }
        
        rect(this.x, 0, this.w, this.top);
        rect(this.x, height-this.bottom, this.w, this.bottom);
    }
    
    this.update = function() {
        this.x -= this.speed;
        
        if (count % 10 == 0){
            this.speed += 0.1;
        }
    }
    
    this.offscreen = function() {
        if (this.x < -this.w){
            return true;
        }
        else {
            return false;
        }
    }
    
}
