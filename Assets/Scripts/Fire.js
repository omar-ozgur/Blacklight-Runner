#pragma strict

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "player")
	{
		Death.death = true;
	}
}