(()=>{var od=Object.defineProperty;var Qm=(n,e,t)=>e in n?od(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var e0=(n,e)=>()=>(n&&(e=n(n=0)),e);var t0=(n,e)=>{for(var t in e)od(n,t,{get:e[t],enumerable:!0})};var sn=(n,e,t)=>Qm(n,typeof e!="symbol"?e+"":e,t);var Cf={};t0(Cf,{createEvent:()=>wf,defaultRelayUrls:()=>Ef,getRelaySockets:()=>ay,joinRoom:()=>ry,pauseRelayReconnection:()=>lf,resumeRelayReconnection:()=>hf,selfId:()=>Rn,subscribe:()=>ey});var ol,Ai,Kr,Od,Fd,i0,Nn,hd,Cn,s0,r0,Bd,zd,Hd,ud,Fs,cl,a0,Jr,Ve,Za,o0,Vd,dd,fd,Hc,Vc,Gd,pd,zr,Wd,Ka,c0,$d,An,Hs,rs,Hr,l0,as,qa,ri,h0,md,u0,d0,f0,qd,el,tl,ll,hl,Xd,Yd,Zd,p0,Kd,Jd,jd,Qd,m0,g0,y0,ef,tf,nf,sf,x0,gd,yd,v0,nl,_0,M0,On,Gr,b0,Vs,Rn,os,rf,is,af,Tn,Os,rn,of,dt,ht,Bs,Ti,w0,S0,Ei,ns,Wr,$r,T0,A0,fn,zs,cf,xd,vd,Ur,Vr,il,lf,hf,E0,C0,R0,ul,Gc,P0,I0,Ja,qr,L0,D0,uf,df,k0,U0,dl,N0,O0,F0,Wc,B0,z0,H0,V0,G0,_d,W0,Nr,$0,q0,Md,bd,X0,Y0,$c,Z0,qc,wd,Xc,Wa,ts,Or,K0,Sd,Td,Ad,J0,j0,Q0,eg,tg,Ns,Yc,Ed,ng,Va,ig,Cd,Rd,ff,sg,Pd,rg,Si,Br,Id,ag,og,pf,mf,Ld,cg,lg,gf,hg,ug,dg,fg,pg,mg,sl,Xa,gg,yg,Fr,xg,yf,vg,_g,Mg,ja,Xr,En,$a,rl,fl,Dd,bg,Yr,wg,Sg,xf,Tg,Ag,Eg,Cg,Rg,Pg,Ig,Ga,Lg,Dg,kg,Ug,Ng,Og,Fg,Zc,Bg,zg,Kc,kd,Jc,Hg,vf,Vg,_f,Mf,Gg,Wg,$g,bf,qg,jc,Ud,Ya,Xg,Yg,Zr,al,ss,Nd,Zg,Qc,Kg,Jg,jg,Qg,pl,ml,wf,ey,si,Sf,ty,ny,Tf,iy,Af,sy,ry,ay,Ef,Rf=e0(()=>{ol=Object.freeze,Ai=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Kr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Od=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Fd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,i0=ol({p:Ai,n:Kr,h:1n,a:0n,b:7n,Gx:Od,Gy:Fd}),Nn=32,hd=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Cn=(n,e,t="")=>{if(hd(n)&&(e===void 0||n.length===e))return n;let i=hd(n),s=e!==void 0?` of length ${e}`:"",r=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(a):new TypeError(a)},s0=n=>Uint8Array.from(n),r0=(n,e,t)=>s0(Cn(n,t,e)),Bd=(n,e)=>n.toString(16).padStart(e,"0"),zd=n=>{let e="";for(let t of Cn(n))e+=Bd(t,2);return e},Hd=n=>{let e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);let t=new Uint8Array(n.length/2);for(let i=0,s=0;i<t.length;i++,s+=2){let r=n.charCodeAt(s),a=n.charCodeAt(s+1);t[i]=((r&15)+(r>>6)*9)*16+(a&15)+(a>>6)*9}return t},ud=()=>{let n=globalThis?.crypto?.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},Fs=(...n)=>{let e=0;for(let s of n)e+=Cn(s).length;let t=new Uint8Array(e),i=0;for(let s of n)t.set(s,i),i+=s.length;return t},cl=(n=Nn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},a0=BigInt,Jr=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Ve=(n,e=Ai)=>(n%=e)>=0n?n:e+n,Za=n=>Ve(n,Kr),o0=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Ve(n,e),i=e,s=0n,r=1n;for(;t!==0n;){let a=i/t,o=i-t*a,c=s-r*a;i=t,t=o,s=r,r=c}if(i!==1n)throw new Error("invert: does not exist");return Ve(s,e)},Vd=n=>{let e=u0[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},dd=(n,e,t)=>Cn(Vd(n)(e,t),Nn,"digest"),fd=async(n,e,t)=>Cn(await Vd(n)(e,t),Nn,"digest"),Hc=n=>{if(n instanceof Hs)return n;throw new TypeError("Point expected")},Vc="bad point: not on curve",Gd=n=>Ve(Ve(n*n)*n+7n),pd=n=>Jr(n,0n,Ai),zr=n=>Jr(n,1n,Ai),Wd=n=>Jr(n,1n,Kr),Ka=n=>!(n&1n),c0=n=>Uint8Array.of(Ka(n)?2:3),$d=n=>{let e=Gd(zr(n)),t=1n;for(let i=e,s=(Ai+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%Ai),i=i*i%Ai;if(Ve(t*t)!==e)throw new Error("sqrt invalid");return new Hs(n,Ka(t)?t:Ve(-t),1n)},Hs=(An=class{constructor(e,t,i){sn(this,"X");sn(this,"Y");sn(this,"Z");this.X=pd(e),this.Y=zr(t),this.Z=pd(i),ol(this)}static CURVE(){return i0}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?Hr:new An(t,i,1n)}static fromBytes(e){Cn(e);let t=e.length,i=e[0],s=qa(e,1,33);try{if(t===33&&(i===2||i===3)){let r=$d(s);return i===3?r.negate():r}if(t===65&&i===4)return new An(s,qa(e,33,65),1n).assertValidity()}catch{throw new Error(Vc)}throw new Error(Vc)}static fromHex(e){return An.fromBytes(Hd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Hc(e);return Ve(t*o)===Ve(r*s)&&Ve(i*o)===Ve(a*s)}is0(){return this.Z===0n}negate(){return new An(this.X,Ve(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Hc(e),c=0n,l=7n,h=0n,u=0n,d=0n,f=Ve(l*3n),g=Ve(t*r),y=Ve(i*a),m=Ve(s*o),p=Ve(t+i),b=Ve(r+a);p=Ve(p*b),b=Ve(g+y),p=Ve(p-b),b=Ve(t+s);let _=Ve(r+o);return b=Ve(b*_),_=Ve(g+m),b=Ve(b-_),_=Ve(i+s),h=Ve(a+o),_=Ve(_*h),h=Ve(y+m),_=Ve(_-h),d=Ve(c*b),h=Ve(f*m),d=Ve(h+d),h=Ve(y-d),d=Ve(y+d),u=Ve(h*d),y=Ve(g+g),y=Ve(y+g),m=Ve(c*m),b=Ve(f*b),y=Ve(y+m),m=Ve(g-m),m=Ve(c*m),b=Ve(b+m),g=Ve(y*b),u=Ve(u+g),g=Ve(_*b),h=Ve(p*h),h=Ve(h-g),g=Ve(p*y),d=Ve(_*d),d=Ve(d+g),new An(h,u,d)}subtract(e){return this.add(Hc(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Hr;if(Wd(e),e===1n)return this;if(this.equals(rs))return v0(e).p;let i=Hr,s=rs,r=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let s=o0(i,Ai);if(Ve(i*s)!==1n)throw new Error("inverse invalid");return{x:Ve(e*s),y:Ve(t*s)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(zr(e),zr(t),Ve(t*t)!==Gd(e))throw new Error(Vc);return this}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),s=ri(t);return e?Fs(c0(i),s):Fs(Uint8Array.of(4),s,ri(i))}toHex(e){return zd(this.toBytes(e))}},sn(An,"BASE"),sn(An,"ZERO"),An),rs=new Hs(Od,Fd,1n),Hr=new Hs(0n,1n,0n);Hs.BASE=rs;Hs.ZERO=Hr;l0=(n,e,t)=>rs.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),as=n=>a0("0x"+(zd(n)||"0")),qa=(n,e,t)=>as(n.subarray(e,t)),ri=n=>Hd(Bd(Jr(n,0n,2n**256n),Nn*2)),h0=n=>{let e=as(Cn(n,Nn,"secret key"));return Jr(e,1n,Kr,"invalid secret key: outside of range")},md="SHA-256",u0={hmacSha256Async:async(n,e)=>{let t=ud(),i=await t.importKey("raw",n,{name:"HMAC",hash:md},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await ud().digest(md,n)),sha256:void 0},d0=n=>{if(n=n===void 0?cl(48):n,Cn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");let e=Ve(as(n),Kr-1n);return ri(e+1n)},f0=n=>e=>{let t=d0(e);return{secretKey:t,publicKey:n(t)}},qd=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),el=(n,...e)=>{let t=dd("sha256",qd(n));return dd("sha256",Fs(t,t,...e))},tl=(n,...e)=>fd("sha256Async",qd(n)).then(t=>fd("sha256Async",Fs(t,t,...e))),ll=n=>{let e=h0(n),t=rs.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=Ka(s)?e:Za(-e),a=ri(i);return{d:r,px:a}},hl=n=>Za(as(n)),Xd=(...n)=>hl(el("challenge",...n)),Yd=async(...n)=>hl(await tl("challenge",...n)),Zd=n=>ll(n).px,p0=f0(Zd),Kd=(n,e,t)=>{let i=r0(n,"message"),{px:s,d:r}=ll(e);return{m:i,px:s,d:r,a:Cn(t,Nn)}},Jd=n=>{let e=hl(n);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:i}=ll(ri(e));return{rx:t,k:i}},jd=(n,e,t,i)=>Fs(e,ri(Za(n+t*i))),Qd="invalid signature produced",m0=(n,e,t=cl(Nn))=>{let{m:i,px:s,d:r,a}=Kd(n,e,t),o=ri(r^as(el("aux",a))),{rx:c,k:l}=Jd(el("nonce",o,s,i)),h=jd(l,c,Xd(c,s,i),r);if(!tf(h,i,s))throw new Error(Qd);return h},g0=async(n,e,t=cl(Nn))=>{let{m:i,px:s,d:r,a}=Kd(n,e,t),o=ri(r^as(await tl("aux",a))),{rx:c,k:l}=Jd(await tl("nonce",o,s,i)),h=jd(l,c,await Yd(c,s,i),r);if(!await nf(h,i,s))throw new Error(Qd);return h},y0=(n,e)=>n instanceof Promise?n.then(e):e(n),ef=(n,e,t,i)=>{let s=Cn(n,64,"signature"),r=Cn(e,void 0,"message"),a=Cn(t,Nn,"publicKey"),o,c,l,h;try{let u=as(a);o=$d(u),c=zr(qa(s,0,Nn)),l=Wd(qa(s,Nn,64)),h=Fs(ri(c),a,r)}catch{return!1}return y0(i(h),u=>{try{let{x:d,y:f}=l0(o,l,Za(-u)).toAffine();return!(!Ka(f)||d!==c)}catch{return!1}})},tf=(n,e,t)=>ef(n,e,t,Xd),nf=async(n,e,t)=>ef(n,e,t,Yd),sf=ol({keygen:p0,getPublicKey:Zd,sign:m0,verify:tf,signAsync:g0,verifyAsync:nf}),x0=()=>{let n=[],e=rs,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let s=1;s<128;s++)t=t.add(e),n.push(t);e=t.double()}return n},yd=(n,e)=>{let t=e.negate();return n?t:e},v0=n=>{let e=gd||(gd=x0()),t=Hr,i=rs;for(let s=0;s<33;s++){let r=Number(n&255n);n>>=8n,r>128&&(r-=256,n+=1n);let a=s*128,o=a+Math.abs(r)-1,c=s%2!==0,l=r<0;r===0?i=i.add(yd(c,e[a])):t=t.add(yd(l,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:nl,min:_0,sin:M0}=Math,On="Trystero",Gr=(n,e)=>Array(n).fill(void 0).map(e),b0="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Vs=n=>Gr(n,()=>b0[nl(Math.random()*62)]??"").join(""),Rn=Vs(20),os=Promise.all.bind(Promise),rf=typeof window<"u",{entries:is,fromEntries:af,keys:Tn,values:Os}=Object,rn=()=>{},of="candidate",dt=n=>(n!==null&&clearTimeout(n),null),ht=n=>new Error(`${On}: ${n}`),Bs=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:fn(n??e),Ti=(n,e)=>n instanceof Error?n:ht(Bs(n,e)),w0=new TextEncoder,S0=new TextDecoder,Ei=n=>w0.encode(n),ns=n=>S0.decode(n),Wr=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),$r=(...n)=>n.join("@"),T0=(n,e)=>{let t=[...n],i=()=>{let r=M0(e++)*1e4;return r-nl(r)},s=t.length;for(;s;){let r=nl(i()*s--),a=t[s];t[s]=t[r],t[r]=a}return t},A0=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?T0(e,cf(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),fn=JSON.stringify,zs=n=>{try{return JSON.parse(n)}catch{throw ht(`failed to parse JSON: ${n}`)}},cf=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,xd=3333,vd=6e4,Ur={},Vr=null,il=null,lf=()=>{Vr||(Vr=new Promise(n=>{il=n}).finally(()=>{il=null,Vr=null}))},hf=()=>{il?.()},E0=(n,e,t)=>{let i={},s=!1,r=!1,a,o=rn;i.isClosed=!1,i.ready=new Promise(l=>o=l);let c=()=>{if(i.isClosed)return;a=void 0,r=!1;let l=new WebSocket(n);l.onclose=()=>{if(i.isClosed||r)return;if(r=!0,Vr){Vr.then(c);return}let h=Ur[n]??(Ur[n]=xd);if(h>=vd){i.isClosed=!0;return}a=setTimeout(c,Math.random()*h),Ur[n]=_0(h*2,vd)},l.onmessage=h=>e(String(h.data)),i.socket=l,i.url=l.url,l.onopen=()=>{let h=s;s=!0,o(i),Ur[n]=xd,h&&t?.()},i.send=h=>{l.readyState===1&&l.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},c(),i},C0=n=>{let e={},t=new WeakMap,i=a=>{let o=t.get(a);if(!o)throw ht("relay bookkeeping missing registration for relay client");return o},s=()=>{let a={},o=c=>a[c]??(a[c]={});return{forKey:o,forRelay:c=>o(i(c))}},r=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>e[a]||r(a,o()),keyOf:i,scoped:s,getSockets:()=>af(is(e).flatMap(([a,o])=>{let c=n(o);return c?[[a,c]]:[]}))}},R0=()=>{if(rf){let n=new AbortController;return addEventListener("online",hf,{signal:n.signal}),addEventListener("offline",lf,{signal:n.signal}),()=>n.abort()}return rn},ul="AES-GCM",Gc={},P0=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),I0=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Ja=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Ei(e))),qr=async n=>Gc[n]??(Gc[n]=Array.from(await Ja("SHA-1",n)).map(e=>e.toString(36)).join("")),L0=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Ei(`${n}:${e}:${t}`)),{name:ul},!1,["encrypt","decrypt"]),D0=async(n,e)=>Wr(await Ja("SHA-256",`${On}:${n}:${e}`)),uf="$",df=",",k0=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(df)+uf+P0(await crypto.subtle.encrypt({name:ul,iv:t},await n,Ei(e)))},U0=async(n,e)=>{let[t,i]=e.split(uf);return ns(await crypto.subtle.decrypt({name:ul,iv:new Uint8Array(t?.split(df).map(Number)??[])},await n,I0(i??"")))},dl=57333,N0=18e4,O0=20,F0=class{constructor(n){sn(this,"makeOffer");sn(this,"pool",[]);sn(this,"pooled",new Set);sn(this,"leased",new Map);sn(this,"recycling",new Set);sn(this,"cleanupTimer",null);sn(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Gr(O0,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},dl)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){let e=[];for(;e.length<n&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){let e=this.leased.get(n);e&&(dt(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:rn,close:rn,error:rn}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){let e=this.leased.get(n);e&&(dt(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},N0))}checkout(n,e,t){let i=this.shift(n),s=Math.max(0,n-i.length);s>0&&i.push(...Gr(s,this.makeOffer));let r=async(a,o=!1)=>{try{let c=await t(a);return e?(this.lease(a),{peer:a,offer:c,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:c}}catch(c){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return r(this.makeOffer(),!0);throw c}};return os(i.map(a=>r(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{dt(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}},Wc=ht("incorrect password for overlapping room"),B0=(n,e,t)=>{let i=r=>Ja("SHA-256",`${r}:${n}:${e}:${t}`).then(Wr),s=async(r,a,o)=>{if(!n)return;if(o){let l=Vs(36);await r({__trystero_pw:"challenge",c:l});let{data:h}=await a();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw Wc;let u=await i(l);if(h.h!==u)throw Wc;return}let{data:c}=await a();if(!c||typeof c!="object"||c.__trystero_pw!=="challenge"||typeof c.c!="string")throw Wc;await r({__trystero_pw:"response",h:await i(c.c)})};return{run:s,compose:r=>n||r?async(a,o,c,l)=>{await s(o,c,l),await r?.(a,o,c,l)}:void 0}},z0=n=>{let e=Bs(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},H0=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:a})=>{let o={},c=(u,d)=>{let f=o[u];!f||d&&f.peer!==d||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=dt(f.handshakeTimer),r(u,f.peer))},l=(u,d,f)=>{let g=o[u];if(!g||g.peer!==d)return;let y=z0(f);e?.(u,y),a(u,d,ht(y))},h=(u,d)=>{let f=o[u];!f||f.peer!==d||f.isActive||(f.didLocalHandshakePass=!0,s("",u).catch(g=>l(u,d,ht(`failed sending handshake readiness: ${Bs(g,"unknown send failure")}`))),c(u,d))};return{addPeer:(u,d)=>{o[u]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,d)=>{let f=o[u];f&&(f.handshakeTimer=dt(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete o[u])},canReceiveFromPeer:(u,d)=>{let f=o[u];return!!(f&&(f.isActive||d))},start:(u,d)=>{let f=o[u];if(!f||f.peer!==d)return;f.handshakeTimer=setTimeout(()=>l(u,d,ht(`handshake timed out after ${t}ms`)),t);let g=async(p,b)=>{await i(p,u,b)},y=()=>new Promise((p,b)=>{let _=o[u];if(!_||_.peer!==d){b(ht("peer disconnected during handshake"));return}let v=_.pendingHandshakePayloads.shift();if(v){p(v);return}_.handshakeWaiters.push({resolve:p,reject:R=>b(R)})}),m=Rn<u;Promise.resolve(n?.(u,g,y,m)).then(()=>h(u,d)).catch(p=>l(u,d,Ti(p,"handshake failed")))},receiveHandshakeData:(u,d,f)=>{let g=o[d];if(!g||g.isActive)return;let y=f===void 0?{data:u}:{data:u,metadata:f},m=g.handshakeWaiters.shift();if(m){m.resolve(y);return}g.pendingHandshakePayloads.push(y)},receiveHandshakeReady:u=>{let d=o[u];!d||d.isActive||(d.didReceiveRemoteReady=!0,c(u))}}},V0=15e3,G0=5e3,_d="icegatheringstatechange",W0="iceconnectionstatechange",Nr="offer",$0="answer",q0=/out of range/i,Md=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),bd=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let a=new(i??RTCPeerConnection)({iceServers:X0.concat(s??[]),...t}),o={},c=[],l=[],h=e!==!1,u=[],d=[],f=!1,g=!1,y=null,m=null,p=!1,b=()=>m=dt(m),_=()=>{p||(p=!0,b(),o.close?.())},v=W=>{o.signal?o.signal(W):c.push(W)},R=W=>{let se=o.signal;o.signal=ke=>{se?.(ke),W(ke)},c.length>0&&c.splice(0).forEach(ke=>o.signal?.(ke))},T=W=>r?Md(W):W,C=W=>{if(!r||typeof W.candidate!="string")return W;let se=Md(W.candidate);return se===W.candidate?W:{...W,candidate:se}},L=W=>({type:W.localDescription?.type??Nr,sdp:T(W.localDescription?.sdp??"")}),Q=()=>{let W=a.remoteDescription?.sdp;return W?W.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},x=()=>(a.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,w=W=>{if(!a.remoteDescription)return!1;let se=x();if(typeof W.sdpMLineIndex=="number"&&se>0&&W.sdpMLineIndex>=se)return!1;let ke=Q();return!(ke&&W.usernameFragment&&W.usernameFragment!==ke)},X=async W=>{try{return await a.addIceCandidate(W),!0}catch(se){if(se instanceof Error&&q0.test(se.message)&&typeof W.sdpMLineIndex=="number")return!1;throw se}},F=async()=>{if(!a.remoteDescription||u.length===0)return;let W=u.splice(0),se=[];for(let ke of W){if(!w(ke)){se.push(ke);continue}await X(ke)||se.push(ke)}se.length>0&&u.push(...se)},E=async W=>{if(w(W)){await X(W)||u.push(W);return}u.push(W)},U=W=>{W.binaryType="arraybuffer",W.bufferedAmountLowThreshold=65535,W.onmessage=se=>{let ke=se.data;o.data?o.data(ke):l.push(ke)},W.onopen=()=>o.connect?.(),W.onclose=_,W.onerror=({error:se})=>o.error?.(Ti(se,"data channel error"))},N=async W=>{let se=null;try{await Promise.race([new Promise(ke=>{let ne=()=>{W.iceGatheringState==="complete"&&(W.removeEventListener(_d,ne),ke())};W.addEventListener(_d,ne),ne()}),new Promise(ke=>{se=setTimeout(ke,V0)})])}finally{dt(se)}return L(W)},Z=async()=>{let W=h?L(a):await N(a);return v(W),W};n?(y=a.createDataChannel("data"),U(y)):a.ondatachannel=({channel:W})=>{y=W,U(W)};let G=async(W=!1)=>{if(a.connectionState!=="closed")try{return f=!0,W&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&a.localDescription?.type===Nr&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(W?await a.createOffer({iceRestart:!0}):void 0),await Z()}catch(se){o.error?.(Ti(se,"failed to create local offer"))}finally{f=!1}};a.onnegotiationneeded=async()=>G(!1),a.onicecandidate=({candidate:W})=>{if(!h||!W)return;let se=C(typeof W.toJSON=="function"?W.toJSON():{candidate:W.candidate,sdpMid:W.sdpMid,sdpMLineIndex:W.sdpMLineIndex,usernameFragment:W.usernameFragment});v({type:of,sdp:JSON.stringify(se)})};let xe=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){_();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){b();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&_()},G0));return}};a.onconnectionstatechange=xe,a.addEventListener(W0,xe),a.ontrack=W=>{let se=W.streams[0];if(se){if(!o.track&&!o.stream){d.push({track:W.track,stream:se});return}o.track?.(W.track,se),o.stream?.(se)}},a.onremovestream=W=>o.stream?.(W.stream);let pe=n?new Promise(W=>R(se=>{se.type===Nr&&W(se)})):Promise.resolve();return n&&queueMicrotask(()=>{!f&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&a.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:a,get channel(){return y},get isDead(){return a.connectionState==="closed"},getOffer:async(W=!1)=>{if(n)return W?G(!0):a.localDescription?.type===Nr?h?L(a):N(a):pe},async signal(W){if(W.type==="candidate"){try{let se=JSON.parse(W.sdp);se&&typeof se=="object"&&await E(C(se))}catch(se){o.error?.(Ti(se,"failed to parse remote candidate"))}return}if(!(y?.readyState==="open"&&!W.sdp?.includes("a=rtpmap")))try{let se={...W,sdp:T(W.sdp)};if(W.type===Nr){if(f||a.signalingState!=="stable"&&!g){if(n)return;await os([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(se)])}else await a.setRemoteDescription(se);return await F(),await a.setLocalDescription(),await Z()}if(W.type===$0){g=!0;try{await a.setRemoteDescription(se),await F()}finally{g=!1}}}catch(se){o.error?.(Ti(se,"failed to apply remote signal"))}},sendData:W=>y?.send(W),destroy:()=>{b(),y?.close(),a.close(),f=!1,g=!1,_()},setHandlers:W=>{let{signal:se,...ke}=W;Object.assign(o,ke),o.data&&l.length>0&&l.splice(0).forEach(ne=>o.data?.(ne)),se&&R(se),(o.track||o.stream)&&d.length>0&&d.splice(0).forEach(({track:ne,stream:ue})=>{o.track?.(ne,ue),o.stream?.(ue)})},offerPromise:pe,addStream:W=>W.getTracks().forEach(se=>a.addTrack(se,W)),removeStream:W=>a.getSenders().filter(se=>se.track&&W.getTracks().includes(se.track)).forEach(se=>a.removeTrack(se)),addTrack:(W,se)=>a.addTrack(W,se),removeTrack:W=>{let se=a.getSenders().find(ke=>ke.track===W);se&&a.removeTrack(se)},replaceTrack:(W,se)=>{let ke=a.getSenders().find(ne=>ne.track===W);if(ke)return ke.replaceTrack(se)}}},X0=[...Gr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),Y0=Object.getPrototypeOf(Uint8Array),$c=32,Z0=0,qc=32,wd=34,Xc=35,Wa=36,ts=16*2**10-Wa,Or=255,K0=65535,Sd="bufferedamountlow",Td="close",Ad="error",J0=1e4,j0=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),Q0=(n,e=J0)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,s=null,r=c=>{i||(i=!0,n.removeEventListener(Sd,a),n.removeEventListener(Td,o),n.removeEventListener(Ad,o),dt(s),t(c))},a=()=>r(!0),o=()=>r(!1);if(n.addEventListener(Sd,a),n.addEventListener(Td,o),n.addEventListener(Ad,o),s=setTimeout(()=>r(!1),e),n.readyState!=="open"){r(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&r(!0)}),eg=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{let s={},r={},a={},o={},c=(l,h,{includePending:u=!1}={})=>(l?Array.isArray(l)?l:[l]:e(u)).flatMap(d=>{let f=n(d,u);return f?[Promise.resolve(h(d,f))]:(console.warn(`${On}: no peer with id ${d} found`),[])});return{makeInternalAction:(l,h={})=>{let u=r[l];if(s[l]&&u){let m=s[l].options;if(m.sendToPending!==!!h.sendToPending||m.receiveWhilePending!==!!h.receiveWhilePending)throw ht(`action type "${l}" cannot be redefined`);return u}if(!l)throw ht("action type argument is required");let d=Ei(l);if(d.byteLength>$c)throw ht(`action type string "${l}" (${d.byteLength}b) exceeds byte limit (${$c}). Hint: choose a shorter name.`);let f={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},g=new Uint8Array($c);g.set(d);let y=0;return s[l]={onComplete:rn,onProgress:rn,setOnComplete:m=>{s[l].onComplete=m;let p=o[l];p?.length&&(delete o[l],p.forEach(({payload:b,peerId:_,metadata:v})=>m(b,_,v)))},setOnProgress:m=>{s[l].onProgress=m},send:async(m,p,b,_,v)=>{i(v);let R=typeof m;if(R==="undefined")throw ht("action data cannot be undefined");let T=R!=="string",C=m instanceof Blob,L=C||m instanceof ArrayBuffer||m instanceof Y0,Q=b!==void 0,x=L?j0(C?await m.arrayBuffer():m):Ei(T?fn(m):m),w=Q?Ei(fn(b)):null,X=Math.ceil(x.byteLength/ts)+(Q?1:0)||1,F=Gr(X,(E,U)=>{let N=U===X-1,Z=!!(Q&&U===0),G=new Uint8Array(Wa+(Z?w?.byteLength??0:N?x.byteLength-ts*(X-(Q?2:1)):ts));return G.set(g),G.set([y>>8,y&Or],qc),G.set([Number(N)|Number(Z)<<1|Number(L)<<2|Number(T)<<3],wd),G.set([Math.round((U+1)/X*Or)],Xc),G.set(Q?Z?w??new Uint8Array:x.subarray((U-1)*ts,U*ts):x.subarray(U*ts,(U+1)*ts),Wa),G});return y=y+1&K0,await os(c(p,async(E,U)=>{let{channel:N}=U,Z=0;for(;Z<X;){i(v);let G=F[Z];if(!G)break;if(N&&N.bufferedAmount>N.bufferedAmountLowThreshold){let W=await Q0(N);if(i(v),!W)break}let xe=n(E,f.sendToPending);if(!xe||xe!==U)break;U.sendData(G),Z++;let pe=G[Xc]??Or;_?.(pe/Or,E,b)}},{includePending:f.sendToPending})),[]},options:f},r[l]={send:s[l].send,onMessage:s[l].setOnComplete,onProgress:s[l].setOnProgress}},handleData:(l,h)=>{var Q,x;let u=new Uint8Array(h),d=ns(u.subarray(Z0,qc)).replaceAll("\0",""),f=s[d];if(!t(l,!!f?.options.receiveWhilePending))return;let g=(u[qc]??0)<<8|(u[33]??0),y=u[wd]??0,m=u[Xc]??0,p=u.subarray(Wa),b=!!(y&1),_=!!(y&2),v=!!(y&4),R=!!(y&8);a[l]??(a[l]={}),(Q=a[l])[d]??(Q[d]={});let T=(x=a[l][d])[g]??(x[g]={chunks:[]});if(_?T.meta=zs(ns(p)):T.chunks.push(p),f?.onProgress(m/Or,l,T.meta),!b)return;let C=new Uint8Array(T.chunks.reduce((w,X)=>w+X.byteLength,0));T.chunks.reduce((w,X)=>(C.set(X,w),w+X.byteLength),0),delete a[l][d][g];let L=v?C:R?zs(ns(C)):ns(C);if(f){f.onComplete(L,l,T.meta);return}(o[d]??(o[d]=[])).push({payload:L,peerId:l,...T.meta===void 0?{}:{metadata:T.meta}})},clearPeer:l=>{delete a[l]}}},tg=500,Ns=(n,e)=>{let t=ht(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Yc=n=>{if(n?.aborted)throw Ns("aborted","operation aborted")},Ed=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,ng=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,Va=(n,e)=>e===void 0?n:{...n,metadata:e},ig=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{let i={},s={},r=eg({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Yc}),a=r.makeInternalAction,o=r.handleData,c=d=>{let f=s[d];f&&(dt(f.timer),f.signal&&f.abortHandler&&f.signal.removeEventListener("abort",f.abortHandler),delete s[d])},l=(d,f)=>{is(s).forEach(([g,y])=>{y.peerId===d&&(c(g),y.reject(f))})},h=(d,f)=>{r.clearPeer(d),l(d,Ns("disconnected",Bs(f,"peer disconnected")))},u=a("@_response");return u.onMessage((d,f,g)=>{let y=ng(g);if(!y)return;let m=s[y.r];if(!(!m||m.peerId!==f)){if(c(y.r),y.e!==void 0){m.reject(Ns("rejected",y.e));return}m.resolve(d)}}),{makeAction:(d,f)=>{if(f&&"onRequest"in f&&f.kind!=="request")throw ht('request actions must use kind: "request"');let g=f?.kind??"message",y=a(d),m=i[d];if(m){if(m.kind!==g)throw ht(`action type "${d}" cannot be redefined`);return m.action}let p={kind:g,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:f?.onReceiveProgress??null},b=(F,E)=>F?(U,N)=>F(U,Va({peerId:N},E)):void 0,_=F=>{p.onReceiveProgress=F},v=(F,E,U)=>{let N=p.kind==="request"?Ed(U):null;p.onReceiveProgress?.(F,Va({peerId:E},N?N.m:U))};if(y.onProgress(v),g==="message"){let F=f?.onMessage??null,E=()=>{if(!F)return;let N=F;p.pendingMessages.splice(0).forEach(({payload:Z,peerId:G,metadata:xe})=>{Promise.resolve().then(()=>N(Z,Va({peerId:G},xe))).catch(pe=>console.error(`${On} action handler error:`,pe))})},U={send:async(N,Z={})=>{await y.send(N,Z.target,Z.metadata,b(Z.onProgress,Z.metadata),Z.signal)},get onMessage(){return F},set onMessage(N){F=N,E()},get onReceiveProgress(){return p.onReceiveProgress},set onReceiveProgress(N){_(N)}};return y.onMessage((N,Z,G)=>{if(!F){p.pendingMessages.push(G===void 0?{payload:N,peerId:Z}:{payload:N,peerId:Z,metadata:G});return}let xe=F;Promise.resolve().then(()=>xe(N,Va({peerId:Z},G))).catch(pe=>console.error(`${On} action handler error:`,pe))}),p.action=U,i[d]=p,E(),U}let R=f?.onRequest??null,T=F=>{dt(F.timer);let E=p.pendingRequests.indexOf(F);E>-1&&p.pendingRequests.splice(E,1)},C=(F,E,U)=>{u.send(null,F,{r:E,e:Bs(U,"request failed")})},L=(F,E)=>{T(F),Promise.resolve().then(()=>E(F.payload,{peerId:F.peerId,...F.metadata===void 0?{}:{metadata:F.metadata},signal:F.controller.signal})).then(async U=>{if(U===void 0)throw ht("request handler returned undefined");await u.send(U,F.peerId,{r:F.requestId})}).catch(U=>C(F.peerId,F.requestId,U)).finally(()=>F.controller.abort())},Q=()=>{R&&p.pendingRequests.slice().forEach(F=>L(F,R))},x=(F,E,U,N)=>{if(R){let G={payload:F,peerId:E,...U===void 0?{}:{metadata:U},requestId:N,controller:new AbortController,timer:null};L(G,R);return}let Z={payload:F,peerId:E,...U===void 0?{}:{metadata:U},requestId:N,controller:new AbortController,timer:setTimeout(()=>{T(Z),Z.controller.abort(),C(E,N,"request handler unavailable")},tg)};p.pendingRequests.push(Z)},w=async(F,E)=>{let{target:U,metadata:N,onProgress:Z,signal:G,timeoutMs:xe}=E;if(Yc(G),!n(U,!1))throw Ns("disconnected",`no active peer with id ${U}`);let pe=Vs(20),W=new Promise((se,ke)=>{let ne={peerId:U,resolve:se,reject:ke,timer:null,...G===void 0?{}:{signal:G}},ue=()=>{c(pe),ke(Ns("aborted","operation aborted"))};G&&(ne.abortHandler=ue,G.addEventListener("abort",ue,{once:!0})),s[pe]=ne}).catch(se=>{throw se});try{await y.send(F,U,N===void 0?{r:pe}:{r:pe,m:N},b(Z,N),G);let se=s[pe];return se&&xe!==void 0&&(se.timer=setTimeout(()=>{c(pe),se.reject(Ns("timeout","request timed out"))},xe)),await W}catch(se){throw c(pe),se}},X={request:w,requestMany:async(F,E)=>(Yc(E.signal),await os(E.targets.map(async U=>{try{let N={peerId:U,status:"fulfilled",value:await w(F,{target:U,...E.metadata===void 0?{}:{metadata:E.metadata},...E.timeoutMs===void 0?{}:{timeoutMs:E.timeoutMs},...E.onProgress===void 0?{}:{onProgress:E.onProgress},...E.signal===void 0?{}:{signal:E.signal}})};return E.onResult?.(N),N}catch(N){let Z=Ti(N,"request failed");if(Z.kind==="aborted"||!Z.kind)throw Z;let G=Z.kind==="timeout"?{peerId:U,status:"timeout"}:Z.kind==="disconnected"?{peerId:U,status:"disconnected"}:{peerId:U,status:"rejected",error:Z};return E.onResult?.(G),G}}))),get onRequest(){return R},set onRequest(F){R=F,Q()},get onReceiveProgress(){return p.onReceiveProgress},set onReceiveProgress(F){_(F)}};return y.onMessage((F,E,U)=>{let N=Ed(U);N&&x(F,E,N.m,N.r)}),p.action=X,i[d]=p,Q(),X},makeInternalAction:a,handleData:o,clearPeer:h}},Cd=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Rd=n=>e=>{let t=n.get(e);return t||(t=Vs(20),n.set(e,t)),t},ff=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map;return{getStreamKey:Rd(n),getTrackKey:Rd(e),rememberRemoteStream:(a,o,c)=>{t.set(a,o),c&&i.set(c,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,c,l,h)=>{let u={track:o,stream:c};s.set(a,u),l&&r.set(l,u),h&&i.set(h,c)},getRemoteTrack:(a,o)=>s.get(a)??(o?r.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},sg=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{let i={},s={},r=ff(),a={onPeerStream:null,onPeerTrack:null},o=(h,u,d,f)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(u,d,typeof d.id=="string"?d.id:void 0),a.onPeerStream?.(d,h,f))},c=(h,u,d,f,g)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(u,d,f,typeof d.id=="string"?d.id:void 0,typeof f.id=="string"?f.id:void 0),a.onPeerTrack?.(d,f,h,g))},l=(h,u,d,f,g,y={})=>{let m={k:u,...y,...d===void 0?{}:{m:d}};return n(h,async(p,b)=>{await f(m,p),g(b)})};return{addStream:(h,u,d)=>l(u.target,r.getStreamKey(h),u.metadata,d,f=>f.addStream(h),{s:h.id}),removeStream:(h,u)=>{n(u,(d,f)=>f.removeStream(h))},addTrack:(h,u,d,f)=>l(d.target,r.getTrackKey(h),d.metadata,f,g=>g.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{n(u,(d,f)=>f.removeTrack(h))},replaceTrack:(h,u,d,f)=>l(d.target,r.getTrackKey(u),d.metadata,f,g=>g.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{if(!e(u))return;let d=Cd(h);if(!d)return;let f=t(u)?.__trysteroMedia?.getRemoteStream(d.key,d.streamId);if(f){o(u,d.key,f,d.metadata);return}(i[u]??(i[u]=[])).push(d)},receiveTrackMeta:(h,u)=>{if(!e(u))return;let d=Cd(h);if(!d)return;let f=t(u)?.__trysteroMedia?.getRemoteTrack(d.key,d.trackId);if(f){c(u,d.key,f.track,f.stream,d.metadata);return}(s[u]??(s[u]=[])).push(d)},receiveRemoteStream:(h,u)=>{if(!e(h))return;let d=i[h]?.shift();d&&o(h,d.key,u,d.metadata)},receiveRemoteTrack:(h,u,d)=>{if(!e(h))return;let f=s[h]?.shift();f&&c(h,f.key,u,d,f.metadata)},clearPeer:h=>{delete i[h],delete s[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Pd="beforeunload",rg=1e4,Si=n=>"@_"+n,Br=new Set,Id=()=>Br.forEach(n=>n()),ag=n=>(Br.add(n),Br.size===1&&addEventListener(Pd,Id),()=>{Br.delete(n),Br.size||removeEventListener(Pd,Id)}),og=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=rg,isPassive:a=!1}={})=>{let o={},c={},l={},h={onPeerJoin:null,onPeerLeave:null},u=rn,d=null,f=(E,U,{includePending:N=!1}={})=>(E?Array.isArray(E)?E:[E]:Tn(N?o:c)).flatMap(Z=>{let G=N?o[Z]:c[Z];return G?[Promise.resolve(U(Z,G))]:(console.warn(`${On}: no peer with id ${Z} found`),[])}),g=sg({iterate:(E,U)=>f(E,(N,Z)=>U(N,Z)),isActive:E=>!!c[E],getSharedMediaPeer:E=>o[E]??null}),y=ig({getPeer:(E,U)=>(U?o:c)[E],getPeerIds:E=>Tn(E?o:c),canReceiveFromPeer:(E,U)=>!!d?.canReceiveFromPeer(E,U)}),m=y.makeInternalAction,p=y.handleData,b=y.makeAction,_=(E,U=ht("peer disconnected"))=>{let N=Ti(U,"peer disconnected");d?.clearPeer(E,N),delete o[E],delete c[E],y.clearPeer(E,N),l[E]?.splice(0).forEach(Z=>Z.reject(N)),delete l[E],g.clearPeer(E)},v=(E,U,N)=>{let Z=o[E];if(!Z||U&&Z!==U)return;let G=!!c[E];_(E,N),Z.destroy(),G&&h.onPeerLeave?.(E),e(E)},R=async()=>{await w.send(""),await new Promise(E=>setTimeout(E,99)),is(o).forEach(([E,U])=>{U.destroy(),_(E,ht("room left"))}),u(),t()},T=m(Si("ping")),C=m(Si("pong")),L=m(Si("signal")),Q=m(Si("stream")),x=m(Si("track")),w=m(Si("leave"),{sendToPending:!0,receiveWhilePending:!0}),X=m(Si("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),F=m(Si("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=H0({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:X.send,sendHandshakeReady:F.send,onActivate:(E,U)=>{c[E]=U,h.onPeerJoin?.(E)},onFailure:(E,U,N)=>v(E,U,N)}),T.onMessage((E,U)=>C.send("",U)),C.onMessage((E,U)=>{let N=l[U];N?.shift()?.resolve(),N&&!N.length&&delete l[U]}),L.onMessage((E,U)=>{c[U]&&o[U]?.signal(E)}),Q.onMessage((E,U)=>g.receiveStreamMeta(E,U)),x.onMessage((E,U)=>g.receiveTrackMeta(E,U)),w.onMessage((E,U)=>v(U,void 0,ht("peer left room"))),X.onMessage((E,U,N)=>d?.receiveHandshakeData(E,U,N)),F.onMessage((E,U)=>d?.receiveHandshakeReady(U)),n((E,U)=>{let N=o[U];if(N){if(N===E)return;N.destroy(),_(U,ht("peer replaced"))}o[U]=E,d?.addPeer(U,E),E.setHandlers({data:Z=>p(U,Z),stream:Z=>g.receiveRemoteStream(U,Z),track:(Z,G)=>g.receiveRemoteTrack(U,Z,G),signal:Z=>{c[U]&&L.send(Z,U)},close:()=>v(U,E,ht("peer disconnected")),error:Z=>{console.error(`${On} peer error:`,Z),v(U,E,Z)}}),d?.start(U,E)}),rf&&(u=ag(()=>R().catch(rn))),{makeAction:b,leave:R,ping:async E=>{if(!c[E])throw ht(`no active peer with id ${E}`);let U=Date.now();return await new Promise((N,Z)=>{let G=l[E]??(l[E]=[]),xe=()=>{let W=l[E];if(!W)return;let se=W.indexOf(pe);se>-1&&W.splice(se,1),W.length||delete l[E]},pe={resolve:()=>{xe(),N()},reject:W=>{xe(),Z(W)}};G.push(pe),T.send("",E).catch(W=>pe.reject(Ti(W,"peer disconnected")))}),Date.now()-U},isPassive:()=>a,getPeers:()=>af(is(c).map(([E,U])=>[E,U.connection])),addStream:(E,U={})=>g.addStream(E,U,Q.send),removeStream:(E,U={})=>{g.removeStream(E,U.target)},addTrack:(E,U,N={})=>g.addTrack(E,U,N,x.send),removeTrack:(E,U={})=>{g.removeTrack(E,U.target)},replaceTrack:(E,U,N={})=>g.replaceTrack(E,U,N,x.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(E){h.onPeerJoin=E,E&&Tn(c).forEach(U=>E(U))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(E){h.onPeerLeave=E},get onPeerStream(){return g.onPeerStream},set onPeerStream(E){g.onPeerStream=E},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(E){g.onPeerTrack=E}}},pf=1,mf=2,Ld=(n,e)=>{let t=Ei(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=pf,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},cg=(n,e)=>{let t=Ei(n),i=new Uint8Array(4+t.byteLength);return i[0]=mf,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},lg=n=>{let e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===pf){let s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:ns(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==mf||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:ns(e.subarray(4,i)),isPresent:e[1]===1}},gf=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},hg=n=>{if(gf(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},ug=class{constructor(){sn(this,"byApp",{});sn(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return gf(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(cg(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=dt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();let r=Os(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(a=>{a.handlers.close?.(),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Tn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let s=this.getMap(n),r=s[e];if(r){if(r.idleTimer=dt(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}let a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:ff(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${On} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,c)=>this.dispatchTrack(a,o,c)}),s[e]=a,a}bind(n,e,t,{onDetach:i}){let s=t.bindings[n];if(s)return t.idleTimer=dt(t.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:rn,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=Tn(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:c=>t.peer.getOffer(c),signal:c=>t.peer.signal(c),sendData:c=>{if(!r.roomToken){r.pendingSendData.push(c);return}t.peer.sendData(Ld(r.roomToken,c))},destroy:()=>a(),setHandlers:c=>{let{signal:l,...h}=c;Object.assign(r.handlers,h),l&&(r.handlers.signal=l),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:c=>{let l=t.streamOwners.get(c)??new Set,h=l.size===0;l.add(n),t.streamOwners.set(c,l),h&&t.peer.addStream(c)},removeStream:c=>{let l=t.streamOwners.get(c);l&&(l.delete(n),l.size===0&&(t.streamOwners.delete(c),t.peer.removeStream(c)))},addTrack:(c,l)=>{let h=t.trackOwners.get(c)??{stream:l,rooms:new Set},u=h.rooms.size===0;return h.stream=l,h.rooms.add(n),t.trackOwners.set(c,h),u?t.peer.addTrack(c,l):t.peer.connection.getSenders().find(d=>d.track===c)??t.peer.addTrack(c,l)},removeTrack:c=>{let l=t.trackOwners.get(c);l&&(l.rooms.delete(n),l.rooms.size===0&&(t.trackOwners.delete(c),t.peer.removeTrack(c)))},replaceTrack:(c,l)=>{let h=t.trackOwners.get(c);if(h){t.trackOwners.delete(c);let u=t.trackOwners.get(l)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(l,u)}return t.peer.replaceTrack(c,l)},__trysteroMedia:t.media};return r.proxy=o,r.detach=a,t.bindings[n]=r,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=dt(t.idleTimer),e.then(c=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=c,t.bindingsByToken[c]=r;let l=t.pendingDataByToken.get(c);l?.length&&(r.pendingData.push(...l),t.pendingDataByToken.delete(c)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Ld(c,h))),this.flushBindingQueues(r)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||Tn(n.bindings).length>0||(n.idleTimer=dt(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||Tn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=Os(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){let{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){let t=lg(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}let i=n.bindingsByToken[t.roomToken];if(!i){let s=n.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),n.pendingDataByToken.set(t.roomToken,s);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){Os(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}},dg=23333,fg=12,pg=7533,mg=23333,sl="__legacy__",Xa="offer-placeholder",gg=["offer","answer","candidate"],yg=n=>{if(typeof n=="string")try{let e=zs(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},Fr=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,xg=n=>gg.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),yf=(n,e,t,i,s,r)=>{n.toCipher(e).then(a=>{n.isLeaving()||!r()||i(t,fn(s(a.sdp)))})},vg=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),_g=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),Mg=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${_g(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,ja=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:Mg(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Xr=(n,e)=>n[e]??(n[e]=vg()),En=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},$a=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=dt(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,En(n))},rl=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,En(n))},fl=(n,e)=>{n.offerRelayTimers[e]=dt(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,En(n))},Dd=(n,e)=>{n?.offerRelays[e]===Xa&&fl(n,e)},bg=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Yr=(n,e)=>{let t=n.offerAnswered;n.offerExpiryTimer=dt(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,s)=>fl(n,s)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||bg(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,En(n)},wg=(n,e,t,i)=>{dt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&ja(n,s,t),i.destroy(),$a(s,i),n.checkDeactivate())},mg)},Sg=async(n,e,t)=>{let i=t?[t,sl]:[sl];for(let s of i){let r=n.pendingCandidates[s];if(r?.length){delete n.pendingCandidates[s];for(let a of r)await e.signal(a)}}},xf=(n,e,t,i=dl)=>{dt(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&ja(n,r,t),Yr(r,n.offerPool),n.checkDeactivate())},i)},Tg=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let s=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!s)throw ht("failed to allocate offer peer");let{peer:r,offer:a}=s;e.offerPeer=r,e.offerId=Vs(fg),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],En(e);let o=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&ja(n,e,t),Yr(e,n.offerPool)),n.disconnectPeer(r,t),n.checkDeactivate()};return r.setHandlers({connect:()=>n.connectPeer(r,t,i),signal:c=>{e.offerPeer===r&&(e.offerSignalBacklog.push(c),e.offerSignalRelays.forEach(l=>l?.(c)))},close:o,error:o}),xf(n,e,t),{peer:r,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Ag=async(n,e,t,i,s)=>{if(i){n.attachSharedPeerToRoom(t,i);return}let r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){Dd(r,e);return}if(r.offerRelays[e]!==Xa)return;let[a,o]=await os([qr($r(n.rootTopicPlaintext,t)),Tg(n,r,t,e)]);if(n.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Xa){Dd(r,e);return}r.offerRelayTimers[e]=dt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,En(r),r.offerRelayTimers[e]=setTimeout(()=>Pg(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let c=!1;r.offerSignalRelays[e]=l=>{c&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==o.peer||r.offerId!==o.offerId||l.type!=="candidate"||yf(n,l,a,s,h=>({peerId:Rn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===o.peer&&r.offerId===o.offerId))},s(a,fn({peerId:Rn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),c=!0,r.offerSignalBacklog.forEach(l=>r.offerSignalRelays[e]?.(l))},Eg=async(n,e,t,i,s,r,a)=>{let o=Xr(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;let c=!!(o.offerPeer||o.offerRelays.some(Boolean));if((c||r)&&Rn<t)return;c&&Yr(o,n.offerPool);let l=n.initPeer(!1,n.config);o.answeringPeer=l,o.answerSent=!1,o.connectionErrorReported=!1,wg(n,o,t,l),En(o);let h=()=>{o.answeringPeer===l&&!o.connectedPeer&&o.answerSent&&ja(n,o,t),$a(o,l),n.disconnectPeer(l,t),n.checkDeactivate()};l.setHandlers({connect:()=>n.connectPeer(l,t,e),close:h,error:h});let u;try{u=await n.toPlain({type:"offer",sdp:i})}catch{$a(o,l),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(l.isDead){$a(o,l);return}let d=await qr($r(n.rootTopicPlaintext,t));n.isLeaving()||(l.setHandlers({signal:f=>{n.isLeaving()||o.answeringPeer!==l||l.isDead||f.type!=="answer"&&f.type!=="candidate"||yf(n,f,d,a,g=>{let y={peerId:Rn};return f.type==="answer"?(o.answerSent=!0,y.answer=g):y.candidate=g,s&&(y.offerId=s),n.isPassive&&(y.passive=!0),y},()=>o.answeringPeer===l&&!l.isDead)}}),await l.signal(u),await Sg(o,l,s))},Cg=async(n,e,t,i,s)=>{var u;let r;try{r=await n.toPlain({type:of,sdp:t})}catch{return}let a=Xr(n.peerStates,e),o=i&&a?.offerPeer&&a.offerId===i?a.offerPeer:null,c=a?.answeringPeer??null,l=!i&&a?.offerPeer?a.offerPeer:null,h=s&&!s.isDead?s:o??c??l;if(!h||h.isDead){let d=i??sl;((u=a.pendingCandidates)[d]??(u[d]=[])).push(r);return}h.signal(r)},Rg=async(n,e,t,i,s,r)=>{let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(r)n.offerPool.claimLeased(r),r.setHandlers({connect:()=>n.connectPeer(r,t,e),close:()=>n.disconnectPeer(r,t)}),r.signal(a);else{let o=n.peerStates[t];if(!o||!o.offerPeer||o.offerAnswered||s&&o.offerId&&s!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,xf(n,o,t,dg),o.offerPeer.signal(a)}},Pg=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(fl(i,t),n.checkDeactivate())},Ig=n=>e=>async(t,i,s)=>{if(n.isLeaving())return;let r=yg(i);if(!r||xg(r))return;let a=Fr(r,"peerId")??"",o=Fr(r,"offer"),c=Fr(r,"answer"),l=Fr(r,"candidate"),h=Fr(r,"offerId"),u=r.peer,d=r.hasOutgoingOffer===!0,f=r.passive===!0;if(!a||a===Rn)return;let[g,y]=await os([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==y||n.isPassive&&f||(n.isPassive&&!n.isActive&&!c&&!l&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let m=n.peerStates[a],p=m?.connectedPeer;if(p&&m){let v=hg(p);if(v==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(v==="stale")rl(m,a,"message-from-stale-peer");else{let R=Date.now(),T=m.connectedPeerUnhealthySinceMs??R;if(m.connectedPeerUnhealthySinceMs=T,R-T<pg)return;rl(m,a,"message-from-prolonged-disconnect")}}let b=n.sharedPeers.get(n.appId,a);b&&n.sharedPeers.getHealth(b.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),b=void 0);let _=!!(a&&!o&&!c&&!l);if(_&&!b){let v=Xr(n.peerStates,a),R=Rn<a;if(v.answeringPeer||v.connectedPeer||v.offerAnswered)return;if(!R&&!v.offerPeer){let T=await qr($r(n.rootTopicPlaintext,a));!n.isLeaving()&&!v.connectedPeer&&s(T,fn({peerId:Rn}));return}if(v.offerRelays[e])return;v.offerRelays[e]=Xa,En(v)}if(b&&(o||c||l)){if(b.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,b);return}if(_)return Ag(n,e,a,b,s);if(o)return Eg(n,e,a,o,h,d,s);if(l)return Cg(n,a,l,h,u);if(c)return Rg(n,e,a,c,h,u)},Ga=5333,Lg=[233,533,1333],Dg=7533,kg=123333,Ug=({init:n,subscribe:e,announce:t,deactivate:i})=>{let s={},r={},a={},o={},c=new ug,l=()=>Os(s).some(R=>Tn(R).length>0),h=R=>r[R]??(r[R]={}),u=R=>a[R]??(a[R]={}),d=(R,T,C)=>{c.getHealth(R.peer)==="live"&&c.sendRoomPresence(R,T,C)},f=(R,T)=>{is(r[R]??{}).forEach(([C,L])=>{if(!L.shouldAdvertise())return;let{roomToken:Q,roomTokenPromise:x}=L;if(Q){d(T,Q,!0);return}x.then(w=>{r[R]?.[C]===L&&L.roomToken===w&&(c.get(R,T.peerId)!==T||T.isClosing||L.shouldAdvertise()&&d(T,w,!0))})})},g=(R,T,C)=>Os(c.getMap(R)).forEach(L=>d(L,T,C)),y=R=>{o[R]||(o[R]=c.setRoomPresenceHandler(R,(T,C,L)=>{if(!L)return;let Q=c.get(R,T),x=a[R]?.[C];!Q||!x||r[R]?.[x]?.attachSharedPeerToRoom(T,Q)}))},m=R=>{s[R]&&Tn(s[R]).length>0||(o[R]?.(),delete o[R],delete r[R],delete a[R])},p=!1,b=[],_=null,v=rn;return(R,T,C)=>{if(!R)throw ht("requires a config map as the first argument");if(C&&typeof C!="object")throw ht("third argument must be a callbacks object");let{appId:L}=R,Q=C?.onJoinError,x=C?.onPeerHandshake,w=C?.handshakeTimeoutMs;if(!L)throw ht("config map is missing appId field");if(!T)throw ht("roomId argument required");if(w!==void 0&&(!Number.isFinite(w)||w<=0))throw ht("handshakeTimeoutMs must be a positive number");if(s[L]?.[T])return s[L][T];y(L);let X=$r(On,L,T),F=qr(X),E=qr($r(X,Rn)),U=L0(R.password??"",L,T),N=D0(L,T),Z=R._test_only_sharedPeerIdleMs??kg,G=!1,xe=we=>async ie=>({type:ie.type,sdp:await we(U,ie.sdp)}),pe=xe(U0),W=xe(k0),se=c.getMap(L),ke=()=>bd(!0,R),ne=!1;_||(_=new F0(ke));let ue=_,ve=async we=>{let ie=await we.getOffer(Date.now()-we.created>dl);if(!ie||ie.type!=="offer")throw ht("failed to get offer for peer");return(await W(ie)).sdp},Ee=(we,ie)=>{let he=Xr(fe.peerStates,we);he.answeringExpiryTimer=dt(he.answeringExpiryTimer),he.answeringPeer=null;let{proxy:Oe,isNew:Se}=c.bind(T,N,ie,{onDetach:()=>{let me=fe.peerStates[we];me?.connectedPeer===ie.peer&&(me.connectedPeer=null,me.connectedPeerUnhealthySinceMs=null,En(me))}});he.connectedPeer=ie.peer,he.connectedPeerUnhealthySinceMs=null,En(he),Se&&J(Oe,we),Yr(he,ue)},qe=(we,ie,he)=>{if(G){we.destroy();return}let Oe=Xr(fe.peerStates,ie);if(Oe.connectedPeer){let Xe=se[ie];if(Xe&&Oe.connectedPeer===Xe.peer&&Xe.bindings[T])return;Oe.connectedPeer!==we&&!we.isDead&&we.destroy();return}let Se=se[ie];if(Se&&c.getHealth(Se.peer)==="stale"&&(c.clear(L,ie,{destroyPeer:!0}),Se=void 0),Se&&Se.peer!==we){we.isDead||we.destroy(),Ee(ie,Se);return}let me=!Se;Se||(Se=c.register(L,ie,we,Z)),Ee(ie,Se),me&&f(L,Se)},We=(we,ie)=>{if(G)return;let he=fe.peerStates[ie];he?.connectedPeer===we&&(rl(he,ie,"close-event"),le(),!He&&ne&&fe.requeueAnnounce?.())},He=!!R.passive,Ge=null,ae,I=rn,le=()=>{if(!He||!fe.isActive)return;let we=!1;is(fe.peerStates).forEach(([ie,he])=>{he.connectedPeer||he.answeringPeer||he.offerInitPromise||he.offerPeer||he.offerRelays.some(Boolean)?we=!0:he.status==="idle"&&delete fe.peerStates[ie]}),we||(fe.isActive=!1,ae=dt(ae),M.forEach(dt),M.length=0,I(),Ge?.roomToken&&g(L,Ge.roomToken,!1))},fe={appId:L,roomId:T,config:R,peerStates:{},rootTopicPlaintext:X,rootTopicP:F,selfTopicP:E,toPlain:pe,toCipher:W,isLeaving:()=>G,isPassive:He,isActive:!He,onJoinError:Q,sharedPeers:c,offerPool:ue,encryptOffer:ve,initPeer:bd,connectPeer:qe,disconnectPeer:We,attachSharedPeerToRoom:Ee,checkDeactivate:le,announceIntervals:[],announceIntervalMs:Ga},ye={config:R,appId:L,roomId:T,isPassive:He},Ae=Ig(fe);if(!p){let we=n(R);b=(Array.isArray(we)?we:[we]).map(ie=>Promise.resolve(ie)),p=!0,v=R.relayConfig?.manualReconnection?rn:R0()}!He&&!ue.isActive&&ue.warmup(),fe.announceIntervals=b.map(()=>Ga);let Fe=b.map(()=>Ga),Re=b.map(()=>0),P=b.map(()=>0),M=[],Y=b.map(async(we,ie)=>e(await we,await F,await E,Ae(ie),he=>ue.getOffers(he,ve),ye));os([F,E]).then(([we,ie])=>{if(G)return;let he=async(Oe,Se)=>{if(G||He&&!fe.isActive)return;let me=He?{passive:!0}:void 0,Xe;try{Xe=await t(Oe,we,ie,me,ye),P[Se]=0}catch(Ie){let te=P[Se]??0;te===0&&R.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${On}: announce failed - ${Bs(Ie,"")}`),P[Se]=te+1}if(G||He&&!fe.isActive||Xe&&typeof Xe!="number"&&"stopAnnouncing"in Xe)return;typeof Xe=="number"?(fe.announceIntervals[Se]=Xe,Fe[Se]=Xe):Xe&&(Fe[Se]=Xe.nextAnnounceMs,ne||(ne=Xe.reannounceOnDisconnect===!0));let Ye=Re[Se]??0;Re[Se]=Ye+1;let ct=Fe[Se]??Ga,B=Lg[Ye];M[Se]=setTimeout(()=>{he(Oe,Se)},typeof B=="number"?Math.min(ct,B):ct)};I=()=>{i&&b.forEach(async Oe=>{let Se=await Oe;G||i(Se,we,ie,ye)})},fe.requeueAnnounce=()=>{M.forEach(dt),M.length=0,ae=dt(ae),ue.isActive||ue.warmup(),Ge?.roomToken&&g(L,Ge.roomToken,!0),ae=setTimeout(le,Dg),b.forEach(async(Oe,Se)=>{let me=await Oe;me&&!G&&(Re[Se]=0,he(me,Se))})},Y.forEach(async(Oe,Se)=>{if(await Oe,G)return;let me=await b[Se];me&&!G&&(!He||fe.isActive)&&he(me,Se)})});let J=rn,{compose:ce}=B0(R.password??"",L,T),oe=ce(x),Be={...oe?{onPeerHandshake:oe}:{},...w===void 0?{}:{handshakeTimeoutMs:w},isPassive:He,onHandshakeError:(we,ie)=>Q?.({error:ie.replace(/^handshake failed: /,""),appId:L,peerId:we,roomId:T})};s[L]??(s[L]={});let Pe=h(L),Ue=og(we=>J=we,we=>{if(G)return;let ie=fe.peerStates[we];ie?.connectedPeer&&(ie.connectedPeer=null,En(ie),le())},()=>{G=!0,J=rn;let we=r[L]?.[T];we?.roomToken&&(g(L,we.roomToken,!1),delete a[L]?.[we.roomToken],a[L]&&!Tn(a[L]).length&&delete a[L]),r[L]&&(delete r[L][T],Tn(r[L]).length||delete r[L]),is(fe.peerStates).forEach(([ie,he])=>{if(he.answeringExpiryTimer=dt(he.answeringExpiryTimer),he.connectedPeer&&!he.connectedPeer.isDead){let Oe=se[ie];(!Oe||Oe.peer!==he.connectedPeer)&&he.connectedPeer.destroy()}he.answeringPeer&&!he.answeringPeer.isDead&&he.answeringPeer.destroy(),Yr(he,ue),he.connectedPeer=null,he.answeringPeer=null,En(he)}),s[L]&&(delete s[L][T],Tn(s[L]).length===0&&delete s[L]),M.forEach(dt),ae=dt(ae),Y.forEach(async ie=>{(await ie)()}),!l()&&(p=!1,ue.destroy(),_=null,v(),m(L))},Be);return Ge={roomToken:null,roomTokenPromise:N,attachSharedPeerToRoom:Ee,shouldAdvertise:()=>!He||fe.isActive},Pe[T]=Ge,N.then(we=>{let ie=Ge;!ie||G||r[L]?.[T]!==ie||(ie.roomToken=we,u(L)[we]=T,Os(se).forEach(he=>{he.remoteRoomTokens.has(we)&&Ee(he.peerId,he)}),(!He||fe.isActive)&&g(L,we,!0))}),s[L][T]=Ue}},Ng=["offer","answer","candidate"],Og=6e4,Fg=n=>{if(typeof n=="string")try{let e=zs(n);return e&&typeof e=="object"?e:null}catch{return null}return n},Zc=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,Bg=n=>Ng.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),zg=n=>{let e=Fg(n);if(!e||Bg(e))return!1;let t=Zc(e,"peerId");return!!(t&&t!==Rn&&e.passive!==!0&&!Zc(e,"answer")&&!Zc(e,"candidate"))},Kc=n=>{if(!n)throw ht("topic strategy missing room context");return n},kd=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Jc=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),Hg=({steadyAnnounceIntervalMs:n=Og,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>Ug({init:t,subscribe:async(a,o,c,l,h,u)=>{let d=Kc(u),f=(R,T)=>{s(a,R,T,Jc(d,"signal",o,c))},g=null,y=!1,m=null,p=!1,b=R=>{y||(y=!0,R())},_=()=>(m||(m=Promise.resolve(i(a,c,(R,T)=>{p||l(R,T,f)},kd(d,"self",o,c))).then(R=>{g=R,p&&b(R)})),m);d.isPassive||await _();let v=await i(a,o,async(R,T)=>{p||(d.isPassive&&zg(T)&&await _(),p||await l(R,T,f))},kd(d,"root",o,c));return()=>{p=!0,g&&b(g),v()}},announce:async(a,o,c,l,h)=>{let u=Kc(h),d=await s(a,o,fn({peerId:Rn,...l}),Jc(u,"announce",o,c));return typeof d=="number"||d!==void 0&&"stopAnnouncing"in d?d:{nextAnnounceMs:d?.nextAnnounceMs??n,reannounceOnDisconnect:d?.reannounceOnDisconnect??e}},...r?{deactivate:(a,o,c,l)=>{let h=Kc(l);return r(a,o,Jc(h,"announce",o,c))}}:{}}),vf=C0(n=>n.socket),Vg=5,_f="x",Mf="EVENT",{secretKey:Gg,publicKey:Wg}=sf.keygen(),$g=Wr(Wg),bf={},qg={},jc={},Ud=250,Ya=6e4,Xg=15*6e4,Yg=5333,Zr=new WeakMap,al=new WeakSet,ss=new WeakMap,Nd=n=>{let e=Zr.get(n),t=Math.min(e?.delayMs?Math.max(Ya,e.delayMs*2):Ya,Xg);return Zr.set(n,{delayMs:t,untilMs:Date.now()+t}),t},Zg=n=>{let e=Zr.get(n);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},Qc=n=>({nextAnnounceMs:n}),Kg={stopAnnouncing:!0},Jg=n=>{if(al.has(n))return!1;let e=ss.get(n);return e&&(clearTimeout(e.timer),ss.delete(n)),al.add(n),Zr.delete(n),n.close?.(),!0},jg=(n,e)=>{let t=ss.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));let i=t?.eventIds??new Set([e]),s=setTimeout(()=>{ss.delete(n)},Yg);ss.set(n,{eventIds:i,timer:s})},Qg=(n,e)=>{let t=ss.get(n);return t?.eventIds.has(e)?(clearTimeout(t.timer),ss.delete(n),!0):!1},pl=()=>Math.floor(Date.now()/1e3),ml=n=>jc[n]??(jc[n]=cf(n,1e4)+2e4),wf=async(n,e)=>{let t={kind:ml(n),tags:[[_f,n]],created_at:pl(),content:e,pubkey:$g},i=await Ja("SHA-256",fn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return fn([Mf,{...t,id:Wr(i),sig:Wr(await sf.signAsync(i,Gg))}])},ey=(n,e)=>(bf[n]=e,fn(["REQ",n,{kinds:[ml(e)],since:pl(),"#x":[e]}])),si={},Sf=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},ty=(n,e,t)=>{var s;let i=si[s=n.url]??(si[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),Tf(n,i)},ny=(n,e)=>{let t=si[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Sf(t),t.subIds.forEach(i=>n.send(fn(["CLOSE",i]))),delete si[n.url]):Tf(n,t))},Tf=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Af(n)}finally{Sf(e)}},0))},iy=n=>{let e=si[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Af=n=>{let e=si[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],s=pl();for(let r=0;r<t.length;r+=Ud)i.push(t.slice(r,r+Ud));for(;e.subIds.length>i.length;){let r=e.subIds.pop();r&&n.send(fn(["CLOSE",r]))}i.forEach((r,a)=>{var c;let o=(c=e.subIds)[a]??(c[a]=Vs(64));n.send(fn(["REQ",o,{kinds:[...new Set(r.map(ml))],since:s,"#x":r}]))})},sy=n=>{let e=si[n.url];e&&e.topics.size>0&&Af(n)},ry=Hg({init:n=>A0(n,Ef,Vg,!0).map(e=>{let t=vf.register(e,()=>E0(e,i=>{let[s,r,a,o]=zs(i);if(s!==Mf){let c=`${On}: relay failure from ${t.url} - `,l=s==="CLOSED"&&typeof a=="string"?a:o,h=s==="OK"&&a===!1,u=h&&l?.startsWith("rate-limited:"),d=h&&l?.startsWith("duplicate:"),f=s==="CLOSED"||h&&!u&&!d,g=s==="OK"&&Qg(t,r);if(f&&!Jg(t))return;u?Nd(t):g&&Zr.delete(t),!d&&n.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(c+r):(h||s==="CLOSED")&&console.warn(c+l));return}if(a&&typeof a=="object"&&"content"in a){let{content:c}=a,l=qg[r];if(l){l(bf[r]??"",c);return}let h=si[t.url];if(h?.subIds.includes(r)&&a.tags){let u=a.tags.find(d=>d[0]===_f);u?.[1]&&h.topics.get(u[1])?.(u[1],c)}}},()=>sy(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{ty(n,e,(r,a)=>{t(r,a)});let s=()=>{ny(n,e)};return i.kind==="root"?iy(n).then(()=>s):s},publishTopic:async(n,e,t,i)=>{if(al.has(n)||n.isClosed)return i.kind==="announce"?Kg:void 0;if(i.kind==="announce"){let o=Zg(n);if(o>0)return Qc(Math.max(Ya,o))}let s=await wf(e,typeof t=="string"?t:fn(t)),r=n.socket.readyState===1;if(n.send(s),i.kind!=="announce")return;if(!r)return Qc(Nd(n));let a=zs(s)[1].id;return jg(n,a),Qc(Ya)}}),ay=vf.getSockets,Ef=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);});var zc=document.documentElement,cd=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,ld=()=>zc.dataset.theme||(cd?.matches?"dark":"light");function Bc(){let n=ld()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(e=>{e.textContent=n?"\u2600\uFE0F":"\u{1F319}",e.title=n?"Chuy\u1EC3n sang giao di\u1EC7n s\xE1ng":"Chuy\u1EC3n sang giao di\u1EC7n t\u1ED1i",e.setAttribute("aria-label",e.title)})}function n0(){try{let n=localStorage.getItem("theme");(n==="dark"||n==="light")&&(zc.dataset.theme=n)}catch{}document.querySelectorAll("[data-theme-toggle]").forEach(n=>{n.onclick=()=>{let e=ld()==="dark"?"light":"dark";zc.dataset.theme=e;try{localStorage.setItem("theme",e)}catch{}Bc()}}),cd?.addEventListener?.("change",Bc),Bc()}n0();var Ha=typeof window<"u"&&window.SITE_CONFIG||{},Us={appId:"masoi-online-vn-v1",turn:Array.isArray(Ha.turn)?Ha.turn.filter(n=>n&&n.urls):[],relayUrls:Array.isArray(Ha.relayUrls)?Ha.relayUrls:[]};async function Qa(n,{local:e=!1,ns:t=""}={}){let i=(t?t+"-":"")+n.toUpperCase();return e?cy(i):oy(i)}async function oy(n){let{joinRoom:e,selfId:t}=await Promise.resolve().then(()=>(Rf(),Cf)),i={appId:Us.appId};Us.turn?.length&&(i.turnConfig=Us.turn),Us.relayUrls?.length&&(i.relayConfig={urls:Us.relayUrls});let s=e(i,n,{onJoinError:l=>console.warn("[net] join error",l)}),r={},a={},o={selfId:t,mode:"p2p",on(l,h){a[l]=h,c(l).onMessage=(u,{peerId:d})=>h(u,d)},send(l,h,u=null){return c(l).send(h,u?{target:u}:void 0).catch(d=>console.warn("[net] send",d))},peers:()=>Object.keys(s.getPeers()),set onPeerJoin(l){s.onPeerJoin=l},set onPeerLeave(l){s.onPeerLeave=l},set onPeerStream(l){s.onPeerStream=l},addStream:(l,h)=>s.addStream(l,h?{target:h}:void 0),removeStream:l=>s.removeStream(l),leave:()=>s.leave()};function c(l){return r[l]||(r[l]=s.makeAction(l))}return o}function cy(n){let e=Math.random().toString(36).slice(2,10),t=new BroadcastChannel("masoi-"+n),i={},s=new Map,r=()=>{},a=()=>{},o=l=>t.postMessage({...l,from:e});t.onmessage=({data:l})=>{if(l.from===e||l.to&&!l.to.includes(e))return;let h=!s.has(l.from);if(s.set(l.from,Date.now()),l.k==="bye"){s.delete(l.from),a(l.from);return}h&&(r(l.from),o({k:"hi",to:[l.from]})),l.k==="msg"&&setTimeout(()=>i[l.type]?.(l.data,l.from),0)};let c=setInterval(()=>{o({k:"hi"});let l=Date.now();for(let[h,u]of s)l-u>6e3&&(s.delete(h),a(h))},1500);return window.addEventListener("beforeunload",()=>o({k:"bye"})),setTimeout(()=>o({k:"hi"}),50),{selfId:e,mode:"local",on(l,h){i[l]=h},send(l,h,u=null){return o({k:"msg",type:l,data:JSON.parse(JSON.stringify(h)),to:u?[].concat(u):null}),Promise.resolve()},peers:()=>[...s.keys()],set onPeerJoin(l){r=l;for(let h of s.keys())l(h)},set onPeerLeave(l){a=l},set onPeerStream(l){},addStream(){},removeStream(){},leave(){o({k:"bye"}),clearInterval(c),t.close()}}}var eo=class{constructor(e){this.net=e,this.stream=null,this.micOn=!0,this.deaf=!1,this.canSpeak=!0,this.peers=new Map,this.hear=()=>!0,this.ctx=null,this.self=null,this.onLevels=()=>{},this._loop=this._loop.bind(this)}get enabled(){return!!this.stream}async enable(){this.stream||(this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0},video:!1}),this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),await this.ctx.resume().catch(()=>{}),this.self=this._analyser(this.stream),this.net.addStream(this.stream),this.apply(),requestAnimationFrame(this._loop))}ensureCtx(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.resume().catch(()=>{})}peerJoined(e){this.stream&&this.net.addStream(this.stream,e)}peerStream(e,t){this.peerLeft(t);let i=document.createElement("audio");i.autoplay=!0,i.playsInline=!0,i.srcObject=e,document.getElementById("audio-sink").appendChild(i),i.play().catch(()=>{}),this.ensureCtx();let s=this._analyser(e);this.peers.set(t,{audio:i,...s}),this.apply()}peerLeft(e){let t=this.peers.get(e);t&&(t.audio.srcObject=null,t.audio.remove(),this.peers.delete(e))}setMic(e){this.micOn=e,this.apply()}setDeaf(e){this.deaf=e,this.apply()}setRules(e){this.canSpeak=e.canSpeak,this.hear=e.canHear,this.apply()}apply(){if(this.stream)for(let e of this.stream.getAudioTracks())e.enabled=this.micOn&&this.canSpeak;for(let[e,t]of this.peers)t.audio.muted=this.deaf||!this.hear(e),t.audio.muted||t.audio.play().catch(()=>{})}_analyser(e){try{let t=this.ctx.createMediaStreamSource(e),i=this.ctx.createAnalyser();return i.fftSize=512,t.connect(i),{analyser:i,data:new Uint8Array(i.fftSize)}}catch{return{analyser:null,data:null}}}_level(e){if(!e?.analyser)return 0;e.analyser.getByteTimeDomainData(e.data);let t=0;for(let i=0;i<e.data.length;i++){let s=(e.data[i]-128)/128;t+=s*s}return Math.sqrt(t/e.data.length)}_loop(e){if(!this._last||e-this._last>120){this._last=e;let t=new Set;this.self&&this.micOn&&this.canSpeak&&this._level(this.self)>.04&&t.add("self");for(let[i,s]of this.peers)!s.audio.muted&&this._level(s)>.04&&t.add(i);this.onLevels(t)}requestAnimationFrame(this._loop)}};var Tt=n=>`<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${n}</svg>`,jr={wolf:Tt(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),villager:Tt(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),seer:Tt(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),guard:Tt(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),witch:Tt(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),hunter:Tt(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`)},ly={moon:Tt('<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>'),sun:Tt('<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>'),skull:Tt('<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>'),vote:Tt('<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>'),noose:Tt('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>'),mic:Tt('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>'),micOff:Tt('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>'),speaker:Tt('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>'),speakerOff:Tt('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>'),crown:Tt('<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>'),copy:Tt('<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>'),chat:Tt('<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>'),users:Tt('<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>'),card:Tt('<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>'),door:Tt('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>'),heal:Tt('<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>'),poison:Tt('<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>')};function Ci(n,e=""){return`<span class="ic ${e}">${ly[n]||jr[n]||""}</span>`}var Yn=["\u{1F98A}","\u{1F43C}","\u{1F42F}","\u{1F438}","\u{1F435}","\u{1F427}","\u{1F981}","\u{1F428}","\u{1F430}","\u{1F419}","\u{1F984}","\u{1F432}","\u{1F43B}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F433}","\u{1F996}"],Ri=["#ff6b6b","#ffa94d","#ffd43b","#38d9a9","#4dabf7","#9775fa","#f783ac","#69db7c"];var be=(n,e=document)=>e.querySelector(n),Vt=(n,e=document)=>[...e.querySelectorAll(n)],ea=new URLSearchParams(location.search),Ii=ea.get("local")==="1"||window.MASOI_LOCAL===!0;function Pf(n){return{get:e=>{try{return n().getItem(e)}catch{return null}},set:(e,t)=>{try{n().setItem(e,t)}catch{}},del:e=>{try{n().removeItem(e)}catch{}}}}var Gs=Pf(()=>sessionStorage),Pn=Pf(()=>localStorage),rt=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function to(n){let e="abcdefghijkmnpqrstuvwxyz23456789",t="";for(let i of crypto.getRandomValues(new Uint8Array(n)))t+=e[i%e.length];return t}var If=()=>to(6).toUpperCase();function Lf(){if(Ii&&ea.get("as")){let e=ea.get("as").slice(0,18),t=[...e].reduce((i,s)=>i+s.codePointAt(0),0);return{name:e,av:{e:Yn[t%Yn.length],c:t%Ri.length},test:!0}}let n=null;try{n=JSON.parse(Pn.get("masoi-av")||"null")}catch{}return(!n||!Yn.includes(n.e))&&(n={e:Yn[Math.floor(Math.random()*Yn.length)],c:Math.floor(Math.random()*Ri.length)}),{name:Pn.get("masoi-name")||"",av:n}}function Ws(n){n.test||(Pn.set("masoi-name",n.name||""),Pn.set("masoi-av",JSON.stringify(n.av)))}function Df(){let n="masoi-cid",e=Gs.get(n)||to(12);return Gs.set(n,e),e}var an=(n,e="")=>n?.av?`<span class="avatar ${e}" style="--av:${Ri[n.av.c]||Ri[0]}">${n.av.e}</span>`:`<span class="avatar ${e}">?</span>`;function kf(n,e,t){let i=()=>{n.innerHTML=`
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${Yn.map(s=>`<button type="button" class="${s===e.av.e?"on":""}" data-e="${s}" aria-label="Avatar ${s}">${s}</button>`).join("")}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">M\xE0u n\u1EC1n</div>
      <div class="color-row">${Ri.map((s,r)=>`<button type="button" class="${r===e.av.c?"on":""}" data-c="${r}" style="--sw:${s}" aria-label="M\xE0u ${r+1}"></button>`).join("")}</div>`,Vt("[data-e]",n).forEach(s=>s.onclick=()=>{e.av.e=s.dataset.e,Ws(e),i(),t?.()}),Vt("[data-c]",n).forEach(s=>s.onclick=()=>{e.av.c=Number(s.dataset.c),Ws(e),i(),t?.()})};i()}function At(n,e=!1){let t=be("#toasts");t||(t=document.createElement("div"),t.id="toasts",document.body.appendChild(t));let i=document.createElement("div");i.className="toast"+(e?" err":""),i.textContent=n,t.appendChild(i),setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.remove(),300)},3200)}function gl(){let n=document.createElement("div");n.className="confetti";let e=["#ffc93d","#ff5a6a","#2f8bff","#12c584","#ff6fb5","#9b5cf6"];n.innerHTML=Array.from({length:80},()=>`<i style="left:${Math.random()*100}%;background:${e[Math.floor(Math.random()*e.length)]};animation-duration:${2+Math.random()*2.5}s;animation-delay:${Math.random()*.8}s;transform:rotate(${Math.random()*360}deg)"></i>`).join(""),document.body.appendChild(n),setTimeout(()=>n.remove(),5500)}var Pi;function yl(){try{Pi||(Pi=new(window.AudioContext||window.webkitAudioContext)),Pi.resume()}catch{}}document.addEventListener("pointerdown",yl,{once:!0});function Qr(n,e="sine",t=.09){try{if(!Pi||Pi.state!=="running")return;let i=Pi.currentTime;for(let[s,r]of n){let a=Pi.createOscillator(),o=Pi.createGain();a.type=e,a.frequency.setValueAtTime(s,i),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+r),a.connect(o).connect(Pi.destination),a.start(i),a.stop(i+r+.05),i+=r*.85}}catch{}}var ta={buzz:()=>Qr([[880,.12],[1320,.25]],"square",.06),correct:()=>Qr([[523,.12],[659,.12],[784,.12],[1047,.35]],"triangle",.1),wrong:()=>Qr([[220,.25],[160,.4]],"sawtooth",.05),tick:()=>Qr([[1200,.05]],"sine",.04),start:()=>Qr([[392,.1],[523,.1],[659,.2]],"triangle",.08)};function xl(n){let e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",n),Ii&&e.searchParams.set("local","1"),e.toString()}async function vl(n,e="\u0110\xE3 sao ch\xE9p!"){try{await navigator.clipboard.writeText(n),At(e)}catch{window.prompt("Sao ch\xE9p link n\xE0y:",n)}}var hy={rounds:5,scoring:"both",listens:2,categories:null},cs=3,uy=8,dy=15,fy=9,no=(n,e,t,i)=>(n=Math.round(Number(n)),Number.isFinite(n)?Math.max(e,Math.min(t,n)):i),py=n=>{for(let e=n.length-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n},my=n=>Math.max(2.5,Math.min(9,n*1.35+1)),gy=(n,e)=>.8+e*(n+.9);function Uf(n){let e=[],t=new Set;for(let s of n?.items||[])!s||!s.id||!s.name||t.has(s.id)||(t.add(s.id),e.push({id:String(s.id),name:String(s.name).slice(0,40),emo:String(s.emo||"\u{1F399}\uFE0F").slice(0,4),category:String(s.category||"Kh\xE1c").slice(0,30),hint:String(s.hint||"").slice(0,90),duration:Math.max(.3,Math.min(10,Number(s.duration)||2)),points:no(s.points,5,50,10)}));let i=[...new Set(e.map(s=>s.category))];return{items:e,categories:i}}var io=class{constructor(e,t,{now:i=()=>Date.now(),cleanAv:s=a=>a,cleanLook:r=a=>a}={}){this.now=i,this.cleanAv=s,this.cleanLook=r,this.data=t,this.custom=[],this.onChange=()=>{},this.onEvent=()=>{},this.s={hostCid:e,phase:"lobby",players:[],config:{...hy},round:0,totalRounds:0,item:null,used:[],takes:{},votes:{},show:null,results:null,log:[],logSeq:0,endsAt:0,durMs:0,gameId:0,rec:null}}P(e){return this.s.players.find(t=>t.cid===e)}byPid(e){return this.s.players.find(t=>t.pid===e)}isHost(e){return e===this.s.hostCid}name(e){return this.P(e)?.name??"???"}changed(){this.onChange()}log(e,t="info"){this.s.log.push({id:++this.s.logSeq,text:e,kind:t,ts:Date.now()}),this.s.log.length>80&&this.s.log.splice(0,this.s.log.length-80)}setTimer(e){this.s.durMs=Math.round(e*1e3),this.s.endsAt=this.now()+this.s.durMs}allItems(){return[...this.custom,...this.data.items]}categories(){return[...new Set(this.allItems().map(e=>e.category))]}pool(){let e=this.s.config.categories;return this.allItems().filter(t=>t.custom||!e||e.includes(t.category))}addPlayer(e,t,i){let s=String(t?.name||"").trim().slice(0,18)||"Ng\u01B0\u1EDDi l\u1EA1",r=this.cleanAv(t?.av),a=this.cleanLook(t?.look),o=this.P(e);if(o)return o.pid=i,o.connected=!0,o.look=a,this.s.phase==="lobby"&&(o.name=s,o.av=r),this.changed(),null;if(this.s.players.length>=16)return"Ph\xF2ng \u0111\xE3 \u0111\u1EE7 ng\u01B0\u1EDDi.";let c=s,l=2;for(;this.s.players.some(h=>h.name===c);)c=`${s} ${l++}`;return this.s.players.push({cid:e,pid:i,name:c,av:r,look:a,connected:!0,score:0,wins:0}),this.log(`${c} \u0111\xE3 v\xE0o ph\xF2ng.`,"join"),this.changed(),null}disconnect(e){let t=this.byPid(e);t&&(this.s.phase==="lobby"&&!this.isHost(t.cid)?(this.s.players=this.s.players.filter(i=>i!==t),this.log(`${t.name} \u0111\xE3 r\u1EDDi ph\xF2ng.`,"leave")):t.connected=!1,this.changed(),this.maybeAdvance())}handle(e,t){if(!this.P(e)||!t||typeof t!="object")return"Kh\xF4ng h\u1EE3p l\u1EC7.";let s=this.isHost(e),r=this.s;switch(t.t){case"cfg":return s&&r.phase==="lobby"?this.setConfig(t.cfg):"Ch\u1EC9 ch\u1EE7 ph\xF2ng m\u1EDBi ch\u1EC9nh \u0111\u01B0\u1EE3c.";case"start":return s?this.start():"Ch\u1EC9 ch\u1EE7 ph\xF2ng m\u1EDBi b\u1EAFt \u0111\u1EA7u \u0111\u01B0\u1EE3c.";case"lobby":return!s||r.phase!=="end"?"Kh\xF4ng th\u1EC3.":(this.toLobby(),null);case"skip":return!s||r.phase==="lobby"||r.phase==="end"?"Kh\xF4ng th\u1EC3.":(this.advance(),null);case"vote":return this.vote(e,t.target);case"kick":{if(!s||r.phase!=="lobby"||t.cid===e)return"Kh\xF4ng th\u1EC3 m\u1EDDi ra.";let a=this.P(t.cid);return a&&(r.players=r.players.filter(o=>o!==a),this.log(`${a.name} \u0111\xE3 b\u1ECB m\u1EDDi ra.`,"leave"),this.changed()),null}}return"H\xE0nh \u0111\u1ED9ng kh\xF4ng r\xF5."}setConfig(e){let t=this.s.config;if(e&&"rounds"in e&&(t.rounds=no(e.rounds,1,20,t.rounds)),e&&"listens"in e&&(t.listens=no(e.listens,1,3,t.listens)),e&&"scoring"in e&&(t.scoring=["auto","vote","both"].includes(e.scoring)?e.scoring:t.scoring),e&&"categories"in e){let i=this.data.categories;t.categories=Array.isArray(e.categories)?e.categories.filter(s=>i.includes(s)):null,t.categories&&t.categories.length===i.length&&(t.categories=null)}return this.changed(),null}addCustom(e){let t={id:String(e.id),name:String(e.name||"\xC2m thanh t\u1EF1 th\xEAm").slice(0,40),emo:String(e.emo||"\u{1F399}\uFE0F").slice(0,4),category:"T\u1EF1 th\xEAm",hint:String(e.hint||"").slice(0,90),duration:Math.max(.3,Math.min(10,Number(e.duration)||2)),points:15,custom:!0,by:e.by||null};return this.custom=this.custom.filter(i=>i.id!==t.id),this.custom.push(t),this.log(`\u{1F3B5} \u0110\xE3 th\xEAm \u0111\u1EC1 "${t.name}".`,"info"),this.changed(),t}removeCustom(e){this.custom=this.custom.filter(t=>t.id!==e),this.changed()}canStart(){return this.s.players.filter(t=>t.connected).length<2?"C\u1EA7n \xEDt nh\u1EA5t 2 ng\u01B0\u1EDDi ch\u01A1i.":this.pool().length?null:"Ch\u01B0a ch\u1ECDn nh\xF3m \u0111\u1EC1 n\xE0o."}start(){let e=this.canStart();if(e)return e;let t=this.s;return t.players=t.players.filter(i=>i.connected),t.players.forEach(i=>{i.score=0,i.wins=0}),Object.assign(t,{round:0,totalRounds:t.config.rounds,used:[],log:[],gameId:t.gameId+1,results:null}),this.log("Tr\xF2 ch\u01A1i b\u1EAFt \u0111\u1EA7u! Nghe k\u1EF9 \xE2m m\u1EABu r\u1ED3i nh\u1EA1i th\u1EADt gi\u1ED1ng nh\xE9.","phase"),this.nextRound(),null}drawItem(){let e=this.s,t=this.pool().filter(a=>!e.used.includes(a.id)),i=t.filter(a=>a.custom),s=i.length?i:t;s.length||(e.used=[],s=this.pool());let r=i.length?s[0]:s[Math.floor(Math.random()*s.length)];return e.used.push(r.id),r}nextRound(){let e=this.s;if(e.round>=e.totalRounds)return this.finish();e.round++,e.item=this.drawItem(),e.takes={},e.votes={},e.show=null,e.results=null,e.phase="listen",this.setTimer(gy(e.item.duration,e.config.listens)),this.log(`\u0110\u1EC1 ${e.round}/${e.totalRounds}: ${e.item.emo} ${e.item.name}`,"phase"),this.onEvent({type:"round"}),this.changed()}startRecord(){let e=this.s;e.phase="record",e.rec={count:cs,win:my(e.item.duration)},this.setTimer(cs+e.rec.win+.4),this.onEvent({type:"record"}),this.changed()}takeIn(e,t){let i=this.s;return!["record","collect"].includes(i.phase)||!this.P(e)?!1:(i.takes[e]={len:Math.max(.2,Math.min(12,Number(t)||1)),auto:i.takes[e]?.auto??null},this.changed(),this.maybeAdvance(),!0)}setAuto(e,t){let i=this.s.takes[e];i&&(i.auto={score:no(t?.score,0,100,0),pitch:t?.pitch??null,rhythm:t?.rhythm??null,length:t?.length??null,silent:!!t?.silent},this.changed())}maybeAdvance(){let e=this.s;if(e.phase==="collect")e.players.filter(i=>i.connected).every(i=>e.takes[i.cid])&&this.startShow();else if(e.phase==="vote"){let t=e.players.filter(i=>i.connected);t.length&&t.every(i=>e.votes[i.cid]||!this.voteTargets(i.cid).length)&&this.reveal()}}startShow(){let e=this.s,t=py(Object.keys(e.takes));e.show={idx:0,slots:[{who:"ref",len:e.item.duration},...t.map(i=>({who:i,len:e.takes[i].len}))]},e.phase="show",this.setTimer(e.show.slots[0].len+1.4),this.onEvent({type:"show"}),this.changed()}nextSlot(){let e=this.s;if(e.show.idx++,e.show.idx>=e.show.slots.length)return this.afterShow();this.setTimer(e.show.slots[e.show.idx].len+1.2),this.changed()}useVotes(){let e=this.s;return e.config.scoring!=="auto"&&Object.keys(e.takes).length>=2&&e.players.filter(t=>t.connected).length>=2}voteTargets(e){return Object.keys(this.s.takes).filter(t=>t!==e)}afterShow(){let e=this.s;if(!Object.keys(e.takes).length)return this.log("Kh\xF4ng ai g\u1EEDi b\u1EA3n nh\u1EA1i n\xE0o\u2026","info"),this.reveal();this.useVotes()?(e.phase="vote",this.setTimer(dy),this.changed()):this.reveal()}vote(e,t){let i=this.s;return i.phase!=="vote"?"Ch\u01B0a t\u1EDBi l\xFAc b\u1ECF phi\u1EBFu.":t===e?"Kh\xF4ng \u0111\u01B0\u1EE3c t\u1EF1 b\u1EA7u cho m\xECnh!":i.takes[t]?(i.votes[e]=t,this.changed(),this.maybeAdvance(),null):"Ng\u01B0\u1EDDi n\xE0y kh\xF4ng c\xF3 b\u1EA3n nh\u1EA1i."}reveal(){let e=this.s,t=e.config.scoring,i={};for(let o of Object.values(e.votes))i[o]=(i[o]||0)+1;let s=this.useVotes()&&t!=="auto",r=t!=="vote",a=Object.entries(e.takes).map(([o,c])=>{let l=c.auto?.score??0,h=i[o]||0,u=0;return t==="auto"||t==="both"&&!s?u=l:t==="vote"?u=s?h*30:l:u=Math.round(l*.6)+h*20,u=Math.round(u*e.item.points/10),{cid:o,auto:r||!s?c.auto:null,votes:s?h:null,pts:u}}).sort((o,c)=>c.pts-o.pts);a.length&&a[0].pts>0&&(a[0].best=!0);for(let o of a){let c=this.P(o.cid);c&&(c.score+=o.pts,o.best&&c.wins++)}e.results=a,e.phase="reveal",a[0]?.best&&this.log(`\u{1F451} ${this.name(a[0].cid)} nh\u1EA1i gi\u1ED1ng nh\u1EA5t \u0111\u1EC1 "${e.item.name}" (+${a[0].pts})!`,"correct"),this.setTimer(fy),this.onEvent({type:"reveal"}),this.changed()}advance(){let e=this.s;e.phase==="listen"?this.startRecord():e.phase==="record"?(e.phase="collect",this.setTimer(uy),this.changed(),this.maybeAdvance()):e.phase==="collect"?this.startShow():e.phase==="show"?this.nextSlot():e.phase==="vote"?this.reveal():e.phase==="reveal"&&this.nextRound()}finish(){let e=this.s;e.phase="end",e.endsAt=0,e.durMs=0,e.show=null;let t=[...e.players].sort((i,s)=>s.score-i.score)[0];this.log(t?`K\u1EBFt th\xFAc! ${t.name} l\xE0 Vua Nh\u1EA1i v\u1EDBi ${t.score} \u0111i\u1EC3m.`:"K\u1EBFt th\xFAc!","win"),this.onEvent({type:"end"}),this.changed()}toLobby(){let e=this.s;e.players=e.players.filter(t=>t.connected),e.players.forEach(t=>{t.score=0,t.wins=0}),Object.assign(e,{phase:"lobby",round:0,item:null,takes:{},votes:{},show:null,results:null,endsAt:0,durMs:0}),this.log("Quay v\u1EC1 ph\xF2ng ch\u1EDD.","phase"),this.changed()}tick(){let e=this.s;!e.endsAt||this.now()<e.endsAt||this.advance()}pub(){let e=this.s,t=e.show?e.show.slots[e.show.idx]?.who:null,i=t&&t!=="ref"?this.P(t):null;return{phase:e.phase,gameId:e.gameId,hostCid:e.hostCid,remaining:e.endsAt?Math.max(0,e.endsAt-this.now()):0,durMs:e.durMs,players:e.players.map(s=>({cid:s.cid,pid:s.pid,name:s.name,av:s.av,skin:s.look?.skin,connected:s.connected,score:s.score,wins:s.wins})),config:e.config,categories:this.data.categories,poolCount:this.pool().length,custom:this.custom.map(s=>({id:s.id,name:s.name,duration:s.duration,by:s.by})),round:e.round,totalRounds:e.totalRounds,item:e.item,rec:e.rec,takes:Object.fromEntries(Object.entries(e.takes).map(([s,r])=>[s,{len:r.len}])),voted:e.phase==="vote"?Object.keys(e.votes):[],show:e.show&&{idx:e.show.idx,slots:e.show.slots},performerLook:i?.look||null,results:e.results,log:e.log.slice(-40)}}};function yy(n,e){let t=Math.max(1,Math.floor(e/11025));if(t===1)return{y:n,sr:e};let i=Math.floor(n.length/t),s=new Float32Array(i);for(let r=0;r<i;r++){let a=0;for(let o=0;o<t;o++)a+=n[r*t+o];s[r]=a/t}return{y:s,sr:e/t}}function xy(n,e,t,i=70,s=1500){let r=Math.floor(t/s),a=Math.min(Math.floor(t/i),512/2-1),o=512/2,c=new Float32Array(a+1);for(let p=1;p<=a;p++){let b=0;for(let _=0;_<o;_++){let v=n[e+_]-n[e+_+p];b+=v*v}c[p]=b}let l=0,h=-1,u=new Float32Array(a+1);u[0]=1;for(let p=1;p<=a;p++)l+=c[p],u[p]=l?c[p]*p/l:1;for(let p=r;p<=a;p++)if(u[p]<.18){for(;p+1<=a&&u[p+1]<u[p];)p++;h=p;break}if(h<0){let p=1;for(let b=r;b<=a;b++)u[b]<p&&(p=u[b],h=b);if(p>.35)return 0}let d=u[h-1]??u[h],f=u[h],g=u[h+1]??u[h],y=d-2*f+g,m=y?h+(d-g)/(2*y):h;return t/m}function na(n,e){let{y:t,sr:i}=yy(n,e),s=Math.round(i*.02),r=Math.max(0,Math.floor((t.length-512)/s)+1),a=new Float32Array(r),o=new Float32Array(r),c=-120;for(let y=0;y<r;y++){let m=y*s,p=0;for(let b=0;b<512;b++)p+=t[m+b]*t[m+b];a[y]=10*Math.log10(p/512+1e-10),a[y]>c&&(c=a[y])}for(let y=0;y<r;y++)o[y]=a[y]>c-30?xy(t,y*s,i):0;let l=c-32,h=0,u=r-1;for(;h<r&&a[h]<l;)h++;for(;u>h&&a[u]<l;)u--;let d=[];for(let y=h;y<=u;y++){let m=Math.max(0,Math.min(1,(a[y]-(c-40))/40)),p=o[y]>0?12*Math.log2(o[y]/440)+69:NaN;d.push({e:m,p})}for(let y=1;y<d.length-1;y++){let m=[d[y-1].p,d[y].p,d[y+1].p].filter(p=>!Number.isNaN(p)).sort((p,b)=>p-b);m.length===3&&(d[y].pm=m[1])}for(let y of d)y.pm!==void 0&&(y.p=y.pm,delete y.pm);let f=d.filter(y=>!Number.isNaN(y.p)).map(y=>y.p).sort((y,m)=>y-m),g=f.length?f[Math.floor(f.length/2)]:0;for(let y of d)y.r=Number.isNaN(y.p)?NaN:y.p-g;return{frames:d,maxDb:c,voicedRatio:d.length?f.length/d.length:0,dur:d.length*.02}}function Nf(n,e){let t=n.frames,i=e.frames;if(!i.length||e.maxDb<-50)return{score:0,pitch:0,rhythm:0,length:0,silent:!0};if(!t.length)return{score:0,pitch:0,rhythm:0,length:0};let s=t.length,r=i.length,a=n.voicedRatio>.3,o=Math.max(8,Math.ceil(Math.max(s,r)*.35)),c=1e9,l=new Float64Array(r+1).fill(c),h=new Float64Array(r+1),u=new Float64Array(r+1),d=new Float64Array(r+1),f=new Float64Array(r+1),g=new Float64Array(r+1);l[0]=0;for(let Q=1;Q<=s;Q++){h.fill(c),d.fill(0),g.fill(0);let x=Math.round(Q*r/s),w=Math.max(1,x-o),X=Math.min(r,x+o),F=t[Q-1];for(let E=w;E<=X;E++){let U=i[E-1],N=Math.abs(F.e-U.e),Z,G=!Number.isNaN(F.r),xe=!Number.isNaN(U.r);if(G&&xe){let ne=Math.abs(F.r-U.r);ne=Math.min(ne,Math.abs(ne-12),Math.abs(ne+12)*1.2),Z=Math.min(ne,7)/7}else G!==xe?Z=.45*Math.max(F.e,U.e):Z=0;let pe=N*.8+(a?Z*1.2:Z*.4),W=l[E-1],se=u[E-1],ke=f[E-1];l[E]<W&&(W=l[E],se=u[E],ke=f[E]),h[E-1]<W&&(W=h[E-1],se=d[E-1],ke=g[E-1]),h[E]=W+pe,d[E]=se+1,g[E]=ke+Z}[l,h]=[h,l],[u,d]=[d,u],[f,g]=[g,f]}let y=l[r],m=u[r]||1;if(y>=c/2)return{score:5,pitch:0,rhythm:0,length:0};let p=y/m,b=e.dur/Math.max(.05,n.dur),_=Math.abs(Math.log2(b)),v=100*Math.exp(-(p*2.1+Math.max(0,_-.15)*1.3)),R=a?100*(1-Math.min(1,f[r]/m)):null,T=100*Math.exp(-p*1.2),C=100*Math.exp(-_*1.6),L=100*Math.pow(Math.max(0,Math.min(1,(v-18)/72)),.8);return{score:Math.round(L),raw:Math.round(v),pitch:R==null?null:Math.round(R),rhythm:Math.round(T),length:Math.round(C)}}var Fn=12e3;function _l(n,e,t){if(e===t)return Float32Array.from(n);let i=Math.floor(n.length*t/e),s=new Float32Array(i),r=e/t,a=Math.max(1,Math.round(r));for(let o=0;o<i;o++){let c=o*r,l=0,h=0;for(let u=Math.floor(c-a/2);u<=Math.floor(c+a/2);u++)u>=0&&u<n.length&&(l+=n[u],h++);s[o]=h?l/h:0}return s}function Ml(n){let e=new Uint8Array(n.length);for(let t=0;t<n.length;t++){let i=Math.max(-1,Math.min(1,n[t])),s=Math.sign(i)*Math.log1p(255*Math.abs(i))/Math.log1p(255);e[t]=Math.round((s+1)*127.5)}return e}function so(n){let e=new Float32Array(n.length);for(let t=0;t<n.length;t++){let i=n[t]/127.5-1;e[t]=Math.sign(i)*(Math.pow(256,Math.abs(i))-1)/255}return e}function Of(n){let e="";for(let t=0;t<n.length;t+=32768)e+=String.fromCharCode.apply(null,n.subarray(t,t+32768));return btoa(e)}function bl(n){let e=atob(n),t=new Uint8Array(e.length);for(let i=0;i<e.length;i++)t[i]=e.charCodeAt(i);return t}var ia=null;function Zn(){return ia||(ia=new(window.AudioContext||window.webkitAudioContext)),ia.state==="suspended"&&ia.resume().catch(()=>{}),ia}var ra=new Map;function Ff(n,e){if(ra.has(n))return ra.get(n);let t=(async()=>{let i;if(e instanceof Uint8Array)i=e.buffer.slice(e.byteOffset,e.byteOffset+e.byteLength);else{let a=await fetch(e);if(!a.ok)throw new Error("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c \xE2m thanh "+n);i=await a.arrayBuffer()}let s=await Zn().decodeAudioData(i),r=vy(s.getChannelData(0),s.sampleRate);return{buffer:s,feat:na(r,Fn)}})();return ra.set(n,t),t.catch(()=>ra.delete(n)),t}function Bf(n,e){let t=so(bl(e)),i=ao(t,Fn),s=Promise.resolve({buffer:i,feat:na(t,Fn)});return ra.set(n,s),s}function vy(n,e){return so(Ml(_l(n,e,Fn)))}function wl(n,e){return Of(Ml(_l(n,e,Fn)))}function ro(n){return so(bl(n))}function ao(n,e){let t=Zn().createBuffer(1,Math.max(1,n.length),e);return t.copyToChannel(n instanceof Float32Array?n:Float32Array.from(n),0),t}var ls=null;function Sl(){if(ls){try{ls.src.stop()}catch{}ls.done(),ls=null}}function aa(n,{onLevel:e,gain:t=1}={}){Sl();let i=Zn(),s=i.createBufferSource();s.buffer=n;let r=i.createGain();r.gain.value=t;let a=i.createAnalyser();a.fftSize=512,s.connect(r),r.connect(a),a.connect(i.destination);let o=new Uint8Array(a.fftSize),c=0,l=!1,h=()=>{if(l)return;a.getByteTimeDomainData(o);let u=0;for(let d=0;d<o.length;d++){let f=(o[d]-128)/128;u+=f*f}e?.(Math.min(1,Math.sqrt(u/o.length)*4)),c=requestAnimationFrame(h)};return new Promise(u=>{let d=()=>{l||(l=!0,cancelAnimationFrame(c),e?.(null),u())};ls={src:s,done:d},s.onended=()=>{ls?.src===s&&(ls=null),d()},s.start(),h()})}var sa=null;async function oo(){return sa&&sa.getAudioTracks().some(n=>n.readyState==="live")||(sa=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!0},video:!1})),sa}async function Tl(n,{onLevel:e}={}){let t=await oo(),i=Zn(),s=i.createMediaStreamSource(t),r=i.createScriptProcessor(4096,1,1),a=[],o=0,c=i.createGain();c.gain.value=0,s.connect(r),r.connect(c),c.connect(i.destination),r.onaudioprocess=u=>{let d=u.inputBuffer.getChannelData(0);a.push(new Float32Array(d)),o+=d.length;let f=0;for(let g=0;g<d.length;g+=4)f+=d[g]*d[g];e?.(Math.min(1,Math.sqrt(f/(d.length/4))*5))},await new Promise(u=>setTimeout(u,n*1e3)),r.onaudioprocess=null;try{s.disconnect(),r.disconnect(),c.disconnect()}catch{}e?.(null);let l=new Float32Array(o),h=0;for(let u of a)l.set(u,h),h+=u.length;return{samples:l,sr:i.sampleRate}}async function zf(n){let e=await oo(),t=Zn(),i=t.createMediaStreamSource(e),s=t.createAnalyser();s.fftSize=512,i.connect(s);let r=new Uint8Array(s.fftSize),a=!0,o=()=>{if(!a)return;s.getByteTimeDomainData(r);let c=0;for(let l=0;l<r.length;l++){let h=(r[l]-128)/128;c+=h*h}n(Math.min(1,Math.sqrt(c/r.length)*5)),requestAnimationFrame(o)};return o(),()=>{a=!1;try{i.disconnect()}catch{}n(null)}}function Hf(n,e,t=8){let i=0;for(let c=0;c<n.length;c++)i=Math.max(i,Math.abs(n[c]));let s=i*.04,r=0,a=n.length-1;for(;r<a&&Math.abs(n[r])<s;)r++;for(;a>r&&Math.abs(n[a])<s;)a--;r=Math.max(0,r-Math.round(e*.05)),a=Math.min(n.length,a+Math.round(e*.1),r+Math.round(e*t));let o=n.slice(r,a);if(i>0)for(let c=0;c<o.length;c++)o[c]=o[c]/i*.9;return o}var Al=[{id:"tron",name:"B\xE9 \u0110\u1EE5t",emo:"\u{1F642}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffc93d",bottom:"#2f8bff",shoes:"#ff4d6d",hairStyle:"ahoge",sleeve:.3,pants:.35,face:["blush"]},{id:"hocsinh",name:"H\u1ECDc Sinh",emo:"\u{1F392}",skin:"#fbcca6",hair:"#1d1648",top:"#ffffff",bottom:"#2a3a7a",shoes:"#1d1648",hairStyle:"spiky",sleeve:.3,pants:.35,extra:{scarf:"#ff3d4f",pack:"#38b2ff"}},{id:"cogiao",name:"C\xF4 Gi\xE1o",emo:"\u{1F469}\u200D\u{1F3EB}",skin:"#fcd2b0",hair:"#2a1a14",top:"#fbfbff",bottom:"#fbfbff",shoes:"#c0392b",hairStyle:"long",sleeve:1,pants:1,face:["glasses"],extra:{aodai:"#fbfbff"}},{id:"nonla",name:"C\xF4 Ba N\xF3n L\xE1",emo:"\u{1F38B}",skin:"#f7cfa6",hair:"#1a1a1a",top:"#9b5cf6",bottom:"#ffffff",shoes:"#c0392b",hairStyle:"long",hat:"nonla",sleeve:1,pants:1,extra:{aodai:"#9b5cf6"}},{id:"banhmi",name:"C\xF4 B\xE1nh M\xEC",emo:"\u{1F956}",skin:"#f6c9a0",hair:"#3a2418",top:"#ff8fb8",bottom:"#4b4478",shoes:"#ffc93d",hairStyle:"bun",hat:"scarfHead",hatColor:"#ff6f3c",sleeve:.5,pants:1,extra:{apron:"#ff9a3c"}},{id:"xeom",name:"Ch\xFA Xe \xD4m",emo:"\u{1F6F5}",skin:"#e8b48a",hair:"#1a1a1a",top:"#3aa357",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"helmet",hatColor:"#2fbf71",face:["mustache"],sleeve:1,pants:1},{id:"ngoai",name:"B\xE0 Ngo\u1EA1i",emo:"\u{1F475}",skin:"#f3c9a6",hair:"#eeeef5",top:"#a86b3c",bottom:"#2b2550",shoes:"#6b4426",hairStyle:"bun",face:["glasses","blush"],sleeve:1,pants:1,extra:{belt:"#2b2550"}},{id:"baove",name:"B\xE1c B\u1EA3o V\u1EC7",emo:"\u{1F46E}",skin:"#e8b48a",hair:"#2a1a14",top:"#c9b27a",bottom:"#6b5a3a",shoes:"#1d1648",hairStyle:"short",hat:"cap",hatColor:"#2b3a6b",face:["mustache"],sleeve:.5,pants:1,extra:{whistle:!0,badge:!0,belt:"#3a2a1c"}},{id:"shipper",name:"Anh Shipper",emo:"\u{1F4E6}",skin:"#ffd2a6",hair:"#1a1a1a",top:"#ff8a1f",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"fullhelmet",hatColor:"#ff8a1f",sleeve:1,pants:1,extra:{box:"#ff8a1f"}},{id:"chef",name:"Vua \u0110\u1EA7u B\u1EBFp",emo:"\u{1F468}\u200D\u{1F373}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffffff",bottom:"#2b2550",shoes:"#1d1648",hairStyle:"short",hat:"chef",face:["curly"],sleeve:1,pants:1,extra:{scarf:"#ff3d4f",apron:"#ffffff"}},{id:"chotdon",name:"Ch\u1ECB Ch\u1ED1t \u0110\u01A1n",emo:"\u{1F4F1}",skin:"#fcd2b0",hair:"#a8452a",top:"#ff3d8b",bottom:"#1d1648",shoes:"#ffc93d",hairStyle:"wavy",face:["blush"],sleeve:.3,pants:.4,extra:{dress:"#ff3d8b",chain:!0}},{id:"scientist",name:"Gi\xE1o S\u01B0 Kh\xF9ng",emo:"\u{1F9EA}",skin:"#fbcca6",hair:"#eeeef5",top:"#4dabf7",bottom:"#5b6478",shoes:"#3a2a1c",hairStyle:"messy",face:["glasses"],sleeve:1,pants:1,extra:{coat:"#ffffff",tie:"#ff3d4f"}},{id:"doctor",name:"B\xE1c S\u0129",emo:"\u{1FA7A}",skin:"#f6c9a0",hair:"#2a1a14",top:"#3ccf9e",bottom:"#3ccf9e",shoes:"#ffffff",hairStyle:"slick",hat:"mirror",sleeve:1,pants:1,extra:{coat:"#ffffff"}},{id:"boss",name:"T\u1ED5ng T\xE0i",emo:"\u{1F60E}",skin:"#f6c9a0",hair:"#1a1a1a",top:"#22223a",bottom:"#22223a",shoes:"#0d0d18",hairStyle:"slick",face:["shades"],sleeve:1,pants:1,extra:{tie:"#ff3d4f"}},{id:"idol",name:"Idol Nh\xED",emo:"\u{1F3A4}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff6fb5",bottom:"#ffffff",shoes:"#ff6fb5",hairStyle:"pigtails",face:["blush"],sleeve:.3,pants:.3,extra:{dress:"#ffffff",star:"#ffc93d"}},{id:"rocker",name:"Rocker",emo:"\u{1F3B8}",skin:"#fbcca6",hair:"#ff3d8b",top:"#1d1648",bottom:"#2b2550",shoes:"#ff3d4f",hairStyle:"mohawk",face:["shades"],sleeve:.35,pants:1,extra:{chain:!0}},{id:"rapper",name:"Rapper",emo:"\u{1F9E2}",skin:"#c98b5e",hair:"#1a1a1a",top:"#8b5cf6",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"capBack",hatColor:"#ffc93d",sleeve:1,pants:1,extra:{chain:!0}},{id:"gamer",name:"Game Th\u1EE7",emo:"\u{1F3AE}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#2fbf71",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"messy",hat:"phones",hatColor:"#1d1648",face:["glasses"],sleeve:1,pants:1},{id:"football",name:"C\u1EA7u Th\u1EE7",emo:"\u26BD",skin:"#e8b48a",hair:"#1a1a1a",top:"#ff3d4f",bottom:"#ffffff",shoes:"#ffc93d",hairStyle:"spiky",hat:"band",hatColor:"#ffffff",sleeve:.3,pants:.3,legs:"#ff3d4f"},{id:"farmer",name:"B\xE1c N\xF4ng D\xE2n",emo:"\u{1F33E}",skin:"#d99b6c",hair:"#1a1a1a",top:"#7a5230",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"nonla",sleeve:1,pants:.7,extra:{scarf:"#1d1648"}},{id:"ongdo",name:"\xD4ng \u0110\u1ED3",emo:"\u{1F4DC}",skin:"#f3c9a6",hair:"#eeeef5",top:"#2f6bff",bottom:"#ffffff",shoes:"#1d1648",hairStyle:"bald",hat:"turban",hatColor:"#1d1648",face:["beard","glasses"],sleeve:1,pants:1,extra:{aodai:"#2f6bff"}},{id:"fire",name:"L\xEDnh C\u1EE9u Ho\u1EA3",emo:"\u{1F9D1}\u200D\u{1F692}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffb63d",bottom:"#ffb63d",shoes:"#1d1648",hairStyle:"short",hat:"fire",hatColor:"#ff3d4f",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#ffe14d"}},{id:"astro",name:"Phi H\xE0nh Gia",emo:"\u{1F680}",skin:"#fbcca6",hair:"#3a2a1c",top:"#f2f4ff",bottom:"#f2f4ff",shoes:"#8b93b8",hairStyle:"short",hat:"bubble",sleeve:1,pants:1,gloves:"#ffffff",extra:{pack:"#dfe3f5",badge:!0}},{id:"hero",name:"Si\xEAu Nh\xE2n \u0110\u1EE5t",emo:"\u{1F9B8}",skin:"#ffd2a6",hair:"#1d1648",top:"#2f6bff",bottom:"#ff3d4f",shoes:"#ff3d4f",hairStyle:"ahoge",hat:"band",hatColor:"#ff3d4f",sleeve:1,pants:.2,legs:"#2f6bff",gloves:"#ffffff",extra:{cape:"#ff3d4f",star:"#ffc93d",belt:"#ffc93d"}},{id:"ninja",name:"Ninja H\u1EE5t",emo:"\u{1F977}",skin:"#ffd2a6",hair:"#14102e",top:"#2b2550",bottom:"#2b2550",shoes:"#14102e",hairStyle:"bald",hat:"ninja",hatColor:"#2b2550",sleeve:1,pants:1,extra:{belt:"#ff3d4f"}},{id:"pirate",name:"C\u01B0\u1EDBp Bi\u1EC3n",emo:"\u{1F3F4}\u200D\u2620\uFE0F",skin:"#e8b48a",hair:"#2a1a14",top:"#ffffff",bottom:"#2b2550",shoes:"#3a2a1c",hairStyle:"short",hat:"tricorn",hatColor:"#1d1648",face:["patch","beard"],beard:"#2a1a14",sleeve:1,pants:.75,extra:{belt:"#ff3d4f",vest:"#c0392b"}},{id:"king",name:"Vua H\u1EC1",emo:"\u{1F451}",skin:"#ffd2a6",hair:"#a86b3c",top:"#8b5cf6",bottom:"#ffc93d",shoes:"#ff3d4f",hairStyle:"short",hat:"crown",face:["curly"],sleeve:1,pants:1,extra:{cape:"#e8344a",belt:"#ffc93d"}},{id:"princess",name:"C\xF4ng Ch\xFAa",emo:"\u{1F478}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff8fc8",bottom:"#ff8fc8",shoes:"#ffffff",hairStyle:"long",hat:"tiara",face:["blush"],sleeve:.3,pants:1,extra:{dress:"#ff8fc8"}},{id:"vampire",name:"B\xE1 T\u01B0\u1EDBc Ma",emo:"\u{1F9DB}",skin:"#e9e4f5",hair:"#1a1a1a",top:"#ffffff",bottom:"#1d1648",shoes:"#1d1648",hairStyle:"slick",face:["fangs"],sleeve:1,pants:1,extra:{cape:"#1d1648",collar:"#e8344a",vest:"#e8344a"}},{id:"santa",name:"\xD4ng Gi\xE0 Noel",emo:"\u{1F385}",skin:"#ffd2a6",hair:"#ffffff",top:"#e8344a",bottom:"#e8344a",shoes:"#1d1648",hairStyle:"short",hat:"santa",face:["beard","blush"],beard:"#ffffff",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#1d1648",belly:"#e8344a"}},{id:"bear",name:"G\u1EA5u B\xF4ng",emo:"\u{1F9F8}",skin:"#ffd2a6",hair:"#c98b52",top:"#c98b52",bottom:"#c98b52",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"bear",hatColor:"#c98b52",sleeve:1,pants:1,gloves:"#c98b52",extra:{belly:"#f2d2a9"}},{id:"cat",name:"M\xE8o M\u1EADp",emo:"\u{1F431}",skin:"#fcd2b0",hair:"#ff9a3c",top:"#ff9a3c",bottom:"#ff9a3c",shoes:"#ffffff",hairStyle:"bald",hat:"hood",hood:"cat",hatColor:"#ff9a3c",sleeve:1,pants:1,gloves:"#ffffff",extra:{belly:"#fff1e0"}},{id:"dino",name:"Kh\u1EE7ng Long",emo:"\u{1F996}",skin:"#ffd2a6",hair:"#2fbf71",top:"#2fbf71",bottom:"#2fbf71",shoes:"#1f8f52",hairStyle:"bald",hat:"hood",hood:"dino",hatColor:"#2fbf71",sleeve:1,pants:1,gloves:"#2fbf71",extra:{belly:"#d9f99d"}},{id:"frog",name:"\u1EBEch \u1ED8p",emo:"\u{1F438}",skin:"#fcd2b0",hair:"#7bd148",top:"#7bd148",bottom:"#7bd148",shoes:"#ffc93d",hairStyle:"bald",hat:"hood",hood:"frog",hatColor:"#7bd148",sleeve:1,pants:1,gloves:"#7bd148",extra:{belly:"#e9ffd0"}},{id:"dog",name:"C\u1EADu V\xE0ng",emo:"\u{1F436}",skin:"#fcd2b0",hair:"#e8b04a",top:"#e8b04a",bottom:"#e8b04a",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"dog",hatColor:"#e8b04a",sleeve:1,pants:1,gloves:"#e8b04a",extra:{belly:"#fff1d6",scarf:"#2f8bff"}},{id:"bride",name:"C\xF4 D\xE2u",emo:"\u{1F470}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#ffffff",bottom:"#ffffff",shoes:"#ffffff",hairStyle:"bun",hat:"veil",sleeve:.3,pants:1,face:["blush"],extra:{dress:"#ffffff"}},{id:"beanie",name:"Anh Ch\xE0ng L\u1EA1nh",emo:"\u{1F9E3}",skin:"#ffd2a6",hair:"#6b4426",top:"#38b2ff",bottom:"#2b2550",shoes:"#ff4d6d",hairStyle:"short",hat:"beanie",hatColor:"#ff4d6d",sleeve:1,pants:1,face:["freckles"],extra:{scarf:"#ffc93d"}}],co=Object.fromEntries(Al.map(n=>[n.id,n]));var Jn=Object.fromEntries(Al.map(n=>[n.id,{name:n.name,emo:n.emo,skin:n.skin,shirt:n.top,pants:n.bottom,shoes:n.shoes,hair:n.hair}])),El=Object.keys(Jn),oa={down:[10,0],up:[170,0],side:[90,0],diag:[135,0],hip:[40,-105],flex:[90,90],cross:[25,-125],head:[150,-150],mouth:[15,-150],point:[65,-10],wave:[150,25]},ca={down:[4,0],kick:[70,-10],knee:[28,-55],step:[22,0],spread:[35,0]},la={stand:{t:"",legs:null},sit:{t:"translate(0px,26px)",legs:[[80,-80],[80,-80]],stool:!0},squat:{t:"translate(0px,40px)",legs:[[110,-150],[110,-150]]},kneel:{t:"translate(0px,34px)",legs:[[0,170],[0,170]]},lie:{t:"translate(72px,58px) rotate(-90deg)"},leanL:{t:"",torso:"rotate(18deg)"},leanR:{t:"",torso:"rotate(-18deg)"},handstand:{t:"translate(0px,-120px) rotate(180deg)"},crawl:{t:"translate(86px,6px) rotate(-90deg)",absArms:[[90,0],[90,0]],absLegs:[[90,0],[90,0]],head:90,tail:100},bow:{t:"",torso:"translateY(16px) scaleY(.84)",headDown:!0},crossleg:{t:"translate(0px,44px)",legs:[[88,-165],[88,-165]]}},Cl={center:0,tiltL:18,tiltR:-18,up:0,down:0},Wf=[["scissors","\u2702\uFE0F","K\xE9o"],["comb","\u{1FAAE}","L\u01B0\u1EE3c"],["mic","\u{1F3A4}","Micro"],["phone","\u{1F4F1}","\u0110i\u1EC7n tho\u1EA1i"],["ball","\u26BD","Qu\u1EA3 b\xF3ng"],["racket","\u{1F3F8}","V\u1EE3t"],["rod","\u{1F3A3}","C\u1EA7n c\xE2u"],["pan","\u{1F373}","Ch\u1EA3o"],["broom","\u{1F9F9}","Ch\u1ED5i"],["sword","\u{1F5E1}\uFE0F","Ki\u1EBFm"],["umbrella","\u2602\uFE0F","\xD4"],["book","\u{1F4D6}","S\xE1ch"],["guitar","\u{1F3B8}","\u0110\xE0n"],["violin","\u{1F3BB}","Violin"],["hammer","\u{1F528}","B\xFAa"],["chopsticks","\u{1F962}","\u0110\u0169a"],["bowl","\u{1F35C}","T\xF4"],["wand","\u{1FA84}","\u0110\u0169a ph\xE9p"],["magnifier","\u{1F50D}","K\xEDnh l\xFAp"],["camera","\u{1F4F7}","M\xE1y \u1EA3nh"],["flower","\u{1F339}","Hoa"],["gift","\u{1F381}","Qu\xE0"],["cup","\u2615","C\u1ED1c"],["toothbrush","\u{1FAA5}","B\xE0n ch\u1EA3i"],["money","\u{1F4B5}","Ti\u1EC1n"],["bone","\u{1F9B4}","Kh\xFAc x\u01B0\u01A1ng"],["carrot","\u{1F955}","C\xE0 r\u1ED1t"],["banana","\u{1F34C}","Chu\u1ED1i"],["stethoscope","\u{1FA7A}","\u1ED0ng nghe"],["ruler","\u{1F4CF}","Th\u01B0\u1EDBc"],["balloon","\u{1F388}","B\xF3ng bay"],["extinguisher","\u{1F9EF}","B\xECnh ch\u1EEFa ch\xE1y"],["bottle","\u{1F37C}","B\xECnh s\u1EEFa"],["gamepad","\u{1F3AE}","Tay c\u1EA7m game"],["laptop","\u{1F4BB}","Laptop"],["basket","\u{1F9FA}","Gi\u1ECF"],["ring","\u{1F48D}","Nh\u1EABn"],["cake","\u{1F382}","B\xE1nh kem"],["torch","\u{1F526}","\u0110\xE8n pin"],["towel","\u{1F9FB}","Kh\u0103n gi\u1EA5y"]],Vf=Wf.map(([n,e,t])=>[n,`${e} ${t}`]),ho=Object.fromEntries(Wf.map(([n,e])=>[n,e])),My=[{group:"To\xE0n th\xE2n",key:"body",opts:[["stand","\u0110\u1EE9ng"],["sit","Ng\u1ED3i gh\u1EBF"],["squat","Ng\u1ED3i x\u1ED5m"],["kneel","Qu\u1EF3"],["lie","N\u1EB1m"],["leanL","Nghi\xEAng tr\xE1i"],["leanR","Nghi\xEAng ph\u1EA3i"],["handstand","Tr\u1ED3ng c\xE2y chu\u1ED1i"],["crawl","B\xF2 4 ch\xE2n"],["bow","C\xFAi ch\xE0o"],["crossleg","Ng\u1ED3i x\u1EBFp b\u1EB1ng"]]},{group:"\u0110\u1EA7u",key:"head",opts:[["center","Th\u1EB3ng"],["tiltL","Nghi\xEAng tr\xE1i"],["tiltR","Nghi\xEAng ph\u1EA3i"],["up","Ng\u01B0\u1EDBc l\xEAn"],["down","C\xFAi xu\u1ED1ng"]]},{group:"M\u1EB7t",key:"face",opts:[["neutral","\u{1F610}"],["happy","\u{1F604}"],["sad","\u{1F622}"],["angry","\u{1F620}"],["surprised","\u{1F62E}"],["scared","\u{1F631}"],["sleepy","\u{1F634}"],["cheeky","\u{1F61C}"],["love","\u{1F60D}"]]},{group:"Tay tr\xE1i",key:"armL",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Tay ph\u1EA3i",key:"armR",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Ch\xE2n tr\xE1i",key:"legL",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"Ch\xE2n ph\u1EA3i",key:"legR",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"\u0110\u1EA1o c\u1EE5 tay tr\xE1i",key:"propL",toggle:!0,opts:Vf},{group:"\u0110\u1EA1o c\u1EE5 tay ph\u1EA3i",key:"propR",toggle:!0,opts:Vf},{group:"Ho\xE1 trang",key:"ears",toggle:!0,opts:[["dog","\u{1F436} Tai ch\xF3"],["cat","\u{1F431} Tai m\xE8o"],["bunny","\u{1F430} Tai th\u1ECF"],["mouse","\u{1F42D} Tai chu\u1ED9t"],["horns","\u{1F42E} S\u1EEBng"],["antenna","\u{1F41D} R\xE2u c\xF4n tr\xF9ng"]]},{group:"\u0110u\xF4i",key:"tail",toggle:!0,opts:[["dog","\u{1F415} \u0110u\xF4i ch\xF3"],["cat","\u{1F408} \u0110u\xF4i m\xE8o"],["pig","\u{1F437} \u0110u\xF4i heo"],["dino","\u{1F996} \u0110u\xF4i kh\u1EE7ng long"]]},{group:"Chuy\u1EC3n \u0111\u1ED9ng (b\u1EADt/t\u1EAFt)",key:"loop",toggle:!0,opts:[["walk","\u0110i b\u1ED9"],["run","Ch\u1EA1y"],["dance","Nh\u1EA3y m\xFAa"],["butt","L\u1EAFc m\xF4ng"],["flap","V\u1ED7 c\xE1nh"],["swim","B\u01A1i"],["shiver","Run r\u1EA9y"],["clap","V\u1ED7 tay"],["punch","\u0110\u1EA5m"],["row","Ch\xE8o"],["nod","G\u1EADt g\xF9"],["shake","L\u1EAFc \u0111\u1EA7u"]]},{group:"Hi\u1EC7u \u1EE9ng",key:"fx",oneshot:!0,opts:[["jump","B\u1EADt nh\u1EA3y"],["spin","Xoay v\xF2ng"],["fall","T\xE9 ng\xE3"],["bounce","Nh\xFAn nh\u1EA3y"]]},{group:"Xoay ng\u01B0\u1EDDi",key:"turn",opts:[["front","\u2B06\uFE0F Nh\xECn kh\xE1n gi\u1EA3"],["l45","\u2196\uFE0F Xoay ch\xE9o tr\xE1i"],["r45","\u2197\uFE0F Xoay ch\xE9o ph\u1EA3i"],["left","\u2B05\uFE0F Quay tr\xE1i"],["right","\u27A1\uFE0F Quay ph\u1EA3i"],["back","\u2B07\uFE0F Quay l\u01B0ng"]]}],uo=Object.fromEntries(My.find(n=>n.key==="face").opts),Kn={hip:[150,218],neck:[150,146],shL:[124,160],shR:[176,160],elL:[124,192],elR:[176,192],hipL:[138,222],hipR:[162,222],knL:[138,254],knR:[162,254]},pn=n=>`${n[0]}px ${n[1]}px`;function by(n,e,t=!1){let i=e==="up"?-4:e==="down"?4:0,s=99+i,r=(d,f,g,y=3.6)=>`<ellipse cx="${d}" cy="${s}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${d+f}" cy="${s+g}" r="${y}" class="dk"/><circle cx="${d+f+1.2}" cy="${s+g-1.4}" r="1.1" fill="#fff"/>`,a;switch(n){case"happy":a=`<path d="M128 ${s+2} q9 -11 18 0 M154 ${s+2} q9 -11 18 0" class="ln"/>`;break;case"sleepy":a=`<path d="M128 ${s} q9 6 18 0 M154 ${s} q9 6 18 0" class="ln"/>`;break;case"love":a=`<path d="M137 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`;break;case"cheeky":a=`<path d="M128 ${s} q9 -6 18 0" class="ln"/>${r(163,-2,1)}`;break;case"surprised":a=r(137,0,0,2.4)+r(163,0,0,2.4);break;case"scared":a=r(137,2,2,2.6)+r(163,-2,2,2.6)+`<path d="M180 ${s-8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`;break;case"sad":a=r(137,1,3)+r(163,-1,3);break;case"angry":a=r(137,2,1)+r(163,-2,1);break;default:a=r(137,3,2)+r(163,-3,-2)}let o={angry:`<path d="M127 ${s-15} L146 ${s-9} M173 ${s-15} L154 ${s-9}" class="ln" style="stroke-width:4.5"/>`,sad:`<path d="M128 ${s-10} L145 ${s-15} M172 ${s-10} L155 ${s-15}" class="ln"/>`,scared:`<path d="M127 ${s-14} q5 -4 9 0 q5 4 9 0 M155 ${s-14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,surprised:`<path d="M128 ${s-17} q9 -6 18 0 M154 ${s-17} q9 -6 18 0" class="ln"/>`}[n]||"",c=118+i,l={happy:`<path d="M133 ${c-2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${c-1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${c+8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,sad:`<path d="M139 ${c+5} q11 -10 22 0" class="ln"/><path d="M134 ${s+8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,angry:`<rect x="138" y="${c-3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${c-3} v9 M150 ${c-3} v9 M156 ${c-3} v9" stroke="#1d1648" stroke-width="1.6"/>`,surprised:`<ellipse cx="150" cy="${c+2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,scared:`<path d="M136 ${c+2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,sleepy:`<ellipse cx="150" cy="${c+1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${c+2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78+i}" class="zz">z</text><text x="188" y="${64+i}" class="zz">Z</text>`,cheeky:`<path d="M138 ${c-1} q12 9 24 0" class="ln"/><path d="M147 ${c+2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,love:`<path d="M138 ${c-2} q12 12 24 0" class="ln"/>`,neutral:`<path d="M138 ${c-1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${c}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`}[n]||"",h=`<ellipse cx="150" cy="${110+i}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;return`${`<circle cx="125" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/><circle cx="175" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/>`}${t?"":`<g class="pp-eyes">${a}</g>${o}`}${h}${l}`}function wy(n,e){switch(n){case"tron":return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${e.hair}" stroke="#1d1648" stroke-width="2.5"/>`};case"ninja":return{hairFront:`<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${e.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,mask:`<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${e.hair}" class="ol"/>`};case"scientist":return{hairBack:`<circle cx="118" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${e.hair}" class="ol"/>`,hairFront:'<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>',torso:'<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>'};case"boss":return{hairFront:`<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${e.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,torso:'<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>',noEyes:!0};case"idol":return{hairBack:`<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${e.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,torso:'<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>'};case"hero":return{back:'<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>',hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${e.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,torso:'<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>'};case"astro":return{hairFront:`<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${e.hair}" class="ol"/>`,helmet:'<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>',torso:'<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>'};case"nonla":return{hairBack:`<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${e.hair}" class="ol"/>`,hat:'<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>',torso:'<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>'};case"bear":return{hairBack:`<circle cx="120" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,under:'<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>',torso:'<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>'}}return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/>`}}var lo="#c98b52",Sy={dog:{front:`<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${lo}" class="ol"/>`},cat:{back:`<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${lo}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>`},bunny:{back:'<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>'},mouse:{back:'<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>'},horns:{back:'<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>'},antenna:{back:'<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>'}},Gf={dog:`<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${lo}" class="ol"/>`,cat:`<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${lo}" stroke-width="6" stroke-linecap="round"/>`,pig:'<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>',dino:'<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>'};function $f(n){n.innerHTML=`
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${pn(Kn.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${pn(Kn.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${e("L")}${e("R")}
      <g class="pp-torso j" style="transform-origin:${pn(Kn.hip)}"><g class="in pp-torsoIn" style="transform-origin:${pn(Kn.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${t("L")}${t("R")}
        <g class="pp-head j" style="transform-origin:${pn(Kn.neck)}"><g class="in pp-headIn" style="transform-origin:${pn(Kn.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
          <rect class="pp-skin ol" x="143" y="134" width="14" height="10" rx="4"/>
          <g class="pp-earsBack"></g>
          <g class="pp-hairBack"></g>
          <circle class="pp-skin ol pp-headBall" cx="150" cy="106" r="34"/>
          <image class="pp-photo" x="116" y="72" width="68" height="68" clip-path="url(#ppHeadClip)" preserveAspectRatio="xMidYMid slice"/>
          <circle class="pp-photoRing" cx="150" cy="106" r="34" fill="none" stroke="#1d1648" stroke-width="3"/>
          <g class="pp-under"></g>
          <g class="pp-face"></g>
          <g class="pp-mask"></g>
          <g class="pp-hairFront"></g>
          <g class="pp-earsFront"></g>
          <g class="pp-helmet"></g>
          <text class="pp-emote" x="186" y="78"></text>
        </g></g></g>
      </g></g>
    </g></g></g>
  </svg>`;function e(h){let u=Kn["hip"+h],d=Kn["kn"+h];return`<g class="pp-leg${h} j" style="transform-origin:${pn(u)}"><g class="in pp-leg${h}In" style="transform-origin:${pn(u)}">
      <line class="pp-pants" x1="${u[0]}" y1="${u[1]}" x2="${d[0]}" y2="${d[1]}"/>
      <g class="pp-shin${h} j" style="transform-origin:${pn(d)}"><g class="in pp-shin${h}In" style="transform-origin:${pn(d)}">
        <line class="pp-pants" x1="${d[0]}" y1="${d[1]}" x2="${d[0]}" y2="${d[1]+30}"/>
        <ellipse class="pp-shoe ol" cx="${d[0]+(h==="L"?-8:8)}" cy="${d[1]+36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`}function t(h){let u=Kn["sh"+h],d=Kn["el"+h];return`<g class="pp-arm${h} j" style="transform-origin:${pn(u)}"><g class="in pp-arm${h}In" style="transform-origin:${pn(u)}">
      <line class="pp-sleeve" x1="${u[0]}" y1="${u[1]}" x2="${d[0]}" y2="${d[1]}"/>
      <g class="pp-fore${h} j" style="transform-origin:${pn(d)}"><g class="in pp-fore${h}In" style="transform-origin:${pn(d)}">
        <line class="pp-forearm" x1="${d[0]}" y1="${d[1]}" x2="${d[0]}" y2="${d[1]+26}"/>
        <circle class="pp-hand pp-skin ol" cx="${d[0]}" cy="${d[1]+31}" r="10.5"/>
        <text class="pp-prop pp-prop${h}" x="${d[0]}" y="${d[1]+40}"></text>
        <path d="M${d[0]+(h==="L"?7:-7)} ${d[1]+26} q${h==="L"?7:-7} -2 ${h==="L"?6:-6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`}let i=n.querySelector("svg"),s=h=>i.querySelector("."+h),r=(h,u)=>{s(h).style.transform=u},a=null,o=null;function c(h){let u=Jn[h?.skin]?h.skin:"tron",d=Jn[u];i.style.setProperty("--pp-skin",d.skin),i.style.setProperty("--pp-shirt",d.shirt),i.style.setProperty("--pp-pants",d.pants),i.style.setProperty("--pp-shoes",d.shoes);let f=wy(u,d),g=h?.head||"";s("pp-photo").setAttribute("href",g),i.classList.toggle("has-photo",!!g),s("pp-back").innerHTML=f.back||"",s("pp-hairBack").innerHTML=g?"":f.hairBack||"",s("pp-hairFront").innerHTML=(g?"":f.hairFront||"")+(f.hat||""),s("pp-mask").innerHTML=g?"":f.mask||"",s("pp-under").innerHTML=g?"":f.under||"",s("pp-helmet").innerHTML=f.helmet||"",s("pp-torsoAcc").innerHTML=f.torso||"",i.dataset.skin=u,o={...h,noEyes:f.noEyes}}function l(h){let u=la[h.body]||la.stand;r("pp-root",u.t||"none"),r("pp-torso",u.torso||"none"),s("pp-stool").classList.toggle("on",!!u.stool);for(let y of["L","R"]){let m=y==="L"?1:-1,p=y==="L"?0:1,b=!h["arm"+y]||h["arm"+y]==="down";if(u.absArms&&b)r("pp-arm"+y,`rotate(${u.absArms[p][0]}deg)`),r("pp-fore"+y,`rotate(${u.absArms[p][1]}deg)`);else{let v=oa[h["arm"+y]]||oa.down;r("pp-arm"+y,`rotate(${v[0]*m}deg)`),r("pp-fore"+y,`rotate(${v[1]*m}deg)`)}let _=!h["leg"+y]||h["leg"+y]==="down";if(u.absLegs&&_)r("pp-leg"+y,`rotate(${u.absLegs[p][0]}deg)`),r("pp-shin"+y,`rotate(${u.absLegs[p][1]}deg)`);else{let v=u.legs?u.legs[p]:ca[h["leg"+y]]||ca.down;r("pp-leg"+y,`rotate(${v[0]*m}deg)`),r("pp-shin"+y,`rotate(${v[1]*m}deg)`)}i.classList.toggle("wave"+y,h["arm"+y]==="wave"),s("pp-prop"+y).textContent=ho[h["prop"+y]]||""}r("pp-head",`rotate(${(Cl[h.head]??0)+(u.head||0)}deg)`);let d=i.classList.contains("has-photo"),f=u.headDown&&(!h.head||h.head==="center")?"down":h.head;s("pp-face").innerHTML=d?"":by(h.face,f,o?.noEyes);let g=Sy[h.ears]||{};s("pp-earsBack").innerHTML=g.back||"",s("pp-earsFront").innerHTML=g.front||"",s("pp-tail").innerHTML=Gf[h.tail]?`<g class="pp-tailIn">${Gf[h.tail]}</g>`:"",r("pp-tail",u.tail?`rotate(${u.tail}deg)`:"none"),s("pp-emote").textContent=d&&h.face&&h.face!=="neutral"&&uo[h.face]||"",i.dataset.loop=h.loop||"",h.fx&&h.fx.seq!==a&&(a=h.fx.seq,Date.now()-(h.fx.at||0)<4e3&&(i.classList.remove("fx-jump","fx-spin","fx-fall","fx-bounce"),i.getBoundingClientRect(),i.classList.add("fx-"+h.fx.name),clearTimeout(i._fxT),i._fxT=setTimeout(()=>i.classList.remove("fx-"+h.fx.name),1600)))}return{setPose:l,setLook:c,el:i}}var Ty=0,qf=1,Ay=2;var Yp=1,Du=2,ui=3,Vi=0,tn=1,Ot=2,zi=0,ur=1,mr=2,Xf=3,Yf=4,Ey=5,ys=100,Cy=101,Ry=102,Py=103,Iy=104,Ly=200,Dy=201,ky=202,Uy=203,uh=204,dh=205,Ny=206,Oy=207,Fy=208,By=209,zy=210,Hy=211,Vy=212,Gy=213,Wy=214,fh=0,ph=1,mh=2,gr=3,gh=4,yh=5,xh=6,vh=7,Zp=0,$y=1,qy=2,Hi=0,Xy=1,Yy=2,Zy=3,Ky=4,Jy=5,jy=6,Qy=7;var Kp=300,yr=301,xr=302,_h=303,Mh=304,Ac=306,wa=1e3,vs=1001,bh=1002,en=1003,ex=1004;var fo=1005;var Vn=1006,Rl=1007;var _s=1008;var gi=1009,Jp=1010,jp=1011,Sa=1012,ku=1013,Ms=1014,fi=1015,ka=1016,Uu=1017,Nu=1018,vr=1020,Qp=35902,em=1021,tm=1022,Gn=1023,nm=1024,im=1025,dr=1026,_r=1027,Ec=1028,Ou=1029,sm=1030,Fu=1031;var Bu=1033,Ho=33776,Vo=33777,Go=33778,Wo=33779,wh=35840,Sh=35841,Th=35842,Ah=35843,Eh=36196,Ch=37492,Rh=37496,Ph=37808,Ih=37809,Lh=37810,Dh=37811,kh=37812,Uh=37813,Nh=37814,Oh=37815,Fh=37816,Bh=37817,zh=37818,Hh=37819,Vh=37820,Gh=37821,$o=36492,Wh=36494,$h=36495,rm=36283,qh=36284,Xh=36285,Yh=36286;var Xo=2300,Zh=2301,Pl=2302,Zf=2400,Kf=2401,Jf=2402;var tx=3200,nx=3201;var zu=0,ix=1,Fi="",Wt="srgb",Xi="srgb-linear",Hu="display-p3",Cc="display-p3-linear",Yo="linear",yt="srgb",Zo="rec709",Ko="p3";var $s=7680;var jf=519,sx=512,rx=513,ax=514,am=515,ox=516,cx=517,lx=518,hx=519,Kh=35044;var Qf="300 es",pi=2e3,Jo=2001,Gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Il=Math.PI/180,jo=180/Math.PI;function mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[n&255]+Jt[n>>8&255]+Jt[n>>16&255]+Jt[n>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[t&63|128]+Jt[t>>8&255]+"-"+Jt[t>>16&255]+Jt[t>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function ux(n,e){return(n%e+e)%e}function Ll(n,e,t){return(1-t)*n+t*e}function Qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},et=class n{constructor(e,t,i,s,r,a,o,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l)}set(e,t,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],b=s[1],_=s[4],v=s[7],R=s[2],T=s[5],C=s[8];return r[0]=a*y+o*b+c*R,r[3]=a*m+o*_+c*T,r[6]=a*p+o*v+c*C,r[1]=l*y+h*b+u*R,r[4]=l*m+h*_+u*T,r[7]=l*p+h*v+u*C,r[2]=d*y+f*b+g*R,r[5]=d*m+f*_+g*T,r[8]=d*p+f*v+g*C,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*l-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(h*t-s*c)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*c-l*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Dl.makeScale(e,t)),this}rotate(e){return this.premultiply(Dl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Dl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Dl=new et;function om(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dx(){let n=Qo("canvas");return n.style.display="block",n}var ep={};function qo(n){n in ep||(ep[n]=!0,console.warn(n))}function fx(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function px(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function mx(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tp=new et().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),np=new et().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ha={[Xi]:{transfer:Yo,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Wt]:{transfer:yt,primaries:Zo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Cc]:{transfer:Yo,primaries:Ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(np),fromReference:n=>n.applyMatrix3(tp)},[Hu]:{transfer:yt,primaries:Ko,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(np),fromReference:n=>n.applyMatrix3(tp).convertLinearToSRGB()}},gx=new Set([Xi,Cc]),ut={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!gx.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ha[e].toReference,s=ha[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ha[n].primaries},getTransfer:function(n){return n===Fi?Yo:ha[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ha[e].luminanceCoefficients)}};function fr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function kl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var qs,Jh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qs===void 0&&(qs=Qo("canvas")),qs.width=e.width,qs.height=e.height;let i=qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=fr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(fr(t[i]/255)*255):t[i]=fr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},yx=0,ec=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:yx++}),this.uuid=mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ul(s[a].image)):r.push(Ul(s[a]))}else r=Ul(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Ul(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Jh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var xx=0,mn=class n extends Gi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=vs,s=vs,r=Vn,a=_s,o=Gn,c=gi,l=n.DEFAULT_ANISOTROPY,h=Fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xx++}),this.uuid=mi(),this.name="",this.source=new ec(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new et,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case vs:e.x=e.x<0?0:1;break;case bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case vs:e.y=e.y<0?0:1;break;case bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Kp;mn.DEFAULT_ANISOTROPY=1;var Pt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],y=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(l+1)/2,v=(f+1)/2,R=(p+1)/2,T=(h+d)/4,C=(u+y)/4,L=(g+m)/4;return _>v&&_>R?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=C/i):v>R?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=T/s,r=L/s):R<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),i=C/r,s=L/r),this.set(i,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-y)/b,this.z=(d-h)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},jh=class extends Gi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Pt(0,0,e,t),this.scissorTest=!1,this.viewport=new Pt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new mn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new ec(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends jh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},tc=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Qh=class extends mn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=en,this.minFilter=en,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||c!==d||l!==f||h!==g){let m=1-o,p=c*d+l*f+h*g+u*y,b=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let R=Math.sqrt(_),T=Math.atan2(R,p*b);m=Math.sin(m*T)/R,o=Math.sin(o*T)/R}let v=o*b;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+y*v,m===1-o){let R=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=R,l*=R,h*=R,u*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let c=1-o*o;if(c<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,o),u=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ip.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Nl.copy(this).projectOnVector(e),this.sub(Nl)}reflect(e){return this.sub(Nl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Nl=new H,ip=new Wi,bs=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Bn):Bn.fromBufferAttribute(r,a),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),po.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),po.copy(i.boundingBox)),po.applyMatrix4(e.matrixWorld),this.union(po)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ua),mo.subVectors(this.max,ua),Xs.subVectors(e.a,ua),Ys.subVectors(e.b,ua),Zs.subVectors(e.c,ua),Li.subVectors(Ys,Xs),Di.subVectors(Zs,Ys),hs.subVectors(Xs,Zs);let t=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-hs.z,hs.y,Li.z,0,-Li.x,Di.z,0,-Di.x,hs.z,0,-hs.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-hs.y,hs.x,0];return!Ol(t,Xs,Ys,Zs,mo)||(t=[1,0,0,0,1,0,0,0,1],!Ol(t,Xs,Ys,Zs,mo))?!1:(go.crossVectors(Li,Di),t=[go.x,go.y,go.z],Ol(t,Xs,Ys,Zs,mo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ai=[new H,new H,new H,new H,new H,new H,new H,new H],Bn=new H,po=new bs,Xs=new H,Ys=new H,Zs=new H,Li=new H,Di=new H,hs=new H,ua=new H,mo=new H,go=new H,us=new H;function Ol(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){us.fromArray(n,r);let o=s.x*Math.abs(us.x)+s.y*Math.abs(us.y)+s.z*Math.abs(us.z),c=e.dot(us),l=t.dot(us),h=i.dot(us);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var vx=new bs,da=new H,Fl=new H,Ta=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):vx.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;da.subVectors(e,this.center);let t=da.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(da,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(da.copy(e.center).add(Fl)),this.expandByPoint(da.copy(e.center).sub(Fl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},oi=new H,Bl=new H,yo=new H,ki=new H,zl=new H,xo=new H,Hl=new H,eu=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Bl.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),ki.copy(this.origin).sub(Bl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=ki.dot(this.direction),c=-ki.dot(yo),l=ki.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Bl).addScaledVector(yo,d),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);let i=oi.dot(this.direction),s=oi.dot(oi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,s,r){zl.subVectors(t,e),xo.subVectors(i,e),Hl.crossVectors(zl,xo);let a=this.direction.dot(Hl),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);let c=o*this.direction.dot(xo.crossVectors(ki,xo));if(c<0)return null;let l=o*this.direction.dot(zl.cross(ki));if(l<0||c+l>a)return null;let h=-o*ki.dot(Hl);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class n{constructor(e,t,i,s,r,a,o,c,l,h,u,d,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,y,m)}set(e,t,i,s,r,a,o,c,l,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Ks.setFromMatrixColumn(e,0).length(),r=1/Ks.setFromMatrixColumn(e,1).length(),a=1/Ks.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-y*l,t[9]=-o*c,t[2]=y-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,y=l*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+y,t[1]=c*u,t[5]=y*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,y=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(_x,e,Mx)}lookAt(e,t,i){let s=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),Ui.crossVectors(i,vn),Ui.lengthSq()===0&&(Math.abs(i.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),Ui.crossVectors(i,vn)),Ui.normalize(),vo.crossVectors(vn,Ui),s[0]=Ui.x,s[4]=vo.x,s[8]=vn.x,s[1]=Ui.y,s[5]=vo.y,s[9]=vn.y,s[2]=Ui.z,s[6]=vo.z,s[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],_=i[7],v=i[11],R=i[15],T=s[0],C=s[4],L=s[8],Q=s[12],x=s[1],w=s[5],X=s[9],F=s[13],E=s[2],U=s[6],N=s[10],Z=s[14],G=s[3],xe=s[7],pe=s[11],W=s[15];return r[0]=a*T+o*x+c*E+l*G,r[4]=a*C+o*w+c*U+l*xe,r[8]=a*L+o*X+c*N+l*pe,r[12]=a*Q+o*F+c*Z+l*W,r[1]=h*T+u*x+d*E+f*G,r[5]=h*C+u*w+d*U+f*xe,r[9]=h*L+u*X+d*N+f*pe,r[13]=h*Q+u*F+d*Z+f*W,r[2]=g*T+y*x+m*E+p*G,r[6]=g*C+y*w+m*U+p*xe,r[10]=g*L+y*X+m*N+p*pe,r[14]=g*Q+y*F+m*Z+p*W,r[3]=b*T+_*x+v*E+R*G,r[7]=b*C+_*w+v*U+R*xe,r[11]=b*L+_*X+v*N+R*pe,r[15]=b*Q+_*F+v*Z+R*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*c*u-s*l*u-r*o*d+i*l*d+s*o*f-i*c*f)+y*(+t*c*f-t*l*d+r*a*d-s*a*f+s*l*h-r*c*h)+m*(+t*l*u-t*o*f-r*a*u+i*a*f+r*o*h-i*l*h)+p*(-s*o*h-t*c*u+t*o*d+s*a*u-i*a*d+i*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],b=u*m*l-y*d*l+y*c*f-o*m*f-u*c*p+o*d*p,_=g*d*l-h*m*l-g*c*f+a*m*f+h*c*p-a*d*p,v=h*y*l-g*u*l+g*o*f-a*y*f-h*o*p+a*u*p,R=g*u*c-h*y*c-g*o*d+a*y*d+h*o*m-a*u*m,T=t*b+i*_+s*v+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let C=1/T;return e[0]=b*C,e[1]=(y*d*r-u*m*r-y*s*f+i*m*f+u*s*p-i*d*p)*C,e[2]=(o*m*r-y*c*r+y*s*l-i*m*l-o*s*p+i*c*p)*C,e[3]=(u*c*r-o*d*r-u*s*l+i*d*l+o*s*f-i*c*f)*C,e[4]=_*C,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*C,e[6]=(g*c*r-a*m*r-g*s*l+t*m*l+a*s*p-t*c*p)*C,e[7]=(a*d*r-h*c*r+h*s*l-t*d*l-a*s*f+t*c*f)*C,e[8]=v*C,e[9]=(g*u*r-h*y*r-g*i*f+t*y*f+h*i*p-t*u*p)*C,e[10]=(a*y*r-g*o*r+g*i*l-t*y*l-a*i*p+t*o*p)*C,e[11]=(h*o*r-a*u*r-h*i*l+t*u*l+a*i*f-t*o*f)*C,e[12]=R*C,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*C,e[14]=(g*o*s-a*y*s-g*i*c+t*y*c+a*i*m-t*o*m)*C,e[15]=(a*u*s-h*o*s+h*i*c-t*u*c-a*i*d+t*o*d)*C,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,b=c*l,_=c*h,v=c*u,R=i.x,T=i.y,C=i.z;return s[0]=(1-(y+p))*R,s[1]=(f+v)*R,s[2]=(g-_)*R,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+_)*C,s[9]=(m-b)*C,s[10]=(1-(d+y))*C,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Ks.set(s[0],s[1],s[2]).length(),a=Ks.set(s[4],s[5],s[6]).length(),o=Ks.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],zn.copy(this);let l=1/r,h=1/a,u=1/o;return zn.elements[0]*=l,zn.elements[1]*=l,zn.elements[2]*=l,zn.elements[4]*=h,zn.elements[5]*=h,zn.elements[6]*=h,zn.elements[8]*=u,zn.elements[9]*=u,zn.elements[10]*=u,t.setFromRotationMatrix(zn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=pi){let c=this.elements,l=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(o===pi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Jo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=pi){let c=this.elements,l=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*l,f=(i+s)*h,g,y;if(o===pi)g=(a+r)*u,y=-2*u;else if(o===Jo)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=y,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Ks=new H,zn=new Ct,_x=new H(0,0,0),Mx=new H(1,1,1),Ui=new H,vo=new H,vn=new H,sp=new Ct,rp=new Wi,ei=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Kt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ei.DEFAULT_ORDER="XYZ";var nc=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bx=0,ap=new H,Js=new Wi,ci=new Ct,_o=new H,fa=new H,wx=new H,Sx=new Wi,op=new H(1,0,0),cp=new H(0,1,0),lp=new H(0,0,1),hp={type:"added"},Tx={type:"removed"},js={type:"childadded",child:null},Vl={type:"childremoved",child:null},Dt=class n extends Gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new ei,i=new Wi,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ct},normalMatrix:{value:new et}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.multiply(Js),this}rotateOnWorldAxis(e,t){return Js.setFromAxisAngle(e,t),this.quaternion.premultiply(Js),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(cp,e)}rotateZ(e){return this.rotateOnAxis(lp,e)}translateOnAxis(e,t){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(cp,e)}translateZ(e){return this.translateOnAxis(lp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?_o.copy(e):_o.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(fa,_o,this.up):ci.lookAt(_o,fa,this.up),this.quaternion.setFromRotationMatrix(ci),s&&(ci.extractRotation(s.matrixWorld),Js.setFromRotationMatrix(ci),this.quaternion.premultiply(Js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx),Vl.child=e,this.dispatchEvent(Vl),Vl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,wx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Sx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new H(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Hn=new H,li=new H,Gl=new H,hi=new H,Qs=new H,er=new H,up=new H,Wl=new H,$l=new H,ql=new H,Xl=new Pt,Yl=new Pt,Zl=new Pt,Bi=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),Hn.subVectors(e,t),s.cross(Hn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){Hn.subVectors(s,t),li.subVectors(i,t),Gl.subVectors(e,t);let a=Hn.dot(Hn),o=Hn.dot(li),c=Hn.dot(Gl),l=li.dot(li),h=li.dot(Gl),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,s,r,a,o,c){return this.getBarycoord(e,t,i,s,hi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hi.x),c.addScaledVector(a,hi.y),c.addScaledVector(o,hi.z),c)}static getInterpolatedAttribute(e,t,i,s,r,a){return Xl.setScalar(0),Yl.setScalar(0),Zl.setScalar(0),Xl.fromBufferAttribute(e,t),Yl.fromBufferAttribute(e,i),Zl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Xl,r.x),a.addScaledVector(Yl,r.y),a.addScaledVector(Zl,r.z),a}static isFrontFacing(e,t,i,s){return Hn.subVectors(i,t),li.subVectors(e,t),Hn.cross(li).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Hn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;Qs.subVectors(s,i),er.subVectors(r,i),Wl.subVectors(e,i);let c=Qs.dot(Wl),l=er.dot(Wl);if(c<=0&&l<=0)return t.copy(i);$l.subVectors(e,s);let h=Qs.dot($l),u=er.dot($l);if(h>=0&&u<=h)return t.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(Qs,a);ql.subVectors(e,r);let f=Qs.dot(ql),g=er.dot(ql);if(g>=0&&f<=g)return t.copy(r);let y=f*l-c*g;if(y<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(er,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return up.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(up,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(i).addScaledVector(Qs,a).addScaledVector(er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},cm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Mo={h:0,s:0,l:0};function Kl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=i,ut.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ut.workingColorSpace){if(e=ux(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Kl(a,r,e+1/3),this.g=Kl(a,r,e),this.b=Kl(a,r,e-1/3)}return ut.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){let i=cm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=kl(e.r),this.g=kl(e.g),this.b=kl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return ut.fromWorkingColorSpace(jt.copy(this),e),Math.round(Kt(jt.r*255,0,255))*65536+Math.round(Kt(jt.g*255,0,255))*256+Math.round(Kt(jt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(jt.copy(this),t);let i=jt.r,s=jt.g,r=jt.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Wt){ut.fromWorkingColorSpace(jt.copy(this),e);let t=jt.r,i=jt.g,s=jt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(Mo);let i=Ll(Ni.h,Mo.h,t),s=Ll(Ni.s,Mo.s,t),r=Ll(Ni.l,Mo.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},jt=new je;je.NAMES=cm;var Ax=0,xi=class extends Gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=mi(),this.name="",this.type="Material",this.blending=ur,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uh,this.blendDst=dh,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=$s,this.stencilZFail=$s,this.stencilZPass=$s,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ur&&(i.blending=this.blending),this.side!==Vi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uh&&(i.blendSrc=this.blendSrc),this.blendDst!==dh&&(i.blendDst=this.blendDst),this.blendEquation!==ys&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==$s&&(i.stencilFail=this.stencilFail),this.stencilZFail!==$s&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==$s&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ft=class extends xi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Lt=new H,bo=new Me,Mn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)bo.fromBufferAttribute(this,t),bo.applyMatrix3(e),this.setXY(t,bo.x,bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix3(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kh&&(e.usage=this.usage),e}};var ic=class extends Mn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var sc=class extends Mn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ft=class extends Mn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Ex=0,In=new Ct,Jl=new Dt,tr=new H,_n=new bs,pa=new bs,Gt=new H,ln=class n extends Gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ex++}),this.uuid=mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(om(e)?sc:ic)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new et().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Jl.lookAt(e),Jl.updateMatrix(),this.applyMatrix4(Jl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(tr).negate(),this.translate(tr.x,tr.y,tr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ta);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(_n.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];pa.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(_n.min,pa.min),_n.expandByPoint(Gt),Gt.addVectors(_n.max,pa.max),_n.expandByPoint(Gt)):(_n.expandByPoint(pa.min),_n.expandByPoint(pa.max))}_n.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Gt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Gt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Gt.fromBufferAttribute(o,l),c&&(tr.fromBufferAttribute(e,l),Gt.add(tr)),s=Math.max(s,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],c=[];for(let L=0;L<i.count;L++)o[L]=new H,c[L]=new H;let l=new H,h=new H,u=new H,d=new Me,f=new Me,g=new Me,y=new H,m=new H;function p(L,Q,x){l.fromBufferAttribute(i,L),h.fromBufferAttribute(i,Q),u.fromBufferAttribute(i,x),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,Q),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[L].add(y),o[Q].add(y),o[x].add(y),c[L].add(m),c[Q].add(m),c[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,Q=b.length;L<Q;++L){let x=b[L],w=x.start,X=x.count;for(let F=w,E=w+X;F<E;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}let _=new H,v=new H,R=new H,T=new H;function C(L){R.fromBufferAttribute(s,L),T.copy(R);let Q=o[L];_.copy(Q),_.sub(R.multiplyScalar(R.dot(Q))).normalize(),v.crossVectors(T,Q);let w=v.dot(c[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,w)}for(let L=0,Q=b.length;L<Q;++L){let x=b[L],w=x.start,X=x.count;for(let F=w,E=w+X;F<E;F+=3)C(e.getX(F+0)),C(e.getX(F+1)),C(e.getX(F+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new H,r=new H,a=new H,o=new H,c=new H,l=new H,h=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,y),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let y=0,m=c.length;y<m;y++){o.isInterleavedBufferAttribute?f=c[y]*o.data.stride+o.offset:f=c[y]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Mn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dp=new Ct,ds=new eu,wo=new Ta,fp=new H,So=new H,To=new H,Ao=new H,jl=new H,Eo=new H,pp=new H,Co=new H,Ke=class extends Dt{constructor(e=new ln,t=new Ft){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Eo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(jl.fromBufferAttribute(u,e),a?Eo.addScaledVector(jl,h):Eo.addScaledVector(jl.sub(t),h))}t.add(Eo)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(r),ds.copy(e.ray).recast(e.near),!(wo.containsPoint(ds.origin)===!1&&(ds.intersectSphere(wo,fp)===null||ds.origin.distanceToSquared(fp)>(e.far-e.near)**2))&&(dp.copy(r).invert(),ds.copy(e.ray).applyMatrix4(dp),!(i.boundingBox!==null&&ds.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ds)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=_;v<R;v+=3){let T=o.getX(v),C=o.getX(v+1),L=o.getX(v+2);s=Ro(this,p,e,i,l,h,u,T,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),_=o.getX(m+1),v=o.getX(m+2);s=Ro(this,a,e,i,l,h,u,b,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),_=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=b,R=_;v<R;v+=3){let T=v,C=v+1,L=v+2;s=Ro(this,p,e,i,l,h,u,T,C,L),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(c.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,_=m+1,v=m+2;s=Ro(this,a,e,i,l,h,u,b,_,v),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Cx(n,e,t,i,s,r,a,o){let c;if(e.side===tn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===Vi,o),c===null)return null;Co.copy(o),Co.applyMatrix4(n.matrixWorld);let l=t.ray.origin.distanceTo(Co);return l<t.near||l>t.far?null:{distance:l,point:Co.clone(),object:n}}function Ro(n,e,t,i,s,r,a,o,c,l){n.getVertexPosition(o,So),n.getVertexPosition(c,To),n.getVertexPosition(l,Ao);let h=Cx(n,e,t,i,So,To,Ao,pp);if(h){let u=new H;Bi.getBarycoord(pp,So,To,Ao,u),s&&(h.uv=Bi.getInterpolatedAttribute(s,o,c,l,u,new Me)),r&&(h.uv1=Bi.getInterpolatedAttribute(r,o,c,l,u,new Me)),a&&(h.normal=Bi.getInterpolatedAttribute(a,o,c,l,u,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new H,materialIndex:0};Bi.getNormal(So,To,Ao,d.normal),h.face=d,h.barycoord=u}return h}var $t=class n extends ln{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(u,2));function g(y,m,p,b,_,v,R,T,C,L,Q){let x=v/C,w=R/L,X=v/2,F=R/2,E=T/2,U=C+1,N=L+1,Z=0,G=0,xe=new H;for(let pe=0;pe<N;pe++){let W=pe*w-F;for(let se=0;se<U;se++){let ke=se*x-X;xe[y]=ke*b,xe[m]=W*_,xe[p]=E,l.push(xe.x,xe.y,xe.z),xe[y]=0,xe[m]=0,xe[p]=T>0?1:-1,h.push(xe.x,xe.y,xe.z),u.push(se/C),u.push(1-pe/L),Z+=1}}for(let pe=0;pe<L;pe++)for(let W=0;W<C;W++){let se=d+W+U*pe,ke=d+W+U*(pe+1),ne=d+(W+1)+U*(pe+1),ue=d+(W+1)+U*pe;c.push(se,ke,ue),c.push(ke,ne,ue),G+=6}o.addGroup(f,G,Q),f+=G,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function cn(n){let e={};for(let t=0;t<n.length;t++){let i=Mr(n[t]);for(let s in i)e[s]=i[s]}return e}function Rx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var Px={clone:Mr,merge:cn},Ix=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ln=class extends xi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ix,this.fragmentShader=Lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=Rx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},rc=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=pi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Oi=new H,mp=new Me,gp=new Me,Qt=class extends rc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=jo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jo*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,mp,gp),t.subVectors(gp,mp)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Il*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nr=-90,ir=1,tu=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Qt(nr,ir,e,t);s.layers=this.layers,this.add(s);let r=new Qt(nr,ir,e,t);r.layers=this.layers,this.add(r);let a=new Qt(nr,ir,e,t);a.layers=this.layers,this.add(a);let o=new Qt(nr,ir,e,t);o.layers=this.layers,this.add(o);let c=new Qt(nr,ir,e,t);c.layers=this.layers,this.add(c);let l=new Qt(nr,ir,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===pi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Jo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,c),e.setRenderTarget(i,4,s),e.render(t,l),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},ac=class extends mn{constructor(e,t,i,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:yr,super(e,t,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},nu=class extends yi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new ac(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Vn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $t(5,5,5),r=new Ln({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:tn,blending:zi});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===_s&&(t.minFilter=Vn),new tu(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Ql=new H,Dx=new H,kx=new et,di=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Ql.subVectors(i,t).cross(Dx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Ql),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||kx.getNormalMatrix(e),s=this.coplanarPoint(Ql).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},fs=new Ta,Po=new H,Aa=class{constructor(e=new di,t=new di,i=new di,s=new di,r=new di,a=new di){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=pi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],b=s[13],_=s[14],v=s[15];if(i[0].setComponents(c-r,d-l,m-f,v-p).normalize(),i[1].setComponents(c+r,d+l,m+f,v+p).normalize(),i[2].setComponents(c+a,d+h,m+g,v+b).normalize(),i[3].setComponents(c-a,d-h,m-g,v-b).normalize(),i[4].setComponents(c-o,d-u,m-y,v-_).normalize(),t===pi)i[5].setComponents(c+o,d+u,m+y,v+_).normalize();else if(t===Jo)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fs)}intersectsSprite(e){return fs.center.set(0,0,0),fs.radius=.7071067811865476,fs.applyMatrix4(e.matrixWorld),this.intersectsSphere(fs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(Po.x=s.normal.x>0?e.max.x:e.min.x,Po.y=s.normal.y>0?e.max.y:e.min.y,Po.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function hm(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Ux(n){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(c,d),n.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(n.bindBuffer(l,o),u.length===0)n.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(n.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var vi=class n extends ln{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*d-a;for(let _=0;_<l;_++){let v=_*u-r;g.push(v,-b,0),y.push(0,0,1),m.push(_/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let _=b+l*p,v=b+l*(p+1),R=b+1+l*(p+1),T=b+1+l*p;f.push(_,v,T),f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Nx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ox=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Gx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,$x=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Kx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jx=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,jx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ev=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,sv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,rv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,av=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,ov=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dv="gl_FragColor = linearToOutputTexel( gl_FragColor );",fv=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_v=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Sv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Av=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ev=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Rv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Pv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Iv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Lv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Uv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ov=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Bv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Gv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Wv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$v=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,jv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Qv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,s_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,r_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,a_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,c_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,h_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,u_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,f_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,y_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,x_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,v_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,__=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,M_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,b_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,w_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,S_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,T_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,R_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,I_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,L_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,U_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,N_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,z_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,$_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,q_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Z_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,j_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,e1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,n1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,i1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,r1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,a1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,o1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,c1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,p1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:Nx,alphahash_pars_fragment:Ox,alphamap_fragment:Fx,alphamap_pars_fragment:Bx,alphatest_fragment:zx,alphatest_pars_fragment:Hx,aomap_fragment:Vx,aomap_pars_fragment:Gx,batching_pars_vertex:Wx,batching_vertex:$x,begin_vertex:qx,beginnormal_vertex:Xx,bsdfs:Yx,iridescence_fragment:Zx,bumpmap_pars_fragment:Kx,clipping_planes_fragment:Jx,clipping_planes_pars_fragment:jx,clipping_planes_pars_vertex:Qx,clipping_planes_vertex:ev,color_fragment:tv,color_pars_fragment:nv,color_pars_vertex:iv,color_vertex:sv,common:rv,cube_uv_reflection_fragment:av,defaultnormal_vertex:ov,displacementmap_pars_vertex:cv,displacementmap_vertex:lv,emissivemap_fragment:hv,emissivemap_pars_fragment:uv,colorspace_fragment:dv,colorspace_pars_fragment:fv,envmap_fragment:pv,envmap_common_pars_fragment:mv,envmap_pars_fragment:gv,envmap_pars_vertex:yv,envmap_physical_pars_fragment:Cv,envmap_vertex:xv,fog_vertex:vv,fog_pars_vertex:_v,fog_fragment:Mv,fog_pars_fragment:bv,gradientmap_pars_fragment:wv,lightmap_pars_fragment:Sv,lights_lambert_fragment:Tv,lights_lambert_pars_fragment:Av,lights_pars_begin:Ev,lights_toon_fragment:Rv,lights_toon_pars_fragment:Pv,lights_phong_fragment:Iv,lights_phong_pars_fragment:Lv,lights_physical_fragment:Dv,lights_physical_pars_fragment:kv,lights_fragment_begin:Uv,lights_fragment_maps:Nv,lights_fragment_end:Ov,logdepthbuf_fragment:Fv,logdepthbuf_pars_fragment:Bv,logdepthbuf_pars_vertex:zv,logdepthbuf_vertex:Hv,map_fragment:Vv,map_pars_fragment:Gv,map_particle_fragment:Wv,map_particle_pars_fragment:$v,metalnessmap_fragment:qv,metalnessmap_pars_fragment:Xv,morphinstance_vertex:Yv,morphcolor_vertex:Zv,morphnormal_vertex:Kv,morphtarget_pars_vertex:Jv,morphtarget_vertex:jv,normal_fragment_begin:Qv,normal_fragment_maps:e_,normal_pars_fragment:t_,normal_pars_vertex:n_,normal_vertex:i_,normalmap_pars_fragment:s_,clearcoat_normal_fragment_begin:r_,clearcoat_normal_fragment_maps:a_,clearcoat_pars_fragment:o_,iridescence_pars_fragment:c_,opaque_fragment:l_,packing:h_,premultiplied_alpha_fragment:u_,project_vertex:d_,dithering_fragment:f_,dithering_pars_fragment:p_,roughnessmap_fragment:m_,roughnessmap_pars_fragment:g_,shadowmap_pars_fragment:y_,shadowmap_pars_vertex:x_,shadowmap_vertex:v_,shadowmask_pars_fragment:__,skinbase_vertex:M_,skinning_pars_vertex:b_,skinning_vertex:w_,skinnormal_vertex:S_,specularmap_fragment:T_,specularmap_pars_fragment:A_,tonemapping_fragment:E_,tonemapping_pars_fragment:C_,transmission_fragment:R_,transmission_pars_fragment:P_,uv_pars_fragment:I_,uv_pars_vertex:L_,uv_vertex:D_,worldpos_vertex:k_,background_vert:U_,background_frag:N_,backgroundCube_vert:O_,backgroundCube_frag:F_,cube_vert:B_,cube_frag:z_,depth_vert:H_,depth_frag:V_,distanceRGBA_vert:G_,distanceRGBA_frag:W_,equirect_vert:$_,equirect_frag:q_,linedashed_vert:X_,linedashed_frag:Y_,meshbasic_vert:Z_,meshbasic_frag:K_,meshlambert_vert:J_,meshlambert_frag:j_,meshmatcap_vert:Q_,meshmatcap_frag:e1,meshnormal_vert:t1,meshnormal_frag:n1,meshphong_vert:i1,meshphong_frag:s1,meshphysical_vert:r1,meshphysical_frag:a1,meshtoon_vert:o1,meshtoon_frag:c1,points_vert:l1,points_frag:h1,shadow_vert:u1,shadow_frag:d1,sprite_vert:f1,sprite_frag:p1},Le={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new et}},envmap:{envMap:{value:null},envMapRotation:{value:new et},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new et},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0},uvTransform:{value:new et}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new et},alphaMap:{value:null},alphaMapTransform:{value:new et},alphaTest:{value:0}}},jn={basic:{uniforms:cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:cn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:cn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new je(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:cn([Le.points,Le.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:cn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:cn([Le.common,Le.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:cn([Le.sprite,Le.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new et}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:cn([Le.common,Le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:cn([Le.lights,Le.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};jn.physical={uniforms:cn([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new et},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new et},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new et},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new et},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new et},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new et},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new et}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};var Io={r:0,b:0,g:0},ps=new ei,m1=new Ct;function g1(n,e,t,i,s,r,a){let o=new je(0),c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(b){let _=b.isScene===!0?b.background:null;return _&&_.isTexture&&(_=(b.backgroundBlurriness>0?t:e).get(_)),_}function y(b){let _=!1,v=g(b);v===null?p(o,c):v&&v.isColor&&(p(v,1),_=!0);let R=n.xr.getEnvironmentBlendMode();R==="additive"?i.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,_){let v=g(_);v&&(v.isCubeTexture||v.mapping===Ac)?(h===void 0&&(h=new Ke(new $t(1,1,1),new Ln({name:"BackgroundCubeMaterial",uniforms:Mr(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ps.copy(_.backgroundRotation),ps.x*=-1,ps.y*=-1,ps.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(m1.makeRotationFromEuler(ps)),h.material.toneMapped=ut.getTransfer(v.colorSpace)!==yt,(u!==v||d!==v.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Ke(new vi(2,2),new Ln({name:"BackgroundMaterial",uniforms:Mr(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,l.material.toneMapped=ut.getTransfer(v.colorSpace)!==yt,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,_){b.getRGB(Io,lm(n)),i.buffers.color.setClear(Io.r,Io.g,Io.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(b,_=1){o.set(b),c=_,p(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(o,c)},render:y,addToRenderList:m}}function y1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(x,w,X,F,E){let U=!1,N=u(F,X,w);r!==N&&(r=N,l(r.object)),U=f(x,F,X,E),U&&g(x,F,X,E),E!==null&&e.update(E,n.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,v(x,w,X,F),E!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(E).buffer))}function c(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function u(x,w,X){let F=X.wireframe===!0,E=i[x.id];E===void 0&&(E={},i[x.id]=E);let U=E[w.id];U===void 0&&(U={},E[w.id]=U);let N=U[F];return N===void 0&&(N=d(c()),U[F]=N),N}function d(x){let w=[],X=[],F=[];for(let E=0;E<t;E++)w[E]=0,X[E]=0,F[E]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:X,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,w,X,F){let E=r.attributes,U=w.attributes,N=0,Z=X.getAttributes();for(let G in Z)if(Z[G].location>=0){let pe=E[G],W=U[G];if(W===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(W=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(W=x.instanceColor)),pe===void 0||pe.attribute!==W||W&&pe.data!==W.data)return!0;N++}return r.attributesNum!==N||r.index!==F}function g(x,w,X,F){let E={},U=w.attributes,N=0,Z=X.getAttributes();for(let G in Z)if(Z[G].location>=0){let pe=U[G];pe===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));let W={};W.attribute=pe,pe&&pe.data&&(W.data=pe.data),E[G]=W,N++}r.attributes=E,r.attributesNum=N,r.index=F}function y(){let x=r.newAttributes;for(let w=0,X=x.length;w<X;w++)x[w]=0}function m(x){p(x,0)}function p(x,w){let X=r.newAttributes,F=r.enabledAttributes,E=r.attributeDivisors;X[x]=1,F[x]===0&&(n.enableVertexAttribArray(x),F[x]=1),E[x]!==w&&(n.vertexAttribDivisor(x,w),E[x]=w)}function b(){let x=r.newAttributes,w=r.enabledAttributes;for(let X=0,F=w.length;X<F;X++)w[X]!==x[X]&&(n.disableVertexAttribArray(X),w[X]=0)}function _(x,w,X,F,E,U,N){N===!0?n.vertexAttribIPointer(x,w,X,E,U):n.vertexAttribPointer(x,w,X,F,E,U)}function v(x,w,X,F){y();let E=F.attributes,U=X.getAttributes(),N=w.defaultAttributeValues;for(let Z in U){let G=U[Z];if(G.location>=0){let xe=E[Z];if(xe===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),xe!==void 0){let pe=xe.normalized,W=xe.itemSize,se=e.get(xe);if(se===void 0)continue;let ke=se.buffer,ne=se.type,ue=se.bytesPerElement,ve=ne===n.INT||ne===n.UNSIGNED_INT||xe.gpuType===ku;if(xe.isInterleavedBufferAttribute){let Ee=xe.data,qe=Ee.stride,We=xe.offset;if(Ee.isInstancedInterleavedBuffer){for(let He=0;He<G.locationSize;He++)p(G.location+He,Ee.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let He=0;He<G.locationSize;He++)m(G.location+He);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let He=0;He<G.locationSize;He++)_(G.location+He,W/G.locationSize,ne,pe,qe*ue,(We+W/G.locationSize*He)*ue,ve)}else{if(xe.isInstancedBufferAttribute){for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee,xe.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)m(G.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Ee=0;Ee<G.locationSize;Ee++)_(G.location+Ee,W/G.locationSize,ne,pe,W*ue,W/G.locationSize*Ee*ue,ve)}}else if(N!==void 0){let pe=N[Z];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(G.location,pe);break;case 3:n.vertexAttrib3fv(G.location,pe);break;case 4:n.vertexAttrib4fv(G.location,pe);break;default:n.vertexAttrib1fv(G.location,pe)}}}}b()}function R(){L();for(let x in i){let w=i[x];for(let X in w){let F=w[X];for(let E in F)h(F[E].object),delete F[E];delete w[X]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;let w=i[x.id];for(let X in w){let F=w[X];for(let E in F)h(F[E].object),delete F[E];delete w[X]}delete i[x.id]}function C(x){for(let w in i){let X=i[w];if(X[x.id]===void 0)continue;let F=X[x.id];for(let E in F)h(F[E].object),delete F[E];delete X[x.id]}}function L(){Q(),a=!0,r!==s&&(r=s,l(r.object))}function Q(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:Q,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function x1(n,e,t){let i;function s(l){i=l}function r(l,h){n.drawArrays(i,l,h),t.update(h,i,1)}function a(l,h,u){u!==0&&(n.drawArraysInstanced(i,l,h,u),t.update(h,i,u))}function o(l,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function c(l,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)a(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,l,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)t.update(g,i,d[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function v1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let C=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==Gn&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){let L=C===ka&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==gi&&i.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fi&&!L)}function c(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let C=e.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:_,maxFragmentUniforms:v,vertexTextures:R,maxSamples:T}}function _1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new di,o=new et,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let b=r?0:i,_=b*4,v=p.clippingState||null;c.value=v,v=h(g,d,_,f);for(let R=0;R!==_;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let p=f+y*4,b=d.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,v=f;_!==y;++_,v+=4)a.copy(u[_]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function M1(n){let e=new WeakMap;function t(a,o){return o===_h?a.mapping=yr:o===Mh&&(a.mapping=xr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===_h||o===Mh)if(e.has(a)){let c=e.get(a).texture;return t(c,a.mapping)}else{let c=a.image;if(c&&c.height>0){let l=new nu(c.height);return l.fromEquirectangularTexture(n,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var oc=class extends rc{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},lr=4,yp=[.125,.215,.35,.446,.526,.582],xs=20,eh=new oc,xp=new je,th=null,nh=0,ih=0,sh=!1,gs=(1+Math.sqrt(5))/2,sr=1/gs,vp=[new H(-gs,sr,0),new H(gs,sr,0),new H(-sr,0,gs),new H(sr,0,gs),new H(0,gs,-sr),new H(0,gs,sr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],cc=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(th,nh,ih),this._renderer.xr.enabled=sh,e.scissorTest=!1,Lo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yr||e.mapping===xr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),th=this._renderer.getRenderTarget(),nh=this._renderer.getActiveCubeFace(),ih=this._renderer.getActiveMipmapLevel(),sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:ka,format:Gn,colorSpace:Xi,depthBuffer:!1},s=_p(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=b1(r)),this._blurMaterial=w1(r,e,t)}return s}_compileMaterial(e){let t=new Ke(this._lodPlanes[0],e);this._renderer.compile(t,eh)}_sceneToCubeUV(e,t,i,s){let o=new Qt(90,1,t,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(xp),h.toneMapping=Hi,h.autoClear=!1;let f=new Ft({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new Ke(new $t,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(xp),y=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,c[p],0),o.lookAt(l[p],0,0)):b===1?(o.up.set(0,0,c[p]),o.lookAt(0,l[p],0)):(o.up.set(0,c[p],0),o.lookAt(0,0,l[p]));let _=this._cubeSize;Lo(s,b*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===yr||e.mapping===xr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ke(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Lo(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,eh)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(s-r-1)%vp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Ke(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*xs-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):xs;m>xs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xs}`);let p=[],b=0;for(let C=0;C<xs;++C){let L=C/y,Q=Math.exp(-L*L/2);p.push(Q),C===0?b+=Q:C<m&&(b+=2*Q)}for(let C=0;C<p.length;C++)p[C]=p[C]/b;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let v=this._sizeLods[s],R=3*v*(s>_-lr?s-_+lr:0),T=4*(this._cubeSize-v);Lo(t,R,T,3*v,2*v),c.setRenderTarget(t),c.render(u,eh)}};function b1(n){let e=[],t=[],i=[],s=n,r=n-lr+1+yp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let c=1/o;a>n-lr?c=yp[a-n+lr-1]:a===0&&(c=0),i.push(c);let l=1/(o-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*f),_=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){let C=T%3*2/3-1,L=T>2?0:-1,Q=[C,L,0,C+2/3,L,0,C+2/3,L+1,0,C,L,0,C+2/3,L+1,0,C,L+1,0];b.set(Q,y*g*T),_.set(d,m*g*T);let x=[T,T,T,T,T,T];v.set(x,p*g*T)}let R=new ln;R.setAttribute("position",new Mn(b,y)),R.setAttribute("uv",new Mn(_,m)),R.setAttribute("faceIndex",new Mn(v,p)),e.push(R),s>lr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function _p(n,e,t){let i=new yi(n,e,t);return i.texture.mapping=Ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Lo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function w1(n,e,t){let i=new Float32Array(xs),s=new H(0,1,0);return new Ln({name:"SphericalGaussianBlur",defines:{n:xs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Mp(){return new Ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function bp(){return new Ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:zi,depthTest:!1,depthWrite:!1})}function Vu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function S1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let c=o.mapping,l=c===_h||c===Mh,h=c===yr||c===xr;if(l||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new cc(n)),u=l?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return l&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new cc(n)),u=l?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let c=0,l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){let c=o.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function T1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&qo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function A1(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function l(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let _=0,v=b.length;_<v;_+=3){let R=b[_+0],T=b[_+1],C=b[_+2];d.push(R,T,T,C,C,R)}}else if(g!==void 0){let b=g.array;y=g.version;for(let _=0,v=b.length/3-1;_<v;_+=3){let R=_+0,T=_+1,C=_+2;d.push(R,T,T,C,C,R)}}else return;let m=new(om(d)?sc:ic)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function E1(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function l(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,y,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<y.length;b++)t.update(p,i,y[b])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function C1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function R1(n,e,t){let i=new WeakMap,s=new Pt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let Q=function(){C.dispose(),i.delete(o),o.removeEventListener("dispose",Q)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let v=o.attributes.position.count*_,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*R*4*u),C=new tc(T,v,R,u);C.type=fi,C.needsUpdate=!0;let L=_*4;for(let x=0;x<u;x++){let w=m[x],X=p[x],F=b[x],E=v*R*4*x;for(let U=0;U<w.count;U++){let N=U*L;f===!0&&(s.fromBufferAttribute(w,U),T[E+N+0]=s.x,T[E+N+1]=s.y,T[E+N+2]=s.z,T[E+N+3]=0),g===!0&&(s.fromBufferAttribute(X,U),T[E+N+4]=s.x,T[E+N+5]=s.y,T[E+N+6]=s.z,T[E+N+7]=0),y===!0&&(s.fromBufferAttribute(F,U),T[E+N+8]=s.x,T[E+N+9]=s.y,T[E+N+10]=s.z,T[E+N+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:C,size:new Me(v,R)},i.set(o,d),o.addEventListener("dispose",Q)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<l.length;y++)f+=l[y];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(n,"morphTargetBaseInfluence",g),c.getUniforms().setValue(n,"morphTargetInfluences",l)}c.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function P1(n,e,t,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,u=e.get(c,h);if(s.get(u)!==l&&(e.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function a(){s=new WeakMap}function o(c){let l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}var lc=class extends mn{constructor(e,t,i,s,r,a,o,c,l,h=dr){if(h!==dr&&h!==_r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===dr&&(i=Ms),i===void 0&&h===_r&&(i=vr),super(null,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:en,this.minFilter=c!==void 0?c:en,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},um=new mn,wp=new lc(1,1),dm=new tc,fm=new Qh,pm=new ac,Sp=[],Tp=[],Ap=new Float32Array(16),Ep=new Float32Array(9),Cp=new Float32Array(4);function Tr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Rc(n,e){let t=Tp[e];t===void 0&&(t=new Int32Array(e),Tp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function I1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function L1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function U1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Cp.set(i),n.uniformMatrix2fv(this.addr,!1,Cp),zt(t,i)}}function N1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Ep.set(i),n.uniformMatrix3fv(this.addr,!1,Ep),zt(t,i)}}function O1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;Ap.set(i),n.uniformMatrix4fv(this.addr,!1,Ap),zt(t,i)}}function F1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function B1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function z1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function H1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function V1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function G1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function W1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function $1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function q1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(wp.compareFunction=am,r=wp):r=um,t.setTexture2D(e||r,s)}function X1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||fm,s)}function Y1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||pm,s)}function Z1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||dm,s)}function K1(n){switch(n){case 5126:return I1;case 35664:return L1;case 35665:return D1;case 35666:return k1;case 35674:return U1;case 35675:return N1;case 35676:return O1;case 5124:case 35670:return F1;case 35667:case 35671:return B1;case 35668:case 35672:return z1;case 35669:case 35673:return H1;case 5125:return V1;case 36294:return G1;case 36295:return W1;case 36296:return $1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return Y1;case 36289:case 36303:case 36311:case 36292:return Z1}}function J1(n,e){n.uniform1fv(this.addr,e)}function j1(n,e){let t=Tr(e,this.size,2);n.uniform2fv(this.addr,t)}function Q1(n,e){let t=Tr(e,this.size,3);n.uniform3fv(this.addr,t)}function eM(n,e){let t=Tr(e,this.size,4);n.uniform4fv(this.addr,t)}function tM(n,e){let t=Tr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function nM(n,e){let t=Tr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function iM(n,e){let t=Tr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function sM(n,e){n.uniform1iv(this.addr,e)}function rM(n,e){n.uniform2iv(this.addr,e)}function aM(n,e){n.uniform3iv(this.addr,e)}function oM(n,e){n.uniform4iv(this.addr,e)}function cM(n,e){n.uniform1uiv(this.addr,e)}function lM(n,e){n.uniform2uiv(this.addr,e)}function hM(n,e){n.uniform3uiv(this.addr,e)}function uM(n,e){n.uniform4uiv(this.addr,e)}function dM(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||um,r[a])}function fM(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||fm,r[a])}function pM(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||pm,r[a])}function mM(n,e,t){let i=this.cache,s=e.length,r=Rc(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||dm,r[a])}function gM(n){switch(n){case 5126:return J1;case 35664:return j1;case 35665:return Q1;case 35666:return eM;case 35674:return tM;case 35675:return nM;case 35676:return iM;case 5124:case 35670:return sM;case 35667:case 35671:return rM;case 35668:case 35672:return aM;case 35669:case 35673:return oM;case 5125:return cM;case 36294:return lM;case 36295:return hM;case 36296:return uM;case 35678:case 36198:case 36298:case 36306:case 35682:return dM;case 35679:case 36299:case 36307:return fM;case 35680:case 36300:case 36308:case 36293:return pM;case 36289:case 36303:case 36311:case 36292:return mM}}var iu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=K1(t.type)}},su=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=gM(t.type)}},ru=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},rh=/(\w+)(\])?(\[|\.)?/g;function Rp(n,e){n.seq.push(e),n.map[e.id]=e}function yM(n,e,t){let i=n.name,s=i.length;for(rh.lastIndex=0;;){let r=rh.exec(i),a=rh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Rp(t,l===void 0?new iu(o,n,e):new su(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new ru(o),Rp(t,u)),t=u}}}var pr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);yM(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Pp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var xM=37297,vM=0;function _M(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function MM(n){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(n),i;switch(e===t?i="":e===Ko&&t===Zo?i="LinearDisplayP3ToLinearSRGB":e===Zo&&t===Ko&&(i="LinearSRGBToLinearDisplayP3"),n){case Xi:case Cc:return[i,"LinearTransferOETF"];case Wt:case Hu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ip(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+_M(n.getShaderSource(e),a)}else return s}function bM(n,e){let t=MM(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function wM(n,e){let t;switch(e){case Xy:t="Linear";break;case Yy:t="Reinhard";break;case Zy:t="Cineon";break;case Ky:t="ACESFilmic";break;case jy:t="AgX";break;case Qy:t="Neutral";break;case Jy:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Do=new H;function SM(){ut.getLuminanceCoefficients(Do);let n=Do.x.toFixed(4),e=Do.y.toFixed(4),t=Do.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TM(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xa).join(`
`)}function AM(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function EM(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function xa(n){return n!==""}function Lp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Dp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var CM=/^[ \t]*#include +<([\w\d./]+)>/gm;function au(n){return n.replace(CM,PM)}var RM=new Map;function PM(n,e){let t=Qe[e];if(t===void 0){let i=RM.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return au(t)}var IM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function kp(n){return n.replace(IM,LM)}function LM(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Up(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DM(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Du?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function kM(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case yr:case xr:e="ENVMAP_TYPE_CUBE";break;case Ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UM(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case xr:e="ENVMAP_MODE_REFRACTION";break}return e}function NM(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zp:e="ENVMAP_BLENDING_MULTIPLY";break;case $y:e="ENVMAP_BLENDING_MIX";break;case qy:e="ENVMAP_BLENDING_ADD";break}return e}function OM(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function FM(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=DM(t),l=kM(t),h=UM(t),u=NM(t),d=OM(t),f=TM(t),g=AM(r),y=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(xa).join(`
`),p.length>0&&(p+=`
`)):(m=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xa).join(`
`),p=[Up(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Hi?wM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,bM("linearToOutputTexel",t.outputColorSpace),SM(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(xa).join(`
`)),a=au(a),a=Lp(a,t),a=Dp(a,t),o=au(o),o=Lp(o,t),o=Dp(o,t),a=kp(a),o=kp(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=b+m+a,v=b+p+o,R=Pp(s,s.VERTEX_SHADER,_),T=Pp(s,s.FRAGMENT_SHADER,v);s.attachShader(y,R),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function C(w){if(n.debug.checkShaderErrors){let X=s.getProgramInfoLog(y).trim(),F=s.getShaderInfoLog(R).trim(),E=s.getShaderInfoLog(T).trim(),U=!0,N=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(U=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,R,T);else{let Z=Ip(s,R,"vertex"),G=Ip(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+X+`
`+Z+`
`+G)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(F===""||E==="")&&(N=!1);N&&(w.diagnostics={runnable:U,programLog:X,vertexShader:{log:F,prefix:m},fragmentShader:{log:E,prefix:p}})}s.deleteShader(R),s.deleteShader(T),L=new pr(s,y),Q=EM(s,y)}let L;this.getUniforms=function(){return L===void 0&&C(this),L};let Q;this.getAttributes=function(){return Q===void 0&&C(this),Q};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(y,xM)),x},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vM++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=R,this.fragmentShader=T,this}var BM=0,ou=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new cu(e),t.set(e,i)),i}},cu=class{constructor(e){this.id=BM++,this.code=e,this.usedTimes=0}};function zM(n,e,t,i,s,r,a){let o=new nc,c=new ou,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,w,X,F,E){let U=F.fog,N=E.geometry,Z=x.isMeshStandardMaterial?F.environment:null,G=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),xe=G&&G.mapping===Ac?G.image.height:null,pe=y[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let W=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,se=W!==void 0?W.length:0,ke=0;N.morphAttributes.position!==void 0&&(ke=1),N.morphAttributes.normal!==void 0&&(ke=2),N.morphAttributes.color!==void 0&&(ke=3);let ne,ue,ve,Ee;if(pe){let Ht=jn[pe];ne=Ht.vertexShader,ue=Ht.fragmentShader}else ne=x.vertexShader,ue=x.fragmentShader,c.update(x),ve=c.getVertexShaderID(x),Ee=c.getFragmentShaderID(x);let qe=n.getRenderTarget(),We=E.isInstancedMesh===!0,He=E.isBatchedMesh===!0,Ge=!!x.map,ae=!!x.matcap,I=!!G,le=!!x.aoMap,fe=!!x.lightMap,ye=!!x.bumpMap,Ae=!!x.normalMap,Fe=!!x.displacementMap,Re=!!x.emissiveMap,P=!!x.metalnessMap,M=!!x.roughnessMap,Y=x.anisotropy>0,J=x.clearcoat>0,ce=x.dispersion>0,oe=x.iridescence>0,Be=x.sheen>0,Pe=x.transmission>0,Ue=Y&&!!x.anisotropyMap,we=J&&!!x.clearcoatMap,ie=J&&!!x.clearcoatNormalMap,he=J&&!!x.clearcoatRoughnessMap,Oe=oe&&!!x.iridescenceMap,Se=oe&&!!x.iridescenceThicknessMap,me=Be&&!!x.sheenColorMap,Xe=Be&&!!x.sheenRoughnessMap,Ye=!!x.specularMap,ct=!!x.specularColorMap,B=!!x.specularIntensityMap,Ie=Pe&&!!x.transmissionMap,te=Pe&&!!x.thicknessMap,de=!!x.gradientMap,De=!!x.alphaMap,Ne=x.alphaTest>0,st=!!x.alphaHash,bt=!!x.extensions,Xt=Hi;x.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let ot={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:ue,defines:x.defines,customVertexShaderID:ve,customFragmentShaderID:Ee,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:He,batchingColor:He&&E._colorsTexture!==null,instancing:We,instancingColor:We&&E.instanceColor!==null,instancingMorph:We&&E.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:qe===null?n.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:Xi,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:ae,envMap:I,envMapMode:I&&G.mapping,envMapCubeUVHeight:xe,aoMap:le,lightMap:fe,bumpMap:ye,normalMap:Ae,displacementMap:f&&Fe,emissiveMap:Re,normalMapObjectSpace:Ae&&x.normalMapType===ix,normalMapTangentSpace:Ae&&x.normalMapType===zu,metalnessMap:P,roughnessMap:M,anisotropy:Y,anisotropyMap:Ue,clearcoat:J,clearcoatMap:we,clearcoatNormalMap:ie,clearcoatRoughnessMap:he,dispersion:ce,iridescence:oe,iridescenceMap:Oe,iridescenceThicknessMap:Se,sheen:Be,sheenColorMap:me,sheenRoughnessMap:Xe,specularMap:Ye,specularColorMap:ct,specularIntensityMap:B,transmission:Pe,transmissionMap:Ie,thicknessMap:te,gradientMap:de,opaque:x.transparent===!1&&x.blending===ur&&x.alphaToCoverage===!1,alphaMap:De,alphaTest:Ne,alphaHash:st,combine:x.combine,mapUv:Ge&&m(x.map.channel),aoMapUv:le&&m(x.aoMap.channel),lightMapUv:fe&&m(x.lightMap.channel),bumpMapUv:ye&&m(x.bumpMap.channel),normalMapUv:Ae&&m(x.normalMap.channel),displacementMapUv:Fe&&m(x.displacementMap.channel),emissiveMapUv:Re&&m(x.emissiveMap.channel),metalnessMapUv:P&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:Ue&&m(x.anisotropyMap.channel),clearcoatMapUv:we&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&m(x.sheenRoughnessMap.channel),specularMapUv:Ye&&m(x.specularMap.channel),specularColorMapUv:ct&&m(x.specularColorMap.channel),specularIntensityMapUv:B&&m(x.specularIntensityMap.channel),transmissionMapUv:Ie&&m(x.transmissionMap.channel),thicknessMapUv:te&&m(x.thicknessMap.channel),alphaMapUv:De&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(Ae||Y),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:E.isPoints===!0&&!!N.attributes.uv&&(Ge||De),fog:!!U,useFog:x.fog===!0,fogExp2:!!U&&U.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:E.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:ke,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&X.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ot,flipSided:x.side===tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:bt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(bt&&x.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ot.vertexUv1s=l.has(1),ot.vertexUv2s=l.has(2),ot.vertexUv3s=l.has(3),l.clear(),ot}function b(x){let w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(let X in x.defines)w.push(X),w.push(x.defines[X]);return x.isRawShaderMaterial===!1&&(_(w,x),v(w,x),w.push(n.outputColorSpace)),w.push(x.customProgramCacheKey),w.join()}function _(x,w){x.push(w.precision),x.push(w.outputColorSpace),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.mapUv),x.push(w.alphaMapUv),x.push(w.lightMapUv),x.push(w.aoMapUv),x.push(w.bumpMapUv),x.push(w.normalMapUv),x.push(w.displacementMapUv),x.push(w.emissiveMapUv),x.push(w.metalnessMapUv),x.push(w.roughnessMapUv),x.push(w.anisotropyMapUv),x.push(w.clearcoatMapUv),x.push(w.clearcoatNormalMapUv),x.push(w.clearcoatRoughnessMapUv),x.push(w.iridescenceMapUv),x.push(w.iridescenceThicknessMapUv),x.push(w.sheenColorMapUv),x.push(w.sheenRoughnessMapUv),x.push(w.specularMapUv),x.push(w.specularColorMapUv),x.push(w.specularIntensityMapUv),x.push(w.transmissionMapUv),x.push(w.thicknessMapUv),x.push(w.combine),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.numLightProbes),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function v(x,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),x.push(o.mask)}function R(x){let w=y[x.type],X;if(w){let F=jn[w];X=Px.clone(F.uniforms)}else X=x.uniforms;return X}function T(x,w){let X;for(let F=0,E=h.length;F<E;F++){let U=h[F];if(U.cacheKey===w){X=U,++X.usedTimes;break}}return X===void 0&&(X=new FM(n,w,x,r),h.push(X)),X}function C(x){if(--x.usedTimes===0){let w=h.indexOf(x);h[w]=h[h.length-1],h.pop(),x.destroy()}}function L(x){c.remove(x)}function Q(){c.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:R,acquireProgram:T,releaseProgram:C,releaseShaderCache:L,programs:h,dispose:Q}}function HM(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,c){n.get(a)[o]=c}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function VM(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Np(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Op(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,y,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function o(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function c(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function l(u,d){t.length>1&&t.sort(u||VM),i.length>1&&i.sort(d||Np),s.length>1&&s.sort(d||Np)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function GM(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Op,n.set(i,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function WM(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new je};break;case"SpotLight":t={position:new H,direction:new H,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function $M(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var qM=0;function XM(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function YM(n){let e=new WM,t=$M(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new H);let s=new H,r=new Ct,a=new Ct;function o(l){let h=0,u=0,d=0;for(let Q=0;Q<9;Q++)i.probe[Q].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,_=0,v=0,R=0,T=0,C=0;l.sort(XM);for(let Q=0,x=l.length;Q<x;Q++){let w=l[Q],X=w.color,F=w.intensity,E=w.distance,U=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=X.r*F,u+=X.g*F,d+=X.b*F;else if(w.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(w.sh.coefficients[N],F);C++}else if(w.isDirectionalLight){let N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Z=w.shadow,G=t.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.directionalShadow[f]=G,i.directionalShadowMap[f]=U,i.directionalShadowMatrix[f]=w.shadow.matrix,b++}i.directional[f]=N,f++}else if(w.isSpotLight){let N=e.get(w);N.position.setFromMatrixPosition(w.matrixWorld),N.color.copy(X).multiplyScalar(F),N.distance=E,N.coneCos=Math.cos(w.angle),N.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),N.decay=w.decay,i.spot[y]=N;let Z=w.shadow;if(w.map&&(i.spotLightMap[R]=w.map,R++,Z.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,w.castShadow){let G=t.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,i.spotShadow[y]=G,i.spotShadowMap[y]=U,v++}y++}else if(w.isRectAreaLight){let N=e.get(w);N.color.copy(X).multiplyScalar(F),N.halfWidth.set(w.width*.5,0,0),N.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=N,m++}else if(w.isPointLight){let N=e.get(w);if(N.color.copy(w.color).multiplyScalar(w.intensity),N.distance=w.distance,N.decay=w.decay,w.castShadow){let Z=w.shadow,G=t.get(w);G.shadowIntensity=Z.intensity,G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=U,i.pointShadowMatrix[g]=w.shadow.matrix,_++}i.point[g]=N,g++}else if(w.isHemisphereLight){let N=e.get(w);N.skyColor.copy(w.color).multiplyScalar(F),N.groundColor.copy(w.groundColor).multiplyScalar(F),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==_||L.numSpotShadows!==v||L.numSpotMaps!==R||L.numLightProbes!==C)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=v+R-T,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,L.directionalLength=f,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=_,L.numSpotShadows=v,L.numSpotMaps=R,L.numLightProbes=C,i.version=qM++)}function c(l,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,b=l.length;p<b;p++){let _=l[p];if(_.isDirectionalLight){let v=i.directional[u];v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(_.isSpotLight){let v=i.spot[f];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let v=i.rectArea[g];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(_.width*.5,0,0),v.halfHeight.set(0,_.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let v=i.point[d];v.position.setFromMatrixPosition(_.matrixWorld),v.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(_.matrixWorld),v.direction.transformDirection(m),y++}}}return{setup:o,setupView:c,state:i}}function Fp(n){let e=new YM(n),t=[],i=[];function s(h){l.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function ZM(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Fp(n),e.set(s,[o])):r>=a.length?(o=new Fp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var lu=class extends xi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hu=class extends xi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},KM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,JM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function jM(n,e,t){let i=new Aa,s=new Me,r=new Me,a=new Pt,o=new lu({depthPacking:nx}),c=new hu,l={},h=t.maxTextureSize,u={[Vi]:tn,[tn]:Vi,[Ot]:Ot},d=new Ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:KM,fragmentShader:JM}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ln;g.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yp;let p=this.type;this.render=function(T,C,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let Q=n.getRenderTarget(),x=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),X=n.state;X.setBlending(zi),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);let F=p!==ui&&this.type===ui,E=p===ui&&this.type!==ui;for(let U=0,N=T.length;U<N;U++){let Z=T[U],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let xe=G.getFrameExtents();if(s.multiply(xe),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,G.mapSize.y=r.y)),G.map===null||F===!0||E===!0){let W=this.type!==ui?{minFilter:en,magFilter:en}:{};G.map!==null&&G.map.dispose(),G.map=new yi(s.x,s.y,W),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();let pe=G.getViewportCount();for(let W=0;W<pe;W++){let se=G.getViewport(W);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),X.viewport(a),G.updateMatrices(Z,W),i=G.getFrustum(),v(C,L,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===ui&&b(G,L),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(Q,x,w)};function b(T,C){let L=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,L,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,L,f,y,null)}function _(T,C,L,Q){let x=null,w=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)x=w;else if(x=L.isPointLight===!0?c:o,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){let X=x.uuid,F=C.uuid,E=l[X];E===void 0&&(E={},l[X]=E);let U=E[F];U===void 0&&(U=x.clone(),E[F]=U,C.addEventListener("dispose",R)),x=U}if(x.visible=C.visible,x.wireframe=C.wireframe,Q===ui?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let X=n.properties.get(x);X.light=L}return x}function v(T,C,L,Q,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===ui)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let F=e.update(T),E=T.material;if(Array.isArray(E)){let U=F.groups;for(let N=0,Z=U.length;N<Z;N++){let G=U[N],xe=E[G.materialIndex];if(xe&&xe.visible){let pe=_(T,xe,Q,x);T.onBeforeShadow(n,T,C,L,F,pe,G),n.renderBufferDirect(L,null,F,pe,T,G),T.onAfterShadow(n,T,C,L,F,pe,G)}}}else if(E.visible){let U=_(T,E,Q,x);T.onBeforeShadow(n,T,C,L,F,U,null),n.renderBufferDirect(L,null,F,U,T,null),T.onAfterShadow(n,T,C,L,F,U,null)}}let X=T.children;for(let F=0,E=X.length;F<E;F++)v(X[F],C,L,Q,x)}function R(T){T.target.removeEventListener("dispose",R);for(let L in l){let Q=l[L],x=T.target.uuid;x in Q&&(Q[x].dispose(),delete Q[x])}}}var QM={[fh]:ph,[mh]:xh,[gh]:vh,[gr]:yh,[ph]:fh,[xh]:mh,[vh]:gh,[yh]:gr};function eb(n){function e(){let B=!1,Ie=new Pt,te=null,de=new Pt(0,0,0,0);return{setMask:function(De){te!==De&&!B&&(n.colorMask(De,De,De,De),te=De)},setLocked:function(De){B=De},setClear:function(De,Ne,st,bt,Xt){Xt===!0&&(De*=bt,Ne*=bt,st*=bt),Ie.set(De,Ne,st,bt),de.equals(Ie)===!1&&(n.clearColor(De,Ne,st,bt),de.copy(Ie))},reset:function(){B=!1,te=null,de.set(-1,0,0,0)}}}function t(){let B=!1,Ie=!1,te=null,de=null,De=null;return{setReversed:function(Ne){Ie=Ne},setTest:function(Ne){Ne?ve(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Ne){te!==Ne&&!B&&(n.depthMask(Ne),te=Ne)},setFunc:function(Ne){if(Ie&&(Ne=QM[Ne]),de!==Ne){switch(Ne){case fh:n.depthFunc(n.NEVER);break;case ph:n.depthFunc(n.ALWAYS);break;case mh:n.depthFunc(n.LESS);break;case gr:n.depthFunc(n.LEQUAL);break;case gh:n.depthFunc(n.EQUAL);break;case yh:n.depthFunc(n.GEQUAL);break;case xh:n.depthFunc(n.GREATER);break;case vh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}de=Ne}},setLocked:function(Ne){B=Ne},setClear:function(Ne){De!==Ne&&(n.clearDepth(Ne),De=Ne)},reset:function(){B=!1,te=null,de=null,De=null}}}function i(){let B=!1,Ie=null,te=null,de=null,De=null,Ne=null,st=null,bt=null,Xt=null;return{setTest:function(ot){B||(ot?ve(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(ot){Ie!==ot&&!B&&(n.stencilMask(ot),Ie=ot)},setFunc:function(ot,Ht,wn){(te!==ot||de!==Ht||De!==wn)&&(n.stencilFunc(ot,Ht,wn),te=ot,de=Ht,De=wn)},setOp:function(ot,Ht,wn){(Ne!==ot||st!==Ht||bt!==wn)&&(n.stencilOp(ot,Ht,wn),Ne=ot,st=Ht,bt=wn)},setLocked:function(ot){B=ot},setClear:function(ot){Xt!==ot&&(n.clearStencil(ot),Xt=ot)},reset:function(){B=!1,Ie=null,te=null,de=null,De=null,Ne=null,st=null,bt=null,Xt=null}}}let s=new e,r=new t,a=new i,o=new WeakMap,c=new WeakMap,l={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,b=null,_=null,v=null,R=null,T=new je(0,0,0),C=0,L=!1,Q=null,x=null,w=null,X=null,F=null,E=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),U=!1,N=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Z)[1]),U=N>=1):Z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),U=N>=2);let G=null,xe={},pe=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),se=new Pt().fromArray(pe),ke=new Pt().fromArray(W);function ne(B,Ie,te,de){let De=new Uint8Array(4),Ne=n.createTexture();n.bindTexture(B,Ne),n.texParameteri(B,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(B,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<te;st++)B===n.TEXTURE_3D||B===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,de,0,n.RGBA,n.UNSIGNED_BYTE,De):n.texImage2D(Ie+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,De);return Ne}let ue={};ue[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ve(n.DEPTH_TEST),r.setFunc(gr),fe(!1),ye(qf),ve(n.CULL_FACE),I(zi);function ve(B){l[B]!==!0&&(n.enable(B),l[B]=!0)}function Ee(B){l[B]!==!1&&(n.disable(B),l[B]=!1)}function qe(B,Ie){return h[B]!==Ie?(n.bindFramebuffer(B,Ie),h[B]=Ie,B===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ie),B===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function We(B,Ie){let te=d,de=!1;if(B){te=u.get(Ie),te===void 0&&(te=[],u.set(Ie,te));let De=B.textures;if(te.length!==De.length||te[0]!==n.COLOR_ATTACHMENT0){for(let Ne=0,st=De.length;Ne<st;Ne++)te[Ne]=n.COLOR_ATTACHMENT0+Ne;te.length=De.length,de=!0}}else te[0]!==n.BACK&&(te[0]=n.BACK,de=!0);de&&n.drawBuffers(te)}function He(B){return f!==B?(n.useProgram(B),f=B,!0):!1}let Ge={[ys]:n.FUNC_ADD,[Cy]:n.FUNC_SUBTRACT,[Ry]:n.FUNC_REVERSE_SUBTRACT};Ge[Py]=n.MIN,Ge[Iy]=n.MAX;let ae={[Ly]:n.ZERO,[Dy]:n.ONE,[ky]:n.SRC_COLOR,[uh]:n.SRC_ALPHA,[zy]:n.SRC_ALPHA_SATURATE,[Fy]:n.DST_COLOR,[Ny]:n.DST_ALPHA,[Uy]:n.ONE_MINUS_SRC_COLOR,[dh]:n.ONE_MINUS_SRC_ALPHA,[By]:n.ONE_MINUS_DST_COLOR,[Oy]:n.ONE_MINUS_DST_ALPHA,[Hy]:n.CONSTANT_COLOR,[Vy]:n.ONE_MINUS_CONSTANT_COLOR,[Gy]:n.CONSTANT_ALPHA,[Wy]:n.ONE_MINUS_CONSTANT_ALPHA};function I(B,Ie,te,de,De,Ne,st,bt,Xt,ot){if(B===zi){g===!0&&(Ee(n.BLEND),g=!1);return}if(g===!1&&(ve(n.BLEND),g=!0),B!==Ey){if(B!==y||ot!==L){if((m!==ys||_!==ys)&&(n.blendEquation(n.FUNC_ADD),m=ys,_=ys),ot)switch(B){case ur:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mr:n.blendFunc(n.ONE,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}else switch(B){case ur:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case mr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",B);break}p=null,b=null,v=null,R=null,T.set(0,0,0),C=0,y=B,L=ot}return}De=De||Ie,Ne=Ne||te,st=st||de,(Ie!==m||De!==_)&&(n.blendEquationSeparate(Ge[Ie],Ge[De]),m=Ie,_=De),(te!==p||de!==b||Ne!==v||st!==R)&&(n.blendFuncSeparate(ae[te],ae[de],ae[Ne],ae[st]),p=te,b=de,v=Ne,R=st),(bt.equals(T)===!1||Xt!==C)&&(n.blendColor(bt.r,bt.g,bt.b,Xt),T.copy(bt),C=Xt),y=B,L=!1}function le(B,Ie){B.side===Ot?Ee(n.CULL_FACE):ve(n.CULL_FACE);let te=B.side===tn;Ie&&(te=!te),fe(te),B.blending===ur&&B.transparent===!1?I(zi):I(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),r.setFunc(B.depthFunc),r.setTest(B.depthTest),r.setMask(B.depthWrite),s.setMask(B.colorWrite);let de=B.stencilWrite;a.setTest(de),de&&(a.setMask(B.stencilWriteMask),a.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),a.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Fe(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ve(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function fe(B){Q!==B&&(B?n.frontFace(n.CW):n.frontFace(n.CCW),Q=B)}function ye(B){B!==Ty?(ve(n.CULL_FACE),B!==x&&(B===qf?n.cullFace(n.BACK):B===Ay?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),x=B}function Ae(B){B!==w&&(U&&n.lineWidth(B),w=B)}function Fe(B,Ie,te){B?(ve(n.POLYGON_OFFSET_FILL),(X!==Ie||F!==te)&&(n.polygonOffset(Ie,te),X=Ie,F=te)):Ee(n.POLYGON_OFFSET_FILL)}function Re(B){B?ve(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function P(B){B===void 0&&(B=n.TEXTURE0+E-1),G!==B&&(n.activeTexture(B),G=B)}function M(B,Ie,te){te===void 0&&(G===null?te=n.TEXTURE0+E-1:te=G);let de=xe[te];de===void 0&&(de={type:void 0,texture:void 0},xe[te]=de),(de.type!==B||de.texture!==Ie)&&(G!==te&&(n.activeTexture(te),G=te),n.bindTexture(B,Ie||ue[B]),de.type=B,de.texture=Ie)}function Y(){let B=xe[G];B!==void 0&&B.type!==void 0&&(n.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ce(){try{n.compressedTexImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Ue(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function ie(){try{n.texStorage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function he(){try{n.texImage2D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(B){console.error("THREE.WebGLState:",B)}}function Se(B){se.equals(B)===!1&&(n.scissor(B.x,B.y,B.z,B.w),se.copy(B))}function me(B){ke.equals(B)===!1&&(n.viewport(B.x,B.y,B.z,B.w),ke.copy(B))}function Xe(B,Ie){let te=c.get(Ie);te===void 0&&(te=new WeakMap,c.set(Ie,te));let de=te.get(B);de===void 0&&(de=n.getUniformBlockIndex(Ie,B.name),te.set(B,de))}function Ye(B,Ie){let de=c.get(Ie).get(B);o.get(Ie)!==de&&(n.uniformBlockBinding(Ie,de,B.__bindingPointIndex),o.set(Ie,de))}function ct(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),l={},G=null,xe={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,b=null,_=null,v=null,R=null,T=new je(0,0,0),C=0,L=!1,Q=null,x=null,w=null,X=null,F=null,se.set(0,0,n.canvas.width,n.canvas.height),ke.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ve,disable:Ee,bindFramebuffer:qe,drawBuffers:We,useProgram:He,setBlending:I,setMaterial:le,setFlipSided:fe,setCullFace:ye,setLineWidth:Ae,setPolygonOffset:Fe,setScissorTest:Re,activeTexture:P,bindTexture:M,unbindTexture:Y,compressedTexImage2D:J,compressedTexImage3D:ce,texImage2D:he,texImage3D:Oe,updateUBOMapping:Xe,uniformBlockBinding:Ye,texStorage2D:we,texStorage3D:ie,texSubImage2D:oe,texSubImage3D:Be,compressedTexSubImage2D:Pe,compressedTexSubImage3D:Ue,scissor:Se,viewport:me,reset:ct}}function Bp(n,e,t,i){let s=tb(i);switch(t){case em:return n*e;case nm:return n*e;case im:return n*e*2;case Ec:return n*e/s.components*s.byteLength;case Ou:return n*e/s.components*s.byteLength;case sm:return n*e*2/s.components*s.byteLength;case Fu:return n*e*2/s.components*s.byteLength;case tm:return n*e*3/s.components*s.byteLength;case Gn:return n*e*4/s.components*s.byteLength;case Bu:return n*e*4/s.components*s.byteLength;case Ho:case Vo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Sh:case Ah:return Math.max(n,16)*Math.max(e,8)/4;case wh:case Th:return Math.max(n,8)*Math.max(e,8)/2;case Eh:case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Rh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Lh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case kh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Nh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Oh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case zh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Hh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Vh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Gh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case $o:case Wh:case $h:return Math.ceil(n/4)*Math.ceil(e/4)*16;case rm:case qh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Xh:case Yh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tb(n){switch(n){case gi:case Jp:return{byteLength:1,components:1};case Sa:case jp:case ka:return{byteLength:2,components:1};case Uu:case Nu:return{byteLength:2,components:4};case Ms:case ku:case fi:return{byteLength:4,components:1};case Qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function nb(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Me,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):Qo("canvas")}function y(P,M,Y){let J=1,ce=Re(P);if((ce.width>Y||ce.height>Y)&&(J=Y/Math.max(ce.width,ce.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let oe=Math.floor(J*ce.width),Be=Math.floor(J*ce.height);u===void 0&&(u=g(oe,Be));let Pe=M?g(oe,Be):u;return Pe.width=oe,Pe.height=Be,Pe.getContext("2d").drawImage(P,0,0,oe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ce.width+"x"+ce.height+") to ("+oe+"x"+Be+")."),Pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ce.width+"x"+ce.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==en&&P.minFilter!==Vn}function p(P){n.generateMipmap(P)}function b(P,M,Y,J,ce=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=M;if(M===n.RED&&(Y===n.FLOAT&&(oe=n.R32F),Y===n.HALF_FLOAT&&(oe=n.R16F),Y===n.UNSIGNED_BYTE&&(oe=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(oe=n.R8UI),Y===n.UNSIGNED_SHORT&&(oe=n.R16UI),Y===n.UNSIGNED_INT&&(oe=n.R32UI),Y===n.BYTE&&(oe=n.R8I),Y===n.SHORT&&(oe=n.R16I),Y===n.INT&&(oe=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(oe=n.RG32F),Y===n.HALF_FLOAT&&(oe=n.RG16F),Y===n.UNSIGNED_BYTE&&(oe=n.RG8)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(oe=n.RG8UI),Y===n.UNSIGNED_SHORT&&(oe=n.RG16UI),Y===n.UNSIGNED_INT&&(oe=n.RG32UI),Y===n.BYTE&&(oe=n.RG8I),Y===n.SHORT&&(oe=n.RG16I),Y===n.INT&&(oe=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),Y===n.UNSIGNED_INT&&(oe=n.RGB32UI),Y===n.BYTE&&(oe=n.RGB8I),Y===n.SHORT&&(oe=n.RGB16I),Y===n.INT&&(oe=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),Y===n.UNSIGNED_INT&&(oe=n.RGBA32UI),Y===n.BYTE&&(oe=n.RGBA8I),Y===n.SHORT&&(oe=n.RGBA16I),Y===n.INT&&(oe=n.RGBA32I)),M===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),M===n.RGBA){let Be=ce?Yo:ut.getTransfer(J);Y===n.FLOAT&&(oe=n.RGBA32F),Y===n.HALF_FLOAT&&(oe=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(oe=Be===yt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(P,M){let Y;return P?M===null||M===Ms||M===vr?Y=n.DEPTH24_STENCIL8:M===fi?Y=n.DEPTH32F_STENCIL8:M===Sa&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ms||M===vr?Y=n.DEPTH_COMPONENT24:M===fi?Y=n.DEPTH_COMPONENT32F:M===Sa&&(Y=n.DEPTH_COMPONENT16),Y}function v(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==en&&P.minFilter!==Vn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function R(P){let M=P.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&h.delete(M)}function T(P){let M=P.target;M.removeEventListener("dispose",T),Q(M)}function C(P){let M=i.get(P);if(M.__webglInit===void 0)return;let Y=P.source,J=d.get(Y);if(J){let ce=J[M.__cacheKey];ce.usedTimes--,ce.usedTimes===0&&L(P),Object.keys(J).length===0&&d.delete(Y)}i.remove(P)}function L(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let Y=P.source,J=d.get(Y);delete J[M.__cacheKey],a.memory.textures--}function Q(P){let M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let ce=0;ce<M.__webglFramebuffer[J].length;ce++)n.deleteFramebuffer(M.__webglFramebuffer[J][ce]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=P.textures;for(let J=0,ce=Y.length;J<ce;J++){let oe=i.get(Y[J]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(Y[J])}i.remove(P)}let x=0;function w(){x=0}function X(){let P=x;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),x+=1,P}function F(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function E(P,M){let Y=i.get(P);if(P.isVideoTexture&&Ae(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ke(Y,P,M);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function U(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ke(Y,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function N(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ke(Y,P,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function Z(P,M){let Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ne(Y,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let G={[wa]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[bh]:n.MIRRORED_REPEAT},xe={[en]:n.NEAREST,[ex]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[Vn]:n.LINEAR,[Rl]:n.LINEAR_MIPMAP_NEAREST,[_s]:n.LINEAR_MIPMAP_LINEAR},pe={[sx]:n.NEVER,[hx]:n.ALWAYS,[rx]:n.LESS,[am]:n.LEQUAL,[ax]:n.EQUAL,[lx]:n.GEQUAL,[ox]:n.GREATER,[cx]:n.NOTEQUAL};function W(P,M){if(M.type===fi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Vn||M.magFilter===Rl||M.magFilter===fo||M.magFilter===_s||M.minFilter===Vn||M.minFilter===Rl||M.minFilter===fo||M.minFilter===_s)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,G[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,G[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,G[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,xe[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===en||M.minFilter!==fo&&M.minFilter!==_s||M.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(P,M){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",R));let J=M.source,ce=d.get(J);ce===void 0&&(ce={},d.set(J,ce));let oe=F(M);if(oe!==P.__cacheKey){ce[oe]===void 0&&(ce[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ce[oe].usedTimes++;let Be=ce[P.__cacheKey];Be!==void 0&&(ce[P.__cacheKey].usedTimes--,Be.usedTimes===0&&L(M)),P.__cacheKey=oe,P.__webglTexture=ce[oe].texture}return Y}function ke(P,M,Y){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);let ce=se(P,M),oe=M.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+Y);let Be=i.get(oe);if(oe.version!==Be.__version||ce===!0){t.activeTexture(n.TEXTURE0+Y);let Pe=ut.getPrimaries(ut.workingColorSpace),Ue=M.colorSpace===Fi?null:ut.getPrimaries(M.colorSpace),we=M.colorSpace===Fi||Pe===Ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ie=y(M.image,!1,s.maxTextureSize);ie=Fe(M,ie);let he=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),Se=b(M.internalFormat,he,Oe,M.colorSpace,M.isVideoTexture);W(J,M);let me,Xe=M.mipmaps,Ye=M.isVideoTexture!==!0,ct=Be.__version===void 0||ce===!0,B=oe.dataReady,Ie=v(M,ie);if(M.isDepthTexture)Se=_(M.format===_r,M.type),ct&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Se,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Se,ie.width,ie.height,0,he,Oe,null));else if(M.isDataTexture)if(Xe.length>0){Ye&&ct&&t.texStorage2D(n.TEXTURE_2D,Ie,Se,Xe[0].width,Xe[0].height);for(let te=0,de=Xe.length;te<de;te++)me=Xe[te],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,he,Oe,me.data):t.texImage2D(n.TEXTURE_2D,te,Se,me.width,me.height,0,he,Oe,me.data);M.generateMipmaps=!1}else Ye?(ct&&t.texStorage2D(n.TEXTURE_2D,Ie,Se,ie.width,ie.height),B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,he,Oe,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ie.width,ie.height,0,he,Oe,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Se,Xe[0].width,Xe[0].height,ie.depth);for(let te=0,de=Xe.length;te<de;te++)if(me=Xe[te],M.format!==Gn)if(he!==null)if(Ye){if(B)if(M.layerUpdates.size>0){let De=Bp(me.width,me.height,M.format,M.type);for(let Ne of M.layerUpdates){let st=me.data.subarray(Ne*De/me.data.BYTES_PER_ELEMENT,(Ne+1)*De/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Ne,me.width,me.height,1,he,st,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ie.depth,he,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,Se,me.width,me.height,ie.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?B&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,me.width,me.height,ie.depth,he,Oe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,Se,me.width,me.height,ie.depth,0,he,Oe,me.data)}else{Ye&&ct&&t.texStorage2D(n.TEXTURE_2D,Ie,Se,Xe[0].width,Xe[0].height);for(let te=0,de=Xe.length;te<de;te++)me=Xe[te],M.format!==Gn?he!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(n.TEXTURE_2D,te,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,me.width,me.height,he,Oe,me.data):t.texImage2D(n.TEXTURE_2D,te,Se,me.width,me.height,0,he,Oe,me.data)}else if(M.isDataArrayTexture)if(Ye){if(ct&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Se,ie.width,ie.height,ie.depth),B)if(M.layerUpdates.size>0){let te=Bp(ie.width,ie.height,M.format,M.type);for(let de of M.layerUpdates){let De=ie.data.subarray(de*te/ie.data.BYTES_PER_ELEMENT,(de+1)*te/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,de,ie.width,ie.height,1,he,Oe,De)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,he,Oe,ie.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ie.width,ie.height,ie.depth,0,he,Oe,ie.data);else if(M.isData3DTexture)Ye?(ct&&t.texStorage3D(n.TEXTURE_3D,Ie,Se,ie.width,ie.height,ie.depth),B&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,he,Oe,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ie.width,ie.height,ie.depth,0,he,Oe,ie.data);else if(M.isFramebufferTexture){if(ct)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ie,Se,ie.width,ie.height);else{let te=ie.width,de=ie.height;for(let De=0;De<Ie;De++)t.texImage2D(n.TEXTURE_2D,De,Se,te,de,0,he,Oe,null),te>>=1,de>>=1}}else if(Xe.length>0){if(Ye&&ct){let te=Re(Xe[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Se,te.width,te.height)}for(let te=0,de=Xe.length;te<de;te++)me=Xe[te],Ye?B&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,he,Oe,me):t.texImage2D(n.TEXTURE_2D,te,Se,he,Oe,me);M.generateMipmaps=!1}else if(Ye){if(ct){let te=Re(ie);t.texStorage2D(n.TEXTURE_2D,Ie,Se,te.width,te.height)}B&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Oe,ie)}else t.texImage2D(n.TEXTURE_2D,0,Se,he,Oe,ie);m(M)&&p(J),Be.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,Y){if(M.image.length!==6)return;let J=se(P,M),ce=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);let oe=i.get(ce);if(ce.version!==oe.__version||J===!0){t.activeTexture(n.TEXTURE0+Y);let Be=ut.getPrimaries(ut.workingColorSpace),Pe=M.colorSpace===Fi?null:ut.getPrimaries(M.colorSpace),Ue=M.colorSpace===Fi||Be===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ue);let we=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,he=[];for(let de=0;de<6;de++)!we&&!ie?he[de]=y(M.image[de],!0,s.maxCubemapSize):he[de]=ie?M.image[de].image:M.image[de],he[de]=Fe(M,he[de]);let Oe=he[0],Se=r.convert(M.format,M.colorSpace),me=r.convert(M.type),Xe=b(M.internalFormat,Se,me,M.colorSpace),Ye=M.isVideoTexture!==!0,ct=oe.__version===void 0||J===!0,B=ce.dataReady,Ie=v(M,Oe);W(n.TEXTURE_CUBE_MAP,M);let te;if(we){Ye&&ct&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Xe,Oe.width,Oe.height);for(let de=0;de<6;de++){te=he[de].mipmaps;for(let De=0;De<te.length;De++){let Ne=te[De];M.format!==Gn?Se!==null?Ye?B&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,Ne.width,Ne.height,Se,Ne.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,Xe,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,0,0,Ne.width,Ne.height,Se,me,Ne.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De,Xe,Ne.width,Ne.height,0,Se,me,Ne.data)}}}else{if(te=M.mipmaps,Ye&&ct){te.length>0&&Ie++;let de=Re(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,Xe,de.width,de.height)}for(let de=0;de<6;de++)if(ie){Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,he[de].width,he[de].height,Se,me,he[de].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,he[de].width,he[de].height,0,Se,me,he[de].data);for(let De=0;De<te.length;De++){let st=te[De].image[de].image;Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,st.width,st.height,Se,me,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,Xe,st.width,st.height,0,Se,me,st.data)}}else{Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,Se,me,he[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,Xe,Se,me,he[de]);for(let De=0;De<te.length;De++){let Ne=te[De];Ye?B&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,0,0,Se,me,Ne.image[de]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+de,De+1,Xe,Se,me,Ne.image[de])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),oe.__version=ce.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ue(P,M,Y,J,ce,oe){let Be=r.convert(Y.format,Y.colorSpace),Pe=r.convert(Y.type),Ue=b(Y.internalFormat,Be,Pe,Y.colorSpace);if(!i.get(M).__hasExternalTextures){let ie=Math.max(1,M.width>>oe),he=Math.max(1,M.height>>oe);ce===n.TEXTURE_3D||ce===n.TEXTURE_2D_ARRAY?t.texImage3D(ce,oe,Ue,ie,he,M.depth,0,Be,Pe,null):t.texImage2D(ce,oe,Ue,ie,he,0,Be,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ce,i.get(Y).__webglTexture,0,fe(M)):(ce===n.TEXTURE_2D||ce>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ce<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ce,i.get(Y).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(P,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){let J=M.depthTexture,ce=J&&J.isDepthTexture?J.type:null,oe=_(M.stencilBuffer,ce),Be=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=fe(M);ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,oe,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,oe,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,oe,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,P)}else{let J=M.textures;for(let ce=0;ce<J.length;ce++){let oe=J[ce],Be=r.convert(oe.format,oe.colorSpace),Pe=r.convert(oe.type),Ue=b(oe.internalFormat,Be,Pe,oe.colorSpace),we=fe(M);Y&&ye(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,Ue,M.width,M.height):ye(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,Ue,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Ue,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),E(M.depthTexture,0);let J=i.get(M.depthTexture).__webglTexture,ce=fe(M);if(M.depthTexture.format===dr)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(M.depthTexture.format===_r)ye(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,ce):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function qe(P){let M=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let ce=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",ce)};J.addEventListener("dispose",ce),M.__depthDisposeCallback=ce}M.__boundDepthTexture=J}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ee(M.__webglFramebuffer,P)}else if(Y){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),ve(M.__webglDepthbuffer[J],P,!1);else{let ce=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,ce,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ve(M.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ce=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ce),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,ce)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,M,Y){let J=i.get(P);M!==void 0&&ue(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&qe(P)}function He(P){let M=P.texture,Y=i.get(P),J=i.get(M);P.addEventListener("dispose",T);let ce=P.textures,oe=P.isWebGLCubeRenderTarget===!0,Be=ce.length>1;if(Be||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,a.memory.textures++),oe){Y.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Pe]=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)Y.__webglFramebuffer[Pe][Ue]=n.createFramebuffer()}else Y.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)Y.__webglFramebuffer[Pe]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Pe=0,Ue=ce.length;Pe<Ue;Pe++){let we=i.get(ce[Pe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ye(P)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Pe=0;Pe<ce.length;Pe++){let Ue=ce[Pe];Y.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Pe]);let we=r.convert(Ue.format,Ue.colorSpace),ie=r.convert(Ue.type),he=b(Ue.internalFormat,we,ie,Ue.colorSpace,P.isXRRenderTarget===!0),Oe=fe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,he,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),W(n.TEXTURE_CUBE_MAP,M);for(let Pe=0;Pe<6;Pe++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)ue(Y.__webglFramebuffer[Pe][Ue],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,Ue);else ue(Y.__webglFramebuffer[Pe],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Pe=0,Ue=ce.length;Pe<Ue;Pe++){let we=ce[Pe],ie=i.get(we);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),W(n.TEXTURE_2D,we),ue(Y.__webglFramebuffer,P,we,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,J.__webglTexture),W(Pe,M),M.mipmaps&&M.mipmaps.length>0)for(let Ue=0;Ue<M.mipmaps.length;Ue++)ue(Y.__webglFramebuffer[Ue],P,M,n.COLOR_ATTACHMENT0,Pe,Ue);else ue(Y.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,Pe,0);m(M)&&p(Pe),t.unbindTexture()}P.depthBuffer&&qe(P)}function Ge(P){let M=P.textures;for(let Y=0,J=M.length;Y<J;Y++){let ce=M[Y];if(m(ce)){let oe=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Be=i.get(ce).__webglTexture;t.bindTexture(oe,Be),p(oe),t.unbindTexture()}}}let ae=[],I=[];function le(P){if(P.samples>0){if(ye(P)===!1){let M=P.textures,Y=P.width,J=P.height,ce=n.COLOR_BUFFER_BIT,oe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(P),Pe=M.length>1;if(Pe)for(let Ue=0;Ue<M.length;Ue++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ue=0;Ue<M.length;Ue++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ce|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ce|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);let we=i.get(M[Ue]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,Y,J,0,0,Y,J,ce,n.NEAREST),c===!0&&(ae.length=0,I.length=0,ae.push(n.COLOR_ATTACHMENT0+Ue),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ae.push(oe),I.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let Ue=0;Ue<M.length;Ue++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.RENDERBUFFER,Be.__webglColorRenderbuffer[Ue]);let we=i.get(M[Ue]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ue,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&c){let M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function fe(P){return Math.min(s.maxSamples,P.samples)}function ye(P){let M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function Fe(P,M){let Y=P.colorSpace,J=P.format,ce=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||Y!==Xi&&Y!==Fi&&(ut.getTransfer(Y)===yt?(J!==Gn||ce!==gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(l.width=P.naturalWidth||P.width,l.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(l.width=P.displayWidth,l.height=P.displayHeight):(l.width=P.width,l.height=P.height),l}this.allocateTextureUnit=X,this.resetTextureUnits=w,this.setTexture2D=E,this.setTexture2DArray=U,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=We,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=ye}function ib(n,e){function t(i,s=Fi){let r,a=ut.getTransfer(s);if(i===gi)return n.UNSIGNED_BYTE;if(i===Uu)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Nu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jp)return n.BYTE;if(i===jp)return n.SHORT;if(i===Sa)return n.UNSIGNED_SHORT;if(i===ku)return n.INT;if(i===Ms)return n.UNSIGNED_INT;if(i===fi)return n.FLOAT;if(i===ka)return n.HALF_FLOAT;if(i===em)return n.ALPHA;if(i===tm)return n.RGB;if(i===Gn)return n.RGBA;if(i===nm)return n.LUMINANCE;if(i===im)return n.LUMINANCE_ALPHA;if(i===dr)return n.DEPTH_COMPONENT;if(i===_r)return n.DEPTH_STENCIL;if(i===Ec)return n.RED;if(i===Ou)return n.RED_INTEGER;if(i===sm)return n.RG;if(i===Fu)return n.RG_INTEGER;if(i===Bu)return n.RGBA_INTEGER;if(i===Ho||i===Vo||i===Go||i===Wo)if(a===yt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ho)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ho)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Vo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wh||i===Sh||i===Th||i===Ah)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Th)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ah)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Eh||i===Ch||i===Rh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Eh||i===Ch)return a===yt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Rh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ph||i===Ih||i===Lh||i===Dh||i===kh||i===Uh||i===Nh||i===Oh||i===Fh||i===Bh||i===zh||i===Hh||i===Vh||i===Gh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ph)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ih)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Lh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Dh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Uh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Nh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Oh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Fh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Bh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===zh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Vh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Gh)return a===yt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$o||i===Wh||i===$h)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===$o)return a===yt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Wh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===$h)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===rm||i===qh||i===Xh||i===Yh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Xh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Yh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var uu=class extends Qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Je=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},sb={type:"move"},va=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(l,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(sb)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Je;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},rb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ab=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Ln({vertexShader:rb,fragmentShader:ab,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new vi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fu=class extends Gi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,y=new du,m=t.getContextAttributes(),p=null,b=null,_=[],v=[],R=new Me,T=null,C=new Qt;C.layers.enable(1),C.viewport=new Pt;let L=new Qt;L.layers.enable(2),L.viewport=new Pt;let Q=[C,L],x=new uu;x.layers.enable(1),x.layers.enable(2);let w=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=_[ne];return ue===void 0&&(ue=new va,_[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=_[ne];return ue===void 0&&(ue=new va,_[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=_[ne];return ue===void 0&&(ue=new va,_[ne]=ue),ue.getHandSpace()};function F(ne){let ue=v.indexOf(ne.inputSource);if(ue===-1)return;let ve=_[ue];ve!==void 0&&(ve.update(ne.inputSource,ne.frame,l||a),ve.dispatchEvent({type:ne.type,data:ne.inputSource}))}function E(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",E),s.removeEventListener("inputsourceschange",U);for(let ne=0;ne<_.length;ne++){let ue=v[ne];ue!==null&&(v[ne]=null,_[ne].disconnect(ue))}w=null,X=null,y.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,b=null,ke.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(ne){l=ne},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",E),s.addEventListener("inputsourceschange",U),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(R),s.renderState.layers===void 0){let ue={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new yi(f.framebufferWidth,f.framebufferHeight,{format:Gn,type:gi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ue=null,ve=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=m.stencil?_r:dr,ve=m.stencil?vr:Ms);let qe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(qe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new yi(d.textureWidth,d.textureHeight,{format:Gn,type:gi,depthTexture:new lc(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ke.setContext(s),ke.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function U(ne){for(let ue=0;ue<ne.removed.length;ue++){let ve=ne.removed[ue],Ee=v.indexOf(ve);Ee>=0&&(v[Ee]=null,_[Ee].disconnect(ve))}for(let ue=0;ue<ne.added.length;ue++){let ve=ne.added[ue],Ee=v.indexOf(ve);if(Ee===-1){for(let We=0;We<_.length;We++)if(We>=v.length){v.push(ve),Ee=We;break}else if(v[We]===null){v[We]=ve,Ee=We;break}if(Ee===-1)break}let qe=_[Ee];qe&&qe.connect(ve)}}let N=new H,Z=new H;function G(ne,ue,ve){N.setFromMatrixPosition(ue.matrixWorld),Z.setFromMatrixPosition(ve.matrixWorld);let Ee=N.distanceTo(Z),qe=ue.projectionMatrix.elements,We=ve.projectionMatrix.elements,He=qe[14]/(qe[10]-1),Ge=qe[14]/(qe[10]+1),ae=(qe[9]+1)/qe[5],I=(qe[9]-1)/qe[5],le=(qe[8]-1)/qe[0],fe=(We[8]+1)/We[0],ye=He*le,Ae=He*fe,Fe=Ee/(-le+fe),Re=Fe*-le;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Re),ne.translateZ(Fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),qe[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{let P=He+Fe,M=Ge+Fe,Y=ye-Re,J=Ae+(Ee-Re),ce=ae*Ge/M*P,oe=I*Ge/M*P;ne.projectionMatrix.makePerspective(Y,J,ce,oe,P,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function xe(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let ue=ne.near,ve=ne.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(ve=y.depthFar)),x.near=L.near=C.near=ue,x.far=L.far=C.far=ve,(w!==x.near||X!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,X=x.far);let Ee=ne.parent,qe=x.cameras;xe(x,Ee);for(let We=0;We<qe.length;We++)xe(qe[We],Ee);qe.length===2?G(x,C,L):x.projectionMatrix.copy(C.projectionMatrix),pe(ne,x,Ee)};function pe(ne,ue,ve){ve===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(ve.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=jo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(ne){c=ne,d!==null&&(d.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let W=null;function se(ne,ue){if(h=ue.getViewerPose(l||a),g=ue,h!==null){let ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Ee=!1;ve.length!==x.cameras.length&&(x.cameras.length=0,Ee=!0);for(let We=0;We<ve.length;We++){let He=ve[We],Ge=null;if(f!==null)Ge=f.getViewport(He);else{let I=u.getViewSubImage(d,He);Ge=I.viewport,We===0&&(e.setRenderTargetTextures(b,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(b))}let ae=Q[We];ae===void 0&&(ae=new Qt,ae.layers.enable(We),ae.viewport=new Pt,Q[We]=ae),ae.matrix.fromArray(He.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(He.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),We===0&&(x.matrix.copy(ae.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ee===!0&&x.cameras.push(ae)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){let We=u.getDepthInformation(ve[0]);We&&We.isValid&&We.texture&&y.init(e,We,s.renderState)}}for(let ve=0;ve<_.length;ve++){let Ee=v[ve],qe=_[ve];Ee!==null&&qe!==void 0&&qe.update(Ee,ue,l||a)}W&&W(ne,ue),ue.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ue}),g=null}let ke=new hm;ke.setAnimationLoop(se),this.setAnimationLoop=function(ne){W=ne},this.dispose=function(){}}},ms=new ei,ob=new Ct;function cb(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,lm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,_,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,_):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),_=b.envMap,v=b.envMapRotation;_&&(m.envMap.value=_,ms.copy(v),ms.x*=-1,ms.y*=-1,ms.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),m.envMapRotation.value.setFromMatrix4(ob.makeRotationFromEuler(ms)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function lb(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,_){let v=_.program;i.uniformBlockBinding(b,v)}function l(b,_){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));let R=_.program;i.updateUBOMapping(b,R);let T=e.render.frame;r[b.id]!==T&&(d(b),r[b.id]=T)}function h(b){let _=u();b.__bindingPointIndex=_;let v=n.createBuffer(),R=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,R,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let _=s[b.id],v=b.uniforms,R=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,C=v.length;T<C;T++){let L=Array.isArray(v[T])?v[T]:[v[T]];for(let Q=0,x=L.length;Q<x;Q++){let w=L[Q];if(f(w,T,Q,R)===!0){let X=w.__offset,F=Array.isArray(w.value)?w.value:[w.value],E=0;for(let U=0;U<F.length;U++){let N=F[U],Z=y(N);typeof N=="number"||typeof N=="boolean"?(w.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,X+E,w.__data)):N.isMatrix3?(w.__data[0]=N.elements[0],w.__data[1]=N.elements[1],w.__data[2]=N.elements[2],w.__data[3]=0,w.__data[4]=N.elements[3],w.__data[5]=N.elements[4],w.__data[6]=N.elements[5],w.__data[7]=0,w.__data[8]=N.elements[6],w.__data[9]=N.elements[7],w.__data[10]=N.elements[8],w.__data[11]=0):(N.toArray(w.__data,E),E+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,X,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,_,v,R){let T=b.value,C=_+"_"+v;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{let L=R[C];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return R[C]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){let _=b.uniforms,v=0,R=16;for(let C=0,L=_.length;C<L;C++){let Q=Array.isArray(_[C])?_[C]:[_[C]];for(let x=0,w=Q.length;x<w;x++){let X=Q[x],F=Array.isArray(X.value)?X.value:[X.value];for(let E=0,U=F.length;E<U;E++){let N=F[E],Z=y(N),G=v%R,xe=G%Z.boundary,pe=G+xe;v+=xe,pe!==0&&R-pe<Z.storage&&(v+=R-pe),X.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=v,v+=Z.storage}}}let T=v%R;return T>0&&(v+=R-T),b.__size=v,b.__cache={},this}function y(b){let _={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(_.boundary=4,_.storage=4):b.isVector2?(_.boundary=8,_.storage=8):b.isVector3||b.isColor?(_.boundary=16,_.storage=12):b.isVector4?(_.boundary=16,_.storage=16):b.isMatrix3?(_.boundary=48,_.storage=48):b.isMatrix4?(_.boundary=64,_.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),_}function m(b){let _=b.target;_.removeEventListener("dispose",m);let v=a.indexOf(_.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let b in s)n.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:c,update:l,dispose:p}}var hc=class{constructor(e={}){let{canvas:t=dx(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=Hi,this.toneMappingExposure=1;let _=this,v=!1,R=0,T=0,C=null,L=-1,Q=null,x=new Pt,w=new Pt,X=null,F=new je(0),E=0,U=t.width,N=t.height,Z=1,G=null,xe=null,pe=new Pt(0,0,U,N),W=new Pt(0,0,U,N),se=!1,ke=new Aa,ne=!1,ue=!1,ve=new Ct,Ee=new Ct,qe=new H,We=new Pt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function ae(){return C===null?Z:1}let I=i;function le(A,$){return t.getContext(A,$)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",de,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),I===null){let $="webgl2";if(I=le($,A),I===null)throw le($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let fe,ye,Ae,Fe,Re,P,M,Y,J,ce,oe,Be,Pe,Ue,we,ie,he,Oe,Se,me,Xe,Ye,ct,B;function Ie(){fe=new T1(I),fe.init(),Ye=new ib(I,fe),ye=new v1(I,fe,e,Ye),Ae=new eb(I),ye.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Fe=new C1(I),Re=new HM,P=new nb(I,fe,Ae,Re,ye,Ye,Fe),M=new M1(_),Y=new S1(_),J=new Ux(I),ct=new y1(I,J),ce=new A1(I,J,Fe,ct),oe=new P1(I,ce,J,Fe),Se=new R1(I,ye,P),ie=new _1(Re),Be=new zM(_,M,Y,fe,ye,ct,ie),Pe=new cb(_,Re),Ue=new GM,we=new ZM(fe),Oe=new g1(_,M,Y,Ae,oe,d,c),he=new jM(_,oe,ye),B=new lb(I,Fe,ye,Ae),me=new x1(I,fe,Fe),Xe=new E1(I,fe,Fe),Fe.programs=Be.programs,_.capabilities=ye,_.extensions=fe,_.properties=Re,_.renderLists=Ue,_.shadowMap=he,_.state=Ae,_.info=Fe}Ie();let te=new fu(_,I);this.xr=te,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=fe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=fe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(U,N,!1))},this.getSize=function(A){return A.set(U,N)},this.setSize=function(A,$,j=!0){if(te.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,N=$,t.width=Math.floor(A*Z),t.height=Math.floor($*Z),j===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(U*Z,N*Z).floor()},this.setDrawingBufferSize=function(A,$,j){U=A,N=$,Z=j,t.width=Math.floor(A*j),t.height=Math.floor($*j),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(x)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,$,j,ee){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,$,j,ee),Ae.viewport(x.copy(pe).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,$,j,ee){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,$,j,ee),Ae.scissor(w.copy(W).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){Ae.setScissorTest(se=A)},this.setOpaqueSort=function(A){G=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,$=!0,j=!0){let ee=0;if(A){let S=!1;if(C!==null){let D=C.texture.format;S=D===Bu||D===Fu||D===Ou}if(S){let D=C.texture.type,q=D===gi||D===Ms||D===Sa||D===vr||D===Uu||D===Nu,O=Oe.getClearColor(),z=Oe.getClearAlpha(),k=O.r,re=O.g,K=O.b;q?(f[0]=k,f[1]=re,f[2]=K,f[3]=z,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=k,g[1]=re,g[2]=K,g[3]=z,I.clearBufferiv(I.COLOR,0,g))}else ee|=I.COLOR_BUFFER_BIT}$&&(ee|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(ee|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",de,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Ue.dispose(),we.dispose(),Re.dispose(),M.dispose(),Y.dispose(),oe.dispose(),ct.dispose(),B.dispose(),Be.dispose(),te.dispose(),te.removeEventListener("sessionstart",ii),te.removeEventListener("sessionend",Cr),hn.stop()};function de(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let A=Fe.autoReset,$=he.enabled,j=he.autoUpdate,ee=he.needsUpdate,S=he.type;Ie(),Fe.autoReset=A,he.enabled=$,he.autoUpdate=j,he.needsUpdate=ee,he.type=S}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function st(A){let $=A.target;$.removeEventListener("dispose",st),bt($)}function bt(A){Xt(A),Re.remove(A)}function Xt(A){let $=Re.get(A).programs;$!==void 0&&($.forEach(function(j){Be.releaseProgram(j)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,j,ee,S,D){$===null&&($=He);let q=S.isMesh&&S.matrixWorld.determinant()<0,O=Ba(A,$,j,ee,S);Ae.setMaterial(ee,q);let z=j.index,k=1;if(ee.wireframe===!0){if(z=ce.getWireframeAttribute(j),z===void 0)return;k=2}let re=j.drawRange,K=j.attributes.position,_e=re.start*k,$e=(re.start+re.count)*k;D!==null&&(_e=Math.max(_e,D.start*k),$e=Math.min($e,(D.start+D.count)*k)),z!==null?(_e=Math.max(_e,0),$e=Math.min($e,z.count)):K!=null&&(_e=Math.max(_e,0),$e=Math.min($e,K.count));let tt=$e-_e;if(tt<0||tt===1/0)return;ct.setup(S,ee,O,j,z);let Yt,nt=me;if(z!==null&&(Yt=J.get(z),nt=Xe,nt.setIndex(Yt)),S.isMesh)ee.wireframe===!0?(Ae.setLineWidth(ee.wireframeLinewidth*ae()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(S.isLine){let ze=ee.linewidth;ze===void 0&&(ze=1),Ae.setLineWidth(ze*ae()),S.isLineSegments?nt.setMode(I.LINES):S.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else S.isPoints?nt.setMode(I.POINTS):S.isSprite&&nt.setMode(I.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)nt.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))nt.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{let ze=S._multiDrawStarts,xt=S._multiDrawCounts,it=S._multiDrawCount,un=z?J.get(z).bytesPerElement:1,kn=Re.get(ee).currentProgram.getUniforms();for(let Zt=0;Zt<it;Zt++)kn.setValue(I,"_gl_DrawID",Zt),nt.render(ze[Zt]/un,xt[Zt])}else if(S.isInstancedMesh)nt.renderInstances(_e,tt,S.count);else if(j.isInstancedBufferGeometry){let ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,xt=Math.min(j.instanceCount,ze);nt.renderInstances(_e,tt,xt)}else nt.render(_e,tt)};function ot(A,$,j){A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1?(A.side=tn,A.needsUpdate=!0,Ki(A,$,j),A.side=Vi,A.needsUpdate=!0,Ki(A,$,j),A.side=Ot):Ki(A,$,j)}this.compile=function(A,$,j=null){j===null&&(j=A),m=we.get(j),m.init($),b.push(m),j.traverseVisible(function(S){S.isLight&&S.layers.test($.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),A!==j&&A.traverseVisible(function(S){S.isLight&&S.layers.test($.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),m.setupLights();let ee=new Set;return A.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;let D=S.material;if(D)if(Array.isArray(D))for(let q=0;q<D.length;q++){let O=D[q];ot(O,j,S),ee.add(O)}else ot(D,j,S),ee.add(D)}),b.pop(),m=null,ee},this.compileAsync=function(A,$,j=null){let ee=this.compile(A,$,j);return new Promise(S=>{function D(){if(ee.forEach(function(q){Re.get(q).currentProgram.isReady()&&ee.delete(q)}),ee.size===0){S(A);return}setTimeout(D,10)}fe.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let Ht=null;function wn(A){Ht&&Ht(A)}function ii(){hn.stop()}function Cr(){hn.start()}let hn=new hm;hn.setAnimationLoop(wn),typeof self<"u"&&hn.setContext(self),this.setAnimationLoop=function(A){Ht=A,te.setAnimationLoop(A),A===null?hn.stop():hn.start()},te.addEventListener("sessionstart",ii),te.addEventListener("sessionend",Cr),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),te.enabled===!0&&te.isPresenting===!0&&(te.cameraAutoUpdate===!0&&te.updateCamera($),$=te.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,$,C),m=we.get(A,b.length),m.init($),b.push(m),Ee.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),ke.setFromProjectionMatrix(Ee),ue=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,ue),y=Ue.get(A,p.length),y.init(),p.push(y),te.enabled===!0&&te.isPresenting===!0){let D=_.xr.getDepthSensingMesh();D!==null&&$n(D,$,-1/0,_.sortObjects)}$n(A,$,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(G,xe),Ge=te.enabled===!1||te.isPresenting===!1||te.hasDepthSensing()===!1,Ge&&Oe.addToRenderList(y,A),this.info.render.frame++,ne===!0&&ie.beginShadows();let j=m.state.shadowsArray;he.render(j,A,$),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();let ee=y.opaque,S=y.transmissive;if(m.setupLights(),$.isArrayCamera){let D=$.cameras;if(S.length>0)for(let q=0,O=D.length;q<O;q++){let z=D[q];Ls(ee,S,A,z)}Ge&&Oe.render(A);for(let q=0,O=D.length;q<O;q++){let z=D[q];Rr(y,A,z,z.viewport)}}else S.length>0&&Ls(ee,S,A,$),Ge&&Oe.render(A),Rr(y,A,$);C!==null&&(P.updateMultisampleRenderTarget(C),P.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(_,A,$),ct.resetDefaultState(),L=-1,Q=null,b.pop(),b.length>0?(m=b[b.length-1],ne===!0&&ie.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function $n(A,$,j,ee){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ke.intersectsSprite(A)){ee&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);let q=oe.update(A),O=A.material;O.visible&&y.push(A,q,O,j,We.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ke.intersectsObject(A))){let q=oe.update(A),O=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(q.boundingSphere===null&&q.computeBoundingSphere(),We.copy(q.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(O)){let z=q.groups;for(let k=0,re=z.length;k<re;k++){let K=z[k],_e=O[K.materialIndex];_e&&_e.visible&&y.push(A,q,_e,j,We.z,K)}}else O.visible&&y.push(A,q,O,j,We.z,null)}}let D=A.children;for(let q=0,O=D.length;q<O;q++)$n(D[q],$,j,ee)}function Rr(A,$,j,ee){let S=A.opaque,D=A.transmissive,q=A.transparent;m.setupLightsView(j),ne===!0&&ie.setGlobalState(_.clippingPlanes,j),ee&&Ae.viewport(x.copy(ee)),S.length>0&&Zi(S,$,j),D.length>0&&Zi(D,$,j),q.length>0&&Zi(q,$,j),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Ls(A,$,j,ee){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ee.id]===void 0&&(m.state.transmissionRenderTarget[ee.id]=new yi(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?ka:gi,minFilter:_s,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ut.workingColorSpace}));let D=m.state.transmissionRenderTarget[ee.id],q=ee.viewport||x;D.setSize(q.z,q.w);let O=_.getRenderTarget();_.setRenderTarget(D),_.getClearColor(F),E=_.getClearAlpha(),E<1&&_.setClearColor(16777215,.5),_.clear(),Ge&&Oe.render(j);let z=_.toneMapping;_.toneMapping=Hi;let k=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),m.setupLightsView(ee),ne===!0&&ie.setGlobalState(_.clippingPlanes,ee),Zi(A,j,ee),P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D),fe.has("WEBGL_multisampled_render_to_texture")===!1){let re=!1;for(let K=0,_e=$.length;K<_e;K++){let $e=$[K],tt=$e.object,Yt=$e.geometry,nt=$e.material,ze=$e.group;if(nt.side===Ot&&tt.layers.test(ee.layers)){let xt=nt.side;nt.side=tn,nt.needsUpdate=!0,Pr(tt,j,ee,Yt,nt,ze),nt.side=xt,nt.needsUpdate=!0,re=!0}}re===!0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D))}_.setRenderTarget(O),_.setClearColor(F,E),k!==void 0&&(ee.viewport=k),_.toneMapping=z}function Zi(A,$,j){let ee=$.isScene===!0?$.overrideMaterial:null;for(let S=0,D=A.length;S<D;S++){let q=A[S],O=q.object,z=q.geometry,k=ee===null?q.material:ee,re=q.group;O.layers.test(j.layers)&&Pr(O,$,j,z,k,re)}}function Pr(A,$,j,ee,S,D){A.onBeforeRender(_,$,j,ee,S,D),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),S.onBeforeRender(_,$,j,ee,A,D),S.transparent===!0&&S.side===Ot&&S.forceSinglePass===!1?(S.side=tn,S.needsUpdate=!0,_.renderBufferDirect(j,$,ee,S,A,D),S.side=Vi,S.needsUpdate=!0,_.renderBufferDirect(j,$,ee,S,A,D),S.side=Ot):_.renderBufferDirect(j,$,ee,S,A,D),A.onAfterRender(_,$,j,ee,S,D)}function Ki(A,$,j){$.isScene!==!0&&($=He);let ee=Re.get(A),S=m.state.lights,D=m.state.shadowsArray,q=S.state.version,O=Be.getParameters(A,S.state,D,$,j),z=Be.getProgramCacheKey(O),k=ee.programs;ee.environment=A.isMeshStandardMaterial?$.environment:null,ee.fog=$.fog,ee.envMap=(A.isMeshStandardMaterial?Y:M).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,k===void 0&&(A.addEventListener("dispose",st),k=new Map,ee.programs=k);let re=k.get(z);if(re!==void 0){if(ee.currentProgram===re&&ee.lightsStateVersion===q)return Lr(A,O),re}else O.uniforms=Be.getUniforms(A),A.onBeforeCompile(O,_),re=Be.acquireProgram(O,z),k.set(z,re),ee.uniforms=O.uniforms;let K=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(K.clippingPlanes=ie.uniform),Lr(A,O),ee.needsLights=Ji(A),ee.lightsStateVersion=q,ee.needsLights&&(K.ambientLightColor.value=S.state.ambient,K.lightProbe.value=S.state.probe,K.directionalLights.value=S.state.directional,K.directionalLightShadows.value=S.state.directionalShadow,K.spotLights.value=S.state.spot,K.spotLightShadows.value=S.state.spotShadow,K.rectAreaLights.value=S.state.rectArea,K.ltc_1.value=S.state.rectAreaLTC1,K.ltc_2.value=S.state.rectAreaLTC2,K.pointLights.value=S.state.point,K.pointLightShadows.value=S.state.pointShadow,K.hemisphereLights.value=S.state.hemi,K.directionalShadowMap.value=S.state.directionalShadowMap,K.directionalShadowMatrix.value=S.state.directionalShadowMatrix,K.spotShadowMap.value=S.state.spotShadowMap,K.spotLightMatrix.value=S.state.spotLightMatrix,K.spotLightMap.value=S.state.spotLightMap,K.pointShadowMap.value=S.state.pointShadowMap,K.pointShadowMatrix.value=S.state.pointShadowMatrix),ee.currentProgram=re,ee.uniformsList=null,re}function Ir(A){if(A.uniformsList===null){let $=A.currentProgram.getUniforms();A.uniformsList=pr.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function Lr(A,$){let j=Re.get(A);j.outputColorSpace=$.outputColorSpace,j.batching=$.batching,j.batchingColor=$.batchingColor,j.instancing=$.instancing,j.instancingColor=$.instancingColor,j.instancingMorph=$.instancingMorph,j.skinning=$.skinning,j.morphTargets=$.morphTargets,j.morphNormals=$.morphNormals,j.morphColors=$.morphColors,j.morphTargetsCount=$.morphTargetsCount,j.numClippingPlanes=$.numClippingPlanes,j.numIntersection=$.numClipIntersection,j.vertexAlphas=$.vertexAlphas,j.vertexTangents=$.vertexTangents,j.toneMapping=$.toneMapping}function Ba(A,$,j,ee,S){$.isScene!==!0&&($=He),P.resetTextureUnits();let D=$.fog,q=ee.isMeshStandardMaterial?$.environment:null,O=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Xi,z=(ee.isMeshStandardMaterial?Y:M).get(ee.envMap||q),k=ee.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,re=!!j.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),K=!!j.morphAttributes.position,_e=!!j.morphAttributes.normal,$e=!!j.morphAttributes.color,tt=Hi;ee.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(tt=_.toneMapping);let Yt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,nt=Yt!==void 0?Yt.length:0,ze=Re.get(ee),xt=m.state.lights;if(ne===!0&&(ue===!0||A!==Q)){let nn=A===Q&&ee.id===L;ie.setState(ee,A,nn)}let it=!1;ee.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==xt.state.version||ze.outputColorSpace!==O||S.isBatchedMesh&&ze.batching===!1||!S.isBatchedMesh&&ze.batching===!0||S.isBatchedMesh&&ze.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&ze.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&ze.instancing===!1||!S.isInstancedMesh&&ze.instancing===!0||S.isSkinnedMesh&&ze.skinning===!1||!S.isSkinnedMesh&&ze.skinning===!0||S.isInstancedMesh&&ze.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&ze.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&ze.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&ze.instancingMorph===!1&&S.morphTexture!==null||ze.envMap!==z||ee.fog===!0&&ze.fog!==D||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ie.numPlanes||ze.numIntersection!==ie.numIntersection)||ze.vertexAlphas!==k||ze.vertexTangents!==re||ze.morphTargets!==K||ze.morphNormals!==_e||ze.morphColors!==$e||ze.toneMapping!==tt||ze.morphTargetsCount!==nt)&&(it=!0):(it=!0,ze.__version=ee.version);let un=ze.currentProgram;it===!0&&(un=Ki(ee,$,S));let kn=!1,Zt=!1,Dr=!1,wt=un.getUniforms(),qn=ze.uniforms;if(Ae.useProgram(un.program)&&(kn=!0,Zt=!0,Dr=!0),ee.id!==L&&(L=ee.id,Zt=!0),kn||Q!==A){ye.reverseDepthBuffer?(ve.copy(A.projectionMatrix),px(ve),mx(ve),wt.setValue(I,"projectionMatrix",ve)):wt.setValue(I,"projectionMatrix",A.projectionMatrix),wt.setValue(I,"viewMatrix",A.matrixWorldInverse);let nn=wt.map.cameraPosition;nn!==void 0&&nn.setValue(I,qe.setFromMatrixPosition(A.matrixWorld)),ye.logarithmicDepthBuffer&&wt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&wt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),Q!==A&&(Q=A,Zt=!0,Dr=!0)}if(S.isSkinnedMesh){wt.setOptional(I,S,"bindMatrix"),wt.setOptional(I,S,"bindMatrixInverse");let nn=S.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),wt.setValue(I,"boneTexture",nn.boneTexture,P))}S.isBatchedMesh&&(wt.setOptional(I,S,"batchingTexture"),wt.setValue(I,"batchingTexture",S._matricesTexture,P),wt.setOptional(I,S,"batchingIdTexture"),wt.setValue(I,"batchingIdTexture",S._indirectTexture,P),wt.setOptional(I,S,"batchingColorTexture"),S._colorsTexture!==null&&wt.setValue(I,"batchingColorTexture",S._colorsTexture,P));let ji=j.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Se.update(S,j,un),(Zt||ze.receiveShadow!==S.receiveShadow)&&(ze.receiveShadow=S.receiveShadow,wt.setValue(I,"receiveShadow",S.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(qn.envMap.value=z,qn.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&$.environment!==null&&(qn.envMapIntensity.value=$.environmentIntensity),Zt&&(wt.setValue(I,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&za(qn,Dr),D&&ee.fog===!0&&Pe.refreshFogUniforms(qn,D),Pe.refreshMaterialUniforms(qn,ee,Z,N,m.state.transmissionRenderTarget[A.id]),pr.upload(I,Ir(ze),qn,P)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(pr.upload(I,Ir(ze),qn,P),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&wt.setValue(I,"center",S.center),wt.setValue(I,"modelViewMatrix",S.modelViewMatrix),wt.setValue(I,"normalMatrix",S.normalMatrix),wt.setValue(I,"modelMatrix",S.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){let nn=ee.uniformsGroups;for(let Qi=0,sd=nn.length;Qi<sd;Qi++){let Ds=nn[Qi];B.update(Ds,un),B.bind(Ds,un)}}return un}function za(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function Ji(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,$,j){Re.get(A.texture).__webglTexture=$,Re.get(A.depthTexture).__webglTexture=j;let ee=Re.get(A);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=j===void 0,ee.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){let j=Re.get(A);j.__webglFramebuffer=$,j.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,j=0){C=A,R=$,T=j;let ee=!0,S=null,D=!1,q=!1;if(A){let z=Re.get(A);if(z.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(I.FRAMEBUFFER,null),ee=!1;else if(z.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(z.__hasExternalTextures)P.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let K=A.depthTexture;if(z.__boundDepthTexture!==K){if(K!==null&&Re.has(K)&&(A.width!==K.image.width||A.height!==K.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let k=A.texture;(k.isData3DTexture||k.isDataArrayTexture||k.isCompressedArrayTexture)&&(q=!0);let re=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(re[$])?S=re[$][j]:S=re[$],D=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?S=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(re)?S=re[j]:S=re,x.copy(A.viewport),w.copy(A.scissor),X=A.scissorTest}else x.copy(pe).multiplyScalar(Z).floor(),w.copy(W).multiplyScalar(Z).floor(),X=se;if(Ae.bindFramebuffer(I.FRAMEBUFFER,S)&&ee&&Ae.drawBuffers(A,S),Ae.viewport(x),Ae.scissor(w),Ae.setScissorTest(X),D){let z=Re.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,z.__webglTexture,j)}else if(q){let z=Re.get(A.texture),k=$||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,z.__webglTexture,j||0,k)}L=-1},this.readRenderTargetPixels=function(A,$,j,ee,S,D,q){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&q!==void 0&&(O=O[q]),O){Ae.bindFramebuffer(I.FRAMEBUFFER,O);try{let z=A.texture,k=z.format,re=z.type;if(!ye.textureFormatReadable(k)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ye.textureTypeReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-ee&&j>=0&&j<=A.height-S&&I.readPixels($,j,ee,S,Ye.convert(k),Ye.convert(re),D)}finally{let z=C!==null?Re.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,z)}}},this.readRenderTargetPixelsAsync=async function(A,$,j,ee,S,D,q){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&q!==void 0&&(O=O[q]),O){let z=A.texture,k=z.format,re=z.type;if(!ye.textureFormatReadable(k))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ye.textureTypeReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-ee&&j>=0&&j<=A.height-S){Ae.bindFramebuffer(I.FRAMEBUFFER,O);let K=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,K),I.bufferData(I.PIXEL_PACK_BUFFER,D.byteLength,I.STREAM_READ),I.readPixels($,j,ee,S,Ye.convert(k),Ye.convert(re),0);let _e=C!==null?Re.get(C).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,_e);let $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fx(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,K),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,D),I.deleteBuffer(K),I.deleteSync($e),D}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,j=0){A.isTexture!==!0&&(qo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);let ee=Math.pow(2,-j),S=Math.floor(A.image.width*ee),D=Math.floor(A.image.height*ee),q=$!==null?$.x:0,O=$!==null?$.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,q,O,S,D),Ae.unbindTexture()},this.copyTextureToTexture=function(A,$,j=null,ee=null,S=0){A.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,A=arguments[1],$=arguments[2],S=arguments[3]||0,j=null);let D,q,O,z,k,re;j!==null?(D=j.max.x-j.min.x,q=j.max.y-j.min.y,O=j.min.x,z=j.min.y):(D=A.image.width,q=A.image.height,O=0,z=0),ee!==null?(k=ee.x,re=ee.y):(k=0,re=0);let K=Ye.convert($.format),_e=Ye.convert($.type);P.setTexture2D($,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);let $e=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Yt=I.getParameter(I.UNPACK_SKIP_PIXELS),nt=I.getParameter(I.UNPACK_SKIP_ROWS),ze=I.getParameter(I.UNPACK_SKIP_IMAGES),xt=A.isCompressedTexture?A.mipmaps[S]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,xt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,O),I.pixelStorei(I.UNPACK_SKIP_ROWS,z),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,S,k,re,D,q,K,_e,xt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,S,k,re,xt.width,xt.height,K,xt.data):I.texSubImage2D(I.TEXTURE_2D,S,k,re,D,q,K,_e,xt),I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Yt),I.pixelStorei(I.UNPACK_SKIP_ROWS,nt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze),S===0&&$.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,$,j=null,ee=null,S=0){A.isTexture!==!0&&(qo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,ee=arguments[1]||null,A=arguments[2],$=arguments[3],S=arguments[4]||0);let D,q,O,z,k,re,K,_e,$e,tt=A.isCompressedTexture?A.mipmaps[S]:A.image;j!==null?(D=j.max.x-j.min.x,q=j.max.y-j.min.y,O=j.max.z-j.min.z,z=j.min.x,k=j.min.y,re=j.min.z):(D=tt.width,q=tt.height,O=tt.depth,z=0,k=0,re=0),ee!==null?(K=ee.x,_e=ee.y,$e=ee.z):(K=0,_e=0,$e=0);let Yt=Ye.convert($.format),nt=Ye.convert($.type),ze;if($.isData3DTexture)P.setTexture3D($,0),ze=I.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)P.setTexture2DArray($,0),ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);let xt=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),un=I.getParameter(I.UNPACK_SKIP_PIXELS),kn=I.getParameter(I.UNPACK_SKIP_ROWS),Zt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,tt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,z),I.pixelStorei(I.UNPACK_SKIP_ROWS,k),I.pixelStorei(I.UNPACK_SKIP_IMAGES,re),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ze,S,K,_e,$e,D,q,O,Yt,nt,tt.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(ze,S,K,_e,$e,D,q,O,Yt,tt.data):I.texSubImage3D(ze,S,K,_e,$e,D,q,O,Yt,nt,tt),I.pixelStorei(I.UNPACK_ROW_LENGTH,xt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,un),I.pixelStorei(I.UNPACK_SKIP_ROWS,kn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt),S===0&&$.generateMipmaps&&I.generateMipmap(ze),Ae.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,Ae.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Hu?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Cc?"display-p3":"srgb"}};var uc=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},pu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},on=new H,dc=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyMatrix4(e),this.setXYZ(t,on.x,on.y,on.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.applyNormalMatrix(e),this.setXYZ(t,on.x,on.y,on.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)on.fromBufferAttribute(this,t),on.transformDirection(e),this.setXYZ(t,on.x,on.y,on.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Qn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=pt(t,this.array),i=pt(i,this.array),s=pt(s,this.array),r=pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},$i=class extends xi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},rr,ma=new H,ar=new H,or=new H,cr=new Me,ga=new Me,mm=new Ct,ko=new H,ya=new H,Uo=new H,zp=new Me,ah=new Me,Hp=new Me,ws=class extends Dt{constructor(e=new $i){if(super(),this.isSprite=!0,this.type="Sprite",rr===void 0){rr=new ln;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new pu(t,5);rr.setIndex([0,1,2,0,2,3]),rr.setAttribute("position",new dc(i,3,0,!1)),rr.setAttribute("uv",new dc(i,2,3,!1))}this.geometry=rr,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ar.setFromMatrixScale(this.matrixWorld),mm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),or.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ar.multiplyScalar(-or.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;No(ko.set(-.5,-.5,0),or,a,ar,s,r),No(ya.set(.5,-.5,0),or,a,ar,s,r),No(Uo.set(.5,.5,0),or,a,ar,s,r),zp.set(0,0),ah.set(1,0),Hp.set(1,1);let o=e.ray.intersectTriangle(ko,ya,Uo,!1,ma);if(o===null&&(No(ya.set(-.5,.5,0),or,a,ar,s,r),ah.set(0,1),o=e.ray.intersectTriangle(ko,Uo,ya,!1,ma),o===null))return;let c=e.ray.origin.distanceTo(ma);c<e.near||c>e.far||t.push({distance:c,point:ma.clone(),uv:Bi.getInterpolation(ma,ko,ya,Uo,zp,ah,Hp,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function No(n,e,t,i,s,r){cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ga.x=r*cr.x-s*cr.y,ga.y=s*cr.x+r*cr.y):ga.copy(cr),n.copy(e),n.x+=ga.x,n.y+=ga.y,n.applyMatrix4(mm)}var fc=class extends mn{constructor(e=null,t=1,i=1,s,r,a,o,c,l=en,h=en,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ti=class extends mn{constructor(e,t,i,s,r,a,o,c,l){super(e,t,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=i[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new Me:new H);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new H,s=[],r=[],a=[],o=new H,c=new Ct;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new H)}r[0]=new H,a[0]=new H;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ea=class extends gn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new Me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},mu=class extends Ea{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Gu(){let n=0,e=0,t=0,i=0;function s(r,a,o,c){n=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Oo=new H,oh=new Gu,ch=new Gu,lh=new Gu,Ca=class extends gn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(Oo.subVectors(s[0],s[1]).add(s[0]),l=Oo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Oo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Oo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),oh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,y,m),ch.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,y,m),lh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(oh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),ch.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),lh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(oh.calc(c),ch.calc(c),lh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vp(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,c=n*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*n+t}function hb(n,e){let t=1-n;return t*t*e}function ub(n,e){return 2*(1-n)*n*e}function db(n,e){return n*n*e}function _a(n,e,t,i){return hb(n,e)+ub(n,t)+db(n,i)}function fb(n,e){let t=1-n;return t*t*t*e}function pb(n,e){let t=1-n;return 3*t*t*n*e}function mb(n,e){return 3*(1-n)*n*n*e}function gb(n,e){return n*n*n*e}function Ma(n,e,t,i,s){return fb(n,e)+pb(n,t)+mb(n,i)+gb(n,s)}var pc=class extends gn{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ma(e,s.x,r.x,a.x,o.x),Ma(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},gu=class extends gn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Ma(e,s.x,r.x,a.x,o.x),Ma(e,s.y,r.y,a.y,o.y),Ma(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},mc=class extends gn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yu=class extends gn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},gc=class extends gn{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(_a(e,s.x,r.x,a.x),_a(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ss=class extends gn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(_a(e,s.x,r.x,a.x),_a(e,s.y,r.y,a.y),_a(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},yc=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Vp(o,c.x,l.x,h.x,u.x),Vp(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},xc=Object.freeze({__proto__:null,ArcCurve:mu,CatmullRomCurve3:Ca,CubicBezierCurve:pc,CubicBezierCurve3:gu,EllipseCurve:Ea,LineCurve:mc,LineCurve3:yu,QuadraticBezierCurve:gc,QuadraticBezierCurve3:Ss,SplineCurve:yc}),xu=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new xc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new xc[s.type]().fromJSON(s))}return this}},Ra=class extends xu{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new mc(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new gc(this.currentPoint.clone(),new Me(e,t),new Me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new pc(this.currentPoint.clone(),new Me(e,t),new Me(i,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new yc(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,s,r,a,o,c),this}absellipse(e,t,i,s,r,a,o,c){let l=new Ea(e,t,i,s,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Pa=class n extends ln{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Kt(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new H,d=new Me,f=new H,g=new H,y=new H,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(y.x,y.y,y.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),c.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=t;b++){let _=i+b*h*s,v=Math.sin(_),R=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*v,u.y=e[T].y,u.z=e[T].x*R,a.push(u.x,u.y,u.z),d.x=b/t,d.y=T/(e.length-1),o.push(d.x,d.y);let C=c[3*T+0]*v,L=c[3*T+1],Q=c[3*T+0]*R;l.push(C,L,Q)}}for(let b=0;b<t;b++)for(let _=0;_<e.length-1;_++){let v=_+b*e.length,R=v,T=v+e.length,C=v+e.length+1,L=v+1;r.push(R,T,L),r.push(C,L,T)}this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("uv",new ft(o,2)),this.setAttribute("normal",new ft(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},_i=class n extends Pa{constructor(e=1,t=1,i=4,s=8){let r=new Ra;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},br=class n extends ln{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new H,h=new Me;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new ft(a,3)),this.setAttribute("normal",new ft(o,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mt=class n extends ln{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;b(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function b(){let v=new H,R=new H,T=0,C=(t-e)/i;for(let L=0;L<=r;L++){let Q=[],x=L/r,w=x*(t-e)+e;for(let X=0;X<=s;X++){let F=X/s,E=F*c+o,U=Math.sin(E),N=Math.cos(E);R.x=w*U,R.y=-x*i+m,R.z=w*N,u.push(R.x,R.y,R.z),v.set(U,C,N).normalize(),d.push(v.x,v.y,v.z),f.push(F,1-x),Q.push(g++)}y.push(Q)}for(let L=0;L<s;L++)for(let Q=0;Q<r;Q++){let x=y[Q][L],w=y[Q+1][L],X=y[Q+1][L+1],F=y[Q][L+1];e>0&&(h.push(x,w,F),T+=3),t>0&&(h.push(w,X,F),T+=3)}l.addGroup(p,T,0),p+=T}function _(v){let R=g,T=new Me,C=new H,L=0,Q=v===!0?e:t,x=v===!0?1:-1;for(let X=1;X<=s;X++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;let w=g;for(let X=0;X<=s;X++){let E=X/s*c+o,U=Math.cos(E),N=Math.sin(E);C.x=Q*N,C.y=m*x,C.z=Q*U,u.push(C.x,C.y,C.z),d.push(0,x,0),T.x=U*.5+.5,T.y=N*.5*x+.5,f.push(T.x,T.y),g++}for(let X=0;X<s;X++){let F=R+X,E=w+X;v===!0?h.push(E,E+1,F):h.push(E+1,E,F),L+=3}l.addGroup(p,L,v===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qt=class n extends mt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ni=class extends Ra{constructor(e){super(e),this.uuid=mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Ra().fromJSON(s))}return this}},yb={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=gm(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l,h,u,d,f;if(i&&(r=bb(n,e,r,t)),n.length>80*t){o=l=n[0],c=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<o&&(o=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-o,h-c),f=f!==0?32767/f:0}return Ia(r,a,t,o,c,f,0),a}};function gm(n,e,t,i,s){let r,a;if(s===Db(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Gp(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Gp(r,n[r],n[r+1],a);return a&&Pc(a,a.next)&&(Da(a),a=a.next),a}function Ts(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Pc(t,t.next)||Et(t.prev,t,t.next)===0)){if(Da(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ia(n,e,t,i,s,r,a){if(!n)return;!a&&r&&Eb(n,i,s,r);let o=n,c,l;for(;n.prev!==n.next;){if(c=n.prev,l=n.next,r?vb(n,i,s,r):xb(n)){e.push(c.i/t|0),e.push(n.i/t|0),e.push(l.i/t|0),Da(n),n=l.next,o=l.next;continue}if(n=l,n===o){a?a===1?(n=_b(Ts(n),e,t),Ia(n,e,t,i,s,r,2)):a===2&&Mb(n,e,t,i,s,r):Ia(Ts(n),e,t,i,s,r,1);break}}}function xb(n){let e=n.prev,t=n,i=n.next;if(Et(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<c?o<l?o:l:c<l?c:l,d=s>r?s>a?s:a:r>a?r:a,f=o>c?o>l?o:l:c>l?c:l,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&hr(s,o,r,c,a,l,g.x,g.y)&&Et(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vb(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Et(s,r,a)>=0)return!1;let o=s.x,c=r.x,l=a.x,h=s.y,u=r.y,d=a.y,f=o<c?o<l?o:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,y=o>c?o>l?o:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=vu(f,g,e,t,i),b=vu(y,m,e,t,i),_=n.prevZ,v=n.nextZ;for(;_&&_.z>=p&&v&&v.z<=b;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&hr(o,h,c,u,l,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0||(_=_.prevZ,v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&hr(o,h,c,u,l,d,v.x,v.y)&&Et(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&hr(o,h,c,u,l,d,_.x,_.y)&&Et(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;v&&v.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==s&&v!==a&&hr(o,h,c,u,l,d,v.x,v.y)&&Et(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function _b(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!Pc(s,r)&&ym(s,i,i.next,r)&&La(s,r)&&La(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Da(i),Da(i.next),i=n=r),i=i.next}while(i!==n);return Ts(i)}function Mb(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Pb(a,o)){let c=xm(a,o);a=Ts(a,a.next),c=Ts(c,c.next),Ia(a,e,t,i,s,r,0),Ia(c,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function bb(n,e,t,i){let s=[],r,a,o,c,l;for(r=0,a=e.length;r<a;r++)o=e[r]*i,c=r<a-1?e[r+1]*i:n.length,l=gm(n,o,c,i,!1),l===l.next&&(l.steiner=!0),s.push(Rb(l));for(s.sort(wb),r=0;r<s.length;r++)t=Sb(s[r],t);return t}function wb(n,e){return n.x-e.x}function Sb(n,e){let t=Tb(n,e);if(!t)return e;let i=xm(t,n);return Ts(i,i.next),Ts(t,t.next)}function Tb(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,c=s.x,l=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&hr(a<l?r:i,a,c,l,a<l?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),La(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&Ab(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function Ab(n,e){return Et(n.prev,n,e.prev)<0&&Et(e.next,n,n.next)<0}function Eb(n,e,t,i){let s=n;do s.z===0&&(s.z=vu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Cb(s)}function Cb(n){let e,t,i,s,r,a,o,c,l=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<l&&(o++,i=i.nextZ,!!i);e++);for(c=l;o>0||c>0&&i;)o!==0&&(c===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,c--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,l*=2}while(a>1);return n}function vu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function Rb(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function hr(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function Pb(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Ib(n,e)&&(La(n,e)&&La(e,n)&&Lb(n,e)&&(Et(n.prev,n,e.prev)||Et(n,e.prev,e))||Pc(n,e)&&Et(n.prev,n,n.next)>0&&Et(e.prev,e,e.next)>0)}function Et(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Pc(n,e){return n.x===e.x&&n.y===e.y}function ym(n,e,t,i){let s=Bo(Et(n,e,t)),r=Bo(Et(n,e,i)),a=Bo(Et(t,i,n)),o=Bo(Et(t,i,e));return!!(s!==r&&a!==o||s===0&&Fo(n,t,e)||r===0&&Fo(n,i,e)||a===0&&Fo(t,n,i)||o===0&&Fo(t,e,i))}function Fo(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Bo(n){return n>0?1:n<0?-1:0}function Ib(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&ym(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function La(n,e){return Et(n.prev,n,n.next)<0?Et(n,e,n.next)>=0&&Et(n,n.prev,e)>=0:Et(n,e,n.prev)<0||Et(n,n.next,e)<0}function Lb(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function xm(n,e){let t=new _u(n.i,n.x,n.y),i=new _u(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Gp(n,e,t,i){let s=new _u(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Da(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function _u(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Db(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var ba=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Wp(e),$p(i,e);let a=e.length;t.forEach(Wp);for(let c=0;c<t.length;c++)s.push(a),a+=t[c].length,$p(i,t[c]);let o=yb.triangulate(i,s);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Wp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function $p(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var qi=class n extends ln{constructor(e=new ni([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new ft(s,3)),this.setAttribute("uv",new ft(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:kb,_,v=!1,R,T,C,L;p&&(_=p.getSpacedPoints(h),v=!0,d=!1,R=p.computeFrenetFrames(h,!1),T=new H,C=new H,L=new H),d||(m=0,f=0,g=0,y=0);let Q=o.extractPoints(l),x=Q.shape,w=Q.holes;if(!ba.isClockWise(x)){x=x.reverse();for(let ae=0,I=w.length;ae<I;ae++){let le=w[ae];ba.isClockWise(le)&&(w[ae]=le.reverse())}}let F=ba.triangulateShape(x,w),E=x;for(let ae=0,I=w.length;ae<I;ae++){let le=w[ae];x=x.concat(le)}function U(ae,I,le){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(I,le)}let N=x.length,Z=F.length;function G(ae,I,le){let fe,ye,Ae,Fe=ae.x-I.x,Re=ae.y-I.y,P=le.x-ae.x,M=le.y-ae.y,Y=Fe*Fe+Re*Re,J=Fe*M-Re*P;if(Math.abs(J)>Number.EPSILON){let ce=Math.sqrt(Y),oe=Math.sqrt(P*P+M*M),Be=I.x-Re/ce,Pe=I.y+Fe/ce,Ue=le.x-M/oe,we=le.y+P/oe,ie=((Ue-Be)*M-(we-Pe)*P)/(Fe*M-Re*P);fe=Be+Fe*ie-ae.x,ye=Pe+Re*ie-ae.y;let he=fe*fe+ye*ye;if(he<=2)return new Me(fe,ye);Ae=Math.sqrt(he/2)}else{let ce=!1;Fe>Number.EPSILON?P>Number.EPSILON&&(ce=!0):Fe<-Number.EPSILON?P<-Number.EPSILON&&(ce=!0):Math.sign(Re)===Math.sign(M)&&(ce=!0),ce?(fe=-Re,ye=Fe,Ae=Math.sqrt(Y)):(fe=Fe,ye=Re,Ae=Math.sqrt(Y/2))}return new Me(fe/Ae,ye/Ae)}let xe=[];for(let ae=0,I=E.length,le=I-1,fe=ae+1;ae<I;ae++,le++,fe++)le===I&&(le=0),fe===I&&(fe=0),xe[ae]=G(E[ae],E[le],E[fe]);let pe=[],W,se=xe.concat();for(let ae=0,I=w.length;ae<I;ae++){let le=w[ae];W=[];for(let fe=0,ye=le.length,Ae=ye-1,Fe=fe+1;fe<ye;fe++,Ae++,Fe++)Ae===ye&&(Ae=0),Fe===ye&&(Fe=0),W[fe]=G(le[fe],le[Ae],le[Fe]);pe.push(W),se=se.concat(W)}for(let ae=0;ae<m;ae++){let I=ae/m,le=f*Math.cos(I*Math.PI/2),fe=g*Math.sin(I*Math.PI/2)+y;for(let ye=0,Ae=E.length;ye<Ae;ye++){let Fe=U(E[ye],xe[ye],fe);Ee(Fe.x,Fe.y,-le)}for(let ye=0,Ae=w.length;ye<Ae;ye++){let Fe=w[ye];W=pe[ye];for(let Re=0,P=Fe.length;Re<P;Re++){let M=U(Fe[Re],W[Re],fe);Ee(M.x,M.y,-le)}}}let ke=g+y;for(let ae=0;ae<N;ae++){let I=d?U(x[ae],se[ae],ke):x[ae];v?(C.copy(R.normals[0]).multiplyScalar(I.x),T.copy(R.binormals[0]).multiplyScalar(I.y),L.copy(_[0]).add(C).add(T),Ee(L.x,L.y,L.z)):Ee(I.x,I.y,0)}for(let ae=1;ae<=h;ae++)for(let I=0;I<N;I++){let le=d?U(x[I],se[I],ke):x[I];v?(C.copy(R.normals[ae]).multiplyScalar(le.x),T.copy(R.binormals[ae]).multiplyScalar(le.y),L.copy(_[ae]).add(C).add(T),Ee(L.x,L.y,L.z)):Ee(le.x,le.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){let I=ae/m,le=f*Math.cos(I*Math.PI/2),fe=g*Math.sin(I*Math.PI/2)+y;for(let ye=0,Ae=E.length;ye<Ae;ye++){let Fe=U(E[ye],xe[ye],fe);Ee(Fe.x,Fe.y,u+le)}for(let ye=0,Ae=w.length;ye<Ae;ye++){let Fe=w[ye];W=pe[ye];for(let Re=0,P=Fe.length;Re<P;Re++){let M=U(Fe[Re],W[Re],fe);v?Ee(M.x,M.y+_[h-1].y,_[h-1].x+le):Ee(M.x,M.y,u+le)}}}ne(),ue();function ne(){let ae=s.length/3;if(d){let I=0,le=N*I;for(let fe=0;fe<Z;fe++){let ye=F[fe];qe(ye[2]+le,ye[1]+le,ye[0]+le)}I=h+m*2,le=N*I;for(let fe=0;fe<Z;fe++){let ye=F[fe];qe(ye[0]+le,ye[1]+le,ye[2]+le)}}else{for(let I=0;I<Z;I++){let le=F[I];qe(le[2],le[1],le[0])}for(let I=0;I<Z;I++){let le=F[I];qe(le[0]+N*h,le[1]+N*h,le[2]+N*h)}}i.addGroup(ae,s.length/3-ae,0)}function ue(){let ae=s.length/3,I=0;ve(E,I),I+=E.length;for(let le=0,fe=w.length;le<fe;le++){let ye=w[le];ve(ye,I),I+=ye.length}i.addGroup(ae,s.length/3-ae,1)}function ve(ae,I){let le=ae.length;for(;--le>=0;){let fe=le,ye=le-1;ye<0&&(ye=ae.length-1);for(let Ae=0,Fe=h+m*2;Ae<Fe;Ae++){let Re=N*Ae,P=N*(Ae+1),M=I+fe+Re,Y=I+ye+Re,J=I+ye+P,ce=I+fe+P;We(M,Y,J,ce)}}}function Ee(ae,I,le){c.push(ae),c.push(I),c.push(le)}function qe(ae,I,le){He(ae),He(I),He(le);let fe=s.length/3,ye=b.generateTopUV(i,s,fe-3,fe-2,fe-1);Ge(ye[0]),Ge(ye[1]),Ge(ye[2])}function We(ae,I,le,fe){He(ae),He(I),He(fe),He(I),He(le),He(fe);let ye=s.length/3,Ae=b.generateSideWallUV(i,s,ye-6,ye-3,ye-2,ye-1);Ge(Ae[0]),Ge(Ae[1]),Ge(Ae[3]),Ge(Ae[1]),Ge(Ae[2]),Ge(Ae[3])}function He(ae){s.push(c[ae*3+0]),s.push(c[ae*3+1]),s.push(c[ae*3+2])}function Ge(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return Ub(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new xc[s.type]().fromJSON(s)),new n(i,e.options)}},kb={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[s*3],h=e[s*3+1];return[new Me(r,a),new Me(o,c),new Me(l,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new Me(a,1-c),new Me(l,1-u),new Me(d,1-g),new Me(y,1-p)]:[new Me(o,1-c),new Me(h,1-u),new Me(f,1-g),new Me(m,1-p)]}};function Ub(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var at=class n extends ln{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new H,d=new H,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],_=p/i,v=0;p===0&&a===0?v=.5/t:p===i&&c===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){let T=R/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+v,1-_),b.push(l++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let _=h[p][b+1],v=h[p][b],R=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(_,v,T),(p!==i-1||c<Math.PI)&&f.push(v,R,T)}this.setIndex(f),this.setAttribute("position",new ft(g,3)),this.setAttribute("normal",new ft(y,3)),this.setAttribute("uv",new ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var gt=class n extends ln{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],c=[],l=[],h=new H,u=new H,d=new H;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,b=(s+1)*f+g;a.push(y,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(c,3)),this.setAttribute("uv",new ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var As=class n extends ln{constructor(e=new Ss(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,c=new H,l=new Me,h=new H,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ft(u,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(f,2));function y(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),b(),p()}function m(_){h=e.getPointAt(_/t,h);let v=a.normals[_],R=a.binormals[_];for(let T=0;T<=s;T++){let C=T/s*Math.PI*2,L=Math.sin(C),Q=-Math.cos(C);c.x=Q*v.x+L*R.x,c.y=Q*v.y+L*R.y,c.z=Q*v.z+L*R.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let v=1;v<=s;v++){let R=(s+1)*(_-1)+(v-1),T=(s+1)*_+(v-1),C=(s+1)*_+v,L=(s+1)*(_-1)+v;g.push(R,T,L),g.push(T,C,L)}}function b(){for(let _=0;_<=t;_++)for(let v=0;v<=s;v++)l.x=_/t,l.y=v/s,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new xc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var yn=class extends xi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var vc=class extends xi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zu,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function zo(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function Nb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var wr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Mu=class extends wr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zf,endingEnd:Zf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kf:r=e,o=2*t-i;break;case Jf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kf:a=e,c=2*i-t;break;case Jf:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,b=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,v=f*m-f*y;for(let R=0;R!==o;++R)r[R]=p*a[h+R]+b*a[l+R]+_*a[c+R]+v*a[u+R];return r}},bu=class extends wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},wu=class extends wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Wn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=zo(t,this.TimeBufferType),this.values=zo(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:zo(e.times,Array),values:zo(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Mu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Xo:t=this.InterpolantFactoryMethodDiscrete;break;case Zh:t=this.InterpolantFactoryMethodLinear;break;case Pl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Xo;case this.InterpolantFactoryMethodLinear:return Zh;case this.InterpolantFactoryMethodSmooth:return Pl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Nb(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Pl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Wn.prototype.TimeBufferType=Float32Array;Wn.prototype.ValueBufferType=Float32Array;Wn.prototype.DefaultInterpolation=Zh;var Es=class extends Wn{constructor(e,t,i){super(e,t,i)}};Es.prototype.ValueTypeName="bool";Es.prototype.ValueBufferType=Array;Es.prototype.DefaultInterpolation=Xo;Es.prototype.InterpolantFactoryMethodLinear=void 0;Es.prototype.InterpolantFactoryMethodSmooth=void 0;var Su=class extends Wn{};Su.prototype.ValueTypeName="color";var Tu=class extends Wn{};Tu.prototype.ValueTypeName="number";var Au=class extends wr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Wi.slerpFlat(r,0,a,l-o,a,l,c);return r}},_c=class extends Wn{InterpolantFactoryMethodLinear(e){return new Au(this.times,this.values,this.getValueSize(),e)}};_c.prototype.ValueTypeName="quaternion";_c.prototype.InterpolantFactoryMethodSmooth=void 0;var Cs=class extends Wn{constructor(e,t,i){super(e,t,i)}};Cs.prototype.ValueTypeName="string";Cs.prototype.ValueBufferType=Array;Cs.prototype.DefaultInterpolation=Xo;Cs.prototype.InterpolantFactoryMethodLinear=void 0;Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Eu=class extends Wn{};Eu.prototype.ValueTypeName="vector";var Cu=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},Ob=new Cu,Ru=class{constructor(e){this.manager=e!==void 0?e:Ob,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ru.DEFAULT_MATERIAL_NAME="__DEFAULT";var Sr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Mc=class extends Sr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},hh=new Ct,qp=new H,Xp=new H,bc=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Aa,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;qp.setFromMatrixPosition(e.matrixWorld),t.position.copy(qp),Xp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Xp),t.updateMatrixWorld(),hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pu=class extends bc{constructor(){super(new Qt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=jo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},wc=class extends Sr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Pu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Iu=class extends bc{constructor(){super(new oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Sc=class extends Sr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Iu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Tc=class extends Sr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wu="\\[\\]\\.:\\/",Fb=new RegExp("["+Wu+"]","g"),$u="[^"+Wu+"]",Bb="[^"+Wu.replace("\\.","")+"]",zb=/((?:WC+[\/:])*)/.source.replace("WC",$u),Hb=/(WCOD+)?/.source.replace("WCOD",Bb),Vb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",$u),Gb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",$u),Wb=new RegExp("^"+zb+Hb+Vb+Gb+"$"),$b=["material","materials","bones","map"],Lu=class{constructor(e,t,i){let s=i||vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},vt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Fb,"")}static parseTrackName(e){let t=Wb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);$b.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};vt.Composite=Lu;vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};vt.prototype.GetterByBindingType=[vt.prototype._getValue_direct,vt.prototype._getValue_array,vt.prototype._getValue_arrayElement,vt.prototype._getValue_toArray];vt.prototype.SetterByBindingTypeAndVersioning=[[vt.prototype._setValue_direct,vt.prototype._setValue_direct_setNeedsUpdate,vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_array,vt.prototype._setValue_array_setNeedsUpdate,vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_arrayElement,vt.prototype._setValue_arrayElement_setNeedsUpdate,vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[vt.prototype._setValue_fromArray,vt.prototype._setValue_fromArray_setNeedsUpdate,vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Qw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var Ua=new H;function Dn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),c=Math.PI/4;Ua.copy(e),Ua[i]=0,Ua.normalize();let l=.5*a/(a+o),h=1-Ua.angleTo(n)/c;return Math.sign(Ua[t])===1?h*l:o/(a+o)+l+l*(1-h)}var Mi=class extends $t{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new H,c=new H,l=new H(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new H,y=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),c.copy(o),c.x-=Math.sign(c.x)*y,c.y-=Math.sign(c.y)*y,c.z-=Math.sign(c.z)*y,c.normalize(),h[m+0]=l.x*Math.sign(o.x)+c.x*r,h[m+1]=l.y*Math.sign(o.y)+c.y*r,h[m+2]=l.z*Math.sign(o.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=Dn(g,c,"z","y",r,i),d[p+1]=1-Dn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-Dn(g,c,"z","y",r,i),d[p+1]=1-Dn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-Dn(g,c,"x","z",r,e),d[p+1]=Dn(g,c,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-Dn(g,c,"x","z",r,e),d[p+1]=1-Dn(g,c,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-Dn(g,c,"x","y",r,e),d[p+1]=1-Dn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=Dn(g,c,"x","y",r,e),d[p+1]=1-Dn(g,c,"y","x",r,t);break}}};function qb(){let n=document.createElement("canvas");n.width=1024,n.height=512;let e=n.getContext("2d"),t=12,i=n.width/t,s=["#d9944f","#cf8846","#e0a05a","#c98240","#d68f4c"];for(let a=0;a<t;a++){e.fillStyle=s[a*7%s.length],e.fillRect(a*i,0,i,n.height),e.strokeStyle="rgba(120,60,20,.18)",e.lineWidth=2;for(let c=0;c<7;c++){e.beginPath();let l=a*i+8+Math.random()*(i-16);e.moveTo(l,0);for(let h=0;h<=n.height;h+=32)e.lineTo(l+Math.sin(h/60+c)*4,h);e.stroke()}e.fillStyle="rgba(70,30,10,.55)",e.fillRect(a*i,0,3,n.height);let o=a*173%n.height;e.fillRect(a*i,o,i,3)}let r=new ti(n);return r.colorSpace=Wt,r.wrapS=r.wrapT=wa,r.anisotropy=4,r}function Xb(){let n=document.createElement("canvas");n.width=512,n.height=512;let e=n.getContext("2d"),t=e.createRadialGradient(256,200,40,256,256,380);t.addColorStop(0,"#6d48d6"),t.addColorStop(.55,"#3f2196"),t.addColorStop(1,"#1d0f52"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let s=0;s<90;s++)e.fillStyle=Math.random()<.25?"#ffe9a8":"#ffffff",e.globalAlpha=.4+Math.random()*.6,e.beginPath(),e.arc(Math.random()*512,Math.random()*420,Math.random()*2+.6,0,Math.PI*2),e.fill();e.globalAlpha=1;let i=new ti(n);return i.colorSpace=Wt,i}function Yb(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,240,190,1)"),t.addColorStop(.3,"rgba(255,210,120,.6)"),t.addColorStop(1,"rgba(255,200,100,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ti(n)}function vm(n,e,t){let i=new vi(n,e,t*10,1),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=(s.getX(r)+n/2)/n;s.setZ(r,Math.sin(a*t*Math.PI*2)*.16)}return i.computeVertexNormals(),i}function Zb(n=.32,e=.14){let t=new ni;for(let i=0;i<10;i++){let s=i/10*Math.PI*2-Math.PI/2,r=i%2?e:n;t[i?"lineTo":"moveTo"](Math.cos(s)*r,-Math.sin(s)*r)}return t}function _m(n){let e={hangs:[],crowd:[],beams:[],bulbs:[]};n.background=new je(1444910);let t=qb();t.repeat.set(1.6,1.2);let i=new Ke(new vi(14,7.5),new yn({map:t,roughness:.55}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-.4),i.receiveShadow=!0,n.add(i);let s=new Ke(new $t(14,.55,.3),new yn({color:8011031,roughness:.6}));s.position.set(0,-.28,3.35),n.add(s);let r=new Ke(new $t(14,.08,.34),new yn({color:16763197,roughness:.3,metalness:.4}));r.position.set(0,0,3.36),n.add(r);let a=new Ke(new vi(40,20),new yn({color:853792}));a.rotation.x=-Math.PI/2,a.position.set(0,-.55,10),n.add(a);let o=new Ke(new vi(16,10),new yn({map:Xb(),roughness:.9,emissive:1707322,emissiveIntensity:.5}));o.position.set(0,4.2,-4.1),o.receiveShadow=!0,n.add(o);let c=(v,R,T,C,L)=>{let Q=new Je;Q.position.set(R,T+L,C);let x=new Ke(new mt(.012,.012,L,4),new Ft({color:15658751,transparent:!0,opacity:.6}));x.position.y=-L/2,Q.add(x),v.position.y=-L,Q.add(v),Q.userData.ph=Math.random()*6,n.add(Q),e.hangs.push(Q)},l=new ni;l.absarc(0,0,.55,0,Math.PI*2,!1);let h=new ni;h.absarc(.24,.16,.48,0,Math.PI*2,!0),l.holes.push(h);let u=new Ke(new qi(l,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03}),new yn({color:16766826,emissive:16759101,emissiveIntensity:.6,roughness:.4}));c(u,-3.4,3.4,-3.3,1.6);let d=new yn({color:16769658,emissive:16763197,emissiveIntensity:.5,roughness:.4});for(let[v,R,T,C]of[[-1.8,4.1,.9,.8],[2.2,3.9,1.2,1],[3.6,4.3,.7,.7],[-4.6,4.4,.6,.6]]){let L=new Ke(new qi(Zb(),{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),d);L.scale.setScalar(C),c(L,v,R,-3.4,T)}let f=new yn({color:11736364,roughness:.75,side:Ot});for(let v of[-1,1]){let R=new Ke(vm(3.2,8,7),f);R.position.set(v*5.6,4,.6),R.rotation.y=v*-.25,R.castShadow=!0,n.add(R);let T=new Ke(new gt(.42,.07,10,24),new yn({color:16763197,roughness:.3,metalness:.5}));T.position.set(v*4.35,1.9,.75),T.rotation.set(Math.PI/2,0,v*.3),T.scale.set(1,1,.6),n.add(T)}let g=new Ke(vm(15,1.5,22),f);g.position.set(0,5.25,1.6),n.add(g);let y=new Ke(new $t(15,.1,.12),new yn({color:16763197,emissive:9067008,emissiveIntensity:.3,metalness:.4,roughness:.3}));y.position.set(0,4.5,1.7),n.add(y);let m=Yb();for(let v=0;v<9;v++){let R=-4.4+v*1.1,T=new Ke(new at(.09,12,8),new Ft({color:16774064}));T.position.set(R,.08,3.1),n.add(T);let C=new ws(new $i({map:m,transparent:!0,blending:mr,depthWrite:!1}));C.scale.set(.9,.9,1),C.position.copy(T.position),n.add(C),e.bulbs.push(C)}let p=new Dt;p.position.set(0,1.2,0),n.add(p);for(let v of[-1,1]){let R=new wc(16773583,1.1,0,.36,.55,0);R.position.set(v*3.6,7.2,3.2),R.target=p,v<0&&(R.castShadow=!0,R.shadow.mapSize.set(1024,1024),R.shadow.bias=-4e-4),n.add(R);let T=8.2,C=new Ke(new qt(1.5,T,32,1,!0),new Ft({color:16773583,transparent:!0,opacity:.075,blending:mr,depthWrite:!1,side:Ot}));C.geometry.translate(0,-T/2,0),C.position.copy(R.position),C.lookAt(p.position),C.rotateX(-Math.PI/2),n.add(C),e.beams.push(C)}let b=new Ke(new br(1.7,40),new Ft({map:m,transparent:!0,opacity:.55,blending:mr,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.set(0,.012,.1),n.add(b);let _=new yn({color:1313326,roughness:1});for(let v=0;v<11;v++){let R=new Je,T=.85+Math.random()*.35,C=new Ke(new _i(.42,.5,4,12),_);C.position.y=.2,R.add(C);let L=new Ke(new at(.34,16,12),_);L.position.y=1,R.add(L),R.scale.setScalar(T),R.position.set(-5.5+v*1.1+(Math.random()-.5)*.3,-1+v%2*.12,4.4+v%2*.35),R.userData.base=R.position.y,R.userData.ph=Math.random()*6,n.add(R),e.crowd.push(R)}return e.cheerUntil=0,e.update=(v,R)=>{for(let C of e.hangs)C.rotation.z=Math.sin(v*1.1+C.userData.ph)*.08;e.beams.forEach((C,L)=>{C.material.opacity=.065+Math.sin(v*1.3+L)*.015}),e.bulbs.forEach((C,L)=>{C.material.opacity=.75+Math.sin(v*3+L*1.7)*.25});let T=R<e.cheerUntil;for(let C of e.crowd){let L=T?Math.abs(Math.sin(v*9+C.userData.ph))*.35:Math.sin(v*1.4+C.userData.ph)*.02;C.position.y=C.userData.base+L}},e}var bn=Math.PI/180,Mm=1/112,Kb=1906248,Ar;function Jb(){return Ar||(Ar=new fc(new Uint8Array([140,205,240]),3,1,Ec),Ar.minFilter=Ar.magFilter=en,Ar.needsUpdate=!0),Ar}var Rs=(n,e={})=>new vc({color:n,gradientMap:Jb(),...e}),Cm=n=>new Ln({uniforms:{t:{value:n},color:{value:new je(Kb)}},vertexShader:"uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }",side:tn}),Zu=Cm(.026),Rm=Cm(.016),bm=new Set([Zu,Rm]);function ge(n,e,{outline:t=!0,thin:i=!1,mat:s}={}){let r=new Je,a=new Ke(n,s||Rs(e));return a.castShadow=!0,r.add(a),t&&r.add(new Ke(n,i?Rm:Zu)),r.userData.mesh=a,r}var Te=(n,e,t,i)=>(n.position.set(e,t,i),n),_t=(n,e,t,i)=>(n.rotation.set(e,t,i),n),Mt=(n,e,t,i)=>(n.scale.set(e,t,i),n),Ic=(n,e=32,t=0,i=Math.PI*2)=>{let s=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new Pa(s.map(([r,a])=>new Me(r,a)),e,t,i)},qu=new Map;function jb(n,e){if(qu.has(n))return qu.get(n);let t=document.createElement("canvas");t.width=t.height=512;let i=new ti(t);i.colorSpace=Wt;let s=new Image;return s.onload=()=>{t.getContext("2d").drawImage(s,0,0,512,512),i.needsUpdate=!0},s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${e}</svg>`),qu.set(n,i),i}var Xu=new Map;function wm(n){if(Xu.has(n))return Xu.get(n);let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(n,64,72);let i=new ti(e);return i.colorSpace=Wt,Xu.set(n,i),i}var Ze=.62,Ku=1,kt={lon:.34,lat:.06,r:.155},Sm=n=>50+n/Ku*50,Tm=n=>50-n/Ku*50;function Qb(n,{eyes3D:e=!0,wink:t=!1,extras:i=[],noMouth:s=!1}={}){let r=Sm(-kt.lon),a=Sm(kt.lon),o=Tm(kt.lat),c='fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"',l="";if((i.includes("blush")||["happy","love","cheeky"].includes(n))&&(l+=`<ellipse cx="${r-4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${a+4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`),i.includes("freckles"))for(let[v,R]of[[-6,12],[-2,15],[-9,15],[6,12],[2,15],[9,15]])l+=`<circle cx="${(v<0?r:a)+v}" cy="${o+R}" r=".9" fill="#b0643a"/>`;let u=v=>`<path d="M${v-8} ${o+3} Q${v} ${o-8} ${v+8} ${o+3}" ${c} stroke-width="3.6"/>`,d=v=>`<path d="M${v-8} ${o} Q${v} ${o+6} ${v+8} ${o}" ${c} stroke-width="3.4"/>`,f=v=>`<path d="M${v} ${o+7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;e?t&&(l+=u(r)):n==="love"?l+=f(r)+f(a):n==="sleepy"?l+=d(r)+d(a):l+=u(r)+u(a);let g=o-17,y=v=>`<path d="${v}" ${c} stroke-width="3.2"/>`,m={angry:`M${r-9} ${g+1} L${r+7} ${g+7} M${a+9} ${g+1} L${a-7} ${g+7}`,sad:`M${r-8} ${g+6} L${r+7} ${g} M${a+8} ${g+6} L${a-7} ${g}`,scared:`M${r-8} ${g+2} Q${r} ${g-5} ${r+7} ${g-1} M${a+8} ${g+2} Q${a} ${g-5} ${a-7} ${g-1}`,surprised:`M${r-8} ${g-2} Q${r} ${g-8} ${r+8} ${g-2} M${a-8} ${g-2} Q${a} ${g-8} ${a+8} ${g-2}`,cheeky:`M${r-8} ${g+2} Q${r} ${g-2} ${r+8} ${g+3} M${a-8} ${g-3} Q${a} ${g-8} ${a+8} ${g-2}`,neutral:`M${r-7} ${g+1} Q${r} ${g-3} ${r+7} ${g+2} M${a-7} ${g-1} Q${a} ${g-5} ${a+7} ${g}`};l+=y(m[n]||m.neutral);let p=Tm(-.36),b=v=>`<rect x="45.6" y="${v}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${v}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`,_={neutral:`<path d="M41 ${p-2} Q50 ${p+4} 59 ${p-3}" ${c} stroke-width="2.8"/>${b(p)}`,happy:`<path d="M37 ${p-4} Q50 ${p+16} 63 ${p-4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${b(p-3.6)}<path d="M44 ${p+6} Q50 ${p+2} 56 ${p+6} Q50 ${p+10} 44 ${p+6}Z" fill="#ff7b93"/>`,sad:`<path d="M41 ${p+4} Q50 ${p-4} 59 ${p+4}" ${c} stroke-width="2.8"/><path d="M${r-3} ${o+9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,angry:`<path d="M40 ${p-2} H60 Q61 ${p+7} 50 ${p+7} Q39 ${p+7} 40 ${p-2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${p+2.5} H59.5 M45 ${p-2} v9 M50 ${p-2} v9 M55 ${p-2} v9" stroke="#1d1648" stroke-width="1.2"/>`,surprised:`<ellipse cx="50" cy="${p+2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,scared:`<path d="M38 ${p+2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${c} stroke-width="2.4"/><path d="M${a+12} ${o-10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,sleepy:`<ellipse cx="51" cy="${p+1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${p+2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${o-16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${o-24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,cheeky:`<path d="M40 ${p-2} Q50 ${p+7} 60 ${p-3}" ${c} stroke-width="2.8"/><path d="M50 ${p+2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,love:`<path d="M40 ${p-3} Q50 ${p+9} 60 ${p-3}" ${c} stroke-width="2.8"/>`};return s||(l+=_[n]||_.neutral,i.includes("fangs")&&(l+=`<path d="M44 ${p+1} l1.6 4 l1.6 -4 M53 ${p+1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`)),l}var Am=(n,e)=>new at(n,40,28,Math.PI/2-e,e*2,Math.PI/2-e,e*2),Lc=(n,e,t=Ze)=>new H(t*Math.sin(n)*Math.cos(e),t*Math.sin(e),t*Math.cos(n)*Math.cos(e)),ew={point:[-75,0],mouth:[-30,-100],cross:[-45,-60],head:[-15,-40],hip:[10,0]},tw={point:[20,0],mouth:[10,25],cross:[16,-70],wave:[128,22]},Em=.8,nw={sit:{y:.6,legs:[[-88,88,6],[-88,88,6]]},squat:{y:.46,legs:[[-115,135,26],[-115,135,26]]},kneel:{y:.5,legs:[[0,95,4],[0,95,4]]},crossleg:{y:.34,legs:[[-80,0,52,-125],[-80,0,52,-125]]},lie:{x:.45,y:.5},crawl:{x:0,y:.54},handstand:{y:2.12}},iw={front:0,l45:-Math.PI/4,r45:Math.PI/4,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},Yu=class extends gn{constructor(e,t,i){super(),this.c=e,this.a=t,this.b=i}getPoint(e,t=new H){return this.c.getPoint(this.a+(this.b-this.a)*e,t)}};function Ju(n,e={}){let t;try{t=new hc({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(S){return console.warn("[puppet3d] WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng, d\xF9ng b\u1EA3n 2D",S),$f(n)}n.innerHTML="";let i=t.domElement;i.className="pp pp3d",i.setAttribute("role","img"),i.setAttribute("aria-label","Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u"),n.appendChild(i),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Wt;let s=new uc,r=new Qt(30,1,.1,100),a=e.stage?{y:2,z:8.8,ly:1.5,fov:34}:{y:1.75,z:7.4,ly:1.38,fov:30};r.fov=a.fov,r.position.set(0,a.y,a.z),r.lookAt(0,a.ly,0),s.add(new Mc(16777215,14271231,e.stage?.6:1.3)),s.add(new Tc(16777215,e.stage?.15:.5));let o=new Sc(16777215,e.stage?.8:1.9);o.position.set(3,6,6),s.add(o);let c=e.stage?_m(s):null;c&&(t.shadowMap.enabled=!0,t.shadowMap.type=Du);let l=new Ke(new br(.8,32),new Ft({color:1906248,transparent:!0,opacity:c?.12:.18,depthWrite:!1}));l.rotation.x=-Math.PI/2,l.position.y=.01,s.add(l);let h=new Je;h.add(Te(ge(new mt(.5,.5,.13,28),16747039),0,.42,0));for(let[S,D]of[[-.32,-.22],[.32,-.22],[-.32,.22],[.32,.22]])h.add(Te(ge(new mt(.05,.05,.42,8),1906248,{outline:!1}),S,.21,D));h.position.z=-.2,s.add(h);let u=new Je;s.add(u);let d=new Je;d.rotation.order="YXZ",u.add(d);let f=new Je;d.add(f);let g=new Je;g.rotation.order="YXZ",g.position.y=.12,f.add(g);let y=new Je;f.add(y);let m=new Je;g.add(m);let p=new Je;p.position.set(0,.62,-.28),g.add(p);let b=new Je;b.rotation.order="YXZ",b.position.y=.66,g.add(b);let _=new Je;_.rotation.order="YXZ",b.add(_);let v=new Je;v.position.y=Ze*.9,_.add(v);let R=ge(new at(Ze,48,36),16777215);Mt(R,1.06,.95,1),v.add(R);let T=new Je;T.scale.set(1.06,.95,1),v.add(T);let C=new Je;v.add(C);for(let S of[-1,1]){let D=ge(new at(.13,16,12),16777215);Mt(D,.55,.9,.7),C.add(Te(D,S*Ze*1.03,-.04,0))}let L=ge(new at(.085,18,14),16777215,{thin:!0});Mt(L,1.1,.9,.9);let Q=Lc(0,-.14,Ze*.99);T.add(Te(L,Q.x,Q.y,Q.z));let x=new Ft({transparent:!0,depthWrite:!1}),w=new Ke(Am(Ze+.006,Ku),x);w.renderOrder=1,T.add(w);let X=new Ft({transparent:!0,depthWrite:!1}),F=new Ke(Am(Ze+.035,1.12),X);F.visible=!1,F.renderOrder=2,T.add(F);let E=[];for(let S of[-1,1]){let D=Lc(S*kt.lon,kt.lat,Ze*.93),q=new Je;q.position.copy(D),q.lookAt(D.clone().multiplyScalar(3)),T.add(q);let O=new Je;O.scale.set(1,1.08,.62),q.add(O);let z=ge(new at(kt.r,28,20),16777215,{thin:!0});O.add(z);let k=new Ke(new at(kt.r*.44,18,14),new Ft({color:1906248}));k.scale.z=.5,O.add(k);let re=new Ke(new at(kt.r*.13,10,8),new Ft({color:16777215}));O.add(re);let K=new Je;O.add(K);let _e=ge(new at(kt.r*1.08,28,14,0,Math.PI*2,0,Math.PI/2),16777215,{thin:!0});K.add(_e),E.push({g:q,inner:O,white:z,pupil:k,shine:re,lidPivot:K,lid:_e,sx:S,px:0,py:0,wx:0,wy:0})}let U=new Je;{let S=Lc(0,-.36,Ze*.985);U.position.copy(S),U.lookAt(S.clone().multiplyScalar(3));let D=ge(new at(.13,24,16),5903396,{thin:!0});D.scale.set(1.25,1,.35),U.add(D);let q=new Ke(new at(.08,16,12),new Ft({color:16743315}));q.scale.set(1.2,.6,.3),q.position.set(0,-.06,.03),U.add(q);let O=new Ke(new $t(.12,.045,.02),new Ft({color:16777215}));O.position.set(0,.095,.045),U.add(O),U.userData.hole=D,U.visible=!1,T.add(U)}let N=!1,Z=0,G=new Je;T.add(G);let xe=new Je;v.add(xe);let pe=new ws(new $i({transparent:!0,depthTest:!1,depthWrite:!1}));pe.scale.set(.5,.5,1),pe.position.set(.66,Ze+.5,.3),pe.visible=!1,v.add(pe);let W=Ic([[0,.72],[.18,.71],[.3,.64],[.38,.5],[.43,.3],[.455,.12],[.46,-.02]],36),se=ge(W,16777215);g.add(se);let ke=Ic([[.462,.14],[.47,0],[.45,-.12],[.38,-.2],[.22,-.25],[0,-.26]],36),ne=ge(ke,16777215);f.add(ne);let ue=ge(new mt(.13,.15,.16,16),16777215,{thin:!0});Te(ue,0,.72,0),g.add(ue);let ve={},Ee=.32,qe=.3,We=.3,He=.28;for(let S of["L","R"]){let D=S==="L"?-1:1,q=new Je;q.rotation.order="ZXY",q.position.set(D*.36,.5,0),g.add(q);let O=new Je;O.rotation.order="ZXY",O.position.y=-Ee,q.add(O);let z=new Je;z.position.y=-qe,O.add(z);let k=new Je;k.position.y=-.1,z.add(k);let re=ge(new at(.135,20,16),16777215,{thin:!0});Mt(re,1,1.1,.85),k.add(re);let K=ge(new _i(.045,.08,4,10),16777215,{thin:!0});Te(K,-D*.12,.04,.03),K.rotation.z=-D*.8,k.add(K);let _e=ge(new gt(.1,.035,8,18),16777215,{thin:!0});_e.rotation.x=Math.PI/2,_e.position.y=.08,k.add(_e);let $e=new ws(new $i({transparent:!0,depthWrite:!1}));$e.scale.set(.56,.56,1),$e.position.set(0,-.12,.2),$e.visible=!1,k.add($e),ve["arm"+S]=q,ve["fore"+S]=O,ve["wrist"+S]=z,ve["prop"+S]=$e,ve["hand"+S]={palm:re,thumb:K,cuff:_e}}for(let S of["L","R"]){let D=S==="L"?-1:1,q=new Je;q.rotation.order="ZXY",q.position.set(D*.2,-.08,0),f.add(q);let O=new Je;O.rotation.order="ZXY",O.position.y=-We,q.add(O);let z=new Je;z.position.y=-He,O.add(z);let k=ge(new at(.2,22,16),16777215);Mt(k,.95,.62,1.35),Te(k,D*.02,-.08,.08),z.add(k);let re=ge(new mt(.17,.19,.05,20),16777215,{thin:!0});Mt(re,1,1,1.4),Te(re,D*.02,-.18,.09),z.add(re),ve["leg"+S]=q,ve["shin"+S]=O,ve["ankle"+S]=z,ve["shoe"+S]=k,ve["sole"+S]=re}let Ge=new Je;Ge.position.set(0,.02,-.4),f.add(Ge);let ae={},I=(S,D)=>{let q=Rs(16777215),O=new Ke(new As(new Ss(new H,new H(0,-.1,0),new H(0,-.2,0)),4,D,8),q);O.castShadow=!0;let z=new Ke(O.geometry,Zu);u.add(O,z),ae[S]={m:O,o:z,r:D,mat:q,len:1}};for(let S of["L","R"])I("arm"+S,.082),I("sleeve"+S,.118),I("leg"+S,.105),I("pant"+S,.14);let le=co.tron,fe={skin:"tron",head:""},ye="",Ae=!1,Fe=[],Re=(S,D)=>S.userData.mesh.material.color.set(D);function P(S){let D={skin:co[S?.skin]?S.skin:"tron",head:S?.head||""},q=D.skin+"|"+D.head;if(q===ye)return;ye=q,fe=D,le=co[fe.skin];let O=le.extra||{};for(let z of[R,L,ue,...C.children])Re(z,le.skin);for(let z of E)Re(z.lid,le.skin);Re(se,O.aodai||le.top),Re(ne,O.dress||le.bottom);for(let z of["L","R"]){let k=le.gloves||le.skin;Re(ve["hand"+z].palm,k),Re(ve["hand"+z].thumb,k),Re(ve["hand"+z].cuff,le.gloves?le.gloves:le.sleeve>=.95?O.coat||le.top:le.skin),ve["hand"+z].cuff.visible=!!le.gloves||le.sleeve>=.95,Re(ve["shoe"+z],le.shoes),Re(ve["sole"+z],"#ffffff"),ae["arm"+z].mat.color.set(le.gloves&&le.sleeve>=.95?O.coat||le.top:le.arms||le.skin),ae["sleeve"+z].mat.color.set(O.coat||O.aodai||le.top),ae["sleeve"+z].len=Math.max(.12,le.sleeve??.3),ae["leg"+z].mat.color.set(le.legs||le.skin),ae["pant"+z].mat.color.set((O.aodai,le.bottom)),ae["pant"+z].len=O.dress?.001:Math.max(.12,le.pants??1)}Ue(),fe.head?M(fe.head):F.visible=!1,Se="",Ye()}function M(S){let D=new Image;/^https?:/.test(S)&&(D.crossOrigin="anonymous"),D.onload=()=>{try{let q=document.createElement("canvas");q.width=q.height=256;let O=q.getContext("2d");O.beginPath(),O.arc(128,128,124,0,Math.PI*2),O.clip();let z=Math.min(D.width,D.height);O.drawImage(D,(D.width-z)/2,(D.height-z)/2,z,z,0,0,256,256);let k=new ti(q);k.colorSpace=Wt,X.map?.dispose(),X.map=k,X.needsUpdate=!0,F.visible=!0,Se="",Ye()}catch{F.visible=!1}},D.onerror=()=>{F.visible=!1},D.src=S}function Y(S){for(;S.children.length;)S.children.pop().traverse(q=>{q.isMesh&&!bm.has(q.material)&&(q.geometry.dispose(),q.material.dispose())})}let J=(S,D,q={})=>ge(new at(S,24,18),D,q);function ce(S,D=1.15,q=-.3,O=1.07,z=2.1){let k=new Je;return k.add(_t(ge(new at(Ze*O,36,20,0,Math.PI*2,0,D),S),q,0,0)),k.add(ge(new at(Ze*(O-.012),36,20,Math.PI,Math.PI,0,z),S)),k}function oe(S,D){let q=new Je,O=z=>(q.add(z),z);switch(S){case"ahoge":{O(ce(D)),O(_t(Mt(Te(J(.3,D),.14,.43,.36),1.25,.42,.75),.4,0,-.35)),O(_t(Mt(Te(J(.3,D),-.32,.38,.28),.65,.45,.7),.3,0,.5));let z=ge(new gt(.15,.04,8,18,Math.PI*1.25),D,{thin:!0});Te(z,.05,Ze+.1,0),z.rotation.z=.5,z.name="ahoge",O(z);break}case"short":O(ce(D,1.05,-.25)),O(_t(Mt(Te(J(.3,D),0,.45,.32),1.5,.35,.7),.45,0,0));break;case"spiky":{O(ce(D,1.1,-.25));for(let z=0;z<7;z++){let k=(z/6-.5)*2.2,re=ge(new qt(.12,.34,10),D,{thin:!0});Te(re,Math.sin(k)*.42,.52+Math.cos(k)*.1,Math.cos(k)*.12-.05),re.rotation.set(-.3,0,-k*.55),O(re)}break}case"messy":{O(ce(D,1,-.2));for(let[z,k,re,K]of[[-.5,.25,0,.22],[.5,.25,0,.22],[-.3,.52,-.1,.24],[.3,.52,-.1,.24],[0,.62,0,.24],[-.55,-.05,-.15,.18],[.55,-.05,-.15,.18],[0,.4,-.45,.26]])O(Te(J(K,D),z,k,re));break}case"slick":O(ce(D,1.15,-.45)),O(_t(Mt(Te(J(.3,D),.05,.47,.25),1.55,.42,1),.2,0,.12));break;case"bob":case"long":case"wavy":case"pigtails":case"bun":{if(q.add(ge(new at(Ze*1.1,36,20,Math.PI/2+.8,Math.PI*2-1.6,0,S==="long"||S==="wavy"?2.35:2),D)),O(_t(Mt(Te(J(.3,D),0,.42,.38),1.6,.42,.7),.4,0,0)),O(ce(D,1,-.15,1.09)),S==="long"&&O(Mt(Te(J(.42,D),0,-.45,-.32),1.25,1.2,.6)),S==="wavy")for(let z of[-1,1])for(let k=0;k<3;k++)O(Te(J(.17,D),z*(.58-k*.05),-.25-k*.2,-.05-k*.05));if(S==="pigtails")for(let z of[-1,1])O(Te(J(.24,D),z*.72,.2,-.12)),O(Te(J(.08,16727435,{thin:!0}),z*.6,.36,-.1));S==="bun"&&O(Te(J(.26,D),0,.42,-.5));break}case"mohawk":for(let z=0;z<5;z++){let k=ge(new qt(.11,.4,8),D,{thin:!0});Te(k,0,.6-Math.abs(z-2)*.05,.3-z*.2),k.rotation.x=-.3-z*.25,O(k)}break;default:break}return q}function Be(S,D){let q=new Je,O=k=>(q.add(k),k),z=D.hatColor||"#ff3d4f";switch(S){case"nonla":O(Te(ge(new qt(1.05,.55,40,1,!0),15914122,{mat:Rs(15914122,{side:Ot})}),0,Ze*.86,0));break;case"ninja":{O(ce(z,1.55,-.65,1.04,2.4)),O(ge(new at(Ze*1.035,36,16,Math.PI/2-1.3,2.6,1.82,.85),z));let k=ge(new gt(Ze*1.05,.06,10,40),16727375,{thin:!0});k.rotation.x=Math.PI/2-.12,k.position.y=.26,O(k);for(let re of[.2,-.15])O(_t(Te(ge(new $t(.08,.05,.45),16727375,{thin:!0}),.2+re,.2,-Ze-.14),.5,re,.3));break}case"bubble":{O(new Ke(new at(Ze*1.42,32,24),new Ft({color:12576511,transparent:!0,opacity:.18,depthWrite:!1})));let k=ge(new gt(.52,.09,10,30),14672885);k.rotation.x=Math.PI/2,k.position.y=-Ze*.92,O(k),O(Te(J(.06,16727375,{thin:!0}),.55,.7,0));break}case"helmet":{O(_t(ge(new at(Ze*1.13,36,18,0,Math.PI*2,0,1.35),z),-.2,0,0)),O(_t(Te(ge(new mt(.03,.03,.5,6),1906248,{outline:!1}),0,-.48,.25),.5,0,Math.PI/2)),O(Te(Mt(J(.06,16777215,{thin:!0}),1,1,.5),0,.7,.28));break}case"fullhelmet":{O(_t(ge(new at(Ze*1.15,36,20,0,Math.PI*2,0,1.55),z),-.35,0,0)),O(ge(new at(Ze*1.14,36,20,Math.PI,Math.PI,0,2.3),z)),O(_t(Mt(Te(J(.3,1906248),0,.42,.42),1.4,.3,.6),.6,0,0));break}case"cap":case"capBack":{O(_t(ge(new at(Ze*1.1,36,18,0,Math.PI*2,0,1.2),z),-.15,0,0));let k=ge(new mt(.42,.42,.04,28,1,!1,-Math.PI/2,Math.PI),z);S==="cap"?Te(k,0,.32,.45):(Te(k,0,.32,-.45),k.rotation.y=Math.PI),k.rotation.x+=S==="cap"?.12:-.12,O(k),S==="cap"&&O(Te(Mt(J(.08,16763197,{thin:!0}),1,1,.4),0,.55,.52));break}case"chef":{O(Te(ge(new mt(.5,.5,.36,28),16777215),0,.62,-.05));for(let[k,re]of[[-.25,0],[.25,0],[0,.2],[0,-.2],[0,0]])O(Te(J(.3,16777215),k,.98,re-.05));break}case"crown":{let k=ge(new mt(.38,.34,.22,10,1,!0),16763197,{mat:Rs(16763197,{side:Ot})});Te(k,0,.66,0),O(k);for(let re=0;re<5;re++){let K=re/5*Math.PI*2;O(Te(ge(new qt(.08,.2,8),16763197,{thin:!0}),Math.sin(K)*.34,.86,Math.cos(K)*.34))}O(Te(J(.06,16727375,{thin:!0}),0,.68,.38));break}case"tiara":{let k=ge(new gt(.4,.03,8,30,Math.PI),16769162,{thin:!0});Te(k,0,.5,.1),k.rotation.x=-.4,O(k),O(Te(ge(new qt(.08,.22,4),16769162,{thin:!0}),0,.72,.28)),O(Te(J(.05,16740277,{thin:!0}),0,.62,.36));break}case"tricorn":{O(_t(ge(new at(Ze*1.08,32,16,0,Math.PI*2,0,1.15),z),-.1,0,0));let k=new ni;k.moveTo(-.95,0),k.quadraticCurveTo(-.7,.62,0,.7),k.quadraticCurveTo(.7,.62,.95,0),k.quadraticCurveTo(0,.18,-.95,0);let re=ge(new qi(k,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),z);Te(re,0,.42,-.06),re.rotation.x=-.12,O(re),O(Te(Mt(J(.1,16777215,{thin:!0}),1,1,.35),0,.82,.1));let K=ge(new gt(.06,.02,6,12),16763197,{outline:!1});Te(K,0,.82,.14),O(K);break}case"santa":{let k=ge(new qt(.58,1,28),15217738);Te(k,.12,.92,-.08),k.rotation.z=-.45,O(k);let re=ge(new gt(.58,.12,12,30),16777215);re.rotation.x=Math.PI/2-.1,re.position.y=.48,O(re),O(Te(J(.14,16777215),.62,1.22,-.08));break}case"fire":{O(_t(ge(new at(Ze*1.14,36,18,0,Math.PI*2,0,1.3),z),-.15,0,0));let k=ge(new mt(.85,.85,.05,32),z);k.position.set(0,.28,-.12),k.rotation.x=-.18,O(k),O(Te(Mt(J(.13,16763197,{thin:!0}),1,1.2,.35),0,.62,.48));break}case"band":{let k=ge(new gt(Ze*1.05,.065,10,40),z,{thin:!0});k.rotation.x=Math.PI/2-.15,k.position.y=.3,O(k);break}case"mirror":{let k=ge(new gt(Ze*1.05,.04,8,40),1906248,{thin:!0});k.rotation.x=Math.PI/2-.2,k.position.y=.3,O(k);let re=ge(new mt(.15,.15,.04,24),14674175);re.rotation.x=Math.PI/2-.2,re.position.set(0,.5,.52),O(re);break}case"turban":{let k=ge(new gt(Ze*.95,.13,12,36),z);k.rotation.x=Math.PI/2-.1,k.position.y=.32,O(k),O(ce(z,.9,-.1,1.04));break}case"veil":{let k=new Ke(new at(Ze*1.2,32,18,Math.PI/2+.95,Math.PI*2-1.9,.3,2.5),new Ft({color:16777215,transparent:!0,opacity:.6,side:Ot,depthWrite:!1}));k.scale.set(1.05,1.15,1.1),k.position.y=-.12,O(k),O(Te(J(.08,16761564,{thin:!0}),-.35,.5,.25)),O(Te(J(.07,16777215,{thin:!0}),-.25,.56,.3));break}case"phones":{let k=ge(new gt(Ze*1.1,.05,8,30,Math.PI),z,{thin:!0});k.position.y=.05,O(k);for(let re of[-1,1]){let K=ge(new mt(.2,.2,.14,22),z);K.rotation.z=Math.PI/2,K.position.set(re*Ze*1.05,.02,0),O(K),O(Te(_t(ge(new mt(.12,.12,.02,18),3729568,{outline:!1}),0,0,Math.PI/2),re*Ze*1.13,.02,0))}break}case"scarfHead":{O(_t(ge(new at(Ze*1.1,36,18,0,Math.PI*2,0,1.3),z),-.45,0,0)),O(_t(Te(ge(new qt(.12,.3,10),z,{thin:!0}),0,.15,-.68),-2.2,0,0));break}case"beanie":{O(_t(ge(new at(Ze*1.1,36,18,0,Math.PI*2,0,1.35),z),-.15,0,0));let k=ge(new gt(Ze*.98,.09,10,36),z);k.rotation.x=Math.PI/2-.15,k.position.y=.22,O(k),O(Te(J(.15,16777215),0,.82,-.05));break}case"hood":{let k=ge(new at(Ze*1.16,40,24,Math.PI/2+.95,Math.PI*2-1.9,0,2.6),z);O(k),O(ge(new at(Ze*1.16,40,20,0,Math.PI*2,0,.95),z));let re=ge(new gt(Ze*.86,.07,10,36),z);re.position.z=.42,re.scale.set(1,1.1,1),O(re);let K=D.hood;for(let _e of[-1,1])K==="bear"&&(O(Te(J(.2,z),_e*.5,.55,-.05)),O(Te(Mt(J(.11,15913641,{outline:!1}),1,1,.4),_e*.52,.56,.1))),K==="cat"&&O(_t(Te(ge(new qt(.2,.36,4),z),_e*.38,.7,0),0,0,-_e*.4)),K==="dog"&&O(_t(Mt(Te(J(.2,11036974),_e*.66,.1,0),.7,1.6,.5),0,0,_e*.3)),K==="frog"&&(O(Te(J(.2,z),_e*.3,.68,.1)),O(Te(J(.12,16777215,{thin:!0}),_e*.3,.72,.24)),O(Te(J(.06,1906248,{outline:!1}),_e*.3,.73,.34)));if(K==="dino")for(let _e=0;_e<5;_e++){let $e=ge(new qt(.11,.26,4),16763197,{thin:!0}),tt=.4-_e*.45;Te($e,0,Math.cos(tt)*.72,Math.sin(tt)*.72),$e.rotation.x=tt,O($e)}break}default:break}return q}function Pe(S,D){let q=new Je,O=k=>(q.add(k),k),z=(k,re,K=Ze)=>Lc(k,re,K);for(let k of S||[]){if(k==="glasses"){for(let re of[-1,1]){let K=z(re*kt.lon,kt.lat,Ze*1.12),_e=ge(new gt(.19,.022,8,28),1906248,{outline:!1});Te(_e,K.x,K.y,K.z),_e.lookAt(K.clone().multiplyScalar(3)),O(_e)}O(Te(ge(new mt(.018,.018,.2,6),1906248,{outline:!1}),0,kt.lat*Ze*.95+.02,Ze*1.1)).rotation.z=Math.PI/2}if(k==="shades"){let re=ge(new Mi(.98,.24,.1,3,.05),1314862),K=z(0,kt.lat,Ze*1.06);Te(re,0,K.y,K.z),O(re),O(Te(Mt(J(.05,16777215,{outline:!1}),1.8,.6,.3),-.3,K.y+.04,K.z+.06))}if(k==="mustache"||k==="curly"){let re=D.hair==="#eeeef5"?"#eeeef5":"#2a1a14";for(let K of[-1,1]){let _e=z(K*.12,-.24,Ze*1),$e=Mt(J(.1,re,{thin:!0}),1.5,.6,.6);if(Te($e,_e.x,_e.y,_e.z),$e.rotation.z=K*.3,O($e),k==="curly"){let tt=ge(new gt(.06,.025,6,12,Math.PI*1.5),re,{thin:!0});Te(tt,_e.x+K*.14,_e.y+.05,_e.z-.02),tt.rotation.z=K>0?0:Math.PI,O(tt)}}}if(k==="beard"){let re=D.beard||"#eeeef5",K=ge(new at(Ze*.82,32,18,Math.PI/2-1.1,2.2,1.85,1.05),re);K.position.set(0,-.06,.12),O(K),O(Mt(Te(J(.26,re),0,-.62,.32),1.2,.9,.7))}if(k==="patch"){let re=z(kt.lon,kt.lat,Ze*1.06),K=ge(new mt(.17,.17,.04,20),1314862,{thin:!0});Te(K,re.x,re.y,re.z),K.lookAt(re.clone().multiplyScalar(3)),K.rotateX(Math.PI/2),O(K)}}return q}function Ue(){Y(G),Y(m),Y(p),Y(y);let S=le,D=S.extra||{},q=!!fe.head,O=S.hat==="hood";(!q||O)&&G.add(oe(S.hairStyle,S.hair)),S.hat&&G.add(Be(S.hat,S));let z=(S.face||[]).filter(K=>["glasses","shades","mustache","curly","beard","patch"].includes(K));q||G.add(Pe(z,S)),Fe=S.face||[],Ae=z.includes("shades")||q,C.visible=!O&&!["helmet","fullhelmet","ninja","fire","phones","scarfHead","beanie"].includes(S.hat);let k=K=>(m.add(K),K),re=K=>(y.add(K),K);if(D.dress&&(re(Te(ge(Ic([[.44,.12],[.5,-.05],[.62,-.3],[.7,-.45],[0,-.45]],36),D.dress),0,0,0)),re(Te(ge(new gt(.68,.035,8,40),D.dress,{thin:!0}),0,-.45,0)).rotation.x=Math.PI/2),D.aodai){for(let K of[1,-1]){let _e=ge(new Mi(.5,.62,.04,3,.02),D.aodai,{thin:!0});Te(_e,0,-.36,K*.37),_e.rotation.x=K*.28,k(_e)}k(Te(ge(new mt(.15,.16,.12,18),D.aodai,{thin:!0}),0,.72,0))}if(D.coat){let K=ge(Ic([[.34,.66],[.44,.5],[.49,.28],[.51,.05],[.54,-.2],[.57,-.45]],36,Math.PI/2+.42,Math.PI*2-.84),D.coat,{outline:!1,mat:Rs(D.coat,{side:Ot})});k(K);for(let _e of[-1,1])k(_t(Te(ge(new $t(.16,.3,.03),D.coat,{thin:!0}),_e*.2,.52,.36),-.5,0,_e*.5))}if(D.vest)for(let K of[-1,1])k(_t(Te(ge(new $t(.2,.62,.05),D.vest,{thin:!0}),K*.27,.32,.4),.05,K*.4,0));if(D.apron){k(Te(ge(new Mi(.56,.78,.04,3,.02),D.apron),0,.12,.45)).rotation.x=-.1;let K=ge(new gt(.3,.02,6,24,Math.PI),D.apron,{thin:!0});K.position.set(0,.5,.28),K.rotation.x=-.6,k(K)}if(D.tie&&(k(_t(Te(ge(new $t(.1,.36,.04),D.tie,{thin:!0}),0,.46,.38),-.2,0,0)),k(Te(ge(new qt(.07,.1,4),D.tie,{thin:!0}),0,.25,.43)).rotation.x=Math.PI),D.scarf){let K=ge(new gt(.2,.08,10,24),D.scarf);K.rotation.x=Math.PI/2,K.position.y=.68,k(K),k(_t(Te(ge(new Mi(.13,.32,.05,2,.02),D.scarf,{thin:!0}),.12,.5,.3),-.35,0,.25))}if(D.collar){let K=ge(new mt(.45,.22,.4,24,1,!0,Math.PI*.75,Math.PI*1.5),D.collar,{mat:Rs(D.collar,{side:Ot})});K.position.set(0,.86,-.04),k(K)}if(D.pack&&k(Te(ge(new Mi(.56,.6,.28,3,.1),D.pack),0,.32,-.44)),D.box&&(k(Te(ge(new Mi(.82,.74,.5,3,.06),D.box),0,.42,-.62)),k(Te(ge(new $t(.4,.06,.02),16777215,{outline:!1}),0,.5,-.36))),D.belly&&k(Mt(Te(J(.3,D.belly,{outline:!1}),0,.2,.33),1,1.15,.45)),D.chain){let K=ge(new gt(.24,.025,8,30),16763197,{thin:!0});K.position.set(0,.56,.18),K.rotation.x=Math.PI/2-.9,k(K),k(Te(J(.06,16763197,{thin:!0}),0,.37,.4))}if(D.star){let K=new ni;for(let _e=0;_e<10;_e++){let $e=_e/10*Math.PI*2-Math.PI/2,tt=_e%2?.07:.16;K[_e?"lineTo":"moveTo"](Math.cos($e)*tt,-Math.sin($e)*tt)}k(Te(ge(new qi(K,{depth:.04,bevelEnabled:!1}),D.star,{thin:!0}),0,.36,.42))}if(D.badge&&(k(Te(ge(new mt(.07,.07,.03,16),16763197,{thin:!0}),.2,.42,.4)).rotation.x=Math.PI/2),D.whistle&&(k(Te(ge(new _i(.04,.08,4,8),14672885,{thin:!0}),-.16,.38,.42)).rotation.z=Math.PI/2),D.belt){let K=ge(new gt(.455,.045,8,40),D.belt,{thin:!0});K.rotation.x=Math.PI/2,K.position.y=0,k(K)}if(D.cape){let K=ge(new mt(.4,.7,1.3,24,6,!0,Math.PI*.6,Math.PI*.8),D.cape,{mat:Rs(D.cape,{side:Ot})});K.position.set(0,-.62,.22),p.add(K)}}let we=null,ie=null;function he(S){if(S===we)return;we=S,Y(xe);let D=(q,O,z,k,re=0,K=0)=>{q.position.set(O,z,k),q.rotation.set(K,0,re),xe.add(q)};for(let q of[-1,1]){if(S==="dog"&&D(Mt(J(.2,13208402),.75,1.6,.45),q*.66,0,.05,q*.25),S==="cat"&&D(ge(new qt(.2,.36,4),13208402),q*.38,.66,0,-q*.45),S==="bunny"){let O=ge(new _i(.11,.5,6,12),16777215);D(O,q*.22,.95,-.05,-q*.18)}S==="mouse"&&D(ge(new mt(.26,.26,.06,24),12171721),q*.55,.5,-.05,0,Math.PI/2),S==="horns"&&D(ge(new qt(.09,.32,12),15921382),q*.36,.66,0,-q*.55),S==="antenna"&&(D(ge(new mt(.02,.02,.45,6),1906248,{outline:!1}),q*.26,.82,0,-q*.35),D(J(.09,16763197),q*.35,1.02,0))}}function Oe(S){if(S!==ie){if(ie=S,Y(Ge),S==="dog"){let D=new _i(.08,.3,6,12);D.translate(0,.2,0);let q=ge(D,13208402);q.rotation.x=-.7,Ge.add(q)}if(S==="cat"&&Ge.add(ge(new As(new Ca([new H(0,0,0),new H(0,.15,-.35),new H(0,.55,-.5),new H(.1,.8,-.35)]),24,.06,8),13208402)),S==="pig"){let D=ge(new gt(.1,.04,8,20,Math.PI*1.7),16753592);D.rotation.y=Math.PI/2,Ge.add(D)}if(S==="dino"){let D=ge(new qt(.28,1,16),3129201);D.rotation.x=-Math.PI/2-.5,D.position.set(0,-.15,-.35),Ge.add(D)}}}let Se="",me={},Xe={happy:!0,love:!0};function Ye(){let S=me.face||"neutral",D=F.visible,q=!D&&!Ae&&!Xe[S],O=S==="cheeky";for(let k of E)k.g.visible=q&&!(O&&k.sx<0);let z=`${S}|${q}|${D}|${Fe.join(",")}|${Ae}|${N}`;z!==Se&&(Se=z,x.map=jb(z,D?"":Qb(S,{eyes3D:q||Ae,wink:O,extras:Fe,noMouth:N})),x.needsUpdate=!0),w.visible=!D,L.visible=!D,D&&S!=="neutral"&&uo[S]?(pe.material.map=wm(uo[S]),pe.material.needsUpdate=!0,pe.visible=!0):pe.visible=!1}let ct=new Map;function B(S,D,q=.16,O=.72){let z=ct.get(S);return z||(z={v:0,x:D},ct.set(S,z)),z.v=(z.v+(D-z.x)*q)*O,z.x+=z.v,z.x}let Ie=S=>ct.get(S)?.v||0,te=null,de=null,De=0;function Ne(S){let D=JSON.stringify({...me,fx:0})!==JSON.stringify({...S,fx:0});me={...S},D&&(De=performance.now()),he(S.ears||null),Oe(S.tail||null);for(let q of["L","R"]){let O=S["prop"+q],z=ve["prop"+q];O&&ho[O]?(z.material.map=wm(ho[O]),z.material.needsUpdate=!0,z.visible=!0):z.visible=!1}S.fx&&S.fx.seq!==de&&(de=S.fx.seq,Date.now()-(S.fx.at||0)<4e3&&(te={name:S.fx.name,t0:performance.now()})),Ye()}function st(S){let D={x:0,y:0,r:0};if(!S)return D;let q=/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(S);q&&(D.x=+q[1],D.y=+q[2]);let O=/rotate\(([-\d.]+)deg\)/.exec(S);return O&&(D.r=+O[1]),D}let bt=new H,Xt=new H,ot=new H,Ht=new H,wn=new H;function ii(S,D){return D.setFromMatrixPosition(S.matrixWorld),u.worldToLocal(D)}function Cr(S,D,q,O,z){wn.copy(D).add(O).multiplyScalar(.5),Ht.copy(q).multiplyScalar(2).sub(wn),Ht.lerp(q,.25);let k=new Ss(D.clone(),Ht.clone(),O.clone()),re=ae[S],K=new As(k,16,re.r,10);re.m.geometry.dispose(),re.m.geometry=K,re.o.geometry=K;let _e=ae[z];if(_e.len<.01){_e.m.visible=_e.o.visible=!1;return}_e.m.visible=_e.o.visible=!0;let $e=new As(new Yu(k,0,Math.min(1,_e.len)),10,_e.r,10);_e.m.geometry.dispose(),_e.m.geometry=$e,_e.o.geometry=$e}let hn=0,$n=0,Rr=!0,Ls=0,Zi=performance.now()+2200,Pr=0,Ki=0,Ir=0,Lr=new ResizeObserver(()=>Ba());Lr.observe(n);function Ba(){let S=n.getBoundingClientRect();if(!S.width||!S.height||S.width===hn&&S.height===$n)return;hn=S.width,$n=S.height,t.setSize(hn,$n,!1),r.aspect=hn/$n;let D=c?1.25:.75;r.position.z=hn/$n<D?a.z/Math.max(.5,hn/$n/D):a.z,r.updateProjectionMatrix()}function za(S){if(!Rr)return;if(!i.isConnected){j();return}Ls=requestAnimationFrame(za),Ba();let D=S/1e3,q=la[me.body]||la.stand,O=st(q.t),z=me.loop,k=(Ce,lt=0)=>Math.sin(D*Math.PI*2*Ce+lt),re=nw[me.body]||{},K=re.x??O.x*Mm,_e=re.y??Em-O.y*Mm,$e=-O.r*bn,tt=0,Yt=0,nt=me.body==="crawl";nt&&($e=0,Yt=68*bn,tt=-1),me.body==="lie"&&(tt=.25);let ze=0,xt=N?B("talk",Z,.45,.5):0;!z&&!te&&(ze=Math.abs(k(.55))*.025),z==="walk"&&(ze=Math.abs(k(1.3))*.1,$e+=k(1.3)*.08),z==="run"&&(ze=Math.abs(k(2.4))*.22,Yt+=.25),z==="butt"&&(K+=k(2.9)*.14,$e+=k(2.9)*.16,tt+=k(2.9)*.2),z==="dance"&&($e+=k(1)*.2,K+=k(1)*.12,ze=Math.abs(k(2))*.12),z==="shiver"&&(K+=k(11)*.03),z==="row"&&($e+=k(.5)*.08),z==="flap"&&(ze=Math.abs(k(3))*.06);let it=0,un=0,kn=0,Zt=0;if(te){let Ce=(S-te.t0)/1e3;if(te.name==="jump")if(Ce<.95){let lt=Math.min(1,Math.max(0,(Ce-.12)/.7));it=Math.sin(lt*Math.PI)*1.2,Zt=Ce<.12?-.18*Math.sin(Ce/.12*Math.PI):lt>=1?-.15*Math.sin((Ce-.82)/.13*Math.PI):.1*Math.sin(lt*Math.PI)}else te=null;else if(te.name==="spin")Ce<.9?(un=(1-Math.pow(1-Ce/.9,3))*Math.PI*2,it=Math.sin(Ce/.9*Math.PI)*.3):te=null;else if(te.name==="fall")Ce<1.8?kn=Math.min(1,Ce/.35)*(Ce>1.4?(1.8-Ce)/.4:1)*1.45:te=null;else if(te.name==="bounce")if(Ce<1.1){let lt=Ce*Math.PI*3.6;it=Math.abs(Math.sin(lt))*.32*(1-Ce/1.1),Zt=(Math.abs(Math.sin(lt))<.3?-.14:.06)*(1-Ce/1.1)}else te=null}if(N){ze+=xt*.1;let Ce=Math.max(.06,Math.min(1,xt*1.6));U.scale.set(.8+Ce*.35,.2+Ce*1.1,1)}u.rotation.y=B("turn",iw[me.turn]??0,.12,.74);let Dr=B("hy",_e+ze,.18,.7);d.position.set(B("hx",K),Dr+it,0),d.rotation.set(B("hrx",Yt),B("hry",tt)+un,B("hrz",$e)+kn),kn&&(d.position.x+=Math.sin(kn)*.75);let wt=De?Math.exp(-(S-De)/160)*Math.sin((S-De)/45)*.07:0,qn=Math.max(-.2,Math.min(.2,Ie("hy")*1.6+Zt+wt)),ji=B("sq",qn,.3,.6);f.scale.set(1-ji*.6,1+ji,1-ji*.6);let nn=0,Qi=0;nn=-st(q.torso).r*bn,me.body==="bow"&&(Qi=.85),z==="run"&&(Qi+=.15);let Ds=z?1:1+k(.4)*.02;g.rotation.set(B("trx",Qi,.12,.74),0,B("trz",nn,.12,.74)),g.scale.set(1/Ds,Ds,1/Ds),h.visible=!!q.stool,p.rotation.x=B("cape",.15+Math.min(.9,Math.abs(Ie("hx"))*6+(z==="run"?.8:0)+(it?.5:0))+k(.7)*.05,.1,.8);let kr=-((Cl[me.head]??0)+(nt?0:q.head||0))*bn,ks=nt?-1:0,Fc=0;me.head==="up"&&(ks=-.38),(me.head==="down"||q.headDown&&(!me.head||me.head==="center"))&&(ks=.38),me.body==="bow"&&(ks-=.3),z||(kr+=k(.3)*.07,Fc+=k(.17)*.12),N&&(ks-=xt*.35,kr+=Math.sin(D*7.3)*xt*.12),z==="nod"&&(ks+=k(2.5)*.3),z==="shake"&&(Fc+=k(2.2)*.6),z==="dance"&&(kr+=k(2)*.18),z==="walk"&&(kr+=k(1.3)*.06),b.rotation.set(B("nx",ks,.14,.72),B("ny",Fc,.14,.72),B("nz",kr,.14,.72)),_.rotation.set(B("jx",-Ie("hy")*2.2+Ie("trx")*2,.22,.62),0,B("jz",Ie("hx")*2.5-Ie("hrz")*1.6,.22,.62));for(let Ce of["L","R"]){let lt=Ce==="L"?1:-1,It=me["arm"+Ce]||"down",Sn=Ce==="L"?0:1,St,Ut,Rt=0,Nt=0;if(nt&&It==="down")St=6*lt,Ut=0,Rt=-68;else if(q.absArms&&It==="down")St=q.absArms[Sn][0],Ut=q.absArms[Sn][1];else{let es=tw[It]||oa[It]||oa.down;St=es[0]*lt,Ut=es[1]*lt;let Un=ew[It];Un&&(Rt=Un[0],Nt=Un[1])}It==="down"&&!z&&!nt&&(St+=6*lt+k(.55,Sn)*3*lt);let dn=Ce==="L"?0:Math.PI;if(z==="walk"&&(Rt+=k(1.3,dn)*32),z==="run"&&(Rt+=k(2.4,dn)*60,Nt-=70),z==="dance"&&(St+=(k(2,dn)*30+30)*lt,Nt-=30),z==="flap"&&(St+=(.5+.5*k(3))*75*lt,Ut-=k(3)*20*lt),z==="swim"&&(Rt+=(D*360*.9+(Ce==="L"?0:180))%360*-1),z==="clap"&&(Rt+=-72,St+=(Ce==="L"?-1:1)*(14+k(3.5)*14),Nt-=20),z==="punch"){let es=Math.max(0,k(2,dn));Rt+=-88*es,Nt+=-80*(1-es)}z==="row"&&(Rt+=k(1)*40-30,Nt-=40),z==="shiver"&&(St+=k(9,dn)*4),It==="wave"&&(Ut+=k(2.8)*32*lt),N&&It==="down"&&!z&&(St+=xt*(40+Math.sin(D*9+Sn*2)*25)*lt,Ut-=xt*50*lt),ve["arm"+Ce].rotation.set(B("ux"+Ce,Rt*bn,.15,.7),0,B("uz"+Ce,-St*bn,.15,.7)),ve["fore"+Ce].rotation.set(B("fx"+Ce,Nt*bn,.11,.72),0,B("fz"+Ce,-Ut*bn,.11,.72))}for(let Ce of["L","R"]){let lt=Ce==="L"?1:-1,It=me["leg"+Ce]||"down",Sn=Ce==="L"?0:1,St,Ut,Rt=0,Nt=0;if(nt&&It==="down")Rt=-66,Nt=95,St=6*lt,Ut=0;else if(re.legs&&It==="down"){let Un=re.legs[Sn];Rt=Un[0],Nt=Un[1],St=(Un[2]||0)*lt,Ut=(Un[3]||0)*lt}else if(q.absLegs&&It==="down")St=q.absLegs[Sn][0],Ut=q.absLegs[Sn][1];else{let Un=q.legs?q.legs[Sn]:ca[It]||ca.down;St=Un[0]*lt,Ut=Un[1]*lt}It==="kick"&&(Rt=-65,St*=.5),It==="knee"&&(Rt=-70,Nt=100,St=8*lt,Ut=0);let dn=Ce==="L"?Math.PI:0;z==="walk"&&(Rt+=k(1.3,dn)*32,Nt+=Math.max(0,k(1.3,dn+1.2))*40),z==="run"&&(Rt+=k(2.4,dn)*58,Nt+=Math.max(0,k(2.4,dn+1.2))*90),z==="dance"&&(Nt+=Math.max(0,k(2,dn))*40,Rt-=Math.max(0,k(2,dn))*25),z==="butt"&&(Nt+=20),ve["leg"+Ce].rotation.set(B("lx"+Ce,Rt*bn,.15,.7),0,B("lz"+Ce,-St*bn,.15,.7)),ve["shin"+Ce].rotation.set(B("kx"+Ce,Nt*bn,.12,.72),0,B("kz"+Ce,-Ut*bn,.12,.72));let es=me.body==="crawl"||me.body==="lie"||me.body==="handstand"?0:-(Rt+Nt)*bn*.6;ve["ankle"+Ce].rotation.x=B("ax"+Ce,es,.15,.7)}u.updateMatrixWorld(!0);for(let Ce of["L","R"])Cr("arm"+Ce,ii(ve["arm"+Ce],bt),ii(ve["fore"+Ce],Xt),ii(ve["wrist"+Ce],ot),"sleeve"+Ce),Cr("leg"+Ce,ii(ve["leg"+Ce],bt),ii(ve["shin"+Ce],Xt),ii(ve["ankle"+Ce],ot),"pant"+Ce);Ge.rotation.set(nt?-.4:0,k(2.2)*.5,0);let Xn=me.face||"neutral";S>Pr&&(Pr=S+700+Math.random()*1800,Ki=(Math.random()-.5)*.9,Ir=(Math.random()-.5)*.6);let Km={neutral:.42,angry:.52,sad:.4,surprised:.05,scared:.08,sleepy:.72,cheeky:.38}[Xn]??.4,rd={surprised:.75,scared:.55,angry:.9}[Xn]??1,Jm={surprised:1.18,scared:1.12}[Xn]??1,jm=A(S);for(let Ce of E){if(!Ce.g.visible)continue;let lt=Ki*.5+(Ce.sx<0?.18:-.08),It=Ir*.4+(Ce.sx<0?-.05:.12);Xn==="sad"&&(It=-.45),Xn==="scared"&&(lt=Math.sin(S/37+Ce.sx)*.2,It=.1),Xn==="angry"&&(lt=-Ce.sx*.25,It=0),Xn==="surprised"&&(lt*=.3,It=.05),Ce.px=B("px"+Ce.sx,lt,.12,.6)+Ie("nz")*4*Ce.sx,Ce.py=B("py"+Ce.sx,It,.12,.6)-Ie("hy")*3;let Sn=kt.r*.5,St=Math.max(-1,Math.min(1,Ce.px))*Sn,Ut=Math.max(-1,Math.min(1,Ce.py))*Sn;Ce.pupil.position.set(St,Ut,Math.sqrt(Math.max(0,kt.r*kt.r-St*St-Ut*Ut))*.98),Ce.pupil.scale.set(rd,rd,.5),Ce.shine.position.set(St+kt.r*.12,Ut+kt.r*.14,Ce.pupil.position.z+.012);let Rt=B("es"+Ce.sx,Jm,.2,.6);Ce.inner.scale.set(Rt,Rt*1.08,.62);let Nt=Math.max(Km,jm),dn=Xn==="angry"?-Ce.sx*.45:Xn==="sad"?Ce.sx*.35:Xn==="neutral"?Ce.sx*.08:0;Ce.lidPivot.rotation.set(-Math.PI/2+Nt*Math.PI*.95,0,B("lt"+Ce.sx,dn,.2,.6))}let ad=G.getObjectByName("ahoge");ad&&(ad.rotation.x=B("ah",k(.8)*.2-Ie("hy")*6,.1,.8)),l.position.x=d.position.x*.8,l.scale.setScalar(Math.max(.45,1-(it+d.position.y-Em>0?it*.35:0))),c?.update(D,S),t.render(s,r)}let Ji=0;function A(S){if(!Ji&&S>Zi&&(Ji=S,Zi=S+2200+Math.random()*2600),Ji){let D=(S-Ji)/150;return D>=1?(Ji=0,0):Math.sin(D*Math.PI)}return 0}Ls=requestAnimationFrame(za);let $=()=>{c&&(c.cheerUntil=performance.now()+1600)};function j(){Rr=!1,cancelAnimationFrame(Ls),Lr.disconnect(),s.traverse(S=>{S.isMesh&&!bm.has(S.material)&&(S.geometry?.dispose(),S.material?.dispose())}),t.dispose(),t.forceContextLoss?.()}P({skin:"tron"}),Ne({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down"});function ee(S){let D=S!=null&&!F.visible;D!==N&&(N=D,U.visible=D,Se="",Ye()),Z=D?Math.max(0,Math.min(1,S)):0}return{setPose:Ne,setLook:P,setTalk:ee,el:i,dispose:j,cheer:$,is3D:!0}}var Na=null;function sw(){return Na||(Na=document.createElement("div"),Na.className="overlay site-modal hidden",document.body.appendChild(Na)),Na}function ju(n,{required:e=!1,onSave:t}={}){let i=sw();i.innerHTML=`<form class="modal panel pf-modal" autocomplete="off">
    <div class="pf-head">${an(n,"xl")}<div><h2 style="margin:0">${e?"Ch\xE0o b\u1EA1n! \u{1F44B}":"H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n"}</h2>
    <p class="muted" style="margin:4px 0 0">${e?"\u0110\u1EB7t t\xEAn v\xE0 ch\u1ECDn avatar m\u1ED9t l\u1EA7n \u2014 v\xE0o game n\xE0o c\u0169ng d\xF9ng lu\xF4n, kh\xF4ng ph\u1EA3i nh\u1EADp l\u1EA1i.":"T\xEAn v\xE0 avatar d\xF9ng chung cho m\u1ECDi game."}</p></div></div>
    <label class="field"><span>T\xEAn hi\u1EC3n th\u1ECB</span><input id="pfName" maxlength="18" value="${rt(n.name)}" placeholder="VD: S\xF3i Gi\xE0, Vua Nh\u1EA1i..." required /></label>
    <div id="pfAv"></div>
    <div class="pf-btns">${e?"":'<button type="button" class="btn" data-close>Hu\u1EF7</button>'}<button class="btn primary big" type="submit">${e?"V\xE0o s\xE2n ch\u01A1i \u2192":"L\u01B0u"}</button></div>
  </form>`,i.classList.remove("hidden");let s=()=>{let o=be(".pf-head .avatar",i);o&&(o.outerHTML=an(n,"xl"))};kf(be("#pfAv",i),n,s);let r=()=>{i.classList.add("hidden"),i.innerHTML=""};i.onclick=o=>{!e&&o.target===i&&r()},Vt("[data-close]",i).forEach(o=>o.onclick=r);let a=be("#pfName",i);setTimeout(()=>a.focus(),50),be("form",i).onsubmit=o=>{o.preventDefault();let c=a.value.trim().slice(0,18);if(!c){a.focus();return}n.name=c,Ws(n),r(),t?.(n),Qu()}}var rw=(n,e)=>{n.name||ju(n,{required:!0,onSave:e})};function aw(n,e){let t=be(".home-nav .nav-right");if(!t)return()=>{};let i=be("#profileBtn");i||(i=document.createElement("button"),i.type="button",i.id="profileBtn",i.className="profile-chip",t.appendChild(i));let s=()=>{i.innerHTML=`${an(n,"sm")}<span>${rt(n.name||"\u0110\u1EB7t t\xEAn")}</span>`};return i.onclick=()=>ju(n,{onSave:()=>{s(),e?.(n)}}),s(),s}function Pm(n,{onChange:e}={}){let t=be("#homeForm");if(!t)return;let i=be("#meCard");i||(i=document.createElement("div"),i.id="meCard",i.className="me-card",(be("h2",t)||t.firstChild).after(i)),t.classList.add("has-profile");let s=be("#nameInput"),r=()=>{s&&(s.value=n.name||""),i.innerHTML=`${an(n)}<div class="mc-txt"><span class="muted">B\u1EA1n ch\u01A1i v\u1EDBi t\xEAn</span><b>${rt(n.name||"...")}</b></div><button type="button" class="btn sm" id="meEdit">\u270F\uFE0F \u0110\u1ED5i</button>`,be("#meEdit").onclick=()=>ju(n,{onSave:()=>{r(),a(),e?.(n)}})},a=aw(n,()=>{r(),e?.(n)});r(),rw(n,()=>{r(),a(),e?.(n)})}var xn=null,Ps=null,Im=()=>Ps||(Ps=Pn.get("site-did"),Ps||(Ps=to(10),Pn.set("site-did",Ps)),Ps);async function Lm(n,e){if(xn)return xn;let t=be(".home-nav .nav-right"),i=document.createElement("button");i.type="button",i.className="online-chip",i.title="S\u1ED1 ng\u01B0\u1EDDi \u0111ang m\u1EDF S\xE2n Ch\u01A1i",i.innerHTML='<i class="dot"></i><b>1</b><span>online</span>',t?.prepend(i);let s=document.createElement("div");s.className="online-pop panel hidden",document.body.appendChild(s),i.onclick=c=>{c.stopPropagation(),s.classList.toggle("hidden"),o()},document.addEventListener("click",c=>{s.contains(c.target)||s.classList.add("hidden")});let r=new Map;xn={prof:n,page:e,peers:r,chip:i,pop:s,net:null};let a=()=>({did:Im(),name:n.name||"Kh\xE1ch",av:n.av,page:xn.page});function o(){let c=[a(),...r.values()],l=new Map;for(let u of c)u?.did&&!l.has(u.did)&&l.set(u.did,u);let h=Math.max(1,l.size);be("b",i).textContent=h,s.innerHTML=`<div class="op-head"><i class="dot"></i><b>${h} ng\u01B0\u1EDDi \u0111ang online</b></div>
      ${[...l.values()].map((u,d)=>`<div class="op-row">${an(u,"sm")}<div><b>${rt(u.name)}${d===0?' <span class="muted">(b\u1EA1n)</span>':""}</b><div class="muted">${rt(u.page||"")}</div></div></div>`).join("")}
      ${h===1?'<p class="muted" style="margin:6px 0 0;font-size:12.5px">Ch\u01B0a th\u1EA5y ai kh\xE1c. G\u1EEDi link cho b\u1EA1n b\xE8 nh\xE9!</p>':""}`}xn.draw=o,o();try{let c=await Qa("ONLINE",{local:Ii,ns:"presence"});xn.net=c,c.on("me",(l,h)=>{l&&typeof l=="object"&&(r.set(h,{did:String(l.did||h).slice(0,20),name:String(l.name||"Kh\xE1ch").slice(0,18),av:l.av,page:String(l.page||"").slice(0,40)}),o())}),c.onPeerJoin=l=>{c.send("me",a(),l)},c.onPeerLeave=l=>{r.delete(l),o()},c.send("me",a())}catch(c){console.warn("[presence]",c)}return xn}function Qu(n){xn&&(n&&(xn.page=n),xn.draw?.(),xn.net?.send("me",{did:Im(),name:xn.prof.name||"Kh\xE1ch",av:xn.prof.av,page:xn.page}))}var ow="nhai",bi=Lf(),Fm=window.NHAI_DATA||{items:[]},Dm=Object.fromEntries((Fm.items||[]).map(n=>[n.id,n.audio])),V={cid:Df(),code:null,isHost:!1,net:null,engine:null,hostPid:null,pub:null,joined:!1,endsAt:0,chat:[],seenLog:0,unread:0,look:cw(),puppet:null,voice:null,speaking:new Set,takes:{},clips:{},phaseKey:"",shownEnd:0,myVote:null,recState:null,timers:[]};Ii&&(window.__app=V);function cw(){let n=null;try{n=JSON.parse(Pn.get("dienta-look")||"null")}catch{}return{skin:Jn[n?.skin]?n.skin:"tron",head:typeof n?.head=="string"?n.head:""}}var lw=()=>Pn.set("dienta-look",JSON.stringify(V.look)),hw=n=>({e:Yn.includes(n?.e)?n.e:Yn[0],c:Number.isInteger(n?.c)&&n.c>=0&&n.c<Ri.length?n.c:0}),uw=n=>{let e=El.includes(n?.skin)?n.skin:"tron",t=typeof n?.head=="string"?n.head:"";return/^https?:\/\//.test(t)&&t.length<800||/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/.test(t)&&t.length<6e4||(t=""),{skin:e,head:t}},dw={rounds:5,scoring:"both",listens:2,categories:null};function Bm(){let n=null;try{n=JSON.parse(Pn.get("nhai-room-opts")||"null")}catch{}return{...dw,...n||{}}}var fw=n=>Pn.set("nhai-room-opts",JSON.stringify(n));function pw(n,e,t=!0){let i=t?"":"disabled",s=(a,o)=>`<div class="mini-seg">${o.map(([c,l])=>`<button type="button" class="${String(n[a])===String(c)?"on":""}" data-opt="${a}" data-val="${c}" ${i}>${l}</button>`).join("")}</div>`,r=a=>!n.categories||n.categories.includes(a);return`
    <div class="ro-row"><span>C\xE1ch ch\u1EA5m \u0111i\u1EC3m</span>${s("scoring",[["both","\u{1F916}+\u{1F5F3}\uFE0F M\xE1y ch\u1EA5m + b\u1ECF phi\u1EBFu"],["auto","\u{1F916} Ch\u1EC9 m\xE1y ch\u1EA5m"],["vote","\u{1F5F3}\uFE0F Ch\u1EC9 b\u1ECF phi\u1EBFu"]])}</div>
    <p class="ro-note">${n.scoring==="auto"?"M\xE1y so cao \u0111\u1ED9 v\xE0 nh\u1ECBp c\u1EE7a b\u1EA3n nh\u1EA1i v\u1EDBi \xE2m m\u1EABu (kh\xF4ng hi\u1EC3u ch\u1EEF).":n.scoring==="vote"?"M\u1ECDi ng\u01B0\u1EDDi nghe l\u1EA1i r\u1ED3i b\u1EA7u b\u1EA3n nh\u1EA1i gi\u1ED1ng nh\u1EA5t (kh\xF4ng t\u1EF1 b\u1EA7u cho m\xECnh).":"\u0110i\u1EC3m = 60% \u0111i\u1EC3m m\xE1y ch\u1EA5m + phi\u1EBFu b\u1EA7u c\u1EE7a m\u1ECDi ng\u01B0\u1EDDi."}</p>
    <div class="ro-grid">
      <label>S\u1ED1 \u0111\u1EC1 m\u1ED7i v\xE1n${s("rounds",[[3,"3"],[5,"5"],[8,"8"],[10,"10"],[15,"15"]])}</label>
      <label>Nghe m\u1EABu m\u1EA5y l\u1EA7n${s("listens",[[1,"1 l\u1EA7n"],[2,"2 l\u1EA7n"],[3,"3 l\u1EA7n"]])}</label>
    </div>
    ${e?.length?`<div class="ro-row"><span>Nh\xF3m \u0111\u1EC1</span></div><div class="cat-row">${e.map(a=>`<button type="button" class="cat-chip ${r(a)?"on":""}" data-cat="${rt(a)}" ${i}>${rt(a)}</button>`).join("")}</div>`:""}`}function mw(n,e,t,i){Vt("[data-opt][data-val]",n).forEach(s=>s.onclick=()=>{let r=s.dataset.val;i({[s.dataset.opt]:/^\d+$/.test(r)?Number(r):r})}),Vt("[data-cat]",n).forEach(s=>s.onclick=()=>{let r=e.categories?[...e.categories]:[...t],a=s.dataset.cat,o=r.includes(a)?r.filter(c=>c!==a):[...r,a];if(!o.length)return At("Ph\u1EA3i b\u1EADt \xEDt nh\u1EA5t 1 nh\xF3m \u0111\u1EC1.",!0);i({categories:o.length===t.length?null:o})})}function gw(){Vt("[data-logo]").forEach(h=>h.innerHTML=jr.wolf),be("#nameInput").value=bi.name,Pm(bi),Lm(bi,"\u0110ang \u1EDF Nh\u1EA1i Nh\u01B0 Th\u1EADt");let n=Ju(be("#lookPreview")),e=0,t=()=>{n.setLook(V.look),n.setPose({body:"stand",head:"center",face:["happy","surprised","cheeky"][e%3],armL:"down",armR:"down",legL:"down",legR:"down",turn:"front"})};setInterval(()=>{e++,t()},2600);let i=0;setInterval(()=>{i+=.18;let h=Math.max(0,Math.sin(i*3)*.6+Math.sin(i*7.3)*.3);n.setTalk?.(Math.sin(i*.5)>-.3?h:0)},60);let s=()=>{be("#lookEmo").textContent=Jn[V.look.skin].emo||"",be("#lookName").textContent=Jn[V.look.skin].name,be("#skinGrid").innerHTML=El.map(h=>{let u=Jn[h];return`<button type="button" class="skin-btn ${h===V.look.skin?"on":""}" data-skin="${h}" title="${rt(u.name)}"><span class="sw" style="--a:${u.shirt};--b:${u.pants}">${u.emo||""}</span><span class="sk-n">${rt(u.name)}</span></button>`}).join(""),Vt("[data-skin]").forEach(h=>h.onclick=()=>{V.look.skin=h.dataset.skin,lw(),s(),t()})};s(),t();let r=be("#homeForm"),a="create",o=h=>{a=h,r.classList.toggle("join",h==="join"),Vt(".seg-btn").forEach(u=>u.classList.toggle("active",u.dataset.mode===h)),be("#homeSubmit").textContent=h==="join"?"V\xE0o ph\xF2ng \u2192":"T\u1EA1o ph\xF2ng m\u1EDBi \u2192",be("#codeInput").required=h==="join"};Vt(".seg-btn").forEach(h=>h.onclick=()=>o(h.dataset.mode));let c=(ea.get("room")||"").toUpperCase();c&&(o("join"),be("#codeInput").value=c),r.onsubmit=h=>{h.preventDefault(),yl(),Zn();let u=be("#nameInput").value.trim();if(u)if(bi.name=u,Ws(bi),a==="join"){let d=be("#codeInput").value.trim().toUpperCase();if(!/^[A-Z0-9]{4,8}$/.test(d))return At("M\xE3 ph\xF2ng kh\xF4ng h\u1EE3p l\u1EC7",!0);ed(d,!1)}else ed(If(),!0)};let l=JSON.parse(Gs.get("nhai-session")||"null");l&&(!c||l.code===c)&&bi.name&&ed(l.code,l.host)}async function ed(n,e){Qu("\u{1F3A4} \u0110ang ch\u01A1i Nh\u1EA1i Nh\u01B0 Th\u1EADt"),V.code=n,V.isHost=e,Gs.set("nhai-session",JSON.stringify({code:n,host:e}));let t=new URL(location.href);t.searchParams.set("room",n),history.replaceState(null,"",t),be("#home").classList.add("hidden"),be("#room").classList.remove("hidden"),be("#codeChip").innerHTML=`${Ci("copy")}${rt(n)}`,be("#codeChip").onclick=()=>vl(xl(n),"\u0110\xE3 sao ch\xE9p link m\u1EDDi!"),be("#leaveBtn").onclick=()=>kc(),be("#stage").innerHTML=`<div class="panel hero hero-night"><div class="hero-ic">${jr.wolf}</div><div><h2>\u0110ang k\u1EBFt n\u1ED1i...</h2><p>\u0110ang t\xECm \u0111\u01B0\u1EDDng t\u1EDBi ph\xF2ng <b>${rt(n)}</b>.</p></div></div>`,oo().catch(()=>At('Ch\u01B0a c\xF3 quy\u1EC1n micro \u2014 b\u1EA1n s\u1EBD kh\xF4ng thu \xE2m \u0111\u01B0\u1EE3c. B\u1EA5m "\u{1F3A4} Th\u1EED micro" \u0111\u1EC3 c\u1EA5p quy\u1EC1n.',!0));try{V.net=await Qa(n,{local:Ii,ns:ow})}catch(r){console.error(r),At("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c th\u01B0 vi\u1EC7n k\u1EBFt n\u1ED1i.",!0);return}let i=V.net;V.voice=new eo(i),V.voice.onLevels=kw;let s=()=>({cid:V.cid,name:bi.name,av:bi.av,look:V.look});if(i.on("hello",(r,a)=>{if(!V.isHost||!r?.cid)return;let o=V.engine.addPlayer(String(r.cid),r,a);o?i.send("err",{msg:o,fatal:!0},a):vw(a)}),i.on("act",(r,a)=>{if(!V.isHost)return;let o=V.engine.byPid(a);if(!o)return;let c=V.engine.handle(o.cid,r);c&&i.send("err",{msg:c},a)}),i.on("chat",(r,a)=>{if(V.isHost){let o=V.engine.byPid(a);o&&zm(o.cid,r.text)}else a===V.hostPid&&id(r)}),i.on("state",(r,a)=>{V.isHost||(V.hostPid=a,be("#hostLost").classList.add("hidden"),Gm(r))}),i.on("fx",(r,a)=>{!V.isHost&&a===V.hostPid&&Nm(r)}),i.on("take",(r,a)=>Hm(r,a)),i.on("clip",(r,a)=>xw(r,a)),i.on("err",r=>{At(r.msg,!0),r.fatal&&kc(!1)}),i.onPeerJoin=r=>{V.isHost?km():i.send("hello",s(),r),V.voice?.peerJoined(r)},i.onPeerLeave=r=>{V.voice?.peerLeft(r),V.isHost?V.engine.disconnect(r):r===V.hostPid&&be("#hostLost").classList.remove("hidden")},i.onPeerStream=(r,a)=>V.voice.peerStream(r,a),e){let r=Uf(Fm);if(!r.items.length){At("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c kho \u0111\u1EC1 (data/nhai-data.js).",!0);return}V.engine=new io(V.cid,r,{cleanAv:hw,cleanLook:uw}),V.engine.setConfig(Bm()),V.engine.onChange=km,V.engine.onEvent=a=>{V.net.send("fx",a),Nm(a)},V.engine.addPlayer(V.cid,s(),i.selfId),setInterval(()=>V.engine.tick(),200)}else setTimeout(()=>{!V.pub&&V.net===i&&(be("#stage").innerHTML=`<div class="panel hero hero-vote"><div class="hero-ic">${jr.wolf}</div><div><h2>Ch\u01B0a th\u1EA5y ch\u1EE7 ph\xF2ng</h2><p>Ki\u1EC3m tra l\u1EA1i m\xE3 <b>${rt(n)}</b> v\xE0 ch\u1EAFc ch\u1EAFn ch\u1EE7 ph\xF2ng v\u1EABn \u0111ang m\u1EDF trang. V\u1EABn \u0111ang ti\u1EBFp t\u1EE5c t\xECm...</p><div style="margin-top:12px"><button class="btn" id="backHome">V\u1EC1 trang tr\u01B0\u1EDBc</button></div></div></div>`,be("#backHome").onclick=()=>kc(!1))},12e3);setInterval(Wm,200)}function kc(n=!0){if(n&&V.pub&&!["lobby","end"].includes(V.pub.phase)&&!confirm("R\u1EDDi kh\u1ECFi v\xE1n \u0111ang ch\u01A1i?"))return;Gs.del("nhai-session");try{V.net?.leave()}catch{}let e=new URL(location.href);e.searchParams.delete("room"),location.href=e.toString()}var td=!1;function km(){td||(td=!0,queueMicrotask(()=>{td=!1;let n=V.engine.pub();V.net.send("state",n),Gm(n)}))}function zm(n,e){if(e=String(e||"").trim().slice(0,300),!e)return;let t=V.engine.P(n),i={k:"m",cid:n,name:t.name,av:t.av,text:e,ts:Date.now()};V.net.send("chat",i),id(i)}function Is(n){if(V.isHost){let e=V.engine.handle(V.cid,n);e&&At(e,!0)}else V.hostPid?V.net.send("act",n,V.hostPid):At("Ch\u01B0a k\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c ch\u1EE7 ph\xF2ng",!0)}function yw(n){return n?n.custom?V.clips[n.id]?{b64:V.clips[n.id]}:null:Dm[n.id]?{url:Dm[n.id]}:null:null}async function Fa(n){let e=yw(n);if(!e)throw new Error("Ch\u01B0a c\xF3 \xE2m thanh \u0111\u1EC1");return e.b64?Bf(n.id,e.b64):Ff(n.id,e.url)}function xw(n,e){if(!(!n?.id||typeof n.b64!="string"||n.b64.length>26e4)&&(V.clips[n.id]=n.b64,V.isHost)){let t=V.engine.byPid(e);if(!t||V.engine.s.phase!=="lobby")return;V.engine.addCustom({id:n.id,name:n.name,duration:n.duration,by:t.cid})}}function vw(n){for(let e of V.engine.custom)V.clips[e.id]&&V.net.send("clip",{id:e.id,name:e.name,duration:e.duration,b64:V.clips[e.id]},n)}async function Um(n,e,t){let i=Hf(n,e,8);if(i.length<e*.3)return At("\xC2m thanh qu\xE1 ng\u1EAFn ho\u1EB7c qu\xE1 nh\u1ECF.",!0);let s=wl(i,e),r="c"+Date.now().toString(36)+Math.random().toString(36).slice(2,5),a={id:r,name:(t||"\xC2m thanh c\u1EE7a "+bi.name).slice(0,40),duration:Math.round(i.length/e*100)/100,b64:s};V.clips[r]=s,V.net.send("clip",a),V.isHost&&V.engine.addCustom({id:r,name:a.name,duration:a.duration,by:V.cid}),At("\u0110\xE3 th\xEAm \u0111\u1EC1 m\u1EDBi! \u{1F3B5}")}var _w=(n=V.pub)=>`${n.gameId}-${n.round}`;function Hm(n,e){var i;if(!n?.cid||typeof n.b64!="string"||n.b64.length>2e5)return;let t=`${n.gameId}-${n.round}`;((i=V.takes)[t]||(i[t]={}))[n.cid]=n.b64,V.isHost&&Mw(n.cid,n.b64,n.gameId,n.round,e),V.pub?.phase==="vote"&&$m()}async function Mw(n,e,t,i,s){let r=V.engine,a=r.P(n);if(!a||s&&a.pid!==s&&n!==V.cid||r.s.gameId!==t||r.s.round!==i)return;let o=ro(e);if(r.takeIn(n,o.length/Fn))try{let c=await Fa(r.s.item);r.setAuto(n,Nf(c.feat,na(o,Fn)))}catch(c){console.warn("[nhai] ch\u1EA5m \u0111i\u1EC3m l\u1ED7i",c),r.setAuto(n,{score:0})}}function Vm(n){let e=V.takes[_w()]?.[n];return e?ao(ro(e),Fn):null}function Gm(n){let e=V.phaseKey;if(V.pub=n,V.endsAt=n.remaining?Date.now()+n.remaining:0,n.players.find(s=>s.cid===V.cid))V.joined=!0;else if(V.joined)return At("B\u1EA1n \u0111\xE3 b\u1ECB m\u1EDDi ra kh\u1ECFi ph\xF2ng.",!0),setTimeout(()=>kc(!1),1200);for(let s of n.log)s.id>V.seenLog&&id({k:"sys",kind:s.kind,text:s.text});V.seenLog=Math.max(V.seenLog,...n.log.map(s=>s.id),0);let i=`${n.gameId}-${n.round}-${n.phase}-${n.show?.idx??""}`;i!==e&&(V.phaseKey=i,ww(n)),Aw(),n.phase==="end"&&V.shownEnd!==n.gameId&&(V.shownEnd=n.gameId,setTimeout(Ym,700)),n.phase==="lobby"&&be("#overlay").dataset.kind==="end"&&Uc()}function Dc(n,e){V.timers.push(setTimeout(e,Math.max(0,n)))}function bw(){V.timers.forEach(clearTimeout),V.timers=[],Sl()}function ww(n){bw();let e=n.durMs?n.durMs-n.remaining:0,t=i=>V.puppet?.setTalk?.(i);if(n.phase!=="record"&&(V.recState=null),n.phase==="listen"){V.myVote=null,V.listenN=0;let i=n.item.duration;for(let s=0;s<n.config.listens;s++)Dc(800+s*(i+.9)*1e3-e,async()=>{V.listenN=s+1,Er();try{let r=await Fa(n.item);await aa(r.buffer,{onLevel:t})}catch(r){At("Kh\xF4ng ph\xE1t \u0111\u01B0\u1EE3c \xE2m m\u1EABu: "+r.message,!0)}});Fa(n.item).catch(()=>{})}else if(n.phase==="record"){let i=n.rec.win;V.recState={stage:"count",n:cs};for(let s=0;s<cs;s++)Dc(s*1e3-e,()=>{V.recState={stage:"count",n:cs-s},ta.tick?.(),Er()});Dc(cs*1e3-e,async()=>{if(V.recState={stage:"rec",t0:Date.now(),win:i},Er(),!!n.players.find(r=>r.cid===V.cid))try{let{samples:r,sr:a}=await Tl(i,{onLevel:l=>{t(l),V.recLevel=l}});V.recState={stage:"sent"},Er();let o=wl(r,a),c={cid:V.cid,gameId:n.gameId,round:n.round,b64:o};V.net.send("take",c),Hm(c,null)}catch{V.recState={stage:"nomic"},Er(),At("Kh\xF4ng thu \u0111\u01B0\u1EE3c \xE2m: h\xE3y cho ph\xE9p quy\u1EC1n micro.",!0)}})}else if(n.phase==="show"){let i=n.show.slots[n.show.idx];Dc(400-e,async()=>{try{let s=i.who==="ref"?(await Fa(n.item)).buffer:Vm(i.who);s&&await aa(s,{onLevel:t})}catch{}})}else if(n.phase==="reveal"){let i=n.results?.[0];i?.best&&(Tw(),i.cid===V.cid&&gl())}}function Sw(n){let e=be("#stageWrap");if(e)for(let t=0;t<10;t++){let i=document.createElement("span");i.className="st-float",i.textContent=n[t%n.length],i.style.left=8+Math.random()*84+"%",i.style.animationDelay=Math.random()*.5+"s",i.style.setProperty("--r",Math.random()*40-20+"deg"),e.appendChild(i),setTimeout(()=>i.remove(),2500)}}function Tw(){let n=be("#stageWrap");n&&(n.classList.remove("cheer"),n.offsetWidth,n.classList.add("cheer"),setTimeout(()=>n.classList.remove("cheer"),1600),V.puppet?.cheer?.(),Sw(["\u{1F44F}","\u{1F389}","\u2B50","\u{1F60D}","\u{1F3A4}"]))}function Nm(n){n.type==="round"?ta.start():n.type==="record"?ta.buzz?.():n.type==="reveal"&&ta.correct()}var wi=n=>V.pub?.players.find(e=>e.cid===n),Oa={body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down",propL:null,propR:null,ears:null,tail:null,turn:"front",loop:null},nd={skin:"idol",head:""};function Aw(){let n=V.pub;n&&(Ew(),n.phase==="lobby"?Rw():$m(),Xm(),Zm())}var Om={listen:"\u{1F442} Nghe m\u1EABu",record:"\u{1F534} Thu \xE2m",collect:"\u{1F4E6} Gom b\u1EA3n nh\u1EA1i",show:"\u{1F3A4} Tr\xECnh di\u1EC5n",vote:"\u{1F5F3}\uFE0F B\u1ECF phi\u1EBFu",reveal:"\u{1F3C6} K\u1EBFt qu\u1EA3",end:"K\u1EBFt th\xFAc",lobby:"Ph\xF2ng ch\u1EDD"};function Ew(){let n=V.pub,e=n.phase==="lobby"||n.phase==="end"?Om[n.phase]:`\u0110\u1EC1 ${n.round}/${n.totalRounds} \xB7 ${Om[n.phase]}`;be("#phasePill").innerHTML=`${Ci("card")}<span class="lbl">${e}</span><span class="t" id="timer"></span>`,Wm(),Oc()}function Wm(){let n=be("#timer");if(!n||!V.pub)return;if(!V.endsAt){n.textContent=`${V.pub.players.length} ng\u01B0\u1EDDi`,be("#timebar").style.width="0";return}let e=Math.max(0,V.endsAt-Date.now()),t=Math.ceil(e/1e3);if(n.textContent=`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,be("#timebar").style.width=V.pub.durMs?`${Math.min(100,e/V.pub.durMs*100)}%`:"0",V.recState?.stage==="rec"){let i=Math.min(1,(Date.now()-V.recState.t0)/(V.recState.win*1e3)),s=be("#recBar");s&&(s.style.width=i*100+"%")}}var Cw='<svg viewBox="0 0 64 64"><path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/></svg>',Yi=null;function Rw(){let n=V.pub,e=V.isHost,t=n.config;V.puppet&&(V.puppet.dispose?.(),V.puppet=null);let i=n.categories,s=e?V.engine.canStart():null;be("#stage").innerHTML=`
  <div class="panel lobby-hero hero">
    <div class="grow"><div class="lbl">M\xE3 ph\xF2ng</div><div class="big-code">${rt(V.code)}</div>
    <p style="margin:10px 0 0">G\u1EEDi link cho b\u1EA1n b\xE8 \u0111\u1EC3 c\xF9ng v\xE0o. ${Ii?"<b>(Ch\u1EBF \u0111\u1ED9 th\u1EED: ch\u1EC9 c\xE1c tab tr\xEAn m\xE1y n\xE0y)</b>":""}</p></div>
    <button class="btn sun" id="copyLink">${Ci("copy")}Sao ch\xE9p link m\u1EDDi</button>
  </div>
  <div class="panel nh-mic">
    <div><b>\u{1F3A4} Ki\u1EC3m tra micro</b><div class="muted">N\xF3i th\u1EED, thanh m\xE0u ph\u1EA3i nh\u1EA3y l\xEAn. \u0110eo tai nghe s\u1EBD thu r\xF5 h\u01A1n.</div></div>
    <div class="meter"><i id="micMeter"></i></div>
    <button class="btn sm" id="micTest">${Yi?"D\u1EEBng":"Th\u1EED micro"}</button>
  </div>
  <div class="sect-title"><h3>Ng\u01B0\u1EDDi ch\u01A1i (${n.players.length})</h3><span class="muted">T\u1ED1i thi\u1EC3u 2 ng\u01B0\u1EDDi</span></div>
  <div class="grid">${n.players.map(a=>`
    <div class="pcard ${a.cid===V.cid?"me":""} ${a.connected?"":"offline"}">
      <div class="corner l">${a.cid===n.hostCid?`<span class="ic crown">${Cw}</span>`:""}</div>
      ${e&&a.cid!==V.cid?`<button class="kick" data-kick="${a.cid}" title="M\u1EDDi ra">\xD7</button>`:""}
      ${an(a)}<div class="pname">${rt(a.name)}</div><div class="ptag">${rt(Jn[a.skin]?.emo||"")} ${rt(Jn[a.skin]?.name||"")}</div>
    </div>`).join("")}</div>
  <div class="sect-title"><h3>C\xE0i \u0111\u1EB7t</h3><span class="muted">${n.poolCount} \u0111\u1EC1 \u0111ang b\u1EADt</span></div>
  <div class="panel cfg ro-body" id="lobbyOpts">${pw(t,i,e)}</div>
  <div class="sect-title"><h3>\u{1F3B5} \u0110\u1EC1 t\u1EF1 th\xEAm (${n.custom.length})</h3><span class="muted">Ai c\u0169ng th\xEAm \u0111\u01B0\u1EE3c \xB7 \u0111\u01B0\u1EE3c ch\u01A1i tr\u01B0\u1EDBc</span></div>
  <div class="panel nh-custom">
    <p class="muted" style="margin:0 0 10px">Thu m\u1ED9t ti\u1EBFng nh\u1EA1i "\u0111\u1EB7c s\u1EA3n" c\u1EE7a b\u1EA1n, ho\u1EB7c ch\u1ECDn file \xE2m thanh tr\xEAn m\xE1y (VD: \xE2m meme t\u1EA3i v\u1EC1, t\u1ED1i \u0111a 8 gi\xE2y). C\u1EA3 ph\xF2ng s\u1EBD ph\u1EA3i nh\u1EA1i theo!</p>
    <div class="nh-add">
      <input id="clipName" class="field-in" maxlength="40" placeholder="T\xEAn \u0111\u1EC1, VD: Ti\u1EBFng c\u01B0\u1EDDi c\u1EE7a Minh" />
      <button class="btn sm" id="clipRec">\u{1F534} Thu 5 gi\xE2y</button>
      <label class="btn sm" for="clipFile">\u{1F4C1} Ch\u1ECDn file</label><input id="clipFile" type="file" accept="audio/*" hidden />
    </div>
    <div class="nh-clips">${n.custom.map(a=>`<div class="nh-clip"><button class="btn sm ghost" data-playclip="${a.id}">\u25B6</button><b>${rt(a.name)}</b><span class="muted">${a.duration}s \xB7 ${rt(wi(a.by)?.name||"")}</span></div>`).join("")||'<span class="muted">Ch\u01B0a c\xF3 \u0111\u1EC1 t\u1EF1 th\xEAm.</span>'}</div>
  </div>
  <div class="start-wrap">
    ${e?`<button class="btn primary big" id="startBtn" ${s?"disabled":""}>\u{1F3A4} B\u1EAFt \u0111\u1EA7u nh\u1EA1i!</button>`:'<button class="btn big" disabled>\u0110ang ch\u1EDD ch\u1EE7 ph\xF2ng b\u1EAFt \u0111\u1EA7u...</button>'}
    ${s?`<div class="why">${rt(s)}</div>`:""}
  </div>`,be("#copyLink").onclick=()=>vl(xl(V.code),"\u0110\xE3 sao ch\xE9p link m\u1EDDi!");let r=be("#startBtn");r&&(r.onclick=()=>{Yi&&(Yi(),Yi=null),Is({t:"start"})}),Vt("[data-kick]").forEach(a=>a.onclick=()=>Is({t:"kick",cid:a.dataset.kick})),e&&mw(be("#lobbyOpts"),t,i,a=>{Is({t:"cfg",cfg:a}),fw({...Bm(),...a})}),be("#micTest").onclick=async()=>{if(Yi){Yi(),Yi=null,be("#micTest").textContent="Th\u1EED micro";return}try{Zn(),Yi=await zf(a=>{let o=be("#micMeter");o&&(o.style.width=(a??0)*100+"%")}),be("#micTest").textContent="D\u1EEBng"}catch{At("Kh\xF4ng m\u1EDF \u0111\u01B0\u1EE3c micro. H\xE3y cho ph\xE9p quy\u1EC1n micro trong tr\xECnh duy\u1EC7t.",!0)}},be("#clipRec").onclick=async()=>{let a=be("#clipRec");try{Zn(),a.disabled=!0,a.textContent="\u{1F534} \u0110ang thu...";let{samples:c,sr:l}=await Tl(5,{onLevel:h=>{let u=be("#micMeter");u&&(u.style.width=(h??0)*100+"%")}});await Um(c,l,be("#clipName").value.trim())}catch{At("Kh\xF4ng thu \u0111\u01B0\u1EE3c \u2014 h\xE3y cho ph\xE9p quy\u1EC1n micro.",!0)}let o=be("#clipRec");o&&(o.disabled=!1,o.textContent="\u{1F534} Thu 5 gi\xE2y")},be("#clipFile").onchange=async a=>{let o=a.target.files?.[0];if(o){if(o.size>8*1024*1024)return At("File qu\xE1 l\u1EDBn (t\u1ED1i \u0111a 8MB).",!0);try{let c=await Zn().decodeAudioData(await o.arrayBuffer());await Um(c.getChannelData(0),c.sampleRate,be("#clipName").value.trim()||o.name.replace(/\.[^.]+$/,""))}catch{At("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c file \xE2m thanh n\xE0y.",!0)}}},Vt("[data-playclip]").forEach(a=>a.onclick=async()=>{let o=a.dataset.playclip;if(!V.clips[o])return At("Ch\u01B0a nh\u1EADn \u0111\u01B0\u1EE3c \xE2m thanh n\xE0y.",!0);aa(ao(ro(V.clips[o]),Fn))})}function Pw(){let n=be("#stage");n.querySelector(".stage-wrap")||(n.innerHTML=`
      <div class="panel turn-bar" id="turnBar"></div>
      <div class="panel stage-wrap stage3d" id="stageWrap">
        <div class="puppet-box" id="puppetBox"></div>
        <div class="stage-overlay" id="stageOverlay"></div>
      </div>
      <div id="belowStage"></div>`,V.puppet=Ju(be("#puppetBox"),{stage:!0}))}function Iw(){let n=V.pub;if(n.phase==="show"){let t=n.show.slots[n.show.idx];if(t.who==="ref")return{look:nd,pose:{...Oa,propR:"mic",armR:"mouth",face:"happy"},who:"ref"};let i=wi(t.who),s=["happy","surprised","cheeky","love"];return{look:n.performerLook||{skin:i?.skin||"tron"},pose:{...Oa,face:s[n.show.idx%s.length],armR:n.show.idx%2?"mouth":"down",propR:n.show.idx%2?"mic":null},who:t.who}}if(n.phase==="listen")return{look:nd,pose:{...Oa,propR:"mic",armR:"mouth",face:"happy"},who:"ref"};if(n.phase==="reveal"&&n.results?.[0]?.best){let t=wi(n.results[0].cid);return{look:{skin:t?.skin||"tron"},pose:{...Oa,armL:"up",armR:"up",face:"happy",loop:"dance"},who:t?.cid}}let e=wi(V.cid);return{look:V.look,pose:{...Oa,face:n.phase==="record"?"surprised":"neutral",propR:n.phase==="record"?"mic":null,armR:n.phase==="record"?"mouth":"down"},who:e?.cid}}function $m(){let n=V.pub;Pw();let e=Iw();V.puppet.setLook(e.look),V.puppet.setPose(e.pose),["listen","record","show"].includes(n.phase)||V.puppet.setTalk?.(null);let t=n.item;be("#turnBar").innerHTML=n.phase==="end"?`<b>\u{1F3C1} V\xE1n \u0111\xE3 k\u1EBFt th\xFAc</b><button class="btn sm" id="showEnd">Xem b\u1EA3ng x\u1EBFp h\u1EA1ng</button>${V.isHost?'<button class="btn sm primary" id="toLobby">Ch\u01A1i l\u1EA1i</button>':""}`:t?`<div class="nh-item"><span class="nh-emo">${rt(t.emo)}</span><div><b>${rt(t.name)}</b><div class="muted">${rt(t.hint||"")}</div></div></div>
      <span class="chip cat">${rt(t.category)}</span><span class="chip pts">${t.points}\u0111</span>
      ${V.isHost&&!["end","reveal"].includes(n.phase)?'<button class="btn sm ghost" id="skipBtn" title="Ch\u1EE7 ph\xF2ng: chuy\u1EC3n b\u01B0\u1EDBc">\u23ED</button>':""}`:"";let i=be("#showEnd");i&&(i.onclick=Ym);let s=be("#toLobby");s&&(s.onclick=()=>Is({t:"lobby"}));let r=be("#skipBtn");r&&(r.onclick=()=>Is({t:"skip"})),Er(),qm()}function Er(){let n=be("#stageOverlay");if(!n||!V.pub)return;let e=V.pub,t="";if(e.phase==="listen")t=`<div class="bubble nh-bub">\u{1F442} Nghe k\u1EF9 nh\xE9! ${V.listenN?`(l\u1EA7n ${V.listenN}/${e.config.listens})`:""}</div>`;else if(e.phase==="record"){let i=V.recState||{};i.stage==="count"?t=`<div class="nh-count">${i.n}</div><div class="bubble nh-bub">Chu\u1EA9n b\u1ECB nh\u1EA1i\u2026</div>`:i.stage==="rec"?t='<div class="bubble nh-bub rec">\u{1F534} \u0110ANG THU \u2014 nh\u1EA1i \u0111i!<div class="nh-recbar"><i id="recBar"></i></div></div>':i.stage==="sent"?t='<div class="bubble nh-bub">\u2705 \u0110\xE3 g\u1EEDi b\u1EA3n nh\u1EA1i!</div>':i.stage==="nomic"&&(t='<div class="bubble nh-bub">\u{1F6AB} Kh\xF4ng c\xF3 micro</div>')}else if(e.phase==="collect")t=`<div class="bubble nh-bub">\u{1F4E6} \u0110ang gom b\u1EA3n nh\u1EA1i\u2026 (${Object.keys(e.takes).length}/${e.players.filter(i=>i.connected).length})</div>`;else if(e.phase==="show"){let i=e.show.slots[e.show.idx],s=wi(i.who);t=`<div class="bubble nh-bub">${i.who==="ref"?"\u{1F3A7} <b>B\u1EA3n g\u1ED1c</b>":`${an(s,"sm")} <b>${rt(s?.name)}</b> nh\u1EA1i`} <span class="muted">(${e.show.idx+1}/${e.show.slots.length})</span></div>`}else if(e.phase==="reveal"){let i=e.results?.[0];t=i?.best?`<div class="bubble nh-bub">\u{1F451} <b>${rt(wi(i.cid)?.name)}</b> nh\u1EA1i gi\u1ED1ng nh\u1EA5t!</div>`:'<div class="bubble nh-bub">Kh\xF4ng ai ghi \u0111i\u1EC3m \u0111\u1EC1 n\xE0y</div>'}n.innerHTML=t}function qm(){let n=V.pub,e=be("#belowStage");if(!e)return;let t=`${V.phaseKey}|${V.myVote}|${n.voted?.length}|${Object.keys(n.takes).length}|${n.results?1:0}`;if(e.dataset.key!==t)if(e.dataset.key=t,n.phase==="vote"){let i=V.myVote,s=Object.keys(n.takes);e.innerHTML=`<div class="panel nh-vote"><div class="nh-vtitle"><b>\u{1F5F3}\uFE0F B\u1EA3n nh\u1EA1i n\xE0o gi\u1ED1ng nh\u1EA5t?</b><span class="muted">B\u1EA5m \u25B6 \u0111\u1EC3 nghe l\u1EA1i \xB7 kh\xF4ng \u0111\u01B0\u1EE3c b\u1EA7u cho m\xECnh \xB7 \u0111\xE3 b\u1EA7u ${n.voted.length}/${n.players.filter(r=>r.connected).length}</span></div>
      <div class="nh-vlist">${s.map(r=>{let a=wi(r),o=r===V.cid;return`<div class="nh-vrow ${i===r?"on":""}">${an(a,"sm")}<b>${rt(a?.name)}</b>${o?'<span class="tag">b\u1EA1n</span>':""}
        <button class="btn sm ghost" data-play="${r}">\u25B6 Nghe</button>${o?"":`<button class="btn sm ${i===r?"primary":""}" data-vote="${r}">${i===r?"\u2714 \u0110\xE3 b\u1EA7u":"B\u1EA7u"}</button>`}</div>`}).join("")}
      <div class="nh-vrow"><span class="nh-emo">\u{1F3A7}</span><b>B\u1EA3n g\u1ED1c</b><button class="btn sm ghost" data-play="ref">\u25B6 Nghe</button></div></div></div>`,Vt("[data-play]",e).forEach(r=>r.onclick=async()=>{let a=r.dataset.play,o=a==="ref"?(await Fa(n.item).catch(()=>null))?.buffer:Vm(a);if(!o)return At("Ch\u01B0a nh\u1EADn \u0111\u01B0\u1EE3c b\u1EA3n thu n\xE0y.",!0);let c=a==="ref"?null:wi(a);V.puppet.setLook(a==="ref"?nd:{skin:c?.skin||"tron"}),aa(o,{onLevel:l=>V.puppet?.setTalk?.(l)})}),Vt("[data-vote]",e).forEach(r=>r.onclick=()=>{V.myVote=r.dataset.vote,Is({t:"vote",target:r.dataset.vote}),qm()})}else if(n.phase==="reveal"&&n.results)e.innerHTML=`<div class="panel nh-res"><b class="nh-vtitle">\u{1F3C6} K\u1EBFt qu\u1EA3 \u0111\u1EC1 "${rt(n.item.name)}"</b>
      ${n.results.map((i,s)=>{let r=wi(i.cid),a=i.auto;return`<div class="nh-rrow ${i.cid===V.cid?"me":""}">
        <span class="rank">${i.best?"\u{1F451}":s+1}</span>${an(r,"sm")}<b class="nm">${rt(r?.name)}</b>
        ${a?`<div class="nh-bars" title="M\xE1y ch\u1EA5m: cao \u0111\u1ED9 ${a.pitch??"\u2013"} \xB7 nh\u1ECBp ${a.rhythm??"\u2013"} \xB7 \u0111\u1ED9 d\xE0i ${a.length??"\u2013"}"><div class="nh-bar"><i style="width:${a.score}%"></i></div><span>${a.silent?"\u{1F507} im l\u1EB7ng":`\u{1F916} ${a.score}%`}</span></div>`:""}
        ${i.votes!=null?`<span class="chip">\u{1F5F3}\uFE0F ${i.votes}</span>`:""}
        <b class="pt">+${i.pts}</b></div>`}).join("")||'<p class="muted">Kh\xF4ng c\xF3 b\u1EA3n nh\u1EA1i n\xE0o.</p>'}
    </div>`;else if(n.phase==="record"&&!V.recState)e.innerHTML="";else if(n.phase==="end")e.innerHTML="";else{let i={listen:"Nghe k\u1EF9 l\xEAn xu\u1ED1ng, d\xE0i ng\u1EAFn, ng\u1EAFt ngh\u1EC9 \u2014 m\xE1y ch\u1EA5m d\u1EF1a v\xE0o ng\u1EEF \u0111i\u1EC7u v\xE0 nh\u1ECBp, kh\xF4ng c\u1EA7n \u0111\xFAng ch\u1EEF.",record:"Nh\u1EA1i to, r\xF5, \u0111\xFAng nh\u1ECBp. \u0110\u1EEBng n\xF3i chuy\u1EC7n kh\xE1c trong l\xFAc thu nh\xE9!",collect:"Ch\u1EDD m\u1ECDi ng\u01B0\u1EDDi g\u1EEDi b\u1EA3n nh\u1EA1i\u2026",show:"C\xF9ng nghe t\u1EEBng ng\u01B0\u1EDDi nh\u1EA1i \u2014 nh\xE2n v\u1EADt s\u1EBD nh\xE9p mi\u1EC7ng theo!"};e.innerHTML=i[n.phase]?`<div class="panel action calm"><div class="msg">${i[n.phase]}</div></div>`:""}}function Xm(){let n=V.pub,e=[...n.players].sort((t,i)=>i.score-t.score);be("#scoreBox").innerHTML=`<div class="sb-head"><b>B\u1EA3ng \u0111i\u1EC3m</b></div>${e.map((t,i)=>`
    <div class="sb-row ${t.cid===V.cid?"me":""} ${t.connected?"":"offline"} ${t.pid&&V.speaking.has(t.pid)||t.cid===V.cid&&V.speaking.has("self")?"speaking":""}">
      <span class="rank">${i+1}</span>${an(t,"sm")}<span class="nm">${rt(t.name)}</span>
      ${n.phase!=="lobby"&&n.takes?.[t.cid]?'<span class="tag act">\u{1F3A4}</span>':""}
      ${n.phase==="vote"&&n.voted.includes(t.cid)?'<span class="tag">\u2714</span>':""}
      ${t.wins?`<span class="tag">\u{1F451}${t.wins}</span>`:""}
      <b class="pt">${t.score}</b></div>`).join("")}`}function id(n){V.chat.push(n),V.chat.length>300&&V.chat.shift();let e=be("#chatList"),t=e.scrollHeight-e.scrollTop-e.clientHeight<80;e.insertAdjacentHTML("beforeend",Dw(n)),(t||n.cid===V.cid)&&(e.scrollTop=e.scrollHeight),n.k==="m"&&be(".room-body").dataset.tab==="stage"&&innerWidth<=900&&(V.unread++,be("#chatBadge").textContent=V.unread,be("#chatBadge").classList.remove("hidden"))}var Lw={correct:"\u{1F451}",wrong:"\u274C",reveal:"\u{1F4A1}",win:"\u{1F3C6}",phase:"\u{1F3A4}",join:"\u{1F44B}",leave:"\u{1F6AA}",info:"\u2139\uFE0F"};function Dw(n){return n.k==="sys"?`<div class="sys ${n.kind==="correct"?"day":n.kind==="win"?"win":""}"><span>${Lw[n.kind]||"\u2022"}</span><span>${rt(n.text)}</span></div>`:`<div class="msg ${n.cid===V.cid?"mine":""}">${an(n,"sm")}<div class="body"><div class="nm">${rt(n.name)}</div>${rt(n.text)}</div></div>`}be("#chatForm").onsubmit=n=>{n.preventDefault();let e=be("#chatInput"),t=e.value.trim();!t||!V.pub||(e.value="",V.isHost?zm(V.cid,t):V.hostPid&&V.net.send("chat",{text:t},V.hostPid))};Vt(".mobile-tabs button").forEach(n=>n.onclick=()=>{be(".room-body").dataset.tab=n.dataset.tab,Vt(".mobile-tabs button").forEach(e=>e.classList.toggle("active",e===n)),n.dataset.tab==="side"&&(V.unread=0,be("#chatBadge").classList.add("hidden"))});Vt(".mt-ic").forEach(n=>n.innerHTML=Ci(n.dataset.ic));function Ym(){let n=V.pub;if(!n||n.phase!=="end")return;let e=[...n.players].sort((r,a)=>a.score-r.score),t=[e[1],e[0],e[2]],i=be("#overlay");i.dataset.kind="end",i.innerHTML=`<div class="modal panel wide">
    <h2>\u{1F3A4} Vua Nh\u1EA1i Gi\u1ECDng</h2>
    <div class="podium">${t.map((r,a)=>r?`<div class="pod p${[2,1,3][a]}">${an(r,"xl")}<b>${rt(r.name)}</b><span>${r.score} \u0111i\u1EC3m</span><div class="step">${[2,1,3][a]}</div></div>`:"<div></div>").join("")}</div>
    <div class="end-list">${e.slice(3).map((r,a)=>`<div class="end-row">${an(r,"sm")}<div><div class="nm">#${a+4} ${rt(r.name)}</div><div class="rr">${r.score} \u0111i\u1EC3m \xB7 ${r.wins} l\u1EA7n gi\u1ED1ng nh\u1EA5t</div></div></div>`).join("")}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn" id="endClose">\u0110\xF3ng</button>${V.isHost?'<button class="btn primary" id="endLobby">Ch\u01A1i v\xE1n m\u1EDBi</button>':""}</div>
  </div>`,i.classList.remove("hidden"),i.onclick=r=>{r.target===i&&Uc()},be("#endClose").onclick=Uc;let s=be("#endLobby");s&&(s.onclick=()=>{Uc(),Is({t:"lobby"})}),e[0]?.cid===V.cid&&gl()}function Uc(){let n=be("#overlay");n.classList.add("hidden"),n.innerHTML="",n.dataset.kind=""}var Nc=()=>["listen","record","show"].includes(V.pub?.phase);function Zm(){V.voice&&(V.voice.setRules({canSpeak:!Nc(),canHear:()=>!Nc()}),Oc())}function Oc(){let n=V.voice,e=be("#micBtn"),t=be("#deafBtn"),i=Nc();if(!n||!n.enabled)e.className="icon-btn",e.innerHTML=Ci("micOff"),e.title="B\u1EADt voice chat";else{let s=n.micOn&&!i;e.className=`icon-btn ${s?"on":"off"} ${i?"locked":""}`,e.innerHTML=Ci(s?"mic":"micOff"),e.title=i?"Voice chat t\u1EA1m t\u1EAFt trong l\xFAc nghe / thu / tr\xECnh di\u1EC5n":n.micOn?"T\u1EAFt mic":"B\u1EADt mic"}t.className=`icon-btn ${n?.deaf?"off":""}`,t.innerHTML=Ci(n?.deaf?"speakerOff":"speaker")}be("#micBtn").onclick=async()=>{let n=V.voice;if(n){if(n.enabled)n.setMic(!n.micOn);else try{await n.enable(),Zm(),At(Nc()?"Voice chat s\u1EBD b\u1EADt l\u1EA1i sau ph\u1EA7n thu \xE2m":"\u0110\xE3 b\u1EADt voice chat")}catch{At("Kh\xF4ng truy c\u1EADp \u0111\u01B0\u1EE3c micro. H\xE3y cho ph\xE9p quy\u1EC1n micro trong tr\xECnh duy\u1EC7t.",!0)}Oc()}};be("#deafBtn").onclick=()=>{let n=V.voice;n&&(n.ensureCtx(),n.setDeaf(!n.deaf),Oc())};function kw(n){(n.size!==V.speaking.size||[...n].some(t=>!V.speaking.has(t)))&&(V.speaking=n,V.pub&&Xm())}gw();})();
