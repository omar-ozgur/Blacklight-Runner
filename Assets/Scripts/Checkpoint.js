#pragma strict

var player : Transform;
static var xpos : float = 0;
static var zpos : float = 0;
static var ypos : float = 1.1;

function Start()
{
	xpos = 0;
	zpos = 0;
	ypos = 1.1;
}

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "player")
	{
		xpos = player.transform.position.x;
		zpos = player.transform.position.z;
		ypos = player.transform.position.y;
	}
}