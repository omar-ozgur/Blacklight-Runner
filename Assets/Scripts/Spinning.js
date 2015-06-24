#pragma strict

private var p1 = false;
private var p12 = false;
private var p12go = false;

private var pN = false;
private var pN2 = false;
private var pNgo = false;

var cam : Transform;

function Update () 
{
	if(p1)
	{
		cam.transform.RotateAround (transform.position, Vector3.left, 90 * Time.deltaTime);
	}
	
	
	
	
	if(pN)
	{
		cam.localEulerAngles.x = 14;
		cam.localEulerAngles.y = 0;
		cam.localEulerAngles.z = 0;
		cam.localPosition.x = 0;
		cam.localPosition.y = 6;
		cam.localPosition.z = -25;
	}
	
}

function OnTriggerEnter(hit : Collider)
{
	if(hit.gameObject.tag == "P1")
	{
		p1 = true;
	}
		
	if(hit.gameObject.tag == "PN")
	{
		pN = true;
		p1 = false;
	}
}
