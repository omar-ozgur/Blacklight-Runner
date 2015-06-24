#pragma strict

private var flash = false;
private var shrink = true;


function Update () {

	if(flash)
	{
		if(Camera.main.fieldOfView <= 25 && shrink == true)
		{
			shrink = false;
		}
		if(Camera.main.fieldOfView >= 95 && shrink == false)
		{
			shrink = true;
		}
		if(shrink)
		{
			Camera.main.fieldOfView = Camera.main.fieldOfView - 1;
		}
		if(!shrink)
		{
			Camera.main.fieldOfView += 1;
		}
	}
	if(!flash)
	{
		Camera.main.fieldOfView = 60;
	}
}

function OnTriggerEnter (hit : Collider) {
		
	if(hit.gameObject.tag == "P1")
	{
		flash = true;
	}
	if(hit.gameObject.tag == "PN")
	{
		flash = false;
	}
}
