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
	if(transform.position.z <= 10 && cam.transform.eulerAngles.y != 270)
	{
		p1 = false;
		pN = true;
	}

	if(p1)
	{
		cam.transform.RotateAround (transform.position, Vector3.up, 120 * Time.deltaTime);
		//cam.transform.RotateAround (transform.position, Vector3.left, 120 * Time.deltaTime);
	}
	
	if(pN)
	{
		cam.localEulerAngles.x = 14;
		cam.localEulerAngles.y = 0;
		cam.localEulerAngles.z = 0;
		cam.localPosition.x = 0;
		cam.localPosition.y = 6;
		cam.localPosition.z = -25;
//		cam.transform.RotateAround (transform.position, Vector3.up, 150 * Time.deltaTime);
//		if(cam.transform.eulerAngles.y >= 267 && cam.transform.eulerAngles.y <= 273)
//		{
//			cam.transform.eulerAngles.y = 270;
//			pN = false;
//		}
	}
	
	Debug.Log(cam.transform.eulerAngles.y);
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
