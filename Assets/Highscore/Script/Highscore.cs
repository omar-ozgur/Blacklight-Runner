using UnityEngine;
using System.Collections;
using System.Text;
using System.Security;

public class Highscore : MonoBehaviour 
{
	private string secretKey = "key";
	private string PostScoreUrl = "";
	private string GetHighscoreUrl = "";
	public GUIStyle style;
	public bool identity = false;

	private string name = "Name";
	private string score = "Score";
	private string WindowTitlel = "";
	private string Score = "";

	public GUISkin Skin;
	public float windowWidth = Screen.width/2;
	private float windowHeight = Screen.height/1;
	public Rect windowRect;

	public int maxNameLength = 10;
	public int getLimitScore = 15;
	
	
	void Start () 
	{
		if(PlayerPrefs.GetInt("level1raw") > 0 || Application.loadedLevel == 13)
		{
			PostScoreUrl = "";
			GetHighscoreUrl = "";
		}
				if(PlayerPrefs.GetInt("level2raw") > 0 || Application.loadedLevel == 14)
		{
			PostScoreUrl = "";
			GetHighscoreUrl = "";
		}
				if(PlayerPrefs.GetInt("level3raw") > 0 || Application.loadedLevel == 15)
		{
			PostScoreUrl = "";
			GetHighscoreUrl = "";
		}
				if(PlayerPrefs.GetInt("level4raw") > 0 || Application.loadedLevel == 16)
		{
			PostScoreUrl = "";
			GetHighscoreUrl = "";
		}
				if(PlayerPrefs.GetInt("level5raw") > 0 || Application.loadedLevel == 17)
		{
			PostScoreUrl = "";
			GetHighscoreUrl = "";
		}
		if(Application.loadedLevel != 7)
		{
			identity = false;
		}
		
		//windowRect = new Rect (120, 40, 300, 300);
		StartCoroutine("GetScore");		
	}

	void Update () 
	{
		windowRect = new Rect (Screen.width / 2 - Screen.width/4, Screen.height/2 -(Screen.height/1 - Screen.height/10)/2, Screen.width/2, Screen.height/1 - Screen.height/10);
		windowHeight = Screen.height/2;
	}
	
	IEnumerator GetScore()
	{
		Score = "";
			
    	WindowTitlel = "Loading";
		
		WWWForm form = new WWWForm();
		form.AddField("limit",getLimitScore);
		
    	WWW www = new WWW(GetHighscoreUrl,form);
    	yield return www;
		
		if(www.text == "") 
    	{
			print("There was an error getting the high score: " + www.error);
			WindowTitlel = "There was an error getting the high score";
    	}
		else 
		{
			WindowTitlel = "Done";
       		Score = www.text;
		}
	}
	
	IEnumerator PostScore(string name, int score)
	{

		string _name = name;
		int _score = score;
		
		string hash = Md5Sum(_name + _score + secretKey).ToLower();
		
		WWWForm form = new WWWForm();
		form.AddField("name",_name);
		form.AddField("score",_score);
		form.AddField("hash",hash);
		
		WWW www = new WWW(PostScoreUrl,form);
		WindowTitlel = "Wait";
		yield return www;
		
    	if(www.text == "done") 
    	{
			
			identity = false;
       		StartCoroutine("GetScore");
			if(PlayerPrefs.GetInt("level1raw") > 0)
			{
				Application.LoadLevel(13);
			}
				if(PlayerPrefs.GetInt("level2raw") > 0)
			{
				Application.LoadLevel(14);
			}
						if(PlayerPrefs.GetInt("level3raw") > 0)
			{
				Application.LoadLevel(15);
			}
						if(PlayerPrefs.GetInt("level4raw") > 0)
			{
				Application.LoadLevel(16);
			}
						if(PlayerPrefs.GetInt("level5raw") > 0)
			{
				Application.LoadLevel(17);
			}
    	}
		else 
		{
			print("There was an error posting the high score: " + www.error);
			WindowTitlel = "There was an error posting the high score";
		}
		
	}
	
	void OnGUI()
	{
		Debug.Log(PlayerPrefs.GetInt("level1raw"));
		
		if(identity)
		{
		GUI.skin = Skin;
		Skin.textField.fixedHeight = Screen.height/10;
		Skin.button.fixedHeight = Screen.height/10;
		Skin.textField.fontSize = 30;
			style.fontSize = Screen.width/40;
		Skin.textField.fontSize = Screen.width/40;
			Skin.button.fontSize = Screen.width/60;
		GUI.Label(new Rect(Screen.width / 2 + Screen.width/8, Screen.height/1 - Screen.height/3, Screen.width/4, 50),WindowTitlel, style);


		name = GUI.TextField (new Rect (Screen.width / 2 - Screen.width/10, Screen.height/1 - Screen.height/3, Screen.width/10, Screen.height/10), name, maxNameLength);
    	if(PlayerPrefs.GetInt("level1raw") > 0)
		{
			score = ""+PlayerPrefs.GetInt("level1raw");
		}
			    	if(PlayerPrefs.GetInt("level2raw") > 0)
		{
			score = ""+PlayerPrefs.GetInt("level2raw");
		}
			    	if(PlayerPrefs.GetInt("level3raw") > 0)
		{
			score = ""+PlayerPrefs.GetInt("level3raw");
		}
			    	if(PlayerPrefs.GetInt("level4raw") > 0)
		{
			score = ""+PlayerPrefs.GetInt("level4raw");
		}
			    	if(PlayerPrefs.GetInt("level5raw") > 0)
		{
			score = ""+PlayerPrefs.GetInt("level5raw");
		}

		
    	if (GUI.Button(new Rect(Screen.width / 2 + Screen.width/35, Screen.height/1 - Screen.height/3, Screen.width/10, Screen.height/10),"Post Score"))
    	{
			StartCoroutine(PostScore(name, int.Parse(score)));
       		name = "";
       		score = "";
    	}    
		}	
		
		if(!identity)
		{
			GUI.skin = Skin;

			windowRect = GUI.Window(0, windowRect, DoMyWindow, WindowTitlel);
		}
	}
	
	void DoMyWindow(int windowID) 
	{
		if(identity)
		{
			windowHeight = 0;
			windowRect = new Rect (Screen.width / 2 - Screen.width/4, 20, Screen.width/2, 5);
		}
		
        GUI.skin = Skin;
		Skin.window.fontSize = Screen.height/40;
		Skin.label.fontSize = Screen.width/25;
    	GUI.Label (new Rect (Screen.width/2 - Screen.width/2, Screen.height/2 - Screen.height/2 + Screen.height/12, Screen.width/2, Screen.height), Score);

//    	if (GUI.Button(new Rect(Screen.width/3,Screen.height - 90,70,30),"Refresh"))
//    	{
//			StartCoroutine("GetScore");
//    	}         
//		
    }
	
	
	public string Md5Sum(string input)
	{
    	System.Security.Cryptography.MD5 md5 = System.Security.Cryptography.MD5.Create();
    	byte[] inputBytes = System.Text.Encoding.ASCII.GetBytes(input);
    	byte[] hash = md5.ComputeHash(inputBytes);
 
    	StringBuilder sb = new StringBuilder();
    	for (int i = 0; i < hash.Length; i++)
    	{
    	    sb.Append(hash[i].ToString("X2"));
    	}
    	return sb.ToString();
	}
}
