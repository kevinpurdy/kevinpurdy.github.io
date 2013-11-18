//  Copyright (c) 2000-2004 ZEDO Inc. All Rights Reserved.
var o5=null;var z0=navigator.userAgent.toLowerCase();var d2=parseInt(navigator.appVersion);var x2=((z0.indexOf('mac')!=-1)&&(z0.indexOf('msie 4.')!=-1));var q4=(z0.indexOf('webtv')!=-1);
var r3=(z0.indexOf('opera')!=-1);
if(!x2){
o5=window.onerror;
}
var a8=new Image();
function U5(n8){
var v5=n8.toString().match(/function\s+(\w*)/)[1];
if((v5==null)||(v5.length==0)){
return "anonymous();";
}
else{
return v5+"();";
}}
function B5(){
var x7="";
for(var a=arguments.caller;a!=null;a=a.caller){
x7+=U5(a.callee);
if(a.caller==a)break;
}
return x7;
}
function F6(){
var a3="";var v5="anonymous();";var a7=0;
window.onerror=null;
for(var i=0;i<arguments.length;i++){
a3+='a'+i+'='+arguments[i]+';';
if(i==2){
a7=escape(arguments[i]);
}}
a3=B5()+a3;
if(navigator.cookieEnabled){
a3=a3+'c='+navigator.cookieEnabled+';';
}
a3=a3+"C="+document.cookie+";";
if(document.cookie.indexOf('ZEDOERROR')==-1){
a8.src='http://ads.zedo.com/ads2/p/'+Math.random()+'/ERR.gif?v=bar/v10-300/c5;'+a3+'b='+navigator.userAgent;
document.cookie="ZEDOERROR="+a7;
}
return true;
}
window.onerror=F6; 
function U1(w8,p7){
var x4=new Array();var r2=new Array();var v7=new Array();var r7=new Array();var c7;var a5='';var i,j;
x4=w8.split(p7);
c7=x4.length;
j=0;
for(i=0;i<c7;i++){
if(x4[i].length>2&&x4[i].match(/=/)){
r2[0]='';
r2[1]='';
r2=x4[i].split('=');
if((r2[0].length>0)&&(r2[1].length>0)&&(r2[1]!='0')
&&(r2[1]!='default')&&(r2[1]!='off')){
v7[j]=r2[0];
r7[j]=r2[1];
j++;
}}}
for(i=0;i<j;++i){
if(a5){
a5+=p7;
}
a5=a5+v7[i]+"="+r7[i];
}
return a5;
}
var w7='http://c7.zedo.com/bar/v10-300/c5/jsc/';var o1='http://xads.zedo.com/ads2/';var v3=new Date();var r1=v3.getTime();var i1=r1 % 102;var p0=0;var q0=0;var x1=1;var d0='0';var o0=0;var e1=0;
var z1=0;var c1=0;var c4='';var y7='';var w1='';
if(typeof zflag_nid!='undefined'){
p0=zflag_nid;
zflag_nid=0;
}
if(typeof zflag_sid!='undefined'){
q0=zflag_sid;
zflag_sid=0;
}
if(typeof zflag_cid!='undefined'){
d0=zflag_cid;
zflag_cid=0;
}
if(typeof zflag_sz!='undefined'){
o0=zflag_sz;
zflag_sz=0;
}
if(typeof zflag_width!='undefined'){
e1=zflag_width;
zflag_width=0;
}
if(typeof zflag_height!='undefined'){
z1=zflag_height;
zflag_height=0;
}
if(typeof zflag_pop!='undefined'){
x1=zflag_pop;
zflag_pop=1;
}
if(typeof zflag_kw!='undefined'){
zflag_kw=zflag_kw.replace(/&/g,'zzazz');
c4=escape(zflag_kw);
zflag_kw="";
}
if(typeof zflag_click!='undefined'){
y7=escape(zflag_click);
zflag_click="";
}
var zzStr='';var zzCountry=255;var zzMetro=0;var zzState=0;var zzSection=q0;var zzD=window.document;var zzRand=(Math.floor(Math.random()* 1000000)% 10000);var zzCustom='';
if(q4||x2){
document.write('<scr'+'ipt language="JavaScript" src="http://c5.zedo.com/bar/v10-300/c5/jsc/img2.js"></sc'+'ript>');
}
else if(r3||document.getElmentById||document.layers||document.all){
document.write('<scr'+'ipt language="JavaScript" src="http://c5.zedo.com/bar/v10-300/c5/jsc/script2.js"></scr'+'ipt>');
}
else{
w1=";u=b"+escape(z0);
document.write('<scr'+'ipt language="JavaScript" src="http://c5.zedo.com/bar/v10-300/c5/jsc/img2.js"></scr'+'ipt>');
}
if(!x2){
window.onerror=o5;
}