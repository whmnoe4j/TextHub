(function(a)
{
with(a)
{

a.Ur=function(b)
{
var c=ua(b),d=Sr;
return function()
{
var e=this||fa,e=e[Tr]||(e[Tr]=
{

}
),g=d(c,arguments);
return e.hasOwnProperty(g)?e[g]:e[g]=b.apply(this,arguments)
}

}
,a.Tr="closure_memoize_cache_",a.Sr=function(b,c)
{
for(var d=[b],e=c.length-1;
0<=e;
--e)d.push(typeof c[e],c[e]);
return d.join("\x0B")
}
;
a.Vr=function()
{
T.call(this)
}
;
y(Vr,T);
Vr.prototype.v=function()
{
this.n(document.body)
}
;

Vr.prototype.z=function(b)
{
function c(b,c,d)
{
if(H)
{
var e=function()
{
c.hide();
var b=G;
Am(b);
Bm(b,d)
}
;
c.show().fadeOut(150,function()
{
b.css(
{
opacity:0.5,right:-20,position:"relative",display:"block"
}
).animate(
{
opacity:1,right:0
}
,150,e)
}
)
}
else
{
H=j;
b.show();
var g=G;
Am(g);
Bm(g,d)
}

}
function d()
{
H=n;
F.find(".js-title-label").text("返回");
F.find(".return").off().click(e);
x.hide();
F.show()
}
function e()
{
F.hide();
x.show()
}
function g()
{
$(this).trigger("requestStory")
}
function h()
{
var b=p.filter(".current");
b.length&&
m.css("top",b.position().top+b.height()/2-10)
}
Vr.m.z.call(this,b);
var l=
{
member:Ur(function(b)
{
return $.get("/node/HomeHeroStoryV2",
{
params:
{
member_hash:b
}

}
)
}
),topic:Ur(function(b)
{
return $.get("/node/HomeTopicStoryV2",
{
params:
{
url_token:b
}

}
)
}
)
}
,m=$("div.single-story > .icon-sign").addClass("visible"),p=$("a.rep"),r=k;
p.mouseenter(function()
{
r=setTimeout(v(g,this),500)
}
).mouseleave(function()
{
clearTimeout(r)
}
).click(g).on("requestStory",function()
{
var b=$(this),c=b.data(),d=c.type,c=c.token;
b.addClass("current").siblings().removeClass("current");

h();
l[d](c).done(function(c)
{
$(".single-story-inner").fadeOut(150,function()
{
$(this).remove();
$(c).insertAfter(m).hide().fadeIn(150)
}
);
b.trigger("afterRequestStory")
}
)
}
);
h();
var x=$("div.mobi-front"),F=$("div.desk-front");
x.find(".js-signin, .js-signup").click(d);
this.g().c(Y,["accountcallback","sina_callback","qqconn_callback"],d);
var H=n,b=location.hash.slice(1),b="signin"===b||"signup"!==b&&$("div.view-signin").hasClass("selected"),G=new ym(
{
lw:function(b,d)
{
"signin"===b?c(zm(G,"signin"),zm(G,
"signup"),b):"signup"===b?c(zm(G,"signup"),zm(G,"signin"),b):G.Q.lw.call(G,b,d)
}

}
);
G.ng=j;
G.sl=b?"signin":"signup";
G.n(I("js-sign-flow"));
$.each(
{
".app-link.ios":["click_zhihu_ios_dl_link","homepage_not_logged_in"],".app-link.android":["click_zhihu_android_dl_link","homepage_not_logged_in"],'a.app-download-button[href^="http://itunes"]':["click_zhihu_ios_dl_link","homepage_mobile_big_not_logged_in"],'a.app-download-button[href^="https://play.google.com"]':["click_zhihu_android_dl_link","homepage_mobile_big_not_logged_in"]
}
,
function(b,c)
{
$(b).on("click",function()
{
W.apply(k,["app-promotion"].concat(c))
}
)
}
);
if(!ub)
{
var b=$("div.single-story"),Q=$("div.rep"),X=k,ka=function()
{
var b=Q.filter(":not(.current)").get();
z.ZU(b);
return b[0]
}
,Ma=function()
{
X||(X=setInterval(function()
{
$(ka()).trigger("requestStory")
}
,5E3))
}
,Ea=function()
{
clearInterval(X);
X=k
}
;
b.hover(Ea,Ma);
Q.on("requestStory",Ea).on("afterRequestStory",Ma);
b=
{
start:Ma,stop:Ea
}
;
b.start();
b=b.stop;
this.dp||(this.dp=[]);
this.dp.push(v(b,i))
}

}
;

Ca("ZH.entrySignPage",function()
{
(new Vr).v()
}
);
If("sign");

}

}
)(zhihu);

//@ sourceURL=http://static.zhihu.com/static/compiled/sign.js