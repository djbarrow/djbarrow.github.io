// Copyright (c)2005 Site Meter, Inc. 
// <![CDATA[
// codename: s13space1234

var g_date=new Date();
var g_hours=0;
var g_minutes=0;
var g_tzo = (typeof(g_date.getTimezoneOffset)!="undefined") ? g_date.getTimezoneOffset() : "";
var g_width=window.screen.width; 
var g_height=window.screen.height;
var g_colorDepth=window.screen.colorDepth;
var g_r="";
var g_page=escape(document.location);
var g_rtype="0";
var g_server="s13.sitemeter.com";
var g_language = navigator.language ? navigator.language : navigator.userLanguage;
var g_ip="86.41.138.105";

// Get the User Agent Name
var g_agent = navigator.appName;

// if g_frames is true then try getting the framed referral (with out error checking)
if (typeof(g_frames) != "undefined")
	if (g_frames)
		g_r=top.document.referrer;

// Get the referral for non-multi-domained-framed sites using a Netscape browser
if ((g_r == "") || (g_r == "[unknown origin]") || (g_r == "unknown") || (g_r == "undefined"))
	if (document["parent"] != null) 
		if (parent["document"] != null) // ACCESS ERROR HERE!
			if (parent.document["referrer"] != null) 
				if (typeof(parent.document) == "object")
				{
					g_rtype="1";
					g_r=parent.document.referrer; 
				}

// Get the referral for the current document if a framed referral wasn't found
if ((g_r == "") || (g_r == "[unknown origin]") || (g_r == "unknown") || (g_r == "undefined"))
	if (document["referrer"] != null) 
	{
		g_rtype="4";
		g_r = document.referrer;
	}

// Get the hours
if (g_date)
	g_hours=g_date.getHours();

// Get the minutes
if (g_date)
	g_minutes=g_date.getMinutes();

// Convert all the 'unknown's into blank
if ((g_r == "") || (g_r == "[unknown origin]") || (g_r == "unknown") || (g_r == "undefined"))
	g_r = "";
// Create the image url and write it into the page. 
var g_bImage=1;
if (typeof(g_sLastCodeName) != "undefined")
	if (g_sLastCodeName == site)
	    g_bImage = 0;
if (g_bImage == 1)
{
document.write("<a href=\"http://www.sitemeter.com/");
document.write("stats.asp?site="+site+"\" target=\"_top\">");
document.write("<img src=\"http://" + g_server + "/");
document.write("meter.asp?site="+site); 
document.write("&refer="+escape(g_r));
if (g_ip != "")
	document.write("&ip="+g_ip);
document.write("&hours="+g_hours);
document.write("&minutes="+g_minutes);
document.write("&rtype="+g_rtype);
document.write("&w="+g_width);
document.write("&h="+g_height);
document.write("&clr="+g_colorDepth);
document.write("&tzo="+g_tzo);
document.write("&lang="+escape(g_language));
if (typeof(g_security) != "undefined")
	document.write("&security="+escape(g_security));
document.write("&pg="+g_page);
document.write("&js=1&rnd="+Math.random());
document.write("\" border=\"0\" alt=\"Site Meter\"/></a>");
}

var g_sLastCodeName = site;
// ]]>
