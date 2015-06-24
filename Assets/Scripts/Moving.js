#pragma strict

var go = true;

function Update () 
{
	if(transform.position.x <= -3)
	{
		go = true;
	}
	
	else if(transform.position.x >= 3)
	{
		go = false;
	}
	
	if(go)
	{
		transform.position.x += .2;
	}
	
	else if(!go)
	{
		transform.position.x -= .2;
	}
}