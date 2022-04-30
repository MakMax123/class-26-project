class rope{
	constructor(body1,body2, offsetX)
	{
		
		this.offsetX = offsetX
		

		var options={
			bodyA:body1,
			bodyB:body2,
			
		}

		this.rope= Matter.Constraint.create(options)
		World.add(world,this.rope)

	}

	display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		
		//WRITE THE CORRECT CODE TO RENDER A LINE BETWEEN THE TWO BODIES
		
		strokeWeight(2);
		
        

		line(pointA.x, pointA.y, pointB.x +this.offsetX, pointB.y);


		
	}

}