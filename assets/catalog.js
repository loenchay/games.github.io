(()=>{var hu=Object.defineProperty;var Np=(n,e,t)=>e in n?hu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var kp=(n,e)=>()=>(n&&(e=n(n=0)),e);var Op=(n,e)=>{for(var t in e)hu(n,t,{get:e[t],enumerable:!0})};var Qt=(n,e,t)=>Np(n,typeof e!="symbol"?e+"":e,t);var kd={};Op(kd,{createEvent:()=>Id,defaultRelayUrls:()=>Nd,getRelaySockets:()=>W0,joinRoom:()=>G0,pauseRelayReconnection:()=>yd,resumeRelayReconnection:()=>xd,selfId:()=>wn,subscribe:()=>F0});var wl,pi,Ds,Xu,qu,Hp,Pn,_u,Sn,Vp,Gp,Yu,Zu,Ju,vu,br,Tl,Wp,Us,ze,ba,$p,Ku,Mu,bu,rl,sl,Qu,Su,Ss,ju,Sa,Xp,ed,Mn,Tr,Wi,ws,qp,$i,_a,Zn,Yp,wu,Zp,Jp,Kp,td,yl,xl,El,Al,nd,id,rd,Qp,sd,ad,od,ld,jp,em,tm,cd,hd,ud,dd,nm,Tu,Eu,im,_l,rm,sm,In,Es,am,Er,wn,Xi,fd,Vi,pd,vn,Mr,jt,md,ct,ot,Sr,fi,om,lm,mi,Hi,As,Cs,cm,hm,on,wr,gd,Au,Cu,xs,Ts,vl,yd,xd,um,dm,fm,Cl,al,pm,mm,wa,Rs,gm,ym,_d,vd,xm,_m,Rl,vm,Mm,bm,ol,Sm,wm,Tm,Em,Am,Ru,Cm,_s,Rm,Pm,Pu,Iu,Im,Lm,ll,Dm,cl,Lu,hl,ya,zi,vs,Um,Du,Uu,Nu,Nm,km,Om,Fm,Bm,vr,ul,ku,zm,ma,Hm,Ou,Fu,Md,Vm,Bu,Gm,di,bs,zu,Wm,$m,bd,Sd,Hu,Xm,qm,wd,Ym,Zm,Jm,Km,Qm,jm,Ml,va,e0,t0,Ms,n0,Td,i0,r0,s0,Ta,Ps,bn,xa,bl,Pl,Vu,a0,Is,o0,l0,Ed,c0,h0,u0,d0,f0,p0,m0,ga,g0,y0,x0,_0,v0,M0,b0,dl,S0,w0,fl,Gu,pl,T0,Ad,E0,Cd,Rd,A0,C0,R0,Pd,P0,ml,Wu,Ma,I0,L0,Ls,Sl,Gi,$u,D0,gl,U0,N0,k0,O0,Il,Ll,Id,F0,Yn,Ld,B0,z0,Dd,H0,Ud,V0,G0,W0,Nd,Od=kp(()=>{wl=Object.freeze,pi=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Ds=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Xu=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,qu=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,Hp=wl({p:pi,n:Ds,h:1n,a:0n,b:7n,Gx:Xu,Gy:qu}),Pn=32,_u=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Sn=(n,e,t="")=>{if(_u(n)&&(e===void 0||n.length===e))return n;let i=_u(n),r=e!==void 0?` of length ${e}`:"",s=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+r+", got "+s;throw i?new RangeError(a):new TypeError(a)},Vp=n=>Uint8Array.from(n),Gp=(n,e,t)=>Vp(Sn(n,t,e)),Yu=(n,e)=>n.toString(16).padStart(e,"0"),Zu=n=>{let e="";for(let t of Sn(n))e+=Yu(t,2);return e},Ju=n=>{let e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);let t=new Uint8Array(n.length/2);for(let i=0,r=0;i<t.length;i++,r+=2){let s=n.charCodeAt(r),a=n.charCodeAt(r+1);t[i]=((s&15)+(s>>6)*9)*16+(a&15)+(a>>6)*9}return t},vu=()=>{let n=globalThis?.crypto?.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},br=(...n)=>{let e=0;for(let r of n)e+=Sn(r).length;let t=new Uint8Array(e),i=0;for(let r of n)t.set(r,i),i+=r.length;return t},Tl=(n=Pn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},Wp=BigInt,Us=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},ze=(n,e=pi)=>(n%=e)>=0n?n:e+n,ba=n=>ze(n,Ds),$p=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=ze(n,e),i=e,r=0n,s=1n;for(;t!==0n;){let a=i/t,o=i-t*a,l=r-s*a;i=t,t=o,r=s,s=l}if(i!==1n)throw new Error("invert: does not exist");return ze(r,e)},Ku=n=>{let e=Zp[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},Mu=(n,e,t)=>Sn(Ku(n)(e,t),Pn,"digest"),bu=async(n,e,t)=>Sn(await Ku(n)(e,t),Pn,"digest"),rl=n=>{if(n instanceof Tr)return n;throw new TypeError("Point expected")},sl="bad point: not on curve",Qu=n=>ze(ze(n*n)*n+7n),Su=n=>Us(n,0n,pi),Ss=n=>Us(n,1n,pi),ju=n=>Us(n,1n,Ds),Sa=n=>!(n&1n),Xp=n=>Uint8Array.of(Sa(n)?2:3),ed=n=>{let e=Qu(Ss(n)),t=1n;for(let i=e,r=(pi+1n)/4n;r>0n;r>>=1n)r&1n&&(t=t*i%pi),i=i*i%pi;if(ze(t*t)!==e)throw new Error("sqrt invalid");return new Tr(n,Sa(t)?t:ze(-t),1n)},Tr=(Mn=class{constructor(e,t,i){Qt(this,"X");Qt(this,"Y");Qt(this,"Z");this.X=Su(e),this.Y=Ss(t),this.Z=Su(i),wl(this)}static CURVE(){return Hp}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?ws:new Mn(t,i,1n)}static fromBytes(e){Sn(e);let t=e.length,i=e[0],r=_a(e,1,33);try{if(t===33&&(i===2||i===3)){let s=ed(r);return i===3?s.negate():s}if(t===65&&i===4)return new Mn(r,_a(e,33,65),1n).assertValidity()}catch{throw new Error(sl)}throw new Error(sl)}static fromHex(e){return Mn.fromBytes(Ju(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=rl(e);return ze(t*o)===ze(s*r)&&ze(i*o)===ze(a*r)}is0(){return this.Z===0n}negate(){return new Mn(this.X,ze(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:r}=this,{X:s,Y:a,Z:o}=rl(e),l=0n,c=7n,h=0n,d=0n,u=0n,f=ze(c*3n),g=ze(t*s),y=ze(i*a),m=ze(r*o),p=ze(t+i),b=ze(s+a);p=ze(p*b),b=ze(g+y),p=ze(p-b),b=ze(t+r);let v=ze(s+o);return b=ze(b*v),v=ze(g+m),b=ze(b-v),v=ze(i+r),h=ze(a+o),v=ze(v*h),h=ze(y+m),v=ze(v-h),u=ze(l*b),h=ze(f*m),u=ze(h+u),h=ze(y-u),u=ze(y+u),d=ze(h*u),y=ze(g+g),y=ze(y+g),m=ze(l*m),b=ze(f*b),y=ze(y+m),m=ze(g-m),m=ze(l*m),b=ze(b+m),g=ze(y*b),d=ze(d+g),g=ze(v*b),h=ze(p*h),h=ze(h-g),g=ze(p*y),u=ze(v*u),u=ze(u+g),new Mn(h,d,u)}subtract(e){return this.add(rl(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return ws;if(ju(e),e===1n)return this;if(this.equals(Wi))return im(e).p;let i=ws,r=Wi,s=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(s):t&&(r=r.add(s)),s=s.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let r=$p(i,pi);if(ze(i*r)!==1n)throw new Error("inverse invalid");return{x:ze(e*r),y:ze(t*r)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(Ss(e),Ss(t),ze(t*t)!==Qu(e))throw new Error(sl);return this}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),r=Zn(t);return e?br(Xp(i),r):br(Uint8Array.of(4),r,Zn(i))}toHex(e){return Zu(this.toBytes(e))}},Qt(Mn,"BASE"),Qt(Mn,"ZERO"),Mn),Wi=new Tr(Xu,qu,1n),ws=new Tr(0n,1n,0n);Tr.BASE=Wi;Tr.ZERO=ws;qp=(n,e,t)=>Wi.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),$i=n=>Wp("0x"+(Zu(n)||"0")),_a=(n,e,t)=>$i(n.subarray(e,t)),Zn=n=>Ju(Yu(Us(n,0n,2n**256n),Pn*2)),Yp=n=>{let e=$i(Sn(n,Pn,"secret key"));return Us(e,1n,Ds,"invalid secret key: outside of range")},wu="SHA-256",Zp={hmacSha256Async:async(n,e)=>{let t=vu(),i=await t.importKey("raw",n,{name:"HMAC",hash:wu},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await vu().digest(wu,n)),sha256:void 0},Jp=n=>{if(n=n===void 0?Tl(48):n,Sn(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");let e=ze($i(n),Ds-1n);return Zn(e+1n)},Kp=n=>e=>{let t=Jp(e);return{secretKey:t,publicKey:n(t)}},td=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),yl=(n,...e)=>{let t=Mu("sha256",td(n));return Mu("sha256",br(t,t,...e))},xl=(n,...e)=>bu("sha256Async",td(n)).then(t=>bu("sha256Async",br(t,t,...e))),El=n=>{let e=Yp(n),t=Wi.multiply(e),{x:i,y:r}=t.assertValidity().toAffine(),s=Sa(r)?e:ba(-e),a=Zn(i);return{d:s,px:a}},Al=n=>ba($i(n)),nd=(...n)=>Al(yl("challenge",...n)),id=async(...n)=>Al(await xl("challenge",...n)),rd=n=>El(n).px,Qp=Kp(rd),sd=(n,e,t)=>{let i=Gp(n,"message"),{px:r,d:s}=El(e);return{m:i,px:r,d:s,a:Sn(t,Pn)}},ad=n=>{let e=Al(n);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:i}=El(Zn(e));return{rx:t,k:i}},od=(n,e,t,i)=>br(e,Zn(ba(n+t*i))),ld="invalid signature produced",jp=(n,e,t=Tl(Pn))=>{let{m:i,px:r,d:s,a}=sd(n,e,t),o=Zn(s^$i(yl("aux",a))),{rx:l,k:c}=ad(yl("nonce",o,r,i)),h=od(c,l,nd(l,r,i),s);if(!hd(h,i,r))throw new Error(ld);return h},em=async(n,e,t=Tl(Pn))=>{let{m:i,px:r,d:s,a}=sd(n,e,t),o=Zn(s^$i(await xl("aux",a))),{rx:l,k:c}=ad(await xl("nonce",o,r,i)),h=od(c,l,await id(l,r,i),s);if(!await ud(h,i,r))throw new Error(ld);return h},tm=(n,e)=>n instanceof Promise?n.then(e):e(n),cd=(n,e,t,i)=>{let r=Sn(n,64,"signature"),s=Sn(e,void 0,"message"),a=Sn(t,Pn,"publicKey"),o,l,c,h;try{let d=$i(a);o=ed(d),l=Ss(_a(r,0,Pn)),c=ju(_a(r,Pn,64)),h=br(Zn(l),a,s)}catch{return!1}return tm(i(h),d=>{try{let{x:u,y:f}=qp(o,c,ba(-d)).toAffine();return!(!Sa(f)||u!==l)}catch{return!1}})},hd=(n,e,t)=>cd(n,e,t,nd),ud=async(n,e,t)=>cd(n,e,t,id),dd=wl({keygen:Qp,getPublicKey:rd,sign:jp,verify:hd,signAsync:em,verifyAsync:ud}),nm=()=>{let n=[],e=Wi,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let r=1;r<128;r++)t=t.add(e),n.push(t);e=t.double()}return n},Eu=(n,e)=>{let t=e.negate();return n?t:e},im=n=>{let e=Tu||(Tu=nm()),t=ws,i=Wi;for(let r=0;r<33;r++){let s=Number(n&255n);n>>=8n,s>128&&(s-=256,n+=1n);let a=r*128,o=a+Math.abs(s)-1,l=r%2!==0,c=s<0;s===0?i=i.add(Eu(l,e[a])):t=t.add(Eu(c,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:_l,min:rm,sin:sm}=Math,In="Trystero",Es=(n,e)=>Array(n).fill(void 0).map(e),am="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Er=n=>Es(n,()=>am[_l(Math.random()*62)]??"").join(""),wn=Er(20),Xi=Promise.all.bind(Promise),fd=typeof window<"u",{entries:Vi,fromEntries:pd,keys:vn,values:Mr}=Object,jt=()=>{},md="candidate",ct=n=>(n!==null&&clearTimeout(n),null),ot=n=>new Error(`${In}: ${n}`),Sr=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:on(n??e),fi=(n,e)=>n instanceof Error?n:ot(Sr(n,e)),om=new TextEncoder,lm=new TextDecoder,mi=n=>om.encode(n),Hi=n=>lm.decode(n),As=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Cs=(...n)=>n.join("@"),cm=(n,e)=>{let t=[...n],i=()=>{let s=sm(e++)*1e4;return s-_l(s)},r=t.length;for(;r;){let s=_l(i()*r--),a=t[r];t[r]=t[s],t[s]=a}return t},hm=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?cm(e,gd(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),on=JSON.stringify,wr=n=>{try{return JSON.parse(n)}catch{throw ot(`failed to parse JSON: ${n}`)}},gd=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,Au=3333,Cu=6e4,xs={},Ts=null,vl=null,yd=()=>{Ts||(Ts=new Promise(n=>{vl=n}).finally(()=>{vl=null,Ts=null}))},xd=()=>{vl?.()},um=(n,e,t)=>{let i={},r=!1,s=!1,a,o=jt;i.isClosed=!1,i.ready=new Promise(c=>o=c);let l=()=>{if(i.isClosed)return;a=void 0,s=!1;let c=new WebSocket(n);c.onclose=()=>{if(i.isClosed||s)return;if(s=!0,Ts){Ts.then(l);return}let h=xs[n]??(xs[n]=Au);if(h>=Cu){i.isClosed=!0;return}a=setTimeout(l,Math.random()*h),xs[n]=rm(h*2,Cu)},c.onmessage=h=>e(String(h.data)),i.socket=c,i.url=c.url,c.onopen=()=>{let h=r;r=!0,o(i),xs[n]=Au,h&&t?.()},i.send=h=>{c.readyState===1&&c.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},l(),i},dm=n=>{let e={},t=new WeakMap,i=a=>{let o=t.get(a);if(!o)throw ot("relay bookkeeping missing registration for relay client");return o},r=()=>{let a={},o=l=>a[l]??(a[l]={});return{forKey:o,forRelay:l=>o(i(l))}},s=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>e[a]||s(a,o()),keyOf:i,scoped:r,getSockets:()=>pd(Vi(e).flatMap(([a,o])=>{let l=n(o);return l?[[a,l]]:[]}))}},fm=()=>{if(fd){let n=new AbortController;return addEventListener("online",xd,{signal:n.signal}),addEventListener("offline",yd,{signal:n.signal}),()=>n.abort()}return jt},Cl="AES-GCM",al={},pm=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),mm=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},wa=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,mi(e))),Rs=async n=>al[n]??(al[n]=Array.from(await wa("SHA-1",n)).map(e=>e.toString(36)).join("")),gm=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},mi(`${n}:${e}:${t}`)),{name:Cl},!1,["encrypt","decrypt"]),ym=async(n,e)=>As(await wa("SHA-256",`${In}:${n}:${e}`)),_d="$",vd=",",xm=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(vd)+_d+pm(await crypto.subtle.encrypt({name:Cl,iv:t},await n,mi(e)))},_m=async(n,e)=>{let[t,i]=e.split(_d);return Hi(await crypto.subtle.decrypt({name:Cl,iv:new Uint8Array(t?.split(vd).map(Number)??[])},await n,mm(i??"")))},Rl=57333,vm=18e4,Mm=20,bm=class{constructor(n){Qt(this,"makeOffer");Qt(this,"pool",[]);Qt(this,"pooled",new Set);Qt(this,"leased",new Map);Qt(this,"recycling",new Set);Qt(this,"cleanupTimer",null);Qt(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Es(Mm,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},Rl)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){let e=[];for(;e.length<n&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){let e=this.leased.get(n);e&&(ct(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:jt,close:jt,error:jt}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){let e=this.leased.get(n);e&&(ct(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},vm))}checkout(n,e,t){let i=this.shift(n),r=Math.max(0,n-i.length);r>0&&i.push(...Es(r,this.makeOffer));let s=async(a,o=!1)=>{try{let l=await t(a);return e?(this.lease(a),{peer:a,offer:l,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:l}}catch(l){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return s(this.makeOffer(),!0);throw l}};return Xi(i.map(a=>s(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{ct(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}},ol=ot("incorrect password for overlapping room"),Sm=(n,e,t)=>{let i=s=>wa("SHA-256",`${s}:${n}:${e}:${t}`).then(As),r=async(s,a,o)=>{if(!n)return;if(o){let c=Er(36);await s({__trystero_pw:"challenge",c});let{data:h}=await a();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw ol;let d=await i(c);if(h.h!==d)throw ol;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw ol;await s({__trystero_pw:"response",h:await i(l.c)})};return{run:r,compose:s=>n||s?async(a,o,l,c)=>{await r(o,l,c),await s?.(a,o,l,c)}:void 0}},wm=n=>{let e=Sr(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Tm=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:r,onActivate:s,onFailure:a})=>{let o={},l=(d,u)=>{let f=o[d];!f||u&&f.peer!==u||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=ct(f.handshakeTimer),s(d,f.peer))},c=(d,u,f)=>{let g=o[d];if(!g||g.peer!==u)return;let y=wm(f);e?.(d,y),a(d,u,ot(y))},h=(d,u)=>{let f=o[d];!f||f.peer!==u||f.isActive||(f.didLocalHandshakePass=!0,r("",d).catch(g=>c(d,u,ot(`failed sending handshake readiness: ${Sr(g,"unknown send failure")}`))),l(d,u))};return{addPeer:(d,u)=>{o[d]={peer:u,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,u)=>{let f=o[d];f&&(f.handshakeTimer=ct(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(u)),delete o[d])},canReceiveFromPeer:(d,u)=>{let f=o[d];return!!(f&&(f.isActive||u))},start:(d,u)=>{let f=o[d];if(!f||f.peer!==u)return;f.handshakeTimer=setTimeout(()=>c(d,u,ot(`handshake timed out after ${t}ms`)),t);let g=async(p,b)=>{await i(p,d,b)},y=()=>new Promise((p,b)=>{let v=o[d];if(!v||v.peer!==u){b(ot("peer disconnected during handshake"));return}let _=v.pendingHandshakePayloads.shift();if(_){p(_);return}v.handshakeWaiters.push({resolve:p,reject:C=>b(C)})}),m=wn<d;Promise.resolve(n?.(d,g,y,m)).then(()=>h(d,u)).catch(p=>c(d,u,fi(p,"handshake failed")))},receiveHandshakeData:(d,u,f)=>{let g=o[u];if(!g||g.isActive)return;let y=f===void 0?{data:d}:{data:d,metadata:f},m=g.handshakeWaiters.shift();if(m){m.resolve(y);return}g.pendingHandshakePayloads.push(y)},receiveHandshakeReady:d=>{let u=o[d];!u||u.isActive||(u.didReceiveRemoteReady=!0,l(d))}}},Em=15e3,Am=5e3,Ru="icegatheringstatechange",Cm="iceconnectionstatechange",_s="offer",Rm="answer",Pm=/out of range/i,Pu=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Iu=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:r,_test_only_mdnsHostFallbackToLoopback:s})=>{let a=new(i??RTCPeerConnection)({iceServers:Im.concat(r??[]),...t}),o={},l=[],c=[],h=e!==!1,d=[],u=[],f=!1,g=!1,y=null,m=null,p=!1,b=()=>m=ct(m),v=()=>{p||(p=!0,b(),o.close?.())},_=G=>{o.signal?o.signal(G):l.push(G)},C=G=>{let re=o.signal;o.signal=Ue=>{re?.(Ue),G(Ue)},l.length>0&&l.splice(0).forEach(Ue=>o.signal?.(Ue))},T=G=>s?Pu(G):G,A=G=>{if(!s||typeof G.candidate!="string")return G;let re=Pu(G.candidate);return re===G.candidate?G:{...G,candidate:re}},L=G=>({type:G.localDescription?.type??_s,sdp:T(G.localDescription?.sdp??"")}),ee=()=>{let G=a.remoteDescription?.sdp;return G?G.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},x=()=>(a.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,S=G=>{if(!a.remoteDescription)return!1;let re=x();if(typeof G.sdpMLineIndex=="number"&&re>0&&G.sdpMLineIndex>=re)return!1;let Ue=ee();return!(Ue&&G.usernameFragment&&G.usernameFragment!==Ue)},q=async G=>{try{return await a.addIceCandidate(G),!0}catch(re){if(re instanceof Error&&Pm.test(re.message)&&typeof G.sdpMLineIndex=="number")return!1;throw re}},z=async()=>{if(!a.remoteDescription||d.length===0)return;let G=d.splice(0),re=[];for(let Ue of G){if(!S(Ue)){re.push(Ue);continue}await q(Ue)||re.push(Ue)}re.length>0&&d.push(...re)},R=async G=>{if(S(G)){await q(G)||d.push(G);return}d.push(G)},k=G=>{G.binaryType="arraybuffer",G.bufferedAmountLowThreshold=65535,G.onmessage=re=>{let Ue=re.data;o.data?o.data(Ue):c.push(Ue)},G.onopen=()=>o.connect?.(),G.onclose=v,G.onerror=({error:re})=>o.error?.(fi(re,"data channel error"))},N=async G=>{let re=null;try{await Promise.race([new Promise(Ue=>{let ne=()=>{G.iceGatheringState==="complete"&&(G.removeEventListener(Ru,ne),Ue())};G.addEventListener(Ru,ne),ne()}),new Promise(Ue=>{re=setTimeout(Ue,Em)})])}finally{ct(re)}return L(G)},Z=async()=>{let G=h?L(a):await N(a);return _(G),G};n?(y=a.createDataChannel("data"),k(y)):a.ondatachannel=({channel:G})=>{y=G,k(G)};let V=async(G=!1)=>{if(a.connectionState!=="closed")try{return f=!0,G&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&a.localDescription?.type===_s&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(G?await a.createOffer({iceRestart:!0}):void 0),await Z()}catch(re){o.error?.(fi(re,"failed to create local offer"))}finally{f=!1}};a.onnegotiationneeded=async()=>V(!1),a.onicecandidate=({candidate:G})=>{if(!h||!G)return;let re=A(typeof G.toJSON=="function"?G.toJSON():{candidate:G.candidate,sdpMid:G.sdpMid,sdpMLineIndex:G.sdpMLineIndex,usernameFragment:G.usernameFragment});_({type:md,sdp:JSON.stringify(re)})};let xe=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){v();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){b();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&v()},Am));return}};a.onconnectionstatechange=xe,a.addEventListener(Cm,xe),a.ontrack=G=>{let re=G.streams[0];if(re){if(!o.track&&!o.stream){u.push({track:G.track,stream:re});return}o.track?.(G.track,re),o.stream?.(re)}},a.onremovestream=G=>o.stream?.(G.stream);let pe=n?new Promise(G=>C(re=>{re.type===_s&&G(re)})):Promise.resolve();return n&&queueMicrotask(()=>{!f&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&a.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:a,get channel(){return y},get isDead(){return a.connectionState==="closed"},getOffer:async(G=!1)=>{if(n)return G?V(!0):a.localDescription?.type===_s?h?L(a):N(a):pe},async signal(G){if(G.type==="candidate"){try{let re=JSON.parse(G.sdp);re&&typeof re=="object"&&await R(A(re))}catch(re){o.error?.(fi(re,"failed to parse remote candidate"))}return}if(!(y?.readyState==="open"&&!G.sdp?.includes("a=rtpmap")))try{let re={...G,sdp:T(G.sdp)};if(G.type===_s){if(f||a.signalingState!=="stable"&&!g){if(n)return;await Xi([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(re)])}else await a.setRemoteDescription(re);return await z(),await a.setLocalDescription(),await Z()}if(G.type===Rm){g=!0;try{await a.setRemoteDescription(re),await z()}finally{g=!1}}}catch(re){o.error?.(fi(re,"failed to apply remote signal"))}},sendData:G=>y?.send(G),destroy:()=>{b(),y?.close(),a.close(),f=!1,g=!1,v()},setHandlers:G=>{let{signal:re,...Ue}=G;Object.assign(o,Ue),o.data&&c.length>0&&c.splice(0).forEach(ne=>o.data?.(ne)),re&&C(re),(o.track||o.stream)&&u.length>0&&u.splice(0).forEach(({track:ne,stream:he})=>{o.track?.(ne,he),o.stream?.(he)})},offerPromise:pe,addStream:G=>G.getTracks().forEach(re=>a.addTrack(re,G)),removeStream:G=>a.getSenders().filter(re=>re.track&&G.getTracks().includes(re.track)).forEach(re=>a.removeTrack(re)),addTrack:(G,re)=>a.addTrack(G,re),removeTrack:G=>{let re=a.getSenders().find(Ue=>Ue.track===G);re&&a.removeTrack(re)},replaceTrack:(G,re)=>{let Ue=a.getSenders().find(ne=>ne.track===G);if(Ue)return Ue.replaceTrack(re)}}},Im=[...Es(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),Lm=Object.getPrototypeOf(Uint8Array),ll=32,Dm=0,cl=32,Lu=34,hl=35,ya=36,zi=16*2**10-ya,vs=255,Um=65535,Du="bufferedamountlow",Uu="close",Nu="error",Nm=1e4,km=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),Om=(n,e=Nm)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,r=null,s=l=>{i||(i=!0,n.removeEventListener(Du,a),n.removeEventListener(Uu,o),n.removeEventListener(Nu,o),ct(r),t(l))},a=()=>s(!0),o=()=>s(!1);if(n.addEventListener(Du,a),n.addEventListener(Uu,o),n.addEventListener(Nu,o),r=setTimeout(()=>s(!1),e),n.readyState!=="open"){s(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&s(!0)}),Fm=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{let r={},s={},a={},o={},l=(c,h,{includePending:d=!1}={})=>(c?Array.isArray(c)?c:[c]:e(d)).flatMap(u=>{let f=n(u,d);return f?[Promise.resolve(h(u,f))]:(console.warn(`${In}: no peer with id ${u} found`),[])});return{makeInternalAction:(c,h={})=>{let d=s[c];if(r[c]&&d){let m=r[c].options;if(m.sendToPending!==!!h.sendToPending||m.receiveWhilePending!==!!h.receiveWhilePending)throw ot(`action type "${c}" cannot be redefined`);return d}if(!c)throw ot("action type argument is required");let u=mi(c);if(u.byteLength>ll)throw ot(`action type string "${c}" (${u.byteLength}b) exceeds byte limit (${ll}). Hint: choose a shorter name.`);let f={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},g=new Uint8Array(ll);g.set(u);let y=0;return r[c]={onComplete:jt,onProgress:jt,setOnComplete:m=>{r[c].onComplete=m;let p=o[c];p?.length&&(delete o[c],p.forEach(({payload:b,peerId:v,metadata:_})=>m(b,v,_)))},setOnProgress:m=>{r[c].onProgress=m},send:async(m,p,b,v,_)=>{i(_);let C=typeof m;if(C==="undefined")throw ot("action data cannot be undefined");let T=C!=="string",A=m instanceof Blob,L=A||m instanceof ArrayBuffer||m instanceof Lm,ee=b!==void 0,x=L?km(A?await m.arrayBuffer():m):mi(T?on(m):m),S=ee?mi(on(b)):null,q=Math.ceil(x.byteLength/zi)+(ee?1:0)||1,z=Es(q,(R,k)=>{let N=k===q-1,Z=!!(ee&&k===0),V=new Uint8Array(ya+(Z?S?.byteLength??0:N?x.byteLength-zi*(q-(ee?2:1)):zi));return V.set(g),V.set([y>>8,y&vs],cl),V.set([Number(N)|Number(Z)<<1|Number(L)<<2|Number(T)<<3],Lu),V.set([Math.round((k+1)/q*vs)],hl),V.set(ee?Z?S??new Uint8Array:x.subarray((k-1)*zi,k*zi):x.subarray(k*zi,(k+1)*zi),ya),V});return y=y+1&Um,await Xi(l(p,async(R,k)=>{let{channel:N}=k,Z=0;for(;Z<q;){i(_);let V=z[Z];if(!V)break;if(N&&N.bufferedAmount>N.bufferedAmountLowThreshold){let G=await Om(N);if(i(_),!G)break}let xe=n(R,f.sendToPending);if(!xe||xe!==k)break;k.sendData(V),Z++;let pe=V[hl]??vs;v?.(pe/vs,R,b)}},{includePending:f.sendToPending})),[]},options:f},s[c]={send:r[c].send,onMessage:r[c].setOnComplete,onProgress:r[c].setOnProgress}},handleData:(c,h)=>{var ee,x;let d=new Uint8Array(h),u=Hi(d.subarray(Dm,cl)).replaceAll("\0",""),f=r[u];if(!t(c,!!f?.options.receiveWhilePending))return;let g=(d[cl]??0)<<8|(d[33]??0),y=d[Lu]??0,m=d[hl]??0,p=d.subarray(ya),b=!!(y&1),v=!!(y&2),_=!!(y&4),C=!!(y&8);a[c]??(a[c]={}),(ee=a[c])[u]??(ee[u]={});let T=(x=a[c][u])[g]??(x[g]={chunks:[]});if(v?T.meta=wr(Hi(p)):T.chunks.push(p),f?.onProgress(m/vs,c,T.meta),!b)return;let A=new Uint8Array(T.chunks.reduce((S,q)=>S+q.byteLength,0));T.chunks.reduce((S,q)=>(A.set(q,S),S+q.byteLength),0),delete a[c][u][g];let L=_?A:C?wr(Hi(A)):Hi(A);if(f){f.onComplete(L,c,T.meta);return}(o[u]??(o[u]=[])).push({payload:L,peerId:c,...T.meta===void 0?{}:{metadata:T.meta}})},clearPeer:c=>{delete a[c]}}},Bm=500,vr=(n,e)=>{let t=ot(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},ul=n=>{if(n?.aborted)throw vr("aborted","operation aborted")},ku=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,zm=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,ma=(n,e)=>e===void 0?n:{...n,metadata:e},Hm=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{let i={},r={},s=Fm({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:ul}),a=s.makeInternalAction,o=s.handleData,l=u=>{let f=r[u];f&&(ct(f.timer),f.signal&&f.abortHandler&&f.signal.removeEventListener("abort",f.abortHandler),delete r[u])},c=(u,f)=>{Vi(r).forEach(([g,y])=>{y.peerId===u&&(l(g),y.reject(f))})},h=(u,f)=>{s.clearPeer(u),c(u,vr("disconnected",Sr(f,"peer disconnected")))},d=a("@_response");return d.onMessage((u,f,g)=>{let y=zm(g);if(!y)return;let m=r[y.r];if(!(!m||m.peerId!==f)){if(l(y.r),y.e!==void 0){m.reject(vr("rejected",y.e));return}m.resolve(u)}}),{makeAction:(u,f)=>{if(f&&"onRequest"in f&&f.kind!=="request")throw ot('request actions must use kind: "request"');let g=f?.kind??"message",y=a(u),m=i[u];if(m){if(m.kind!==g)throw ot(`action type "${u}" cannot be redefined`);return m.action}let p={kind:g,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:f?.onReceiveProgress??null},b=(z,R)=>z?(k,N)=>z(k,ma({peerId:N},R)):void 0,v=z=>{p.onReceiveProgress=z},_=(z,R,k)=>{let N=p.kind==="request"?ku(k):null;p.onReceiveProgress?.(z,ma({peerId:R},N?N.m:k))};if(y.onProgress(_),g==="message"){let z=f?.onMessage??null,R=()=>{if(!z)return;let N=z;p.pendingMessages.splice(0).forEach(({payload:Z,peerId:V,metadata:xe})=>{Promise.resolve().then(()=>N(Z,ma({peerId:V},xe))).catch(pe=>console.error(`${In} action handler error:`,pe))})},k={send:async(N,Z={})=>{await y.send(N,Z.target,Z.metadata,b(Z.onProgress,Z.metadata),Z.signal)},get onMessage(){return z},set onMessage(N){z=N,R()},get onReceiveProgress(){return p.onReceiveProgress},set onReceiveProgress(N){v(N)}};return y.onMessage((N,Z,V)=>{if(!z){p.pendingMessages.push(V===void 0?{payload:N,peerId:Z}:{payload:N,peerId:Z,metadata:V});return}let xe=z;Promise.resolve().then(()=>xe(N,ma({peerId:Z},V))).catch(pe=>console.error(`${In} action handler error:`,pe))}),p.action=k,i[u]=p,R(),k}let C=f?.onRequest??null,T=z=>{ct(z.timer);let R=p.pendingRequests.indexOf(z);R>-1&&p.pendingRequests.splice(R,1)},A=(z,R,k)=>{d.send(null,z,{r:R,e:Sr(k,"request failed")})},L=(z,R)=>{T(z),Promise.resolve().then(()=>R(z.payload,{peerId:z.peerId,...z.metadata===void 0?{}:{metadata:z.metadata},signal:z.controller.signal})).then(async k=>{if(k===void 0)throw ot("request handler returned undefined");await d.send(k,z.peerId,{r:z.requestId})}).catch(k=>A(z.peerId,z.requestId,k)).finally(()=>z.controller.abort())},ee=()=>{C&&p.pendingRequests.slice().forEach(z=>L(z,C))},x=(z,R,k,N)=>{if(C){let V={payload:z,peerId:R,...k===void 0?{}:{metadata:k},requestId:N,controller:new AbortController,timer:null};L(V,C);return}let Z={payload:z,peerId:R,...k===void 0?{}:{metadata:k},requestId:N,controller:new AbortController,timer:setTimeout(()=>{T(Z),Z.controller.abort(),A(R,N,"request handler unavailable")},Bm)};p.pendingRequests.push(Z)},S=async(z,R)=>{let{target:k,metadata:N,onProgress:Z,signal:V,timeoutMs:xe}=R;if(ul(V),!n(k,!1))throw vr("disconnected",`no active peer with id ${k}`);let pe=Er(20),G=new Promise((re,Ue)=>{let ne={peerId:k,resolve:re,reject:Ue,timer:null,...V===void 0?{}:{signal:V}},he=()=>{l(pe),Ue(vr("aborted","operation aborted"))};V&&(ne.abortHandler=he,V.addEventListener("abort",he,{once:!0})),r[pe]=ne}).catch(re=>{throw re});try{await y.send(z,k,N===void 0?{r:pe}:{r:pe,m:N},b(Z,N),V);let re=r[pe];return re&&xe!==void 0&&(re.timer=setTimeout(()=>{l(pe),re.reject(vr("timeout","request timed out"))},xe)),await G}catch(re){throw l(pe),re}},q={request:S,requestMany:async(z,R)=>(ul(R.signal),await Xi(R.targets.map(async k=>{try{let N={peerId:k,status:"fulfilled",value:await S(z,{target:k,...R.metadata===void 0?{}:{metadata:R.metadata},...R.timeoutMs===void 0?{}:{timeoutMs:R.timeoutMs},...R.onProgress===void 0?{}:{onProgress:R.onProgress},...R.signal===void 0?{}:{signal:R.signal}})};return R.onResult?.(N),N}catch(N){let Z=fi(N,"request failed");if(Z.kind==="aborted"||!Z.kind)throw Z;let V=Z.kind==="timeout"?{peerId:k,status:"timeout"}:Z.kind==="disconnected"?{peerId:k,status:"disconnected"}:{peerId:k,status:"rejected",error:Z};return R.onResult?.(V),V}}))),get onRequest(){return C},set onRequest(z){C=z,ee()},get onReceiveProgress(){return p.onReceiveProgress},set onReceiveProgress(z){v(z)}};return y.onMessage((z,R,k)=>{let N=ku(k);N&&x(z,R,N.m,N.r)}),p.action=q,i[u]=p,ee(),q},makeInternalAction:a,handleData:o,clearPeer:h}},Ou=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Fu=n=>e=>{let t=n.get(e);return t||(t=Er(20),n.set(e,t)),t},Md=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,r=new Map,s=new Map;return{getStreamKey:Fu(n),getTrackKey:Fu(e),rememberRemoteStream:(a,o,l)=>{t.set(a,o),l&&i.set(l,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,l,c,h)=>{let d={track:o,stream:l};r.set(a,d),c&&s.set(c,d),h&&i.set(h,l)},getRemoteTrack:(a,o)=>r.get(a)??(o?s.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),r.clear(),s.clear()}}},Vm=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{let i={},r={},s=Md(),a={onPeerStream:null,onPeerTrack:null},o=(h,d,u,f)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(d,u,typeof u.id=="string"?u.id:void 0),a.onPeerStream?.(u,h,f))},l=(h,d,u,f,g)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(d,u,f,typeof u.id=="string"?u.id:void 0,typeof f.id=="string"?f.id:void 0),a.onPeerTrack?.(u,f,h,g))},c=(h,d,u,f,g,y={})=>{let m={k:d,...y,...u===void 0?{}:{m:u}};return n(h,async(p,b)=>{await f(m,p),g(b)})};return{addStream:(h,d,u)=>c(d.target,s.getStreamKey(h),d.metadata,u,f=>f.addStream(h),{s:h.id}),removeStream:(h,d)=>{n(d,(u,f)=>f.removeStream(h))},addTrack:(h,d,u,f)=>c(u.target,s.getTrackKey(h),u.metadata,f,g=>g.addTrack(h,d),{s:d.id,t:h.id}),removeTrack:(h,d)=>{n(d,(u,f)=>f.removeTrack(h))},replaceTrack:(h,d,u,f)=>c(u.target,s.getTrackKey(d),u.metadata,f,g=>g.replaceTrack(h,d),{t:h.id}),receiveStreamMeta:(h,d)=>{if(!e(d))return;let u=Ou(h);if(!u)return;let f=t(d)?.__trysteroMedia?.getRemoteStream(u.key,u.streamId);if(f){o(d,u.key,f,u.metadata);return}(i[d]??(i[d]=[])).push(u)},receiveTrackMeta:(h,d)=>{if(!e(d))return;let u=Ou(h);if(!u)return;let f=t(d)?.__trysteroMedia?.getRemoteTrack(u.key,u.trackId);if(f){l(d,u.key,f.track,f.stream,u.metadata);return}(r[d]??(r[d]=[])).push(u)},receiveRemoteStream:(h,d)=>{if(!e(h))return;let u=i[h]?.shift();u&&o(h,u.key,d,u.metadata)},receiveRemoteTrack:(h,d,u)=>{if(!e(h))return;let f=r[h]?.shift();f&&l(h,f.key,d,u,f.metadata)},clearPeer:h=>{delete i[h],delete r[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Bu="beforeunload",Gm=1e4,di=n=>"@_"+n,bs=new Set,zu=()=>bs.forEach(n=>n()),Wm=n=>(bs.add(n),bs.size===1&&addEventListener(Bu,zu),()=>{bs.delete(n),bs.size||removeEventListener(Bu,zu)}),$m=(n,e,t,{onPeerHandshake:i,onHandshakeError:r,handshakeTimeoutMs:s=Gm,isPassive:a=!1}={})=>{let o={},l={},c={},h={onPeerJoin:null,onPeerLeave:null},d=jt,u=null,f=(R,k,{includePending:N=!1}={})=>(R?Array.isArray(R)?R:[R]:vn(N?o:l)).flatMap(Z=>{let V=N?o[Z]:l[Z];return V?[Promise.resolve(k(Z,V))]:(console.warn(`${In}: no peer with id ${Z} found`),[])}),g=Vm({iterate:(R,k)=>f(R,(N,Z)=>k(N,Z)),isActive:R=>!!l[R],getSharedMediaPeer:R=>o[R]??null}),y=Hm({getPeer:(R,k)=>(k?o:l)[R],getPeerIds:R=>vn(R?o:l),canReceiveFromPeer:(R,k)=>!!u?.canReceiveFromPeer(R,k)}),m=y.makeInternalAction,p=y.handleData,b=y.makeAction,v=(R,k=ot("peer disconnected"))=>{let N=fi(k,"peer disconnected");u?.clearPeer(R,N),delete o[R],delete l[R],y.clearPeer(R,N),c[R]?.splice(0).forEach(Z=>Z.reject(N)),delete c[R],g.clearPeer(R)},_=(R,k,N)=>{let Z=o[R];if(!Z||k&&Z!==k)return;let V=!!l[R];v(R,N),Z.destroy(),V&&h.onPeerLeave?.(R),e(R)},C=async()=>{await S.send(""),await new Promise(R=>setTimeout(R,99)),Vi(o).forEach(([R,k])=>{k.destroy(),v(R,ot("room left"))}),d(),t()},T=m(di("ping")),A=m(di("pong")),L=m(di("signal")),ee=m(di("stream")),x=m(di("track")),S=m(di("leave"),{sendToPending:!0,receiveWhilePending:!0}),q=m(di("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),z=m(di("hsready"),{sendToPending:!0,receiveWhilePending:!0});return u=Tm({...i===void 0?{}:{onPeerHandshake:i},...r===void 0?{}:{onHandshakeError:r},handshakeTimeoutMs:s,sendHandshakeData:q.send,sendHandshakeReady:z.send,onActivate:(R,k)=>{l[R]=k,h.onPeerJoin?.(R)},onFailure:(R,k,N)=>_(R,k,N)}),T.onMessage((R,k)=>A.send("",k)),A.onMessage((R,k)=>{let N=c[k];N?.shift()?.resolve(),N&&!N.length&&delete c[k]}),L.onMessage((R,k)=>{l[k]&&o[k]?.signal(R)}),ee.onMessage((R,k)=>g.receiveStreamMeta(R,k)),x.onMessage((R,k)=>g.receiveTrackMeta(R,k)),S.onMessage((R,k)=>_(k,void 0,ot("peer left room"))),q.onMessage((R,k,N)=>u?.receiveHandshakeData(R,k,N)),z.onMessage((R,k)=>u?.receiveHandshakeReady(k)),n((R,k)=>{let N=o[k];if(N){if(N===R)return;N.destroy(),v(k,ot("peer replaced"))}o[k]=R,u?.addPeer(k,R),R.setHandlers({data:Z=>p(k,Z),stream:Z=>g.receiveRemoteStream(k,Z),track:(Z,V)=>g.receiveRemoteTrack(k,Z,V),signal:Z=>{l[k]&&L.send(Z,k)},close:()=>_(k,R,ot("peer disconnected")),error:Z=>{console.error(`${In} peer error:`,Z),_(k,R,Z)}}),u?.start(k,R)}),fd&&(d=Wm(()=>C().catch(jt))),{makeAction:b,leave:C,ping:async R=>{if(!l[R])throw ot(`no active peer with id ${R}`);let k=Date.now();return await new Promise((N,Z)=>{let V=c[R]??(c[R]=[]),xe=()=>{let G=c[R];if(!G)return;let re=G.indexOf(pe);re>-1&&G.splice(re,1),G.length||delete c[R]},pe={resolve:()=>{xe(),N()},reject:G=>{xe(),Z(G)}};V.push(pe),T.send("",R).catch(G=>pe.reject(fi(G,"peer disconnected")))}),Date.now()-k},isPassive:()=>a,getPeers:()=>pd(Vi(l).map(([R,k])=>[R,k.connection])),addStream:(R,k={})=>g.addStream(R,k,ee.send),removeStream:(R,k={})=>{g.removeStream(R,k.target)},addTrack:(R,k,N={})=>g.addTrack(R,k,N,x.send),removeTrack:(R,k={})=>{g.removeTrack(R,k.target)},replaceTrack:(R,k,N={})=>g.replaceTrack(R,k,N,x.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(R){h.onPeerJoin=R,R&&vn(l).forEach(k=>R(k))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(R){h.onPeerLeave=R},get onPeerStream(){return g.onPeerStream},set onPeerStream(R){g.onPeerStream=R},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(R){g.onPeerTrack=R}}},bd=1,Sd=2,Hu=(n,e)=>{let t=mi(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=bd,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},Xm=(n,e)=>{let t=mi(n),i=new Uint8Array(4+t.byteLength);return i[0]=Sd,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},qm=n=>{let e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===bd){let r=(e[1]??0)<<8|(e[2]??0),s=3+r;return r<=0||e.byteLength<s?null:{type:"room",roomToken:Hi(e.subarray(3,s)),payload:e.subarray(s).slice().buffer}}if(e[0]!==Sd||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:Hi(e.subarray(4,i)),isPresent:e[1]===1}},wd=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},Ym=n=>{if(wd(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},Zm=class{constructor(){Qt(this,"byApp",{});Qt(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return wd(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(Xm(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],r=i?.[e];if(!r||r.isClosing)return;r.idleTimer=ct(r.idleTimer),r.isClosing=!0,t&&!r.peer.isDead&&r.peer.destroy();let s=Mr(r.bindings);r.bindings={},r.bindingsByToken={},r.controlRoomId=null,delete i[e],s.forEach(a=>{a.handlers.close?.(),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),r.media.clearRemote(),r.pendingDataByToken.clear(),r.remoteRoomTokens.clear(),vn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let r=this.getMap(n),s=r[e];if(s){if(s.idleTimer=ct(s.idleTimer),s.peer===t)return s;this.clear(n,e,{destroyPeer:!0})}let a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Md(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${In} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,l)=>this.dispatchTrack(a,o,l)}),r[e]=a,a}bind(n,e,t,{onDetach:i}){let r=t.bindings[n];if(r)return t.idleTimer=ct(t.idleTimer),{proxy:r.proxy,isNew:!1};let s={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:jt,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],s.roomToken&&t.bindingsByToken[s.roomToken]===s&&delete t.bindingsByToken[s.roomToken],t.controlRoomId===n&&(t.controlRoomId=vn(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:l=>t.peer.getOffer(l),signal:l=>t.peer.signal(l),sendData:l=>{if(!s.roomToken){s.pendingSendData.push(l);return}t.peer.sendData(Hu(s.roomToken,l))},destroy:()=>a(),setHandlers:l=>{let{signal:c,...h}=l;Object.assign(s.handlers,h),c&&(s.handlers.signal=c),this.flushBindingQueues(s)},offerPromise:t.peer.offerPromise,addStream:l=>{let c=t.streamOwners.get(l)??new Set,h=c.size===0;c.add(n),t.streamOwners.set(l,c),h&&t.peer.addStream(l)},removeStream:l=>{let c=t.streamOwners.get(l);c&&(c.delete(n),c.size===0&&(t.streamOwners.delete(l),t.peer.removeStream(l)))},addTrack:(l,c)=>{let h=t.trackOwners.get(l)??{stream:c,rooms:new Set},d=h.rooms.size===0;return h.stream=c,h.rooms.add(n),t.trackOwners.set(l,h),d?t.peer.addTrack(l,c):t.peer.connection.getSenders().find(u=>u.track===l)??t.peer.addTrack(l,c)},removeTrack:l=>{let c=t.trackOwners.get(l);c&&(c.rooms.delete(n),c.rooms.size===0&&(t.trackOwners.delete(l),t.peer.removeTrack(l)))},replaceTrack:(l,c)=>{let h=t.trackOwners.get(l);if(h){t.trackOwners.delete(l);let d=t.trackOwners.get(c)??{stream:h.stream,rooms:new Set};h.rooms.forEach(u=>d.rooms.add(u)),t.trackOwners.set(c,d)}return t.peer.replaceTrack(l,c)},__trysteroMedia:t.media};return s.proxy=o,s.detach=a,t.bindings[n]=s,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=ct(t.idleTimer),e.then(l=>{if(t.isClosing||t.bindings[n]!==s)return;s.roomToken=l,t.bindingsByToken[l]=s;let c=t.pendingDataByToken.get(l);c?.length&&(s.pendingData.push(...c),t.pendingDataByToken.delete(l)),s.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Hu(l,h))),this.flushBindingQueues(s)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||vn(n.bindings).length>0||(n.idleTimer=ct(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||vn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=Mr(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){let{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){let t=qm(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}let i=n.bindingsByToken[t.roomToken];if(!i){let r=n.pendingDataByToken.get(t.roomToken)??[];r.push(t.payload),n.pendingDataByToken.set(t.roomToken,r);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){Mr(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}},Jm=23333,Km=12,Qm=7533,jm=23333,Ml="__legacy__",va="offer-placeholder",e0=["offer","answer","candidate"],t0=n=>{if(typeof n=="string")try{let e=wr(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},Ms=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,n0=n=>e0.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),Td=(n,e,t,i,r,s)=>{n.toCipher(e).then(a=>{n.isLeaving()||!s()||i(t,on(r(a.sdp)))})},i0=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),r0=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),s0=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${r0(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Ta=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:s0(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Ps=(n,e)=>n[e]??(n[e]=i0()),bn=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},xa=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=ct(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,bn(n))},bl=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,bn(n))},Pl=(n,e)=>{n.offerRelayTimers[e]=ct(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,bn(n))},Vu=(n,e)=>{n?.offerRelays[e]===va&&Pl(n,e)},a0=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Is=(n,e)=>{let t=n.offerAnswered;n.offerExpiryTimer=ct(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,r)=>Pl(n,r)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||a0(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,bn(n)},o0=(n,e,t,i)=>{ct(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.answeringPeer!==i||(r.answerSent&&Ta(n,r,t),i.destroy(),xa(r,i),n.checkDeactivate())},jm)},l0=async(n,e,t)=>{let i=t?[t,Ml]:[Ml];for(let r of i){let s=n.pendingCandidates[r];if(s?.length){delete n.pendingCandidates[r];for(let a of s)await e.signal(a)}}},Ed=(n,e,t,i=Rl)=>{ct(e.offerExpiryTimer);let r=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.offerId!==r||(s.offerAnswered&&Ta(n,s,t),Is(s,n.offerPool),n.checkDeactivate())},i)},c0=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let r=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!r)throw ot("failed to allocate offer peer");let{peer:s,offer:a}=r;e.offerPeer=s,e.offerId=Er(Km),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],bn(e);let o=()=>{e.offerPeer===s&&!e.connectedPeer&&(e.offerAnswered&&Ta(n,e,t),Is(e,n.offerPool)),n.disconnectPeer(s,t),n.checkDeactivate()};return s.setHandlers({connect:()=>n.connectPeer(s,t,i),signal:l=>{e.offerPeer===s&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c?.(l)))},close:o,error:o}),Ed(n,e,t),{peer:s,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),h0=async(n,e,t,i,r)=>{if(i){n.attachSharedPeerToRoom(t,i);return}let s=n.peerStates[t];if(!s||s.connectedPeer||s.answeringPeer||s.offerAnswered){Vu(s,e);return}if(s.offerRelays[e]!==va)return;let[a,o]=await Xi([Rs(Cs(n.rootTopicPlaintext,t)),c0(n,s,t,e)]);if(n.isLeaving())return;if(s.connectedPeer||s.answeringPeer||s.offerAnswered||s.offerRelays[e]!==va){Vu(s,e);return}s.offerRelayTimers[e]=ct(s.offerRelayTimers[e]),s.offerRelays[e]=!0,bn(s),s.offerRelayTimers[e]=setTimeout(()=>p0(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let l=!1;s.offerSignalRelays[e]=c=>{l&&(n.isLeaving()||s.connectedPeer||s.offerPeer!==o.peer||s.offerId!==o.offerId||c.type!=="candidate"||Td(n,c,a,r,h=>({peerId:wn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!s.connectedPeer&&s.offerPeer===o.peer&&s.offerId===o.offerId))},r(a,on({peerId:wn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),l=!0,s.offerSignalBacklog.forEach(c=>s.offerSignalRelays[e]?.(c))},u0=async(n,e,t,i,r,s,a)=>{let o=Ps(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;let l=!!(o.offerPeer||o.offerRelays.some(Boolean));if((l||s)&&wn<t)return;l&&Is(o,n.offerPool);let c=n.initPeer(!1,n.config);o.answeringPeer=c,o.answerSent=!1,o.connectionErrorReported=!1,o0(n,o,t,c),bn(o);let h=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&Ta(n,o,t),xa(o,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t,e),close:h,error:h});let d;try{d=await n.toPlain({type:"offer",sdp:i})}catch{xa(o,c),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){xa(o,c);return}let u=await Rs(Cs(n.rootTopicPlaintext,t));n.isLeaving()||(c.setHandlers({signal:f=>{n.isLeaving()||o.answeringPeer!==c||c.isDead||f.type!=="answer"&&f.type!=="candidate"||Td(n,f,u,a,g=>{let y={peerId:wn};return f.type==="answer"?(o.answerSent=!0,y.answer=g):y.candidate=g,r&&(y.offerId=r),n.isPassive&&(y.passive=!0),y},()=>o.answeringPeer===c&&!c.isDead)}}),await c.signal(d),await l0(o,c,r))},d0=async(n,e,t,i,r)=>{var d;let s;try{s=await n.toPlain({type:md,sdp:t})}catch{return}let a=Ps(n.peerStates,e),o=i&&a?.offerPeer&&a.offerId===i?a.offerPeer:null,l=a?.answeringPeer??null,c=!i&&a?.offerPeer?a.offerPeer:null,h=r&&!r.isDead?r:o??l??c;if(!h||h.isDead){let u=i??Ml;((d=a.pendingCandidates)[u]??(d[u]=[])).push(s);return}h.signal(s)},f0=async(n,e,t,i,r,s)=>{let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(s)n.offerPool.claimLeased(s),s.setHandlers({connect:()=>n.connectPeer(s,t,e),close:()=>n.disconnectPeer(s,t)}),s.signal(a);else{let o=n.peerStates[t];if(!o||!o.offerPeer||o.offerAnswered||r&&o.offerId&&r!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,Ed(n,o,t,Jm),o.offerPeer.signal(a)}},p0=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(Pl(i,t),n.checkDeactivate())},m0=n=>e=>async(t,i,r)=>{if(n.isLeaving())return;let s=t0(i);if(!s||n0(s))return;let a=Ms(s,"peerId")??"",o=Ms(s,"offer"),l=Ms(s,"answer"),c=Ms(s,"candidate"),h=Ms(s,"offerId"),d=s.peer,u=s.hasOutgoingOffer===!0,f=s.passive===!0;if(!a||a===wn)return;let[g,y]=await Xi([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==y||n.isPassive&&f||(n.isPassive&&!n.isActive&&!l&&!c&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let m=n.peerStates[a],p=m?.connectedPeer;if(p&&m){let _=Ym(p);if(_==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(_==="stale")bl(m,a,"message-from-stale-peer");else{let C=Date.now(),T=m.connectedPeerUnhealthySinceMs??C;if(m.connectedPeerUnhealthySinceMs=T,C-T<Qm)return;bl(m,a,"message-from-prolonged-disconnect")}}let b=n.sharedPeers.get(n.appId,a);b&&n.sharedPeers.getHealth(b.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),b=void 0);let v=!!(a&&!o&&!l&&!c);if(v&&!b){let _=Ps(n.peerStates,a),C=wn<a;if(_.answeringPeer||_.connectedPeer||_.offerAnswered)return;if(!C&&!_.offerPeer){let T=await Rs(Cs(n.rootTopicPlaintext,a));!n.isLeaving()&&!_.connectedPeer&&r(T,on({peerId:wn}));return}if(_.offerRelays[e])return;_.offerRelays[e]=va,bn(_)}if(b&&(o||l||c)){if(b.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,b);return}if(v)return h0(n,e,a,b,r);if(o)return u0(n,e,a,o,h,u,r);if(c)return d0(n,a,c,h,d);if(l)return f0(n,e,a,l,h,d)},ga=5333,g0=[233,533,1333],y0=7533,x0=123333,_0=({init:n,subscribe:e,announce:t,deactivate:i})=>{let r={},s={},a={},o={},l=new Zm,c=()=>Mr(r).some(C=>vn(C).length>0),h=C=>s[C]??(s[C]={}),d=C=>a[C]??(a[C]={}),u=(C,T,A)=>{l.getHealth(C.peer)==="live"&&l.sendRoomPresence(C,T,A)},f=(C,T)=>{Vi(s[C]??{}).forEach(([A,L])=>{if(!L.shouldAdvertise())return;let{roomToken:ee,roomTokenPromise:x}=L;if(ee){u(T,ee,!0);return}x.then(S=>{s[C]?.[A]===L&&L.roomToken===S&&(l.get(C,T.peerId)!==T||T.isClosing||L.shouldAdvertise()&&u(T,S,!0))})})},g=(C,T,A)=>Mr(l.getMap(C)).forEach(L=>u(L,T,A)),y=C=>{o[C]||(o[C]=l.setRoomPresenceHandler(C,(T,A,L)=>{if(!L)return;let ee=l.get(C,T),x=a[C]?.[A];!ee||!x||s[C]?.[x]?.attachSharedPeerToRoom(T,ee)}))},m=C=>{r[C]&&vn(r[C]).length>0||(o[C]?.(),delete o[C],delete s[C],delete a[C])},p=!1,b=[],v=null,_=jt;return(C,T,A)=>{if(!C)throw ot("requires a config map as the first argument");if(A&&typeof A!="object")throw ot("third argument must be a callbacks object");let{appId:L}=C,ee=A?.onJoinError,x=A?.onPeerHandshake,S=A?.handshakeTimeoutMs;if(!L)throw ot("config map is missing appId field");if(!T)throw ot("roomId argument required");if(S!==void 0&&(!Number.isFinite(S)||S<=0))throw ot("handshakeTimeoutMs must be a positive number");if(r[L]?.[T])return r[L][T];y(L);let q=Cs(In,L,T),z=Rs(q),R=Rs(Cs(q,wn)),k=gm(C.password??"",L,T),N=ym(L,T),Z=C._test_only_sharedPeerIdleMs??x0,V=!1,xe=Me=>async te=>({type:te.type,sdp:await Me(k,te.sdp)}),pe=xe(_m),G=xe(xm),re=l.getMap(L),Ue=()=>Iu(!0,C),ne=!1;v||(v=new bm(Ue));let he=v,ye=async Me=>{let te=await Me.getOffer(Date.now()-Me.created>Rl);if(!te||te.type!=="offer")throw ot("failed to get offer for peer");return(await G(te)).sdp},Te=(Me,te)=>{let ce=Ps(de.peerStates,Me);ce.answeringExpiryTimer=ct(ce.answeringExpiryTimer),ce.answeringPeer=null;let{proxy:Ne,isNew:be}=l.bind(T,N,te,{onDetach:()=>{let fe=de.peerStates[Me];fe?.connectedPeer===te.peer&&(fe.connectedPeer=null,fe.connectedPeerUnhealthySinceMs=null,bn(fe))}});ce.connectedPeer=te.peer,ce.connectedPeerUnhealthySinceMs=null,bn(ce),be&&J(Ne,Me),Is(ce,he)},We=(Me,te,ce)=>{if(V){Me.destroy();return}let Ne=Ps(de.peerStates,te);if(Ne.connectedPeer){let $e=re[te];if($e&&Ne.connectedPeer===$e.peer&&$e.bindings[T])return;Ne.connectedPeer!==Me&&!Me.isDead&&Me.destroy();return}let be=re[te];if(be&&l.getHealth(be.peer)==="stale"&&(l.clear(L,te,{destroyPeer:!0}),be=void 0),be&&be.peer!==Me){Me.isDead||Me.destroy(),Te(te,be);return}let fe=!be;be||(be=l.register(L,te,Me,Z)),Te(te,be),fe&&f(L,be)},Ve=(Me,te)=>{if(V)return;let ce=de.peerStates[te];ce?.connectedPeer===Me&&(bl(ce,te,"close-event"),le(),!Be&&ne&&de.requeueAnnounce?.())},Be=!!C.passive,He=null,se,I=jt,le=()=>{if(!Be||!de.isActive)return;let Me=!1;Vi(de.peerStates).forEach(([te,ce])=>{ce.connectedPeer||ce.answeringPeer||ce.offerInitPromise||ce.offerPeer||ce.offerRelays.some(Boolean)?Me=!0:ce.status==="idle"&&delete de.peerStates[te]}),Me||(de.isActive=!1,se=ct(se),M.forEach(ct),M.length=0,I(),He?.roomToken&&g(L,He.roomToken,!1))},de={appId:L,roomId:T,config:C,peerStates:{},rootTopicPlaintext:q,rootTopicP:z,selfTopicP:R,toPlain:pe,toCipher:G,isLeaving:()=>V,isPassive:Be,isActive:!Be,onJoinError:ee,sharedPeers:l,offerPool:he,encryptOffer:ye,initPeer:Iu,connectPeer:We,disconnectPeer:Ve,attachSharedPeerToRoom:Te,checkDeactivate:le,announceIntervals:[],announceIntervalMs:ga},ge={config:C,appId:L,roomId:T,isPassive:Be},we=m0(de);if(!p){let Me=n(C);b=(Array.isArray(Me)?Me:[Me]).map(te=>Promise.resolve(te)),p=!0,_=C.relayConfig?.manualReconnection?jt:fm()}!Be&&!he.isActive&&he.warmup(),de.announceIntervals=b.map(()=>ga);let ke=b.map(()=>ga),Ae=b.map(()=>0),P=b.map(()=>0),M=[],X=b.map(async(Me,te)=>e(await Me,await z,await R,we(te),ce=>he.getOffers(ce,ye),ge));Xi([z,R]).then(([Me,te])=>{if(V)return;let ce=async(Ne,be)=>{if(V||Be&&!de.isActive)return;let fe=Be?{passive:!0}:void 0,$e;try{$e=await t(Ne,Me,te,fe,ge),P[be]=0}catch(Re){let j=P[be]??0;j===0&&C.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${In}: announce failed - ${Sr(Re,"")}`),P[be]=j+1}if(V||Be&&!de.isActive||$e&&typeof $e!="number"&&"stopAnnouncing"in $e)return;typeof $e=="number"?(de.announceIntervals[be]=$e,ke[be]=$e):$e&&(ke[be]=$e.nextAnnounceMs,ne||(ne=$e.reannounceOnDisconnect===!0));let Xe=Ae[be]??0;Ae[be]=Xe+1;let st=ke[be]??ga,F=g0[Xe];M[be]=setTimeout(()=>{ce(Ne,be)},typeof F=="number"?Math.min(st,F):st)};I=()=>{i&&b.forEach(async Ne=>{let be=await Ne;V||i(be,Me,te,ge)})},de.requeueAnnounce=()=>{M.forEach(ct),M.length=0,se=ct(se),he.isActive||he.warmup(),He?.roomToken&&g(L,He.roomToken,!0),se=setTimeout(le,y0),b.forEach(async(Ne,be)=>{let fe=await Ne;fe&&!V&&(Ae[be]=0,ce(fe,be))})},X.forEach(async(Ne,be)=>{if(await Ne,V)return;let fe=await b[be];fe&&!V&&(!Be||de.isActive)&&ce(fe,be)})});let J=jt,{compose:oe}=Sm(C.password??"",L,T),ae=oe(x),Oe={...ae?{onPeerHandshake:ae}:{},...S===void 0?{}:{handshakeTimeoutMs:S},isPassive:Be,onHandshakeError:(Me,te)=>ee?.({error:te.replace(/^handshake failed: /,""),appId:L,peerId:Me,roomId:T})};r[L]??(r[L]={});let Ce=h(L),Le=$m(Me=>J=Me,Me=>{if(V)return;let te=de.peerStates[Me];te?.connectedPeer&&(te.connectedPeer=null,bn(te),le())},()=>{V=!0,J=jt;let Me=s[L]?.[T];Me?.roomToken&&(g(L,Me.roomToken,!1),delete a[L]?.[Me.roomToken],a[L]&&!vn(a[L]).length&&delete a[L]),s[L]&&(delete s[L][T],vn(s[L]).length||delete s[L]),Vi(de.peerStates).forEach(([te,ce])=>{if(ce.answeringExpiryTimer=ct(ce.answeringExpiryTimer),ce.connectedPeer&&!ce.connectedPeer.isDead){let Ne=re[te];(!Ne||Ne.peer!==ce.connectedPeer)&&ce.connectedPeer.destroy()}ce.answeringPeer&&!ce.answeringPeer.isDead&&ce.answeringPeer.destroy(),Is(ce,he),ce.connectedPeer=null,ce.answeringPeer=null,bn(ce)}),r[L]&&(delete r[L][T],vn(r[L]).length===0&&delete r[L]),M.forEach(ct),se=ct(se),X.forEach(async te=>{(await te)()}),!c()&&(p=!1,he.destroy(),v=null,_(),m(L))},Oe);return He={roomToken:null,roomTokenPromise:N,attachSharedPeerToRoom:Te,shouldAdvertise:()=>!Be||de.isActive},Ce[T]=He,N.then(Me=>{let te=He;!te||V||s[L]?.[T]!==te||(te.roomToken=Me,d(L)[Me]=T,Mr(re).forEach(ce=>{ce.remoteRoomTokens.has(Me)&&Te(ce.peerId,ce)}),(!Be||de.isActive)&&g(L,Me,!0))}),r[L][T]=Le}},v0=["offer","answer","candidate"],M0=6e4,b0=n=>{if(typeof n=="string")try{let e=wr(n);return e&&typeof e=="object"?e:null}catch{return null}return n},dl=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,S0=n=>v0.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),w0=n=>{let e=b0(n);if(!e||S0(e))return!1;let t=dl(e,"peerId");return!!(t&&t!==wn&&e.passive!==!0&&!dl(e,"answer")&&!dl(e,"candidate"))},fl=n=>{if(!n)throw ot("topic strategy missing room context");return n},Gu=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),pl=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),T0=({steadyAnnounceIntervalMs:n=M0,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:r,unpublishTopic:s})=>_0({init:t,subscribe:async(a,o,l,c,h,d)=>{let u=fl(d),f=(C,T)=>{r(a,C,T,pl(u,"signal",o,l))},g=null,y=!1,m=null,p=!1,b=C=>{y||(y=!0,C())},v=()=>(m||(m=Promise.resolve(i(a,l,(C,T)=>{p||c(C,T,f)},Gu(u,"self",o,l))).then(C=>{g=C,p&&b(C)})),m);u.isPassive||await v();let _=await i(a,o,async(C,T)=>{p||(u.isPassive&&w0(T)&&await v(),p||await c(C,T,f))},Gu(u,"root",o,l));return()=>{p=!0,g&&b(g),_()}},announce:async(a,o,l,c,h)=>{let d=fl(h),u=await r(a,o,on({peerId:wn,...c}),pl(d,"announce",o,l));return typeof u=="number"||u!==void 0&&"stopAnnouncing"in u?u:{nextAnnounceMs:u?.nextAnnounceMs??n,reannounceOnDisconnect:u?.reannounceOnDisconnect??e}},...s?{deactivate:(a,o,l,c)=>{let h=fl(c);return s(a,o,pl(h,"announce",o,l))}}:{}}),Ad=dm(n=>n.socket),E0=5,Cd="x",Rd="EVENT",{secretKey:A0,publicKey:C0}=dd.keygen(),R0=As(C0),Pd={},P0={},ml={},Wu=250,Ma=6e4,I0=15*6e4,L0=5333,Ls=new WeakMap,Sl=new WeakSet,Gi=new WeakMap,$u=n=>{let e=Ls.get(n),t=Math.min(e?.delayMs?Math.max(Ma,e.delayMs*2):Ma,I0);return Ls.set(n,{delayMs:t,untilMs:Date.now()+t}),t},D0=n=>{let e=Ls.get(n);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},gl=n=>({nextAnnounceMs:n}),U0={stopAnnouncing:!0},N0=n=>{if(Sl.has(n))return!1;let e=Gi.get(n);return e&&(clearTimeout(e.timer),Gi.delete(n)),Sl.add(n),Ls.delete(n),n.close?.(),!0},k0=(n,e)=>{let t=Gi.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));let i=t?.eventIds??new Set([e]),r=setTimeout(()=>{Gi.delete(n)},L0);Gi.set(n,{eventIds:i,timer:r})},O0=(n,e)=>{let t=Gi.get(n);return t?.eventIds.has(e)?(clearTimeout(t.timer),Gi.delete(n),!0):!1},Il=()=>Math.floor(Date.now()/1e3),Ll=n=>ml[n]??(ml[n]=gd(n,1e4)+2e4),Id=async(n,e)=>{let t={kind:Ll(n),tags:[[Cd,n]],created_at:Il(),content:e,pubkey:R0},i=await wa("SHA-256",on([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return on([Rd,{...t,id:As(i),sig:As(await dd.signAsync(i,A0))}])},F0=(n,e)=>(Pd[n]=e,on(["REQ",n,{kinds:[Ll(e)],since:Il(),"#x":[e]}])),Yn={},Ld=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},B0=(n,e,t)=>{var r;let i=Yn[r=n.url]??(Yn[r]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),Dd(n,i)},z0=(n,e)=>{let t=Yn[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Ld(t),t.subIds.forEach(i=>n.send(on(["CLOSE",i]))),delete Yn[n.url]):Dd(n,t))},Dd=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Ud(n)}finally{Ld(e)}},0))},H0=n=>{let e=Yn[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Ud=n=>{let e=Yn[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],r=Il();for(let s=0;s<t.length;s+=Wu)i.push(t.slice(s,s+Wu));for(;e.subIds.length>i.length;){let s=e.subIds.pop();s&&n.send(on(["CLOSE",s]))}i.forEach((s,a)=>{var l;let o=(l=e.subIds)[a]??(l[a]=Er(64));n.send(on(["REQ",o,{kinds:[...new Set(s.map(Ll))],since:r,"#x":s}]))})},V0=n=>{let e=Yn[n.url];e&&e.topics.size>0&&Ud(n)},G0=T0({init:n=>hm(n,Nd,E0,!0).map(e=>{let t=Ad.register(e,()=>um(e,i=>{let[r,s,a,o]=wr(i);if(r!==Rd){let l=`${In}: relay failure from ${t.url} - `,c=r==="CLOSED"&&typeof a=="string"?a:o,h=r==="OK"&&a===!1,d=h&&c?.startsWith("rate-limited:"),u=h&&c?.startsWith("duplicate:"),f=r==="CLOSED"||h&&!d&&!u,g=r==="OK"&&O0(t,s);if(f&&!N0(t))return;d?$u(t):g&&Ls.delete(t),!u&&n.relayConfig?.warnOnRelayFailure!==!1&&(r==="NOTICE"?console.warn(l+s):(h||r==="CLOSED")&&console.warn(l+c));return}if(a&&typeof a=="object"&&"content"in a){let{content:l}=a,c=P0[s];if(c){c(Pd[s]??"",l);return}let h=Yn[t.url];if(h?.subIds.includes(s)&&a.tags){let d=a.tags.find(u=>u[0]===Cd);d?.[1]&&h.topics.get(d[1])?.(d[1],l)}}},()=>V0(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{B0(n,e,(s,a)=>{t(s,a)});let r=()=>{z0(n,e)};return i.kind==="root"?H0(n).then(()=>r):r},publishTopic:async(n,e,t,i)=>{if(Sl.has(n)||n.isClosed)return i.kind==="announce"?U0:void 0;if(i.kind==="announce"){let o=D0(n);if(o>0)return gl(Math.max(Ma,o))}let r=await Id(e,typeof t=="string"?t:on(t)),s=n.socket.readyState===1;if(n.send(r),i.kind!=="announce")return;if(!s)return gl($u(n));let a=wr(r)[1].id;return k0(n,a),gl(Ma)}}),W0=Ad.getSockets,Nd=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);});var el=document.documentElement,uu=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,du=()=>el.dataset.theme||(uu?.matches?"dark":"light");function jo(){let n=du()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(e=>{e.textContent=n?"\u2600\uFE0F":"\u{1F319}",e.title=n?"Chuy\u1EC3n sang giao di\u1EC7n s\xE1ng":"Chuy\u1EC3n sang giao di\u1EC7n t\u1ED1i",e.setAttribute("aria-label",e.title)})}function Fp(){try{let n=localStorage.getItem("theme");(n==="dark"||n==="light")&&(el.dataset.theme=n)}catch{}document.querySelectorAll("[data-theme-toggle]").forEach(n=>{n.onclick=()=>{let e=du()==="dark"?"light":"dark";el.dataset.theme=e;try{localStorage.setItem("theme",e)}catch{}jo()}}),uu?.addEventListener?.("change",jo),jo()}Fp();var bt=n=>`<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${n}</svg>`,tl={wolf:bt(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),villager:bt(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),seer:bt(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),guard:bt(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),witch:bt(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),hunter:bt(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`)},UM={moon:bt('<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>'),sun:bt('<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>'),skull:bt('<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>'),vote:bt('<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>'),noose:bt('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>'),mic:bt('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>'),micOff:bt('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>'),speaker:bt('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>'),speakerOff:bt('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>'),crown:bt('<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>'),copy:bt('<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>'),chat:bt('<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>'),users:bt('<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>'),card:bt('<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>'),door:bt('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>'),heal:bt('<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>'),poison:bt('<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>')},Bp={wolf:{id:"wolf",name:"Ma S\xF3i",team:"wolf",color:"#ff5d6c",short:"M\u1ED7i \u0111\xEAm c\xF9ng b\u1EA7y ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 c\u1EAFn.",desc:"M\u1ED7i \u0111\xEAm, c\u1EA3 b\u1EA7y s\xF3i m\u1EDF m\u1EAFt, nh\xECn th\u1EA5y nhau v\xE0 c\xF9ng ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 c\u1EAFn. Ban ng\xE0y gi\u1EA3 l\xE0m d\xE2n l\xE0nh. Th\u1EAFng khi s\u1ED1 s\xF3i b\u1EB1ng ho\u1EB7c nhi\u1EC1u h\u01A1n s\u1ED1 ng\u01B0\u1EDDi c\xF2n l\u1EA1i."},villager:{id:"villager",name:"D\xE2n L\xE0ng",team:"village",color:"#f2b65a",short:"Kh\xF4ng c\xF3 n\u0103ng l\u1EF1c, ch\u1EC9 c\xF3 l\xFD l\u1EBD v\xE0 l\xE1 phi\u1EBFu.",desc:"Kh\xF4ng c\xF3 n\u0103ng l\u1EF1c \u0111\u1EB7c bi\u1EC7t. Ban ng\xE0y th\u1EA3o lu\u1EADn, suy lu\u1EADn v\xE0 b\u1ECF phi\u1EBFu treo c\u1ED5 k\u1EBB \u0111\xE1ng nghi. Th\u1EAFng khi t\u1EA5t c\u1EA3 s\xF3i b\u1ECB ti\xEAu di\u1EC7t."},seer:{id:"seer",name:"Ti\xEAn Tri",team:"village",color:"#a78bff",short:"M\u1ED7i \u0111\xEAm soi m\u1ED9t ng\u01B0\u1EDDi: l\xE0 s\xF3i hay kh\xF4ng.",desc:"M\u1ED7i \u0111\xEAm ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 soi, qu\u1EA3n tr\xF2 s\u1EBD cho bi\u1EBFt ng\u01B0\u1EDDi \u0111\xF3 c\xF3 ph\u1EA3i l\xE0 S\xF3i hay kh\xF4ng. H\xE3y kh\xE9o l\xE9o d\u1EABn d\u1EAFt d\xE2n l\xE0ng m\xE0 kh\xF4ng \u0111\u1EC3 l\u1ED9 th\xE2n ph\u1EADn."},guard:{id:"guard",name:"B\u1EA3o V\u1EC7",team:"village",color:"#54b4ff",short:"M\u1ED7i \u0111\xEAm b\u1EA3o v\u1EC7 m\u1ED9t ng\u01B0\u1EDDi kh\u1ECFi s\xF3i.",desc:"M\u1ED7i \u0111\xEAm ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi (c\xF3 th\u1EC3 l\xE0 ch\xEDnh m\xECnh) \u0111\u1EC3 b\u1EA3o v\u1EC7 kh\u1ECFi b\u1ECB s\xF3i c\u1EAFn. Kh\xF4ng \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 c\xF9ng m\u1ED9t ng\u01B0\u1EDDi hai \u0111\xEAm li\xEAn ti\u1EBFp."},witch:{id:"witch",name:"Ph\xF9 Th\u1EE7y",team:"village",color:"#3fd69a",short:"M\u1ED9t b\xECnh c\u1EE9u, m\u1ED9t b\xECnh \u0111\u1ED9c.",desc:"C\xF3 m\u1ED9t b\xECnh thu\u1ED1c c\u1EE9u v\xE0 m\u1ED9t b\xECnh thu\u1ED1c \u0111\u1ED9c, m\u1ED7i b\xECnh d\xF9ng m\u1ED9t l\u1EA7n trong c\u1EA3 v\xE1n. Khi c\xF2n b\xECnh c\u1EE9u, m\u1ED7i \u0111\xEAm \u0111\u01B0\u1EE3c bi\u1EBFt ai b\u1ECB s\xF3i c\u1EAFn \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh c\u1EE9u hay kh\xF4ng."},hunter:{id:"hunter",name:"Th\u1EE3 S\u0103n",team:"village",color:"#ff9447",short:"Khi ch\u1EBFt \u0111\u01B0\u1EE3c b\u1EAFn ch\u1EBFt m\u1ED9t ng\u01B0\u1EDDi.",desc:"Khi ch\u1EBFt (b\u1ECB s\xF3i c\u1EAFn ho\u1EB7c b\u1ECB treo c\u1ED5), \u0111\u01B0\u1EE3c k\xE9o theo m\u1ED9t ng\u01B0\u1EDDi b\u1EA5t k\u1EF3. N\u1EBFu ch\u1EBFt v\xEC thu\u1ED1c \u0111\u1ED9c c\u1EE7a Ph\xF9 th\u1EE7y th\xEC kh\xF4ng \u0111\u01B0\u1EE3c b\u1EAFn."}};function fu(n,e="md"){let t=Bp[n];return t?`<span class="role-badge ${e}" style="--c:${t.color}" title="${t.name}">${tl[n]}</span>`:""}var Fi=["\u{1F98A}","\u{1F43C}","\u{1F42F}","\u{1F438}","\u{1F435}","\u{1F427}","\u{1F981}","\u{1F428}","\u{1F430}","\u{1F419}","\u{1F984}","\u{1F432}","\u{1F43B}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F433}","\u{1F996}"],yr=["#ff6b6b","#ffa94d","#ffd43b","#38d9a9","#4dabf7","#9775fa","#f783ac","#69db7c"];var fn=(n,e=document)=>e.querySelector(n),xr=(n,e=document)=>[...e.querySelectorAll(n)],nl=new URLSearchParams(location.search),il=nl.get("local")==="1"||window.MASOI_LOCAL===!0;function mu(n){return{get:e=>{try{return n().getItem(e)}catch{return null}},set:(e,t)=>{try{n().setItem(e,t)}catch{}},del:e=>{try{n().removeItem(e)}catch{}}}}var OM=mu(()=>sessionStorage),Bi=mu(()=>localStorage),gs=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function gu(n){let e="abcdefghijkmnpqrstuvwxyz23456789",t="";for(let i of crypto.getRandomValues(new Uint8Array(n)))t+=e[i%e.length];return t}function yu(){if(il&&nl.get("as")){let e=nl.get("as").slice(0,18),t=[...e].reduce((i,r)=>i+r.codePointAt(0),0);return{name:e,av:{e:Fi[t%Fi.length],c:t%yr.length},test:!0}}let n=null;try{n=JSON.parse(Bi.get("masoi-av")||"null")}catch{}return(!n||!Fi.includes(n.e))&&(n={e:Fi[Math.floor(Math.random()*Fi.length)],c:Math.floor(Math.random()*yr.length)}),{name:Bi.get("masoi-name")||"",av:n}}function fa(n){n.test||(Bi.set("masoi-name",n.name||""),Bi.set("masoi-av",JSON.stringify(n.av)))}var ys=(n,e="")=>n?.av?`<span class="avatar ${e}" style="--av:${yr[n.av.c]||yr[0]}">${n.av.e}</span>`:`<span class="avatar ${e}">?</span>`;function xu(n,e,t){let i=()=>{n.innerHTML=`
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${Fi.map(r=>`<button type="button" class="${r===e.av.e?"on":""}" data-e="${r}" aria-label="Avatar ${r}">${r}</button>`).join("")}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">M\xE0u n\u1EC1n</div>
      <div class="color-row">${yr.map((r,s)=>`<button type="button" class="${s===e.av.c?"on":""}" data-c="${s}" style="--sw:${r}" aria-label="M\xE0u ${s+1}"></button>`).join("")}</div>`,xr("[data-e]",n).forEach(r=>r.onclick=()=>{e.av.e=r.dataset.e,fa(e),i(),t?.()}),xr("[data-c]",n).forEach(r=>r.onclick=()=>{e.av.c=Number(r.dataset.c),fa(e),i(),t?.()})};i()}var pu;function zp(){try{pu||(pu=new(window.AudioContext||window.webkitAudioContext)),pu.resume()}catch{}}document.addEventListener("pointerdown",zp,{once:!0});var pa=typeof window<"u"&&window.SITE_CONFIG||{},_r={appId:"masoi-online-vn-v1",turn:Array.isArray(pa.turn)?pa.turn.filter(n=>n&&n.urls):[],relayUrls:Array.isArray(pa.relayUrls)?pa.relayUrls:[]};async function Fd(n,{local:e=!1,ns:t=""}={}){let i=(t?t+"-":"")+n.toUpperCase();return e?X0(i):$0(i)}async function $0(n){let{joinRoom:e,selfId:t}=await Promise.resolve().then(()=>(Od(),kd)),i={appId:_r.appId};_r.turn?.length&&(i.turnConfig=_r.turn),_r.relayUrls?.length&&(i.relayConfig={urls:_r.relayUrls});let r=e(i,n,{onJoinError:c=>console.warn("[net] join error",c)}),s={},a={},o={selfId:t,mode:"p2p",on(c,h){a[c]=h,l(c).onMessage=(d,{peerId:u})=>h(d,u)},send(c,h,d=null){return l(c).send(h,d?{target:d}:void 0).catch(u=>console.warn("[net] send",u))},peers:()=>Object.keys(r.getPeers()),set onPeerJoin(c){r.onPeerJoin=c},set onPeerLeave(c){r.onPeerLeave=c},set onPeerStream(c){r.onPeerStream=c},addStream:(c,h)=>r.addStream(c,h?{target:h}:void 0),removeStream:c=>r.removeStream(c),leave:()=>r.leave()};function l(c){return s[c]||(s[c]=r.makeAction(c))}return o}function X0(n){let e=Math.random().toString(36).slice(2,10),t=new BroadcastChannel("masoi-"+n),i={},r=new Map,s=()=>{},a=()=>{},o=c=>t.postMessage({...c,from:e});t.onmessage=({data:c})=>{if(c.from===e||c.to&&!c.to.includes(e))return;let h=!r.has(c.from);if(r.set(c.from,Date.now()),c.k==="bye"){r.delete(c.from),a(c.from);return}h&&(s(c.from),o({k:"hi",to:[c.from]})),c.k==="msg"&&setTimeout(()=>i[c.type]?.(c.data,c.from),0)};let l=setInterval(()=>{o({k:"hi"});let c=Date.now();for(let[h,d]of r)c-d>6e3&&(r.delete(h),a(h))},1500);return window.addEventListener("beforeunload",()=>o({k:"bye"})),setTimeout(()=>o({k:"hi"}),50),{selfId:e,mode:"local",on(c,h){i[c]=h},send(c,h,d=null){return o({k:"msg",type:c,data:JSON.parse(JSON.stringify(h)),to:d?[].concat(d):null}),Promise.resolve()},peers:()=>[...r.keys()],set onPeerJoin(c){s=c;for(let h of r.keys())c(h)},set onPeerLeave(c){a=c},set onPeerStream(c){},addStream(){},removeStream(){},leave(){o({k:"bye"}),clearInterval(l),t.close()}}}var Ns=null;function q0(){return Ns||(Ns=document.createElement("div"),Ns.className="overlay site-modal hidden",document.body.appendChild(Ns)),Ns}function Bd(n,{required:e=!1,onSave:t}={}){let i=q0();i.innerHTML=`<form class="modal panel pf-modal" autocomplete="off">
    <div class="pf-head">${ys(n,"xl")}<div><h2 style="margin:0">${e?"Ch\xE0o b\u1EA1n! \u{1F44B}":"H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n"}</h2>
    <p class="muted" style="margin:4px 0 0">${e?"\u0110\u1EB7t t\xEAn v\xE0 ch\u1ECDn avatar m\u1ED9t l\u1EA7n \u2014 v\xE0o game n\xE0o c\u0169ng d\xF9ng lu\xF4n, kh\xF4ng ph\u1EA3i nh\u1EADp l\u1EA1i.":"T\xEAn v\xE0 avatar d\xF9ng chung cho m\u1ECDi game."}</p></div></div>
    <label class="field"><span>T\xEAn hi\u1EC3n th\u1ECB</span><input id="pfName" maxlength="18" value="${gs(n.name)}" placeholder="VD: S\xF3i Gi\xE0, Vua Nh\u1EA1i..." required /></label>
    <div id="pfAv"></div>
    <div class="pf-btns">${e?"":'<button type="button" class="btn" data-close>Hu\u1EF7</button>'}<button class="btn primary big" type="submit">${e?"V\xE0o s\xE2n ch\u01A1i \u2192":"L\u01B0u"}</button></div>
  </form>`,i.classList.remove("hidden");let r=()=>{let o=fn(".pf-head .avatar",i);o&&(o.outerHTML=ys(n,"xl"))};xu(fn("#pfAv",i),n,r);let s=()=>{i.classList.add("hidden"),i.innerHTML=""};i.onclick=o=>{!e&&o.target===i&&s()},xr("[data-close]",i).forEach(o=>o.onclick=s);let a=fn("#pfName",i);setTimeout(()=>a.focus(),50),fn("form",i).onsubmit=o=>{o.preventDefault();let l=a.value.trim().slice(0,18);if(!l){a.focus();return}n.name=l,fa(n),s(),t?.(n),Y0()}}var zd=(n,e)=>{n.name||Bd(n,{required:!0,onSave:e})};function Dl(n,e){let t=fn(".home-nav .nav-right");if(!t)return()=>{};let i=fn("#profileBtn");i||(i=document.createElement("button"),i.type="button",i.id="profileBtn",i.className="profile-chip",t.appendChild(i));let r=()=>{i.innerHTML=`${ys(n,"sm")}<span>${gs(n.name||"\u0110\u1EB7t t\xEAn")}</span>`};return i.onclick=()=>Bd(n,{onSave:()=>{r(),e?.(n)}}),r(),r}var ln=null,qi=null,Hd=()=>qi||(qi=Bi.get("site-did"),qi||(qi=gu(10),Bi.set("site-did",qi)),qi);async function Vd(n,e){if(ln)return ln;let t=fn(".home-nav .nav-right"),i=document.createElement("button");i.type="button",i.className="online-chip",i.title="S\u1ED1 ng\u01B0\u1EDDi \u0111ang m\u1EDF S\xE2n Ch\u01A1i",i.innerHTML='<i class="dot"></i><b>1</b><span>online</span>',t?.prepend(i);let r=document.createElement("div");r.className="online-pop panel hidden",document.body.appendChild(r),i.onclick=l=>{l.stopPropagation(),r.classList.toggle("hidden"),o()},document.addEventListener("click",l=>{r.contains(l.target)||r.classList.add("hidden")});let s=new Map;ln={prof:n,page:e,peers:s,chip:i,pop:r,net:null};let a=()=>({did:Hd(),name:n.name||"Kh\xE1ch",av:n.av,page:ln.page});function o(){let l=[a(),...s.values()],c=new Map;for(let d of l)d?.did&&!c.has(d.did)&&c.set(d.did,d);let h=Math.max(1,c.size);fn("b",i).textContent=h,r.innerHTML=`<div class="op-head"><i class="dot"></i><b>${h} ng\u01B0\u1EDDi \u0111ang online</b></div>
      ${[...c.values()].map((d,u)=>`<div class="op-row">${ys(d,"sm")}<div><b>${gs(d.name)}${u===0?' <span class="muted">(b\u1EA1n)</span>':""}</b><div class="muted">${gs(d.page||"")}</div></div></div>`).join("")}
      ${h===1?'<p class="muted" style="margin:6px 0 0;font-size:12.5px">Ch\u01B0a th\u1EA5y ai kh\xE1c. G\u1EEDi link cho b\u1EA1n b\xE8 nh\xE9!</p>':""}`}ln.draw=o,o();try{let l=await Fd("ONLINE",{local:il,ns:"presence"});ln.net=l,l.on("me",(c,h)=>{c&&typeof c=="object"&&(s.set(h,{did:String(c.did||h).slice(0,20),name:String(c.name||"Kh\xE1ch").slice(0,18),av:c.av,page:String(c.page||"").slice(0,40)}),o())}),l.onPeerJoin=c=>{l.send("me",a(),c)},l.onPeerLeave=c=>{s.delete(c),o()},l.send("me",a())}catch(l){console.warn("[presence]",l)}return ln}function Y0(n){ln&&(n&&(ln.page=n),ln.draw?.(),ln.net?.send("me",{did:Hd(),name:ln.prof.name||"Kh\xE1ch",av:ln.prof.av,page:ln.page}))}var Z0=0,Gd=1,J0=2;var Xf=1,Fh=2,ti=3,Ei=0,Jt=1,Dt=2,wi=0,qr=1,Kr=2,Wd=3,$d=4,K0=5,tr=100,Q0=101,j0=102,eg=103,tg=104,ng=200,ig=201,rg=202,sg=203,gc=204,yc=205,ag=206,og=207,lg=208,cg=209,hg=210,ug=211,dg=212,fg=213,pg=214,xc=0,_c=1,vc=2,Qr=3,Mc=4,bc=5,Sc=6,wc=7,qf=0,mg=1,gg=2,Ti=0,yg=1,xg=2,_g=3,vg=4,Mg=5,bg=6,Sg=7;var Yf=300,jr=301,es=302,Tc=303,Ec=304,zo=306,Zs=1e3,ir=1001,Ac=1002,Zt=1003,wg=1004;var Ea=1005;var Nn=1006,Ul=1007;var rr=1008;var ai=1009,Zf=1010,Jf=1011,Js=1012,Bh=1013,sr=1014,ii=1015,aa=1016,zh=1017,Hh=1018,ts=1020,Kf=35902,Qf=1021,jf=1022,kn=1023,ep=1024,tp=1025,Yr=1026,ns=1027,Ho=1028,Vh=1029,np=1030,Gh=1031;var Wh=1033,eo=33776,to=33777,no=33778,io=33779,Cc=35840,Rc=35841,Pc=35842,Ic=35843,Lc=36196,Dc=37492,Uc=37496,Nc=37808,kc=37809,Oc=37810,Fc=37811,Bc=37812,zc=37813,Hc=37814,Vc=37815,Gc=37816,Wc=37817,$c=37818,Xc=37819,qc=37820,Yc=37821,ro=36492,Zc=36494,Jc=36495,ip=36283,Kc=36284,Qc=36285,jc=36286;var ao=2300,eh=2301,Nl=2302,Xd=2400,qd=2401,Yd=2402;var Tg=3200,Eg=3201;var $h=0,Ag=1,bi="",Bt="srgb",Ii="srgb-linear",Xh="display-p3",Vo="display-p3-linear",oo="linear",pt="srgb",lo="rec709",co="p3";var Ar=7680;var Zd=519,Cg=512,Rg=513,Pg=514,rp=515,Ig=516,Lg=517,Dg=518,Ug=519,th=35044;var Jd="300 es",ri=2e3,ho=2001,Ai=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}},Xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var kl=Math.PI/180,uo=180/Math.PI;function si(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Xt[n&255]+Xt[n>>8&255]+Xt[n>>16&255]+Xt[n>>24&255]+"-"+Xt[e&255]+Xt[e>>8&255]+"-"+Xt[e>>16&15|64]+Xt[e>>24&255]+"-"+Xt[t&63|128]+Xt[t>>8&255]+"-"+Xt[t>>16&255]+Xt[t>>24&255]+Xt[i&255]+Xt[i>>8&255]+Xt[i>>16&255]+Xt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function Ng(n,e){return(n%e+e)%e}function Ol(n,e,t){return(1-t)*n+t*e}function Vn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ut(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ve=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class n{constructor(e,t,i,r,s,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c)}set(e,t,i,r,s,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],y=r[0],m=r[3],p=r[6],b=r[1],v=r[4],_=r[7],C=r[2],T=r[5],A=r[8];return s[0]=a*y+o*b+l*C,s[3]=a*m+o*v+l*T,s[6]=a*p+o*_+l*A,s[1]=c*y+h*b+d*C,s[4]=c*m+h*v+d*T,s[7]=c*p+h*_+d*A,s[2]=u*y+f*b+g*C,s[5]=u*m+f*v+g*T,s[8]=u*p+f*_+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*s*h+i*o*l+r*s*c-r*a*l}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*s,f=c*s-a*l,g=t*d+i*u+r*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=d*y,e[1]=(r*c-h*i)*y,e[2]=(o*i-r*a)*y,e[3]=u*y,e[4]=(h*t-r*l)*y,e[5]=(r*s-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*s)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){let l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Fl.makeScale(e,t)),this}rotate(e){return this.premultiply(Fl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Fl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Fl=new Qe;function sp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function fo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function kg(){let n=fo("canvas");return n.style.display="block",n}var Kd={};function so(n){n in Kd||(Kd[n]=!0,console.warn(n))}function Og(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}function Fg(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Bg(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Qd=new Qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jd=new Qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ks={[Ii]:{transfer:oo,primaries:lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Bt]:{transfer:pt,primaries:lo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Vo]:{transfer:oo,primaries:co,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(jd),fromReference:n=>n.applyMatrix3(Qd)},[Xh]:{transfer:pt,primaries:co,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(jd),fromReference:n=>n.applyMatrix3(Qd).convertLinearToSRGB()}},zg=new Set([Ii,Vo]),lt={enabled:!0,_workingColorSpace:Ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!zg.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ks[e].toReference,r=ks[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ks[n].primaries},getTransfer:function(n){return n===bi?oo:ks[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ks[e].luminanceCoefficients)}};function Zr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bl(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Cr,nh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Cr===void 0&&(Cr=fo("canvas")),Cr.width=e.width,Cr.height=e.height;let i=Cr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Cr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=fo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Zr(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zr(t[i]/255)*255):t[i]=Zr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hg=0,po=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hg++}),this.uuid=si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(zl(r[a].image)):s.push(zl(r[a]))}else s=zl(r);i.url=s}return t||(e.images[this.uuid]=i),i}};function zl(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Vg=0,cn=class n extends Ai{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=ir,r=ir,s=Nn,a=rr,o=kn,l=ai,c=n.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vg++}),this.uuid=si(),this.name="",this.source=new po(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zs:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case Ac:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zs:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case Ac:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Yf;cn.DEFAULT_ANISOTROPY=1;var Et=class n{constructor(e=0,t=0,i=0,r=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,_=(f+1)/2,C=(p+1)/2,T=(h+u)/4,A=(d+y)/4,L=(g+m)/4;return v>_&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=A/i):_>C?_<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),i=T/r,s=L/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=A/s,r=L/s),this.set(i,r,s,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-y)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ih=class extends Ai{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Et(0,0,e,t),this.scissorTest=!1,this.viewport=new Et(0,0,e,t);let r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let s=new cn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new po(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},oi=class extends ih{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},mo=class extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var rh=class extends cn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Zt,this.minFilter=Zt,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ci=class{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],h=i[r+2],d=i[r+3],u=s[a+0],f=s[a+1],g=s[a+2],y=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(d!==y||l!==u||c!==f||h!==g){let m=1-o,p=l*u+c*f+h*g+d*y,b=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let C=Math.sqrt(v),T=Math.atan2(C,p*b);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let _=o*b;if(l=l*m+u*_,c=c*m+f*_,h=h*m+g*_,d=d*m+y*_,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,a){let o=i[r],l=i[r+1],c=i[r+2],h=i[r+3],d=s[a],u=s[a+1],f=s[a+2],g=s[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(r/2),d=o(s/2),u=l(i/2),f=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+r*c-s*l,this._y=r*h+a*l+s*o-i*c,this._z=s*h+a*c+i*l-r*o,this._w=a*h-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,r=this._y,s=this._z,a=this._w,o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=r*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ef.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ef.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),h=2*(o*t-s*r),d=2*(s*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-s*d,this.z=r+l*d+s*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Hl.copy(this).projectOnVector(e),this.sub(Hl)}reflect(e){return this.sub(Hl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hl=new H,ef=new Ci,ar=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ln.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ln.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Ln.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ln):Ln.fromBufferAttribute(s,a),Ln.applyMatrix4(e.matrixWorld),this.expandByPoint(Ln);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Aa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Aa.copy(i.boundingBox)),Aa.applyMatrix4(e.matrixWorld),this.union(Aa)}let r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ln),Ln.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Os),Ca.subVectors(this.max,Os),Rr.subVectors(e.a,Os),Pr.subVectors(e.b,Os),Ir.subVectors(e.c,Os),gi.subVectors(Pr,Rr),yi.subVectors(Ir,Pr),Yi.subVectors(Rr,Ir);let t=[0,-gi.z,gi.y,0,-yi.z,yi.y,0,-Yi.z,Yi.y,gi.z,0,-gi.x,yi.z,0,-yi.x,Yi.z,0,-Yi.x,-gi.y,gi.x,0,-yi.y,yi.x,0,-Yi.y,Yi.x,0];return!Vl(t,Rr,Pr,Ir,Ca)||(t=[1,0,0,0,1,0,0,0,1],!Vl(t,Rr,Pr,Ir,Ca))?!1:(Ra.crossVectors(gi,yi),t=[Ra.x,Ra.y,Ra.z],Vl(t,Rr,Pr,Ir,Ca))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ln).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ln).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Jn=[new H,new H,new H,new H,new H,new H,new H,new H],Ln=new H,Aa=new ar,Rr=new H,Pr=new H,Ir=new H,gi=new H,yi=new H,Yi=new H,Os=new H,Ca=new H,Ra=new H,Zi=new H;function Vl(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zi.fromArray(n,s);let o=r.x*Math.abs(Zi.x)+r.y*Math.abs(Zi.y)+r.z*Math.abs(Zi.z),l=e.dot(Zi),c=t.dot(Zi),h=i.dot(Zi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var Gg=new ar,Fs=new H,Gl=new H,Ks=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):Gg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);let t=Fs.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Fs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Gl)),this.expandByPoint(Fs.copy(e.center).sub(Gl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Kn=new H,Wl=new H,Pa=new H,xi=new H,$l=new H,Ia=new H,Xl=new H,sh=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Wl.copy(e).add(t).multiplyScalar(.5),Pa.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Wl);let s=e.distanceTo(t)*.5,a=-this.direction.dot(Pa),o=xi.dot(this.direction),l=-xi.dot(Pa),c=xi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=s*h,d>=0)if(u>=-g)if(u<=g){let y=1/h;d*=y,u*=y,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*s+o)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(a*s+o)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=a>0?-s:s,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(Wl).addScaledVector(Pa,u),f}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);let i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,s=e.radius*e.radius;if(r>s)return null;let a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,r=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,r=(e.min.x-u.x)*c),h>=0?(s=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(s=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,s){$l.subVectors(t,e),Ia.subVectors(i,e),Xl.crossVectors($l,Ia);let a=this.direction.dot(Xl),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;xi.subVectors(this.origin,e);let l=o*this.direction.dot(Ia.crossVectors(xi,Ia));if(l<0)return null;let c=o*this.direction.dot($l.cross(xi));if(c<0||l+c>a)return null;let h=-o*xi.dot(Xl);return h<0?null:this.at(h/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class n{constructor(e,t,i,r,s,a,o,l,c,h,d,u,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,a,o,l,c,h,d,u,f,g,y,m)}set(e,t,i,r,s,a,o,l,c,h,d,u,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,r=1/Lr.setFromMatrixColumn(e,0).length(),s=1/Lr.setFromMatrixColumn(e,1).length(),a=1/Lr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-y*c,t[9]=-o*l,t[2]=y-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,y=c*d;t[0]=u-y*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,y=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+y,t[1]=l*d,t[5]=y*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-y*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+y,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=y*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wg,e,$g)}lookAt(e,t,i){let r=this.elements;return pn.subVectors(e,t),pn.lengthSq()===0&&(pn.z=1),pn.normalize(),_i.crossVectors(i,pn),_i.lengthSq()===0&&(Math.abs(i.z)===1?pn.x+=1e-4:pn.z+=1e-4,pn.normalize(),_i.crossVectors(i,pn)),_i.normalize(),La.crossVectors(pn,_i),r[0]=_i.x,r[4]=La.x,r[8]=pn.x,r[1]=_i.y,r[5]=La.y,r[9]=pn.y,r[2]=_i.z,r[6]=La.z,r[10]=pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],b=i[3],v=i[7],_=i[11],C=i[15],T=r[0],A=r[4],L=r[8],ee=r[12],x=r[1],S=r[5],q=r[9],z=r[13],R=r[2],k=r[6],N=r[10],Z=r[14],V=r[3],xe=r[7],pe=r[11],G=r[15];return s[0]=a*T+o*x+l*R+c*V,s[4]=a*A+o*S+l*k+c*xe,s[8]=a*L+o*q+l*N+c*pe,s[12]=a*ee+o*z+l*Z+c*G,s[1]=h*T+d*x+u*R+f*V,s[5]=h*A+d*S+u*k+f*xe,s[9]=h*L+d*q+u*N+f*pe,s[13]=h*ee+d*z+u*Z+f*G,s[2]=g*T+y*x+m*R+p*V,s[6]=g*A+y*S+m*k+p*xe,s[10]=g*L+y*q+m*N+p*pe,s[14]=g*ee+y*z+m*Z+p*G,s[3]=b*T+v*x+_*R+C*V,s[7]=b*A+v*S+_*k+C*xe,s[11]=b*L+v*q+_*N+C*pe,s[15]=b*ee+v*z+_*Z+C*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+s*l*d-r*c*d-s*o*u+i*c*u+r*o*f-i*l*f)+y*(+t*l*f-t*c*u+s*a*u-r*a*f+r*c*h-s*l*h)+m*(+t*c*d-t*o*f-s*a*d+i*a*f+s*o*h-i*c*h)+p*(-r*o*h-t*l*d+t*o*u+r*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],b=d*m*c-y*u*c+y*l*f-o*m*f-d*l*p+o*u*p,v=g*u*c-h*m*c-g*l*f+a*m*f+h*l*p-a*u*p,_=h*y*c-g*d*c+g*o*f-a*y*f-h*o*p+a*d*p,C=g*d*l-h*y*l-g*o*u+a*y*u+h*o*m-a*d*m,T=t*b+i*v+r*_+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(y*u*s-d*m*s-y*r*f+i*m*f+d*r*p-i*u*p)*A,e[2]=(o*m*s-y*l*s+y*r*c-i*m*c-o*r*p+i*l*p)*A,e[3]=(d*l*s-o*u*s-d*r*c+i*u*c+o*r*f-i*l*f)*A,e[4]=v*A,e[5]=(h*m*s-g*u*s+g*r*f-t*m*f-h*r*p+t*u*p)*A,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*p-t*l*p)*A,e[7]=(a*u*s-h*l*s+h*r*c-t*u*c-a*r*f+t*l*f)*A,e[8]=_*A,e[9]=(g*d*s-h*y*s-g*i*f+t*y*f+h*i*p-t*d*p)*A,e[10]=(a*y*s-g*o*s+g*i*c-t*y*c-a*i*p+t*o*p)*A,e[11]=(h*o*s-a*d*s-h*i*c+t*d*c+a*i*f-t*o*f)*A,e[12]=C*A,e[13]=(h*y*r-g*d*r+g*i*u-t*y*u-h*i*m+t*d*m)*A,e[14]=(g*o*r-a*y*r-g*i*l+t*y*l+a*i*m-t*o*m)*A,e[15]=(a*d*r-h*o*r+h*i*l-t*d*l-a*i*u+t*o*u)*A,this}scale(e){let t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,h=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,h*o+i,h*l-r*a,0,c*l-r*o,h*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){let r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,h=a+a,d=o+o,u=s*c,f=s*h,g=s*d,y=a*h,m=a*d,p=o*d,b=l*c,v=l*h,_=l*d,C=i.x,T=i.y,A=i.z;return r[0]=(1-(y+p))*C,r[1]=(f+_)*C,r[2]=(g-v)*C,r[3]=0,r[4]=(f-_)*T,r[5]=(1-(u+p))*T,r[6]=(m+b)*T,r[7]=0,r[8]=(g+v)*A,r[9]=(m-b)*A,r[10]=(1-(u+y))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){let r=this.elements,s=Lr.set(r[0],r[1],r[2]).length(),a=Lr.set(r[4],r[5],r[6]).length(),o=Lr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Dn.copy(this);let c=1/s,h=1/a,d=1/o;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=d,Dn.elements[9]*=d,Dn.elements[10]*=d,t.setFromRotationMatrix(Dn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a,o=ri){let l=this.elements,c=2*s/(t-e),h=2*s/(i-r),d=(t+e)/(t-e),u=(i+r)/(i-r),f,g;if(o===ri)f=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===ho)f=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,a,o=ri){let l=this.elements,c=1/(t-e),h=1/(i-r),d=1/(a-s),u=(t+e)*c,f=(i+r)*h,g,y;if(o===ri)g=(a+s)*d,y=-2*d;else if(o===ho)g=s*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Lr=new H,Dn=new wt,Wg=new H(0,0,0),$g=new H(1,1,1),_i=new H,La=new H,pn=new H,tf=new wt,nf=new Ci,Gn=class n{constructor(e=0,t=0,i=0,r=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],h=r[9],d=r[2],u=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin($t(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin($t(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-$t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return tf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nf.setFromEuler(this),this.setFromQuaternion(nf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Gn.DEFAULT_ORDER="XYZ";var go=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xg=0,rf=new H,Dr=new Ci,Qn=new wt,Da=new H,Bs=new H,qg=new H,Yg=new Ci,sf=new H(1,0,0),af=new H(0,1,0),of=new H(0,0,1),lf={type:"added"},Zg={type:"removed"},Ur={type:"childadded",child:null},ql={type:"childremoved",child:null},Rt=class n extends Ai{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xg++}),this.uuid=si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new Gn,i=new Ci,r=new H(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Qe}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new go,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,t){return Dr.setFromAxisAngle(e,t),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(sf,e)}rotateY(e){return this.rotateOnAxis(af,e)}rotateZ(e){return this.rotateOnAxis(of,e)}translateOnAxis(e,t){return rf.copy(e).applyQuaternion(this.quaternion),this.position.add(rf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sf,e)}translateY(e){return this.translateOnAxis(af,e)}translateZ(e){return this.translateOnAxis(of,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Qn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Da.copy(e):Da.set(e,t,i);let r=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qn.lookAt(Bs,Da,this.up):Qn.lookAt(Da,Bs,this.up),this.quaternion.setFromRotationMatrix(Qn),r&&(Qn.extractRotation(r.matrixWorld),Dr.setFromRotationMatrix(Qn),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(lf),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Zg),ql.child=e,this.dispatchEvent(ql),ql.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Qn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Qn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Qn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(lf),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,e,qg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,Yg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let r=e.children[i];this.add(r.clone())}return this}};Rt.DEFAULT_UP=new H(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new H,jn=new H,Yl=new H,ei=new H,Nr=new H,kr=new H,cf=new H,Zl=new H,Jl=new H,Kl=new H,Ql=new Et,jl=new Et,ec=new Et,Si=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Un.subVectors(e,t),r.cross(Un);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Un.subVectors(r,t),jn.subVectors(i,t),Yl.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(jn),l=Un.dot(Yl),c=jn.dot(jn),h=jn.dot(Yl),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,ei)===null?!1:ei.x>=0&&ei.y>=0&&ei.x+ei.y<=1}static getInterpolation(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,ei)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ei.x),l.addScaledVector(a,ei.y),l.addScaledVector(o,ei.z),l)}static getInterpolatedAttribute(e,t,i,r,s,a){return Ql.setScalar(0),jl.setScalar(0),ec.setScalar(0),Ql.fromBufferAttribute(e,t),jl.fromBufferAttribute(e,i),ec.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Ql,s.x),a.addScaledVector(jl,s.y),a.addScaledVector(ec,s.z),a}static isFrontFacing(e,t,i,r){return Un.subVectors(i,t),jn.subVectors(e,t),Un.cross(jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),jn.subVectors(this.a,this.b),Un.cross(jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return n.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,r=this.b,s=this.c,a,o;Nr.subVectors(r,i),kr.subVectors(s,i),Zl.subVectors(e,i);let l=Nr.dot(Zl),c=kr.dot(Zl);if(l<=0&&c<=0)return t.copy(i);Jl.subVectors(e,r);let h=Nr.dot(Jl),d=kr.dot(Jl);if(h>=0&&d<=h)return t.copy(r);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Nr,a);Kl.subVectors(e,s);let f=Nr.dot(Kl),g=kr.dot(Kl);if(g>=0&&f<=g)return t.copy(s);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(kr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return cf.subVectors(s,r),o=(d-h)/(d-h+(f-g)),t.copy(r).addScaledVector(cf,o);let p=1/(m+y+u);return a=y*p,o=u*p,t.copy(i).addScaledVector(Nr,a).addScaledVector(kr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ap={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vi={h:0,s:0,l:0},Ua={h:0,s:0,l:0};function tc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Bt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,lt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=lt.workingColorSpace){return this.r=e,this.g=t,this.b=i,lt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=lt.workingColorSpace){if(e=Ng(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{let s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=tc(a,s,e+1/3),this.g=tc(a,s,e),this.b=tc(a,s,e-1/3)}return lt.toWorkingColorSpace(this,r),this}setStyle(e,t=Bt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Bt){let i=ap[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zr(e.r),this.g=Zr(e.g),this.b=Zr(e.b),this}copyLinearToSRGB(e){return this.r=Bl(e.r),this.g=Bl(e.g),this.b=Bl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Bt){return lt.fromWorkingColorSpace(qt.copy(this),e),Math.round($t(qt.r*255,0,255))*65536+Math.round($t(qt.g*255,0,255))*256+Math.round($t(qt.b*255,0,255))}getHexString(e=Bt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=lt.workingColorSpace){lt.fromWorkingColorSpace(qt.copy(this),t);let i=qt.r,r=qt.g,s=qt.b,a=Math.max(i,r,s),o=Math.min(i,r,s),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=lt.workingColorSpace){return lt.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=Bt){lt.fromWorkingColorSpace(qt.copy(this),e);let t=qt.r,i=qt.g,r=qt.b;return e!==Bt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(vi),this.setHSL(vi.h+e,vi.s+t,vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(vi),e.getHSL(Ua);let i=Ol(vi.h,Ua.h,t),r=Ol(vi.s,Ua.s,t),s=Ol(vi.l,Ua.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},qt=new Je;Je.NAMES=ap;var Jg=0,li=class extends Ai{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jg++}),this.uuid=si(),this.name="",this.type="Material",this.blending=qr,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gc,this.blendDst=yc,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=Qr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==qr&&(i.blending=this.blending),this.side!==Ei&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gc&&(i.blendSrc=this.blendSrc),this.blendDst!==yc&&(i.blendDst=this.blendDst),this.blendEquation!==tr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Qr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zd&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ar&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ar&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ar&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){let a=[];for(let o in s){let l=s[o];delete l.metadata,a.push(l)}return a}if(t){let s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Ut=class extends li{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.combine=qf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Ct=new H,Na=new ve,gn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=th,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Na.fromBufferAttribute(this,t),Na.applyMatrix3(e),this.setXY(t,Na.x,Na.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Vn(t,this.array)),t}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Vn(t,this.array)),t}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Vn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Vn(t,this.array)),t}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==th&&(e.usage=this.usage),e}};var yo=class extends gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var xo=class extends gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var ht=class extends gn{constructor(e,t,i){super(new Float32Array(e),t,i)}},Kg=0,Tn=new wt,nc=new Rt,Or=new H,mn=new ar,zs=new ar,Ft=new H,nn=class n extends Ai{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kg++}),this.uuid=si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(sp(e)?xo:yo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let s=new Qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return nc.lookAt(e),nc.updateMatrix(),this.applyMatrix4(nc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){let t=[];for(let i=0,r=e.length;i<r;i++){let s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ht(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){let s=t[i];mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,mn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,mn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(mn.min),this.boundingBox.expandByPoint(mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ks);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(mn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){let o=t[s];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(mn.min,zs.min),mn.expandByPoint(Ft),Ft.addVectors(mn.max,zs.max),mn.expandByPoint(Ft)):(mn.expandByPoint(zs.min),mn.expandByPoint(zs.max))}mn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){let o=t[s],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Or.fromBufferAttribute(e,c),Ft.add(Or)),r=Math.max(r,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new H,l[L]=new H;let c=new H,h=new H,d=new H,u=new ve,f=new ve,g=new ve,y=new H,m=new H;function p(L,ee,x){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,ee),d.fromBufferAttribute(i,x),u.fromBufferAttribute(s,L),f.fromBufferAttribute(s,ee),g.fromBufferAttribute(s,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[L].add(y),o[ee].add(y),o[x].add(y),l[L].add(m),l[ee].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let L=0,ee=b.length;L<ee;++L){let x=b[L],S=x.start,q=x.count;for(let z=S,R=S+q;z<R;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let v=new H,_=new H,C=new H,T=new H;function A(L){C.fromBufferAttribute(r,L),T.copy(C);let ee=o[L];v.copy(ee),v.sub(C.multiplyScalar(C.dot(ee))).normalize(),_.crossVectors(T,ee);let S=_.dot(l[L])<0?-1:1;a.setXYZW(L,v.x,v.y,v.z,S)}for(let L=0,ee=b.length;L<ee;++L){let x=b[L],S=x.start,q=x.count;for(let z=S,R=S+q;z<R;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let r=new H,s=new H,a=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),y=e.getX(u+1),m=e.getX(u+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)r.fromBufferAttribute(t,u+0),s.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,s),d.subVectors(r,s),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new gn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,r=this.attributes;for(let o in r){let l=r[o],c=e(l,i);t.setAttribute(o,c)}let s=this.morphAttributes;for(let o in s){let l=[],c=s[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let r={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(r[l]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let r=e.attributes;for(let c in r){let h=r[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},hf=new wt,Ji=new sh,ka=new Ks,uf=new H,Oa=new H,Fa=new H,Ba=new H,ic=new H,za=new H,df=new H,Ha=new H,Ye=class extends Rt{constructor(e=new nn,t=new Ut){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){let o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){let i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(s&&o){za.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=o[l],d=s[l];h!==0&&(ic.fromBufferAttribute(d,e),a?za.addScaledVector(ic,h):za.addScaledVector(ic.sub(t),h))}t.add(za)}return t}raycast(e,t){let i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),ka.copy(i.boundingSphere),ka.applyMatrix4(s),Ji.copy(e.ray).recast(e.near),!(ka.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(ka,uf)===null||Ji.origin.distanceToSquared(uf)>(e.far-e.near)**2))&&(hf.copy(s).invert(),Ji.copy(e.ray).applyMatrix4(hf),!(i.boundingBox!==null&&Ji.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ji)))}_computeIntersections(e,t,i){let r,s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,C=v;_<C;_+=3){let T=o.getX(_),A=o.getX(_+1),L=o.getX(_+2);r=Va(this,p,e,i,c,h,d,T,A,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=o.getX(m),v=o.getX(m+1),_=o.getX(m+2);r=Va(this,a,e,i,c,h,d,b,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=u.length;g<y;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),v=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,C=v;_<C;_+=3){let T=_,A=_+1,L=_+2;r=Va(this,p,e,i,c,h,d,T,A,L),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let b=m,v=m+1,_=m+2;r=Va(this,a,e,i,c,h,d,b,v,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function Qg(n,e,t,i,r,s,a,o){let l;if(e.side===Jt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Ei,o),l===null)return null;Ha.copy(o),Ha.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Ha);return c<t.near||c>t.far?null:{distance:c,point:Ha.clone(),object:n}}function Va(n,e,t,i,r,s,a,o,l,c){n.getVertexPosition(o,Oa),n.getVertexPosition(l,Fa),n.getVertexPosition(c,Ba);let h=Qg(n,e,t,i,Oa,Fa,Ba,df);if(h){let d=new H;Si.getBarycoord(df,Oa,Fa,Ba,d),r&&(h.uv=Si.getInterpolatedAttribute(r,o,l,c,d,new ve)),s&&(h.uv1=Si.getInterpolatedAttribute(s,o,l,c,d,new ve)),a&&(h.normal=Si.getInterpolatedAttribute(a,o,l,c,d,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new H,materialIndex:0};Si.getNormal(Oa,Fa,Ba,u.normal),h.face=u,h.barycoord=d}return h}var zt=class n extends nn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};let o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(d,2));function g(y,m,p,b,v,_,C,T,A,L,ee){let x=_/A,S=C/L,q=_/2,z=C/2,R=T/2,k=A+1,N=L+1,Z=0,V=0,xe=new H;for(let pe=0;pe<N;pe++){let G=pe*S-z;for(let re=0;re<k;re++){let Ue=re*x-q;xe[y]=Ue*b,xe[m]=G*v,xe[p]=R,c.push(xe.x,xe.y,xe.z),xe[y]=0,xe[m]=0,xe[p]=T>0?1:-1,h.push(xe.x,xe.y,xe.z),d.push(re/A),d.push(1-pe/L),Z+=1}}for(let pe=0;pe<L;pe++)for(let G=0;G<A;G++){let re=u+G+k*pe,Ue=u+G+k*(pe+1),ne=u+(G+1)+k*(pe+1),he=u+(G+1)+k*pe;l.push(re,Ue,he),l.push(Ue,ne,he),V+=6}o.addGroup(f,V,ee),f+=V,u+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function is(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function tn(n){let e={};for(let t=0;t<n.length;t++){let i=is(n[t]);for(let r in i)e[r]=i[r]}return e}function jg(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function op(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:lt.workingColorSpace}var ey={clone:is,merge:tn},ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ny=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,En=class extends li{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ty,this.fragmentShader=ny,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=jg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},_o=class extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ri}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Mi=new H,ff=new ve,pf=new ve,Yt=class extends _o{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=uo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(kl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uo*2*Math.atan(Math.tan(kl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z),Mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Mi.x,Mi.y).multiplyScalar(-e/Mi.z)}getViewSize(e,t){return this.getViewBounds(e,ff,pf),t.subVectors(pf,ff)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(kl*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fr=-90,Br=1,ah=class extends Rt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Yt(Fr,Br,e,t);r.layers=this.layers,this.add(r);let s=new Yt(Fr,Br,e,t);s.layers=this.layers,this.add(s);let a=new Yt(Fr,Br,e,t);a.layers=this.layers,this.add(a);let o=new Yt(Fr,Br,e,t);o.layers=this.layers,this.add(o);let l=new Yt(Fr,Br,e,t);l.layers=this.layers,this.add(l);let c=new Yt(Fr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,r,s,a,o,l]=t;for(let c of t)this.remove(c);if(e===ri)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ho)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,o),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},vo=class extends cn{constructor(e,t,i,r,s,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:jr,super(e,t,i,r,s,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oh=class extends oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new vo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new zt(5,5,5),s=new En({name:"CubemapFromEquirect",uniforms:is(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Jt,blending:wi});s.uniforms.tEquirect.value=t;let a=new Ye(r,s),o=t.minFilter;return t.minFilter===rr&&(t.minFilter=Nn),new ah(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){let s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}},rc=new H,iy=new H,ry=new Qe,ni=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let r=rc.subVectors(i,t).cross(iy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(rc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||ry.getNormalMatrix(e),r=this.coplanarPoint(rc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ki=new Ks,Ga=new H,Qs=class{constructor(e=new ni,t=new ni,i=new ni,r=new ni,s=new ni,a=new ni){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ri){let i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],h=r[5],d=r[6],u=r[7],f=r[8],g=r[9],y=r[10],m=r[11],p=r[12],b=r[13],v=r[14],_=r[15];if(i[0].setComponents(l-s,u-c,m-f,_-p).normalize(),i[1].setComponents(l+s,u+c,m+f,_+p).normalize(),i[2].setComponents(l+a,u+h,m+g,_+b).normalize(),i[3].setComponents(l-a,u-h,m-g,_-b).normalize(),i[4].setComponents(l-o,u-d,m-y,_-v).normalize(),t===ri)i[5].setComponents(l+o,u+d,m+y,_+v).normalize();else if(t===ho)i[5].setComponents(o,d,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ki)}intersectsSprite(e){return Ki.center.set(0,0,0),Ki.radius=.7071067811865476,Ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ki)}intersectsSphere(e){let t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let r=t[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function lp(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function sy(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],y=d[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++u,d[u]=y)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let y=d[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var ci=class n extends nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};let s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let v=0;v<c;v++){let _=v*d-s;g.push(_,-b,0),y.push(0,0,1),m.push(v/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let v=b+c*p,_=b+c*(p+1),C=b+1+c*(p+1),T=b+1+c*p;f.push(v,_,T),f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},ay=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,oy=`#ifdef USE_ALPHAHASH
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
#endif`,ly=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dy=`#ifdef USE_AOMAP
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
#endif`,fy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,py=`#ifdef USE_BATCHING
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
#endif`,my=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_y=`#ifdef USE_IRIDESCENCE
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
#endif`,vy=`#ifdef USE_BUMPMAP
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
#endif`,My=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,by=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ey=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ay=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Ry=`#define PI 3.141592653589793
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
} // validated`,Py=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Iy=`vec3 transformedNormal = objectNormal;
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
#endif`,Ly=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Uy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ny=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Oy=`
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
}`,Fy=`#ifdef USE_ENVMAP
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
#endif`,By=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,zy=`#ifdef USE_ENVMAP
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
#endif`,Hy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vy=`#ifdef USE_ENVMAP
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
#endif`,Gy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$y=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qy=`#ifdef USE_GRADIENTMAP
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
}`,Yy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ky=`uniform bool receiveShadow;
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
#endif`,Qy=`#ifdef USE_ENVMAP
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
#endif`,jy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ex=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ix=`PhysicalMaterial material;
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
#endif`,rx=`struct PhysicalMaterial {
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
}`,sx=`
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
#endif`,ax=`#if defined( RE_IndirectDiffuse )
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
#endif`,ox=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ux=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,dx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,px=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,mx=`#if defined( USE_POINTS_UV )
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
#endif`,gx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mx=`#ifdef USE_MORPHTARGETS
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
#endif`,bx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,wx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ax=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cx=`#ifdef USE_NORMALMAP
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
#endif`,Rx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Px=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ix=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ux=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Nx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ox=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Fx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vx=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Wx=`float getShadowMask() {
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
}`,$x=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xx=`#ifdef USE_SKINNING
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
#endif`,qx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yx=`#ifdef USE_SKINNING
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
#endif`,Zx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qx=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,jx=`#ifdef USE_TRANSMISSION
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
#endif`,e_=`#ifdef USE_TRANSMISSION
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
#endif`,t_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,r_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,a_=`uniform sampler2D t2D;
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
}`,o_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,c_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,h_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,u_=`#include <common>
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
}`,d_=`#if DEPTH_PACKING == 3200
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
}`,f_=`#define DISTANCE
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
}`,p_=`#define DISTANCE
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
}`,m_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,g_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`uniform float scale;
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
}`,x_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 diffuse;
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
}`,M_=`#define LAMBERT
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
}`,b_=`#define LAMBERT
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
}`,S_=`#define MATCAP
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
}`,w_=`#define MATCAP
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
}`,T_=`#define NORMAL
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
}`,E_=`#define NORMAL
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
}`,A_=`#define PHONG
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
}`,C_=`#define PHONG
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
}`,R_=`#define STANDARD
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
}`,P_=`#define STANDARD
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
}`,I_=`#define TOON
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
}`,L_=`#define TOON
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
}`,D_=`uniform float size;
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
}`,U_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,k_=`uniform vec3 color;
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
}`,O_=`uniform float rotation;
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
}`,F_=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:ay,alphahash_pars_fragment:oy,alphamap_fragment:ly,alphamap_pars_fragment:cy,alphatest_fragment:hy,alphatest_pars_fragment:uy,aomap_fragment:dy,aomap_pars_fragment:fy,batching_pars_vertex:py,batching_vertex:my,begin_vertex:gy,beginnormal_vertex:yy,bsdfs:xy,iridescence_fragment:_y,bumpmap_pars_fragment:vy,clipping_planes_fragment:My,clipping_planes_pars_fragment:by,clipping_planes_pars_vertex:Sy,clipping_planes_vertex:wy,color_fragment:Ty,color_pars_fragment:Ey,color_pars_vertex:Ay,color_vertex:Cy,common:Ry,cube_uv_reflection_fragment:Py,defaultnormal_vertex:Iy,displacementmap_pars_vertex:Ly,displacementmap_vertex:Dy,emissivemap_fragment:Uy,emissivemap_pars_fragment:Ny,colorspace_fragment:ky,colorspace_pars_fragment:Oy,envmap_fragment:Fy,envmap_common_pars_fragment:By,envmap_pars_fragment:zy,envmap_pars_vertex:Hy,envmap_physical_pars_fragment:Qy,envmap_vertex:Vy,fog_vertex:Gy,fog_pars_vertex:Wy,fog_fragment:$y,fog_pars_fragment:Xy,gradientmap_pars_fragment:qy,lightmap_pars_fragment:Yy,lights_lambert_fragment:Zy,lights_lambert_pars_fragment:Jy,lights_pars_begin:Ky,lights_toon_fragment:jy,lights_toon_pars_fragment:ex,lights_phong_fragment:tx,lights_phong_pars_fragment:nx,lights_physical_fragment:ix,lights_physical_pars_fragment:rx,lights_fragment_begin:sx,lights_fragment_maps:ax,lights_fragment_end:ox,logdepthbuf_fragment:lx,logdepthbuf_pars_fragment:cx,logdepthbuf_pars_vertex:hx,logdepthbuf_vertex:ux,map_fragment:dx,map_pars_fragment:fx,map_particle_fragment:px,map_particle_pars_fragment:mx,metalnessmap_fragment:gx,metalnessmap_pars_fragment:yx,morphinstance_vertex:xx,morphcolor_vertex:_x,morphnormal_vertex:vx,morphtarget_pars_vertex:Mx,morphtarget_vertex:bx,normal_fragment_begin:Sx,normal_fragment_maps:wx,normal_pars_fragment:Tx,normal_pars_vertex:Ex,normal_vertex:Ax,normalmap_pars_fragment:Cx,clearcoat_normal_fragment_begin:Rx,clearcoat_normal_fragment_maps:Px,clearcoat_pars_fragment:Ix,iridescence_pars_fragment:Lx,opaque_fragment:Dx,packing:Ux,premultiplied_alpha_fragment:Nx,project_vertex:kx,dithering_fragment:Ox,dithering_pars_fragment:Fx,roughnessmap_fragment:Bx,roughnessmap_pars_fragment:zx,shadowmap_pars_fragment:Hx,shadowmap_pars_vertex:Vx,shadowmap_vertex:Gx,shadowmask_pars_fragment:Wx,skinbase_vertex:$x,skinning_pars_vertex:Xx,skinning_vertex:qx,skinnormal_vertex:Yx,specularmap_fragment:Zx,specularmap_pars_fragment:Jx,tonemapping_fragment:Kx,tonemapping_pars_fragment:Qx,transmission_fragment:jx,transmission_pars_fragment:e_,uv_pars_fragment:t_,uv_pars_vertex:n_,uv_vertex:i_,worldpos_vertex:r_,background_vert:s_,background_frag:a_,backgroundCube_vert:o_,backgroundCube_frag:l_,cube_vert:c_,cube_frag:h_,depth_vert:u_,depth_frag:d_,distanceRGBA_vert:f_,distanceRGBA_frag:p_,equirect_vert:m_,equirect_frag:g_,linedashed_vert:y_,linedashed_frag:x_,meshbasic_vert:__,meshbasic_frag:v_,meshlambert_vert:M_,meshlambert_frag:b_,meshmatcap_vert:S_,meshmatcap_frag:w_,meshnormal_vert:T_,meshnormal_frag:E_,meshphong_vert:A_,meshphong_frag:C_,meshphysical_vert:R_,meshphysical_frag:P_,meshtoon_vert:I_,meshtoon_frag:L_,points_vert:D_,points_frag:U_,shadow_vert:N_,shadow_frag:k_,sprite_vert:O_,sprite_frag:F_},Pe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:tn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:tn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:tn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:tn([Pe.points,Pe.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:tn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:tn([Pe.common,Pe.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:tn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:tn([Pe.sprite,Pe.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:tn([Pe.common,Pe.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:tn([Pe.lights,Pe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};var Wa={r:0,b:0,g:0},Qi=new Gn,B_=new wt;function z_(n,e,t,i,r,s,a){let o=new Je(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let v=b.isScene===!0?b.background:null;return v&&v.isTexture&&(v=(b.backgroundBlurriness>0?t:e).get(v)),v}function y(b){let v=!1,_=g(b);_===null?p(o,l):_&&_.isColor&&(p(_,1),v=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(b,v){let _=g(v);_&&(_.isCubeTexture||_.mapping===zo)?(h===void 0&&(h=new Ye(new zt(1,1,1),new En({name:"BackgroundCubeMaterial",uniforms:is(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:Jt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),Qi.copy(v.backgroundRotation),Qi.x*=-1,Qi.y*=-1,Qi.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Qi.y*=-1,Qi.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(B_.makeRotationFromEuler(Qi)),h.material.toneMapped=lt.getTransfer(_.colorSpace)!==pt,(d!==_||u!==_.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Ye(new ci(2,2),new En({name:"BackgroundMaterial",uniforms:is(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=lt.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||u!==_.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=_,u=_.version,f=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,v){b.getRGB(Wa,op(n)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(b,v=1){o.set(b),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:y,addToRenderList:m}}function H_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=u(null),s=r,a=!1;function o(x,S,q,z,R){let k=!1,N=d(z,q,S);s!==N&&(s=N,c(s.object)),k=f(x,z,q,R),k&&g(x,z,q,R),R!==null&&e.update(R,n.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,_(x,S,q,z),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return n.createVertexArray()}function c(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function d(x,S,q){let z=q.wireframe===!0,R=i[x.id];R===void 0&&(R={},i[x.id]=R);let k=R[S.id];k===void 0&&(k={},R[S.id]=k);let N=k[z];return N===void 0&&(N=u(l()),k[z]=N),N}function u(x){let S=[],q=[],z=[];for(let R=0;R<t;R++)S[R]=0,q[R]=0,z[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:q,attributeDivisors:z,object:x,attributes:{},index:null}}function f(x,S,q,z){let R=s.attributes,k=S.attributes,N=0,Z=q.getAttributes();for(let V in Z)if(Z[V].location>=0){let pe=R[V],G=k[V];if(G===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(G=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(G=x.instanceColor)),pe===void 0||pe.attribute!==G||G&&pe.data!==G.data)return!0;N++}return s.attributesNum!==N||s.index!==z}function g(x,S,q,z){let R={},k=S.attributes,N=0,Z=q.getAttributes();for(let V in Z)if(Z[V].location>=0){let pe=k[V];pe===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor));let G={};G.attribute=pe,pe&&pe.data&&(G.data=pe.data),R[V]=G,N++}s.attributes=R,s.attributesNum=N,s.index=z}function y(){let x=s.newAttributes;for(let S=0,q=x.length;S<q;S++)x[S]=0}function m(x){p(x,0)}function p(x,S){let q=s.newAttributes,z=s.enabledAttributes,R=s.attributeDivisors;q[x]=1,z[x]===0&&(n.enableVertexAttribArray(x),z[x]=1),R[x]!==S&&(n.vertexAttribDivisor(x,S),R[x]=S)}function b(){let x=s.newAttributes,S=s.enabledAttributes;for(let q=0,z=S.length;q<z;q++)S[q]!==x[q]&&(n.disableVertexAttribArray(q),S[q]=0)}function v(x,S,q,z,R,k,N){N===!0?n.vertexAttribIPointer(x,S,q,R,k):n.vertexAttribPointer(x,S,q,z,R,k)}function _(x,S,q,z){y();let R=z.attributes,k=q.getAttributes(),N=S.defaultAttributeValues;for(let Z in k){let V=k[Z];if(V.location>=0){let xe=R[Z];if(xe===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(xe=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(xe=x.instanceColor)),xe!==void 0){let pe=xe.normalized,G=xe.itemSize,re=e.get(xe);if(re===void 0)continue;let Ue=re.buffer,ne=re.type,he=re.bytesPerElement,ye=ne===n.INT||ne===n.UNSIGNED_INT||xe.gpuType===Bh;if(xe.isInterleavedBufferAttribute){let Te=xe.data,We=Te.stride,Ve=xe.offset;if(Te.isInstancedInterleavedBuffer){for(let Be=0;Be<V.locationSize;Be++)p(V.location+Be,Te.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let Be=0;Be<V.locationSize;Be++)m(V.location+Be);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Be=0;Be<V.locationSize;Be++)v(V.location+Be,G/V.locationSize,ne,pe,We*he,(Ve+G/V.locationSize*Be)*he,ye)}else{if(xe.isInstancedBufferAttribute){for(let Te=0;Te<V.locationSize;Te++)p(V.location+Te,xe.meshPerAttribute);x.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Te=0;Te<V.locationSize;Te++)m(V.location+Te);n.bindBuffer(n.ARRAY_BUFFER,Ue);for(let Te=0;Te<V.locationSize;Te++)v(V.location+Te,G/V.locationSize,ne,pe,G*he,G/V.locationSize*Te*he,ye)}}else if(N!==void 0){let pe=N[Z];if(pe!==void 0)switch(pe.length){case 2:n.vertexAttrib2fv(V.location,pe);break;case 3:n.vertexAttrib3fv(V.location,pe);break;case 4:n.vertexAttrib4fv(V.location,pe);break;default:n.vertexAttrib1fv(V.location,pe)}}}}b()}function C(){L();for(let x in i){let S=i[x];for(let q in S){let z=S[q];for(let R in z)h(z[R].object),delete z[R];delete S[q]}delete i[x]}}function T(x){if(i[x.id]===void 0)return;let S=i[x.id];for(let q in S){let z=S[q];for(let R in z)h(z[R].object),delete z[R];delete S[q]}delete i[x.id]}function A(x){for(let S in i){let q=i[S];if(q[x.id]===void 0)continue;let z=q[x.id];for(let R in z)h(z[R].object),delete z[R];delete q[x.id]}}function L(){ee(),a=!0,s!==r&&(s=r,c(s.object))}function ee(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:L,resetDefaultState:ee,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:y,enableAttribute:m,disableUnusedAttributes:b}}function V_(n,e,t){let i;function r(c){i=c}function s(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y];for(let y=0;y<u.length;y++)t.update(g,i,u[y])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function G_(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(A){return!(A!==kn&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let L=A===aa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==ii&&!L)}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),v=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:v,maxFragmentUniforms:_,vertexTextures:C,maxSamples:T}}function W_(n){let e=this,t=null,i=0,r=!1,s=!1,a=new ni,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||r;return r=u,i=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!r||g===null||g.length===0||s&&!m)s?h(null):c();else{let b=s?0:i,v=b*4,_=p.clippingState||null;l.value=_,_=h(g,u,v,f);for(let C=0;C!==v;++C)_[C]=t[C];p.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,_=f;v!==y;++v,_+=4)a.copy(d[v]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function $_(n){let e=new WeakMap;function t(a,o){return o===Tc?a.mapping=jr:o===Ec&&(a.mapping=es),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===Tc||o===Ec)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new oh(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){let o=a.target;o.removeEventListener("dispose",r);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}var Mo=class extends _o{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},$r=4,mf=[.125,.215,.35,.446,.526,.582],nr=20,sc=new Mo,gf=new Je,ac=null,oc=0,lc=0,cc=!1,er=(1+Math.sqrt(5))/2,zr=1/er,yf=[new H(-er,zr,0),new H(er,zr,0),new H(-zr,0,er),new H(zr,0,er),new H(0,er,-zr),new H(0,er,zr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],bo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_f(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ac,oc,lc),this._renderer.xr.enabled=cc,e.scissorTest=!1,$a(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===jr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ac=this._renderer.getRenderTarget(),oc=this._renderer.getActiveCubeFace(),lc=this._renderer.getActiveMipmapLevel(),cc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:aa,format:kn,colorSpace:Ii,depthBuffer:!1},r=xf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,i);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=X_(s)),this._blurMaterial=q_(s,e,t)}return r}_compileMaterial(e){let t=new Ye(this._lodPlanes[0],e);this._renderer.compile(t,sc)}_sceneToCubeUV(e,t,i,r){let o=new Yt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(gf),h.toneMapping=Ti,h.autoClear=!1;let f=new Ut({name:"PMREM.Background",side:Jt,depthWrite:!1,depthTest:!1}),g=new Ye(new zt,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(gf),y=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let v=this._cubeSize;$a(r,b*v,p>2?v:0,v,v),h.setRenderTarget(r),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,r=e.mapping===jr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=vf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_f());let s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ye(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;let l=this._cubeSize;$a(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,sc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=yf[(r-s-1)%yf.length];this._blur(e,s-1,s,a,o)}t.autoClear=i}_blur(e,t,i,r,s){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ye(this._lodPlanes[r],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*nr-1),y=s/g,m=isFinite(s)?1+Math.floor(h*y):nr;m>nr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${nr}`);let p=[],b=0;for(let A=0;A<nr;++A){let L=A/y,ee=Math.exp(-L*L/2);p.push(ee),A===0?b+=ee:A<m&&(b+=2*ee)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:v}=this;u.dTheta.value=g,u.mipInt.value=v-i;let _=this._sizeLods[r],C=3*_*(r>v-$r?r-v+$r:0),T=4*(this._cubeSize-_);$a(t,C,T,3*_,2*_),l.setRenderTarget(t),l.render(d,sc)}};function X_(n){let e=[],t=[],i=[],r=n,s=n-$r+1+mf.length;for(let a=0;a<s;a++){let o=Math.pow(2,r);t.push(o);let l=1/o;a>n-$r?l=mf[a-n+$r-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,y=3,m=2,p=1,b=new Float32Array(y*g*f),v=new Float32Array(m*g*f),_=new Float32Array(p*g*f);for(let T=0;T<f;T++){let A=T%3*2/3-1,L=T>2?0:-1,ee=[A,L,0,A+2/3,L,0,A+2/3,L+1,0,A,L,0,A+2/3,L+1,0,A,L+1,0];b.set(ee,y*g*T),v.set(u,m*g*T);let x=[T,T,T,T,T,T];_.set(x,p*g*T)}let C=new nn;C.setAttribute("position",new gn(b,y)),C.setAttribute("uv",new gn(v,m)),C.setAttribute("faceIndex",new gn(_,p)),e.push(C),r>$r&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function xf(n,e,t){let i=new oi(n,e,t);return i.texture.mapping=zo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $a(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function q_(n,e,t){let i=new Float32Array(nr),r=new H(0,1,0);return new En({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:qh(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function _f(){return new En({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:wi,depthTest:!1,depthWrite:!1})}function vf(){return new En({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function Y_(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===Tc||l===Ec,h=l===jr||l===es;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new bo(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&r(f)?(t===null&&(t=new bo(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function s(o){let l=o.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function Z_(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let r=t(i);return r===null&&so("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function J_(n,e,t,i){let r={},s=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let y=u.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}u.removeEventListener("dispose",a),delete r[u.id];let f=s.get(u);f&&(e.remove(f),s.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return r[u.id]===!0||(u.addEventListener("dispose",a),r[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,y=0;if(f!==null){let b=f.array;y=f.version;for(let v=0,_=b.length;v<_;v+=3){let C=b[v+0],T=b[v+1],A=b[v+2];u.push(C,T,T,A,A,C)}}else if(g!==void 0){let b=g.array;y=g.version;for(let v=0,_=b.length/3-1;v<_;v+=3){let C=v+0,T=v+1,A=v+2;u.push(C,T,T,A,A,C)}}else return;let m=new(sp(u)?xo:yo)(u,1);m.version=y;let p=s.get(d);p&&e.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function K_(n,e,t){let i;function r(u){i=u}let s,a;function o(u){s=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,s,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,s,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,u,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function d(u,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,s,u,0,y,0,g);let p=0;for(let b=0;b<g;b++)p+=f[b];for(let b=0;b<y.length;b++)t.update(p,i,y[b])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Q_(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(s/3);break;case n.LINES:t.lines+=o*(s/2);break;case n.LINE_STRIP:t.lines+=o*(s-1);break;case n.LINE_LOOP:t.lines+=o*s;break;case n.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function j_(n,e,t){let i=new WeakMap,r=new Et;function s(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let ee=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",ee)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],v=0;f===!0&&(v=1),g===!0&&(v=2),y===!0&&(v=3);let _=o.attributes.position.count*v,C=1;_>e.maxTextureSize&&(C=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*C*4*d),A=new mo(T,_,C,d);A.type=ii,A.needsUpdate=!0;let L=v*4;for(let x=0;x<d;x++){let S=m[x],q=p[x],z=b[x],R=_*C*4*x;for(let k=0;k<S.count;k++){let N=k*L;f===!0&&(r.fromBufferAttribute(S,k),T[R+N+0]=r.x,T[R+N+1]=r.y,T[R+N+2]=r.z,T[R+N+3]=0),g===!0&&(r.fromBufferAttribute(q,k),T[R+N+4]=r.x,T[R+N+5]=r.y,T[R+N+6]=r.z,T[R+N+7]=0),y===!0&&(r.fromBufferAttribute(z,k),T[R+N+8]=r.x,T[R+N+9]=r.y,T[R+N+10]=r.z,T[R+N+11]=z.itemSize===4?r.w:1)}}u={count:d,texture:A,size:new ve(_,C)},i.set(o,u),o.addEventListener("dispose",ee)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:s}}function ev(n,e,t,i){let r=new WeakMap;function s(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==c&&(u.update(),r.set(u,c))}return d}function a(){r=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}var So=class extends cn{constructor(e,t,i,r,s,a,o,l,c,h=Yr){if(h!==Yr&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Yr&&(i=sr),i===void 0&&h===ns&&(i=ts),super(null,r,s,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Zt,this.minFilter=l!==void 0?l:Zt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},cp=new cn,Mf=new So(1,1),hp=new mo,up=new rh,dp=new vo,bf=[],Sf=[],wf=new Float32Array(16),Tf=new Float32Array(9),Ef=new Float32Array(4);function os(n,e,t){let i=n[0];if(i<=0||i>0)return n;let r=e*t,s=bf[r];if(s===void 0&&(s=new Float32Array(r),bf[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function Nt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function kt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Go(n,e){let t=Sf[e];t===void 0&&(t=new Int32Array(e),Sf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2fv(this.addr,e),kt(t,e)}}function iv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;n.uniform3fv(this.addr,e),kt(t,e)}}function rv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4fv(this.addr,e),kt(t,e)}}function sv(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,i))return;Ef.set(i),n.uniformMatrix2fv(this.addr,!1,Ef),kt(t,i)}}function av(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,i))return;Tf.set(i),n.uniformMatrix3fv(this.addr,!1,Tf),kt(t,i)}}function ov(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Nt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),kt(t,e)}else{if(Nt(t,i))return;wf.set(i),n.uniformMatrix4fv(this.addr,!1,wf),kt(t,i)}}function lv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2iv(this.addr,e),kt(t,e)}}function hv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3iv(this.addr,e),kt(t,e)}}function uv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4iv(this.addr,e),kt(t,e)}}function dv(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;n.uniform2uiv(this.addr,e),kt(t,e)}}function pv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;n.uniform3uiv(this.addr,e),kt(t,e)}}function mv(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;n.uniform4uiv(this.addr,e),kt(t,e)}}function gv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Mf.compareFunction=rp,s=Mf):s=cp,t.setTexture2D(e||s,r)}function yv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||up,r)}function xv(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||dp,r)}function _v(n,e,t){let i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||hp,r)}function vv(n){switch(n){case 5126:return tv;case 35664:return nv;case 35665:return iv;case 35666:return rv;case 35674:return sv;case 35675:return av;case 35676:return ov;case 5124:case 35670:return lv;case 35667:case 35671:return cv;case 35668:case 35672:return hv;case 35669:case 35673:return uv;case 5125:return dv;case 36294:return fv;case 36295:return pv;case 36296:return mv;case 35678:case 36198:case 36298:case 36306:case 35682:return gv;case 35679:case 36299:case 36307:return yv;case 35680:case 36300:case 36308:case 36293:return xv;case 36289:case 36303:case 36311:case 36292:return _v}}function Mv(n,e){n.uniform1fv(this.addr,e)}function bv(n,e){let t=os(e,this.size,2);n.uniform2fv(this.addr,t)}function Sv(n,e){let t=os(e,this.size,3);n.uniform3fv(this.addr,t)}function wv(n,e){let t=os(e,this.size,4);n.uniform4fv(this.addr,t)}function Tv(n,e){let t=os(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ev(n,e){let t=os(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Av(n,e){let t=os(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Cv(n,e){n.uniform1iv(this.addr,e)}function Rv(n,e){n.uniform2iv(this.addr,e)}function Pv(n,e){n.uniform3iv(this.addr,e)}function Iv(n,e){n.uniform4iv(this.addr,e)}function Lv(n,e){n.uniform1uiv(this.addr,e)}function Dv(n,e){n.uniform2uiv(this.addr,e)}function Uv(n,e){n.uniform3uiv(this.addr,e)}function Nv(n,e){n.uniform4uiv(this.addr,e)}function kv(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||cp,s[a])}function Ov(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||up,s[a])}function Fv(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dp,s[a])}function Bv(n,e,t){let i=this.cache,r=e.length,s=Go(t,r);Nt(i,s)||(n.uniform1iv(this.addr,s),kt(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||hp,s[a])}function zv(n){switch(n){case 5126:return Mv;case 35664:return bv;case 35665:return Sv;case 35666:return wv;case 35674:return Tv;case 35675:return Ev;case 35676:return Av;case 5124:case 35670:return Cv;case 35667:case 35671:return Rv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Uv;case 36296:return Nv;case 35678:case 36198:case 36298:case 36306:case 35682:return kv;case 35679:case 36299:case 36307:return Ov;case 35680:case 36300:case 36308:case 36293:return Fv;case 36289:case 36303:case 36311:case 36292:return Bv}}var lh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=vv(t.type)}},ch=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zv(t.type)}},hh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let r=this.seq;for(let s=0,a=r.length;s!==a;++s){let o=r[s];o.setValue(e,t[o.id],i)}}},hc=/(\w+)(\])?(\[|\.)?/g;function Af(n,e){n.seq.push(e),n.map[e.id]=e}function Hv(n,e,t){let i=n.name,r=i.length;for(hc.lastIndex=0;;){let s=hc.exec(i),a=hc.lastIndex,o=s[1],l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Af(t,c===void 0?new lh(o,n,e):new ch(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new hh(o),Af(t,d)),t=d}}}var Jr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){let s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Hv(s,a,this)}}setValue(e,t,i,r){let s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){let r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){let o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){let i=[];for(let r=0,s=e.length;r!==s;++r){let a=e[r];a.id in t&&i.push(a)}return i}};function Cf(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Vv=37297,Gv=0;function Wv(n,e){let t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function $v(n){let e=lt.getPrimaries(lt.workingColorSpace),t=lt.getPrimaries(n),i;switch(e===t?i="":e===co&&t===lo?i="LinearDisplayP3ToLinearSRGB":e===lo&&t===co&&(i="LinearSRGBToLinearDisplayP3"),n){case Ii:case Vo:return[i,"LinearTransferOETF"];case Bt:case Xh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Rf(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Wv(n.getShaderSource(e),a)}else return r}function Xv(n,e){let t=$v(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function qv(n,e){let t;switch(e){case yg:t="Linear";break;case xg:t="Reinhard";break;case _g:t="Cineon";break;case vg:t="ACESFilmic";break;case bg:t="AgX";break;case Sg:t="Neutral";break;case Mg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Xa=new H;function Yv(){lt.getLuminanceCoefficients(Xa);let n=Xa.x.toFixed(4),e=Xa.y.toFixed(4),t=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Zv(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ws).join(`
`)}function Jv(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Kv(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){let s=n.getActiveAttrib(e,r),a=s.name,o=1;s.type===n.FLOAT_MAT2&&(o=2),s.type===n.FLOAT_MAT3&&(o=3),s.type===n.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Ws(n){return n!==""}function Pf(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function If(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Qv=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(n){return n.replace(Qv,e1)}var jv=new Map;function e1(n,e){let t=Ke[e];if(t===void 0){let i=jv.get(e);if(i!==void 0)t=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return uh(t)}var t1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lf(n){return n.replace(t1,n1)}function n1(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Df(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function i1(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Xf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Fh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ti&&(e="SHADOWMAP_TYPE_VSM"),e}function r1(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case jr:case es:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function s1(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function a1(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case qf:e="ENVMAP_BLENDING_MULTIPLY";break;case mg:e="ENVMAP_BLENDING_MIX";break;case gg:e="ENVMAP_BLENDING_ADD";break}return e}function o1(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function l1(n,e,t,i){let r=n.getContext(),s=t.defines,a=t.vertexShader,o=t.fragmentShader,l=i1(t),c=r1(t),h=s1(t),d=a1(t),u=o1(t),f=Zv(t),g=Jv(s),y=r.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ws).join(`
`),p.length>0&&(p+=`
`)):(m=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ws).join(`
`),p=[Df(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ti?"#define TONE_MAPPING":"",t.toneMapping!==Ti?Ke.tonemapping_pars_fragment:"",t.toneMapping!==Ti?qv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,Xv("linearToOutputTexel",t.outputColorSpace),Yv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ws).join(`
`)),a=uh(a),a=Pf(a,t),a=If(a,t),o=uh(o),o=Pf(o,t),o=If(o,t),a=Lf(a),o=Lf(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=b+m+a,_=b+p+o,C=Cf(r,r.VERTEX_SHADER,v),T=Cf(r,r.FRAGMENT_SHADER,_);r.attachShader(y,C),r.attachShader(y,T),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function A(S){if(n.debug.checkShaderErrors){let q=r.getProgramInfoLog(y).trim(),z=r.getShaderInfoLog(C).trim(),R=r.getShaderInfoLog(T).trim(),k=!0,N=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,C,T);else{let Z=Rf(r,C,"vertex"),V=Rf(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+q+`
`+Z+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||R==="")&&(N=!1);N&&(S.diagnostics={runnable:k,programLog:q,vertexShader:{log:z,prefix:m},fragmentShader:{log:R,prefix:p}})}r.deleteShader(C),r.deleteShader(T),L=new Jr(r,y),ee=Kv(r,y)}let L;this.getUniforms=function(){return L===void 0&&A(this),L};let ee;this.getAttributes=function(){return ee===void 0&&A(this),ee};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(y,Vv)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Gv++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var c1=0,dh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new fh(e),t.set(e,i)),i}},fh=class{constructor(e){this.id=c1++,this.code=e,this.usedTimes=0}};function h1(n,e,t,i,r,s,a){let o=new go,l=new dh,c=new Set,h=[],d=r.logarithmicDepthBuffer,u=r.reverseDepthBuffer,f=r.vertexTextures,g=r.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,S,q,z,R){let k=z.fog,N=R.geometry,Z=x.isMeshStandardMaterial?z.environment:null,V=(x.isMeshStandardMaterial?t:e).get(x.envMap||Z),xe=V&&V.mapping===zo?V.image.height:null,pe=y[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let G=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,re=G!==void 0?G.length:0,Ue=0;N.morphAttributes.position!==void 0&&(Ue=1),N.morphAttributes.normal!==void 0&&(Ue=2),N.morphAttributes.color!==void 0&&(Ue=3);let ne,he,ye,Te;if(pe){let Ot=Hn[pe];ne=Ot.vertexShader,he=Ot.fragmentShader}else ne=x.vertexShader,he=x.fragmentShader,l.update(x),ye=l.getVertexShaderID(x),Te=l.getFragmentShaderID(x);let We=n.getRenderTarget(),Ve=R.isInstancedMesh===!0,Be=R.isBatchedMesh===!0,He=!!x.map,se=!!x.matcap,I=!!V,le=!!x.aoMap,de=!!x.lightMap,ge=!!x.bumpMap,we=!!x.normalMap,ke=!!x.displacementMap,Ae=!!x.emissiveMap,P=!!x.metalnessMap,M=!!x.roughnessMap,X=x.anisotropy>0,J=x.clearcoat>0,oe=x.dispersion>0,ae=x.iridescence>0,Oe=x.sheen>0,Ce=x.transmission>0,Le=X&&!!x.anisotropyMap,Me=J&&!!x.clearcoatMap,te=J&&!!x.clearcoatNormalMap,ce=J&&!!x.clearcoatRoughnessMap,Ne=ae&&!!x.iridescenceMap,be=ae&&!!x.iridescenceThicknessMap,fe=Oe&&!!x.sheenColorMap,$e=Oe&&!!x.sheenRoughnessMap,Xe=!!x.specularMap,st=!!x.specularColorMap,F=!!x.specularIntensityMap,Re=Ce&&!!x.transmissionMap,j=Ce&&!!x.thicknessMap,ue=!!x.gradientMap,Ie=!!x.alphaMap,De=x.alphaTest>0,nt=!!x.alphaHash,_t=!!x.extensions,Vt=Ti;x.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Vt=n.toneMapping);let rt={shaderID:pe,shaderType:x.type,shaderName:x.name,vertexShader:ne,fragmentShader:he,defines:x.defines,customVertexShaderID:ye,customFragmentShaderID:Te,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Be,batchingColor:Be&&R._colorsTexture!==null,instancing:Ve,instancingColor:Ve&&R.instanceColor!==null,instancingMorph:Ve&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:Ii,alphaToCoverage:!!x.alphaToCoverage,map:He,matcap:se,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:xe,aoMap:le,lightMap:de,bumpMap:ge,normalMap:we,displacementMap:f&&ke,emissiveMap:Ae,normalMapObjectSpace:we&&x.normalMapType===Ag,normalMapTangentSpace:we&&x.normalMapType===$h,metalnessMap:P,roughnessMap:M,anisotropy:X,anisotropyMap:Le,clearcoat:J,clearcoatMap:Me,clearcoatNormalMap:te,clearcoatRoughnessMap:ce,dispersion:oe,iridescence:ae,iridescenceMap:Ne,iridescenceThicknessMap:be,sheen:Oe,sheenColorMap:fe,sheenRoughnessMap:$e,specularMap:Xe,specularColorMap:st,specularIntensityMap:F,transmission:Ce,transmissionMap:Re,thicknessMap:j,gradientMap:ue,opaque:x.transparent===!1&&x.blending===qr&&x.alphaToCoverage===!1,alphaMap:Ie,alphaTest:De,alphaHash:nt,combine:x.combine,mapUv:He&&m(x.map.channel),aoMapUv:le&&m(x.aoMap.channel),lightMapUv:de&&m(x.lightMap.channel),bumpMapUv:ge&&m(x.bumpMap.channel),normalMapUv:we&&m(x.normalMap.channel),displacementMapUv:ke&&m(x.displacementMap.channel),emissiveMapUv:Ae&&m(x.emissiveMap.channel),metalnessMapUv:P&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:Le&&m(x.anisotropyMap.channel),clearcoatMapUv:Me&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:be&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:$e&&m(x.sheenRoughnessMap.channel),specularMapUv:Xe&&m(x.specularMap.channel),specularColorMapUv:st&&m(x.specularColorMap.channel),specularIntensityMapUv:F&&m(x.specularIntensityMap.channel),transmissionMapUv:Re&&m(x.transmissionMap.channel),thicknessMapUv:j&&m(x.thicknessMap.channel),alphaMapUv:Ie&&m(x.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(we||X),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!N.attributes.uv&&(He||Ie),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:R.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ue,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:Vt,decodeVideoTexture:He&&x.map.isVideoTexture===!0&&lt.getTransfer(x.map.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Dt,flipSided:x.side===Jt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:_t&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&x.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=c.has(1),rt.vertexUv2s=c.has(2),rt.vertexUv3s=c.has(3),c.clear(),rt}function b(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let q in x.defines)S.push(q),S.push(x.defines[q]);return x.isRawShaderMaterial===!1&&(v(S,x),_(S,x),S.push(n.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function v(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function _(x,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),x.push(o.mask)}function C(x){let S=y[x.type],q;if(S){let z=Hn[S];q=ey.clone(z.uniforms)}else q=x.uniforms;return q}function T(x,S){let q;for(let z=0,R=h.length;z<R;z++){let k=h[z];if(k.cacheKey===S){q=k,++q.usedTimes;break}}return q===void 0&&(q=new l1(n,S,x,s),h.push(q)),q}function A(x){if(--x.usedTimes===0){let S=h.indexOf(x);h[S]=h[h.length-1],h.pop(),x.destroy()}}function L(x){l.remove(x)}function ee(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:C,acquireProgram:T,releaseProgram:A,releaseShaderCache:L,programs:h,dispose:ee}}function u1(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function r(a,o,l){n.get(a)[o]=l}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function d1(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Uf(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Nf(){let n=[],e=0,t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(d,u,f,g,y,m){let p=n[e];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},n[e]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=y,p.group=m),e++,p}function o(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?r.push(p):t.push(p)}function l(d,u,f,g,y,m){let p=a(d,u,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?r.unshift(p):t.unshift(p)}function c(d,u){t.length>1&&t.sort(d||d1),i.length>1&&i.sort(u||Uf),r.length>1&&r.sort(u||Uf)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:h,sort:c}}function f1(){let n=new WeakMap;function e(i,r){let s=n.get(i),a;return s===void 0?(a=new Nf,n.set(i,[a])):r>=s.length?(a=new Nf,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function p1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Je};break;case"SpotLight":t={position:new H,direction:new H,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function m1(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var g1=0;function y1(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function x1(n){let e=new p1,t=m1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let r=new H,s=new wt,a=new wt;function o(c){let h=0,d=0,u=0;for(let ee=0;ee<9;ee++)i.probe[ee].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,b=0,v=0,_=0,C=0,T=0,A=0;c.sort(y1);for(let ee=0,x=c.length;ee<x;ee++){let S=c[ee],q=S.color,z=S.intensity,R=S.distance,k=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=q.r*z,d+=q.g*z,u+=q.b*z;else if(S.isLightProbe){for(let N=0;N<9;N++)i.probe[N].addScaledVector(S.sh.coefficients[N],z);A++}else if(S.isDirectionalLight){let N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let Z=S.shadow,V=t.get(S);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=k,i.directionalShadowMatrix[f]=S.shadow.matrix,b++}i.directional[f]=N,f++}else if(S.isSpotLight){let N=e.get(S);N.position.setFromMatrixPosition(S.matrixWorld),N.color.copy(q).multiplyScalar(z),N.distance=R,N.coneCos=Math.cos(S.angle),N.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),N.decay=S.decay,i.spot[y]=N;let Z=S.shadow;if(S.map&&(i.spotLightMap[C]=S.map,C++,Z.updateMatrices(S),S.castShadow&&T++),i.spotLightMatrix[y]=Z.matrix,S.castShadow){let V=t.get(S);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=k,_++}y++}else if(S.isRectAreaLight){let N=e.get(S);N.color.copy(q).multiplyScalar(z),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),i.rectArea[m]=N,m++}else if(S.isPointLight){let N=e.get(S);if(N.color.copy(S.color).multiplyScalar(S.intensity),N.distance=S.distance,N.decay=S.decay,S.castShadow){let Z=S.shadow,V=t.get(S);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=k,i.pointShadowMatrix[g]=S.shadow.matrix,v++}i.point[g]=N,g++}else if(S.isHemisphereLight){let N=e.get(S);N.skyColor.copy(S.color).multiplyScalar(z),N.groundColor.copy(S.groundColor).multiplyScalar(z),i.hemi[p]=N,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Pe.LTC_FLOAT_1,i.rectAreaLTC2=Pe.LTC_FLOAT_2):(i.rectAreaLTC1=Pe.LTC_HALF_1,i.rectAreaLTC2=Pe.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==b||L.numPointShadows!==v||L.numSpotShadows!==_||L.numSpotMaps!==C||L.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=_+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=A,L.directionalLength=f,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=b,L.numPointShadows=v,L.numSpotShadows=_,L.numSpotMaps=C,L.numLightProbes=A,i.version=g1++)}function l(c,h){let d=0,u=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let v=c[p];if(v.isDirectionalLight){let _=i.directional[d];_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(v.isSpotLight){let _=i.spot[f];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),f++}else if(v.isRectAreaLight){let _=i.rectArea[g];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),a.identity(),s.copy(v.matrixWorld),s.premultiply(m),a.extractRotation(s),_.halfWidth.set(v.width*.5,0,0),_.halfHeight.set(0,v.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){let _=i.point[u];_.position.setFromMatrixPosition(v.matrixWorld),_.position.applyMatrix4(m),u++}else if(v.isHemisphereLight){let _=i.hemi[y];_.direction.setFromMatrixPosition(v.matrixWorld),_.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function kf(n){let e=new x1(n),t=[],i=[];function r(h){c.camera=h,t.length=0,i.length=0}function s(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _1(n){let e=new WeakMap;function t(r,s=0){let a=e.get(r),o;return a===void 0?(o=new kf(n),e.set(r,[o])):s>=a.length?(o=new kf(n),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var ph=class extends li{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},mh=class extends li{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},v1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,M1=`uniform sampler2D shadow_pass;
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
}`;function b1(n,e,t){let i=new Qs,r=new ve,s=new ve,a=new Et,o=new ph({depthPacking:Eg}),l=new mh,c={},h=t.maxTextureSize,d={[Ei]:Jt,[Jt]:Ei,[Dt]:Dt},u=new En({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:v1,fragmentShader:M1}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new nn;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ye(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xf;let p=this.type;this.render=function(T,A,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let ee=n.getRenderTarget(),x=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),q=n.state;q.setBlending(wi),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=p!==ti&&this.type===ti,R=p===ti&&this.type!==ti;for(let k=0,N=T.length;k<N;k++){let Z=T[k],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;r.copy(V.mapSize);let xe=V.getFrameExtents();if(r.multiply(xe),s.copy(V.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/xe.x),r.x=s.x*xe.x,V.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/xe.y),r.y=s.y*xe.y,V.mapSize.y=s.y)),V.map===null||z===!0||R===!0){let G=this.type!==ti?{minFilter:Zt,magFilter:Zt}:{};V.map!==null&&V.map.dispose(),V.map=new oi(r.x,r.y,G),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let pe=V.getViewportCount();for(let G=0;G<pe;G++){let re=V.getViewport(G);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),q.viewport(a),V.updateMatrices(Z,G),i=V.getFrustum(),_(A,L,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===ti&&b(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(ee,x,S)};function b(T,A){let L=e.update(y);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new oi(r.x,r.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(A,null,L,u,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(A,null,L,f,y,null)}function v(T,A,L,ee){let x=null,S=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(S!==void 0)x=S;else if(x=L.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let q=x.uuid,z=A.uuid,R=c[q];R===void 0&&(R={},c[q]=R);let k=R[z];k===void 0&&(k=x.clone(),R[z]=k,A.addEventListener("dispose",C)),x=k}if(x.visible=A.visible,x.wireframe=A.wireframe,ee===ti?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let q=n.properties.get(x);q.light=L}return x}function _(T,A,L,ee,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===ti)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let z=e.update(T),R=T.material;if(Array.isArray(R)){let k=z.groups;for(let N=0,Z=k.length;N<Z;N++){let V=k[N],xe=R[V.materialIndex];if(xe&&xe.visible){let pe=v(T,xe,ee,x);T.onBeforeShadow(n,T,A,L,z,pe,V),n.renderBufferDirect(L,null,z,pe,T,V),T.onAfterShadow(n,T,A,L,z,pe,V)}}}else if(R.visible){let k=v(T,R,ee,x);T.onBeforeShadow(n,T,A,L,z,k,null),n.renderBufferDirect(L,null,z,k,T,null),T.onAfterShadow(n,T,A,L,z,k,null)}}let q=T.children;for(let z=0,R=q.length;z<R;z++)_(q[z],A,L,ee,x)}function C(T){T.target.removeEventListener("dispose",C);for(let L in c){let ee=c[L],x=T.target.uuid;x in ee&&(ee[x].dispose(),delete ee[x])}}}var S1={[xc]:_c,[vc]:Sc,[Mc]:wc,[Qr]:bc,[_c]:xc,[Sc]:vc,[wc]:Mc,[bc]:Qr};function w1(n){function e(){let F=!1,Re=new Et,j=null,ue=new Et(0,0,0,0);return{setMask:function(Ie){j!==Ie&&!F&&(n.colorMask(Ie,Ie,Ie,Ie),j=Ie)},setLocked:function(Ie){F=Ie},setClear:function(Ie,De,nt,_t,Vt){Vt===!0&&(Ie*=_t,De*=_t,nt*=_t),Re.set(Ie,De,nt,_t),ue.equals(Re)===!1&&(n.clearColor(Ie,De,nt,_t),ue.copy(Re))},reset:function(){F=!1,j=null,ue.set(-1,0,0,0)}}}function t(){let F=!1,Re=!1,j=null,ue=null,Ie=null;return{setReversed:function(De){Re=De},setTest:function(De){De?ye(n.DEPTH_TEST):Te(n.DEPTH_TEST)},setMask:function(De){j!==De&&!F&&(n.depthMask(De),j=De)},setFunc:function(De){if(Re&&(De=S1[De]),ue!==De){switch(De){case xc:n.depthFunc(n.NEVER);break;case _c:n.depthFunc(n.ALWAYS);break;case vc:n.depthFunc(n.LESS);break;case Qr:n.depthFunc(n.LEQUAL);break;case Mc:n.depthFunc(n.EQUAL);break;case bc:n.depthFunc(n.GEQUAL);break;case Sc:n.depthFunc(n.GREATER);break;case wc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ue=De}},setLocked:function(De){F=De},setClear:function(De){Ie!==De&&(n.clearDepth(De),Ie=De)},reset:function(){F=!1,j=null,ue=null,Ie=null}}}function i(){let F=!1,Re=null,j=null,ue=null,Ie=null,De=null,nt=null,_t=null,Vt=null;return{setTest:function(rt){F||(rt?ye(n.STENCIL_TEST):Te(n.STENCIL_TEST))},setMask:function(rt){Re!==rt&&!F&&(n.stencilMask(rt),Re=rt)},setFunc:function(rt,Ot,xn){(j!==rt||ue!==Ot||Ie!==xn)&&(n.stencilFunc(rt,Ot,xn),j=rt,ue=Ot,Ie=xn)},setOp:function(rt,Ot,xn){(De!==rt||nt!==Ot||_t!==xn)&&(n.stencilOp(rt,Ot,xn),De=rt,nt=Ot,_t=xn)},setLocked:function(rt){F=rt},setClear:function(rt){Vt!==rt&&(n.clearStencil(rt),Vt=rt)},reset:function(){F=!1,Re=null,j=null,ue=null,Ie=null,De=null,nt=null,_t=null,Vt=null}}}let r=new e,s=new t,a=new i,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,m=null,p=null,b=null,v=null,_=null,C=null,T=new Je(0,0,0),A=0,L=!1,ee=null,x=null,S=null,q=null,z=null,R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,N=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(Z)[1]),k=N>=1):Z.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),k=N>=2);let V=null,xe={},pe=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),re=new Et().fromArray(pe),Ue=new Et().fromArray(G);function ne(F,Re,j,ue){let Ie=new Uint8Array(4),De=n.createTexture();n.bindTexture(F,De),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let nt=0;nt<j;nt++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Re,0,n.RGBA,1,1,ue,0,n.RGBA,n.UNSIGNED_BYTE,Ie):n.texImage2D(Re+nt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ie);return De}let he={};he[n.TEXTURE_2D]=ne(n.TEXTURE_2D,n.TEXTURE_2D,1),he[n.TEXTURE_CUBE_MAP]=ne(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[n.TEXTURE_2D_ARRAY]=ne(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),he[n.TEXTURE_3D]=ne(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),ye(n.DEPTH_TEST),s.setFunc(Qr),de(!1),ge(Gd),ye(n.CULL_FACE),I(wi);function ye(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function Te(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function We(F,Re){return h[F]!==Re?(n.bindFramebuffer(F,Re),h[F]=Re,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Re),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Re),!0):!1}function Ve(F,Re){let j=u,ue=!1;if(F){j=d.get(Re),j===void 0&&(j=[],d.set(Re,j));let Ie=F.textures;if(j.length!==Ie.length||j[0]!==n.COLOR_ATTACHMENT0){for(let De=0,nt=Ie.length;De<nt;De++)j[De]=n.COLOR_ATTACHMENT0+De;j.length=Ie.length,ue=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,ue=!0);ue&&n.drawBuffers(j)}function Be(F){return f!==F?(n.useProgram(F),f=F,!0):!1}let He={[tr]:n.FUNC_ADD,[Q0]:n.FUNC_SUBTRACT,[j0]:n.FUNC_REVERSE_SUBTRACT};He[eg]=n.MIN,He[tg]=n.MAX;let se={[ng]:n.ZERO,[ig]:n.ONE,[rg]:n.SRC_COLOR,[gc]:n.SRC_ALPHA,[hg]:n.SRC_ALPHA_SATURATE,[lg]:n.DST_COLOR,[ag]:n.DST_ALPHA,[sg]:n.ONE_MINUS_SRC_COLOR,[yc]:n.ONE_MINUS_SRC_ALPHA,[cg]:n.ONE_MINUS_DST_COLOR,[og]:n.ONE_MINUS_DST_ALPHA,[ug]:n.CONSTANT_COLOR,[dg]:n.ONE_MINUS_CONSTANT_COLOR,[fg]:n.CONSTANT_ALPHA,[pg]:n.ONE_MINUS_CONSTANT_ALPHA};function I(F,Re,j,ue,Ie,De,nt,_t,Vt,rt){if(F===wi){g===!0&&(Te(n.BLEND),g=!1);return}if(g===!1&&(ye(n.BLEND),g=!0),F!==K0){if(F!==y||rt!==L){if((m!==tr||v!==tr)&&(n.blendEquation(n.FUNC_ADD),m=tr,v=tr),rt)switch(F){case qr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.ONE,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $d:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case qr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Kr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Wd:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case $d:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,b=null,_=null,C=null,T.set(0,0,0),A=0,y=F,L=rt}return}Ie=Ie||Re,De=De||j,nt=nt||ue,(Re!==m||Ie!==v)&&(n.blendEquationSeparate(He[Re],He[Ie]),m=Re,v=Ie),(j!==p||ue!==b||De!==_||nt!==C)&&(n.blendFuncSeparate(se[j],se[ue],se[De],se[nt]),p=j,b=ue,_=De,C=nt),(_t.equals(T)===!1||Vt!==A)&&(n.blendColor(_t.r,_t.g,_t.b,Vt),T.copy(_t),A=Vt),y=F,L=!1}function le(F,Re){F.side===Dt?Te(n.CULL_FACE):ye(n.CULL_FACE);let j=F.side===Jt;Re&&(j=!j),de(j),F.blending===qr&&F.transparent===!1?I(wi):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),s.setFunc(F.depthFunc),s.setTest(F.depthTest),s.setMask(F.depthWrite),r.setMask(F.colorWrite);let ue=F.stencilWrite;a.setTest(ue),ue&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ke(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ye(n.SAMPLE_ALPHA_TO_COVERAGE):Te(n.SAMPLE_ALPHA_TO_COVERAGE)}function de(F){ee!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),ee=F)}function ge(F){F!==Z0?(ye(n.CULL_FACE),F!==x&&(F===Gd?n.cullFace(n.BACK):F===J0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Te(n.CULL_FACE),x=F}function we(F){F!==S&&(k&&n.lineWidth(F),S=F)}function ke(F,Re,j){F?(ye(n.POLYGON_OFFSET_FILL),(q!==Re||z!==j)&&(n.polygonOffset(Re,j),q=Re,z=j)):Te(n.POLYGON_OFFSET_FILL)}function Ae(F){F?ye(n.SCISSOR_TEST):Te(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+R-1),V!==F&&(n.activeTexture(F),V=F)}function M(F,Re,j){j===void 0&&(V===null?j=n.TEXTURE0+R-1:j=V);let ue=xe[j];ue===void 0&&(ue={type:void 0,texture:void 0},xe[j]=ue),(ue.type!==F||ue.texture!==Re)&&(V!==j&&(n.activeTexture(j),V=j),n.bindTexture(F,Re||he[F]),ue.type=F,ue.texture=Re)}function X(){let F=xe[V];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Le(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(F){re.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function fe(F){Ue.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function $e(F,Re){let j=l.get(Re);j===void 0&&(j=new WeakMap,l.set(Re,j));let ue=j.get(F);ue===void 0&&(ue=n.getUniformBlockIndex(Re,F.name),j.set(F,ue))}function Xe(F,Re){let ue=l.get(Re).get(F);o.get(Re)!==ue&&(n.uniformBlockBinding(Re,ue,F.__bindingPointIndex),o.set(Re,ue))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,xe={},h={},d=new WeakMap,u=[],f=null,g=!1,y=null,m=null,p=null,b=null,v=null,_=null,C=null,T=new Je(0,0,0),A=0,L=!1,ee=null,x=null,S=null,q=null,z=null,re.set(0,0,n.canvas.width,n.canvas.height),Ue.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:ye,disable:Te,bindFramebuffer:We,drawBuffers:Ve,useProgram:Be,setBlending:I,setMaterial:le,setFlipSided:de,setCullFace:ge,setLineWidth:we,setPolygonOffset:ke,setScissorTest:Ae,activeTexture:P,bindTexture:M,unbindTexture:X,compressedTexImage2D:J,compressedTexImage3D:oe,texImage2D:ce,texImage3D:Ne,updateUBOMapping:$e,uniformBlockBinding:Xe,texStorage2D:Me,texStorage3D:te,texSubImage2D:ae,texSubImage3D:Oe,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Le,scissor:be,viewport:fe,reset:st}}function Of(n,e,t,i){let r=T1(i);switch(t){case Qf:return n*e;case ep:return n*e;case tp:return n*e*2;case Ho:return n*e/r.components*r.byteLength;case Vh:return n*e/r.components*r.byteLength;case np:return n*e*2/r.components*r.byteLength;case Gh:return n*e*2/r.components*r.byteLength;case jf:return n*e*3/r.components*r.byteLength;case kn:return n*e*4/r.components*r.byteLength;case Wh:return n*e*4/r.components*r.byteLength;case eo:case to:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case no:case io:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rc:case Ic:return Math.max(n,16)*Math.max(e,8)/4;case Cc:case Pc:return Math.max(n,8)*Math.max(e,8)/2;case Lc:case Dc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Nc:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case kc:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Fc:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Bc:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case zc:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Hc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Vc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Gc:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case $c:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Xc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case qc:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Yc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case ro:case Zc:case Jc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case ip:case Kc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Qc:case jc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T1(n){switch(n){case ai:case Zf:return{byteLength:1,components:1};case Js:case Jf:case aa:return{byteLength:2,components:1};case zh:case Hh:return{byteLength:2,components:4};case sr:case Bh:case ii:return{byteLength:4,components:1};case Kf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function E1(n,e,t,i,r,s,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,M){return f?new OffscreenCanvas(P,M):fo("canvas")}function y(P,M,X){let J=1,oe=Ae(P);if((oe.width>X||oe.height>X)&&(J=X/Math.max(oe.width,oe.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let ae=Math.floor(J*oe.width),Oe=Math.floor(J*oe.height);d===void 0&&(d=g(ae,Oe));let Ce=M?g(ae,Oe):d;return Ce.width=ae,Ce.height=Oe,Ce.getContext("2d").drawImage(P,0,0,ae,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+Oe+")."),Ce}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==Zt&&P.minFilter!==Nn}function p(P){n.generateMipmap(P)}function b(P,M,X,J,oe=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ae=M;if(M===n.RED&&(X===n.FLOAT&&(ae=n.R32F),X===n.HALF_FLOAT&&(ae=n.R16F),X===n.UNSIGNED_BYTE&&(ae=n.R8)),M===n.RED_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.R8UI),X===n.UNSIGNED_SHORT&&(ae=n.R16UI),X===n.UNSIGNED_INT&&(ae=n.R32UI),X===n.BYTE&&(ae=n.R8I),X===n.SHORT&&(ae=n.R16I),X===n.INT&&(ae=n.R32I)),M===n.RG&&(X===n.FLOAT&&(ae=n.RG32F),X===n.HALF_FLOAT&&(ae=n.RG16F),X===n.UNSIGNED_BYTE&&(ae=n.RG8)),M===n.RG_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.RG8UI),X===n.UNSIGNED_SHORT&&(ae=n.RG16UI),X===n.UNSIGNED_INT&&(ae=n.RG32UI),X===n.BYTE&&(ae=n.RG8I),X===n.SHORT&&(ae=n.RG16I),X===n.INT&&(ae=n.RG32I)),M===n.RGB_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.RGB8UI),X===n.UNSIGNED_SHORT&&(ae=n.RGB16UI),X===n.UNSIGNED_INT&&(ae=n.RGB32UI),X===n.BYTE&&(ae=n.RGB8I),X===n.SHORT&&(ae=n.RGB16I),X===n.INT&&(ae=n.RGB32I)),M===n.RGBA_INTEGER&&(X===n.UNSIGNED_BYTE&&(ae=n.RGBA8UI),X===n.UNSIGNED_SHORT&&(ae=n.RGBA16UI),X===n.UNSIGNED_INT&&(ae=n.RGBA32UI),X===n.BYTE&&(ae=n.RGBA8I),X===n.SHORT&&(ae=n.RGBA16I),X===n.INT&&(ae=n.RGBA32I)),M===n.RGB&&X===n.UNSIGNED_INT_5_9_9_9_REV&&(ae=n.RGB9_E5),M===n.RGBA){let Oe=oe?oo:lt.getTransfer(J);X===n.FLOAT&&(ae=n.RGBA32F),X===n.HALF_FLOAT&&(ae=n.RGBA16F),X===n.UNSIGNED_BYTE&&(ae=Oe===pt?n.SRGB8_ALPHA8:n.RGBA8),X===n.UNSIGNED_SHORT_4_4_4_4&&(ae=n.RGBA4),X===n.UNSIGNED_SHORT_5_5_5_1&&(ae=n.RGB5_A1)}return(ae===n.R16F||ae===n.R32F||ae===n.RG16F||ae===n.RG32F||ae===n.RGBA16F||ae===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function v(P,M){let X;return P?M===null||M===sr||M===ts?X=n.DEPTH24_STENCIL8:M===ii?X=n.DEPTH32F_STENCIL8:M===Js&&(X=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===sr||M===ts?X=n.DEPTH_COMPONENT24:M===ii?X=n.DEPTH_COMPONENT32F:M===Js&&(X=n.DEPTH_COMPONENT16),X}function _(P,M){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==Zt&&P.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?M.mipmaps.length:1}function C(P){let M=P.target;M.removeEventListener("dispose",C),A(M),M.isVideoTexture&&h.delete(M)}function T(P){let M=P.target;M.removeEventListener("dispose",T),ee(M)}function A(P){let M=i.get(P);if(M.__webglInit===void 0)return;let X=P.source,J=u.get(X);if(J){let oe=J[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&L(P),Object.keys(J).length===0&&u.delete(X)}i.remove(P)}function L(P){let M=i.get(P);n.deleteTexture(M.__webglTexture);let X=P.source,J=u.get(X);delete J[M.__cacheKey],a.memory.textures--}function ee(P){let M=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(M.__webglFramebuffer[J]))for(let oe=0;oe<M.__webglFramebuffer[J].length;oe++)n.deleteFramebuffer(M.__webglFramebuffer[J][oe]);else n.deleteFramebuffer(M.__webglFramebuffer[J]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[J])}else{if(Array.isArray(M.__webglFramebuffer))for(let J=0;J<M.__webglFramebuffer.length;J++)n.deleteFramebuffer(M.__webglFramebuffer[J]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let J=0;J<M.__webglColorRenderbuffer.length;J++)M.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[J]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=P.textures;for(let J=0,oe=X.length;J<oe;J++){let ae=i.get(X[J]);ae.__webglTexture&&(n.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(X[J])}i.remove(P)}let x=0;function S(){x=0}function q(){let P=x;return P>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+r.maxTextures),x+=1,P}function z(P){let M=[];return M.push(P.wrapS),M.push(P.wrapT),M.push(P.wrapR||0),M.push(P.magFilter),M.push(P.minFilter),M.push(P.anisotropy),M.push(P.internalFormat),M.push(P.format),M.push(P.type),M.push(P.generateMipmaps),M.push(P.premultiplyAlpha),M.push(P.flipY),M.push(P.unpackAlignment),M.push(P.colorSpace),M.join()}function R(P,M){let X=i.get(P);if(P.isVideoTexture&&we(P),P.isRenderTargetTexture===!1&&P.version>0&&X.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(X,P,M);return}}t.bindTexture(n.TEXTURE_2D,X.__webglTexture,n.TEXTURE0+M)}function k(P,M){let X=i.get(P);if(P.version>0&&X.__version!==P.version){Ue(X,P,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,X.__webglTexture,n.TEXTURE0+M)}function N(P,M){let X=i.get(P);if(P.version>0&&X.__version!==P.version){Ue(X,P,M);return}t.bindTexture(n.TEXTURE_3D,X.__webglTexture,n.TEXTURE0+M)}function Z(P,M){let X=i.get(P);if(P.version>0&&X.__version!==P.version){ne(X,P,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,X.__webglTexture,n.TEXTURE0+M)}let V={[Zs]:n.REPEAT,[ir]:n.CLAMP_TO_EDGE,[Ac]:n.MIRRORED_REPEAT},xe={[Zt]:n.NEAREST,[wg]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[Nn]:n.LINEAR,[Ul]:n.LINEAR_MIPMAP_NEAREST,[rr]:n.LINEAR_MIPMAP_LINEAR},pe={[Cg]:n.NEVER,[Ug]:n.ALWAYS,[Rg]:n.LESS,[rp]:n.LEQUAL,[Pg]:n.EQUAL,[Dg]:n.GEQUAL,[Ig]:n.GREATER,[Lg]:n.NOTEQUAL};function G(P,M){if(M.type===ii&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Ul||M.magFilter===Ea||M.magFilter===rr||M.minFilter===Nn||M.minFilter===Ul||M.minFilter===Ea||M.minFilter===rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,V[M.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,V[M.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,V[M.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,xe[M.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Zt||M.minFilter!==Ea&&M.minFilter!==rr||M.type===ii&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function re(P,M){let X=!1;P.__webglInit===void 0&&(P.__webglInit=!0,M.addEventListener("dispose",C));let J=M.source,oe=u.get(J);oe===void 0&&(oe={},u.set(J,oe));let ae=z(M);if(ae!==P.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,X=!0),oe[ae].usedTimes++;let Oe=oe[P.__cacheKey];Oe!==void 0&&(oe[P.__cacheKey].usedTimes--,Oe.usedTimes===0&&L(M)),P.__cacheKey=ae,P.__webglTexture=oe[ae].texture}return X}function Ue(P,M,X){let J=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(J=n.TEXTURE_3D);let oe=re(P,M),ae=M.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+X);let Oe=i.get(ae);if(ae.version!==Oe.__version||oe===!0){t.activeTexture(n.TEXTURE0+X);let Ce=lt.getPrimaries(lt.workingColorSpace),Le=M.colorSpace===bi?null:lt.getPrimaries(M.colorSpace),Me=M.colorSpace===bi||Ce===Le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let te=y(M.image,!1,r.maxTextureSize);te=ke(M,te);let ce=s.convert(M.format,M.colorSpace),Ne=s.convert(M.type),be=b(M.internalFormat,ce,Ne,M.colorSpace,M.isVideoTexture);G(J,M);let fe,$e=M.mipmaps,Xe=M.isVideoTexture!==!0,st=Oe.__version===void 0||oe===!0,F=ae.dataReady,Re=_(M,te);if(M.isDepthTexture)be=v(M.format===ns,M.type),st&&(Xe?t.texStorage2D(n.TEXTURE_2D,1,be,te.width,te.height):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,ce,Ne,null));else if(M.isDataTexture)if($e.length>0){Xe&&st&&t.texStorage2D(n.TEXTURE_2D,Re,be,$e[0].width,$e[0].height);for(let j=0,ue=$e.length;j<ue;j++)fe=$e[j],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,ce,Ne,fe.data):t.texImage2D(n.TEXTURE_2D,j,be,fe.width,fe.height,0,ce,Ne,fe.data);M.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(n.TEXTURE_2D,Re,be,te.width,te.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,te.width,te.height,ce,Ne,te.data)):t.texImage2D(n.TEXTURE_2D,0,be,te.width,te.height,0,ce,Ne,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Xe&&st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,be,$e[0].width,$e[0].height,te.depth);for(let j=0,ue=$e.length;j<ue;j++)if(fe=$e[j],M.format!==kn)if(ce!==null)if(Xe){if(F)if(M.layerUpdates.size>0){let Ie=Of(fe.width,fe.height,M.format,M.type);for(let De of M.layerUpdates){let nt=fe.data.subarray(De*Ie/fe.data.BYTES_PER_ELEMENT,(De+1)*Ie/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,De,fe.width,fe.height,1,ce,nt,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,te.depth,ce,fe.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,be,fe.width,fe.height,te.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Xe?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,fe.width,fe.height,te.depth,ce,Ne,fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,be,fe.width,fe.height,te.depth,0,ce,Ne,fe.data)}else{Xe&&st&&t.texStorage2D(n.TEXTURE_2D,Re,be,$e[0].width,$e[0].height);for(let j=0,ue=$e.length;j<ue;j++)fe=$e[j],M.format!==kn?ce!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,ce,fe.data):t.compressedTexImage2D(n.TEXTURE_2D,j,be,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,fe.width,fe.height,ce,Ne,fe.data):t.texImage2D(n.TEXTURE_2D,j,be,fe.width,fe.height,0,ce,Ne,fe.data)}else if(M.isDataArrayTexture)if(Xe){if(st&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Re,be,te.width,te.height,te.depth),F)if(M.layerUpdates.size>0){let j=Of(te.width,te.height,M.format,M.type);for(let ue of M.layerUpdates){let Ie=te.data.subarray(ue*j/te.data.BYTES_PER_ELEMENT,(ue+1)*j/te.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,ue,te.width,te.height,1,ce,Ne,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Ne,te.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,te.width,te.height,te.depth,0,ce,Ne,te.data);else if(M.isData3DTexture)Xe?(st&&t.texStorage3D(n.TEXTURE_3D,Re,be,te.width,te.height,te.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Ne,te.data)):t.texImage3D(n.TEXTURE_3D,0,be,te.width,te.height,te.depth,0,ce,Ne,te.data);else if(M.isFramebufferTexture){if(st)if(Xe)t.texStorage2D(n.TEXTURE_2D,Re,be,te.width,te.height);else{let j=te.width,ue=te.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(n.TEXTURE_2D,Ie,be,j,ue,0,ce,Ne,null),j>>=1,ue>>=1}}else if($e.length>0){if(Xe&&st){let j=Ae($e[0]);t.texStorage2D(n.TEXTURE_2D,Re,be,j.width,j.height)}for(let j=0,ue=$e.length;j<ue;j++)fe=$e[j],Xe?F&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ce,Ne,fe):t.texImage2D(n.TEXTURE_2D,j,be,ce,Ne,fe);M.generateMipmaps=!1}else if(Xe){if(st){let j=Ae(te);t.texStorage2D(n.TEXTURE_2D,Re,be,j.width,j.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ce,Ne,te)}else t.texImage2D(n.TEXTURE_2D,0,be,ce,Ne,te);m(M)&&p(J),Oe.__version=ae.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function ne(P,M,X){if(M.image.length!==6)return;let J=re(P,M),oe=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+X);let ae=i.get(oe);if(oe.version!==ae.__version||J===!0){t.activeTexture(n.TEXTURE0+X);let Oe=lt.getPrimaries(lt.workingColorSpace),Ce=M.colorSpace===bi?null:lt.getPrimaries(M.colorSpace),Le=M.colorSpace===bi||Oe===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let Me=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let ue=0;ue<6;ue++)!Me&&!te?ce[ue]=y(M.image[ue],!0,r.maxCubemapSize):ce[ue]=te?M.image[ue].image:M.image[ue],ce[ue]=ke(M,ce[ue]);let Ne=ce[0],be=s.convert(M.format,M.colorSpace),fe=s.convert(M.type),$e=b(M.internalFormat,be,fe,M.colorSpace),Xe=M.isVideoTexture!==!0,st=ae.__version===void 0||J===!0,F=oe.dataReady,Re=_(M,Ne);G(n.TEXTURE_CUBE_MAP,M);let j;if(Me){Xe&&st&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,$e,Ne.width,Ne.height);for(let ue=0;ue<6;ue++){j=ce[ue].mipmaps;for(let Ie=0;Ie<j.length;Ie++){let De=j[Ie];M.format!==kn?be!==null?Xe?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie,$e,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie,0,0,De.width,De.height,be,fe,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie,$e,De.width,De.height,0,be,fe,De.data)}}}else{if(j=M.mipmaps,Xe&&st){j.length>0&&Re++;let ue=Ae(ce[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Re,$e,ue.width,ue.height)}for(let ue=0;ue<6;ue++)if(te){Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,ce[ue].width,ce[ue].height,be,fe,ce[ue].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,ce[ue].width,ce[ue].height,0,be,fe,ce[ue].data);for(let Ie=0;Ie<j.length;Ie++){let nt=j[Ie].image[ue].image;Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie+1,0,0,nt.width,nt.height,be,fe,nt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie+1,$e,nt.width,nt.height,0,be,fe,nt.data)}}else{Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,0,0,be,fe,ce[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0,$e,be,fe,ce[ue]);for(let Ie=0;Ie<j.length;Ie++){let De=j[Ie];Xe?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie+1,0,0,be,fe,De.image[ue]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Ie+1,$e,be,fe,De.image[ue])}}}m(M)&&p(n.TEXTURE_CUBE_MAP),ae.__version=oe.version,M.onUpdate&&M.onUpdate(M)}P.__version=M.version}function he(P,M,X,J,oe,ae){let Oe=s.convert(X.format,X.colorSpace),Ce=s.convert(X.type),Le=b(X.internalFormat,Oe,Ce,X.colorSpace);if(!i.get(M).__hasExternalTextures){let te=Math.max(1,M.width>>ae),ce=Math.max(1,M.height>>ae);oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,ae,Le,te,ce,M.depth,0,Oe,Ce,null):t.texImage2D(oe,ae,Le,te,ce,0,Oe,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,oe,i.get(X).__webglTexture,0,de(M)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,oe,i.get(X).__webglTexture,ae),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ye(P,M,X){if(n.bindRenderbuffer(n.RENDERBUFFER,P),M.depthBuffer){let J=M.depthTexture,oe=J&&J.isDepthTexture?J.type:null,ae=v(M.stencilBuffer,oe),Oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ce=de(M);ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Ce,ae,M.width,M.height):X?n.renderbufferStorageMultisample(n.RENDERBUFFER,Ce,ae,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ae,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,P)}else{let J=M.textures;for(let oe=0;oe<J.length;oe++){let ae=J[oe],Oe=s.convert(ae.format,ae.colorSpace),Ce=s.convert(ae.type),Le=b(ae.internalFormat,Oe,Ce,ae.colorSpace),Me=de(M);X&&ge(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Me,Le,M.width,M.height):ge(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Me,Le,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,Le,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Te(P,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),R(M.depthTexture,0);let J=i.get(M.depthTexture).__webglTexture,oe=de(M);if(M.depthTexture.format===Yr)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(M.depthTexture.format===ns)ge(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function We(P){let M=i.get(P),X=P.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),J){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,J.removeEventListener("dispose",oe)};J.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=J}if(P.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,P)}else if(X){M.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[J]),M.__webglDepthbuffer[J]===void 0)M.__webglDepthbuffer[J]=n.createRenderbuffer(),ye(M.__webglDepthbuffer[J],P,!1);else{let oe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,oe,n.RENDERBUFFER,ae)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),ye(M.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,oe)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ve(P,M,X){let J=i.get(P);M!==void 0&&he(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),X!==void 0&&We(P)}function Be(P){let M=P.texture,X=i.get(P),J=i.get(M);P.addEventListener("dispose",T);let oe=P.textures,ae=P.isWebGLCubeRenderTarget===!0,Oe=oe.length>1;if(Oe||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=M.version,a.memory.textures++),ae){X.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Ce]=[];for(let Le=0;Le<M.mipmaps.length;Le++)X.__webglFramebuffer[Ce][Le]=n.createFramebuffer()}else X.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)X.__webglFramebuffer[Ce]=n.createFramebuffer()}else X.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let Ce=0,Le=oe.length;Ce<Le;Ce++){let Me=i.get(oe[Ce]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ge(P)===!1){X.__webglMultisampledFramebuffer=n.createFramebuffer(),X.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ce=0;Ce<oe.length;Ce++){let Le=oe[Ce];X.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,X.__webglColorRenderbuffer[Ce]);let Me=s.convert(Le.format,Le.colorSpace),te=s.convert(Le.type),ce=b(Le.internalFormat,Me,te,Le.colorSpace,P.isXRRenderTarget===!0),Ne=de(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ce,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,X.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(X.__webglDepthRenderbuffer=n.createRenderbuffer(),ye(X.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ae){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),G(n.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)he(X.__webglFramebuffer[Ce][Le],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Le);else he(X.__webglFramebuffer[Ce],P,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);m(M)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Ce=0,Le=oe.length;Ce<Le;Ce++){let Me=oe[Ce],te=i.get(Me);t.bindTexture(n.TEXTURE_2D,te.__webglTexture),G(n.TEXTURE_2D,Me),he(X.__webglFramebuffer,P,Me,n.COLOR_ATTACHMENT0+Ce,n.TEXTURE_2D,0),m(Me)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Ce=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,J.__webglTexture),G(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Le=0;Le<M.mipmaps.length;Le++)he(X.__webglFramebuffer[Le],P,M,n.COLOR_ATTACHMENT0,Ce,Le);else he(X.__webglFramebuffer,P,M,n.COLOR_ATTACHMENT0,Ce,0);m(M)&&p(Ce),t.unbindTexture()}P.depthBuffer&&We(P)}function He(P){let M=P.textures;for(let X=0,J=M.length;X<J;X++){let oe=M[X];if(m(oe)){let ae=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Oe=i.get(oe).__webglTexture;t.bindTexture(ae,Oe),p(ae),t.unbindTexture()}}}let se=[],I=[];function le(P){if(P.samples>0){if(ge(P)===!1){let M=P.textures,X=P.width,J=P.height,oe=n.COLOR_BUFFER_BIT,ae=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(P),Ce=M.length>1;if(Ce)for(let Le=0;Le<M.length;Le++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let Le=0;Le<M.length;Le++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);let Me=i.get(M[Le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,X,J,0,0,X,J,oe,n.NEAREST),l===!0&&(se.length=0,I.length=0,se.push(n.COLOR_ATTACHMENT0+Le),P.depthBuffer&&P.resolveDepthBuffer===!1&&(se.push(ae),I.push(ae),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let Le=0;Le<M.length;Le++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[Le]);let Me=i.get(M[Le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Le,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let M=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function de(P){return Math.min(r.maxSamples,P.samples)}function ge(P){let M=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(P){let M=a.render.frame;h.get(P)!==M&&(h.set(P,M),P.update())}function ke(P,M){let X=P.colorSpace,J=P.format,oe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||X!==Ii&&X!==bi&&(lt.getTransfer(X)===pt?(J!==kn||oe!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Ae(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=S,this.setTexture2D=R,this.setTexture2DArray=k,this.setTexture3D=N,this.setTextureCube=Z,this.rebindTextures=Ve,this.setupRenderTarget=Be,this.updateRenderTargetMipmap=He,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ge}function A1(n,e){function t(i,r=bi){let s,a=lt.getTransfer(r);if(i===ai)return n.UNSIGNED_BYTE;if(i===zh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Kf)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zf)return n.BYTE;if(i===Jf)return n.SHORT;if(i===Js)return n.UNSIGNED_SHORT;if(i===Bh)return n.INT;if(i===sr)return n.UNSIGNED_INT;if(i===ii)return n.FLOAT;if(i===aa)return n.HALF_FLOAT;if(i===Qf)return n.ALPHA;if(i===jf)return n.RGB;if(i===kn)return n.RGBA;if(i===ep)return n.LUMINANCE;if(i===tp)return n.LUMINANCE_ALPHA;if(i===Yr)return n.DEPTH_COMPONENT;if(i===ns)return n.DEPTH_STENCIL;if(i===Ho)return n.RED;if(i===Vh)return n.RED_INTEGER;if(i===np)return n.RG;if(i===Gh)return n.RG_INTEGER;if(i===Wh)return n.RGBA_INTEGER;if(i===eo||i===to||i===no||i===io)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===eo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===eo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===to)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===io)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cc||i===Rc||i===Pc||i===Ic)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rc)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Pc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lc||i===Dc||i===Uc)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lc||i===Dc)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Uc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nc||i===kc||i===Oc||i===Fc||i===Bc||i===zc||i===Hc||i===Vc||i===Gc||i===Wc||i===$c||i===Xc||i===qc||i===Yc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===kc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Oc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Fc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Bc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Gc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Wc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===$c)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Xc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Yc)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ro||i===Zc||i===Jc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ro)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===ip||i===Kc||i===Qc||i===jc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ro)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Kc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ts?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var gh=class extends Yt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ze=class extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}},C1={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ze,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ze,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ze,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(C1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ze;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},R1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,P1=`
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

}`,yh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let r=new cn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new En({vertexShader:R1,fragmentShader:P1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ye(new ci(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xh=class extends Ai{constructor(e,t){super();let i=this,r=null,s=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,y=new yh,m=t.getContextAttributes(),p=null,b=null,v=[],_=[],C=new ve,T=null,A=new Yt;A.layers.enable(1),A.viewport=new Et;let L=new Yt;L.layers.enable(2),L.viewport=new Et;let ee=[A,L],x=new gh;x.layers.enable(1),x.layers.enable(2);let S=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=v[ne];return he===void 0&&(he=new $s,v[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=v[ne];return he===void 0&&(he=new $s,v[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=v[ne];return he===void 0&&(he=new $s,v[ne]=he),he.getHandSpace()};function z(ne){let he=_.indexOf(ne.inputSource);if(he===-1)return;let ye=v[he];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||a),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function R(){r.removeEventListener("select",z),r.removeEventListener("selectstart",z),r.removeEventListener("selectend",z),r.removeEventListener("squeeze",z),r.removeEventListener("squeezestart",z),r.removeEventListener("squeezeend",z),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",k);for(let ne=0;ne<v.length;ne++){let he=_[ne];he!==null&&(_[ne]=null,v[ne].disconnect(he))}S=null,q=null,y.reset(),e.setRenderTarget(p),f=null,u=null,d=null,r=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(ne){if(r=ne,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",z),r.addEventListener("selectstart",z),r.addEventListener("selectend",z),r.addEventListener("squeeze",z),r.addEventListener("squeezestart",z),r.addEventListener("squeezeend",z),r.addEventListener("end",R),r.addEventListener("inputsourceschange",k),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),r.renderState.layers===void 0){let he={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,he),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new oi(f.framebufferWidth,f.framebufferHeight,{format:kn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let he=null,ye=null,Te=null;m.depth&&(Te=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=m.stencil?ns:Yr,ye=m.stencil?ts:sr);let We={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:s};d=new XRWebGLBinding(r,t),u=d.createProjectionLayer(We),r.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new oi(u.textureWidth,u.textureHeight,{format:kn,type:ai,depthTexture:new So(u.textureWidth,u.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ue.setContext(r),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function k(ne){for(let he=0;he<ne.removed.length;he++){let ye=ne.removed[he],Te=_.indexOf(ye);Te>=0&&(_[Te]=null,v[Te].disconnect(ye))}for(let he=0;he<ne.added.length;he++){let ye=ne.added[he],Te=_.indexOf(ye);if(Te===-1){for(let Ve=0;Ve<v.length;Ve++)if(Ve>=_.length){_.push(ye),Te=Ve;break}else if(_[Ve]===null){_[Ve]=ye,Te=Ve;break}if(Te===-1)break}let We=v[Te];We&&We.connect(ye)}}let N=new H,Z=new H;function V(ne,he,ye){N.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);let Te=N.distanceTo(Z),We=he.projectionMatrix.elements,Ve=ye.projectionMatrix.elements,Be=We[14]/(We[10]-1),He=We[14]/(We[10]+1),se=(We[9]+1)/We[5],I=(We[9]-1)/We[5],le=(We[8]-1)/We[0],de=(Ve[8]+1)/Ve[0],ge=Be*le,we=Be*de,ke=Te/(-le+de),Ae=ke*-le;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ae),ne.translateZ(ke),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),We[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let P=Be+ke,M=He+ke,X=ge-Ae,J=we+(Te-Ae),oe=se*He/M*P,ae=I*He/M*P;ne.projectionMatrix.makePerspective(X,J,oe,ae,P,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function xe(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(r===null)return;let he=ne.near,ye=ne.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),x.near=L.near=A.near=he,x.far=L.far=A.far=ye,(S!==x.near||q!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),S=x.near,q=x.far);let Te=ne.parent,We=x.cameras;xe(x,Te);for(let Ve=0;Ve<We.length;Ve++)xe(We[Ve],Te);We.length===2?V(x,A,L):x.projectionMatrix.copy(A.projectionMatrix),pe(ne,x,Te)};function pe(ne,he,ye){ye===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=uo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(ne){l=ne,u!==null&&(u.fixedFoveation=ne),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(x)};let G=null;function re(ne,he){if(h=he.getViewerPose(c||a),g=he,h!==null){let ye=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Te=!1;ye.length!==x.cameras.length&&(x.cameras.length=0,Te=!0);for(let Ve=0;Ve<ye.length;Ve++){let Be=ye[Ve],He=null;if(f!==null)He=f.getViewport(Be);else{let I=d.getViewSubImage(u,Be);He=I.viewport,Ve===0&&(e.setRenderTargetTextures(b,I.colorTexture,u.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(b))}let se=ee[Ve];se===void 0&&(se=new Yt,se.layers.enable(Ve),se.viewport=new Et,ee[Ve]=se),se.matrix.fromArray(Be.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Be.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(He.x,He.y,He.width,He.height),Ve===0&&(x.matrix.copy(se.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Te===!0&&x.cameras.push(se)}let We=r.enabledFeatures;if(We&&We.includes("depth-sensing")){let Ve=d.getDepthInformation(ye[0]);Ve&&Ve.isValid&&Ve.texture&&y.init(e,Ve,r.renderState)}}for(let ye=0;ye<v.length;ye++){let Te=_[ye],We=v[ye];Te!==null&&We!==void 0&&We.update(Te,he,c||a)}G&&G(ne,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),g=null}let Ue=new lp;Ue.setAnimationLoop(re),this.setAnimationLoop=function(ne){G=ne},this.dispose=function(){}}},ji=new Gn,I1=new wt;function L1(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,op(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,b,v,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),y(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,v):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Jt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Jt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),v=b.envMap,_=b.envMapRotation;v&&(m.envMap.value=v,ji.copy(_),ji.x*=-1,ji.y*=-1,ji.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ji.y*=-1,ji.z*=-1),m.envMapRotation.value.setFromMatrix4(I1.makeRotationFromEuler(ji)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=v*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Jt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function D1(n,e,t,i){let r={},s={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,v){let _=v.program;i.uniformBlockBinding(b,_)}function c(b,v){let _=r[b.id];_===void 0&&(g(b),_=h(b),r[b.id]=_,b.addEventListener("dispose",m));let C=v.program;i.updateUBOMapping(b,C);let T=e.render.frame;s[b.id]!==T&&(u(b),s[b.id]=T)}function h(b){let v=d();b.__bindingPointIndex=v;let _=n.createBuffer(),C=b.__size,T=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,_),_}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){let v=r[b.id],_=b.uniforms,C=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let T=0,A=_.length;T<A;T++){let L=Array.isArray(_[T])?_[T]:[_[T]];for(let ee=0,x=L.length;ee<x;ee++){let S=L[ee];if(f(S,T,ee,C)===!0){let q=S.__offset,z=Array.isArray(S.value)?S.value:[S.value],R=0;for(let k=0;k<z.length;k++){let N=z[k],Z=y(N);typeof N=="number"||typeof N=="boolean"?(S.__data[0]=N,n.bufferSubData(n.UNIFORM_BUFFER,q+R,S.__data)):N.isMatrix3?(S.__data[0]=N.elements[0],S.__data[1]=N.elements[1],S.__data[2]=N.elements[2],S.__data[3]=0,S.__data[4]=N.elements[3],S.__data[5]=N.elements[4],S.__data[6]=N.elements[5],S.__data[7]=0,S.__data[8]=N.elements[6],S.__data[9]=N.elements[7],S.__data[10]=N.elements[8],S.__data[11]=0):(N.toArray(S.__data,R),R+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,q,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(b,v,_,C){let T=b.value,A=v+"_"+_;if(C[A]===void 0)return typeof T=="number"||typeof T=="boolean"?C[A]=T:C[A]=T.clone(),!0;{let L=C[A];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[A]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(b){let v=b.uniforms,_=0,C=16;for(let A=0,L=v.length;A<L;A++){let ee=Array.isArray(v[A])?v[A]:[v[A]];for(let x=0,S=ee.length;x<S;x++){let q=ee[x],z=Array.isArray(q.value)?q.value:[q.value];for(let R=0,k=z.length;R<k;R++){let N=z[R],Z=y(N),V=_%C,xe=V%Z.boundary,pe=V+xe;_+=xe,pe!==0&&C-pe<Z.storage&&(_+=C-pe),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=_,_+=Z.storage}}}let T=_%C;return T>0&&(_+=C-T),b.__size=_,b.__cache={},this}function y(b){let v={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(v.boundary=4,v.storage=4):b.isVector2?(v.boundary=8,v.storage=8):b.isVector3||b.isColor?(v.boundary=16,v.storage=12):b.isVector4?(v.boundary=16,v.storage=16):b.isMatrix3?(v.boundary=48,v.storage=48):b.isMatrix4?(v.boundary=64,v.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),v}function m(b){let v=b.target;v.removeEventListener("dispose",m);let _=a.indexOf(v.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function p(){for(let b in r)n.deleteBuffer(r[b]);a=[],r={},s={}}return{bind:l,update:c,dispose:p}}var wo=class{constructor(e={}){let{canvas:t=kg(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Bt,this.toneMapping=Ti,this.toneMappingExposure=1;let v=this,_=!1,C=0,T=0,A=null,L=-1,ee=null,x=new Et,S=new Et,q=null,z=new Je(0),R=0,k=t.width,N=t.height,Z=1,V=null,xe=null,pe=new Et(0,0,k,N),G=new Et(0,0,k,N),re=!1,Ue=new Qs,ne=!1,he=!1,ye=new wt,Te=new wt,We=new H,Ve=new Et,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function se(){return A===null?Z:1}let I=i;function le(E,W){return t.getContext(E,W)}try{let E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",ue,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),I===null){let W="webgl2";if(I=le(W,E),I===null)throw le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let de,ge,we,ke,Ae,P,M,X,J,oe,ae,Oe,Ce,Le,Me,te,ce,Ne,be,fe,$e,Xe,st,F;function Re(){de=new Z_(I),de.init(),Xe=new A1(I,de),ge=new G_(I,de,e,Xe),we=new w1(I),ge.reverseDepthBuffer&&we.buffers.depth.setReversed(!0),ke=new Q_(I),Ae=new u1,P=new E1(I,de,we,Ae,ge,Xe,ke),M=new $_(v),X=new Y_(v),J=new sy(I),st=new H_(I,J),oe=new J_(I,J,ke,st),ae=new ev(I,oe,J,ke),be=new j_(I,ge,P),te=new W_(Ae),Oe=new h1(v,M,X,de,ge,st,te),Ce=new L1(v,Ae),Le=new f1,Me=new _1(de),Ne=new z_(v,M,X,we,ae,u,l),ce=new b1(v,ae,ge),F=new D1(I,ke,ge,we),fe=new V_(I,de,ke),$e=new K_(I,de,ke),ke.programs=Oe.programs,v.capabilities=ge,v.extensions=de,v.properties=Ae,v.renderLists=Le,v.shadowMap=ce,v.state=we,v.info=ke}Re();let j=new xh(v,I);this.xr=j,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let E=de.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=de.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(E){E!==void 0&&(Z=E,this.setSize(k,N,!1))},this.getSize=function(E){return E.set(k,N)},this.setSize=function(E,W,K=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,N=W,t.width=Math.floor(E*Z),t.height=Math.floor(W*Z),K===!0&&(t.style.width=E+"px",t.style.height=W+"px"),this.setViewport(0,0,E,W)},this.getDrawingBufferSize=function(E){return E.set(k*Z,N*Z).floor()},this.setDrawingBufferSize=function(E,W,K){k=E,N=W,Z=K,t.width=Math.floor(E*K),t.height=Math.floor(W*K),this.setViewport(0,0,E,W)},this.getCurrentViewport=function(E){return E.copy(x)},this.getViewport=function(E){return E.copy(pe)},this.setViewport=function(E,W,K,Q){E.isVector4?pe.set(E.x,E.y,E.z,E.w):pe.set(E,W,K,Q),we.viewport(x.copy(pe).multiplyScalar(Z).round())},this.getScissor=function(E){return E.copy(G)},this.setScissor=function(E,W,K,Q){E.isVector4?G.set(E.x,E.y,E.z,E.w):G.set(E,W,K,Q),we.scissor(S.copy(G).multiplyScalar(Z).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(E){we.setScissorTest(re=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){xe=E},this.getClearColor=function(E){return E.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(E=!0,W=!0,K=!0){let Q=0;if(E){let w=!1;if(A!==null){let D=A.texture.format;w=D===Wh||D===Gh||D===Vh}if(w){let D=A.texture.type,$=D===ai||D===sr||D===Js||D===ts||D===zh||D===Hh,O=Ne.getClearColor(),B=Ne.getClearAlpha(),U=O.r,ie=O.g,Y=O.b;$?(f[0]=U,f[1]=ie,f[2]=Y,f[3]=B,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=U,g[1]=ie,g[2]=Y,g[3]=B,I.clearBufferiv(I.COLOR,0,g))}else Q|=I.COLOR_BUFFER_BIT}W&&(Q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),K&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ue,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Le.dispose(),Me.dispose(),Ae.dispose(),M.dispose(),X.dispose(),ae.dispose(),st.dispose(),F.dispose(),Oe.dispose(),j.dispose(),j.removeEventListener("sessionstart",qn),j.removeEventListener("sessionend",cs),rn.stop()};function ue(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let E=ke.autoReset,W=ce.enabled,K=ce.autoUpdate,Q=ce.needsUpdate,w=ce.type;Re(),ke.autoReset=E,ce.enabled=W,ce.autoUpdate=K,ce.needsUpdate=Q,ce.type=w}function De(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function nt(E){let W=E.target;W.removeEventListener("dispose",nt),_t(W)}function _t(E){Vt(E),Ae.remove(E)}function Vt(E){let W=Ae.get(E).programs;W!==void 0&&(W.forEach(function(K){Oe.releaseProgram(K)}),E.isShaderMaterial&&Oe.releaseShaderCache(E))}this.renderBufferDirect=function(E,W,K,Q,w,D){W===null&&(W=Be);let $=w.isMesh&&w.matrixWorld.determinant()<0,O=ua(E,W,K,Q,w);we.setMaterial(Q,$);let B=K.index,U=1;if(Q.wireframe===!0){if(B=oe.getWireframeAttribute(K),B===void 0)return;U=2}let ie=K.drawRange,Y=K.attributes.position,_e=ie.start*U,Ge=(ie.start+ie.count)*U;D!==null&&(_e=Math.max(_e,D.start*U),Ge=Math.min(Ge,(D.start+D.count)*U)),B!==null?(_e=Math.max(_e,0),Ge=Math.min(Ge,B.count)):Y!=null&&(_e=Math.max(_e,0),Ge=Math.min(Ge,Y.count));let je=Ge-_e;if(je<0||je===1/0)return;st.setup(w,Q,O,K,B);let Gt,et=fe;if(B!==null&&(Gt=J.get(B),et=$e,et.setIndex(Gt)),w.isMesh)Q.wireframe===!0?(we.setLineWidth(Q.wireframeLinewidth*se()),et.setMode(I.LINES)):et.setMode(I.TRIANGLES);else if(w.isLine){let Fe=Q.linewidth;Fe===void 0&&(Fe=1),we.setLineWidth(Fe*se()),w.isLineSegments?et.setMode(I.LINES):w.isLineLoop?et.setMode(I.LINE_LOOP):et.setMode(I.LINE_STRIP)}else w.isPoints?et.setMode(I.POINTS):w.isSprite&&et.setMode(I.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)et.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))et.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{let Fe=w._multiDrawStarts,mt=w._multiDrawCounts,tt=w._multiDrawCount,sn=B?J.get(B).bytesPerElement:1,Cn=Ae.get(Q).currentProgram.getUniforms();for(let Wt=0;Wt<tt;Wt++)Cn.setValue(I,"_gl_DrawID",Wt),et.render(Fe[Wt]/sn,mt[Wt])}else if(w.isInstancedMesh)et.renderInstances(_e,je,w.count);else if(K.isInstancedBufferGeometry){let Fe=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,mt=Math.min(K.instanceCount,Fe);et.renderInstances(_e,je,mt)}else et.render(_e,je)};function rt(E,W,K){E.transparent===!0&&E.side===Dt&&E.forceSinglePass===!1?(E.side=Jt,E.needsUpdate=!0,Di(E,W,K),E.side=Ei,E.needsUpdate=!0,Di(E,W,K),E.side=Dt):Di(E,W,K)}this.compile=function(E,W,K=null){K===null&&(K=E),m=Me.get(K),m.init(W),b.push(m),K.traverseVisible(function(w){w.isLight&&w.layers.test(W.layers)&&(m.pushLight(w),w.castShadow&&m.pushShadow(w))}),E!==K&&E.traverseVisible(function(w){w.isLight&&w.layers.test(W.layers)&&(m.pushLight(w),w.castShadow&&m.pushShadow(w))}),m.setupLights();let Q=new Set;return E.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;let D=w.material;if(D)if(Array.isArray(D))for(let $=0;$<D.length;$++){let O=D[$];rt(O,K,w),Q.add(O)}else rt(D,K,w),Q.add(D)}),b.pop(),m=null,Q},this.compileAsync=function(E,W,K=null){let Q=this.compile(E,W,K);return new Promise(w=>{function D(){if(Q.forEach(function($){Ae.get($).currentProgram.isReady()&&Q.delete($)}),Q.size===0){w(E);return}setTimeout(D,10)}de.get("KHR_parallel_shader_compile")!==null?D():setTimeout(D,10)})};let Ot=null;function xn(E){Ot&&Ot(E)}function qn(){rn.stop()}function cs(){rn.start()}let rn=new lp;rn.setAnimationLoop(xn),typeof self<"u"&&rn.setContext(self),this.setAnimationLoop=function(E){Ot=E,j.setAnimationLoop(E),E===null?rn.stop():rn.start()},j.addEventListener("sessionstart",qn),j.addEventListener("sessionend",cs),this.render=function(E,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(W),W=j.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,W,A),m=Me.get(E,b.length),m.init(W),b.push(m),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(Te),he=this.localClippingEnabled,ne=te.init(this.clippingPlanes,he),y=Le.get(E,p.length),y.init(),p.push(y),j.enabled===!0&&j.isPresenting===!0){let D=v.xr.getDepthSensingMesh();D!==null&&Fn(D,W,-1/0,v.sortObjects)}Fn(E,W,0,v.sortObjects),y.finish(),v.sortObjects===!0&&y.sort(V,xe),He=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,He&&Ne.addToRenderList(y,E),this.info.render.frame++,ne===!0&&te.beginShadows();let K=m.state.shadowsArray;ce.render(K,E,W),ne===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=y.opaque,w=y.transmissive;if(m.setupLights(),W.isArrayCamera){let D=W.cameras;if(w.length>0)for(let $=0,O=D.length;$<O;$++){let B=D[$];pr(Q,w,E,B)}He&&Ne.render(E);for(let $=0,O=D.length;$<O;$++){let B=D[$];hs(y,E,B,B.viewport)}}else w.length>0&&pr(Q,w,E,W),He&&Ne.render(E),hs(y,E,W);A!==null&&(P.updateMultisampleRenderTarget(A),P.updateRenderTargetMipmap(A)),E.isScene===!0&&E.onAfterRender(v,E,W),st.resetDefaultState(),L=-1,ee=null,b.pop(),b.length>0?(m=b[b.length-1],ne===!0&&te.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function Fn(E,W,K,Q){if(E.visible===!1)return;if(E.layers.test(W.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(W);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||Ue.intersectsSprite(E)){Q&&Ve.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Te);let $=ae.update(E),O=E.material;O.visible&&y.push(E,$,O,K,Ve.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||Ue.intersectsObject(E))){let $=ae.update(E),O=E.material;if(Q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ve.copy(E.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),Ve.copy($.boundingSphere.center)),Ve.applyMatrix4(E.matrixWorld).applyMatrix4(Te)),Array.isArray(O)){let B=$.groups;for(let U=0,ie=B.length;U<ie;U++){let Y=B[U],_e=O[Y.materialIndex];_e&&_e.visible&&y.push(E,$,_e,K,Ve.z,Y)}}else O.visible&&y.push(E,$,O,K,Ve.z,null)}}let D=E.children;for(let $=0,O=D.length;$<O;$++)Fn(D[$],W,K,Q)}function hs(E,W,K,Q){let w=E.opaque,D=E.transmissive,$=E.transparent;m.setupLightsView(K),ne===!0&&te.setGlobalState(v.clippingPlanes,K),Q&&we.viewport(x.copy(Q)),w.length>0&&Li(w,W,K),D.length>0&&Li(D,W,K),$.length>0&&Li($,W,K),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function pr(E,W,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new oi(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?aa:ai,minFilter:rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:lt.workingColorSpace}));let D=m.state.transmissionRenderTarget[Q.id],$=Q.viewport||x;D.setSize($.z,$.w);let O=v.getRenderTarget();v.setRenderTarget(D),v.getClearColor(z),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear(),He&&Ne.render(K);let B=v.toneMapping;v.toneMapping=Ti;let U=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ne===!0&&te.setGlobalState(v.clippingPlanes,Q),Li(E,K,Q),P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D),de.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Y=0,_e=W.length;Y<_e;Y++){let Ge=W[Y],je=Ge.object,Gt=Ge.geometry,et=Ge.material,Fe=Ge.group;if(et.side===Dt&&je.layers.test(Q.layers)){let mt=et.side;et.side=Jt,et.needsUpdate=!0,us(je,K,Q,Gt,et,Fe),et.side=mt,et.needsUpdate=!0,ie=!0}}ie===!0&&(P.updateMultisampleRenderTarget(D),P.updateRenderTargetMipmap(D))}v.setRenderTarget(O),v.setClearColor(z,R),U!==void 0&&(Q.viewport=U),v.toneMapping=B}function Li(E,W,K){let Q=W.isScene===!0?W.overrideMaterial:null;for(let w=0,D=E.length;w<D;w++){let $=E[w],O=$.object,B=$.geometry,U=Q===null?$.material:Q,ie=$.group;O.layers.test(K.layers)&&us(O,W,K,B,U,ie)}}function us(E,W,K,Q,w,D){E.onBeforeRender(v,W,K,Q,w,D),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),w.onBeforeRender(v,W,K,Q,E,D),w.transparent===!0&&w.side===Dt&&w.forceSinglePass===!1?(w.side=Jt,w.needsUpdate=!0,v.renderBufferDirect(K,W,Q,w,E,D),w.side=Ei,w.needsUpdate=!0,v.renderBufferDirect(K,W,Q,w,E,D),w.side=Dt):v.renderBufferDirect(K,W,Q,w,E,D),E.onAfterRender(v,W,K,Q,w,D)}function Di(E,W,K){W.isScene!==!0&&(W=Be);let Q=Ae.get(E),w=m.state.lights,D=m.state.shadowsArray,$=w.state.version,O=Oe.getParameters(E,w.state,D,W,K),B=Oe.getProgramCacheKey(O),U=Q.programs;Q.environment=E.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(E.isMeshStandardMaterial?X:M).get(E.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&E.envMap===null?W.environmentRotation:E.envMapRotation,U===void 0&&(E.addEventListener("dispose",nt),U=new Map,Q.programs=U);let ie=U.get(B);if(ie!==void 0){if(Q.currentProgram===ie&&Q.lightsStateVersion===$)return fs(E,O),ie}else O.uniforms=Oe.getUniforms(E),E.onBeforeCompile(O,v),ie=Oe.acquireProgram(O,B),U.set(B,ie),Q.uniforms=O.uniforms;let Y=Q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Y.clippingPlanes=te.uniform),fs(E,O),Q.needsLights=Ui(E),Q.lightsStateVersion=$,Q.needsLights&&(Y.ambientLightColor.value=w.state.ambient,Y.lightProbe.value=w.state.probe,Y.directionalLights.value=w.state.directional,Y.directionalLightShadows.value=w.state.directionalShadow,Y.spotLights.value=w.state.spot,Y.spotLightShadows.value=w.state.spotShadow,Y.rectAreaLights.value=w.state.rectArea,Y.ltc_1.value=w.state.rectAreaLTC1,Y.ltc_2.value=w.state.rectAreaLTC2,Y.pointLights.value=w.state.point,Y.pointLightShadows.value=w.state.pointShadow,Y.hemisphereLights.value=w.state.hemi,Y.directionalShadowMap.value=w.state.directionalShadowMap,Y.directionalShadowMatrix.value=w.state.directionalShadowMatrix,Y.spotShadowMap.value=w.state.spotShadowMap,Y.spotLightMatrix.value=w.state.spotLightMatrix,Y.spotLightMap.value=w.state.spotLightMap,Y.pointShadowMap.value=w.state.pointShadowMap,Y.pointShadowMatrix.value=w.state.pointShadowMatrix),Q.currentProgram=ie,Q.uniformsList=null,ie}function ds(E){if(E.uniformsList===null){let W=E.currentProgram.getUniforms();E.uniformsList=Jr.seqWithValue(W.seq,E.uniforms)}return E.uniformsList}function fs(E,W){let K=Ae.get(E);K.outputColorSpace=W.outputColorSpace,K.batching=W.batching,K.batchingColor=W.batchingColor,K.instancing=W.instancing,K.instancingColor=W.instancingColor,K.instancingMorph=W.instancingMorph,K.skinning=W.skinning,K.morphTargets=W.morphTargets,K.morphNormals=W.morphNormals,K.morphColors=W.morphColors,K.morphTargetsCount=W.morphTargetsCount,K.numClippingPlanes=W.numClippingPlanes,K.numIntersection=W.numClipIntersection,K.vertexAlphas=W.vertexAlphas,K.vertexTangents=W.vertexTangents,K.toneMapping=W.toneMapping}function ua(E,W,K,Q,w){W.isScene!==!0&&(W=Be),P.resetTextureUnits();let D=W.fog,$=Q.isMeshStandardMaterial?W.environment:null,O=A===null?v.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ii,B=(Q.isMeshStandardMaterial?X:M).get(Q.envMap||$),U=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ie=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Y=!!K.morphAttributes.position,_e=!!K.morphAttributes.normal,Ge=!!K.morphAttributes.color,je=Ti;Q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(je=v.toneMapping);let Gt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,et=Gt!==void 0?Gt.length:0,Fe=Ae.get(Q),mt=m.state.lights;if(ne===!0&&(he===!0||E!==ee)){let Kt=E===ee&&Q.id===L;te.setState(Q,E,Kt)}let tt=!1;Q.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==mt.state.version||Fe.outputColorSpace!==O||w.isBatchedMesh&&Fe.batching===!1||!w.isBatchedMesh&&Fe.batching===!0||w.isBatchedMesh&&Fe.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&Fe.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&Fe.instancing===!1||!w.isInstancedMesh&&Fe.instancing===!0||w.isSkinnedMesh&&Fe.skinning===!1||!w.isSkinnedMesh&&Fe.skinning===!0||w.isInstancedMesh&&Fe.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Fe.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&Fe.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&Fe.instancingMorph===!1&&w.morphTexture!==null||Fe.envMap!==B||Q.fog===!0&&Fe.fog!==D||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==te.numPlanes||Fe.numIntersection!==te.numIntersection)||Fe.vertexAlphas!==U||Fe.vertexTangents!==ie||Fe.morphTargets!==Y||Fe.morphNormals!==_e||Fe.morphColors!==Ge||Fe.toneMapping!==je||Fe.morphTargetsCount!==et)&&(tt=!0):(tt=!0,Fe.__version=Q.version);let sn=Fe.currentProgram;tt===!0&&(sn=Di(Q,W,w));let Cn=!1,Wt=!1,ps=!1,vt=sn.getUniforms(),Bn=Fe.uniforms;if(we.useProgram(sn.program)&&(Cn=!0,Wt=!0,ps=!0),Q.id!==L&&(L=Q.id,Wt=!0),Cn||ee!==E){ge.reverseDepthBuffer?(ye.copy(E.projectionMatrix),Fg(ye),Bg(ye),vt.setValue(I,"projectionMatrix",ye)):vt.setValue(I,"projectionMatrix",E.projectionMatrix),vt.setValue(I,"viewMatrix",E.matrixWorldInverse);let Kt=vt.map.cameraPosition;Kt!==void 0&&Kt.setValue(I,We.setFromMatrixPosition(E.matrixWorld)),ge.logarithmicDepthBuffer&&vt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&vt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,Wt=!0,ps=!0)}if(w.isSkinnedMesh){vt.setOptional(I,w,"bindMatrix"),vt.setOptional(I,w,"bindMatrixInverse");let Kt=w.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),vt.setValue(I,"boneTexture",Kt.boneTexture,P))}w.isBatchedMesh&&(vt.setOptional(I,w,"batchingTexture"),vt.setValue(I,"batchingTexture",w._matricesTexture,P),vt.setOptional(I,w,"batchingIdTexture"),vt.setValue(I,"batchingIdTexture",w._indirectTexture,P),vt.setOptional(I,w,"batchingColorTexture"),w._colorsTexture!==null&&vt.setValue(I,"batchingColorTexture",w._colorsTexture,P));let Ni=K.morphAttributes;if((Ni.position!==void 0||Ni.normal!==void 0||Ni.color!==void 0)&&be.update(w,K,sn),(Wt||Fe.receiveShadow!==w.receiveShadow)&&(Fe.receiveShadow=w.receiveShadow,vt.setValue(I,"receiveShadow",w.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Bn.envMap.value=B,Bn.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(Bn.envMapIntensity.value=W.environmentIntensity),Wt&&(vt.setValue(I,"toneMappingExposure",v.toneMappingExposure),Fe.needsLights&&da(Bn,ps),D&&Q.fog===!0&&Ce.refreshFogUniforms(Bn,D),Ce.refreshMaterialUniforms(Bn,Q,Z,N,m.state.transmissionRenderTarget[E.id]),Jr.upload(I,ds(Fe),Bn,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Jr.upload(I,ds(Fe),Bn,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&vt.setValue(I,"center",w.center),vt.setValue(I,"modelViewMatrix",w.modelViewMatrix),vt.setValue(I,"normalMatrix",w.normalMatrix),vt.setValue(I,"modelMatrix",w.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let Kt=Q.uniformsGroups;for(let ki=0,ou=Kt.length;ki<ou;ki++){let mr=Kt[ki];F.update(mr,sn),F.bind(mr,sn)}}return sn}function da(E,W){E.ambientLightColor.needsUpdate=W,E.lightProbe.needsUpdate=W,E.directionalLights.needsUpdate=W,E.directionalLightShadows.needsUpdate=W,E.pointLights.needsUpdate=W,E.pointLightShadows.needsUpdate=W,E.spotLights.needsUpdate=W,E.spotLightShadows.needsUpdate=W,E.rectAreaLights.needsUpdate=W,E.hemisphereLights.needsUpdate=W}function Ui(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(E,W,K){Ae.get(E.texture).__webglTexture=W,Ae.get(E.depthTexture).__webglTexture=K;let Q=Ae.get(E);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,W){let K=Ae.get(E);K.__webglFramebuffer=W,K.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(E,W=0,K=0){A=E,C=W,T=K;let Q=!0,w=null,D=!1,$=!1;if(E){let B=Ae.get(E);if(B.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(B.__webglFramebuffer===void 0)P.setupRenderTarget(E);else if(B.__hasExternalTextures)P.rebindTextures(E,Ae.get(E.texture).__webglTexture,Ae.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Y=E.depthTexture;if(B.__boundDepthTexture!==Y){if(Y!==null&&Ae.has(Y)&&(E.width!==Y.image.width||E.height!==Y.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(E)}}let U=E.texture;(U.isData3DTexture||U.isDataArrayTexture||U.isCompressedArrayTexture)&&($=!0);let ie=Ae.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?w=ie[W][K]:w=ie[W],D=!0):E.samples>0&&P.useMultisampledRTT(E)===!1?w=Ae.get(E).__webglMultisampledFramebuffer:Array.isArray(ie)?w=ie[K]:w=ie,x.copy(E.viewport),S.copy(E.scissor),q=E.scissorTest}else x.copy(pe).multiplyScalar(Z).floor(),S.copy(G).multiplyScalar(Z).floor(),q=re;if(we.bindFramebuffer(I.FRAMEBUFFER,w)&&Q&&we.drawBuffers(E,w),we.viewport(x),we.scissor(S),we.setScissorTest(q),D){let B=Ae.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,B.__webglTexture,K)}else if($){let B=Ae.get(E.texture),U=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.__webglTexture,K||0,U)}L=-1},this.readRenderTargetPixels=function(E,W,K,Q,w,D,$){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$!==void 0&&(O=O[$]),O){we.bindFramebuffer(I.FRAMEBUFFER,O);try{let B=E.texture,U=B.format,ie=B.type;if(!ge.textureFormatReadable(U)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=E.width-Q&&K>=0&&K<=E.height-w&&I.readPixels(W,K,Q,w,Xe.convert(U),Xe.convert(ie),D)}finally{let B=A!==null?Ae.get(A).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,B)}}},this.readRenderTargetPixelsAsync=async function(E,W,K,Q,w,D,$){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=Ae.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&$!==void 0&&(O=O[$]),O){let B=E.texture,U=B.format,ie=B.type;if(!ge.textureFormatReadable(U))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=E.width-Q&&K>=0&&K<=E.height-w){we.bindFramebuffer(I.FRAMEBUFFER,O);let Y=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Y),I.bufferData(I.PIXEL_PACK_BUFFER,D.byteLength,I.STREAM_READ),I.readPixels(W,K,Q,w,Xe.convert(U),Xe.convert(ie),0);let _e=A!==null?Ae.get(A).__webglFramebuffer:null;we.bindFramebuffer(I.FRAMEBUFFER,_e);let Ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Og(I,Ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Y),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,D),I.deleteBuffer(Y),I.deleteSync(Ge),D}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,W=null,K=0){E.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,E=arguments[1]);let Q=Math.pow(2,-K),w=Math.floor(E.image.width*Q),D=Math.floor(E.image.height*Q),$=W!==null?W.x:0,O=W!==null?W.y:0;P.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,K,0,0,$,O,w,D),we.unbindTexture()},this.copyTextureToTexture=function(E,W,K=null,Q=null,w=0){E.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,E=arguments[1],W=arguments[2],w=arguments[3]||0,K=null);let D,$,O,B,U,ie;K!==null?(D=K.max.x-K.min.x,$=K.max.y-K.min.y,O=K.min.x,B=K.min.y):(D=E.image.width,$=E.image.height,O=0,B=0),Q!==null?(U=Q.x,ie=Q.y):(U=0,ie=0);let Y=Xe.convert(W.format),_e=Xe.convert(W.type);P.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);let Ge=I.getParameter(I.UNPACK_ROW_LENGTH),je=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Gt=I.getParameter(I.UNPACK_SKIP_PIXELS),et=I.getParameter(I.UNPACK_SKIP_ROWS),Fe=I.getParameter(I.UNPACK_SKIP_IMAGES),mt=E.isCompressedTexture?E.mipmaps[w]:E.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,mt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,mt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,O),I.pixelStorei(I.UNPACK_SKIP_ROWS,B),E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,w,U,ie,D,$,Y,_e,mt.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,w,U,ie,mt.width,mt.height,Y,mt.data):I.texSubImage2D(I.TEXTURE_2D,w,U,ie,D,$,Y,_e,mt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ge),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Gt),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fe),w===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(E,W,K=null,Q=null,w=0){E.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,Q=arguments[1]||null,E=arguments[2],W=arguments[3],w=arguments[4]||0);let D,$,O,B,U,ie,Y,_e,Ge,je=E.isCompressedTexture?E.mipmaps[w]:E.image;K!==null?(D=K.max.x-K.min.x,$=K.max.y-K.min.y,O=K.max.z-K.min.z,B=K.min.x,U=K.min.y,ie=K.min.z):(D=je.width,$=je.height,O=je.depth,B=0,U=0,ie=0),Q!==null?(Y=Q.x,_e=Q.y,Ge=Q.z):(Y=0,_e=0,Ge=0);let Gt=Xe.convert(W.format),et=Xe.convert(W.type),Fe;if(W.isData3DTexture)P.setTexture3D(W,0),Fe=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)P.setTexture2DArray(W,0),Fe=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);let mt=I.getParameter(I.UNPACK_ROW_LENGTH),tt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),sn=I.getParameter(I.UNPACK_SKIP_PIXELS),Cn=I.getParameter(I.UNPACK_SKIP_ROWS),Wt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,je.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,je.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,B),I.pixelStorei(I.UNPACK_SKIP_ROWS,U),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ie),E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Fe,w,Y,_e,Ge,D,$,O,Gt,et,je.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,w,Y,_e,Ge,D,$,O,Gt,je.data):I.texSubImage3D(Fe,w,Y,_e,Ge,D,$,O,Gt,et,je),I.pixelStorei(I.UNPACK_ROW_LENGTH,mt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,tt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,sn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Cn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Wt),w===0&&W.generateMipmaps&&I.generateMipmap(Fe),we.unbindTexture()},this.initRenderTarget=function(E){Ae.get(E).__webglFramebuffer===void 0&&P.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?P.setTextureCube(E,0):E.isData3DTexture?P.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?P.setTexture2DArray(E,0):P.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){C=0,T=0,A=null,we.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ri}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Xh?"display-p3":"srgb",t.unpackColorSpace=lt.workingColorSpace===Vo?"display-p3":"srgb"}};var To=class extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Gn,this.environmentIntensity=1,this.environmentRotation=new Gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},_h=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=th,this.updateRanges=[],this.version=0,this.uuid=si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},en=new H,Eo=class n{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=ut(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ut(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Vn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Vn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Vn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Vn(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ut(t,this.array),i=ut(i,this.array),r=ut(r,this.array),s=ut(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ri=class extends li{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hr,Hs=new H,Vr=new H,Gr=new H,Wr=new ve,Vs=new ve,fp=new wt,qa=new H,Gs=new H,Ya=new H,Ff=new ve,uc=new ve,Bf=new ve,or=class extends Rt{constructor(e=new Ri){if(super(),this.isSprite=!0,this.type="Sprite",Hr===void 0){Hr=new nn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new _h(t,5);Hr.setIndex([0,1,2,0,2,3]),Hr.setAttribute("position",new Eo(i,3,0,!1)),Hr.setAttribute("uv",new Eo(i,2,3,!1))}this.geometry=Hr,this.material=e,this.center=new ve(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vr.setFromMatrixScale(this.matrixWorld),fp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vr.multiplyScalar(-Gr.z);let i=this.material.rotation,r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));let a=this.center;Za(qa.set(-.5,-.5,0),Gr,a,Vr,r,s),Za(Gs.set(.5,-.5,0),Gr,a,Vr,r,s),Za(Ya.set(.5,.5,0),Gr,a,Vr,r,s),Ff.set(0,0),uc.set(1,0),Bf.set(1,1);let o=e.ray.intersectTriangle(qa,Gs,Ya,!1,Hs);if(o===null&&(Za(Gs.set(-.5,.5,0),Gr,a,Vr,r,s),uc.set(0,1),o=e.ray.intersectTriangle(qa,Ya,Gs,!1,Hs),o===null))return;let l=e.ray.origin.distanceTo(Hs);l<e.near||l>e.far||t.push({distance:l,point:Hs.clone(),uv:Si.getInterpolation(Hs,qa,Gs,Ya,Ff,uc,Bf,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Za(n,e,t,i,r,s){Wr.subVectors(n,t).addScalar(.5).multiply(i),r!==void 0?(Vs.x=s*Wr.x-r*Wr.y,Vs.y=r*Wr.x+s*Wr.y):Vs.copy(Wr),n.copy(e),n.x+=Vs.x,n.y+=Vs.y,n.applyMatrix4(fp)}var Ao=class extends cn{constructor(e=null,t=1,i=1,r,s,a,o,l,c=Zt,h=Zt,d,u){super(null,a,o,l,c,h,r,s,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Wn=class extends cn{constructor(e,t,i,r,s,a,o,l,c){super(e,t,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},hn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),r=0,s=i.length,a;t?a=t:a=e*i[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=i[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===a)return r/(s-1);let h=i[r],u=i[r+1]-h,f=(a-h)/u;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new ve:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new H,r=[],s=[],a=[],o=new H,l=new wt;for(let f=0;f<=e;f++){let g=f/e;r[f]=this.getTangentAt(g,new H)}s[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(r[0].x),d=Math.abs(r[0].y),u=Math.abs(r[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos($t(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos($t(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],f*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},js=class extends hn{constructor(e=0,t=0,i=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ve){let i=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);let o=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vh=class extends js{constructor(e,t,i,r,s,a){super(e,t,i,i,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Yh(){let n=0,e=0,t=0,i=0;function r(s,a,o,l){n=s,e=o,t=-3*s+3*a-2*o-l,i=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,h,d){let u=(a-s)/c-(o-s)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,r(a,o,u,f)},calc:function(s){let a=s*s,o=a*s;return n+e*s+t*a+i*o}}}var Ja=new H,dc=new Yh,fc=new Yh,pc=new Yh,ea=class extends hn{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new H){let i=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,h;this.closed||o>0?c=r[(o-1)%s]:(Ja.subVectors(r[0],r[1]).add(r[0]),c=Ja);let d=r[o%s],u=r[(o+1)%s];if(this.closed||o+2<s?h=r[(o+2)%s]:(Ja.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=Ja),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),y=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),dc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,y,m),fc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,y,m),pc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(dc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),fc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),pc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(dc.calc(l),fc.calc(l),pc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new H().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function zf(n,e,t,i,r){let s=(i-e)*.5,a=(r-t)*.5,o=n*n,l=n*o;return(2*t-2*i+s+a)*l+(-3*t+3*i-2*s-a)*o+s*n+t}function U1(n,e){let t=1-n;return t*t*e}function N1(n,e){return 2*(1-n)*n*e}function k1(n,e){return n*n*e}function Xs(n,e,t,i){return U1(n,e)+N1(n,t)+k1(n,i)}function O1(n,e){let t=1-n;return t*t*t*e}function F1(n,e){let t=1-n;return 3*t*t*n*e}function B1(n,e){return 3*(1-n)*n*n*e}function z1(n,e){return n*n*n*e}function qs(n,e,t,i,r){return O1(n,e)+F1(n,t)+B1(n,i)+z1(n,r)}var Co=class extends hn{constructor(e=new ve,t=new ve,i=new ve,r=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ve){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(qs(e,r.x,s.x,a.x,o.x),qs(e,r.y,s.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mh=class extends hn{constructor(e=new H,t=new H,i=new H,r=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new H){let i=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return i.set(qs(e,r.x,s.x,a.x,o.x),qs(e,r.y,s.y,a.y,o.y),qs(e,r.z,s.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ro=class extends hn{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},bh=class extends hn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Po=class extends hn{constructor(e=new ve,t=new ve,i=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ve){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Xs(e,r.x,s.x,a.x),Xs(e,r.y,s.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lr=class extends hn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,r=this.v0,s=this.v1,a=this.v2;return i.set(Xs(e,r.x,s.x,a.x),Xs(e,r.y,s.y,a.y),Xs(e,r.z,s.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Io=class extends hn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let i=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],h=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return i.set(zf(o,l.x,c.x,h.x,d.x),zf(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let r=e.points[t];this.points.push(new ve().fromArray(r))}return this}},Lo=Object.freeze({__proto__:null,ArcCurve:vh,CatmullRomCurve3:ea,CubicBezierCurve:Co,CubicBezierCurve3:Mh,EllipseCurve:js,LineCurve:Ro,LineCurve3:bh,QuadraticBezierCurve:Po,QuadraticBezierCurve3:lr,SplineCurve:Io}),Sh=class extends hn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Lo[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=i){let a=r[s]-i,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let r=0,s=this.curves;r<s.length;r++){let a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let r=e.curves[t];this.curves.push(new Lo[r.type]().fromJSON(r))}return this}},ta=class extends Sh{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Ro(this.currentPoint.clone(),new ve(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){let s=new Po(this.currentPoint.clone(),new ve(e,t),new ve(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,a){let o=new Co(this.currentPoint.clone(),new ve(e,t),new ve(i,r),new ve(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new Io(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,r,s,a),this}absarc(e,t,i,r,s,a){return this.absellipse(e,t,i,i,r,s,a),this}ellipse(e,t,i,r,s,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,r,s,a,o,l),this}absellipse(e,t,i,r,s,a,o,l){let c=new js(e,t,i,r,s,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},na=class n extends nn{constructor(e=[new ve(0,-.5),new ve(.5,0),new ve(0,.5)],t=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:r},t=Math.floor(t),r=$t(r,0,Math.PI*2);let s=[],a=[],o=[],l=[],c=[],h=1/t,d=new H,u=new ve,f=new H,g=new H,y=new H,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let b=0;b<=t;b++){let v=i+b*h*r,_=Math.sin(v),C=Math.cos(v);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*_,d.y=e[T].y,d.z=e[T].x*C,a.push(d.x,d.y,d.z),u.x=b/t,u.y=T/(e.length-1),o.push(u.x,u.y);let A=l[3*T+0]*_,L=l[3*T+1],ee=l[3*T+0]*C;c.push(A,L,ee)}}for(let b=0;b<t;b++)for(let v=0;v<e.length-1;v++){let _=v+b*e.length,C=_,T=_+e.length,A=_+e.length+1,L=_+1;s.push(C,T,L),s.push(A,L,T)}this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("uv",new ht(o,2)),this.setAttribute("normal",new ht(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},hi=class n extends na{constructor(e=1,t=1,i=4,r=8){let s=new ta;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:r}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},rs=class n extends nn{constructor(e=1,t=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:r},t=Math.max(3,t);let s=[],a=[],o=[],l=[],c=new H,h=new ve;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(o,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},dt=class n extends nn{constructor(e=1,t=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};let c=this;r=Math.floor(r),s=Math.floor(s);let h=[],d=[],u=[],f=[],g=0,y=[],m=i/2,p=0;b(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function b(){let _=new H,C=new H,T=0,A=(t-e)/i;for(let L=0;L<=s;L++){let ee=[],x=L/s,S=x*(t-e)+e;for(let q=0;q<=r;q++){let z=q/r,R=z*l+o,k=Math.sin(R),N=Math.cos(R);C.x=S*k,C.y=-x*i+m,C.z=S*N,d.push(C.x,C.y,C.z),_.set(k,A,N).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-x),ee.push(g++)}y.push(ee)}for(let L=0;L<r;L++)for(let ee=0;ee<s;ee++){let x=y[ee][L],S=y[ee+1][L],q=y[ee+1][L+1],z=y[ee][L+1];e>0&&(h.push(x,S,z),T+=3),t>0&&(h.push(S,q,z),T+=3)}c.addGroup(p,T,0),p+=T}function v(_){let C=g,T=new ve,A=new H,L=0,ee=_===!0?e:t,x=_===!0?1:-1;for(let q=1;q<=r;q++)d.push(0,m*x,0),u.push(0,x,0),f.push(.5,.5),g++;let S=g;for(let q=0;q<=r;q++){let R=q/r*l+o,k=Math.cos(R),N=Math.sin(R);A.x=ee*N,A.y=m*x,A.z=ee*k,d.push(A.x,A.y,A.z),u.push(0,x,0),T.x=k*.5+.5,T.y=N*.5*x+.5,f.push(T.x,T.y),g++}for(let q=0;q<r;q++){let z=C+q,R=S+q;_===!0?h.push(R,R+1,z):h.push(R+1,R,z),L+=3}c.addGroup(p,L,_===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ht=class n extends dt{constructor(e=1,t=1,i=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,i,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var $n=class extends ta{constructor(e){super(e),this.uuid=si(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let r=e.holes[t];this.holes.push(new ta().fromJSON(r))}return this}},H1={triangulate:function(n,e,t=2){let i=e&&e.length,r=i?e[0]*t:n.length,s=pp(n,0,r,t,!0),a=[];if(!s||s.next===s.prev)return a;let o,l,c,h,d,u,f;if(i&&(s=X1(n,e,s,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<r;g+=t)d=n[g],u=n[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return ia(s,a,t,o,l,f,0),a}};function pp(n,e,t,i,r){let s,a;if(r===iM(n,e,t,i)>0)for(s=e;s<t;s+=i)a=Hf(s,n[s],n[s+1],a);else for(s=t-i;s>=e;s-=i)a=Hf(s,n[s],n[s+1],a);return a&&Wo(a,a.next)&&(sa(a),a=a.next),a}function cr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(Wo(t,t.next)||St(t.prev,t,t.next)===0)){if(sa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function ia(n,e,t,i,r,s,a){if(!n)return;!a&&s&&K1(n,i,r,s);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,s?G1(n,i,r,s):V1(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),sa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=W1(cr(n),e,t),ia(n,e,t,i,r,s,2)):a===2&&$1(n,e,t,i,r,s):ia(cr(n),e,t,i,r,s,1);break}}}function V1(n){let e=n.prev,t=n,i=n.next;if(St(e,t,i)>=0)return!1;let r=e.x,s=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=r<s?r<a?r:a:s<a?s:a,d=o<l?o<c?o:c:l<c?l:c,u=r>s?r>a?r:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&Xr(r,o,s,l,a,c,g.x,g.y)&&St(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function G1(n,e,t,i){let r=n.prev,s=n,a=n.next;if(St(r,s,a)>=0)return!1;let o=r.x,l=s.x,c=a.x,h=r.y,d=s.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,y=o>l?o>c?o:c:l>c?l:c,m=h>d?h>u?h:u:d>u?d:u,p=wh(f,g,e,t,i),b=wh(y,m,e,t,i),v=n.prevZ,_=n.nextZ;for(;v&&v.z>=p&&_&&_.z<=b;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Xr(o,h,l,d,c,u,v.x,v.y)&&St(v.prev,v,v.next)>=0||(v=v.prevZ,_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Xr(o,h,l,d,c,u,_.x,_.y)&&St(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;v&&v.z>=p;){if(v.x>=f&&v.x<=y&&v.y>=g&&v.y<=m&&v!==r&&v!==a&&Xr(o,h,l,d,c,u,v.x,v.y)&&St(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==a&&Xr(o,h,l,d,c,u,_.x,_.y)&&St(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function W1(n,e,t){let i=n;do{let r=i.prev,s=i.next.next;!Wo(r,s)&&mp(r,i,i.next,s)&&ra(r,s)&&ra(s,r)&&(e.push(r.i/t|0),e.push(i.i/t|0),e.push(s.i/t|0),sa(i),sa(i.next),i=n=s),i=i.next}while(i!==n);return cr(i)}function $1(n,e,t,i,r,s){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&eM(a,o)){let l=gp(a,o);a=cr(a,a.next),l=cr(l,l.next),ia(a,e,t,i,r,s,0),ia(l,e,t,i,r,s,0);return}o=o.next}a=a.next}while(a!==n)}function X1(n,e,t,i){let r=[],s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*i,l=s<a-1?e[s+1]*i:n.length,c=pp(n,o,l,i,!1),c===c.next&&(c.steiner=!0),r.push(j1(c));for(r.sort(q1),s=0;s<r.length;s++)t=Y1(r[s],t);return t}function q1(n,e){return n.x-e.x}function Y1(n,e){let t=Z1(n,e);if(!t)return e;let i=gp(t,n);return cr(i,i.next),cr(t,t.next)}function Z1(n,e){let t=e,i=-1/0,r,s=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=s&&u>i&&(i=u,r=t.x<t.next.x?t:t.next,u===s))return r}t=t.next}while(t!==e);if(!r)return null;let o=r,l=r.x,c=r.y,h=1/0,d;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Xr(a<c?s:i,a,l,c,a<c?i:s,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(s-t.x),ra(t,n)&&(d<h||d===h&&(t.x>r.x||t.x===r.x&&J1(r,t)))&&(r=t,h=d)),t=t.next;while(t!==o);return r}function J1(n,e){return St(n.prev,n,e.prev)<0&&St(e.next,n,n.next)<0}function K1(n,e,t,i){let r=n;do r.z===0&&(r.z=wh(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Q1(r)}function Q1(n){let e,t,i,r,s,a,o,l,c=1;do{for(t=n,n=null,s=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(r=t,t=t.nextZ,o--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;t=i}s.nextZ=null,c*=2}while(a>1);return n}function wh(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function j1(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function Xr(n,e,t,i,r,s,a,o){return(r-a)*(e-o)>=(n-a)*(s-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(i-o)}function eM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!tM(n,e)&&(ra(n,e)&&ra(e,n)&&nM(n,e)&&(St(n.prev,n,e.prev)||St(n,e.prev,e))||Wo(n,e)&&St(n.prev,n,n.next)>0&&St(e.prev,e,e.next)>0)}function St(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function Wo(n,e){return n.x===e.x&&n.y===e.y}function mp(n,e,t,i){let r=Qa(St(n,e,t)),s=Qa(St(n,e,i)),a=Qa(St(t,i,n)),o=Qa(St(t,i,e));return!!(r!==s&&a!==o||r===0&&Ka(n,t,e)||s===0&&Ka(n,i,e)||a===0&&Ka(t,n,i)||o===0&&Ka(t,e,i))}function Ka(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Qa(n){return n>0?1:n<0?-1:0}function tM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&mp(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function ra(n,e){return St(n.prev,n,n.next)<0?St(n,e,n.next)>=0&&St(n,n.prev,e)>=0:St(n,e,n.prev)<0||St(n,n.next,e)<0}function nM(n,e){let t=n,i=!1,r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function gp(n,e){let t=new Th(n.i,n.x,n.y),i=new Th(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Hf(n,e,t,i){let r=new Th(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function sa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Th(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function iM(n,e,t,i){let r=0;for(let s=e,a=t-i;s<t;s+=i)r+=(n[a]-n[s])*(n[s+1]+n[a+1]),a=s;return r}var Ys=class n{static area(e){let t=e.length,i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],r=[],s=[];Vf(e),Gf(i,e);let a=e.length;t.forEach(Vf);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Gf(i,t[l]);let o=H1.triangulate(i,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}};function Vf(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Gf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Pi=class n extends nn{constructor(e=new $n([new ve(.5,.5),new ve(-.5,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ht(r,3)),this.setAttribute("uv",new ht(s,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:rM,v,_=!1,C,T,A,L;p&&(v=p.getSpacedPoints(h),_=!0,u=!1,C=p.computeFrenetFrames(h,!1),T=new H,A=new H,L=new H),u||(m=0,f=0,g=0,y=0);let ee=o.extractPoints(c),x=ee.shape,S=ee.holes;if(!Ys.isClockWise(x)){x=x.reverse();for(let se=0,I=S.length;se<I;se++){let le=S[se];Ys.isClockWise(le)&&(S[se]=le.reverse())}}let z=Ys.triangulateShape(x,S),R=x;for(let se=0,I=S.length;se<I;se++){let le=S[se];x=x.concat(le)}function k(se,I,le){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(I,le)}let N=x.length,Z=z.length;function V(se,I,le){let de,ge,we,ke=se.x-I.x,Ae=se.y-I.y,P=le.x-se.x,M=le.y-se.y,X=ke*ke+Ae*Ae,J=ke*M-Ae*P;if(Math.abs(J)>Number.EPSILON){let oe=Math.sqrt(X),ae=Math.sqrt(P*P+M*M),Oe=I.x-Ae/oe,Ce=I.y+ke/oe,Le=le.x-M/ae,Me=le.y+P/ae,te=((Le-Oe)*M-(Me-Ce)*P)/(ke*M-Ae*P);de=Oe+ke*te-se.x,ge=Ce+Ae*te-se.y;let ce=de*de+ge*ge;if(ce<=2)return new ve(de,ge);we=Math.sqrt(ce/2)}else{let oe=!1;ke>Number.EPSILON?P>Number.EPSILON&&(oe=!0):ke<-Number.EPSILON?P<-Number.EPSILON&&(oe=!0):Math.sign(Ae)===Math.sign(M)&&(oe=!0),oe?(de=-Ae,ge=ke,we=Math.sqrt(X)):(de=ke,ge=Ae,we=Math.sqrt(X/2))}return new ve(de/we,ge/we)}let xe=[];for(let se=0,I=R.length,le=I-1,de=se+1;se<I;se++,le++,de++)le===I&&(le=0),de===I&&(de=0),xe[se]=V(R[se],R[le],R[de]);let pe=[],G,re=xe.concat();for(let se=0,I=S.length;se<I;se++){let le=S[se];G=[];for(let de=0,ge=le.length,we=ge-1,ke=de+1;de<ge;de++,we++,ke++)we===ge&&(we=0),ke===ge&&(ke=0),G[de]=V(le[de],le[we],le[ke]);pe.push(G),re=re.concat(G)}for(let se=0;se<m;se++){let I=se/m,le=f*Math.cos(I*Math.PI/2),de=g*Math.sin(I*Math.PI/2)+y;for(let ge=0,we=R.length;ge<we;ge++){let ke=k(R[ge],xe[ge],de);Te(ke.x,ke.y,-le)}for(let ge=0,we=S.length;ge<we;ge++){let ke=S[ge];G=pe[ge];for(let Ae=0,P=ke.length;Ae<P;Ae++){let M=k(ke[Ae],G[Ae],de);Te(M.x,M.y,-le)}}}let Ue=g+y;for(let se=0;se<N;se++){let I=u?k(x[se],re[se],Ue):x[se];_?(A.copy(C.normals[0]).multiplyScalar(I.x),T.copy(C.binormals[0]).multiplyScalar(I.y),L.copy(v[0]).add(A).add(T),Te(L.x,L.y,L.z)):Te(I.x,I.y,0)}for(let se=1;se<=h;se++)for(let I=0;I<N;I++){let le=u?k(x[I],re[I],Ue):x[I];_?(A.copy(C.normals[se]).multiplyScalar(le.x),T.copy(C.binormals[se]).multiplyScalar(le.y),L.copy(v[se]).add(A).add(T),Te(L.x,L.y,L.z)):Te(le.x,le.y,d/h*se)}for(let se=m-1;se>=0;se--){let I=se/m,le=f*Math.cos(I*Math.PI/2),de=g*Math.sin(I*Math.PI/2)+y;for(let ge=0,we=R.length;ge<we;ge++){let ke=k(R[ge],xe[ge],de);Te(ke.x,ke.y,d+le)}for(let ge=0,we=S.length;ge<we;ge++){let ke=S[ge];G=pe[ge];for(let Ae=0,P=ke.length;Ae<P;Ae++){let M=k(ke[Ae],G[Ae],de);_?Te(M.x,M.y+v[h-1].y,v[h-1].x+le):Te(M.x,M.y,d+le)}}}ne(),he();function ne(){let se=r.length/3;if(u){let I=0,le=N*I;for(let de=0;de<Z;de++){let ge=z[de];We(ge[2]+le,ge[1]+le,ge[0]+le)}I=h+m*2,le=N*I;for(let de=0;de<Z;de++){let ge=z[de];We(ge[0]+le,ge[1]+le,ge[2]+le)}}else{for(let I=0;I<Z;I++){let le=z[I];We(le[2],le[1],le[0])}for(let I=0;I<Z;I++){let le=z[I];We(le[0]+N*h,le[1]+N*h,le[2]+N*h)}}i.addGroup(se,r.length/3-se,0)}function he(){let se=r.length/3,I=0;ye(R,I),I+=R.length;for(let le=0,de=S.length;le<de;le++){let ge=S[le];ye(ge,I),I+=ge.length}i.addGroup(se,r.length/3-se,1)}function ye(se,I){let le=se.length;for(;--le>=0;){let de=le,ge=le-1;ge<0&&(ge=se.length-1);for(let we=0,ke=h+m*2;we<ke;we++){let Ae=N*we,P=N*(we+1),M=I+de+Ae,X=I+ge+Ae,J=I+ge+P,oe=I+de+P;Ve(M,X,J,oe)}}}function Te(se,I,le){l.push(se),l.push(I),l.push(le)}function We(se,I,le){Be(se),Be(I),Be(le);let de=r.length/3,ge=b.generateTopUV(i,r,de-3,de-2,de-1);He(ge[0]),He(ge[1]),He(ge[2])}function Ve(se,I,le,de){Be(se),Be(I),Be(de),Be(I),Be(le),Be(de);let ge=r.length/3,we=b.generateSideWallUV(i,r,ge-6,ge-3,ge-2,ge-1);He(we[0]),He(we[1]),He(we[3]),He(we[1]),He(we[2]),He(we[3])}function Be(se){r.push(l[se*3+0]),r.push(l[se*3+1]),r.push(l[se*3+2])}function He(se){s.push(se.x),s.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return sM(t,i,e)}static fromJSON(e,t){let i=[];for(let s=0,a=e.shapes.length;s<a;s++){let o=t[e.shapes[s]];i.push(o)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Lo[r.type]().fromJSON(r)),new n(i,e.options)}},rM={generateTopUV:function(n,e,t,i,r){let s=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[r*3],h=e[r*3+1];return[new ve(s,a),new ve(o,l),new ve(c,h)]},generateSideWallUV:function(n,e,t,i,r,s){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[r*3],f=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],p=e[s*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ve(a,1-l),new ve(c,1-d),new ve(u,1-g),new ve(y,1-p)]:[new ve(o,1-l),new ve(h,1-d),new ve(f,1-g),new ve(m,1-p)]}};function sM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){let s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var it=class n extends nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new H,u=new H,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let b=[],v=p/i,_=0;p===0&&a===0?_=.5/t:p===i&&l===Math.PI&&(_=-.5/t);for(let C=0;C<=t;C++){let T=C/t;d.x=-e*Math.cos(r+T*s)*Math.sin(a+v*o),d.y=e*Math.cos(a+v*o),d.z=e*Math.sin(r+T*s)*Math.sin(a+v*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),y.push(u.x,u.y,u.z),m.push(T+_,1-v),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<t;b++){let v=h[p][b+1],_=h[p][b],C=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&f.push(v,_,T),(p!==i-1||l<Math.PI)&&f.push(_,C,T)}this.setIndex(f),this.setAttribute("position",new ht(g,3)),this.setAttribute("normal",new ht(y,3)),this.setAttribute("uv",new ht(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var ft=class n extends nn{constructor(e=1,t=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);let a=[],o=[],l=[],c=[],h=new H,d=new H,u=new H;for(let f=0;f<=i;f++)for(let g=0;g<=r;g++){let y=g/r*s,m=f/i*Math.PI*2;d.x=(e+t*Math.cos(m))*Math.cos(y),d.y=(e+t*Math.cos(m))*Math.sin(y),d.z=t*Math.sin(m),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/r),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=r;g++){let y=(r+1)*f+g-1,m=(r+1)*(f-1)+g-1,p=(r+1)*(f-1)+g,b=(r+1)*f+g;a.push(y,m,b),a.push(m,p,b)}this.setIndex(a),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var hr=class n extends nn{constructor(e=new lr(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:r,closed:s};let a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,l=new H,c=new ve,h=new H,d=[],u=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ht(d,3)),this.setAttribute("normal",new ht(u,3)),this.setAttribute("uv",new ht(f,2));function y(){for(let v=0;v<t;v++)m(v);m(s===!1?t:0),b(),p()}function m(v){h=e.getPointAt(v/t,h);let _=a.normals[v],C=a.binormals[v];for(let T=0;T<=r;T++){let A=T/r*Math.PI*2,L=Math.sin(A),ee=-Math.cos(A);l.x=ee*_.x+L*C.x,l.y=ee*_.y+L*C.y,l.z=ee*_.z+L*C.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let v=1;v<=t;v++)for(let _=1;_<=r;_++){let C=(r+1)*(v-1)+(_-1),T=(r+1)*v+(_-1),A=(r+1)*v+_,L=(r+1)*(v-1)+_;g.push(C,T,L),g.push(T,A,L)}}function b(){for(let v=0;v<=t;v++)for(let _=0;_<=r;_++)c.x=v/t,c.y=_/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new Lo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var un=class extends li{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Do=class extends li{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$h,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function ja(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function aM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ss=class{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,r=t[i],s=t[i-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(s=r,r=t[++i],e<r)break e}a=t.length;break t}if(!(e>=s)){let o=t[1];e<o&&(i=2,s=o);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=i[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Eh=class extends ss{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xd,endingEnd:Xd}}intervalChanged_(e,t,i){let r=this.parameterPositions,s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case qd:s=e,o=2*t-i;break;case Yd:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case qd:a=e,l=2*i-t;break;case Yd:a=1,l=i+r[1]-r[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=a*h}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(r-t),y=g*g,m=y*g,p=-u*m+2*u*y-u*g,b=(1+u)*m+(-1.5-2*u)*y+(-.5+u)*g+1,v=(-1-f)*m+(1.5+f)*y+.5*g,_=f*m-f*y;for(let C=0;C!==o;++C)s[C]=p*a[h+C]+b*a[c+C]+v*a[l+C]+_*a[d+C];return s}},Ah=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(r-t),d=1-h;for(let u=0;u!==o;++u)s[u]=a[c+u]*d+a[l+u]*h;return s}},Ch=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}},On=class{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ja(t,this.TimeBufferType),this.values=ja(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ja(e.times,Array),values:ja(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Eh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ao:t=this.InterpolantFactoryMethodDiscrete;break;case eh:t=this.InterpolantFactoryMethodLinear;break;case Nl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ao;case this.InterpolantFactoryMethodLinear:return eh;case this.InterpolantFactoryMethodSmooth:return Nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){let i=this.times,r=i.length,s=0,a=r-1;for(;s!==r&&i[s]<e;)++s;for(;a!==-1&&i[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=i.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&aM(r))for(let o=0,l=r.length;o!==l;++o){let c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Nl,s=e.length-1,a=1;for(let o=1;o<s;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(r)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let y=t[d+g];if(y!==t[u+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};On.prototype.TimeBufferType=Float32Array;On.prototype.ValueBufferType=Float32Array;On.prototype.DefaultInterpolation=eh;var ur=class extends On{constructor(e,t,i){super(e,t,i)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=ao;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Rh=class extends On{};Rh.prototype.ValueTypeName="color";var Ph=class extends On{};Ph.prototype.ValueTypeName="number";var Ih=class extends ss{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(r-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ci.slerpFlat(s,0,a,c-o,a,c,l);return s}},Uo=class extends On{InterpolantFactoryMethodLinear(e){return new Ih(this.times,this.values,this.getValueSize(),e)}};Uo.prototype.ValueTypeName="quaternion";Uo.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends On{constructor(e,t,i){super(e,t,i)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=ao;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var Lh=class extends On{};Lh.prototype.ValueTypeName="vector";var Dh=class{constructor(e,t,i){let r=this,s=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,s===!1&&r.onStart!==void 0&&r.onStart(h,a,o),s=!0},this.itemEnd=function(h){a++,r.onProgress!==void 0&&r.onProgress(h,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},oM=new Dh,Uh=class{constructor(e){this.manager=e!==void 0?e:oM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Uh.DEFAULT_MATERIAL_NAME="__DEFAULT";var as=class extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},No=class extends as{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},mc=new wt,Wf=new H,$f=new H,ko=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Qs,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new Et(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Wf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Wf),$f.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($f),t.updateMatrixWorld(),mc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(mc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Nh=class extends ko{constructor(){super(new Yt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=uo*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Oo=class extends as{constructor(e,t,i=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Nh}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var kh=class extends ko{constructor(){super(new Mo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fo=class extends as{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new kh}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Bo=class extends as{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Zh="\\[\\]\\.:\\/",lM=new RegExp("["+Zh+"]","g"),Jh="[^"+Zh+"]",cM="[^"+Zh.replace("\\.","")+"]",hM=/((?:WC+[\/:])*)/.source.replace("WC",Jh),uM=/(WCOD+)?/.source.replace("WCOD",cM),dM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jh),fM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jh),pM=new RegExp("^"+hM+uM+dM+fM+"$"),mM=["material","materials","bones","map"],Oh=class{constructor(e,t,i){let r=i||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},gt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lM,"")}static parseTrackName(e){let t=pM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=i.nodeName.substring(r+1);mM.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(s){for(let a=0;a<s.length;a++){let o=s[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[r];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=Oh;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var YM=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var oa=new H;function An(n,e,t,i,r,s){let a=2*Math.PI*r/4,o=Math.max(s-2*r,0),l=Math.PI/4;oa.copy(e),oa[i]=0,oa.normalize();let c=.5*a/(a+o),h=1-oa.angleTo(n)/l;return Math.sign(oa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var ui=class extends zt{constructor(e=1,t=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,t/2,i/2,s),super(1,1,1,r,r,r),r===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new H,l=new H,c=new H(e,t,i).divideScalar(2).subScalar(s),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new H,y=.5/r;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*s,h[m+1]=c.y*Math.sign(o.y)+l.y*s,h[m+2]=c.z*Math.sign(o.z)+l.z*s,d[m+0]=l.x,d[m+1]=l.y,d[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),u[p+0]=An(g,l,"z","y",s,i),u[p+1]=1-An(g,l,"y","z",s,t);break;case 1:g.set(-1,0,0),u[p+0]=1-An(g,l,"z","y",s,i),u[p+1]=1-An(g,l,"y","z",s,t);break;case 2:g.set(0,1,0),u[p+0]=1-An(g,l,"x","z",s,e),u[p+1]=An(g,l,"z","x",s,i);break;case 3:g.set(0,-1,0),u[p+0]=1-An(g,l,"x","z",s,e),u[p+1]=1-An(g,l,"z","x",s,i);break;case 4:g.set(0,0,1),u[p+0]=1-An(g,l,"x","y",s,e),u[p+1]=1-An(g,l,"y","x",s,t);break;case 5:g.set(0,0,-1),u[p+0]=An(g,l,"x","y",s,e),u[p+1]=1-An(g,l,"y","x",s,t);break}}};var Kh=[{id:"tron",name:"B\xE9 \u0110\u1EE5t",emo:"\u{1F642}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffc93d",bottom:"#2f8bff",shoes:"#ff4d6d",hairStyle:"ahoge",sleeve:.3,pants:.35,face:["blush"]},{id:"hocsinh",name:"H\u1ECDc Sinh",emo:"\u{1F392}",skin:"#fbcca6",hair:"#1d1648",top:"#ffffff",bottom:"#2a3a7a",shoes:"#1d1648",hairStyle:"spiky",sleeve:.3,pants:.35,extra:{scarf:"#ff3d4f",pack:"#38b2ff"}},{id:"cogiao",name:"C\xF4 Gi\xE1o",emo:"\u{1F469}\u200D\u{1F3EB}",skin:"#fcd2b0",hair:"#2a1a14",top:"#fbfbff",bottom:"#fbfbff",shoes:"#c0392b",hairStyle:"long",sleeve:1,pants:1,face:["glasses"],extra:{aodai:"#fbfbff"}},{id:"nonla",name:"C\xF4 Ba N\xF3n L\xE1",emo:"\u{1F38B}",skin:"#f7cfa6",hair:"#1a1a1a",top:"#9b5cf6",bottom:"#ffffff",shoes:"#c0392b",hairStyle:"long",hat:"nonla",sleeve:1,pants:1,extra:{aodai:"#9b5cf6"}},{id:"banhmi",name:"C\xF4 B\xE1nh M\xEC",emo:"\u{1F956}",skin:"#f6c9a0",hair:"#3a2418",top:"#ff8fb8",bottom:"#4b4478",shoes:"#ffc93d",hairStyle:"bun",hat:"scarfHead",hatColor:"#ff6f3c",sleeve:.5,pants:1,extra:{apron:"#ff9a3c"}},{id:"xeom",name:"Ch\xFA Xe \xD4m",emo:"\u{1F6F5}",skin:"#e8b48a",hair:"#1a1a1a",top:"#3aa357",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"helmet",hatColor:"#2fbf71",face:["mustache"],sleeve:1,pants:1},{id:"ngoai",name:"B\xE0 Ngo\u1EA1i",emo:"\u{1F475}",skin:"#f3c9a6",hair:"#eeeef5",top:"#a86b3c",bottom:"#2b2550",shoes:"#6b4426",hairStyle:"bun",face:["glasses","blush"],sleeve:1,pants:1,extra:{belt:"#2b2550"}},{id:"baove",name:"B\xE1c B\u1EA3o V\u1EC7",emo:"\u{1F46E}",skin:"#e8b48a",hair:"#2a1a14",top:"#c9b27a",bottom:"#6b5a3a",shoes:"#1d1648",hairStyle:"short",hat:"cap",hatColor:"#2b3a6b",face:["mustache"],sleeve:.5,pants:1,extra:{whistle:!0,badge:!0,belt:"#3a2a1c"}},{id:"shipper",name:"Anh Shipper",emo:"\u{1F4E6}",skin:"#ffd2a6",hair:"#1a1a1a",top:"#ff8a1f",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"fullhelmet",hatColor:"#ff8a1f",sleeve:1,pants:1,extra:{box:"#ff8a1f"}},{id:"chef",name:"Vua \u0110\u1EA7u B\u1EBFp",emo:"\u{1F468}\u200D\u{1F373}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffffff",bottom:"#2b2550",shoes:"#1d1648",hairStyle:"short",hat:"chef",face:["curly"],sleeve:1,pants:1,extra:{scarf:"#ff3d4f",apron:"#ffffff"}},{id:"chotdon",name:"Ch\u1ECB Ch\u1ED1t \u0110\u01A1n",emo:"\u{1F4F1}",skin:"#fcd2b0",hair:"#a8452a",top:"#ff3d8b",bottom:"#1d1648",shoes:"#ffc93d",hairStyle:"wavy",face:["blush"],sleeve:.3,pants:.4,extra:{dress:"#ff3d8b",chain:!0}},{id:"scientist",name:"Gi\xE1o S\u01B0 Kh\xF9ng",emo:"\u{1F9EA}",skin:"#fbcca6",hair:"#eeeef5",top:"#4dabf7",bottom:"#5b6478",shoes:"#3a2a1c",hairStyle:"messy",face:["glasses"],sleeve:1,pants:1,extra:{coat:"#ffffff",tie:"#ff3d4f"}},{id:"doctor",name:"B\xE1c S\u0129",emo:"\u{1FA7A}",skin:"#f6c9a0",hair:"#2a1a14",top:"#3ccf9e",bottom:"#3ccf9e",shoes:"#ffffff",hairStyle:"slick",hat:"mirror",sleeve:1,pants:1,extra:{coat:"#ffffff"}},{id:"boss",name:"T\u1ED5ng T\xE0i",emo:"\u{1F60E}",skin:"#f6c9a0",hair:"#1a1a1a",top:"#22223a",bottom:"#22223a",shoes:"#0d0d18",hairStyle:"slick",face:["shades"],sleeve:1,pants:1,extra:{tie:"#ff3d4f"}},{id:"idol",name:"Idol Nh\xED",emo:"\u{1F3A4}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff6fb5",bottom:"#ffffff",shoes:"#ff6fb5",hairStyle:"pigtails",face:["blush"],sleeve:.3,pants:.3,extra:{dress:"#ffffff",star:"#ffc93d"}},{id:"rocker",name:"Rocker",emo:"\u{1F3B8}",skin:"#fbcca6",hair:"#ff3d8b",top:"#1d1648",bottom:"#2b2550",shoes:"#ff3d4f",hairStyle:"mohawk",face:["shades"],sleeve:.35,pants:1,extra:{chain:!0}},{id:"rapper",name:"Rapper",emo:"\u{1F9E2}",skin:"#c98b5e",hair:"#1a1a1a",top:"#8b5cf6",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"capBack",hatColor:"#ffc93d",sleeve:1,pants:1,extra:{chain:!0}},{id:"gamer",name:"Game Th\u1EE7",emo:"\u{1F3AE}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#2fbf71",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"messy",hat:"phones",hatColor:"#1d1648",face:["glasses"],sleeve:1,pants:1},{id:"football",name:"C\u1EA7u Th\u1EE7",emo:"\u26BD",skin:"#e8b48a",hair:"#1a1a1a",top:"#ff3d4f",bottom:"#ffffff",shoes:"#ffc93d",hairStyle:"spiky",hat:"band",hatColor:"#ffffff",sleeve:.3,pants:.3,legs:"#ff3d4f"},{id:"farmer",name:"B\xE1c N\xF4ng D\xE2n",emo:"\u{1F33E}",skin:"#d99b6c",hair:"#1a1a1a",top:"#7a5230",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"nonla",sleeve:1,pants:.7,extra:{scarf:"#1d1648"}},{id:"ongdo",name:"\xD4ng \u0110\u1ED3",emo:"\u{1F4DC}",skin:"#f3c9a6",hair:"#eeeef5",top:"#2f6bff",bottom:"#ffffff",shoes:"#1d1648",hairStyle:"bald",hat:"turban",hatColor:"#1d1648",face:["beard","glasses"],sleeve:1,pants:1,extra:{aodai:"#2f6bff"}},{id:"fire",name:"L\xEDnh C\u1EE9u Ho\u1EA3",emo:"\u{1F9D1}\u200D\u{1F692}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffb63d",bottom:"#ffb63d",shoes:"#1d1648",hairStyle:"short",hat:"fire",hatColor:"#ff3d4f",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#ffe14d"}},{id:"astro",name:"Phi H\xE0nh Gia",emo:"\u{1F680}",skin:"#fbcca6",hair:"#3a2a1c",top:"#f2f4ff",bottom:"#f2f4ff",shoes:"#8b93b8",hairStyle:"short",hat:"bubble",sleeve:1,pants:1,gloves:"#ffffff",extra:{pack:"#dfe3f5",badge:!0}},{id:"hero",name:"Si\xEAu Nh\xE2n \u0110\u1EE5t",emo:"\u{1F9B8}",skin:"#ffd2a6",hair:"#1d1648",top:"#2f6bff",bottom:"#ff3d4f",shoes:"#ff3d4f",hairStyle:"ahoge",hat:"band",hatColor:"#ff3d4f",sleeve:1,pants:.2,legs:"#2f6bff",gloves:"#ffffff",extra:{cape:"#ff3d4f",star:"#ffc93d",belt:"#ffc93d"}},{id:"ninja",name:"Ninja H\u1EE5t",emo:"\u{1F977}",skin:"#ffd2a6",hair:"#14102e",top:"#2b2550",bottom:"#2b2550",shoes:"#14102e",hairStyle:"bald",hat:"ninja",hatColor:"#2b2550",sleeve:1,pants:1,extra:{belt:"#ff3d4f"}},{id:"pirate",name:"C\u01B0\u1EDBp Bi\u1EC3n",emo:"\u{1F3F4}\u200D\u2620\uFE0F",skin:"#e8b48a",hair:"#2a1a14",top:"#ffffff",bottom:"#2b2550",shoes:"#3a2a1c",hairStyle:"short",hat:"tricorn",hatColor:"#1d1648",face:["patch","beard"],beard:"#2a1a14",sleeve:1,pants:.75,extra:{belt:"#ff3d4f",vest:"#c0392b"}},{id:"king",name:"Vua H\u1EC1",emo:"\u{1F451}",skin:"#ffd2a6",hair:"#a86b3c",top:"#8b5cf6",bottom:"#ffc93d",shoes:"#ff3d4f",hairStyle:"short",hat:"crown",face:["curly"],sleeve:1,pants:1,extra:{cape:"#e8344a",belt:"#ffc93d"}},{id:"princess",name:"C\xF4ng Ch\xFAa",emo:"\u{1F478}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff8fc8",bottom:"#ff8fc8",shoes:"#ffffff",hairStyle:"long",hat:"tiara",face:["blush"],sleeve:.3,pants:1,extra:{dress:"#ff8fc8"}},{id:"vampire",name:"B\xE1 T\u01B0\u1EDBc Ma",emo:"\u{1F9DB}",skin:"#e9e4f5",hair:"#1a1a1a",top:"#ffffff",bottom:"#1d1648",shoes:"#1d1648",hairStyle:"slick",face:["fangs"],sleeve:1,pants:1,extra:{cape:"#1d1648",collar:"#e8344a",vest:"#e8344a"}},{id:"santa",name:"\xD4ng Gi\xE0 Noel",emo:"\u{1F385}",skin:"#ffd2a6",hair:"#ffffff",top:"#e8344a",bottom:"#e8344a",shoes:"#1d1648",hairStyle:"short",hat:"santa",face:["beard","blush"],beard:"#ffffff",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#1d1648",belly:"#e8344a"}},{id:"bear",name:"G\u1EA5u B\xF4ng",emo:"\u{1F9F8}",skin:"#ffd2a6",hair:"#c98b52",top:"#c98b52",bottom:"#c98b52",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"bear",hatColor:"#c98b52",sleeve:1,pants:1,gloves:"#c98b52",extra:{belly:"#f2d2a9"}},{id:"cat",name:"M\xE8o M\u1EADp",emo:"\u{1F431}",skin:"#fcd2b0",hair:"#ff9a3c",top:"#ff9a3c",bottom:"#ff9a3c",shoes:"#ffffff",hairStyle:"bald",hat:"hood",hood:"cat",hatColor:"#ff9a3c",sleeve:1,pants:1,gloves:"#ffffff",extra:{belly:"#fff1e0"}},{id:"dino",name:"Kh\u1EE7ng Long",emo:"\u{1F996}",skin:"#ffd2a6",hair:"#2fbf71",top:"#2fbf71",bottom:"#2fbf71",shoes:"#1f8f52",hairStyle:"bald",hat:"hood",hood:"dino",hatColor:"#2fbf71",sleeve:1,pants:1,gloves:"#2fbf71",extra:{belly:"#d9f99d"}},{id:"frog",name:"\u1EBEch \u1ED8p",emo:"\u{1F438}",skin:"#fcd2b0",hair:"#7bd148",top:"#7bd148",bottom:"#7bd148",shoes:"#ffc93d",hairStyle:"bald",hat:"hood",hood:"frog",hatColor:"#7bd148",sleeve:1,pants:1,gloves:"#7bd148",extra:{belly:"#e9ffd0"}},{id:"dog",name:"C\u1EADu V\xE0ng",emo:"\u{1F436}",skin:"#fcd2b0",hair:"#e8b04a",top:"#e8b04a",bottom:"#e8b04a",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"dog",hatColor:"#e8b04a",sleeve:1,pants:1,gloves:"#e8b04a",extra:{belly:"#fff1d6",scarf:"#2f8bff"}},{id:"bride",name:"C\xF4 D\xE2u",emo:"\u{1F470}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#ffffff",bottom:"#ffffff",shoes:"#ffffff",hairStyle:"bun",hat:"veil",sleeve:.3,pants:1,face:["blush"],extra:{dress:"#ffffff"}},{id:"beanie",name:"Anh Ch\xE0ng L\u1EA1nh",emo:"\u{1F9E3}",skin:"#ffd2a6",hair:"#6b4426",top:"#38b2ff",bottom:"#2b2550",shoes:"#ff4d6d",hairStyle:"short",hat:"beanie",hatColor:"#ff4d6d",sleeve:1,pants:1,face:["freckles"],extra:{scarf:"#ffc93d"}}],$o=Object.fromEntries(Kh.map(n=>[n.id,n]));var Qh=Object.fromEntries(Kh.map(n=>[n.id,{name:n.name,emo:n.emo,skin:n.skin,shirt:n.top,pants:n.bottom,shoes:n.shoes,hair:n.hair}])),eb=Object.keys(Qh),la={down:[10,0],up:[170,0],side:[90,0],diag:[135,0],hip:[40,-105],flex:[90,90],cross:[25,-125],head:[150,-150],mouth:[15,-150],point:[65,-10],wave:[150,25]},ca={down:[4,0],kick:[70,-10],knee:[28,-55],step:[22,0],spread:[35,0]},ha={stand:{t:"",legs:null},sit:{t:"translate(0px,26px)",legs:[[80,-80],[80,-80]],stool:!0},squat:{t:"translate(0px,40px)",legs:[[110,-150],[110,-150]]},kneel:{t:"translate(0px,34px)",legs:[[0,170],[0,170]]},lie:{t:"translate(72px,58px) rotate(-90deg)"},leanL:{t:"",torso:"rotate(18deg)"},leanR:{t:"",torso:"rotate(-18deg)"},handstand:{t:"translate(0px,-120px) rotate(180deg)"},crawl:{t:"translate(86px,6px) rotate(-90deg)",absArms:[[90,0],[90,0]],absLegs:[[90,0],[90,0]],head:90,tail:100},bow:{t:"",torso:"translateY(16px) scaleY(.84)",headDown:!0},crossleg:{t:"translate(0px,44px)",legs:[[88,-165],[88,-165]]}},jh={center:0,tiltL:18,tiltR:-18,up:0,down:0},_p=[["scissors","\u2702\uFE0F","K\xE9o"],["comb","\u{1FAAE}","L\u01B0\u1EE3c"],["mic","\u{1F3A4}","Micro"],["phone","\u{1F4F1}","\u0110i\u1EC7n tho\u1EA1i"],["ball","\u26BD","Qu\u1EA3 b\xF3ng"],["racket","\u{1F3F8}","V\u1EE3t"],["rod","\u{1F3A3}","C\u1EA7n c\xE2u"],["pan","\u{1F373}","Ch\u1EA3o"],["broom","\u{1F9F9}","Ch\u1ED5i"],["sword","\u{1F5E1}\uFE0F","Ki\u1EBFm"],["umbrella","\u2602\uFE0F","\xD4"],["book","\u{1F4D6}","S\xE1ch"],["guitar","\u{1F3B8}","\u0110\xE0n"],["violin","\u{1F3BB}","Violin"],["hammer","\u{1F528}","B\xFAa"],["chopsticks","\u{1F962}","\u0110\u0169a"],["bowl","\u{1F35C}","T\xF4"],["wand","\u{1FA84}","\u0110\u0169a ph\xE9p"],["magnifier","\u{1F50D}","K\xEDnh l\xFAp"],["camera","\u{1F4F7}","M\xE1y \u1EA3nh"],["flower","\u{1F339}","Hoa"],["gift","\u{1F381}","Qu\xE0"],["cup","\u2615","C\u1ED1c"],["toothbrush","\u{1FAA5}","B\xE0n ch\u1EA3i"],["money","\u{1F4B5}","Ti\u1EC1n"],["bone","\u{1F9B4}","Kh\xFAc x\u01B0\u01A1ng"],["carrot","\u{1F955}","C\xE0 r\u1ED1t"],["banana","\u{1F34C}","Chu\u1ED1i"],["stethoscope","\u{1FA7A}","\u1ED0ng nghe"],["ruler","\u{1F4CF}","Th\u01B0\u1EDBc"],["balloon","\u{1F388}","B\xF3ng bay"],["extinguisher","\u{1F9EF}","B\xECnh ch\u1EEFa ch\xE1y"],["bottle","\u{1F37C}","B\xECnh s\u1EEFa"],["gamepad","\u{1F3AE}","Tay c\u1EA7m game"],["laptop","\u{1F4BB}","Laptop"],["basket","\u{1F9FA}","Gi\u1ECF"],["ring","\u{1F48D}","Nh\u1EABn"],["cake","\u{1F382}","B\xE1nh kem"],["torch","\u{1F526}","\u0110\xE8n pin"],["towel","\u{1F9FB}","Kh\u0103n gi\u1EA5y"]],yp=_p.map(([n,e,t])=>[n,`${e} ${t}`]),qo=Object.fromEntries(_p.map(([n,e])=>[n,e])),gM=[{group:"To\xE0n th\xE2n",key:"body",opts:[["stand","\u0110\u1EE9ng"],["sit","Ng\u1ED3i gh\u1EBF"],["squat","Ng\u1ED3i x\u1ED5m"],["kneel","Qu\u1EF3"],["lie","N\u1EB1m"],["leanL","Nghi\xEAng tr\xE1i"],["leanR","Nghi\xEAng ph\u1EA3i"],["handstand","Tr\u1ED3ng c\xE2y chu\u1ED1i"],["crawl","B\xF2 4 ch\xE2n"],["bow","C\xFAi ch\xE0o"],["crossleg","Ng\u1ED3i x\u1EBFp b\u1EB1ng"]]},{group:"\u0110\u1EA7u",key:"head",opts:[["center","Th\u1EB3ng"],["tiltL","Nghi\xEAng tr\xE1i"],["tiltR","Nghi\xEAng ph\u1EA3i"],["up","Ng\u01B0\u1EDBc l\xEAn"],["down","C\xFAi xu\u1ED1ng"]]},{group:"M\u1EB7t",key:"face",opts:[["neutral","\u{1F610}"],["happy","\u{1F604}"],["sad","\u{1F622}"],["angry","\u{1F620}"],["surprised","\u{1F62E}"],["scared","\u{1F631}"],["sleepy","\u{1F634}"],["cheeky","\u{1F61C}"],["love","\u{1F60D}"]]},{group:"Tay tr\xE1i",key:"armL",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Tay ph\u1EA3i",key:"armR",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Ch\xE2n tr\xE1i",key:"legL",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"Ch\xE2n ph\u1EA3i",key:"legR",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"\u0110\u1EA1o c\u1EE5 tay tr\xE1i",key:"propL",toggle:!0,opts:yp},{group:"\u0110\u1EA1o c\u1EE5 tay ph\u1EA3i",key:"propR",toggle:!0,opts:yp},{group:"Ho\xE1 trang",key:"ears",toggle:!0,opts:[["dog","\u{1F436} Tai ch\xF3"],["cat","\u{1F431} Tai m\xE8o"],["bunny","\u{1F430} Tai th\u1ECF"],["mouse","\u{1F42D} Tai chu\u1ED9t"],["horns","\u{1F42E} S\u1EEBng"],["antenna","\u{1F41D} R\xE2u c\xF4n tr\xF9ng"]]},{group:"\u0110u\xF4i",key:"tail",toggle:!0,opts:[["dog","\u{1F415} \u0110u\xF4i ch\xF3"],["cat","\u{1F408} \u0110u\xF4i m\xE8o"],["pig","\u{1F437} \u0110u\xF4i heo"],["dino","\u{1F996} \u0110u\xF4i kh\u1EE7ng long"]]},{group:"Chuy\u1EC3n \u0111\u1ED9ng (b\u1EADt/t\u1EAFt)",key:"loop",toggle:!0,opts:[["walk","\u0110i b\u1ED9"],["run","Ch\u1EA1y"],["dance","Nh\u1EA3y m\xFAa"],["butt","L\u1EAFc m\xF4ng"],["flap","V\u1ED7 c\xE1nh"],["swim","B\u01A1i"],["shiver","Run r\u1EA9y"],["clap","V\u1ED7 tay"],["punch","\u0110\u1EA5m"],["row","Ch\xE8o"],["nod","G\u1EADt g\xF9"],["shake","L\u1EAFc \u0111\u1EA7u"]]},{group:"Hi\u1EC7u \u1EE9ng",key:"fx",oneshot:!0,opts:[["jump","B\u1EADt nh\u1EA3y"],["spin","Xoay v\xF2ng"],["fall","T\xE9 ng\xE3"],["bounce","Nh\xFAn nh\u1EA3y"]]},{group:"Xoay ng\u01B0\u1EDDi",key:"turn",opts:[["front","\u2B06\uFE0F Nh\xECn kh\xE1n gi\u1EA3"],["l45","\u2196\uFE0F Xoay ch\xE9o tr\xE1i"],["r45","\u2197\uFE0F Xoay ch\xE9o ph\u1EA3i"],["left","\u2B05\uFE0F Quay tr\xE1i"],["right","\u27A1\uFE0F Quay ph\u1EA3i"],["back","\u2B07\uFE0F Quay l\u01B0ng"]]}],Yo=Object.fromEntries(gM.find(n=>n.key==="face").opts),Xn={hip:[150,218],neck:[150,146],shL:[124,160],shR:[176,160],elL:[124,192],elR:[176,192],hipL:[138,222],hipR:[162,222],knL:[138,254],knR:[162,254]},dn=n=>`${n[0]}px ${n[1]}px`;function yM(n,e,t=!1){let i=e==="up"?-4:e==="down"?4:0,r=99+i,s=(u,f,g,y=3.6)=>`<ellipse cx="${u}" cy="${r}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${u+f}" cy="${r+g}" r="${y}" class="dk"/><circle cx="${u+f+1.2}" cy="${r+g-1.4}" r="1.1" fill="#fff"/>`,a;switch(n){case"happy":a=`<path d="M128 ${r+2} q9 -11 18 0 M154 ${r+2} q9 -11 18 0" class="ln"/>`;break;case"sleepy":a=`<path d="M128 ${r} q9 6 18 0 M154 ${r} q9 6 18 0" class="ln"/>`;break;case"love":a=`<path d="M137 ${r+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${r+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`;break;case"cheeky":a=`<path d="M128 ${r} q9 -6 18 0" class="ln"/>${s(163,-2,1)}`;break;case"surprised":a=s(137,0,0,2.4)+s(163,0,0,2.4);break;case"scared":a=s(137,2,2,2.6)+s(163,-2,2,2.6)+`<path d="M180 ${r-8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`;break;case"sad":a=s(137,1,3)+s(163,-1,3);break;case"angry":a=s(137,2,1)+s(163,-2,1);break;default:a=s(137,3,2)+s(163,-3,-2)}let o={angry:`<path d="M127 ${r-15} L146 ${r-9} M173 ${r-15} L154 ${r-9}" class="ln" style="stroke-width:4.5"/>`,sad:`<path d="M128 ${r-10} L145 ${r-15} M172 ${r-10} L155 ${r-15}" class="ln"/>`,scared:`<path d="M127 ${r-14} q5 -4 9 0 q5 4 9 0 M155 ${r-14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,surprised:`<path d="M128 ${r-17} q9 -6 18 0 M154 ${r-17} q9 -6 18 0" class="ln"/>`}[n]||"",l=118+i,c={happy:`<path d="M133 ${l-2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${l-1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${l+8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,sad:`<path d="M139 ${l+5} q11 -10 22 0" class="ln"/><path d="M134 ${r+8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,angry:`<rect x="138" y="${l-3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${l-3} v9 M150 ${l-3} v9 M156 ${l-3} v9" stroke="#1d1648" stroke-width="1.6"/>`,surprised:`<ellipse cx="150" cy="${l+2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,scared:`<path d="M136 ${l+2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,sleepy:`<ellipse cx="150" cy="${l+1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${l+2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78+i}" class="zz">z</text><text x="188" y="${64+i}" class="zz">Z</text>`,cheeky:`<path d="M138 ${l-1} q12 9 24 0" class="ln"/><path d="M147 ${l+2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,love:`<path d="M138 ${l-2} q12 12 24 0" class="ln"/>`,neutral:`<path d="M138 ${l-1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${l}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`}[n]||"",h=`<ellipse cx="150" cy="${110+i}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;return`${`<circle cx="125" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/><circle cx="175" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/>`}${t?"":`<g class="pp-eyes">${a}</g>${o}`}${h}${c}`}function xM(n,e){switch(n){case"tron":return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${e.hair}" stroke="#1d1648" stroke-width="2.5"/>`};case"ninja":return{hairFront:`<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${e.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,mask:`<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${e.hair}" class="ol"/>`};case"scientist":return{hairBack:`<circle cx="118" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${e.hair}" class="ol"/>`,hairFront:'<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>',torso:'<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>'};case"boss":return{hairFront:`<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${e.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,torso:'<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>',noEyes:!0};case"idol":return{hairBack:`<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${e.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,torso:'<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>'};case"hero":return{back:'<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>',hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${e.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,torso:'<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>'};case"astro":return{hairFront:`<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${e.hair}" class="ol"/>`,helmet:'<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>',torso:'<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>'};case"nonla":return{hairBack:`<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${e.hair}" class="ol"/>`,hat:'<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>',torso:'<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>'};case"bear":return{hairBack:`<circle cx="120" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,under:'<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>',torso:'<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>'}}return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/>`}}var Xo="#c98b52",_M={dog:{front:`<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${Xo}" class="ol"/>`},cat:{back:`<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${Xo}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>`},bunny:{back:'<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>'},mouse:{back:'<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>'},horns:{back:'<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>'},antenna:{back:'<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>'}},xp={dog:`<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${Xo}" class="ol"/>`,cat:`<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${Xo}" stroke-width="6" stroke-linecap="round"/>`,pig:'<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>',dino:'<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>'};function vp(n){n.innerHTML=`
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${dn(Xn.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${dn(Xn.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${e("L")}${e("R")}
      <g class="pp-torso j" style="transform-origin:${dn(Xn.hip)}"><g class="in pp-torsoIn" style="transform-origin:${dn(Xn.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${t("L")}${t("R")}
        <g class="pp-head j" style="transform-origin:${dn(Xn.neck)}"><g class="in pp-headIn" style="transform-origin:${dn(Xn.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
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
  </svg>`;function e(h){let d=Xn["hip"+h],u=Xn["kn"+h];return`<g class="pp-leg${h} j" style="transform-origin:${dn(d)}"><g class="in pp-leg${h}In" style="transform-origin:${dn(d)}">
      <line class="pp-pants" x1="${d[0]}" y1="${d[1]}" x2="${u[0]}" y2="${u[1]}"/>
      <g class="pp-shin${h} j" style="transform-origin:${dn(u)}"><g class="in pp-shin${h}In" style="transform-origin:${dn(u)}">
        <line class="pp-pants" x1="${u[0]}" y1="${u[1]}" x2="${u[0]}" y2="${u[1]+30}"/>
        <ellipse class="pp-shoe ol" cx="${u[0]+(h==="L"?-8:8)}" cy="${u[1]+36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`}function t(h){let d=Xn["sh"+h],u=Xn["el"+h];return`<g class="pp-arm${h} j" style="transform-origin:${dn(d)}"><g class="in pp-arm${h}In" style="transform-origin:${dn(d)}">
      <line class="pp-sleeve" x1="${d[0]}" y1="${d[1]}" x2="${u[0]}" y2="${u[1]}"/>
      <g class="pp-fore${h} j" style="transform-origin:${dn(u)}"><g class="in pp-fore${h}In" style="transform-origin:${dn(u)}">
        <line class="pp-forearm" x1="${u[0]}" y1="${u[1]}" x2="${u[0]}" y2="${u[1]+26}"/>
        <circle class="pp-hand pp-skin ol" cx="${u[0]}" cy="${u[1]+31}" r="10.5"/>
        <text class="pp-prop pp-prop${h}" x="${u[0]}" y="${u[1]+40}"></text>
        <path d="M${u[0]+(h==="L"?7:-7)} ${u[1]+26} q${h==="L"?7:-7} -2 ${h==="L"?6:-6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`}let i=n.querySelector("svg"),r=h=>i.querySelector("."+h),s=(h,d)=>{r(h).style.transform=d},a=null,o=null;function l(h){let d=Qh[h?.skin]?h.skin:"tron",u=Qh[d];i.style.setProperty("--pp-skin",u.skin),i.style.setProperty("--pp-shirt",u.shirt),i.style.setProperty("--pp-pants",u.pants),i.style.setProperty("--pp-shoes",u.shoes);let f=xM(d,u),g=h?.head||"";r("pp-photo").setAttribute("href",g),i.classList.toggle("has-photo",!!g),r("pp-back").innerHTML=f.back||"",r("pp-hairBack").innerHTML=g?"":f.hairBack||"",r("pp-hairFront").innerHTML=(g?"":f.hairFront||"")+(f.hat||""),r("pp-mask").innerHTML=g?"":f.mask||"",r("pp-under").innerHTML=g?"":f.under||"",r("pp-helmet").innerHTML=f.helmet||"",r("pp-torsoAcc").innerHTML=f.torso||"",i.dataset.skin=d,o={...h,noEyes:f.noEyes}}function c(h){let d=ha[h.body]||ha.stand;s("pp-root",d.t||"none"),s("pp-torso",d.torso||"none"),r("pp-stool").classList.toggle("on",!!d.stool);for(let y of["L","R"]){let m=y==="L"?1:-1,p=y==="L"?0:1,b=!h["arm"+y]||h["arm"+y]==="down";if(d.absArms&&b)s("pp-arm"+y,`rotate(${d.absArms[p][0]}deg)`),s("pp-fore"+y,`rotate(${d.absArms[p][1]}deg)`);else{let _=la[h["arm"+y]]||la.down;s("pp-arm"+y,`rotate(${_[0]*m}deg)`),s("pp-fore"+y,`rotate(${_[1]*m}deg)`)}let v=!h["leg"+y]||h["leg"+y]==="down";if(d.absLegs&&v)s("pp-leg"+y,`rotate(${d.absLegs[p][0]}deg)`),s("pp-shin"+y,`rotate(${d.absLegs[p][1]}deg)`);else{let _=d.legs?d.legs[p]:ca[h["leg"+y]]||ca.down;s("pp-leg"+y,`rotate(${_[0]*m}deg)`),s("pp-shin"+y,`rotate(${_[1]*m}deg)`)}i.classList.toggle("wave"+y,h["arm"+y]==="wave"),r("pp-prop"+y).textContent=qo[h["prop"+y]]||""}s("pp-head",`rotate(${(jh[h.head]??0)+(d.head||0)}deg)`);let u=i.classList.contains("has-photo"),f=d.headDown&&(!h.head||h.head==="center")?"down":h.head;r("pp-face").innerHTML=u?"":yM(h.face,f,o?.noEyes);let g=_M[h.ears]||{};r("pp-earsBack").innerHTML=g.back||"",r("pp-earsFront").innerHTML=g.front||"",r("pp-tail").innerHTML=xp[h.tail]?`<g class="pp-tailIn">${xp[h.tail]}</g>`:"",s("pp-tail",d.tail?`rotate(${d.tail}deg)`:"none"),r("pp-emote").textContent=u&&h.face&&h.face!=="neutral"&&Yo[h.face]||"",i.dataset.loop=h.loop||"",h.fx&&h.fx.seq!==a&&(a=h.fx.seq,Date.now()-(h.fx.at||0)<4e3&&(i.classList.remove("fx-jump","fx-spin","fx-fall","fx-bounce"),i.getBoundingClientRect(),i.classList.add("fx-"+h.fx.name),clearTimeout(i._fxT),i._fxT=setTimeout(()=>i.classList.remove("fx-"+h.fx.name),1600)))}return{setPose:c,setLook:l,el:i}}function vM(){let n=document.createElement("canvas");n.width=1024,n.height=512;let e=n.getContext("2d"),t=12,i=n.width/t,r=["#d9944f","#cf8846","#e0a05a","#c98240","#d68f4c"];for(let a=0;a<t;a++){e.fillStyle=r[a*7%r.length],e.fillRect(a*i,0,i,n.height),e.strokeStyle="rgba(120,60,20,.18)",e.lineWidth=2;for(let l=0;l<7;l++){e.beginPath();let c=a*i+8+Math.random()*(i-16);e.moveTo(c,0);for(let h=0;h<=n.height;h+=32)e.lineTo(c+Math.sin(h/60+l)*4,h);e.stroke()}e.fillStyle="rgba(70,30,10,.55)",e.fillRect(a*i,0,3,n.height);let o=a*173%n.height;e.fillRect(a*i,o,i,3)}let s=new Wn(n);return s.colorSpace=Bt,s.wrapS=s.wrapT=Zs,s.anisotropy=4,s}function MM(){let n=document.createElement("canvas");n.width=512,n.height=512;let e=n.getContext("2d"),t=e.createRadialGradient(256,200,40,256,256,380);t.addColorStop(0,"#6d48d6"),t.addColorStop(.55,"#3f2196"),t.addColorStop(1,"#1d0f52"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let r=0;r<90;r++)e.fillStyle=Math.random()<.25?"#ffe9a8":"#ffffff",e.globalAlpha=.4+Math.random()*.6,e.beginPath(),e.arc(Math.random()*512,Math.random()*420,Math.random()*2+.6,0,Math.PI*2),e.fill();e.globalAlpha=1;let i=new Wn(n);return i.colorSpace=Bt,i}function bM(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,240,190,1)"),t.addColorStop(.3,"rgba(255,210,120,.6)"),t.addColorStop(1,"rgba(255,200,100,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new Wn(n)}function Mp(n,e,t){let i=new ci(n,e,t*10,1),r=i.attributes.position;for(let s=0;s<r.count;s++){let a=(r.getX(s)+n/2)/n;r.setZ(s,Math.sin(a*t*Math.PI*2)*.16)}return i.computeVertexNormals(),i}function SM(n=.32,e=.14){let t=new $n;for(let i=0;i<10;i++){let r=i/10*Math.PI*2-Math.PI/2,s=i%2?e:n;t[i?"lineTo":"moveTo"](Math.cos(r)*s,-Math.sin(r)*s)}return t}function bp(n){let e={hangs:[],crowd:[],beams:[],bulbs:[]};n.background=new Je(1444910);let t=vM();t.repeat.set(1.6,1.2);let i=new Ye(new ci(14,7.5),new un({map:t,roughness:.55}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-.4),i.receiveShadow=!0,n.add(i);let r=new Ye(new zt(14,.55,.3),new un({color:8011031,roughness:.6}));r.position.set(0,-.28,3.35),n.add(r);let s=new Ye(new zt(14,.08,.34),new un({color:16763197,roughness:.3,metalness:.4}));s.position.set(0,0,3.36),n.add(s);let a=new Ye(new ci(40,20),new un({color:853792}));a.rotation.x=-Math.PI/2,a.position.set(0,-.55,10),n.add(a);let o=new Ye(new ci(16,10),new un({map:MM(),roughness:.9,emissive:1707322,emissiveIntensity:.5}));o.position.set(0,4.2,-4.1),o.receiveShadow=!0,n.add(o);let l=(_,C,T,A,L)=>{let ee=new Ze;ee.position.set(C,T+L,A);let x=new Ye(new dt(.012,.012,L,4),new Ut({color:15658751,transparent:!0,opacity:.6}));x.position.y=-L/2,ee.add(x),_.position.y=-L,ee.add(_),ee.userData.ph=Math.random()*6,n.add(ee),e.hangs.push(ee)},c=new $n;c.absarc(0,0,.55,0,Math.PI*2,!1);let h=new $n;h.absarc(.24,.16,.48,0,Math.PI*2,!0),c.holes.push(h);let d=new Ye(new Pi(c,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03}),new un({color:16766826,emissive:16759101,emissiveIntensity:.6,roughness:.4}));l(d,-3.4,3.4,-3.3,1.6);let u=new un({color:16769658,emissive:16763197,emissiveIntensity:.5,roughness:.4});for(let[_,C,T,A]of[[-1.8,4.1,.9,.8],[2.2,3.9,1.2,1],[3.6,4.3,.7,.7],[-4.6,4.4,.6,.6]]){let L=new Ye(new Pi(SM(),{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),u);L.scale.setScalar(A),l(L,_,C,-3.4,T)}let f=new un({color:11736364,roughness:.75,side:Dt});for(let _ of[-1,1]){let C=new Ye(Mp(3.2,8,7),f);C.position.set(_*5.6,4,.6),C.rotation.y=_*-.25,C.castShadow=!0,n.add(C);let T=new Ye(new ft(.42,.07,10,24),new un({color:16763197,roughness:.3,metalness:.5}));T.position.set(_*4.35,1.9,.75),T.rotation.set(Math.PI/2,0,_*.3),T.scale.set(1,1,.6),n.add(T)}let g=new Ye(Mp(15,1.5,22),f);g.position.set(0,5.25,1.6),n.add(g);let y=new Ye(new zt(15,.1,.12),new un({color:16763197,emissive:9067008,emissiveIntensity:.3,metalness:.4,roughness:.3}));y.position.set(0,4.5,1.7),n.add(y);let m=bM();for(let _=0;_<9;_++){let C=-4.4+_*1.1,T=new Ye(new it(.09,12,8),new Ut({color:16774064}));T.position.set(C,.08,3.1),n.add(T);let A=new or(new Ri({map:m,transparent:!0,blending:Kr,depthWrite:!1}));A.scale.set(.9,.9,1),A.position.copy(T.position),n.add(A),e.bulbs.push(A)}let p=new Rt;p.position.set(0,1.2,0),n.add(p);for(let _ of[-1,1]){let C=new Oo(16773583,1.1,0,.36,.55,0);C.position.set(_*3.6,7.2,3.2),C.target=p,_<0&&(C.castShadow=!0,C.shadow.mapSize.set(1024,1024),C.shadow.bias=-4e-4),n.add(C);let T=8.2,A=new Ye(new Ht(1.5,T,32,1,!0),new Ut({color:16773583,transparent:!0,opacity:.075,blending:Kr,depthWrite:!1,side:Dt}));A.geometry.translate(0,-T/2,0),A.position.copy(C.position),A.lookAt(p.position),A.rotateX(-Math.PI/2),n.add(A),e.beams.push(A)}let b=new Ye(new rs(1.7,40),new Ut({map:m,transparent:!0,opacity:.55,blending:Kr,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.set(0,.012,.1),n.add(b);let v=new un({color:1313326,roughness:1});for(let _=0;_<11;_++){let C=new Ze,T=.85+Math.random()*.35,A=new Ye(new hi(.42,.5,4,12),v);A.position.y=.2,C.add(A);let L=new Ye(new it(.34,16,12),v);L.position.y=1,C.add(L),C.scale.setScalar(T),C.position.set(-5.5+_*1.1+(Math.random()-.5)*.3,-1+_%2*.12,4.4+_%2*.35),C.userData.base=C.position.y,C.userData.ph=Math.random()*6,n.add(C),e.crowd.push(C)}return e.cheerUntil=0,e.update=(_,C)=>{for(let A of e.hangs)A.rotation.z=Math.sin(_*1.1+A.userData.ph)*.08;e.beams.forEach((A,L)=>{A.material.opacity=.065+Math.sin(_*1.3+L)*.015}),e.bulbs.forEach((A,L)=>{A.material.opacity=.75+Math.sin(_*3+L*1.7)*.25});let T=C<e.cheerUntil;for(let A of e.crowd){let L=T?Math.abs(Math.sin(_*9+A.userData.ph))*.35:Math.sin(_*1.4+A.userData.ph)*.02;A.position.y=A.userData.base+L}},e}var yn=Math.PI/180,Sp=1/112,wM=1906248,ls;function TM(){return ls||(ls=new Ao(new Uint8Array([140,205,240]),3,1,Ho),ls.minFilter=ls.magFilter=Zt,ls.needsUpdate=!0),ls}var fr=(n,e={})=>new Do({color:n,gradientMap:TM(),...e}),Pp=n=>new En({uniforms:{t:{value:n},color:{value:new Je(wM)}},vertexShader:"uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }",side:Jt}),iu=Pp(.026),Ip=Pp(.016),wp=new Set([iu,Ip]);function me(n,e,{outline:t=!0,thin:i=!1,mat:r}={}){let s=new Ze,a=new Ye(n,r||fr(e));return a.castShadow=!0,s.add(a),t&&s.add(new Ye(n,i?Ip:iu)),s.userData.mesh=a,s}var Se=(n,e,t,i)=>(n.position.set(e,t,i),n),yt=(n,e,t,i)=>(n.rotation.set(e,t,i),n),xt=(n,e,t,i)=>(n.scale.set(e,t,i),n),Zo=(n,e=32,t=0,i=Math.PI*2)=>{let r=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new na(r.map(([s,a])=>new ve(s,a)),e,t,i)},eu=new Map;function EM(n,e){if(eu.has(n))return eu.get(n);let t=document.createElement("canvas");t.width=t.height=512;let i=new Wn(t);i.colorSpace=Bt;let r=new Image;return r.onload=()=>{t.getContext("2d").drawImage(r,0,0,512,512),i.needsUpdate=!0},r.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${e}</svg>`),eu.set(n,i),i}var tu=new Map;function Tp(n){if(tu.has(n))return tu.get(n);let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(n,64,72);let i=new Wn(e);return i.colorSpace=Bt,tu.set(n,i),i}var qe=.62,ru=1,Pt={lon:.34,lat:.06,r:.155},Ep=n=>50+n/ru*50,Ap=n=>50-n/ru*50;function AM(n,{eyes3D:e=!0,wink:t=!1,extras:i=[],noMouth:r=!1}={}){let s=Ep(-Pt.lon),a=Ep(Pt.lon),o=Ap(Pt.lat),l='fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"',c="";if((i.includes("blush")||["happy","love","cheeky"].includes(n))&&(c+=`<ellipse cx="${s-4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${a+4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`),i.includes("freckles"))for(let[_,C]of[[-6,12],[-2,15],[-9,15],[6,12],[2,15],[9,15]])c+=`<circle cx="${(_<0?s:a)+_}" cy="${o+C}" r=".9" fill="#b0643a"/>`;let d=_=>`<path d="M${_-8} ${o+3} Q${_} ${o-8} ${_+8} ${o+3}" ${l} stroke-width="3.6"/>`,u=_=>`<path d="M${_-8} ${o} Q${_} ${o+6} ${_+8} ${o}" ${l} stroke-width="3.4"/>`,f=_=>`<path d="M${_} ${o+7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;e?t&&(c+=d(s)):n==="love"?c+=f(s)+f(a):n==="sleepy"?c+=u(s)+u(a):c+=d(s)+d(a);let g=o-17,y=_=>`<path d="${_}" ${l} stroke-width="3.2"/>`,m={angry:`M${s-9} ${g+1} L${s+7} ${g+7} M${a+9} ${g+1} L${a-7} ${g+7}`,sad:`M${s-8} ${g+6} L${s+7} ${g} M${a+8} ${g+6} L${a-7} ${g}`,scared:`M${s-8} ${g+2} Q${s} ${g-5} ${s+7} ${g-1} M${a+8} ${g+2} Q${a} ${g-5} ${a-7} ${g-1}`,surprised:`M${s-8} ${g-2} Q${s} ${g-8} ${s+8} ${g-2} M${a-8} ${g-2} Q${a} ${g-8} ${a+8} ${g-2}`,cheeky:`M${s-8} ${g+2} Q${s} ${g-2} ${s+8} ${g+3} M${a-8} ${g-3} Q${a} ${g-8} ${a+8} ${g-2}`,neutral:`M${s-7} ${g+1} Q${s} ${g-3} ${s+7} ${g+2} M${a-7} ${g-1} Q${a} ${g-5} ${a+7} ${g}`};c+=y(m[n]||m.neutral);let p=Ap(-.36),b=_=>`<rect x="45.6" y="${_}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${_}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`,v={neutral:`<path d="M41 ${p-2} Q50 ${p+4} 59 ${p-3}" ${l} stroke-width="2.8"/>${b(p)}`,happy:`<path d="M37 ${p-4} Q50 ${p+16} 63 ${p-4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${b(p-3.6)}<path d="M44 ${p+6} Q50 ${p+2} 56 ${p+6} Q50 ${p+10} 44 ${p+6}Z" fill="#ff7b93"/>`,sad:`<path d="M41 ${p+4} Q50 ${p-4} 59 ${p+4}" ${l} stroke-width="2.8"/><path d="M${s-3} ${o+9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,angry:`<path d="M40 ${p-2} H60 Q61 ${p+7} 50 ${p+7} Q39 ${p+7} 40 ${p-2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${p+2.5} H59.5 M45 ${p-2} v9 M50 ${p-2} v9 M55 ${p-2} v9" stroke="#1d1648" stroke-width="1.2"/>`,surprised:`<ellipse cx="50" cy="${p+2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,scared:`<path d="M38 ${p+2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${l} stroke-width="2.4"/><path d="M${a+12} ${o-10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,sleepy:`<ellipse cx="51" cy="${p+1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${p+2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${o-16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${o-24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,cheeky:`<path d="M40 ${p-2} Q50 ${p+7} 60 ${p-3}" ${l} stroke-width="2.8"/><path d="M50 ${p+2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,love:`<path d="M40 ${p-3} Q50 ${p+9} 60 ${p-3}" ${l} stroke-width="2.8"/>`};return r||(c+=v[n]||v.neutral,i.includes("fangs")&&(c+=`<path d="M44 ${p+1} l1.6 4 l1.6 -4 M53 ${p+1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`)),c}var Cp=(n,e)=>new it(n,40,28,Math.PI/2-e,e*2,Math.PI/2-e,e*2),Jo=(n,e,t=qe)=>new H(t*Math.sin(n)*Math.cos(e),t*Math.sin(e),t*Math.cos(n)*Math.cos(e)),CM={point:[-75,0],mouth:[-30,-100],cross:[-45,-60],head:[-15,-40],hip:[10,0]},RM={point:[20,0],mouth:[10,25],cross:[16,-70],wave:[128,22]},Rp=.8,PM={sit:{y:.6,legs:[[-88,88,6],[-88,88,6]]},squat:{y:.46,legs:[[-115,135,26],[-115,135,26]]},kneel:{y:.5,legs:[[0,95,4],[0,95,4]]},crossleg:{y:.34,legs:[[-80,0,52,-125],[-80,0,52,-125]]},lie:{x:.45,y:.5},crawl:{x:0,y:.54},handstand:{y:2.12}},IM={front:0,l45:-Math.PI/4,r45:Math.PI/4,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},nu=class extends hn{constructor(e,t,i){super(),this.c=e,this.a=t,this.b=i}getPoint(e,t=new H){return this.c.getPoint(this.a+(this.b-this.a)*e,t)}};function su(n,e={}){let t;try{t=new wo({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(w){return console.warn("[puppet3d] WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng, d\xF9ng b\u1EA3n 2D",w),vp(n)}n.innerHTML="";let i=t.domElement;i.className="pp pp3d",i.setAttribute("role","img"),i.setAttribute("aria-label","Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u"),n.appendChild(i),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Bt;let r=new To,s=new Yt(30,1,.1,100),a=e.stage?{y:2,z:8.8,ly:1.5,fov:34}:{y:1.75,z:7.4,ly:1.38,fov:30};s.fov=a.fov,s.position.set(0,a.y,a.z),s.lookAt(0,a.ly,0),r.add(new No(16777215,14271231,e.stage?.6:1.3)),r.add(new Bo(16777215,e.stage?.15:.5));let o=new Fo(16777215,e.stage?.8:1.9);o.position.set(3,6,6),r.add(o);let l=e.stage?bp(r):null;l&&(t.shadowMap.enabled=!0,t.shadowMap.type=Fh);let c=new Ye(new rs(.8,32),new Ut({color:1906248,transparent:!0,opacity:l?.12:.18,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.01,r.add(c);let h=new Ze;h.add(Se(me(new dt(.5,.5,.13,28),16747039),0,.42,0));for(let[w,D]of[[-.32,-.22],[.32,-.22],[-.32,.22],[.32,.22]])h.add(Se(me(new dt(.05,.05,.42,8),1906248,{outline:!1}),w,.21,D));h.position.z=-.2,r.add(h);let d=new Ze;r.add(d);let u=new Ze;u.rotation.order="YXZ",d.add(u);let f=new Ze;u.add(f);let g=new Ze;g.rotation.order="YXZ",g.position.y=.12,f.add(g);let y=new Ze;f.add(y);let m=new Ze;g.add(m);let p=new Ze;p.position.set(0,.62,-.28),g.add(p);let b=new Ze;b.rotation.order="YXZ",b.position.y=.66,g.add(b);let v=new Ze;v.rotation.order="YXZ",b.add(v);let _=new Ze;_.position.y=qe*.9,v.add(_);let C=me(new it(qe,48,36),16777215);xt(C,1.06,.95,1),_.add(C);let T=new Ze;T.scale.set(1.06,.95,1),_.add(T);let A=new Ze;_.add(A);for(let w of[-1,1]){let D=me(new it(.13,16,12),16777215);xt(D,.55,.9,.7),A.add(Se(D,w*qe*1.03,-.04,0))}let L=me(new it(.085,18,14),16777215,{thin:!0});xt(L,1.1,.9,.9);let ee=Jo(0,-.14,qe*.99);T.add(Se(L,ee.x,ee.y,ee.z));let x=new Ut({transparent:!0,depthWrite:!1}),S=new Ye(Cp(qe+.006,ru),x);S.renderOrder=1,T.add(S);let q=new Ut({transparent:!0,depthWrite:!1}),z=new Ye(Cp(qe+.035,1.12),q);z.visible=!1,z.renderOrder=2,T.add(z);let R=[];for(let w of[-1,1]){let D=Jo(w*Pt.lon,Pt.lat,qe*.93),$=new Ze;$.position.copy(D),$.lookAt(D.clone().multiplyScalar(3)),T.add($);let O=new Ze;O.scale.set(1,1.08,.62),$.add(O);let B=me(new it(Pt.r,28,20),16777215,{thin:!0});O.add(B);let U=new Ye(new it(Pt.r*.44,18,14),new Ut({color:1906248}));U.scale.z=.5,O.add(U);let ie=new Ye(new it(Pt.r*.13,10,8),new Ut({color:16777215}));O.add(ie);let Y=new Ze;O.add(Y);let _e=me(new it(Pt.r*1.08,28,14,0,Math.PI*2,0,Math.PI/2),16777215,{thin:!0});Y.add(_e),R.push({g:$,inner:O,white:B,pupil:U,shine:ie,lidPivot:Y,lid:_e,sx:w,px:0,py:0,wx:0,wy:0})}let k=new Ze;{let w=Jo(0,-.36,qe*.985);k.position.copy(w),k.lookAt(w.clone().multiplyScalar(3));let D=me(new it(.13,24,16),5903396,{thin:!0});D.scale.set(1.25,1,.35),k.add(D);let $=new Ye(new it(.08,16,12),new Ut({color:16743315}));$.scale.set(1.2,.6,.3),$.position.set(0,-.06,.03),k.add($);let O=new Ye(new zt(.12,.045,.02),new Ut({color:16777215}));O.position.set(0,.095,.045),k.add(O),k.userData.hole=D,k.visible=!1,T.add(k)}let N=!1,Z=0,V=new Ze;T.add(V);let xe=new Ze;_.add(xe);let pe=new or(new Ri({transparent:!0,depthTest:!1,depthWrite:!1}));pe.scale.set(.5,.5,1),pe.position.set(.66,qe+.5,.3),pe.visible=!1,_.add(pe);let G=Zo([[0,.72],[.18,.71],[.3,.64],[.38,.5],[.43,.3],[.455,.12],[.46,-.02]],36),re=me(G,16777215);g.add(re);let Ue=Zo([[.462,.14],[.47,0],[.45,-.12],[.38,-.2],[.22,-.25],[0,-.26]],36),ne=me(Ue,16777215);f.add(ne);let he=me(new dt(.13,.15,.16,16),16777215,{thin:!0});Se(he,0,.72,0),g.add(he);let ye={},Te=.32,We=.3,Ve=.3,Be=.28;for(let w of["L","R"]){let D=w==="L"?-1:1,$=new Ze;$.rotation.order="ZXY",$.position.set(D*.36,.5,0),g.add($);let O=new Ze;O.rotation.order="ZXY",O.position.y=-Te,$.add(O);let B=new Ze;B.position.y=-We,O.add(B);let U=new Ze;U.position.y=-.1,B.add(U);let ie=me(new it(.135,20,16),16777215,{thin:!0});xt(ie,1,1.1,.85),U.add(ie);let Y=me(new hi(.045,.08,4,10),16777215,{thin:!0});Se(Y,-D*.12,.04,.03),Y.rotation.z=-D*.8,U.add(Y);let _e=me(new ft(.1,.035,8,18),16777215,{thin:!0});_e.rotation.x=Math.PI/2,_e.position.y=.08,U.add(_e);let Ge=new or(new Ri({transparent:!0,depthWrite:!1}));Ge.scale.set(.56,.56,1),Ge.position.set(0,-.12,.2),Ge.visible=!1,U.add(Ge),ye["arm"+w]=$,ye["fore"+w]=O,ye["wrist"+w]=B,ye["prop"+w]=Ge,ye["hand"+w]={palm:ie,thumb:Y,cuff:_e}}for(let w of["L","R"]){let D=w==="L"?-1:1,$=new Ze;$.rotation.order="ZXY",$.position.set(D*.2,-.08,0),f.add($);let O=new Ze;O.rotation.order="ZXY",O.position.y=-Ve,$.add(O);let B=new Ze;B.position.y=-Be,O.add(B);let U=me(new it(.2,22,16),16777215);xt(U,.95,.62,1.35),Se(U,D*.02,-.08,.08),B.add(U);let ie=me(new dt(.17,.19,.05,20),16777215,{thin:!0});xt(ie,1,1,1.4),Se(ie,D*.02,-.18,.09),B.add(ie),ye["leg"+w]=$,ye["shin"+w]=O,ye["ankle"+w]=B,ye["shoe"+w]=U,ye["sole"+w]=ie}let He=new Ze;He.position.set(0,.02,-.4),f.add(He);let se={},I=(w,D)=>{let $=fr(16777215),O=new Ye(new hr(new lr(new H,new H(0,-.1,0),new H(0,-.2,0)),4,D,8),$);O.castShadow=!0;let B=new Ye(O.geometry,iu);d.add(O,B),se[w]={m:O,o:B,r:D,mat:$,len:1}};for(let w of["L","R"])I("arm"+w,.082),I("sleeve"+w,.118),I("leg"+w,.105),I("pant"+w,.14);let le=$o.tron,de={skin:"tron",head:""},ge="",we=!1,ke=[],Ae=(w,D)=>w.userData.mesh.material.color.set(D);function P(w){let D={skin:$o[w?.skin]?w.skin:"tron",head:w?.head||""},$=D.skin+"|"+D.head;if($===ge)return;ge=$,de=D,le=$o[de.skin];let O=le.extra||{};for(let B of[C,L,he,...A.children])Ae(B,le.skin);for(let B of R)Ae(B.lid,le.skin);Ae(re,O.aodai||le.top),Ae(ne,O.dress||le.bottom);for(let B of["L","R"]){let U=le.gloves||le.skin;Ae(ye["hand"+B].palm,U),Ae(ye["hand"+B].thumb,U),Ae(ye["hand"+B].cuff,le.gloves?le.gloves:le.sleeve>=.95?O.coat||le.top:le.skin),ye["hand"+B].cuff.visible=!!le.gloves||le.sleeve>=.95,Ae(ye["shoe"+B],le.shoes),Ae(ye["sole"+B],"#ffffff"),se["arm"+B].mat.color.set(le.gloves&&le.sleeve>=.95?O.coat||le.top:le.arms||le.skin),se["sleeve"+B].mat.color.set(O.coat||O.aodai||le.top),se["sleeve"+B].len=Math.max(.12,le.sleeve??.3),se["leg"+B].mat.color.set(le.legs||le.skin),se["pant"+B].mat.color.set((O.aodai,le.bottom)),se["pant"+B].len=O.dress?.001:Math.max(.12,le.pants??1)}Le(),de.head?M(de.head):z.visible=!1,be="",Xe()}function M(w){let D=new Image;/^https?:/.test(w)&&(D.crossOrigin="anonymous"),D.onload=()=>{try{let $=document.createElement("canvas");$.width=$.height=256;let O=$.getContext("2d");O.beginPath(),O.arc(128,128,124,0,Math.PI*2),O.clip();let B=Math.min(D.width,D.height);O.drawImage(D,(D.width-B)/2,(D.height-B)/2,B,B,0,0,256,256);let U=new Wn($);U.colorSpace=Bt,q.map?.dispose(),q.map=U,q.needsUpdate=!0,z.visible=!0,be="",Xe()}catch{z.visible=!1}},D.onerror=()=>{z.visible=!1},D.src=w}function X(w){for(;w.children.length;)w.children.pop().traverse($=>{$.isMesh&&!wp.has($.material)&&($.geometry.dispose(),$.material.dispose())})}let J=(w,D,$={})=>me(new it(w,24,18),D,$);function oe(w,D=1.15,$=-.3,O=1.07,B=2.1){let U=new Ze;return U.add(yt(me(new it(qe*O,36,20,0,Math.PI*2,0,D),w),$,0,0)),U.add(me(new it(qe*(O-.012),36,20,Math.PI,Math.PI,0,B),w)),U}function ae(w,D){let $=new Ze,O=B=>($.add(B),B);switch(w){case"ahoge":{O(oe(D)),O(yt(xt(Se(J(.3,D),.14,.43,.36),1.25,.42,.75),.4,0,-.35)),O(yt(xt(Se(J(.3,D),-.32,.38,.28),.65,.45,.7),.3,0,.5));let B=me(new ft(.15,.04,8,18,Math.PI*1.25),D,{thin:!0});Se(B,.05,qe+.1,0),B.rotation.z=.5,B.name="ahoge",O(B);break}case"short":O(oe(D,1.05,-.25)),O(yt(xt(Se(J(.3,D),0,.45,.32),1.5,.35,.7),.45,0,0));break;case"spiky":{O(oe(D,1.1,-.25));for(let B=0;B<7;B++){let U=(B/6-.5)*2.2,ie=me(new Ht(.12,.34,10),D,{thin:!0});Se(ie,Math.sin(U)*.42,.52+Math.cos(U)*.1,Math.cos(U)*.12-.05),ie.rotation.set(-.3,0,-U*.55),O(ie)}break}case"messy":{O(oe(D,1,-.2));for(let[B,U,ie,Y]of[[-.5,.25,0,.22],[.5,.25,0,.22],[-.3,.52,-.1,.24],[.3,.52,-.1,.24],[0,.62,0,.24],[-.55,-.05,-.15,.18],[.55,-.05,-.15,.18],[0,.4,-.45,.26]])O(Se(J(Y,D),B,U,ie));break}case"slick":O(oe(D,1.15,-.45)),O(yt(xt(Se(J(.3,D),.05,.47,.25),1.55,.42,1),.2,0,.12));break;case"bob":case"long":case"wavy":case"pigtails":case"bun":{if($.add(me(new it(qe*1.1,36,20,Math.PI/2+.8,Math.PI*2-1.6,0,w==="long"||w==="wavy"?2.35:2),D)),O(yt(xt(Se(J(.3,D),0,.42,.38),1.6,.42,.7),.4,0,0)),O(oe(D,1,-.15,1.09)),w==="long"&&O(xt(Se(J(.42,D),0,-.45,-.32),1.25,1.2,.6)),w==="wavy")for(let B of[-1,1])for(let U=0;U<3;U++)O(Se(J(.17,D),B*(.58-U*.05),-.25-U*.2,-.05-U*.05));if(w==="pigtails")for(let B of[-1,1])O(Se(J(.24,D),B*.72,.2,-.12)),O(Se(J(.08,16727435,{thin:!0}),B*.6,.36,-.1));w==="bun"&&O(Se(J(.26,D),0,.42,-.5));break}case"mohawk":for(let B=0;B<5;B++){let U=me(new Ht(.11,.4,8),D,{thin:!0});Se(U,0,.6-Math.abs(B-2)*.05,.3-B*.2),U.rotation.x=-.3-B*.25,O(U)}break;default:break}return $}function Oe(w,D){let $=new Ze,O=U=>($.add(U),U),B=D.hatColor||"#ff3d4f";switch(w){case"nonla":O(Se(me(new Ht(1.05,.55,40,1,!0),15914122,{mat:fr(15914122,{side:Dt})}),0,qe*.86,0));break;case"ninja":{O(oe(B,1.55,-.65,1.04,2.4)),O(me(new it(qe*1.035,36,16,Math.PI/2-1.3,2.6,1.82,.85),B));let U=me(new ft(qe*1.05,.06,10,40),16727375,{thin:!0});U.rotation.x=Math.PI/2-.12,U.position.y=.26,O(U);for(let ie of[.2,-.15])O(yt(Se(me(new zt(.08,.05,.45),16727375,{thin:!0}),.2+ie,.2,-qe-.14),.5,ie,.3));break}case"bubble":{O(new Ye(new it(qe*1.42,32,24),new Ut({color:12576511,transparent:!0,opacity:.18,depthWrite:!1})));let U=me(new ft(.52,.09,10,30),14672885);U.rotation.x=Math.PI/2,U.position.y=-qe*.92,O(U),O(Se(J(.06,16727375,{thin:!0}),.55,.7,0));break}case"helmet":{O(yt(me(new it(qe*1.13,36,18,0,Math.PI*2,0,1.35),B),-.2,0,0)),O(yt(Se(me(new dt(.03,.03,.5,6),1906248,{outline:!1}),0,-.48,.25),.5,0,Math.PI/2)),O(Se(xt(J(.06,16777215,{thin:!0}),1,1,.5),0,.7,.28));break}case"fullhelmet":{O(yt(me(new it(qe*1.15,36,20,0,Math.PI*2,0,1.55),B),-.35,0,0)),O(me(new it(qe*1.14,36,20,Math.PI,Math.PI,0,2.3),B)),O(yt(xt(Se(J(.3,1906248),0,.42,.42),1.4,.3,.6),.6,0,0));break}case"cap":case"capBack":{O(yt(me(new it(qe*1.1,36,18,0,Math.PI*2,0,1.2),B),-.15,0,0));let U=me(new dt(.42,.42,.04,28,1,!1,-Math.PI/2,Math.PI),B);w==="cap"?Se(U,0,.32,.45):(Se(U,0,.32,-.45),U.rotation.y=Math.PI),U.rotation.x+=w==="cap"?.12:-.12,O(U),w==="cap"&&O(Se(xt(J(.08,16763197,{thin:!0}),1,1,.4),0,.55,.52));break}case"chef":{O(Se(me(new dt(.5,.5,.36,28),16777215),0,.62,-.05));for(let[U,ie]of[[-.25,0],[.25,0],[0,.2],[0,-.2],[0,0]])O(Se(J(.3,16777215),U,.98,ie-.05));break}case"crown":{let U=me(new dt(.38,.34,.22,10,1,!0),16763197,{mat:fr(16763197,{side:Dt})});Se(U,0,.66,0),O(U);for(let ie=0;ie<5;ie++){let Y=ie/5*Math.PI*2;O(Se(me(new Ht(.08,.2,8),16763197,{thin:!0}),Math.sin(Y)*.34,.86,Math.cos(Y)*.34))}O(Se(J(.06,16727375,{thin:!0}),0,.68,.38));break}case"tiara":{let U=me(new ft(.4,.03,8,30,Math.PI),16769162,{thin:!0});Se(U,0,.5,.1),U.rotation.x=-.4,O(U),O(Se(me(new Ht(.08,.22,4),16769162,{thin:!0}),0,.72,.28)),O(Se(J(.05,16740277,{thin:!0}),0,.62,.36));break}case"tricorn":{O(yt(me(new it(qe*1.08,32,16,0,Math.PI*2,0,1.15),B),-.1,0,0));let U=new $n;U.moveTo(-.95,0),U.quadraticCurveTo(-.7,.62,0,.7),U.quadraticCurveTo(.7,.62,.95,0),U.quadraticCurveTo(0,.18,-.95,0);let ie=me(new Pi(U,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),B);Se(ie,0,.42,-.06),ie.rotation.x=-.12,O(ie),O(Se(xt(J(.1,16777215,{thin:!0}),1,1,.35),0,.82,.1));let Y=me(new ft(.06,.02,6,12),16763197,{outline:!1});Se(Y,0,.82,.14),O(Y);break}case"santa":{let U=me(new Ht(.58,1,28),15217738);Se(U,.12,.92,-.08),U.rotation.z=-.45,O(U);let ie=me(new ft(.58,.12,12,30),16777215);ie.rotation.x=Math.PI/2-.1,ie.position.y=.48,O(ie),O(Se(J(.14,16777215),.62,1.22,-.08));break}case"fire":{O(yt(me(new it(qe*1.14,36,18,0,Math.PI*2,0,1.3),B),-.15,0,0));let U=me(new dt(.85,.85,.05,32),B);U.position.set(0,.28,-.12),U.rotation.x=-.18,O(U),O(Se(xt(J(.13,16763197,{thin:!0}),1,1.2,.35),0,.62,.48));break}case"band":{let U=me(new ft(qe*1.05,.065,10,40),B,{thin:!0});U.rotation.x=Math.PI/2-.15,U.position.y=.3,O(U);break}case"mirror":{let U=me(new ft(qe*1.05,.04,8,40),1906248,{thin:!0});U.rotation.x=Math.PI/2-.2,U.position.y=.3,O(U);let ie=me(new dt(.15,.15,.04,24),14674175);ie.rotation.x=Math.PI/2-.2,ie.position.set(0,.5,.52),O(ie);break}case"turban":{let U=me(new ft(qe*.95,.13,12,36),B);U.rotation.x=Math.PI/2-.1,U.position.y=.32,O(U),O(oe(B,.9,-.1,1.04));break}case"veil":{let U=new Ye(new it(qe*1.2,32,18,Math.PI/2+.95,Math.PI*2-1.9,.3,2.5),new Ut({color:16777215,transparent:!0,opacity:.6,side:Dt,depthWrite:!1}));U.scale.set(1.05,1.15,1.1),U.position.y=-.12,O(U),O(Se(J(.08,16761564,{thin:!0}),-.35,.5,.25)),O(Se(J(.07,16777215,{thin:!0}),-.25,.56,.3));break}case"phones":{let U=me(new ft(qe*1.1,.05,8,30,Math.PI),B,{thin:!0});U.position.y=.05,O(U);for(let ie of[-1,1]){let Y=me(new dt(.2,.2,.14,22),B);Y.rotation.z=Math.PI/2,Y.position.set(ie*qe*1.05,.02,0),O(Y),O(Se(yt(me(new dt(.12,.12,.02,18),3729568,{outline:!1}),0,0,Math.PI/2),ie*qe*1.13,.02,0))}break}case"scarfHead":{O(yt(me(new it(qe*1.1,36,18,0,Math.PI*2,0,1.3),B),-.45,0,0)),O(yt(Se(me(new Ht(.12,.3,10),B,{thin:!0}),0,.15,-.68),-2.2,0,0));break}case"beanie":{O(yt(me(new it(qe*1.1,36,18,0,Math.PI*2,0,1.35),B),-.15,0,0));let U=me(new ft(qe*.98,.09,10,36),B);U.rotation.x=Math.PI/2-.15,U.position.y=.22,O(U),O(Se(J(.15,16777215),0,.82,-.05));break}case"hood":{let U=me(new it(qe*1.16,40,24,Math.PI/2+.95,Math.PI*2-1.9,0,2.6),B);O(U),O(me(new it(qe*1.16,40,20,0,Math.PI*2,0,.95),B));let ie=me(new ft(qe*.86,.07,10,36),B);ie.position.z=.42,ie.scale.set(1,1.1,1),O(ie);let Y=D.hood;for(let _e of[-1,1])Y==="bear"&&(O(Se(J(.2,B),_e*.5,.55,-.05)),O(Se(xt(J(.11,15913641,{outline:!1}),1,1,.4),_e*.52,.56,.1))),Y==="cat"&&O(yt(Se(me(new Ht(.2,.36,4),B),_e*.38,.7,0),0,0,-_e*.4)),Y==="dog"&&O(yt(xt(Se(J(.2,11036974),_e*.66,.1,0),.7,1.6,.5),0,0,_e*.3)),Y==="frog"&&(O(Se(J(.2,B),_e*.3,.68,.1)),O(Se(J(.12,16777215,{thin:!0}),_e*.3,.72,.24)),O(Se(J(.06,1906248,{outline:!1}),_e*.3,.73,.34)));if(Y==="dino")for(let _e=0;_e<5;_e++){let Ge=me(new Ht(.11,.26,4),16763197,{thin:!0}),je=.4-_e*.45;Se(Ge,0,Math.cos(je)*.72,Math.sin(je)*.72),Ge.rotation.x=je,O(Ge)}break}default:break}return $}function Ce(w,D){let $=new Ze,O=U=>($.add(U),U),B=(U,ie,Y=qe)=>Jo(U,ie,Y);for(let U of w||[]){if(U==="glasses"){for(let ie of[-1,1]){let Y=B(ie*Pt.lon,Pt.lat,qe*1.12),_e=me(new ft(.19,.022,8,28),1906248,{outline:!1});Se(_e,Y.x,Y.y,Y.z),_e.lookAt(Y.clone().multiplyScalar(3)),O(_e)}O(Se(me(new dt(.018,.018,.2,6),1906248,{outline:!1}),0,Pt.lat*qe*.95+.02,qe*1.1)).rotation.z=Math.PI/2}if(U==="shades"){let ie=me(new ui(.98,.24,.1,3,.05),1314862),Y=B(0,Pt.lat,qe*1.06);Se(ie,0,Y.y,Y.z),O(ie),O(Se(xt(J(.05,16777215,{outline:!1}),1.8,.6,.3),-.3,Y.y+.04,Y.z+.06))}if(U==="mustache"||U==="curly"){let ie=D.hair==="#eeeef5"?"#eeeef5":"#2a1a14";for(let Y of[-1,1]){let _e=B(Y*.12,-.24,qe*1),Ge=xt(J(.1,ie,{thin:!0}),1.5,.6,.6);if(Se(Ge,_e.x,_e.y,_e.z),Ge.rotation.z=Y*.3,O(Ge),U==="curly"){let je=me(new ft(.06,.025,6,12,Math.PI*1.5),ie,{thin:!0});Se(je,_e.x+Y*.14,_e.y+.05,_e.z-.02),je.rotation.z=Y>0?0:Math.PI,O(je)}}}if(U==="beard"){let ie=D.beard||"#eeeef5",Y=me(new it(qe*.82,32,18,Math.PI/2-1.1,2.2,1.85,1.05),ie);Y.position.set(0,-.06,.12),O(Y),O(xt(Se(J(.26,ie),0,-.62,.32),1.2,.9,.7))}if(U==="patch"){let ie=B(Pt.lon,Pt.lat,qe*1.06),Y=me(new dt(.17,.17,.04,20),1314862,{thin:!0});Se(Y,ie.x,ie.y,ie.z),Y.lookAt(ie.clone().multiplyScalar(3)),Y.rotateX(Math.PI/2),O(Y)}}return $}function Le(){X(V),X(m),X(p),X(y);let w=le,D=w.extra||{},$=!!de.head,O=w.hat==="hood";(!$||O)&&V.add(ae(w.hairStyle,w.hair)),w.hat&&V.add(Oe(w.hat,w));let B=(w.face||[]).filter(Y=>["glasses","shades","mustache","curly","beard","patch"].includes(Y));$||V.add(Ce(B,w)),ke=w.face||[],we=B.includes("shades")||$,A.visible=!O&&!["helmet","fullhelmet","ninja","fire","phones","scarfHead","beanie"].includes(w.hat);let U=Y=>(m.add(Y),Y),ie=Y=>(y.add(Y),Y);if(D.dress&&(ie(Se(me(Zo([[.44,.12],[.5,-.05],[.62,-.3],[.7,-.45],[0,-.45]],36),D.dress),0,0,0)),ie(Se(me(new ft(.68,.035,8,40),D.dress,{thin:!0}),0,-.45,0)).rotation.x=Math.PI/2),D.aodai){for(let Y of[1,-1]){let _e=me(new ui(.5,.62,.04,3,.02),D.aodai,{thin:!0});Se(_e,0,-.36,Y*.37),_e.rotation.x=Y*.28,U(_e)}U(Se(me(new dt(.15,.16,.12,18),D.aodai,{thin:!0}),0,.72,0))}if(D.coat){let Y=me(Zo([[.34,.66],[.44,.5],[.49,.28],[.51,.05],[.54,-.2],[.57,-.45]],36,Math.PI/2+.42,Math.PI*2-.84),D.coat,{outline:!1,mat:fr(D.coat,{side:Dt})});U(Y);for(let _e of[-1,1])U(yt(Se(me(new zt(.16,.3,.03),D.coat,{thin:!0}),_e*.2,.52,.36),-.5,0,_e*.5))}if(D.vest)for(let Y of[-1,1])U(yt(Se(me(new zt(.2,.62,.05),D.vest,{thin:!0}),Y*.27,.32,.4),.05,Y*.4,0));if(D.apron){U(Se(me(new ui(.56,.78,.04,3,.02),D.apron),0,.12,.45)).rotation.x=-.1;let Y=me(new ft(.3,.02,6,24,Math.PI),D.apron,{thin:!0});Y.position.set(0,.5,.28),Y.rotation.x=-.6,U(Y)}if(D.tie&&(U(yt(Se(me(new zt(.1,.36,.04),D.tie,{thin:!0}),0,.46,.38),-.2,0,0)),U(Se(me(new Ht(.07,.1,4),D.tie,{thin:!0}),0,.25,.43)).rotation.x=Math.PI),D.scarf){let Y=me(new ft(.2,.08,10,24),D.scarf);Y.rotation.x=Math.PI/2,Y.position.y=.68,U(Y),U(yt(Se(me(new ui(.13,.32,.05,2,.02),D.scarf,{thin:!0}),.12,.5,.3),-.35,0,.25))}if(D.collar){let Y=me(new dt(.45,.22,.4,24,1,!0,Math.PI*.75,Math.PI*1.5),D.collar,{mat:fr(D.collar,{side:Dt})});Y.position.set(0,.86,-.04),U(Y)}if(D.pack&&U(Se(me(new ui(.56,.6,.28,3,.1),D.pack),0,.32,-.44)),D.box&&(U(Se(me(new ui(.82,.74,.5,3,.06),D.box),0,.42,-.62)),U(Se(me(new zt(.4,.06,.02),16777215,{outline:!1}),0,.5,-.36))),D.belly&&U(xt(Se(J(.3,D.belly,{outline:!1}),0,.2,.33),1,1.15,.45)),D.chain){let Y=me(new ft(.24,.025,8,30),16763197,{thin:!0});Y.position.set(0,.56,.18),Y.rotation.x=Math.PI/2-.9,U(Y),U(Se(J(.06,16763197,{thin:!0}),0,.37,.4))}if(D.star){let Y=new $n;for(let _e=0;_e<10;_e++){let Ge=_e/10*Math.PI*2-Math.PI/2,je=_e%2?.07:.16;Y[_e?"lineTo":"moveTo"](Math.cos(Ge)*je,-Math.sin(Ge)*je)}U(Se(me(new Pi(Y,{depth:.04,bevelEnabled:!1}),D.star,{thin:!0}),0,.36,.42))}if(D.badge&&(U(Se(me(new dt(.07,.07,.03,16),16763197,{thin:!0}),.2,.42,.4)).rotation.x=Math.PI/2),D.whistle&&(U(Se(me(new hi(.04,.08,4,8),14672885,{thin:!0}),-.16,.38,.42)).rotation.z=Math.PI/2),D.belt){let Y=me(new ft(.455,.045,8,40),D.belt,{thin:!0});Y.rotation.x=Math.PI/2,Y.position.y=0,U(Y)}if(D.cape){let Y=me(new dt(.4,.7,1.3,24,6,!0,Math.PI*.6,Math.PI*.8),D.cape,{mat:fr(D.cape,{side:Dt})});Y.position.set(0,-.62,.22),p.add(Y)}}let Me=null,te=null;function ce(w){if(w===Me)return;Me=w,X(xe);let D=($,O,B,U,ie=0,Y=0)=>{$.position.set(O,B,U),$.rotation.set(Y,0,ie),xe.add($)};for(let $ of[-1,1]){if(w==="dog"&&D(xt(J(.2,13208402),.75,1.6,.45),$*.66,0,.05,$*.25),w==="cat"&&D(me(new Ht(.2,.36,4),13208402),$*.38,.66,0,-$*.45),w==="bunny"){let O=me(new hi(.11,.5,6,12),16777215);D(O,$*.22,.95,-.05,-$*.18)}w==="mouse"&&D(me(new dt(.26,.26,.06,24),12171721),$*.55,.5,-.05,0,Math.PI/2),w==="horns"&&D(me(new Ht(.09,.32,12),15921382),$*.36,.66,0,-$*.55),w==="antenna"&&(D(me(new dt(.02,.02,.45,6),1906248,{outline:!1}),$*.26,.82,0,-$*.35),D(J(.09,16763197),$*.35,1.02,0))}}function Ne(w){if(w!==te){if(te=w,X(He),w==="dog"){let D=new hi(.08,.3,6,12);D.translate(0,.2,0);let $=me(D,13208402);$.rotation.x=-.7,He.add($)}if(w==="cat"&&He.add(me(new hr(new ea([new H(0,0,0),new H(0,.15,-.35),new H(0,.55,-.5),new H(.1,.8,-.35)]),24,.06,8),13208402)),w==="pig"){let D=me(new ft(.1,.04,8,20,Math.PI*1.7),16753592);D.rotation.y=Math.PI/2,He.add(D)}if(w==="dino"){let D=me(new Ht(.28,1,16),3129201);D.rotation.x=-Math.PI/2-.5,D.position.set(0,-.15,-.35),He.add(D)}}}let be="",fe={},$e={happy:!0,love:!0};function Xe(){let w=fe.face||"neutral",D=z.visible,$=!D&&!we&&!$e[w],O=w==="cheeky";for(let U of R)U.g.visible=$&&!(O&&U.sx<0);let B=`${w}|${$}|${D}|${ke.join(",")}|${we}|${N}`;B!==be&&(be=B,x.map=EM(B,D?"":AM(w,{eyes3D:$||we,wink:O,extras:ke,noMouth:N})),x.needsUpdate=!0),S.visible=!D,L.visible=!D,D&&w!=="neutral"&&Yo[w]?(pe.material.map=Tp(Yo[w]),pe.material.needsUpdate=!0,pe.visible=!0):pe.visible=!1}let st=new Map;function F(w,D,$=.16,O=.72){let B=st.get(w);return B||(B={v:0,x:D},st.set(w,B)),B.v=(B.v+(D-B.x)*$)*O,B.x+=B.v,B.x}let Re=w=>st.get(w)?.v||0,j=null,ue=null,Ie=0;function De(w){let D=JSON.stringify({...fe,fx:0})!==JSON.stringify({...w,fx:0});fe={...w},D&&(Ie=performance.now()),ce(w.ears||null),Ne(w.tail||null);for(let $ of["L","R"]){let O=w["prop"+$],B=ye["prop"+$];O&&qo[O]?(B.material.map=Tp(qo[O]),B.material.needsUpdate=!0,B.visible=!0):B.visible=!1}w.fx&&w.fx.seq!==ue&&(ue=w.fx.seq,Date.now()-(w.fx.at||0)<4e3&&(j={name:w.fx.name,t0:performance.now()})),Xe()}function nt(w){let D={x:0,y:0,r:0};if(!w)return D;let $=/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(w);$&&(D.x=+$[1],D.y=+$[2]);let O=/rotate\(([-\d.]+)deg\)/.exec(w);return O&&(D.r=+O[1]),D}let _t=new H,Vt=new H,rt=new H,Ot=new H,xn=new H;function qn(w,D){return D.setFromMatrixPosition(w.matrixWorld),d.worldToLocal(D)}function cs(w,D,$,O,B){xn.copy(D).add(O).multiplyScalar(.5),Ot.copy($).multiplyScalar(2).sub(xn),Ot.lerp($,.25);let U=new lr(D.clone(),Ot.clone(),O.clone()),ie=se[w],Y=new hr(U,16,ie.r,10);ie.m.geometry.dispose(),ie.m.geometry=Y,ie.o.geometry=Y;let _e=se[B];if(_e.len<.01){_e.m.visible=_e.o.visible=!1;return}_e.m.visible=_e.o.visible=!0;let Ge=new hr(new nu(U,0,Math.min(1,_e.len)),10,_e.r,10);_e.m.geometry.dispose(),_e.m.geometry=Ge,_e.o.geometry=Ge}let rn=0,Fn=0,hs=!0,pr=0,Li=performance.now()+2200,us=0,Di=0,ds=0,fs=new ResizeObserver(()=>ua());fs.observe(n);function ua(){let w=n.getBoundingClientRect();if(!w.width||!w.height||w.width===rn&&w.height===Fn)return;rn=w.width,Fn=w.height,t.setSize(rn,Fn,!1),s.aspect=rn/Fn;let D=l?1.25:.75;s.position.z=rn/Fn<D?a.z/Math.max(.5,rn/Fn/D):a.z,s.updateProjectionMatrix()}function da(w){if(!hs)return;if(!i.isConnected){K();return}pr=requestAnimationFrame(da),ua();let D=w/1e3,$=ha[fe.body]||ha.stand,O=nt($.t),B=fe.loop,U=(Ee,at=0)=>Math.sin(D*Math.PI*2*Ee+at),ie=PM[fe.body]||{},Y=ie.x??O.x*Sp,_e=ie.y??Rp-O.y*Sp,Ge=-O.r*yn,je=0,Gt=0,et=fe.body==="crawl";et&&(Ge=0,Gt=68*yn,je=-1),fe.body==="lie"&&(je=.25);let Fe=0,mt=N?F("talk",Z,.45,.5):0;!B&&!j&&(Fe=Math.abs(U(.55))*.025),B==="walk"&&(Fe=Math.abs(U(1.3))*.1,Ge+=U(1.3)*.08),B==="run"&&(Fe=Math.abs(U(2.4))*.22,Gt+=.25),B==="butt"&&(Y+=U(2.9)*.14,Ge+=U(2.9)*.16,je+=U(2.9)*.2),B==="dance"&&(Ge+=U(1)*.2,Y+=U(1)*.12,Fe=Math.abs(U(2))*.12),B==="shiver"&&(Y+=U(11)*.03),B==="row"&&(Ge+=U(.5)*.08),B==="flap"&&(Fe=Math.abs(U(3))*.06);let tt=0,sn=0,Cn=0,Wt=0;if(j){let Ee=(w-j.t0)/1e3;if(j.name==="jump")if(Ee<.95){let at=Math.min(1,Math.max(0,(Ee-.12)/.7));tt=Math.sin(at*Math.PI)*1.2,Wt=Ee<.12?-.18*Math.sin(Ee/.12*Math.PI):at>=1?-.15*Math.sin((Ee-.82)/.13*Math.PI):.1*Math.sin(at*Math.PI)}else j=null;else if(j.name==="spin")Ee<.9?(sn=(1-Math.pow(1-Ee/.9,3))*Math.PI*2,tt=Math.sin(Ee/.9*Math.PI)*.3):j=null;else if(j.name==="fall")Ee<1.8?Cn=Math.min(1,Ee/.35)*(Ee>1.4?(1.8-Ee)/.4:1)*1.45:j=null;else if(j.name==="bounce")if(Ee<1.1){let at=Ee*Math.PI*3.6;tt=Math.abs(Math.sin(at))*.32*(1-Ee/1.1),Wt=(Math.abs(Math.sin(at))<.3?-.14:.06)*(1-Ee/1.1)}else j=null}if(N){Fe+=mt*.1;let Ee=Math.max(.06,Math.min(1,mt*1.6));k.scale.set(.8+Ee*.35,.2+Ee*1.1,1)}d.rotation.y=F("turn",IM[fe.turn]??0,.12,.74);let ps=F("hy",_e+Fe,.18,.7);u.position.set(F("hx",Y),ps+tt,0),u.rotation.set(F("hrx",Gt),F("hry",je)+sn,F("hrz",Ge)+Cn),Cn&&(u.position.x+=Math.sin(Cn)*.75);let vt=Ie?Math.exp(-(w-Ie)/160)*Math.sin((w-Ie)/45)*.07:0,Bn=Math.max(-.2,Math.min(.2,Re("hy")*1.6+Wt+vt)),Ni=F("sq",Bn,.3,.6);f.scale.set(1-Ni*.6,1+Ni,1-Ni*.6);let Kt=0,ki=0;Kt=-nt($.torso).r*yn,fe.body==="bow"&&(ki=.85),B==="run"&&(ki+=.15);let mr=B?1:1+U(.4)*.02;g.rotation.set(F("trx",ki,.12,.74),0,F("trz",Kt,.12,.74)),g.scale.set(1/mr,mr,1/mr),h.visible=!!$.stool,p.rotation.x=F("cape",.15+Math.min(.9,Math.abs(Re("hx"))*6+(B==="run"?.8:0)+(tt?.5:0))+U(.7)*.05,.1,.8);let ms=-((jh[fe.head]??0)+(et?0:$.head||0))*yn,gr=et?-1:0,Qo=0;fe.head==="up"&&(gr=-.38),(fe.head==="down"||$.headDown&&(!fe.head||fe.head==="center"))&&(gr=.38),fe.body==="bow"&&(gr-=.3),B||(ms+=U(.3)*.07,Qo+=U(.17)*.12),N&&(gr-=mt*.35,ms+=Math.sin(D*7.3)*mt*.12),B==="nod"&&(gr+=U(2.5)*.3),B==="shake"&&(Qo+=U(2.2)*.6),B==="dance"&&(ms+=U(2)*.18),B==="walk"&&(ms+=U(1.3)*.06),b.rotation.set(F("nx",gr,.14,.72),F("ny",Qo,.14,.72),F("nz",ms,.14,.72)),v.rotation.set(F("jx",-Re("hy")*2.2+Re("trx")*2,.22,.62),0,F("jz",Re("hx")*2.5-Re("hrz")*1.6,.22,.62));for(let Ee of["L","R"]){let at=Ee==="L"?1:-1,At=fe["arm"+Ee]||"down",_n=Ee==="L"?0:1,Mt,It,Tt=0,Lt=0;if(et&&At==="down")Mt=6*at,It=0,Tt=-68;else if($.absArms&&At==="down")Mt=$.absArms[_n][0],It=$.absArms[_n][1];else{let Oi=RM[At]||la[At]||la.down;Mt=Oi[0]*at,It=Oi[1]*at;let Rn=CM[At];Rn&&(Tt=Rn[0],Lt=Rn[1])}At==="down"&&!B&&!et&&(Mt+=6*at+U(.55,_n)*3*at);let an=Ee==="L"?0:Math.PI;if(B==="walk"&&(Tt+=U(1.3,an)*32),B==="run"&&(Tt+=U(2.4,an)*60,Lt-=70),B==="dance"&&(Mt+=(U(2,an)*30+30)*at,Lt-=30),B==="flap"&&(Mt+=(.5+.5*U(3))*75*at,It-=U(3)*20*at),B==="swim"&&(Tt+=(D*360*.9+(Ee==="L"?0:180))%360*-1),B==="clap"&&(Tt+=-72,Mt+=(Ee==="L"?-1:1)*(14+U(3.5)*14),Lt-=20),B==="punch"){let Oi=Math.max(0,U(2,an));Tt+=-88*Oi,Lt+=-80*(1-Oi)}B==="row"&&(Tt+=U(1)*40-30,Lt-=40),B==="shiver"&&(Mt+=U(9,an)*4),At==="wave"&&(It+=U(2.8)*32*at),N&&At==="down"&&!B&&(Mt+=mt*(40+Math.sin(D*9+_n*2)*25)*at,It-=mt*50*at),ye["arm"+Ee].rotation.set(F("ux"+Ee,Tt*yn,.15,.7),0,F("uz"+Ee,-Mt*yn,.15,.7)),ye["fore"+Ee].rotation.set(F("fx"+Ee,Lt*yn,.11,.72),0,F("fz"+Ee,-It*yn,.11,.72))}for(let Ee of["L","R"]){let at=Ee==="L"?1:-1,At=fe["leg"+Ee]||"down",_n=Ee==="L"?0:1,Mt,It,Tt=0,Lt=0;if(et&&At==="down")Tt=-66,Lt=95,Mt=6*at,It=0;else if(ie.legs&&At==="down"){let Rn=ie.legs[_n];Tt=Rn[0],Lt=Rn[1],Mt=(Rn[2]||0)*at,It=(Rn[3]||0)*at}else if($.absLegs&&At==="down")Mt=$.absLegs[_n][0],It=$.absLegs[_n][1];else{let Rn=$.legs?$.legs[_n]:ca[At]||ca.down;Mt=Rn[0]*at,It=Rn[1]*at}At==="kick"&&(Tt=-65,Mt*=.5),At==="knee"&&(Tt=-70,Lt=100,Mt=8*at,It=0);let an=Ee==="L"?Math.PI:0;B==="walk"&&(Tt+=U(1.3,an)*32,Lt+=Math.max(0,U(1.3,an+1.2))*40),B==="run"&&(Tt+=U(2.4,an)*58,Lt+=Math.max(0,U(2.4,an+1.2))*90),B==="dance"&&(Lt+=Math.max(0,U(2,an))*40,Tt-=Math.max(0,U(2,an))*25),B==="butt"&&(Lt+=20),ye["leg"+Ee].rotation.set(F("lx"+Ee,Tt*yn,.15,.7),0,F("lz"+Ee,-Mt*yn,.15,.7)),ye["shin"+Ee].rotation.set(F("kx"+Ee,Lt*yn,.12,.72),0,F("kz"+Ee,-It*yn,.12,.72));let Oi=fe.body==="crawl"||fe.body==="lie"||fe.body==="handstand"?0:-(Tt+Lt)*yn*.6;ye["ankle"+Ee].rotation.x=F("ax"+Ee,Oi,.15,.7)}d.updateMatrixWorld(!0);for(let Ee of["L","R"])cs("arm"+Ee,qn(ye["arm"+Ee],_t),qn(ye["fore"+Ee],Vt),qn(ye["wrist"+Ee],rt),"sleeve"+Ee),cs("leg"+Ee,qn(ye["leg"+Ee],_t),qn(ye["shin"+Ee],Vt),qn(ye["ankle"+Ee],rt),"pant"+Ee);He.rotation.set(et?-.4:0,U(2.2)*.5,0);let zn=fe.face||"neutral";w>us&&(us=w+700+Math.random()*1800,Di=(Math.random()-.5)*.9,ds=(Math.random()-.5)*.6);let Lp={neutral:.42,angry:.52,sad:.4,surprised:.05,scared:.08,sleepy:.72,cheeky:.38}[zn]??.4,lu={surprised:.75,scared:.55,angry:.9}[zn]??1,Dp={surprised:1.18,scared:1.12}[zn]??1,Up=E(w);for(let Ee of R){if(!Ee.g.visible)continue;let at=Di*.5+(Ee.sx<0?.18:-.08),At=ds*.4+(Ee.sx<0?-.05:.12);zn==="sad"&&(At=-.45),zn==="scared"&&(at=Math.sin(w/37+Ee.sx)*.2,At=.1),zn==="angry"&&(at=-Ee.sx*.25,At=0),zn==="surprised"&&(at*=.3,At=.05),Ee.px=F("px"+Ee.sx,at,.12,.6)+Re("nz")*4*Ee.sx,Ee.py=F("py"+Ee.sx,At,.12,.6)-Re("hy")*3;let _n=Pt.r*.5,Mt=Math.max(-1,Math.min(1,Ee.px))*_n,It=Math.max(-1,Math.min(1,Ee.py))*_n;Ee.pupil.position.set(Mt,It,Math.sqrt(Math.max(0,Pt.r*Pt.r-Mt*Mt-It*It))*.98),Ee.pupil.scale.set(lu,lu,.5),Ee.shine.position.set(Mt+Pt.r*.12,It+Pt.r*.14,Ee.pupil.position.z+.012);let Tt=F("es"+Ee.sx,Dp,.2,.6);Ee.inner.scale.set(Tt,Tt*1.08,.62);let Lt=Math.max(Lp,Up),an=zn==="angry"?-Ee.sx*.45:zn==="sad"?Ee.sx*.35:zn==="neutral"?Ee.sx*.08:0;Ee.lidPivot.rotation.set(-Math.PI/2+Lt*Math.PI*.95,0,F("lt"+Ee.sx,an,.2,.6))}let cu=V.getObjectByName("ahoge");cu&&(cu.rotation.x=F("ah",U(.8)*.2-Re("hy")*6,.1,.8)),c.position.x=u.position.x*.8,c.scale.setScalar(Math.max(.45,1-(tt+u.position.y-Rp>0?tt*.35:0))),l?.update(D,w),t.render(r,s)}let Ui=0;function E(w){if(!Ui&&w>Li&&(Ui=w,Li=w+2200+Math.random()*2600),Ui){let D=(w-Ui)/150;return D>=1?(Ui=0,0):Math.sin(D*Math.PI)}return 0}pr=requestAnimationFrame(da);let W=()=>{l&&(l.cheerUntil=performance.now()+1600)};function K(){hs=!1,cancelAnimationFrame(pr),fs.disconnect(),r.traverse(w=>{w.isMesh&&!wp.has(w.material)&&(w.geometry?.dispose(),w.material?.dispose())}),t.dispose(),t.forceContextLoss?.()}P({skin:"tron"}),De({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down"});function Q(w){let D=w!=null&&!z.visible;D!==N&&(N=D,k.visible=D,be="",Xe()),Z=D?Math.max(0,Math.min(1,w)):0}return{setPose:De,setLook:P,setTalk:Q,el:i,dispose:K,cheer:W,is3D:!0}}var au=[{id:"masoi",url:"masoi.html",name:"Ma S\xF3i",color:"var(--grape)",soft:"var(--grape-soft)",tag:"Suy lu\u1EADn \xB7 L\u1EEBa l\u1ECDc",players:"4\u201316 ng\u01B0\u1EDDi",time:"15\u201330 ph\xFAt",desc:"\u0110\xEAm xu\u1ED1ng, s\xF3i \u0111i s\u0103n. Ng\xE0y l\xEAn, c\u1EA3 l\xE0ng b\u1ECF phi\u1EBFu treo c\u1ED5 k\u1EBB \u0111\xE1ng nghi. C\xF3 Ti\xEAn tri, B\u1EA3o v\u1EC7, Ph\xF9 th\u1EE7y, Th\u1EE3 s\u0103n.",art:()=>`<div class="art-roles">${["wolf","seer","witch","guard","hunter"].map(n=>fu(n,"lg")).join("")}</div>`},{id:"dienta",url:"dienta.html",name:"Di\u1EC5n T\u1EA3 H\xECnh H\xE0i",color:"var(--sky)",soft:"var(--sky-soft)",isNew:!0,tag:"Di\u1EC5n k\u1ECBch c\xE2m \xB7 B\u1EA5m chu\xF4ng",players:"2\u201316 ng\u01B0\u1EDDi",time:"10\u201320 ph\xFAt",desc:"M\u1ED9t ng\u01B0\u1EDDi l\xEAn s\xE2n kh\u1EA5u \u0111i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt di\u1EC5n t\u1EA3 \u0111\u1EC1 b\xE0i, c\u1EA3 ph\xF2ng tranh nhau b\u1EA5m chu\xF4ng \u0111o\xE1n ch\u1EEF \u0111\u1EC3 ghi \u0111i\u1EC3m.",art:n=>{let e=su(n);e.setLook({skin:"idol"}),e.setPose({body:"stand",head:"tiltL",face:"happy",armL:"wave",armR:"hip",legL:"step",legR:"down",loop:"dance"})}},{id:"nhai",url:"nhai.html",name:"Nh\u1EA1i Nh\u01B0 Th\u1EADt",color:"var(--orange)",soft:"var(--orange-soft)",isNew:!0,tag:"Nh\u1EA1i gi\u1ECDng \xB7 Ch\u1EA5m \u0111i\u1EC3m",players:"2\u201316 ng\u01B0\u1EDDi",time:"10\u201315 ph\xFAt",desc:'Nghe ti\u1EBFng g\xE0 g\xE1y, c\xF2i xe, c\xE2u "\u1ED0i d\u1ED3i \xF4i"... r\u1ED3i c\u1EA3 ph\xF2ng c\xF9ng nh\u1EA1i l\u1EA1i. M\xE1y ch\u1EA5m \u0111\u1ED9 gi\u1ED1ng + m\u1ECDi ng\u01B0\u1EDDi b\u1ECF phi\u1EBFu.',art:n=>{let e=su(n);e.setLook({skin:"chotdon"}),e.setPose({body:"stand",head:"center",face:"happy",armL:"down",armR:"mouth",propR:"mic",legL:"down",legR:"down"});let t=0;setInterval(()=>{t+=.2,e.setTalk?.(Math.max(0,Math.sin(t*3)*.6+Math.sin(t*7.1)*.3))},70)}},{id:"caro",url:"caro.html",name:"C\u1EDD Caro",color:"var(--coral)",soft:"var(--coral-soft)",isNew:!0,tag:"\u0110\u1ED1i kh\xE1ng \xB7 Tr\xED tu\u1EC7",players:"2 ch\u01A1i + 8 xem",time:"5\u201315 ph\xFAt",desc:"X\u1EBFp \u0111\u1EE7 5 qu\xE2n li\xEAn ti\u1EBFp \u0111\u1EC3 th\u1EAFng. 2 ng\u01B0\u1EDDi ng\u1ED3i gh\u1EBF \u0111\u1EA5u nhau, t\u1ED1i \u0111a 8 ng\u01B0\u1EDDi v\xE0o xem, chat v\xE0 c\u1ED5 v\u0169.",art:n=>{n.innerHTML='<div class="caro-art">'+Array.from({length:25},(e,t)=>{let i={6:"X",7:"O",12:"X",13:"O",18:"X",8:"O",24:"X",0:"X"}[t];return`<i class="${i||""}">${i==="X"?"\u2715":i==="O"?"\u25CB":""}</i>`}).join("")+"</div>"}},{id:"bay",url:"bay.html",name:"V\u1ED7 C\xE1nh Sinh T\u1ED3n",color:"var(--lime)",soft:"var(--lime-soft)",isNew:!0,tag:"Ph\u1EA3n x\u1EA1 \xB7 Sinh t\u1ED3n",players:"1\u201316 ng\u01B0\u1EDDi",time:"1\u20133 ph\xFAt/v\xE1n",desc:"C\u1EA3 ph\xF2ng c\xF9ng v\u1ED7 c\xE1nh lu\u1ED3n qua c\xE1c c\u1ED9t k\u1EB9o tr\xEAn m\u1ED9t b\u1EA7u tr\u1EDDi. \u0110\u1EE5ng l\xE0 r\u01A1i \u2014 ch\xFA chim tr\u1EE5 l\u1EA1i cu\u1ED1i c\xF9ng th\u1EAFng!",art:n=>{n.innerHTML='<div class="bay-art"><span class="p1"></span><span class="p2"></span><b style="left:28%;top:40%">\u{1F425}</b><b style="left:40%;top:56%;opacity:.6">\u{1F98A}</b><b style="left:18%;top:62%;opacity:.6">\u{1F438}</b></div>'}}],Ko=yu();xr("[data-logo]").forEach(n=>n.innerHTML=tl.wolf);Dl(Ko);zd(Ko,()=>Dl(Ko));Vd(Ko,"\u0110ang ch\u1ECDn game");fn("#gameCount").textContent=`${au.length} game \xB7 s\u1EBD c\xF2n th\xEAm`;fn("#gameGrid").innerHTML=au.map(n=>`
  <a class="card game-card" href="${n.url}" style="--gc:${n.color};--gs:${n.soft}">
    <div class="gc-art" id="art-${n.id}"></div>
    <div class="gc-body">
      <div class="gc-title"><b>${n.name}</b>${n.isNew?'<span class="chip new">M\u1EDAI</span>':""}</div>
      <div class="gc-tag">${n.tag}</div>
      <p>${n.desc}</p>
      <div class="gc-meta"><span class="chip">\u{1F465} ${n.players}</span><span class="chip">\u23F1 ${n.time}</span><span class="chip">\u{1F399} Voice</span></div>
      <span class="btn primary gc-go">Ch\u01A1i ngay \u2192</span>
    </div>
  </a>`).join("")+`
  <div class="card game-card soon"><div class="gc-art"><span style="font-size:64px">\u{1F9E9}</span></div>
    <div class="gc-body"><div class="gc-title"><b>Game ti\u1EBFp theo</b><span class="chip">S\u1EAFp c\xF3</span></div><p>\u0110ang \u0111\u01B0\u1EE3c n\u1EA5u... B\u1EA1n mu\u1ED1n ch\u01A1i g\xEC th\xEC \u0111\u1EC1 xu\u1EA5t nh\xE9!</p></div></div>`;for(let n of au){let e=fn("#art-"+n.id),t=n.art(e);typeof t=="string"&&(e.innerHTML=t)}})();
