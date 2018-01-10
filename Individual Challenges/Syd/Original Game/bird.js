//defining the x and y positions of the bird
function Bird (){
    this.y = height / 2;
    this.x = 80;
    
    //force of gravity on the bird to pull it down
    this.gravity = 0.5;
    this.lift = -22;
    //setting initial speed of the bird
    this.velocity = 0;
    
    //creating the bird 
    this.show = function(){
        //bird

        fill(12, 235, 202);
        line(this.x+6, this.y+10, this.x+6, this.y+30);
        line(this.x-6, this.y+10, this.x-6, this.y+30);
        ellipse(this.x, this.y, 40, 40);
        fill(0, 0, 0);
        ellipse(this.x+7, this.y-7, 6, 6);
        fill(255, 247, 0);
        triangle(this.x+31, this.y+4, this.x+19, this.y-4, this.x+20, this.y+5);

    }
    
    this.up = function (){
        this.velocity += this.lift;
        //println(this.velocity);
    }
    
    //updating the velocity based on gravity and updating y position based on velocity
    this.update = function() {
        this.velocity += this.gravity;
        this.velocity += 0.9;
        this.y += this.velocity;
        
        if (this.y > height){
            this.y = height;
            this.velocity = 0;
        }
        
        if (this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }
}
