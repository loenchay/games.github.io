(()=>{var ju=Object.defineProperty;var Wm=(n,e,t)=>e in n?ju(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var $m=(n,e)=>()=>(n&&(e=n(n=0)),e);var qm=(n,e)=>{for(var t in e)ju(n,t,{get:e[t],enumerable:!0})};var cn=(n,e,t)=>Wm(n,typeof e!="symbol"?e+"":e,t);var vf={};qm(vf,{createEvent:()=>pf,defaultRelayUrls:()=>xf,getRelaySockets:()=>J0,joinRoom:()=>K0,pauseRelayReconnection:()=>Qd,resumeRelayReconnection:()=>ef,selfId:()=>kn,subscribe:()=>$0});var nc,Li,Kr,Cd,Rd,Ym,Vn,td,Ln,Zm,Km,Pd,Id,Ld,nd,Fs,ic,Jm,Jr,$e,Xa,jm,kd,id,sd,Nl,Ol,Dd,rd,zr,Ud,Ya,Qm,Nd,Pn,Hs,ls,Hr,eg,cs,Wa,ci,tg,ad,ng,ig,sg,Od,Zl,Kl,sc,rc,Fd,Bd,zd,rg,Hd,Vd,Gd,Wd,ag,og,lg,$d,qd,Xd,Yd,cg,od,ld,hg,Jl,ug,dg,Gn,Gr,fg,Vs,kn,hs,Zd,as,Kd,Rn,Os,hn,Jd,pt,dt,Bs,Ii,pg,mg,ki,rs,Wr,$r,gg,yg,mn,zs,jd,cd,hd,Ur,Vr,jl,Qd,ef,xg,vg,_g,ac,Fl,bg,Mg,Za,qr,wg,Sg,tf,nf,Tg,Ag,oc,Eg,Cg,Rg,Bl,Pg,Ig,Lg,kg,Dg,ud,Ug,Nr,Ng,Og,dd,fd,Fg,Bg,zl,zg,Hl,pd,Vl,Va,ss,Or,Hg,md,gd,yd,Vg,Gg,Wg,$g,qg,Ns,Gl,xd,Xg,za,Yg,vd,_d,sf,Zg,bd,Kg,Pi,Br,Md,Jg,jg,rf,af,wd,Qg,e0,of,t0,n0,i0,s0,r0,a0,Ql,$a,o0,l0,Fr,c0,lf,h0,u0,d0,Ka,Xr,In,Ga,ec,lc,Sd,f0,Yr,p0,m0,cf,g0,y0,x0,v0,_0,b0,M0,Ha,w0,S0,T0,A0,E0,C0,R0,Wl,P0,I0,$l,Td,ql,L0,hf,k0,uf,df,D0,U0,N0,ff,O0,Xl,Ad,qa,F0,B0,Zr,tc,os,Ed,z0,Yl,H0,V0,G0,W0,cc,hc,pf,$0,li,mf,q0,X0,gf,Y0,yf,Z0,K0,J0,xf,_f=$m(()=>{nc=Object.freeze,Li=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,Kr=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Cd=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Rd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,Ym=nc({p:Li,n:Kr,h:1n,a:0n,b:7n,Gx:Cd,Gy:Rd}),Vn=32,td=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Ln=(n,e,t="")=>{if(td(n)&&(e===void 0||n.length===e))return n;let i=td(n),s=e!==void 0?` of length ${e}`:"",r=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(a):new TypeError(a)},Zm=n=>Uint8Array.from(n),Km=(n,e,t)=>Zm(Ln(n,t,e)),Pd=(n,e)=>n.toString(16).padStart(e,"0"),Id=n=>{let e="";for(let t of Ln(n))e+=Pd(t,2);return e},Ld=n=>{let e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);let t=new Uint8Array(n.length/2);for(let i=0,s=0;i<t.length;i++,s+=2){let r=n.charCodeAt(s),a=n.charCodeAt(s+1);t[i]=((r&15)+(r>>6)*9)*16+(a&15)+(a>>6)*9}return t},nd=()=>{let n=globalThis?.crypto?.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},Fs=(...n)=>{let e=0;for(let s of n)e+=Ln(s).length;let t=new Uint8Array(e),i=0;for(let s of n)t.set(s,i),i+=s.length;return t},ic=(n=Vn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},Jm=BigInt,Jr=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},$e=(n,e=Li)=>(n%=e)>=0n?n:e+n,Xa=n=>$e(n,Kr),jm=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=$e(n,e),i=e,s=0n,r=1n;for(;t!==0n;){let a=i/t,o=i-t*a,l=s-r*a;i=t,t=o,s=r,r=l}if(i!==1n)throw new Error("invert: does not exist");return $e(s,e)},kd=n=>{let e=ng[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},id=(n,e,t)=>Ln(kd(n)(e,t),Vn,"digest"),sd=async(n,e,t)=>Ln(await kd(n)(e,t),Vn,"digest"),Nl=n=>{if(n instanceof Hs)return n;throw new TypeError("Point expected")},Ol="bad point: not on curve",Dd=n=>$e($e(n*n)*n+7n),rd=n=>Jr(n,0n,Li),zr=n=>Jr(n,1n,Li),Ud=n=>Jr(n,1n,Kr),Ya=n=>!(n&1n),Qm=n=>Uint8Array.of(Ya(n)?2:3),Nd=n=>{let e=Dd(zr(n)),t=1n;for(let i=e,s=(Li+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%Li),i=i*i%Li;if($e(t*t)!==e)throw new Error("sqrt invalid");return new Hs(n,Ya(t)?t:$e(-t),1n)},Hs=(Pn=class{constructor(e,t,i){cn(this,"X");cn(this,"Y");cn(this,"Z");this.X=rd(e),this.Y=zr(t),this.Z=rd(i),nc(this)}static CURVE(){return Ym}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?Hr:new Pn(t,i,1n)}static fromBytes(e){Ln(e);let t=e.length,i=e[0],s=Wa(e,1,33);try{if(t===33&&(i===2||i===3)){let r=Nd(s);return i===3?r.negate():r}if(t===65&&i===4)return new Pn(s,Wa(e,33,65),1n).assertValidity()}catch{throw new Error(Ol)}throw new Error(Ol)}static fromHex(e){return Pn.fromBytes(Ld(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Nl(e);return $e(t*o)===$e(r*s)&&$e(i*o)===$e(a*s)}is0(){return this.Z===0n}negate(){return new Pn(this.X,$e(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Nl(e),l=0n,c=7n,h=0n,d=0n,u=0n,f=$e(c*3n),g=$e(t*r),x=$e(i*a),p=$e(s*o),m=$e(t+i),w=$e(r+a);m=$e(m*w),w=$e(g+x),m=$e(m-w),w=$e(t+s);let _=$e(r+o);return w=$e(w*_),_=$e(g+p),w=$e(w-_),_=$e(i+s),h=$e(a+o),_=$e(_*h),h=$e(x+p),_=$e(_-h),u=$e(l*w),h=$e(f*p),u=$e(h+u),h=$e(x-u),u=$e(x+u),d=$e(h*u),x=$e(g+g),x=$e(x+g),p=$e(l*p),w=$e(f*w),x=$e(x+p),p=$e(g-p),p=$e(l*p),w=$e(w+p),g=$e(x*w),d=$e(d+g),g=$e(_*w),h=$e(m*h),h=$e(h-g),g=$e(m*x),u=$e(_*u),u=$e(u+g),new Pn(h,d,u)}subtract(e){return this.add(Nl(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Hr;if(Ud(e),e===1n)return this;if(this.equals(ls))return hg(e).p;let i=Hr,s=ls,r=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let s=jm(i,Li);if($e(i*s)!==1n)throw new Error("inverse invalid");return{x:$e(e*s),y:$e(t*s)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(zr(e),zr(t),$e(t*t)!==Dd(e))throw new Error(Ol);return this}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),s=ci(t);return e?Fs(Qm(i),s):Fs(Uint8Array.of(4),s,ci(i))}toHex(e){return Id(this.toBytes(e))}},cn(Pn,"BASE"),cn(Pn,"ZERO"),Pn),ls=new Hs(Cd,Rd,1n),Hr=new Hs(0n,1n,0n);Hs.BASE=ls;Hs.ZERO=Hr;eg=(n,e,t)=>ls.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),cs=n=>Jm("0x"+(Id(n)||"0")),Wa=(n,e,t)=>cs(n.subarray(e,t)),ci=n=>Ld(Pd(Jr(n,0n,2n**256n),Vn*2)),tg=n=>{let e=cs(Ln(n,Vn,"secret key"));return Jr(e,1n,Kr,"invalid secret key: outside of range")},ad="SHA-256",ng={hmacSha256Async:async(n,e)=>{let t=nd(),i=await t.importKey("raw",n,{name:"HMAC",hash:ad},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await nd().digest(ad,n)),sha256:void 0},ig=n=>{if(n=n===void 0?ic(48):n,Ln(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");let e=$e(cs(n),Kr-1n);return ci(e+1n)},sg=n=>e=>{let t=ig(e);return{secretKey:t,publicKey:n(t)}},Od=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),Zl=(n,...e)=>{let t=id("sha256",Od(n));return id("sha256",Fs(t,t,...e))},Kl=(n,...e)=>sd("sha256Async",Od(n)).then(t=>sd("sha256Async",Fs(t,t,...e))),sc=n=>{let e=tg(n),t=ls.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=Ya(s)?e:Xa(-e),a=ci(i);return{d:r,px:a}},rc=n=>Xa(cs(n)),Fd=(...n)=>rc(Zl("challenge",...n)),Bd=async(...n)=>rc(await Kl("challenge",...n)),zd=n=>sc(n).px,rg=sg(zd),Hd=(n,e,t)=>{let i=Km(n,"message"),{px:s,d:r}=sc(e);return{m:i,px:s,d:r,a:Ln(t,Vn)}},Vd=n=>{let e=rc(n);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:i}=sc(ci(e));return{rx:t,k:i}},Gd=(n,e,t,i)=>Fs(e,ci(Xa(n+t*i))),Wd="invalid signature produced",ag=(n,e,t=ic(Vn))=>{let{m:i,px:s,d:r,a}=Hd(n,e,t),o=ci(r^cs(Zl("aux",a))),{rx:l,k:c}=Vd(Zl("nonce",o,s,i)),h=Gd(c,l,Fd(l,s,i),r);if(!qd(h,i,s))throw new Error(Wd);return h},og=async(n,e,t=ic(Vn))=>{let{m:i,px:s,d:r,a}=Hd(n,e,t),o=ci(r^cs(await Kl("aux",a))),{rx:l,k:c}=Vd(await Kl("nonce",o,s,i)),h=Gd(c,l,await Bd(l,s,i),r);if(!await Xd(h,i,s))throw new Error(Wd);return h},lg=(n,e)=>n instanceof Promise?n.then(e):e(n),$d=(n,e,t,i)=>{let s=Ln(n,64,"signature"),r=Ln(e,void 0,"message"),a=Ln(t,Vn,"publicKey"),o,l,c,h;try{let d=cs(a);o=Nd(d),l=zr(Wa(s,0,Vn)),c=Ud(Wa(s,Vn,64)),h=Fs(ci(l),a,r)}catch{return!1}return lg(i(h),d=>{try{let{x:u,y:f}=eg(o,c,Xa(-d)).toAffine();return!(!Ya(f)||u!==l)}catch{return!1}})},qd=(n,e,t)=>$d(n,e,t,Fd),Xd=async(n,e,t)=>$d(n,e,t,Bd),Yd=nc({keygen:rg,getPublicKey:zd,sign:ag,verify:qd,signAsync:og,verifyAsync:Xd}),cg=()=>{let n=[],e=ls,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let s=1;s<128;s++)t=t.add(e),n.push(t);e=t.double()}return n},ld=(n,e)=>{let t=e.negate();return n?t:e},hg=n=>{let e=od||(od=cg()),t=Hr,i=ls;for(let s=0;s<33;s++){let r=Number(n&255n);n>>=8n,r>128&&(r-=256,n+=1n);let a=s*128,o=a+Math.abs(r)-1,l=s%2!==0,c=r<0;r===0?i=i.add(ld(l,e[a])):t=t.add(ld(c,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:Jl,min:ug,sin:dg}=Math,Gn="Trystero",Gr=(n,e)=>Array(n).fill(void 0).map(e),fg="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Vs=n=>Gr(n,()=>fg[Jl(Math.random()*62)]??"").join(""),kn=Vs(20),hs=Promise.all.bind(Promise),Zd=typeof window<"u",{entries:as,fromEntries:Kd,keys:Rn,values:Os}=Object,hn=()=>{},Jd="candidate",pt=n=>(n!==null&&clearTimeout(n),null),dt=n=>new Error(`${Gn}: ${n}`),Bs=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:mn(n??e),Ii=(n,e)=>n instanceof Error?n:dt(Bs(n,e)),pg=new TextEncoder,mg=new TextDecoder,ki=n=>pg.encode(n),rs=n=>mg.decode(n),Wr=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),$r=(...n)=>n.join("@"),gg=(n,e)=>{let t=[...n],i=()=>{let r=dg(e++)*1e4;return r-Jl(r)},s=t.length;for(;s;){let r=Jl(i()*s--),a=t[s];t[s]=t[r],t[r]=a}return t},yg=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?gg(e,jd(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),mn=JSON.stringify,zs=n=>{try{return JSON.parse(n)}catch{throw dt(`failed to parse JSON: ${n}`)}},jd=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,cd=3333,hd=6e4,Ur={},Vr=null,jl=null,Qd=()=>{Vr||(Vr=new Promise(n=>{jl=n}).finally(()=>{jl=null,Vr=null}))},ef=()=>{jl?.()},xg=(n,e,t)=>{let i={},s=!1,r=!1,a,o=hn;i.isClosed=!1,i.ready=new Promise(c=>o=c);let l=()=>{if(i.isClosed)return;a=void 0,r=!1;let c=new WebSocket(n);c.onclose=()=>{if(i.isClosed||r)return;if(r=!0,Vr){Vr.then(l);return}let h=Ur[n]??(Ur[n]=cd);if(h>=hd){i.isClosed=!0;return}a=setTimeout(l,Math.random()*h),Ur[n]=ug(h*2,hd)},c.onmessage=h=>e(String(h.data)),i.socket=c,i.url=c.url,c.onopen=()=>{let h=s;s=!0,o(i),Ur[n]=cd,h&&t?.()},i.send=h=>{c.readyState===1&&c.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},l(),i},vg=n=>{let e={},t=new WeakMap,i=a=>{let o=t.get(a);if(!o)throw dt("relay bookkeeping missing registration for relay client");return o},s=()=>{let a={},o=l=>a[l]??(a[l]={});return{forKey:o,forRelay:l=>o(i(l))}},r=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>e[a]||r(a,o()),keyOf:i,scoped:s,getSockets:()=>Kd(as(e).flatMap(([a,o])=>{let l=n(o);return l?[[a,l]]:[]}))}},_g=()=>{if(Zd){let n=new AbortController;return addEventListener("online",ef,{signal:n.signal}),addEventListener("offline",Qd,{signal:n.signal}),()=>n.abort()}return hn},ac="AES-GCM",Fl={},bg=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),Mg=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},Za=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,ki(e))),qr=async n=>Fl[n]??(Fl[n]=Array.from(await Za("SHA-1",n)).map(e=>e.toString(36)).join("")),wg=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},ki(`${n}:${e}:${t}`)),{name:ac},!1,["encrypt","decrypt"]),Sg=async(n,e)=>Wr(await Za("SHA-256",`${Gn}:${n}:${e}`)),tf="$",nf=",",Tg=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(nf)+tf+bg(await crypto.subtle.encrypt({name:ac,iv:t},await n,ki(e)))},Ag=async(n,e)=>{let[t,i]=e.split(tf);return rs(await crypto.subtle.decrypt({name:ac,iv:new Uint8Array(t?.split(nf).map(Number)??[])},await n,Mg(i??"")))},oc=57333,Eg=18e4,Cg=20,Rg=class{constructor(n){cn(this,"makeOffer");cn(this,"pool",[]);cn(this,"pooled",new Set);cn(this,"leased",new Map);cn(this,"recycling",new Set);cn(this,"cleanupTimer",null);cn(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Gr(Cg,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},oc)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){let e=[];for(;e.length<n&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){let e=this.leased.get(n);e&&(pt(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:hn,close:hn,error:hn}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){let e=this.leased.get(n);e&&(pt(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},Eg))}checkout(n,e,t){let i=this.shift(n),s=Math.max(0,n-i.length);s>0&&i.push(...Gr(s,this.makeOffer));let r=async(a,o=!1)=>{try{let l=await t(a);return e?(this.lease(a),{peer:a,offer:l,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:l}}catch(l){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return r(this.makeOffer(),!0);throw l}};return hs(i.map(a=>r(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{pt(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}},Bl=dt("incorrect password for overlapping room"),Pg=(n,e,t)=>{let i=r=>Za("SHA-256",`${r}:${n}:${e}:${t}`).then(Wr),s=async(r,a,o)=>{if(!n)return;if(o){let c=Vs(36);await r({__trystero_pw:"challenge",c});let{data:h}=await a();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw Bl;let d=await i(c);if(h.h!==d)throw Bl;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Bl;await r({__trystero_pw:"response",h:await i(l.c)})};return{run:s,compose:r=>n||r?async(a,o,l,c)=>{await s(o,l,c),await r?.(a,o,l,c)}:void 0}},Ig=n=>{let e=Bs(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},Lg=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:a})=>{let o={},l=(d,u)=>{let f=o[d];!f||u&&f.peer!==u||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=pt(f.handshakeTimer),r(d,f.peer))},c=(d,u,f)=>{let g=o[d];if(!g||g.peer!==u)return;let x=Ig(f);e?.(d,x),a(d,u,dt(x))},h=(d,u)=>{let f=o[d];!f||f.peer!==u||f.isActive||(f.didLocalHandshakePass=!0,s("",d).catch(g=>c(d,u,dt(`failed sending handshake readiness: ${Bs(g,"unknown send failure")}`))),l(d,u))};return{addPeer:(d,u)=>{o[d]={peer:u,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,u)=>{let f=o[d];f&&(f.handshakeTimer=pt(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(u)),delete o[d])},canReceiveFromPeer:(d,u)=>{let f=o[d];return!!(f&&(f.isActive||u))},start:(d,u)=>{let f=o[d];if(!f||f.peer!==u)return;f.handshakeTimer=setTimeout(()=>c(d,u,dt(`handshake timed out after ${t}ms`)),t);let g=async(m,w)=>{await i(m,d,w)},x=()=>new Promise((m,w)=>{let _=o[d];if(!_||_.peer!==u){w(dt("peer disconnected during handshake"));return}let b=_.pendingHandshakePayloads.shift();if(b){m(b);return}_.handshakeWaiters.push({resolve:m,reject:I=>w(I)})}),p=kn<d;Promise.resolve(n?.(d,g,x,p)).then(()=>h(d,u)).catch(m=>c(d,u,Ii(m,"handshake failed")))},receiveHandshakeData:(d,u,f)=>{let g=o[u];if(!g||g.isActive)return;let x=f===void 0?{data:d}:{data:d,metadata:f},p=g.handshakeWaiters.shift();if(p){p.resolve(x);return}g.pendingHandshakePayloads.push(x)},receiveHandshakeReady:d=>{let u=o[d];!u||u.isActive||(u.didReceiveRemoteReady=!0,l(d))}}},kg=15e3,Dg=5e3,ud="icegatheringstatechange",Ug="iceconnectionstatechange",Nr="offer",Ng="answer",Og=/out of range/i,dd=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),fd=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let a=new(i??RTCPeerConnection)({iceServers:Fg.concat(s??[]),...t}),o={},l=[],c=[],h=e!==!1,d=[],u=[],f=!1,g=!1,x=null,p=null,m=!1,w=()=>p=pt(p),_=()=>{m||(m=!0,w(),o.close?.())},b=G=>{o.signal?o.signal(G):l.push(G)},I=G=>{let te=o.signal;o.signal=pe=>{te?.(pe),G(pe)},l.length>0&&l.splice(0).forEach(pe=>o.signal?.(pe))},E=G=>r?dd(G):G,P=G=>{if(!r||typeof G.candidate!="string")return G;let te=dd(G.candidate);return te===G.candidate?G:{...G,candidate:te}},U=G=>({type:G.localDescription?.type??Nr,sdp:E(G.localDescription?.sdp??"")}),K=()=>{let G=a.remoteDescription?.sdp;return G?G.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},v=()=>(a.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,S=G=>{if(!a.remoteDescription)return!1;let te=v();if(typeof G.sdpMLineIndex=="number"&&te>0&&G.sdpMLineIndex>=te)return!1;let pe=K();return!(pe&&G.usernameFragment&&G.usernameFragment!==pe)},$=async G=>{try{return await a.addIceCandidate(G),!0}catch(te){if(te instanceof Error&&Og.test(te.message)&&typeof G.sdpMLineIndex=="number")return!1;throw te}},z=async()=>{if(!a.remoteDescription||d.length===0)return;let G=d.splice(0),te=[];for(let pe of G){if(!S(pe)){te.push(pe);continue}await $(pe)||te.push(pe)}te.length>0&&d.push(...te)},L=async G=>{if(S(G)){await $(G)||d.push(G);return}d.push(G)},O=G=>{G.binaryType="arraybuffer",G.bufferedAmountLowThreshold=65535,G.onmessage=te=>{let pe=te.data;o.data?o.data(pe):c.push(pe)},G.onopen=()=>o.connect?.(),G.onclose=_,G.onerror=({error:te})=>o.error?.(Ii(te,"data channel error"))},F=async G=>{let te=null;try{await Promise.race([new Promise(pe=>{let Q=()=>{G.iceGatheringState==="complete"&&(G.removeEventListener(ud,Q),pe())};G.addEventListener(ud,Q),Q()}),new Promise(pe=>{te=setTimeout(pe,kg)})])}finally{pt(te)}return U(G)},X=async()=>{let G=h?U(a):await F(a);return b(G),G};n?(x=a.createDataChannel("data"),O(x)):a.ondatachannel=({channel:G})=>{x=G,O(G)};let W=async(G=!1)=>{if(a.connectionState!=="closed")try{return f=!0,G&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&a.localDescription?.type===Nr&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(G?await a.createOffer({iceRestart:!0}):void 0),await X()}catch(te){o.error?.(Ii(te,"failed to create local offer"))}finally{f=!1}};a.onnegotiationneeded=async()=>W(!1),a.onicecandidate=({candidate:G})=>{if(!h||!G)return;let te=P(typeof G.toJSON=="function"?G.toJSON():{candidate:G.candidate,sdpMid:G.sdpMid,sdpMLineIndex:G.sdpMLineIndex,usernameFragment:G.usernameFragment});b({type:Jd,sdp:JSON.stringify(te)})};let me=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){_();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){w();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){p||(p=setTimeout(()=>{p=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&_()},Dg));return}};a.onconnectionstatechange=me,a.addEventListener(Ug,me),a.ontrack=G=>{let te=G.streams[0];if(te){if(!o.track&&!o.stream){u.push({track:G.track,stream:te});return}o.track?.(G.track,te),o.stream?.(te)}},a.onremovestream=G=>o.stream?.(G.stream);let fe=n?new Promise(G=>I(te=>{te.type===Nr&&G(te)})):Promise.resolve();return n&&queueMicrotask(()=>{!f&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&a.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:a,get channel(){return x},get isDead(){return a.connectionState==="closed"},getOffer:async(G=!1)=>{if(n)return G?W(!0):a.localDescription?.type===Nr?h?U(a):F(a):fe},async signal(G){if(G.type==="candidate"){try{let te=JSON.parse(G.sdp);te&&typeof te=="object"&&await L(P(te))}catch(te){o.error?.(Ii(te,"failed to parse remote candidate"))}return}if(!(x?.readyState==="open"&&!G.sdp?.includes("a=rtpmap")))try{let te={...G,sdp:E(G.sdp)};if(G.type===Nr){if(f||a.signalingState!=="stable"&&!g){if(n)return;await hs([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(te)])}else await a.setRemoteDescription(te);return await z(),await a.setLocalDescription(),await X()}if(G.type===Ng){g=!0;try{await a.setRemoteDescription(te),await z()}finally{g=!1}}}catch(te){o.error?.(Ii(te,"failed to apply remote signal"))}},sendData:G=>x?.send(G),destroy:()=>{w(),x?.close(),a.close(),f=!1,g=!1,_()},setHandlers:G=>{let{signal:te,...pe}=G;Object.assign(o,pe),o.data&&c.length>0&&c.splice(0).forEach(Q=>o.data?.(Q)),te&&I(te),(o.track||o.stream)&&u.length>0&&u.splice(0).forEach(({track:Q,stream:oe})=>{o.track?.(Q,oe),o.stream?.(oe)})},offerPromise:fe,addStream:G=>G.getTracks().forEach(te=>a.addTrack(te,G)),removeStream:G=>a.getSenders().filter(te=>te.track&&G.getTracks().includes(te.track)).forEach(te=>a.removeTrack(te)),addTrack:(G,te)=>a.addTrack(G,te),removeTrack:G=>{let te=a.getSenders().find(pe=>pe.track===G);te&&a.removeTrack(te)},replaceTrack:(G,te)=>{let pe=a.getSenders().find(Q=>Q.track===G);if(pe)return pe.replaceTrack(te)}}},Fg=[...Gr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),Bg=Object.getPrototypeOf(Uint8Array),zl=32,zg=0,Hl=32,pd=34,Vl=35,Va=36,ss=16*2**10-Va,Or=255,Hg=65535,md="bufferedamountlow",gd="close",yd="error",Vg=1e4,Gg=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),Wg=(n,e=Vg)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,s=null,r=l=>{i||(i=!0,n.removeEventListener(md,a),n.removeEventListener(gd,o),n.removeEventListener(yd,o),pt(s),t(l))},a=()=>r(!0),o=()=>r(!1);if(n.addEventListener(md,a),n.addEventListener(gd,o),n.addEventListener(yd,o),s=setTimeout(()=>r(!1),e),n.readyState!=="open"){r(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&r(!0)}),$g=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{let s={},r={},a={},o={},l=(c,h,{includePending:d=!1}={})=>(c?Array.isArray(c)?c:[c]:e(d)).flatMap(u=>{let f=n(u,d);return f?[Promise.resolve(h(u,f))]:(console.warn(`${Gn}: no peer with id ${u} found`),[])});return{makeInternalAction:(c,h={})=>{let d=r[c];if(s[c]&&d){let p=s[c].options;if(p.sendToPending!==!!h.sendToPending||p.receiveWhilePending!==!!h.receiveWhilePending)throw dt(`action type "${c}" cannot be redefined`);return d}if(!c)throw dt("action type argument is required");let u=ki(c);if(u.byteLength>zl)throw dt(`action type string "${c}" (${u.byteLength}b) exceeds byte limit (${zl}). Hint: choose a shorter name.`);let f={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},g=new Uint8Array(zl);g.set(u);let x=0;return s[c]={onComplete:hn,onProgress:hn,setOnComplete:p=>{s[c].onComplete=p;let m=o[c];m?.length&&(delete o[c],m.forEach(({payload:w,peerId:_,metadata:b})=>p(w,_,b)))},setOnProgress:p=>{s[c].onProgress=p},send:async(p,m,w,_,b)=>{i(b);let I=typeof p;if(I==="undefined")throw dt("action data cannot be undefined");let E=I!=="string",P=p instanceof Blob,U=P||p instanceof ArrayBuffer||p instanceof Bg,K=w!==void 0,v=U?Gg(P?await p.arrayBuffer():p):ki(E?mn(p):p),S=K?ki(mn(w)):null,$=Math.ceil(v.byteLength/ss)+(K?1:0)||1,z=Gr($,(L,O)=>{let F=O===$-1,X=!!(K&&O===0),W=new Uint8Array(Va+(X?S?.byteLength??0:F?v.byteLength-ss*($-(K?2:1)):ss));return W.set(g),W.set([x>>8,x&Or],Hl),W.set([Number(F)|Number(X)<<1|Number(U)<<2|Number(E)<<3],pd),W.set([Math.round((O+1)/$*Or)],Vl),W.set(K?X?S??new Uint8Array:v.subarray((O-1)*ss,O*ss):v.subarray(O*ss,(O+1)*ss),Va),W});return x=x+1&Hg,await hs(l(m,async(L,O)=>{let{channel:F}=O,X=0;for(;X<$;){i(b);let W=z[X];if(!W)break;if(F&&F.bufferedAmount>F.bufferedAmountLowThreshold){let G=await Wg(F);if(i(b),!G)break}let me=n(L,f.sendToPending);if(!me||me!==O)break;O.sendData(W),X++;let fe=W[Vl]??Or;_?.(fe/Or,L,w)}},{includePending:f.sendToPending})),[]},options:f},r[c]={send:s[c].send,onMessage:s[c].setOnComplete,onProgress:s[c].setOnProgress}},handleData:(c,h)=>{var K,v;let d=new Uint8Array(h),u=rs(d.subarray(zg,Hl)).replaceAll("\0",""),f=s[u];if(!t(c,!!f?.options.receiveWhilePending))return;let g=(d[Hl]??0)<<8|(d[33]??0),x=d[pd]??0,p=d[Vl]??0,m=d.subarray(Va),w=!!(x&1),_=!!(x&2),b=!!(x&4),I=!!(x&8);a[c]??(a[c]={}),(K=a[c])[u]??(K[u]={});let E=(v=a[c][u])[g]??(v[g]={chunks:[]});if(_?E.meta=zs(rs(m)):E.chunks.push(m),f?.onProgress(p/Or,c,E.meta),!w)return;let P=new Uint8Array(E.chunks.reduce((S,$)=>S+$.byteLength,0));E.chunks.reduce((S,$)=>(P.set($,S),S+$.byteLength),0),delete a[c][u][g];let U=b?P:I?zs(rs(P)):rs(P);if(f){f.onComplete(U,c,E.meta);return}(o[u]??(o[u]=[])).push({payload:U,peerId:c,...E.meta===void 0?{}:{metadata:E.meta}})},clearPeer:c=>{delete a[c]}}},qg=500,Ns=(n,e)=>{let t=dt(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Gl=n=>{if(n?.aborted)throw Ns("aborted","operation aborted")},xd=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,Xg=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,za=(n,e)=>e===void 0?n:{...n,metadata:e},Yg=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{let i={},s={},r=$g({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Gl}),a=r.makeInternalAction,o=r.handleData,l=u=>{let f=s[u];f&&(pt(f.timer),f.signal&&f.abortHandler&&f.signal.removeEventListener("abort",f.abortHandler),delete s[u])},c=(u,f)=>{as(s).forEach(([g,x])=>{x.peerId===u&&(l(g),x.reject(f))})},h=(u,f)=>{r.clearPeer(u),c(u,Ns("disconnected",Bs(f,"peer disconnected")))},d=a("@_response");return d.onMessage((u,f,g)=>{let x=Xg(g);if(!x)return;let p=s[x.r];if(!(!p||p.peerId!==f)){if(l(x.r),x.e!==void 0){p.reject(Ns("rejected",x.e));return}p.resolve(u)}}),{makeAction:(u,f)=>{if(f&&"onRequest"in f&&f.kind!=="request")throw dt('request actions must use kind: "request"');let g=f?.kind??"message",x=a(u),p=i[u];if(p){if(p.kind!==g)throw dt(`action type "${u}" cannot be redefined`);return p.action}let m={kind:g,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:f?.onReceiveProgress??null},w=(z,L)=>z?(O,F)=>z(O,za({peerId:F},L)):void 0,_=z=>{m.onReceiveProgress=z},b=(z,L,O)=>{let F=m.kind==="request"?xd(O):null;m.onReceiveProgress?.(z,za({peerId:L},F?F.m:O))};if(x.onProgress(b),g==="message"){let z=f?.onMessage??null,L=()=>{if(!z)return;let F=z;m.pendingMessages.splice(0).forEach(({payload:X,peerId:W,metadata:me})=>{Promise.resolve().then(()=>F(X,za({peerId:W},me))).catch(fe=>console.error(`${Gn} action handler error:`,fe))})},O={send:async(F,X={})=>{await x.send(F,X.target,X.metadata,w(X.onProgress,X.metadata),X.signal)},get onMessage(){return z},set onMessage(F){z=F,L()},get onReceiveProgress(){return m.onReceiveProgress},set onReceiveProgress(F){_(F)}};return x.onMessage((F,X,W)=>{if(!z){m.pendingMessages.push(W===void 0?{payload:F,peerId:X}:{payload:F,peerId:X,metadata:W});return}let me=z;Promise.resolve().then(()=>me(F,za({peerId:X},W))).catch(fe=>console.error(`${Gn} action handler error:`,fe))}),m.action=O,i[u]=m,L(),O}let I=f?.onRequest??null,E=z=>{pt(z.timer);let L=m.pendingRequests.indexOf(z);L>-1&&m.pendingRequests.splice(L,1)},P=(z,L,O)=>{d.send(null,z,{r:L,e:Bs(O,"request failed")})},U=(z,L)=>{E(z),Promise.resolve().then(()=>L(z.payload,{peerId:z.peerId,...z.metadata===void 0?{}:{metadata:z.metadata},signal:z.controller.signal})).then(async O=>{if(O===void 0)throw dt("request handler returned undefined");await d.send(O,z.peerId,{r:z.requestId})}).catch(O=>P(z.peerId,z.requestId,O)).finally(()=>z.controller.abort())},K=()=>{I&&m.pendingRequests.slice().forEach(z=>U(z,I))},v=(z,L,O,F)=>{if(I){let W={payload:z,peerId:L,...O===void 0?{}:{metadata:O},requestId:F,controller:new AbortController,timer:null};U(W,I);return}let X={payload:z,peerId:L,...O===void 0?{}:{metadata:O},requestId:F,controller:new AbortController,timer:setTimeout(()=>{E(X),X.controller.abort(),P(L,F,"request handler unavailable")},qg)};m.pendingRequests.push(X)},S=async(z,L)=>{let{target:O,metadata:F,onProgress:X,signal:W,timeoutMs:me}=L;if(Gl(W),!n(O,!1))throw Ns("disconnected",`no active peer with id ${O}`);let fe=Vs(20),G=new Promise((te,pe)=>{let Q={peerId:O,resolve:te,reject:pe,timer:null,...W===void 0?{}:{signal:W}},oe=()=>{l(fe),pe(Ns("aborted","operation aborted"))};W&&(Q.abortHandler=oe,W.addEventListener("abort",oe,{once:!0})),s[fe]=Q}).catch(te=>{throw te});try{await x.send(z,O,F===void 0?{r:fe}:{r:fe,m:F},w(X,F),W);let te=s[fe];return te&&me!==void 0&&(te.timer=setTimeout(()=>{l(fe),te.reject(Ns("timeout","request timed out"))},me)),await G}catch(te){throw l(fe),te}},$={request:S,requestMany:async(z,L)=>(Gl(L.signal),await hs(L.targets.map(async O=>{try{let F={peerId:O,status:"fulfilled",value:await S(z,{target:O,...L.metadata===void 0?{}:{metadata:L.metadata},...L.timeoutMs===void 0?{}:{timeoutMs:L.timeoutMs},...L.onProgress===void 0?{}:{onProgress:L.onProgress},...L.signal===void 0?{}:{signal:L.signal}})};return L.onResult?.(F),F}catch(F){let X=Ii(F,"request failed");if(X.kind==="aborted"||!X.kind)throw X;let W=X.kind==="timeout"?{peerId:O,status:"timeout"}:X.kind==="disconnected"?{peerId:O,status:"disconnected"}:{peerId:O,status:"rejected",error:X};return L.onResult?.(W),W}}))),get onRequest(){return I},set onRequest(z){I=z,K()},get onReceiveProgress(){return m.onReceiveProgress},set onReceiveProgress(z){_(z)}};return x.onMessage((z,L,O)=>{let F=xd(O);F&&v(z,L,F.m,F.r)}),m.action=$,i[u]=m,K(),$},makeInternalAction:a,handleData:o,clearPeer:h}},vd=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,_d=n=>e=>{let t=n.get(e);return t||(t=Vs(20),n.set(e,t)),t},sf=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map;return{getStreamKey:_d(n),getTrackKey:_d(e),rememberRemoteStream:(a,o,l)=>{t.set(a,o),l&&i.set(l,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,l,c,h)=>{let d={track:o,stream:l};s.set(a,d),c&&r.set(c,d),h&&i.set(h,l)},getRemoteTrack:(a,o)=>s.get(a)??(o?r.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},Zg=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{let i={},s={},r=sf(),a={onPeerStream:null,onPeerTrack:null},o=(h,d,u,f)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(d,u,typeof u.id=="string"?u.id:void 0),a.onPeerStream?.(u,h,f))},l=(h,d,u,f,g)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(d,u,f,typeof u.id=="string"?u.id:void 0,typeof f.id=="string"?f.id:void 0),a.onPeerTrack?.(u,f,h,g))},c=(h,d,u,f,g,x={})=>{let p={k:d,...x,...u===void 0?{}:{m:u}};return n(h,async(m,w)=>{await f(p,m),g(w)})};return{addStream:(h,d,u)=>c(d.target,r.getStreamKey(h),d.metadata,u,f=>f.addStream(h),{s:h.id}),removeStream:(h,d)=>{n(d,(u,f)=>f.removeStream(h))},addTrack:(h,d,u,f)=>c(u.target,r.getTrackKey(h),u.metadata,f,g=>g.addTrack(h,d),{s:d.id,t:h.id}),removeTrack:(h,d)=>{n(d,(u,f)=>f.removeTrack(h))},replaceTrack:(h,d,u,f)=>c(u.target,r.getTrackKey(d),u.metadata,f,g=>g.replaceTrack(h,d),{t:h.id}),receiveStreamMeta:(h,d)=>{if(!e(d))return;let u=vd(h);if(!u)return;let f=t(d)?.__trysteroMedia?.getRemoteStream(u.key,u.streamId);if(f){o(d,u.key,f,u.metadata);return}(i[d]??(i[d]=[])).push(u)},receiveTrackMeta:(h,d)=>{if(!e(d))return;let u=vd(h);if(!u)return;let f=t(d)?.__trysteroMedia?.getRemoteTrack(u.key,u.trackId);if(f){l(d,u.key,f.track,f.stream,u.metadata);return}(s[d]??(s[d]=[])).push(u)},receiveRemoteStream:(h,d)=>{if(!e(h))return;let u=i[h]?.shift();u&&o(h,u.key,d,u.metadata)},receiveRemoteTrack:(h,d,u)=>{if(!e(h))return;let f=s[h]?.shift();f&&l(h,f.key,d,u,f.metadata)},clearPeer:h=>{delete i[h],delete s[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},bd="beforeunload",Kg=1e4,Pi=n=>"@_"+n,Br=new Set,Md=()=>Br.forEach(n=>n()),Jg=n=>(Br.add(n),Br.size===1&&addEventListener(bd,Md),()=>{Br.delete(n),Br.size||removeEventListener(bd,Md)}),jg=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=Kg,isPassive:a=!1}={})=>{let o={},l={},c={},h={onPeerJoin:null,onPeerLeave:null},d=hn,u=null,f=(L,O,{includePending:F=!1}={})=>(L?Array.isArray(L)?L:[L]:Rn(F?o:l)).flatMap(X=>{let W=F?o[X]:l[X];return W?[Promise.resolve(O(X,W))]:(console.warn(`${Gn}: no peer with id ${X} found`),[])}),g=Zg({iterate:(L,O)=>f(L,(F,X)=>O(F,X)),isActive:L=>!!l[L],getSharedMediaPeer:L=>o[L]??null}),x=Yg({getPeer:(L,O)=>(O?o:l)[L],getPeerIds:L=>Rn(L?o:l),canReceiveFromPeer:(L,O)=>!!u?.canReceiveFromPeer(L,O)}),p=x.makeInternalAction,m=x.handleData,w=x.makeAction,_=(L,O=dt("peer disconnected"))=>{let F=Ii(O,"peer disconnected");u?.clearPeer(L,F),delete o[L],delete l[L],x.clearPeer(L,F),c[L]?.splice(0).forEach(X=>X.reject(F)),delete c[L],g.clearPeer(L)},b=(L,O,F)=>{let X=o[L];if(!X||O&&X!==O)return;let W=!!l[L];_(L,F),X.destroy(),W&&h.onPeerLeave?.(L),e(L)},I=async()=>{await S.send(""),await new Promise(L=>setTimeout(L,99)),as(o).forEach(([L,O])=>{O.destroy(),_(L,dt("room left"))}),d(),t()},E=p(Pi("ping")),P=p(Pi("pong")),U=p(Pi("signal")),K=p(Pi("stream")),v=p(Pi("track")),S=p(Pi("leave"),{sendToPending:!0,receiveWhilePending:!0}),$=p(Pi("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),z=p(Pi("hsready"),{sendToPending:!0,receiveWhilePending:!0});return u=Lg({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:$.send,sendHandshakeReady:z.send,onActivate:(L,O)=>{l[L]=O,h.onPeerJoin?.(L)},onFailure:(L,O,F)=>b(L,O,F)}),E.onMessage((L,O)=>P.send("",O)),P.onMessage((L,O)=>{let F=c[O];F?.shift()?.resolve(),F&&!F.length&&delete c[O]}),U.onMessage((L,O)=>{l[O]&&o[O]?.signal(L)}),K.onMessage((L,O)=>g.receiveStreamMeta(L,O)),v.onMessage((L,O)=>g.receiveTrackMeta(L,O)),S.onMessage((L,O)=>b(O,void 0,dt("peer left room"))),$.onMessage((L,O,F)=>u?.receiveHandshakeData(L,O,F)),z.onMessage((L,O)=>u?.receiveHandshakeReady(O)),n((L,O)=>{let F=o[O];if(F){if(F===L)return;F.destroy(),_(O,dt("peer replaced"))}o[O]=L,u?.addPeer(O,L),L.setHandlers({data:X=>m(O,X),stream:X=>g.receiveRemoteStream(O,X),track:(X,W)=>g.receiveRemoteTrack(O,X,W),signal:X=>{l[O]&&U.send(X,O)},close:()=>b(O,L,dt("peer disconnected")),error:X=>{console.error(`${Gn} peer error:`,X),b(O,L,X)}}),u?.start(O,L)}),Zd&&(d=Jg(()=>I().catch(hn))),{makeAction:w,leave:I,ping:async L=>{if(!l[L])throw dt(`no active peer with id ${L}`);let O=Date.now();return await new Promise((F,X)=>{let W=c[L]??(c[L]=[]),me=()=>{let G=c[L];if(!G)return;let te=G.indexOf(fe);te>-1&&G.splice(te,1),G.length||delete c[L]},fe={resolve:()=>{me(),F()},reject:G=>{me(),X(G)}};W.push(fe),E.send("",L).catch(G=>fe.reject(Ii(G,"peer disconnected")))}),Date.now()-O},isPassive:()=>a,getPeers:()=>Kd(as(l).map(([L,O])=>[L,O.connection])),addStream:(L,O={})=>g.addStream(L,O,K.send),removeStream:(L,O={})=>{g.removeStream(L,O.target)},addTrack:(L,O,F={})=>g.addTrack(L,O,F,v.send),removeTrack:(L,O={})=>{g.removeTrack(L,O.target)},replaceTrack:(L,O,F={})=>g.replaceTrack(L,O,F,v.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(L){h.onPeerJoin=L,L&&Rn(l).forEach(O=>L(O))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(L){h.onPeerLeave=L},get onPeerStream(){return g.onPeerStream},set onPeerStream(L){g.onPeerStream=L},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(L){g.onPeerTrack=L}}},rf=1,af=2,wd=(n,e)=>{let t=ki(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=rf,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},Qg=(n,e)=>{let t=ki(n),i=new Uint8Array(4+t.byteLength);return i[0]=af,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},e0=n=>{let e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===rf){let s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:rs(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==af||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:rs(e.subarray(4,i)),isPresent:e[1]===1}},of=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},t0=n=>{if(of(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},n0=class{constructor(){cn(this,"byApp",{});cn(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return of(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(Qg(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=pt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();let r=Os(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(a=>{a.handlers.close?.(),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Rn(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let s=this.getMap(n),r=s[e];if(r){if(r.idleTimer=pt(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}let a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:sf(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${Gn} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,l)=>this.dispatchTrack(a,o,l)}),s[e]=a,a}bind(n,e,t,{onDetach:i}){let s=t.bindings[n];if(s)return t.idleTimer=pt(t.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:hn,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=Rn(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:l=>t.peer.getOffer(l),signal:l=>t.peer.signal(l),sendData:l=>{if(!r.roomToken){r.pendingSendData.push(l);return}t.peer.sendData(wd(r.roomToken,l))},destroy:()=>a(),setHandlers:l=>{let{signal:c,...h}=l;Object.assign(r.handlers,h),c&&(r.handlers.signal=c),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:l=>{let c=t.streamOwners.get(l)??new Set,h=c.size===0;c.add(n),t.streamOwners.set(l,c),h&&t.peer.addStream(l)},removeStream:l=>{let c=t.streamOwners.get(l);c&&(c.delete(n),c.size===0&&(t.streamOwners.delete(l),t.peer.removeStream(l)))},addTrack:(l,c)=>{let h=t.trackOwners.get(l)??{stream:c,rooms:new Set},d=h.rooms.size===0;return h.stream=c,h.rooms.add(n),t.trackOwners.set(l,h),d?t.peer.addTrack(l,c):t.peer.connection.getSenders().find(u=>u.track===l)??t.peer.addTrack(l,c)},removeTrack:l=>{let c=t.trackOwners.get(l);c&&(c.rooms.delete(n),c.rooms.size===0&&(t.trackOwners.delete(l),t.peer.removeTrack(l)))},replaceTrack:(l,c)=>{let h=t.trackOwners.get(l);if(h){t.trackOwners.delete(l);let d=t.trackOwners.get(c)??{stream:h.stream,rooms:new Set};h.rooms.forEach(u=>d.rooms.add(u)),t.trackOwners.set(c,d)}return t.peer.replaceTrack(l,c)},__trysteroMedia:t.media};return r.proxy=o,r.detach=a,t.bindings[n]=r,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=pt(t.idleTimer),e.then(l=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=l,t.bindingsByToken[l]=r;let c=t.pendingDataByToken.get(l);c?.length&&(r.pendingData.push(...c),t.pendingDataByToken.delete(l)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(wd(l,h))),this.flushBindingQueues(r)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||Rn(n.bindings).length>0||(n.idleTimer=pt(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||Rn(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=Os(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){let{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){let t=e0(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}let i=n.bindingsByToken[t.roomToken];if(!i){let s=n.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),n.pendingDataByToken.set(t.roomToken,s);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){Os(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}},i0=23333,s0=12,r0=7533,a0=23333,Ql="__legacy__",$a="offer-placeholder",o0=["offer","answer","candidate"],l0=n=>{if(typeof n=="string")try{let e=zs(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},Fr=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,c0=n=>o0.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),lf=(n,e,t,i,s,r)=>{n.toCipher(e).then(a=>{n.isLeaving()||!r()||i(t,mn(s(a.sdp)))})},h0=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),u0=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),d0=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${u0(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,Ka=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:d0(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},Xr=(n,e)=>n[e]??(n[e]=h0()),In=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},Ga=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=pt(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,In(n))},ec=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,In(n))},lc=(n,e)=>{n.offerRelayTimers[e]=pt(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,In(n))},Sd=(n,e)=>{n?.offerRelays[e]===$a&&lc(n,e)},f0=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},Yr=(n,e)=>{let t=n.offerAnswered;n.offerExpiryTimer=pt(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,s)=>lc(n,s)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||f0(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,In(n)},p0=(n,e,t,i)=>{pt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&Ka(n,s,t),i.destroy(),Ga(s,i),n.checkDeactivate())},a0)},m0=async(n,e,t)=>{let i=t?[t,Ql]:[Ql];for(let s of i){let r=n.pendingCandidates[s];if(r?.length){delete n.pendingCandidates[s];for(let a of r)await e.signal(a)}}},cf=(n,e,t,i=oc)=>{pt(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&Ka(n,r,t),Yr(r,n.offerPool),n.checkDeactivate())},i)},g0=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let s=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!s)throw dt("failed to allocate offer peer");let{peer:r,offer:a}=s;e.offerPeer=r,e.offerId=Vs(s0),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],In(e);let o=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&Ka(n,e,t),Yr(e,n.offerPool)),n.disconnectPeer(r,t),n.checkDeactivate()};return r.setHandlers({connect:()=>n.connectPeer(r,t,i),signal:l=>{e.offerPeer===r&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c?.(l)))},close:o,error:o}),cf(n,e,t),{peer:r,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),y0=async(n,e,t,i,s)=>{if(i){n.attachSharedPeerToRoom(t,i);return}let r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){Sd(r,e);return}if(r.offerRelays[e]!==$a)return;let[a,o]=await hs([qr($r(n.rootTopicPlaintext,t)),g0(n,r,t,e)]);if(n.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==$a){Sd(r,e);return}r.offerRelayTimers[e]=pt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,In(r),r.offerRelayTimers[e]=setTimeout(()=>b0(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let l=!1;r.offerSignalRelays[e]=c=>{l&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==o.peer||r.offerId!==o.offerId||c.type!=="candidate"||lf(n,c,a,s,h=>({peerId:kn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===o.peer&&r.offerId===o.offerId))},s(a,mn({peerId:kn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),l=!0,r.offerSignalBacklog.forEach(c=>r.offerSignalRelays[e]?.(c))},x0=async(n,e,t,i,s,r,a)=>{let o=Xr(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;let l=!!(o.offerPeer||o.offerRelays.some(Boolean));if((l||r)&&kn<t)return;l&&Yr(o,n.offerPool);let c=n.initPeer(!1,n.config);o.answeringPeer=c,o.answerSent=!1,o.connectionErrorReported=!1,p0(n,o,t,c),In(o);let h=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&Ka(n,o,t),Ga(o,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t,e),close:h,error:h});let d;try{d=await n.toPlain({type:"offer",sdp:i})}catch{Ga(o,c),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){Ga(o,c);return}let u=await qr($r(n.rootTopicPlaintext,t));n.isLeaving()||(c.setHandlers({signal:f=>{n.isLeaving()||o.answeringPeer!==c||c.isDead||f.type!=="answer"&&f.type!=="candidate"||lf(n,f,u,a,g=>{let x={peerId:kn};return f.type==="answer"?(o.answerSent=!0,x.answer=g):x.candidate=g,s&&(x.offerId=s),n.isPassive&&(x.passive=!0),x},()=>o.answeringPeer===c&&!c.isDead)}}),await c.signal(d),await m0(o,c,s))},v0=async(n,e,t,i,s)=>{var d;let r;try{r=await n.toPlain({type:Jd,sdp:t})}catch{return}let a=Xr(n.peerStates,e),o=i&&a?.offerPeer&&a.offerId===i?a.offerPeer:null,l=a?.answeringPeer??null,c=!i&&a?.offerPeer?a.offerPeer:null,h=s&&!s.isDead?s:o??l??c;if(!h||h.isDead){let u=i??Ql;((d=a.pendingCandidates)[u]??(d[u]=[])).push(r);return}h.signal(r)},_0=async(n,e,t,i,s,r)=>{let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(r)n.offerPool.claimLeased(r),r.setHandlers({connect:()=>n.connectPeer(r,t,e),close:()=>n.disconnectPeer(r,t)}),r.signal(a);else{let o=n.peerStates[t];if(!o||!o.offerPeer||o.offerAnswered||s&&o.offerId&&s!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,cf(n,o,t,i0),o.offerPeer.signal(a)}},b0=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(lc(i,t),n.checkDeactivate())},M0=n=>e=>async(t,i,s)=>{if(n.isLeaving())return;let r=l0(i);if(!r||c0(r))return;let a=Fr(r,"peerId")??"",o=Fr(r,"offer"),l=Fr(r,"answer"),c=Fr(r,"candidate"),h=Fr(r,"offerId"),d=r.peer,u=r.hasOutgoingOffer===!0,f=r.passive===!0;if(!a||a===kn)return;let[g,x]=await hs([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==x||n.isPassive&&f||(n.isPassive&&!n.isActive&&!l&&!c&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let p=n.peerStates[a],m=p?.connectedPeer;if(m&&p){let b=t0(m);if(b==="live"){p.connectedPeerUnhealthySinceMs=null;return}if(b==="stale")ec(p,a,"message-from-stale-peer");else{let I=Date.now(),E=p.connectedPeerUnhealthySinceMs??I;if(p.connectedPeerUnhealthySinceMs=E,I-E<r0)return;ec(p,a,"message-from-prolonged-disconnect")}}let w=n.sharedPeers.get(n.appId,a);w&&n.sharedPeers.getHealth(w.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),w=void 0);let _=!!(a&&!o&&!l&&!c);if(_&&!w){let b=Xr(n.peerStates,a),I=kn<a;if(b.answeringPeer||b.connectedPeer||b.offerAnswered)return;if(!I&&!b.offerPeer){let E=await qr($r(n.rootTopicPlaintext,a));!n.isLeaving()&&!b.connectedPeer&&s(E,mn({peerId:kn}));return}if(b.offerRelays[e])return;b.offerRelays[e]=$a,In(b)}if(w&&(o||l||c)){if(w.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,w);return}if(_)return y0(n,e,a,w,s);if(o)return x0(n,e,a,o,h,u,s);if(c)return v0(n,a,c,h,d);if(l)return _0(n,e,a,l,h,d)},Ha=5333,w0=[233,533,1333],S0=7533,T0=123333,A0=({init:n,subscribe:e,announce:t,deactivate:i})=>{let s={},r={},a={},o={},l=new n0,c=()=>Os(s).some(I=>Rn(I).length>0),h=I=>r[I]??(r[I]={}),d=I=>a[I]??(a[I]={}),u=(I,E,P)=>{l.getHealth(I.peer)==="live"&&l.sendRoomPresence(I,E,P)},f=(I,E)=>{as(r[I]??{}).forEach(([P,U])=>{if(!U.shouldAdvertise())return;let{roomToken:K,roomTokenPromise:v}=U;if(K){u(E,K,!0);return}v.then(S=>{r[I]?.[P]===U&&U.roomToken===S&&(l.get(I,E.peerId)!==E||E.isClosing||U.shouldAdvertise()&&u(E,S,!0))})})},g=(I,E,P)=>Os(l.getMap(I)).forEach(U=>u(U,E,P)),x=I=>{o[I]||(o[I]=l.setRoomPresenceHandler(I,(E,P,U)=>{if(!U)return;let K=l.get(I,E),v=a[I]?.[P];!K||!v||r[I]?.[v]?.attachSharedPeerToRoom(E,K)}))},p=I=>{s[I]&&Rn(s[I]).length>0||(o[I]?.(),delete o[I],delete r[I],delete a[I])},m=!1,w=[],_=null,b=hn;return(I,E,P)=>{if(!I)throw dt("requires a config map as the first argument");if(P&&typeof P!="object")throw dt("third argument must be a callbacks object");let{appId:U}=I,K=P?.onJoinError,v=P?.onPeerHandshake,S=P?.handshakeTimeoutMs;if(!U)throw dt("config map is missing appId field");if(!E)throw dt("roomId argument required");if(S!==void 0&&(!Number.isFinite(S)||S<=0))throw dt("handshakeTimeoutMs must be a positive number");if(s[U]?.[E])return s[U][E];x(U);let $=$r(Gn,U,E),z=qr($),L=qr($r($,kn)),O=wg(I.password??"",U,E),F=Sg(U,E),X=I._test_only_sharedPeerIdleMs??T0,W=!1,me=ve=>async J=>({type:J.type,sdp:await ve(O,J.sdp)}),fe=me(Ag),G=me(Tg),te=l.getMap(U),pe=()=>fd(!0,I),Q=!1;_||(_=new Rg(pe));let oe=_,Ue=async ve=>{let J=await ve.getOffer(Date.now()-ve.created>oc);if(!J||J.type!=="offer")throw dt("failed to get offer for peer");return(await G(J)).sdp},_e=(ve,J)=>{let ee=Xr(ce.peerStates,ve);ee.answeringExpiryTimer=pt(ee.answeringExpiryTimer),ee.answeringPeer=null;let{proxy:Ne,isNew:be}=l.bind(E,F,J,{onDetach:()=>{let Me=ce.peerStates[ve];Me?.connectedPeer===J.peer&&(Me.connectedPeer=null,Me.connectedPeerUnhealthySinceMs=null,In(Me))}});ee.connectedPeer=J.peer,ee.connectedPeerUnhealthySinceMs=null,In(ee),be&&ne(Ne,ve),Yr(ee,oe)},We=(ve,J,ee)=>{if(W){ve.destroy();return}let Ne=Xr(ce.peerStates,J);if(Ne.connectedPeer){let Te=te[J];if(Te&&Ne.connectedPeer===Te.peer&&Te.bindings[E])return;Ne.connectedPeer!==ve&&!ve.isDead&&ve.destroy();return}let be=te[J];if(be&&l.getHealth(be.peer)==="stale"&&(l.clear(U,J,{destroyPeer:!0}),be=void 0),be&&be.peer!==ve){ve.isDead||ve.destroy(),_e(J,be);return}let Me=!be;be||(be=l.register(U,J,ve,X)),_e(J,be),Me&&f(U,be)},He=(ve,J)=>{if(W)return;let ee=ce.peerStates[J];ee?.connectedPeer===ve&&(ec(ee,J,"close-event"),ye(),!Fe&&Q&&ce.requeueAnnounce?.())},Fe=!!I.passive,Ce=null,se,D=hn,ye=()=>{if(!Fe||!ce.isActive)return;let ve=!1;as(ce.peerStates).forEach(([J,ee])=>{ee.connectedPeer||ee.answeringPeer||ee.offerInitPromise||ee.offerPeer||ee.offerRelays.some(Boolean)?ve=!0:ee.status==="idle"&&delete ce.peerStates[J]}),ve||(ce.isActive=!1,se=pt(se),M.forEach(pt),M.length=0,D(),Ce?.roomToken&&g(U,Ce.roomToken,!1))},ce={appId:U,roomId:E,config:I,peerStates:{},rootTopicPlaintext:$,rootTopicP:z,selfTopicP:L,toPlain:fe,toCipher:G,isLeaving:()=>W,isPassive:Fe,isActive:!Fe,onJoinError:K,sharedPeers:l,offerPool:oe,encryptOffer:Ue,initPeer:fd,connectPeer:We,disconnectPeer:He,attachSharedPeerToRoom:_e,checkDeactivate:ye,announceIntervals:[],announceIntervalMs:Ha},he={config:I,appId:U,roomId:E,isPassive:Fe},we=M0(ce);if(!m){let ve=n(I);w=(Array.isArray(ve)?ve:[ve]).map(J=>Promise.resolve(J)),m=!0,b=I.relayConfig?.manualReconnection?hn:_g()}!Fe&&!oe.isActive&&oe.warmup(),ce.announceIntervals=w.map(()=>Ha);let ze=w.map(()=>Ha),Ee=w.map(()=>0),C=w.map(()=>0),M=[],Y=w.map(async(ve,J)=>e(await ve,await z,await L,we(J),ee=>oe.getOffers(ee,Ue),he));hs([z,L]).then(([ve,J])=>{if(W)return;let ee=async(Ne,be)=>{if(W||Fe&&!ce.isActive)return;let Me=Fe?{passive:!0}:void 0,Te;try{Te=await t(Ne,ve,J,Me,he),C[be]=0}catch(Pe){let j=C[be]??0;j===0&&I.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Gn}: announce failed - ${Bs(Pe,"")}`),C[be]=j+1}if(W||Fe&&!ce.isActive||Te&&typeof Te!="number"&&"stopAnnouncing"in Te)return;typeof Te=="number"?(ce.announceIntervals[be]=Te,ze[be]=Te):Te&&(ze[be]=Te.nextAnnounceMs,Q||(Q=Te.reannounceOnDisconnect===!0));let qe=Ee[be]??0;Ee[be]=qe+1;let Ze=ze[be]??Ha,H=w0[qe];M[be]=setTimeout(()=>{ee(Ne,be)},typeof H=="number"?Math.min(Ze,H):Ze)};D=()=>{i&&w.forEach(async Ne=>{let be=await Ne;W||i(be,ve,J,he)})},ce.requeueAnnounce=()=>{M.forEach(pt),M.length=0,se=pt(se),oe.isActive||oe.warmup(),Ce?.roomToken&&g(U,Ce.roomToken,!0),se=setTimeout(ye,S0),w.forEach(async(Ne,be)=>{let Me=await Ne;Me&&!W&&(Ee[be]=0,ee(Me,be))})},Y.forEach(async(Ne,be)=>{if(await Ne,W)return;let Me=await w[be];Me&&!W&&(!Fe||ce.isActive)&&ee(Me,be)})});let ne=hn,{compose:ae}=Pg(I.password??"",U,E),ie=ae(v),Oe={...ie?{onPeerHandshake:ie}:{},...S===void 0?{}:{handshakeTimeoutMs:S},isPassive:Fe,onHandshakeError:(ve,J)=>K?.({error:J.replace(/^handshake failed: /,""),appId:U,peerId:ve,roomId:E})};s[U]??(s[U]={});let Se=h(U),ke=jg(ve=>ne=ve,ve=>{if(W)return;let J=ce.peerStates[ve];J?.connectedPeer&&(J.connectedPeer=null,In(J),ye())},()=>{W=!0,ne=hn;let ve=r[U]?.[E];ve?.roomToken&&(g(U,ve.roomToken,!1),delete a[U]?.[ve.roomToken],a[U]&&!Rn(a[U]).length&&delete a[U]),r[U]&&(delete r[U][E],Rn(r[U]).length||delete r[U]),as(ce.peerStates).forEach(([J,ee])=>{if(ee.answeringExpiryTimer=pt(ee.answeringExpiryTimer),ee.connectedPeer&&!ee.connectedPeer.isDead){let Ne=te[J];(!Ne||Ne.peer!==ee.connectedPeer)&&ee.connectedPeer.destroy()}ee.answeringPeer&&!ee.answeringPeer.isDead&&ee.answeringPeer.destroy(),Yr(ee,oe),ee.connectedPeer=null,ee.answeringPeer=null,In(ee)}),s[U]&&(delete s[U][E],Rn(s[U]).length===0&&delete s[U]),M.forEach(pt),se=pt(se),Y.forEach(async J=>{(await J)()}),!c()&&(m=!1,oe.destroy(),_=null,b(),p(U))},Oe);return Ce={roomToken:null,roomTokenPromise:F,attachSharedPeerToRoom:_e,shouldAdvertise:()=>!Fe||ce.isActive},Se[E]=Ce,F.then(ve=>{let J=Ce;!J||W||r[U]?.[E]!==J||(J.roomToken=ve,d(U)[ve]=E,Os(te).forEach(ee=>{ee.remoteRoomTokens.has(ve)&&_e(ee.peerId,ee)}),(!Fe||ce.isActive)&&g(U,ve,!0))}),s[U][E]=ke}},E0=["offer","answer","candidate"],C0=6e4,R0=n=>{if(typeof n=="string")try{let e=zs(n);return e&&typeof e=="object"?e:null}catch{return null}return n},Wl=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,P0=n=>E0.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),I0=n=>{let e=R0(n);if(!e||P0(e))return!1;let t=Wl(e,"peerId");return!!(t&&t!==kn&&e.passive!==!0&&!Wl(e,"answer")&&!Wl(e,"candidate"))},$l=n=>{if(!n)throw dt("topic strategy missing room context");return n},Td=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),ql=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),L0=({steadyAnnounceIntervalMs:n=C0,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>A0({init:t,subscribe:async(a,o,l,c,h,d)=>{let u=$l(d),f=(I,E)=>{s(a,I,E,ql(u,"signal",o,l))},g=null,x=!1,p=null,m=!1,w=I=>{x||(x=!0,I())},_=()=>(p||(p=Promise.resolve(i(a,l,(I,E)=>{m||c(I,E,f)},Td(u,"self",o,l))).then(I=>{g=I,m&&w(I)})),p);u.isPassive||await _();let b=await i(a,o,async(I,E)=>{m||(u.isPassive&&I0(E)&&await _(),m||await c(I,E,f))},Td(u,"root",o,l));return()=>{m=!0,g&&w(g),b()}},announce:async(a,o,l,c,h)=>{let d=$l(h),u=await s(a,o,mn({peerId:kn,...c}),ql(d,"announce",o,l));return typeof u=="number"||u!==void 0&&"stopAnnouncing"in u?u:{nextAnnounceMs:u?.nextAnnounceMs??n,reannounceOnDisconnect:u?.reannounceOnDisconnect??e}},...r?{deactivate:(a,o,l,c)=>{let h=$l(c);return r(a,o,ql(h,"announce",o,l))}}:{}}),hf=vg(n=>n.socket),k0=5,uf="x",df="EVENT",{secretKey:D0,publicKey:U0}=Yd.keygen(),N0=Wr(U0),ff={},O0={},Xl={},Ad=250,qa=6e4,F0=15*6e4,B0=5333,Zr=new WeakMap,tc=new WeakSet,os=new WeakMap,Ed=n=>{let e=Zr.get(n),t=Math.min(e?.delayMs?Math.max(qa,e.delayMs*2):qa,F0);return Zr.set(n,{delayMs:t,untilMs:Date.now()+t}),t},z0=n=>{let e=Zr.get(n);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},Yl=n=>({nextAnnounceMs:n}),H0={stopAnnouncing:!0},V0=n=>{if(tc.has(n))return!1;let e=os.get(n);return e&&(clearTimeout(e.timer),os.delete(n)),tc.add(n),Zr.delete(n),n.close?.(),!0},G0=(n,e)=>{let t=os.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));let i=t?.eventIds??new Set([e]),s=setTimeout(()=>{os.delete(n)},B0);os.set(n,{eventIds:i,timer:s})},W0=(n,e)=>{let t=os.get(n);return t?.eventIds.has(e)?(clearTimeout(t.timer),os.delete(n),!0):!1},cc=()=>Math.floor(Date.now()/1e3),hc=n=>Xl[n]??(Xl[n]=jd(n,1e4)+2e4),pf=async(n,e)=>{let t={kind:hc(n),tags:[[uf,n]],created_at:cc(),content:e,pubkey:N0},i=await Za("SHA-256",mn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return mn([df,{...t,id:Wr(i),sig:Wr(await Yd.signAsync(i,D0))}])},$0=(n,e)=>(ff[n]=e,mn(["REQ",n,{kinds:[hc(e)],since:cc(),"#x":[e]}])),li={},mf=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},q0=(n,e,t)=>{var s;let i=li[s=n.url]??(li[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),gf(n,i)},X0=(n,e)=>{let t=li[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),mf(t),t.subIds.forEach(i=>n.send(mn(["CLOSE",i]))),delete li[n.url]):gf(n,t))},gf=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{yf(n)}finally{mf(e)}},0))},Y0=n=>{let e=li[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},yf=n=>{let e=li[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],s=cc();for(let r=0;r<t.length;r+=Ad)i.push(t.slice(r,r+Ad));for(;e.subIds.length>i.length;){let r=e.subIds.pop();r&&n.send(mn(["CLOSE",r]))}i.forEach((r,a)=>{var l;let o=(l=e.subIds)[a]??(l[a]=Vs(64));n.send(mn(["REQ",o,{kinds:[...new Set(r.map(hc))],since:s,"#x":r}]))})},Z0=n=>{let e=li[n.url];e&&e.topics.size>0&&yf(n)},K0=L0({init:n=>yg(n,xf,k0,!0).map(e=>{let t=hf.register(e,()=>xg(e,i=>{let[s,r,a,o]=zs(i);if(s!==df){let l=`${Gn}: relay failure from ${t.url} - `,c=s==="CLOSED"&&typeof a=="string"?a:o,h=s==="OK"&&a===!1,d=h&&c?.startsWith("rate-limited:"),u=h&&c?.startsWith("duplicate:"),f=s==="CLOSED"||h&&!d&&!u,g=s==="OK"&&W0(t,r);if(f&&!V0(t))return;d?Ed(t):g&&Zr.delete(t),!u&&n.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(l+r):(h||s==="CLOSED")&&console.warn(l+c));return}if(a&&typeof a=="object"&&"content"in a){let{content:l}=a,c=O0[r];if(c){c(ff[r]??"",l);return}let h=li[t.url];if(h?.subIds.includes(r)&&a.tags){let d=a.tags.find(u=>u[0]===uf);d?.[1]&&h.topics.get(d[1])?.(d[1],l)}}},()=>Z0(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{q0(n,e,(r,a)=>{t(r,a)});let s=()=>{X0(n,e)};return i.kind==="root"?Y0(n).then(()=>s):s},publishTopic:async(n,e,t,i)=>{if(tc.has(n)||n.isClosed)return i.kind==="announce"?H0:void 0;if(i.kind==="announce"){let o=z0(n);if(o>0)return Yl(Math.max(qa,o))}let s=await pf(e,typeof t=="string"?t:mn(t)),r=n.socket.readyState===1;if(n.send(s),i.kind!=="announce")return;if(!r)return Yl(Ed(n));let a=zs(s)[1].id;return G0(n,a),Yl(qa)}}),J0=hf.getSockets,xf=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);});var Ul=document.documentElement,Qu=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,ed=()=>Ul.dataset.theme||(Qu?.matches?"dark":"light");function Dl(){let n=ed()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(e=>{e.textContent=n?"\u2600\uFE0F":"\u{1F319}",e.title=n?"Chuy\u1EC3n sang giao di\u1EC7n s\xE1ng":"Chuy\u1EC3n sang giao di\u1EC7n t\u1ED1i",e.setAttribute("aria-label",e.title)})}function Xm(){try{let n=localStorage.getItem("theme");(n==="dark"||n==="light")&&(Ul.dataset.theme=n)}catch{}document.querySelectorAll("[data-theme-toggle]").forEach(n=>{n.onclick=()=>{let e=ed()==="dark"?"light":"dark";Ul.dataset.theme=e;try{localStorage.setItem("theme",e)}catch{}Dl()}}),Qu?.addEventListener?.("change",Dl),Dl()}Xm();var Ba=typeof window<"u"&&window.SITE_CONFIG||{},Us={appId:"masoi-online-vn-v1",turn:Array.isArray(Ba.turn)?Ba.turn.filter(n=>n&&n.urls):[],relayUrls:Array.isArray(Ba.relayUrls)?Ba.relayUrls:[]};async function bf(n,{local:e=!1,ns:t=""}={}){let i=(t?t+"-":"")+n.toUpperCase();return e?Q0(i):j0(i)}async function j0(n){let{joinRoom:e,selfId:t}=await Promise.resolve().then(()=>(_f(),vf)),i={appId:Us.appId};Us.turn?.length&&(i.turnConfig=Us.turn),Us.relayUrls?.length&&(i.relayConfig={urls:Us.relayUrls});let s=e(i,n,{onJoinError:c=>console.warn("[net] join error",c)}),r={},a={},o={selfId:t,mode:"p2p",on(c,h){a[c]=h,l(c).onMessage=(d,{peerId:u})=>h(d,u)},send(c,h,d=null){return l(c).send(h,d?{target:d}:void 0).catch(u=>console.warn("[net] send",u))},peers:()=>Object.keys(s.getPeers()),set onPeerJoin(c){s.onPeerJoin=c},set onPeerLeave(c){s.onPeerLeave=c},set onPeerStream(c){s.onPeerStream=c},addStream:(c,h)=>s.addStream(c,h?{target:h}:void 0),removeStream:c=>s.removeStream(c),leave:()=>s.leave()};function l(c){return r[c]||(r[c]=s.makeAction(c))}return o}function Q0(n){let e=Math.random().toString(36).slice(2,10),t=new BroadcastChannel("masoi-"+n),i={},s=new Map,r=()=>{},a=()=>{},o=c=>t.postMessage({...c,from:e});t.onmessage=({data:c})=>{if(c.from===e||c.to&&!c.to.includes(e))return;let h=!s.has(c.from);if(s.set(c.from,Date.now()),c.k==="bye"){s.delete(c.from),a(c.from);return}h&&(r(c.from),o({k:"hi",to:[c.from]})),c.k==="msg"&&setTimeout(()=>i[c.type]?.(c.data,c.from),0)};let l=setInterval(()=>{o({k:"hi"});let c=Date.now();for(let[h,d]of s)c-d>6e3&&(s.delete(h),a(h))},1500);return window.addEventListener("beforeunload",()=>o({k:"bye"})),setTimeout(()=>o({k:"hi"}),50),{selfId:e,mode:"local",on(c,h){i[c]=h},send(c,h,d=null){return o({k:"msg",type:c,data:JSON.parse(JSON.stringify(h)),to:d?[].concat(d):null}),Promise.resolve()},peers:()=>[...s.keys()],set onPeerJoin(c){r=c;for(let h of s.keys())c(h)},set onPeerLeave(c){a=c},set onPeerStream(c){},addStream(){},removeStream(){},leave(){o({k:"bye"}),clearInterval(l),t.close()}}}var Ja=class{constructor(e){this.net=e,this.stream=null,this.micOn=!0,this.deaf=!1,this.canSpeak=!0,this.peers=new Map,this.hear=()=>!0,this.ctx=null,this.self=null,this.onLevels=()=>{},this._loop=this._loop.bind(this)}get enabled(){return!!this.stream}async enable(){this.stream||(this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0},video:!1}),this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),await this.ctx.resume().catch(()=>{}),this.self=this._analyser(this.stream),this.net.addStream(this.stream),this.apply(),requestAnimationFrame(this._loop))}ensureCtx(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.resume().catch(()=>{})}peerJoined(e){this.stream&&this.net.addStream(this.stream,e)}peerStream(e,t){this.peerLeft(t);let i=document.createElement("audio");i.autoplay=!0,i.playsInline=!0,i.srcObject=e,document.getElementById("audio-sink").appendChild(i),i.play().catch(()=>{}),this.ensureCtx();let s=this._analyser(e);this.peers.set(t,{audio:i,...s}),this.apply()}peerLeft(e){let t=this.peers.get(e);t&&(t.audio.srcObject=null,t.audio.remove(),this.peers.delete(e))}setMic(e){this.micOn=e,this.apply()}setDeaf(e){this.deaf=e,this.apply()}setRules(e){this.canSpeak=e.canSpeak,this.hear=e.canHear,this.apply()}apply(){if(this.stream)for(let e of this.stream.getAudioTracks())e.enabled=this.micOn&&this.canSpeak;for(let[e,t]of this.peers)t.audio.muted=this.deaf||!this.hear(e),t.audio.muted||t.audio.play().catch(()=>{})}_analyser(e){try{let t=this.ctx.createMediaStreamSource(e),i=this.ctx.createAnalyser();return i.fftSize=512,t.connect(i),{analyser:i,data:new Uint8Array(i.fftSize)}}catch{return{analyser:null,data:null}}}_level(e){if(!e?.analyser)return 0;e.analyser.getByteTimeDomainData(e.data);let t=0;for(let i=0;i<e.data.length;i++){let s=(e.data[i]-128)/128;t+=s*s}return Math.sqrt(t/e.data.length)}_loop(e){if(!this._last||e-this._last>120){this._last=e;let t=new Set;this.self&&this.micOn&&this.canSpeak&&this._level(this.self)>.04&&t.add("self");for(let[i,s]of this.peers)!s.audio.muted&&this._level(s)>.04&&t.add(i);this.onLevels(t)}requestAnimationFrame(this._loop)}};var St=n=>`<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${n}</svg>`,jr={wolf:St(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),villager:St(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),seer:St(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),guard:St(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),witch:St(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),hunter:St(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`)},ey={moon:St('<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>'),sun:St('<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>'),skull:St('<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>'),vote:St('<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>'),noose:St('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>'),mic:St('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>'),micOff:St('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>'),speaker:St('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>'),speakerOff:St('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>'),crown:St('<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>'),copy:St('<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>'),chat:St('<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>'),users:St('<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>'),card:St('<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>'),door:St('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>'),heal:St('<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>'),poison:St('<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>')};function Di(n,e=""){return`<span class="ic ${e}">${ey[n]||jr[n]||""}</span>`}var Ui=["\u{1F98A}","\u{1F43C}","\u{1F42F}","\u{1F438}","\u{1F435}","\u{1F427}","\u{1F981}","\u{1F428}","\u{1F430}","\u{1F419}","\u{1F984}","\u{1F432}","\u{1F43B}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F433}","\u{1F996}"],us=["#ff6b6b","#ffa94d","#ffd43b","#38d9a9","#4dabf7","#9775fa","#f783ac","#69db7c"];var de=(n,e=document)=>e.querySelector(n),Tt=(n,e=document)=>[...e.querySelectorAll(n)],uc=new URLSearchParams(location.search),ea=uc.get("local")==="1"||window.MASOI_LOCAL===!0;function Mf(n){return{get:e=>{try{return n().getItem(e)}catch{return null}},set:(e,t)=>{try{n().setItem(e,t)}catch{}},del:e=>{try{n().removeItem(e)}catch{}}}}var Gs=Mf(()=>sessionStorage),Dn=Mf(()=>localStorage),Ke=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function wf(n){let e="abcdefghijkmnpqrstuvwxyz23456789",t="";for(let i of crypto.getRandomValues(new Uint8Array(n)))t+=e[i%e.length];return t}var Sf=()=>wf(6).toUpperCase();function Tf(){let n=null;try{n=JSON.parse(Dn.get("masoi-av")||"null")}catch{}return(!n||!Ui.includes(n.e))&&(n={e:Ui[Math.floor(Math.random()*Ui.length)],c:Math.floor(Math.random()*us.length)}),{name:Dn.get("masoi-name")||"",av:n}}function ja(n){Dn.set("masoi-name",n.name||""),Dn.set("masoi-av",JSON.stringify(n.av))}function Af(){let n="masoi-cid",e=Gs.get(n)||wf(12);return Gs.set(n,e),e}var jn=(n,e="")=>n?.av?`<span class="avatar ${e}" style="--av:${us[n.av.c]||us[0]}">${n.av.e}</span>`:`<span class="avatar ${e}">?</span>`;function Ef(n,e,t){let i=()=>{n.innerHTML=`
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${Ui.map(s=>`<button type="button" class="${s===e.av.e?"on":""}" data-e="${s}" aria-label="Avatar ${s}">${s}</button>`).join("")}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">M\xE0u n\u1EC1n</div>
      <div class="color-row">${us.map((s,r)=>`<button type="button" class="${r===e.av.c?"on":""}" data-c="${r}" style="--sw:${s}" aria-label="M\xE0u ${r+1}"></button>`).join("")}</div>`,Tt("[data-e]",n).forEach(s=>s.onclick=()=>{e.av.e=s.dataset.e,ja(e),i(),t?.()}),Tt("[data-c]",n).forEach(s=>s.onclick=()=>{e.av.c=Number(s.dataset.c),ja(e),i(),t?.()})};i()}function nn(n,e=!1){let t=de("#toasts");t||(t=document.createElement("div"),t.id="toasts",document.body.appendChild(t));let i=document.createElement("div");i.className="toast"+(e?" err":""),i.textContent=n,t.appendChild(i),setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.remove(),300)},3200)}function dc(){let n=document.createElement("div");n.className="confetti";let e=["#ffc93d","#ff5a6a","#2f8bff","#12c584","#ff6fb5","#9b5cf6"];n.innerHTML=Array.from({length:80},()=>`<i style="left:${Math.random()*100}%;background:${e[Math.floor(Math.random()*e.length)]};animation-duration:${2+Math.random()*2.5}s;animation-delay:${Math.random()*.8}s;transform:rotate(${Math.random()*360}deg)"></i>`).join(""),document.body.appendChild(n),setTimeout(()=>n.remove(),5500)}var Ni;function Qa(){try{Ni||(Ni=new(window.AudioContext||window.webkitAudioContext)),Ni.resume()}catch{}}document.addEventListener("pointerdown",Qa,{once:!0});function Qr(n,e="sine",t=.09){try{if(!Ni||Ni.state!=="running")return;let i=Ni.currentTime;for(let[s,r]of n){let a=Ni.createOscillator(),o=Ni.createGain();a.type=e,a.frequency.setValueAtTime(s,i),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+r),a.connect(o).connect(Ni.destination),a.start(i),a.stop(i+r+.05),i+=r*.85}}catch{}}var ta={buzz:()=>Qr([[880,.12],[1320,.25]],"square",.06),correct:()=>Qr([[523,.12],[659,.12],[784,.12],[1047,.35]],"triangle",.1),wrong:()=>Qr([[220,.25],[160,.4]],"sawtooth",.05),tick:()=>Qr([[1200,.05]],"sine",.04),start:()=>Qr([[392,.1],[523,.1],[659,.2]],"triangle",.08)};function fc(n){let e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",n),ea&&e.searchParams.set("local","1"),e.toString()}async function pc(n,e="\u0110\xE3 sao ch\xE9p!"){try{await navigator.clipboard.writeText(n),nn(e)}catch{window.prompt("Sao ch\xE9p link n\xE0y:",n)}}var Cf={turns:2,actTime:90,answerTime:12,revealTime:6,categories:null,order:"random",hints:!0,mult:!0,rerolls:1},na=(n,e,t,i)=>(n=Math.round(Number(n)),Number.isFinite(n)?Math.max(e,Math.min(t,n)):i);function Ws(n){return String(n??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim()}function ty(n,e){let t=Ws(n);if(!t)return!1;let i=t.replace(/ /g,"");return e.some(s=>{let r=Ws(s);return r&&(r===t||r.replace(/ /g,"")===i)})}function mc(n){let e=[],t=[],i=new Set;for(let[a,o]of(n?.items||[]).entries()){if(!o||typeof o!="object"){e.push(`\u0110\u1EC1 #${a+1} kh\xF4ng h\u1EE3p l\u1EC7`);continue}let l=(Array.isArray(o.answer)?o.answer:[o.answer]).filter(h=>typeof h=="string"&&Ws(h));if(!o.name||!l.length){e.push(`\u0110\u1EC1 #${a+1} thi\u1EBFu name ho\u1EB7c answer`);continue}let c=String(o.id||Ws(o.name).replace(/ /g,"-"));for(;i.has(c);)c+="_";i.add(c),t.push({id:c,name:String(o.name),image:String(o.image||"\u2753"),answer:l,points:na(o.points,1,1e3,10),category:String(o.category||"Kh\xE1c"),hint:o.hint?String(o.hint).slice(0,80):"",acting:o.acting?String(o.acting).slice(0,120):"",multipliers:Array.isArray(o.multipliers)?o.multipliers.map(Number).filter(h=>h>0):null})}let s=(n?.multipliers||[]).map(a=>({value:Number(a.value),weight:Number(a.weight)})).filter(a=>a.value>0&&a.weight>0);s.length||(s=[{value:1,weight:1}]);let r=Number.isFinite(Number(n?.actorShare))?Math.max(0,Number(n.actorShare)):.5;return{items:t,multipliers:s,actorShare:r,errors:e,categories:[...new Set(t.map(a=>a.category))]}}function ny(n,e){let t=n.name.trim().split(/\s+/);return{pattern:t.map(s=>[...s].map((r,a)=>e>=2&&a===0?r.toUpperCase():"_").join(" ")).join("   "),letters:t.map(s=>[...s].length),text:n.hint||""}}function Rf(n,e){if(e.multipliers?.length)return e.multipliers[Math.floor(Math.random()*e.multipliers.length)];let t=n.multipliers.reduce((s,r)=>s+r.weight,0),i=Math.random()*t;for(let s of n.multipliers)if((i-=s.weight)<0)return s.value;return n.multipliers[0].value}var Zt={body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down",propL:null,propR:null,ears:null,tail:null,turn:"front",loop:null,fx:null},eo=class{constructor(e,t,i,{now:s=()=>Date.now(),cleanAv:r=o=>o,cleanLook:a=o=>o}={}){this.now=s,this.cleanAv=r,this.cleanLook=a,this.data=t,this.onChange=()=>{},this.onEvent=()=>{},this.s=i||{hostCid:e,phase:"lobby",players:[],config:{...Cf},acted:[],round:0,turnCount:0,totalTurns:0,turn:null,used:[],log:[],logSeq:0,endsAt:0,durMs:0,gameId:0,pose:{...Zt}}}get players(){return this.s.players}P(e){return this.s.players.find(t=>t.cid===e)}byPid(e){return this.s.players.find(t=>t.pid===e)}isHost(e){return e===this.s.hostCid}changed(){this.onChange()}log(e,t="info"){this.s.log.push({id:++this.s.logSeq,text:e,kind:t,ts:Date.now()}),this.s.log.length>80&&this.s.log.splice(0,this.s.log.length-80)}setTimer(e){this.s.durMs=Math.round(e*1e3),this.s.endsAt=this.now()+this.s.durMs}name(e){return this.P(e)?.name??"???"}addPlayer(e,t,i){let s=String(t?.name||"").trim().slice(0,18)||"Ng\u01B0\u1EDDi l\u1EA1",r=this.cleanAv(t?.av),a=this.cleanLook(t?.look),o=this.P(e);if(o)return o.pid=i,o.connected=!0,o.look=a,this.s.phase==="lobby"&&(o.name=s,o.av=r),this.changed(),null;if(this.s.players.length>=16)return"Ph\xF2ng \u0111\xE3 \u0111\u1EE7 ng\u01B0\u1EDDi.";let l=s,c=2;for(;this.s.players.some(h=>h.name===l);)l=`${s} ${c++}`;return this.s.players.push({cid:e,pid:i,name:l,av:r,look:a,connected:!0,score:0,correct:0}),this.log(`${l} \u0111\xE3 v\xE0o ph\xF2ng.`,"join"),this.changed(),null}disconnect(e){let t=this.byPid(e);if(t){if(this.s.phase==="lobby"&&!this.isHost(t.cid))this.s.players=this.s.players.filter(i=>i!==t),this.log(`${t.name} \u0111\xE3 r\u1EDDi ph\xF2ng.`,"leave");else{if(t.connected=!1,this.s.turn?.actor===t.cid&&(this.s.phase==="acting"||this.s.phase==="answering")){this.log(`${t.name} m\u1EA5t k\u1EBFt n\u1ED1i, b\u1ECF qua l\u01B0\u1EE3t di\u1EC5n.`,"leave"),this.reveal(null);return}this.s.phase==="answering"&&this.s.turn?.answering?.cid===t.cid&&this.wrongAnswer(t.cid,"")}this.changed()}}handle(e,t){if(!this.P(e)||!t||typeof t!="object")return"Kh\xF4ng h\u1EE3p l\u1EC7.";let s=this.isHost(e),r=this.s;switch(t.t){case"cfg":return s&&r.phase==="lobby"?this.setConfig(t.cfg):"Ch\u1EC9 ch\u1EE7 ph\xF2ng m\u1EDBi ch\u1EC9nh \u0111\u01B0\u1EE3c.";case"kick":{if(!s||r.phase!=="lobby"||t.cid===e)return"Kh\xF4ng th\u1EC3 m\u1EDDi ra.";let a=this.P(t.cid);return a&&(r.players=r.players.filter(o=>o!==a),this.log(`${a.name} \u0111\xE3 b\u1ECB m\u1EDDi ra.`,"leave"),this.changed()),null}case"start":return s?this.start():"Ch\u1EC9 ch\u1EE7 ph\xF2ng m\u1EDBi b\u1EAFt \u0111\u1EA7u \u0111\u01B0\u1EE3c.";case"lobby":return!s||r.phase!=="end"?"Kh\xF4ng th\u1EC3.":(this.toLobby(),null);case"skipTurn":return!(s||r.turn?.actor===e)||!["acting","answering"].includes(r.phase)?"Kh\xF4ng th\u1EC3 b\u1ECF qua.":(this.log(`${this.name(r.turn.actor)} \u0111\xE3 b\u1ECF l\u01B0\u1EE3t.`,"info"),this.reveal(null),null);case"reroll":return this.reroll(e);case"buzz":return this.buzz(e);case"answer":return this.answer(e,t.text);case"pose":return this.setPose(e,t.pose)}return"H\xE0nh \u0111\u1ED9ng kh\xF4ng r\xF5."}setConfig(e){let t=this.s.config;if(e&&"turns"in e&&(t.turns=na(e.turns,1,5,t.turns)),e&&"actTime"in e&&(t.actTime=na(e.actTime,20,300,t.actTime)),e&&"answerTime"in e&&(t.answerTime=na(e.answerTime,5,60,t.answerTime)),e&&"order"in e&&(t.order=e.order==="join"?"join":"random"),e&&"hints"in e&&(t.hints=!!e.hints),e&&"mult"in e&&(t.mult=!!e.mult),e&&"rerolls"in e&&(t.rerolls=na(e.rerolls,0,3,t.rerolls??1)),e&&"categories"in e){let i=this.data.categories;t.categories=Array.isArray(e.categories)?e.categories.filter(s=>i.includes(s)):null,t.categories&&(t.categories.length===i.length||!t.categories.length)&&(t.categories=t.categories.length?null:[])}return this.changed(),null}pool(){let e=this.s.config.categories;return this.data.items.filter(t=>!e||e.includes(t.category))}canStart(){return this.s.players.filter(t=>t.connected).length<2?"C\u1EA7n \xEDt nh\u1EA5t 2 ng\u01B0\u1EDDi ch\u01A1i.":this.pool().length?null:"Ch\u01B0a ch\u1ECDn nh\xF3m \u0111\u1EC1 n\xE0o."}start(){let e=this.canStart();if(e)return e;let t=this.s;return t.players=t.players.filter(i=>i.connected),t.players.forEach(i=>{i.score=0,i.correct=0}),Object.assign(t,{round:1,acted:[],turnCount:0,totalTurns:t.config.turns*t.players.length,turn:null,used:[],log:[],gameId:t.gameId+1}),this.log("Tr\xF2 ch\u01A1i b\u1EAFt \u0111\u1EA7u! M\u1ED7i ng\u01B0\u1EDDi s\u1EBD l\u1EA7n l\u01B0\u1EE3t l\xEAn s\xE2n kh\u1EA5u.","phase"),this.nextTurn(),null}drawItem(){let e=this.s,t=this.pool().filter(s=>!e.used.includes(s.id));t.length||(e.used=[],t=this.pool());let i=t[Math.floor(Math.random()*t.length)];return e.used.push(i.id),i}pickActor(){let e=this.s,t=()=>e.players.filter(r=>r.connected&&!e.acted.includes(r.cid)),i=t();if(!i.length){if(e.round++,e.acted=[],e.round>e.config.turns)return null;i=t()}if(!i.length)return null;let s=e.config.order==="join"?i[0]:i[Math.floor(Math.random()*i.length)];return e.acted.push(s.cid),s.cid}nextTurn(){let e=this.s,t=this.pickActor();if(!t)return this.finish();e.turnCount++,e.totalTurns=Math.max(e.totalTurns,e.turnCount);let i=this.drawItem();e.turn={n:e.turnCount,total:e.totalTurns,round:e.round,actor:t,item:i,mult:e.config.mult===!1?1:Rf(this.data,i),answering:null,locked:[],rerolls:e.config.rerolls??1,hintLevel:0,actLeft:0,result:null,guesses:[]},e.pose={...Zt},e.phase="acting",this.setTimer(e.config.actTime),this.log(`L\u01B0\u1EE3t ${e.turn.n}/${e.turn.total}: ${this.name(e.turn.actor)} l\xEAn s\xE2n kh\u1EA5u! \u0110\u1EC1 x${e.turn.mult}.`,"phase"),this.onEvent({type:"turn"}),this.changed()}reroll(e){let t=this.s.turn;return this.s.phase!=="acting"||t?.actor!==e?"Ch\u1EC9 ng\u01B0\u1EDDi di\u1EC5n m\u1EDBi \u0111\u1ED5i \u0111\u1EC1 \u0111\u01B0\u1EE3c.":t.rerolls<=0?"B\u1EA1n \u0111\xE3 h\u1EBFt l\u01B0\u1EE3t \u0111\u1ED5i \u0111\u1EC1.":(t.rerolls--,t.item=this.drawItem(),t.mult=this.s.config.mult===!1?1:Rf(this.data,t.item),t.locked=[],t.hintLevel=0,this.s.endsAt=this.now()+this.s.config.actTime*1e3,this.log(`${this.name(e)} \u0111\xE3 \u0111\u1ED5i \u0111\u1EC1. \u0110\u1EC1 m\u1EDBi x${t.mult}.`,"info"),this.changed(),null)}setPose(e,t){return this.s.turn?.actor!==e||!t||typeof t!="object"||(this.s.pose={...Zt,...t}),null}buzz(e){let t=this.s,i=t.turn;return t.phase!=="acting"?t.phase==="answering"?null:"Ch\u01B0a th\u1EC3 b\u1EA5m chu\xF4ng.":i.actor===e?"Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c b\u1EA5m chu\xF4ng.":i.locked.includes(e)?"B\u1EA1n \u0111\xE3 tr\u1EA3 l\u1EDDi sai l\u01B0\u1EE3t n\xE0y.":(i.actLeft=Math.max(1e3,t.endsAt-this.now()),i.answering={cid:e},t.phase="answering",this.setTimer(t.config.answerTime),this.onEvent({type:"buzz",cid:e}),this.changed(),null)}answer(e,t){let i=this.s,s=i.turn;if(i.phase!=="answering"||s.answering?.cid!==e)return"Kh\xF4ng ph\u1EA3i l\u01B0\u1EE3t tr\u1EA3 l\u1EDDi c\u1EE7a b\u1EA1n.";if(t=String(t||"").trim().slice(0,60),ty(t,s.item.answer)){let r=s.item.points*s.mult,a=Math.round(r*this.data.actorShare),o=this.P(e),l=this.P(s.actor);o.score+=r,o.correct++,l&&(l.score+=a),s.guesses.push({cid:e,text:t,ok:!0}),this.log(`${o.name} \u0111o\xE1n \u0111\xFAng "${s.item.name}"! +${r} \u0111i\u1EC3m${a?` (ng\u01B0\u1EDDi di\u1EC5n +${a})`:""}.`,"correct"),this.reveal({cid:e,gain:r,actorGain:a,text:t})}else this.wrongAnswer(e,t);return null}wrongAnswer(e,t){let i=this.s,s=i.turn;if(s.locked.push(e),s.guesses.push({cid:e,text:t,ok:!1}),s.answering=null,this.log(`${this.name(e)} tr\u1EA3 l\u1EDDi ${t?`"${t}"`:"(kh\xF4ng k\u1ECBp)"} \u2014 sai r\u1ED3i!`,"wrong"),this.onEvent({type:"wrong",cid:e}),i.players.filter(a=>a.connected&&a.cid!==s.actor).every(a=>s.locked.includes(a.cid)))return this.log("Kh\xF4ng c\xF2n ai \u0111\u01B0\u1EE3c tr\u1EA3 l\u1EDDi.","info"),this.reveal(null);i.phase="acting",i.durMs=i.config.actTime*1e3,i.endsAt=this.now()+s.actLeft,this.changed()}reveal(e){let t=this.s;t.turn.result=e,t.turn.answering=null,t.phase="reveal",e||this.log(`H\u1EBFt l\u01B0\u1EE3t! \u0110\xE1p \xE1n l\xE0 "${t.turn.item.name}".`,"reveal"),this.setTimer(t.config.revealTime??Cf.revealTime),this.onEvent({type:e?"correct":"reveal"}),this.changed()}finish(){let e=this.s;e.phase="end",e.turn=null,e.endsAt=0,e.durMs=0;let t=[...e.players].sort((i,s)=>s.score-i.score)[0];this.log(t?`K\u1EBFt th\xFAc! ${t.name} v\xF4 \u0111\u1ECBch v\u1EDBi ${t.score} \u0111i\u1EC3m.`:"K\u1EBFt th\xFAc!","win"),this.onEvent({type:"end"}),this.changed()}toLobby(){let e=this.s;e.players=e.players.filter(t=>t.connected),e.players.forEach(t=>{t.score=0,t.correct=0}),Object.assign(e,{phase:"lobby",turn:null,acted:[],round:0,turnCount:0,endsAt:0,durMs:0,pose:{...Zt}}),this.log("Quay v\u1EC1 ph\xF2ng ch\u1EDD.","phase"),this.changed()}hintFrac(){let e=this.s,t=e.turn;return!t||!["acting","answering"].includes(e.phase)?0:1-(e.phase==="acting"?e.endsAt-this.now():t.actLeft)/(e.config.actTime*1e3)}tick(){let e=this.s;if(e.turn&&e.config.hints!==!1&&["acting","answering"].includes(e.phase)){let t=this.hintFrac(),i=t>=.65?2:t>=.35?1:0;i>(e.turn.hintLevel||0)&&(e.turn.hintLevel=i,this.log(i===1?"\u{1F4A1} G\u1EE3i \xFD: \u0111\xE3 hi\u1EC7n s\u1ED1 ch\u1EEF c\u1EE7a \u0111\xE1p \xE1n.":"\u{1F4A1} G\u1EE3i \xFD: \u0111\xE3 hi\u1EC7n ch\u1EEF c\xE1i \u0111\u1EA7u.","info"),this.changed())}!e.endsAt||this.now()<e.endsAt||(e.phase==="acting"?this.reveal(null):e.phase==="answering"?this.wrongAnswer(e.turn.answering.cid,""):e.phase==="reveal"&&this.nextTurn())}chatFilter(e,t){let i=this.s,s=i.turn;if(s&&["acting","answering"].includes(i.phase)){if(s.actor===e)return{err:"Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c chat! H\xE3y di\u1EC5n t\u1EA3 b\u1EB1ng h\xE0nh \u0111\u1ED9ng."};let r=" "+Ws(t)+" ",a=r.replace(/ /g,"");if(s.item.answer.some(o=>{let l=Ws(o);return l&&(r.includes(" "+l+" ")||l.length>3&&a.includes(l.replace(/ /g,"")))}))return{text:"\u{1F910} (tin nh\u1EAFn b\u1ECB \u1EA9n v\xEC ch\u1EE9a \u0111\xE1p \xE1n \u2014 h\xE3y b\u1EA5m chu\xF4ng \u0111\u1EC3 tr\u1EA3 l\u1EDDi!)",masked:!0}}return{text:t}}pub(){let e=this.s,t=e.turn,i=e.phase==="reveal"||e.phase==="end";return{phase:e.phase,gameId:e.gameId,hostCid:e.hostCid,remaining:e.endsAt?Math.max(0,e.endsAt-this.now()):0,durMs:e.durMs,players:e.players.map(s=>({cid:s.cid,pid:s.pid,name:s.name,av:s.av,skin:s.look?.skin,connected:s.connected,score:s.score,correct:s.correct})),config:e.config,categories:this.data.categories,itemCount:this.data.items.length,poolCount:this.pool().length,turn:t&&{n:t.n,total:t.total,actor:t.actor,mult:t.mult,points:t.item.points,category:t.item.category,answering:t.answering,locked:t.locked,rerolls:t.rerolls,result:t.result,guesses:t.guesses.slice(-6),item:i?t.item:null,hint:t.hintLevel?ny(t.item,t.hintLevel):null},pose:e.pose,actorLook:t?this.P(t.actor)?.look??null:null,log:e.log.slice(-60),canStart:e.phase==="lobby"?this.canStart():null}}priv(e){let t=this.s.turn;return{gameId:this.s.gameId,item:t&&t.actor===e&&["acting","answering","reveal"].includes(this.s.phase)?t.item:null}}};var gc=[{id:"tron",name:"B\xE9 \u0110\u1EE5t",emo:"\u{1F642}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffc93d",bottom:"#2f8bff",shoes:"#ff4d6d",hairStyle:"ahoge",sleeve:.3,pants:.35,face:["blush"]},{id:"hocsinh",name:"H\u1ECDc Sinh",emo:"\u{1F392}",skin:"#fbcca6",hair:"#1d1648",top:"#ffffff",bottom:"#2a3a7a",shoes:"#1d1648",hairStyle:"spiky",sleeve:.3,pants:.35,extra:{scarf:"#ff3d4f",pack:"#38b2ff"}},{id:"cogiao",name:"C\xF4 Gi\xE1o",emo:"\u{1F469}\u200D\u{1F3EB}",skin:"#fcd2b0",hair:"#2a1a14",top:"#fbfbff",bottom:"#fbfbff",shoes:"#c0392b",hairStyle:"long",sleeve:1,pants:1,face:["glasses"],extra:{aodai:"#fbfbff"}},{id:"nonla",name:"C\xF4 Ba N\xF3n L\xE1",emo:"\u{1F38B}",skin:"#f7cfa6",hair:"#1a1a1a",top:"#9b5cf6",bottom:"#ffffff",shoes:"#c0392b",hairStyle:"long",hat:"nonla",sleeve:1,pants:1,extra:{aodai:"#9b5cf6"}},{id:"banhmi",name:"C\xF4 B\xE1nh M\xEC",emo:"\u{1F956}",skin:"#f6c9a0",hair:"#3a2418",top:"#ff8fb8",bottom:"#4b4478",shoes:"#ffc93d",hairStyle:"bun",hat:"scarfHead",hatColor:"#ff6f3c",sleeve:.5,pants:1,extra:{apron:"#ff9a3c"}},{id:"xeom",name:"Ch\xFA Xe \xD4m",emo:"\u{1F6F5}",skin:"#e8b48a",hair:"#1a1a1a",top:"#3aa357",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"helmet",hatColor:"#2fbf71",face:["mustache"],sleeve:1,pants:1},{id:"ngoai",name:"B\xE0 Ngo\u1EA1i",emo:"\u{1F475}",skin:"#f3c9a6",hair:"#eeeef5",top:"#a86b3c",bottom:"#2b2550",shoes:"#6b4426",hairStyle:"bun",face:["glasses","blush"],sleeve:1,pants:1,extra:{belt:"#2b2550"}},{id:"baove",name:"B\xE1c B\u1EA3o V\u1EC7",emo:"\u{1F46E}",skin:"#e8b48a",hair:"#2a1a14",top:"#c9b27a",bottom:"#6b5a3a",shoes:"#1d1648",hairStyle:"short",hat:"cap",hatColor:"#2b3a6b",face:["mustache"],sleeve:.5,pants:1,extra:{whistle:!0,badge:!0,belt:"#3a2a1c"}},{id:"shipper",name:"Anh Shipper",emo:"\u{1F4E6}",skin:"#ffd2a6",hair:"#1a1a1a",top:"#ff8a1f",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"fullhelmet",hatColor:"#ff8a1f",sleeve:1,pants:1,extra:{box:"#ff8a1f"}},{id:"chef",name:"Vua \u0110\u1EA7u B\u1EBFp",emo:"\u{1F468}\u200D\u{1F373}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffffff",bottom:"#2b2550",shoes:"#1d1648",hairStyle:"short",hat:"chef",face:["curly"],sleeve:1,pants:1,extra:{scarf:"#ff3d4f",apron:"#ffffff"}},{id:"chotdon",name:"Ch\u1ECB Ch\u1ED1t \u0110\u01A1n",emo:"\u{1F4F1}",skin:"#fcd2b0",hair:"#a8452a",top:"#ff3d8b",bottom:"#1d1648",shoes:"#ffc93d",hairStyle:"wavy",face:["blush"],sleeve:.3,pants:.4,extra:{dress:"#ff3d8b",chain:!0}},{id:"scientist",name:"Gi\xE1o S\u01B0 Kh\xF9ng",emo:"\u{1F9EA}",skin:"#fbcca6",hair:"#eeeef5",top:"#4dabf7",bottom:"#5b6478",shoes:"#3a2a1c",hairStyle:"messy",face:["glasses"],sleeve:1,pants:1,extra:{coat:"#ffffff",tie:"#ff3d4f"}},{id:"doctor",name:"B\xE1c S\u0129",emo:"\u{1FA7A}",skin:"#f6c9a0",hair:"#2a1a14",top:"#3ccf9e",bottom:"#3ccf9e",shoes:"#ffffff",hairStyle:"slick",hat:"mirror",sleeve:1,pants:1,extra:{coat:"#ffffff"}},{id:"boss",name:"T\u1ED5ng T\xE0i",emo:"\u{1F60E}",skin:"#f6c9a0",hair:"#1a1a1a",top:"#22223a",bottom:"#22223a",shoes:"#0d0d18",hairStyle:"slick",face:["shades"],sleeve:1,pants:1,extra:{tie:"#ff3d4f"}},{id:"idol",name:"Idol Nh\xED",emo:"\u{1F3A4}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff6fb5",bottom:"#ffffff",shoes:"#ff6fb5",hairStyle:"pigtails",face:["blush"],sleeve:.3,pants:.3,extra:{dress:"#ffffff",star:"#ffc93d"}},{id:"rocker",name:"Rocker",emo:"\u{1F3B8}",skin:"#fbcca6",hair:"#ff3d8b",top:"#1d1648",bottom:"#2b2550",shoes:"#ff3d4f",hairStyle:"mohawk",face:["shades"],sleeve:.35,pants:1,extra:{chain:!0}},{id:"rapper",name:"Rapper",emo:"\u{1F9E2}",skin:"#c98b5e",hair:"#1a1a1a",top:"#8b5cf6",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"capBack",hatColor:"#ffc93d",sleeve:1,pants:1,extra:{chain:!0}},{id:"gamer",name:"Game Th\u1EE7",emo:"\u{1F3AE}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#2fbf71",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"messy",hat:"phones",hatColor:"#1d1648",face:["glasses"],sleeve:1,pants:1},{id:"football",name:"C\u1EA7u Th\u1EE7",emo:"\u26BD",skin:"#e8b48a",hair:"#1a1a1a",top:"#ff3d4f",bottom:"#ffffff",shoes:"#ffc93d",hairStyle:"spiky",hat:"band",hatColor:"#ffffff",sleeve:.3,pants:.3,legs:"#ff3d4f"},{id:"farmer",name:"B\xE1c N\xF4ng D\xE2n",emo:"\u{1F33E}",skin:"#d99b6c",hair:"#1a1a1a",top:"#7a5230",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"nonla",sleeve:1,pants:.7,extra:{scarf:"#1d1648"}},{id:"ongdo",name:"\xD4ng \u0110\u1ED3",emo:"\u{1F4DC}",skin:"#f3c9a6",hair:"#eeeef5",top:"#2f6bff",bottom:"#ffffff",shoes:"#1d1648",hairStyle:"bald",hat:"turban",hatColor:"#1d1648",face:["beard","glasses"],sleeve:1,pants:1,extra:{aodai:"#2f6bff"}},{id:"fire",name:"L\xEDnh C\u1EE9u Ho\u1EA3",emo:"\u{1F9D1}\u200D\u{1F692}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffb63d",bottom:"#ffb63d",shoes:"#1d1648",hairStyle:"short",hat:"fire",hatColor:"#ff3d4f",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#ffe14d"}},{id:"astro",name:"Phi H\xE0nh Gia",emo:"\u{1F680}",skin:"#fbcca6",hair:"#3a2a1c",top:"#f2f4ff",bottom:"#f2f4ff",shoes:"#8b93b8",hairStyle:"short",hat:"bubble",sleeve:1,pants:1,gloves:"#ffffff",extra:{pack:"#dfe3f5",badge:!0}},{id:"hero",name:"Si\xEAu Nh\xE2n \u0110\u1EE5t",emo:"\u{1F9B8}",skin:"#ffd2a6",hair:"#1d1648",top:"#2f6bff",bottom:"#ff3d4f",shoes:"#ff3d4f",hairStyle:"ahoge",hat:"band",hatColor:"#ff3d4f",sleeve:1,pants:.2,legs:"#2f6bff",gloves:"#ffffff",extra:{cape:"#ff3d4f",star:"#ffc93d",belt:"#ffc93d"}},{id:"ninja",name:"Ninja H\u1EE5t",emo:"\u{1F977}",skin:"#ffd2a6",hair:"#14102e",top:"#2b2550",bottom:"#2b2550",shoes:"#14102e",hairStyle:"bald",hat:"ninja",hatColor:"#2b2550",sleeve:1,pants:1,extra:{belt:"#ff3d4f"}},{id:"pirate",name:"C\u01B0\u1EDBp Bi\u1EC3n",emo:"\u{1F3F4}\u200D\u2620\uFE0F",skin:"#e8b48a",hair:"#2a1a14",top:"#ffffff",bottom:"#2b2550",shoes:"#3a2a1c",hairStyle:"short",hat:"tricorn",hatColor:"#1d1648",face:["patch","beard"],beard:"#2a1a14",sleeve:1,pants:.75,extra:{belt:"#ff3d4f",vest:"#c0392b"}},{id:"king",name:"Vua H\u1EC1",emo:"\u{1F451}",skin:"#ffd2a6",hair:"#a86b3c",top:"#8b5cf6",bottom:"#ffc93d",shoes:"#ff3d4f",hairStyle:"short",hat:"crown",face:["curly"],sleeve:1,pants:1,extra:{cape:"#e8344a",belt:"#ffc93d"}},{id:"princess",name:"C\xF4ng Ch\xFAa",emo:"\u{1F478}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff8fc8",bottom:"#ff8fc8",shoes:"#ffffff",hairStyle:"long",hat:"tiara",face:["blush"],sleeve:.3,pants:1,extra:{dress:"#ff8fc8"}},{id:"vampire",name:"B\xE1 T\u01B0\u1EDBc Ma",emo:"\u{1F9DB}",skin:"#e9e4f5",hair:"#1a1a1a",top:"#ffffff",bottom:"#1d1648",shoes:"#1d1648",hairStyle:"slick",face:["fangs"],sleeve:1,pants:1,extra:{cape:"#1d1648",collar:"#e8344a",vest:"#e8344a"}},{id:"santa",name:"\xD4ng Gi\xE0 Noel",emo:"\u{1F385}",skin:"#ffd2a6",hair:"#ffffff",top:"#e8344a",bottom:"#e8344a",shoes:"#1d1648",hairStyle:"short",hat:"santa",face:["beard","blush"],beard:"#ffffff",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#1d1648",belly:"#e8344a"}},{id:"bear",name:"G\u1EA5u B\xF4ng",emo:"\u{1F9F8}",skin:"#ffd2a6",hair:"#c98b52",top:"#c98b52",bottom:"#c98b52",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"bear",hatColor:"#c98b52",sleeve:1,pants:1,gloves:"#c98b52",extra:{belly:"#f2d2a9"}},{id:"cat",name:"M\xE8o M\u1EADp",emo:"\u{1F431}",skin:"#fcd2b0",hair:"#ff9a3c",top:"#ff9a3c",bottom:"#ff9a3c",shoes:"#ffffff",hairStyle:"bald",hat:"hood",hood:"cat",hatColor:"#ff9a3c",sleeve:1,pants:1,gloves:"#ffffff",extra:{belly:"#fff1e0"}},{id:"dino",name:"Kh\u1EE7ng Long",emo:"\u{1F996}",skin:"#ffd2a6",hair:"#2fbf71",top:"#2fbf71",bottom:"#2fbf71",shoes:"#1f8f52",hairStyle:"bald",hat:"hood",hood:"dino",hatColor:"#2fbf71",sleeve:1,pants:1,gloves:"#2fbf71",extra:{belly:"#d9f99d"}},{id:"frog",name:"\u1EBEch \u1ED8p",emo:"\u{1F438}",skin:"#fcd2b0",hair:"#7bd148",top:"#7bd148",bottom:"#7bd148",shoes:"#ffc93d",hairStyle:"bald",hat:"hood",hood:"frog",hatColor:"#7bd148",sleeve:1,pants:1,gloves:"#7bd148",extra:{belly:"#e9ffd0"}},{id:"dog",name:"C\u1EADu V\xE0ng",emo:"\u{1F436}",skin:"#fcd2b0",hair:"#e8b04a",top:"#e8b04a",bottom:"#e8b04a",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"dog",hatColor:"#e8b04a",sleeve:1,pants:1,gloves:"#e8b04a",extra:{belly:"#fff1d6",scarf:"#2f8bff"}},{id:"bride",name:"C\xF4 D\xE2u",emo:"\u{1F470}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#ffffff",bottom:"#ffffff",shoes:"#ffffff",hairStyle:"bun",hat:"veil",sleeve:.3,pants:1,face:["blush"],extra:{dress:"#ffffff"}},{id:"beanie",name:"Anh Ch\xE0ng L\u1EA1nh",emo:"\u{1F9E3}",skin:"#ffd2a6",hair:"#6b4426",top:"#38b2ff",bottom:"#2b2550",shoes:"#ff4d6d",hairStyle:"short",hat:"beanie",hatColor:"#ff4d6d",sleeve:1,pants:1,face:["freckles"],extra:{scarf:"#ffc93d"}}],to=Object.fromEntries(gc.map(n=>[n.id,n]));var ds=Object.fromEntries(gc.map(n=>[n.id,{name:n.name,emo:n.emo,skin:n.skin,shirt:n.top,pants:n.bottom,shoes:n.shoes,hair:n.hair}])),aa=Object.keys(ds),ia={down:[10,0],up:[170,0],side:[90,0],diag:[135,0],hip:[40,-105],flex:[90,90],cross:[25,-125],head:[150,-150],mouth:[15,-150],point:[65,-10],wave:[150,25]},sa={down:[4,0],kick:[70,-10],knee:[28,-55],step:[22,0],spread:[35,0]},ra={stand:{t:"",legs:null},sit:{t:"translate(0px,26px)",legs:[[80,-80],[80,-80]],stool:!0},squat:{t:"translate(0px,40px)",legs:[[110,-150],[110,-150]]},kneel:{t:"translate(0px,34px)",legs:[[0,170],[0,170]]},lie:{t:"translate(72px,58px) rotate(-90deg)"},leanL:{t:"",torso:"rotate(18deg)"},leanR:{t:"",torso:"rotate(-18deg)"},handstand:{t:"translate(0px,-120px) rotate(180deg)"},crawl:{t:"translate(86px,6px) rotate(-90deg)",absArms:[[90,0],[90,0]],absLegs:[[90,0],[90,0]],head:90,tail:100},bow:{t:"",torso:"translateY(16px) scaleY(.84)",headDown:!0},crossleg:{t:"translate(0px,44px)",legs:[[88,-165],[88,-165]]}},yc={center:0,tiltL:18,tiltR:-18,up:0,down:0},$s=[["scissors","\u2702\uFE0F","K\xE9o"],["comb","\u{1FAAE}","L\u01B0\u1EE3c"],["mic","\u{1F3A4}","Micro"],["phone","\u{1F4F1}","\u0110i\u1EC7n tho\u1EA1i"],["ball","\u26BD","Qu\u1EA3 b\xF3ng"],["racket","\u{1F3F8}","V\u1EE3t"],["rod","\u{1F3A3}","C\u1EA7n c\xE2u"],["pan","\u{1F373}","Ch\u1EA3o"],["broom","\u{1F9F9}","Ch\u1ED5i"],["sword","\u{1F5E1}\uFE0F","Ki\u1EBFm"],["umbrella","\u2602\uFE0F","\xD4"],["book","\u{1F4D6}","S\xE1ch"],["guitar","\u{1F3B8}","\u0110\xE0n"],["violin","\u{1F3BB}","Violin"],["hammer","\u{1F528}","B\xFAa"],["chopsticks","\u{1F962}","\u0110\u0169a"],["bowl","\u{1F35C}","T\xF4"],["wand","\u{1FA84}","\u0110\u0169a ph\xE9p"],["magnifier","\u{1F50D}","K\xEDnh l\xFAp"],["camera","\u{1F4F7}","M\xE1y \u1EA3nh"],["flower","\u{1F339}","Hoa"],["gift","\u{1F381}","Qu\xE0"],["cup","\u2615","C\u1ED1c"],["toothbrush","\u{1FAA5}","B\xE0n ch\u1EA3i"],["money","\u{1F4B5}","Ti\u1EC1n"],["bone","\u{1F9B4}","Kh\xFAc x\u01B0\u01A1ng"],["carrot","\u{1F955}","C\xE0 r\u1ED1t"],["banana","\u{1F34C}","Chu\u1ED1i"],["stethoscope","\u{1FA7A}","\u1ED0ng nghe"],["ruler","\u{1F4CF}","Th\u01B0\u1EDBc"],["balloon","\u{1F388}","B\xF3ng bay"],["extinguisher","\u{1F9EF}","B\xECnh ch\u1EEFa ch\xE1y"],["bottle","\u{1F37C}","B\xECnh s\u1EEFa"],["gamepad","\u{1F3AE}","Tay c\u1EA7m game"],["laptop","\u{1F4BB}","Laptop"],["basket","\u{1F9FA}","Gi\u1ECF"],["ring","\u{1F48D}","Nh\u1EABn"],["cake","\u{1F382}","B\xE1nh kem"],["torch","\u{1F526}","\u0110\xE8n pin"],["towel","\u{1F9FB}","Kh\u0103n gi\u1EA5y"]],Pf=$s.map(([n,e,t])=>[n,`${e} ${t}`]),io=Object.fromEntries($s.map(([n,e])=>[n,e])),Un=[{group:"To\xE0n th\xE2n",key:"body",opts:[["stand","\u0110\u1EE9ng"],["sit","Ng\u1ED3i gh\u1EBF"],["squat","Ng\u1ED3i x\u1ED5m"],["kneel","Qu\u1EF3"],["lie","N\u1EB1m"],["leanL","Nghi\xEAng tr\xE1i"],["leanR","Nghi\xEAng ph\u1EA3i"],["handstand","Tr\u1ED3ng c\xE2y chu\u1ED1i"],["crawl","B\xF2 4 ch\xE2n"],["bow","C\xFAi ch\xE0o"],["crossleg","Ng\u1ED3i x\u1EBFp b\u1EB1ng"]]},{group:"\u0110\u1EA7u",key:"head",opts:[["center","Th\u1EB3ng"],["tiltL","Nghi\xEAng tr\xE1i"],["tiltR","Nghi\xEAng ph\u1EA3i"],["up","Ng\u01B0\u1EDBc l\xEAn"],["down","C\xFAi xu\u1ED1ng"]]},{group:"M\u1EB7t",key:"face",opts:[["neutral","\u{1F610}"],["happy","\u{1F604}"],["sad","\u{1F622}"],["angry","\u{1F620}"],["surprised","\u{1F62E}"],["scared","\u{1F631}"],["sleepy","\u{1F634}"],["cheeky","\u{1F61C}"],["love","\u{1F60D}"]]},{group:"Tay tr\xE1i",key:"armL",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Tay ph\u1EA3i",key:"armR",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Ch\xE2n tr\xE1i",key:"legL",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"Ch\xE2n ph\u1EA3i",key:"legR",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"\u0110\u1EA1o c\u1EE5 tay tr\xE1i",key:"propL",toggle:!0,opts:Pf},{group:"\u0110\u1EA1o c\u1EE5 tay ph\u1EA3i",key:"propR",toggle:!0,opts:Pf},{group:"Ho\xE1 trang",key:"ears",toggle:!0,opts:[["dog","\u{1F436} Tai ch\xF3"],["cat","\u{1F431} Tai m\xE8o"],["bunny","\u{1F430} Tai th\u1ECF"],["mouse","\u{1F42D} Tai chu\u1ED9t"],["horns","\u{1F42E} S\u1EEBng"],["antenna","\u{1F41D} R\xE2u c\xF4n tr\xF9ng"]]},{group:"\u0110u\xF4i",key:"tail",toggle:!0,opts:[["dog","\u{1F415} \u0110u\xF4i ch\xF3"],["cat","\u{1F408} \u0110u\xF4i m\xE8o"],["pig","\u{1F437} \u0110u\xF4i heo"],["dino","\u{1F996} \u0110u\xF4i kh\u1EE7ng long"]]},{group:"Chuy\u1EC3n \u0111\u1ED9ng (b\u1EADt/t\u1EAFt)",key:"loop",toggle:!0,opts:[["walk","\u0110i b\u1ED9"],["run","Ch\u1EA1y"],["dance","Nh\u1EA3y m\xFAa"],["butt","L\u1EAFc m\xF4ng"],["flap","V\u1ED7 c\xE1nh"],["swim","B\u01A1i"],["shiver","Run r\u1EA9y"],["clap","V\u1ED7 tay"],["punch","\u0110\u1EA5m"],["row","Ch\xE8o"],["nod","G\u1EADt g\xF9"],["shake","L\u1EAFc \u0111\u1EA7u"]]},{group:"Hi\u1EC7u \u1EE9ng",key:"fx",oneshot:!0,opts:[["jump","B\u1EADt nh\u1EA3y"],["spin","Xoay v\xF2ng"],["fall","T\xE9 ng\xE3"],["bounce","Nh\xFAn nh\u1EA3y"]]},{group:"Xoay ng\u01B0\u1EDDi",key:"turn",opts:[["front","\u2B06\uFE0F Nh\xECn kh\xE1n gi\u1EA3"],["l45","\u2196\uFE0F Xoay ch\xE9o tr\xE1i"],["r45","\u2197\uFE0F Xoay ch\xE9o ph\u1EA3i"],["left","\u2B05\uFE0F Quay tr\xE1i"],["right","\u27A1\uFE0F Quay ph\u1EA3i"],["back","\u2B07\uFE0F Quay l\u01B0ng"]]}],so=Object.fromEntries(Un.find(n=>n.key==="face").opts),Qn={hip:[150,218],neck:[150,146],shL:[124,160],shR:[176,160],elL:[124,192],elR:[176,192],hipL:[138,222],hipR:[162,222],knL:[138,254],knR:[162,254]},gn=n=>`${n[0]}px ${n[1]}px`;function iy(n,e,t=!1){let i=e==="up"?-4:e==="down"?4:0,s=99+i,r=(u,f,g,x=3.6)=>`<ellipse cx="${u}" cy="${s}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${u+f}" cy="${s+g}" r="${x}" class="dk"/><circle cx="${u+f+1.2}" cy="${s+g-1.4}" r="1.1" fill="#fff"/>`,a;switch(n){case"happy":a=`<path d="M128 ${s+2} q9 -11 18 0 M154 ${s+2} q9 -11 18 0" class="ln"/>`;break;case"sleepy":a=`<path d="M128 ${s} q9 6 18 0 M154 ${s} q9 6 18 0" class="ln"/>`;break;case"love":a=`<path d="M137 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`;break;case"cheeky":a=`<path d="M128 ${s} q9 -6 18 0" class="ln"/>${r(163,-2,1)}`;break;case"surprised":a=r(137,0,0,2.4)+r(163,0,0,2.4);break;case"scared":a=r(137,2,2,2.6)+r(163,-2,2,2.6)+`<path d="M180 ${s-8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`;break;case"sad":a=r(137,1,3)+r(163,-1,3);break;case"angry":a=r(137,2,1)+r(163,-2,1);break;default:a=r(137,3,2)+r(163,-3,-2)}let o={angry:`<path d="M127 ${s-15} L146 ${s-9} M173 ${s-15} L154 ${s-9}" class="ln" style="stroke-width:4.5"/>`,sad:`<path d="M128 ${s-10} L145 ${s-15} M172 ${s-10} L155 ${s-15}" class="ln"/>`,scared:`<path d="M127 ${s-14} q5 -4 9 0 q5 4 9 0 M155 ${s-14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,surprised:`<path d="M128 ${s-17} q9 -6 18 0 M154 ${s-17} q9 -6 18 0" class="ln"/>`}[n]||"",l=118+i,c={happy:`<path d="M133 ${l-2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${l-1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${l+8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,sad:`<path d="M139 ${l+5} q11 -10 22 0" class="ln"/><path d="M134 ${s+8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,angry:`<rect x="138" y="${l-3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${l-3} v9 M150 ${l-3} v9 M156 ${l-3} v9" stroke="#1d1648" stroke-width="1.6"/>`,surprised:`<ellipse cx="150" cy="${l+2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,scared:`<path d="M136 ${l+2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,sleepy:`<ellipse cx="150" cy="${l+1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${l+2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78+i}" class="zz">z</text><text x="188" y="${64+i}" class="zz">Z</text>`,cheeky:`<path d="M138 ${l-1} q12 9 24 0" class="ln"/><path d="M147 ${l+2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,love:`<path d="M138 ${l-2} q12 12 24 0" class="ln"/>`,neutral:`<path d="M138 ${l-1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${l}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`}[n]||"",h=`<ellipse cx="150" cy="${110+i}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;return`${`<circle cx="125" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/><circle cx="175" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/>`}${t?"":`<g class="pp-eyes">${a}</g>${o}`}${h}${c}`}function sy(n,e){switch(n){case"tron":return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${e.hair}" stroke="#1d1648" stroke-width="2.5"/>`};case"ninja":return{hairFront:`<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${e.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,mask:`<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${e.hair}" class="ol"/>`};case"scientist":return{hairBack:`<circle cx="118" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${e.hair}" class="ol"/>`,hairFront:'<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>',torso:'<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>'};case"boss":return{hairFront:`<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${e.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,torso:'<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>',noEyes:!0};case"idol":return{hairBack:`<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${e.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,torso:'<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>'};case"hero":return{back:'<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>',hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${e.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,torso:'<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>'};case"astro":return{hairFront:`<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${e.hair}" class="ol"/>`,helmet:'<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>',torso:'<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>'};case"nonla":return{hairBack:`<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${e.hair}" class="ol"/>`,hat:'<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>',torso:'<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>'};case"bear":return{hairBack:`<circle cx="120" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,under:'<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>',torso:'<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>'}}return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/>`}}var no="#c98b52",ry={dog:{front:`<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${no}" class="ol"/>`},cat:{back:`<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${no}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>`},bunny:{back:'<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>'},mouse:{back:'<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>'},horns:{back:'<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>'},antenna:{back:'<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>'}},If={dog:`<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${no}" class="ol"/>`,cat:`<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${no}" stroke-width="6" stroke-linecap="round"/>`,pig:'<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>',dino:'<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>'};function Lf(n){n.innerHTML=`
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${gn(Qn.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${gn(Qn.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${e("L")}${e("R")}
      <g class="pp-torso j" style="transform-origin:${gn(Qn.hip)}"><g class="in pp-torsoIn" style="transform-origin:${gn(Qn.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${t("L")}${t("R")}
        <g class="pp-head j" style="transform-origin:${gn(Qn.neck)}"><g class="in pp-headIn" style="transform-origin:${gn(Qn.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
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
  </svg>`;function e(h){let d=Qn["hip"+h],u=Qn["kn"+h];return`<g class="pp-leg${h} j" style="transform-origin:${gn(d)}"><g class="in pp-leg${h}In" style="transform-origin:${gn(d)}">
      <line class="pp-pants" x1="${d[0]}" y1="${d[1]}" x2="${u[0]}" y2="${u[1]}"/>
      <g class="pp-shin${h} j" style="transform-origin:${gn(u)}"><g class="in pp-shin${h}In" style="transform-origin:${gn(u)}">
        <line class="pp-pants" x1="${u[0]}" y1="${u[1]}" x2="${u[0]}" y2="${u[1]+30}"/>
        <ellipse class="pp-shoe ol" cx="${u[0]+(h==="L"?-8:8)}" cy="${u[1]+36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`}function t(h){let d=Qn["sh"+h],u=Qn["el"+h];return`<g class="pp-arm${h} j" style="transform-origin:${gn(d)}"><g class="in pp-arm${h}In" style="transform-origin:${gn(d)}">
      <line class="pp-sleeve" x1="${d[0]}" y1="${d[1]}" x2="${u[0]}" y2="${u[1]}"/>
      <g class="pp-fore${h} j" style="transform-origin:${gn(u)}"><g class="in pp-fore${h}In" style="transform-origin:${gn(u)}">
        <line class="pp-forearm" x1="${u[0]}" y1="${u[1]}" x2="${u[0]}" y2="${u[1]+26}"/>
        <circle class="pp-hand pp-skin ol" cx="${u[0]}" cy="${u[1]+31}" r="10.5"/>
        <text class="pp-prop pp-prop${h}" x="${u[0]}" y="${u[1]+40}"></text>
        <path d="M${u[0]+(h==="L"?7:-7)} ${u[1]+26} q${h==="L"?7:-7} -2 ${h==="L"?6:-6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`}let i=n.querySelector("svg"),s=h=>i.querySelector("."+h),r=(h,d)=>{s(h).style.transform=d},a=null,o=null;function l(h){let d=ds[h?.skin]?h.skin:"tron",u=ds[d];i.style.setProperty("--pp-skin",u.skin),i.style.setProperty("--pp-shirt",u.shirt),i.style.setProperty("--pp-pants",u.pants),i.style.setProperty("--pp-shoes",u.shoes);let f=sy(d,u),g=h?.head||"";s("pp-photo").setAttribute("href",g),i.classList.toggle("has-photo",!!g),s("pp-back").innerHTML=f.back||"",s("pp-hairBack").innerHTML=g?"":f.hairBack||"",s("pp-hairFront").innerHTML=(g?"":f.hairFront||"")+(f.hat||""),s("pp-mask").innerHTML=g?"":f.mask||"",s("pp-under").innerHTML=g?"":f.under||"",s("pp-helmet").innerHTML=f.helmet||"",s("pp-torsoAcc").innerHTML=f.torso||"",i.dataset.skin=d,o={...h,noEyes:f.noEyes}}function c(h){let d=ra[h.body]||ra.stand;r("pp-root",d.t||"none"),r("pp-torso",d.torso||"none"),s("pp-stool").classList.toggle("on",!!d.stool);for(let x of["L","R"]){let p=x==="L"?1:-1,m=x==="L"?0:1,w=!h["arm"+x]||h["arm"+x]==="down";if(d.absArms&&w)r("pp-arm"+x,`rotate(${d.absArms[m][0]}deg)`),r("pp-fore"+x,`rotate(${d.absArms[m][1]}deg)`);else{let b=ia[h["arm"+x]]||ia.down;r("pp-arm"+x,`rotate(${b[0]*p}deg)`),r("pp-fore"+x,`rotate(${b[1]*p}deg)`)}let _=!h["leg"+x]||h["leg"+x]==="down";if(d.absLegs&&_)r("pp-leg"+x,`rotate(${d.absLegs[m][0]}deg)`),r("pp-shin"+x,`rotate(${d.absLegs[m][1]}deg)`);else{let b=d.legs?d.legs[m]:sa[h["leg"+x]]||sa.down;r("pp-leg"+x,`rotate(${b[0]*p}deg)`),r("pp-shin"+x,`rotate(${b[1]*p}deg)`)}i.classList.toggle("wave"+x,h["arm"+x]==="wave"),s("pp-prop"+x).textContent=io[h["prop"+x]]||""}r("pp-head",`rotate(${(yc[h.head]??0)+(d.head||0)}deg)`);let u=i.classList.contains("has-photo"),f=d.headDown&&(!h.head||h.head==="center")?"down":h.head;s("pp-face").innerHTML=u?"":iy(h.face,f,o?.noEyes);let g=ry[h.ears]||{};s("pp-earsBack").innerHTML=g.back||"",s("pp-earsFront").innerHTML=g.front||"",s("pp-tail").innerHTML=If[h.tail]?`<g class="pp-tailIn">${If[h.tail]}</g>`:"",r("pp-tail",d.tail?`rotate(${d.tail}deg)`:"none"),s("pp-emote").textContent=u&&h.face&&h.face!=="neutral"&&so[h.face]||"",i.dataset.loop=h.loop||"",h.fx&&h.fx.seq!==a&&(a=h.fx.seq,Date.now()-(h.fx.at||0)<4e3&&(i.classList.remove("fx-jump","fx-spin","fx-fall","fx-bounce"),i.getBoundingClientRect(),i.classList.add("fx-"+h.fx.name),clearTimeout(i._fxT),i._fxT=setTimeout(()=>i.classList.remove("fx-"+h.fx.name),1600)))}return{setPose:c,setLook:l,el:i}}var ay=0,kf=1,oy=2;var Up=1,Mu=2,mi=3,Xi=0,ln=1,Ft=2,$i=0,dr=1,gr=2,Df=3,Uf=4,ly=5,_s=100,cy=101,hy=102,uy=103,dy=104,fy=200,py=201,my=202,gy=203,eh=204,th=205,yy=206,xy=207,vy=208,_y=209,by=210,My=211,wy=212,Sy=213,Ty=214,nh=0,ih=1,sh=2,yr=3,rh=4,ah=5,oh=6,lh=7,Np=0,Ay=1,Ey=2,qi=0,Cy=1,Ry=2,Py=3,Iy=4,Ly=5,ky=6,Dy=7;var Op=300,xr=301,vr=302,ch=303,hh=304,vl=306,_a=1e3,Ms=1001,uh=1002,on=1003,Uy=1004;var ro=1005;var Xn=1006,xc=1007;var ws=1008;var _i=1009,Fp=1010,Bp=1011,ba=1012,wu=1013,Ss=1014,yi=1015,Ia=1016,Su=1017,Tu=1018,_r=1020,zp=35902,Hp=1021,Vp=1022,Yn=1023,Gp=1024,Wp=1025,fr=1026,br=1027,_l=1028,Au=1029,$p=1030,Eu=1031;var Cu=1033,Do=33776,Uo=33777,No=33778,Oo=33779,dh=35840,fh=35841,ph=35842,mh=35843,gh=36196,yh=37492,xh=37496,vh=37808,_h=37809,bh=37810,Mh=37811,wh=37812,Sh=37813,Th=37814,Ah=37815,Eh=37816,Ch=37817,Rh=37818,Ph=37819,Ih=37820,Lh=37821,Fo=36492,kh=36494,Dh=36495,qp=36283,Uh=36284,Nh=36285,Oh=36286;var zo=2300,Fh=2301,vc=2302,Nf=2400,Of=2401,Ff=2402;var Ny=3200,Oy=3201;var Ru=0,Fy=1,Gi="",$t="srgb",ji="srgb-linear",Pu="display-p3",bl="display-p3-linear",Ho="linear",vt="srgb",Vo="rec709",Go="p3";var qs=7680;var Bf=519,By=512,zy=513,Hy=514,Xp=515,Vy=516,Gy=517,Wy=518,$y=519,Bh=35044;var zf="300 es",xi=2e3,Wo=2001,Yi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var _c=Math.PI/180,$o=180/Math.PI;function vi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(sn[n&255]+sn[n>>8&255]+sn[n>>16&255]+sn[n>>24&255]+"-"+sn[e&255]+sn[e>>8&255]+"-"+sn[e>>16&15|64]+sn[e>>24&255]+"-"+sn[t&63|128]+sn[t>>8&255]+"-"+sn[t>>16&255]+sn[t>>24&255]+sn[i&255]+sn[i>>8&255]+sn[i>>16&255]+sn[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function qy(n,e){return(n%e+e)%e}function bc(n,e,t){return(1-t)*n+t*e}function ti(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var ge=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},tt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],x=s[0],p=s[3],m=s[6],w=s[1],_=s[4],b=s[7],I=s[2],E=s[5],P=s[8];return r[0]=a*x+o*w+l*I,r[3]=a*p+o*_+l*E,r[6]=a*m+o*b+l*P,r[1]=c*x+h*w+d*I,r[4]=c*p+h*_+d*E,r[7]=c*m+h*b+d*P,r[2]=u*x+f*w+g*I,r[5]=u*p+f*_+g*E,r[8]=u*m+f*b+g*P,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*a)*x,e[3]=u*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=f*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Mc.makeScale(e,t)),this}rotate(e){return this.premultiply(Mc.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mc=new tt;function Yp(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function qo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xy(){let n=qo("canvas");return n.style.display="block",n}var Hf={};function Bo(n){n in Hf||(Hf[n]=!0,console.warn(n))}function Yy(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function Zy(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ky(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Vf=new tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gf=new tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),oa={[ji]:{transfer:Ho,primaries:Vo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[$t]:{transfer:vt,primaries:Vo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bl]:{transfer:Ho,primaries:Go,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(Gf),fromReference:n=>n.applyMatrix3(Vf)},[Pu]:{transfer:vt,primaries:Go,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(Gf),fromReference:n=>n.applyMatrix3(Vf).convertLinearToSRGB()}},Jy=new Set([ji,bl]),ft={enabled:!0,_workingColorSpace:ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Jy.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=oa[e].toReference,s=oa[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return oa[n].primaries},getTransfer:function(n){return n===Gi?Ho:oa[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(oa[e].luminanceCoefficients)}};function pr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Xs,zh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Xs===void 0&&(Xs=qo("canvas")),Xs.width=e.width,Xs.height=e.height;let i=Xs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Xs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=qo("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=pr(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(pr(t[i]/255)*255):t[i]=pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},jy=0,Xo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Sc(s[a].image)):r.push(Sc(s[a]))}else r=Sc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function Sc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Qy=0,yn=class n extends Yi{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ms,s=Ms,r=Xn,a=ws,o=Yn,l=_i,c=n.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=vi(),this.name="",this.source=new Xo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ge(0,0),this.repeat=new ge(1,1),this.center=new ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Op)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case _a:e.x=e.x-Math.floor(e.x);break;case Ms:e.x=e.x<0?0:1;break;case uh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case _a:e.y=e.y-Math.floor(e.y);break;case Ms:e.y=e.y<0?0:1;break;case uh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=Op;yn.DEFAULT_ANISOTROPY=1;var It=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,b=(f+1)/2,I=(m+1)/2,E=(h+u)/4,P=(d+x)/4,U=(g+p)/4;return _>b&&_>I?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=E/i,r=P/i):b>I?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=U/s):I<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),i=P/r,s=U/r),this.set(i,s,r,t),this}let w=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(w)<.001&&(w=1),this.x=(p-g)/w,this.y=(d-x)/w,this.z=(u-h)/w,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Hh=class extends Yi{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new It(0,0,e,t),this.scissorTest=!1,this.viewport=new It(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new yn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Xo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},bi=class extends Hh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},Yo=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Vh=class extends yn{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=on,this.minFilter=on,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==u||c!==f||h!==g){let p=1-o,m=l*u+c*f+h*g+d*x,w=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){let I=Math.sqrt(_),E=Math.atan2(I,m*w);p=Math.sin(p*E)/I,o=Math.sin(o*E)/I}let b=o*w;if(l=l*p+u*b,c=c*p+f*b,h=h*p+g*b,d=d*p+x*b,p===1-o){let I=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=I,c*=I,h*=I,d*=I}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=a*d+this._w*u,this._x=i*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},B=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Wf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Wf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),d=2*(r*i-a*t);return this.x=t+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Tc.copy(this).projectOnVector(e),this.sub(Tc)}reflect(e){return this.sub(Tc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Tc=new B,Wf=new Zi,Ts=class{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Wn):Wn.fromBufferAttribute(r,a),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ao.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox)),ao.applyMatrix4(e.matrixWorld),this.union(ao)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(la),oo.subVectors(this.max,la),Ys.subVectors(e.a,la),Zs.subVectors(e.b,la),Ks.subVectors(e.c,la),Oi.subVectors(Zs,Ys),Fi.subVectors(Ks,Zs),fs.subVectors(Ys,Ks);let t=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-fs.z,fs.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,fs.z,0,-fs.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-fs.y,fs.x,0];return!Ac(t,Ys,Zs,Ks,oo)||(t=[1,0,0,0,1,0,0,0,1],!Ac(t,Ys,Zs,Ks,oo))?!1:(lo.crossVectors(Oi,Fi),t=[lo.x,lo.y,lo.z],Ac(t,Ys,Zs,Ks,oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hi=[new B,new B,new B,new B,new B,new B,new B,new B],Wn=new B,ao=new Ts,Ys=new B,Zs=new B,Ks=new B,Oi=new B,Fi=new B,fs=new B,la=new B,oo=new B,lo=new B,ps=new B;function Ac(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ps.fromArray(n,r);let o=s.x*Math.abs(ps.x)+s.y*Math.abs(ps.y)+s.z*Math.abs(ps.z),l=e.dot(ps),c=t.dot(ps),h=i.dot(ps);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ex=new Ts,ca=new B,Ec=new B,Ma=class{constructor(e=new B,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):ex.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ca.subVectors(e,this.center);let t=ca.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ca,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ec.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ca.copy(e.center).add(Ec)),this.expandByPoint(ca.copy(e.center).sub(Ec))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ui=new B,Cc=new B,co=new B,Bi=new B,Rc=new B,ho=new B,Pc=new B,Gh=class{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ui)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ui.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ui.copy(this.origin).addScaledVector(this.direction,t),ui.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Cc.copy(e).add(t).multiplyScalar(.5),co.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(Cc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(co),o=Bi.dot(this.direction),l=-Bi.dot(co),c=Bi.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Cc).addScaledVector(co,u),f}intersectSphere(e,t){ui.subVectors(e.center,this.origin);let i=ui.dot(this.direction),s=ui.dot(ui)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,ui)!==null}intersectTriangle(e,t,i,s,r){Rc.subVectors(t,e),ho.subVectors(i,e),Pc.crossVectors(Rc,ho);let a=this.direction.dot(Pc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);let l=o*this.direction.dot(ho.crossVectors(Bi,ho));if(l<0)return null;let c=o*this.direction.dot(Rc.cross(Bi));if(c<0||l+c>a)return null;let h=-o*Bi.dot(Pc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Et=class n{constructor(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,p)}set(e,t,i,s,r,a,o,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/Js.setFromMatrixColumn(e,0).length(),r=1/Js.setFromMatrixColumn(e,1).length(),a=1/Js.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tx,e,nx)}lookAt(e,t,i){let s=this.elements;return wn.subVectors(e,t),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),zi.crossVectors(i,wn),zi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),zi.crossVectors(i,wn)),zi.normalize(),uo.crossVectors(wn,zi),s[0]=zi.x,s[4]=uo.x,s[8]=wn.x,s[1]=zi.y,s[5]=uo.y,s[9]=wn.y,s[2]=zi.z,s[6]=uo.z,s[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],x=i[6],p=i[10],m=i[14],w=i[3],_=i[7],b=i[11],I=i[15],E=s[0],P=s[4],U=s[8],K=s[12],v=s[1],S=s[5],$=s[9],z=s[13],L=s[2],O=s[6],F=s[10],X=s[14],W=s[3],me=s[7],fe=s[11],G=s[15];return r[0]=a*E+o*v+l*L+c*W,r[4]=a*P+o*S+l*O+c*me,r[8]=a*U+o*$+l*F+c*fe,r[12]=a*K+o*z+l*X+c*G,r[1]=h*E+d*v+u*L+f*W,r[5]=h*P+d*S+u*O+f*me,r[9]=h*U+d*$+u*F+f*fe,r[13]=h*K+d*z+u*X+f*G,r[2]=g*E+x*v+p*L+m*W,r[6]=g*P+x*S+p*O+m*me,r[10]=g*U+x*$+p*F+m*fe,r[14]=g*K+x*z+p*X+m*G,r[3]=w*E+_*v+b*L+I*W,r[7]=w*P+_*S+b*O+I*me,r[11]=w*U+_*$+b*F+I*fe,r[15]=w*K+_*z+b*X+I*G,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15];return g*(+r*l*d-s*c*d-r*o*u+i*c*u+s*o*f-i*l*f)+x*(+t*l*f-t*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+p*(+t*c*d-t*o*f-r*a*d+i*a*f+r*o*h-i*c*h)+m*(-s*o*h-t*l*d+t*o*u+s*a*d-i*a*u+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],w=d*p*c-x*u*c+x*l*f-o*p*f-d*l*m+o*u*m,_=g*u*c-h*p*c-g*l*f+a*p*f+h*l*m-a*u*m,b=h*x*c-g*d*c+g*o*f-a*x*f-h*o*m+a*d*m,I=g*d*l-h*x*l-g*o*u+a*x*u+h*o*p-a*d*p,E=t*w+i*_+s*b+r*I;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let P=1/E;return e[0]=w*P,e[1]=(x*u*r-d*p*r-x*s*f+i*p*f+d*s*m-i*u*m)*P,e[2]=(o*p*r-x*l*r+x*s*c-i*p*c-o*s*m+i*l*m)*P,e[3]=(d*l*r-o*u*r-d*s*c+i*u*c+o*s*f-i*l*f)*P,e[4]=_*P,e[5]=(h*p*r-g*u*r+g*s*f-t*p*f-h*s*m+t*u*m)*P,e[6]=(g*l*r-a*p*r-g*s*c+t*p*c+a*s*m-t*l*m)*P,e[7]=(a*u*r-h*l*r+h*s*c-t*u*c-a*s*f+t*l*f)*P,e[8]=b*P,e[9]=(g*d*r-h*x*r-g*i*f+t*x*f+h*i*m-t*d*m)*P,e[10]=(a*x*r-g*o*r+g*i*c-t*x*c-a*i*m+t*o*m)*P,e[11]=(h*o*r-a*d*r-h*i*c+t*d*c+a*i*f-t*o*f)*P,e[12]=I*P,e[13]=(h*x*s-g*d*s+g*i*u-t*x*u-h*i*p+t*d*p)*P,e[14]=(g*o*s-a*x*s-g*i*l+t*x*l+a*i*p-t*o*p)*P,e[15]=(a*d*s-h*o*s+h*i*l-t*d*l-a*i*u+t*o*u)*P,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,x=a*h,p=a*d,m=o*d,w=l*c,_=l*h,b=l*d,I=i.x,E=i.y,P=i.z;return s[0]=(1-(x+m))*I,s[1]=(f+b)*I,s[2]=(g-_)*I,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(u+m))*E,s[6]=(p+w)*E,s[7]=0,s[8]=(g+_)*P,s[9]=(p-w)*P,s[10]=(1-(u+x))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=Js.set(s[0],s[1],s[2]).length(),a=Js.set(s[4],s[5],s[6]).length(),o=Js.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],$n.copy(this);let c=1/r,h=1/a,d=1/o;return $n.elements[0]*=c,$n.elements[1]*=c,$n.elements[2]*=c,$n.elements[4]*=h,$n.elements[5]*=h,$n.elements[6]*=h,$n.elements[8]*=d,$n.elements[9]*=d,$n.elements[10]*=d,t.setFromRotationMatrix($n),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=xi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),d=(t+e)/(t-e),u=(i+s)/(i-s),f,g;if(o===xi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Wo)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=xi){let l=this.elements,c=1/(t-e),h=1/(i-s),d=1/(a-r),u=(t+e)*c,f=(i+s)*h,g,x;if(o===xi)g=(a+r)*d,x=-2*d;else if(o===Wo)g=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=x,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Js=new B,$n=new Et,tx=new B(0,0,0),nx=new B(1,1,1),zi=new B,uo=new B,wn=new B,$f=new Et,qf=new Zi,ni=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return $f.makeRotationFromQuaternion(e),this.setFromRotationMatrix($f,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qf.setFromEuler(this),this.setFromQuaternion(qf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var Zo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ix=0,Xf=new B,js=new Zi,di=new Et,fo=new B,ha=new B,sx=new B,rx=new Zi,Yf=new B(1,0,0),Zf=new B(0,1,0),Kf=new B(0,0,1),Jf={type:"added"},ax={type:"removed"},Qs={type:"childadded",child:null},Ic={type:"childremoved",child:null},Dt=class n extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new B,t=new ni,i=new Zi,s=new B(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Et},normalMatrix:{value:new tt}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,t){return js.setFromAxisAngle(e,t),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis(Kf,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis(Kf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?fo.copy(e):fo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(ha,fo,this.up):di.lookAt(fo,ha,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),js.setFromRotationMatrix(di),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Jf),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ax),Ic.child=e,this.dispatchEvent(Ic),Ic.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Jf),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,e,sx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,rx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new B(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new B,fi=new B,Lc=new B,pi=new B,er=new B,tr=new B,jf=new B,kc=new B,Dc=new B,Uc=new B,Nc=new It,Oc=new It,Fc=new It,Wi=class n{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),fi.subVectors(i,t),Lc.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(fi),l=qn.dot(Lc),c=fi.dot(fi),h=fi.dot(Lc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,pi.x),l.addScaledVector(a,pi.y),l.addScaledVector(o,pi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return Nc.setScalar(0),Oc.setScalar(0),Fc.setScalar(0),Nc.fromBufferAttribute(e,t),Oc.fromBufferAttribute(e,i),Fc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Nc,r.x),a.addScaledVector(Oc,r.y),a.addScaledVector(Fc,r.z),a}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),fi.subVectors(e,t),qn.cross(fi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),fi.subVectors(this.a,this.b),qn.cross(fi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;er.subVectors(s,i),tr.subVectors(r,i),kc.subVectors(e,i);let l=er.dot(kc),c=tr.dot(kc);if(l<=0&&c<=0)return t.copy(i);Dc.subVectors(e,s);let h=er.dot(Dc),d=tr.dot(Dc);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(er,a);Uc.subVectors(e,r);let f=er.dot(Uc),g=tr.dot(Uc);if(g>=0&&f<=g)return t.copy(r);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(tr,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return jf.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(jf,o);let m=1/(p+x+u);return a=x*m,o=u*m,t.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},po={h:0,s:0,l:0};function Bc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var Je=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=$t){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=qy(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Bc(a,r,e+1/3),this.g=Bc(a,r,e),this.b=Bc(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=$t){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=$t){let i=Zp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=wc(e.r),this.g=wc(e.g),this.b=wc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=$t){return ft.fromWorkingColorSpace(rn.copy(this),e),Math.round(Kt(rn.r*255,0,255))*65536+Math.round(Kt(rn.g*255,0,255))*256+Math.round(Kt(rn.b*255,0,255))}getHexString(e=$t){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(rn.copy(this),t);let i=rn.r,s=rn.g,r=rn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(rn.copy(this),t),e.r=rn.r,e.g=rn.g,e.b=rn.b,e}getStyle(e=$t){ft.fromWorkingColorSpace(rn.copy(this),e);let t=rn.r,i=rn.g,s=rn.b;return e!==$t?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+t,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Hi),e.getHSL(po);let i=bc(Hi.h,po.h,t),s=bc(Hi.s,po.s,t),r=bc(Hi.l,po.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rn=new Je;Je.NAMES=Zp;var ox=0,Mi=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=vi(),this.name="",this.type="Material",this.blending=dr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=_s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qs,this.stencilZFail=qs,this.stencilZPass=qs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==dr&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==_s&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==qs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==qs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==qs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Jt=class extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=Np,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var kt=new B,mo=new ge,Tn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Bh,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)mo.fromBufferAttribute(this,t),mo.applyMatrix3(e),this.setXY(t,mo.x,mo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix3(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyMatrix4(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.applyNormalMatrix(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)kt.fromBufferAttribute(this,t),kt.transformDirection(e),this.setXYZ(t,kt.x,kt.y,kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bh&&(e.usage=this.usage),e}};var Ko=class extends Tn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Jo=class extends Tn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var mt=class extends Tn{constructor(e,t,i){super(new Float32Array(e),t,i)}},lx=0,Nn=new Et,zc=new Dt,nr=new B,Sn=new Ts,ua=new Ts,Wt=new B,fn=class n extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lx++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yp(e)?Jo:Ko)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new tt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Nn.makeRotationFromQuaternion(e),this.applyMatrix4(Nn),this}rotateX(e){return Nn.makeRotationX(e),this.applyMatrix4(Nn),this}rotateY(e){return Nn.makeRotationY(e),this.applyMatrix4(Nn),this}rotateZ(e){return Nn.makeRotationZ(e),this.applyMatrix4(Nn),this}translate(e,t,i){return Nn.makeTranslation(e,t,i),this.applyMatrix4(Nn),this}scale(e,t,i){return Nn.makeScale(e,t,i),this.applyMatrix4(Nn),this}lookAt(e){return zc.lookAt(e),zc.updateMatrix(),this.applyMatrix4(zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(nr).negate(),this.translate(nr.x,nr.y,nr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ts);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];Sn.setFromBufferAttribute(r),this.morphTargetsRelative?(Wt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Wt),Wt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Wt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(e){let i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(Wt.addVectors(Sn.min,ua.min),Sn.expandByPoint(Wt),Wt.addVectors(Sn.max,ua.max),Sn.expandByPoint(Wt)):(Sn.expandByPoint(ua.min),Sn.expandByPoint(ua.max))}Sn.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)Wt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Wt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Wt.fromBufferAttribute(o,c),l&&(nr.fromBufferAttribute(e,c),Wt.add(nr)),s=Math.max(s,i.distanceToSquared(Wt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let U=0;U<i.count;U++)o[U]=new B,l[U]=new B;let c=new B,h=new B,d=new B,u=new ge,f=new ge,g=new ge,x=new B,p=new B;function m(U,K,v){c.fromBufferAttribute(i,U),h.fromBufferAttribute(i,K),d.fromBufferAttribute(i,v),u.fromBufferAttribute(r,U),f.fromBufferAttribute(r,K),g.fromBufferAttribute(r,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[U].add(x),o[K].add(x),o[v].add(x),l[U].add(p),l[K].add(p),l[v].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let U=0,K=w.length;U<K;++U){let v=w[U],S=v.start,$=v.count;for(let z=S,L=S+$;z<L;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new B,b=new B,I=new B,E=new B;function P(U){I.fromBufferAttribute(s,U),E.copy(I);let K=o[U];_.copy(K),_.sub(I.multiplyScalar(I.dot(K))).normalize(),b.crossVectors(E,K);let S=b.dot(l[U])<0?-1:1;a.setXYZW(U,_.x,_.y,_.z,S)}for(let U=0,K=w.length;U<K;++U){let v=w[U],S=v.start,$=v.count;for(let z=S,L=S+$;z<L;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new B,r=new B,a=new B,o=new B,l=new B,c=new B,h=new B,d=new B;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Wt.fromBufferAttribute(e,t),Wt.normalize(),e.setXYZ(t,Wt.x,Wt.y,Wt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Tn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qf=new Et,ms=new Gh,go=new Ma,ep=new B,yo=new B,xo=new B,vo=new B,Hc=new B,_o=new B,tp=new B,bo=new B,je=class extends Dt{constructor(e=new fn,t=new Jt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){_o.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Hc.fromBufferAttribute(d,e),a?_o.addScaledVector(Hc,h):_o.addScaledVector(Hc.sub(t),h))}t.add(_o)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(r),ms.copy(e.ray).recast(e.near),!(go.containsPoint(ms.origin)===!1&&(ms.intersectSphere(go,ep)===null||ms.origin.distanceToSquared(ep)>(e.far-e.near)**2))&&(Qf.copy(r).invert(),ms.copy(e.ray).applyMatrix4(Qf),!(i.boundingBox!==null&&ms.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),_=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let b=w,I=_;b<I;b+=3){let E=o.getX(b),P=o.getX(b+1),U=o.getX(b+2);s=Mo(this,m,e,i,c,h,d,E,P,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let w=o.getX(p),_=o.getX(p+1),b=o.getX(p+2);s=Mo(this,a,e,i,c,h,d,w,_,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],w=Math.max(p.start,f.start),_=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let b=w,I=_;b<I;b+=3){let E=b,P=b+1,U=b+2;s=Mo(this,m,e,i,c,h,d,E,P,U),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let w=p,_=p+1,b=p+2;s=Mo(this,a,e,i,c,h,d,w,_,b),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function cx(n,e,t,i,s,r,a,o){let l;if(e.side===ln?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Xi,o),l===null)return null;bo.copy(o),bo.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(bo);return c<t.near||c>t.far?null:{distance:c,point:bo.clone(),object:n}}function Mo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,yo),n.getVertexPosition(l,xo),n.getVertexPosition(c,vo);let h=cx(n,e,t,i,yo,xo,vo,tp);if(h){let d=new B;Wi.getBarycoord(tp,yo,xo,vo,d),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,d,new ge)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,d,new ge)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,d,new B),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new B,materialIndex:0};Wi.getNormal(yo,xo,vo,u.normal),h.face=u,h.barycoord=d}return h}var jt=class n extends fn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(d,2));function g(x,p,m,w,_,b,I,E,P,U,K){let v=b/P,S=I/U,$=b/2,z=I/2,L=E/2,O=P+1,F=U+1,X=0,W=0,me=new B;for(let fe=0;fe<F;fe++){let G=fe*S-z;for(let te=0;te<O;te++){let pe=te*v-$;me[x]=pe*w,me[p]=G*_,me[m]=L,c.push(me.x,me.y,me.z),me[x]=0,me[p]=0,me[m]=E>0?1:-1,h.push(me.x,me.y,me.z),d.push(te/P),d.push(1-fe/U),X+=1}}for(let fe=0;fe<U;fe++)for(let G=0;G<P;G++){let te=u+G+O*fe,pe=u+G+O*(fe+1),Q=u+(G+1)+O*(fe+1),oe=u+(G+1)+O*fe;l.push(te,pe,oe),l.push(pe,Q,oe),W+=6}o.addGroup(f,W,K),f+=W,u+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Mr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function dn(n){let e={};for(let t=0;t<n.length;t++){let i=Mr(n[t]);for(let s in i)e[s]=i[s]}return e}function hx(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kp(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var ux={clone:Mr,merge:dn},dx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,On=class extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dx,this.fragmentShader=fx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Mr(e.uniforms),this.uniformsGroups=hx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},jo=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=xi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new B,np=new ge,ip=new ge,an=class extends jo{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(_c*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(_c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,t){return this.getViewBounds(e,np,ip),t.subVectors(ip,np)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(_c*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ir=-90,sr=1,Wh=class extends Dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new an(ir,sr,e,t);s.layers=this.layers,this.add(s);let r=new an(ir,sr,e,t);r.layers=this.layers,this.add(r);let a=new an(ir,sr,e,t);a.layers=this.layers,this.add(a);let o=new an(ir,sr,e,t);o.layers=this.layers,this.add(o);let l=new an(ir,sr,e,t);l.layers=this.layers,this.add(l);let c=new an(ir,sr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Qo=class extends yn{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$h=class extends bi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Qo(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new jt(5,5,5),r=new On({name:"CubemapFromEquirect",uniforms:Mr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ln,blending:$i});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===ws&&(t.minFilter=Xn),new Wh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Vc=new B,px=new B,mx=new tt,gi=class{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Vc.subVectors(i,t).cross(px.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Vc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||mx.getNormalMatrix(e),s=this.coplanarPoint(Vc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},gs=new Ma,wo=new B,wa=class{constructor(e=new gi,t=new gi,i=new gi,s=new gi,r=new gi,a=new gi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=xi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],x=s[10],p=s[11],m=s[12],w=s[13],_=s[14],b=s[15];if(i[0].setComponents(l-r,u-c,p-f,b-m).normalize(),i[1].setComponents(l+r,u+c,p+f,b+m).normalize(),i[2].setComponents(l+a,u+h,p+g,b+w).normalize(),i[3].setComponents(l-a,u-h,p-g,b-w).normalize(),i[4].setComponents(l-o,u-d,p-x,b-_).normalize(),t===xi)i[5].setComponents(l+o,u+d,p+x,b+_).normalize();else if(t===Wo)i[5].setComponents(o,d,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){return gs.center.set(0,0,0),gs.radius=.7071067811865476,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(wo.x=s.normal.x>0?e.max.x:e.min.x,wo.y=s.normal.y>0?e.max.y:e.min.y,wo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Jp(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function gx(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var wi=class n extends fn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let w=m*u-a;for(let _=0;_<c;_++){let b=_*d-r;g.push(b,-w,0),x.push(0,0,1),p.push(_/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let w=0;w<o;w++){let _=w+c*m,b=w+c*(m+1),I=w+1+c*(m+1),E=w+1+c*m;f.push(_,b,E),f.push(b,I,E)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},yx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,xx=`#ifdef USE_ALPHAHASH
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
#endif`,vx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_x=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wx=`#ifdef USE_AOMAP
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
#endif`,Sx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tx=`#ifdef USE_BATCHING
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
#endif`,Ax=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ex=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Cx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Rx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Px=`#ifdef USE_IRIDESCENCE
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
#endif`,Ix=`#ifdef USE_BUMPMAP
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
#endif`,Lx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ux=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Nx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ox=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Fx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,zx=`#define PI 3.141592653589793
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
} // validated`,Hx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Vx=`vec3 transformedNormal = objectNormal;
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
#endif`,Gx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yx=`
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
}`,Zx=`#ifdef USE_ENVMAP
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
#endif`,Kx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Jx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,ev=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
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
}`,rv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lv=`uniform bool receiveShadow;
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
#endif`,cv=`#ifdef USE_ENVMAP
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
#endif`,hv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,uv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pv=`PhysicalMaterial material;
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
#endif`,mv=`struct PhysicalMaterial {
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
}`,gv=`
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
#endif`,yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,xv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_v=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Sv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Av=`#if defined( USE_POINTS_UV )
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
#endif`,Ev=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Rv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Pv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Iv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lv=`#ifdef USE_MORPHTARGETS
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
#endif`,kv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Dv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Uv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Nv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Bv=`#ifdef USE_NORMALMAP
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
#endif`,zv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$v=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,qv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Xv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Kv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Jv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,e_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,t_=`float getShadowMask() {
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
}`,n_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,i_=`#ifdef USE_SKINNING
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
#endif`,s_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r_=`#ifdef USE_SKINNING
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
#endif`,a_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,o_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,l_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,c_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,h_=`#ifdef USE_TRANSMISSION
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
#endif`,u_=`#ifdef USE_TRANSMISSION
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
#endif`,d_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,m_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,g_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,y_=`uniform sampler2D t2D;
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
}`,x_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,v_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,__=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M_=`#include <common>
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
}`,w_=`#if DEPTH_PACKING == 3200
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
}`,S_=`#define DISTANCE
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
}`,T_=`#define DISTANCE
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
}`,A_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,E_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`uniform float scale;
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
}`,R_=`uniform vec3 diffuse;
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
}`,P_=`#include <common>
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
}`,I_=`uniform vec3 diffuse;
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
}`,L_=`#define LAMBERT
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
}`,k_=`#define LAMBERT
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
}`,D_=`#define MATCAP
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
}`,U_=`#define MATCAP
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
}`,N_=`#define NORMAL
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
}`,O_=`#define NORMAL
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
}`,F_=`#define PHONG
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
}`,B_=`#define PHONG
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
}`,z_=`#define STANDARD
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
}`,H_=`#define STANDARD
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
}`,V_=`#define TOON
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
}`,G_=`#define TOON
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
}`,W_=`uniform float size;
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
}`,$_=`uniform vec3 diffuse;
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
}`,q_=`#include <common>
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
}`,X_=`uniform vec3 color;
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
}`,Y_=`uniform float rotation;
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
}`,Z_=`uniform vec3 diffuse;
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
}`,et={alphahash_fragment:yx,alphahash_pars_fragment:xx,alphamap_fragment:vx,alphamap_pars_fragment:_x,alphatest_fragment:bx,alphatest_pars_fragment:Mx,aomap_fragment:wx,aomap_pars_fragment:Sx,batching_pars_vertex:Tx,batching_vertex:Ax,begin_vertex:Ex,beginnormal_vertex:Cx,bsdfs:Rx,iridescence_fragment:Px,bumpmap_pars_fragment:Ix,clipping_planes_fragment:Lx,clipping_planes_pars_fragment:kx,clipping_planes_pars_vertex:Dx,clipping_planes_vertex:Ux,color_fragment:Nx,color_pars_fragment:Ox,color_pars_vertex:Fx,color_vertex:Bx,common:zx,cube_uv_reflection_fragment:Hx,defaultnormal_vertex:Vx,displacementmap_pars_vertex:Gx,displacementmap_vertex:Wx,emissivemap_fragment:$x,emissivemap_pars_fragment:qx,colorspace_fragment:Xx,colorspace_pars_fragment:Yx,envmap_fragment:Zx,envmap_common_pars_fragment:Kx,envmap_pars_fragment:Jx,envmap_pars_vertex:jx,envmap_physical_pars_fragment:cv,envmap_vertex:Qx,fog_vertex:ev,fog_pars_vertex:tv,fog_fragment:nv,fog_pars_fragment:iv,gradientmap_pars_fragment:sv,lightmap_pars_fragment:rv,lights_lambert_fragment:av,lights_lambert_pars_fragment:ov,lights_pars_begin:lv,lights_toon_fragment:hv,lights_toon_pars_fragment:uv,lights_phong_fragment:dv,lights_phong_pars_fragment:fv,lights_physical_fragment:pv,lights_physical_pars_fragment:mv,lights_fragment_begin:gv,lights_fragment_maps:yv,lights_fragment_end:xv,logdepthbuf_fragment:vv,logdepthbuf_pars_fragment:_v,logdepthbuf_pars_vertex:bv,logdepthbuf_vertex:Mv,map_fragment:wv,map_pars_fragment:Sv,map_particle_fragment:Tv,map_particle_pars_fragment:Av,metalnessmap_fragment:Ev,metalnessmap_pars_fragment:Cv,morphinstance_vertex:Rv,morphcolor_vertex:Pv,morphnormal_vertex:Iv,morphtarget_pars_vertex:Lv,morphtarget_vertex:kv,normal_fragment_begin:Dv,normal_fragment_maps:Uv,normal_pars_fragment:Nv,normal_pars_vertex:Ov,normal_vertex:Fv,normalmap_pars_fragment:Bv,clearcoat_normal_fragment_begin:zv,clearcoat_normal_fragment_maps:Hv,clearcoat_pars_fragment:Vv,iridescence_pars_fragment:Gv,opaque_fragment:Wv,packing:$v,premultiplied_alpha_fragment:qv,project_vertex:Xv,dithering_fragment:Yv,dithering_pars_fragment:Zv,roughnessmap_fragment:Kv,roughnessmap_pars_fragment:Jv,shadowmap_pars_fragment:jv,shadowmap_pars_vertex:Qv,shadowmap_vertex:e_,shadowmask_pars_fragment:t_,skinbase_vertex:n_,skinning_pars_vertex:i_,skinning_vertex:s_,skinnormal_vertex:r_,specularmap_fragment:a_,specularmap_pars_fragment:o_,tonemapping_fragment:l_,tonemapping_pars_fragment:c_,transmission_fragment:h_,transmission_pars_fragment:u_,uv_pars_fragment:d_,uv_pars_vertex:f_,uv_vertex:p_,worldpos_vertex:m_,background_vert:g_,background_frag:y_,backgroundCube_vert:x_,backgroundCube_frag:v_,cube_vert:__,cube_frag:b_,depth_vert:M_,depth_frag:w_,distanceRGBA_vert:S_,distanceRGBA_frag:T_,equirect_vert:A_,equirect_frag:E_,linedashed_vert:C_,linedashed_frag:R_,meshbasic_vert:P_,meshbasic_frag:I_,meshlambert_vert:L_,meshlambert_frag:k_,meshmatcap_vert:D_,meshmatcap_frag:U_,meshnormal_vert:N_,meshnormal_frag:O_,meshphong_vert:F_,meshphong_frag:B_,meshphysical_vert:z_,meshphysical_frag:H_,meshtoon_vert:V_,meshtoon_frag:G_,points_vert:W_,points_frag:$_,shadow_vert:q_,shadow_frag:X_,sprite_vert:Y_,sprite_frag:Z_},Re={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new tt}},envmap:{envMap:{value:null},envMapRotation:{value:new tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new tt},normalScale:{value:new ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0},uvTransform:{value:new tt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new ge(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new tt},alphaMap:{value:null},alphaMapTransform:{value:new tt},alphaTest:{value:0}}},ei={basic:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:et.meshbasic_vert,fragmentShader:et.meshbasic_frag},lambert:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:et.meshlambert_vert,fragmentShader:et.meshlambert_frag},phong:{uniforms:dn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:et.meshphong_vert,fragmentShader:et.meshphong_frag},standard:{uniforms:dn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag},toon:{uniforms:dn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new Je(0)}}]),vertexShader:et.meshtoon_vert,fragmentShader:et.meshtoon_frag},matcap:{uniforms:dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:et.meshmatcap_vert,fragmentShader:et.meshmatcap_frag},points:{uniforms:dn([Re.points,Re.fog]),vertexShader:et.points_vert,fragmentShader:et.points_frag},dashed:{uniforms:dn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:et.linedashed_vert,fragmentShader:et.linedashed_frag},depth:{uniforms:dn([Re.common,Re.displacementmap]),vertexShader:et.depth_vert,fragmentShader:et.depth_frag},normal:{uniforms:dn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:et.meshnormal_vert,fragmentShader:et.meshnormal_frag},sprite:{uniforms:dn([Re.sprite,Re.fog]),vertexShader:et.sprite_vert,fragmentShader:et.sprite_frag},background:{uniforms:{uvTransform:{value:new tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:et.background_vert,fragmentShader:et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new tt}},vertexShader:et.backgroundCube_vert,fragmentShader:et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:et.cube_vert,fragmentShader:et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:et.equirect_vert,fragmentShader:et.equirect_frag},distanceRGBA:{uniforms:dn([Re.common,Re.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:et.distanceRGBA_vert,fragmentShader:et.distanceRGBA_frag},shadow:{uniforms:dn([Re.lights,Re.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:et.shadow_vert,fragmentShader:et.shadow_frag}};ei.physical={uniforms:dn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new tt},clearcoatNormalScale:{value:new ge(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new tt},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new tt},transmissionSamplerSize:{value:new ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new tt},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new tt},anisotropyVector:{value:new ge},anisotropyMap:{value:null},anisotropyMapTransform:{value:new tt}}]),vertexShader:et.meshphysical_vert,fragmentShader:et.meshphysical_frag};var So={r:0,b:0,g:0},ys=new ni,K_=new Et;function J_(n,e,t,i,s,r,a){let o=new Je(0),l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(w){let _=w.isScene===!0?w.background:null;return _&&_.isTexture&&(_=(w.backgroundBlurriness>0?t:e).get(_)),_}function x(w){let _=!1,b=g(w);b===null?m(o,l):b&&b.isColor&&(m(b,1),_=!0);let I=n.xr.getEnvironmentBlendMode();I==="additive"?i.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,_){let b=g(_);b&&(b.isCubeTexture||b.mapping===vl)?(h===void 0&&(h=new je(new jt(1,1,1),new On({name:"BackgroundCubeMaterial",uniforms:Mr(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,E,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ys.copy(_.backgroundRotation),ys.x*=-1,ys.y*=-1,ys.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ys.y*=-1,ys.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(K_.makeRotationFromEuler(ys)),h.material.toneMapped=ft.getTransfer(b.colorSpace)!==vt,(d!==b||u!==b.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,d=b,u=b.version,f=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new je(new wi(2,2),new On({name:"BackgroundMaterial",uniforms:Mr(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(b.colorSpace)!==vt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(d!==b||u!==b.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,d=b,u=b.version,f=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,_){w.getRGB(So,Kp(n)),i.buffers.color.setClear(So.r,So.g,So.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(w,_=1){o.set(w),l=_,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,m(o,l)},render:x,addToRenderList:p}}function j_(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(v,S,$,z,L){let O=!1,F=d(z,$,S);r!==F&&(r=F,c(r.object)),O=f(v,z,$,L),O&&g(v,z,$,L),L!==null&&e.update(L,n.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,b(v,S,$,z),L!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function d(v,S,$){let z=$.wireframe===!0,L=i[v.id];L===void 0&&(L={},i[v.id]=L);let O=L[S.id];O===void 0&&(O={},L[S.id]=O);let F=O[z];return F===void 0&&(F=u(l()),O[z]=F),F}function u(v){let S=[],$=[],z=[];for(let L=0;L<t;L++)S[L]=0,$[L]=0,z[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:$,attributeDivisors:z,object:v,attributes:{},index:null}}function f(v,S,$,z){let L=r.attributes,O=S.attributes,F=0,X=$.getAttributes();for(let W in X)if(X[W].location>=0){let fe=L[W],G=O[W];if(G===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(G=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(G=v.instanceColor)),fe===void 0||fe.attribute!==G||G&&fe.data!==G.data)return!0;F++}return r.attributesNum!==F||r.index!==z}function g(v,S,$,z){let L={},O=S.attributes,F=0,X=$.getAttributes();for(let W in X)if(X[W].location>=0){let fe=O[W];fe===void 0&&(W==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),W==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor));let G={};G.attribute=fe,fe&&fe.data&&(G.data=fe.data),L[W]=G,F++}r.attributes=L,r.attributesNum=F,r.index=z}function x(){let v=r.newAttributes;for(let S=0,$=v.length;S<$;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){let $=r.newAttributes,z=r.enabledAttributes,L=r.attributeDivisors;$[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),L[v]!==S&&(n.vertexAttribDivisor(v,S),L[v]=S)}function w(){let v=r.newAttributes,S=r.enabledAttributes;for(let $=0,z=S.length;$<z;$++)S[$]!==v[$]&&(n.disableVertexAttribArray($),S[$]=0)}function _(v,S,$,z,L,O,F){F===!0?n.vertexAttribIPointer(v,S,$,L,O):n.vertexAttribPointer(v,S,$,z,L,O)}function b(v,S,$,z){x();let L=z.attributes,O=$.getAttributes(),F=S.defaultAttributeValues;for(let X in O){let W=O[X];if(W.location>=0){let me=L[X];if(me===void 0&&(X==="instanceMatrix"&&v.instanceMatrix&&(me=v.instanceMatrix),X==="instanceColor"&&v.instanceColor&&(me=v.instanceColor)),me!==void 0){let fe=me.normalized,G=me.itemSize,te=e.get(me);if(te===void 0)continue;let pe=te.buffer,Q=te.type,oe=te.bytesPerElement,Ue=Q===n.INT||Q===n.UNSIGNED_INT||me.gpuType===wu;if(me.isInterleavedBufferAttribute){let _e=me.data,We=_e.stride,He=me.offset;if(_e.isInstancedInterleavedBuffer){for(let Fe=0;Fe<W.locationSize;Fe++)m(W.location+Fe,_e.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)p(W.location+Fe);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let Fe=0;Fe<W.locationSize;Fe++)_(W.location+Fe,G/W.locationSize,Q,fe,We*oe,(He+G/W.locationSize*Fe)*oe,Ue)}else{if(me.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e,me.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let _e=0;_e<W.locationSize;_e++)p(W.location+_e);n.bindBuffer(n.ARRAY_BUFFER,pe);for(let _e=0;_e<W.locationSize;_e++)_(W.location+_e,G/W.locationSize,Q,fe,G*oe,G/W.locationSize*_e*oe,Ue)}}else if(F!==void 0){let fe=F[X];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(W.location,fe);break;case 3:n.vertexAttrib3fv(W.location,fe);break;case 4:n.vertexAttrib4fv(W.location,fe);break;default:n.vertexAttrib1fv(W.location,fe)}}}}w()}function I(){U();for(let v in i){let S=i[v];for(let $ in S){let z=S[$];for(let L in z)h(z[L].object),delete z[L];delete S[$]}delete i[v]}}function E(v){if(i[v.id]===void 0)return;let S=i[v.id];for(let $ in S){let z=S[$];for(let L in z)h(z[L].object),delete z[L];delete S[$]}delete i[v.id]}function P(v){for(let S in i){let $=i[S];if($[v.id]===void 0)continue;let z=$[v.id];for(let L in z)h(z[L].object),delete z[L];delete $[v.id]}}function U(){K(),a=!0,r!==s&&(r=s,c(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:K,dispose:I,releaseStatesOfGeometry:E,releaseStatesOfProgram:P,initAttributes:x,enableAttribute:p,disableUnusedAttributes:w}}function Q_(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];t.update(f,i,1)}function l(c,h,d,u){if(d===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x];for(let x=0;x<u.length;x++)t.update(g,i,u[x])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function e1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let P=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(P){return!(P!==Yn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){let U=P===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==_i&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==yi&&!U)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){let P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:w,maxVaryings:_,maxFragmentUniforms:b,vertexTextures:I,maxSamples:E}}function t1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new gi,o=new tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=n.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let w=r?0:i,_=w*4,b=m.clippingState||null;l.value=b,b=h(g,u,_,f);for(let I=0;I!==_;++I)b[I]=t[I];m.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,w=u.matrixWorldInverse;o.getNormalMatrix(w),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,b=f;_!==x;++_,b+=4)a.copy(d[_]).applyMatrix4(w,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function n1(n){let e=new WeakMap;function t(a,o){return o===ch?a.mapping=xr:o===hh&&(a.mapping=vr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ch||o===hh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new $h(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var el=class extends jo{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},hr=4,sp=[.125,.215,.35,.446,.526,.582],bs=20,Gc=new el,rp=new Je,Wc=null,$c=0,qc=0,Xc=!1,vs=(1+Math.sqrt(5))/2,rr=1/vs,ap=[new B(-vs,rr,0),new B(vs,rr,0),new B(-rr,0,vs),new B(rr,0,vs),new B(0,vs,-rr),new B(0,vs,rr),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)],tl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Wc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=cp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=lp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Wc,$c,qc),this._renderer.xr.enabled=Xc,e.scissorTest=!1,To(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===vr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Wc=this._renderer.getRenderTarget(),$c=this._renderer.getActiveCubeFace(),qc=this._renderer.getActiveMipmapLevel(),Xc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Xn,minFilter:Xn,generateMipmaps:!1,type:Ia,format:Yn,colorSpace:ji,depthBuffer:!1},s=op(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=op(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=i1(r)),this._blurMaterial=s1(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Gc)}_sceneToCubeUV(e,t,i,s){let o=new an(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(rp),h.toneMapping=qi,h.autoClear=!1;let f=new Jt({name:"PMREM.Background",side:ln,depthWrite:!1,depthTest:!1}),g=new je(new jt,f),x=!1,p=e.background;p?p.isColor&&(f.color.copy(p),e.background=null,x=!0):(f.color.copy(rp),x=!0);for(let m=0;m<6;m++){let w=m%3;w===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):w===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let _=this._cubeSize;To(s,w*_,m>2?_:0,_,_),h.setRenderTarget(s),x&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,e.background=p}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===xr||e.mapping===vr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=cp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=lp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;To(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Gc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ap[(s-r-1)%ap.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new je(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*bs-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):bs;p>bs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${bs}`);let m=[],w=0;for(let P=0;P<bs;++P){let U=P/x,K=Math.exp(-U*U/2);m.push(K),P===0?w+=K:P<p&&(w+=2*K)}for(let P=0;P<m.length;P++)m[P]=m[P]/w;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=g,u.mipInt.value=_-i;let b=this._sizeLods[s],I=3*b*(s>_-hr?s-_+hr:0),E=4*(this._cubeSize-b);To(t,I,E,3*b,2*b),l.setRenderTarget(t),l.render(d,Gc)}};function i1(n){let e=[],t=[],i=[],s=n,r=n-hr+1+sp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-hr?l=sp[a-n+hr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,x=3,p=2,m=1,w=new Float32Array(x*g*f),_=new Float32Array(p*g*f),b=new Float32Array(m*g*f);for(let E=0;E<f;E++){let P=E%3*2/3-1,U=E>2?0:-1,K=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];w.set(K,x*g*E),_.set(u,p*g*E);let v=[E,E,E,E,E,E];b.set(v,m*g*E)}let I=new fn;I.setAttribute("position",new Tn(w,x)),I.setAttribute("uv",new Tn(_,p)),I.setAttribute("faceIndex",new Tn(b,m)),e.push(I),s>hr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function op(n,e,t){let i=new bi(n,e,t);return i.texture.mapping=vl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function To(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function s1(n,e,t){let i=new Float32Array(bs),s=new B(0,1,0);return new On({name:"SphericalGaussianBlur",defines:{n:bs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function lp(){return new On({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Iu(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function cp(){return new On({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Iu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Iu(){return`

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
	`}function r1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ch||l===hh,h=l===xr||l===vr;if(c||h){let d=e.get(o),u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new tl(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new tl(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function a1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Bo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function o1(n,e,t,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);for(let g in u.morphAttributes){let x=u.morphAttributes[g];for(let p=0,m=x.length;p<m;p++)e.remove(x[p])}u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(e.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let g in u)e.update(u[g],n.ARRAY_BUFFER);let f=d.morphAttributes;for(let g in f){let x=f[g];for(let p=0,m=x.length;p<m;p++)e.update(x[p],n.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(f!==null){let w=f.array;x=f.version;for(let _=0,b=w.length;_<b;_+=3){let I=w[_+0],E=w[_+1],P=w[_+2];u.push(I,E,E,P,P,I)}}else if(g!==void 0){let w=g.array;x=g.version;for(let _=0,b=w.length/3-1;_<b;_+=3){let I=_+0,E=_+1,P=_+2;u.push(I,E,E,P,P,I)}}else return;let p=new(Yp(u)?Jo:Ko)(u,1);p.version=x;let m=r.get(d);m&&e.remove(m),r.set(d,p)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function l1(n,e,t){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){n.drawElements(i,f,r,u*a),t.update(f,i,1)}function c(u,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,u*a,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];t.update(p,i,1)}function d(u,f,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],x[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,r,u,0,x,0,g);let m=0;for(let w=0;w<g;w++)m+=f[w];for(let w=0;w<x.length;w++)t.update(m,i,x[w])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function c1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function h1(n,e,t){let i=new WeakMap,s=new It;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let K=function(){P.dispose(),i.delete(o),o.removeEventListener("dispose",K)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],w=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let b=o.attributes.position.count*_,I=1;b>e.maxTextureSize&&(I=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*I*4*d),P=new Yo(E,b,I,d);P.type=yi,P.needsUpdate=!0;let U=_*4;for(let v=0;v<d;v++){let S=p[v],$=m[v],z=w[v],L=b*I*4*v;for(let O=0;O<S.count;O++){let F=O*U;f===!0&&(s.fromBufferAttribute(S,O),E[L+F+0]=s.x,E[L+F+1]=s.y,E[L+F+2]=s.z,E[L+F+3]=0),g===!0&&(s.fromBufferAttribute($,O),E[L+F+4]=s.x,E[L+F+5]=s.y,E[L+F+6]=s.z,E[L+F+7]=0),x===!0&&(s.fromBufferAttribute(z,O),E[L+F+8]=s.x,E[L+F+9]=s.y,E[L+F+10]=s.z,E[L+F+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:P,size:new ge(b,I)},i.set(o,u),o.addEventListener("dispose",K)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function u1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var nl=class extends yn{constructor(e,t,i,s,r,a,o,l,c,h=fr){if(h!==fr&&h!==br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===fr&&(i=Ss),i===void 0&&h===br&&(i=_r),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:on,this.minFilter=l!==void 0?l:on,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},jp=new yn,hp=new nl(1,1),Qp=new Yo,em=new Vh,tm=new Qo,up=[],dp=[],fp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function Ar(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=up[s];if(r===void 0&&(r=new Float32Array(s),up[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Bt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function zt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ml(n,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function d1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function f1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2fv(this.addr,e),zt(t,e)}}function p1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bt(t,e))return;n.uniform3fv(this.addr,e),zt(t,e)}}function m1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4fv(this.addr,e),zt(t,e)}}function g1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;mp.set(i),n.uniformMatrix2fv(this.addr,!1,mp),zt(t,i)}}function y1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;pp.set(i),n.uniformMatrix3fv(this.addr,!1,pp),zt(t,i)}}function x1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Bt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),zt(t,e)}else{if(Bt(t,i))return;fp.set(i),n.uniformMatrix4fv(this.addr,!1,fp),zt(t,i)}}function v1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function _1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2iv(this.addr,e),zt(t,e)}}function b1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3iv(this.addr,e),zt(t,e)}}function M1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4iv(this.addr,e),zt(t,e)}}function w1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function S1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bt(t,e))return;n.uniform2uiv(this.addr,e),zt(t,e)}}function T1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bt(t,e))return;n.uniform3uiv(this.addr,e),zt(t,e)}}function A1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bt(t,e))return;n.uniform4uiv(this.addr,e),zt(t,e)}}function E1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(hp.compareFunction=Xp,r=hp):r=jp,t.setTexture2D(e||r,s)}function C1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||em,s)}function R1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||tm,s)}function P1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||Qp,s)}function I1(n){switch(n){case 5126:return d1;case 35664:return f1;case 35665:return p1;case 35666:return m1;case 35674:return g1;case 35675:return y1;case 35676:return x1;case 5124:case 35670:return v1;case 35667:case 35671:return _1;case 35668:case 35672:return b1;case 35669:case 35673:return M1;case 5125:return w1;case 36294:return S1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return E1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return R1;case 36289:case 36303:case 36311:case 36292:return P1}}function L1(n,e){n.uniform1fv(this.addr,e)}function k1(n,e){let t=Ar(e,this.size,2);n.uniform2fv(this.addr,t)}function D1(n,e){let t=Ar(e,this.size,3);n.uniform3fv(this.addr,t)}function U1(n,e){let t=Ar(e,this.size,4);n.uniform4fv(this.addr,t)}function N1(n,e){let t=Ar(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function O1(n,e){let t=Ar(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function F1(n,e){let t=Ar(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function B1(n,e){n.uniform1iv(this.addr,e)}function z1(n,e){n.uniform2iv(this.addr,e)}function H1(n,e){n.uniform3iv(this.addr,e)}function V1(n,e){n.uniform4iv(this.addr,e)}function G1(n,e){n.uniform1uiv(this.addr,e)}function W1(n,e){n.uniform2uiv(this.addr,e)}function $1(n,e){n.uniform3uiv(this.addr,e)}function q1(n,e){n.uniform4uiv(this.addr,e)}function X1(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||jp,r[a])}function Y1(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||em,r[a])}function Z1(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||tm,r[a])}function K1(n,e,t){let i=this.cache,s=e.length,r=Ml(t,s);Bt(i,r)||(n.uniform1iv(this.addr,r),zt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Qp,r[a])}function J1(n){switch(n){case 5126:return L1;case 35664:return k1;case 35665:return D1;case 35666:return U1;case 35674:return N1;case 35675:return O1;case 35676:return F1;case 5124:case 35670:return B1;case 35667:case 35671:return z1;case 35668:case 35672:return H1;case 35669:case 35673:return V1;case 5125:return G1;case 36294:return W1;case 36295:return $1;case 36296:return q1;case 35678:case 36198:case 36298:case 36306:case 35682:return X1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return Z1;case 36289:case 36303:case 36311:case 36292:return K1}}var qh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=I1(t.type)}},Xh=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=J1(t.type)}},Yh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},Yc=/(\w+)(\])?(\[|\.)?/g;function gp(n,e){n.seq.push(e),n.map[e.id]=e}function j1(n,e,t){let i=n.name,s=i.length;for(Yc.lastIndex=0;;){let r=Yc.exec(i),a=Yc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){gp(t,c===void 0?new qh(o,n,e):new Xh(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Yh(o),gp(t,d)),t=d}}}var mr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);j1(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function yp(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var Q1=37297,eb=0;function tb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function nb(n){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(n),i;switch(e===t?i="":e===Go&&t===Vo?i="LinearDisplayP3ToLinearSRGB":e===Vo&&t===Go&&(i="LinearSRGBToLinearDisplayP3"),n){case ji:case bl:return[i,"LinearTransferOETF"];case $t:case Pu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xp(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+tb(n.getShaderSource(e),a)}else return s}function ib(n,e){let t=nb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function sb(n,e){let t;switch(e){case Cy:t="Linear";break;case Ry:t="Reinhard";break;case Py:t="Cineon";break;case Iy:t="ACESFilmic";break;case ky:t="AgX";break;case Dy:t="Neutral";break;case Ly:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ao=new B;function rb(){ft.getLuminanceCoefficients(Ao);let n=Ao.x.toFixed(4),e=Ao.y.toFixed(4),t=Ao.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ab(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ma).join(`
`)}function ob(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function lb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function ma(n){return n!==""}function vp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var cb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Zh(n){return n.replace(cb,ub)}var hb=new Map;function ub(n,e){let t=et[e];if(t===void 0){let i=hb.get(e);if(i!==void 0)t=et[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Zh(t)}var db=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bp(n){return n.replace(db,fb)}function fb(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Mp(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function pb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Up?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Mu?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function mb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case vr:e="ENVMAP_TYPE_CUBE";break;case vl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case vr:e="ENVMAP_MODE_REFRACTION";break}return e}function yb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Np:e="ENVMAP_BLENDING_MULTIPLY";break;case Ay:e="ENVMAP_BLENDING_MIX";break;case Ey:e="ENVMAP_BLENDING_ADD";break}return e}function xb(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function vb(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=pb(t),c=mb(t),h=gb(t),d=yb(t),u=xb(t),f=ab(t),g=ob(r),x=s.createProgram(),p,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ma).join(`
`),m.length>0&&(m+=`
`)):(p=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ma).join(`
`),m=[Mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?et.tonemapping_pars_fragment:"",t.toneMapping!==qi?sb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",et.colorspace_pars_fragment,ib("linearToOutputTexel",t.outputColorSpace),rb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ma).join(`
`)),a=Zh(a),a=vp(a,t),a=_p(a,t),o=Zh(o),o=vp(o,t),o=_p(o,t),a=bp(a),o=bp(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let _=w+p+a,b=w+m+o,I=yp(s,s.VERTEX_SHADER,_),E=yp(s,s.FRAGMENT_SHADER,b);s.attachShader(x,I),s.attachShader(x,E),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function P(S){if(n.debug.checkShaderErrors){let $=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(I).trim(),L=s.getShaderInfoLog(E).trim(),O=!0,F=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,I,E);else{let X=xp(s,I,"vertex"),W=xp(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+$+`
`+X+`
`+W)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(z===""||L==="")&&(F=!1);F&&(S.diagnostics={runnable:O,programLog:$,vertexShader:{log:z,prefix:p},fragmentShader:{log:L,prefix:m}})}s.deleteShader(I),s.deleteShader(E),U=new mr(s,x),K=lb(s,x)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let K;this.getAttributes=function(){return K===void 0&&P(this),K};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,Q1)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eb++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=E,this}var _b=0,Kh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Jh(e),t.set(e,i)),i}},Jh=class{constructor(e){this.id=_b++,this.code=e,this.usedTimes=0}};function bb(n,e,t,i,s,r,a){let o=new Zo,l=new Kh,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,$,z,L){let O=z.fog,F=L.geometry,X=v.isMeshStandardMaterial?z.environment:null,W=(v.isMeshStandardMaterial?t:e).get(v.envMap||X),me=W&&W.mapping===vl?W.image.height:null,fe=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let G=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=G!==void 0?G.length:0,pe=0;F.morphAttributes.position!==void 0&&(pe=1),F.morphAttributes.normal!==void 0&&(pe=2),F.morphAttributes.color!==void 0&&(pe=3);let Q,oe,Ue,_e;if(fe){let Yt=ei[fe];Q=Yt.vertexShader,oe=Yt.fragmentShader}else Q=v.vertexShader,oe=v.fragmentShader,l.update(v),Ue=l.getVertexShaderID(v),_e=l.getFragmentShaderID(v);let We=n.getRenderTarget(),He=L.isInstancedMesh===!0,Fe=L.isBatchedMesh===!0,Ce=!!v.map,se=!!v.matcap,D=!!W,ye=!!v.aoMap,ce=!!v.lightMap,he=!!v.bumpMap,we=!!v.normalMap,ze=!!v.displacementMap,Ee=!!v.emissiveMap,C=!!v.metalnessMap,M=!!v.roughnessMap,Y=v.anisotropy>0,ne=v.clearcoat>0,ae=v.dispersion>0,ie=v.iridescence>0,Oe=v.sheen>0,Se=v.transmission>0,ke=Y&&!!v.anisotropyMap,ve=ne&&!!v.clearcoatMap,J=ne&&!!v.clearcoatNormalMap,ee=ne&&!!v.clearcoatRoughnessMap,Ne=ie&&!!v.iridescenceMap,be=ie&&!!v.iridescenceThicknessMap,Me=Oe&&!!v.sheenColorMap,Te=Oe&&!!v.sheenRoughnessMap,qe=!!v.specularMap,Ze=!!v.specularColorMap,H=!!v.specularIntensityMap,Pe=Se&&!!v.transmissionMap,j=Se&&!!v.thicknessMap,le=!!v.gradientMap,Le=!!v.alphaMap,De=v.alphaTest>0,st=!!v.alphaHash,_t=!!v.extensions,Xt=qi;v.toneMapped&&(We===null||We.isXRRenderTarget===!0)&&(Xt=n.toneMapping);let nt={shaderID:fe,shaderType:v.type,shaderName:v.name,vertexShader:Q,fragmentShader:oe,defines:v.defines,customVertexShaderID:Ue,customFragmentShaderID:_e,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Fe,batchingColor:Fe&&L._colorsTexture!==null,instancing:He,instancingColor:He&&L.instanceColor!==null,instancingMorph:He&&L.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:We===null?n.outputColorSpace:We.isXRRenderTarget===!0?We.texture.colorSpace:ji,alphaToCoverage:!!v.alphaToCoverage,map:Ce,matcap:se,envMap:D,envMapMode:D&&W.mapping,envMapCubeUVHeight:me,aoMap:ye,lightMap:ce,bumpMap:he,normalMap:we,displacementMap:f&&ze,emissiveMap:Ee,normalMapObjectSpace:we&&v.normalMapType===Fy,normalMapTangentSpace:we&&v.normalMapType===Ru,metalnessMap:C,roughnessMap:M,anisotropy:Y,anisotropyMap:ke,clearcoat:ne,clearcoatMap:ve,clearcoatNormalMap:J,clearcoatRoughnessMap:ee,dispersion:ae,iridescence:ie,iridescenceMap:Ne,iridescenceThicknessMap:be,sheen:Oe,sheenColorMap:Me,sheenRoughnessMap:Te,specularMap:qe,specularColorMap:Ze,specularIntensityMap:H,transmission:Se,transmissionMap:Pe,thicknessMap:j,gradientMap:le,opaque:v.transparent===!1&&v.blending===dr&&v.alphaToCoverage===!1,alphaMap:Le,alphaTest:De,alphaHash:st,combine:v.combine,mapUv:Ce&&p(v.map.channel),aoMapUv:ye&&p(v.aoMap.channel),lightMapUv:ce&&p(v.lightMap.channel),bumpMapUv:he&&p(v.bumpMap.channel),normalMapUv:we&&p(v.normalMap.channel),displacementMapUv:ze&&p(v.displacementMap.channel),emissiveMapUv:Ee&&p(v.emissiveMap.channel),metalnessMapUv:C&&p(v.metalnessMap.channel),roughnessMapUv:M&&p(v.roughnessMap.channel),anisotropyMapUv:ke&&p(v.anisotropyMap.channel),clearcoatMapUv:ve&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:J&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ee&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:be&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(v.sheenRoughnessMap.channel),specularMapUv:qe&&p(v.specularMap.channel),specularColorMapUv:Ze&&p(v.specularColorMap.channel),specularIntensityMapUv:H&&p(v.specularIntensityMap.channel),transmissionMapUv:Pe&&p(v.transmissionMap.channel),thicknessMapUv:j&&p(v.thicknessMap.channel),alphaMapUv:Le&&p(v.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(we||Y),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!F.attributes.uv&&(Ce||Le),fog:!!O,useFog:v.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:L.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&$.length>0,shadowMapType:n.shadowMap.type,toneMapping:Xt,decodeVideoTexture:Ce&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ft,flipSided:v.side===ln,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_t&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&v.extensions.multiDraw===!0||Fe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return nt.vertexUv1s=c.has(1),nt.vertexUv2s=c.has(2),nt.vertexUv3s=c.has(3),c.clear(),nt}function w(v){let S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(let $ in v.defines)S.push($),S.push(v.defines[$]);return v.isRawShaderMaterial===!1&&(_(S,v),b(S,v),S.push(n.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function _(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function b(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function I(v){let S=x[v.type],$;if(S){let z=ei[S];$=ux.clone(z.uniforms)}else $=v.uniforms;return $}function E(v,S){let $;for(let z=0,L=h.length;z<L;z++){let O=h[z];if(O.cacheKey===S){$=O,++$.usedTimes;break}}return $===void 0&&($=new vb(n,S,v,r),h.push($)),$}function P(v){if(--v.usedTimes===0){let S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function U(v){l.remove(v)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:w,getUniforms:I,acquireProgram:E,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:K}}function Mb(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function wb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function wp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Sp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(d,u,f,g,x,p){let m=n[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:x,group:p},n[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=x,m.group=p),e++,m}function o(d,u,f,g,x,p){let m=a(d,u,f,g,x,p);f.transmission>0?i.push(m):f.transparent===!0?s.push(m):t.push(m)}function l(d,u,f,g,x,p){let m=a(d,u,f,g,x,p);f.transmission>0?i.unshift(m):f.transparent===!0?s.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||wb),i.length>1&&i.sort(u||wp),s.length>1&&s.sort(u||wp)}function h(){for(let d=e,u=n.length;d<u;d++){let f=n[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Sb(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new Sp,n.set(i,[a])):s>=r.length?(a=new Sp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Tb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Je};break;case"SpotLight":t={position:new B,direction:new B,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function Ab(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var Eb=0;function Cb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Rb(n){let e=new Tb,t=Ab(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);let s=new B,r=new Et,a=new Et;function o(c){let h=0,d=0,u=0;for(let K=0;K<9;K++)i.probe[K].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,w=0,_=0,b=0,I=0,E=0,P=0;c.sort(Cb);for(let K=0,v=c.length;K<v;K++){let S=c[K],$=S.color,z=S.intensity,L=S.distance,O=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=$.r*z,d+=$.g*z,u+=$.b*z;else if(S.isLightProbe){for(let F=0;F<9;F++)i.probe[F].addScaledVector(S.sh.coefficients[F],z);P++}else if(S.isDirectionalLight){let F=e.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let X=S.shadow,W=t.get(S);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.directionalShadow[f]=W,i.directionalShadowMap[f]=O,i.directionalShadowMatrix[f]=S.shadow.matrix,w++}i.directional[f]=F,f++}else if(S.isSpotLight){let F=e.get(S);F.position.setFromMatrixPosition(S.matrixWorld),F.color.copy($).multiplyScalar(z),F.distance=L,F.coneCos=Math.cos(S.angle),F.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),F.decay=S.decay,i.spot[x]=F;let X=S.shadow;if(S.map&&(i.spotLightMap[I]=S.map,I++,X.updateMatrices(S),S.castShadow&&E++),i.spotLightMatrix[x]=X.matrix,S.castShadow){let W=t.get(S);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=O,b++}x++}else if(S.isRectAreaLight){let F=e.get(S);F.color.copy($).multiplyScalar(z),F.halfWidth.set(S.width*.5,0,0),F.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=F,p++}else if(S.isPointLight){let F=e.get(S);if(F.color.copy(S.color).multiplyScalar(S.intensity),F.distance=S.distance,F.decay=S.decay,S.castShadow){let X=S.shadow,W=t.get(S);W.shadowIntensity=X.intensity,W.shadowBias=X.bias,W.shadowNormalBias=X.normalBias,W.shadowRadius=X.radius,W.shadowMapSize=X.mapSize,W.shadowCameraNear=X.camera.near,W.shadowCameraFar=X.camera.far,i.pointShadow[g]=W,i.pointShadowMap[g]=O,i.pointShadowMatrix[g]=S.shadow.matrix,_++}i.point[g]=F,g++}else if(S.isHemisphereLight){let F=e.get(S);F.skyColor.copy(S.color).multiplyScalar(z),F.groundColor.copy(S.groundColor).multiplyScalar(z),i.hemi[m]=F,m++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let U=i.hash;(U.directionalLength!==f||U.pointLength!==g||U.spotLength!==x||U.rectAreaLength!==p||U.hemiLength!==m||U.numDirectionalShadows!==w||U.numPointShadows!==_||U.numSpotShadows!==b||U.numSpotMaps!==I||U.numLightProbes!==P)&&(i.directional.length=f,i.spot.length=x,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=b,i.spotShadowMap.length=b,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=b+I-E,i.spotLightMap.length=I,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,U.directionalLength=f,U.pointLength=g,U.spotLength=x,U.rectAreaLength=p,U.hemiLength=m,U.numDirectionalShadows=w,U.numPointShadows=_,U.numSpotShadows=b,U.numSpotMaps=I,U.numLightProbes=P,i.version=Eb++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=h.matrixWorldInverse;for(let m=0,w=c.length;m<w;m++){let _=c[m];if(_.isDirectionalLight){let b=i.directional[d];b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(_.isSpotLight){let b=i.spot[f];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(_.isRectAreaLight){let b=i.rectArea[g];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(_.width*.5,0,0),b.halfHeight.set(0,_.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let b=i.point[u];b.position.setFromMatrixPosition(_.matrixWorld),b.position.applyMatrix4(p),u++}else if(_.isHemisphereLight){let b=i.hemi[x];b.direction.setFromMatrixPosition(_.matrixWorld),b.direction.transformDirection(p),x++}}}return{setup:o,setupView:l,state:i}}function Tp(n){let e=new Rb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Pb(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Tp(n),e.set(s,[o])):r>=a.length?(o=new Tp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var jh=class extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ny,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Qh=class extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Ib=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Lb=`uniform sampler2D shadow_pass;
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
}`;function kb(n,e,t){let i=new wa,s=new ge,r=new ge,a=new It,o=new jh({depthPacking:Oy}),l=new Qh,c={},h=t.maxTextureSize,d={[Xi]:ln,[ln]:Xi,[Ft]:Ft},u=new On({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ge},radius:{value:4}},vertexShader:Ib,fragmentShader:Lb}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new fn;g.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new je(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Up;let m=this.type;this.render=function(E,P,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;let K=n.getRenderTarget(),v=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),$=n.state;$.setBlending($i),$.buffers.color.setClear(1,1,1,1),$.buffers.depth.setTest(!0),$.setScissorTest(!1);let z=m!==mi&&this.type===mi,L=m===mi&&this.type!==mi;for(let O=0,F=E.length;O<F;O++){let X=E[O],W=X.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let me=W.getFrameExtents();if(s.multiply(me),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,W.mapSize.y=r.y)),W.map===null||z===!0||L===!0){let G=this.type!==mi?{minFilter:on,magFilter:on}:{};W.map!==null&&W.map.dispose(),W.map=new bi(s.x,s.y,G),W.map.texture.name=X.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();let fe=W.getViewportCount();for(let G=0;G<fe;G++){let te=W.getViewport(G);a.set(r.x*te.x,r.y*te.y,r.x*te.z,r.y*te.w),$.viewport(a),W.updateMatrices(X,G),i=W.getFrustum(),b(P,U,W.camera,X,this.type)}W.isPointLightShadow!==!0&&this.type===mi&&w(W,U),W.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(K,v,S)};function w(E,P){let U=e.update(x);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new bi(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(P,null,U,u,x,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(P,null,U,f,x,null)}function _(E,P,U,K){let v=null,S=U.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(S!==void 0)v=S;else if(v=U.isPointLight===!0?l:o,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){let $=v.uuid,z=P.uuid,L=c[$];L===void 0&&(L={},c[$]=L);let O=L[z];O===void 0&&(O=v.clone(),L[z]=O,P.addEventListener("dispose",I)),v=O}if(v.visible=P.visible,v.wireframe=P.wireframe,K===mi?v.side=P.shadowSide!==null?P.shadowSide:P.side:v.side=P.shadowSide!==null?P.shadowSide:d[P.side],v.alphaMap=P.alphaMap,v.alphaTest=P.alphaTest,v.map=P.map,v.clipShadows=P.clipShadows,v.clippingPlanes=P.clippingPlanes,v.clipIntersection=P.clipIntersection,v.displacementMap=P.displacementMap,v.displacementScale=P.displacementScale,v.displacementBias=P.displacementBias,v.wireframeLinewidth=P.wireframeLinewidth,v.linewidth=P.linewidth,U.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let $=n.properties.get(v);$.light=U}return v}function b(E,P,U,K,v){if(E.visible===!1)return;if(E.layers.test(P.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&v===mi)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,E.matrixWorld);let z=e.update(E),L=E.material;if(Array.isArray(L)){let O=z.groups;for(let F=0,X=O.length;F<X;F++){let W=O[F],me=L[W.materialIndex];if(me&&me.visible){let fe=_(E,me,K,v);E.onBeforeShadow(n,E,P,U,z,fe,W),n.renderBufferDirect(U,null,z,fe,E,W),E.onAfterShadow(n,E,P,U,z,fe,W)}}}else if(L.visible){let O=_(E,L,K,v);E.onBeforeShadow(n,E,P,U,z,O,null),n.renderBufferDirect(U,null,z,O,E,null),E.onAfterShadow(n,E,P,U,z,O,null)}}let $=E.children;for(let z=0,L=$.length;z<L;z++)b($[z],P,U,K,v)}function I(E){E.target.removeEventListener("dispose",I);for(let U in c){let K=c[U],v=E.target.uuid;v in K&&(K[v].dispose(),delete K[v])}}}var Db={[nh]:ih,[sh]:oh,[rh]:lh,[yr]:ah,[ih]:nh,[oh]:sh,[lh]:rh,[ah]:yr};function Ub(n){function e(){let H=!1,Pe=new It,j=null,le=new It(0,0,0,0);return{setMask:function(Le){j!==Le&&!H&&(n.colorMask(Le,Le,Le,Le),j=Le)},setLocked:function(Le){H=Le},setClear:function(Le,De,st,_t,Xt){Xt===!0&&(Le*=_t,De*=_t,st*=_t),Pe.set(Le,De,st,_t),le.equals(Pe)===!1&&(n.clearColor(Le,De,st,_t),le.copy(Pe))},reset:function(){H=!1,j=null,le.set(-1,0,0,0)}}}function t(){let H=!1,Pe=!1,j=null,le=null,Le=null;return{setReversed:function(De){Pe=De},setTest:function(De){De?Ue(n.DEPTH_TEST):_e(n.DEPTH_TEST)},setMask:function(De){j!==De&&!H&&(n.depthMask(De),j=De)},setFunc:function(De){if(Pe&&(De=Db[De]),le!==De){switch(De){case nh:n.depthFunc(n.NEVER);break;case ih:n.depthFunc(n.ALWAYS);break;case sh:n.depthFunc(n.LESS);break;case yr:n.depthFunc(n.LEQUAL);break;case rh:n.depthFunc(n.EQUAL);break;case ah:n.depthFunc(n.GEQUAL);break;case oh:n.depthFunc(n.GREATER);break;case lh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}le=De}},setLocked:function(De){H=De},setClear:function(De){Le!==De&&(n.clearDepth(De),Le=De)},reset:function(){H=!1,j=null,le=null,Le=null}}}function i(){let H=!1,Pe=null,j=null,le=null,Le=null,De=null,st=null,_t=null,Xt=null;return{setTest:function(nt){H||(nt?Ue(n.STENCIL_TEST):_e(n.STENCIL_TEST))},setMask:function(nt){Pe!==nt&&!H&&(n.stencilMask(nt),Pe=nt)},setFunc:function(nt,Yt,Qt){(j!==nt||le!==Yt||Le!==Qt)&&(n.stencilFunc(nt,Yt,Qt),j=nt,le=Yt,Le=Qt)},setOp:function(nt,Yt,Qt){(De!==nt||st!==Yt||_t!==Qt)&&(n.stencilOp(nt,Yt,Qt),De=nt,st=Yt,_t=Qt)},setLocked:function(nt){H=nt},setClear:function(nt){Xt!==nt&&(n.clearStencil(nt),Xt=nt)},reset:function(){H=!1,Pe=null,j=null,le=null,Le=null,De=null,st=null,_t=null,Xt=null}}}let s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,w=null,_=null,b=null,I=null,E=new Je(0,0,0),P=0,U=!1,K=null,v=null,S=null,$=null,z=null,L=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,F=0,X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(X)[1]),O=F>=1):X.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),O=F>=2);let W=null,me={},fe=n.getParameter(n.SCISSOR_BOX),G=n.getParameter(n.VIEWPORT),te=new It().fromArray(fe),pe=new It().fromArray(G);function Q(H,Pe,j,le){let Le=new Uint8Array(4),De=n.createTexture();n.bindTexture(H,De),n.texParameteri(H,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(H,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let st=0;st<j;st++)H===n.TEXTURE_3D||H===n.TEXTURE_2D_ARRAY?n.texImage3D(Pe,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(Pe+st,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return De}let oe={};oe[n.TEXTURE_2D]=Q(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=Q(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=Q(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=Q(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Ue(n.DEPTH_TEST),r.setFunc(yr),ce(!1),he(kf),Ue(n.CULL_FACE),D($i);function Ue(H){c[H]!==!0&&(n.enable(H),c[H]=!0)}function _e(H){c[H]!==!1&&(n.disable(H),c[H]=!1)}function We(H,Pe){return h[H]!==Pe?(n.bindFramebuffer(H,Pe),h[H]=Pe,H===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Pe),H===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Pe),!0):!1}function He(H,Pe){let j=u,le=!1;if(H){j=d.get(Pe),j===void 0&&(j=[],d.set(Pe,j));let Le=H.textures;if(j.length!==Le.length||j[0]!==n.COLOR_ATTACHMENT0){for(let De=0,st=Le.length;De<st;De++)j[De]=n.COLOR_ATTACHMENT0+De;j.length=Le.length,le=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,le=!0);le&&n.drawBuffers(j)}function Fe(H){return f!==H?(n.useProgram(H),f=H,!0):!1}let Ce={[_s]:n.FUNC_ADD,[cy]:n.FUNC_SUBTRACT,[hy]:n.FUNC_REVERSE_SUBTRACT};Ce[uy]=n.MIN,Ce[dy]=n.MAX;let se={[fy]:n.ZERO,[py]:n.ONE,[my]:n.SRC_COLOR,[eh]:n.SRC_ALPHA,[by]:n.SRC_ALPHA_SATURATE,[vy]:n.DST_COLOR,[yy]:n.DST_ALPHA,[gy]:n.ONE_MINUS_SRC_COLOR,[th]:n.ONE_MINUS_SRC_ALPHA,[_y]:n.ONE_MINUS_DST_COLOR,[xy]:n.ONE_MINUS_DST_ALPHA,[My]:n.CONSTANT_COLOR,[wy]:n.ONE_MINUS_CONSTANT_COLOR,[Sy]:n.CONSTANT_ALPHA,[Ty]:n.ONE_MINUS_CONSTANT_ALPHA};function D(H,Pe,j,le,Le,De,st,_t,Xt,nt){if(H===$i){g===!0&&(_e(n.BLEND),g=!1);return}if(g===!1&&(Ue(n.BLEND),g=!0),H!==ly){if(H!==x||nt!==U){if((p!==_s||_!==_s)&&(n.blendEquation(n.FUNC_ADD),p=_s,_=_s),nt)switch(H){case dr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gr:n.blendFunc(n.ONE,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}else switch(H){case dr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case gr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Df:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Uf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",H);break}m=null,w=null,b=null,I=null,E.set(0,0,0),P=0,x=H,U=nt}return}Le=Le||Pe,De=De||j,st=st||le,(Pe!==p||Le!==_)&&(n.blendEquationSeparate(Ce[Pe],Ce[Le]),p=Pe,_=Le),(j!==m||le!==w||De!==b||st!==I)&&(n.blendFuncSeparate(se[j],se[le],se[De],se[st]),m=j,w=le,b=De,I=st),(_t.equals(E)===!1||Xt!==P)&&(n.blendColor(_t.r,_t.g,_t.b,Xt),E.copy(_t),P=Xt),x=H,U=!1}function ye(H,Pe){H.side===Ft?_e(n.CULL_FACE):Ue(n.CULL_FACE);let j=H.side===ln;Pe&&(j=!j),ce(j),H.blending===dr&&H.transparent===!1?D($i):D(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),r.setFunc(H.depthFunc),r.setTest(H.depthTest),r.setMask(H.depthWrite),s.setMask(H.colorWrite);let le=H.stencilWrite;a.setTest(le),le&&(a.setMask(H.stencilWriteMask),a.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),a.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),ze(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?Ue(n.SAMPLE_ALPHA_TO_COVERAGE):_e(n.SAMPLE_ALPHA_TO_COVERAGE)}function ce(H){K!==H&&(H?n.frontFace(n.CW):n.frontFace(n.CCW),K=H)}function he(H){H!==ay?(Ue(n.CULL_FACE),H!==v&&(H===kf?n.cullFace(n.BACK):H===oy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):_e(n.CULL_FACE),v=H}function we(H){H!==S&&(O&&n.lineWidth(H),S=H)}function ze(H,Pe,j){H?(Ue(n.POLYGON_OFFSET_FILL),($!==Pe||z!==j)&&(n.polygonOffset(Pe,j),$=Pe,z=j)):_e(n.POLYGON_OFFSET_FILL)}function Ee(H){H?Ue(n.SCISSOR_TEST):_e(n.SCISSOR_TEST)}function C(H){H===void 0&&(H=n.TEXTURE0+L-1),W!==H&&(n.activeTexture(H),W=H)}function M(H,Pe,j){j===void 0&&(W===null?j=n.TEXTURE0+L-1:j=W);let le=me[j];le===void 0&&(le={type:void 0,texture:void 0},me[j]=le),(le.type!==H||le.texture!==Pe)&&(W!==j&&(n.activeTexture(j),W=j),n.bindTexture(H,Pe||oe[H]),le.type=H,le.texture=Pe)}function Y(){let H=me[W];H!==void 0&&H.type!==void 0&&(n.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Oe(){try{n.texSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Se(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ke(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ve(){try{n.texStorage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function J(){try{n.texStorage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function ee(){try{n.texImage2D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function Ne(){try{n.texImage3D.apply(n,arguments)}catch(H){console.error("THREE.WebGLState:",H)}}function be(H){te.equals(H)===!1&&(n.scissor(H.x,H.y,H.z,H.w),te.copy(H))}function Me(H){pe.equals(H)===!1&&(n.viewport(H.x,H.y,H.z,H.w),pe.copy(H))}function Te(H,Pe){let j=l.get(Pe);j===void 0&&(j=new WeakMap,l.set(Pe,j));let le=j.get(H);le===void 0&&(le=n.getUniformBlockIndex(Pe,H.name),j.set(H,le))}function qe(H,Pe){let le=l.get(Pe).get(H);o.get(Pe)!==le&&(n.uniformBlockBinding(Pe,le,H.__bindingPointIndex),o.set(Pe,le))}function Ze(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},W=null,me={},h={},d=new WeakMap,u=[],f=null,g=!1,x=null,p=null,m=null,w=null,_=null,b=null,I=null,E=new Je(0,0,0),P=0,U=!1,K=null,v=null,S=null,$=null,z=null,te.set(0,0,n.canvas.width,n.canvas.height),pe.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Ue,disable:_e,bindFramebuffer:We,drawBuffers:He,useProgram:Fe,setBlending:D,setMaterial:ye,setFlipSided:ce,setCullFace:he,setLineWidth:we,setPolygonOffset:ze,setScissorTest:Ee,activeTexture:C,bindTexture:M,unbindTexture:Y,compressedTexImage2D:ne,compressedTexImage3D:ae,texImage2D:ee,texImage3D:Ne,updateUBOMapping:Te,uniformBlockBinding:qe,texStorage2D:ve,texStorage3D:J,texSubImage2D:ie,texSubImage3D:Oe,compressedTexSubImage2D:Se,compressedTexSubImage3D:ke,scissor:be,viewport:Me,reset:Ze}}function Ap(n,e,t,i){let s=Nb(i);switch(t){case Hp:return n*e;case Gp:return n*e;case Wp:return n*e*2;case _l:return n*e/s.components*s.byteLength;case Au:return n*e/s.components*s.byteLength;case $p:return n*e*2/s.components*s.byteLength;case Eu:return n*e*2/s.components*s.byteLength;case Vp:return n*e*3/s.components*s.byteLength;case Yn:return n*e*4/s.components*s.byteLength;case Cu:return n*e*4/s.components*s.byteLength;case Do:case Uo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case No:case Oo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fh:case mh:return Math.max(n,16)*Math.max(e,8)/4;case dh:case ph:return Math.max(n,8)*Math.max(e,8)/2;case gh:case yh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case xh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _h:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case bh:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case wh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Sh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Th:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Ah:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Ph:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Ih:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Lh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Fo:case kh:case Dh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case qp:case Uh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Nh:case Oh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Nb(n){switch(n){case _i:case Fp:return{byteLength:1,components:1};case ba:case Bp:case Ia:return{byteLength:2,components:1};case Su:case Tu:return{byteLength:2,components:4};case Ss:case wu:case yi:return{byteLength:4,components:1};case zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ob(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ge,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return f?new OffscreenCanvas(C,M):qo("canvas")}function x(C,M,Y){let ne=1,ae=Ee(C);if((ae.width>Y||ae.height>Y)&&(ne=Y/Math.max(ae.width,ae.height)),ne<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ie=Math.floor(ne*ae.width),Oe=Math.floor(ne*ae.height);d===void 0&&(d=g(ie,Oe));let Se=M?g(ie,Oe):d;return Se.width=ie,Se.height=Oe,Se.getContext("2d").drawImage(C,0,0,ie,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ae.width+"x"+ae.height+") to ("+ie+"x"+Oe+")."),Se}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ae.width+"x"+ae.height+")."),C;return C}function p(C){return C.generateMipmaps&&C.minFilter!==on&&C.minFilter!==Xn}function m(C){n.generateMipmap(C)}function w(C,M,Y,ne,ae=!1){if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ie=M;if(M===n.RED&&(Y===n.FLOAT&&(ie=n.R32F),Y===n.HALF_FLOAT&&(ie=n.R16F),Y===n.UNSIGNED_BYTE&&(ie=n.R8)),M===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.R8UI),Y===n.UNSIGNED_SHORT&&(ie=n.R16UI),Y===n.UNSIGNED_INT&&(ie=n.R32UI),Y===n.BYTE&&(ie=n.R8I),Y===n.SHORT&&(ie=n.R16I),Y===n.INT&&(ie=n.R32I)),M===n.RG&&(Y===n.FLOAT&&(ie=n.RG32F),Y===n.HALF_FLOAT&&(ie=n.RG16F),Y===n.UNSIGNED_BYTE&&(ie=n.RG8)),M===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RG8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RG16UI),Y===n.UNSIGNED_INT&&(ie=n.RG32UI),Y===n.BYTE&&(ie=n.RG8I),Y===n.SHORT&&(ie=n.RG16I),Y===n.INT&&(ie=n.RG32I)),M===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RGB16UI),Y===n.UNSIGNED_INT&&(ie=n.RGB32UI),Y===n.BYTE&&(ie=n.RGB8I),Y===n.SHORT&&(ie=n.RGB16I),Y===n.INT&&(ie=n.RGB32I)),M===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(ie=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(ie=n.RGBA16UI),Y===n.UNSIGNED_INT&&(ie=n.RGBA32UI),Y===n.BYTE&&(ie=n.RGBA8I),Y===n.SHORT&&(ie=n.RGBA16I),Y===n.INT&&(ie=n.RGBA32I)),M===n.RGB&&Y===n.UNSIGNED_INT_5_9_9_9_REV&&(ie=n.RGB9_E5),M===n.RGBA){let Oe=ae?Ho:ft.getTransfer(ne);Y===n.FLOAT&&(ie=n.RGBA32F),Y===n.HALF_FLOAT&&(ie=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(ie=Oe===vt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function _(C,M){let Y;return C?M===null||M===Ss||M===_r?Y=n.DEPTH24_STENCIL8:M===yi?Y=n.DEPTH32F_STENCIL8:M===ba&&(Y=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ss||M===_r?Y=n.DEPTH_COMPONENT24:M===yi?Y=n.DEPTH_COMPONENT32F:M===ba&&(Y=n.DEPTH_COMPONENT16),Y}function b(C,M){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==on&&C.minFilter!==Xn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){let M=C.target;M.removeEventListener("dispose",I),P(M),M.isVideoTexture&&h.delete(M)}function E(C){let M=C.target;M.removeEventListener("dispose",E),K(M)}function P(C){let M=i.get(C);if(M.__webglInit===void 0)return;let Y=C.source,ne=u.get(Y);if(ne){let ae=ne[M.__cacheKey];ae.usedTimes--,ae.usedTimes===0&&U(C),Object.keys(ne).length===0&&u.delete(Y)}i.remove(C)}function U(C){let M=i.get(C);n.deleteTexture(M.__webglTexture);let Y=C.source,ne=u.get(Y);delete ne[M.__cacheKey],a.memory.textures--}function K(C){let M=i.get(C);if(C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let ae=0;ae<M.__webglFramebuffer[ne].length;ae++)n.deleteFramebuffer(M.__webglFramebuffer[ne][ae]);else n.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)n.deleteFramebuffer(M.__webglFramebuffer[ne]);else n.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&n.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&n.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&n.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&n.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let Y=C.textures;for(let ne=0,ae=Y.length;ne<ae;ne++){let ie=i.get(Y[ne]);ie.__webglTexture&&(n.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(Y[ne])}i.remove(C)}let v=0;function S(){v=0}function $(){let C=v;return C>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+s.maxTextures),v+=1,C}function z(C){let M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function L(C,M){let Y=i.get(C);if(C.isVideoTexture&&we(C),C.isRenderTargetTexture===!1&&C.version>0&&Y.__version!==C.version){let ne=C.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(Y,C,M);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+M)}function O(C,M){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){pe(Y,C,M);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+M)}function F(C,M){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){pe(Y,C,M);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+M)}function X(C,M){let Y=i.get(C);if(C.version>0&&Y.__version!==C.version){Q(Y,C,M);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+M)}let W={[_a]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[uh]:n.MIRRORED_REPEAT},me={[on]:n.NEAREST,[Uy]:n.NEAREST_MIPMAP_NEAREST,[ro]:n.NEAREST_MIPMAP_LINEAR,[Xn]:n.LINEAR,[xc]:n.LINEAR_MIPMAP_NEAREST,[ws]:n.LINEAR_MIPMAP_LINEAR},fe={[By]:n.NEVER,[$y]:n.ALWAYS,[zy]:n.LESS,[Xp]:n.LEQUAL,[Hy]:n.EQUAL,[Wy]:n.GEQUAL,[Vy]:n.GREATER,[Gy]:n.NOTEQUAL};function G(C,M){if(M.type===yi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Xn||M.magFilter===xc||M.magFilter===ro||M.magFilter===ws||M.minFilter===Xn||M.minFilter===xc||M.minFilter===ro||M.minFilter===ws)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(C,n.TEXTURE_WRAP_S,W[M.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,W[M.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,W[M.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,me[M.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,me[M.minFilter]),M.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,fe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===on||M.minFilter!==ro&&M.minFilter!==ws||M.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(C,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function te(C,M){let Y=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",I));let ne=M.source,ae=u.get(ne);ae===void 0&&(ae={},u.set(ne,ae));let ie=z(M);if(ie!==C.__cacheKey){ae[ie]===void 0&&(ae[ie]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),ae[ie].usedTimes++;let Oe=ae[C.__cacheKey];Oe!==void 0&&(ae[C.__cacheKey].usedTimes--,Oe.usedTimes===0&&U(M)),C.__cacheKey=ie,C.__webglTexture=ae[ie].texture}return Y}function pe(C,M,Y){let ne=n.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ne=n.TEXTURE_3D);let ae=te(C,M),ie=M.source;t.bindTexture(ne,C.__webglTexture,n.TEXTURE0+Y);let Oe=i.get(ie);if(ie.version!==Oe.__version||ae===!0){t.activeTexture(n.TEXTURE0+Y);let Se=ft.getPrimaries(ft.workingColorSpace),ke=M.colorSpace===Gi?null:ft.getPrimaries(M.colorSpace),ve=M.colorSpace===Gi||Se===ke?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let J=x(M.image,!1,s.maxTextureSize);J=ze(M,J);let ee=r.convert(M.format,M.colorSpace),Ne=r.convert(M.type),be=w(M.internalFormat,ee,Ne,M.colorSpace,M.isVideoTexture);G(ne,M);let Me,Te=M.mipmaps,qe=M.isVideoTexture!==!0,Ze=Oe.__version===void 0||ae===!0,H=ie.dataReady,Pe=b(M,J);if(M.isDepthTexture)be=_(M.format===br,M.type),Ze&&(qe?t.texStorage2D(n.TEXTURE_2D,1,be,J.width,J.height):t.texImage2D(n.TEXTURE_2D,0,be,J.width,J.height,0,ee,Ne,null));else if(M.isDataTexture)if(Te.length>0){qe&&Ze&&t.texStorage2D(n.TEXTURE_2D,Pe,be,Te[0].width,Te[0].height);for(let j=0,le=Te.length;j<le;j++)Me=Te[j],qe?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,ee,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,j,be,Me.width,Me.height,0,ee,Ne,Me.data);M.generateMipmaps=!1}else qe?(Ze&&t.texStorage2D(n.TEXTURE_2D,Pe,be,J.width,J.height),H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,J.width,J.height,ee,Ne,J.data)):t.texImage2D(n.TEXTURE_2D,0,be,J.width,J.height,0,ee,Ne,J.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){qe&&Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,be,Te[0].width,Te[0].height,J.depth);for(let j=0,le=Te.length;j<le;j++)if(Me=Te[j],M.format!==Yn)if(ee!==null)if(qe){if(H)if(M.layerUpdates.size>0){let Le=Ap(Me.width,Me.height,M.format,M.type);for(let De of M.layerUpdates){let st=Me.data.subarray(De*Le/Me.data.BYTES_PER_ELEMENT,(De+1)*Le/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,De,Me.width,Me.height,1,ee,st,0,0)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,J.depth,ee,Me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,be,Me.width,Me.height,J.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?H&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Me.width,Me.height,J.depth,ee,Ne,Me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,be,Me.width,Me.height,J.depth,0,ee,Ne,Me.data)}else{qe&&Ze&&t.texStorage2D(n.TEXTURE_2D,Pe,be,Te[0].width,Te[0].height);for(let j=0,le=Te.length;j<le;j++)Me=Te[j],M.format!==Yn?ee!==null?qe?H&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,ee,Me.data):t.compressedTexImage2D(n.TEXTURE_2D,j,be,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Me.width,Me.height,ee,Ne,Me.data):t.texImage2D(n.TEXTURE_2D,j,be,Me.width,Me.height,0,ee,Ne,Me.data)}else if(M.isDataArrayTexture)if(qe){if(Ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Pe,be,J.width,J.height,J.depth),H)if(M.layerUpdates.size>0){let j=Ap(J.width,J.height,M.format,M.type);for(let le of M.layerUpdates){let Le=J.data.subarray(le*j/J.data.BYTES_PER_ELEMENT,(le+1)*j/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,le,J.width,J.height,1,ee,Ne,Le)}M.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ee,Ne,J.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,J.width,J.height,J.depth,0,ee,Ne,J.data);else if(M.isData3DTexture)qe?(Ze&&t.texStorage3D(n.TEXTURE_3D,Pe,be,J.width,J.height,J.depth),H&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ee,Ne,J.data)):t.texImage3D(n.TEXTURE_3D,0,be,J.width,J.height,J.depth,0,ee,Ne,J.data);else if(M.isFramebufferTexture){if(Ze)if(qe)t.texStorage2D(n.TEXTURE_2D,Pe,be,J.width,J.height);else{let j=J.width,le=J.height;for(let Le=0;Le<Pe;Le++)t.texImage2D(n.TEXTURE_2D,Le,be,j,le,0,ee,Ne,null),j>>=1,le>>=1}}else if(Te.length>0){if(qe&&Ze){let j=Ee(Te[0]);t.texStorage2D(n.TEXTURE_2D,Pe,be,j.width,j.height)}for(let j=0,le=Te.length;j<le;j++)Me=Te[j],qe?H&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,ee,Ne,Me):t.texImage2D(n.TEXTURE_2D,j,be,ee,Ne,Me);M.generateMipmaps=!1}else if(qe){if(Ze){let j=Ee(J);t.texStorage2D(n.TEXTURE_2D,Pe,be,j.width,j.height)}H&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ee,Ne,J)}else t.texImage2D(n.TEXTURE_2D,0,be,ee,Ne,J);p(M)&&m(ne),Oe.__version=ie.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function Q(C,M,Y){if(M.image.length!==6)return;let ne=te(C,M),ae=M.source;t.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+Y);let ie=i.get(ae);if(ae.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+Y);let Oe=ft.getPrimaries(ft.workingColorSpace),Se=M.colorSpace===Gi?null:ft.getPrimaries(M.colorSpace),ke=M.colorSpace===Gi||Oe===Se?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,M.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,M.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let ve=M.isCompressedTexture||M.image[0].isCompressedTexture,J=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let le=0;le<6;le++)!ve&&!J?ee[le]=x(M.image[le],!0,s.maxCubemapSize):ee[le]=J?M.image[le].image:M.image[le],ee[le]=ze(M,ee[le]);let Ne=ee[0],be=r.convert(M.format,M.colorSpace),Me=r.convert(M.type),Te=w(M.internalFormat,be,Me,M.colorSpace),qe=M.isVideoTexture!==!0,Ze=ie.__version===void 0||ne===!0,H=ae.dataReady,Pe=b(M,Ne);G(n.TEXTURE_CUBE_MAP,M);let j;if(ve){qe&&Ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Te,Ne.width,Ne.height);for(let le=0;le<6;le++){j=ee[le].mipmaps;for(let Le=0;Le<j.length;Le++){let De=j[Le];M.format!==Yn?be!==null?qe?H&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,0,0,De.width,De.height,be,De.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,Te,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,0,0,De.width,De.height,be,Me,De.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le,Te,De.width,De.height,0,be,Me,De.data)}}}else{if(j=M.mipmaps,qe&&Ze){j.length>0&&Pe++;let le=Ee(ee[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Pe,Te,le.width,le.height)}for(let le=0;le<6;le++)if(J){qe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,ee[le].width,ee[le].height,be,Me,ee[le].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Te,ee[le].width,ee[le].height,0,be,Me,ee[le].data);for(let Le=0;Le<j.length;Le++){let st=j[Le].image[le].image;qe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,0,0,st.width,st.height,be,Me,st.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,Te,st.width,st.height,0,be,Me,st.data)}}else{qe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,be,Me,ee[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Te,be,Me,ee[le]);for(let Le=0;Le<j.length;Le++){let De=j[Le];qe?H&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,0,0,be,Me,De.image[le]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+le,Le+1,Te,be,Me,De.image[le])}}}p(M)&&m(n.TEXTURE_CUBE_MAP),ie.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function oe(C,M,Y,ne,ae,ie){let Oe=r.convert(Y.format,Y.colorSpace),Se=r.convert(Y.type),ke=w(Y.internalFormat,Oe,Se,Y.colorSpace);if(!i.get(M).__hasExternalTextures){let J=Math.max(1,M.width>>ie),ee=Math.max(1,M.height>>ie);ae===n.TEXTURE_3D||ae===n.TEXTURE_2D_ARRAY?t.texImage3D(ae,ie,ke,J,ee,M.depth,0,Oe,Se,null):t.texImage2D(ae,ie,ke,J,ee,0,Oe,Se,null)}t.bindFramebuffer(n.FRAMEBUFFER,C),he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,ae,i.get(Y).__webglTexture,0,ce(M)):(ae===n.TEXTURE_2D||ae>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ae<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,ae,i.get(Y).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function Ue(C,M,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,C),M.depthBuffer){let ne=M.depthTexture,ae=ne&&ne.isDepthTexture?ne.type:null,ie=_(M.stencilBuffer,ae),Oe=M.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Se=ce(M);he(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Se,ie,M.width,M.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,Se,ie,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ie,M.width,M.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,C)}else{let ne=M.textures;for(let ae=0;ae<ne.length;ae++){let ie=ne[ae],Oe=r.convert(ie.format,ie.colorSpace),Se=r.convert(ie.type),ke=w(ie.internalFormat,Oe,Se,ie.colorSpace),ve=ce(M);Y&&he(M)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,ke,M.width,M.height):he(M)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,ke,M.width,M.height):n.renderbufferStorage(n.RENDERBUFFER,ke,M.width,M.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function _e(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),L(M.depthTexture,0);let ne=i.get(M.depthTexture).__webglTexture,ae=ce(M);if(M.depthTexture.format===fr)he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(M.depthTexture.format===br)he(M)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,ae):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function We(C){let M=i.get(C),Y=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){let ne=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ne){let ae=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ne.removeEventListener("dispose",ae)};ne.addEventListener("dispose",ae),M.__depthDisposeCallback=ae}M.__boundDepthTexture=ne}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");_e(M.__webglFramebuffer,C)}else if(Y){M.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer[ne]),M.__webglDepthbuffer[ne]===void 0)M.__webglDepthbuffer[ne]=n.createRenderbuffer(),Ue(M.__webglDepthbuffer[ne],C,!1);else{let ae=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=M.__webglDepthbuffer[ne];n.bindRenderbuffer(n.RENDERBUFFER,ie),n.framebufferRenderbuffer(n.FRAMEBUFFER,ae,n.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=n.createRenderbuffer(),Ue(M.__webglDepthbuffer,C,!1);else{let ne=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ae),n.framebufferRenderbuffer(n.FRAMEBUFFER,ne,n.RENDERBUFFER,ae)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function He(C,M,Y){let ne=i.get(C);M!==void 0&&oe(ne.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&We(C)}function Fe(C){let M=C.texture,Y=i.get(C),ne=i.get(M);C.addEventListener("dispose",E);let ae=C.textures,ie=C.isWebGLCubeRenderTarget===!0,Oe=ae.length>1;if(Oe||(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=M.version,a.memory.textures++),ie){Y.__webglFramebuffer=[];for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer[Se]=[];for(let ke=0;ke<M.mipmaps.length;ke++)Y.__webglFramebuffer[Se][ke]=n.createFramebuffer()}else Y.__webglFramebuffer[Se]=n.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Se=0;Se<M.mipmaps.length;Se++)Y.__webglFramebuffer[Se]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let Se=0,ke=ae.length;Se<ke;Se++){let ve=i.get(ae[Se]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),a.memory.textures++)}if(C.samples>0&&he(C)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Se=0;Se<ae.length;Se++){let ke=ae[Se];Y.__webglColorRenderbuffer[Se]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Se]);let ve=r.convert(ke.format,ke.colorSpace),J=r.convert(ke.type),ee=w(ke.internalFormat,ve,J,ke.colorSpace,C.isXRRenderTarget===!0),Ne=ce(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ne,ee,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Se,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Se])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),Ue(Y.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ie){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),G(n.TEXTURE_CUBE_MAP,M);for(let Se=0;Se<6;Se++)if(M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)oe(Y.__webglFramebuffer[Se][ke],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,ke);else oe(Y.__webglFramebuffer[Se],C,M,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0);p(M)&&m(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let Se=0,ke=ae.length;Se<ke;Se++){let ve=ae[Se],J=i.get(ve);t.bindTexture(n.TEXTURE_2D,J.__webglTexture),G(n.TEXTURE_2D,ve),oe(Y.__webglFramebuffer,C,ve,n.COLOR_ATTACHMENT0+Se,n.TEXTURE_2D,0),p(ve)&&m(n.TEXTURE_2D)}t.unbindTexture()}else{let Se=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(Se=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Se,ne.__webglTexture),G(Se,M),M.mipmaps&&M.mipmaps.length>0)for(let ke=0;ke<M.mipmaps.length;ke++)oe(Y.__webglFramebuffer[ke],C,M,n.COLOR_ATTACHMENT0,Se,ke);else oe(Y.__webglFramebuffer,C,M,n.COLOR_ATTACHMENT0,Se,0);p(M)&&m(Se),t.unbindTexture()}C.depthBuffer&&We(C)}function Ce(C){let M=C.textures;for(let Y=0,ne=M.length;Y<ne;Y++){let ae=M[Y];if(p(ae)){let ie=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Oe=i.get(ae).__webglTexture;t.bindTexture(ie,Oe),m(ie),t.unbindTexture()}}}let se=[],D=[];function ye(C){if(C.samples>0){if(he(C)===!1){let M=C.textures,Y=C.width,ne=C.height,ae=n.COLOR_BUFFER_BIT,ie=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=i.get(C),Se=M.length>1;if(Se)for(let ke=0;ke<M.length;ke++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ke=0;ke<M.length;ke++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ae|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ae|=n.STENCIL_BUFFER_BIT)),Se){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[ke]);let ve=i.get(M[ke]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,Y,ne,0,0,Y,ne,ae,n.NEAREST),l===!0&&(se.length=0,D.length=0,se.push(n.COLOR_ATTACHMENT0+ke),C.depthBuffer&&C.resolveDepthBuffer===!1&&(se.push(ie),D.push(ie),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,D)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Se)for(let ke=0;ke<M.length;ke++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[ke]);let ve=i.get(M[ke]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ke,n.TEXTURE_2D,ve,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){let M=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[M])}}}function ce(C){return Math.min(s.maxSamples,C.samples)}function he(C){let M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(C){let M=a.render.frame;h.get(C)!==M&&(h.set(C,M),C.update())}function ze(C,M){let Y=C.colorSpace,ne=C.format,ae=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||Y!==ji&&Y!==Gi&&(ft.getTransfer(Y)===vt?(ne!==Yn||ae!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),M}function Ee(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=$,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=O,this.setTexture3D=F,this.setTextureCube=X,this.rebindTextures=He,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=We,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=he}function Fb(n,e){function t(i,s=Gi){let r,a=ft.getTransfer(s);if(i===_i)return n.UNSIGNED_BYTE;if(i===Su)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Tu)return n.UNSIGNED_SHORT_5_5_5_1;if(i===zp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Fp)return n.BYTE;if(i===Bp)return n.SHORT;if(i===ba)return n.UNSIGNED_SHORT;if(i===wu)return n.INT;if(i===Ss)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===Ia)return n.HALF_FLOAT;if(i===Hp)return n.ALPHA;if(i===Vp)return n.RGB;if(i===Yn)return n.RGBA;if(i===Gp)return n.LUMINANCE;if(i===Wp)return n.LUMINANCE_ALPHA;if(i===fr)return n.DEPTH_COMPONENT;if(i===br)return n.DEPTH_STENCIL;if(i===_l)return n.RED;if(i===Au)return n.RED_INTEGER;if(i===$p)return n.RG;if(i===Eu)return n.RG_INTEGER;if(i===Cu)return n.RGBA_INTEGER;if(i===Do||i===Uo||i===No||i===Oo)if(a===vt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Do)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Do)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Oo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===dh||i===fh||i===ph||i===mh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===dh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===fh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ph)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===mh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===gh||i===yh||i===xh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===gh||i===yh)return a===vt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===xh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===vh||i===_h||i===bh||i===Mh||i===wh||i===Sh||i===Th||i===Ah||i===Eh||i===Ch||i===Rh||i===Ph||i===Ih||i===Lh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===vh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===_h)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===bh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Mh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===wh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Sh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Th)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ah)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Eh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ch)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Rh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ph)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ih)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Lh)return a===vt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Fo||i===kh||i===Dh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Fo)return a===vt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===kh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Dh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===qp||i===Uh||i===Nh||i===Oh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Fo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Uh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Nh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Oh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===_r?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var eu=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qe=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Bb={type:"move"},ga=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,i),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},zb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hb=`
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

}`,tu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new yn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new On({vertexShader:zb,fragmentShader:Hb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new wi(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},nu=class extends Yi{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=new tu,p=t.getContextAttributes(),m=null,w=null,_=[],b=[],I=new ge,E=null,P=new an;P.layers.enable(1),P.viewport=new It;let U=new an;U.layers.enable(2),U.viewport=new It;let K=[P,U],v=new eu;v.layers.enable(1),v.layers.enable(2);let S=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let oe=_[Q];return oe===void 0&&(oe=new ga,_[Q]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Q){let oe=_[Q];return oe===void 0&&(oe=new ga,_[Q]=oe),oe.getGripSpace()},this.getHand=function(Q){let oe=_[Q];return oe===void 0&&(oe=new ga,_[Q]=oe),oe.getHandSpace()};function z(Q){let oe=b.indexOf(Q.inputSource);if(oe===-1)return;let Ue=_[oe];Ue!==void 0&&(Ue.update(Q.inputSource,Q.frame,c||a),Ue.dispatchEvent({type:Q.type,data:Q.inputSource}))}function L(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",O);for(let Q=0;Q<_.length;Q++){let oe=b[Q];oe!==null&&(b[Q]=null,_[Q].disconnect(oe))}S=null,$=null,x.reset(),e.setRenderTarget(m),f=null,u=null,d=null,s=null,w=null,pe.stop(),i.isPresenting=!1,e.setPixelRatio(E),e.setSize(I.width,I.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",L),s.addEventListener("inputsourceschange",O),p.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let oe={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new bi(f.framebufferWidth,f.framebufferHeight,{format:Yn,type:_i,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let oe=null,Ue=null,_e=null;p.depth&&(_e=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=p.stencil?br:fr,Ue=p.stencil?_r:Ss);let We={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};d=new XRWebGLBinding(s,t),u=d.createProjectionLayer(We),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),w=new bi(u.textureWidth,u.textureHeight,{format:Yn,type:_i,depthTexture:new nl(u.textureWidth,u.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),pe.setContext(s),pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function O(Q){for(let oe=0;oe<Q.removed.length;oe++){let Ue=Q.removed[oe],_e=b.indexOf(Ue);_e>=0&&(b[_e]=null,_[_e].disconnect(Ue))}for(let oe=0;oe<Q.added.length;oe++){let Ue=Q.added[oe],_e=b.indexOf(Ue);if(_e===-1){for(let He=0;He<_.length;He++)if(He>=b.length){b.push(Ue),_e=He;break}else if(b[He]===null){b[He]=Ue,_e=He;break}if(_e===-1)break}let We=_[_e];We&&We.connect(Ue)}}let F=new B,X=new B;function W(Q,oe,Ue){F.setFromMatrixPosition(oe.matrixWorld),X.setFromMatrixPosition(Ue.matrixWorld);let _e=F.distanceTo(X),We=oe.projectionMatrix.elements,He=Ue.projectionMatrix.elements,Fe=We[14]/(We[10]-1),Ce=We[14]/(We[10]+1),se=(We[9]+1)/We[5],D=(We[9]-1)/We[5],ye=(We[8]-1)/We[0],ce=(He[8]+1)/He[0],he=Fe*ye,we=Fe*ce,ze=_e/(-ye+ce),Ee=ze*-ye;if(oe.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ee),Q.translateZ(ze),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),We[10]===-1)Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse);else{let C=Fe+ze,M=Ce+ze,Y=he-Ee,ne=we+(_e-Ee),ae=se*Ce/M*C,ie=D*Ce/M*C;Q.projectionMatrix.makePerspective(Y,ne,ae,ie,C,M),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function me(Q,oe){oe===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(oe.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let oe=Q.near,Ue=Q.far;x.texture!==null&&(x.depthNear>0&&(oe=x.depthNear),x.depthFar>0&&(Ue=x.depthFar)),v.near=U.near=P.near=oe,v.far=U.far=P.far=Ue,(S!==v.near||$!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,$=v.far);let _e=Q.parent,We=v.cameras;me(v,_e);for(let He=0;He<We.length;He++)me(We[He],_e);We.length===2?W(v,P,U):v.projectionMatrix.copy(P.projectionMatrix),fe(Q,v,_e)};function fe(Q,oe,Ue){Ue===null?Q.matrix.copy(oe.matrixWorld):(Q.matrix.copy(Ue.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(oe.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(oe.projectionMatrix),Q.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=$o*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Q){l=Q,u!==null&&(u.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let G=null;function te(Q,oe){if(h=oe.getViewerPose(c||a),g=oe,h!==null){let Ue=h.views;f!==null&&(e.setRenderTargetFramebuffer(w,f.framebuffer),e.setRenderTarget(w));let _e=!1;Ue.length!==v.cameras.length&&(v.cameras.length=0,_e=!0);for(let He=0;He<Ue.length;He++){let Fe=Ue[He],Ce=null;if(f!==null)Ce=f.getViewport(Fe);else{let D=d.getViewSubImage(u,Fe);Ce=D.viewport,He===0&&(e.setRenderTargetTextures(w,D.colorTexture,u.ignoreDepthValues?void 0:D.depthStencilTexture),e.setRenderTarget(w))}let se=K[He];se===void 0&&(se=new an,se.layers.enable(He),se.viewport=new It,K[He]=se),se.matrix.fromArray(Fe.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(Fe.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),He===0&&(v.matrix.copy(se.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),_e===!0&&v.cameras.push(se)}let We=s.enabledFeatures;if(We&&We.includes("depth-sensing")){let He=d.getDepthInformation(Ue[0]);He&&He.isValid&&He.texture&&x.init(e,He,s.renderState)}}for(let Ue=0;Ue<_.length;Ue++){let _e=b[Ue],We=_[Ue];_e!==null&&We!==void 0&&We.update(_e,oe,c||a)}G&&G(Q,oe),oe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:oe}),g=null}let pe=new Jp;pe.setAnimationLoop(te),this.setAnimationLoop=function(Q){G=Q},this.dispose=function(){}}},xs=new ni,Vb=new Et;function Gb(n,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,Kp(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,w,_,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),x(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,w,_):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===ln&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===ln&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let w=e.get(m),_=w.envMap,b=w.envMapRotation;_&&(p.envMap.value=_,xs.copy(b),xs.x*=-1,xs.y*=-1,xs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),p.envMapRotation.value.setFromMatrix4(Vb.makeRotationFromEuler(xs)),p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,w,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*w,p.scale.value=_*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,w){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ln&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let w=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Wb(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,_){let b=_.program;i.uniformBlockBinding(w,b)}function c(w,_){let b=s[w.id];b===void 0&&(g(w),b=h(w),s[w.id]=b,w.addEventListener("dispose",p));let I=_.program;i.updateUBOMapping(w,I);let E=e.render.frame;r[w.id]!==E&&(u(w),r[w.id]=E)}function h(w){let _=d();w.__bindingPointIndex=_;let b=n.createBuffer(),I=w.__size,E=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,b),n.bufferData(n.UNIFORM_BUFFER,I,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,b),b}function d(){for(let w=0;w<o;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(w){let _=s[w.id],b=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let E=0,P=b.length;E<P;E++){let U=Array.isArray(b[E])?b[E]:[b[E]];for(let K=0,v=U.length;K<v;K++){let S=U[K];if(f(S,E,K,I)===!0){let $=S.__offset,z=Array.isArray(S.value)?S.value:[S.value],L=0;for(let O=0;O<z.length;O++){let F=z[O],X=x(F);typeof F=="number"||typeof F=="boolean"?(S.__data[0]=F,n.bufferSubData(n.UNIFORM_BUFFER,$+L,S.__data)):F.isMatrix3?(S.__data[0]=F.elements[0],S.__data[1]=F.elements[1],S.__data[2]=F.elements[2],S.__data[3]=0,S.__data[4]=F.elements[3],S.__data[5]=F.elements[4],S.__data[6]=F.elements[5],S.__data[7]=0,S.__data[8]=F.elements[6],S.__data[9]=F.elements[7],S.__data[10]=F.elements[8],S.__data[11]=0):(F.toArray(S.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,$,S.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,_,b,I){let E=w.value,P=_+"_"+b;if(I[P]===void 0)return typeof E=="number"||typeof E=="boolean"?I[P]=E:I[P]=E.clone(),!0;{let U=I[P];if(typeof E=="number"||typeof E=="boolean"){if(U!==E)return I[P]=E,!0}else if(U.equals(E)===!1)return U.copy(E),!0}return!1}function g(w){let _=w.uniforms,b=0,I=16;for(let P=0,U=_.length;P<U;P++){let K=Array.isArray(_[P])?_[P]:[_[P]];for(let v=0,S=K.length;v<S;v++){let $=K[v],z=Array.isArray($.value)?$.value:[$.value];for(let L=0,O=z.length;L<O;L++){let F=z[L],X=x(F),W=b%I,me=W%X.boundary,fe=W+me;b+=me,fe!==0&&I-fe<X.storage&&(b+=I-fe),$.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),$.__offset=b,b+=X.storage}}}let E=b%I;return E>0&&(b+=I-E),w.__size=b,w.__cache={},this}function x(w){let _={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(_.boundary=4,_.storage=4):w.isVector2?(_.boundary=8,_.storage=8):w.isVector3||w.isColor?(_.boundary=16,_.storage=12):w.isVector4?(_.boundary=16,_.storage=16):w.isMatrix3?(_.boundary=48,_.storage=48):w.isMatrix4?(_.boundary=64,_.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),_}function p(w){let _=w.target;_.removeEventListener("dispose",p);let b=a.indexOf(_.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function m(){for(let w in s)n.deleteBuffer(s[w]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var il=class{constructor(e={}){let{canvas:t=Xy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=a;let f=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,m=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$t,this.toneMapping=qi,this.toneMappingExposure=1;let _=this,b=!1,I=0,E=0,P=null,U=-1,K=null,v=new It,S=new It,$=null,z=new Je(0),L=0,O=t.width,F=t.height,X=1,W=null,me=null,fe=new It(0,0,O,F),G=new It(0,0,O,F),te=!1,pe=new wa,Q=!1,oe=!1,Ue=new Et,_e=new Et,We=new B,He=new It,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ce=!1;function se(){return P===null?X:1}let D=i;function ye(y,T){return t.getContext(y,T)}try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",De,!1),D===null){let T="webgl2";if(D=ye(T,y),D===null)throw ye(T)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ce,he,we,ze,Ee,C,M,Y,ne,ae,ie,Oe,Se,ke,ve,J,ee,Ne,be,Me,Te,qe,Ze,H;function Pe(){ce=new a1(D),ce.init(),qe=new Fb(D,ce),he=new e1(D,ce,e,qe),we=new Ub(D),he.reverseDepthBuffer&&we.buffers.depth.setReversed(!0),ze=new c1(D),Ee=new Mb,C=new Ob(D,ce,we,Ee,he,qe,ze),M=new n1(_),Y=new r1(_),ne=new gx(D),Ze=new j_(D,ne),ae=new o1(D,ne,ze,Ze),ie=new u1(D,ae,ne,ze),be=new h1(D,he,C),J=new t1(Ee),Oe=new bb(_,M,Y,ce,he,Ze,J),Se=new Gb(_,Ee),ke=new Sb,ve=new Pb(ce),Ne=new J_(_,M,Y,we,ie,u,l),ee=new kb(_,ie,he),H=new Wb(D,ze,he,we),Me=new Q_(D,ce,ze),Te=new l1(D,ce,ze),ze.programs=Oe.programs,_.capabilities=he,_.extensions=ce,_.properties=Ee,_.renderLists=ke,_.shadowMap=ee,_.state=we,_.info=ze}Pe();let j=new nu(_,D);this.xr=j,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=ce.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=ce.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(y){y!==void 0&&(X=y,this.setSize(O,F,!1))},this.getSize=function(y){return y.set(O,F)},this.setSize=function(y,T,N=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}O=y,F=T,t.width=Math.floor(y*X),t.height=Math.floor(T*X),N===!0&&(t.style.width=y+"px",t.style.height=T+"px"),this.setViewport(0,0,y,T)},this.getDrawingBufferSize=function(y){return y.set(O*X,F*X).floor()},this.setDrawingBufferSize=function(y,T,N){O=y,F=T,X=N,t.width=Math.floor(y*N),t.height=Math.floor(T*N),this.setViewport(0,0,y,T)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(fe)},this.setViewport=function(y,T,N,R){y.isVector4?fe.set(y.x,y.y,y.z,y.w):fe.set(y,T,N,R),we.viewport(v.copy(fe).multiplyScalar(X).round())},this.getScissor=function(y){return y.copy(G)},this.setScissor=function(y,T,N,R){y.isVector4?G.set(y.x,y.y,y.z,y.w):G.set(y,T,N,R),we.scissor(S.copy(G).multiplyScalar(X).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(y){we.setScissorTest(te=y)},this.setOpaqueSort=function(y){W=y},this.setTransparentSort=function(y){me=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,T=!0,N=!0){let R=0;if(y){let A=!1;if(P!==null){let k=P.texture.format;A=k===Cu||k===Eu||k===Au}if(A){let k=P.texture.type,Z=k===_i||k===Ss||k===ba||k===_r||k===Su||k===Tu,q=Ne.getClearColor(),re=Ne.getClearAlpha(),Ie=q.r,Be=q.g,Ve=q.b;Z?(f[0]=Ie,f[1]=Be,f[2]=Ve,f[3]=re,D.clearBufferuiv(D.COLOR,0,f)):(g[0]=Ie,g[1]=Be,g[2]=Ve,g[3]=re,D.clearBufferiv(D.COLOR,0,g))}else R|=D.COLOR_BUFFER_BIT}T&&(R|=D.DEPTH_BUFFER_BIT,D.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),N&&(R|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(R)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",De,!1),ke.dispose(),ve.dispose(),Ee.dispose(),M.dispose(),Y.dispose(),ie.dispose(),Ze.dispose(),H.dispose(),Oe.dispose(),j.dispose(),j.removeEventListener("sessionstart",oi),j.removeEventListener("sessionend",Pr),Bn.stop()};function le(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let y=ze.autoReset,T=ee.enabled,N=ee.autoUpdate,R=ee.needsUpdate,A=ee.type;Pe(),ze.autoReset=y,ee.enabled=T,ee.autoUpdate=N,ee.needsUpdate=R,ee.type=A}function De(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function st(y){let T=y.target;T.removeEventListener("dispose",st),_t(T)}function _t(y){Xt(y),Ee.remove(y)}function Xt(y){let T=Ee.get(y).programs;T!==void 0&&(T.forEach(function(N){Oe.releaseProgram(N)}),y.isShaderMaterial&&Oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,T,N,R,A,k){T===null&&(T=Fe);let Z=A.isMesh&&A.matrixWorld.determinant()<0,q=Ll(y,T,N,R,A);we.setMaterial(R,Z);let re=N.index,Ie=1;if(R.wireframe===!0){if(re=ae.getWireframeAttribute(N),re===void 0)return;Ie=2}let Be=N.drawRange,Ve=N.attributes.position,it=Be.start*Ie,lt=(Be.start+Be.count)*Ie;k!==null&&(it=Math.max(it,k.start*Ie),lt=Math.min(lt,(k.start+k.count)*Ie)),re!==null?(it=Math.max(it,0),lt=Math.min(lt,re.count)):Ve!=null&&(it=Math.max(it,0),lt=Math.min(lt,Ve.count));let ht=lt-it;if(ht<0||ht===1/0)return;Ze.setup(A,R,q,N,re);let en,at=Me;if(re!==null&&(en=ne.get(re),at=Te,at.setIndex(en)),A.isMesh)R.wireframe===!0?(we.setLineWidth(R.wireframeLinewidth*se()),at.setMode(D.LINES)):at.setMode(D.TRIANGLES);else if(A.isLine){let Ge=R.linewidth;Ge===void 0&&(Ge=1),we.setLineWidth(Ge*se()),A.isLineSegments?at.setMode(D.LINES):A.isLineLoop?at.setMode(D.LINE_LOOP):at.setMode(D.LINE_STRIP)}else A.isPoints?at.setMode(D.POINTS):A.isSprite&&at.setMode(D.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)at.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(ce.get("WEBGL_multi_draw"))at.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{let Ge=A._multiDrawStarts,Nt=A._multiDrawCounts,ct=A._multiDrawCount,Mn=re?ne.get(re).bytesPerElement:1,Jn=Ee.get(R).currentProgram.getUniforms();for(let tn=0;tn<ct;tn++)Jn.setValue(D,"_gl_DrawID",tn),at.render(Ge[tn]/Mn,Nt[tn])}else if(A.isInstancedMesh)at.renderInstances(it,ht,A.count);else if(N.isInstancedBufferGeometry){let Ge=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Nt=Math.min(N.instanceCount,Ge);at.renderInstances(it,ht,Nt)}else at.render(it,ht)};function nt(y,T,N){y.transparent===!0&&y.side===Ft&&y.forceSinglePass===!1?(y.side=ln,y.needsUpdate=!0,es(y,T,N),y.side=Xi,y.needsUpdate=!0,es(y,T,N),y.side=Ft):es(y,T,N)}this.compile=function(y,T,N=null){N===null&&(N=y),p=ve.get(N),p.init(T),w.push(p),N.traverseVisible(function(A){A.isLight&&A.layers.test(T.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),y!==N&&y.traverseVisible(function(A){A.isLight&&A.layers.test(T.layers)&&(p.pushLight(A),A.castShadow&&p.pushShadow(A))}),p.setupLights();let R=new Set;return y.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;let k=A.material;if(k)if(Array.isArray(k))for(let Z=0;Z<k.length;Z++){let q=k[Z];nt(q,N,A),R.add(q)}else nt(k,N,A),R.add(k)}),w.pop(),p=null,R},this.compileAsync=function(y,T,N=null){let R=this.compile(y,T,N);return new Promise(A=>{function k(){if(R.forEach(function(Z){Ee.get(Z).currentProgram.isReady()&&R.delete(Z)}),R.size===0){A(y);return}setTimeout(k,10)}ce.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Yt=null;function Qt(y){Yt&&Yt(y)}function oi(){Bn.stop()}function Pr(){Bn.start()}let Bn=new Jp;Bn.setAnimationLoop(Qt),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(y){Yt=y,j.setAnimationLoop(y),y===null?Bn.stop():Bn.start()},j.addEventListener("sessionstart",oi),j.addEventListener("sessionend",Pr),this.render=function(y,T){if(T!==void 0&&T.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),T.parent===null&&T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(T),T=j.getCamera()),y.isScene===!0&&y.onBeforeRender(_,y,T,P),p=ve.get(y,w.length),p.init(T),w.push(p),_e.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),pe.setFromProjectionMatrix(_e),oe=this.localClippingEnabled,Q=J.init(this.clippingPlanes,oe),x=ke.get(y,m.length),x.init(),m.push(x),j.enabled===!0&&j.isPresenting===!0){let k=_.xr.getDepthSensingMesh();k!==null&&Ds(k,T,-1/0,_.sortObjects)}Ds(y,T,0,_.sortObjects),x.finish(),_.sortObjects===!0&&x.sort(W,me),Ce=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ce&&Ne.addToRenderList(x,y),this.info.render.frame++,Q===!0&&J.beginShadows();let N=p.state.shadowsArray;ee.render(N,y,T),Q===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();let R=x.opaque,A=x.transmissive;if(p.setupLights(),T.isArrayCamera){let k=T.cameras;if(A.length>0)for(let Z=0,q=k.length;Z<q;Z++){let re=k[Z];Lr(R,A,y,re)}Ce&&Ne.render(y);for(let Z=0,q=k.length;Z<q;Z++){let re=k[Z];Ir(x,y,re,re.viewport)}}else A.length>0&&Lr(R,A,y,T),Ce&&Ne.render(y),Ir(x,y,T);P!==null&&(C.updateMultisampleRenderTarget(P),C.updateRenderTargetMipmap(P)),y.isScene===!0&&y.onAfterRender(_,y,T),Ze.resetDefaultState(),U=-1,K=null,w.pop(),w.length>0?(p=w[w.length-1],Q===!0&&J.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?x=m[m.length-1]:x=null};function Ds(y,T,N,R){if(y.visible===!1)return;if(y.layers.test(T.layers)){if(y.isGroup)N=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(T);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||pe.intersectsSprite(y)){R&&He.setFromMatrixPosition(y.matrixWorld).applyMatrix4(_e);let Z=ie.update(y),q=y.material;q.visible&&x.push(y,Z,q,N,He.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||pe.intersectsObject(y))){let Z=ie.update(y),q=y.material;if(R&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),He.copy(y.boundingSphere.center)):(Z.boundingSphere===null&&Z.computeBoundingSphere(),He.copy(Z.boundingSphere.center)),He.applyMatrix4(y.matrixWorld).applyMatrix4(_e)),Array.isArray(q)){let re=Z.groups;for(let Ie=0,Be=re.length;Ie<Be;Ie++){let Ve=re[Ie],it=q[Ve.materialIndex];it&&it.visible&&x.push(y,Z,it,N,He.z,Ve)}}else q.visible&&x.push(y,Z,q,N,He.z,null)}}let k=y.children;for(let Z=0,q=k.length;Z<q;Z++)Ds(k[Z],T,N,R)}function Ir(y,T,N,R){let A=y.opaque,k=y.transmissive,Z=y.transparent;p.setupLightsView(N),Q===!0&&J.setGlobalState(_.clippingPlanes,N),R&&we.viewport(v.copy(R)),A.length>0&&Qi(A,T,N),k.length>0&&Qi(k,T,N),Z.length>0&&Qi(Z,T,N),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Lr(y,T,N,R){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[R.id]===void 0&&(p.state.transmissionRenderTarget[R.id]=new bi(1,1,{generateMipmaps:!0,type:ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float")?Ia:_i,minFilter:ws,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let k=p.state.transmissionRenderTarget[R.id],Z=R.viewport||v;k.setSize(Z.z,Z.w);let q=_.getRenderTarget();_.setRenderTarget(k),_.getClearColor(z),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear(),Ce&&Ne.render(N);let re=_.toneMapping;_.toneMapping=qi;let Ie=R.viewport;if(R.viewport!==void 0&&(R.viewport=void 0),p.setupLightsView(R),Q===!0&&J.setGlobalState(_.clippingPlanes,R),Qi(y,N,R),C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Ve=0,it=T.length;Ve<it;Ve++){let lt=T[Ve],ht=lt.object,en=lt.geometry,at=lt.material,Ge=lt.group;if(at.side===Ft&&ht.layers.test(R.layers)){let Nt=at.side;at.side=ln,at.needsUpdate=!0,kr(ht,N,R,en,at,Ge),at.side=Nt,at.needsUpdate=!0,Be=!0}}Be===!0&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k))}_.setRenderTarget(q),_.setClearColor(z,L),Ie!==void 0&&(R.viewport=Ie),_.toneMapping=re}function Qi(y,T,N){let R=T.isScene===!0?T.overrideMaterial:null;for(let A=0,k=y.length;A<k;A++){let Z=y[A],q=Z.object,re=Z.geometry,Ie=R===null?Z.material:R,Be=Z.group;q.layers.test(N.layers)&&kr(q,T,N,re,Ie,Be)}}function kr(y,T,N,R,A,k){y.onBeforeRender(_,T,N,R,A,k),y.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),A.onBeforeRender(_,T,N,R,y,k),A.transparent===!0&&A.side===Ft&&A.forceSinglePass===!1?(A.side=ln,A.needsUpdate=!0,_.renderBufferDirect(N,T,R,A,y,k),A.side=Xi,A.needsUpdate=!0,_.renderBufferDirect(N,T,R,A,y,k),A.side=Ft):_.renderBufferDirect(N,T,R,A,y,k),y.onAfterRender(_,T,N,R,A,k)}function es(y,T,N){T.isScene!==!0&&(T=Fe);let R=Ee.get(y),A=p.state.lights,k=p.state.shadowsArray,Z=A.state.version,q=Oe.getParameters(y,A.state,k,T,N),re=Oe.getProgramCacheKey(q),Ie=R.programs;R.environment=y.isMeshStandardMaterial?T.environment:null,R.fog=T.fog,R.envMap=(y.isMeshStandardMaterial?Y:M).get(y.envMap||R.environment),R.envMapRotation=R.environment!==null&&y.envMap===null?T.environmentRotation:y.envMapRotation,Ie===void 0&&(y.addEventListener("dispose",st),Ie=new Map,R.programs=Ie);let Be=Ie.get(re);if(Be!==void 0){if(R.currentProgram===Be&&R.lightsStateVersion===Z)return Ci(y,q),Be}else q.uniforms=Oe.getUniforms(y),y.onBeforeCompile(q,_),Be=Oe.acquireProgram(q,re),Ie.set(re,Be),R.uniforms=q.uniforms;let Ve=R.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ve.clippingPlanes=J.uniform),Ci(y,q),R.needsLights=Oa(y),R.lightsStateVersion=Z,R.needsLights&&(Ve.ambientLightColor.value=A.state.ambient,Ve.lightProbe.value=A.state.probe,Ve.directionalLights.value=A.state.directional,Ve.directionalLightShadows.value=A.state.directionalShadow,Ve.spotLights.value=A.state.spot,Ve.spotLightShadows.value=A.state.spotShadow,Ve.rectAreaLights.value=A.state.rectArea,Ve.ltc_1.value=A.state.rectAreaLTC1,Ve.ltc_2.value=A.state.rectAreaLTC2,Ve.pointLights.value=A.state.point,Ve.pointLightShadows.value=A.state.pointShadow,Ve.hemisphereLights.value=A.state.hemi,Ve.directionalShadowMap.value=A.state.directionalShadowMap,Ve.directionalShadowMatrix.value=A.state.directionalShadowMatrix,Ve.spotShadowMap.value=A.state.spotShadowMap,Ve.spotLightMatrix.value=A.state.spotLightMatrix,Ve.spotLightMap.value=A.state.spotLightMap,Ve.pointShadowMap.value=A.state.pointShadowMap,Ve.pointShadowMatrix.value=A.state.pointShadowMatrix),R.currentProgram=Be,R.uniformsList=null,Be}function Dr(y){if(y.uniformsList===null){let T=y.currentProgram.getUniforms();y.uniformsList=mr.seqWithValue(T.seq,y.uniforms)}return y.uniformsList}function Ci(y,T){let N=Ee.get(y);N.outputColorSpace=T.outputColorSpace,N.batching=T.batching,N.batchingColor=T.batchingColor,N.instancing=T.instancing,N.instancingColor=T.instancingColor,N.instancingMorph=T.instancingMorph,N.skinning=T.skinning,N.morphTargets=T.morphTargets,N.morphNormals=T.morphNormals,N.morphColors=T.morphColors,N.morphTargetsCount=T.morphTargetsCount,N.numClippingPlanes=T.numClippingPlanes,N.numIntersection=T.numClipIntersection,N.vertexAlphas=T.vertexAlphas,N.vertexTangents=T.vertexTangents,N.toneMapping=T.toneMapping}function Ll(y,T,N,R,A){T.isScene!==!0&&(T=Fe),C.resetTextureUnits();let k=T.fog,Z=R.isMeshStandardMaterial?T.environment:null,q=P===null?_.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ji,re=(R.isMeshStandardMaterial?Y:M).get(R.envMap||Z),Ie=R.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Be=!!N.attributes.tangent&&(!!R.normalMap||R.anisotropy>0),Ve=!!N.morphAttributes.position,it=!!N.morphAttributes.normal,lt=!!N.morphAttributes.color,ht=qi;R.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ht=_.toneMapping);let en=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,at=en!==void 0?en.length:0,Ge=Ee.get(R),Nt=p.state.lights;if(Q===!0&&(oe===!0||y!==K)){let Vt=y===K&&R.id===U;J.setState(R,y,Vt)}let ct=!1;R.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Nt.state.version||Ge.outputColorSpace!==q||A.isBatchedMesh&&Ge.batching===!1||!A.isBatchedMesh&&Ge.batching===!0||A.isBatchedMesh&&Ge.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&Ge.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&Ge.instancing===!1||!A.isInstancedMesh&&Ge.instancing===!0||A.isSkinnedMesh&&Ge.skinning===!1||!A.isSkinnedMesh&&Ge.skinning===!0||A.isInstancedMesh&&Ge.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&Ge.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&Ge.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&Ge.instancingMorph===!1&&A.morphTexture!==null||Ge.envMap!==re||R.fog===!0&&Ge.fog!==k||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==J.numPlanes||Ge.numIntersection!==J.numIntersection)||Ge.vertexAlphas!==Ie||Ge.vertexTangents!==Be||Ge.morphTargets!==Ve||Ge.morphNormals!==it||Ge.morphColors!==lt||Ge.toneMapping!==ht||Ge.morphTargetsCount!==at)&&(ct=!0):(ct=!0,Ge.__version=R.version);let Mn=Ge.currentProgram;ct===!0&&(Mn=es(R,T,A));let Jn=!1,tn=!1,ts=!1,Ct=Mn.getUniforms(),En=Ge.uniforms;if(we.useProgram(Mn.program)&&(Jn=!0,tn=!0,ts=!0),R.id!==U&&(U=R.id,tn=!0),Jn||K!==y){he.reverseDepthBuffer?(Ue.copy(y.projectionMatrix),Zy(Ue),Ky(Ue),Ct.setValue(D,"projectionMatrix",Ue)):Ct.setValue(D,"projectionMatrix",y.projectionMatrix),Ct.setValue(D,"viewMatrix",y.matrixWorldInverse);let Vt=Ct.map.cameraPosition;Vt!==void 0&&Vt.setValue(D,We.setFromMatrixPosition(y.matrixWorld)),he.logarithmicDepthBuffer&&Ct.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(R.isMeshPhongMaterial||R.isMeshToonMaterial||R.isMeshLambertMaterial||R.isMeshBasicMaterial||R.isMeshStandardMaterial||R.isShaderMaterial)&&Ct.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),K!==y&&(K=y,tn=!0,ts=!0)}if(A.isSkinnedMesh){Ct.setOptional(D,A,"bindMatrix"),Ct.setOptional(D,A,"bindMatrixInverse");let Vt=A.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Ct.setValue(D,"boneTexture",Vt.boneTexture,C))}A.isBatchedMesh&&(Ct.setOptional(D,A,"batchingTexture"),Ct.setValue(D,"batchingTexture",A._matricesTexture,C),Ct.setOptional(D,A,"batchingIdTexture"),Ct.setValue(D,"batchingIdTexture",A._indirectTexture,C),Ct.setOptional(D,A,"batchingColorTexture"),A._colorsTexture!==null&&Ct.setValue(D,"batchingColorTexture",A._colorsTexture,C));let Ri=N.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&be.update(A,N,Mn),(tn||Ge.receiveShadow!==A.receiveShadow)&&(Ge.receiveShadow=A.receiveShadow,Ct.setValue(D,"receiveShadow",A.receiveShadow)),R.isMeshGouraudMaterial&&R.envMap!==null&&(En.envMap.value=re,En.flipEnvMap.value=re.isCubeTexture&&re.isRenderTargetTexture===!1?-1:1),R.isMeshStandardMaterial&&R.envMap===null&&T.environment!==null&&(En.envMapIntensity.value=T.environmentIntensity),tn&&(Ct.setValue(D,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&kl(En,ts),k&&R.fog===!0&&Se.refreshFogUniforms(En,k),Se.refreshMaterialUniforms(En,R,X,F,p.state.transmissionRenderTarget[y.id]),mr.upload(D,Dr(Ge),En,C)),R.isShaderMaterial&&R.uniformsNeedUpdate===!0&&(mr.upload(D,Dr(Ge),En,C),R.uniformsNeedUpdate=!1),R.isSpriteMaterial&&Ct.setValue(D,"center",A.center),Ct.setValue(D,"modelViewMatrix",A.modelViewMatrix),Ct.setValue(D,"normalMatrix",A.normalMatrix),Ct.setValue(D,"modelMatrix",A.matrixWorld),R.isShaderMaterial||R.isRawShaderMaterial){let Vt=R.uniformsGroups;for(let ns=0,Cn=Vt.length;ns<Cn;ns++){let Fa=Vt[ns];H.update(Fa,Mn),H.bind(Fa,Mn)}}return Mn}function kl(y,T){y.ambientLightColor.needsUpdate=T,y.lightProbe.needsUpdate=T,y.directionalLights.needsUpdate=T,y.directionalLightShadows.needsUpdate=T,y.pointLights.needsUpdate=T,y.pointLightShadows.needsUpdate=T,y.spotLights.needsUpdate=T,y.spotLightShadows.needsUpdate=T,y.rectAreaLights.needsUpdate=T,y.hemisphereLights.needsUpdate=T}function Oa(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(y,T,N){Ee.get(y.texture).__webglTexture=T,Ee.get(y.depthTexture).__webglTexture=N;let R=Ee.get(y);R.__hasExternalTextures=!0,R.__autoAllocateDepthBuffer=N===void 0,R.__autoAllocateDepthBuffer||ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),R.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,T){let N=Ee.get(y);N.__webglFramebuffer=T,N.__useDefaultFramebuffer=T===void 0},this.setRenderTarget=function(y,T=0,N=0){P=y,I=T,E=N;let R=!0,A=null,k=!1,Z=!1;if(y){let re=Ee.get(y);if(re.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(D.FRAMEBUFFER,null),R=!1;else if(re.__webglFramebuffer===void 0)C.setupRenderTarget(y);else if(re.__hasExternalTextures)C.rebindTextures(y,Ee.get(y.texture).__webglTexture,Ee.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ve=y.depthTexture;if(re.__boundDepthTexture!==Ve){if(Ve!==null&&Ee.has(Ve)&&(y.width!==Ve.image.width||y.height!==Ve.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(y)}}let Ie=y.texture;(Ie.isData3DTexture||Ie.isDataArrayTexture||Ie.isCompressedArrayTexture)&&(Z=!0);let Be=Ee.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Be[T])?A=Be[T][N]:A=Be[T],k=!0):y.samples>0&&C.useMultisampledRTT(y)===!1?A=Ee.get(y).__webglMultisampledFramebuffer:Array.isArray(Be)?A=Be[N]:A=Be,v.copy(y.viewport),S.copy(y.scissor),$=y.scissorTest}else v.copy(fe).multiplyScalar(X).floor(),S.copy(G).multiplyScalar(X).floor(),$=te;if(we.bindFramebuffer(D.FRAMEBUFFER,A)&&R&&we.drawBuffers(y,A),we.viewport(v),we.scissor(S),we.setScissorTest($),k){let re=Ee.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+T,re.__webglTexture,N)}else if(Z){let re=Ee.get(y.texture),Ie=T||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.__webglTexture,N||0,Ie)}U=-1},this.readRenderTargetPixels=function(y,T,N,R,A,k,Z){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Z!==void 0&&(q=q[Z]),q){we.bindFramebuffer(D.FRAMEBUFFER,q);try{let re=y.texture,Ie=re.format,Be=re.type;if(!he.textureFormatReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}T>=0&&T<=y.width-R&&N>=0&&N<=y.height-A&&D.readPixels(T,N,R,A,qe.convert(Ie),qe.convert(Be),k)}finally{let re=P!==null?Ee.get(P).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,re)}}},this.readRenderTargetPixelsAsync=async function(y,T,N,R,A,k,Z){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=Ee.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Z!==void 0&&(q=q[Z]),q){let re=y.texture,Ie=re.format,Be=re.type;if(!he.textureFormatReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(T>=0&&T<=y.width-R&&N>=0&&N<=y.height-A){we.bindFramebuffer(D.FRAMEBUFFER,q);let Ve=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ve),D.bufferData(D.PIXEL_PACK_BUFFER,k.byteLength,D.STREAM_READ),D.readPixels(T,N,R,A,qe.convert(Ie),qe.convert(Be),0);let it=P!==null?Ee.get(P).__webglFramebuffer:null;we.bindFramebuffer(D.FRAMEBUFFER,it);let lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Yy(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Ve),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,k),D.deleteBuffer(Ve),D.deleteSync(lt),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,T=null,N=0){y.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),T=arguments[0]||null,y=arguments[1]);let R=Math.pow(2,-N),A=Math.floor(y.image.width*R),k=Math.floor(y.image.height*R),Z=T!==null?T.x:0,q=T!==null?T.y:0;C.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,Z,q,A,k),we.unbindTexture()},this.copyTextureToTexture=function(y,T,N=null,R=null,A=0){y.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),R=arguments[0]||null,y=arguments[1],T=arguments[2],A=arguments[3]||0,N=null);let k,Z,q,re,Ie,Be;N!==null?(k=N.max.x-N.min.x,Z=N.max.y-N.min.y,q=N.min.x,re=N.min.y):(k=y.image.width,Z=y.image.height,q=0,re=0),R!==null?(Ie=R.x,Be=R.y):(Ie=0,Be=0);let Ve=qe.convert(T.format),it=qe.convert(T.type);C.setTexture2D(T,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,T.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,T.unpackAlignment);let lt=D.getParameter(D.UNPACK_ROW_LENGTH),ht=D.getParameter(D.UNPACK_IMAGE_HEIGHT),en=D.getParameter(D.UNPACK_SKIP_PIXELS),at=D.getParameter(D.UNPACK_SKIP_ROWS),Ge=D.getParameter(D.UNPACK_SKIP_IMAGES),Nt=y.isCompressedTexture?y.mipmaps[A]:y.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Nt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,q),D.pixelStorei(D.UNPACK_SKIP_ROWS,re),y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,A,Ie,Be,k,Z,Ve,it,Nt.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,A,Ie,Be,Nt.width,Nt.height,Ve,Nt.data):D.texSubImage2D(D.TEXTURE_2D,A,Ie,Be,k,Z,Ve,it,Nt),D.pixelStorei(D.UNPACK_ROW_LENGTH,lt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht),D.pixelStorei(D.UNPACK_SKIP_PIXELS,en),D.pixelStorei(D.UNPACK_SKIP_ROWS,at),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ge),A===0&&T.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),we.unbindTexture()},this.copyTextureToTexture3D=function(y,T,N=null,R=null,A=0){y.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,R=arguments[1]||null,y=arguments[2],T=arguments[3],A=arguments[4]||0);let k,Z,q,re,Ie,Be,Ve,it,lt,ht=y.isCompressedTexture?y.mipmaps[A]:y.image;N!==null?(k=N.max.x-N.min.x,Z=N.max.y-N.min.y,q=N.max.z-N.min.z,re=N.min.x,Ie=N.min.y,Be=N.min.z):(k=ht.width,Z=ht.height,q=ht.depth,re=0,Ie=0,Be=0),R!==null?(Ve=R.x,it=R.y,lt=R.z):(Ve=0,it=0,lt=0);let en=qe.convert(T.format),at=qe.convert(T.type),Ge;if(T.isData3DTexture)C.setTexture3D(T,0),Ge=D.TEXTURE_3D;else if(T.isDataArrayTexture||T.isCompressedArrayTexture)C.setTexture2DArray(T,0),Ge=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,T.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,T.unpackAlignment);let Nt=D.getParameter(D.UNPACK_ROW_LENGTH),ct=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Mn=D.getParameter(D.UNPACK_SKIP_PIXELS),Jn=D.getParameter(D.UNPACK_SKIP_ROWS),tn=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,ht.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ht.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,re),D.pixelStorei(D.UNPACK_SKIP_ROWS,Ie),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Be),y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Ge,A,Ve,it,lt,k,Z,q,en,at,ht.data):T.isCompressedArrayTexture?D.compressedTexSubImage3D(Ge,A,Ve,it,lt,k,Z,q,en,ht.data):D.texSubImage3D(Ge,A,Ve,it,lt,k,Z,q,en,at,ht),D.pixelStorei(D.UNPACK_ROW_LENGTH,Nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ct),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,tn),A===0&&T.generateMipmaps&&D.generateMipmap(Ge),we.unbindTexture()},this.initRenderTarget=function(y){Ee.get(y).__webglFramebuffer===void 0&&C.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?C.setTextureCube(y,0):y.isData3DTexture?C.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?C.setTexture2DArray(y,0):C.setTexture2D(y,0),we.unbindTexture()},this.resetState=function(){I=0,E=0,P=null,we.reset(),Ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Pu?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===bl?"display-p3":"srgb"}};var sl=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},iu=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bh,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new B,rl=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=ti(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Tn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ki=class extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,da=new B,or=new B,lr=new B,cr=new ge,fa=new ge,nm=new Et,Eo=new B,pa=new B,Co=new B,Ep=new ge,Zc=new ge,Cp=new ge,As=class extends Dt{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new fn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new iu(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new rl(i,3,0,!1)),ar.setAttribute("uv",new rl(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new ge(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),nm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),lr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-lr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Ro(Eo.set(-.5,-.5,0),lr,a,or,s,r),Ro(pa.set(.5,-.5,0),lr,a,or,s,r),Ro(Co.set(.5,.5,0),lr,a,or,s,r),Ep.set(0,0),Zc.set(1,0),Cp.set(1,1);let o=e.ray.intersectTriangle(Eo,pa,Co,!1,da);if(o===null&&(Ro(pa.set(-.5,.5,0),lr,a,or,s,r),Zc.set(0,1),o=e.ray.intersectTriangle(Eo,Co,pa,!1,da),o===null))return;let l=e.ray.origin.distanceTo(da);l<e.near||l>e.far||t.push({distance:l,point:da.clone(),uv:Wi.getInterpolation(da,Eo,pa,Co,Ep,Zc,Cp,new ge),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Ro(n,e,t,i,s,r){cr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(fa.x=r*cr.x-s*cr.y,fa.y=s*cr.x+r*cr.y):fa.copy(cr),n.copy(e),n.x+=fa.x,n.y+=fa.y,n.applyMatrix4(nm)}var al=class extends yn{constructor(e=null,t=1,i=1,s,r,a,o,l,c=on,h=on,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ii=class extends yn{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},xn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ge:new B);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new B,s=[],r=[],a=[],o=new B,l=new Et;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new B)}r[0]=new B,a[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Kt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sa=class extends xn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ge){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},su=class extends Sa{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Lu(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var Po=new B,Kc=new Lu,Jc=new Lu,jc=new Lu,Ta=class extends xn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new B){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),c=Po);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),Kc.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,x,p),Jc.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,x,p),jc.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(Kc.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Jc.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),jc.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(Kc.calc(l),Jc.calc(l),jc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new B().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Rp(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function $b(n,e){let t=1-n;return t*t*e}function qb(n,e){return 2*(1-n)*n*e}function Xb(n,e){return n*n*e}function ya(n,e,t,i){return $b(n,e)+qb(n,t)+Xb(n,i)}function Yb(n,e){let t=1-n;return t*t*t*e}function Zb(n,e){let t=1-n;return 3*t*t*n*e}function Kb(n,e){return 3*(1-n)*n*n*e}function Jb(n,e){return n*n*n*e}function xa(n,e,t,i,s){return Yb(n,e)+Zb(n,t)+Kb(n,i)+Jb(n,s)}var ol=class extends xn{constructor(e=new ge,t=new ge,i=new ge,s=new ge){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new ge){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ru=class extends xn{constructor(e=new B,t=new B,i=new B,s=new B){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(xa(e,s.x,r.x,a.x,o.x),xa(e,s.y,r.y,a.y,o.y),xa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ll=class extends xn{constructor(e=new ge,t=new ge){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ge){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ge){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},au=class extends xn{constructor(e=new B,t=new B){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new B){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new B){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends xn{constructor(e=new ge,t=new ge,i=new ge){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ge){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Es=class extends xn{constructor(e=new B,t=new B,i=new B){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new B){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(ya(e,s.x,r.x,a.x),ya(e,s.y,r.y,a.y),ya(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hl=class extends xn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ge){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Rp(o,l.x,c.x,h.x,d.x),Rp(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new ge().fromArray(s))}return this}},ul=Object.freeze({__proto__:null,ArcCurve:su,CatmullRomCurve3:Ta,CubicBezierCurve:ol,CubicBezierCurve3:ru,EllipseCurve:Sa,LineCurve:ll,LineCurve3:au,QuadraticBezierCurve:cl,QuadraticBezierCurve3:Es,SplineCurve:hl}),ou=class extends xn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ul[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new ul[s.type]().fromJSON(s))}return this}},Aa=class extends ou{constructor(e){super(),this.type="Path",this.currentPoint=new ge,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new ll(this.currentPoint.clone(),new ge(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new cl(this.currentPoint.clone(),new ge(e,t),new ge(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new ol(this.currentPoint.clone(),new ge(e,t),new ge(i,s),new ge(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new hl(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new Sa(e,t,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ea=class n extends fn{constructor(e=[new ge(0,-.5),new ge(.5,0),new ge(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Kt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new B,u=new ge,f=new B,g=new B,x=new B,p=0,m=0;for(let w=0;w<=e.length-1;w++)switch(w){case 0:p=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,f.x=m*1,f.y=-p,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[w+1].x-e[w].x,m=e[w+1].y-e[w].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(g)}for(let w=0;w<=t;w++){let _=i+w*h*s,b=Math.sin(_),I=Math.cos(_);for(let E=0;E<=e.length-1;E++){d.x=e[E].x*b,d.y=e[E].y,d.z=e[E].x*I,a.push(d.x,d.y,d.z),u.x=w/t,u.y=E/(e.length-1),o.push(u.x,u.y);let P=l[3*E+0]*b,U=l[3*E+1],K=l[3*E+0]*I;c.push(P,U,K)}}for(let w=0;w<t;w++)for(let _=0;_<e.length-1;_++){let b=_+w*e.length,I=b,E=b+e.length,P=b+e.length+1,U=b+1;r.push(I,E,U),r.push(P,U,E)}this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Si=class n extends Ea{constructor(e=1,t=1,i=4,s=8){let r=new Aa;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},wr=class n extends fn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new B,h=new ge;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=i+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class n extends fn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,x=[],p=i/2,m=0;w(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function w(){let b=new B,I=new B,E=0,P=(t-e)/i;for(let U=0;U<=r;U++){let K=[],v=U/r,S=v*(t-e)+e;for(let $=0;$<=s;$++){let z=$/s,L=z*l+o,O=Math.sin(L),F=Math.cos(L);I.x=S*O,I.y=-v*i+p,I.z=S*F,d.push(I.x,I.y,I.z),b.set(O,P,F).normalize(),u.push(b.x,b.y,b.z),f.push(z,1-v),K.push(g++)}x.push(K)}for(let U=0;U<s;U++)for(let K=0;K<r;K++){let v=x[K][U],S=x[K+1][U],$=x[K+1][U+1],z=x[K][U+1];e>0&&(h.push(v,S,z),E+=3),t>0&&(h.push(S,$,z),E+=3)}c.addGroup(m,E,0),m+=E}function _(b){let I=g,E=new ge,P=new B,U=0,K=b===!0?e:t,v=b===!0?1:-1;for(let $=1;$<=s;$++)d.push(0,p*v,0),u.push(0,v,0),f.push(.5,.5),g++;let S=g;for(let $=0;$<=s;$++){let L=$/s*l+o,O=Math.cos(L),F=Math.sin(L);P.x=K*F,P.y=p*v,P.z=K*O,d.push(P.x,P.y,P.z),u.push(0,v,0),E.x=O*.5+.5,E.y=F*.5*v+.5,f.push(E.x,E.y),g++}for(let $=0;$<s;$++){let z=I+$,L=S+$;b===!0?h.push(L,L+1,z):h.push(L+1,L,z),U+=3}c.addGroup(m,U,b===!0?1:2),m+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qt=class n extends yt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var si=class extends Aa{constructor(e){super(e),this.uuid=vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Aa().fromJSON(s))}return this}},jb={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=im(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,u,f;if(i&&(r=iM(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)d=n[g],u=n[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Ca(r,a,t,o,l,f,0),a}};function im(n,e,t,i,s){let r,a;if(s===pM(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Pp(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Pp(r,n[r],n[r+1],a);return a&&wl(a,a.next)&&(Pa(a),a=a.next),a}function Cs(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(wl(t,t.next)||At(t.prev,t,t.next)===0)){if(Pa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Ca(n,e,t,i,s,r,a){if(!n)return;!a&&r&&lM(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?eM(n,i,s,r):Qb(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Pa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=tM(Cs(n),e,t),Ca(n,e,t,i,s,r,2)):a===2&&nM(n,e,t,i,s,r):Ca(Cs(n),e,t,i,s,r,1);break}}}function Qb(n){let e=n.prev,t=n,i=n.next;if(At(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ur(s,o,r,l,a,c,g.x,g.y)&&At(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function eM(n,e,t,i){let s=n.prev,r=n,a=n.next;if(At(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,x=o>l?o>c?o:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=lu(f,g,e,t,i),w=lu(x,p,e,t,i),_=n.prevZ,b=n.nextZ;for(;_&&_.z>=m&&b&&b.z<=w;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&ur(o,h,l,d,c,u,_.x,_.y)&&At(_.prev,_,_.next)>=0||(_=_.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&ur(o,h,l,d,c,u,b.x,b.y)&&At(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;_&&_.z>=m;){if(_.x>=f&&_.x<=x&&_.y>=g&&_.y<=p&&_!==s&&_!==a&&ur(o,h,l,d,c,u,_.x,_.y)&&At(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;b&&b.z<=w;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=p&&b!==s&&b!==a&&ur(o,h,l,d,c,u,b.x,b.y)&&At(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function tM(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!wl(s,r)&&sm(s,i,i.next,r)&&Ra(s,r)&&Ra(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Pa(i),Pa(i.next),i=n=r),i=i.next}while(i!==n);return Cs(i)}function nM(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&uM(a,o)){let l=rm(a,o);a=Cs(a,a.next),l=Cs(l,l.next),Ca(a,e,t,i,s,r,0),Ca(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function iM(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=im(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(hM(c));for(s.sort(sM),r=0;r<s.length;r++)t=rM(s[r],t);return t}function sM(n,e){return n.x-e.x}function rM(n,e){let t=aM(n,e);if(!t)return e;let i=rm(t,n);return Cs(i,i.next),Cs(t,t.next)}function aM(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let u=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=r&&u>i&&(i=u,s=t.x<t.next.x?t:t.next,u===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&ur(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(d=Math.abs(a-t.y)/(r-t.x),Ra(t,n)&&(d<h||d===h&&(t.x>s.x||t.x===s.x&&oM(s,t)))&&(s=t,h=d)),t=t.next;while(t!==o);return s}function oM(n,e){return At(n.prev,n,e.prev)<0&&At(e.next,n,n.next)<0}function lM(n,e,t,i){let s=n;do s.z===0&&(s.z=lu(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,cM(s)}function cM(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function lu(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function hM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function ur(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function uM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!dM(n,e)&&(Ra(n,e)&&Ra(e,n)&&fM(n,e)&&(At(n.prev,n,e.prev)||At(n,e.prev,e))||wl(n,e)&&At(n.prev,n,n.next)>0&&At(e.prev,e,e.next)>0)}function At(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function wl(n,e){return n.x===e.x&&n.y===e.y}function sm(n,e,t,i){let s=Lo(At(n,e,t)),r=Lo(At(n,e,i)),a=Lo(At(t,i,n)),o=Lo(At(t,i,e));return!!(s!==r&&a!==o||s===0&&Io(n,t,e)||r===0&&Io(n,i,e)||a===0&&Io(t,n,i)||o===0&&Io(t,e,i))}function Io(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Lo(n){return n>0?1:n<0?-1:0}function dM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&sm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ra(n,e){return At(n.prev,n,n.next)<0?At(n,e,n.next)>=0&&At(n,n.prev,e)>=0:At(n,e,n.prev)<0||At(n,n.next,e)<0}function fM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function rm(n,e){let t=new cu(n.i,n.x,n.y),i=new cu(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Pp(n,e,t,i){let s=new cu(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function cu(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function pM(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var va=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];Ip(e),Lp(i,e);let a=e.length;t.forEach(Ip);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Lp(i,t[l]);let o=jb.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Ip(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Ji=class n extends fn{constructor(e=new si([new ge(.5,.5),new ge(-.5,.5),new ge(-.5,-.5),new ge(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,w=t.UVGenerator!==void 0?t.UVGenerator:mM,_,b=!1,I,E,P,U;m&&(_=m.getSpacedPoints(h),b=!0,u=!1,I=m.computeFrenetFrames(h,!1),E=new B,P=new B,U=new B),u||(p=0,f=0,g=0,x=0);let K=o.extractPoints(c),v=K.shape,S=K.holes;if(!va.isClockWise(v)){v=v.reverse();for(let se=0,D=S.length;se<D;se++){let ye=S[se];va.isClockWise(ye)&&(S[se]=ye.reverse())}}let z=va.triangulateShape(v,S),L=v;for(let se=0,D=S.length;se<D;se++){let ye=S[se];v=v.concat(ye)}function O(se,D,ye){return D||console.error("THREE.ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(D,ye)}let F=v.length,X=z.length;function W(se,D,ye){let ce,he,we,ze=se.x-D.x,Ee=se.y-D.y,C=ye.x-se.x,M=ye.y-se.y,Y=ze*ze+Ee*Ee,ne=ze*M-Ee*C;if(Math.abs(ne)>Number.EPSILON){let ae=Math.sqrt(Y),ie=Math.sqrt(C*C+M*M),Oe=D.x-Ee/ae,Se=D.y+ze/ae,ke=ye.x-M/ie,ve=ye.y+C/ie,J=((ke-Oe)*M-(ve-Se)*C)/(ze*M-Ee*C);ce=Oe+ze*J-se.x,he=Se+Ee*J-se.y;let ee=ce*ce+he*he;if(ee<=2)return new ge(ce,he);we=Math.sqrt(ee/2)}else{let ae=!1;ze>Number.EPSILON?C>Number.EPSILON&&(ae=!0):ze<-Number.EPSILON?C<-Number.EPSILON&&(ae=!0):Math.sign(Ee)===Math.sign(M)&&(ae=!0),ae?(ce=-Ee,he=ze,we=Math.sqrt(Y)):(ce=ze,he=Ee,we=Math.sqrt(Y/2))}return new ge(ce/we,he/we)}let me=[];for(let se=0,D=L.length,ye=D-1,ce=se+1;se<D;se++,ye++,ce++)ye===D&&(ye=0),ce===D&&(ce=0),me[se]=W(L[se],L[ye],L[ce]);let fe=[],G,te=me.concat();for(let se=0,D=S.length;se<D;se++){let ye=S[se];G=[];for(let ce=0,he=ye.length,we=he-1,ze=ce+1;ce<he;ce++,we++,ze++)we===he&&(we=0),ze===he&&(ze=0),G[ce]=W(ye[ce],ye[we],ye[ze]);fe.push(G),te=te.concat(G)}for(let se=0;se<p;se++){let D=se/p,ye=f*Math.cos(D*Math.PI/2),ce=g*Math.sin(D*Math.PI/2)+x;for(let he=0,we=L.length;he<we;he++){let ze=O(L[he],me[he],ce);_e(ze.x,ze.y,-ye)}for(let he=0,we=S.length;he<we;he++){let ze=S[he];G=fe[he];for(let Ee=0,C=ze.length;Ee<C;Ee++){let M=O(ze[Ee],G[Ee],ce);_e(M.x,M.y,-ye)}}}let pe=g+x;for(let se=0;se<F;se++){let D=u?O(v[se],te[se],pe):v[se];b?(P.copy(I.normals[0]).multiplyScalar(D.x),E.copy(I.binormals[0]).multiplyScalar(D.y),U.copy(_[0]).add(P).add(E),_e(U.x,U.y,U.z)):_e(D.x,D.y,0)}for(let se=1;se<=h;se++)for(let D=0;D<F;D++){let ye=u?O(v[D],te[D],pe):v[D];b?(P.copy(I.normals[se]).multiplyScalar(ye.x),E.copy(I.binormals[se]).multiplyScalar(ye.y),U.copy(_[se]).add(P).add(E),_e(U.x,U.y,U.z)):_e(ye.x,ye.y,d/h*se)}for(let se=p-1;se>=0;se--){let D=se/p,ye=f*Math.cos(D*Math.PI/2),ce=g*Math.sin(D*Math.PI/2)+x;for(let he=0,we=L.length;he<we;he++){let ze=O(L[he],me[he],ce);_e(ze.x,ze.y,d+ye)}for(let he=0,we=S.length;he<we;he++){let ze=S[he];G=fe[he];for(let Ee=0,C=ze.length;Ee<C;Ee++){let M=O(ze[Ee],G[Ee],ce);b?_e(M.x,M.y+_[h-1].y,_[h-1].x+ye):_e(M.x,M.y,d+ye)}}}Q(),oe();function Q(){let se=s.length/3;if(u){let D=0,ye=F*D;for(let ce=0;ce<X;ce++){let he=z[ce];We(he[2]+ye,he[1]+ye,he[0]+ye)}D=h+p*2,ye=F*D;for(let ce=0;ce<X;ce++){let he=z[ce];We(he[0]+ye,he[1]+ye,he[2]+ye)}}else{for(let D=0;D<X;D++){let ye=z[D];We(ye[2],ye[1],ye[0])}for(let D=0;D<X;D++){let ye=z[D];We(ye[0]+F*h,ye[1]+F*h,ye[2]+F*h)}}i.addGroup(se,s.length/3-se,0)}function oe(){let se=s.length/3,D=0;Ue(L,D),D+=L.length;for(let ye=0,ce=S.length;ye<ce;ye++){let he=S[ye];Ue(he,D),D+=he.length}i.addGroup(se,s.length/3-se,1)}function Ue(se,D){let ye=se.length;for(;--ye>=0;){let ce=ye,he=ye-1;he<0&&(he=se.length-1);for(let we=0,ze=h+p*2;we<ze;we++){let Ee=F*we,C=F*(we+1),M=D+ce+Ee,Y=D+he+Ee,ne=D+he+C,ae=D+ce+C;He(M,Y,ne,ae)}}}function _e(se,D,ye){l.push(se),l.push(D),l.push(ye)}function We(se,D,ye){Fe(se),Fe(D),Fe(ye);let ce=s.length/3,he=w.generateTopUV(i,s,ce-3,ce-2,ce-1);Ce(he[0]),Ce(he[1]),Ce(he[2])}function He(se,D,ye,ce){Fe(se),Fe(D),Fe(ce),Fe(D),Fe(ye),Fe(ce);let he=s.length/3,we=w.generateSideWallUV(i,s,he-6,he-3,he-2,he-1);Ce(we[0]),Ce(we[1]),Ce(we[3]),Ce(we[1]),Ce(we[2]),Ce(we[3])}function Fe(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function Ce(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return gM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new ul[s.type]().fromJSON(s)),new n(i,e.options)}},mM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new ge(r,a),new ge(o,l),new ge(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ge(a,1-l),new ge(c,1-d),new ge(u,1-g),new ge(x,1-m)]:[new ge(o,1-l),new ge(h,1-d),new ge(f,1-g),new ge(p,1-m)]}};function gM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ot=class n extends fn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new B,u=new B,f=[],g=[],x=[],p=[];for(let m=0;m<=i;m++){let w=[],_=m/i,b=0;m===0&&a===0?b=.5/t:m===i&&l===Math.PI&&(b=-.5/t);for(let I=0;I<=t;I++){let E=I/t;d.x=-e*Math.cos(s+E*r)*Math.sin(a+_*o),d.y=e*Math.cos(a+_*o),d.z=e*Math.sin(s+E*r)*Math.sin(a+_*o),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(E+b,1-_),w.push(c++)}h.push(w)}for(let m=0;m<i;m++)for(let w=0;w<t;w++){let _=h[m][w+1],b=h[m][w],I=h[m+1][w],E=h[m+1][w+1];(m!==0||a>0)&&f.push(_,b,E),(m!==i-1||l<Math.PI)&&f.push(b,I,E)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(x,3)),this.setAttribute("uv",new mt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var xt=class n extends fn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new B,d=new B,u=new B;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let x=g/s*r,p=f/i*Math.PI*2;d.x=(e+t*Math.cos(p))*Math.cos(x),d.y=(e+t*Math.cos(p))*Math.sin(x),d.z=t*Math.sin(p),o.push(d.x,d.y,d.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let x=(s+1)*f+g-1,p=(s+1)*(f-1)+g-1,m=(s+1)*(f-1)+g,w=(s+1)*f+g;a.push(x,p,w),a.push(p,m,w)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Rs=class n extends fn{constructor(e=new Es(new B(-1,-1,0),new B(-1,1,0),new B(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new B,l=new B,c=new ge,h=new B,d=[],u=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new mt(d,3)),this.setAttribute("normal",new mt(u,3)),this.setAttribute("uv",new mt(f,2));function x(){for(let _=0;_<t;_++)p(_);p(r===!1?t:0),w(),m()}function p(_){h=e.getPointAt(_/t,h);let b=a.normals[_],I=a.binormals[_];for(let E=0;E<=s;E++){let P=E/s*Math.PI*2,U=Math.sin(P),K=-Math.cos(P);l.x=K*b.x+U*I.x,l.y=K*b.y+U*I.y,l.z=K*b.z+U*I.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let _=1;_<=t;_++)for(let b=1;b<=s;b++){let I=(s+1)*(_-1)+(b-1),E=(s+1)*_+(b-1),P=(s+1)*_+b,U=(s+1)*(_-1)+b;g.push(I,E,U),g.push(E,P,U)}}function w(){for(let _=0;_<=t;_++)for(let b=0;b<=s;b++)c.x=_/t,c.y=b/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new ul[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var vn=class extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var dl=class extends Mi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Je(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ru,this.normalScale=new ge(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function ko(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function yM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Sr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},hu=class extends Sr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nf,endingEnd:Nf}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Of:r=e,o=2*t-i;break;case Ff:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Of:a=e,l=2*i-t;break;case Ff:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,w=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,_=(-1-f)*p+(1.5+f)*x+.5*g,b=f*p-f*x;for(let I=0;I!==o;++I)r[I]=m*a[h+I]+w*a[c+I]+_*a[l+I]+b*a[d+I];return r}},uu=class extends Sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},du=class extends Sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Zn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ko(t,this.TimeBufferType),this.values=ko(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ko(e.times,Array),values:ko(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new du(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new uu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new hu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case zo:t=this.InterpolantFactoryMethodDiscrete;break;case Fh:t=this.InterpolantFactoryMethodLinear;break;case vc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zo;case this.InterpolantFactoryMethodLinear:return Fh;case this.InterpolantFactoryMethodSmooth:return vc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&yM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===vc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Zn.prototype.TimeBufferType=Float32Array;Zn.prototype.ValueBufferType=Float32Array;Zn.prototype.DefaultInterpolation=Fh;var Ps=class extends Zn{constructor(e,t,i){super(e,t,i)}};Ps.prototype.ValueTypeName="bool";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=zo;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;var fu=class extends Zn{};fu.prototype.ValueTypeName="color";var pu=class extends Zn{};pu.prototype.ValueTypeName="number";var mu=class extends Sr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},fl=class extends Zn{InterpolantFactoryMethodLinear(e){return new mu(this.times,this.values,this.getValueSize(),e)}};fl.prototype.ValueTypeName="quaternion";fl.prototype.InterpolantFactoryMethodSmooth=void 0;var Is=class extends Zn{constructor(e,t,i){super(e,t,i)}};Is.prototype.ValueTypeName="string";Is.prototype.ValueBufferType=Array;Is.prototype.DefaultInterpolation=zo;Is.prototype.InterpolantFactoryMethodLinear=void 0;Is.prototype.InterpolantFactoryMethodSmooth=void 0;var gu=class extends Zn{};gu.prototype.ValueTypeName="vector";var yu=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},xM=new yu,xu=class{constructor(e){this.manager=e!==void 0?e:xM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};xu.DEFAULT_MATERIAL_NAME="__DEFAULT";var Tr=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Je(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},pl=class extends Tr{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Je(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Qc=new Et,kp=new B,Dp=new B,ml=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ge(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new ge(1,1),this._viewportCount=1,this._viewports=[new It(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;kp.setFromMatrixPosition(e.matrixWorld),t.position.copy(kp),Dp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Dp),t.updateMatrixWorld(),Qc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},vu=class extends ml{constructor(){super(new an(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=$o*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},gl=class extends Tr{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new vu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var _u=class extends ml{constructor(){super(new el(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},yl=class extends Tr{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new _u}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},xl=class extends Tr{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ku="\\[\\]\\.:\\/",vM=new RegExp("["+ku+"]","g"),Du="[^"+ku+"]",_M="[^"+ku.replace("\\.","")+"]",bM=/((?:WC+[\/:])*)/.source.replace("WC",Du),MM=/(WCOD+)?/.source.replace("WCOD",_M),wM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Du),SM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Du),TM=new RegExp("^"+bM+MM+wM+SM+"$"),AM=["material","materials","bones","map"],bu=class{constructor(e,t,i){let s=i||bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},bt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(vM,"")}static parseTrackName(e){let t=TM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);AM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bt.Composite=bu;bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};bt.prototype.GetterByBindingType=[bt.prototype._getValue_direct,bt.prototype._getValue_array,bt.prototype._getValue_arrayElement,bt.prototype._getValue_toArray];bt.prototype.SetterByBindingTypeAndVersioning=[[bt.prototype._setValue_direct,bt.prototype._setValue_direct_setNeedsUpdate,bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_array,bt.prototype._setValue_array_setNeedsUpdate,bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_arrayElement,bt.prototype._setValue_arrayElement_setNeedsUpdate,bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bt.prototype._setValue_fromArray,bt.prototype._setValue_fromArray_setNeedsUpdate,bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ww=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var La=new B;function Fn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;La.copy(e),La[i]=0,La.normalize();let c=.5*a/(a+o),h=1-La.angleTo(n)/l;return Math.sign(La[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ti=class extends jt{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new B,l=new B,c=new B(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,u=this.attributes.uv.array,f=h.length/6,g=new B,x=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),l.copy(o),l.x-=Math.sign(l.x)*x,l.y-=Math.sign(l.y)*x,l.z-=Math.sign(l.z)*x,l.normalize(),h[p+0]=c.x*Math.sign(o.x)+l.x*r,h[p+1]=c.y*Math.sign(o.y)+l.y*r,h[p+2]=c.z*Math.sign(o.z)+l.z*r,d[p+0]=l.x,d[p+1]=l.y,d[p+2]=l.z,Math.floor(p/f)){case 0:g.set(1,0,0),u[m+0]=Fn(g,l,"z","y",r,i),u[m+1]=1-Fn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),u[m+0]=1-Fn(g,l,"z","y",r,i),u[m+1]=1-Fn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),u[m+0]=1-Fn(g,l,"x","z",r,e),u[m+1]=Fn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),u[m+0]=1-Fn(g,l,"x","z",r,e),u[m+1]=1-Fn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),u[m+0]=1-Fn(g,l,"x","y",r,e),u[m+1]=1-Fn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),u[m+0]=Fn(g,l,"x","y",r,e),u[m+1]=1-Fn(g,l,"y","x",r,t);break}}};function EM(){let n=document.createElement("canvas");n.width=1024,n.height=512;let e=n.getContext("2d"),t=12,i=n.width/t,s=["#d9944f","#cf8846","#e0a05a","#c98240","#d68f4c"];for(let a=0;a<t;a++){e.fillStyle=s[a*7%s.length],e.fillRect(a*i,0,i,n.height),e.strokeStyle="rgba(120,60,20,.18)",e.lineWidth=2;for(let l=0;l<7;l++){e.beginPath();let c=a*i+8+Math.random()*(i-16);e.moveTo(c,0);for(let h=0;h<=n.height;h+=32)e.lineTo(c+Math.sin(h/60+l)*4,h);e.stroke()}e.fillStyle="rgba(70,30,10,.55)",e.fillRect(a*i,0,3,n.height);let o=a*173%n.height;e.fillRect(a*i,o,i,3)}let r=new ii(n);return r.colorSpace=$t,r.wrapS=r.wrapT=_a,r.anisotropy=4,r}function CM(){let n=document.createElement("canvas");n.width=512,n.height=512;let e=n.getContext("2d"),t=e.createRadialGradient(256,200,40,256,256,380);t.addColorStop(0,"#6d48d6"),t.addColorStop(.55,"#3f2196"),t.addColorStop(1,"#1d0f52"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let s=0;s<90;s++)e.fillStyle=Math.random()<.25?"#ffe9a8":"#ffffff",e.globalAlpha=.4+Math.random()*.6,e.beginPath(),e.arc(Math.random()*512,Math.random()*420,Math.random()*2+.6,0,Math.PI*2),e.fill();e.globalAlpha=1;let i=new ii(n);return i.colorSpace=$t,i}function RM(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,240,190,1)"),t.addColorStop(.3,"rgba(255,210,120,.6)"),t.addColorStop(1,"rgba(255,200,100,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ii(n)}function am(n,e,t){let i=new wi(n,e,t*10,1),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=(s.getX(r)+n/2)/n;s.setZ(r,Math.sin(a*t*Math.PI*2)*.16)}return i.computeVertexNormals(),i}function PM(n=.32,e=.14){let t=new si;for(let i=0;i<10;i++){let s=i/10*Math.PI*2-Math.PI/2,r=i%2?e:n;t[i?"lineTo":"moveTo"](Math.cos(s)*r,-Math.sin(s)*r)}return t}function om(n){let e={hangs:[],crowd:[],beams:[],bulbs:[]};n.background=new Je(1444910);let t=EM();t.repeat.set(1.6,1.2);let i=new je(new wi(14,7.5),new vn({map:t,roughness:.55}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-.4),i.receiveShadow=!0,n.add(i);let s=new je(new jt(14,.55,.3),new vn({color:8011031,roughness:.6}));s.position.set(0,-.28,3.35),n.add(s);let r=new je(new jt(14,.08,.34),new vn({color:16763197,roughness:.3,metalness:.4}));r.position.set(0,0,3.36),n.add(r);let a=new je(new wi(40,20),new vn({color:853792}));a.rotation.x=-Math.PI/2,a.position.set(0,-.55,10),n.add(a);let o=new je(new wi(16,10),new vn({map:CM(),roughness:.9,emissive:1707322,emissiveIntensity:.5}));o.position.set(0,4.2,-4.1),o.receiveShadow=!0,n.add(o);let l=(b,I,E,P,U)=>{let K=new Qe;K.position.set(I,E+U,P);let v=new je(new yt(.012,.012,U,4),new Jt({color:15658751,transparent:!0,opacity:.6}));v.position.y=-U/2,K.add(v),b.position.y=-U,K.add(b),K.userData.ph=Math.random()*6,n.add(K),e.hangs.push(K)},c=new si;c.absarc(0,0,.55,0,Math.PI*2,!1);let h=new si;h.absarc(.24,.16,.48,0,Math.PI*2,!0),c.holes.push(h);let d=new je(new Ji(c,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03}),new vn({color:16766826,emissive:16759101,emissiveIntensity:.6,roughness:.4}));l(d,-3.4,3.4,-3.3,1.6);let u=new vn({color:16769658,emissive:16763197,emissiveIntensity:.5,roughness:.4});for(let[b,I,E,P]of[[-1.8,4.1,.9,.8],[2.2,3.9,1.2,1],[3.6,4.3,.7,.7],[-4.6,4.4,.6,.6]]){let U=new je(new Ji(PM(),{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),u);U.scale.setScalar(P),l(U,b,I,-3.4,E)}let f=new vn({color:11736364,roughness:.75,side:Ft});for(let b of[-1,1]){let I=new je(am(3.2,8,7),f);I.position.set(b*5.6,4,.6),I.rotation.y=b*-.25,I.castShadow=!0,n.add(I);let E=new je(new xt(.42,.07,10,24),new vn({color:16763197,roughness:.3,metalness:.5}));E.position.set(b*4.35,1.9,.75),E.rotation.set(Math.PI/2,0,b*.3),E.scale.set(1,1,.6),n.add(E)}let g=new je(am(15,1.5,22),f);g.position.set(0,5.25,1.6),n.add(g);let x=new je(new jt(15,.1,.12),new vn({color:16763197,emissive:9067008,emissiveIntensity:.3,metalness:.4,roughness:.3}));x.position.set(0,4.5,1.7),n.add(x);let p=RM();for(let b=0;b<9;b++){let I=-4.4+b*1.1,E=new je(new ot(.09,12,8),new Jt({color:16774064}));E.position.set(I,.08,3.1),n.add(E);let P=new As(new Ki({map:p,transparent:!0,blending:gr,depthWrite:!1}));P.scale.set(.9,.9,1),P.position.copy(E.position),n.add(P),e.bulbs.push(P)}let m=new Dt;m.position.set(0,1.2,0),n.add(m);for(let b of[-1,1]){let I=new gl(16773583,1.1,0,.36,.55,0);I.position.set(b*3.6,7.2,3.2),I.target=m,b<0&&(I.castShadow=!0,I.shadow.mapSize.set(1024,1024),I.shadow.bias=-4e-4),n.add(I);let E=8.2,P=new je(new qt(1.5,E,32,1,!0),new Jt({color:16773583,transparent:!0,opacity:.075,blending:gr,depthWrite:!1,side:Ft}));P.geometry.translate(0,-E/2,0),P.position.copy(I.position),P.lookAt(m.position),P.rotateX(-Math.PI/2),n.add(P),e.beams.push(P)}let w=new je(new wr(1.7,40),new Jt({map:p,transparent:!0,opacity:.55,blending:gr,depthWrite:!1}));w.rotation.x=-Math.PI/2,w.position.set(0,.012,.1),n.add(w);let _=new vn({color:1313326,roughness:1});for(let b=0;b<11;b++){let I=new Qe,E=.85+Math.random()*.35,P=new je(new Si(.42,.5,4,12),_);P.position.y=.2,I.add(P);let U=new je(new ot(.34,16,12),_);U.position.y=1,I.add(U),I.scale.setScalar(E),I.position.set(-5.5+b*1.1+(Math.random()-.5)*.3,-1+b%2*.12,4.4+b%2*.35),I.userData.base=I.position.y,I.userData.ph=Math.random()*6,n.add(I),e.crowd.push(I)}return e.cheerUntil=0,e.update=(b,I)=>{for(let P of e.hangs)P.rotation.z=Math.sin(b*1.1+P.userData.ph)*.08;e.beams.forEach((P,U)=>{P.material.opacity=.065+Math.sin(b*1.3+U)*.015}),e.bulbs.forEach((P,U)=>{P.material.opacity=.75+Math.sin(b*3+U*1.7)*.25});let E=I<e.cheerUntil;for(let P of e.crowd){let U=E?Math.abs(Math.sin(b*9+P.userData.ph))*.35:Math.sin(b*1.4+P.userData.ph)*.02;P.position.y=P.userData.base+U}},e}var An=Math.PI/180,lm=1/112,IM=1906248,Er;function LM(){return Er||(Er=new al(new Uint8Array([140,205,240]),3,1,_l),Er.minFilter=Er.magFilter=on,Er.needsUpdate=!0),Er}var Ls=(n,e={})=>new dl({color:n,gradientMap:LM(),...e}),mm=n=>new On({uniforms:{t:{value:n},color:{value:new Je(IM)}},vertexShader:"uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }",side:ln}),Bu=mm(.026),gm=mm(.016),cm=new Set([Bu,gm]);function ue(n,e,{outline:t=!0,thin:i=!1,mat:s}={}){let r=new Qe,a=new je(n,s||Ls(e));return a.castShadow=!0,r.add(a),t&&r.add(new je(n,i?gm:Bu)),r.userData.mesh=a,r}var xe=(n,e,t,i)=>(n.position.set(e,t,i),n),Mt=(n,e,t,i)=>(n.rotation.set(e,t,i),n),wt=(n,e,t,i)=>(n.scale.set(e,t,i),n),Sl=(n,e=32,t=0,i=Math.PI*2)=>{let s=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new Ea(s.map(([r,a])=>new ge(r,a)),e,t,i)},Uu=new Map;function kM(n,e){if(Uu.has(n))return Uu.get(n);let t=document.createElement("canvas");t.width=t.height=512;let i=new ii(t);i.colorSpace=$t;let s=new Image;return s.onload=()=>{t.getContext("2d").drawImage(s,0,0,512,512),i.needsUpdate=!0},s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${e}</svg>`),Uu.set(n,i),i}var Nu=new Map;function hm(n){if(Nu.has(n))return Nu.get(n);let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(n,64,72);let i=new ii(e);return i.colorSpace=$t,Nu.set(n,i),i}var Xe=.62,zu=1,Ut={lon:.34,lat:.06,r:.155},um=n=>50+n/zu*50,dm=n=>50-n/zu*50;function DM(n,{eyes3D:e=!0,wink:t=!1,extras:i=[]}={}){let s=um(-Ut.lon),r=um(Ut.lon),a=dm(Ut.lat),o='fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"',l="";if((i.includes("blush")||["happy","love","cheeky"].includes(n))&&(l+=`<ellipse cx="${s-4}" cy="${a+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${r+4}" cy="${a+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`),i.includes("freckles"))for(let[_,b]of[[-6,12],[-2,15],[-9,15],[6,12],[2,15],[9,15]])l+=`<circle cx="${(_<0?s:r)+_}" cy="${a+b}" r=".9" fill="#b0643a"/>`;let h=_=>`<path d="M${_-8} ${a+3} Q${_} ${a-8} ${_+8} ${a+3}" ${o} stroke-width="3.6"/>`,d=_=>`<path d="M${_-8} ${a} Q${_} ${a+6} ${_+8} ${a}" ${o} stroke-width="3.4"/>`,u=_=>`<path d="M${_} ${a+7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;e?t&&(l+=h(s)):n==="love"?l+=u(s)+u(r):n==="sleepy"?l+=d(s)+d(r):l+=h(s)+h(r);let f=a-17,g=_=>`<path d="${_}" ${o} stroke-width="3.2"/>`,x={angry:`M${s-9} ${f+1} L${s+7} ${f+7} M${r+9} ${f+1} L${r-7} ${f+7}`,sad:`M${s-8} ${f+6} L${s+7} ${f} M${r+8} ${f+6} L${r-7} ${f}`,scared:`M${s-8} ${f+2} Q${s} ${f-5} ${s+7} ${f-1} M${r+8} ${f+2} Q${r} ${f-5} ${r-7} ${f-1}`,surprised:`M${s-8} ${f-2} Q${s} ${f-8} ${s+8} ${f-2} M${r-8} ${f-2} Q${r} ${f-8} ${r+8} ${f-2}`,cheeky:`M${s-8} ${f+2} Q${s} ${f-2} ${s+8} ${f+3} M${r-8} ${f-3} Q${r} ${f-8} ${r+8} ${f-2}`,neutral:`M${s-7} ${f+1} Q${s} ${f-3} ${s+7} ${f+2} M${r-7} ${f-1} Q${r} ${f-5} ${r+7} ${f}`};l+=g(x[n]||x.neutral);let p=dm(-.36),m=_=>`<rect x="45.6" y="${_}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${_}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`,w={neutral:`<path d="M41 ${p-2} Q50 ${p+4} 59 ${p-3}" ${o} stroke-width="2.8"/>${m(p)}`,happy:`<path d="M37 ${p-4} Q50 ${p+16} 63 ${p-4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${m(p-3.6)}<path d="M44 ${p+6} Q50 ${p+2} 56 ${p+6} Q50 ${p+10} 44 ${p+6}Z" fill="#ff7b93"/>`,sad:`<path d="M41 ${p+4} Q50 ${p-4} 59 ${p+4}" ${o} stroke-width="2.8"/><path d="M${s-3} ${a+9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,angry:`<path d="M40 ${p-2} H60 Q61 ${p+7} 50 ${p+7} Q39 ${p+7} 40 ${p-2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${p+2.5} H59.5 M45 ${p-2} v9 M50 ${p-2} v9 M55 ${p-2} v9" stroke="#1d1648" stroke-width="1.2"/>`,surprised:`<ellipse cx="50" cy="${p+2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,scared:`<path d="M38 ${p+2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${o} stroke-width="2.4"/><path d="M${r+12} ${a-10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,sleepy:`<ellipse cx="51" cy="${p+1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${p+2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${a-16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${a-24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,cheeky:`<path d="M40 ${p-2} Q50 ${p+7} 60 ${p-3}" ${o} stroke-width="2.8"/><path d="M50 ${p+2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,love:`<path d="M40 ${p-3} Q50 ${p+9} 60 ${p-3}" ${o} stroke-width="2.8"/>`};return l+=w[n]||w.neutral,i.includes("fangs")&&(l+=`<path d="M44 ${p+1} l1.6 4 l1.6 -4 M53 ${p+1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`),l}var fm=(n,e)=>new ot(n,40,28,Math.PI/2-e,e*2,Math.PI/2-e,e*2),Ou=(n,e,t=Xe)=>new B(t*Math.sin(n)*Math.cos(e),t*Math.sin(e),t*Math.cos(n)*Math.cos(e)),UM={point:[-75,0],mouth:[-30,-100],cross:[-45,-60],head:[-15,-40],hip:[10,0]},NM={point:[20,0],mouth:[10,25],cross:[16,-70],wave:[128,22]},pm=.8,OM={sit:{y:.6,legs:[[-88,88,6],[-88,88,6]]},squat:{y:.46,legs:[[-115,135,26],[-115,135,26]]},kneel:{y:.5,legs:[[0,95,4],[0,95,4]]},crossleg:{y:.34,legs:[[-80,0,52,-125],[-80,0,52,-125]]},lie:{x:.45,y:.5},crawl:{x:0,y:.54},handstand:{y:2.12}},FM={front:0,l45:-Math.PI/4,r45:Math.PI/4,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},Fu=class extends xn{constructor(e,t,i){super(),this.c=e,this.a=t,this.b=i}getPoint(e,t=new B){return this.c.getPoint(this.a+(this.b-this.a)*e,t)}};function Tl(n,e={}){let t;try{t=new il({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(y){return console.warn("[puppet3d] WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng, d\xF9ng b\u1EA3n 2D",y),Lf(n)}n.innerHTML="";let i=t.domElement;i.className="pp pp3d",i.setAttribute("role","img"),i.setAttribute("aria-label","Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u"),n.appendChild(i),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=$t;let s=new sl,r=new an(30,1,.1,100),a=e.stage?{y:2,z:8.8,ly:1.5,fov:34}:{y:1.75,z:7.4,ly:1.38,fov:30};r.fov=a.fov,r.position.set(0,a.y,a.z),r.lookAt(0,a.ly,0),s.add(new pl(16777215,14271231,e.stage?.6:1.3)),s.add(new xl(16777215,e.stage?.15:.5));let o=new yl(16777215,e.stage?.8:1.9);o.position.set(3,6,6),s.add(o);let l=e.stage?om(s):null;l&&(t.shadowMap.enabled=!0,t.shadowMap.type=Mu);let c=new je(new wr(.8,32),new Jt({color:1906248,transparent:!0,opacity:l?.12:.18,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.01,s.add(c);let h=new Qe;h.add(xe(ue(new yt(.5,.5,.13,28),16747039),0,.42,0));for(let[y,T]of[[-.32,-.22],[.32,-.22],[-.32,.22],[.32,.22]])h.add(xe(ue(new yt(.05,.05,.42,8),1906248,{outline:!1}),y,.21,T));h.position.z=-.2,s.add(h);let d=new Qe;s.add(d);let u=new Qe;u.rotation.order="YXZ",d.add(u);let f=new Qe;u.add(f);let g=new Qe;g.rotation.order="YXZ",g.position.y=.12,f.add(g);let x=new Qe;f.add(x);let p=new Qe;g.add(p);let m=new Qe;m.position.set(0,.62,-.28),g.add(m);let w=new Qe;w.rotation.order="YXZ",w.position.y=.66,g.add(w);let _=new Qe;_.rotation.order="YXZ",w.add(_);let b=new Qe;b.position.y=Xe*.9,_.add(b);let I=ue(new ot(Xe,48,36),16777215);wt(I,1.06,.95,1),b.add(I);let E=new Qe;E.scale.set(1.06,.95,1),b.add(E);let P=new Qe;b.add(P);for(let y of[-1,1]){let T=ue(new ot(.13,16,12),16777215);wt(T,.55,.9,.7),P.add(xe(T,y*Xe*1.03,-.04,0))}let U=ue(new ot(.085,18,14),16777215,{thin:!0});wt(U,1.1,.9,.9);let K=Ou(0,-.14,Xe*.99);E.add(xe(U,K.x,K.y,K.z));let v=new Jt({transparent:!0,depthWrite:!1}),S=new je(fm(Xe+.006,zu),v);S.renderOrder=1,E.add(S);let $=new Jt({transparent:!0,depthWrite:!1}),z=new je(fm(Xe+.035,1.12),$);z.visible=!1,z.renderOrder=2,E.add(z);let L=[];for(let y of[-1,1]){let T=Ou(y*Ut.lon,Ut.lat,Xe*.93),N=new Qe;N.position.copy(T),N.lookAt(T.clone().multiplyScalar(3)),E.add(N);let R=new Qe;R.scale.set(1,1.08,.62),N.add(R);let A=ue(new ot(Ut.r,28,20),16777215,{thin:!0});R.add(A);let k=new je(new ot(Ut.r*.44,18,14),new Jt({color:1906248}));k.scale.z=.5,R.add(k);let Z=new je(new ot(Ut.r*.13,10,8),new Jt({color:16777215}));R.add(Z);let q=new Qe;R.add(q);let re=ue(new ot(Ut.r*1.08,28,14,0,Math.PI*2,0,Math.PI/2),16777215,{thin:!0});q.add(re),L.push({g:N,inner:R,white:A,pupil:k,shine:Z,lidPivot:q,lid:re,sx:y,px:0,py:0,wx:0,wy:0})}let O=new Qe;E.add(O);let F=new Qe;b.add(F);let X=new As(new Ki({transparent:!0,depthTest:!1,depthWrite:!1}));X.scale.set(.5,.5,1),X.position.set(.66,Xe+.5,.3),X.visible=!1,b.add(X);let W=Sl([[0,.72],[.18,.71],[.3,.64],[.38,.5],[.43,.3],[.455,.12],[.46,-.02]],36),me=ue(W,16777215);g.add(me);let fe=Sl([[.462,.14],[.47,0],[.45,-.12],[.38,-.2],[.22,-.25],[0,-.26]],36),G=ue(fe,16777215);f.add(G);let te=ue(new yt(.13,.15,.16,16),16777215,{thin:!0});xe(te,0,.72,0),g.add(te);let pe={},Q=.32,oe=.3,Ue=.3,_e=.28;for(let y of["L","R"]){let T=y==="L"?-1:1,N=new Qe;N.rotation.order="ZXY",N.position.set(T*.36,.5,0),g.add(N);let R=new Qe;R.rotation.order="ZXY",R.position.y=-Q,N.add(R);let A=new Qe;A.position.y=-oe,R.add(A);let k=new Qe;k.position.y=-.1,A.add(k);let Z=ue(new ot(.135,20,16),16777215,{thin:!0});wt(Z,1,1.1,.85),k.add(Z);let q=ue(new Si(.045,.08,4,10),16777215,{thin:!0});xe(q,-T*.12,.04,.03),q.rotation.z=-T*.8,k.add(q);let re=ue(new xt(.1,.035,8,18),16777215,{thin:!0});re.rotation.x=Math.PI/2,re.position.y=.08,k.add(re);let Ie=new As(new Ki({transparent:!0,depthWrite:!1}));Ie.scale.set(.56,.56,1),Ie.position.set(0,-.12,.2),Ie.visible=!1,k.add(Ie),pe["arm"+y]=N,pe["fore"+y]=R,pe["wrist"+y]=A,pe["prop"+y]=Ie,pe["hand"+y]={palm:Z,thumb:q,cuff:re}}for(let y of["L","R"]){let T=y==="L"?-1:1,N=new Qe;N.rotation.order="ZXY",N.position.set(T*.2,-.08,0),f.add(N);let R=new Qe;R.rotation.order="ZXY",R.position.y=-Ue,N.add(R);let A=new Qe;A.position.y=-_e,R.add(A);let k=ue(new ot(.2,22,16),16777215);wt(k,.95,.62,1.35),xe(k,T*.02,-.08,.08),A.add(k);let Z=ue(new yt(.17,.19,.05,20),16777215,{thin:!0});wt(Z,1,1,1.4),xe(Z,T*.02,-.18,.09),A.add(Z),pe["leg"+y]=N,pe["shin"+y]=R,pe["ankle"+y]=A,pe["shoe"+y]=k,pe["sole"+y]=Z}let We=new Qe;We.position.set(0,.02,-.4),f.add(We);let He={},Fe=(y,T)=>{let N=Ls(16777215),R=new je(new Rs(new Es(new B,new B(0,-.1,0),new B(0,-.2,0)),4,T,8),N);R.castShadow=!0;let A=new je(R.geometry,Bu);d.add(R,A),He[y]={m:R,o:A,r:T,mat:N,len:1}};for(let y of["L","R"])Fe("arm"+y,.082),Fe("sleeve"+y,.118),Fe("leg"+y,.105),Fe("pant"+y,.14);let Ce=to.tron,se={skin:"tron",head:""},D="",ye=!1,ce=[],he=(y,T)=>y.userData.mesh.material.color.set(T);function we(y){let T={skin:to[y?.skin]?y.skin:"tron",head:y?.head||""},N=T.skin+"|"+T.head;if(N===D)return;D=N,se=T,Ce=to[se.skin];let R=Ce.extra||{};for(let A of[I,U,te,...P.children])he(A,Ce.skin);for(let A of L)he(A.lid,Ce.skin);he(me,R.aodai||Ce.top),he(G,R.dress||Ce.bottom);for(let A of["L","R"]){let k=Ce.gloves||Ce.skin;he(pe["hand"+A].palm,k),he(pe["hand"+A].thumb,k),he(pe["hand"+A].cuff,Ce.gloves?Ce.gloves:Ce.sleeve>=.95?R.coat||Ce.top:Ce.skin),pe["hand"+A].cuff.visible=!!Ce.gloves||Ce.sleeve>=.95,he(pe["shoe"+A],Ce.shoes),he(pe["sole"+A],"#ffffff"),He["arm"+A].mat.color.set(Ce.gloves&&Ce.sleeve>=.95?R.coat||Ce.top:Ce.arms||Ce.skin),He["sleeve"+A].mat.color.set(R.coat||R.aodai||Ce.top),He["sleeve"+A].len=Math.max(.12,Ce.sleeve??.3),He["leg"+A].mat.color.set(Ce.legs||Ce.skin),He["pant"+A].mat.color.set((R.aodai,Ce.bottom)),He["pant"+A].len=R.dress?.001:Math.max(.12,Ce.pants??1)}ie(),se.head?ze(se.head):z.visible=!1,J="",be()}function ze(y){let T=new Image;/^https?:/.test(y)&&(T.crossOrigin="anonymous"),T.onload=()=>{try{let N=document.createElement("canvas");N.width=N.height=256;let R=N.getContext("2d");R.beginPath(),R.arc(128,128,124,0,Math.PI*2),R.clip();let A=Math.min(T.width,T.height);R.drawImage(T,(T.width-A)/2,(T.height-A)/2,A,A,0,0,256,256);let k=new ii(N);k.colorSpace=$t,$.map?.dispose(),$.map=k,$.needsUpdate=!0,z.visible=!0,J="",be()}catch{z.visible=!1}},T.onerror=()=>{z.visible=!1},T.src=y}function Ee(y){for(;y.children.length;)y.children.pop().traverse(N=>{N.isMesh&&!cm.has(N.material)&&(N.geometry.dispose(),N.material.dispose())})}let C=(y,T,N={})=>ue(new ot(y,24,18),T,N);function M(y,T=1.15,N=-.3,R=1.07,A=2.1){let k=new Qe;return k.add(Mt(ue(new ot(Xe*R,36,20,0,Math.PI*2,0,T),y),N,0,0)),k.add(ue(new ot(Xe*(R-.012),36,20,Math.PI,Math.PI,0,A),y)),k}function Y(y,T){let N=new Qe,R=A=>(N.add(A),A);switch(y){case"ahoge":{R(M(T)),R(Mt(wt(xe(C(.3,T),.14,.43,.36),1.25,.42,.75),.4,0,-.35)),R(Mt(wt(xe(C(.3,T),-.32,.38,.28),.65,.45,.7),.3,0,.5));let A=ue(new xt(.15,.04,8,18,Math.PI*1.25),T,{thin:!0});xe(A,.05,Xe+.1,0),A.rotation.z=.5,A.name="ahoge",R(A);break}case"short":R(M(T,1.05,-.25)),R(Mt(wt(xe(C(.3,T),0,.45,.32),1.5,.35,.7),.45,0,0));break;case"spiky":{R(M(T,1.1,-.25));for(let A=0;A<7;A++){let k=(A/6-.5)*2.2,Z=ue(new qt(.12,.34,10),T,{thin:!0});xe(Z,Math.sin(k)*.42,.52+Math.cos(k)*.1,Math.cos(k)*.12-.05),Z.rotation.set(-.3,0,-k*.55),R(Z)}break}case"messy":{R(M(T,1,-.2));for(let[A,k,Z,q]of[[-.5,.25,0,.22],[.5,.25,0,.22],[-.3,.52,-.1,.24],[.3,.52,-.1,.24],[0,.62,0,.24],[-.55,-.05,-.15,.18],[.55,-.05,-.15,.18],[0,.4,-.45,.26]])R(xe(C(q,T),A,k,Z));break}case"slick":R(M(T,1.15,-.45)),R(Mt(wt(xe(C(.3,T),.05,.47,.25),1.55,.42,1),.2,0,.12));break;case"bob":case"long":case"wavy":case"pigtails":case"bun":{if(N.add(ue(new ot(Xe*1.1,36,20,Math.PI/2+.8,Math.PI*2-1.6,0,y==="long"||y==="wavy"?2.35:2),T)),R(Mt(wt(xe(C(.3,T),0,.42,.38),1.6,.42,.7),.4,0,0)),R(M(T,1,-.15,1.09)),y==="long"&&R(wt(xe(C(.42,T),0,-.45,-.32),1.25,1.2,.6)),y==="wavy")for(let A of[-1,1])for(let k=0;k<3;k++)R(xe(C(.17,T),A*(.58-k*.05),-.25-k*.2,-.05-k*.05));if(y==="pigtails")for(let A of[-1,1])R(xe(C(.24,T),A*.72,.2,-.12)),R(xe(C(.08,16727435,{thin:!0}),A*.6,.36,-.1));y==="bun"&&R(xe(C(.26,T),0,.42,-.5));break}case"mohawk":for(let A=0;A<5;A++){let k=ue(new qt(.11,.4,8),T,{thin:!0});xe(k,0,.6-Math.abs(A-2)*.05,.3-A*.2),k.rotation.x=-.3-A*.25,R(k)}break;default:break}return N}function ne(y,T){let N=new Qe,R=k=>(N.add(k),k),A=T.hatColor||"#ff3d4f";switch(y){case"nonla":R(xe(ue(new qt(1.05,.55,40,1,!0),15914122,{mat:Ls(15914122,{side:Ft})}),0,Xe*.86,0));break;case"ninja":{R(M(A,1.55,-.65,1.04,2.4)),R(ue(new ot(Xe*1.035,36,16,Math.PI/2-1.3,2.6,1.82,.85),A));let k=ue(new xt(Xe*1.05,.06,10,40),16727375,{thin:!0});k.rotation.x=Math.PI/2-.12,k.position.y=.26,R(k);for(let Z of[.2,-.15])R(Mt(xe(ue(new jt(.08,.05,.45),16727375,{thin:!0}),.2+Z,.2,-Xe-.14),.5,Z,.3));break}case"bubble":{R(new je(new ot(Xe*1.42,32,24),new Jt({color:12576511,transparent:!0,opacity:.18,depthWrite:!1})));let k=ue(new xt(.52,.09,10,30),14672885);k.rotation.x=Math.PI/2,k.position.y=-Xe*.92,R(k),R(xe(C(.06,16727375,{thin:!0}),.55,.7,0));break}case"helmet":{R(Mt(ue(new ot(Xe*1.13,36,18,0,Math.PI*2,0,1.35),A),-.2,0,0)),R(Mt(xe(ue(new yt(.03,.03,.5,6),1906248,{outline:!1}),0,-.48,.25),.5,0,Math.PI/2)),R(xe(wt(C(.06,16777215,{thin:!0}),1,1,.5),0,.7,.28));break}case"fullhelmet":{R(Mt(ue(new ot(Xe*1.15,36,20,0,Math.PI*2,0,1.55),A),-.35,0,0)),R(ue(new ot(Xe*1.14,36,20,Math.PI,Math.PI,0,2.3),A)),R(Mt(wt(xe(C(.3,1906248),0,.42,.42),1.4,.3,.6),.6,0,0));break}case"cap":case"capBack":{R(Mt(ue(new ot(Xe*1.1,36,18,0,Math.PI*2,0,1.2),A),-.15,0,0));let k=ue(new yt(.42,.42,.04,28,1,!1,-Math.PI/2,Math.PI),A);y==="cap"?xe(k,0,.32,.45):(xe(k,0,.32,-.45),k.rotation.y=Math.PI),k.rotation.x+=y==="cap"?.12:-.12,R(k),y==="cap"&&R(xe(wt(C(.08,16763197,{thin:!0}),1,1,.4),0,.55,.52));break}case"chef":{R(xe(ue(new yt(.5,.5,.36,28),16777215),0,.62,-.05));for(let[k,Z]of[[-.25,0],[.25,0],[0,.2],[0,-.2],[0,0]])R(xe(C(.3,16777215),k,.98,Z-.05));break}case"crown":{let k=ue(new yt(.38,.34,.22,10,1,!0),16763197,{mat:Ls(16763197,{side:Ft})});xe(k,0,.66,0),R(k);for(let Z=0;Z<5;Z++){let q=Z/5*Math.PI*2;R(xe(ue(new qt(.08,.2,8),16763197,{thin:!0}),Math.sin(q)*.34,.86,Math.cos(q)*.34))}R(xe(C(.06,16727375,{thin:!0}),0,.68,.38));break}case"tiara":{let k=ue(new xt(.4,.03,8,30,Math.PI),16769162,{thin:!0});xe(k,0,.5,.1),k.rotation.x=-.4,R(k),R(xe(ue(new qt(.08,.22,4),16769162,{thin:!0}),0,.72,.28)),R(xe(C(.05,16740277,{thin:!0}),0,.62,.36));break}case"tricorn":{R(Mt(ue(new ot(Xe*1.08,32,16,0,Math.PI*2,0,1.15),A),-.1,0,0));let k=new si;k.moveTo(-.95,0),k.quadraticCurveTo(-.7,.62,0,.7),k.quadraticCurveTo(.7,.62,.95,0),k.quadraticCurveTo(0,.18,-.95,0);let Z=ue(new Ji(k,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),A);xe(Z,0,.42,-.06),Z.rotation.x=-.12,R(Z),R(xe(wt(C(.1,16777215,{thin:!0}),1,1,.35),0,.82,.1));let q=ue(new xt(.06,.02,6,12),16763197,{outline:!1});xe(q,0,.82,.14),R(q);break}case"santa":{let k=ue(new qt(.58,1,28),15217738);xe(k,.12,.92,-.08),k.rotation.z=-.45,R(k);let Z=ue(new xt(.58,.12,12,30),16777215);Z.rotation.x=Math.PI/2-.1,Z.position.y=.48,R(Z),R(xe(C(.14,16777215),.62,1.22,-.08));break}case"fire":{R(Mt(ue(new ot(Xe*1.14,36,18,0,Math.PI*2,0,1.3),A),-.15,0,0));let k=ue(new yt(.85,.85,.05,32),A);k.position.set(0,.28,-.12),k.rotation.x=-.18,R(k),R(xe(wt(C(.13,16763197,{thin:!0}),1,1.2,.35),0,.62,.48));break}case"band":{let k=ue(new xt(Xe*1.05,.065,10,40),A,{thin:!0});k.rotation.x=Math.PI/2-.15,k.position.y=.3,R(k);break}case"mirror":{let k=ue(new xt(Xe*1.05,.04,8,40),1906248,{thin:!0});k.rotation.x=Math.PI/2-.2,k.position.y=.3,R(k);let Z=ue(new yt(.15,.15,.04,24),14674175);Z.rotation.x=Math.PI/2-.2,Z.position.set(0,.5,.52),R(Z);break}case"turban":{let k=ue(new xt(Xe*.95,.13,12,36),A);k.rotation.x=Math.PI/2-.1,k.position.y=.32,R(k),R(M(A,.9,-.1,1.04));break}case"veil":{let k=new je(new ot(Xe*1.2,32,18,Math.PI/2+.95,Math.PI*2-1.9,.3,2.5),new Jt({color:16777215,transparent:!0,opacity:.6,side:Ft,depthWrite:!1}));k.scale.set(1.05,1.15,1.1),k.position.y=-.12,R(k),R(xe(C(.08,16761564,{thin:!0}),-.35,.5,.25)),R(xe(C(.07,16777215,{thin:!0}),-.25,.56,.3));break}case"phones":{let k=ue(new xt(Xe*1.1,.05,8,30,Math.PI),A,{thin:!0});k.position.y=.05,R(k);for(let Z of[-1,1]){let q=ue(new yt(.2,.2,.14,22),A);q.rotation.z=Math.PI/2,q.position.set(Z*Xe*1.05,.02,0),R(q),R(xe(Mt(ue(new yt(.12,.12,.02,18),3729568,{outline:!1}),0,0,Math.PI/2),Z*Xe*1.13,.02,0))}break}case"scarfHead":{R(Mt(ue(new ot(Xe*1.1,36,18,0,Math.PI*2,0,1.3),A),-.45,0,0)),R(Mt(xe(ue(new qt(.12,.3,10),A,{thin:!0}),0,.15,-.68),-2.2,0,0));break}case"beanie":{R(Mt(ue(new ot(Xe*1.1,36,18,0,Math.PI*2,0,1.35),A),-.15,0,0));let k=ue(new xt(Xe*.98,.09,10,36),A);k.rotation.x=Math.PI/2-.15,k.position.y=.22,R(k),R(xe(C(.15,16777215),0,.82,-.05));break}case"hood":{let k=ue(new ot(Xe*1.16,40,24,Math.PI/2+.95,Math.PI*2-1.9,0,2.6),A);R(k),R(ue(new ot(Xe*1.16,40,20,0,Math.PI*2,0,.95),A));let Z=ue(new xt(Xe*.86,.07,10,36),A);Z.position.z=.42,Z.scale.set(1,1.1,1),R(Z);let q=T.hood;for(let re of[-1,1])q==="bear"&&(R(xe(C(.2,A),re*.5,.55,-.05)),R(xe(wt(C(.11,15913641,{outline:!1}),1,1,.4),re*.52,.56,.1))),q==="cat"&&R(Mt(xe(ue(new qt(.2,.36,4),A),re*.38,.7,0),0,0,-re*.4)),q==="dog"&&R(Mt(wt(xe(C(.2,11036974),re*.66,.1,0),.7,1.6,.5),0,0,re*.3)),q==="frog"&&(R(xe(C(.2,A),re*.3,.68,.1)),R(xe(C(.12,16777215,{thin:!0}),re*.3,.72,.24)),R(xe(C(.06,1906248,{outline:!1}),re*.3,.73,.34)));if(q==="dino")for(let re=0;re<5;re++){let Ie=ue(new qt(.11,.26,4),16763197,{thin:!0}),Be=.4-re*.45;xe(Ie,0,Math.cos(Be)*.72,Math.sin(Be)*.72),Ie.rotation.x=Be,R(Ie)}break}default:break}return N}function ae(y,T){let N=new Qe,R=k=>(N.add(k),k),A=(k,Z,q=Xe)=>Ou(k,Z,q);for(let k of y||[]){if(k==="glasses"){for(let Z of[-1,1]){let q=A(Z*Ut.lon,Ut.lat,Xe*1.12),re=ue(new xt(.19,.022,8,28),1906248,{outline:!1});xe(re,q.x,q.y,q.z),re.lookAt(q.clone().multiplyScalar(3)),R(re)}R(xe(ue(new yt(.018,.018,.2,6),1906248,{outline:!1}),0,Ut.lat*Xe*.95+.02,Xe*1.1)).rotation.z=Math.PI/2}if(k==="shades"){let Z=ue(new Ti(.98,.24,.1,3,.05),1314862),q=A(0,Ut.lat,Xe*1.06);xe(Z,0,q.y,q.z),R(Z),R(xe(wt(C(.05,16777215,{outline:!1}),1.8,.6,.3),-.3,q.y+.04,q.z+.06))}if(k==="mustache"||k==="curly"){let Z=T.hair==="#eeeef5"?"#eeeef5":"#2a1a14";for(let q of[-1,1]){let re=A(q*.12,-.24,Xe*1),Ie=wt(C(.1,Z,{thin:!0}),1.5,.6,.6);if(xe(Ie,re.x,re.y,re.z),Ie.rotation.z=q*.3,R(Ie),k==="curly"){let Be=ue(new xt(.06,.025,6,12,Math.PI*1.5),Z,{thin:!0});xe(Be,re.x+q*.14,re.y+.05,re.z-.02),Be.rotation.z=q>0?0:Math.PI,R(Be)}}}if(k==="beard"){let Z=T.beard||"#eeeef5",q=ue(new ot(Xe*.82,32,18,Math.PI/2-1.1,2.2,1.85,1.05),Z);q.position.set(0,-.06,.12),R(q),R(wt(xe(C(.26,Z),0,-.62,.32),1.2,.9,.7))}if(k==="patch"){let Z=A(Ut.lon,Ut.lat,Xe*1.06),q=ue(new yt(.17,.17,.04,20),1314862,{thin:!0});xe(q,Z.x,Z.y,Z.z),q.lookAt(Z.clone().multiplyScalar(3)),q.rotateX(Math.PI/2),R(q)}}return N}function ie(){Ee(O),Ee(p),Ee(m),Ee(x);let y=Ce,T=y.extra||{},N=!!se.head,R=y.hat==="hood";(!N||R)&&O.add(Y(y.hairStyle,y.hair)),y.hat&&O.add(ne(y.hat,y));let A=(y.face||[]).filter(q=>["glasses","shades","mustache","curly","beard","patch"].includes(q));N||O.add(ae(A,y)),ce=y.face||[],ye=A.includes("shades")||N,P.visible=!R&&!["helmet","fullhelmet","ninja","fire","phones","scarfHead","beanie"].includes(y.hat);let k=q=>(p.add(q),q),Z=q=>(x.add(q),q);if(T.dress&&(Z(xe(ue(Sl([[.44,.12],[.5,-.05],[.62,-.3],[.7,-.45],[0,-.45]],36),T.dress),0,0,0)),Z(xe(ue(new xt(.68,.035,8,40),T.dress,{thin:!0}),0,-.45,0)).rotation.x=Math.PI/2),T.aodai){for(let q of[1,-1]){let re=ue(new Ti(.5,.62,.04,3,.02),T.aodai,{thin:!0});xe(re,0,-.36,q*.37),re.rotation.x=q*.28,k(re)}k(xe(ue(new yt(.15,.16,.12,18),T.aodai,{thin:!0}),0,.72,0))}if(T.coat){let q=ue(Sl([[.34,.66],[.44,.5],[.49,.28],[.51,.05],[.54,-.2],[.57,-.45]],36,Math.PI/2+.42,Math.PI*2-.84),T.coat,{outline:!1,mat:Ls(T.coat,{side:Ft})});k(q);for(let re of[-1,1])k(Mt(xe(ue(new jt(.16,.3,.03),T.coat,{thin:!0}),re*.2,.52,.36),-.5,0,re*.5))}if(T.vest)for(let q of[-1,1])k(Mt(xe(ue(new jt(.2,.62,.05),T.vest,{thin:!0}),q*.27,.32,.4),.05,q*.4,0));if(T.apron){k(xe(ue(new Ti(.56,.78,.04,3,.02),T.apron),0,.12,.45)).rotation.x=-.1;let q=ue(new xt(.3,.02,6,24,Math.PI),T.apron,{thin:!0});q.position.set(0,.5,.28),q.rotation.x=-.6,k(q)}if(T.tie&&(k(Mt(xe(ue(new jt(.1,.36,.04),T.tie,{thin:!0}),0,.46,.38),-.2,0,0)),k(xe(ue(new qt(.07,.1,4),T.tie,{thin:!0}),0,.25,.43)).rotation.x=Math.PI),T.scarf){let q=ue(new xt(.2,.08,10,24),T.scarf);q.rotation.x=Math.PI/2,q.position.y=.68,k(q),k(Mt(xe(ue(new Ti(.13,.32,.05,2,.02),T.scarf,{thin:!0}),.12,.5,.3),-.35,0,.25))}if(T.collar){let q=ue(new yt(.45,.22,.4,24,1,!0,Math.PI*.75,Math.PI*1.5),T.collar,{mat:Ls(T.collar,{side:Ft})});q.position.set(0,.86,-.04),k(q)}if(T.pack&&k(xe(ue(new Ti(.56,.6,.28,3,.1),T.pack),0,.32,-.44)),T.box&&(k(xe(ue(new Ti(.82,.74,.5,3,.06),T.box),0,.42,-.62)),k(xe(ue(new jt(.4,.06,.02),16777215,{outline:!1}),0,.5,-.36))),T.belly&&k(wt(xe(C(.3,T.belly,{outline:!1}),0,.2,.33),1,1.15,.45)),T.chain){let q=ue(new xt(.24,.025,8,30),16763197,{thin:!0});q.position.set(0,.56,.18),q.rotation.x=Math.PI/2-.9,k(q),k(xe(C(.06,16763197,{thin:!0}),0,.37,.4))}if(T.star){let q=new si;for(let re=0;re<10;re++){let Ie=re/10*Math.PI*2-Math.PI/2,Be=re%2?.07:.16;q[re?"lineTo":"moveTo"](Math.cos(Ie)*Be,-Math.sin(Ie)*Be)}k(xe(ue(new Ji(q,{depth:.04,bevelEnabled:!1}),T.star,{thin:!0}),0,.36,.42))}if(T.badge&&(k(xe(ue(new yt(.07,.07,.03,16),16763197,{thin:!0}),.2,.42,.4)).rotation.x=Math.PI/2),T.whistle&&(k(xe(ue(new Si(.04,.08,4,8),14672885,{thin:!0}),-.16,.38,.42)).rotation.z=Math.PI/2),T.belt){let q=ue(new xt(.455,.045,8,40),T.belt,{thin:!0});q.rotation.x=Math.PI/2,q.position.y=0,k(q)}if(T.cape){let q=ue(new yt(.4,.7,1.3,24,6,!0,Math.PI*.6,Math.PI*.8),T.cape,{mat:Ls(T.cape,{side:Ft})});q.position.set(0,-.62,.22),m.add(q)}}let Oe=null,Se=null;function ke(y){if(y===Oe)return;Oe=y,Ee(F);let T=(N,R,A,k,Z=0,q=0)=>{N.position.set(R,A,k),N.rotation.set(q,0,Z),F.add(N)};for(let N of[-1,1]){if(y==="dog"&&T(wt(C(.2,13208402),.75,1.6,.45),N*.66,0,.05,N*.25),y==="cat"&&T(ue(new qt(.2,.36,4),13208402),N*.38,.66,0,-N*.45),y==="bunny"){let R=ue(new Si(.11,.5,6,12),16777215);T(R,N*.22,.95,-.05,-N*.18)}y==="mouse"&&T(ue(new yt(.26,.26,.06,24),12171721),N*.55,.5,-.05,0,Math.PI/2),y==="horns"&&T(ue(new qt(.09,.32,12),15921382),N*.36,.66,0,-N*.55),y==="antenna"&&(T(ue(new yt(.02,.02,.45,6),1906248,{outline:!1}),N*.26,.82,0,-N*.35),T(C(.09,16763197),N*.35,1.02,0))}}function ve(y){if(y!==Se){if(Se=y,Ee(We),y==="dog"){let T=new Si(.08,.3,6,12);T.translate(0,.2,0);let N=ue(T,13208402);N.rotation.x=-.7,We.add(N)}if(y==="cat"&&We.add(ue(new Rs(new Ta([new B(0,0,0),new B(0,.15,-.35),new B(0,.55,-.5),new B(.1,.8,-.35)]),24,.06,8),13208402)),y==="pig"){let T=ue(new xt(.1,.04,8,20,Math.PI*1.7),16753592);T.rotation.y=Math.PI/2,We.add(T)}if(y==="dino"){let T=ue(new qt(.28,1,16),3129201);T.rotation.x=-Math.PI/2-.5,T.position.set(0,-.15,-.35),We.add(T)}}}let J="",ee={},Ne={happy:!0,love:!0};function be(){let y=ee.face||"neutral",T=z.visible,N=!T&&!ye&&!Ne[y],R=y==="cheeky";for(let k of L)k.g.visible=N&&!(R&&k.sx<0);let A=`${y}|${N}|${T}|${ce.join(",")}|${ye}`;A!==J&&(J=A,v.map=kM(A,T?"":DM(y,{eyes3D:N||ye,wink:R,extras:ce})),v.needsUpdate=!0),S.visible=!T,U.visible=!T,T&&y!=="neutral"&&so[y]?(X.material.map=hm(so[y]),X.material.needsUpdate=!0,X.visible=!0):X.visible=!1}let Me=new Map;function Te(y,T,N=.16,R=.72){let A=Me.get(y);return A||(A={v:0,x:T},Me.set(y,A)),A.v=(A.v+(T-A.x)*N)*R,A.x+=A.v,A.x}let qe=y=>Me.get(y)?.v||0,Ze=null,H=null,Pe=0;function j(y){let T=JSON.stringify({...ee,fx:0})!==JSON.stringify({...y,fx:0});ee={...y},T&&(Pe=performance.now()),ke(y.ears||null),ve(y.tail||null);for(let N of["L","R"]){let R=y["prop"+N],A=pe["prop"+N];R&&io[R]?(A.material.map=hm(io[R]),A.material.needsUpdate=!0,A.visible=!0):A.visible=!1}y.fx&&y.fx.seq!==H&&(H=y.fx.seq,Date.now()-(y.fx.at||0)<4e3&&(Ze={name:y.fx.name,t0:performance.now()})),be()}function le(y){let T={x:0,y:0,r:0};if(!y)return T;let N=/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(y);N&&(T.x=+N[1],T.y=+N[2]);let R=/rotate\(([-\d.]+)deg\)/.exec(y);return R&&(T.r=+R[1]),T}let Le=new B,De=new B,st=new B,_t=new B,Xt=new B;function nt(y,T){return T.setFromMatrixPosition(y.matrixWorld),d.worldToLocal(T)}function Yt(y,T,N,R,A){Xt.copy(T).add(R).multiplyScalar(.5),_t.copy(N).multiplyScalar(2).sub(Xt),_t.lerp(N,.25);let k=new Es(T.clone(),_t.clone(),R.clone()),Z=He[y],q=new Rs(k,16,Z.r,10);Z.m.geometry.dispose(),Z.m.geometry=q,Z.o.geometry=q;let re=He[A];if(re.len<.01){re.m.visible=re.o.visible=!1;return}re.m.visible=re.o.visible=!0;let Ie=new Rs(new Fu(k,0,Math.min(1,re.len)),10,re.r,10);re.m.geometry.dispose(),re.m.geometry=Ie,re.o.geometry=Ie}let Qt=0,oi=0,Pr=!0,Bn=0,Ds=performance.now()+2200,Ir=0,Lr=0,Qi=0,kr=new ResizeObserver(()=>es());kr.observe(n);function es(){let y=n.getBoundingClientRect();if(!y.width||!y.height||y.width===Qt&&y.height===oi)return;Qt=y.width,oi=y.height,t.setSize(Qt,oi,!1),r.aspect=Qt/oi;let T=l?1.25:.75;r.position.z=Qt/oi<T?a.z/Math.max(.5,Qt/oi/T):a.z,r.updateProjectionMatrix()}function Dr(y){if(!Pr)return;if(!i.isConnected){Oa();return}Bn=requestAnimationFrame(Dr),es();let T=y/1e3,N=ra[ee.body]||ra.stand,R=le(N.t),A=ee.loop,k=(Ae,ut=0)=>Math.sin(T*Math.PI*2*Ae+ut),Z=OM[ee.body]||{},q=Z.x??R.x*lm,re=Z.y??pm-R.y*lm,Ie=-R.r*An,Be=0,Ve=0,it=ee.body==="crawl";it&&(Ie=0,Ve=68*An,Be=-1),ee.body==="lie"&&(Be=.25);let lt=0;!A&&!Ze&&(lt=Math.abs(k(.55))*.025),A==="walk"&&(lt=Math.abs(k(1.3))*.1,Ie+=k(1.3)*.08),A==="run"&&(lt=Math.abs(k(2.4))*.22,Ve+=.25),A==="butt"&&(q+=k(2.9)*.14,Ie+=k(2.9)*.16,Be+=k(2.9)*.2),A==="dance"&&(Ie+=k(1)*.2,q+=k(1)*.12,lt=Math.abs(k(2))*.12),A==="shiver"&&(q+=k(11)*.03),A==="row"&&(Ie+=k(.5)*.08),A==="flap"&&(lt=Math.abs(k(3))*.06);let ht=0,en=0,at=0,Ge=0;if(Ze){let Ae=(y-Ze.t0)/1e3;if(Ze.name==="jump")if(Ae<.95){let ut=Math.min(1,Math.max(0,(Ae-.12)/.7));ht=Math.sin(ut*Math.PI)*1.2,Ge=Ae<.12?-.18*Math.sin(Ae/.12*Math.PI):ut>=1?-.15*Math.sin((Ae-.82)/.13*Math.PI):.1*Math.sin(ut*Math.PI)}else Ze=null;else if(Ze.name==="spin")Ae<.9?(en=(1-Math.pow(1-Ae/.9,3))*Math.PI*2,ht=Math.sin(Ae/.9*Math.PI)*.3):Ze=null;else if(Ze.name==="fall")Ae<1.8?at=Math.min(1,Ae/.35)*(Ae>1.4?(1.8-Ae)/.4:1)*1.45:Ze=null;else if(Ze.name==="bounce")if(Ae<1.1){let ut=Ae*Math.PI*3.6;ht=Math.abs(Math.sin(ut))*.32*(1-Ae/1.1),Ge=(Math.abs(Math.sin(ut))<.3?-.14:.06)*(1-Ae/1.1)}else Ze=null}d.rotation.y=Te("turn",FM[ee.turn]??0,.12,.74);let Nt=Te("hy",re+lt,.18,.7);u.position.set(Te("hx",q),Nt+ht,0),u.rotation.set(Te("hrx",Ve),Te("hry",Be)+en,Te("hrz",Ie)+at),at&&(u.position.x+=Math.sin(at)*.75);let ct=Pe?Math.exp(-(y-Pe)/160)*Math.sin((y-Pe)/45)*.07:0,Mn=Math.max(-.2,Math.min(.2,qe("hy")*1.6+Ge+ct)),Jn=Te("sq",Mn,.3,.6);f.scale.set(1-Jn*.6,1+Jn,1-Jn*.6);let tn=0,ts=0;tn=-le(N.torso).r*An,ee.body==="bow"&&(ts=.85),A==="run"&&(ts+=.15);let En=A?1:1+k(.4)*.02;g.rotation.set(Te("trx",ts,.12,.74),0,Te("trz",tn,.12,.74)),g.scale.set(1/En,En,1/En),h.visible=!!N.stool,m.rotation.x=Te("cape",.15+Math.min(.9,Math.abs(qe("hx"))*6+(A==="run"?.8:0)+(ht?.5:0))+k(.7)*.05,.1,.8);let Ri=-((yc[ee.head]??0)+(it?0:N.head||0))*An,Vt=it?-1:0,ns=0;ee.head==="up"&&(Vt=-.38),(ee.head==="down"||N.headDown&&(!ee.head||ee.head==="center"))&&(Vt=.38),ee.body==="bow"&&(Vt-=.3),A||(Ri+=k(.3)*.07,ns+=k(.17)*.12),A==="nod"&&(Vt+=k(2.5)*.3),A==="shake"&&(ns+=k(2.2)*.6),A==="dance"&&(Ri+=k(2)*.18),A==="walk"&&(Ri+=k(1.3)*.06),w.rotation.set(Te("nx",Vt,.14,.72),Te("ny",ns,.14,.72),Te("nz",Ri,.14,.72)),_.rotation.set(Te("jx",-qe("hy")*2.2+qe("trx")*2,.22,.62),0,Te("jz",qe("hx")*2.5-qe("hrz")*1.6,.22,.62));for(let Ae of["L","R"]){let ut=Ae==="L"?1:-1,Lt=ee["arm"+Ae]||"down",zn=Ae==="L"?0:1,Rt,Gt,Pt=0,Ot=0;if(it&&Lt==="down")Rt=6*ut,Gt=0,Pt=-68;else if(N.absArms&&Lt==="down")Rt=N.absArms[zn][0],Gt=N.absArms[zn][1];else{let is=NM[Lt]||ia[Lt]||ia.down;Rt=is[0]*ut,Gt=is[1]*ut;let Hn=UM[Lt];Hn&&(Pt=Hn[0],Ot=Hn[1])}Lt==="down"&&!A&&!it&&(Rt+=6*ut+k(.55,zn)*3*ut);let pn=Ae==="L"?0:Math.PI;if(A==="walk"&&(Pt+=k(1.3,pn)*32),A==="run"&&(Pt+=k(2.4,pn)*60,Ot-=70),A==="dance"&&(Rt+=(k(2,pn)*30+30)*ut,Ot-=30),A==="flap"&&(Rt+=(.5+.5*k(3))*75*ut,Gt-=k(3)*20*ut),A==="swim"&&(Pt+=(T*360*.9+(Ae==="L"?0:180))%360*-1),A==="clap"&&(Pt+=-72,Rt+=(Ae==="L"?-1:1)*(14+k(3.5)*14),Ot-=20),A==="punch"){let is=Math.max(0,k(2,pn));Pt+=-88*is,Ot+=-80*(1-is)}A==="row"&&(Pt+=k(1)*40-30,Ot-=40),A==="shiver"&&(Rt+=k(9,pn)*4),Lt==="wave"&&(Gt+=k(2.8)*32*ut),pe["arm"+Ae].rotation.set(Te("ux"+Ae,Pt*An,.15,.7),0,Te("uz"+Ae,-Rt*An,.15,.7)),pe["fore"+Ae].rotation.set(Te("fx"+Ae,Ot*An,.11,.72),0,Te("fz"+Ae,-Gt*An,.11,.72))}for(let Ae of["L","R"]){let ut=Ae==="L"?1:-1,Lt=ee["leg"+Ae]||"down",zn=Ae==="L"?0:1,Rt,Gt,Pt=0,Ot=0;if(it&&Lt==="down")Pt=-66,Ot=95,Rt=6*ut,Gt=0;else if(Z.legs&&Lt==="down"){let Hn=Z.legs[zn];Pt=Hn[0],Ot=Hn[1],Rt=(Hn[2]||0)*ut,Gt=(Hn[3]||0)*ut}else if(N.absLegs&&Lt==="down")Rt=N.absLegs[zn][0],Gt=N.absLegs[zn][1];else{let Hn=N.legs?N.legs[zn]:sa[Lt]||sa.down;Rt=Hn[0]*ut,Gt=Hn[1]*ut}Lt==="kick"&&(Pt=-65,Rt*=.5),Lt==="knee"&&(Pt=-70,Ot=100,Rt=8*ut,Gt=0);let pn=Ae==="L"?Math.PI:0;A==="walk"&&(Pt+=k(1.3,pn)*32,Ot+=Math.max(0,k(1.3,pn+1.2))*40),A==="run"&&(Pt+=k(2.4,pn)*58,Ot+=Math.max(0,k(2.4,pn+1.2))*90),A==="dance"&&(Ot+=Math.max(0,k(2,pn))*40,Pt-=Math.max(0,k(2,pn))*25),A==="butt"&&(Ot+=20),pe["leg"+Ae].rotation.set(Te("lx"+Ae,Pt*An,.15,.7),0,Te("lz"+Ae,-Rt*An,.15,.7)),pe["shin"+Ae].rotation.set(Te("kx"+Ae,Ot*An,.12,.72),0,Te("kz"+Ae,-Gt*An,.12,.72));let is=ee.body==="crawl"||ee.body==="lie"||ee.body==="handstand"?0:-(Pt+Ot)*An*.6;pe["ankle"+Ae].rotation.x=Te("ax"+Ae,is,.15,.7)}d.updateMatrixWorld(!0);for(let Ae of["L","R"])Yt("arm"+Ae,nt(pe["arm"+Ae],Le),nt(pe["fore"+Ae],De),nt(pe["wrist"+Ae],st),"sleeve"+Ae),Yt("leg"+Ae,nt(pe["leg"+Ae],Le),nt(pe["shin"+Ae],De),nt(pe["ankle"+Ae],st),"pant"+Ae);We.rotation.set(it?-.4:0,k(2.2)*.5,0);let Cn=ee.face||"neutral";y>Ir&&(Ir=y+700+Math.random()*1800,Lr=(Math.random()-.5)*.9,Qi=(Math.random()-.5)*.6);let Fa={neutral:.42,angry:.52,sad:.4,surprised:.05,scared:.08,sleepy:.72,cheeky:.38}[Cn]??.4,Ku={surprised:.75,scared:.55,angry:.9}[Cn]??1,Vm={surprised:1.18,scared:1.12}[Cn]??1,Gm=Ll(y);for(let Ae of L){if(!Ae.g.visible)continue;let ut=Lr*.5+(Ae.sx<0?.18:-.08),Lt=Qi*.4+(Ae.sx<0?-.05:.12);Cn==="sad"&&(Lt=-.45),Cn==="scared"&&(ut=Math.sin(y/37+Ae.sx)*.2,Lt=.1),Cn==="angry"&&(ut=-Ae.sx*.25,Lt=0),Cn==="surprised"&&(ut*=.3,Lt=.05),Ae.px=Te("px"+Ae.sx,ut,.12,.6)+qe("nz")*4*Ae.sx,Ae.py=Te("py"+Ae.sx,Lt,.12,.6)-qe("hy")*3;let zn=Ut.r*.5,Rt=Math.max(-1,Math.min(1,Ae.px))*zn,Gt=Math.max(-1,Math.min(1,Ae.py))*zn;Ae.pupil.position.set(Rt,Gt,Math.sqrt(Math.max(0,Ut.r*Ut.r-Rt*Rt-Gt*Gt))*.98),Ae.pupil.scale.set(Ku,Ku,.5),Ae.shine.position.set(Rt+Ut.r*.12,Gt+Ut.r*.14,Ae.pupil.position.z+.012);let Pt=Te("es"+Ae.sx,Vm,.2,.6);Ae.inner.scale.set(Pt,Pt*1.08,.62);let Ot=Math.max(Fa,Gm),pn=Cn==="angry"?-Ae.sx*.45:Cn==="sad"?Ae.sx*.35:Cn==="neutral"?Ae.sx*.08:0;Ae.lidPivot.rotation.set(-Math.PI/2+Ot*Math.PI*.95,0,Te("lt"+Ae.sx,pn,.2,.6))}let Ju=O.getObjectByName("ahoge");Ju&&(Ju.rotation.x=Te("ah",k(.8)*.2-qe("hy")*6,.1,.8)),c.position.x=u.position.x*.8,c.scale.setScalar(Math.max(.45,1-(ht+u.position.y-pm>0?ht*.35:0))),l?.update(T,y),t.render(s,r)}let Ci=0;function Ll(y){if(!Ci&&y>Ds&&(Ci=y,Ds=y+2200+Math.random()*2600),Ci){let T=(y-Ci)/150;return T>=1?(Ci=0,0):Math.sin(T*Math.PI)}return 0}Bn=requestAnimationFrame(Dr);let kl=()=>{l&&(l.cheerUntil=performance.now()+1600)};function Oa(){Pr=!1,cancelAnimationFrame(Bn),kr.disconnect(),s.traverse(y=>{y.isMesh&&!cm.has(y.material)&&(y.geometry?.dispose(),y.material?.dispose())}),t.dispose(),t.forceContextLoss?.()}return we({skin:"tron"}),j({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down"}),{setPose:j,setLook:we,el:i,dispose:Oa,cheer:kl,is3D:!0}}var ym="dienta-keys-v1",xm="dienta-combos-v1",Ht=n=>"Digit"+n,Ye=n=>"Key"+n,rt=n=>"Shift+"+n,vm={"body:stand":Ht(1),"body:sit":Ht(2),"body:squat":Ht(3),"body:kneel":Ht(4),"body:lie":Ht(5),"body:leanL":Ht(6),"body:leanR":Ht(7),"body:handstand":Ht(8),"body:crawl":Ht(9),"body:bow":"Minus","body:crossleg":"Equal","head:center":Ht(0),"head:tiltL":"ArrowLeft","head:tiltR":"ArrowRight","head:up":"ArrowUp","head:down":"ArrowDown","face:neutral":rt(Ht(1)),"face:happy":rt(Ht(2)),"face:sad":rt(Ht(3)),"face:angry":rt(Ht(4)),"face:surprised":rt(Ht(5)),"face:scared":rt(Ht(6)),"face:sleepy":rt(Ht(7)),"face:cheeky":rt(Ht(8)),"face:love":rt(Ht(9)),"armL:up":Ye("Q"),"armL:diag":Ye("W"),"armL:side":Ye("A"),"armL:hip":Ye("S"),"armL:down":Ye("Z"),"armL:wave":Ye("X"),"armL:flex":rt(Ye("Q")),"armL:head":rt(Ye("W")),"armL:mouth":rt(Ye("A")),"armL:cross":rt(Ye("S")),"armL:point":rt(Ye("Z")),"armR:up":Ye("P"),"armR:diag":Ye("O"),"armR:side":Ye("L"),"armR:hip":Ye("K"),"armR:down":Ye("M"),"armR:wave":Ye("N"),"armR:flex":rt(Ye("P")),"armR:head":rt(Ye("O")),"armR:mouth":rt(Ye("L")),"armR:cross":rt(Ye("K")),"armR:point":rt(Ye("M")),"legL:kick":Ye("R"),"legL:knee":Ye("F"),"legL:spread":Ye("G"),"legL:step":Ye("T"),"legL:down":Ye("V"),"legR:kick":Ye("U"),"legR:knee":Ye("J"),"legR:spread":Ye("H"),"legR:step":Ye("Y"),"legR:down":Ye("B"),"loop:walk":Ye("E"),"loop:run":Ye("D"),"loop:dance":Ye("C"),"loop:butt":Ye("I"),"loop:flap":rt(Ye("E")),"loop:swim":rt(Ye("D")),"loop:shiver":rt(Ye("C")),"loop:clap":rt(Ye("I")),"loop:punch":rt(Ye("R")),"loop:row":rt(Ye("F")),"loop:nod":rt(Ye("G")),"loop:shake":rt(Ye("H")),"fx:jump":"BracketLeft","fx:spin":"BracketRight","fx:fall":"Semicolon","fx:bounce":"Quote","cycle:propL":"Comma","cycle:propR":"Period","clear:propL":rt("Comma"),"clear:propR":rt("Period"),"cycle:ears":"Backquote","cycle:tail":"Backslash","clear:ears":rt("Backquote"),"clear:tail":rt("Backslash"),"turn:front":rt("ArrowUp"),"turn:back":rt("ArrowDown"),"turn:left":rt("ArrowLeft"),"turn:right":rt("ArrowRight"),"turn:l45":"Alt+ArrowLeft","turn:r45":"Alt+ArrowRight",reset:"Backspace",help:rt("Slash")},Ai=n=>({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down",propL:null,propR:null,ears:null,tail:null,turn:"front",loop:null,...n}),_m=[{id:"c-hello",name:"\u{1F44B} Ch\xE0o h\u1ECFi",pose:Ai({armR:"wave",face:"happy",head:"tiltR"}),key:"Alt+Digit1"},{id:"c-sleep",name:"\u{1F634} \u0110i ng\u1EE7",pose:Ai({body:"lie",face:"sleepy"}),key:"Alt+Digit2"},{id:"c-eat",name:"\u{1F35C} \u0102n m\xEC",pose:Ai({body:"sit",armR:"mouth",propR:"chopsticks",armL:"cross",propL:"bowl",face:"happy",loop:"nod"}),key:"Alt+Digit3"},{id:"c-phone",name:"\u{1F4F1} G\u1ECDi \u0111i\u1EC7n",pose:Ai({armR:"head",propR:"phone",armL:"hip",face:"surprised",head:"tiltR"}),key:"Alt+Digit4"},{id:"c-sing",name:"\u{1F3A4} H\xE1t",pose:Ai({armR:"mouth",propR:"mic",armL:"diag",face:"happy",loop:"dance"}),key:"Alt+Digit5"},{id:"c-hero",name:"\u{1F9B8} Si\xEAu nh\xE2n",pose:Ai({armR:"up",armL:"hip",legL:"knee",face:"angry",body:"leanR"}),key:"Alt+Digit6"},{id:"c-chicken",name:"\u{1F414} V\u1ED7 c\xE1nh",pose:Ai({body:"squat",armL:"hip",armR:"hip",loop:"flap",face:"surprised"}),key:"Alt+Digit7"},{id:"c-scared",name:"\u{1F631} Ho\u1EA3ng s\u1EE3",pose:Ai({armL:"head",armR:"head",loop:"shiver",face:"scared"}),key:"Alt+Digit8"},{id:"c-dog",name:"\u{1F436} C\xFAn con",pose:Ai({body:"crawl",ears:"dog",tail:"dog",face:"cheeky",propR:"bone"}),key:"Alt+Digit9"}],bm=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent),BM={ArrowLeft:"\u2190",ArrowRight:"\u2192",ArrowUp:"\u2191",ArrowDown:"\u2193",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`",Backspace:"\u232B",Enter:"\u21B5",Tab:"Tab",Space:"Space"};function ka(n){return n?n.split("+").map(e=>e==="Shift"?"\u21E7":e==="Alt"?bm?"\u2325":"Alt":e.startsWith("Key")?e.slice(3):e.startsWith("Digit")?e.slice(5):e.startsWith("Numpad")?"Num"+e.slice(6):/^F\d+$/.test(e)?e:BM[e]||e).join(bm?"":"+"):""}function Hu(n){return n.ctrlKey||n.metaKey||["ShiftLeft","ShiftRight","AltLeft","AltRight","ControlLeft","ControlRight","MetaLeft","MetaRight","CapsLock"].includes(n.code)?null:(n.altKey?"Alt+":"")+(n.shiftKey?"Shift+":"")+n.code}function Mm(n,e){try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}}function wm(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}var Al=class{constructor(){this.overrides=Mm(ym,{}),this.combos=Mm(xm,null)||_m.map(e=>({...e,pose:{...e.pose}})),this.rebuild()}rebuild(){this.map={...vm,...this.overrides};for(let e of this.combos)this.map["combo:"+e.id]=e.key??null;this.rev={};for(let[e,t]of Object.entries(this.map))t&&(this.rev[t]=e)}keyOf(e){return this.map[e]||null}actionFor(e){return this.rev[e]||null}bind(e,t){let i=this.rev[t];i&&i!==e&&this.setRaw(i,null),this.setRaw(e,t),this.persist()}setRaw(e,t){if(e.startsWith("combo:")){let i=this.combos.find(s=>"combo:"+s.id===e);i&&(i.key=t)}else vm[e]===t?delete this.overrides[e]:this.overrides[e]=t;this.rebuild()}addCombo(e,t){let i="u"+Date.now().toString(36),s=new Set(Object.values(this.map)),r=null;for(let l=9;l>=0&&!r;l--)s.has("Alt+Digit"+l)||(r="Alt+Digit"+l);let{fx:a,...o}=t;return this.combos.push({id:i,name:e||"T\u1ED5 h\u1EE3p "+(this.combos.length+1),pose:o,key:r}),this.persist(),i}removeCombo(e){this.combos=this.combos.filter(t=>t.id!==e),this.persist()}renameCombo(e,t){let i=this.combos.find(s=>s.id===e);i&&(i.name=t.slice(0,30),this.persist())}reset(){this.overrides={},this.combos=_m.map(e=>({...e,pose:{...e.pose}})),this.persist()}persist(){this.rebuild(),wm(ym,this.overrides),wm(xm,this.combos)}};function Sm(n){let e=Un.filter(t=>!t.key.startsWith("prop")).map(t=>({title:t.group,items:t.opts.map(([i,s])=>({id:`${t.key}:${i}`,label:s}))}));e.push({title:"\u0110\u1EA1o c\u1EE5 & kh\xE1c",items:[{id:"cycle:propL",label:"\u0110\u1ED5i \u0111\u1EA1o c\u1EE5 tay tr\xE1i"},{id:"cycle:propR",label:"\u0110\u1ED5i \u0111\u1EA1o c\u1EE5 tay ph\u1EA3i"},{id:"clear:propL",label:"B\u1ECF \u0111\u1EA1o c\u1EE5 tay tr\xE1i"},{id:"clear:propR",label:"B\u1ECF \u0111\u1EA1o c\u1EE5 tay ph\u1EA3i"},{id:"cycle:ears",label:"\u0110\u1ED5i tai / s\u1EEBng"},{id:"cycle:tail",label:"\u0110\u1ED5i \u0111u\xF4i"},{id:"clear:ears",label:"B\u1ECF tai / s\u1EEBng"},{id:"clear:tail",label:"B\u1ECF \u0111u\xF4i"},{id:"reset",label:"\u0110\u1EB7t l\u1EA1i t\u01B0 th\u1EBF"},{id:"help",label:"M\u1EDF b\u1EA3ng ph\xEDm t\u1EAFt"}]});for(let t of["L","R"])e.push({title:`\u0110\u1EA1o c\u1EE5 tay ${t==="L"?"tr\xE1i":"ph\u1EA3i"} (g\xE1n ph\xEDm tu\u1EF3 \xFD)`,items:$s.map(([i,s,r])=>({id:`prop${t}:${i}`,label:`${s} ${r}`}))});return e}var Vu=n=>n.toLowerCase().replace(/[\u{1F000}-\u{1FFFF}☀-➿️]/gu,"").replace(/\s+/g," ").trim(),_n=n=>["armL:"+n,"armR:"+n],zM={"c\xFAi ch\xE0o":["body:bow"],"c\xFAi ng\u01B0\u1EDDi":["body:bow"],c\u00FAi:["body:bow"],b\u00F2:["body:crawl"],"n\u1EB1m/b\xF2":["body:crawl"],ng\u1ED3i:["body:sit"],"\u0111\u1EE9ng th\u1EB3ng":["body:stand"],\u0111\u1EE9ng:["body:stand"],nghi\u00EAng:["body:leanR"],"nghi\xEAng ng\u01B0\u1EDDi":["body:leanR"],"nghi\xEAng \u0111\u1EA7u":["head:tiltR"],ng\u01B0\u1EDBc:["head:up"],"c\xFAi \u0111\u1EA7u":["head:down"],"m\u1EB7t vui":["face:happy"],"m\u1EB7t bu\u1ED3n":["face:sad"],"m\u1EB7t gi\u1EADn":["face:angry"],"m\u1EB7t ng\u1EA1c nhi\xEAn":["face:surprised"],"m\u1EB7t s\u1EE3":["face:scared"],"m\u1EB7t ng\u1EE7":["face:sleepy"],"m\u1EB7t l\xE8 l\u01B0\u1EE1i":["face:cheeky"],"m\u1EB7t y\xEAu":["face:love"],"m\u1EB7t th\u01B0\u1EDDng":["face:neutral"],ng\u00E1p:["face:sleepy","armR:mouth"],"gi\u01A1 cao":["armR:up"],"gi\u01A1 2 tay":_n("up"),"2 tay gi\u01A1 cao":_n("up"),"tay gi\u01A1 cao xen k\u1EBD":["armL:up","armR:down","loop:punch"],"dang tay":_n("side"),"dang 2 tay":_n("side"),"2 tay dang":_n("side"),"tay dang":_n("side"),"tay h\u1EA1 dang nh\u1EB9":_n("diag"),"2 tay ch\xE9o l\xEAn":_n("diag"),"ch\u1ED1ng h\xF4ng":["armR:hip"],"ch\u1ED1ng h\xF4ng 2 tay":_n("hip"),"khoe c\u01A1":["armR:flex"],"khoe c\u01A1 2 tay":_n("flex"),"co 2 tay":_n("flex"),"\xF4m ng\u1EF1c":_n("cross"),"\xF4m \u0111\u1EA7u":_n("head"),"\u0111\u01B0a l\xEAn mi\u1EC7ng":["armR:mouth"],"\u0111\u01B0a tay l\xEAn mi\u1EC7ng":["armR:mouth"],"1 tay \u0111\u01B0a l\xEAn mi\u1EC7ng l\xE0m v\xF2i":["armR:mouth"],ch\u1EC9:["armR:point"],"ch\u1EC9 l\xEAn":["armR:diag"],"2 tay ch\u1EC9":_n("point"),"1 tay gi\u01A1 ra hi\u1EC7u d\u1EEBng":["armR:point"],v\u1EABy:["armR:wave"],"v\u1EABy tay":["armR:wave"],"co g\u1ED1i":["legL:knee"],"co g\u1ED1i 1 ch\xE2n":["legL:knee"],\u0111\u00E1:["legR:kick"],"\u0111\xE1 ch\xE2n":["legR:kick"],l\u1EAFc:["loop:shake"],"\u0111i ch\u1EADm":["loop:walk"],"nh\u1EA3y m\xFAa u\u1ED1n \xE9o":["loop:dance"],"v\u1ED7 tay (h\xE0m)":["loop:clap"],nh\u00FAn:["fx:bounce"],\u0111u\u00F4i:["tail:dog"],"\u0111u\xF4i heo xo\u1EAFn":["tail:pig"],x\u01B0\u01A1ng:["propR:bone"],b\u00F3ng:["propR:ball"],\u0111\u00E0n:["propR:guitar"]},Da={};for(let n of Un){if(n.key.startsWith("prop")||n.key==="face")continue;let e=n.key==="armL"?"tay tr\xE1i ":n.key==="armR"?"tay ph\u1EA3i ":n.key==="legL"?"ch\xE2n tr\xE1i ":n.key==="legR"?"ch\xE2n ph\u1EA3i ":"";for(let[t,i]of n.opts){let s=Vu(e+i);Da[s]||(Da[s]=[n.key+":"+t])}}for(let[n,,e]of $s)Da[Vu(e)]=["prop:"+n];Object.assign(Da,zM);function Gu(n){if(!n)return[];let e=0;return n.split(/\s*(?:\+|,|→|;)\s*/).filter(Boolean).map(t=>{let i=Da[Vu(t)]||null;return i&&(i=i.map(s=>s.startsWith("prop:")?(e++?"propL:":"propR:")+s.slice(5):s)),{text:t,ids:i}})}var bn=new Al,Rl=n=>{let e=bn.keyOf(n);return e?`<kbd>${Ke(ka(e))}</kbd>`:""},HM="dienta",ks=Tf(),V={cid:Af(),code:null,isHost:!1,net:null,engine:null,hostPid:null,pub:null,priv:null,joined:!1,endsAt:0,chat:[],seenLog:0,unread:0,look:GM(),pose:{...Zt},poseSeq:0,puppet:null,voice:null,speaking:new Set,shownEnd:0,lastTurnKey:"",ctlTab:0};ea&&(window.__app=V);var VM={order:"random",turns:2,actTime:90,answerTime:12,hints:!0,mult:!0,rerolls:1,categories:null};function Xu(){let n=null;try{n=JSON.parse(Dn.get("dienta-room-opts")||"null")}catch{}return{...VM,...n||{}}}var Em=n=>Dn.set("dienta-room-opts",JSON.stringify(n));function Cm(n,e,t=!0){let i=t?"":"disabled",s=(a,o)=>`<div class="mini-seg">${o.map(([l,c])=>`<button type="button" class="${String(n[a])===String(l)?"on":""}" data-opt="${a}" data-val="${l}" ${i}>${c}</button>`).join("")}</div>`,r=a=>!n.categories||n.categories.includes(a);return`
    <div class="ro-row"><span>Th\u1EE9 t\u1EF1 l\xEAn di\u1EC5n</span>${s("order",[["random","\u{1F3B2} B\u1ED1c th\u0103m ng\u1EABu nhi\xEAn"],["join","\u{1F4CB} Theo th\u1EE9 t\u1EF1 v\xE0o ph\xF2ng"]])}</div>
    <p class="ro-note">${n.order==="join"?"L\u1EA7n l\u01B0\u1EE3t t\u1EEB ng\u01B0\u1EDDi v\xE0o ph\xF2ng tr\u01B0\u1EDBc.":"M\u1ED7i l\u01B0\u1EE3t b\u1ED1c ng\u1EABu nhi\xEAn m\u1ED9t ng\u01B0\u1EDDi; ai di\u1EC5n r\u1ED3i th\xEC kh\xF4ng b\u1ECB b\u1ED1c l\u1EA1i cho t\u1EDBi v\xF2ng sau."}</p>
    <div class="ro-grid">
      <label>S\u1ED1 v\xF2ng (m\u1ED7i ng\u01B0\u1EDDi di\u1EC5n)${s("turns",[[1,"1"],[2,"2"],[3,"3"],[4,"4"],[5,"5"]])}</label>
      <label>Th\u1EDDi gian di\u1EC5n${s("actTime",[[45,"45s"],[60,"60s"],[90,"90s"],[120,"2p"],[180,"3p"]])}</label>
      <label>Th\u1EDDi gian tr\u1EA3 l\u1EDDi${s("answerTime",[[8,"8s"],[12,"12s"],[20,"20s"],[30,"30s"]])}</label>
      <label>L\u01B0\u1EE3t \u0111\u1ED5i \u0111\u1EC1${s("rerolls",[[0,"0"],[1,"1"],[2,"2"],[3,"3"]])}</label>
    </div>
    <div class="ro-toggles">
      <label class="toggle"><input type="checkbox" data-opt="hints" ${n.hints!==!1?"checked":""} ${i}/>\u{1F4A1} G\u1EE3i \xFD t\u1EF1 \u0111\u1ED9ng (s\u1ED1 ch\u1EEF, ch\u1EEF c\xE1i \u0111\u1EA7u)</label>
      <label class="toggle"><input type="checkbox" data-opt="mult" ${n.mult!==!1?"checked":""} ${i}/>\u2716\uFE0F S\u1ED1 nh\xE2n \u0111i\u1EC3m ng\u1EABu nhi\xEAn (x2, x3, x5)</label>
    </div>
    ${e?.length?`<div class="ro-row"><span>Nh\xF3m \u0111\u1EC1</span></div><div class="cat-row">${e.map(a=>`<button type="button" class="cat-chip ${r(a)?"on":""}" data-cat="${Ke(a)}" ${i}>${Ke(a)}</button>`).join("")}</div>`:""}`}function Rm(n,e,t,i){Tt("[data-opt][data-val]",n).forEach(s=>s.onclick=()=>{let r=s.dataset.opt,a=s.dataset.val;i({[r]:/^\d+$/.test(a)?Number(a):a})}),Tt("input[data-opt]",n).forEach(s=>s.onchange=()=>i({[s.dataset.opt]:s.checked})),Tt("[data-cat]",n).forEach(s=>s.onclick=()=>{let r=e.categories?[...e.categories]:[...t],a=s.dataset.cat,o=r.includes(a)?r.filter(l=>l!==a):[...r,a];i({categories:o.length===t.length?null:o})})}function GM(){let n=null;try{n=JSON.parse(Dn.get("dienta-look")||"null")}catch{}return{skin:ds[n?.skin]?n.skin:"tron",head:typeof n?.head=="string"?n.head:""}}var Ua=()=>Dn.set("dienta-look",JSON.stringify(V.look)),WM=n=>({e:Ui.includes(n?.e)?n.e:Ui[0],c:Number.isInteger(n?.c)&&n.c>=0&&n.c<us.length?n.c:0}),$M=n=>{let e=aa.includes(n?.skin)?n.skin:"tron",t=typeof n?.head=="string"?n.head:"";return/^https?:\/\//.test(t)&&t.length<800||/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/.test(t)&&t.length<6e4||(t=""),{skin:e,head:t}};function qM(){Tt("[data-logo]").forEach(f=>f.innerHTML=jr.wolf),de("#nameInput").value=ks.name;let n=Tl(de("#lookPreview")),e=[{...Zt,armL:"wave",face:"happy",loop:null},{...Zt,armL:"up",armR:"up",face:"surprised",legL:"spread",legR:"spread"},{...Zt,armL:"hip",armR:"flex",face:"cheeky"},{...Zt,loop:"dance",face:"happy",armL:"diag",armR:"down"}],t=0,i=()=>{n.setLook(V.look),n.setPose(e[t%e.length])};setInterval(()=>{t++,i()},2200);let s=()=>{de("#skinGrid").innerHTML=aa.map(f=>{let g=ds[f];return`<button type="button" class="skin-btn ${f===V.look.skin?"on":""}" data-skin="${f}" title="${Ke(g.name)}"><span class="sw" style="--a:${g.shirt};--b:${g.pants}">${g.emo||""}</span><span class="sk-n">${Ke(g.name)}</span></button>`}).join("")+'<button type="button" class="skin-btn rnd" id="skinRandom"><span class="sw">\u{1F3B2}</span><span class="sk-n">Ng\u1EABu nhi\xEAn</span></button>',Tt("[data-skin]").forEach(f=>f.onclick=()=>{V.look.skin=f.dataset.skin,Ua(),s(),i()}),de("#skinRandom").onclick=()=>{let f=aa.filter(g=>g!==V.look.skin);V.look.skin=f[Math.floor(Math.random()*f.length)],Ua(),s(),i(),de(`[data-skin="${V.look.skin}"]`)?.scrollIntoView({block:"nearest"})},de("#skinCount").textContent=aa.length,de("#photoState").textContent=V.look.head?"\u0110ang d\xF9ng \u1EA3nh l\xE0m m\u1EB7t":"Ch\u01B0a c\xF3 \u1EA3nh (d\xF9ng m\u1EB7t ho\u1EA1t h\xECnh)",de("#photoClear").hidden=!V.look.head};s(),i(),de("#photoLink").onchange=()=>{let f=de("#photoLink").value.trim();if(f&&!/^https?:\/\//.test(f))return nn("Link \u1EA3nh ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng http:// ho\u1EB7c https://",!0);V.look.head=f,Ua(),s(),i()},de("#photoFile").onchange=async f=>{let g=f.target.files?.[0];if(g)try{V.look.head=await XM(g,128),de("#photoLink").value="",Ua(),s(),i()}catch{nn("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh n\xE0y, th\u1EED \u1EA3nh kh\xE1c nh\xE9.",!0)}},de("#photoClear").onclick=()=>{V.look.head="",de("#photoLink").value="",Ua(),s(),i()},Ef(de("#avPick"),ks,()=>{});let r=Xu(),a=mc(window.DIENTA_DATA).categories,o=()=>{de("#roomOptsBody").innerHTML=Cm(r,a),Rm(de("#roomOptsBody"),r,a,f=>{Object.assign(r,f),r.categories&&!r.categories.length&&(r.categories=null),Em(r),o()})};o();let l=de("#homeForm"),c="create",h=f=>{c=f,l.classList.toggle("join",f==="join"),Tt(".seg-btn").forEach(g=>g.classList.toggle("active",g.dataset.mode===f)),de("#homeSubmit").textContent=f==="join"?"V\xE0o ph\xF2ng \u2192":"T\u1EA1o ph\xF2ng m\u1EDBi \u2192",de("#codeInput").required=f==="join"};Tt(".seg-btn").forEach(f=>f.onclick=()=>h(f.dataset.mode));let d=(uc.get("room")||"").toUpperCase();d&&(h("join"),de("#codeInput").value=d),l.onsubmit=f=>{f.preventDefault(),Qa();let g=de("#nameInput").value.trim();if(g)if(ks.name=g,ja(ks),c==="join"){let x=de("#codeInput").value.trim().toUpperCase();if(!/^[A-Z0-9]{4,8}$/.test(x))return nn("M\xE3 ph\xF2ng kh\xF4ng h\u1EE3p l\u1EC7",!0);Wu(x,!1)}else Wu(Sf(),!0)};let u=JSON.parse(Gs.get("dienta-session")||"null");u&&(!d||u.code===d)&&ks.name&&Wu(u.code,u.host)}function XM(n,e){return new Promise((t,i)=>{let s=new Image,r=URL.createObjectURL(n);s.onload=()=>{let a=document.createElement("canvas");a.width=a.height=e;let o=Math.min(s.width,s.height);a.getContext("2d").drawImage(s,(s.width-o)/2,(s.height-o)/2,o,o,0,0,e,e),URL.revokeObjectURL(r),t(a.toDataURL("image/jpeg",.82))},s.onerror=i,s.src=r})}async function Wu(n,e){V.code=n,V.isHost=e,Gs.set("dienta-session",JSON.stringify({code:n,host:e}));let t=new URL(location.href);t.searchParams.set("room",n),history.replaceState(null,"",t),de("#home").classList.add("hidden"),de("#room").classList.remove("hidden"),de("#codeChip").innerHTML=`${Di("copy")}${Ke(n)}`,de("#codeChip").onclick=()=>pc(fc(n),"\u0110\xE3 sao ch\xE9p link m\u1EDDi!"),de("#leaveBtn").onclick=()=>El(),de("#stage").innerHTML=`<div class="panel hero hero-night"><div class="hero-ic">${jr.wolf}</div><div><h2>\u0110ang k\u1EBFt n\u1ED1i...</h2><p>\u0110ang t\xECm \u0111\u01B0\u1EDDng t\u1EDBi ph\xF2ng <b>${Ke(n)}</b>.</p></div></div>`;let i=null;if(e&&(i=mc(window.DIENTA_DATA),i.errors.length&&console.warn("[dienta] l\u1ED7i d\u1EEF li\u1EC7u",i.errors),!i.items.length)){nn("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c kho \u0111\u1EC1 (data/dienta-data.js).",!0);return}try{V.net=await bf(n,{local:ea,ns:HM})}catch(a){console.error(a),nn("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c th\u01B0 vi\u1EC7n k\u1EBFt n\u1ED1i.",!0);return}let s=V.net;V.voice=new Ja(s),V.voice.onLevels=aw;let r=()=>({cid:V.cid,name:ks.name,av:ks.av,look:V.look});if(s.on("hello",(a,o)=>{if(!V.isHost||!a?.cid)return;let l=V.engine.addPlayer(String(a.cid),a,o);l&&s.send("err",{msg:l,fatal:!0},o)}),s.on("act",(a,o)=>{if(!V.isHost)return;let l=V.engine.byPid(o);if(!l)return;let c=V.engine.handle(l.cid,a);c&&s.send("err",{msg:c},o)}),s.on("chat",(a,o)=>{if(V.isHost){let l=V.engine.byPid(o);l&&Pm(l.cid,a.text)}else o===V.hostPid&&Zu(a)}),s.on("state",(a,o)=>{V.isHost||(V.hostPid=o,de("#hostLost").classList.add("hidden"),Im(a))}),s.on("priv",(a,o)=>{!V.isHost&&o===V.hostPid&&Lm(a)}),s.on("fx",(a,o)=>{!V.isHost&&o===V.hostPid&&Am(a)}),s.on("pose",(a,o)=>{let l=V.pub?.players.find(c=>c.cid===V.pub.turn?.actor);!l||l.pid!==o||(V.isHost&&V.engine.setPose(l.cid,a),V.remotePose={...Zt,...a},V.puppet?.setPose(V.remotePose))}),s.on("err",a=>{nn(a.msg,!0),a.fatal&&El(!1)}),s.onPeerJoin=a=>{V.isHost?Tm():s.send("hello",r(),a),V.voice?.peerJoined(a)},s.onPeerLeave=a=>{V.voice?.peerLeft(a),V.isHost?V.engine.disconnect(a):a===V.hostPid&&de("#hostLost").classList.remove("hidden")},s.onPeerStream=(a,o)=>V.voice.peerStream(a,o),e){let a=JSON.parse(Dn.get("dienta-host-"+n)||"null");V.engine=new eo(V.cid,i,a&&a.hostCid===V.cid?a:null,{cleanAv:WM,cleanLook:$M}),V.engine.players.forEach(o=>{o.cid!==V.cid&&(o.connected=!1)}),a&&a.hostCid===V.cid||V.engine.setConfig(Xu()),V.engine.onChange=Tm,V.engine.onEvent=o=>{V.net.send("fx",o),Am(o)},V.engine.addPlayer(V.cid,r(),s.selfId),setInterval(()=>V.engine.tick(),300)}else setTimeout(()=>{!V.pub&&V.net===s&&(de("#stage").innerHTML=`<div class="panel hero hero-vote"><div class="hero-ic">${jr.wolf}</div><div><h2>Ch\u01B0a th\u1EA5y ch\u1EE7 ph\xF2ng</h2><p>Ki\u1EC3m tra l\u1EA1i m\xE3 <b>${Ke(n)}</b> v\xE0 ch\u1EAFc ch\u1EAFn ch\u1EE7 ph\xF2ng v\u1EABn \u0111ang m\u1EDF trang. V\u1EABn \u0111ang ti\u1EBFp t\u1EE5c t\xECm...</p><div style="margin-top:12px"><button class="btn" id="backHome">V\u1EC1 trang tr\u01B0\u1EDBc</button></div></div></div>`,de("#backHome").onclick=()=>El(!1))},12e3);setInterval(Um,200)}function El(n=!0){if(n&&V.pub&&!["lobby","end"].includes(V.pub.phase)&&!confirm("R\u1EDDi kh\u1ECFi v\xE1n \u0111ang ch\u01A1i?"))return;Gs.del("dienta-session"),V.isHost&&Dn.del("dienta-host-"+V.code);try{V.net?.leave()}catch{}let e=new URL(location.href);e.searchParams.delete("room"),location.href=e.toString()}var $u=!1;function Tm(){$u||($u=!0,queueMicrotask(()=>{$u=!1;let n=V.engine,e=n.pub();V.net.send("state",e);for(let t of n.players)t.cid!==V.cid&&t.connected&&t.pid&&V.net.send("priv",n.priv(t.cid),t.pid);Im(e),Lm(n.priv(V.cid)),Dn.set("dienta-host-"+V.code,JSON.stringify(n.s))}))}function Pm(n,e){if(e=String(e||"").trim().slice(0,300),!e)return;let t=V.engine,i=t.P(n),s=t.chatFilter(n,e);if(s.err){n===V.cid?nn(s.err,!0):V.net.send("err",{msg:s.err},i.pid);return}let r={k:"m",cid:n,name:i.name,av:i.av,text:s.text,masked:!!s.masked,ts:Date.now()};V.net.send("chat",r),Zu(r)}function Ei(n){if(V.isHost){let e=V.engine.handle(V.cid,n);e&&nn(e,!0)}else V.hostPid?V.net.send("act",n,V.hostPid):nn("Ch\u01B0a k\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c ch\u1EE7 ph\xF2ng",!0)}function Im(n){let e=V.pub;if(V.pub=n,V.endsAt=n.remaining?Date.now()+n.remaining:0,n.players.find(s=>s.cid===V.cid))V.joined=!0;else if(V.joined)return nn("B\u1EA1n \u0111\xE3 b\u1ECB m\u1EDDi ra kh\u1ECFi ph\xF2ng.",!0),setTimeout(()=>El(!1),1200);for(let s of n.log)s.id>V.seenLog&&Zu({k:"sys",kind:s.kind,text:s.text});V.seenLog=Math.max(V.seenLog,...n.log.map(s=>s.id),0);let i=n.turn?`${n.gameId}-${n.turn.n}`:"";i!==V.lastTurnKey&&(V.lastTurnKey=i,V.pose={...n.pose||Zt},V.remotePose={...Zt,...n.pose||{}},V.answerDraft=""),Dm(),n.phase==="end"&&V.shownEnd!==n.gameId&&(V.shownEnd=n.gameId,setTimeout(zm,700)),n.phase==="lobby"&&de("#overlay").dataset.kind==="end"&&Rr()}function Lm(n){V.priv=n,Dm()}function km(n){let e=de("#stageWrap");if(e)for(let t=0;t<10;t++){let i=document.createElement("span");i.className="st-float",i.textContent=n[t%n.length],i.style.left=8+Math.random()*84+"%",i.style.animationDelay=Math.random()*.5+"s",i.style.setProperty("--r",Math.random()*40-20+"deg"),e.appendChild(i),setTimeout(()=>i.remove(),2500)}}function YM(){let n=de("#stageWrap");n&&(n.classList.remove("cheer"),n.offsetWidth,n.classList.add("cheer"),setTimeout(()=>n.classList.remove("cheer"),1600),V.puppet?.cheer?.(),km(["\u{1F44F}","\u{1F389}","\u2B50","\u{1F60D}","\u{1F44F}"]))}function Am(n){n.type==="correct"&&YM(),n.type==="wrong"&&km(["\u{1F605}","\u274C","\u{1F923}"]),n.type==="buzz"?ta.buzz():n.type==="correct"?(ta.correct(),n.cid===V.cid&&dc()):n.type==="wrong"?ta.wrong():n.type==="turn"&&ta.start()}var Cl=n=>V.pub?.players.find(e=>e.cid===n),ai=()=>V.pub?.turn?.actor===V.cid&&["acting","answering"].includes(V.pub.phase);function Dm(){let n=V.pub;n&&(document.body.classList.toggle("night",!1),ZM(),n.phase==="lobby"?KM():jM(),Bm(),iw(),Hm())}function ZM(){let n=V.pub,e=n.phase==="lobby"?"Ph\xF2ng ch\u1EDD":n.phase==="end"?"K\u1EBFt th\xFAc":`L\u01B0\u1EE3t ${n.turn?.n}/${n.turn?.total}`;de("#phasePill").innerHTML=`${Di(n.phase==="answering"?"vote":"card")}<span class="lbl">${e}</span><span class="t" id="timer"></span>`,Um(),Il()}function Um(){let n=de("#timer");if(!n||!V.pub)return;if(!V.endsAt){n.textContent=`${V.pub.players.length} ng\u01B0\u1EDDi`,n.classList.remove("urgent"),de("#timebar").style.width="0";return}let e=Math.max(0,V.endsAt-Date.now()),t=Math.ceil(e/1e3);n.textContent=`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,n.classList.toggle("urgent",t<=10&&t>0),de("#timebar").style.width=V.pub.durMs?`${Math.min(100,e/V.pub.durMs*100)}%`:"0";let i=de("#ansTimer");i&&(i.textContent=t+"s")}function KM(){let n=V.pub,e=V.isHost,t=n.config;V.puppet=null;let i=n.categories;de("#stage").innerHTML=`
  <div class="panel lobby-hero hero">
    <div class="grow"><div class="lbl">M\xE3 ph\xF2ng</div><div class="big-code">${Ke(V.code)}</div>
    <p style="margin:10px 0 0">G\u1EEDi link cho b\u1EA1n b\xE8 \u0111\u1EC3 c\xF9ng v\xE0o. ${ea?"<b>(Ch\u1EBF \u0111\u1ED9 th\u1EED: ch\u1EC9 c\xE1c tab tr\xEAn m\xE1y n\xE0y)</b>":""}</p></div>
    <button class="btn sun" id="copyLink">${Di("copy")}Sao ch\xE9p link m\u1EDDi</button>
  </div>
  <div class="sect-title"><h3>Ng\u01B0\u1EDDi ch\u01A1i (${n.players.length})</h3><span class="muted">T\u1ED1i thi\u1EC3u 2 ng\u01B0\u1EDDi</span></div>
  <div class="grid">${n.players.map(r=>`
    <div class="pcard ${r.cid===V.cid?"me":""} ${r.connected?"":"offline"}">
      <div class="corner l">${r.cid===n.hostCid?`<span class="ic crown">${JM}</span>`:""}</div>
      ${e&&r.cid!==V.cid?`<button class="kick" data-kick="${r.cid}" title="M\u1EDDi ra">\xD7</button>`:""}
      ${jn(r)}<div class="pname">${Ke(r.name)}</div><div class="ptag">${Ke(ds[r.skin]?.name||"")}</div>
    </div>`).join("")}</div>
  <div class="sect-title"><h3>C\xE0i \u0111\u1EB7t</h3><span class="muted">${n.poolCount}/${n.itemCount} \u0111\u1EC1 \u0111ang b\u1EADt</span></div>
  <div class="panel cfg ro-body" id="lobbyOpts">${Cm(t,i,e)}</div>
  <div class="start-wrap">
    ${e?`<button class="btn primary big" id="startBtn" ${n.canStart?"disabled":""}>\u{1F3AD} B\u1EAFt \u0111\u1EA7u di\u1EC5n!</button>`:'<button class="btn big" disabled>\u0110ang ch\u1EDD ch\u1EE7 ph\xF2ng b\u1EAFt \u0111\u1EA7u...</button>'}
    ${n.canStart?`<div class="why">${Ke(n.canStart)}</div>`:""}
  </div>`,de("#copyLink").onclick=()=>pc(fc(V.code),"\u0110\xE3 sao ch\xE9p link m\u1EDDi!");let s=de("#startBtn");s&&(s.onclick=()=>Ei({t:"start"})),Tt("[data-kick]").forEach(r=>r.onclick=()=>Ei({t:"kick",cid:r.dataset.kick})),e&&Rm(de("#lobbyOpts"),t,i,r=>{Ei({t:"cfg",cfg:r});let a={...Xu(),...r};Em(a)})}var JM='<svg viewBox="0 0 64 64"><path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/></svg>';function jM(){let n=V.pub,e=n.turn,t=de("#stage");t.querySelector(".stage-wrap")||(t.innerHTML=`
      <div class="panel turn-bar" id="turnBar"></div>
      <div class="panel stage-wrap stage3d" id="stageWrap">
        <div class="puppet-box" id="puppetBox"></div>
        <div class="st-hint" id="stHint" hidden></div><div class="key-flash" id="keyFlash"></div>

        <div class="stage-overlay" id="stageOverlay"></div>
      </div>
      <div id="belowStage"></div>`,V.puppet=Tl(de("#puppetBox"),{stage:!0})),V.puppet||(V.puppet=Tl(de("#puppetBox"),{stage:!0})),V.puppet.setLook(n.actorLook||{skin:"tron"}),ai()?V.puppet.setPose(V.pose):V.puppet.setPose(V.remotePose||Zt);let i=e&&Cl(e.actor);de("#turnBar").innerHTML=n.phase==="end"?`<b>\u{1F3C1} V\xE1n \u0111\xE3 k\u1EBFt th\xFAc</b><button class="btn sm" id="showEnd">Xem b\u1EA3ng x\u1EBFp h\u1EA1ng</button>${V.isHost?'<button class="btn sm primary" id="toLobby">Ch\u01A1i l\u1EA1i</button>':""}`:e?`
    <div class="tb-actor">${jn(i,"sm")}<span><b>${Ke(i?.name)}</b> \u0111ang di\u1EC5n</span></div>
    <span class="chip cat">${Ke(e.category)}</span>
    <span class="chip pts">${e.points}\u0111</span>
    <span class="chip mult m${e.mult}">x${e.mult}</span>`:"";let s=de("#showEnd");s&&(s.onclick=zm);let r=de("#toLobby");r&&(r.onclick=()=>Ei({t:"lobby"}));let a=de("#stHint"),o=e?.hint;a.hidden=!(o&&["acting","answering"].includes(n.phase)),o&&(a.innerHTML=`<span class="hl">\u{1F4A1} G\u1EE3i \xFD</span><span class="pat">${Ke(o.pattern)}</span><span class="cnt">${o.letters.join(" + ")} ch\u1EEF</span>${o.text?`<span class="txt">${Ke(o.text)}</span>`:""}`);let l=de("#stageOverlay");if(n.phase==="answering"){let h=Cl(e.answering.cid);l.innerHTML=`<div class="bubble ans">${jn(h,"sm")}<b>${Ke(h?.name)}</b> b\u1EA5m chu\xF4ng! \u0110ang tr\u1EA3 l\u1EDDi... <span id="ansTimer"></span></div>`}else if(n.phase==="reveal"&&e?.item){let h=e.result,d=h&&Cl(h.cid);l.innerHTML=`<div class="reveal-card">${Nm(e.item.image,"big")}<div class="rv-name">${Ke(e.item.name)}</div>
      <div class="rv-sub">${h?`${jn(d,"sm")} <b>${Ke(d?.name)}</b> \u0111o\xE1n \u0111\xFAng! +${h.gain}`:"Kh\xF4ng ai \u0111o\xE1n ra!"}</div></div>`}else l.innerHTML="";let c=de("#belowStage");ai()?QM(c):n.phase==="acting"||n.phase==="answering"?nw(c):c.innerHTML=n.phase==="reveal"?'<div class="panel action calm"><div class="msg"><b>Chu\u1EA9n b\u1ECB l\u01B0\u1EE3t ti\u1EBFp theo...</b></div></div>':""}function Nm(n,e=""){return/^(https?:|data:image|\.{0,2}\/|images\/)/.test(n)||/\.(png|jpe?g|gif|webp|svg)$/i.test(n)?`<img class="item-img ${e}" src="${Ke(n)}" alt="">`:`<span class="item-emoji ${e}">${Ke(n)}</span>`}function QM(n){let e=V.priv?.item,t=V.pub.turn,i="actor-"+V.lastTurnKey+"-"+(e?.id||"")+"-"+t.rerolls;if(n.dataset.key!==i){n.dataset.key=i,n.innerHTML=`
      <div class="panel secret">
        ${e?Nm(e.image):""}
        <div class="sc-main"><div class="sc-k">\u0110\u1EC1 c\u1EE7a b\u1EA1n \u2014 ch\u1EC9 m\xECnh b\u1EA1n th\u1EA5y</div><div class="sc-name">${Ke(e?.name||"...")}</div>
        <div class="sc-sub">${Ke(e?.category||"")} \xB7 ${e?.points||0}\u0111 \xD7 ${t.mult} = <b>${(e?.points||0)*t.mult}\u0111</b></div>
        ${e?.acting?`<div class="sc-tip"><span>\u{1F3AC} M\u1EB9o di\u1EC5n <small>(b\u1EA5m \u0111\u1EC3 l\xE0m theo)</small>:</span> ${Gu(e.acting).map((r,a)=>r.ids?`<button type="button" class="tip-chip" data-tip="${a}" title="${Ke(r.ids.map(o=>Na[o]||o).join(" + "))}">${Ke(r.text)}${r.ids.length===1?Rl(r.ids[0]):""}</button>`:`<span class="tip-txt">${Ke(r.text)}</span>`).join('<span class="tip-plus">+</span>')}</div>`:""}</div>
        <div class="sc-btns"><button class="btn sm" id="rerollBtn" ${t.rerolls>0?"":"disabled"}>\u{1F504} \u0110\u1ED5i \u0111\u1EC1 (${t.rerolls})</button><button class="btn sm ghost" id="skipBtn">B\u1ECF l\u01B0\u1EE3t</button></div>
      </div>
      <div class="panel controls">
        <div class="ctl-head"><b>\u0110i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt</b><span class="muted">D\xF9ng b\xE0n ph\xEDm cho nhanh \u2014 ph\xEDm t\u1EAFt hi\u1EC7n tr\xEAn t\u1EEBng n\xFAt</span>
          <button class="btn sm" id="keysBtn">\u2328\uFE0F Ph\xEDm t\u1EAFt</button><button class="btn sm" id="resetPose">\u0110\u1EB7t l\u1EA1i ${Rl("reset")}</button></div>
        <div class="ctl-tabs">${Pl().map((r,a)=>`<button type="button" data-tab="${a}" class="${a===V.ctlTab?"on":""}">${r.group}</button>`).join("")}</div>
        <div class="ctl-opts" id="ctlOpts"></div>
      </div>`,de("#rerollBtn").onclick=()=>Ei({t:"reroll"}),de("#skipBtn").onclick=()=>Ei({t:"skipTurn"}),de("#resetPose").onclick=()=>Yu({...Zt}),de("#keysBtn").onclick=Fm;let s=Gu(e?.acting);Tt("[data-tip]",n).forEach(r=>r.onclick=()=>ew(s[r.dataset.tip])),Tt(".ctl-tabs button",n).forEach(r=>r.onclick=()=>{V.ctlTab=Number(r.dataset.tab),Tt(".ctl-tabs button",n).forEach(a=>a.classList.toggle("on",a===r)),ri()})}ri()}var Pl=()=>[{group:"\u2B50 T\u1ED5 h\u1EE3p",key:"combo"},...Un];function ri(){let n=de("#ctlOpts");if(!n)return;let e=Pl()[V.ctlTab]||Pl()[0];if(e.key==="combo"){n.innerHTML=bn.combos.map(t=>`<button type="button" class="ctl combo" data-combo="${t.id}">${Ke(t.name)}${Rl("combo:"+t.id)}</button>`).join("")+'<button type="button" class="ctl add" id="saveCombo">\uFF0B L\u01B0u t\u01B0 th\u1EBF hi\u1EC7n t\u1EA1i</button>',Tt("[data-combo]",n).forEach(t=>t.onclick=()=>qu("combo:"+t.dataset.combo)),de("#saveCombo").onclick=tw;return}n.innerHTML=e.opts.map(([t,i])=>`<button type="button" class="ctl ${(e.oneshot?!1:V.pose[e.key]===t)?"on":""} ${e.key==="face"?"emo":""}" data-v="${t}">${i}${Rl(e.key+":"+t)}</button>`).join(""),Tt("button",n).forEach(t=>t.onclick=()=>qu(e.key+":"+t.dataset.v))}var Na={};for(let n of Un)for(let[e,t]of n.opts)Na[n.key+":"+e]=(/^(arm|leg|prop)/.test(n.key)?n.group+": ":"")+t;function qu(n){if(!ai())return!1;let[e,t]=n.split(":"),i={...V.pose},s=Na[n]||"";if(e==="combo"){let r=bn.combos.find(a=>a.id===t);if(!r)return!1;Object.assign(i,Zt,r.pose,{fx:null}),s=r.name}else if(e==="reset")Object.assign(i,Zt),s="\u0110\u1EB7t l\u1EA1i";else{if(e==="help")return Fm(),!0;if(e==="cycle"){let r=Un.find(o=>o.key===t);if(!r)return!1;let a=[...r.opts.map(o=>o[0]),null];i[t]=a[(a.indexOf(i[t]??null)+1)%a.length],s=i[t]?Na[t+":"+i[t]]||"":r.group+": b\u1ECF"}else if(e==="clear")i[t]=null,s=(Un.find(r=>r.key===t)?.group||"")+": b\u1ECF";else{let r=Un.find(a=>a.key===e);if(!r)return!1;r.oneshot?i.fx={name:t,seq:++V.poseSeq,at:Date.now()}:r.toggle?i[e]=i[e]===t?null:t:i[e]=t}}return Yu(i),Om(s),!0}function ew(n){if(!n?.ids||!ai())return;let e={...V.pose};for(let i of n.ids){let[s,r]=i.split(":"),a=Un.find(o=>o.key===s);a&&(a.oneshot?e.fx={name:r,seq:++V.poseSeq,at:Date.now()}:e[s]=r)}Yu(e),Om(n.ids.map(i=>Na[i]||"").filter(Boolean).join(" + "));let t=Pl().findIndex(i=>i.key===n.ids[0].split(":")[0]);t>=0&&(V.ctlTab=t,Tt(".ctl-tabs button").forEach(i=>i.classList.toggle("on",Number(i.dataset.tab)===t)),ri())}function Om(n){let e=de("#keyFlash");!e||!n||(e.textContent=n,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"))}function Yu(n){V.pose=n,V.puppet?.setPose(n),V.net.send("pose",n),V.isHost&&V.engine.setPose(V.cid,n),ri()}var Kn=null;document.addEventListener("keydown",n=>{if(Kn){if(n.preventDefault(),n.code==="Escape"){Kn=null,Cr();return}let i=Hu(n);if(!i)return;bn.bind(Kn,i),Kn=null,Cr();return}if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)||n.repeat||!ai())return;let e=Hu(n),t=e&&bn.actionFor(e);t&&qu(t)&&n.preventDefault()});function tw(){let n=de("#ctlOpts"),e=de("#saveCombo");if(!e)return;e.outerHTML='<form class="combo-form" id="comboForm"><input id="comboName" maxlength="30" placeholder="T\xEAn t\u1ED5 h\u1EE3p, VD: C\u1EAFt t\xF3c" /><button class="btn sm primary">L\u01B0u</button></form>';let t=de("#comboName");t.focus(),de("#comboForm").onsubmit=i=>{i.preventDefault();let s=bn.addCombo(t.value.trim(),V.pose),r=bn.combos.find(a=>a.id===s);nn(`\u0110\xE3 l\u01B0u "${r.name}"${r.key?" \u2014 ph\xEDm "+ka(r.key):""}`),ri()},t.onkeydown=i=>{i.key==="Escape"&&ri()}}function Fm(){let n=de("#overlay");n.dataset.kind="keys",n.classList.remove("hidden"),n.onclick=e=>{e.target===n&&(Kn=null,Rr())},Cr()}function Cr(){let n=de("#overlay");if(n.dataset.kind!=="keys")return;let e=(s,r)=>`<div class="kb-row"><span>${Ke(r)}</span><button type="button" class="kb-key ${Kn===s?"wait":""}" data-bind="${Ke(s)}">${Kn===s?"Nh\u1EA5n ph\xEDm\u2026":bn.keyOf(s)?Ke(ka(bn.keyOf(s))):"\u2014"}</button></div>`,t=de(".kb-body",n)?.scrollTop||0;n.innerHTML=`<div class="modal panel wide kb-modal">
    <div class="kb-top"><h2>\u2328\uFE0F Ph\xEDm t\u1EAFt</h2><div style="display:flex;gap:6px"><button class="btn sm" id="kbReset">Kh\xF4i ph\u1EE5c m\u1EB7c \u0111\u1ECBnh</button><button class="btn sm primary" id="kbClose">Xong</button></div></div>
    <p class="kb-tip">B\u1EA5m v\xE0o \xF4 ph\xEDm r\u1ED3i nh\u1EA5n ph\xEDm m\u1EDBi (c\xF3 th\u1EC3 k\xE8m \u21E7 Shift ho\u1EB7c ${/Mac/.test(navigator.platform)?"\u2325 Option":"Alt"}). Esc \u0111\u1EC3 hu\u1EF7. Ph\xEDm t\u1EAFt ch\u1EC9 ho\u1EA1t \u0111\u1ED9ng khi b\u1EA1n \u0111ang di\u1EC5n.</p>
    <div class="kb-body">
      <div class="kb-group"><h3>\u2B50 T\u1ED5 h\u1EE3p c\u1EE7a b\u1EA1n</h3>
        ${bn.combos.map(s=>`<div class="kb-row combo-row"><input class="kb-name" data-rename="${s.id}" value="${Ke(s.name)}" maxlength="30"/><button type="button" class="kb-key ${Kn==="combo:"+s.id?"wait":""}" data-bind="combo:${s.id}">${Kn==="combo:"+s.id?"Nh\u1EA5n ph\xEDm\u2026":s.key?Ke(ka(s.key)):"\u2014"}</button><button type="button" class="kb-del" data-del="${s.id}" title="Xo\xE1">\u2715</button></div>`).join("")}
        <p class="kb-tip">T\u1EA1o t\u1ED5 h\u1EE3p m\u1EDBi: t\u1EA1o d\xE1ng cho nh\xE2n v\u1EADt r\u1ED3i b\u1EA5m "\uFF0B L\u01B0u t\u01B0 th\u1EBF hi\u1EC7n t\u1EA1i" trong tab \u2B50 T\u1ED5 h\u1EE3p.</p>
      </div>
      ${Sm(bn).map(s=>`<div class="kb-group"><h3>${Ke(s.title)}</h3>${s.items.map(r=>e(r.id,r.label)).join("")}</div>`).join("")}
    </div></div>`;let i=de(".kb-body",n);i.scrollTop=t,de("#kbClose").onclick=()=>{Kn=null,Rr(),ri()},de("#kbReset").onclick=()=>{bn.reset(),Cr(),ri()},Tt("[data-bind]",n).forEach(s=>s.onclick=()=>{Kn=s.dataset.bind,Cr()}),Tt("[data-del]",n).forEach(s=>s.onclick=()=>{bn.removeCombo(s.dataset.del),Cr(),ri()}),Tt("[data-rename]",n).forEach(s=>s.onchange=()=>{bn.renameCombo(s.dataset.rename,s.value.trim()||"T\u1ED5 h\u1EE3p"),ri()})}function nw(n){let e=V.pub,t=e.turn,i=t.locked.includes(V.cid),s=e.phase==="answering"&&t.answering?.cid===V.cid,r=`g-${V.lastTurnKey}-${e.phase}-${t.answering?.cid||""}-${i}`,a=t.guesses.filter(c=>!c.ok).map(c=>`<span class="guess">${jn(Cl(c.cid),"xs")} ${Ke(c.text||"(h\u1EBFt gi\u1EDD)")}</span>`).join("");if(n.dataset.key===r){let c=de("#guessList");c&&(c.innerHTML=a);return}if(n.dataset.key=r,s){n.innerHTML=`<form class="panel answer-box" id="ansForm" autocomplete="off"><b>B\u1EA1n b\u1EA5m nhanh nh\u1EA5t! \u0110\xE1p \xE1n l\xE0 g\xEC?</b>
      <div class="ans-row"><input id="ansInput" maxlength="60" placeholder="G\xF5 \u0111\xE1p \xE1n (kh\xF4ng c\u1EA7n d\u1EA5u)..." /><button class="btn primary" type="submit">Tr\u1EA3 l\u1EDDi</button></div></form>`;let c=de("#ansInput");c.focus(),de("#ansForm").onsubmit=h=>{h.preventDefault(),Ei({t:"answer",text:c.value})};return}let o=e.phase==="acting"&&!i;n.innerHTML=`<div class="buzz-zone">
      <button class="buzzer ${o?"":"off"}" id="buzzBtn" ${o?"":"disabled"}><span>\u{1F514}</span>${i?"\u0110\xE3 tr\u1EA3 l\u1EDDi sai":e.phase==="answering"?"\u0110ang c\xF3 ng\u01B0\u1EDDi tr\u1EA3 l\u1EDDi":"B\u1EA4M CHU\xD4NG"}</button>
      <div class="buzz-hint">${o?"Ho\u1EB7c nh\u1EA5n ph\xEDm <kbd>Space</kbd>":i?"Ch\u1EDD l\u01B0\u1EE3t sau nh\xE9!":""}</div>
      <div class="guess-list" id="guessList">${a}</div>
    </div>`;let l=de("#buzzBtn");l&&(l.onclick=()=>{Qa(),Ei({t:"buzz"})})}document.addEventListener("keydown",n=>{if(n.code!=="Space"||/INPUT|TEXTAREA/.test(document.activeElement?.tagName))return;let e=de("#buzzBtn");e&&!e.disabled&&(n.preventDefault(),e.click())});function Bm(){let n=V.pub,e=n.turn,t=[...n.players].sort((i,s)=>s.score-i.score);de("#scoreBox").innerHTML=`<div class="sb-head"><b>B\u1EA3ng \u0111i\u1EC3m</b></div>${t.map((i,s)=>`
    <div class="sb-row ${i.cid===V.cid?"me":""} ${i.connected?"":"offline"} ${i.pid&&V.speaking.has(i.pid)||i.cid===V.cid&&V.speaking.has("self")?"speaking":""}">
      <span class="rank">${s+1}</span>${jn(i,"sm")}<span class="nm">${Ke(i.name)}</span>
      ${e?.actor===i.cid&&n.phase!=="lobby"&&n.phase!=="end"?'<span class="tag act">\u{1F3AD} di\u1EC5n</span>':""}
      ${e?.locked?.includes(i.cid)?'<span class="tag no">\u2716</span>':""}
      <b class="pt">${i.score}</b></div>`).join("")}`}function iw(){let n=de("#chatInput"),e=ai();n.disabled=e,n.placeholder=e?"B\u1EA1n \u0111ang di\u1EC5n \u2014 kh\xF4ng \u0111\u01B0\u1EE3c chat! \u{1F910}":"Nh\u1EAFn cho m\u1ECDi ng\u01B0\u1EDDi..."}function Zu(n){V.chat.push(n),V.chat.length>300&&V.chat.shift();let e=de("#chatList"),t=e.scrollHeight-e.scrollTop-e.clientHeight<80;e.insertAdjacentHTML("beforeend",rw(n)),(t||n.cid===V.cid)&&(e.scrollTop=e.scrollHeight),n.k==="m"&&de(".room-body").dataset.tab==="stage"&&innerWidth<=900&&(V.unread++,de("#chatBadge").textContent=V.unread,de("#chatBadge").classList.remove("hidden"))}var sw={correct:"\u{1F389}",wrong:"\u274C",reveal:"\u{1F4A1}",win:"\u{1F3C6}",phase:"\u{1F3AD}",join:"\u{1F44B}",leave:"\u{1F6AA}",info:"\u2139\uFE0F"};function rw(n){return n.k==="sys"?`<div class="sys ${n.kind==="correct"?"day":n.kind==="wrong"?"death":n.kind==="win"?"win":""}"><span>${sw[n.kind]||"\u2022"}</span><span>${Ke(n.text)}</span></div>`:`<div class="msg ${n.cid===V.cid?"mine":""} ${n.masked?"masked":""}">${jn(n,"sm")}<div class="body"><div class="nm">${Ke(n.name)}</div>${Ke(n.text)}</div></div>`}de("#chatForm").onsubmit=n=>{n.preventDefault();let e=de("#chatInput"),t=e.value.trim();!t||!V.pub||e.disabled||(e.value="",V.isHost?Pm(V.cid,t):V.hostPid&&V.net.send("chat",{text:t},V.hostPid))};Tt(".mobile-tabs button").forEach(n=>n.onclick=()=>{de(".room-body").dataset.tab=n.dataset.tab,Tt(".mobile-tabs button").forEach(e=>e.classList.toggle("active",e===n)),n.dataset.tab==="side"&&(V.unread=0,de("#chatBadge").classList.add("hidden"))});Tt(".mt-ic").forEach(n=>n.innerHTML=Di(n.dataset.ic));function zm(){let n=V.pub;if(!n||n.phase!=="end")return;let e=[...n.players].sort((r,a)=>a.score-r.score),t=[e[1],e[0],e[2]],i=de("#overlay");i.dataset.kind="end",i.innerHTML=`<div class="modal panel wide">
    <h2>\u{1F3C6} B\u1EA3ng v\xE0ng di\u1EC5n vi\xEAn</h2>
    <div class="podium">${t.map((r,a)=>r?`<div class="pod p${[2,1,3][a]}">${jn(r,"xl")}<b>${Ke(r.name)}</b><span>${r.score} \u0111i\u1EC3m</span><div class="step">${[2,1,3][a]}</div></div>`:"<div></div>").join("")}</div>
    <div class="end-list">${e.slice(3).map((r,a)=>`<div class="end-row">${jn(r,"sm")}<div><div class="nm">#${a+4} ${Ke(r.name)}</div><div class="rr">${r.score} \u0111i\u1EC3m \xB7 \u0111o\xE1n \u0111\xFAng ${r.correct}</div></div></div>`).join("")}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn" id="endClose">\u0110\xF3ng</button>${V.isHost?'<button class="btn primary" id="endLobby">Ch\u01A1i v\xE1n m\u1EDBi</button>':""}</div>
  </div>`,i.classList.remove("hidden"),i.onclick=r=>{r.target===i&&Rr()},de("#endClose").onclick=Rr;let s=de("#endLobby");s&&(s.onclick=()=>{Rr(),Ei({t:"lobby"})}),e[0]?.cid===V.cid&&dc()}function Rr(){let n=de("#overlay");n.classList.add("hidden"),n.innerHTML="",n.dataset.kind=""}function Hm(){if(!V.voice)return;let n=ai();V.voice.setRules({canSpeak:!n,canHear:()=>!0}),Il()}function Il(){let n=V.voice,e=de("#micBtn"),t=de("#deafBtn"),i=ai();if(!n||!n.enabled)e.className="icon-btn",e.innerHTML=Di("micOff"),e.title="B\u1EADt voice chat";else{let s=n.micOn&&!i;e.className=`icon-btn ${s?"on":"off"} ${i?"locked":""}`,e.innerHTML=Di(s?"mic":"micOff"),e.title=i?"Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c n\xF3i":n.micOn?"T\u1EAFt mic":"B\u1EADt mic"}t.className=`icon-btn ${n?.deaf?"off":""}`,t.innerHTML=Di(n?.deaf?"speakerOff":"speaker")}de("#micBtn").onclick=async()=>{let n=V.voice;if(n){if(n.enabled)n.setMic(!n.micOn),n.micOn&&ai()&&nn("Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c n\xF3i!");else try{await n.enable(),Hm(),nn(ai()?"B\u1EA1n \u0111ang di\u1EC5n \u2014 mic t\u1EA1m kho\xE1":"\u0110\xE3 b\u1EADt voice chat")}catch{nn("Kh\xF4ng truy c\u1EADp \u0111\u01B0\u1EE3c micro. H\xE3y cho ph\xE9p quy\u1EC1n micro trong tr\xECnh duy\u1EC7t.",!0)}Il()}};de("#deafBtn").onclick=()=>{let n=V.voice;n&&(n.ensureCtx(),n.setDeaf(!n.deaf),Il())};function aw(n){(n.size!==V.speaking.size||[...n].some(t=>!V.speaking.has(t)))&&(V.speaking=n,V.pub&&Bm())}qM();})();
