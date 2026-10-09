(()=>{var Na=document.documentElement,mc=window.matchMedia?window.matchMedia("(prefers-color-scheme: dark)"):null,gc=()=>Na.dataset.theme||(mc?.matches?"dark":"light");function Ua(){let i=gc()==="dark";document.querySelectorAll("[data-theme-toggle]").forEach(t=>{t.textContent=i?"\u2600\uFE0F":"\u{1F319}",t.title=i?"Chuy\u1EC3n sang giao di\u1EC7n s\xE1ng":"Chuy\u1EC3n sang giao di\u1EC7n t\u1ED1i",t.setAttribute("aria-label",t.title)})}function pu(){try{let i=localStorage.getItem("theme");(i==="dark"||i==="light")&&(Na.dataset.theme=i)}catch{}document.querySelectorAll("[data-theme-toggle]").forEach(i=>{i.onclick=()=>{let t=gc()==="dark"?"light":"dark";Na.dataset.theme=t;try{localStorage.setItem("theme",t)}catch{}Ua()}}),mc?.addEventListener?.("change",Ua),Ua()}pu();var ge=i=>`<svg viewBox="0 0 64 64" aria-hidden="true" focusable="false">${i}</svg>`,Fa={wolf:ge(`
    <path fill="currentColor" d="M12 6 L25 22 Q32 19 39 22 L52 6 L54 30 Q54 42 44 51 L36 58 Q32 60 28 58 L20 51 Q10 42 10 30 Z"/>
    <path fill="var(--ink)" opacity=".35" d="M15 13 L22 22 L17 26 Z M49 13 L42 22 L47 26 Z"/>
    <path fill="var(--ink)" d="M18 31 L28 34 L21 38 Z M46 31 L36 34 L43 38 Z"/>
    <path fill="var(--ink)" d="M27 47 L37 47 L32 52 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="2" stroke-linecap="round" opacity=".5" d="M32 40 V46"/>`),villager:ge(`
    <path fill="currentColor" d="M8 31 L32 10 L56 31 L51 31 L51 56 L13 56 L13 31 Z"/>
    <rect x="42" y="13" width="6" height="11" rx="1" fill="currentColor"/>
    <rect x="27" y="38" width="10" height="18" rx="5" fill="var(--ink)"/>
    <rect x="17" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>
    <rect x="40" y="34" width="7" height="7" rx="1.5" fill="var(--ink)" opacity=".7"/>`),seer:ge(`
    <path fill="currentColor" d="M4 34 Q32 6 60 34 Q32 62 4 34 Z"/>
    <circle cx="32" cy="34" r="11" fill="var(--ink)"/>
    <circle cx="32" cy="34" r="5" fill="currentColor"/>
    <circle cx="35.5" cy="30.5" r="2" fill="#fff" opacity=".9"/>
    <path fill="currentColor" d="M32 2 L34 9 L41 11 L34 13 L32 20 L30 13 L23 11 L30 9 Z" transform="translate(16 -1) scale(.6)"/>`),guard:ge(`
    <path fill="currentColor" d="M32 5 L54 13 V30 Q54 47 32 59 Q10 47 10 30 V13 Z"/>
    <path fill="var(--ink)" opacity=".28" d="M32 5 L54 13 V30 Q54 47 32 59 Z"/>
    <path fill="none" stroke="var(--ink)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M21 32 L29 40 L44 24"/>`),witch:ge(`
    <rect x="25" y="5" width="14" height="6" rx="2" fill="currentColor"/>
    <path fill="currentColor" d="M27 11 H37 V24 L50 45 Q55 58 42 58 H22 Q9 58 14 45 L27 24 Z"/>
    <path fill="var(--ink)" opacity=".45" d="M17.5 40 Q32 35 46.5 40 L50 45 Q55 58 42 58 H22 Q9 58 14 45 Z"/>
    <circle cx="27" cy="48" r="3" fill="currentColor"/>
    <circle cx="37" cy="51" r="2" fill="currentColor"/>
    <circle cx="34" cy="44" r="1.6" fill="currentColor"/>`),hunter:ge(`
    <circle cx="32" cy="32" r="21" fill="none" stroke="currentColor" stroke-width="5"/>
    <circle cx="32" cy="32" r="8" fill="currentColor"/>
    <path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 3 V15 M32 49 V61 M3 32 H15 M49 32 H61"/>
    <circle cx="32" cy="32" r="3" fill="var(--ink)"/>`)},ix={moon:ge('<path fill="currentColor" d="M40 6 A26 26 0 1 0 58 44 A21 21 0 0 1 40 6 Z"/>'),sun:ge('<circle cx="32" cy="32" r="12" fill="currentColor"/><g stroke="currentColor" stroke-width="5" stroke-linecap="round"><path d="M32 4V12M32 52V60M4 32H12M52 32H60M12 12L18 18M46 46L52 52M12 52L18 46M46 18L52 12"/></g>'),skull:ge('<path fill="currentColor" d="M32 6 C17 6 9 16 9 29 C9 37 13 42 18 45 V53 Q18 57 22 57 H42 Q46 57 46 53 V45 C51 42 55 37 55 29 C55 16 47 6 32 6 Z"/><circle cx="23" cy="31" r="6" fill="var(--ink)"/><circle cx="41" cy="31" r="6" fill="var(--ink)"/><path fill="var(--ink)" d="M32 38 L36 45 H28 Z"/><path stroke="var(--ink)" stroke-width="2.5" d="M26 50V57M32 50V57M38 50V57"/>'),vote:ge('<path fill="currentColor" d="M10 34 H54 V56 Q54 58 52 58 H12 Q10 58 10 56 Z"/><path fill="currentColor" opacity=".55" d="M20 8 H44 V34 H20 Z"/><path fill="none" stroke="var(--ink)" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" d="M25 21 L30 26 L39 16"/><rect x="18" y="32" width="28" height="4" rx="2" fill="var(--ink)"/>'),noose:ge('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M32 2 V26"/><ellipse cx="32" cy="42" rx="12" ry="15" fill="none" stroke="currentColor" stroke-width="5"/><rect x="27" y="22" width="10" height="9" rx="3" fill="currentColor"/>'),mic:ge('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42"/>'),micOff:ge('<rect x="22" y="5" width="20" height="34" rx="10" fill="currentColor" opacity=".45"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M13 30 Q13 49 32 49 Q51 49 51 30 M32 49 V59 M22 59 H42" opacity=".45"/><path stroke="currentColor" stroke-width="6" stroke-linecap="round" d="M8 8 L56 56"/>'),speaker:ge('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 22 Q49 32 42 42 M48 14 Q61 32 48 50"/>'),speakerOff:ge('<path fill="currentColor" d="M8 24 H20 L34 10 V54 L20 40 H8 Z"/><path stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M42 24 L58 40 M58 24 L42 40"/>'),crown:ge('<path fill="currentColor" d="M6 20 L20 32 L32 12 L44 32 L58 20 L52 50 H12 Z"/><rect x="12" y="52" width="40" height="6" rx="2" fill="currentColor"/>'),copy:ge('<rect x="20" y="20" width="34" height="38" rx="5" fill="none" stroke="currentColor" stroke-width="5"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" d="M12 44 V12 Q12 8 16 8 H40"/>'),chat:ge('<path fill="currentColor" d="M8 12 Q8 6 14 6 H50 Q56 6 56 12 V38 Q56 44 50 44 H26 L14 56 V44 Q8 44 8 38 Z"/>'),users:ge('<circle cx="24" cy="20" r="10" fill="currentColor"/><path fill="currentColor" d="M6 54 Q6 34 24 34 Q42 34 42 54 Z"/><circle cx="45" cy="22" r="8" fill="currentColor" opacity=".6"/><path fill="currentColor" opacity=".6" d="M44 36 Q58 36 58 54 H46 Q46 43 40 38 Z"/>'),card:ge('<rect x="12" y="4" width="40" height="56" rx="6" fill="currentColor"/><circle cx="32" cy="30" r="9" fill="var(--ink)"/>'),door:ge('<path fill="none" stroke="currentColor" stroke-width="5" stroke-linejoin="round" d="M28 8 H52 V56 H28"/><path fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" d="M8 32 H38 M30 22 L40 32 L30 42"/>'),heal:ge('<path fill="currentColor" d="M32 56 C10 42 4 30 8 20 C12 10 26 8 32 18 C38 8 52 10 56 20 C60 30 54 42 32 56 Z"/>'),poison:ge('<path fill="currentColor" d="M32 4 C32 4 12 28 12 40 A20 20 0 0 0 52 40 C52 28 32 4 32 4 Z"/><path stroke="var(--ink)" stroke-width="4" stroke-linecap="round" d="M24 34 L40 50 M40 34 L24 50"/>')},mu={wolf:{id:"wolf",name:"Ma S\xF3i",team:"wolf",color:"#ff5d6c",short:"M\u1ED7i \u0111\xEAm c\xF9ng b\u1EA7y ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 c\u1EAFn.",desc:"M\u1ED7i \u0111\xEAm, c\u1EA3 b\u1EA7y s\xF3i m\u1EDF m\u1EAFt, nh\xECn th\u1EA5y nhau v\xE0 c\xF9ng ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 c\u1EAFn. Ban ng\xE0y gi\u1EA3 l\xE0m d\xE2n l\xE0nh. Th\u1EAFng khi s\u1ED1 s\xF3i b\u1EB1ng ho\u1EB7c nhi\u1EC1u h\u01A1n s\u1ED1 ng\u01B0\u1EDDi c\xF2n l\u1EA1i."},villager:{id:"villager",name:"D\xE2n L\xE0ng",team:"village",color:"#f2b65a",short:"Kh\xF4ng c\xF3 n\u0103ng l\u1EF1c, ch\u1EC9 c\xF3 l\xFD l\u1EBD v\xE0 l\xE1 phi\u1EBFu.",desc:"Kh\xF4ng c\xF3 n\u0103ng l\u1EF1c \u0111\u1EB7c bi\u1EC7t. Ban ng\xE0y th\u1EA3o lu\u1EADn, suy lu\u1EADn v\xE0 b\u1ECF phi\u1EBFu treo c\u1ED5 k\u1EBB \u0111\xE1ng nghi. Th\u1EAFng khi t\u1EA5t c\u1EA3 s\xF3i b\u1ECB ti\xEAu di\u1EC7t."},seer:{id:"seer",name:"Ti\xEAn Tri",team:"village",color:"#a78bff",short:"M\u1ED7i \u0111\xEAm soi m\u1ED9t ng\u01B0\u1EDDi: l\xE0 s\xF3i hay kh\xF4ng.",desc:"M\u1ED7i \u0111\xEAm ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi \u0111\u1EC3 soi, qu\u1EA3n tr\xF2 s\u1EBD cho bi\u1EBFt ng\u01B0\u1EDDi \u0111\xF3 c\xF3 ph\u1EA3i l\xE0 S\xF3i hay kh\xF4ng. H\xE3y kh\xE9o l\xE9o d\u1EABn d\u1EAFt d\xE2n l\xE0ng m\xE0 kh\xF4ng \u0111\u1EC3 l\u1ED9 th\xE2n ph\u1EADn."},guard:{id:"guard",name:"B\u1EA3o V\u1EC7",team:"village",color:"#54b4ff",short:"M\u1ED7i \u0111\xEAm b\u1EA3o v\u1EC7 m\u1ED9t ng\u01B0\u1EDDi kh\u1ECFi s\xF3i.",desc:"M\u1ED7i \u0111\xEAm ch\u1ECDn m\u1ED9t ng\u01B0\u1EDDi (c\xF3 th\u1EC3 l\xE0 ch\xEDnh m\xECnh) \u0111\u1EC3 b\u1EA3o v\u1EC7 kh\u1ECFi b\u1ECB s\xF3i c\u1EAFn. Kh\xF4ng \u0111\u01B0\u1EE3c b\u1EA3o v\u1EC7 c\xF9ng m\u1ED9t ng\u01B0\u1EDDi hai \u0111\xEAm li\xEAn ti\u1EBFp."},witch:{id:"witch",name:"Ph\xF9 Th\u1EE7y",team:"village",color:"#3fd69a",short:"M\u1ED9t b\xECnh c\u1EE9u, m\u1ED9t b\xECnh \u0111\u1ED9c.",desc:"C\xF3 m\u1ED9t b\xECnh thu\u1ED1c c\u1EE9u v\xE0 m\u1ED9t b\xECnh thu\u1ED1c \u0111\u1ED9c, m\u1ED7i b\xECnh d\xF9ng m\u1ED9t l\u1EA7n trong c\u1EA3 v\xE1n. Khi c\xF2n b\xECnh c\u1EE9u, m\u1ED7i \u0111\xEAm \u0111\u01B0\u1EE3c bi\u1EBFt ai b\u1ECB s\xF3i c\u1EAFn \u0111\u1EC3 quy\u1EBFt \u0111\u1ECBnh c\u1EE9u hay kh\xF4ng."},hunter:{id:"hunter",name:"Th\u1EE3 S\u0103n",team:"village",color:"#ff9447",short:"Khi ch\u1EBFt \u0111\u01B0\u1EE3c b\u1EAFn ch\u1EBFt m\u1ED9t ng\u01B0\u1EDDi.",desc:"Khi ch\u1EBFt (b\u1ECB s\xF3i c\u1EAFn ho\u1EB7c b\u1ECB treo c\u1ED5), \u0111\u01B0\u1EE3c k\xE9o theo m\u1ED9t ng\u01B0\u1EDDi b\u1EA5t k\u1EF3. N\u1EBFu ch\u1EBFt v\xEC thu\u1ED1c \u0111\u1ED9c c\u1EE7a Ph\xF9 th\u1EE7y th\xEC kh\xF4ng \u0111\u01B0\u1EE3c b\u1EAFn."}};function xc(i,t="md"){let e=mu[i];return e?`<span class="role-badge ${t}" style="--c:${e.color}" title="${e.name}">${Fa[i]}</span>`:""}var Ts=["\u{1F98A}","\u{1F43C}","\u{1F42F}","\u{1F438}","\u{1F435}","\u{1F427}","\u{1F981}","\u{1F428}","\u{1F430}","\u{1F419}","\u{1F984}","\u{1F432}","\u{1F43B}","\u{1F431}","\u{1F436}","\u{1F989}","\u{1F433}","\u{1F996}"],Cs=["#ff6b6b","#ffa94d","#ffd43b","#38d9a9","#4dabf7","#9775fa","#f783ac","#69db7c"];var En=(i,t=document)=>t.querySelector(i),ar=(i,t=document)=>[...t.querySelectorAll(i)],gu=new URLSearchParams(location.search),ax=gu.get("local")==="1"||window.MASOI_LOCAL===!0;function yc(i){return{get:t=>{try{return i().getItem(t)}catch{return null}},set:(t,e)=>{try{i().setItem(t,e)}catch{}},del:t=>{try{i().removeItem(t)}catch{}}}}var ox=yc(()=>sessionStorage),or=yc(()=>localStorage),Oa=i=>String(i??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function vc(){let i=null;try{i=JSON.parse(or.get("masoi-av")||"null")}catch{}return(!i||!Ts.includes(i.e))&&(i={e:Ts[Math.floor(Math.random()*Ts.length)],c:Math.floor(Math.random()*Cs.length)}),{name:or.get("masoi-name")||"",av:i}}function lr(i){or.set("masoi-name",i.name||""),or.set("masoi-av",JSON.stringify(i.av))}var Mc=(i,t="")=>i?.av?`<span class="avatar ${t}" style="--av:${Cs[i.av.c]||Cs[0]}">${i.av.e}</span>`:`<span class="avatar ${t}">?</span>`;function bc(i,t,e){let n=()=>{i.innerHTML=`
      <div class="lbl-sm" style="margin-bottom:6px">Avatar</div>
      <div class="emoji-grid">${Ts.map(s=>`<button type="button" class="${s===t.av.e?"on":""}" data-e="${s}" aria-label="Avatar ${s}">${s}</button>`).join("")}</div>
      <div class="lbl-sm" style="margin:14px 0 8px">M\xE0u n\u1EC1n</div>
      <div class="color-row">${Cs.map((s,r)=>`<button type="button" class="${r===t.av.c?"on":""}" data-c="${r}" style="--sw:${s}" aria-label="M\xE0u ${r+1}"></button>`).join("")}</div>`,ar("[data-e]",i).forEach(s=>s.onclick=()=>{t.av.e=s.dataset.e,lr(t),n(),e?.()}),ar("[data-c]",i).forEach(s=>s.onclick=()=>{t.av.c=Number(s.dataset.c),lr(t),n(),e?.()})};n()}var _c;function xu(){try{_c||(_c=new(window.AudioContext||window.webkitAudioContext)),_c.resume()}catch{}}document.addEventListener("pointerdown",xu,{once:!0});var _u=0,Sc=1,yu=2;var Eh=1,Gl=2,kn=3,oi=0,Ze=1,Re=2,ri=0,rs=1,cs=2,wc=3,Ec=4,vu=5,Ei=100,Mu=101,bu=102,Su=103,wu=104,Eu=200,Au=201,Tu=202,Cu=203,Mo=204,bo=205,Ru=206,Pu=207,Iu=208,Lu=209,Du=210,Uu=211,Nu=212,Fu=213,Ou=214,So=0,wo=1,Eo=2,hs=3,Ao=4,To=5,Co=6,Ro=7,Ah=0,ku=1,Bu=2,ai=0,zu=1,Vu=2,Hu=3,Gu=4,Wu=5,Xu=6,$u=7;var Th=300,us=301,fs=302,Po=303,Io=304,ba=306,Hs=1e3,Ti=1001,Lo=1002,Ye=1003,qu=1004;var cr=1005;var Mn=1006,ka=1007;var Ci=1008;var Gn=1009,Ch=1010,Rh=1011,Gs=1012,Wl=1013,Ri=1014,zn=1015,js=1016,Xl=1017,$l=1018,ds=1020,Ph=35902,Ih=1021,Lh=1022,bn=1023,Dh=1024,Uh=1025,as=1026,ps=1027,Sa=1028,ql=1029,Nh=1030,Yl=1031;var Zl=1033,Or=33776,kr=33777,Br=33778,zr=33779,Do=35840,Uo=35841,No=35842,Fo=35843,Oo=36196,ko=37492,Bo=37496,zo=37808,Vo=37809,Ho=37810,Go=37811,Wo=37812,Xo=37813,$o=37814,qo=37815,Yo=37816,Zo=37817,Jo=37818,Ko=37819,Qo=37820,jo=37821,Vr=36492,tl=36494,el=36495,Fh=36283,nl=36284,il=36285,sl=36286;var Gr=2300,rl=2301,Ba=2302,Ac=2400,Tc=2401,Cc=2402;var Yu=3200,Zu=3201;var Jl=0,Ju=1,ii="",Ne="srgb",fi="srgb-linear",Kl="display-p3",wa="display-p3-linear",Wr="linear",ue="srgb",Xr="rec709",$r="p3";var Bi=7680;var Rc=519,Ku=512,Qu=513,ju=514,Oh=515,tf=516,ef=517,nf=518,sf=519,al=35044;var Pc="300 es",Vn=2e3,qr=2001,li=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var za=Math.PI/180,Yr=180/Math.PI;function Hn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function Be(i,t,e){return Math.max(t,Math.min(e,i))}function rf(i,t){return(i%t+t)%t}function Va(i,t,e){return(1-e)*i+e*t}function Tn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function le(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var lt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Yt=class i{constructor(t,e,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],v=s[0],p=s[3],m=s[6],R=s[1],M=s[4],b=s[7],N=s[2],L=s[5],I=s[8];return r[0]=a*v+o*R+l*N,r[3]=a*p+o*M+l*L,r[6]=a*m+o*b+l*I,r[1]=c*v+h*R+f*N,r[4]=c*p+h*M+f*L,r[7]=c*m+h*b+f*I,r[2]=u*v+d*R+x*N,r[5]=u*p+d*M+x*L,r[8]=u*m+d*b+x*I,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=e*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/x;return t[0]=f*v,t[1]=(s*c-h*n)*v,t[2]=(o*n-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=d*v,t[7]=(n*l-c*e)*v,t[8]=(a*e-n*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ha.makeScale(t,e)),this}rotate(t){return this.premultiply(Ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ha=new Yt;function kh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Zr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function af(){let i=Zr("canvas");return i.style.display="block",i}var Ic={};function Hr(i){i in Ic||(Ic[i]=!0,console.warn(i))}function of(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function lf(i){let t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function cf(i){let t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var Lc=new Yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dc=new Yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rs={[fi]:{transfer:Wr,primaries:Xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Ne]:{transfer:ue,primaries:Xr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[wa]:{transfer:Wr,primaries:$r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Dc),fromReference:i=>i.applyMatrix3(Lc)},[Kl]:{transfer:ue,primaries:$r,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Dc),fromReference:i=>i.applyMatrix3(Lc).convertLinearToSRGB()}},hf=new Set([fi,wa]),ae={enabled:!0,_workingColorSpace:fi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!hf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Rs[t].toReference,s=Rs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Rs[i].primaries},getTransfer:function(i){return i===ii?Wr:Rs[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Rs[t].luminanceCoefficients)}};function os(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ga(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var zi,ol=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{zi===void 0&&(zi=Zr("canvas")),zi.width=t.width,zi.height=t.height;let n=zi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=zi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Zr("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=os(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(os(e[n]/255)*255):e[n]=os(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},uf=0,Jr=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:uf++}),this.uuid=Hn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Wa(s[a].image)):r.push(Wa(s[a]))}else r=Wa(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Wa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ol.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var ff=0,tn=class i extends li{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Ti,s=Ti,r=Mn,a=Ci,o=bn,l=Gn,c=i.DEFAULT_ANISOTROPY,h=ii){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Hn(),this.name="",this.source=new Jr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Th)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hs:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case Lo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hs:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case Lo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Th;tn.DEFAULT_ANISOTROPY=1;var be=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],v=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-v)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+v)<.1&&Math.abs(x+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(c+1)/2,b=(d+1)/2,N=(m+1)/2,L=(h+u)/4,I=(f+v)/4,F=(x+p)/4;return M>b&&M>N?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=L/n,r=I/n):b>N?b<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),n=L/s,r=F/s):N<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(N),n=I/r,s=F/r),this.set(n,s,r,e),this}let R=Math.sqrt((p-x)*(p-x)+(f-v)*(f-v)+(u-h)*(u-h));return Math.abs(R)<.001&&(R=1),this.x=(p-x)/R,this.y=(f-v)/R,this.z=(u-h)/R,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ll=class extends li{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new be(0,0,t,e),this.scissorTest=!1,this.viewport=new be(0,0,t,e);let s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Jr(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Wn=class extends ll{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Kr=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var cl=class extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ci=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],v=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=u,t[e+1]=d,t[e+2]=x,t[e+3]=v;return}if(f!==v||l!==u||c!==d||h!==x){let p=1-o,m=l*u+c*d+h*x+f*v,R=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){let N=Math.sqrt(M),L=Math.atan2(N,m*R);p=Math.sin(p*L)/N,o=Math.sin(o*L)/N}let b=o*R;if(l=l*p+u*b,c=c*p+d*b,h=h*p+x*b,f=f*p+v*b,p===1-o){let N=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=N,c*=N,h*=N,f*=N}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return t[e]=o*x+h*f+l*d-c*u,t[e+1]=l*x+h*u+c*f-o*d,t[e+2]=c*x+h*d+o*u-l*f,t[e+3]=h*x-o*f-l*u-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],f=e[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Be(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),f=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*f+this._w*u,this._x=n*f+this._x*u,this._y=s*f+this._y*u,this._z=r*f+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Uc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Uc.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xa.copy(this).projectOnVector(t),this.sub(Xa)}reflect(t){return this.sub(Xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xa=new U,Uc=new ci,Pi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(_n.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(_n.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=_n.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,_n):_n.fromBufferAttribute(r,a),_n.applyMatrix4(t.matrixWorld),this.expandByPoint(_n);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),hr.copy(n.boundingBox)),hr.applyMatrix4(t.matrixWorld),this.union(hr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,_n),_n.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),ur.subVectors(this.max,Ps),Vi.subVectors(t.a,Ps),Hi.subVectors(t.b,Ps),Gi.subVectors(t.c,Ps),Kn.subVectors(Hi,Vi),Qn.subVectors(Gi,Hi),_i.subVectors(Vi,Gi);let e=[0,-Kn.z,Kn.y,0,-Qn.z,Qn.y,0,-_i.z,_i.y,Kn.z,0,-Kn.x,Qn.z,0,-Qn.x,_i.z,0,-_i.x,-Kn.y,Kn.x,0,-Qn.y,Qn.x,0,-_i.y,_i.x,0];return!$a(e,Vi,Hi,Gi,ur)||(e=[1,0,0,0,1,0,0,0,1],!$a(e,Vi,Hi,Gi,ur))?!1:(fr.crossVectors(Kn,Qn),e=[fr.x,fr.y,fr.z],$a(e,Vi,Hi,Gi,ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,_n).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(_n).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Dn=[new U,new U,new U,new U,new U,new U,new U,new U],_n=new U,hr=new Pi,Vi=new U,Hi=new U,Gi=new U,Kn=new U,Qn=new U,_i=new U,Ps=new U,ur=new U,fr=new U,yi=new U;function $a(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=t.dot(yi),c=e.dot(yi),h=n.dot(yi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var df=new Pi,Is=new U,qa=new U,Ws=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):df.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Is.subVectors(t,this.center);let e=Is.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Is,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Is.copy(t.center).add(qa)),this.expandByPoint(Is.copy(t.center).sub(qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Un=new U,Ya=new U,dr=new U,jn=new U,Za=new U,pr=new U,Ja=new U,hl=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Un.copy(this.origin).addScaledVector(this.direction,e),Un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ya.copy(t).add(e).multiplyScalar(.5),dr.copy(e).sub(t).normalize(),jn.copy(this.origin).sub(Ya);let r=t.distanceTo(e)*.5,a=-this.direction.dot(dr),o=jn.dot(this.direction),l=-jn.dot(dr),c=jn.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let v=1/h;f*=v,u*=v,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ya).addScaledVector(dr,u),d}intersectSphere(t,e){Un.subVectors(t.center,this.origin);let n=Un.dot(this.direction),s=Un.dot(Un)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-u.z)*f,l=(t.max.z-u.z)*f):(o=(t.max.z-u.z)*f,l=(t.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Un)!==null}intersectTriangle(t,e,n,s,r){Za.subVectors(e,t),pr.subVectors(n,t),Ja.crossVectors(Za,pr);let a=this.direction.dot(Ja),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;jn.subVectors(this.origin,t);let l=o*this.direction.dot(pr.crossVectors(jn,pr));if(l<0)return null;let c=o*this.direction.dot(Za.cross(jn));if(c<0||l+c>a)return null;let h=-o*jn.dot(Ja);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},_e=class i{constructor(t,e,n,s,r,a,o,l,c,h,f,u,d,x,v,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,f,u,d,x,v,p)}set(t,e,n,s,r,a,o,l,c,h,f,u,d,x,v,p){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=x,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Wi.setFromMatrixColumn(t,0).length(),r=1/Wi.setFromMatrixColumn(t,1).length(),a=1/Wi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let u=a*h,d=a*f,x=o*h,v=o*f;e[0]=l*h,e[4]=-l*f,e[8]=c,e[1]=d+x*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=x+d*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,d=l*f,x=c*h,v=c*f;e[0]=u+v*o,e[4]=x*o-d,e[8]=a*c,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=d*o-x,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,d=l*f,x=c*h,v=c*f;e[0]=u-v*o,e[4]=-a*f,e[8]=x+d*o,e[1]=d+x*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,d=a*f,x=o*h,v=o*f;e[0]=l*h,e[4]=x*c-d,e[8]=u*c+v,e[1]=l*f,e[5]=v*c+u,e[9]=d*c-x,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,d=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=v-u*f,e[8]=x*f+d,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=d*f+x,e[10]=u-v*f}else if(t.order==="XZY"){let u=a*l,d=a*c,x=o*l,v=o*c;e[0]=l*h,e[4]=-f,e[8]=c*h,e[1]=u*f+v,e[5]=a*h,e[9]=d*f-x,e[2]=x*f-d,e[6]=o*h,e[10]=v*f+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pf,t,mf)}lookAt(t,e,n){let s=this.elements;return an.subVectors(t,e),an.lengthSq()===0&&(an.z=1),an.normalize(),ti.crossVectors(n,an),ti.lengthSq()===0&&(Math.abs(n.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ti.crossVectors(n,an)),ti.normalize(),mr.crossVectors(an,ti),s[0]=ti.x,s[4]=mr.x,s[8]=an.x,s[1]=ti.y,s[5]=mr.y,s[9]=an.y,s[2]=ti.z,s[6]=mr.z,s[10]=an.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],v=n[6],p=n[10],m=n[14],R=n[3],M=n[7],b=n[11],N=n[15],L=s[0],I=s[4],F=s[8],K=s[12],_=s[1],E=s[5],W=s[9],z=s[13],G=s[2],Q=s[6],V=s[10],st=s[14],$=s[3],yt=s[7],bt=s[11],St=s[15];return r[0]=a*L+o*_+l*G+c*$,r[4]=a*I+o*E+l*Q+c*yt,r[8]=a*F+o*W+l*V+c*bt,r[12]=a*K+o*z+l*st+c*St,r[1]=h*L+f*_+u*G+d*$,r[5]=h*I+f*E+u*Q+d*yt,r[9]=h*F+f*W+u*V+d*bt,r[13]=h*K+f*z+u*st+d*St,r[2]=x*L+v*_+p*G+m*$,r[6]=x*I+v*E+p*Q+m*yt,r[10]=x*F+v*W+p*V+m*bt,r[14]=x*K+v*z+p*st+m*St,r[3]=R*L+M*_+b*G+N*$,r[7]=R*I+M*E+b*Q+N*yt,r[11]=R*F+M*W+b*V+N*bt,r[15]=R*K+M*z+b*st+N*St,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],f=t[6],u=t[10],d=t[14],x=t[3],v=t[7],p=t[11],m=t[15];return x*(+r*l*f-s*c*f-r*o*u+n*c*u+s*o*d-n*l*d)+v*(+e*l*d-e*c*u+r*a*u-s*a*d+s*c*h-r*l*h)+p*(+e*c*f-e*o*d-r*a*f+n*a*d+r*o*h-n*c*h)+m*(-s*o*h-e*l*f+e*o*u+s*a*f-n*a*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],f=t[9],u=t[10],d=t[11],x=t[12],v=t[13],p=t[14],m=t[15],R=f*p*c-v*u*c+v*l*d-o*p*d-f*l*m+o*u*m,M=x*u*c-h*p*c-x*l*d+a*p*d+h*l*m-a*u*m,b=h*v*c-x*f*c+x*o*d-a*v*d-h*o*m+a*f*m,N=x*f*l-h*v*l-x*o*u+a*v*u+h*o*p-a*f*p,L=e*R+n*M+s*b+r*N;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/L;return t[0]=R*I,t[1]=(v*u*r-f*p*r-v*s*d+n*p*d+f*s*m-n*u*m)*I,t[2]=(o*p*r-v*l*r+v*s*c-n*p*c-o*s*m+n*l*m)*I,t[3]=(f*l*r-o*u*r-f*s*c+n*u*c+o*s*d-n*l*d)*I,t[4]=M*I,t[5]=(h*p*r-x*u*r+x*s*d-e*p*d-h*s*m+e*u*m)*I,t[6]=(x*l*r-a*p*r-x*s*c+e*p*c+a*s*m-e*l*m)*I,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*d+e*l*d)*I,t[8]=b*I,t[9]=(x*f*r-h*v*r-x*n*d+e*v*d+h*n*m-e*f*m)*I,t[10]=(a*v*r-x*o*r+x*n*c-e*v*c-a*n*m+e*o*m)*I,t[11]=(h*o*r-a*f*r-h*n*c+e*f*c+a*n*d-e*o*d)*I,t[12]=N*I,t[13]=(h*v*s-x*f*s+x*n*u-e*v*u-h*n*p+e*f*p)*I,t[14]=(x*o*s-a*v*s-x*n*l+e*v*l+a*n*p-e*o*p)*I,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*u+e*o*u)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,v=a*h,p=a*f,m=o*f,R=l*c,M=l*h,b=l*f,N=n.x,L=n.y,I=n.z;return s[0]=(1-(v+m))*N,s[1]=(d+b)*N,s[2]=(x-M)*N,s[3]=0,s[4]=(d-b)*L,s[5]=(1-(u+m))*L,s[6]=(p+R)*L,s[7]=0,s[8]=(x+M)*I,s[9]=(p-R)*I,s[10]=(1-(u+v))*I,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Wi.set(s[0],s[1],s[2]).length(),a=Wi.set(s[4],s[5],s[6]).length(),o=Wi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],yn.copy(this);let c=1/r,h=1/a,f=1/o;return yn.elements[0]*=c,yn.elements[1]*=c,yn.elements[2]*=c,yn.elements[4]*=h,yn.elements[5]*=h,yn.elements[6]*=h,yn.elements[8]*=f,yn.elements[9]*=f,yn.elements[10]*=f,e.setFromRotationMatrix(yn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Vn){let l=this.elements,c=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),u=(n+s)/(n-s),d,x;if(o===Vn)d=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===qr)d=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=d,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Vn){let l=this.elements,c=1/(e-t),h=1/(n-s),f=1/(a-r),u=(e+t)*c,d=(n+s)*h,x,v;if(o===Vn)x=(a+r)*f,v=-2*f;else if(o===qr)x=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-d,l[2]=0,l[6]=0,l[10]=v,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Wi=new U,yn=new _e,pf=new U(0,0,0),mf=new U(1,1,1),ti=new U,mr=new U,an=new U,Nc=new _e,Fc=new ci,Cn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Fc.setFromEuler(this),this.setFromQuaternion(Fc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Cn.DEFAULT_ORDER="XYZ";var Qr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},gf=0,Oc=new U,Xi=new ci,Nn=new _e,gr=new U,Ls=new U,xf=new U,_f=new ci,kc=new U(1,0,0),Bc=new U(0,1,0),zc=new U(0,0,1),Vc={type:"added"},yf={type:"removed"},$i={type:"childadded",child:null},Ka={type:"childremoved",child:null},Ee=class i extends li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=Hn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new U,e=new Cn,n=new ci,s=new U(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _e},normalMatrix:{value:new Yt}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.multiply(Xi),this}rotateOnWorldAxis(t,e){return Xi.setFromAxisAngle(t,e),this.quaternion.premultiply(Xi),this}rotateX(t){return this.rotateOnAxis(kc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(zc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(kc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(zc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?gr.copy(t):gr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(Ls,gr,this.up):Nn.lookAt(gr,Ls,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Xi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vc),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yf),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Nn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Nn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vc),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,_f,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),f=a(t.shapes),u=a(t.skeletons),d=a(t.animations),x=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};Ee.DEFAULT_UP=new U(0,1,0);Ee.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ee.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var vn=new U,Fn=new U,Qa=new U,On=new U,qi=new U,Yi=new U,Hc=new U,ja=new U,to=new U,eo=new U,no=new be,io=new be,so=new be,si=class i{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){vn.subVectors(s,e),Fn.subVectors(n,e),Qa.subVectors(t,e);let a=vn.dot(vn),o=vn.dot(Fn),l=vn.dot(Qa),c=Fn.dot(Fn),h=Fn.dot(Qa),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,On)===null?!1:On.x>=0&&On.y>=0&&On.x+On.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,On)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,On.x),l.addScaledVector(a,On.y),l.addScaledVector(o,On.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(no,r.x),a.addScaledVector(io,r.y),a.addScaledVector(so,r.z),a}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Fn.subVectors(t,e),vn.cross(Fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Fn.subVectors(this.a,this.b),vn.cross(Fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Yi.subVectors(r,n),ja.subVectors(t,n);let l=qi.dot(ja),c=Yi.dot(ja);if(l<=0&&c<=0)return e.copy(n);to.subVectors(t,s);let h=qi.dot(to),f=Yi.dot(to);if(h>=0&&f<=h)return e.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(qi,a);eo.subVectors(t,r);let d=qi.dot(eo),x=Yi.dot(eo);if(x>=0&&d<=x)return e.copy(r);let v=d*c-l*x;if(v<=0&&c>=0&&x<=0)return o=c/(c-x),e.copy(n).addScaledVector(Yi,o);let p=h*x-d*f;if(p<=0&&f-h>=0&&d-x>=0)return Hc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),e.copy(s).addScaledVector(Hc,o);let m=1/(p+v+u);return a=v*m,o=u*m,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},xr={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ae.workingColorSpace){if(t=rf(t,1),e=Be(e,0,1),n=Be(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=ro(a,r,t+1/3),this.g=ro(a,r,t),this.b=ro(a,r,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){let n=Bh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=os(t.r),this.g=os(t.g),this.b=os(t.b),this}copyLinearToSRGB(t){return this.r=Ga(t.r),this.g=Ga(t.g),this.b=Ga(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ae.fromWorkingColorSpace($e.copy(this),t),Math.round(Be($e.r*255,0,255))*65536+Math.round(Be($e.g*255,0,255))*256+Math.round(Be($e.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace($e.copy(this),e);let n=$e.r,s=$e.g,r=$e.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace($e.copy(this),e),t.r=$e.r,t.g=$e.g,t.b=$e.b,t}getStyle(t=Ne){ae.fromWorkingColorSpace($e.copy(this),t);let e=$e.r,n=$e.g,s=$e.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ei),this.setHSL(ei.h+t,ei.s+e,ei.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ei),t.getHSL(xr);let n=Va(ei.h,xr.h,e),s=Va(ei.s,xr.s,e),r=Va(ei.l,xr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},$e=new Gt;Gt.NAMES=Bh;var vf=0,Xn=class extends li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Hn(),this.name="",this.type="Material",this.blending=rs,this.side=oi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Mo,this.blendDst=bo,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Rc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Bi,this.stencilZFail=Bi,this.stencilZPass=Bi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==oi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Mo&&(n.blendSrc=this.blendSrc),this.blendDst!==bo&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Rc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Bi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Bi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Bi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},ze=class extends Xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.combine=Ah,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var we=new U,_r=new lt,ln=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=al,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)_r.fromBufferAttribute(this,e),_r.applyMatrix3(t),this.setXY(e,_r.x,_r.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==al&&(t.usage=this.usage),t}};var jr=class extends ln{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ta=class extends ln{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var oe=class extends ln{constructor(t,e,n){super(new Float32Array(t),e,n)}},Mf=0,fn=new _e,ao=new Ee,Zi=new U,on=new Pi,Ds=new Pi,Ue=new U,Qe=class i extends li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Hn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kh(t)?ta:jr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return ao.lookAt(t),ao.updateMatrix(),this.applyMatrix4(ao.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new oe(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];on.setFromBufferAttribute(r),this.morphTargetsRelative?(Ue.addVectors(this.boundingBox.min,on.min),this.boundingBox.expandByPoint(Ue),Ue.addVectors(this.boundingBox.max,on.max),this.boundingBox.expandByPoint(Ue)):(this.boundingBox.expandByPoint(on.min),this.boundingBox.expandByPoint(on.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(on.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Ds.setFromBufferAttribute(o),this.morphTargetsRelative?(Ue.addVectors(on.min,Ds.min),on.expandByPoint(Ue),Ue.addVectors(on.max,Ds.max),on.expandByPoint(Ue)):(on.expandByPoint(Ds.min),on.expandByPoint(Ds.max))}on.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ue.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ue));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ue.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(t,c),Ue.add(Zi)),s=Math.max(s,n.distanceToSquared(Ue))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new U,l[F]=new U;let c=new U,h=new U,f=new U,u=new lt,d=new lt,x=new lt,v=new U,p=new U;function m(F,K,_){c.fromBufferAttribute(n,F),h.fromBufferAttribute(n,K),f.fromBufferAttribute(n,_),u.fromBufferAttribute(r,F),d.fromBufferAttribute(r,K),x.fromBufferAttribute(r,_),h.sub(c),f.sub(c),d.sub(u),x.sub(u);let E=1/(d.x*x.y-x.x*d.y);isFinite(E)&&(v.copy(h).multiplyScalar(x.y).addScaledVector(f,-d.y).multiplyScalar(E),p.copy(f).multiplyScalar(d.x).addScaledVector(h,-x.x).multiplyScalar(E),o[F].add(v),o[K].add(v),o[_].add(v),l[F].add(p),l[K].add(p),l[_].add(p))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let F=0,K=R.length;F<K;++F){let _=R[F],E=_.start,W=_.count;for(let z=E,G=E+W;z<G;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let M=new U,b=new U,N=new U,L=new U;function I(F){N.fromBufferAttribute(s,F),L.copy(N);let K=o[F];M.copy(K),M.sub(N.multiplyScalar(N.dot(K))).normalize(),b.crossVectors(L,K);let E=b.dot(l[F])<0?-1:1;a.setXYZW(F,M.x,M.y,M.z,E)}for(let F=0,K=R.length;F<K;++F){let _=R[F],E=_.start,W=_.count;for(let z=E,G=E+W;z<G;z+=3)I(t.getX(z+0)),I(t.getX(z+1)),I(t.getX(z+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,l=new U,c=new U,h=new U,f=new U;if(t)for(let u=0,d=t.count;u<d;u+=3){let x=t.getX(u+0),v=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,x),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ue.fromBufferAttribute(t,e),Ue.normalize(),t.setXYZ(e,Ue.x,Ue.y,Ue.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let v=0,p=l.length;v<p;v++){o.isInterleavedBufferAttribute?d=l[v]*o.data.stride+o.offset:d=l[v]*h;for(let m=0;m<h;m++)u[x++]=c[d++]}return new ln(u,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=t(u,n);l.push(d)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Gc=new _e,vi=new hl,yr=new Ws,Wc=new U,vr=new U,Mr=new U,br=new U,oo=new U,Sr=new U,Xc=new U,wr=new U,Wt=class extends Ee{constructor(t=new Qe,e=new ze){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(oo.fromBufferAttribute(f,t),a?Sr.addScaledVector(oo,h):Sr.addScaledVector(oo.sub(e),h))}e.add(Sr)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),yr.copy(n.boundingSphere),yr.applyMatrix4(r),vi.copy(t.ray).recast(t.near),!(yr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(yr,Wc)===null||vi.origin.distanceToSquared(Wc)>(t.far-t.near)**2))&&(Gc.copy(r).invert(),vi.copy(t.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,vi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let p=u[x],m=a[p.materialIndex],R=Math.max(p.start,d.start),M=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let b=R,N=M;b<N;b+=3){let L=o.getX(b),I=o.getX(b+1),F=o.getX(b+2);s=Er(this,m,t,n,c,h,f,L,I,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(o.count,d.start+d.count);for(let p=x,m=v;p<m;p+=3){let R=o.getX(p),M=o.getX(p+1),b=o.getX(p+2);s=Er(this,a,t,n,c,h,f,R,M,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,v=u.length;x<v;x++){let p=u[x],m=a[p.materialIndex],R=Math.max(p.start,d.start),M=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let b=R,N=M;b<N;b+=3){let L=b,I=b+1,F=b+2;s=Er(this,m,t,n,c,h,f,L,I,F),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let x=Math.max(0,d.start),v=Math.min(l.count,d.start+d.count);for(let p=x,m=v;p<m;p+=3){let R=p,M=p+1,b=p+2;s=Er(this,a,t,n,c,h,f,R,M,b),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function bf(i,t,e,n,s,r,a,o){let l;if(t.side===Ze?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===oi,o),l===null)return null;wr.copy(o),wr.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wr);return c<e.near||c>e.far?null:{distance:c,point:wr.clone(),object:i}}function Er(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,vr),i.getVertexPosition(l,Mr),i.getVertexPosition(c,br);let h=bf(i,t,e,n,vr,Mr,br,Xc);if(h){let f=new U;si.getBarycoord(Xc,vr,Mr,br,f),s&&(h.uv=si.getInterpolatedAttribute(s,o,l,c,f,new lt)),r&&(h.uv1=si.getInterpolatedAttribute(r,o,l,c,f,new lt)),a&&(h.normal=si.getInterpolatedAttribute(a,o,l,c,f,new U),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new U,materialIndex:0};si.getNormal(vr,Mr,br,u.normal),h.face=u,h.barycoord=f}return h}var Ve=class i extends Qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,e,t,a,r,0),x("z","y","x",1,-1,n,e,-t,a,r,1),x("x","z","y",1,1,t,n,e,s,a,2),x("x","z","y",1,-1,t,n,-e,s,a,3),x("x","y","z",1,-1,t,e,n,s,r,4),x("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new oe(c,3)),this.setAttribute("normal",new oe(h,3)),this.setAttribute("uv",new oe(f,2));function x(v,p,m,R,M,b,N,L,I,F,K){let _=b/I,E=N/F,W=b/2,z=N/2,G=L/2,Q=I+1,V=F+1,st=0,$=0,yt=new U;for(let bt=0;bt<V;bt++){let St=bt*E-z;for(let $t=0;$t<Q;$t++){let Lt=$t*_-W;yt[v]=Lt*R,yt[p]=St*M,yt[m]=G,c.push(yt.x,yt.y,yt.z),yt[v]=0,yt[p]=0,yt[m]=L>0?1:-1,h.push(yt.x,yt.y,yt.z),f.push($t/I),f.push(1-bt/F),st+=1}}for(let bt=0;bt<F;bt++)for(let St=0;St<I;St++){let $t=u+St+Q*bt,Lt=u+St+Q*(bt+1),Y=u+(St+1)+Q*(bt+1),at=u+(St+1)+Q*bt;l.push($t,Lt,at),l.push(Lt,Y,at),$+=6}o.addGroup(d,$,K),d+=$,u+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function ms(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ke(i){let t={};for(let e=0;e<i.length;e++){let n=ms(i[e]);for(let s in n)t[s]=n[s]}return t}function Sf(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function zh(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var wf={clone:ms,merge:Ke},Ef=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,dn=class extends Xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ef,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ms(t.uniforms),this.uniformsGroups=Sf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},ea=class extends Ee{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Vn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},ni=new U,$c=new lt,qc=new lt,qe=class extends ea{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Yr*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Yr*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,$c,qc),e.subVectors(qc,$c)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(za*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ji=-90,Ki=1,ul=class extends Ee{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qe(Ji,Ki,t,e);s.layers=this.layers,this.add(s);let r=new qe(Ji,Ki,t,e);r.layers=this.layers,this.add(r);let a=new qe(Ji,Ki,t,e);a.layers=this.layers,this.add(a);let o=new qe(Ji,Ki,t,e);o.layers=this.layers,this.add(o);let l=new qe(Ji,Ki,t,e);l.layers=this.layers,this.add(l);let c=new qe(Ji,Ki,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Vn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),x=t.xr.enabled;t.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,u,d),t.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},na=class extends tn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},fl=class extends Wn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new na(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ve(5,5,5),r=new dn({name:"CubemapFromEquirect",uniforms:ms(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ze,blending:ri});r.uniforms.tEquirect.value=e;let a=new Wt(s,r),o=e.minFilter;return e.minFilter===Ci&&(e.minFilter=Mn),new ul(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},lo=new U,Tf=new U,Cf=new Yt,Bn=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=lo.subVectors(n,e).cross(Tf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(lo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Cf.getNormalMatrix(t),s=this.coplanarPoint(lo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Mi=new Ws,Ar=new U,Xs=class{constructor(t=new Bn,e=new Bn,n=new Bn,s=new Bn,r=new Bn,a=new Bn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vn){let n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],f=s[6],u=s[7],d=s[8],x=s[9],v=s[10],p=s[11],m=s[12],R=s[13],M=s[14],b=s[15];if(n[0].setComponents(l-r,u-c,p-d,b-m).normalize(),n[1].setComponents(l+r,u+c,p+d,b+m).normalize(),n[2].setComponents(l+a,u+h,p+x,b+R).normalize(),n[3].setComponents(l-a,u-h,p-x,b-R).normalize(),n[4].setComponents(l-o,u-f,p-v,b-M).normalize(),e===Vn)n[5].setComponents(l+o,u+f,p+v,b+M).normalize();else if(e===qr)n[5].setComponents(o,f,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(t){return Mi.center.set(0,0,0),Mi.radius=.7071067811865476,Mi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Ar.x=s.normal.x>0?t.max.x:t.min.x,Ar.y=s.normal.y>0?t.max.y:t.min.y,Ar.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ar)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Vh(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Rf(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],v=f[d];v.start<=x.start+x.count+1?x.count=Math.max(x.count,v.start+v.count-x.start):(++u,f[u]=v)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let v=f[d];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $n=class i extends Qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=t/o,u=e/l,d=[],x=[],v=[],p=[];for(let m=0;m<h;m++){let R=m*u-a;for(let M=0;M<c;M++){let b=M*f-r;x.push(b,-R,0),v.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let R=0;R<o;R++){let M=R+c*m,b=R+c*(m+1),N=R+1+c*(m+1),L=R+1+c*m;d.push(M,b,L),d.push(b,N,L)}this.setIndex(d),this.setAttribute("position",new oe(x,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},Pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
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
#endif`,Lf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,jf=`#define PI 3.141592653589793
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
} // validated`,td=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ed=`vec3 transformedNormal = objectNormal;
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
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ad="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`
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
}`,ld=`#ifdef USE_ENVMAP
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
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hd=`#ifdef USE_ENVMAP
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
#endif`,ud=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,md=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xd=`#ifdef USE_GRADIENTMAP
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
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Md=`uniform bool receiveShadow;
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
#endif`,bd=`#ifdef USE_ENVMAP
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
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ad=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Td=`PhysicalMaterial material;
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
#endif`,Cd=`struct PhysicalMaterial {
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
}`,Rd=`
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
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Id=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Od=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bd=`#if defined( USE_POINTS_UV )
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
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
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
#endif`,$d=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qd=`#ifdef USE_NORMALMAP
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
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ap=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,op=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,xp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_p=`#ifdef USE_SKINNING
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
#endif`,yp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,wp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pp=`uniform sampler2D t2D;
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
}`,Ip=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,kp=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vp=`uniform float scale;
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
}`,Hp=`uniform vec3 diffuse;
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
}`,Gp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,$p=`#define LAMBERT
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
}`,qp=`#define MATCAP
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
}`,Yp=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,Qp=`#define PHONG
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
}`,jp=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,em=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,rm=`#include <common>
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
}`,am=`uniform vec3 color;
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
}`,om=`uniform float rotation;
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
}`,lm=`uniform vec3 diffuse;
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
}`,qt={alphahash_fragment:Pf,alphahash_pars_fragment:If,alphamap_fragment:Lf,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:kf,batching_vertex:Bf,begin_vertex:zf,beginnormal_vertex:Vf,bsdfs:Hf,iridescence_fragment:Gf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:$f,clipping_planes_pars_vertex:qf,clipping_planes_vertex:Yf,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:Qf,common:jf,cube_uv_reflection_fragment:td,defaultnormal_vertex:ed,displacementmap_pars_vertex:nd,displacementmap_vertex:id,emissivemap_fragment:sd,emissivemap_pars_fragment:rd,colorspace_fragment:ad,colorspace_pars_fragment:od,envmap_fragment:ld,envmap_common_pars_fragment:cd,envmap_pars_fragment:hd,envmap_pars_vertex:ud,envmap_physical_pars_fragment:bd,envmap_vertex:fd,fog_vertex:dd,fog_pars_vertex:pd,fog_fragment:md,fog_pars_fragment:gd,gradientmap_pars_fragment:xd,lightmap_pars_fragment:_d,lights_lambert_fragment:yd,lights_lambert_pars_fragment:vd,lights_pars_begin:Md,lights_toon_fragment:Sd,lights_toon_pars_fragment:wd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Ad,lights_physical_fragment:Td,lights_physical_pars_fragment:Cd,lights_fragment_begin:Rd,lights_fragment_maps:Pd,lights_fragment_end:Id,logdepthbuf_fragment:Ld,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ud,logdepthbuf_vertex:Nd,map_fragment:Fd,map_pars_fragment:Od,map_particle_fragment:kd,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:Vd,morphinstance_vertex:Hd,morphcolor_vertex:Gd,morphnormal_vertex:Wd,morphtarget_pars_vertex:Xd,morphtarget_vertex:$d,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:Kd,normalmap_pars_fragment:Qd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:rp,project_vertex:ap,dithering_fragment:op,dithering_pars_fragment:lp,roughnessmap_fragment:cp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:fp,shadowmap_vertex:dp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:xp,skinnormal_vertex:_p,specularmap_fragment:yp,specularmap_pars_fragment:vp,tonemapping_fragment:Mp,tonemapping_pars_fragment:bp,transmission_fragment:Sp,transmission_pars_fragment:wp,uv_pars_fragment:Ep,uv_pars_vertex:Ap,uv_vertex:Tp,worldpos_vertex:Cp,background_vert:Rp,background_frag:Pp,backgroundCube_vert:Ip,backgroundCube_frag:Lp,cube_vert:Dp,cube_frag:Up,depth_vert:Np,depth_frag:Fp,distanceRGBA_vert:Op,distanceRGBA_frag:kp,equirect_vert:Bp,equirect_frag:zp,linedashed_vert:Vp,linedashed_frag:Hp,meshbasic_vert:Gp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:$p,meshmatcap_vert:qp,meshmatcap_frag:Yp,meshnormal_vert:Zp,meshnormal_frag:Jp,meshphong_vert:Kp,meshphong_frag:Qp,meshphysical_vert:jp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:rm,shadow_frag:am,sprite_vert:om,sprite_frag:lm},gt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},An={basic:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:qt.meshbasic_vert,fragmentShader:qt.meshbasic_frag},lambert:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshlambert_vert,fragmentShader:qt.meshlambert_frag},phong:{uniforms:Ke([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:qt.meshphong_vert,fragmentShader:qt.meshphong_frag},standard:{uniforms:Ke([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag},toon:{uniforms:Ke([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:qt.meshtoon_vert,fragmentShader:qt.meshtoon_frag},matcap:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:qt.meshmatcap_vert,fragmentShader:qt.meshmatcap_frag},points:{uniforms:Ke([gt.points,gt.fog]),vertexShader:qt.points_vert,fragmentShader:qt.points_frag},dashed:{uniforms:Ke([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qt.linedashed_vert,fragmentShader:qt.linedashed_frag},depth:{uniforms:Ke([gt.common,gt.displacementmap]),vertexShader:qt.depth_vert,fragmentShader:qt.depth_frag},normal:{uniforms:Ke([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:qt.meshnormal_vert,fragmentShader:qt.meshnormal_frag},sprite:{uniforms:Ke([gt.sprite,gt.fog]),vertexShader:qt.sprite_vert,fragmentShader:qt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qt.background_vert,fragmentShader:qt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:qt.backgroundCube_vert,fragmentShader:qt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qt.cube_vert,fragmentShader:qt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qt.equirect_vert,fragmentShader:qt.equirect_frag},distanceRGBA:{uniforms:Ke([gt.common,gt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qt.distanceRGBA_vert,fragmentShader:qt.distanceRGBA_frag},shadow:{uniforms:Ke([gt.lights,gt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:qt.shadow_vert,fragmentShader:qt.shadow_frag}};An.physical={uniforms:Ke([An.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:qt.meshphysical_vert,fragmentShader:qt.meshphysical_frag};var Tr={r:0,b:0,g:0},bi=new Cn,cm=new _e;function hm(i,t,e,n,s,r,a){let o=new Gt(0),l=r===!0?0:1,c,h,f=null,u=0,d=null;function x(R){let M=R.isScene===!0?R.background:null;return M&&M.isTexture&&(M=(R.backgroundBlurriness>0?e:t).get(M)),M}function v(R){let M=!1,b=x(R);b===null?m(o,l):b&&b.isColor&&(m(b,1),M=!0);let N=i.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,a):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(R,M){let b=x(M);b&&(b.isCubeTexture||b.mapping===ba)?(h===void 0&&(h=new Wt(new Ve(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:ms(An.backgroundCube.uniforms),vertexShader:An.backgroundCube.vertexShader,fragmentShader:An.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,L,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),bi.copy(M.backgroundRotation),bi.x*=-1,bi.y*=-1,bi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(bi.y*=-1,bi.z*=-1),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cm.makeRotationFromEuler(bi)),h.material.toneMapped=ae.getTransfer(b.colorSpace)!==ue,(f!==b||u!==b.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=b,u=b.version,d=i.toneMapping),h.layers.enableAll(),R.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Wt(new $n(2,2),new dn({name:"BackgroundMaterial",uniforms:ms(An.background.uniforms),vertexShader:An.background.vertexShader,fragmentShader:An.background.fragmentShader,side:oi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ae.getTransfer(b.colorSpace)!==ue,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||u!==b.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,f=b,u=b.version,d=i.toneMapping),c.layers.enableAll(),R.unshift(c,c.geometry,c.material,0,0,null))}function m(R,M){R.getRGB(Tr,zh(i)),n.buffers.color.setClear(Tr.r,Tr.g,Tr.b,M,a)}return{getClearColor:function(){return o},setClearColor:function(R,M=1){o.set(R),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(R){l=R,m(o,l)},render:v,addToRenderList:p}}function um(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(_,E,W,z,G){let Q=!1,V=f(z,W,E);r!==V&&(r=V,c(r.object)),Q=d(_,z,W,G),Q&&x(_,z,W,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,b(_,E,W,z),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function l(){return i.createVertexArray()}function c(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,E,W){let z=W.wireframe===!0,G=n[_.id];G===void 0&&(G={},n[_.id]=G);let Q=G[E.id];Q===void 0&&(Q={},G[E.id]=Q);let V=Q[z];return V===void 0&&(V=u(l()),Q[z]=V),V}function u(_){let E=[],W=[],z=[];for(let G=0;G<e;G++)E[G]=0,W[G]=0,z[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:z,object:_,attributes:{},index:null}}function d(_,E,W,z){let G=r.attributes,Q=E.attributes,V=0,st=W.getAttributes();for(let $ in st)if(st[$].location>=0){let bt=G[$],St=Q[$];if(St===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(St=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(St=_.instanceColor)),bt===void 0||bt.attribute!==St||St&&bt.data!==St.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function x(_,E,W,z){let G={},Q=E.attributes,V=0,st=W.getAttributes();for(let $ in st)if(st[$].location>=0){let bt=Q[$];bt===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(bt=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(bt=_.instanceColor));let St={};St.attribute=bt,bt&&bt.data&&(St.data=bt.data),G[$]=St,V++}r.attributes=G,r.attributesNum=V,r.index=z}function v(){let _=r.newAttributes;for(let E=0,W=_.length;E<W;E++)_[E]=0}function p(_){m(_,0)}function m(_,E){let W=r.newAttributes,z=r.enabledAttributes,G=r.attributeDivisors;W[_]=1,z[_]===0&&(i.enableVertexAttribArray(_),z[_]=1),G[_]!==E&&(i.vertexAttribDivisor(_,E),G[_]=E)}function R(){let _=r.newAttributes,E=r.enabledAttributes;for(let W=0,z=E.length;W<z;W++)E[W]!==_[W]&&(i.disableVertexAttribArray(W),E[W]=0)}function M(_,E,W,z,G,Q,V){V===!0?i.vertexAttribIPointer(_,E,W,G,Q):i.vertexAttribPointer(_,E,W,z,G,Q)}function b(_,E,W,z){v();let G=z.attributes,Q=W.getAttributes(),V=E.defaultAttributeValues;for(let st in Q){let $=Q[st];if($.location>=0){let yt=G[st];if(yt===void 0&&(st==="instanceMatrix"&&_.instanceMatrix&&(yt=_.instanceMatrix),st==="instanceColor"&&_.instanceColor&&(yt=_.instanceColor)),yt!==void 0){let bt=yt.normalized,St=yt.itemSize,$t=t.get(yt);if($t===void 0)continue;let Lt=$t.buffer,Y=$t.type,at=$t.bytesPerElement,Ct=Y===i.INT||Y===i.UNSIGNED_INT||yt.gpuType===Wl;if(yt.isInterleavedBufferAttribute){let mt=yt.data,Ot=mt.stride,Nt=yt.offset;if(mt.isInstancedInterleavedBuffer){for(let zt=0;zt<$.locationSize;zt++)m($.location+zt,mt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let zt=0;zt<$.locationSize;zt++)p($.location+zt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let zt=0;zt<$.locationSize;zt++)M($.location+zt,St/$.locationSize,Y,bt,Ot*at,(Nt+St/$.locationSize*zt)*at,Ct)}else{if(yt.isInstancedBufferAttribute){for(let mt=0;mt<$.locationSize;mt++)m($.location+mt,yt.meshPerAttribute);_.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let mt=0;mt<$.locationSize;mt++)p($.location+mt);i.bindBuffer(i.ARRAY_BUFFER,Lt);for(let mt=0;mt<$.locationSize;mt++)M($.location+mt,St/$.locationSize,Y,bt,St*at,St/$.locationSize*mt*at,Ct)}}else if(V!==void 0){let bt=V[st];if(bt!==void 0)switch(bt.length){case 2:i.vertexAttrib2fv($.location,bt);break;case 3:i.vertexAttrib3fv($.location,bt);break;case 4:i.vertexAttrib4fv($.location,bt);break;default:i.vertexAttrib1fv($.location,bt)}}}}R()}function N(){F();for(let _ in n){let E=n[_];for(let W in E){let z=E[W];for(let G in z)h(z[G].object),delete z[G];delete E[W]}delete n[_]}}function L(_){if(n[_.id]===void 0)return;let E=n[_.id];for(let W in E){let z=E[W];for(let G in z)h(z[G].object),delete z[G];delete E[W]}delete n[_.id]}function I(_){for(let E in n){let W=n[E];if(W[_.id]===void 0)continue;let z=W[_.id];for(let G in z)h(z[G].object),delete z[G];delete W[_.id]}}function F(){K(),a=!0,r!==s&&(r=s,c(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:K,dispose:N,releaseStatesOfGeometry:L,releaseStatesOfProgram:I,initAttributes:v,enableAttribute:p,disableUnusedAttributes:R}}function fm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,f){f!==0&&(i.drawArraysInstanced(n,c,h,f),e.update(h,n,f))}function o(c,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,f);let d=0;for(let x=0;x<f;x++)d+=h[x];e.update(d,n,1)}function l(c,h,f,u){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let x=0;x<c.length;x++)a(c[x],h[x],u[x]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,f);let x=0;for(let v=0;v<f;v++)x+=h[v];for(let v=0;v<u.length;v++)e.update(x,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function dm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let I=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(I){return!(I!==bn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(I){let F=I===js&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Gn&&n.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zn&&!F)}function l(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(u===!0){let I=t.get("EXT_clip_control");I.clipControlEXT(I.LOWER_LEFT_EXT,I.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=x>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:x,maxTextureSize:v,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:R,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:N,maxSamples:L}}function pm(i){let t=this,e=null,n=0,s=!1,r=!1,a=new Bn,o=new Yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){e=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let R=r?0:n,M=R*4,b=m.clippingState||null;l.value=b,b=h(x,u,M,d);for(let N=0;N!==M;++N)b[N]=e[N];m.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,u,d,x){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=l.value,x!==!0||p===null){let m=d+v*4,R=u.matrixWorldInverse;o.getNormalMatrix(R),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,b=d;M!==v;++M,b+=4)a.copy(f[M]).applyMatrix4(R,o),a.normal.toArray(p,b),p[b+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function mm(i){let t=new WeakMap;function e(a,o){return o===Po?a.mapping=us:o===Io&&(a.mapping=fs),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Po||o===Io)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new fl(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var ia=class extends ea{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},is=4,Yc=[.125,.215,.35,.446,.526,.582],Ai=20,co=new ia,Zc=new Gt,ho=null,uo=0,fo=0,po=!1,wi=(1+Math.sqrt(5))/2,Qi=1/wi,Jc=[new U(-wi,Qi,0),new U(wi,Qi,0),new U(-Qi,0,wi),new U(Qi,0,wi),new U(0,wi,-Qi),new U(0,wi,Qi),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],sa=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===fs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:js,format:bn,colorSpace:fi,depthBuffer:!1},s=Kc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Kc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(r)),this._blurMaterial=xm(r,t,e)}return s}_compileMaterial(t){let e=new Wt(this._lodPlanes[0],t);this._renderer.compile(e,co)}_sceneToCubeUV(t,e,n,s){let o=new qe(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,u=h.toneMapping;h.getClearColor(Zc),h.toneMapping=ai,h.autoClear=!1;let d=new ze({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1}),x=new Wt(new Ve,d),v=!1,p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(Zc),v=!0);for(let m=0;m<6;m++){let R=m%3;R===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):R===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));let M=this._cubeSize;Cr(s,R*M,m>2?M:0,M,M),h.setRenderTarget(s),v&&h.render(x,o),h.render(t,o)}x.geometry.dispose(),x.material.dispose(),h.toneMapping=u,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===us||t.mapping===fs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=jc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qc());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Wt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Cr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,co)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jc[(s-r-1)%Jc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Wt(this._lodPlanes[s],c),u=c.uniforms,d=this._sizeLods[n]-1,x=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Ai-1),v=r/x,p=isFinite(r)?1+Math.floor(h*v):Ai;p>Ai&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ai}`);let m=[],R=0;for(let I=0;I<Ai;++I){let F=I/v,K=Math.exp(-F*F/2);m.push(K),I===0?R+=K:I<p&&(R+=2*K)}for(let I=0;I<m.length;I++)m[I]=m[I]/R;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);let{_lodMax:M}=this;u.dTheta.value=x,u.mipInt.value=M-n;let b=this._sizeLods[s],N=3*b*(s>M-is?s-M+is:0),L=4*(this._cubeSize-b);Cr(e,N,L,3*b,2*b),l.setRenderTarget(e),l.render(f,co)}};function gm(i){let t=[],e=[],n=[],s=i,r=i-is+1+Yc.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>i-is?l=Yc[a-i+is-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,f=1+c,u=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,x=6,v=3,p=2,m=1,R=new Float32Array(v*x*d),M=new Float32Array(p*x*d),b=new Float32Array(m*x*d);for(let L=0;L<d;L++){let I=L%3*2/3-1,F=L>2?0:-1,K=[I,F,0,I+2/3,F,0,I+2/3,F+1,0,I,F,0,I+2/3,F+1,0,I,F+1,0];R.set(K,v*x*L),M.set(u,p*x*L);let _=[L,L,L,L,L,L];b.set(_,m*x*L)}let N=new Qe;N.setAttribute("position",new ln(R,v)),N.setAttribute("uv",new ln(M,p)),N.setAttribute("faceIndex",new ln(b,m)),t.push(N),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Kc(i,t,e){let n=new Wn(i,t,e);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xm(i,t,e){let n=new Float32Array(Ai),s=new U(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Qc(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ql(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function jc(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Ql(){return`

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
	`}function _m(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Po||l===Io,h=l===us||l===fs;if(c||h){let f=t.get(o),u=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new sa(i)),f=c?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{let d=o.image;return c&&d&&d.height>0||h&&d&&s(d)?(e===null&&(e=new sa(i)),f=c?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Hr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function vm(i,t,e,n){let s={},r=new WeakMap;function a(f){let u=f.target;u.index!==null&&t.remove(u.index);for(let x in u.attributes)t.remove(u.attributes[x]);for(let x in u.morphAttributes){let v=u.morphAttributes[x];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}u.removeEventListener("dispose",a),delete s[u.id];let d=r.get(u);d&&(t.remove(d),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(f,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(f){let u=f.attributes;for(let x in u)t.update(u[x],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let x in d){let v=d[x];for(let p=0,m=v.length;p<m;p++)t.update(v[p],i.ARRAY_BUFFER)}}function c(f){let u=[],d=f.index,x=f.attributes.position,v=0;if(d!==null){let R=d.array;v=d.version;for(let M=0,b=R.length;M<b;M+=3){let N=R[M+0],L=R[M+1],I=R[M+2];u.push(N,L,L,I,I,N)}}else if(x!==void 0){let R=x.array;v=x.version;for(let M=0,b=R.length/3-1;M<b;M+=3){let N=M+0,L=M+1,I=M+2;u.push(N,L,L,I,I,N)}}else return;let p=new(kh(u)?ta:jr)(u,1);p.version=v;let m=r.get(f);m&&t.remove(m),r.set(f,p)}function h(f){let u=r.get(f);if(u){let d=f.index;d!==null&&u.version<d.version&&c(f)}else c(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function Mm(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*a),e.update(d,n,1)}function c(u,d,x){x!==0&&(i.drawElementsInstanced(n,d,r,u*a,x),e.update(d,n,x))}function h(u,d,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,u,0,x);let p=0;for(let m=0;m<x;m++)p+=d[m];e.update(p,n,1)}function f(u,d,x,v){if(x===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,d[m],v[m]);else{p.multiDrawElementsInstancedWEBGL(n,d,0,r,u,0,v,0,x);let m=0;for(let R=0;R<x;R++)m+=d[R];for(let R=0;R<v.length;R++)e.update(m,n,v[R])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function bm(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){let n=new WeakMap,s=new be;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let K=function(){I.dispose(),n.delete(o),o.removeEventListener("dispose",K)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],R=o.morphAttributes.color||[],M=0;d===!0&&(M=1),x===!0&&(M=2),v===!0&&(M=3);let b=o.attributes.position.count*M,N=1;b>t.maxTextureSize&&(N=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);let L=new Float32Array(b*N*4*f),I=new Kr(L,b,N,f);I.type=zn,I.needsUpdate=!0;let F=M*4;for(let _=0;_<f;_++){let E=p[_],W=m[_],z=R[_],G=b*N*4*_;for(let Q=0;Q<E.count;Q++){let V=Q*F;d===!0&&(s.fromBufferAttribute(E,Q),L[G+V+0]=s.x,L[G+V+1]=s.y,L[G+V+2]=s.z,L[G+V+3]=0),x===!0&&(s.fromBufferAttribute(W,Q),L[G+V+4]=s.x,L[G+V+5]=s.y,L[G+V+6]=s.z,L[G+V+7]=0),v===!0&&(s.fromBufferAttribute(z,Q),L[G+V+8]=s.x,L[G+V+9]=s.y,L[G+V+10]=s.z,L[G+V+11]=z.itemSize===4?s.w:1)}}u={count:f,texture:I,size:new lt(b,N)},n.set(o,u),o.addEventListener("dispose",K)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let d=0;for(let v=0;v<c.length;v++)d+=c[v];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function wm(i,t,e,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==c&&(t.update(f),s.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return f}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var ra=class extends tn{constructor(t,e,n,s,r,a,o,l,c,h=as){if(h!==as&&h!==ps)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Ri),n===void 0&&h===ps&&(n=ds),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ye,this.minFilter=l!==void 0?l:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Hh=new tn,th=new ra(1,1),Gh=new Kr,Wh=new cl,Xh=new na,eh=[],nh=[],ih=new Float32Array(16),sh=new Float32Array(9),rh=new Float32Array(4);function ys(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=eh[s];if(r===void 0&&(r=new Float32Array(s),eh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ie(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ea(i,t){let e=nh[t];e===void 0&&(e=new Int32Array(t),nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Em(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Am(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2fv(this.addr,t),Ie(e,t)}}function Tm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Pe(e,t))return;i.uniform3fv(this.addr,t),Ie(e,t)}}function Cm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4fv(this.addr,t),Ie(e,t)}}function Rm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;rh.set(n),i.uniformMatrix2fv(this.addr,!1,rh),Ie(e,n)}}function Pm(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;sh.set(n),i.uniformMatrix3fv(this.addr,!1,sh),Ie(e,n)}}function Im(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ie(e,t)}else{if(Pe(e,n))return;ih.set(n),i.uniformMatrix4fv(this.addr,!1,ih),Ie(e,n)}}function Lm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2iv(this.addr,t),Ie(e,t)}}function Um(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3iv(this.addr,t),Ie(e,t)}}function Nm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4iv(this.addr,t),Ie(e,t)}}function Fm(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Pe(e,t))return;i.uniform2uiv(this.addr,t),Ie(e,t)}}function km(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Pe(e,t))return;i.uniform3uiv(this.addr,t),Ie(e,t)}}function Bm(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Pe(e,t))return;i.uniform4uiv(this.addr,t),Ie(e,t)}}function zm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(th.compareFunction=Oh,r=th):r=Hh,e.setTexture2D(t||r,s)}function Vm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Wh,s)}function Hm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Xh,s)}function Gm(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Gh,s)}function Wm(i){switch(i){case 5126:return Em;case 35664:return Am;case 35665:return Tm;case 35666:return Cm;case 35674:return Rm;case 35675:return Pm;case 35676:return Im;case 5124:case 35670:return Lm;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return km;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return zm;case 35679:case 36299:case 36307:return Vm;case 35680:case 36300:case 36308:case 36293:return Hm;case 36289:case 36303:case 36311:case 36292:return Gm}}function Xm(i,t){i.uniform1fv(this.addr,t)}function $m(i,t){let e=ys(t,this.size,2);i.uniform2fv(this.addr,e)}function qm(i,t){let e=ys(t,this.size,3);i.uniform3fv(this.addr,e)}function Ym(i,t){let e=ys(t,this.size,4);i.uniform4fv(this.addr,e)}function Zm(i,t){let e=ys(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jm(i,t){let e=ys(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){let e=ys(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qm(i,t){i.uniform1iv(this.addr,t)}function jm(i,t){i.uniform2iv(this.addr,t)}function t0(i,t){i.uniform3iv(this.addr,t)}function e0(i,t){i.uniform4iv(this.addr,t)}function n0(i,t){i.uniform1uiv(this.addr,t)}function i0(i,t){i.uniform2uiv(this.addr,t)}function s0(i,t){i.uniform3uiv(this.addr,t)}function r0(i,t){i.uniform4uiv(this.addr,t)}function a0(i,t,e){let n=this.cache,s=t.length,r=Ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Hh,r[a])}function o0(i,t,e){let n=this.cache,s=t.length,r=Ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Wh,r[a])}function l0(i,t,e){let n=this.cache,s=t.length,r=Ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Xh,r[a])}function c0(i,t,e){let n=this.cache,s=t.length,r=Ea(e,s);Pe(n,r)||(i.uniform1iv(this.addr,r),Ie(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Gh,r[a])}function h0(i){switch(i){case 5126:return Xm;case 35664:return $m;case 35665:return qm;case 35666:return Ym;case 35674:return Zm;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return Qm;case 35667:case 35671:return jm;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return s0;case 36296:return r0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return l0;case 36289:case 36303:case 36311:case 36292:return c0}}var dl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}},pl=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=h0(e.type)}},ml=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},mo=/(\w+)(\])?(\[|\.)?/g;function ah(i,t){i.seq.push(t),i.map[t.id]=t}function u0(i,t,e){let n=i.name,s=n.length;for(mo.lastIndex=0;;){let r=mo.exec(n),a=mo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ah(e,c===void 0?new dl(o,i,t):new pl(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ml(o),ah(e,f)),e=f}}}var ls=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);u0(r,a,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function oh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var f0=37297,d0=0;function p0(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function m0(i){let t=ae.getPrimaries(ae.workingColorSpace),e=ae.getPrimaries(i),n;switch(t===e?n="":t===$r&&e===Xr?n="LinearDisplayP3ToLinearSRGB":t===Xr&&e===$r&&(n="LinearSRGBToLinearDisplayP3"),i){case fi:case wa:return[n,"LinearTransferOETF"];case Ne:case Kl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function lh(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+p0(i.getShaderSource(t),a)}else return s}function g0(i,t){let e=m0(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function x0(i,t){let e;switch(t){case zu:e="Linear";break;case Vu:e="Reinhard";break;case Hu:e="Cineon";break;case Gu:e="ACESFilmic";break;case Xu:e="AgX";break;case $u:e="Neutral";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Rr=new U;function _0(){ae.getLuminanceCoefficients(Rr);let i=Rr.x.toFixed(4),t=Rr.y.toFixed(4),e=Rr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function v0(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function M0(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Os(i){return i!==""}function ch(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var b0=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(i){return i.replace(b0,w0)}var S0=new Map;function w0(i,t){let e=qt[t];if(e===void 0){let n=S0.get(t);if(n!==void 0)e=qt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}var E0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function uh(i){return i.replace(E0,A0)}function A0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function fh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function T0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===kn&&(t="SHADOWMAP_TYPE_VSM"),t}function C0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case fs:t="ENVMAP_TYPE_CUBE";break;case ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function R0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case fs:t="ENVMAP_MODE_REFRACTION";break}return t}function P0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ah:t="ENVMAP_BLENDING_MULTIPLY";break;case ku:t="ENVMAP_BLENDING_MIX";break;case Bu:t="ENVMAP_BLENDING_ADD";break}return t}function I0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function L0(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=T0(e),c=C0(e),h=R0(e),f=P0(e),u=I0(e),d=y0(e),x=v0(r),v=s.createProgram(),p,m,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Os).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Os).join(`
`),m.length>0&&(m+=`
`)):(p=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),m=[fh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?qt.tonemapping_pars_fragment:"",e.toneMapping!==ai?x0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",qt.colorspace_pars_fragment,g0("linearToOutputTexel",e.outputColorSpace),_0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),a=gl(a),a=ch(a,e),a=hh(a,e),o=gl(o),o=ch(o,e),o=hh(o,e),a=uh(a),o=uh(o),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,p=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=R+p+a,b=R+m+o,N=oh(s,s.VERTEX_SHADER,M),L=oh(s,s.FRAGMENT_SHADER,b);s.attachShader(v,N),s.attachShader(v,L),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function I(E){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(v).trim(),z=s.getShaderInfoLog(N).trim(),G=s.getShaderInfoLog(L).trim(),Q=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,N,L);else{let st=lh(s,N,"vertex"),$=lh(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+st+`
`+$)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||G==="")&&(V=!1);V&&(E.diagnostics={runnable:Q,programLog:W,vertexShader:{log:z,prefix:p},fragmentShader:{log:G,prefix:m}})}s.deleteShader(N),s.deleteShader(L),F=new ls(s,v),K=M0(s,v)}let F;this.getUniforms=function(){return F===void 0&&I(this),F};let K;this.getAttributes=function(){return K===void 0&&I(this),K};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,f0)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=d0++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=L,this}var D0=0,xl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new _l(t),e.set(t,n)),n}},_l=class{constructor(t){this.id=D0++,this.code=t,this.usedTimes=0}};function U0(i,t,e,n,s,r,a){let o=new Qr,l=new xl,c=new Set,h=[],f=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,d=s.vertexTextures,x=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,E,W,z,G){let Q=z.fog,V=G.geometry,st=_.isMeshStandardMaterial?z.environment:null,$=(_.isMeshStandardMaterial?e:t).get(_.envMap||st),yt=$&&$.mapping===ba?$.image.height:null,bt=v[_.type];_.precision!==null&&(x=s.getMaxPrecision(_.precision),x!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",x,"instead."));let St=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,$t=St!==void 0?St.length:0,Lt=0;V.morphAttributes.position!==void 0&&(Lt=1),V.morphAttributes.normal!==void 0&&(Lt=2),V.morphAttributes.color!==void 0&&(Lt=3);let Y,at,Ct,mt;if(bt){let ke=An[bt];Y=ke.vertexShader,at=ke.fragmentShader}else Y=_.vertexShader,at=_.fragmentShader,l.update(_),Ct=l.getVertexShaderID(_),mt=l.getFragmentShaderID(_);let Ot=i.getRenderTarget(),Nt=G.isInstancedMesh===!0,zt=G.isBatchedMesh===!0,Et=!!_.map,j=!!_.matcap,P=!!$,ut=!!_.aoMap,ht=!!_.lightMap,nt=!!_.bumpMap,ft=!!_.normalMap,Ft=!!_.displacementMap,xt=!!_.emissiveMap,A=!!_.metalnessMap,y=!!_.roughnessMap,B=_.anisotropy>0,Z=_.clearcoat>0,et=_.dispersion>0,J=_.iridescence>0,Pt=_.sheen>0,pt=_.transmission>0,At=B&&!!_.anisotropyMap,Qt=Z&&!!_.clearcoatMap,rt=Z&&!!_.clearcoatNormalMap,ot=Z&&!!_.clearcoatRoughnessMap,Vt=J&&!!_.iridescenceMap,Bt=J&&!!_.iridescenceThicknessMap,Tt=Pt&&!!_.sheenColorMap,Rt=Pt&&!!_.sheenRoughnessMap,kt=!!_.specularMap,Zt=!!_.specularColorMap,O=!!_.specularIntensityMap,vt=pt&&!!_.transmissionMap,X=pt&&!!_.thicknessMap,tt=!!_.gradientMap,Mt=!!_.alphaMap,wt=_.alphaTest>0,jt=!!_.alphaHash,fe=!!_.extensions,Oe=ai;_.toneMapped&&(Ot===null||Ot.isXRRenderTarget===!0)&&(Oe=i.toneMapping);let Jt={shaderID:bt,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:at,defines:_.defines,customVertexShaderID:Ct,customFragmentShaderID:mt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:x,batching:zt,batchingColor:zt&&G._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&G.instanceColor!==null,instancingMorph:Nt&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Ot===null?i.outputColorSpace:Ot.isXRRenderTarget===!0?Ot.texture.colorSpace:fi,alphaToCoverage:!!_.alphaToCoverage,map:Et,matcap:j,envMap:P,envMapMode:P&&$.mapping,envMapCubeUVHeight:yt,aoMap:ut,lightMap:ht,bumpMap:nt,normalMap:ft,displacementMap:d&&Ft,emissiveMap:xt,normalMapObjectSpace:ft&&_.normalMapType===Ju,normalMapTangentSpace:ft&&_.normalMapType===Jl,metalnessMap:A,roughnessMap:y,anisotropy:B,anisotropyMap:At,clearcoat:Z,clearcoatMap:Qt,clearcoatNormalMap:rt,clearcoatRoughnessMap:ot,dispersion:et,iridescence:J,iridescenceMap:Vt,iridescenceThicknessMap:Bt,sheen:Pt,sheenColorMap:Tt,sheenRoughnessMap:Rt,specularMap:kt,specularColorMap:Zt,specularIntensityMap:O,transmission:pt,transmissionMap:vt,thicknessMap:X,gradientMap:tt,opaque:_.transparent===!1&&_.blending===rs&&_.alphaToCoverage===!1,alphaMap:Mt,alphaTest:wt,alphaHash:jt,combine:_.combine,mapUv:Et&&p(_.map.channel),aoMapUv:ut&&p(_.aoMap.channel),lightMapUv:ht&&p(_.lightMap.channel),bumpMapUv:nt&&p(_.bumpMap.channel),normalMapUv:ft&&p(_.normalMap.channel),displacementMapUv:Ft&&p(_.displacementMap.channel),emissiveMapUv:xt&&p(_.emissiveMap.channel),metalnessMapUv:A&&p(_.metalnessMap.channel),roughnessMapUv:y&&p(_.roughnessMap.channel),anisotropyMapUv:At&&p(_.anisotropyMap.channel),clearcoatMapUv:Qt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:rt&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:Vt&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&p(_.sheenRoughnessMap.channel),specularMapUv:kt&&p(_.specularMap.channel),specularColorMapUv:Zt&&p(_.specularColorMap.channel),specularIntensityMapUv:O&&p(_.specularIntensityMap.channel),transmissionMapUv:vt&&p(_.transmissionMap.channel),thicknessMapUv:X&&p(_.thicknessMap.channel),alphaMapUv:Mt&&p(_.alphaMap.channel),vertexTangents:!!V.attributes.tangent&&(ft||B),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!V.attributes.uv&&(Et||Mt),fog:!!Q,useFog:_.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:u,skinning:G.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:$t,morphTextureStride:Lt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Et&&_.map.isVideoTexture===!0&&ae.getTransfer(_.map.colorSpace)===ue,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Re,flipSided:_.side===Ze,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:fe&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(fe&&_.extensions.multiDraw===!0||zt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Jt.vertexUv1s=c.has(1),Jt.vertexUv2s=c.has(2),Jt.vertexUv3s=c.has(3),c.clear(),Jt}function R(_){let E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(let W in _.defines)E.push(W),E.push(_.defines[W]);return _.isRawShaderMaterial===!1&&(M(E,_),b(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function M(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function b(_,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),_.push(o.mask)}function N(_){let E=v[_.type],W;if(E){let z=An[E];W=wf.clone(z.uniforms)}else W=_.uniforms;return W}function L(_,E){let W;for(let z=0,G=h.length;z<G;z++){let Q=h[z];if(Q.cacheKey===E){W=Q,++W.usedTimes;break}}return W===void 0&&(W=new L0(i,E,_,r),h.push(W)),W}function I(_){if(--_.usedTimes===0){let E=h.indexOf(_);h[E]=h[h.length-1],h.pop(),_.destroy()}}function F(_){l.remove(_)}function K(){l.dispose()}return{getParameters:m,getProgramCacheKey:R,getUniforms:N,acquireProgram:L,releaseProgram:I,releaseShaderCache:F,programs:h,dispose:K}}function N0(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function F0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function dh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ph(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,u,d,x,v,p){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:u,material:d,groupOrder:x,renderOrder:f.renderOrder,z:v,group:p},i[t]=m):(m.id=f.id,m.object=f,m.geometry=u,m.material=d,m.groupOrder=x,m.renderOrder=f.renderOrder,m.z=v,m.group=p),t++,m}function o(f,u,d,x,v,p){let m=a(f,u,d,x,v,p);d.transmission>0?n.push(m):d.transparent===!0?s.push(m):e.push(m)}function l(f,u,d,x,v,p){let m=a(f,u,d,x,v,p);d.transmission>0?n.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function c(f,u){e.length>1&&e.sort(f||F0),n.length>1&&n.sort(u||dh),s.length>1&&s.sort(u||dh)}function h(){for(let f=t,u=i.length;f<u;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function O0(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ph,i.set(n,[a])):s>=r.length?(a=new ph,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function k0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function B0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var z0=0;function V0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function H0(i){let t=new k0,e=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let s=new U,r=new _e,a=new _e;function o(c){let h=0,f=0,u=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let d=0,x=0,v=0,p=0,m=0,R=0,M=0,b=0,N=0,L=0,I=0;c.sort(V0);for(let K=0,_=c.length;K<_;K++){let E=c[K],W=E.color,z=E.intensity,G=E.distance,Q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=W.r*z,f+=W.g*z,u+=W.b*z;else if(E.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(E.sh.coefficients[V],z);I++}else if(E.isDirectionalLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){let st=E.shadow,$=e.get(E);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.directionalShadow[d]=$,n.directionalShadowMap[d]=Q,n.directionalShadowMatrix[d]=E.shadow.matrix,R++}n.directional[d]=V,d++}else if(E.isSpotLight){let V=t.get(E);V.position.setFromMatrixPosition(E.matrixWorld),V.color.copy(W).multiplyScalar(z),V.distance=G,V.coneCos=Math.cos(E.angle),V.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),V.decay=E.decay,n.spot[v]=V;let st=E.shadow;if(E.map&&(n.spotLightMap[N]=E.map,N++,st.updateMatrices(E),E.castShadow&&L++),n.spotLightMatrix[v]=st.matrix,E.castShadow){let $=e.get(E);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Q,b++}v++}else if(E.isRectAreaLight){let V=t.get(E);V.color.copy(W).multiplyScalar(z),V.halfWidth.set(E.width*.5,0,0),V.halfHeight.set(0,E.height*.5,0),n.rectArea[p]=V,p++}else if(E.isPointLight){let V=t.get(E);if(V.color.copy(E.color).multiplyScalar(E.intensity),V.distance=E.distance,V.decay=E.decay,E.castShadow){let st=E.shadow,$=e.get(E);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,$.shadowCameraNear=st.camera.near,$.shadowCameraFar=st.camera.far,n.pointShadow[x]=$,n.pointShadowMap[x]=Q,n.pointShadowMatrix[x]=E.shadow.matrix,M++}n.point[x]=V,x++}else if(E.isHemisphereLight){let V=t.get(E);V.skyColor.copy(E.color).multiplyScalar(z),V.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[m]=V,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.directionalLength!==d||F.pointLength!==x||F.spotLength!==v||F.rectAreaLength!==p||F.hemiLength!==m||F.numDirectionalShadows!==R||F.numPointShadows!==M||F.numSpotShadows!==b||F.numSpotMaps!==N||F.numLightProbes!==I)&&(n.directional.length=d,n.spot.length=v,n.rectArea.length=p,n.point.length=x,n.hemi.length=m,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+N-L,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=L,n.numLightProbes=I,F.directionalLength=d,F.pointLength=x,F.spotLength=v,F.rectAreaLength=p,F.hemiLength=m,F.numDirectionalShadows=R,F.numPointShadows=M,F.numSpotShadows=b,F.numSpotMaps=N,F.numLightProbes=I,n.version=z0++)}function l(c,h){let f=0,u=0,d=0,x=0,v=0,p=h.matrixWorldInverse;for(let m=0,R=c.length;m<R;m++){let M=c[m];if(M.isDirectionalLight){let b=n.directional[f];b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),f++}else if(M.isSpotLight){let b=n.spot[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(p),d++}else if(M.isRectAreaLight){let b=n.rectArea[x];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),a.identity(),r.copy(M.matrixWorld),r.premultiply(p),a.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(M.isPointLight){let b=n.point[u];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){let b=n.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:o,setupView:l,state:n}}function mh(i){let t=new H0(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function G0(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new mh(i),t.set(s,[o])):r>=a.length?(o=new mh(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var yl=class extends Xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vl=class extends Xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},W0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X0=`uniform sampler2D shadow_pass;
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
}`;function $0(i,t,e){let n=new Xs,s=new lt,r=new lt,a=new be,o=new yl({depthPacking:Zu}),l=new vl,c={},h=e.maxTextureSize,f={[oi]:Ze,[Ze]:oi,[Re]:Re},u=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:W0,fragmentShader:X0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Qe;x.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Wt(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let m=this.type;this.render=function(L,I,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;let K=i.getRenderTarget(),_=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),W=i.state;W.setBlending(ri),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let z=m!==kn&&this.type===kn,G=m===kn&&this.type!==kn;for(let Q=0,V=L.length;Q<V;Q++){let st=L[Q],$=st.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);let yt=$.getFrameExtents();if(s.multiply(yt),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/yt.x),s.x=r.x*yt.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/yt.y),s.y=r.y*yt.y,$.mapSize.y=r.y)),$.map===null||z===!0||G===!0){let St=this.type!==kn?{minFilter:Ye,magFilter:Ye}:{};$.map!==null&&$.map.dispose(),$.map=new Wn(s.x,s.y,St),$.map.texture.name=st.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();let bt=$.getViewportCount();for(let St=0;St<bt;St++){let $t=$.getViewport(St);a.set(r.x*$t.x,r.y*$t.y,r.x*$t.z,r.y*$t.w),W.viewport(a),$.updateMatrices(st,St),n=$.getFrustum(),b(I,F,$.camera,st,this.type)}$.isPointLightShadow!==!0&&this.type===kn&&R($,F),$.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(K,_,E)};function R(L,I){let F=t.update(v);u.defines.VSM_SAMPLES!==L.blurSamples&&(u.defines.VSM_SAMPLES=L.blurSamples,d.defines.VSM_SAMPLES=L.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Wn(s.x,s.y)),u.uniforms.shadow_pass.value=L.map.texture,u.uniforms.resolution.value=L.mapSize,u.uniforms.radius.value=L.radius,i.setRenderTarget(L.mapPass),i.clear(),i.renderBufferDirect(I,null,F,u,v,null),d.uniforms.shadow_pass.value=L.mapPass.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,i.setRenderTarget(L.map),i.clear(),i.renderBufferDirect(I,null,F,d,v,null)}function M(L,I,F,K){let _=null,E=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(E!==void 0)_=E;else if(_=F.isPointLight===!0?l:o,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){let W=_.uuid,z=I.uuid,G=c[W];G===void 0&&(G={},c[W]=G);let Q=G[z];Q===void 0&&(Q=_.clone(),G[z]=Q,I.addEventListener("dispose",N)),_=Q}if(_.visible=I.visible,_.wireframe=I.wireframe,K===kn?_.side=I.shadowSide!==null?I.shadowSide:I.side:_.side=I.shadowSide!==null?I.shadowSide:f[I.side],_.alphaMap=I.alphaMap,_.alphaTest=I.alphaTest,_.map=I.map,_.clipShadows=I.clipShadows,_.clippingPlanes=I.clippingPlanes,_.clipIntersection=I.clipIntersection,_.displacementMap=I.displacementMap,_.displacementScale=I.displacementScale,_.displacementBias=I.displacementBias,_.wireframeLinewidth=I.wireframeLinewidth,_.linewidth=I.linewidth,F.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let W=i.properties.get(_);W.light=F}return _}function b(L,I,F,K,_){if(L.visible===!1)return;if(L.layers.test(I.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&_===kn)&&(!L.frustumCulled||n.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);let z=t.update(L),G=L.material;if(Array.isArray(G)){let Q=z.groups;for(let V=0,st=Q.length;V<st;V++){let $=Q[V],yt=G[$.materialIndex];if(yt&&yt.visible){let bt=M(L,yt,K,_);L.onBeforeShadow(i,L,I,F,z,bt,$),i.renderBufferDirect(F,null,z,bt,L,$),L.onAfterShadow(i,L,I,F,z,bt,$)}}}else if(G.visible){let Q=M(L,G,K,_);L.onBeforeShadow(i,L,I,F,z,Q,null),i.renderBufferDirect(F,null,z,Q,L,null),L.onAfterShadow(i,L,I,F,z,Q,null)}}let W=L.children;for(let z=0,G=W.length;z<G;z++)b(W[z],I,F,K,_)}function N(L){L.target.removeEventListener("dispose",N);for(let F in c){let K=c[F],_=L.target.uuid;_ in K&&(K[_].dispose(),delete K[_])}}}var q0={[So]:wo,[Eo]:Co,[Ao]:Ro,[hs]:To,[wo]:So,[Co]:Eo,[Ro]:Ao,[To]:hs};function Y0(i){function t(){let O=!1,vt=new be,X=null,tt=new be(0,0,0,0);return{setMask:function(Mt){X!==Mt&&!O&&(i.colorMask(Mt,Mt,Mt,Mt),X=Mt)},setLocked:function(Mt){O=Mt},setClear:function(Mt,wt,jt,fe,Oe){Oe===!0&&(Mt*=fe,wt*=fe,jt*=fe),vt.set(Mt,wt,jt,fe),tt.equals(vt)===!1&&(i.clearColor(Mt,wt,jt,fe),tt.copy(vt))},reset:function(){O=!1,X=null,tt.set(-1,0,0,0)}}}function e(){let O=!1,vt=!1,X=null,tt=null,Mt=null;return{setReversed:function(wt){vt=wt},setTest:function(wt){wt?Ct(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(wt){X!==wt&&!O&&(i.depthMask(wt),X=wt)},setFunc:function(wt){if(vt&&(wt=q0[wt]),tt!==wt){switch(wt){case So:i.depthFunc(i.NEVER);break;case wo:i.depthFunc(i.ALWAYS);break;case Eo:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case Ao:i.depthFunc(i.EQUAL);break;case To:i.depthFunc(i.GEQUAL);break;case Co:i.depthFunc(i.GREATER);break;case Ro:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}tt=wt}},setLocked:function(wt){O=wt},setClear:function(wt){Mt!==wt&&(i.clearDepth(wt),Mt=wt)},reset:function(){O=!1,X=null,tt=null,Mt=null}}}function n(){let O=!1,vt=null,X=null,tt=null,Mt=null,wt=null,jt=null,fe=null,Oe=null;return{setTest:function(Jt){O||(Jt?Ct(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(Jt){vt!==Jt&&!O&&(i.stencilMask(Jt),vt=Jt)},setFunc:function(Jt,ke,He){(X!==Jt||tt!==ke||Mt!==He)&&(i.stencilFunc(Jt,ke,He),X=Jt,tt=ke,Mt=He)},setOp:function(Jt,ke,He){(wt!==Jt||jt!==ke||fe!==He)&&(i.stencilOp(Jt,ke,He),wt=Jt,jt=ke,fe=He)},setLocked:function(Jt){O=Jt},setClear:function(Jt){Oe!==Jt&&(i.clearStencil(Jt),Oe=Jt)},reset:function(){O=!1,vt=null,X=null,tt=null,Mt=null,wt=null,jt=null,fe=null,Oe=null}}}let s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},f=new WeakMap,u=[],d=null,x=!1,v=null,p=null,m=null,R=null,M=null,b=null,N=null,L=new Gt(0,0,0),I=0,F=!1,K=null,_=null,E=null,W=null,z=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Q=!1,V=0,st=i.getParameter(i.VERSION);st.indexOf("WebGL")!==-1?(V=parseFloat(/^WebGL (\d)/.exec(st)[1]),Q=V>=1):st.indexOf("OpenGL ES")!==-1&&(V=parseFloat(/^OpenGL ES (\d)/.exec(st)[1]),Q=V>=2);let $=null,yt={},bt=i.getParameter(i.SCISSOR_BOX),St=i.getParameter(i.VIEWPORT),$t=new be().fromArray(bt),Lt=new be().fromArray(St);function Y(O,vt,X,tt){let Mt=new Uint8Array(4),wt=i.createTexture();i.bindTexture(O,wt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let jt=0;jt<X;jt++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,tt,0,i.RGBA,i.UNSIGNED_BYTE,Mt):i.texImage2D(vt+jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Mt);return wt}let at={};at[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),Ct(i.DEPTH_TEST),r.setFunc(hs),ht(!1),nt(Sc),Ct(i.CULL_FACE),P(ri);function Ct(O){c[O]!==!0&&(i.enable(O),c[O]=!0)}function mt(O){c[O]!==!1&&(i.disable(O),c[O]=!1)}function Ot(O,vt){return h[O]!==vt?(i.bindFramebuffer(O,vt),h[O]=vt,O===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=vt),O===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Nt(O,vt){let X=u,tt=!1;if(O){X=f.get(vt),X===void 0&&(X=[],f.set(vt,X));let Mt=O.textures;if(X.length!==Mt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,jt=Mt.length;wt<jt;wt++)X[wt]=i.COLOR_ATTACHMENT0+wt;X.length=Mt.length,tt=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,tt=!0);tt&&i.drawBuffers(X)}function zt(O){return d!==O?(i.useProgram(O),d=O,!0):!1}let Et={[Ei]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[bu]:i.FUNC_REVERSE_SUBTRACT};Et[Su]=i.MIN,Et[wu]=i.MAX;let j={[Eu]:i.ZERO,[Au]:i.ONE,[Tu]:i.SRC_COLOR,[Mo]:i.SRC_ALPHA,[Du]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[bo]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Pu]:i.ONE_MINUS_DST_ALPHA,[Uu]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Fu]:i.CONSTANT_ALPHA,[Ou]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,vt,X,tt,Mt,wt,jt,fe,Oe,Jt){if(O===ri){x===!0&&(mt(i.BLEND),x=!1);return}if(x===!1&&(Ct(i.BLEND),x=!0),O!==vu){if(O!==v||Jt!==F){if((p!==Ei||M!==Ei)&&(i.blendEquation(i.FUNC_ADD),p=Ei,M=Ei),Jt)switch(O){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.ONE,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case cs:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case wc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ec:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}m=null,R=null,b=null,N=null,L.set(0,0,0),I=0,v=O,F=Jt}return}Mt=Mt||vt,wt=wt||X,jt=jt||tt,(vt!==p||Mt!==M)&&(i.blendEquationSeparate(Et[vt],Et[Mt]),p=vt,M=Mt),(X!==m||tt!==R||wt!==b||jt!==N)&&(i.blendFuncSeparate(j[X],j[tt],j[wt],j[jt]),m=X,R=tt,b=wt,N=jt),(fe.equals(L)===!1||Oe!==I)&&(i.blendColor(fe.r,fe.g,fe.b,Oe),L.copy(fe),I=Oe),v=O,F=!1}function ut(O,vt){O.side===Re?mt(i.CULL_FACE):Ct(i.CULL_FACE);let X=O.side===Ze;vt&&(X=!X),ht(X),O.blending===rs&&O.transparent===!1?P(ri):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),s.setMask(O.colorWrite);let tt=O.stencilWrite;a.setTest(tt),tt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ft(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ct(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function ht(O){K!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),K=O)}function nt(O){O!==_u?(Ct(i.CULL_FACE),O!==_&&(O===Sc?i.cullFace(i.BACK):O===yu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),_=O}function ft(O){O!==E&&(Q&&i.lineWidth(O),E=O)}function Ft(O,vt,X){O?(Ct(i.POLYGON_OFFSET_FILL),(W!==vt||z!==X)&&(i.polygonOffset(vt,X),W=vt,z=X)):mt(i.POLYGON_OFFSET_FILL)}function xt(O){O?Ct(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function A(O){O===void 0&&(O=i.TEXTURE0+G-1),$!==O&&(i.activeTexture(O),$=O)}function y(O,vt,X){X===void 0&&($===null?X=i.TEXTURE0+G-1:X=$);let tt=yt[X];tt===void 0&&(tt={type:void 0,texture:void 0},yt[X]=tt),(tt.type!==O||tt.texture!==vt)&&($!==X&&(i.activeTexture(X),$=X),i.bindTexture(O,vt||at[O]),tt.type=O,tt.texture=vt)}function B(){let O=yt[$];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function pt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function At(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Qt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function rt(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Bt(O){$t.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),$t.copy(O))}function Tt(O){Lt.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Lt.copy(O))}function Rt(O,vt){let X=l.get(vt);X===void 0&&(X=new WeakMap,l.set(vt,X));let tt=X.get(O);tt===void 0&&(tt=i.getUniformBlockIndex(vt,O.name),X.set(O,tt))}function kt(O,vt){let tt=l.get(vt).get(O);o.get(vt)!==tt&&(i.uniformBlockBinding(vt,tt,O.__bindingPointIndex),o.set(vt,tt))}function Zt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},$=null,yt={},h={},f=new WeakMap,u=[],d=null,x=!1,v=null,p=null,m=null,R=null,M=null,b=null,N=null,L=new Gt(0,0,0),I=0,F=!1,K=null,_=null,E=null,W=null,z=null,$t.set(0,0,i.canvas.width,i.canvas.height),Lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:Ct,disable:mt,bindFramebuffer:Ot,drawBuffers:Nt,useProgram:zt,setBlending:P,setMaterial:ut,setFlipSided:ht,setCullFace:nt,setLineWidth:ft,setPolygonOffset:Ft,setScissorTest:xt,activeTexture:A,bindTexture:y,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:et,texImage2D:ot,texImage3D:Vt,updateUBOMapping:Rt,uniformBlockBinding:kt,texStorage2D:Qt,texStorage3D:rt,texSubImage2D:J,texSubImage3D:Pt,compressedTexSubImage2D:pt,compressedTexSubImage3D:At,scissor:Bt,viewport:Tt,reset:Zt}}function gh(i,t,e,n){let s=Z0(n);switch(e){case Ih:return i*t;case Dh:return i*t;case Uh:return i*t*2;case Sa:return i*t/s.components*s.byteLength;case ql:return i*t/s.components*s.byteLength;case Nh:return i*t*2/s.components*s.byteLength;case Yl:return i*t*2/s.components*s.byteLength;case Lh:return i*t*3/s.components*s.byteLength;case bn:return i*t*4/s.components*s.byteLength;case Zl:return i*t*4/s.components*s.byteLength;case Or:case kr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Uo:case Fo:return Math.max(i,16)*Math.max(t,8)/4;case Do:case No:return Math.max(i,8)*Math.max(t,8)/2;case Oo:case ko:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ho:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Go:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Wo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Xo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case qo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Yo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ko:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Qo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case jo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vr:case tl:case el:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Fh:case nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case il:case sl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Z0(i){switch(i){case Gn:case Ch:return{byteLength:1,components:1};case Gs:case Rh:case js:return{byteLength:2,components:1};case Xl:case $l:return{byteLength:2,components:4};case Ri:case Wl:case zn:return{byteLength:4,components:1};case Ph:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function J0(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,f,u=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(A,y){return d?new OffscreenCanvas(A,y):Zr("canvas")}function v(A,y,B){let Z=1,et=xt(A);if((et.width>B||et.height>B)&&(Z=B/Math.max(et.width,et.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let J=Math.floor(Z*et.width),Pt=Math.floor(Z*et.height);f===void 0&&(f=x(J,Pt));let pt=y?x(J,Pt):f;return pt.width=J,pt.height=Pt,pt.getContext("2d").drawImage(A,0,0,J,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+J+"x"+Pt+")."),pt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Ye&&A.minFilter!==Mn}function m(A){i.generateMipmap(A)}function R(A,y,B,Z,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let J=y;if(y===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),y===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),y===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),y===i.RGBA){let Pt=et?Wr:ae.getTransfer(Z);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=Pt===ue?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&t.get("EXT_color_buffer_float"),J}function M(A,y){let B;return A?y===null||y===Ri||y===ds?B=i.DEPTH24_STENCIL8:y===zn?B=i.DEPTH32F_STENCIL8:y===Gs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ri||y===ds?B=i.DEPTH_COMPONENT24:y===zn?B=i.DEPTH_COMPONENT32F:y===Gs&&(B=i.DEPTH_COMPONENT16),B}function b(A,y){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ye&&A.minFilter!==Mn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function N(A){let y=A.target;y.removeEventListener("dispose",N),I(y),y.isVideoTexture&&h.delete(y)}function L(A){let y=A.target;y.removeEventListener("dispose",L),K(y)}function I(A){let y=n.get(A);if(y.__webglInit===void 0)return;let B=A.source,Z=u.get(B);if(Z){let et=Z[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&F(A),Object.keys(Z).length===0&&u.delete(B)}n.remove(A)}function F(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let B=A.source,Z=u.get(B);delete Z[y.__cacheKey],a.memory.textures--}function K(A){let y=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let et=0;et<y.__webglFramebuffer[Z].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[Z][et]);else i.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)i.deleteFramebuffer(y.__webglFramebuffer[Z]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let B=A.textures;for(let Z=0,et=B.length;Z<et;Z++){let J=n.get(B[Z]);J.__webglTexture&&(i.deleteTexture(J.__webglTexture),a.memory.textures--),n.remove(B[Z])}n.remove(A)}let _=0;function E(){_=0}function W(){let A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function z(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function G(A,y){let B=n.get(A);if(A.isVideoTexture&&ft(A),A.isRenderTargetTexture===!1&&A.version>0&&B.__version!==A.version){let Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Lt(B,A,y);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function Q(A,y){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Lt(B,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function V(A,y){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Lt(B,A,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function st(A,y){let B=n.get(A);if(A.version>0&&B.__version!==A.version){Y(B,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}let $={[Hs]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[Lo]:i.MIRRORED_REPEAT},yt={[Ye]:i.NEAREST,[qu]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[Mn]:i.LINEAR,[ka]:i.LINEAR_MIPMAP_NEAREST,[Ci]:i.LINEAR_MIPMAP_LINEAR},bt={[Ku]:i.NEVER,[sf]:i.ALWAYS,[Qu]:i.LESS,[Oh]:i.LEQUAL,[ju]:i.EQUAL,[nf]:i.GEQUAL,[tf]:i.GREATER,[ef]:i.NOTEQUAL};function St(A,y){if(y.type===zn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Mn||y.magFilter===ka||y.magFilter===cr||y.magFilter===Ci||y.minFilter===Mn||y.minFilter===ka||y.minFilter===cr||y.minFilter===Ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,$[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,$[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,$[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ye||y.minFilter!==cr&&y.minFilter!==Ci||y.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function $t(A,y){let B=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",N));let Z=y.source,et=u.get(Z);et===void 0&&(et={},u.set(Z,et));let J=z(y);if(J!==A.__cacheKey){et[J]===void 0&&(et[J]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),et[J].usedTimes++;let Pt=et[A.__cacheKey];Pt!==void 0&&(et[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&F(y)),A.__cacheKey=J,A.__webglTexture=et[J].texture}return B}function Lt(A,y,B){let Z=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=i.TEXTURE_3D);let et=$t(A,y),J=y.source;e.bindTexture(Z,A.__webglTexture,i.TEXTURE0+B);let Pt=n.get(J);if(J.version!==Pt.__version||et===!0){e.activeTexture(i.TEXTURE0+B);let pt=ae.getPrimaries(ae.workingColorSpace),At=y.colorSpace===ii?null:ae.getPrimaries(y.colorSpace),Qt=y.colorSpace===ii||pt===At?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);let rt=v(y.image,!1,s.maxTextureSize);rt=Ft(y,rt);let ot=r.convert(y.format,y.colorSpace),Vt=r.convert(y.type),Bt=R(y.internalFormat,ot,Vt,y.colorSpace,y.isVideoTexture);St(Z,y);let Tt,Rt=y.mipmaps,kt=y.isVideoTexture!==!0,Zt=Pt.__version===void 0||et===!0,O=J.dataReady,vt=b(y,rt);if(y.isDepthTexture)Bt=M(y.format===ps,y.type),Zt&&(kt?e.texStorage2D(i.TEXTURE_2D,1,Bt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,ot,Vt,null));else if(y.isDataTexture)if(Rt.length>0){kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,Rt[0].width,Rt[0].height);for(let X=0,tt=Rt.length;X<tt;X++)Tt=Rt[X],kt?O&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,ot,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,X,Bt,Tt.width,Tt.height,0,ot,Vt,Tt.data);y.generateMipmaps=!1}else kt?(Zt&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,rt.width,rt.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,rt.width,rt.height,ot,Vt,rt.data)):e.texImage2D(i.TEXTURE_2D,0,Bt,rt.width,rt.height,0,ot,Vt,rt.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){kt&&Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,Rt[0].width,Rt[0].height,rt.depth);for(let X=0,tt=Rt.length;X<tt;X++)if(Tt=Rt[X],y.format!==bn)if(ot!==null)if(kt){if(O)if(y.layerUpdates.size>0){let Mt=gh(Tt.width,Tt.height,y.format,y.type);for(let wt of y.layerUpdates){let jt=Tt.data.subarray(wt*Mt/Tt.data.BYTES_PER_ELEMENT,(wt+1)*Mt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,wt,Tt.width,Tt.height,1,ot,jt,0,0)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,rt.depth,ot,Tt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Bt,Tt.width,Tt.height,rt.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else kt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Tt.width,Tt.height,rt.depth,ot,Vt,Tt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Bt,Tt.width,Tt.height,rt.depth,0,ot,Vt,Tt.data)}else{kt&&Zt&&e.texStorage2D(i.TEXTURE_2D,vt,Bt,Rt[0].width,Rt[0].height);for(let X=0,tt=Rt.length;X<tt;X++)Tt=Rt[X],y.format!==bn?ot!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,ot,Tt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Bt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):kt?O&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Tt.width,Tt.height,ot,Vt,Tt.data):e.texImage2D(i.TEXTURE_2D,X,Bt,Tt.width,Tt.height,0,ot,Vt,Tt.data)}else if(y.isDataArrayTexture)if(kt){if(Zt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Bt,rt.width,rt.height,rt.depth),O)if(y.layerUpdates.size>0){let X=gh(rt.width,rt.height,y.format,y.type);for(let tt of y.layerUpdates){let Mt=rt.data.subarray(tt*X/rt.data.BYTES_PER_ELEMENT,(tt+1)*X/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,rt.width,rt.height,1,ot,Vt,Mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,ot,Vt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Bt,rt.width,rt.height,rt.depth,0,ot,Vt,rt.data);else if(y.isData3DTexture)kt?(Zt&&e.texStorage3D(i.TEXTURE_3D,vt,Bt,rt.width,rt.height,rt.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,ot,Vt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,Bt,rt.width,rt.height,rt.depth,0,ot,Vt,rt.data);else if(y.isFramebufferTexture){if(Zt)if(kt)e.texStorage2D(i.TEXTURE_2D,vt,Bt,rt.width,rt.height);else{let X=rt.width,tt=rt.height;for(let Mt=0;Mt<vt;Mt++)e.texImage2D(i.TEXTURE_2D,Mt,Bt,X,tt,0,ot,Vt,null),X>>=1,tt>>=1}}else if(Rt.length>0){if(kt&&Zt){let X=xt(Rt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Bt,X.width,X.height)}for(let X=0,tt=Rt.length;X<tt;X++)Tt=Rt[X],kt?O&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,ot,Vt,Tt):e.texImage2D(i.TEXTURE_2D,X,Bt,ot,Vt,Tt);y.generateMipmaps=!1}else if(kt){if(Zt){let X=xt(rt);e.texStorage2D(i.TEXTURE_2D,vt,Bt,X.width,X.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot,Vt,rt)}else e.texImage2D(i.TEXTURE_2D,0,Bt,ot,Vt,rt);p(y)&&m(Z),Pt.__version=J.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Y(A,y,B){if(y.image.length!==6)return;let Z=$t(A,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+B);let J=n.get(et);if(et.version!==J.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);let Pt=ae.getPrimaries(ae.workingColorSpace),pt=y.colorSpace===ii?null:ae.getPrimaries(y.colorSpace),At=y.colorSpace===ii||Pt===pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,At);let Qt=y.isCompressedTexture||y.image[0].isCompressedTexture,rt=y.image[0]&&y.image[0].isDataTexture,ot=[];for(let tt=0;tt<6;tt++)!Qt&&!rt?ot[tt]=v(y.image[tt],!0,s.maxCubemapSize):ot[tt]=rt?y.image[tt].image:y.image[tt],ot[tt]=Ft(y,ot[tt]);let Vt=ot[0],Bt=r.convert(y.format,y.colorSpace),Tt=r.convert(y.type),Rt=R(y.internalFormat,Bt,Tt,y.colorSpace),kt=y.isVideoTexture!==!0,Zt=J.__version===void 0||Z===!0,O=et.dataReady,vt=b(y,Vt);St(i.TEXTURE_CUBE_MAP,y);let X;if(Qt){kt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Rt,Vt.width,Vt.height);for(let tt=0;tt<6;tt++){X=ot[tt].mipmaps;for(let Mt=0;Mt<X.length;Mt++){let wt=X[Mt];y.format!==bn?Bt!==null?kt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,wt.width,wt.height,Bt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,Rt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,0,0,wt.width,wt.height,Bt,Tt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt,Rt,wt.width,wt.height,0,Bt,Tt,wt.data)}}}else{if(X=y.mipmaps,kt&&Zt){X.length>0&&vt++;let tt=xt(ot[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Rt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(rt){kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,ot[tt].width,ot[tt].height,Bt,Tt,ot[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Rt,ot[tt].width,ot[tt].height,0,Bt,Tt,ot[tt].data);for(let Mt=0;Mt<X.length;Mt++){let jt=X[Mt].image[tt].image;kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,jt.width,jt.height,Bt,Tt,jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,Rt,jt.width,jt.height,0,Bt,Tt,jt.data)}}else{kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Bt,Tt,ot[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Rt,Bt,Tt,ot[tt]);for(let Mt=0;Mt<X.length;Mt++){let wt=X[Mt];kt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,0,0,Bt,Tt,wt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Mt+1,Rt,Bt,Tt,wt.image[tt])}}}p(y)&&m(i.TEXTURE_CUBE_MAP),J.__version=et.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function at(A,y,B,Z,et,J){let Pt=r.convert(B.format,B.colorSpace),pt=r.convert(B.type),At=R(B.internalFormat,Pt,pt,B.colorSpace);if(!n.get(y).__hasExternalTextures){let rt=Math.max(1,y.width>>J),ot=Math.max(1,y.height>>J);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,J,At,rt,ot,y.depth,0,Pt,pt,null):e.texImage2D(et,J,At,rt,ot,0,Pt,pt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),nt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,et,n.get(B).__webglTexture,0,ht(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,et,n.get(B).__webglTexture,J),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ct(A,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){let Z=y.depthTexture,et=Z&&Z.isDepthTexture?Z.type:null,J=M(y.stencilBuffer,et),Pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=ht(y);nt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt,J,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt,J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,A)}else{let Z=y.textures;for(let et=0;et<Z.length;et++){let J=Z[et],Pt=r.convert(J.format,J.colorSpace),pt=r.convert(J.type),At=R(J.internalFormat,Pt,pt,J.colorSpace),Qt=ht(y);B&&nt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Qt,At,y.width,y.height):nt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Qt,At,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,At,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G(y.depthTexture,0);let Z=n.get(y.depthTexture).__webglTexture,et=ht(y);if(y.depthTexture.format===as)nt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(y.depthTexture.format===ps)nt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,et):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ot(A){let y=n.get(A),B=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){let Z=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Z){let et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Z.removeEventListener("dispose",et)};Z.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=Z}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,A)}else if(B){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]===void 0)y.__webglDepthbuffer[Z]=i.createRenderbuffer(),Ct(y.__webglDepthbuffer[Z],A,!1);else{let et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=y.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,J)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ct(y.__webglDepthbuffer,A,!1);else{let Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Nt(A,y,B){let Z=n.get(A);y!==void 0&&at(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Ot(A)}function zt(A){let y=A.texture,B=n.get(A),Z=n.get(y);A.addEventListener("dispose",L);let et=A.textures,J=A.isWebGLCubeRenderTarget===!0,Pt=et.length>1;if(Pt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=y.version,a.memory.textures++),J){B.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer[pt]=[];for(let At=0;At<y.mipmaps.length;At++)B.__webglFramebuffer[pt][At]=i.createFramebuffer()}else B.__webglFramebuffer[pt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){B.__webglFramebuffer=[];for(let pt=0;pt<y.mipmaps.length;pt++)B.__webglFramebuffer[pt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let pt=0,At=et.length;pt<At;pt++){let Qt=n.get(et[pt]);Qt.__webglTexture===void 0&&(Qt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&nt(A)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let pt=0;pt<et.length;pt++){let At=et[pt];B.__webglColorRenderbuffer[pt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[pt]);let Qt=r.convert(At.format,At.colorSpace),rt=r.convert(At.type),ot=R(At.internalFormat,Qt,rt,At.colorSpace,A.isXRRenderTarget===!0),Vt=ht(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,ot,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pt,i.RENDERBUFFER,B.__webglColorRenderbuffer[pt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Ct(B.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(J){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),St(i.TEXTURE_CUBE_MAP,y);for(let pt=0;pt<6;pt++)if(y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)at(B.__webglFramebuffer[pt][At],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,At);else at(B.__webglFramebuffer[pt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);p(y)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let pt=0,At=et.length;pt<At;pt++){let Qt=et[pt],rt=n.get(Qt);e.bindTexture(i.TEXTURE_2D,rt.__webglTexture),St(i.TEXTURE_2D,Qt),at(B.__webglFramebuffer,A,Qt,i.COLOR_ATTACHMENT0+pt,i.TEXTURE_2D,0),p(Qt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let pt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(pt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(pt,Z.__webglTexture),St(pt,y),y.mipmaps&&y.mipmaps.length>0)for(let At=0;At<y.mipmaps.length;At++)at(B.__webglFramebuffer[At],A,y,i.COLOR_ATTACHMENT0,pt,At);else at(B.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,pt,0);p(y)&&m(pt),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Et(A){let y=A.textures;for(let B=0,Z=y.length;B<Z;B++){let et=y[B];if(p(et)){let J=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pt=n.get(et).__webglTexture;e.bindTexture(J,Pt),m(J),e.unbindTexture()}}}let j=[],P=[];function ut(A){if(A.samples>0){if(nt(A)===!1){let y=A.textures,B=A.width,Z=A.height,et=i.COLOR_BUFFER_BIT,J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(A),pt=y.length>1;if(pt)for(let At=0;At<y.length;At++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let At=0;At<y.length;At++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),pt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);let Qt=n.get(y[At]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,et,i.NEAREST),l===!0&&(j.length=0,P.length=0,j.push(i.COLOR_ATTACHMENT0+At),A.depthBuffer&&A.resolveDepthBuffer===!1&&(j.push(J),P.push(J),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,j))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pt)for(let At=0;At<y.length;At++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[At]);let Qt=n.get(y[At]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+At,i.TEXTURE_2D,Qt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function ht(A){return Math.min(s.maxSamples,A.samples)}function nt(A){let y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function ft(A){let y=a.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Ft(A,y){let B=A.colorSpace,Z=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||B!==fi&&B!==ii&&(ae.getTransfer(B)===ue?(Z!==bn||et!==Gn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),y}function xt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=Q,this.setTexture3D=V,this.setTextureCube=st,this.rebindTextures=Nt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=at,this.useMultisampledRTT=nt}function K0(i,t){function e(n,s=ii){let r,a=ae.getTransfer(s);if(n===Gn)return i.UNSIGNED_BYTE;if(n===Xl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$l)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ph)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ch)return i.BYTE;if(n===Rh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===Wl)return i.INT;if(n===Ri)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===js)return i.HALF_FLOAT;if(n===Ih)return i.ALPHA;if(n===Lh)return i.RGB;if(n===bn)return i.RGBA;if(n===Dh)return i.LUMINANCE;if(n===Uh)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===ps)return i.DEPTH_STENCIL;if(n===Sa)return i.RED;if(n===ql)return i.RED_INTEGER;if(n===Nh)return i.RG;if(n===Yl)return i.RG_INTEGER;if(n===Zl)return i.RGBA_INTEGER;if(n===Or||n===kr||n===Br||n===zr)if(a===ue)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Do||n===Uo||n===No||n===Fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Do)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oo||n===ko||n===Bo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oo||n===ko)return a===ue?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Bo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zo||n===Vo||n===Ho||n===Go||n===Wo||n===Xo||n===$o||n===qo||n===Yo||n===Zo||n===Jo||n===Ko||n===Qo||n===jo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ho)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Go)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$o)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Yo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Zo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ko)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jo)return a===ue?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===tl||n===el)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vr)return a===ue?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===tl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===el)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fh||n===nl||n===il||n===sl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===il)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Ml=class extends qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Xt=class extends Ee{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q0={type:"move"},ks=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,n),m=this._getHandJoint(c,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},j0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tg=`
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

}`,bl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let s=new tn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new dn({vertexShader:j0,fragmentShader:tg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Wt(new $n(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Sl=class extends li{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,v=new bl,p=e.getContextAttributes(),m=null,R=null,M=[],b=[],N=new lt,L=null,I=new qe;I.layers.enable(1),I.viewport=new be;let F=new qe;F.layers.enable(2),F.viewport=new be;let K=[I,F],_=new Ml;_.layers.enable(1),_.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let at=M[Y];return at===void 0&&(at=new ks,M[Y]=at),at.getTargetRaySpace()},this.getControllerGrip=function(Y){let at=M[Y];return at===void 0&&(at=new ks,M[Y]=at),at.getGripSpace()},this.getHand=function(Y){let at=M[Y];return at===void 0&&(at=new ks,M[Y]=at),at.getHandSpace()};function z(Y){let at=b.indexOf(Y.inputSource);if(at===-1)return;let Ct=M[at];Ct!==void 0&&(Ct.update(Y.inputSource,Y.frame,c||a),Ct.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Q);for(let Y=0;Y<M.length;Y++){let at=b[Y];at!==null&&(b[Y]=null,M[Y].disconnect(at))}E=null,W=null,v.reset(),t.setRenderTarget(m),d=null,u=null,f=null,s=null,R=null,Lt.stop(),n.isPresenting=!1,t.setPixelRatio(L),t.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Q),p.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(N),s.renderState.layers===void 0){let at={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),R=new Wn(d.framebufferWidth,d.framebufferHeight,{format:bn,type:Gn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let at=null,Ct=null,mt=null;p.depth&&(mt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=p.stencil?ps:as,Ct=p.stencil?ds:Ri);let Ot={colorFormat:e.RGBA8,depthFormat:mt,scaleFactor:r};f=new XRWebGLBinding(s,e),u=f.createProjectionLayer(Ot),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),R=new Wn(u.textureWidth,u.textureHeight,{format:bn,type:Gn,depthTexture:new ra(u.textureWidth,u.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Lt.setContext(s),Lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Q(Y){for(let at=0;at<Y.removed.length;at++){let Ct=Y.removed[at],mt=b.indexOf(Ct);mt>=0&&(b[mt]=null,M[mt].disconnect(Ct))}for(let at=0;at<Y.added.length;at++){let Ct=Y.added[at],mt=b.indexOf(Ct);if(mt===-1){for(let Nt=0;Nt<M.length;Nt++)if(Nt>=b.length){b.push(Ct),mt=Nt;break}else if(b[Nt]===null){b[Nt]=Ct,mt=Nt;break}if(mt===-1)break}let Ot=M[mt];Ot&&Ot.connect(Ct)}}let V=new U,st=new U;function $(Y,at,Ct){V.setFromMatrixPosition(at.matrixWorld),st.setFromMatrixPosition(Ct.matrixWorld);let mt=V.distanceTo(st),Ot=at.projectionMatrix.elements,Nt=Ct.projectionMatrix.elements,zt=Ot[14]/(Ot[10]-1),Et=Ot[14]/(Ot[10]+1),j=(Ot[9]+1)/Ot[5],P=(Ot[9]-1)/Ot[5],ut=(Ot[8]-1)/Ot[0],ht=(Nt[8]+1)/Nt[0],nt=zt*ut,ft=zt*ht,Ft=mt/(-ut+ht),xt=Ft*-ut;if(at.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(xt),Y.translateZ(Ft),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Ot[10]===-1)Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{let A=zt+Ft,y=Et+Ft,B=nt-xt,Z=ft+(mt-xt),et=j*Et/y*A,J=P*Et/y*A;Y.projectionMatrix.makePerspective(B,Z,et,J,A,y),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function yt(Y,at){at===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(at.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let at=Y.near,Ct=Y.far;v.texture!==null&&(v.depthNear>0&&(at=v.depthNear),v.depthFar>0&&(Ct=v.depthFar)),_.near=F.near=I.near=at,_.far=F.far=I.far=Ct,(E!==_.near||W!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),E=_.near,W=_.far);let mt=Y.parent,Ot=_.cameras;yt(_,mt);for(let Nt=0;Nt<Ot.length;Nt++)yt(Ot[Nt],mt);Ot.length===2?$(_,I,F):_.projectionMatrix.copy(I.projectionMatrix),bt(Y,_,mt)};function bt(Y,at,Ct){Ct===null?Y.matrix.copy(at.matrixWorld):(Y.matrix.copy(Ct.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(at.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(at.projectionMatrix),Y.projectionMatrixInverse.copy(at.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Yr*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let St=null;function $t(Y,at){if(h=at.getViewerPose(c||a),x=at,h!==null){let Ct=h.views;d!==null&&(t.setRenderTargetFramebuffer(R,d.framebuffer),t.setRenderTarget(R));let mt=!1;Ct.length!==_.cameras.length&&(_.cameras.length=0,mt=!0);for(let Nt=0;Nt<Ct.length;Nt++){let zt=Ct[Nt],Et=null;if(d!==null)Et=d.getViewport(zt);else{let P=f.getViewSubImage(u,zt);Et=P.viewport,Nt===0&&(t.setRenderTargetTextures(R,P.colorTexture,u.ignoreDepthValues?void 0:P.depthStencilTexture),t.setRenderTarget(R))}let j=K[Nt];j===void 0&&(j=new qe,j.layers.enable(Nt),j.viewport=new be,K[Nt]=j),j.matrix.fromArray(zt.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(zt.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Et.x,Et.y,Et.width,Et.height),Nt===0&&(_.matrix.copy(j.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),mt===!0&&_.cameras.push(j)}let Ot=s.enabledFeatures;if(Ot&&Ot.includes("depth-sensing")){let Nt=f.getDepthInformation(Ct[0]);Nt&&Nt.isValid&&Nt.texture&&v.init(t,Nt,s.renderState)}}for(let Ct=0;Ct<M.length;Ct++){let mt=b[Ct],Ot=M[Ct];mt!==null&&Ot!==void 0&&Ot.update(mt,at,c||a)}St&&St(Y,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),x=null}let Lt=new Vh;Lt.setAnimationLoop($t),this.setAnimationLoop=function(Y){St=Y},this.dispose=function(){}}},Si=new Cn,eg=new _e;function ng(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,zh(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,R,M,b){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,b)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),v(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,R,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ze&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ze&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let R=t.get(m),M=R.envMap,b=R.envMapRotation;M&&(p.envMap.value=M,Si.copy(b),Si.x*=-1,Si.y*=-1,Si.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Si.y*=-1,Si.z*=-1),p.envMapRotation.value.setFromMatrix4(eg.makeRotationFromEuler(Si)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,R,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*R,p.scale.value=M*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,R){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ze&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=R.texture,p.transmissionSamplerSize.value.set(R.width,R.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){let R=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(R.matrixWorld),p.nearDistance.value=R.shadow.camera.near,p.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ig(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,M){let b=M.program;n.uniformBlockBinding(R,b)}function c(R,M){let b=s[R.id];b===void 0&&(x(R),b=h(R),s[R.id]=b,R.addEventListener("dispose",p));let N=M.program;n.updateUBOMapping(R,N);let L=t.render.frame;r[R.id]!==L&&(u(R),r[R.id]=L)}function h(R){let M=f();R.__bindingPointIndex=M;let b=i.createBuffer(),N=R.__size,L=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,N,L),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function f(){for(let R=0;R<o;R++)if(a.indexOf(R)===-1)return a.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(R){let M=s[R.id],b=R.uniforms,N=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let L=0,I=b.length;L<I;L++){let F=Array.isArray(b[L])?b[L]:[b[L]];for(let K=0,_=F.length;K<_;K++){let E=F[K];if(d(E,L,K,N)===!0){let W=E.__offset,z=Array.isArray(E.value)?E.value:[E.value],G=0;for(let Q=0;Q<z.length;Q++){let V=z[Q],st=v(V);typeof V=="number"||typeof V=="boolean"?(E.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,W+G,E.__data)):V.isMatrix3?(E.__data[0]=V.elements[0],E.__data[1]=V.elements[1],E.__data[2]=V.elements[2],E.__data[3]=0,E.__data[4]=V.elements[3],E.__data[5]=V.elements[4],E.__data[6]=V.elements[5],E.__data[7]=0,E.__data[8]=V.elements[6],E.__data[9]=V.elements[7],E.__data[10]=V.elements[8],E.__data[11]=0):(V.toArray(E.__data,G),G+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(R,M,b,N){let L=R.value,I=M+"_"+b;if(N[I]===void 0)return typeof L=="number"||typeof L=="boolean"?N[I]=L:N[I]=L.clone(),!0;{let F=N[I];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return N[I]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function x(R){let M=R.uniforms,b=0,N=16;for(let I=0,F=M.length;I<F;I++){let K=Array.isArray(M[I])?M[I]:[M[I]];for(let _=0,E=K.length;_<E;_++){let W=K[_],z=Array.isArray(W.value)?W.value:[W.value];for(let G=0,Q=z.length;G<Q;G++){let V=z[G],st=v(V),$=b%N,yt=$%st.boundary,bt=$+yt;b+=yt,bt!==0&&N-bt<st.storage&&(b+=N-bt),W.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=b,b+=st.storage}}}let L=b%N;return L>0&&(b+=N-L),R.__size=b,R.__cache={},this}function v(R){let M={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(M.boundary=4,M.storage=4):R.isVector2?(M.boundary=8,M.storage=8):R.isVector3||R.isColor?(M.boundary=16,M.storage=12):R.isVector4?(M.boundary=16,M.storage=16):R.isMatrix3?(M.boundary=48,M.storage=48):R.isMatrix4?(M.boundary=64,M.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),M}function p(R){let M=R.target;M.removeEventListener("dispose",p);let b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function m(){for(let R in s)i.deleteBuffer(s[R]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}var aa=class{constructor(t={}){let{canvas:e=af(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;let d=new Uint32Array(4),x=new Int32Array(4),v=null,p=null,m=[],R=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=ai,this.toneMappingExposure=1;let M=this,b=!1,N=0,L=0,I=null,F=-1,K=null,_=new be,E=new be,W=null,z=new Gt(0),G=0,Q=e.width,V=e.height,st=1,$=null,yt=null,bt=new be(0,0,Q,V),St=new be(0,0,Q,V),$t=!1,Lt=new Xs,Y=!1,at=!1,Ct=new _e,mt=new _e,Ot=new U,Nt=new be,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Et=!1;function j(){return I===null?st:1}let P=n;function ut(g,S){return e.getContext(g,S)}try{let g={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r169"),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",Mt,!1),e.addEventListener("webglcontextcreationerror",wt,!1),P===null){let S="webgl2";if(P=ut(S,g),P===null)throw ut(S)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(g){throw console.error("THREE.WebGLRenderer: "+g.message),g}let ht,nt,ft,Ft,xt,A,y,B,Z,et,J,Pt,pt,At,Qt,rt,ot,Vt,Bt,Tt,Rt,kt,Zt,O;function vt(){ht=new ym(P),ht.init(),kt=new K0(P,ht),nt=new dm(P,ht,t,kt),ft=new Y0(P),nt.reverseDepthBuffer&&ft.buffers.depth.setReversed(!0),Ft=new bm(P),xt=new N0,A=new J0(P,ht,ft,xt,nt,kt,Ft),y=new mm(M),B=new _m(M),Z=new Rf(P),Zt=new um(P,Z),et=new vm(P,Z,Ft,Zt),J=new wm(P,et,Z,Ft),Bt=new Sm(P,nt,A),rt=new pm(xt),Pt=new U0(M,y,B,ht,nt,Zt,rt),pt=new ng(M,xt),At=new O0,Qt=new G0(ht),Vt=new hm(M,y,B,ft,J,u,l),ot=new $0(M,J,nt),O=new ig(P,Ft,nt,ft),Tt=new fm(P,ht,Ft),Rt=new Mm(P,ht,Ft),Ft.programs=Pt.programs,M.capabilities=nt,M.extensions=ht,M.properties=xt,M.renderLists=At,M.shadowMap=ot,M.state=ft,M.info=Ft}vt();let X=new Sl(M,P);this.xr=X,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let g=ht.get("WEBGL_lose_context");g&&g.loseContext()},this.forceContextRestore=function(){let g=ht.get("WEBGL_lose_context");g&&g.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(g){g!==void 0&&(st=g,this.setSize(Q,V,!1))},this.getSize=function(g){return g.set(Q,V)},this.setSize=function(g,S,D=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=g,V=S,e.width=Math.floor(g*st),e.height=Math.floor(S*st),D===!0&&(e.style.width=g+"px",e.style.height=S+"px"),this.setViewport(0,0,g,S)},this.getDrawingBufferSize=function(g){return g.set(Q*st,V*st).floor()},this.setDrawingBufferSize=function(g,S,D){Q=g,V=S,st=D,e.width=Math.floor(g*D),e.height=Math.floor(S*D),this.setViewport(0,0,g,S)},this.getCurrentViewport=function(g){return g.copy(_)},this.getViewport=function(g){return g.copy(bt)},this.setViewport=function(g,S,D,T){g.isVector4?bt.set(g.x,g.y,g.z,g.w):bt.set(g,S,D,T),ft.viewport(_.copy(bt).multiplyScalar(st).round())},this.getScissor=function(g){return g.copy(St)},this.setScissor=function(g,S,D,T){g.isVector4?St.set(g.x,g.y,g.z,g.w):St.set(g,S,D,T),ft.scissor(E.copy(St).multiplyScalar(st).round())},this.getScissorTest=function(){return $t},this.setScissorTest=function(g){ft.setScissorTest($t=g)},this.setOpaqueSort=function(g){$=g},this.setTransparentSort=function(g){yt=g},this.getClearColor=function(g){return g.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(g=!0,S=!0,D=!0){let T=0;if(g){let w=!1;if(I!==null){let C=I.texture.format;w=C===Zl||C===Yl||C===ql}if(w){let C=I.texture.type,H=C===Gn||C===Ri||C===Gs||C===ds||C===Xl||C===$l,k=Vt.getClearColor(),q=Vt.getClearAlpha(),_t=k.r,It=k.g,Dt=k.b;H?(d[0]=_t,d[1]=It,d[2]=Dt,d[3]=q,P.clearBufferuiv(P.COLOR,0,d)):(x[0]=_t,x[1]=It,x[2]=Dt,x[3]=q,P.clearBufferiv(P.COLOR,0,x))}else T|=P.COLOR_BUFFER_BIT}S&&(T|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),D&&(T|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(T)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",Mt,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),At.dispose(),Qt.dispose(),xt.dispose(),y.dispose(),B.dispose(),J.dispose(),Zt.dispose(),O.dispose(),Pt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ln),X.removeEventListener("sessionend",bs),mn.stop()};function tt(g){g.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;let g=Ft.autoReset,S=ot.enabled,D=ot.autoUpdate,T=ot.needsUpdate,w=ot.type;vt(),Ft.autoReset=g,ot.enabled=S,ot.autoUpdate=D,ot.needsUpdate=T,ot.type=w}function wt(g){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",g.statusMessage)}function jt(g){let S=g.target;S.removeEventListener("dispose",jt),fe(S)}function fe(g){Oe(g),xt.remove(g)}function Oe(g){let S=xt.get(g).programs;S!==void 0&&(S.forEach(function(D){Pt.releaseProgram(D)}),g.isShaderMaterial&&Pt.releaseShaderCache(g))}this.renderBufferDirect=function(g,S,D,T,w,C){S===null&&(S=zt);let H=w.isMesh&&w.matrixWorld.determinant()<0,k=La(g,S,D,T,w);ft.setMaterial(T,H);let q=D.index,_t=1;if(T.wireframe===!0){if(q=et.getWireframeAttribute(D),q===void 0)return;_t=2}let It=D.drawRange,Dt=D.attributes.position,Kt=It.start*_t,ne=(It.start+It.count)*_t;C!==null&&(Kt=Math.max(Kt,C.start*_t),ne=Math.min(ne,(C.start+C.count)*_t)),q!==null?(Kt=Math.max(Kt,0),ne=Math.min(ne,q.count)):Dt!=null&&(Kt=Math.max(Kt,0),ne=Math.min(ne,Dt.count));let se=ne-Kt;if(se<0||se===1/0)return;Zt.setup(w,T,k,D,q);let Ge,te=Tt;if(q!==null&&(Ge=Z.get(q),te=Rt,te.setIndex(Ge)),w.isMesh)T.wireframe===!0?(ft.setLineWidth(T.wireframeLinewidth*j()),te.setMode(P.LINES)):te.setMode(P.TRIANGLES);else if(w.isLine){let Ut=T.linewidth;Ut===void 0&&(Ut=1),ft.setLineWidth(Ut*j()),w.isLineSegments?te.setMode(P.LINES):w.isLineLoop?te.setMode(P.LINE_LOOP):te.setMode(P.LINE_STRIP)}else w.isPoints?te.setMode(P.POINTS):w.isSprite&&te.setMode(P.TRIANGLES);if(w.isBatchedMesh)if(w._multiDrawInstances!==null)te.renderMultiDrawInstances(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount,w._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))te.renderMultiDraw(w._multiDrawStarts,w._multiDrawCounts,w._multiDrawCount);else{let Ut=w._multiDrawStarts,Te=w._multiDrawCounts,ie=w._multiDrawCount,rn=q?Z.get(q).bytesPerElement:1,wn=xt.get(T).currentProgram.getUniforms();for(let We=0;We<ie;We++)wn.setValue(P,"_gl_DrawID",We),te.render(Ut[We]/rn,Te[We])}else if(w.isInstancedMesh)te.renderInstances(Kt,se,w.count);else if(D.isInstancedBufferGeometry){let Ut=D._maxInstanceCount!==void 0?D._maxInstanceCount:1/0,Te=Math.min(D.instanceCount,Ut);te.renderInstances(Kt,se,Te)}else te.render(Kt,se)};function Jt(g,S,D){g.transparent===!0&&g.side===Re&&g.forceSinglePass===!1?(g.side=Ze,g.needsUpdate=!0,pi(g,S,D),g.side=oi,g.needsUpdate=!0,pi(g,S,D),g.side=Re):pi(g,S,D)}this.compile=function(g,S,D=null){D===null&&(D=g),p=Qt.get(D),p.init(S),R.push(p),D.traverseVisible(function(w){w.isLight&&w.layers.test(S.layers)&&(p.pushLight(w),w.castShadow&&p.pushShadow(w))}),g!==D&&g.traverseVisible(function(w){w.isLight&&w.layers.test(S.layers)&&(p.pushLight(w),w.castShadow&&p.pushShadow(w))}),p.setupLights();let T=new Set;return g.traverse(function(w){if(!(w.isMesh||w.isPoints||w.isLine||w.isSprite))return;let C=w.material;if(C)if(Array.isArray(C))for(let H=0;H<C.length;H++){let k=C[H];Jt(k,D,w),T.add(k)}else Jt(C,D,w),T.add(C)}),R.pop(),p=null,T},this.compileAsync=function(g,S,D=null){let T=this.compile(g,S,D);return new Promise(w=>{function C(){if(T.forEach(function(H){xt.get(H).currentProgram.isReady()&&T.delete(H)}),T.size===0){w(g);return}setTimeout(C,10)}ht.get("KHR_parallel_shader_compile")!==null?C():setTimeout(C,10)})};let ke=null;function He(g){ke&&ke(g)}function Ln(){mn.stop()}function bs(){mn.start()}let mn=new Vh;mn.setAnimationLoop(He),typeof self<"u"&&mn.setContext(self),this.setAnimationLoop=function(g){ke=g,X.setAnimationLoop(g),g===null?mn.stop():mn.start()},X.addEventListener("sessionstart",Ln),X.addEventListener("sessionend",bs),this.render=function(g,S){if(S!==void 0&&S.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),S.parent===null&&S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(S),S=X.getCamera()),g.isScene===!0&&g.onBeforeRender(M,g,S,I),p=Qt.get(g,R.length),p.init(S),R.push(p),mt.multiplyMatrices(S.projectionMatrix,S.matrixWorldInverse),Lt.setFromProjectionMatrix(mt),at=this.localClippingEnabled,Y=rt.init(this.clippingPlanes,at),v=At.get(g,m.length),v.init(),m.push(v),X.enabled===!0&&X.isPresenting===!0){let C=M.xr.getDepthSensingMesh();C!==null&&ki(C,S,-1/0,M.sortObjects)}ki(g,S,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort($,yt),Et=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Et&&Vt.addToRenderList(v,g),this.info.render.frame++,Y===!0&&rt.beginShadows();let D=p.state.shadowsArray;ot.render(D,g,S),Y===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();let T=v.opaque,w=v.transmissive;if(p.setupLights(),S.isArrayCamera){let C=S.cameras;if(w.length>0)for(let H=0,k=C.length;H<k;H++){let q=C[H];ws(T,w,g,q)}Et&&Vt.render(g);for(let H=0,k=C.length;H<k;H++){let q=C[H];Ss(v,g,q,q.viewport)}}else w.length>0&&ws(T,w,g,S),Et&&Vt.render(g),Ss(v,g,S);I!==null&&(A.updateMultisampleRenderTarget(I),A.updateRenderTargetMipmap(I)),g.isScene===!0&&g.onAfterRender(M,g,S),Zt.resetDefaultState(),F=-1,K=null,R.pop(),R.length>0?(p=R[R.length-1],Y===!0&&rt.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function ki(g,S,D,T){if(g.visible===!1)return;if(g.layers.test(S.layers)){if(g.isGroup)D=g.renderOrder;else if(g.isLOD)g.autoUpdate===!0&&g.update(S);else if(g.isLight)p.pushLight(g),g.castShadow&&p.pushShadow(g);else if(g.isSprite){if(!g.frustumCulled||Lt.intersectsSprite(g)){T&&Nt.setFromMatrixPosition(g.matrixWorld).applyMatrix4(mt);let H=J.update(g),k=g.material;k.visible&&v.push(g,H,k,D,Nt.z,null)}}else if((g.isMesh||g.isLine||g.isPoints)&&(!g.frustumCulled||Lt.intersectsObject(g))){let H=J.update(g),k=g.material;if(T&&(g.boundingSphere!==void 0?(g.boundingSphere===null&&g.computeBoundingSphere(),Nt.copy(g.boundingSphere.center)):(H.boundingSphere===null&&H.computeBoundingSphere(),Nt.copy(H.boundingSphere.center)),Nt.applyMatrix4(g.matrixWorld).applyMatrix4(mt)),Array.isArray(k)){let q=H.groups;for(let _t=0,It=q.length;_t<It;_t++){let Dt=q[_t],Kt=k[Dt.materialIndex];Kt&&Kt.visible&&v.push(g,H,Kt,D,Nt.z,Dt)}}else k.visible&&v.push(g,H,k,D,Nt.z,null)}}let C=g.children;for(let H=0,k=C.length;H<k;H++)ki(C[H],S,D,T)}function Ss(g,S,D,T){let w=g.opaque,C=g.transmissive,H=g.transparent;p.setupLightsView(D),Y===!0&&rt.setGlobalState(M.clippingPlanes,D),T&&ft.viewport(_.copy(T)),w.length>0&&di(w,S,D),C.length>0&&di(C,S,D),H.length>0&&di(H,S,D),ft.buffers.depth.setTest(!0),ft.buffers.depth.setMask(!0),ft.buffers.color.setMask(!0),ft.setPolygonOffset(!1)}function ws(g,S,D,T){if((D.isScene===!0?D.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[T.id]===void 0&&(p.state.transmissionRenderTarget[T.id]=new Wn(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?js:Gn,minFilter:Ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let C=p.state.transmissionRenderTarget[T.id],H=T.viewport||_;C.setSize(H.z,H.w);let k=M.getRenderTarget();M.setRenderTarget(C),M.getClearColor(z),G=M.getClearAlpha(),G<1&&M.setClearColor(16777215,.5),M.clear(),Et&&Vt.render(D);let q=M.toneMapping;M.toneMapping=ai;let _t=T.viewport;if(T.viewport!==void 0&&(T.viewport=void 0),p.setupLightsView(T),Y===!0&&rt.setGlobalState(M.clippingPlanes,T),di(g,D,T),A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C),ht.has("WEBGL_multisampled_render_to_texture")===!1){let It=!1;for(let Dt=0,Kt=S.length;Dt<Kt;Dt++){let ne=S[Dt],se=ne.object,Ge=ne.geometry,te=ne.material,Ut=ne.group;if(te.side===Re&&se.layers.test(T.layers)){let Te=te.side;te.side=Ze,te.needsUpdate=!0,Es(se,D,T,Ge,te,Ut),te.side=Te,te.needsUpdate=!0,It=!0}}It===!0&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C))}M.setRenderTarget(k),M.setClearColor(z,G),_t!==void 0&&(T.viewport=_t),M.toneMapping=q}function di(g,S,D){let T=S.isScene===!0?S.overrideMaterial:null;for(let w=0,C=g.length;w<C;w++){let H=g[w],k=H.object,q=H.geometry,_t=T===null?H.material:T,It=H.group;k.layers.test(D.layers)&&Es(k,S,D,q,_t,It)}}function Es(g,S,D,T,w,C){g.onBeforeRender(M,S,D,T,w,C),g.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,g.matrixWorld),g.normalMatrix.getNormalMatrix(g.modelViewMatrix),w.onBeforeRender(M,S,D,T,g,C),w.transparent===!0&&w.side===Re&&w.forceSinglePass===!1?(w.side=Ze,w.needsUpdate=!0,M.renderBufferDirect(D,S,T,w,g,C),w.side=oi,w.needsUpdate=!0,M.renderBufferDirect(D,S,T,w,g,C),w.side=Re):M.renderBufferDirect(D,S,T,w,g,C),g.onAfterRender(M,S,D,T,w,C)}function pi(g,S,D){S.isScene!==!0&&(S=zt);let T=xt.get(g),w=p.state.lights,C=p.state.shadowsArray,H=w.state.version,k=Pt.getParameters(g,w.state,C,S,D),q=Pt.getProgramCacheKey(k),_t=T.programs;T.environment=g.isMeshStandardMaterial?S.environment:null,T.fog=S.fog,T.envMap=(g.isMeshStandardMaterial?B:y).get(g.envMap||T.environment),T.envMapRotation=T.environment!==null&&g.envMap===null?S.environmentRotation:g.envMapRotation,_t===void 0&&(g.addEventListener("dispose",jt),_t=new Map,T.programs=_t);let It=_t.get(q);if(It!==void 0){if(T.currentProgram===It&&T.lightsStateVersion===H)return Zn(g,k),It}else k.uniforms=Pt.getUniforms(g),g.onBeforeCompile(k,M),It=Pt.acquireProgram(k,q),_t.set(q,It),T.uniforms=k.uniforms;let Dt=T.uniforms;return(!g.isShaderMaterial&&!g.isRawShaderMaterial||g.clipping===!0)&&(Dt.clippingPlanes=rt.uniform),Zn(g,k),T.needsLights=sr(g),T.lightsStateVersion=H,T.needsLights&&(Dt.ambientLightColor.value=w.state.ambient,Dt.lightProbe.value=w.state.probe,Dt.directionalLights.value=w.state.directional,Dt.directionalLightShadows.value=w.state.directionalShadow,Dt.spotLights.value=w.state.spot,Dt.spotLightShadows.value=w.state.spotShadow,Dt.rectAreaLights.value=w.state.rectArea,Dt.ltc_1.value=w.state.rectAreaLTC1,Dt.ltc_2.value=w.state.rectAreaLTC2,Dt.pointLights.value=w.state.point,Dt.pointLightShadows.value=w.state.pointShadow,Dt.hemisphereLights.value=w.state.hemi,Dt.directionalShadowMap.value=w.state.directionalShadowMap,Dt.directionalShadowMatrix.value=w.state.directionalShadowMatrix,Dt.spotShadowMap.value=w.state.spotShadowMap,Dt.spotLightMatrix.value=w.state.spotLightMatrix,Dt.spotLightMap.value=w.state.spotLightMap,Dt.pointShadowMap.value=w.state.pointShadowMap,Dt.pointShadowMatrix.value=w.state.pointShadowMatrix),T.currentProgram=It,T.uniformsList=null,It}function As(g){if(g.uniformsList===null){let S=g.currentProgram.getUniforms();g.uniformsList=ls.seqWithValue(S.seq,g.uniforms)}return g.uniformsList}function Zn(g,S){let D=xt.get(g);D.outputColorSpace=S.outputColorSpace,D.batching=S.batching,D.batchingColor=S.batchingColor,D.instancing=S.instancing,D.instancingColor=S.instancingColor,D.instancingMorph=S.instancingMorph,D.skinning=S.skinning,D.morphTargets=S.morphTargets,D.morphNormals=S.morphNormals,D.morphColors=S.morphColors,D.morphTargetsCount=S.morphTargetsCount,D.numClippingPlanes=S.numClippingPlanes,D.numIntersection=S.numClipIntersection,D.vertexAlphas=S.vertexAlphas,D.vertexTangents=S.vertexTangents,D.toneMapping=S.toneMapping}function La(g,S,D,T,w){S.isScene!==!0&&(S=zt),A.resetTextureUnits();let C=S.fog,H=T.isMeshStandardMaterial?S.environment:null,k=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:fi,q=(T.isMeshStandardMaterial?B:y).get(T.envMap||H),_t=T.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,It=!!D.attributes.tangent&&(!!T.normalMap||T.anisotropy>0),Dt=!!D.morphAttributes.position,Kt=!!D.morphAttributes.normal,ne=!!D.morphAttributes.color,se=ai;T.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(se=M.toneMapping);let Ge=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,te=Ge!==void 0?Ge.length:0,Ut=xt.get(T),Te=p.state.lights;if(Y===!0&&(at===!0||g!==K)){let Le=g===K&&T.id===F;rt.setState(T,g,Le)}let ie=!1;T.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==Te.state.version||Ut.outputColorSpace!==k||w.isBatchedMesh&&Ut.batching===!1||!w.isBatchedMesh&&Ut.batching===!0||w.isBatchedMesh&&Ut.batchingColor===!0&&w.colorTexture===null||w.isBatchedMesh&&Ut.batchingColor===!1&&w.colorTexture!==null||w.isInstancedMesh&&Ut.instancing===!1||!w.isInstancedMesh&&Ut.instancing===!0||w.isSkinnedMesh&&Ut.skinning===!1||!w.isSkinnedMesh&&Ut.skinning===!0||w.isInstancedMesh&&Ut.instancingColor===!0&&w.instanceColor===null||w.isInstancedMesh&&Ut.instancingColor===!1&&w.instanceColor!==null||w.isInstancedMesh&&Ut.instancingMorph===!0&&w.morphTexture===null||w.isInstancedMesh&&Ut.instancingMorph===!1&&w.morphTexture!==null||Ut.envMap!==q||T.fog===!0&&Ut.fog!==C||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==rt.numPlanes||Ut.numIntersection!==rt.numIntersection)||Ut.vertexAlphas!==_t||Ut.vertexTangents!==It||Ut.morphTargets!==Dt||Ut.morphNormals!==Kt||Ut.morphColors!==ne||Ut.toneMapping!==se||Ut.morphTargetsCount!==te)&&(ie=!0):(ie=!0,Ut.__version=T.version);let rn=Ut.currentProgram;ie===!0&&(rn=pi(T,S,w));let wn=!1,We=!1,mi=!1,ye=rn.getUniforms(),hn=Ut.uniforms;if(ft.useProgram(rn.program)&&(wn=!0,We=!0,mi=!0),T.id!==F&&(F=T.id,We=!0),wn||K!==g){nt.reverseDepthBuffer?(Ct.copy(g.projectionMatrix),lf(Ct),cf(Ct),ye.setValue(P,"projectionMatrix",Ct)):ye.setValue(P,"projectionMatrix",g.projectionMatrix),ye.setValue(P,"viewMatrix",g.matrixWorldInverse);let Le=ye.map.cameraPosition;Le!==void 0&&Le.setValue(P,Ot.setFromMatrixPosition(g.matrixWorld)),nt.logarithmicDepthBuffer&&ye.setValue(P,"logDepthBufFC",2/(Math.log(g.far+1)/Math.LN2)),(T.isMeshPhongMaterial||T.isMeshToonMaterial||T.isMeshLambertMaterial||T.isMeshBasicMaterial||T.isMeshStandardMaterial||T.isShaderMaterial)&&ye.setValue(P,"isOrthographic",g.isOrthographicCamera===!0),K!==g&&(K=g,We=!0,mi=!0)}if(w.isSkinnedMesh){ye.setOptional(P,w,"bindMatrix"),ye.setOptional(P,w,"bindMatrixInverse");let Le=w.skeleton;Le&&(Le.boneTexture===null&&Le.computeBoneTexture(),ye.setValue(P,"boneTexture",Le.boneTexture,A))}w.isBatchedMesh&&(ye.setOptional(P,w,"batchingTexture"),ye.setValue(P,"batchingTexture",w._matricesTexture,A),ye.setOptional(P,w,"batchingIdTexture"),ye.setValue(P,"batchingIdTexture",w._indirectTexture,A),ye.setOptional(P,w,"batchingColorTexture"),w._colorsTexture!==null&&ye.setValue(P,"batchingColorTexture",w._colorsTexture,A));let Jn=D.morphAttributes;if((Jn.position!==void 0||Jn.normal!==void 0||Jn.color!==void 0)&&Bt.update(w,D,rn),(We||Ut.receiveShadow!==w.receiveShadow)&&(Ut.receiveShadow=w.receiveShadow,ye.setValue(P,"receiveShadow",w.receiveShadow)),T.isMeshGouraudMaterial&&T.envMap!==null&&(hn.envMap.value=q,hn.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),T.isMeshStandardMaterial&&T.envMap===null&&S.environment!==null&&(hn.envMapIntensity.value=S.environmentIntensity),We&&(ye.setValue(P,"toneMappingExposure",M.toneMappingExposure),Ut.needsLights&&Da(hn,mi),C&&T.fog===!0&&pt.refreshFogUniforms(hn,C),pt.refreshMaterialUniforms(hn,T,st,V,p.state.transmissionRenderTarget[g.id]),ls.upload(P,As(Ut),hn,A)),T.isShaderMaterial&&T.uniformsNeedUpdate===!0&&(ls.upload(P,As(Ut),hn,A),T.uniformsNeedUpdate=!1),T.isSpriteMaterial&&ye.setValue(P,"center",w.center),ye.setValue(P,"modelViewMatrix",w.modelViewMatrix),ye.setValue(P,"normalMatrix",w.normalMatrix),ye.setValue(P,"modelMatrix",w.matrixWorld),T.isShaderMaterial||T.isRawShaderMaterial){let Le=T.uniformsGroups;for(let gi=0,un=Le.length;gi<un;gi++){let rr=Le[gi];O.update(rr,rn),O.bind(rr,rn)}}return rn}function Da(g,S){g.ambientLightColor.needsUpdate=S,g.lightProbe.needsUpdate=S,g.directionalLights.needsUpdate=S,g.directionalLightShadows.needsUpdate=S,g.pointLights.needsUpdate=S,g.pointLightShadows.needsUpdate=S,g.spotLights.needsUpdate=S,g.spotLightShadows.needsUpdate=S,g.rectAreaLights.needsUpdate=S,g.hemisphereLights.needsUpdate=S}function sr(g){return g.isMeshLambertMaterial||g.isMeshToonMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isShadowMaterial||g.isShaderMaterial&&g.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(g,S,D){xt.get(g.texture).__webglTexture=S,xt.get(g.depthTexture).__webglTexture=D;let T=xt.get(g);T.__hasExternalTextures=!0,T.__autoAllocateDepthBuffer=D===void 0,T.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),T.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(g,S){let D=xt.get(g);D.__webglFramebuffer=S,D.__useDefaultFramebuffer=S===void 0},this.setRenderTarget=function(g,S=0,D=0){I=g,N=S,L=D;let T=!0,w=null,C=!1,H=!1;if(g){let q=xt.get(g);if(q.__useDefaultFramebuffer!==void 0)ft.bindFramebuffer(P.FRAMEBUFFER,null),T=!1;else if(q.__webglFramebuffer===void 0)A.setupRenderTarget(g);else if(q.__hasExternalTextures)A.rebindTextures(g,xt.get(g.texture).__webglTexture,xt.get(g.depthTexture).__webglTexture);else if(g.depthBuffer){let Dt=g.depthTexture;if(q.__boundDepthTexture!==Dt){if(Dt!==null&&xt.has(Dt)&&(g.width!==Dt.image.width||g.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(g)}}let _t=g.texture;(_t.isData3DTexture||_t.isDataArrayTexture||_t.isCompressedArrayTexture)&&(H=!0);let It=xt.get(g).__webglFramebuffer;g.isWebGLCubeRenderTarget?(Array.isArray(It[S])?w=It[S][D]:w=It[S],C=!0):g.samples>0&&A.useMultisampledRTT(g)===!1?w=xt.get(g).__webglMultisampledFramebuffer:Array.isArray(It)?w=It[D]:w=It,_.copy(g.viewport),E.copy(g.scissor),W=g.scissorTest}else _.copy(bt).multiplyScalar(st).floor(),E.copy(St).multiplyScalar(st).floor(),W=$t;if(ft.bindFramebuffer(P.FRAMEBUFFER,w)&&T&&ft.drawBuffers(g,w),ft.viewport(_),ft.scissor(E),ft.setScissorTest(W),C){let q=xt.get(g.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+S,q.__webglTexture,D)}else if(H){let q=xt.get(g.texture),_t=S||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,q.__webglTexture,D||0,_t)}F=-1},this.readRenderTargetPixels=function(g,S,D,T,w,C,H){if(!(g&&g.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let k=xt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&H!==void 0&&(k=k[H]),k){ft.bindFramebuffer(P.FRAMEBUFFER,k);try{let q=g.texture,_t=q.format,It=q.type;if(!nt.textureFormatReadable(_t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!nt.textureTypeReadable(It)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}S>=0&&S<=g.width-T&&D>=0&&D<=g.height-w&&P.readPixels(S,D,T,w,kt.convert(_t),kt.convert(It),C)}finally{let q=I!==null?xt.get(I).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,q)}}},this.readRenderTargetPixelsAsync=async function(g,S,D,T,w,C,H){if(!(g&&g.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let k=xt.get(g).__webglFramebuffer;if(g.isWebGLCubeRenderTarget&&H!==void 0&&(k=k[H]),k){let q=g.texture,_t=q.format,It=q.type;if(!nt.textureFormatReadable(_t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!nt.textureTypeReadable(It))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(S>=0&&S<=g.width-T&&D>=0&&D<=g.height-w){ft.bindFramebuffer(P.FRAMEBUFFER,k);let Dt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.bufferData(P.PIXEL_PACK_BUFFER,C.byteLength,P.STREAM_READ),P.readPixels(S,D,T,w,kt.convert(_t),kt.convert(It),0);let Kt=I!==null?xt.get(I).__webglFramebuffer:null;ft.bindFramebuffer(P.FRAMEBUFFER,Kt);let ne=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await of(P,ne,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Dt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,C),P.deleteBuffer(Dt),P.deleteSync(ne),C}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(g,S=null,D=0){g.isTexture!==!0&&(Hr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),S=arguments[0]||null,g=arguments[1]);let T=Math.pow(2,-D),w=Math.floor(g.image.width*T),C=Math.floor(g.image.height*T),H=S!==null?S.x:0,k=S!==null?S.y:0;A.setTexture2D(g,0),P.copyTexSubImage2D(P.TEXTURE_2D,D,0,0,H,k,w,C),ft.unbindTexture()},this.copyTextureToTexture=function(g,S,D=null,T=null,w=0){g.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture function signature has changed."),T=arguments[0]||null,g=arguments[1],S=arguments[2],w=arguments[3]||0,D=null);let C,H,k,q,_t,It;D!==null?(C=D.max.x-D.min.x,H=D.max.y-D.min.y,k=D.min.x,q=D.min.y):(C=g.image.width,H=g.image.height,k=0,q=0),T!==null?(_t=T.x,It=T.y):(_t=0,It=0);let Dt=kt.convert(S.format),Kt=kt.convert(S.type);A.setTexture2D(S,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,S.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,S.unpackAlignment);let ne=P.getParameter(P.UNPACK_ROW_LENGTH),se=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ge=P.getParameter(P.UNPACK_SKIP_PIXELS),te=P.getParameter(P.UNPACK_SKIP_ROWS),Ut=P.getParameter(P.UNPACK_SKIP_IMAGES),Te=g.isCompressedTexture?g.mipmaps[w]:g.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Te.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Te.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,k),P.pixelStorei(P.UNPACK_SKIP_ROWS,q),g.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,w,_t,It,C,H,Dt,Kt,Te.data):g.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,w,_t,It,Te.width,Te.height,Dt,Te.data):P.texSubImage2D(P.TEXTURE_2D,w,_t,It,C,H,Dt,Kt,Te),P.pixelStorei(P.UNPACK_ROW_LENGTH,ne),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ge),P.pixelStorei(P.UNPACK_SKIP_ROWS,te),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ut),w===0&&S.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),ft.unbindTexture()},this.copyTextureToTexture3D=function(g,S,D=null,T=null,w=0){g.isTexture!==!0&&(Hr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),D=arguments[0]||null,T=arguments[1]||null,g=arguments[2],S=arguments[3],w=arguments[4]||0);let C,H,k,q,_t,It,Dt,Kt,ne,se=g.isCompressedTexture?g.mipmaps[w]:g.image;D!==null?(C=D.max.x-D.min.x,H=D.max.y-D.min.y,k=D.max.z-D.min.z,q=D.min.x,_t=D.min.y,It=D.min.z):(C=se.width,H=se.height,k=se.depth,q=0,_t=0,It=0),T!==null?(Dt=T.x,Kt=T.y,ne=T.z):(Dt=0,Kt=0,ne=0);let Ge=kt.convert(S.format),te=kt.convert(S.type),Ut;if(S.isData3DTexture)A.setTexture3D(S,0),Ut=P.TEXTURE_3D;else if(S.isDataArrayTexture||S.isCompressedArrayTexture)A.setTexture2DArray(S,0),Ut=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,S.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,S.unpackAlignment);let Te=P.getParameter(P.UNPACK_ROW_LENGTH),ie=P.getParameter(P.UNPACK_IMAGE_HEIGHT),rn=P.getParameter(P.UNPACK_SKIP_PIXELS),wn=P.getParameter(P.UNPACK_SKIP_ROWS),We=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,se.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,se.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,q),P.pixelStorei(P.UNPACK_SKIP_ROWS,_t),P.pixelStorei(P.UNPACK_SKIP_IMAGES,It),g.isDataTexture||g.isData3DTexture?P.texSubImage3D(Ut,w,Dt,Kt,ne,C,H,k,Ge,te,se.data):S.isCompressedArrayTexture?P.compressedTexSubImage3D(Ut,w,Dt,Kt,ne,C,H,k,Ge,se.data):P.texSubImage3D(Ut,w,Dt,Kt,ne,C,H,k,Ge,te,se),P.pixelStorei(P.UNPACK_ROW_LENGTH,Te),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ie),P.pixelStorei(P.UNPACK_SKIP_PIXELS,rn),P.pixelStorei(P.UNPACK_SKIP_ROWS,wn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,We),w===0&&S.generateMipmaps&&P.generateMipmap(Ut),ft.unbindTexture()},this.initRenderTarget=function(g){xt.get(g).__webglFramebuffer===void 0&&A.setupRenderTarget(g)},this.initTexture=function(g){g.isCubeTexture?A.setTextureCube(g,0):g.isData3DTexture?A.setTexture3D(g,0):g.isDataArrayTexture||g.isCompressedArrayTexture?A.setTexture2DArray(g,0):A.setTexture2D(g,0),ft.unbindTexture()},this.resetState=function(){N=0,L=0,I=null,ft.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===Kl?"display-p3":"srgb",e.unpackColorSpace=ae.workingColorSpace===wa?"display-p3":"srgb"}};var oa=class extends Ee{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Cn,this.environmentIntensity=1,this.environmentRotation=new Cn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},wl=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=al,this.updateRanges=[],this.version=0,this.uuid=Hn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Je=new U,la=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyMatrix4(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.applyNormalMatrix(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Je.fromBufferAttribute(this,e),Je.transformDirection(t),this.setXYZ(e,Je.x,Je.y,Je.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Tn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=le(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=le(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=le(e,this.array),n=le(n,this.array),s=le(s,this.array),r=le(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new ln(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},hi=class extends Xn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ji,Us=new U,ts=new U,es=new U,ns=new lt,Ns=new lt,$h=new _e,Pr=new U,Fs=new U,Ir=new U,xh=new lt,go=new lt,_h=new lt,Ii=class extends Ee{constructor(t=new hi){if(super(),this.isSprite=!0,this.type="Sprite",ji===void 0){ji=new Qe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new wl(e,5);ji.setIndex([0,1,2,0,2,3]),ji.setAttribute("position",new la(n,3,0,!1)),ji.setAttribute("uv",new la(n,2,3,!1))}this.geometry=ji,this.material=t,this.center=new lt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ts.setFromMatrixScale(this.matrixWorld),$h.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ts.multiplyScalar(-es.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;Lr(Pr.set(-.5,-.5,0),es,a,ts,s,r),Lr(Fs.set(.5,-.5,0),es,a,ts,s,r),Lr(Ir.set(.5,.5,0),es,a,ts,s,r),xh.set(0,0),go.set(1,0),_h.set(1,1);let o=t.ray.intersectTriangle(Pr,Fs,Ir,!1,Us);if(o===null&&(Lr(Fs.set(-.5,.5,0),es,a,ts,s,r),go.set(0,1),o=t.ray.intersectTriangle(Pr,Ir,Fs,!1,Us),o===null))return;let l=t.ray.origin.distanceTo(Us);l<t.near||l>t.far||e.push({distance:l,point:Us.clone(),uv:si.getInterpolation(Us,Pr,Fs,Ir,xh,go,_h,new lt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Lr(i,t,e,n,s,r){ns.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Ns.x=r*ns.x-s*ns.y,Ns.y=s*ns.x+r*ns.y):Ns.copy(ns),i.copy(t),i.x+=Ns.x,i.y+=Ns.y,i.applyMatrix4($h)}var ca=class extends tn{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ye,h=Ye,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Rn=class extends tn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},en=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new lt:new U);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new U,s=[],r=[],a=[],o=new U,l=new _e;for(let d=0;d<=t;d++){let x=d/t;s[d]=this.getTangentAt(x,new U)}r[0]=new U,a[0]=new U;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(Be(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(Be(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(d=-d);for(let x=1;x<=t;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},$s=class extends en{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new lt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},El=class extends $s{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function jl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Dr=new U,xo=new jl,_o=new jl,yo=new jl,qs=class extends en{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new U){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Dr.subVectors(s[0],s[1]).add(s[0]),c=Dr);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),v=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);v<1e-4&&(v=1),x<1e-4&&(x=v),p<1e-4&&(p=v),xo.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,v,p),_o.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,v,p),yo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,v,p)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),_o.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),yo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(xo.calc(l),_o.calc(l),yo.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new U().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function yh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function sg(i,t){let e=1-i;return e*e*t}function rg(i,t){return 2*(1-i)*i*t}function ag(i,t){return i*i*t}function Bs(i,t,e,n){return sg(i,t)+rg(i,e)+ag(i,n)}function og(i,t){let e=1-i;return e*e*e*t}function lg(i,t){let e=1-i;return 3*e*e*i*t}function cg(i,t){return 3*(1-i)*i*i*t}function hg(i,t){return i*i*i*t}function zs(i,t,e,n,s){return og(i,t)+lg(i,e)+cg(i,n)+hg(i,s)}var ha=class extends en{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Al=class extends en{constructor(t=new U,e=new U,n=new U,s=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(zs(t,s.x,r.x,a.x,o.x),zs(t,s.y,r.y,a.y,o.y),zs(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ua=class extends en{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Tl=class extends en{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},fa=class extends en{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Li=class extends en{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Bs(t,s.x,r.x,a.x),Bs(t,s.y,r.y,a.y),Bs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},da=class extends en{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(yh(o,l.x,c.x,h.x,f.x),yh(o,l.y,c.y,h.y,f.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new lt().fromArray(s))}return this}},pa=Object.freeze({__proto__:null,ArcCurve:El,CatmullRomCurve3:qs,CubicBezierCurve:ha,CubicBezierCurve3:Al,EllipseCurve:$s,LineCurve:ua,LineCurve3:Tl,QuadraticBezierCurve:fa,QuadraticBezierCurve3:Li,SplineCurve:da}),Cl=class extends en{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pa[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new pa[s.type]().fromJSON(s))}return this}},Ys=class extends Cl{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new ua(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new fa(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new ha(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new da(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new $s(t,e,n,s,r,a,o,l);if(this.curves.length>0){let f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Zs=class i extends Qe{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,f=new U,u=new lt,d=new U,x=new U,v=new U,p=0,m=0;for(let R=0;R<=t.length-1;R++)switch(R){case 0:p=t[R+1].x-t[R].x,m=t[R+1].y-t[R].y,d.x=m*1,d.y=-p,d.z=m*0,v.copy(d),d.normalize(),l.push(d.x,d.y,d.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:p=t[R+1].x-t[R].x,m=t[R+1].y-t[R].y,d.x=m*1,d.y=-p,d.z=m*0,x.copy(d),d.x+=v.x,d.y+=v.y,d.z+=v.z,d.normalize(),l.push(d.x,d.y,d.z),v.copy(x)}for(let R=0;R<=e;R++){let M=n+R*h*s,b=Math.sin(M),N=Math.cos(M);for(let L=0;L<=t.length-1;L++){f.x=t[L].x*b,f.y=t[L].y,f.z=t[L].x*N,a.push(f.x,f.y,f.z),u.x=R/e,u.y=L/(t.length-1),o.push(u.x,u.y);let I=l[3*L+0]*b,F=l[3*L+1],K=l[3*L+0]*N;c.push(I,F,K)}}for(let R=0;R<e;R++)for(let M=0;M<t.length-1;M++){let b=M+R*t.length,N=b,L=b+t.length,I=b+t.length+1,F=b+1;r.push(N,L,F),r.push(I,F,L)}this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("uv",new oe(o,2)),this.setAttribute("normal",new oe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},qn=class i extends Zs{constructor(t=1,e=1,n=4,s=8){let r=new Ys;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}},gs=class i extends Qe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new U,h=new lt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let f=0,u=3;f<=e;f++,u+=3){let d=n+f/e*s;c.x=t*Math.cos(d),c.y=t*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let f=1;f<=e;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new oe(a,3)),this.setAttribute("normal",new oe(o,3)),this.setAttribute("uv",new oe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},ce=class i extends Qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,v=[],p=n/2,m=0;R(),a===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function R(){let b=new U,N=new U,L=0,I=(e-t)/n;for(let F=0;F<=r;F++){let K=[],_=F/r,E=_*(e-t)+t;for(let W=0;W<=s;W++){let z=W/s,G=z*l+o,Q=Math.sin(G),V=Math.cos(G);N.x=E*Q,N.y=-_*n+p,N.z=E*V,f.push(N.x,N.y,N.z),b.set(Q,I,V).normalize(),u.push(b.x,b.y,b.z),d.push(z,1-_),K.push(x++)}v.push(K)}for(let F=0;F<s;F++)for(let K=0;K<r;K++){let _=v[K][F],E=v[K+1][F],W=v[K+1][F+1],z=v[K][F+1];t>0&&(h.push(_,E,z),L+=3),e>0&&(h.push(E,W,z),L+=3)}c.addGroup(m,L,0),m+=L}function M(b){let N=x,L=new lt,I=new U,F=0,K=b===!0?t:e,_=b===!0?1:-1;for(let W=1;W<=s;W++)f.push(0,p*_,0),u.push(0,_,0),d.push(.5,.5),x++;let E=x;for(let W=0;W<=s;W++){let G=W/s*l+o,Q=Math.cos(G),V=Math.sin(G);I.x=K*V,I.y=p*_,I.z=K*Q,f.push(I.x,I.y,I.z),u.push(0,_,0),L.x=Q*.5+.5,L.y=V*.5*_+.5,d.push(L.x,L.y),x++}for(let W=0;W<s;W++){let z=N+W,G=E+W;b===!0?h.push(G,G+1,z):h.push(G+1,G,z),F+=3}c.addGroup(m,F,b===!0?1:2),m+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Fe=class i extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Pn=class extends Ys{constructor(t){super(t),this.uuid=Hn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Ys().fromJSON(s))}return this}},ug={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=qh(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,f,u,d;if(n&&(r=gg(i,t,r,e)),i.length>80*e){o=c=i[0],l=h=i[1];for(let x=e;x<s;x+=e)f=i[x],u=i[x+1],f<o&&(o=f),u<l&&(l=u),f>c&&(c=f),u>h&&(h=u);d=Math.max(c-o,h-l),d=d!==0?32767/d:0}return Js(r,a,e,o,l,d,0),a}};function qh(i,t,e,n,s){let r,a;if(s===Tg(i,t,e,n)>0)for(r=t;r<e;r+=n)a=vh(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=vh(r,i[r],i[r+1],a);return a&&Aa(a,a.next)&&(Qs(a),a=a.next),a}function Di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Aa(e,e.next)||xe(e.prev,e,e.next)===0)){if(Qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Js(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Mg(i,n,s,r);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,r?dg(i,n,s,r):fg(i)){t.push(l.i/e|0),t.push(i.i/e|0),t.push(c.i/e|0),Qs(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=pg(Di(i),t,e),Js(i,t,e,n,s,r,2)):a===2&&mg(i,t,e,n,s,r):Js(Di(i),t,e,n,s,r,1);break}}}function fg(i){let t=i.prev,e=i,n=i.next;if(xe(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=s<r?s<a?s:a:r<a?r:a,f=o<l?o<c?o:c:l<c?l:c,u=s>r?s>a?s:a:r>a?r:a,d=o>l?o>c?o:c:l>c?l:c,x=n.next;for(;x!==t;){if(x.x>=h&&x.x<=u&&x.y>=f&&x.y<=d&&ss(s,o,r,l,a,c,x.x,x.y)&&xe(x.prev,x,x.next)>=0)return!1;x=x.next}return!0}function dg(i,t,e,n){let s=i.prev,r=i,a=i.next;if(xe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,f=r.y,u=a.y,d=o<l?o<c?o:c:l<c?l:c,x=h<f?h<u?h:u:f<u?f:u,v=o>l?o>c?o:c:l>c?l:c,p=h>f?h>u?h:u:f>u?f:u,m=Rl(d,x,t,e,n),R=Rl(v,p,t,e,n),M=i.prevZ,b=i.nextZ;for(;M&&M.z>=m&&b&&b.z<=R;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=p&&M!==s&&M!==a&&ss(o,h,l,f,c,u,M.x,M.y)&&xe(M.prev,M,M.next)>=0||(M=M.prevZ,b.x>=d&&b.x<=v&&b.y>=x&&b.y<=p&&b!==s&&b!==a&&ss(o,h,l,f,c,u,b.x,b.y)&&xe(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;M&&M.z>=m;){if(M.x>=d&&M.x<=v&&M.y>=x&&M.y<=p&&M!==s&&M!==a&&ss(o,h,l,f,c,u,M.x,M.y)&&xe(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;b&&b.z<=R;){if(b.x>=d&&b.x<=v&&b.y>=x&&b.y<=p&&b!==s&&b!==a&&ss(o,h,l,f,c,u,b.x,b.y)&&xe(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function pg(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!Aa(s,r)&&Yh(s,n,n.next,r)&&Ks(s,r)&&Ks(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Qs(n),Qs(n.next),n=i=r),n=n.next}while(n!==i);return Di(n)}function mg(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&wg(a,o)){let l=Zh(a,o);a=Di(a,a.next),l=Di(l,l.next),Js(a,t,e,n,s,r,0),Js(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gg(i,t,e,n){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=qh(i,o,l,n,!1),c===c.next&&(c.steiner=!0),s.push(Sg(c));for(s.sort(xg),r=0;r<s.length;r++)e=_g(s[r],e);return e}function xg(i,t){return i.x-t.x}function _g(i,t){let e=yg(i,t);if(!e)return t;let n=Zh(e,i);return Di(n,n.next),Di(e,e.next)}function yg(i,t){let e=t,n=-1/0,s,r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let u=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(u<=r&&u>n&&(n=u,s=e.x<e.next.x?e:e.next,u===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,f;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ss(a<c?r:n,a,l,c,a<c?n:r,a,e.x,e.y)&&(f=Math.abs(a-e.y)/(r-e.x),Ks(e,i)&&(f<h||f===h&&(e.x>s.x||e.x===s.x&&vg(s,e)))&&(s=e,h=f)),e=e.next;while(e!==o);return s}function vg(i,t){return xe(i.prev,i,t.prev)<0&&xe(t.next,i,i.next)<0}function Mg(i,t,e,n){let s=i;do s.z===0&&(s.z=Rl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,bg(s)}function bg(i){let t,e,n,s,r,a,o,l,c=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<c&&(o++,n=n.nextZ,!!n);t++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,c*=2}while(a>1);return i}function Rl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Sg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ss(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function wg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Eg(i,t)&&(Ks(i,t)&&Ks(t,i)&&Ag(i,t)&&(xe(i.prev,i,t.prev)||xe(i,t.prev,t))||Aa(i,t)&&xe(i.prev,i,i.next)>0&&xe(t.prev,t,t.next)>0)}function xe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Aa(i,t){return i.x===t.x&&i.y===t.y}function Yh(i,t,e,n){let s=Nr(xe(i,t,e)),r=Nr(xe(i,t,n)),a=Nr(xe(e,n,i)),o=Nr(xe(e,n,t));return!!(s!==r&&a!==o||s===0&&Ur(i,e,t)||r===0&&Ur(i,n,t)||a===0&&Ur(e,i,n)||o===0&&Ur(e,t,n))}function Ur(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Nr(i){return i>0?1:i<0?-1:0}function Eg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Yh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ks(i,t){return xe(i.prev,i,i.next)<0?xe(i,t,i.next)>=0&&xe(i,i.prev,t)>=0:xe(i,t,i.prev)<0||xe(i,i.next,t)<0}function Ag(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Zh(i,t){let e=new Pl(i.i,i.x,i.y),n=new Pl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function vh(i,t,e,n){let s=new Pl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Pl(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tg(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Vs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Mh(t),bh(n,t);let a=t.length;e.forEach(Mh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,bh(n,e[l]);let o=ug.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Mh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var ui=class i extends Qe{constructor(t=new Pn([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new oe(s,3)),this.setAttribute("uv",new oe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,f=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,x=e.bevelSize!==void 0?e.bevelSize:d-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,p=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,R=e.UVGenerator!==void 0?e.UVGenerator:Cg,M,b=!1,N,L,I,F;m&&(M=m.getSpacedPoints(h),b=!0,u=!1,N=m.computeFrenetFrames(h,!1),L=new U,I=new U,F=new U),u||(p=0,d=0,x=0,v=0);let K=o.extractPoints(c),_=K.shape,E=K.holes;if(!Vs.isClockWise(_)){_=_.reverse();for(let j=0,P=E.length;j<P;j++){let ut=E[j];Vs.isClockWise(ut)&&(E[j]=ut.reverse())}}let z=Vs.triangulateShape(_,E),G=_;for(let j=0,P=E.length;j<P;j++){let ut=E[j];_=_.concat(ut)}function Q(j,P,ut){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(P,ut)}let V=_.length,st=z.length;function $(j,P,ut){let ht,nt,ft,Ft=j.x-P.x,xt=j.y-P.y,A=ut.x-j.x,y=ut.y-j.y,B=Ft*Ft+xt*xt,Z=Ft*y-xt*A;if(Math.abs(Z)>Number.EPSILON){let et=Math.sqrt(B),J=Math.sqrt(A*A+y*y),Pt=P.x-xt/et,pt=P.y+Ft/et,At=ut.x-y/J,Qt=ut.y+A/J,rt=((At-Pt)*y-(Qt-pt)*A)/(Ft*y-xt*A);ht=Pt+Ft*rt-j.x,nt=pt+xt*rt-j.y;let ot=ht*ht+nt*nt;if(ot<=2)return new lt(ht,nt);ft=Math.sqrt(ot/2)}else{let et=!1;Ft>Number.EPSILON?A>Number.EPSILON&&(et=!0):Ft<-Number.EPSILON?A<-Number.EPSILON&&(et=!0):Math.sign(xt)===Math.sign(y)&&(et=!0),et?(ht=-xt,nt=Ft,ft=Math.sqrt(B)):(ht=Ft,nt=xt,ft=Math.sqrt(B/2))}return new lt(ht/ft,nt/ft)}let yt=[];for(let j=0,P=G.length,ut=P-1,ht=j+1;j<P;j++,ut++,ht++)ut===P&&(ut=0),ht===P&&(ht=0),yt[j]=$(G[j],G[ut],G[ht]);let bt=[],St,$t=yt.concat();for(let j=0,P=E.length;j<P;j++){let ut=E[j];St=[];for(let ht=0,nt=ut.length,ft=nt-1,Ft=ht+1;ht<nt;ht++,ft++,Ft++)ft===nt&&(ft=0),Ft===nt&&(Ft=0),St[ht]=$(ut[ht],ut[ft],ut[Ft]);bt.push(St),$t=$t.concat(St)}for(let j=0;j<p;j++){let P=j/p,ut=d*Math.cos(P*Math.PI/2),ht=x*Math.sin(P*Math.PI/2)+v;for(let nt=0,ft=G.length;nt<ft;nt++){let Ft=Q(G[nt],yt[nt],ht);mt(Ft.x,Ft.y,-ut)}for(let nt=0,ft=E.length;nt<ft;nt++){let Ft=E[nt];St=bt[nt];for(let xt=0,A=Ft.length;xt<A;xt++){let y=Q(Ft[xt],St[xt],ht);mt(y.x,y.y,-ut)}}}let Lt=x+v;for(let j=0;j<V;j++){let P=u?Q(_[j],$t[j],Lt):_[j];b?(I.copy(N.normals[0]).multiplyScalar(P.x),L.copy(N.binormals[0]).multiplyScalar(P.y),F.copy(M[0]).add(I).add(L),mt(F.x,F.y,F.z)):mt(P.x,P.y,0)}for(let j=1;j<=h;j++)for(let P=0;P<V;P++){let ut=u?Q(_[P],$t[P],Lt):_[P];b?(I.copy(N.normals[j]).multiplyScalar(ut.x),L.copy(N.binormals[j]).multiplyScalar(ut.y),F.copy(M[j]).add(I).add(L),mt(F.x,F.y,F.z)):mt(ut.x,ut.y,f/h*j)}for(let j=p-1;j>=0;j--){let P=j/p,ut=d*Math.cos(P*Math.PI/2),ht=x*Math.sin(P*Math.PI/2)+v;for(let nt=0,ft=G.length;nt<ft;nt++){let Ft=Q(G[nt],yt[nt],ht);mt(Ft.x,Ft.y,f+ut)}for(let nt=0,ft=E.length;nt<ft;nt++){let Ft=E[nt];St=bt[nt];for(let xt=0,A=Ft.length;xt<A;xt++){let y=Q(Ft[xt],St[xt],ht);b?mt(y.x,y.y+M[h-1].y,M[h-1].x+ut):mt(y.x,y.y,f+ut)}}}Y(),at();function Y(){let j=s.length/3;if(u){let P=0,ut=V*P;for(let ht=0;ht<st;ht++){let nt=z[ht];Ot(nt[2]+ut,nt[1]+ut,nt[0]+ut)}P=h+p*2,ut=V*P;for(let ht=0;ht<st;ht++){let nt=z[ht];Ot(nt[0]+ut,nt[1]+ut,nt[2]+ut)}}else{for(let P=0;P<st;P++){let ut=z[P];Ot(ut[2],ut[1],ut[0])}for(let P=0;P<st;P++){let ut=z[P];Ot(ut[0]+V*h,ut[1]+V*h,ut[2]+V*h)}}n.addGroup(j,s.length/3-j,0)}function at(){let j=s.length/3,P=0;Ct(G,P),P+=G.length;for(let ut=0,ht=E.length;ut<ht;ut++){let nt=E[ut];Ct(nt,P),P+=nt.length}n.addGroup(j,s.length/3-j,1)}function Ct(j,P){let ut=j.length;for(;--ut>=0;){let ht=ut,nt=ut-1;nt<0&&(nt=j.length-1);for(let ft=0,Ft=h+p*2;ft<Ft;ft++){let xt=V*ft,A=V*(ft+1),y=P+ht+xt,B=P+nt+xt,Z=P+nt+A,et=P+ht+A;Nt(y,B,Z,et)}}}function mt(j,P,ut){l.push(j),l.push(P),l.push(ut)}function Ot(j,P,ut){zt(j),zt(P),zt(ut);let ht=s.length/3,nt=R.generateTopUV(n,s,ht-3,ht-2,ht-1);Et(nt[0]),Et(nt[1]),Et(nt[2])}function Nt(j,P,ut,ht){zt(j),zt(P),zt(ht),zt(P),zt(ut),zt(ht);let nt=s.length/3,ft=R.generateSideWallUV(n,s,nt-6,nt-3,nt-2,nt-1);Et(ft[0]),Et(ft[1]),Et(ft[3]),Et(ft[1]),Et(ft[2]),Et(ft[3])}function zt(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function Et(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Rg(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new pa[s.type]().fromJSON(s)),new i(n,t.options)}},Cg={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new lt(r,a),new lt(o,l),new lt(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],f=t[n*3+2],u=t[s*3],d=t[s*3+1],x=t[s*3+2],v=t[r*3],p=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new lt(a,1-l),new lt(c,1-f),new lt(u,1-x),new lt(v,1-m)]:[new lt(o,1-l),new lt(h,1-f),new lt(d,1-x),new lt(p,1-m)]}};function Rg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var ee=class i extends Qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],f=new U,u=new U,d=[],x=[],v=[],p=[];for(let m=0;m<=n;m++){let R=[],M=m/n,b=0;m===0&&a===0?b=.5/e:m===n&&l===Math.PI&&(b=-.5/e);for(let N=0;N<=e;N++){let L=N/e;f.x=-t*Math.cos(s+L*r)*Math.sin(a+M*o),f.y=t*Math.cos(a+M*o),f.z=t*Math.sin(s+L*r)*Math.sin(a+M*o),x.push(f.x,f.y,f.z),u.copy(f).normalize(),v.push(u.x,u.y,u.z),p.push(L+b,1-M),R.push(c++)}h.push(R)}for(let m=0;m<n;m++)for(let R=0;R<e;R++){let M=h[m][R+1],b=h[m][R],N=h[m+1][R],L=h[m+1][R+1];(m!==0||a>0)&&d.push(M,b,L),(m!==n-1||l<Math.PI)&&d.push(b,N,L)}this.setIndex(d),this.setAttribute("position",new oe(x,3)),this.setAttribute("normal",new oe(v,3)),this.setAttribute("uv",new oe(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var he=class i extends Qe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let a=[],o=[],l=[],c=[],h=new U,f=new U,u=new U;for(let d=0;d<=n;d++)for(let x=0;x<=s;x++){let v=x/s*r,p=d/n*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),o.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),u.subVectors(f,h).normalize(),l.push(u.x,u.y,u.z),c.push(x/s),c.push(d/n)}for(let d=1;d<=n;d++)for(let x=1;x<=s;x++){let v=(s+1)*d+x-1,p=(s+1)*(d-1)+x-1,m=(s+1)*(d-1)+x,R=(s+1)*d+x;a.push(v,p,R),a.push(p,m,R)}this.setIndex(a),this.setAttribute("position",new oe(o,3)),this.setAttribute("normal",new oe(l,3)),this.setAttribute("uv",new oe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Ui=class i extends Qe{constructor(t=new Li(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new U,l=new U,c=new lt,h=new U,f=[],u=[],d=[],x=[];v(),this.setIndex(x),this.setAttribute("position",new oe(f,3)),this.setAttribute("normal",new oe(u,3)),this.setAttribute("uv",new oe(d,2));function v(){for(let M=0;M<e;M++)p(M);p(r===!1?e:0),R(),m()}function p(M){h=t.getPointAt(M/e,h);let b=a.normals[M],N=a.binormals[M];for(let L=0;L<=s;L++){let I=L/s*Math.PI*2,F=Math.sin(I),K=-Math.cos(I);l.x=K*b.x+F*N.x,l.y=K*b.y+F*N.y,l.z=K*b.z+F*N.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let M=1;M<=e;M++)for(let b=1;b<=s;b++){let N=(s+1)*(M-1)+(b-1),L=(s+1)*M+(b-1),I=(s+1)*M+b,F=(s+1)*(M-1)+b;x.push(N,L,F),x.push(L,I,F)}}function R(){for(let M=0;M<=e;M++)for(let b=0;b<=s;b++)c.x=M/e,c.y=b/s,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new pa[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var nn=class extends Xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Cn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var ma=class extends Xn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Jl,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function Fr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function Pg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var xs=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Il=class extends xs{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ac,endingEnd:Ac}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Tc:r=t,o=2*e-n;break;case Cc:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Tc:a=t,l=2*n-e;break;case Cc:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-e)/(s-e),v=x*x,p=v*x,m=-u*p+2*u*v-u*x,R=(1+u)*p+(-1.5-2*u)*v+(-.5+u)*x+1,M=(-1-d)*p+(1.5+d)*v+.5*x,b=d*p-d*v;for(let N=0;N!==o;++N)r[N]=m*a[h+N]+R*a[c+N]+M*a[l+N]+b*a[f+N];return r}},Ll=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Dl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Sn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Fr(e,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Fr(t.times,Array),values:Fr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Dl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ll(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Il(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Gr:e=this.InterpolantFactoryMethodDiscrete;break;case rl:e=this.InterpolantFactoryMethodLinear;break;case Ba:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Gr;case this.InterpolantFactoryMethodLinear:return rl;case this.InterpolantFactoryMethodSmooth:return Ba}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Pg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ba,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let v=e[f+x];if(v!==e[u+x]||v!==e[d+x]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)e[u+d]=e[f+d]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Sn.prototype.TimeBufferType=Float32Array;Sn.prototype.ValueBufferType=Float32Array;Sn.prototype.DefaultInterpolation=rl;var Ni=class extends Sn{constructor(t,e,n){super(t,e,n)}};Ni.prototype.ValueTypeName="bool";Ni.prototype.ValueBufferType=Array;Ni.prototype.DefaultInterpolation=Gr;Ni.prototype.InterpolantFactoryMethodLinear=void 0;Ni.prototype.InterpolantFactoryMethodSmooth=void 0;var Ul=class extends Sn{};Ul.prototype.ValueTypeName="color";var Nl=class extends Sn{};Nl.prototype.ValueTypeName="number";var Fl=class extends xs{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)ci.slerpFlat(r,0,a,c-o,a,c,l);return r}},ga=class extends Sn{InterpolantFactoryMethodLinear(t){return new Fl(this.times,this.values,this.getValueSize(),t)}};ga.prototype.ValueTypeName="quaternion";ga.prototype.InterpolantFactoryMethodSmooth=void 0;var Fi=class extends Sn{constructor(t,e,n){super(t,e,n)}};Fi.prototype.ValueTypeName="string";Fi.prototype.ValueBufferType=Array;Fi.prototype.DefaultInterpolation=Gr;Fi.prototype.InterpolantFactoryMethodLinear=void 0;Fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Ol=class extends Sn{};Ol.prototype.ValueTypeName="vector";var kl=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null}}},Ig=new kl,Bl=class{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Bl.DEFAULT_MATERIAL_NAME="__DEFAULT";var _s=class extends Ee{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},xa=class extends _s{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},vo=new _e,Sh=new U,wh=new U,_a=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xs,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new be(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Sh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Sh),wh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wh),e.updateMatrixWorld(),vo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(vo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(vo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},zl=class extends _a{constructor(){super(new qe(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Yr*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},ya=class extends _s{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new zl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Vl=class extends _a{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},va=class extends _s{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ee.DEFAULT_UP),this.updateMatrix(),this.target=new Ee,this.shadow=new Vl}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Ma=class extends _s{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var tc="\\[\\]\\.:\\/",Lg=new RegExp("["+tc+"]","g"),ec="[^"+tc+"]",Dg="[^"+tc.replace("\\.","")+"]",Ug=/((?:WC+[\/:])*)/.source.replace("WC",ec),Ng=/(WCOD+)?/.source.replace("WCOD",Dg),Fg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ec),Og=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ec),kg=new RegExp("^"+Ug+Ng+Fg+Og+"$"),Bg=["material","materials","bones","map"],Hl=class{constructor(t,e,n){let s=n||de.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},de=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lg,"")}static parseTrackName(t){let e=kg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Bg.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};de.Composite=Hl;de.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};de.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};de.prototype.GetterByBindingType=[de.prototype._getValue_direct,de.prototype._getValue_array,de.prototype._getValue_arrayElement,de.prototype._getValue_toArray];de.prototype.SetterByBindingTypeAndVersioning=[[de.prototype._setValue_direct,de.prototype._setValue_direct_setNeedsUpdate,de.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[de.prototype._setValue_array,de.prototype._setValue_array_setNeedsUpdate,de.prototype._setValue_array_setMatrixWorldNeedsUpdate],[de.prototype._setValue_arrayElement,de.prototype._setValue_arrayElement_setNeedsUpdate,de.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[de.prototype._setValue_fromArray,de.prototype._setValue_fromArray_setNeedsUpdate,de.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var cx=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");var tr=new U;function pn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;tr.copy(t),tr[n]=0,tr.normalize();let c=.5*a/(a+o),h=1-tr.angleTo(i)/l;return Math.sign(tr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var Yn=class extends Ve{constructor(t=1,e=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(t/2,e/2,n/2,r),super(1,1,1,s,s,s),s===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let o=new U,l=new U,c=new U(t,e,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,f=this.attributes.normal.array,u=this.attributes.uv.array,d=h.length/6,x=new U,v=.5/s;for(let p=0,m=0;p<h.length;p+=3,m+=2)switch(o.fromArray(h,p),l.copy(o),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),h[p+0]=c.x*Math.sign(o.x)+l.x*r,h[p+1]=c.y*Math.sign(o.y)+l.y*r,h[p+2]=c.z*Math.sign(o.z)+l.z*r,f[p+0]=l.x,f[p+1]=l.y,f[p+2]=l.z,Math.floor(p/d)){case 0:x.set(1,0,0),u[m+0]=pn(x,l,"z","y",r,n),u[m+1]=1-pn(x,l,"y","z",r,e);break;case 1:x.set(-1,0,0),u[m+0]=1-pn(x,l,"z","y",r,n),u[m+1]=1-pn(x,l,"y","z",r,e);break;case 2:x.set(0,1,0),u[m+0]=1-pn(x,l,"x","z",r,t),u[m+1]=pn(x,l,"z","x",r,n);break;case 3:x.set(0,-1,0),u[m+0]=1-pn(x,l,"x","z",r,t),u[m+1]=1-pn(x,l,"z","x",r,n);break;case 4:x.set(0,0,1),u[m+0]=1-pn(x,l,"x","y",r,t),u[m+1]=1-pn(x,l,"y","x",r,e);break;case 5:x.set(0,0,-1),u[m+0]=pn(x,l,"x","y",r,t),u[m+1]=1-pn(x,l,"y","x",r,e);break}}};var nc=[{id:"tron",name:"B\xE9 \u0110\u1EE5t",emo:"\u{1F642}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffc93d",bottom:"#2f8bff",shoes:"#ff4d6d",hairStyle:"ahoge",sleeve:.3,pants:.35,face:["blush"]},{id:"hocsinh",name:"H\u1ECDc Sinh",emo:"\u{1F392}",skin:"#fbcca6",hair:"#1d1648",top:"#ffffff",bottom:"#2a3a7a",shoes:"#1d1648",hairStyle:"spiky",sleeve:.3,pants:.35,extra:{scarf:"#ff3d4f",pack:"#38b2ff"}},{id:"cogiao",name:"C\xF4 Gi\xE1o",emo:"\u{1F469}\u200D\u{1F3EB}",skin:"#fcd2b0",hair:"#2a1a14",top:"#fbfbff",bottom:"#fbfbff",shoes:"#c0392b",hairStyle:"long",sleeve:1,pants:1,face:["glasses"],extra:{aodai:"#fbfbff"}},{id:"nonla",name:"C\xF4 Ba N\xF3n L\xE1",emo:"\u{1F38B}",skin:"#f7cfa6",hair:"#1a1a1a",top:"#9b5cf6",bottom:"#ffffff",shoes:"#c0392b",hairStyle:"long",hat:"nonla",sleeve:1,pants:1,extra:{aodai:"#9b5cf6"}},{id:"banhmi",name:"C\xF4 B\xE1nh M\xEC",emo:"\u{1F956}",skin:"#f6c9a0",hair:"#3a2418",top:"#ff8fb8",bottom:"#4b4478",shoes:"#ffc93d",hairStyle:"bun",hat:"scarfHead",hatColor:"#ff6f3c",sleeve:.5,pants:1,extra:{apron:"#ff9a3c"}},{id:"xeom",name:"Ch\xFA Xe \xD4m",emo:"\u{1F6F5}",skin:"#e8b48a",hair:"#1a1a1a",top:"#3aa357",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"helmet",hatColor:"#2fbf71",face:["mustache"],sleeve:1,pants:1},{id:"ngoai",name:"B\xE0 Ngo\u1EA1i",emo:"\u{1F475}",skin:"#f3c9a6",hair:"#eeeef5",top:"#a86b3c",bottom:"#2b2550",shoes:"#6b4426",hairStyle:"bun",face:["glasses","blush"],sleeve:1,pants:1,extra:{belt:"#2b2550"}},{id:"baove",name:"B\xE1c B\u1EA3o V\u1EC7",emo:"\u{1F46E}",skin:"#e8b48a",hair:"#2a1a14",top:"#c9b27a",bottom:"#6b5a3a",shoes:"#1d1648",hairStyle:"short",hat:"cap",hatColor:"#2b3a6b",face:["mustache"],sleeve:.5,pants:1,extra:{whistle:!0,badge:!0,belt:"#3a2a1c"}},{id:"shipper",name:"Anh Shipper",emo:"\u{1F4E6}",skin:"#ffd2a6",hair:"#1a1a1a",top:"#ff8a1f",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"fullhelmet",hatColor:"#ff8a1f",sleeve:1,pants:1,extra:{box:"#ff8a1f"}},{id:"chef",name:"Vua \u0110\u1EA7u B\u1EBFp",emo:"\u{1F468}\u200D\u{1F373}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffffff",bottom:"#2b2550",shoes:"#1d1648",hairStyle:"short",hat:"chef",face:["curly"],sleeve:1,pants:1,extra:{scarf:"#ff3d4f",apron:"#ffffff"}},{id:"chotdon",name:"Ch\u1ECB Ch\u1ED1t \u0110\u01A1n",emo:"\u{1F4F1}",skin:"#fcd2b0",hair:"#a8452a",top:"#ff3d8b",bottom:"#1d1648",shoes:"#ffc93d",hairStyle:"wavy",face:["blush"],sleeve:.3,pants:.4,extra:{dress:"#ff3d8b",chain:!0}},{id:"scientist",name:"Gi\xE1o S\u01B0 Kh\xF9ng",emo:"\u{1F9EA}",skin:"#fbcca6",hair:"#eeeef5",top:"#4dabf7",bottom:"#5b6478",shoes:"#3a2a1c",hairStyle:"messy",face:["glasses"],sleeve:1,pants:1,extra:{coat:"#ffffff",tie:"#ff3d4f"}},{id:"doctor",name:"B\xE1c S\u0129",emo:"\u{1FA7A}",skin:"#f6c9a0",hair:"#2a1a14",top:"#3ccf9e",bottom:"#3ccf9e",shoes:"#ffffff",hairStyle:"slick",hat:"mirror",sleeve:1,pants:1,extra:{coat:"#ffffff"}},{id:"boss",name:"T\u1ED5ng T\xE0i",emo:"\u{1F60E}",skin:"#f6c9a0",hair:"#1a1a1a",top:"#22223a",bottom:"#22223a",shoes:"#0d0d18",hairStyle:"slick",face:["shades"],sleeve:1,pants:1,extra:{tie:"#ff3d4f"}},{id:"idol",name:"Idol Nh\xED",emo:"\u{1F3A4}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff6fb5",bottom:"#ffffff",shoes:"#ff6fb5",hairStyle:"pigtails",face:["blush"],sleeve:.3,pants:.3,extra:{dress:"#ffffff",star:"#ffc93d"}},{id:"rocker",name:"Rocker",emo:"\u{1F3B8}",skin:"#fbcca6",hair:"#ff3d8b",top:"#1d1648",bottom:"#2b2550",shoes:"#ff3d4f",hairStyle:"mohawk",face:["shades"],sleeve:.35,pants:1,extra:{chain:!0}},{id:"rapper",name:"Rapper",emo:"\u{1F9E2}",skin:"#c98b5e",hair:"#1a1a1a",top:"#8b5cf6",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"short",hat:"capBack",hatColor:"#ffc93d",sleeve:1,pants:1,extra:{chain:!0}},{id:"gamer",name:"Game Th\u1EE7",emo:"\u{1F3AE}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#2fbf71",bottom:"#2b2550",shoes:"#ffffff",hairStyle:"messy",hat:"phones",hatColor:"#1d1648",face:["glasses"],sleeve:1,pants:1},{id:"football",name:"C\u1EA7u Th\u1EE7",emo:"\u26BD",skin:"#e8b48a",hair:"#1a1a1a",top:"#ff3d4f",bottom:"#ffffff",shoes:"#ffc93d",hairStyle:"spiky",hat:"band",hatColor:"#ffffff",sleeve:.3,pants:.3,legs:"#ff3d4f"},{id:"farmer",name:"B\xE1c N\xF4ng D\xE2n",emo:"\u{1F33E}",skin:"#d99b6c",hair:"#1a1a1a",top:"#7a5230",bottom:"#5b4a3a",shoes:"#3a2a1c",hairStyle:"short",hat:"nonla",sleeve:1,pants:.7,extra:{scarf:"#1d1648"}},{id:"ongdo",name:"\xD4ng \u0110\u1ED3",emo:"\u{1F4DC}",skin:"#f3c9a6",hair:"#eeeef5",top:"#2f6bff",bottom:"#ffffff",shoes:"#1d1648",hairStyle:"bald",hat:"turban",hatColor:"#1d1648",face:["beard","glasses"],sleeve:1,pants:1,extra:{aodai:"#2f6bff"}},{id:"fire",name:"L\xEDnh C\u1EE9u Ho\u1EA3",emo:"\u{1F9D1}\u200D\u{1F692}",skin:"#ffd2a6",hair:"#6b4426",top:"#ffb63d",bottom:"#ffb63d",shoes:"#1d1648",hairStyle:"short",hat:"fire",hatColor:"#ff3d4f",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#ffe14d"}},{id:"astro",name:"Phi H\xE0nh Gia",emo:"\u{1F680}",skin:"#fbcca6",hair:"#3a2a1c",top:"#f2f4ff",bottom:"#f2f4ff",shoes:"#8b93b8",hairStyle:"short",hat:"bubble",sleeve:1,pants:1,gloves:"#ffffff",extra:{pack:"#dfe3f5",badge:!0}},{id:"hero",name:"Si\xEAu Nh\xE2n \u0110\u1EE5t",emo:"\u{1F9B8}",skin:"#ffd2a6",hair:"#1d1648",top:"#2f6bff",bottom:"#ff3d4f",shoes:"#ff3d4f",hairStyle:"ahoge",hat:"band",hatColor:"#ff3d4f",sleeve:1,pants:.2,legs:"#2f6bff",gloves:"#ffffff",extra:{cape:"#ff3d4f",star:"#ffc93d",belt:"#ffc93d"}},{id:"ninja",name:"Ninja H\u1EE5t",emo:"\u{1F977}",skin:"#ffd2a6",hair:"#14102e",top:"#2b2550",bottom:"#2b2550",shoes:"#14102e",hairStyle:"bald",hat:"ninja",hatColor:"#2b2550",sleeve:1,pants:1,extra:{belt:"#ff3d4f"}},{id:"pirate",name:"C\u01B0\u1EDBp Bi\u1EC3n",emo:"\u{1F3F4}\u200D\u2620\uFE0F",skin:"#e8b48a",hair:"#2a1a14",top:"#ffffff",bottom:"#2b2550",shoes:"#3a2a1c",hairStyle:"short",hat:"tricorn",hatColor:"#1d1648",face:["patch","beard"],beard:"#2a1a14",sleeve:1,pants:.75,extra:{belt:"#ff3d4f",vest:"#c0392b"}},{id:"king",name:"Vua H\u1EC1",emo:"\u{1F451}",skin:"#ffd2a6",hair:"#a86b3c",top:"#8b5cf6",bottom:"#ffc93d",shoes:"#ff3d4f",hairStyle:"short",hat:"crown",face:["curly"],sleeve:1,pants:1,extra:{cape:"#e8344a",belt:"#ffc93d"}},{id:"princess",name:"C\xF4ng Ch\xFAa",emo:"\u{1F478}",skin:"#fcd2b0",hair:"#ffcf4d",top:"#ff8fc8",bottom:"#ff8fc8",shoes:"#ffffff",hairStyle:"long",hat:"tiara",face:["blush"],sleeve:.3,pants:1,extra:{dress:"#ff8fc8"}},{id:"vampire",name:"B\xE1 T\u01B0\u1EDBc Ma",emo:"\u{1F9DB}",skin:"#e9e4f5",hair:"#1a1a1a",top:"#ffffff",bottom:"#1d1648",shoes:"#1d1648",hairStyle:"slick",face:["fangs"],sleeve:1,pants:1,extra:{cape:"#1d1648",collar:"#e8344a",vest:"#e8344a"}},{id:"santa",name:"\xD4ng Gi\xE0 Noel",emo:"\u{1F385}",skin:"#ffd2a6",hair:"#ffffff",top:"#e8344a",bottom:"#e8344a",shoes:"#1d1648",hairStyle:"short",hat:"santa",face:["beard","blush"],beard:"#ffffff",sleeve:1,pants:1,gloves:"#1d1648",extra:{belt:"#1d1648",belly:"#e8344a"}},{id:"bear",name:"G\u1EA5u B\xF4ng",emo:"\u{1F9F8}",skin:"#ffd2a6",hair:"#c98b52",top:"#c98b52",bottom:"#c98b52",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"bear",hatColor:"#c98b52",sleeve:1,pants:1,gloves:"#c98b52",extra:{belly:"#f2d2a9"}},{id:"cat",name:"M\xE8o M\u1EADp",emo:"\u{1F431}",skin:"#fcd2b0",hair:"#ff9a3c",top:"#ff9a3c",bottom:"#ff9a3c",shoes:"#ffffff",hairStyle:"bald",hat:"hood",hood:"cat",hatColor:"#ff9a3c",sleeve:1,pants:1,gloves:"#ffffff",extra:{belly:"#fff1e0"}},{id:"dino",name:"Kh\u1EE7ng Long",emo:"\u{1F996}",skin:"#ffd2a6",hair:"#2fbf71",top:"#2fbf71",bottom:"#2fbf71",shoes:"#1f8f52",hairStyle:"bald",hat:"hood",hood:"dino",hatColor:"#2fbf71",sleeve:1,pants:1,gloves:"#2fbf71",extra:{belly:"#d9f99d"}},{id:"frog",name:"\u1EBEch \u1ED8p",emo:"\u{1F438}",skin:"#fcd2b0",hair:"#7bd148",top:"#7bd148",bottom:"#7bd148",shoes:"#ffc93d",hairStyle:"bald",hat:"hood",hood:"frog",hatColor:"#7bd148",sleeve:1,pants:1,gloves:"#7bd148",extra:{belly:"#e9ffd0"}},{id:"dog",name:"C\u1EADu V\xE0ng",emo:"\u{1F436}",skin:"#fcd2b0",hair:"#e8b04a",top:"#e8b04a",bottom:"#e8b04a",shoes:"#8a5a2e",hairStyle:"bald",hat:"hood",hood:"dog",hatColor:"#e8b04a",sleeve:1,pants:1,gloves:"#e8b04a",extra:{belly:"#fff1d6",scarf:"#2f8bff"}},{id:"bride",name:"C\xF4 D\xE2u",emo:"\u{1F470}",skin:"#fcd2b0",hair:"#4b2e1a",top:"#ffffff",bottom:"#ffffff",shoes:"#ffffff",hairStyle:"bun",hat:"veil",sleeve:.3,pants:1,face:["blush"],extra:{dress:"#ffffff"}},{id:"beanie",name:"Anh Ch\xE0ng L\u1EA1nh",emo:"\u{1F9E3}",skin:"#ffd2a6",hair:"#6b4426",top:"#38b2ff",bottom:"#2b2550",shoes:"#ff4d6d",hairStyle:"short",hat:"beanie",hatColor:"#ff4d6d",sleeve:1,pants:1,face:["freckles"],extra:{scarf:"#ffc93d"}}],Ta=Object.fromEntries(nc.map(i=>[i.id,i]));var ic=Object.fromEntries(nc.map(i=>[i.id,{name:i.name,emo:i.emo,skin:i.skin,shirt:i.top,pants:i.bottom,shoes:i.shoes,hair:i.hair}])),mx=Object.keys(ic),er={down:[10,0],up:[170,0],side:[90,0],diag:[135,0],hip:[40,-105],flex:[90,90],cross:[25,-125],head:[150,-150],mouth:[15,-150],point:[65,-10],wave:[150,25]},nr={down:[4,0],kick:[70,-10],knee:[28,-55],step:[22,0],spread:[35,0]},ir={stand:{t:"",legs:null},sit:{t:"translate(0px,26px)",legs:[[80,-80],[80,-80]],stool:!0},squat:{t:"translate(0px,40px)",legs:[[110,-150],[110,-150]]},kneel:{t:"translate(0px,34px)",legs:[[0,170],[0,170]]},lie:{t:"translate(72px,58px) rotate(-90deg)"},leanL:{t:"",torso:"rotate(18deg)"},leanR:{t:"",torso:"rotate(-18deg)"},handstand:{t:"translate(0px,-120px) rotate(180deg)"},crawl:{t:"translate(86px,6px) rotate(-90deg)",absArms:[[90,0],[90,0]],absLegs:[[90,0],[90,0]],head:90,tail:100},bow:{t:"",torso:"translateY(16px) scaleY(.84)",headDown:!0},crossleg:{t:"translate(0px,44px)",legs:[[88,-165],[88,-165]]}},sc={center:0,tiltL:18,tiltR:-18,up:0,down:0},Qh=[["scissors","\u2702\uFE0F","K\xE9o"],["comb","\u{1FAAE}","L\u01B0\u1EE3c"],["mic","\u{1F3A4}","Micro"],["phone","\u{1F4F1}","\u0110i\u1EC7n tho\u1EA1i"],["ball","\u26BD","Qu\u1EA3 b\xF3ng"],["racket","\u{1F3F8}","V\u1EE3t"],["rod","\u{1F3A3}","C\u1EA7n c\xE2u"],["pan","\u{1F373}","Ch\u1EA3o"],["broom","\u{1F9F9}","Ch\u1ED5i"],["sword","\u{1F5E1}\uFE0F","Ki\u1EBFm"],["umbrella","\u2602\uFE0F","\xD4"],["book","\u{1F4D6}","S\xE1ch"],["guitar","\u{1F3B8}","\u0110\xE0n"],["violin","\u{1F3BB}","Violin"],["hammer","\u{1F528}","B\xFAa"],["chopsticks","\u{1F962}","\u0110\u0169a"],["bowl","\u{1F35C}","T\xF4"],["wand","\u{1FA84}","\u0110\u0169a ph\xE9p"],["magnifier","\u{1F50D}","K\xEDnh l\xFAp"],["camera","\u{1F4F7}","M\xE1y \u1EA3nh"],["flower","\u{1F339}","Hoa"],["gift","\u{1F381}","Qu\xE0"],["cup","\u2615","C\u1ED1c"],["toothbrush","\u{1FAA5}","B\xE0n ch\u1EA3i"],["money","\u{1F4B5}","Ti\u1EC1n"],["bone","\u{1F9B4}","Kh\xFAc x\u01B0\u01A1ng"],["carrot","\u{1F955}","C\xE0 r\u1ED1t"],["banana","\u{1F34C}","Chu\u1ED1i"],["stethoscope","\u{1FA7A}","\u1ED0ng nghe"],["ruler","\u{1F4CF}","Th\u01B0\u1EDBc"],["balloon","\u{1F388}","B\xF3ng bay"],["extinguisher","\u{1F9EF}","B\xECnh ch\u1EEFa ch\xE1y"],["bottle","\u{1F37C}","B\xECnh s\u1EEFa"],["gamepad","\u{1F3AE}","Tay c\u1EA7m game"],["laptop","\u{1F4BB}","Laptop"],["basket","\u{1F9FA}","Gi\u1ECF"],["ring","\u{1F48D}","Nh\u1EABn"],["cake","\u{1F382}","B\xE1nh kem"],["torch","\u{1F526}","\u0110\xE8n pin"],["towel","\u{1F9FB}","Kh\u0103n gi\u1EA5y"]],Jh=Qh.map(([i,t,e])=>[i,`${t} ${e}`]),Ra=Object.fromEntries(Qh.map(([i,t])=>[i,t])),zg=[{group:"To\xE0n th\xE2n",key:"body",opts:[["stand","\u0110\u1EE9ng"],["sit","Ng\u1ED3i gh\u1EBF"],["squat","Ng\u1ED3i x\u1ED5m"],["kneel","Qu\u1EF3"],["lie","N\u1EB1m"],["leanL","Nghi\xEAng tr\xE1i"],["leanR","Nghi\xEAng ph\u1EA3i"],["handstand","Tr\u1ED3ng c\xE2y chu\u1ED1i"],["crawl","B\xF2 4 ch\xE2n"],["bow","C\xFAi ch\xE0o"],["crossleg","Ng\u1ED3i x\u1EBFp b\u1EB1ng"]]},{group:"\u0110\u1EA7u",key:"head",opts:[["center","Th\u1EB3ng"],["tiltL","Nghi\xEAng tr\xE1i"],["tiltR","Nghi\xEAng ph\u1EA3i"],["up","Ng\u01B0\u1EDBc l\xEAn"],["down","C\xFAi xu\u1ED1ng"]]},{group:"M\u1EB7t",key:"face",opts:[["neutral","\u{1F610}"],["happy","\u{1F604}"],["sad","\u{1F622}"],["angry","\u{1F620}"],["surprised","\u{1F62E}"],["scared","\u{1F631}"],["sleepy","\u{1F634}"],["cheeky","\u{1F61C}"],["love","\u{1F60D}"]]},{group:"Tay tr\xE1i",key:"armL",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Tay ph\u1EA3i",key:"armR",opts:[["down","H\u1EA1"],["up","Gi\u01A1 cao"],["side","Dang ngang"],["diag","Ch\xE9o l\xEAn"],["hip","Ch\u1ED1ng h\xF4ng"],["flex","Khoe c\u01A1"],["cross","\xD4m ng\u1EF1c"],["head","\xD4m \u0111\u1EA7u"],["mouth","\u0110\u01B0a l\xEAn mi\u1EC7ng"],["point","Ch\u1EC9"],["wave","V\u1EABy"]]},{group:"Ch\xE2n tr\xE1i",key:"legL",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"Ch\xE2n ph\u1EA3i",key:"legR",opts:[["down","Th\u1EB3ng"],["step","B\u01B0\u1EDBc"],["spread","D\u1EA1ng"],["knee","Co g\u1ED1i"],["kick","\u0110\xE1"]]},{group:"\u0110\u1EA1o c\u1EE5 tay tr\xE1i",key:"propL",toggle:!0,opts:Jh},{group:"\u0110\u1EA1o c\u1EE5 tay ph\u1EA3i",key:"propR",toggle:!0,opts:Jh},{group:"Ho\xE1 trang",key:"ears",toggle:!0,opts:[["dog","\u{1F436} Tai ch\xF3"],["cat","\u{1F431} Tai m\xE8o"],["bunny","\u{1F430} Tai th\u1ECF"],["mouse","\u{1F42D} Tai chu\u1ED9t"],["horns","\u{1F42E} S\u1EEBng"],["antenna","\u{1F41D} R\xE2u c\xF4n tr\xF9ng"]]},{group:"\u0110u\xF4i",key:"tail",toggle:!0,opts:[["dog","\u{1F415} \u0110u\xF4i ch\xF3"],["cat","\u{1F408} \u0110u\xF4i m\xE8o"],["pig","\u{1F437} \u0110u\xF4i heo"],["dino","\u{1F996} \u0110u\xF4i kh\u1EE7ng long"]]},{group:"Chuy\u1EC3n \u0111\u1ED9ng (b\u1EADt/t\u1EAFt)",key:"loop",toggle:!0,opts:[["walk","\u0110i b\u1ED9"],["run","Ch\u1EA1y"],["dance","Nh\u1EA3y m\xFAa"],["butt","L\u1EAFc m\xF4ng"],["flap","V\u1ED7 c\xE1nh"],["swim","B\u01A1i"],["shiver","Run r\u1EA9y"],["clap","V\u1ED7 tay"],["punch","\u0110\u1EA5m"],["row","Ch\xE8o"],["nod","G\u1EADt g\xF9"],["shake","L\u1EAFc \u0111\u1EA7u"]]},{group:"Hi\u1EC7u \u1EE9ng",key:"fx",oneshot:!0,opts:[["jump","B\u1EADt nh\u1EA3y"],["spin","Xoay v\xF2ng"],["fall","T\xE9 ng\xE3"],["bounce","Nh\xFAn nh\u1EA3y"]]},{group:"Xoay ng\u01B0\u1EDDi",key:"turn",opts:[["front","\u2B06\uFE0F Nh\xECn kh\xE1n gi\u1EA3"],["l45","\u2196\uFE0F Xoay ch\xE9o tr\xE1i"],["r45","\u2197\uFE0F Xoay ch\xE9o ph\u1EA3i"],["left","\u2B05\uFE0F Quay tr\xE1i"],["right","\u27A1\uFE0F Quay ph\u1EA3i"],["back","\u2B07\uFE0F Quay l\u01B0ng"]]}],Pa=Object.fromEntries(zg.find(i=>i.key==="face").opts),In={hip:[150,218],neck:[150,146],shL:[124,160],shR:[176,160],elL:[124,192],elR:[176,192],hipL:[138,222],hipR:[162,222],knL:[138,254],knR:[162,254]},sn=i=>`${i[0]}px ${i[1]}px`;function Vg(i,t,e=!1){let n=t==="up"?-4:t==="down"?4:0,s=99+n,r=(u,d,x,v=3.6)=>`<ellipse cx="${u}" cy="${s}" rx="9" ry="10.5" fill="#fff" class="ol"/><circle cx="${u+d}" cy="${s+x}" r="${v}" class="dk"/><circle cx="${u+d+1.2}" cy="${s+x-1.4}" r="1.1" fill="#fff"/>`,a;switch(i){case"happy":a=`<path d="M128 ${s+2} q9 -11 18 0 M154 ${s+2} q9 -11 18 0" class="ln"/>`;break;case"sleepy":a=`<path d="M128 ${s} q9 6 18 0 M154 ${s} q9 6 18 0" class="ln"/>`;break;case"love":a=`<path d="M137 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z M163 ${s+8} l-9 -9 a5 5 0 0 1 9 -6 a5 5 0 0 1 9 6 z" fill="#ff3d6e" class="ol" style="stroke-width:2"/>`;break;case"cheeky":a=`<path d="M128 ${s} q9 -6 18 0" class="ln"/>${r(163,-2,1)}`;break;case"surprised":a=r(137,0,0,2.4)+r(163,0,0,2.4);break;case"scared":a=r(137,2,2,2.6)+r(163,-2,2,2.6)+`<path d="M180 ${s-8} q5 8 0 12 q-5 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`;break;case"sad":a=r(137,1,3)+r(163,-1,3);break;case"angry":a=r(137,2,1)+r(163,-2,1);break;default:a=r(137,3,2)+r(163,-3,-2)}let o={angry:`<path d="M127 ${s-15} L146 ${s-9} M173 ${s-15} L154 ${s-9}" class="ln" style="stroke-width:4.5"/>`,sad:`<path d="M128 ${s-10} L145 ${s-15} M172 ${s-10} L155 ${s-15}" class="ln"/>`,scared:`<path d="M127 ${s-14} q5 -4 9 0 q5 4 9 0 M155 ${s-14} q5 -4 9 0 q5 4 9 0" class="ln"/>`,surprised:`<path d="M128 ${s-17} q9 -6 18 0 M154 ${s-17} q9 -6 18 0" class="ln"/>`}[i]||"",l=118+n,c={happy:`<path d="M133 ${l-2} q17 22 34 0 z" fill="#c2273d" class="ol"/><path d="M146 ${l-1} h8 v5 h-8z" fill="#fff"/><path d="M143 ${l+8} q7 -5 14 0 q-7 6 -14 0z" fill="#ff7b93"/>`,sad:`<path d="M139 ${l+5} q11 -10 22 0" class="ln"/><path d="M134 ${s+8} q-3 8 0 12 q3 -4 0 -12z" fill="#7cc8ff" class="ol" style="stroke-width:1.5"/>`,angry:`<rect x="138" y="${l-3}" width="24" height="9" rx="3" fill="#fff" class="ol"/><path d="M144 ${l-3} v9 M150 ${l-3} v9 M156 ${l-3} v9" stroke="#1d1648" stroke-width="1.6"/>`,surprised:`<ellipse cx="150" cy="${l+2}" rx="7" ry="9" fill="#c2273d" class="ol"/>`,scared:`<path d="M136 ${l+2} l4 -4 l4 4 l4 -4 l4 4 l4 -4 l4 4 l4 -4" class="ln"/>`,sleepy:`<ellipse cx="150" cy="${l+1}" rx="4" ry="3.2" class="dk"/><path d="M155 ${l+2} q2 8 -1 11" stroke="#7cc8ff" stroke-width="3" fill="none" stroke-linecap="round"/><text x="178" y="${78+n}" class="zz">z</text><text x="188" y="${64+n}" class="zz">Z</text>`,cheeky:`<path d="M138 ${l-1} q12 9 24 0" class="ln"/><path d="M147 ${l+2} q5 13 10 0" fill="#ff6f8a" class="ol"/>`,love:`<path d="M138 ${l-2} q12 12 24 0" class="ln"/>`,neutral:`<path d="M138 ${l-1} q6 6 12 1 q6 5 12 -2" class="ln"/><rect x="146" y="${l}" width="7" height="6" rx="1.5" fill="#fff" class="ol" style="stroke-width:1.6"/>`}[i]||"",h=`<ellipse cx="150" cy="${110+n}" rx="4.5" ry="3.6" fill="#ff9f8a" class="ol" style="stroke-width:1.8"/>`;return`${`<circle cx="125" cy="${113+n}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(i)?.75:.4}"/><circle cx="175" cy="${113+n}" r="5.5" fill="#ff8fa3" opacity="${["happy","love","cheeky"].includes(i)?.75:.4}"/>`}${e?"":`<g class="pp-eyes">${a}</g>${o}`}${h}${c}`}function Hg(i,t){switch(i){case"tron":return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${t.hair}" class="ol"/><path class="pp-ahoge" d="M150 64 q-4 -16 8 -20 q-8 8 -2 20z" fill="${t.hair}" stroke="#1d1648" stroke-width="2.5"/>`};case"ninja":return{hairFront:`<path d="M116 96 q2 -36 34 -36 q32 0 34 36 z" fill="${t.hair}" class="ol"/><rect x="116" y="88" width="68" height="10" rx="3" fill="#ff3d4f" class="ol"/><path d="M184 92 q16 -4 22 6 M184 94 q14 6 18 16" stroke="#ff3d4f" stroke-width="5" fill="none" stroke-linecap="round"/>`,mask:`<path d="M117 108 q33 8 66 0 q0 28 -33 30 q-33 -2 -33 -30z" fill="${t.hair}" class="ol"/>`};case"scientist":return{hairBack:`<circle cx="118" cy="88" r="14" fill="${t.hair}" class="ol"/><circle cx="182" cy="88" r="14" fill="${t.hair}" class="ol"/><circle cx="130" cy="72" r="13" fill="${t.hair}" class="ol"/><circle cx="170" cy="72" r="13" fill="${t.hair}" class="ol"/><circle cx="150" cy="66" r="13" fill="${t.hair}" class="ol"/>`,hairFront:'<rect x="124" y="80" width="52" height="12" rx="6" fill="#4dabf7" class="ol"/><circle cx="138" cy="86" r="5" fill="#bfe6ff"/><circle cx="162" cy="86" r="5" fill="#bfe6ff"/>',torso:'<path d="M150 144 L140 196 M150 144 L160 196" stroke="#cfd5ea" stroke-width="3"/><rect x="156" y="166" width="12" height="9" rx="2" fill="#4dabf7" class="ol"/>'};case"boss":return{hairFront:`<path d="M118 96 q0 -32 34 -32 q30 0 30 26 q-20 -8 -46 -2 q-10 2 -18 8z" fill="${t.hair}" class="ol"/><rect x="124" y="96" width="22" height="12" rx="4" class="dk"/><rect x="154" y="96" width="22" height="12" rx="4" class="dk"/><path d="M146 101 h8" class="ln"/>`,torso:'<path d="M140 144 L150 160 L160 144 Z" fill="#fff" class="ol"/><path d="M150 152 l-5 8 l5 26 l5 -26 z" fill="#ff3d4f" class="ol"/>',noEyes:!0};case"idol":return{hairBack:`<path d="M112 84 q-22 18 -10 52 q6 -20 14 -28z M188 84 q22 18 10 52 q-6 -20 -14 -28z" fill="${t.hair}" class="ol"/>`,hairFront:`<path d="M116 96 q2 -34 34 -34 q32 0 34 34 q-12 -10 -20 -10 l-6 10 l-8 -12 q-16 4 -34 12z" fill="${t.hair}" class="ol"/><path d="M112 98 q-6 20 14 26" stroke="#1d1648" stroke-width="3" fill="none"/><circle cx="127" cy="124" r="4" class="dk"/>`,torso:'<path d="M150 158 l4 8 l9 1 l-7 6 l2 9 l-8 -5 l-8 5 l2 -9 l-7 -6 l9 -1z" fill="#fff" class="ol"/>'};case"hero":return{back:'<path d="M128 148 Q110 230 104 262 L196 262 Q190 230 172 148 Z" fill="#ff3d4f" class="ol"/>',hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-14 -10 -32 -10 q-18 0 -32 10z" fill="${t.hair}" class="ol"/><path d="M120 96 q30 -8 60 0 l0 12 q-30 -6 -60 0z" fill="#ff3d4f" class="ol"/>`,torso:'<path d="M150 158 l5 10 l11 1 l-8 7 l3 11 l-11 -6 l-11 6 l3 -11 l-8 -7 l11 -1z" fill="#ffc93d" class="ol"/>'};case"astro":return{hairFront:`<path d="M120 94 q4 -26 30 -26 q26 0 30 26 q-14 -8 -30 -8 q-16 0 -30 8z" fill="${t.hair}" class="ol"/>`,helmet:'<circle cx="150" cy="106" r="46" fill="#bfe6ff" fill-opacity=".28" stroke="#1d1648" stroke-width="3"/><path d="M122 84 q8 -14 24 -16" stroke="#fff" stroke-width="5" fill="none" stroke-linecap="round" opacity=".8"/>',torso:'<rect x="138" y="160" width="24" height="16" rx="3" fill="#ff8a1f" class="ol"/><circle cx="145" cy="168" r="2.5" fill="#fff"/><circle cx="155" cy="168" r="2.5" fill="#12c584"/>'};case"nonla":return{hairBack:`<path d="M118 100 q-4 34 10 44 l8 -30z" fill="${t.hair}" class="ol"/>`,hairFront:`<path d="M118 96 q2 -26 32 -26 q30 0 32 26 q-16 -10 -32 -10 q-16 0 -32 10z" fill="${t.hair}" class="ol"/>`,hat:'<path d="M96 86 L150 40 L204 86 Q150 96 96 86Z" fill="#f2d48a" class="ol"/><path d="M110 82 L150 48 M190 82 L150 48 M130 87 L150 48 M170 87 L150 48" stroke="#c9a457" stroke-width="1.5"/>',torso:'<circle cx="150" cy="166" r="2.5" fill="#fff"/><circle cx="150" cy="180" r="2.5" fill="#fff"/><circle cx="150" cy="194" r="2.5" fill="#fff"/>'};case"bear":return{hairBack:`<circle cx="120" cy="74" r="14" fill="${t.hair}" class="ol"/><circle cx="180" cy="74" r="14" fill="${t.hair}" class="ol"/><circle cx="120" cy="74" r="7" fill="#f2c79b"/><circle cx="180" cy="74" r="7" fill="#f2c79b"/>`,under:'<ellipse cx="150" cy="115" rx="17" ry="13" fill="#f2c79b"/>',torso:'<ellipse cx="150" cy="182" rx="17" ry="22" fill="#f2c79b"/>'}}return{hairFront:`<path d="M118 92 q4 -30 32 -30 q30 0 32 30 q-10 -14 -32 -12 q-20 0 -32 12z" fill="${t.hair}" class="ol"/>`}}var Ca="#c98b52",Gg={dog:{front:`<path d="M112 80 q-16 6 -12 34 q4 14 14 6 q6 -20 4 -38z M188 80 q16 6 12 34 q-4 14 -14 6 q-6 -20 -4 -38z" fill="${Ca}" class="ol"/>`},cat:{back:`<path d="M114 86 L112 52 L140 72 z M186 86 L188 52 L160 72 z" fill="${Ca}" class="ol"/><path d="M118 80 L117 60 L134 73z M182 80 L183 60 L166 73z" fill="#ff9fb2"/>`},bunny:{back:'<ellipse cx="134" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(-10 134 48)"/><ellipse cx="166" cy="48" rx="9" ry="30" fill="#fff" class="ol" transform="rotate(10 166 48)"/><ellipse cx="134" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(-10 134 50)"/><ellipse cx="166" cy="50" rx="4" ry="21" fill="#ffb3c4" transform="rotate(10 166 50)"/>'},mouse:{back:'<circle cx="118" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="182" cy="74" r="17" fill="#b9b9c9" class="ol"/><circle cx="118" cy="74" r="9" fill="#ffb3c4"/><circle cx="182" cy="74" r="9" fill="#ffb3c4"/>'},horns:{back:'<path d="M124 78 q-14 -10 -10 -30 q8 14 20 18z M176 78 q14 -10 10 -30 q-8 14 -20 18z" fill="#f2f0e6" class="ol"/>'},antenna:{back:'<path d="M138 74 q-6 -22 -18 -28 M162 74 q6 -22 18 -28" class="ln"/><circle cx="119" cy="45" r="6" fill="#ffc93d" class="ol"/><circle cx="181" cy="45" r="6" fill="#ffc93d" class="ol"/>'}},Kh={dog:`<path d="M174 212 q34 2 44 -28 q3 -9 -5 -8 q-9 22 -39 26z" fill="${Ca}" class="ol"/>`,cat:`<path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="#1d1648" stroke-width="11" stroke-linecap="round"/><path d="M174 214 q34 4 40 -24 q4 -20 18 -24" fill="none" stroke="${Ca}" stroke-width="6" stroke-linecap="round"/>`,pig:'<path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/><path d="M176 210 q16 -2 14 -13 q-2 -9 -10 -4 q-7 5 2 11 q11 4 16 -7" fill="none" stroke="#ffa3b8" stroke-width="3.5" stroke-linecap="round"/>',dino:'<path d="M172 196 q44 10 70 38 q-38 -6 -70 6z" fill="#12c584" class="ol"/><path d="M196 206 l4 -9 l5 10 M214 216 l5 -8 l4 11" fill="#ffc93d" class="ol" style="stroke-width:2"/>'};function jh(i){i.innerHTML=`
  <svg class="pp" viewBox="0 0 300 340" role="img" aria-label="Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u">
    <defs><clipPath id="ppHeadClip"><circle cx="150" cy="106" r="34"/></clipPath></defs>
    <ellipse class="pp-shadow" cx="150" cy="300" rx="62" ry="9"/>
    <g class="pp-stool"><rect x="110" y="250" width="80" height="13" rx="6" class="ol" fill="#ff8a1f"/><path d="M120 263 L114 300 M180 263 L186 300" stroke="#1d1648" stroke-width="7" stroke-linecap="round"/></g>
    <g class="pp-root j" style="transform-origin:${sn(In.hip)}"><g class="pp-fx in" style="transform-origin:150px 260px"><g class="pp-loop in" style="transform-origin:${sn(In.hip)}">
      <g class="pp-back"></g>
      <g class="pp-tail j" style="transform-origin:174px 212px"></g>
      ${t("L")}${t("R")}
      <g class="pp-torso j" style="transform-origin:${sn(In.hip)}"><g class="in pp-torsoIn" style="transform-origin:${sn(In.hip)}">
        <g class="pp-cape"></g>
        <path class="pp-shirt ol" d="M126 156 Q124 144 138 144 L162 144 Q176 144 174 156 Q190 196 178 224 Q150 236 122 224 Q110 196 126 156 Z"/>
        <path class="pp-belt" d="M117 212 Q150 224 183 212 L178 224 Q150 236 122 224 Z"/>
        <g class="pp-torsoAcc"></g>
        ${e("L")}${e("R")}
        <g class="pp-head j" style="transform-origin:${sn(In.neck)}"><g class="in pp-headIn" style="transform-origin:${sn(In.neck)}"><g transform="translate(150 96) scale(1.32) translate(-150 -106)">
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
  </svg>`;function t(h){let f=In["hip"+h],u=In["kn"+h];return`<g class="pp-leg${h} j" style="transform-origin:${sn(f)}"><g class="in pp-leg${h}In" style="transform-origin:${sn(f)}">
      <line class="pp-pants" x1="${f[0]}" y1="${f[1]}" x2="${u[0]}" y2="${u[1]}"/>
      <g class="pp-shin${h} j" style="transform-origin:${sn(u)}"><g class="in pp-shin${h}In" style="transform-origin:${sn(u)}">
        <line class="pp-pants" x1="${u[0]}" y1="${u[1]}" x2="${u[0]}" y2="${u[1]+30}"/>
        <ellipse class="pp-shoe ol" cx="${u[0]+(h==="L"?-8:8)}" cy="${u[1]+36}" rx="17" ry="9.5"/>
      </g></g>
    </g></g>`}function e(h){let f=In["sh"+h],u=In["el"+h];return`<g class="pp-arm${h} j" style="transform-origin:${sn(f)}"><g class="in pp-arm${h}In" style="transform-origin:${sn(f)}">
      <line class="pp-sleeve" x1="${f[0]}" y1="${f[1]}" x2="${u[0]}" y2="${u[1]}"/>
      <g class="pp-fore${h} j" style="transform-origin:${sn(u)}"><g class="in pp-fore${h}In" style="transform-origin:${sn(u)}">
        <line class="pp-forearm" x1="${u[0]}" y1="${u[1]}" x2="${u[0]}" y2="${u[1]+26}"/>
        <circle class="pp-hand pp-skin ol" cx="${u[0]}" cy="${u[1]+31}" r="10.5"/>
        <text class="pp-prop pp-prop${h}" x="${u[0]}" y="${u[1]+40}"></text>
        <path d="M${u[0]+(h==="L"?7:-7)} ${u[1]+26} q${h==="L"?7:-7} -2 ${h==="L"?6:-6} 6" class="pp-thumb pp-skin ol" style="stroke-width:2.2"/>
      </g></g>
    </g></g>`}let n=i.querySelector("svg"),s=h=>n.querySelector("."+h),r=(h,f)=>{s(h).style.transform=f},a=null,o=null;function l(h){let f=ic[h?.skin]?h.skin:"tron",u=ic[f];n.style.setProperty("--pp-skin",u.skin),n.style.setProperty("--pp-shirt",u.shirt),n.style.setProperty("--pp-pants",u.pants),n.style.setProperty("--pp-shoes",u.shoes);let d=Hg(f,u),x=h?.head||"";s("pp-photo").setAttribute("href",x),n.classList.toggle("has-photo",!!x),s("pp-back").innerHTML=d.back||"",s("pp-hairBack").innerHTML=x?"":d.hairBack||"",s("pp-hairFront").innerHTML=(x?"":d.hairFront||"")+(d.hat||""),s("pp-mask").innerHTML=x?"":d.mask||"",s("pp-under").innerHTML=x?"":d.under||"",s("pp-helmet").innerHTML=d.helmet||"",s("pp-torsoAcc").innerHTML=d.torso||"",n.dataset.skin=f,o={...h,noEyes:d.noEyes}}function c(h){let f=ir[h.body]||ir.stand;r("pp-root",f.t||"none"),r("pp-torso",f.torso||"none"),s("pp-stool").classList.toggle("on",!!f.stool);for(let v of["L","R"]){let p=v==="L"?1:-1,m=v==="L"?0:1,R=!h["arm"+v]||h["arm"+v]==="down";if(f.absArms&&R)r("pp-arm"+v,`rotate(${f.absArms[m][0]}deg)`),r("pp-fore"+v,`rotate(${f.absArms[m][1]}deg)`);else{let b=er[h["arm"+v]]||er.down;r("pp-arm"+v,`rotate(${b[0]*p}deg)`),r("pp-fore"+v,`rotate(${b[1]*p}deg)`)}let M=!h["leg"+v]||h["leg"+v]==="down";if(f.absLegs&&M)r("pp-leg"+v,`rotate(${f.absLegs[m][0]}deg)`),r("pp-shin"+v,`rotate(${f.absLegs[m][1]}deg)`);else{let b=f.legs?f.legs[m]:nr[h["leg"+v]]||nr.down;r("pp-leg"+v,`rotate(${b[0]*p}deg)`),r("pp-shin"+v,`rotate(${b[1]*p}deg)`)}n.classList.toggle("wave"+v,h["arm"+v]==="wave"),s("pp-prop"+v).textContent=Ra[h["prop"+v]]||""}r("pp-head",`rotate(${(sc[h.head]??0)+(f.head||0)}deg)`);let u=n.classList.contains("has-photo"),d=f.headDown&&(!h.head||h.head==="center")?"down":h.head;s("pp-face").innerHTML=u?"":Vg(h.face,d,o?.noEyes);let x=Gg[h.ears]||{};s("pp-earsBack").innerHTML=x.back||"",s("pp-earsFront").innerHTML=x.front||"",s("pp-tail").innerHTML=Kh[h.tail]?`<g class="pp-tailIn">${Kh[h.tail]}</g>`:"",r("pp-tail",f.tail?`rotate(${f.tail}deg)`:"none"),s("pp-emote").textContent=u&&h.face&&h.face!=="neutral"&&Pa[h.face]||"",n.dataset.loop=h.loop||"",h.fx&&h.fx.seq!==a&&(a=h.fx.seq,Date.now()-(h.fx.at||0)<4e3&&(n.classList.remove("fx-jump","fx-spin","fx-fall","fx-bounce"),n.getBoundingClientRect(),n.classList.add("fx-"+h.fx.name),clearTimeout(n._fxT),n._fxT=setTimeout(()=>n.classList.remove("fx-"+h.fx.name),1600)))}return{setPose:c,setLook:l,el:n}}function Wg(){let i=document.createElement("canvas");i.width=1024,i.height=512;let t=i.getContext("2d"),e=12,n=i.width/e,s=["#d9944f","#cf8846","#e0a05a","#c98240","#d68f4c"];for(let a=0;a<e;a++){t.fillStyle=s[a*7%s.length],t.fillRect(a*n,0,n,i.height),t.strokeStyle="rgba(120,60,20,.18)",t.lineWidth=2;for(let l=0;l<7;l++){t.beginPath();let c=a*n+8+Math.random()*(n-16);t.moveTo(c,0);for(let h=0;h<=i.height;h+=32)t.lineTo(c+Math.sin(h/60+l)*4,h);t.stroke()}t.fillStyle="rgba(70,30,10,.55)",t.fillRect(a*n,0,3,i.height);let o=a*173%i.height;t.fillRect(a*n,o,n,3)}let r=new Rn(i);return r.colorSpace=Ne,r.wrapS=r.wrapT=Hs,r.anisotropy=4,r}function Xg(){let i=document.createElement("canvas");i.width=512,i.height=512;let t=i.getContext("2d"),e=t.createRadialGradient(256,200,40,256,256,380);e.addColorStop(0,"#6d48d6"),e.addColorStop(.55,"#3f2196"),e.addColorStop(1,"#1d0f52"),t.fillStyle=e,t.fillRect(0,0,512,512);for(let s=0;s<90;s++)t.fillStyle=Math.random()<.25?"#ffe9a8":"#ffffff",t.globalAlpha=.4+Math.random()*.6,t.beginPath(),t.arc(Math.random()*512,Math.random()*420,Math.random()*2+.6,0,Math.PI*2),t.fill();t.globalAlpha=1;let n=new Rn(i);return n.colorSpace=Ne,n}function $g(){let i=document.createElement("canvas");i.width=i.height=64;let t=i.getContext("2d"),e=t.createRadialGradient(32,32,2,32,32,32);return e.addColorStop(0,"rgba(255,240,190,1)"),e.addColorStop(.3,"rgba(255,210,120,.6)"),e.addColorStop(1,"rgba(255,200,100,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),new Rn(i)}function tu(i,t,e){let n=new $n(i,t,e*10,1),s=n.attributes.position;for(let r=0;r<s.count;r++){let a=(s.getX(r)+i/2)/i;s.setZ(r,Math.sin(a*e*Math.PI*2)*.16)}return n.computeVertexNormals(),n}function qg(i=.32,t=.14){let e=new Pn;for(let n=0;n<10;n++){let s=n/10*Math.PI*2-Math.PI/2,r=n%2?t:i;e[n?"lineTo":"moveTo"](Math.cos(s)*r,-Math.sin(s)*r)}return e}function eu(i){let t={hangs:[],crowd:[],beams:[],bulbs:[]};i.background=new Gt(1444910);let e=Wg();e.repeat.set(1.6,1.2);let n=new Wt(new $n(14,7.5),new nn({map:e,roughness:.55}));n.rotation.x=-Math.PI/2,n.position.set(0,0,-.4),n.receiveShadow=!0,i.add(n);let s=new Wt(new Ve(14,.55,.3),new nn({color:8011031,roughness:.6}));s.position.set(0,-.28,3.35),i.add(s);let r=new Wt(new Ve(14,.08,.34),new nn({color:16763197,roughness:.3,metalness:.4}));r.position.set(0,0,3.36),i.add(r);let a=new Wt(new $n(40,20),new nn({color:853792}));a.rotation.x=-Math.PI/2,a.position.set(0,-.55,10),i.add(a);let o=new Wt(new $n(16,10),new nn({map:Xg(),roughness:.9,emissive:1707322,emissiveIntensity:.5}));o.position.set(0,4.2,-4.1),o.receiveShadow=!0,i.add(o);let l=(b,N,L,I,F)=>{let K=new Xt;K.position.set(N,L+F,I);let _=new Wt(new ce(.012,.012,F,4),new ze({color:15658751,transparent:!0,opacity:.6}));_.position.y=-F/2,K.add(_),b.position.y=-F,K.add(b),K.userData.ph=Math.random()*6,i.add(K),t.hangs.push(K)},c=new Pn;c.absarc(0,0,.55,0,Math.PI*2,!1);let h=new Pn;h.absarc(.24,.16,.48,0,Math.PI*2,!0),c.holes.push(h);let f=new Wt(new ui(c,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03}),new nn({color:16766826,emissive:16759101,emissiveIntensity:.6,roughness:.4}));l(f,-3.4,3.4,-3.3,1.6);let u=new nn({color:16769658,emissive:16763197,emissiveIntensity:.5,roughness:.4});for(let[b,N,L,I]of[[-1.8,4.1,.9,.8],[2.2,3.9,1.2,1],[3.6,4.3,.7,.7],[-4.6,4.4,.6,.6]]){let F=new Wt(new ui(qg(),{depth:.08,bevelEnabled:!0,bevelSize:.02,bevelThickness:.02}),u);F.scale.setScalar(I),l(F,b,N,-3.4,L)}let d=new nn({color:11736364,roughness:.75,side:Re});for(let b of[-1,1]){let N=new Wt(tu(3.2,8,7),d);N.position.set(b*5.6,4,.6),N.rotation.y=b*-.25,N.castShadow=!0,i.add(N);let L=new Wt(new he(.42,.07,10,24),new nn({color:16763197,roughness:.3,metalness:.5}));L.position.set(b*4.35,1.9,.75),L.rotation.set(Math.PI/2,0,b*.3),L.scale.set(1,1,.6),i.add(L)}let x=new Wt(tu(15,1.5,22),d);x.position.set(0,5.25,1.6),i.add(x);let v=new Wt(new Ve(15,.1,.12),new nn({color:16763197,emissive:9067008,emissiveIntensity:.3,metalness:.4,roughness:.3}));v.position.set(0,4.5,1.7),i.add(v);let p=$g();for(let b=0;b<9;b++){let N=-4.4+b*1.1,L=new Wt(new ee(.09,12,8),new ze({color:16774064}));L.position.set(N,.08,3.1),i.add(L);let I=new Ii(new hi({map:p,transparent:!0,blending:cs,depthWrite:!1}));I.scale.set(.9,.9,1),I.position.copy(L.position),i.add(I),t.bulbs.push(I)}let m=new Ee;m.position.set(0,1.2,0),i.add(m);for(let b of[-1,1]){let N=new ya(16773583,1.1,0,.36,.55,0);N.position.set(b*3.6,7.2,3.2),N.target=m,b<0&&(N.castShadow=!0,N.shadow.mapSize.set(1024,1024),N.shadow.bias=-4e-4),i.add(N);let L=8.2,I=new Wt(new Fe(1.5,L,32,1,!0),new ze({color:16773583,transparent:!0,opacity:.075,blending:cs,depthWrite:!1,side:Re}));I.geometry.translate(0,-L/2,0),I.position.copy(N.position),I.lookAt(m.position),I.rotateX(-Math.PI/2),i.add(I),t.beams.push(I)}let R=new Wt(new gs(1.7,40),new ze({map:p,transparent:!0,opacity:.55,blending:cs,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.set(0,.012,.1),i.add(R);let M=new nn({color:1313326,roughness:1});for(let b=0;b<11;b++){let N=new Xt,L=.85+Math.random()*.35,I=new Wt(new qn(.42,.5,4,12),M);I.position.y=.2,N.add(I);let F=new Wt(new ee(.34,16,12),M);F.position.y=1,N.add(F),N.scale.setScalar(L),N.position.set(-5.5+b*1.1+(Math.random()-.5)*.3,-1+b%2*.12,4.4+b%2*.35),N.userData.base=N.position.y,N.userData.ph=Math.random()*6,i.add(N),t.crowd.push(N)}return t.cheerUntil=0,t.update=(b,N)=>{for(let I of t.hangs)I.rotation.z=Math.sin(b*1.1+I.userData.ph)*.08;t.beams.forEach((I,F)=>{I.material.opacity=.065+Math.sin(b*1.3+F)*.015}),t.bulbs.forEach((I,F)=>{I.material.opacity=.75+Math.sin(b*3+F*1.7)*.25});let L=N<t.cheerUntil;for(let I of t.crowd){let F=L?Math.abs(Math.sin(b*9+I.userData.ph))*.35:Math.sin(b*1.4+I.userData.ph)*.02;I.position.y=I.userData.base+F}},t}var cn=Math.PI/180,nu=1/112,Yg=1906248,vs;function Zg(){return vs||(vs=new ca(new Uint8Array([140,205,240]),3,1,Sa),vs.minFilter=vs.magFilter=Ye,vs.needsUpdate=!0),vs}var Oi=(i,t={})=>new ma({color:i,gradientMap:Zg(),...t}),cu=i=>new dn({uniforms:{t:{value:i},color:{value:new Gt(Yg)}},vertexShader:"uniform float t; void main(){ vec4 mv = modelViewMatrix * vec4(position, 1.0); vec3 n = normalize(normalMatrix * normal); mv.xyz += n * t; gl_Position = projectionMatrix * mv; }",fragmentShader:"uniform vec3 color; void main(){ gl_FragColor = vec4(color, 1.0); }",side:Ze}),cc=cu(.026),hu=cu(.016),iu=new Set([cc,hu]);function it(i,t,{outline:e=!0,thin:n=!1,mat:s}={}){let r=new Xt,a=new Wt(i,s||Oi(t));return a.castShadow=!0,r.add(a),e&&r.add(new Wt(i,n?hu:cc)),r.userData.mesh=a,r}var ct=(i,t,e,n)=>(i.position.set(t,e,n),i),pe=(i,t,e,n)=>(i.rotation.set(t,e,n),i),me=(i,t,e,n)=>(i.scale.set(t,e,n),i),Ia=(i,t=32,e=0,n=Math.PI*2)=>{let s=i[0][1]>i[i.length-1][1]?[...i].reverse():i;return new Zs(s.map(([r,a])=>new lt(r,a)),t,e,n)},rc=new Map;function Jg(i,t){if(rc.has(i))return rc.get(i);let e=document.createElement("canvas");e.width=e.height=512;let n=new Rn(e);n.colorSpace=Ne;let s=new Image;return s.onload=()=>{e.getContext("2d").drawImage(s,0,0,512,512),n.needsUpdate=!0},s.src="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="512" height="512">${t}</svg>`),rc.set(i,n),n}var ac=new Map;function su(i){if(ac.has(i))return ac.get(i);let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d");e.font='100px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif',e.textAlign="center",e.textBaseline="middle",e.fillText(i,64,72);let n=new Rn(t);return n.colorSpace=Ne,ac.set(i,n),n}var Ht=.62,hc=1,Ae={lon:.34,lat:.06,r:.155},ru=i=>50+i/hc*50,au=i=>50-i/hc*50;function Kg(i,{eyes3D:t=!0,wink:e=!1,extras:n=[]}={}){let s=ru(-Ae.lon),r=ru(Ae.lon),a=au(Ae.lat),o='fill="none" stroke="#1d1648" stroke-linecap="round" stroke-linejoin="round"',l="";if((n.includes("blush")||["happy","love","cheeky"].includes(i))&&(l+=`<ellipse cx="${s-4}" cy="${a+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/><ellipse cx="${r+4}" cy="${a+13}" rx="7" ry="4" fill="#ff7b9c" opacity=".55"/>`),n.includes("freckles"))for(let[M,b]of[[-6,12],[-2,15],[-9,15],[6,12],[2,15],[9,15]])l+=`<circle cx="${(M<0?s:r)+M}" cy="${a+b}" r=".9" fill="#b0643a"/>`;let h=M=>`<path d="M${M-8} ${a+3} Q${M} ${a-8} ${M+8} ${a+3}" ${o} stroke-width="3.6"/>`,f=M=>`<path d="M${M-8} ${a} Q${M} ${a+6} ${M+8} ${a}" ${o} stroke-width="3.4"/>`,u=M=>`<path d="M${M} ${a+7} l-8 -8 a4.6 4.6 0 0 1 8 -5.4 a4.6 4.6 0 0 1 8 5.4 z" fill="#ff3d6e" stroke="#1d1648" stroke-width="1.6"/>`;t?e&&(l+=h(s)):i==="love"?l+=u(s)+u(r):i==="sleepy"?l+=f(s)+f(r):l+=h(s)+h(r);let d=a-17,x=M=>`<path d="${M}" ${o} stroke-width="3.2"/>`,v={angry:`M${s-9} ${d+1} L${s+7} ${d+7} M${r+9} ${d+1} L${r-7} ${d+7}`,sad:`M${s-8} ${d+6} L${s+7} ${d} M${r+8} ${d+6} L${r-7} ${d}`,scared:`M${s-8} ${d+2} Q${s} ${d-5} ${s+7} ${d-1} M${r+8} ${d+2} Q${r} ${d-5} ${r-7} ${d-1}`,surprised:`M${s-8} ${d-2} Q${s} ${d-8} ${s+8} ${d-2} M${r-8} ${d-2} Q${r} ${d-8} ${r+8} ${d-2}`,cheeky:`M${s-8} ${d+2} Q${s} ${d-2} ${s+8} ${d+3} M${r-8} ${d-3} Q${r} ${d-8} ${r+8} ${d-2}`,neutral:`M${s-7} ${d+1} Q${s} ${d-3} ${s+7} ${d+2} M${r-7} ${d-1} Q${r} ${d-5} ${r+7} ${d}`};l+=x(v[i]||v.neutral);let p=au(-.36),m=M=>`<rect x="45.6" y="${M}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/><rect x="50.2" y="${M}" width="4.2" height="5.2" rx="1" fill="#fff" stroke="#1d1648" stroke-width="1.2"/>`,R={neutral:`<path d="M41 ${p-2} Q50 ${p+4} 59 ${p-3}" ${o} stroke-width="2.8"/>${m(p)}`,happy:`<path d="M37 ${p-4} Q50 ${p+16} 63 ${p-4} Z" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.4" stroke-linejoin="round"/>${m(p-3.6)}<path d="M44 ${p+6} Q50 ${p+2} 56 ${p+6} Q50 ${p+10} 44 ${p+6}Z" fill="#ff7b93"/>`,sad:`<path d="M41 ${p+4} Q50 ${p-4} 59 ${p+4}" ${o} stroke-width="2.8"/><path d="M${s-3} ${a+9} q-3 7 0 10 q3 -3 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,angry:`<path d="M40 ${p-2} H60 Q61 ${p+7} 50 ${p+7} Q39 ${p+7} 40 ${p-2}Z" fill="#fff" stroke="#1d1648" stroke-width="2.2"/><path d="M40.5 ${p+2.5} H59.5 M45 ${p-2} v9 M50 ${p-2} v9 M55 ${p-2} v9" stroke="#1d1648" stroke-width="1.2"/>`,surprised:`<ellipse cx="50" cy="${p+2}" rx="5.4" ry="7.4" fill="#7a1f2b" stroke="#1d1648" stroke-width="2.2"/>`,scared:`<path d="M38 ${p+2} l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4 l3 -3.4 l3 3.4" ${o} stroke-width="2.4"/><path d="M${r+12} ${a-10} q4 6 0 10 q-4 -4 0 -10z" fill="#7cc8ff" stroke="#1d1648" stroke-width="1"/>`,sleepy:`<ellipse cx="51" cy="${p+1}" rx="3.4" ry="2.8" fill="#7a1f2b" stroke="#1d1648" stroke-width="1.6"/><path d="M54 ${p+2} q1 6 -1 8" fill="none" stroke="#7cc8ff" stroke-width="1.8" stroke-linecap="round"/><text x="70" y="${a-16}" font-family="sans-serif" font-weight="900" font-size="9" fill="#4b4478">z</text><text x="77" y="${a-24}" font-family="sans-serif" font-weight="900" font-size="12" fill="#4b4478">Z</text>`,cheeky:`<path d="M40 ${p-2} Q50 ${p+7} 60 ${p-3}" ${o} stroke-width="2.8"/><path d="M50 ${p+2} q2 10 8 2 z" fill="#ff6f8a" stroke="#1d1648" stroke-width="1.6" stroke-linejoin="round"/>`,love:`<path d="M40 ${p-3} Q50 ${p+9} 60 ${p-3}" ${o} stroke-width="2.8"/>`};return l+=R[i]||R.neutral,n.includes("fangs")&&(l+=`<path d="M44 ${p+1} l1.6 4 l1.6 -4 M53 ${p+1} l1.6 4 l1.6 -4" fill="#fff" stroke="#1d1648" stroke-width="1"/>`),l}var ou=(i,t)=>new ee(i,40,28,Math.PI/2-t,t*2,Math.PI/2-t,t*2),oc=(i,t,e=Ht)=>new U(e*Math.sin(i)*Math.cos(t),e*Math.sin(t),e*Math.cos(i)*Math.cos(t)),Qg={point:[-75,0],mouth:[-30,-100],cross:[-45,-60],head:[-15,-40],hip:[10,0]},jg={point:[20,0],mouth:[10,25],cross:[16,-70],wave:[128,22]},lu=.8,tx={sit:{y:.6,legs:[[-88,88,6],[-88,88,6]]},squat:{y:.46,legs:[[-115,135,26],[-115,135,26]]},kneel:{y:.5,legs:[[0,95,4],[0,95,4]]},crossleg:{y:.34,legs:[[-80,0,52,-125],[-80,0,52,-125]]},lie:{x:.45,y:.5},crawl:{x:0,y:.54},handstand:{y:2.12}},ex={front:0,l45:-Math.PI/4,r45:Math.PI/4,left:-Math.PI/2,right:Math.PI/2,back:Math.PI},lc=class extends en{constructor(t,e,n){super(),this.c=t,this.a=e,this.b=n}getPoint(t,e=new U){return this.c.getPoint(this.a+(this.b-this.a)*t,e)}};function uu(i,t={}){let e;try{e=new aa({antialias:!0,alpha:!0,powerPreference:"low-power"})}catch(g){return console.warn("[puppet3d] WebGL kh\xF4ng kh\u1EA3 d\u1EE5ng, d\xF9ng b\u1EA3n 2D",g),jh(i)}i.innerHTML="";let n=e.domElement;n.className="pp pp3d",n.setAttribute("role","img"),n.setAttribute("aria-label","Nh\xE2n v\u1EADt tr\xEAn s\xE2n kh\u1EA5u"),i.appendChild(n),e.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),e.outputColorSpace=Ne;let s=new oa,r=new qe(30,1,.1,100),a=t.stage?{y:2,z:8.8,ly:1.5,fov:34}:{y:1.75,z:7.4,ly:1.38,fov:30};r.fov=a.fov,r.position.set(0,a.y,a.z),r.lookAt(0,a.ly,0),s.add(new xa(16777215,14271231,t.stage?.6:1.3)),s.add(new Ma(16777215,t.stage?.15:.5));let o=new va(16777215,t.stage?.8:1.9);o.position.set(3,6,6),s.add(o);let l=t.stage?eu(s):null;l&&(e.shadowMap.enabled=!0,e.shadowMap.type=Gl);let c=new Wt(new gs(.8,32),new ze({color:1906248,transparent:!0,opacity:l?.12:.18,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.y=.01,s.add(c);let h=new Xt;h.add(ct(it(new ce(.5,.5,.13,28),16747039),0,.42,0));for(let[g,S]of[[-.32,-.22],[.32,-.22],[-.32,.22],[.32,.22]])h.add(ct(it(new ce(.05,.05,.42,8),1906248,{outline:!1}),g,.21,S));h.position.z=-.2,s.add(h);let f=new Xt;s.add(f);let u=new Xt;u.rotation.order="YXZ",f.add(u);let d=new Xt;u.add(d);let x=new Xt;x.rotation.order="YXZ",x.position.y=.12,d.add(x);let v=new Xt;d.add(v);let p=new Xt;x.add(p);let m=new Xt;m.position.set(0,.62,-.28),x.add(m);let R=new Xt;R.rotation.order="YXZ",R.position.y=.66,x.add(R);let M=new Xt;M.rotation.order="YXZ",R.add(M);let b=new Xt;b.position.y=Ht*.9,M.add(b);let N=it(new ee(Ht,48,36),16777215);me(N,1.06,.95,1),b.add(N);let L=new Xt;L.scale.set(1.06,.95,1),b.add(L);let I=new Xt;b.add(I);for(let g of[-1,1]){let S=it(new ee(.13,16,12),16777215);me(S,.55,.9,.7),I.add(ct(S,g*Ht*1.03,-.04,0))}let F=it(new ee(.085,18,14),16777215,{thin:!0});me(F,1.1,.9,.9);let K=oc(0,-.14,Ht*.99);L.add(ct(F,K.x,K.y,K.z));let _=new ze({transparent:!0,depthWrite:!1}),E=new Wt(ou(Ht+.006,hc),_);E.renderOrder=1,L.add(E);let W=new ze({transparent:!0,depthWrite:!1}),z=new Wt(ou(Ht+.035,1.12),W);z.visible=!1,z.renderOrder=2,L.add(z);let G=[];for(let g of[-1,1]){let S=oc(g*Ae.lon,Ae.lat,Ht*.93),D=new Xt;D.position.copy(S),D.lookAt(S.clone().multiplyScalar(3)),L.add(D);let T=new Xt;T.scale.set(1,1.08,.62),D.add(T);let w=it(new ee(Ae.r,28,20),16777215,{thin:!0});T.add(w);let C=new Wt(new ee(Ae.r*.44,18,14),new ze({color:1906248}));C.scale.z=.5,T.add(C);let H=new Wt(new ee(Ae.r*.13,10,8),new ze({color:16777215}));T.add(H);let k=new Xt;T.add(k);let q=it(new ee(Ae.r*1.08,28,14,0,Math.PI*2,0,Math.PI/2),16777215,{thin:!0});k.add(q),G.push({g:D,inner:T,white:w,pupil:C,shine:H,lidPivot:k,lid:q,sx:g,px:0,py:0,wx:0,wy:0})}let Q=new Xt;L.add(Q);let V=new Xt;b.add(V);let st=new Ii(new hi({transparent:!0,depthTest:!1,depthWrite:!1}));st.scale.set(.5,.5,1),st.position.set(.66,Ht+.5,.3),st.visible=!1,b.add(st);let $=Ia([[0,.72],[.18,.71],[.3,.64],[.38,.5],[.43,.3],[.455,.12],[.46,-.02]],36),yt=it($,16777215);x.add(yt);let bt=Ia([[.462,.14],[.47,0],[.45,-.12],[.38,-.2],[.22,-.25],[0,-.26]],36),St=it(bt,16777215);d.add(St);let $t=it(new ce(.13,.15,.16,16),16777215,{thin:!0});ct($t,0,.72,0),x.add($t);let Lt={},Y=.32,at=.3,Ct=.3,mt=.28;for(let g of["L","R"]){let S=g==="L"?-1:1,D=new Xt;D.rotation.order="ZXY",D.position.set(S*.36,.5,0),x.add(D);let T=new Xt;T.rotation.order="ZXY",T.position.y=-Y,D.add(T);let w=new Xt;w.position.y=-at,T.add(w);let C=new Xt;C.position.y=-.1,w.add(C);let H=it(new ee(.135,20,16),16777215,{thin:!0});me(H,1,1.1,.85),C.add(H);let k=it(new qn(.045,.08,4,10),16777215,{thin:!0});ct(k,-S*.12,.04,.03),k.rotation.z=-S*.8,C.add(k);let q=it(new he(.1,.035,8,18),16777215,{thin:!0});q.rotation.x=Math.PI/2,q.position.y=.08,C.add(q);let _t=new Ii(new hi({transparent:!0,depthWrite:!1}));_t.scale.set(.56,.56,1),_t.position.set(0,-.12,.2),_t.visible=!1,C.add(_t),Lt["arm"+g]=D,Lt["fore"+g]=T,Lt["wrist"+g]=w,Lt["prop"+g]=_t,Lt["hand"+g]={palm:H,thumb:k,cuff:q}}for(let g of["L","R"]){let S=g==="L"?-1:1,D=new Xt;D.rotation.order="ZXY",D.position.set(S*.2,-.08,0),d.add(D);let T=new Xt;T.rotation.order="ZXY",T.position.y=-Ct,D.add(T);let w=new Xt;w.position.y=-mt,T.add(w);let C=it(new ee(.2,22,16),16777215);me(C,.95,.62,1.35),ct(C,S*.02,-.08,.08),w.add(C);let H=it(new ce(.17,.19,.05,20),16777215,{thin:!0});me(H,1,1,1.4),ct(H,S*.02,-.18,.09),w.add(H),Lt["leg"+g]=D,Lt["shin"+g]=T,Lt["ankle"+g]=w,Lt["shoe"+g]=C,Lt["sole"+g]=H}let Ot=new Xt;Ot.position.set(0,.02,-.4),d.add(Ot);let Nt={},zt=(g,S)=>{let D=Oi(16777215),T=new Wt(new Ui(new Li(new U,new U(0,-.1,0),new U(0,-.2,0)),4,S,8),D);T.castShadow=!0;let w=new Wt(T.geometry,cc);f.add(T,w),Nt[g]={m:T,o:w,r:S,mat:D,len:1}};for(let g of["L","R"])zt("arm"+g,.082),zt("sleeve"+g,.118),zt("leg"+g,.105),zt("pant"+g,.14);let Et=Ta.tron,j={skin:"tron",head:""},P="",ut=!1,ht=[],nt=(g,S)=>g.userData.mesh.material.color.set(S);function ft(g){let S={skin:Ta[g?.skin]?g.skin:"tron",head:g?.head||""},D=S.skin+"|"+S.head;if(D===P)return;P=D,j=S,Et=Ta[j.skin];let T=Et.extra||{};for(let w of[N,F,$t,...I.children])nt(w,Et.skin);for(let w of G)nt(w.lid,Et.skin);nt(yt,T.aodai||Et.top),nt(St,T.dress||Et.bottom);for(let w of["L","R"]){let C=Et.gloves||Et.skin;nt(Lt["hand"+w].palm,C),nt(Lt["hand"+w].thumb,C),nt(Lt["hand"+w].cuff,Et.gloves?Et.gloves:Et.sleeve>=.95?T.coat||Et.top:Et.skin),Lt["hand"+w].cuff.visible=!!Et.gloves||Et.sleeve>=.95,nt(Lt["shoe"+w],Et.shoes),nt(Lt["sole"+w],"#ffffff"),Nt["arm"+w].mat.color.set(Et.gloves&&Et.sleeve>=.95?T.coat||Et.top:Et.arms||Et.skin),Nt["sleeve"+w].mat.color.set(T.coat||T.aodai||Et.top),Nt["sleeve"+w].len=Math.max(.12,Et.sleeve??.3),Nt["leg"+w].mat.color.set(Et.legs||Et.skin),Nt["pant"+w].mat.color.set((T.aodai,Et.bottom)),Nt["pant"+w].len=T.dress?.001:Math.max(.12,Et.pants??1)}J(),j.head?Ft(j.head):z.visible=!1,rt="",Bt()}function Ft(g){let S=new Image;/^https?:/.test(g)&&(S.crossOrigin="anonymous"),S.onload=()=>{try{let D=document.createElement("canvas");D.width=D.height=256;let T=D.getContext("2d");T.beginPath(),T.arc(128,128,124,0,Math.PI*2),T.clip();let w=Math.min(S.width,S.height);T.drawImage(S,(S.width-w)/2,(S.height-w)/2,w,w,0,0,256,256);let C=new Rn(D);C.colorSpace=Ne,W.map?.dispose(),W.map=C,W.needsUpdate=!0,z.visible=!0,rt="",Bt()}catch{z.visible=!1}},S.onerror=()=>{z.visible=!1},S.src=g}function xt(g){for(;g.children.length;)g.children.pop().traverse(D=>{D.isMesh&&!iu.has(D.material)&&(D.geometry.dispose(),D.material.dispose())})}let A=(g,S,D={})=>it(new ee(g,24,18),S,D);function y(g,S=1.15,D=-.3,T=1.07,w=2.1){let C=new Xt;return C.add(pe(it(new ee(Ht*T,36,20,0,Math.PI*2,0,S),g),D,0,0)),C.add(it(new ee(Ht*(T-.012),36,20,Math.PI,Math.PI,0,w),g)),C}function B(g,S){let D=new Xt,T=w=>(D.add(w),w);switch(g){case"ahoge":{T(y(S)),T(pe(me(ct(A(.3,S),.14,.43,.36),1.25,.42,.75),.4,0,-.35)),T(pe(me(ct(A(.3,S),-.32,.38,.28),.65,.45,.7),.3,0,.5));let w=it(new he(.15,.04,8,18,Math.PI*1.25),S,{thin:!0});ct(w,.05,Ht+.1,0),w.rotation.z=.5,w.name="ahoge",T(w);break}case"short":T(y(S,1.05,-.25)),T(pe(me(ct(A(.3,S),0,.45,.32),1.5,.35,.7),.45,0,0));break;case"spiky":{T(y(S,1.1,-.25));for(let w=0;w<7;w++){let C=(w/6-.5)*2.2,H=it(new Fe(.12,.34,10),S,{thin:!0});ct(H,Math.sin(C)*.42,.52+Math.cos(C)*.1,Math.cos(C)*.12-.05),H.rotation.set(-.3,0,-C*.55),T(H)}break}case"messy":{T(y(S,1,-.2));for(let[w,C,H,k]of[[-.5,.25,0,.22],[.5,.25,0,.22],[-.3,.52,-.1,.24],[.3,.52,-.1,.24],[0,.62,0,.24],[-.55,-.05,-.15,.18],[.55,-.05,-.15,.18],[0,.4,-.45,.26]])T(ct(A(k,S),w,C,H));break}case"slick":T(y(S,1.15,-.45)),T(pe(me(ct(A(.3,S),.05,.47,.25),1.55,.42,1),.2,0,.12));break;case"bob":case"long":case"wavy":case"pigtails":case"bun":{if(D.add(it(new ee(Ht*1.1,36,20,Math.PI/2+.8,Math.PI*2-1.6,0,g==="long"||g==="wavy"?2.35:2),S)),T(pe(me(ct(A(.3,S),0,.42,.38),1.6,.42,.7),.4,0,0)),T(y(S,1,-.15,1.09)),g==="long"&&T(me(ct(A(.42,S),0,-.45,-.32),1.25,1.2,.6)),g==="wavy")for(let w of[-1,1])for(let C=0;C<3;C++)T(ct(A(.17,S),w*(.58-C*.05),-.25-C*.2,-.05-C*.05));if(g==="pigtails")for(let w of[-1,1])T(ct(A(.24,S),w*.72,.2,-.12)),T(ct(A(.08,16727435,{thin:!0}),w*.6,.36,-.1));g==="bun"&&T(ct(A(.26,S),0,.42,-.5));break}case"mohawk":for(let w=0;w<5;w++){let C=it(new Fe(.11,.4,8),S,{thin:!0});ct(C,0,.6-Math.abs(w-2)*.05,.3-w*.2),C.rotation.x=-.3-w*.25,T(C)}break;default:break}return D}function Z(g,S){let D=new Xt,T=C=>(D.add(C),C),w=S.hatColor||"#ff3d4f";switch(g){case"nonla":T(ct(it(new Fe(1.05,.55,40,1,!0),15914122,{mat:Oi(15914122,{side:Re})}),0,Ht*.86,0));break;case"ninja":{T(y(w,1.55,-.65,1.04,2.4)),T(it(new ee(Ht*1.035,36,16,Math.PI/2-1.3,2.6,1.82,.85),w));let C=it(new he(Ht*1.05,.06,10,40),16727375,{thin:!0});C.rotation.x=Math.PI/2-.12,C.position.y=.26,T(C);for(let H of[.2,-.15])T(pe(ct(it(new Ve(.08,.05,.45),16727375,{thin:!0}),.2+H,.2,-Ht-.14),.5,H,.3));break}case"bubble":{T(new Wt(new ee(Ht*1.42,32,24),new ze({color:12576511,transparent:!0,opacity:.18,depthWrite:!1})));let C=it(new he(.52,.09,10,30),14672885);C.rotation.x=Math.PI/2,C.position.y=-Ht*.92,T(C),T(ct(A(.06,16727375,{thin:!0}),.55,.7,0));break}case"helmet":{T(pe(it(new ee(Ht*1.13,36,18,0,Math.PI*2,0,1.35),w),-.2,0,0)),T(pe(ct(it(new ce(.03,.03,.5,6),1906248,{outline:!1}),0,-.48,.25),.5,0,Math.PI/2)),T(ct(me(A(.06,16777215,{thin:!0}),1,1,.5),0,.7,.28));break}case"fullhelmet":{T(pe(it(new ee(Ht*1.15,36,20,0,Math.PI*2,0,1.55),w),-.35,0,0)),T(it(new ee(Ht*1.14,36,20,Math.PI,Math.PI,0,2.3),w)),T(pe(me(ct(A(.3,1906248),0,.42,.42),1.4,.3,.6),.6,0,0));break}case"cap":case"capBack":{T(pe(it(new ee(Ht*1.1,36,18,0,Math.PI*2,0,1.2),w),-.15,0,0));let C=it(new ce(.42,.42,.04,28,1,!1,-Math.PI/2,Math.PI),w);g==="cap"?ct(C,0,.32,.45):(ct(C,0,.32,-.45),C.rotation.y=Math.PI),C.rotation.x+=g==="cap"?.12:-.12,T(C),g==="cap"&&T(ct(me(A(.08,16763197,{thin:!0}),1,1,.4),0,.55,.52));break}case"chef":{T(ct(it(new ce(.5,.5,.36,28),16777215),0,.62,-.05));for(let[C,H]of[[-.25,0],[.25,0],[0,.2],[0,-.2],[0,0]])T(ct(A(.3,16777215),C,.98,H-.05));break}case"crown":{let C=it(new ce(.38,.34,.22,10,1,!0),16763197,{mat:Oi(16763197,{side:Re})});ct(C,0,.66,0),T(C);for(let H=0;H<5;H++){let k=H/5*Math.PI*2;T(ct(it(new Fe(.08,.2,8),16763197,{thin:!0}),Math.sin(k)*.34,.86,Math.cos(k)*.34))}T(ct(A(.06,16727375,{thin:!0}),0,.68,.38));break}case"tiara":{let C=it(new he(.4,.03,8,30,Math.PI),16769162,{thin:!0});ct(C,0,.5,.1),C.rotation.x=-.4,T(C),T(ct(it(new Fe(.08,.22,4),16769162,{thin:!0}),0,.72,.28)),T(ct(A(.05,16740277,{thin:!0}),0,.62,.36));break}case"tricorn":{T(pe(it(new ee(Ht*1.08,32,16,0,Math.PI*2,0,1.15),w),-.1,0,0));let C=new Pn;C.moveTo(-.95,0),C.quadraticCurveTo(-.7,.62,0,.7),C.quadraticCurveTo(.7,.62,.95,0),C.quadraticCurveTo(0,.18,-.95,0);let H=it(new ui(C,{depth:.12,bevelEnabled:!0,bevelSize:.03,bevelThickness:.03,bevelSegments:2}),w);ct(H,0,.42,-.06),H.rotation.x=-.12,T(H),T(ct(me(A(.1,16777215,{thin:!0}),1,1,.35),0,.82,.1));let k=it(new he(.06,.02,6,12),16763197,{outline:!1});ct(k,0,.82,.14),T(k);break}case"santa":{let C=it(new Fe(.58,1,28),15217738);ct(C,.12,.92,-.08),C.rotation.z=-.45,T(C);let H=it(new he(.58,.12,12,30),16777215);H.rotation.x=Math.PI/2-.1,H.position.y=.48,T(H),T(ct(A(.14,16777215),.62,1.22,-.08));break}case"fire":{T(pe(it(new ee(Ht*1.14,36,18,0,Math.PI*2,0,1.3),w),-.15,0,0));let C=it(new ce(.85,.85,.05,32),w);C.position.set(0,.28,-.12),C.rotation.x=-.18,T(C),T(ct(me(A(.13,16763197,{thin:!0}),1,1.2,.35),0,.62,.48));break}case"band":{let C=it(new he(Ht*1.05,.065,10,40),w,{thin:!0});C.rotation.x=Math.PI/2-.15,C.position.y=.3,T(C);break}case"mirror":{let C=it(new he(Ht*1.05,.04,8,40),1906248,{thin:!0});C.rotation.x=Math.PI/2-.2,C.position.y=.3,T(C);let H=it(new ce(.15,.15,.04,24),14674175);H.rotation.x=Math.PI/2-.2,H.position.set(0,.5,.52),T(H);break}case"turban":{let C=it(new he(Ht*.95,.13,12,36),w);C.rotation.x=Math.PI/2-.1,C.position.y=.32,T(C),T(y(w,.9,-.1,1.04));break}case"veil":{let C=new Wt(new ee(Ht*1.2,32,18,Math.PI/2+.95,Math.PI*2-1.9,.3,2.5),new ze({color:16777215,transparent:!0,opacity:.6,side:Re,depthWrite:!1}));C.scale.set(1.05,1.15,1.1),C.position.y=-.12,T(C),T(ct(A(.08,16761564,{thin:!0}),-.35,.5,.25)),T(ct(A(.07,16777215,{thin:!0}),-.25,.56,.3));break}case"phones":{let C=it(new he(Ht*1.1,.05,8,30,Math.PI),w,{thin:!0});C.position.y=.05,T(C);for(let H of[-1,1]){let k=it(new ce(.2,.2,.14,22),w);k.rotation.z=Math.PI/2,k.position.set(H*Ht*1.05,.02,0),T(k),T(ct(pe(it(new ce(.12,.12,.02,18),3729568,{outline:!1}),0,0,Math.PI/2),H*Ht*1.13,.02,0))}break}case"scarfHead":{T(pe(it(new ee(Ht*1.1,36,18,0,Math.PI*2,0,1.3),w),-.45,0,0)),T(pe(ct(it(new Fe(.12,.3,10),w,{thin:!0}),0,.15,-.68),-2.2,0,0));break}case"beanie":{T(pe(it(new ee(Ht*1.1,36,18,0,Math.PI*2,0,1.35),w),-.15,0,0));let C=it(new he(Ht*.98,.09,10,36),w);C.rotation.x=Math.PI/2-.15,C.position.y=.22,T(C),T(ct(A(.15,16777215),0,.82,-.05));break}case"hood":{let C=it(new ee(Ht*1.16,40,24,Math.PI/2+.95,Math.PI*2-1.9,0,2.6),w);T(C),T(it(new ee(Ht*1.16,40,20,0,Math.PI*2,0,.95),w));let H=it(new he(Ht*.86,.07,10,36),w);H.position.z=.42,H.scale.set(1,1.1,1),T(H);let k=S.hood;for(let q of[-1,1])k==="bear"&&(T(ct(A(.2,w),q*.5,.55,-.05)),T(ct(me(A(.11,15913641,{outline:!1}),1,1,.4),q*.52,.56,.1))),k==="cat"&&T(pe(ct(it(new Fe(.2,.36,4),w),q*.38,.7,0),0,0,-q*.4)),k==="dog"&&T(pe(me(ct(A(.2,11036974),q*.66,.1,0),.7,1.6,.5),0,0,q*.3)),k==="frog"&&(T(ct(A(.2,w),q*.3,.68,.1)),T(ct(A(.12,16777215,{thin:!0}),q*.3,.72,.24)),T(ct(A(.06,1906248,{outline:!1}),q*.3,.73,.34)));if(k==="dino")for(let q=0;q<5;q++){let _t=it(new Fe(.11,.26,4),16763197,{thin:!0}),It=.4-q*.45;ct(_t,0,Math.cos(It)*.72,Math.sin(It)*.72),_t.rotation.x=It,T(_t)}break}default:break}return D}function et(g,S){let D=new Xt,T=C=>(D.add(C),C),w=(C,H,k=Ht)=>oc(C,H,k);for(let C of g||[]){if(C==="glasses"){for(let H of[-1,1]){let k=w(H*Ae.lon,Ae.lat,Ht*1.12),q=it(new he(.19,.022,8,28),1906248,{outline:!1});ct(q,k.x,k.y,k.z),q.lookAt(k.clone().multiplyScalar(3)),T(q)}T(ct(it(new ce(.018,.018,.2,6),1906248,{outline:!1}),0,Ae.lat*Ht*.95+.02,Ht*1.1)).rotation.z=Math.PI/2}if(C==="shades"){let H=it(new Yn(.98,.24,.1,3,.05),1314862),k=w(0,Ae.lat,Ht*1.06);ct(H,0,k.y,k.z),T(H),T(ct(me(A(.05,16777215,{outline:!1}),1.8,.6,.3),-.3,k.y+.04,k.z+.06))}if(C==="mustache"||C==="curly"){let H=S.hair==="#eeeef5"?"#eeeef5":"#2a1a14";for(let k of[-1,1]){let q=w(k*.12,-.24,Ht*1),_t=me(A(.1,H,{thin:!0}),1.5,.6,.6);if(ct(_t,q.x,q.y,q.z),_t.rotation.z=k*.3,T(_t),C==="curly"){let It=it(new he(.06,.025,6,12,Math.PI*1.5),H,{thin:!0});ct(It,q.x+k*.14,q.y+.05,q.z-.02),It.rotation.z=k>0?0:Math.PI,T(It)}}}if(C==="beard"){let H=S.beard||"#eeeef5",k=it(new ee(Ht*.82,32,18,Math.PI/2-1.1,2.2,1.85,1.05),H);k.position.set(0,-.06,.12),T(k),T(me(ct(A(.26,H),0,-.62,.32),1.2,.9,.7))}if(C==="patch"){let H=w(Ae.lon,Ae.lat,Ht*1.06),k=it(new ce(.17,.17,.04,20),1314862,{thin:!0});ct(k,H.x,H.y,H.z),k.lookAt(H.clone().multiplyScalar(3)),k.rotateX(Math.PI/2),T(k)}}return D}function J(){xt(Q),xt(p),xt(m),xt(v);let g=Et,S=g.extra||{},D=!!j.head,T=g.hat==="hood";(!D||T)&&Q.add(B(g.hairStyle,g.hair)),g.hat&&Q.add(Z(g.hat,g));let w=(g.face||[]).filter(k=>["glasses","shades","mustache","curly","beard","patch"].includes(k));D||Q.add(et(w,g)),ht=g.face||[],ut=w.includes("shades")||D,I.visible=!T&&!["helmet","fullhelmet","ninja","fire","phones","scarfHead","beanie"].includes(g.hat);let C=k=>(p.add(k),k),H=k=>(v.add(k),k);if(S.dress&&(H(ct(it(Ia([[.44,.12],[.5,-.05],[.62,-.3],[.7,-.45],[0,-.45]],36),S.dress),0,0,0)),H(ct(it(new he(.68,.035,8,40),S.dress,{thin:!0}),0,-.45,0)).rotation.x=Math.PI/2),S.aodai){for(let k of[1,-1]){let q=it(new Yn(.5,.62,.04,3,.02),S.aodai,{thin:!0});ct(q,0,-.36,k*.37),q.rotation.x=k*.28,C(q)}C(ct(it(new ce(.15,.16,.12,18),S.aodai,{thin:!0}),0,.72,0))}if(S.coat){let k=it(Ia([[.34,.66],[.44,.5],[.49,.28],[.51,.05],[.54,-.2],[.57,-.45]],36,Math.PI/2+.42,Math.PI*2-.84),S.coat,{outline:!1,mat:Oi(S.coat,{side:Re})});C(k);for(let q of[-1,1])C(pe(ct(it(new Ve(.16,.3,.03),S.coat,{thin:!0}),q*.2,.52,.36),-.5,0,q*.5))}if(S.vest)for(let k of[-1,1])C(pe(ct(it(new Ve(.2,.62,.05),S.vest,{thin:!0}),k*.27,.32,.4),.05,k*.4,0));if(S.apron){C(ct(it(new Yn(.56,.78,.04,3,.02),S.apron),0,.12,.45)).rotation.x=-.1;let k=it(new he(.3,.02,6,24,Math.PI),S.apron,{thin:!0});k.position.set(0,.5,.28),k.rotation.x=-.6,C(k)}if(S.tie&&(C(pe(ct(it(new Ve(.1,.36,.04),S.tie,{thin:!0}),0,.46,.38),-.2,0,0)),C(ct(it(new Fe(.07,.1,4),S.tie,{thin:!0}),0,.25,.43)).rotation.x=Math.PI),S.scarf){let k=it(new he(.2,.08,10,24),S.scarf);k.rotation.x=Math.PI/2,k.position.y=.68,C(k),C(pe(ct(it(new Yn(.13,.32,.05,2,.02),S.scarf,{thin:!0}),.12,.5,.3),-.35,0,.25))}if(S.collar){let k=it(new ce(.45,.22,.4,24,1,!0,Math.PI*.75,Math.PI*1.5),S.collar,{mat:Oi(S.collar,{side:Re})});k.position.set(0,.86,-.04),C(k)}if(S.pack&&C(ct(it(new Yn(.56,.6,.28,3,.1),S.pack),0,.32,-.44)),S.box&&(C(ct(it(new Yn(.82,.74,.5,3,.06),S.box),0,.42,-.62)),C(ct(it(new Ve(.4,.06,.02),16777215,{outline:!1}),0,.5,-.36))),S.belly&&C(me(ct(A(.3,S.belly,{outline:!1}),0,.2,.33),1,1.15,.45)),S.chain){let k=it(new he(.24,.025,8,30),16763197,{thin:!0});k.position.set(0,.56,.18),k.rotation.x=Math.PI/2-.9,C(k),C(ct(A(.06,16763197,{thin:!0}),0,.37,.4))}if(S.star){let k=new Pn;for(let q=0;q<10;q++){let _t=q/10*Math.PI*2-Math.PI/2,It=q%2?.07:.16;k[q?"lineTo":"moveTo"](Math.cos(_t)*It,-Math.sin(_t)*It)}C(ct(it(new ui(k,{depth:.04,bevelEnabled:!1}),S.star,{thin:!0}),0,.36,.42))}if(S.badge&&(C(ct(it(new ce(.07,.07,.03,16),16763197,{thin:!0}),.2,.42,.4)).rotation.x=Math.PI/2),S.whistle&&(C(ct(it(new qn(.04,.08,4,8),14672885,{thin:!0}),-.16,.38,.42)).rotation.z=Math.PI/2),S.belt){let k=it(new he(.455,.045,8,40),S.belt,{thin:!0});k.rotation.x=Math.PI/2,k.position.y=0,C(k)}if(S.cape){let k=it(new ce(.4,.7,1.3,24,6,!0,Math.PI*.6,Math.PI*.8),S.cape,{mat:Oi(S.cape,{side:Re})});k.position.set(0,-.62,.22),m.add(k)}}let Pt=null,pt=null;function At(g){if(g===Pt)return;Pt=g,xt(V);let S=(D,T,w,C,H=0,k=0)=>{D.position.set(T,w,C),D.rotation.set(k,0,H),V.add(D)};for(let D of[-1,1]){if(g==="dog"&&S(me(A(.2,13208402),.75,1.6,.45),D*.66,0,.05,D*.25),g==="cat"&&S(it(new Fe(.2,.36,4),13208402),D*.38,.66,0,-D*.45),g==="bunny"){let T=it(new qn(.11,.5,6,12),16777215);S(T,D*.22,.95,-.05,-D*.18)}g==="mouse"&&S(it(new ce(.26,.26,.06,24),12171721),D*.55,.5,-.05,0,Math.PI/2),g==="horns"&&S(it(new Fe(.09,.32,12),15921382),D*.36,.66,0,-D*.55),g==="antenna"&&(S(it(new ce(.02,.02,.45,6),1906248,{outline:!1}),D*.26,.82,0,-D*.35),S(A(.09,16763197),D*.35,1.02,0))}}function Qt(g){if(g!==pt){if(pt=g,xt(Ot),g==="dog"){let S=new qn(.08,.3,6,12);S.translate(0,.2,0);let D=it(S,13208402);D.rotation.x=-.7,Ot.add(D)}if(g==="cat"&&Ot.add(it(new Ui(new qs([new U(0,0,0),new U(0,.15,-.35),new U(0,.55,-.5),new U(.1,.8,-.35)]),24,.06,8),13208402)),g==="pig"){let S=it(new he(.1,.04,8,20,Math.PI*1.7),16753592);S.rotation.y=Math.PI/2,Ot.add(S)}if(g==="dino"){let S=it(new Fe(.28,1,16),3129201);S.rotation.x=-Math.PI/2-.5,S.position.set(0,-.15,-.35),Ot.add(S)}}}let rt="",ot={},Vt={happy:!0,love:!0};function Bt(){let g=ot.face||"neutral",S=z.visible,D=!S&&!ut&&!Vt[g],T=g==="cheeky";for(let C of G)C.g.visible=D&&!(T&&C.sx<0);let w=`${g}|${D}|${S}|${ht.join(",")}|${ut}`;w!==rt&&(rt=w,_.map=Jg(w,S?"":Kg(g,{eyes3D:D||ut,wink:T,extras:ht})),_.needsUpdate=!0),E.visible=!S,F.visible=!S,S&&g!=="neutral"&&Pa[g]?(st.material.map=su(Pa[g]),st.material.needsUpdate=!0,st.visible=!0):st.visible=!1}let Tt=new Map;function Rt(g,S,D=.16,T=.72){let w=Tt.get(g);return w||(w={v:0,x:S},Tt.set(g,w)),w.v=(w.v+(S-w.x)*D)*T,w.x+=w.v,w.x}let kt=g=>Tt.get(g)?.v||0,Zt=null,O=null,vt=0;function X(g){let S=JSON.stringify({...ot,fx:0})!==JSON.stringify({...g,fx:0});ot={...g},S&&(vt=performance.now()),At(g.ears||null),Qt(g.tail||null);for(let D of["L","R"]){let T=g["prop"+D],w=Lt["prop"+D];T&&Ra[T]?(w.material.map=su(Ra[T]),w.material.needsUpdate=!0,w.visible=!0):w.visible=!1}g.fx&&g.fx.seq!==O&&(O=g.fx.seq,Date.now()-(g.fx.at||0)<4e3&&(Zt={name:g.fx.name,t0:performance.now()})),Bt()}function tt(g){let S={x:0,y:0,r:0};if(!g)return S;let D=/translate\(([-\d.]+)px,\s*([-\d.]+)px\)/.exec(g);D&&(S.x=+D[1],S.y=+D[2]);let T=/rotate\(([-\d.]+)deg\)/.exec(g);return T&&(S.r=+T[1]),S}let Mt=new U,wt=new U,jt=new U,fe=new U,Oe=new U;function Jt(g,S){return S.setFromMatrixPosition(g.matrixWorld),f.worldToLocal(S)}function ke(g,S,D,T,w){Oe.copy(S).add(T).multiplyScalar(.5),fe.copy(D).multiplyScalar(2).sub(Oe),fe.lerp(D,.25);let C=new Li(S.clone(),fe.clone(),T.clone()),H=Nt[g],k=new Ui(C,16,H.r,10);H.m.geometry.dispose(),H.m.geometry=k,H.o.geometry=k;let q=Nt[w];if(q.len<.01){q.m.visible=q.o.visible=!1;return}q.m.visible=q.o.visible=!0;let _t=new Ui(new lc(C,0,Math.min(1,q.len)),10,q.r,10);q.m.geometry.dispose(),q.m.geometry=_t,q.o.geometry=_t}let He=0,Ln=0,bs=!0,mn=0,ki=performance.now()+2200,Ss=0,ws=0,di=0,Es=new ResizeObserver(()=>pi());Es.observe(i);function pi(){let g=i.getBoundingClientRect();if(!g.width||!g.height||g.width===He&&g.height===Ln)return;He=g.width,Ln=g.height,e.setSize(He,Ln,!1),r.aspect=He/Ln;let S=l?1.25:.75;r.position.z=He/Ln<S?a.z/Math.max(.5,He/Ln/S):a.z,r.updateProjectionMatrix()}function As(g){if(!bs)return;if(!n.isConnected){sr();return}mn=requestAnimationFrame(As),pi();let S=g/1e3,D=ir[ot.body]||ir.stand,T=tt(D.t),w=ot.loop,C=(dt,re=0)=>Math.sin(S*Math.PI*2*dt+re),H=tx[ot.body]||{},k=H.x??T.x*nu,q=H.y??lu-T.y*nu,_t=-T.r*cn,It=0,Dt=0,Kt=ot.body==="crawl";Kt&&(_t=0,Dt=68*cn,It=-1),ot.body==="lie"&&(It=.25);let ne=0;!w&&!Zt&&(ne=Math.abs(C(.55))*.025),w==="walk"&&(ne=Math.abs(C(1.3))*.1,_t+=C(1.3)*.08),w==="run"&&(ne=Math.abs(C(2.4))*.22,Dt+=.25),w==="butt"&&(k+=C(2.9)*.14,_t+=C(2.9)*.16,It+=C(2.9)*.2),w==="dance"&&(_t+=C(1)*.2,k+=C(1)*.12,ne=Math.abs(C(2))*.12),w==="shiver"&&(k+=C(11)*.03),w==="row"&&(_t+=C(.5)*.08),w==="flap"&&(ne=Math.abs(C(3))*.06);let se=0,Ge=0,te=0,Ut=0;if(Zt){let dt=(g-Zt.t0)/1e3;if(Zt.name==="jump")if(dt<.95){let re=Math.min(1,Math.max(0,(dt-.12)/.7));se=Math.sin(re*Math.PI)*1.2,Ut=dt<.12?-.18*Math.sin(dt/.12*Math.PI):re>=1?-.15*Math.sin((dt-.82)/.13*Math.PI):.1*Math.sin(re*Math.PI)}else Zt=null;else if(Zt.name==="spin")dt<.9?(Ge=(1-Math.pow(1-dt/.9,3))*Math.PI*2,se=Math.sin(dt/.9*Math.PI)*.3):Zt=null;else if(Zt.name==="fall")dt<1.8?te=Math.min(1,dt/.35)*(dt>1.4?(1.8-dt)/.4:1)*1.45:Zt=null;else if(Zt.name==="bounce")if(dt<1.1){let re=dt*Math.PI*3.6;se=Math.abs(Math.sin(re))*.32*(1-dt/1.1),Ut=(Math.abs(Math.sin(re))<.3?-.14:.06)*(1-dt/1.1)}else Zt=null}f.rotation.y=Rt("turn",ex[ot.turn]??0,.12,.74);let Te=Rt("hy",q+ne,.18,.7);u.position.set(Rt("hx",k),Te+se,0),u.rotation.set(Rt("hrx",Dt),Rt("hry",It)+Ge,Rt("hrz",_t)+te),te&&(u.position.x+=Math.sin(te)*.75);let ie=vt?Math.exp(-(g-vt)/160)*Math.sin((g-vt)/45)*.07:0,rn=Math.max(-.2,Math.min(.2,kt("hy")*1.6+Ut+ie)),wn=Rt("sq",rn,.3,.6);d.scale.set(1-wn*.6,1+wn,1-wn*.6);let We=0,mi=0;We=-tt(D.torso).r*cn,ot.body==="bow"&&(mi=.85),w==="run"&&(mi+=.15);let hn=w?1:1+C(.4)*.02;x.rotation.set(Rt("trx",mi,.12,.74),0,Rt("trz",We,.12,.74)),x.scale.set(1/hn,hn,1/hn),h.visible=!!D.stool,m.rotation.x=Rt("cape",.15+Math.min(.9,Math.abs(kt("hx"))*6+(w==="run"?.8:0)+(se?.5:0))+C(.7)*.05,.1,.8);let Jn=-((sc[ot.head]??0)+(Kt?0:D.head||0))*cn,Le=Kt?-1:0,gi=0;ot.head==="up"&&(Le=-.38),(ot.head==="down"||D.headDown&&(!ot.head||ot.head==="center"))&&(Le=.38),ot.body==="bow"&&(Le-=.3),w||(Jn+=C(.3)*.07,gi+=C(.17)*.12),w==="nod"&&(Le+=C(2.5)*.3),w==="shake"&&(gi+=C(2.2)*.6),w==="dance"&&(Jn+=C(2)*.18),w==="walk"&&(Jn+=C(1.3)*.06),R.rotation.set(Rt("nx",Le,.14,.72),Rt("ny",gi,.14,.72),Rt("nz",Jn,.14,.72)),M.rotation.set(Rt("jx",-kt("hy")*2.2+kt("trx")*2,.22,.62),0,Rt("jz",kt("hx")*2.5-kt("hrz")*1.6,.22,.62));for(let dt of["L","R"]){let re=dt==="L"?1:-1,Se=ot["arm"+dt]||"down",gn=dt==="L"?0:1,ve,De,Me=0,Ce=0;if(Kt&&Se==="down")ve=6*re,De=0,Me=-68;else if(D.absArms&&Se==="down")ve=D.absArms[gn][0],De=D.absArms[gn][1];else{let xi=jg[Se]||er[Se]||er.down;ve=xi[0]*re,De=xi[1]*re;let xn=Qg[Se];xn&&(Me=xn[0],Ce=xn[1])}Se==="down"&&!w&&!Kt&&(ve+=6*re+C(.55,gn)*3*re);let je=dt==="L"?0:Math.PI;if(w==="walk"&&(Me+=C(1.3,je)*32),w==="run"&&(Me+=C(2.4,je)*60,Ce-=70),w==="dance"&&(ve+=(C(2,je)*30+30)*re,Ce-=30),w==="flap"&&(ve+=(.5+.5*C(3))*75*re,De-=C(3)*20*re),w==="swim"&&(Me+=(S*360*.9+(dt==="L"?0:180))%360*-1),w==="clap"&&(Me+=-72,ve+=(dt==="L"?-1:1)*(14+C(3.5)*14),Ce-=20),w==="punch"){let xi=Math.max(0,C(2,je));Me+=-88*xi,Ce+=-80*(1-xi)}w==="row"&&(Me+=C(1)*40-30,Ce-=40),w==="shiver"&&(ve+=C(9,je)*4),Se==="wave"&&(De+=C(2.8)*32*re),Lt["arm"+dt].rotation.set(Rt("ux"+dt,Me*cn,.15,.7),0,Rt("uz"+dt,-ve*cn,.15,.7)),Lt["fore"+dt].rotation.set(Rt("fx"+dt,Ce*cn,.11,.72),0,Rt("fz"+dt,-De*cn,.11,.72))}for(let dt of["L","R"]){let re=dt==="L"?1:-1,Se=ot["leg"+dt]||"down",gn=dt==="L"?0:1,ve,De,Me=0,Ce=0;if(Kt&&Se==="down")Me=-66,Ce=95,ve=6*re,De=0;else if(H.legs&&Se==="down"){let xn=H.legs[gn];Me=xn[0],Ce=xn[1],ve=(xn[2]||0)*re,De=(xn[3]||0)*re}else if(D.absLegs&&Se==="down")ve=D.absLegs[gn][0],De=D.absLegs[gn][1];else{let xn=D.legs?D.legs[gn]:nr[Se]||nr.down;ve=xn[0]*re,De=xn[1]*re}Se==="kick"&&(Me=-65,ve*=.5),Se==="knee"&&(Me=-70,Ce=100,ve=8*re,De=0);let je=dt==="L"?Math.PI:0;w==="walk"&&(Me+=C(1.3,je)*32,Ce+=Math.max(0,C(1.3,je+1.2))*40),w==="run"&&(Me+=C(2.4,je)*58,Ce+=Math.max(0,C(2.4,je+1.2))*90),w==="dance"&&(Ce+=Math.max(0,C(2,je))*40,Me-=Math.max(0,C(2,je))*25),w==="butt"&&(Ce+=20),Lt["leg"+dt].rotation.set(Rt("lx"+dt,Me*cn,.15,.7),0,Rt("lz"+dt,-ve*cn,.15,.7)),Lt["shin"+dt].rotation.set(Rt("kx"+dt,Ce*cn,.12,.72),0,Rt("kz"+dt,-De*cn,.12,.72));let xi=ot.body==="crawl"||ot.body==="lie"||ot.body==="handstand"?0:-(Me+Ce)*cn*.6;Lt["ankle"+dt].rotation.x=Rt("ax"+dt,xi,.15,.7)}f.updateMatrixWorld(!0);for(let dt of["L","R"])ke("arm"+dt,Jt(Lt["arm"+dt],Mt),Jt(Lt["fore"+dt],wt),Jt(Lt["wrist"+dt],jt),"sleeve"+dt),ke("leg"+dt,Jt(Lt["leg"+dt],Mt),Jt(Lt["shin"+dt],wt),Jt(Lt["ankle"+dt],jt),"pant"+dt);Ot.rotation.set(Kt?-.4:0,C(2.2)*.5,0);let un=ot.face||"neutral";g>Ss&&(Ss=g+700+Math.random()*1800,ws=(Math.random()-.5)*.9,di=(Math.random()-.5)*.6);let rr={neutral:.42,angry:.52,sad:.4,surprised:.05,scared:.08,sleepy:.72,cheeky:.38}[un]??.4,dc={surprised:.75,scared:.55,angry:.9}[un]??1,fu={surprised:1.18,scared:1.12}[un]??1,du=La(g);for(let dt of G){if(!dt.g.visible)continue;let re=ws*.5+(dt.sx<0?.18:-.08),Se=di*.4+(dt.sx<0?-.05:.12);un==="sad"&&(Se=-.45),un==="scared"&&(re=Math.sin(g/37+dt.sx)*.2,Se=.1),un==="angry"&&(re=-dt.sx*.25,Se=0),un==="surprised"&&(re*=.3,Se=.05),dt.px=Rt("px"+dt.sx,re,.12,.6)+kt("nz")*4*dt.sx,dt.py=Rt("py"+dt.sx,Se,.12,.6)-kt("hy")*3;let gn=Ae.r*.5,ve=Math.max(-1,Math.min(1,dt.px))*gn,De=Math.max(-1,Math.min(1,dt.py))*gn;dt.pupil.position.set(ve,De,Math.sqrt(Math.max(0,Ae.r*Ae.r-ve*ve-De*De))*.98),dt.pupil.scale.set(dc,dc,.5),dt.shine.position.set(ve+Ae.r*.12,De+Ae.r*.14,dt.pupil.position.z+.012);let Me=Rt("es"+dt.sx,fu,.2,.6);dt.inner.scale.set(Me,Me*1.08,.62);let Ce=Math.max(rr,du),je=un==="angry"?-dt.sx*.45:un==="sad"?dt.sx*.35:un==="neutral"?dt.sx*.08:0;dt.lidPivot.rotation.set(-Math.PI/2+Ce*Math.PI*.95,0,Rt("lt"+dt.sx,je,.2,.6))}let pc=Q.getObjectByName("ahoge");pc&&(pc.rotation.x=Rt("ah",C(.8)*.2-kt("hy")*6,.1,.8)),c.position.x=u.position.x*.8,c.scale.setScalar(Math.max(.45,1-(se+u.position.y-lu>0?se*.35:0))),l?.update(S,g),e.render(s,r)}let Zn=0;function La(g){if(!Zn&&g>ki&&(Zn=g,ki=g+2200+Math.random()*2600),Zn){let S=(g-Zn)/150;return S>=1?(Zn=0,0):Math.sin(S*Math.PI)}return 0}mn=requestAnimationFrame(As);let Da=()=>{l&&(l.cheerUntil=performance.now()+1600)};function sr(){bs=!1,cancelAnimationFrame(mn),Es.disconnect(),s.traverse(g=>{g.isMesh&&!iu.has(g.material)&&(g.geometry?.dispose(),g.material?.dispose())}),e.dispose(),e.forceContextLoss?.()}return ft({skin:"tron"}),X({body:"stand",head:"center",face:"neutral",armL:"down",armR:"down",legL:"down",legR:"down"}),{setPose:X,setLook:ft,el:n,dispose:sr,cheer:Da,is3D:!0}}var fc=[{id:"masoi",url:"masoi.html",name:"Ma S\xF3i",color:"var(--grape)",soft:"var(--grape-soft)",tag:"Suy lu\u1EADn \xB7 L\u1EEBa l\u1ECDc",players:"4\u201316 ng\u01B0\u1EDDi",time:"15\u201330 ph\xFAt",desc:"\u0110\xEAm xu\u1ED1ng, s\xF3i \u0111i s\u0103n. Ng\xE0y l\xEAn, c\u1EA3 l\xE0ng b\u1ECF phi\u1EBFu treo c\u1ED5 k\u1EBB \u0111\xE1ng nghi. C\xF3 Ti\xEAn tri, B\u1EA3o v\u1EC7, Ph\xF9 th\u1EE7y, Th\u1EE3 s\u0103n.",art:()=>`<div class="art-roles">${["wolf","seer","witch","guard","hunter"].map(i=>xc(i,"lg")).join("")}</div>`},{id:"dienta",url:"dienta.html",name:"Di\u1EC5n T\u1EA3 H\xECnh H\xE0i",color:"var(--sky)",soft:"var(--sky-soft)",isNew:!0,tag:"Di\u1EC5n k\u1ECBch c\xE2m \xB7 B\u1EA5m chu\xF4ng",players:"2\u201316 ng\u01B0\u1EDDi",time:"10\u201320 ph\xFAt",desc:"M\u1ED9t ng\u01B0\u1EDDi l\xEAn s\xE2n kh\u1EA5u \u0111i\u1EC1u khi\u1EC3n nh\xE2n v\u1EADt di\u1EC5n t\u1EA3 \u0111\u1EC1 b\xE0i, c\u1EA3 ph\xF2ng tranh nhau b\u1EA5m chu\xF4ng \u0111o\xE1n ch\u1EEF \u0111\u1EC3 ghi \u0111i\u1EC3m.",art:i=>{let t=uu(i);t.setLook({skin:"idol"}),t.setPose({body:"stand",head:"tiltL",face:"happy",armL:"wave",armR:"hip",legL:"step",legR:"down",loop:"dance"})}}],Ms=vc();ar("[data-logo]").forEach(i=>i.innerHTML=Fa.wolf);function uc(){En("#profileBtn").innerHTML=`${Mc(Ms,"sm")}<span>${Oa(Ms.name||"\u0110\u1EB7t t\xEAn")}</span>`}En("#profileBtn").onclick=()=>{let i=En("#overlay");i.innerHTML=`<form class="modal panel" id="pf" style="text-align:left;display:grid;gap:14px">
    <h2 style="margin:0">H\u1ED3 s\u01A1 c\u1EE7a b\u1EA1n</h2>
    <label class="field"><span>T\xEAn hi\u1EC3n th\u1ECB</span><input id="pfName" maxlength="18" value="${Oa(Ms.name)}" placeholder="VD: S\xF3i Gi\xE0" /></label>
    <div id="pfAv"></div>
    <button class="btn primary big" type="submit">L\u01B0u</button></form>`,i.classList.remove("hidden"),bc(En("#pfAv"),Ms,uc),i.onclick=t=>{t.target===i&&i.classList.add("hidden")},En("#pf").onsubmit=t=>{t.preventDefault(),Ms.name=En("#pfName").value.trim(),lr(Ms),uc(),i.classList.add("hidden")}};uc();En("#gameCount").textContent=`${fc.length} game \xB7 s\u1EBD c\xF2n th\xEAm`;En("#gameGrid").innerHTML=fc.map(i=>`
  <a class="card game-card" href="${i.url}" style="--gc:${i.color};--gs:${i.soft}">
    <div class="gc-art" id="art-${i.id}"></div>
    <div class="gc-body">
      <div class="gc-title"><b>${i.name}</b>${i.isNew?'<span class="chip new">M\u1EDAI</span>':""}</div>
      <div class="gc-tag">${i.tag}</div>
      <p>${i.desc}</p>
      <div class="gc-meta"><span class="chip">\u{1F465} ${i.players}</span><span class="chip">\u23F1 ${i.time}</span><span class="chip">\u{1F399} Voice</span></div>
      <span class="btn primary gc-go">Ch\u01A1i ngay \u2192</span>
    </div>
  </a>`).join("")+`
  <div class="card game-card soon"><div class="gc-art"><span style="font-size:64px">\u{1F9E9}</span></div>
    <div class="gc-body"><div class="gc-title"><b>Game ti\u1EBFp theo</b><span class="chip">S\u1EAFp c\xF3</span></div><p>\u0110ang \u0111\u01B0\u1EE3c n\u1EA5u... B\u1EA1n mu\u1ED1n ch\u01A1i g\xEC th\xEC \u0111\u1EC1 xu\u1EA5t nh\xE9!</p></div></div>`;for(let i of fc){let t=En("#art-"+i.id),e=i.art(t);typeof e=="string"&&(t.innerHTML=e)}})();
