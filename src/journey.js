import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';
import './journey.css';
gsap.registerPlugin(ScrollTrigger);
const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
const pictures=['/assets/couple-2.jpg','/assets/couple-3.jpg','/assets/couple-4.jpg'];
const mapQuery=encodeURIComponent('Fountain of Freedom Ministries, Bako City, Kwali, Abuja');
const chapters=['The invitation','The beginning','The friendship','The promise','Our forever','The celebration'];
const icons={
 arrow:'<path d="M7 17 17 7M8 7h9v9"/>',
 up:'<path d="M12 19V5M5 12l7-7 7 7"/>',
 pin:'<path d="M12 21s-7-5.6-7-11a7 7 0 0 1 14 0c0 5.4-7 11-7 11Z"/><circle cx="12" cy="10" r="2.5"/>',
 navigate:'<path d="M3 11 21 3l-8 18-2-8-8-2Z"/>',
 phone:'<path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z"/>',
 copy:'<rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/>',
 plus:'<path d="M12 5v14M5 12h14"/>'
};
const icon=n=>`<svg class="icon icon-${n}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n]}</svg>`;
document.querySelector('#app').innerHTML=`
<header><a class="monogram" href="#">J<span>&</span>E</a><span class="header-date">30 OCTOBER 2026 · ABUJA</span><button class="skip" data-jump="1"><span>The wedding details</span>${icon("arrow")}</button></header>
<main><div class="journey"><div class="stage"><canvas id="world" aria-hidden="true"></canvas><div class="vignette"></div><div class="grain"></div>
<section class="chapter opening" data-chapter="0"><p class="eyebrow">SOME THINGS ARE WRITTEN LONG BEFORE WE KNOW</p><h1>A lifetime. <br><i>A moment.</i><br><span>A beginning.</span></h1><div class="invitation"><div class="envelope"><div class="letter"><span>WITH JOYFUL HEARTS</span><strong>Esther <br><i>&</i> Johnmark</strong><small>30 · 10 · 2026</small></div><div class="envelope-face"></div><div class="flap"></div><div class="seal">J&E</div></div></div><button class="enter"><span>Open our story</span>${icon("arrow")}</button><p class="opening-note">Come and be part of our forever.</p></section>
<section class="chapter memory first" data-chapter="1"><div class="chapter-copy"><p class="eyebrow">01 / A GLANCE</p><h2>In a room <br>full of people, <br><i>there was you.</i></h2><p>It started in church, with two glances <br>and a quiet feeling we both noticed.</p></div><span class="memory-caption">ESTHER & JOHNMARK / THE LITTLE MOMENTS</span></section>
<section class="chapter memory second" data-chapter="2"><div class="chapter-copy"><p class="eyebrow">02 / A FRIENDSHIP</p><h2>Then you became <br>my <i>favourite <br>person.</i></h2><p>We started talking and became friends. <br>Somewhere along the way, that friendship <br>grew into something we couldn’t ignore.</p></div></section>
<section class="chapter memory third" data-chapter="3"><div class="chapter-copy"><p class="eyebrow">03 / A PROMISE</p><h2>One day, <br>we chose <br><i>every day.</i></h2><p>Step by step, friendship grew into love. <br>Now, by God’s grace, we are ready <br>to begin forever.</p></div></section>
<section class="chapter covenant" data-chapter="4"><p class="eyebrow">GOD AT THE CENTRE. ALWAYS.</p><h2>Two hearts. <br>One promise. <br><i>Three strands.</i></h2><p>“A cord of three strands is not quickly broken.”</p><small>ECCLESIASTES 4:12</small></section>
<section class="chapter finale" data-chapter="5"><p class="eyebrow">TOGETHER WITH THEIR FAMILIES</p><h2>Esther <i>&</i><br>Johnmark</h2><p>Ojonugwa Esther · Chidiebere Johnmark</p><div class="final-date">30 <span>OCTOBER <br>2026</span></div><p class="eyebrow">OUR NEXT CHAPTER BEGINS WITH YOU</p></section>
<div class="scroll-prompt"><span class="scroll-line"></span><span>SCROLL TO UNFOLD</span></div><div class="chapter-marker"><span id="chapter-number">01</span><span class="marker-line"></span><span id="chapter-name">The invitation</span></div>
</div></div>
<section class="celebration" id="celebration"><div class="section-heading"><p class="eyebrow">THE DAY WE’VE BEEN WAITING FOR</p><h2>Meet us at <br><i>the beginning.</i></h2><p>Friday, 30 October 2026 · 12 noon · Abuja, FCT</p></div>
<div class="event-grid"><article><span class="eyebrow">THE CEREMONY & RECEPTION</span><h3>Fountain of <br>Freedom Ministries</h3><p>Bako City, Kwali Area Council, Abuja, FCT <br>Before/along CAC1 Road</p><p>Holy matrimony begins at 12 noon. <br>Celebration and reception follow at the same venue.</p><div class="map-links"><a target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=${mapQuery}">${icon("pin")}<span>Google Maps</span></a><a target="_blank" rel="noopener" href="https://maps.apple.com/?q=${mapQuery}">${icon("navigate")}<span>Apple Maps</span></a></div></article><article class="rsvp"><span class="eyebrow">WE SAVED YOU A PLACE</span><h3>Be part of <br>our forever.</h3><p>Your presence will make our day. <br>Call to let us know you’re coming.</p><a class="solid-link" href="tel:08166332116">${icon("phone")}<span>RSVP · 0816 633 2116</span></a><a class="alternate" href="tel:08105792676">${icon("phone")}<span>Or call 0810 579 2676</span></a><div class="colours"><span style="--swatch:#651d37">Burgundy</span><span style="--swatch:#bd955d">Gold</span><span style="--swatch:#efbda3">Peach</span><span style="--swatch:#f6eddf">Cream</span></div></article></div>
<div class="family"><p class="eyebrow">WITH THE BLESSING OF OUR FAMILIES</p><p>The family of Late Mr Gabriel Omale and Mrs Stella Omale <br>and the family of Late Mr Paschal Ogbonna and Mrs Dorothy Ogbonna <br>joyfully invite you to the holy matrimony of their children.</p></div>
<details class="gifts"><summary><span>A gift for our new beginning</span>${icon("plus")}</summary><p>Your presence is the greatest gift. If you would also like to support us, our account details are below. Thank you.</p><div class="accounts"><button data-copy="3092484145"><small>FIRST BANK · OGBONNA CHIDIEBERE</small><b>3092484145</b><span>${icon("copy")}Copy</span></button><button data-copy="2069786826"><small>UBA · OMALE ESTHER O.</small><b>2069786826</b><span>${icon("copy")}Copy</span></button></div></details>
<footer><h2>Until forever.</h2><p>JAYESTY 26 · A LOVE STORY WRITTEN BY GRACE</p><button data-jump="0"><span>Experience it again</span>${icon("up")}</button></footer></section></main>
<nav class="chapter-dots" aria-label="Story chapters">${chapters.map((x,i)=>`<button data-jump="${i/6+.075}" aria-label="${x}" title="${x}"></button>`).join('')}</nav><button class="sound" aria-label="Pause theme song" aria-pressed="true"><span class="sound-bars"><i></i><i></i><i></i><i></i></span><span class="sound-label">SOUND ON</span></button><div class="progress-track"><div></div></div><audio src="/assets/wedding-song.mp3" loop autoplay preload="auto"></audio><div class="toast" role="status"></div><div class="welcome" hidden><div class="welcome-card"><p class="eyebrow">ESTHER & JOHNMARK</p><h2>Our story,<br><i>with music.</i></h2><p>Tap to open the invitation and let the song play.</p><button class="welcome-enter"><span class="sound-bars"><i></i><i></i><i></i><i></i></span><span>Enter with sound</span></button><button class="welcome-quiet">Continue without sound</button></div></div>`;
const audio=document.querySelector('audio');
const sound=document.querySelector('.sound');
let soundWanted=true;
function audioState(){const playing=!audio.paused;sound.setAttribute('aria-pressed',String(playing));sound.setAttribute('aria-label',playing?'Pause theme song':'Play theme song');sound.querySelector('.sound-label').textContent=playing?'SOUND ON':soundWanted?'TAP FOR SOUND':'SOUND OFF';sound.classList.toggle('blocked',!playing&&soundWanted);}
audio.addEventListener('play',audioState);audio.addEventListener('pause',audioState);
const startSound=async()=>{if(!soundWanted||!audio.paused)return;try{await audio.play();}catch{}audioState();};
sound.onclick=async()=>{if(audio.paused){soundWanted=true;await startSound();}else{soundWanted=false;audio.pause();}};
const welcome=document.querySelector('.welcome');
const closeWelcome=()=>{welcome.classList.add('leaving');setTimeout(()=>{welcome.hidden=true;},260);};
startSound().then(()=>{if(audio.paused&&soundWanted){welcome.hidden=false;requestAnimationFrame(()=>welcome.classList.add('open'));}});
welcome.querySelector('.welcome-enter').onclick=async()=>{soundWanted=true;await startSound();closeWelcome();};
welcome.querySelector('.welcome-quiet').onclick=()=>{soundWanted=false;audioState();closeWelcome();};
const gestures=['pointerdown','touchend','keydown','wheel'];
const onFirstGesture=e=>{if(sound.contains(e.target))return;startSound().then(()=>{if(!audio.paused)gestures.forEach(g=>removeEventListener(g,onFirstGesture));});};
gestures.forEach(g=>addEventListener(g,onFirstGesture,{passive:true}));
document.addEventListener('visibilitychange',()=>{if(!document.hidden)startSound();});
audioState();
function jump(p){const y=p>=1?document.querySelector('#celebration').offsetTop:(document.querySelector('.journey').offsetHeight-innerHeight)*p;window.scrollTo({top:y,behavior:reduced?'instant':'smooth'});}
document.querySelectorAll('[data-jump]').forEach(b=>b.onclick=()=>jump(Number(b.dataset.jump)));
document.querySelector('.enter').onclick=async()=>{document.querySelector('.opening').classList.add('opened');await startSound();gsap.delayedCall(reduced?.1:.8,()=>jump(.23));};
document.querySelectorAll('[data-copy]').forEach(b=>b.onclick=async()=>{try{await navigator.clipboard.writeText(b.dataset.copy);const t=document.querySelector('.toast');t.textContent='Account number copied';t.classList.add('visible');setTimeout(()=>t.classList.remove('visible'),2200);}catch{}});
let progress=0;let targetProgress=0;
const panels=[...document.querySelectorAll('.chapter')];
const dots=[...document.querySelectorAll('.chapter-dots button')];
const updatePanels=p=>{let active=Math.min(5,Math.floor(p*6));panels.forEach((el,i)=>{const local=p*6-i;const opacity=i===0?Math.max(0,1-local*1.6):Math.min(1,Math.max(0,local*4),Math.max(0,(1-local)*4));el.style.opacity=opacity;el.style.visibility=opacity>.01?'visible':'hidden';el.style.transform=reduced?'none':`translate3d(0,${(0.45-local)*35}px,0)`;el.inert=opacity<.5;el.setAttribute('aria-hidden',String(opacity<.1));});document.querySelector('#chapter-number').textContent=String(active+1).padStart(2,'0');document.querySelector('#chapter-name').textContent=chapters[active];dots.forEach((d,i)=>d.classList.toggle('active',i===active));document.querySelector('.progress-track div').style.transform=`scaleX(${p})`;document.querySelector('.scroll-prompt').style.opacity=p>.94?'0':'1';};
ScrollTrigger.create({trigger:'.journey',start:'top top',end:'bottom bottom',onUpdate:s=>{targetProgress=s.progress;updatePanels(s.progress);}});updatePanels(0);
ScrollTrigger.create({trigger:'.celebration',start:'top 80px',onEnter:()=>document.body.classList.add('details-view'),onLeaveBack:()=>document.body.classList.remove('details-view')});

const canvas=document.querySelector('#world');
let renderer;
try { renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true,powerPreference:'high-performance'}); } catch {}
if(renderer){
 renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.setClearColor(0x160b13,1);renderer.outputColorSpace=THREE.SRGBColorSpace;
 const scene=new THREE.Scene();scene.fog=new THREE.FogExp2(0x160b13,.016);
 const camera=new THREE.PerspectiveCamera(48,innerWidth/innerHeight,.1,180);camera.position.z=12;
 scene.add(new THREE.AmbientLight(0xeecba6,2));const light=new THREE.PointLight(0xffc897,65,40);light.position.set(0,5,5);scene.add(light);
 const gold=new THREE.MeshStandardMaterial({color:0xbc8d58,metalness:.72,roughness:.3});
 const ribbonMaterial=new THREE.MeshStandardMaterial({color:0x8a334e,metalness:.45,roughness:.45,side:THREE.DoubleSide});
 const curvePoints=[];for(let i=0;i<90;i++){const z=10-i*1.35;curvePoints.push(new THREE.Vector3(Math.sin(i*.2)*6,Math.cos(i*.17)*3-1,z));}
 const ribbon=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(curvePoints),400,.025,5,false),gold);scene.add(ribbon);
 const arches=[];for(let i=0;i<14;i++){const arch=new THREE.Mesh(new THREE.TorusGeometry(7.5,.032,6,100),i%2?gold:ribbonMaterial);arch.position.set(Math.sin(i*.6)*1.8,0,7-i*9);arch.rotation.z=i*.19;arch.scale.y=1.3;scene.add(arch);arches.push(arch);}
 const loader=new THREE.TextureLoader();const photos=[];
 const isMobile=()=>innerWidth<700;
 const placement=[{x:3.3,z:-28},{x:-3.3,z:-47},{x:3.3,z:-66}];
 pictures.forEach((src,i)=>{const group=new THREE.Group();const h=6.3,w=h*(i===1?864/1536:1152/1536);const border=new THREE.Mesh(new THREE.BoxGeometry(w+.18,h+.18,.1),gold);group.add(border);loader.load(src,texture=>{texture.colorSpace=THREE.SRGBColorSpace;const photo=new THREE.Mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture}));photo.position.z=.065;group.add(photo);});group.position.set(placement[i].x,0,placement[i].z);group.rotation.y=i%2?.13:-.13;group.rotation.z=i%2?-.055:.055;scene.add(group);photos.push(group);});
 const rings=new THREE.Group();[[-.85,0,.3],[.85,0,-.3],[0,1.15,-.7]].forEach(([x,y,z],i)=>{const r=new THREE.Mesh(new THREE.TorusGeometry(1.55,.09,20,100),gold);r.position.set(x,y,z);r.rotation.y=i*.4;rings.add(r);});rings.position.set(0,0,-85);scene.add(rings);
 const petals=new THREE.Group();const petalGeo=new THREE.PlaneGeometry(.12,.19);const petalMat=new THREE.MeshStandardMaterial({color:0xd7a080,side:THREE.DoubleSide,transparent:true,opacity:.65});for(let i=0;i<210;i++){const p=new THREE.Mesh(petalGeo,petalMat);p.position.set((Math.random()-.5)*25,(Math.random()-.5)*17,15-Math.random()*135);p.rotation.set(Math.random()*3,Math.random()*3,Math.random()*3);petals.add(p);}scene.add(petals);
 const dustGeo=new THREE.BufferGeometry();const dustPositions=new Float32Array(1500);for(let i=0;i<500;i++){dustPositions[i*3]=(Math.random()-.5)*35;dustPositions[i*3+1]=(Math.random()-.5)*23;dustPositions[i*3+2]=15-Math.random()*145;}dustGeo.setAttribute('position',new THREE.BufferAttribute(dustPositions,3));scene.add(new THREE.Points(dustGeo,new THREE.PointsMaterial({color:0xe6bd83,size:.035,transparent:true,opacity:.7})));
 const resize=()=>{camera.aspect=innerWidth/innerHeight;camera.updateProjectionMatrix();renderer.setSize(innerWidth,innerHeight,false);photos.forEach((p,i)=>{p.position.x=isMobile()?0:placement[i].x;p.position.y=isMobile()?2.5:0;p.scale.setScalar(isMobile()?.65:1);});};resize();addEventListener('resize',resize);
 let time=0;const tick=()=>{progress=reduced?targetProgress:THREE.MathUtils.lerp(progress,targetProgress,.07);time+=.007;photos.forEach((photo,i)=>{photo.visible=reduced?Math.floor(progress*6)===i+1:progress>(.1+i*.14);if(reduced)photo.position.z=0;});camera.position.z=reduced?12:12-progress*112;camera.position.x=reduced?0:Math.sin(progress*Math.PI*4)*.7;camera.position.y=reduced?0:Math.sin(progress*Math.PI*2)*.3;camera.rotation.z=reduced?0:Math.sin(progress*Math.PI*4)*.025;light.position.z=camera.position.z-3;if(reduced){rings.position.z=0;rings.visible=Math.floor(progress*6)===4;}if(!reduced){petals.children.forEach((p,i)=>{p.rotation.z+=.0015;p.rotation.y+=.002;p.position.y+=Math.sin(time+i)*.0015;});rings.rotation.z=Math.sin(time*.3)*.1;}renderer.render(scene,camera);};gsap.ticker.add(tick);
}
if(reduced)document.body.classList.add('reduced-motion');
