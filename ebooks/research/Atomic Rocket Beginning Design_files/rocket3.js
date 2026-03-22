currentPage = 0

function PrintLastModDate() {
	monthNames = new Array(12)
	monthNames[0] = "jan"
	monthNames[1] = "feb"
	monthNames[2] = "mar"
	monthNames[3] = "apr"
	monthNames[4] = "may"
	monthNames[5] = "jun"
	monthNames[6] = "jul"
	monthNames[7] = "aug"
	monthNames[8] = "sep"
	monthNames[9] = "oct"
	monthNames[10] = "nov"
	monthNames[11] = "dec"
	docDate = new Date(document.lastModified)
	theMonth = monthNames[docDate.getMonth()]
	theDate = docDate.getDate()
	theDate = (theDate < 10) ? '0' + theDate : theDate;
	fullYear = new String(docDate.getYear())
	theYear = new String(fullYear.substring(2,4))
	theYear = (theYear < 10) ? '0' + theYear : theYear;
	document.write(theDate + theMonth + theYear)
}

function PrintFullLastModDate() {
	document.write("Last modified:")
	PrintLastModDate()
	document.writeln("<br>")
}

function PrintRocketHeader(fileLabel, categoryLabel) {
	document.writeln("PROJECT RHO " + fileLabel + "<br>")
	document.writeln("Ultraviolet Clearance<br>")
	document.writeln("Eyes Only<br>")
	document.writeln("Category " + categoryLabel + "<br>")
//	document.writeln("&copy;2001 Winchell Chung Jr<br>")
	document.writeln("Last modified:")
	PrintLastModDate()
	document.writeln("<br>")
}

function PrintRocketPageNum() {
	printPage = currentPage + 1
	document.write("page " + printPage + " of " + rocketPages.length + "<br>")
}

function PrintFullRocketPageNum() {
	printPage = top.menu.currentPage + 1
	document.write("Page " + printPage + " of " + rocketPages.length + "<br>")
}



function PrintRocketNavMenu() {
	document.write("<FORM name=\"guideform\">")
	document.write("<table>\n")	
	
	document.write("<tr>\n<td>&nbsp;</td>\n<td align=\"center\">")
	PrintRocketUp()
	document.write("</td><td>&nbsp;</td></tr>")
	
	document.write("<tr>")

	document.write("<td>")
	if (currentPage-1 >= 0)
		document.writeln("<a href=\"javascript:PrevPage()\"><img src=\"rocketprev.gif\" width=70 height=26 border=0 alt=\"Prev\"></a>");
	else
		document.write("&nbsp;")
	document.write("</td>")
	
	document.write("<td>")
	document.writeln("<SELECT name=\"guidelinks\" onChange=\"window.location=document.guideform.guidelinks.options[document.guideform.guidelinks.selectedIndex].value\">")
	document.writeln("<OPTION SELECTED value=\"javascript:void(0)\">--Choose--")
	for (i = 0; i < rocketPages.length; i++) {
		document.writeln("<OPTION value=\"" + rocketPages[i] + "\">" + rocketPageTitles[i])
	}
	document.writeln("</SELECT>")
	document.write("</td>")
	
	document.write("<td>")
	if (currentPage+1 < rocketPages.length)
		document.writeln("<a href=\"javascript:NextPage()\"><img src=\"rocketnext.gif\" width=70 height=26 border=0 alt=\"Next\"></a>");
	else
		document.write("&nbsp;")
	document.write("</td>")

	document.write("</tr>")

	document.writeln("</table>")
	document.writeln("</FORM>")
}

function RegisterRocketPage(pageName) {
	for (i = 0; i < rocketPages.length; i++) {
		if (rocketPages[i] == pageName)
			currentPage = i;
	}
}

function NextPage() {
	if (currentPage+1 < rocketPages.length)
		window.location = rocketPages[currentPage+1]
		
}

function PrevPage() {
	if (currentPage-1 >= 0)
		window.location = rocketPages[currentPage-1]
}

function PrintRocketTOC() {
	document.writeln("<UL>");
	for (i = 1; i < rocketPages.length; i++) {
		document.writeln("<LI><A href=\"" + rocketPages[i] + "\"><strong>" + rocketPageTitles[i] + "</strong></a>");
	}
	document.writeln("</UL>");
}

function PrintFullRocketTOC() {
	document.writeln("<UL>");
	for (i = 1; i < rocketPages.length; i++) {
		document.writeln("<LI><A href=\"" + rocketPages[i] + 
			"\" onclick=\"top.menu.currentpage=" + i-1 + "\"><strong>" + rocketPageTitles[i] + "</strong></a>");
	}
	document.writeln("</UL>");
}
