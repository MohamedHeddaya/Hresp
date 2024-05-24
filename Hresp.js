/*

MIT License

Copyright (c) 2023 Mohamed Abdelsalam Ahmed Khalil Heddaya

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. 

*/

HrpV={};
function HrpSP(nAA,aAA,pAA,p2AA){

if(aAA=="x"){
hbsmplr(nAA,{hbx:pAA,hbw:p2AA-pAA});
}

};
function HrpGP(nAB,aAB,obAA){

if(typeof obAA=="undefined"){
obAA=true;
}
if(obAA==true){
HrpV.vaa0="ac";
}
if(obAA==false){
HrpV.vaa0="in";
}
if(aAB=="x"){
return {hrpx:hbsmplxy(nAB,HrpV.vaa0).hbx,hrpx2:hbsmplxy(nAB,HrpV.vaa0).hbx+hbsmplwh(nAB,"ac").hbw};
}
if(aAB=="y"){
return {hrpy:hbsmplxy(nAB,HrpV.vaa0).hby,hrpy2:hbsmplxy(nAB,HrpV.vaa0).hby+hbsmplwh(nAB,"ac").hbh};
}

};
function HrpSLx(nAI,xAB){

hbsmplr(nAI,{hbx:xAB});

};
function HrpSLy(nAI,yAB){

hbsmplr(nAI,{hby:yAB});

};
function HrpSw(nAI,wAB){

hbsmplr(nAI,{hbw:wAB});

};
function HrpSh(nAI,hAB){

hbsmplr(nAI,{hbh:hAB});

};
function HrpWH(mnWaa,mnHaa,mxWaa,mxHaa,fAA){

if(window.screen.width>=mnWaa&&window.screen.height>=mnHaa
&&window.screen.width<=mxWaa&&window.screen.height<=mxHaa){
fAA();
}

};
function HrpWHx(mxWaa,mxHaa,fAA){

if(window.screen.width<=mxWaa&&window.screen.height<=mxHaa){
fAA();
}

};
function HrpWHn(mnWaa,mnHaa,fAA){

if(window.screen.width>=mnWaa&&window.screen.height>=mnHaa){
fAA();
}

};
function HrpWx(mxWaa,fAA){

if(window.screen.width<=mxWaa){
fAA();
}

};
function HrpHx(mxHaa,fAA){

if(window.screen.height<=mxHaa){
fAA();
}

};
function HrpWn(mnWaa,fAA){

if(window.screen.width>=mnWaa){
fAA();
}

};
function HrpHn(mnHaa,fAA){

if(window.screen.height>=mnHaa){
fAA();
}

};
function HrpFP(xAA,x2AA,lAA){

HrpV.vab0=x2AA-xAA;
HrpV.vab1=HrpV.vab0/lAA;
return {hrpsz:HrpV.vab1};

};
function HrpFW(wAA,lAA){

HrpV.vac0=wAA/lAA;
return {hrpsz:HrpV.vac0};

};
function HrpCS(nAC,hsAA,sAA){

if(sAA=="w"){
hbsmplr(nAC,{hbw:hbsmplwh(hsAA,"ac").hbw});
}
if(sAA=="h"){
hbsmplr(nAC,{hbh:hbsmplwh(hsAA,"ac").hbh});
}
if(sAA=="hw"){
hbsmplr(nAC,{hbw:hbsmplwh(hsAA,"ac").hbw/2});
}
if(sAA=="hh"){
hbsmplr(nAC,{hbh:hbsmplwh(hsAA,"ac").hbh/2});
}

};
function HrpCSr(nAC,hsAA,sAA,rAA){

if(sAA=="w"){
hbsmplr(nAC,{hbw:hbsmplwh(hsAA,"ac").hbw*rAA/100});
}
if(sAA=="h"){
hbsmplr(nAC,{hbh:hbsmplwh(hsAA,"ac").hbh*rAA/100});
}
if(sAA=="hw"){
hbsmplr(nAC,{hbw:(hbsmplwh(hsAA,"ac").hbw*rAA/100)/2});
}
if(sAA=="hh"){
hbsmplr(nAC,{hbh:(hbsmplwh(hsAA,"ac").hbh*rAA/100)/2});
}

};
function HrpWP(nAD,hsAB,obAB){

if(obAB==true){
hbsmplr(nAD,{hbx:hbsmplxy(hsAB,"ac").hbx,hby:hbsmplxy(hsAB,"ac").hby,hbw:hbsmplwh(hsAB,"ac").hbw,hbh:hbsmplwh(hsAB,"ac").hbh});
}
if(obAB==false){
hbsmplr(nAD,{hbx:hbsmplxy(hsAB,"in").hbx,hby:hbsmplxy(hsAB,"in").hby,hbw:hbsmplwh(hsAB,"ac").hbw,hbh:hbsmplwh(hsAB,"ac").hbh});
}

};
function HrpWPwr(nAE,hsAC,obAC,rAB){

if(obAC==true){

hbsmplr(nAE,{hbx:hbsmplxy(hsAC,"ac").hbx,hby:hbsmplxy(hsAC,"ac").hby,hbw:hbsmplwh(hsAC,"ac").hbw*rAB/100,hbh:hbsmplwh(hsAC,"ac").hbh});

}
if(obAC==false){

hbsmplr(nAE,{hbx:hbsmplxy(hsAC,"in").hbx,hby:hbsmplxy(hsAC,"in").hby,hbw:hbsmplwh(hsAC,"ac").hbw*rAB/100,hbh:hbsmplwh(hsAC,"ac").hbh});

}

};
function HrpWPhr(nAE,hsAC,obAC,rAB){

if(obAC==true){

hbsmplr(nAE,{hbx:hbsmplxy(hsAC,"ac").hbx,hby:hbsmplxy(hsAC,"ac").hby,hbw:hbsmplwh(hsAC,"ac").hbw,hbh:hbsmplwh(hsAC,"ac").hbh*rAB/100});

}
if(obAC==false){

hbsmplr(nAE,{hbx:hbsmplxy(hsAC,"in").hbx,hby:hbsmplxy(hsAC,"in").hby,hbw:hbsmplwh(hsAC,"ac").hbw,hbh:hbsmplwh(hsAC,"ac").hbh*rAB/100});

}

};
function HrpAl(nAF,hsAD,anAA,obAD){

if(typeof obAD=="undefined"){
obAD=false;
}
if(obAD==true){
HrpV.hoxaa=hbsmplxy(hsAD,"ac").hbx;
HrpV.hoyaa=hbsmplxy(hsAD,"ac").hby;
}
if(obAD==false){
HrpV.hoxaa=0;
HrpV.hoyaa=0;
}

HrpV.waa=hbsmplwh(nAF,"ac").hbw;
HrpV.haa=hbsmplwh(nAF,"ac").hbh;
HrpV.howaa=hbsmplwh(hsAD,"ac").hbw;
HrpV.hohaa=hbsmplwh(hsAD,"ac").hbh;

HrpV.waah=HrpV.waa/2;
HrpV.haah=HrpV.haa/2;
HrpV.howaah=HrpV.howaa/2;
HrpV.hohaah=HrpV.hohaa/2;

HrpV.xaa=null;
HrpV.yaa=null;

if(anAA=="clt"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hohaah-HrpV.haah;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="cbm"){

HrpV.xaa=HrpV.howaah-HrpV.waah;
HrpV.yaa=HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="crt"){

HrpV.xaa=HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hohaah-HrpV.haah;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="cx"){

HrpV.xaa=HrpV.howaah-HrpV.waah;

hbsmplr(nAF,{hbx:HrpV.xaa});

}
if(anAA=="cy"){

HrpV.yaa=HrpV.hohaah-HrpV.haah;

hbsmplr(nAF,{hby:HrpV.yaa});

}
if(anAA=="ctp"){

HrpV.xaa=HrpV.howaah-HrpV.waah;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tplt"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="bmlt"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="bmrt"){

HrpV.xaa=HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tprt"){

HrpV.xaa=HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tl"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="bl"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="br"){

HrpV.xaa=HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tr"){

HrpV.xaa=HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="lt"){

HrpV.xaa=HrpV.hoxaa;

hbsmplr(nAF,{hbx:HrpV.xaa});

}
if(anAA=="bm"){

HrpV.yaa=HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hby:HrpV.yaa});

}
if(anAA=="rt"){

HrpV.xaa=HrpV.howaa-HrpV.waa;

hbsmplr(nAF,{hbx:HrpV.xaa});

}
if(anAA=="tp"){

HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hby:HrpV.yaa});

}

};
function HrpRA(nAF,hsAD,anAA,obAD){

if(typeof obAD=="undefined"){
obAD=true;
}
if(obAD==true){
HrpV.hoxaa=hbsmplxy(hsAD,"ac").hbx;
HrpV.hoyaa=hbsmplxy(hsAD,"ac").hby;
}
if(obAD==false){
HrpV.hoxaa=0;
HrpV.hoyaa=0;
}

HrpV.waa=hbsmplwh(nAF,"ac").hbw;
HrpV.haa=hbsmplwh(nAF,"ac").hbh;
HrpV.howaa=hbsmplwh(hsAD,"ac").hbw;
HrpV.hohaa=hbsmplwh(hsAD,"ac").hbh;

HrpV.waah=HrpV.waa/2;
HrpV.haah=HrpV.haa/2;
HrpV.howaah=HrpV.howaa/2;
HrpV.hohaah=HrpV.hohaa/2;

HrpV.xaa=null;
HrpV.yaa=null;

if(anAA=="clt"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaah-HrpV.haah;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="cbm"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaah-HrpV.waah;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="crt"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaah-HrpV.haah;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="cx"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaah-HrpV.waah;

hbsmplr(nAF,{hbx:HrpV.xaa});

}
if(anAA=="cy"){

HrpV.yaa=HrpV.hoyaa+HrpV.hohaah-HrpV.haah;

hbsmplr(nAF,{hby:HrpV.yaa});

}
if(anAA=="ctp"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaah-HrpV.waah;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tplt"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="bmlt"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="bmrt"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tprt"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tl"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="bl"){

HrpV.xaa=HrpV.hoxaa;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="br"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa+HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="tr"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaa-HrpV.waa;
HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hbx:HrpV.xaa,hby:HrpV.yaa});

}
if(anAA=="lt"){

HrpV.xaa=HrpV.hoxaa;

hbsmplr(nAF,{hbx:HrpV.xaa});

}
if(anAA=="bm"){

HrpV.yaa=HrpV.hoyaa+HrpV.hohaa-HrpV.haa;

hbsmplr(nAF,{hby:HrpV.yaa});

}
if(anAA=="rt"){

HrpV.xaa=HrpV.hoxaa+HrpV.howaa-HrpV.waa;

hbsmplr(nAF,{hbx:HrpV.xaa});

}
if(anAA=="tp"){

HrpV.yaa=HrpV.hoyaa;

hbsmplr(nAF,{hby:HrpV.yaa});

}

};
function Hrpw(nAG){

return hbsmplwh(nAG,"ac").hbw;

};
function Hrph(nAG){

return hbsmplwh(nAG,"ac").hbh;

};
function Hrpx(nAG){

return hbsmplxy(nAG,"ac").hbx;

};
function Hrpy(nAG){

return hbsmplxy(nAG,"ac").hby;

};
function Hrpxi(nAG){

return hbsmplxy(nAG,"in").hbx;

};
function Hrpyi(nAG){

return hbsmplxy(nAG,"in").hby;

};
function HrpTLM(tAA,mlAA,_3pbAA){

HrpV.caa0=-1;
HrpV.haa0=null;
HrpV.naa0="";
HrpV.scaa0=tAA.length-mlAA;
HrpV.chaa0=0;
if(HrpV.scaa0>=1){
if(_3pbAA==true){
mlAA-=3;
}
while(HrpV.caa0!=tAA.length-1){

HrpV.caa0+=1;
HrpV.haa0=tAA[HrpV.caa0];
HrpV.chaa0+=1;
if(HrpV.chaa0<mlAA+1){
HrpV.naa0+=HrpV.haa0;
}

}
if(_3pbAA==true){
HrpV.naa0+="...";
}
}
if(tAA.length<=mlAA){
HrpV.naa0=tAA;
}
return HrpV.naa0;

};
function HrpPN(feAA,seAA,aAC,obAE){

if(typeof obAE=="undefined"){
obAE=true;
}
if(obAE==true){
HrpV.vad0="ac";
}
if(obAE==false){
HrpV.vad0="in";
}
if(aAC=="x"){

HrpV.fxaa=hbsmplxy(feAA,HrpV.vad0).hbx;
// HrpV.fyaa=hbsmplxy(feAA,HrpV.vad0).hby;

HrpV.fwaa=hbsmplwh(feAA,"ac").hbw;
// HrpV.fhaa=hbsmplwh(feAA,"ac").hbh;

HrpV.fx2aa=HrpV.fxaa+HrpV.fwaa;
// HrpV.fy2aa=HrpV.fyaa+HrpV.fhaa;

HrpV.sxaa=hbsmplxy(seAA,HrpV.vad0).hbx;
// HrpV.syaa=hbsmplxy(seAA,HrpV.vad0).hby;

HrpV.swaa=hbsmplwh(seAA,"ac").hbw;
// HrpV.shaa=hbsmplwh(seAA,"ac").hbh;

HrpV.sx2aa=HrpV.sxaa+HrpV.swaa;
// HrpV.sy2aa=HrpV.syaa+HrpV.shaa;

if(HrpV.fx2aa>HrpV.sxaa&&HrpV.fxaa<HrpV.sxaa){
return true;
}
if(HrpV.sx2aa>HrpV.fxaa&&HrpV.sxaa<HrpV.fxaa){
return true;
}

}
if(aAC=="y"){

// HrpV.fxaa=hbsmplxy(feAA,HrpV.vad0).hbx;
HrpV.fyaa=hbsmplxy(feAA,HrpV.vad0).hby;

// HrpV.fwaa=hbsmplwh(feAA,"ac").hbw;
HrpV.fhaa=hbsmplwh(feAA,"ac").hbh;

// HrpV.fx2aa=HrpV.fxaa+HrpV.fwaa;
HrpV.fy2aa=HrpV.fyaa+HrpV.fhaa;

// HrpV.sxaa=hbsmplxy(seAA,HrpV.vad0).hbx;
HrpV.syaa=hbsmplxy(seAA,HrpV.vad0).hby;

// HrpV.swaa=hbsmplwh(seAA,"ac").hbw;
HrpV.shaa=hbsmplwh(seAA,"ac").hbh;

// HrpV.sx2aa=HrpV.sxaa+HrpV.swaa;
HrpV.sy2aa=HrpV.syaa+HrpV.shaa;

if(HrpV.fy2aa>HrpV.syaa&&HrpV.fyaa<HrpV.syaa){
return true;
}
if(HrpV.sy2aa>HrpV.fyaa&&HrpV.syaa<HrpV.fyaa){
return true;
}

}

};
function HrpCD(feAA,seAA,aAC,obAE){

if(typeof obAE=="undefined"){
obAE=true;
}
if(obAE==true){
HrpV.vad0="ac";
}
if(obAE==false){
HrpV.vad0="in";
}
if(aAC=="x"){

HrpV.fxaa=hbsmplxy(feAA,HrpV.vad0).hbx;
// HrpV.fyaa=hbsmplxy(feAA,HrpV.vad0).hby;

HrpV.fwaa=hbsmplwh(feAA,"ac").hbw;
// HrpV.fhaa=hbsmplwh(feAA,"ac").hbh;

HrpV.fx2aa=HrpV.fxaa+HrpV.fwaa;
// HrpV.fy2aa=HrpV.fyaa+HrpV.fhaa;

HrpV.sxaa=hbsmplxy(seAA,HrpV.vad0).hbx;
// HrpV.syaa=hbsmplxy(seAA,HrpV.vad0).hby;

HrpV.swaa=hbsmplwh(seAA,"ac").hbw;
// HrpV.shaa=hbsmplwh(seAA,"ac").hbh;

HrpV.sx2aa=HrpV.sxaa+HrpV.swaa;
// HrpV.sy2aa=HrpV.syaa+HrpV.shaa;

if(HrpV.fx2aa>=HrpV.sxaa&&HrpV.fxaa<HrpV.sxaa){
return true;
}
if(HrpV.sx2aa>=HrpV.fxaa&&HrpV.sxaa<HrpV.fxaa){
return true;
}

}
if(aAC=="y"){

// HrpV.fxaa=hbsmplxy(feAA,HrpV.vad0).hbx;
HrpV.fyaa=hbsmplxy(feAA,HrpV.vad0).hby;

// HrpV.fwaa=hbsmplwh(feAA,"ac").hbw;
HrpV.fhaa=hbsmplwh(feAA,"ac").hbh;

// HrpV.fx2aa=HrpV.fxaa+HrpV.fwaa;
HrpV.fy2aa=HrpV.fyaa+HrpV.fhaa;

// HrpV.sxaa=hbsmplxy(seAA,HrpV.vad0).hbx;
HrpV.syaa=hbsmplxy(seAA,HrpV.vad0).hby;

// HrpV.swaa=hbsmplwh(seAA,"ac").hbw;
HrpV.shaa=hbsmplwh(seAA,"ac").hbh;

// HrpV.sx2aa=HrpV.sxaa+HrpV.swaa;
HrpV.sy2aa=HrpV.syaa+HrpV.shaa;

if(HrpV.fy2aa>=HrpV.syaa&&HrpV.fyaa<HrpV.syaa){
return true;
}
if(HrpV.sy2aa>=HrpV.fyaa&&HrpV.syaa<HrpV.fyaa){
return true;
}

}

};
function HrpSE(nAH,evAA,edAA,fAB){

hbsmpls[nAH].hbsmple.hrped={

hrpn:nAH,
hrpe:hbsmpls[nAH].hbsmple,
hrpo:nAH,

};
hbsmpls[nAH].hbsmple.hrped=Object.assign(hbsmpls[nAH].hbsmple.hrped,edAA);
hbsmpls[nAH].hbsmple.addEventListener(evAA,fAB);

};
function HrpSSE(nAH,snAA,evAA,edAA,fAB,obAF){

if(typeof obAF=="undefined"){
obAF=true;
}
edAA.hrpo=nAH;
hbsmpl(snAA,{hbx:0,hby:0,hbw:0,hbh:0,hbpos:"fixed",hbp:hbsmpls[nAH].hbsmplpn},{hbbc:"transparent"});
HrpWP(snAA,nAH,obAF);
HrpSE(snAA,evAA,edAA,fAB);

};
function HrpGED(evhAA,edkAA){

return evhAA.target.hrped[edkAA];

};
function Hrpwox(nAJ){

return hbsmplwh(nAJ,"otmx").hbw;

};
function Hrphox(nAJ){

return hbsmplwh(nAJ,"otmx").hbh;

};
function Hrpwi(nAJ){

return hbsmplwh(nAJ,"in").hbw;

};
function Hrphi(nAJ){

return hbsmplwh(nAJ,"in").hbh;

};
function Hrpwo(nAJ){

return hbsmplwh(nAJ,"ot").hbw;

};
function Hrpho(nAJ){

return hbsmplwh(nAJ,"ot").hbh;

};
function HrpMwh(ayAB){

HrpV.aycB=-1;
HrpV.ayvB=null;
HrpV.wlcB=null;
HrpV.hlcB=null;
while(HrpV.aycB!=ayAB.length-1){

HrpV.aycB+=1;
HrpV.ayvB=ayAB[HrpV.aycB];
HrpV.wlcB+=Hrpwox(HrpV.ayvB);
HrpV.hlcB+=Hrphox(HrpV.ayvB);

}
return {hrpmw:HrpV.wlcB,hrpmh:HrpV.hlcB};

};
// function HrpMO(ayAA,anAB,hxAA,hyAA,hwAA,hhAA)
function HrpMO(ayAA,axAA,xAC,yAC){

HrpV.ayc=-1;
HrpV.ayv=null;
if(axAA=="x"||axAA=="xy"){
HrpV.xlc=xAC;
}
if(axAA=="y"||axAA=="xy"){
HrpV.ylc=yAC;
}

while(HrpV.ayc!=ayAA.length-1){

HrpV.ayc+=1;
HrpV.ayv=ayAA[HrpV.ayc];
if(axAA=="x"){
HrpSLx(HrpV.ayv,HrpV.xlc);
HrpV.xlc+=Hrpwox(HrpV.ayv);
}
if(axAA=="y"){
HrpSLy(HrpV.ayv,HrpV.ylc);
HrpV.ylc+=Hrphox(HrpV.ayv);
}
if(axAA=="xy"){
HrpSLx(HrpV.ayv,HrpV.xlc);
HrpSLy(HrpV.ayv,HrpV.ylc);
HrpV.ylc+=Hrphox(HrpV.ayv);
HrpV.xlc+=Hrpwox(HrpV.ayv);
}

}


};