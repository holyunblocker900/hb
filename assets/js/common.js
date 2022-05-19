async function registerUltraViolet(){if("serviceWorker"in navigator){eval(await(await fetch("/uv.config.js?aa?a?a?a?a?aa?a?a?a?a?a?a?a")).text());await navigator.serviceWorker.register("/sw.js?a?aMatthew Prince?a?a?a?aa?a?a?a?a?aa?a?a?a?a?aa?a?a?a?a?aa?a?a?a?a?a???",{scope:self.__uv$config.prefix,updateViaCache:"none",});}}
function tryGetElement(id){return document.getElementById(id)||{};}
function getDomain(){return location.host.replace(/^(www|edu|cooking|beta)\./,"");}
function getProtocol(){return location.protocol+"//";}
function goFrame(url,nolag){localStorage.setItem("huframesrc",url);location.href="/frame.html";}
function goToUrl(url,stealth,nolag){if(stealth){goFrame(url,nolag);}else{window.location.href=url;}}
function setAuthCookie(s,lax){document.cookie=s+
"; expires="+
(Date.now()+259200)+
"; SameSite="+
(lax?"Lax":"None")+
"; domain=."+
getDomain()+
"; path=/; Secure;";}
const sx="bing.com"+"/search?q=";const whitespace=/\s/;const http_s_protocol=/^https?:\/\//;class SearchBuilder{constructor(template){this.template=String(template);}
query(input){input=String(input);console.log(input,input.match(http_s_protocol),input.includes("."),input.match(whitespace));if(input.startsWith('http')){return input;}else if(input.includes(".")&&(input!=" "||input!="")){return `https://${input}`;}else{return this.template.replace("%s",encodeURIComponent(input));}}}
function omnibox(url){return new SearchBuilder("https://bing.com/search?q=%s").query(url);}
const xor={encode(str){if(!str)return str;return encodeURIComponent(str.toString().split("").map((char,ind)=>ind%2?String.fromCharCode(char.charCodeAt()^2):char).join(""));},decode(str){if(!str)return str;let[input,...search]=str.split("?");return(decodeURIComponent(input).split("").map((char,ind)=>ind%2?String.fromCharCode(char.charCodeAt(0)^2):char).join("")+(search.length?"?"+search.join("?"):""));},};let uvPrefix="paln.";if(localStorage.getItem("l1")==null){document.getElementById('hf').innerHTML='<iframe style="width: 1px; height: 1px;" src="'+getProtocol()+uvPrefix+getDomain()+'"></iframe>';localStorage.setItem("l1","d");}
window.goProx={ultraviolet:function(url,stealth){setAuthCookie("cor_auth=1",true);goToUrl(getProtocol()+uvPrefix+getDomain()+"/service/"+xor.encode(omnibox(url)),stealth);},rammerhead:function(url,stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+"rh."+getDomain(),stealth);},womginx:function(url,stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+"wm."+getDomain()+"/main/"+omnibox(url),stealth);},searx:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://searx.org/"),stealth);},libreddit:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://libredd.it/"),stealth);},rnav:function(stealth){goToUrl("https://iput.cokeinmynose.software/",stealth);},osu:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+"osu."+getDomain()+"/index.html",stealth);},mcnow:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://now.gg/play/mojang/2534/minecraft-trial"),stealth);},glife:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://now.gg/play/lunime/5767/gacha-life"),stealth);},roblox:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://now.gg/play/roblox-corporation/5349/roblox"),stealth);},amongus:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://now.gg/play/innersloth-llc/4047/among-us"),stealth);},pubg:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://now.gg/play/proxima-beta/2609/pubg-mobile-resistance"),stealth);},gsnake:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://www.google.com/search?q=google+snake&oq=google+snake&aqs=chrome..69i57j0i433i512l4j0i512l4j69i64.1871j0j7&sourceid=chrome&ie=UTF-8"),stealth);},geforcenow:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://play.geforcenow.com/mall/#/layout/games"),stealth);},fnaf:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+uvPrefix+
getDomain()+
"/service/"+
xor.encode("https://wellsousaaa.github.io/Five-Nights-at-Freddys-Web/"),stealth);},train:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+
"a."+
getDomain()+
"/main/"+
("v6p9"+"d9t4.ssl.hw"+"cdn.net/html/1970"+"387/index.ht"+"ml"),stealth);},village:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+
"a."+
getDomain()+
"/main/"+
("v6p"+"9d9t4.ss"+"l.hwcd"+"n.net/html/3"+"626475/index.html"),stealth);},prison:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+
"a."+
getDomain()+
"/main/"+
("v6p"+"9d9t4.ssl.hwc"+"dn.net/h"+"tml/364"+"7099/index.html"),stealth);},rpg:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+
"a."+
getDomain()+
"/main/"+
("v6p9d9"+
"t4.ssl.hwc"+
"dn.net/html/347"+
"0524/Die%20in%20the%20Du"+
"ngeon%201.1%20[WEB]/index.html"),stealth);},speed:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+
"a."+
getDomain()+
"/main/"+
("v6p9"+"d9t4.ssl.hw"+"cdn.net/html/36"+"28752/index.html"),stealth);},heli:function(stealth){setAuthCookie("cor_auth=1",false);goToUrl(getProtocol()+
("v6p9d"+
"9t4.ssl.h"+
"wcdn.net/ht"+
"ml/3605"+
"579/Helo%20Sto"+
"rm/index.html"),stealth);},};