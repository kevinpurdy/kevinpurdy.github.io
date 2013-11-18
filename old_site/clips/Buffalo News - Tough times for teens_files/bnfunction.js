 
    isMac = (navigator.appVersion.indexOf("Mac")!=-1) ? true : false;
    NS4 = (document.layers) ? true : false;
    IE4mac = ((document.all)&&(isMac)) ? true : false;
    IE4 = ((document.all)&&(!isMac)) ? true : false;
    ver4 = (NS4 || IE4) ? true : false;
    webTVCheck = navigator.appName;
    webTVCheck = webTVCheck.substring(0,5);
    webTV = (webTVCheck == "WebTV") ? true : false;
    if (webTV) ver4 = true;

var preloadLogo = false;
function preloadNewsLogo() {
	if (document.images) {
		logo1 = newImage("/images/redesign/logo1.gif");
		logo2 = newImage("/images/redesign/logo2.gif");
		//logo3 = newImage("/images/redesign/logo3.gif");
		logo4 = newImage("/images/redesign/logo4.gif");
	    logo5 = newImage("/images/redesign/logo5.gif"); 
		logo6 = newImage("/images/redesign/logo6.gif"); 
		preloadLogo = true;		
	}
}

function getRandomLogo()
{
  var logoArry = new Array(6);
  var randomNum;
  var imgSelect;
  
  logoArry[1] = "http://www.buffalonews.com/images/redesign/logo1.gif"
  logoArry[2] = "http://www.buffalonews.com/images/redesign/logo2.gif"
  //logoArry[3] = "/images/redesign/logo3.gif"
  logoArry[3] = "http://www.buffalonews.com/images/redesign/logo4.gif"
  logoArry[4] = "http://www.buffalonews.com/images/redesign/logo5.gif"
  logoArry[5] = "http://www.buffalonews.com/images/redesign/logo6.gif"
   
  randomNum = Math.floor(Math.random() * 5) + 1;
  imgSelect = logoArry[randomNum];

  return imgSelect;
 }
 	
function newImage(arg) 
{
	if (document.images) 
	{
		rslt = new Image();
		rslt.src = arg;
		return rslt;
	}
}

function changeImages() 
{
	if (document.images && (preloadFlag == true)) 
	{
		for (var i=0; i<changeImages.arguments.length; i+=2) 
		{
			document[changeImages.arguments[i]].src = changeImages.arguments[i+1];
		}
	}
}

var preloadFlag = false;
function preloadImages() 
{
	if (document.images) 
	{
		nav_cityregion_d_over = newImage("/images/redesign/nav_cityregion_d_over.gif");
		preloadFlag = true;
	}
}
	
function out()
{
	if (top.location != self.location) { top.location = self.location.href; }
}	

out();

if (document.referrer == 'http://www.jumptoyourcity.com/buffalo.html')
	document.location.href='http://www.jumptoyourcity.com/buffalo.html';
		
function welcome() 
{
	window.status='Welcome to the Electronic Edition of The Buffalo News!';
}

function DetermineWhichPage() 
{
	document.scorebrd.action = document.scorebrd.scoreboardWeek.value + ".asp";
	document.forms.scorebrd.submit();
}
				 
// name - name of the desired cookie
// * return string containing value of specified cookie or null if cookie does not exist
function getCookie(name) 
{
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) 
  {
    begin = dc.indexOf(prefix);
    if (begin != 0) return null;
  } 
  else
    begin += 2;
  
  var end = document.cookie.indexOf(";", begin);
  
  if (end == -1)
    end = dc.length;
  return unescape(dc.substring(begin + prefix.length, end));
}

function showPicture(adIn)
{	
	var win = window.open("", "Picture", "width=700,height=500"); // a window object
	win.document.open("text/html", "replace");
	win.document.write("<HTML><HEAD><TITLE>Electronic Edition of The Buffalo News</TITLE></HEAD><BODY><tr><td><img src=" + adIn + "></td></tr></BODY></HTML>");
	win.document.close();
	win.focus();
	
//	win = window.open(adIn, "Picture", "resizable=yes,scrollbars=no,status=no,toolbar=no,width=700,height=500");
//	win.focus();  
}
function showEmail(adIn)
{	
    MailShow = window.open(adIn, "Email", "resizable=yes,scrollbars=no,status=yes,toolbar=no,width=600,height=425");
	MailShow.focus();  
}

function launchWindow(adIn)
{	
    EmailShow = window.open(adIn, "Email", "resizable=yes,scrollbars=no,status=yes,toolbar=no,width=615,height=400");
	EmailShow.focus();  
}

function ReadCookie (CookieName) 
{
	var CookieString = document.cookie;
	var CookieSet = CookieString.split (';');
	var SetSize = CookieSet.length;
	var CookiePieces;
	var ReturnValue = "";
	var x = 0;
	for (x = 0; ((x < SetSize) && (ReturnValue == "")); x++) 
	{
   		CookiePieces = CookieSet[x].split ('=');
	    if (CookiePieces[0].substring (0,1) == ' ') 
		{ CookiePieces[0] = CookiePieces[0].substring (1, CookiePieces[0].length); }
   		if (CookiePieces[0] == CookieName) { ReturnValue = CookiePieces[1]; }
	}
	return ReturnValue;
}

function CurrentPrevObj (dir, storynum)
{
	this.dir = dir; this.storynum = storynum;
}	

		