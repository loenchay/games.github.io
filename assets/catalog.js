(()=>{var ud=Object.defineProperty;var wm=(t,e,n)=>e in t?ud(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Sm=(t,e)=>()=>(t&&(e=t(t=0)),e);var Tm=(t,e)=>{for(var n in e)ud(t,n,{get:e[n],enumerable:!0})};var yn=(t,e,n)=>wm(t,typeof e!="symbol"?e+"":e,n);var Bu={};Tm(Bu,{createEvent:()=>Nu,defaultRelayUrls:()=>Fu,getRelaySockets:()=>I1,joinRoom:()=>k1,pauseRelayReconnection:()=>_u,resumeRelayReconnection:()=>bu,selfId:()=>Gn,subscribe:()=>A1});var uc,Di,ra,Zd,Kd,Pm,Zn,Md,Vn,Rm,km,jd,Jd,Qd,wd,$s,pc,Im,aa,Ve,eo,Lm,eu,Sd,Td,Xl,Yl,tu,Ad,Zr,nu,to,Nm,iu,zn,Ys,ds,Kr,Dm,us,ja,gi,Um,Ed,Om,Fm,Bm,su,ac,oc,mc,gc,ru,au,ou,zm,lu,cu,hu,fu,Hm,Vm,Gm,du,uu,pu,mu,Wm,Cd,Pd,$m,lc,qm,Xm,Kn,Jr,Ym,Zs,Gn,ps,gu,hs,yu,Bn,Ws,xn,xu,xt,mt,qs,Ni,Zm,Km,Ui,cs,Qr,ea,jm,Jm,Tn,Xs,vu,Rd,kd,Wr,jr,cc,_u,bu,Qm,eg,tg,yc,Zl,ng,ig,no,ta,sg,rg,Mu,wu,ag,og,xc,lg,cg,hg,Kl,fg,dg,ug,pg,mg,Id,gg,$r,yg,xg,Ld,Nd,vg,_g,jl,bg,Jl,Dd,Ql,Za,ls,qr,Mg,Ud,Od,Fd,wg,Sg,Tg,Ag,Eg,Gs,ec,Bd,Cg,Xa,Pg,zd,Hd,Su,Rg,Vd,kg,Li,Yr,Gd,Ig,Lg,Tu,Au,Wd,Ng,Dg,Eu,Ug,Og,Fg,Bg,zg,Hg,hc,Ja,Vg,Gg,Xr,Wg,Cu,$g,qg,Xg,io,na,Hn,Ka,fc,vc,$d,Yg,ia,Zg,Kg,Pu,jg,Jg,Qg,e1,t1,n1,i1,Ya,s1,r1,a1,o1,l1,c1,h1,tc,f1,d1,nc,qd,ic,u1,Ru,p1,ku,Iu,m1,g1,y1,Lu,x1,sc,Xd,Qa,v1,_1,sa,dc,fs,Yd,b1,rc,M1,w1,S1,T1,_c,bc,Nu,A1,mi,Du,E1,C1,Uu,P1,Ou,R1,k1,I1,Fu,zu=Sm(()=>{uc=Object.freeze,Di=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,ra=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Zd=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,Kd=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,Pm=uc({p:Di,n:ra,h:1n,a:0n,b:7n,Gx:Zd,Gy:Kd}),Zn=32,Md=t=>t instanceof Uint8Array||ArrayBuffer.isView(t)&&t.constructor.name==="Uint8Array"&&t.BYTES_PER_ELEMENT===1,Vn=(t,e,n="")=>{if(Md(t)&&(e===void 0||t.length===e))return t;let i=Md(t),s=e!==void 0?` of length ${e}`:"",r=i?`length=${t.length}`:`type=${typeof t}`,a=(n?`"${n}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(a):new TypeError(a)},Rm=t=>Uint8Array.from(t),km=(t,e,n)=>Rm(Vn(t,n,e)),jd=(t,e)=>t.toString(16).padStart(e,"0"),Jd=t=>{let e="";for(let n of Vn(t))e+=jd(n,2);return e},Qd=t=>{let e="hex invalid";if(typeof t!="string")throw new TypeError(e);if(t.length%2||!/^[\da-f]*$/i.test(t))throw new RangeError(e);let n=new Uint8Array(t.length/2);for(let i=0,s=0;i<n.length;i++,s+=2){let r=t.charCodeAt(s),a=t.charCodeAt(s+1);n[i]=((r&15)+(r>>6)*9)*16+(a&15)+(a>>6)*9}return n},wd=()=>{let t=globalThis?.crypto?.subtle;if(t)return t;throw new Error("crypto.subtle must be defined, consider polyfill")},$s=(...t)=>{let e=0;for(let s of t)e+=Vn(s).length;let n=new Uint8Array(e),i=0;for(let s of t)n.set(s,i),i+=s.length;return n},pc=(t=Zn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(t))},Im=BigInt,aa=(t,e,n,i="bad number: out of range")=>{if(typeof t!="bigint")throw new TypeError(i);if(e<=t&&t<n)return t;throw new RangeError(i)},Ve=(t,e=Di)=>(t%=e)>=0n?t:e+t,eo=t=>Ve(t,ra),Lm=(t,e)=>{if(t===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let n=Ve(t,e),i=e,s=0n,r=1n;for(;n!==0n;){let a=i/n,o=i-n*a,l=s-r*a;i=n,n=o,s=r,r=l}if(i!==1n)throw new Error("invert: does not exist");return Ve(s,e)},eu=t=>{let e=Om[t];if(typeof e!="function")throw new Error("hashes."+t+" not set");return e},Sd=(t,e,n)=>Vn(eu(t)(e,n),Zn,"digest"),Td=async(t,e,n)=>Vn(await eu(t)(e,n),Zn,"digest"),Xl=t=>{if(t instanceof Ys)return t;throw new TypeError("Point expected")},Yl="bad point: not on curve",tu=t=>Ve(Ve(t*t)*t+7n),Ad=t=>aa(t,0n,Di),Zr=t=>aa(t,1n,Di),nu=t=>aa(t,1n,ra),to=t=>!(t&1n),Nm=t=>Uint8Array.of(to(t)?2:3),iu=t=>{let e=tu(Zr(t)),n=1n;for(let i=e,s=(Di+1n)/4n;s>0n;s>>=1n)s&1n&&(n=n*i%Di),i=i*i%Di;if(Ve(n*n)!==e)throw new Error("sqrt invalid");return new Ys(t,to(n)?n:Ve(-n),1n)},Ys=(zn=class{constructor(e,n,i){yn(this,"X");yn(this,"Y");yn(this,"Z");this.X=Ad(e),this.Y=Zr(n),this.Z=Ad(i),uc(this)}static CURVE(){return Pm}static fromAffine(e){let{x:n,y:i}=e;return n===0n&&i===0n?Kr:new zn(n,i,1n)}static fromBytes(e){Vn(e);let n=e.length,i=e[0],s=ja(e,1,33);try{if(n===33&&(i===2||i===3)){let r=iu(s);return i===3?r.negate():r}if(n===65&&i===4)return new zn(s,ja(e,33,65),1n).assertValidity()}catch{throw new Error(Yl)}throw new Error(Yl)}static fromHex(e){return zn.fromBytes(Qd(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:n,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Xl(e);return Ve(n*o)===Ve(r*s)&&Ve(i*o)===Ve(a*s)}is0(){return this.Z===0n}negate(){return new zn(this.X,Ve(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:n,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Xl(e),l=0n,c=7n,h=0n,d=0n,f=0n,u=Ve(c*3n),p=Ve(n*r),y=Ve(i*a),g=Ve(s*o),m=Ve(n+i),b=Ve(r+a);m=Ve(m*b),b=Ve(p+y),m=Ve(m-b),b=Ve(n+s);let x=Ve(r+o);return b=Ve(b*x),x=Ve(p+g),b=Ve(b-x),x=Ve(i+s),h=Ve(a+o),x=Ve(x*h),h=Ve(y+g),x=Ve(x-h),f=Ve(l*b),h=Ve(u*g),f=Ve(h+f),h=Ve(y-f),f=Ve(y+f),d=Ve(h*f),y=Ve(p+p),y=Ve(y+p),g=Ve(l*g),b=Ve(u*b),y=Ve(y+g),g=Ve(p-g),g=Ve(l*g),b=Ve(b+g),p=Ve(y*b),d=Ve(d+p),p=Ve(x*b),h=Ve(m*h),h=Ve(h-p),p=Ve(m*y),f=Ve(x*f),f=Ve(f+p),new zn(h,d,f)}subtract(e){return this.add(Xl(e).negate())}multiply(e,n=!0){if(!n&&e===0n)return Kr;if(nu(e),e===1n)return this;if(this.equals(ds))return $m(e).p;let i=Kr,s=ds,r=this;for(let a=0;n?a<256:e>0n;a++)e&1n?i=i.add(r):n&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:n,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:n};let s=Lm(i,Di);if(Ve(i*s)!==1n)throw new Error("inverse invalid");return{x:Ve(e*s),y:Ve(n*s)}}assertValidity(){let{x:e,y:n}=this.toAffine();if(Zr(e),Zr(n),Ve(n*n)!==tu(e))throw new Error(Yl);return this}toBytes(e=!0){let{x:n,y:i}=this.assertValidity().toAffine(),s=gi(n);return e?$s(Nm(i),s):$s(Uint8Array.of(4),s,gi(i))}toHex(e){return Jd(this.toBytes(e))}},yn(zn,"BASE"),yn(zn,"ZERO"),zn),ds=new Ys(Zd,Kd,1n),Kr=new Ys(0n,1n,0n);Ys.BASE=ds;Ys.ZERO=Kr;Dm=(t,e,n)=>ds.multiply(e,!1).add(t.multiply(n,!1)).assertValidity(),us=t=>Im("0x"+(Jd(t)||"0")),ja=(t,e,n)=>us(t.subarray(e,n)),gi=t=>Qd(jd(aa(t,0n,2n**256n),Zn*2)),Um=t=>{let e=us(Vn(t,Zn,"secret key"));return aa(e,1n,ra,"invalid secret key: outside of range")},Ed="SHA-256",Om={hmacSha256Async:async(t,e)=>{let n=wd(),i=await n.importKey("raw",t,{name:"HMAC",hash:Ed},!1,["sign"]);return new Uint8Array(await n.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async t=>new Uint8Array(await wd().digest(Ed,t)),sha256:void 0},Fm=t=>{if(t=t===void 0?pc(48):t,Vn(t),t.length<48||t.length>1024)throw new RangeError("expected 48-1024b");let e=Ve(us(t),ra-1n);return gi(e+1n)},Bm=t=>e=>{let n=Fm(e);return{secretKey:n,publicKey:t(n)}},su=t=>Uint8Array.from("BIP0340/"+t,e=>e.charCodeAt(0)),ac=(t,...e)=>{let n=Sd("sha256",su(t));return Sd("sha256",$s(n,n,...e))},oc=(t,...e)=>Td("sha256Async",su(t)).then(n=>Td("sha256Async",$s(n,n,...e))),mc=t=>{let e=Um(t),n=ds.multiply(e),{x:i,y:s}=n.assertValidity().toAffine(),r=to(s)?e:eo(-e),a=gi(i);return{d:r,px:a}},gc=t=>eo(us(t)),ru=(...t)=>gc(ac("challenge",...t)),au=async(...t)=>gc(await oc("challenge",...t)),ou=t=>mc(t).px,zm=Bm(ou),lu=(t,e,n)=>{let i=km(t,"message"),{px:s,d:r}=mc(e);return{m:i,px:s,d:r,a:Vn(n,Zn)}},cu=t=>{let e=gc(t);if(e===0n)throw new Error("sign failed: k is zero");let{px:n,d:i}=mc(gi(e));return{rx:n,k:i}},hu=(t,e,n,i)=>$s(e,gi(eo(t+n*i))),fu="invalid signature produced",Hm=(t,e,n=pc(Zn))=>{let{m:i,px:s,d:r,a}=lu(t,e,n),o=gi(r^us(ac("aux",a))),{rx:l,k:c}=cu(ac("nonce",o,s,i)),h=hu(c,l,ru(l,s,i),r);if(!uu(h,i,s))throw new Error(fu);return h},Vm=async(t,e,n=pc(Zn))=>{let{m:i,px:s,d:r,a}=lu(t,e,n),o=gi(r^us(await oc("aux",a))),{rx:l,k:c}=cu(await oc("nonce",o,s,i)),h=hu(c,l,await au(l,s,i),r);if(!await pu(h,i,s))throw new Error(fu);return h},Gm=(t,e)=>t instanceof Promise?t.then(e):e(t),du=(t,e,n,i)=>{let s=Vn(t,64,"signature"),r=Vn(e,void 0,"message"),a=Vn(n,Zn,"publicKey"),o,l,c,h;try{let d=us(a);o=iu(d),l=Zr(ja(s,0,Zn)),c=nu(ja(s,Zn,64)),h=$s(gi(l),a,r)}catch{return!1}return Gm(i(h),d=>{try{let{x:f,y:u}=Dm(o,c,eo(-d)).toAffine();return!(!to(u)||f!==l)}catch{return!1}})},uu=(t,e,n)=>du(t,e,n,ru),pu=async(t,e,n)=>du(t,e,n,au),mu=uc({keygen:zm,getPublicKey:ou,sign:Hm,verify:uu,signAsync:Vm,verifyAsync:pu}),Wm=()=>{let t=[],e=ds,n=e;for(let i=0;i<33;i++){n=e,t.push(n);for(let s=1;s<128;s++)n=n.add(e),t.push(n);e=n.double()}return t},Pd=(t,e)=>{let n=e.negate();return t?n:e},$m=t=>{let e=Cd||(Cd=Wm()),n=Kr,i=ds;for(let s=0;s<33;s++){let r=Number(t&255n);t>>=8n,r>128&&(r-=256,t+=1n);let a=s*128,o=a+Math.abs(r)-1,l=s%2!==0,c=r<0;r===0?i=i.add(Pd(l,e[a])):n=n.add(Pd(c,e[o]))}if(t!==0n)throw new Error("invalid wnaf");return{p:n,f:i}},{floor:lc,min:qm,sin:Xm}=Math,Kn="Trystero",Jr=(t,e)=>Array(t).fill(void 0).map(e),Ym="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",Zs=t=>Jr(t,()=>Ym[lc(Math.random()*62)]??"").join(""),Gn=Zs(20),ps=Promise.all.bind(Promise),gu=typeof window<"u",{entries:hs,fromEntries:yu,keys:Bn,values:Ws}=Object,xn=()=>{},xu="candidate",xt=t=>(t!==null&&clearTimeout(t),null),mt=t=>new Error(`${Kn}: ${t}`),qs=(t,e)=>t instanceof Error&&t.message?t.message:typeof t=="string"&&t?t:Tn(t??e),Ni=(t,e)=>t instanceof Error?t:mt(qs(t,e)),Zm=new TextEncoder,Km=new TextDecoder,Ui=t=>Zm.encode(t),cs=t=>Km.decode(t),Qr=t=>t.reduce((e,n)=>e+n.toString(16).padStart(2,"0"),""),ea=(...t)=>t.join("@"),jm=(t,e)=>{let n=[...t],i=()=>{let r=Xm(e++)*1e4;return r-lc(r)},s=n.length;for(;s;){let r=lc(i()*s--),a=n[s];n[s]=n[r],n[r]=a}return n},Jm=(t,e,n,i=!1)=>t.relayConfig?.urls||(i?jm(e,vu(t.appId)):e).slice(0,t.relayConfig?.redundancy??n),Tn=JSON.stringify,Xs=t=>{try{return JSON.parse(t)}catch{throw mt(`failed to parse JSON: ${t}`)}},vu=(t,e=Number.MAX_SAFE_INTEGER)=>t.split("").reduce((n,i)=>n+i.charCodeAt(0),0)%e,Rd=3333,kd=6e4,Wr={},jr=null,cc=null,_u=()=>{jr||(jr=new Promise(t=>{cc=t}).finally(()=>{cc=null,jr=null}))},bu=()=>{cc?.()},Qm=(t,e,n)=>{let i={},s=!1,r=!1,a,o=xn;i.isClosed=!1,i.ready=new Promise(c=>o=c);let l=()=>{if(i.isClosed)return;a=void 0,r=!1;let c=new WebSocket(t);c.onclose=()=>{if(i.isClosed||r)return;if(r=!0,jr){jr.then(l);return}let h=Wr[t]??(Wr[t]=Rd);if(h>=kd){i.isClosed=!0;return}a=setTimeout(l,Math.random()*h),Wr[t]=qm(h*2,kd)},c.onmessage=h=>e(String(h.data)),i.socket=c,i.url=c.url,c.onopen=()=>{let h=s;s=!0,o(i),Wr[t]=Rd,h&&n?.()},i.send=h=>{c.readyState===1&&c.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},l(),i},eg=t=>{let e={},n=new WeakMap,i=a=>{let o=n.get(a);if(!o)throw mt("relay bookkeeping missing registration for relay client");return o},s=()=>{let a={},o=l=>a[l]??(a[l]={});return{forKey:o,forRelay:l=>o(i(l))}},r=(a,o)=>(e[a]=o,n.set(o,a),o);return{register:(a,o)=>e[a]||r(a,o()),keyOf:i,scoped:s,getSockets:()=>yu(hs(e).flatMap(([a,o])=>{let l=t(o);return l?[[a,l]]:[]}))}},tg=()=>{if(gu){let t=new AbortController;return addEventListener("online",bu,{signal:t.signal}),addEventListener("offline",_u,{signal:t.signal}),()=>t.abort()}return xn},yc="AES-GCM",Zl={},ng=t=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(t)))),ig=t=>{let e=atob(t);return new Uint8Array(e.length).map((n,i)=>e.charCodeAt(i)).buffer},no=async(t,e)=>new Uint8Array(await crypto.subtle.digest(t,Ui(e))),ta=async t=>Zl[t]??(Zl[t]=Array.from(await no("SHA-1",t)).map(e=>e.toString(36)).join("")),sg=async(t,e,n)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Ui(`${t}:${e}:${n}`)),{name:yc},!1,["encrypt","decrypt"]),rg=async(t,e)=>Qr(await no("SHA-256",`${Kn}:${t}:${e}`)),Mu="$",wu=",",ag=async(t,e)=>{let n=crypto.getRandomValues(new Uint8Array(16));return n.join(wu)+Mu+ng(await crypto.subtle.encrypt({name:yc,iv:n},await t,Ui(e)))},og=async(t,e)=>{let[n,i]=e.split(Mu);return cs(await crypto.subtle.decrypt({name:yc,iv:new Uint8Array(n?.split(wu).map(Number)??[])},await t,ig(i??"")))},xc=57333,lg=18e4,cg=20,hg=class{constructor(t){yn(this,"makeOffer");yn(this,"pool",[]);yn(this,"pooled",new Set);yn(this,"leased",new Map);yn(this,"recycling",new Set);yn(this,"cleanupTimer",null);yn(this,"active",!1);this.makeOffer=t}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Jr(cg,this.makeOffer).forEach(t=>this.push(t)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(t=>t.isDead?(this.pooled.delete(t),!1):!0)},xc)}push(t){t.isDead||this.pooled.has(t)||this.leased.has(t)||(this.pool.push(t),this.pooled.add(t))}shift(t){let e=[];for(;e.length<t&&this.pool.length>0;){let n=this.pool.shift();if(!n)break;this.pooled.delete(n),e.push(n)}return e}claimLeased(t){let e=this.leased.get(t);e&&(xt(e),this.leased.delete(t))}recycle(t){if(!(t.isDead||this.recycling.has(t))){if(t.connection.remoteDescription){t.destroy();return}if(!this.active){t.destroy();return}this.recycling.add(t),t.setHandlers({connect:xn,close:xn,error:xn}),t.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||t.isDead||!this.active){t.destroy();return}this.push(t)}).catch(()=>t.destroy()).finally(()=>this.recycling.delete(t))}}reclaimLeased(t){let e=this.leased.get(t);e&&(xt(e),this.leased.delete(t),this.recycle(t))}lease(t){this.claimLeased(t),this.leased.set(t,setTimeout(()=>{this.leased.delete(t),this.recycle(t)},lg))}checkout(t,e,n){let i=this.shift(t),s=Math.max(0,t-i.length);s>0&&i.push(...Jr(s,this.makeOffer));let r=async(a,o=!1)=>{try{let l=await n(a);return e?(this.lease(a),{peer:a,offer:l,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:l}}catch(l){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return r(this.makeOffer(),!0);throw l}};return ps(i.map(a=>r(a)))}getOffers(t,e){return this.checkout(t,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(t=>t.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((t,e)=>{xt(t),e.destroy()}),this.leased.clear(),this.recycling.forEach(t=>t.destroy()),this.recycling.clear()}},Kl=mt("incorrect password for overlapping room"),fg=(t,e,n)=>{let i=r=>no("SHA-256",`${r}:${t}:${e}:${n}`).then(Qr),s=async(r,a,o)=>{if(!t)return;if(o){let c=Zs(36);await r({__trystero_pw:"challenge",c});let{data:h}=await a();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw Kl;let d=await i(c);if(h.h!==d)throw Kl;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Kl;await r({__trystero_pw:"response",h:await i(l.c)})};return{run:s,compose:r=>t||r?async(a,o,l,c)=>{await s(o,l,c),await r?.(a,o,l,c)}:void 0}},dg=t=>{let e=qs(t,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},ug=({onPeerHandshake:t,onHandshakeError:e,handshakeTimeoutMs:n,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:a})=>{let o={},l=(d,f)=>{let u=o[d];!u||f&&u.peer!==f||u.isActive||!u.didLocalHandshakePass||!u.didReceiveRemoteReady||(u.isActive=!0,u.handshakeTimer=xt(u.handshakeTimer),r(d,u.peer))},c=(d,f,u)=>{let p=o[d];if(!p||p.peer!==f)return;let y=dg(u);e?.(d,y),a(d,f,mt(y))},h=(d,f)=>{let u=o[d];!u||u.peer!==f||u.isActive||(u.didLocalHandshakePass=!0,s("",d).catch(p=>c(d,f,mt(`failed sending handshake readiness: ${qs(p,"unknown send failure")}`))),l(d,f))};return{addPeer:(d,f)=>{o[d]={peer:f,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(d,f)=>{let u=o[d];u&&(u.handshakeTimer=xt(u.handshakeTimer),u.pendingHandshakePayloads.length=0,u.handshakeWaiters.splice(0).forEach(p=>p.reject(f)),delete o[d])},canReceiveFromPeer:(d,f)=>{let u=o[d];return!!(u&&(u.isActive||f))},start:(d,f)=>{let u=o[d];if(!u||u.peer!==f)return;u.handshakeTimer=setTimeout(()=>c(d,f,mt(`handshake timed out after ${n}ms`)),n);let p=async(m,b)=>{await i(m,d,b)},y=()=>new Promise((m,b)=>{let x=o[d];if(!x||x.peer!==f){b(mt("peer disconnected during handshake"));return}let v=x.pendingHandshakePayloads.shift();if(v){m(v);return}x.handshakeWaiters.push({resolve:m,reject:C=>b(C)})}),g=Gn<d;Promise.resolve(t?.(d,p,y,g)).then(()=>h(d,f)).catch(m=>c(d,f,Ni(m,"handshake failed")))},receiveHandshakeData:(d,f,u)=>{let p=o[f];if(!p||p.isActive)return;let y=u===void 0?{data:d}:{data:d,metadata:u},g=p.handshakeWaiters.shift();if(g){g.resolve(y);return}p.pendingHandshakePayloads.push(y)},receiveHandshakeReady:d=>{let f=o[d];!f||f.isActive||(f.didReceiveRemoteReady=!0,l(d))}}},pg=15e3,mg=5e3,Id="icegatheringstatechange",gg="iceconnectionstatechange",$r="offer",yg="answer",xg=/out of range/i,Ld=t=>t.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Nd=(t,{trickleIce:e,rtcConfig:n,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let a=new(i??RTCPeerConnection)({iceServers:vg.concat(s??[]),...n}),o={},l=[],c=[],h=e!==!1,d=[],f=[],u=!1,p=!1,y=null,g=null,m=!1,b=()=>g=xt(g),x=()=>{m||(m=!0,b(),o.close?.())},v=G=>{o.signal?o.signal(G):l.push(G)},C=G=>{let se=o.signal;o.signal=Ue=>{se?.(Ue),G(Ue)},l.length>0&&l.splice(0).forEach(Ue=>o.signal?.(Ue))},S=G=>r?Ld(G):G,E=G=>{if(!r||typeof G.candidate!="string")return G;let se=Ld(G.candidate);return se===G.candidate?G:{...G,candidate:se}},k=G=>({type:G.localDescription?.type??$r,sdp:S(G.localDescription?.sdp??"")}),J=()=>{let G=a.remoteDescription?.sdp;return G?G.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},_=()=>(a.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,w=G=>{if(!a.remoteDescription)return!1;let se=_();if(typeof G.sdpMLineIndex=="number"&&se>0&&G.sdpMLineIndex>=se)return!1;let Ue=J();return!(Ue&&G.usernameFragment&&G.usernameFragment!==Ue)},q=async G=>{try{return await a.addIceCandidate(G),!0}catch(se){if(se instanceof Error&&xg.test(se.message)&&typeof G.sdpMLineIndex=="number")return!1;throw se}},z=async()=>{if(!a.remoteDescription||d.length===0)return;let G=d.splice(0),se=[];for(let Ue of G){if(!w(Ue)){se.push(Ue);continue}await q(Ue)||se.push(Ue)}se.length>0&&d.push(...se)},P=async G=>{if(w(G)){await q(G)||d.push(G);return}d.push(G)},D=G=>{G.binaryType="arraybuffer",G.bufferedAmountLowThreshold=65535,G.onmessage=se=>{let Ue=se.data;o.data?o.data(Ue):c.push(Ue)},G.onopen=()=>o.connect?.(),G.onclose=x,G.onerror=({error:se})=>o.error?.(Ni(se,"data channel error"))},U=async G=>{let se=null;try{await Promise.race([new Promise(Ue=>{let ne=()=>{G.iceGatheringState==="complete"&&(G.removeEventListener(Id,ne),Ue())};G.addEventListener(Id,ne),ne()}),new Promise(Ue=>{se=setTimeout(Ue,pg)})])}finally{xt(se)}return k(G)},Z=async()=>{let G=h?k(a):await U(a);return v(G),G};t?(y=a.createDataChannel("data"),D(y)):a.ondatachannel=({channel:G})=>{y=G,D(G)};let V=async(G=!1)=>{if(a.connectionState!=="closed")try{return u=!0,G&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&a.localDescription?.type===$r&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(G?await a.createOffer({iceRestart:!0}):void 0),await Z()}catch(se){o.error?.(Ni(se,"failed to create local offer"))}finally{u=!1}};a.onnegotiationneeded=async()=>V(!1),a.onicecandidate=({candidate:G})=>{if(!h||!G)return;let se=E(typeof G.toJSON=="function"?G.toJSON():{candidate:G.candidate,sdpMid:G.sdpMid,sdpMLineIndex:G.sdpMLineIndex,usernameFragment:G.usernameFragment});v({type:xu,sdp:JSON.stringify(se)})};let xe=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){x();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){b();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){g||(g=setTimeout(()=>{g=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&x()},mg));return}};a.onconnectionstatechange=xe,a.addEventListener(gg,xe),a.ontrack=G=>{let se=G.streams[0];if(se){if(!o.track&&!o.stream){f.push({track:G.track,stream:se});return}o.track?.(G.track,se),o.stream?.(se)}},a.onremovestream=G=>o.stream?.(G.stream);let pe=t?new Promise(G=>C(se=>{se.type===$r&&G(se)})):Promise.resolve();return t&&queueMicrotask(()=>{!u&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&a.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:a,get channel(){return y},get isDead(){return a.connectionState==="closed"},getOffer:async(G=!1)=>{if(t)return G?V(!0):a.localDescription?.type===$r?h?k(a):U(a):pe},async signal(G){if(G.type==="candidate"){try{let se=JSON.parse(G.sdp);se&&typeof se=="object"&&await P(E(se))}catch(se){o.error?.(Ni(se,"failed to parse remote candidate"))}return}if(!(y?.readyState==="open"&&!G.sdp?.includes("a=rtpmap")))try{let se={...G,sdp:S(G.sdp)};if(G.type===$r){if(u||a.signalingState!=="stable"&&!p){if(t)return;await ps([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(se)])}else await a.setRemoteDescription(se);return await z(),await a.setLocalDescription(),await Z()}if(G.type===yg){p=!0;try{await a.setRemoteDescription(se),await z()}finally{p=!1}}}catch(se){o.error?.(Ni(se,"failed to apply remote signal"))}},sendData:G=>y?.send(G),destroy:()=>{b(),y?.close(),a.close(),u=!1,p=!1,x()},setHandlers:G=>{let{signal:se,...Ue}=G;Object.assign(o,Ue),o.data&&c.length>0&&c.splice(0).forEach(ne=>o.data?.(ne)),se&&C(se),(o.track||o.stream)&&f.length>0&&f.splice(0).forEach(({track:ne,stream:he})=>{o.track?.(ne,he),o.stream?.(he)})},offerPromise:pe,addStream:G=>G.getTracks().forEach(se=>a.addTrack(se,G)),removeStream:G=>a.getSenders().filter(se=>se.track&&G.getTracks().includes(se.track)).forEach(se=>a.removeTrack(se)),addTrack:(G,se)=>a.addTrack(G,se),removeTrack:G=>{let se=a.getSenders().find(Ue=>Ue.track===G);se&&a.removeTrack(se)},replaceTrack:(G,se)=>{let Ue=a.getSenders().find(ne=>ne.track===G);if(Ue)return Ue.replaceTrack(se)}}},vg=[...Jr(3,(t,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(t=>({urls:t})),_g=Object.getPrototypeOf(Uint8Array),jl=32,bg=0,Jl=32,Dd=34,Ql=35,Za=36,ls=16*2**10-Za,qr=255,Mg=65535,Ud="bufferedamountlow",Od="close",Fd="error",wg=1e4,Sg=t=>t instanceof ArrayBuffer?new Uint8Array(t):new Uint8Array(t.buffer,t.byteOffset,t.byteLength),Tg=(t,e=wg)=>t.readyState!=="open"||t.bufferedAmount<=t.bufferedAmountLowThreshold?Promise.resolve(t.readyState==="open"):new Promise(n=>{let i=!1,s=null,r=l=>{i||(i=!0,t.removeEventListener(Ud,a),t.removeEventListener(Od,o),t.removeEventListener(Fd,o),xt(s),n(l))},a=()=>r(!0),o=()=>r(!1);if(t.addEventListener(Ud,a),t.addEventListener(Od,o),t.addEventListener(Fd,o),s=setTimeout(()=>r(!1),e),t.readyState!=="open"){r(!1);return}t.bufferedAmount<=t.bufferedAmountLowThreshold&&r(!0)}),Ag=({getPeer:t,getPeerIds:e,canReceiveFromPeer:n,throwIfAborted:i})=>{let s={},r={},a={},o={},l=(c,h,{includePending:d=!1}={})=>(c?Array.isArray(c)?c:[c]:e(d)).flatMap(f=>{let u=t(f,d);return u?[Promise.resolve(h(f,u))]:(console.warn(`${Kn}: no peer with id ${f} found`),[])});return{makeInternalAction:(c,h={})=>{let d=r[c];if(s[c]&&d){let g=s[c].options;if(g.sendToPending!==!!h.sendToPending||g.receiveWhilePending!==!!h.receiveWhilePending)throw mt(`action type "${c}" cannot be redefined`);return d}if(!c)throw mt("action type argument is required");let f=Ui(c);if(f.byteLength>jl)throw mt(`action type string "${c}" (${f.byteLength}b) exceeds byte limit (${jl}). Hint: choose a shorter name.`);let u={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},p=new Uint8Array(jl);p.set(f);let y=0;return s[c]={onComplete:xn,onProgress:xn,setOnComplete:g=>{s[c].onComplete=g;let m=o[c];m?.length&&(delete o[c],m.forEach(({payload:b,peerId:x,metadata:v})=>g(b,x,v)))},setOnProgress:g=>{s[c].onProgress=g},send:async(g,m,b,x,v)=>{i(v);let C=typeof g;if(C==="undefined")throw mt("action data cannot be undefined");let S=C!=="string",E=g instanceof Blob,k=E||g instanceof ArrayBuffer||g instanceof _g,J=b!==void 0,_=k?Sg(E?await g.arrayBuffer():g):Ui(S?Tn(g):g),w=J?Ui(Tn(b)):null,q=Math.ceil(_.byteLength/ls)+(J?1:0)||1,z=Jr(q,(P,D)=>{let U=D===q-1,Z=!!(J&&D===0),V=new Uint8Array(Za+(Z?w?.byteLength??0:U?_.byteLength-ls*(q-(J?2:1)):ls));return V.set(p),V.set([y>>8,y&qr],Jl),V.set([Number(U)|Number(Z)<<1|Number(k)<<2|Number(S)<<3],Dd),V.set([Math.round((D+1)/q*qr)],Ql),V.set(J?Z?w??new Uint8Array:_.subarray((D-1)*ls,D*ls):_.subarray(D*ls,(D+1)*ls),Za),V});return y=y+1&Mg,await ps(l(m,async(P,D)=>{let{channel:U}=D,Z=0;for(;Z<q;){i(v);let V=z[Z];if(!V)break;if(U&&U.bufferedAmount>U.bufferedAmountLowThreshold){let G=await Tg(U);if(i(v),!G)break}let xe=t(P,u.sendToPending);if(!xe||xe!==D)break;D.sendData(V),Z++;let pe=V[Ql]??qr;x?.(pe/qr,P,b)}},{includePending:u.sendToPending})),[]},options:u},r[c]={send:s[c].send,onMessage:s[c].setOnComplete,onProgress:s[c].setOnProgress}},handleData:(c,h)=>{var J,_;let d=new Uint8Array(h),f=cs(d.subarray(bg,Jl)).replaceAll("\0",""),u=s[f];if(!n(c,!!u?.options.receiveWhilePending))return;let p=(d[Jl]??0)<<8|(d[33]??0),y=d[Dd]??0,g=d[Ql]??0,m=d.subarray(Za),b=!!(y&1),x=!!(y&2),v=!!(y&4),C=!!(y&8);a[c]??(a[c]={}),(J=a[c])[f]??(J[f]={});let S=(_=a[c][f])[p]??(_[p]={chunks:[]});if(x?S.meta=Xs(cs(m)):S.chunks.push(m),u?.onProgress(g/qr,c,S.meta),!b)return;let E=new Uint8Array(S.chunks.reduce((w,q)=>w+q.byteLength,0));S.chunks.reduce((w,q)=>(E.set(q,w),w+q.byteLength),0),delete a[c][f][p];let k=v?E:C?Xs(cs(E)):cs(E);if(u){u.onComplete(k,c,S.meta);return}(o[f]??(o[f]=[])).push({payload:k,peerId:c,...S.meta===void 0?{}:{metadata:S.meta}})},clearPeer:c=>{delete a[c]}}},Eg=500,Gs=(t,e)=>{let n=mt(e);return n.kind=t,n.name=t==="aborted"?"AbortError":n.name,n},ec=t=>{if(t?.aborted)throw Gs("aborted","operation aborted")},Bd=t=>t&&typeof t=="object"&&!Array.isArray(t)&&typeof t.r=="string"?{r:t.r,...Object.hasOwn(t,"m")?{m:t.m}:{}}:null,Cg=t=>t&&typeof t=="object"&&!Array.isArray(t)&&typeof t.r=="string"?{r:t.r,...typeof t.e=="string"?{e:t.e}:{}}:null,Xa=(t,e)=>e===void 0?t:{...t,metadata:e},Pg=({getPeer:t,getPeerIds:e,canReceiveFromPeer:n})=>{let i={},s={},r=Ag({getPeer:t,getPeerIds:e,canReceiveFromPeer:n,throwIfAborted:ec}),a=r.makeInternalAction,o=r.handleData,l=f=>{let u=s[f];u&&(xt(u.timer),u.signal&&u.abortHandler&&u.signal.removeEventListener("abort",u.abortHandler),delete s[f])},c=(f,u)=>{hs(s).forEach(([p,y])=>{y.peerId===f&&(l(p),y.reject(u))})},h=(f,u)=>{r.clearPeer(f),c(f,Gs("disconnected",qs(u,"peer disconnected")))},d=a("@_response");return d.onMessage((f,u,p)=>{let y=Cg(p);if(!y)return;let g=s[y.r];if(!(!g||g.peerId!==u)){if(l(y.r),y.e!==void 0){g.reject(Gs("rejected",y.e));return}g.resolve(f)}}),{makeAction:(f,u)=>{if(u&&"onRequest"in u&&u.kind!=="request")throw mt('request actions must use kind: "request"');let p=u?.kind??"message",y=a(f),g=i[f];if(g){if(g.kind!==p)throw mt(`action type "${f}" cannot be redefined`);return g.action}let m={kind:p,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:u?.onReceiveProgress??null},b=(z,P)=>z?(D,U)=>z(D,Xa({peerId:U},P)):void 0,x=z=>{m.onReceiveProgress=z},v=(z,P,D)=>{let U=m.kind==="request"?Bd(D):null;m.onReceiveProgress?.(z,Xa({peerId:P},U?U.m:D))};if(y.onProgress(v),p==="message"){let z=u?.onMessage??null,P=()=>{if(!z)return;let U=z;m.pendingMessages.splice(0).forEach(({payload:Z,peerId:V,metadata:xe})=>{Promise.resolve().then(()=>U(Z,Xa({peerId:V},xe))).catch(pe=>console.error(`${Kn} action handler error:`,pe))})},D={send:async(U,Z={})=>{await y.send(U,Z.target,Z.metadata,b(Z.onProgress,Z.metadata),Z.signal)},get onMessage(){return z},set onMessage(U){z=U,P()},get onReceiveProgress(){return m.onReceiveProgress},set onReceiveProgress(U){x(U)}};return y.onMessage((U,Z,V)=>{if(!z){m.pendingMessages.push(V===void 0?{payload:U,peerId:Z}:{payload:U,peerId:Z,metadata:V});return}let xe=z;Promise.resolve().then(()=>xe(U,Xa({peerId:Z},V))).catch(pe=>console.error(`${Kn} action handler error:`,pe))}),m.action=D,i[f]=m,P(),D}let C=u?.onRequest??null,S=z=>{xt(z.timer);let P=m.pendingRequests.indexOf(z);P>-1&&m.pendingRequests.splice(P,1)},E=(z,P,D)=>{d.send(null,z,{r:P,e:qs(D,"request failed")})},k=(z,P)=>{S(z),Promise.resolve().then(()=>P(z.payload,{peerId:z.peerId,...z.metadata===void 0?{}:{metadata:z.metadata},signal:z.controller.signal})).then(async D=>{if(D===void 0)throw mt("request handler returned undefined");await d.send(D,z.peerId,{r:z.requestId})}).catch(D=>E(z.peerId,z.requestId,D)).finally(()=>z.controller.abort())},J=()=>{C&&m.pendingRequests.slice().forEach(z=>k(z,C))},_=(z,P,D,U)=>{if(C){let V={payload:z,peerId:P,...D===void 0?{}:{metadata:D},requestId:U,controller:new AbortController,timer:null};k(V,C);return}let Z={payload:z,peerId:P,...D===void 0?{}:{metadata:D},requestId:U,controller:new AbortController,timer:setTimeout(()=>{S(Z),Z.controller.abort(),E(P,U,"request handler unavailable")},Eg)};m.pendingRequests.push(Z)},w=async(z,P)=>{let{target:D,metadata:U,onProgress:Z,signal:V,timeoutMs:xe}=P;if(ec(V),!t(D,!1))throw Gs("disconnected",`no active peer with id ${D}`);let pe=Zs(20),G=new Promise((se,Ue)=>{let ne={peerId:D,resolve:se,reject:Ue,timer:null,...V===void 0?{}:{signal:V}},he=()=>{l(pe),Ue(Gs("aborted","operation aborted"))};V&&(ne.abortHandler=he,V.addEventListener("abort",he,{once:!0})),s[pe]=ne}).catch(se=>{throw se});try{await y.send(z,D,U===void 0?{r:pe}:{r:pe,m:U},b(Z,U),V);let se=s[pe];return se&&xe!==void 0&&(se.timer=setTimeout(()=>{l(pe),se.reject(Gs("timeout","request timed out"))},xe)),await G}catch(se){throw l(pe),se}},q={request:w,requestMany:async(z,P)=>(ec(P.signal),await ps(P.targets.map(async D=>{try{let U={peerId:D,status:"fulfilled",value:await w(z,{target:D,...P.metadata===void 0?{}:{metadata:P.metadata},...P.timeoutMs===void 0?{}:{timeoutMs:P.timeoutMs},...P.onProgress===void 0?{}:{onProgress:P.onProgress},...P.signal===void 0?{}:{signal:P.signal}})};return P.onResult?.(U),U}catch(U){let Z=Ni(U,"request failed");if(Z.kind==="aborted"||!Z.kind)throw Z;let V=Z.kind==="timeout"?{peerId:D,status:"timeout"}:Z.kind==="disconnected"?{peerId:D,status:"disconnected"}:{peerId:D,status:"rejected",error:Z};return P.onResult?.(V),V}}))),get onRequest(){return C},set onRequest(z){C=z,J()},get onReceiveProgress(){return m.onReceiveProgress},set onReceiveProgress(z){x(z)}};return y.onMessage((z,P,D)=>{let U=Bd(D);U&&_(z,P,U.m,U.r)}),m.action=q,i[f]=m,J(),q},makeInternalAction:a,handleData:o,clearPeer:h}},zd=t=>t&&typeof t=="object"&&!Array.isArray(t)&&typeof t.k=="string"?{key:t.k,...typeof t.s=="string"?{streamId:t.s}:{},...typeof t.t=="string"?{trackId:t.t}:{},...Object.hasOwn(t,"m")?{metadata:t.m}:{}}:null,Hd=t=>e=>{let n=t.get(e);return n||(n=Zs(20),t.set(e,n)),n},Su=()=>{let t=new WeakMap,e=new WeakMap,n=new Map,i=new Map,s=new Map,r=new Map;return{getStreamKey:Hd(t),getTrackKey:Hd(e),rememberRemoteStream:(a,o,l)=>{n.set(a,o),l&&i.set(l,o)},getRemoteStream:(a,o)=>n.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,l,c,h)=>{let d={track:o,stream:l};s.set(a,d),c&&r.set(c,d),h&&i.set(h,l)},getRemoteTrack:(a,o)=>s.get(a)??(o?r.get(o):void 0),clearRemote:()=>{n.clear(),i.clear(),s.clear(),r.clear()}}},Rg=({iterate:t,isActive:e,getSharedMediaPeer:n})=>{let i={},s={},r=Su(),a={onPeerStream:null,onPeerTrack:null},o=(h,d,f,u)=>{e(h)&&(n(h)?.__trysteroMedia?.rememberRemoteStream(d,f,typeof f.id=="string"?f.id:void 0),a.onPeerStream?.(f,h,u))},l=(h,d,f,u,p)=>{e(h)&&(n(h)?.__trysteroMedia?.rememberRemoteTrack(d,f,u,typeof f.id=="string"?f.id:void 0,typeof u.id=="string"?u.id:void 0),a.onPeerTrack?.(f,u,h,p))},c=(h,d,f,u,p,y={})=>{let g={k:d,...y,...f===void 0?{}:{m:f}};return t(h,async(m,b)=>{await u(g,m),p(b)})};return{addStream:(h,d,f)=>c(d.target,r.getStreamKey(h),d.metadata,f,u=>u.addStream(h),{s:h.id}),removeStream:(h,d)=>{t(d,(f,u)=>u.removeStream(h))},addTrack:(h,d,f,u)=>c(f.target,r.getTrackKey(h),f.metadata,u,p=>p.addTrack(h,d),{s:d.id,t:h.id}),removeTrack:(h,d)=>{t(d,(f,u)=>u.removeTrack(h))},replaceTrack:(h,d,f,u)=>c(f.target,r.getTrackKey(d),f.metadata,u,p=>p.replaceTrack(h,d),{t:h.id}),receiveStreamMeta:(h,d)=>{if(!e(d))return;let f=zd(h);if(!f)return;let u=n(d)?.__trysteroMedia?.getRemoteStream(f.key,f.streamId);if(u){o(d,f.key,u,f.metadata);return}(i[d]??(i[d]=[])).push(f)},receiveTrackMeta:(h,d)=>{if(!e(d))return;let f=zd(h);if(!f)return;let u=n(d)?.__trysteroMedia?.getRemoteTrack(f.key,f.trackId);if(u){l(d,f.key,u.track,u.stream,f.metadata);return}(s[d]??(s[d]=[])).push(f)},receiveRemoteStream:(h,d)=>{if(!e(h))return;let f=i[h]?.shift();f&&o(h,f.key,d,f.metadata)},receiveRemoteTrack:(h,d,f)=>{if(!e(h))return;let u=s[h]?.shift();u&&l(h,u.key,d,f,u.metadata)},clearPeer:h=>{delete i[h],delete s[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Vd="beforeunload",kg=1e4,Li=t=>"@_"+t,Yr=new Set,Gd=()=>Yr.forEach(t=>t()),Ig=t=>(Yr.add(t),Yr.size===1&&addEventListener(Vd,Gd),()=>{Yr.delete(t),Yr.size||removeEventListener(Vd,Gd)}),Lg=(t,e,n,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=kg,isPassive:a=!1}={})=>{let o={},l={},c={},h={onPeerJoin:null,onPeerLeave:null},d=xn,f=null,u=(P,D,{includePending:U=!1}={})=>(P?Array.isArray(P)?P:[P]:Bn(U?o:l)).flatMap(Z=>{let V=U?o[Z]:l[Z];return V?[Promise.resolve(D(Z,V))]:(console.warn(`${Kn}: no peer with id ${Z} found`),[])}),p=Rg({iterate:(P,D)=>u(P,(U,Z)=>D(U,Z)),isActive:P=>!!l[P],getSharedMediaPeer:P=>o[P]??null}),y=Pg({getPeer:(P,D)=>(D?o:l)[P],getPeerIds:P=>Bn(P?o:l),canReceiveFromPeer:(P,D)=>!!f?.canReceiveFromPeer(P,D)}),g=y.makeInternalAction,m=y.handleData,b=y.makeAction,x=(P,D=mt("peer disconnected"))=>{let U=Ni(D,"peer disconnected");f?.clearPeer(P,U),delete o[P],delete l[P],y.clearPeer(P,U),c[P]?.splice(0).forEach(Z=>Z.reject(U)),delete c[P],p.clearPeer(P)},v=(P,D,U)=>{let Z=o[P];if(!Z||D&&Z!==D)return;let V=!!l[P];x(P,U),Z.destroy(),V&&h.onPeerLeave?.(P),e(P)},C=async()=>{await w.send(""),await new Promise(P=>setTimeout(P,99)),hs(o).forEach(([P,D])=>{D.destroy(),x(P,mt("room left"))}),d(),n()},S=g(Li("ping")),E=g(Li("pong")),k=g(Li("signal")),J=g(Li("stream")),_=g(Li("track")),w=g(Li("leave"),{sendToPending:!0,receiveWhilePending:!0}),q=g(Li("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),z=g(Li("hsready"),{sendToPending:!0,receiveWhilePending:!0});return f=ug({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:q.send,sendHandshakeReady:z.send,onActivate:(P,D)=>{l[P]=D,h.onPeerJoin?.(P)},onFailure:(P,D,U)=>v(P,D,U)}),S.onMessage((P,D)=>E.send("",D)),E.onMessage((P,D)=>{let U=c[D];U?.shift()?.resolve(),U&&!U.length&&delete c[D]}),k.onMessage((P,D)=>{l[D]&&o[D]?.signal(P)}),J.onMessage((P,D)=>p.receiveStreamMeta(P,D)),_.onMessage((P,D)=>p.receiveTrackMeta(P,D)),w.onMessage((P,D)=>v(D,void 0,mt("peer left room"))),q.onMessage((P,D,U)=>f?.receiveHandshakeData(P,D,U)),z.onMessage((P,D)=>f?.receiveHandshakeReady(D)),t((P,D)=>{let U=o[D];if(U){if(U===P)return;U.destroy(),x(D,mt("peer replaced"))}o[D]=P,f?.addPeer(D,P),P.setHandlers({data:Z=>m(D,Z),stream:Z=>p.receiveRemoteStream(D,Z),track:(Z,V)=>p.receiveRemoteTrack(D,Z,V),signal:Z=>{l[D]&&k.send(Z,D)},close:()=>v(D,P,mt("peer disconnected")),error:Z=>{console.error(`${Kn} peer error:`,Z),v(D,P,Z)}}),f?.start(D,P)}),gu&&(d=Ig(()=>C().catch(xn))),{makeAction:b,leave:C,ping:async P=>{if(!l[P])throw mt(`no active peer with id ${P}`);let D=Date.now();return await new Promise((U,Z)=>{let V=c[P]??(c[P]=[]),xe=()=>{let G=c[P];if(!G)return;let se=G.indexOf(pe);se>-1&&G.splice(se,1),G.length||delete c[P]},pe={resolve:()=>{xe(),U()},reject:G=>{xe(),Z(G)}};V.push(pe),S.send("",P).catch(G=>pe.reject(Ni(G,"peer disconnected")))}),Date.now()-D},isPassive:()=>a,getPeers:()=>yu(hs(l).map(([P,D])=>[P,D.connection])),addStream:(P,D={})=>p.addStream(P,D,J.send),removeStream:(P,D={})=>{p.removeStream(P,D.target)},addTrack:(P,D,U={})=>p.addTrack(P,D,U,_.send),removeTrack:(P,D={})=>{p.removeTrack(P,D.target)},replaceTrack:(P,D,U={})=>p.replaceTrack(P,D,U,_.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(P){h.onPeerJoin=P,P&&Bn(l).forEach(D=>P(D))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(P){h.onPeerLeave=P},get onPeerStream(){return p.onPeerStream},set onPeerStream(P){p.onPeerStream=P},get onPeerTrack(){return p.onPeerTrack},set onPeerTrack(P){p.onPeerTrack=P}}},Tu=1,Au=2,Wd=(t,e)=>{let n=Ui(t),i=new Uint8Array(3+n.byteLength+e.byteLength);return i[0]=Tu,i[1]=n.byteLength>>>8&255,i[2]=n.byteLength&255,i.set(n,3),i.set(e,3+n.byteLength),i},Ng=(t,e)=>{let n=Ui(t),i=new Uint8Array(4+n.byteLength);return i[0]=Au,i[1]=Number(e),i[2]=n.byteLength>>>8&255,i[3]=n.byteLength&255,i.set(n,4),i},Dg=t=>{let e=new Uint8Array(t);if(e.byteLength<3)return null;if(e[0]===Tu){let s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:cs(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==Au||e.byteLength<4)return null;let n=(e[2]??0)<<8|(e[3]??0),i=4+n;return n<=0||e.byteLength<i?null:{type:"presence",roomToken:cs(e.subarray(4,i)),isPresent:e[1]===1}},Eu=t=>{let{connection:e,channel:n}=t;return t.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||n?.readyState==="closing"||n?.readyState==="closed"},Ug=t=>{if(Eu(t))return"stale";let{channel:e}=t;return!e||e.readyState!=="open"?"transient":"live"},Og=class{constructor(){yn(this,"byApp",{});yn(this,"roomPresenceHandlers",{})}getMap(t){var e;return(e=this.byApp)[t]??(e[t]={})}get(t,e){return this.byApp[t]?.[e]}isPeerStale(t){return Eu(t)}getHealth(t){return this.isPeerStale(t)?"stale":"live"}setRoomPresenceHandler(t,e){return this.roomPresenceHandlers[t]=e,()=>{this.roomPresenceHandlers[t]===e&&delete this.roomPresenceHandlers[t]}}sendRoomPresence(t,e,n){t.isClosing||t.peer.isDead||t.peer.sendData(Ng(e,n))}clear(t,e,{destroyPeer:n}){let i=this.byApp[t],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=xt(s.idleTimer),s.isClosing=!0,n&&!s.peer.isDead&&s.peer.destroy();let r=Ws(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(a=>{a.handlers.close?.(),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Bn(i).length===0&&delete this.byApp[t]}register(t,e,n,i){let s=this.getMap(t),r=s[e];if(r){if(r.idleTimer=xt(r.idleTimer),r.peer===n)return r;this.clear(t,e,{destroyPeer:!0})}let a={appId:t,peerId:e,peer:n,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:Su(),idleMs:i,isClosing:!1};return n.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(t,e,{destroyPeer:!1}),error:o=>{console.error(`${Kn} peer error:`,o),this.clear(t,e,{destroyPeer:!1})},track:(o,l)=>this.dispatchTrack(a,o,l)}),s[e]=a,a}bind(t,e,n,{onDetach:i}){let s=n.bindings[t];if(s)return n.idleTimer=xt(n.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:t,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:xn,proxy:{}},a=()=>{n.bindings[t]&&(this.pruneRoomOwnership(n,t),delete n.bindings[t],r.roomToken&&n.bindingsByToken[r.roomToken]===r&&delete n.bindingsByToken[r.roomToken],n.controlRoomId===t&&(n.controlRoomId=Bn(n.bindings)[0]??null),i(),this.scheduleIdleTimer(n))},o={created:n.peer.created,get connection(){return n.peer.connection},get channel(){return n.peer.channel},get isDead(){return n.peer.isDead},getOffer:l=>n.peer.getOffer(l),signal:l=>n.peer.signal(l),sendData:l=>{if(!r.roomToken){r.pendingSendData.push(l);return}n.peer.sendData(Wd(r.roomToken,l))},destroy:()=>a(),setHandlers:l=>{let{signal:c,...h}=l;Object.assign(r.handlers,h),c&&(r.handlers.signal=c),this.flushBindingQueues(r)},offerPromise:n.peer.offerPromise,addStream:l=>{let c=n.streamOwners.get(l)??new Set,h=c.size===0;c.add(t),n.streamOwners.set(l,c),h&&n.peer.addStream(l)},removeStream:l=>{let c=n.streamOwners.get(l);c&&(c.delete(t),c.size===0&&(n.streamOwners.delete(l),n.peer.removeStream(l)))},addTrack:(l,c)=>{let h=n.trackOwners.get(l)??{stream:c,rooms:new Set},d=h.rooms.size===0;return h.stream=c,h.rooms.add(t),n.trackOwners.set(l,h),d?n.peer.addTrack(l,c):n.peer.connection.getSenders().find(f=>f.track===l)??n.peer.addTrack(l,c)},removeTrack:l=>{let c=n.trackOwners.get(l);c&&(c.rooms.delete(t),c.rooms.size===0&&(n.trackOwners.delete(l),n.peer.removeTrack(l)))},replaceTrack:(l,c)=>{let h=n.trackOwners.get(l);if(h){n.trackOwners.delete(l);let d=n.trackOwners.get(c)??{stream:h.stream,rooms:new Set};h.rooms.forEach(f=>d.rooms.add(f)),n.trackOwners.set(c,d)}return n.peer.replaceTrack(l,c)},__trysteroMedia:n.media};return r.proxy=o,r.detach=a,n.bindings[t]=r,n.controlRoomId??(n.controlRoomId=t),n.idleTimer=xt(n.idleTimer),e.then(l=>{if(n.isClosing||n.bindings[t]!==r)return;r.roomToken=l,n.bindingsByToken[l]=r;let c=n.pendingDataByToken.get(l);c?.length&&(r.pendingData.push(...c),n.pendingDataByToken.delete(l)),r.pendingSendData.splice(0).forEach(h=>n.peer.sendData(Wd(l,h))),this.flushBindingQueues(r)}),{proxy:o,isNew:!0}}pruneRoomOwnership(t,e){t.streamOwners.forEach((n,i)=>{n.delete(e),n.size===0&&(t.streamOwners.delete(i),t.peer.removeStream(i))}),t.trackOwners.forEach((n,i)=>{n.rooms.delete(e),n.rooms.size===0&&(t.trackOwners.delete(i),t.peer.removeTrack(i))})}scheduleIdleTimer(t){t.isClosing||Bn(t.bindings).length>0||(t.idleTimer=xt(t.idleTimer),t.idleTimer=setTimeout(()=>{let e=this.byApp[t.appId]?.[t.peerId];!e||Bn(e.bindings).length>0||this.clear(t.appId,t.peerId,{destroyPeer:!0})},t.idleMs))}getSignalBinding(t){if(t.controlRoomId){let n=t.bindings[t.controlRoomId];if(n?.handlers.signal)return n}let e=Ws(t.bindings).find(n=>!!n.handlers.signal);return e?(t.controlRoomId=e.roomId,e):null}flushBindingQueues(t){let{handlers:e}=t;e.data&&t.pendingData.length>0&&t.pendingData.splice(0).forEach(n=>e.data?.(n)),(e.track||e.stream)&&t.pendingTracks.length&&t.pendingTracks.splice(0).forEach(({track:n,stream:i})=>{e.track?.(n,i),e.stream?.(i)})}dispatchData(t,e){let n=Dg(e);if(!n)return;if(n.type==="presence"){n.isPresent?t.remoteRoomTokens.add(n.roomToken):t.remoteRoomTokens.delete(n.roomToken),this.roomPresenceHandlers[t.appId]?.(t.peerId,n.roomToken,n.isPresent);return}let i=t.bindingsByToken[n.roomToken];if(!i){let s=t.pendingDataByToken.get(n.roomToken)??[];s.push(n.payload),t.pendingDataByToken.set(n.roomToken,s);return}i.handlers.data?i.handlers.data(n.payload):i.pendingData.push(n.payload)}dispatchSignal(t,e){this.getSignalBinding(t)?.handlers.signal?.(e)}dispatchTrack(t,e,n){Ws(t.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,n),i.handlers.stream?.(n);return}i.pendingTracks.push({track:e,stream:n})})}},Fg=23333,Bg=12,zg=7533,Hg=23333,hc="__legacy__",Ja="offer-placeholder",Vg=["offer","answer","candidate"],Gg=t=>{if(typeof t=="string")try{let e=Xs(t);return e&&typeof e=="object"?e:null}catch{return null}return t&&typeof t=="object"?t:null},Xr=(t,e)=>typeof t[e]=="string"&&t[e]?t[e]:void 0,Wg=t=>Vg.some(e=>e in t&&(typeof t[e]!="string"||t[e]==="")),Cu=(t,e,n,i,s,r)=>{t.toCipher(e).then(a=>{t.isLeaving()||!r()||i(n,Tn(s(a.sdp)))})},$g=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),qg=t=>[...t.turnConfig??[],...t.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(n=>/^turns?:/i.test(n))),Xg=(t,e)=>`could not connect to peer ${t} after exchanging SDP; ${qg(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,io=(t,e,n)=>{t.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,t.onJoinError?.({error:Xg(n,t.config),appId:t.appId,peerId:n,roomId:t.roomId}))},na=(t,e)=>t[e]??(t[e]=$g()),Hn=t=>{t.connectedPeer?t.status="connected":t.answeringPeer?t.status="answering":t.offerPeer||t.offerRelays.some(Boolean)?t.status="offering":t.status="idle"},Ka=(t,e)=>{t.answeringPeer===e&&(t.answeringExpiryTimer=xt(t.answeringExpiryTimer),t.answeringPeer=null,t.answerSent=!1,Hn(t))},fc=(t,e,n)=>{t.connectedPeer&&(t.connectedPeer.isDead||t.connectedPeer.destroy(),t.connectedPeer=null,t.connectedPeerUnhealthySinceMs=null,Hn(t))},vc=(t,e)=>{t.offerRelayTimers[e]=xt(t.offerRelayTimers[e]),t.offerRelays[e]&&(t.offerRelays[e]=void 0,Hn(t))},$d=(t,e)=>{t?.offerRelays[e]===Ja&&vc(t,e)},Yg=t=>{if(t.isDead||t.connection.connectionState==="closed")return!0;try{return!!t.connection.remoteDescription}catch{return!0}},ia=(t,e)=>{let n=t.offerAnswered;t.offerExpiryTimer=xt(t.offerExpiryTimer),t.offerInitPromise=null,t.offerRelays.forEach((i,s)=>vc(t,s)),t.offerRelays=[],t.offerSignalRelays=[],t.offerRelayTimers=[],t.offerSignalBacklog=[],t.offerPeer&&t.offerPeer!==t.connectedPeer&&(n||Yg(t.offerPeer)?t.offerPeer.isDead||t.offerPeer.destroy():e.recycle(t.offerPeer)),t.offerPeer=null,t.offerId=null,t.offerSdp=null,t.offerAnswered=!1,t.connectionErrorReported=!1,Hn(t)},Zg=(t,e,n,i)=>{xt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=t.peerStates[n];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&io(t,s,n),i.destroy(),Ka(s,i),t.checkDeactivate())},Hg)},Kg=async(t,e,n)=>{let i=n?[n,hc]:[hc];for(let s of i){let r=t.pendingCandidates[s];if(r?.length){delete t.pendingCandidates[s];for(let a of r)await e.signal(a)}}},Pu=(t,e,n,i=xc)=>{xt(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=t.peerStates[n];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&io(t,r,n),ia(r,t.offerPool),t.checkDeactivate())},i)},jg=(t,e,n,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let s=(await t.offerPool.checkout(1,!1,t.encryptOffer))[0];if(!s)throw mt("failed to allocate offer peer");let{peer:r,offer:a}=s;e.offerPeer=r,e.offerId=Zs(Bg),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Hn(e);let o=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&io(t,e,n),ia(e,t.offerPool)),t.disconnectPeer(r,n),t.checkDeactivate()};return r.setHandlers({connect:()=>t.connectPeer(r,n,i),signal:l=>{e.offerPeer===r&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c?.(l)))},close:o,error:o}),Pu(t,e,n),{peer:r,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),Jg=async(t,e,n,i,s)=>{if(i){t.attachSharedPeerToRoom(n,i);return}let r=t.peerStates[n];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){$d(r,e);return}if(r.offerRelays[e]!==Ja)return;let[a,o]=await ps([ta(ea(t.rootTopicPlaintext,n)),jg(t,r,n,e)]);if(t.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==Ja){$d(r,e);return}r.offerRelayTimers[e]=xt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,Hn(r),r.offerRelayTimers[e]=setTimeout(()=>n1(t,n,e),(t.announceIntervals[e]??t.announceIntervalMs)*.9);let l=!1;r.offerSignalRelays[e]=c=>{l&&(t.isLeaving()||r.connectedPeer||r.offerPeer!==o.peer||r.offerId!==o.offerId||c.type!=="candidate"||Cu(t,c,a,s,h=>({peerId:Gn,offerId:o.offerId,candidate:h,...t.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===o.peer&&r.offerId===o.offerId))},s(a,Tn({peerId:Gn,offerId:o.offerId,offer:o.offer,...t.isPassive?{passive:!0}:{}})),l=!0,r.offerSignalBacklog.forEach(c=>r.offerSignalRelays[e]?.(c))},Qg=async(t,e,n,i,s,r,a)=>{let o=na(t.peerStates,n);if(o.answeringPeer||o.offerAnswered)return;let l=!!(o.offerPeer||o.offerRelays.some(Boolean));if((l||r)&&Gn<n)return;l&&ia(o,t.offerPool);let c=t.initPeer(!1,t.config);o.answeringPeer=c,o.answerSent=!1,o.connectionErrorReported=!1,Zg(t,o,n,c),Hn(o);let h=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&io(t,o,n),Ka(o,c),t.disconnectPeer(c,n),t.checkDeactivate()};c.setHandlers({connect:()=>t.connectPeer(c,n,e),close:h,error:h});let d;try{d=await t.toPlain({type:"offer",sdp:i})}catch{Ka(o,c),t.onJoinError?.({error:"incorrect room password when decrypting offer",appId:t.appId,peerId:n,roomId:t.roomId});return}if(c.isDead){Ka(o,c);return}let f=await ta(ea(t.rootTopicPlaintext,n));t.isLeaving()||(c.setHandlers({signal:u=>{t.isLeaving()||o.answeringPeer!==c||c.isDead||u.type!=="answer"&&u.type!=="candidate"||Cu(t,u,f,a,p=>{let y={peerId:Gn};return u.type==="answer"?(o.answerSent=!0,y.answer=p):y.candidate=p,s&&(y.offerId=s),t.isPassive&&(y.passive=!0),y},()=>o.answeringPeer===c&&!c.isDead)}}),await c.signal(d),await Kg(o,c,s))},e1=async(t,e,n,i,s)=>{var d;let r;try{r=await t.toPlain({type:xu,sdp:n})}catch{return}let a=na(t.peerStates,e),o=i&&a?.offerPeer&&a.offerId===i?a.offerPeer:null,l=a?.answeringPeer??null,c=!i&&a?.offerPeer?a.offerPeer:null,h=s&&!s.isDead?s:o??l??c;if(!h||h.isDead){let f=i??hc;((d=a.pendingCandidates)[f]??(d[f]=[])).push(r);return}h.signal(r)},t1=async(t,e,n,i,s,r)=>{let a;try{a=await t.toPlain({type:"answer",sdp:i})}catch{t.onJoinError?.({error:"incorrect room password when decrypting answer",appId:t.appId,peerId:n,roomId:t.roomId});return}if(r)t.offerPool.claimLeased(r),r.setHandlers({connect:()=>t.connectPeer(r,n,e),close:()=>t.disconnectPeer(r,n)}),r.signal(a);else{let o=t.peerStates[n];if(!o||!o.offerPeer||o.offerAnswered||s&&o.offerId&&s!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,Pu(t,o,n,Fg),o.offerPeer.signal(a)}},n1=(t,e,n)=>{let i=t.peerStates[e];!i||i.connectedPeer||i.offerRelays[n]&&(vc(i,n),t.checkDeactivate())},i1=t=>e=>async(n,i,s)=>{if(t.isLeaving())return;let r=Gg(i);if(!r||Wg(r))return;let a=Xr(r,"peerId")??"",o=Xr(r,"offer"),l=Xr(r,"answer"),c=Xr(r,"candidate"),h=Xr(r,"offerId"),d=r.peer,f=r.hasOutgoingOffer===!0,u=r.passive===!0;if(!a||a===Gn)return;let[p,y]=await ps([t.rootTopicP,t.selfTopicP]);if(t.isLeaving()||n!==p&&n!==y||t.isPassive&&u||(t.isPassive&&!t.isActive&&!l&&!c&&(t.isActive=!0,t.requeueAnnounce?.()),t.isPassive&&!t.isActive))return;let g=t.peerStates[a],m=g?.connectedPeer;if(m&&g){let v=Ug(m);if(v==="live"){g.connectedPeerUnhealthySinceMs=null;return}if(v==="stale")fc(g,a,"message-from-stale-peer");else{let C=Date.now(),S=g.connectedPeerUnhealthySinceMs??C;if(g.connectedPeerUnhealthySinceMs=S,C-S<zg)return;fc(g,a,"message-from-prolonged-disconnect")}}let b=t.sharedPeers.get(t.appId,a);b&&t.sharedPeers.getHealth(b.peer)==="stale"&&(t.sharedPeers.clear(t.appId,a,{destroyPeer:!0}),b=void 0);let x=!!(a&&!o&&!l&&!c);if(x&&!b){let v=na(t.peerStates,a),C=Gn<a;if(v.answeringPeer||v.connectedPeer||v.offerAnswered)return;if(!C&&!v.offerPeer){let S=await ta(ea(t.rootTopicPlaintext,a));!t.isLeaving()&&!v.connectedPeer&&s(S,Tn({peerId:Gn}));return}if(v.offerRelays[e])return;v.offerRelays[e]=Ja,Hn(v)}if(b&&(o||l||c)){if(b.bindings[t.roomId])return;t.attachSharedPeerToRoom(a,b);return}if(x)return Jg(t,e,a,b,s);if(o)return Qg(t,e,a,o,h,f,s);if(c)return e1(t,a,c,h,d);if(l)return t1(t,e,a,l,h,d)},Ya=5333,s1=[233,533,1333],r1=7533,a1=123333,o1=({init:t,subscribe:e,announce:n,deactivate:i})=>{let s={},r={},a={},o={},l=new Og,c=()=>Ws(s).some(C=>Bn(C).length>0),h=C=>r[C]??(r[C]={}),d=C=>a[C]??(a[C]={}),f=(C,S,E)=>{l.getHealth(C.peer)==="live"&&l.sendRoomPresence(C,S,E)},u=(C,S)=>{hs(r[C]??{}).forEach(([E,k])=>{if(!k.shouldAdvertise())return;let{roomToken:J,roomTokenPromise:_}=k;if(J){f(S,J,!0);return}_.then(w=>{r[C]?.[E]===k&&k.roomToken===w&&(l.get(C,S.peerId)!==S||S.isClosing||k.shouldAdvertise()&&f(S,w,!0))})})},p=(C,S,E)=>Ws(l.getMap(C)).forEach(k=>f(k,S,E)),y=C=>{o[C]||(o[C]=l.setRoomPresenceHandler(C,(S,E,k)=>{if(!k)return;let J=l.get(C,S),_=a[C]?.[E];!J||!_||r[C]?.[_]?.attachSharedPeerToRoom(S,J)}))},g=C=>{s[C]&&Bn(s[C]).length>0||(o[C]?.(),delete o[C],delete r[C],delete a[C])},m=!1,b=[],x=null,v=xn;return(C,S,E)=>{if(!C)throw mt("requires a config map as the first argument");if(E&&typeof E!="object")throw mt("third argument must be a callbacks object");let{appId:k}=C,J=E?.onJoinError,_=E?.onPeerHandshake,w=E?.handshakeTimeoutMs;if(!k)throw mt("config map is missing appId field");if(!S)throw mt("roomId argument required");if(w!==void 0&&(!Number.isFinite(w)||w<=0))throw mt("handshakeTimeoutMs must be a positive number");if(s[k]?.[S])return s[k][S];y(k);let q=ea(Kn,k,S),z=ta(q),P=ta(ea(q,Gn)),D=sg(C.password??"",k,S),U=rg(k,S),Z=C._test_only_sharedPeerIdleMs??a1,V=!1,xe=be=>async te=>({type:te.type,sdp:await be(D,te.sdp)}),pe=xe(og),G=xe(ag),se=l.getMap(k),Ue=()=>Nd(!0,C),ne=!1;x||(x=new hg(Ue));let he=x,ye=async be=>{let te=await be.getOffer(Date.now()-be.created>xc);if(!te||te.type!=="offer")throw mt("failed to get offer for peer");return(await G(te)).sdp},Te=(be,te)=>{let ce=na(de.peerStates,be);ce.answeringExpiryTimer=xt(ce.answeringExpiryTimer),ce.answeringPeer=null;let{proxy:Oe,isNew:Me}=l.bind(S,U,te,{onDetach:()=>{let ue=de.peerStates[be];ue?.connectedPeer===te.peer&&(ue.connectedPeer=null,ue.connectedPeerUnhealthySinceMs=null,Hn(ue))}});ce.connectedPeer=te.peer,ce.connectedPeerUnhealthySinceMs=null,Hn(ce),Me&&K(Oe,be),ia(ce,he)},qe=(be,te,ce)=>{if(V){be.destroy();return}let Oe=na(de.peerStates,te);if(Oe.connectedPeer){let Xe=se[te];if(Xe&&Oe.connectedPeer===Xe.peer&&Xe.bindings[S])return;Oe.connectedPeer!==be&&!be.isDead&&be.destroy();return}let Me=se[te];if(Me&&l.getHealth(Me.peer)==="stale"&&(l.clear(k,te,{destroyPeer:!0}),Me=void 0),Me&&Me.peer!==be){be.isDead||be.destroy(),Te(te,Me);return}let ue=!Me;Me||(Me=l.register(k,te,be,Z)),Te(te,Me),ue&&u(k,Me)},We=(be,te)=>{if(V)return;let ce=de.peerStates[te];ce?.connectedPeer===be&&(fc(ce,te,"close-event"),le(),!He&&ne&&de.requeueAnnounce?.())},He=!!C.passive,Ge=null,re,I=xn,le=()=>{if(!He||!de.isActive)return;let be=!1;hs(de.peerStates).forEach(([te,ce])=>{ce.connectedPeer||ce.answeringPeer||ce.offerInitPromise||ce.offerPeer||ce.offerRelays.some(Boolean)?be=!0:ce.status==="idle"&&delete de.peerStates[te]}),be||(de.isActive=!1,re=xt(re),M.forEach(xt),M.length=0,I(),Ge?.roomToken&&p(k,Ge.roomToken,!1))},de={appId:k,roomId:S,config:C,peerStates:{},rootTopicPlaintext:q,rootTopicP:z,selfTopicP:P,toPlain:pe,toCipher:G,isLeaving:()=>V,isPassive:He,isActive:!He,onJoinError:J,sharedPeers:l,offerPool:he,encryptOffer:ye,initPeer:Nd,connectPeer:qe,disconnectPeer:We,attachSharedPeerToRoom:Te,checkDeactivate:le,announceIntervals:[],announceIntervalMs:Ya},ge={config:C,appId:k,roomId:S,isPassive:He},Se=i1(de);if(!m){let be=t(C);b=(Array.isArray(be)?be:[be]).map(te=>Promise.resolve(te)),m=!0,v=C.relayConfig?.manualReconnection?xn:tg()}!He&&!he.isActive&&he.warmup(),de.announceIntervals=b.map(()=>Ya);let Fe=b.map(()=>Ya),Ee=b.map(()=>0),R=b.map(()=>0),M=[],X=b.map(async(be,te)=>e(await be,await z,await P,Se(te),ce=>he.getOffers(ce,ye),ge));ps([z,P]).then(([be,te])=>{if(V)return;let ce=async(Oe,Me)=>{if(V||He&&!de.isActive)return;let ue=He?{passive:!0}:void 0,Xe;try{Xe=await n(Oe,be,te,ue,ge),R[Me]=0}catch(Pe){let ee=R[Me]??0;ee===0&&C.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Kn}: announce failed - ${qs(Pe,"")}`),R[Me]=ee+1}if(V||He&&!de.isActive||Xe&&typeof Xe!="number"&&"stopAnnouncing"in Xe)return;typeof Xe=="number"?(de.announceIntervals[Me]=Xe,Fe[Me]=Xe):Xe&&(Fe[Me]=Xe.nextAnnounceMs,ne||(ne=Xe.reannounceOnDisconnect===!0));let Ye=Ee[Me]??0;Ee[Me]=Ye+1;let ut=Fe[Me]??Ya,F=s1[Ye];M[Me]=setTimeout(()=>{ce(Oe,Me)},typeof F=="number"?Math.min(ut,F):ut)};I=()=>{i&&b.forEach(async Oe=>{let Me=await Oe;V||i(Me,be,te,ge)})},de.requeueAnnounce=()=>{M.forEach(xt),M.length=0,re=xt(re),he.isActive||he.warmup(),Ge?.roomToken&&p(k,Ge.roomToken,!0),re=setTimeout(le,r1),b.forEach(async(Oe,Me)=>{let ue=await Oe;ue&&!V&&(Ee[Me]=0,ce(ue,Me))})},X.forEach(async(Oe,Me)=>{if(await Oe,V)return;let ue=await b[Me];ue&&!V&&(!He||de.isActive)&&ce(ue,Me)})});let K=xn,{compose:oe}=fg(C.password??"",k,S),ae=oe(_),Be={...ae?{onPeerHandshake:ae}:{},...w===void 0?{}:{handshakeTimeoutMs:w},isPassive:He,onHandshakeError:(be,te)=>J?.({error:te.replace(/^handshake failed: /,""),appId:k,peerId:be,roomId:S})};s[k]??(s[k]={});let Ce=h(k),Ne=Lg(be=>K=be,be=>{if(V)return;let te=de.peerStates[be];te?.connectedPeer&&(te.connectedPeer=null,Hn(te),le())},()=>{V=!0,K=xn;let be=r[k]?.[S];be?.roomToken&&(p(k,be.roomToken,!1),delete a[k]?.[be.roomToken],a[k]&&!Bn(a[k]).length&&delete a[k]),r[k]&&(delete r[k][S],Bn(r[k]).length||delete r[k]),hs(de.peerStates).forEach(([te,ce])=>{if(ce.answeringExpiryTimer=xt(ce.answeringExpiryTimer),ce.connectedPeer&&!ce.connectedPeer.isDead){let Oe=se[te];(!Oe||Oe.peer!==ce.connectedPeer)&&ce.connectedPeer.destroy()}ce.answeringPeer&&!ce.answeringPeer.isDead&&ce.answeringPeer.destroy(),ia(ce,he),ce.connectedPeer=null,ce.answeringPeer=null,Hn(ce)}),s[k]&&(delete s[k][S],Bn(s[k]).length===0&&delete s[k]),M.forEach(xt),re=xt(re),X.forEach(async te=>{(await te)()}),!c()&&(m=!1,he.destroy(),x=null,v(),g(k))},Be);return Ge={roomToken:null,roomTokenPromise:U,attachSharedPeerToRoom:Te,shouldAdvertise:()=>!He||de.isActive},Ce[S]=Ge,U.then(be=>{let te=Ge;!te||V||r[k]?.[S]!==te||(te.roomToken=be,d(k)[be]=S,Ws(se).forEach(ce=>{ce.remoteRoomTokens.has(be)&&Te(ce.peerId,ce)}),(!He||de.isActive)&&p(k,be,!0))}),s[k][S]=Ne}},l1=["offer","answer","candidate"],c1=6e4,h1=t=>{if(typeof t=="string")try{let e=Xs(t);return e&&typeof e=="object"?e:null}catch{return null}return t},tc=(t,e)=>typeof t[e]=="string"&&t[e]?t[e]:void 0,f1=t=>l1.some(e=>e in t&&(typeof t[e]!="string"||t[e]==="")),d1=t=>{let e=h1(t);if(!e||f1(e))return!1;let n=tc(e,"peerId");return!!(n&&n!==Gn&&e.passive!==!0&&!tc(e,"answer")&&!tc(e,"candidate"))},nc=t=>{if(!t)throw mt("topic strategy missing room context");return t},qd=(t,e,n,i)=>({kind:e,appId:t.appId,roomId:t.roomId,rootTopic:n,selfTopic:i}),ic=(t,e,n,i)=>({kind:e,appId:t.appId,roomId:t.roomId,rootTopic:n,selfTopic:i}),u1=({steadyAnnounceIntervalMs:t=c1,reannounceOnDisconnect:e=!0,init:n,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>o1({init:n,subscribe:async(a,o,l,c,h,d)=>{let f=nc(d),u=(C,S)=>{s(a,C,S,ic(f,"signal",o,l))},p=null,y=!1,g=null,m=!1,b=C=>{y||(y=!0,C())},x=()=>(g||(g=Promise.resolve(i(a,l,(C,S)=>{m||c(C,S,u)},qd(f,"self",o,l))).then(C=>{p=C,m&&b(C)})),g);f.isPassive||await x();let v=await i(a,o,async(C,S)=>{m||(f.isPassive&&d1(S)&&await x(),m||await c(C,S,u))},qd(f,"root",o,l));return()=>{m=!0,p&&b(p),v()}},announce:async(a,o,l,c,h)=>{let d=nc(h),f=await s(a,o,Tn({peerId:Gn,...c}),ic(d,"announce",o,l));return typeof f=="number"||f!==void 0&&"stopAnnouncing"in f?f:{nextAnnounceMs:f?.nextAnnounceMs??t,reannounceOnDisconnect:f?.reannounceOnDisconnect??e}},...r?{deactivate:(a,o,l,c)=>{let h=nc(c);return r(a,o,ic(h,"announce",o,l))}}:{}}),Ru=eg(t=>t.socket),p1=5,ku="x",Iu="EVENT",{secretKey:m1,publicKey:g1}=mu.keygen(),y1=Qr(g1),Lu={},x1={},sc={},Xd=250,Qa=6e4,v1=15*6e4,_1=5333,sa=new WeakMap,dc=new WeakSet,fs=new WeakMap,Yd=t=>{let e=sa.get(t),n=Math.min(e?.delayMs?Math.max(Qa,e.delayMs*2):Qa,v1);return sa.set(t,{delayMs:n,untilMs:Date.now()+n}),n},b1=t=>{let e=sa.get(t);if(!e)return 0;let n=e.untilMs-Date.now();return n>0?n:0},rc=t=>({nextAnnounceMs:t}),M1={stopAnnouncing:!0},w1=t=>{if(dc.has(t))return!1;let e=fs.get(t);return e&&(clearTimeout(e.timer),fs.delete(t)),dc.add(t),sa.delete(t),t.close?.(),!0},S1=(t,e)=>{let n=fs.get(t);n&&(clearTimeout(n.timer),n.eventIds.add(e));let i=n?.eventIds??new Set([e]),s=setTimeout(()=>{fs.delete(t)},_1);fs.set(t,{eventIds:i,timer:s})},T1=(t,e)=>{let n=fs.get(t);return n?.eventIds.has(e)?(clearTimeout(n.timer),fs.delete(t),!0):!1},_c=()=>Math.floor(Date.now()/1e3),bc=t=>sc[t]??(sc[t]=vu(t,1e4)+2e4),Nu=async(t,e)=>{let n={kind:bc(t),tags:[[ku,t]],created_at:_c(),content:e,pubkey:y1},i=await no("SHA-256",Tn([0,n.pubkey,n.created_at,n.kind,n.tags,n.content]));return Tn([Iu,{...n,id:Qr(i),sig:Qr(await mu.signAsync(i,m1))}])},A1=(t,e)=>(Lu[t]=e,Tn(["REQ",t,{kinds:[bc(e)],since:_c(),"#x":[e]}])),mi={},Du=t=>{t.flushWaiters.forEach(e=>e()),t.flushWaiters.clear()},E1=(t,e,n)=>{var s;let i=mi[s=t.url]??(mi[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,n),Uu(t,i)},C1=(t,e)=>{let n=mi[t.url];n&&(n.topics.delete(e),n.topics.size===0?(n.updateTimer!==null&&(clearTimeout(n.updateTimer),n.updateTimer=null),Du(n),n.subIds.forEach(i=>t.send(Tn(["CLOSE",i]))),delete mi[t.url]):Uu(t,n))},Uu=(t,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Ou(t)}finally{Du(e)}},0))},P1=t=>{let e=mi[t.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(n=>e.flushWaiters.add(n))},Ou=t=>{let e=mi[t.url];if(!e||e.topics.size===0)return;let n=[...e.topics.keys()],i=[],s=_c();for(let r=0;r<n.length;r+=Xd)i.push(n.slice(r,r+Xd));for(;e.subIds.length>i.length;){let r=e.subIds.pop();r&&t.send(Tn(["CLOSE",r]))}i.forEach((r,a)=>{var l;let o=(l=e.subIds)[a]??(l[a]=Zs(64));t.send(Tn(["REQ",o,{kinds:[...new Set(r.map(bc))],since:s,"#x":r}]))})},R1=t=>{let e=mi[t.url];e&&e.topics.size>0&&Ou(t)},k1=u1({init:t=>Jm(t,Fu,p1,!0).map(e=>{let n=Ru.register(e,()=>Qm(e,i=>{let[s,r,a,o]=Xs(i);if(s!==Iu){let l=`${Kn}: relay failure from ${n.url} - `,c=s==="CLOSED"&&typeof a=="string"?a:o,h=s==="OK"&&a===!1,d=h&&c?.startsWith("rate-limited:"),f=h&&c?.startsWith("duplicate:"),u=s==="CLOSED"||h&&!d&&!f,p=s==="OK"&&T1(n,r);if(u&&!w1(n))return;d?Yd(n):p&&sa.delete(n),!f&&t.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(l+r):(h||s==="CLOSED")&&console.warn(l+c));return}if(a&&typeof a=="object"&&"content"in a){let{content:l}=a,c=x1[r];if(c){c(Lu[r]??"",l);return}let h=mi[n.url];if(h?.subIds.includes(r)&&a.tags){let d=a.tags.find(f=>f[0]===ku);d?.[1]&&h.topics.get(d[1])?.(d[1],l)}}},()=>R1(n)));return n.ready}),subscribeTopic:(t,e,n,i)=>{E1(t,e,(r,a)=>{n(r,a)});let s=()=>{C1(t,e)};return i.kind==="root"?P1(t).then(()=>s):s},publishTopic:async(t,e,n,i)=>{if(dc.has(t)||t.isClosed)return i.kind==="announce"?M1:void 0;if(i.kind==="announce"){let o=b1(t);if(o>0)return rc(Math.max(Qa,o))}let s=await Nu(e,typeof n=="string"?n:Tn(n)),r=t.socket.readyState===1;if(t.send(s),i.kind!=="announce")return;if(!r)return rc(Yd(t));let a=Xs(s)[1].id;return S1(t,a),rc(Qa)}}),I1=Ru.getSockets,Fu=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(t=>"wss://"+t);});var Gl=document.documentElement,pd=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,md=()=>Gl.dataset.theme||(pd?.matches?"dark":"light");function Vl(){let t=md()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(e=>{e.textContent=t?"\u2600\uFE0F":"\u{1F319}",e.title=t?"Chuy\u1EC3n sang giao di\u1EC7n s\xE1ng":"Chuy\u1EC3n sang giao di\u1EC7n t\u1ED1i",e.setAttribute("aria-label",e.title)})}function Am(){try{let t=localStorage.getItem("theme");(t==="dark"||t==="light")&&(Gl.dataset.theme=t)}catch{}document.querySelectorAll("[data-theme-toggle]").forEach(t=>{t.onclick=()=>{let e=md()==="dark"?"light":"dark";Gl.dataset.theme=e;try{localStorage.setItem("theme",e)}catch{}Vl()}}),pd?.addEventListener?.("change",Vl),Vl()}Am();var kt=t=>`<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${t}</svg>`,Wl={wolf:kt(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),villager:kt(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),seer:kt(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),guard:kt(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),witch:kt(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),hunter:kt(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`)},_w={moon:kt('<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>'),sun:kt('<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>'),skull:kt('<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>'),vote:kt('<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>'),noose:kt('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>'),mic:kt('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>'),micOff:kt('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>'),speaker:kt('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>'),speakerOff:kt('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>'),crown:kt('<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>'),copy:kt('<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>'),chat:kt('<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>'),users:kt('<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>'),card:kt('<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>'),door:kt('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>'),heal:kt('<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>'),poison:kt('<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>')},Em={wolf:{id:"wolf",name:"Ma S\xF3i",team:"wolf",color:"#ff5d6c",short:"M\u1ED7i \u0111\xEAm c\xF9ng b\u1EA7y ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 c\u1EAFn.",desc:"M\u1ED7i \u0111\xEAm, c\u1EA3 b\u1EA7y s\xF3i m\u1EDF m\u1EAFt, nh\xECn th\u1EA5y nhau v\xE0 c\xF9ng ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 c\u1EAFn. Ban ng\xE0y gi\u1EA3 l\xE0m d\xE2n l\xE0nh. Th\u1EAFng khi s\u1ED1 s\xF3i b\u1EB1ng ho\u1EB7c nhi\u1EC1u h\u01A1n s\u1ED1 ng\u01B0\u1EDDi c\xF2n l\u1EA1i."},villager:{id:"villager",name:"D\xE2n L\xE0ng",team:"village",color:"#f2b65a",short:"Kh\xF4ng c\xF3 n\u0103ng l\u1EF1c, ch\u1EC9 c\xF3 l\xFD l\u1EBD v\xE0 l\xE1 phi\u1EBFu.",desc:"Kh\xF4ng c\xF3 n\u0103ng l\u1EF1c \u0111\u1EB7c bi\u1EC7t. Ban ng\xE0y th\u1EA3o lu\u1EADn, suy lu\u1EADn v\xE0 b\u1ECF phi\u1EBFu treo c\u1ED5 k\u1EBB \u0111\xE1ng nghi. Th\u1EAFng khi t\u1EA5t c\u1EA3 s\xF3i b\u1ECB ti\xEAu di\u1EC7t."},seer:{id:"seer",name:"Ti\xEAn Tri",team:"village",color:"#a78bff",short:"M\u1ED7i \u0111\xEAm soi m\u1ED9t ng\u01B0\u1EDDi: l\xE0 s\xF3i hay kh\xF4ng.",desc:"M\u1ED7i \u0111\xEAm ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 soi, qu\u1EA3n tr\xF2 s\u1EBD cho bi\u1EBFt ng\u01B0\u1EDDi \u0111\xF3 c\xF3 ph\u1EA3i l\xE0 S\xF3i hay kh\xF4ng. H\xE3y kh\xE9o l\xE9o d\u1EABn d\u1EAFt d\xE2n l\xE0ng m\xE0 kh\xF4ng \u0111\u1EC3 l\u1ED9 th\xE2n ph\u1EADn."},guard:{id:"guard",name:"B\u1EA3o V\u1EC7",team:"village",color:"#54b4ff",short:"M\u1ED7i \u0111\xEAm b\u1EA3o v\u1EC7 m\u1ED9t ng\u01B0\u1EDDi kh\u1ECFi s\xF3i.",desc:"M\u1ED7i \u0111\xEAm ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi (c\xF3 th\u1EC3 l\xE0 ch\xEDnh m\xECnh) \u0111\u1EC3 b\u1EA3o v\u1EC7 kh\u1ECFi b\u1ECB s\xF3i c\u1EAFn. Kh\xF4ng \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 c\xF9ng m\u1ED9t ng\u01B0\u1EDDi hai \u0111\xEAm li\xEAn ti\u1EBFp."},witch:{id:"witch",name:"Ph\xF9 Th\u1EE7y",team:"village",color:"#3fd69a",short:"M\u1ED9t b\xECnh c\u1EE9u, m\u1ED9t b\xECnh \u0111\u1ED9c.",desc:"C\xF3 m\u1ED9t b\xECnh thu\u1ED1c c\u1EE9u v\xE0 m\u1ED9t b\xECnh thu\u1ED1c \u0111\u1ED9c, m\u1ED7i b\xECnh d\xF9ng m\u1ED9t l\u1EA7n trong c\u1EA3 v\xE1n. Khi c\xF2n b\xECnh c\u1EE9u, m\u1ED7i \u0111\xEAm \u0111\u01B0\u1EE3c bi\u1EBFt ai b\u1ECB s\xF3i c\u1EAFn \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh c\u1EE9u hay kh\xF4ng."},hunter:{id:"hunter",name:"Th\u1EE3 S\u0103n",team:"village",color:"#ff9447",short:"Khi ch\u1EBFt \u0111\u01B0\u1EE3c b\u1EAFn ch\u1EBFt m\u1ED9t ng\u01B0\u1EDDi.",desc:"Khi ch\u1EBFt (b\u1ECB s\xF3i c\u1EAFn ho\u1EB7c b\u1ECB treo c\u1ED5), \u0111\u01B0\u1EE3c k\xE9o theo m\u1ED9t ng\u01B0\u1EDDi b\u1EA5t k\u1EF3. N\u1EBFu ch\u1EBFt v\xEC thu\u1ED1c \u0111\u1ED9c c\u1EE7a Ph\xF9 th\u1EE7y th\xEC kh\xF4ng \u0111\u01B0\u1EE3c b\u1EAFn."}};function gd(t,e="md"){let n=Em[t];return n?`<span class="role-badge ${e}" style="--c:${n.color}" title="${n.name}">${Wl[t]}</span>`:""}var as=["\u{1F98A}","\u{1F43C}","\u{1F42F}","\u{1F438}","\u{1F435}","\u{1F427}","\u{1F981}","\u{1F428}","\u{1F430}","\u{1F419}","\u{1F984}","\u{1F432}","\u{1F43B}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F433}","\u{1F996}"],zs=["#ff6b6b","#ffa94d","#ffd43b","#38d9a9","#4dabf7","#9775fa","#f783ac","#69db7c"];var kn=(t,e=document)=>e.querySelector(t),Hs=(t,e=document)=>[...e.querySelectorAll(t)],$l=new URLSearchParams(location.search),ql=$l.get("local")==="1"||window.MASOI_LOCAL===!0;function xd(t){return{get:e=>{try{return t().getItem(e)}catch{return null}},set:(e,n)=>{try{t().setItem(e,n)}catch{}},del:e=>{try{t().removeItem(e)}catch{}}}}var ww=xd(()=>sessionStorage),os=xd(()=>localStorage),Vr=t=>String(t??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function vd(t){let e="abcdefghijkmnpqrstuvwxyz23456789",n="";for(let i of crypto.getRandomValues(new Uint8Array(t)))n+=e[i%e.length];return n}function _d(){if(ql&&$l.get("as")){let e=$l.get("as").slice(0,18),n=[...e].reduce((i,s)=>i+s.codePointAt(0),0);return{name:e,av:{e:as[n%as.length],c:n%zs.length},test:!0}}let t=null;try{t=JSON.parse(os.get("masoi-av")||"null")}catch{}return(!t||!as.includes(t.e))&&(t={e:as[Math.floor(Math.random()*as.length)],c:Math.floor(Math.random()*zs.length)}),{name:os.get("masoi-name")||"",av:t}}function $a(t){t.test||(os.set("masoi-name",t.name||""),os.set("masoi-av",JSON.stringify(t.av)))}var Gr=(t,e="")=>t?.av?`<span class="avatar ${e}" style="--av:${zs[t.av.c]||zs[0]}">${t.av.e}</span>`:`<span class="avatar ${e}">?</span>`;function bd(t,e,n){let i=()=>{t.innerHTML=`
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${as.map(s=>`<button type="button" class="${s===e.av.e?"on":""}" data-e="${s}" aria-label="Avatar ${s}">${s}</button>`).join("")}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">M\xE0u n\u1EC1n</div>
      <div class="color-row">${zs.map((s,r)=>`<button type="button" class="${r===e.av.c?"on":""}" data-c="${r}" style="--sw:${s}" aria-label="M\xE0u ${r+1}"></button>`).join("")}</div>`,Hs("[data-e]",t).forEach(s=>s.onclick=()=>{e.av.e=s.dataset.e,$a(e),i(),n?.()}),Hs("[data-c]",t).forEach(s=>s.onclick=()=>{e.av.c=Number(s.dataset.c),$a(e),i(),n?.()})};i()}var yd;function Cm(){try{yd||(yd=new(window.AudioContext||window.webkitAudioContext)),yd.resume()}catch{}}document.addEventListener("pointerdown",Cm,{once:!0});var qa=typeof window<"u"&&window.SITE_CONFIG||{},Vs={appId:"masoi-online-vn-v1",turn:Array.isArray(qa.turn)?qa.turn.filter(t=>t&&t.urls):[],relayUrls:Array.isArray(qa.relayUrls)?qa.relayUrls:[]};async function Hu(t,{local:e=!1,ns:n=""}={}){let i=(n?n+"-":"")+t.toUpperCase();return e?N1(i):L1(i)}async function L1(t){let{joinRoom:e,selfId:n}=await Promise.resolve().then(()=>(zu(),Bu)),i={appId:Vs.appId};Vs.turn?.length&&(i.turnConfig=Vs.turn),Vs.relayUrls?.length&&(i.relayConfig={urls:Vs.relayUrls});let s=e(i,t,{onJoinError:c=>console.warn("[net] join error",c)}),r={},a={},o={selfId:n,mode:"p2p",on(c,h){a[c]=h,l(c).onMessage=(d,{peerId:f})=>h(d,f)},send(c,h,d=null){return l(c).send(h,d?{target:d}:void 0).catch(f=>console.warn("[net] send",f))},peers:()=>Object.keys(s.getPeers()),set onPeerJoin(c){s.onPeerJoin=c},set onPeerLeave(c){s.onPeerLeave=c},set onPeerStream(c){s.onPeerStream=c},addStream:(c,h)=>s.addStream(c,h?{target:h}:void 0),removeStream:c=>s.removeStream(c),leave:()=>s.leave()};function l(c){return r[c]||(r[c]=s.makeAction(c))}return o}function N1(t){let e=Math.random().toString(36).slice(2,10),n=new BroadcastChannel("masoi-"+t),i={},s=new Map,r=()=>{},a=()=>{},o=c=>n.postMessage({...c,from:e});n.onmessage=({data:c})=>{if(c.from===e||c.to&&!c.to.includes(e))return;let h=!s.has(c.from);if(s.set(c.from,Date.now()),c.k==="bye"){s.delete(c.from),a(c.from);return}h&&(r(c.from),o({k:"hi",to:[c.from]})),c.k==="msg"&&setTimeout(()=>i[c.type]?.(c.data,c.from),0)};let l=setInterval(()=>{o({k:"hi"});let c=Date.now();for(let[h,d]of s)c-d>6e3&&(s.delete(h),a(h))},1500);return window.addEventListener("beforeunload",()=>o({k:"bye"})),setTimeout(()=>o({k:"hi"}),50),{selfId:e,mode:"local",on(c,h){i[c]=h},send(c,h,d=null){return o({k:"msg",type:c,data:JSON.parse(JSON.stringify(h)),to:d?[].concat(d):null}),Promise.resolve()},peers:()=>[...s.keys()],set onPeerJoin(c){r=c;for(let h of s.keys())c(h)},set onPeerLeave(c){a=c},set onPeerStream(c){},addStream(){},removeStream(){},leave(){o({k:"bye"}),clearInterval(l),n.close()}}}var oa=null;function D1(){return oa||(oa=document.createElement("div"),oa.className="overlay site-modal hidden",document.body.appendChild(oa)),oa}function Vu(t,{required:e=!1,onSave:n}={}){let i=D1();i.innerHTML=`<form class="modal panel pf-modal" autocomplete="off">
    <div class="pf-head">${Gr(t,"xl")}<div><h2 style="margin:0">${e?"Ch\xE0o b\u1EA1n! \u{1F44B}":"H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n"}</h2>
    <p class="muted" style="margin:4px 0 0">${e?"\u0110\u1EB7t t\xEAn v\xE0 ch\u1ECDn avatar m\u1ED9t l\u1EA7n \u2014 v\xE0o game n\xE0o c\u0169ng d\xF9ng lu\xF4n, kh\xF4ng ph\u1EA3i nh\u1EADp l\u1EA1i.":"T\xEAn v\xE0 avatar d\xF9ng chung cho m\u1ECDi game."}</p></div></div>
    <label class="field"><span>T\xEAn hi\u1EC3n th\u1ECB</span><input id="pfName" maxlength="18" value="${Vr(t.name)}" placeholder="VD: S\xF3i Gi\xE0, Vua Nh\u1EA1i..." required /></label>
    <div id="pfAv"></div>
    <div class="pf-btns">${e?"":'<button type="button" class="btn" data-close>Hu\u1EF7</button>'}<button class="btn primary big" type="submit">${e?"V\xE0o s\xE2n ch\u01A1i \u2192":"L\u01B0u"}</button></div>
  </form>`,i.classList.remove("hidden");let s=()=>{let o=kn(".pf-head .avatar",i);o&&(o.outerHTML=Gr(t,"xl"))};bd(kn("#pfAv",i),t,s);let r=()=>{i.classList.add("hidden"),i.innerHTML=""};i.onclick=o=>{!e&&o.target===i&&r()},Hs("[data-close]",i).forEach(o=>o.onclick=r);let a=kn("#pfName",i);setTimeout(()=>a.focus(),50),kn("form",i).onsubmit=o=>{o.preventDefault();let l=a.value.trim().slice(0,18);if(!l){a.focus();return}t.name=l,$a(t),r(),n?.(t),U1()}}var Gu=(t,e)=>{t.name||Vu(t,{required:!0,onSave:e})};function Mc(t,e){let n=kn(".home-nav .nav-right");if(!n)return()=>{};let i=kn("#profileBtn");i||(i=document.createElement("button"),i.type="button",i.id="profileBtn",i.className="profile-chip",n.appendChild(i));let s=()=>{i.innerHTML=`${Gr(t,"sm")}<span>${Vr(t.name||"\u0110\u1EB7t t\xEAn")}</span>`};return i.onclick=()=>Vu(t,{onSave:()=>{s(),e?.(t)}}),s(),s}var An=null,ms=null,Wu=()=>ms||(ms=os.get("site-did"),ms||(ms=vd(10),os.set("site-did",ms)),ms);async function $u(t,e){if(An)return An;let n=kn(".home-nav .nav-right"),i=document.createElement("button");i.type="button",i.className="online-chip",i.title="S\u1ED1 ng\u01B0\u1EDDi \u0111ang m\u1EDF S\xE2n Ch\u01A1i",i.innerHTML='<i class="dot"></i><b>1</b><span>online</span>',n?.prepend(i);let s=document.createElement("div");s.className="online-pop panel hidden",document.body.appendChild(s),i.onclick=l=>{l.stopPropagation(),s.classList.toggle("hidden"),o()},document.addEventListener("click",l=>{s.contains(l.target)||s.classList.add("hidden")});let r=new Map;An={prof:t,page:e,peers:r,chip:i,pop:s,net:null};let a=()=>({did:Wu(),name:t.name||"Kh\xE1ch",av:t.av,page:An.page});function o(){let l=[a(),...r.values()],c=new Map;for(let d of l)d?.did&&!c.has(d.did)&&c.set(d.did,d);let h=Math.max(1,c.size);kn("b",i).textContent=h,s.innerHTML=`<div class="op-head"><i class="dot"></i><b>${h} ng\u01B0\u1EDDi \u0111ang online</b></div>
      ${[...c.values()].map((d,f)=>`<div class="op-row">${Gr(d,"sm")}<div><b>${Vr(d.name)}${f===0?' <span class="muted">(b\u1EA1n)</span>':""}</b><div class="muted">${Vr(d.page||"")}</div></div></div>`).join("")}
      ${h===1?'<p class="muted" style="margin:6px 0 0;font-size:12.5px">Ch\u01B0a th\u1EA5y ai kh\xE1c. G\u1EEDi link cho b\u1EA1n b\xE8 nh\xE9!</p>':""}`}An.draw=o,o();try{let l=await Hu("ONLINE",{local:ql,ns:"presence"});An.net=l,l.on("me",(c,h)=>{c&&typeof c=="object"&&(r.set(h,{did:String(c.did||h).slice(0,20),name:String(c.name||"Kh\xE1ch").slice(0,18),av:c.av,page:String(c.page||"").slice(0,40)}),o())}),l.onPeerJoin=c=>{l.send("me",a(),c)},l.onPeerLeave=c=>{r.delete(c),o()},l.send("me",a())}catch(l){console.warn("[presence]",l)}return An}function U1(t){An&&(t&&(An.page=t),An.draw?.(),An.net?.send("me",{did:Wu(),name:An.prof.name||"Kh\xE1ch",av:An.prof.av,page:An.page}))}var O1=0,qu=1,F1=2;var Yp=1,Cf=2,Mi=3,Xi=0,pn=1,$t=2,$i=0,gr=1,_r=2,Xu=3,Yu=4,B1=5,ws=100,z1=101,H1=102,V1=103,G1=104,W1=200,$1=201,q1=202,X1=203,rh=204,ah=205,Y1=206,Z1=207,K1=208,j1=209,J1=210,Q1=211,ey=212,ty=213,ny=214,oh=0,lh=1,ch=2,br=3,hh=4,fh=5,dh=6,uh=7,Zp=0,iy=1,sy=2,qi=0,ry=1,ay=2,oy=3,ly=4,cy=5,hy=6,fy=7;var Kp=300,Mr=301,wr=302,ph=303,mh=304,xl=306,ba=1e3,Ts=1001,gh=1002,un=1003,dy=1004;var so=1005;var ei=1006,wc=1007;var As=1008;var Ei=1009,jp=1010,Jp=1011,Ma=1012,Pf=1013,Es=1014,Si=1015,Ia=1016,Rf=1017,kf=1018,Sr=1020,Qp=35902,e0=1021,t0=1022,ti=1023,n0=1024,i0=1025,yr=1026,Tr=1027,vl=1028,If=1029,s0=1030,Lf=1031;var Nf=1033,Lo=33776,No=33777,Do=33778,Uo=33779,yh=35840,xh=35841,vh=35842,_h=35843,bh=36196,Mh=37492,wh=37496,Sh=37808,Th=37809,Ah=37810,Eh=37811,Ch=37812,Ph=37813,Rh=37814,kh=37815,Ih=37816,Lh=37817,Nh=37818,Dh=37819,Uh=37820,Oh=37821,Oo=36492,Fh=36494,Bh=36495,r0=36283,zh=36284,Hh=36285,Vh=36286;var Bo=2300,Gh=2301,Sc=2302,Zu=2400,Ku=2401,ju=2402;var uy=3200,py=3201;var Df=0,my=1,Gi="",Jt="srgb",Ji="srgb-linear",Uf="display-p3",_l="display-p3-linear",zo="linear",wt="srgb",Ho="rec709",Vo="p3";var Ks=7680;var Ju=519,gy=512,yy=513,xy=514,a0=515,vy=516,_y=517,by=518,My=519,Wh=35044;var Qu="300 es",Ti=2e3,Go=2001,Yi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tc=Math.PI/180,Wo=180/Math.PI;function Ai(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(hn[t&255]+hn[t>>8&255]+hn[t>>16&255]+hn[t>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[i&255]+hn[i>>8&255]+hn[i>>16&255]+hn[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function wy(t,e){return(t%e+e)%e}function Ac(t,e,n){return(1-n)*t+n*e}function li(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function _t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}var _e=class t{constructor(e=0,n=0){t.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},st=class t{constructor(e,n,i,s,r,a,o,l,c){t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c)}set(e,n,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],u=i[5],p=i[8],y=s[0],g=s[3],m=s[6],b=s[1],x=s[4],v=s[7],C=s[2],S=s[5],E=s[8];return r[0]=a*y+o*b+l*C,r[3]=a*g+o*x+l*S,r[6]=a*m+o*v+l*E,r[1]=c*y+h*b+d*C,r[4]=c*g+h*x+d*S,r[7]=c*m+h*v+d*E,r[2]=f*y+u*b+p*C,r[5]=f*g+u*x+p*S,r[8]=f*m+u*v+p*E,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return n*a*h-n*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,p=n*d+i*f+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/p;return e[0]=d*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=f*y,e[4]=(h*n-s*l)*y,e[5]=(s*r-o*n)*y,e[6]=u*y,e[7]=(i*l-c*n)*y,e[8]=(a*n-i*r)*y,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Ec.makeScale(e,n)),this}rotate(e){return this.premultiply(Ec.makeRotation(-e)),this}translate(e,n){return this.premultiply(Ec.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ec=new st;function o0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function $o(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Sy(){let t=$o("canvas");return t.style.display="block",t}var ep={};function Fo(t){t in ep||(ep[t]=!0,console.warn(t))}function Ty(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Ay(t){let e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ey(t){let e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var tp=new st().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),np=new st().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),la={[Ji]:{transfer:zo,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Jt]:{transfer:wt,primaries:Ho,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[_l]:{transfer:zo,primaries:Vo,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(np),fromReference:t=>t.applyMatrix3(tp)},[Uf]:{transfer:wt,primaries:Vo,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(np),fromReference:t=>t.applyMatrix3(tp).convertLinearToSRGB()}},Cy=new Set([Ji,_l]),gt={enabled:!0,_workingColorSpace:Ji,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!Cy.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;let i=la[e].toReference,s=la[n].fromReference;return s(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return la[t].primaries},getTransfer:function(t){return t===Gi?zo:la[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(la[e].luminanceCoefficients)}};function xr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Cc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}var js,$h=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{js===void 0&&(js=$o("canvas")),js.width=e.width,js.height=e.height;let i=js.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=js}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=$o("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=xr(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xr(n[i]/255)*255):n[i]=xr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Py=0,qo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Ai(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Pc(s[a].image)):r.push(Pc(s[a]))}else r=Pc(s);i.url=r}return n||(e.images[this.uuid]=i),i}};function Pc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$h.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Ry=0,En=class t extends Yi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=Ts,s=Ts,r=ei,a=As,o=ti,l=Ei,c=t.DEFAULT_ANISOTROPY,h=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Ai(),this.name="",this.source=new qo(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new _e(0,0),this.repeat=new _e(1,1),this.center=new _e(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ba:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ba:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};En.DEFAULT_IMAGE=null;En.DEFAULT_MAPPING=Kp;En.DEFAULT_ANISOTROPY=1;var Dt=class t{constructor(e=0,n=0,i=0,s=1){t.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],p=l[9],y=l[2],g=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(p+g)<.1&&Math.abs(c+u+m-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let x=(c+1)/2,v=(u+1)/2,C=(m+1)/2,S=(h+f)/4,E=(d+y)/4,k=(p+g)/4;return x>v&&x>C?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=S/i,r=E/i):v>C?v<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),i=S/s,r=k/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=E/r,s=k/r),this.set(i,s,r,n),this}let b=Math.sqrt((g-p)*(g-p)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(g-p)/b,this.y=(d-y)/b,this.z=(f-h)/b,this.w=Math.acos((c+u+m-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},qh=class extends Yi{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Dt(0,0,e,n),this.scissorTest=!1,this.viewport=new Dt(0,0,e,n);let s={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new En(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let n=Object.assign({},e.texture.image);return this.texture.source=new qo(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ci=class extends qh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},Xo=class extends En{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Xh=class extends En{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Zi=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],f=r[a+0],u=r[a+1],p=r[a+2],y=r[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d;return}if(o===1){e[n+0]=f,e[n+1]=u,e[n+2]=p,e[n+3]=y;return}if(d!==y||l!==f||c!==u||h!==p){let g=1-o,m=l*f+c*u+h*p+d*y,b=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){let C=Math.sqrt(x),S=Math.atan2(C,m*b);g=Math.sin(g*S)/C,o=Math.sin(o*S)/C}let v=o*b;if(l=l*g+f*v,c=c*g+u*v,h=h*g+p*v,d=d*g+y*v,g===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}e[n]=l,e[n+1]=c,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],f=r[a+1],u=r[a+2],p=r[a+3];return e[n]=o*p+h*d+l*u-c*f,e[n+1]=l*p+h*f+c*d-o*u,e[n+2]=c*p+h*u+o*f-l*d,e[n+3]=h*p-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),f=l(i/2),u=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"YXZ":this._x=f*h*d+c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"ZXY":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d-f*u*p;break;case"ZYX":this._x=f*h*d-c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d+f*u*p;break;case"YZX":this._x=f*h*d+c*u*p,this._y=c*u*d+f*h*p,this._z=c*h*p-f*u*d,this._w=c*h*d-f*u*p;break;case"XZY":this._x=f*h*d-c*u*p,this._y=c*u*d-f*h*p,this._z=c*h*p+f*u*d,this._w=c*h*d+f*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],l=n[9],c=n[2],h=n[6],d=n[10],f=i+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(i>o&&i>d){let u=2*Math.sqrt(1+i-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-i-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-i-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,l=n._y,c=n._z,h=n._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-n;return this._w=u*a+n*this._w,this._x=u*i+n*this._x,this._y=u*s+n*this._y,this._z=u*r+n*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-n)*h)/c,f=Math.sin(n*h)/c;return this._w=a*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class t{constructor(e=0,n=0,i=0){t.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(ip.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(ip.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,l=n.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Rc.copy(this).projectOnVector(e),this.sub(Rc)}reflect(e){return this.sub(Rc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Rc=new H,ip=new Zi,Cs=class{constructor(e=new H(1/0,1/0,1/0),n=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(jn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(jn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=jn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,jn):jn.fromBufferAttribute(r,a),jn.applyMatrix4(e.matrixWorld),this.expandByPoint(jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ro.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ro.copy(i.boundingBox)),ro.applyMatrix4(e.matrixWorld),this.union(ro)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,jn),jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ca),ao.subVectors(this.max,ca),Js.subVectors(e.a,ca),Qs.subVectors(e.b,ca),er.subVectors(e.c,ca),Oi.subVectors(Qs,Js),Fi.subVectors(er,Qs),gs.subVectors(Js,er);let n=[0,-Oi.z,Oi.y,0,-Fi.z,Fi.y,0,-gs.z,gs.y,Oi.z,0,-Oi.x,Fi.z,0,-Fi.x,gs.z,0,-gs.x,-Oi.y,Oi.x,0,-Fi.y,Fi.x,0,-gs.y,gs.x,0];return!kc(n,Js,Qs,er,ao)||(n=[1,0,0,0,1,0,0,0,1],!kc(n,Js,Qs,er,ao))?!1:(oo.crossVectors(Oi,Fi),n=[oo.x,oo.y,oo.z],kc(n,Js,Qs,er,ao))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},yi=[new H,new H,new H,new H,new H,new H,new H,new H],jn=new H,ro=new Cs,Js=new H,Qs=new H,er=new H,Oi=new H,Fi=new H,gs=new H,ca=new H,ao=new H,oo=new H,ys=new H;function kc(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){ys.fromArray(t,r);let o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=n.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var ky=new Cs,ha=new H,Ic=new H,wa=class{constructor(e=new H,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):ky.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ha.subVectors(e,this.center);let n=ha.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(ha,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ic.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ha.copy(e.center).add(Ic)),this.expandByPoint(ha.copy(e.center).sub(Ic))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},xi=new H,Lc=new H,lo=new H,Bi=new H,Nc=new H,co=new H,Dc=new H,Yh=class{constructor(e=new H,n=new H(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){Lc.copy(e).add(n).multiplyScalar(.5),lo.copy(n).sub(e).normalize(),Bi.copy(this.origin).sub(Lc);let r=e.distanceTo(n)*.5,a=-this.direction.dot(lo),o=Bi.dot(this.direction),l=-Bi.dot(lo),c=Bi.lengthSq(),h=Math.abs(1-a*a),d,f,u,p;if(h>0)if(d=a*l-o,f=a*o-l,p=r*h,d>=0)if(f>=-p)if(f<=p){let y=1/h;d*=y,f*=y,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-p?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=p?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Lc).addScaledVector(lo,f),u}intersectSphere(e,n){xi.subVectors(e.center,this.origin);let i=xi.dot(this.direction),s=xi.dot(xi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,s,r){Nc.subVectors(n,e),co.subVectors(i,e),Dc.crossVectors(Nc,co);let a=this.direction.dot(Dc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);let l=o*this.direction.dot(co.crossVectors(Bi,co));if(l<0)return null;let c=o*this.direction.dot(Nc.cross(Bi));if(c<0||l+c>a)return null;let h=-o*Bi.dot(Dc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Lt=class t{constructor(e,n,i,s,r,a,o,l,c,h,d,f,u,p,y,g){t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,l,c,h,d,f,u,p,y,g)}set(e,n,i,s,r,a,o,l,c,h,d,f,u,p,y,g){let m=this.elements;return m[0]=e,m[4]=n,m[8]=i,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=f,m[3]=u,m[7]=p,m[11]=y,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){let n=this.elements,i=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),a=1/tr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,p=o*h,y=o*d;n[0]=l*h,n[4]=-l*d,n[8]=c,n[1]=u+p*c,n[5]=f-y*c,n[9]=-o*l,n[2]=y-f*c,n[6]=p+u*c,n[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,p=c*h,y=c*d;n[0]=f+y*o,n[4]=p*o-u,n[8]=a*c,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=u*o-p,n[6]=y+f*o,n[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,p=c*h,y=c*d;n[0]=f-y*o,n[4]=-a*d,n[8]=p+u*o,n[1]=u+p*o,n[5]=a*h,n[9]=y-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,p=o*h,y=o*d;n[0]=l*h,n[4]=p*c-u,n[8]=f*c+y,n[1]=l*d,n[5]=y*c+f,n[9]=u*c-p,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,p=o*l,y=o*c;n[0]=l*h,n[4]=y-f*d,n[8]=p*d+u,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-c*h,n[6]=u*d+p,n[10]=f-y*d}else if(e.order==="XZY"){let f=a*l,u=a*c,p=o*l,y=o*c;n[0]=l*h,n[4]=-d,n[8]=c*h,n[1]=f*d+y,n[5]=a*h,n[9]=u*d-p,n[2]=p*d-u,n[6]=o*h,n[10]=y*d+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Iy,e,Ly)}lookAt(e,n,i){let s=this.elements;return In.subVectors(e,n),In.lengthSq()===0&&(In.z=1),In.normalize(),zi.crossVectors(i,In),zi.lengthSq()===0&&(Math.abs(i.z)===1?In.x+=1e-4:In.z+=1e-4,In.normalize(),zi.crossVectors(i,In)),zi.normalize(),ho.crossVectors(In,zi),s[0]=zi.x,s[4]=ho.x,s[8]=In.x,s[1]=zi.y,s[5]=ho.y,s[9]=In.y,s[2]=zi.z,s[6]=ho.z,s[10]=In.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],u=i[13],p=i[2],y=i[6],g=i[10],m=i[14],b=i[3],x=i[7],v=i[11],C=i[15],S=s[0],E=s[4],k=s[8],J=s[12],_=s[1],w=s[5],q=s[9],z=s[13],P=s[2],D=s[6],U=s[10],Z=s[14],V=s[3],xe=s[7],pe=s[11],G=s[15];return r[0]=a*S+o*_+l*P+c*V,r[4]=a*E+o*w+l*D+c*xe,r[8]=a*k+o*q+l*U+c*pe,r[12]=a*J+o*z+l*Z+c*G,r[1]=h*S+d*_+f*P+u*V,r[5]=h*E+d*w+f*D+u*xe,r[9]=h*k+d*q+f*U+u*pe,r[13]=h*J+d*z+f*Z+u*G,r[2]=p*S+y*_+g*P+m*V,r[6]=p*E+y*w+g*D+m*xe,r[10]=p*k+y*q+g*U+m*pe,r[14]=p*J+y*z+g*Z+m*G,r[3]=b*S+x*_+v*P+C*V,r[7]=b*E+x*w+v*D+C*xe,r[11]=b*k+x*q+v*U+C*pe,r[15]=b*J+x*z+v*Z+C*G,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],p=e[3],y=e[7],g=e[11],m=e[15];return p*(+r*l*d-s*c*d-r*o*f+i*c*f+s*o*u-i*l*u)+y*(+n*l*u-n*c*f+r*a*f-s*a*u+s*c*h-r*l*h)+g*(+n*c*d-n*o*u-r*a*d+i*a*u+r*o*h-i*c*h)+m*(-s*o*h-n*l*d+n*o*f+s*a*d-i*a*f+i*l*h)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],p=e[12],y=e[13],g=e[14],m=e[15],b=d*g*c-y*f*c+y*l*u-o*g*u-d*l*m+o*f*m,x=p*f*c-h*g*c-p*l*u+a*g*u+h*l*m-a*f*m,v=h*y*c-p*d*c+p*o*u-a*y*u-h*o*m+a*d*m,C=p*d*l-h*y*l-p*o*f+a*y*f+h*o*g-a*d*g,S=n*b+i*x+s*v+r*C;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/S;return e[0]=b*E,e[1]=(y*f*r-d*g*r-y*s*u+i*g*u+d*s*m-i*f*m)*E,e[2]=(o*g*r-y*l*r+y*s*c-i*g*c-o*s*m+i*l*m)*E,e[3]=(d*l*r-o*f*r-d*s*c+i*f*c+o*s*u-i*l*u)*E,e[4]=x*E,e[5]=(h*g*r-p*f*r+p*s*u-n*g*u-h*s*m+n*f*m)*E,e[6]=(p*l*r-a*g*r-p*s*c+n*g*c+a*s*m-n*l*m)*E,e[7]=(a*f*r-h*l*r+h*s*c-n*f*c-a*s*u+n*l*u)*E,e[8]=v*E,e[9]=(p*d*r-h*y*r-p*i*u+n*y*u+h*i*m-n*d*m)*E,e[10]=(a*y*r-p*o*r+p*i*c-n*y*c-a*i*m+n*o*m)*E,e[11]=(h*o*r-a*d*r-h*i*c+n*d*c+a*i*u-n*o*u)*E,e[12]=C*E,e[13]=(h*y*s-p*d*s+p*i*f-n*y*f-h*i*g+n*d*g)*E,e[14]=(p*o*s-a*y*s-p*i*l+n*y*l+a*i*g-n*o*g)*E,e[15]=(a*d*s-h*o*s+h*i*l-n*d*l-a*i*f+n*o*f)*E,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,l=n._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,p=r*d,y=a*h,g=a*d,m=o*d,b=l*c,x=l*h,v=l*d,C=i.x,S=i.y,E=i.z;return s[0]=(1-(y+m))*C,s[1]=(u+v)*C,s[2]=(p-x)*C,s[3]=0,s[4]=(u-v)*S,s[5]=(1-(f+m))*S,s[6]=(g+b)*S,s[7]=0,s[8]=(p+x)*E,s[9]=(g-b)*E,s[10]=(1-(f+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements,r=tr.set(s[0],s[1],s[2]).length(),a=tr.set(s[4],s[5],s[6]).length(),o=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Jn.copy(this);let c=1/r,h=1/a,d=1/o;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=h,Jn.elements[5]*=h,Jn.elements[6]*=h,Jn.elements[8]*=d,Jn.elements[9]*=d,Jn.elements[10]*=d,n.setFromRotationMatrix(Jn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,n,i,s,r,a,o=Ti){let l=this.elements,c=2*r/(n-e),h=2*r/(i-s),d=(n+e)/(n-e),f=(i+s)/(i-s),u,p;if(o===Ti)u=-(a+r)/(a-r),p=-2*a*r/(a-r);else if(o===Go)u=-a/(a-r),p=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=Ti){let l=this.elements,c=1/(n-e),h=1/(i-s),d=1/(a-r),f=(n+e)*c,u=(i+s)*h,p,y;if(o===Ti)p=(a+r)*d,y=-2*d;else if(o===Go)p=r*d,y=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=y,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},tr=new H,Jn=new Lt,Iy=new H(0,0,0),Ly=new H(1,1,1),zi=new H,ho=new H,In=new H,sp=new Lt,rp=new Zi,ci=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(n){case"XYZ":this._y=Math.asin(ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return sp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(sp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return rp.setFromEuler(this),this.setFromQuaternion(rp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ci.DEFAULT_ORDER="XYZ";var Yo=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ny=0,ap=new H,nr=new Zi,vi=new Lt,fo=new H,fa=new H,Dy=new H,Uy=new Zi,op=new H(1,0,0),lp=new H(0,1,0),cp=new H(0,0,1),hp={type:"added"},Oy={type:"removed"},ir={type:"childadded",child:null},Uc={type:"childremoved",child:null},Ht=class t extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Ai(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new H,n=new ci,i=new Zi,s=new H(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Lt},normalMatrix:{value:new st}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Yo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return nr.setFromAxisAngle(e,n),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,n){return nr.setFromAxisAngle(e,n),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(op,e)}rotateY(e){return this.rotateOnAxis(lp,e)}rotateZ(e){return this.rotateOnAxis(cp,e)}translateOnAxis(e,n){return ap.copy(e).applyQuaternion(this.quaternion),this.position.add(ap.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(op,e)}translateY(e){return this.translateOnAxis(lp,e)}translateZ(e){return this.translateOnAxis(cp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?fo.copy(e):fo.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(fa,fo,this.up):vi.lookAt(fo,fa,this.up),this.quaternion.setFromRotationMatrix(vi),s&&(vi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(vi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hp),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Oy),Uc.child=e,this.dispatchEvent(Uc),Uc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hp),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,e,Dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fa,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(n){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),p=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ht.DEFAULT_UP=new H(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qn=new H,_i=new H,Oc=new H,bi=new H,sr=new H,rr=new H,fp=new H,Fc=new H,Bc=new H,zc=new H,Hc=new Dt,Vc=new Dt,Gc=new Dt,Wi=class t{constructor(e=new H,n=new H,i=new H){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Qn.subVectors(e,n),s.cross(Qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Qn.subVectors(s,n),_i.subVectors(i,n),Oc.subVectors(e,n);let a=Qn.dot(Qn),o=Qn.dot(_i),l=Qn.dot(Oc),c=_i.dot(_i),h=_i.dot(Oc),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,p=(a*h-o*l)*f;return r.set(1-u-p,p,u)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,bi)===null?!1:bi.x>=0&&bi.y>=0&&bi.x+bi.y<=1}static getInterpolation(e,n,i,s,r,a,o,l){return this.getBarycoord(e,n,i,s,bi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bi.x),l.addScaledVector(a,bi.y),l.addScaledVector(o,bi.z),l)}static getInterpolatedAttribute(e,n,i,s,r,a){return Hc.setScalar(0),Vc.setScalar(0),Gc.setScalar(0),Hc.fromBufferAttribute(e,n),Vc.fromBufferAttribute(e,i),Gc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Hc,r.x),a.addScaledVector(Vc,r.y),a.addScaledVector(Gc,r.z),a}static isFrontFacing(e,n,i,s){return Qn.subVectors(i,n),_i.subVectors(e,n),Qn.cross(_i).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Qn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,i),rr.subVectors(r,i),Fc.subVectors(e,i);let l=sr.dot(Fc),c=rr.dot(Fc);if(l<=0&&c<=0)return n.copy(i);Bc.subVectors(e,s);let h=sr.dot(Bc),d=rr.dot(Bc);if(h>=0&&d<=h)return n.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),n.copy(i).addScaledVector(sr,a);zc.subVectors(e,r);let u=sr.dot(zc),p=rr.dot(zc);if(p>=0&&u<=p)return n.copy(r);let y=u*c-l*p;if(y<=0&&c>=0&&p<=0)return o=c/(c-p),n.copy(i).addScaledVector(rr,o);let g=h*p-u*d;if(g<=0&&d-h>=0&&u-p>=0)return fp.subVectors(r,s),o=(d-h)/(d-h+(u-p)),n.copy(s).addScaledVector(fp,o);let m=1/(g+y+f);return a=y*m,o=f*m,n.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},l0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hi={h:0,s:0,l:0},uo={h:0,s:0,l:0};function Wc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}var nt=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,n),this}setRGB(e,n,i,s=gt.workingColorSpace){return this.r=e,this.g=n,this.b=i,gt.toWorkingColorSpace(this,s),this}setHSL(e,n,i,s=gt.workingColorSpace){if(e=wy(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=Wc(a,r,e+1/3),this.g=Wc(a,r,e),this.b=Wc(a,r,e-1/3)}return gt.toWorkingColorSpace(this,s),this}setStyle(e,n=Jt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,n);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Jt){let i=l0[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Cc(e.r),this.g=Cc(e.g),this.b=Cc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jt){return gt.fromWorkingColorSpace(fn.copy(this),e),Math.round(ln(fn.r*255,0,255))*65536+Math.round(ln(fn.g*255,0,255))*256+Math.round(ln(fn.b*255,0,255))}getHexString(e=Jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=gt.workingColorSpace){gt.fromWorkingColorSpace(fn.copy(this),n);let i=fn.r,s=fn.g,r=fn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,n=gt.workingColorSpace){return gt.fromWorkingColorSpace(fn.copy(this),n),e.r=fn.r,e.g=fn.g,e.b=fn.b,e}getStyle(e=Jt){gt.fromWorkingColorSpace(fn.copy(this),e);let n=fn.r,i=fn.g,s=fn.b;return e!==Jt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(Hi),this.setHSL(Hi.h+e,Hi.s+n,Hi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Hi),e.getHSL(uo);let i=Ac(Hi.h,uo.h,n),s=Ac(Hi.s,uo.s,n),r=Ac(Hi.l,uo.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},fn=new nt;nt.NAMES=l0;var Fy=0,Pi=class extends Yi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Ai(),this.name="",this.type="Material",this.blending=gr,this.side=Xi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rh,this.blendDst=ah,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new nt(0,0,0),this.blendAlpha=0,this.depthFunc=br,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ju,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Xi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==rh&&(i.blendSrc=this.blendSrc),this.blendDst!==ah&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==br&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ju&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},qt=class extends Pi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new nt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var zt=new H,po=new _e,Nn=class{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Wh,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)po.fromBufferAttribute(this,n),po.applyMatrix3(e),this.setXY(n,po.x,po.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix3(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyMatrix4(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.applyNormalMatrix(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)zt.fromBufferAttribute(this,n),zt.transformDirection(e),this.setXYZ(n,zt.x,zt.y,zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=li(n,this.array)),n}setX(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=li(n,this.array)),n}setY(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=li(n,this.array)),n}setZ(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=li(n,this.array)),n}setW(e,n){return this.normalized&&(n=_t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Wh&&(e.usage=this.usage),e}};var Zo=class extends Nn{constructor(e,n,i){super(new Uint16Array(e),n,i)}};var Ko=class extends Nn{constructor(e,n,i){super(new Uint32Array(e),n,i)}};var vt=class extends Nn{constructor(e,n,i){super(new Float32Array(e),n,i)}},By=0,Wn=new Lt,$c=new Ht,ar=new H,Ln=new Cs,da=new Cs,jt=new H,bn=class t extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Ai(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o0(e)?Ko:Zo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new st().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,n,i){return Wn.makeTranslation(e,n,i),this.applyMatrix4(Wn),this}scale(e,n,i){return Wn.makeScale(e,n,i),this.applyMatrix4(Wn),this}lookAt(e){return $c.lookAt(e),$c.updateMatrix(),this.applyMatrix4($c.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ar).negate(),this.translate(ar.x,ar.y,ar.z),this}setFromPoints(e){let n=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];n.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new vt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];Ln.setFromBufferAttribute(r),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,Ln.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,Ln.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(Ln.min),this.boundingBox.expandByPoint(Ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wa);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(Ln.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];da.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(Ln.min,da.min),Ln.expandByPoint(jt),jt.addVectors(Ln.max,da.max),Ln.expandByPoint(jt)):(Ln.expandByPoint(da.min),Ln.expandByPoint(da.max))}Ln.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)jt.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(jt));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)jt.fromBufferAttribute(o,c),l&&(ar.fromBufferAttribute(e,c),jt.add(ar)),s=Math.max(s,i.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let k=0;k<i.count;k++)o[k]=new H,l[k]=new H;let c=new H,h=new H,d=new H,f=new _e,u=new _e,p=new _e,y=new H,g=new H;function m(k,J,_){c.fromBufferAttribute(i,k),h.fromBufferAttribute(i,J),d.fromBufferAttribute(i,_),f.fromBufferAttribute(r,k),u.fromBufferAttribute(r,J),p.fromBufferAttribute(r,_),h.sub(c),d.sub(c),u.sub(f),p.sub(f);let w=1/(u.x*p.y-p.x*u.y);isFinite(w)&&(y.copy(h).multiplyScalar(p.y).addScaledVector(d,-u.y).multiplyScalar(w),g.copy(d).multiplyScalar(u.x).addScaledVector(h,-p.x).multiplyScalar(w),o[k].add(y),o[J].add(y),o[_].add(y),l[k].add(g),l[J].add(g),l[_].add(g))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let k=0,J=b.length;k<J;++k){let _=b[k],w=_.start,q=_.count;for(let z=w,P=w+q;z<P;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let x=new H,v=new H,C=new H,S=new H;function E(k){C.fromBufferAttribute(s,k),S.copy(C);let J=o[k];x.copy(J),x.sub(C.multiplyScalar(C.dot(J))).normalize(),v.crossVectors(S,J);let w=v.dot(l[k])<0?-1:1;a.setXYZW(k,x.x,x.y,x.z,w)}for(let k=0,J=b.length;k<J;++k){let _=b[k],w=_.start,q=_.count;for(let z=w,P=w+q;z<P;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Nn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,u=i.count;f<u;f++)i.setXYZ(f,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,d=new H;if(e)for(let f=0,u=e.count;f<u;f+=3){let p=e.getX(f+0),y=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(n,p),r.fromBufferAttribute(n,y),a.fromBufferAttribute(n,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,p),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,g),o.add(h),l.add(h),c.add(h),i.setXYZ(p,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,u=n.count;f<u;f+=3)s.fromBufferAttribute(n,f+0),r.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)jt.fromBufferAttribute(e,n),jt.normalize(),e.setXYZ(n,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,p=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?u=l[y]*o.data.stride+o.offset:u=l[y]*h;for(let m=0;m<h;m++)f[p++]=c[u++]}return new Nn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);n.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,i);l.push(u)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(n));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(n))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(n));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},dp=new Lt,xs=new Yh,mo=new wa,up=new H,go=new H,yo=new H,xo=new H,qc=new H,vo=new H,pp=new H,_o=new H,et=class extends Ht{constructor(e=new bn,n=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(qc.fromBufferAttribute(d,e),a?vo.addScaledVector(qc,h):vo.addScaledVector(qc.sub(n),h))}n.add(vo)}return n}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),mo.copy(i.boundingSphere),mo.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(mo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(mo,up)===null||xs.origin.distanceToSquared(up)>(e.far-e.near)**2))&&(dp.copy(r).invert(),xs.copy(e.ray).applyMatrix4(dp),!(i.boundingBox!==null&&xs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,xs)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,y=f.length;p<y;p++){let g=f[p],m=a[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let v=b,C=x;v<C;v+=3){let S=o.getX(v),E=o.getX(v+1),k=o.getX(v+2);s=bo(this,m,e,i,c,h,d,S,E,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let p=Math.max(0,u.start),y=Math.min(o.count,u.start+u.count);for(let g=p,m=y;g<m;g+=3){let b=o.getX(g),x=o.getX(g+1),v=o.getX(g+2);s=bo(this,a,e,i,c,h,d,b,x,v),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,y=f.length;p<y;p++){let g=f[p],m=a[g.materialIndex],b=Math.max(g.start,u.start),x=Math.min(l.count,Math.min(g.start+g.count,u.start+u.count));for(let v=b,C=x;v<C;v+=3){let S=v,E=v+1,k=v+2;s=bo(this,m,e,i,c,h,d,S,E,k),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,n.push(s))}}else{let p=Math.max(0,u.start),y=Math.min(l.count,u.start+u.count);for(let g=p,m=y;g<m;g+=3){let b=g,x=g+1,v=g+2;s=bo(this,a,e,i,c,h,d,b,x,v),s&&(s.faceIndex=Math.floor(g/3),n.push(s))}}}};function zy(t,e,n,i,s,r,a,o){let l;if(e.side===pn?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Xi,o),l===null)return null;_o.copy(o),_o.applyMatrix4(t.matrixWorld);let c=n.ray.origin.distanceTo(_o);return c<n.near||c>n.far?null:{distance:c,point:_o.clone(),object:t}}function bo(t,e,n,i,s,r,a,o,l,c){t.getVertexPosition(o,go),t.getVertexPosition(l,yo),t.getVertexPosition(c,xo);let h=zy(t,e,n,i,go,yo,xo,pp);if(h){let d=new H;Wi.getBarycoord(pp,go,yo,xo,d),s&&(h.uv=Wi.getInterpolatedAttribute(s,o,l,c,d,new _e)),r&&(h.uv1=Wi.getInterpolatedAttribute(r,o,l,c,d,new _e)),a&&(h.normal=Wi.getInterpolatedAttribute(a,o,l,c,d,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new H,materialIndex:0};Wi.getNormal(go,yo,xo,f.normal),h.face=f,h.barycoord=d}return h}var Qt=class t extends bn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;p("z","y","x",-1,-1,i,n,e,a,r,0),p("z","y","x",1,-1,i,n,-e,a,r,1),p("x","z","y",1,1,e,i,n,s,a,2),p("x","z","y",1,-1,e,i,-n,s,a,3),p("x","y","z",1,-1,e,n,i,s,r,4),p("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new vt(c,3)),this.setAttribute("normal",new vt(h,3)),this.setAttribute("uv",new vt(d,2));function p(y,g,m,b,x,v,C,S,E,k,J){let _=v/E,w=C/k,q=v/2,z=C/2,P=S/2,D=E+1,U=k+1,Z=0,V=0,xe=new H;for(let pe=0;pe<U;pe++){let G=pe*w-z;for(let se=0;se<D;se++){let Ue=se*_-q;xe[y]=Ue*b,xe[g]=G*x,xe[m]=P,c.push(xe.x,xe.y,xe.z),xe[y]=0,xe[g]=0,xe[m]=S>0?1:-1,h.push(xe.x,xe.y,xe.z),d.push(se/E),d.push(1-pe/k),Z+=1}}for(let pe=0;pe<k;pe++)for(let G=0;G<E;G++){let se=f+G+D*pe,Ue=f+G+D*(pe+1),ne=f+(G+1)+D*(pe+1),he=f+(G+1)+D*pe;l.push(se,Ue,he),l.push(Ue,ne,he),V+=6}o.addGroup(u,V,J),u+=V,f+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Ar(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone():Array.isArray(s)?e[n][i]=s.slice():e[n][i]=s}}return e}function _n(t){let e={};for(let n=0;n<t.length;n++){let i=Ar(t[n]);for(let s in i)e[s]=i[s]}return e}function Hy(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function c0(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:gt.workingColorSpace}var Vy={clone:Ar,merge:_n},Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$n=class extends Pi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Hy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}},jo=class extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=Ti}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Vi=new H,mp=new _e,gp=new _e,dn=class extends jo{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z),Vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Vi.x,Vi.y).multiplyScalar(-e/Vi.z)}getViewSize(e,n){return this.getViewBounds(e,mp,gp),n.subVectors(gp,mp)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(Tc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,n-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},or=-90,lr=1,Zh=class extends Ht{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new dn(or,lr,e,n);s.layers=this.layers,this.add(s);let r=new dn(or,lr,e,n);r.layers=this.layers,this.add(r);let a=new dn(or,lr,e,n);a.layers=this.layers,this.add(a);let o=new dn(or,lr,e,n);o.layers=this.layers,this.add(o);let l=new dn(or,lr,e,n);l.layers=this.layers,this.add(l);let c=new dn(or,lr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,l]=n;for(let c of n)this.remove(c);if(e===Ti)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(n,r),e.setRenderTarget(i,1,s),e.render(n,a),e.setRenderTarget(i,2,s),e.render(n,o),e.setRenderTarget(i,3,s),e.render(n,l),e.setRenderTarget(i,4,s),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(n,h),e.setRenderTarget(d,f,u),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}},Jo=class extends En{constructor(e,n,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],n=n!==void 0?n:Mr,super(e,n,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Kh=class extends Ci{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Jo(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ei}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Qt(5,5,5),r=new $n({name:"CubemapFromEquirect",uniforms:Ar(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:$i});r.uniforms.tEquirect.value=n;let a=new et(s,r),o=n.minFilter;return n.minFilter===As&&(n.minFilter=ei),new Zh(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},Xc=new H,$y=new H,qy=new st,wi=class{constructor(e=new H(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Xc.subVectors(i,n).cross($y.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){let i=e.delta(Xc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:n.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||qy.getNormalMatrix(e),s=this.coplanarPoint(Xc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new wa,Mo=new H,Sa=class{constructor(e=new wi,n=new wi,i=new wi,s=new wi,r=new wi,a=new wi){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ti){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],p=s[9],y=s[10],g=s[11],m=s[12],b=s[13],x=s[14],v=s[15];if(i[0].setComponents(l-r,f-c,g-u,v-m).normalize(),i[1].setComponents(l+r,f+c,g+u,v+m).normalize(),i[2].setComponents(l+a,f+h,g+p,v+b).normalize(),i[3].setComponents(l-a,f-h,g-p,v-b).normalize(),i[4].setComponents(l-o,f-d,g-y,v-x).normalize(),n===Ti)i[5].setComponents(l+o,f+d,g+y,v+x).normalize();else if(n===Go)i[5].setComponents(o,d,y,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){return vs.center.set(0,0,0),vs.radius=.7071067811865476,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Mo.x=s.normal.x>0?e.max.x:e.min.x,Mo.y=s.normal.y>0?e.max.y:e.min.y,Mo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Mo)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function h0(){let t=null,e=!1,n=null,i=null;function s(r,a){n(r,a),i=t.requestAnimationFrame(s)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function Xy(t){let e=new WeakMap;function n(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=t.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=t.HALF_FLOAT:u=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=t.SHORT;else if(c instanceof Uint32Array)u=t.UNSIGNED_INT;else if(c instanceof Int32Array)u=t.INT;else if(c instanceof Int8Array)u=t.BYTE;else if(c instanceof Uint8Array)u=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(t.bindBuffer(c,o),d.length===0)t.bufferSubData(c,0,h);else{d.sort((u,p)=>u.start-p.start);let f=0;for(let u=1;u<d.length;u++){let p=d[f],y=d[u];y.start<=p.start+p.count+1?p.count=Math.max(p.count,y.start+y.count-p.start):(++f,d[f]=y)}d.length=f+1;for(let u=0,p=d.length;u<p;u++){let y=d[u];t.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ri=class t extends bn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=n/l,u=[],p=[],y=[],g=[];for(let m=0;m<h;m++){let b=m*f-a;for(let x=0;x<c;x++){let v=x*d-r;p.push(v,-b,0),y.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let x=b+c*m,v=b+c*(m+1),C=b+1+c*(m+1),S=b+1+c*m;u.push(x,v,S),u.push(v,C,S)}this.setIndex(u),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ex=`#ifdef USE_AOMAP
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
#endif`,tx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nx=`#ifdef USE_BATCHING
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
#endif`,ix=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ax=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ox=`#ifdef USE_IRIDESCENCE
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
#endif`,lx=`#ifdef USE_BUMPMAP
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
#endif`,cx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,hx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ux=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,yx=`#define PI 3.141592653589793
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
} // validated`,xx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vx=`vec3 transformedNormal = objectNormal;
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
#endif`,_x=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,bx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,wx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Sx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tx=`
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
}`,Ax=`#ifdef USE_ENVMAP
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
#endif`,Ex=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cx=`#ifdef USE_ENVMAP
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
#endif`,Px=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ix=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Lx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Nx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Dx=`#ifdef USE_GRADIENTMAP
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
}`,Ux=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ox=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bx=`uniform bool receiveShadow;
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
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Gx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Wx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$x=`PhysicalMaterial material;
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
#endif`,qx=`struct PhysicalMaterial {
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
}`,Xx=`
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
#endif`,Yx=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qx=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iv=`#if defined( USE_POINTS_UV )
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
#endif`,sv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,av=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ov=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cv=`#ifdef USE_MORPHTARGETS
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
#endif`,hv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dv=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,uv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gv=`#ifdef USE_NORMALMAP
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
#endif`,yv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_v=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,wv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Sv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Av=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ev=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Rv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,kv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Iv=`float getShadowMask() {
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
}`,Lv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nv=`#ifdef USE_SKINNING
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
#endif`,Dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Uv=`#ifdef USE_SKINNING
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
#endif`,Ov=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Fv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hv=`#ifdef USE_TRANSMISSION
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
#endif`,Vv=`#ifdef USE_TRANSMISSION
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
#endif`,Gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$v=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Xv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yv=`uniform sampler2D t2D;
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
}`,Zv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qv=`#include <common>
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
}`,e_=`#if DEPTH_PACKING == 3200
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
}`,t_=`#define DISTANCE
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
}`,n_=`#define DISTANCE
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
}`,i_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r_=`uniform float scale;
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
}`,a_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,l_=`uniform vec3 diffuse;
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
}`,c_=`#define LAMBERT
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
}`,h_=`#define LAMBERT
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
}`,f_=`#define MATCAP
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
}`,d_=`#define MATCAP
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
}`,u_=`#define NORMAL
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
}`,p_=`#define NORMAL
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
}`,m_=`#define PHONG
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
}`,g_=`#define PHONG
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
}`,y_=`#define STANDARD
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
}`,x_=`#define STANDARD
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
}`,v_=`#define TOON
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
}`,__=`#define TOON
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
}`,b_=`uniform float size;
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
}`,M_=`uniform vec3 diffuse;
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
}`,w_=`#include <common>
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
}`,S_=`uniform vec3 color;
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
}`,T_=`uniform float rotation;
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
}`,A_=`uniform vec3 diffuse;
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
}`,it={alphahash_fragment:Yy,alphahash_pars_fragment:Zy,alphamap_fragment:Ky,alphamap_pars_fragment:jy,alphatest_fragment:Jy,alphatest_pars_fragment:Qy,aomap_fragment:ex,aomap_pars_fragment:tx,batching_pars_vertex:nx,batching_vertex:ix,begin_vertex:sx,beginnormal_vertex:rx,bsdfs:ax,iridescence_fragment:ox,bumpmap_pars_fragment:lx,clipping_planes_fragment:cx,clipping_planes_pars_fragment:hx,clipping_planes_pars_vertex:fx,clipping_planes_vertex:dx,color_fragment:ux,color_pars_fragment:px,color_pars_vertex:mx,color_vertex:gx,common:yx,cube_uv_reflection_fragment:xx,defaultnormal_vertex:vx,displacementmap_pars_vertex:_x,displacementmap_vertex:bx,emissivemap_fragment:Mx,emissivemap_pars_fragment:wx,colorspace_fragment:Sx,colorspace_pars_fragment:Tx,envmap_fragment:Ax,envmap_common_pars_fragment:Ex,envmap_pars_fragment:Cx,envmap_pars_vertex:Px,envmap_physical_pars_fragment:zx,envmap_vertex:Rx,fog_vertex:kx,fog_pars_vertex:Ix,fog_fragment:Lx,fog_pars_fragment:Nx,gradientmap_pars_fragment:Dx,lightmap_pars_fragment:Ux,lights_lambert_fragment:Ox,lights_lambert_pars_fragment:Fx,lights_pars_begin:Bx,lights_toon_fragment:Hx,lights_toon_pars_fragment:Vx,lights_phong_fragment:Gx,lights_phong_pars_fragment:Wx,lights_physical_fragment:$x,lights_physical_pars_fragment:qx,lights_fragment_begin:Xx,lights_fragment_maps:Yx,lights_fragment_end:Zx,logdepthbuf_fragment:Kx,logdepthbuf_pars_fragment:jx,logdepthbuf_pars_vertex:Jx,logdepthbuf_vertex:Qx,map_fragment:ev,map_pars_fragment:tv,map_particle_fragment:nv,map_particle_pars_fragment:iv,metalnessmap_fragment:sv,metalnessmap_pars_fragment:rv,morphinstance_vertex:av,morphcolor_vertex:ov,morphnormal_vertex:lv,morphtarget_pars_vertex:cv,morphtarget_vertex:hv,normal_fragment_begin:fv,normal_fragment_maps:dv,normal_pars_fragment:uv,normal_pars_vertex:pv,normal_vertex:mv,normalmap_pars_fragment:gv,clearcoat_normal_fragment_begin:yv,clearcoat_normal_fragment_maps:xv,clearcoat_pars_fragment:vv,iridescence_pars_fragment:_v,opaque_fragment:bv,packing:Mv,premultiplied_alpha_fragment:wv,project_vertex:Sv,dithering_fragment:Tv,dithering_pars_fragment:Av,roughnessmap_fragment:Ev,roughnessmap_pars_fragment:Cv,shadowmap_pars_fragment:Pv,shadowmap_pars_vertex:Rv,shadowmap_vertex:kv,shadowmask_pars_fragment:Iv,skinbase_vertex:Lv,skinning_pars_vertex:Nv,skinning_vertex:Dv,skinnormal_vertex:Uv,specularmap_fragment:Ov,specularmap_pars_fragment:Fv,tonemapping_fragment:Bv,tonemapping_pars_fragment:zv,transmission_fragment:Hv,transmission_pars_fragment:Vv,uv_pars_fragment:Gv,uv_pars_vertex:Wv,uv_vertex:$v,worldpos_vertex:qv,background_vert:Xv,background_frag:Yv,backgroundCube_vert:Zv,backgroundCube_frag:Kv,cube_vert:jv,cube_frag:Jv,depth_vert:Qv,depth_frag:e_,distanceRGBA_vert:t_,distanceRGBA_frag:n_,equirect_vert:i_,equirect_frag:s_,linedashed_vert:r_,linedashed_frag:a_,meshbasic_vert:o_,meshbasic_frag:l_,meshlambert_vert:c_,meshlambert_frag:h_,meshmatcap_vert:f_,meshmatcap_frag:d_,meshnormal_vert:u_,meshnormal_frag:p_,meshphong_vert:m_,meshphong_frag:g_,meshphysical_vert:y_,meshphysical_frag:x_,meshtoon_vert:v_,meshtoon_frag:__,points_vert:b_,points_frag:M_,shadow_vert:w_,shadow_frag:S_,sprite_vert:T_,sprite_frag:A_},Re={common:{diffuse:{value:new nt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new _e(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new nt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new nt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new nt(16777215)},opacity:{value:1},center:{value:new _e(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},oi={basic:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:it.meshbasic_vert,fragmentShader:it.meshbasic_frag},lambert:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new nt(0)}}]),vertexShader:it.meshlambert_vert,fragmentShader:it.meshlambert_frag},phong:{uniforms:_n([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new nt(0)},specular:{value:new nt(1118481)},shininess:{value:30}}]),vertexShader:it.meshphong_vert,fragmentShader:it.meshphong_frag},standard:{uniforms:_n([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new nt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag},toon:{uniforms:_n([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new nt(0)}}]),vertexShader:it.meshtoon_vert,fragmentShader:it.meshtoon_frag},matcap:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:it.meshmatcap_vert,fragmentShader:it.meshmatcap_frag},points:{uniforms:_n([Re.points,Re.fog]),vertexShader:it.points_vert,fragmentShader:it.points_frag},dashed:{uniforms:_n([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:it.linedashed_vert,fragmentShader:it.linedashed_frag},depth:{uniforms:_n([Re.common,Re.displacementmap]),vertexShader:it.depth_vert,fragmentShader:it.depth_frag},normal:{uniforms:_n([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:it.meshnormal_vert,fragmentShader:it.meshnormal_frag},sprite:{uniforms:_n([Re.sprite,Re.fog]),vertexShader:it.sprite_vert,fragmentShader:it.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:it.background_vert,fragmentShader:it.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:it.backgroundCube_vert,fragmentShader:it.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:it.cube_vert,fragmentShader:it.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:it.equirect_vert,fragmentShader:it.equirect_frag},distanceRGBA:{uniforms:_n([Re.common,Re.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:it.distanceRGBA_vert,fragmentShader:it.distanceRGBA_frag},shadow:{uniforms:_n([Re.lights,Re.fog,{color:{value:new nt(0)},opacity:{value:1}}]),vertexShader:it.shadow_vert,fragmentShader:it.shadow_frag}};oi.physical={uniforms:_n([oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new _e(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new nt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new _e},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new nt(0)},specularColor:{value:new nt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new _e},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:it.meshphysical_vert,fragmentShader:it.meshphysical_frag};var wo={r:0,b:0,g:0},_s=new ci,E_=new Lt;function C_(t,e,n,i,s,r,a){let o=new nt(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function p(b){let x=b.isScene===!0?b.background:null;return x&&x.isTexture&&(x=(b.backgroundBlurriness>0?n:e).get(x)),x}function y(b){let x=!1,v=p(b);v===null?m(o,l):v&&v.isColor&&(m(v,1),x=!0);let C=t.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function g(b,x){let v=p(x);v&&(v.isCubeTexture||v.mapping===xl)?(h===void 0&&(h=new et(new Qt(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:Ar(oi.backgroundCube.uniforms),vertexShader:oi.backgroundCube.vertexShader,fragmentShader:oi.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,S,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(x.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(E_.makeRotationFromEuler(_s)),h.material.toneMapped=gt.getTransfer(v.colorSpace)!==wt,(d!==v||f!==v.version||u!==t.toneMapping)&&(h.material.needsUpdate=!0,d=v,f=v.version,u=t.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new et(new Ri(2,2),new $n({name:"BackgroundMaterial",uniforms:Ar(oi.background.uniforms),vertexShader:oi.background.vertexShader,fragmentShader:oi.background.fragmentShader,side:Xi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=gt.getTransfer(v.colorSpace)!==wt,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(d!==v||f!==v.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,d=v,f=v.version,u=t.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,x){b.getRGB(wo,c0(t)),i.buffers.color.setClear(wo.r,wo.g,wo.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(b,x=1){o.set(b),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(o,l)},render:y,addToRenderList:g}}function P_(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=f(null),r=s,a=!1;function o(_,w,q,z,P){let D=!1,U=d(z,q,w);r!==U&&(r=U,c(r.object)),D=u(_,z,q,P),D&&p(_,z,q,P),P!==null&&e.update(P,t.ELEMENT_ARRAY_BUFFER),(D||a)&&(a=!1,v(_,w,q,z),P!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function l(){return t.createVertexArray()}function c(_){return t.bindVertexArray(_)}function h(_){return t.deleteVertexArray(_)}function d(_,w,q){let z=q.wireframe===!0,P=i[_.id];P===void 0&&(P={},i[_.id]=P);let D=P[w.id];D===void 0&&(D={},P[w.id]=D);let U=D[z];return U===void 0&&(U=f(l()),D[z]=U),U}function f(_){let w=[],q=[],z=[];for(let P=0;P<n;P++)w[P]=0,q[P]=0,z[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:q,attributeDivisors:z,object:_,attributes:{},index:null}}function u(_,w,q,z){let P=r.attributes,D=w.attributes,U=0,Z=q.getAttributes();for(let V in Z)if(Z[V].location>=0){let pe=P[V],G=D[V];if(G===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(G=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(G=_.instanceColor)),pe===void 0||pe.attribute!==G||G&&pe.data!==G.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function p(_,w,q,z){let P={},D=w.attributes,U=0,Z=q.getAttributes();for(let V in Z)if(Z[V].location>=0){let pe=D[V];pe===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(pe=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(pe=_.instanceColor));let G={};G.attribute=pe,pe&&pe.data&&(G.data=pe.data),P[V]=G,U++}r.attributes=P,r.attributesNum=U,r.index=z}function y(){let _=r.newAttributes;for(let w=0,q=_.length;w<q;w++)_[w]=0}function g(_){m(_,0)}function m(_,w){let q=r.newAttributes,z=r.enabledAttributes,P=r.attributeDivisors;q[_]=1,z[_]===0&&(t.enableVertexAttribArray(_),z[_]=1),P[_]!==w&&(t.vertexAttribDivisor(_,w),P[_]=w)}function b(){let _=r.newAttributes,w=r.enabledAttributes;for(let q=0,z=w.length;q<z;q++)w[q]!==_[q]&&(t.disableVertexAttribArray(q),w[q]=0)}function x(_,w,q,z,P,D,U){U===!0?t.vertexAttribIPointer(_,w,q,P,D):t.vertexAttribPointer(_,w,q,z,P,D)}function v(_,w,q,z){y();let P=z.attributes,D=q.getAttributes(),U=w.defaultAttributeValues;for(let Z in D){let V=D[Z];if(V.location>=0){let xe=P[Z];if(xe===void 0&&(Z==="instanceMatrix"&&_.instanceMatrix&&(xe=_.instanceMatrix),Z==="instanceColor"&&_.instanceColor&&(xe=_.instanceColor)),xe!==void 0){let pe=xe.normalized,G=xe.itemSize,se=e.get(xe);if(se===void 0)continue;let Ue=se.buffer,ne=se.type,he=se.bytesPerElement,ye=ne===t.INT||ne===t.UNSIGNED_INT||xe.gpuType===Pf;if(xe.isInterleavedBufferAttribute){let Te=xe.data,qe=Te.stride,We=xe.offset;if(Te.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)m(V.location+He,Te.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Te.meshPerAttribute*Te.count)}else for(let He=0;He<V.locationSize;He++)g(V.location+He);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let He=0;He<V.locationSize;He++)x(V.location+He,G/V.locationSize,ne,pe,qe*he,(We+G/V.locationSize*He)*he,ye)}else{if(xe.isInstancedBufferAttribute){for(let Te=0;Te<V.locationSize;Te++)m(V.location+Te,xe.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Te=0;Te<V.locationSize;Te++)g(V.location+Te);t.bindBuffer(t.ARRAY_BUFFER,Ue);for(let Te=0;Te<V.locationSize;Te++)x(V.location+Te,G/V.locationSize,ne,pe,G*he,G/V.locationSize*Te*he,ye)}}else if(U!==void 0){let pe=U[Z];if(pe!==void 0)switch(pe.length){case 2:t.vertexAttrib2fv(V.location,pe);break;case 3:t.vertexAttrib3fv(V.location,pe);break;case 4:t.vertexAttrib4fv(V.location,pe);break;default:t.vertexAttrib1fv(V.location,pe)}}}}b()}function C(){k();for(let _ in i){let w=i[_];for(let q in w){let z=w[q];for(let P in z)h(z[P].object),delete z[P];delete w[q]}delete i[_]}}function S(_){if(i[_.id]===void 0)return;let w=i[_.id];for(let q in w){let z=w[q];for(let P in z)h(z[P].object),delete z[P];delete w[q]}delete i[_.id]}function E(_){for(let w in i){let q=i[w];if(q[_.id]===void 0)continue;let z=q[_.id];for(let P in z)h(z[P].object),delete z[P];delete q[_.id]}}function k(){J(),a=!0,r!==s&&(r=s,c(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:k,resetDefaultState:J,dispose:C,releaseStatesOfGeometry:S,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:g,disableUnusedAttributes:b}}function R_(t,e,n){let i;function s(c){i=c}function r(c,h){t.drawArrays(i,c,h),n.update(h,i,1)}function a(c,h,d){d!==0&&(t.drawArraysInstanced(i,c,h,d),n.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let p=0;p<d;p++)u+=h[p];n.update(u,i,1)}function l(c,h,d,f){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<c.length;p++)a(c[p],h[p],f[p]);else{u.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let p=0;for(let y=0;y<d;y++)p+=h[y];for(let y=0;y<f.length;y++)n.update(p,i,f[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function k_(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==ti&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let k=E===Ia&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Ei&&i.convert(E)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Si&&!k)}function l(E){if(E==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let u=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),m=t.getParameter(t.MAX_VERTEX_ATTRIBS),b=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=p>0,S=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:p,maxTextureSize:y,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:b,maxVaryings:x,maxFragmentUniforms:v,vertexTextures:C,maxSamples:S}}function I_(t){let e=this,n=null,i=0,s=!1,r=!1,a=new wi,o=new st,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||i!==0||s;return s=f,i=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){n=h(d,f,0)},this.setState=function(d,f,u){let p=d.clippingPlanes,y=d.clipIntersection,g=d.clipShadows,m=t.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let b=r?0:i,x=b*4,v=m.clippingState||null;l.value=v,v=h(p,f,x,u);for(let C=0;C!==x;++C)v[C]=n[C];m.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,u,p){let y=d!==null?d.length:0,g=null;if(y!==0){if(g=l.value,p!==!0||g===null){let m=u+y*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,v=u;x!==y;++x,v+=4)a.copy(d[x]).applyMatrix4(b,o),a.normal.toArray(g,v),g[v+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}function L_(t){let e=new WeakMap;function n(a,o){return o===ph?a.mapping=Mr:o===mh&&(a.mapping=wr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===ph||o===mh)if(e.has(a)){let l=e.get(a).texture;return n(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Kh(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",s),n(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var Qo=class extends jo{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,l=s-n;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},pr=4,yp=[.125,.215,.35,.446,.526,.582],Ss=20,Yc=new Qo,xp=new nt,Zc=null,Kc=0,jc=0,Jc=!1,Ms=(1+Math.sqrt(5))/2,cr=1/Ms,vp=[new H(-Ms,cr,0),new H(Ms,cr,0),new H(-cr,0,Ms),new H(cr,0,Ms),new H(0,Ms,-cr),new H(0,Ms,cr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],el=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,s=100){Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),n>0&&this._blur(r,0,0,n),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zc,Kc,jc),this._renderer.xr.enabled=Jc,e.scissorTest=!1,So(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Mr||e.mapping===wr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zc=this._renderer.getRenderTarget(),Kc=this._renderer.getActiveCubeFace(),jc=this._renderer.getActiveMipmapLevel(),Jc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ei,minFilter:ei,generateMipmaps:!1,type:Ia,format:ti,colorSpace:Ji,depthBuffer:!1},s=_p(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_p(e,n,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N_(r)),this._blurMaterial=D_(r,e,n)}return s}_compileMaterial(e){let n=new et(this._lodPlanes[0],e);this._renderer.compile(n,Yc)}_sceneToCubeUV(e,n,i,s){let o=new dn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(xp),h.toneMapping=qi,h.autoClear=!1;let u=new qt({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),p=new et(new Qt,u),y=!1,g=e.background;g?g.isColor&&(u.color.copy(g),e.background=null,y=!0):(u.color.copy(xp),y=!0);for(let m=0;m<6;m++){let b=m%3;b===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):b===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let x=this._cubeSize;So(s,b*x,m>2?x:0,x,x),h.setRenderTarget(s),y&&h.render(p,o),h.render(e,o)}p.geometry.dispose(),p.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=g}_textureToCubeUV(e,n){let i=this._renderer,s=e.mapping===Mr||e.mapping===wr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new et(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;So(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,Yc)}_applyPMREM(e){let n=this._renderer,i=n.autoClear;n.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=vp[(s-r-1)%vp.length];this._blur(e,r-1,r,a,o)}n.autoClear=i}_blur(e,n,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,n,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new et(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[i]-1,p=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*Ss-1),y=r/p,g=isFinite(r)?1+Math.floor(h*y):Ss;g>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ss}`);let m=[],b=0;for(let E=0;E<Ss;++E){let k=E/y,J=Math.exp(-k*k/2);m.push(J),E===0?b+=J:E<g&&(b+=2*J)}for(let E=0;E<m.length;E++)m[E]=m[E]/b;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-i;let v=this._sizeLods[s],C=3*v*(s>x-pr?s-x+pr:0),S=4*(this._cubeSize-v);So(n,C,S,3*v,2*v),l.setRenderTarget(n),l.render(d,Yc)}};function N_(t){let e=[],n=[],i=[],s=t,r=t-pr+1+yp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);n.push(o);let l=1/o;a>t-pr?l=yp[a-t+pr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,p=6,y=3,g=2,m=1,b=new Float32Array(y*p*u),x=new Float32Array(g*p*u),v=new Float32Array(m*p*u);for(let S=0;S<u;S++){let E=S%3*2/3-1,k=S>2?0:-1,J=[E,k,0,E+2/3,k,0,E+2/3,k+1,0,E,k,0,E+2/3,k+1,0,E,k+1,0];b.set(J,y*p*S),x.set(f,g*p*S);let _=[S,S,S,S,S,S];v.set(_,m*p*S)}let C=new bn;C.setAttribute("position",new Nn(b,y)),C.setAttribute("uv",new Nn(x,g)),C.setAttribute("faceIndex",new Nn(v,m)),e.push(C),s>pr&&s--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function _p(t,e,n){let i=new Ci(t,e,n);return i.texture.mapping=xl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function So(t,e,n,i,s){t.viewport.set(e,n,i,s),t.scissor.set(e,n,i,s)}function D_(t,e,n){let i=new Float32Array(Ss),s=new H(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Of(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function bp(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Of(),fragmentShader:`

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
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Mp(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Of(){return`

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
	`}function U_(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===ph||l===mh,h=l===Mr||l===wr;if(c||h){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return n===null&&(n=new el(t)),d=c?n.fromEquirectangular(o,d):n.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let u=o.image;return c&&u&&u.height>0||h&&u&&s(u)?(n===null&&(n=new el(t)),d=c?n.fromEquirectangular(o):n.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function O_(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=t.getExtension(i)}return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Fo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function F_(t,e,n,i){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);for(let p in f.morphAttributes){let y=f.morphAttributes[p];for(let g=0,m=y.length;g<m;g++)e.remove(y[g])}f.removeEventListener("dispose",a),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,n.memory.geometries++),f}function l(d){let f=d.attributes;for(let p in f)e.update(f[p],t.ARRAY_BUFFER);let u=d.morphAttributes;for(let p in u){let y=u[p];for(let g=0,m=y.length;g<m;g++)e.update(y[g],t.ARRAY_BUFFER)}}function c(d){let f=[],u=d.index,p=d.attributes.position,y=0;if(u!==null){let b=u.array;y=u.version;for(let x=0,v=b.length;x<v;x+=3){let C=b[x+0],S=b[x+1],E=b[x+2];f.push(C,S,S,E,E,C)}}else if(p!==void 0){let b=p.array;y=p.version;for(let x=0,v=b.length/3-1;x<v;x+=3){let C=x+0,S=x+1,E=x+2;f.push(C,S,S,E,E,C)}}else return;let g=new(o0(f)?Ko:Zo)(f,1);g.version=y;let m=r.get(d);m&&e.remove(m),r.set(d,g)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function B_(t,e,n){let i;function s(f){i=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){t.drawElements(i,u,r,f*a),n.update(u,i,1)}function c(f,u,p){p!==0&&(t.drawElementsInstanced(i,u,r,f*a,p),n.update(u,i,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,f,0,p);let g=0;for(let m=0;m<p;m++)g+=u[m];n.update(g,i,1)}function d(f,u,p,y){if(p===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<f.length;m++)c(f[m]/a,u[m],y[m]);else{g.multiDrawElementsInstancedWEBGL(i,u,0,r,f,0,y,0,p);let m=0;for(let b=0;b<p;b++)m+=u[b];for(let b=0;b<y.length;b++)n.update(m,i,y[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function z_(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function H_(t,e,n){let i=new WeakMap,s=new Dt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=i.get(o);if(f===void 0||f.count!==d){let J=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",J)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],x=0;u===!0&&(x=1),p===!0&&(x=2),y===!0&&(x=3);let v=o.attributes.position.count*x,C=1;v>e.maxTextureSize&&(C=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*C*4*d),E=new Xo(S,v,C,d);E.type=Si,E.needsUpdate=!0;let k=x*4;for(let _=0;_<d;_++){let w=g[_],q=m[_],z=b[_],P=v*C*4*_;for(let D=0;D<w.count;D++){let U=D*k;u===!0&&(s.fromBufferAttribute(w,D),S[P+U+0]=s.x,S[P+U+1]=s.y,S[P+U+2]=s.z,S[P+U+3]=0),p===!0&&(s.fromBufferAttribute(q,D),S[P+U+4]=s.x,S[P+U+5]=s.y,S[P+U+6]=s.z,S[P+U+7]=0),y===!0&&(s.fromBufferAttribute(z,D),S[P+U+8]=s.x,S[P+U+9]=s.y,S[P+U+10]=s.z,S[P+U+11]=z.itemSize===4?s.w:1)}}f={count:d,texture:E,size:new _e(v,C)},i.set(o,f),o.addEventListener("dispose",J)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let u=0;for(let y=0;y<c.length;y++)u+=c[y];let p=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(t,"morphTargetBaseInfluence",p),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:r}}function V_(t,e,n,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:r,dispose:a}}var tl=class extends En{constructor(e,n,i,s,r,a,o,l,c,h=yr){if(h!==yr&&h!==Tr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===yr&&(i=Es),i===void 0&&h===Tr&&(i=Sr),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}},f0=new En,wp=new tl(1,1),d0=new Xo,u0=new Xh,p0=new Jo,Sp=[],Tp=[],Ap=new Float32Array(16),Ep=new Float32Array(9),Cp=new Float32Array(4);function Rr(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=Sp[s];if(r===void 0&&(r=new Float32Array(s),Sp[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function Xt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Yt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bl(t,e){let n=Tp[e];n===void 0&&(n=new Int32Array(e),Tp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function G_(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function W_(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2fv(this.addr,e),Yt(n,e)}}function $_(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Xt(n,e))return;t.uniform3fv(this.addr,e),Yt(n,e)}}function q_(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4fv(this.addr,e),Yt(n,e)}}function X_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Cp.set(i),t.uniformMatrix2fv(this.addr,!1,Cp),Yt(n,i)}}function Y_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Ep.set(i),t.uniformMatrix3fv(this.addr,!1,Ep),Yt(n,i)}}function Z_(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(Xt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Yt(n,e)}else{if(Xt(n,i))return;Ap.set(i),t.uniformMatrix4fv(this.addr,!1,Ap),Yt(n,i)}}function K_(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function j_(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2iv(this.addr,e),Yt(n,e)}}function J_(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3iv(this.addr,e),Yt(n,e)}}function Q_(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4iv(this.addr,e),Yt(n,e)}}function eb(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Xt(n,e))return;t.uniform2uiv(this.addr,e),Yt(n,e)}}function nb(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Xt(n,e))return;t.uniform3uiv(this.addr,e),Yt(n,e)}}function ib(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Xt(n,e))return;t.uniform4uiv(this.addr,e),Yt(n,e)}}function sb(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?(wp.compareFunction=a0,r=wp):r=f0,n.setTexture2D(e||r,s)}function rb(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||u0,s)}function ab(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTextureCube(e||p0,s)}function ob(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||d0,s)}function lb(t){switch(t){case 5126:return G_;case 35664:return W_;case 35665:return $_;case 35666:return q_;case 35674:return X_;case 35675:return Y_;case 35676:return Z_;case 5124:case 35670:return K_;case 35667:case 35671:return j_;case 35668:case 35672:return J_;case 35669:case 35673:return Q_;case 5125:return eb;case 36294:return tb;case 36295:return nb;case 36296:return ib;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return rb;case 35680:case 36300:case 36308:case 36293:return ab;case 36289:case 36303:case 36311:case 36292:return ob}}function cb(t,e){t.uniform1fv(this.addr,e)}function hb(t,e){let n=Rr(e,this.size,2);t.uniform2fv(this.addr,n)}function fb(t,e){let n=Rr(e,this.size,3);t.uniform3fv(this.addr,n)}function db(t,e){let n=Rr(e,this.size,4);t.uniform4fv(this.addr,n)}function ub(t,e){let n=Rr(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pb(t,e){let n=Rr(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mb(t,e){let n=Rr(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gb(t,e){t.uniform1iv(this.addr,e)}function yb(t,e){t.uniform2iv(this.addr,e)}function xb(t,e){t.uniform3iv(this.addr,e)}function vb(t,e){t.uniform4iv(this.addr,e)}function _b(t,e){t.uniform1uiv(this.addr,e)}function bb(t,e){t.uniform2uiv(this.addr,e)}function Mb(t,e){t.uniform3uiv(this.addr,e)}function wb(t,e){t.uniform4uiv(this.addr,e)}function Sb(t,e,n){let i=this.cache,s=e.length,r=bl(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTexture2D(e[a]||f0,r[a])}function Tb(t,e,n){let i=this.cache,s=e.length,r=bl(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||u0,r[a])}function Ab(t,e,n){let i=this.cache,s=e.length,r=bl(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTextureCube(e[a]||p0,r[a])}function Eb(t,e,n){let i=this.cache,s=e.length,r=bl(n,s);Xt(i,r)||(t.uniform1iv(this.addr,r),Yt(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||d0,r[a])}function Cb(t){switch(t){case 5126:return cb;case 35664:return hb;case 35665:return fb;case 35666:return db;case 35674:return ub;case 35675:return pb;case 35676:return mb;case 5124:case 35670:return gb;case 35667:case 35671:return yb;case 35668:case 35672:return xb;case 35669:case 35673:return vb;case 5125:return _b;case 36294:return bb;case 36295:return Mb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return Sb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Ab;case 36289:case 36303:case 36311:case 36292:return Eb}}var jh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lb(n.type)}},Jh=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=Cb(n.type)}},Qh=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},Qc=/(\w+)(\])?(\[|\.)?/g;function Pp(t,e){t.seq.push(e),t.map[e.id]=e}function Pb(t,e,n){let i=t.name,s=i.length;for(Qc.lastIndex=0;;){let r=Qc.exec(i),a=Qc.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pp(n,c===void 0?new jh(o,t,e):new Jh(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Qh(o),Pp(n,d)),n=d}}}var vr=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(n,s),a=e.getUniformLocation(n,r.name);Pb(r,a,this)}}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};function Rp(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}var Rb=37297,kb=0;function Ib(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function Lb(t){let e=gt.getPrimaries(gt.workingColorSpace),n=gt.getPrimaries(t),i;switch(e===n?i="":e===Vo&&n===Ho?i="LinearDisplayP3ToLinearSRGB":e===Ho&&n===Vo&&(i="LinearSRGBToLinearDisplayP3"),t){case Ji:case _l:return[i,"LinearTransferOETF"];case Jt:case Uf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function kp(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),s=t.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return n.toUpperCase()+`

`+s+`

`+Ib(t.getShaderSource(e),a)}else return s}function Nb(t,e){let n=Lb(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function Db(t,e){let n;switch(e){case ry:n="Linear";break;case ay:n="Reinhard";break;case oy:n="Cineon";break;case ly:n="ACESFilmic";break;case hy:n="AgX";break;case fy:n="Neutral";break;case cy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}var To=new H;function Ub(){gt.getLuminanceCoefficients(To);let t=To.x.toFixed(4),e=To.y.toFixed(4),n=To.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ob(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function Fb(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Bb(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function ga(t){return t!==""}function Ip(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Lp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var zb=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(t){return t.replace(zb,Vb)}var Hb=new Map;function Vb(t,e){let n=it[e];if(n===void 0){let i=Hb.get(e);if(i!==void 0)n=it[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return ef(n)}var Gb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Np(t){return t.replace(Gb,Wb)}function Wb(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Dp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function $b(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===Yp?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===Cf?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Mi&&(e="SHADOWMAP_TYPE_VSM"),e}function qb(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Mr:case wr:e="ENVMAP_TYPE_CUBE";break;case xl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Xb(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case wr:e="ENVMAP_MODE_REFRACTION";break}return e}function Yb(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Zp:e="ENVMAP_BLENDING_MULTIPLY";break;case iy:e="ENVMAP_BLENDING_MIX";break;case sy:e="ENVMAP_BLENDING_ADD";break}return e}function Zb(t){let e=t.envMapCubeUVHeight;if(e===null)return null;let n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:i,maxMip:n}}function Kb(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,l=$b(n),c=qb(n),h=Xb(n),d=Yb(n),f=Zb(n),u=Ob(n),p=Fb(r),y=s.createProgram(),g,m,b=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(ga).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(ga).join(`
`),m.length>0&&(m+=`
`)):(g=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),m=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==qi?"#define TONE_MAPPING":"",n.toneMapping!==qi?it.tonemapping_pars_fragment:"",n.toneMapping!==qi?Db("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",it.colorspace_pars_fragment,Nb("linearToOutputTexel",n.outputColorSpace),Ub(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ga).join(`
`)),a=ef(a),a=Ip(a,n),a=Lp(a,n),o=ef(o),o=Ip(o,n),o=Lp(o,n),a=Np(a),o=Np(o),n.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",n.glslVersion===Qu?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=b+g+a,v=b+m+o,C=Rp(s,s.VERTEX_SHADER,x),S=Rp(s,s.FRAGMENT_SHADER,v);s.attachShader(y,C),s.attachShader(y,S),n.index0AttributeName!==void 0?s.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(w){if(t.debug.checkShaderErrors){let q=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(C).trim(),P=s.getShaderInfoLog(S).trim(),D=!0,U=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(D=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,y,C,S);else{let Z=kp(s,C,"vertex"),V=kp(s,S,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+q+`
`+Z+`
`+V)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(z===""||P==="")&&(U=!1);U&&(w.diagnostics={runnable:D,programLog:q,vertexShader:{log:z,prefix:g},fragmentShader:{log:P,prefix:m}})}s.deleteShader(C),s.deleteShader(S),k=new vr(s,y),J=Bb(s,y)}let k;this.getUniforms=function(){return k===void 0&&E(this),k};let J;this.getAttributes=function(){return J===void 0&&E(this),J};let _=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(y,Rb)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=S,this}var jb=0,tf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let n=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(n),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new nf(e),n.set(e,i)),i}},nf=class{constructor(e){this.id=jb++,this.code=e,this.usedTimes=0}};function Jb(t,e,n,i,s,r,a){let o=new Yo,l=new tf,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,u=s.vertexTextures,p=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,w,q,z,P){let D=z.fog,U=P.geometry,Z=_.isMeshStandardMaterial?z.environment:null,V=(_.isMeshStandardMaterial?n:e).get(_.envMap||Z),xe=V&&V.mapping===xl?V.image.height:null,pe=y[_.type];_.precision!==null&&(p=s.getMaxPrecision(_.precision),p!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",p,"instead."));let G=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,se=G!==void 0?G.length:0,Ue=0;U.morphAttributes.position!==void 0&&(Ue=1),U.morphAttributes.normal!==void 0&&(Ue=2),U.morphAttributes.color!==void 0&&(Ue=3);let ne,he,ye,Te;if(pe){let Kt=oi[pe];ne=Kt.vertexShader,he=Kt.fragmentShader}else ne=_.vertexShader,he=_.fragmentShader,l.update(_),ye=l.getVertexShaderID(_),Te=l.getFragmentShaderID(_);let qe=t.getRenderTarget(),We=P.isInstancedMesh===!0,He=P.isBatchedMesh===!0,Ge=!!_.map,re=!!_.matcap,I=!!V,le=!!_.aoMap,de=!!_.lightMap,ge=!!_.bumpMap,Se=!!_.normalMap,Fe=!!_.displacementMap,Ee=!!_.emissiveMap,R=!!_.metalnessMap,M=!!_.roughnessMap,X=_.anisotropy>0,K=_.clearcoat>0,oe=_.dispersion>0,ae=_.iridescence>0,Be=_.sheen>0,Ce=_.transmission>0,Ne=X&&!!_.anisotropyMap,be=K&&!!_.clearcoatMap,te=K&&!!_.clearcoatNormalMap,ce=K&&!!_.clearcoatRoughnessMap,Oe=ae&&!!_.iridescenceMap,Me=ae&&!!_.iridescenceThicknessMap,ue=Be&&!!_.sheenColorMap,Xe=Be&&!!_.sheenRoughnessMap,Ye=!!_.specularMap,ut=!!_.specularColorMap,F=!!_.specularIntensityMap,Pe=Ce&&!!_.transmissionMap,ee=Ce&&!!_.thicknessMap,fe=!!_.gradientMap,Ie=!!_.alphaMap,De=_.alphaTest>0,ct=!!_.alphaHash,Ct=!!_.extensions,rn=qi;_.toneMapped&&(qe===null||qe.isXRRenderTarget===!0)&&(rn=t.toneMapping);let dt={shaderID:pe,shaderType:_.type,shaderName:_.name,vertexShader:ne,fragmentShader:he,defines:_.defines,customVertexShaderID:ye,customFragmentShaderID:Te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:p,batching:He,batchingColor:He&&P._colorsTexture!==null,instancing:We,instancingColor:We&&P.instanceColor!==null,instancingMorph:We&&P.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:qe===null?t.outputColorSpace:qe.isXRRenderTarget===!0?qe.texture.colorSpace:Ji,alphaToCoverage:!!_.alphaToCoverage,map:Ge,matcap:re,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:xe,aoMap:le,lightMap:de,bumpMap:ge,normalMap:Se,displacementMap:u&&Fe,emissiveMap:Ee,normalMapObjectSpace:Se&&_.normalMapType===my,normalMapTangentSpace:Se&&_.normalMapType===Df,metalnessMap:R,roughnessMap:M,anisotropy:X,anisotropyMap:Ne,clearcoat:K,clearcoatMap:be,clearcoatNormalMap:te,clearcoatRoughnessMap:ce,dispersion:oe,iridescence:ae,iridescenceMap:Oe,iridescenceThicknessMap:Me,sheen:Be,sheenColorMap:ue,sheenRoughnessMap:Xe,specularMap:Ye,specularColorMap:ut,specularIntensityMap:F,transmission:Ce,transmissionMap:Pe,thicknessMap:ee,gradientMap:fe,opaque:_.transparent===!1&&_.blending===gr&&_.alphaToCoverage===!1,alphaMap:Ie,alphaTest:De,alphaHash:ct,combine:_.combine,mapUv:Ge&&g(_.map.channel),aoMapUv:le&&g(_.aoMap.channel),lightMapUv:de&&g(_.lightMap.channel),bumpMapUv:ge&&g(_.bumpMap.channel),normalMapUv:Se&&g(_.normalMap.channel),displacementMapUv:Fe&&g(_.displacementMap.channel),emissiveMapUv:Ee&&g(_.emissiveMap.channel),metalnessMapUv:R&&g(_.metalnessMap.channel),roughnessMapUv:M&&g(_.roughnessMap.channel),anisotropyMapUv:Ne&&g(_.anisotropyMap.channel),clearcoatMapUv:be&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:te&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:Xe&&g(_.sheenRoughnessMap.channel),specularMapUv:Ye&&g(_.specularMap.channel),specularColorMapUv:ut&&g(_.specularColorMap.channel),specularIntensityMapUv:F&&g(_.specularIntensityMap.channel),transmissionMapUv:Pe&&g(_.transmissionMap.channel),thicknessMapUv:ee&&g(_.thicknessMap.channel),alphaMapUv:Ie&&g(_.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Se||X),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!U.attributes.uv&&(Ge||Ie),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:P.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Ue,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&q.length>0,shadowMapType:t.shadowMap.type,toneMapping:rn,decodeVideoTexture:Ge&&_.map.isVideoTexture===!0&&gt.getTransfer(_.map.colorSpace)===wt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===$t,flipSided:_.side===pn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ct&&_.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&_.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return dt.vertexUv1s=c.has(1),dt.vertexUv2s=c.has(2),dt.vertexUv3s=c.has(3),c.clear(),dt}function b(_){let w=[];if(_.shaderID?w.push(_.shaderID):(w.push(_.customVertexShaderID),w.push(_.customFragmentShaderID)),_.defines!==void 0)for(let q in _.defines)w.push(q),w.push(_.defines[q]);return _.isRawShaderMaterial===!1&&(x(w,_),v(w,_),w.push(t.outputColorSpace)),w.push(_.customProgramCacheKey),w.join()}function x(_,w){_.push(w.precision),_.push(w.outputColorSpace),_.push(w.envMapMode),_.push(w.envMapCubeUVHeight),_.push(w.mapUv),_.push(w.alphaMapUv),_.push(w.lightMapUv),_.push(w.aoMapUv),_.push(w.bumpMapUv),_.push(w.normalMapUv),_.push(w.displacementMapUv),_.push(w.emissiveMapUv),_.push(w.metalnessMapUv),_.push(w.roughnessMapUv),_.push(w.anisotropyMapUv),_.push(w.clearcoatMapUv),_.push(w.clearcoatNormalMapUv),_.push(w.clearcoatRoughnessMapUv),_.push(w.iridescenceMapUv),_.push(w.iridescenceThicknessMapUv),_.push(w.sheenColorMapUv),_.push(w.sheenRoughnessMapUv),_.push(w.specularMapUv),_.push(w.specularColorMapUv),_.push(w.specularIntensityMapUv),_.push(w.transmissionMapUv),_.push(w.thicknessMapUv),_.push(w.combine),_.push(w.fogExp2),_.push(w.sizeAttenuation),_.push(w.morphTargetsCount),_.push(w.morphAttributeCount),_.push(w.numDirLights),_.push(w.numPointLights),_.push(w.numSpotLights),_.push(w.numSpotLightMaps),_.push(w.numHemiLights),_.push(w.numRectAreaLights),_.push(w.numDirLightShadows),_.push(w.numPointLightShadows),_.push(w.numSpotLightShadows),_.push(w.numSpotLightShadowsWithMaps),_.push(w.numLightProbes),_.push(w.shadowMapType),_.push(w.toneMapping),_.push(w.numClippingPlanes),_.push(w.numClipIntersection),_.push(w.depthPacking)}function v(_,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){let w=y[_.type],q;if(w){let z=oi[w];q=Vy.clone(z.uniforms)}else q=_.uniforms;return q}function S(_,w){let q;for(let z=0,P=h.length;z<P;z++){let D=h[z];if(D.cacheKey===w){q=D,++q.usedTimes;break}}return q===void 0&&(q=new Kb(t,w,_,r),h.push(q)),q}function E(_){if(--_.usedTimes===0){let w=h.indexOf(_);h[w]=h[h.length-1],h.pop(),_.destroy()}}function k(_){l.remove(_)}function J(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:C,acquireProgram:S,releaseProgram:E,releaseShaderCache:k,programs:h,dispose:J}}function Qb(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,l){t.get(a)[o]=l}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function eM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Up(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Op(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d,f,u,p,y,g){let m=t[e];return m===void 0?(m={id:d.id,object:d,geometry:f,material:u,groupOrder:p,renderOrder:d.renderOrder,z:y,group:g},t[e]=m):(m.id=d.id,m.object=d,m.geometry=f,m.material=u,m.groupOrder=p,m.renderOrder=d.renderOrder,m.z=y,m.group=g),e++,m}function o(d,f,u,p,y,g){let m=a(d,f,u,p,y,g);u.transmission>0?i.push(m):u.transparent===!0?s.push(m):n.push(m)}function l(d,f,u,p,y,g){let m=a(d,f,u,p,y,g);u.transmission>0?i.unshift(m):u.transparent===!0?s.unshift(m):n.unshift(m)}function c(d,f){n.length>1&&n.sort(d||eM),i.length>1&&i.sort(f||Up),s.length>1&&s.sort(f||Up)}function h(){for(let d=e,f=t.length;d<f;d++){let u=t[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function tM(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new Op,t.set(i,[a])):s>=r.length?(a=new Op,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function nM(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new H,color:new nt};break;case"SpotLight":n={position:new H,direction:new H,color:new nt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new H,color:new nt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new H,skyColor:new nt,groundColor:new nt};break;case"RectAreaLight":n={color:new nt,position:new H,halfWidth:new H,halfHeight:new H};break}return t[e.id]=n,n}}}function iM(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _e,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}var sM=0;function rM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function aM(t){let e=new nM,n=iM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new Lt,a=new Lt;function o(c){let h=0,d=0,f=0;for(let J=0;J<9;J++)i.probe[J].set(0,0,0);let u=0,p=0,y=0,g=0,m=0,b=0,x=0,v=0,C=0,S=0,E=0;c.sort(rM);for(let J=0,_=c.length;J<_;J++){let w=c[J],q=w.color,z=w.intensity,P=w.distance,D=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=q.r*z,d+=q.g*z,f+=q.b*z;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],z);E++}else if(w.isDirectionalLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let Z=w.shadow,V=n.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.directionalShadow[u]=V,i.directionalShadowMap[u]=D,i.directionalShadowMatrix[u]=w.shadow.matrix,b++}i.directional[u]=U,u++}else if(w.isSpotLight){let U=e.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(q).multiplyScalar(z),U.distance=P,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[y]=U;let Z=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,Z.updateMatrices(w),w.castShadow&&S++),i.spotLightMatrix[y]=Z.matrix,w.castShadow){let V=n.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=D,v++}y++}else if(w.isRectAreaLight){let U=e.get(w);U.color.copy(q).multiplyScalar(z),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[g]=U,g++}else if(w.isPointLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let Z=w.shadow,V=n.get(w);V.shadowIntensity=Z.intensity,V.shadowBias=Z.bias,V.shadowNormalBias=Z.normalBias,V.shadowRadius=Z.radius,V.shadowMapSize=Z.mapSize,V.shadowCameraNear=Z.camera.near,V.shadowCameraFar=Z.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=D,i.pointShadowMatrix[p]=w.shadow.matrix,x++}i.point[p]=U,p++}else if(w.isHemisphereLight){let U=e.get(w);U.skyColor.copy(w.color).multiplyScalar(z),U.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[m]=U,m++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Re.LTC_FLOAT_1,i.rectAreaLTC2=Re.LTC_FLOAT_2):(i.rectAreaLTC1=Re.LTC_HALF_1,i.rectAreaLTC2=Re.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;let k=i.hash;(k.directionalLength!==u||k.pointLength!==p||k.spotLength!==y||k.rectAreaLength!==g||k.hemiLength!==m||k.numDirectionalShadows!==b||k.numPointShadows!==x||k.numSpotShadows!==v||k.numSpotMaps!==C||k.numLightProbes!==E)&&(i.directional.length=u,i.spot.length=y,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=v+C-S,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=S,i.numLightProbes=E,k.directionalLength=u,k.pointLength=p,k.spotLength=y,k.rectAreaLength=g,k.hemiLength=m,k.numDirectionalShadows=b,k.numPointShadows=x,k.numSpotShadows=v,k.numSpotMaps=C,k.numLightProbes=E,i.version=sM++)}function l(c,h){let d=0,f=0,u=0,p=0,y=0,g=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){let x=c[m];if(x.isDirectionalLight){let v=i.directional[d];v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(x.isSpotLight){let v=i.spot[u];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(x.isRectAreaLight){let v=i.rectArea[p];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(x.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){let v=i.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(g),f++}else if(x.isHemisphereLight){let v=i.hemi[y];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(g),y++}}}return{setup:o,setupView:l,state:i}}function Fp(t){let e=new aM(t),n=[],i=[];function s(h){c.camera=h,n.length=0,i.length=0}function r(h){n.push(h)}function a(h){i.push(h)}function o(){e.setup(n)}function l(h){e.setupView(n,h)}let c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function oM(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Fp(t),e.set(s,[o])):r>=a.length?(o=new Fp(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}var sf=class extends Pi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},rf=class extends Pi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},lM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,cM=`uniform sampler2D shadow_pass;
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
}`;function hM(t,e,n){let i=new Sa,s=new _e,r=new _e,a=new Dt,o=new sf({depthPacking:py}),l=new rf,c={},h=n.maxTextureSize,d={[Xi]:pn,[pn]:Xi,[$t]:$t},f=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _e},radius:{value:4}},vertexShader:lM,fragmentShader:cM}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let p=new bn;p.setAttribute("position",new Nn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new et(p,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yp;let m=this.type;this.render=function(S,E,k){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||S.length===0)return;let J=t.getRenderTarget(),_=t.getActiveCubeFace(),w=t.getActiveMipmapLevel(),q=t.state;q.setBlending($i),q.buffers.color.setClear(1,1,1,1),q.buffers.depth.setTest(!0),q.setScissorTest(!1);let z=m!==Mi&&this.type===Mi,P=m===Mi&&this.type!==Mi;for(let D=0,U=S.length;D<U;D++){let Z=S[D],V=Z.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let xe=V.getFrameExtents();if(s.multiply(xe),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/xe.x),s.x=r.x*xe.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/xe.y),s.y=r.y*xe.y,V.mapSize.y=r.y)),V.map===null||z===!0||P===!0){let G=this.type!==Mi?{minFilter:un,magFilter:un}:{};V.map!==null&&V.map.dispose(),V.map=new Ci(s.x,s.y,G),V.map.texture.name=Z.name+".shadowMap",V.camera.updateProjectionMatrix()}t.setRenderTarget(V.map),t.clear();let pe=V.getViewportCount();for(let G=0;G<pe;G++){let se=V.getViewport(G);a.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),q.viewport(a),V.updateMatrices(Z,G),i=V.getFrustum(),v(E,k,V.camera,Z,this.type)}V.isPointLightShadow!==!0&&this.type===Mi&&b(V,k),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,t.setRenderTarget(J,_,w)};function b(S,E){let k=e.update(y);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,u.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new Ci(s.x,s.y)),f.uniforms.shadow_pass.value=S.map.texture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,t.setRenderTarget(S.mapPass),t.clear(),t.renderBufferDirect(E,null,k,f,y,null),u.uniforms.shadow_pass.value=S.mapPass.texture,u.uniforms.resolution.value=S.mapSize,u.uniforms.radius.value=S.radius,t.setRenderTarget(S.map),t.clear(),t.renderBufferDirect(E,null,k,u,y,null)}function x(S,E,k,J){let _=null,w=k.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(w!==void 0)_=w;else if(_=k.isPointLight===!0?l:o,t.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let q=_.uuid,z=E.uuid,P=c[q];P===void 0&&(P={},c[q]=P);let D=P[z];D===void 0&&(D=_.clone(),P[z]=D,E.addEventListener("dispose",C)),_=D}if(_.visible=E.visible,_.wireframe=E.wireframe,J===Mi?_.side=E.shadowSide!==null?E.shadowSide:E.side:_.side=E.shadowSide!==null?E.shadowSide:d[E.side],_.alphaMap=E.alphaMap,_.alphaTest=E.alphaTest,_.map=E.map,_.clipShadows=E.clipShadows,_.clippingPlanes=E.clippingPlanes,_.clipIntersection=E.clipIntersection,_.displacementMap=E.displacementMap,_.displacementScale=E.displacementScale,_.displacementBias=E.displacementBias,_.wireframeLinewidth=E.wireframeLinewidth,_.linewidth=E.linewidth,k.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let q=t.properties.get(_);q.light=k}return _}function v(S,E,k,J,_){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&_===Mi)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld);let z=e.update(S),P=S.material;if(Array.isArray(P)){let D=z.groups;for(let U=0,Z=D.length;U<Z;U++){let V=D[U],xe=P[V.materialIndex];if(xe&&xe.visible){let pe=x(S,xe,J,_);S.onBeforeShadow(t,S,E,k,z,pe,V),t.renderBufferDirect(k,null,z,pe,S,V),S.onAfterShadow(t,S,E,k,z,pe,V)}}}else if(P.visible){let D=x(S,P,J,_);S.onBeforeShadow(t,S,E,k,z,D,null),t.renderBufferDirect(k,null,z,D,S,null),S.onAfterShadow(t,S,E,k,z,D,null)}}let q=S.children;for(let z=0,P=q.length;z<P;z++)v(q[z],E,k,J,_)}function C(S){S.target.removeEventListener("dispose",C);for(let k in c){let J=c[k],_=S.target.uuid;_ in J&&(J[_].dispose(),delete J[_])}}}var fM={[oh]:lh,[ch]:dh,[hh]:uh,[br]:fh,[lh]:oh,[dh]:ch,[uh]:hh,[fh]:br};function dM(t){function e(){let F=!1,Pe=new Dt,ee=null,fe=new Dt(0,0,0,0);return{setMask:function(Ie){ee!==Ie&&!F&&(t.colorMask(Ie,Ie,Ie,Ie),ee=Ie)},setLocked:function(Ie){F=Ie},setClear:function(Ie,De,ct,Ct,rn){rn===!0&&(Ie*=Ct,De*=Ct,ct*=Ct),Pe.set(Ie,De,ct,Ct),fe.equals(Pe)===!1&&(t.clearColor(Ie,De,ct,Ct),fe.copy(Pe))},reset:function(){F=!1,ee=null,fe.set(-1,0,0,0)}}}function n(){let F=!1,Pe=!1,ee=null,fe=null,Ie=null;return{setReversed:function(De){Pe=De},setTest:function(De){De?ye(t.DEPTH_TEST):Te(t.DEPTH_TEST)},setMask:function(De){ee!==De&&!F&&(t.depthMask(De),ee=De)},setFunc:function(De){if(Pe&&(De=fM[De]),fe!==De){switch(De){case oh:t.depthFunc(t.NEVER);break;case lh:t.depthFunc(t.ALWAYS);break;case ch:t.depthFunc(t.LESS);break;case br:t.depthFunc(t.LEQUAL);break;case hh:t.depthFunc(t.EQUAL);break;case fh:t.depthFunc(t.GEQUAL);break;case dh:t.depthFunc(t.GREATER);break;case uh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}fe=De}},setLocked:function(De){F=De},setClear:function(De){Ie!==De&&(t.clearDepth(De),Ie=De)},reset:function(){F=!1,ee=null,fe=null,Ie=null}}}function i(){let F=!1,Pe=null,ee=null,fe=null,Ie=null,De=null,ct=null,Ct=null,rn=null;return{setTest:function(dt){F||(dt?ye(t.STENCIL_TEST):Te(t.STENCIL_TEST))},setMask:function(dt){Pe!==dt&&!F&&(t.stencilMask(dt),Pe=dt)},setFunc:function(dt,Kt,On){(ee!==dt||fe!==Kt||Ie!==On)&&(t.stencilFunc(dt,Kt,On),ee=dt,fe=Kt,Ie=On)},setOp:function(dt,Kt,On){(De!==dt||ct!==Kt||Ct!==On)&&(t.stencilOp(dt,Kt,On),De=dt,ct=Kt,Ct=On)},setLocked:function(dt){F=dt},setClear:function(dt){rn!==dt&&(t.clearStencil(dt),rn=dt)},reset:function(){F=!1,Pe=null,ee=null,fe=null,Ie=null,De=null,ct=null,Ct=null,rn=null}}}let s=new e,r=new n,a=new i,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,f=[],u=null,p=!1,y=null,g=null,m=null,b=null,x=null,v=null,C=null,S=new nt(0,0,0),E=0,k=!1,J=null,_=null,w=null,q=null,z=null,P=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),D=!1,U=0,Z=t.getParameter(t.VERSION);Z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(Z)[1]),D=U>=1):Z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),D=U>=2);let V=null,xe={},pe=t.getParameter(t.SCISSOR_BOX),G=t.getParameter(t.VIEWPORT),se=new Dt().fromArray(pe),Ue=new Dt().fromArray(G);function ne(F,Pe,ee,fe){let Ie=new Uint8Array(4),De=t.createTexture();t.bindTexture(F,De),t.texParameteri(F,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(F,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ct=0;ct<ee;ct++)F===t.TEXTURE_3D||F===t.TEXTURE_2D_ARRAY?t.texImage3D(Pe,0,t.RGBA,1,1,fe,0,t.RGBA,t.UNSIGNED_BYTE,Ie):t.texImage2D(Pe+ct,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Ie);return De}let he={};he[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),he[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),he[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),he[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ye(t.DEPTH_TEST),r.setFunc(br),de(!1),ge(qu),ye(t.CULL_FACE),I($i);function ye(F){c[F]!==!0&&(t.enable(F),c[F]=!0)}function Te(F){c[F]!==!1&&(t.disable(F),c[F]=!1)}function qe(F,Pe){return h[F]!==Pe?(t.bindFramebuffer(F,Pe),h[F]=Pe,F===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=Pe),F===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=Pe),!0):!1}function We(F,Pe){let ee=f,fe=!1;if(F){ee=d.get(Pe),ee===void 0&&(ee=[],d.set(Pe,ee));let Ie=F.textures;if(ee.length!==Ie.length||ee[0]!==t.COLOR_ATTACHMENT0){for(let De=0,ct=Ie.length;De<ct;De++)ee[De]=t.COLOR_ATTACHMENT0+De;ee.length=Ie.length,fe=!0}}else ee[0]!==t.BACK&&(ee[0]=t.BACK,fe=!0);fe&&t.drawBuffers(ee)}function He(F){return u!==F?(t.useProgram(F),u=F,!0):!1}let Ge={[ws]:t.FUNC_ADD,[z1]:t.FUNC_SUBTRACT,[H1]:t.FUNC_REVERSE_SUBTRACT};Ge[V1]=t.MIN,Ge[G1]=t.MAX;let re={[W1]:t.ZERO,[$1]:t.ONE,[q1]:t.SRC_COLOR,[rh]:t.SRC_ALPHA,[J1]:t.SRC_ALPHA_SATURATE,[K1]:t.DST_COLOR,[Y1]:t.DST_ALPHA,[X1]:t.ONE_MINUS_SRC_COLOR,[ah]:t.ONE_MINUS_SRC_ALPHA,[j1]:t.ONE_MINUS_DST_COLOR,[Z1]:t.ONE_MINUS_DST_ALPHA,[Q1]:t.CONSTANT_COLOR,[ey]:t.ONE_MINUS_CONSTANT_COLOR,[ty]:t.CONSTANT_ALPHA,[ny]:t.ONE_MINUS_CONSTANT_ALPHA};function I(F,Pe,ee,fe,Ie,De,ct,Ct,rn,dt){if(F===$i){p===!0&&(Te(t.BLEND),p=!1);return}if(p===!1&&(ye(t.BLEND),p=!0),F!==B1){if(F!==y||dt!==k){if((g!==ws||x!==ws)&&(t.blendEquation(t.FUNC_ADD),g=ws,x=ws),dt)switch(F){case gr:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _r:t.blendFunc(t.ONE,t.ONE);break;case Xu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yu:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case gr:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case _r:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Xu:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Yu:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}m=null,b=null,v=null,C=null,S.set(0,0,0),E=0,y=F,k=dt}return}Ie=Ie||Pe,De=De||ee,ct=ct||fe,(Pe!==g||Ie!==x)&&(t.blendEquationSeparate(Ge[Pe],Ge[Ie]),g=Pe,x=Ie),(ee!==m||fe!==b||De!==v||ct!==C)&&(t.blendFuncSeparate(re[ee],re[fe],re[De],re[ct]),m=ee,b=fe,v=De,C=ct),(Ct.equals(S)===!1||rn!==E)&&(t.blendColor(Ct.r,Ct.g,Ct.b,rn),S.copy(Ct),E=rn),y=F,k=!1}function le(F,Pe){F.side===$t?Te(t.CULL_FACE):ye(t.CULL_FACE);let ee=F.side===pn;Pe&&(ee=!ee),de(ee),F.blending===gr&&F.transparent===!1?I($i):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);let fe=F.stencilWrite;a.setTest(fe),fe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ye(t.SAMPLE_ALPHA_TO_COVERAGE):Te(t.SAMPLE_ALPHA_TO_COVERAGE)}function de(F){J!==F&&(F?t.frontFace(t.CW):t.frontFace(t.CCW),J=F)}function ge(F){F!==O1?(ye(t.CULL_FACE),F!==_&&(F===qu?t.cullFace(t.BACK):F===F1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Te(t.CULL_FACE),_=F}function Se(F){F!==w&&(D&&t.lineWidth(F),w=F)}function Fe(F,Pe,ee){F?(ye(t.POLYGON_OFFSET_FILL),(q!==Pe||z!==ee)&&(t.polygonOffset(Pe,ee),q=Pe,z=ee)):Te(t.POLYGON_OFFSET_FILL)}function Ee(F){F?ye(t.SCISSOR_TEST):Te(t.SCISSOR_TEST)}function R(F){F===void 0&&(F=t.TEXTURE0+P-1),V!==F&&(t.activeTexture(F),V=F)}function M(F,Pe,ee){ee===void 0&&(V===null?ee=t.TEXTURE0+P-1:ee=V);let fe=xe[ee];fe===void 0&&(fe={type:void 0,texture:void 0},xe[ee]=fe),(fe.type!==F||fe.texture!==Pe)&&(V!==ee&&(t.activeTexture(ee),V=ee),t.bindTexture(F,Pe||he[F]),fe.type=F,fe.texture=Pe)}function X(){let F=xe[V];F!==void 0&&F.type!==void 0&&(t.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ae(){try{t.texSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{t.texSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ne(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function be(){try{t.texStorage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function te(){try{t.texStorage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{t.texImage3D.apply(t,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(F){se.equals(F)===!1&&(t.scissor(F.x,F.y,F.z,F.w),se.copy(F))}function ue(F){Ue.equals(F)===!1&&(t.viewport(F.x,F.y,F.z,F.w),Ue.copy(F))}function Xe(F,Pe){let ee=l.get(Pe);ee===void 0&&(ee=new WeakMap,l.set(Pe,ee));let fe=ee.get(F);fe===void 0&&(fe=t.getUniformBlockIndex(Pe,F.name),ee.set(F,fe))}function Ye(F,Pe){let fe=l.get(Pe).get(F);o.get(Pe)!==fe&&(t.uniformBlockBinding(Pe,fe,F.__bindingPointIndex),o.set(Pe,fe))}function ut(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},V=null,xe={},h={},d=new WeakMap,f=[],u=null,p=!1,y=null,g=null,m=null,b=null,x=null,v=null,C=null,S=new nt(0,0,0),E=0,k=!1,J=null,_=null,w=null,q=null,z=null,se.set(0,0,t.canvas.width,t.canvas.height),Ue.set(0,0,t.canvas.width,t.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ye,disable:Te,bindFramebuffer:qe,drawBuffers:We,useProgram:He,setBlending:I,setMaterial:le,setFlipSided:de,setCullFace:ge,setLineWidth:Se,setPolygonOffset:Fe,setScissorTest:Ee,activeTexture:R,bindTexture:M,unbindTexture:X,compressedTexImage2D:K,compressedTexImage3D:oe,texImage2D:ce,texImage3D:Oe,updateUBOMapping:Xe,uniformBlockBinding:Ye,texStorage2D:be,texStorage3D:te,texSubImage2D:ae,texSubImage3D:Be,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Ne,scissor:Me,viewport:ue,reset:ut}}function Bp(t,e,n,i){let s=uM(i);switch(n){case e0:return t*e;case n0:return t*e;case i0:return t*e*2;case vl:return t*e/s.components*s.byteLength;case If:return t*e/s.components*s.byteLength;case s0:return t*e*2/s.components*s.byteLength;case Lf:return t*e*2/s.components*s.byteLength;case t0:return t*e*3/s.components*s.byteLength;case ti:return t*e*4/s.components*s.byteLength;case Nf:return t*e*4/s.components*s.byteLength;case Lo:case No:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Do:case Uo:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case xh:case _h:return Math.max(t,16)*Math.max(e,8)/4;case yh:case vh:return Math.max(t,8)*Math.max(e,8)/2;case bh:case Mh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case wh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Eh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Dh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Uh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Fh:case Bh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case r0:case zh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Hh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uM(t){switch(t){case Ei:case jp:return{byteLength:1,components:1};case Ma:case Jp:case Ia:return{byteLength:2,components:1};case Rf:case kf:return{byteLength:2,components:4};case Es:case Pf:case Si:return{byteLength:4,components:1};case Qp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function pM(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new _e,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,M){return u?new OffscreenCanvas(R,M):$o("canvas")}function y(R,M,X){let K=1,oe=Ee(R);if((oe.width>X||oe.height>X)&&(K=X/Math.max(oe.width,oe.height)),K<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ae=Math.floor(K*oe.width),Be=Math.floor(K*oe.height);d===void 0&&(d=p(ae,Be));let Ce=M?p(ae,Be):d;return Ce.width=ae,Ce.height=Be,Ce.getContext("2d").drawImage(R,0,0,ae,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+oe.width+"x"+oe.height+") to ("+ae+"x"+Be+")."),Ce}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+oe.width+"x"+oe.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==un&&R.minFilter!==ei}function m(R){t.generateMipmap(R)}function b(R,M,X,K,oe=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ae=M;if(M===t.RED&&(X===t.FLOAT&&(ae=t.R32F),X===t.HALF_FLOAT&&(ae=t.R16F),X===t.UNSIGNED_BYTE&&(ae=t.R8)),M===t.RED_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.R8UI),X===t.UNSIGNED_SHORT&&(ae=t.R16UI),X===t.UNSIGNED_INT&&(ae=t.R32UI),X===t.BYTE&&(ae=t.R8I),X===t.SHORT&&(ae=t.R16I),X===t.INT&&(ae=t.R32I)),M===t.RG&&(X===t.FLOAT&&(ae=t.RG32F),X===t.HALF_FLOAT&&(ae=t.RG16F),X===t.UNSIGNED_BYTE&&(ae=t.RG8)),M===t.RG_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.RG8UI),X===t.UNSIGNED_SHORT&&(ae=t.RG16UI),X===t.UNSIGNED_INT&&(ae=t.RG32UI),X===t.BYTE&&(ae=t.RG8I),X===t.SHORT&&(ae=t.RG16I),X===t.INT&&(ae=t.RG32I)),M===t.RGB_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.RGB8UI),X===t.UNSIGNED_SHORT&&(ae=t.RGB16UI),X===t.UNSIGNED_INT&&(ae=t.RGB32UI),X===t.BYTE&&(ae=t.RGB8I),X===t.SHORT&&(ae=t.RGB16I),X===t.INT&&(ae=t.RGB32I)),M===t.RGBA_INTEGER&&(X===t.UNSIGNED_BYTE&&(ae=t.RGBA8UI),X===t.UNSIGNED_SHORT&&(ae=t.RGBA16UI),X===t.UNSIGNED_INT&&(ae=t.RGBA32UI),X===t.BYTE&&(ae=t.RGBA8I),X===t.SHORT&&(ae=t.RGBA16I),X===t.INT&&(ae=t.RGBA32I)),M===t.RGB&&X===t.UNSIGNED_INT_5_9_9_9_REV&&(ae=t.RGB9_E5),M===t.RGBA){let Be=oe?zo:gt.getTransfer(K);X===t.FLOAT&&(ae=t.RGBA32F),X===t.HALF_FLOAT&&(ae=t.RGBA16F),X===t.UNSIGNED_BYTE&&(ae=Be===wt?t.SRGB8_ALPHA8:t.RGBA8),X===t.UNSIGNED_SHORT_4_4_4_4&&(ae=t.RGBA4),X===t.UNSIGNED_SHORT_5_5_5_1&&(ae=t.RGB5_A1)}return(ae===t.R16F||ae===t.R32F||ae===t.RG16F||ae===t.RG32F||ae===t.RGBA16F||ae===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ae}function x(R,M){let X;return R?M===null||M===Es||M===Sr?X=t.DEPTH24_STENCIL8:M===Si?X=t.DEPTH32F_STENCIL8:M===Ma&&(X=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Es||M===Sr?X=t.DEPTH_COMPONENT24:M===Si?X=t.DEPTH_COMPONENT32F:M===Ma&&(X=t.DEPTH_COMPONENT16),X}function v(R,M){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==un&&R.minFilter!==ei?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function C(R){let M=R.target;M.removeEventListener("dispose",C),E(M),M.isVideoTexture&&h.delete(M)}function S(R){let M=R.target;M.removeEventListener("dispose",S),J(M)}function E(R){let M=i.get(R);if(M.__webglInit===void 0)return;let X=R.source,K=f.get(X);if(K){let oe=K[M.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&k(R),Object.keys(K).length===0&&f.delete(X)}i.remove(R)}function k(R){let M=i.get(R);t.deleteTexture(M.__webglTexture);let X=R.source,K=f.get(X);delete K[M.__cacheKey],a.memory.textures--}function J(R){let M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let oe=0;oe<M.__webglFramebuffer[K].length;oe++)t.deleteFramebuffer(M.__webglFramebuffer[K][oe]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let X=R.textures;for(let K=0,oe=X.length;K<oe;K++){let ae=i.get(X[K]);ae.__webglTexture&&(t.deleteTexture(ae.__webglTexture),a.memory.textures--),i.remove(X[K])}i.remove(R)}let _=0;function w(){_=0}function q(){let R=_;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),_+=1,R}function z(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function P(R,M){let X=i.get(R);if(R.isVideoTexture&&Se(R),R.isRenderTargetTexture===!1&&R.version>0&&X.__version!==R.version){let K=R.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ue(X,R,M);return}}n.bindTexture(t.TEXTURE_2D,X.__webglTexture,t.TEXTURE0+M)}function D(R,M){let X=i.get(R);if(R.version>0&&X.__version!==R.version){Ue(X,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,X.__webglTexture,t.TEXTURE0+M)}function U(R,M){let X=i.get(R);if(R.version>0&&X.__version!==R.version){Ue(X,R,M);return}n.bindTexture(t.TEXTURE_3D,X.__webglTexture,t.TEXTURE0+M)}function Z(R,M){let X=i.get(R);if(R.version>0&&X.__version!==R.version){ne(X,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture,t.TEXTURE0+M)}let V={[ba]:t.REPEAT,[Ts]:t.CLAMP_TO_EDGE,[gh]:t.MIRRORED_REPEAT},xe={[un]:t.NEAREST,[dy]:t.NEAREST_MIPMAP_NEAREST,[so]:t.NEAREST_MIPMAP_LINEAR,[ei]:t.LINEAR,[wc]:t.LINEAR_MIPMAP_NEAREST,[As]:t.LINEAR_MIPMAP_LINEAR},pe={[gy]:t.NEVER,[My]:t.ALWAYS,[yy]:t.LESS,[a0]:t.LEQUAL,[xy]:t.EQUAL,[by]:t.GEQUAL,[vy]:t.GREATER,[_y]:t.NOTEQUAL};function G(R,M){if(M.type===Si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ei||M.magFilter===wc||M.magFilter===so||M.magFilter===As||M.minFilter===ei||M.minFilter===wc||M.minFilter===so||M.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,V[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,xe[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,xe[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,pe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==so&&M.minFilter!==As||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){let X=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function se(R,M){let X=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",C));let K=M.source,oe=f.get(K);oe===void 0&&(oe={},f.set(K,oe));let ae=z(M);if(ae!==R.__cacheKey){oe[ae]===void 0&&(oe[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,X=!0),oe[ae].usedTimes++;let Be=oe[R.__cacheKey];Be!==void 0&&(oe[R.__cacheKey].usedTimes--,Be.usedTimes===0&&k(M)),R.__cacheKey=ae,R.__webglTexture=oe[ae].texture}return X}function Ue(R,M,X){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);let oe=se(R,M),ae=M.source;n.bindTexture(K,R.__webglTexture,t.TEXTURE0+X);let Be=i.get(ae);if(ae.version!==Be.__version||oe===!0){n.activeTexture(t.TEXTURE0+X);let Ce=gt.getPrimaries(gt.workingColorSpace),Ne=M.colorSpace===Gi?null:gt.getPrimaries(M.colorSpace),be=M.colorSpace===Gi||Ce===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,be);let te=y(M.image,!1,s.maxTextureSize);te=Fe(M,te);let ce=r.convert(M.format,M.colorSpace),Oe=r.convert(M.type),Me=b(M.internalFormat,ce,Oe,M.colorSpace,M.isVideoTexture);G(K,M);let ue,Xe=M.mipmaps,Ye=M.isVideoTexture!==!0,ut=Be.__version===void 0||oe===!0,F=ae.dataReady,Pe=v(M,te);if(M.isDepthTexture)Me=x(M.format===Tr,M.type),ut&&(Ye?n.texStorage2D(t.TEXTURE_2D,1,Me,te.width,te.height):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,ce,Oe,null));else if(M.isDataTexture)if(Xe.length>0){Ye&&ut&&n.texStorage2D(t.TEXTURE_2D,Pe,Me,Xe[0].width,Xe[0].height);for(let ee=0,fe=Xe.length;ee<fe;ee++)ue=Xe[ee],Ye?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue.width,ue.height,ce,Oe,ue.data):n.texImage2D(t.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ce,Oe,ue.data);M.generateMipmaps=!1}else Ye?(ut&&n.texStorage2D(t.TEXTURE_2D,Pe,Me,te.width,te.height),F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,te.width,te.height,ce,Oe,te.data)):n.texImage2D(t.TEXTURE_2D,0,Me,te.width,te.height,0,ce,Oe,te.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ye&&ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Me,Xe[0].width,Xe[0].height,te.depth);for(let ee=0,fe=Xe.length;ee<fe;ee++)if(ue=Xe[ee],M.format!==ti)if(ce!==null)if(Ye){if(F)if(M.layerUpdates.size>0){let Ie=Bp(ue.width,ue.height,M.format,M.type);for(let De of M.layerUpdates){let ct=ue.data.subarray(De*Ie/ue.data.BYTES_PER_ELEMENT,(De+1)*Ie/ue.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,De,ue.width,ue.height,1,ce,ct,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,te.depth,ce,ue.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,te.depth,0,ue.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?F&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ee,0,0,0,ue.width,ue.height,te.depth,ce,Oe,ue.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ee,Me,ue.width,ue.height,te.depth,0,ce,Oe,ue.data)}else{Ye&&ut&&n.texStorage2D(t.TEXTURE_2D,Pe,Me,Xe[0].width,Xe[0].height);for(let ee=0,fe=Xe.length;ee<fe;ee++)ue=Xe[ee],M.format!==ti?ce!==null?Ye?F&&n.compressedTexSubImage2D(t.TEXTURE_2D,ee,0,0,ue.width,ue.height,ce,ue.data):n.compressedTexImage2D(t.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ue.width,ue.height,ce,Oe,ue.data):n.texImage2D(t.TEXTURE_2D,ee,Me,ue.width,ue.height,0,ce,Oe,ue.data)}else if(M.isDataArrayTexture)if(Ye){if(ut&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Pe,Me,te.width,te.height,te.depth),F)if(M.layerUpdates.size>0){let ee=Bp(te.width,te.height,M.format,M.type);for(let fe of M.layerUpdates){let Ie=te.data.subarray(fe*ee/te.data.BYTES_PER_ELEMENT,(fe+1)*ee/te.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,fe,te.width,te.height,1,ce,Oe,Ie)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,te.width,te.height,te.depth,ce,Oe,te.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Me,te.width,te.height,te.depth,0,ce,Oe,te.data);else if(M.isData3DTexture)Ye?(ut&&n.texStorage3D(t.TEXTURE_3D,Pe,Me,te.width,te.height,te.depth),F&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,te.width,te.height,te.depth,ce,Oe,te.data)):n.texImage3D(t.TEXTURE_3D,0,Me,te.width,te.height,te.depth,0,ce,Oe,te.data);else if(M.isFramebufferTexture){if(ut)if(Ye)n.texStorage2D(t.TEXTURE_2D,Pe,Me,te.width,te.height);else{let ee=te.width,fe=te.height;for(let Ie=0;Ie<Pe;Ie++)n.texImage2D(t.TEXTURE_2D,Ie,Me,ee,fe,0,ce,Oe,null),ee>>=1,fe>>=1}}else if(Xe.length>0){if(Ye&&ut){let ee=Ee(Xe[0]);n.texStorage2D(t.TEXTURE_2D,Pe,Me,ee.width,ee.height)}for(let ee=0,fe=Xe.length;ee<fe;ee++)ue=Xe[ee],Ye?F&&n.texSubImage2D(t.TEXTURE_2D,ee,0,0,ce,Oe,ue):n.texImage2D(t.TEXTURE_2D,ee,Me,ce,Oe,ue);M.generateMipmaps=!1}else if(Ye){if(ut){let ee=Ee(te);n.texStorage2D(t.TEXTURE_2D,Pe,Me,ee.width,ee.height)}F&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,Oe,te)}else n.texImage2D(t.TEXTURE_2D,0,Me,ce,Oe,te);g(M)&&m(K),Be.__version=ae.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ne(R,M,X){if(M.image.length!==6)return;let K=se(R,M),oe=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+X);let ae=i.get(oe);if(oe.version!==ae.__version||K===!0){n.activeTexture(t.TEXTURE0+X);let Be=gt.getPrimaries(gt.workingColorSpace),Ce=M.colorSpace===Gi?null:gt.getPrimaries(M.colorSpace),Ne=M.colorSpace===Gi||Be===Ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ne);let be=M.isCompressedTexture||M.image[0].isCompressedTexture,te=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let fe=0;fe<6;fe++)!be&&!te?ce[fe]=y(M.image[fe],!0,s.maxCubemapSize):ce[fe]=te?M.image[fe].image:M.image[fe],ce[fe]=Fe(M,ce[fe]);let Oe=ce[0],Me=r.convert(M.format,M.colorSpace),ue=r.convert(M.type),Xe=b(M.internalFormat,Me,ue,M.colorSpace),Ye=M.isVideoTexture!==!0,ut=ae.__version===void 0||K===!0,F=oe.dataReady,Pe=v(M,Oe);G(t.TEXTURE_CUBE_MAP,M);let ee;if(be){Ye&&ut&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Xe,Oe.width,Oe.height);for(let fe=0;fe<6;fe++){ee=ce[fe].mipmaps;for(let Ie=0;Ie<ee.length;Ie++){let De=ee[Ie];M.format!==ti?Me!==null?Ye?F&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,De.width,De.height,Me,De.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,Xe,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,0,0,De.width,De.height,Me,ue,De.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie,Xe,De.width,De.height,0,Me,ue,De.data)}}}else{if(ee=M.mipmaps,Ye&&ut){ee.length>0&&Pe++;let fe=Ee(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Pe,Xe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(te){Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,ce[fe].width,ce[fe].height,Me,ue,ce[fe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Xe,ce[fe].width,ce[fe].height,0,Me,ue,ce[fe].data);for(let Ie=0;Ie<ee.length;Ie++){let ct=ee[Ie].image[fe].image;Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,ct.width,ct.height,Me,ue,ct.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,Xe,ct.width,ct.height,0,Me,ue,ct.data)}}else{Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Me,ue,ce[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,Xe,Me,ue,ce[fe]);for(let Ie=0;Ie<ee.length;Ie++){let De=ee[Ie];Ye?F&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,0,0,Me,ue,De.image[fe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,Ie+1,Xe,Me,ue,De.image[fe])}}}g(M)&&m(t.TEXTURE_CUBE_MAP),ae.__version=oe.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function he(R,M,X,K,oe,ae){let Be=r.convert(X.format,X.colorSpace),Ce=r.convert(X.type),Ne=b(X.internalFormat,Be,Ce,X.colorSpace);if(!i.get(M).__hasExternalTextures){let te=Math.max(1,M.width>>ae),ce=Math.max(1,M.height>>ae);oe===t.TEXTURE_3D||oe===t.TEXTURE_2D_ARRAY?n.texImage3D(oe,ae,Ne,te,ce,M.depth,0,Be,Ce,null):n.texImage2D(oe,ae,Ne,te,ce,0,Be,Ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,oe,i.get(X).__webglTexture,0,de(M)):(oe===t.TEXTURE_2D||oe>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,oe,i.get(X).__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ye(R,M,X){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){let K=M.depthTexture,oe=K&&K.isDepthTexture?K.type:null,ae=x(M.stencilBuffer,oe),Be=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=de(M);ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ce,ae,M.width,M.height):X?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ae,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ae,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Be,t.RENDERBUFFER,R)}else{let K=M.textures;for(let oe=0;oe<K.length;oe++){let ae=K[oe],Be=r.convert(ae.format,ae.colorSpace),Ce=r.convert(ae.type),Ne=b(ae.internalFormat,Be,Ce,ae.colorSpace),be=de(M);X&&ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,be,Ne,M.width,M.height):ge(M)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,be,Ne,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Ne,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Te(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),P(M.depthTexture,0);let K=i.get(M.depthTexture).__webglTexture,oe=de(M);if(M.depthTexture.format===yr)ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,K,0);else if(M.depthTexture.format===Tr)ge(M)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0,oe):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function qe(R){let M=i.get(R),X=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let K=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){let oe=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",oe)};K.addEventListener("dispose",oe),M.__depthDisposeCallback=oe}M.__boundDepthTexture=K}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(X)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,R)}else if(X){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),ye(M.__webglDepthbuffer[K],R,!1);else{let oe=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,oe,t.RENDERBUFFER,ae)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),ye(M.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,oe),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,oe)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function We(R,M,X){let K=i.get(R);M!==void 0&&he(K.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),X!==void 0&&qe(R)}function He(R){let M=R.texture,X=i.get(R),K=i.get(M);R.addEventListener("dispose",S);let oe=R.textures,ae=R.isWebGLCubeRenderTarget===!0,Be=oe.length>1;if(Be||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,a.memory.textures++),ae){X.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer[Ce]=[];for(let Ne=0;Ne<M.mipmaps.length;Ne++)X.__webglFramebuffer[Ce][Ne]=t.createFramebuffer()}else X.__webglFramebuffer[Ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){X.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)X.__webglFramebuffer[Ce]=t.createFramebuffer()}else X.__webglFramebuffer=t.createFramebuffer();if(Be)for(let Ce=0,Ne=oe.length;Ce<Ne;Ce++){let be=i.get(oe[Ce]);be.__webglTexture===void 0&&(be.__webglTexture=t.createTexture(),a.memory.textures++)}if(R.samples>0&&ge(R)===!1){X.__webglMultisampledFramebuffer=t.createFramebuffer(),X.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,X.__webglMultisampledFramebuffer);for(let Ce=0;Ce<oe.length;Ce++){let Ne=oe[Ce];X.__webglColorRenderbuffer[Ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,X.__webglColorRenderbuffer[Ce]);let be=r.convert(Ne.format,Ne.colorSpace),te=r.convert(Ne.type),ce=b(Ne.internalFormat,be,te,Ne.colorSpace,R.isXRRenderTarget===!0),Oe=de(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,Oe,ce,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ce,t.RENDERBUFFER,X.__webglColorRenderbuffer[Ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(X.__webglDepthRenderbuffer=t.createRenderbuffer(),ye(X.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),G(t.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)he(X.__webglFramebuffer[Ce][Ne],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Ne);else he(X.__webglFramebuffer[Ce],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);g(M)&&m(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Be){for(let Ce=0,Ne=oe.length;Ce<Ne;Ce++){let be=oe[Ce],te=i.get(be);n.bindTexture(t.TEXTURE_2D,te.__webglTexture),G(t.TEXTURE_2D,be),he(X.__webglFramebuffer,R,be,t.COLOR_ATTACHMENT0+Ce,t.TEXTURE_2D,0),g(be)&&m(t.TEXTURE_2D)}n.unbindTexture()}else{let Ce=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Ce=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Ce,K.__webglTexture),G(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Ne=0;Ne<M.mipmaps.length;Ne++)he(X.__webglFramebuffer[Ne],R,M,t.COLOR_ATTACHMENT0,Ce,Ne);else he(X.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,Ce,0);g(M)&&m(Ce),n.unbindTexture()}R.depthBuffer&&qe(R)}function Ge(R){let M=R.textures;for(let X=0,K=M.length;X<K;X++){let oe=M[X];if(g(oe)){let ae=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Be=i.get(oe).__webglTexture;n.bindTexture(ae,Be),m(ae),n.unbindTexture()}}}let re=[],I=[];function le(R){if(R.samples>0){if(ge(R)===!1){let M=R.textures,X=R.width,K=R.height,oe=t.COLOR_BUFFER_BIT,ae=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Be=i.get(R),Ce=M.length>1;if(Ce)for(let Ne=0;Ne<M.length;Ne++)n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Ne=0;Ne<M.length;Ne++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(oe|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(oe|=t.STENCIL_BUFFER_BIT)),Ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Be.__webglColorRenderbuffer[Ne]);let be=i.get(M[Ne]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,be,0)}t.blitFramebuffer(0,0,X,K,0,0,X,K,oe,t.NEAREST),l===!0&&(re.length=0,I.length=0,re.push(t.COLOR_ATTACHMENT0+Ne),R.depthBuffer&&R.resolveDepthBuffer===!1&&(re.push(ae),I.push(ae),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,I)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,re))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Ce)for(let Ne=0;Ne<M.length;Ne++){n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.RENDERBUFFER,Be.__webglColorRenderbuffer[Ne]);let be=i.get(M[Ne]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Be.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ne,t.TEXTURE_2D,be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function de(R){return Math.min(s.maxSamples,R.samples)}function ge(R){let M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Se(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Fe(R,M){let X=R.colorSpace,K=R.format,oe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||X!==Ji&&X!==Gi&&(gt.getTransfer(X)===wt?(K!==ti||oe!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",X)),M}function Ee(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=q,this.resetTextureUnits=w,this.setTexture2D=P,this.setTexture2DArray=D,this.setTexture3D=U,this.setTextureCube=Z,this.rebindTextures=We,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ge}function mM(t,e){function n(i,s=Gi){let r,a=gt.getTransfer(s);if(i===Ei)return t.UNSIGNED_BYTE;if(i===Rf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===kf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Qp)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===jp)return t.BYTE;if(i===Jp)return t.SHORT;if(i===Ma)return t.UNSIGNED_SHORT;if(i===Pf)return t.INT;if(i===Es)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Ia)return t.HALF_FLOAT;if(i===e0)return t.ALPHA;if(i===t0)return t.RGB;if(i===ti)return t.RGBA;if(i===n0)return t.LUMINANCE;if(i===i0)return t.LUMINANCE_ALPHA;if(i===yr)return t.DEPTH_COMPONENT;if(i===Tr)return t.DEPTH_STENCIL;if(i===vl)return t.RED;if(i===If)return t.RED_INTEGER;if(i===s0)return t.RG;if(i===Lf)return t.RG_INTEGER;if(i===Nf)return t.RGBA_INTEGER;if(i===Lo||i===No||i===Do||i===Uo)if(a===wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Lo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Lo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===No)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yh||i===xh||i===vh||i===_h)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===yh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===xh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===vh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===_h)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bh||i===Mh||i===wh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===bh||i===Mh)return a===wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===wh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sh||i===Th||i===Ah||i===Eh||i===Ch||i===Ph||i===Rh||i===kh||i===Ih||i===Lh||i===Nh||i===Dh||i===Uh||i===Oh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Sh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Th)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Eh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ph)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Rh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===kh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ih)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Lh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Dh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Uh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oh)return a===wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Oo||i===Fh||i===Bh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Oo)return a===wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Fh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Bh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===r0||i===zh||i===Hh||i===Vh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Oo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===zh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Hh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Vh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Sr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}var af=class extends dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},tt=class extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}},gM={type:"move"},ya=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=n.getJointPose(y,i),m=this._getHandJoint(c,y);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,p=.005;c.inputState.pinching&&f>u+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(gM)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new tt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},yM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xM=`
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

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){let s=new En,r=e.properties.get(s);r.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new $n({vertexShader:yM,fragmentShader:xM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new et(new Ri(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},lf=class extends Yi{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,p=null,y=new of,g=n.getContextAttributes(),m=null,b=null,x=[],v=[],C=new _e,S=null,E=new dn;E.layers.enable(1),E.viewport=new Dt;let k=new dn;k.layers.enable(2),k.viewport=new Dt;let J=[E,k],_=new af;_.layers.enable(1),_.layers.enable(2);let w=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let he=x[ne];return he===void 0&&(he=new ya,x[ne]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ne){let he=x[ne];return he===void 0&&(he=new ya,x[ne]=he),he.getGripSpace()},this.getHand=function(ne){let he=x[ne];return he===void 0&&(he=new ya,x[ne]=he),he.getHandSpace()};function z(ne){let he=v.indexOf(ne.inputSource);if(he===-1)return;let ye=x[he];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||a),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function P(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",D);for(let ne=0;ne<x.length;ne++){let he=v[ne];he!==null&&(v[ne]=null,x[ne].disconnect(he))}w=null,q=null,y.reset(),e.setRenderTarget(m),u=null,f=null,d=null,s=null,b=null,Ue.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){r=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){o=ne,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(ne){if(s=ne,s!==null){if(m=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",P),s.addEventListener("inputsourceschange",D),g.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let he={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,n,he),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new Ci(u.framebufferWidth,u.framebufferHeight,{format:ti,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let he=null,ye=null,Te=null;g.depth&&(Te=g.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,he=g.stencil?Tr:yr,ye=g.stencil?Sr:Es);let qe={colorFormat:n.RGBA8,depthFormat:Te,scaleFactor:r};d=new XRWebGLBinding(s,n),f=d.createProjectionLayer(qe),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ci(f.textureWidth,f.textureHeight,{format:ti,type:Ei,depthTexture:new tl(f.textureWidth,f.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ue.setContext(s),Ue.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function D(ne){for(let he=0;he<ne.removed.length;he++){let ye=ne.removed[he],Te=v.indexOf(ye);Te>=0&&(v[Te]=null,x[Te].disconnect(ye))}for(let he=0;he<ne.added.length;he++){let ye=ne.added[he],Te=v.indexOf(ye);if(Te===-1){for(let We=0;We<x.length;We++)if(We>=v.length){v.push(ye),Te=We;break}else if(v[We]===null){v[We]=ye,Te=We;break}if(Te===-1)break}let qe=x[Te];qe&&qe.connect(ye)}}let U=new H,Z=new H;function V(ne,he,ye){U.setFromMatrixPosition(he.matrixWorld),Z.setFromMatrixPosition(ye.matrixWorld);let Te=U.distanceTo(Z),qe=he.projectionMatrix.elements,We=ye.projectionMatrix.elements,He=qe[14]/(qe[10]-1),Ge=qe[14]/(qe[10]+1),re=(qe[9]+1)/qe[5],I=(qe[9]-1)/qe[5],le=(qe[8]-1)/qe[0],de=(We[8]+1)/We[0],ge=He*le,Se=He*de,Fe=Te/(-le+de),Ee=Fe*-le;if(he.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ee),ne.translateZ(Fe),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),qe[10]===-1)ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{let R=He+Fe,M=Ge+Fe,X=ge-Ee,K=Se+(Te-Ee),oe=re*Ge/M*R,ae=I*Ge/M*R;ne.projectionMatrix.makePerspective(X,K,oe,ae,R,M),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function xe(ne,he){he===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(he.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(s===null)return;let he=ne.near,ye=ne.far;y.texture!==null&&(y.depthNear>0&&(he=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),_.near=k.near=E.near=he,_.far=k.far=E.far=ye,(w!==_.near||q!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),w=_.near,q=_.far);let Te=ne.parent,qe=_.cameras;xe(_,Te);for(let We=0;We<qe.length;We++)xe(qe[We],Te);qe.length===2?V(_,E,k):_.projectionMatrix.copy(E.projectionMatrix),pe(ne,_,Te)};function pe(ne,he,ye){ye===null?ne.matrix.copy(he.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(he.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(he.projectionMatrix),ne.projectionMatrixInverse.copy(he.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Wo*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(_)};let G=null;function se(ne,he){if(h=he.getViewerPose(c||a),p=he,h!==null){let ye=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let Te=!1;ye.length!==_.cameras.length&&(_.cameras.length=0,Te=!0);for(let We=0;We<ye.length;We++){let He=ye[We],Ge=null;if(u!==null)Ge=u.getViewport(He);else{let I=d.getViewSubImage(f,He);Ge=I.viewport,We===0&&(e.setRenderTargetTextures(b,I.colorTexture,f.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(b))}let re=J[We];re===void 0&&(re=new dn,re.layers.enable(We),re.viewport=new Dt,J[We]=re),re.matrix.fromArray(He.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(He.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),We===0&&(_.matrix.copy(re.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),Te===!0&&_.cameras.push(re)}let qe=s.enabledFeatures;if(qe&&qe.includes("depth-sensing")){let We=d.getDepthInformation(ye[0]);We&&We.isValid&&We.texture&&y.init(e,We,s.renderState)}}for(let ye=0;ye<x.length;ye++){let Te=v[ye],qe=x[ye];Te!==null&&qe!==void 0&&qe.update(Te,he,c||a)}G&&G(ne,he),he.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:he}),p=null}let Ue=new h0;Ue.setAnimationLoop(se),this.setAnimationLoop=function(ne){G=ne},this.dispose=function(){}}},bs=new ci,vM=new Lt;function _M(t,e){function n(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,c0(t)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,b,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(g,m):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m)):m.isMeshStandardMaterial?(r(g,m),f(g,m),m.isMeshPhysicalMaterial&&u(g,m,v)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),y(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,b,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,n(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===pn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,n(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===pn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,n(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,n(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,n(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let b=e.get(m),x=b.envMap,v=b.envMapRotation;x&&(g.envMap.value=x,bs.copy(v),bs.x*=-1,bs.y*=-1,bs.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),g.envMapRotation.value.setFromMatrix4(vM.makeRotationFromEuler(bs)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,n(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,n(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,b,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*b,g.scale.value=x*.5,m.map&&(g.map.value=m.map,n(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,n(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,n(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function f(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,n(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,n(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function u(g,m,b){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,n(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,n(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,n(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,n(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,n(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===pn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,n(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,n(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,n(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,n(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,n(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,n(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,n(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function y(g,m){let b=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(b.matrixWorld),g.nearDistance.value=b.shadow.camera.near,g.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function bM(t,e,n,i){let s={},r={},a=[],o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,x){let v=x.program;i.uniformBlockBinding(b,v)}function c(b,x){let v=s[b.id];v===void 0&&(p(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",g));let C=x.program;i.updateUBOMapping(b,C);let S=e.render.frame;r[b.id]!==S&&(f(b),r[b.id]=S)}function h(b){let x=d();b.__bindingPointIndex=x;let v=t.createBuffer(),C=b.__size,S=b.usage;return t.bindBuffer(t.UNIFORM_BUFFER,v),t.bufferData(t.UNIFORM_BUFFER,C,S),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,v),v}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let x=s[b.id],v=b.uniforms,C=b.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let S=0,E=v.length;S<E;S++){let k=Array.isArray(v[S])?v[S]:[v[S]];for(let J=0,_=k.length;J<_;J++){let w=k[J];if(u(w,S,J,C)===!0){let q=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],P=0;for(let D=0;D<z.length;D++){let U=z[D],Z=y(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,t.bufferSubData(t.UNIFORM_BUFFER,q+P,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,P),P+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,q,w.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function u(b,x,v,C){let S=b.value,E=x+"_"+v;if(C[E]===void 0)return typeof S=="number"||typeof S=="boolean"?C[E]=S:C[E]=S.clone(),!0;{let k=C[E];if(typeof S=="number"||typeof S=="boolean"){if(k!==S)return C[E]=S,!0}else if(k.equals(S)===!1)return k.copy(S),!0}return!1}function p(b){let x=b.uniforms,v=0,C=16;for(let E=0,k=x.length;E<k;E++){let J=Array.isArray(x[E])?x[E]:[x[E]];for(let _=0,w=J.length;_<w;_++){let q=J[_],z=Array.isArray(q.value)?q.value:[q.value];for(let P=0,D=z.length;P<D;P++){let U=z[P],Z=y(U),V=v%C,xe=V%Z.boundary,pe=V+xe;v+=xe,pe!==0&&C-pe<Z.storage&&(v+=C-pe),q.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),q.__offset=v,v+=Z.storage}}}let S=v%C;return S>0&&(v+=C-S),b.__size=v,b.__cache={},this}function y(b){let x={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(x.boundary=4,x.storage=4):b.isVector2?(x.boundary=8,x.storage=8):b.isVector3||b.isColor?(x.boundary=16,x.storage=12):b.isVector4?(x.boundary=16,x.storage=16):b.isMatrix3?(x.boundary=48,x.storage=48):b.isMatrix4?(x.boundary=64,x.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),x}function g(b){let x=b.target;x.removeEventListener("dispose",g);let v=a.indexOf(x.__bindingPointIndex);a.splice(v,1),t.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(let b in s)t.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var nl=class{constructor(e={}){let{canvas:n=Sy(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=a;let u=new Uint32Array(4),p=new Int32Array(4),y=null,g=null,m=[],b=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jt,this.toneMapping=qi,this.toneMappingExposure=1;let x=this,v=!1,C=0,S=0,E=null,k=-1,J=null,_=new Dt,w=new Dt,q=null,z=new nt(0),P=0,D=n.width,U=n.height,Z=1,V=null,xe=null,pe=new Dt(0,0,D,U),G=new Dt(0,0,D,U),se=!1,Ue=new Sa,ne=!1,he=!1,ye=new Lt,Te=new Lt,qe=new H,We=new Dt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function re(){return E===null?Z:1}let I=i;function le(A,W){return n.getContext(A,W)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine","three.js r169"),n.addEventListener("webglcontextlost",fe,!1),n.addEventListener("webglcontextrestored",Ie,!1),n.addEventListener("webglcontextcreationerror",De,!1),I===null){let W="webgl2";if(I=le(W,A),I===null)throw le(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let de,ge,Se,Fe,Ee,R,M,X,K,oe,ae,Be,Ce,Ne,be,te,ce,Oe,Me,ue,Xe,Ye,ut,F;function Pe(){de=new O_(I),de.init(),Ye=new mM(I,de),ge=new k_(I,de,e,Ye),Se=new dM(I),ge.reverseDepthBuffer&&Se.buffers.depth.setReversed(!0),Fe=new z_(I),Ee=new Qb,R=new pM(I,de,Se,Ee,ge,Ye,Fe),M=new L_(x),X=new U_(x),K=new Xy(I),ut=new P_(I,K),oe=new F_(I,K,Fe,ut),ae=new V_(I,oe,K,Fe),Me=new H_(I,ge,R),te=new I_(Ee),Be=new Jb(x,M,X,de,ge,ut,te),Ce=new _M(x,Ee),Ne=new tM,be=new oM(de),Oe=new C_(x,M,X,Se,ae,f,l),ce=new hM(x,ae,ge),F=new bM(I,Fe,ge,Se),ue=new R_(I,de,Fe),Xe=new B_(I,de,Fe),Fe.programs=Be.programs,x.capabilities=ge,x.extensions=de,x.properties=Ee,x.renderLists=Ne,x.shadowMap=ce,x.state=Se,x.info=Fe}Pe();let ee=new lf(x,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=de.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=de.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(A){A!==void 0&&(Z=A,this.setSize(D,U,!1))},this.getSize=function(A){return A.set(D,U)},this.setSize=function(A,W,j=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,U=W,n.width=Math.floor(A*Z),n.height=Math.floor(W*Z),j===!0&&(n.style.width=A+"px",n.style.height=W+"px"),this.setViewport(0,0,A,W)},this.getDrawingBufferSize=function(A){return A.set(D*Z,U*Z).floor()},this.setDrawingBufferSize=function(A,W,j){D=A,U=W,Z=j,n.width=Math.floor(A*j),n.height=Math.floor(W*j),this.setViewport(0,0,A,W)},this.getCurrentViewport=function(A){return A.copy(_)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,W,j,Q){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,W,j,Q),Se.viewport(_.copy(pe).multiplyScalar(Z).round())},this.getScissor=function(A){return A.copy(G)},this.setScissor=function(A,W,j,Q){A.isVector4?G.set(A.x,A.y,A.z,A.w):G.set(A,W,j,Q),Se.scissor(w.copy(G).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){Se.setScissorTest(se=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){xe=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,W=!0,j=!0){let Q=0;if(A){let T=!1;if(E!==null){let L=E.texture.format;T=L===Nf||L===Lf||L===If}if(T){let L=E.texture.type,$=L===Ei||L===Es||L===Ma||L===Sr||L===Rf||L===kf,O=Oe.getClearColor(),B=Oe.getClearAlpha(),N=O.r,ie=O.g,Y=O.b;$?(u[0]=N,u[1]=ie,u[2]=Y,u[3]=B,I.clearBufferuiv(I.COLOR,0,u)):(p[0]=N,p[1]=ie,p[2]=Y,p[3]=B,I.clearBufferiv(I.COLOR,0,p))}else Q|=I.COLOR_BUFFER_BIT}W&&(Q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",fe,!1),n.removeEventListener("webglcontextrestored",Ie,!1),n.removeEventListener("webglcontextcreationerror",De,!1),Ne.dispose(),be.dispose(),Ee.dispose(),M.dispose(),X.dispose(),ae.dispose(),ut.dispose(),F.dispose(),Be.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",pi),ee.removeEventListener("sessionend",Dr),Mn.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;let A=Fe.autoReset,W=ce.enabled,j=ce.autoUpdate,Q=ce.needsUpdate,T=ce.type;Pe(),Fe.autoReset=A,ce.enabled=W,ce.autoUpdate=j,ce.needsUpdate=Q,ce.type=T}function De(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ct(A){let W=A.target;W.removeEventListener("dispose",ct),Ct(W)}function Ct(A){rn(A),Ee.remove(A)}function rn(A){let W=Ee.get(A).programs;W!==void 0&&(W.forEach(function(j){Be.releaseProgram(j)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,W,j,Q,T,L){W===null&&(W=He);let $=T.isMesh&&T.matrixWorld.determinant()<0,O=Ga(A,W,j,Q,T);Se.setMaterial(Q,$);let B=j.index,N=1;if(Q.wireframe===!0){if(B=oe.getWireframeAttribute(j),B===void 0)return;N=2}let ie=j.drawRange,Y=j.attributes.position,ve=ie.start*N,$e=(ie.start+ie.count)*N;L!==null&&(ve=Math.max(ve,L.start*N),$e=Math.min($e,(L.start+L.count)*N)),B!==null?(ve=Math.max(ve,0),$e=Math.min($e,B.count)):Y!=null&&(ve=Math.max(ve,0),$e=Math.min($e,Y.count));let rt=$e-ve;if(rt<0||rt===1/0)return;ut.setup(T,Q,O,j,B);let an,at=ue;if(B!==null&&(an=K.get(B),at=Xe,at.setIndex(an)),T.isMesh)Q.wireframe===!0?(Se.setLineWidth(Q.wireframeLinewidth*re()),at.setMode(I.LINES)):at.setMode(I.TRIANGLES);else if(T.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),Se.setLineWidth(ze*re()),T.isLineSegments?at.setMode(I.LINES):T.isLineLoop?at.setMode(I.LINE_LOOP):at.setMode(I.LINE_STRIP)}else T.isPoints?at.setMode(I.POINTS):T.isSprite&&at.setMode(I.TRIANGLES);if(T.isBatchedMesh)if(T._multiDrawInstances!==null)at.renderMultiDrawInstances(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount,T._multiDrawInstances);else if(de.get("WEBGL_multi_draw"))at.renderMultiDraw(T._multiDrawStarts,T._multiDrawCounts,T._multiDrawCount);else{let ze=T._multiDrawStarts,St=T._multiDrawCounts,ot=T._multiDrawCount,wn=B?K.get(B).bytesPerElement:1,Xn=Ee.get(Q).currentProgram.getUniforms();for(let on=0;on<ot;on++)Xn.setValue(I,"_gl_DrawID",on),at.render(ze[on]/wn,St[on])}else if(T.isInstancedMesh)at.renderInstances(ve,rt,T.count);else if(j.isInstancedBufferGeometry){let ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,St=Math.min(j.instanceCount,ze);at.renderInstances(ve,rt,St)}else at.render(ve,rt)};function dt(A,W,j){A.transparent===!0&&A.side===$t&&A.forceSinglePass===!1?(A.side=pn,A.needsUpdate=!0,ts(A,W,j),A.side=Xi,A.needsUpdate=!0,ts(A,W,j),A.side=$t):ts(A,W,j)}this.compile=function(A,W,j=null){j===null&&(j=A),g=be.get(j),g.init(W),b.push(g),j.traverseVisible(function(T){T.isLight&&T.layers.test(W.layers)&&(g.pushLight(T),T.castShadow&&g.pushShadow(T))}),A!==j&&A.traverseVisible(function(T){T.isLight&&T.layers.test(W.layers)&&(g.pushLight(T),T.castShadow&&g.pushShadow(T))}),g.setupLights();let Q=new Set;return A.traverse(function(T){if(!(T.isMesh||T.isPoints||T.isLine||T.isSprite))return;let L=T.material;if(L)if(Array.isArray(L))for(let $=0;$<L.length;$++){let O=L[$];dt(O,j,T),Q.add(O)}else dt(L,j,T),Q.add(L)}),b.pop(),g=null,Q},this.compileAsync=function(A,W,j=null){let Q=this.compile(A,W,j);return new Promise(T=>{function L(){if(Q.forEach(function($){Ee.get($).currentProgram.isReady()&&Q.delete($)}),Q.size===0){T(A);return}setTimeout(L,10)}de.get("KHR_parallel_shader_compile")!==null?L():setTimeout(L,10)})};let Kt=null;function On(A){Kt&&Kt(A)}function pi(){Mn.stop()}function Dr(){Mn.start()}let Mn=new h0;Mn.setAnimationLoop(On),typeof self<"u"&&Mn.setContext(self),this.setAnimationLoop=function(A){Kt=A,ee.setAnimationLoop(A),A===null?Mn.stop():Mn.start()},ee.addEventListener("sessionstart",pi),ee.addEventListener("sessionend",Dr),this.render=function(A,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(W),W=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,W,E),g=be.get(A,b.length),g.init(W),b.push(g),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Ue.setFromProjectionMatrix(Te),he=this.localClippingEnabled,ne=te.init(this.clippingPlanes,he),y=Ne.get(A,m.length),y.init(),m.push(y),ee.enabled===!0&&ee.isPresenting===!0){let L=x.xr.getDepthSensingMesh();L!==null&&si(L,W,-1/0,x.sortObjects)}si(A,W,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(V,xe),Ge=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ge&&Oe.addToRenderList(y,A),this.info.render.frame++,ne===!0&&te.beginShadows();let j=g.state.shadowsArray;ce.render(j,A,W),ne===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=y.opaque,T=y.transmissive;if(g.setupLights(),W.isArrayCamera){let L=W.cameras;if(T.length>0)for(let $=0,O=L.length;$<O;$++){let B=L[$];Os(Q,T,A,B)}Ge&&Oe.render(A);for(let $=0,O=L.length;$<O;$++){let B=L[$];Ur(y,A,B,B.viewport)}}else T.length>0&&Os(Q,T,A,W),Ge&&Oe.render(A),Ur(y,A,W);E!==null&&(R.updateMultisampleRenderTarget(E),R.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(x,A,W),ut.resetDefaultState(),k=-1,J=null,b.pop(),b.length>0?(g=b[b.length-1],ne===!0&&te.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?y=m[m.length-1]:y=null};function si(A,W,j,Q){if(A.visible===!1)return;if(A.layers.test(W.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(W);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ue.intersectsSprite(A)){Q&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Te);let $=ae.update(A),O=A.material;O.visible&&y.push(A,$,O,j,We.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ue.intersectsObject(A))){let $=ae.update(A),O=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):($.boundingSphere===null&&$.computeBoundingSphere(),We.copy($.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Te)),Array.isArray(O)){let B=$.groups;for(let N=0,ie=B.length;N<ie;N++){let Y=B[N],ve=O[Y.materialIndex];ve&&ve.visible&&y.push(A,$,ve,j,We.z,Y)}}else O.visible&&y.push(A,$,O,j,We.z,null)}}let L=A.children;for(let $=0,O=L.length;$<O;$++)si(L[$],W,j,Q)}function Ur(A,W,j,Q){let T=A.opaque,L=A.transmissive,$=A.transparent;g.setupLightsView(j),ne===!0&&te.setGlobalState(x.clippingPlanes,j),Q&&Se.viewport(_.copy(Q)),T.length>0&&es(T,W,j),L.length>0&&es(L,W,j),$.length>0&&es($,W,j),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function Os(A,W,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[Q.id]===void 0&&(g.state.transmissionRenderTarget[Q.id]=new Ci(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")||de.has("EXT_color_buffer_float")?Ia:Ei,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:gt.workingColorSpace}));let L=g.state.transmissionRenderTarget[Q.id],$=Q.viewport||_;L.setSize($.z,$.w);let O=x.getRenderTarget();x.setRenderTarget(L),x.getClearColor(z),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Oe.render(j);let B=x.toneMapping;x.toneMapping=qi;let N=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),g.setupLightsView(Q),ne===!0&&te.setGlobalState(x.clippingPlanes,Q),es(A,j,Q),R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L),de.has("WEBGL_multisampled_render_to_texture")===!1){let ie=!1;for(let Y=0,ve=W.length;Y<ve;Y++){let $e=W[Y],rt=$e.object,an=$e.geometry,at=$e.material,ze=$e.group;if(at.side===$t&&rt.layers.test(Q.layers)){let St=at.side;at.side=pn,at.needsUpdate=!0,Or(rt,j,Q,an,at,ze),at.side=St,at.needsUpdate=!0,ie=!0}}ie===!0&&(R.updateMultisampleRenderTarget(L),R.updateRenderTargetMipmap(L))}x.setRenderTarget(O),x.setClearColor(z,P),N!==void 0&&(Q.viewport=N),x.toneMapping=B}function es(A,W,j){let Q=W.isScene===!0?W.overrideMaterial:null;for(let T=0,L=A.length;T<L;T++){let $=A[T],O=$.object,B=$.geometry,N=Q===null?$.material:Q,ie=$.group;O.layers.test(j.layers)&&Or(O,W,j,B,N,ie)}}function Or(A,W,j,Q,T,L){A.onBeforeRender(x,W,j,Q,T,L),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),T.onBeforeRender(x,W,j,Q,A,L),T.transparent===!0&&T.side===$t&&T.forceSinglePass===!1?(T.side=pn,T.needsUpdate=!0,x.renderBufferDirect(j,W,Q,T,A,L),T.side=Xi,T.needsUpdate=!0,x.renderBufferDirect(j,W,Q,T,A,L),T.side=$t):x.renderBufferDirect(j,W,Q,T,A,L),A.onAfterRender(x,W,j,Q,T,L)}function ts(A,W,j){W.isScene!==!0&&(W=He);let Q=Ee.get(A),T=g.state.lights,L=g.state.shadowsArray,$=T.state.version,O=Be.getParameters(A,T.state,L,W,j),B=Be.getProgramCacheKey(O),N=Q.programs;Q.environment=A.isMeshStandardMaterial?W.environment:null,Q.fog=W.fog,Q.envMap=(A.isMeshStandardMaterial?X:M).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?W.environmentRotation:A.envMapRotation,N===void 0&&(A.addEventListener("dispose",ct),N=new Map,Q.programs=N);let ie=N.get(B);if(ie!==void 0){if(Q.currentProgram===ie&&Q.lightsStateVersion===$)return Br(A,O),ie}else O.uniforms=Be.getUniforms(A),A.onBeforeCompile(O,x),ie=Be.acquireProgram(O,B),N.set(B,ie),Q.uniforms=O.uniforms;let Y=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Y.clippingPlanes=te.uniform),Br(A,O),Q.needsLights=ns(A),Q.lightsStateVersion=$,Q.needsLights&&(Y.ambientLightColor.value=T.state.ambient,Y.lightProbe.value=T.state.probe,Y.directionalLights.value=T.state.directional,Y.directionalLightShadows.value=T.state.directionalShadow,Y.spotLights.value=T.state.spot,Y.spotLightShadows.value=T.state.spotShadow,Y.rectAreaLights.value=T.state.rectArea,Y.ltc_1.value=T.state.rectAreaLTC1,Y.ltc_2.value=T.state.rectAreaLTC2,Y.pointLights.value=T.state.point,Y.pointLightShadows.value=T.state.pointShadow,Y.hemisphereLights.value=T.state.hemi,Y.directionalShadowMap.value=T.state.directionalShadowMap,Y.directionalShadowMatrix.value=T.state.directionalShadowMatrix,Y.spotShadowMap.value=T.state.spotShadowMap,Y.spotLightMatrix.value=T.state.spotLightMatrix,Y.spotLightMap.value=T.state.spotLightMap,Y.pointShadowMap.value=T.state.pointShadowMap,Y.pointShadowMatrix.value=T.state.pointShadowMatrix),Q.currentProgram=ie,Q.uniformsList=null,ie}function Fr(A){if(A.uniformsList===null){let W=A.currentProgram.getUniforms();A.uniformsList=vr.seqWithValue(W.seq,A.uniforms)}return A.uniformsList}function Br(A,W){let j=Ee.get(A);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.batchingColor=W.batchingColor,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Ga(A,W,j,Q,T){W.isScene!==!0&&(W=He),R.resetTextureUnits();let L=W.fog,$=Q.isMeshStandardMaterial?W.environment:null,O=E===null?x.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Ji,B=(Q.isMeshStandardMaterial?X:M).get(Q.envMap||$),N=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ie=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Y=!!j.morphAttributes.position,ve=!!j.morphAttributes.normal,$e=!!j.morphAttributes.color,rt=qi;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(rt=x.toneMapping);let an=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,at=an!==void 0?an.length:0,ze=Ee.get(Q),St=g.state.lights;if(ne===!0&&(he===!0||A!==J)){let gn=A===J&&Q.id===k;te.setState(Q,A,gn)}let ot=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==St.state.version||ze.outputColorSpace!==O||T.isBatchedMesh&&ze.batching===!1||!T.isBatchedMesh&&ze.batching===!0||T.isBatchedMesh&&ze.batchingColor===!0&&T.colorTexture===null||T.isBatchedMesh&&ze.batchingColor===!1&&T.colorTexture!==null||T.isInstancedMesh&&ze.instancing===!1||!T.isInstancedMesh&&ze.instancing===!0||T.isSkinnedMesh&&ze.skinning===!1||!T.isSkinnedMesh&&ze.skinning===!0||T.isInstancedMesh&&ze.instancingColor===!0&&T.instanceColor===null||T.isInstancedMesh&&ze.instancingColor===!1&&T.instanceColor!==null||T.isInstancedMesh&&ze.instancingMorph===!0&&T.morphTexture===null||T.isInstancedMesh&&ze.instancingMorph===!1&&T.morphTexture!==null||ze.envMap!==B||Q.fog===!0&&ze.fog!==L||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==te.numPlanes||ze.numIntersection!==te.numIntersection)||ze.vertexAlphas!==N||ze.vertexTangents!==ie||ze.morphTargets!==Y||ze.morphNormals!==ve||ze.morphColors!==$e||ze.toneMapping!==rt||ze.morphTargetsCount!==at)&&(ot=!0):(ot=!0,ze.__version=Q.version);let wn=ze.currentProgram;ot===!0&&(wn=ts(Q,W,T));let Xn=!1,on=!1,zr=!1,Pt=wn.getUniforms(),ri=ze.uniforms;if(Se.useProgram(wn.program)&&(Xn=!0,on=!0,zr=!0),Q.id!==k&&(k=Q.id,on=!0),Xn||J!==A){ge.reverseDepthBuffer?(ye.copy(A.projectionMatrix),Ay(ye),Ey(ye),Pt.setValue(I,"projectionMatrix",ye)):Pt.setValue(I,"projectionMatrix",A.projectionMatrix),Pt.setValue(I,"viewMatrix",A.matrixWorldInverse);let gn=Pt.map.cameraPosition;gn!==void 0&&gn.setValue(I,qe.setFromMatrixPosition(A.matrixWorld)),ge.logarithmicDepthBuffer&&Pt.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Pt.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),J!==A&&(J=A,on=!0,zr=!0)}if(T.isSkinnedMesh){Pt.setOptional(I,T,"bindMatrix"),Pt.setOptional(I,T,"bindMatrixInverse");let gn=T.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),Pt.setValue(I,"boneTexture",gn.boneTexture,R))}T.isBatchedMesh&&(Pt.setOptional(I,T,"batchingTexture"),Pt.setValue(I,"batchingTexture",T._matricesTexture,R),Pt.setOptional(I,T,"batchingIdTexture"),Pt.setValue(I,"batchingIdTexture",T._indirectTexture,R),Pt.setOptional(I,T,"batchingColorTexture"),T._colorsTexture!==null&&Pt.setValue(I,"batchingColorTexture",T._colorsTexture,R));let is=j.morphAttributes;if((is.position!==void 0||is.normal!==void 0||is.color!==void 0)&&Me.update(T,j,wn),(on||ze.receiveShadow!==T.receiveShadow)&&(ze.receiveShadow=T.receiveShadow,Pt.setValue(I,"receiveShadow",T.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(ri.envMap.value=B,ri.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&W.environment!==null&&(ri.envMapIntensity.value=W.environmentIntensity),on&&(Pt.setValue(I,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Wa(ri,zr),L&&Q.fog===!0&&Ce.refreshFogUniforms(ri,L),Ce.refreshMaterialUniforms(ri,Q,Z,U,g.state.transmissionRenderTarget[A.id]),vr.upload(I,Fr(ze),ri,R)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(vr.upload(I,Fr(ze),ri,R),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Pt.setValue(I,"center",T.center),Pt.setValue(I,"modelViewMatrix",T.modelViewMatrix),Pt.setValue(I,"normalMatrix",T.normalMatrix),Pt.setValue(I,"modelMatrix",T.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let gn=Q.uniformsGroups;for(let ss=0,hd=gn.length;ss<hd;ss++){let Fs=gn[ss];F.update(Fs,wn),F.bind(Fs,wn)}}return wn}function Wa(A,W){A.ambientLightColor.needsUpdate=W,A.lightProbe.needsUpdate=W,A.directionalLights.needsUpdate=W,A.directionalLightShadows.needsUpdate=W,A.pointLights.needsUpdate=W,A.pointLightShadows.needsUpdate=W,A.spotLights.needsUpdate=W,A.spotLightShadows.needsUpdate=W,A.rectAreaLights.needsUpdate=W,A.hemisphereLights.needsUpdate=W}function ns(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,W,j){Ee.get(A.texture).__webglTexture=W,Ee.get(A.depthTexture).__webglTexture=j;let Q=Ee.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,W){let j=Ee.get(A);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(A,W=0,j=0){E=A,C=W,S=j;let Q=!0,T=null,L=!1,$=!1;if(A){let B=Ee.get(A);if(B.__useDefaultFramebuffer!==void 0)Se.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(B.__webglFramebuffer===void 0)R.setupRenderTarget(A);else if(B.__hasExternalTextures)R.rebindTextures(A,Ee.get(A.texture).__webglTexture,Ee.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Y=A.depthTexture;if(B.__boundDepthTexture!==Y){if(Y!==null&&Ee.has(Y)&&(A.width!==Y.image.width||A.height!==Y.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(A)}}let N=A.texture;(N.isData3DTexture||N.isDataArrayTexture||N.isCompressedArrayTexture)&&($=!0);let ie=Ee.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ie[W])?T=ie[W][j]:T=ie[W],L=!0):A.samples>0&&R.useMultisampledRTT(A)===!1?T=Ee.get(A).__webglMultisampledFramebuffer:Array.isArray(ie)?T=ie[j]:T=ie,_.copy(A.viewport),w.copy(A.scissor),q=A.scissorTest}else _.copy(pe).multiplyScalar(Z).floor(),w.copy(G).multiplyScalar(Z).floor(),q=se;if(Se.bindFramebuffer(I.FRAMEBUFFER,T)&&Q&&Se.drawBuffers(A,T),Se.viewport(_),Se.scissor(w),Se.setScissorTest(q),L){let B=Ee.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+W,B.__webglTexture,j)}else if($){let B=Ee.get(A.texture),N=W||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.__webglTexture,j||0,N)}k=-1},this.readRenderTargetPixels=function(A,W,j,Q,T,L,$){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$!==void 0&&(O=O[$]),O){Se.bindFramebuffer(I.FRAMEBUFFER,O);try{let B=A.texture,N=B.format,ie=B.type;if(!ge.textureFormatReadable(N)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ge.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=A.width-Q&&j>=0&&j<=A.height-T&&I.readPixels(W,j,Q,T,Ye.convert(N),Ye.convert(ie),L)}finally{let B=E!==null?Ee.get(E).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,B)}}},this.readRenderTargetPixelsAsync=async function(A,W,j,Q,T,L,$){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=Ee.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&$!==void 0&&(O=O[$]),O){let B=A.texture,N=B.format,ie=B.type;if(!ge.textureFormatReadable(N))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ge.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(W>=0&&W<=A.width-Q&&j>=0&&j<=A.height-T){Se.bindFramebuffer(I.FRAMEBUFFER,O);let Y=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Y),I.bufferData(I.PIXEL_PACK_BUFFER,L.byteLength,I.STREAM_READ),I.readPixels(W,j,Q,T,Ye.convert(N),Ye.convert(ie),0);let ve=E!==null?Ee.get(E).__webglFramebuffer:null;Se.bindFramebuffer(I.FRAMEBUFFER,ve);let $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ty(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Y),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,L),I.deleteBuffer(Y),I.deleteSync($e),L}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,W=null,j=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),W=arguments[0]||null,A=arguments[1]);let Q=Math.pow(2,-j),T=Math.floor(A.image.width*Q),L=Math.floor(A.image.height*Q),$=W!==null?W.x:0,O=W!==null?W.y:0;R.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,$,O,T,L),Se.unbindTexture()},this.copyTextureToTexture=function(A,W,j=null,Q=null,T=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],W=arguments[2],T=arguments[3]||0,j=null);let L,$,O,B,N,ie;j!==null?(L=j.max.x-j.min.x,$=j.max.y-j.min.y,O=j.min.x,B=j.min.y):(L=A.image.width,$=A.image.height,O=0,B=0),Q!==null?(N=Q.x,ie=Q.y):(N=0,ie=0);let Y=Ye.convert(W.format),ve=Ye.convert(W.type);R.setTexture2D(W,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);let $e=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),an=I.getParameter(I.UNPACK_SKIP_PIXELS),at=I.getParameter(I.UNPACK_SKIP_ROWS),ze=I.getParameter(I.UNPACK_SKIP_IMAGES),St=A.isCompressedTexture?A.mipmaps[T]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,O),I.pixelStorei(I.UNPACK_SKIP_ROWS,B),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,T,N,ie,L,$,Y,ve,St.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,T,N,ie,St.width,St.height,Y,St.data):I.texSubImage2D(I.TEXTURE_2D,T,N,ie,L,$,Y,ve,St),I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,an),I.pixelStorei(I.UNPACK_SKIP_ROWS,at),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze),T===0&&W.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(A,W,j=null,Q=null,T=0){A.isTexture!==!0&&(Fo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],W=arguments[3],T=arguments[4]||0);let L,$,O,B,N,ie,Y,ve,$e,rt=A.isCompressedTexture?A.mipmaps[T]:A.image;j!==null?(L=j.max.x-j.min.x,$=j.max.y-j.min.y,O=j.max.z-j.min.z,B=j.min.x,N=j.min.y,ie=j.min.z):(L=rt.width,$=rt.height,O=rt.depth,B=0,N=0,ie=0),Q!==null?(Y=Q.x,ve=Q.y,$e=Q.z):(Y=0,ve=0,$e=0);let an=Ye.convert(W.format),at=Ye.convert(W.type),ze;if(W.isData3DTexture)R.setTexture3D(W,0),ze=I.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)R.setTexture2DArray(W,0),ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,W.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,W.unpackAlignment);let St=I.getParameter(I.UNPACK_ROW_LENGTH),ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),wn=I.getParameter(I.UNPACK_SKIP_PIXELS),Xn=I.getParameter(I.UNPACK_SKIP_ROWS),on=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,rt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,B),I.pixelStorei(I.UNPACK_SKIP_ROWS,N),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ie),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ze,T,Y,ve,$e,L,$,O,an,at,rt.data):W.isCompressedArrayTexture?I.compressedTexSubImage3D(ze,T,Y,ve,$e,L,$,O,an,rt.data):I.texSubImage3D(ze,T,Y,ve,$e,L,$,O,an,at,rt),I.pixelStorei(I.UNPACK_ROW_LENGTH,St),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,on),T===0&&W.generateMipmaps&&I.generateMipmap(ze),Se.unbindTexture()},this.initRenderTarget=function(A){Ee.get(A).__webglFramebuffer===void 0&&R.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?R.setTextureCube(A,0):A.isData3DTexture?R.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?R.setTexture2DArray(A,0):R.setTexture2D(A,0),Se.unbindTexture()},this.resetState=function(){C=0,S=0,E=null,Se.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=e===Uf?"display-p3":"srgb",n.unpackColorSpace=gt.workingColorSpace===_l?"display-p3":"srgb"}};var il=class extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}},cf=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Wh,this.updateRanges=[],this.version=0,this.uuid=Ai()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ai()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},vn=new H,sl=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyMatrix4(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.applyNormalMatrix(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)vn.fromBufferAttribute(this,n),vn.transformDirection(e),this.setXYZ(n,vn.x,vn.y,vn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=li(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=_t(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=li(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=li(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=li(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=li(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=_t(n,this.array),i=_t(i,this.array),s=_t(s,this.array),r=_t(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new Nn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ki=class extends Pi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new nt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hr,ua=new H,fr=new H,dr=new H,ur=new _e,pa=new _e,m0=new Lt,Ao=new H,ma=new H,Eo=new H,zp=new _e,eh=new _e,Hp=new _e,Ps=class extends Ht{constructor(e=new Ki){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new bn;let n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new cf(n,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new sl(i,3,0,!1)),hr.setAttribute("uv",new sl(i,2,3,!1))}this.geometry=hr,this.material=e,this.center=new _e(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),m0.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Co(Ao.set(-.5,-.5,0),dr,a,fr,s,r),Co(ma.set(.5,-.5,0),dr,a,fr,s,r),Co(Eo.set(.5,.5,0),dr,a,fr,s,r),zp.set(0,0),eh.set(1,0),Hp.set(1,1);let o=e.ray.intersectTriangle(Ao,ma,Eo,!1,ua);if(o===null&&(Co(ma.set(-.5,.5,0),dr,a,fr,s,r),eh.set(0,1),o=e.ray.intersectTriangle(Ao,Eo,ma,!1,ua),o===null))return;let l=e.ray.origin.distanceTo(ua);l<e.near||l>e.far||n.push({distance:l,point:ua.clone(),uv:Wi.getInterpolation(ua,Ao,ma,Eo,zp,eh,Hp,new _e),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Co(t,e,n,i,s,r){ur.subVectors(t,n).addScalar(.5).multiply(i),s!==void 0?(pa.x=r*ur.x-s*ur.y,pa.y=s*ur.x+r*ur.y):pa.copy(ur),t.copy(e),t.x+=pa.x,t.y+=pa.y,t.applyMatrix4(m0)}var rl=class extends En{constructor(e=null,n=1,i=1,s,r,a,o,l,c=un,h=un,d,f){super(null,a,o,l,c,h,s,r,d,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hi=class extends En{constructor(e,n,i,s,r,a,o,l,c){super(e,n,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Cn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){let i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){let n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let n=[],i,s=this.getPoint(0),r=0;n.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),n.push(r),s=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){let i=this.getLengths(),s=0,r=i.length,a;n?a=n:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(e,n){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=n||(a.isVector2?new _e:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,n){let i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){let i=new H,s=[],r=[],a=[],o=new H,l=new Lt;for(let u=0;u<=e;u++){let p=u/e;s[u]=this.getTangentAt(p,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(ln(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,p))}a[u].crossVectors(s[u],r[u])}if(n===!0){let u=Math.acos(ln(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],u*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ta=class extends Cn{constructor(e=0,n=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,n=new _e){let i=n,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},hf=class extends Ta{constructor(e,n,i,s,r,a){super(e,n,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ff(){let t=0,e=0,n=0,i=0;function s(r,a,o,l){t=r,e=o,n=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,s(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return t+e*r+n*a+i*o}}}var Po=new H,th=new Ff,nh=new Ff,ih=new Ff,Aa=class extends Cn{constructor(e=[],n=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=s}getPoint(e,n=new H){let i=n,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Po.subVectors(s[0],s[1]).add(s[0]),c=Po);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Po.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Po),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),u),y=Math.pow(d.distanceToSquared(f),u),g=Math.pow(f.distanceToSquared(h),u);y<1e-4&&(y=1),p<1e-4&&(p=y),g<1e-4&&(g=y),th.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,p,y,g),nh.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,p,y,g),ih.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,p,y,g)}else this.curveType==="catmullrom"&&(th.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),nh.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),ih.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return i.set(th.calc(l),nh.calc(l),ih.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vp(t,e,n,i,s){let r=(i-e)*.5,a=(s-n)*.5,o=t*t,l=t*o;return(2*n-2*i+r+a)*l+(-3*n+3*i-2*r-a)*o+r*t+n}function MM(t,e){let n=1-t;return n*n*e}function wM(t,e){return 2*(1-t)*t*e}function SM(t,e){return t*t*e}function xa(t,e,n,i){return MM(t,e)+wM(t,n)+SM(t,i)}function TM(t,e){let n=1-t;return n*n*n*e}function AM(t,e){let n=1-t;return 3*n*n*t*e}function EM(t,e){return 3*(1-t)*t*t*e}function CM(t,e){return t*t*t*e}function va(t,e,n,i,s){return TM(t,e)+AM(t,n)+EM(t,i)+CM(t,s)}var al=class extends Cn{constructor(e=new _e,n=new _e,i=new _e,s=new _e){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new _e){let i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(va(e,s.x,r.x,a.x,o.x),va(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ff=class extends Cn{constructor(e=new H,n=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=s}getPoint(e,n=new H){let i=n,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(va(e,s.x,r.x,a.x,o.x),va(e,s.y,r.y,a.y,o.y),va(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ol=class extends Cn{constructor(e=new _e,n=new _e){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new _e){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new _e){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},df=class extends Cn{constructor(e=new H,n=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new H){let i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new H){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ll=class extends Cn{constructor(e=new _e,n=new _e,i=new _e){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new _e){let i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(xa(e,s.x,r.x,a.x),xa(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rs=class extends Cn{constructor(e=new H,n=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new H){let i=n,s=this.v0,r=this.v1,a=this.v2;return i.set(xa(e,s.x,r.x,a.x),xa(e,s.y,r.y,a.y),xa(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},cl=class extends Cn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new _e){let i=n,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Vp(o,l.x,c.x,h.x,d.x),Vp(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){let s=this.points[n];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){let s=e.points[n];this.points.push(new _e().fromArray(s))}return this}},hl=Object.freeze({__proto__:null,ArcCurve:hf,CatmullRomCurve3:Aa,CubicBezierCurve:al,CubicBezierCurve3:ff,EllipseCurve:Ta,LineCurve:ol,LineCurve3:df,QuadraticBezierCurve:ll,QuadraticBezierCurve3:Rs,SplineCurve:cl}),uf=class extends Cn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hl[i](n,e))}return this}getPoint(e,n){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,n)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],n=0;for(let i=0,s=this.curves.length;i<s;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){let n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){let n=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(n.push(h),i=h)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){let s=this.curves[n];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){let s=e.curves[n];this.curves.push(new hl[s.type]().fromJSON(s))}return this}},Ea=class extends uf{constructor(e){super(),this.type="Path",this.currentPoint=new _e,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){let i=new ol(this.currentPoint.clone(),new _e(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,s){let r=new ll(this.currentPoint.clone(),new _e(e,n),new _e(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,n,i,s,r,a){let o=new al(this.currentPoint.clone(),new _e(e,n),new _e(i,s),new _e(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let n=[this.currentPoint.clone()].concat(e),i=new cl(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,n+l,i,s,r,a),this}absarc(e,n,i,s,r,a){return this.absellipse(e,n,i,i,s,r,a),this}ellipse(e,n,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,n+h,i,s,r,a,o,l),this}absellipse(e,n,i,s,r,a,o,l){let c=new Ta(e,n,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ca=class t extends bn{constructor(e=[new _e(0,-.5),new _e(.5,0),new _e(0,.5)],n=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:s},n=Math.floor(n),s=ln(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/n,d=new H,f=new _e,u=new H,p=new H,y=new H,g=0,m=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,u.x=m*1,u.y=-g,u.z=m*0,y.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[b+1].x-e[b].x,m=e[b+1].y-e[b].y,u.x=m*1,u.y=-g,u.z=m*0,p.copy(u),u.x+=y.x,u.y+=y.y,u.z+=y.z,u.normalize(),l.push(u.x,u.y,u.z),y.copy(p)}for(let b=0;b<=n;b++){let x=i+b*h*s,v=Math.sin(x),C=Math.cos(x);for(let S=0;S<=e.length-1;S++){d.x=e[S].x*v,d.y=e[S].y,d.z=e[S].x*C,a.push(d.x,d.y,d.z),f.x=b/n,f.y=S/(e.length-1),o.push(f.x,f.y);let E=l[3*S+0]*v,k=l[3*S+1],J=l[3*S+0]*C;c.push(E,k,J)}}for(let b=0;b<n;b++)for(let x=0;x<e.length-1;x++){let v=x+b*e.length,C=v,S=v+e.length,E=v+e.length+1,k=v+1;r.push(C,S,k),r.push(E,k,S)}this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("uv",new vt(o,2)),this.setAttribute("normal",new vt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.points,e.segments,e.phiStart,e.phiLength)}},ki=class t extends Ca{constructor(e=1,n=1,i=4,s=8){let r=new Ea;r.absarc(0,-n/2,e,Math.PI*1.5,0),r.absarc(0,n/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:s}}static fromJSON(e){return new t(e.radius,e.length,e.capSegments,e.radialSegments)}},Er=class t extends bn{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],o=[],l=[],c=new H,h=new _e;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=n;d++,f+=3){let u=i+d/n*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new vt(a,3)),this.setAttribute("normal",new vt(o,3)),this.setAttribute("uv",new vt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},bt=class t extends bn{constructor(e=1,n=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],p=0,y=[],g=i/2,m=0;b(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(u,2));function b(){let v=new H,C=new H,S=0,E=(n-e)/i;for(let k=0;k<=r;k++){let J=[],_=k/r,w=_*(n-e)+e;for(let q=0;q<=s;q++){let z=q/s,P=z*l+o,D=Math.sin(P),U=Math.cos(P);C.x=w*D,C.y=-_*i+g,C.z=w*U,d.push(C.x,C.y,C.z),v.set(D,E,U).normalize(),f.push(v.x,v.y,v.z),u.push(z,1-_),J.push(p++)}y.push(J)}for(let k=0;k<s;k++)for(let J=0;J<r;J++){let _=y[J][k],w=y[J+1][k],q=y[J+1][k+1],z=y[J][k+1];e>0&&(h.push(_,w,z),S+=3),n>0&&(h.push(w,q,z),S+=3)}c.addGroup(m,S,0),m+=S}function x(v){let C=p,S=new _e,E=new H,k=0,J=v===!0?e:n,_=v===!0?1:-1;for(let q=1;q<=s;q++)d.push(0,g*_,0),f.push(0,_,0),u.push(.5,.5),p++;let w=p;for(let q=0;q<=s;q++){let P=q/s*l+o,D=Math.cos(P),U=Math.sin(P);E.x=J*U,E.y=g*_,E.z=J*D,d.push(E.x,E.y,E.z),f.push(0,_,0),S.x=D*.5+.5,S.y=U*.5*_+.5,u.push(S.x,S.y),p++}for(let q=0;q<s;q++){let z=C+q,P=w+q;v===!0?h.push(P,P+1,z):h.push(P+1,P,z),k+=3}c.addGroup(m,k,v===!0?1:2),m+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},en=class t extends bt{constructor(e=1,n=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,n,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new t(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var fi=class extends Ea{constructor(e){super(e),this.uuid=Ai(),this.type="Shape",this.holes=[]}getPointsHoles(e){let n=[];for(let i=0,s=this.holes.length;i<s;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){let s=this.holes[n];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){let s=e.holes[n];this.holes.push(new Ea().fromJSON(s))}return this}},PM={triangulate:function(t,e,n=2){let i=e&&e.length,s=i?e[0]*n:t.length,r=g0(t,0,s,n,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,d,f,u;if(i&&(r=NM(t,e,r,n)),t.length>80*n){o=c=t[0],l=h=t[1];for(let p=n;p<s;p+=n)d=t[p],f=t[p+1],d<o&&(o=d),f<l&&(l=f),d>c&&(c=d),f>h&&(h=f);u=Math.max(c-o,h-l),u=u!==0?32767/u:0}return Pa(r,a,n,o,l,u,0),a}};function g0(t,e,n,i,s){let r,a;if(s===$M(t,e,n,i)>0)for(r=e;r<n;r+=i)a=Gp(r,t[r],t[r+1],a);else for(r=n-i;r>=e;r-=i)a=Gp(r,t[r],t[r+1],a);return a&&Ml(a,a.next)&&(ka(a),a=a.next),a}function ks(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Ml(n,n.next)||It(n.prev,n,n.next)===0)){if(ka(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Pa(t,e,n,i,s,r,a){if(!t)return;!a&&r&&BM(t,i,s,r);let o=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,r?kM(t,i,s,r):RM(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),ka(t),t=c.next,o=c.next;continue}if(t=c,t===o){a?a===1?(t=IM(ks(t),e,n),Pa(t,e,n,i,s,r,2)):a===2&&LM(t,e,n,i,s,r):Pa(ks(t),e,n,i,s,r,1);break}}}function RM(t){let e=t.prev,n=t,i=t.next;if(It(e,n,i)>=0)return!1;let s=e.x,r=n.x,a=i.x,o=e.y,l=n.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,d=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,u=o>l?o>c?o:c:l>c?l:c,p=i.next;for(;p!==e;){if(p.x>=h&&p.x<=f&&p.y>=d&&p.y<=u&&mr(s,o,r,l,a,c,p.x,p.y)&&It(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function kM(t,e,n,i){let s=t.prev,r=t,a=t.next;if(It(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,f=a.y,u=o<l?o<c?o:c:l<c?l:c,p=h<d?h<f?h:f:d<f?d:f,y=o>l?o>c?o:c:l>c?l:c,g=h>d?h>f?h:f:d>f?d:f,m=pf(u,p,e,n,i),b=pf(y,g,e,n,i),x=t.prevZ,v=t.nextZ;for(;x&&x.z>=m&&v&&v.z<=b;){if(x.x>=u&&x.x<=y&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&mr(o,h,l,d,c,f,x.x,x.y)&&It(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=u&&v.x<=y&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&mr(o,h,l,d,c,f,v.x,v.y)&&It(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=u&&x.x<=y&&x.y>=p&&x.y<=g&&x!==s&&x!==a&&mr(o,h,l,d,c,f,x.x,x.y)&&It(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=b;){if(v.x>=u&&v.x<=y&&v.y>=p&&v.y<=g&&v!==s&&v!==a&&mr(o,h,l,d,c,f,v.x,v.y)&&It(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function IM(t,e,n){let i=t;do{let s=i.prev,r=i.next.next;!Ml(s,r)&&y0(s,i,i.next,r)&&Ra(s,r)&&Ra(r,s)&&(e.push(s.i/n|0),e.push(i.i/n|0),e.push(r.i/n|0),ka(i),ka(i.next),i=t=r),i=i.next}while(i!==t);return ks(i)}function LM(t,e,n,i,s,r){let a=t;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&VM(a,o)){let l=x0(a,o);a=ks(a,a.next),l=ks(l,l.next),Pa(a,e,n,i,s,r,0),Pa(l,e,n,i,s,r,0);return}o=o.next}a=a.next}while(a!==t)}function NM(t,e,n,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:t.length,c=g0(t,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(HM(c));for(s.sort(DM),r=0;r<s.length;r++)n=UM(s[r],n);return n}function DM(t,e){return t.x-e.x}function UM(t,e){let n=OM(t,e);if(!n)return e;let i=x0(n,t);return ks(i,i.next),ks(n,n.next)}function OM(t,e){let n=e,i=-1/0,s,r=t.x,a=t.y;do{if(a<=n.y&&a>=n.next.y&&n.next.y!==n.y){let f=n.x+(a-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(f<=r&&f>i&&(i=f,s=n.x<n.next.x?n:n.next,f===r))return s}n=n.next}while(n!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,d;n=s;do r>=n.x&&n.x>=l&&r!==n.x&&mr(a<c?r:i,a,l,c,a<c?i:r,a,n.x,n.y)&&(d=Math.abs(a-n.y)/(r-n.x),Ra(n,t)&&(d<h||d===h&&(n.x>s.x||n.x===s.x&&FM(s,n)))&&(s=n,h=d)),n=n.next;while(n!==o);return s}function FM(t,e){return It(t.prev,t,e.prev)<0&&It(e.next,t,t.next)<0}function BM(t,e,n,i){let s=t;do s.z===0&&(s.z=pf(s.x,s.y,e,n,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==t);s.prevZ.nextZ=null,s.prevZ=null,zM(s)}function zM(t){let e,n,i,s,r,a,o,l,c=1;do{for(n=t,t=null,r=null,a=0;n;){for(a++,i=n,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||n.z<=i.z)?(s=n,n=n.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:t=s,s.prevZ=r,r=s;n=i}r.nextZ=null,c*=2}while(a>1);return t}function pf(t,e,n,i,s){return t=(t-n)*s|0,e=(e-i)*s|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function HM(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function mr(t,e,n,i,s,r,a,o){return(s-a)*(e-o)>=(t-a)*(r-o)&&(t-a)*(i-o)>=(n-a)*(e-o)&&(n-a)*(r-o)>=(s-a)*(i-o)}function VM(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!GM(t,e)&&(Ra(t,e)&&Ra(e,t)&&WM(t,e)&&(It(t.prev,t,e.prev)||It(t,e.prev,e))||Ml(t,e)&&It(t.prev,t,t.next)>0&&It(e.prev,e,e.next)>0)}function It(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Ml(t,e){return t.x===e.x&&t.y===e.y}function y0(t,e,n,i){let s=ko(It(t,e,n)),r=ko(It(t,e,i)),a=ko(It(n,i,t)),o=ko(It(n,i,e));return!!(s!==r&&a!==o||s===0&&Ro(t,n,e)||r===0&&Ro(t,i,e)||a===0&&Ro(n,t,i)||o===0&&Ro(n,e,i))}function Ro(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function ko(t){return t>0?1:t<0?-1:0}function GM(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&y0(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Ra(t,e){return It(t.prev,t,t.next)<0?It(t,e,t.next)>=0&&It(t,t.prev,e)>=0:It(t,e,t.prev)<0||It(t,t.next,e)<0}function WM(t,e){let n=t,i=!1,s=(t.x+e.x)/2,r=(t.y+e.y)/2;do n.y>r!=n.next.y>r&&n.next.y!==n.y&&s<(n.next.x-n.x)*(r-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function x0(t,e){let n=new mf(t.i,t.x,t.y),i=new mf(e.i,e.x,e.y),s=t.next,r=e.prev;return t.next=e,e.prev=t,n.next=s,s.prev=n,i.next=n,n.prev=i,r.next=i,i.prev=r,i}function Gp(t,e,n,i){let s=new mf(t,e,n);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function ka(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function mf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $M(t,e,n,i){let s=0;for(let r=e,a=n-i;r<n;r+=i)s+=(t[a]-t[r])*(t[r+1]+t[a+1]),a=r;return s}var _a=class t{static area(e){let n=e.length,i=0;for(let s=n-1,r=0;r<n;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return t.area(e)<0}static triangulateShape(e,n){let i=[],s=[],r=[];Wp(e),$p(i,e);let a=e.length;n.forEach(Wp);for(let l=0;l<n.length;l++)s.push(a),a+=n[l].length,$p(i,n[l]);let o=PM.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Wp(t){let e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function $p(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}var ji=class t extends bn{constructor(e=new fi([new _e(.5,.5),new _e(-.5,.5),new _e(-.5,-.5),new _e(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new vt(s,3)),this.setAttribute("uv",new vt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=n.curveSegments!==void 0?n.curveSegments:12,h=n.steps!==void 0?n.steps:1,d=n.depth!==void 0?n.depth:1,f=n.bevelEnabled!==void 0?n.bevelEnabled:!0,u=n.bevelThickness!==void 0?n.bevelThickness:.2,p=n.bevelSize!==void 0?n.bevelSize:u-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,g=n.bevelSegments!==void 0?n.bevelSegments:3,m=n.extrudePath,b=n.UVGenerator!==void 0?n.UVGenerator:qM,x,v=!1,C,S,E,k;m&&(x=m.getSpacedPoints(h),v=!0,f=!1,C=m.computeFrenetFrames(h,!1),S=new H,E=new H,k=new H),f||(g=0,u=0,p=0,y=0);let J=o.extractPoints(c),_=J.shape,w=J.holes;if(!_a.isClockWise(_)){_=_.reverse();for(let re=0,I=w.length;re<I;re++){let le=w[re];_a.isClockWise(le)&&(w[re]=le.reverse())}}let z=_a.triangulateShape(_,w),P=_;for(let re=0,I=w.length;re<I;re++){let le=w[re];_=_.concat(le)}function D(re,I,le){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(I,le)}let U=_.length,Z=z.length;function V(re,I,le){let de,ge,Se,Fe=re.x-I.x,Ee=re.y-I.y,R=le.x-re.x,M=le.y-re.y,X=Fe*Fe+Ee*Ee,K=Fe*M-Ee*R;if(Math.abs(K)>Number.EPSILON){let oe=Math.sqrt(X),ae=Math.sqrt(R*R+M*M),Be=I.x-Ee/oe,Ce=I.y+Fe/oe,Ne=le.x-M/ae,be=le.y+R/ae,te=((Ne-Be)*M-(be-Ce)*R)/(Fe*M-Ee*R);de=Be+Fe*te-re.x,ge=Ce+Ee*te-re.y;let ce=de*de+ge*ge;if(ce<=2)return new _e(de,ge);Se=Math.sqrt(ce/2)}else{let oe=!1;Fe>Number.EPSILON?R>Number.EPSILON&&(oe=!0):Fe<-Number.EPSILON?R<-Number.EPSILON&&(oe=!0):Math.sign(Ee)===Math.sign(M)&&(oe=!0),oe?(de=-Ee,ge=Fe,Se=Math.sqrt(X)):(de=Fe,ge=Ee,Se=Math.sqrt(X/2))}return new _e(de/Se,ge/Se)}let xe=[];for(let re=0,I=P.length,le=I-1,de=re+1;re<I;re++,le++,de++)le===I&&(le=0),de===I&&(de=0),xe[re]=V(P[re],P[le],P[de]);let pe=[],G,se=xe.concat();for(let re=0,I=w.length;re<I;re++){let le=w[re];G=[];for(let de=0,ge=le.length,Se=ge-1,Fe=de+1;de<ge;de++,Se++,Fe++)Se===ge&&(Se=0),Fe===ge&&(Fe=0),G[de]=V(le[de],le[Se],le[Fe]);pe.push(G),se=se.concat(G)}for(let re=0;re<g;re++){let I=re/g,le=u*Math.cos(I*Math.PI/2),de=p*Math.sin(I*Math.PI/2)+y;for(let ge=0,Se=P.length;ge<Se;ge++){let Fe=D(P[ge],xe[ge],de);Te(Fe.x,Fe.y,-le)}for(let ge=0,Se=w.length;ge<Se;ge++){let Fe=w[ge];G=pe[ge];for(let Ee=0,R=Fe.length;Ee<R;Ee++){let M=D(Fe[Ee],G[Ee],de);Te(M.x,M.y,-le)}}}let Ue=p+y;for(let re=0;re<U;re++){let I=f?D(_[re],se[re],Ue):_[re];v?(E.copy(C.normals[0]).multiplyScalar(I.x),S.copy(C.binormals[0]).multiplyScalar(I.y),k.copy(x[0]).add(E).add(S),Te(k.x,k.y,k.z)):Te(I.x,I.y,0)}for(let re=1;re<=h;re++)for(let I=0;I<U;I++){let le=f?D(_[I],se[I],Ue):_[I];v?(E.copy(C.normals[re]).multiplyScalar(le.x),S.copy(C.binormals[re]).multiplyScalar(le.y),k.copy(x[re]).add(E).add(S),Te(k.x,k.y,k.z)):Te(le.x,le.y,d/h*re)}for(let re=g-1;re>=0;re--){let I=re/g,le=u*Math.cos(I*Math.PI/2),de=p*Math.sin(I*Math.PI/2)+y;for(let ge=0,Se=P.length;ge<Se;ge++){let Fe=D(P[ge],xe[ge],de);Te(Fe.x,Fe.y,d+le)}for(let ge=0,Se=w.length;ge<Se;ge++){let Fe=w[ge];G=pe[ge];for(let Ee=0,R=Fe.length;Ee<R;Ee++){let M=D(Fe[Ee],G[Ee],de);v?Te(M.x,M.y+x[h-1].y,x[h-1].x+le):Te(M.x,M.y,d+le)}}}ne(),he();function ne(){let re=s.length/3;if(f){let I=0,le=U*I;for(let de=0;de<Z;de++){let ge=z[de];qe(ge[2]+le,ge[1]+le,ge[0]+le)}I=h+g*2,le=U*I;for(let de=0;de<Z;de++){let ge=z[de];qe(ge[0]+le,ge[1]+le,ge[2]+le)}}else{for(let I=0;I<Z;I++){let le=z[I];qe(le[2],le[1],le[0])}for(let I=0;I<Z;I++){let le=z[I];qe(le[0]+U*h,le[1]+U*h,le[2]+U*h)}}i.addGroup(re,s.length/3-re,0)}function he(){let re=s.length/3,I=0;ye(P,I),I+=P.length;for(let le=0,de=w.length;le<de;le++){let ge=w[le];ye(ge,I),I+=ge.length}i.addGroup(re,s.length/3-re,1)}function ye(re,I){let le=re.length;for(;--le>=0;){let de=le,ge=le-1;ge<0&&(ge=re.length-1);for(let Se=0,Fe=h+g*2;Se<Fe;Se++){let Ee=U*Se,R=U*(Se+1),M=I+de+Ee,X=I+ge+Ee,K=I+ge+R,oe=I+de+R;We(M,X,K,oe)}}}function Te(re,I,le){l.push(re),l.push(I),l.push(le)}function qe(re,I,le){He(re),He(I),He(le);let de=s.length/3,ge=b.generateTopUV(i,s,de-3,de-2,de-1);Ge(ge[0]),Ge(ge[1]),Ge(ge[2])}function We(re,I,le,de){He(re),He(I),He(de),He(I),He(le),He(de);let ge=s.length/3,Se=b.generateSideWallUV(i,s,ge-6,ge-3,ge-2,ge-1);Ge(Se[0]),Ge(Se[1]),Ge(Se[3]),Ge(Se[1]),Ge(Se[2]),Ge(Se[3])}function He(re){s.push(l[re*3+0]),s.push(l[re*3+1]),s.push(l[re*3+2])}function Ge(re){r.push(re.x),r.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return XM(n,i,e)}static fromJSON(e,n){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=n[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new hl[s.type]().fromJSON(s)),new t(i,e.options)}},qM={generateTopUV:function(t,e,n,i,s){let r=e[n*3],a=e[n*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new _e(r,a),new _e(o,l),new _e(c,h)]},generateSideWallUV:function(t,e,n,i,s,r){let a=e[n*3],o=e[n*3+1],l=e[n*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],f=e[s*3],u=e[s*3+1],p=e[s*3+2],y=e[r*3],g=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new _e(a,1-l),new _e(c,1-d),new _e(f,1-p),new _e(y,1-m)]:[new _e(o,1-l),new _e(h,1-d),new _e(u,1-p),new _e(g,1-m)]}};function XM(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,s=t.length;i<s;i++){let r=t[i];n.shapes.push(r.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}var ht=class t extends bn{constructor(e=1,n=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new H,f=new H,u=[],p=[],y=[],g=[];for(let m=0;m<=i;m++){let b=[],x=m/i,v=0;m===0&&a===0?v=.5/n:m===i&&l===Math.PI&&(v=-.5/n);for(let C=0;C<=n;C++){let S=C/n;d.x=-e*Math.cos(s+S*r)*Math.sin(a+x*o),d.y=e*Math.cos(a+x*o),d.z=e*Math.sin(s+S*r)*Math.sin(a+x*o),p.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),g.push(S+v,1-x),b.push(c++)}h.push(b)}for(let m=0;m<i;m++)for(let b=0;b<n;b++){let x=h[m][b+1],v=h[m][b],C=h[m+1][b],S=h[m+1][b+1];(m!==0||a>0)&&u.push(x,v,S),(m!==i-1||l<Math.PI)&&u.push(v,C,S)}this.setIndex(u),this.setAttribute("position",new vt(p,3)),this.setAttribute("normal",new vt(y,3)),this.setAttribute("uv",new vt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mt=class t extends bn{constructor(e=1,n=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new H,d=new H,f=new H;for(let u=0;u<=i;u++)for(let p=0;p<=s;p++){let y=p/s*r,g=u/i*Math.PI*2;d.x=(e+n*Math.cos(g))*Math.cos(y),d.y=(e+n*Math.cos(g))*Math.sin(y),d.z=n*Math.sin(g),o.push(d.x,d.y,d.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),f.subVectors(d,h).normalize(),l.push(f.x,f.y,f.z),c.push(p/s),c.push(u/i)}for(let u=1;u<=i;u++)for(let p=1;p<=s;p++){let y=(s+1)*u+p-1,g=(s+1)*(u-1)+p-1,m=(s+1)*(u-1)+p,b=(s+1)*u+p;a.push(y,g,b),a.push(g,m,b)}this.setIndex(a),this.setAttribute("position",new vt(o,3)),this.setAttribute("normal",new vt(l,3)),this.setAttribute("uv",new vt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Is=class t extends bn{constructor(e=new Rs(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),n=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:n,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(n,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,l=new H,c=new _e,h=new H,d=[],f=[],u=[],p=[];y(),this.setIndex(p),this.setAttribute("position",new vt(d,3)),this.setAttribute("normal",new vt(f,3)),this.setAttribute("uv",new vt(u,2));function y(){for(let x=0;x<n;x++)g(x);g(r===!1?n:0),b(),m()}function g(x){h=e.getPointAt(x/n,h);let v=a.normals[x],C=a.binormals[x];for(let S=0;S<=s;S++){let E=S/s*Math.PI*2,k=Math.sin(E),J=-Math.cos(E);l.x=J*v.x+k*C.x,l.y=J*v.y+k*C.y,l.z=J*v.z+k*C.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=n;x++)for(let v=1;v<=s;v++){let C=(s+1)*(x-1)+(v-1),S=(s+1)*x+(v-1),E=(s+1)*x+v,k=(s+1)*(x-1)+v;p.push(C,S,k),p.push(S,E,k)}}function b(){for(let x=0;x<=n;x++)for(let v=0;v<=s;v++)c.x=x/n,c.y=v/s,u.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new t(new hl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Pn=class extends Pi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new nt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var fl=class extends Pi{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new nt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new nt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new _e(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Io(t,e,n){return!t||!n&&t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function YM(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}var Cr=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break e}a=n.length;break t}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=n[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},gf=class extends Cr{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zu,endingEnd:Zu}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ku:r=e,o=2*n-i;break;case ju:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ku:a=e,l=2*i-n;break;case ju:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=n}let c=(i-n)*.5,h=this.valueSize;this._weightPrev=c/(n-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,p=(i-n)/(s-n),y=p*p,g=y*p,m=-f*g+2*f*y-f*p,b=(1+f)*g+(-1.5-2*f)*y+(-.5+f)*p+1,x=(-1-u)*g+(1.5+u)*y+.5*p,v=u*g-u*y;for(let C=0;C!==o;++C)r[C]=m*a[h+C]+b*a[c+C]+x*a[l+C]+v*a[d+C];return r}},yf=class extends Cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-n)/(s-n),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},xf=class extends Cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ni=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Io(n,this.TimeBufferType),this.values=Io(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:Io(e.times,Array),values:Io(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new xf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yf(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new gf(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let n;switch(e){case Bo:n=this.InterpolantFactoryMethodDiscrete;break;case Gh:n=this.InterpolantFactoryMethodLinear;break;case Sc:n=this.InterpolantFactoryMethodSmooth;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Bo;case this.InterpolantFactoryMethodLinear:return Gh;case this.InterpolantFactoryMethodSmooth:return Sc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&YM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Sc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*i,f=d-i,u=d+i;for(let p=0;p!==i;++p){let y=n[d+p];if(y!==n[f+p]||y!==n[u+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*i,f=a*i;for(let u=0;u!==i;++u)n[f+u]=n[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)n[l+c]=n[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,s}};ni.prototype.TimeBufferType=Float32Array;ni.prototype.ValueBufferType=Float32Array;ni.prototype.DefaultInterpolation=Gh;var Ls=class extends ni{constructor(e,n,i){super(e,n,i)}};Ls.prototype.ValueTypeName="bool";Ls.prototype.ValueBufferType=Array;Ls.prototype.DefaultInterpolation=Bo;Ls.prototype.InterpolantFactoryMethodLinear=void 0;Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var vf=class extends ni{};vf.prototype.ValueTypeName="color";var _f=class extends ni{};_f.prototype.ValueTypeName="number";var bf=class extends Cr{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-n)/(s-n),c=e*o;for(let h=c+o;c!==h;c+=4)Zi.slerpFlat(r,0,a,c-o,a,c,l);return r}},dl=class extends ni{InterpolantFactoryMethodLinear(e){return new bf(this.times,this.values,this.getValueSize(),e)}};dl.prototype.ValueTypeName="quaternion";dl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ns=class extends ni{constructor(e,n,i){super(e,n,i)}};Ns.prototype.ValueTypeName="string";Ns.prototype.ValueBufferType=Array;Ns.prototype.DefaultInterpolation=Bo;Ns.prototype.InterpolantFactoryMethodLinear=void 0;Ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Mf=class extends ni{};Mf.prototype.ValueTypeName="vector";var wf=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],p=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return p}return null}}},ZM=new wf,Sf=class{constructor(e){this.manager=e!==void 0?e:ZM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Sf.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pr=class extends Ht{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new nt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}},ul=class extends Pr{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new nt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}},sh=new Lt,qp=new H,Xp=new H,pl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _e(512,512),this.map=null,this.mapPass=null,this.matrix=new Lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Sa,this._frameExtents=new _e(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera,i=this.matrix;qp.setFromMatrixPosition(e.matrixWorld),n.position.copy(qp),Xp.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Xp),n.updateMatrixWorld(),sh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Tf=class extends pl{constructor(){super(new dn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let n=this.camera,i=Wo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ml=class extends Pr{constructor(e,n,i=0,s=Math.PI/3,r=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Tf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Af=class extends pl{constructor(){super(new Qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},gl=class extends Pr{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Af}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},yl=class extends Pr{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}};var Bf="\\[\\]\\.:\\/",KM=new RegExp("["+Bf+"]","g"),zf="[^"+Bf+"]",jM="[^"+Bf.replace("\\.","")+"]",JM=/((?:WC+[\/:])*)/.source.replace("WC",zf),QM=/(WCOD+)?/.source.replace("WCOD",jM),e2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",zf),t2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",zf),n2=new RegExp("^"+JM+QM+e2+t2+"$"),i2=["material","materials","bones","map"],Ef=class{constructor(e,n,i){let s=i||Tt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Tt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(KM,"")}static parseTrackName(e){let n=n2.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);i2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=Ef;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Nw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var La=new H;function qn(t,e,n,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;La.copy(e),La[i]=0,La.normalize();let c=.5*a/(a+o),h=1-La.angleTo(t)/l;return Math.sign(La[n])===1?h*c:o/(a+o)+c+c*(1-h)}var Ii=class extends Qt{constructor(e=1,n=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,n/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new H,l=new H,c=new H(e,n,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,u=h.length/6,p=new H,y=.5/s;for(let g=0,m=0;g<h.length;g+=3,m+=2)switch(o.fromArray(h,g),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[g+0]=c.x*Math.sign(o.x)+l.x*r,h[g+1]=c.y*Math.sign(o.y)+l.y*r,h[g+2]=c.z*Math.sign(o.z)+l.z*r,d[g+0]=l.x,d[g+1]=l.y,d[g+2]=l.z,Math.floor(g/u)){case 0:p.set(1,0,0),f[m+0]=qn(p,l,"z","y",r,i),f[m+1]=1-qn(p,l,"y","z",r,n);break;case 1:p.set(-1,0,0),f[m+0]=1-qn(p,l,"z","y",r,i),f[m+1]=1-qn(p,l,"y","z",r,n);break;case 2:p.set(0,1,0),f[m+0]=1-qn(p,l,"x","z",r,e),f[m+1]=qn(p,l,"z","x",r,i);break;case 3:p.set(0,-1,0),f[m+0]=1-qn(p,l,"x","z",r,e),f[m+1]=1-qn(p,l,"z","x",r,i);break;case 4:p.set(0,0,1),f[m+0]=1-qn(p,l,"x","y",r,e),f[m+1]=1-qn(p,l,"y","x",r,n);break;case 5:p.set(0,0,-1),f[m+0]=qn(p,l,"x","y",r,e),f[m+1]=1-qn(p,l,"y","x",r,n);break}}};var Hf=[{id:"tron",name:"B\xE9 \u0110\u1EE5t",emo:"\u{1F642}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffc93d",bottom:"#2f8bff",shoes:"#ff4d6d",hairStyle:"ahoge",sleeve:.3,pants:.35,face:["blush"]},{id:"hocsinh",name:"H\u1ECDc Sinh",emo:"\u{1F392}",skin:"#fbcca6",hair:"#1d1648",top:"#ffffff",bottom:"#2a3a7a",shoes:"#1d1648",hairStyle:"spiky",sleeve:.3,pants:.35,extra:{scarf:"#ff3d4f",pack:"#38b2ff"}},{id:"cogiao",name:"C\xF4 Gi\xE1o",emo:"\u{1F469}\u200D\u{1F3EB}",skin:"#fcd2b0",hair:"#2a1a14",top:"#fbfbff",bottom:"#fbfbff",shoes:"#c0392b",hairStyle:"long",sleeve:1,pants:1,face:["glasses"],extra:{aodai:"#fbfbff"}},{id:"nonla",name:"C\xF4 Ba N\xF3n L\xE1",emo:"\u{1F38B}",skin:"#f7cfa6",hair:"#1a1a1a",top:"#9b5cf6",bottom:"#ffffff",shoes:"#c0392b",hairStyle:"long",hat:"nonla",sleeve:1,pants:1,extra:{aodai:"#9b5cf6"}},{id:"banhmi",name:"C\xF4 B\xE1nh M\xEC",emo:"\u{1F956}",skin:"#f6c9a0",hair:"#3a2418",top:"#ff8fb8",bottom:"#4b4478",shoes:"#ffc93d",hairStyle:"bun",hat:"scarfHead",hatColor:"#ff6f3c",sleeve:.5,pants:1,extra:{apron:"#ff9a3c"}},{id:"xeom",name:"Ch\xFA Xe \xD4m",emo:"\u{1F6F5}",skin:"#e8b48a",hair:"#1a1a1a",top:"#3aa357",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"helmet",hatColor:"#2fbf71",face:["mustache"],sleeve:1,pants:1},{id:"ngoai",name:"B\xE0 Ngo\u1EA1i",emo:"\u{1F475}",skin:"#f3c9a6",hair:"#eeeef5",top:"#a86b3c",bottom:"#2b2550",shoes:"#6b4426",hairStyle:"bun",face:["glasses","blush"],sleeve:1,pants:1,extra:{belt:"#2b2550"}},{id:"baove",name:"B\xE1c B\u1EA3o V\u1EC7",emo:"\u{1F46E}",skin:"#e8b48a",hair:"#2a1a14",top:"#c9b27a",bottom:"#6b5a3a",shoes:"#1d1648",hairStyle:"short",hat:"cap",hatColor:"#2b3a6b",face:["mustache"],sleeve:.5,pants:1,extra:{whistle:!0,badge:!0,belt:"#3a2a1c"}},{id:"shipper",name:"Anh Shipper",emo:"\u{1F4E6}",skin:"#ffd2a6",hair:"#1a1a1a",top:"#ff8a1f",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"fullhelmet",hatColor:"#ff8a1f",sleeve:1,pants:1,extra:{box:"#ff8a1f"}},{id:"chef",name:"Vua \u0110\u1EA7u B\u1EBFp",emo:"\u{1F468}\u200D\u{1F373}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffffff",bottom:"#2b2550",shoes:"#1d1648",hairStyle:"short",hat:"chef",face:["curly"],sleeve:1,pants:1,extra:{scarf:"#ff3d4f",apron:"#ffffff"}},{id:"chotdon",name:"Ch\u1ECB Ch\u1ED1t \u0110\u01A1n",emo:"\u{1F4F1}",skin:"#fcd2b0",hair:"#a8452a",top:"#ff3d8b",bottom:"#1d1648",shoes:"#ffc93d",hairStyle:"wavy",face:["blush"],sleeve:.3,pants:.4,extra:{dress:"#ff3d8b",chain:!0}},{id:"scientist",name:"Gi\xE1o S\u01B0 Kh\xF9ng",emo:"\u{1F9EA}",skin:"#fbcca6",hair:"#eeeef5",top:"#4dabf7",bottom:"#5b6478",shoes:"#3a2a1c",hairStyle:"messy",face:["glasses"],sleeve:1,pants:1,extra:{coat:"#ffffff",tie:"#ff3d4f"}},{id:"doctor",name:"B\xE1c S\u0129",emo:"\u{1FA7A}",skin:"#f6c9a0",hair:"#2a1a14",top:"#3ccf9e",bottom:"#3ccf9e",shoes:"#ffffff",hairStyle:"slick",hat:"mirror",sleeve:1,pants:1,extra:{coat:"#ffffff"}},{id:"boss",name:"T\u1ED5ng T\xE0i",emo:"\u{1F60E}",skin:"#f6c9a0",hair:"#1a1a1a",top:"#22223a",bottom:"#22223a",shoes:"#0d0d18",hairStyle:"slick",face:["shades"],sleeve:1,pants:1,extra:{tie:"#ff3d4f"}},{id:"idol",name:"Idol Nh\xED",emo:"\u{1F3A4}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff6fb5",bottom:"#ffffff",shoes:"#ff6fb5",hairStyle:"pigtails",face:["blush"],sleeve:.3,pants:.3,extra:{dress:"#ffffff",star:"#ffc93d"}},{id:"rocker",name:"Rocker",emo:"\u{1F3B8}",skin:"#fbcca6",hair:"#ff3d8b",top:"#1d1648",bottom:"#2b2550",shoes:"#ff3d4f",hairStyle:"mohawk",face:["shades"],sleeve:.35,pants:1,extra:{chain:!0}},{id:"rapper",name:"Rapper",emo:"\u{1F9E2}",skin:"#c98b5e",hair:"#1a1a1a",top:"#8b5cf6",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"capBack",hatColor:"#ffc93d",sleeve:1,pants:1,extra:{chain:!0}},{id:"gamer",name:"Game Th\u1EE7",emo:"\u{1F3AE}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#2fbf71",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"messy",hat:"phones",hatColor:"#1d1648",face:["glasses"],sleeve:1,pants:1},{id:"football",name:"C\u1EA7u Th\u1EE7",emo:"\u26BD",skin:"#e8b48a",hair:"#1a1a1a",top:"#ff3d4f",bottom:"#ffffff",shoes:"#ffc93d",hairStyle:"spiky",hat:"band",hatColor:"#ffffff",sleeve:.3,pants:.3,legs:"#ff3d4f"},{id:"farmer",name:"B\xE1c N\xF4ng D\xE2n",emo:"\u{1F33E}",skin:"#d99b6c",hair:"#1a1a1a",top:"#7a5230",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"nonla",sleeve:1,pants:.7,extra:{scarf:"#1d1648"}},{id:"ongdo",name:"\xD4ng \u0110\u1ED3",emo:"\u{1F4DC}",skin:"#f3c9a6",hair:"#eeeef5",top:"#2f6bff",bottom:"#ffffff",shoes:"#1d1648",hairStyle:"bald",hat:"turban",hatColor:"#1d1648",face:["beard","glasses"],sleeve:1,pants:1,extra:{aodai:"#2f6bff"}},{id:"fire",name:"L\xEDnh C\u1EE9u Ho\u1EA3",emo:"\u{1F9D1}\u200D\u{1F692}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffb63d",bottom:"#ffb63d",shoes:"#1d1648",hairStyle:"short",hat:"fire",hatColor:"#ff3d4f",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#ffe14d"}},{id:"astro",name:"Phi H\xE0nh Gia",emo:"\u{1F680}",skin:"#fbcca6",hair:"#3a2a1c",top:"#f2f4ff",bottom:"#f2f4ff",shoes:"#8b93b8",hairStyle:"short",hat:"bubble",sleeve:1,pants:1,gloves:"#ffffff",extra:{pack:"#dfe3f5",badge:!0}},{id:"hero",name:"Si\xEAu Nh\xE2n \u0110\u1EE5t",emo:"\u{1F9B8}",skin:"#ffd2a6",hair:"#1d1648",top:"#2f6bff",bottom:"#ff3d4f",shoes:"#ff3d4f",hairStyle:"ahoge",hat:"band",hatColor:"#ff3d4f",sleeve:1,pants:.2,legs:"#2f6bff",gloves:"#ffffff",extra:{cape:"#ff3d4f",star:"#ffc93d",belt:"#ffc93d"}},{id:"ninja",name:"Ninja H\u1EE5t",emo:"\u{1F977}",skin:"#ffd2a6",hair:"#14102e",top:"#2b2550",bottom:"#2b2550",shoes:"#14102e",hairStyle:"bald",hat:"ninja",hatColor:"#2b2550",sleeve:1,pants:1,extra:{belt:"#ff3d4f"}},{id:"pirate",name:"C\u01B0\u1EDBp Bi\u1EC3n",emo:"\u{1F3F4}\u200D\u2620\uFE0F",skin:"#e8b48a",hair:"#2a1a14",top:"#ffffff",bottom:"#2b2550",shoes:"#3a2a1c",hairStyle:"short",hat:"tricorn",hatColor:"#1d1648",face:["patch","beard"],beard:"#2a1a14",sleeve:1,pants:.75,extra:{belt:"#ff3d4f",vest:"#c0392b"}},{id:"king",name:"Vua H\u1EC1",emo:"\u{1F451}",skin:"#ffd2a6",hair:"#a86b3c",top:"#8b5cf6",bottom:"#ffc93d",shoes:"#ff3d4f",hairStyle:"short",hat:"crown",face:["curly"],sleeve:1,pants:1,extra:{cape:"#e8344a",belt:"#ffc93d"}},{id:"princess",name:"C\xF4ng Ch\xFAa",emo:"\u{1F478}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff8fc8",bottom:"#ff8fc8",shoes:"#ffffff",hairStyle:"long",hat:"tiara",face:["blush"],sleeve:.3,pants:1,extra:{dress:"#ff8fc8"}},{id:"vampire",name:"B\xE1 T\u01B0\u1EDBc Ma",emo:"\u{1F9DB}",skin:"#e9e4f5",hair:"#1a1a1a",top:"#ffffff",bottom:"#1d1648",shoes:"#1d1648",hairStyle:"slick",face:["fangs"],sleeve:1,pants:1,extra:{cape:"#1d1648",collar:"#e8344a",vest:"#e8344a"}},{id:"santa",name:"\xD4ng Gi\xE0 Noel",emo:"\u{1F385}",skin:"#ffd2a6",hair:"#ffffff",top:"#e8344a",bottom:"#e8344a",shoes:"#1d1648",hairStyle:"short",hat:"santa",face:["beard","blush"],beard:"#ffffff",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#1d1648",belly:"#e8344a"}},{id:"bear",name:"G\u1EA5u B\xF4ng",emo:"\u{1F9F8}",skin:"#ffd2a6",hair:"#c98b52",top:"#c98b52",bottom:"#c98b52",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"bear",hatColor:"#c98b52",sleeve:1,pants:1,gloves:"#c98b52",extra:{belly:"#f2d2a9"}},{id:"cat",name:"M\xE8o M\u1EADp",emo:"\u{1F431}",skin:"#fcd2b0",hair:"#ff9a3c",top:"#ff9a3c",bottom:"#ff9a3c",shoes:"#ffffff",hairStyle:"bald",hat:"hood",hood:"cat",hatColor:"#ff9a3c",sleeve:1,pants:1,gloves:"#ffffff",extra:{belly:"#fff1e0"}},{id:"dino",name:"Kh\u1EE7ng Long",emo:"\u{1F996}",skin:"#ffd2a6",hair:"#2fbf71",top:"#2fbf71",bottom:"#2fbf71",shoes:"#1f8f52",hairStyle:"bald",hat:"hood",hood:"dino",hatColor:"#2fbf71",sleeve:1,pants:1,gloves:"#2fbf71",extra:{belly:"#d9f99d"}},{id:"frog",name:"\u1EBEch \u1ED8p",emo:"\u{1F438}",skin:"#fcd2b0",hair:"#7bd148",top:"#7bd148",bottom:"#7bd148",shoes:"#ffc93d",hairStyle:"bald",hat:"hood",hood:"frog",hatColor:"#7bd148",sleeve:1,pants:1,gloves:"#7bd148",extra:{belly:"#e9ffd0"}},{id:"dog",name:"C\u1EADu V\xE0ng",emo:"\u{1F436}",skin:"#fcd2b0",hair:"#e8b04a",top:"#e8b04a",bottom:"#e8b04a",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"dog",hatColor:"#e8b04a",sleeve:1,pants:1,gloves:"#e8b04a",extra:{belly:"#fff1d6",scarf:"#2f8bff"}},{id:"bride",name:"C\xF4 D\xE2u",emo:"\u{1F470}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#ffffff",bottom:"#ffffff",shoes:"#ffffff",hairStyle:"bun",hat:"veil",sleeve:.3,pants:1,face:["blush"],extra:{dress:"#ffffff"}},{id:"beanie",name:"Anh Ch\xE0ng L\u1EA1nh",emo:"\u{1F9E3}",skin:"#ffd2a6",hair:"#6b4426",top:"#38b2ff",bottom:"#2b2550",shoes:"#ff4d6d",hairStyle:"short",hat:"beanie",hatColor:"#ff4d6d",sleeve:1,pants:1,face:["freckles"],extra:{scarf:"#ffc93d"}}],wl=Object.fromEntries(Hf.map(t=>[t.id,t]));var Vf=Object.fromEntries(Hf.map(t=>[t.id,{name:t.name,emo:t.emo,skin:t.skin,shirt:t.top,pants:t.bottom,shoes:t.shoes,hair:t.hair}])),zw=Object.keys(Vf),Na={down:[10,0],up:[170,0],side:[90,0],diag:[135,0],hip:[40,-105],flex:[90,90],cross:[25,-125],head:[150,-150],mouth:[15,-150],point:[65,-10],wave:[150,25]},Da={down:[4,0],kick:[70,-10],knee:[28,-55],step:[22,0],spread:[35,0]},Ua={stand:{t:"",legs:null},sit:{t:"translate(0px,26px)",legs:[[80,-80],[80,-80]],stool:!0},squat:{t:"translate(0px,40px)",legs:[[110,-150],[110,-150]]},kneel:{t:"translate(0px,34px)",legs:[[0,170],[0,170]]},lie:{t:"translate(72px,58px) rotate(-90deg)"},leanL:{t:"",torso:"rotate(18deg)"},leanR:{t:"",torso:"rotate(-18deg)"},handstand:{t:"translate(0px,-120px) rotate(180deg)"},crawl:{t:"translate(86px,6px) rotate(-90deg)",absArms:[[90,0],[90,0]],absLegs:[[90,0],[90,0]],head:90,tail:100},bow:{t:"",torso:"translateY(16px) scaleY(.84)",headDown:!0},crossleg:{t:"translate(0px,44px)",legs:[[88,-165],[88,-165]]}},Gf={center:0,tiltL:18,tiltR:-18,up:0,down:0},b0=[["scissors","\u2702\uFE0F","K\xE9o"],["comb","\u{1FAAE}","L\u01B0\u1EE3c"],["mic","\u{1F3A4}","Micro"],["phone","\u{1F4F1}","\u0110i\u1EC7n tho\u1EA1i"],["ball","\u26BD","Qu\u1EA3 b\xF3ng"],["racket","\u{1F3F8}","V\u1EE3t"],["rod","\u{1F3A3}","C\u1EA7n c\xE2u"],["pan","\u{1F373}","Ch\u1EA3o"],["broom","\u{1F9F9}","Ch\u1ED5i"],["sword","\u{1F5E1}\uFE0F","Ki\u1EBFm"],["umbrella","\u2602\uFE0F","\xD4"],["book","\u{1F4D6}","S\xE1ch"],["guitar","\u{1F3B8}","\u0110\xE0n"],["violin","\u{1F3BB}","Violin"],["hammer","\u{1F528}","B\xFAa"],["chopsticks","\u{1F962}","\u0110\u0169a"],["bowl","\u{1F35C}","T\xF4"],["wand","\u{1FA84}","\u0110\u0169a ph\xE9p"],["magnifier","\u{1F50D}","K\xEDnh l\xFAp"],["camera","\u{1F4F7}","M\xE1y \u1EA3nh"],["flower","\u{1F339}","Hoa"],["gift","\u{1F381}","Qu\xE0"],["cup","\u2615","C\u1ED1c"],["toothbrush","\u{1FAA5}","B\xE0n ch\u1EA3i"],["money","\u{1F4B5}","Ti\u1EC1n"],["bone","\u{1F9B4}","Kh\xFAc x\u01B0\u01A1ng"],["carrot","\u{1F955}","C\xE0 r\u1ED1t"],["banana","\u{1F34C}","Chu\u1ED1i"],["stethoscope","\u{1FA7A}","\u1ED0ng nghe"],["ruler","\u{1F4CF}","Th\u01B0\u1EDBc"],["balloon","\u{1F388}","B\xF3ng bay"],["extinguisher","\u{1F9EF}","B\xECnh ch\u1EEFa ch\xE1y"],["bottle","\u{1F37C}","B\xECnh s\u1EEFa"],["gamepad","\u{1F3AE}","Tay c\u1EA7m game"],["laptop","\u{1F4BB}","Laptop"],["basket","\u{1F9FA}","Gi\u1ECF"],["ring","\u{1F48D}","Nh\u1EABn"],["cake","\u{1F382}","B\xE1nh kem"],["torch","\u{1F526}","\u0110\xE8n pin"],["towel","\u{1F9FB}","Kh\u0103n gi\u1EA5y"]],v0=b0.map(([t,e,n])=>[t,`${e} ${n}`]),Tl=Object.fromEntries(b0.map(([t,e])=>[t,e])),s2=[{group:"To\xE0n th\xE2n",key:"body",opts:[["stand","\u0110\u1EE9ng"],["sit","Ng\u1ED3i gh\u1EBF"],["squat","Ng\u1ED3i x\u1ED5m"],["kneel","Qu\u1EF3"],["lie","N\u1EB1m"],["leanL","Nghi\xEAng tr\xE1i"],["leanR","Nghi\xEAng ph\u1EA3i"],["handstand","Tr\u1ED3ng c\xE2y chu\u1ED1i"],["crawl","B\xF2 4 ch\xE2n"],["bow","C\xFAi ch\xE0o"],["crossleg","Ng\u1ED3i x\u1EBFp b\u1EB1ng"]]},{group:"\u0110\u1EA7u",key:"head",opts:[["center","Th\u1EB3ng"],["tiltL","Nghi\xEAng tr\xE1i"],["tiltR","Nghi\xEAng ph\u1EA3i"],["up","Ng\u01B0\u1EDBc l\xEAn"],["down","C\xFAi xu\u1ED1ng"]]},{group:"M\u1EB7t",key:"face",opts:[["neutral","\u{1F610}"],["happy","\u{1F604}"],["sad","\u{1F622}"],["angry","\u{1F620}"],["surprised","\u{1F62E}"],["scared","\u{1F631}"],["sleepy","\u{1F634}"],["cheeky","\u{1F61C}"],["love","\u{1F60D}"]]},{group:"Tay tr\xE1i",key:"armL",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Tay ph\u1EA3i",key:"armR",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Ch\xE2n tr\xE1i",key:"legL",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"Ch\xE2n ph\u1EA3i",key:"legR",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"\u0110\u1EA1o c\u1EE5 tay tr\xE1i",key:"propL",toggle:!0,opts:v0},{group:"\u0110\u1EA1o c\u1EE5 tay ph\u1EA3i",key:"propR",toggle:!0,opts:v0},{group:"Ho\xE1 trang",key:"ears",toggle:!0,opts:[["dog","\u{1F436} Tai ch\xF3"],["cat","\u{1F431} Tai m\xE8o"],["bunny","\u{1F430} Tai th\u1ECF"],["mouse","\u{1F42D} Tai chu\u1ED9t"],["horns","\u{1F42E} S\u1EEBng"],["antenna","\u{1F41D} R\xE2u c\xF4n tr\xF9ng"]]},{group:"\u0110u\xF4i",key:"tail",toggle:!0,opts:[["dog","\u{1F415} \u0110u\xF4i ch\xF3"],["cat","\u{1F408} \u0110u\xF4i m\xE8o"],["pig","\u{1F437} \u0110u\xF4i heo"],["dino","\u{1F996} \u0110u\xF4i kh\u1EE7ng long"]]},{group:"Chuy\u1EC3n \u0111\u1ED9ng (b\u1EADt/t\u1EAFt)",key:"loop",toggle:!0,opts:[["walk","\u0110i b\u1ED9"],["run","Ch\u1EA1y"],["dance","Nh\u1EA3y m\xFAa"],["butt","L\u1EAFc m\xF4ng"],["flap","V\u1ED7 c\xE1nh"],["swim","B\u01A1i"],["shiver","Run r\u1EA9y"],["clap","V\u1ED7 tay"],["punch","\u0110\u1EA5m"],["row","Ch\xE8o"],["nod","G\u1EADt g\xF9"],["shake","L\u1EAFc \u0111\u1EA7u"]]},{group:"Hi\u1EC7u \u1EE9ng",key:"fx",oneshot:!0,opts:[["jump","B\u1EADt nh\u1EA3y"],["spin","Xoay v\xF2ng"],["fall","T\xE9 ng\xE3"],["bounce","Nh\xFAn nh\u1EA3y"]]},{group:"Xoay ng\u01B0\u1EDDi",key:"turn",opts:[["front","\u2B06\uFE0F Nh\xECn kh\xE1n gi\u1EA3"],["l45","\u2196\uFE0F Xoay ch\xE9o tr\xE1i"],["r45","\u2197\uFE0F Xoay ch\xE9o ph\u1EA3i"],["left","\u2B05\uFE0F Quay tr\xE1i"],["right","\u27A1\uFE0F Quay ph\u1EA3i"],["back","\u2B07\uFE0F Quay l\u01B0ng"]]}],Al=Object.fromEntries(s2.find(t=>t.key==="face").opts),di={hip:[150,218],neck:[150,146],shL:[124,160],shR:[176,160],elL:[124,192],elR:[176,192],hipL:[138,222],hipR:[162,222],knL:[138,254],knR:[162,254]},Rn=t=>`${t[0]}px ${t[1]}px`;function r2(t,e,n=!1){let i=e==="up"?-4:e==="down"?4:0,s=99+i,r=(f,u,p,y=3.6)=>`<ellipse cx="${f}" cy="${s}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${f+u}" cy="${s+p}" r="${y}" class="dk"/><circle cx="${f+u+1.2}" cy="${s+p-1.4}" r="1.1" fill="#fff"/>`,a;switch(t){case"happy":a=`<path d="M128 ${s+2} q9 -11 18 0 M154 ${s+2} q9 -11 18 0" class="ln"/>`;break;case"sleepy":a=`<path d="M128 ${s} q9 6 18 0 M154 ${s} q9 6 18 0" class="ln"/>`;break;case"love":a=`<path d="M137 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`;break;case"cheeky":a=`<path d="M128 ${s} q9 -6 18 0" class="ln"/>${r(163,-2,1)}`;break;case"surprised":a=r(137,0,0,2.4)+r(163,0,0,2.4);break;case"scared":a=r(137,2,2,2.6)+r(163,-2,2,2.6)+`<path d="M180 ${s-8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`;break;case"sad":a=r(137,1,3)+r(163,-1,3);break;case"angry":a=r(137,2,1)+r(163,-2,1);break;default:a=r(137,3,2)+r(163,-3,-2)}let o={angry:`<path d="M127 ${s-15} L146 ${s-9} M173 ${s-15} L154 ${s-9}" class="ln" style="stroke-width:4.5"/>`,sad:`<path d="M128 ${s-10} L145 ${s-15} M172 ${s-10} L155 ${s-15}" class="ln"/>`,scared:`<path d="M127 ${s-14} q5 -4 9 0 q5 4 9 0 M155 ${s-14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,surprised:`<path d="M128 ${s-17} q9 -6 18 0 M154 ${s-17} q9 -6 18 0" class="ln"/>`}[t]||"",l=118+i,c={happy:`<path d="M133 ${l-2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${l-1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${l+8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,sad:`<path d="M139 ${l+5} q11 -10 22 0" class="ln"/><path d="M134 ${s+8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,angry:`<rect x="138" y="${l-3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${l-3} v9 M150 ${l-3} v9 M156 ${l-3} v9" stroke="#1d1648" stroke-width="1.6"/>`,surprised:`<ellipse cx="150" cy="${l+2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,scared:`<path d="M136 ${l+2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,sleepy:`<ellipse cx="150" cy="${l+1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${l+2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78+i}" class="zz">z</text><text x="188" y="${64+i}" class="zz">Z</text>`,cheeky:`<path d="M138 ${l-1} q12 9 24 0" class="ln"/><path d="M147 ${l+2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,love:`<path d="M138 ${l-2} q12 12 24 0" class="ln"/>`,neutral:`<path d="M138 ${l-1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${l}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`}[t]||"",h=`<ellipse cx="150" cy="${110+i}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;return`${`<circle cx="125" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(t)?.75:.4}"/><circle cx="175" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(t)?.75:.4}"/>`}${n?"":`<g class="pp-eyes">${a}</g>${o}`}${h}${c}`}function a2(t,e){switch(t){case"tron":return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${e.hair}" stroke="#1d1648" stroke-width="2.5"/>`};case"ninja":return{hairFront:`<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${e.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,mask:`<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${e.hair}" class="ol"/>`};case"scientist":return{hairBack:`<circle cx="118" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${e.hair}" class="ol"/>`,hairFront:'<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>',torso:'<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>'};case"boss":return{hairFront:`<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${e.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,torso:'<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>',noEyes:!0};case"idol":return{hairBack:`<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${e.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,torso:'<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>'};case"hero":return{back:'<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>',hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${e.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,torso:'<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>'};case"astro":return{hairFront:`<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${e.hair}" class="ol"/>`,helmet:'<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>',torso:'<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>'};case"nonla":return{hairBack:`<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${e.hair}" class="ol"/>`,hat:'<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>',torso:'<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>'};case"bear":return{hairBack:`<circle cx="120" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,under:'<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>',torso:'<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>'}}return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/>`}}var Sl="#c98b52",o2={dog:{front:`<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${Sl}" class="ol"/>`},cat:{back:`<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${Sl}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>`},bunny:{back:'<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>'},mouse:{back:'<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>'},horns:{back:'<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>'},antenna:{back:'<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>'}},_0={dog:`<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${Sl}" class="ol"/>`,cat:`<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${Sl}" stroke-width="6" stroke-linecap="round"/>`,pig:'<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>',dino:'<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>'};function M0(t){t.innerHTML=`
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${Rn(di.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${Rn(di.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${e("L")}${e("R")}
      <g class="pp-torso j" style="transform-origin:${Rn(di.hip)}"><g class="in pp-torsoIn" style="transform-origin:${Rn(di.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${n("L")}${n("R")}
        <g class="pp-head j" style="transform-origin:${Rn(di.neck)}"><g class="in pp-headIn" style="transform-origin:${Rn(di.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
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
  </svg>`;function e(h){let d=di["hip"+h],f=di["kn"+h];return`<g class="pp-leg${h} j" style="transform-origin:${Rn(d)}"><g class="in pp-leg${h}In" style="transform-origin:${Rn(d)}">
      <line class="pp-pants" x1="${d[0]}" y1="${d[1]}" x2="${f[0]}" y2="${f[1]}"/>
      <g class="pp-shin${h} j" style="transform-origin:${Rn(f)}"><g class="in pp-shin${h}In" style="transform-origin:${Rn(f)}">
        <line class="pp-pants" x1="${f[0]}" y1="${f[1]}" x2="${f[0]}" y2="${f[1]+30}"/>
        <ellipse class="pp-shoe ol" cx="${f[0]+(h==="L"?-8:8)}" cy="${f[1]+36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`}function n(h){let d=di["sh"+h],f=di["el"+h];return`<g class="pp-arm${h} j" style="transform-origin:${Rn(d)}"><g class="in pp-arm${h}In" style="transform-origin:${Rn(d)}">
      <line class="pp-sleeve" x1="${d[0]}" y1="${d[1]}" x2="${f[0]}" y2="${f[1]}"/>
      <g class="pp-fore${h} j" style="transform-origin:${Rn(f)}"><g class="in pp-fore${h}In" style="transform-origin:${Rn(f)}">
        <line class="pp-forearm" x1="${f[0]}" y1="${f[1]}" x2="${f[0]}" y2="${f[1]+26}"/>
        <circle class="pp-hand pp-skin ol" cx="${f[0]}" cy="${f[1]+31}" r="10.5"/>
        <text class="pp-prop pp-prop${h}" x="${f[0]}" y="${f[1]+40}"></text>
        <path d="M${f[0]+(h==="L"?7:-7)} ${f[1]+26} q${h==="L"?7:-7} -2 ${h==="L"?6:-6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`}let i=t.querySelector("svg"),s=h=>i.querySelector("."+h),r=(h,d)=>{s(h).style.transform=d},a=null,o=null;function l(h){let d=Vf[h?.skin]?h.skin:"tron",f=Vf[d];i.style.setProperty("--pp-skin",f.skin),i.style.setProperty("--pp-shirt",f.shirt),i.style.setProperty("--pp-pants",f.pants),i.style.setProperty("--pp-shoes",f.shoes);let u=a2(d,f),p=h?.head||"";s("pp-photo").setAttribute("href",p),i.classList.toggle("has-photo",!!p),s("pp-back").innerHTML=u.back||"",s("pp-hairBack").innerHTML=p?"":u.hairBack||"",s("pp-hairFront").innerHTML=(p?"":u.hairFront||"")+(u.hat||""),s("pp-mask").innerHTML=p?"":u.mask||"",s("pp-under").innerHTML=p?"":u.under||"",s("pp-helmet").innerHTML=u.helmet||"",s("pp-torsoAcc").innerHTML=u.torso||"",i.dataset.skin=d,o={...h,noEyes:u.noEyes}}function c(h){let d=Ua[h.body]||Ua.stand;r("pp-root",d.t||"none"),r("pp-torso",d.torso||"none"),s("pp-stool").classList.toggle("on",!!d.stool);for(let y of["L","R"]){let g=y==="L"?1:-1,m=y==="L"?0:1,b=!h["arm"+y]||h["arm"+y]==="down";if(d.absArms&&b)r("pp-arm"+y,`rotate(${d.absArms[m][0]}deg)`),r("pp-fore"+y,`rotate(${d.absArms[m][1]}deg)`);else{let v=Na[h["arm"+y]]||Na.down;r("pp-arm"+y,`rotate(${v[0]*g}deg)`),r("pp-fore"+y,`rotate(${v[1]*g}deg)`)}let x=!h["leg"+y]||h["leg"+y]==="down";if(d.absLegs&&x)r("pp-leg"+y,`rotate(${d.absLegs[m][0]}deg)`),r("pp-shin"+y,`rotate(${d.absLegs[m][1]}deg)`);else{let v=d.legs?d.legs[m]:Da[h["leg"+y]]||Da.down;r("pp-leg"+y,`rotate(${v[0]*g}deg)`),r("pp-shin"+y,`rotate(${v[1]*g}deg)`)}i.classList.toggle("wave"+y,h["arm"+y]==="wave"),s("pp-prop"+y).textContent=Tl[h["prop"+y]]||""}r("pp-head",`rotate(${(Gf[h.head]??0)+(d.head||0)}deg)`);let f=i.classList.contains("has-photo"),u=d.headDown&&(!h.head||h.head==="center")?"down":h.head;s("pp-face").innerHTML=f?"":r2(h.face,u,o?.noEyes);let p=o2[h.ears]||{};s("pp-earsBack").innerHTML=p.back||"",s("pp-earsFront").innerHTML=p.front||"",s("pp-tail").innerHTML=_0[h.tail]?`<g class="pp-tailIn">${_0[h.tail]}</g>`:"",r("pp-tail",d.tail?`rotate(${d.tail}deg)`:"none"),s("pp-emote").textContent=f&&h.face&&h.face!=="neutral"&&Al[h.face]||"",i.dataset.loop=h.loop||"",h.fx&&h.fx.seq!==a&&(a=h.fx.seq,Date.now()-(h.fx.at||0)<4e3&&(i.classList.remove("fx-jump","fx-spin","fx-fall","fx-bounce"),i.getBoundingClientRect(),i.classList.add("fx-"+h.fx.name),clearTimeout(i._fxT),i._fxT=setTimeout(()=>i.classList.remove("fx-"+h.fx.name),1600)))}return{setPose:c,setLook:l,el:i}}function l2(){let t=document.createElement("canvas");t.width=1024,t.height=512;let e=t.getContext("2d"),n=12,i=t.width/n,s=["#d9944f","#cf8846","#e0a05a","#c98240","#d68f4c"];for(let a=0;a<n;a++){e.fillStyle=s[a*7%s.length],e.fillRect(a*i,0,i,t.height),e.strokeStyle="rgba(120,60,20,.18)",e.lineWidth=2;for(let l=0;l<7;l++){e.beginPath();let c=a*i+8+Math.random()*(i-16);e.moveTo(c,0);for(let h=0;h<=t.height;h+=32)e.lineTo(c+Math.sin(h/60+l)*4,h);e.stroke()}e.fillStyle="rgba(70,30,10,.55)",e.fillRect(a*i,0,3,t.height);let o=a*173%t.height;e.fillRect(a*i,o,i,3)}let r=new hi(t);return r.colorSpace=Jt,r.wrapS=r.wrapT=ba,r.anisotropy=4,r}function c2(){let t=document.createElement("canvas");t.width=512,t.height=512;let e=t.getContext("2d"),n=e.createRadialGradient(256,200,40,256,256,380);n.addColorStop(0,"#6d48d6"),n.addColorStop(.55,"#3f2196"),n.addColorStop(1,"#1d0f52"),e.fillStyle=n,e.fillRect(0,0,512,512);for(let s=0;s<90;s++)e.fillStyle=Math.random()<.25?"#ffe9a8":"#ffffff",e.globalAlpha=.4+Math.random()*.6,e.beginPath(),e.arc(Math.random()*512,Math.random()*420,Math.random()*2+.6,0,Math.PI*2),e.fill();e.globalAlpha=1;let i=new hi(t);return i.colorSpace=Jt,i}function h2(){let t=document.createElement("canvas");t.width=t.height=64;let e=t.getContext("2d"),n=e.createRadialGradient(32,32,2,32,32,32);return n.addColorStop(0,"rgba(255,240,190,1)"),n.addColorStop(.3,"rgba(255,210,120,.6)"),n.addColorStop(1,"rgba(255,200,100,0)"),e.fillStyle=n,e.fillRect(0,0,64,64),new hi(t)}function w0(t,e,n){let i=new Ri(t,e,n*10,1),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=(s.getX(r)+t/2)/t;s.setZ(r,Math.sin(a*n*Math.PI*2)*.16)}return i.computeVertexNormals(),i}function f2(t=.32,e=.14){let n=new fi;for(let i=0;i<10;i++){let s=i/10*Math.PI*2-Math.PI/2,r=i%2?e:t;n[i?"lineTo":"moveTo"](Math.cos(s)*r,-Math.sin(s)*r)}return n}function S0(t){let e={hangs:[],crowd:[],beams:[],bulbs:[]};t.background=new nt(1444910);let n=l2();n.repeat.set(1.6,1.2);let i=new et(new Ri(14,7.5),new Pn({map:n,roughness:.55}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-.4),i.receiveShadow=!0,t.add(i);let s=new et(new Qt(14,.55,.3),new Pn({color:8011031,roughness:.6}));s.position.set(0,-.28,3.35),t.add(s);let r=new et(new Qt(14,.08,.34),new Pn({color:16763197,roughness:.3,metalness:.4}));r.position.set(0,0,3.36),t.add(r);let a=new et(new Ri(40,20),new Pn({color:853792}));a.rotation.x=-Math.PI/2,a.position.set(0,-.55,10),t.add(a);let o=new et(new Ri(16,10),new Pn({map:c2(),roughness:.9,emissive:1707322,emissiveIntensity:.5}));o.position.set(0,4.2,-4.1),o.receiveShadow=!0,t.add(o);let l=(v,C,S,E,k)=>{let J=new tt;J.position.set(C,S+k,E);let _=new et(new bt(.012,.012,k,4),new qt({color:15658751,transparent:!0,opacity:.6}));_.position.y=-k/2,J.add(_),v.position.y=-k,J.add(v),J.userData.ph=Math.random()*6,t.add(J),e.hangs.push(J)},c=new fi;c.absarc(0,0,.55,0,Math.PI*2,!1);let h=new fi;h.absarc(.24,.16,.48,0,Math.PI*2,!0),c.holes.push(h);let d=new et(new ji(c,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03}),new Pn({color:16766826,emissive:16759101,emissiveIntensity:.6,roughness:.4}));l(d,-3.4,3.4,-3.3,1.6);let f=new Pn({color:16769658,emissive:16763197,emissiveIntensity:.5,roughness:.4});for(let[v,C,S,E]of[[-1.8,4.1,.9,.8],[2.2,3.9,1.2,1],[3.6,4.3,.7,.7],[-4.6,4.4,.6,.6]]){let k=new et(new ji(f2(),{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),f);k.scale.setScalar(E),l(k,v,C,-3.4,S)}let u=new Pn({color:11736364,roughness:.75,side:$t});for(let v of[-1,1]){let C=new et(w0(3.2,8,7),u);C.position.set(v*5.6,4,.6),C.rotation.y=v*-.25,C.castShadow=!0,t.add(C);let S=new et(new Mt(.42,.07,10,24),new Pn({color:16763197,roughness:.3,metalness:.5}));S.position.set(v*4.35,1.9,.75),S.rotation.set(Math.PI/2,0,v*.3),S.scale.set(1,1,.6),t.add(S)}let p=new et(w0(15,1.5,22),u);p.position.set(0,5.25,1.6),t.add(p);let y=new et(new Qt(15,.1,.12),new Pn({color:16763197,emissive:9067008,emissiveIntensity:.3,metalness:.4,roughness:.3}));y.position.set(0,4.5,1.7),t.add(y);let g=h2();for(let v=0;v<9;v++){let C=-4.4+v*1.1,S=new et(new ht(.09,12,8),new qt({color:16774064}));S.position.set(C,.08,3.1),t.add(S);let E=new Ps(new Ki({map:g,transparent:!0,blending:_r,depthWrite:!1}));E.scale.set(.9,.9,1),E.position.copy(S.position),t.add(E),e.bulbs.push(E)}let m=new Ht;m.position.set(0,1.2,0),t.add(m);for(let v of[-1,1]){let C=new ml(16773583,1.1,0,.36,.55,0);C.position.set(v*3.6,7.2,3.2),C.target=m,v<0&&(C.castShadow=!0,C.shadow.mapSize.set(1024,1024),C.shadow.bias=-4e-4),t.add(C);let S=8.2,E=new et(new en(1.5,S,32,1,!0),new qt({color:16773583,transparent:!0,opacity:.075,blending:_r,depthWrite:!1,side:$t}));E.geometry.translate(0,-S/2,0),E.position.copy(C.position),E.lookAt(m.position),E.rotateX(-Math.PI/2),t.add(E),e.beams.push(E)}let b=new et(new Er(1.7,40),new qt({map:g,transparent:!0,opacity:.55,blending:_r,depthWrite:!1}));b.rotation.x=-Math.PI/2,b.position.set(0,.012,.1),t.add(b);let x=new Pn({color:1313326,roughness:1});for(let v=0;v<11;v++){let C=new tt,S=.85+Math.random()*.35,E=new et(new ki(.42,.5,4,12),x);E.position.y=.2,C.add(E);let k=new et(new ht(.34,16,12),x);k.position.y=1,C.add(k),C.scale.setScalar(S),C.position.set(-5.5+v*1.1+(Math.random()-.5)*.3,-1+v%2*.12,4.4+v%2*.35),C.userData.base=C.position.y,C.userData.ph=Math.random()*6,t.add(C),e.crowd.push(C)}return e.cheerUntil=0,e.update=(v,C)=>{for(let E of e.hangs)E.rotation.z=Math.sin(v*1.1+E.userData.ph)*.08;e.beams.forEach((E,k)=>{E.material.opacity=.065+Math.sin(v*1.3+k)*.015}),e.bulbs.forEach((E,k)=>{E.material.opacity=.75+Math.sin(v*3+k*1.7)*.25});let S=C<e.cheerUntil;for(let E of e.crowd){let k=S?Math.abs(Math.sin(v*9+E.userData.ph))*.35:Math.sin(v*1.4+E.userData.ph)*.02;E.position.y=E.userData.base+k}},e}var Dn=Math.PI/180,T0=1/112,d2=1906248,kr;function u2(){return kr||(kr=new rl(new Uint8Array([140,205,240]),3,1,vl),kr.minFilter=kr.magFilter=un,kr.needsUpdate=!0),kr}var Ds=(t,e={})=>new fl({color:t,gradientMap:u2(),...e}),I0=t=>new $n({uniforms:{t:{value:t},color:{value:new nt(d2)}},vertexShader:"uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }",side:pn}),Xf=I0(.026),L0=I0(.016),A0=new Set([Xf,L0]);function me(t,e,{outline:n=!0,thin:i=!1,mat:s}={}){let r=new tt,a=new et(t,s||Ds(e));return a.castShadow=!0,r.add(a),n&&r.add(new et(t,i?L0:Xf)),r.userData.mesh=a,r}var we=(t,e,n,i)=>(t.position.set(e,n,i),t),At=(t,e,n,i)=>(t.rotation.set(e,n,i),t),Et=(t,e,n,i)=>(t.scale.set(e,n,i),t),El=(t,e=32,n=0,i=Math.PI*2)=>{let s=t[0][1]>t[t.length-1][1]?[...t].reverse():t;return new Ca(s.map(([r,a])=>new _e(r,a)),e,n,i)},Wf=new Map;function p2(t,e){if(Wf.has(t))return Wf.get(t);let n=document.createElement("canvas");n.width=n.height=512;let i=new hi(n);i.colorSpace=Jt;let s=new Image;return s.onload=()=>{n.getContext("2d").drawImage(s,0,0,512,512),i.needsUpdate=!0},s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${e}</svg>`),Wf.set(t,i),i}var $f=new Map;function E0(t){if($f.has(t))return $f.get(t);let e=document.createElement("canvas");e.width=e.height=128;let n=e.getContext("2d");n.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(t,64,72);let i=new hi(e);return i.colorSpace=Jt,$f.set(t,i),i}var Ke=.62,Yf=1,Vt={lon:.34,lat:.06,r:.155},C0=t=>50+t/Yf*50,P0=t=>50-t/Yf*50;function m2(t,{eyes3D:e=!0,wink:n=!1,extras:i=[],noMouth:s=!1}={}){let r=C0(-Vt.lon),a=C0(Vt.lon),o=P0(Vt.lat),l='fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"',c="";if((i.includes("blush")||["happy","love","cheeky"].includes(t))&&(c+=`<ellipse cx="${r-4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${a+4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`),i.includes("freckles"))for(let[v,C]of[[-6,12],[-2,15],[-9,15],[6,12],[2,15],[9,15]])c+=`<circle cx="${(v<0?r:a)+v}" cy="${o+C}" r=".9" fill="#b0643a"/>`;let d=v=>`<path d="M${v-8} ${o+3} Q${v} ${o-8} ${v+8} ${o+3}" ${l} stroke-width="3.6"/>`,f=v=>`<path d="M${v-8} ${o} Q${v} ${o+6} ${v+8} ${o}" ${l} stroke-width="3.4"/>`,u=v=>`<path d="M${v} ${o+7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;e?n&&(c+=d(r)):t==="love"?c+=u(r)+u(a):t==="sleepy"?c+=f(r)+f(a):c+=d(r)+d(a);let p=o-17,y=v=>`<path d="${v}" ${l} stroke-width="3.2"/>`,g={angry:`M${r-9} ${p+1} L${r+7} ${p+7} M${a+9} ${p+1} L${a-7} ${p+7}`,sad:`M${r-8} ${p+6} L${r+7} ${p} M${a+8} ${p+6} L${a-7} ${p}`,scared:`M${r-8} ${p+2} Q${r} ${p-5} ${r+7} ${p-1} M${a+8} ${p+2} Q${a} ${p-5} ${a-7} ${p-1}`,surprised:`M${r-8} ${p-2} Q${r} ${p-8} ${r+8} ${p-2} M${a-8} ${p-2} Q${a} ${p-8} ${a+8} ${p-2}`,cheeky:`M${r-8} ${p+2} Q${r} ${p-2} ${r+8} ${p+3} M${a-8} ${p-3} Q${a} ${p-8} ${a+8} ${p-2}`,neutral:`M${r-7} ${p+1} Q${r} ${p-3} ${r+7} ${p+2} M${a-7} ${p-1} Q${a} ${p-5} ${a+7} ${p}`};c+=y(g[t]||g.neutral);let m=P0(-.36),b=v=>`<rect x="45.6" y="${v}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${v}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`,x={neutral:`<path d="M41 ${m-2} Q50 ${m+4} 59 ${m-3}" ${l} stroke-width="2.8"/>${b(m)}`,happy:`<path d="M37 ${m-4} Q50 ${m+16} 63 ${m-4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${b(m-3.6)}<path d="M44 ${m+6} Q50 ${m+2} 56 ${m+6} Q50 ${m+10} 44 ${m+6}Z" fill="#ff7b93"/>`,sad:`<path d="M41 ${m+4} Q50 ${m-4} 59 ${m+4}" ${l} stroke-width="2.8"/><path d="M${r-3} ${o+9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,angry:`<path d="M40 ${m-2} H60 Q61 ${m+7} 50 ${m+7} Q39 ${m+7} 40 ${m-2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${m+2.5} H59.5 M45 ${m-2} v9 M50 ${m-2} v9 M55 ${m-2} v9" stroke="#1d1648" stroke-width="1.2"/>`,surprised:`<ellipse cx="50" cy="${m+2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,scared:`<path d="M38 ${m+2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${l} stroke-width="2.4"/><path d="M${a+12} ${o-10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,sleepy:`<ellipse cx="51" cy="${m+1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${m+2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${o-16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${o-24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,cheeky:`<path d="M40 ${m-2} Q50 ${m+7} 60 ${m-3}" ${l} stroke-width="2.8"/><path d="M50 ${m+2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,love:`<path d="M40 ${m-3} Q50 ${m+9} 60 ${m-3}" ${l} stroke-width="2.8"/>`};return s||(c+=x[t]||x.neutral,i.includes("fangs")&&(c+=`<path d="M44 ${m+1} l1.6 4 l1.6 -4 M53 ${m+1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`)),c}var R0=(t,e)=>new ht(t,40,28,Math.PI/2-e,e*2,Math.PI/2-e,e*2),Cl=(t,e,n=Ke)=>new H(n*Math.sin(t)*Math.cos(e),n*Math.sin(e),n*Math.cos(t)*Math.cos(e)),g2={point:[-75,0],mouth:[-30,-100],cross:[-45,-60],head:[-15,-40],hip:[10,0]},y2={point:[20,0],mouth:[10,25],cross:[16,-70],wave:[128,22]},k0=.8,x2={sit:{y:.6,legs:[[-88,88,6],[-88,88,6]]},squat:{y:.46,legs:[[-115,135,26],[-115,135,26]]},kneel:{y:.5,legs:[[0,95,4],[0,95,4]]},crossleg:{y:.34,legs:[[-80,0,52,-125],[-80,0,52,-125]]},lie:{x:.45,y:.5},crawl:{x:0,y:.54},handstand:{y:2.12}},v2={front:0,l45:-Math.PI/4,r45:Math.PI/4,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},qf=class extends Cn{constructor(e,n,i){super(),this.c=e,this.a=n,this.b=i}getPoint(e,n=new H){return this.c.getPoint(this.a+(this.b-this.a)*e,n)}};function Zf(t,e={}){let n;try{n=new nl({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(T){return console.warn("[puppet3d] WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng, d\xF9ng b\u1EA3n 2D",T),M0(t)}t.innerHTML="";let i=n.domElement;i.className="pp pp3d",i.setAttribute("role","img"),i.setAttribute("aria-label","Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u"),t.appendChild(i),n.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),n.outputColorSpace=Jt;let s=new il,r=new dn(30,1,.1,100),a=e.stage?{y:2,z:8.8,ly:1.5,fov:34}:{y:1.75,z:7.4,ly:1.38,fov:30};r.fov=a.fov,r.position.set(0,a.y,a.z),r.lookAt(0,a.ly,0),s.add(new ul(16777215,14271231,e.stage?.6:1.3)),s.add(new yl(16777215,e.stage?.15:.5));let o=new gl(16777215,e.stage?.8:1.9);o.position.set(3,6,6),s.add(o);let l=e.stage?S0(s):null;l&&(n.shadowMap.enabled=!0,n.shadowMap.type=Cf);let c=new et(new Er(.8,32),new qt({color:1906248,transparent:!0,opacity:l?.12:.18,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.01,s.add(c);let h=new tt;h.add(we(me(new bt(.5,.5,.13,28),16747039),0,.42,0));for(let[T,L]of[[-.32,-.22],[.32,-.22],[-.32,.22],[.32,.22]])h.add(we(me(new bt(.05,.05,.42,8),1906248,{outline:!1}),T,.21,L));h.position.z=-.2,s.add(h);let d=new tt;s.add(d);let f=new tt;f.rotation.order="YXZ",d.add(f);let u=new tt;f.add(u);let p=new tt;p.rotation.order="YXZ",p.position.y=.12,u.add(p);let y=new tt;u.add(y);let g=new tt;p.add(g);let m=new tt;m.position.set(0,.62,-.28),p.add(m);let b=new tt;b.rotation.order="YXZ",b.position.y=.66,p.add(b);let x=new tt;x.rotation.order="YXZ",b.add(x);let v=new tt;v.position.y=Ke*.9,x.add(v);let C=me(new ht(Ke,48,36),16777215);Et(C,1.06,.95,1),v.add(C);let S=new tt;S.scale.set(1.06,.95,1),v.add(S);let E=new tt;v.add(E);for(let T of[-1,1]){let L=me(new ht(.13,16,12),16777215);Et(L,.55,.9,.7),E.add(we(L,T*Ke*1.03,-.04,0))}let k=me(new ht(.085,18,14),16777215,{thin:!0});Et(k,1.1,.9,.9);let J=Cl(0,-.14,Ke*.99);S.add(we(k,J.x,J.y,J.z));let _=new qt({transparent:!0,depthWrite:!1}),w=new et(R0(Ke+.006,Yf),_);w.renderOrder=1,S.add(w);let q=new qt({transparent:!0,depthWrite:!1}),z=new et(R0(Ke+.035,1.12),q);z.visible=!1,z.renderOrder=2,S.add(z);let P=[];for(let T of[-1,1]){let L=Cl(T*Vt.lon,Vt.lat,Ke*.93),$=new tt;$.position.copy(L),$.lookAt(L.clone().multiplyScalar(3)),S.add($);let O=new tt;O.scale.set(1,1.08,.62),$.add(O);let B=me(new ht(Vt.r,28,20),16777215,{thin:!0});O.add(B);let N=new et(new ht(Vt.r*.44,18,14),new qt({color:1906248}));N.scale.z=.5,O.add(N);let ie=new et(new ht(Vt.r*.13,10,8),new qt({color:16777215}));O.add(ie);let Y=new tt;O.add(Y);let ve=me(new ht(Vt.r*1.08,28,14,0,Math.PI*2,0,Math.PI/2),16777215,{thin:!0});Y.add(ve),P.push({g:$,inner:O,white:B,pupil:N,shine:ie,lidPivot:Y,lid:ve,sx:T,px:0,py:0,wx:0,wy:0})}let D=new tt;{let T=Cl(0,-.36,Ke*.985);D.position.copy(T),D.lookAt(T.clone().multiplyScalar(3));let L=me(new ht(.13,24,16),5903396,{thin:!0});L.scale.set(1.25,1,.35),D.add(L);let $=new et(new ht(.08,16,12),new qt({color:16743315}));$.scale.set(1.2,.6,.3),$.position.set(0,-.06,.03),D.add($);let O=new et(new Qt(.12,.045,.02),new qt({color:16777215}));O.position.set(0,.095,.045),D.add(O),D.userData.hole=L,D.visible=!1,S.add(D)}let U=!1,Z=0,V=new tt;S.add(V);let xe=new tt;v.add(xe);let pe=new Ps(new Ki({transparent:!0,depthTest:!1,depthWrite:!1}));pe.scale.set(.5,.5,1),pe.position.set(.66,Ke+.5,.3),pe.visible=!1,v.add(pe);let G=El([[0,.72],[.18,.71],[.3,.64],[.38,.5],[.43,.3],[.455,.12],[.46,-.02]],36),se=me(G,16777215);p.add(se);let Ue=El([[.462,.14],[.47,0],[.45,-.12],[.38,-.2],[.22,-.25],[0,-.26]],36),ne=me(Ue,16777215);u.add(ne);let he=me(new bt(.13,.15,.16,16),16777215,{thin:!0});we(he,0,.72,0),p.add(he);let ye={},Te=.32,qe=.3,We=.3,He=.28;for(let T of["L","R"]){let L=T==="L"?-1:1,$=new tt;$.rotation.order="ZXY",$.position.set(L*.36,.5,0),p.add($);let O=new tt;O.rotation.order="ZXY",O.position.y=-Te,$.add(O);let B=new tt;B.position.y=-qe,O.add(B);let N=new tt;N.position.y=-.1,B.add(N);let ie=me(new ht(.135,20,16),16777215,{thin:!0});Et(ie,1,1.1,.85),N.add(ie);let Y=me(new ki(.045,.08,4,10),16777215,{thin:!0});we(Y,-L*.12,.04,.03),Y.rotation.z=-L*.8,N.add(Y);let ve=me(new Mt(.1,.035,8,18),16777215,{thin:!0});ve.rotation.x=Math.PI/2,ve.position.y=.08,N.add(ve);let $e=new Ps(new Ki({transparent:!0,depthWrite:!1}));$e.scale.set(.56,.56,1),$e.position.set(0,-.12,.2),$e.visible=!1,N.add($e),ye["arm"+T]=$,ye["fore"+T]=O,ye["wrist"+T]=B,ye["prop"+T]=$e,ye["hand"+T]={palm:ie,thumb:Y,cuff:ve}}for(let T of["L","R"]){let L=T==="L"?-1:1,$=new tt;$.rotation.order="ZXY",$.position.set(L*.2,-.08,0),u.add($);let O=new tt;O.rotation.order="ZXY",O.position.y=-We,$.add(O);let B=new tt;B.position.y=-He,O.add(B);let N=me(new ht(.2,22,16),16777215);Et(N,.95,.62,1.35),we(N,L*.02,-.08,.08),B.add(N);let ie=me(new bt(.17,.19,.05,20),16777215,{thin:!0});Et(ie,1,1,1.4),we(ie,L*.02,-.18,.09),B.add(ie),ye["leg"+T]=$,ye["shin"+T]=O,ye["ankle"+T]=B,ye["shoe"+T]=N,ye["sole"+T]=ie}let Ge=new tt;Ge.position.set(0,.02,-.4),u.add(Ge);let re={},I=(T,L)=>{let $=Ds(16777215),O=new et(new Is(new Rs(new H,new H(0,-.1,0),new H(0,-.2,0)),4,L,8),$);O.castShadow=!0;let B=new et(O.geometry,Xf);d.add(O,B),re[T]={m:O,o:B,r:L,mat:$,len:1}};for(let T of["L","R"])I("arm"+T,.082),I("sleeve"+T,.118),I("leg"+T,.105),I("pant"+T,.14);let le=wl.tron,de={skin:"tron",head:""},ge="",Se=!1,Fe=[],Ee=(T,L)=>T.userData.mesh.material.color.set(L);function R(T){let L={skin:wl[T?.skin]?T.skin:"tron",head:T?.head||""},$=L.skin+"|"+L.head;if($===ge)return;ge=$,de=L,le=wl[de.skin];let O=le.extra||{};for(let B of[C,k,he,...E.children])Ee(B,le.skin);for(let B of P)Ee(B.lid,le.skin);Ee(se,O.aodai||le.top),Ee(ne,O.dress||le.bottom);for(let B of["L","R"]){let N=le.gloves||le.skin;Ee(ye["hand"+B].palm,N),Ee(ye["hand"+B].thumb,N),Ee(ye["hand"+B].cuff,le.gloves?le.gloves:le.sleeve>=.95?O.coat||le.top:le.skin),ye["hand"+B].cuff.visible=!!le.gloves||le.sleeve>=.95,Ee(ye["shoe"+B],le.shoes),Ee(ye["sole"+B],"#ffffff"),re["arm"+B].mat.color.set(le.gloves&&le.sleeve>=.95?O.coat||le.top:le.arms||le.skin),re["sleeve"+B].mat.color.set(O.coat||O.aodai||le.top),re["sleeve"+B].len=Math.max(.12,le.sleeve??.3),re["leg"+B].mat.color.set(le.legs||le.skin),re["pant"+B].mat.color.set((O.aodai,le.bottom)),re["pant"+B].len=O.dress?.001:Math.max(.12,le.pants??1)}Ne(),de.head?M(de.head):z.visible=!1,Me="",Ye()}function M(T){let L=new Image;/^https?:/.test(T)&&(L.crossOrigin="anonymous"),L.onload=()=>{try{let $=document.createElement("canvas");$.width=$.height=256;let O=$.getContext("2d");O.beginPath(),O.arc(128,128,124,0,Math.PI*2),O.clip();let B=Math.min(L.width,L.height);O.drawImage(L,(L.width-B)/2,(L.height-B)/2,B,B,0,0,256,256);let N=new hi($);N.colorSpace=Jt,q.map?.dispose(),q.map=N,q.needsUpdate=!0,z.visible=!0,Me="",Ye()}catch{z.visible=!1}},L.onerror=()=>{z.visible=!1},L.src=T}function X(T){for(;T.children.length;)T.children.pop().traverse($=>{$.isMesh&&!A0.has($.material)&&($.geometry.dispose(),$.material.dispose())})}let K=(T,L,$={})=>me(new ht(T,24,18),L,$);function oe(T,L=1.15,$=-.3,O=1.07,B=2.1){let N=new tt;return N.add(At(me(new ht(Ke*O,36,20,0,Math.PI*2,0,L),T),$,0,0)),N.add(me(new ht(Ke*(O-.012),36,20,Math.PI,Math.PI,0,B),T)),N}function ae(T,L){let $=new tt,O=B=>($.add(B),B);switch(T){case"ahoge":{O(oe(L)),O(At(Et(we(K(.3,L),.14,.43,.36),1.25,.42,.75),.4,0,-.35)),O(At(Et(we(K(.3,L),-.32,.38,.28),.65,.45,.7),.3,0,.5));let B=me(new Mt(.15,.04,8,18,Math.PI*1.25),L,{thin:!0});we(B,.05,Ke+.1,0),B.rotation.z=.5,B.name="ahoge",O(B);break}case"short":O(oe(L,1.05,-.25)),O(At(Et(we(K(.3,L),0,.45,.32),1.5,.35,.7),.45,0,0));break;case"spiky":{O(oe(L,1.1,-.25));for(let B=0;B<7;B++){let N=(B/6-.5)*2.2,ie=me(new en(.12,.34,10),L,{thin:!0});we(ie,Math.sin(N)*.42,.52+Math.cos(N)*.1,Math.cos(N)*.12-.05),ie.rotation.set(-.3,0,-N*.55),O(ie)}break}case"messy":{O(oe(L,1,-.2));for(let[B,N,ie,Y]of[[-.5,.25,0,.22],[.5,.25,0,.22],[-.3,.52,-.1,.24],[.3,.52,-.1,.24],[0,.62,0,.24],[-.55,-.05,-.15,.18],[.55,-.05,-.15,.18],[0,.4,-.45,.26]])O(we(K(Y,L),B,N,ie));break}case"slick":O(oe(L,1.15,-.45)),O(At(Et(we(K(.3,L),.05,.47,.25),1.55,.42,1),.2,0,.12));break;case"bob":case"long":case"wavy":case"pigtails":case"bun":{if($.add(me(new ht(Ke*1.1,36,20,Math.PI/2+.8,Math.PI*2-1.6,0,T==="long"||T==="wavy"?2.35:2),L)),O(At(Et(we(K(.3,L),0,.42,.38),1.6,.42,.7),.4,0,0)),O(oe(L,1,-.15,1.09)),T==="long"&&O(Et(we(K(.42,L),0,-.45,-.32),1.25,1.2,.6)),T==="wavy")for(let B of[-1,1])for(let N=0;N<3;N++)O(we(K(.17,L),B*(.58-N*.05),-.25-N*.2,-.05-N*.05));if(T==="pigtails")for(let B of[-1,1])O(we(K(.24,L),B*.72,.2,-.12)),O(we(K(.08,16727435,{thin:!0}),B*.6,.36,-.1));T==="bun"&&O(we(K(.26,L),0,.42,-.5));break}case"mohawk":for(let B=0;B<5;B++){let N=me(new en(.11,.4,8),L,{thin:!0});we(N,0,.6-Math.abs(B-2)*.05,.3-B*.2),N.rotation.x=-.3-B*.25,O(N)}break;default:break}return $}function Be(T,L){let $=new tt,O=N=>($.add(N),N),B=L.hatColor||"#ff3d4f";switch(T){case"nonla":O(we(me(new en(1.05,.55,40,1,!0),15914122,{mat:Ds(15914122,{side:$t})}),0,Ke*.86,0));break;case"ninja":{O(oe(B,1.55,-.65,1.04,2.4)),O(me(new ht(Ke*1.035,36,16,Math.PI/2-1.3,2.6,1.82,.85),B));let N=me(new Mt(Ke*1.05,.06,10,40),16727375,{thin:!0});N.rotation.x=Math.PI/2-.12,N.position.y=.26,O(N);for(let ie of[.2,-.15])O(At(we(me(new Qt(.08,.05,.45),16727375,{thin:!0}),.2+ie,.2,-Ke-.14),.5,ie,.3));break}case"bubble":{O(new et(new ht(Ke*1.42,32,24),new qt({color:12576511,transparent:!0,opacity:.18,depthWrite:!1})));let N=me(new Mt(.52,.09,10,30),14672885);N.rotation.x=Math.PI/2,N.position.y=-Ke*.92,O(N),O(we(K(.06,16727375,{thin:!0}),.55,.7,0));break}case"helmet":{O(At(me(new ht(Ke*1.13,36,18,0,Math.PI*2,0,1.35),B),-.2,0,0)),O(At(we(me(new bt(.03,.03,.5,6),1906248,{outline:!1}),0,-.48,.25),.5,0,Math.PI/2)),O(we(Et(K(.06,16777215,{thin:!0}),1,1,.5),0,.7,.28));break}case"fullhelmet":{O(At(me(new ht(Ke*1.15,36,20,0,Math.PI*2,0,1.55),B),-.35,0,0)),O(me(new ht(Ke*1.14,36,20,Math.PI,Math.PI,0,2.3),B)),O(At(Et(we(K(.3,1906248),0,.42,.42),1.4,.3,.6),.6,0,0));break}case"cap":case"capBack":{O(At(me(new ht(Ke*1.1,36,18,0,Math.PI*2,0,1.2),B),-.15,0,0));let N=me(new bt(.42,.42,.04,28,1,!1,-Math.PI/2,Math.PI),B);T==="cap"?we(N,0,.32,.45):(we(N,0,.32,-.45),N.rotation.y=Math.PI),N.rotation.x+=T==="cap"?.12:-.12,O(N),T==="cap"&&O(we(Et(K(.08,16763197,{thin:!0}),1,1,.4),0,.55,.52));break}case"chef":{O(we(me(new bt(.5,.5,.36,28),16777215),0,.62,-.05));for(let[N,ie]of[[-.25,0],[.25,0],[0,.2],[0,-.2],[0,0]])O(we(K(.3,16777215),N,.98,ie-.05));break}case"crown":{let N=me(new bt(.38,.34,.22,10,1,!0),16763197,{mat:Ds(16763197,{side:$t})});we(N,0,.66,0),O(N);for(let ie=0;ie<5;ie++){let Y=ie/5*Math.PI*2;O(we(me(new en(.08,.2,8),16763197,{thin:!0}),Math.sin(Y)*.34,.86,Math.cos(Y)*.34))}O(we(K(.06,16727375,{thin:!0}),0,.68,.38));break}case"tiara":{let N=me(new Mt(.4,.03,8,30,Math.PI),16769162,{thin:!0});we(N,0,.5,.1),N.rotation.x=-.4,O(N),O(we(me(new en(.08,.22,4),16769162,{thin:!0}),0,.72,.28)),O(we(K(.05,16740277,{thin:!0}),0,.62,.36));break}case"tricorn":{O(At(me(new ht(Ke*1.08,32,16,0,Math.PI*2,0,1.15),B),-.1,0,0));let N=new fi;N.moveTo(-.95,0),N.quadraticCurveTo(-.7,.62,0,.7),N.quadraticCurveTo(.7,.62,.95,0),N.quadraticCurveTo(0,.18,-.95,0);let ie=me(new ji(N,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),B);we(ie,0,.42,-.06),ie.rotation.x=-.12,O(ie),O(we(Et(K(.1,16777215,{thin:!0}),1,1,.35),0,.82,.1));let Y=me(new Mt(.06,.02,6,12),16763197,{outline:!1});we(Y,0,.82,.14),O(Y);break}case"santa":{let N=me(new en(.58,1,28),15217738);we(N,.12,.92,-.08),N.rotation.z=-.45,O(N);let ie=me(new Mt(.58,.12,12,30),16777215);ie.rotation.x=Math.PI/2-.1,ie.position.y=.48,O(ie),O(we(K(.14,16777215),.62,1.22,-.08));break}case"fire":{O(At(me(new ht(Ke*1.14,36,18,0,Math.PI*2,0,1.3),B),-.15,0,0));let N=me(new bt(.85,.85,.05,32),B);N.position.set(0,.28,-.12),N.rotation.x=-.18,O(N),O(we(Et(K(.13,16763197,{thin:!0}),1,1.2,.35),0,.62,.48));break}case"band":{let N=me(new Mt(Ke*1.05,.065,10,40),B,{thin:!0});N.rotation.x=Math.PI/2-.15,N.position.y=.3,O(N);break}case"mirror":{let N=me(new Mt(Ke*1.05,.04,8,40),1906248,{thin:!0});N.rotation.x=Math.PI/2-.2,N.position.y=.3,O(N);let ie=me(new bt(.15,.15,.04,24),14674175);ie.rotation.x=Math.PI/2-.2,ie.position.set(0,.5,.52),O(ie);break}case"turban":{let N=me(new Mt(Ke*.95,.13,12,36),B);N.rotation.x=Math.PI/2-.1,N.position.y=.32,O(N),O(oe(B,.9,-.1,1.04));break}case"veil":{let N=new et(new ht(Ke*1.2,32,18,Math.PI/2+.95,Math.PI*2-1.9,.3,2.5),new qt({color:16777215,transparent:!0,opacity:.6,side:$t,depthWrite:!1}));N.scale.set(1.05,1.15,1.1),N.position.y=-.12,O(N),O(we(K(.08,16761564,{thin:!0}),-.35,.5,.25)),O(we(K(.07,16777215,{thin:!0}),-.25,.56,.3));break}case"phones":{let N=me(new Mt(Ke*1.1,.05,8,30,Math.PI),B,{thin:!0});N.position.y=.05,O(N);for(let ie of[-1,1]){let Y=me(new bt(.2,.2,.14,22),B);Y.rotation.z=Math.PI/2,Y.position.set(ie*Ke*1.05,.02,0),O(Y),O(we(At(me(new bt(.12,.12,.02,18),3729568,{outline:!1}),0,0,Math.PI/2),ie*Ke*1.13,.02,0))}break}case"scarfHead":{O(At(me(new ht(Ke*1.1,36,18,0,Math.PI*2,0,1.3),B),-.45,0,0)),O(At(we(me(new en(.12,.3,10),B,{thin:!0}),0,.15,-.68),-2.2,0,0));break}case"beanie":{O(At(me(new ht(Ke*1.1,36,18,0,Math.PI*2,0,1.35),B),-.15,0,0));let N=me(new Mt(Ke*.98,.09,10,36),B);N.rotation.x=Math.PI/2-.15,N.position.y=.22,O(N),O(we(K(.15,16777215),0,.82,-.05));break}case"hood":{let N=me(new ht(Ke*1.16,40,24,Math.PI/2+.95,Math.PI*2-1.9,0,2.6),B);O(N),O(me(new ht(Ke*1.16,40,20,0,Math.PI*2,0,.95),B));let ie=me(new Mt(Ke*.86,.07,10,36),B);ie.position.z=.42,ie.scale.set(1,1.1,1),O(ie);let Y=L.hood;for(let ve of[-1,1])Y==="bear"&&(O(we(K(.2,B),ve*.5,.55,-.05)),O(we(Et(K(.11,15913641,{outline:!1}),1,1,.4),ve*.52,.56,.1))),Y==="cat"&&O(At(we(me(new en(.2,.36,4),B),ve*.38,.7,0),0,0,-ve*.4)),Y==="dog"&&O(At(Et(we(K(.2,11036974),ve*.66,.1,0),.7,1.6,.5),0,0,ve*.3)),Y==="frog"&&(O(we(K(.2,B),ve*.3,.68,.1)),O(we(K(.12,16777215,{thin:!0}),ve*.3,.72,.24)),O(we(K(.06,1906248,{outline:!1}),ve*.3,.73,.34)));if(Y==="dino")for(let ve=0;ve<5;ve++){let $e=me(new en(.11,.26,4),16763197,{thin:!0}),rt=.4-ve*.45;we($e,0,Math.cos(rt)*.72,Math.sin(rt)*.72),$e.rotation.x=rt,O($e)}break}default:break}return $}function Ce(T,L){let $=new tt,O=N=>($.add(N),N),B=(N,ie,Y=Ke)=>Cl(N,ie,Y);for(let N of T||[]){if(N==="glasses"){for(let ie of[-1,1]){let Y=B(ie*Vt.lon,Vt.lat,Ke*1.12),ve=me(new Mt(.19,.022,8,28),1906248,{outline:!1});we(ve,Y.x,Y.y,Y.z),ve.lookAt(Y.clone().multiplyScalar(3)),O(ve)}O(we(me(new bt(.018,.018,.2,6),1906248,{outline:!1}),0,Vt.lat*Ke*.95+.02,Ke*1.1)).rotation.z=Math.PI/2}if(N==="shades"){let ie=me(new Ii(.98,.24,.1,3,.05),1314862),Y=B(0,Vt.lat,Ke*1.06);we(ie,0,Y.y,Y.z),O(ie),O(we(Et(K(.05,16777215,{outline:!1}),1.8,.6,.3),-.3,Y.y+.04,Y.z+.06))}if(N==="mustache"||N==="curly"){let ie=L.hair==="#eeeef5"?"#eeeef5":"#2a1a14";for(let Y of[-1,1]){let ve=B(Y*.12,-.24,Ke*1),$e=Et(K(.1,ie,{thin:!0}),1.5,.6,.6);if(we($e,ve.x,ve.y,ve.z),$e.rotation.z=Y*.3,O($e),N==="curly"){let rt=me(new Mt(.06,.025,6,12,Math.PI*1.5),ie,{thin:!0});we(rt,ve.x+Y*.14,ve.y+.05,ve.z-.02),rt.rotation.z=Y>0?0:Math.PI,O(rt)}}}if(N==="beard"){let ie=L.beard||"#eeeef5",Y=me(new ht(Ke*.82,32,18,Math.PI/2-1.1,2.2,1.85,1.05),ie);Y.position.set(0,-.06,.12),O(Y),O(Et(we(K(.26,ie),0,-.62,.32),1.2,.9,.7))}if(N==="patch"){let ie=B(Vt.lon,Vt.lat,Ke*1.06),Y=me(new bt(.17,.17,.04,20),1314862,{thin:!0});we(Y,ie.x,ie.y,ie.z),Y.lookAt(ie.clone().multiplyScalar(3)),Y.rotateX(Math.PI/2),O(Y)}}return $}function Ne(){X(V),X(g),X(m),X(y);let T=le,L=T.extra||{},$=!!de.head,O=T.hat==="hood";(!$||O)&&V.add(ae(T.hairStyle,T.hair)),T.hat&&V.add(Be(T.hat,T));let B=(T.face||[]).filter(Y=>["glasses","shades","mustache","curly","beard","patch"].includes(Y));$||V.add(Ce(B,T)),Fe=T.face||[],Se=B.includes("shades")||$,E.visible=!O&&!["helmet","fullhelmet","ninja","fire","phones","scarfHead","beanie"].includes(T.hat);let N=Y=>(g.add(Y),Y),ie=Y=>(y.add(Y),Y);if(L.dress&&(ie(we(me(El([[.44,.12],[.5,-.05],[.62,-.3],[.7,-.45],[0,-.45]],36),L.dress),0,0,0)),ie(we(me(new Mt(.68,.035,8,40),L.dress,{thin:!0}),0,-.45,0)).rotation.x=Math.PI/2),L.aodai){for(let Y of[1,-1]){let ve=me(new Ii(.5,.62,.04,3,.02),L.aodai,{thin:!0});we(ve,0,-.36,Y*.37),ve.rotation.x=Y*.28,N(ve)}N(we(me(new bt(.15,.16,.12,18),L.aodai,{thin:!0}),0,.72,0))}if(L.coat){let Y=me(El([[.34,.66],[.44,.5],[.49,.28],[.51,.05],[.54,-.2],[.57,-.45]],36,Math.PI/2+.42,Math.PI*2-.84),L.coat,{outline:!1,mat:Ds(L.coat,{side:$t})});N(Y);for(let ve of[-1,1])N(At(we(me(new Qt(.16,.3,.03),L.coat,{thin:!0}),ve*.2,.52,.36),-.5,0,ve*.5))}if(L.vest)for(let Y of[-1,1])N(At(we(me(new Qt(.2,.62,.05),L.vest,{thin:!0}),Y*.27,.32,.4),.05,Y*.4,0));if(L.apron){N(we(me(new Ii(.56,.78,.04,3,.02),L.apron),0,.12,.45)).rotation.x=-.1;let Y=me(new Mt(.3,.02,6,24,Math.PI),L.apron,{thin:!0});Y.position.set(0,.5,.28),Y.rotation.x=-.6,N(Y)}if(L.tie&&(N(At(we(me(new Qt(.1,.36,.04),L.tie,{thin:!0}),0,.46,.38),-.2,0,0)),N(we(me(new en(.07,.1,4),L.tie,{thin:!0}),0,.25,.43)).rotation.x=Math.PI),L.scarf){let Y=me(new Mt(.2,.08,10,24),L.scarf);Y.rotation.x=Math.PI/2,Y.position.y=.68,N(Y),N(At(we(me(new Ii(.13,.32,.05,2,.02),L.scarf,{thin:!0}),.12,.5,.3),-.35,0,.25))}if(L.collar){let Y=me(new bt(.45,.22,.4,24,1,!0,Math.PI*.75,Math.PI*1.5),L.collar,{mat:Ds(L.collar,{side:$t})});Y.position.set(0,.86,-.04),N(Y)}if(L.pack&&N(we(me(new Ii(.56,.6,.28,3,.1),L.pack),0,.32,-.44)),L.box&&(N(we(me(new Ii(.82,.74,.5,3,.06),L.box),0,.42,-.62)),N(we(me(new Qt(.4,.06,.02),16777215,{outline:!1}),0,.5,-.36))),L.belly&&N(Et(we(K(.3,L.belly,{outline:!1}),0,.2,.33),1,1.15,.45)),L.chain){let Y=me(new Mt(.24,.025,8,30),16763197,{thin:!0});Y.position.set(0,.56,.18),Y.rotation.x=Math.PI/2-.9,N(Y),N(we(K(.06,16763197,{thin:!0}),0,.37,.4))}if(L.star){let Y=new fi;for(let ve=0;ve<10;ve++){let $e=ve/10*Math.PI*2-Math.PI/2,rt=ve%2?.07:.16;Y[ve?"lineTo":"moveTo"](Math.cos($e)*rt,-Math.sin($e)*rt)}N(we(me(new ji(Y,{depth:.04,bevelEnabled:!1}),L.star,{thin:!0}),0,.36,.42))}if(L.badge&&(N(we(me(new bt(.07,.07,.03,16),16763197,{thin:!0}),.2,.42,.4)).rotation.x=Math.PI/2),L.whistle&&(N(we(me(new ki(.04,.08,4,8),14672885,{thin:!0}),-.16,.38,.42)).rotation.z=Math.PI/2),L.belt){let Y=me(new Mt(.455,.045,8,40),L.belt,{thin:!0});Y.rotation.x=Math.PI/2,Y.position.y=0,N(Y)}if(L.cape){let Y=me(new bt(.4,.7,1.3,24,6,!0,Math.PI*.6,Math.PI*.8),L.cape,{mat:Ds(L.cape,{side:$t})});Y.position.set(0,-.62,.22),m.add(Y)}}let be=null,te=null;function ce(T){if(T===be)return;be=T,X(xe);let L=($,O,B,N,ie=0,Y=0)=>{$.position.set(O,B,N),$.rotation.set(Y,0,ie),xe.add($)};for(let $ of[-1,1]){if(T==="dog"&&L(Et(K(.2,13208402),.75,1.6,.45),$*.66,0,.05,$*.25),T==="cat"&&L(me(new en(.2,.36,4),13208402),$*.38,.66,0,-$*.45),T==="bunny"){let O=me(new ki(.11,.5,6,12),16777215);L(O,$*.22,.95,-.05,-$*.18)}T==="mouse"&&L(me(new bt(.26,.26,.06,24),12171721),$*.55,.5,-.05,0,Math.PI/2),T==="horns"&&L(me(new en(.09,.32,12),15921382),$*.36,.66,0,-$*.55),T==="antenna"&&(L(me(new bt(.02,.02,.45,6),1906248,{outline:!1}),$*.26,.82,0,-$*.35),L(K(.09,16763197),$*.35,1.02,0))}}function Oe(T){if(T!==te){if(te=T,X(Ge),T==="dog"){let L=new ki(.08,.3,6,12);L.translate(0,.2,0);let $=me(L,13208402);$.rotation.x=-.7,Ge.add($)}if(T==="cat"&&Ge.add(me(new Is(new Aa([new H(0,0,0),new H(0,.15,-.35),new H(0,.55,-.5),new H(.1,.8,-.35)]),24,.06,8),13208402)),T==="pig"){let L=me(new Mt(.1,.04,8,20,Math.PI*1.7),16753592);L.rotation.y=Math.PI/2,Ge.add(L)}if(T==="dino"){let L=me(new en(.28,1,16),3129201);L.rotation.x=-Math.PI/2-.5,L.position.set(0,-.15,-.35),Ge.add(L)}}}let Me="",ue={},Xe={happy:!0,love:!0};function Ye(){let T=ue.face||"neutral",L=z.visible,$=!L&&!Se&&!Xe[T],O=T==="cheeky";for(let N of P)N.g.visible=$&&!(O&&N.sx<0);let B=`${T}|${$}|${L}|${Fe.join(",")}|${Se}|${U}`;B!==Me&&(Me=B,_.map=p2(B,L?"":m2(T,{eyes3D:$||Se,wink:O,extras:Fe,noMouth:U})),_.needsUpdate=!0),w.visible=!L,k.visible=!L,L&&T!=="neutral"&&Al[T]?(pe.material.map=E0(Al[T]),pe.material.needsUpdate=!0,pe.visible=!0):pe.visible=!1}let ut=new Map;function F(T,L,$=.16,O=.72){let B=ut.get(T);return B||(B={v:0,x:L},ut.set(T,B)),B.v=(B.v+(L-B.x)*$)*O,B.x+=B.v,B.x}let Pe=T=>ut.get(T)?.v||0,ee=null,fe=null,Ie=0;function De(T){let L=JSON.stringify({...ue,fx:0})!==JSON.stringify({...T,fx:0});ue={...T},L&&(Ie=performance.now()),ce(T.ears||null),Oe(T.tail||null);for(let $ of["L","R"]){let O=T["prop"+$],B=ye["prop"+$];O&&Tl[O]?(B.material.map=E0(Tl[O]),B.material.needsUpdate=!0,B.visible=!0):B.visible=!1}T.fx&&T.fx.seq!==fe&&(fe=T.fx.seq,Date.now()-(T.fx.at||0)<4e3&&(ee={name:T.fx.name,t0:performance.now()})),Ye()}function ct(T){let L={x:0,y:0,r:0};if(!T)return L;let $=/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(T);$&&(L.x=+$[1],L.y=+$[2]);let O=/rotate\(([-\d.]+)deg\)/.exec(T);return O&&(L.r=+O[1]),L}let Ct=new H,rn=new H,dt=new H,Kt=new H,On=new H;function pi(T,L){return L.setFromMatrixPosition(T.matrixWorld),d.worldToLocal(L)}function Dr(T,L,$,O,B){On.copy(L).add(O).multiplyScalar(.5),Kt.copy($).multiplyScalar(2).sub(On),Kt.lerp($,.25);let N=new Rs(L.clone(),Kt.clone(),O.clone()),ie=re[T],Y=new Is(N,16,ie.r,10);ie.m.geometry.dispose(),ie.m.geometry=Y,ie.o.geometry=Y;let ve=re[B];if(ve.len<.01){ve.m.visible=ve.o.visible=!1;return}ve.m.visible=ve.o.visible=!0;let $e=new Is(new qf(N,0,Math.min(1,ve.len)),10,ve.r,10);ve.m.geometry.dispose(),ve.m.geometry=$e,ve.o.geometry=$e}let Mn=0,si=0,Ur=!0,Os=0,es=performance.now()+2200,Or=0,ts=0,Fr=0,Br=new ResizeObserver(()=>Ga());Br.observe(t);function Ga(){let T=t.getBoundingClientRect();if(!T.width||!T.height||T.width===Mn&&T.height===si)return;Mn=T.width,si=T.height,n.setSize(Mn,si,!1),r.aspect=Mn/si;let L=l?1.25:.75;r.position.z=Mn/si<L?a.z/Math.max(.5,Mn/si/L):a.z,r.updateProjectionMatrix()}function Wa(T){if(!Ur)return;if(!i.isConnected){j();return}Os=requestAnimationFrame(Wa),Ga();let L=T/1e3,$=Ua[ue.body]||Ua.stand,O=ct($.t),B=ue.loop,N=(Ae,pt=0)=>Math.sin(L*Math.PI*2*Ae+pt),ie=x2[ue.body]||{},Y=ie.x??O.x*T0,ve=ie.y??k0-O.y*T0,$e=-O.r*Dn,rt=0,an=0,at=ue.body==="crawl";at&&($e=0,an=68*Dn,rt=-1),ue.body==="lie"&&(rt=.25);let ze=0,St=U?F("talk",Z,.45,.5):0;!B&&!ee&&(ze=Math.abs(N(.55))*.025),B==="walk"&&(ze=Math.abs(N(1.3))*.1,$e+=N(1.3)*.08),B==="run"&&(ze=Math.abs(N(2.4))*.22,an+=.25),B==="butt"&&(Y+=N(2.9)*.14,$e+=N(2.9)*.16,rt+=N(2.9)*.2),B==="dance"&&($e+=N(1)*.2,Y+=N(1)*.12,ze=Math.abs(N(2))*.12),B==="shiver"&&(Y+=N(11)*.03),B==="row"&&($e+=N(.5)*.08),B==="flap"&&(ze=Math.abs(N(3))*.06);let ot=0,wn=0,Xn=0,on=0;if(ee){let Ae=(T-ee.t0)/1e3;if(ee.name==="jump")if(Ae<.95){let pt=Math.min(1,Math.max(0,(Ae-.12)/.7));ot=Math.sin(pt*Math.PI)*1.2,on=Ae<.12?-.18*Math.sin(Ae/.12*Math.PI):pt>=1?-.15*Math.sin((Ae-.82)/.13*Math.PI):.1*Math.sin(pt*Math.PI)}else ee=null;else if(ee.name==="spin")Ae<.9?(wn=(1-Math.pow(1-Ae/.9,3))*Math.PI*2,ot=Math.sin(Ae/.9*Math.PI)*.3):ee=null;else if(ee.name==="fall")Ae<1.8?Xn=Math.min(1,Ae/.35)*(Ae>1.4?(1.8-Ae)/.4:1)*1.45:ee=null;else if(ee.name==="bounce")if(Ae<1.1){let pt=Ae*Math.PI*3.6;ot=Math.abs(Math.sin(pt))*.32*(1-Ae/1.1),on=(Math.abs(Math.sin(pt))<.3?-.14:.06)*(1-Ae/1.1)}else ee=null}if(U){ze+=St*.1;let Ae=Math.max(.06,Math.min(1,St*1.6));D.scale.set(.8+Ae*.35,.2+Ae*1.1,1)}d.rotation.y=F("turn",v2[ue.turn]??0,.12,.74);let zr=F("hy",ve+ze,.18,.7);f.position.set(F("hx",Y),zr+ot,0),f.rotation.set(F("hrx",an),F("hry",rt)+wn,F("hrz",$e)+Xn),Xn&&(f.position.x+=Math.sin(Xn)*.75);let Pt=Ie?Math.exp(-(T-Ie)/160)*Math.sin((T-Ie)/45)*.07:0,ri=Math.max(-.2,Math.min(.2,Pe("hy")*1.6+on+Pt)),is=F("sq",ri,.3,.6);u.scale.set(1-is*.6,1+is,1-is*.6);let gn=0,ss=0;gn=-ct($.torso).r*Dn,ue.body==="bow"&&(ss=.85),B==="run"&&(ss+=.15);let Fs=B?1:1+N(.4)*.02;p.rotation.set(F("trx",ss,.12,.74),0,F("trz",gn,.12,.74)),p.scale.set(1/Fs,Fs,1/Fs),h.visible=!!$.stool,m.rotation.x=F("cape",.15+Math.min(.9,Math.abs(Pe("hx"))*6+(B==="run"?.8:0)+(ot?.5:0))+N(.7)*.05,.1,.8);let Hr=-((Gf[ue.head]??0)+(at?0:$.head||0))*Dn,Bs=at?-1:0,Hl=0;ue.head==="up"&&(Bs=-.38),(ue.head==="down"||$.headDown&&(!ue.head||ue.head==="center"))&&(Bs=.38),ue.body==="bow"&&(Bs-=.3),B||(Hr+=N(.3)*.07,Hl+=N(.17)*.12),U&&(Bs-=St*.35,Hr+=Math.sin(L*7.3)*St*.12),B==="nod"&&(Bs+=N(2.5)*.3),B==="shake"&&(Hl+=N(2.2)*.6),B==="dance"&&(Hr+=N(2)*.18),B==="walk"&&(Hr+=N(1.3)*.06),b.rotation.set(F("nx",Bs,.14,.72),F("ny",Hl,.14,.72),F("nz",Hr,.14,.72)),x.rotation.set(F("jx",-Pe("hy")*2.2+Pe("trx")*2,.22,.62),0,F("jz",Pe("hx")*2.5-Pe("hrz")*1.6,.22,.62));for(let Ae of["L","R"]){let pt=Ae==="L"?1:-1,Ut=ue["arm"+Ae]||"down",Fn=Ae==="L"?0:1,Rt,Gt,Nt=0,Wt=0;if(at&&Ut==="down")Rt=6*pt,Gt=0,Nt=-68;else if($.absArms&&Ut==="down")Rt=$.absArms[Fn][0],Gt=$.absArms[Fn][1];else{let rs=y2[Ut]||Na[Ut]||Na.down;Rt=rs[0]*pt,Gt=rs[1]*pt;let Yn=g2[Ut];Yn&&(Nt=Yn[0],Wt=Yn[1])}Ut==="down"&&!B&&!at&&(Rt+=6*pt+N(.55,Fn)*3*pt);let Sn=Ae==="L"?0:Math.PI;if(B==="walk"&&(Nt+=N(1.3,Sn)*32),B==="run"&&(Nt+=N(2.4,Sn)*60,Wt-=70),B==="dance"&&(Rt+=(N(2,Sn)*30+30)*pt,Wt-=30),B==="flap"&&(Rt+=(.5+.5*N(3))*75*pt,Gt-=N(3)*20*pt),B==="swim"&&(Nt+=(L*360*.9+(Ae==="L"?0:180))%360*-1),B==="clap"&&(Nt+=-72,Rt+=(Ae==="L"?-1:1)*(14+N(3.5)*14),Wt-=20),B==="punch"){let rs=Math.max(0,N(2,Sn));Nt+=-88*rs,Wt+=-80*(1-rs)}B==="row"&&(Nt+=N(1)*40-30,Wt-=40),B==="shiver"&&(Rt+=N(9,Sn)*4),Ut==="wave"&&(Gt+=N(2.8)*32*pt),U&&Ut==="down"&&!B&&(Rt+=St*(40+Math.sin(L*9+Fn*2)*25)*pt,Gt-=St*50*pt),ye["arm"+Ae].rotation.set(F("ux"+Ae,Nt*Dn,.15,.7),0,F("uz"+Ae,-Rt*Dn,.15,.7)),ye["fore"+Ae].rotation.set(F("fx"+Ae,Wt*Dn,.11,.72),0,F("fz"+Ae,-Gt*Dn,.11,.72))}for(let Ae of["L","R"]){let pt=Ae==="L"?1:-1,Ut=ue["leg"+Ae]||"down",Fn=Ae==="L"?0:1,Rt,Gt,Nt=0,Wt=0;if(at&&Ut==="down")Nt=-66,Wt=95,Rt=6*pt,Gt=0;else if(ie.legs&&Ut==="down"){let Yn=ie.legs[Fn];Nt=Yn[0],Wt=Yn[1],Rt=(Yn[2]||0)*pt,Gt=(Yn[3]||0)*pt}else if($.absLegs&&Ut==="down")Rt=$.absLegs[Fn][0],Gt=$.absLegs[Fn][1];else{let Yn=$.legs?$.legs[Fn]:Da[Ut]||Da.down;Rt=Yn[0]*pt,Gt=Yn[1]*pt}Ut==="kick"&&(Nt=-65,Rt*=.5),Ut==="knee"&&(Nt=-70,Wt=100,Rt=8*pt,Gt=0);let Sn=Ae==="L"?Math.PI:0;B==="walk"&&(Nt+=N(1.3,Sn)*32,Wt+=Math.max(0,N(1.3,Sn+1.2))*40),B==="run"&&(Nt+=N(2.4,Sn)*58,Wt+=Math.max(0,N(2.4,Sn+1.2))*90),B==="dance"&&(Wt+=Math.max(0,N(2,Sn))*40,Nt-=Math.max(0,N(2,Sn))*25),B==="butt"&&(Wt+=20),ye["leg"+Ae].rotation.set(F("lx"+Ae,Nt*Dn,.15,.7),0,F("lz"+Ae,-Rt*Dn,.15,.7)),ye["shin"+Ae].rotation.set(F("kx"+Ae,Wt*Dn,.12,.72),0,F("kz"+Ae,-Gt*Dn,.12,.72));let rs=ue.body==="crawl"||ue.body==="lie"||ue.body==="handstand"?0:-(Nt+Wt)*Dn*.6;ye["ankle"+Ae].rotation.x=F("ax"+Ae,rs,.15,.7)}d.updateMatrixWorld(!0);for(let Ae of["L","R"])Dr("arm"+Ae,pi(ye["arm"+Ae],Ct),pi(ye["fore"+Ae],rn),pi(ye["wrist"+Ae],dt),"sleeve"+Ae),Dr("leg"+Ae,pi(ye["leg"+Ae],Ct),pi(ye["shin"+Ae],rn),pi(ye["ankle"+Ae],dt),"pant"+Ae);Ge.rotation.set(at?-.4:0,N(2.2)*.5,0);let ai=ue.face||"neutral";T>Or&&(Or=T+700+Math.random()*1800,ts=(Math.random()-.5)*.9,Fr=(Math.random()-.5)*.6);let _m={neutral:.42,angry:.52,sad:.4,surprised:.05,scared:.08,sleepy:.72,cheeky:.38}[ai]??.4,fd={surprised:.75,scared:.55,angry:.9}[ai]??1,bm={surprised:1.18,scared:1.12}[ai]??1,Mm=A(T);for(let Ae of P){if(!Ae.g.visible)continue;let pt=ts*.5+(Ae.sx<0?.18:-.08),Ut=Fr*.4+(Ae.sx<0?-.05:.12);ai==="sad"&&(Ut=-.45),ai==="scared"&&(pt=Math.sin(T/37+Ae.sx)*.2,Ut=.1),ai==="angry"&&(pt=-Ae.sx*.25,Ut=0),ai==="surprised"&&(pt*=.3,Ut=.05),Ae.px=F("px"+Ae.sx,pt,.12,.6)+Pe("nz")*4*Ae.sx,Ae.py=F("py"+Ae.sx,Ut,.12,.6)-Pe("hy")*3;let Fn=Vt.r*.5,Rt=Math.max(-1,Math.min(1,Ae.px))*Fn,Gt=Math.max(-1,Math.min(1,Ae.py))*Fn;Ae.pupil.position.set(Rt,Gt,Math.sqrt(Math.max(0,Vt.r*Vt.r-Rt*Rt-Gt*Gt))*.98),Ae.pupil.scale.set(fd,fd,.5),Ae.shine.position.set(Rt+Vt.r*.12,Gt+Vt.r*.14,Ae.pupil.position.z+.012);let Nt=F("es"+Ae.sx,bm,.2,.6);Ae.inner.scale.set(Nt,Nt*1.08,.62);let Wt=Math.max(_m,Mm),Sn=ai==="angry"?-Ae.sx*.45:ai==="sad"?Ae.sx*.35:ai==="neutral"?Ae.sx*.08:0;Ae.lidPivot.rotation.set(-Math.PI/2+Wt*Math.PI*.95,0,F("lt"+Ae.sx,Sn,.2,.6))}let dd=V.getObjectByName("ahoge");dd&&(dd.rotation.x=F("ah",N(.8)*.2-Pe("hy")*6,.1,.8)),c.position.x=f.position.x*.8,c.scale.setScalar(Math.max(.45,1-(ot+f.position.y-k0>0?ot*.35:0))),l?.update(L,T),n.render(s,r)}let ns=0;function A(T){if(!ns&&T>es&&(ns=T,es=T+2200+Math.random()*2600),ns){let L=(T-ns)/150;return L>=1?(ns=0,0):Math.sin(L*Math.PI)}return 0}Os=requestAnimationFrame(Wa);let W=()=>{l&&(l.cheerUntil=performance.now()+1600)};function j(){Ur=!1,cancelAnimationFrame(Os),Br.disconnect(),s.traverse(T=>{T.isMesh&&!A0.has(T.material)&&(T.geometry?.dispose(),T.material?.dispose())}),n.dispose(),n.forceContextLoss?.()}R({skin:"tron"}),De({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down"});function Q(T){let L=T!=null&&!z.visible;L!==U&&(U=L,D.visible=L,Me="",Ye()),Z=L?Math.max(0,Math.min(1,T)):0}return{setPose:De,setLook:R,setTalk:Q,el:i,dispose:j,cheer:W,is3D:!0}}var Kw="rnbqkbnrpppppppp"+".".repeat(32)+"PPPPPPPPRNBQKBNR";var N0=t=>t==="."?null:t===t.toUpperCase()?"w":"b";function D0(t){let[e,n,i,s,r,a]=t.trim().split(/\s+/),o="";for(let c of e.replace(/\//g,""))o+=/\d/.test(c)?".".repeat(Number(c)):c;let l=s&&s!=="-"?(8-Number(s[1]))*8+"abcdefgh".indexOf(s[0]):-1;return{board:o,turn:n||"w",castle:i&&i!=="-"?i:"",ep:l,half:Number(r)||0,full:Number(a)||1}}var _2="rheakaehr"+".".repeat(9)+".c.....c.p.p.p.p.p"+".".repeat(18)+"P.P.P.P.P.C.....C."+".".repeat(9)+"RHEAKAEHR",Kf=t=>t==="."?null:t===t.toUpperCase()?"w":"b";function U0(){return{board:_2,turn:"w",half:0,full:1}}var O0={k:"T\u01B0\u1EDBng",a:"S\u0129",e:"T\u01B0\u1EE3ng",h:"M\xE3",r:"Xe",c:"Ph\xE1o",p:"T\u1ED1t"};var b2={k:"\u265A",q:"\u265B",r:"\u265C",b:"\u265D",n:"\u265E",p:"\u265F"},M2="\uFE0E",w2=t=>b2[t.toLowerCase()]+M2,F0="#f6e3bd",B0="#c98f5f",z0={aspect:1,render(t,e){let i=e.st.board,s=h=>{let d=h>>3,f=h&7;return e.flip&&(d=7-d,f=7-f),[f*100,d*100]},r=new Map((e.targets||[]).map(h=>[h.to,h])),a="",o="",l="",c="";for(let h=0;h<64;h++){let[d,f]=s(h),u=(h>>3)+(h&7)&1;a+=`<rect x="${d}" y="${f}" width="100" height="100" fill="${u?B0:F0}"/>`,e.last&&(h===e.last.from||h===e.last.to)&&(a+=`<rect x="${d}" y="${f}" width="100" height="100" fill="#ffd84a" opacity=".55"/>`),h===e.sel&&(a+=`<rect x="${d}" y="${f}" width="100" height="100" fill="#7bd148" opacity=".7"/>`),h===e.check&&(a+=`<rect x="${d}" y="${f}" width="100" height="100" fill="#ff3d4f" opacity=".35"/><circle cx="${d+50}" cy="${f+50}" r="40" fill="#ff3d4f" opacity=".55"/>`);let p=h>>3,y=h&7,g=e.flip?y===7:y===0,m=e.flip?p===0:p===7,b=u?F0:B0;g&&(o+=`<text x="${d+6}" y="${f+22}" class="coord" fill="${b}">${8-p}</text>`),m&&(o+=`<text x="${d+100-6}" y="${f+100-7}" class="coord" text-anchor="end" fill="${b}">${"abcdefgh"[y]}</text>`);let x=r.get(h);x&&(o+=x.cap?`<circle cx="${d+50}" cy="${f+50}" r="44" fill="none" stroke="rgba(29,22,72,.35)" stroke-width="8"/>`:`<circle cx="${d+50}" cy="${f+50}" r="15" fill="rgba(29,22,72,.3)"/>`);let v=i[h];if(v!=="."){let C=N0(v)==="w",S="";if(e.anim&&e.last&&h===e.last.to){let[E,k]=s(e.last.from);S=` style="--dx:${E-d}px;--dy:${k-f}px"`}l+=`<g class="pc ${C?"pw":"pb"} ${S?"mv":""}"${S}><text x="${d+50}" y="${f+78}" text-anchor="middle">${w2(v)}</text></g>`}c+=`<rect data-sq="${h}" x="${d}" y="${f}" width="100" height="100" fill="transparent"/>`}t.innerHTML=`<svg class="duel-svg chess-svg ${e.can?"can":""}" viewBox="0 0 800 800" preserveAspectRatio="xMidYMid meet">
      ${a}${o}${l}${c}</svg>`},demoFrames:null},S2={k:"\u5E25",a:"\u4ED5",e:"\u76F8",h:"\u508C",r:"\u4FE5",c:"\u70AE",p:"\u5175"},T2={k:"\u5C07",a:"\u58EB",e:"\u8C61",h:"\u99AC",r:"\u8ECA",c:"\u7832",p:"\u5352"},A2=t=>(Kf(t)==="w"?S2:T2)[t.toLowerCase()],E2=t=>O0[t.toLowerCase()],Ir=100,Pl=60;function C2(t){let e=o=>Pl+o*Ir,n=o=>Pl+o*Ir,i="";for(let o=0;o<10;o++)i+=`<line x1="${e(0)}" y1="${n(o)}" x2="${e(8)}" y2="${n(o)}"/>`;for(let o=0;o<9;o++)o===0||o===8?i+=`<line x1="${e(o)}" y1="${n(0)}" x2="${e(o)}" y2="${n(9)}"/>`:i+=`<line x1="${e(o)}" y1="${n(0)}" x2="${e(o)}" y2="${n(4)}"/><line x1="${e(o)}" y1="${n(5)}" x2="${e(o)}" y2="${n(9)}"/>`;for(let[o,l]of[[0,2],[7,9]])i+=`<line x1="${e(3)}" y1="${n(o)}" x2="${e(5)}" y2="${n(l)}"/><line x1="${e(5)}" y1="${n(o)}" x2="${e(3)}" y2="${n(l)}"/>`;let s=(o,l)=>{let c=e(l),h=n(o),d=7,f=18,u="";for(let p of[-1,1])if(!(p<0&&l===0||p>0&&l===8))for(let y of[-1,1])u+=`<path d="M${c+p*d} ${h+y*(d+f)} V${h+y*d} H${c+p*(d+f)}"/>`;return u},r="";for(let[o,l]of[[2,1],[2,7],[7,1],[7,7],[3,0],[3,2],[3,4],[3,6],[3,8],[6,0],[6,2],[6,4],[6,6],[6,8]])r+=s(o,l);let a=`<text x="${e(2)}" y="${n(4.5)+18}" class="river" text-anchor="middle">${t?"\u6F22 \u754C":"\u695A \u6CB3"}</text><text x="${e(6)}" y="${n(4.5)+18}" class="river" text-anchor="middle">${t?"\u695A \u6CB3":"\u6F22 \u754C"}</text>`;return`<rect x="${e(0)}" y="${n(0)}" width="${8*Ir}" height="${9*Ir}" fill="none" stroke-width="6" class="xq-frame"/><g class="xq-lines">${i}</g><g class="xq-marks">${r}</g>${a}`}var H0={aspect:920/1020,render(t,e){let n=e.st.board,i=c=>{let h=Math.floor(c/9),d=c%9;return e.flip&&(h=9-h,d=8-d),[Pl+d*Ir,Pl+h*Ir]},s=new Map((e.targets||[]).map(c=>[c.to,c])),r="",a="",o="",l="";if(e.last){let[c,h]=i(e.last.from);r+=`<rect x="${c-30}" y="${h-30}" width="60" height="60" rx="10" class="xq-from"/>`}for(let c=0;c<90;c++){let[h,d]=i(c),f=n[c];if(f!=="."){let p=Kf(f)==="w",y=e.view==="vi",g=y?E2(f):A2(f),m=y?g.length>=5?20:g.length>=4?25:31:52,b="";if(e.anim&&e.last&&c===e.last.to){let[v,C]=i(e.last.from);b=` style="--dx:${v-h}px;--dy:${C-d}px"`}let x=`xpc ${p?"xr":"xb"} ${c===e.sel?"sel":""} ${c===e.check?"chk":""} ${e.last&&c===e.last.to?"last":""} ${b?"mv":""}`;a+=`<g class="${x}"${b}><circle cx="${h}" cy="${d+4}" r="44" class="sh"/><circle cx="${h}" cy="${d}" r="44" class="o"/><circle cx="${h}" cy="${d}" r="36" class="i"/><text x="${h}" y="${d+m*.36}" text-anchor="middle" style="font-size:${m}px" class="${y?"vi":"han"}">${g}</text></g>`}let u=s.get(c);u&&(l+=u.cap?`<circle cx="${h}" cy="${d}" r="49" class="xq-cap"/>`:`<circle cx="${h}" cy="${d}" r="14" class="xq-dot"/>`),o+=`<circle data-sq="${c}" cx="${h}" cy="${d}" r="50" fill="transparent"/>`}t.innerHTML=`<svg class="duel-svg xq-svg ${e.can?"can":""}" viewBox="0 0 920 1020" preserveAspectRatio="xMidYMid meet">${C2(e.flip)}${r}${a}${l}${o}</svg>`}};var V0={r:"\u0110\u1ECF",y:"V\xE0ng",g:"Xanh l\xE1",b:"Xanh d\u01B0\u01A1ng"};var Rl=t=>t==="w"||t==="f",jf=t=>Rl(t)?null:t[0],Jf=t=>Rl(t)?t:t.slice(1);function G0(t){if(t==="w")return"\u0110\u1ED5i m\xE0u";if(t==="f")return"+4 \u0110\u1ED5i m\xE0u";let e=Jf(t);return`${{s:"M\u1EA5t l\u01B0\u1EE3t",v:"\u0110\u1EA3o chi\u1EC1u",d:"+2"}[e]??e} ${V0[jf(t)]}`}var P2={s:"\u2298",v:"\u21C4",d:"+2",w:"\u2726",f:"+4"};function W0(t,e=""){if(!t||t==="?")return`<div class="ml-card back ${e}"><i>1</i></div>`;let n=Rl(t),i=Jf(t),s=P2[i]??i;return`<div class="ml-card ${n?"wild":"c-"+jf(t)} ${e}" data-card="${t}" title="${G0(t)}"><span class="tl">${s}</span><b class="${s.length>1?"sm":""}">${s}</b><span class="br">${s}</span>${n?'<em class="q"><i></i><i></i><i></i><i></i></em>':""}</div>`}var uS=(()=>{let t=[];for(let e=1;e<=5;e++)t.push([6,e]);for(let e=5;e>=0;e--)t.push([e,6]);t.push([0,7],[0,8]);for(let e=1;e<=5;e++)t.push([e,8]);for(let e=9;e<=14;e++)t.push([6,e]);t.push([7,14],[8,14]);for(let e=13;e>=9;e--)t.push([8,e]);for(let e=9;e<=14;e++)t.push([e,8]);t.push([14,7],[14,6]);for(let e=13;e>=9;e--)t.push([e,6]);for(let e=5;e>=0;e--)t.push([8,e]);return t.push([7,0],[6,0]),t})();var pS={red:[1,2,3,4,5].map(t=>[7,t]),blue:[1,2,3,4,5].map(t=>[t,7]),green:[13,12,11,10,9].map(t=>[7,t]),yellow:[13,12,11,10,9].map(t=>[t,7])};var R2={1:[4],2:[0,8],3:[0,4,8],4:[0,2,6,8],5:[0,2,4,6,8],6:[0,2,3,5,6,8]},$0=(t,e="")=>`<div class="lg-die ${e}">${Array.from({length:9},(n,i)=>`<i class="${R2[t]?.includes(i)?"on":""}"></i>`).join("")}</div>`;var k2=[{id:"teo",name:"T\xE8o",title:"Quy\u1EC1n Ph\u1ED1 C\u1ED5",desc:"C\xE2n b\u1EB1ng, d\u1EC5 ch\u01A1i: ch\u01B0\u1EDFng t\u1EEB xa, \u0111\u1EA5m m\xF3c ch\u1ED1ng nh\u1EA3y, ch\u1ECF lao t\u1EDBi.",hp:1e3,walkF:400,walkB:330,jump:1750,size:100,dmg:100,look:{skin:"#ffd2a8",hair:"#2a2350",hairStyle:"spike",gi:"#2f6bff",trim:"#ffd43b",belt:"#ffd43b",pants:"#2a2350",band:"#3ecf6e",aura:"#4dabf7",sleeve:"skin"},specials:[{cmd:"qcf",btn:"p",name:"Ch\u01B0\u1EDFng Ph\u1EDF",type:"proj",glyph:"orb",color:"#4dabf7",info:"Ch\u01B0\u1EDFng bay th\u1EB3ng, nh\u1EB9 ch\u1EADm / m\u1EA1nh nhanh"},{cmd:"dp",btn:"p",name:"Th\u0103ng Long Quy\u1EC1n",type:"rise",info:"\u0110\u1EA5m m\xF3c bay l\xEAn, b\u1EA5t t\u1EED l\xFAc ra \u0111\xF2n \u2014 ch\u1ED1ng nh\u1EA3y"},{cmd:"qcb",btn:"p",name:"T\u0129nh T\xE2m Ph\u1EA3n \u0110\xF2n",type:"counter",info:"Th\u1EE7 th\u1EBF: b\u1ECB \u0111\xE1nh tr\xFAng l\xFAc n\xE0y th\xEC t\u1EF1 ph\u1EA3n \u0111\xF2n c\u1EF1c \u0111au"}],super:{name:"\u0110\u1EA1i Ch\u01B0\u1EDFng Ph\u1EDF",type:"beam",color:"#4dabf7",info:"Lu\u1ED3ng ch\u01B0\u1EDFng kh\u1ED5ng l\u1ED3 qu\xE9t ngang m\xE0n h\xECnh"},quote:"\u0102n b\xE1t ph\u1EDF r\u1ED3i \u0111\xE1nh ti\u1EBFp nh\xE9!"},{id:"mai",name:"Mai",title:"L\u1ED1c Xo\xE1y S\xF4ng H\xE0n",desc:"Nhanh, ch\xE2n d\xE0i: phi c\u01B0\u1EDBc lao t\u1EDBi, li\xEAn ho\xE0n c\u01B0\u1EDBc, phi ti\xEAu hoa.",hp:920,walkF:460,walkB:380,jump:1820,size:92,dmg:92,look:{skin:"#ffe0bd",hair:"#5b2a86",hairStyle:"ponytail",gi:"#ff6fb5",trim:"#ffffff",belt:"#ffffff",pants:"#2a2350",band:null,aura:"#ff6fb5"},specials:[{cmd:"qcf",btn:"k",name:"Phi C\u01B0\u1EDBc",type:"dash",info:"Lao t\u1EDBi \u0111\xE1 bay, ng\xE3 \u0111\u1ED1i th\u1EE7"},{cmd:"qcb",btn:"k",name:"Li\xEAn Ho\xE0n C\u01B0\u1EDBc",type:"multikick",info:"\u0110\xE1 li\xEAn t\u1EE5c 5\u20136 c\xFA t\u1EA1i ch\u1ED7"},{cmd:"dp",btn:"k",name:"Ph\u01B0\u1EE3ng Ho\xE0ng Lao",type:"dive",info:"B\u1EADt l\xEAn r\u1ED3i lao ch\xE9o xu\u1ED1ng \u2014 ph\u1EA3i \u0111\u1EE1 \u0111\u1EE9ng"}],super:{name:"B\xE3o C\u01B0\u1EDBc H\xE0n Giang",type:"rush",info:"Lao t\u1EDBi tung chu\u1ED7i \u0111\xE1 li\xEAn ho\xE0n"},quote:"Ch\xE2n nhanh h\u01A1n n\xE3o c\u1EE7a b\u1EA1n \u0111\xF3!"},{id:"sam",name:"B\xE1c S\u1EA5m",title:"\u0110\xF4 V\u1EADt L\xE0ng Mai",desc:"To kho\u1EBB, ch\u1EADm: \xF4m v\u1EADt c\u1EF1c \u0111au, h\xFAc \u0111\u1EA7u, d\u1EADm \u0111\u1EA5t.",hp:1150,walkF:290,walkB:250,jump:1560,size:118,dmg:115,look:{skin:"#e8a27c",hair:"#1d1648",hairStyle:"bald",gi:"#ff9f43",trim:"#1d1648",belt:"#1d1648",pants:"#8a5a2b",band:null,aura:"#ff9f43",beard:!0,open:!0},specials:[{cmd:"qcb",btn:"p",name:"\xD4m G\u1EA5u",type:"grab",info:"\xD4m v\u1EADt t\u1EA7m g\u1EA7n, kh\xF4ng \u0111\u1EE1 \u0111\u01B0\u1EE3c"},{cmd:"qcf",btn:"p",name:"H\xFAc \u0110\u1EA7u Tr\xE2u",type:"armor",info:"Lao h\xFAc, ch\u1ECBu \u0111\u01B0\u1EE3c 1 \u0111\xF2n m\xE0 kh\xF4ng kh\u1EF1ng (m\u1EA1nh: 2 \u0111\xF2n)"},{cmd:"dp",btn:"k",name:"D\u1EADm \u0110\u1EA5t",type:"quake",info:"Rung \u0111\u1EA5t quanh m\xECnh \u2014 ph\u1EA3i ng\u1ED3i \u0111\u1EE1 ho\u1EB7c nh\u1EA3y"}],super:{name:"S\u1EA5m S\xE9t Gi\xE1ng \u0110\u1ED3i",type:"biggrab",info:"\xD4m v\u1EADt si\xEAu c\u1EA5p, t\u1EA7m xa h\u01A1n"},quote:"V\u1EC1 nh\xE0 \u0103n th\xEAm b\xE1t c\u01A1m n\u1EEFa \u0111i ch\xE1u."},{id:"hac",name:"L\xE3o H\u1EA1c",title:"\u1EA8n S\u0129 N\xFAi T\u1EA3n",desc:"Tay d\xE0i, kh\xF3 l\u01B0\u1EDDng: ch\u01B0\u1EDFng gi\xF3, thu\u1EA5n di ra sau l\u01B0ng.",hp:950,walkF:350,walkB:330,jump:1650,size:104,dmg:98,look:{skin:"#f3d3b0",hair:"#f1f1f1",hairStyle:"long",gi:"#9775fa",trim:"#ffffff",belt:"#ffffff",pants:"#2a2350",band:null,aura:"#9775fa",beard:!0,longBeard:!0},specials:[{cmd:"qcb",btn:"k",name:"Thu\u1EA5n Di",type:"tele",info:"Bi\u1EBFn m\u1EA5t r\u1ED3i hi\u1EC7n ra sau l\u01B0ng \u0111\u1ED1i th\u1EE7"},{cmd:"qcf",btn:"p",name:"H\u1EA1c M\u1ECF D\xE0i",type:"stretch",info:"V\u01B0\u01A1n tay \u0111\xE2m c\u1EF1c xa"},{cmd:"dp",btn:"p",name:"Ch\u01B0\u1EDFng Gi\xF3",type:"wave",info:"Gi\xF3 xuy\xEAn qua ch\u01B0\u1EDFng \u0111\u1ECBch, tr\xFAng 2 l\u1EA7n"}],super:{name:"V\u1EA1n Ch\u01B0\u1EDFng Quy T\xF4ng",type:"tornado",info:"L\u1ED1c xo\xE1y h\xFAt \u0111\u1ED1i th\u1EE7 v\xE0o r\u1ED3i \u0111\xE1nh li\xEAn t\u1EE5c"},quote:"Gi\xF3 n\xFAi T\u1EA3n th\u1ED5i bay m\u1ECDi ki\xEAu ng\u1EA1o."},{id:"tu",name:"T\u01B0 X\xEDch L\xF4",title:"Tay L\xE1i L\u1EE5a S\xE0i G\xF2n",desc:"Chi\u1EBFc n\xF3n l\xE1 bay v\xF2ng, lao nh\u01B0 x\xEDch l\xF4 xu\u1ED1ng d\u1ED1c.",hp:1e3,walkF:380,walkB:320,jump:1700,size:102,dmg:100,look:{skin:"#d9976b",hair:"#1d1648",hairStyle:"hat",gi:"#ffffff",trim:"#8a5a2b",belt:"#8a5a2b",pants:"#5b4636",band:null,aura:"#ffd43b",sleeve:"skin",tank:!0},specials:[{cmd:"qcf",btn:"p",name:"N\xF3n L\xE1 Bay",type:"boomerang",glyph:"hat",color:"#f2d27a",info:"N\xF3n bay ra r\u1ED3i quay v\u1EC1, tr\xFAng 2 l\u01B0\u1EE3t"},{cmd:"qcb",btn:"k",name:"X\xEDch L\xF4 Xu\u1ED1ng D\u1ED1c",type:"charge",info:"Lao d\xE0i, xuy\xEAn qua ch\u01B0\u1EDFng c\u1EE7a \u0111\u1ED1i th\u1EE7"},{cmd:"dp",btn:"k",name:"\u0110\u1EA1p B\xE0n \u0110\u1EA1p",type:"launcher",info:"H\u1EA5t \u0111\u1ED1i th\u1EE7 bay l\xEAn \u2014 \u0111\xE1nh ti\u1EBFp \u0111\u01B0\u1EE3c tr\xEAn kh\xF4ng"}],super:{name:"\u0110o\xE0n X\xEDch L\xF4 Xuy\xEAn Vi\u1EC7t",type:"convoy",info:"C\u1EA3 \u0111o\xE0n x\xEDch l\xF4 ph\xF3ng ngang m\xE0n h\xECnh"},quote:"L\xEAn xe \u0111i, ch\xFA ch\u1EDF v\u1EC1 b\u1EC7nh vi\u1EC7n!"},{id:"ba",name:"C\xF4 Ba",title:"B\xE1nh M\xEC Ch\u1EE3 L\u1EDBn",desc:"Vung \u1ED5 b\xE1nh m\xEC d\xE0i nh\u01B0 g\u1EADy: \u0111\xF2n xa, quay t\xEDt, n\xE9m pa-t\xEA.",hp:980,walkF:360,walkB:320,jump:1680,size:98,dmg:102,look:{skin:"#ffd8b5",hair:"#7a2e1d",hairStyle:"scarf",gi:"#ffd43b",trim:"#ff4d5e",belt:"#ff4d5e",pants:"#2a2350",band:"#ff4d5e",aura:"#ffb347",apron:"#ffffff"},specials:[{cmd:"qcf",btn:"k",name:"G\u1EADy B\xE1nh M\xEC Qu\xE9t",type:"pole",info:"Qu\xE9t th\u1EA5p c\u1EF1c xa b\u1EB1ng \u1ED5 b\xE1nh m\xEC d\xE0i"},{cmd:"qcb",btn:"p",name:"N\xE9m Pa-t\xEA",type:"lob",glyph:"pate",color:"#c97a3f",info:"N\xE9m v\xF2ng c\u1EA7u r\u01A1i tr\xFAng \u0111\u1EA7u"},{cmd:"dp",btn:"k",name:"Gi\xF3 L\u1ED1c Ch\u1EE3 L\u1EDBn",type:"spin",info:"Xoay tr\xF2n ti\u1EBFn t\u1EDBi, tr\xFAng 3 l\u1EA7n"}],super:{name:"M\u01B0a B\xE1nh M\xEC",type:"rain",info:"B\xE1nh m\xEC r\u01A1i nh\u01B0 m\u01B0a xu\u1ED1ng \u0111\u1EA7u \u0111\u1ED1i th\u1EE7"},quote:"Mua m\u1ED9t \u1ED5 kh\xF4ng? C\xF4 b\xE1n r\u1EBB cho!"},{id:"kiet",name:"Ki\u1EC7t",title:"Ninja R\u1EEBng Tr\xE0m",desc:"Tho\u1EAFt \u1EA9n tho\u1EAFt hi\u1EC7n: phi ti\xEAu nhanh, \u0111\xE1 l\u1ED9n, d\u1ECBch chuy\u1EC3n.",hp:900,walkF:450,walkB:400,jump:1880,size:96,dmg:94,look:{skin:"#f0c49a",hair:"#1d1648",hairStyle:"mask",gi:"#2a2350",trim:"#ff4d5e",belt:"#ff4d5e",pants:"#2a2350",band:"#ff4d5e",aura:"#ff4d5e"},specials:[{cmd:"qcf",btn:"p",name:"Tam Phi Ti\xEAu",type:"spread",glyph:"star",color:"#c0c6d6",info:"3 phi ti\xEAu: th\u1EA5p, gi\u1EEFa, cao"},{cmd:"dp",btn:"k",name:"\u01AFng Tr\u1EA3m",type:"teleslash",info:"Bi\u1EBFn m\u1EA5t, hi\u1EC7n tr\xEAn \u0111\u1EA7u \u0111\u1ED1i th\u1EE7 r\u1ED3i ch\xE9m xu\u1ED1ng"},{cmd:"qcb",btn:"k",name:"Kh\xF3i M\xF9 Xuy\xEAn Th\xE2n",type:"cross",info:"L\u01B0\u1EDBt xuy\xEAn qua ng\u01B0\u1EDDi \u0111\u1ED1i th\u1EE7, b\u1EA5t t\u1EED"}],super:{name:"B\xF3ng \u0110\xEAm R\u1EEBng Tr\xE0m",type:"shadow",info:"Ch\xE9m li\xEAn t\u1EE5c t\u1EEB m\u1ECDi ph\xEDa"},quote:"B\u1EA1n c\xF2n ch\u01B0a th\u1EA5y m\xECnh ra \u0111\xF2n."},{id:"rx",name:"RX-97",title:"Robot Ph\u1EBF Li\u1EC7u",desc:"Ch\u1EADm m\xE0 ch\u1EAFc: tia laser, t\xEAn l\u1EEDa \u0111\u1EA5m m\xF3c, b\u1EAFn tia si\xEAu c\u1EA5p.",hp:1080,walkF:300,walkB:270,jump:1580,size:108,dmg:106,look:{skin:"#b8c4d6",hair:"#6b7a90",hairStyle:"robot",gi:"#8fa3bf",trim:"#ffd43b",belt:"#ffd43b",pants:"#6b7a90",band:null,aura:"#38d9a9",robot:!0},specials:[{cmd:"qcf",btn:"p",name:"Tia Laser",type:"laser",color:"#38d9a9",info:"Tia laser b\u1EAFn t\u1EE9c th\xEC h\u1EBFt m\xE0n h\xECnh (ra ch\u1EADm)"},{cmd:"dp",btn:"p",name:"T\xEAn L\u1EEDa \u0110\u1EA5m M\xF3c",type:"rocket",info:"Ph\xF3ng ch\xE9o l\xEAn nh\u01B0 t\xEAn l\u1EEDa, tr\xFAng 3 l\u1EA7n"},{cmd:"qcb",btn:"p",name:"Nam Ch\xE2m H\xFAt",type:"magnet",info:"H\xFAt \u0111\u1ED1i th\u1EE7 l\u1EA1i g\u1EA7n (kh\xF4ng g\xE2y s\xE1t th\u01B0\u01A1ng)"}],super:{name:"M\u01B0a T\xEAn L\u1EEDa \u0110\u1ED3ng N\xE1t",type:"missiles",info:"5 t\xEAn l\u1EEDa t\u1EF1 \u0111u\u1ED5i theo \u0111\u1ED1i th\u1EE7"},quote:"B\xCDP. \u0110\u1ED0I TH\u1EE6 \u0110\xC3 B\u1ECA T\xC1I CH\u1EBE."},{id:"na",name:"B\xE9 Na",title:"Si\xEAu Nh\xE2n N\xE1 Thun",desc:"Nh\u1ECF x\xEDu, kh\xF3 \u0111\xE1nh tr\xFAng: b\u1EAFn n\xE1, l\u0103n tr\xF2n, nh\u1EA3y c\u1EF1c cao.",hp:860,walkF:430,walkB:380,jump:1950,size:84,dmg:88,look:{skin:"#ffe0bd",hair:"#3a2a20",hairStyle:"cap",gi:"#ff4d5e",trim:"#ffffff",belt:"#2f6bff",pants:"#2f6bff",band:"#ffd43b",aura:"#ffd43b"},specials:[{cmd:"qcf",btn:"p",name:"N\xE1 N\u1EA3y Bi",type:"bounce",glyph:"ball",color:"#ff9f43",info:"Vi\xEAn bi n\u1EA3y t\u01B0ng t\u01B0ng d\u1ECDc m\u1EB7t \u0111\u1EA5t"},{cmd:"qcb",btn:"k",name:"L\u0103n B\xE1nh Xe",type:"roll",info:"L\u0103n th\u1EA5p, n\xE9 ch\u01B0\u1EDFng v\xE0 \u0111\xF2n \u0111\u1EE9ng"},{cmd:"dp",btn:"k",name:"Nh\u1EA3y L\xF2 Xo",type:"stomp",info:"B\u1EADt cao r\u1ED3i d\u1EADm xu\u1ED1ng, rung \u0111\u1EA5t"}],super:{name:"M\u01B0a Bi Ve",type:"marbles",info:"R\u1EA3i bi ve kh\u1EAFp m\u1EB7t \u0111\u1EA5t, tr\xFAng \u0111\xF2n th\u1EA5p li\xEAn t\u1EE5c"},quote:"M\u1EB9 \u01A1i con th\u1EAFng r\u1ED3i!!!"},{id:"thay",name:"Th\u1EA7y B\u1EA3y",title:"V\xF5 B\xECnh \u0110\u1ECBnh",desc:"V\xF5 c\u1ED5 truy\u1EC1n: \u0111\xE1 qu\xE9t, kh\u0103n r\u1EB1n qu\u1EA5t gi\xF3, th\u1EBF \u0111\u1EE9ng v\u1EEFng ch\xE3i.",hp:1020,walkF:360,walkB:320,jump:1680,size:102,dmg:104,look:{skin:"#e2a878",hair:"#1d1648",hairStyle:"topknot",gi:"#1d1648",trim:"#ff4d5e",belt:"#ff4d5e",pants:"#1d1648",band:null,aura:"#ff4d5e",scarf:!0,beard:!0},specials:[{cmd:"qcf",btn:"p",name:"Kh\u0103n R\u1EB1n Qu\u1EA5t",type:"whip",info:"Qu\u1EA5t kh\u0103n t\u1EA7m trung, k\xE9o \u0111\u1ED1i th\u1EE7 l\u1EA1i g\u1EA7n"},{cmd:"qcb",btn:"k",name:"Thi\u1EBFt T\u1EA3o Qu\xE9t \u0110\u1EA5t",type:"lowspin",info:"Xoay qu\xE9t th\u1EA5p 3 l\u1EA7n \u2014 ph\u1EA3i ng\u1ED3i \u0111\u1EE1"},{cmd:"dp",btn:"p",name:"M\xE3nh H\u1ED5 V\u1ED3 M\u1ED3i",type:"tiger",info:"V\u1ED3 t\u1EDBi tr\xEAn cao \u2014 ph\u1EA3i \u0111\u1EE1 \u0111\u1EE9ng"}],super:{name:"T\xE2y S\u01A1n Th\u1EA7n T\u1ED1c",type:"tayson",info:"L\u01B0\u1EDBt xuy\xEAn qua \u0111\u1ED1i th\u1EE7 nhi\u1EC1u l\u1EA7n"},quote:"\u1EDE B\xECnh \u0110\u1ECBnh, con g\xE1i c\u0169ng \u0111\xE1nh hay h\u01A1n con."},{id:"hung",name:"H\xF9ng T\u1EA1",title:"L\u1EF1c S\u0129 C\u1EED T\u1EA1",desc:"C\u01A1 b\u1EAFp cu\u1ED3n cu\u1ED9n: qu\u0103ng ng\u01B0\u1EDDi, d\u1EADm t\u1EA1 rung \u0111\u1EA5t, lao nh\u01B0 tr\xE2u.",hp:1120,walkF:300,walkB:260,jump:1560,size:114,dmg:112,look:{skin:"#c98a5e",hair:"#1d1648",hairStyle:"flat",gi:"#ff4d5e",trim:"#ffffff",belt:"#1d1648",pants:"#ff4d5e",band:null,aura:"#ff4d5e",sleeve:"skin",tank:!0,mustache:!0},specials:[{cmd:"qcb",btn:"p",name:"Qu\u0103ng T\u1EA1 Ng\u01B0\u1EDDi",type:"toss",info:"T\xFAm ng\u01B0\u1EDDi qu\u0103ng v\u0103ng xa"},{cmd:"qcf",btn:"p",name:"L\u0103n T\u1EA1",type:"barbell",glyph:"barbell",color:"#555",info:"Qu\u1EA3 t\u1EA1 l\u0103n s\xE1t \u0111\u1EA5t, r\u1EA5t \u0111au \u2014 ph\u1EA3i ng\u1ED3i \u0111\u1EE1"},{cmd:"dp",btn:"p",name:"G\u1ED3ng C\u01A1",type:"flex",info:"4 gi\xE2y: \u0111\xF2n m\u1EA1nh h\u01A1n 40% v\xE0 ch\u1ECBu \u0111\u01B0\u1EE3c 1 \u0111\xF2n"}],super:{name:"C\u1EED Gi\u1EADt 300 K\xFD",type:"bigquake",info:"Th\u1EA3 t\u1EA1 rung c\u1EA3 s\xE0n \u2014 kh\xF4ng nh\u1EA3y l\xE0 d\xEDnh"},quote:"Nh\u1EB9 h\u1EC1u, nh\u01B0 n\xE2ng t\u1EA1 5 k\xFD."},{id:"lan",name:"Lan",title:"Ngh\u1EC7 S\u0129 Xi\u1EBFc Trung \u01AF\u01A1ng",desc:"Nh\xE0o l\u1ED9n tr\xEAn kh\xF4ng: tung b\xF3ng, l\u1ED9n ra sau l\u01B0ng, \u0111\xE1 xoay.",hp:900,walkF:420,walkB:380,jump:1900,size:94,dmg:94,look:{skin:"#ffe0bd",hair:"#ff6b00",hairStyle:"pigtails",gi:"#9775fa",trim:"#ffd43b",belt:"#ffd43b",pants:"#ffd43b",band:null,aura:"#9775fa"},specials:[{cmd:"qcf",btn:"p",name:"Tung B\xF3ng Xi\u1EBFc",type:"juggle",glyph:"ball",color:"#9775fa",info:"Tung 3 qu\u1EA3 b\xF3ng v\xF2ng c\u1EA7u \u1EDF 3 t\u1EA7m"},{cmd:"qcb",btn:"k",name:"L\u1ED9n Qua \u0110\u1EA7u",type:"flip",info:"L\u1ED9n qua \u0111\u1EA7u \u0111\u1ED1i th\u1EE7 r\u1ED3i \u0111\xE1 t\u1EEB ph\xEDa sau"},{cmd:"dp",btn:"p",name:"V\xF2ng L\u1EEDa Xi\u1EBFc",type:"hoop",glyph:"hoop",color:"#ff6b00",info:"V\xF2ng l\u1EEDa l\u0103n ch\u1EADm, d\u1ED9i t\u01B0\u1EDDng quay l\u1EA1i"}],super:{name:"\u0110\xEAm Di\u1EC5n Cu\u1ED1i C\xF9ng",type:"circus",info:"B\u1EADt l\xF2 xo l\xEAn cao, r\u1EA3i b\xF3ng xu\u1ED1ng \u0111\u1ED1i th\u1EE7"},quote:"C\u1EA3m \u01A1n qu\xFD kh\xE1n gi\u1EA3! V\u1ED7 tay \u0111i n\xE0o!"}],Ot=Object.fromEntries(k2.map(t=>[t.id,t]));var Qe=100,I2=60;var xS=40*Qe,vS=920*Qe;var Qi={U:1,D:2,L:4,R:8,LP:16,HP:32,LK:64,HK:128,S1:256,S2:512,S3:1024,SUP:2048},L2=["idle","walkf","walkb","crouch"],_S=Qi.LP|Qi.HP|Qi.LK|Qi.HK|Qi.S1|Qi.S2|Qi.S3|Qi.SUP;var bS=[...L2,"block"];var N2={sLP:{s:3,a:3,r:6,dmg:28,hb:[18,92,80,118],hs:14,bs:9,push:12,h:"mid",cancel:1,chain:1,pose:"jab"},sHP:{s:6,a:4,r:14,dmg:72,hb:[18,96,102,128],hs:19,bs:14,push:22,h:"mid",cancel:1,pose:"punch"},sLK:{s:4,a:3,r:8,dmg:32,hb:[18,40,90,72],hs:14,bs:9,push:14,h:"mid",cancel:1,chain:1,pose:"kickL"},sHK:{s:8,a:4,r:17,dmg:82,hb:[22,76,120,112],hs:19,bs:14,push:26,h:"mid",pose:"kickH"},cLP:{s:3,a:2,r:6,dmg:24,hb:[18,52,78,74],hs:13,bs:8,push:10,h:"mid",cancel:1,chain:1,pose:"cjab"},cHP:{s:5,a:5,r:16,dmg:68,hb:[6,70,72,152],hs:18,bs:13,push:18,h:"mid",cancel:1,pose:"cupper"},cLK:{s:4,a:3,r:8,dmg:28,hb:[18,0,90,26],hs:14,bs:9,push:12,h:"low",cancel:1,chain:1,pose:"ckick"},cHK:{s:7,a:4,r:20,dmg:68,hb:[18,0,124,26],hs:20,bs:14,push:20,h:"low",kd:1,pose:"sweep"},jLP:{s:3,a:8,r:4,dmg:32,hb:[10,40,68,80],hs:14,bs:9,push:10,h:"over",air:1,pose:"jpunch"},jHP:{s:5,a:6,r:6,dmg:72,hb:[10,20,80,70],hs:19,bs:13,push:14,h:"over",air:1,pose:"jpunch"},jLK:{s:3,a:9,r:4,dmg:36,hb:[6,10,78,50],hs:14,bs:9,push:10,h:"over",air:1,pose:"jkick"},jHK:{s:5,a:6,r:6,dmg:78,hb:[10,0,96,46],hs:19,bs:13,push:14,h:"over",air:1,pose:"jkick"},throw:{s:2,a:1,r:22,dmg:120,pose:"throw"}};function q0(t,e){let n=e?1:0,i={hs:18,bs:13,push:16,chip:8,h:"mid"};switch(t.type){case"proj":return{...i,s:13,a:1,r:30,dmg:70,pspd:480+280*n,pose:"palm"};case"rise":return{...i,s:3,a:14,r:26,dmg:95+25*n,hb:[0,70,60,165],vy:1350+300*n,vx:180,kd:1,hs:20,bs:16,push:20,chip:10,inv:[0,7],pose:"uppercut"};case"counter":return{s:3,a:22,r:18,dmg:115+15*n,counter:1,pose:"stance"};case"dash":return{...i,s:6,a:16+4*n,r:16,dmg:85+15*n,hb:[10,56,96,104],spd:900+180*n,kd:1,hs:20,bs:15,push:26,pose:"flykick"};case"multikick":return{...i,s:4,a:26+6*n,r:14,dmg:20,hb:[10,48,96,134],hits:5+n,every:5,hs:13,bs:8,push:5,chip:3,kdLast:1,pose:"multikick"};case"dive":return{...i,s:5,a:70,r:10,dmg:85+10*n,hb:[0,-20,74,50],h:"over",kd:1,jvy:1450,jvx:260,diveAt:18,dvx:850+200*n,dvy:-1500,air2:1,pose:"dive"};case"grab":return{s:4,a:2,r:32,dmg:190+30*n,range:92+10*n,pose:"grab",grab:1};case"armor":return{...i,s:9,a:18+4*n,r:18,dmg:90+15*n,hb:[10,80,74,134],spd:760+150*n,kd:1,push:24,armor:1+n,pose:"headbutt"};case"quake":return{...i,s:18,a:5,r:20,dmg:80+10*n,range:175,hs:22,bs:14,kd:1,h:"low",pose:"stomp"};case"tele":return{s:15,a:1,r:11,inv:[0,16],pose:"tele"};case"stretch":return{...i,s:9,a:5,r:22,dmg:70+10*n,hb:[30,86,250+40*n,116],push:18,chip:5,pose:"stretch"};case"wave":return{...i,s:14,a:1,r:30,dmg:45,pspd:360+120*n,pose:"palm"};case"boomerang":return{...i,s:12,a:1,r:28,dmg:50,pspd:760+100*n,ret:30+6*n,pose:"toss"};case"charge":return{...i,s:8,a:30+6*n,r:18,dmg:90+15*n,hb:[0,30,76,140],spd:1050+150*n,kd:1,push:22,invProj:1,pose:"charge"};case"launcher":return{...i,s:7,a:4,r:24,dmg:60+10*n,hb:[14,30,92,124],launch:1700+200*n,jug:34,hs:20,push:8,chip:6,pose:"kickH"};case"pole":return{...i,s:10,a:5,r:22,dmg:75+10*n,hb:[20,0,220+30*n,32],h:"low",kd:1,hs:20,bs:14,push:20,chip:7,pose:"pole"};case"lob":return{...i,s:12,a:1,r:26,dmg:75,pspd:380+240*n,pose:"toss"};case"spin":return{...i,s:8,a:27,r:14,dmg:32+6*n,hb:[-56,66,76,112],spd:420+120*n,hits:3,every:9,hs:14,bs:10,push:14,chip:5,lift:24,pose:"spin"};case"spread":return{...i,s:12,a:1,r:28,dmg:32,pspd:950+150*n,pose:"toss"};case"teleslash":return{...i,s:14,a:70,r:12,dmg:95+10*n,hb:[-30,-30,50,40],h:"over",kd:1,inv:[0,15],air2:1,pose:"slash"};case"cross":return{...i,s:5,a:16,r:14,dmg:40,hb:[-40,30,40,130],spd:1150+150*n,inv:[0,22],pass:1,pose:"charge"};case"laser":return{...i,s:22,a:8,r:26,dmg:90+10*n,hb:[40,92,920,114],hs:20,bs:14,push:10,chip:12,pose:"laser"};case"rocket":return{...i,s:4,a:18,r:22,dmg:38+5*n,hb:[0,60,72,160],vy:1250+200*n,vx:520,hits:3,every:6,kdLast:1,push:10,chip:6,inv:[0,6],pose:"uppercut"};case"magnet":return{s:12,a:14,r:20,range:520,magnet:1,pose:"palm"};case"bounce":return{...i,s:12,a:1,r:26,dmg:55,pspd:520+160*n,pose:"toss"};case"roll":return{...i,s:4,a:24+4*n,r:14,dmg:70,hb:[0,0,64,40],spd:820+140*n,h:"low",kd:1,low:1,invProj:1,pose:"roll"};case"stomp":return{...i,s:5,a:80,r:14,dmg:85,hb:[-30,-20,40,40],h:"over",kd:1,jvy:2e3,jvx:200,diveAt:22,dvx:0,dvy:-2400,air2:1,quakeLand:130,pose:"stomp"};case"whip":return{...i,s:8,a:4,r:20,dmg:55,hb:[20,88,210+20*n,124],pull:1,hs:22,bs:12,push:0,chip:5,pose:"whip"};case"lowspin":return{...i,s:7,a:24,r:16,dmg:30+5*n,hb:[-58,0,82,34],spd:280+80*n,hits:3,every:8,h:"low",kdLast:1,hs:14,bs:10,push:10,chip:5,pose:"sweep"};case"tiger":return{...i,s:6,a:34,r:12,dmg:80+10*n,hb:[10,30,86,112],h:"over",kd:1,jvy:900,jvx:620+120*n,air2:1,pose:"claw"};case"toss":return{s:4,a:2,r:32,dmg:170+20*n,range:96,grab:1,far:1,pose:"grab"};case"barbell":return{...i,s:14,a:1,r:30,dmg:110,pspd:340+140*n,kd:1,h:"low",pose:"toss"};case"flex":return{s:4,a:1,r:36,buff:240,pose:"flex"};case"juggle":return{...i,s:12,a:1,r:28,dmg:40,pspd:300+80*n,pose:"toss"};case"flip":return{...i,s:4,a:50,r:10,dmg:70+10*n,hb:[0,0,72,64],h:"over",hs:20,bs:13,push:14,pass:1,air2:1,flip:1,pose:"jkick"};case"hoop":return{...i,s:12,a:1,r:26,dmg:50,pspd:300+100*n,h:"low",pose:"toss"};case"beam":return{...i,s:22,a:42,r:22,dmg:46,hb:[44,66,640,132],hits:6,every:7,hs:16,bs:10,push:6,chip:10,inv:[0,22],sup:1,pose:"palm",kdLast:1};case"rush":return{...i,s:6,a:46,r:22,dmg:42,hb:[0,40,92,130],spd:1050,hits:7,every:6,push:4,chip:8,inv:[0,10],sup:1,pose:"rush",kdLast:1};case"biggrab":return{s:3,a:3,r:36,dmg:380,range:120,pose:"grab",grab:1,sup:1,inv:[0,5]};case"tornado":return{s:14,a:1,r:40,dmg:40,sup:1,inv:[0,14],pose:"palm"};case"convoy":return{s:16,a:44,r:20,dmg:65,sup:1,inv:[0,20],pose:"win"};case"rain":return{s:12,a:40,r:20,dmg:42,sup:1,inv:[0,12],pose:"win"};case"shadow":return{...i,s:6,a:48,r:20,dmg:45,hb:[-20,30,90,140],spd:1100,hits:7,every:6,push:2,chip:8,inv:[0,54],sup:1,shadow:1,kdLast:1,pose:"slash"};case"missiles":return{s:14,a:30,r:20,dmg:55,sup:1,inv:[0,14],pose:"palm"};case"marbles":return{s:10,a:1,r:26,dmg:24,sup:1,inv:[0,10],pose:"toss"};case"tayson":return{...i,s:6,a:42,r:20,dmg:50,hb:[-40,30,60,140],spd:1400,hits:5,every:6,push:2,chip:8,inv:[0,48],pass:1,sup:1,kdLast:1,pose:"charge"};case"bigquake":return{s:26,a:2,r:30,dmg:260,sup:1,armor:99,unblock:1,pose:"stomp"};case"circus":return{s:8,a:60,r:16,dmg:45,sup:1,inv:[0,30],air2:1,pose:"jump"}}return null}var Qf={};function ed(t){if(Qf[t])return Qf[t];let e=Ot[t],n=e.size/100,i=e.dmg/100,s=a=>({...a,dmg:Math.round((a.dmg||0)*(a.sup?1:i)),hb:a.hb&&a.hb.map(o=>Math.round(o*n)),range:a.range&&Math.round(a.range*n)}),r={};for(let[a,o]of Object.entries(N2))r[a]={key:a,...s(o)};return e.specials.forEach((a,o)=>{for(let l of[0,1]){let c=q0(a,l);r[`sp${o}${l}`]={key:`sp${o}${l}`,type:a.type,special:1,name:a.name,...s(c)}}}),r.sup={key:"sup",type:e.super.type,special:1,name:e.super.name,...s(q0(e.super,1))},Qf[t]=r,r}function X0(t,e){let n=Ot[t];return{c:t,side:e,x:(e?640:320)*Qe,y:0,vx:0,vy:0,face:e?-1:1,hp:n.hp,max:n.hp,meter:0,st:"idle",t:0,mv:null,hitDone:0,lastHit:-99,stun:0,cb:0,inv:0,jdir:0,airAtk:0,prev:0,pend:0,np:5,buf:[],tapD:0,tapT:-99,run:0,pbuf:0,pbT:0,buff:0,buffArmor:0,armorUsed:0,jug:0,cnt:0,combo:0,showCombo:0,comboT:0,wins:0}}function Y0(t,e={}){return{frame:0,round:1,phase:"intro",pt:0,hitstop:0,need:e.rounds||2,time:e.time??99,timer:(e.time??99)*I2,f:[X0(t[0],0),X0(t[1],1)],proj:[],winner:-1,lastRoundWinner:-1,why:""}}var Le=960,ft=540,ke=470,Ze="#1d1648",tn=Math.PI/180,Z0=(t,e,n)=>t+(e-t)*n,K0=t=>t*t*(3-2*t),je=t=>({lean:4,head:0,aN:[40,85],aF:[22,105],lN:[16,18],lF:[-16,12],dip:0,rot:0,...t}),yt={idle:je({}),crouch:je({lean:14,lN:[78,128],lF:[8,138],aN:[55,95],aF:[35,110],dip:0}),jump:je({lean:0,lN:[70,120],lF:[30,125],aN:[110,50],aF:[80,70]}),block:je({lean:-6,aN:[100,125],aF:[85,135],head:-6}),cblock:je({lean:6,lN:[78,128],lF:[8,138],aN:[100,125],aF:[85,135]}),hit:je({lean:-20,head:-22,aN:[-25,35],aF:[-45,25],lN:[22,10],lF:[-22,14]}),chit:je({lean:-8,head:-18,lN:[78,128],lF:[8,138],aN:[-20,40],aF:[-40,30]}),jab:je({lean:12,aN:[92,0],aF:[28,110]}),punch:je({lean:22,aF:[96,0],aN:[30,120],lN:[26,10],lF:[-28,6]}),kickL:je({lean:-4,lN:[82,8],lF:[-8,10],aN:[60,90],aF:[10,100]}),kickH:je({lean:-24,lN:[118,0],lF:[-6,6],aN:[50,100],aF:[-30,60],head:-8}),cjab:je({lean:16,lN:[78,128],lF:[8,138],aN:[88,4],aF:[35,110]}),cupper:je({lean:4,lN:[50,70],lF:[-4,80],aN:[172,8],aF:[30,100]}),ckick:je({lean:18,lN:[88,6],lF:[6,140],aN:[60,95],aF:[30,110]}),sweep:je({lean:34,lN:[92,0],lF:[-40,150],aN:[10,30],aF:[-30,30],dip:8}),jpunch:je({lean:10,aN:[65,-5],aF:[20,90],lN:[70,115],lF:[30,120]}),jkick:je({lean:-8,lN:[62,0],lF:[20,130],aN:[100,60],aF:[60,80]}),throw:je({lean:18,aN:[82,50],aF:[70,60],lN:[28,14],lF:[-26,8]}),palm:je({lean:14,aN:[90,8],aF:[86,14],lN:[34,10],lF:[-36,6]}),toss:je({lean:10,aN:[115,-25],aF:[-20,60],lN:[30,10],lF:[-30,8]}),uppercut:je({lean:8,aN:[176,0],aF:[20,110],lN:[8,45],lF:[-26,70]}),flipkick:je({lean:-40,lN:[165,0],lF:[40,100],aN:[-40,30],aF:[-60,20],head:-20}),spin:je({lean:0,lN:[92,0],lF:[-92,0],aN:[120,10],aF:[-120,10]}),flykick:je({lean:-26,lN:[96,0],lF:[20,125],aN:[-50,40],aF:[-70,30],head:-10}),headbutt:je({lean:62,head:10,aN:[-70,20],aF:[-80,20],lN:[30,20],lF:[-40,10]}),grab:je({lean:16,aN:[98,45],aF:[92,55],lN:[30,18],lF:[-30,10]}),tele:je({lean:0,aN:[60,120],aF:[60,120]}),stomp:je({lean:0,lN:[75,100],lF:[-6,10],aN:[140,50],aF:[120,60]}),flap:je({lean:-6,aN:[150,8],aF:[135,14],lN:[12,22],lF:[-14,16]}),rush:je({lean:16,aN:[92,0],aF:[40,100],lN:[30,12],lF:[-28,6]}),stance:je({lean:-4,aN:[70,140],aF:[60,150],lN:[30,30],lF:[-30,20],dip:6}),dive:je({lean:40,lN:[120,0],lF:[40,110],aN:[-60,30],aF:[-80,30],rot:30}),charge:je({lean:34,aN:[80,30],aF:[70,40],lN:[70,90],lF:[30,100],head:10}),pole:je({lean:30,aN:[80,10],aF:[70,20],lN:[60,100],lF:[-20,130],dip:10}),stretch:je({lean:16,aN:[92,0],aF:[-20,60],lN:[36,10],lF:[-34,6]}),whip:je({lean:10,aN:[110,-10],aF:[10,90],lN:[34,12],lF:[-30,6]}),laser:je({lean:-8,aN:[90,0],aF:[90,0],lN:[26,10],lF:[-28,8],head:-4}),roll:je({lean:60,aN:[100,120],aF:[90,130],lN:[100,150],lF:[80,150],dip:34}),claw:je({lean:30,aN:[140,-30],aF:[120,-20],lN:[80,60],lF:[-20,40]}),slash:je({lean:24,aN:[40,0],aF:[150,30],lN:[60,80],lF:[10,90]}),flex:je({lean:0,aN:[100,110],aF:[100,110],lN:[22,10],lF:[-22,10],head:4}),multikick:je({lean:-14,lN:[100,0],lF:[-10,10],aN:[50,100],aF:[-20,70]}),elbow:je({lean:26,aN:[100,150],aF:[-30,60],lN:[40,16],lF:[-34,8],head:6}),back:je({lean:-16,aN:[60,100],aF:[30,110],lN:[-10,30],lF:[-40,20],head:-6}),win:je({lean:0,aN:[172,30],aF:[10,120],head:6}),lose:je({lean:26,head:30,aN:[-6,10],aF:[-12,8],lN:[10,30],lF:[-8,26]}),down:je({rot:-90,aN:[150,20],aF:[120,30],lN:[10,10],lF:[-6,20],lean:0})};function kl(t,e,n){let i={};for(let s of Object.keys(t))i[s]=Array.isArray(t[s])?t[s].map((r,a)=>Z0(r,e[s][a],n)):Z0(t[s],e[s],n);return i}function tm(t,e,n){let i=t.st,s=Math.sin(n/9+t.side*2)*2,r={...yt.idle,aN:[yt.idle.aN[0]+s,yt.idle.aN[1]],lean:yt.idle.lean+s*.4};if(i==="walkf"||i==="walkb"){let a=t.x/Qe/14*(i==="walkb"?-1:1);r={...r,lN:[16+Math.sin(a)*22,18+Math.max(0,Math.cos(a))*28],lF:[-16-Math.sin(a)*22,12+Math.max(0,-Math.cos(a))*28],lean:i==="walkf"?9:-2}}else if(i==="run"){let a=t.x/Qe/9;r={...r,lean:28,head:8,lN:[30+Math.sin(a)*40,30+Math.max(0,Math.cos(a))*70],lF:[-20-Math.sin(a)*40,30+Math.max(0,-Math.cos(a))*70],aN:[60-Math.sin(a)*40,90],aF:[20+Math.sin(a)*40,90]}}else if(i==="back")r=yt.back;else if(i==="crouch")r=yt.crouch;else if(i==="prejump"||i==="land")r=kl(yt.idle,yt.crouch,.5);else if(i==="jump")r=yt.jump;else if(i==="block")r=t.cb?yt.cblock:yt.block;else if(i==="hit")r=t.cb?yt.chit:kl(yt.hit,yt.idle,Math.max(0,1-t.stun/12)*.5);else if(i==="fall")r={...yt.hit,rot:-Math.min(80,20+(900-t.vy)/20),lN:[40,30],lF:[10,40]};else if(i==="down"||i==="ko")r=yt.down;else if(i==="getup")r=kl(yt.down,yt.crouch,Math.min(1,t.t/14));else if(i==="win")r={...yt.win,aN:[172+Math.sin(n/6)*8,30]};else if(i==="lose")r=yt.lose;else if(i==="atk"&&t.mv){let a=ed(t.c)[t.mv],o=yt[a.pose]||yt.jab,l=a.key[0]==="c"?yt.crouch:a.air||t.y>0?yt.jump:yt.idle;a.pose==="rush"&&(o=Math.floor(t.t/6)%2?yt.kickL:yt.jab),a.pose==="multikick"&&(o=Math.floor(t.t/4)%2?yt.kickH:yt.multikick),(a.pose==="jump"||(a.air2||a.type==="circus")&&t.y>0&&!["dive","slash","claw","stomp"].includes(a.pose))&&(l=yt.jump);let c;t.t<a.s?c=K0(t.t/Math.max(1,a.s)):t.t<a.s+a.a?c=1:c=1-K0(Math.min(1,(t.t-a.s-a.a)/Math.max(1,a.r))),a.type==="rise"&&t.y>0&&t.t>=a.s&&(c=1),r=kl(l,o,c),a.pose==="spin"&&t.t>=a.s&&t.t<a.s+a.a&&(r.spin=Math.floor(t.t/3)%2),a.pose==="flipkick"&&t.y>0&&(r.rot=-((t.t-a.s)*24)%360),a.pose==="roll"&&t.t>=a.s&&t.t<a.s+a.a&&(r.rot=-(t.t*28%360)),a.type==="flip"&&t.y>0&&(r.rot=-((t.t-a.s)*13)%360),a.type==="tele"&&(r.alpha=Math.abs(t.t-a.s)<8?Math.abs(t.t-a.s)/8:1)}return r}function Il(t,e,n,i,s,r,a,o,l){let c=e+Math.sin(i*tn)*s,h=n+Math.cos(i*tn)*s,d=c+Math.sin(r*tn)*a,f=h+Math.cos(r*tn)*a;return t.lineCap="round",t.lineJoin="round",t.strokeStyle=Ze,t.lineWidth=o+6,t.beginPath(),t.moveTo(e,n),t.lineTo(c,h),t.lineTo(d,f),t.stroke(),t.strokeStyle=l,t.lineWidth=o,t.beginPath(),t.moveTo(e,n),t.lineTo(c,h),t.lineTo(d,f),t.stroke(),[d,f,r]}function nn(t,e,n,i,s,r=3){t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fillStyle=s,t.fill(),t.lineWidth=r,t.strokeStyle=Ze,t.stroke()}function Ba(t,e){let n=parseInt(t.slice(1),16),i=n>>16&255,s=n>>8&255,r=n&255;return i=Math.round(i*e),s=Math.round(s*e),r=Math.round(r*e),`rgb(${Math.min(255,i)},${Math.min(255,s)},${Math.min(255,r)})`}function id(t,e,n,{flash:i=0,tick:s=0,scale:r=1,ghost:a=!1}={}){let o=Ot[e.c],l=o.look,c=o.size/100*r,h=31,d=31,f=25,u=25,p=46,y=D=>Math.cos(D[0]*tn)*h+Math.cos((D[0]-D[1])*tn)*d,g=Math.max(y(n.lN),y(n.lF),16)+6;t.save(),t.translate(e.x/Qe,ke-e.y/Qe),t.scale(e.face*c*(n.spin?-1:1),c),n.alpha!==void 0&&(t.globalAlpha=Math.max(.05,n.alpha)),a&&(t.globalAlpha*=.35),t.save(),t.scale(1,.25),t.fillStyle="rgba(0,0,0,.28)",t.beginPath(),t.arc(0,e.y/Qe*4/c,34,0,Math.PI*2),t.fill(),t.restore(),n.rot&&(t.translate(0,-24),t.rotate(n.rot*tn),t.translate(0,24));let m=-g+(n.dip||0),b=n.lean*tn,x=Math.sin(b)*p,v=m-Math.cos(b)*p,C=x*.92-2,S=v+7,E=l.skin,k=l.gi,J=l.pants,_=l.sleeve==="skin"?E:l.sleeve||(k==="#ffffff"?"#f4f4fb":k);Il(t,C-4,S,n.aF[0],f,n.aF[0]+n.aF[1],u,l.robot?12:11,Ba(_==="#ffffff"?"#e6e6f0":_,.85));let w=j0(C-4,S,n.aF,f,u);if(nn(t,w[0],w[1],7.5,Ba(E,.9)),Il(t,-4,m,n.lF[0],h,n.lF[0]-n.lF[1],d,14,Ba(J==="#ffffff"?"#e6e6f0":J,.85)),Q0(t,J0(-4,m,n.lF,h,d),n.lF[0]-n.lF[1],Ba(E,.9)),t.save(),t.translate(0,m),t.rotate(b),Zt(t,-15,-p-4,30,p+10,10),t.fillStyle=k,t.fill(),t.lineWidth=3,t.strokeStyle=Ze,t.stroke(),t.strokeStyle=l.trim,t.lineWidth=3.5,t.beginPath(),t.moveTo(-8,-p+2),t.lineTo(4,-p*.45),t.lineTo(10,-p+2),t.stroke(),l.open&&(t.fillStyle=E,t.beginPath(),t.moveTo(-8,-p),t.lineTo(10,-p),t.lineTo(2,-p*.5),t.closePath(),t.fill()),l.tank&&(t.fillStyle=E,t.beginPath(),t.moveTo(-15,-p-2),t.quadraticCurveTo(-4,-p+14,0,-p-4),t.fill(),t.beginPath(),t.moveTo(15,-p-2),t.quadraticCurveTo(6,-p+14,2,-p-4),t.fill()),l.apron&&(t.fillStyle=l.apron,Zt(t,-11,-p*.62,24,p*.62+18,5),t.fill(),t.lineWidth=2,t.strokeStyle=Ze,t.stroke(),t.fillStyle=l.trim,t.fillRect(-3,-p*.3,8,6)),l.robot){t.strokeStyle="rgba(29,22,72,.45)",t.lineWidth=2,t.beginPath(),t.moveTo(-12,-p*.5),t.lineTo(12,-p*.5),t.stroke(),t.fillStyle=l.aura,t.beginPath(),t.arc(2,-p*.72,5+Math.sin(s/5),0,7),t.fill(),t.stroke();for(let D of[-9,9])t.fillStyle=Ze,t.beginPath(),t.arc(D,-p+6,1.8,0,7),t.fill()}if(l.scarf){let D=Math.sin(s/5)*3;t.fillStyle="#ff4d5e",t.strokeStyle=Ze,t.lineWidth=2.5,Zt(t,-14,-p-6,30,9,4),t.fill(),t.stroke(),t.beginPath(),t.moveTo(-12,-p),t.quadraticCurveTo(-26,-p+10+D,-30,-p+22-D),t.lineTo(-22,-p+22),t.quadraticCurveTo(-18,-p+8,-8,-p+2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#ffffff";for(let U=0;U<4;U++)t.fillRect(-12+U*7,-p-4,3,3)}t.fillStyle=l.belt,t.fillRect(-16,-6,32,7),t.strokeStyle=Ze,t.lineWidth=2,t.strokeRect(-16,-6,32,7),t.beginPath(),t.moveTo(-10,1),t.lineTo(-16-Math.sin(s/5)*3,12),t.moveTo(-6,1),t.lineTo(-8,14),t.strokeStyle=l.belt,t.lineWidth=4,t.stroke(),t.restore(),Il(t,4,m,n.lN[0],h,n.lN[0]-n.lN[1],d,14,J),Q0(t,J0(4,m,n.lN,h,d),n.lN[0]-n.lN[1],E);let q=x+Math.sin(b)*16,z=v-Math.cos(b)*16;nm(t,q,z,(n.head+n.lean*.4)*tn,o,i,s,e),Il(t,C+4,S,n.aN[0],f,n.aN[0]+n.aN[1],u,l.robot?12:11,_);let P=j0(C+4,S,n.aN,f,u);nn(t,P[0],P[1],l.robot?9:8,l.gloves||E),i&&(t.globalCompositeOperation="source-atop",t.fillStyle=`rgba(255,255,255,${.6*i})`,t.fillRect(-90,-220,180,260)),t.restore()}function j0(t,e,n,i,s){let r=n[0],a=n[0]+n[1],o=t+Math.sin(r*tn)*i,l=e+Math.cos(r*tn)*i;return[o+Math.sin(a*tn)*s,l+Math.cos(a*tn)*s]}function J0(t,e,n,i,s){let r=t+Math.sin(n[0]*tn)*i,a=e+Math.cos(n[0]*tn)*i,o=n[0]-n[1];return[r+Math.sin(o*tn)*s,a+Math.cos(o*tn)*s]}function Q0(t,[e,n],i,s){t.save(),t.translate(e,n),t.rotate(-i*tn*.3),t.beginPath(),t.ellipse(5,2,11,6,0,0,Math.PI*2),t.fillStyle=s,t.fill(),t.lineWidth=3,t.strokeStyle=Ze,t.stroke(),t.restore()}function Zt(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}function nm(t,e,n,i,s,r,a,o){let l=s.look,c=21;if(t.save(),t.translate(e,n),t.rotate(i),l.hairStyle==="long"&&(t.fillStyle=l.hair,t.beginPath(),t.moveTo(-16,-8),t.quadraticCurveTo(-30,18,-22,34),t.lineTo(-6,20),t.closePath(),t.fill(),t.lineWidth=3,t.strokeStyle=Ze,t.stroke()),l.hairStyle==="bun"&&nn(t,-16,-18,10,l.hair),l.hairStyle==="ponytail"){let f=Math.sin(a/5+o.side)*5;t.fillStyle=l.hair,t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.moveTo(-14,-14),t.quadraticCurveTo(-38,-10+f,-40,18-f),t.quadraticCurveTo(-26,4,-12,-4),t.closePath(),t.fill(),t.stroke()}if(l.hairStyle==="pigtails")for(let f of[-1,1])t.fillStyle=l.hair,t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.ellipse(-20,-4+f*12+Math.sin(a/4+f)*2,9,7,f*.5,0,7),t.fill(),t.stroke();if(l.robot){Zt(t,-20,-22,42,42,10),t.fillStyle=l.skin,t.fill(),t.lineWidth=3,t.strokeStyle=Ze,t.stroke(),t.fillStyle="#1d1648",Zt(t,-2,-10,22,12,4),t.fill(),t.fillStyle=l.aura,t.fillRect(2+a/2%12,-7,5,6),t.beginPath(),t.moveTo(0,-22),t.lineTo(-2,-32),t.stroke(),t.fillStyle="#ff4d5e",t.beginPath(),t.arc(-2,-34,4,0,7),t.fill(),t.stroke(),t.strokeStyle=Ze,t.lineWidth=2;for(let f=0;f<3;f++)t.beginPath(),t.moveTo(4+f*5,10),t.lineTo(4+f*5,15),t.stroke();t.restore();return}if(nn(t,0,0,c,l.skin),t.fillStyle=l.hair,t.strokeStyle=Ze,t.lineWidth=3,l.hairStyle==="spike"){t.beginPath(),t.moveTo(-21,-2);let f=[[-22,-18],[-12,-14],[-10,-30],[-1,-18],[6,-32],[10,-17],[20,-24],[19,-8],[22,-2]];for(let[u,p]of f)t.lineTo(u,p);t.quadraticCurveTo(10,-12,-21,-2),t.closePath(),t.fill(),t.stroke()}else if(l.hairStyle==="bun")t.beginPath(),t.arc(0,-2,c,Math.PI*1.02,Math.PI*1.98),t.quadraticCurveTo(4,-8,-21,-4),t.closePath(),t.fill(),t.stroke();else if(l.hairStyle==="long")t.beginPath(),t.arc(0,-2,c,Math.PI*1.05,Math.PI*1.95),t.quadraticCurveTo(0,-12,-21,-4),t.closePath(),t.fill(),t.stroke();else if(l.hairStyle==="ponytail"||l.hairStyle==="pigtails")t.beginPath(),t.arc(0,-2,c,Math.PI*1,Math.PI*1.98),t.quadraticCurveTo(8,-6,2,-14),t.quadraticCurveTo(-6,-4,-21,-2),t.closePath(),t.fill(),t.stroke();else if(l.hairStyle==="flat")t.beginPath(),t.moveTo(-21,-4),t.lineTo(-20,-20),t.lineTo(18,-22),t.lineTo(20,-12),t.quadraticCurveTo(0,-14,-21,-4),t.closePath(),t.fill(),t.stroke();else if(l.hairStyle==="topknot")t.beginPath(),t.arc(0,-2,c,Math.PI*1.05,Math.PI*1.95),t.quadraticCurveTo(0,-12,-21,-4),t.closePath(),t.fill(),t.stroke(),nn(t,-4,-26,7,l.hair);else if(l.hairStyle==="scarf"){t.fillStyle=l.band||"#ff4d5e",t.beginPath(),t.arc(0,-3,c+1,Math.PI*.95,Math.PI*2.02),t.quadraticCurveTo(0,-10,-22,-1),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff";for(let f=0;f<5;f++)t.beginPath(),t.arc(-14+f*7,-16+Math.abs(f-2)*2,1.8,0,7),t.fill();t.fillStyle=l.band||"#ff4d5e",t.beginPath(),t.moveTo(-18,-12),t.lineTo(-32,-18+Math.sin(a/4)*3),t.lineTo(-28,-6),t.closePath(),t.fill(),t.stroke()}else if(l.hairStyle==="cap")t.fillStyle=l.gi,t.beginPath(),t.arc(0,-4,c,Math.PI,Math.PI*2),t.closePath(),t.fill(),t.stroke(),t.fillStyle=l.band||l.trim,t.beginPath(),t.moveTo(-20,-6),t.lineTo(-36,-4),t.lineTo(-34,0),t.lineTo(-18,-2),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.beginPath(),t.arc(4,-14,5,0,7),t.fill();else if(l.hairStyle==="mask")t.fillStyle=l.gi,t.beginPath(),t.arc(0,0,c,0,Math.PI*2),t.fill(),t.stroke(),t.fillStyle=l.skin,Zt(t,0,-9,21,12,5),t.fill(),t.lineWidth=2,t.stroke(),t.lineWidth=3;else if(l.hairStyle==="hat"){t.fillStyle=l.hair,t.beginPath(),t.arc(0,-4,c,Math.PI*1.05,Math.PI*1.95),t.fill(),t.fillStyle="#f2d27a",t.beginPath(),t.moveTo(-34,-10),t.lineTo(2,-40),t.lineTo(36,-10),t.quadraticCurveTo(0,-4,-34,-10),t.closePath(),t.fill(),t.stroke(),t.strokeStyle="rgba(29,22,72,.35)",t.lineWidth=1.5;for(let f of[-16,0,16])t.beginPath(),t.moveTo(2,-38),t.lineTo(f,-8),t.stroke();t.strokeStyle=Ze,t.lineWidth=3}else l.hairStyle==="bald"&&(t.fillStyle="rgba(255,255,255,.35)",t.beginPath(),t.ellipse(-4,-12,7,4,-.4,0,Math.PI*2),t.fill());if(l.band&&!["scarf","cap","hat"].includes(l.hairStyle)){t.fillStyle=l.band,t.fillRect(-21,-12,42,7),t.strokeRect(-21,-12,42,7);let f=Math.sin(a/4+o.side)*4;t.beginPath(),t.moveTo(-20,-9),t.quadraticCurveTo(-34,-6+f,-44,-2-f),t.lineTo(-42,4-f),t.quadraticCurveTo(-32,2+f,-20,-4),t.closePath(),t.fill(),t.stroke()}let h=["hit","fall","down","ko","lose"].includes(o.st),d=!h&&(a+o.side*37)%150<5;if(t.fillStyle=Ze,t.strokeStyle=Ze,h){t.lineWidth=3;for(let f of[6,15])t.beginPath(),t.moveTo(f-3,-5),t.lineTo(f+3,1),t.moveTo(f+3,-5),t.lineTo(f-3,1),t.stroke()}else d?(t.lineWidth=3,t.beginPath(),t.moveTo(4,-2),t.lineTo(9,-2),t.moveTo(13,-2),t.lineTo(18,-2),t.stroke()):(t.beginPath(),t.ellipse(7,-2,2.6,4,0,0,7),t.ellipse(16,-2,2.6,4,0,0,7),t.fill());t.lineWidth=3,t.beginPath(),t.moveTo(3,-10),t.lineTo(10,-7),t.moveTo(13,-7),t.lineTo(20,-10),t.stroke(),t.lineWidth=2.5,t.beginPath(),l.hairStyle==="mask"||(o.st==="atk"||o.st==="win"?(t.ellipse(13,9,4,3.5,0,0,7),t.fillStyle="#7a2340",t.fill(),t.stroke()):h?(t.ellipse(13,10,3,4,0,0,7),t.fillStyle="#7a2340",t.fill(),t.stroke()):(t.moveTo(8,9),t.lineTo(17,8),t.stroke())),l.mustache&&(t.fillStyle=Ze,t.beginPath(),t.moveTo(5,5),t.quadraticCurveTo(13,1,21,5),t.quadraticCurveTo(13,8,5,5),t.fill()),l.beard&&(t.fillStyle=l.longBeard?"#f1f1f1":"#3a2a20",t.lineWidth=3,t.beginPath(),t.moveTo(0,8),t.quadraticCurveTo(10,l.longBeard?44:26,20,10),t.quadraticCurveTo(12,16,0,8),t.closePath(),t.fill(),t.stroke(),l.longBeard||(t.beginPath(),t.moveTo(6,5),t.lineTo(20,4),t.stroke())),t.fillStyle="rgba(255,120,140,.35)",t.beginPath(),t.arc(16,6,4,0,7),t.fill(),t.restore()}function D2(t){let e=t.createLinearGradient(0,0,0,ke);e.addColorStop(0,"#1b1446"),e.addColorStop(.6,"#4a2f7d"),e.addColorStop(1,"#ff8f6b"),t.fillStyle=e,t.fillRect(0,0,Le,ke),t.fillStyle="rgba(255,255,255,.8)";for(let o=0;o<50;o++)t.fillRect(o*173%Le,o*61%150,1.8,1.8);nn(t,820,70,30,"#fff3c4",0),t.fillStyle="#2b1f5c";for(let o=-20;o<Le;o+=70){let l=140+o*37%90;t.fillRect(o,ke-90-l,64,l+90)}let n=[["#ffb3c1","#c95d7a"],["#ffe08a","#c9962b"],["#a5e3c5","#3f9d72"],["#b7c7ff","#5468c9"],["#ffc9a0","#c97a3f"],["#d6c2ff","#7b5fc9"]],i=-10,s=0,r=["PH\u1EDE","C\xC0 PH\xCA","B\xC1NH M\xCC","T\u1EA0P HO\xC1","B\xDAN CH\u1EA2","TR\xC0 \u0110\xC1"];for(;i<Le;){let o=150+s*53%40,l=250+s*71%70,[c,h]=n[s%n.length];t.fillStyle=c,t.fillRect(i,ke-l,o,l),t.lineWidth=3,t.strokeStyle=Ze,t.strokeRect(i,ke-l,o,l),t.fillStyle=h,t.fillRect(i-6,ke-l-12,o+12,14),t.strokeRect(i-6,ke-l-12,o+12,14);for(let d=0;d<2;d++){let f=ke-l+30+d*85;for(let u=0;u<2;u++){let p=i+20+u*(o/2-6);t.fillStyle=(s+d+u)%3?"#fff1a8":"#3a2f6a",t.fillRect(p,f,o/2-34,46),t.strokeRect(p,f,o/2-34,46),t.beginPath(),t.moveTo(p+(o/2-34)/2,f),t.lineTo(p+(o/2-34)/2,f+46),t.stroke()}t.strokeStyle=Ze,t.lineWidth=2.5,t.beginPath(),t.moveTo(i+8,f+56),t.lineTo(i+o-8,f+56),t.stroke();for(let u=i+12;u<i+o-8;u+=9)t.beginPath(),t.moveTo(u,f+56),t.lineTo(u,f+72),t.stroke();t.beginPath(),t.moveTo(i+8,f+72),t.lineTo(i+o-8,f+72),t.stroke(),t.fillStyle="#4caf50",t.beginPath(),t.arc(i+o-22,f+50,10,0,7),t.fill(),t.stroke()}t.fillStyle=s%2?"#ff4d5e":"#2f6bff",Zt(t,i+14,ke-110,o-28,30,6),t.fill(),t.stroke(),t.fillStyle="#fff",t.font="800 17px system-ui, sans-serif",t.textAlign="center",t.fillText(r[s%r.length],i+o/2,ke-89),t.fillStyle=Ba(h,.7),t.fillRect(i+18,ke-74,o-36,74),t.strokeRect(i+18,ke-74,o-36,74),t.strokeStyle="rgba(0,0,0,.25)";for(let d=ke-70;d<ke;d+=8)t.beginPath(),t.moveTo(i+20,d),t.lineTo(i+o-20,d),t.stroke();t.strokeStyle=Ze,i+=o,s++}t.strokeStyle="#120c2c",t.lineWidth=2;for(let o of[118,132,150])t.beginPath(),t.moveTo(0,o),t.quadraticCurveTo(Le/2,o+40,Le,o-6),t.stroke();for(let o=0;o<9;o++){let l=60+o*105,c=128+Math.sin(o)*6+18*Math.sin(o/8*Math.PI);t.strokeStyle=Ze,t.beginPath(),t.moveTo(l,c-12),t.lineTo(l,c),t.stroke(),t.fillStyle=o%2?"#ff4d5e":"#ffc43d",t.beginPath(),t.ellipse(l,c+12,11,14,0,0,7),t.fill(),t.lineWidth=2.5,t.stroke(),t.fillStyle="rgba(255,240,180,.25)",t.beginPath(),t.arc(l,c+12,24,0,7),t.fill()}t.fillStyle="#b9a6d9",t.fillRect(0,ke,Le,ft-ke),t.strokeStyle="rgba(29,22,72,.25)",t.lineWidth=2;for(let o=0;o<Le;o+=48)t.beginPath(),t.moveTo(o,ke),t.lineTo(o-30,ft),t.stroke();t.beginPath(),t.moveTo(0,ke+30),t.lineTo(Le,ke+30),t.stroke(),t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.moveTo(0,ke),t.lineTo(Le,ke),t.stroke();let a=(o,l)=>{t.fillStyle=l,Zt(t,o,ke-26,26,8,3),t.fill(),t.stroke(),t.fillRect(o+3,ke-18,4,18),t.fillRect(o+19,ke-18,4,18),t.strokeRect(o+3,ke-18,4,18),t.strokeRect(o+19,ke-18,4,18)};a(30,"#ff4d5e"),a(66,"#2f6bff"),a(880,"#ffc43d"),t.fillStyle="#3a2f6a",t.beginPath(),t.arc(130,ke-12,12,0,7),t.arc(186,ke-12,12,0,7),t.fill(),t.stroke(),t.fillStyle="#ff6fb5",Zt(t,124,ke-40,70,20,8),t.fill(),t.stroke()}function U2(t){let e=t.createLinearGradient(0,0,0,ke);e.addColorStop(0,"#ff7eb3"),e.addColorStop(.55,"#ffb347"),e.addColorStop(1,"#ffe08a"),t.fillStyle=e,t.fillRect(0,0,Le,ke),nn(t,700,230,70,"#fff3c4",0),t.fillStyle="#7a3f6a",t.fillRect(0,300,Le,40);for(let s=20;s<Le;s+=90){let r=90+s*13%50;t.fillRect(s,300-r,6,r);for(let a=0;a<5;a++)t.beginPath(),t.ellipse(s+3+Math.cos(a*1.3)*22,300-r+Math.sin(a*1.3)*6,26,7,a*1.3,0,7),t.fill()}let n=t.createLinearGradient(0,330,0,ke);n.addColorStop(0,"#c56a8f"),n.addColorStop(1,"#6a4f9e"),t.fillStyle=n,t.fillRect(0,330,Le,ke-330),t.strokeStyle="rgba(255,240,200,.45)",t.lineWidth=3;for(let s=345;s<ke;s+=18)for(let r=s*7%60;r<Le;r+=120)t.beginPath(),t.moveTo(r,s),t.lineTo(r+40,s),t.stroke();let i=(s,r,a,o)=>{t.save(),t.translate(s,r),t.scale(a,a),t.fillStyle="#6b3e1f",t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.moveTo(-110,0),t.quadraticCurveTo(0,34,110,0),t.lineTo(90,-10),t.lineTo(-90,-10),t.closePath(),t.fill(),t.stroke(),o.forEach((l,c)=>nn(t,-70+c*22,-18-c%2*8,12,l,2.5)),t.fillStyle="#ff6b6b",t.fillRect(50,-48,18,30),t.strokeRect(50,-48,18,30),t.fillStyle="#f2d27a",t.beginPath(),t.moveTo(38,-46),t.lineTo(59,-70),t.lineTo(80,-46),t.closePath(),t.fill(),t.stroke(),t.beginPath(),t.moveTo(-90,-10),t.lineTo(-96,-120),t.stroke(),nn(t,-96,-118,9,o[0],2.5),nn(t,-84,-106,8,o[2]||"#ffd43b",2.5),t.restore()};i(170,395,1,["#ffd43b","#3ecf6e","#ff6b6b","#ff9f43","#ffd43b"]),i(560,380,.8,["#3ecf6e","#ff6b6b","#ffd43b","#ff9f43"]),i(850,410,1.05,["#ff9f43","#ffd43b","#3ecf6e","#ff6b6b","#3ecf6e"]),t.fillStyle="#a0683d",t.fillRect(0,ke,Le,ft-ke),t.strokeStyle="rgba(29,22,72,.35)",t.lineWidth=2;for(let s=0;s<Le;s+=36)t.beginPath(),t.moveTo(s,ke),t.lineTo(s,ft),t.stroke();t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.moveTo(0,ke),t.lineTo(Le,ke),t.stroke();for(let s of[60,300,640,900])t.fillStyle="#6b3e1f",t.fillRect(s,ke-40,14,44),t.strokeRect(s,ke-40,14,44)}function O2(t){let e=t.createLinearGradient(0,0,0,ke);e.addColorStop(0,"#5ec8ff"),e.addColorStop(1,"#e9f8ff"),t.fillStyle=e,t.fillRect(0,0,Le,ke),t.fillStyle="rgba(255,255,255,.9)";for(let i=0;i<6;i++){let s=i*173%Le,r=60+i*41%120;t.beginPath(),t.arc(s,r,24,0,7),t.arc(s+28,r-10,30,0,7),t.arc(s+60,r,22,0,7),t.fill()}let n=(i,s,r,a)=>{t.fillStyle=r,t.beginPath(),t.moveTo(0,ke);for(let o=0;o<=Le;o+=20)t.lineTo(o,i-Math.abs(Math.sin((o+a)/130))*s-Math.sin((o+a)/37)*10);t.lineTo(Le,ke),t.fill()};n(330,160,"#8fa8d6",40),t.fillStyle="#ffffff";for(let i=0;i<=Le;i+=20){let s=330-Math.abs(Math.sin((i+40)/130))*160-Math.sin((i+40)/37)*10;s<230&&(t.beginPath(),t.arc(i,s+6,12,0,7),t.fill())}n(400,90,"#5d7fb8",300),n(440,50,"#3f8f5f",120),t.strokeStyle="#1d1648",t.lineWidth=2.5,t.beginPath(),t.moveTo(0,120),t.quadraticCurveTo(480,190,Le,90),t.stroke(),t.fillStyle="#ff4d5e",Zt(t,610,160,46,36,6),t.fill(),t.stroke(),t.fillStyle="#fff3c4",t.fillRect(618,168,30,12),t.beginPath(),t.moveTo(633,160),t.lineTo(633,150),t.stroke(),t.fillStyle="#b5482c",t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.moveTo(60,330),t.quadraticCurveTo(140,300,220,270),t.quadraticCurveTo(300,300,380,330),t.lineTo(340,326),t.lineTo(100,326),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#ffe08a",t.fillRect(120,326,200,70),t.strokeRect(120,326,200,70),t.fillStyle="#7a2e1d",t.fillRect(200,346,40,50),t.strokeRect(200,346,40,50),t.fillStyle="#c8c3d9",t.fillRect(0,ke,Le,ft-ke),t.strokeStyle="rgba(29,22,72,.25)",t.lineWidth=2;for(let i=ke+18;i<ft;i+=22)t.beginPath(),t.moveTo(0,i),t.lineTo(Le,i),t.stroke();for(let i=0;i<Le;i+=70)t.beginPath(),t.moveTo(i+i/70%2*35,ke),t.lineTo(i+i/70%2*35,ft),t.stroke();t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.moveTo(0,ke),t.lineTo(Le,ke),t.stroke()}var sd=[{name:"Ph\u1ED1 C\u1ED5 V\u1EC1 \u0110\xEAm",draw:D2,crowd:[[60,230],[250,220],[440,305],[640,230],[820,305],[160,305],[540,220],[900,220]]},{name:"Ch\u1EE3 N\u1ED5i C\xE1i R\u0103ng",draw:U2,crowd:[[120,370],[230,380],[520,355],[600,360],[800,385],[900,390],[350,330],[700,330]]},{name:"\u0110\u1EC9nh N\xFAi M\xE2y",draw:O2,crowd:[[150,320],[260,318],[633,186],[420,380],[760,400],[880,360],[60,400],[330,420]]}],td={};function F2(t){if(!td[t]){let e=typeof OffscreenCanvas<"u"?new OffscreenCanvas(Le,ft):Object.assign(document.createElement("canvas"),{width:Le,height:ft});sd[t].draw(e.getContext("2d")),td[t]=e}return td[t]}function B2(t,e,n,i,s){let r=sd[s].crowd;e.slice(0,r.length).forEach((a,o)=>{let[l,c]=r[o],h=c+Math.sin(n/6+o)*(i?6:1.5)-(i?4:0);t.font='26px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',t.textAlign="center",t.fillText(a,l,h),i&&o%2===0&&(t.font="14px system-ui",t.fillText(["\u{1F64C}","\u{1F525}","\u{1F44F}"][o%3],l+16,h-18))})}var rd=(t,e)=>typeof OffscreenCanvas<"u"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e}),nd={};function im(t,e=96){let n=t+e;if(nd[n])return nd[n];let i=rd(e,e),s=i.getContext("2d");return s.translate(e/2,e/2+e*.06),s.scale(e/62,e/62),nm(s,-4,0,0,Ot[t],0,0,{side:0,st:"idle"}),nd[n]=i,i}var Nl=class{constructor(){this.list=[],this.seen=new Set,this.shake=0,this.flash=0,this.banner=null,this.trail=[null,null],this.cheer=0}add(e,n){if(this.seen.has(e.key))return!1;this.seen.add(e.key),this.seen.size>3e3&&(this.seen=new Set([...this.seen].slice(-1500)));let i=e.k;return i==="hit"?(this.list.push({k:"spark",x:e.x/Qe,y:ke-e.y/Qe,born:n,big:e.big}),e.big&&(this.shake=Math.max(this.shake,8)),this.cheer=40):i==="block"?this.list.push({k:"guard",x:e.x/Qe,y:ke-e.y/Qe,born:n}):i==="throw"||i==="grab"?(this.list.push({k:"spark",x:e.x/Qe,y:ke-e.y/Qe,born:n,big:1}),this.shake=14,this.cheer=50):i==="quake"?(this.list.push({k:"quake",x:e.x/Qe,born:n}),this.shake=10):i==="clash"?this.list.push({k:"spark",x:e.x/Qe,y:ke-e.y/Qe,born:n,big:1,col:"#9be7ff"}):i==="tele"?this.list.push({k:"smoke",side:e.side,born:n}):i==="special"?this.list.push({k:"name",side:e.side,text:e.name,born:n}):i==="super"?(this.flash=30,this.list.push({k:"cutin",side:e.side,text:e.name,born:n}),this.cheer=60):i==="counter"?(this.list.push({k:"pop",x:e.x/Qe,y:ke-e.y/Qe-40,text:"PH\u1EA2N \u0110\xD2N!",col:"#74c0fc",born:n}),this.shake=10,this.cheer=50):i==="armor"?(this.list.push({k:"spark",x:e.x/Qe,y:ke-e.y/Qe,born:n,col:"#ff8787"}),this.list.push({k:"pop",x:e.x/Qe,y:ke-e.y/Qe-40,text:"G\u1ED2NG!",col:"#ff8787",born:n})):i==="flex"?this.list.push({k:"name",side:e.side,text:"G\u1ED2NG C\u01A0! \u{1F4AA}",born:n}):i==="splash"?this.list.push({k:"guard",x:e.x/Qe,y:ke-6,born:n}):i==="dash"?this.list.push({k:"dust",x:e.x/Qe,dir:e.dir,born:n}):i==="round"?this.banner={text:`HI\u1EC6P ${e.n}`,born:n,sub:""}:i==="fight"?this.banner={text:"\u0110\xC1NH!",born:n,hot:1}:i==="ko"&&(this.banner={text:e.why==="time"?"H\u1EBET GI\u1EDC!":e.w===-1?"HAI B\xCAN G\u1EE4C!":"K.O.!",born:n,hot:1,big:1},this.shake=16,this.cheer=90),!0}},Oa=null,Fa=null;function z2(){if(Fa)return Fa;Fa=rd(Le,ft);let t=Fa.getContext("2d");t.fillStyle="rgba(0,0,0,.16)";for(let n=0;n<ft;n+=3)t.fillRect(0,n,Le,1);let e=t.createRadialGradient(Le/2,ft/2,ft*.45,Le/2,ft/2,Le*.65);return e.addColorStop(0,"rgba(0,0,0,0)"),e.addColorStop(1,"rgba(0,0,0,.45)"),t.fillStyle=e,t.fillRect(0,0,Le,ft),Fa}function sm(t,e,n,i,s={}){let r=(s.stage??0)%sd.length,a=s.pixel!==!1,o=a?.5:1;(!Oa||Oa.width!==Le*o)&&(Oa=rd(Le*o,ft*o));let l=Oa.getContext("2d");l.save(),l.setTransform(o,0,0,o,0,0),H2(l,e,n,i,s,r),l.restore(),t.save();let c=0,h=0;n.shake>0&&(c=(Math.random()-.5)*n.shake,h=(Math.random()-.5)*n.shake,n.shake*=.85,n.shake<.5&&(n.shake=0)),t.imageSmoothingEnabled=!a,t.fillStyle="#000",t.fillRect(0,0,Le,ft),t.drawImage(Oa,c,h,Le,ft),t.imageSmoothingEnabled=!0,t.restore(),V2(t,e,n,i),q2(t,e,n,i,s),s.vs&&X2(t,s.vs,i),s.crt!==!1&&t.drawImage(z2(),0,0)}var Ll=1.3;function H2(t,e,n,i,s,r){let a=Le/Ll/2,o=Math.max(a,Math.min(Le-a,(e.f[0].x+e.f[1].x)/2/Qe));n.cam=n.cam===void 0||Math.abs(n.cam-o)>200?o:n.cam+(o-n.cam)*.2,t.fillStyle="#000",t.fillRect(0,0,Le,ft),t.scale(Ll,Ll),t.translate(-(n.cam-a),-(ke-(ft-58)/Ll)),t.drawImage(F2(r),0,0),B2(t,s.crowd||[],i,n.cheer>0,r),n.cheer>0&&n.cheer--,n.flash>0&&(t.fillStyle=`rgba(10,6,30,${Math.min(.6,n.flash/30)})`,t.fillRect(0,0,Le,ft),n.flash--);for(let c of n.list)if(c.k==="quake"){let h=i-c.born;t.strokeStyle=`rgba(255,200,80,${Math.max(0,1-h/24)})`,t.lineWidth=6,t.beginPath(),t.ellipse(c.x,ke,h*9,10,0,0,Math.PI*2),t.stroke()}let l=e.f[0].st==="atk"?[1,0]:[0,1];for(let c of l){let h=e.f[c],d=tm(h,e,i),f=h.st==="atk"&&h.mv&&ed(h.c)[h.mv];if(h.st==="run"||f&&f.special&&["dash","rush","cross","tayson","shadow","roll","armor","tiger","dive"].includes(f.type)&&(h.vx||h.vy))for(let u=3;u>=1;u--)id(t,{...h,x:h.x-h.vx*u*3},d,{tick:i,ghost:!0});f&&f.sup&&h.t<f.s+f.a&&em(t,h,Ot[h.c].look.aura,i),h.buff>0&&em(t,h,"#ff4d5e",i),f&&f.counter&&h.t>=f.s&&h.t<f.s+f.a&&(t.strokeStyle=`rgba(150,220,255,${.5+Math.sin(i)*.3})`,t.lineWidth=5,t.beginPath(),t.ellipse(h.x/Qe,ke-h.y/Qe-75,46,88,0,0,7),t.stroke()),f&&f.pose==="charge"&&f.type==="charge"&&h.t>=f.s&&h.t<f.s+f.a&&rm(t,h.x/Qe+h.face*10,ke,h.face,i),id(t,h,d,{tick:i}),f&&W2(t,h,f,i),f&&f.type==="beam"&&h.t>=f.s&&h.t<f.s+f.a&&Y2(t,h,f,i,Ot[h.c].super.color||"#4dabf7")}for(let c of e.proj)G2(t,c,i);n.list=n.list.filter(c=>i-c.born<(c.k==="cutin"?50:c.k==="name"?45:26));for(let c of n.list){let h=i-c.born;if(c.k==="spark")Z2(t,c.x,c.y,h,c.big,c.col);else if(c.k==="guard")t.strokeStyle=`rgba(120,200,255,${Math.max(0,1-h/14)})`,t.lineWidth=5,t.beginPath(),t.arc(c.x,c.y,10+h*2.2,-1.2,1.2),t.stroke();else if(c.k==="smoke"){let d=e.f[c.side];t.fillStyle=`rgba(230,220,255,${Math.max(0,.7-h/30)})`;for(let f=0;f<6;f++)t.beginPath(),t.arc(d.x/Qe+Math.cos(f)*h*2,ke-70+Math.sin(f*2)*h*1.5,14+h,0,7),t.fill()}else if(c.k==="dust"){t.fillStyle=`rgba(255,255,255,${Math.max(0,.6-h/20)})`;for(let d=0;d<3;d++)t.beginPath(),t.arc(c.x-c.dir*(h*2+d*10),ke-6-d*3,6+h*.6,0,7),t.fill()}else if(c.k==="pop")t.save(),t.globalAlpha=Math.max(0,1-h/26),t.font="italic 900 26px system-ui",t.textAlign="center",t.lineWidth=6,t.strokeStyle=Ze,t.strokeText(c.text,c.x,c.y-h),t.fillStyle=c.col,t.fillText(c.text,c.x,c.y-h),t.restore();else if(c.k==="name"){let d=e.f[c.side];t.save(),t.globalAlpha=45-h>10?1:(45-h)/10,t.font="italic 900 19px system-ui, sans-serif",t.textAlign="center",t.lineWidth=5,t.strokeStyle=Ze;let f=Math.max(90,Math.min(Le-90,d.x/Qe)),u=ke-205-Math.min(10,h);t.strokeText(c.text,f,u),t.fillStyle="#fff",t.fillText(c.text,f,u),t.restore()}}}function V2(t,e,n,i){for(let s of n.list){if(s.k!=="cutin")continue;let r=i-s.born,a=e.f[s.side],o=r<8?r/8:r>40?Math.max(0,(50-r)/10):1,l=170,c=120*o;t.save(),t.beginPath(),t.moveTo(0,l-c/2+20),t.lineTo(Le,l-c/2-20),t.lineTo(Le,l+c/2-20),t.lineTo(0,l+c/2+20),t.closePath(),t.fillStyle="rgba(20,10,50,.92)",t.fill(),t.clip(),t.strokeStyle=Ot[a.c].look.aura,t.globalAlpha=.6,t.lineWidth=3;for(let f=0;f<18;f++){let u=l-60+(f*37+r*30)%120;t.beginPath(),t.moveTo((f*97+r*60*(s.side?-1:1))%(Le+200)-100,u),t.lineTo((f*97+r*60*(s.side?-1:1))%(Le+200)+60,u-4),t.stroke()}t.globalAlpha=1;let h=s.side?Le-200-(1-o)*200:60+(1-o)*-200;t.drawImage(im(a.c,160),h,l-92,170,170),t.font="italic 900 40px system-ui, sans-serif",t.textAlign=s.side?"right":"left",t.lineWidth=8,t.strokeStyle=Ze;let d=s.side?Le-240:240;t.strokeText(s.text,d,l+14),t.fillStyle="#ffd43b",t.fillText(s.text,d,l+14),t.restore()}}function rm(t,e,n,i,s){t.save(),t.translate(e,n),t.scale(i,1),t.strokeStyle=Ze,t.lineWidth=3;for(let r of[-34,30,46])t.fillStyle="#2a2350",t.beginPath(),t.arc(r,-14,13,0,7),t.fill(),t.stroke(),t.strokeStyle="#ccc",t.beginPath(),t.moveTo(r+Math.cos(s/2)*10,-14+Math.sin(s/2)*10),t.lineTo(r-Math.cos(s/2)*10,-14-Math.sin(s/2)*10),t.stroke(),t.strokeStyle=Ze;t.fillStyle="#2f9e44",Zt(t,14,-56,46,30,8),t.fill(),t.stroke(),t.beginPath(),t.moveTo(-34,-14),t.lineTo(10,-30),t.lineTo(30,-14),t.stroke(),t.restore()}function G2(t,e,n){let i=e.x/Qe,s=ke-e.y/Qe,r=Ot[e.c],o=(r.specials.find(d=>d.glyph===e.glyph)||r.specials.find(d=>d.color)||{}).color||r.look.aura||"#4dabf7",l=e.glyph||"orb",c=Math.sign(e.vx)||e.face||1,h=["#ff4d5e","#ffd43b","#4dabf7","#38d9a9"];if(!["cyclo","tornado","missile","barbell"].includes(l)){for(let d=3;d>=1;d--)t.globalAlpha=.14,nn(t,i-c*d*11,s+Math.sin(n/2+d)*3,Math.max(4,e.w-d*3),o,0);t.globalAlpha=1}switch(t.save(),t.translate(i,s),t.strokeStyle=Ze,t.lineWidth=3,l){case"star":t.rotate(n/2),t.fillStyle=o,t.beginPath();for(let d=0;d<4;d++){let f=d/4*Math.PI*2;t.lineTo(Math.cos(f)*16,Math.sin(f)*16),t.lineTo(Math.cos(f+.78)*5,Math.sin(f+.78)*5)}t.closePath(),t.fill(),t.stroke();break;case"hat":t.rotate(n/2.5),t.fillStyle="#f2d27a",t.beginPath(),t.ellipse(0,0,28,10,0,0,7),t.fill(),t.stroke(),t.beginPath(),t.moveTo(-22,-2),t.lineTo(0,-20),t.lineTo(22,-2),t.closePath(),t.fill(),t.stroke();break;case"ball":nn(t,0,0,e.w,h[e.col||0]||o),t.fillStyle="rgba(255,255,255,.7)",t.beginPath(),t.arc(-4,-5,4,0,7),t.fill();break;case"marble":nn(t,0,0,9,h[e.col||0],2),t.fillStyle="rgba(255,255,255,.85)",t.beginPath(),t.arc(-3,-3,3,0,7),t.fill();break;case"bread":t.rotate(e.vy?Math.PI/2+.3:n/4),t.fillStyle="#e8a64a",t.beginPath(),t.ellipse(0,0,28,10,0,0,7),t.fill(),t.stroke(),t.strokeStyle="#8a5a2b",t.lineWidth=2;for(let d of[-12,0,12])t.beginPath(),t.moveTo(d-4,-6),t.lineTo(d+4,6),t.stroke();break;case"pate":t.rotate(n/3),t.fillStyle="#c97a3f",t.beginPath(),t.arc(0,0,16,0,7),t.fill(),t.stroke(),t.fillStyle="#ffd8a8",t.beginPath(),t.arc(-4,-4,5,0,7),t.fill();break;case"wave":t.strokeStyle=o,t.lineWidth=7;for(let d=0;d<3;d++)t.globalAlpha=1-d*.3,t.beginPath(),t.arc(-c*d*12,0,24+d*3+Math.sin(n/2)*2,c>0?-1.1:Math.PI-1.1,c>0?1.1:Math.PI+1.1),t.stroke();break;case"barbell":t.rotate(e.x/Qe/12*c),t.fillStyle="#666",t.fillRect(-30,-4,60,8),t.strokeRect(-30,-4,60,8);for(let d of[-1,1])t.fillStyle="#2a2350",t.beginPath(),t.arc(d*26,0,20,0,7),t.fill(),t.stroke(),t.fillStyle="#ff4d5e",t.beginPath(),t.arc(d*26,0,8,0,7),t.fill();break;case"hoop":t.rotate(n/3),t.lineWidth=8,t.strokeStyle="#ff6b00",t.beginPath(),t.arc(0,0,28,0,7),t.stroke(),t.lineWidth=3,t.strokeStyle="#ffd43b";for(let d=0;d<8;d++){let f=d/8*7;t.beginPath(),t.moveTo(Math.cos(f)*30,Math.sin(f)*30),t.lineTo(Math.cos(f)*(38+Math.sin(n+d)*4),Math.sin(f)*(38+Math.sin(n+d)*4)),t.stroke()}break;case"tornado":for(let d=0;d<7;d++){let f=60-d*20,u=16+d*8;t.strokeStyle=d%2?"#b197fc":"#e5dbff",t.lineWidth=6,t.beginPath(),t.ellipse(Math.sin(n/3+d)*8,f,u,7,0,0,7),t.stroke()}break;case"cyclo":t.restore(),rm(t,i,ke,c,n),t.save();break;case"missile":t.rotate(Math.atan2(-e.vy,e.vx)),t.fillStyle="#e9ecef",Zt(t,-16,-6,32,12,6),t.fill(),t.stroke(),t.fillStyle="#ff4d5e",t.beginPath(),t.moveTo(16,-6),t.lineTo(24,0),t.lineTo(16,6),t.fill(),t.fillStyle="#ffd43b",t.beginPath(),t.moveTo(-16,-4),t.lineTo(-28-Math.random()*8,0),t.lineTo(-16,4),t.fill();break;default:nn(t,0,0,22+Math.sin(n/2)*2,o),nn(t,c*4,-3,11,"#ffffff",0),r.id==="teo"&&(t.font="18px system-ui",t.textAlign="center",t.fillText("\u{1F35C}",0,7))}t.restore()}function W2(t,e,n,i){let s=e.t>=n.s&&e.t<n.s+n.a,r=Ot[e.c].size/100,a=e.x/Qe,o=ke-e.y/Qe,l=e.face;if(s){if(t.save(),t.lineCap="round",n.type==="stretch"||n.type==="whip"){let[,c,h,d]=n.hb,f=o-(c+d)/2*1,u=a+l*30*r,p=a+l*h;if(n.type==="stretch")t.strokeStyle=Ze,t.lineWidth=17,t.beginPath(),t.moveTo(u,f),t.lineTo(p,f),t.stroke(),t.strokeStyle=Ot[e.c].look.skin,t.lineWidth=11,t.stroke(),nn(t,p,f,11,Ot[e.c].look.skin);else{t.strokeStyle=Ze,t.lineWidth=9,t.beginPath(),t.moveTo(u,f);for(let y=1;y<=10;y++)t.lineTo(u+(p-u)*y/10,f+Math.sin(y+i)*6);t.stroke(),t.strokeStyle="#ff4d5e",t.lineWidth=5,t.stroke()}}else if(n.type==="pole"){let c=a+l*n.hb[2],h=ke-16;t.fillStyle="#e8a64a",t.strokeStyle=Ze,t.lineWidth=3,t.beginPath(),t.ellipse((a+l*20+c)/2,h,Math.abs(c-a-l*20)/2,9,0,0,7),t.fill(),t.stroke()}else if(n.type==="laser"){let c=o-103*r,h=a+l*920;t.strokeStyle="#38d9a9",t.lineWidth=16+Math.sin(i*2)*4,t.globalAlpha=.6,t.beginPath(),t.moveTo(a+l*40,c),t.lineTo(h,c),t.stroke(),t.strokeStyle="#fff",t.lineWidth=5,t.globalAlpha=1,t.stroke()}else if(n.type==="magnet"){t.strokeStyle="#ff4d5e",t.lineWidth=4;for(let c=0;c<4;c++){let h=(i*6+c*40)%160+30;t.globalAlpha=1-h/190,t.beginPath(),t.arc(a,o-100,h,l>0?-.6:Math.PI-.6,l>0?.6:Math.PI+.6),t.stroke()}}t.restore()}}function $2(t,e,n,i,s,r,a,o){let c=h=>{if(t.beginPath(),o===0){let d=e+i,f=d-i*h;t.moveTo(f+14,n),t.lineTo(d,n),t.lineTo(d-14,n+s),t.lineTo(f,n+s)}else{let d=e,f=d+i*h;t.moveTo(d,n),t.lineTo(f-14,n),t.lineTo(f,n+s),t.lineTo(d+14,n+s)}t.closePath()};if(c(1),t.fillStyle="#2a1f55",t.fill(),a>0&&(c(a),t.fillStyle="#ff2e4d",t.fill()),r>0){c(r);let h=t.createLinearGradient(0,n,0,n+s);h.addColorStop(0,"#fff6a8"),h.addColorStop(.5,r>.25?"#ffd43b":"#ff9f43"),h.addColorStop(1,r>.25?"#e0a800":"#e8590c"),t.fillStyle=h,t.fill()}c(1),t.lineWidth=4,t.strokeStyle=Ze,t.stroke(),t.lineWidth=1.5,t.strokeStyle="rgba(255,255,255,.6)",t.stroke()}function q2(t,e,n,i,s){let r=s.names||["",""],a=340,o=18,l=26;for(let h of[0,1]){let d=e.f[h],f=Ot[d.c],u=Math.max(0,d.hp)/d.max;n.trail[h]===null||n.trail[h]<u?n.trail[h]=u:d.st!=="hit"&&d.st!=="block"&&(n.trail[h]=Math.max(u,n.trail[h]-.008));let p=h===0?96:Le-96-a;$2(t,p,o,a,l,u,n.trail[h],h);let y=h===0?14:Le-14-74;t.fillStyle="#2a1f55",Zt(t,y,o-6,74,74,10),t.fill(),t.save(),Zt(t,y,o-6,74,74,10),t.clip(),t.fillStyle=f.look.aura,t.globalAlpha=.5,t.fillRect(y,o-6,74,74),t.globalAlpha=1,h===1&&(t.translate(y*2+74,0),t.scale(-1,1)),t.drawImage(im(d.c,96),y-6,o-10,86,86),t.restore(),t.lineWidth=4,t.strokeStyle=Ze,Zt(t,y,o-6,74,74,10),t.stroke(),t.font="italic 900 22px system-ui, sans-serif",t.textAlign=h===0?"left":"right",t.lineWidth=6,t.strokeStyle=Ze,t.fillStyle="#fff";let g=h===0?p+4:p+a-4;if(t.strokeText(f.name.toUpperCase(),g,o+l+24),t.fillText(f.name.toUpperCase(),g,o+l+24),r[h]){t.font="800 13px system-ui",t.lineWidth=4;let E=t.measureText(f.name.toUpperCase()).width;t.strokeText(r[h],g,o+l+42),t.fillStyle="#ffd43b",t.fillText(r[h],g,o+l+42)}for(let E=0;E<e.need;E++){let k=h===0?p+a-14-E*26:p+14+E*26,J=o+l+16;t.save(),t.translate(k,J),t.rotate(.2),t.fillStyle=E<d.wins?"#ffd43b":"#2a1f55",t.strokeStyle=Ze,t.lineWidth=3,Zt(t,-10,-9,20,18,4),t.fill(),t.stroke(),E<d.wins&&(t.font="900 13px system-ui",t.textAlign="center",t.fillStyle="#c2410c",t.fillText("V",0,5)),t.restore()}let m=ft-34,b=250,x=h===0?30:Le-30-b,v=d.meter/1e3;t.fillStyle="#2a1f55",Zt(t,x-3,m-3,b+6,20,6),t.fill();let C=t.createLinearGradient(x,0,x+b,0);if(v>=1){let E=i*9%360;C.addColorStop(0,`hsl(${E},95%,60%)`),C.addColorStop(1,`hsl(${(E+120)%360},95%,60%)`)}else C.addColorStop(0,"#228be6"),C.addColorStop(1,"#74c0fc");t.fillStyle=C,h===0?t.fillRect(x,m,b*v,14):t.fillRect(x+b*(1-v),m,b*v,14),t.strokeStyle=Ze,t.lineWidth=3,Zt(t,x-3,m-3,b+6,20,6),t.stroke(),t.font="italic 900 15px system-ui",t.textAlign=h===0?"left":"right",t.lineWidth=4;let S=v>=1?i%20<12?"\u2605 MAX \u2014 TUY\u1EC6T CHI\xCAU!":"":"N\u1ED8I L\u1EF0C";if(t.strokeText(S,h===0?x:x+b,m-8),t.fillStyle=v>=1?"#ffd43b":"#fff",t.fillText(S,h===0?x:x+b,m-8),d.comboT>0&&d.showCombo>=2){t.save();let E=Math.max(0,d.comboT-62)/8;t.translate(h===0?40:Le-40,150),t.scale(1+E*.4,1+E*.4),t.font="italic 900 44px system-ui",t.textAlign=h===0?"left":"right",t.lineWidth=8,t.strokeStyle=Ze,t.fillStyle="#ffd43b",t.strokeText(`${d.showCombo} \u0110\xD2N`,0,0),t.fillText(`${d.showCombo} \u0110\xD2N`,0,0),t.font="italic 900 18px system-ui",t.lineWidth=5,t.fillStyle="#ff6b6b",t.strokeText("LI\xCAN HO\xC0N!",0,22),t.fillText("LI\xCAN HO\xC0N!",0,22),t.restore()}}t.fillStyle="#2a1f55",Zt(t,Le/2-38,10,76,58,12),t.fill(),t.strokeStyle=Ze,t.lineWidth=4,t.stroke(),t.font="900 40px system-ui, sans-serif",t.textAlign="center",t.fillStyle=e.time&&e.timer<600&&i%30<15?"#ff6b6b":"#ffd43b",t.lineWidth=5,t.strokeStyle=Ze;let c=e.time?String(Math.ceil(e.timer/60)).padStart(2,"0"):"\u221E";if(t.strokeText(c,Le/2,54),t.fillText(c,Le/2,54),n.banner){let h=i-n.banner.born,d=n.banner.big?110:60;if(h>d)n.banner=null;else{let f=Math.min(1,h/8),u=h>d-12?(d-h)/12:1;t.save(),t.globalAlpha=u,t.translate(Le/2,240),t.scale(.4+f*.6+(n.banner.hot?Math.sin(h/3)*.03:0),.4+f*.6),t.rotate(-.05),t.font=`italic 900 ${n.banner.big?120:84}px system-ui, sans-serif`,t.textAlign="center",t.lineWidth=14,t.strokeStyle=Ze,t.lineJoin="round",t.strokeText(n.banner.text,0,0);let p=t.createLinearGradient(0,-80,0,10);p.addColorStop(0,"#fff6a8"),p.addColorStop(1,n.banner.hot?"#ff2e4d":"#ffb000"),t.fillStyle=p,t.fillText(n.banner.text,0,0),t.restore()}}if(e.phase==="end"){let h=e.winner,d=h<0?"HO\xC0!":`${Ot[e.f[h].c].name.toUpperCase()} TH\u1EAENG!`;t.save(),t.translate(Le/2,250),t.font="italic 900 66px system-ui",t.textAlign="center",t.lineWidth=12,t.strokeStyle=Ze,t.strokeText(d,0,0),t.fillStyle="#ffd43b",t.fillText(d,0,0);let f=h>=0?`\u201C${Ot[e.f[h].c].quote}\u201D`:"";f&&(t.font="italic 800 22px system-ui",t.lineWidth=6,t.strokeText(f,0,44),t.fillStyle="#fff",t.fillText(f,0,44)),s.endSub&&(t.font="800 18px system-ui",t.lineWidth=5,t.strokeText(s.endSub,0,80),t.fillStyle="#c9c0f0",t.fillText(s.endSub,0,80)),t.restore()}s.waiting&&(t.fillStyle="rgba(0,0,0,.5)",t.fillRect(0,ft/2+60,Le,50),t.font="800 22px system-ui",t.textAlign="center",t.fillStyle="#fff",t.fillText(s.waiting,Le/2,ft/2+93))}function X2(t,e,n){let i=Math.min(1,(e.t||0)/20);t.save(),t.fillStyle="#c92a2a",t.beginPath(),t.moveTo(0,0),t.lineTo(Le/2+60,0),t.lineTo(Le/2-60,ft),t.lineTo(0,ft),t.closePath(),t.fill(),t.fillStyle="#1c4fd8",t.beginPath(),t.moveTo(Le/2+60,0),t.lineTo(Le,0),t.lineTo(Le,ft),t.lineTo(Le/2-60,ft),t.closePath(),t.fill(),t.strokeStyle="rgba(255,255,255,.12)",t.lineWidth=2;for(let a=-ft;a<Le;a+=26)t.beginPath(),t.moveTo(a+n*4%26,0),t.lineTo(a+ft+n*4%26,ft),t.stroke();for(let a of[0,1]){let o=e.chars[a],l={c:o,side:a,x:(a?700+(1-i)*300:260-(1-i)*300)*Qe,y:0,face:a?-1:1,st:"idle",t:0,vy:0,stun:0,cb:0};t.save(),t.translate(0,-60),t.scale(1,1),t.translate(l.x/Qe,ke),t.scale(1.9,1.9),t.translate(-(l.x/Qe),-ke),id(t,l,tm(l,null,n),{tick:n}),t.restore(),t.font="italic 900 46px system-ui",t.textAlign=a?"right":"left",t.lineWidth=9,t.strokeStyle=Ze,t.fillStyle="#fff";let c=a?Le-30:30;t.strokeText(Ot[o].name.toUpperCase(),c,ft-70),t.fillText(Ot[o].name.toUpperCase(),c,ft-70),t.font="800 20px system-ui",t.lineWidth=5,t.fillStyle="#ffd43b",t.strokeText(e.names?.[a]||Ot[o].title,c,ft-40),t.fillText(e.names?.[a]||Ot[o].title,c,ft-40)}let s=1+Math.max(0,1-(e.t||0)/12)*2;t.translate(Le/2,ft/2),t.scale(s,s),t.rotate(-.08),t.font="italic 900 130px system-ui",t.textAlign="center",t.lineWidth=14,t.strokeStyle=Ze,t.strokeText("VS",0,45);let r=t.createLinearGradient(0,-60,0,50);r.addColorStop(0,"#fff6a8"),r.addColorStop(1,"#ffb000"),t.fillStyle=r,t.fillText("VS",0,45),t.restore(),e.stageName&&(t.font="800 18px system-ui",t.textAlign="center",t.fillStyle="#fff",t.fillText(`S\xE0n \u0111\u1EA5u: ${e.stageName}`,Le/2,40))}function em(t,e,n,i){let s=e.x/Qe,r=ke-e.y/Qe-75;for(let a=0;a<3;a++)t.strokeStyle=n,t.globalAlpha=.35-a*.1,t.lineWidth=10,t.beginPath(),t.ellipse(s,r,52+a*10+Math.sin(i/2)*4,95+a*10,0,0,7),t.stroke();t.globalAlpha=1}function Y2(t,e,n,i,s){let r=Ot[e.c].size/100,a=e.x/Qe+e.face*50*r,o=ke-e.y/Qe-100*r,l=Math.min(640,(e.t-n.s)*40)*e.face,c=46+Math.sin(i)*6,h=t.createLinearGradient(0,o-c/2,0,o+c/2);h.addColorStop(0,"rgba(255,255,255,0)"),h.addColorStop(.3,s),h.addColorStop(.5,"#ffffff"),h.addColorStop(.7,s),h.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=h,t.fillRect(Math.min(a,a+l),o-c/2,Math.abs(l),c),nn(t,a,o,34+Math.sin(i*1.3)*5,"#ffffff",0),t.globalAlpha=.6,nn(t,a,o,46,s,0),t.globalAlpha=1}function Z2(t,e,n,i,s,r){let a=s?12:8,o=(s?16:10)+i*(s?5:3.5);t.save(),t.translate(e,n),t.rotate(i*.05),t.globalAlpha=Math.max(0,1-i/18),t.fillStyle=r||(s?"#ffd43b":"#fff3c4"),t.strokeStyle=Ze,t.lineWidth=2.5,t.beginPath();for(let l=0;l<a*2;l++){let c=l%2?o*.35:o,h=l/(a*2)*Math.PI*2;t.lineTo(Math.cos(h)*c,Math.sin(h)*c)}t.closePath(),t.fill(),t.stroke(),s&&i<6&&(t.fillStyle="#fff",t.beginPath(),t.arc(0,0,o*.3,0,7),t.fill()),t.restore()}var K2=[{id:"cub",name:"C\xFAp 50",desc:"C\xE2n b\u1EB1ng m\u1ECDi m\u1EB7t \u2014 d\u1EC5 ch\u01A1i nh\u1EA5t.",top:1180,acc:26,steer:360,mass:100,len:60,wid:28,color:"#4dabf7",kind:"moto"},{id:"vespa",name:"Vespa C\u1ED5",desc:"T\u0103ng t\u1ED1c c\u1EF1c nhanh, nh\u1EB9 n\xEAn d\u1EC5 b\u1ECB h\xFAc v\u0103ng.",top:1150,acc:38,steer:380,mass:82,len:58,wid:30,color:"#38d9a9",kind:"scooter"},{id:"dream",name:"Dream L\xF9n",desc:"T\u1ED1c \u0111\u1ED9 t\u1ED1i \u0111a cao nh\u1EA5t, \xF4m cua h\u01A1i c\u1EE9ng.",top:1290,acc:24,steer:320,mass:96,len:64,wid:28,color:"#9775fa",kind:"moto"},{id:"lam",name:"Xe Lam",desc:"To n\u1EB7ng, h\xFAc ai ng\u01B0\u1EDDi \u0111\xF3 bay \u2014 nh\u01B0ng ch\u1EADm ch\u1EA1p.",top:1080,acc:20,steer:290,mass:150,len:76,wid:40,color:"#ffd43b",kind:"lam"},{id:"dien",name:"Xe \u0110\u1EA1p \u0110i\u1EC7n",desc:"L\u1EA1ng l\xE1ch si\xEAu linh ho\u1EA1t, nh\u1EB9 t\xEAnh.",top:1110,acc:32,steer:460,mass:70,len:54,wid:26,color:"#ff6fb5",kind:"ebike"},{id:"nong",name:"C\xF4ng N\xF4ng",desc:"Xe tr\xE2u s\u1EAFt: h\xFAc l\xE0 \u1EE7i, \u0111\xE2m ch\u01B0\u1EDBng ng\u1EA1i nh\u1ECF kh\xF4ng sao.",top:1040,acc:18,steer:270,mass:175,len:80,wid:42,color:"#ff6b00",kind:"tractor",tough:1}],Us=Object.fromEntries(K2.map(t=>[t.id,t])),ad=["L\xE0ng \u0110\xF4ng H\u1ED3","L\xE0ng B\xE1t Tr\xE0ng","L\xE0ng V\u1EA1n Ph\xFAc","L\xE0ng \u0110\u01B0\u1EDDng L\xE2m","L\xE0ng Ph\xF9 L\xE3ng","L\xE0ng Chu\xF4ng","L\xE0ng Kim B\u1ED3ng","L\xE0ng Thanh H\xE0","L\xE0ng S\xECnh","L\xE0ng N\xF4m","L\xE0ng H\u01B0\u01A1ng Canh","L\xE0ng Th\u1ED5 H\xE0"];var Je=100;var Ul=300*Je,ld=5,Dl=Ul/ld,od=520*Je,Un=200*Je,j2=1e3*Je,J2=1600*Je;var Q2=(t,e,n)=>t<e?e:t>n?n:t,ew={cone:{w:22,h:22,solid:1,small:1},hay:{w:50,h:44,solid:1,small:1},cart:{w:86,h:38,solid:1},buffalo:{w:72,h:40,solid:1,moving:1},rock:{w:40,h:40,solid:1},oil:{w:56,h:40},mud:{w:90,h:50},boost:{w:48,h:36}},tw=[["cone",18],["hay",12],["cart",10],["buffalo",9],["rock",9],["oil",9],["mud",7],["boost",8]];function nw(t){let e=t>>>0;return()=>{e=e+1831565813>>>0;let n=e;return n=Math.imul(n^n>>>15,n|1),n^=n+Math.imul(n^n>>>7,n|61),((n^n>>>14)>>>0)/4294967296}}var Lr=new Map;function iw(t,e){let n=t+":"+e;if(Lr.has(n))return Lr.get(n);let i=nw((t^Math.imul(e+7,2654435761))>>>0),s=[],r=e*od;if(r>=j2){let a=Math.min(3,Math.floor(e/6)),o=1+Math.floor(i()*(2+Math.min(1,a))),l=[0,1,2,3,4];for(let c=4;c>0;c--){let h=Math.floor(i()*(c+1));[l[c],l[h]]=[l[h],l[c]]}for(let c=0;c<Math.min(o,3);c++){let h=i()*82,d="cone";for(let[f,u]of tw){if(h<u){d=f;break}h-=u}s.push({id:`${e}:${c}`,type:d,x:r+Math.floor((60+i()*380)*Je),l:l[c]*Dl+Dl/2,ph:Math.floor(i()*200)})}}return Lr.set(n,s),Lr.size>600&&Lr.delete(Lr.keys().next().value),s}function om(t,e){if(!ew[t.type].moving)return t.l;let n=(e+t.ph)%240,i=n<120?n:240-n;return Q2(t.l+(i-60)*70,20*Je,Ul-20*Je)}function lm(t,e,n){let i=[];for(let s=Math.max(0,Math.floor(e/od));s<=Math.floor(n/od);s++)for(let r of iw(t.rs,s))!t.gone.includes(r.id)&&(!t.len||r.x<Un+t.len-200*Je)&&i.push(r);return i}function am(t,e){return{id:t,side:e,x:Un,l:e?210*Je:90*Je,v:0,lv:0,push:0,st:"go",t:0,stun:0,spin:0,ram:0,ramCd:0,nitro:300,boost:0,prev:0,scrape:0,wins:0,outAt:0,behind:0}}function cm(t,e={}){let n=(e.seed??12345)>>>0;return{frame:0,round:1,phase:"intro",pt:0,need:e.rounds||2,len:(e.time===99?24e3:e.time===60?12e3:0)*Je,seed:n,rs:n,c:[am(t[0],0),am(t[1],1)],gone:[],camX:0,winner:-1,lastW:-1,why:"",hitstop:0}}var lt=960,Ft=540,Bt="#1d1648",sn=175,sw=150,rw=1100,gm=440,ym=3400,Nr=560,ui=Ul/Je,Va=3e3,hm=(t,e)=>typeof OffscreenCanvas<"u"?new OffscreenCanvas(t,e):Object.assign(document.createElement("canvas"),{width:t,height:e}),fm=t=>{let e=Math.imul(t^1540483477,668265261);return e^=e>>>15,(e>>>0)/4294967296};function mn(t,e,n,i,s,r){t.beginPath(),t.moveTo(e+r,n),t.arcTo(e+i,n,e+i,n+s,r),t.arcTo(e+i,n+s,e,n+s,r),t.arcTo(e,n+s,e,n,r),t.arcTo(e,n,e+i,n,r),t.closePath()}function ii(t,e,n,i,s,r=3){t.beginPath(),t.arc(e,n,i,0,Math.PI*2),t.fillStyle=s,t.fill(),r&&(t.lineWidth=r,t.strokeStyle=Bt,t.stroke())}var Fl=t=>170*Math.sin(t/2600)+70*Math.sin(t/1100+1),Bl=class{constructor(){this.list=[],this.seen=new Set,this.shake=0,this.banner=null,this.gate=-1,this.trail=[]}add(e,n){if(this.seen.has(e.key))return!1;this.seen.add(e.key),this.seen.size>3e3&&(this.seen=new Set([...this.seen].slice(-1500)));let i=e.k;return i==="crash"?(this.list.push({k:"boom",x:e.x,l:e.l,born:n}),this.shake=18,this.banner={text:{cone:"\u0110\xC2M C\u1ECCC!",hay:"\u0110\xC2M \u0110\u1ED0NG R\u01A0M!",cart:"\u0110\xC2M XE BA G\xC1C!",buffalo:"\u0110\xC2M TR\xC2U!",rock:"\u0110\xC2M \u0110\xC1!"}[e.type]||"T\xD4NG R\u1ED2I!",born:n,hot:1}):i==="bump"?(this.list.push({k:"spark",x:e.x,l:e.l,born:n,big:e.big}),this.shake=Math.max(this.shake,e.big?7:3)):i==="smash"?this.list.push({k:"bits",x:e.x,l:e.l,born:n,type:e.type}):i==="round"?this.banner={text:`HI\u1EC6P ${e.n}`,born:n}:i==="count"?this.banner={text:String(e.n),born:n,big:1}:i==="go"?this.banner={text:"CH\u1EA0Y!",born:n,hot:1,big:1}:i==="out"?this.outBorn=n:i==="behind"?this.banner={text:"B\u1ECA B\u1ECE R\u01A0I!",born:n,hot:1}:i==="ko"&&e.why==="finish"?this.banner={text:"V\u1EC0 \u0110\xCDCH!",born:n,big:1}:i==="nitro"?this.list.push({k:"text",side:e.side,text:"NITRO!",born:n,col:"#4dabf7"}):i==="ram"?this.list.push({k:"text",side:e.side,text:"H\xDAC!",born:n,col:"#ff6b6b"}):i==="spin"?this.list.push({k:"text",side:e.side,text:"TR\u01A0N!",born:n,col:"#adb5bd"}):i==="boost"&&this.list.push({k:"text",side:e.side,text:"T\u0102NG T\u1ED0C!",born:n,col:"#ffd43b"}),!0}};function aw(t,e,n){let i;if(n>=0)i=t.c[n].x/Je-Nr;else{let a=t.c.filter(l=>l.st==="go"||t.frame-l.outAt<70),o=a.length?a:t.c;i=Math.min(...o.map(l=>l.x))/Je-Nr}let s=n>=0?t.c[n].l/Je:(t.c[0].l+t.c[1].l)/2/Je,r=ui/2+(s-ui/2)*.55;return e.camL=e.camL===void 0?r:e.camL+(r-e.camL)*.15,e.camZ=i,{z:i,l:e.camL}}function cn(t,e,n,i=0){let s=e-t.z;if(s<10)return null;let r=rw/s;return{x:lt/2+(n-t.l+Fl(e)-Fl(t.z+Nr))*r,y:sn+(sw-i)*r,s:r}}var dm=[["#5ec8ff","#d0f0ff"],["#ff9a8b","#ffd6a5"],["#3b5bdb","#a5d8ff"]];function ow(t,e,n,i){let s=t.createLinearGradient(0,0,0,sn);s.addColorStop(0,dm[n][0]),s.addColorStop(1,dm[n][1]),t.fillStyle=s,t.fillRect(0,0,lt,sn+2);let r=-(Fl(e.z+1500)-Fl(e.z+Nr))*.3-e.l*.3;n===1?ii(t,700+r*.2,110,46,"#fff3c4",0):ii(t,780+r*.2,60,26,"#fff8d6",0),t.fillStyle="rgba(255,255,255,.85)";for(let o=0;o<6;o++){let l=((o*190+r*.5-i*.15)%1200+1200)%1200-120,c=30+o*37%70;t.beginPath(),t.arc(l,c,16,0,7),t.arc(l+20,c-8,20,0,7),t.arc(l+44,c,15,0,7),t.fill()}let a=(o,l,c,h,d)=>{t.fillStyle=c,t.beginPath(),t.moveTo(0,sn+2);for(let f=0;f<=lt;f+=16)t.lineTo(f,o-Math.abs(Math.sin((f-r*d)/h))*l-Math.sin((f-r*d)/31)*6);t.lineTo(lt,sn+2),t.fill()};if(n===2)a(sn,110,"#6a7fb8",120,.4),a(sn,60,"#3f5f8f",70,.7);else if(n===1){t.fillStyle="#4dabf7",t.fillRect(0,sn-26,lt,28),t.strokeStyle="rgba(255,255,255,.6)",t.lineWidth=2;for(let o=0;o<14;o++){let l=((o*83+r+i*.4)%1e3+1e3)%1e3-20;t.beginPath(),t.moveTo(l,sn-14+o%3*6),t.lineTo(l+18,sn-14+o%3*6),t.stroke()}}else a(sn,40,"#8fcf7a",90,.4),a(sn,22,"#5fae54",50,.7)}var um=[["#7bd148","#6cc13f"],["#f4d88a","#ead07c"],["#2f9e44","#2b8a3e"]];function lw(t,e,n,i){t.fillStyle=um[i][0],t.fillRect(0,sn,lt,Ft-sn);let s=30,r=null,a=Math.floor((e.z+ym)/s)*s;for(let o=a;o>=e.z+gm-80;o-=s){let l=cn(e,o,0),c=cn(e,o-s,0);if(!l||!c)continue;let h=cn(e,o,ui),d=cn(e,o-s,ui),f=Math.floor(o/150)%2;t.fillStyle=um[i][f],t.fillRect(0,l.y,lt,c.y-l.y+1);let u=16;if(t.fillStyle=Math.floor(o/60)%2?"#ff4d5e":"#ffffff",za(t,l.x-u*l.s,l.y,c.x-u*c.s,c.y,c.x,c.y,l.x,l.y),za(t,h.x,l.y,d.x,c.y,d.x+u*d.s,c.y,h.x+u*h.s,l.y),t.fillStyle=f?"#5c5470":"#56506a",za(t,l.x,l.y,c.x,c.y,d.x,c.y,h.x,l.y),Math.floor(o/90)%2===0){t.fillStyle="rgba(255,255,255,.9)";for(let p=1;p<ld;p++){let y=p*Dl/Je,g=2.5,m=cn(e,o,y-g),b=cn(e,o,y+g),x=cn(e,o-s,y+g),v=cn(e,o-s,y-g);za(t,m.x,m.y,v.x,v.y,x.x,x.y,b.x,b.y)}}for(let p of[(Un-40*Je)/Je,n.len?(Un+n.len)/Je:-1])if(p>0&&o>=p&&o-s<p+24)for(let y=0;y<10;y++){t.fillStyle=(y+Math.floor(o/12))%2?"#fff":Bt;let g=cn(e,o,y*ui/10),m=cn(e,o,(y+1)*ui/10),b=cn(e,o-s,(y+1)*ui/10),x=cn(e,o-s,y*ui/10);za(t,g.x,g.y,x.x,x.y,b.x,b.y,m.x,m.y)}r=c}}function za(t,e,n,i,s,r,a,o,l){t.beginPath(),t.moveTo(e,n),t.lineTo(i,s),t.lineTo(r,a),t.lineTo(o,l),t.closePath(),t.fill()}function xm(t,e,{rider:n="",tick:i=0,lean:s=0,boost:r=0,brake:a=0,crash:o=0}={}){let l=Us[e],c=l.wid,h=l.color;if(t.save(),t.rotate(s),t.fillStyle="rgba(0,0,0,.28)",t.beginPath(),t.ellipse(0,0,c*.75,6,0,0,7),t.fill(),t.strokeStyle=Bt,t.lineWidth=3,r)for(let d=0;d<2;d++)t.fillStyle=d?"#ffd43b":"#ff6b00",t.beginPath(),t.moveTo(-6+d*3,-18),t.lineTo(0,8+Math.random()*18-d*8),t.lineTo(6-d*3,-18),t.fill();if(l.kind==="lam"||l.kind==="tractor"){let d=l.kind==="tractor";for(let f of[-1,1])t.fillStyle="#2a2350",mn(t,f*c/2-(d?9:6),d?-34:-18,d?18:12,d?34:18,4),t.fill();t.fillStyle=h,mn(t,-c/2+4,d?-46:-54,c-8,d?26:40,6),t.fill(),t.stroke(),d?(t.fillStyle="#495057",t.fillRect(6,-70,6,26),t.strokeRect(6,-70,6,26),t.fillStyle=`rgba(90,90,90,${.5})`,t.beginPath(),t.arc(9+Math.sin(i/4)*3,-78-i%14,6+i%14/3,0,7),t.fill()):(t.fillStyle="#2f9e44",mn(t,-c/2+1,-62,c-2,10,4),t.fill(),t.stroke(),t.fillStyle="#ffd43b",t.fillRect(-c/2+8,-30,8,6),t.fillRect(c/2-16,-30,8,6)),t.fillStyle=pm(h),mn(t,-11,d?-70:-86,22,22,6),t.fill(),t.stroke(),mm(t,0,d?-80:-96,n)}else{t.fillStyle="#2a2350",mn(t,-5,-20,10,20,4),t.fill();let d=l.kind==="scooter"?c*.9:c*.7;t.fillStyle=h,mn(t,-d/2,-34,d,18,l.kind==="scooter"?9:5),t.fill(),t.stroke(),t.fillStyle=a?"#ff2e2e":"#ff8787",mn(t,-5,-26,10,5,2),t.fill(),l.kind==="ebike"&&(t.fillStyle="#ced4da",mn(t,-10,-44,20,10,2),t.fill(),t.stroke()),t.fillStyle=pm(h),mn(t,-13,-62,26,30,8),t.fill(),t.stroke(),t.strokeStyle=Bt,t.lineWidth=4,t.beginPath(),t.moveTo(-13,-54),t.lineTo(-c/2-4,-46),t.moveTo(13,-54),t.lineTo(c/2+4,-46),t.stroke(),mm(t,0,-72,n)}o&&(t.font="22px system-ui",t.textAlign="center",t.fillText("\u{1F4AB}",0,-110-Math.sin(i/4)*4)),t.restore()}function pm(t){let e=parseInt(t.slice(1),16);return`rgb(${(e>>16&255)*.75|0},${(e>>8&255)*.75|0},${(e&255)*.75|0})`}function mm(t,e,n,i){ii(t,e,n,13,"#ffffff",3),t.fillStyle="#1d1648",t.fillRect(e-13,n+1,26,3),i&&(t.font='15px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(i,e,n-2),t.textBaseline="alphabetic")}function cw(t,e,n,i){switch(t.strokeStyle=Bt,t.lineWidth=3,e.type){case"cone":t.fillStyle="#ff922b",t.beginPath(),t.moveTo(-12,0),t.lineTo(0,-30),t.lineTo(12,0),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#fff",t.fillRect(-6,-18,12,5),t.fillStyle="#ff922b",t.fillRect(-14,-3,28,4);break;case"hay":ii(t,0,-22,22,"#f2c94c"),t.strokeStyle="#c99a2e",t.lineWidth=2;for(let s of[8,15])t.beginPath(),t.arc(0,-22,s,0,7),t.stroke();break;case"cart":t.fillStyle="#a0683d",mn(t,-44,-38,88,28,4),t.fill(),t.stroke();for(let[s,r]of[[-26,"#69db7c"],[-8,"#ff6b6b"],[10,"#ffd43b"],[28,"#ff922b"]])ii(t,s,-44,10,r,2);for(let s of[-1,1])ii(t,s*36,-10,10,"#2a2350",2.5);break;case"buffalo":{let s=(n+e.ph)%240<120?1:-1,r=Math.sin(i/4)*4;t.save(),t.scale(s,1),t.fillStyle="#5c636a";for(let a of[-24,-12,14,26])t.fillRect(a-3,-22,7,22+(a%2?r:-r)*.3);t.beginPath(),t.ellipse(0,-34,36,18,0,0,7),t.fill(),t.stroke(),ii(t,38,-40,12,"#6c757d"),t.strokeStyle="#f1f3f5",t.lineWidth=4,t.beginPath(),t.arc(32,-52,12,Math.PI*1.1,Math.PI*1.9),t.stroke(),t.fillStyle=Bt,t.beginPath(),t.arc(42,-42,2,0,7),t.fill(),t.strokeStyle=Bt,t.lineWidth=3,t.beginPath(),t.moveTo(-36,-36),t.lineTo(-44,-24+r),t.stroke(),t.restore();break}case"rock":t.fillStyle="#868e96",t.beginPath(),t.moveTo(-22,0),t.lineTo(-18,-24),t.lineTo(-2,-36),t.lineTo(16,-28),t.lineTo(22,0),t.closePath(),t.fill(),t.stroke();break;case"oil":t.fillStyle="#1d1648",t.beginPath(),t.ellipse(0,-2,30,6,0,0,7),t.fill(),t.fillStyle="rgba(180,140,255,.6)",t.beginPath(),t.ellipse(-8,-3,10,2,0,0,7),t.fill();break;case"mud":t.fillStyle="#8a5a2b",t.beginPath(),t.ellipse(0,-2,46,8,0,0,7),t.fill();break;case"boost":t.fillStyle="#ffd43b",t.strokeStyle=Bt,t.lineWidth=2;for(let s of[0,1])t.beginPath(),t.moveTo(-20,-2-s*6),t.lineTo(0,-8-s*6),t.lineTo(20,-2-s*6),t.lineTo(20,1-s*6),t.lineTo(0,-5-s*6),t.lineTo(-20,1-s*6),t.closePath(),t.fill(),t.stroke();break}}function hw(t,e,n){if(t.strokeStyle=Bt,t.lineWidth=3,e==="tree")t.fillStyle="#8a5a2b",t.fillRect(-5,-40,10,40),ii(t,0,-62,30,"#2f9e44"),ii(t,-10,-70,12,"#69db7c",0);else if(e==="pine")t.fillStyle="#8a5a2b",t.fillRect(-4,-20,8,20),t.fillStyle="#1b5e20",t.beginPath(),t.moveTo(-28,-20),t.lineTo(0,-100),t.lineTo(28,-20),t.closePath(),t.fill(),t.stroke();else if(e==="palm"){t.strokeStyle="#8a5a2b",t.lineWidth=7,t.beginPath(),t.moveTo(0,0),t.quadraticCurveTo(8,-50,2,-100),t.stroke(),t.fillStyle="#2f9e44";for(let i=0;i<6;i++){let s=i/6*Math.PI*2;t.beginPath(),t.ellipse(2+Math.cos(s)*22,-100+Math.sin(s)*8,26,6,s,0,7),t.fill()}}else if(e==="house"){let i=["#ffb3c1","#ffe08a","#a5e3c5","#b7c7ff"][Math.floor(n*4)];t.fillStyle=i,t.fillRect(-40,-54,80,54),t.strokeRect(-40,-54,80,54),t.fillStyle="#c0583e",t.beginPath(),t.moveTo(-50,-52),t.lineTo(0,-88),t.lineTo(50,-52),t.closePath(),t.fill(),t.stroke(),t.fillStyle="#7a2e1d",t.fillRect(-10,-30,20,30),t.fillStyle="#fff1a8",t.fillRect(-32,-42,14,12),t.fillRect(18,-42,14,12)}else if(e==="bamboo"){for(let i of[-14,-4,8,16])t.strokeStyle="#5c940d",t.lineWidth=5,t.beginPath(),t.moveTo(i,0),t.lineTo(i+4,-110),t.stroke();t.fillStyle="#82c91e";for(let i=0;i<8;i++)t.beginPath(),t.ellipse(-10+i%4*9,-110+i*6,14,4,i,0,7),t.fill()}else e==="stack"?(t.fillStyle="#e9c46a",t.beginPath(),t.moveTo(-18,0),t.lineTo(0,-42),t.lineTo(18,0),t.closePath(),t.fill(),t.stroke()):e==="umbrella"?(t.fillStyle="#ff6b6b",t.beginPath(),t.arc(0,-50,30,Math.PI,0),t.fill(),t.stroke(),t.strokeStyle="#8a5a2b",t.beginPath(),t.moveTo(0,-50),t.lineTo(0,0),t.stroke()):e==="rockside"&&(t.fillStyle="#868e96",t.beginPath(),t.ellipse(0,-16,30,18,0,0,7),t.fill(),t.stroke())}var fw=[["tree","house","bamboo","stack","tree"],["palm","palm","umbrella","house","palm"],["pine","pine","rockside","house","pine"]],Ha=null,Ol=null;function vm(t,e,n,i,s={}){let r=s.pixel!==!1,a=r?.5:1;(!Ha||Ha.width!==lt*a)&&(Ha=hm(lt*a,Ft*a));let o=Ha.getContext("2d");o.save(),o.setTransform(a,0,0,a,0,0),dw(o,e,n,i,s),o.restore(),t.save();let l=0,c=0;if(n.shake>0&&(l=(Math.random()-.5)*n.shake,c=(Math.random()-.5)*n.shake,n.shake*=.85,n.shake<.5&&(n.shake=0)),t.imageSmoothingEnabled=!r,t.fillStyle="#000",t.fillRect(0,0,lt,Ft),t.drawImage(Ha,l,c,lt,Ft),t.imageSmoothingEnabled=!0,t.restore(),pw(t,e,n,i,s),s.crt!==!1){if(!Ol){Ol=hm(lt,Ft);let h=Ol.getContext("2d");h.fillStyle="rgba(0,0,0,.14)";for(let f=0;f<Ft;f+=3)h.fillRect(0,f,lt,1);let d=h.createRadialGradient(lt/2,Ft/2,Ft*.45,lt/2,Ft/2,lt*.65);d.addColorStop(0,"rgba(0,0,0,0)"),d.addColorStop(1,"rgba(0,0,0,.4)"),h.fillStyle=d,h.fillRect(0,0,lt,Ft)}t.drawImage(Ol,0,0)}}function dw(t,e,n,i,s){let r=(s.theme??0)%3,a=s.me??-1;a>=0&&e.c[a].st!=="go"&&e.c[1-a].st==="go"&&e.frame-e.c[a].outAt>70&&(a=1-a);let o=aw(e,n,a);ow(t,o,r,i),lw(t,o,e,r);let l=[],c=o.z+gm-120,h=o.z+ym;for(let u of lm(e,c*Je,h*Je))l.push({z:u.x/Je,l:om(u,e.frame)/Je,draw:p=>cw(p,u,e.frame,i)});let d=110;for(let u=Math.floor(c/d);u<=Math.floor(h/d);u++)for(let p of[0,1]){let y=fm(u*2+p+r*1e3);if(y<.35)continue;let g=fw[r][Math.floor(fm(u*5+p)*5)],m=p?ui+50+y*120:-50-y*120;l.push({z:u*d+y*40,l:m,draw:b=>hw(b,g,y)})}for(let u=Math.max(1,Math.floor((c-Un/Je)/Va));u<=Math.floor((h-Un/Je)/Va)+1;u++){let p=Un/Je+u*Va;if(e.len&&p>=(Un+e.len)/Je)break;p<c||p>h||l.push({z:p,gate:ad[(u-1+e.round*3)%ad.length]})}e.c.forEach((u,p)=>l.push({z:u.x/Je,l:u.l/Je,car:u,i:p})),l.sort((u,p)=>p.z-u.z);for(let u of l){if(u.gate){uw(t,o,u.z,u.gate);continue}if(u.car&&a>=0&&u.i!==a&&u.z<o.z+Nr*.85)continue;let p=cn(o,u.z,u.l);if(!(!p||p.y<sn-5||p.x<-300||p.x>lt+300)){if(t.save(),t.translate(p.x,p.y),t.scale(p.s,p.s),u.car){let y=u.car,g=Math.max(-.3,Math.min(.3,(y.lv+y.push)/2500));if(y.spin&&(g=Math.sin(i/2)*.6),y.st==="crash"&&(g=.9*(u.i?-1:1)),xm(t,y.id,{rider:s.riders?.[u.i]||"",tick:i,lean:g,boost:y.boost>0,brake:y.prev&2&&y.st==="go",crash:y.st==="crash"}),y.ram>0){t.strokeStyle="rgba(255,80,80,.8)",t.lineWidth=4;for(let x=0;x<3;x++){let v=y.push>0?-1:1;t.beginPath(),t.moveTo(v*(24+x*8),-60+x*14),t.lineTo(v*(50+x*8),-60+x*14),t.stroke()}}t.restore();let m=s.names?.[u.i]||(u.i?"P2":"P1");t.font="800 14px system-ui",t.textAlign="center",t.lineWidth=4,t.strokeStyle=Bt,t.fillStyle=u.i?"#74c0fc":"#ff8787";let b=p.y-(Us[y.id].kind==="lam"?138:108)*p.s;t.strokeText(m,p.x,b),t.fillText(m,p.x,b);continue}u.draw(t),t.restore()}}n.list=n.list.filter(u=>i-u.born<(u.k==="boom"?50:30));for(let u of n.list){let p=i-u.born;if(u.k==="spark"||u.k==="boom"||u.k==="bits"){let y=cn(o,u.x/Je,u.l/Je,30);if(!y)continue;let g=u.k==="boom"?14:8,m=((u.k==="boom"?20:10)+p*(u.k==="boom"?4:2.5))*Math.min(2.5,y.s);t.save(),t.translate(y.x,y.y),t.globalAlpha=Math.max(0,1-p/(u.k==="boom"?40:20)),t.fillStyle=u.k==="boom"?"#ff922b":u.k==="bits"?"#f2c94c":"#ffd43b",t.strokeStyle=Bt,t.lineWidth=2.5,t.beginPath();for(let b=0;b<g*2;b++){let x=b%2?m*.4:m,v=b/(g*2)*Math.PI*2+p*.05;t.lineTo(Math.cos(v)*x,Math.sin(v)*x)}t.closePath(),t.fill(),t.stroke(),t.restore()}else if(u.k==="text"){let y=e.c[u.side],g=cn(o,y.x/Je,y.l/Je,110);if(!g)continue;t.save(),t.globalAlpha=Math.max(0,1-p/30),t.font="italic 900 22px system-ui",t.textAlign="center",t.lineWidth=5,t.strokeStyle=Bt,t.fillStyle=u.col,t.strokeText(u.text,g.x,g.y-p),t.fillText(u.text,g.x,g.y-p),t.restore()}}let f=a>=0?e.c[a]:null;if(f&&(f.boost>0||f.v>1150)){t.strokeStyle=f.boost?"rgba(255,212,59,.6)":"rgba(255,255,255,.35)",t.lineWidth=3;for(let u=0;u<10;u++){let p=u/10*Math.PI*2+i*.3,y=300+(i*30+u*70)%260;t.beginPath(),t.moveTo(lt/2+Math.cos(p)*y,sn+120+Math.sin(p)*y*.55),t.lineTo(lt/2+Math.cos(p)*(y+60),sn+120+Math.sin(p)*(y+60)*.55),t.stroke()}}if(f){let u=e.c[1-a],p=(f.x-u.x)/Je;if(u.st==="go"&&u.x/Je<o.z+Nr*.85){let y=Math.max(60,Math.min(lt-60,lt/2+(u.l/Je-o.l)*1.6));t.font="800 15px system-ui",t.textAlign="center",t.lineWidth=5,t.strokeStyle=Bt,t.fillStyle="#fff";let g=`\u25BC ${s.names?.[1-a]||"\u0110\u1ED1i th\u1EE7"} sau ${Math.round(p/10)} m`;t.strokeText(g,y,Ft-54),t.fillText(g,y,Ft-54)}}(s.crowd||[]).slice(0,8).forEach((u,p)=>{let y=40+p*50,g=Ft-70+Math.sin(i/6+p)*(n.shake>1?7:2);t.font='22px system-ui, "Apple Color Emoji", "Segoe UI Emoji", sans-serif',t.textAlign="center",t.fillText(u,y,g)})}function uw(t,e,n,i){let s=cn(e,n,-26),r=cn(e,n,ui+26);if(!s||!r||s.y<sn)return;let a=s.s,o=150*a;t.save(),t.strokeStyle=Bt,t.lineWidth=Math.max(1.5,3*a);for(let l of[s,r])t.fillStyle="#c0583e",t.fillRect(l.x-9*a,l.y-o,18*a,o),t.strokeRect(l.x-9*a,l.y-o,18*a,o);t.fillStyle="#b5482c",mn(t,s.x-22*a,s.y-o-34*a,r.x-s.x+44*a,34*a,6*a),t.fill(),t.stroke(),t.fillStyle="#ffe08a",mn(t,s.x+40*a,s.y-o-28*a,r.x-s.x-80*a,22*a,4*a),t.fill(),t.font=`900 ${Math.max(6,17*a)}px system-ui`,t.textAlign="center",t.fillStyle="#7a2e1d",t.fillText(i.toUpperCase(),(s.x+r.x)/2,s.y-o-11*a),t.restore()}function pw(t,e,n,i,s){if(e.phase==="race"){let h=e.c.find(f=>f.st!=="go"),d=e.c.find(f=>f.st==="go");if(h&&d){let f=s.names||["P1","P2"],u=Math.max(0,Math.round((d.x-h.x)/Je/10)),p=`${f[h.side]||"P"+(h.side+1)} \u0111\xE3 b\u1ECB lo\u1EA1i \xB7 ${f[d.side]||"P"+(d.side+1)} ch\u1EA1y ti\u1EBFp t\u1EDBi khi \u0111\xE2m! (+${u} m)`;t.font="800 16px system-ui";let y=t.measureText(p).width+30;t.fillStyle="rgba(42,31,85,.85)",mn(t,lt/2-y/2,68,y,30,15),t.fill(),t.textAlign="center",t.fillStyle="#ffd43b",t.fillText(p,lt/2,89)}}let r=s.names||["P1","P2"],a=e.len||Math.max(6e3*Je,Math.max(e.c[0].x,e.c[1].x)-Un+2e3*Je),o=250,l=460,c=18;t.fillStyle="#2a1f55",mn(t,o-6,c-6,l+12,26,10),t.fill(),t.strokeStyle=Bt,t.lineWidth=3,t.stroke(),t.fillStyle="#5c5470",t.fillRect(o,c+4,l,6);for(let h=1;h*Va*Je<a;h++){let d=o+h*Va*Je/a*l;t.fillStyle="#c0583e",t.fillRect(d-2,c,4,14)}e.c.forEach((h,d)=>{let f=o+Math.min(1,(h.x-Un)/a)*l;ii(t,f,c+7,9,d?"#4dabf7":"#ff6b6b",2.5)}),t.font="800 12px system-ui",t.textAlign="center",t.fillStyle="#fff",t.fillText(e.len?`${Math.round(Math.max(0,Un+e.len-Math.max(e.c[0].x,e.c[1].x))/Je/10)} m t\u1EDBi \u0111\xEDch`:`${Math.round((Math.max(e.c[0].x,e.c[1].x)-Un)/Je/10)} m \xB7 kh\xF4ng c\xF3 \u0111\xEDch \u2014 ai tr\u1EE5 l\xE2u h\u01A1n th\u1EAFng`,lt/2,c+36);for(let h of[0,1]){let d=e.c[h],f=Us[d.id],u=h?lt-20:20;t.textAlign=h?"right":"left",t.font="italic 900 20px system-ui",t.lineWidth=5,t.strokeStyle=Bt,t.fillStyle=h?"#74c0fc":"#ff8787",t.strokeText(r[h],u,30),t.fillText(r[h],u,30),t.font="800 12px system-ui",t.fillStyle="#fff",t.strokeText(f.name,u,47),t.fillText(f.name,u,47);for(let x=0;x<e.need;x++)ii(t,h?u-8-x*20:u+8+x*20,62,7,x<d.wins?"#ffd43b":"#2a1f55",2.5);let p=200,y=h?lt-20-p:20,g=Ft-30;t.fillStyle="#2a1f55",mn(t,y-3,g-3,p+6,18,6),t.fill(),t.fillStyle=d.nitro>=1e3?`hsl(${i*9%360},95%,60%)`:"#4dabf7";let m=p*d.nitro/1e3;t.fillRect(h?y+p-m:y,g,m,12),t.strokeStyle=Bt,t.lineWidth=3,mn(t,y-3,g-3,p+6,18,6),t.stroke(),t.font="italic 900 14px system-ui",t.lineWidth=4,t.fillStyle=d.nitro>=1e3?"#ffd43b":"#fff";let b=`${Math.round(d.v/100*9)} km/h \xB7 ${d.nitro>=1e3?"NITRO S\u1EB4N S\xC0NG!":"NITRO"}${d.ramCd?"":" \xB7 H\xDAC \u2713"}`;t.strokeText(b,h?y+p:y,g-7),t.fillText(b,h?y+p:y,g-7)}if(n.banner){let h=i-n.banner.born,d=n.banner.big?40:70;if(h>d)n.banner=null;else{let f=Math.min(1,h/6),u=h>d-10?(d-h)/10:1;t.save(),t.globalAlpha=u,t.translate(lt/2,300),t.scale(.5+f*.5,.5+f*.5),t.rotate(-.04),t.font=`italic 900 ${n.banner.big?120:78}px system-ui`,t.textAlign="center",t.lineWidth=12,t.strokeStyle=Bt,t.lineJoin="round",t.strokeText(n.banner.text,0,0);let p=t.createLinearGradient(0,-70,0,10);p.addColorStop(0,"#fff6a8"),p.addColorStop(1,n.banner.hot?"#ff2e4d":"#ffb000"),t.fillStyle=p,t.fillText(n.banner.text,0,0),t.restore()}}if(e.phase==="end"){let h=e.winner<0?"HO\xC0!":`${r[e.winner].toUpperCase()} TH\u1EAENG!`;t.save(),t.translate(lt/2,280),t.font="italic 900 64px system-ui",t.textAlign="center",t.lineWidth=12,t.strokeStyle=Bt,t.strokeText(h,0,0),t.fillStyle="#ffd43b",t.fillText(h,0,0),s.endSub&&(t.font="800 20px system-ui",t.lineWidth=6,t.strokeText(s.endSub,0,40),t.fillStyle="#fff",t.fillText(s.endSub,0,40)),t.restore()}s.waiting&&(t.fillStyle="rgba(0,0,0,.5)",t.fillRect(0,Ft/2+80,lt,46),t.font="800 20px system-ui",t.textAlign="center",t.fillStyle="#fff",t.fillText(s.waiting,lt/2,Ft/2+110)),s.vs&&mw(t,s.vs,i)}function mw(t,e,n){t.save(),t.fillStyle="#c92a2a",t.fillRect(0,0,lt/2,Ft),t.fillStyle="#1c4fd8",t.fillRect(lt/2,0,lt/2,Ft),t.strokeStyle="rgba(255,255,255,.12)",t.lineWidth=2;for(let s=-Ft;s<lt;s+=26)t.beginPath(),t.moveTo(s+n*5%26,0),t.lineTo(s+Ft+n*5%26,Ft),t.stroke();for(let s of[0,1]){let r=s?720:240,a=Math.min(1,(e.t||0)/20);t.save(),t.translate(r+(s?1:-1)*(1-a)*300,340),t.scale(2.6,2.6),xm(t,e.cars[s],{rider:e.riders?.[s]||"",tick:n}),t.restore(),t.font="italic 900 40px system-ui",t.textAlign="center",t.lineWidth=8,t.strokeStyle=Bt,t.fillStyle="#fff",t.strokeText(e.names?.[s]||"",r,410),t.fillText(e.names?.[s]||"",r,410),t.font="800 20px system-ui",t.lineWidth=5,t.fillStyle="#ffd43b",t.strokeText(Us[e.cars[s]].name,r,442),t.fillText(Us[e.cars[s]].name,r,442)}let i=1+Math.max(0,1-(e.t||0)/12)*2;t.translate(lt/2,250),t.scale(i,i),t.rotate(-.08),t.font="italic 900 120px system-ui",t.textAlign="center",t.lineWidth=14,t.strokeStyle=Bt,t.strokeText("VS",0,40),t.fillStyle="#ffd43b",t.fillText("VS",0,40),t.restore(),e.themeName&&(t.font="800 18px system-ui",t.textAlign="center",t.fillStyle="#fff",t.fillText(`\u0110\u01B0\u1EDDng \u0111ua: ${e.themeName}`,lt/2,40))}var gw=t=>{let e=cm(["cub","lam"],{seed:3,time:60});e.phase="race",e.c[0].x=1150*100,e.c[1].x=1320*100,e.c[0].l=11e3,e.c[1].l=19e3,e.camX=1100*100,vm(t,e,new Bl,30,{names:["",""],riders:["\u{1F427}","\u{1F996}"],crowd:[],me:0})},yw=t=>{let e=Y0(["teo","sam"],{});e.phase="fight",e.f[0].x=400*100,e.f[1].x=560*100,e.f[0].st="win",sm(t,e,new Nl,30,{names:["",""],crowd:["\u{1F98A}","\u{1F43C}","\u{1F438}"]})},cd=[{id:"masoi",url:"masoi.html",name:"Ma S\xF3i",color:"var(--grape)",soft:"var(--grape-soft)",tag:"Suy lu\u1EADn \xB7 L\u1EEBa l\u1ECDc",players:"4\u201316 ng\u01B0\u1EDDi",time:"15\u201330 ph\xFAt",desc:"\u0110\xEAm xu\u1ED1ng, s\xF3i \u0111i s\u0103n. Ng\xE0y l\xEAn, c\u1EA3 l\xE0ng b\u1ECF phi\u1EBFu treo c\u1ED5 k\u1EBB \u0111\xE1ng nghi. C\xF3 Ti\xEAn tri, B\u1EA3o v\u1EC7, Ph\xF9 th\u1EE7y, Th\u1EE3 s\u0103n.",art:()=>`<div class="art-roles">${["wolf","seer","witch","guard","hunter"].map(t=>gd(t,"lg")).join("")}</div>`},{id:"dienta",url:"dienta.html",name:"Di\u1EC5n T\u1EA3 H\xECnh H\xE0i",color:"var(--sky)",soft:"var(--sky-soft)",isNew:!0,tag:"Di\u1EC5n k\u1ECBch c\xE2m \xB7 B\u1EA5m chu\xF4ng",players:"2\u201316 ng\u01B0\u1EDDi",time:"10\u201320 ph\xFAt",desc:"M\u1ED9t ng\u01B0\u1EDDi l\xEAn s\xE2n kh\u1EA5u \u0111i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt di\u1EC5n t\u1EA3 \u0111\u1EC1 b\xE0i, c\u1EA3 ph\xF2ng tranh nhau b\u1EA5m chu\xF4ng \u0111o\xE1n ch\u1EEF \u0111\u1EC3 ghi \u0111i\u1EC3m.",art:t=>{let e=Zf(t);e.setLook({skin:"idol"}),e.setPose({body:"stand",head:"tiltL",face:"happy",armL:"wave",armR:"hip",legL:"step",legR:"down",loop:"dance"})}},{id:"nhai",url:"nhai.html",name:"Nh\u1EA1i Nh\u01B0 Th\u1EADt",color:"var(--orange)",soft:"var(--orange-soft)",isNew:!0,tag:"Nh\u1EA1i gi\u1ECDng \xB7 Ch\u1EA5m \u0111i\u1EC3m",players:"2\u201316 ng\u01B0\u1EDDi",time:"10\u201315 ph\xFAt",desc:'Nghe ti\u1EBFng g\xE0 g\xE1y, c\xF2i xe, c\xE2u "\u1ED0i d\u1ED3i \xF4i"... r\u1ED3i c\u1EA3 ph\xF2ng c\xF9ng nh\u1EA1i l\u1EA1i. M\xE1y ch\u1EA5m \u0111\u1ED9 gi\u1ED1ng + m\u1ECDi ng\u01B0\u1EDDi b\u1ECF phi\u1EBFu.',art:t=>{let e=Zf(t);e.setLook({skin:"chotdon"}),e.setPose({body:"stand",head:"center",face:"happy",armL:"down",armR:"mouth",propR:"mic",legL:"down",legR:"down"});let n=0;setInterval(()=>{n+=.2,e.setTalk?.(Math.max(0,Math.sin(n*3)*.6+Math.sin(n*7.1)*.3))},70)}},{id:"caro",url:"caro.html",name:"C\u1EDD Caro",color:"var(--coral)",soft:"var(--coral-soft)",isNew:!0,tag:"\u0110\u1ED1i kh\xE1ng \xB7 Tr\xED tu\u1EC7",players:"2 ch\u01A1i + 8 xem",time:"5\u201315 ph\xFAt",desc:"X\u1EBFp \u0111\u1EE7 5 qu\xE2n li\xEAn ti\u1EBFp \u0111\u1EC3 th\u1EAFng. 2 ng\u01B0\u1EDDi ng\u1ED3i gh\u1EBF \u0111\u1EA5u nhau, t\u1ED1i \u0111a 8 ng\u01B0\u1EDDi v\xE0o xem, chat v\xE0 c\u1ED5 v\u0169.",art:t=>{t.innerHTML='<div class="caro-art">'+Array.from({length:25},(e,n)=>{let i={6:"X",7:"O",12:"X",13:"O",18:"X",8:"O",24:"X",0:"X"}[n];return`<i class="${i||""}">${i==="X"?"\u2715":i==="O"?"\u25CB":""}</i>`}).join("")+"</div>"}},{id:"cotuong",url:"cotuong.html",name:"C\u1EDD T\u01B0\u1EDBng",color:"var(--coral)",soft:"var(--coral-soft)",isNew:!0,tag:"\u0110\u1ED1i kh\xE1ng \xB7 M\u01B0u l\u01B0\u1EE3c",players:"2 ch\u01A1i + 8 xem",time:"15\u201340 ph\xFAt",desc:"C\u1EDD t\u01B0\u1EDBng \u0111\u1EA7y \u0111\u1EE7 lu\u1EADt, c\xF3 \u0111\u1ED3ng h\u1ED3, bi\xEAn b\u1EA3n n\u01B0\u1EDBc \u0111i. Xem qu\xE2n b\u1EB1ng ch\u1EEF H\xE1n ho\u1EB7c ch\u1EEF Vi\u1EC7t. 8 ng\u01B0\u1EDDi v\xE0o xem v\xE0 c\u1ED5 v\u0169.",art:t=>{t.innerHTML='<div class="xq-art"></div>',H0.render(t.firstChild,{st:U0(),flip:!1,sel:-1,targets:[],last:null,check:-1,view:"han"})}},{id:"covua",url:"covua.html",name:"C\u1EDD Vua",color:"var(--sky)",soft:"var(--sky-soft)",isNew:!0,tag:"\u0110\u1ED1i kh\xE1ng \xB7 Chi\u1EBFn thu\u1EADt",players:"2 ch\u01A1i + 8 xem",time:"10\u201330 ph\xFAt",desc:"C\u1EDD vua qu\u1ED1c t\u1EBF \u0111\u1EA7y \u0111\u1EE7 lu\u1EADt: nh\u1EADp th\xE0nh, b\u1EAFt t\u1ED1t qua \u0111\u01B0\u1EDDng, phong c\u1EA5p. \u0110\u1ED3ng h\u1ED3 cho m\u1ED7i b\xEAn, 8 ng\u01B0\u1EDDi v\xE0o xem.",art:t=>{t.innerHTML='<div class="cv-art"></div>',z0.render(t.firstChild,{st:D0("r1bqkb1r/pppp1Qpp/2n2n2/4p3/2B1P3/8/PPPP1PPP/RNB1K1NR b KQkq - 0 4"),flip:!1,sel:-1,targets:[],last:{from:31,to:13},check:4})}},{id:"duaxe",url:"duaxe.html",name:"\u0110ua Xe \u0110\u01B0\u1EDDng L\xE0ng",color:"var(--lime)",soft:"var(--lime-soft)",isNew:!0,tag:"\u0110ua xe \xB7 H\xFAc nhau",players:"2 \u0111ua + 8 xem",time:"1\u20133 ph\xFAt/l\u01B0\u1EE3t",desc:"Ph\xF3ng xe qua c\xE1c l\xE0ng, l\u1EA1ng l\xE1ch tr\xE1nh c\u1ECDc, r\u01A1m, tr\xE2u qua \u0111\u01B0\u1EDDng \u2014 v\xE0 h\xFAc ngang \u0111\u1EC3 \u0111\u1EA9y \u0111\u1ED1i th\u1EE7 \u0111\xE2m v\xE0o ch\u01B0\u1EDBng ng\u1EA1i!",art:t=>{t.innerHTML='<canvas class="qc-art" width="300" height="170"></canvas>';let e=t.firstChild.getContext("2d");e.scale(300/960,170/540),gw(e)}},{id:"quyen",url:"quyen.html",name:"Quy\u1EC1n C\u01B0\u1EDBc 97",color:"var(--coral)",soft:"var(--coral-soft)",isNew:!0,tag:"\u0110\u1ED1i kh\xE1ng \xB7 H\xE0nh \u0111\u1ED9ng",players:"2 \u0111\u1EA5u + 8 xem",time:"2\u20135 ph\xFAt/tr\u1EADn",desc:"Game \u0111\xE1nh nhau ki\u1EC3u th\xF9ng game ng\xE0y x\u01B0a: 12 v\xF5 s\u0129, \u0111\xE1nh li\xEAn ho\xE0n, ch\u1EA1y l\u01B0\u1EDBt, tuy\u1EC7t chi\xEAu, \u0111\u1ED3 ho\u1EA1 pixel. Th\u1EAFng \u1EDF l\u1EA1i, thua xu\u1ED1ng x\u1EBFp h\xE0ng!",art:t=>{t.innerHTML='<canvas class="qc-art" width="300" height="170"></canvas>';let e=t.firstChild,n=e.getContext("2d");n.scale(300/960,170/540),n.translate(0,0),yw(n)}},{id:"motla",url:"motla.html",name:"M\u1ED9t L\xE1!",color:"var(--coral)",soft:"var(--coral-soft)",isNew:!0,tag:"B\xE0i m\xE0u \xB7 Si\xEAu nhanh",players:"2\u201310 ng\u01B0\u1EDDi",time:"5\u201315 ph\xFAt",desc:'\u0110\xE1nh l\xE1 c\xF9ng m\xE0u ho\u1EB7c c\xF9ng s\u1ED1, ch\u1EB7n +2 +4 c\u1ED9ng d\u1ED3n, \u0111\u1EA3o chi\u1EC1u, \u0111\u1ED5i m\xE0u. C\xF2n 1 l\xE1 nh\u1EDB h\xF4 "M\u1ED9t l\xE1!" k\u1EBBo b\u1ECB b\u1EAFt ph\u1EA1t!',art:t=>{t.innerHTML=`<div class="ml-demo">${["r7","yv","w","gd","f"].map((e,n)=>W0(e,"d"+n)).join("")}</div>`}},{id:"cangua",url:"cangua.html",name:"C\u1EDD C\xE1 Ng\u1EF1a",color:"var(--lime)",soft:"var(--lime-soft)",isNew:!0,tag:"X\xFAc x\u1EAFc \xB7 \u0110\xE1 ng\u1EF1a",players:"2\u20134 ch\u01A1i + xem",time:"15\u201330 ph\xFAt",desc:"\u0110\u1ED5 6 xu\u1EA5t qu\xE2n, \u0111i tr\xFAng l\xE0 \u0111\xE1 ng\u1EF1a \u0111\u1ED1i th\u1EE7 v\u1EC1 chu\u1ED3ng, \u0111\u01B0a \u0111\u1EE7 4 ng\u1EF1a v\u1EC1 \u0111\xEDch tr\u01B0\u1EDBc \u0111\u1EC3 th\u1EAFng. Lu\u1EADt Vi\u1EC7t quen thu\u1ED9c.",art:t=>{t.innerHTML=`<div class="lg-demo">${$0(6,"")}<span class="lg-dh" style="--hc:#ff4d5e">\u{1F434}</span><span class="lg-dh" style="--hc:#3b82f6">\u{1F434}</span><span class="lg-dh" style="--hc:#2fbf71">\u{1F434}</span><span class="lg-dh" style="--hc:#ffc43d">\u{1F434}</span></div>`}},{id:"typhu",url:"typhu.html",name:"C\u1EDD T\u1EF7 Ph\xFA",color:"var(--orange)",soft:"var(--orange-soft)",isNew:!0,tag:"Kinh doanh \xB7 \u0110\u1ED5i ch\xE1c",players:"2\u20136 ch\u01A1i + xem",time:"20\u201390 ph\xFAt",desc:"\u0110i m\u1ED9t v\xF2ng Vi\u1EC7t Nam: mua \u0111\u1EA5t H\xE0 Giang t\u1EDBi Th\u1EE7 Thi\xEAm, gom b\u1ED9 m\xE0u, x\xE2y nh\xE0, kh\xE1ch s\u1EA1n, thu ti\u1EC1n thu\xEA, \u0111\u1ED5i ch\xE1c \u2014 l\xE0m \u0111\u1ED1i th\u1EE7 ph\xE1 s\u1EA3n!",art:t=>{t.innerHTML='<div class="tp-demo"><span style="--gc:#ff6fb5">Hu\u1EBF</span><span style="--gc:#3ecf6e">H\u1ED3 T\xE2y</span><span style="--gc:#3b5bdb">Qu\u1EADn 1</span><b>\u{1F3E0}\u{1F3E8}</b></div>'}},{id:"bay",url:"bay.html",name:"V\u1ED7 C\xE1nh Sinh T\u1ED3n",color:"var(--lime)",soft:"var(--lime-soft)",isNew:!0,tag:"Ph\u1EA3n x\u1EA1 \xB7 Sinh t\u1ED3n",players:"1\u201316 ng\u01B0\u1EDDi",time:"1\u20133 ph\xFAt/v\xE1n",desc:"C\u1EA3 ph\xF2ng c\xF9ng v\u1ED7 c\xE1nh lu\u1ED3n qua c\xE1c c\u1ED9t k\u1EB9o tr\xEAn m\u1ED9t b\u1EA7u tr\u1EDDi. \u0110\u1EE5ng l\xE0 r\u01A1i \u2014 ch\xFA chim tr\u1EE5 l\u1EA1i cu\u1ED1i c\xF9ng th\u1EAFng!",art:t=>{t.innerHTML='<div class="bay-art"><span class="p1"></span><span class="p2"></span><b style="left:28%;top:40%">\u{1F425}</b><b style="left:40%;top:56%;opacity:.6">\u{1F98A}</b><b style="left:18%;top:62%;opacity:.6">\u{1F438}</b></div>'}}],zl=_d();Hs("[data-logo]").forEach(t=>t.innerHTML=Wl.wolf);Mc(zl);Gu(zl,()=>Mc(zl));$u(zl,"\u0110ang ch\u1ECDn game");kn("#gameCount").textContent=`${cd.length} game \xB7 s\u1EBD c\xF2n th\xEAm`;kn("#gameGrid").innerHTML=cd.map(t=>`
  <a class="card game-card" href="${t.url}" style="--gc:${t.color};--gs:${t.soft}">
    <div class="gc-art" id="art-${t.id}"></div>
    <div class="gc-body">
      <div class="gc-title"><b>${t.name}</b>${t.isNew?'<span class="chip new">M\u1EDAI</span>':""}</div>
      <div class="gc-tag">${t.tag}</div>
      <p>${t.desc}</p>
      <div class="gc-meta"><span class="chip">\u{1F465} ${t.players}</span><span class="chip">\u23F1 ${t.time}</span><span class="chip">\u{1F399} Voice</span></div>
      <span class="btn primary gc-go">Ch\u01A1i ngay \u2192</span>
    </div>
  </a>`).join("")+`
  <div class="card game-card soon"><div class="gc-art"><span style="font-size:64px">\u{1F9E9}</span></div>
    <div class="gc-body"><div class="gc-title"><b>Game ti\u1EBFp theo</b><span class="chip">S\u1EAFp c\xF3</span></div><p>\u0110ang \u0111\u01B0\u1EE3c n\u1EA5u... B\u1EA1n mu\u1ED1n ch\u01A1i g\xEC th\xEC \u0111\u1EC1 xu\u1EA5t nh\xE9!</p></div></div>`;for(let t of cd){let e=kn("#art-"+t.id),n=t.art(e);typeof n=="string"&&(e.innerHTML=n)}})();
