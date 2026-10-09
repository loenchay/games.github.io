(()=>{var cu=Object.defineProperty;var ig=(n,e,t)=>e in n?cu(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var sg=(n,e)=>()=>(n&&(e=n(n=0)),e);var rg=(n,e)=>{for(var t in e)cu(n,t,{get:e[t],enumerable:!0})};var cn=(n,e,t)=>ig(n,typeof e!="symbol"?e+"":e,t);var Pf={};rg(Pf,{createEvent:()=>Tf,defaultRelayUrls:()=>Rf,getRelaySockets:()=>hy,joinRoom:()=>cy,pauseRelayReconnection:()=>df,resumeRelayReconnection:()=>uf,selfId:()=>Nn,subscribe:()=>sy});var uc,ki,sa,Bu,zu,og,Gn,uu,Un,lg,cg,Hu,Vu,Gu,fu,Gs,fc,hg,ra,Ve,no,dg,Wu,pu,mu,Xl,ql,$u,gu,Yr,Xu,io,ug,qu,kn,Xs,us,Zr,fg,fs,Qa,ui,pg,yu,mg,gg,yg,Yu,rc,ac,pc,mc,Zu,Ku,Ju,vg,ju,Qu,ef,tf,xg,_g,bg,nf,sf,rf,af,Mg,vu,xu,wg,oc,Sg,Tg,Wn,Jr,Ag,qs,Nn,ps,of,hs,lf,Ln,Vs,hn,cf,pt,ut,Ws,Li,Eg,Cg,Di,cs,jr,Qr,Rg,Pg,vn,$s,hf,_u,bu,Gr,Kr,lc,df,uf,Ig,Lg,kg,gc,Yl,Dg,Ug,so,ea,Ng,Og,ff,pf,Fg,Bg,yc,zg,Hg,Vg,Zl,Gg,Wg,$g,Xg,qg,Mu,Yg,Wr,Zg,Kg,wu,Su,Jg,jg,Kl,Qg,Jl,Tu,jl,Ja,ls,$r,e0,Au,Eu,Cu,t0,n0,i0,s0,r0,Hs,Ql,Ru,a0,Za,o0,Pu,Iu,mf,l0,Lu,c0,Ii,qr,ku,h0,d0,gf,yf,Du,u0,f0,vf,p0,m0,g0,y0,v0,x0,cc,eo,_0,b0,Xr,M0,xf,w0,S0,T0,ro,ta,Dn,ja,hc,vc,Uu,A0,na,E0,C0,_f,R0,P0,I0,L0,k0,D0,U0,Ka,N0,O0,F0,B0,z0,H0,V0,ec,G0,W0,tc,Nu,nc,$0,bf,X0,Mf,wf,q0,Y0,Z0,Sf,K0,ic,Ou,to,J0,j0,ia,dc,ds,Fu,Q0,sc,ey,ty,ny,iy,xc,_c,Tf,sy,di,Af,ry,ay,Ef,oy,Cf,ly,cy,hy,Rf,If=sg(()=>{uc=Object.freeze,ki=0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2fn,sa=0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141n,Bu=0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798n,zu=0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8n,og=uc({p:ki,n:sa,h:1n,a:0n,b:7n,Gx:Bu,Gy:zu}),Gn=32,uu=n=>n instanceof Uint8Array||ArrayBuffer.isView(n)&&n.constructor.name==="Uint8Array"&&n.BYTES_PER_ELEMENT===1,Un=(n,e,t="")=>{if(uu(n)&&(e===void 0||n.length===e))return n;let i=uu(n),s=e!==void 0?` of length ${e}`:"",r=i?`length=${n.length}`:`type=${typeof n}`,a=(t?`"${t}" `:"")+"expected Uint8Array"+s+", got "+r;throw i?new RangeError(a):new TypeError(a)},lg=n=>Uint8Array.from(n),cg=(n,e,t)=>lg(Un(n,t,e)),Hu=(n,e)=>n.toString(16).padStart(e,"0"),Vu=n=>{let e="";for(let t of Un(n))e+=Hu(t,2);return e},Gu=n=>{let e="hex invalid";if(typeof n!="string")throw new TypeError(e);if(n.length%2||!/^[\da-f]*$/i.test(n))throw new RangeError(e);let t=new Uint8Array(n.length/2);for(let i=0,s=0;i<t.length;i++,s+=2){let r=n.charCodeAt(s),a=n.charCodeAt(s+1);t[i]=((r&15)+(r>>6)*9)*16+(a&15)+(a>>6)*9}return t},fu=()=>{let n=globalThis?.crypto?.subtle;if(n)return n;throw new Error("crypto.subtle must be defined, consider polyfill")},Gs=(...n)=>{let e=0;for(let s of n)e+=Un(s).length;let t=new Uint8Array(e),i=0;for(let s of n)t.set(s,i),i+=s.length;return t},fc=(n=Gn)=>{let e=globalThis?.crypto;if(typeof e?.getRandomValues!="function")throw new Error("crypto.getRandomValues must be defined, consider polyfill");return e.getRandomValues(new Uint8Array(n))},hg=BigInt,ra=(n,e,t,i="bad number: out of range")=>{if(typeof n!="bigint")throw new TypeError(i);if(e<=n&&n<t)return n;throw new RangeError(i)},Ve=(n,e=ki)=>(n%=e)>=0n?n:e+n,no=n=>Ve(n,sa),dg=(n,e)=>{if(n===0n)throw new Error("invert: expected non-zero number");if(e<=1n)throw new Error("invert: expected modulus > 1, got "+e);let t=Ve(n,e),i=e,s=0n,r=1n;for(;t!==0n;){let a=i/t,o=i-t*a,l=s-r*a;i=t,t=o,s=r,r=l}if(i!==1n)throw new Error("invert: does not exist");return Ve(s,e)},Wu=n=>{let e=mg[n];if(typeof e!="function")throw new Error("hashes."+n+" not set");return e},pu=(n,e,t)=>Un(Wu(n)(e,t),Gn,"digest"),mu=async(n,e,t)=>Un(await Wu(n)(e,t),Gn,"digest"),Xl=n=>{if(n instanceof Xs)return n;throw new TypeError("Point expected")},ql="bad point: not on curve",$u=n=>Ve(Ve(n*n)*n+7n),gu=n=>ra(n,0n,ki),Yr=n=>ra(n,1n,ki),Xu=n=>ra(n,1n,sa),io=n=>!(n&1n),ug=n=>Uint8Array.of(io(n)?2:3),qu=n=>{let e=$u(Yr(n)),t=1n;for(let i=e,s=(ki+1n)/4n;s>0n;s>>=1n)s&1n&&(t=t*i%ki),i=i*i%ki;if(Ve(t*t)!==e)throw new Error("sqrt invalid");return new Xs(n,io(t)?t:Ve(-t),1n)},Xs=(kn=class{constructor(e,t,i){cn(this,"X");cn(this,"Y");cn(this,"Z");this.X=gu(e),this.Y=Yr(t),this.Z=gu(i),uc(this)}static CURVE(){return og}static fromAffine(e){let{x:t,y:i}=e;return t===0n&&i===0n?Zr:new kn(t,i,1n)}static fromBytes(e){Un(e);let t=e.length,i=e[0],s=Qa(e,1,33);try{if(t===33&&(i===2||i===3)){let r=qu(s);return i===3?r.negate():r}if(t===65&&i===4)return new kn(s,Qa(e,33,65),1n).assertValidity()}catch{throw new Error(ql)}throw new Error(ql)}static fromHex(e){return kn.fromBytes(Gu(e))}get x(){return this.toAffine().x}get y(){return this.toAffine().y}equals(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Xl(e);return Ve(t*o)===Ve(r*s)&&Ve(i*o)===Ve(a*s)}is0(){return this.Z===0n}negate(){return new kn(this.X,Ve(-this.Y),this.Z)}double(){return this.add(this)}add(e){let{X:t,Y:i,Z:s}=this,{X:r,Y:a,Z:o}=Xl(e),l=0n,c=7n,h=0n,u=0n,d=0n,f=Ve(c*3n),g=Ve(t*r),y=Ve(i*a),m=Ve(s*o),p=Ve(t+i),M=Ve(r+a);p=Ve(p*M),M=Ve(g+y),p=Ve(p-M),M=Ve(t+s);let _=Ve(r+o);return M=Ve(M*_),_=Ve(g+m),M=Ve(M-_),_=Ve(i+s),h=Ve(a+o),_=Ve(_*h),h=Ve(y+m),_=Ve(_-h),d=Ve(l*M),h=Ve(f*m),d=Ve(h+d),h=Ve(y-d),d=Ve(y+d),u=Ve(h*d),y=Ve(g+g),y=Ve(y+g),m=Ve(l*m),M=Ve(f*M),y=Ve(y+m),m=Ve(g-m),m=Ve(l*m),M=Ve(M+m),g=Ve(y*M),u=Ve(u+g),g=Ve(_*M),h=Ve(p*h),h=Ve(h-g),g=Ve(p*y),d=Ve(_*d),d=Ve(d+g),new kn(h,u,d)}subtract(e){return this.add(Xl(e).negate())}multiply(e,t=!0){if(!t&&e===0n)return Zr;if(Xu(e),e===1n)return this;if(this.equals(us))return wg(e).p;let i=Zr,s=us,r=this;for(let a=0;t?a<256:e>0n;a++)e&1n?i=i.add(r):t&&(s=s.add(r)),r=r.double(),e>>=1n;return i}multiplyUnsafe(e){return this.multiply(e,!1)}toAffine(){let{X:e,Y:t,Z:i}=this;if(i===0n)return{x:0n,y:0n};if(i===1n)return{x:e,y:t};let s=dg(i,ki);if(Ve(i*s)!==1n)throw new Error("inverse invalid");return{x:Ve(e*s),y:Ve(t*s)}}assertValidity(){let{x:e,y:t}=this.toAffine();if(Yr(e),Yr(t),Ve(t*t)!==$u(e))throw new Error(ql);return this}toBytes(e=!0){let{x:t,y:i}=this.assertValidity().toAffine(),s=ui(t);return e?Gs(ug(i),s):Gs(Uint8Array.of(4),s,ui(i))}toHex(e){return Vu(this.toBytes(e))}},cn(kn,"BASE"),cn(kn,"ZERO"),kn),us=new Xs(Bu,zu,1n),Zr=new Xs(0n,1n,0n);Xs.BASE=us;Xs.ZERO=Zr;fg=(n,e,t)=>us.multiply(e,!1).add(n.multiply(t,!1)).assertValidity(),fs=n=>hg("0x"+(Vu(n)||"0")),Qa=(n,e,t)=>fs(n.subarray(e,t)),ui=n=>Gu(Hu(ra(n,0n,2n**256n),Gn*2)),pg=n=>{let e=fs(Un(n,Gn,"secret key"));return ra(e,1n,sa,"invalid secret key: outside of range")},yu="SHA-256",mg={hmacSha256Async:async(n,e)=>{let t=fu(),i=await t.importKey("raw",n,{name:"HMAC",hash:yu},!1,["sign"]);return new Uint8Array(await t.sign("HMAC",i,e))},hmacSha256:void 0,sha256Async:async n=>new Uint8Array(await fu().digest(yu,n)),sha256:void 0},gg=n=>{if(n=n===void 0?fc(48):n,Un(n),n.length<48||n.length>1024)throw new RangeError("expected 48-1024b");let e=Ve(fs(n),sa-1n);return ui(e+1n)},yg=n=>e=>{let t=gg(e);return{secretKey:t,publicKey:n(t)}},Yu=n=>Uint8Array.from("BIP0340/"+n,e=>e.charCodeAt(0)),rc=(n,...e)=>{let t=pu("sha256",Yu(n));return pu("sha256",Gs(t,t,...e))},ac=(n,...e)=>mu("sha256Async",Yu(n)).then(t=>mu("sha256Async",Gs(t,t,...e))),pc=n=>{let e=pg(n),t=us.multiply(e),{x:i,y:s}=t.assertValidity().toAffine(),r=io(s)?e:no(-e),a=ui(i);return{d:r,px:a}},mc=n=>no(fs(n)),Zu=(...n)=>mc(rc("challenge",...n)),Ku=async(...n)=>mc(await ac("challenge",...n)),Ju=n=>pc(n).px,vg=yg(Ju),ju=(n,e,t)=>{let i=cg(n,"message"),{px:s,d:r}=pc(e);return{m:i,px:s,d:r,a:Un(t,Gn)}},Qu=n=>{let e=mc(n);if(e===0n)throw new Error("sign failed: k is zero");let{px:t,d:i}=pc(ui(e));return{rx:t,k:i}},ef=(n,e,t,i)=>Gs(e,ui(no(n+t*i))),tf="invalid signature produced",xg=(n,e,t=fc(Gn))=>{let{m:i,px:s,d:r,a}=ju(n,e,t),o=ui(r^fs(rc("aux",a))),{rx:l,k:c}=Qu(rc("nonce",o,s,i)),h=ef(c,l,Zu(l,s,i),r);if(!sf(h,i,s))throw new Error(tf);return h},_g=async(n,e,t=fc(Gn))=>{let{m:i,px:s,d:r,a}=ju(n,e,t),o=ui(r^fs(await ac("aux",a))),{rx:l,k:c}=Qu(await ac("nonce",o,s,i)),h=ef(c,l,await Ku(l,s,i),r);if(!await rf(h,i,s))throw new Error(tf);return h},bg=(n,e)=>n instanceof Promise?n.then(e):e(n),nf=(n,e,t,i)=>{let s=Un(n,64,"signature"),r=Un(e,void 0,"message"),a=Un(t,Gn,"publicKey"),o,l,c,h;try{let u=fs(a);o=qu(u),l=Yr(Qa(s,0,Gn)),c=Xu(Qa(s,Gn,64)),h=Gs(ui(l),a,r)}catch{return!1}return bg(i(h),u=>{try{let{x:d,y:f}=fg(o,c,no(-u)).toAffine();return!(!io(f)||d!==l)}catch{return!1}})},sf=(n,e,t)=>nf(n,e,t,Zu),rf=async(n,e,t)=>nf(n,e,t,Ku),af=uc({keygen:vg,getPublicKey:Ju,sign:xg,verify:sf,signAsync:_g,verifyAsync:rf}),Mg=()=>{let n=[],e=us,t=e;for(let i=0;i<33;i++){t=e,n.push(t);for(let s=1;s<128;s++)t=t.add(e),n.push(t);e=t.double()}return n},xu=(n,e)=>{let t=e.negate();return n?t:e},wg=n=>{let e=vu||(vu=Mg()),t=Zr,i=us;for(let s=0;s<33;s++){let r=Number(n&255n);n>>=8n,r>128&&(r-=256,n+=1n);let a=s*128,o=a+Math.abs(r)-1,l=s%2!==0,c=r<0;r===0?i=i.add(xu(l,e[a])):t=t.add(xu(c,e[o]))}if(n!==0n)throw new Error("invalid wnaf");return{p:t,f:i}},{floor:oc,min:Sg,sin:Tg}=Math,Wn="Trystero",Jr=(n,e)=>Array(n).fill(void 0).map(e),Ag="0123456789AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz",qs=n=>Jr(n,()=>Ag[oc(Math.random()*62)]??"").join(""),Nn=qs(20),ps=Promise.all.bind(Promise),of=typeof window<"u",{entries:hs,fromEntries:lf,keys:Ln,values:Vs}=Object,hn=()=>{},cf="candidate",pt=n=>(n!==null&&clearTimeout(n),null),ut=n=>new Error(`${Wn}: ${n}`),Ws=(n,e)=>n instanceof Error&&n.message?n.message:typeof n=="string"&&n?n:vn(n??e),Li=(n,e)=>n instanceof Error?n:ut(Ws(n,e)),Eg=new TextEncoder,Cg=new TextDecoder,Di=n=>Eg.encode(n),cs=n=>Cg.decode(n),jr=n=>n.reduce((e,t)=>e+t.toString(16).padStart(2,"0"),""),Qr=(...n)=>n.join("@"),Rg=(n,e)=>{let t=[...n],i=()=>{let r=Tg(e++)*1e4;return r-oc(r)},s=t.length;for(;s;){let r=oc(i()*s--),a=t[s];t[s]=t[r],t[r]=a}return t},Pg=(n,e,t,i=!1)=>n.relayConfig?.urls||(i?Rg(e,hf(n.appId)):e).slice(0,n.relayConfig?.redundancy??t),vn=JSON.stringify,$s=n=>{try{return JSON.parse(n)}catch{throw ut(`failed to parse JSON: ${n}`)}},hf=(n,e=Number.MAX_SAFE_INTEGER)=>n.split("").reduce((t,i)=>t+i.charCodeAt(0),0)%e,_u=3333,bu=6e4,Gr={},Kr=null,lc=null,df=()=>{Kr||(Kr=new Promise(n=>{lc=n}).finally(()=>{lc=null,Kr=null}))},uf=()=>{lc?.()},Ig=(n,e,t)=>{let i={},s=!1,r=!1,a,o=hn;i.isClosed=!1,i.ready=new Promise(c=>o=c);let l=()=>{if(i.isClosed)return;a=void 0,r=!1;let c=new WebSocket(n);c.onclose=()=>{if(i.isClosed||r)return;if(r=!0,Kr){Kr.then(l);return}let h=Gr[n]??(Gr[n]=_u);if(h>=bu){i.isClosed=!0;return}a=setTimeout(l,Math.random()*h),Gr[n]=Sg(h*2,bu)},c.onmessage=h=>e(String(h.data)),i.socket=c,i.url=c.url,c.onopen=()=>{let h=s;s=!0,o(i),Gr[n]=_u,h&&t?.()},i.send=h=>{c.readyState===1&&c.send(h)}};return i.close=()=>{i.isClosed=!0,a!==void 0&&(clearTimeout(a),a=void 0),i.socket.close()},l(),i},Lg=n=>{let e={},t=new WeakMap,i=a=>{let o=t.get(a);if(!o)throw ut("relay bookkeeping missing registration for relay client");return o},s=()=>{let a={},o=l=>a[l]??(a[l]={});return{forKey:o,forRelay:l=>o(i(l))}},r=(a,o)=>(e[a]=o,t.set(o,a),o);return{register:(a,o)=>e[a]||r(a,o()),keyOf:i,scoped:s,getSockets:()=>lf(hs(e).flatMap(([a,o])=>{let l=n(o);return l?[[a,l]]:[]}))}},kg=()=>{if(of){let n=new AbortController;return addEventListener("online",uf,{signal:n.signal}),addEventListener("offline",df,{signal:n.signal}),()=>n.abort()}return hn},gc="AES-GCM",Yl={},Dg=n=>btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))),Ug=n=>{let e=atob(n);return new Uint8Array(e.length).map((t,i)=>e.charCodeAt(i)).buffer},so=async(n,e)=>new Uint8Array(await crypto.subtle.digest(n,Di(e))),ea=async n=>Yl[n]??(Yl[n]=Array.from(await so("SHA-1",n)).map(e=>e.toString(36)).join("")),Ng=async(n,e,t)=>crypto.subtle.importKey("raw",await crypto.subtle.digest({name:"SHA-256"},Di(`${n}:${e}:${t}`)),{name:gc},!1,["encrypt","decrypt"]),Og=async(n,e)=>jr(await so("SHA-256",`${Wn}:${n}:${e}`)),ff="$",pf=",",Fg=async(n,e)=>{let t=crypto.getRandomValues(new Uint8Array(16));return t.join(pf)+ff+Dg(await crypto.subtle.encrypt({name:gc,iv:t},await n,Di(e)))},Bg=async(n,e)=>{let[t,i]=e.split(ff);return cs(await crypto.subtle.decrypt({name:gc,iv:new Uint8Array(t?.split(pf).map(Number)??[])},await n,Ug(i??"")))},yc=57333,zg=18e4,Hg=20,Vg=class{constructor(n){cn(this,"makeOffer");cn(this,"pool",[]);cn(this,"pooled",new Set);cn(this,"leased",new Map);cn(this,"recycling",new Set);cn(this,"cleanupTimer",null);cn(this,"active",!1);this.makeOffer=n}get isActive(){return this.active}warmup(){this.pool=[],this.pooled.clear(),Jr(Hg,this.makeOffer).forEach(n=>this.push(n)),this.active=!0,this.cleanupTimer=setInterval(()=>{this.pool=this.pool.filter(n=>n.isDead?(this.pooled.delete(n),!1):!0)},yc)}push(n){n.isDead||this.pooled.has(n)||this.leased.has(n)||(this.pool.push(n),this.pooled.add(n))}shift(n){let e=[];for(;e.length<n&&this.pool.length>0;){let t=this.pool.shift();if(!t)break;this.pooled.delete(t),e.push(t)}return e}claimLeased(n){let e=this.leased.get(n);e&&(pt(e),this.leased.delete(n))}recycle(n){if(!(n.isDead||this.recycling.has(n))){if(n.connection.remoteDescription){n.destroy();return}if(!this.active){n.destroy();return}this.recycling.add(n),n.setHandlers({connect:hn,close:hn,error:hn}),n.getOffer(!0).then(e=>{if(!e||e.type!=="offer"||n.isDead||!this.active){n.destroy();return}this.push(n)}).catch(()=>n.destroy()).finally(()=>this.recycling.delete(n))}}reclaimLeased(n){let e=this.leased.get(n);e&&(pt(e),this.leased.delete(n),this.recycle(n))}lease(n){this.claimLeased(n),this.leased.set(n,setTimeout(()=>{this.leased.delete(n),this.recycle(n)},zg))}checkout(n,e,t){let i=this.shift(n),s=Math.max(0,n-i.length);s>0&&i.push(...Jr(s,this.makeOffer));let r=async(a,o=!1)=>{try{let l=await t(a);return e?(this.lease(a),{peer:a,offer:l,claim:()=>this.claimLeased(a),reclaim:()=>this.reclaimLeased(a)}):{peer:a,offer:l}}catch(l){if(this.claimLeased(a),this.pooled.delete(a),a.destroy(),!o)return r(this.makeOffer(),!0);throw l}};return ps(i.map(a=>r(a)))}getOffers(n,e){return this.checkout(n,!0,e)}destroy(){this.active=!1,this.cleanupTimer&&(clearInterval(this.cleanupTimer),this.cleanupTimer=null),this.pool.forEach(n=>n.destroy()),this.pool=[],this.pooled.clear(),this.leased.forEach((n,e)=>{pt(n),e.destroy()}),this.leased.clear(),this.recycling.forEach(n=>n.destroy()),this.recycling.clear()}},Zl=ut("incorrect password for overlapping room"),Gg=(n,e,t)=>{let i=r=>so("SHA-256",`${r}:${n}:${e}:${t}`).then(jr),s=async(r,a,o)=>{if(!n)return;if(o){let c=qs(36);await r({__trystero_pw:"challenge",c});let{data:h}=await a();if(!h||typeof h!="object"||h.__trystero_pw!=="response"||typeof h.h!="string")throw Zl;let u=await i(c);if(h.h!==u)throw Zl;return}let{data:l}=await a();if(!l||typeof l!="object"||l.__trystero_pw!=="challenge"||typeof l.c!="string")throw Zl;await r({__trystero_pw:"response",h:await i(l.c)})};return{run:s,compose:r=>n||r?async(a,o,l,c)=>{await s(o,l,c),await r?.(a,o,l,c)}:void 0}},Wg=n=>{let e=Ws(n,"unknown error");return e.startsWith("handshake ")?e:`handshake failed: ${e}`},$g=({onPeerHandshake:n,onHandshakeError:e,handshakeTimeoutMs:t,sendHandshakeData:i,sendHandshakeReady:s,onActivate:r,onFailure:a})=>{let o={},l=(u,d)=>{let f=o[u];!f||d&&f.peer!==d||f.isActive||!f.didLocalHandshakePass||!f.didReceiveRemoteReady||(f.isActive=!0,f.handshakeTimer=pt(f.handshakeTimer),r(u,f.peer))},c=(u,d,f)=>{let g=o[u];if(!g||g.peer!==d)return;let y=Wg(f);e?.(u,y),a(u,d,ut(y))},h=(u,d)=>{let f=o[u];!f||f.peer!==d||f.isActive||(f.didLocalHandshakePass=!0,s("",u).catch(g=>c(u,d,ut(`failed sending handshake readiness: ${Ws(g,"unknown send failure")}`))),l(u,d))};return{addPeer:(u,d)=>{o[u]={peer:d,isActive:!1,didLocalHandshakePass:!1,didReceiveRemoteReady:!1,handshakeTimer:null,pendingHandshakePayloads:[],handshakeWaiters:[]}},clearPeer:(u,d)=>{let f=o[u];f&&(f.handshakeTimer=pt(f.handshakeTimer),f.pendingHandshakePayloads.length=0,f.handshakeWaiters.splice(0).forEach(g=>g.reject(d)),delete o[u])},canReceiveFromPeer:(u,d)=>{let f=o[u];return!!(f&&(f.isActive||d))},start:(u,d)=>{let f=o[u];if(!f||f.peer!==d)return;f.handshakeTimer=setTimeout(()=>c(u,d,ut(`handshake timed out after ${t}ms`)),t);let g=async(p,M)=>{await i(p,u,M)},y=()=>new Promise((p,M)=>{let _=o[u];if(!_||_.peer!==d){M(ut("peer disconnected during handshake"));return}let x=_.pendingHandshakePayloads.shift();if(x){p(x);return}_.handshakeWaiters.push({resolve:p,reject:C=>M(C)})}),m=Nn<u;Promise.resolve(n?.(u,g,y,m)).then(()=>h(u,d)).catch(p=>c(u,d,Li(p,"handshake failed")))},receiveHandshakeData:(u,d,f)=>{let g=o[d];if(!g||g.isActive)return;let y=f===void 0?{data:u}:{data:u,metadata:f},m=g.handshakeWaiters.shift();if(m){m.resolve(y);return}g.pendingHandshakePayloads.push(y)},receiveHandshakeReady:u=>{let d=o[u];!d||d.isActive||(d.didReceiveRemoteReady=!0,l(u))}}},Xg=15e3,qg=5e3,Mu="icegatheringstatechange",Yg="iceconnectionstatechange",Wr="offer",Zg="answer",Kg=/out of range/i,wu=n=>n.replace(/ (\S+\.local) (\d+) typ host/g," 127.0.0.1 $2 typ host"),Su=(n,{trickleIce:e,rtcConfig:t,rtcPolyfill:i,turnConfig:s,_test_only_mdnsHostFallbackToLoopback:r})=>{let a=new(i??RTCPeerConnection)({iceServers:Jg.concat(s??[]),...t}),o={},l=[],c=[],h=e!==!1,u=[],d=[],f=!1,g=!1,y=null,m=null,p=!1,M=()=>m=pt(m),_=()=>{p||(p=!0,M(),o.close?.())},x=W=>{o.signal?o.signal(W):l.push(W)},C=W=>{let re=o.signal;o.signal=Ne=>{re?.(Ne),W(Ne)},l.length>0&&l.splice(0).forEach(Ne=>o.signal?.(Ne))},T=W=>r?wu(W):W,E=W=>{if(!r||typeof W.candidate!="string")return W;let re=wu(W.candidate);return re===W.candidate?W:{...W,candidate:re}},L=W=>({type:W.localDescription?.type??Wr,sdp:T(W.localDescription?.sdp??"")}),te=()=>{let W=a.remoteDescription?.sdp;return W?W.match(/a=ice-ufrag:([^\s]+)/)?.[1]??null:null},v=()=>(a.remoteDescription?.sdp?.match(/^m=/gm)??[]).length,w=W=>{if(!a.remoteDescription)return!1;let re=v();if(typeof W.sdpMLineIndex=="number"&&re>0&&W.sdpMLineIndex>=re)return!1;let Ne=te();return!(Ne&&W.usernameFragment&&W.usernameFragment!==Ne)},Y=async W=>{try{return await a.addIceCandidate(W),!0}catch(re){if(re instanceof Error&&Kg.test(re.message)&&typeof W.sdpMLineIndex=="number")return!1;throw re}},z=async()=>{if(!a.remoteDescription||u.length===0)return;let W=u.splice(0),re=[];for(let Ne of W){if(!w(Ne)){re.push(Ne);continue}await Y(Ne)||re.push(Ne)}re.length>0&&u.push(...re)},R=async W=>{if(w(W)){await Y(W)||u.push(W);return}u.push(W)},N=W=>{W.binaryType="arraybuffer",W.bufferedAmountLowThreshold=65535,W.onmessage=re=>{let Ne=re.data;o.data?o.data(Ne):c.push(Ne)},W.onopen=()=>o.connect?.(),W.onclose=_,W.onerror=({error:re})=>o.error?.(Li(re,"data channel error"))},U=async W=>{let re=null;try{await Promise.race([new Promise(Ne=>{let ie=()=>{W.iceGatheringState==="complete"&&(W.removeEventListener(Mu,ie),Ne())};W.addEventListener(Mu,ie),ie()}),new Promise(Ne=>{re=setTimeout(Ne,Xg)})])}finally{pt(re)}return L(W)},K=async()=>{let W=h?L(a):await U(a);return x(W),W};n?(y=a.createDataChannel("data"),N(y)):a.ondatachannel=({channel:W})=>{y=W,N(W)};let V=async(W=!1)=>{if(a.connectionState!=="closed")try{return f=!0,W&&(a.signalingState!=="stable"&&a.signalingState!=="closed"&&a.localDescription?.type===Wr&&await a.setLocalDescription({type:"rollback"}),typeof a.restartIce=="function"&&a.restartIce()),await a.setLocalDescription(W?await a.createOffer({iceRestart:!0}):void 0),await K()}catch(re){o.error?.(Li(re,"failed to create local offer"))}finally{f=!1}};a.onnegotiationneeded=async()=>V(!1),a.onicecandidate=({candidate:W})=>{if(!h||!W)return;let re=E(typeof W.toJSON=="function"?W.toJSON():{candidate:W.candidate,sdpMid:W.sdpMid,sdpMLineIndex:W.sdpMLineIndex,usernameFragment:W.usernameFragment});x({type:cf,sdp:JSON.stringify(re)})};let _e=()=>{if(a.connectionState==="failed"||a.connectionState==="closed"||a.iceConnectionState==="failed"||a.iceConnectionState==="closed"){_();return}if(a.connectionState==="connected"||a.connectionState==="connecting"||a.iceConnectionState==="connected"||a.iceConnectionState==="completed"||a.iceConnectionState==="checking"){M();return}if(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected"){m||(m=setTimeout(()=>{m=null,(a.connectionState==="disconnected"||a.iceConnectionState==="disconnected")&&_()},qg));return}};a.onconnectionstatechange=_e,a.addEventListener(Yg,_e),a.ontrack=W=>{let re=W.streams[0];if(re){if(!o.track&&!o.stream){d.push({track:W.track,stream:re});return}o.track?.(W.track,re),o.stream?.(re)}},a.onremovestream=W=>o.stream?.(W.stream);let ge=n?new Promise(W=>C(re=>{re.type===Wr&&W(re)})):Promise.resolve();return n&&queueMicrotask(()=>{!f&&a.signalingState==="stable"&&!a.localDescription&&a.connectionState!=="closed"&&a.onnegotiationneeded?.(new Event("negotiationneeded"))}),{created:Date.now(),connection:a,get channel(){return y},get isDead(){return a.connectionState==="closed"},getOffer:async(W=!1)=>{if(n)return W?V(!0):a.localDescription?.type===Wr?h?L(a):U(a):ge},async signal(W){if(W.type==="candidate"){try{let re=JSON.parse(W.sdp);re&&typeof re=="object"&&await R(E(re))}catch(re){o.error?.(Li(re,"failed to parse remote candidate"))}return}if(!(y?.readyState==="open"&&!W.sdp?.includes("a=rtpmap")))try{let re={...W,sdp:T(W.sdp)};if(W.type===Wr){if(f||a.signalingState!=="stable"&&!g){if(n)return;await ps([a.setLocalDescription({type:"rollback"}),a.setRemoteDescription(re)])}else await a.setRemoteDescription(re);return await z(),await a.setLocalDescription(),await K()}if(W.type===Zg){g=!0;try{await a.setRemoteDescription(re),await z()}finally{g=!1}}}catch(re){o.error?.(Li(re,"failed to apply remote signal"))}},sendData:W=>y?.send(W),destroy:()=>{M(),y?.close(),a.close(),f=!1,g=!1,_()},setHandlers:W=>{let{signal:re,...Ne}=W;Object.assign(o,Ne),o.data&&c.length>0&&c.splice(0).forEach(ie=>o.data?.(ie)),re&&C(re),(o.track||o.stream)&&d.length>0&&d.splice(0).forEach(({track:ie,stream:de})=>{o.track?.(ie,de),o.stream?.(de)})},offerPromise:ge,addStream:W=>W.getTracks().forEach(re=>a.addTrack(re,W)),removeStream:W=>a.getSenders().filter(re=>re.track&&W.getTracks().includes(re.track)).forEach(re=>a.removeTrack(re)),addTrack:(W,re)=>a.addTrack(W,re),removeTrack:W=>{let re=a.getSenders().find(Ne=>Ne.track===W);re&&a.removeTrack(re)},replaceTrack:(W,re)=>{let Ne=a.getSenders().find(ie=>ie.track===W);if(Ne)return Ne.replaceTrack(re)}}},Jg=[...Jr(3,(n,e)=>`stun:stun${e||""}.l.google.com:19302`),"stun:stun.cloudflare.com:3478"].map(n=>({urls:n})),jg=Object.getPrototypeOf(Uint8Array),Kl=32,Qg=0,Jl=32,Tu=34,jl=35,Ja=36,ls=16*2**10-Ja,$r=255,e0=65535,Au="bufferedamountlow",Eu="close",Cu="error",t0=1e4,n0=n=>n instanceof ArrayBuffer?new Uint8Array(n):new Uint8Array(n.buffer,n.byteOffset,n.byteLength),i0=(n,e=t0)=>n.readyState!=="open"||n.bufferedAmount<=n.bufferedAmountLowThreshold?Promise.resolve(n.readyState==="open"):new Promise(t=>{let i=!1,s=null,r=l=>{i||(i=!0,n.removeEventListener(Au,a),n.removeEventListener(Eu,o),n.removeEventListener(Cu,o),pt(s),t(l))},a=()=>r(!0),o=()=>r(!1);if(n.addEventListener(Au,a),n.addEventListener(Eu,o),n.addEventListener(Cu,o),s=setTimeout(()=>r(!1),e),n.readyState!=="open"){r(!1);return}n.bufferedAmount<=n.bufferedAmountLowThreshold&&r(!0)}),s0=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:i})=>{let s={},r={},a={},o={},l=(c,h,{includePending:u=!1}={})=>(c?Array.isArray(c)?c:[c]:e(u)).flatMap(d=>{let f=n(d,u);return f?[Promise.resolve(h(d,f))]:(console.warn(`${Wn}: no peer with id ${d} found`),[])});return{makeInternalAction:(c,h={})=>{let u=r[c];if(s[c]&&u){let m=s[c].options;if(m.sendToPending!==!!h.sendToPending||m.receiveWhilePending!==!!h.receiveWhilePending)throw ut(`action type "${c}" cannot be redefined`);return u}if(!c)throw ut("action type argument is required");let d=Di(c);if(d.byteLength>Kl)throw ut(`action type string "${c}" (${d.byteLength}b) exceeds byte limit (${Kl}). Hint: choose a shorter name.`);let f={sendToPending:!!h.sendToPending,receiveWhilePending:!!h.receiveWhilePending},g=new Uint8Array(Kl);g.set(d);let y=0;return s[c]={onComplete:hn,onProgress:hn,setOnComplete:m=>{s[c].onComplete=m;let p=o[c];p?.length&&(delete o[c],p.forEach(({payload:M,peerId:_,metadata:x})=>m(M,_,x)))},setOnProgress:m=>{s[c].onProgress=m},send:async(m,p,M,_,x)=>{i(x);let C=typeof m;if(C==="undefined")throw ut("action data cannot be undefined");let T=C!=="string",E=m instanceof Blob,L=E||m instanceof ArrayBuffer||m instanceof jg,te=M!==void 0,v=L?n0(E?await m.arrayBuffer():m):Di(T?vn(m):m),w=te?Di(vn(M)):null,Y=Math.ceil(v.byteLength/ls)+(te?1:0)||1,z=Jr(Y,(R,N)=>{let U=N===Y-1,K=!!(te&&N===0),V=new Uint8Array(Ja+(K?w?.byteLength??0:U?v.byteLength-ls*(Y-(te?2:1)):ls));return V.set(g),V.set([y>>8,y&$r],Jl),V.set([Number(U)|Number(K)<<1|Number(L)<<2|Number(T)<<3],Tu),V.set([Math.round((N+1)/Y*$r)],jl),V.set(te?K?w??new Uint8Array:v.subarray((N-1)*ls,N*ls):v.subarray(N*ls,(N+1)*ls),Ja),V});return y=y+1&e0,await ps(l(p,async(R,N)=>{let{channel:U}=N,K=0;for(;K<Y;){i(x);let V=z[K];if(!V)break;if(U&&U.bufferedAmount>U.bufferedAmountLowThreshold){let W=await i0(U);if(i(x),!W)break}let _e=n(R,f.sendToPending);if(!_e||_e!==N)break;N.sendData(V),K++;let ge=V[jl]??$r;_?.(ge/$r,R,M)}},{includePending:f.sendToPending})),[]},options:f},r[c]={send:s[c].send,onMessage:s[c].setOnComplete,onProgress:s[c].setOnProgress}},handleData:(c,h)=>{var te,v;let u=new Uint8Array(h),d=cs(u.subarray(Qg,Jl)).replaceAll("\0",""),f=s[d];if(!t(c,!!f?.options.receiveWhilePending))return;let g=(u[Jl]??0)<<8|(u[33]??0),y=u[Tu]??0,m=u[jl]??0,p=u.subarray(Ja),M=!!(y&1),_=!!(y&2),x=!!(y&4),C=!!(y&8);a[c]??(a[c]={}),(te=a[c])[d]??(te[d]={});let T=(v=a[c][d])[g]??(v[g]={chunks:[]});if(_?T.meta=$s(cs(p)):T.chunks.push(p),f?.onProgress(m/$r,c,T.meta),!M)return;let E=new Uint8Array(T.chunks.reduce((w,Y)=>w+Y.byteLength,0));T.chunks.reduce((w,Y)=>(E.set(Y,w),w+Y.byteLength),0),delete a[c][d][g];let L=x?E:C?$s(cs(E)):cs(E);if(f){f.onComplete(L,c,T.meta);return}(o[d]??(o[d]=[])).push({payload:L,peerId:c,...T.meta===void 0?{}:{metadata:T.meta}})},clearPeer:c=>{delete a[c]}}},r0=500,Hs=(n,e)=>{let t=ut(e);return t.kind=n,t.name=n==="aborted"?"AbortError":t.name,t},Ql=n=>{if(n?.aborted)throw Hs("aborted","operation aborted")},Ru=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...Object.hasOwn(n,"m")?{m:n.m}:{}}:null,a0=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.r=="string"?{r:n.r,...typeof n.e=="string"?{e:n.e}:{}}:null,Za=(n,e)=>e===void 0?n:{...n,metadata:e},o0=({getPeer:n,getPeerIds:e,canReceiveFromPeer:t})=>{let i={},s={},r=s0({getPeer:n,getPeerIds:e,canReceiveFromPeer:t,throwIfAborted:Ql}),a=r.makeInternalAction,o=r.handleData,l=d=>{let f=s[d];f&&(pt(f.timer),f.signal&&f.abortHandler&&f.signal.removeEventListener("abort",f.abortHandler),delete s[d])},c=(d,f)=>{hs(s).forEach(([g,y])=>{y.peerId===d&&(l(g),y.reject(f))})},h=(d,f)=>{r.clearPeer(d),c(d,Hs("disconnected",Ws(f,"peer disconnected")))},u=a("@_response");return u.onMessage((d,f,g)=>{let y=a0(g);if(!y)return;let m=s[y.r];if(!(!m||m.peerId!==f)){if(l(y.r),y.e!==void 0){m.reject(Hs("rejected",y.e));return}m.resolve(d)}}),{makeAction:(d,f)=>{if(f&&"onRequest"in f&&f.kind!=="request")throw ut('request actions must use kind: "request"');let g=f?.kind??"message",y=a(d),m=i[d];if(m){if(m.kind!==g)throw ut(`action type "${d}" cannot be redefined`);return m.action}let p={kind:g,action:null,pendingMessages:[],pendingRequests:[],onReceiveProgress:f?.onReceiveProgress??null},M=(z,R)=>z?(N,U)=>z(N,Za({peerId:U},R)):void 0,_=z=>{p.onReceiveProgress=z},x=(z,R,N)=>{let U=p.kind==="request"?Ru(N):null;p.onReceiveProgress?.(z,Za({peerId:R},U?U.m:N))};if(y.onProgress(x),g==="message"){let z=f?.onMessage??null,R=()=>{if(!z)return;let U=z;p.pendingMessages.splice(0).forEach(({payload:K,peerId:V,metadata:_e})=>{Promise.resolve().then(()=>U(K,Za({peerId:V},_e))).catch(ge=>console.error(`${Wn} action handler error:`,ge))})},N={send:async(U,K={})=>{await y.send(U,K.target,K.metadata,M(K.onProgress,K.metadata),K.signal)},get onMessage(){return z},set onMessage(U){z=U,R()},get onReceiveProgress(){return p.onReceiveProgress},set onReceiveProgress(U){_(U)}};return y.onMessage((U,K,V)=>{if(!z){p.pendingMessages.push(V===void 0?{payload:U,peerId:K}:{payload:U,peerId:K,metadata:V});return}let _e=z;Promise.resolve().then(()=>_e(U,Za({peerId:K},V))).catch(ge=>console.error(`${Wn} action handler error:`,ge))}),p.action=N,i[d]=p,R(),N}let C=f?.onRequest??null,T=z=>{pt(z.timer);let R=p.pendingRequests.indexOf(z);R>-1&&p.pendingRequests.splice(R,1)},E=(z,R,N)=>{u.send(null,z,{r:R,e:Ws(N,"request failed")})},L=(z,R)=>{T(z),Promise.resolve().then(()=>R(z.payload,{peerId:z.peerId,...z.metadata===void 0?{}:{metadata:z.metadata},signal:z.controller.signal})).then(async N=>{if(N===void 0)throw ut("request handler returned undefined");await u.send(N,z.peerId,{r:z.requestId})}).catch(N=>E(z.peerId,z.requestId,N)).finally(()=>z.controller.abort())},te=()=>{C&&p.pendingRequests.slice().forEach(z=>L(z,C))},v=(z,R,N,U)=>{if(C){let V={payload:z,peerId:R,...N===void 0?{}:{metadata:N},requestId:U,controller:new AbortController,timer:null};L(V,C);return}let K={payload:z,peerId:R,...N===void 0?{}:{metadata:N},requestId:U,controller:new AbortController,timer:setTimeout(()=>{T(K),K.controller.abort(),E(R,U,"request handler unavailable")},r0)};p.pendingRequests.push(K)},w=async(z,R)=>{let{target:N,metadata:U,onProgress:K,signal:V,timeoutMs:_e}=R;if(Ql(V),!n(N,!1))throw Hs("disconnected",`no active peer with id ${N}`);let ge=qs(20),W=new Promise((re,Ne)=>{let ie={peerId:N,resolve:re,reject:Ne,timer:null,...V===void 0?{}:{signal:V}},de=()=>{l(ge),Ne(Hs("aborted","operation aborted"))};V&&(ie.abortHandler=de,V.addEventListener("abort",de,{once:!0})),s[ge]=ie}).catch(re=>{throw re});try{await y.send(z,N,U===void 0?{r:ge}:{r:ge,m:U},M(K,U),V);let re=s[ge];return re&&_e!==void 0&&(re.timer=setTimeout(()=>{l(ge),re.reject(Hs("timeout","request timed out"))},_e)),await W}catch(re){throw l(ge),re}},Y={request:w,requestMany:async(z,R)=>(Ql(R.signal),await ps(R.targets.map(async N=>{try{let U={peerId:N,status:"fulfilled",value:await w(z,{target:N,...R.metadata===void 0?{}:{metadata:R.metadata},...R.timeoutMs===void 0?{}:{timeoutMs:R.timeoutMs},...R.onProgress===void 0?{}:{onProgress:R.onProgress},...R.signal===void 0?{}:{signal:R.signal}})};return R.onResult?.(U),U}catch(U){let K=Li(U,"request failed");if(K.kind==="aborted"||!K.kind)throw K;let V=K.kind==="timeout"?{peerId:N,status:"timeout"}:K.kind==="disconnected"?{peerId:N,status:"disconnected"}:{peerId:N,status:"rejected",error:K};return R.onResult?.(V),V}}))),get onRequest(){return C},set onRequest(z){C=z,te()},get onReceiveProgress(){return p.onReceiveProgress},set onReceiveProgress(z){_(z)}};return y.onMessage((z,R,N)=>{let U=Ru(N);U&&v(z,R,U.m,U.r)}),p.action=Y,i[d]=p,te(),Y},makeInternalAction:a,handleData:o,clearPeer:h}},Pu=n=>n&&typeof n=="object"&&!Array.isArray(n)&&typeof n.k=="string"?{key:n.k,...typeof n.s=="string"?{streamId:n.s}:{},...typeof n.t=="string"?{trackId:n.t}:{},...Object.hasOwn(n,"m")?{metadata:n.m}:{}}:null,Iu=n=>e=>{let t=n.get(e);return t||(t=qs(20),n.set(e,t)),t},mf=()=>{let n=new WeakMap,e=new WeakMap,t=new Map,i=new Map,s=new Map,r=new Map;return{getStreamKey:Iu(n),getTrackKey:Iu(e),rememberRemoteStream:(a,o,l)=>{t.set(a,o),l&&i.set(l,o)},getRemoteStream:(a,o)=>t.get(a)??(o?i.get(o):void 0),rememberRemoteTrack:(a,o,l,c,h)=>{let u={track:o,stream:l};s.set(a,u),c&&r.set(c,u),h&&i.set(h,l)},getRemoteTrack:(a,o)=>s.get(a)??(o?r.get(o):void 0),clearRemote:()=>{t.clear(),i.clear(),s.clear(),r.clear()}}},l0=({iterate:n,isActive:e,getSharedMediaPeer:t})=>{let i={},s={},r=mf(),a={onPeerStream:null,onPeerTrack:null},o=(h,u,d,f)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteStream(u,d,typeof d.id=="string"?d.id:void 0),a.onPeerStream?.(d,h,f))},l=(h,u,d,f,g)=>{e(h)&&(t(h)?.__trysteroMedia?.rememberRemoteTrack(u,d,f,typeof d.id=="string"?d.id:void 0,typeof f.id=="string"?f.id:void 0),a.onPeerTrack?.(d,f,h,g))},c=(h,u,d,f,g,y={})=>{let m={k:u,...y,...d===void 0?{}:{m:d}};return n(h,async(p,M)=>{await f(m,p),g(M)})};return{addStream:(h,u,d)=>c(u.target,r.getStreamKey(h),u.metadata,d,f=>f.addStream(h),{s:h.id}),removeStream:(h,u)=>{n(u,(d,f)=>f.removeStream(h))},addTrack:(h,u,d,f)=>c(d.target,r.getTrackKey(h),d.metadata,f,g=>g.addTrack(h,u),{s:u.id,t:h.id}),removeTrack:(h,u)=>{n(u,(d,f)=>f.removeTrack(h))},replaceTrack:(h,u,d,f)=>c(d.target,r.getTrackKey(u),d.metadata,f,g=>g.replaceTrack(h,u),{t:h.id}),receiveStreamMeta:(h,u)=>{if(!e(u))return;let d=Pu(h);if(!d)return;let f=t(u)?.__trysteroMedia?.getRemoteStream(d.key,d.streamId);if(f){o(u,d.key,f,d.metadata);return}(i[u]??(i[u]=[])).push(d)},receiveTrackMeta:(h,u)=>{if(!e(u))return;let d=Pu(h);if(!d)return;let f=t(u)?.__trysteroMedia?.getRemoteTrack(d.key,d.trackId);if(f){l(u,d.key,f.track,f.stream,d.metadata);return}(s[u]??(s[u]=[])).push(d)},receiveRemoteStream:(h,u)=>{if(!e(h))return;let d=i[h]?.shift();d&&o(h,d.key,u,d.metadata)},receiveRemoteTrack:(h,u,d)=>{if(!e(h))return;let f=s[h]?.shift();f&&l(h,f.key,u,d,f.metadata)},clearPeer:h=>{delete i[h],delete s[h]},get onPeerStream(){return a.onPeerStream},set onPeerStream(h){a.onPeerStream=h},get onPeerTrack(){return a.onPeerTrack},set onPeerTrack(h){a.onPeerTrack=h}}},Lu="beforeunload",c0=1e4,Ii=n=>"@_"+n,qr=new Set,ku=()=>qr.forEach(n=>n()),h0=n=>(qr.add(n),qr.size===1&&addEventListener(Lu,ku),()=>{qr.delete(n),qr.size||removeEventListener(Lu,ku)}),d0=(n,e,t,{onPeerHandshake:i,onHandshakeError:s,handshakeTimeoutMs:r=c0,isPassive:a=!1}={})=>{let o={},l={},c={},h={onPeerJoin:null,onPeerLeave:null},u=hn,d=null,f=(R,N,{includePending:U=!1}={})=>(R?Array.isArray(R)?R:[R]:Ln(U?o:l)).flatMap(K=>{let V=U?o[K]:l[K];return V?[Promise.resolve(N(K,V))]:(console.warn(`${Wn}: no peer with id ${K} found`),[])}),g=l0({iterate:(R,N)=>f(R,(U,K)=>N(U,K)),isActive:R=>!!l[R],getSharedMediaPeer:R=>o[R]??null}),y=o0({getPeer:(R,N)=>(N?o:l)[R],getPeerIds:R=>Ln(R?o:l),canReceiveFromPeer:(R,N)=>!!d?.canReceiveFromPeer(R,N)}),m=y.makeInternalAction,p=y.handleData,M=y.makeAction,_=(R,N=ut("peer disconnected"))=>{let U=Li(N,"peer disconnected");d?.clearPeer(R,U),delete o[R],delete l[R],y.clearPeer(R,U),c[R]?.splice(0).forEach(K=>K.reject(U)),delete c[R],g.clearPeer(R)},x=(R,N,U)=>{let K=o[R];if(!K||N&&K!==N)return;let V=!!l[R];_(R,U),K.destroy(),V&&h.onPeerLeave?.(R),e(R)},C=async()=>{await w.send(""),await new Promise(R=>setTimeout(R,99)),hs(o).forEach(([R,N])=>{N.destroy(),_(R,ut("room left"))}),u(),t()},T=m(Ii("ping")),E=m(Ii("pong")),L=m(Ii("signal")),te=m(Ii("stream")),v=m(Ii("track")),w=m(Ii("leave"),{sendToPending:!0,receiveWhilePending:!0}),Y=m(Ii("hsdata"),{sendToPending:!0,receiveWhilePending:!0}),z=m(Ii("hsready"),{sendToPending:!0,receiveWhilePending:!0});return d=$g({...i===void 0?{}:{onPeerHandshake:i},...s===void 0?{}:{onHandshakeError:s},handshakeTimeoutMs:r,sendHandshakeData:Y.send,sendHandshakeReady:z.send,onActivate:(R,N)=>{l[R]=N,h.onPeerJoin?.(R)},onFailure:(R,N,U)=>x(R,N,U)}),T.onMessage((R,N)=>E.send("",N)),E.onMessage((R,N)=>{let U=c[N];U?.shift()?.resolve(),U&&!U.length&&delete c[N]}),L.onMessage((R,N)=>{l[N]&&o[N]?.signal(R)}),te.onMessage((R,N)=>g.receiveStreamMeta(R,N)),v.onMessage((R,N)=>g.receiveTrackMeta(R,N)),w.onMessage((R,N)=>x(N,void 0,ut("peer left room"))),Y.onMessage((R,N,U)=>d?.receiveHandshakeData(R,N,U)),z.onMessage((R,N)=>d?.receiveHandshakeReady(N)),n((R,N)=>{let U=o[N];if(U){if(U===R)return;U.destroy(),_(N,ut("peer replaced"))}o[N]=R,d?.addPeer(N,R),R.setHandlers({data:K=>p(N,K),stream:K=>g.receiveRemoteStream(N,K),track:(K,V)=>g.receiveRemoteTrack(N,K,V),signal:K=>{l[N]&&L.send(K,N)},close:()=>x(N,R,ut("peer disconnected")),error:K=>{console.error(`${Wn} peer error:`,K),x(N,R,K)}}),d?.start(N,R)}),of&&(u=h0(()=>C().catch(hn))),{makeAction:M,leave:C,ping:async R=>{if(!l[R])throw ut(`no active peer with id ${R}`);let N=Date.now();return await new Promise((U,K)=>{let V=c[R]??(c[R]=[]),_e=()=>{let W=c[R];if(!W)return;let re=W.indexOf(ge);re>-1&&W.splice(re,1),W.length||delete c[R]},ge={resolve:()=>{_e(),U()},reject:W=>{_e(),K(W)}};V.push(ge),T.send("",R).catch(W=>ge.reject(Li(W,"peer disconnected")))}),Date.now()-N},isPassive:()=>a,getPeers:()=>lf(hs(l).map(([R,N])=>[R,N.connection])),addStream:(R,N={})=>g.addStream(R,N,te.send),removeStream:(R,N={})=>{g.removeStream(R,N.target)},addTrack:(R,N,U={})=>g.addTrack(R,N,U,v.send),removeTrack:(R,N={})=>{g.removeTrack(R,N.target)},replaceTrack:(R,N,U={})=>g.replaceTrack(R,N,U,v.send),get onPeerJoin(){return h.onPeerJoin},set onPeerJoin(R){h.onPeerJoin=R,R&&Ln(l).forEach(N=>R(N))},get onPeerLeave(){return h.onPeerLeave},set onPeerLeave(R){h.onPeerLeave=R},get onPeerStream(){return g.onPeerStream},set onPeerStream(R){g.onPeerStream=R},get onPeerTrack(){return g.onPeerTrack},set onPeerTrack(R){g.onPeerTrack=R}}},gf=1,yf=2,Du=(n,e)=>{let t=Di(n),i=new Uint8Array(3+t.byteLength+e.byteLength);return i[0]=gf,i[1]=t.byteLength>>>8&255,i[2]=t.byteLength&255,i.set(t,3),i.set(e,3+t.byteLength),i},u0=(n,e)=>{let t=Di(n),i=new Uint8Array(4+t.byteLength);return i[0]=yf,i[1]=Number(e),i[2]=t.byteLength>>>8&255,i[3]=t.byteLength&255,i.set(t,4),i},f0=n=>{let e=new Uint8Array(n);if(e.byteLength<3)return null;if(e[0]===gf){let s=(e[1]??0)<<8|(e[2]??0),r=3+s;return s<=0||e.byteLength<r?null:{type:"room",roomToken:cs(e.subarray(3,r)),payload:e.subarray(r).slice().buffer}}if(e[0]!==yf||e.byteLength<4)return null;let t=(e[2]??0)<<8|(e[3]??0),i=4+t;return t<=0||e.byteLength<i?null:{type:"presence",roomToken:cs(e.subarray(4,i)),isPresent:e[1]===1}},vf=n=>{let{connection:e,channel:t}=n;return n.isDead||e.connectionState==="closed"||e.connectionState==="failed"||e.iceConnectionState==="closed"||e.iceConnectionState==="failed"||t?.readyState==="closing"||t?.readyState==="closed"},p0=n=>{if(vf(n))return"stale";let{channel:e}=n;return!e||e.readyState!=="open"?"transient":"live"},m0=class{constructor(){cn(this,"byApp",{});cn(this,"roomPresenceHandlers",{})}getMap(n){var e;return(e=this.byApp)[n]??(e[n]={})}get(n,e){return this.byApp[n]?.[e]}isPeerStale(n){return vf(n)}getHealth(n){return this.isPeerStale(n)?"stale":"live"}setRoomPresenceHandler(n,e){return this.roomPresenceHandlers[n]=e,()=>{this.roomPresenceHandlers[n]===e&&delete this.roomPresenceHandlers[n]}}sendRoomPresence(n,e,t){n.isClosing||n.peer.isDead||n.peer.sendData(u0(e,t))}clear(n,e,{destroyPeer:t}){let i=this.byApp[n],s=i?.[e];if(!s||s.isClosing)return;s.idleTimer=pt(s.idleTimer),s.isClosing=!0,t&&!s.peer.isDead&&s.peer.destroy();let r=Vs(s.bindings);s.bindings={},s.bindingsByToken={},s.controlRoomId=null,delete i[e],r.forEach(a=>{a.handlers.close?.(),a.pendingData.length=0,a.pendingSendData.length=0,a.pendingTracks.length=0}),s.media.clearRemote(),s.pendingDataByToken.clear(),s.remoteRoomTokens.clear(),Ln(i).length===0&&delete this.byApp[n]}register(n,e,t,i){let s=this.getMap(n),r=s[e];if(r){if(r.idleTimer=pt(r.idleTimer),r.peer===t)return r;this.clear(n,e,{destroyPeer:!0})}let a={appId:n,peerId:e,peer:t,bindings:{},bindingsByToken:{},pendingDataByToken:new Map,remoteRoomTokens:new Set,idleTimer:null,controlRoomId:null,streamOwners:new Map,trackOwners:new Map,media:mf(),idleMs:i,isClosing:!1};return t.setHandlers({data:o=>this.dispatchData(a,o),signal:o=>this.dispatchSignal(a,o),close:()=>this.clear(n,e,{destroyPeer:!1}),error:o=>{console.error(`${Wn} peer error:`,o),this.clear(n,e,{destroyPeer:!1})},track:(o,l)=>this.dispatchTrack(a,o,l)}),s[e]=a,a}bind(n,e,t,{onDetach:i}){let s=t.bindings[n];if(s)return t.idleTimer=pt(t.idleTimer),{proxy:s.proxy,isNew:!1};let r={roomId:n,roomToken:null,roomTokenPromise:e,handlers:{},pendingData:[],pendingSendData:[],pendingTracks:[],detach:hn,proxy:{}},a=()=>{t.bindings[n]&&(this.pruneRoomOwnership(t,n),delete t.bindings[n],r.roomToken&&t.bindingsByToken[r.roomToken]===r&&delete t.bindingsByToken[r.roomToken],t.controlRoomId===n&&(t.controlRoomId=Ln(t.bindings)[0]??null),i(),this.scheduleIdleTimer(t))},o={created:t.peer.created,get connection(){return t.peer.connection},get channel(){return t.peer.channel},get isDead(){return t.peer.isDead},getOffer:l=>t.peer.getOffer(l),signal:l=>t.peer.signal(l),sendData:l=>{if(!r.roomToken){r.pendingSendData.push(l);return}t.peer.sendData(Du(r.roomToken,l))},destroy:()=>a(),setHandlers:l=>{let{signal:c,...h}=l;Object.assign(r.handlers,h),c&&(r.handlers.signal=c),this.flushBindingQueues(r)},offerPromise:t.peer.offerPromise,addStream:l=>{let c=t.streamOwners.get(l)??new Set,h=c.size===0;c.add(n),t.streamOwners.set(l,c),h&&t.peer.addStream(l)},removeStream:l=>{let c=t.streamOwners.get(l);c&&(c.delete(n),c.size===0&&(t.streamOwners.delete(l),t.peer.removeStream(l)))},addTrack:(l,c)=>{let h=t.trackOwners.get(l)??{stream:c,rooms:new Set},u=h.rooms.size===0;return h.stream=c,h.rooms.add(n),t.trackOwners.set(l,h),u?t.peer.addTrack(l,c):t.peer.connection.getSenders().find(d=>d.track===l)??t.peer.addTrack(l,c)},removeTrack:l=>{let c=t.trackOwners.get(l);c&&(c.rooms.delete(n),c.rooms.size===0&&(t.trackOwners.delete(l),t.peer.removeTrack(l)))},replaceTrack:(l,c)=>{let h=t.trackOwners.get(l);if(h){t.trackOwners.delete(l);let u=t.trackOwners.get(c)??{stream:h.stream,rooms:new Set};h.rooms.forEach(d=>u.rooms.add(d)),t.trackOwners.set(c,u)}return t.peer.replaceTrack(l,c)},__trysteroMedia:t.media};return r.proxy=o,r.detach=a,t.bindings[n]=r,t.controlRoomId??(t.controlRoomId=n),t.idleTimer=pt(t.idleTimer),e.then(l=>{if(t.isClosing||t.bindings[n]!==r)return;r.roomToken=l,t.bindingsByToken[l]=r;let c=t.pendingDataByToken.get(l);c?.length&&(r.pendingData.push(...c),t.pendingDataByToken.delete(l)),r.pendingSendData.splice(0).forEach(h=>t.peer.sendData(Du(l,h))),this.flushBindingQueues(r)}),{proxy:o,isNew:!0}}pruneRoomOwnership(n,e){n.streamOwners.forEach((t,i)=>{t.delete(e),t.size===0&&(n.streamOwners.delete(i),n.peer.removeStream(i))}),n.trackOwners.forEach((t,i)=>{t.rooms.delete(e),t.rooms.size===0&&(n.trackOwners.delete(i),n.peer.removeTrack(i))})}scheduleIdleTimer(n){n.isClosing||Ln(n.bindings).length>0||(n.idleTimer=pt(n.idleTimer),n.idleTimer=setTimeout(()=>{let e=this.byApp[n.appId]?.[n.peerId];!e||Ln(e.bindings).length>0||this.clear(n.appId,n.peerId,{destroyPeer:!0})},n.idleMs))}getSignalBinding(n){if(n.controlRoomId){let t=n.bindings[n.controlRoomId];if(t?.handlers.signal)return t}let e=Vs(n.bindings).find(t=>!!t.handlers.signal);return e?(n.controlRoomId=e.roomId,e):null}flushBindingQueues(n){let{handlers:e}=n;e.data&&n.pendingData.length>0&&n.pendingData.splice(0).forEach(t=>e.data?.(t)),(e.track||e.stream)&&n.pendingTracks.length&&n.pendingTracks.splice(0).forEach(({track:t,stream:i})=>{e.track?.(t,i),e.stream?.(i)})}dispatchData(n,e){let t=f0(e);if(!t)return;if(t.type==="presence"){t.isPresent?n.remoteRoomTokens.add(t.roomToken):n.remoteRoomTokens.delete(t.roomToken),this.roomPresenceHandlers[n.appId]?.(n.peerId,t.roomToken,t.isPresent);return}let i=n.bindingsByToken[t.roomToken];if(!i){let s=n.pendingDataByToken.get(t.roomToken)??[];s.push(t.payload),n.pendingDataByToken.set(t.roomToken,s);return}i.handlers.data?i.handlers.data(t.payload):i.pendingData.push(t.payload)}dispatchSignal(n,e){this.getSignalBinding(n)?.handlers.signal?.(e)}dispatchTrack(n,e,t){Vs(n.bindings).forEach(i=>{if(i.handlers.track||i.handlers.stream){i.handlers.track?.(e,t),i.handlers.stream?.(t);return}i.pendingTracks.push({track:e,stream:t})})}},g0=23333,y0=12,v0=7533,x0=23333,cc="__legacy__",eo="offer-placeholder",_0=["offer","answer","candidate"],b0=n=>{if(typeof n=="string")try{let e=$s(n);return e&&typeof e=="object"?e:null}catch{return null}return n&&typeof n=="object"?n:null},Xr=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,M0=n=>_0.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),xf=(n,e,t,i,s,r)=>{n.toCipher(e).then(a=>{n.isLeaving()||!r()||i(t,vn(s(a.sdp)))})},w0=()=>({status:"idle",offerPeer:null,offerId:null,offerSdp:null,offerInitPromise:null,offerAnswered:!1,offerRelays:[],offerSignalRelays:[],offerSignalBacklog:[],offerRelayTimers:[],offerExpiryTimer:null,connectedPeer:null,connectedPeerUnhealthySinceMs:null,answeringExpiryTimer:null,answeringPeer:null,answerSent:!1,connectionErrorReported:!1,pendingCandidates:{}}),S0=n=>[...n.turnConfig??[],...n.rtcConfig?.iceServers??[]].some(({urls:e})=>(Array.isArray(e)?e:[e]).some(t=>/^turns?:/i.test(t))),T0=(n,e)=>`could not connect to peer ${n} after exchanging SDP; ${S0(e)?"check that your TURN server URLs and credentials are reachable by both peers":"configure TURN servers with turnConfig or rtcConfig.iceServers"}`,ro=(n,e,t)=>{n.isLeaving()||e.connectedPeer||e.connectionErrorReported||(e.connectionErrorReported=!0,n.onJoinError?.({error:T0(t,n.config),appId:n.appId,peerId:t,roomId:n.roomId}))},ta=(n,e)=>n[e]??(n[e]=w0()),Dn=n=>{n.connectedPeer?n.status="connected":n.answeringPeer?n.status="answering":n.offerPeer||n.offerRelays.some(Boolean)?n.status="offering":n.status="idle"},ja=(n,e)=>{n.answeringPeer===e&&(n.answeringExpiryTimer=pt(n.answeringExpiryTimer),n.answeringPeer=null,n.answerSent=!1,Dn(n))},hc=(n,e,t)=>{n.connectedPeer&&(n.connectedPeer.isDead||n.connectedPeer.destroy(),n.connectedPeer=null,n.connectedPeerUnhealthySinceMs=null,Dn(n))},vc=(n,e)=>{n.offerRelayTimers[e]=pt(n.offerRelayTimers[e]),n.offerRelays[e]&&(n.offerRelays[e]=void 0,Dn(n))},Uu=(n,e)=>{n?.offerRelays[e]===eo&&vc(n,e)},A0=n=>{if(n.isDead||n.connection.connectionState==="closed")return!0;try{return!!n.connection.remoteDescription}catch{return!0}},na=(n,e)=>{let t=n.offerAnswered;n.offerExpiryTimer=pt(n.offerExpiryTimer),n.offerInitPromise=null,n.offerRelays.forEach((i,s)=>vc(n,s)),n.offerRelays=[],n.offerSignalRelays=[],n.offerRelayTimers=[],n.offerSignalBacklog=[],n.offerPeer&&n.offerPeer!==n.connectedPeer&&(t||A0(n.offerPeer)?n.offerPeer.isDead||n.offerPeer.destroy():e.recycle(n.offerPeer)),n.offerPeer=null,n.offerId=null,n.offerSdp=null,n.offerAnswered=!1,n.connectionErrorReported=!1,Dn(n)},E0=(n,e,t,i)=>{pt(e.answeringExpiryTimer),e.answeringExpiryTimer=setTimeout(()=>{let s=n.peerStates[t];!s||s.connectedPeer||s.answeringPeer!==i||(s.answerSent&&ro(n,s,t),i.destroy(),ja(s,i),n.checkDeactivate())},x0)},C0=async(n,e,t)=>{let i=t?[t,cc]:[cc];for(let s of i){let r=n.pendingCandidates[s];if(r?.length){delete n.pendingCandidates[s];for(let a of r)await e.signal(a)}}},_f=(n,e,t,i=yc)=>{pt(e.offerExpiryTimer);let s=e.offerId;e.offerExpiryTimer=setTimeout(()=>{let r=n.peerStates[t];!r||r.connectedPeer||r.offerId!==s||(r.offerAnswered&&ro(n,r,t),na(r,n.offerPool),n.checkDeactivate())},i)},R0=(n,e,t,i)=>e.offerPeer&&e.offerId&&e.offerSdp?Promise.resolve({peer:e.offerPeer,offer:e.offerSdp,offerId:e.offerId}):(e.offerInitPromise||(e.offerInitPromise=(async()=>{let s=(await n.offerPool.checkout(1,!1,n.encryptOffer))[0];if(!s)throw ut("failed to allocate offer peer");let{peer:r,offer:a}=s;e.offerPeer=r,e.offerId=qs(y0),e.offerSdp=a,e.offerAnswered=!1,e.connectionErrorReported=!1,e.offerSignalBacklog=[],Dn(e);let o=()=>{e.offerPeer===r&&!e.connectedPeer&&(e.offerAnswered&&ro(n,e,t),na(e,n.offerPool)),n.disconnectPeer(r,t),n.checkDeactivate()};return r.setHandlers({connect:()=>n.connectPeer(r,t,i),signal:l=>{e.offerPeer===r&&(e.offerSignalBacklog.push(l),e.offerSignalRelays.forEach(c=>c?.(l)))},close:o,error:o}),_f(n,e,t),{peer:r,offer:a,offerId:e.offerId}})().finally(()=>e.offerInitPromise=null)),e.offerInitPromise),P0=async(n,e,t,i,s)=>{if(i){n.attachSharedPeerToRoom(t,i);return}let r=n.peerStates[t];if(!r||r.connectedPeer||r.answeringPeer||r.offerAnswered){Uu(r,e);return}if(r.offerRelays[e]!==eo)return;let[a,o]=await ps([ea(Qr(n.rootTopicPlaintext,t)),R0(n,r,t,e)]);if(n.isLeaving())return;if(r.connectedPeer||r.answeringPeer||r.offerAnswered||r.offerRelays[e]!==eo){Uu(r,e);return}r.offerRelayTimers[e]=pt(r.offerRelayTimers[e]),r.offerRelays[e]=!0,Dn(r),r.offerRelayTimers[e]=setTimeout(()=>D0(n,t,e),(n.announceIntervals[e]??n.announceIntervalMs)*.9);let l=!1;r.offerSignalRelays[e]=c=>{l&&(n.isLeaving()||r.connectedPeer||r.offerPeer!==o.peer||r.offerId!==o.offerId||c.type!=="candidate"||xf(n,c,a,s,h=>({peerId:Nn,offerId:o.offerId,candidate:h,...n.isPassive?{passive:!0}:{}}),()=>!r.connectedPeer&&r.offerPeer===o.peer&&r.offerId===o.offerId))},s(a,vn({peerId:Nn,offerId:o.offerId,offer:o.offer,...n.isPassive?{passive:!0}:{}})),l=!0,r.offerSignalBacklog.forEach(c=>r.offerSignalRelays[e]?.(c))},I0=async(n,e,t,i,s,r,a)=>{let o=ta(n.peerStates,t);if(o.answeringPeer||o.offerAnswered)return;let l=!!(o.offerPeer||o.offerRelays.some(Boolean));if((l||r)&&Nn<t)return;l&&na(o,n.offerPool);let c=n.initPeer(!1,n.config);o.answeringPeer=c,o.answerSent=!1,o.connectionErrorReported=!1,E0(n,o,t,c),Dn(o);let h=()=>{o.answeringPeer===c&&!o.connectedPeer&&o.answerSent&&ro(n,o,t),ja(o,c),n.disconnectPeer(c,t),n.checkDeactivate()};c.setHandlers({connect:()=>n.connectPeer(c,t,e),close:h,error:h});let u;try{u=await n.toPlain({type:"offer",sdp:i})}catch{ja(o,c),n.onJoinError?.({error:"incorrect room password when decrypting offer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(c.isDead){ja(o,c);return}let d=await ea(Qr(n.rootTopicPlaintext,t));n.isLeaving()||(c.setHandlers({signal:f=>{n.isLeaving()||o.answeringPeer!==c||c.isDead||f.type!=="answer"&&f.type!=="candidate"||xf(n,f,d,a,g=>{let y={peerId:Nn};return f.type==="answer"?(o.answerSent=!0,y.answer=g):y.candidate=g,s&&(y.offerId=s),n.isPassive&&(y.passive=!0),y},()=>o.answeringPeer===c&&!c.isDead)}}),await c.signal(u),await C0(o,c,s))},L0=async(n,e,t,i,s)=>{var u;let r;try{r=await n.toPlain({type:cf,sdp:t})}catch{return}let a=ta(n.peerStates,e),o=i&&a?.offerPeer&&a.offerId===i?a.offerPeer:null,l=a?.answeringPeer??null,c=!i&&a?.offerPeer?a.offerPeer:null,h=s&&!s.isDead?s:o??l??c;if(!h||h.isDead){let d=i??cc;((u=a.pendingCandidates)[d]??(u[d]=[])).push(r);return}h.signal(r)},k0=async(n,e,t,i,s,r)=>{let a;try{a=await n.toPlain({type:"answer",sdp:i})}catch{n.onJoinError?.({error:"incorrect room password when decrypting answer",appId:n.appId,peerId:t,roomId:n.roomId});return}if(r)n.offerPool.claimLeased(r),r.setHandlers({connect:()=>n.connectPeer(r,t,e),close:()=>n.disconnectPeer(r,t)}),r.signal(a);else{let o=n.peerStates[t];if(!o||!o.offerPeer||o.offerAnswered||s&&o.offerId&&s!==o.offerId||o.offerPeer.isDead)return;o.offerAnswered=!0,_f(n,o,t,g0),o.offerPeer.signal(a)}},D0=(n,e,t)=>{let i=n.peerStates[e];!i||i.connectedPeer||i.offerRelays[t]&&(vc(i,t),n.checkDeactivate())},U0=n=>e=>async(t,i,s)=>{if(n.isLeaving())return;let r=b0(i);if(!r||M0(r))return;let a=Xr(r,"peerId")??"",o=Xr(r,"offer"),l=Xr(r,"answer"),c=Xr(r,"candidate"),h=Xr(r,"offerId"),u=r.peer,d=r.hasOutgoingOffer===!0,f=r.passive===!0;if(!a||a===Nn)return;let[g,y]=await ps([n.rootTopicP,n.selfTopicP]);if(n.isLeaving()||t!==g&&t!==y||n.isPassive&&f||(n.isPassive&&!n.isActive&&!l&&!c&&(n.isActive=!0,n.requeueAnnounce?.()),n.isPassive&&!n.isActive))return;let m=n.peerStates[a],p=m?.connectedPeer;if(p&&m){let x=p0(p);if(x==="live"){m.connectedPeerUnhealthySinceMs=null;return}if(x==="stale")hc(m,a,"message-from-stale-peer");else{let C=Date.now(),T=m.connectedPeerUnhealthySinceMs??C;if(m.connectedPeerUnhealthySinceMs=T,C-T<v0)return;hc(m,a,"message-from-prolonged-disconnect")}}let M=n.sharedPeers.get(n.appId,a);M&&n.sharedPeers.getHealth(M.peer)==="stale"&&(n.sharedPeers.clear(n.appId,a,{destroyPeer:!0}),M=void 0);let _=!!(a&&!o&&!l&&!c);if(_&&!M){let x=ta(n.peerStates,a),C=Nn<a;if(x.answeringPeer||x.connectedPeer||x.offerAnswered)return;if(!C&&!x.offerPeer){let T=await ea(Qr(n.rootTopicPlaintext,a));!n.isLeaving()&&!x.connectedPeer&&s(T,vn({peerId:Nn}));return}if(x.offerRelays[e])return;x.offerRelays[e]=eo,Dn(x)}if(M&&(o||l||c)){if(M.bindings[n.roomId])return;n.attachSharedPeerToRoom(a,M);return}if(_)return P0(n,e,a,M,s);if(o)return I0(n,e,a,o,h,d,s);if(c)return L0(n,a,c,h,u);if(l)return k0(n,e,a,l,h,u)},Ka=5333,N0=[233,533,1333],O0=7533,F0=123333,B0=({init:n,subscribe:e,announce:t,deactivate:i})=>{let s={},r={},a={},o={},l=new m0,c=()=>Vs(s).some(C=>Ln(C).length>0),h=C=>r[C]??(r[C]={}),u=C=>a[C]??(a[C]={}),d=(C,T,E)=>{l.getHealth(C.peer)==="live"&&l.sendRoomPresence(C,T,E)},f=(C,T)=>{hs(r[C]??{}).forEach(([E,L])=>{if(!L.shouldAdvertise())return;let{roomToken:te,roomTokenPromise:v}=L;if(te){d(T,te,!0);return}v.then(w=>{r[C]?.[E]===L&&L.roomToken===w&&(l.get(C,T.peerId)!==T||T.isClosing||L.shouldAdvertise()&&d(T,w,!0))})})},g=(C,T,E)=>Vs(l.getMap(C)).forEach(L=>d(L,T,E)),y=C=>{o[C]||(o[C]=l.setRoomPresenceHandler(C,(T,E,L)=>{if(!L)return;let te=l.get(C,T),v=a[C]?.[E];!te||!v||r[C]?.[v]?.attachSharedPeerToRoom(T,te)}))},m=C=>{s[C]&&Ln(s[C]).length>0||(o[C]?.(),delete o[C],delete r[C],delete a[C])},p=!1,M=[],_=null,x=hn;return(C,T,E)=>{if(!C)throw ut("requires a config map as the first argument");if(E&&typeof E!="object")throw ut("third argument must be a callbacks object");let{appId:L}=C,te=E?.onJoinError,v=E?.onPeerHandshake,w=E?.handshakeTimeoutMs;if(!L)throw ut("config map is missing appId field");if(!T)throw ut("roomId argument required");if(w!==void 0&&(!Number.isFinite(w)||w<=0))throw ut("handshakeTimeoutMs must be a positive number");if(s[L]?.[T])return s[L][T];y(L);let Y=Qr(Wn,L,T),z=ea(Y),R=ea(Qr(Y,Nn)),N=Ng(C.password??"",L,T),U=Og(L,T),K=C._test_only_sharedPeerIdleMs??F0,V=!1,_e=we=>async ne=>({type:ne.type,sdp:await we(N,ne.sdp)}),ge=_e(Bg),W=_e(Fg),re=l.getMap(L),Ne=()=>Su(!0,C),ie=!1;_||(_=new Vg(Ne));let de=_,xe=async we=>{let ne=await we.getOffer(Date.now()-we.created>yc);if(!ne||ne.type!=="offer")throw ut("failed to get offer for peer");return(await W(ne)).sdp},Ee=(we,ne)=>{let he=ta(pe.peerStates,we);he.answeringExpiryTimer=pt(he.answeringExpiryTimer),he.answeringPeer=null;let{proxy:Oe,isNew:Se}=l.bind(T,U,ne,{onDetach:()=>{let me=pe.peerStates[we];me?.connectedPeer===ne.peer&&(me.connectedPeer=null,me.connectedPeerUnhealthySinceMs=null,Dn(me))}});he.connectedPeer=ne.peer,he.connectedPeerUnhealthySinceMs=null,Dn(he),Se&&J(Oe,we),na(he,de)},Xe=(we,ne,he)=>{if(V){we.destroy();return}let Oe=ta(pe.peerStates,ne);if(Oe.connectedPeer){let qe=re[ne];if(qe&&Oe.connectedPeer===qe.peer&&qe.bindings[T])return;Oe.connectedPeer!==we&&!we.isDead&&we.destroy();return}let Se=re[ne];if(Se&&l.getHealth(Se.peer)==="stale"&&(l.clear(L,ne,{destroyPeer:!0}),Se=void 0),Se&&Se.peer!==we){we.isDead||we.destroy(),Ee(ne,Se);return}let me=!Se;Se||(Se=l.register(L,ne,we,K)),Ee(ne,Se),me&&f(L,Se)},We=(we,ne)=>{if(V)return;let he=pe.peerStates[ne];he?.connectedPeer===we&&(hc(he,ne,"close-event"),ce(),!He&&ie&&pe.requeueAnnounce?.())},He=!!C.passive,Ge=null,ae,I=hn,ce=()=>{if(!He||!pe.isActive)return;let we=!1;hs(pe.peerStates).forEach(([ne,he])=>{he.connectedPeer||he.answeringPeer||he.offerInitPromise||he.offerPeer||he.offerRelays.some(Boolean)?we=!0:he.status==="idle"&&delete pe.peerStates[ne]}),we||(pe.isActive=!1,ae=pt(ae),b.forEach(pt),b.length=0,I(),Ge?.roomToken&&g(L,Ge.roomToken,!1))},pe={appId:L,roomId:T,config:C,peerStates:{},rootTopicPlaintext:Y,rootTopicP:z,selfTopicP:R,toPlain:ge,toCipher:W,isLeaving:()=>V,isPassive:He,isActive:!He,onJoinError:te,sharedPeers:l,offerPool:de,encryptOffer:xe,initPeer:Su,connectPeer:Xe,disconnectPeer:We,attachSharedPeerToRoom:Ee,checkDeactivate:ce,announceIntervals:[],announceIntervalMs:Ka},ve={config:C,appId:L,roomId:T,isPassive:He},Ae=U0(pe);if(!p){let we=n(C);M=(Array.isArray(we)?we:[we]).map(ne=>Promise.resolve(ne)),p=!0,x=C.relayConfig?.manualReconnection?hn:kg()}!He&&!de.isActive&&de.warmup(),pe.announceIntervals=M.map(()=>Ka);let Fe=M.map(()=>Ka),Re=M.map(()=>0),P=M.map(()=>0),b=[],q=M.map(async(we,ne)=>e(await we,await z,await R,Ae(ne),he=>de.getOffers(he,xe),ve));ps([z,R]).then(([we,ne])=>{if(V)return;let he=async(Oe,Se)=>{if(V||He&&!pe.isActive)return;let me=He?{passive:!0}:void 0,qe;try{qe=await t(Oe,we,ne,me,ve),P[Se]=0}catch(Ie){let ee=P[Se]??0;ee===0&&C.relayConfig?.warnOnRelayFailure!==!1&&console.warn(`${Wn}: announce failed - ${Ws(Ie,"")}`),P[Se]=ee+1}if(V||He&&!pe.isActive||qe&&typeof qe!="number"&&"stopAnnouncing"in qe)return;typeof qe=="number"?(pe.announceIntervals[Se]=qe,Fe[Se]=qe):qe&&(Fe[Se]=qe.nextAnnounceMs,ie||(ie=qe.reannounceOnDisconnect===!0));let Ye=Re[Se]??0;Re[Se]=Ye+1;let ht=Fe[Se]??Ka,F=N0[Ye];b[Se]=setTimeout(()=>{he(Oe,Se)},typeof F=="number"?Math.min(ht,F):ht)};I=()=>{i&&M.forEach(async Oe=>{let Se=await Oe;V||i(Se,we,ne,ve)})},pe.requeueAnnounce=()=>{b.forEach(pt),b.length=0,ae=pt(ae),de.isActive||de.warmup(),Ge?.roomToken&&g(L,Ge.roomToken,!0),ae=setTimeout(ce,O0),M.forEach(async(Oe,Se)=>{let me=await Oe;me&&!V&&(Re[Se]=0,he(me,Se))})},q.forEach(async(Oe,Se)=>{if(await Oe,V)return;let me=await M[Se];me&&!V&&(!He||pe.isActive)&&he(me,Se)})});let J=hn,{compose:le}=Gg(C.password??"",L,T),oe=le(v),Be={...oe?{onPeerHandshake:oe}:{},...w===void 0?{}:{handshakeTimeoutMs:w},isPassive:He,onHandshakeError:(we,ne)=>te?.({error:ne.replace(/^handshake failed: /,""),appId:L,peerId:we,roomId:T})};s[L]??(s[L]={});let Pe=h(L),De=d0(we=>J=we,we=>{if(V)return;let ne=pe.peerStates[we];ne?.connectedPeer&&(ne.connectedPeer=null,Dn(ne),ce())},()=>{V=!0,J=hn;let we=r[L]?.[T];we?.roomToken&&(g(L,we.roomToken,!1),delete a[L]?.[we.roomToken],a[L]&&!Ln(a[L]).length&&delete a[L]),r[L]&&(delete r[L][T],Ln(r[L]).length||delete r[L]),hs(pe.peerStates).forEach(([ne,he])=>{if(he.answeringExpiryTimer=pt(he.answeringExpiryTimer),he.connectedPeer&&!he.connectedPeer.isDead){let Oe=re[ne];(!Oe||Oe.peer!==he.connectedPeer)&&he.connectedPeer.destroy()}he.answeringPeer&&!he.answeringPeer.isDead&&he.answeringPeer.destroy(),na(he,de),he.connectedPeer=null,he.answeringPeer=null,Dn(he)}),s[L]&&(delete s[L][T],Ln(s[L]).length===0&&delete s[L]),b.forEach(pt),ae=pt(ae),q.forEach(async ne=>{(await ne)()}),!c()&&(p=!1,de.destroy(),_=null,x(),m(L))},Be);return Ge={roomToken:null,roomTokenPromise:U,attachSharedPeerToRoom:Ee,shouldAdvertise:()=>!He||pe.isActive},Pe[T]=Ge,U.then(we=>{let ne=Ge;!ne||V||r[L]?.[T]!==ne||(ne.roomToken=we,u(L)[we]=T,Vs(re).forEach(he=>{he.remoteRoomTokens.has(we)&&Ee(he.peerId,he)}),(!He||pe.isActive)&&g(L,we,!0))}),s[L][T]=De}},z0=["offer","answer","candidate"],H0=6e4,V0=n=>{if(typeof n=="string")try{let e=$s(n);return e&&typeof e=="object"?e:null}catch{return null}return n},ec=(n,e)=>typeof n[e]=="string"&&n[e]?n[e]:void 0,G0=n=>z0.some(e=>e in n&&(typeof n[e]!="string"||n[e]==="")),W0=n=>{let e=V0(n);if(!e||G0(e))return!1;let t=ec(e,"peerId");return!!(t&&t!==Nn&&e.passive!==!0&&!ec(e,"answer")&&!ec(e,"candidate"))},tc=n=>{if(!n)throw ut("topic strategy missing room context");return n},Nu=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),nc=(n,e,t,i)=>({kind:e,appId:n.appId,roomId:n.roomId,rootTopic:t,selfTopic:i}),$0=({steadyAnnounceIntervalMs:n=H0,reannounceOnDisconnect:e=!0,init:t,subscribeTopic:i,publishTopic:s,unpublishTopic:r})=>B0({init:t,subscribe:async(a,o,l,c,h,u)=>{let d=tc(u),f=(C,T)=>{s(a,C,T,nc(d,"signal",o,l))},g=null,y=!1,m=null,p=!1,M=C=>{y||(y=!0,C())},_=()=>(m||(m=Promise.resolve(i(a,l,(C,T)=>{p||c(C,T,f)},Nu(d,"self",o,l))).then(C=>{g=C,p&&M(C)})),m);d.isPassive||await _();let x=await i(a,o,async(C,T)=>{p||(d.isPassive&&W0(T)&&await _(),p||await c(C,T,f))},Nu(d,"root",o,l));return()=>{p=!0,g&&M(g),x()}},announce:async(a,o,l,c,h)=>{let u=tc(h),d=await s(a,o,vn({peerId:Nn,...c}),nc(u,"announce",o,l));return typeof d=="number"||d!==void 0&&"stopAnnouncing"in d?d:{nextAnnounceMs:d?.nextAnnounceMs??n,reannounceOnDisconnect:d?.reannounceOnDisconnect??e}},...r?{deactivate:(a,o,l,c)=>{let h=tc(c);return r(a,o,nc(h,"announce",o,l))}}:{}}),bf=Lg(n=>n.socket),X0=5,Mf="x",wf="EVENT",{secretKey:q0,publicKey:Y0}=af.keygen(),Z0=jr(Y0),Sf={},K0={},ic={},Ou=250,to=6e4,J0=15*6e4,j0=5333,ia=new WeakMap,dc=new WeakSet,ds=new WeakMap,Fu=n=>{let e=ia.get(n),t=Math.min(e?.delayMs?Math.max(to,e.delayMs*2):to,J0);return ia.set(n,{delayMs:t,untilMs:Date.now()+t}),t},Q0=n=>{let e=ia.get(n);if(!e)return 0;let t=e.untilMs-Date.now();return t>0?t:0},sc=n=>({nextAnnounceMs:n}),ey={stopAnnouncing:!0},ty=n=>{if(dc.has(n))return!1;let e=ds.get(n);return e&&(clearTimeout(e.timer),ds.delete(n)),dc.add(n),ia.delete(n),n.close?.(),!0},ny=(n,e)=>{let t=ds.get(n);t&&(clearTimeout(t.timer),t.eventIds.add(e));let i=t?.eventIds??new Set([e]),s=setTimeout(()=>{ds.delete(n)},j0);ds.set(n,{eventIds:i,timer:s})},iy=(n,e)=>{let t=ds.get(n);return t?.eventIds.has(e)?(clearTimeout(t.timer),ds.delete(n),!0):!1},xc=()=>Math.floor(Date.now()/1e3),_c=n=>ic[n]??(ic[n]=hf(n,1e4)+2e4),Tf=async(n,e)=>{let t={kind:_c(n),tags:[[Mf,n]],created_at:xc(),content:e,pubkey:Z0},i=await so("SHA-256",vn([0,t.pubkey,t.created_at,t.kind,t.tags,t.content]));return vn([wf,{...t,id:jr(i),sig:jr(await af.signAsync(i,q0))}])},sy=(n,e)=>(Sf[n]=e,vn(["REQ",n,{kinds:[_c(e)],since:xc(),"#x":[e]}])),di={},Af=n=>{n.flushWaiters.forEach(e=>e()),n.flushWaiters.clear()},ry=(n,e,t)=>{var s;let i=di[s=n.url]??(di[s]={subIds:[],topics:new Map,updateTimer:null,flushWaiters:new Set});i.topics.set(e,t),Ef(n,i)},ay=(n,e)=>{let t=di[n.url];t&&(t.topics.delete(e),t.topics.size===0?(t.updateTimer!==null&&(clearTimeout(t.updateTimer),t.updateTimer=null),Af(t),t.subIds.forEach(i=>n.send(vn(["CLOSE",i]))),delete di[n.url]):Ef(n,t))},Ef=(n,e)=>{e.updateTimer===null&&(e.updateTimer=setTimeout(()=>{e.updateTimer=null;try{Cf(n)}finally{Af(e)}},0))},oy=n=>{let e=di[n.url];return!e||e.updateTimer===null?Promise.resolve():new Promise(t=>e.flushWaiters.add(t))},Cf=n=>{let e=di[n.url];if(!e||e.topics.size===0)return;let t=[...e.topics.keys()],i=[],s=xc();for(let r=0;r<t.length;r+=Ou)i.push(t.slice(r,r+Ou));for(;e.subIds.length>i.length;){let r=e.subIds.pop();r&&n.send(vn(["CLOSE",r]))}i.forEach((r,a)=>{var l;let o=(l=e.subIds)[a]??(l[a]=qs(64));n.send(vn(["REQ",o,{kinds:[...new Set(r.map(_c))],since:s,"#x":r}]))})},ly=n=>{let e=di[n.url];e&&e.topics.size>0&&Cf(n)},cy=$0({init:n=>Pg(n,Rf,X0,!0).map(e=>{let t=bf.register(e,()=>Ig(e,i=>{let[s,r,a,o]=$s(i);if(s!==wf){let l=`${Wn}: relay failure from ${t.url} - `,c=s==="CLOSED"&&typeof a=="string"?a:o,h=s==="OK"&&a===!1,u=h&&c?.startsWith("rate-limited:"),d=h&&c?.startsWith("duplicate:"),f=s==="CLOSED"||h&&!u&&!d,g=s==="OK"&&iy(t,r);if(f&&!ty(t))return;u?Fu(t):g&&ia.delete(t),!d&&n.relayConfig?.warnOnRelayFailure!==!1&&(s==="NOTICE"?console.warn(l+r):(h||s==="CLOSED")&&console.warn(l+c));return}if(a&&typeof a=="object"&&"content"in a){let{content:l}=a,c=K0[r];if(c){c(Sf[r]??"",l);return}let h=di[t.url];if(h?.subIds.includes(r)&&a.tags){let u=a.tags.find(d=>d[0]===Mf);u?.[1]&&h.topics.get(u[1])?.(u[1],l)}}},()=>ly(t)));return t.ready}),subscribeTopic:(n,e,t,i)=>{ry(n,e,(r,a)=>{t(r,a)});let s=()=>{ay(n,e)};return i.kind==="root"?oy(n).then(()=>s):s},publishTopic:async(n,e,t,i)=>{if(dc.has(n)||n.isClosed)return i.kind==="announce"?ey:void 0;if(i.kind==="announce"){let o=Q0(n);if(o>0)return sc(Math.max(to,o))}let s=await Tf(e,typeof t=="string"?t:vn(t)),r=n.socket.readyState===1;if(n.send(s),i.kind!=="announce")return;if(!r)return sc(Fu(n));let a=$s(s)[1].id;return ny(n,a),sc(to)}}),hy=bf.getSockets,Rf=["basspistol.org","bucket.coracle.social","chorus.pjv.me","koru.bitcointxoko.org","nos.lol","nostr-01.uid.ovh","nostr-01.yakihonne.com","nostr-relay.corb.net","nostr.data.haus","nostr.islandarea.net","nostr.sathoarder.com","nostr.tegila.com.br","nostr.vulpem.com","purplerelay.com","relay-can.zombi.cloudrodion.com","relay-rpi.edufeed.org","relay.agorist.space","relay.artio.inf.unibe.ch","relay.mostr.pub","relay.mostro.network","relay.sigit.io","relay02.lnfi.network","schnorr.me","social.amanah.eblessing.co","staging.yabu.me","strfry.shock.network","top.testrelay.top","yabu.me/v2"].map(n=>"wss://"+n);});var $l=document.documentElement,hu=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,du=()=>$l.dataset.theme||(hu?.matches?"dark":"light");function Wl(){let n=du()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(e=>{e.textContent=n?"\u2600\uFE0F":"\u{1F319}",e.title=n?"Chuy\u1EC3n sang giao di\u1EC7n s\xE1ng":"Chuy\u1EC3n sang giao di\u1EC7n t\u1ED1i",e.setAttribute("aria-label",e.title)})}function ag(){try{let n=localStorage.getItem("theme");(n==="dark"||n==="light")&&($l.dataset.theme=n)}catch{}document.querySelectorAll("[data-theme-toggle]").forEach(n=>{n.onclick=()=>{let e=du()==="dark"?"light":"dark";$l.dataset.theme=e;try{localStorage.setItem("theme",e)}catch{}Wl()}}),hu?.addEventListener?.("change",Wl),Wl()}ag();var Ya=typeof window<"u"&&window.SITE_CONFIG||{},zs={appId:"masoi-online-vn-v1",turn:Array.isArray(Ya.turn)?Ya.turn.filter(n=>n&&n.urls):[],relayUrls:Array.isArray(Ya.relayUrls)?Ya.relayUrls:[]};async function ao(n,{local:e=!1,ns:t=""}={}){let i=(t?t+"-":"")+n.toUpperCase();return e?uy(i):dy(i)}async function dy(n){let{joinRoom:e,selfId:t}=await Promise.resolve().then(()=>(If(),Pf)),i={appId:zs.appId};zs.turn?.length&&(i.turnConfig=zs.turn),zs.relayUrls?.length&&(i.relayConfig={urls:zs.relayUrls});let s=e(i,n,{onJoinError:c=>console.warn("[net] join error",c)}),r={},a={},o={selfId:t,mode:"p2p",on(c,h){a[c]=h,l(c).onMessage=(u,{peerId:d})=>h(u,d)},send(c,h,u=null){return l(c).send(h,u?{target:u}:void 0).catch(d=>console.warn("[net] send",d))},peers:()=>Object.keys(s.getPeers()),set onPeerJoin(c){s.onPeerJoin=c},set onPeerLeave(c){s.onPeerLeave=c},set onPeerStream(c){s.onPeerStream=c},addStream:(c,h)=>s.addStream(c,h?{target:h}:void 0),removeStream:c=>s.removeStream(c),leave:()=>s.leave()};function l(c){return r[c]||(r[c]=s.makeAction(c))}return o}function uy(n){let e=Math.random().toString(36).slice(2,10),t=new BroadcastChannel("masoi-"+n),i={},s=new Map,r=()=>{},a=()=>{},o=c=>t.postMessage({...c,from:e});t.onmessage=({data:c})=>{if(c.from===e||c.to&&!c.to.includes(e))return;let h=!s.has(c.from);if(s.set(c.from,Date.now()),c.k==="bye"){s.delete(c.from),a(c.from);return}h&&(r(c.from),o({k:"hi",to:[c.from]})),c.k==="msg"&&setTimeout(()=>i[c.type]?.(c.data,c.from),0)};let l=setInterval(()=>{o({k:"hi"});let c=Date.now();for(let[h,u]of s)c-u>6e3&&(s.delete(h),a(h))},1500);return window.addEventListener("beforeunload",()=>o({k:"bye"})),setTimeout(()=>o({k:"hi"}),50),{selfId:e,mode:"local",on(c,h){i[c]=h},send(c,h,u=null){return o({k:"msg",type:c,data:JSON.parse(JSON.stringify(h)),to:u?[].concat(u):null}),Promise.resolve()},peers:()=>[...s.keys()],set onPeerJoin(c){r=c;for(let h of s.keys())c(h)},set onPeerLeave(c){a=c},set onPeerStream(c){},addStream(){},removeStream(){},leave(){o({k:"bye"}),clearInterval(l),t.close()}}}var oo=class{constructor(e){this.net=e,this.stream=null,this.micOn=!0,this.deaf=!1,this.canSpeak=!0,this.peers=new Map,this.hear=()=>!0,this.ctx=null,this.self=null,this.onLevels=()=>{},this._loop=this._loop.bind(this)}get enabled(){return!!this.stream}async enable(){this.stream||(this.stream=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!0,noiseSuppression:!0,autoGainControl:!0},video:!1}),this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),await this.ctx.resume().catch(()=>{}),this.self=this._analyser(this.stream),this.net.addStream(this.stream),this.apply(),requestAnimationFrame(this._loop))}ensureCtx(){this.ctx||(this.ctx=new(window.AudioContext||window.webkitAudioContext)),this.ctx.resume().catch(()=>{})}peerJoined(e){this.stream&&this.net.addStream(this.stream,e)}peerStream(e,t){this.peerLeft(t);let i=document.createElement("audio");i.autoplay=!0,i.playsInline=!0,i.srcObject=e,document.getElementById("audio-sink").appendChild(i),i.play().catch(()=>{}),this.ensureCtx();let s=this._analyser(e);this.peers.set(t,{audio:i,...s}),this.apply()}peerLeft(e){let t=this.peers.get(e);t&&(t.audio.srcObject=null,t.audio.remove(),this.peers.delete(e))}setMic(e){this.micOn=e,this.apply()}setDeaf(e){this.deaf=e,this.apply()}setRules(e){this.canSpeak=e.canSpeak,this.hear=e.canHear,this.apply()}apply(){if(this.stream)for(let e of this.stream.getAudioTracks())e.enabled=this.micOn&&this.canSpeak;for(let[e,t]of this.peers)t.audio.muted=this.deaf||!this.hear(e),t.audio.muted||t.audio.play().catch(()=>{})}_analyser(e){try{let t=this.ctx.createMediaStreamSource(e),i=this.ctx.createAnalyser();return i.fftSize=512,t.connect(i),{analyser:i,data:new Uint8Array(i.fftSize)}}catch{return{analyser:null,data:null}}}_level(e){if(!e?.analyser)return 0;e.analyser.getByteTimeDomainData(e.data);let t=0;for(let i=0;i<e.data.length;i++){let s=(e.data[i]-128)/128;t+=s*s}return Math.sqrt(t/e.data.length)}_loop(e){if(!this._last||e-this._last>120){this._last=e;let t=new Set;this.self&&this.micOn&&this.canSpeak&&this._level(this.self)>.04&&t.add("self");for(let[i,s]of this.peers)!s.audio.muted&&this._level(s)>.04&&t.add(i);this.onLevels(t)}requestAnimationFrame(this._loop)}};var Ct=n=>`<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${n}</svg>`,aa={wolf:Ct(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),villager:Ct(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),seer:Ct(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),guard:Ct(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),witch:Ct(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),hunter:Ct(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`)},fy={moon:Ct('<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>'),sun:Ct('<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>'),skull:Ct('<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>'),vote:Ct('<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>'),noose:Ct('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>'),mic:Ct('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>'),micOff:Ct('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>'),speaker:Ct('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>'),speakerOff:Ct('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>'),crown:Ct('<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>'),copy:Ct('<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>'),chat:Ct('<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>'),users:Ct('<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>'),card:Ct('<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>'),door:Ct('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>'),heal:Ct('<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>'),poison:Ct('<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>')};function Ui(n,e=""){return`<span class="ic ${e}">${fy[n]||aa[n]||""}</span>`}var ti=["\u{1F98A}","\u{1F43C}","\u{1F42F}","\u{1F438}","\u{1F435}","\u{1F427}","\u{1F981}","\u{1F428}","\u{1F430}","\u{1F419}","\u{1F984}","\u{1F432}","\u{1F43B}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F433}","\u{1F996}"],Ni=["#ff6b6b","#ffa94d","#ffd43b","#38d9a9","#4dabf7","#9775fa","#f783ac","#69db7c"];var ue=(n,e=document)=>e.querySelector(n),xt=(n,e=document)=>[...e.querySelectorAll(n)],la=new URLSearchParams(location.search),Fi=la.get("local")==="1"||window.MASOI_LOCAL===!0;function Lf(n){return{get:e=>{try{return n().getItem(e)}catch{return null}},set:(e,t)=>{try{n().setItem(e,t)}catch{}},del:e=>{try{n().removeItem(e)}catch{}}}}var Ys=Lf(()=>sessionStorage),dn=Lf(()=>localStorage),Ze=n=>String(n??"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e]);function lo(n){let e="abcdefghijkmnpqrstuvwxyz23456789",t="";for(let i of crypto.getRandomValues(new Uint8Array(n)))t+=e[i%e.length];return t}var kf=()=>lo(6).toUpperCase();function Df(){if(Fi&&la.get("as")){let e=la.get("as").slice(0,18),t=[...e].reduce((i,s)=>i+s.codePointAt(0),0);return{name:e,av:{e:ti[t%ti.length],c:t%Ni.length},test:!0}}let n=null;try{n=JSON.parse(dn.get("masoi-av")||"null")}catch{}return(!n||!ti.includes(n.e))&&(n={e:ti[Math.floor(Math.random()*ti.length)],c:Math.floor(Math.random()*Ni.length)}),{name:dn.get("masoi-name")||"",av:n}}function Zs(n){n.test||(dn.set("masoi-name",n.name||""),dn.set("masoi-av",JSON.stringify(n.av)))}function Uf(){let n="masoi-cid",e=Ys.get(n)||lo(12);return Ys.set(n,e),e}var en=(n,e="")=>n?.av?`<span class="avatar ${e}" style="--av:${Ni[n.av.c]||Ni[0]}">${n.av.e}</span>`:`<span class="avatar ${e}">?</span>`;function Nf(n,e,t){let i=()=>{n.innerHTML=`
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${ti.map(s=>`<button type="button" class="${s===e.av.e?"on":""}" data-e="${s}" aria-label="Avatar ${s}">${s}</button>`).join("")}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">M\xE0u n\u1EC1n</div>
      <div class="color-row">${Ni.map((s,r)=>`<button type="button" class="${r===e.av.c?"on":""}" data-c="${r}" style="--sw:${s}" aria-label="M\xE0u ${r+1}"></button>`).join("")}</div>`,xt("[data-e]",n).forEach(s=>s.onclick=()=>{e.av.e=s.dataset.e,Zs(e),i(),t?.()}),xt("[data-c]",n).forEach(s=>s.onclick=()=>{e.av.c=Number(s.dataset.c),Zs(e),i(),t?.()})};i()}function tn(n,e=!1){let t=ue("#toasts");t||(t=document.createElement("div"),t.id="toasts",document.body.appendChild(t));let i=document.createElement("div");i.className="toast"+(e?" err":""),i.textContent=n,t.appendChild(i),setTimeout(()=>{i.classList.add("out"),setTimeout(()=>i.remove(),300)},3200)}function bc(){let n=document.createElement("div");n.className="confetti";let e=["#ffc93d","#ff5a6a","#2f8bff","#12c584","#ff6fb5","#9b5cf6"];n.innerHTML=Array.from({length:80},()=>`<i style="left:${Math.random()*100}%;background:${e[Math.floor(Math.random()*e.length)]};animation-duration:${2+Math.random()*2.5}s;animation-delay:${Math.random()*.8}s;transform:rotate(${Math.random()*360}deg)"></i>`).join(""),document.body.appendChild(n),setTimeout(()=>n.remove(),5500)}var Oi;function co(){try{Oi||(Oi=new(window.AudioContext||window.webkitAudioContext)),Oi.resume()}catch{}}document.addEventListener("pointerdown",co,{once:!0});function oa(n,e="sine",t=.09){try{if(!Oi||Oi.state!=="running")return;let i=Oi.currentTime;for(let[s,r]of n){let a=Oi.createOscillator(),o=Oi.createGain();a.type=e,a.frequency.setValueAtTime(s,i),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(t,i+.02),o.gain.exponentialRampToValueAtTime(1e-4,i+r),a.connect(o).connect(Oi.destination),a.start(i),a.stop(i+r+.05),i+=r*.85}}catch{}}var ca={buzz:()=>oa([[880,.12],[1320,.25]],"square",.06),correct:()=>oa([[523,.12],[659,.12],[784,.12],[1047,.35]],"triangle",.1),wrong:()=>oa([[220,.25],[160,.4]],"sawtooth",.05),tick:()=>oa([[1200,.05]],"sine",.04),start:()=>oa([[392,.1],[523,.1],[659,.2]],"triangle",.08)};function Mc(n){let e=new URL(location.href);return e.search="",e.hash="",e.searchParams.set("room",n),Fi&&e.searchParams.set("local","1"),e.toString()}async function wc(n,e="\u0110\xE3 sao ch\xE9p!"){try{await navigator.clipboard.writeText(n),tn(e)}catch{window.prompt("Sao ch\xE9p link n\xE0y:",n)}}var Of={turns:2,actTime:90,answerTime:12,revealTime:6,categories:null,order:"random",hints:!0,mult:!0,rerolls:1},ha=(n,e,t,i)=>(n=Math.round(Number(n)),Number.isFinite(n)?Math.max(e,Math.min(t,n)):i);function Ks(n){return String(n??"").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g,"").replace(/đ/g,"d").replace(/[^a-z0-9 ]+/g," ").replace(/\s+/g," ").trim()}function py(n,e){let t=Ks(n);if(!t)return!1;let i=t.replace(/ /g,"");return e.some(s=>{let r=Ks(s);return r&&(r===t||r.replace(/ /g,"")===i)})}function Sc(n){let e=[],t=[],i=new Set;for(let[a,o]of(n?.items||[]).entries()){if(!o||typeof o!="object"){e.push(`\u0110\u1EC1 #${a+1} kh\xF4ng h\u1EE3p l\u1EC7`);continue}let l=(Array.isArray(o.answer)?o.answer:[o.answer]).filter(h=>typeof h=="string"&&Ks(h));if(!o.name||!l.length){e.push(`\u0110\u1EC1 #${a+1} thi\u1EBFu name ho\u1EB7c answer`);continue}let c=String(o.id||Ks(o.name).replace(/ /g,"-"));for(;i.has(c);)c+="_";i.add(c),t.push({id:c,name:String(o.name),image:String(o.image||"\u2753"),answer:l,points:ha(o.points,1,1e3,10),category:String(o.category||"Kh\xE1c"),hint:o.hint?String(o.hint).slice(0,80):"",acting:o.acting?String(o.acting).slice(0,120):"",multipliers:Array.isArray(o.multipliers)?o.multipliers.map(Number).filter(h=>h>0):null})}let s=(n?.multipliers||[]).map(a=>({value:Number(a.value),weight:Number(a.weight)})).filter(a=>a.value>0&&a.weight>0);s.length||(s=[{value:1,weight:1}]);let r=Number.isFinite(Number(n?.actorShare))?Math.max(0,Number(n.actorShare)):.5;return{items:t,multipliers:s,actorShare:r,errors:e,categories:[...new Set(t.map(a=>a.category))]}}function my(n,e){let t=n.name.trim().split(/\s+/);return{pattern:t.map(s=>[...s].map((r,a)=>e>=2&&a===0?r.toUpperCase():"_").join(" ")).join("   "),letters:t.map(s=>[...s].length),text:n.hint||""}}function Ff(n,e){if(e.multipliers?.length)return e.multipliers[Math.floor(Math.random()*e.multipliers.length)];let t=n.multipliers.reduce((s,r)=>s+r.weight,0),i=Math.random()*t;for(let s of n.multipliers)if((i-=s.weight)<0)return s.value;return n.multipliers[0].value}var jt={body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down",propL:null,propR:null,ears:null,tail:null,turn:"front",loop:null,fx:null},ho=class{constructor(e,t,i,{now:s=()=>Date.now(),cleanAv:r=o=>o,cleanLook:a=o=>o}={}){this.now=s,this.cleanAv=r,this.cleanLook=a,this.data=t,this.onChange=()=>{},this.onEvent=()=>{},this.s=i||{hostCid:e,phase:"lobby",players:[],config:{...Of},acted:[],round:0,turnCount:0,totalTurns:0,turn:null,used:[],log:[],logSeq:0,endsAt:0,durMs:0,gameId:0,pose:{...jt}}}get players(){return this.s.players}P(e){return this.s.players.find(t=>t.cid===e)}byPid(e){return this.s.players.find(t=>t.pid===e)}isHost(e){return e===this.s.hostCid}changed(){this.onChange()}log(e,t="info"){this.s.log.push({id:++this.s.logSeq,text:e,kind:t,ts:Date.now()}),this.s.log.length>80&&this.s.log.splice(0,this.s.log.length-80)}setTimer(e){this.s.durMs=Math.round(e*1e3),this.s.endsAt=this.now()+this.s.durMs}name(e){return this.P(e)?.name??"???"}addPlayer(e,t,i){let s=String(t?.name||"").trim().slice(0,18)||"Ng\u01B0\u1EDDi l\u1EA1",r=this.cleanAv(t?.av),a=this.cleanLook(t?.look),o=this.P(e);if(o)return o.pid=i,o.connected=!0,o.look=a,this.s.phase==="lobby"&&(o.name=s,o.av=r),this.changed(),null;if(this.s.players.length>=16)return"Ph\xF2ng \u0111\xE3 \u0111\u1EE7 ng\u01B0\u1EDDi.";let l=s,c=2;for(;this.s.players.some(h=>h.name===l);)l=`${s} ${c++}`;return this.s.players.push({cid:e,pid:i,name:l,av:r,look:a,connected:!0,score:0,correct:0}),this.log(`${l} \u0111\xE3 v\xE0o ph\xF2ng.`,"join"),this.changed(),null}disconnect(e){let t=this.byPid(e);if(t){if(this.s.phase==="lobby"&&!this.isHost(t.cid))this.s.players=this.s.players.filter(i=>i!==t),this.log(`${t.name} \u0111\xE3 r\u1EDDi ph\xF2ng.`,"leave");else{if(t.connected=!1,this.s.turn?.actor===t.cid&&(this.s.phase==="acting"||this.s.phase==="answering")){this.log(`${t.name} m\u1EA5t k\u1EBFt n\u1ED1i, b\u1ECF qua l\u01B0\u1EE3t di\u1EC5n.`,"leave"),this.reveal(null);return}this.s.phase==="answering"&&this.s.turn?.answering?.cid===t.cid&&this.wrongAnswer(t.cid,"")}this.changed()}}handle(e,t){if(!this.P(e)||!t||typeof t!="object")return"Kh\xF4ng h\u1EE3p l\u1EC7.";let s=this.isHost(e),r=this.s;switch(t.t){case"cfg":return s&&r.phase==="lobby"?this.setConfig(t.cfg):"Ch\u1EC9 ch\u1EE7 ph\xF2ng m\u1EDBi ch\u1EC9nh \u0111\u01B0\u1EE3c.";case"kick":{if(!s||r.phase!=="lobby"||t.cid===e)return"Kh\xF4ng th\u1EC3 m\u1EDDi ra.";let a=this.P(t.cid);return a&&(r.players=r.players.filter(o=>o!==a),this.log(`${a.name} \u0111\xE3 b\u1ECB m\u1EDDi ra.`,"leave"),this.changed()),null}case"start":return s?this.start():"Ch\u1EC9 ch\u1EE7 ph\xF2ng m\u1EDBi b\u1EAFt \u0111\u1EA7u \u0111\u01B0\u1EE3c.";case"lobby":return!s||r.phase!=="end"?"Kh\xF4ng th\u1EC3.":(this.toLobby(),null);case"skipTurn":return!(s||r.turn?.actor===e)||!["acting","answering"].includes(r.phase)?"Kh\xF4ng th\u1EC3 b\u1ECF qua.":(this.log(`${this.name(r.turn.actor)} \u0111\xE3 b\u1ECF l\u01B0\u1EE3t.`,"info"),this.reveal(null),null);case"reroll":return this.reroll(e);case"buzz":return this.buzz(e);case"answer":return this.answer(e,t.text);case"pose":return this.setPose(e,t.pose)}return"H\xE0nh \u0111\u1ED9ng kh\xF4ng r\xF5."}setConfig(e){let t=this.s.config;if(e&&"turns"in e&&(t.turns=ha(e.turns,1,5,t.turns)),e&&"actTime"in e&&(t.actTime=ha(e.actTime,20,300,t.actTime)),e&&"answerTime"in e&&(t.answerTime=ha(e.answerTime,5,60,t.answerTime)),e&&"order"in e&&(t.order=e.order==="join"?"join":"random"),e&&"hints"in e&&(t.hints=!!e.hints),e&&"mult"in e&&(t.mult=!!e.mult),e&&"rerolls"in e&&(t.rerolls=ha(e.rerolls,0,3,t.rerolls??1)),e&&"categories"in e){let i=this.data.categories;t.categories=Array.isArray(e.categories)?e.categories.filter(s=>i.includes(s)):null,t.categories&&(t.categories.length===i.length||!t.categories.length)&&(t.categories=t.categories.length?null:[])}return this.changed(),null}pool(){let e=this.s.config.categories;return this.data.items.filter(t=>!e||e.includes(t.category))}canStart(){return this.s.players.filter(t=>t.connected).length<2?"C\u1EA7n \xEDt nh\u1EA5t 2 ng\u01B0\u1EDDi ch\u01A1i.":this.pool().length?null:"Ch\u01B0a ch\u1ECDn nh\xF3m \u0111\u1EC1 n\xE0o."}start(){let e=this.canStart();if(e)return e;let t=this.s;return t.players=t.players.filter(i=>i.connected),t.players.forEach(i=>{i.score=0,i.correct=0}),Object.assign(t,{round:1,acted:[],turnCount:0,totalTurns:t.config.turns*t.players.length,turn:null,used:[],log:[],gameId:t.gameId+1}),this.log("Tr\xF2 ch\u01A1i b\u1EAFt \u0111\u1EA7u! M\u1ED7i ng\u01B0\u1EDDi s\u1EBD l\u1EA7n l\u01B0\u1EE3t l\xEAn s\xE2n kh\u1EA5u.","phase"),this.nextTurn(),null}drawItem(){let e=this.s,t=this.pool().filter(s=>!e.used.includes(s.id));t.length||(e.used=[],t=this.pool());let i=t[Math.floor(Math.random()*t.length)];return e.used.push(i.id),i}pickActor(){let e=this.s,t=()=>e.players.filter(r=>r.connected&&!e.acted.includes(r.cid)),i=t();if(!i.length){if(e.round++,e.acted=[],e.round>e.config.turns)return null;i=t()}if(!i.length)return null;let s=e.config.order==="join"?i[0]:i[Math.floor(Math.random()*i.length)];return e.acted.push(s.cid),s.cid}nextTurn(){let e=this.s,t=this.pickActor();if(!t)return this.finish();e.turnCount++,e.totalTurns=Math.max(e.totalTurns,e.turnCount);let i=this.drawItem();e.turn={n:e.turnCount,total:e.totalTurns,round:e.round,actor:t,item:i,mult:e.config.mult===!1?1:Ff(this.data,i),answering:null,locked:[],rerolls:e.config.rerolls??1,hintLevel:0,actLeft:0,result:null,guesses:[]},e.pose={...jt},e.phase="acting",this.setTimer(e.config.actTime),this.log(`L\u01B0\u1EE3t ${e.turn.n}/${e.turn.total}: ${this.name(e.turn.actor)} l\xEAn s\xE2n kh\u1EA5u! \u0110\u1EC1 x${e.turn.mult}.`,"phase"),this.onEvent({type:"turn"}),this.changed()}reroll(e){let t=this.s.turn;return this.s.phase!=="acting"||t?.actor!==e?"Ch\u1EC9 ng\u01B0\u1EDDi di\u1EC5n m\u1EDBi \u0111\u1ED5i \u0111\u1EC1 \u0111\u01B0\u1EE3c.":t.rerolls<=0?"B\u1EA1n \u0111\xE3 h\u1EBFt l\u01B0\u1EE3t \u0111\u1ED5i \u0111\u1EC1.":(t.rerolls--,t.item=this.drawItem(),t.mult=this.s.config.mult===!1?1:Ff(this.data,t.item),t.locked=[],t.hintLevel=0,this.s.endsAt=this.now()+this.s.config.actTime*1e3,this.log(`${this.name(e)} \u0111\xE3 \u0111\u1ED5i \u0111\u1EC1. \u0110\u1EC1 m\u1EDBi x${t.mult}.`,"info"),this.changed(),null)}setPose(e,t){return this.s.turn?.actor!==e||!t||typeof t!="object"||(this.s.pose={...jt,...t}),null}buzz(e){let t=this.s,i=t.turn;return t.phase!=="acting"?t.phase==="answering"?null:"Ch\u01B0a th\u1EC3 b\u1EA5m chu\xF4ng.":i.actor===e?"Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c b\u1EA5m chu\xF4ng.":i.locked.includes(e)?"B\u1EA1n \u0111\xE3 tr\u1EA3 l\u1EDDi sai l\u01B0\u1EE3t n\xE0y.":(i.actLeft=Math.max(1e3,t.endsAt-this.now()),i.answering={cid:e},t.phase="answering",this.setTimer(t.config.answerTime),this.onEvent({type:"buzz",cid:e}),this.changed(),null)}answer(e,t){let i=this.s,s=i.turn;if(i.phase!=="answering"||s.answering?.cid!==e)return"Kh\xF4ng ph\u1EA3i l\u01B0\u1EE3t tr\u1EA3 l\u1EDDi c\u1EE7a b\u1EA1n.";if(t=String(t||"").trim().slice(0,60),py(t,s.item.answer)){let r=s.item.points*s.mult,a=Math.round(r*this.data.actorShare),o=this.P(e),l=this.P(s.actor);o.score+=r,o.correct++,l&&(l.score+=a),s.guesses.push({cid:e,text:t,ok:!0}),this.log(`${o.name} \u0111o\xE1n \u0111\xFAng "${s.item.name}"! +${r} \u0111i\u1EC3m${a?` (ng\u01B0\u1EDDi di\u1EC5n +${a})`:""}.`,"correct"),this.reveal({cid:e,gain:r,actorGain:a,text:t})}else this.wrongAnswer(e,t);return null}wrongAnswer(e,t){let i=this.s,s=i.turn;if(s.locked.push(e),s.guesses.push({cid:e,text:t,ok:!1}),s.answering=null,this.log(`${this.name(e)} tr\u1EA3 l\u1EDDi ${t?`"${t}"`:"(kh\xF4ng k\u1ECBp)"} \u2014 sai r\u1ED3i!`,"wrong"),this.onEvent({type:"wrong",cid:e}),i.players.filter(a=>a.connected&&a.cid!==s.actor).every(a=>s.locked.includes(a.cid)))return this.log("Kh\xF4ng c\xF2n ai \u0111\u01B0\u1EE3c tr\u1EA3 l\u1EDDi.","info"),this.reveal(null);i.phase="acting",i.durMs=i.config.actTime*1e3,i.endsAt=this.now()+s.actLeft,this.changed()}reveal(e){let t=this.s;t.turn.result=e,t.turn.answering=null,t.phase="reveal",e||this.log(`H\u1EBFt l\u01B0\u1EE3t! \u0110\xE1p \xE1n l\xE0 "${t.turn.item.name}".`,"reveal"),this.setTimer(t.config.revealTime??Of.revealTime),this.onEvent({type:e?"correct":"reveal"}),this.changed()}finish(){let e=this.s;e.phase="end",e.turn=null,e.endsAt=0,e.durMs=0;let t=[...e.players].sort((i,s)=>s.score-i.score)[0];this.log(t?`K\u1EBFt th\xFAc! ${t.name} v\xF4 \u0111\u1ECBch v\u1EDBi ${t.score} \u0111i\u1EC3m.`:"K\u1EBFt th\xFAc!","win"),this.onEvent({type:"end"}),this.changed()}toLobby(){let e=this.s;e.players=e.players.filter(t=>t.connected),e.players.forEach(t=>{t.score=0,t.correct=0}),Object.assign(e,{phase:"lobby",turn:null,acted:[],round:0,turnCount:0,endsAt:0,durMs:0,pose:{...jt}}),this.log("Quay v\u1EC1 ph\xF2ng ch\u1EDD.","phase"),this.changed()}hintFrac(){let e=this.s,t=e.turn;return!t||!["acting","answering"].includes(e.phase)?0:1-(e.phase==="acting"?e.endsAt-this.now():t.actLeft)/(e.config.actTime*1e3)}tick(){let e=this.s;if(e.turn&&e.config.hints!==!1&&["acting","answering"].includes(e.phase)){let t=this.hintFrac(),i=t>=.65?2:t>=.35?1:0;i>(e.turn.hintLevel||0)&&(e.turn.hintLevel=i,this.log(i===1?"\u{1F4A1} G\u1EE3i \xFD: \u0111\xE3 hi\u1EC7n s\u1ED1 ch\u1EEF c\u1EE7a \u0111\xE1p \xE1n.":"\u{1F4A1} G\u1EE3i \xFD: \u0111\xE3 hi\u1EC7n ch\u1EEF c\xE1i \u0111\u1EA7u.","info"),this.changed())}!e.endsAt||this.now()<e.endsAt||(e.phase==="acting"?this.reveal(null):e.phase==="answering"?this.wrongAnswer(e.turn.answering.cid,""):e.phase==="reveal"&&this.nextTurn())}chatFilter(e,t){let i=this.s,s=i.turn;if(s&&["acting","answering"].includes(i.phase)){if(s.actor===e)return{err:"Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c chat! H\xE3y di\u1EC5n t\u1EA3 b\u1EB1ng h\xE0nh \u0111\u1ED9ng."};let r=" "+Ks(t)+" ",a=r.replace(/ /g,"");if(s.item.answer.some(o=>{let l=Ks(o);return l&&(r.includes(" "+l+" ")||l.length>3&&a.includes(l.replace(/ /g,"")))}))return{text:"\u{1F910} (tin nh\u1EAFn b\u1ECB \u1EA9n v\xEC ch\u1EE9a \u0111\xE1p \xE1n \u2014 h\xE3y b\u1EA5m chu\xF4ng \u0111\u1EC3 tr\u1EA3 l\u1EDDi!)",masked:!0}}return{text:t}}pub(){let e=this.s,t=e.turn,i=e.phase==="reveal"||e.phase==="end";return{phase:e.phase,gameId:e.gameId,hostCid:e.hostCid,remaining:e.endsAt?Math.max(0,e.endsAt-this.now()):0,durMs:e.durMs,players:e.players.map(s=>({cid:s.cid,pid:s.pid,name:s.name,av:s.av,skin:s.look?.skin,connected:s.connected,score:s.score,correct:s.correct})),config:e.config,categories:this.data.categories,itemCount:this.data.items.length,poolCount:this.pool().length,turn:t&&{n:t.n,total:t.total,actor:t.actor,mult:t.mult,points:t.item.points,category:t.item.category,answering:t.answering,locked:t.locked,rerolls:t.rerolls,result:t.result,guesses:t.guesses.slice(-6),item:i?t.item:null,hint:t.hintLevel?my(t.item,t.hintLevel):null},pose:e.pose,actorLook:t?this.P(t.actor)?.look??null:null,log:e.log.slice(-60),canStart:e.phase==="lobby"?this.canStart():null}}priv(e){let t=this.s.turn;return{gameId:this.s.gameId,item:t&&t.actor===e&&["acting","answering","reveal"].includes(this.s.phase)?t.item:null}}};var Tc=[{id:"tron",name:"B\xE9 \u0110\u1EE5t",emo:"\u{1F642}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffc93d",bottom:"#2f8bff",shoes:"#ff4d6d",hairStyle:"ahoge",sleeve:.3,pants:.35,face:["blush"]},{id:"hocsinh",name:"H\u1ECDc Sinh",emo:"\u{1F392}",skin:"#fbcca6",hair:"#1d1648",top:"#ffffff",bottom:"#2a3a7a",shoes:"#1d1648",hairStyle:"spiky",sleeve:.3,pants:.35,extra:{scarf:"#ff3d4f",pack:"#38b2ff"}},{id:"cogiao",name:"C\xF4 Gi\xE1o",emo:"\u{1F469}\u200D\u{1F3EB}",skin:"#fcd2b0",hair:"#2a1a14",top:"#fbfbff",bottom:"#fbfbff",shoes:"#c0392b",hairStyle:"long",sleeve:1,pants:1,face:["glasses"],extra:{aodai:"#fbfbff"}},{id:"nonla",name:"C\xF4 Ba N\xF3n L\xE1",emo:"\u{1F38B}",skin:"#f7cfa6",hair:"#1a1a1a",top:"#9b5cf6",bottom:"#ffffff",shoes:"#c0392b",hairStyle:"long",hat:"nonla",sleeve:1,pants:1,extra:{aodai:"#9b5cf6"}},{id:"banhmi",name:"C\xF4 B\xE1nh M\xEC",emo:"\u{1F956}",skin:"#f6c9a0",hair:"#3a2418",top:"#ff8fb8",bottom:"#4b4478",shoes:"#ffc93d",hairStyle:"bun",hat:"scarfHead",hatColor:"#ff6f3c",sleeve:.5,pants:1,extra:{apron:"#ff9a3c"}},{id:"xeom",name:"Ch\xFA Xe \xD4m",emo:"\u{1F6F5}",skin:"#e8b48a",hair:"#1a1a1a",top:"#3aa357",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"helmet",hatColor:"#2fbf71",face:["mustache"],sleeve:1,pants:1},{id:"ngoai",name:"B\xE0 Ngo\u1EA1i",emo:"\u{1F475}",skin:"#f3c9a6",hair:"#eeeef5",top:"#a86b3c",bottom:"#2b2550",shoes:"#6b4426",hairStyle:"bun",face:["glasses","blush"],sleeve:1,pants:1,extra:{belt:"#2b2550"}},{id:"baove",name:"B\xE1c B\u1EA3o V\u1EC7",emo:"\u{1F46E}",skin:"#e8b48a",hair:"#2a1a14",top:"#c9b27a",bottom:"#6b5a3a",shoes:"#1d1648",hairStyle:"short",hat:"cap",hatColor:"#2b3a6b",face:["mustache"],sleeve:.5,pants:1,extra:{whistle:!0,badge:!0,belt:"#3a2a1c"}},{id:"shipper",name:"Anh Shipper",emo:"\u{1F4E6}",skin:"#ffd2a6",hair:"#1a1a1a",top:"#ff8a1f",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"fullhelmet",hatColor:"#ff8a1f",sleeve:1,pants:1,extra:{box:"#ff8a1f"}},{id:"chef",name:"Vua \u0110\u1EA7u B\u1EBFp",emo:"\u{1F468}\u200D\u{1F373}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffffff",bottom:"#2b2550",shoes:"#1d1648",hairStyle:"short",hat:"chef",face:["curly"],sleeve:1,pants:1,extra:{scarf:"#ff3d4f",apron:"#ffffff"}},{id:"chotdon",name:"Ch\u1ECB Ch\u1ED1t \u0110\u01A1n",emo:"\u{1F4F1}",skin:"#fcd2b0",hair:"#a8452a",top:"#ff3d8b",bottom:"#1d1648",shoes:"#ffc93d",hairStyle:"wavy",face:["blush"],sleeve:.3,pants:.4,extra:{dress:"#ff3d8b",chain:!0}},{id:"scientist",name:"Gi\xE1o S\u01B0 Kh\xF9ng",emo:"\u{1F9EA}",skin:"#fbcca6",hair:"#eeeef5",top:"#4dabf7",bottom:"#5b6478",shoes:"#3a2a1c",hairStyle:"messy",face:["glasses"],sleeve:1,pants:1,extra:{coat:"#ffffff",tie:"#ff3d4f"}},{id:"doctor",name:"B\xE1c S\u0129",emo:"\u{1FA7A}",skin:"#f6c9a0",hair:"#2a1a14",top:"#3ccf9e",bottom:"#3ccf9e",shoes:"#ffffff",hairStyle:"slick",hat:"mirror",sleeve:1,pants:1,extra:{coat:"#ffffff"}},{id:"boss",name:"T\u1ED5ng T\xE0i",emo:"\u{1F60E}",skin:"#f6c9a0",hair:"#1a1a1a",top:"#22223a",bottom:"#22223a",shoes:"#0d0d18",hairStyle:"slick",face:["shades"],sleeve:1,pants:1,extra:{tie:"#ff3d4f"}},{id:"idol",name:"Idol Nh\xED",emo:"\u{1F3A4}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff6fb5",bottom:"#ffffff",shoes:"#ff6fb5",hairStyle:"pigtails",face:["blush"],sleeve:.3,pants:.3,extra:{dress:"#ffffff",star:"#ffc93d"}},{id:"rocker",name:"Rocker",emo:"\u{1F3B8}",skin:"#fbcca6",hair:"#ff3d8b",top:"#1d1648",bottom:"#2b2550",shoes:"#ff3d4f",hairStyle:"mohawk",face:["shades"],sleeve:.35,pants:1,extra:{chain:!0}},{id:"rapper",name:"Rapper",emo:"\u{1F9E2}",skin:"#c98b5e",hair:"#1a1a1a",top:"#8b5cf6",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"capBack",hatColor:"#ffc93d",sleeve:1,pants:1,extra:{chain:!0}},{id:"gamer",name:"Game Th\u1EE7",emo:"\u{1F3AE}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#2fbf71",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"messy",hat:"phones",hatColor:"#1d1648",face:["glasses"],sleeve:1,pants:1},{id:"football",name:"C\u1EA7u Th\u1EE7",emo:"\u26BD",skin:"#e8b48a",hair:"#1a1a1a",top:"#ff3d4f",bottom:"#ffffff",shoes:"#ffc93d",hairStyle:"spiky",hat:"band",hatColor:"#ffffff",sleeve:.3,pants:.3,legs:"#ff3d4f"},{id:"farmer",name:"B\xE1c N\xF4ng D\xE2n",emo:"\u{1F33E}",skin:"#d99b6c",hair:"#1a1a1a",top:"#7a5230",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"nonla",sleeve:1,pants:.7,extra:{scarf:"#1d1648"}},{id:"ongdo",name:"\xD4ng \u0110\u1ED3",emo:"\u{1F4DC}",skin:"#f3c9a6",hair:"#eeeef5",top:"#2f6bff",bottom:"#ffffff",shoes:"#1d1648",hairStyle:"bald",hat:"turban",hatColor:"#1d1648",face:["beard","glasses"],sleeve:1,pants:1,extra:{aodai:"#2f6bff"}},{id:"fire",name:"L\xEDnh C\u1EE9u Ho\u1EA3",emo:"\u{1F9D1}\u200D\u{1F692}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffb63d",bottom:"#ffb63d",shoes:"#1d1648",hairStyle:"short",hat:"fire",hatColor:"#ff3d4f",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#ffe14d"}},{id:"astro",name:"Phi H\xE0nh Gia",emo:"\u{1F680}",skin:"#fbcca6",hair:"#3a2a1c",top:"#f2f4ff",bottom:"#f2f4ff",shoes:"#8b93b8",hairStyle:"short",hat:"bubble",sleeve:1,pants:1,gloves:"#ffffff",extra:{pack:"#dfe3f5",badge:!0}},{id:"hero",name:"Si\xEAu Nh\xE2n \u0110\u1EE5t",emo:"\u{1F9B8}",skin:"#ffd2a6",hair:"#1d1648",top:"#2f6bff",bottom:"#ff3d4f",shoes:"#ff3d4f",hairStyle:"ahoge",hat:"band",hatColor:"#ff3d4f",sleeve:1,pants:.2,legs:"#2f6bff",gloves:"#ffffff",extra:{cape:"#ff3d4f",star:"#ffc93d",belt:"#ffc93d"}},{id:"ninja",name:"Ninja H\u1EE5t",emo:"\u{1F977}",skin:"#ffd2a6",hair:"#14102e",top:"#2b2550",bottom:"#2b2550",shoes:"#14102e",hairStyle:"bald",hat:"ninja",hatColor:"#2b2550",sleeve:1,pants:1,extra:{belt:"#ff3d4f"}},{id:"pirate",name:"C\u01B0\u1EDBp Bi\u1EC3n",emo:"\u{1F3F4}\u200D\u2620\uFE0F",skin:"#e8b48a",hair:"#2a1a14",top:"#ffffff",bottom:"#2b2550",shoes:"#3a2a1c",hairStyle:"short",hat:"tricorn",hatColor:"#1d1648",face:["patch","beard"],beard:"#2a1a14",sleeve:1,pants:.75,extra:{belt:"#ff3d4f",vest:"#c0392b"}},{id:"king",name:"Vua H\u1EC1",emo:"\u{1F451}",skin:"#ffd2a6",hair:"#a86b3c",top:"#8b5cf6",bottom:"#ffc93d",shoes:"#ff3d4f",hairStyle:"short",hat:"crown",face:["curly"],sleeve:1,pants:1,extra:{cape:"#e8344a",belt:"#ffc93d"}},{id:"princess",name:"C\xF4ng Ch\xFAa",emo:"\u{1F478}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff8fc8",bottom:"#ff8fc8",shoes:"#ffffff",hairStyle:"long",hat:"tiara",face:["blush"],sleeve:.3,pants:1,extra:{dress:"#ff8fc8"}},{id:"vampire",name:"B\xE1 T\u01B0\u1EDBc Ma",emo:"\u{1F9DB}",skin:"#e9e4f5",hair:"#1a1a1a",top:"#ffffff",bottom:"#1d1648",shoes:"#1d1648",hairStyle:"slick",face:["fangs"],sleeve:1,pants:1,extra:{cape:"#1d1648",collar:"#e8344a",vest:"#e8344a"}},{id:"santa",name:"\xD4ng Gi\xE0 Noel",emo:"\u{1F385}",skin:"#ffd2a6",hair:"#ffffff",top:"#e8344a",bottom:"#e8344a",shoes:"#1d1648",hairStyle:"short",hat:"santa",face:["beard","blush"],beard:"#ffffff",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#1d1648",belly:"#e8344a"}},{id:"bear",name:"G\u1EA5u B\xF4ng",emo:"\u{1F9F8}",skin:"#ffd2a6",hair:"#c98b52",top:"#c98b52",bottom:"#c98b52",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"bear",hatColor:"#c98b52",sleeve:1,pants:1,gloves:"#c98b52",extra:{belly:"#f2d2a9"}},{id:"cat",name:"M\xE8o M\u1EADp",emo:"\u{1F431}",skin:"#fcd2b0",hair:"#ff9a3c",top:"#ff9a3c",bottom:"#ff9a3c",shoes:"#ffffff",hairStyle:"bald",hat:"hood",hood:"cat",hatColor:"#ff9a3c",sleeve:1,pants:1,gloves:"#ffffff",extra:{belly:"#fff1e0"}},{id:"dino",name:"Kh\u1EE7ng Long",emo:"\u{1F996}",skin:"#ffd2a6",hair:"#2fbf71",top:"#2fbf71",bottom:"#2fbf71",shoes:"#1f8f52",hairStyle:"bald",hat:"hood",hood:"dino",hatColor:"#2fbf71",sleeve:1,pants:1,gloves:"#2fbf71",extra:{belly:"#d9f99d"}},{id:"frog",name:"\u1EBEch \u1ED8p",emo:"\u{1F438}",skin:"#fcd2b0",hair:"#7bd148",top:"#7bd148",bottom:"#7bd148",shoes:"#ffc93d",hairStyle:"bald",hat:"hood",hood:"frog",hatColor:"#7bd148",sleeve:1,pants:1,gloves:"#7bd148",extra:{belly:"#e9ffd0"}},{id:"dog",name:"C\u1EADu V\xE0ng",emo:"\u{1F436}",skin:"#fcd2b0",hair:"#e8b04a",top:"#e8b04a",bottom:"#e8b04a",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"dog",hatColor:"#e8b04a",sleeve:1,pants:1,gloves:"#e8b04a",extra:{belly:"#fff1d6",scarf:"#2f8bff"}},{id:"bride",name:"C\xF4 D\xE2u",emo:"\u{1F470}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#ffffff",bottom:"#ffffff",shoes:"#ffffff",hairStyle:"bun",hat:"veil",sleeve:.3,pants:1,face:["blush"],extra:{dress:"#ffffff"}},{id:"beanie",name:"Anh Ch\xE0ng L\u1EA1nh",emo:"\u{1F9E3}",skin:"#ffd2a6",hair:"#6b4426",top:"#38b2ff",bottom:"#2b2550",shoes:"#ff4d6d",hairStyle:"short",hat:"beanie",hatColor:"#ff4d6d",sleeve:1,pants:1,face:["freckles"],extra:{scarf:"#ffc93d"}}],uo=Object.fromEntries(Tc.map(n=>[n.id,n]));var ms=Object.fromEntries(Tc.map(n=>[n.id,{name:n.name,emo:n.emo,skin:n.skin,shirt:n.top,pants:n.bottom,shoes:n.shoes,hair:n.hair}])),pa=Object.keys(ms),da={down:[10,0],up:[170,0],side:[90,0],diag:[135,0],hip:[40,-105],flex:[90,90],cross:[25,-125],head:[150,-150],mouth:[15,-150],point:[65,-10],wave:[150,25]},ua={down:[4,0],kick:[70,-10],knee:[28,-55],step:[22,0],spread:[35,0]},fa={stand:{t:"",legs:null},sit:{t:"translate(0px,26px)",legs:[[80,-80],[80,-80]],stool:!0},squat:{t:"translate(0px,40px)",legs:[[110,-150],[110,-150]]},kneel:{t:"translate(0px,34px)",legs:[[0,170],[0,170]]},lie:{t:"translate(72px,58px) rotate(-90deg)"},leanL:{t:"",torso:"rotate(18deg)"},leanR:{t:"",torso:"rotate(-18deg)"},handstand:{t:"translate(0px,-120px) rotate(180deg)"},crawl:{t:"translate(86px,6px) rotate(-90deg)",absArms:[[90,0],[90,0]],absLegs:[[90,0],[90,0]],head:90,tail:100},bow:{t:"",torso:"translateY(16px) scaleY(.84)",headDown:!0},crossleg:{t:"translate(0px,44px)",legs:[[88,-165],[88,-165]]}},Ac={center:0,tiltL:18,tiltR:-18,up:0,down:0},Js=[["scissors","\u2702\uFE0F","K\xE9o"],["comb","\u{1FAAE}","L\u01B0\u1EE3c"],["mic","\u{1F3A4}","Micro"],["phone","\u{1F4F1}","\u0110i\u1EC7n tho\u1EA1i"],["ball","\u26BD","Qu\u1EA3 b\xF3ng"],["racket","\u{1F3F8}","V\u1EE3t"],["rod","\u{1F3A3}","C\u1EA7n c\xE2u"],["pan","\u{1F373}","Ch\u1EA3o"],["broom","\u{1F9F9}","Ch\u1ED5i"],["sword","\u{1F5E1}\uFE0F","Ki\u1EBFm"],["umbrella","\u2602\uFE0F","\xD4"],["book","\u{1F4D6}","S\xE1ch"],["guitar","\u{1F3B8}","\u0110\xE0n"],["violin","\u{1F3BB}","Violin"],["hammer","\u{1F528}","B\xFAa"],["chopsticks","\u{1F962}","\u0110\u0169a"],["bowl","\u{1F35C}","T\xF4"],["wand","\u{1FA84}","\u0110\u0169a ph\xE9p"],["magnifier","\u{1F50D}","K\xEDnh l\xFAp"],["camera","\u{1F4F7}","M\xE1y \u1EA3nh"],["flower","\u{1F339}","Hoa"],["gift","\u{1F381}","Qu\xE0"],["cup","\u2615","C\u1ED1c"],["toothbrush","\u{1FAA5}","B\xE0n ch\u1EA3i"],["money","\u{1F4B5}","Ti\u1EC1n"],["bone","\u{1F9B4}","Kh\xFAc x\u01B0\u01A1ng"],["carrot","\u{1F955}","C\xE0 r\u1ED1t"],["banana","\u{1F34C}","Chu\u1ED1i"],["stethoscope","\u{1FA7A}","\u1ED0ng nghe"],["ruler","\u{1F4CF}","Th\u01B0\u1EDBc"],["balloon","\u{1F388}","B\xF3ng bay"],["extinguisher","\u{1F9EF}","B\xECnh ch\u1EEFa ch\xE1y"],["bottle","\u{1F37C}","B\xECnh s\u1EEFa"],["gamepad","\u{1F3AE}","Tay c\u1EA7m game"],["laptop","\u{1F4BB}","Laptop"],["basket","\u{1F9FA}","Gi\u1ECF"],["ring","\u{1F48D}","Nh\u1EABn"],["cake","\u{1F382}","B\xE1nh kem"],["torch","\u{1F526}","\u0110\xE8n pin"],["towel","\u{1F9FB}","Kh\u0103n gi\u1EA5y"]],Bf=Js.map(([n,e,t])=>[n,`${e} ${t}`]),po=Object.fromEntries(Js.map(([n,e])=>[n,e])),On=[{group:"To\xE0n th\xE2n",key:"body",opts:[["stand","\u0110\u1EE9ng"],["sit","Ng\u1ED3i gh\u1EBF"],["squat","Ng\u1ED3i x\u1ED5m"],["kneel","Qu\u1EF3"],["lie","N\u1EB1m"],["leanL","Nghi\xEAng tr\xE1i"],["leanR","Nghi\xEAng ph\u1EA3i"],["handstand","Tr\u1ED3ng c\xE2y chu\u1ED1i"],["crawl","B\xF2 4 ch\xE2n"],["bow","C\xFAi ch\xE0o"],["crossleg","Ng\u1ED3i x\u1EBFp b\u1EB1ng"]]},{group:"\u0110\u1EA7u",key:"head",opts:[["center","Th\u1EB3ng"],["tiltL","Nghi\xEAng tr\xE1i"],["tiltR","Nghi\xEAng ph\u1EA3i"],["up","Ng\u01B0\u1EDBc l\xEAn"],["down","C\xFAi xu\u1ED1ng"]]},{group:"M\u1EB7t",key:"face",opts:[["neutral","\u{1F610}"],["happy","\u{1F604}"],["sad","\u{1F622}"],["angry","\u{1F620}"],["surprised","\u{1F62E}"],["scared","\u{1F631}"],["sleepy","\u{1F634}"],["cheeky","\u{1F61C}"],["love","\u{1F60D}"]]},{group:"Tay tr\xE1i",key:"armL",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Tay ph\u1EA3i",key:"armR",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Ch\xE2n tr\xE1i",key:"legL",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"Ch\xE2n ph\u1EA3i",key:"legR",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"\u0110\u1EA1o c\u1EE5 tay tr\xE1i",key:"propL",toggle:!0,opts:Bf},{group:"\u0110\u1EA1o c\u1EE5 tay ph\u1EA3i",key:"propR",toggle:!0,opts:Bf},{group:"Ho\xE1 trang",key:"ears",toggle:!0,opts:[["dog","\u{1F436} Tai ch\xF3"],["cat","\u{1F431} Tai m\xE8o"],["bunny","\u{1F430} Tai th\u1ECF"],["mouse","\u{1F42D} Tai chu\u1ED9t"],["horns","\u{1F42E} S\u1EEBng"],["antenna","\u{1F41D} R\xE2u c\xF4n tr\xF9ng"]]},{group:"\u0110u\xF4i",key:"tail",toggle:!0,opts:[["dog","\u{1F415} \u0110u\xF4i ch\xF3"],["cat","\u{1F408} \u0110u\xF4i m\xE8o"],["pig","\u{1F437} \u0110u\xF4i heo"],["dino","\u{1F996} \u0110u\xF4i kh\u1EE7ng long"]]},{group:"Chuy\u1EC3n \u0111\u1ED9ng (b\u1EADt/t\u1EAFt)",key:"loop",toggle:!0,opts:[["walk","\u0110i b\u1ED9"],["run","Ch\u1EA1y"],["dance","Nh\u1EA3y m\xFAa"],["butt","L\u1EAFc m\xF4ng"],["flap","V\u1ED7 c\xE1nh"],["swim","B\u01A1i"],["shiver","Run r\u1EA9y"],["clap","V\u1ED7 tay"],["punch","\u0110\u1EA5m"],["row","Ch\xE8o"],["nod","G\u1EADt g\xF9"],["shake","L\u1EAFc \u0111\u1EA7u"]]},{group:"Hi\u1EC7u \u1EE9ng",key:"fx",oneshot:!0,opts:[["jump","B\u1EADt nh\u1EA3y"],["spin","Xoay v\xF2ng"],["fall","T\xE9 ng\xE3"],["bounce","Nh\xFAn nh\u1EA3y"]]},{group:"Xoay ng\u01B0\u1EDDi",key:"turn",opts:[["front","\u2B06\uFE0F Nh\xECn kh\xE1n gi\u1EA3"],["l45","\u2196\uFE0F Xoay ch\xE9o tr\xE1i"],["r45","\u2197\uFE0F Xoay ch\xE9o ph\u1EA3i"],["left","\u2B05\uFE0F Quay tr\xE1i"],["right","\u27A1\uFE0F Quay ph\u1EA3i"],["back","\u2B07\uFE0F Quay l\u01B0ng"]]}],mo=Object.fromEntries(On.find(n=>n.key==="face").opts),ni={hip:[150,218],neck:[150,146],shL:[124,160],shR:[176,160],elL:[124,192],elR:[176,192],hipL:[138,222],hipR:[162,222],knL:[138,254],knR:[162,254]},xn=n=>`${n[0]}px ${n[1]}px`;function gy(n,e,t=!1){let i=e==="up"?-4:e==="down"?4:0,s=99+i,r=(d,f,g,y=3.6)=>`<ellipse cx="${d}" cy="${s}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${d+f}" cy="${s+g}" r="${y}" class="dk"/><circle cx="${d+f+1.2}" cy="${s+g-1.4}" r="1.1" fill="#fff"/>`,a;switch(n){case"happy":a=`<path d="M128 ${s+2} q9 -11 18 0 M154 ${s+2} q9 -11 18 0" class="ln"/>`;break;case"sleepy":a=`<path d="M128 ${s} q9 6 18 0 M154 ${s} q9 6 18 0" class="ln"/>`;break;case"love":a=`<path d="M137 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`;break;case"cheeky":a=`<path d="M128 ${s} q9 -6 18 0" class="ln"/>${r(163,-2,1)}`;break;case"surprised":a=r(137,0,0,2.4)+r(163,0,0,2.4);break;case"scared":a=r(137,2,2,2.6)+r(163,-2,2,2.6)+`<path d="M180 ${s-8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`;break;case"sad":a=r(137,1,3)+r(163,-1,3);break;case"angry":a=r(137,2,1)+r(163,-2,1);break;default:a=r(137,3,2)+r(163,-3,-2)}let o={angry:`<path d="M127 ${s-15} L146 ${s-9} M173 ${s-15} L154 ${s-9}" class="ln" style="stroke-width:4.5"/>`,sad:`<path d="M128 ${s-10} L145 ${s-15} M172 ${s-10} L155 ${s-15}" class="ln"/>`,scared:`<path d="M127 ${s-14} q5 -4 9 0 q5 4 9 0 M155 ${s-14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,surprised:`<path d="M128 ${s-17} q9 -6 18 0 M154 ${s-17} q9 -6 18 0" class="ln"/>`}[n]||"",l=118+i,c={happy:`<path d="M133 ${l-2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${l-1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${l+8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,sad:`<path d="M139 ${l+5} q11 -10 22 0" class="ln"/><path d="M134 ${s+8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,angry:`<rect x="138" y="${l-3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${l-3} v9 M150 ${l-3} v9 M156 ${l-3} v9" stroke="#1d1648" stroke-width="1.6"/>`,surprised:`<ellipse cx="150" cy="${l+2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,scared:`<path d="M136 ${l+2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,sleepy:`<ellipse cx="150" cy="${l+1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${l+2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78+i}" class="zz">z</text><text x="188" y="${64+i}" class="zz">Z</text>`,cheeky:`<path d="M138 ${l-1} q12 9 24 0" class="ln"/><path d="M147 ${l+2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,love:`<path d="M138 ${l-2} q12 12 24 0" class="ln"/>`,neutral:`<path d="M138 ${l-1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${l}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`}[n]||"",h=`<ellipse cx="150" cy="${110+i}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;return`${`<circle cx="125" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/><circle cx="175" cy="${113+i}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(n)?.75:.4}"/>`}${t?"":`<g class="pp-eyes">${a}</g>${o}`}${h}${c}`}function yy(n,e){switch(n){case"tron":return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${e.hair}" stroke="#1d1648" stroke-width="2.5"/>`};case"ninja":return{hairFront:`<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${e.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,mask:`<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${e.hair}" class="ol"/>`};case"scientist":return{hairBack:`<circle cx="118" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${e.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${e.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${e.hair}" class="ol"/>`,hairFront:'<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>',torso:'<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>'};case"boss":return{hairFront:`<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${e.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,torso:'<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>',noEyes:!0};case"idol":return{hairBack:`<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${e.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,torso:'<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>'};case"hero":return{back:'<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>',hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${e.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,torso:'<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>'};case"astro":return{hairFront:`<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${e.hair}" class="ol"/>`,helmet:'<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>',torso:'<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>'};case"nonla":return{hairBack:`<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${e.hair}" class="ol"/>`,hairFront:`<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${e.hair}" class="ol"/>`,hat:'<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>',torso:'<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>'};case"bear":return{hairBack:`<circle cx="120" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${e.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,under:'<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>',torso:'<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>'}}return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${e.hair}" class="ol"/>`}}var fo="#c98b52",vy={dog:{front:`<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${fo}" class="ol"/>`},cat:{back:`<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${fo}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>`},bunny:{back:'<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>'},mouse:{back:'<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>'},horns:{back:'<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>'},antenna:{back:'<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>'}},zf={dog:`<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${fo}" class="ol"/>`,cat:`<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${fo}" stroke-width="6" stroke-linecap="round"/>`,pig:'<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>',dino:'<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>'};function Hf(n){n.innerHTML=`
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${xn(ni.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${xn(ni.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${e("L")}${e("R")}
      <g class="pp-torso j" style="transform-origin:${xn(ni.hip)}"><g class="in pp-torsoIn" style="transform-origin:${xn(ni.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${t("L")}${t("R")}
        <g class="pp-head j" style="transform-origin:${xn(ni.neck)}"><g class="in pp-headIn" style="transform-origin:${xn(ni.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
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
  </svg>`;function e(h){let u=ni["hip"+h],d=ni["kn"+h];return`<g class="pp-leg${h} j" style="transform-origin:${xn(u)}"><g class="in pp-leg${h}In" style="transform-origin:${xn(u)}">
      <line class="pp-pants" x1="${u[0]}" y1="${u[1]}" x2="${d[0]}" y2="${d[1]}"/>
      <g class="pp-shin${h} j" style="transform-origin:${xn(d)}"><g class="in pp-shin${h}In" style="transform-origin:${xn(d)}">
        <line class="pp-pants" x1="${d[0]}" y1="${d[1]}" x2="${d[0]}" y2="${d[1]+30}"/>
        <ellipse class="pp-shoe ol" cx="${d[0]+(h==="L"?-8:8)}" cy="${d[1]+36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`}function t(h){let u=ni["sh"+h],d=ni["el"+h];return`<g class="pp-arm${h} j" style="transform-origin:${xn(u)}"><g class="in pp-arm${h}In" style="transform-origin:${xn(u)}">
      <line class="pp-sleeve" x1="${u[0]}" y1="${u[1]}" x2="${d[0]}" y2="${d[1]}"/>
      <g class="pp-fore${h} j" style="transform-origin:${xn(d)}"><g class="in pp-fore${h}In" style="transform-origin:${xn(d)}">
        <line class="pp-forearm" x1="${d[0]}" y1="${d[1]}" x2="${d[0]}" y2="${d[1]+26}"/>
        <circle class="pp-hand pp-skin ol" cx="${d[0]}" cy="${d[1]+31}" r="10.5"/>
        <text class="pp-prop pp-prop${h}" x="${d[0]}" y="${d[1]+40}"></text>
        <path d="M${d[0]+(h==="L"?7:-7)} ${d[1]+26} q${h==="L"?7:-7} -2 ${h==="L"?6:-6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`}let i=n.querySelector("svg"),s=h=>i.querySelector("."+h),r=(h,u)=>{s(h).style.transform=u},a=null,o=null;function l(h){let u=ms[h?.skin]?h.skin:"tron",d=ms[u];i.style.setProperty("--pp-skin",d.skin),i.style.setProperty("--pp-shirt",d.shirt),i.style.setProperty("--pp-pants",d.pants),i.style.setProperty("--pp-shoes",d.shoes);let f=yy(u,d),g=h?.head||"";s("pp-photo").setAttribute("href",g),i.classList.toggle("has-photo",!!g),s("pp-back").innerHTML=f.back||"",s("pp-hairBack").innerHTML=g?"":f.hairBack||"",s("pp-hairFront").innerHTML=(g?"":f.hairFront||"")+(f.hat||""),s("pp-mask").innerHTML=g?"":f.mask||"",s("pp-under").innerHTML=g?"":f.under||"",s("pp-helmet").innerHTML=f.helmet||"",s("pp-torsoAcc").innerHTML=f.torso||"",i.dataset.skin=u,o={...h,noEyes:f.noEyes}}function c(h){let u=fa[h.body]||fa.stand;r("pp-root",u.t||"none"),r("pp-torso",u.torso||"none"),s("pp-stool").classList.toggle("on",!!u.stool);for(let y of["L","R"]){let m=y==="L"?1:-1,p=y==="L"?0:1,M=!h["arm"+y]||h["arm"+y]==="down";if(u.absArms&&M)r("pp-arm"+y,`rotate(${u.absArms[p][0]}deg)`),r("pp-fore"+y,`rotate(${u.absArms[p][1]}deg)`);else{let x=da[h["arm"+y]]||da.down;r("pp-arm"+y,`rotate(${x[0]*m}deg)`),r("pp-fore"+y,`rotate(${x[1]*m}deg)`)}let _=!h["leg"+y]||h["leg"+y]==="down";if(u.absLegs&&_)r("pp-leg"+y,`rotate(${u.absLegs[p][0]}deg)`),r("pp-shin"+y,`rotate(${u.absLegs[p][1]}deg)`);else{let x=u.legs?u.legs[p]:ua[h["leg"+y]]||ua.down;r("pp-leg"+y,`rotate(${x[0]*m}deg)`),r("pp-shin"+y,`rotate(${x[1]*m}deg)`)}i.classList.toggle("wave"+y,h["arm"+y]==="wave"),s("pp-prop"+y).textContent=po[h["prop"+y]]||""}r("pp-head",`rotate(${(Ac[h.head]??0)+(u.head||0)}deg)`);let d=i.classList.contains("has-photo"),f=u.headDown&&(!h.head||h.head==="center")?"down":h.head;s("pp-face").innerHTML=d?"":gy(h.face,f,o?.noEyes);let g=vy[h.ears]||{};s("pp-earsBack").innerHTML=g.back||"",s("pp-earsFront").innerHTML=g.front||"",s("pp-tail").innerHTML=zf[h.tail]?`<g class="pp-tailIn">${zf[h.tail]}</g>`:"",r("pp-tail",u.tail?`rotate(${u.tail}deg)`:"none"),s("pp-emote").textContent=d&&h.face&&h.face!=="neutral"&&mo[h.face]||"",i.dataset.loop=h.loop||"",h.fx&&h.fx.seq!==a&&(a=h.fx.seq,Date.now()-(h.fx.at||0)<4e3&&(i.classList.remove("fx-jump","fx-spin","fx-fall","fx-bounce"),i.getBoundingClientRect(),i.classList.add("fx-"+h.fx.name),clearTimeout(i._fxT),i._fxT=setTimeout(()=>i.classList.remove("fx-"+h.fx.name),1600)))}return{setPose:c,setLook:l,el:i}}var xy=0,Vf=1,_y=2;var Wp=1,Id=2,vi=3,Zi=0,on=1,Bt=2,qi=0,vr=1,Mr=2,Gf=3,Wf=4,by=5,ws=100,My=101,wy=102,Sy=103,Ty=104,Ay=200,Ey=201,Cy=202,Ry=203,ch=204,hh=205,Py=206,Iy=207,Ly=208,ky=209,Dy=210,Uy=211,Ny=212,Oy=213,Fy=214,dh=0,uh=1,fh=2,wr=3,ph=4,mh=5,gh=6,yh=7,$p=0,By=1,zy=2,Yi=0,Hy=1,Vy=2,Gy=3,Wy=4,$y=5,Xy=6,qy=7;var Xp=300,Sr=301,Tr=302,vh=303,xh=304,Rl=306,Ca=1e3,Ts=1001,_h=1002,an=1003,Yy=1004;var go=1005;var Yn=1006,Ec=1007;var As=1008;var wi=1009,qp=1010,Yp=1011,Ra=1012,Ld=1013,Es=1014,_i=1015,Ba=1016,kd=1017,Dd=1018,Ar=1020,Zp=35902,Kp=1021,Jp=1022,Zn=1023,jp=1024,Qp=1025,xr=1026,Er=1027,Pl=1028,Ud=1029,em=1030,Nd=1031;var Od=1033,Wo=33776,$o=33777,Xo=33778,qo=33779,bh=35840,Mh=35841,wh=35842,Sh=35843,Th=36196,Ah=37492,Eh=37496,Ch=37808,Rh=37809,Ph=37810,Ih=37811,Lh=37812,kh=37813,Dh=37814,Uh=37815,Nh=37816,Oh=37817,Fh=37818,Bh=37819,zh=37820,Hh=37821,Yo=36492,Vh=36494,Gh=36495,tm=36283,Wh=36284,$h=36285,Xh=36286;var Ko=2300,qh=2301,Cc=2302,$f=2400,Xf=2401,qf=2402;var Zy=3200,Ky=3201;var Fd=0,Jy=1,$i="",Xt="srgb",es="srgb-linear",Bd="display-p3",Il="display-p3-linear",Jo="linear",_t="srgb",jo="rec709",Qo="p3";var js=7680;var Yf=519,jy=512,Qy=513,ev=514,nm=515,tv=516,nv=517,iv=518,sv=519,Yh=35044;var Zf="300 es",bi=2e3,el=2001,Ki=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let i=this._listeners[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Rc=Math.PI/180,tl=180/Math.PI;function Mi(){let n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(nn[n&255]+nn[n>>8&255]+nn[n>>16&255]+nn[n>>24&255]+"-"+nn[e&255]+nn[e>>8&255]+"-"+nn[e>>16&15|64]+nn[e>>24&255]+"-"+nn[t&63|128]+nn[t>>8&255]+"-"+nn[t>>16&255]+nn[t>>24&255]+nn[i&255]+nn[i>>8&255]+nn[i>>16&255]+nn[i>>24&255]).toLowerCase()}function Qt(n,e,t){return Math.max(e,Math.min(t,n))}function rv(n,e){return(n%e+e)%e}function Pc(n,e,t){return(1-t)*n+t*e}function si(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function gt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Me=class n{constructor(e=0,t=0){n.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},nt=class n{constructor(e,t,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c)}set(e,t,i,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],y=s[0],m=s[3],p=s[6],M=s[1],_=s[4],x=s[7],C=s[2],T=s[5],E=s[8];return r[0]=a*y+o*M+l*C,r[3]=a*m+o*_+l*T,r[6]=a*p+o*x+l*E,r[1]=c*y+h*M+u*C,r[4]=c*m+h*_+u*T,r[7]=c*p+h*x+u*E,r[2]=d*y+f*M+g*C,r[5]=d*m+f*_+g*T,r[8]=d*p+f*x+g*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,d=o*l-h*r,f=c*r-a*l,g=t*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return e[0]=u*y,e[1]=(s*c-h*i)*y,e[2]=(o*i-s*a)*y,e[3]=d*y,e[4]=(h*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=f*y,e[7]=(i*l-c*t)*y,e[8]=(a*t-i*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ic.makeScale(e,t)),this}rotate(e){return this.premultiply(Ic.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ic.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ic=new nt;function im(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nl(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function av(){let n=nl("canvas");return n.style.display="block",n}var Kf={};function Zo(n){n in Kf||(Kf[n]=!0,console.warn(n))}function ov(n,e,t){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}function lv(n){let e=n.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function cv(n){let e=n.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Jf=new nt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jf=new nt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ma={[es]:{transfer:Jo,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n,fromReference:n=>n},[Xt]:{transfer:_t,primaries:jo,luminanceCoefficients:[.2126,.7152,.0722],toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Il]:{transfer:Jo,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.applyMatrix3(jf),fromReference:n=>n.applyMatrix3(Jf)},[Bd]:{transfer:_t,primaries:Qo,luminanceCoefficients:[.2289,.6917,.0793],toReference:n=>n.convertSRGBToLinear().applyMatrix3(jf),fromReference:n=>n.applyMatrix3(Jf).convertLinearToSRGB()}},hv=new Set([es,Il]),ft={enabled:!0,_workingColorSpace:es,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hv.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;let i=ma[e].toReference,s=ma[t].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ma[n].primaries},getTransfer:function(n){return n===$i?Jo:ma[n].transfer},getLuminanceCoefficients:function(n,e=this._workingColorSpace){return n.fromArray(ma[e].luminanceCoefficients)}};function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Lc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var Qs,Zh=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qs===void 0&&(Qs=nl("canvas")),Qs.width=e.width,Qs.height=e.height;let i=Qs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Qs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=nl("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_r(r[a]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_r(t[i]/255)*255):t[i]=_r(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},dv=0,il=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dv++}),this.uuid=Mi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(kc(s[a].image)):r.push(kc(s[a]))}else r=kc(s);i.url=r}return t||(e.images[this.uuid]=i),i}};function kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zh.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var uv=0,_n=class n extends Ki{constructor(e=n.DEFAULT_IMAGE,t=n.DEFAULT_MAPPING,i=Ts,s=Ts,r=Yn,a=As,o=Zn,l=wi,c=n.DEFAULT_ANISOTROPY,h=$i){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uv++}),this.uuid=Mi(),this.name="",this.source=new il(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new nt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ca:e.x=e.x-Math.floor(e.x);break;case Ts:e.x=e.x<0?0:1;break;case _h:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ca:e.y=e.y-Math.floor(e.y);break;case Ts:e.y=e.y<0?0:1;break;case _h:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Xp;_n.DEFAULT_ANISOTROPY=1;var Lt=class n{constructor(e=0,t=0,i=0,s=1){n.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,r,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],y=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+y)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let _=(c+1)/2,x=(f+1)/2,C=(p+1)/2,T=(h+d)/4,E=(u+y)/4,L=(g+m)/4;return _>x&&_>C?_<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(_),s=T/i,r=E/i):x>C?x<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),i=T/s,r=L/s):C<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),i=E/r,s=L/r),this.set(i,s,r,t),this}let M=Math.sqrt((m-g)*(m-g)+(u-y)*(u-y)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-y)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Kh=class extends Ki{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Lt(0,0,e,t),this.scissorTest=!1,this.viewport=new Lt(0,0,e,t);let s={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);let r=new _n(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];let a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new il(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Si=class extends Kh{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},sl=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Jh=class extends _n{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ji=class{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],y=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=y;return}if(u!==y||l!==d||c!==f||h!==g){let m=1-o,p=l*d+c*f+h*g+u*y,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){let C=Math.sqrt(_),T=Math.atan2(C,p*M);m=Math.sin(m*T)/C,o=Math.sin(o*T)/C}let x=o*M;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+y*x,m===1-o){let C=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=C,c*=C,h*=C,u*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-o*f,e[t+2]=c*g+h*f+o*d-l*u,e[t+3]=h*g-o*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),d=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Qt(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+i*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let f=1-t;return this._w=f*a+t*this._w,this._x=f*i+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*u+this._w*d,this._x=i*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},H=class n{constructor(e=0,t=0,i=0){n.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*s,this.y=r[1]*t+r[4]*i+r[7]*s,this.z=r[2]*t+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*i),h=2*(o*t-r*s),u=2*(r*i-a*t);return this.x=t+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s,this.y=r[1]*t+r[5]*i+r[9]*s,this.z=r[2]*t+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Dc.copy(this).projectOnVector(e),this.sub(Dc)}reflect(e){return this.sub(Dc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(Qt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Dc=new H,Qf=new Ji,Cs=class{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint($n.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint($n.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=$n.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$n):$n.fromBufferAttribute(r,a),$n.applyMatrix4(e.matrixWorld),this.expandByPoint($n);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),yo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),yo.copy(i.boundingBox)),yo.applyMatrix4(e.matrixWorld),this.union(yo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$n),$n.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),vo.subVectors(this.max,ga),er.subVectors(e.a,ga),tr.subVectors(e.b,ga),nr.subVectors(e.c,ga),Bi.subVectors(tr,er),zi.subVectors(nr,tr),gs.subVectors(er,nr);let t=[0,-Bi.z,Bi.y,0,-zi.z,zi.y,0,-gs.z,gs.y,Bi.z,0,-Bi.x,zi.z,0,-zi.x,gs.z,0,-gs.x,-Bi.y,Bi.x,0,-zi.y,zi.x,0,-gs.y,gs.x,0];return!Uc(t,er,tr,nr,vo)||(t=[1,0,0,0,1,0,0,0,1],!Uc(t,er,tr,nr,vo))?!1:(xo.crossVectors(Bi,zi),t=[xo.x,xo.y,xo.z],Uc(t,er,tr,nr,vo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$n).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($n).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},fi=[new H,new H,new H,new H,new H,new H,new H,new H],$n=new H,yo=new Cs,er=new H,tr=new H,nr=new H,Bi=new H,zi=new H,gs=new H,ga=new H,vo=new H,xo=new H,ys=new H;function Uc(n,e,t,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){ys.fromArray(n,r);let o=s.x*Math.abs(ys.x)+s.y*Math.abs(ys.y)+s.z*Math.abs(ys.z),l=e.dot(ys),c=t.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var fv=new Cs,ya=new H,Nc=new H,Pa=class{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):fv.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ya.subVectors(e,this.center);let t=ya.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ya,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ya.copy(e.center).add(Nc)),this.expandByPoint(ya.copy(e.center).sub(Nc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},pi=new H,Oc=new H,_o=new H,Hi=new H,Fc=new H,bo=new H,Bc=new H,jh=class{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){Oc.copy(e).add(t).multiplyScalar(.5),_o.copy(t).sub(e).normalize(),Hi.copy(this.origin).sub(Oc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(_o),o=Hi.dot(this.direction),l=-Hi.dot(_o),c=Hi.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*l-o,d=a*o-l,g=r*h,u>=0)if(d>=-g)if(d<=g){let y=1/h;u*=y,d*=y,f=u*(u+a*d+2*o)+d*(a*u+d+2*l)+c}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Oc).addScaledVector(_o,d),f}intersectSphere(e,t){pi.subVectors(e.center,this.origin);let i=pi.dot(this.direction),s=pi.dot(pi)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,i,s,r){Fc.subVectors(t,e),bo.subVectors(i,e),Bc.crossVectors(Fc,bo);let a=this.direction.dot(Bc),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Hi.subVectors(this.origin,e);let l=o*this.direction.dot(bo.crossVectors(Hi,bo));if(l<0)return null;let c=o*this.direction.dot(Fc.cross(Hi));if(c<0||l+c>a)return null;let h=-o*Hi.dot(Bc);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class n{constructor(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,m)}set(e,t,i,s,r,a,o,l,c,h,u,d,f,g,y,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=y,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,i=e.elements,s=1/ir.setFromMatrixColumn(e,0).length(),r=1/ir.setFromMatrixColumn(e,1).length(),a=1/ir.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-y*c,t[9]=-o*l,t[2]=y-d*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d+y*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=y+d*o,t[10]=a*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,g=c*h,y=c*u;t[0]=d-y*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=y-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,y=o*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+y,t[1]=l*u,t[5]=y*c+d,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=y-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-y*u}else if(e.order==="XZY"){let d=a*l,f=a*c,g=o*l,y=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+y,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=y*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pv,e,mv)}lookAt(e,t,i){let s=this.elements;return An.subVectors(e,t),An.lengthSq()===0&&(An.z=1),An.normalize(),Vi.crossVectors(i,An),Vi.lengthSq()===0&&(Math.abs(i.z)===1?An.x+=1e-4:An.z+=1e-4,An.normalize(),Vi.crossVectors(i,An)),Vi.normalize(),Mo.crossVectors(An,Vi),s[0]=Vi.x,s[4]=Mo.x,s[8]=An.x,s[1]=Vi.y,s[5]=Mo.y,s[9]=An.y,s[2]=Vi.z,s[6]=Mo.z,s[10]=An.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,s=t.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],y=i[6],m=i[10],p=i[14],M=i[3],_=i[7],x=i[11],C=i[15],T=s[0],E=s[4],L=s[8],te=s[12],v=s[1],w=s[5],Y=s[9],z=s[13],R=s[2],N=s[6],U=s[10],K=s[14],V=s[3],_e=s[7],ge=s[11],W=s[15];return r[0]=a*T+o*v+l*R+c*V,r[4]=a*E+o*w+l*N+c*_e,r[8]=a*L+o*Y+l*U+c*ge,r[12]=a*te+o*z+l*K+c*W,r[1]=h*T+u*v+d*R+f*V,r[5]=h*E+u*w+d*N+f*_e,r[9]=h*L+u*Y+d*U+f*ge,r[13]=h*te+u*z+d*K+f*W,r[2]=g*T+y*v+m*R+p*V,r[6]=g*E+y*w+m*N+p*_e,r[10]=g*L+y*Y+m*U+p*ge,r[14]=g*te+y*z+m*K+p*W,r[3]=M*T+_*v+x*R+C*V,r[7]=M*E+_*w+x*N+C*_e,r[11]=M*L+_*Y+x*U+C*ge,r[15]=M*te+_*z+x*K+C*W,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],y=e[7],m=e[11],p=e[15];return g*(+r*l*u-s*c*u-r*o*d+i*c*d+s*o*f-i*l*f)+y*(+t*l*f-t*c*d+r*a*d-s*a*f+s*c*h-r*l*h)+m*(+t*c*u-t*o*f-r*a*u+i*a*f+r*o*h-i*c*h)+p*(-s*o*h-t*l*u+t*o*d+s*a*u-i*a*d+i*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],y=e[13],m=e[14],p=e[15],M=u*m*c-y*d*c+y*l*f-o*m*f-u*l*p+o*d*p,_=g*d*c-h*m*c-g*l*f+a*m*f+h*l*p-a*d*p,x=h*y*c-g*u*c+g*o*f-a*y*f-h*o*p+a*u*p,C=g*u*l-h*y*l-g*o*d+a*y*d+h*o*m-a*u*m,T=t*M+i*_+s*x+r*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return e[0]=M*E,e[1]=(y*d*r-u*m*r-y*s*f+i*m*f+u*s*p-i*d*p)*E,e[2]=(o*m*r-y*l*r+y*s*c-i*m*c-o*s*p+i*l*p)*E,e[3]=(u*l*r-o*d*r-u*s*c+i*d*c+o*s*f-i*l*f)*E,e[4]=_*E,e[5]=(h*m*r-g*d*r+g*s*f-t*m*f-h*s*p+t*d*p)*E,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*E,e[7]=(a*d*r-h*l*r+h*s*c-t*d*c-a*s*f+t*l*f)*E,e[8]=x*E,e[9]=(g*u*r-h*y*r-g*i*f+t*y*f+h*i*p-t*u*p)*E,e[10]=(a*y*r-g*o*r+g*i*c-t*y*c-a*i*p+t*o*p)*E,e[11]=(h*o*r-a*u*r-h*i*c+t*u*c+a*i*f-t*o*f)*E,e[12]=C*E,e[13]=(h*y*s-g*u*s+g*i*d-t*y*d-h*i*m+t*u*m)*E,e[14]=(g*o*s-a*y*s-g*i*l+t*y*l+a*i*m-t*o*m)*E,e[15]=(a*u*s-h*o*s+h*i*l-t*u*l-a*i*d+t*o*d)*E,this}scale(e){let t=this.elements,i=e.x,s=e.y,r=e.z;return t[0]*=i,t[4]*=s,t[8]*=r,t[1]*=i,t[5]*=s,t[9]*=r,t[2]*=i,t[6]*=s,t[10]*=r,t[3]*=i,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),s=Math.sin(t),r=1-i,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,d=r*c,f=r*h,g=r*u,y=a*h,m=a*u,p=o*u,M=l*c,_=l*h,x=l*u,C=i.x,T=i.y,E=i.z;return s[0]=(1-(y+p))*C,s[1]=(f+x)*C,s[2]=(g-_)*C,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(m+M)*T,s[7]=0,s[8]=(g+_)*E,s[9]=(m-M)*E,s[10]=(1-(d+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){let s=this.elements,r=ir.set(s[0],s[1],s[2]).length(),a=ir.set(s[4],s[5],s[6]).length(),o=ir.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Xn.copy(this);let c=1/r,h=1/a,u=1/o;return Xn.elements[0]*=c,Xn.elements[1]*=c,Xn.elements[2]*=c,Xn.elements[4]*=h,Xn.elements[5]*=h,Xn.elements[6]*=h,Xn.elements[8]*=u,Xn.elements[9]*=u,Xn.elements[10]*=u,t.setFromRotationMatrix(Xn),i.x=r,i.y=a,i.z=o,this}makePerspective(e,t,i,s,r,a,o=bi){let l=this.elements,c=2*r/(t-e),h=2*r/(i-s),u=(t+e)/(t-e),d=(i+s)/(i-s),f,g;if(o===bi)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===el)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,s,r,a,o=bi){let l=this.elements,c=1/(t-e),h=1/(i-s),u=1/(a-r),d=(t+e)*c,f=(i+s)*h,g,y;if(o===bi)g=(a+r)*u,y=-2*u;else if(o===el)g=r*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},ir=new H,Xn=new Pt,pv=new H(0,0,0),mv=new H(1,1,1),Vi=new H,Mo=new H,An=new H,ep=new Pt,tp=new Ji,ri=class n{constructor(e=0,t=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Qt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Qt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Qt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Qt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Qt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Qt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ep.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ep,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tp.setFromEuler(this),this.setFromQuaternion(tp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ri.DEFAULT_ORDER="XYZ";var rl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gv=0,np=new H,sr=new Ji,mi=new Pt,wo=new H,va=new H,yv=new H,vv=new Ji,ip=new H(1,0,0),sp=new H(0,1,0),rp=new H(0,0,1),ap={type:"added"},xv={type:"removed"},rr={type:"childadded",child:null},zc={type:"childremoved",child:null},Ut=class n extends Ki{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let e=new H,t=new ri,i=new Ji,s=new H(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pt},normalMatrix:{value:new nt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.multiply(sr),this}rotateOnWorldAxis(e,t){return sr.setFromAxisAngle(e,t),this.quaternion.premultiply(sr),this}rotateX(e){return this.rotateOnAxis(ip,e)}rotateY(e){return this.rotateOnAxis(sp,e)}rotateZ(e){return this.rotateOnAxis(rp,e)}translateOnAxis(e,t){return np.copy(e).applyQuaternion(this.quaternion),this.position.add(np.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ip,e)}translateY(e){return this.translateOnAxis(sp,e)}translateZ(e){return this.translateOnAxis(rp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?wo.copy(e):wo.set(e,t,i);let s=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(va,wo,this.up):mi.lookAt(wo,va,this.up),this.quaternion.setFromRotationMatrix(mi),s&&(mi.extractRotation(s.matrixWorld),sr.setFromRotationMatrix(mi),this.quaternion.premultiply(sr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ap),rr.child=e,this.dispatchEvent(rr),rr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xv),zc.child=e,this.dispatchEvent(zc),zc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ap),rr.child=e,this.dispatchEvent(rr),rr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,yv),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,vv,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){let i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}};Ut.DEFAULT_UP=new H(0,1,0);Ut.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ut.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new H,gi=new H,Hc=new H,yi=new H,ar=new H,or=new H,op=new H,Vc=new H,Gc=new H,Wc=new H,$c=new Lt,Xc=new Lt,qc=new Lt,Xi=class n{constructor(e=new H,t=new H,i=new H){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),qn.subVectors(e,t),s.cross(qn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,i,s,r){qn.subVectors(s,t),gi.subVectors(i,t),Hc.subVectors(e,t);let a=qn.dot(qn),o=qn.dot(gi),l=qn.dot(Hc),c=gi.dot(gi),h=gi.dot(Hc),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(c*l-o*h)*d,g=(a*h-o*l)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,yi)===null?!1:yi.x>=0&&yi.y>=0&&yi.x+yi.y<=1}static getInterpolation(e,t,i,s,r,a,o,l){return this.getBarycoord(e,t,i,s,yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,yi.x),l.addScaledVector(a,yi.y),l.addScaledVector(o,yi.z),l)}static getInterpolatedAttribute(e,t,i,s,r,a){return $c.setScalar(0),Xc.setScalar(0),qc.setScalar(0),$c.fromBufferAttribute(e,t),Xc.fromBufferAttribute(e,i),qc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector($c,r.x),a.addScaledVector(Xc,r.y),a.addScaledVector(qc,r.z),a}static isFrontFacing(e,t,i,s){return qn.subVectors(i,t),gi.subVectors(e,t),qn.cross(gi).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),qn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return n.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,r){return n.getInterpolation(e,this.a,this.b,this.c,t,i,s,r)}containsPoint(e){return n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,s=this.b,r=this.c,a,o;ar.subVectors(s,i),or.subVectors(r,i),Vc.subVectors(e,i);let l=ar.dot(Vc),c=or.dot(Vc);if(l<=0&&c<=0)return t.copy(i);Gc.subVectors(e,s);let h=ar.dot(Gc),u=or.dot(Gc);if(h>=0&&u<=h)return t.copy(s);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(ar,a);Wc.subVectors(e,r);let f=ar.dot(Wc),g=or.dot(Wc);if(g>=0&&f<=g)return t.copy(r);let y=f*c-l*g;if(y<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(or,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return op.subVectors(r,s),o=(u-h)/(u-h+(f-g)),t.copy(s).addScaledVector(op,o);let p=1/(m+y+d);return a=y*p,o=d*p,t.copy(i).addScaledVector(ar,a).addScaledVector(or,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},sm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},So={h:0,s:0,l:0};function Yc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}var et=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,t),this}setRGB(e,t,i,s=ft.workingColorSpace){return this.r=e,this.g=t,this.b=i,ft.toWorkingColorSpace(this,s),this}setHSL(e,t,i,s=ft.workingColorSpace){if(e=rv(e,1),t=Qt(t,0,1),i=Qt(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Yc(a,r,e+1/3),this.g=Yc(a,r,e),this.b=Yc(a,r,e-1/3)}return ft.toWorkingColorSpace(this,s),this}setStyle(e,t=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let i=sm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_r(e.r),this.g=_r(e.g),this.b=_r(e.b),this}copyLinearToSRGB(e){return this.r=Lc(e.r),this.g=Lc(e.g),this.b=Lc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return ft.fromWorkingColorSpace(sn.copy(this),e),Math.round(Qt(sn.r*255,0,255))*65536+Math.round(Qt(sn.g*255,0,255))*256+Math.round(Qt(sn.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ft.workingColorSpace){ft.fromWorkingColorSpace(sn.copy(this),t);let i=sn.r,s=sn.g,r=sn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ft.workingColorSpace){return ft.fromWorkingColorSpace(sn.copy(this),t),e.r=sn.r,e.g=sn.g,e.b=sn.b,e}getStyle(e=Xt){ft.fromWorkingColorSpace(sn.copy(this),e);let t=sn.r,i=sn.g,s=sn.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(So);let i=Pc(Gi.h,So.h,t),s=Pc(Gi.s,So.s,t),r=Pc(Gi.l,So.l,t);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*s,this.g=r[1]*t+r[4]*i+r[7]*s,this.b=r[2]*t+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sn=new et;et.NAMES=sm;var _v=0,Ti=class extends Ki{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=vr,this.side=Zi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ch,this.blendDst=hh,this.blendEquation=ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new et(0,0,0),this.blendAlpha=0,this.depthFunc=wr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=js,this.stencilZFail=js,this.stencilZPass=js,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==vr&&(i.blending=this.blending),this.side!==Zi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ch&&(i.blendSrc=this.blendSrc),this.blendDst!==hh&&(i.blendDst=this.blendDst),this.blendEquation!==ws&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==wr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yf&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==js&&(i.stencilFail=this.stencilFail),this.stencilZFail!==js&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==js&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let s=t.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},zt=class extends Ti{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=$p,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dt=new H,To=new Me,Cn=class{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Yh,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)To.fromBufferAttribute(this,t),To.applyMatrix3(e),this.setXY(t,To.x,To.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e*=this.itemSize,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Yh&&(e.usage=this.usage),e}};var al=class extends Cn{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var ol=class extends Cn{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var mt=class extends Cn{constructor(e,t,i){super(new Float32Array(e),t,i)}},bv=0,Fn=new Pt,Zc=new Ut,lr=new H,En=new Cs,xa=new Cs,$t=new H,pn=class n extends Ki{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bv++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(im(e)?ol:al)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new nt().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Fn.makeRotationFromQuaternion(e),this.applyMatrix4(Fn),this}rotateX(e){return Fn.makeRotationX(e),this.applyMatrix4(Fn),this}rotateY(e){return Fn.makeRotationY(e),this.applyMatrix4(Fn),this}rotateZ(e){return Fn.makeRotationZ(e),this.applyMatrix4(Fn),this}translate(e,t,i){return Fn.makeTranslation(e,t,i),this.applyMatrix4(Fn),this}scale(e,t,i){return Fn.makeScale(e,t,i),this.applyMatrix4(Fn),this}lookAt(e){return Zc.lookAt(e),Zc.updateMatrix(),this.applyMatrix4(Zc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(lr).negate(),this.translate(lr.x,lr.y,lr.z),this}setFromPoints(e){let t=[];for(let i=0,s=e.length;i<s;i++){let r=e[i];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){let r=t[i];En.setFromBufferAttribute(r),this.morphTargetsRelative?($t.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint($t),$t.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint($t)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pa);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){let i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];xa.setFromBufferAttribute(o),this.morphTargetsRelative?($t.addVectors(En.min,xa.min),En.expandByPoint($t),$t.addVectors(En.max,xa.max),En.expandByPoint($t)):(En.expandByPoint(xa.min),En.expandByPoint(xa.max))}En.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)$t.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared($t));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)$t.fromBufferAttribute(o,c),l&&(lr.fromBufferAttribute(e,c),$t.add(lr)),s=Math.max(s,i.distanceToSquared($t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Cn(new Float32Array(4*i.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let L=0;L<i.count;L++)o[L]=new H,l[L]=new H;let c=new H,h=new H,u=new H,d=new Me,f=new Me,g=new Me,y=new H,m=new H;function p(L,te,v){c.fromBufferAttribute(i,L),h.fromBufferAttribute(i,te),u.fromBufferAttribute(i,v),d.fromBufferAttribute(r,L),f.fromBufferAttribute(r,te),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),g.sub(d);let w=1/(f.x*g.y-g.x*f.y);isFinite(w)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(w),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(w),o[L].add(y),o[te].add(y),o[v].add(y),l[L].add(m),l[te].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let L=0,te=M.length;L<te;++L){let v=M[L],w=v.start,Y=v.count;for(let z=w,R=w+Y;z<R;z+=3)p(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let _=new H,x=new H,C=new H,T=new H;function E(L){C.fromBufferAttribute(s,L),T.copy(C);let te=o[L];_.copy(te),_.sub(C.multiplyScalar(C.dot(te))).normalize(),x.crossVectors(T,te);let w=x.dot(l[L])<0?-1:1;a.setXYZW(L,_.x,_.y,_.z,w)}for(let L=0,te=M.length;L<te;++L){let v=M[L],w=v.start,Y=v.count;for(let z=w,R=w+Y;z<R;z+=3)E(e.getX(z+0)),E(e.getX(z+1)),E(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Cn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new H,r=new H,a=new H,o=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)$t.fromBufferAttribute(e,t),$t.normalize(),e.setXYZ(t,$t.x,$t.y,$t.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,u=o.normalized,d=new c.constructor(l.length*h),f=0,g=0;for(let y=0,m=l.length;y<m;y++){o.isInterleavedBufferAttribute?f=l[y]*o.data.stride+o.offset:f=l[y]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new Cn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,i);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let l in i){let c=i[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},lp=new Pt,vs=new jh,Ao=new Pa,cp=new H,Eo=new H,Co=new H,Ro=new H,Kc=new H,Po=new H,hp=new H,Io=new H,je=class extends Ut{constructor(e=new pn,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Po.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(Kc.fromBufferAttribute(u,e),a?Po.addScaledVector(Kc,h):Po.addScaledVector(Kc.sub(t),h))}t.add(Po)}return t}raycast(e,t){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ao.copy(i.boundingSphere),Ao.applyMatrix4(r),vs.copy(e.ray).recast(e.near),!(Ao.containsPoint(vs.origin)===!1&&(vs.intersectSphere(Ao,cp)===null||vs.origin.distanceToSquared(cp)>(e.far-e.near)**2))&&(lp.copy(r).invert(),vs.copy(e.ray).applyMatrix4(lp),!(i.boundingBox!==null&&vs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,vs)))}_computeIntersections(e,t,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,C=_;x<C;x+=3){let T=o.getX(x),E=o.getX(x+1),L=o.getX(x+2);s=Lo(this,p,e,i,c,h,u,T,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(o.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=o.getX(m),_=o.getX(m+1),x=o.getX(m+2);s=Lo(this,a,e,i,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,y=d.length;g<y;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),_=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,C=_;x<C;x+=3){let T=x,E=x+1,L=x+2;s=Lo(this,p,e,i,c,h,u,T,E,L),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),y=Math.min(l.count,f.start+f.count);for(let m=g,p=y;m<p;m+=3){let M=m,_=m+1,x=m+2;s=Lo(this,a,e,i,c,h,u,M,_,x),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Mv(n,e,t,i,s,r,a,o){let l;if(e.side===on?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,e.side===Zi,o),l===null)return null;Io.copy(o),Io.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:n}}function Lo(n,e,t,i,s,r,a,o,l,c){n.getVertexPosition(o,Eo),n.getVertexPosition(l,Co),n.getVertexPosition(c,Ro);let h=Mv(n,e,t,i,Eo,Co,Ro,hp);if(h){let u=new H;Xi.getBarycoord(hp,Eo,Co,Ro,u),s&&(h.uv=Xi.getInterpolatedAttribute(s,o,l,c,u,new Me)),r&&(h.uv1=Xi.getInterpolatedAttribute(r,o,l,c,u,new Me)),a&&(h.normal=Xi.getInterpolatedAttribute(a,o,l,c,u,new H),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:l,c,normal:new H,materialIndex:0};Xi.getNormal(Eo,Co,Ro,d.normal),h.face=d,h.barycoord=u}return h}var qt=class n extends pn{constructor(e=1,t=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,s,a,2),g("x","z","y",1,-1,e,i,-t,s,a,3),g("x","y","z",1,-1,e,t,i,s,r,4),g("x","y","z",-1,-1,e,t,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new mt(c,3)),this.setAttribute("normal",new mt(h,3)),this.setAttribute("uv",new mt(u,2));function g(y,m,p,M,_,x,C,T,E,L,te){let v=x/E,w=C/L,Y=x/2,z=C/2,R=T/2,N=E+1,U=L+1,K=0,V=0,_e=new H;for(let ge=0;ge<U;ge++){let W=ge*w-z;for(let re=0;re<N;re++){let Ne=re*v-Y;_e[y]=Ne*M,_e[m]=W*_,_e[p]=R,c.push(_e.x,_e.y,_e.z),_e[y]=0,_e[m]=0,_e[p]=T>0?1:-1,h.push(_e.x,_e.y,_e.z),u.push(re/E),u.push(1-ge/L),K+=1}}for(let ge=0;ge<L;ge++)for(let W=0;W<E;W++){let re=d+W+N*ge,Ne=d+W+N*(ge+1),ie=d+(W+1)+N*(ge+1),de=d+(W+1)+N*ge;l.push(re,Ne,de),l.push(Ne,ie,de),V+=6}o.addGroup(f,V,te),f+=V,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Cr(n){let e={};for(let t in n){e[t]={};for(let i in n[t]){let s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function fn(n){let e={};for(let t=0;t<n.length;t++){let i=Cr(n[t]);for(let s in i)e[s]=i[s]}return e}function wv(n){let e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function rm(n){let e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ft.workingColorSpace}var Sv={clone:Cr,merge:fn},Tv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Av=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bn=class extends Ti{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tv,this.fragmentShader=Av,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Cr(e.uniforms),this.uniformsGroups=wv(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}},ll=class extends Ut{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wi=new H,dp=new Me,up=new Me,rn=class extends ll{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Rc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tl*2*Math.atan(Math.tan(Rc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Wi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z),Wi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Wi.x,Wi.y).multiplyScalar(-e/Wi.z)}getViewSize(e,t){return this.getViewBounds(e,dp,up),t.subVectors(up,dp)}setViewOffset(e,t,i,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Rc*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},cr=-90,hr=1,Qh=class extends Ut{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(cr,hr,e,t);s.layers=this.layers,this.add(s);let r=new rn(cr,hr,e,t);r.layers=this.layers,this.add(r);let a=new rn(cr,hr,e,t);a.layers=this.layers,this.add(a);let o=new rn(cr,hr,e,t);o.layers=this.layers,this.add(o);let l=new rn(cr,hr,e,t);l.layers=this.layers,this.add(l);let c=new rn(cr,hr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===bi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===el)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,r),e.setRenderTarget(i,1,s),e.render(t,a),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},cl=class extends _n{constructor(e,t,i,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Sr,super(e,t,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ed=class extends Si{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new cl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new Bn({name:"CubemapFromEquirect",uniforms:Cr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:qi});r.uniforms.tEquirect.value=t;let a=new je(s,r),o=t.minFilter;return t.minFilter===As&&(t.minFilter=Yn),new Qh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,s);e.setRenderTarget(r)}},Jc=new H,Ev=new H,Cv=new nt,xi=class{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let s=Jc.subVectors(i,t).cross(Ev.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let i=e.delta(Jc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(i,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||Cv.getNormalMatrix(e),s=this.coplanarPoint(Jc).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},xs=new Pa,ko=new H,Ia=class{constructor(e=new xi,t=new xi,i=new xi,s=new xi,r=new xi,a=new xi){this.planes=[e,t,i,s,r,a]}set(e,t,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=bi){let i=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],y=s[10],m=s[11],p=s[12],M=s[13],_=s[14],x=s[15];if(i[0].setComponents(l-r,d-c,m-f,x-p).normalize(),i[1].setComponents(l+r,d+c,m+f,x+p).normalize(),i[2].setComponents(l+a,d+h,m+g,x+M).normalize(),i[3].setComponents(l-a,d-h,m-g,x-M).normalize(),i[4].setComponents(l-o,d-u,m-y,x-_).normalize(),t===bi)i[5].setComponents(l+o,d+u,m+y,x+_).normalize();else if(t===el)i[5].setComponents(o,u,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),xs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xs)}intersectsSprite(e){return xs.center.set(0,0,0),xs.radius=.7071067811865476,xs.applyMatrix4(e.matrixWorld),this.intersectsSphere(xs)}intersectsSphere(e){let t=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let s=t[i];if(ko.x=s.normal.x>0?e.max.x:e.min.x,ko.y=s.normal.y>0?e.max.y:e.min.y,ko.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function am(){let n=null,e=!1,t=null,i=null;function s(r,a){t(r,a),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){n=r}}}function Rv(n){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,u=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,l,c){let h=l.array,u=l.updateRanges;if(n.bindBuffer(c,o),u.length===0)n.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],y=u[f];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++d,u[d]=y)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let y=u[f];n.bufferSubData(c,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Ai=class n extends pn{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=e/o,d=t/l,f=[],g=[],y=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let _=0;_<c;_++){let x=_*u-r;g.push(x,-M,0),y.push(0,0,1),m.push(_/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<o;M++){let _=M+c*p,x=M+c*(p+1),C=M+1+c*(p+1),T=M+1+c*p;f.push(_,x,T),f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.width,e.height,e.widthSegments,e.heightSegments)}},Pv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Iv=`#ifdef USE_ALPHAHASH
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
#endif`,Lv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,kv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Dv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nv=`#ifdef USE_AOMAP
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
#endif`,Ov=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Fv=`#ifdef USE_BATCHING
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
#endif`,Bv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gv=`#ifdef USE_IRIDESCENCE
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
#endif`,Wv=`#ifdef USE_BUMPMAP
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
#endif`,$v=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qv=`#define PI 3.141592653589793
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
} // validated`,ex=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tx=`vec3 transformedNormal = objectNormal;
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
#endif`,nx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ax="gl_FragColor = linearToOutputTexel( gl_FragColor );",ox=`
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
}`,lx=`#ifdef USE_ENVMAP
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
#endif`,cx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hx=`#ifdef USE_ENVMAP
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
#endif`,dx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ux=`#ifdef USE_ENVMAP
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
#endif`,fx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,px=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yx=`#ifdef USE_GRADIENTMAP
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
}`,vx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_x=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bx=`uniform bool receiveShadow;
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
#endif`,Mx=`#ifdef USE_ENVMAP
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
#endif`,wx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ax=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ex=`PhysicalMaterial material;
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
#endif`,Cx=`struct PhysicalMaterial {
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
}`,Rx=`
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
#endif`,Px=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ix=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lx=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kx=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dx=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ux=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ox=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bx=`#if defined( USE_POINTS_UV )
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
#endif`,zx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hx=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gx=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$x=`#ifdef USE_MORPHTARGETS
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
#endif`,Xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yx=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jx=`#ifdef USE_NORMALMAP
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
#endif`,Qx=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,e_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,n_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,s_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,r_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,a_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,o_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,c_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,d_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,u_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,p_=`float getShadowMask() {
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
}`,m_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,g_=`#ifdef USE_SKINNING
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
#endif`,y_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,v_=`#ifdef USE_SKINNING
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
#endif`,x_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,__=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,b_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,M_=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,w_=`#ifdef USE_TRANSMISSION
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
#endif`,S_=`#ifdef USE_TRANSMISSION
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
#endif`,T_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,E_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,R_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P_=`uniform sampler2D t2D;
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
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,k_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U_=`#include <common>
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
}`,N_=`#if DEPTH_PACKING == 3200
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
}`,O_=`#define DISTANCE
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
}`,F_=`#define DISTANCE
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
}`,B_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,z_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H_=`uniform float scale;
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
}`,V_=`uniform vec3 diffuse;
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
}`,G_=`#include <common>
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
}`,W_=`uniform vec3 diffuse;
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
}`,$_=`#define LAMBERT
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
}`,X_=`#define LAMBERT
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
}`,q_=`#define MATCAP
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
}`,Y_=`#define MATCAP
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
}`,Z_=`#define NORMAL
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
}`,K_=`#define NORMAL
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
}`,J_=`#define PHONG
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
}`,j_=`#define PHONG
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
}`,Q_=`#define STANDARD
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
}`,e1=`#define STANDARD
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
}`,t1=`#define TOON
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
}`,n1=`#define TOON
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
}`,i1=`uniform float size;
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
}`,s1=`uniform vec3 diffuse;
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
}`,r1=`#include <common>
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
}`,a1=`uniform vec3 color;
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
}`,o1=`uniform float rotation;
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
}`,l1=`uniform vec3 diffuse;
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
}`,tt={alphahash_fragment:Pv,alphahash_pars_fragment:Iv,alphamap_fragment:Lv,alphamap_pars_fragment:kv,alphatest_fragment:Dv,alphatest_pars_fragment:Uv,aomap_fragment:Nv,aomap_pars_fragment:Ov,batching_pars_vertex:Fv,batching_vertex:Bv,begin_vertex:zv,beginnormal_vertex:Hv,bsdfs:Vv,iridescence_fragment:Gv,bumpmap_pars_fragment:Wv,clipping_planes_fragment:$v,clipping_planes_pars_fragment:Xv,clipping_planes_pars_vertex:qv,clipping_planes_vertex:Yv,color_fragment:Zv,color_pars_fragment:Kv,color_pars_vertex:Jv,color_vertex:jv,common:Qv,cube_uv_reflection_fragment:ex,defaultnormal_vertex:tx,displacementmap_pars_vertex:nx,displacementmap_vertex:ix,emissivemap_fragment:sx,emissivemap_pars_fragment:rx,colorspace_fragment:ax,colorspace_pars_fragment:ox,envmap_fragment:lx,envmap_common_pars_fragment:cx,envmap_pars_fragment:hx,envmap_pars_vertex:dx,envmap_physical_pars_fragment:Mx,envmap_vertex:ux,fog_vertex:fx,fog_pars_vertex:px,fog_fragment:mx,fog_pars_fragment:gx,gradientmap_pars_fragment:yx,lightmap_pars_fragment:vx,lights_lambert_fragment:xx,lights_lambert_pars_fragment:_x,lights_pars_begin:bx,lights_toon_fragment:wx,lights_toon_pars_fragment:Sx,lights_phong_fragment:Tx,lights_phong_pars_fragment:Ax,lights_physical_fragment:Ex,lights_physical_pars_fragment:Cx,lights_fragment_begin:Rx,lights_fragment_maps:Px,lights_fragment_end:Ix,logdepthbuf_fragment:Lx,logdepthbuf_pars_fragment:kx,logdepthbuf_pars_vertex:Dx,logdepthbuf_vertex:Ux,map_fragment:Nx,map_pars_fragment:Ox,map_particle_fragment:Fx,map_particle_pars_fragment:Bx,metalnessmap_fragment:zx,metalnessmap_pars_fragment:Hx,morphinstance_vertex:Vx,morphcolor_vertex:Gx,morphnormal_vertex:Wx,morphtarget_pars_vertex:$x,morphtarget_vertex:Xx,normal_fragment_begin:qx,normal_fragment_maps:Yx,normal_pars_fragment:Zx,normal_pars_vertex:Kx,normal_vertex:Jx,normalmap_pars_fragment:jx,clearcoat_normal_fragment_begin:Qx,clearcoat_normal_fragment_maps:e_,clearcoat_pars_fragment:t_,iridescence_pars_fragment:n_,opaque_fragment:i_,packing:s_,premultiplied_alpha_fragment:r_,project_vertex:a_,dithering_fragment:o_,dithering_pars_fragment:l_,roughnessmap_fragment:c_,roughnessmap_pars_fragment:h_,shadowmap_pars_fragment:d_,shadowmap_pars_vertex:u_,shadowmap_vertex:f_,shadowmask_pars_fragment:p_,skinbase_vertex:m_,skinning_pars_vertex:g_,skinning_vertex:y_,skinnormal_vertex:v_,specularmap_fragment:x_,specularmap_pars_fragment:__,tonemapping_fragment:b_,tonemapping_pars_fragment:M_,transmission_fragment:w_,transmission_pars_fragment:S_,uv_pars_fragment:T_,uv_pars_vertex:A_,uv_vertex:E_,worldpos_vertex:C_,background_vert:R_,background_frag:P_,backgroundCube_vert:I_,backgroundCube_frag:L_,cube_vert:k_,cube_frag:D_,depth_vert:U_,depth_frag:N_,distanceRGBA_vert:O_,distanceRGBA_frag:F_,equirect_vert:B_,equirect_frag:z_,linedashed_vert:H_,linedashed_frag:V_,meshbasic_vert:G_,meshbasic_frag:W_,meshlambert_vert:$_,meshlambert_frag:X_,meshmatcap_vert:q_,meshmatcap_frag:Y_,meshnormal_vert:Z_,meshnormal_frag:K_,meshphong_vert:J_,meshphong_frag:j_,meshphysical_vert:Q_,meshphysical_frag:e1,meshtoon_vert:t1,meshtoon_frag:n1,points_vert:i1,points_frag:s1,shadow_vert:r1,shadow_frag:a1,sprite_vert:o1,sprite_frag:l1},Le={common:{diffuse:{value:new et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new nt}},envmap:{envMap:{value:null},envMapRotation:{value:new nt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new nt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new nt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new nt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new nt},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new nt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new nt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new nt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new nt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0},uvTransform:{value:new nt}},sprite:{diffuse:{value:new et(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new nt},alphaMap:{value:null},alphaMapTransform:{value:new nt},alphaTest:{value:0}}},ii={basic:{uniforms:fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:fn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new et(0)},specular:{value:new et(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:fn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:fn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new et(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:fn([Le.points,Le.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:fn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:fn([Le.common,Le.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:fn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:fn([Le.sprite,Le.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new nt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new nt}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:fn([Le.common,Le.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:fn([Le.lights,Le.fog,{color:{value:new et(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};ii.physical={uniforms:fn([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new nt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new nt},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new nt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new nt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new nt},sheen:{value:0},sheenColor:{value:new et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new nt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new nt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new nt},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new nt},attenuationDistance:{value:0},attenuationColor:{value:new et(0)},specularColor:{value:new et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new nt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new nt},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new nt}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Do={r:0,b:0,g:0},_s=new ri,c1=new Pt;function h1(n,e,t,i,s,r,a){let o=new et(0),l=r===!0?0:1,c,h,u=null,d=0,f=null;function g(M){let _=M.isScene===!0?M.background:null;return _&&_.isTexture&&(_=(M.backgroundBlurriness>0?t:e).get(_)),_}function y(M){let _=!1,x=g(M);x===null?p(o,l):x&&x.isColor&&(p(x,1),_=!0);let C=n.xr.getEnvironmentBlendMode();C==="additive"?i.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,_){let x=g(_);x&&(x.isCubeTexture||x.mapping===Rl)?(h===void 0&&(h=new je(new qt(1,1,1),new Bn({name:"BackgroundCubeMaterial",uniforms:Cr(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),_s.copy(_.backgroundRotation),_s.x*=-1,_s.y*=-1,_s.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_s.y*=-1,_s.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(c1.makeRotationFromEuler(_s)),h.material.toneMapped=ft.getTransfer(x.colorSpace)!==_t,(u!==x||d!==x.version||f!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new je(new Ai(2,2),new Bn({name:"BackgroundMaterial",uniforms:Cr(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Zi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==_t,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=n.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,_){M.getRGB(Do,rm(n)),i.buffers.color.setClear(Do.r,Do.g,Do.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(M,_=1){o.set(M),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(o,l)},render:y,addToRenderList:m}}function d1(n,e){let t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(v,w,Y,z,R){let N=!1,U=u(z,Y,w);r!==U&&(r=U,c(r.object)),N=f(v,z,Y,R),N&&g(v,z,Y,R),R!==null&&e.update(R,n.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,x(v,w,Y,z),R!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(R).buffer))}function l(){return n.createVertexArray()}function c(v){return n.bindVertexArray(v)}function h(v){return n.deleteVertexArray(v)}function u(v,w,Y){let z=Y.wireframe===!0,R=i[v.id];R===void 0&&(R={},i[v.id]=R);let N=R[w.id];N===void 0&&(N={},R[w.id]=N);let U=N[z];return U===void 0&&(U=d(l()),N[z]=U),U}function d(v){let w=[],Y=[],z=[];for(let R=0;R<t;R++)w[R]=0,Y[R]=0,z[R]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:Y,attributeDivisors:z,object:v,attributes:{},index:null}}function f(v,w,Y,z){let R=r.attributes,N=w.attributes,U=0,K=Y.getAttributes();for(let V in K)if(K[V].location>=0){let ge=R[V],W=N[V];if(W===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(W=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(W=v.instanceColor)),ge===void 0||ge.attribute!==W||W&&ge.data!==W.data)return!0;U++}return r.attributesNum!==U||r.index!==z}function g(v,w,Y,z){let R={},N=w.attributes,U=0,K=Y.getAttributes();for(let V in K)if(K[V].location>=0){let ge=N[V];ge===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor));let W={};W.attribute=ge,ge&&ge.data&&(W.data=ge.data),R[V]=W,U++}r.attributes=R,r.attributesNum=U,r.index=z}function y(){let v=r.newAttributes;for(let w=0,Y=v.length;w<Y;w++)v[w]=0}function m(v){p(v,0)}function p(v,w){let Y=r.newAttributes,z=r.enabledAttributes,R=r.attributeDivisors;Y[v]=1,z[v]===0&&(n.enableVertexAttribArray(v),z[v]=1),R[v]!==w&&(n.vertexAttribDivisor(v,w),R[v]=w)}function M(){let v=r.newAttributes,w=r.enabledAttributes;for(let Y=0,z=w.length;Y<z;Y++)w[Y]!==v[Y]&&(n.disableVertexAttribArray(Y),w[Y]=0)}function _(v,w,Y,z,R,N,U){U===!0?n.vertexAttribIPointer(v,w,Y,R,N):n.vertexAttribPointer(v,w,Y,z,R,N)}function x(v,w,Y,z){y();let R=z.attributes,N=Y.getAttributes(),U=w.defaultAttributeValues;for(let K in N){let V=N[K];if(V.location>=0){let _e=R[K];if(_e===void 0&&(K==="instanceMatrix"&&v.instanceMatrix&&(_e=v.instanceMatrix),K==="instanceColor"&&v.instanceColor&&(_e=v.instanceColor)),_e!==void 0){let ge=_e.normalized,W=_e.itemSize,re=e.get(_e);if(re===void 0)continue;let Ne=re.buffer,ie=re.type,de=re.bytesPerElement,xe=ie===n.INT||ie===n.UNSIGNED_INT||_e.gpuType===Ld;if(_e.isInterleavedBufferAttribute){let Ee=_e.data,Xe=Ee.stride,We=_e.offset;if(Ee.isInstancedInterleavedBuffer){for(let He=0;He<V.locationSize;He++)p(V.location+He,Ee.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let He=0;He<V.locationSize;He++)m(V.location+He);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let He=0;He<V.locationSize;He++)_(V.location+He,W/V.locationSize,ie,ge,Xe*de,(We+W/V.locationSize*He)*de,xe)}else{if(_e.isInstancedBufferAttribute){for(let Ee=0;Ee<V.locationSize;Ee++)p(V.location+Ee,_e.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Ee=0;Ee<V.locationSize;Ee++)m(V.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Ne);for(let Ee=0;Ee<V.locationSize;Ee++)_(V.location+Ee,W/V.locationSize,ie,ge,W*de,W/V.locationSize*Ee*de,xe)}}else if(U!==void 0){let ge=U[K];if(ge!==void 0)switch(ge.length){case 2:n.vertexAttrib2fv(V.location,ge);break;case 3:n.vertexAttrib3fv(V.location,ge);break;case 4:n.vertexAttrib4fv(V.location,ge);break;default:n.vertexAttrib1fv(V.location,ge)}}}}M()}function C(){L();for(let v in i){let w=i[v];for(let Y in w){let z=w[Y];for(let R in z)h(z[R].object),delete z[R];delete w[Y]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;let w=i[v.id];for(let Y in w){let z=w[Y];for(let R in z)h(z[R].object),delete z[R];delete w[Y]}delete i[v.id]}function E(v){for(let w in i){let Y=i[w];if(Y[v.id]===void 0)continue;let z=Y[v.id];for(let R in z)h(z[R].object),delete z[R];delete Y[v.id]}}function L(){te(),a=!0,r!==s&&(r=s,c(r.object))}function te(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:L,resetDefaultState:te,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:m,disableUnusedAttributes:M}}function u1(n,e,t){let i;function s(c){i=c}function r(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function a(c,h,u){u!==0&&(n.drawArraysInstanced(i,c,h,u),t.update(h,i,u))}function o(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];t.update(f,i,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,d,0,u);let g=0;for(let y=0;y<u;y++)g+=h[y];for(let y=0;y<d.length;y++)t.update(g,i,d[y])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function f1(n,e,t,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Zn&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let L=E===Ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==wi&&i.convert(E)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==_i&&!L)}function l(E){if(E==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){let E=e.get("EXT_clip_control");E.clipControlEXT(E.LOWER_LEFT_EXT,E.ZERO_TO_ONE_EXT)}let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function p1(n){let e=this,t=null,i=0,s=!1,r=!1,a=new xi,o=new nt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,y=u.clipIntersection,m=u.clipShadows,p=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let M=r?0:i,_=M*4,x=p.clippingState||null;l.value=x,x=h(g,d,_,f);for(let C=0;C!==_;++C)x[C]=t[C];p.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let y=u!==null?u.length:0,m=null;if(y!==0){if(m=l.value,g!==!0||m===null){let p=f+y*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,x=f;_!==y;++_,x+=4)a.copy(u[_]).applyMatrix4(M,o),a.normal.toArray(m,x),m[x+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function m1(n){let e=new WeakMap;function t(a,o){return o===vh?a.mapping=Sr:o===xh&&(a.mapping=Tr),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===vh||o===xh)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ed(l.height);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:i,dispose:r}}var hl=class extends ll{constructor(e=-1,t=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gr=4,fp=[.125,.215,.35,.446,.526,.582],Ss=20,jc=new hl,pp=new et,Qc=null,eh=0,th=0,nh=!1,Ms=(1+Math.sqrt(5))/2,dr=1/Ms,mp=[new H(-Ms,dr,0),new H(Ms,dr,0),new H(-dr,0,Ms),new H(dr,0,Ms),new H(0,Ms,-dr),new H(0,Ms,dr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],dl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100){Qc=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,i,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=vp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Qc,eh,th),this._renderer.xr.enabled=nh,e.scissorTest=!1,Uo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Sr||e.mapping===Tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Qc=this._renderer.getRenderTarget(),eh=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),nh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:Ba,format:Zn,colorSpace:es,depthBuffer:!1},s=gp(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=gp(e,t,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g1(r)),this._blurMaterial=y1(r,e,t)}return s}_compileMaterial(e){let t=new je(this._lodPlanes[0],e);this._renderer.compile(t,jc)}_sceneToCubeUV(e,t,i,s){let o=new rn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(pp),h.toneMapping=Yi,h.autoClear=!1;let f=new zt({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),g=new je(new qt,f),y=!1,m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,y=!0):(f.color.copy(pp),y=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):M===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let _=this._cubeSize;Uo(s,M*_,p>2?_:0,_,_),h.setRenderTarget(s),y&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){let i=this._renderer,s=e.mapping===Sr||e.mapping===Tr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=vp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yp());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;Uo(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jc)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=mp[(s-r-1)%mp.length];this._blur(e,r-1,r,a,o)}t.autoClear=i}_blur(e,t,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,s,"latitudinal",r),this._halfBlur(a,e,i,i,s,"longitudinal",r)}_halfBlur(e,t,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new je(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Ss-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):Ss;m>Ss&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ss}`);let p=[],M=0;for(let E=0;E<Ss;++E){let L=E/y,te=Math.exp(-L*L/2);p.push(te),E===0?M+=te:E<m&&(M+=2*te)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);let{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;let x=this._sizeLods[s],C=3*x*(s>_-gr?s-_+gr:0),T=4*(this._cubeSize-x);Uo(t,C,T,3*x,2*x),l.setRenderTarget(t),l.render(u,jc)}};function g1(n){let e=[],t=[],i=[],s=n,r=n-gr+1+fp.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>n-gr?l=fp[a-n+gr-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,y=3,m=2,p=1,M=new Float32Array(y*g*f),_=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,L=T>2?0:-1,te=[E,L,0,E+2/3,L,0,E+2/3,L+1,0,E,L,0,E+2/3,L+1,0,E,L+1,0];M.set(te,y*g*T),_.set(d,m*g*T);let v=[T,T,T,T,T,T];x.set(v,p*g*T)}let C=new pn;C.setAttribute("position",new Cn(M,y)),C.setAttribute("uv",new Cn(_,m)),C.setAttribute("faceIndex",new Cn(x,p)),e.push(C),s>gr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function gp(n,e,t){let i=new Si(n,e,t);return i.texture.mapping=Rl,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Uo(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function y1(n,e,t){let i=new Float32Array(Ss),s=new H(0,1,0);return new Bn({name:"SphericalGaussianBlur",defines:{n:Ss,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:zd(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function yp(){return new Bn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:zd(),fragmentShader:`

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
		`,blending:qi,depthTest:!1,depthWrite:!1})}function vp(){return new Bn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qi,depthTest:!1,depthWrite:!1})}function zd(){return`

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
	`}function v1(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===vh||l===xh,h=l===Sr||l===Tr;if(c||h){let u=e.get(o),d=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new dl(n)),u=c?t.fromEquirectangular(o,u):t.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),u.texture;if(u!==void 0)return u.texture;{let f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new dl(n)),u=c?t.fromEquirectangular(o):t.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,e.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function x1(n){let e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let s=t(i);return s===null&&Zo("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _1(n,e,t,i){let s={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);for(let g in d.morphAttributes){let y=d.morphAttributes[g];for(let m=0,p=y.length;m<p;m++)e.remove(y[m])}d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let g in d)e.update(d[g],n.ARRAY_BUFFER);let f=u.morphAttributes;for(let g in f){let y=f[g];for(let m=0,p=y.length;m<p;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(u){let d=[],f=u.index,g=u.attributes.position,y=0;if(f!==null){let M=f.array;y=f.version;for(let _=0,x=M.length;_<x;_+=3){let C=M[_+0],T=M[_+1],E=M[_+2];d.push(C,T,T,E,E,C)}}else if(g!==void 0){let M=g.array;y=g.version;for(let _=0,x=M.length/3-1;_<x;_+=3){let C=_+0,T=_+1,E=_+2;d.push(C,T,T,E,E,C)}}else return;let m=new(im(d)?ol:al)(d,1);m.version=y;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function b1(n,e,t){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,f){n.drawElements(i,f,r,d*a),t.update(f,i,1)}function c(d,f,g){g!==0&&(n.drawElementsInstanced(i,f,r,d*a,g),t.update(f,i,g))}function h(d,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];t.update(m,i,1)}function u(d,f,g,y){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,f[p],y[p]);else{m.multiDrawElementsInstancedWEBGL(i,f,0,r,d,0,y,0,g);let p=0;for(let M=0;M<g;M++)p+=f[M];for(let M=0;M<y.length;M++)t.update(p,i,y[M])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function M1(n){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=o*(r/3);break;case n.LINES:t.lines+=o*(r/2);break;case n.LINE_STRIP:t.lines+=o*(r-1);break;case n.LINE_LOOP:t.lines+=o*r;break;case n.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function w1(n,e,t){let i=new WeakMap,s=new Lt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let te=function(){E.dispose(),i.delete(o),o.removeEventListener("dispose",te)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],_=0;f===!0&&(_=1),g===!0&&(_=2),y===!0&&(_=3);let x=o.attributes.position.count*_,C=1;x>e.maxTextureSize&&(C=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let T=new Float32Array(x*C*4*u),E=new sl(T,x,C,u);E.type=_i,E.needsUpdate=!0;let L=_*4;for(let v=0;v<u;v++){let w=m[v],Y=p[v],z=M[v],R=x*C*4*v;for(let N=0;N<w.count;N++){let U=N*L;f===!0&&(s.fromBufferAttribute(w,N),T[R+U+0]=s.x,T[R+U+1]=s.y,T[R+U+2]=s.z,T[R+U+3]=0),g===!0&&(s.fromBufferAttribute(Y,N),T[R+U+4]=s.x,T[R+U+5]=s.y,T[R+U+6]=s.z,T[R+U+7]=0),y===!0&&(s.fromBufferAttribute(z,N),T[R+U+8]=s.x,T[R+U+9]=s.y,T[R+U+10]=s.z,T[R+U+11]=z.itemSize===4?s.w:1)}}d={count:u,texture:E,size:new Me(x,C)},i.set(o,d),o.addEventListener("dispose",te)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,t);else{let f=0;for(let y=0;y<c.length;y++)f+=c[y];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function S1(n,e,t,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var ul=class extends _n{constructor(e,t,i,s,r,a,o,l,c,h=xr){if(h!==xr&&h!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===xr&&(i=Es),i===void 0&&h===Er&&(i=Ar),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},om=new _n,xp=new ul(1,1),lm=new sl,cm=new Jh,hm=new cl,_p=[],bp=[],Mp=new Float32Array(16),wp=new Float32Array(9),Sp=new Float32Array(4);function Lr(n,e,t){let i=n[0];if(i<=0||i>0)return n;let s=e*t,r=_p[s];if(r===void 0&&(r=new Float32Array(s),_p[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(r,o)}return r}function Ht(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Vt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ll(n,e){let t=bp[e];t===void 0&&(t=new Int32Array(e),bp[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function T1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function A1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2fv(this.addr,e),Vt(t,e)}}function E1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ht(t,e))return;n.uniform3fv(this.addr,e),Vt(t,e)}}function C1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4fv(this.addr,e),Vt(t,e)}}function R1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Sp.set(i),n.uniformMatrix2fv(this.addr,!1,Sp),Vt(t,i)}}function P1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;wp.set(i),n.uniformMatrix3fv(this.addr,!1,wp),Vt(t,i)}}function I1(n,e){let t=this.cache,i=e.elements;if(i===void 0){if(Ht(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Vt(t,e)}else{if(Ht(t,i))return;Mp.set(i),n.uniformMatrix4fv(this.addr,!1,Mp),Vt(t,i)}}function L1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function k1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2iv(this.addr,e),Vt(t,e)}}function D1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3iv(this.addr,e),Vt(t,e)}}function U1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4iv(this.addr,e),Vt(t,e)}}function N1(n,e){let t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function O1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ht(t,e))return;n.uniform2uiv(this.addr,e),Vt(t,e)}}function F1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ht(t,e))return;n.uniform3uiv(this.addr,e),Vt(t,e)}}function B1(n,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ht(t,e))return;n.uniform4uiv(this.addr,e),Vt(t,e)}}function z1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(xp.compareFunction=nm,r=xp):r=om,t.setTexture2D(e||r,s)}function H1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||cm,s)}function V1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||hm,s)}function G1(n,e,t){let i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||lm,s)}function W1(n){switch(n){case 5126:return T1;case 35664:return A1;case 35665:return E1;case 35666:return C1;case 35674:return R1;case 35675:return P1;case 35676:return I1;case 5124:case 35670:return L1;case 35667:case 35671:return k1;case 35668:case 35672:return D1;case 35669:case 35673:return U1;case 5125:return N1;case 36294:return O1;case 36295:return F1;case 36296:return B1;case 35678:case 36198:case 36298:case 36306:case 35682:return z1;case 35679:case 36299:case 36307:return H1;case 35680:case 36300:case 36308:case 36293:return V1;case 36289:case 36303:case 36311:case 36292:return G1}}function $1(n,e){n.uniform1fv(this.addr,e)}function X1(n,e){let t=Lr(e,this.size,2);n.uniform2fv(this.addr,t)}function q1(n,e){let t=Lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Y1(n,e){let t=Lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Z1(n,e){let t=Lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function K1(n,e){let t=Lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J1(n,e){let t=Lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function j1(n,e){n.uniform1iv(this.addr,e)}function Q1(n,e){n.uniform2iv(this.addr,e)}function eb(n,e){n.uniform3iv(this.addr,e)}function tb(n,e){n.uniform4iv(this.addr,e)}function nb(n,e){n.uniform1uiv(this.addr,e)}function ib(n,e){n.uniform2uiv(this.addr,e)}function sb(n,e){n.uniform3uiv(this.addr,e)}function rb(n,e){n.uniform4uiv(this.addr,e)}function ab(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||om,r[a])}function ob(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cm,r[a])}function lb(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||hm,r[a])}function cb(n,e,t){let i=this.cache,s=e.length,r=Ll(t,s);Ht(i,r)||(n.uniform1iv(this.addr,r),Vt(i,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||lm,r[a])}function hb(n){switch(n){case 5126:return $1;case 35664:return X1;case 35665:return q1;case 35666:return Y1;case 35674:return Z1;case 35675:return K1;case 35676:return J1;case 5124:case 35670:return j1;case 35667:case 35671:return Q1;case 35668:case 35672:return eb;case 35669:case 35673:return tb;case 5125:return nb;case 36294:return ib;case 36295:return sb;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return ab;case 35679:case 36299:case 36307:return ob;case 35680:case 36300:case 36308:case 36293:return lb;case 36289:case 36303:case 36311:case 36292:return cb}}var td=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=W1(t.type)}},nd=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hb(t.type)}},id=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],i)}}},ih=/(\w+)(\])?(\[|\.)?/g;function Tp(n,e){n.seq.push(e),n.map[e.id]=e}function db(n,e,t){let i=n.name,s=i.length;for(ih.lastIndex=0;;){let r=ih.exec(i),a=ih.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Tp(t,c===void 0?new td(o,n,e):new nd(o,n,e));break}else{let u=t.map[o];u===void 0&&(u=new id(o),Tp(t,u)),t=u}}}var br=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);db(r,a,this)}}setValue(e,t,i,s){let r=this.map[t];r!==void 0&&r.setValue(e,i,s)}setOptional(e,t,i){let s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&i.push(a)}return i}};function Ap(n,e,t){let i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}var ub=37297,fb=0;function pb(n,e){let t=n.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function mb(n){let e=ft.getPrimaries(ft.workingColorSpace),t=ft.getPrimaries(n),i;switch(e===t?i="":e===Qo&&t===jo?i="LinearDisplayP3ToLinearSRGB":e===jo&&t===Qo&&(i="LinearSRGBToLinearDisplayP3"),n){case es:case Il:return[i,"LinearTransferOETF"];case Xt:case Bd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Ep(n,e,t){let i=n.getShaderParameter(e,n.COMPILE_STATUS),s=n.getShaderInfoLog(e).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+pb(n.getShaderSource(e),a)}else return s}function gb(n,e){let t=mb(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function yb(n,e){let t;switch(e){case Hy:t="Linear";break;case Vy:t="Reinhard";break;case Gy:t="Cineon";break;case Wy:t="ACESFilmic";break;case Xy:t="AgX";break;case qy:t="Neutral";break;case $y:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var No=new H;function vb(){ft.getLuminanceCoefficients(No);let n=No.x.toFixed(4),e=No.y.toFixed(4),t=No.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xb(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(wa).join(`
`)}function _b(n){let e=[];for(let t in n){let i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function bb(n,e){let t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(e,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function wa(n){return n!==""}function Cp(n,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rp(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Mb=/^[ \t]*#include +<([\w\d./]+)>/gm;function sd(n){return n.replace(Mb,Sb)}var wb=new Map;function Sb(n,e){let t=tt[e];if(t===void 0){let i=wb.get(e);if(i!==void 0)t=tt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return sd(t)}var Tb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Pp(n){return n.replace(Tb,Ab)}function Ab(n,e,t,i){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ip(n){let e=`precision ${n.precision} float;
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
#define LOW_PRECISION`),e}function Eb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Wp?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===Id?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function Cb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Sr:case Tr:e="ENVMAP_TYPE_CUBE";break;case Rl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Rb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Tr:e="ENVMAP_MODE_REFRACTION";break}return e}function Pb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case $p:e="ENVMAP_BLENDING_MULTIPLY";break;case By:e="ENVMAP_BLENDING_MIX";break;case zy:e="ENVMAP_BLENDING_ADD";break}return e}function Ib(n){let e=n.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Lb(n,e,t,i){let s=n.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Eb(t),c=Cb(t),h=Rb(t),u=Pb(t),d=Ib(t),f=xb(t),g=_b(r),y=s.createProgram(),m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wa).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(wa).join(`
`),p.length>0&&(p+=`
`)):(m=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(wa).join(`
`),p=[Ip(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?tt.tonemapping_pars_fragment:"",t.toneMapping!==Yi?yb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,gb("linearToOutputTexel",t.outputColorSpace),vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(wa).join(`
`)),a=sd(a),a=Cp(a,t),a=Rp(a,t),o=sd(o),o=Cp(o,t),o=Rp(o,t),a=Pp(a),o=Pp(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Zf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let _=M+m+a,x=M+p+o,C=Ap(s,s.VERTEX_SHADER,_),T=Ap(s,s.FRAGMENT_SHADER,x);s.attachShader(y,C),s.attachShader(y,T),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(w){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(y).trim(),z=s.getShaderInfoLog(C).trim(),R=s.getShaderInfoLog(T).trim(),N=!0,U=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(N=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,y,C,T);else{let K=Ep(s,C,"vertex"),V=Ep(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+Y+`
`+K+`
`+V)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(z===""||R==="")&&(U=!1);U&&(w.diagnostics={runnable:N,programLog:Y,vertexShader:{log:z,prefix:m},fragmentShader:{log:R,prefix:p}})}s.deleteShader(C),s.deleteShader(T),L=new br(s,y),te=bb(s,y)}let L;this.getUniforms=function(){return L===void 0&&E(this),L};let te;this.getAttributes=function(){return te===void 0&&E(this),te};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(y,ub)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=fb++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=C,this.fragmentShader=T,this}var kb=0,rd=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new ad(e),t.set(e,i)),i}},ad=class{constructor(e){this.id=kb++,this.code=e,this.usedTimes=0}};function Db(n,e,t,i,s,r,a){let o=new rl,l=new rd,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,f=s.vertexTextures,g=s.precision,y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return c.add(v),v===0?"uv":`uv${v}`}function p(v,w,Y,z,R){let N=z.fog,U=R.geometry,K=v.isMeshStandardMaterial?z.environment:null,V=(v.isMeshStandardMaterial?t:e).get(v.envMap||K),_e=V&&V.mapping===Rl?V.image.height:null,ge=y[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,re=W!==void 0?W.length:0,Ne=0;U.morphAttributes.position!==void 0&&(Ne=1),U.morphAttributes.normal!==void 0&&(Ne=2),U.morphAttributes.color!==void 0&&(Ne=3);let ie,de,xe,Ee;if(ge){let Wt=ii[ge];ie=Wt.vertexShader,de=Wt.fragmentShader}else ie=v.vertexShader,de=v.fragmentShader,l.update(v),xe=l.getVertexShaderID(v),Ee=l.getFragmentShaderID(v);let Xe=n.getRenderTarget(),We=R.isInstancedMesh===!0,He=R.isBatchedMesh===!0,Ge=!!v.map,ae=!!v.matcap,I=!!V,ce=!!v.aoMap,pe=!!v.lightMap,ve=!!v.bumpMap,Ae=!!v.normalMap,Fe=!!v.displacementMap,Re=!!v.emissiveMap,P=!!v.metalnessMap,b=!!v.roughnessMap,q=v.anisotropy>0,J=v.clearcoat>0,le=v.dispersion>0,oe=v.iridescence>0,Be=v.sheen>0,Pe=v.transmission>0,De=q&&!!v.anisotropyMap,we=J&&!!v.clearcoatMap,ne=J&&!!v.clearcoatNormalMap,he=J&&!!v.clearcoatRoughnessMap,Oe=oe&&!!v.iridescenceMap,Se=oe&&!!v.iridescenceThicknessMap,me=Be&&!!v.sheenColorMap,qe=Be&&!!v.sheenRoughnessMap,Ye=!!v.specularMap,ht=!!v.specularColorMap,F=!!v.specularIntensityMap,Ie=Pe&&!!v.transmissionMap,ee=Pe&&!!v.thicknessMap,fe=!!v.gradientMap,ke=!!v.alphaMap,Ue=v.alphaTest>0,at=!!v.alphaHash,Tt=!!v.extensions,Zt=Yi;v.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Zt=n.toneMapping);let ct={shaderID:ge,shaderType:v.type,shaderName:v.name,vertexShader:ie,fragmentShader:de,defines:v.defines,customVertexShaderID:xe,customFragmentShaderID:Ee,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:He,batchingColor:He&&R._colorsTexture!==null,instancing:We,instancingColor:We&&R.instanceColor!==null,instancingMorph:We&&R.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Xe===null?n.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:es,alphaToCoverage:!!v.alphaToCoverage,map:Ge,matcap:ae,envMap:I,envMapMode:I&&V.mapping,envMapCubeUVHeight:_e,aoMap:ce,lightMap:pe,bumpMap:ve,normalMap:Ae,displacementMap:f&&Fe,emissiveMap:Re,normalMapObjectSpace:Ae&&v.normalMapType===Jy,normalMapTangentSpace:Ae&&v.normalMapType===Fd,metalnessMap:P,roughnessMap:b,anisotropy:q,anisotropyMap:De,clearcoat:J,clearcoatMap:we,clearcoatNormalMap:ne,clearcoatRoughnessMap:he,dispersion:le,iridescence:oe,iridescenceMap:Oe,iridescenceThicknessMap:Se,sheen:Be,sheenColorMap:me,sheenRoughnessMap:qe,specularMap:Ye,specularColorMap:ht,specularIntensityMap:F,transmission:Pe,transmissionMap:Ie,thicknessMap:ee,gradientMap:fe,opaque:v.transparent===!1&&v.blending===vr&&v.alphaToCoverage===!1,alphaMap:ke,alphaTest:Ue,alphaHash:at,combine:v.combine,mapUv:Ge&&m(v.map.channel),aoMapUv:ce&&m(v.aoMap.channel),lightMapUv:pe&&m(v.lightMap.channel),bumpMapUv:ve&&m(v.bumpMap.channel),normalMapUv:Ae&&m(v.normalMap.channel),displacementMapUv:Fe&&m(v.displacementMap.channel),emissiveMapUv:Re&&m(v.emissiveMap.channel),metalnessMapUv:P&&m(v.metalnessMap.channel),roughnessMapUv:b&&m(v.roughnessMap.channel),anisotropyMapUv:De&&m(v.anisotropyMap.channel),clearcoatMapUv:we&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:ne&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Oe&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:me&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:qe&&m(v.sheenRoughnessMap.channel),specularMapUv:Ye&&m(v.specularMap.channel),specularColorMapUv:ht&&m(v.specularColorMap.channel),specularIntensityMapUv:F&&m(v.specularIntensityMap.channel),transmissionMapUv:Ie&&m(v.transmissionMap.channel),thicknessMapUv:ee&&m(v.thicknessMap.channel),alphaMapUv:ke&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Ae||q),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!U.attributes.uv&&(Ge||ke),fog:!!N,useFog:v.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:R.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ne,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:n.shadowMap.enabled&&Y.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,decodeVideoTexture:Ge&&v.map.isVideoTexture===!0&&ft.getTransfer(v.map.colorSpace)===_t,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Bt,flipSided:v.side===on,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Tt&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Tt&&v.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ct.vertexUv1s=c.has(1),ct.vertexUv2s=c.has(2),ct.vertexUv3s=c.has(3),c.clear(),ct}function M(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let Y in v.defines)w.push(Y),w.push(v.defines[Y]);return v.isRawShaderMaterial===!1&&(_(w,v),x(w,v),w.push(n.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function _(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function x(v,w){o.disableAll(),w.supportsVertexTextures&&o.enable(0),w.instancing&&o.enable(1),w.instancingColor&&o.enable(2),w.instancingMorph&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),w.dispersion&&o.enable(20),w.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.reverseDepthBuffer&&o.enable(4),w.skinning&&o.enable(5),w.morphTargets&&o.enable(6),w.morphNormals&&o.enable(7),w.morphColors&&o.enable(8),w.premultipliedAlpha&&o.enable(9),w.shadowMapEnabled&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),v.push(o.mask)}function C(v){let w=y[v.type],Y;if(w){let z=ii[w];Y=Sv.clone(z.uniforms)}else Y=v.uniforms;return Y}function T(v,w){let Y;for(let z=0,R=h.length;z<R;z++){let N=h[z];if(N.cacheKey===w){Y=N,++Y.usedTimes;break}}return Y===void 0&&(Y=new Lb(n,w,v,r),h.push(Y)),Y}function E(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function L(v){l.remove(v)}function te(){l.dispose()}return{getParameters:p,getProgramCacheKey:M,getUniforms:C,acquireProgram:T,releaseProgram:E,releaseShaderCache:L,programs:h,dispose:te}}function Ub(){let n=new WeakMap;function e(a){return n.has(a)}function t(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:r}}function Nb(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lp(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function kp(){let n=[],e=0,t=[],i=[],s=[];function r(){e=0,t.length=0,i.length=0,s.length=0}function a(u,d,f,g,y,m){let p=n[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:y,group:m},n[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=y,p.group=m),e++,p}function o(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?i.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,g,y,m){let p=a(u,d,f,g,y,m);f.transmission>0?i.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||Nb),i.length>1&&i.sort(d||Lp),s.length>1&&s.sort(d||Lp)}function h(){for(let u=e,d=n.length;u<d;u++){let f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Ob(){let n=new WeakMap;function e(i,s){let r=n.get(i),a;return r===void 0?(a=new kp,n.set(i,[a])):s>=r.length?(a=new kp,r.push(a)):a=r[s],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Fb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new et};break;case"SpotLight":t={position:new H,direction:new H,color:new et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new et,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new et,groundColor:new et};break;case"RectAreaLight":t={color:new et,position:new H,halfWidth:new H,halfHeight:new H};break}return n[e.id]=t,t}}}function Bb(){let n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}var zb=0;function Hb(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vb(n){let e=new Fb,t=Bb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new H);let s=new H,r=new Pt,a=new Pt;function o(c){let h=0,u=0,d=0;for(let te=0;te<9;te++)i.probe[te].set(0,0,0);let f=0,g=0,y=0,m=0,p=0,M=0,_=0,x=0,C=0,T=0,E=0;c.sort(Hb);for(let te=0,v=c.length;te<v;te++){let w=c[te],Y=w.color,z=w.intensity,R=w.distance,N=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=Y.r*z,u+=Y.g*z,d+=Y.b*z;else if(w.isLightProbe){for(let U=0;U<9;U++)i.probe[U].addScaledVector(w.sh.coefficients[U],z);E++}else if(w.isDirectionalLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let K=w.shadow,V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.directionalShadow[f]=V,i.directionalShadowMap[f]=N,i.directionalShadowMatrix[f]=w.shadow.matrix,M++}i.directional[f]=U,f++}else if(w.isSpotLight){let U=e.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(Y).multiplyScalar(z),U.distance=R,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,i.spot[y]=U;let K=w.shadow;if(w.map&&(i.spotLightMap[C]=w.map,C++,K.updateMatrices(w),w.castShadow&&T++),i.spotLightMatrix[y]=K.matrix,w.castShadow){let V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,i.spotShadow[y]=V,i.spotShadowMap[y]=N,x++}y++}else if(w.isRectAreaLight){let U=e.get(w);U.color.copy(Y).multiplyScalar(z),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),i.rectArea[m]=U,m++}else if(w.isPointLight){let U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){let K=w.shadow,V=t.get(w);V.shadowIntensity=K.intensity,V.shadowBias=K.bias,V.shadowNormalBias=K.normalBias,V.shadowRadius=K.radius,V.shadowMapSize=K.mapSize,V.shadowCameraNear=K.camera.near,V.shadowCameraFar=K.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=N,i.pointShadowMatrix[g]=w.shadow.matrix,_++}i.point[g]=U,g++}else if(w.isHemisphereLight){let U=e.get(w);U.skyColor.copy(w.color).multiplyScalar(z),U.groundColor.copy(w.groundColor).multiplyScalar(z),i.hemi[p]=U,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Le.LTC_FLOAT_1,i.rectAreaLTC2=Le.LTC_FLOAT_2):(i.rectAreaLTC1=Le.LTC_HALF_1,i.rectAreaLTC2=Le.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let L=i.hash;(L.directionalLength!==f||L.pointLength!==g||L.spotLength!==y||L.rectAreaLength!==m||L.hemiLength!==p||L.numDirectionalShadows!==M||L.numPointShadows!==_||L.numSpotShadows!==x||L.numSpotMaps!==C||L.numLightProbes!==E)&&(i.directional.length=f,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=E,L.directionalLength=f,L.pointLength=g,L.spotLength=y,L.rectAreaLength=m,L.hemiLength=p,L.numDirectionalShadows=M,L.numPointShadows=_,L.numSpotShadows=x,L.numSpotMaps=C,L.numLightProbes=E,i.version=zb++)}function l(c,h){let u=0,d=0,f=0,g=0,y=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let _=c[p];if(_.isDirectionalLight){let x=i.directional[u];x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),u++}else if(_.isSpotLight){let x=i.spot[f];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(_.isRectAreaLight){let x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),a.identity(),r.copy(_.matrixWorld),r.premultiply(m),a.extractRotation(r),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),g++}else if(_.isPointLight){let x=i.point[d];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),d++}else if(_.isHemisphereLight){let x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:o,setupView:l,state:i}}function Dp(n){let e=new Vb(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function r(h){t.push(h)}function a(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Gb(n){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Dp(n),e.set(s,[o])):r>=a.length?(o=new Dp(n),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var od=class extends Ti{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Zy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ld=class extends Ti{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Wb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$b=`uniform sampler2D shadow_pass;
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
}`;function Xb(n,e,t){let i=new Ia,s=new Me,r=new Me,a=new Lt,o=new od({depthPacking:Ky}),l=new ld,c={},h=t.maxTextureSize,u={[Zi]:on,[on]:Zi,[Bt]:Bt},d=new Bn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:Wb,fragmentShader:$b}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new pn;g.setAttribute("position",new Cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new je(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wp;let p=this.type;this.render=function(T,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let te=n.getRenderTarget(),v=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),Y=n.state;Y.setBlending(qi),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let z=p!==vi&&this.type===vi,R=p===vi&&this.type!==vi;for(let N=0,U=T.length;N<U;N++){let K=T[N],V=K.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let _e=V.getFrameExtents();if(s.multiply(_e),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/_e.x),s.x=r.x*_e.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/_e.y),s.y=r.y*_e.y,V.mapSize.y=r.y)),V.map===null||z===!0||R===!0){let W=this.type!==vi?{minFilter:an,magFilter:an}:{};V.map!==null&&V.map.dispose(),V.map=new Si(s.x,s.y,W),V.map.texture.name=K.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();let ge=V.getViewportCount();for(let W=0;W<ge;W++){let re=V.getViewport(W);a.set(r.x*re.x,r.y*re.y,r.x*re.z,r.y*re.w),Y.viewport(a),V.updateMatrices(K,W),i=V.getFrustum(),x(E,L,V.camera,K,this.type)}V.isPointLightShadow!==!0&&this.type===vi&&M(V,L),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(te,v,w)};function M(T,E){let L=e.update(y);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,L,d,y,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,L,f,y,null)}function _(T,E,L,te){let v=null,w=L.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=L.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let Y=v.uuid,z=E.uuid,R=c[Y];R===void 0&&(R={},c[Y]=R);let N=R[z];N===void 0&&(N=v.clone(),R[z]=N,E.addEventListener("dispose",C)),v=N}if(v.visible=E.visible,v.wireframe=E.wireframe,te===vi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:u[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,L.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let Y=n.properties.get(v);Y.light=L}return v}function x(T,E,L,te,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===vi)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,T.matrixWorld);let z=e.update(T),R=T.material;if(Array.isArray(R)){let N=z.groups;for(let U=0,K=N.length;U<K;U++){let V=N[U],_e=R[V.materialIndex];if(_e&&_e.visible){let ge=_(T,_e,te,v);T.onBeforeShadow(n,T,E,L,z,ge,V),n.renderBufferDirect(L,null,z,ge,T,V),T.onAfterShadow(n,T,E,L,z,ge,V)}}}else if(R.visible){let N=_(T,R,te,v);T.onBeforeShadow(n,T,E,L,z,N,null),n.renderBufferDirect(L,null,z,N,T,null),T.onAfterShadow(n,T,E,L,z,N,null)}}let Y=T.children;for(let z=0,R=Y.length;z<R;z++)x(Y[z],E,L,te,v)}function C(T){T.target.removeEventListener("dispose",C);for(let L in c){let te=c[L],v=T.target.uuid;v in te&&(te[v].dispose(),delete te[v])}}}var qb={[dh]:uh,[fh]:gh,[ph]:yh,[wr]:mh,[uh]:dh,[gh]:fh,[yh]:ph,[mh]:wr};function Yb(n){function e(){let F=!1,Ie=new Lt,ee=null,fe=new Lt(0,0,0,0);return{setMask:function(ke){ee!==ke&&!F&&(n.colorMask(ke,ke,ke,ke),ee=ke)},setLocked:function(ke){F=ke},setClear:function(ke,Ue,at,Tt,Zt){Zt===!0&&(ke*=Tt,Ue*=Tt,at*=Tt),Ie.set(ke,Ue,at,Tt),fe.equals(Ie)===!1&&(n.clearColor(ke,Ue,at,Tt),fe.copy(Ie))},reset:function(){F=!1,ee=null,fe.set(-1,0,0,0)}}}function t(){let F=!1,Ie=!1,ee=null,fe=null,ke=null;return{setReversed:function(Ue){Ie=Ue},setTest:function(Ue){Ue?xe(n.DEPTH_TEST):Ee(n.DEPTH_TEST)},setMask:function(Ue){ee!==Ue&&!F&&(n.depthMask(Ue),ee=Ue)},setFunc:function(Ue){if(Ie&&(Ue=qb[Ue]),fe!==Ue){switch(Ue){case dh:n.depthFunc(n.NEVER);break;case uh:n.depthFunc(n.ALWAYS);break;case fh:n.depthFunc(n.LESS);break;case wr:n.depthFunc(n.LEQUAL);break;case ph:n.depthFunc(n.EQUAL);break;case mh:n.depthFunc(n.GEQUAL);break;case gh:n.depthFunc(n.GREATER);break;case yh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}fe=Ue}},setLocked:function(Ue){F=Ue},setClear:function(Ue){ke!==Ue&&(n.clearDepth(Ue),ke=Ue)},reset:function(){F=!1,ee=null,fe=null,ke=null}}}function i(){let F=!1,Ie=null,ee=null,fe=null,ke=null,Ue=null,at=null,Tt=null,Zt=null;return{setTest:function(ct){F||(ct?xe(n.STENCIL_TEST):Ee(n.STENCIL_TEST))},setMask:function(ct){Ie!==ct&&!F&&(n.stencilMask(ct),Ie=ct)},setFunc:function(ct,Wt,Pn){(ee!==ct||fe!==Wt||ke!==Pn)&&(n.stencilFunc(ct,Wt,Pn),ee=ct,fe=Wt,ke=Pn)},setOp:function(ct,Wt,Pn){(Ue!==ct||at!==Wt||Tt!==Pn)&&(n.stencilOp(ct,Wt,Pn),Ue=ct,at=Wt,Tt=Pn)},setLocked:function(ct){F=ct},setClear:function(ct){Zt!==ct&&(n.clearStencil(ct),Zt=ct)},reset:function(){F=!1,Ie=null,ee=null,fe=null,ke=null,Ue=null,at=null,Tt=null,Zt=null}}}let s=new e,r=new t,a=new i,o=new WeakMap,l=new WeakMap,c={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,M=null,_=null,x=null,C=null,T=new et(0,0,0),E=0,L=!1,te=null,v=null,w=null,Y=null,z=null,R=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),N=!1,U=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(K)[1]),N=U>=1):K.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),N=U>=2);let V=null,_e={},ge=n.getParameter(n.SCISSOR_BOX),W=n.getParameter(n.VIEWPORT),re=new Lt().fromArray(ge),Ne=new Lt().fromArray(W);function ie(F,Ie,ee,fe){let ke=new Uint8Array(4),Ue=n.createTexture();n.bindTexture(F,Ue),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let at=0;at<ee;at++)F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY?n.texImage3D(Ie,0,n.RGBA,1,1,fe,0,n.RGBA,n.UNSIGNED_BYTE,ke):n.texImage2D(Ie+at,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ke);return Ue}let de={};de[n.TEXTURE_2D]=ie(n.TEXTURE_2D,n.TEXTURE_2D,1),de[n.TEXTURE_CUBE_MAP]=ie(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[n.TEXTURE_2D_ARRAY]=ie(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),de[n.TEXTURE_3D]=ie(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),xe(n.DEPTH_TEST),r.setFunc(wr),pe(!1),ve(Vf),xe(n.CULL_FACE),I(qi);function xe(F){c[F]!==!0&&(n.enable(F),c[F]=!0)}function Ee(F){c[F]!==!1&&(n.disable(F),c[F]=!1)}function Xe(F,Ie){return h[F]!==Ie?(n.bindFramebuffer(F,Ie),h[F]=Ie,F===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=Ie),F===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=Ie),!0):!1}function We(F,Ie){let ee=d,fe=!1;if(F){ee=u.get(Ie),ee===void 0&&(ee=[],u.set(Ie,ee));let ke=F.textures;if(ee.length!==ke.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Ue=0,at=ke.length;Ue<at;Ue++)ee[Ue]=n.COLOR_ATTACHMENT0+Ue;ee.length=ke.length,fe=!0}}else ee[0]!==n.BACK&&(ee[0]=n.BACK,fe=!0);fe&&n.drawBuffers(ee)}function He(F){return f!==F?(n.useProgram(F),f=F,!0):!1}let Ge={[ws]:n.FUNC_ADD,[My]:n.FUNC_SUBTRACT,[wy]:n.FUNC_REVERSE_SUBTRACT};Ge[Sy]=n.MIN,Ge[Ty]=n.MAX;let ae={[Ay]:n.ZERO,[Ey]:n.ONE,[Cy]:n.SRC_COLOR,[ch]:n.SRC_ALPHA,[Dy]:n.SRC_ALPHA_SATURATE,[Ly]:n.DST_COLOR,[Py]:n.DST_ALPHA,[Ry]:n.ONE_MINUS_SRC_COLOR,[hh]:n.ONE_MINUS_SRC_ALPHA,[ky]:n.ONE_MINUS_DST_COLOR,[Iy]:n.ONE_MINUS_DST_ALPHA,[Uy]:n.CONSTANT_COLOR,[Ny]:n.ONE_MINUS_CONSTANT_COLOR,[Oy]:n.CONSTANT_ALPHA,[Fy]:n.ONE_MINUS_CONSTANT_ALPHA};function I(F,Ie,ee,fe,ke,Ue,at,Tt,Zt,ct){if(F===qi){g===!0&&(Ee(n.BLEND),g=!1);return}if(g===!1&&(xe(n.BLEND),g=!0),F!==by){if(F!==y||ct!==L){if((m!==ws||_!==ws)&&(n.blendEquation(n.FUNC_ADD),m=ws,_=ws),ct)switch(F){case vr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFunc(n.ONE,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case vr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Mr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Gf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Wf:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}p=null,M=null,x=null,C=null,T.set(0,0,0),E=0,y=F,L=ct}return}ke=ke||Ie,Ue=Ue||ee,at=at||fe,(Ie!==m||ke!==_)&&(n.blendEquationSeparate(Ge[Ie],Ge[ke]),m=Ie,_=ke),(ee!==p||fe!==M||Ue!==x||at!==C)&&(n.blendFuncSeparate(ae[ee],ae[fe],ae[Ue],ae[at]),p=ee,M=fe,x=Ue,C=at),(Tt.equals(T)===!1||Zt!==E)&&(n.blendColor(Tt.r,Tt.g,Tt.b,Zt),T.copy(Tt),E=Zt),y=F,L=!1}function ce(F,Ie){F.side===Bt?Ee(n.CULL_FACE):xe(n.CULL_FACE);let ee=F.side===on;Ie&&(ee=!ee),pe(ee),F.blending===vr&&F.transparent===!1?I(qi):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),s.setMask(F.colorWrite);let fe=F.stencilWrite;a.setTest(fe),fe&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Fe(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?xe(n.SAMPLE_ALPHA_TO_COVERAGE):Ee(n.SAMPLE_ALPHA_TO_COVERAGE)}function pe(F){te!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),te=F)}function ve(F){F!==xy?(xe(n.CULL_FACE),F!==v&&(F===Vf?n.cullFace(n.BACK):F===_y?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ee(n.CULL_FACE),v=F}function Ae(F){F!==w&&(N&&n.lineWidth(F),w=F)}function Fe(F,Ie,ee){F?(xe(n.POLYGON_OFFSET_FILL),(Y!==Ie||z!==ee)&&(n.polygonOffset(Ie,ee),Y=Ie,z=ee)):Ee(n.POLYGON_OFFSET_FILL)}function Re(F){F?xe(n.SCISSOR_TEST):Ee(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+R-1),V!==F&&(n.activeTexture(F),V=F)}function b(F,Ie,ee){ee===void 0&&(V===null?ee=n.TEXTURE0+R-1:ee=V);let fe=_e[ee];fe===void 0&&(fe={type:void 0,texture:void 0},_e[ee]=fe),(fe.type!==F||fe.texture!==Ie)&&(V!==ee&&(n.activeTexture(ee),V=ee),n.bindTexture(F,Ie||de[F]),fe.type=F,fe.texture=Ie)}function q(){let F=_e[V];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function oe(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Be(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function he(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Oe(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(F){re.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),re.copy(F))}function me(F){Ne.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ne.copy(F))}function qe(F,Ie){let ee=l.get(Ie);ee===void 0&&(ee=new WeakMap,l.set(Ie,ee));let fe=ee.get(F);fe===void 0&&(fe=n.getUniformBlockIndex(Ie,F.name),ee.set(F,fe))}function Ye(F,Ie){let fe=l.get(Ie).get(F);o.get(Ie)!==fe&&(n.uniformBlockBinding(Ie,fe,F.__bindingPointIndex),o.set(Ie,fe))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},V=null,_e={},h={},u=new WeakMap,d=[],f=null,g=!1,y=null,m=null,p=null,M=null,_=null,x=null,C=null,T=new et(0,0,0),E=0,L=!1,te=null,v=null,w=null,Y=null,z=null,re.set(0,0,n.canvas.width,n.canvas.height),Ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:xe,disable:Ee,bindFramebuffer:Xe,drawBuffers:We,useProgram:He,setBlending:I,setMaterial:ce,setFlipSided:pe,setCullFace:ve,setLineWidth:Ae,setPolygonOffset:Fe,setScissorTest:Re,activeTexture:P,bindTexture:b,unbindTexture:q,compressedTexImage2D:J,compressedTexImage3D:le,texImage2D:he,texImage3D:Oe,updateUBOMapping:qe,uniformBlockBinding:Ye,texStorage2D:we,texStorage3D:ne,texSubImage2D:oe,texSubImage3D:Be,compressedTexSubImage2D:Pe,compressedTexSubImage3D:De,scissor:Se,viewport:me,reset:ht}}function Up(n,e,t,i){let s=Zb(i);switch(t){case Kp:return n*e;case jp:return n*e;case Qp:return n*e*2;case Pl:return n*e/s.components*s.byteLength;case Ud:return n*e/s.components*s.byteLength;case em:return n*e*2/s.components*s.byteLength;case Nd:return n*e*2/s.components*s.byteLength;case Jp:return n*e*3/s.components*s.byteLength;case Zn:return n*e*4/s.components*s.byteLength;case Od:return n*e*4/s.components*s.byteLength;case Wo:case $o:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Xo:case qo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Mh:case Sh:return Math.max(n,16)*Math.max(e,8)/4;case bh:case wh:return Math.max(n,8)*Math.max(e,8)/2;case Th:case Ah:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Eh:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Ch:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Rh:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Ph:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Lh:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Dh:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case Uh:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Nh:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case Fh:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case zh:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Hh:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Vh:case Gh:return Math.ceil(n/4)*Math.ceil(e/4)*16;case tm:case Wh:return Math.ceil(n/4)*Math.ceil(e/4)*8;case $h:case Xh:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Zb(n){switch(n){case wi:case qp:return{byteLength:1,components:1};case Ra:case Yp:case Ba:return{byteLength:2,components:1};case kd:case Dd:return{byteLength:2,components:4};case Es:case Ld:case _i:return{byteLength:4,components:1};case Zp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Kb(n,e,t,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(P,b){return f?new OffscreenCanvas(P,b):nl("canvas")}function y(P,b,q){let J=1,le=Re(P);if((le.width>q||le.height>q)&&(J=q/Math.max(le.width,le.height)),J<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let oe=Math.floor(J*le.width),Be=Math.floor(J*le.height);u===void 0&&(u=g(oe,Be));let Pe=b?g(oe,Be):u;return Pe.width=oe,Pe.height=Be,Pe.getContext("2d").drawImage(P,0,0,oe,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+le.width+"x"+le.height+") to ("+oe+"x"+Be+")."),Pe}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+le.width+"x"+le.height+")."),P;return P}function m(P){return P.generateMipmaps&&P.minFilter!==an&&P.minFilter!==Yn}function p(P){n.generateMipmap(P)}function M(P,b,q,J,le=!1){if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let oe=b;if(b===n.RED&&(q===n.FLOAT&&(oe=n.R32F),q===n.HALF_FLOAT&&(oe=n.R16F),q===n.UNSIGNED_BYTE&&(oe=n.R8)),b===n.RED_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.R8UI),q===n.UNSIGNED_SHORT&&(oe=n.R16UI),q===n.UNSIGNED_INT&&(oe=n.R32UI),q===n.BYTE&&(oe=n.R8I),q===n.SHORT&&(oe=n.R16I),q===n.INT&&(oe=n.R32I)),b===n.RG&&(q===n.FLOAT&&(oe=n.RG32F),q===n.HALF_FLOAT&&(oe=n.RG16F),q===n.UNSIGNED_BYTE&&(oe=n.RG8)),b===n.RG_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.RG8UI),q===n.UNSIGNED_SHORT&&(oe=n.RG16UI),q===n.UNSIGNED_INT&&(oe=n.RG32UI),q===n.BYTE&&(oe=n.RG8I),q===n.SHORT&&(oe=n.RG16I),q===n.INT&&(oe=n.RG32I)),b===n.RGB_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.RGB8UI),q===n.UNSIGNED_SHORT&&(oe=n.RGB16UI),q===n.UNSIGNED_INT&&(oe=n.RGB32UI),q===n.BYTE&&(oe=n.RGB8I),q===n.SHORT&&(oe=n.RGB16I),q===n.INT&&(oe=n.RGB32I)),b===n.RGBA_INTEGER&&(q===n.UNSIGNED_BYTE&&(oe=n.RGBA8UI),q===n.UNSIGNED_SHORT&&(oe=n.RGBA16UI),q===n.UNSIGNED_INT&&(oe=n.RGBA32UI),q===n.BYTE&&(oe=n.RGBA8I),q===n.SHORT&&(oe=n.RGBA16I),q===n.INT&&(oe=n.RGBA32I)),b===n.RGB&&q===n.UNSIGNED_INT_5_9_9_9_REV&&(oe=n.RGB9_E5),b===n.RGBA){let Be=le?Jo:ft.getTransfer(J);q===n.FLOAT&&(oe=n.RGBA32F),q===n.HALF_FLOAT&&(oe=n.RGBA16F),q===n.UNSIGNED_BYTE&&(oe=Be===_t?n.SRGB8_ALPHA8:n.RGBA8),q===n.UNSIGNED_SHORT_4_4_4_4&&(oe=n.RGBA4),q===n.UNSIGNED_SHORT_5_5_5_1&&(oe=n.RGB5_A1)}return(oe===n.R16F||oe===n.R32F||oe===n.RG16F||oe===n.RG32F||oe===n.RGBA16F||oe===n.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(P,b){let q;return P?b===null||b===Es||b===Ar?q=n.DEPTH24_STENCIL8:b===_i?q=n.DEPTH32F_STENCIL8:b===Ra&&(q=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Es||b===Ar?q=n.DEPTH_COMPONENT24:b===_i?q=n.DEPTH_COMPONENT32F:b===Ra&&(q=n.DEPTH_COMPONENT16),q}function x(P,b){return m(P)===!0||P.isFramebufferTexture&&P.minFilter!==an&&P.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function C(P){let b=P.target;b.removeEventListener("dispose",C),E(b),b.isVideoTexture&&h.delete(b)}function T(P){let b=P.target;b.removeEventListener("dispose",T),te(b)}function E(P){let b=i.get(P);if(b.__webglInit===void 0)return;let q=P.source,J=d.get(q);if(J){let le=J[b.__cacheKey];le.usedTimes--,le.usedTimes===0&&L(P),Object.keys(J).length===0&&d.delete(q)}i.remove(P)}function L(P){let b=i.get(P);n.deleteTexture(b.__webglTexture);let q=P.source,J=d.get(q);delete J[b.__cacheKey],a.memory.textures--}function te(P){let b=i.get(P);if(P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let le=0;le<b.__webglFramebuffer[J].length;le++)n.deleteFramebuffer(b.__webglFramebuffer[J][le]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let q=P.textures;for(let J=0,le=q.length;J<le;J++){let oe=i.get(q[J]);oe.__webglTexture&&(n.deleteTexture(oe.__webglTexture),a.memory.textures--),i.remove(q[J])}i.remove(P)}let v=0;function w(){v=0}function Y(){let P=v;return P>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+s.maxTextures),v+=1,P}function z(P){let b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function R(P,b){let q=i.get(P);if(P.isVideoTexture&&Ae(P),P.isRenderTargetTexture===!1&&P.version>0&&q.__version!==P.version){let J=P.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(q,P,b);return}}t.bindTexture(n.TEXTURE_2D,q.__webglTexture,n.TEXTURE0+b)}function N(P,b){let q=i.get(P);if(P.version>0&&q.__version!==P.version){Ne(q,P,b);return}t.bindTexture(n.TEXTURE_2D_ARRAY,q.__webglTexture,n.TEXTURE0+b)}function U(P,b){let q=i.get(P);if(P.version>0&&q.__version!==P.version){Ne(q,P,b);return}t.bindTexture(n.TEXTURE_3D,q.__webglTexture,n.TEXTURE0+b)}function K(P,b){let q=i.get(P);if(P.version>0&&q.__version!==P.version){ie(q,P,b);return}t.bindTexture(n.TEXTURE_CUBE_MAP,q.__webglTexture,n.TEXTURE0+b)}let V={[Ca]:n.REPEAT,[Ts]:n.CLAMP_TO_EDGE,[_h]:n.MIRRORED_REPEAT},_e={[an]:n.NEAREST,[Yy]:n.NEAREST_MIPMAP_NEAREST,[go]:n.NEAREST_MIPMAP_LINEAR,[Yn]:n.LINEAR,[Ec]:n.LINEAR_MIPMAP_NEAREST,[As]:n.LINEAR_MIPMAP_LINEAR},ge={[jy]:n.NEVER,[sv]:n.ALWAYS,[Qy]:n.LESS,[nm]:n.LEQUAL,[ev]:n.EQUAL,[iv]:n.GEQUAL,[tv]:n.GREATER,[nv]:n.NOTEQUAL};function W(P,b){if(b.type===_i&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===Ec||b.magFilter===go||b.magFilter===As||b.minFilter===Yn||b.minFilter===Ec||b.minFilter===go||b.minFilter===As)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(P,n.TEXTURE_WRAP_S,V[b.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,V[b.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,V[b.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,_e[b.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,_e[b.minFilter]),b.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===an||b.minFilter!==go&&b.minFilter!==As||b.type===_i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){let q=e.get("EXT_texture_filter_anisotropic");n.texParameterf(P,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function re(P,b){let q=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",C));let J=b.source,le=d.get(J);le===void 0&&(le={},d.set(J,le));let oe=z(b);if(oe!==P.__cacheKey){le[oe]===void 0&&(le[oe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,q=!0),le[oe].usedTimes++;let Be=le[P.__cacheKey];Be!==void 0&&(le[P.__cacheKey].usedTimes--,Be.usedTimes===0&&L(b)),P.__cacheKey=oe,P.__webglTexture=le[oe].texture}return q}function Ne(P,b,q){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);let le=re(P,b),oe=b.source;t.bindTexture(J,P.__webglTexture,n.TEXTURE0+q);let Be=i.get(oe);if(oe.version!==Be.__version||le===!0){t.activeTexture(n.TEXTURE0+q);let Pe=ft.getPrimaries(ft.workingColorSpace),De=b.colorSpace===$i?null:ft.getPrimaries(b.colorSpace),we=b.colorSpace===$i||Pe===De?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let ne=y(b.image,!1,s.maxTextureSize);ne=Fe(b,ne);let he=r.convert(b.format,b.colorSpace),Oe=r.convert(b.type),Se=M(b.internalFormat,he,Oe,b.colorSpace,b.isVideoTexture);W(J,b);let me,qe=b.mipmaps,Ye=b.isVideoTexture!==!0,ht=Be.__version===void 0||le===!0,F=oe.dataReady,Ie=x(b,ne);if(b.isDepthTexture)Se=_(b.format===Er,b.type),ht&&(Ye?t.texStorage2D(n.TEXTURE_2D,1,Se,ne.width,ne.height):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,he,Oe,null));else if(b.isDataTexture)if(qe.length>0){Ye&&ht&&t.texStorage2D(n.TEXTURE_2D,Ie,Se,qe[0].width,qe[0].height);for(let ee=0,fe=qe.length;ee<fe;ee++)me=qe[ee],Ye?F&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,me.width,me.height,he,Oe,me.data):t.texImage2D(n.TEXTURE_2D,ee,Se,me.width,me.height,0,he,Oe,me.data);b.generateMipmaps=!1}else Ye?(ht&&t.texStorage2D(n.TEXTURE_2D,Ie,Se,ne.width,ne.height),F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ne.width,ne.height,he,Oe,ne.data)):t.texImage2D(n.TEXTURE_2D,0,Se,ne.width,ne.height,0,he,Oe,ne.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ye&&ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Se,qe[0].width,qe[0].height,ne.depth);for(let ee=0,fe=qe.length;ee<fe;ee++)if(me=qe[ee],b.format!==Zn)if(he!==null)if(Ye){if(F)if(b.layerUpdates.size>0){let ke=Up(me.width,me.height,b.format,b.type);for(let Ue of b.layerUpdates){let at=me.data.subarray(Ue*ke/me.data.BYTES_PER_ELEMENT,(Ue+1)*ke/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,Ue,me.width,me.height,1,he,at,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ne.depth,he,me.data,0,0)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ee,Se,me.width,me.height,ne.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ye?F&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ne.depth,he,Oe,me.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ee,Se,me.width,me.height,ne.depth,0,he,Oe,me.data)}else{Ye&&ht&&t.texStorage2D(n.TEXTURE_2D,Ie,Se,qe[0].width,qe[0].height);for(let ee=0,fe=qe.length;ee<fe;ee++)me=qe[ee],b.format!==Zn?he!==null?Ye?F&&t.compressedTexSubImage2D(n.TEXTURE_2D,ee,0,0,me.width,me.height,he,me.data):t.compressedTexImage2D(n.TEXTURE_2D,ee,Se,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ye?F&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,me.width,me.height,he,Oe,me.data):t.texImage2D(n.TEXTURE_2D,ee,Se,me.width,me.height,0,he,Oe,me.data)}else if(b.isDataArrayTexture)if(Ye){if(ht&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ie,Se,ne.width,ne.height,ne.depth),F)if(b.layerUpdates.size>0){let ee=Up(ne.width,ne.height,b.format,b.type);for(let fe of b.layerUpdates){let ke=ne.data.subarray(fe*ee/ne.data.BYTES_PER_ELEMENT,(fe+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,fe,ne.width,ne.height,1,he,Oe,ke)}b.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,he,Oe,ne.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,ne.width,ne.height,ne.depth,0,he,Oe,ne.data);else if(b.isData3DTexture)Ye?(ht&&t.texStorage3D(n.TEXTURE_3D,Ie,Se,ne.width,ne.height,ne.depth),F&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,he,Oe,ne.data)):t.texImage3D(n.TEXTURE_3D,0,Se,ne.width,ne.height,ne.depth,0,he,Oe,ne.data);else if(b.isFramebufferTexture){if(ht)if(Ye)t.texStorage2D(n.TEXTURE_2D,Ie,Se,ne.width,ne.height);else{let ee=ne.width,fe=ne.height;for(let ke=0;ke<Ie;ke++)t.texImage2D(n.TEXTURE_2D,ke,Se,ee,fe,0,he,Oe,null),ee>>=1,fe>>=1}}else if(qe.length>0){if(Ye&&ht){let ee=Re(qe[0]);t.texStorage2D(n.TEXTURE_2D,Ie,Se,ee.width,ee.height)}for(let ee=0,fe=qe.length;ee<fe;ee++)me=qe[ee],Ye?F&&t.texSubImage2D(n.TEXTURE_2D,ee,0,0,he,Oe,me):t.texImage2D(n.TEXTURE_2D,ee,Se,he,Oe,me);b.generateMipmaps=!1}else if(Ye){if(ht){let ee=Re(ne);t.texStorage2D(n.TEXTURE_2D,Ie,Se,ee.width,ee.height)}F&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,he,Oe,ne)}else t.texImage2D(n.TEXTURE_2D,0,Se,he,Oe,ne);m(b)&&p(J),Be.__version=oe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function ie(P,b,q){if(b.image.length!==6)return;let J=re(P,b),le=b.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+q);let oe=i.get(le);if(le.version!==oe.__version||J===!0){t.activeTexture(n.TEXTURE0+q);let Be=ft.getPrimaries(ft.workingColorSpace),Pe=b.colorSpace===$i?null:ft.getPrimaries(b.colorSpace),De=b.colorSpace===$i||Be===Pe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let we=b.isCompressedTexture||b.image[0].isCompressedTexture,ne=b.image[0]&&b.image[0].isDataTexture,he=[];for(let fe=0;fe<6;fe++)!we&&!ne?he[fe]=y(b.image[fe],!0,s.maxCubemapSize):he[fe]=ne?b.image[fe].image:b.image[fe],he[fe]=Fe(b,he[fe]);let Oe=he[0],Se=r.convert(b.format,b.colorSpace),me=r.convert(b.type),qe=M(b.internalFormat,Se,me,b.colorSpace),Ye=b.isVideoTexture!==!0,ht=oe.__version===void 0||J===!0,F=le.dataReady,Ie=x(b,Oe);W(n.TEXTURE_CUBE_MAP,b);let ee;if(we){Ye&&ht&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,qe,Oe.width,Oe.height);for(let fe=0;fe<6;fe++){ee=he[fe].mipmaps;for(let ke=0;ke<ee.length;ke++){let Ue=ee[ke];b.format!==Zn?Se!==null?Ye?F&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,Ue.width,Ue.height,Se,Ue.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,qe,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,0,0,Ue.width,Ue.height,Se,me,Ue.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke,qe,Ue.width,Ue.height,0,Se,me,Ue.data)}}}else{if(ee=b.mipmaps,Ye&&ht){ee.length>0&&Ie++;let fe=Re(he[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,qe,fe.width,fe.height)}for(let fe=0;fe<6;fe++)if(ne){Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,he[fe].width,he[fe].height,Se,me,he[fe].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,qe,he[fe].width,he[fe].height,0,Se,me,he[fe].data);for(let ke=0;ke<ee.length;ke++){let at=ee[ke].image[fe].image;Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,at.width,at.height,Se,me,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,qe,at.width,at.height,0,Se,me,at.data)}}else{Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,0,0,Se,me,he[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,qe,Se,me,he[fe]);for(let ke=0;ke<ee.length;ke++){let Ue=ee[ke];Ye?F&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,0,0,Se,me,Ue.image[fe]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ke+1,qe,Se,me,Ue.image[fe])}}}m(b)&&p(n.TEXTURE_CUBE_MAP),oe.__version=le.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function de(P,b,q,J,le,oe){let Be=r.convert(q.format,q.colorSpace),Pe=r.convert(q.type),De=M(q.internalFormat,Be,Pe,q.colorSpace);if(!i.get(b).__hasExternalTextures){let ne=Math.max(1,b.width>>oe),he=Math.max(1,b.height>>oe);le===n.TEXTURE_3D||le===n.TEXTURE_2D_ARRAY?t.texImage3D(le,oe,De,ne,he,b.depth,0,Be,Pe,null):t.texImage2D(le,oe,De,ne,he,0,Be,Pe,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,le,i.get(q).__webglTexture,0,pe(b)):(le===n.TEXTURE_2D||le>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&le<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,le,i.get(q).__webglTexture,oe),t.bindFramebuffer(n.FRAMEBUFFER,null)}function xe(P,b,q){if(n.bindRenderbuffer(n.RENDERBUFFER,P),b.depthBuffer){let J=b.depthTexture,le=J&&J.isDepthTexture?J.type:null,oe=_(b.stencilBuffer,le),Be=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Pe=pe(b);ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pe,oe,b.width,b.height):q?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pe,oe,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,oe,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,P)}else{let J=b.textures;for(let le=0;le<J.length;le++){let oe=J[le],Be=r.convert(oe.format,oe.colorSpace),Pe=r.convert(oe.type),De=M(oe.internalFormat,Be,Pe,oe.colorSpace),we=pe(b);q&&ve(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,we,De,b.width,b.height):ve(b)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,we,De,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,De,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ee(P,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),R(b.depthTexture,0);let J=i.get(b.depthTexture).__webglTexture,le=pe(b);if(b.depthTexture.format===xr)ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(b.depthTexture.format===Er)ve(b)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,le):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Xe(P){let b=i.get(P),q=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){let J=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){let le=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",le)};J.addEventListener("dispose",le),b.__depthDisposeCallback=le}b.__boundDepthTexture=J}if(P.depthTexture&&!b.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ee(b.__webglFramebuffer,P)}else if(q){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),xe(b.__webglDepthbuffer[J],P,!1);else{let le=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,oe),n.framebufferRenderbuffer(n.FRAMEBUFFER,le,n.RENDERBUFFER,oe)}}else if(t.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),xe(b.__webglDepthbuffer,P,!1);else{let J=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,le=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,le),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,le)}t.bindFramebuffer(n.FRAMEBUFFER,null)}function We(P,b,q){let J=i.get(P);b!==void 0&&de(J.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),q!==void 0&&Xe(P)}function He(P){let b=P.texture,q=i.get(P),J=i.get(b);P.addEventListener("dispose",T);let le=P.textures,oe=P.isWebGLCubeRenderTarget===!0,Be=le.length>1;if(Be||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,a.memory.textures++),oe){q.__webglFramebuffer=[];for(let Pe=0;Pe<6;Pe++)if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer[Pe]=[];for(let De=0;De<b.mipmaps.length;De++)q.__webglFramebuffer[Pe][De]=n.createFramebuffer()}else q.__webglFramebuffer[Pe]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){q.__webglFramebuffer=[];for(let Pe=0;Pe<b.mipmaps.length;Pe++)q.__webglFramebuffer[Pe]=n.createFramebuffer()}else q.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Pe=0,De=le.length;Pe<De;Pe++){let we=i.get(le[Pe]);we.__webglTexture===void 0&&(we.__webglTexture=n.createTexture(),a.memory.textures++)}if(P.samples>0&&ve(P)===!1){q.__webglMultisampledFramebuffer=n.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Pe=0;Pe<le.length;Pe++){let De=le[Pe];q.__webglColorRenderbuffer[Pe]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,q.__webglColorRenderbuffer[Pe]);let we=r.convert(De.format,De.colorSpace),ne=r.convert(De.type),he=M(De.internalFormat,we,ne,De.colorSpace,P.isXRRenderTarget===!0),Oe=pe(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,Oe,he,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pe,n.RENDERBUFFER,q.__webglColorRenderbuffer[Pe])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(q.__webglDepthRenderbuffer=n.createRenderbuffer(),xe(q.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),W(n.TEXTURE_CUBE_MAP,b);for(let Pe=0;Pe<6;Pe++)if(b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)de(q.__webglFramebuffer[Pe][De],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,De);else de(q.__webglFramebuffer[Pe],P,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0);m(b)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Pe=0,De=le.length;Pe<De;Pe++){let we=le[Pe],ne=i.get(we);t.bindTexture(n.TEXTURE_2D,ne.__webglTexture),W(n.TEXTURE_2D,we),de(q.__webglFramebuffer,P,we,n.COLOR_ATTACHMENT0+Pe,n.TEXTURE_2D,0),m(we)&&p(n.TEXTURE_2D)}t.unbindTexture()}else{let Pe=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Pe=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Pe,J.__webglTexture),W(Pe,b),b.mipmaps&&b.mipmaps.length>0)for(let De=0;De<b.mipmaps.length;De++)de(q.__webglFramebuffer[De],P,b,n.COLOR_ATTACHMENT0,Pe,De);else de(q.__webglFramebuffer,P,b,n.COLOR_ATTACHMENT0,Pe,0);m(b)&&p(Pe),t.unbindTexture()}P.depthBuffer&&Xe(P)}function Ge(P){let b=P.textures;for(let q=0,J=b.length;q<J;q++){let le=b[q];if(m(le)){let oe=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Be=i.get(le).__webglTexture;t.bindTexture(oe,Be),p(oe),t.unbindTexture()}}}let ae=[],I=[];function ce(P){if(P.samples>0){if(ve(P)===!1){let b=P.textures,q=P.width,J=P.height,le=n.COLOR_BUFFER_BIT,oe=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(P),Pe=b.length>1;if(Pe)for(let De=0;De<b.length;De++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let De=0;De<b.length;De++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(le|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(le|=n.STENCIL_BUFFER_BIT)),Pe){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[De]);let we=i.get(b[De]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,we,0)}n.blitFramebuffer(0,0,q,J,0,0,q,J,le,n.NEAREST),l===!0&&(ae.length=0,I.length=0,ae.push(n.COLOR_ATTACHMENT0+De),P.depthBuffer&&P.resolveDepthBuffer===!1&&(ae.push(oe),I.push(oe),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,I)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ae))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Pe)for(let De=0;De<b.length;De++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.RENDERBUFFER,Be.__webglColorRenderbuffer[De]);let we=i.get(b[De]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+De,n.TEXTURE_2D,we,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let b=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function pe(P){return Math.min(s.maxSamples,P.samples)}function ve(P){let b=i.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ae(P){let b=a.render.frame;h.get(P)!==b&&(h.set(P,b),P.update())}function Fe(P,b){let q=P.colorSpace,J=P.format,le=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||q!==es&&q!==$i&&(ft.getTransfer(q)===_t?(J!==Zn||le!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),b}function Re(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=w,this.setTexture2D=R,this.setTexture2DArray=N,this.setTexture3D=U,this.setTextureCube=K,this.rebindTextures=We,this.setupRenderTarget=He,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=de,this.useMultisampledRTT=ve}function Jb(n,e){function t(i,s=$i){let r,a=ft.getTransfer(s);if(i===wi)return n.UNSIGNED_BYTE;if(i===kd)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Dd)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zp)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===qp)return n.BYTE;if(i===Yp)return n.SHORT;if(i===Ra)return n.UNSIGNED_SHORT;if(i===Ld)return n.INT;if(i===Es)return n.UNSIGNED_INT;if(i===_i)return n.FLOAT;if(i===Ba)return n.HALF_FLOAT;if(i===Kp)return n.ALPHA;if(i===Jp)return n.RGB;if(i===Zn)return n.RGBA;if(i===jp)return n.LUMINANCE;if(i===Qp)return n.LUMINANCE_ALPHA;if(i===xr)return n.DEPTH_COMPONENT;if(i===Er)return n.DEPTH_STENCIL;if(i===Pl)return n.RED;if(i===Ud)return n.RED_INTEGER;if(i===em)return n.RG;if(i===Nd)return n.RG_INTEGER;if(i===Od)return n.RGBA_INTEGER;if(i===Wo||i===$o||i===Xo||i===qo)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Wo)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Wo)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$o)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xo)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===bh||i===Mh||i===wh||i===Sh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===bh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===wh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Sh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Th||i===Ah||i===Eh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Th||i===Ah)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Eh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ch||i===Rh||i===Ph||i===Ih||i===Lh||i===kh||i===Dh||i===Uh||i===Nh||i===Oh||i===Fh||i===Bh||i===zh||i===Hh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Ch)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Rh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ph)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ih)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Lh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Uh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Nh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Oh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Bh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===zh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Hh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yo||i===Vh||i===Gh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Yo)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Vh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Gh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===tm||i===Wh||i===$h||i===Xh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Yo)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Wh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$h)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Xh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ar?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}var cd=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Qe=class extends Ut{constructor(){super(),this.isGroup=!0,this.type="Group"}},jb={type:"move"},Sa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let m=t.getJointPose(y,i),p=this._getHandJoint(c,y);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(jb)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Qe;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eM=`
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

}`,hd=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){let s=new _n,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Bn({vertexShader:Qb,fragmentShader:eM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new je(new Ai(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dd=class extends Ki{constructor(e,t){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null,y=new hd,m=t.getContextAttributes(),p=null,M=null,_=[],x=[],C=new Me,T=null,E=new rn;E.layers.enable(1),E.viewport=new Lt;let L=new rn;L.layers.enable(2),L.viewport=new Lt;let te=[E,L],v=new cd;v.layers.enable(1),v.layers.enable(2);let w=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let de=_[ie];return de===void 0&&(de=new Sa,_[ie]=de),de.getTargetRaySpace()},this.getControllerGrip=function(ie){let de=_[ie];return de===void 0&&(de=new Sa,_[ie]=de),de.getGripSpace()},this.getHand=function(ie){let de=_[ie];return de===void 0&&(de=new Sa,_[ie]=de),de.getHandSpace()};function z(ie){let de=x.indexOf(ie.inputSource);if(de===-1)return;let xe=_[de];xe!==void 0&&(xe.update(ie.inputSource,ie.frame,c||a),xe.dispatchEvent({type:ie.type,data:ie.inputSource}))}function R(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",R),s.removeEventListener("inputsourceschange",N);for(let ie=0;ie<_.length;ie++){let de=x[ie];de!==null&&(x[ie]=null,_[ie].disconnect(de))}w=null,Y=null,y.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,M=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(C.width,C.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){r=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){o=ie,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ie){if(s=ie,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",R),s.addEventListener("inputsourceschange",N),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let de={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,de),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Si(f.framebufferWidth,f.framebufferHeight,{format:Zn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let de=null,xe=null,Ee=null;m.depth&&(Ee=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=m.stencil?Er:xr,xe=m.stencil?Ar:Es);let Xe={colorFormat:t.RGBA8,depthFormat:Ee,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(Xe),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Si(d.textureWidth,d.textureHeight,{format:Zn,type:wi,depthTexture:new ul(d.textureWidth,d.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ne.setContext(s),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function N(ie){for(let de=0;de<ie.removed.length;de++){let xe=ie.removed[de],Ee=x.indexOf(xe);Ee>=0&&(x[Ee]=null,_[Ee].disconnect(xe))}for(let de=0;de<ie.added.length;de++){let xe=ie.added[de],Ee=x.indexOf(xe);if(Ee===-1){for(let We=0;We<_.length;We++)if(We>=x.length){x.push(xe),Ee=We;break}else if(x[We]===null){x[We]=xe,Ee=We;break}if(Ee===-1)break}let Xe=_[Ee];Xe&&Xe.connect(xe)}}let U=new H,K=new H;function V(ie,de,xe){U.setFromMatrixPosition(de.matrixWorld),K.setFromMatrixPosition(xe.matrixWorld);let Ee=U.distanceTo(K),Xe=de.projectionMatrix.elements,We=xe.projectionMatrix.elements,He=Xe[14]/(Xe[10]-1),Ge=Xe[14]/(Xe[10]+1),ae=(Xe[9]+1)/Xe[5],I=(Xe[9]-1)/Xe[5],ce=(Xe[8]-1)/Xe[0],pe=(We[8]+1)/We[0],ve=He*ce,Ae=He*pe,Fe=Ee/(-ce+pe),Re=Fe*-ce;if(de.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Re),ie.translateZ(Fe),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Xe[10]===-1)ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{let P=He+Fe,b=Ge+Fe,q=ve-Re,J=Ae+(Ee-Re),le=ae*Ge/b*P,oe=I*Ge/b*P;ie.projectionMatrix.makePerspective(q,J,le,oe,P,b),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function _e(ie,de){de===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(de.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(s===null)return;let de=ie.near,xe=ie.far;y.texture!==null&&(y.depthNear>0&&(de=y.depthNear),y.depthFar>0&&(xe=y.depthFar)),v.near=L.near=E.near=de,v.far=L.far=E.far=xe,(w!==v.near||Y!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,Y=v.far);let Ee=ie.parent,Xe=v.cameras;_e(v,Ee);for(let We=0;We<Xe.length;We++)_e(Xe[We],Ee);Xe.length===2?V(v,E,L):v.projectionMatrix.copy(E.projectionMatrix),ge(ie,v,Ee)};function ge(ie,de,xe){xe===null?ie.matrix.copy(de.matrixWorld):(ie.matrix.copy(xe.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(de.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(de.projectionMatrix),ie.projectionMatrixInverse.copy(de.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=tl*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(ie){l=ie,d!==null&&(d.fixedFoveation=ie),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=ie)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(v)};let W=null;function re(ie,de){if(h=de.getViewerPose(c||a),g=de,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(M,f.framebuffer),e.setRenderTarget(M));let Ee=!1;xe.length!==v.cameras.length&&(v.cameras.length=0,Ee=!0);for(let We=0;We<xe.length;We++){let He=xe[We],Ge=null;if(f!==null)Ge=f.getViewport(He);else{let I=u.getViewSubImage(d,He);Ge=I.viewport,We===0&&(e.setRenderTargetTextures(M,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(M))}let ae=te[We];ae===void 0&&(ae=new rn,ae.layers.enable(We),ae.viewport=new Lt,te[We]=ae),ae.matrix.fromArray(He.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(He.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ge.x,Ge.y,Ge.width,Ge.height),We===0&&(v.matrix.copy(ae.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Ee===!0&&v.cameras.push(ae)}let Xe=s.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){let We=u.getDepthInformation(xe[0]);We&&We.isValid&&We.texture&&y.init(e,We,s.renderState)}}for(let xe=0;xe<_.length;xe++){let Ee=x[xe],Xe=_[xe];Ee!==null&&Xe!==void 0&&Xe.update(Ee,de,c||a)}W&&W(ie,de),de.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:de}),g=null}let Ne=new am;Ne.setAnimationLoop(re),this.setAnimationLoop=function(ie){W=ie},this.dispose=function(){}}},bs=new ri,tM=new Pt;function nM(n,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,rm(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,_,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),y(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===on&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===on&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),_=M.envMap,x=M.envMapRotation;_&&(m.envMap.value=_,bs.copy(x),bs.x*=-1,bs.y*=-1,bs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),m.envMapRotation.value.setFromMatrix4(tM.makeRotationFromEuler(bs)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===on&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function y(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function iM(n,e,t,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,_){let x=_.program;i.uniformBlockBinding(M,x)}function c(M,_){let x=s[M.id];x===void 0&&(g(M),x=h(M),s[M.id]=x,M.addEventListener("dispose",m));let C=_.program;i.updateUBOMapping(M,C);let T=e.render.frame;r[M.id]!==T&&(d(M),r[M.id]=T)}function h(M){let _=u();M.__bindingPointIndex=_;let x=n.createBuffer(),C=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,C,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,x),x}function u(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let _=s[M.id],x=M.uniforms,C=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,E=x.length;T<E;T++){let L=Array.isArray(x[T])?x[T]:[x[T]];for(let te=0,v=L.length;te<v;te++){let w=L[te];if(f(w,T,te,C)===!0){let Y=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],R=0;for(let N=0;N<z.length;N++){let U=z[N],K=y(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,n.bufferSubData(n.UNIFORM_BUFFER,Y+R,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,R),R+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Y,w.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(M,_,x,C){let T=M.value,E=_+"_"+x;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{let L=C[E];if(typeof T=="number"||typeof T=="boolean"){if(L!==T)return C[E]=T,!0}else if(L.equals(T)===!1)return L.copy(T),!0}return!1}function g(M){let _=M.uniforms,x=0,C=16;for(let E=0,L=_.length;E<L;E++){let te=Array.isArray(_[E])?_[E]:[_[E]];for(let v=0,w=te.length;v<w;v++){let Y=te[v],z=Array.isArray(Y.value)?Y.value:[Y.value];for(let R=0,N=z.length;R<N;R++){let U=z[R],K=y(U),V=x%C,_e=V%K.boundary,ge=V+_e;x+=_e,ge!==0&&C-ge<K.storage&&(x+=C-ge),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=x,x+=K.storage}}}let T=x%C;return T>0&&(x+=C-T),M.__size=x,M.__cache={},this}function y(M){let _={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){let _=M.target;_.removeEventListener("dispose",m);let x=a.indexOf(_.__bindingPointIndex);a.splice(x,1),n.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(let M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var fl=class{constructor(e={}){let{canvas:t=av(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;let f=new Uint32Array(4),g=new Int32Array(4),y=null,m=null,p=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Xt,this.toneMapping=Yi,this.toneMappingExposure=1;let _=this,x=!1,C=0,T=0,E=null,L=-1,te=null,v=new Lt,w=new Lt,Y=null,z=new et(0),R=0,N=t.width,U=t.height,K=1,V=null,_e=null,ge=new Lt(0,0,N,U),W=new Lt(0,0,N,U),re=!1,Ne=new Ia,ie=!1,de=!1,xe=new Pt,Ee=new Pt,Xe=new H,We=new Lt,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ge=!1;function ae(){return E===null?K:1}let I=i;function ce(A,$){return t.getContext(A,$)}try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",fe,!1),t.addEventListener("webglcontextrestored",ke,!1),t.addEventListener("webglcontextcreationerror",Ue,!1),I===null){let $="webgl2";if(I=ce($,A),I===null)throw ce($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let pe,ve,Ae,Fe,Re,P,b,q,J,le,oe,Be,Pe,De,we,ne,he,Oe,Se,me,qe,Ye,ht,F;function Ie(){pe=new x1(I),pe.init(),Ye=new Jb(I,pe),ve=new f1(I,pe,e,Ye),Ae=new Yb(I),ve.reverseDepthBuffer&&Ae.buffers.depth.setReversed(!0),Fe=new M1(I),Re=new Ub,P=new Kb(I,pe,Ae,Re,ve,Ye,Fe),b=new m1(_),q=new v1(_),J=new Rv(I),ht=new d1(I,J),le=new _1(I,J,Fe,ht),oe=new S1(I,le,J,Fe),Se=new w1(I,ve,P),ne=new p1(Re),Be=new Db(_,b,q,pe,ve,ht,ne),Pe=new nM(_,Re),De=new Ob,we=new Gb(pe),Oe=new h1(_,b,q,Ae,oe,d,l),he=new Xb(_,oe,ve),F=new iM(I,Fe,ve,Ae),me=new u1(I,pe,Fe),qe=new b1(I,pe,Fe),Fe.programs=Be.programs,_.capabilities=ve,_.extensions=pe,_.properties=Re,_.renderLists=De,_.shadowMap=he,_.state=Ae,_.info=Fe}Ie();let ee=new dd(_,I);this.xr=ee,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let A=pe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=pe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(N,U,!1))},this.getSize=function(A){return A.set(N,U)},this.setSize=function(A,$,j=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=A,U=$,t.width=Math.floor(A*K),t.height=Math.floor($*K),j===!0&&(t.style.width=A+"px",t.style.height=$+"px"),this.setViewport(0,0,A,$)},this.getDrawingBufferSize=function(A){return A.set(N*K,U*K).floor()},this.setDrawingBufferSize=function(A,$,j){N=A,U=$,K=j,t.width=Math.floor(A*j),t.height=Math.floor($*j),this.setViewport(0,0,A,$)},this.getCurrentViewport=function(A){return A.copy(v)},this.getViewport=function(A){return A.copy(ge)},this.setViewport=function(A,$,j,Q){A.isVector4?ge.set(A.x,A.y,A.z,A.w):ge.set(A,$,j,Q),Ae.viewport(v.copy(ge).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(W)},this.setScissor=function(A,$,j,Q){A.isVector4?W.set(A.x,A.y,A.z,A.w):W.set(A,$,j,Q),Ae.scissor(w.copy(W).multiplyScalar(K).round())},this.getScissorTest=function(){return re},this.setScissorTest=function(A){Ae.setScissorTest(re=A)},this.setOpaqueSort=function(A){V=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor.apply(Oe,arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha.apply(Oe,arguments)},this.clear=function(A=!0,$=!0,j=!0){let Q=0;if(A){let S=!1;if(E!==null){let k=E.texture.format;S=k===Od||k===Nd||k===Ud}if(S){let k=E.texture.type,X=k===wi||k===Es||k===Ra||k===Ar||k===kd||k===Dd,O=Oe.getClearColor(),B=Oe.getClearAlpha(),D=O.r,se=O.g,Z=O.b;X?(f[0]=D,f[1]=se,f[2]=Z,f[3]=B,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=D,g[1]=se,g[2]=Z,g[3]=B,I.clearBufferiv(I.COLOR,0,g))}else Q|=I.COLOR_BUFFER_BIT}$&&(Q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),j&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",fe,!1),t.removeEventListener("webglcontextrestored",ke,!1),t.removeEventListener("webglcontextcreationerror",Ue,!1),De.dispose(),we.dispose(),Re.dispose(),b.dispose(),q.dispose(),oe.dispose(),ht.dispose(),F.dispose(),Be.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",hi),ee.removeEventListener("sessionend",Nr),mn.stop()};function fe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function ke(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;let A=Fe.autoReset,$=he.enabled,j=he.autoUpdate,Q=he.needsUpdate,S=he.type;Ie(),Fe.autoReset=A,he.enabled=$,he.autoUpdate=j,he.needsUpdate=Q,he.type=S}function Ue(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function at(A){let $=A.target;$.removeEventListener("dispose",at),Tt($)}function Tt(A){Zt(A),Re.remove(A)}function Zt(A){let $=Re.get(A).programs;$!==void 0&&($.forEach(function(j){Be.releaseProgram(j)}),A.isShaderMaterial&&Be.releaseShaderCache(A))}this.renderBufferDirect=function(A,$,j,Q,S,k){$===null&&($=He);let X=S.isMesh&&S.matrixWorld.determinant()<0,O=Xa(A,$,j,Q,S);Ae.setMaterial(Q,X);let B=j.index,D=1;if(Q.wireframe===!0){if(B=le.getWireframeAttribute(j),B===void 0)return;D=2}let se=j.drawRange,Z=j.attributes.position,be=se.start*D,$e=(se.start+se.count)*D;k!==null&&(be=Math.max(be,k.start*D),$e=Math.min($e,(k.start+k.count)*D)),B!==null?(be=Math.max(be,0),$e=Math.min($e,B.count)):Z!=null&&(be=Math.max(be,0),$e=Math.min($e,Z.count));let it=$e-be;if(it<0||it===1/0)return;ht.setup(S,Q,O,j,B);let Kt,st=me;if(B!==null&&(Kt=J.get(B),st=qe,st.setIndex(Kt)),S.isMesh)Q.wireframe===!0?(Ae.setLineWidth(Q.wireframeLinewidth*ae()),st.setMode(I.LINES)):st.setMode(I.TRIANGLES);else if(S.isLine){let ze=Q.linewidth;ze===void 0&&(ze=1),Ae.setLineWidth(ze*ae()),S.isLineSegments?st.setMode(I.LINES):S.isLineLoop?st.setMode(I.LINE_LOOP):st.setMode(I.LINE_STRIP)}else S.isPoints?st.setMode(I.POINTS):S.isSprite&&st.setMode(I.TRIANGLES);if(S.isBatchedMesh)if(S._multiDrawInstances!==null)st.renderMultiDrawInstances(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount,S._multiDrawInstances);else if(pe.get("WEBGL_multi_draw"))st.renderMultiDraw(S._multiDrawStarts,S._multiDrawCounts,S._multiDrawCount);else{let ze=S._multiDrawStarts,bt=S._multiDrawCounts,rt=S._multiDrawCount,gn=B?J.get(B).bytesPerElement:1,Hn=Re.get(Q).currentProgram.getUniforms();for(let Jt=0;Jt<rt;Jt++)Hn.setValue(I,"_gl_DrawID",Jt),st.render(ze[Jt]/gn,bt[Jt])}else if(S.isInstancedMesh)st.renderInstances(be,it,S.count);else if(j.isInstancedBufferGeometry){let ze=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,bt=Math.min(j.instanceCount,ze);st.renderInstances(be,it,bt)}else st.render(be,it)};function ct(A,$,j){A.transparent===!0&&A.side===Bt&&A.forceSinglePass===!1?(A.side=on,A.needsUpdate=!0,is(A,$,j),A.side=Zi,A.needsUpdate=!0,is(A,$,j),A.side=Bt):is(A,$,j)}this.compile=function(A,$,j=null){j===null&&(j=A),m=we.get(j),m.init($),M.push(m),j.traverseVisible(function(S){S.isLight&&S.layers.test($.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),A!==j&&A.traverseVisible(function(S){S.isLight&&S.layers.test($.layers)&&(m.pushLight(S),S.castShadow&&m.pushShadow(S))}),m.setupLights();let Q=new Set;return A.traverse(function(S){if(!(S.isMesh||S.isPoints||S.isLine||S.isSprite))return;let k=S.material;if(k)if(Array.isArray(k))for(let X=0;X<k.length;X++){let O=k[X];ct(O,j,S),Q.add(O)}else ct(k,j,S),Q.add(k)}),M.pop(),m=null,Q},this.compileAsync=function(A,$,j=null){let Q=this.compile(A,$,j);return new Promise(S=>{function k(){if(Q.forEach(function(X){Re.get(X).currentProgram.isReady()&&Q.delete(X)}),Q.size===0){S(A);return}setTimeout(k,10)}pe.get("KHR_parallel_shader_compile")!==null?k():setTimeout(k,10)})};let Wt=null;function Pn(A){Wt&&Wt(A)}function hi(){mn.stop()}function Nr(){mn.start()}let mn=new am;mn.setAnimationLoop(Pn),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(A){Wt=A,ee.setAnimationLoop(A),A===null?mn.stop():mn.start()},ee.addEventListener("sessionstart",hi),ee.addEventListener("sessionend",Nr),this.render=function(A,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera($),$=ee.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,$,E),m=we.get(A,M.length),m.init($),M.push(m),Ee.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Ne.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,ie=ne.init(this.clippingPlanes,de),y=De.get(A,p.length),y.init(),p.push(y),ee.enabled===!0&&ee.isPresenting===!0){let k=_.xr.getDepthSensingMesh();k!==null&&jn(k,$,-1/0,_.sortObjects)}jn(A,$,0,_.sortObjects),y.finish(),_.sortObjects===!0&&y.sort(V,_e),Ge=ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1,Ge&&Oe.addToRenderList(y,A),this.info.render.frame++,ie===!0&&ne.beginShadows();let j=m.state.shadowsArray;he.render(j,A,$),ie===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();let Q=y.opaque,S=y.transmissive;if(m.setupLights(),$.isArrayCamera){let k=$.cameras;if(S.length>0)for(let X=0,O=k.length;X<O;X++){let B=k[X];Os(Q,S,A,B)}Ge&&Oe.render(A);for(let X=0,O=k.length;X<O;X++){let B=k[X];Or(y,A,B,B.viewport)}}else S.length>0&&Os(Q,S,A,$),Ge&&Oe.render(A),Or(y,A,$);E!==null&&(P.updateMultisampleRenderTarget(E),P.updateRenderTargetMipmap(E)),A.isScene===!0&&A.onAfterRender(_,A,$),ht.resetDefaultState(),L=-1,te=null,M.pop(),M.length>0?(m=M[M.length-1],ie===!0&&ne.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?y=p[p.length-1]:y=null};function jn(A,$,j,Q){if(A.visible===!1)return;if(A.layers.test($.layers)){if(A.isGroup)j=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update($);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ne.intersectsSprite(A)){Q&&We.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ee);let X=oe.update(A),O=A.material;O.visible&&y.push(A,X,O,j,We.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ne.intersectsObject(A))){let X=oe.update(A),O=A.material;if(Q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),We.copy(A.boundingSphere.center)):(X.boundingSphere===null&&X.computeBoundingSphere(),We.copy(X.boundingSphere.center)),We.applyMatrix4(A.matrixWorld).applyMatrix4(Ee)),Array.isArray(O)){let B=X.groups;for(let D=0,se=B.length;D<se;D++){let Z=B[D],be=O[Z.materialIndex];be&&be.visible&&y.push(A,X,be,j,We.z,Z)}}else O.visible&&y.push(A,X,O,j,We.z,null)}}let k=A.children;for(let X=0,O=k.length;X<O;X++)jn(k[X],$,j,Q)}function Or(A,$,j,Q){let S=A.opaque,k=A.transmissive,X=A.transparent;m.setupLightsView(j),ie===!0&&ne.setGlobalState(_.clippingPlanes,j),Q&&Ae.viewport(v.copy(Q)),S.length>0&&ns(S,$,j),k.length>0&&ns(k,$,j),X.length>0&&ns(X,$,j),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Os(A,$,j,Q){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Q.id]===void 0&&(m.state.transmissionRenderTarget[Q.id]=new Si(1,1,{generateMipmaps:!0,type:pe.has("EXT_color_buffer_half_float")||pe.has("EXT_color_buffer_float")?Ba:wi,minFilter:As,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ft.workingColorSpace}));let k=m.state.transmissionRenderTarget[Q.id],X=Q.viewport||v;k.setSize(X.z,X.w);let O=_.getRenderTarget();_.setRenderTarget(k),_.getClearColor(z),R=_.getClearAlpha(),R<1&&_.setClearColor(16777215,.5),_.clear(),Ge&&Oe.render(j);let B=_.toneMapping;_.toneMapping=Yi;let D=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),m.setupLightsView(Q),ie===!0&&ne.setGlobalState(_.clippingPlanes,Q),ns(A,j,Q),P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k),pe.has("WEBGL_multisampled_render_to_texture")===!1){let se=!1;for(let Z=0,be=$.length;Z<be;Z++){let $e=$[Z],it=$e.object,Kt=$e.geometry,st=$e.material,ze=$e.group;if(st.side===Bt&&it.layers.test(Q.layers)){let bt=st.side;st.side=on,st.needsUpdate=!0,Fr(it,j,Q,Kt,st,ze),st.side=bt,st.needsUpdate=!0,se=!0}}se===!0&&(P.updateMultisampleRenderTarget(k),P.updateRenderTargetMipmap(k))}_.setRenderTarget(O),_.setClearColor(z,R),D!==void 0&&(Q.viewport=D),_.toneMapping=B}function ns(A,$,j){let Q=$.isScene===!0?$.overrideMaterial:null;for(let S=0,k=A.length;S<k;S++){let X=A[S],O=X.object,B=X.geometry,D=Q===null?X.material:Q,se=X.group;O.layers.test(j.layers)&&Fr(O,$,j,B,D,se)}}function Fr(A,$,j,Q,S,k){A.onBeforeRender(_,$,j,Q,S,k),A.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),S.onBeforeRender(_,$,j,Q,A,k),S.transparent===!0&&S.side===Bt&&S.forceSinglePass===!1?(S.side=on,S.needsUpdate=!0,_.renderBufferDirect(j,$,Q,S,A,k),S.side=Zi,S.needsUpdate=!0,_.renderBufferDirect(j,$,Q,S,A,k),S.side=Bt):_.renderBufferDirect(j,$,Q,S,A,k),A.onAfterRender(_,$,j,Q,S,k)}function is(A,$,j){$.isScene!==!0&&($=He);let Q=Re.get(A),S=m.state.lights,k=m.state.shadowsArray,X=S.state.version,O=Be.getParameters(A,S.state,k,$,j),B=Be.getProgramCacheKey(O),D=Q.programs;Q.environment=A.isMeshStandardMaterial?$.environment:null,Q.fog=$.fog,Q.envMap=(A.isMeshStandardMaterial?q:b).get(A.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&A.envMap===null?$.environmentRotation:A.envMapRotation,D===void 0&&(A.addEventListener("dispose",at),D=new Map,Q.programs=D);let se=D.get(B);if(se!==void 0){if(Q.currentProgram===se&&Q.lightsStateVersion===X)return zr(A,O),se}else O.uniforms=Be.getUniforms(A),A.onBeforeCompile(O,_),se=Be.acquireProgram(O,B),D.set(B,se),Q.uniforms=O.uniforms;let Z=Q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Z.clippingPlanes=ne.uniform),zr(A,O),Q.needsLights=ss(A),Q.lightsStateVersion=X,Q.needsLights&&(Z.ambientLightColor.value=S.state.ambient,Z.lightProbe.value=S.state.probe,Z.directionalLights.value=S.state.directional,Z.directionalLightShadows.value=S.state.directionalShadow,Z.spotLights.value=S.state.spot,Z.spotLightShadows.value=S.state.spotShadow,Z.rectAreaLights.value=S.state.rectArea,Z.ltc_1.value=S.state.rectAreaLTC1,Z.ltc_2.value=S.state.rectAreaLTC2,Z.pointLights.value=S.state.point,Z.pointLightShadows.value=S.state.pointShadow,Z.hemisphereLights.value=S.state.hemi,Z.directionalShadowMap.value=S.state.directionalShadowMap,Z.directionalShadowMatrix.value=S.state.directionalShadowMatrix,Z.spotShadowMap.value=S.state.spotShadowMap,Z.spotLightMatrix.value=S.state.spotLightMatrix,Z.spotLightMap.value=S.state.spotLightMap,Z.pointShadowMap.value=S.state.pointShadowMap,Z.pointShadowMatrix.value=S.state.pointShadowMatrix),Q.currentProgram=se,Q.uniformsList=null,se}function Br(A){if(A.uniformsList===null){let $=A.currentProgram.getUniforms();A.uniformsList=br.seqWithValue($.seq,A.uniforms)}return A.uniformsList}function zr(A,$){let j=Re.get(A);j.outputColorSpace=$.outputColorSpace,j.batching=$.batching,j.batchingColor=$.batchingColor,j.instancing=$.instancing,j.instancingColor=$.instancingColor,j.instancingMorph=$.instancingMorph,j.skinning=$.skinning,j.morphTargets=$.morphTargets,j.morphNormals=$.morphNormals,j.morphColors=$.morphColors,j.morphTargetsCount=$.morphTargetsCount,j.numClippingPlanes=$.numClippingPlanes,j.numIntersection=$.numClipIntersection,j.vertexAlphas=$.vertexAlphas,j.vertexTangents=$.vertexTangents,j.toneMapping=$.toneMapping}function Xa(A,$,j,Q,S){$.isScene!==!0&&($=He),P.resetTextureUnits();let k=$.fog,X=Q.isMeshStandardMaterial?$.environment:null,O=E===null?_.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:es,B=(Q.isMeshStandardMaterial?q:b).get(Q.envMap||X),D=Q.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,se=!!j.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Z=!!j.morphAttributes.position,be=!!j.morphAttributes.normal,$e=!!j.morphAttributes.color,it=Yi;Q.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(it=_.toneMapping);let Kt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,st=Kt!==void 0?Kt.length:0,ze=Re.get(Q),bt=m.state.lights;if(ie===!0&&(de===!0||A!==te)){let ln=A===te&&Q.id===L;ne.setState(Q,A,ln)}let rt=!1;Q.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==bt.state.version||ze.outputColorSpace!==O||S.isBatchedMesh&&ze.batching===!1||!S.isBatchedMesh&&ze.batching===!0||S.isBatchedMesh&&ze.batchingColor===!0&&S.colorTexture===null||S.isBatchedMesh&&ze.batchingColor===!1&&S.colorTexture!==null||S.isInstancedMesh&&ze.instancing===!1||!S.isInstancedMesh&&ze.instancing===!0||S.isSkinnedMesh&&ze.skinning===!1||!S.isSkinnedMesh&&ze.skinning===!0||S.isInstancedMesh&&ze.instancingColor===!0&&S.instanceColor===null||S.isInstancedMesh&&ze.instancingColor===!1&&S.instanceColor!==null||S.isInstancedMesh&&ze.instancingMorph===!0&&S.morphTexture===null||S.isInstancedMesh&&ze.instancingMorph===!1&&S.morphTexture!==null||ze.envMap!==B||Q.fog===!0&&ze.fog!==k||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==ne.numPlanes||ze.numIntersection!==ne.numIntersection)||ze.vertexAlphas!==D||ze.vertexTangents!==se||ze.morphTargets!==Z||ze.morphNormals!==be||ze.morphColors!==$e||ze.toneMapping!==it||ze.morphTargetsCount!==st)&&(rt=!0):(rt=!0,ze.__version=Q.version);let gn=ze.currentProgram;rt===!0&&(gn=is(Q,$,S));let Hn=!1,Jt=!1,Hr=!1,At=gn.getUniforms(),Qn=ze.uniforms;if(Ae.useProgram(gn.program)&&(Hn=!0,Jt=!0,Hr=!0),Q.id!==L&&(L=Q.id,Jt=!0),Hn||te!==A){ve.reverseDepthBuffer?(xe.copy(A.projectionMatrix),lv(xe),cv(xe),At.setValue(I,"projectionMatrix",xe)):At.setValue(I,"projectionMatrix",A.projectionMatrix),At.setValue(I,"viewMatrix",A.matrixWorldInverse);let ln=At.map.cameraPosition;ln!==void 0&&ln.setValue(I,Xe.setFromMatrixPosition(A.matrixWorld)),ve.logarithmicDepthBuffer&&At.setValue(I,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&At.setValue(I,"isOrthographic",A.isOrthographicCamera===!0),te!==A&&(te=A,Jt=!0,Hr=!0)}if(S.isSkinnedMesh){At.setOptional(I,S,"bindMatrix"),At.setOptional(I,S,"bindMatrixInverse");let ln=S.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),At.setValue(I,"boneTexture",ln.boneTexture,P))}S.isBatchedMesh&&(At.setOptional(I,S,"batchingTexture"),At.setValue(I,"batchingTexture",S._matricesTexture,P),At.setOptional(I,S,"batchingIdTexture"),At.setValue(I,"batchingIdTexture",S._indirectTexture,P),At.setOptional(I,S,"batchingColorTexture"),S._colorsTexture!==null&&At.setValue(I,"batchingColorTexture",S._colorsTexture,P));let rs=j.morphAttributes;if((rs.position!==void 0||rs.normal!==void 0||rs.color!==void 0)&&Se.update(S,j,gn),(Jt||ze.receiveShadow!==S.receiveShadow)&&(ze.receiveShadow=S.receiveShadow,At.setValue(I,"receiveShadow",S.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Qn.envMap.value=B,Qn.flipEnvMap.value=B.isCubeTexture&&B.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&$.environment!==null&&(Qn.envMapIntensity.value=$.environmentIntensity),Jt&&(At.setValue(I,"toneMappingExposure",_.toneMappingExposure),ze.needsLights&&qa(Qn,Hr),k&&Q.fog===!0&&Pe.refreshFogUniforms(Qn,k),Pe.refreshMaterialUniforms(Qn,Q,K,U,m.state.transmissionRenderTarget[A.id]),br.upload(I,Br(ze),Qn,P)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(br.upload(I,Br(ze),Qn,P),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&At.setValue(I,"center",S.center),At.setValue(I,"modelViewMatrix",S.modelViewMatrix),At.setValue(I,"normalMatrix",S.normalMatrix),At.setValue(I,"modelMatrix",S.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){let ln=Q.uniformsGroups;for(let as=0,au=ln.length;as<au;as++){let Fs=ln[as];F.update(Fs,gn),F.bind(Fs,gn)}}return gn}function qa(A,$){A.ambientLightColor.needsUpdate=$,A.lightProbe.needsUpdate=$,A.directionalLights.needsUpdate=$,A.directionalLightShadows.needsUpdate=$,A.pointLights.needsUpdate=$,A.pointLightShadows.needsUpdate=$,A.spotLights.needsUpdate=$,A.spotLightShadows.needsUpdate=$,A.rectAreaLights.needsUpdate=$,A.hemisphereLights.needsUpdate=$}function ss(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(A,$,j){Re.get(A.texture).__webglTexture=$,Re.get(A.depthTexture).__webglTexture=j;let Q=Re.get(A);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=j===void 0,Q.__autoAllocateDepthBuffer||pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,$){let j=Re.get(A);j.__webglFramebuffer=$,j.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(A,$=0,j=0){E=A,C=$,T=j;let Q=!0,S=null,k=!1,X=!1;if(A){let B=Re.get(A);if(B.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(B.__webglFramebuffer===void 0)P.setupRenderTarget(A);else if(B.__hasExternalTextures)P.rebindTextures(A,Re.get(A.texture).__webglTexture,Re.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Z=A.depthTexture;if(B.__boundDepthTexture!==Z){if(Z!==null&&Re.has(Z)&&(A.width!==Z.image.width||A.height!==Z.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");P.setupDepthRenderbuffer(A)}}let D=A.texture;(D.isData3DTexture||D.isDataArrayTexture||D.isCompressedArrayTexture)&&(X=!0);let se=Re.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(se[$])?S=se[$][j]:S=se[$],k=!0):A.samples>0&&P.useMultisampledRTT(A)===!1?S=Re.get(A).__webglMultisampledFramebuffer:Array.isArray(se)?S=se[j]:S=se,v.copy(A.viewport),w.copy(A.scissor),Y=A.scissorTest}else v.copy(ge).multiplyScalar(K).floor(),w.copy(W).multiplyScalar(K).floor(),Y=re;if(Ae.bindFramebuffer(I.FRAMEBUFFER,S)&&Q&&Ae.drawBuffers(A,S),Ae.viewport(v),Ae.scissor(w),Ae.setScissorTest(Y),k){let B=Re.get(A.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+$,B.__webglTexture,j)}else if(X){let B=Re.get(A.texture),D=$||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,B.__webglTexture,j||0,D)}L=-1},this.readRenderTargetPixels=function(A,$,j,Q,S,k,X){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let O=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&X!==void 0&&(O=O[X]),O){Ae.bindFramebuffer(I.FRAMEBUFFER,O);try{let B=A.texture,D=B.format,se=B.type;if(!ve.textureFormatReadable(D)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=A.width-Q&&j>=0&&j<=A.height-S&&I.readPixels($,j,Q,S,Ye.convert(D),Ye.convert(se),k)}finally{let B=E!==null?Re.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,B)}}},this.readRenderTargetPixelsAsync=async function(A,$,j,Q,S,k,X){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let O=Re.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&X!==void 0&&(O=O[X]),O){let B=A.texture,D=B.format,se=B.type;if(!ve.textureFormatReadable(D))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ve.textureTypeReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=A.width-Q&&j>=0&&j<=A.height-S){Ae.bindFramebuffer(I.FRAMEBUFFER,O);let Z=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Z),I.bufferData(I.PIXEL_PACK_BUFFER,k.byteLength,I.STREAM_READ),I.readPixels($,j,Q,S,Ye.convert(D),Ye.convert(se),0);let be=E!==null?Re.get(E).__webglFramebuffer:null;Ae.bindFramebuffer(I.FRAMEBUFFER,be);let $e=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await ov(I,$e,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Z),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,k),I.deleteBuffer(Z),I.deleteSync($e),k}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,$=null,j=0){A.isTexture!==!0&&(Zo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,A=arguments[1]);let Q=Math.pow(2,-j),S=Math.floor(A.image.width*Q),k=Math.floor(A.image.height*Q),X=$!==null?$.x:0,O=$!==null?$.y:0;P.setTexture2D(A,0),I.copyTexSubImage2D(I.TEXTURE_2D,j,0,0,X,O,S,k),Ae.unbindTexture()},this.copyTextureToTexture=function(A,$,j=null,Q=null,S=0){A.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,A=arguments[1],$=arguments[2],S=arguments[3]||0,j=null);let k,X,O,B,D,se;j!==null?(k=j.max.x-j.min.x,X=j.max.y-j.min.y,O=j.min.x,B=j.min.y):(k=A.image.width,X=A.image.height,O=0,B=0),Q!==null?(D=Q.x,se=Q.y):(D=0,se=0);let Z=Ye.convert($.format),be=Ye.convert($.type);P.setTexture2D($,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);let $e=I.getParameter(I.UNPACK_ROW_LENGTH),it=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Kt=I.getParameter(I.UNPACK_SKIP_PIXELS),st=I.getParameter(I.UNPACK_SKIP_ROWS),ze=I.getParameter(I.UNPACK_SKIP_IMAGES),bt=A.isCompressedTexture?A.mipmaps[S]:A.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,O),I.pixelStorei(I.UNPACK_SKIP_ROWS,B),A.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,S,D,se,k,X,Z,be,bt.data):A.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,S,D,se,bt.width,bt.height,Z,bt.data):I.texSubImage2D(I.TEXTURE_2D,S,D,se,k,X,Z,be,bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,$e),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Kt),I.pixelStorei(I.UNPACK_SKIP_ROWS,st),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ze),S===0&&$.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(A,$,j=null,Q=null,S=0){A.isTexture!==!0&&(Zo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,Q=arguments[1]||null,A=arguments[2],$=arguments[3],S=arguments[4]||0);let k,X,O,B,D,se,Z,be,$e,it=A.isCompressedTexture?A.mipmaps[S]:A.image;j!==null?(k=j.max.x-j.min.x,X=j.max.y-j.min.y,O=j.max.z-j.min.z,B=j.min.x,D=j.min.y,se=j.min.z):(k=it.width,X=it.height,O=it.depth,B=0,D=0,se=0),Q!==null?(Z=Q.x,be=Q.y,$e=Q.z):(Z=0,be=0,$e=0);let Kt=Ye.convert($.format),st=Ye.convert($.type),ze;if($.isData3DTexture)P.setTexture3D($,0),ze=I.TEXTURE_3D;else if($.isDataArrayTexture||$.isCompressedArrayTexture)P.setTexture2DArray($,0),ze=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,$.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,$.unpackAlignment);let bt=I.getParameter(I.UNPACK_ROW_LENGTH),rt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),gn=I.getParameter(I.UNPACK_SKIP_PIXELS),Hn=I.getParameter(I.UNPACK_SKIP_ROWS),Jt=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,it.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,it.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,B),I.pixelStorei(I.UNPACK_SKIP_ROWS,D),I.pixelStorei(I.UNPACK_SKIP_IMAGES,se),A.isDataTexture||A.isData3DTexture?I.texSubImage3D(ze,S,Z,be,$e,k,X,O,Kt,st,it.data):$.isCompressedArrayTexture?I.compressedTexSubImage3D(ze,S,Z,be,$e,k,X,O,Kt,it.data):I.texSubImage3D(ze,S,Z,be,$e,k,X,O,Kt,st,it),I.pixelStorei(I.UNPACK_ROW_LENGTH,bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,rt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,gn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Hn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt),S===0&&$.generateMipmaps&&I.generateMipmap(ze),Ae.unbindTexture()},this.initRenderTarget=function(A){Re.get(A).__webglFramebuffer===void 0&&P.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?P.setTextureCube(A,0):A.isData3DTexture?P.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?P.setTexture2DArray(A,0):P.setTexture2D(A,0),Ae.unbindTexture()},this.resetState=function(){C=0,T=0,E=null,Ae.reset(),ht.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===Bd?"display-p3":"srgb",t.unpackColorSpace=ft.workingColorSpace===Il?"display-p3":"srgb"}};var pl=class extends Ut{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ud=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Yh,this.updateRanges=[],this.version=0,this.uuid=Mi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[i+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Mi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},un=new H,ml=class n{constructor(e,t,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=si(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=gt(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=gt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,t,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=gt(t,this.array),i=gt(i,this.array),s=gt(s,this.array),r=gt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Cn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new n(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},ji=class extends Ti{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ur,_a=new H,fr=new H,pr=new H,mr=new Me,ba=new Me,dm=new Pt,Oo=new H,Ma=new H,Fo=new H,Np=new Me,sh=new Me,Op=new Me,Rs=class extends Ut{constructor(e=new ji){if(super(),this.isSprite=!0,this.type="Sprite",ur===void 0){ur=new pn;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ud(t,5);ur.setIndex([0,1,2,0,2,3]),ur.setAttribute("position",new ml(i,3,0,!1)),ur.setAttribute("uv",new ml(i,2,3,!1))}this.geometry=ur,this.material=e,this.center=new Me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),fr.setFromMatrixScale(this.matrixWorld),dm.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),pr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&fr.multiplyScalar(-pr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Bo(Oo.set(-.5,-.5,0),pr,a,fr,s,r),Bo(Ma.set(.5,-.5,0),pr,a,fr,s,r),Bo(Fo.set(.5,.5,0),pr,a,fr,s,r),Np.set(0,0),sh.set(1,0),Op.set(1,1);let o=e.ray.intersectTriangle(Oo,Ma,Fo,!1,_a);if(o===null&&(Bo(Ma.set(-.5,.5,0),pr,a,fr,s,r),sh.set(0,1),o=e.ray.intersectTriangle(Oo,Fo,Ma,!1,_a),o===null))return;let l=e.ray.origin.distanceTo(_a);l<e.near||l>e.far||t.push({distance:l,point:_a.clone(),uv:Xi.getInterpolation(_a,Oo,Ma,Fo,Np,sh,Op,new Me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Bo(n,e,t,i,s,r){mr.subVectors(n,t).addScalar(.5).multiply(i),s!==void 0?(ba.x=r*mr.x-s*mr.y,ba.y=s*mr.x+r*mr.y):ba.copy(mr),n.copy(e),n.x+=ba.x,n.y+=ba.y,n.applyMatrix4(dm)}var gl=class extends _n{constructor(e=null,t=1,i=1,s,r,a,o,l,c=an,h=an,u,d){super(null,a,o,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ai=class extends _n{constructor(e,t,i,s,r,a,o,l,c){super(e,t,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},bn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(s),t.push(r),s=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let i=this.getLengths(),s=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],d=i[s+1]-h,f=(a-h)/d;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new Me:new H);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){let i=new H,s=[],r=[],a=[],o=new H,l=new Pt;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new H)}r[0]=new H,a[0]=new H;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),d<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Qt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(Qt(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},La=class extends bn{constructor(e=0,t=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new Me){let i=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},fd=class extends La{constructor(e,t,i,s,r,a){super(e,t,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Hd(){let n=0,e=0,t=0,i=0;function s(r,a,o,l){n=r,e=o,t=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let d=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+u)+(l-o)/u;d*=h,f*=h,s(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return n+e*r+t*a+i*o}}}var zo=new H,rh=new Hd,ah=new Hd,oh=new Hd,ka=class extends bn{constructor(e=[],t=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=s}getPoint(e,t=new H){let i=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(zo.subVectors(s[0],s[1]).add(s[0]),c=zo);let u=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(zo.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=zo),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),f),y=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),rh.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,g,y,m),ah.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,g,y,m),oh.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(rh.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),ah.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),oh.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return i.set(rh.calc(l),ah.calc(l),oh.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new H().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Fp(n,e,t,i,s){let r=(i-e)*.5,a=(s-t)*.5,o=n*n,l=n*o;return(2*t-2*i+r+a)*l+(-3*t+3*i-2*r-a)*o+r*n+t}function sM(n,e){let t=1-n;return t*t*e}function rM(n,e){return 2*(1-n)*n*e}function aM(n,e){return n*n*e}function Ta(n,e,t,i){return sM(n,e)+rM(n,t)+aM(n,i)}function oM(n,e){let t=1-n;return t*t*t*e}function lM(n,e){let t=1-n;return 3*t*t*n*e}function cM(n,e){return 3*(1-n)*n*n*e}function hM(n,e){return n*n*n*e}function Aa(n,e,t,i,s){return oM(n,e)+lM(n,t)+cM(n,i)+hM(n,s)}var yl=class extends bn{constructor(e=new Me,t=new Me,i=new Me,s=new Me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Aa(e,s.x,r.x,a.x,o.x),Aa(e,s.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},pd=class extends bn{constructor(e=new H,t=new H,i=new H,s=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=s}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Aa(e,s.x,r.x,a.x,o.x),Aa(e,s.y,r.y,a.y,o.y),Aa(e,s.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},vl=class extends bn{constructor(e=new Me,t=new Me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Me){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},md=class extends bn{constructor(e=new H,t=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new H){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new H){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},xl=class extends bn{constructor(e=new Me,t=new Me,i=new Me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Me){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ta(e,s.x,r.x,a.x),Ta(e,s.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ps=class extends bn{constructor(e=new H,t=new H,i=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new H){let i=t,s=this.v0,r=this.v1,a=this.v2;return i.set(Ta(e,s.x,r.x,a.x),Ta(e,s.y,r.y,a.y),Ta(e,s.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},_l=class extends bn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Me){let i=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Fp(o,l.x,c.x,h.x,u.x),Fp(o,l.y,c.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let s=e.points[t];this.points.push(new Me().fromArray(s))}return this}},bl=Object.freeze({__proto__:null,ArcCurve:fd,CatmullRomCurve3:ka,CubicBezierCurve:yl,CubicBezierCurve3:pd,EllipseCurve:La,LineCurve:vl,LineCurve3:md,QuadraticBezierCurve:xl,QuadraticBezierCurve3:Ps,SplineCurve:_l}),gd=class extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bl[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,s=this.curves.length;i<s;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let s=e.curves[t];this.curves.push(new bl[s.type]().fromJSON(s))}return this}},Da=class extends gd{constructor(e){super(),this.type="Path",this.currentPoint=new Me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new vl(this.currentPoint.clone(),new Me(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,s){let r=new xl(this.currentPoint.clone(),new Me(e,t),new Me(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(e,t,i,s,r,a){let o=new yl(this.currentPoint.clone(),new Me(e,t),new Me(i,s),new Me(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new _l(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,s,r,a),this}absarc(e,t,i,s,r,a){return this.absellipse(e,t,i,i,s,r,a),this}ellipse(e,t,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,s,r,a,o,l),this}absellipse(e,t,i,s,r,a,o,l){let c=new La(e,t,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ua=class n extends pn{constructor(e=[new Me(0,-.5),new Me(.5,0),new Me(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=Qt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,u=new H,d=new Me,f=new H,g=new H,y=new H,m=0,p=0;for(let M=0;M<=e.length-1;M++)switch(M){case 0:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,y.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:m=e[M+1].x-e[M].x,p=e[M+1].y-e[M].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=y.x,f.y+=y.y,f.z+=y.z,f.normalize(),l.push(f.x,f.y,f.z),y.copy(g)}for(let M=0;M<=t;M++){let _=i+M*h*s,x=Math.sin(_),C=Math.cos(_);for(let T=0;T<=e.length-1;T++){u.x=e[T].x*x,u.y=e[T].y,u.z=e[T].x*C,a.push(u.x,u.y,u.z),d.x=M/t,d.y=T/(e.length-1),o.push(d.x,d.y);let E=l[3*T+0]*x,L=l[3*T+1],te=l[3*T+0]*C;c.push(E,L,te)}}for(let M=0;M<t;M++)for(let _=0;_<e.length-1;_++){let x=_+M*e.length,C=x,T=x+e.length,E=x+e.length+1,L=x+1;r.push(C,T,L),r.push(E,L,T)}this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("uv",new mt(o,2)),this.setAttribute("normal",new mt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.points,e.segments,e.phiStart,e.phiLength)}},Ei=class n extends Ua{constructor(e=1,t=1,i=4,s=8){let r=new Da;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(i),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:i,radialSegments:s}}static fromJSON(e){return new n(e.radius,e.length,e.capSegments,e.radialSegments)}},Rr=class n extends pn{constructor(e=1,t=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new H,h=new Me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new mt(a,3)),this.setAttribute("normal",new mt(o,3)),this.setAttribute("uv",new mt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.segments,e.thetaStart,e.thetaLength)}},yt=class n extends pn{constructor(e=1,t=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,y=[],m=i/2,p=0;M(),a===!1&&(e>0&&_(!0),t>0&&_(!1)),this.setIndex(h),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function M(){let x=new H,C=new H,T=0,E=(t-e)/i;for(let L=0;L<=r;L++){let te=[],v=L/r,w=v*(t-e)+e;for(let Y=0;Y<=s;Y++){let z=Y/s,R=z*l+o,N=Math.sin(R),U=Math.cos(R);C.x=w*N,C.y=-v*i+m,C.z=w*U,u.push(C.x,C.y,C.z),x.set(N,E,U).normalize(),d.push(x.x,x.y,x.z),f.push(z,1-v),te.push(g++)}y.push(te)}for(let L=0;L<s;L++)for(let te=0;te<r;te++){let v=y[te][L],w=y[te+1][L],Y=y[te+1][L+1],z=y[te][L+1];e>0&&(h.push(v,w,z),T+=3),t>0&&(h.push(w,Y,z),T+=3)}c.addGroup(p,T,0),p+=T}function _(x){let C=g,T=new Me,E=new H,L=0,te=x===!0?e:t,v=x===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*v,0),d.push(0,v,0),f.push(.5,.5),g++;let w=g;for(let Y=0;Y<=s;Y++){let R=Y/s*l+o,N=Math.cos(R),U=Math.sin(R);E.x=te*U,E.y=m*v,E.z=te*N,u.push(E.x,E.y,E.z),d.push(0,v,0),T.x=N*.5+.5,T.y=U*.5*v+.5,f.push(T.x,T.y),g++}for(let Y=0;Y<s;Y++){let z=C+Y,R=w+Y;x===!0?h.push(R,R+1,z):h.push(R+1,R,z),L+=3}c.addGroup(p,L,x===!0?1:2),p+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Yt=class n extends yt{constructor(e=1,t=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new n(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var oi=class extends Da{constructor(e){super(e),this.uuid=Mi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,s=this.holes.length;i<s;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let s=e.holes[t];this.holes.push(new Da().fromJSON(s))}return this}},dM={triangulate:function(n,e,t=2){let i=e&&e.length,s=i?e[0]*t:n.length,r=um(n,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,d,f;if(i&&(r=gM(n,e,r,t)),n.length>80*t){o=c=n[0],l=h=n[1];for(let g=t;g<s;g+=t)u=n[g],d=n[g+1],u<o&&(o=u),d<l&&(l=d),u>c&&(c=u),d>h&&(h=d);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return Na(r,a,t,o,l,f,0),a}};function um(n,e,t,i,s){let r,a;if(s===EM(n,e,t,i)>0)for(r=e;r<t;r+=i)a=Bp(r,n[r],n[r+1],a);else for(r=t-i;r>=e;r-=i)a=Bp(r,n[r],n[r+1],a);return a&&kl(a,a.next)&&(Fa(a),a=a.next),a}function Is(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(kl(t,t.next)||Rt(t.prev,t,t.next)===0)){if(Fa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Na(n,e,t,i,s,r,a){if(!n)return;!a&&r&&bM(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?fM(n,i,s,r):uM(n)){e.push(l.i/t|0),e.push(n.i/t|0),e.push(c.i/t|0),Fa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=pM(Is(n),e,t),Na(n,e,t,i,s,r,2)):a===2&&mM(n,e,t,i,s,r):Na(Is(n),e,t,i,s,r,1);break}}}function uM(n){let e=n.prev,t=n,i=n.next;if(Rt(e,t,i)>=0)return!1;let s=e.x,r=t.x,a=i.x,o=e.y,l=t.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,d=s>r?s>a?s:a:r>a?r:a,f=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&yr(s,o,r,l,a,c,g.x,g.y)&&Rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function fM(n,e,t,i){let s=n.prev,r=n,a=n.next;if(Rt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,g=h<u?h<d?h:d:u<d?u:d,y=o>l?o>c?o:c:l>c?l:c,m=h>u?h>d?h:d:u>d?u:d,p=yd(f,g,e,t,i),M=yd(y,m,e,t,i),_=n.prevZ,x=n.nextZ;for(;_&&_.z>=p&&x&&x.z<=M;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&yr(o,h,l,u,c,d,_.x,_.y)&&Rt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&yr(o,h,l,u,c,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=p;){if(_.x>=f&&_.x<=y&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&yr(o,h,l,u,c,d,_.x,_.y)&&Rt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=M;){if(x.x>=f&&x.x<=y&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&yr(o,h,l,u,c,d,x.x,x.y)&&Rt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function pM(n,e,t){let i=n;do{let s=i.prev,r=i.next.next;!kl(s,r)&&fm(s,i,i.next,r)&&Oa(s,r)&&Oa(r,s)&&(e.push(s.i/t|0),e.push(i.i/t|0),e.push(r.i/t|0),Fa(i),Fa(i.next),i=n=r),i=i.next}while(i!==n);return Is(i)}function mM(n,e,t,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&SM(a,o)){let l=pm(a,o);a=Is(a,a.next),l=Is(l,l.next),Na(a,e,t,i,s,r,0),Na(l,e,t,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function gM(n,e,t,i){let s=[],r,a,o,l,c;for(r=0,a=e.length;r<a;r++)o=e[r]*i,l=r<a-1?e[r+1]*i:n.length,c=um(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(wM(c));for(s.sort(yM),r=0;r<s.length;r++)t=vM(s[r],t);return t}function yM(n,e){return n.x-e.x}function vM(n,e){let t=xM(n,e);if(!t)return e;let i=pm(t,n);return Is(i,i.next),Is(t,t.next)}function xM(n,e){let t=e,i=-1/0,s,r=n.x,a=n.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){let d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=r&&d>i&&(i=d,s=t.x<t.next.x?t:t.next,d===r))return s}t=t.next}while(t!==e);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;t=s;do r>=t.x&&t.x>=l&&r!==t.x&&yr(a<c?r:i,a,l,c,a<c?i:r,a,t.x,t.y)&&(u=Math.abs(a-t.y)/(r-t.x),Oa(t,n)&&(u<h||u===h&&(t.x>s.x||t.x===s.x&&_M(s,t)))&&(s=t,h=u)),t=t.next;while(t!==o);return s}function _M(n,e){return Rt(n.prev,n,e.prev)<0&&Rt(e.next,n,n.next)<0}function bM(n,e,t,i){let s=n;do s.z===0&&(s.z=yd(s.x,s.y,e,t,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,MM(s)}function MM(n){let e,t,i,s,r,a,o,l,c=1;do{for(t=n,n=null,r=null,a=0;t;){for(a++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(s=t,t=t.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;t=i}r.nextZ=null,c*=2}while(a>1);return n}function yd(n,e,t,i,s){return n=(n-t)*s|0,e=(e-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function wM(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function yr(n,e,t,i,s,r,a,o){return(s-a)*(e-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(i-o)}function SM(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!TM(n,e)&&(Oa(n,e)&&Oa(e,n)&&AM(n,e)&&(Rt(n.prev,n,e.prev)||Rt(n,e.prev,e))||kl(n,e)&&Rt(n.prev,n,n.next)>0&&Rt(e.prev,e,e.next)>0)}function Rt(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function kl(n,e){return n.x===e.x&&n.y===e.y}function fm(n,e,t,i){let s=Vo(Rt(n,e,t)),r=Vo(Rt(n,e,i)),a=Vo(Rt(t,i,n)),o=Vo(Rt(t,i,e));return!!(s!==r&&a!==o||s===0&&Ho(n,t,e)||r===0&&Ho(n,i,e)||a===0&&Ho(t,n,i)||o===0&&Ho(t,e,i))}function Ho(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Vo(n){return n>0?1:n<0?-1:0}function TM(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&fm(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Oa(n,e){return Rt(n.prev,n,n.next)<0?Rt(n,e,n.next)>=0&&Rt(n,n.prev,e)>=0:Rt(n,e,n.prev)<0||Rt(n,n.next,e)<0}function AM(n,e){let t=n,i=!1,s=(n.x+e.x)/2,r=(n.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function pm(n,e){let t=new vd(n.i,n.x,n.y),i=new vd(e.i,e.x,e.y),s=n.next,r=e.prev;return n.next=e,e.prev=n,t.next=s,s.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Bp(n,e,t,i){let s=new vd(n,e,t);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Fa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vd(n,e,t){this.i=n,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function EM(n,e,t,i){let s=0;for(let r=e,a=t-i;r<t;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ea=class n{static area(e){let t=e.length,i=0;for(let s=t-1,r=0;r<t;s=r++)i+=e[s].x*e[r].y-e[r].x*e[s].y;return i*.5}static isClockWise(e){return n.area(e)<0}static triangulateShape(e,t){let i=[],s=[],r=[];zp(e),Hp(i,e);let a=e.length;t.forEach(zp);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Hp(i,t[l]);let o=dM.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function zp(n){let e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Hp(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}var Qi=class n extends pn{constructor(e=new oi([new Me(.5,.5),new Me(-.5,.5),new Me(-.5,-.5),new Me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new mt(s,3)),this.setAttribute("uv",new mt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,M=t.UVGenerator!==void 0?t.UVGenerator:CM,_,x=!1,C,T,E,L;p&&(_=p.getSpacedPoints(h),x=!0,d=!1,C=p.computeFrenetFrames(h,!1),T=new H,E=new H,L=new H),d||(m=0,f=0,g=0,y=0);let te=o.extractPoints(c),v=te.shape,w=te.holes;if(!Ea.isClockWise(v)){v=v.reverse();for(let ae=0,I=w.length;ae<I;ae++){let ce=w[ae];Ea.isClockWise(ce)&&(w[ae]=ce.reverse())}}let z=Ea.triangulateShape(v,w),R=v;for(let ae=0,I=w.length;ae<I;ae++){let ce=w[ae];v=v.concat(ce)}function N(ae,I,ce){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ae.clone().addScaledVector(I,ce)}let U=v.length,K=z.length;function V(ae,I,ce){let pe,ve,Ae,Fe=ae.x-I.x,Re=ae.y-I.y,P=ce.x-ae.x,b=ce.y-ae.y,q=Fe*Fe+Re*Re,J=Fe*b-Re*P;if(Math.abs(J)>Number.EPSILON){let le=Math.sqrt(q),oe=Math.sqrt(P*P+b*b),Be=I.x-Re/le,Pe=I.y+Fe/le,De=ce.x-b/oe,we=ce.y+P/oe,ne=((De-Be)*b-(we-Pe)*P)/(Fe*b-Re*P);pe=Be+Fe*ne-ae.x,ve=Pe+Re*ne-ae.y;let he=pe*pe+ve*ve;if(he<=2)return new Me(pe,ve);Ae=Math.sqrt(he/2)}else{let le=!1;Fe>Number.EPSILON?P>Number.EPSILON&&(le=!0):Fe<-Number.EPSILON?P<-Number.EPSILON&&(le=!0):Math.sign(Re)===Math.sign(b)&&(le=!0),le?(pe=-Re,ve=Fe,Ae=Math.sqrt(q)):(pe=Fe,ve=Re,Ae=Math.sqrt(q/2))}return new Me(pe/Ae,ve/Ae)}let _e=[];for(let ae=0,I=R.length,ce=I-1,pe=ae+1;ae<I;ae++,ce++,pe++)ce===I&&(ce=0),pe===I&&(pe=0),_e[ae]=V(R[ae],R[ce],R[pe]);let ge=[],W,re=_e.concat();for(let ae=0,I=w.length;ae<I;ae++){let ce=w[ae];W=[];for(let pe=0,ve=ce.length,Ae=ve-1,Fe=pe+1;pe<ve;pe++,Ae++,Fe++)Ae===ve&&(Ae=0),Fe===ve&&(Fe=0),W[pe]=V(ce[pe],ce[Ae],ce[Fe]);ge.push(W),re=re.concat(W)}for(let ae=0;ae<m;ae++){let I=ae/m,ce=f*Math.cos(I*Math.PI/2),pe=g*Math.sin(I*Math.PI/2)+y;for(let ve=0,Ae=R.length;ve<Ae;ve++){let Fe=N(R[ve],_e[ve],pe);Ee(Fe.x,Fe.y,-ce)}for(let ve=0,Ae=w.length;ve<Ae;ve++){let Fe=w[ve];W=ge[ve];for(let Re=0,P=Fe.length;Re<P;Re++){let b=N(Fe[Re],W[Re],pe);Ee(b.x,b.y,-ce)}}}let Ne=g+y;for(let ae=0;ae<U;ae++){let I=d?N(v[ae],re[ae],Ne):v[ae];x?(E.copy(C.normals[0]).multiplyScalar(I.x),T.copy(C.binormals[0]).multiplyScalar(I.y),L.copy(_[0]).add(E).add(T),Ee(L.x,L.y,L.z)):Ee(I.x,I.y,0)}for(let ae=1;ae<=h;ae++)for(let I=0;I<U;I++){let ce=d?N(v[I],re[I],Ne):v[I];x?(E.copy(C.normals[ae]).multiplyScalar(ce.x),T.copy(C.binormals[ae]).multiplyScalar(ce.y),L.copy(_[ae]).add(E).add(T),Ee(L.x,L.y,L.z)):Ee(ce.x,ce.y,u/h*ae)}for(let ae=m-1;ae>=0;ae--){let I=ae/m,ce=f*Math.cos(I*Math.PI/2),pe=g*Math.sin(I*Math.PI/2)+y;for(let ve=0,Ae=R.length;ve<Ae;ve++){let Fe=N(R[ve],_e[ve],pe);Ee(Fe.x,Fe.y,u+ce)}for(let ve=0,Ae=w.length;ve<Ae;ve++){let Fe=w[ve];W=ge[ve];for(let Re=0,P=Fe.length;Re<P;Re++){let b=N(Fe[Re],W[Re],pe);x?Ee(b.x,b.y+_[h-1].y,_[h-1].x+ce):Ee(b.x,b.y,u+ce)}}}ie(),de();function ie(){let ae=s.length/3;if(d){let I=0,ce=U*I;for(let pe=0;pe<K;pe++){let ve=z[pe];Xe(ve[2]+ce,ve[1]+ce,ve[0]+ce)}I=h+m*2,ce=U*I;for(let pe=0;pe<K;pe++){let ve=z[pe];Xe(ve[0]+ce,ve[1]+ce,ve[2]+ce)}}else{for(let I=0;I<K;I++){let ce=z[I];Xe(ce[2],ce[1],ce[0])}for(let I=0;I<K;I++){let ce=z[I];Xe(ce[0]+U*h,ce[1]+U*h,ce[2]+U*h)}}i.addGroup(ae,s.length/3-ae,0)}function de(){let ae=s.length/3,I=0;xe(R,I),I+=R.length;for(let ce=0,pe=w.length;ce<pe;ce++){let ve=w[ce];xe(ve,I),I+=ve.length}i.addGroup(ae,s.length/3-ae,1)}function xe(ae,I){let ce=ae.length;for(;--ce>=0;){let pe=ce,ve=ce-1;ve<0&&(ve=ae.length-1);for(let Ae=0,Fe=h+m*2;Ae<Fe;Ae++){let Re=U*Ae,P=U*(Ae+1),b=I+pe+Re,q=I+ve+Re,J=I+ve+P,le=I+pe+P;We(b,q,J,le)}}}function Ee(ae,I,ce){l.push(ae),l.push(I),l.push(ce)}function Xe(ae,I,ce){He(ae),He(I),He(ce);let pe=s.length/3,ve=M.generateTopUV(i,s,pe-3,pe-2,pe-1);Ge(ve[0]),Ge(ve[1]),Ge(ve[2])}function We(ae,I,ce,pe){He(ae),He(I),He(pe),He(I),He(ce),He(pe);let ve=s.length/3,Ae=M.generateSideWallUV(i,s,ve-6,ve-3,ve-2,ve-1);Ge(Ae[0]),Ge(Ae[1]),Ge(Ae[3]),Ge(Ae[1]),Ge(Ae[2]),Ge(Ae[3])}function He(ae){s.push(l[ae*3+0]),s.push(l[ae*3+1]),s.push(l[ae*3+2])}function Ge(ae){r.push(ae.x),r.push(ae.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return RM(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new bl[s.type]().fromJSON(s)),new n(i,e.options)}},CM={generateTopUV:function(n,e,t,i,s){let r=e[t*3],a=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[s*3],h=e[s*3+1];return[new Me(r,a),new Me(o,l),new Me(c,h)]},generateSideWallUV:function(n,e,t,i,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[s*3],f=e[s*3+1],g=e[s*3+2],y=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new Me(a,1-l),new Me(c,1-u),new Me(d,1-g),new Me(y,1-p)]:[new Me(o,1-l),new Me(h,1-u),new Me(f,1-g),new Me(m,1-p)]}};function RM(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];t.shapes.push(r.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var ot=class n extends pn{constructor(e=1,t=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new H,d=new H,f=[],g=[],y=[],m=[];for(let p=0;p<=i;p++){let M=[],_=p/i,x=0;p===0&&a===0?x=.5/t:p===i&&l===Math.PI&&(x=-.5/t);for(let C=0;C<=t;C++){let T=C/t;u.x=-e*Math.cos(s+T*r)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(s+T*r)*Math.sin(a+_*o),g.push(u.x,u.y,u.z),d.copy(u).normalize(),y.push(d.x,d.y,d.z),m.push(T+x,1-_),M.push(c++)}h.push(M)}for(let p=0;p<i;p++)for(let M=0;M<t;M++){let _=h[p][M+1],x=h[p][M],C=h[p+1][M],T=h[p+1][M+1];(p!==0||a>0)&&f.push(_,x,T),(p!==i-1||l<Math.PI)&&f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new mt(g,3)),this.setAttribute("normal",new mt(y,3)),this.setAttribute("uv",new mt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var vt=class n extends pn{constructor(e=1,t=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new H,u=new H,d=new H;for(let f=0;f<=i;f++)for(let g=0;g<=s;g++){let y=g/s*r,m=f/i*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(y),u.y=(e+t*Math.cos(m))*Math.sin(y),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),h.x=e*Math.cos(y),h.y=e*Math.sin(y),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(f/i)}for(let f=1;f<=i;f++)for(let g=1;g<=s;g++){let y=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,M=(s+1)*f+g;a.push(y,m,M),a.push(m,p,M)}this.setIndex(a),this.setAttribute("position",new mt(o,3)),this.setAttribute("normal",new mt(l,3)),this.setAttribute("uv",new mt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new n(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Ls=class n extends pn{constructor(e=new Ps(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),t=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new H,l=new H,c=new Me,h=new H,u=[],d=[],f=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new mt(u,3)),this.setAttribute("normal",new mt(d,3)),this.setAttribute("uv",new mt(f,2));function y(){for(let _=0;_<t;_++)m(_);m(r===!1?t:0),M(),p()}function m(_){h=e.getPointAt(_/t,h);let x=a.normals[_],C=a.binormals[_];for(let T=0;T<=s;T++){let E=T/s*Math.PI*2,L=Math.sin(E),te=-Math.cos(E);l.x=te*x.x+L*C.x,l.y=te*x.y+L*C.y,l.z=te*x.z+L*C.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,u.push(o.x,o.y,o.z)}}function p(){for(let _=1;_<=t;_++)for(let x=1;x<=s;x++){let C=(s+1)*(_-1)+(x-1),T=(s+1)*_+(x-1),E=(s+1)*_+x,L=(s+1)*(_-1)+x;g.push(C,T,L),g.push(T,E,L)}}function M(){for(let _=0;_<=t;_++)for(let x=0;x<=s;x++)c.x=_/t,c.y=x/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new n(new bl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Mn=class extends Ti{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Ml=class extends Ti{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new et(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fd,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function Go(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function PM(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Pr=class{constructor(e,t,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,s=t[i],r=t[i-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=t[++i],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=t[--i-1],e>=r)break e}a=i,i=0;break t}break n}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(s=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},xd=class extends Pr{constructor(e,t,i,s){super(e,t,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$f,endingEnd:$f}}intervalChanged_(e,t,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Xf:r=e,o=2*t-i;break;case qf:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Xf:a=e,l=2*i-t;break;case qf:a=1,l=i+s[1]-s[0];break;default:a=e-1,l=t}let c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(s-t),y=g*g,m=y*g,p=-d*m+2*d*y-d*g,M=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*g+1,_=(-1-f)*m+(1.5+f)*y+.5*g,x=f*m-f*y;for(let C=0;C!==o;++C)r[C]=p*a[h+C]+M*a[c+C]+_*a[l+C]+x*a[u+C];return r}},_d=class extends Pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(i-t)/(s-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[c+d]*u+a[l+d]*h;return r}},bd=class extends Pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Kn=class{constructor(e,t,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Go(t,this.TimeBufferType),this.values=Go(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Go(e.times,Array),values:Go(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new bd(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new _d(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new xd(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ko:t=this.InterpolantFactoryMethodDiscrete;break;case qh:t=this.InterpolantFactoryMethodLinear;break;case Cc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ko;case this.InterpolantFactoryMethodLinear:return qh;case this.InterpolantFactoryMethodSmooth:return Cc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,s=t.length;i!==s;++i)t[i]*=e}return this}trim(e,t){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&PM(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Cc,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let y=t[u+g];if(y!==t[d+g]||y!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,s=new i(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};Kn.prototype.TimeBufferType=Float32Array;Kn.prototype.ValueBufferType=Float32Array;Kn.prototype.DefaultInterpolation=qh;var ks=class extends Kn{constructor(e,t,i){super(e,t,i)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Ko;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var Md=class extends Kn{};Md.prototype.ValueTypeName="color";var wd=class extends Kn{};wd.prototype.ValueTypeName="number";var Sd=class extends Pr{constructor(e,t,i,s){super(e,t,i,s)}interpolate_(e,t,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)Ji.slerpFlat(r,0,a,c-o,a,c,l);return r}},wl=class extends Kn{InterpolantFactoryMethodLinear(e){return new Sd(this.times,this.values,this.getValueSize(),e)}};wl.prototype.ValueTypeName="quaternion";wl.prototype.InterpolantFactoryMethodSmooth=void 0;var Ds=class extends Kn{constructor(e,t,i){super(e,t,i)}};Ds.prototype.ValueTypeName="string";Ds.prototype.ValueBufferType=Array;Ds.prototype.DefaultInterpolation=Ko;Ds.prototype.InterpolantFactoryMethodLinear=void 0;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var Td=class extends Kn{};Td.prototype.ValueTypeName="vector";var Ad=class{constructor(e,t,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}},IM=new Ad,Ed=class{constructor(e){this.manager=e!==void 0?e:IM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let i=this;return new Promise(function(s,r){i.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};Ed.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ir=class extends Ut{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new et(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Sl=class extends Ir{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.groundColor=new et(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},lh=new Pt,Vp=new H,Gp=new H,Tl=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ia,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new Lt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,i=this.matrix;Vp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Vp),Gp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gp),t.updateMatrixWorld(),lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lh),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Cd=class extends Tl{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,i=tl*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(i!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Al=class extends Ir{constructor(e,t,i=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Cd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Rd=class extends Tl{constructor(){super(new hl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},El=class extends Ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ut.DEFAULT_UP),this.updateMatrix(),this.target=new Ut,this.shadow=new Rd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Cl=class extends Ir{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Vd="\\[\\]\\.:\\/",LM=new RegExp("["+Vd+"]","g"),Gd="[^"+Vd+"]",kM="[^"+Vd.replace("\\.","")+"]",DM=/((?:WC+[\/:])*)/.source.replace("WC",Gd),UM=/(WCOD+)?/.source.replace("WCOD",kM),NM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gd),OM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gd),FM=new RegExp("^"+DM+UM+NM+OM+"$"),BM=["material","materials","bones","map"],Pd=class{constructor(e,t,i){let s=i||Mt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},Mt=class n{constructor(e,t,i){this.path=t,this.parsedPath=i||n.parseTrackName(t),this.node=n.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new n.Composite(e,t,i):new n(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(LM,"")}static parseTrackName(e){let t=FM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);BM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=i(o.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[t++]=i[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=n.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Mt.Composite=Pd;Mt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Mt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Mt.prototype.GetterByBindingType=[Mt.prototype._getValue_direct,Mt.prototype._getValue_array,Mt.prototype._getValue_arrayElement,Mt.prototype._getValue_toArray];Mt.prototype.SetterByBindingTypeAndVersioning=[[Mt.prototype._setValue_direct,Mt.prototype._setValue_direct_setNeedsUpdate,Mt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_array,Mt.prototype._setValue_array_setNeedsUpdate,Mt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_arrayElement,Mt.prototype._setValue_arrayElement_setNeedsUpdate,Mt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Mt.prototype._setValue_fromArray,Mt.prototype._setValue_fromArray_setNeedsUpdate,Mt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Bw=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var za=new H;function zn(n,e,t,i,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;za.copy(e),za[i]=0,za.normalize();let c=.5*a/(a+o),h=1-za.angleTo(n)/l;return Math.sign(za[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ci=class extends qt{constructor(e=1,t=1,i=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,i/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new H,l=new H,c=new H(e,t,i).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,f=h.length/6,g=new H,y=.5/s;for(let m=0,p=0;m<h.length;m+=3,p+=2)switch(o.fromArray(h,m),l.copy(o),l.x-=Math.sign(l.x)*y,l.y-=Math.sign(l.y)*y,l.z-=Math.sign(l.z)*y,l.normalize(),h[m+0]=c.x*Math.sign(o.x)+l.x*r,h[m+1]=c.y*Math.sign(o.y)+l.y*r,h[m+2]=c.z*Math.sign(o.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/f)){case 0:g.set(1,0,0),d[p+0]=zn(g,l,"z","y",r,i),d[p+1]=1-zn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[p+0]=1-zn(g,l,"z","y",r,i),d[p+1]=1-zn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[p+0]=1-zn(g,l,"x","z",r,e),d[p+1]=zn(g,l,"z","x",r,i);break;case 3:g.set(0,-1,0),d[p+0]=1-zn(g,l,"x","z",r,e),d[p+1]=1-zn(g,l,"z","x",r,i);break;case 4:g.set(0,0,1),d[p+0]=1-zn(g,l,"x","y",r,e),d[p+1]=1-zn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[p+0]=zn(g,l,"x","y",r,e),d[p+1]=1-zn(g,l,"y","x",r,t);break}}};function zM(){let n=document.createElement("canvas");n.width=1024,n.height=512;let e=n.getContext("2d"),t=12,i=n.width/t,s=["#d9944f","#cf8846","#e0a05a","#c98240","#d68f4c"];for(let a=0;a<t;a++){e.fillStyle=s[a*7%s.length],e.fillRect(a*i,0,i,n.height),e.strokeStyle="rgba(120,60,20,.18)",e.lineWidth=2;for(let l=0;l<7;l++){e.beginPath();let c=a*i+8+Math.random()*(i-16);e.moveTo(c,0);for(let h=0;h<=n.height;h+=32)e.lineTo(c+Math.sin(h/60+l)*4,h);e.stroke()}e.fillStyle="rgba(70,30,10,.55)",e.fillRect(a*i,0,3,n.height);let o=a*173%n.height;e.fillRect(a*i,o,i,3)}let r=new ai(n);return r.colorSpace=Xt,r.wrapS=r.wrapT=Ca,r.anisotropy=4,r}function HM(){let n=document.createElement("canvas");n.width=512,n.height=512;let e=n.getContext("2d"),t=e.createRadialGradient(256,200,40,256,256,380);t.addColorStop(0,"#6d48d6"),t.addColorStop(.55,"#3f2196"),t.addColorStop(1,"#1d0f52"),e.fillStyle=t,e.fillRect(0,0,512,512);for(let s=0;s<90;s++)e.fillStyle=Math.random()<.25?"#ffe9a8":"#ffffff",e.globalAlpha=.4+Math.random()*.6,e.beginPath(),e.arc(Math.random()*512,Math.random()*420,Math.random()*2+.6,0,Math.PI*2),e.fill();e.globalAlpha=1;let i=new ai(n);return i.colorSpace=Xt,i}function VM(){let n=document.createElement("canvas");n.width=n.height=64;let e=n.getContext("2d"),t=e.createRadialGradient(32,32,2,32,32,32);return t.addColorStop(0,"rgba(255,240,190,1)"),t.addColorStop(.3,"rgba(255,210,120,.6)"),t.addColorStop(1,"rgba(255,200,100,0)"),e.fillStyle=t,e.fillRect(0,0,64,64),new ai(n)}function mm(n,e,t){let i=new Ai(n,e,t*10,1),s=i.attributes.position;for(let r=0;r<s.count;r++){let a=(s.getX(r)+n/2)/n;s.setZ(r,Math.sin(a*t*Math.PI*2)*.16)}return i.computeVertexNormals(),i}function GM(n=.32,e=.14){let t=new oi;for(let i=0;i<10;i++){let s=i/10*Math.PI*2-Math.PI/2,r=i%2?e:n;t[i?"lineTo":"moveTo"](Math.cos(s)*r,-Math.sin(s)*r)}return t}function gm(n){let e={hangs:[],crowd:[],beams:[],bulbs:[]};n.background=new et(1444910);let t=zM();t.repeat.set(1.6,1.2);let i=new je(new Ai(14,7.5),new Mn({map:t,roughness:.55}));i.rotation.x=-Math.PI/2,i.position.set(0,0,-.4),i.receiveShadow=!0,n.add(i);let s=new je(new qt(14,.55,.3),new Mn({color:8011031,roughness:.6}));s.position.set(0,-.28,3.35),n.add(s);let r=new je(new qt(14,.08,.34),new Mn({color:16763197,roughness:.3,metalness:.4}));r.position.set(0,0,3.36),n.add(r);let a=new je(new Ai(40,20),new Mn({color:853792}));a.rotation.x=-Math.PI/2,a.position.set(0,-.55,10),n.add(a);let o=new je(new Ai(16,10),new Mn({map:HM(),roughness:.9,emissive:1707322,emissiveIntensity:.5}));o.position.set(0,4.2,-4.1),o.receiveShadow=!0,n.add(o);let l=(x,C,T,E,L)=>{let te=new Qe;te.position.set(C,T+L,E);let v=new je(new yt(.012,.012,L,4),new zt({color:15658751,transparent:!0,opacity:.6}));v.position.y=-L/2,te.add(v),x.position.y=-L,te.add(x),te.userData.ph=Math.random()*6,n.add(te),e.hangs.push(te)},c=new oi;c.absarc(0,0,.55,0,Math.PI*2,!1);let h=new oi;h.absarc(.24,.16,.48,0,Math.PI*2,!0),c.holes.push(h);let u=new je(new Qi(c,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03}),new Mn({color:16766826,emissive:16759101,emissiveIntensity:.6,roughness:.4}));l(u,-3.4,3.4,-3.3,1.6);let d=new Mn({color:16769658,emissive:16763197,emissiveIntensity:.5,roughness:.4});for(let[x,C,T,E]of[[-1.8,4.1,.9,.8],[2.2,3.9,1.2,1],[3.6,4.3,.7,.7],[-4.6,4.4,.6,.6]]){let L=new je(new Qi(GM(),{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),d);L.scale.setScalar(E),l(L,x,C,-3.4,T)}let f=new Mn({color:11736364,roughness:.75,side:Bt});for(let x of[-1,1]){let C=new je(mm(3.2,8,7),f);C.position.set(x*5.6,4,.6),C.rotation.y=x*-.25,C.castShadow=!0,n.add(C);let T=new je(new vt(.42,.07,10,24),new Mn({color:16763197,roughness:.3,metalness:.5}));T.position.set(x*4.35,1.9,.75),T.rotation.set(Math.PI/2,0,x*.3),T.scale.set(1,1,.6),n.add(T)}let g=new je(mm(15,1.5,22),f);g.position.set(0,5.25,1.6),n.add(g);let y=new je(new qt(15,.1,.12),new Mn({color:16763197,emissive:9067008,emissiveIntensity:.3,metalness:.4,roughness:.3}));y.position.set(0,4.5,1.7),n.add(y);let m=VM();for(let x=0;x<9;x++){let C=-4.4+x*1.1,T=new je(new ot(.09,12,8),new zt({color:16774064}));T.position.set(C,.08,3.1),n.add(T);let E=new Rs(new ji({map:m,transparent:!0,blending:Mr,depthWrite:!1}));E.scale.set(.9,.9,1),E.position.copy(T.position),n.add(E),e.bulbs.push(E)}let p=new Ut;p.position.set(0,1.2,0),n.add(p);for(let x of[-1,1]){let C=new Al(16773583,1.1,0,.36,.55,0);C.position.set(x*3.6,7.2,3.2),C.target=p,x<0&&(C.castShadow=!0,C.shadow.mapSize.set(1024,1024),C.shadow.bias=-4e-4),n.add(C);let T=8.2,E=new je(new Yt(1.5,T,32,1,!0),new zt({color:16773583,transparent:!0,opacity:.075,blending:Mr,depthWrite:!1,side:Bt}));E.geometry.translate(0,-T/2,0),E.position.copy(C.position),E.lookAt(p.position),E.rotateX(-Math.PI/2),n.add(E),e.beams.push(E)}let M=new je(new Rr(1.7,40),new zt({map:m,transparent:!0,opacity:.55,blending:Mr,depthWrite:!1}));M.rotation.x=-Math.PI/2,M.position.set(0,.012,.1),n.add(M);let _=new Mn({color:1313326,roughness:1});for(let x=0;x<11;x++){let C=new Qe,T=.85+Math.random()*.35,E=new je(new Ei(.42,.5,4,12),_);E.position.y=.2,C.add(E);let L=new je(new ot(.34,16,12),_);L.position.y=1,C.add(L),C.scale.setScalar(T),C.position.set(-5.5+x*1.1+(Math.random()-.5)*.3,-1+x%2*.12,4.4+x%2*.35),C.userData.base=C.position.y,C.userData.ph=Math.random()*6,n.add(C),e.crowd.push(C)}return e.cheerUntil=0,e.update=(x,C)=>{for(let E of e.hangs)E.rotation.z=Math.sin(x*1.1+E.userData.ph)*.08;e.beams.forEach((E,L)=>{E.material.opacity=.065+Math.sin(x*1.3+L)*.015}),e.bulbs.forEach((E,L)=>{E.material.opacity=.75+Math.sin(x*3+L*1.7)*.25});let T=C<e.cheerUntil;for(let E of e.crowd){let L=T?Math.abs(Math.sin(x*9+E.userData.ph))*.35:Math.sin(x*1.4+E.userData.ph)*.02;E.position.y=E.userData.base+L}},e}var Rn=Math.PI/180,ym=1/112,WM=1906248,kr;function $M(){return kr||(kr=new gl(new Uint8Array([140,205,240]),3,1,Pl),kr.minFilter=kr.magFilter=an,kr.needsUpdate=!0),kr}var Us=(n,e={})=>new Ml({color:n,gradientMap:$M(),...e}),Sm=n=>new Bn({uniforms:{t:{value:n},color:{value:new et(WM)}},vertexShader:"uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }",side:on}),qd=Sm(.026),Tm=Sm(.016),vm=new Set([qd,Tm]);function ye(n,e,{outline:t=!0,thin:i=!1,mat:s}={}){let r=new Qe,a=new je(n,s||Us(e));return a.castShadow=!0,r.add(a),t&&r.add(new je(n,i?Tm:qd)),r.userData.mesh=a,r}var Te=(n,e,t,i)=>(n.position.set(e,t,i),n),wt=(n,e,t,i)=>(n.rotation.set(e,t,i),n),St=(n,e,t,i)=>(n.scale.set(e,t,i),n),Dl=(n,e=32,t=0,i=Math.PI*2)=>{let s=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new Ua(s.map(([r,a])=>new Me(r,a)),e,t,i)},Wd=new Map;function XM(n,e){if(Wd.has(n))return Wd.get(n);let t=document.createElement("canvas");t.width=t.height=512;let i=new ai(t);i.colorSpace=Xt;let s=new Image;return s.onload=()=>{t.getContext("2d").drawImage(s,0,0,512,512),i.needsUpdate=!0},s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${e}</svg>`),Wd.set(n,i),i}var $d=new Map;function xm(n){if($d.has(n))return $d.get(n);let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d");t.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',t.textAlign="center",t.textBaseline="middle",t.fillText(n,64,72);let i=new ai(e);return i.colorSpace=Xt,$d.set(n,i),i}var Ke=.62,Yd=1,Nt={lon:.34,lat:.06,r:.155},_m=n=>50+n/Yd*50,bm=n=>50-n/Yd*50;function qM(n,{eyes3D:e=!0,wink:t=!1,extras:i=[],noMouth:s=!1}={}){let r=_m(-Nt.lon),a=_m(Nt.lon),o=bm(Nt.lat),l='fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"',c="";if((i.includes("blush")||["happy","love","cheeky"].includes(n))&&(c+=`<ellipse cx="${r-4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${a+4}" cy="${o+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`),i.includes("freckles"))for(let[x,C]of[[-6,12],[-2,15],[-9,15],[6,12],[2,15],[9,15]])c+=`<circle cx="${(x<0?r:a)+x}" cy="${o+C}" r=".9" fill="#b0643a"/>`;let u=x=>`<path d="M${x-8} ${o+3} Q${x} ${o-8} ${x+8} ${o+3}" ${l} stroke-width="3.6"/>`,d=x=>`<path d="M${x-8} ${o} Q${x} ${o+6} ${x+8} ${o}" ${l} stroke-width="3.4"/>`,f=x=>`<path d="M${x} ${o+7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;e?t&&(c+=u(r)):n==="love"?c+=f(r)+f(a):n==="sleepy"?c+=d(r)+d(a):c+=u(r)+u(a);let g=o-17,y=x=>`<path d="${x}" ${l} stroke-width="3.2"/>`,m={angry:`M${r-9} ${g+1} L${r+7} ${g+7} M${a+9} ${g+1} L${a-7} ${g+7}`,sad:`M${r-8} ${g+6} L${r+7} ${g} M${a+8} ${g+6} L${a-7} ${g}`,scared:`M${r-8} ${g+2} Q${r} ${g-5} ${r+7} ${g-1} M${a+8} ${g+2} Q${a} ${g-5} ${a-7} ${g-1}`,surprised:`M${r-8} ${g-2} Q${r} ${g-8} ${r+8} ${g-2} M${a-8} ${g-2} Q${a} ${g-8} ${a+8} ${g-2}`,cheeky:`M${r-8} ${g+2} Q${r} ${g-2} ${r+8} ${g+3} M${a-8} ${g-3} Q${a} ${g-8} ${a+8} ${g-2}`,neutral:`M${r-7} ${g+1} Q${r} ${g-3} ${r+7} ${g+2} M${a-7} ${g-1} Q${a} ${g-5} ${a+7} ${g}`};c+=y(m[n]||m.neutral);let p=bm(-.36),M=x=>`<rect x="45.6" y="${x}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${x}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`,_={neutral:`<path d="M41 ${p-2} Q50 ${p+4} 59 ${p-3}" ${l} stroke-width="2.8"/>${M(p)}`,happy:`<path d="M37 ${p-4} Q50 ${p+16} 63 ${p-4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${M(p-3.6)}<path d="M44 ${p+6} Q50 ${p+2} 56 ${p+6} Q50 ${p+10} 44 ${p+6}Z" fill="#ff7b93"/>`,sad:`<path d="M41 ${p+4} Q50 ${p-4} 59 ${p+4}" ${l} stroke-width="2.8"/><path d="M${r-3} ${o+9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,angry:`<path d="M40 ${p-2} H60 Q61 ${p+7} 50 ${p+7} Q39 ${p+7} 40 ${p-2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${p+2.5} H59.5 M45 ${p-2} v9 M50 ${p-2} v9 M55 ${p-2} v9" stroke="#1d1648" stroke-width="1.2"/>`,surprised:`<ellipse cx="50" cy="${p+2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,scared:`<path d="M38 ${p+2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${l} stroke-width="2.4"/><path d="M${a+12} ${o-10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,sleepy:`<ellipse cx="51" cy="${p+1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${p+2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${o-16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${o-24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,cheeky:`<path d="M40 ${p-2} Q50 ${p+7} 60 ${p-3}" ${l} stroke-width="2.8"/><path d="M50 ${p+2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,love:`<path d="M40 ${p-3} Q50 ${p+9} 60 ${p-3}" ${l} stroke-width="2.8"/>`};return s||(c+=_[n]||_.neutral,i.includes("fangs")&&(c+=`<path d="M44 ${p+1} l1.6 4 l1.6 -4 M53 ${p+1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`)),c}var Mm=(n,e)=>new ot(n,40,28,Math.PI/2-e,e*2,Math.PI/2-e,e*2),Ul=(n,e,t=Ke)=>new H(t*Math.sin(n)*Math.cos(e),t*Math.sin(e),t*Math.cos(n)*Math.cos(e)),YM={point:[-75,0],mouth:[-30,-100],cross:[-45,-60],head:[-15,-40],hip:[10,0]},ZM={point:[20,0],mouth:[10,25],cross:[16,-70],wave:[128,22]},wm=.8,KM={sit:{y:.6,legs:[[-88,88,6],[-88,88,6]]},squat:{y:.46,legs:[[-115,135,26],[-115,135,26]]},kneel:{y:.5,legs:[[0,95,4],[0,95,4]]},crossleg:{y:.34,legs:[[-80,0,52,-125],[-80,0,52,-125]]},lie:{x:.45,y:.5},crawl:{x:0,y:.54},handstand:{y:2.12}},JM={front:0,l45:-Math.PI/4,r45:Math.PI/4,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},Xd=class extends bn{constructor(e,t,i){super(),this.c=e,this.a=t,this.b=i}getPoint(e,t=new H){return this.c.getPoint(this.a+(this.b-this.a)*e,t)}};function Nl(n,e={}){let t;try{t=new fl({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(S){return console.warn("[puppet3d] WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng, d\xF9ng b\u1EA3n 2D",S),Hf(n)}n.innerHTML="";let i=t.domElement;i.className="pp pp3d",i.setAttribute("role","img"),i.setAttribute("aria-label","Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u"),n.appendChild(i),t.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),t.outputColorSpace=Xt;let s=new pl,r=new rn(30,1,.1,100),a=e.stage?{y:2,z:8.8,ly:1.5,fov:34}:{y:1.75,z:7.4,ly:1.38,fov:30};r.fov=a.fov,r.position.set(0,a.y,a.z),r.lookAt(0,a.ly,0),s.add(new Sl(16777215,14271231,e.stage?.6:1.3)),s.add(new Cl(16777215,e.stage?.15:.5));let o=new El(16777215,e.stage?.8:1.9);o.position.set(3,6,6),s.add(o);let l=e.stage?gm(s):null;l&&(t.shadowMap.enabled=!0,t.shadowMap.type=Id);let c=new je(new Rr(.8,32),new zt({color:1906248,transparent:!0,opacity:l?.12:.18,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.01,s.add(c);let h=new Qe;h.add(Te(ye(new yt(.5,.5,.13,28),16747039),0,.42,0));for(let[S,k]of[[-.32,-.22],[.32,-.22],[-.32,.22],[.32,.22]])h.add(Te(ye(new yt(.05,.05,.42,8),1906248,{outline:!1}),S,.21,k));h.position.z=-.2,s.add(h);let u=new Qe;s.add(u);let d=new Qe;d.rotation.order="YXZ",u.add(d);let f=new Qe;d.add(f);let g=new Qe;g.rotation.order="YXZ",g.position.y=.12,f.add(g);let y=new Qe;f.add(y);let m=new Qe;g.add(m);let p=new Qe;p.position.set(0,.62,-.28),g.add(p);let M=new Qe;M.rotation.order="YXZ",M.position.y=.66,g.add(M);let _=new Qe;_.rotation.order="YXZ",M.add(_);let x=new Qe;x.position.y=Ke*.9,_.add(x);let C=ye(new ot(Ke,48,36),16777215);St(C,1.06,.95,1),x.add(C);let T=new Qe;T.scale.set(1.06,.95,1),x.add(T);let E=new Qe;x.add(E);for(let S of[-1,1]){let k=ye(new ot(.13,16,12),16777215);St(k,.55,.9,.7),E.add(Te(k,S*Ke*1.03,-.04,0))}let L=ye(new ot(.085,18,14),16777215,{thin:!0});St(L,1.1,.9,.9);let te=Ul(0,-.14,Ke*.99);T.add(Te(L,te.x,te.y,te.z));let v=new zt({transparent:!0,depthWrite:!1}),w=new je(Mm(Ke+.006,Yd),v);w.renderOrder=1,T.add(w);let Y=new zt({transparent:!0,depthWrite:!1}),z=new je(Mm(Ke+.035,1.12),Y);z.visible=!1,z.renderOrder=2,T.add(z);let R=[];for(let S of[-1,1]){let k=Ul(S*Nt.lon,Nt.lat,Ke*.93),X=new Qe;X.position.copy(k),X.lookAt(k.clone().multiplyScalar(3)),T.add(X);let O=new Qe;O.scale.set(1,1.08,.62),X.add(O);let B=ye(new ot(Nt.r,28,20),16777215,{thin:!0});O.add(B);let D=new je(new ot(Nt.r*.44,18,14),new zt({color:1906248}));D.scale.z=.5,O.add(D);let se=new je(new ot(Nt.r*.13,10,8),new zt({color:16777215}));O.add(se);let Z=new Qe;O.add(Z);let be=ye(new ot(Nt.r*1.08,28,14,0,Math.PI*2,0,Math.PI/2),16777215,{thin:!0});Z.add(be),R.push({g:X,inner:O,white:B,pupil:D,shine:se,lidPivot:Z,lid:be,sx:S,px:0,py:0,wx:0,wy:0})}let N=new Qe;{let S=Ul(0,-.36,Ke*.985);N.position.copy(S),N.lookAt(S.clone().multiplyScalar(3));let k=ye(new ot(.13,24,16),5903396,{thin:!0});k.scale.set(1.25,1,.35),N.add(k);let X=new je(new ot(.08,16,12),new zt({color:16743315}));X.scale.set(1.2,.6,.3),X.position.set(0,-.06,.03),N.add(X);let O=new je(new qt(.12,.045,.02),new zt({color:16777215}));O.position.set(0,.095,.045),N.add(O),N.userData.hole=k,N.visible=!1,T.add(N)}let U=!1,K=0,V=new Qe;T.add(V);let _e=new Qe;x.add(_e);let ge=new Rs(new ji({transparent:!0,depthTest:!1,depthWrite:!1}));ge.scale.set(.5,.5,1),ge.position.set(.66,Ke+.5,.3),ge.visible=!1,x.add(ge);let W=Dl([[0,.72],[.18,.71],[.3,.64],[.38,.5],[.43,.3],[.455,.12],[.46,-.02]],36),re=ye(W,16777215);g.add(re);let Ne=Dl([[.462,.14],[.47,0],[.45,-.12],[.38,-.2],[.22,-.25],[0,-.26]],36),ie=ye(Ne,16777215);f.add(ie);let de=ye(new yt(.13,.15,.16,16),16777215,{thin:!0});Te(de,0,.72,0),g.add(de);let xe={},Ee=.32,Xe=.3,We=.3,He=.28;for(let S of["L","R"]){let k=S==="L"?-1:1,X=new Qe;X.rotation.order="ZXY",X.position.set(k*.36,.5,0),g.add(X);let O=new Qe;O.rotation.order="ZXY",O.position.y=-Ee,X.add(O);let B=new Qe;B.position.y=-Xe,O.add(B);let D=new Qe;D.position.y=-.1,B.add(D);let se=ye(new ot(.135,20,16),16777215,{thin:!0});St(se,1,1.1,.85),D.add(se);let Z=ye(new Ei(.045,.08,4,10),16777215,{thin:!0});Te(Z,-k*.12,.04,.03),Z.rotation.z=-k*.8,D.add(Z);let be=ye(new vt(.1,.035,8,18),16777215,{thin:!0});be.rotation.x=Math.PI/2,be.position.y=.08,D.add(be);let $e=new Rs(new ji({transparent:!0,depthWrite:!1}));$e.scale.set(.56,.56,1),$e.position.set(0,-.12,.2),$e.visible=!1,D.add($e),xe["arm"+S]=X,xe["fore"+S]=O,xe["wrist"+S]=B,xe["prop"+S]=$e,xe["hand"+S]={palm:se,thumb:Z,cuff:be}}for(let S of["L","R"]){let k=S==="L"?-1:1,X=new Qe;X.rotation.order="ZXY",X.position.set(k*.2,-.08,0),f.add(X);let O=new Qe;O.rotation.order="ZXY",O.position.y=-We,X.add(O);let B=new Qe;B.position.y=-He,O.add(B);let D=ye(new ot(.2,22,16),16777215);St(D,.95,.62,1.35),Te(D,k*.02,-.08,.08),B.add(D);let se=ye(new yt(.17,.19,.05,20),16777215,{thin:!0});St(se,1,1,1.4),Te(se,k*.02,-.18,.09),B.add(se),xe["leg"+S]=X,xe["shin"+S]=O,xe["ankle"+S]=B,xe["shoe"+S]=D,xe["sole"+S]=se}let Ge=new Qe;Ge.position.set(0,.02,-.4),f.add(Ge);let ae={},I=(S,k)=>{let X=Us(16777215),O=new je(new Ls(new Ps(new H,new H(0,-.1,0),new H(0,-.2,0)),4,k,8),X);O.castShadow=!0;let B=new je(O.geometry,qd);u.add(O,B),ae[S]={m:O,o:B,r:k,mat:X,len:1}};for(let S of["L","R"])I("arm"+S,.082),I("sleeve"+S,.118),I("leg"+S,.105),I("pant"+S,.14);let ce=uo.tron,pe={skin:"tron",head:""},ve="",Ae=!1,Fe=[],Re=(S,k)=>S.userData.mesh.material.color.set(k);function P(S){let k={skin:uo[S?.skin]?S.skin:"tron",head:S?.head||""},X=k.skin+"|"+k.head;if(X===ve)return;ve=X,pe=k,ce=uo[pe.skin];let O=ce.extra||{};for(let B of[C,L,de,...E.children])Re(B,ce.skin);for(let B of R)Re(B.lid,ce.skin);Re(re,O.aodai||ce.top),Re(ie,O.dress||ce.bottom);for(let B of["L","R"]){let D=ce.gloves||ce.skin;Re(xe["hand"+B].palm,D),Re(xe["hand"+B].thumb,D),Re(xe["hand"+B].cuff,ce.gloves?ce.gloves:ce.sleeve>=.95?O.coat||ce.top:ce.skin),xe["hand"+B].cuff.visible=!!ce.gloves||ce.sleeve>=.95,Re(xe["shoe"+B],ce.shoes),Re(xe["sole"+B],"#ffffff"),ae["arm"+B].mat.color.set(ce.gloves&&ce.sleeve>=.95?O.coat||ce.top:ce.arms||ce.skin),ae["sleeve"+B].mat.color.set(O.coat||O.aodai||ce.top),ae["sleeve"+B].len=Math.max(.12,ce.sleeve??.3),ae["leg"+B].mat.color.set(ce.legs||ce.skin),ae["pant"+B].mat.color.set((O.aodai,ce.bottom)),ae["pant"+B].len=O.dress?.001:Math.max(.12,ce.pants??1)}De(),pe.head?b(pe.head):z.visible=!1,Se="",Ye()}function b(S){let k=new Image;/^https?:/.test(S)&&(k.crossOrigin="anonymous"),k.onload=()=>{try{let X=document.createElement("canvas");X.width=X.height=256;let O=X.getContext("2d");O.beginPath(),O.arc(128,128,124,0,Math.PI*2),O.clip();let B=Math.min(k.width,k.height);O.drawImage(k,(k.width-B)/2,(k.height-B)/2,B,B,0,0,256,256);let D=new ai(X);D.colorSpace=Xt,Y.map?.dispose(),Y.map=D,Y.needsUpdate=!0,z.visible=!0,Se="",Ye()}catch{z.visible=!1}},k.onerror=()=>{z.visible=!1},k.src=S}function q(S){for(;S.children.length;)S.children.pop().traverse(X=>{X.isMesh&&!vm.has(X.material)&&(X.geometry.dispose(),X.material.dispose())})}let J=(S,k,X={})=>ye(new ot(S,24,18),k,X);function le(S,k=1.15,X=-.3,O=1.07,B=2.1){let D=new Qe;return D.add(wt(ye(new ot(Ke*O,36,20,0,Math.PI*2,0,k),S),X,0,0)),D.add(ye(new ot(Ke*(O-.012),36,20,Math.PI,Math.PI,0,B),S)),D}function oe(S,k){let X=new Qe,O=B=>(X.add(B),B);switch(S){case"ahoge":{O(le(k)),O(wt(St(Te(J(.3,k),.14,.43,.36),1.25,.42,.75),.4,0,-.35)),O(wt(St(Te(J(.3,k),-.32,.38,.28),.65,.45,.7),.3,0,.5));let B=ye(new vt(.15,.04,8,18,Math.PI*1.25),k,{thin:!0});Te(B,.05,Ke+.1,0),B.rotation.z=.5,B.name="ahoge",O(B);break}case"short":O(le(k,1.05,-.25)),O(wt(St(Te(J(.3,k),0,.45,.32),1.5,.35,.7),.45,0,0));break;case"spiky":{O(le(k,1.1,-.25));for(let B=0;B<7;B++){let D=(B/6-.5)*2.2,se=ye(new Yt(.12,.34,10),k,{thin:!0});Te(se,Math.sin(D)*.42,.52+Math.cos(D)*.1,Math.cos(D)*.12-.05),se.rotation.set(-.3,0,-D*.55),O(se)}break}case"messy":{O(le(k,1,-.2));for(let[B,D,se,Z]of[[-.5,.25,0,.22],[.5,.25,0,.22],[-.3,.52,-.1,.24],[.3,.52,-.1,.24],[0,.62,0,.24],[-.55,-.05,-.15,.18],[.55,-.05,-.15,.18],[0,.4,-.45,.26]])O(Te(J(Z,k),B,D,se));break}case"slick":O(le(k,1.15,-.45)),O(wt(St(Te(J(.3,k),.05,.47,.25),1.55,.42,1),.2,0,.12));break;case"bob":case"long":case"wavy":case"pigtails":case"bun":{if(X.add(ye(new ot(Ke*1.1,36,20,Math.PI/2+.8,Math.PI*2-1.6,0,S==="long"||S==="wavy"?2.35:2),k)),O(wt(St(Te(J(.3,k),0,.42,.38),1.6,.42,.7),.4,0,0)),O(le(k,1,-.15,1.09)),S==="long"&&O(St(Te(J(.42,k),0,-.45,-.32),1.25,1.2,.6)),S==="wavy")for(let B of[-1,1])for(let D=0;D<3;D++)O(Te(J(.17,k),B*(.58-D*.05),-.25-D*.2,-.05-D*.05));if(S==="pigtails")for(let B of[-1,1])O(Te(J(.24,k),B*.72,.2,-.12)),O(Te(J(.08,16727435,{thin:!0}),B*.6,.36,-.1));S==="bun"&&O(Te(J(.26,k),0,.42,-.5));break}case"mohawk":for(let B=0;B<5;B++){let D=ye(new Yt(.11,.4,8),k,{thin:!0});Te(D,0,.6-Math.abs(B-2)*.05,.3-B*.2),D.rotation.x=-.3-B*.25,O(D)}break;default:break}return X}function Be(S,k){let X=new Qe,O=D=>(X.add(D),D),B=k.hatColor||"#ff3d4f";switch(S){case"nonla":O(Te(ye(new Yt(1.05,.55,40,1,!0),15914122,{mat:Us(15914122,{side:Bt})}),0,Ke*.86,0));break;case"ninja":{O(le(B,1.55,-.65,1.04,2.4)),O(ye(new ot(Ke*1.035,36,16,Math.PI/2-1.3,2.6,1.82,.85),B));let D=ye(new vt(Ke*1.05,.06,10,40),16727375,{thin:!0});D.rotation.x=Math.PI/2-.12,D.position.y=.26,O(D);for(let se of[.2,-.15])O(wt(Te(ye(new qt(.08,.05,.45),16727375,{thin:!0}),.2+se,.2,-Ke-.14),.5,se,.3));break}case"bubble":{O(new je(new ot(Ke*1.42,32,24),new zt({color:12576511,transparent:!0,opacity:.18,depthWrite:!1})));let D=ye(new vt(.52,.09,10,30),14672885);D.rotation.x=Math.PI/2,D.position.y=-Ke*.92,O(D),O(Te(J(.06,16727375,{thin:!0}),.55,.7,0));break}case"helmet":{O(wt(ye(new ot(Ke*1.13,36,18,0,Math.PI*2,0,1.35),B),-.2,0,0)),O(wt(Te(ye(new yt(.03,.03,.5,6),1906248,{outline:!1}),0,-.48,.25),.5,0,Math.PI/2)),O(Te(St(J(.06,16777215,{thin:!0}),1,1,.5),0,.7,.28));break}case"fullhelmet":{O(wt(ye(new ot(Ke*1.15,36,20,0,Math.PI*2,0,1.55),B),-.35,0,0)),O(ye(new ot(Ke*1.14,36,20,Math.PI,Math.PI,0,2.3),B)),O(wt(St(Te(J(.3,1906248),0,.42,.42),1.4,.3,.6),.6,0,0));break}case"cap":case"capBack":{O(wt(ye(new ot(Ke*1.1,36,18,0,Math.PI*2,0,1.2),B),-.15,0,0));let D=ye(new yt(.42,.42,.04,28,1,!1,-Math.PI/2,Math.PI),B);S==="cap"?Te(D,0,.32,.45):(Te(D,0,.32,-.45),D.rotation.y=Math.PI),D.rotation.x+=S==="cap"?.12:-.12,O(D),S==="cap"&&O(Te(St(J(.08,16763197,{thin:!0}),1,1,.4),0,.55,.52));break}case"chef":{O(Te(ye(new yt(.5,.5,.36,28),16777215),0,.62,-.05));for(let[D,se]of[[-.25,0],[.25,0],[0,.2],[0,-.2],[0,0]])O(Te(J(.3,16777215),D,.98,se-.05));break}case"crown":{let D=ye(new yt(.38,.34,.22,10,1,!0),16763197,{mat:Us(16763197,{side:Bt})});Te(D,0,.66,0),O(D);for(let se=0;se<5;se++){let Z=se/5*Math.PI*2;O(Te(ye(new Yt(.08,.2,8),16763197,{thin:!0}),Math.sin(Z)*.34,.86,Math.cos(Z)*.34))}O(Te(J(.06,16727375,{thin:!0}),0,.68,.38));break}case"tiara":{let D=ye(new vt(.4,.03,8,30,Math.PI),16769162,{thin:!0});Te(D,0,.5,.1),D.rotation.x=-.4,O(D),O(Te(ye(new Yt(.08,.22,4),16769162,{thin:!0}),0,.72,.28)),O(Te(J(.05,16740277,{thin:!0}),0,.62,.36));break}case"tricorn":{O(wt(ye(new ot(Ke*1.08,32,16,0,Math.PI*2,0,1.15),B),-.1,0,0));let D=new oi;D.moveTo(-.95,0),D.quadraticCurveTo(-.7,.62,0,.7),D.quadraticCurveTo(.7,.62,.95,0),D.quadraticCurveTo(0,.18,-.95,0);let se=ye(new Qi(D,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),B);Te(se,0,.42,-.06),se.rotation.x=-.12,O(se),O(Te(St(J(.1,16777215,{thin:!0}),1,1,.35),0,.82,.1));let Z=ye(new vt(.06,.02,6,12),16763197,{outline:!1});Te(Z,0,.82,.14),O(Z);break}case"santa":{let D=ye(new Yt(.58,1,28),15217738);Te(D,.12,.92,-.08),D.rotation.z=-.45,O(D);let se=ye(new vt(.58,.12,12,30),16777215);se.rotation.x=Math.PI/2-.1,se.position.y=.48,O(se),O(Te(J(.14,16777215),.62,1.22,-.08));break}case"fire":{O(wt(ye(new ot(Ke*1.14,36,18,0,Math.PI*2,0,1.3),B),-.15,0,0));let D=ye(new yt(.85,.85,.05,32),B);D.position.set(0,.28,-.12),D.rotation.x=-.18,O(D),O(Te(St(J(.13,16763197,{thin:!0}),1,1.2,.35),0,.62,.48));break}case"band":{let D=ye(new vt(Ke*1.05,.065,10,40),B,{thin:!0});D.rotation.x=Math.PI/2-.15,D.position.y=.3,O(D);break}case"mirror":{let D=ye(new vt(Ke*1.05,.04,8,40),1906248,{thin:!0});D.rotation.x=Math.PI/2-.2,D.position.y=.3,O(D);let se=ye(new yt(.15,.15,.04,24),14674175);se.rotation.x=Math.PI/2-.2,se.position.set(0,.5,.52),O(se);break}case"turban":{let D=ye(new vt(Ke*.95,.13,12,36),B);D.rotation.x=Math.PI/2-.1,D.position.y=.32,O(D),O(le(B,.9,-.1,1.04));break}case"veil":{let D=new je(new ot(Ke*1.2,32,18,Math.PI/2+.95,Math.PI*2-1.9,.3,2.5),new zt({color:16777215,transparent:!0,opacity:.6,side:Bt,depthWrite:!1}));D.scale.set(1.05,1.15,1.1),D.position.y=-.12,O(D),O(Te(J(.08,16761564,{thin:!0}),-.35,.5,.25)),O(Te(J(.07,16777215,{thin:!0}),-.25,.56,.3));break}case"phones":{let D=ye(new vt(Ke*1.1,.05,8,30,Math.PI),B,{thin:!0});D.position.y=.05,O(D);for(let se of[-1,1]){let Z=ye(new yt(.2,.2,.14,22),B);Z.rotation.z=Math.PI/2,Z.position.set(se*Ke*1.05,.02,0),O(Z),O(Te(wt(ye(new yt(.12,.12,.02,18),3729568,{outline:!1}),0,0,Math.PI/2),se*Ke*1.13,.02,0))}break}case"scarfHead":{O(wt(ye(new ot(Ke*1.1,36,18,0,Math.PI*2,0,1.3),B),-.45,0,0)),O(wt(Te(ye(new Yt(.12,.3,10),B,{thin:!0}),0,.15,-.68),-2.2,0,0));break}case"beanie":{O(wt(ye(new ot(Ke*1.1,36,18,0,Math.PI*2,0,1.35),B),-.15,0,0));let D=ye(new vt(Ke*.98,.09,10,36),B);D.rotation.x=Math.PI/2-.15,D.position.y=.22,O(D),O(Te(J(.15,16777215),0,.82,-.05));break}case"hood":{let D=ye(new ot(Ke*1.16,40,24,Math.PI/2+.95,Math.PI*2-1.9,0,2.6),B);O(D),O(ye(new ot(Ke*1.16,40,20,0,Math.PI*2,0,.95),B));let se=ye(new vt(Ke*.86,.07,10,36),B);se.position.z=.42,se.scale.set(1,1.1,1),O(se);let Z=k.hood;for(let be of[-1,1])Z==="bear"&&(O(Te(J(.2,B),be*.5,.55,-.05)),O(Te(St(J(.11,15913641,{outline:!1}),1,1,.4),be*.52,.56,.1))),Z==="cat"&&O(wt(Te(ye(new Yt(.2,.36,4),B),be*.38,.7,0),0,0,-be*.4)),Z==="dog"&&O(wt(St(Te(J(.2,11036974),be*.66,.1,0),.7,1.6,.5),0,0,be*.3)),Z==="frog"&&(O(Te(J(.2,B),be*.3,.68,.1)),O(Te(J(.12,16777215,{thin:!0}),be*.3,.72,.24)),O(Te(J(.06,1906248,{outline:!1}),be*.3,.73,.34)));if(Z==="dino")for(let be=0;be<5;be++){let $e=ye(new Yt(.11,.26,4),16763197,{thin:!0}),it=.4-be*.45;Te($e,0,Math.cos(it)*.72,Math.sin(it)*.72),$e.rotation.x=it,O($e)}break}default:break}return X}function Pe(S,k){let X=new Qe,O=D=>(X.add(D),D),B=(D,se,Z=Ke)=>Ul(D,se,Z);for(let D of S||[]){if(D==="glasses"){for(let se of[-1,1]){let Z=B(se*Nt.lon,Nt.lat,Ke*1.12),be=ye(new vt(.19,.022,8,28),1906248,{outline:!1});Te(be,Z.x,Z.y,Z.z),be.lookAt(Z.clone().multiplyScalar(3)),O(be)}O(Te(ye(new yt(.018,.018,.2,6),1906248,{outline:!1}),0,Nt.lat*Ke*.95+.02,Ke*1.1)).rotation.z=Math.PI/2}if(D==="shades"){let se=ye(new Ci(.98,.24,.1,3,.05),1314862),Z=B(0,Nt.lat,Ke*1.06);Te(se,0,Z.y,Z.z),O(se),O(Te(St(J(.05,16777215,{outline:!1}),1.8,.6,.3),-.3,Z.y+.04,Z.z+.06))}if(D==="mustache"||D==="curly"){let se=k.hair==="#eeeef5"?"#eeeef5":"#2a1a14";for(let Z of[-1,1]){let be=B(Z*.12,-.24,Ke*1),$e=St(J(.1,se,{thin:!0}),1.5,.6,.6);if(Te($e,be.x,be.y,be.z),$e.rotation.z=Z*.3,O($e),D==="curly"){let it=ye(new vt(.06,.025,6,12,Math.PI*1.5),se,{thin:!0});Te(it,be.x+Z*.14,be.y+.05,be.z-.02),it.rotation.z=Z>0?0:Math.PI,O(it)}}}if(D==="beard"){let se=k.beard||"#eeeef5",Z=ye(new ot(Ke*.82,32,18,Math.PI/2-1.1,2.2,1.85,1.05),se);Z.position.set(0,-.06,.12),O(Z),O(St(Te(J(.26,se),0,-.62,.32),1.2,.9,.7))}if(D==="patch"){let se=B(Nt.lon,Nt.lat,Ke*1.06),Z=ye(new yt(.17,.17,.04,20),1314862,{thin:!0});Te(Z,se.x,se.y,se.z),Z.lookAt(se.clone().multiplyScalar(3)),Z.rotateX(Math.PI/2),O(Z)}}return X}function De(){q(V),q(m),q(p),q(y);let S=ce,k=S.extra||{},X=!!pe.head,O=S.hat==="hood";(!X||O)&&V.add(oe(S.hairStyle,S.hair)),S.hat&&V.add(Be(S.hat,S));let B=(S.face||[]).filter(Z=>["glasses","shades","mustache","curly","beard","patch"].includes(Z));X||V.add(Pe(B,S)),Fe=S.face||[],Ae=B.includes("shades")||X,E.visible=!O&&!["helmet","fullhelmet","ninja","fire","phones","scarfHead","beanie"].includes(S.hat);let D=Z=>(m.add(Z),Z),se=Z=>(y.add(Z),Z);if(k.dress&&(se(Te(ye(Dl([[.44,.12],[.5,-.05],[.62,-.3],[.7,-.45],[0,-.45]],36),k.dress),0,0,0)),se(Te(ye(new vt(.68,.035,8,40),k.dress,{thin:!0}),0,-.45,0)).rotation.x=Math.PI/2),k.aodai){for(let Z of[1,-1]){let be=ye(new Ci(.5,.62,.04,3,.02),k.aodai,{thin:!0});Te(be,0,-.36,Z*.37),be.rotation.x=Z*.28,D(be)}D(Te(ye(new yt(.15,.16,.12,18),k.aodai,{thin:!0}),0,.72,0))}if(k.coat){let Z=ye(Dl([[.34,.66],[.44,.5],[.49,.28],[.51,.05],[.54,-.2],[.57,-.45]],36,Math.PI/2+.42,Math.PI*2-.84),k.coat,{outline:!1,mat:Us(k.coat,{side:Bt})});D(Z);for(let be of[-1,1])D(wt(Te(ye(new qt(.16,.3,.03),k.coat,{thin:!0}),be*.2,.52,.36),-.5,0,be*.5))}if(k.vest)for(let Z of[-1,1])D(wt(Te(ye(new qt(.2,.62,.05),k.vest,{thin:!0}),Z*.27,.32,.4),.05,Z*.4,0));if(k.apron){D(Te(ye(new Ci(.56,.78,.04,3,.02),k.apron),0,.12,.45)).rotation.x=-.1;let Z=ye(new vt(.3,.02,6,24,Math.PI),k.apron,{thin:!0});Z.position.set(0,.5,.28),Z.rotation.x=-.6,D(Z)}if(k.tie&&(D(wt(Te(ye(new qt(.1,.36,.04),k.tie,{thin:!0}),0,.46,.38),-.2,0,0)),D(Te(ye(new Yt(.07,.1,4),k.tie,{thin:!0}),0,.25,.43)).rotation.x=Math.PI),k.scarf){let Z=ye(new vt(.2,.08,10,24),k.scarf);Z.rotation.x=Math.PI/2,Z.position.y=.68,D(Z),D(wt(Te(ye(new Ci(.13,.32,.05,2,.02),k.scarf,{thin:!0}),.12,.5,.3),-.35,0,.25))}if(k.collar){let Z=ye(new yt(.45,.22,.4,24,1,!0,Math.PI*.75,Math.PI*1.5),k.collar,{mat:Us(k.collar,{side:Bt})});Z.position.set(0,.86,-.04),D(Z)}if(k.pack&&D(Te(ye(new Ci(.56,.6,.28,3,.1),k.pack),0,.32,-.44)),k.box&&(D(Te(ye(new Ci(.82,.74,.5,3,.06),k.box),0,.42,-.62)),D(Te(ye(new qt(.4,.06,.02),16777215,{outline:!1}),0,.5,-.36))),k.belly&&D(St(Te(J(.3,k.belly,{outline:!1}),0,.2,.33),1,1.15,.45)),k.chain){let Z=ye(new vt(.24,.025,8,30),16763197,{thin:!0});Z.position.set(0,.56,.18),Z.rotation.x=Math.PI/2-.9,D(Z),D(Te(J(.06,16763197,{thin:!0}),0,.37,.4))}if(k.star){let Z=new oi;for(let be=0;be<10;be++){let $e=be/10*Math.PI*2-Math.PI/2,it=be%2?.07:.16;Z[be?"lineTo":"moveTo"](Math.cos($e)*it,-Math.sin($e)*it)}D(Te(ye(new Qi(Z,{depth:.04,bevelEnabled:!1}),k.star,{thin:!0}),0,.36,.42))}if(k.badge&&(D(Te(ye(new yt(.07,.07,.03,16),16763197,{thin:!0}),.2,.42,.4)).rotation.x=Math.PI/2),k.whistle&&(D(Te(ye(new Ei(.04,.08,4,8),14672885,{thin:!0}),-.16,.38,.42)).rotation.z=Math.PI/2),k.belt){let Z=ye(new vt(.455,.045,8,40),k.belt,{thin:!0});Z.rotation.x=Math.PI/2,Z.position.y=0,D(Z)}if(k.cape){let Z=ye(new yt(.4,.7,1.3,24,6,!0,Math.PI*.6,Math.PI*.8),k.cape,{mat:Us(k.cape,{side:Bt})});Z.position.set(0,-.62,.22),p.add(Z)}}let we=null,ne=null;function he(S){if(S===we)return;we=S,q(_e);let k=(X,O,B,D,se=0,Z=0)=>{X.position.set(O,B,D),X.rotation.set(Z,0,se),_e.add(X)};for(let X of[-1,1]){if(S==="dog"&&k(St(J(.2,13208402),.75,1.6,.45),X*.66,0,.05,X*.25),S==="cat"&&k(ye(new Yt(.2,.36,4),13208402),X*.38,.66,0,-X*.45),S==="bunny"){let O=ye(new Ei(.11,.5,6,12),16777215);k(O,X*.22,.95,-.05,-X*.18)}S==="mouse"&&k(ye(new yt(.26,.26,.06,24),12171721),X*.55,.5,-.05,0,Math.PI/2),S==="horns"&&k(ye(new Yt(.09,.32,12),15921382),X*.36,.66,0,-X*.55),S==="antenna"&&(k(ye(new yt(.02,.02,.45,6),1906248,{outline:!1}),X*.26,.82,0,-X*.35),k(J(.09,16763197),X*.35,1.02,0))}}function Oe(S){if(S!==ne){if(ne=S,q(Ge),S==="dog"){let k=new Ei(.08,.3,6,12);k.translate(0,.2,0);let X=ye(k,13208402);X.rotation.x=-.7,Ge.add(X)}if(S==="cat"&&Ge.add(ye(new Ls(new ka([new H(0,0,0),new H(0,.15,-.35),new H(0,.55,-.5),new H(.1,.8,-.35)]),24,.06,8),13208402)),S==="pig"){let k=ye(new vt(.1,.04,8,20,Math.PI*1.7),16753592);k.rotation.y=Math.PI/2,Ge.add(k)}if(S==="dino"){let k=ye(new Yt(.28,1,16),3129201);k.rotation.x=-Math.PI/2-.5,k.position.set(0,-.15,-.35),Ge.add(k)}}}let Se="",me={},qe={happy:!0,love:!0};function Ye(){let S=me.face||"neutral",k=z.visible,X=!k&&!Ae&&!qe[S],O=S==="cheeky";for(let D of R)D.g.visible=X&&!(O&&D.sx<0);let B=`${S}|${X}|${k}|${Fe.join(",")}|${Ae}|${U}`;B!==Se&&(Se=B,v.map=XM(B,k?"":qM(S,{eyes3D:X||Ae,wink:O,extras:Fe,noMouth:U})),v.needsUpdate=!0),w.visible=!k,L.visible=!k,k&&S!=="neutral"&&mo[S]?(ge.material.map=xm(mo[S]),ge.material.needsUpdate=!0,ge.visible=!0):ge.visible=!1}let ht=new Map;function F(S,k,X=.16,O=.72){let B=ht.get(S);return B||(B={v:0,x:k},ht.set(S,B)),B.v=(B.v+(k-B.x)*X)*O,B.x+=B.v,B.x}let Ie=S=>ht.get(S)?.v||0,ee=null,fe=null,ke=0;function Ue(S){let k=JSON.stringify({...me,fx:0})!==JSON.stringify({...S,fx:0});me={...S},k&&(ke=performance.now()),he(S.ears||null),Oe(S.tail||null);for(let X of["L","R"]){let O=S["prop"+X],B=xe["prop"+X];O&&po[O]?(B.material.map=xm(po[O]),B.material.needsUpdate=!0,B.visible=!0):B.visible=!1}S.fx&&S.fx.seq!==fe&&(fe=S.fx.seq,Date.now()-(S.fx.at||0)<4e3&&(ee={name:S.fx.name,t0:performance.now()})),Ye()}function at(S){let k={x:0,y:0,r:0};if(!S)return k;let X=/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(S);X&&(k.x=+X[1],k.y=+X[2]);let O=/rotate\(([-\d.]+)deg\)/.exec(S);return O&&(k.r=+O[1]),k}let Tt=new H,Zt=new H,ct=new H,Wt=new H,Pn=new H;function hi(S,k){return k.setFromMatrixPosition(S.matrixWorld),u.worldToLocal(k)}function Nr(S,k,X,O,B){Pn.copy(k).add(O).multiplyScalar(.5),Wt.copy(X).multiplyScalar(2).sub(Pn),Wt.lerp(X,.25);let D=new Ps(k.clone(),Wt.clone(),O.clone()),se=ae[S],Z=new Ls(D,16,se.r,10);se.m.geometry.dispose(),se.m.geometry=Z,se.o.geometry=Z;let be=ae[B];if(be.len<.01){be.m.visible=be.o.visible=!1;return}be.m.visible=be.o.visible=!0;let $e=new Ls(new Xd(D,0,Math.min(1,be.len)),10,be.r,10);be.m.geometry.dispose(),be.m.geometry=$e,be.o.geometry=$e}let mn=0,jn=0,Or=!0,Os=0,ns=performance.now()+2200,Fr=0,is=0,Br=0,zr=new ResizeObserver(()=>Xa());zr.observe(n);function Xa(){let S=n.getBoundingClientRect();if(!S.width||!S.height||S.width===mn&&S.height===jn)return;mn=S.width,jn=S.height,t.setSize(mn,jn,!1),r.aspect=mn/jn;let k=l?1.25:.75;r.position.z=mn/jn<k?a.z/Math.max(.5,mn/jn/k):a.z,r.updateProjectionMatrix()}function qa(S){if(!Or)return;if(!i.isConnected){j();return}Os=requestAnimationFrame(qa),Xa();let k=S/1e3,X=fa[me.body]||fa.stand,O=at(X.t),B=me.loop,D=(Ce,dt=0)=>Math.sin(k*Math.PI*2*Ce+dt),se=KM[me.body]||{},Z=se.x??O.x*ym,be=se.y??wm-O.y*ym,$e=-O.r*Rn,it=0,Kt=0,st=me.body==="crawl";st&&($e=0,Kt=68*Rn,it=-1),me.body==="lie"&&(it=.25);let ze=0,bt=U?F("talk",K,.45,.5):0;!B&&!ee&&(ze=Math.abs(D(.55))*.025),B==="walk"&&(ze=Math.abs(D(1.3))*.1,$e+=D(1.3)*.08),B==="run"&&(ze=Math.abs(D(2.4))*.22,Kt+=.25),B==="butt"&&(Z+=D(2.9)*.14,$e+=D(2.9)*.16,it+=D(2.9)*.2),B==="dance"&&($e+=D(1)*.2,Z+=D(1)*.12,ze=Math.abs(D(2))*.12),B==="shiver"&&(Z+=D(11)*.03),B==="row"&&($e+=D(.5)*.08),B==="flap"&&(ze=Math.abs(D(3))*.06);let rt=0,gn=0,Hn=0,Jt=0;if(ee){let Ce=(S-ee.t0)/1e3;if(ee.name==="jump")if(Ce<.95){let dt=Math.min(1,Math.max(0,(Ce-.12)/.7));rt=Math.sin(dt*Math.PI)*1.2,Jt=Ce<.12?-.18*Math.sin(Ce/.12*Math.PI):dt>=1?-.15*Math.sin((Ce-.82)/.13*Math.PI):.1*Math.sin(dt*Math.PI)}else ee=null;else if(ee.name==="spin")Ce<.9?(gn=(1-Math.pow(1-Ce/.9,3))*Math.PI*2,rt=Math.sin(Ce/.9*Math.PI)*.3):ee=null;else if(ee.name==="fall")Ce<1.8?Hn=Math.min(1,Ce/.35)*(Ce>1.4?(1.8-Ce)/.4:1)*1.45:ee=null;else if(ee.name==="bounce")if(Ce<1.1){let dt=Ce*Math.PI*3.6;rt=Math.abs(Math.sin(dt))*.32*(1-Ce/1.1),Jt=(Math.abs(Math.sin(dt))<.3?-.14:.06)*(1-Ce/1.1)}else ee=null}if(U){ze+=bt*.1;let Ce=Math.max(.06,Math.min(1,bt*1.6));N.scale.set(.8+Ce*.35,.2+Ce*1.1,1)}u.rotation.y=F("turn",JM[me.turn]??0,.12,.74);let Hr=F("hy",be+ze,.18,.7);d.position.set(F("hx",Z),Hr+rt,0),d.rotation.set(F("hrx",Kt),F("hry",it)+gn,F("hrz",$e)+Hn),Hn&&(d.position.x+=Math.sin(Hn)*.75);let At=ke?Math.exp(-(S-ke)/160)*Math.sin((S-ke)/45)*.07:0,Qn=Math.max(-.2,Math.min(.2,Ie("hy")*1.6+Jt+At)),rs=F("sq",Qn,.3,.6);f.scale.set(1-rs*.6,1+rs,1-rs*.6);let ln=0,as=0;ln=-at(X.torso).r*Rn,me.body==="bow"&&(as=.85),B==="run"&&(as+=.15);let Fs=B?1:1+D(.4)*.02;g.rotation.set(F("trx",as,.12,.74),0,F("trz",ln,.12,.74)),g.scale.set(1/Fs,Fs,1/Fs),h.visible=!!X.stool,p.rotation.x=F("cape",.15+Math.min(.9,Math.abs(Ie("hx"))*6+(B==="run"?.8:0)+(rt?.5:0))+D(.7)*.05,.1,.8);let Vr=-((Ac[me.head]??0)+(st?0:X.head||0))*Rn,Bs=st?-1:0,Gl=0;me.head==="up"&&(Bs=-.38),(me.head==="down"||X.headDown&&(!me.head||me.head==="center"))&&(Bs=.38),me.body==="bow"&&(Bs-=.3),B||(Vr+=D(.3)*.07,Gl+=D(.17)*.12),U&&(Bs-=bt*.35,Vr+=Math.sin(k*7.3)*bt*.12),B==="nod"&&(Bs+=D(2.5)*.3),B==="shake"&&(Gl+=D(2.2)*.6),B==="dance"&&(Vr+=D(2)*.18),B==="walk"&&(Vr+=D(1.3)*.06),M.rotation.set(F("nx",Bs,.14,.72),F("ny",Gl,.14,.72),F("nz",Vr,.14,.72)),_.rotation.set(F("jx",-Ie("hy")*2.2+Ie("trx")*2,.22,.62),0,F("jz",Ie("hx")*2.5-Ie("hrz")*1.6,.22,.62));for(let Ce of["L","R"]){let dt=Ce==="L"?1:-1,kt=me["arm"+Ce]||"down",In=Ce==="L"?0:1,Et,Ot,It=0,Ft=0;if(st&&kt==="down")Et=6*dt,Ot=0,It=-68;else if(X.absArms&&kt==="down")Et=X.absArms[In][0],Ot=X.absArms[In][1];else{let os=ZM[kt]||da[kt]||da.down;Et=os[0]*dt,Ot=os[1]*dt;let Vn=YM[kt];Vn&&(It=Vn[0],Ft=Vn[1])}kt==="down"&&!B&&!st&&(Et+=6*dt+D(.55,In)*3*dt);let yn=Ce==="L"?0:Math.PI;if(B==="walk"&&(It+=D(1.3,yn)*32),B==="run"&&(It+=D(2.4,yn)*60,Ft-=70),B==="dance"&&(Et+=(D(2,yn)*30+30)*dt,Ft-=30),B==="flap"&&(Et+=(.5+.5*D(3))*75*dt,Ot-=D(3)*20*dt),B==="swim"&&(It+=(k*360*.9+(Ce==="L"?0:180))%360*-1),B==="clap"&&(It+=-72,Et+=(Ce==="L"?-1:1)*(14+D(3.5)*14),Ft-=20),B==="punch"){let os=Math.max(0,D(2,yn));It+=-88*os,Ft+=-80*(1-os)}B==="row"&&(It+=D(1)*40-30,Ft-=40),B==="shiver"&&(Et+=D(9,yn)*4),kt==="wave"&&(Ot+=D(2.8)*32*dt),U&&kt==="down"&&!B&&(Et+=bt*(40+Math.sin(k*9+In*2)*25)*dt,Ot-=bt*50*dt),xe["arm"+Ce].rotation.set(F("ux"+Ce,It*Rn,.15,.7),0,F("uz"+Ce,-Et*Rn,.15,.7)),xe["fore"+Ce].rotation.set(F("fx"+Ce,Ft*Rn,.11,.72),0,F("fz"+Ce,-Ot*Rn,.11,.72))}for(let Ce of["L","R"]){let dt=Ce==="L"?1:-1,kt=me["leg"+Ce]||"down",In=Ce==="L"?0:1,Et,Ot,It=0,Ft=0;if(st&&kt==="down")It=-66,Ft=95,Et=6*dt,Ot=0;else if(se.legs&&kt==="down"){let Vn=se.legs[In];It=Vn[0],Ft=Vn[1],Et=(Vn[2]||0)*dt,Ot=(Vn[3]||0)*dt}else if(X.absLegs&&kt==="down")Et=X.absLegs[In][0],Ot=X.absLegs[In][1];else{let Vn=X.legs?X.legs[In]:ua[kt]||ua.down;Et=Vn[0]*dt,Ot=Vn[1]*dt}kt==="kick"&&(It=-65,Et*=.5),kt==="knee"&&(It=-70,Ft=100,Et=8*dt,Ot=0);let yn=Ce==="L"?Math.PI:0;B==="walk"&&(It+=D(1.3,yn)*32,Ft+=Math.max(0,D(1.3,yn+1.2))*40),B==="run"&&(It+=D(2.4,yn)*58,Ft+=Math.max(0,D(2.4,yn+1.2))*90),B==="dance"&&(Ft+=Math.max(0,D(2,yn))*40,It-=Math.max(0,D(2,yn))*25),B==="butt"&&(Ft+=20),xe["leg"+Ce].rotation.set(F("lx"+Ce,It*Rn,.15,.7),0,F("lz"+Ce,-Et*Rn,.15,.7)),xe["shin"+Ce].rotation.set(F("kx"+Ce,Ft*Rn,.12,.72),0,F("kz"+Ce,-Ot*Rn,.12,.72));let os=me.body==="crawl"||me.body==="lie"||me.body==="handstand"?0:-(It+Ft)*Rn*.6;xe["ankle"+Ce].rotation.x=F("ax"+Ce,os,.15,.7)}u.updateMatrixWorld(!0);for(let Ce of["L","R"])Nr("arm"+Ce,hi(xe["arm"+Ce],Tt),hi(xe["fore"+Ce],Zt),hi(xe["wrist"+Ce],ct),"sleeve"+Ce),Nr("leg"+Ce,hi(xe["leg"+Ce],Tt),hi(xe["shin"+Ce],Zt),hi(xe["ankle"+Ce],ct),"pant"+Ce);Ge.rotation.set(st?-.4:0,D(2.2)*.5,0);let ei=me.face||"neutral";S>Fr&&(Fr=S+700+Math.random()*1800,is=(Math.random()-.5)*.9,Br=(Math.random()-.5)*.6);let eg={neutral:.42,angry:.52,sad:.4,surprised:.05,scared:.08,sleepy:.72,cheeky:.38}[ei]??.4,ou={surprised:.75,scared:.55,angry:.9}[ei]??1,tg={surprised:1.18,scared:1.12}[ei]??1,ng=A(S);for(let Ce of R){if(!Ce.g.visible)continue;let dt=is*.5+(Ce.sx<0?.18:-.08),kt=Br*.4+(Ce.sx<0?-.05:.12);ei==="sad"&&(kt=-.45),ei==="scared"&&(dt=Math.sin(S/37+Ce.sx)*.2,kt=.1),ei==="angry"&&(dt=-Ce.sx*.25,kt=0),ei==="surprised"&&(dt*=.3,kt=.05),Ce.px=F("px"+Ce.sx,dt,.12,.6)+Ie("nz")*4*Ce.sx,Ce.py=F("py"+Ce.sx,kt,.12,.6)-Ie("hy")*3;let In=Nt.r*.5,Et=Math.max(-1,Math.min(1,Ce.px))*In,Ot=Math.max(-1,Math.min(1,Ce.py))*In;Ce.pupil.position.set(Et,Ot,Math.sqrt(Math.max(0,Nt.r*Nt.r-Et*Et-Ot*Ot))*.98),Ce.pupil.scale.set(ou,ou,.5),Ce.shine.position.set(Et+Nt.r*.12,Ot+Nt.r*.14,Ce.pupil.position.z+.012);let It=F("es"+Ce.sx,tg,.2,.6);Ce.inner.scale.set(It,It*1.08,.62);let Ft=Math.max(eg,ng),yn=ei==="angry"?-Ce.sx*.45:ei==="sad"?Ce.sx*.35:ei==="neutral"?Ce.sx*.08:0;Ce.lidPivot.rotation.set(-Math.PI/2+Ft*Math.PI*.95,0,F("lt"+Ce.sx,yn,.2,.6))}let lu=V.getObjectByName("ahoge");lu&&(lu.rotation.x=F("ah",D(.8)*.2-Ie("hy")*6,.1,.8)),c.position.x=d.position.x*.8,c.scale.setScalar(Math.max(.45,1-(rt+d.position.y-wm>0?rt*.35:0))),l?.update(k,S),t.render(s,r)}let ss=0;function A(S){if(!ss&&S>ns&&(ss=S,ns=S+2200+Math.random()*2600),ss){let k=(S-ss)/150;return k>=1?(ss=0,0):Math.sin(k*Math.PI)}return 0}Os=requestAnimationFrame(qa);let $=()=>{l&&(l.cheerUntil=performance.now()+1600)};function j(){Or=!1,cancelAnimationFrame(Os),zr.disconnect(),s.traverse(S=>{S.isMesh&&!vm.has(S.material)&&(S.geometry?.dispose(),S.material?.dispose())}),t.dispose(),t.forceContextLoss?.()}P({skin:"tron"}),Ue({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down"});function Q(S){let k=S!=null&&!z.visible;k!==U&&(U=k,N.visible=k,Se="",Ye()),K=k?Math.max(0,Math.min(1,S)):0}return{setPose:Ue,setLook:P,setTalk:Q,el:i,dispose:j,cheer:$,is3D:!0}}var Am="dienta-keys-v1",Em="dienta-combos-v1",Gt=n=>"Digit"+n,Je=n=>"Key"+n,lt=n=>"Shift+"+n,Cm={"body:stand":Gt(1),"body:sit":Gt(2),"body:squat":Gt(3),"body:kneel":Gt(4),"body:lie":Gt(5),"body:leanL":Gt(6),"body:leanR":Gt(7),"body:handstand":Gt(8),"body:crawl":Gt(9),"body:bow":"Minus","body:crossleg":"Equal","head:center":Gt(0),"head:tiltL":"ArrowLeft","head:tiltR":"ArrowRight","head:up":"ArrowUp","head:down":"ArrowDown","face:neutral":lt(Gt(1)),"face:happy":lt(Gt(2)),"face:sad":lt(Gt(3)),"face:angry":lt(Gt(4)),"face:surprised":lt(Gt(5)),"face:scared":lt(Gt(6)),"face:sleepy":lt(Gt(7)),"face:cheeky":lt(Gt(8)),"face:love":lt(Gt(9)),"armL:up":Je("Q"),"armL:diag":Je("W"),"armL:side":Je("A"),"armL:hip":Je("S"),"armL:down":Je("Z"),"armL:wave":Je("X"),"armL:flex":lt(Je("Q")),"armL:head":lt(Je("W")),"armL:mouth":lt(Je("A")),"armL:cross":lt(Je("S")),"armL:point":lt(Je("Z")),"armR:up":Je("P"),"armR:diag":Je("O"),"armR:side":Je("L"),"armR:hip":Je("K"),"armR:down":Je("M"),"armR:wave":Je("N"),"armR:flex":lt(Je("P")),"armR:head":lt(Je("O")),"armR:mouth":lt(Je("L")),"armR:cross":lt(Je("K")),"armR:point":lt(Je("M")),"legL:kick":Je("R"),"legL:knee":Je("F"),"legL:spread":Je("G"),"legL:step":Je("T"),"legL:down":Je("V"),"legR:kick":Je("U"),"legR:knee":Je("J"),"legR:spread":Je("H"),"legR:step":Je("Y"),"legR:down":Je("B"),"loop:walk":Je("E"),"loop:run":Je("D"),"loop:dance":Je("C"),"loop:butt":Je("I"),"loop:flap":lt(Je("E")),"loop:swim":lt(Je("D")),"loop:shiver":lt(Je("C")),"loop:clap":lt(Je("I")),"loop:punch":lt(Je("R")),"loop:row":lt(Je("F")),"loop:nod":lt(Je("G")),"loop:shake":lt(Je("H")),"fx:jump":"BracketLeft","fx:spin":"BracketRight","fx:fall":"Semicolon","fx:bounce":"Quote","cycle:propL":"Comma","cycle:propR":"Period","clear:propL":lt("Comma"),"clear:propR":lt("Period"),"cycle:ears":"Backquote","cycle:tail":"Backslash","clear:ears":lt("Backquote"),"clear:tail":lt("Backslash"),"turn:front":lt("ArrowUp"),"turn:back":lt("ArrowDown"),"turn:left":lt("ArrowLeft"),"turn:right":lt("ArrowRight"),"turn:l45":"Alt+ArrowLeft","turn:r45":"Alt+ArrowRight",reset:"Backspace",help:lt("Slash")},Ri=n=>({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down",propL:null,propR:null,ears:null,tail:null,turn:"front",loop:null,...n}),Rm=[{id:"c-hello",name:"\u{1F44B} Ch\xE0o h\u1ECFi",pose:Ri({armR:"wave",face:"happy",head:"tiltR"}),key:"Alt+Digit1"},{id:"c-sleep",name:"\u{1F634} \u0110i ng\u1EE7",pose:Ri({body:"lie",face:"sleepy"}),key:"Alt+Digit2"},{id:"c-eat",name:"\u{1F35C} \u0102n m\xEC",pose:Ri({body:"sit",armR:"mouth",propR:"chopsticks",armL:"cross",propL:"bowl",face:"happy",loop:"nod"}),key:"Alt+Digit3"},{id:"c-phone",name:"\u{1F4F1} G\u1ECDi \u0111i\u1EC7n",pose:Ri({armR:"head",propR:"phone",armL:"hip",face:"surprised",head:"tiltR"}),key:"Alt+Digit4"},{id:"c-sing",name:"\u{1F3A4} H\xE1t",pose:Ri({armR:"mouth",propR:"mic",armL:"diag",face:"happy",loop:"dance"}),key:"Alt+Digit5"},{id:"c-hero",name:"\u{1F9B8} Si\xEAu nh\xE2n",pose:Ri({armR:"up",armL:"hip",legL:"knee",face:"angry",body:"leanR"}),key:"Alt+Digit6"},{id:"c-chicken",name:"\u{1F414} V\u1ED7 c\xE1nh",pose:Ri({body:"squat",armL:"hip",armR:"hip",loop:"flap",face:"surprised"}),key:"Alt+Digit7"},{id:"c-scared",name:"\u{1F631} Ho\u1EA3ng s\u1EE3",pose:Ri({armL:"head",armR:"head",loop:"shiver",face:"scared"}),key:"Alt+Digit8"},{id:"c-dog",name:"\u{1F436} C\xFAn con",pose:Ri({body:"crawl",ears:"dog",tail:"dog",face:"cheeky",propR:"bone"}),key:"Alt+Digit9"}],Pm=/Mac|iPhone|iPad/.test(navigator.platform||navigator.userAgent),jM={ArrowLeft:"\u2190",ArrowRight:"\u2192",ArrowUp:"\u2191",ArrowDown:"\u2193",BracketLeft:"[",BracketRight:"]",Semicolon:";",Quote:"'",Comma:",",Period:".",Slash:"/",Backslash:"\\",Minus:"-",Equal:"=",Backquote:"`",Backspace:"\u232B",Enter:"\u21B5",Tab:"Tab",Space:"Space"};function Ha(n){return n?n.split("+").map(e=>e==="Shift"?"\u21E7":e==="Alt"?Pm?"\u2325":"Alt":e.startsWith("Key")?e.slice(3):e.startsWith("Digit")?e.slice(5):e.startsWith("Numpad")?"Num"+e.slice(6):/^F\d+$/.test(e)?e:jM[e]||e).join(Pm?"":"+"):""}function Zd(n){return n.ctrlKey||n.metaKey||["ShiftLeft","ShiftRight","AltLeft","AltRight","ControlLeft","ControlRight","MetaLeft","MetaRight","CapsLock"].includes(n.code)?null:(n.altKey?"Alt+":"")+(n.shiftKey?"Shift+":"")+n.code}function Im(n,e){try{return JSON.parse(localStorage.getItem(n))??e}catch{return e}}function Lm(n,e){try{localStorage.setItem(n,JSON.stringify(e))}catch{}}var Ol=class{constructor(){this.overrides=Im(Am,{}),this.combos=Im(Em,null)||Rm.map(e=>({...e,pose:{...e.pose}})),this.rebuild()}rebuild(){this.map={...Cm,...this.overrides};for(let e of this.combos)this.map["combo:"+e.id]=e.key??null;this.rev={};for(let[e,t]of Object.entries(this.map))t&&(this.rev[t]=e)}keyOf(e){return this.map[e]||null}actionFor(e){return this.rev[e]||null}bind(e,t){let i=this.rev[t];i&&i!==e&&this.setRaw(i,null),this.setRaw(e,t),this.persist()}setRaw(e,t){if(e.startsWith("combo:")){let i=this.combos.find(s=>"combo:"+s.id===e);i&&(i.key=t)}else Cm[e]===t?delete this.overrides[e]:this.overrides[e]=t;this.rebuild()}addCombo(e,t){let i="u"+Date.now().toString(36),s=new Set(Object.values(this.map)),r=null;for(let l=9;l>=0&&!r;l--)s.has("Alt+Digit"+l)||(r="Alt+Digit"+l);let{fx:a,...o}=t;return this.combos.push({id:i,name:e||"T\u1ED5 h\u1EE3p "+(this.combos.length+1),pose:o,key:r}),this.persist(),i}removeCombo(e){this.combos=this.combos.filter(t=>t.id!==e),this.persist()}renameCombo(e,t){let i=this.combos.find(s=>s.id===e);i&&(i.name=t.slice(0,30),this.persist())}reset(){this.overrides={},this.combos=Rm.map(e=>({...e,pose:{...e.pose}})),this.persist()}persist(){this.rebuild(),Lm(Am,this.overrides),Lm(Em,this.combos)}};function km(n){let e=On.filter(t=>!t.key.startsWith("prop")).map(t=>({title:t.group,items:t.opts.map(([i,s])=>({id:`${t.key}:${i}`,label:s}))}));e.push({title:"\u0110\u1EA1o c\u1EE5 & kh\xE1c",items:[{id:"cycle:propL",label:"\u0110\u1ED5i \u0111\u1EA1o c\u1EE5 tay tr\xE1i"},{id:"cycle:propR",label:"\u0110\u1ED5i \u0111\u1EA1o c\u1EE5 tay ph\u1EA3i"},{id:"clear:propL",label:"B\u1ECF \u0111\u1EA1o c\u1EE5 tay tr\xE1i"},{id:"clear:propR",label:"B\u1ECF \u0111\u1EA1o c\u1EE5 tay ph\u1EA3i"},{id:"cycle:ears",label:"\u0110\u1ED5i tai / s\u1EEBng"},{id:"cycle:tail",label:"\u0110\u1ED5i \u0111u\xF4i"},{id:"clear:ears",label:"B\u1ECF tai / s\u1EEBng"},{id:"clear:tail",label:"B\u1ECF \u0111u\xF4i"},{id:"reset",label:"\u0110\u1EB7t l\u1EA1i t\u01B0 th\u1EBF"},{id:"help",label:"M\u1EDF b\u1EA3ng ph\xEDm t\u1EAFt"}]});for(let t of["L","R"])e.push({title:`\u0110\u1EA1o c\u1EE5 tay ${t==="L"?"tr\xE1i":"ph\u1EA3i"} (g\xE1n ph\xEDm tu\u1EF3 \xFD)`,items:Js.map(([i,s,r])=>({id:`prop${t}:${i}`,label:`${s} ${r}`}))});return e}var Kd=n=>n.toLowerCase().replace(/[\u{1F000}-\u{1FFFF}☀-➿️]/gu,"").replace(/\s+/g," ").trim(),wn=n=>["armL:"+n,"armR:"+n],QM={"c\xFAi ch\xE0o":["body:bow"],"c\xFAi ng\u01B0\u1EDDi":["body:bow"],c\u00FAi:["body:bow"],b\u00F2:["body:crawl"],"n\u1EB1m/b\xF2":["body:crawl"],ng\u1ED3i:["body:sit"],"\u0111\u1EE9ng th\u1EB3ng":["body:stand"],\u0111\u1EE9ng:["body:stand"],nghi\u00EAng:["body:leanR"],"nghi\xEAng ng\u01B0\u1EDDi":["body:leanR"],"nghi\xEAng \u0111\u1EA7u":["head:tiltR"],ng\u01B0\u1EDBc:["head:up"],"c\xFAi \u0111\u1EA7u":["head:down"],"m\u1EB7t vui":["face:happy"],"m\u1EB7t bu\u1ED3n":["face:sad"],"m\u1EB7t gi\u1EADn":["face:angry"],"m\u1EB7t ng\u1EA1c nhi\xEAn":["face:surprised"],"m\u1EB7t s\u1EE3":["face:scared"],"m\u1EB7t ng\u1EE7":["face:sleepy"],"m\u1EB7t l\xE8 l\u01B0\u1EE1i":["face:cheeky"],"m\u1EB7t y\xEAu":["face:love"],"m\u1EB7t th\u01B0\u1EDDng":["face:neutral"],ng\u00E1p:["face:sleepy","armR:mouth"],"gi\u01A1 cao":["armR:up"],"gi\u01A1 2 tay":wn("up"),"2 tay gi\u01A1 cao":wn("up"),"tay gi\u01A1 cao xen k\u1EBD":["armL:up","armR:down","loop:punch"],"dang tay":wn("side"),"dang 2 tay":wn("side"),"2 tay dang":wn("side"),"tay dang":wn("side"),"tay h\u1EA1 dang nh\u1EB9":wn("diag"),"2 tay ch\xE9o l\xEAn":wn("diag"),"ch\u1ED1ng h\xF4ng":["armR:hip"],"ch\u1ED1ng h\xF4ng 2 tay":wn("hip"),"khoe c\u01A1":["armR:flex"],"khoe c\u01A1 2 tay":wn("flex"),"co 2 tay":wn("flex"),"\xF4m ng\u1EF1c":wn("cross"),"\xF4m \u0111\u1EA7u":wn("head"),"\u0111\u01B0a l\xEAn mi\u1EC7ng":["armR:mouth"],"\u0111\u01B0a tay l\xEAn mi\u1EC7ng":["armR:mouth"],"1 tay \u0111\u01B0a l\xEAn mi\u1EC7ng l\xE0m v\xF2i":["armR:mouth"],ch\u1EC9:["armR:point"],"ch\u1EC9 l\xEAn":["armR:diag"],"2 tay ch\u1EC9":wn("point"),"1 tay gi\u01A1 ra hi\u1EC7u d\u1EEBng":["armR:point"],v\u1EABy:["armR:wave"],"v\u1EABy tay":["armR:wave"],"co g\u1ED1i":["legL:knee"],"co g\u1ED1i 1 ch\xE2n":["legL:knee"],\u0111\u00E1:["legR:kick"],"\u0111\xE1 ch\xE2n":["legR:kick"],l\u1EAFc:["loop:shake"],"\u0111i ch\u1EADm":["loop:walk"],"nh\u1EA3y m\xFAa u\u1ED1n \xE9o":["loop:dance"],"v\u1ED7 tay (h\xE0m)":["loop:clap"],nh\u00FAn:["fx:bounce"],\u0111u\u00F4i:["tail:dog"],"\u0111u\xF4i heo xo\u1EAFn":["tail:pig"],x\u01B0\u01A1ng:["propR:bone"],b\u00F3ng:["propR:ball"],\u0111\u00E0n:["propR:guitar"]},Va={};for(let n of On){if(n.key.startsWith("prop")||n.key==="face")continue;let e=n.key==="armL"?"tay tr\xE1i ":n.key==="armR"?"tay ph\u1EA3i ":n.key==="legL"?"ch\xE2n tr\xE1i ":n.key==="legR"?"ch\xE2n ph\u1EA3i ":"";for(let[t,i]of n.opts){let s=Kd(e+i);Va[s]||(Va[s]=[n.key+":"+t])}}for(let[n,,e]of Js)Va[Kd(e)]=["prop:"+n];Object.assign(Va,QM);function Jd(n){if(!n)return[];let e=0;return n.split(/\s*(?:\+|,|→|;)\s*/).filter(Boolean).map(t=>{let i=Va[Kd(t)]||null;return i&&(i=i.map(s=>s.startsWith("prop:")?(e++?"propL:":"propR:")+s.slice(5):s)),{text:t,ids:i}})}var Ga=null;function ew(){return Ga||(Ga=document.createElement("div"),Ga.className="overlay site-modal hidden",document.body.appendChild(Ga)),Ga}function jd(n,{required:e=!1,onSave:t}={}){let i=ew();i.innerHTML=`<form class="modal panel pf-modal" autocomplete="off">
    <div class="pf-head">${en(n,"xl")}<div><h2 style="margin:0">${e?"Ch\xE0o b\u1EA1n! \u{1F44B}":"H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n"}</h2>
    <p class="muted" style="margin:4px 0 0">${e?"\u0110\u1EB7t t\xEAn v\xE0 ch\u1ECDn avatar m\u1ED9t l\u1EA7n \u2014 v\xE0o game n\xE0o c\u0169ng d\xF9ng lu\xF4n, kh\xF4ng ph\u1EA3i nh\u1EADp l\u1EA1i.":"T\xEAn v\xE0 avatar d\xF9ng chung cho m\u1ECDi game."}</p></div></div>
    <label class="field"><span>T\xEAn hi\u1EC3n th\u1ECB</span><input id="pfName" maxlength="18" value="${Ze(n.name)}" placeholder="VD: S\xF3i Gi\xE0, Vua Nh\u1EA1i..." required /></label>
    <div id="pfAv"></div>
    <div class="pf-btns">${e?"":'<button type="button" class="btn" data-close>Hu\u1EF7</button>'}<button class="btn primary big" type="submit">${e?"V\xE0o s\xE2n ch\u01A1i \u2192":"L\u01B0u"}</button></div>
  </form>`,i.classList.remove("hidden");let s=()=>{let o=ue(".pf-head .avatar",i);o&&(o.outerHTML=en(n,"xl"))};Nf(ue("#pfAv",i),n,s);let r=()=>{i.classList.add("hidden"),i.innerHTML=""};i.onclick=o=>{!e&&o.target===i&&r()},xt("[data-close]",i).forEach(o=>o.onclick=r);let a=ue("#pfName",i);setTimeout(()=>a.focus(),50),ue("form",i).onsubmit=o=>{o.preventDefault();let l=a.value.trim().slice(0,18);if(!l){a.focus();return}n.name=l,Zs(n),r(),t?.(n),Qd()}}var tw=(n,e)=>{n.name||jd(n,{required:!0,onSave:e})};function nw(n,e){let t=ue(".home-nav .nav-right");if(!t)return()=>{};let i=ue("#profileBtn");i||(i=document.createElement("button"),i.type="button",i.id="profileBtn",i.className="profile-chip",t.appendChild(i));let s=()=>{i.innerHTML=`${en(n,"sm")}<span>${Ze(n.name||"\u0110\u1EB7t t\xEAn")}</span>`};return i.onclick=()=>jd(n,{onSave:()=>{s(),e?.(n)}}),s(),s}function Dm(n,{onChange:e}={}){let t=ue("#homeForm");if(!t)return;let i=ue("#meCard");i||(i=document.createElement("div"),i.id="meCard",i.className="me-card",(ue("h2",t)||t.firstChild).after(i)),t.classList.add("has-profile");let s=ue("#nameInput"),r=()=>{s&&(s.value=n.name||""),i.innerHTML=`${en(n)}<div class="mc-txt"><span class="muted">B\u1EA1n ch\u01A1i v\u1EDBi t\xEAn</span><b>${Ze(n.name||"...")}</b></div><button type="button" class="btn sm" id="meEdit">\u270F\uFE0F \u0110\u1ED5i</button>`,ue("#meEdit").onclick=()=>jd(n,{onSave:()=>{r(),a(),e?.(n)}})},a=nw(n,()=>{r(),e?.(n)});r(),tw(n,()=>{r(),a(),e?.(n)})}var Sn=null,Ns=null,Um=()=>Ns||(Ns=dn.get("site-did"),Ns||(Ns=lo(10),dn.set("site-did",Ns)),Ns);async function Nm(n,e){if(Sn)return Sn;let t=ue(".home-nav .nav-right"),i=document.createElement("button");i.type="button",i.className="online-chip",i.title="S\u1ED1 ng\u01B0\u1EDDi \u0111ang m\u1EDF S\xE2n Ch\u01A1i",i.innerHTML='<i class="dot"></i><b>1</b><span>online</span>',t?.prepend(i);let s=document.createElement("div");s.className="online-pop panel hidden",document.body.appendChild(s),i.onclick=l=>{l.stopPropagation(),s.classList.toggle("hidden"),o()},document.addEventListener("click",l=>{s.contains(l.target)||s.classList.add("hidden")});let r=new Map;Sn={prof:n,page:e,peers:r,chip:i,pop:s,net:null};let a=()=>({did:Um(),name:n.name||"Kh\xE1ch",av:n.av,page:Sn.page});function o(){let l=[a(),...r.values()],c=new Map;for(let u of l)u?.did&&!c.has(u.did)&&c.set(u.did,u);let h=Math.max(1,c.size);ue("b",i).textContent=h,s.innerHTML=`<div class="op-head"><i class="dot"></i><b>${h} ng\u01B0\u1EDDi \u0111ang online</b></div>
      ${[...c.values()].map((u,d)=>`<div class="op-row">${en(u,"sm")}<div><b>${Ze(u.name)}${d===0?' <span class="muted">(b\u1EA1n)</span>':""}</b><div class="muted">${Ze(u.page||"")}</div></div></div>`).join("")}
      ${h===1?'<p class="muted" style="margin:6px 0 0;font-size:12.5px">Ch\u01B0a th\u1EA5y ai kh\xE1c. G\u1EEDi link cho b\u1EA1n b\xE8 nh\xE9!</p>':""}`}Sn.draw=o,o();try{let l=await ao("ONLINE",{local:Fi,ns:"presence"});Sn.net=l,l.on("me",(c,h)=>{c&&typeof c=="object"&&(r.set(h,{did:String(c.did||h).slice(0,20),name:String(c.name||"Kh\xE1ch").slice(0,18),av:c.av,page:String(c.page||"").slice(0,40)}),o())}),l.onPeerJoin=c=>{l.send("me",a(),c)},l.onPeerLeave=c=>{r.delete(c),o()},l.send("me",a())}catch(l){console.warn("[presence]",l)}return Sn}function Qd(n){Sn&&(n&&(Sn.page=n),Sn.draw?.(),Sn.net?.send("me",{did:Um(),name:Sn.prof.name||"Kh\xE1ch",av:Sn.prof.av,page:Sn.page}))}var Tn=new Ol,zl=n=>{let e=Tn.keyOf(n);return e?`<kbd>${Ze(Ha(e))}</kbd>`:""},iw="dienta",ts=Df(),G={cid:Uf(),code:null,isHost:!1,net:null,engine:null,hostPid:null,pub:null,priv:null,joined:!1,endsAt:0,chat:[],seenLog:0,unread:0,look:rw(),pose:{...jt},poseSeq:0,puppet:null,voice:null,speaking:new Set,shownEnd:0,lastTurnKey:"",ctlTab:0};Fi&&(window.__app=G);var sw={order:"random",turns:2,actTime:90,answerTime:12,hints:!0,mult:!0,rerolls:1,categories:null};function iu(){let n=null;try{n=JSON.parse(dn.get("dienta-room-opts")||"null")}catch{}return{...sw,...n||{}}}var Bm=n=>dn.set("dienta-room-opts",JSON.stringify(n));function zm(n,e,t=!0){let i=t?"":"disabled",s=(a,o)=>`<div class="mini-seg">${o.map(([l,c])=>`<button type="button" class="${String(n[a])===String(l)?"on":""}" data-opt="${a}" data-val="${l}" ${i}>${c}</button>`).join("")}</div>`,r=a=>!n.categories||n.categories.includes(a);return`
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
    ${e?.length?`<div class="ro-row"><span>Nh\xF3m \u0111\u1EC1</span></div><div class="cat-row">${e.map(a=>`<button type="button" class="cat-chip ${r(a)?"on":""}" data-cat="${Ze(a)}" ${i}>${Ze(a)}</button>`).join("")}</div>`:""}`}function Hm(n,e,t,i){xt("[data-opt][data-val]",n).forEach(s=>s.onclick=()=>{let r=s.dataset.opt,a=s.dataset.val;i({[r]:/^\d+$/.test(a)?Number(a):a})}),xt("input[data-opt]",n).forEach(s=>s.onchange=()=>i({[s.dataset.opt]:s.checked})),xt("[data-cat]",n).forEach(s=>s.onclick=()=>{let r=e.categories?[...e.categories]:[...t],a=s.dataset.cat,o=r.includes(a)?r.filter(l=>l!==a):[...r,a];i({categories:o.length===t.length?null:o})})}function rw(){let n=null;try{n=JSON.parse(dn.get("dienta-look")||"null")}catch{}return{skin:ms[n?.skin]?n.skin:"tron",head:typeof n?.head=="string"?n.head:""}}var Wa=()=>dn.set("dienta-look",JSON.stringify(G.look)),aw=n=>({e:ti.includes(n?.e)?n.e:ti[0],c:Number.isInteger(n?.c)&&n.c>=0&&n.c<Ni.length?n.c:0}),ow=n=>{let e=pa.includes(n?.skin)?n.skin:"tron",t=typeof n?.head=="string"?n.head:"";return/^https?:\/\//.test(t)&&t.length<800||/^data:image\/(png|jpe?g|webp);base64,[A-Za-z0-9+/=]+$/.test(t)&&t.length<6e4||(t=""),{skin:e,head:t}};function lw(){xt("[data-logo]").forEach(f=>f.innerHTML=aa.wolf),ue("#nameInput").value=ts.name;let n=Nl(ue("#lookPreview")),e=[{...jt,armL:"wave",face:"happy",loop:null},{...jt,armL:"up",armR:"up",face:"surprised",legL:"spread",legR:"spread"},{...jt,armL:"hip",armR:"flex",face:"cheeky"},{...jt,loop:"dance",face:"happy",armL:"diag",armR:"down"}],t=0,i=()=>{n.setLook(G.look),n.setPose(e[t%e.length])};setInterval(()=>{t++,i()},2200);let s=()=>{ue("#skinGrid").innerHTML=pa.map(f=>{let g=ms[f];return`<button type="button" class="skin-btn ${f===G.look.skin?"on":""}" data-skin="${f}" title="${Ze(g.name)}"><span class="sw" style="--a:${g.shirt};--b:${g.pants}">${g.emo||""}</span><span class="sk-n">${Ze(g.name)}</span></button>`}).join("")+'<button type="button" class="skin-btn rnd" id="skinRandom"><span class="sw">\u{1F3B2}</span><span class="sk-n">Ng\u1EABu nhi\xEAn</span></button>',xt("[data-skin]").forEach(f=>f.onclick=()=>{G.look.skin=f.dataset.skin,Wa(),s(),i()}),ue("#skinRandom").onclick=()=>{let f=pa.filter(g=>g!==G.look.skin);G.look.skin=f[Math.floor(Math.random()*f.length)],Wa(),s(),i(),ue(`[data-skin="${G.look.skin}"]`)?.scrollIntoView({block:"nearest"})},ue("#skinCount").textContent=pa.length,ue("#photoState").textContent=G.look.head?"\u0110ang d\xF9ng \u1EA3nh l\xE0m m\u1EB7t":"Ch\u01B0a c\xF3 \u1EA3nh (d\xF9ng m\u1EB7t ho\u1EA1t h\xECnh)",ue("#photoClear").hidden=!G.look.head};s(),i(),ue("#photoLink").onchange=()=>{let f=ue("#photoLink").value.trim();if(f&&!/^https?:\/\//.test(f))return tn("Link \u1EA3nh ph\u1EA3i b\u1EAFt \u0111\u1EA7u b\u1EB1ng http:// ho\u1EB7c https://",!0);G.look.head=f,Wa(),s(),i()},ue("#photoFile").onchange=async f=>{let g=f.target.files?.[0];if(g)try{G.look.head=await cw(g,128),ue("#photoLink").value="",Wa(),s(),i()}catch{tn("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c \u1EA3nh n\xE0y, th\u1EED \u1EA3nh kh\xE1c nh\xE9.",!0)}},ue("#photoClear").onclick=()=>{G.look.head="",ue("#photoLink").value="",Wa(),s(),i()},Dm(ts),Nm(ts,"\u0110ang \u1EDF Di\u1EC5n T\u1EA3 H\xECnh H\xE0i");let r=iu(),a=Sc(window.DIENTA_DATA).categories,o=()=>{ue("#roomOptsBody").innerHTML=zm(r,a),Hm(ue("#roomOptsBody"),r,a,f=>{Object.assign(r,f),r.categories&&!r.categories.length&&(r.categories=null),Bm(r),o()})};o();let l=ue("#homeForm"),c="create",h=f=>{c=f,l.classList.toggle("join",f==="join"),xt(".seg-btn").forEach(g=>g.classList.toggle("active",g.dataset.mode===f)),ue("#homeSubmit").textContent=f==="join"?"V\xE0o ph\xF2ng \u2192":"T\u1EA1o ph\xF2ng m\u1EDBi \u2192",ue("#codeInput").required=f==="join"};xt(".seg-btn").forEach(f=>f.onclick=()=>h(f.dataset.mode));let u=(la.get("room")||"").toUpperCase();u&&(h("join"),ue("#codeInput").value=u),l.onsubmit=f=>{f.preventDefault(),co();let g=ue("#nameInput").value.trim();if(g)if(ts.name=g,Zs(ts),c==="join"){let y=ue("#codeInput").value.trim().toUpperCase();if(!/^[A-Z0-9]{4,8}$/.test(y))return tn("M\xE3 ph\xF2ng kh\xF4ng h\u1EE3p l\u1EC7",!0);eu(y,!1)}else eu(kf(),!0)};let d=JSON.parse(Ys.get("dienta-session")||"null");d&&(!u||d.code===u)&&ts.name&&eu(d.code,d.host)}function cw(n,e){return new Promise((t,i)=>{let s=new Image,r=URL.createObjectURL(n);s.onload=()=>{let a=document.createElement("canvas");a.width=a.height=e;let o=Math.min(s.width,s.height);a.getContext("2d").drawImage(s,(s.width-o)/2,(s.height-o)/2,o,o,0,0,e,e),URL.revokeObjectURL(r),t(a.toDataURL("image/jpeg",.82))},s.onerror=i,s.src=r})}async function eu(n,e){Qd("\u{1F3AD} \u0110ang ch\u01A1i Di\u1EC5n T\u1EA3 H\xECnh H\xE0i"),G.code=n,G.isHost=e,Ys.set("dienta-session",JSON.stringify({code:n,host:e}));let t=new URL(location.href);t.searchParams.set("room",n),history.replaceState(null,"",t),ue("#home").classList.add("hidden"),ue("#room").classList.remove("hidden"),ue("#codeChip").innerHTML=`${Ui("copy")}${Ze(n)}`,ue("#codeChip").onclick=()=>wc(Mc(n),"\u0110\xE3 sao ch\xE9p link m\u1EDDi!"),ue("#leaveBtn").onclick=()=>Fl(),ue("#stage").innerHTML=`<div class="panel hero hero-night"><div class="hero-ic">${aa.wolf}</div><div><h2>\u0110ang k\u1EBFt n\u1ED1i...</h2><p>\u0110ang t\xECm \u0111\u01B0\u1EDDng t\u1EDBi ph\xF2ng <b>${Ze(n)}</b>.</p></div></div>`;let i=null;if(e&&(i=Sc(window.DIENTA_DATA),i.errors.length&&console.warn("[dienta] l\u1ED7i d\u1EEF li\u1EC7u",i.errors),!i.items.length)){tn("Kh\xF4ng \u0111\u1ECDc \u0111\u01B0\u1EE3c kho \u0111\u1EC1 (data/dienta-data.js).",!0);return}try{G.net=await ao(n,{local:Fi,ns:iw})}catch(a){console.error(a),tn("Kh\xF4ng t\u1EA3i \u0111\u01B0\u1EE3c th\u01B0 vi\u1EC7n k\u1EBFt n\u1ED1i.",!0);return}let s=G.net;G.voice=new oo(s),G.voice.onLevels=Mw;let r=()=>({cid:G.cid,name:ts.name,av:ts.av,look:G.look});if(s.on("hello",(a,o)=>{if(!G.isHost||!a?.cid)return;let l=G.engine.addPlayer(String(a.cid),a,o);l&&s.send("err",{msg:l,fatal:!0},o)}),s.on("act",(a,o)=>{if(!G.isHost)return;let l=G.engine.byPid(o);if(!l)return;let c=G.engine.handle(l.cid,a);c&&s.send("err",{msg:c},o)}),s.on("chat",(a,o)=>{if(G.isHost){let l=G.engine.byPid(o);l&&Vm(l.cid,a.text)}else o===G.hostPid&&ru(a)}),s.on("state",(a,o)=>{G.isHost||(G.hostPid=o,ue("#hostLost").classList.add("hidden"),Gm(a))}),s.on("priv",(a,o)=>{!G.isHost&&o===G.hostPid&&Wm(a)}),s.on("fx",(a,o)=>{!G.isHost&&o===G.hostPid&&Fm(a)}),s.on("pose",(a,o)=>{let l=G.pub?.players.find(c=>c.cid===G.pub.turn?.actor);!l||l.pid!==o||(G.isHost&&G.engine.setPose(l.cid,a),G.remotePose={...jt,...a},G.puppet?.setPose(G.remotePose))}),s.on("err",a=>{tn(a.msg,!0),a.fatal&&Fl(!1)}),s.onPeerJoin=a=>{G.isHost?Om():s.send("hello",r(),a),G.voice?.peerJoined(a)},s.onPeerLeave=a=>{G.voice?.peerLeft(a),G.isHost?G.engine.disconnect(a):a===G.hostPid&&ue("#hostLost").classList.remove("hidden")},s.onPeerStream=(a,o)=>G.voice.peerStream(a,o),e){let a=JSON.parse(dn.get("dienta-host-"+n)||"null");G.engine=new ho(G.cid,i,a&&a.hostCid===G.cid?a:null,{cleanAv:aw,cleanLook:ow}),G.engine.players.forEach(o=>{o.cid!==G.cid&&(o.connected=!1)}),a&&a.hostCid===G.cid||G.engine.setConfig(iu()),G.engine.onChange=Om,G.engine.onEvent=o=>{G.net.send("fx",o),Fm(o)},G.engine.addPlayer(G.cid,r(),s.selfId),setInterval(()=>G.engine.tick(),300)}else setTimeout(()=>{!G.pub&&G.net===s&&(ue("#stage").innerHTML=`<div class="panel hero hero-vote"><div class="hero-ic">${aa.wolf}</div><div><h2>Ch\u01B0a th\u1EA5y ch\u1EE7 ph\xF2ng</h2><p>Ki\u1EC3m tra l\u1EA1i m\xE3 <b>${Ze(n)}</b> v\xE0 ch\u1EAFc ch\u1EAFn ch\u1EE7 ph\xF2ng v\u1EABn \u0111ang m\u1EDF trang. V\u1EABn \u0111ang ti\u1EBFp t\u1EE5c t\xECm...</p><div style="margin-top:12px"><button class="btn" id="backHome">V\u1EC1 trang tr\u01B0\u1EDBc</button></div></div></div>`,ue("#backHome").onclick=()=>Fl(!1))},12e3);setInterval(qm,200)}function Fl(n=!0){if(n&&G.pub&&!["lobby","end"].includes(G.pub.phase)&&!confirm("R\u1EDDi kh\u1ECFi v\xE1n \u0111ang ch\u01A1i?"))return;Ys.del("dienta-session"),G.isHost&&dn.del("dienta-host-"+G.code);try{G.net?.leave()}catch{}let e=new URL(location.href);e.searchParams.delete("room"),location.href=e.toString()}var tu=!1;function Om(){tu||(tu=!0,queueMicrotask(()=>{tu=!1;let n=G.engine,e=n.pub();G.net.send("state",e);for(let t of n.players)t.cid!==G.cid&&t.connected&&t.pid&&G.net.send("priv",n.priv(t.cid),t.pid);Gm(e),Wm(n.priv(G.cid)),dn.set("dienta-host-"+G.code,JSON.stringify(n.s))}))}function Vm(n,e){if(e=String(e||"").trim().slice(0,300),!e)return;let t=G.engine,i=t.P(n),s=t.chatFilter(n,e);if(s.err){n===G.cid?tn(s.err,!0):G.net.send("err",{msg:s.err},i.pid);return}let r={k:"m",cid:n,name:i.name,av:i.av,text:s.text,masked:!!s.masked,ts:Date.now()};G.net.send("chat",r),ru(r)}function Pi(n){if(G.isHost){let e=G.engine.handle(G.cid,n);e&&tn(e,!0)}else G.hostPid?G.net.send("act",n,G.hostPid):tn("Ch\u01B0a k\u1EBFt n\u1ED1i \u0111\u01B0\u1EE3c ch\u1EE7 ph\xF2ng",!0)}function Gm(n){let e=G.pub;if(G.pub=n,G.endsAt=n.remaining?Date.now()+n.remaining:0,n.players.find(s=>s.cid===G.cid))G.joined=!0;else if(G.joined)return tn("B\u1EA1n \u0111\xE3 b\u1ECB m\u1EDDi ra kh\u1ECFi ph\xF2ng.",!0),setTimeout(()=>Fl(!1),1200);for(let s of n.log)s.id>G.seenLog&&ru({k:"sys",kind:s.kind,text:s.text});G.seenLog=Math.max(G.seenLog,...n.log.map(s=>s.id),0);let i=n.turn?`${n.gameId}-${n.turn.n}`:"";i!==G.lastTurnKey&&(G.lastTurnKey=i,G.pose={...n.pose||jt},G.remotePose={...jt,...n.pose||{}},G.answerDraft=""),Xm(),n.phase==="end"&&G.shownEnd!==n.gameId&&(G.shownEnd=n.gameId,setTimeout(jm,700)),n.phase==="lobby"&&ue("#overlay").dataset.kind==="end"&&Ur()}function Wm(n){G.priv=n,Xm()}function $m(n){let e=ue("#stageWrap");if(e)for(let t=0;t<10;t++){let i=document.createElement("span");i.className="st-float",i.textContent=n[t%n.length],i.style.left=8+Math.random()*84+"%",i.style.animationDelay=Math.random()*.5+"s",i.style.setProperty("--r",Math.random()*40-20+"deg"),e.appendChild(i),setTimeout(()=>i.remove(),2500)}}function hw(){let n=ue("#stageWrap");n&&(n.classList.remove("cheer"),n.offsetWidth,n.classList.add("cheer"),setTimeout(()=>n.classList.remove("cheer"),1600),G.puppet?.cheer?.(),$m(["\u{1F44F}","\u{1F389}","\u2B50","\u{1F60D}","\u{1F44F}"]))}function Fm(n){n.type==="correct"&&hw(),n.type==="wrong"&&$m(["\u{1F605}","\u274C","\u{1F923}"]),n.type==="buzz"?ca.buzz():n.type==="correct"?(ca.correct(),n.cid===G.cid&&bc()):n.type==="wrong"?ca.wrong():n.type==="turn"&&ca.start()}var Bl=n=>G.pub?.players.find(e=>e.cid===n),ci=()=>G.pub?.turn?.actor===G.cid&&["acting","answering"].includes(G.pub.phase);function Xm(){let n=G.pub;n&&(document.body.classList.toggle("night",!1),dw(),n.phase==="lobby"?uw():pw(),Jm(),xw(),Qm())}function dw(){let n=G.pub,e=n.phase==="lobby"?"Ph\xF2ng ch\u1EDD":n.phase==="end"?"K\u1EBFt th\xFAc":`L\u01B0\u1EE3t ${n.turn?.n}/${n.turn?.total}`;ue("#phasePill").innerHTML=`${Ui(n.phase==="answering"?"vote":"card")}<span class="lbl">${e}</span><span class="t" id="timer"></span>`,qm(),Vl()}function qm(){let n=ue("#timer");if(!n||!G.pub)return;if(!G.endsAt){n.textContent=`${G.pub.players.length} ng\u01B0\u1EDDi`,n.classList.remove("urgent"),ue("#timebar").style.width="0";return}let e=Math.max(0,G.endsAt-Date.now()),t=Math.ceil(e/1e3);n.textContent=`${String(Math.floor(t/60)).padStart(2,"0")}:${String(t%60).padStart(2,"0")}`,n.classList.toggle("urgent",t<=10&&t>0),ue("#timebar").style.width=G.pub.durMs?`${Math.min(100,e/G.pub.durMs*100)}%`:"0";let i=ue("#ansTimer");i&&(i.textContent=t+"s")}function uw(){let n=G.pub,e=G.isHost,t=n.config;G.puppet=null;let i=n.categories;ue("#stage").innerHTML=`
  <div class="panel lobby-hero hero">
    <div class="grow"><div class="lbl">M\xE3 ph\xF2ng</div><div class="big-code">${Ze(G.code)}</div>
    <p style="margin:10px 0 0">G\u1EEDi link cho b\u1EA1n b\xE8 \u0111\u1EC3 c\xF9ng v\xE0o. ${Fi?"<b>(Ch\u1EBF \u0111\u1ED9 th\u1EED: ch\u1EC9 c\xE1c tab tr\xEAn m\xE1y n\xE0y)</b>":""}</p></div>
    <button class="btn sun" id="copyLink">${Ui("copy")}Sao ch\xE9p link m\u1EDDi</button>
  </div>
  <div class="sect-title"><h3>Ng\u01B0\u1EDDi ch\u01A1i (${n.players.length})</h3><span class="muted">T\u1ED1i thi\u1EC3u 2 ng\u01B0\u1EDDi</span></div>
  <div class="grid">${n.players.map(r=>`
    <div class="pcard ${r.cid===G.cid?"me":""} ${r.connected?"":"offline"}">
      <div class="corner l">${r.cid===n.hostCid?`<span class="ic crown">${fw}</span>`:""}</div>
      ${e&&r.cid!==G.cid?`<button class="kick" data-kick="${r.cid}" title="M\u1EDDi ra">\xD7</button>`:""}
      ${en(r)}<div class="pname">${Ze(r.name)}</div><div class="ptag">${Ze(ms[r.skin]?.name||"")}</div>
    </div>`).join("")}</div>
  <div class="sect-title"><h3>C\xE0i \u0111\u1EB7t</h3><span class="muted">${n.poolCount}/${n.itemCount} \u0111\u1EC1 \u0111ang b\u1EADt</span></div>
  <div class="panel cfg ro-body" id="lobbyOpts">${zm(t,i,e)}</div>
  <div class="start-wrap">
    ${e?`<button class="btn primary big" id="startBtn" ${n.canStart?"disabled":""}>\u{1F3AD} B\u1EAFt \u0111\u1EA7u di\u1EC5n!</button>`:'<button class="btn big" disabled>\u0110ang ch\u1EDD ch\u1EE7 ph\xF2ng b\u1EAFt \u0111\u1EA7u...</button>'}
    ${n.canStart?`<div class="why">${Ze(n.canStart)}</div>`:""}
  </div>`,ue("#copyLink").onclick=()=>wc(Mc(G.code),"\u0110\xE3 sao ch\xE9p link m\u1EDDi!");let s=ue("#startBtn");s&&(s.onclick=()=>Pi({t:"start"})),xt("[data-kick]").forEach(r=>r.onclick=()=>Pi({t:"kick",cid:r.dataset.kick})),e&&Hm(ue("#lobbyOpts"),t,i,r=>{Pi({t:"cfg",cfg:r});let a={...iu(),...r};Bm(a)})}var fw='<svg viewBox="0 0 64 64"><path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/></svg>';function pw(){let n=G.pub,e=n.turn,t=ue("#stage");t.querySelector(".stage-wrap")||(t.innerHTML=`
      <div class="panel turn-bar" id="turnBar"></div>
      <div class="panel stage-wrap stage3d" id="stageWrap">
        <div class="puppet-box" id="puppetBox"></div>
        <div class="st-hint" id="stHint" hidden></div><div class="key-flash" id="keyFlash"></div>

        <div class="stage-overlay" id="stageOverlay"></div>
      </div>
      <div id="belowStage"></div>`,G.puppet=Nl(ue("#puppetBox"),{stage:!0})),G.puppet||(G.puppet=Nl(ue("#puppetBox"),{stage:!0})),G.puppet.setLook(n.actorLook||{skin:"tron"}),ci()?G.puppet.setPose(G.pose):G.puppet.setPose(G.remotePose||jt);let i=e&&Bl(e.actor);ue("#turnBar").innerHTML=n.phase==="end"?`<b>\u{1F3C1} V\xE1n \u0111\xE3 k\u1EBFt th\xFAc</b><button class="btn sm" id="showEnd">Xem b\u1EA3ng x\u1EBFp h\u1EA1ng</button>${G.isHost?'<button class="btn sm primary" id="toLobby">Ch\u01A1i l\u1EA1i</button>':""}`:e?`
    <div class="tb-actor">${en(i,"sm")}<span><b>${Ze(i?.name)}</b> \u0111ang di\u1EC5n</span></div>
    <span class="chip cat">${Ze(e.category)}</span>
    <span class="chip pts">${e.points}\u0111</span>
    <span class="chip mult m${e.mult}">x${e.mult}</span>`:"";let s=ue("#showEnd");s&&(s.onclick=jm);let r=ue("#toLobby");r&&(r.onclick=()=>Pi({t:"lobby"}));let a=ue("#stHint"),o=e?.hint;a.hidden=!(o&&["acting","answering"].includes(n.phase)),o&&(a.innerHTML=`<span class="hl">\u{1F4A1} G\u1EE3i \xFD</span><span class="pat">${Ze(o.pattern)}</span><span class="cnt">${o.letters.join(" + ")} ch\u1EEF</span>${o.text?`<span class="txt">${Ze(o.text)}</span>`:""}`);let l=ue("#stageOverlay");if(n.phase==="answering"){let h=Bl(e.answering.cid);l.innerHTML=`<div class="bubble ans">${en(h,"sm")}<b>${Ze(h?.name)}</b> b\u1EA5m chu\xF4ng! \u0110ang tr\u1EA3 l\u1EDDi... <span id="ansTimer"></span></div>`}else if(n.phase==="reveal"&&e?.item){let h=e.result,u=h&&Bl(h.cid);l.innerHTML=`<div class="reveal-card">${Ym(e.item.image,"big")}<div class="rv-name">${Ze(e.item.name)}</div>
      <div class="rv-sub">${h?`${en(u,"sm")} <b>${Ze(u?.name)}</b> \u0111o\xE1n \u0111\xFAng! +${h.gain}`:"Kh\xF4ng ai \u0111o\xE1n ra!"}</div></div>`}else l.innerHTML="";let c=ue("#belowStage");ci()?mw(c):n.phase==="acting"||n.phase==="answering"?vw(c):c.innerHTML=n.phase==="reveal"?'<div class="panel action calm"><div class="msg"><b>Chu\u1EA9n b\u1ECB l\u01B0\u1EE3t ti\u1EBFp theo...</b></div></div>':""}function Ym(n,e=""){return/^(https?:|data:image|\.{0,2}\/|images\/)/.test(n)||/\.(png|jpe?g|gif|webp|svg)$/i.test(n)?`<img class="item-img ${e}" src="${Ze(n)}" alt="">`:`<span class="item-emoji ${e}">${Ze(n)}</span>`}function mw(n){let e=G.priv?.item,t=G.pub.turn,i="actor-"+G.lastTurnKey+"-"+(e?.id||"")+"-"+t.rerolls;if(n.dataset.key!==i){n.dataset.key=i,n.innerHTML=`
      <div class="panel secret">
        ${e?Ym(e.image):""}
        <div class="sc-main"><div class="sc-k">\u0110\u1EC1 c\u1EE7a b\u1EA1n \u2014 ch\u1EC9 m\xECnh b\u1EA1n th\u1EA5y</div><div class="sc-name">${Ze(e?.name||"...")}</div>
        <div class="sc-sub">${Ze(e?.category||"")} \xB7 ${e?.points||0}\u0111 \xD7 ${t.mult} = <b>${(e?.points||0)*t.mult}\u0111</b></div>
        ${e?.acting?`<div class="sc-tip"><span>\u{1F3AC} M\u1EB9o di\u1EC5n <small>(b\u1EA5m \u0111\u1EC3 l\xE0m theo)</small>:</span> ${Jd(e.acting).map((r,a)=>r.ids?`<button type="button" class="tip-chip" data-tip="${a}" title="${Ze(r.ids.map(o=>$a[o]||o).join(" + "))}">${Ze(r.text)}${r.ids.length===1?zl(r.ids[0]):""}</button>`:`<span class="tip-txt">${Ze(r.text)}</span>`).join('<span class="tip-plus">+</span>')}</div>`:""}</div>
        <div class="sc-btns"><button class="btn sm" id="rerollBtn" ${t.rerolls>0?"":"disabled"}>\u{1F504} \u0110\u1ED5i \u0111\u1EC1 (${t.rerolls})</button><button class="btn sm ghost" id="skipBtn">B\u1ECF l\u01B0\u1EE3t</button></div>
      </div>
      <div class="panel controls">
        <div class="ctl-head"><b>\u0110i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt</b><span class="muted">D\xF9ng b\xE0n ph\xEDm cho nhanh \u2014 ph\xEDm t\u1EAFt hi\u1EC7n tr\xEAn t\u1EEBng n\xFAt</span>
          <button class="btn sm" id="keysBtn">\u2328\uFE0F Ph\xEDm t\u1EAFt</button><button class="btn sm" id="resetPose">\u0110\u1EB7t l\u1EA1i ${zl("reset")}</button></div>
        <div class="ctl-tabs">${Hl().map((r,a)=>`<button type="button" data-tab="${a}" class="${a===G.ctlTab?"on":""}">${r.group}</button>`).join("")}</div>
        <div class="ctl-opts" id="ctlOpts"></div>
      </div>`,ue("#rerollBtn").onclick=()=>Pi({t:"reroll"}),ue("#skipBtn").onclick=()=>Pi({t:"skipTurn"}),ue("#resetPose").onclick=()=>su({...jt}),ue("#keysBtn").onclick=Km;let s=Jd(e?.acting);xt("[data-tip]",n).forEach(r=>r.onclick=()=>gw(s[r.dataset.tip])),xt(".ctl-tabs button",n).forEach(r=>r.onclick=()=>{G.ctlTab=Number(r.dataset.tab),xt(".ctl-tabs button",n).forEach(a=>a.classList.toggle("on",a===r)),li()})}li()}var Hl=()=>[{group:"\u2B50 T\u1ED5 h\u1EE3p",key:"combo"},...On];function li(){let n=ue("#ctlOpts");if(!n)return;let e=Hl()[G.ctlTab]||Hl()[0];if(e.key==="combo"){n.innerHTML=Tn.combos.map(t=>`<button type="button" class="ctl combo" data-combo="${t.id}">${Ze(t.name)}${zl("combo:"+t.id)}</button>`).join("")+'<button type="button" class="ctl add" id="saveCombo">\uFF0B L\u01B0u t\u01B0 th\u1EBF hi\u1EC7n t\u1EA1i</button>',xt("[data-combo]",n).forEach(t=>t.onclick=()=>nu("combo:"+t.dataset.combo)),ue("#saveCombo").onclick=yw;return}n.innerHTML=e.opts.map(([t,i])=>`<button type="button" class="ctl ${(e.oneshot?!1:G.pose[e.key]===t)?"on":""} ${e.key==="face"?"emo":""}" data-v="${t}">${i}${zl(e.key+":"+t)}</button>`).join(""),xt("button",n).forEach(t=>t.onclick=()=>nu(e.key+":"+t.dataset.v))}var $a={};for(let n of On)for(let[e,t]of n.opts)$a[n.key+":"+e]=(/^(arm|leg|prop)/.test(n.key)?n.group+": ":"")+t;function nu(n){if(!ci())return!1;let[e,t]=n.split(":"),i={...G.pose},s=$a[n]||"";if(e==="combo"){let r=Tn.combos.find(a=>a.id===t);if(!r)return!1;Object.assign(i,jt,r.pose,{fx:null}),s=r.name}else if(e==="reset")Object.assign(i,jt),s="\u0110\u1EB7t l\u1EA1i";else{if(e==="help")return Km(),!0;if(e==="cycle"){let r=On.find(o=>o.key===t);if(!r)return!1;let a=[...r.opts.map(o=>o[0]),null];i[t]=a[(a.indexOf(i[t]??null)+1)%a.length],s=i[t]?$a[t+":"+i[t]]||"":r.group+": b\u1ECF"}else if(e==="clear")i[t]=null,s=(On.find(r=>r.key===t)?.group||"")+": b\u1ECF";else{let r=On.find(a=>a.key===e);if(!r)return!1;r.oneshot?i.fx={name:t,seq:++G.poseSeq,at:Date.now()}:r.toggle?i[e]=i[e]===t?null:t:i[e]=t}}return su(i),Zm(s),!0}function gw(n){if(!n?.ids||!ci())return;let e={...G.pose};for(let i of n.ids){let[s,r]=i.split(":"),a=On.find(o=>o.key===s);a&&(a.oneshot?e.fx={name:r,seq:++G.poseSeq,at:Date.now()}:e[s]=r)}su(e),Zm(n.ids.map(i=>$a[i]||"").filter(Boolean).join(" + "));let t=Hl().findIndex(i=>i.key===n.ids[0].split(":")[0]);t>=0&&(G.ctlTab=t,xt(".ctl-tabs button").forEach(i=>i.classList.toggle("on",Number(i.dataset.tab)===t)),li())}function Zm(n){let e=ue("#keyFlash");!e||!n||(e.textContent=n,e.classList.remove("show"),e.offsetWidth,e.classList.add("show"))}function su(n){G.pose=n,G.puppet?.setPose(n),G.net.send("pose",n),G.isHost&&G.engine.setPose(G.cid,n),li()}var Jn=null;document.addEventListener("keydown",n=>{if(Jn){if(n.preventDefault(),n.code==="Escape"){Jn=null,Dr();return}let i=Zd(n);if(!i)return;Tn.bind(Jn,i),Jn=null,Dr();return}if(/INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName)||n.repeat||!ci())return;let e=Zd(n),t=e&&Tn.actionFor(e);t&&nu(t)&&n.preventDefault()});function yw(){let n=ue("#ctlOpts"),e=ue("#saveCombo");if(!e)return;e.outerHTML='<form class="combo-form" id="comboForm"><input id="comboName" maxlength="30" placeholder="T\xEAn t\u1ED5 h\u1EE3p, VD: C\u1EAFt t\xF3c" /><button class="btn sm primary">L\u01B0u</button></form>';let t=ue("#comboName");t.focus(),ue("#comboForm").onsubmit=i=>{i.preventDefault();let s=Tn.addCombo(t.value.trim(),G.pose),r=Tn.combos.find(a=>a.id===s);tn(`\u0110\xE3 l\u01B0u "${r.name}"${r.key?" \u2014 ph\xEDm "+Ha(r.key):""}`),li()},t.onkeydown=i=>{i.key==="Escape"&&li()}}function Km(){let n=ue("#overlay");n.dataset.kind="keys",n.classList.remove("hidden"),n.onclick=e=>{e.target===n&&(Jn=null,Ur())},Dr()}function Dr(){let n=ue("#overlay");if(n.dataset.kind!=="keys")return;let e=(s,r)=>`<div class="kb-row"><span>${Ze(r)}</span><button type="button" class="kb-key ${Jn===s?"wait":""}" data-bind="${Ze(s)}">${Jn===s?"Nh\u1EA5n ph\xEDm\u2026":Tn.keyOf(s)?Ze(Ha(Tn.keyOf(s))):"\u2014"}</button></div>`,t=ue(".kb-body",n)?.scrollTop||0;n.innerHTML=`<div class="modal panel wide kb-modal">
    <div class="kb-top"><h2>\u2328\uFE0F Ph\xEDm t\u1EAFt</h2><div style="display:flex;gap:6px"><button class="btn sm" id="kbReset">Kh\xF4i ph\u1EE5c m\u1EB7c \u0111\u1ECBnh</button><button class="btn sm primary" id="kbClose">Xong</button></div></div>
    <p class="kb-tip">B\u1EA5m v\xE0o \xF4 ph\xEDm r\u1ED3i nh\u1EA5n ph\xEDm m\u1EDBi (c\xF3 th\u1EC3 k\xE8m \u21E7 Shift ho\u1EB7c ${/Mac/.test(navigator.platform)?"\u2325 Option":"Alt"}). Esc \u0111\u1EC3 hu\u1EF7. Ph\xEDm t\u1EAFt ch\u1EC9 ho\u1EA1t \u0111\u1ED9ng khi b\u1EA1n \u0111ang di\u1EC5n.</p>
    <div class="kb-body">
      <div class="kb-group"><h3>\u2B50 T\u1ED5 h\u1EE3p c\u1EE7a b\u1EA1n</h3>
        ${Tn.combos.map(s=>`<div class="kb-row combo-row"><input class="kb-name" data-rename="${s.id}" value="${Ze(s.name)}" maxlength="30"/><button type="button" class="kb-key ${Jn==="combo:"+s.id?"wait":""}" data-bind="combo:${s.id}">${Jn==="combo:"+s.id?"Nh\u1EA5n ph\xEDm\u2026":s.key?Ze(Ha(s.key)):"\u2014"}</button><button type="button" class="kb-del" data-del="${s.id}" title="Xo\xE1">\u2715</button></div>`).join("")}
        <p class="kb-tip">T\u1EA1o t\u1ED5 h\u1EE3p m\u1EDBi: t\u1EA1o d\xE1ng cho nh\xE2n v\u1EADt r\u1ED3i b\u1EA5m "\uFF0B L\u01B0u t\u01B0 th\u1EBF hi\u1EC7n t\u1EA1i" trong tab \u2B50 T\u1ED5 h\u1EE3p.</p>
      </div>
      ${km(Tn).map(s=>`<div class="kb-group"><h3>${Ze(s.title)}</h3>${s.items.map(r=>e(r.id,r.label)).join("")}</div>`).join("")}
    </div></div>`;let i=ue(".kb-body",n);i.scrollTop=t,ue("#kbClose").onclick=()=>{Jn=null,Ur(),li()},ue("#kbReset").onclick=()=>{Tn.reset(),Dr(),li()},xt("[data-bind]",n).forEach(s=>s.onclick=()=>{Jn=s.dataset.bind,Dr()}),xt("[data-del]",n).forEach(s=>s.onclick=()=>{Tn.removeCombo(s.dataset.del),Dr(),li()}),xt("[data-rename]",n).forEach(s=>s.onchange=()=>{Tn.renameCombo(s.dataset.rename,s.value.trim()||"T\u1ED5 h\u1EE3p"),li()})}function vw(n){let e=G.pub,t=e.turn,i=t.locked.includes(G.cid),s=e.phase==="answering"&&t.answering?.cid===G.cid,r=`g-${G.lastTurnKey}-${e.phase}-${t.answering?.cid||""}-${i}`,a=t.guesses.filter(c=>!c.ok).map(c=>`<span class="guess">${en(Bl(c.cid),"xs")} ${Ze(c.text||"(h\u1EBFt gi\u1EDD)")}</span>`).join("");if(n.dataset.key===r){let c=ue("#guessList");c&&(c.innerHTML=a);return}if(n.dataset.key=r,s){n.innerHTML=`<form class="panel answer-box" id="ansForm" autocomplete="off"><b>B\u1EA1n b\u1EA5m nhanh nh\u1EA5t! \u0110\xE1p \xE1n l\xE0 g\xEC?</b>
      <div class="ans-row"><input id="ansInput" maxlength="60" placeholder="G\xF5 \u0111\xE1p \xE1n (kh\xF4ng c\u1EA7n d\u1EA5u)..." /><button class="btn primary" type="submit">Tr\u1EA3 l\u1EDDi</button></div></form>`;let c=ue("#ansInput");c.focus(),ue("#ansForm").onsubmit=h=>{h.preventDefault(),Pi({t:"answer",text:c.value})};return}let o=e.phase==="acting"&&!i;n.innerHTML=`<div class="buzz-zone">
      <button class="buzzer ${o?"":"off"}" id="buzzBtn" ${o?"":"disabled"}><span>\u{1F514}</span>${i?"\u0110\xE3 tr\u1EA3 l\u1EDDi sai":e.phase==="answering"?"\u0110ang c\xF3 ng\u01B0\u1EDDi tr\u1EA3 l\u1EDDi":"B\u1EA4M CHU\xD4NG"}</button>
      <div class="buzz-hint">${o?"Ho\u1EB7c nh\u1EA5n ph\xEDm <kbd>Space</kbd>":i?"Ch\u1EDD l\u01B0\u1EE3t sau nh\xE9!":""}</div>
      <div class="guess-list" id="guessList">${a}</div>
    </div>`;let l=ue("#buzzBtn");l&&(l.onclick=()=>{co(),Pi({t:"buzz"})})}document.addEventListener("keydown",n=>{if(n.code!=="Space"||/INPUT|TEXTAREA/.test(document.activeElement?.tagName))return;let e=ue("#buzzBtn");e&&!e.disabled&&(n.preventDefault(),e.click())});function Jm(){let n=G.pub,e=n.turn,t=[...n.players].sort((i,s)=>s.score-i.score);ue("#scoreBox").innerHTML=`<div class="sb-head"><b>B\u1EA3ng \u0111i\u1EC3m</b></div>${t.map((i,s)=>`
    <div class="sb-row ${i.cid===G.cid?"me":""} ${i.connected?"":"offline"} ${i.pid&&G.speaking.has(i.pid)||i.cid===G.cid&&G.speaking.has("self")?"speaking":""}">
      <span class="rank">${s+1}</span>${en(i,"sm")}<span class="nm">${Ze(i.name)}</span>
      ${e?.actor===i.cid&&n.phase!=="lobby"&&n.phase!=="end"?'<span class="tag act">\u{1F3AD} di\u1EC5n</span>':""}
      ${e?.locked?.includes(i.cid)?'<span class="tag no">\u2716</span>':""}
      <b class="pt">${i.score}</b></div>`).join("")}`}function xw(){let n=ue("#chatInput"),e=ci();n.disabled=e,n.placeholder=e?"B\u1EA1n \u0111ang di\u1EC5n \u2014 kh\xF4ng \u0111\u01B0\u1EE3c chat! \u{1F910}":"Nh\u1EAFn cho m\u1ECDi ng\u01B0\u1EDDi..."}function ru(n){G.chat.push(n),G.chat.length>300&&G.chat.shift();let e=ue("#chatList"),t=e.scrollHeight-e.scrollTop-e.clientHeight<80;e.insertAdjacentHTML("beforeend",bw(n)),(t||n.cid===G.cid)&&(e.scrollTop=e.scrollHeight),n.k==="m"&&ue(".room-body").dataset.tab==="stage"&&innerWidth<=900&&(G.unread++,ue("#chatBadge").textContent=G.unread,ue("#chatBadge").classList.remove("hidden"))}var _w={correct:"\u{1F389}",wrong:"\u274C",reveal:"\u{1F4A1}",win:"\u{1F3C6}",phase:"\u{1F3AD}",join:"\u{1F44B}",leave:"\u{1F6AA}",info:"\u2139\uFE0F"};function bw(n){return n.k==="sys"?`<div class="sys ${n.kind==="correct"?"day":n.kind==="wrong"?"death":n.kind==="win"?"win":""}"><span>${_w[n.kind]||"\u2022"}</span><span>${Ze(n.text)}</span></div>`:`<div class="msg ${n.cid===G.cid?"mine":""} ${n.masked?"masked":""}">${en(n,"sm")}<div class="body"><div class="nm">${Ze(n.name)}</div>${Ze(n.text)}</div></div>`}ue("#chatForm").onsubmit=n=>{n.preventDefault();let e=ue("#chatInput"),t=e.value.trim();!t||!G.pub||e.disabled||(e.value="",G.isHost?Vm(G.cid,t):G.hostPid&&G.net.send("chat",{text:t},G.hostPid))};xt(".mobile-tabs button").forEach(n=>n.onclick=()=>{ue(".room-body").dataset.tab=n.dataset.tab,xt(".mobile-tabs button").forEach(e=>e.classList.toggle("active",e===n)),n.dataset.tab==="side"&&(G.unread=0,ue("#chatBadge").classList.add("hidden"))});xt(".mt-ic").forEach(n=>n.innerHTML=Ui(n.dataset.ic));function jm(){let n=G.pub;if(!n||n.phase!=="end")return;let e=[...n.players].sort((r,a)=>a.score-r.score),t=[e[1],e[0],e[2]],i=ue("#overlay");i.dataset.kind="end",i.innerHTML=`<div class="modal panel wide">
    <h2>\u{1F3C6} B\u1EA3ng v\xE0ng di\u1EC5n vi\xEAn</h2>
    <div class="podium">${t.map((r,a)=>r?`<div class="pod p${[2,1,3][a]}">${en(r,"xl")}<b>${Ze(r.name)}</b><span>${r.score} \u0111i\u1EC3m</span><div class="step">${[2,1,3][a]}</div></div>`:"<div></div>").join("")}</div>
    <div class="end-list">${e.slice(3).map((r,a)=>`<div class="end-row">${en(r,"sm")}<div><div class="nm">#${a+4} ${Ze(r.name)}</div><div class="rr">${r.score} \u0111i\u1EC3m \xB7 \u0111o\xE1n \u0111\xFAng ${r.correct}</div></div></div>`).join("")}</div>
    <div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap">
      <button class="btn" id="endClose">\u0110\xF3ng</button>${G.isHost?'<button class="btn primary" id="endLobby">Ch\u01A1i v\xE1n m\u1EDBi</button>':""}</div>
  </div>`,i.classList.remove("hidden"),i.onclick=r=>{r.target===i&&Ur()},ue("#endClose").onclick=Ur;let s=ue("#endLobby");s&&(s.onclick=()=>{Ur(),Pi({t:"lobby"})}),e[0]?.cid===G.cid&&bc()}function Ur(){let n=ue("#overlay");n.classList.add("hidden"),n.innerHTML="",n.dataset.kind=""}function Qm(){if(!G.voice)return;let n=ci();G.voice.setRules({canSpeak:!n,canHear:()=>!0}),Vl()}function Vl(){let n=G.voice,e=ue("#micBtn"),t=ue("#deafBtn"),i=ci();if(!n||!n.enabled)e.className="icon-btn",e.innerHTML=Ui("micOff"),e.title="B\u1EADt voice chat";else{let s=n.micOn&&!i;e.className=`icon-btn ${s?"on":"off"} ${i?"locked":""}`,e.innerHTML=Ui(s?"mic":"micOff"),e.title=i?"Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c n\xF3i":n.micOn?"T\u1EAFt mic":"B\u1EADt mic"}t.className=`icon-btn ${n?.deaf?"off":""}`,t.innerHTML=Ui(n?.deaf?"speakerOff":"speaker")}ue("#micBtn").onclick=async()=>{let n=G.voice;if(n){if(n.enabled)n.setMic(!n.micOn),n.micOn&&ci()&&tn("Ng\u01B0\u1EDDi di\u1EC5n kh\xF4ng \u0111\u01B0\u1EE3c n\xF3i!");else try{await n.enable(),Qm(),tn(ci()?"B\u1EA1n \u0111ang di\u1EC5n \u2014 mic t\u1EA1m kho\xE1":"\u0110\xE3 b\u1EADt voice chat")}catch{tn("Kh\xF4ng truy c\u1EADp \u0111\u01B0\u1EE3c micro. H\xE3y cho ph\xE9p quy\u1EC1n micro trong tr\xECnh duy\u1EC7t.",!0)}Vl()}};ue("#deafBtn").onclick=()=>{let n=G.voice;n&&(n.ensureCtx(),n.setDeaf(!n.deaf),Vl())};function Mw(n){(n.size!==G.speaking.size||[...n].some(t=>!G.speaking.has(t)))&&(G.speaking=n,G.pub&&Jm())}lw();})();
