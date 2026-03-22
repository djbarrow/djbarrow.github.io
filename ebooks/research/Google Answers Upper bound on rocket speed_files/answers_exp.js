maxExId=20;
ca=new Array(4);
c='ca-answers_728x90';
w='100%';
h=100;
f='4_answers_sl';
d=(new Date()).getDate();

exId+=d;
if(!exId)exId=d;
if(exId>maxExId){
  while(exId>maxExId){exId-=maxExId;}
  exId--;
}

p=Math.floor(exId/5);

ca[0]=new Object();
ca[0].c=c;
ca[0].w=w;
ca[0].h=h;
ca[0].f=f;
ca[0].ch='q_placement_a_on_a_q_on_q';
ca[0].r='question';

ca[1]=new Object();

ca[2]=new Object();
ca[2].c=c;
ca[2].w=w;
ca[2].h=h;
ca[2].f=f;
ca[2].ch='a_placement_a_on_a_q_on_q';
ca[2].r='answer_text';

ca[3]=new Object();

ca[0].a=ca[2].a=true;
ca[1].a=ca[3].a=false;

function dac(i){
	if(ca[i] && ca[i].a){
	  google_ad_client = ca[i].c;
    	  google_ad_width = ca[i].w;
          google_ad_height = ca[i].h;
          google_ad_format = ca[i].f;
	  google_ad_channel=ca[i].ch;
          google_ad_region = ca[i].r;
	  google_alternate_ad_url="http://answers.google.com/answers/google_adsense_script.html";
	  document.write('<script src="http://pagead2.googlesyndication.com/pagead/show_ads.js" type="text/javascript" language="JavaScript"></script>');
	}
}
