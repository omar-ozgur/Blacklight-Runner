#pragma strict

static var deathCount : int;
static var death = false;
var player : Transform;

function Update () 
{
	if(death)
	{
		player.transform.position.x = Checkpoint.xpos;
		player.transform.position.z = Checkpoint.zpos;
		player.transform.position.y = Checkpoint.ypos;
		player.GetComponent(TrailRenderer).time = 0;
		deathCount += 1;
		PlayerPrefs.SetInt("totalDeaths", (PlayerPrefs.GetInt("totalDeaths") + 1));
		death = false;
		Wait();
	}
}

function Wait()
{
	yield WaitForSeconds(0.01);
	player.GetComponent(TrailRenderer).time = 1.5;
}