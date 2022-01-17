var ln=Object.defineProperty;var Mt=Object.getOwnPropertySymbols;var dn=Object.prototype.hasOwnProperty,hn=Object.prototype.propertyIsEnumerable;var Ht=(e,t,n)=>t in e?ln(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,dt=(e,t)=>{for(var n in t||(t={}))dn.call(t,n)&&Ht(e,n,t[n]);if(Mt)for(var n of Mt(t))hn.call(t,n)&&Ht(e,n,t[n]);return e};import{at as ht,au as gn,S as q,i as F,s as Z,e as J,c as K,a as k,d as R,b as X,M as _n,g as x,av as Yn,V as ge,W as _e,X as Ye,q as H,o as Q,l as Bt,n as Xn,p as Rn,R as b,aw as z,r as zn,U as Xe,D as _,K as Re,F as ze,Y as ae,Z as se,G as Wt,J as U,k as Ot,m as Vt,f as T,H as I,ax as M,Q as qt,ay as we}from"./vendor-f0516da2.js";/* empty css                                                 */function wn(e){return e===0?!0:e}function be(e){return wn(e)?Array.isArray(e)?t=>e.map(n=>typeof n!="function"?t[n]:n(t)):typeof e!="function"?t=>t[e]:e:null}function bn(e){const t={};for(const n of e){if(Object(n)!==n)throw new TypeError("iterable for fromEntries should yield objects");const{"0":r,"1":o}=n;Object.defineProperty(t,r,{configurable:!0,enumerable:!0,writable:!0,value:o})}return t}function Ft(e,t={}){return bn(Object.entries(e).filter(([n,r])=>r!==void 0&&t[n]===void 0))}function vn(e,t){if(!Array.isArray(e))throw new TypeError("The first argument of calcExtents() must be an array. If you got this error using the <LayerCake> component, consider passing a flat array to the `flatData` prop. More info: https://layercake.graphics/guide/#flatdata");if(Array.isArray(t)||t===void 0||t===null)throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");const n={},r=Object.keys(t),o=r.length;let y,m,s,a,l,d,f,c;const h=e.length;for(y=0;y<o;y+=1){for(a=r[y],f=t[a],l=null,d=null,m=0;m<h;m+=1)if(c=f(e[m]),Array.isArray(c)){const D=c.length;for(s=0;s<D;s+=1)c[s]!==void 0&&c[s]!==null&&Number.isNaN(c[s])===!1&&((l===null||c[s]<l)&&(l=c[s]),(d===null||c[s]>d)&&(d=c[s]))}else c!=null&&Number.isNaN(c)===!1&&((l===null||c<l)&&(l=c),(d===null||c>d)&&(d=c));n[a]=[l,d]}return n}function Zt(e=[],t){return Array.isArray(t)===!0?t.map((n,r)=>n===null?e[r]:n):e}function ve(e){return function([n,r]){return n?Zt(n[e],r):r}}var fe={x:ht,y:ht,z:ht,r:gn};function Dn(e){return e.constant?"symlog":e.base?"log":e.exponent?e.exponent()===.5?"sqrt":"pow":"other"}function Jt(e){return e}function Sn(e){return t=>Math.log(e*t)}function xn(e){return t=>e*Math.exp(t)}function En(e){return t=>Math.sign(t)*Math.log1p(Math.abs(t/e))}function kn(e){return t=>Math.sign(t)*Math.expm1(Math.abs(t))*e}function De(e){return function(n){return n<0?-Math.pow(-n,e):Math.pow(n,e)}}function Nn(e){const t=Dn(e);if(t==="log"){const n=Math.sign(e.domain()[0]);return{lift:Sn(n),ground:xn(n),scaleType:t}}if(t==="pow"){const n=1;return{lift:De(n),ground:De(1/n),scaleType:t}}if(t==="sqrt"){const n=.5;return{lift:De(n),ground:De(1/n),scaleType:t}}if(t==="symlog"){const n=1;return{lift:En(n),ground:kn(n),scaleType:t}}return{lift:Jt,ground:Jt,scaleType:t}}function Ln(e,t){if(typeof e.range!="function")throw new Error("Scale method `range` must be a function");if(typeof e.domain!="function")throw new Error("Scale method `domain` must be a function");if(!Array.isArray(t))return e.domain();e.domain().length!==2&&console.warn("[LayerCake] The scale is expected to have a domain of length 2 to use padding. Are you sure you want to use padding? Your scale's domain is:",e.domain()),e.range().length!==2&&console.warn("[LayerCake] The scale is expected to have a range of length 2 to use padding. Are you sure you want to use padding? Your scale's range is:",e.range());const{lift:n,ground:r}=Nn(e),o=e.domain()[0],y=Object.prototype.toString.call(o)==="[object Date]",[m,s]=e.domain().map(h=>n(y?h.getTime():h)),[a,l]=e.range(),d=t[0]||0,f=t[1]||0,c=(s-m)/(Math.abs(l-a)-d-f);return[m-d*c,f*c+s].map(h=>r(y?new Date(h):h))}function Pn(e,t,n,r,o){let y,m;return o===!0?(y=0,m=100):(y=e==="r"?1:0,m=e==="y"?n:e==="r"?25:t),r===!0?[m,y]:[y,m]}function Cn(e,t,n,r,o,y){return o?typeof o=="function"?o({width:t,height:n}):o:Pn(e,t,n,r,y)}function Se(e){return function([n,r,o,y,m,s,a,l,d,f]){if(r===null)return null;const c=Cn(e,a,l,s,d,f),h=n===fe[e]?n():n.copy();return h.domain(Zt(r[e],o)).range(c),y&&h.domain(Ln(h,y)),m===!0&&(typeof h.nice=="function"?h.nice():console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)),h}}function xe([e,t]){return n=>{const r=e(n);return Array.isArray(r)?r.map(o=>t(o)):t(r)}}function Ee([e]){if(typeof e=="function"){if(typeof e.range=="function")return e.range();console.error("[LayerCake] Your scale doesn't have a `.range` method?")}return null}var ke={x:!1,y:!0,z:!1,r:!1};const jn=e=>({element:e[0]&4,width:e[0]&64,height:e[0]&128,aspectRatio:e[0]&256,containerWidth:e[0]&512,containerHeight:e[0]&1024}),Kt=e=>({element:e[2],width:e[6],height:e[7],aspectRatio:e[8],containerWidth:e[9],containerHeight:e[10]});function Qt(e){let t,n,r,o;const y=e[54].default,m=Xe(y,e,e[53],Kt);return{c(){t=J("div"),m&&m.c(),this.h()},l(s){t=K(s,"DIV",{class:!0,style:!0});var a=k(t);m&&m.l(a),a.forEach(R),this.h()},h(){X(t,"class","layercake-container svelte-vhzpsp"),X(t,"style",n="position:"+e[5]+"; "+(e[5]==="absolute"?"top:0;right:0;bottom:0;left:0;":"")+" "+(e[4]===!1?"pointer-events:none;":"")+""),_n(()=>e[56].call(t))},m(s,a){x(s,t,a),m&&m.m(t,null),e[55](t),r=Yn(t,e[56].bind(t)),o=!0},p(s,a){m&&m.p&&(!o||a[0]&1988|a[1]&4194304)&&ge(m,y,s,s[53],o?Ye(y,s[53],a,jn):_e(s[53]),Kt),(!o||a[0]&48&&n!==(n="position:"+s[5]+"; "+(s[5]==="absolute"?"top:0;right:0;bottom:0;left:0;":"")+" "+(s[4]===!1?"pointer-events:none;":"")+""))&&X(t,"style",n)},i(s){o||(H(m,s),o=!0)},o(s){Q(m,s),o=!1},d(s){s&&R(t),m&&m.d(s),e[55](null),r()}}}function Gn(e){let t,n,r=(e[3]===!0||typeof window!="undefined")&&Qt(e);return{c(){r&&r.c(),t=Bt()},l(o){r&&r.l(o),t=Bt()},m(o,y){r&&r.m(o,y),x(o,t,y),n=!0},p(o,y){o[3]===!0||typeof window!="undefined"?r?(r.p(o,y),y[0]&8&&H(r,1)):(r=Qt(o),r.c(),H(r,1),r.m(t.parentNode,t)):r&&(Xn(),Q(r,1,1,()=>{r=null}),Rn())},i(o){n||(H(r),n=!0)},o(o){Q(r),n=!1},d(o){r&&r.d(o),o&&R(t)}}}function An(e,t,n){let r,o,y,m,s,a,{$$slots:l={},$$scope:d}=t,{ssr:f=!1}=t,{pointerEvents:c=!0}=t,{position:h="relative"}=t,{percentRange:D=!1}=t,{width:E=void 0}=t,{height:g=void 0}=t,{containerWidth:Y=E||100}=t,{containerHeight:u=g||100}=t,{element:B=void 0}=t,{x:N=void 0}=t,{y:L=void 0}=t,{z:v=void 0}=t,{r:p=void 0}=t,{data:ue=[]}=t,{xDomain:$=void 0}=t,{yDomain:ee=void 0}=t,{zDomain:te=void 0}=t,{rDomain:ne=void 0}=t,{xNice:Ne=!1}=t,{yNice:Le=!1}=t,{zNice:Pe=!1}=t,{rNice:Ce=!1}=t,{xReverse:je=ke.x}=t,{yReverse:Ge=ke.y}=t,{zReverse:Ae=ke.z}=t,{rReverse:Te=ke.r}=t,{xPadding:Ie=void 0}=t,{yPadding:Me=void 0}=t,{zPadding:He=void 0}=t,{rPadding:Be=void 0}=t,{xScale:We=fe.x}=t,{yScale:Oe=fe.y}=t,{zScale:Ve=fe.z}=t,{rScale:qe=fe.r}=t,{xRange:ie=void 0}=t,{yRange:re=void 0}=t,{zRange:me=void 0}=t,{rRange:ye=void 0}=t,{padding:Fe={}}=t,{extents:Ze={}}=t,{flatData:Je=void 0}=t,{custom:Ke={}}=t;const S={},W=_(),O=_();b(e,O,i=>n(9,s=i));const V=_();b(e,V,i=>n(10,a=i));const ce=_(),le=_(),de=_(),he=_(),gt=_(),_t=_(),Yt=_(),Xt=_(),Rt=_(),zt=_(),Qe=_(),Ue=_(),pe=_(),$e=_(),et=_(),tt=_(),nt=_(),it=_(),rt=_(),mt=_(),yt=_(),ot=_(),wt=_(),bt=_(),vt=_(),Dt=_(),St=_(),xt=_(),Et=_(),kt=_(),Nt=_(),at=_(),Lt=_(),tn=_(S),Pt=z([ce,le,de,he],([i,j,P,w])=>{const oe={};return i&&(oe.x=i),j&&(oe.y=j),P&&(oe.z=P),w&&(oe.r=w),oe}),Ct=z([Nt,O,V],([i])=>Object.assign({top:0,right:0,bottom:0,left:0},i)),jt=z([O,V,Ct],([i,j,P])=>{const w={};return w.top=P.top,w.right=i-P.right,w.bottom=j-P.bottom,w.left=P.left,w.width=w.right-w.left,w.height=w.bottom-w.top,w.width<=0&&console.error("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"),w.height<=0&&console.error("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"),w}),G=z([jt],([i])=>i.width);b(e,G,i=>n(6,o=i));const A=z([jt],([i])=>i.height);b(e,A,i=>n(7,y=i));const C=z([at,Pt,Lt],([i,j,P])=>{const w=Ft(j,P);return Object.keys(w).length>0?dt(dt({},vn(i,w)),P):{}}),Gt=z([C,Yt],ve("x")),At=z([C,Xt],ve("y")),Tt=z([C,Rt],ve("z")),It=z([C,zt],ve("r")),st=z([wt,C,Gt,rt,Qe,et,G,A,St,W],Se("x")),nn=z([ce,st],xe),ft=z([bt,C,At,mt,Ue,tt,G,A,xt,W],Se("y")),rn=z([le,ft],xe),ut=z([vt,C,Tt,yt,pe,nt,G,A,Et,W],Se("z")),mn=z([de,ut],xe),ct=z([Dt,C,It,ot,$e,it,G,A,kt,W],Se("r")),yn=z([he,ct],xe),on=z([st],Ee),an=z([ft],Ee),sn=z([ut],Ee),fn=z([ct],Ee),lt=z([G,A],([i,j])=>i/j);b(e,lt,i=>n(8,m=i));function un(i){Re[i?"unshift":"push"](()=>{B=i,n(2,B)})}function cn(){Y=this.clientWidth,u=this.clientHeight,n(0,Y),n(1,u)}return e.$$set=i=>{"ssr"in i&&n(3,f=i.ssr),"pointerEvents"in i&&n(4,c=i.pointerEvents),"position"in i&&n(5,h=i.position),"percentRange"in i&&n(16,D=i.percentRange),"width"in i&&n(17,E=i.width),"height"in i&&n(18,g=i.height),"containerWidth"in i&&n(0,Y=i.containerWidth),"containerHeight"in i&&n(1,u=i.containerHeight),"element"in i&&n(2,B=i.element),"x"in i&&n(19,N=i.x),"y"in i&&n(20,L=i.y),"z"in i&&n(21,v=i.z),"r"in i&&n(22,p=i.r),"data"in i&&n(23,ue=i.data),"xDomain"in i&&n(24,$=i.xDomain),"yDomain"in i&&n(25,ee=i.yDomain),"zDomain"in i&&n(26,te=i.zDomain),"rDomain"in i&&n(27,ne=i.rDomain),"xNice"in i&&n(28,Ne=i.xNice),"yNice"in i&&n(29,Le=i.yNice),"zNice"in i&&n(30,Pe=i.zNice),"rNice"in i&&n(31,Ce=i.rNice),"xReverse"in i&&n(32,je=i.xReverse),"yReverse"in i&&n(33,Ge=i.yReverse),"zReverse"in i&&n(34,Ae=i.zReverse),"rReverse"in i&&n(35,Te=i.rReverse),"xPadding"in i&&n(36,Ie=i.xPadding),"yPadding"in i&&n(37,Me=i.yPadding),"zPadding"in i&&n(38,He=i.zPadding),"rPadding"in i&&n(39,Be=i.rPadding),"xScale"in i&&n(40,We=i.xScale),"yScale"in i&&n(41,Oe=i.yScale),"zScale"in i&&n(42,Ve=i.zScale),"rScale"in i&&n(43,qe=i.rScale),"xRange"in i&&n(44,ie=i.xRange),"yRange"in i&&n(45,re=i.yRange),"zRange"in i&&n(46,me=i.zRange),"rRange"in i&&n(47,ye=i.rRange),"padding"in i&&n(48,Fe=i.padding),"extents"in i&&n(49,Ze=i.extents),"flatData"in i&&n(50,Je=i.flatData),"custom"in i&&n(51,Ke=i.custom),"$$scope"in i&&n(53,d=i.$$scope)},e.$$.update=()=>{e.$$.dirty[0]&524288&&N&&(S.x=N),e.$$.dirty[0]&1048576&&L&&(S.y=L),e.$$.dirty[0]&2097152&&v&&(S.z=v),e.$$.dirty[0]&4194304&&p&&(S.r=p),e.$$.dirty[0]&16777216&&$&&(S.xDomain=$),e.$$.dirty[0]&33554432&&ee&&(S.yDomain=ee),e.$$.dirty[0]&67108864&&te&&(S.zDomain=te),e.$$.dirty[0]&134217728&&ne&&(S.rDomain=ne),e.$$.dirty[1]&8192&&ie&&(S.xRange=ie),e.$$.dirty[1]&16384&&re&&(S.yRange=re),e.$$.dirty[1]&32768&&me&&(S.zRange=me),e.$$.dirty[1]&65536&&ye&&(S.rRange=ye),e.$$.dirty[0]&65536&&W.set(D),e.$$.dirty[0]&1&&O.set(Y),e.$$.dirty[0]&2&&V.set(u),e.$$.dirty[0]&524288&&ce.set(be(N)),e.$$.dirty[0]&1048576&&le.set(be(L)),e.$$.dirty[0]&2097152&&de.set(be(v)),e.$$.dirty[0]&4194304&&he.set(be(p)),e.$$.dirty[0]&16777216&&Yt.set($),e.$$.dirty[0]&33554432&&Xt.set(ee),e.$$.dirty[0]&67108864&&Rt.set(te),e.$$.dirty[0]&134217728&&zt.set(ne),e.$$.dirty[1]&1048576&&gt.set(Ke),e.$$.dirty[0]&8388608&&_t.set(ue),e.$$.dirty[0]&268435456&&Qe.set(Ne),e.$$.dirty[0]&536870912&&Ue.set(Le),e.$$.dirty[0]&1073741824&&pe.set(Pe),e.$$.dirty[1]&1&&$e.set(Ce),e.$$.dirty[1]&2&&et.set(je),e.$$.dirty[1]&4&&tt.set(Ge),e.$$.dirty[1]&8&&nt.set(Ae),e.$$.dirty[1]&16&&it.set(Te),e.$$.dirty[1]&32&&rt.set(Ie),e.$$.dirty[1]&64&&mt.set(Me),e.$$.dirty[1]&128&&yt.set(He),e.$$.dirty[1]&256&&ot.set(Be),e.$$.dirty[1]&512&&wt.set(We),e.$$.dirty[1]&1024&&bt.set(Oe),e.$$.dirty[1]&2048&&vt.set(Ve),e.$$.dirty[1]&4096&&Dt.set(qe),e.$$.dirty[1]&8192&&St.set(ie),e.$$.dirty[1]&16384&&xt.set(re),e.$$.dirty[1]&32768&&Et.set(me),e.$$.dirty[1]&65536&&kt.set(ye),e.$$.dirty[1]&131072&&Nt.set(Fe),e.$$.dirty[1]&262144&&Lt.set(Ft(Ze)),e.$$.dirty[0]&8388608|e.$$.dirty[1]&524288&&at.set(Je||ue),e.$$.dirty[1]&2097152&&zn("LayerCake",r)},n(52,r={activeGetters:Pt,width:G,height:A,percentRange:W,aspectRatio:lt,containerWidth:O,containerHeight:V,x:ce,y:le,z:de,r:he,custom:gt,data:_t,xNice:Qe,yNice:Ue,zNice:pe,rNice:$e,xReverse:et,yReverse:tt,zReverse:nt,rReverse:it,xPadding:rt,yPadding:mt,zPadding:yt,rPadding:ot,padding:Ct,flatData:at,extents:C,xDomain:Gt,yDomain:At,zDomain:Tt,rDomain:It,xRange:on,yRange:an,zRange:sn,rRange:fn,config:tn,xScale:st,xGet:nn,yScale:ft,yGet:rn,zScale:ut,zGet:mn,rScale:ct,rGet:yn}),[Y,u,B,f,c,h,o,y,m,s,a,O,V,G,A,lt,D,E,g,N,L,v,p,ue,$,ee,te,ne,Ne,Le,Pe,Ce,je,Ge,Ae,Te,Ie,Me,He,Be,We,Oe,Ve,qe,ie,re,me,ye,Fe,Ze,Je,Ke,r,d,l,un,cn]}class $n extends q{constructor(t){super();F(this,t,An,Gn,Z,{ssr:3,pointerEvents:4,position:5,percentRange:16,width:17,height:18,containerWidth:0,containerHeight:1,element:2,x:19,y:20,z:21,r:22,data:23,xDomain:24,yDomain:25,zDomain:26,rDomain:27,xNice:28,yNice:29,zNice:30,rNice:31,xReverse:32,yReverse:33,zReverse:34,rReverse:35,xPadding:36,yPadding:37,zPadding:38,rPadding:39,xScale:40,yScale:41,zScale:42,rScale:43,xRange:44,yRange:45,zRange:46,rRange:47,padding:48,extents:49,flatData:50,custom:51},null,[-1,-1,-1,-1])}}const Tn=e=>({element:e&1}),Ut=e=>({element:e[0]});function In(e){let t,n,r;const o=e[8].default,y=Xe(o,e,e[7],Ut);return{c(){t=J("div"),y&&y.c(),this.h()},l(m){t=K(m,"DIV",{class:!0,style:!0});var s=k(t);y&&y.l(s),s.forEach(R),this.h()},h(){X(t,"class","layercake-layout-html svelte-1bu60uu"),X(t,"style",n="top: "+e[3].top+"px; right:"+e[3].right+"px; bottom:"+e[3].bottom+"px; left:"+e[3].left+"px;"+e[1]+e[2])},m(m,s){x(m,t,s),y&&y.m(t,null),e[9](t),r=!0},p(m,[s]){y&&y.p&&(!r||s&129)&&ge(y,o,m,m[7],r?Ye(o,m[7],s,Tn):_e(m[7]),Ut),(!r||s&14&&n!==(n="top: "+m[3].top+"px; right:"+m[3].right+"px; bottom:"+m[3].bottom+"px; left:"+m[3].left+"px;"+m[1]+m[2]))&&X(t,"style",n)},i(m){r||(H(y,m),r=!0)},o(m){Q(y,m),r=!1},d(m){m&&R(t),y&&y.d(m),e[9](null)}}}function Mn(e,t,n){let r,{$$slots:o={},$$scope:y}=t,{element:m=void 0}=t,{zIndex:s=void 0}=t,{pointerEvents:a=void 0}=t,l="",d="";const{padding:f}=ze("LayerCake");b(e,f,h=>n(3,r=h));function c(h){Re[h?"unshift":"push"](()=>{m=h,n(0,m)})}return e.$$set=h=>{"element"in h&&n(0,m=h.element),"zIndex"in h&&n(5,s=h.zIndex),"pointerEvents"in h&&n(6,a=h.pointerEvents),"$$scope"in h&&n(7,y=h.$$scope)},e.$$.update=()=>{e.$$.dirty&32&&n(1,l=typeof s!="undefined"?`z-index:${s};`:""),e.$$.dirty&64&&n(2,d=a===!1?"pointer-events:none;":"")},[m,l,d,r,f,s,a,y,o,c]}class ei extends q{constructor(t){super();F(this,t,Mn,In,Z,{element:0,zIndex:5,pointerEvents:6})}}const Hn=e=>({element:e&1}),pt=e=>({element:e[0]}),Bn=e=>({element:e&1}),$t=e=>({element:e[0]});function Wn(e){let t,n,r,o,y,m;const s=e[13].defs,a=Xe(s,e,e[12],$t),l=e[13].default,d=Xe(l,e,e[12],pt);return{c(){t=ae("svg"),n=ae("defs"),a&&a.c(),r=ae("g"),d&&d.c(),this.h()},l(f){t=se(f,"svg",{class:!0,viewBox:!0,width:!0,height:!0,style:!0});var c=k(t);n=se(c,"defs",{});var h=k(n);a&&a.l(h),h.forEach(R),r=se(c,"g",{class:!0,transform:!0});var D=k(r);d&&d.l(D),D.forEach(R),c.forEach(R),this.h()},h(){X(r,"class","layercake-layout-svg_g"),X(r,"transform",o="translate("+e[6].left+", "+e[6].top+")"),X(t,"class","layercake-layout-svg svelte-u84d8d"),X(t,"viewBox",e[1]),X(t,"width",e[4]),X(t,"height",e[5]),X(t,"style",y=""+(e[2]+e[3]))},m(f,c){x(f,t,c),Wt(t,n),a&&a.m(n,null),Wt(t,r),d&&d.m(r,null),e[14](t),m=!0},p(f,[c]){a&&a.p&&(!m||c&4097)&&ge(a,s,f,f[12],m?Ye(s,f[12],c,Bn):_e(f[12]),$t),d&&d.p&&(!m||c&4097)&&ge(d,l,f,f[12],m?Ye(l,f[12],c,Hn):_e(f[12]),pt),(!m||c&64&&o!==(o="translate("+f[6].left+", "+f[6].top+")"))&&X(r,"transform",o),(!m||c&2)&&X(t,"viewBox",f[1]),(!m||c&16)&&X(t,"width",f[4]),(!m||c&32)&&X(t,"height",f[5]),(!m||c&12&&y!==(y=""+(f[2]+f[3])))&&X(t,"style",y)},i(f){m||(H(a,f),H(d,f),m=!0)},o(f){Q(a,f),Q(d,f),m=!1},d(f){f&&R(t),a&&a.d(f),d&&d.d(f),e[14](null)}}}function On(e,t,n){let r,o,y,{$$slots:m={},$$scope:s}=t,{element:a=void 0}=t,{zIndex:l=void 0}=t,{pointerEvents:d=void 0}=t,{viewBox:f=void 0}=t,c="",h="";const{containerWidth:D,containerHeight:E,padding:g}=ze("LayerCake");b(e,D,u=>n(4,r=u)),b(e,E,u=>n(5,o=u)),b(e,g,u=>n(6,y=u));function Y(u){Re[u?"unshift":"push"](()=>{a=u,n(0,a)})}return e.$$set=u=>{"element"in u&&n(0,a=u.element),"zIndex"in u&&n(10,l=u.zIndex),"pointerEvents"in u&&n(11,d=u.pointerEvents),"viewBox"in u&&n(1,f=u.viewBox),"$$scope"in u&&n(12,s=u.$$scope)},e.$$.update=()=>{e.$$.dirty&1024&&n(2,c=typeof l!="undefined"?`z-index:${l};`:""),e.$$.dirty&2048&&n(3,h=d===!1?"pointer-events:none;":"")},[a,f,c,h,r,o,y,D,E,g,l,d,s,m,Y]}class ti extends q{constructor(t){super();F(this,t,On,Wn,Z,{element:0,zIndex:10,pointerEvents:11,viewBox:1})}}function Vn(e){let t;return{c(){t=ae("path"),this.h()},l(n){t=se(n,"path",{class:!0,d:!0,stroke:!0}),k(t).forEach(R),this.h()},h(){X(t,"class","path-line svelte-1a99x5h"),X(t,"d",e[1]),X(t,"stroke",e[0])},m(n,r){x(n,t,r)},p(n,[r]){r&2&&X(t,"d",n[1]),r&1&&X(t,"stroke",n[0])},i:U,o:U,d(n){n&&R(t)}}}function qn(e,t,n){let r,o,y,m;const{data:s,xGet:a,yGet:l}=ze("LayerCake");b(e,s,f=>n(7,m=f)),b(e,a,f=>n(6,y=f)),b(e,l,f=>n(5,o=f));let{stroke:d="#ab00d6"}=t;return e.$$set=f=>{"stroke"in f&&n(0,d=f.stroke)},e.$$.update=()=>{e.$$.dirty&224&&n(1,r="M"+m.map(f=>y(f)+","+o(f)).join("L"))},[d,r,s,a,l,o,y,m]}class ni extends q{constructor(t){super();F(this,t,qn,Vn,Z,{stroke:0})}}function Fn(e){let t;return{c(){t=ae("path"),this.h()},l(n){t=se(n,"path",{class:!0,d:!0,fill:!0}),k(t).forEach(R),this.h()},h(){X(t,"class","path-area"),X(t,"d",e[1]),X(t,"fill",e[0])},m(n,r){x(n,t,r)},p(n,[r]){r&2&&X(t,"d",n[1]),r&1&&X(t,"fill",n[0])},i:U,o:U,d(n){n&&R(t)}}}function Zn(e,t,n){let r,o,y,m,s,a,l;const{data:d,xGet:f,yGet:c,xScale:h,yScale:D,extents:E}=ze("LayerCake");b(e,d,u=>n(14,l=u)),b(e,f,u=>n(13,a=u)),b(e,c,u=>n(12,s=u)),b(e,h,u=>n(10,y=u)),b(e,D,u=>n(11,m=u)),b(e,E,u=>n(9,o=u));let{fill:g="#ab00d610"}=t,Y;return e.$$set=u=>{"fill"in u&&n(0,g=u.fill)},e.$$.update=()=>{if(e.$$.dirty&28672&&n(8,r="M"+l.map(u=>a(u)+","+s(u)).join("L")),e.$$.dirty&3840){const u=m.range();n(1,Y=r+("L"+y(o.x?o.x[1]:0)+","+u[0]+"L"+y(o.x?o.x[0]:0)+","+u[0]+"Z"))}},[g,Y,d,f,c,h,D,E,r,o,y,m,s,a,l]}class ii extends q{constructor(t){super();F(this,t,Zn,Fn,Z,{fill:0})}}var ri=[{myX:"1979",myY:"7.19"},{myX:"1980",myY:"7.83"},{myX:"1981",myY:"7.24"},{myX:"1982",myY:"7.44"},{myX:"1983",myY:"7.51"},{myX:"1984",myY:"7.1"},{myX:"1985",myY:"6.91"},{myX:"1986",myY:"7.53"},{myX:"1987",myY:"7.47"},{myX:"1988",myY:"7.48"},{myX:"1989",myY:"7.03"},{myX:"1990",myY:"6.23"},{myX:"1991",myY:"6.54"},{myX:"1992",myY:"7.54"},{myX:"1993",myY:"6.5"},{myX:"1994",myY:"7.18"},{myX:"1995",myY:"6.12"},{myX:"1996",myY:"7.87"},{myX:"1997",myY:"6.73"},{myX:"1998",myY:"6.55"},{myX:"1999",myY:"6.23"},{myX:"2000",myY:"6.31"},{myX:"2001",myY:"6.74"},{myX:"2002",myY:"5.95"},{myX:"2003",myY:"6.13"},{myX:"2004",myY:"6.04"},{myX:"2005",myY:"5.56"},{myX:"2006",myY:"5.91"},{myX:"2007",myY:"4.29"},{myX:"2008",myY:"4.72"},{myX:"2009",myY:"5.38"},{myX:"2010",myY:"4.92"},{myX:"2011",myY:"4.61"},{myX:"2012",myY:"3.62"},{myX:"2013",myY:"5.35"},{myX:"2014",myY:"5.28"},{myX:"2015",myY:"4.63"},{myX:"2016",myY:"4.72"}];function en(e){let t,n,r,o,y,m,s;return{c(){t=J("div"),n=Ot(),r=J("div"),o=Ot(),y=J("div"),this.h()},l(a){t=K(a,"DIV",{class:!0,style:!0}),k(t).forEach(R),n=Vt(a),r=K(a,"DIV",{class:!0,style:!0}),k(r).forEach(R),o=Vt(a),y=K(a,"DIV",{class:!0,style:!0}),k(y).forEach(R),this.h()},h(){X(t,"class","brush-inner svelte-1m1nhvc"),T(t,"left",e[3]+"%"),T(t,"right",e[2]+"%"),X(r,"class","brush-handle svelte-1m1nhvc"),T(r,"left",e[3]+"%"),X(y,"class","brush-handle svelte-1m1nhvc"),T(y,"right",e[2]+"%")},m(a,l){x(a,t,l),x(a,n,l),x(a,r,l),x(a,o,l),x(a,y,l),m||(s=[I(t,"mousedown",M(e[5])),I(t,"touchstart",M(e[5])),I(r,"mousedown",M(e[6])),I(r,"touchstart",M(e[6])),I(y,"mousedown",M(e[7])),I(y,"touchstart",M(e[7]))],m=!0)},p(a,l){l&8&&T(t,"left",a[3]+"%"),l&4&&T(t,"right",a[2]+"%"),l&8&&T(r,"left",a[3]+"%"),l&4&&T(y,"right",a[2]+"%")},d(a){a&&R(t),a&&R(n),a&&R(r),a&&R(o),a&&R(y),m=!1,qt(s)}}}function Jn(e){let t,n,r,o=e[0]!==null&&en(e);return{c(){t=J("div"),o&&o.c(),this.h()},l(y){t=K(y,"DIV",{class:!0});var m=k(t);o&&o.l(m),m.forEach(R),this.h()},h(){X(t,"class","brush-outer svelte-1m1nhvc")},m(y,m){x(y,t,m),o&&o.m(t,null),e[9](t),n||(r=[I(t,"mousedown",M(e[4])),I(t,"touchstart",M(e[4]))],n=!0)},p(y,[m]){y[0]!==null?o?o.p(y,m):(o=en(y),o.c(),o.m(t,null)):o&&(o.d(1),o=null)},i:U,o:U,d(y){y&&R(t),o&&o.d(),e[9](null),n=!1,qt(r)}}}function Kn(e,t,n){let r,o,{min:y}=t,{max:m}=t,s;const a=g=>{const{left:Y,right:u}=s.getBoundingClientRect();return we((g-Y)/(u-Y),0,1)},l=g=>Y=>{if(Y.type==="touchstart"){if(Y.touches.length!==1)return;Y=Y.touches[0]}const u=Y.identifier,B={min:y,max:m,p:a(Y.clientX)},N=v=>{v.type==="touchmove"&&(v.changedTouches.length!==1||(v=v.changedTouches[0],v.identifier!==u))||g(B,a(v.clientX))},L=v=>{if(v.type==="touchend"){if(v.changedTouches.length!==1||v.changedTouches[0].identifier!==u)return}else v.target===s&&d();window.removeEventListener("mousemove",N),window.removeEventListener("mouseup",L),window.removeEventListener("touchmove",N),window.removeEventListener("touchend",L)};window.addEventListener("mousemove",N),window.addEventListener("mouseup",L),window.addEventListener("touchmove",N),window.addEventListener("touchend",L)},d=()=>{n(0,y=null),n(8,m=null)},f=l((g,Y)=>{n(0,y=we(Math.min(g.p,Y),0,1)),n(8,m=we(Math.max(g.p,Y),0,1))}),c=l((g,Y)=>{const u=we(Y-g.p,-g.min,1-g.max);n(0,y=g.min+u),n(8,m=g.max+u)}),h=l((g,Y)=>{n(0,y=Y>g.max?g.max:Y),n(8,m=Y>g.max?Y:g.max)}),D=l((g,Y)=>{n(0,y=Y<g.min?Y:g.min),n(8,m=Y<g.min?g.min:Y)});function E(g){Re[g?"unshift":"push"](()=>{s=g,n(1,s)})}return e.$$set=g=>{"min"in g&&n(0,y=g.min),"max"in g&&n(8,m=g.max)},e.$$.update=()=>{e.$$.dirty&1&&n(3,r=100*y),e.$$.dirty&256&&n(2,o=100*(1-m))},[y,s,o,r,f,c,h,D,m,E]}class mi extends q{constructor(t){super();F(this,t,Kn,Jn,Z,{min:0,max:8})}}var yi=[{myX:"1979",myY:"5.03"},{myX:"1980",myY:"3.99"},{myX:"1981",myY:"10.35"},{myX:"1982",myY:"4.06"},{myX:"1983",myY:"10.11"},{myX:"1984",myY:"11.66"},{myX:"1985",myY:"5.95"},{myX:"1986",myY:"7.27"},{myX:"1987",myY:"2.77"},{myX:"1988",myY:"3.43"},{myX:"1989",myY:"6.49"},{myX:"1990",myY:"8.27"},{myX:"1991",myY:"3.85"},{myX:"1992",myY:"6.21"},{myX:"1993",myY:"0.14"},{myX:"1994",myY:"7.65"},{myX:"1995",myY:"5.57"},{myX:"1996",myY:"15.61"},{myX:"1997",myY:"12.42"},{myX:"1998",myY:"5.2"},{myX:"1999",myY:"9.81"},{myX:"2000",myY:"8.64"},{myX:"2001",myY:"10.07"},{myX:"2002",myY:"1.71"},{myX:"2003",myY:"3"},{myX:"2004",myY:"11.82"},{myX:"2005",myY:"4.74"},{myX:"2006",myY:"4.25"},{myX:"2007",myY:"0.16"},{myX:"2008",myY:"7.97"},{myX:"2009",myY:"9.75"},{myX:"2010",myY:"3.34"},{myX:"2011",myY:"3.46"},{myX:"2012",myY:"1.73"},{myX:"2013",myY:"5.97"},{myX:"2014",myY:"2.17"},{myX:"2015",myY:"0.88"},{myX:"2016",myY:"8.19"}],oi=[{myX:"1979",myY:"5.43"},{myX:"1980",myY:"7.27"},{myX:"1981",myY:"8.82"},{myX:"1982",myY:"13.14"},{myX:"1983",myY:"14.63"},{myX:"1984",myY:"5.41"},{myX:"1985",myY:"4.76"},{myX:"1986",myY:"12.46"},{myX:"1987",myY:"10.38"},{myX:"1988",myY:"0.06"},{myX:"1989",myY:"9.35"},{myX:"1990",myY:"5.84"},{myX:"1991",myY:"6.94"},{myX:"1992",myY:"2.78"},{myX:"1993",myY:"9.84"},{myX:"1994",myY:"6.48"},{myX:"1995",myY:"9.97"},{myX:"1996",myY:"4.85"},{myX:"1997",myY:"5.35"},{myX:"1998",myY:"4.12"},{myX:"1999",myY:"1.56"},{myX:"2000",myY:"10.11"},{myX:"2001",myY:"2.04"},{myX:"2002",myY:"4.03"},{myX:"2003",myY:"3.85"},{myX:"2004",myY:"8.61"},{myX:"2005",myY:"1.44"},{myX:"2006",myY:"9.41"},{myX:"2007",myY:"3.51"},{myX:"2008",myY:"4.12"},{myX:"2009",myY:"6.76"},{myX:"2010",myY:"3.65"},{myX:"2011",myY:"6.76"},{myX:"2012",myY:"6.46"},{myX:"2013",myY:"0.75"},{myX:"2014",myY:"9.93"},{myX:"2015",myY:"8.11"},{myX:"2016",myY:"1.4"}],ai=[{myX:"1979",myY:"10.27"},{myX:"1980",myY:"1.99"},{myX:"1981",myY:"2.25"},{myX:"1982",myY:"3.56"},{myX:"1983",myY:"0.32"},{myX:"1984",myY:"4.18"},{myX:"1985",myY:"1.75"},{myX:"1986",myY:"2.35"},{myX:"1987",myY:"2.54"},{myX:"1988",myY:"6.53"},{myX:"1989",myY:"5.02"},{myX:"1990",myY:"3.4"},{myX:"1991",myY:"4.79"},{myX:"1992",myY:"1.29"},{myX:"1993",myY:"12.65"},{myX:"1994",myY:"5.26"},{myX:"1995",myY:"3.11"},{myX:"1996",myY:"14.92"},{myX:"1997",myY:"13.21"},{myX:"1998",myY:"10.34"},{myX:"1999",myY:"5.02"},{myX:"2000",myY:"9.11"},{myX:"2001",myY:"13.24"},{myX:"2002",myY:"8.02"},{myX:"2003",myY:"1.54"},{myX:"2004",myY:"0.25"},{myX:"2005",myY:"6.02"},{myX:"2006",myY:"5.91"},{myX:"2007",myY:"6.83"},{myX:"2008",myY:"6.76"},{myX:"2009",myY:"3.7"},{myX:"2010",myY:"2.3"},{myX:"2011",myY:"3.37"},{myX:"2012",myY:"4.02"},{myX:"2013",myY:"2.15"},{myX:"2014",myY:"2.33"},{myX:"2015",myY:"5.98"},{myX:"2016",myY:"6.27"}];export{ii as A,mi as B,ei as H,$n as L,ti as S,ni as a,oi as b,ai as c,ri as d,vn as e,yi as p};
