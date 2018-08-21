// Bog standard get/set cookie functions

function GetCookie(name) {
  name += '=';
  var c = document.cookie.split('; ');
  for (var i in c)
    if (c[i].lastIndexOf(name, 0) == 0)
      return unescape(c[i].substr(name.length));
  return null;
}

function SetCookie(name, value, expires, path, domain, secure) {
  document.cookie= name + "=" + escape(value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

//Adds the channel name to the list maintained in the
//cookie, if it's not there already

function AddChannel(cookie, channel) {
  var cookieval = GetCookie(cookie);
  var expdate = new Date ();
  expdate.setTime(expdate.getTime() + (30*24*60*60*1000)); // 30 days
  if (!cookieval)
    SetCookie(cookie, '|' + channel + '|', expdate, '/', '', false);
  else if (cookieval.indexOf('|' + channel + '|') == -1)
    SetCookie(cookie, cookieval + channel + '|', expdate, '/', '', false);
}
