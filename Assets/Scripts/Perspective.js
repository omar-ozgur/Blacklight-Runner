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
		cam.transform.RotateAround (transform.position, Vector3.up, 90 * Time.deltaTime);
		p12go = true;
	}
	
	if(cam.transform.rotation.y >= 0 && p12go == true)
	{
		p1 = false;
		p12 = true;
	}
	
	if(p12)
	{
		cam.transform.RotateAround (transform.position, Vector3.right, 40 * Time.deltaTime);
	}
	
	if(p12 && cam.transform.localEulerAngles.x >= 40)
	{
		p12go = false;
		p12 = false;

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
