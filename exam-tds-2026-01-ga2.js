var Yt=Object.create;var we=Object.defineProperty;var Qt=Object.getOwnPropertyDescriptor;var Zt=Object.getOwnPropertyNames;var eo=Object.getPrototypeOf,to=Object.prototype.hasOwnProperty;var U=(t,a)=>()=>(t&&(a=t(t=0)),a);var V=(t,a)=>()=>(a||t((a={exports:{}}).exports,a),a.exports),O=(t,a)=>{for(var e in a)we(t,e,{get:a[e],enumerable:!0})},oo=(t,a,e,i)=>{if(a&&typeof a=="object"||typeof a=="function")for(let s of Zt(a))!to.call(t,s)&&s!==e&&we(t,s,{get:()=>a[s],enumerable:!(i=Qt(a,s))||i.enumerable});return t};var z=(t,a,e)=>(e=t!=null?Yt(eo(t)):{},oo(a||!t||!t.__esModule?we(e,"default",{value:t,enumerable:!0}):e,t));var Pe=V((Ue,ye)=>{(function(t,a,e){function i(o){var l=this,d=n();l.next=function(){var r=2091639*l.s0+l.c*23283064365386963e-26;return l.s0=l.s1,l.s1=l.s2,l.s2=r-(l.c=r|0)},l.c=1,l.s0=d(" "),l.s1=d(" "),l.s2=d(" "),l.s0-=d(o),l.s0<0&&(l.s0+=1),l.s1-=d(o),l.s1<0&&(l.s1+=1),l.s2-=d(o),l.s2<0&&(l.s2+=1),d=null}function s(o,l){return l.c=o.c,l.s0=o.s0,l.s1=o.s1,l.s2=o.s2,l}function h(o,l){var d=new i(o),r=l&&l.state,c=d.next;return c.int32=function(){return d.next()*4294967296|0},c.double=function(){return c()+(c()*2097152|0)*11102230246251565e-32},c.quick=c,r&&(typeof r=="object"&&s(r,d),c.state=function(){return s(d,{})}),c}function n(){var o=4022871197,l=function(d){d=String(d);for(var r=0;r<d.length;r++){o+=d.charCodeAt(r);var c=.02519603282416938*o;o=c>>>0,c-=o,c*=o,o=c>>>0,c-=o,o+=c*4294967296}return(o>>>0)*23283064365386963e-26};return l}a&&a.exports?a.exports=h:e&&e.amd?e(function(){return h}):this.alea=h})(Ue,typeof ye=="object"&&ye,typeof define=="function"&&define)});var je=V((He,be)=>{(function(t,a,e){function i(n){var o=this,l="";o.x=0,o.y=0,o.z=0,o.w=0,o.next=function(){var r=o.x^o.x<<11;return o.x=o.y,o.y=o.z,o.z=o.w,o.w^=o.w>>>19^r^r>>>8},n===(n|0)?o.x=n:l+=n;for(var d=0;d<l.length+64;d++)o.x^=l.charCodeAt(d)|0,o.next()}function s(n,o){return o.x=n.x,o.y=n.y,o.z=n.z,o.w=n.w,o}function h(n,o){var l=new i(n),d=o&&o.state,r=function(){return(l.next()>>>0)/4294967296};return r.double=function(){do var c=l.next()>>>11,p=(l.next()>>>0)/4294967296,u=(c+p)/(1<<21);while(u===0);return u},r.int32=l.next,r.quick=r,d&&(typeof d=="object"&&s(d,l),r.state=function(){return s(l,{})}),r}a&&a.exports?a.exports=h:e&&e.amd?e(function(){return h}):this.xor128=h})(He,typeof be=="object"&&be,typeof define=="function"&&define)});var We=V((Oe,ve)=>{(function(t,a,e){function i(n){var o=this,l="";o.next=function(){var r=o.x^o.x>>>2;return o.x=o.y,o.y=o.z,o.z=o.w,o.w=o.v,(o.d=o.d+362437|0)+(o.v=o.v^o.v<<4^(r^r<<1))|0},o.x=0,o.y=0,o.z=0,o.w=0,o.v=0,n===(n|0)?o.x=n:l+=n;for(var d=0;d<l.length+64;d++)o.x^=l.charCodeAt(d)|0,d==l.length&&(o.d=o.x<<10^o.x>>>4),o.next()}function s(n,o){return o.x=n.x,o.y=n.y,o.z=n.z,o.w=n.w,o.v=n.v,o.d=n.d,o}function h(n,o){var l=new i(n),d=o&&o.state,r=function(){return(l.next()>>>0)/4294967296};return r.double=function(){do var c=l.next()>>>11,p=(l.next()>>>0)/4294967296,u=(c+p)/(1<<21);while(u===0);return u},r.int32=l.next,r.quick=r,d&&(typeof d=="object"&&s(d,l),r.state=function(){return s(l,{})}),r}a&&a.exports?a.exports=h:e&&e.amd?e(function(){return h}):this.xorwow=h})(Oe,typeof ve=="object"&&ve,typeof define=="function"&&define)});var _e=V((De,$e)=>{(function(t,a,e){function i(n){var o=this;o.next=function(){var d=o.x,r=o.i,c,p,u;return c=d[r],c^=c>>>7,p=c^c<<24,c=d[r+1&7],p^=c^c>>>10,c=d[r+3&7],p^=c^c>>>3,c=d[r+4&7],p^=c^c<<7,c=d[r+7&7],c=c^c<<13,p^=c^c<<9,d[r]=p,o.i=r+1&7,p};function l(d,r){var c,p,u=[];if(r===(r|0))p=u[0]=r;else for(r=""+r,c=0;c<r.length;++c)u[c&7]=u[c&7]<<15^r.charCodeAt(c)+u[c+1&7]<<13;for(;u.length<8;)u.push(0);for(c=0;c<8&&u[c]===0;++c);for(c==8?p=u[7]=-1:p=u[c],d.x=u,d.i=0,c=256;c>0;--c)d.next()}l(o,n)}function s(n,o){return o.x=n.x.slice(),o.i=n.i,o}function h(n,o){n==null&&(n=+new Date);var l=new i(n),d=o&&o.state,r=function(){return(l.next()>>>0)/4294967296};return r.double=function(){do var c=l.next()>>>11,p=(l.next()>>>0)/4294967296,u=(c+p)/(1<<21);while(u===0);return u},r.int32=l.next,r.quick=r,d&&(d.x&&s(d,l),r.state=function(){return s(l,{})}),r}a&&a.exports?a.exports=h:e&&e.amd?e(function(){return h}):this.xorshift7=h})(De,typeof $e=="object"&&$e,typeof define=="function"&&define)});var Le=V((qe,ke)=>{(function(t,a,e){function i(n){var o=this;o.next=function(){var d=o.w,r=o.X,c=o.i,p,u;return o.w=d=d+1640531527|0,u=r[c+34&127],p=r[c=c+1&127],u^=u<<13,p^=p<<17,u^=u>>>15,p^=p>>>12,u=r[c]=u^p,o.i=c,u+(d^d>>>16)|0};function l(d,r){var c,p,u,f,k,w=[],y=128;for(r===(r|0)?(p=r,r=null):(r=r+"\0",p=0,y=Math.max(y,r.length)),u=0,f=-32;f<y;++f)r&&(p^=r.charCodeAt((f+32)%r.length)),f===0&&(k=p),p^=p<<10,p^=p>>>15,p^=p<<4,p^=p>>>13,f>=0&&(k=k+1640531527|0,c=w[f&127]^=p+k,u=c==0?u+1:0);for(u>=128&&(w[(r&&r.length||0)&127]=-1),u=127,f=4*128;f>0;--f)p=w[u+34&127],c=w[u=u+1&127],p^=p<<13,c^=c<<17,p^=p>>>15,c^=c>>>12,w[u]=p^c;d.w=k,d.X=w,d.i=u}l(o,n)}function s(n,o){return o.i=n.i,o.w=n.w,o.X=n.X.slice(),o}function h(n,o){n==null&&(n=+new Date);var l=new i(n),d=o&&o.state,r=function(){return(l.next()>>>0)/4294967296};return r.double=function(){do var c=l.next()>>>11,p=(l.next()>>>0)/4294967296,u=(c+p)/(1<<21);while(u===0);return u},r.int32=l.next,r.quick=r,d&&(d.X&&s(d,l),r.state=function(){return s(l,{})}),r}a&&a.exports?a.exports=h:e&&e.amd?e(function(){return h}):this.xor4096=h})(qe,typeof ke=="object"&&ke,typeof define=="function"&&define)});var Me=V((Ge,xe)=>{(function(t,a,e){function i(n){var o=this,l="";o.next=function(){var r=o.b,c=o.c,p=o.d,u=o.a;return r=r<<25^r>>>7^c,c=c-p|0,p=p<<24^p>>>8^u,u=u-r|0,o.b=r=r<<20^r>>>12^c,o.c=c=c-p|0,o.d=p<<16^c>>>16^u,o.a=u-r|0},o.a=0,o.b=0,o.c=-1640531527,o.d=1367130551,n===Math.floor(n)?(o.a=n/4294967296|0,o.b=n|0):l+=n;for(var d=0;d<l.length+20;d++)o.b^=l.charCodeAt(d)|0,o.next()}function s(n,o){return o.a=n.a,o.b=n.b,o.c=n.c,o.d=n.d,o}function h(n,o){var l=new i(n),d=o&&o.state,r=function(){return(l.next()>>>0)/4294967296};return r.double=function(){do var c=l.next()>>>11,p=(l.next()>>>0)/4294967296,u=(c+p)/(1<<21);while(u===0);return u},r.int32=l.next,r.quick=r,d&&(typeof d=="object"&&s(d,l),r.state=function(){return s(l,{})}),r}a&&a.exports?a.exports=h:e&&e.amd?e(function(){return h}):this.tychei=h})(Ge,typeof xe=="object"&&xe,typeof define=="function"&&define)});var Fe=V(()=>{});var Be=V((Ne,de)=>{(function(t,a,e){var i=256,s=6,h=52,n="random",o=e.pow(i,s),l=e.pow(2,h),d=l*2,r=i-1,c;function p(g,$,E){var b=[];$=$==!0?{entropy:!0}:$||{};var m=w(k($.entropy?[g,A(a)]:g??y(),3),b),v=new u(b),x=function(){for(var S=v.g(s),P=o,R=0;S<l;)S=(S+R)*i,P*=i,R=v.g(1);for(;S>=d;)S/=2,P/=2,R>>>=1;return(S+R)/P};return x.int32=function(){return v.g(4)|0},x.quick=function(){return v.g(4)/4294967296},x.double=x,w(A(v.S),a),($.pass||E||function(S,P,R,I){return I&&(I.S&&f(I,v),S.state=function(){return f(v,{})}),R?(e[n]=S,P):S})(x,m,"global"in $?$.global:this==e,$.state)}function u(g){var $,E=g.length,b=this,m=0,v=b.i=b.j=0,x=b.S=[];for(E||(g=[E++]);m<i;)x[m]=m++;for(m=0;m<i;m++)x[m]=x[v=r&v+g[m%E]+($=x[m])],x[v]=$;(b.g=function(S){for(var P,R=0,I=b.i,T=b.j,W=b.S;S--;)P=W[I=r&I+1],R=R*i+W[r&(W[I]=W[T=r&T+P])+(W[T]=P)];return b.i=I,b.j=T,R})(i)}function f(g,$){return $.i=g.i,$.j=g.j,$.S=g.S.slice(),$}function k(g,$){var E=[],b=typeof g,m;if($&&b=="object")for(m in g)try{E.push(k(g[m],$-1))}catch{}return E.length?E:b=="string"?g:g+"\0"}function w(g,$){for(var E=g+"",b,m=0;m<E.length;)$[r&m]=r&(b^=$[r&m]*19)+E.charCodeAt(m++);return A($)}function y(){try{var g;return c&&(g=c.randomBytes)?g=g(i):(g=new Uint8Array(i),(t.crypto||t.msCrypto).getRandomValues(g)),A(g)}catch{var $=t.navigator,E=$&&$.plugins;return[+new Date,t,E,t.screen,A(a)]}}function A(g){return String.fromCharCode.apply(0,g)}if(w(e.random(),a),typeof de=="object"&&de.exports){de.exports=p;try{c=Fe()}catch{}}else typeof define=="function"&&define.amd?define(function(){return p}):e["seed"+n]=p})(typeof self<"u"?self:Ne,[],Math)});var M=V((Ar,ze)=>{var io=Pe(),co=je(),lo=We(),ho=_e(),uo=Le(),po=Me(),Q=Be();Q.alea=io;Q.xor128=co;Q.xorwow=lo;Q.xorshift7=ho;Q.xor4096=uo;Q.tychei=po;ze.exports=Q});var Ae,Ee,Je=U(()=>{"use strict";Ae=t=>new Promise((a,e)=>{let i=new Image;i.onload=()=>a(i),i.onerror=e,i.src=t}),Ee=t=>{let a=document.createElement("canvas"),e=a.getContext("2d");return a.width=t.width,a.height=t.height,e.drawImage(t,0,0),e.getImageData(0,0,a.width,a.height).data}});var Ke={};O(Ke,{default:()=>fo});import{html as mo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function fo({user:t,weight:a=1}){let e="q-image-compression-dynamic",i="Compress an image",s=(0,Ve.default)(`${t.email}#${e}`),h=document.createElement("canvas");h.width=h.height=500;let n=h.getContext("2d");n.fillStyle="#fff",n.fillRect(0,0,500,500),n.globalAlpha=.5,["red","green","blue"].forEach(p=>{n.fillStyle=p,n.fillRect(s()*400,s()*400,100,100)});let o=h.toDataURL("image/png"),l=await Ae(o),d=Ee(l),r=async()=>{let p=document.getElementById(e);if(!p.files.length)throw new Error("No image uploaded");let u=p.files[0];if(u.size>400)throw new Error("Image should be less than 400 bytes");let f=await Ae(URL.createObjectURL(u));if(l.width!==f.width||l.height!==f.height)throw new Error("Image dimensions do not match the original");try{let k=Ee(f);if(!d.every((w,y)=>w===k[y]))throw new Error("Image pixels do not match the original")}catch(k){throw new Error(`Could not process image. Is it a browser-supported image? ${k.message}`)}return!0},c=mo`
    <div class="mb-3">
      <p><strong>Case Study: eShopCo Bandwidth Reduction</strong></p>
      <p>
        eShopCo, a global e-commerce platform, delivers thousands of product images every day. By ensuring each image is
        losslessly compressed below 400 bytes, they reduce page load times by 30%, improve search ranking, and cut
        bandwidth costs—all while maintaining crystal-clear visuals that drive customer engagement.
      </p>
      <p>Download the image below and compress it <em>losslessly</em> to an image that is less than 400 bytes.</p>
      <p><img src="${o}" width="500" height="500" /></p>
      <p>By losslessly, we mean that every pixel in the new image should be identical to the original image.</p>
      <label for="${e}" class="form-label"> Upload your losslessly compressed image (less than 400 bytes) </label>
      <input class="form-control" id="${e}" name="${e}" type="file" accept="image/*" />
    </div>
  `;return{id:e,title:i,weight:a,question:c,answer:r}}var Ve,Xe=U(()=>{"use strict";Ve=z(M(),1);Je()});function J(t,a){let e=URL.createObjectURL(t),i=document.createElement("a");i.href=e,i.download=a,document.body.appendChild(i),i.click(),document.body.removeChild(i),URL.revokeObjectURL(e)}var ee=U(()=>{"use strict"});import Se from"https://cdn.jsdelivr.net/npm/pako@2/+esm";async function he(t){let a=typeof t=="string"?new TextEncoder().encode(t):t,e=await crypto.subtle.digest("SHA-1",a);return Array.from(new Uint8Array(e)).map(s=>s.toString(16).padStart(2,"0")).join("")}async function X(t){let a=new TextEncoder,e=a.encode(t),i=`blob ${e.length}\0`,s=a.encode(i),h=new Uint8Array(s.length+e.length);h.set(s,0),h.set(e,s.length);let n=await he(h),o=Se.deflate(h);return{hash:n,compressed:o,content:t,size:e.length}}async function ue(t){let a=[...t].sort((r,c)=>r.name<c.name?-1:r.name>c.name?1:0),e=[];for(let r of a){let p=`${r.mode||"100644"} ${r.name}\0`;e.push(new TextEncoder().encode(p));let u=new Uint8Array(20);for(let f=0;f<20;f++)u[f]=parseInt(r.hash.substring(f*2,f*2+2),16);e.push(u)}let i=e.reduce((r,c)=>r+c.length,0),s=new Uint8Array(i),h=0;for(let r of e)s.set(r,h),h+=r.length;let n=new TextEncoder().encode(`tree ${s.length}\0`),o=new Uint8Array(n.length+s.length);o.set(n,0),o.set(s,n.length);let l=await he(o),d=Se.deflate(o);return{hash:l,compressed:d}}async function pe({treeHash:t,parentHash:a,message:e,author:i,timestamp:s}){let h=`tree ${t}
`;a&&(h+=`parent ${a}
`);let n=Math.floor(s.getTime()/1e3);h+=`author ${i.name} <${i.email}> ${n} +0000
`,h+=`committer ${i.name} <${i.email}> ${n} +0000
`,h+=`
${e}
`;let l=`commit ${h.length}\0`+h,d=await he(l),r=Se.deflate(new TextEncoder().encode(l));return{hash:d,compressed:r,content:h}}async function me(t,a){let e=[...t].sort((u,f)=>u.name<f.name?-1:u.name>f.name?1:0),i=[],s=new Uint8Array(12);s[0]=68,s[1]=73,s[2]=82,s[3]=67,s[4]=0,s[5]=0,s[6]=0,s[7]=2;let h=e.length;s[8]=h>>24&255,s[9]=h>>16&255,s[10]=h>>8&255,s[11]=h&255,i.push(s);let n=Math.floor(a.getTime()/1e3);for(let u of e){let f=[],k=new Uint8Array(8);k[0]=n>>24&255,k[1]=n>>16&255,k[2]=n>>8&255,k[3]=n&255,f.push(k);let w=new Uint8Array(8);w[0]=n>>24&255,w[1]=n>>16&255,w[2]=n>>8&255,w[3]=n&255,f.push(w),f.push(new Uint8Array(8));let y=new Uint8Array(4);y[0]=0,y[1]=0,y[2]=129,y[3]=164,f.push(y),f.push(new Uint8Array(8));let A=new Uint8Array(4);A[0]=u.size>>24&255,A[1]=u.size>>16&255,A[2]=u.size>>8&255,A[3]=u.size&255,f.push(A);let g=new Uint8Array(20);for(let I=0;I<20;I++)g[I]=parseInt(u.hash.substring(I*2,I*2+2),16);f.push(g);let $=Math.min(u.name.length,4095),E=new Uint8Array(2);E[0]=$>>8&15,E[1]=$&255,f.push(E);let b=new TextEncoder().encode(u.name+"\0"),v=(8-(62+b.length)%8)%8,x=new Uint8Array(b.length+v);x.set(b,0),f.push(x);let S=f.reduce((I,T)=>I+T.length,0),P=new Uint8Array(S),R=0;for(let I of f)P.set(I,R),R+=I.length;i.push(P)}let o=i.reduce((u,f)=>u+f.length,0),l=new Uint8Array(o),d=0;for(let u of i)l.set(u,d),d+=u.length;let r=await he(l),c=new Uint8Array(20);for(let u=0;u<20;u++)c[u]=parseInt(r.substring(u*2,u*2+2),16);let p=new Uint8Array(l.length+20);return p.set(l,0),p.set(c,l.length),p}var Ce=U(()=>{"use strict"});var L,se=U(()=>{"use strict";L=(t,a)=>t[Math.floor(a()*t.length)]});var Qe={};O(Qe,{default:()=>$o});import go from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as wo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function $o({user:t,weight:a=2}){let e="q-git-revert-env",i="Git Security Fix: Reverting .env Commit",s=(0,Ye.default)(`${t.email}#${e}`),h=e,n=t,o="Developer",l=`${n.email}`,d=[{key:"DATABASE_URL",value:m=>`postgres://admin:${ie(m,16)}@db.prod.internal:5432/maindb`},{key:"API_SECRET",value:m=>`sk_live_${ie(m,32)}`},{key:"JWT_SECRET",value:m=>ie(m,64)},{key:"AWS_SECRET_ACCESS_KEY",value:m=>ie(m,40)},{key:"AIPIPE_TOKEN",value:m=>yo(m,t)}],r=fe(s,15,25),c=fe(s,3,Math.floor(r/2)),p=[],u=fe(s,3,5),f=[...d].sort(()=>s()-.5);for(let m=0;m<u;m++){let v=f[m];p.push({key:v.key,value:v.value(s)})}let k=p.map(m=>`${m.key}=${m.value}`).join(`
`)+`
`,w=[],y=[...bo].sort(()=>s()-.5);for(let m=0;m<r;m++){let v;m===0?v="Initial commit":m===c?v=L(vo,s):v=y[(m-1)%y.length];let x=new Date("2025-09-01T10:00:00Z").getTime(),S=m*fe(s,7200,86400)*1e3;w.push({message:v,timestamp:new Date(x+S),hasEnv:m>=c})}let A=null,g={name:o,email:l},$=async()=>{if(A)return A;let m=new go,v=m.folder(h),x=v.folder(".git"),S=x.folder("objects"),P=[],R=null,I={readme:0,app:0,requirements:0},T=[],W=null;for(let H=0;H<w.length;H++){let G=w[H];if(W=G.timestamp,H===0)I.readme=1,I.app=1,I.requirements=1;else{let B=H%3;B===0?I.readme++:B===1?I.app++:I.requirements++}let Z=`# ${h}

A Flask-based REST API service.

## Version

${I.readme}.0.0

## Quick Start

\`\`\`bash
pip install -r requirements.txt
python app.py
\`\`\`

## API Endpoints

- \`GET /health\` - Health check
- \`POST /api/v1/login\` - User authentication
- \`GET /api/v1/users\` - List users
- \`POST /api/v1/register\` - Register new user

## Environment Variables

Copy \`.env.example\` to \`.env\` and configure:

- \`DATABASE_URL\` - PostgreSQL connection string
- \`JWT_SECRET\` - Secret for JWT tokens
- \`REDIS_URL\` - Redis connection for caching

## Development

\`\`\`bash
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
flask run --debug
\`\`\`

## Testing

\`\`\`bash
pytest tests/ -v
\`\`\`

## License

MIT
`,re=`#!/usr/bin/env python3
"""Flask application entry point.

Version: ${I.app}.0.0
"""
import os
from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager, jwt_required, create_access_token

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.config['JWT_SECRET_KEY'] = os.environ.get('JWT_SECRET')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
jwt = JWTManager(app)


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(256), nullable=False)
    created_at = db.Column(db.DateTime, default=db.func.now())


@app.route('/health')
def health():
    """Health check endpoint."""
    return jsonify({"status": "healthy", "version": "${I.app}.0.0"})


@app.route('/api/v1/login', methods=['POST'])
def login():
    """Authenticate user and return JWT token."""
    data = request.get_json()
    # Authentication logic here
    return jsonify({"message": "Login endpoint"})


@app.route('/api/v1/users')
@jwt_required()
def list_users():
    """List all users (protected endpoint)."""
    return jsonify({"users": []})


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
`,C=`# Requirements v${I.requirements}
Flask==2.3.3
Flask-SQLAlchemy==3.1.1
Flask-JWT-Extended==4.5.3
psycopg2-binary==2.9.9
redis==5.0.1
python-dotenv==1.0.0
gunicorn==21.2.0
pytest==7.4.3
`,D=await X(Z),q=await X(re),_=await X(C);S.folder(D.hash.substring(0,2)).file(D.hash.substring(2),D.compressed),S.folder(q.hash.substring(0,2)).file(q.hash.substring(2),q.compressed),S.folder(_.hash.substring(0,2)).file(_.hash.substring(2),_.compressed);let N=[{mode:"100644",name:"README.md",hash:D.hash},{mode:"100644",name:"app.py",hash:q.hash},{mode:"100644",name:"requirements.txt",hash:_.hash}];if(T=[{name:"README.md",hash:D.hash,size:D.size,content:D.content},{name:"app.py",hash:q.hash,size:q.size,content:q.content},{name:"requirements.txt",hash:_.hash,size:_.size,content:_.content}],G.hasEnv){let B=await X(k);S.folder(B.hash.substring(0,2)).file(B.hash.substring(2),B.compressed),N.push({mode:"100644",name:".env",hash:B.hash}),T.push({name:".env",hash:B.hash,size:B.size,content:B.content})}let le=await ue(N);S.folder(le.hash.substring(0,2)).file(le.hash.substring(2),le.compressed);let ne=await pe({treeHash:le.hash,parentHash:R,message:G.message,author:g,timestamp:G.timestamp});S.folder(ne.hash.substring(0,2)).file(ne.hash.substring(2),ne.compressed),P.push(ne.hash),R=ne.hash}x.file("HEAD",`ref: refs/heads/main
`),x.folder("refs").folder("heads").file("main",R+`
`),x.file("config",`[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallaliases = false
[user]
	name = ${g.name}
	email = ${g.email}
`);let F=T.map(H=>({name:H.name,hash:H.hash,size:H.size})),oe=await me(F,W);x.file("index",oe);for(let H of T)v.file(H.name,H.content);return A=await m.generateAsync({type:"blob"}),A},E=wo`
    <div class="mb-3">
      <h4>Case Study: Git Security Fix: Reverting .env Commit</h4>
      <p>
        <strong>Scenario:</strong> A developer on your team accidentally committed a <code>.env</code> file containing
        sensitive API keys and database credentials. The security team has flagged this as a critical issue. You need
        to identify when this file was added and remove it from the repository's history entirely.
      </p>
      <ol>
        <li>Download the repository zip file below</li>
        <li>Extract and navigate into the repository folder</li>
        <li>Use git commands to find the commit that added <code>.env</code></li>
        <li>Remove the <code>.env</code> file from every commit in the history</li>
        <li>Ensure <code>.env</code> is gone from the entire history</li>
        <li>Create a <code>.gitignore</code> file and add <code>.env</code> to it</li>
        <li>Create a <code>.env.example</code> file with placeholder values for the secrets (Good practice)</li>
        <li>Commit the <code>.gitignore</code> and <code>.env.example</code> file</li>
        <li>Push the repository to your GitHub account (force push will be needed)</li>
        <li>Enter the GitHub repository URL below</li>
      </ol>
      <p>
        Download the repository:
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${async()=>J(await $(),`${e}.zip`)}>
          ${e}.zip
        </button>
      </p>
      <label for="${e}" class="form-label">Enter your GitHub repository URL:</label>
      <input
        class="form-control"
        id="${e}"
        name="${e}"
        type="url"
        placeholder="https://github.com/username/repo-name"
      />
    </div>
  `;return{id:e,title:i,weight:a,question:E,answer:async m=>{if(!m||typeof m!="string")throw new Error("GitHub repository URL is required");let v=m.trim();if(v.length===0)throw new Error("URL cannot be empty");let x=v.match(/github\.com\/([^/]+)\/([^/\s]+)/i);if(!x)throw new Error("Please provide a valid GitHub repository URL (e.g., https://github.com/username/repo)");let[,S,P]=x,R=P.replace(/\.git$/,"").replace(/\/$/,""),I=`https://api.github.com/repos/${S}/${R}/commits?per_page=100`,T;try{let C=await fetch(I);if(!C.ok)throw C.status===409?new Error("The repository appears to be empty. Did you push your changes?"):C.status===404?new Error("Repository not found. Make sure it exists and is public."):new Error(`GitHub API error: ${C.status}`);T=await C.json()}catch(C){throw new Error(`Could not verify commit history: ${C.message}`)}let W=`https://api.github.com/repos/${S}/${R}/commits?path=.env`,F=[];try{let C=await fetch(W);C.ok&&(F=await C.json())}catch(C){throw new Error(`Could not verify .env history: ${C.message}`)}if(Array.isArray(F)&&F.length>0)throw new Error("The .env file was found in the history. You must remove it from the history.");let oe=`https://api.github.com/repos/${S}/${R}/contents/.gitignore`,H=null;try{let C=await fetch(oe);if(C.ok){let D=await C.json();H=atob(D.content)}else throw new Error("The .gitignore file is missing. Please create it and add .env to it.")}catch(C){throw new Error(`Could not verify .gitignore: ${C.message}`)}if(!(C=>{if(!C)return!1;let D=[/^\.env$/,/^\/\.env$/,/^\.env\*$/,/^\/\.env\*$/,/^\.env\..+$/];return C.split(/\r?\n/).some(q=>{let _=q.trim();return!_||_.startsWith("#")?!1:D.some(N=>N.test(_))})})(H))throw new Error("The .gitignore file does not contain .env.");let Z=`https://api.github.com/repos/${S}/${R}/contents/.env.example`;try{if(!(await fetch(Z)).ok)throw new Error("The .env.example file is missing. Please create it with placeholder values.")}catch(C){throw new Error(`Could not verify .env.example: ${C.message}`)}if(!T.some(C=>C.commit&&C.commit.message&&(C.commit.message.toLowerCase().includes("initial commit")||C.commit.message.toLowerCase().includes("flask")||C.commit.message.toLowerCase().includes("authentication")||C.commit.message.toLowerCase().includes("api")||C.commit.message.toLowerCase().includes("database"))&&C.commit.author&&C.commit.author.email===t.email)||T.length<10)throw new Error("The repository appears to be missing the original commit history. Please use the provided repository.");return!0}}}var Ye,fe,ie,yo,bo,vo,Ze=U(()=>{"use strict";Ye=z(M(),1);ee();Ce();se();fe=(t,a,e)=>Math.floor(t()*(e-a+1))+a,ie=(t,a)=>{let e="0123456789abcdef",i="";for(let s=0;s<a;s++)i+=e[Math.floor(t()*e.length)];return i},yo=(t,a)=>{let e={alg:"HS256",typ:"JWT"},i={email:a.email},s=n=>btoa(JSON.stringify(n)).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_"),h=ie(t,32);return`${s(e)}.${s(i)}.${h}`},bo=["Set up project structure with Flask","Add user authentication module","Implement login and registration endpoints","Add database models for users and posts","Create REST API for blog posts","Add pagination to post listing","Implement search functionality","Add unit tests for auth module","Fix password hashing vulnerability","Update dependencies to latest versions","Add rate limiting to API endpoints","Implement caching layer with Redis","Add Docker configuration for deployment","Set up CI/CD pipeline with GitHub Actions","Add API documentation with Swagger","Implement email verification flow","Add password reset functionality","Fix CORS issues for frontend","Add input validation middleware","Implement file upload feature","Add image resizing for thumbnails","Fix memory leak in background jobs","Add health check endpoint","Implement WebSocket notifications","Add user profile management","Fix SQL injection vulnerability","Add admin dashboard endpoints","Implement audit logging","Add metrics collection with Prometheus"],vo=["Add project configuration files","Set up development environment","Configure application settings","Add build and deployment scripts","Update project dependencies","Refactor configuration management","Add local development setup","Configure database connection","Set up logging configuration","Add Docker compose for local dev"]});var ot={};O(ot,{default:()=>So});import ko from"https://cdn.jsdelivr.net/npm/jszip@3/+esm";import{html as xo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function So({user:t,weight:a=1.5}){let e="q-git-time-travel",i="Git Time Travel: History Investigation",s=(0,tt.default)(`${t.email}#${e}`),h=e,n=`${L(et,s).first} ${L(et,s).last}`,o=`${n.toLowerCase().replace(/ /g,".")}@${L(Eo,s)}`,l=Y(s,50,60),d=[30,45,60,90,120,150,180,210,240,270,300,330,360,420,480,540,600,900,1200],r=L(d,s),c=Y(s,10,l-10),p=[],u=new Set;for(let b=0;b<l;b++)if(b===c)p.push(r),u.add(r);else{let m;do m=L(d.filter(v=>v!==r),s);while(u.has(m)&&u.size<d.length-1);p.push(m),u.add(m)}let f=[],k=[...Ao].sort(()=>s()-.5);for(let b=0;b<l;b++){let m;b===0?m="Initial commit":b===c?m="Update timeout settings":m=k[b%k.length]+` (#${Y(s,100,999)})`;let v=new Date("2025-08-01T10:00:00Z").getTime(),x=b*Y(s,7200,172800)*1e3;f.push({message:m,timeout:p[b],timestamp:new Date(v+x),retries:Y(s,1,5),maxConnections:Y(s,10,100),debug:s()>.7})}let w=null,y=null,A={name:n,email:o},g=async()=>{if(y)return y;let b=new ko,m=b.folder(h),v=m.folder(".git"),x=v.folder("objects"),S=[],P=null,R=null,I=null,T=null,W=null;for(let H=0;H<f.length;H++){let G=f[H],Z={appName:h,version:`${Y(s,1,3)}.${H}.${Y(s,0,9)}`,environment:L(["development","staging","production"],s),settings:{timeout:G.timeout,retries:G.retries,maxConnections:G.maxConnections,debug:G.debug,logLevel:L(["debug","info","warn","error"],s)},metadata:{lastUpdated:G.timestamp.toISOString(),updatedBy:A.name}},re=JSON.stringify(Z,null,2),C=H===0||s()>.8?`# ${h}

Version ${Z.version}

A sample project for testing.

## Configuration

See config.json for settings.
`:I,D=await X(re),q=await X(C);T=D,W=q,x.folder(D.hash.substring(0,2)).file(D.hash.substring(2),D.compressed),x.folder(q.hash.substring(0,2)).file(q.hash.substring(2),q.compressed);let _=await ue([{mode:"100644",name:"config.json",hash:D.hash},{mode:"100644",name:"README.md",hash:q.hash}]);x.folder(_.hash.substring(0,2)).file(_.hash.substring(2),_.compressed);let N=await pe({treeHash:_.hash,parentHash:P,message:G.message,author:A,timestamp:G.timestamp});x.folder(N.hash.substring(0,2)).file(N.hash.substring(2),N.compressed),S.push(N.hash),P=N.hash,R=re,I=C}w=S[c-1].substring(0,7),v.file("HEAD",`ref: refs/heads/main
`),v.folder("refs").folder("heads").file("main",P+`
`),v.file("config",`[core]
	repositoryformatversion = 0
	filemode = true
	bare = false
	logallaliases = false
[user]
	name = ${A.name}
	email = ${A.email}
`);let F=[{name:"config.json",hash:T.hash,size:T.size},{name:"README.md",hash:W.hash,size:W.size}],oe=await me(F,f[f.length-1].timestamp);return v.file("index",oe),m.file("config.json",R),m.file("README.md",I),y=await b.generateAsync({type:"blob"}),y},$=xo`
    <div class="mb-3">
      <h4>Case Study: Git Time Travel: History Investigation</h4>
      <p>
        <strong>Scenario:</strong> You're investigating a production incident caused by a configuration change. The
        operations team needs to identify when a specific timeout value was introduced so they can understand what other
        changes were deployed at the same time.
      </p>
      <ol>
        <li>Download the repository zip file below</li>
        <li>Extract and navigate into the repository folder</li>
        <li>
          Use Git commands to explore the commit history (e.g., <code>git log</code>, <code>git show</code>,
          <code>git diff</code>)
        </li>
        <li>
          Find the commit where <code>config.json</code> was modified to change the <code>timeout</code> value to
          <strong>${r}</strong>
        </li>
        <li>Identify the <strong>parent commit</strong> of that commit</li>
        <li>Enter the 7-character short hash of the parent commit</li>
      </ol>
      <p>
        Download the repository:
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${async()=>J(await g(),`${e}.zip`)}>
          ${e}.zip
        </button>
      </p>
      <label for="${e}" class="form-label">
        What is the 7-character short hash of the <strong>parent</strong> of the commit that set timeout to
        ${r}?
      </label>
      <input
        class="form-control"
        id="${e}"
        name="${e}"
        placeholder="e.g., a1b2c3d"
        pattern="[a-f0-9]{7}"
        maxlength="7"
      />
    </div>
  `;return{id:e,title:i,weight:a,question:$,answer:async b=>{if(!b||typeof b!="string")throw new Error("Answer is required");let m=b.trim().toLowerCase();if(m.length===0)throw new Error("Answer cannot be empty");if(!/^[a-f0-9]{7}$/.test(m))throw new Error("Answer must be a 7-character hex string (e.g., a1b2c3d)");if(await g(),m!==w)throw new Error(`Incorrect commit hash. Make sure you found the parent of the commit that set timeout to ${r}.`);return!0}}}var tt,Y,Ao,et,Eo,rt=U(()=>{"use strict";tt=z(M(),1);ee();Ce();se();Y=(t,a,e)=>Math.floor(t()*(e-a+1))+a,Ao=["Initial commit","Add configuration file","Update README","Fix typo in docs","Update timeout settings","Refactor config structure","Add logging configuration","Update API endpoint","Fix configuration bug","Bump version number","Add error handling config","Update database settings","Modify retry settings","Change cache duration","Update security settings","Add feature flags","Update rate limiting","Fix memory leak config","Add monitoring settings","Update connection pool","Refactor timeout logic","Add backup configuration","Update SSL settings","Fix race condition","Add health check config","Update worker threads","Modify batch size","Change log level","Update compression settings","Add circuit breaker","Fix deadlock issue","Update queue settings","Add throttling config","Update pagination","Fix null pointer config","Add validation rules","Update serialization","Modify buffer size","Change polling interval","Update proxy settings","Add failover config","Fix timeout overflow","Update auth settings","Add CORS configuration","Modify chunk size","Change heartbeat interval","Update session timeout","Add cleanup config","Fix memory settings","Update thread pool","Add graceful shutdown","Modify max connections","Change request timeout","Update response cache"],et=[{first:"Alice",last:"Johnson"},{first:"Bob",last:"Smith"},{first:"Carol",last:"Davis"},{first:"David",last:"Miller"},{first:"Eve",last:"Wilson"},{first:"Frank",last:"Moore"},{first:"Grace",last:"Taylor"},{first:"Hank",last:"Anderson"},{first:"Ivy",last:"Thomas"},{first:"Jack",last:"Jackson"}],Eo=["example.com","test.com","sample.org","demo.net"]});var nt={};O(nt,{default:()=>Io});import{html as Co}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Io({user:t,weight:a=1}){let e="q-github-pages",i="Host your portfolio on GitHub Pages",s=async n=>{if(n=n.trim(),!new URL(n).hostname.includes("github.io"))throw new Error("URL should be hosted on github.io");let l=await fetch(`/proxy/${n}`).then(d=>d.text());if(!l.match(t.email))throw new Error(`${t.email} is not in the response: ${l.slice(0,1e3)}...`);return!0},h=Co`
    <div class="mb-3">
      <p>
        Publish a page using <a href="https://pages.github.com/">GitHub Pages</a> that showcases your work. Ensure that
        your email address <strong><code>${t.email}</code></strong> is in the page's HTML.
      </p>
      <p>
        GitHub pages are served via CloudFlare which
        <a href="https://developers.cloudflare.com/waf/tools/scrape-shield/email-address-obfuscation/">obfuscates emails</a>.
        So, wrap your email address inside a:
        <pre><code class="language-html">&lt;!--email_off--&gt;${t.email}&lt;!--/email_off--&gt;</code></pre>
      </p>
      <label for="${e}" class="form-label">
        What is the GitHub Pages URL? It might look like:
        <code>https://[USER].github.io/[REPO]/</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        If a recent change that's not reflected, add <code>?v=1</code>, <code>?v=2</code> to the URL to bust the cache.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var at=U(()=>{"use strict"});async function K(t){let e=new TextEncoder().encode(t),i=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(i)).map(n=>n.toString(16).padStart(2,"0")).join("")}var ce=U(()=>{"use strict"});var it={};O(it,{default:()=>To});import{html as Ro}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function To({user:t,weight:a=1}){let e="q-github-pages-json-api",i="Host a JSON Data API on GitHub Pages",s=(0,st.default)(`${t.email}#${e}`),h=(await K(`${t.email}:gh-json-api`)).slice(0,8),n=["electronics","clothing","books","home","sports"],o=["Premium","Basic","Pro","Elite","Standard"],l=15+Math.floor(s()*10),d=[];for(let w=0;w<l;w++)d.push({id:`prod-${h}-${String(w+1).padStart(3,"0")}`,name:`${o[Math.floor(s()*o.length)]} Item ${w+1}`,category:n[Math.floor(s()*n.length)],price:Math.round((10+s()*490)*100)/100,stock:Math.floor(s()*200),rating:Math.round((1+s()*4)*10)/10});let r=n[Math.floor(s()*n.length)],c=d.filter(w=>w.category===r),p=c.length,u=Math.round(c.reduce((w,y)=>w+y.price*y.stock,0)*100)/100,f=async w=>{w=w.trim();let y;try{y=new URL(w)}catch{throw/^[a-zA-Z][\w+.-]*:/.test(w)?new Error("Invalid URL. Please check that your GitHub Pages URL is correct and publicly accessible."):new Error("Invalid URL. Make sure to include the protocol, e.g. https://username.github.io/repo/file.json")}if(y.hostname!=="github.io"&&!y.hostname.endsWith(".github.io"))throw new Error("Host your JSON file on GitHub Pages (URL must end with github.io)");let A=await fetch(`/proxy/${w}`);if(!A.ok)throw new Error(`Failed to fetch JSON: HTTP ${A.status}`);let g;try{g=await A.json()}catch{throw new Error("Response is not valid JSON. Make sure you're serving a .json file")}if(!g.metadata)throw new Error('JSON must have a "metadata" object at the root');if(g.metadata.email!==t.email)throw new Error(`metadata.email should be ${t.email}`);if(g.metadata.version!==h)throw new Error(`metadata.version should be ${h}`);if(!Array.isArray(g.products))throw new Error('JSON must have a "products" array');if(g.products.length!==d.length)throw new Error(`Expected ${d.length} products`);for(let $=0;$<d.length;$++){let E=d[$],b=g.products.find(m=>m.id===E.id);if(!b)throw new Error(`Missing product with id ${E.id}`);if(b.category!==E.category)throw new Error(`Product ${E.id} has wrong category`);if(Math.abs(b.price-E.price)>.01)throw new Error(`Product ${E.id} has incorrect price`);if(b.stock!==E.stock)throw new Error(`Product ${E.id} has incorrect stock`)}if(!g.aggregations||typeof g.aggregations!="object")throw new Error('JSON must have "aggregations" object');for(let $ of n){let E=g.aggregations[$];if(!E)throw new Error(`aggregations must include category "${$}"`);let b=d.filter(x=>x.category===$),m=b.length,v=b.reduce((x,S)=>x+S.price*S.stock,0);if(E.count!==m)throw new Error(`Aggregation count for ${$} should be ${m}`);if(Math.abs(E.inventoryValue-v)>1)throw new Error(`Aggregation inventoryValue for ${$} should be ${v}`)}return!0},k=Ro`
    <div class="mb-3">
      <h4>Case Study: StaticShop Product Catalog</h4>
      <p>
        StaticShop is a small e-commerce company that wants to reduce hosting costs by serving their product catalog as
        a static JSON file instead of running a database-backed API. Since their catalog only updates weekly, GitHub
        Pages is perfect for this use case—it's free, fast, and globally distributed via CDN.
      </p>
      <p>
        Create a JSON file hosted on GitHub Pages that serves as a "static API" for their product catalog. Your JSON
        file must include:
      </p>
      <ol>
        <li>
          A <code>metadata</code> object with:
          <ul>
            <li><code>email</code>: <code>${t.email}</code></li>
            <li><code>version</code>: <code>${h}</code></li>
          </ul>
        </li>
        <li>
          A <code>products</code> array with exactly <strong>${l} products</strong>, each having:
          <code>id</code>, <code>name</code>, <code>category</code>, <code>price</code>, <code>stock</code>, and
          <code>rating</code>
        </li>
        <li>
          An <code>aggregations</code> object with pre-computed stats per category. For the
          <code>${r}</code> category, include:
          <ul>
            <li><code>count</code>: number of products in that category (${p})</li>
            <li>
              <code>inventoryValue</code>: sum of (price × stock) for all products in that category
              (${u.toFixed(2)})
            </li>
          </ul>
        </li>
      </ol>
      <p>Here's the product data you must include (generate matching JSON):</p>
      <details>
        <summary>Click to expand product data</summary>
        <pre style="max-height: 300px; overflow: auto"><code>${JSON.stringify(d,null,2)}</code></pre>
      </details>
      <p class="mt-3">
        <label for="${e}" class="form-label">GitHub Pages URL to your JSON file:</label>
        <input
          class="form-control"
          id="${e}"
          name="${e}"
          type="url"
          placeholder="https://username.github.io/repo/catalog.json"
        />
      </p>
      <p class="text-muted">
        Tip: Add <code>?v=1</code> to bust CDN cache if recent changes aren't reflected.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:k,answer:f}}var st,ct=U(()=>{"use strict";st=z(M(),1);ce()});var lt={};O(lt,{default:()=>Po});import{html as Uo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Po({user:t,weight:a=1}){let e="q-github-action",i="Create a GitHub Action",s=async n=>{let o=n.match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);if(!o)throw new Error("URL does not match https://github.com/<user>/<repo>");let[,l,d]=o,r=`https://api.github.com/repos/${l}/${d}/actions/runs`,{workflow_runs:c}=await fetch(r).then(f=>f.json());if(!c?.length)throw new Error("No runs found");let{jobs_url:p}=c[0],{jobs:u}=await fetch(p).then(f=>f.json());for(let{steps:f}of u)for(let{name:k}of f)if(k.includes(t.email))return!0;throw new Error(`No step matches ${t.email}`)},h=Uo`
    <div class="mb-3">
      <p>
        Create a <a href="https://github.com/features/actions">GitHub action</a> on one of your GitHub repositories.
        Make sure one of the steps in the action has a name that contains your email address <code>${t.email}</code>.
        For example:
      </p>
      <pre><code class="language-yaml">
jobs:
  test:
    steps:
      - name: ${t.email}
        run: echo "Hello, world!"
      </code></pre>
      <p>Trigger the action and make sure it is the <strong>most recent action</strong>.</p>
      <p>
        <label for="${e}" class="form-label">
          What is your repository URL? It will look like:
          <code>https://github.com/USER/REPO</code>
        </label>
        <input class="form-control" id="${e}" name="${e}" />
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var dt=U(()=>{"use strict"});var ht={};O(ht,{default:()=>jo});import{html as Ho}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function jo({user:t,weight:a=1}){let e="q-github-action-cache",i="Create a GitHub Action with dependency caching",s=(await K(`${t.email}:gha-cache`)).slice(-7),h=`prime-cache-${s}`,n=async l=>{let d=l.trim().match(/https:\/\/github\.com\/([^/]+)\/([^/]+)/);if(!d)throw new Error("Provide a GitHub repository URL like https://github.com/user/repo");let[,r,c]=d,p=`https://api.github.com/repos/${r}/${c}/actions/runs`,u=await fetch(p);if(!u.ok)throw new Error(`Unable to fetch workflow runs: HTTP ${u.status}`);let{workflow_runs:f}=await u.json();if(!f?.length)throw new Error("No workflow runs found. Trigger the workflow so it appears in runs list.");let k=f[0],w=await fetch(k.jobs_url);if(!w.ok)throw new Error("Unable to fetch job details for the latest run");let{jobs:y}=await w.json(),g=y.flatMap(v=>v.steps??[]).find(v=>v.name?.includes(h));if(!g)throw new Error(`No workflow step named ${h}`);if(g.conclusion!=="success")throw new Error(`Workflow step ${h} did not succeed (status: ${g.conclusion})`);let $=k.path;if(!$)throw new Error("GitHub did not return the workflow path; ensure you're using a normal workflow, not a re-run");let E=k.head_branch??k.run_attempt?.head_branch??"main",b=`https://raw.githubusercontent.com/${r}/${c}/${E}/${$}`,m=await fetch(b).then(v=>{if(!v.ok)throw new Error(`Unable to download workflow file from ${b}`);return v.text()});if(!/actions\/cache@v?\d+/i.test(m))throw new Error("Workflow file must use actions/cache@v4 (or newer) to prime dependencies");if(!m.includes(`key: cache-${s}`))throw new Error(`Cache key cache-${s} not found in workflow file`);return!0},o=Ho`
    <div class="mb-3">
      <p>
        Speed up your CI by adding caching. Create a GitHub Actions workflow in one of your repositories that uses
        <code>actions/cache@v4</code> (or newer) to cache dependencies. Prime the cache with a key named
        <code>cache-${s}</code> and include a step named <code>${h}</code> that echoes the cache hit/miss
        result.
      </p>
      <p>
        Push the workflow, run it once, then share your repository. We'll inspect the most recent run and verify that
        the cache step succeeded.
      </p>
      <label for="${e}" class="form-label">Repository URL</label>
      <input class="form-control" id="${e}" name="${e}" placeholder="https://github.com/user/repo" />
      <p class="form-text text-muted">Keep the latest run public until grading completes.</p>
    </div>
  `;return{id:e,title:i,weight:a,question:o,answer:n}}var ut=U(()=>{"use strict";ce()});var pt={};O(pt,{default:()=>Do});import Oo from"https://cdn.jsdelivr.net/npm/js-yaml@4/+esm";import{html as Wo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Do({user:t,weight:a=1}){let e="q-dependabot-config",i="Configure Dependabot for Security Updates",s=async n=>{n=n.trim();let o;try{o=new URL(n)}catch{throw new Error("Provide a GitHub repository URL like https://github.com/user/repo")}if(o.hostname!=="github.com")throw new Error("Provide a GitHub repository URL like https://github.com/user/repo");let l=o.pathname.replace(/\/+$/,"").split("/").filter(Boolean);if(l.length<2)throw new Error("Provide a GitHub repository URL like https://github.com/user/repo");let d=l[0],r=l[1];r=r.replace(/\.git$/,"");let c=`https://raw.githubusercontent.com/${d}/${r}/main/.github/dependabot.yml`,p=await fetch(c);if(!p.ok){let m=`https://raw.githubusercontent.com/${d}/${r}/HEAD/.github/dependabot.yml`;if(!(await fetch(m)).ok)throw new Error("Could not find .github/dependabot.yml in your repository. Make sure it exists on the main branch.")}let u=await(p.ok?p:fetch(`https://raw.githubusercontent.com/${d}/${r}/HEAD/.github/dependabot.yml`)).then(m=>m.text()),f;try{f=Oo.load(u)}catch(m){throw new Error(`Invalid YAML in dependabot.yml: ${m.message}`)}if(f.version!==2)throw new Error("dependabot.yml must have version: 2");if(!Array.isArray(f.updates)||f.updates.length===0)throw new Error('dependabot.yml must have an "updates" array with at least one entry');let k=f.updates.find(m=>m["package-ecosystem"]==="pip");if(!k)throw new Error('dependabot.yml must have an update entry with package-ecosystem: "pip"');if(!k.schedule||!k.schedule.interval)throw new Error("The pip update entry must have a schedule with an interval");let w=`https://raw.githubusercontent.com/${d}/${r}/main/requirements.txt`,y=await fetch(w);if(!y.ok){let m=`https://raw.githubusercontent.com/${d}/${r}/HEAD/requirements.txt`;if(y=await fetch(m),!y.ok)throw new Error("Could not find requirements.txt in your repository")}let g=(await y.text()).split(`
`).map(m=>m.trim()).filter(m=>m&&!m.startsWith("#")&&!m.startsWith("-"));if(g.length<3)throw new Error(`requirements.txt must have at least 3 dependencies. Found: ${g.length}`);let $=`https://raw.githubusercontent.com/${d}/${r}/main/README.md`,E=await fetch($);if(!E.ok){let m=`https://raw.githubusercontent.com/${d}/${r}/HEAD/README.md`;if(E=await fetch(m),!E.ok)throw new Error("Could not find README.md in your repository")}if(!(await E.text()).includes(t.email))throw new Error(`README.md must contain your email address: ${t.email}`);return!0},h=Wo`
    <div class="mb-3">
      <h4>Case Study: Automated Security Updates</h4>
      <p>
        A production API was using a vulnerable version of the <code>requests</code> library for 6 months. With
        Dependabot configured, they now get automatic PRs within 24 hours of any CVE disclosure, keeping dependencies
        secure without manual monitoring.
      </p>
      <p>Complete the following steps:</p>
      <ol>
        <li>Create a GitHub repository with a Python project.</li>
        <li>
          Add a <code>requirements.txt</code> with at least 3 dependencies (e.g., <code>fastapi</code>,
          <code>requests</code>, <code>pandas</code>).
        </li>
        <li>
          Create <code>.github/dependabot.yml</code> with the following configuration:
          <pre><code class="language-yaml">version: 2
updates:
  - package-ecosystem: "pip"
    directory: "/"
    schedule:
      interval: "weekly"
    commit-message:
      prefix: "deps"</code></pre>
        </li>
        <li>Add a <code>README.md</code> containing <code>${t.email}</code>.</li>
        <li>Push to GitHub.</li>
      </ol>
      <label for="${e}" class="form-label">
        What is your repository URL? It will look like: <code>https://github.com/USER/REPO</code>
      </label>
      <input
        class="form-control"
        id="${e}"
        name="${e}"
        type="url"
        placeholder="https://github.com/user/repo"
        required
      />
      <p class="form-text text-muted">
        We'll verify that <code>.github/dependabot.yml</code> exists with correct structure,
        <code>requirements.txt</code> has at least 3 dependencies, and <code>README.md</code> contains your email.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var mt=U(()=>{"use strict"});var ft={};O(ft,{default:()=>qo});import{html as _o}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function qo({user:t,weight:a=1}){let e="q-docker-hub-image",i="Push an image to Docker Hub",s=async n=>{n=n.trim();let o=n.match(/https:\/\/hub\.docker\.com\/repository\/docker\/([^/]+)\/([^/]+)\//);if(!o)throw new Error("URL does not match https://hub.docker.com/repository/docker/<user>/<repo>/...");let l=`https://hub.docker.com/v2/namespaces/${o[1]}/repositories/${o[2]}/tags`,{results:d}=await fetch(`/proxy/${l}`).then(p=>p.json()),r=d.map(p=>p.name),c=t.email.split("@")[0];if(!r.includes(c))throw new Error(`${c} is not one of the tags in ${l}`);return!0},h=_o`
    <div class="mb-3">
      <p>
        Create and push an image to <a href="https://hub.docker.com/">Docker Hub</a>. Add a tag named
        <code>${t.email.split("@")[0]}</code> to the image.
      </p>
      <label for="${e}" class="form-label">
        What is the Docker image URL? It should look like:
        <code>https://hub.docker.com/repository/docker/$USER/$REPO/general</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" />
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var gt=U(()=>{"use strict"});var yt={};O(yt,{default:()=>Go});import{html as Lo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Go({user:t,weight:a=1}){let e="q-huggingface-docker",i="Publish a Docker Space with environment guardrails",s=(0,wt.default)(`${t.email}#${e}`),h=7e3+Math.floor(s()*500),n=`ga2-${(await K(`${t.email}:hf-space`)).slice(0,6)}`,o=`GA2_TOKEN_${(await K(`${t.email}:hf-secret`)).slice(-4).toUpperCase()}`,l=`deployment-ready-${n}`,d=async c=>{let p=c.trim().replace(/\/$/,"");if(!p.startsWith("https://huggingface.co/spaces/"))throw new Error("Submit the public Hugging Face Spaces URL (https://huggingface.co/spaces/username/space)");let u=p.replace("https://huggingface.co/spaces/","https://huggingface.co/api/spaces/"),f=(x,S={})=>fetch(x,{cache:"no-store",...S,referrerPolicy:"no-referrer"}),k=await f(u).then(x=>{if(!x.ok)throw new Error(`Unable to fetch space metadata (HTTP ${x.status})`);return x.json()});if(k.sdk!=="docker")throw new Error("Space must be configured with the Docker SDK");if(k.private)throw new Error("Space must be public before submitting");if(!k.siblings?.length)throw new Error("Space repository not found. Ensure it is public");let w=k.cardData;if(w?.app_port!==h)throw new Error(`Set app_port to ${h}`);if(w?.title!==n)throw new Error(`Space title should be ${n}`);let y=`${u}/tree/main`,A=await f(y).then(x=>x.json());if(!((x="")=>A.filter(S=>S.path.startsWith(x)).map(S=>({path:S.path,type:S.type})))().some(x=>x.path==="Dockerfile"))throw new Error("Dockerfile missing in space repository");let E=await f(`${c}/raw/main/Dockerfile`).then(x=>x.text());if(!E.includes("USER user"))throw new Error("Dockerfile must switch to non-root user UID 1000");if(!E.includes(`EXPOSE ${h}`))throw new Error(`Dockerfile should expose port ${h}`);if(!/ENV\s+APP_PORT=/.test(E))throw new Error("Dockerfile should set ENV APP_PORT from build arguments or defaults");let b=await f(`${c}/raw/main/requirements.txt`).then(x=>x.text());if(!b.toLowerCase().includes("fastapi"))throw new Error("requirements.txt must include FastAPI");if(!b.toLowerCase().includes("uvicorn"))throw new Error("requirements.txt must include uvicorn");let m=await f(`${c}/raw/main/README.md`).then(x=>x.text());if(!m.includes(l))throw new Error(`README.md must mention ${l}`);if(!new RegExp(`app_port:\\s*${h}`).test(m))throw new Error(`README frontmatter should declare app_port: ${h}`);if(!/sdk:\s*docker/.test(m))throw new Error("README frontmatter should specify sdk: docker");if((k.runtime.hardware.current??"CPU-basic")!=="cpu-basic")throw new Error("Keep the Space on the free CPU Basic tier (hardware should be cpu-basic)");return!0},r=Lo`
    <div class="mb-3">
      <p>
        Containerize the deployment observability API on Hugging Face Spaces using the Docker SDK. The grader verifies
        the repository metadata directly from Hugging Face, so make sure your Space stays public while you submit.
      </p>
      <ol>
        <li>Create a Space named <code>${n}</code> using the Docker SDK (public visibility, CPU Basic tier).</li>
        <li>
          Configure <code>README.md</code> frontmatter with <code>sdk: docker</code>, <code>app_port: ${h}</code>,
          and a description that includes <code>${l}</code>.
        </li>
        <li>
          Author a Dockerfile that:
          <ul>
            <li>Uses <code>python:3.11-slim</code> or equivalent and creates UID 1000 user</li>
            <li>Sets <code>ENV APP_PORT</code> and exposes <code>${h}</code></li>
            <li>Runs <code>uvicorn main:app</code> on the configured port</li>
          </ul>
        </li>
        <li>
          Add <code>requirements.txt</code> with <code>fastapi</code> and <code>uvicorn[standard]</code> (plus any
          extras you need).
        </li>
        <li>In the Space settings, create a secret named <code>${o}</code> with any token value.</li>
      </ol>
      <p>
        When the Space builds successfully, paste the public Space URL below (e.g.
        https://huggingface.co/spaces/user/${n}).
      </p>
      <label for="${e}" class="form-label">Hugging Face Space URL</label>
      <input
        class="form-control"
        id="${e}"
        name="${e}"
        type="url"
        placeholder="https://huggingface.co/spaces/you/${n}"
      />
      <p class="form-text text-muted">Keep the Space public until grading is complete.</p>
    </div>
  `;return{id:e,title:i,weight:a,question:r,answer:d}}var wt,bt=U(()=>{"use strict";wt=z(M(),1);ce()});var vt={};O(vt,{default:()=>No});import{html as Mo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Fo(t){try{return atob(t.replace(/\n/g,""))}catch{throw new Error("Unable to decode devcontainer.json returned by GitHub")}}async function No({user:t,weight:a=1}){let e="q-github-codespaces-devcontainer",i="Configure a Codespace devcontainer",h=`ga2-${(await K(`${t.email}:codespace`)).slice(0,6)}`,n=async l=>{let d=l.trim().split(/\s+/);if(d.length!==2)throw new Error("Submit the repository in owner/repo format followed by a GitHub token (two space-separated parts)");let[r,c]=d;if(!r.includes("/"))throw new Error("Repository should be OWNER/REPO");let p={Authorization:`Bearer ${c}`,Accept:"application/vnd.github+json"},u=await fetch(`https://api.github.com/repos/${r}/codespaces`,{headers:p});if(!u.ok)throw new Error("Unable to list Codespaces for that repo. Keep the codespace running?");let{codespaces:f}=await u.json();if(!f?.length)throw new Error("Create a Codespace for that repository and keep it active while submitting");if(!f.find(g=>g.state==="Available"||g.state==="InProgress"))throw new Error("No active Codespace found (state should be Available)");let w=await fetch(`https://api.github.com/repos/${r}/contents/.devcontainer/devcontainer.json`,{headers:p});if(!w.ok)throw new Error("Unable to fetch .devcontainer/devcontainer.json (did you commit it to the repo?)");let y=await w.json(),A=Fo(y.content);if(!A.includes('"name"'))throw new Error("devcontainer.json should have a name field");if(!A.includes(`"${h}"`))throw new Error(`Set devcontainer name to ${h}`);if(!/ghcr\.io\/devcontainers\/features\/python:1/.test(A))throw new Error("Include the python devcontainer feature to preinstall Python");if(!A.includes("astral-sh.uv"))throw new Error("Install the astral-sh.uv VS Code extension");if(!A.includes("ms-python.python"))throw new Error("Install the ms-python.python VS Code extension");if(!A.includes("postCreateCommand"))throw new Error("Add a postCreateCommand that bootstraps dependencies with uv");if(!A.toLowerCase().includes("uv pip install fastapi"))throw new Error("postCreateCommand should run 'uv pip install fastapi' (or similar) to prime dependencies");return!0},o=Mo`
    <div class="mb-3">
      <p>
        For smoother onboarding, set up a Codespace devcontainer that mirrors the deployment tooling stack. Create or
        use a public repository, add a <code>.devcontainer/devcontainer.json</code>, and ensure it:
      </p>
      <ul>
        <li>Has <code>"name": "${h}"</code></li>
        <li>Uses the <code>ghcr.io/devcontainers/features/python:1</code> feature</li>
        <li>Installs VS Code extensions <code>astral-sh.uv</code> and <code>ms-python.python</code></li>
        <li>Runs a <code>postCreateCommand</code> that primes dependencies via <code>uv pip install fastapi</code></li>
      </ul>
      <p>
        Launch a Codespace from that repository and keep it alive. Then run
        <code>echo $GITHUB_REPOSITORY $GITHUB_TOKEN</code>
        inside the Codespace terminal—the same as an authenticated PAT for the duration of the session. Paste the output
        (two space-separated values) below.
      </p>
      <label for="${e}" class="form-label">Repository slug and token</label>
      <input class="form-control" id="${e}" name="${e}" placeholder="OWNER/REPO ghp_xxx" />
    </div>
  `;return{id:e,title:i,weight:a,question:o,answer:n}}var $t=U(()=>{"use strict";ce()});var kt={};O(kt,{default:()=>zo});import{html as Bo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function zo({user:t,weight:a=1}){let e="q-github-gist",i="Host a file on GitHub Gist",s=async n=>{if(n=n.trim(),new URL(n).hostname!=="gist.github.com")throw new Error("URL should be hosted on gist.github.com");let l=await fetch(`/proxy/${n}`).then(d=>d.text());if(!l.includes(t.email))throw new Error(`${t.email} is not in the response: ${l.slice(0,1e3)}...`);return!0},h=Bo`
    <div class="mb-3">
      <p>
        Publish a file using <a href="https://gist.github.com/">GitHub Gist</a> that showcases your work. Ensure that
        your email address <strong><code>${t.email}</code></strong> is in the page's HTML.
      </p>
      <p>
        What is the GitHub Gist URL? It might look like:
        <code>https://gist.github.com/[USER]/[GIST_ID]</code>
      </p>
      <label for="${e}" class="form-label">
        What is the GitHub Gist URL?
      </label>
      <input class="form-control" id="${e}" name="${e}" />
      <p class="text-muted">
        If a recent change that's not reflected, add <code>?v=1</code>, <code>?v=2</code> to the URL to bust the cache.
        GitHub Gists are served via Cloudflare which obfuscates emails. Find a creative way to include your email in the HTML content of the Gist page so that it can be verified.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var xt=U(()=>{"use strict"});function ge(t,a,e={verbose:!1},i=""){if(!(t===null&&a===null)){if(t===null||a===null)throw new Error(`At ${i||"root"}: Expected ${t}, but got ${a}`);if(typeof t!="object"&&typeof a!="object"){if(t!==a)throw new Error(`At ${i||"root"}: Values don't match`+(e.verbose?`. Expected: ${JSON.stringify(t)}. Actual: ${JSON.stringify(a)}`:""));return}if(Array.isArray(t)!==Array.isArray(a))throw new Error(`At ${i||"root"}: Type mismatch - one is array, other is object`);if(Array.isArray(t)){if(t.length!==a.length)throw new Error(`At ${i||"root"}: Array length mismatch`+(e.verbose?`. Expected: ${t.length}. Actual: ${a.length}`:""));t.forEach((s,h)=>{ge(s,a[h],e,`${i}[${h}]`)})}else{let s=Object.keys(t).sort(),h=Object.keys(a).sort();if(s.length!==h.length)throw new Error(`At ${i||"root"}: Different number of properties`+(e.verbose?`. Expected: ${s.length}. Actual: ${h.length}`:""));for(let n=0;n<s.length;n++)if(s[n]!==h[n])throw new Error(`At ${i||"root"}: Property name mismatch`+(e.verbose?`. Expected: ${JSON.stringify(s[n])}. Actual: ${JSON.stringify(h[n])}`:""));s.forEach(n=>{ge(t[n],a[n],e,i?`${i}.${n}`:n)})}}}var At=U(()=>{"use strict"});var Et,St=U(()=>{"use strict";Et=(t,a,e)=>{let i=Array.from({length:t},(h,n)=>({studentId:n+1,class:`${Math.floor(e()*12)+1}${String.fromCharCode(65+Math.floor(e()*26))}`})),s=i.flatMap(h=>Array.from({length:Math.floor(e()*a)+1},(n,o)=>({studentId:h.studentId,subject:`Subject #${o+1}`})));return{students:i,subjects:s}}});var It={};O(It,{default:()=>Vo});import{html as Jo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function Vo({user:t,weight:a=1}){let e="q-fastapi",i="Write a FastAPI server to serve data",s=(0,Ct.default)(`${t.email}#${e}`),{students:h}=Et(2e3,400,s),n=`studentId,class
`+h.map(c=>`${c.studentId},${c.class}`).join(`
`),o=new Blob([n],{type:"text/csv"}),l=[...new Set(h.map(c=>c.class))],d=async c=>{if(!c)throw new Error("URL is required");let p=new URLSearchParams,u=l.sort(()=>.5-Math.random()).slice(0,4);u.forEach(w=>p.append("class",w));let f=await fetch(`${c}?${p.toString()}`).then(w=>w.json()),k=h.filter(w=>u.includes(w.class));return ge(f.students,k),!0},r=Jo`
    <div class="mb-3">
      <p>
        Download
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>J(o,`${e}.csv`)}>
          ${e}.csv</button
        >. This file has 2-columns:
        <ol>
          <li>studentId: A unique identifier for each student, e.g. 1, 2, 3, ...</li>
          <li>class: The class (including section) of the student, e.g. 1A, 1B, ... 12A, 12B, ... 12Z</li>
        </ol>
      </p>
      <p>
        Write a FastAPI server that serves this data. For example, <code>/api</code> should return all students data
        (in the same row and column order as the CSV file) as a JSON like this:
      </p>
      <pre><code class="language-json">{
  "students": [
    {
      "studentId": 1,
      "class": "1A"
    },
    {
      "studentId": 2,
      "class": "1B"
    }, ...
  ]
}</code></pre>
      <p>
        If the URL has a query parameter <code>class</code>, it should return only students in those classes. For example,
        <code>/api?class=1A</code> should return only students in class 1A.
        <code>/api?class=1A&class=1B</code> should return only students in class 1A and 1B.
        There may be any number of classes specified.
        Return students in the same order as they appear in the CSV file (not the order of the classes).
      </p>
      <p>Make sure you enable <strong>CORS</strong> to allow GET requests from any origin.</p>
      <label for="${e}" class="form-label">
        What is the API URL endpoint for FastAPI? It might look like:
        <code>http://127.0.0.1:8000/api</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" type="url" required/>
      <p class="text-muted">
        We'll check by sending a request to this URL with <code>?class=...</code> added
        and check if the response matches the data.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:r,answer:d}}var Ct,Rt=U(()=>{"use strict";Ct=z(M(),1);ee();At();St()});var Ht={};O(Ht,{default:()=>Yo});import{html as Ko}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Xo(t,a){let e=[...t].sort((n,o)=>n-o),i=(e.length-1)*a,s=Math.floor(i),h=i-s;return e[s+1]!==void 0?e[s]+h*(e[s+1]-e[s]):e[s]}async function Yo({user:t,weight:a=1}){let e="q-vercel-latency",i="Deploy a POST analytics endpoint to Vercel",s=(0,Pt.default)(`${t.email}#${e}`),h=[];for(let c of Tt)for(let p=0;p<12;p++){let u=Ut[Math.floor(s()*Ut.length)],f=110+s()*120,k=(s()-.5)*25,w=+(f+k).toFixed(2),y=+(97.1+s()*2.4).toFixed(3);h.push({region:c,service:u,latency_ms:w,uptime_pct:y,timestamp:20250301+p})}let n={regions:Tt.sort(()=>.5-s()).slice(0,2),threshold_ms:Math.round(150+s()*40)},o=new Blob([JSON.stringify(h,null,2)],{type:"application/json"}),l=n.regions.map(c=>{let p=h.filter(w=>w.region===c),u=p.map(w=>w.latency_ms),f=p.map(w=>w.uptime_pct),k=p.filter(w=>w.latency_ms>n.threshold_ms).length;return{region:c,avg_latency:Number((u.reduce((w,y)=>w+y,0)/u.length).toFixed(2)),p95_latency:Number(Xo(u,.95).toFixed(2)),avg_uptime:Number((f.reduce((w,y)=>w+y,0)/f.length).toFixed(3)),breaches:k}}),d=async c=>{if(c=c.trim(),!new URL(c).hostname.includes("vercel.app"))throw new Error("Deploy to Vercel so the hostname ends with vercel.app");let u=await fetch(c,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!u.ok)throw new Error(`Server returned HTTP ${u.status}`);if(u.headers.get("access-control-allow-origin")!=="*")throw new Error("Enable CORS with Access-Control-Allow-Origin: *");let k=await u.json(),w=Array.isArray(k.regions)?k.regions:k.regions&&typeof k.regions=="object"?Object.keys(k.regions).map(y=>({region:y,...k.regions[y]})):null;if(!w)throw new Error("Response should include a regions array or object");for(let y of l){let A=w.find(v=>(v.region??v.name??v.id)===y.region);if(!A)throw new Error(`Missing stats for region ${y.region}`);let g=v=>typeof v=="number"?v:Number(v),$=g(A.avg_latency??A.average_latency),E=g(A.p95_latency??A.p95),b=g(A.avg_uptime??A.uptime),m=g(A.breaches??A.violation_count);if(!Number.isFinite($)||Math.abs($-y.avg_latency)>.5)throw new Error(`avg_latency for ${y.region} should be ${y.avg_latency}`);if(!Number.isFinite(E)||Math.abs(E-y.p95_latency)>.5)throw new Error(`p95_latency for ${y.region} should be ${y.p95_latency}`);if(!Number.isFinite(b)||Math.abs(b-y.avg_uptime)>.2)throw new Error(`avg_uptime for ${y.region} should be ${y.avg_uptime}`);if(!Number.isFinite(m)||m!==y.breaches)throw new Error(`breaches for ${y.region} should be ${y.breaches}`)}return!0},r=Ko`
    <div class="mb-3">
      <p>
        eShopCo streams latency pings from every storefront to a small FastAPI service. Product managers want a
        serverless endpoint they can call from dashboards to check whether a deployment stays under target latency.
      </p>
      <p>
        Download the sample telemetry bundle
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>J(o,`${e}.json`)}>
          ${e}.json
        </button>
        and deploy a Python endpoint on <strong>Vercel</strong>.
      </p>
      <p>Your endpoint must:</p>
      <ul>
        <li>Accept a <code>POST</code> request with JSON body <code>{"regions": [...], "threshold_ms": 180}</code></li>
        <li>
          Return per-region metrics: <code>avg_latency</code> (mean), <code>p95_latency</code> (95th percentile),
          <code>avg_uptime</code> (mean), and <code>breaches</code> (count of records above threshold)
        </li>
        <li>Enable CORS for <code>POST</code> requests from any origin</li>
      </ul>
      <p>
        We'll send <code>${JSON.stringify(n)}</code> to your endpoint and verify the response (order doesn't
        matter).
      </p>
      <label for="${e}" class="form-label">What is the POST endpoint URL?</label>
      <input class="form-control" id="${e}" name="${e}" placeholder="https://your-app.vercel.app/api/latency" />
    </div>
  `;return{id:e,title:i,weight:a,question:r,answer:d}}var Pt,Tt,Ut,jt=U(()=>{"use strict";Pt=z(M(),1);ee();Tt=["apac","emea","amer"],Ut=["checkout","catalog","analytics","recommendations","payments","support"]});var Dt={};O(Dt,{default:()=>nr});import{html as Qo}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function nr({user:t,weight:a=1.5}){let e="q-cloudflare-workers",i="Cloudflare Workers Serverless Deployment",s=(0,Wt.default)(`${t.email}#${e}`),n=L(or,s)(s),o=Qo`
    <div class="mb-3">
      <h4>Case Study: Deploying Serverless Functions with Cloudflare Workers</h4>
      <p>
        <strong>Scenario:</strong> Your team needs a lightweight, globally distributed serverless endpoint for
        processing data transformations. Cloudflare Workers provide edge computing capabilities with minimal latency.
        You must deploy a Worker that processes POST requests and returns transformed data.
      </p>
      <ol>
        <li>
          Create and deploy a Cloudflare Worker with a <code>POST /data</code> route using
          <a href="https://developers.cloudflare.com/workers/" target="_blank">Cloudflare Workers</a>.
        </li>
        <li>
          The endpoint should accept JSON with <code>{ "type": "...", "value": ... }</code> and return
          <code>{ "reversed": ..., "email": "${t.email}" }</code>.
        </li>
        <li>
          Based on the <code>type</code> field:
          <ul>
            <li><code>"string"</code>: Reverse the characters of the string value</li>
            <li><code>"array"</code>: Reverse the order of array elements</li>
            <li><code>"words"</code>: Reverse the order of words in the string</li>
            <li><code>"number"</code>: Reverse the digits of the number (return as integer)</li>
          </ul>
        </li>
        <li>Ensure CORS headers allow cross-origin POST requests.</li>
      </ol>
      <p>
        For grading, we will POST this data:
        <code class="d-block my-2">${JSON.stringify(n.payload)}</code>
      </p>
      <label for="${e}" class="form-label"
        >Enter the full URL of your Worker endpoint (e.g., <code>https://your-worker.your-subdomain.workers.dev/data</code>)</label
      >
      <input class="form-control" id="${e}" name="${e}" type="url" />
      <p class="text-muted">
        We'll POST to your endpoint, expect <code>application/json</code> response with <code>reversed</code> and
        <code>email</code> fields, and verify the output matches ${n.summary}.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:o,answer:async d=>{if(!d)throw new Error("URL is required");if(!d.startsWith("http://")&&!d.startsWith("https://"))throw new Error("URL must start with http:// or https://");if(!d.includes(".workers.dev"))throw new Error("URL must be a Cloudflare Workers endpoint (ending with .workers.dev)");let r=await fetch(d,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n.payload)});if(!r.ok)throw new Error(`Endpoint returned ${r.status} ${r.statusText}, expected 200 OK`);if(!(r.headers.get("content-type")||"").includes("application/json"))throw new Error("Response must be application/json");let p;try{p=await r.json()}catch{throw new Error("Response body is not valid JSON")}if(!p||typeof p!="object")throw new Error("Response must be a JSON object");if(p.email!==t.email)throw new Error("Email must match your registered email address");let u=rr(p);return n.validate(u),!0}}}var Wt,te,Ot,Zo,er,tr,or,rr,_t=U(()=>{"use strict";Wt=z(M(),1);se();te=(t,a,e)=>Math.floor(t()*(e-a+1))+a,Ot=(t,a)=>{let e="abcdefghijklmnopqrstuvwxyz",i="";for(let s=0;s<a;s++)i+=e[Math.floor(t()*e.length)];return i},Zo=(t,a)=>{let e=[];for(let i=0;i<a;i++)e.push(te(t,1,100));return e},er=t=>t.split("").reverse().join(""),tr=t=>[...t].reverse(),or=[t=>{let a=Ot(t,te(t,8,15)),e=er(a);return{id:`reverse-string-${a}`,description:`Reverse the string "${a}"`,payload:{type:"string",value:a},validate:i=>{if(i.reversed!==e)throw new Error(`Expected reversed string "${e}", got "${i.reversed}"`)},summary:"the reversed string"}},t=>{let a=Zo(t,te(t,5,10)),e=tr(a);return{id:`reverse-array-${a.join("-")}`,description:`Reverse the array [${a.join(", ")}]`,payload:{type:"array",value:a},validate:i=>{let s=i.reversed;if(!Array.isArray(s))throw new Error("Expected reversed to be an array");if(s.length!==e.length)throw new Error(`Expected array length ${e.length}, got ${s.length}`);for(let h=0;h<e.length;h++)if(s[h]!==e[h])throw new Error(`Expected ${e[h]} at index ${h}, got ${s[h]}`)},summary:"the reversed array"}},t=>{let a=[],e=te(t,3,6);for(let h=0;h<e;h++)a.push(Ot(t,te(t,4,8)));let i=a.join(" "),s=a.reverse().join(" ");return{id:`reverse-words-${a.length}`,description:`Reverse the order of words in "${i}"`,payload:{type:"words",value:i},validate:h=>{if(h.reversed!==s)throw new Error(`Expected "${s}", got "${h.reversed}"`)},summary:"the words in reversed order"}},t=>{let a=te(t,1e3,99999),e=parseInt(String(a).split("").reverse().join(""),10);return{id:`reverse-digits-${a}`,description:`Reverse the digits of the number ${a}`,payload:{type:"number",value:a},validate:i=>{if(i.reversed!==e)throw new Error(`Expected ${e}, got ${i.reversed}`)},summary:"the number with reversed digits"}}],rr=t=>{if(!t||typeof t!="object")throw new Error("Response must be a JSON object with 'reversed' field");if(!("reversed"in t))throw new Error("Response must include 'reversed' field");return t}});var Lt={};O(Lt,{default:()=>sr});import{html as ar}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function sr({user:t,weight:a=1}){let e="q-cloudflared-tunnel",i="Create a Public Tunnel with cloudflared",s=(0,qt.default)(`${t.email}#${e}`),n=L([8e3,8080,3e3,5e3,5500],s),o=async d=>{d=d.trim();let r;try{r=new URL(d.startsWith("http")?d:`https://${d}`)}catch{throw new Error("Invalid URL format")}if(!r.hostname.endsWith(".trycloudflare.com"))throw new Error("URL must be a trycloudflare.com tunnel (e.g., https://random-words.trycloudflare.com)");r.protocol!=="https:"&&(r.protocol="https:");let c=await fetch(`/proxy/${r.href}`);if(!c.ok)throw new Error(`HTTP request failed with status ${c.status}. Make sure your local server is running and the cloudflared tunnel is active.`);let p=await c.text();if(!p||p.length===0)throw new Error("The tunnel returned an empty response. Make sure your local server is serving content.");return!0},l=ar`
    <div class="mb-3">
      <h4>Case Study: Secure Internal Dashboard Access</h4>
      <p>
        A company wants to securely expose an internal dashboard to the public internet for remote employees. Instead
        of dealing with complex firewall rules and exposing the server directly, they use a Cloudflare Tunnel. This
        creates a secure, outbound-only connection from their server to the Cloudflare network, making the dashboard
        safely accessible from a public URL.
      </p>
      <p>Complete the following steps:</p>
      <ol>
        <li>
          Start a simple local web server on port ${n}. For example, you can create an <code>index.html</code> file and
          run:
          <pre><code>python3 -m http.server ${n}</code></pre>
        </li>
        <li>
          Use the <code>cloudflared</code> command to create a "quick tunnel" to your local server on port ${n}:
          <pre><code>cloudflared tunnel --url http://localhost:${n}</code></pre>
        </li>
        <li>
          <code>cloudflared</code> will provide you with a public URL for your tunnel, which will end in
          <code>.trycloudflare.com</code>.
        </li>
      </ol>
      <label for="${e}" class="form-label">
        What is the public URL of your cloudflared tunnel? It will look like:
        <code>https://random-words.trycloudflare.com</code>
      </label>
      <input
        class="form-control"
        id="${e}"
        name="${e}"
        type="url"
        placeholder="https://random-words.trycloudflare.com"
        required
      />
      <p class="form-text text-muted">
        We'll make an HTTP GET request to your tunnel URL and verify it returns content from your local server.
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:l,answer:o}}var qt,Gt=U(()=>{"use strict";qt=z(M(),1);se()});var Mt={};O(Mt,{default:()=>cr});import{html as ir}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function cr({user:t,weight:a=1}){let e="q-localtunnel",i="Create a localtunnel tunnel",s=async n=>{n=n.trim();let o=new URL(n);if(!o.hostname.includes("localtunnel")&&!o.hostname.includes("loca.lt"))throw new Error("URL should be hosted on localtunnel (e.g., loca.lt domain)");let l=await fetch(`/proxy/${n}`,{headers:{"bypass-tunnel-reminder":"1"}}).then(d=>d.text());if(!l.match(t.email))throw new Error(`${t.email} is not in the response: ${l.slice(0,1e3)}...`);return!0},h=ir`
    <div class="mb-3">
      <p>
        Create a <a href="https://theboroer.github.io/localtunnel-www/">localtunnel</a> tunnel to your local server.
        Set up a URL that will serve your email address <code>${t.email}</code>.
      </p>
      <label for="${e}" class="form-label">
        What is the localtunnel URL? It might look like:
        <code>https://[random].loca.lt/...</code>
      </label>
      <input class="form-control" id="${e}" name="${e}" type="url" required />
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var Ft=U(()=>{"use strict"});var Bt={};O(Bt,{default:()=>dr});import{html as lr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function dr({user:t,weight:a=1}){let e="q-fastapi-file-validation",i="Build a FastAPI File Validation Service",s=(0,Nt.default)(`${t.email}#${e}`),h=[".csv",".json",".txt"],n=50+Math.floor(s()*50),o=`X-Upload-Token-${Math.floor(s()*9e3+1e3)}`,l=Array.from({length:16},()=>"abcdefghijklmnopqrstuvwxyz0123456789"[Math.floor(s()*36)]).join(""),d=["id","name","value","category"],r=[],c=20+Math.floor(s()*30),p=["A","B","C","D"];for(let g=0;g<c;g++)r.push({id:g+1,name:`Item_${String(g+1).padStart(3,"0")}`,value:Math.round(s()*1e3*100)/100,category:p[Math.floor(s()*p.length)]});let u=Math.round(r.reduce((g,$)=>g+$.value,0)*100)/100,f={};for(let g of r)f[g.category]=(f[g.category]||0)+1;let k=[d.join(","),...r.map(g=>d.map($=>g[$]).join(","))].join(`
`),w=new Blob([k],{type:"text/csv"}),y=async g=>{g=g.trim().replace(/\/$/,"");let $=new FormData;if($.append("file",new Blob(["test"],{type:"text/plain"}),"test.txt"),(await fetch(g,{method:"POST",body:$})).ok)throw new Error(`Request without ${o} header should be rejected (401 or 403)`);let b=new FormData;if(b.append("file",new Blob(["test"],{type:"application/pdf"}),"test.pdf"),(await fetch(g,{method:"POST",headers:{[o]:l},body:b})).ok)throw new Error("PDF files should be rejected (only .csv, .json, .txt allowed)");let v="x".repeat(150*1024),x=new FormData;if(x.append("file",new Blob([v],{type:"text/plain"}),"large.txt"),(await fetch(g,{method:"POST",headers:{[o]:l},body:x})).ok)throw new Error(`Files larger than ${n}KB should be rejected`);let P=new FormData;P.append("file",w,"data.csv");let R=await fetch(g,{method:"POST",headers:{[o]:l},body:P});if(!R.ok)throw new Error(`Valid CSV upload failed: HTTP ${R.status}`);if(R.headers.get("access-control-allow-origin")!=="*")throw new Error("Enable CORS with Access-Control-Allow-Origin: *");let T;try{T=await R.json()}catch{throw new Error("Response must be valid JSON")}if(T.email!==t.email)throw new Error(`Response must include email: "${t.email}"`);if(T.filename!=="data.csv")throw new Error('Response must include the original filename as "filename"');if(T.rows!==c)throw new Error(`Response should report ${c} rows`);if(!T.columns||!d.every(W=>T.columns.includes(W)))throw new Error(`Response should list columns: ${d.join(", ")}`);if(Math.abs(T.totalValue-u)>.5)throw new Error(`Sum of "value" column should be ${u}`);if(!T.categoryCounts)throw new Error("Response should include categoryCounts object");for(let[W,F]of Object.entries(f))if(T.categoryCounts[W]!==F)throw new Error(`Category ${W} should have count ${F}`);return!0},A=lr`
    <div class="mb-3">
      <h4>Case Study: SecureUpload Data Processor</h4>
      <p>
        SecureUpload processes CSV files from various departments. Before processing, files must be validated for
        security (size limits, file type checks) and authenticity (API token). Invalid uploads should be rejected with
        appropriate error codes.
      </p>

      <h5>Your Task</h5>
      <p>
        Create a FastAPI endpoint that validates and processes file uploads. Download this test file:
        <button class="btn btn-sm btn-outline-primary" type="button" @click=${()=>J(w,`${e}.csv`)}>
          ${e}.csv
        </button>
      </p>

      <h5>Validation Rules</h5>
      <ul>
        <li>
          <strong>Authentication:</strong> Require header <code>${o}: ${l}</code>
          <br />Return <code>401 Unauthorized</code> if missing or wrong
        </li>
        <li>
          <strong>File type:</strong> Only accept <code>${h.join(", ")}</code>
          <br />Return <code>400 Bad Request</code> for other types
        </li>
        <li>
          <strong>File size:</strong> Maximum <code>${n}KB</code>
          <br />Return <code>413 Payload Too Large</code> if exceeded
        </li>
      </ul>

      <h5>Success Response</h5>
      <p>For valid CSV uploads, analyze the file and return:</p>
      <pre><code class="language-json">{
  "email": "${t.email}",
  "filename": "data.csv",
  "rows": ${c},
  "columns": ["id", "name", "value", "category"],
  "totalValue": ${u},
  "categoryCounts": ${JSON.stringify(f)}
}</code></pre>

      <h5>Requirements</h5>
      <ul>
        <li>Enable CORS for POST requests from any origin</li>
        <li>Accept file via <code>multipart/form-data</code> with field name <code>file</code></li>
        <li>Parse CSV and compute statistics</li>
      </ul>

      <label for="${e}" class="form-label">Your FastAPI endpoint URL:</label>
      <input class="form-control" id="${e}" name="${e}" type="url" placeholder="http://127.0.0.1:8000/upload" />
    </div>
  `;return{id:e,title:i,weight:a,question:A,answer:y}}var Nt,zt=U(()=>{"use strict";Nt=z(M(),1);ee()});var Jt={};O(Jt,{default:()=>pr});import hr from"https://cdn.jsdelivr.net/npm/jwt-decode@3/build/jwt-decode.esm.js";import{html as ur}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function pr({user:t,weight:a=1}){let e="q-google-oauth-fastapi",i="FastAPI Google OAuth Login Verification",s=async n=>{let o;try{o=JSON.parse(n)}catch{throw new Error("Submit a valid JSON object")}let{id_token:l,client_id:d}=o;if(typeof l!="string"||!l)throw new Error("Missing or invalid id_token");if(typeof d!="string"||!d)throw new Error("Missing or invalid client_id");let r;try{r=hr(l)}catch{throw new Error("Failed to decode JWT")}if(r.iss!=="https://accounts.google.com")throw new Error(`Unexpected issuer: ${r.iss}`);if(r.aud!==d)throw new Error(`Audience ${r.aud} does not match client_id`);if(!r.email_verified)throw new Error("email_verified is not true");if(r.email!==t.email)throw new Error(`Logged-in email ${r.email} does not match expected ${t.email}`);let c=Math.floor(Date.now()/1e3);if(r.exp<=c)throw new Error("Token has already expired");return!0},h=ur`
    <div class="mb-3">
      <h4>Case Study: eShopCo Staff Portal Login</h4>
      <p>eShopCo is a fast-growing e-commerce company that uses Google Workspace to manage all staff accounts. They want a secure, password-less portal where employees can:</p>
      <ol>
        <li>View real-time sales dashboards  </li>
        <li>Update inventory levels  </li>
        <li>Manage customer support tickets  </li>
      </ol>
      <p>Rather than building and maintaining yet another username/password system, they’ve chosen to integrate Google SSO (OpenID Connect) via FastAPI.</p>
      <p><strong>Why This Matters</strong>  </p>
      <ul>
        <li><strong>Security &amp; UX</strong>: Google SSO reduces password fatigue, phishing risk, and support overhead.  </li>
        <li><strong>Industry Standard</strong>: OAuth/OpenID Connect is the go-to approach for modern web apps.  </li>
        <li><strong>Hands-On</strong>: You’ll see firsthand how tokens, sessions, and redirects work together.</li>
      </ul>
      <p>As an eShopCo developer, you’ll build a minimal FastAPI application that:</p>
      <ol>
        <li><strong>Redirects</strong> unauthenticated users to Google’s login page</li>
        <li><strong>Handles</strong> the OAuth callback, exchanges the code for tokens</li>
        <li><strong>Stores</strong> the returned <code>id_token</code> in session</li>
        <li><strong>Exposes</strong> an <code>/id_token</code> endpoint that returns the raw <code>id_token</code> as JSON  </li>
      </ol>
      <p>Then, log in as <code>${t.email}</code> and note the <code>id_token</code>.</p>
      <p><strong>Create</strong> the Google Client ID with your <em>personal</em> Google account. <strong>Log in</strong> with the same email ID you've used on this page.</p>
      <p>Submit below as JSON:</p>
      <pre><code>{
  "id_token": "eyJ...",
  "client_id": "YOUR_CLIENT_ID"
}</code></pre>
      <textarea
        class="form-control font-monospace"
        rows="6"
        id="${e}"
        name="${e}"
        placeholder='{"id_token":"...","client_id":"..."}'
      ></textarea>
      <p class="form-text text-muted">
        We’ll decode your <code>id_token</code> with <code>jwt_decode</code> and check:
        <ul>
          <li>Your <code>iss</code> is <code>https://accounts.google.com</code></li>
          <li><code>aud</code> matches your <code>client_id</code></li>
          <li><code>email_verified</code> is <code>true</code></li>
          <li><code>email</code> exactly matches <strong>${t.email}</strong></li>
          <li><code>exp</code> is still in the future</li>
        </ul>
      </p>
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var Vt=U(()=>{"use strict"});var Kt={};O(Kt,{default:()=>fr});import{html as mr}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";async function fr({user:t,weight:a=1}){let e="q-ollama",i="Local Ollama Endpoint",s=async n=>{if(n=n.trim(),!new URL(n).hostname.includes("ngrok"))throw new Error("URL must be an ngrok forwarding domain");let l=await fetch(`${n.replace(/\/$/,"")}/api/version`,{headers:{"ngrok-skip-browser-warning":!0}});if(!(await l.json()).version)throw new Error("Server is not running Ollama");let r=l.headers.get("x-email");if(r!==t.email)throw new Error(`X-Email header mismatch; expected ${t.email} but got ${r}`);return!0},h=mr`
    <div class="mb-3">
      <h4>Case Study: eShopCo AI Chat Diagnostics</h4>
      <p>
        eShopCo operates a local Ollama instance (<code>http://localhost:11434</code>) to power our internal AI chat
        assistant. To allow remote diagnostics and frontend integration, you need to:
      </p>
      <ol>
        <li>
          <strong>Enable CORS</strong> for Ollama. Set the environment variable <code>OLLAMA_ORIGINS="*"</code>. Then
          run Ollama. For example:
          <pre><code>export OLLAMA_ORIGINS="*"
ollama serve</code></pre>
        </li>
        <li>
          <strong>Expose</strong> it via ngrok, injecting your email in the header:
          <pre><code>ngrok http 11434 --response-header-add "X-Email: ${t.email}" --response-header-add 'Access-Control-Expose-Headers: *' --response-header-add 'Access-Control-Allow-Headers: Authorization,Content-Type,User-Agent,Accept,Ngrok-skip-browser-warning'</code></pre>
        </li>
        <li>Note the HTTPS forwarding URL that ngrok prints (e.g. <code>https://abcd1234.ngrok-free.app</code>).</li>
        <li>
          <strong>Verify</strong> via a simple fetch (or curl) that:
          <ul>
            <li>CORS header <code>Access-Control-Allow-Origin: *</code> is present</li>
            <li>Your <code>X-User-Email</code> header is echoed</li>
            <li>The JSON body looks like a valid Ollama response</li>
          </ul>
        </li>
      </ol>
      <label for="${e}" class="form-label"> Paste your ngrok forwarding URL here: </label>
      <input
        class="form-control"
        id="${e}"
        name="${e}"
        type="url"
        placeholder="https://abcd1234.ngrok-free.app"
        required
      />
      <p class="form-text text-muted">We’ll automatically fetch and verify the response headers and body.</p>
    </div>
  `;return{id:e,title:i,weight:a,question:h,answer:s}}var Xt=U(()=>{"use strict"});import{html as ae,render as ro}from"https://cdn.jsdelivr.net/npm/lit-html@3/lit-html.js";function Ie(t,a){let e=ae`<ol class="mt-3">
    ${t.map(({id:h,title:n,weight:o})=>ae`<li><a href="#h${h}">${n}</a> (${o} ${o==1?"mark":"marks"})</li>`)}
  </ol>`,i=[ae`<h1 class="display-6">Questions</h1>`,e,...t.map(({id:h,title:n,weight:o,question:l,help:d},r)=>(d&&!Array.isArray(d)&&(d=[d]),ae`
        <div class="card my-5" data-question="${h}" id="h${h}">
          <div class="card-header">
            <span class="badge text-bg-primary me-2">${r+1}</span>
            ${n} (${o} ${o==1?"mark":"marks"})
          </div>
          ${d?d.map(c=>ae`<div class="card-body border-bottom">${c}</div>`):""}
          <div class="card-body">${l}</div>
          <div class="card-footer d-flex">
            <button type="button" class="btn btn-primary check-answer" data-question="${h}">Check</button>
          </div>
        </div>
      `))],s={index:e,questions:i};for(let[h,n]of a)ro(s[n],h)}import{unsafeHTML as no}from"https://cdn.jsdelivr.net/npm/lit-html@3/directives/unsafe-html.js";import{Marked as ao}from"https://cdn.jsdelivr.net/npm/marked@13/+esm";var Re="https://tds.s-anand.net",Te=t=>t&&!t.match(/^(https?|mailto):/),so=new ao({renderer:{image(t,a,e){return Te(t)&&(t=`${Re}/${t}`),`<img src="${t}" alt="${e}" ${a?`title="${a}"`:""} class="img-fluid">`},link(t,a,e){return Te(t)&&(t=`${Re}/${t.endsWith(".md")?`#/${t.replace(/\.md$/,"")}`:t}`),`<a href="${t}" ${a?`title="${a}"`:""} target="_blank">${e}</a>`}}}),j=t=>no(so.parse(t));async function An(t,a){let e=[{...await Promise.resolve().then(()=>(Xe(),Ke)).then(i=>i.default({user:t,weight:.5})),help:[j(`
### Ask AI

- [Why bother compressing images? Or rather, when is it worth the effort? Is there a decision tree I could use?](#askai)
- [What are the best modern formats and settings for image compression?](#askai)
- [What are the best tools/libraries for modern image compression?](#askai)
`)]},{...await Promise.resolve().then(()=>(Ze(),Qe)).then(i=>i.default({user:t,weight:1.5})),help:[j(`
### Ask AI

- [How do I prevent accidentally committing secrets into a Git repository?](#askai)
- [What are the ways of "undo"-ing a commit/push in Git, and which do I use when?](#askai)
- [How do I rewrite my git commits, just removing or modifying one commit? What if I already pushed it?](#askai)
`)]},{...await Promise.resolve().then(()=>(rt(),ot)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI
- [How does Git store files and commits under the hood? Explain objects, trees, commits, and how they relate.](#askai)
- [How do I create Git objects (blobs, trees, commits) manually? Can I create a Git repository from scratch without using Git commands?](#askai)
- [How do I rewrite Git history by creating new commits that modify or remove old commits? What are the implications of doing this, especially if I've already pushed to a remote repository?](#askai)
`)]},{...await Promise.resolve().then(()=>(at(),nt)).then(i=>i.default({user:t,weight:.5})),help:[j(`
### Ask AI

- [What is GitHub Pages? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How does GitHub Pages work? What limitations/gotchas should I know about - and what does it mean for me?](#askai)
- [What are the most common issues people face with GitHub Pages? How can I monitor/troubleshoot them?](#askai)
`)]},{...await Promise.resolve().then(()=>(ct(),it)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [Can I use GitHub Pages as a simple JSON API? What are the trade-offs vs a real backend?](#askai)
- [When using GitHub pages to serve static data like an API, how best could I structure the files and pre-compute data for efficient loading, querying and caching?](#askai)
`)]},{...await Promise.resolve().then(()=>(dt(),lt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is GitHub Actions? Explain workflows, jobs, steps, runners, and their interactions using an analogy.](#askai)
- [What useful, interesting things can I do with GitHub Actions? How do experts get the most out of it?](#askai)
- [What are the most common issues people face with GitHub Actions? How can I monitor/troubleshoot them?](#askai)
`)]},{...await Promise.resolve().then(()=>(ut(),ht)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What's caching in GitHub Actions? How do I use it, and when/what should I NOT cache?](#askai)
- [In GitHub Actions, how do we control what to cache and for how long? What else can I control?](#askai)
- [How do I bust the GitHub Actions cache? What other issues do people face with it? How can I monitor/troubleshoot them?](#askai)
`)]},{...await Promise.resolve().then(()=>(mt(),pt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is Dependabot? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [When is it OK to ignore Dependabot alerts? When (and why) do people often ignore them when they shouldn't?](#askai)
- [What are the most useful, popular scenarios where people customize Dependabot configurations, and how do they customize?](#askai)
`)]},{...await Promise.resolve().then(()=>(gt(),ft)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is Docker? What are popular, modern alternatives? Give me a decision tree on what to use when and what's Docker-compatible.](#askai)
- [What are cool, useful things I can do with Docker (locally) that I should know, as a data scientist, and how do I do them?](#askai)
- [What is Docker Hub? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [What are cool, useful things I can do with Docker Hub that I should know, as a data scientist, and how do I do them?](#askai)
`)]},{...await Promise.resolve().then(()=>(bt(),yt)).then(i=>i.default({user:t,weight:1.5})),help:[j(`
### Ask AI

- [What is Hugging Face Spaces? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How does Docker work in Hugging Face Spaces? What limitations/gotchas should I know about - and what does it mean for me?](#askai)
- [How do I speed up Docker on HuggingFace Spaces? How do I access API keys and secrets?](#askai)
`)]},{...await Promise.resolve().then(()=>($t(),vt)).then(i=>i.default({user:t,weight:.5})),help:[j(`
### Ask AI

- [What is a DevContainer in GitHub Codespaces and why would I use it? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How do I access DevContainers in GitHub Codespaces? What are common issues and troubleshooting tips?](#askai)
- [Today, for a data scientist using modern tools, what devcontainer.json setup would you recommend and why? What's changed since last year?](#askai)
`)]},{...await Promise.resolve().then(()=>(xt(),kt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is GitHub Gist? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How does GitHub Gist work? What limitations/gotchas should I know about - and what does it mean for me?](#askai)
- [What are the most common issues people face with GitHub Gist? How can I monitor/troubleshoot them?](#askai)
`)]},{...await Promise.resolve().then(()=>(Rt(),It)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is FastAPI and why would I use it? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [Show me some things that seem magical when using FastAPI - with examples!](#askai)
- [What is CORS and how do I enable it in FastAPI applications?](#askai)
`)]},{...await Promise.resolve().then(()=>(jt(),Ht)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is Vercel? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How does Vercel work? What limitations/gotchas should I know about - and what does it mean for me?](#askai)
- [What are the most common issues people face with Vercel? How can I monitor/troubleshoot them?](#askai)
`)]},{...await Promise.resolve().then(()=>(_t(),Dt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is Cloudflare Workers? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How does Cloudflare Workers work? What limitations/gotchas should I know about - and what does it mean for me?](#askai)
- [What are the most common issues people face with Cloudflare Workers? How can I monitor/troubleshoot them?](#askai)
- [When/why would I use Cloudflare Workers instead of deploying to a cloud server?](#askai)
- [Can I use Cloudflare Workers to serve a Python FastAPI application? Why or why not?](#askai)
`)]},{...await Promise.resolve().then(()=>(Gt(),Lt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is Cloudflare Tunnels? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [When/why would I use a Cloudflare Tunnel instead of deploying to a cloud server?](#askai)
- [What is the difference between Cloudflare Workers and Cloudflare Tunnels? When/why would I use one vs the other?](#askai)
- [What useful, interesting things can I do with Cloudflare Tunnels? How do experts get the most out of it?](#askai)
`)]},{...await Promise.resolve().then(()=>(Ft(),Mt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is localtunnel? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How does localtunnel work? What limitations/gotchas should I know about - and what does it mean for me?](#askai)
- [What's the difference between localtunnel, ngrok, and Cloudflare Tunnels? When/why would I use one vs the other?](#askai)
`)]},{...await Promise.resolve().then(()=>(zt(),Bt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [How do I upload files to FastAPI?](#askai)
- [How should I validate files (for security) in FastAPI? E.g. can I just check file extensions?](#askai)
- [What HTTP error code should we return for different validation failures? How does it really matter, practically?](#askai)
`)]},{...await Promise.resolve().then(()=>(Vt(),Jt)).then(i=>i.default({user:t,weight:1.5})),help:[j(`
### Ask AI

- [How do I implement Google authentication in a FastAPI application?](#askai)
- [What are the security considerations when using OAuth2 with FastAPI?](#askai)
- [How can I handle token refresh and expiration in Google-authenticated FastAPI apps?](#askai)
`)]},{...await Promise.resolve().then(()=>(Xt(),Kt)).then(i=>i.default({user:t,weight:1})),help:[j(`
### Ask AI

- [What is Ollama and why would I use it? What are popular, modern alternatives? Give me a decision tree on what to use when.](#askai)
- [How do I choose the right model size for my hardware? What's the memory/quality trade-off?](#askai)
- [What's the OLLAMA_ORIGINS environment variable and why do I need it for web access?](#askai)
`)]}];return Ie(e,a),Object.fromEntries(e.map(({id:i,...s})=>[i,s]))}export{An as questions};
