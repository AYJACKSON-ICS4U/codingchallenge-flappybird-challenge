//defining the x and y positions of the bird
function Bird (){
    this.y = height / 2;
    this.x = 80;
    
    //force of gravity on the bird to pull it down
    this.gravity = 0.7;
    this.lift = -20;
    //setting initial speed of the bird
    this.velocity = 0;
    
    //creating the bird 
    this.show = function(){
        fill(255);
        ellipse(this.x, this.y, 30, 30);
    }
    
    this.up = function (){
        this.velocity += this.lift;
        //println(this.velocity);
    }
    
    //updating the velocity based on gravity and updating y position based on velocity
    this.update = function() {
        this.velocity += this.gravity;
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
