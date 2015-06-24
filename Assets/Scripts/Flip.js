#pragma strict

var controller : CharacterController;
var graphics : Transform;
private var flip = false;
private var rt : float = 0;

function Update()
{
	controller = GetComponent(CharacterController);

	if(!controller.isGrounded)
	{
		flip = true;
	}
	
	if(controller.isGrounded && !flip)
	{
		graphics.transform.eulerAngles.z = 0;
		rt = 0;
	}
	
	if(flip)
	{
		if(rt < 180)
		{
			graphics.transform.Rotate(0,0,-10);
			rt += 10;
		}
		
		else
		{
			flip = false;
		}
	}
}

function Flip()
{
	if(transform.rotation.x < 90)
	{
		transform.Rotate(5,0,0);
	}
}