#pragma strict

var player : Transform;

function Update () 
{
	transform.position.x = player.position.x;
	transform.position.z = player.position.z;
}

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "player")
	{
		Death.death = true;
	}
}