(function(a)
{_zao=_zao||
{uid:0}
;
function t(t,e,i)
{var n=new Date;
n.setTime(n.getTime()+i*1e3);
var o=escape(e)+(i==null?"":";expires="+n.toUTCString())+";path=/";
a.cookie=t+"="+o}
function e(t)
{var e=a.cookie;
var i=e.indexOf(" "+t+"=");
if(i==-1)
{i=e.indexOf(t+"=")}
if(i==-1)
{e=null}
else
{i=e.indexOf("=",i)+1;
var n=e.indexOf(";
",i);
if(n==-1)
{n=e.length}
e=unescape(e.substring(i,n))}
return e}
function i(a)
{return a.split(".").slice(-2).join(".")}
var n=i(a.location.hostname);
var o=0;
var r=a.cookie.match(/q_c1=(\w+)\|(\w+)\|(\d+)/);
if(r)
{o=r[1]}
var c=e("zatb");
if(!c)
{t("zata",[n,o,Math.floor(Math.random()*1000001)].join("."),24*3600*365);
c=e("zatb")}
var u=e("zata");
t("zatb",n,1800);
var z=a.location;
var f=new Image;
f.src=["http://analytics.zhihu.com/zat.gif?","zathn=",z.hostname,"&zatp=",z.pathname,"&zatr=",a.referrer||"-","&zatuuid=",o,"&zatuid=",_zao.uid,"&zata=",u,"&zatb=",c].join("")}
)(document);
