// ---------------------بسم اللَّه الرحمن الرحيم-----------------------

/*

MIT License

Copyright (c) 2023, 2025 Mohamed Abdelsalam Ahmed Khalil Heddaya

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

function Hrpwp(Naa,Paa){

    return (Paa*Hrpw(Naa))/100;

};
function Hrphp(Naa,Paa){

    return (Paa*Hrph(Naa))/100;

};
function HrpSP(Naa,Aaa,Paa,P2aa){

    if(Aaa=="x"){

        hbsmplr(Naa,{hbx:Paa,hbw:P2aa-Paa});

    }
    if(Aaa=="y"){

        hbsmplr(Naa,{hby:Paa,hbh:P2aa-Paa});

    }

};
function HrpSPxy(Naa,Xaa,Yaa,Xab,Yab){

    HrpSP(Naa,"x",Xaa,Xab);
    HrpSP(Naa,"y",Yaa,Yab);

};

function HrpGP(Naa,Oaa){

    var co={};

    if(Oaa=="undefined"){

        Oaa=true;
        
    }
    if(Oaa==true){

        co.tp="ac";

    }
    else{

        co.tp="in";

    }
    co.xy=hbsmplxy(Naa,co.tp);
    return {x:co.xy.hbx,y:co.xy.hby,x2:co.xy.hbx+co.xy.hbw,y2:co.xy.hby+co.xy.hbh};

};

function HrpWH(mnWaa,mnHaa,mxWaa,mxHaa,Faa){

    if(window.screen.width>=mnWaa&&window.screen.height>=mnHaa
        &&window.screen.width<=mxWaa&&window.screen.height<=mxHaa
    ){

        Faa();

    }

};

function HrpWHx(mxWaa,mxHaa,Faa){

    if(window.screen.width<=mxWaa&&window.screen.height<=mxHaa){

        Faa();

    }

};

function HrpWHn(mnWaa,mnHaa,Faa){

    if(window.screen.width>=mnWaa&&window.screen.height>=mnHaa){

        Faa();

    }

};

function HrpWx(mxWaa,Faa){

    if(window.screen.width<=mxWaa){

        Faa();

    }

};

function HrpHx(mxHaa,Faa){

    if(window.screen.height<=mxHaa){

        Faa();

    }

};

function HrpWn(mnWaa,Faa){

    if(window.screen.width>=mnWaa){

        Faa();

    }

};
function HrpHn(mnHaa,Faa){

    if(window.screen.height>=mnHaa){

        Faa();

    }

};

function HrpFP(Xaa,Xab,Laa){

    var co={};

    co.w=Xab-Xaa;
    co.sz=co.w/Laa;

    return {sz:co.sz};

};

function HrpFW(Waa,Laa){

    var co={};

    co.sz=Waa/Laa;

    return {sz:co.sz};

};

function HrpCL(Naa,Haa,LCaa,Oaa){

    var co={};

    if(typeof Oaa=="undefined"){

        Oaa=true;

    }
    if(typeof LCaa=="undefined"){

        LCaa="xy";

    }
    if(LCaa=="x"){

        if(Oaa==true){

            HrpSLx(Naa,Hrpx(Haa));

        }
        if(Oaa==false){

            HrpSLx(Naa,Hrpxi(Haa));

        }

    }
    if(LCaa=="y"){

        if(Oaa==true){

            HrpSLy(Naa,Hrpy(Haa));

        }
        if(Oaa==false){

            HrpSLy(Naa,Hrpyi(Haa));

        }

    }
    if(LCaa=="y"){

        if(Oaa==true){

            HrpSLx(Naa,Hrpx(Haa));
            HrpSLy(Naa,Hrpy(Haa));

        }
        if(Oaa==false){

            HrpSLx(Naa,Hrpxi(Haa));
            HrpSLy(Naa,Hrpyi(Haa));

        }

    }

};

function HrpCS(Naa,Haa,Saa){

    var co={};

    if(Saa=="w"){

        hbsmplr(Naa,{hbw:hbsmplwh(Haa,"ac").hbw});

    }
    if(Saa=="h"){

        hbsmplr(Naa,{hbh:hbsmplwh(Haa,"ac").hbh});

    }
    if(Saa=="hw"){

        hbsmplr(Naa,{hbw:hbsmplwh(Haa,"ac").hbw/2});

    }
    if(Saa=="hh"){

        hbsmplr(Naa,{hbh:hbsmplwh(Haa,"ac").hbh/2});

    }

};

function HrpCSr(Naa,Haa,Saa,Raa){

    var co={};

    if(Saa=="w"){

        hbsmplr(Naa,{hbw:hbsmplwh(Haa,"ac").hbw*Raa/100});

    }
    if(Saa=="h"){

        hbsmplr(Naa,{hbh:hbsmplwh(Haa,"ac").hbh*Raa/100});

    }
    if(Saa=="hw"){

        hbsmplr(Naa,{hbw:(hbsmplwh(Haa,"ac").hbw*Raa/100)/2});

    }
    if(Saa=="hh"){

        hbsmplr(Naa,{hbh:(hbsmplwh(Haa,"ac").hbh*Raa/100)/2});

    }

};
function HrpWP(Naa,Haa,Oaa){

    if(Oaa==true){

        hbsmplr(Naa,{hbx:hbsmplxy(Haa,"ac").hbx,hby:hbsmplxy(Haa,"ac").hby,hbw:hbsmplwh(Haa,"ac").hbw,hbh:hbsmplwh(Haa,"ac").hbh});

    }
    if(Oaa==false){

        hbsmplr(Naa,{hbx:hbsmplxy(Haa,"in").hbx,hby:hbsmplxy(Haa,"in").hby,hbw:hbsmplwh(Haa,"ac").hbw,hbh:hbsmplwh(Haa,"ac").hbh});

    }

};
function HrpWPwr(Naa,Haa,Oaa,Raa){

    if(Oaa==true){

        hbsmplr(Naa,{hbx:hbsmplxy(Haa,"ac").hbx,hby:hbsmplxy(Haa,"ac").hby,hbw:hbsmplwh(Haa,"ac").hbw*Raa/100,hbh:hbsmplwh(Haa,"ac").hbh});

    }
    if(Oaa==false){

        hbsmplr(Naa,{hbx:hbsmplxy(Haa,"in").hbx,hby:hbsmplxy(Haa,"in").hby,hbw:hbsmplwh(Haa,"ac").hbw*Raa/100,hbh:hbsmplwh(Haa,"ac").hbh});

    }

};

function HrpWPhr(Naa,Haa,Oaa,Raa){

    if(Oaa==true){

        hbsmplr(Naa,{hbx:hbsmplxy(Haa,"ac").hbx,hby:hbsmplxy(Haa,"ac").hby,hbw:hbsmplwh(Haa,"ac").hbw,hbh:hbsmplwh(Haa,"ac").hbh*Raa/100});

    }
    if(Oaa==false){

        hbsmplr(Naa,{hbx:hbsmplxy(Haa,"in").hbx,hby:hbsmplxy(Haa,"in").hby,hbw:hbsmplwh(Haa,"ac").hbw,hbh:hbsmplwh(Haa,"ac").hbh*Raa/100});

    }

};

function HrpAL(Naa,Haa,Aaa,Oaa){

    var co={};

    if(typeof Oaa=="undefined"||Oaa==null){

        Oaa=false;

    }
    if(Oaa==true){

        co.hoxaa=hbsmplxy(Haa,"ac").hbx;
        co.hoyaa=hbsmplxy(Haa,"ac").hby;

    }
    if(Oaa==false){

        co.hoxaa=0;
        co.hoyaa=0;

    }

    co.waa=hbsmplwh(Naa,"ac").hbw;
    co.haa=hbsmplwh(Naa,"ac").hbh;

    co.howaa=hbsmplwh(Haa,"ac").hbw;
    co.hohaa=hbsmplwh(Haa,"ac").hbh;

    // console.log(co.waa,co.howaa);

    co.waah=co.waa/2;
    co.haah=co.haa/2;

    co.howaah=co.howaa/2;
    co.hohaah=co.hohaa/2;

    co.xaa=null;
    co.yaa=null;

    if(Aaa=="clt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hohaah-co.haah;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cbm"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hohaa-co.haa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="crt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hohaah-co.haah;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cx"){

        co.xaa=co.howaah-co.waah;

        hbsmplr(Naa,{hbx:co.xaa});

    }
    if(Aaa=="cy"){

        co.yaa=co.hohaah-co.haah;

        hbsmplr(Naa,{hby:co.yaa});

    }
    if(Aaa=="cxy"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hohaah-co.haah;

        // console.log(co.xaa,co.yaa);

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="ctp"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hoyaa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="tplt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmlt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hohaa-co.haa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmrt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hohaa-co.haa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="tprt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hoyaa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="lt"){

        co.xaa=co.hoxaa;

        hbsmplr(Naa,{hbx:co.xaa});

    }
    if(Aaa=="bm"){

        co.yaa=co.hohaa-co.haa;

        hbsmplr(Naa,{hby:co.yaa});

    }
    if(Aaa=="rt"){

        co.xaa=co.howaa-co.waa;
        hbsmplr(Naa,{hbx:co.xaa});

    }
    if(Aaa=="tp"){

        co.yaa=co.hoyaa;
        hbsmplr(Naa,{hby:co.yaa});

    }

};
function HrpAL2(Naa,Haa,Aaa,Oaa,ELFaa,HLFaa,ESFaa,HSFaa){

    var co={};

    if(typeof Oaa=="undefined"||Oaa==null){

        Oaa=false;

    }
    if(typeof ELFaa=="undefined"||ELFaa==null){

        ELFaa=hbsmplr;

    }
    if(typeof HLFaa=="undefined"||HLFaa==null){

        HLFaa=hbsmplxy;

    }
    if(typeof ESFaa=="undefined"||ESFaa==null){

        ESFaa=hbsmplwh;

    }
    if(typeof HSFaa=="undefined"||HSFaa==null){

        HSFaa=hbsmplwh;

    }

    if(Oaa==true){

        co.hoxaa=HLFaa(Haa).hbx;
        co.hoyaa=HLFaa(Haa).hby;

    }
    if(Oa==false){

        co.hoxaa=0;
        co.hoyaa=0;

    }

    co.waa=ESFaa(Naa).hbw;
    co.haa=ESFaa(Naa).hbh;
    co.howaa=HSFaa(Haa).hbw;
    co.hohaa=HSFaa(Haa).hbh;

    co.waah=co.waa/2;
    co.haah=co.haa/2;
    co.howaah=co.howaa/2;
    co.hohaa=co.hohaa/2;

    co.xaa=null;
    co.yaa=null;

    if(Aaa=="clt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cbm"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="crt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aa=="cx"){

        co.xaa=co.howaah-co.waah;

        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="cy"){

        co.yaa=co.hohaah-co.haah;

        ELFaa(Naa,{hby:co.yaa});

    }
    if(Aaa=="cxy"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="ctp"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa="tplt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmlt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmrt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aa=="tprt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="lt"){

        co.xaa=co.hoxaa;

        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="bm"){

        co.yaa=co.hohaa-co.haa;
        ELFaa(Naa,{hbx:co.yaa});

    }
    if(Aaa=="rt"){

        co.yaa=co.hohaa-co.haa;
        ELFaa(Naa,{hbx:co.yaa});

    }
    if(Aaa=="tp"){

        co.yaa=co.hoyaa;

        ELFaa(Naa,{hby:co.yaa});

    }


};
function HrpAL3(Naa,Haa,Aaa,Oaa,ELFaa,HLFaa,EWaa,EHaa,HWaa,HHaa){

    var co={};

    if(typeof Oaa=="undefined"||Oaa==null){

        Oaa=false;

    }
    if(typeof ELFaa=="undefined"||ELFaa==null){

        ELFaa=hbsmplr;

    }
    if(typeof HLFaa=="undefined"||HLFaa==null){

        HLFaa=hbsmplxy;

    }

    if(Oaa==true){

        co.hoxaa=HLFaa(Haa).hbx;
        co.hoyaa=HLFaa(Haa).hby;

    }
    if(Oa==false){

        co.hoxaa=0;
        co.hoyaa=0;

    }

    co.waa=EWaa;
    co.haa=EHaa;
    co.howaa=HWaa;
    co.hohaa=HHaa;

    co.waah=co.waa/2;
    co.haah=co.haa/2;
    co.howaah=co.howaa/2;
    co.hohaa=co.hohaa/2;

    co.xaa=null;
    co.yaa=null;

    if(Aaa=="clt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cbm"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="crt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aa=="cx"){

        co.xaa=co.howaah-co.waah;

        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="cy"){

        co.yaa=co.hohaah-co.haah;

        ELFaa(Naa,{hby:co.yaa});

    }
    if(Aaa=="cxy"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="ctp"){

        co.xaa=co.howaah-co.waah;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa="tplt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmlt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmrt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aa=="tprt"){

        co.xaa=co.howaa-co.waa;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="lt"){

        co.xaa=co.hoxaa;

        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="bm"){

        co.yaa=co.hohaa-co.haa;
        ELFaa(Naa,{hbx:co.yaa});

    }
    if(Aaa=="rt"){

        co.yaa=co.hohaa-co.haa;
        ELFaa(Naa,{hbx:co.yaa});

    }
    if(Aaa=="tp"){

        co.yaa=co.hoyaa;

        ELFaa(Naa,{hby:co.yaa});

    }


};

function HrpRA2(Naa,Haa,Aaa,Oaa,ELFaa,HLFaa,ESFaa,HSFaa){

    var co={};

    if(typeof Oaa=="undefined"||Oaa==null){

        Oaa=false;

    }
    if(typeof ELFaa=="undefined"||ELFaa==null){

        ELFaa=hbsmplr;

    }
    if(typeof HLFaa=="undefined"||HLFaa==null){

        HLFaa=hbsmplxy;

    }
    if(typeof ESFaa=="undefined"||ESFaa==null){

        ESFaa=hbsmplwh;

    }
    if(typeof HSFaa=="undefined"||HSFaa==null){

        HSFaa=hbsmplwh;

    }

    if(Oaa==true){

        co.hoxaa=HLFaa(Haa).hbx;
        co.hoyaa=HLFaa(Haa).hby;

    }
    if(Oaa==false){

        co.hoxaa=0;
        co.hoyaa=0;

    }

    co.waa=ESFaa(Naa).hbw;
    co.haa=ESFaa(Naa).hbh;

    co.howaa=HSFaa(Haa).hbw;
    co.hohaa=HSFaa(Haa).hbh;

    co.waah=co.waa/2;
    co.haa=co.haa/2;
    co.howaah=co.howaa/2;
    co.hohaah=co.hohaa/2

    co.xaa=null;
    co.yaa=null;

    if(Aaa="clt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa+co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cbm"){

        co.xaa=co.hoxaa+co.howaah-co.waah;
        co.yaa=co.hoyaa+co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="crt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        co.yaa=co.hoyaa+co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cx"){

        co.xaa=co.hoxaa+co.howaah-co.waah;

        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="cy"){

        co.yaa=co.hoyaa+co.hohaah-co.haah;

        ELFaa(Naa,{hbx:co.yaa});

    }
    if(Aaa=="ctp"){

        co.xaa=co.hoxaa+co.howaah-co.waah;
        co.yaa=co.hoyaa;
    
        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="tplt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmlt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa+co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmrt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        co.yaa=co.hoyaa+co.hohaa-co.haa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="tprt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        co.yaa=co.hoyaa;

        ELFaa(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="lt"){

        co.xaa=co.hoxaa;
    
        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="bm"){

        co.yaa=co.hoyaa+co.hohaa-co.haa;
        ELFaa(Naa,{hbx:co.yaa});

    }
    if(Aaa=="rt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        ELFaa(Naa,{hbx:co.xaa});

    }
    if(Aaa=="tp"){

        co.yaa=co.hoyaa;
        ELFaa(Naa,{hby:co.yaa});

    }

};
function HrpRA(Naa,Haa,Aaa,Oaa){

    var co={};

    if(typeof Oaa=="undefined"){

        Oaa=false;

    }
    if(Oaa==true){

        co.hoxaa=hbsmplxy(Haa,"ac").hbx;
        co.hoyaa=hbsmplxy(Haa,"ac").hby;

    }
    if(Oaa==false){

        co.hoxaa=0;
        co.hoyaa=0;
        
    }
    co.waa=hbsmplwh(Naa,"ac").hbw;
    co.haa=hbsmplwh(Naa,"ac").hbh;

    co.howaa=hbsmplwh(Haa,"ac").hbw;
    co.hohaa=hbsmplwh(Haa,"ac").hbh;

    co.waah=co.waa/2;
    co.haah=co.haa/2;

    co.xaa=null;
    co.yaa=null;

    if(Aaa=="clt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa+co.hohaah-co.haah;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cbm"){

        co.xaa=co.hoxaa+co.howaah-co.waah;
        co.yaa=co.hoyaa+co.hohaa-co.haa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="crt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        co.yaa=co.hoyaa+co.hohaah-co.haah;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cx"){

        co.xaa=co.hoxaa+co.howaah-co.waah;
        
        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="cy"){

        co.yaa=co.hoyaa+co.hohaah-co.haah;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="ctp"){

        co.xaa=co.hoxaa+co.howaah-co.waah;
        co.yaa=co.hoyaa;
        
        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="tplt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmlt"){

        co.xaa=co.hoxaa;
        co.yaa=co.hoyaa+co.hohaa-co.haa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="bmrt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        co.yaa=co.hoyaa+co.hohaa-co.haa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="tprt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;
        co.yaa=co.hoyaa;

        hbsmplr(Naa,{hbx:co.xaa,hby:co.yaa});

    }
    if(Aaa=="lt"){

        co.xaa=co.hoxaa;
        HrpSLx(Naa,co.xaa);

    }
    if(Aaa=="bm"){

        co.yaa=co.hoyaa+co.hohaa-co.haa;
        HrpSLy(Naa,co.yaa);

    }
    if(Aaa=="rt"){

        co.xaa=co.hoxaa+co.howaa-co.waa;

        HrpSLx(Naa,co.xaa);

    }
    if(Aaa=="tp"){

        co.yaa=co.hoyaa;
        HrpSLy(Naa,co.yaa);

    }


};

function Hrpw(Naa){

    return hbsmplwh(Naa,"ac").hbw;

};

function Hrph(Naa){

    return hbsmplwh(Naa,"ac").hbh;

};

function Hrpx(Naa){

    return hbsmplxy(Naa,"ac").hbx;

};
function Hrpy(Naa){

    return hbsmplxy(Naa,"ac").hby;

};

function Hrpxi(Naa){

    return hbsmplxy(Naa,"in").hbx;

};

function Hrpyi(Naa){

    return hbsmplxy(Naa,"in").hby;

};

function HrpTLM(Taa,Maa,_3pbAA){

    var co={};

    co.caa0=-1;
    co.haa0=null;

    co.naa0="";
    co.scaa0=Taa.length-Maa;

    co.chaa0=0;

    if(co.scaa0>=1){

        if(_3pbAA==true){

            Maa-=3;

        }
        while(co.caa0!=Taa,length-1){

            co.caa0+=1;
            co.haa0=Taa[co.caa0];

            co.chaa0+=1;

            if(co.chaa0<Maa+1){


                co.naa0+=co.haa0;

            }

        }
        if(_3pbAA==true){

            co.naa0+="...";

        }

    }
    if(Taa.length<=Maa){

        co.naa0=Taa;

    }
    return co.naa0;

};
function HrpPN(Faa,Saa,Aaa,Oaa){

    var co={};

    co.pnb=false;

    if(typeof Oaa=="undefined"){

        Oaa=true;
        
    }
    if(Oaa==true){

        co.vad0="ac";

    }
    if(Oaa==false){

        co.vad0="in";

    }
    if(Aaa=="x"){

        co.fxaa=hbsmplxy(Faa,co.vad0).hbx;
        co.fwaa=hbsmplxy(Faa,"ac").hbw;

        co.fx2aa=co.fxaa+co.fwaa;

        co.sxaa=hbsmplxy(Saa,co.vad0).hbx;
        co.swaa=hbsmplxy(Saa,"ac").hbw;

        co.sx2aa=co.sxaa+co.swaa;

        if(co.fx2aa>co.sxaa&&co.fxaa<co.sxaa){

            co.pnb=true;
            return co.pnb;

        }
        if(co.sx2aa>co.fxaa&&co.sxaa<co.fxaa){

            co.pnb=true;
            return co.pnb;

        }

    }
    if(Aaa=="y"){

        co.fyaa=hbsmplxy(Faa,co.vad0).hby;
        co.fhaa=hbsmplxy(Faa,"ac").hbh;

        co.fy2aa=co.fyaa+co.fhaa;

        co.syaa=hbsmplxy(Saa,co.vad0).hbh;
        co.shaa=hbsmplxy(Saa,"ac").hbh;

        co.sy2aa=co.syaa+co.shaa;

        if(co.fy2aa>co.syaa&&co.fyaa<co.syaa){

            co.pnb=true;
            return co.pnb;

        }
        if(co.sy2aa>co.fyaa&&co.syaa<co.fyaa){

            co.pnb=true;
            return co.pnb;

        }

    }
    return false;

};

function HrpCD(Faa,Saa,Aaa,Oaa){

    var co={};

    co.cdb=false;

    if(typeof Oaa=="undefined"){

        Oaa=true;
        
    }
    if(Oaa==true){

        co.vad0="ac";

    }
    if(Oaa==false){

        co.vad0="in";

    }
    if(Aaa=="x"){

        co.fxaa=hbsmplxy(Faa,co.vad0).hbx;
        co.fwaa=hbsmplxy(Faa,"ac").hbw;

        co.fx2aa=co.fxaa+co.fwaa;

        co.sxaa=hbsmplxy(Saa,co.vad0).hbx;
        co.swaa=hbsmplxy(Saa,"ac").hbw;

        co.sx2aa=co.sxaa+co.swaa;

        if(co.fx2aa>=co.sxaa&&co.fxaa<co.sxaa){

            co.cdb=true;
            return co.cdb;

        }
        if(co.sx2aa>=co.fxaa&&co.sxaa<co.fxaa){

            co.cdb=true;
            return co.cdb;

        }

    }
    if(Aaa=="y"){

        co.fyaa=hbsmplxy(Faa,co.vad0).hby;
        co.fhaa=hbsmplxy(Faa,"ac").hbh;

        co.fy2aa=co.fyaa+co.fhaa;

        co.syaa=hbsmplxy(Saa,co.vad0).hbh;
        co.shaa=hbsmplxy(Saa,"ac").hbh;

        co.sy2aa=co.syaa+co.shaa;

        if(co.fy2aa>=co.syaa&&co.fyaa<co.syaa){

            co.cdb=true;
            return co.cdb;

        }
        if(co.sy2aa>=co.fyaa&&co.syaa<co.fyaa){

            co.cdb=true;
            return co.cdb;

        }

    }
    return false;

};
function HrpSE(Naa,Evaa,Edaa,Faa){

    hbsmpls[Naa].hbsmple.hrped={

        hrpn:Naa,
        hrpe:hbsmpls[Naa].hbsmple,
        hrpo:Naa,

    };

    hbsmpls[Naa].hbsmple.hrped=Object.assign(hbsmpls[Naa].hbsmple.hrped,Edaa);
    hbsmpls[Naa].hbsmple.addEventListener(Evaa,Faa);

};
function HrpEE(Naa){

    if(typeof hbsmpls[Naa]!="undefined"){

        return true;
    
    }
    else{

        return false;

    }

};
function HrpSLx(Naa,Xaa){

    hbsmplr(Naa,{hbx:Xaa});
    
};
function HrpSLy(Naa,Yaa){

    hbsmplr(Naa,{hby:Yaa});
    
};
function HrpSw(Naa,Waa){

    hbsmplr(Naa,{hbw:Waa});
    
};
function HrpSh(Naa,Haa){

    hbsmplr(Naa,{hbh:Haa});
    
};
function Hrpwox(Naa){

    return hbsmplwh(Naa,"otmx").hbw;

};
function Hrphox(Naa){

    return hbsmplwh(Naa,"otmx").hbh;

};

function Hrpwi(Naa){

    return hbsmplwh(Naa,"in").hbw;

};
function Hrphi(Naa){

    return hbsmplwh(Naa,"in").hbh;

};

function Hrpwo(Naa){

    return hbsmplwh(Naa,"ot").hbw;

};
function Hrpho(Naa){

    return hbsmplwh(Naa,"ot").hbh;

};

function HrpMwh(Ayaa){

    var co={};

    co.aycb=-1;
    co.ayvb=null;
    co.wlcb=null;
    co.hlcb=null;

    while(co.aycb!=Ayaa.length-1){

        co.aycb+=1;
        co.ayvb=Ayaa[co.aycb];
        co.wlcb+=Hrpwox(co.ayvb);
        co.hlcb+=Hrphox(co.ayvb);

    }
    return {hrpmw:co.wlcb,hrpmh:co.hlcb};

};
function HrpMO(Ayaa,Axaa,Xaa,Yaa){

    var co={};

    co.ayc=-1;
    co.ayv=null;

    if(Axaa=="x"||Axaa=="xy"){

        co.xlc=Xaa;

    };
    if(Axaa=="y"||Axaa=="xy"){

        co.ylc=Yaa;

    }

    while(co.ayc!=Ayaa.length-1){

        co.ayc+=1;
        co.ayv=Ayaa[co.ayc];

        if(Axaa=="x"){

            HrpSLx(co.ayv,co.xlc);
            co.xlc+=Hrpwox(co.ayv);

        }
        if(Axaa=="y"){

            HrpSLy(co.ayv,co.ylc);
            co.ylc+=Hrphox(co.ayv);

        }
        if(Axaa=="xy"){

            HrpSLx(co.ayv,co.xlc);
            HrpSLy(co.ayv,co.ylc);
            co.xlc+=Hrpwox(co.ayv);
            co.ylc+=Hrphox(co.ayv);

        }
        
    }

};

function HrpSSE(Naa,Saa,Evaa,Edaa,Faa,Oaa){

    var co={};

    if(typeof Oaa=="undefined"){

        Oaa=true;

    }
    if(Edaa==null){

        Edaa={};

    }
    Edaa.hrpo=Naa;
    if(HrpEE(Saa)==false){

        hbsmpl(Saa,{hbx:0,hby:0,hbw:0,hbh:0,hbpos:"fixed",hbp:hbsmpls[Naa].hbsmplpn},{hbbc:"blue"});

    }
    HrpWP(Saa,Naa,Oaa);
    HrpSE(Saa,Evaa,Edaa,Faa);

};
function HrpGED(Evaa,Edaa){

    return Evaa.target.hrped[Edaa];

};
function HrpFT(Eaa,Taa,Paa){

    if(typeof Paa=="undefined"){

        Paa=100;

    }
    var co={};

    co.ew=Hrpw(Eaa);
    co.eh=Hrph(Eaa);

    if(typeof hbsmpls[`${Eaa}txt`]=="undefined"){

        hbsmpl(`${Eaa}txt`,{hbx:0,hby:0,hbpos:"absolute",hbp:Eaa,hbw:null,hbh:null});

    }
    co.of=10;
    hbsmplr(`${Eaa}txt`,{hbin:Taa,fontSize:`${co.of}px`});
    co.tw=Hrpw(`${Eaa}txt`);
    co.nf=(co.of*(Paa*co.ew/100))/co.tw;
    hbsmplr(`${Eaa}txt`,{fontSize:`${co.nf}px`,whiteSpaces:"nowrap"});
    co.th=Hrph(`${Eaa}txt`);

};
var HrpES={};

function HrpEL(Naa,Eaa,Faa,...Paa){

    HrpES[`${Naa}x${Eaa}E`]=function(EHaa){

        arguments.callee.HrpEF(EHaa,...arguments.callee.HrpEP);

    };
    HrpES[`${Naa}x${Eaa}E`].HrpEV=Eaa;
    HrpES[`${Naa}x${Eaa}E`].HrpEN=Naa;
    HrpES[`${Naa}x${Eaa}E`].HrpEF=Faa;
    HrpES[`${Naa}x${Eaa}E`].HrpEP=Paa;

    hbsmpls[Naa].hbsmple.addEventListener(Eaa,HrpES[`${Naa}x${Eaa}E`]);

};
function HrpDEL(Naa,Eaa){

    hbsmpls[Naa].hbsmple.removeEventListener(Eaa,HrpES[`${Naa}x${Eaa}E`]);
    delete HrpES[`${Naa}x${Eaa}E`];

};

// ==================================================

var HrpMES={};

function HrpMEL(Naa,Eaa,Caa,Faa,...Paa){

    if(typeof HrpMES[`${Naa}x${Eaa}E`]=="undefined"){

        HrpMES[`${Naa}x${Eaa}E`]=[];

    }
    HrpMES[`${Naa}x${Eaa}E`][Caa]=function(EHaa){

        arguments.callee.HrpEF(EHaa,...arguments.callee.HrpEP);

    };
    HrpMES[`${Naa}x${Eaa}E`][Caa].HrpEV=Eaa;
    HrpMES[`${Naa}x${Eaa}E`][Caa].HrpEN=Naa;
    HrpMES[`${Naa}x${Eaa}E`][Caa].HrpEF=Faa;
    HrpMES[`${Naa}x${Eaa}E`][Caa].HrpEP=Paa;

    hbsmpls[Naa].hbsmple.addEventListener(Eaa,HrpMES[`${Naa}x${Eaa}E`][Caa]);

};
function HrpDMEL(Naa,Eaa,Caa){

    hbsmpls[Naa].hbsmple.removeEventListener(Eaa,HrpMES[`${Naa}x${Eaa}E`][Caa]);
    delete HrpMES[`${Naa}x${Eaa}E`][Caa];

};

// ======================================================================

var HrpTES={};

function HrpTEL(Naa,Eaa,Taa,Faa,...Paa){

    if(typeof HrpTES[`${Naa}x${Eaa}E`]=="undefined"){

        HrpTES[`${Naa}x${Eaa}E`]={};

    }
    HrpTES[`${Naa}x${Eaa}E`][Taa]=function(EHaa){

        arguments.callee.HrpEF(EHaa,...arguments.callee.HrpEP);

    };
    HrpTES[`${Naa}x${Eaa}E`][Taa].HrpEV=Eaa;
    HrpTES[`${Naa}x${Eaa}E`][Taa].HrpEN=Naa;
    HrpTES[`${Naa}x${Eaa}E`][Taa].HrpEF=Faa;
    HrpTES[`${Naa}x${Eaa}E`][Taa].HrpEP=Paa;

    hbsmpls[Naa].hbsmple.addEventListener(Eaa,HrpTES[`${Naa}x${Eaa}E`][Taa]);

};
function HrpDTEL(Naa,Eaa,Taa){

    hbsmpls[Naa].hbsmple.removeEventListener(Eaa,HrpTES[`${Naa}x${Eaa}E`][Taa]);
    delete HrpTES[`${Naa}x${Eaa}E`][Taa];

};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var HrpMLES={};

function HrpMLEL(Naa,Eaa,Caa,Faa,...Paa){

    if(typeof HrpMLES[`${Naa}x${Eaa}E`]=="undefined"){

        HrpMLES[`${Naa}x${Eaa}E`]=[];

    }
    HrpMLES[`${Naa}x${Eaa}E`][Caa]=function(EHaa){

        arguments.callee.HrpEF(EHaa,...arguments.callee.HrpEP);

    };
    HrpMLES[`${Naa}x${Eaa}E`][Caa].HrpEV=Eaa;
    HrpMLES[`${Naa}x${Eaa}E`][Caa].HrpEN=Naa;
    HrpMLES[`${Naa}x${Eaa}E`][Caa].HrpEF=Faa;
    HrpMLES[`${Naa}x${Eaa}E`][Caa].HrpEP=Paa;

    hblines[Naa].hbshpr.addEventListener(Eaa,HrpMLES[`${Naa}x${Eaa}E`][Caa]);

};
function HrpDMLEL(Naa,Eaa,Caa){

    hblines[Naa].hbshpr.removeEventListener(Eaa,HrpMLES[`${Naa}x${Eaa}E`][Caa]);
    delete HrpMLES[`${Naa}x${Eaa}E`][Caa];

};

// ======================================================================

var HrpTLES={};

function HrpTLEL(Naa,Eaa,Taa,Faa,...Paa){

    if(typeof HrpTLES[`${Naa}x${Eaa}E`]=="undefined"){

        HrpTLES[`${Naa}x${Eaa}E`]={};

    }
    HrpTLES[`${Naa}x${Eaa}E`][Taa]=function(EHaa){

        arguments.callee.HrpEF(EHaa,...arguments.callee.HrpEP);

    };
    HrpTLES[`${Naa}x${Eaa}E`][Taa].HrpEV=Eaa;
    HrpTLES[`${Naa}x${Eaa}E`][Taa].HrpEN=Naa;
    HrpTLES[`${Naa}x${Eaa}E`][Taa].HrpEF=Faa;
    HrpTLES[`${Naa}x${Eaa}E`][Taa].HrpEP=Paa;

    hblines[Naa].hbshpr.addEventListener(Eaa,HrpTLES[`${Naa}x${Eaa}E`][Taa]);

};
function HrpDTLEL(Naa,Eaa,Taa){

    hblines[Naa].hbshpr.removeEventListener(Eaa,HrpTLES[`${Naa}x${Eaa}E`][Taa]);
    delete HrpTLES[`${Naa}x${Eaa}E`][Taa];

};

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

var HrpLES={};

function HrpLEL(Naa,Eaa,Faa,...Paa){

    HrpLES[`${Naa}x${Eaa}E`]=function(EHaa){

        arguments.callee.HrpEF(EHaa,...arguments.callee.HrpEP);

    };
    HrpLES[`${Naa}x${Eaa}E`].HrpEV=Eaa;
    HrpLES[`${Naa}x${Eaa}E`].HrpEN=Naa;
    HrpLES[`${Naa}x${Eaa}E`].HrpEF=Faa;
    HrpLES[`${Naa}x${Eaa}E`].HrpEP=Paa;

    hblines[Naa].hbshpr.addEventListener(Eaa,HrpLES[`${Naa}x${Eaa}E`]);

};
function HrpDLEL(Naa,Eaa){

    hblines[Naa].hbshpr.removeEventListener(Eaa,HrpLES[`${Naa}x${Eaa}E`]);
    delete HrpLES[`${Naa}x${Eaa}E`];

};

function HrpHD(Naa,BLaa,Faa,...Paa){

    if(typeof BLaa=="undefined"){

        BLaa=true;

    }
    if(BLaa==true){

        if(typeof Paa!="undefined"){

            HrpEL(Naa,"mousedown",()=>{

                hbsmpldg(Naa,true,"xy",Faa,Paa);
                    
            });

        }
        if(typeof Paa=="undefined"){

            HrpEL(Naa,"mousedown",()=>{

                hbsmpldg(Naa,true,"xy",Faa,Paa);

            });

        }
        HrpEL(Naa,"mouseup",()=>{

            hbsmpldg(Naa,false);

        });

    }
    if(BLaa==false){

        HrpDEL(Naa,"mousedown");
        HrpDEL(Naa,"mouseup");

    }

};

function HrpHDxy(Naa,BLaa,Aaa,Faa,...Paa){

    if(typeof BLaa=="undefined"){

        BLaa=true;

    }
    if(BLaa==true){

        if(typeof Paa!="undefined"){

            HrpEL(Naa,"mousedown",()=>{

                hbsmpldg(Naa,true,Aaa,Faa,Paa);
                    
            });

        }
        if(typeof Paa=="undefined"){

            HrpEL(Naa,"mousedown",()=>{

                hbsmpldg(Naa,true,Aaa,Faa,Paa);

            });

        }
        HrpEL(Naa,"mouseup",()=>{

            hbsmpldg(Naa,false);

        });

    }
    if(BLaa==false){

        HrpDEL(Naa,"mousedown");
        HrpDEL(Naa,"mouseup");

    }

};

var HrpMDs={};

function HrpMD(Naa,Paa){

    HrpTEL(Paa,"mouseover","HrpMD1",(Eaa,Naa)=>{

        HrpMDs[Naa]=[Eaa.clientX,Eaa.clientY];

    },Naa);
    HrpTEL(Paa,"mousemove","HrpMD1",(Eaa,Naa)=>{

        HrpMDs[Naa]=[Eaa.clientX,Eaa.clientY];

    },Naa);

};

function HrpLPA(Naa,Paa){

    var co={};

    co.ky=null;

    for(co.ky in Paa){

        hblineept(Naa,co.ky,Paa[co.ky]);

    }

};

function HrpRW(Saa,Waa){

    return Saa.replaceAll(Waa);

};
function HrpRWO(Saa,Waa){

    return Saa.replace(Waa);

};
function HrpCOP(Naa,Xaa,Yaa){

    hbsmplr(Naa,{hbx:Xaa-(Hrpw(Naa)/2),hby:Yaa-(Hrph(Naa)/2)});

};

function HrpGB(Naa,Nab,BLaa,Aaa,Faa,...Paa){

    if(BLaa==true){

        HrpTEL(Naa,"mousedown","HrpGB0",(Eaa,Naa,Nab,Aaa,...Paa)=>{

            var co={};

            co.mx=HrpMDs[Nab][0];
            co.my=HrpMDs[Nab][1];

            co.x=Hrpx(Naa);
            co.y=Hrpy(Naa);

            co.dfx=co.mx-co.x;
            co.dfy=co.my-co.y;

            hbsmpldg(Naa,true,Aaa,(Naa,Nab,Daa,Dab,Faa,...Paa)=>{

                hbsmplr(Naa,{hbx:HrpMDs[Nab][0]-Daa,hby:HrpMDs[Nab][1]-Dab});
                Faa(...Paa);

            },Naa,Nab,co.dfx,co.dfy,Faa,...Paa);

        },Naa,Nab,Aaa,...Paa);

        HrpTEL(Naa,"mouseup","HrpGB1",(Eaa,Naa)=>{

            hbsmpldg(Naa,false);

        },Naa);

    }
    if(BLaa==false){

        HrpDTEL(Naa,"mousedown","HrpGB0");
        HrpDTEL(Naa,"mouseup","HrpGB1");

    }

};

var HrpTGLs={};

function HrpTGL(Naa,Iaa,Aaa){

    if(Iaa==true){

        HrpTGLs[Naa]={};
        HrpTGLs[Naa].HrpC=0;
        HrpTGLs[Naa].HrpA=Aaa;

    }
    if(Iaa==false){

        var co={};
        
        co.val=HrpTGLs[Naa].HrpA[HrpTGLs[Naa].HrpC];
        if(HrpTGLs[Naa].HrpC!=HrpTGLs[Naa].HrpA.length){

            HrpTGLs[Naa].HrpC+=1;

        }
        if(HrpTGLs[Naa].HrpC==HrpTGLs[Naa].HrpA.length){

            HrpTGLs[Naa].HrpC=0;

        }
        return co.val;

    }

};

function HrpAFT(Naa,Taa,Paa){

    HrpFT(Naa,Taa,Paa);
    HrpAL(`${Naa}txt`,Naa,"cxy",false);

};

function HrpSSP(OWaa,OHaa,Saa,Taa){

    if(Taa=="w"){

        return (OHaa*Saa)/OWaa;
    
    }
    if(Taa=="h"){

        return (OWaa*Saa)/OHaa;

    }

};

function Hrplx(Naa){

    return hblines[Naa].hbshpxl;

};
function Hrply(Naa){

    return hblines[Naa].hbshpyl;

};


function Hrplw(Naa){

    return hblines[Naa].hbshpw;

};
function Hrplh(Naa){

    return hblines[Naa].hbshph;

};

function Hrplx2(Naa){

    return hblines[Naa].hbshpx2l;

};
function Hrply2(Naa){

    return hblines[Naa].hbshpy2l;

};

function HrpHBlxy(Naa){

    return {hbx:Hrplx(Naa),hby:Hrply(Naa)};

};
function HrpHBlwh(Naa){

    return {hbw:Hrplw(Naa),hbh:Hrplh(Naa)};

};
function HrpHBlxy2(Naa){

    return {hbx:Hrplx(Naa),hby:Hrply(Naa),hbx2:Hrplx2(Naa),hby2:Hrply2(Naa)};

};

function Hrpx2(Naa){

    return Hrpx(Naa)+Hrpw(Naa);

};
function Hrpy2(Naa){

    return Hrpy(Naa)+Hrph(Naa);

};

function HrpHBxy(Naa){

    return {hbx:Hrpx(Naa),hby:Hrpy(Naa)};

};

function HrpHBwh(Naa){

    return {hbw:Hrpw(Naa),hbh:Hrph(Naa)};

};

function HrpHBxy2(Naa){

    return {hbx:Hrpx(Naa),hby:Hrpy(Naa),hbx2:Hrpx2(Naa),hby2:Hrpy2(Naa)};

};

function HrpALoS(Laa,Saa,Aaa,Oaa){

    HrpRA2(Laa,Saa,Aaa,Oaa,hblinel,HrpHBxy,HrpHBlwh,HrpHBwh);

};
function HrpASoL(Saa,Laa,Aaa,Oaa){

    HrpRA2(Saa,Laa,Aaa,Oaa,hbsmplr,HrpHBlxy,HrpHBwh,HrpHBlwh);

};
function HrpARLoS(Laa,Saa,Aaa,Oaa){

    HrpRA2(Laa,Saa,Aaa,Oaa,hblinel,HrpHBxy,HrpHBlwh,HrpHBwh);

};
function HrpARSoL(Saa,Laa,Aaa,Oaa){

    HrpRA2(Saa,Laa,Aaa,Oaa,hbsmplr,HrpHBlxy,HrpHBwh,HrpHBlwh);

};

function HrpTPOF(Vaa){

    if(typeof Vaa!="object"&&typeof Vaa!="number"){

        return typeof Vaa;

    }
    if(typeof Vaa=="number"){

        if(Vaa!="NaN"){

            return typeof Vaa;

        }
        if(Vaa=="NaN"){

            return "NaN";
            
        }

    }
    if(typeof Vaa=="object"){

        if(JSON.stringify(Vaa)==JSON.stringify(Object.values(Vaa))){

            return "array";

        }
        else{

            return "object";

        }

    }

};
var HrpAl=HrpAL;

// ---------------------إن شاء اللَّه تعالى-----------------------------
