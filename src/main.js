import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.css';

gsap.registerPlugin(ScrollTrigger);

const images = ['/assets/couple-2.jpg', '/assets/couple-3.jpg', '/assets/couple-4.jpg'];
const googleMaps = 'https://www.google.com/maps/search/?api=1&query=Fountain%20of%20Freedom%20Ministries%2C%20Bako%20City%2C%20Kwali%2C%20Abuja';
const appleMaps = 'https://maps.apple.com/?q=Fountain%20of%20Freedom%20Ministries%2C%20Bako%20City%2C%20Kwali%2C%20Abuja';
const names = ['The Film', 'The Heirloom', 'The Constellation'];
const variant = Math.min(2, Math.max(0, Number(new URLSearchParams(location.search).get('design') || 0)));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let audio;

const icon = {
  arrow: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h15m-6-6 6 6-6 6"/></svg>',
  sound: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4Zm13-1c1.5 1 2.2 2.3 2.2 4s-.7 3-2.2 4"/></svg>',
  pin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2.3"/></svg>'
};

function hero(v) {
  if (v === 0) return `
    <section class="hero film-hero" id="top">
      <div class="film-photo" role="img" aria-label="Esther and Johnmark together"></div>
      <div class="film-grain"></div>
      <div class="hero-inner film-inner">
        <p class="eyebrow hero-reveal">A love story written by grace</p>
        <p class="film-intro hero-reveal">Together with their families</p>
        <h1 class="film-title hero-reveal"><span>Esther</span><em>&</em><span>Johnmark</span></h1>
        <div class="film-bottom hero-reveal"><span>30 OCTOBER 2026</span><i></i><span>ABUJA · NIGERIA</span></div>
        <a class="round-cue" href="#story" aria-label="Explore their story">↓</a>
      </div>
      <span class="vertical-mark">JAYESTY 26 / A CELEBRATION OF LOVE</span>
    </section>`;
  if (v === 1) return `
    <section class="hero heirloom-hero" id="top">
      <div class="paper-frame">
        <div class="paper-topline"><span>THE WEDDING OF</span><span>FRIDAY · 30 OCTOBER 2026</span></div>
        <div class="paper-grid">
          <div class="paper-copy"><p class="eyebrow hero-reveal">With joyful hearts</p><h1 class="paper-title hero-reveal">Esther <i>&</i><br>Johnmark</h1><p class="paper-description hero-reveal">A promise of forever,<br>made in the presence of God<br>and the people we love.</p><a class="text-link hero-reveal" href="#details">Discover the day <span>${icon.arrow}</span></a></div>
          <div class="paper-image-wrap"><img src="${images[0]}" alt="Ojonugwa Esther and Chidiebere Johnmark" class="paper-image"/><div class="paper-seal">E <span>✦</span> J</div></div>
        </div>
        <div class="paper-bottomline"><span>ABUJA, NIGERIA</span><span>INVITATION NO. 30 · 10 · 26</span></div>
      </div>
    </section>`;
  return `
    <section class="hero constellation-hero" id="top">
      <canvas id="starfield" aria-hidden="true"></canvas><div class="cosmic-glow"></div>
      <div class="constellation-orbit orbit-one"></div><div class="constellation-orbit orbit-two"></div>
      <div class="cosmic-photo"><img src="${images[1]}" alt="Esther and Johnmark smiling together"/></div>
      <div class="cosmic-copy"><p class="eyebrow hero-reveal">THE STARS ALIGNED · 30.10.2026</p><h1 class="cosmic-title hero-reveal">Some stories<br>are <em>written</em><br>in the stars.</h1><p class="cosmic-names hero-reveal">Ojonugwa Esther <span>✦</span> Chidiebere Johnmark</p><a class="cosmic-cta hero-reveal" href="#story">Enter our story ${icon.arrow}</a></div>
      <p class="cosmic-coordinate">9°03′ N &nbsp; 7°29′ E &nbsp; / &nbsp; ABUJA</p>
    </section>`;
}

function details() { return `
  <section class="story-section reveal-section" id="story"><div class="section-shell story-grid">
    <div class="story-heading"><span class="overline">01 / OUR STORY</span><h2>From a glance<br>to <em>forever.</em></h2></div>
    <div class="story-body"><div class="decorative-star">✦</div><p>It all started in church. We saw each other, liked each other from afar, and eventually began talking.</p><p>We became friends for a while, and as our friendship grew, we realised we really liked each other. Then we started dating. Through every step, our friendship grew into love, and today, by God’s grace, here we are, ready to begin forever.</p><span class="signature">Esther & Johnmark</span></div>
  </div></section>
  <section class="quote-section reveal-section"><div class="quote-image"><img src="${images[2]}" alt="Esther and Johnmark together" loading="lazy" /></div><div class="quote-panel"><span class="overline">A CORD OF THREE STRANDS</span><blockquote>“Two are better than one... A cord of three strands is not quickly broken.”</blockquote><p>ECCLESIASTES 4:9 to 10, 12</p><div class="quote-rule"></div><p class="quote-note">May Christ remain at the centre of our home, our friendship and our forever.</p></div></section>
  <section class="date-section reveal-section" id="details"><div class="section-shell date-grid"><div><span class="overline">02 / SAVE THE DATE</span><h2>Come celebrate<br><em>with us.</em></h2><p class="date-invite">The families of Late Mr Gabriel Omale and Mrs Stella Omale, and Late Mr Paschal Ogbonna and Mrs Dorothy Ogbonna, joyfully invite you to the holy matrimony of their children.</p></div><div class="date-card"><div class="date-big">30</div><div class="date-card-bottom"><span>OCTOBER<br>2026</span><span>FRIDAY<br>12 NOON</span></div><div class="countdown" aria-label="Time until wedding"><div><strong id="days">--</strong><small>DAYS</small></div><div><strong id="hours">--</strong><small>HOURS</small></div><div><strong id="minutes">--</strong><small>MINUTES</small></div></div></div></div></section>
  <section class="venue-section reveal-section" id="venue"><div class="section-shell"><div class="venue-top"><span class="overline">03 / THE CELEBRATION</span><h2>Where forever<br><em>begins.</em></h2></div><div class="venue-grid"><div class="venue-line"><span class="venue-index">01</span><div><h3>Holy Matrimony</h3><p>Friday, 30 October 2026<br>12:00 noon</p></div></div><div class="venue-line"><span class="venue-index">02</span><div><h3>Celebration & Reception</h3><p>Follows the ceremony at the same venue.<br>Come for love, food, music and joyful memories.</p></div></div><div class="venue-place"><div class="pin-icon">${icon.pin}</div><span class="overline">THE VENUE</span><h3>Fountain of Freedom<br>Ministries</h3><p>Bako City, Kwali Area Council<br>Abuja, FCT · Before/along CAC1 Road</p><div class="map-actions"><a href="${googleMaps}" target="_blank" rel="noopener noreferrer">Google Maps ${icon.arrow}</a><a href="${appleMaps}" target="_blank" rel="noopener noreferrer">Apple Maps ${icon.arrow}</a></div></div></div></div></section>
  <section class="gallery-section reveal-section" id="moments"><div class="section-shell"><div class="gallery-head"><div><span class="overline">04 / LITTLE MOMENTS</span><h2>Us, along the way.</h2></div><span class="gallery-aside">THREE PHOTOGRAPHS<br>ONE BEAUTIFUL STORY</span></div><div class="gallery-grid">${images.map((src,i)=>`<button class="gallery-item gallery-${i+1}" data-photo="${i}" aria-label="View photo ${i+1}"><img src="${src}" alt="Esther and Johnmark, moment ${i+1}" loading="lazy"/><span>0${i+1} / 03</span></button>`).join('')}</div></div></section>
  <section class="final-section reveal-section" id="rsvp"><div class="section-shell final-grid"><div><span class="overline">05 / WE HOPE TO SEE YOU</span><h2>We saved you<br><em>a place.</em></h2><p>Your presence will make our day even more special. Kindly confirm your attendance.</p><div class="rsvp-actions"><a class="primary-button" href="tel:08166332116">Call to RSVP ${icon.arrow}</a><a class="secondary-button" href="tel:08105792676">Alternate number</a></div><p class="phone-note">0816 633 2116 &nbsp; · &nbsp; 0810 579 2676</p></div><div class="palette-card"><span class="overline">COLOUR OF THE DAY</span><h3>Come in<br>our colours.</h3><div class="swatches"><div><i style="background:#641d39"></i><span>BURGUNDY</span></div><div><i style="background:#b18b4c"></i><span>GOLD</span></div><div><i style="background:#e9b99f"></i><span>PEACH</span></div><div><i style="background:#f6eedf"></i><span>CREAM</span></div></div></div></div></section>
  <section class="gift-section reveal-section"><div class="section-shell gift-shell"><span class="overline">A GIFT FROM THE HEART</span><h2>Your presence is<br><em>our greatest gift.</em></h2><p>If you would also like to support our new beginning, you may use the details below. Thank you for your love, prayers and generosity.</p><div class="gift-accounts"><div><span>FIRST BANK</span><strong>Ogbonna Chidiebere</strong><button data-copy="3092484145">3092484145 <small>CLICK TO COPY</small></button></div><div><span>UBA</span><strong>Omale Esther O.</strong><button data-copy="2069786826">2069786826 <small>CLICK TO COPY</small></button></div></div></div></section>
  <footer><span>J<span class="amp">&</span>E</span><p>Esther & Johnmark · 30 October 2026 · Abuja</p><a href="#top">BACK TO TOP ↑</a></footer>`; }

function render() {
  document.body.dataset.design = String(variant);
  document.querySelector('#app').innerHTML = `
    <header class="site-nav"><a class="brand" href="#top">J<span>✦</span>E <small>2026</small></a><nav aria-label="Main navigation"><a href="#story">Our story</a><a href="#details">The day</a><a href="#venue">Venue</a><a href="#moments">Moments</a></nav><a class="nav-rsvp" href="#rsvp">RSVP ${icon.arrow}</a></header>
    ${hero(variant)}${details()}
    <button class="music-button" type="button" aria-label="Play theme song" aria-pressed="false"><span class="music-icon">${icon.sound}</span><span class="music-label">PLAY OUR SONG</span><i class="music-bars"><b></b><b></b><b></b></i></button>
    <div class="design-picker" role="group" aria-label="Choose design demo"><div class="picker-caption"><span>DESIGN STUDIES</span><small>Choose a direction</small></div>${names.map((name,i)=>`<a href="?design=${i}" class="picker-option ${i===variant?'selected':''}" ${i===variant?'aria-current="page"':''}><b>0${i+1}</b><span>${name}</span></a>`).join('')}</div>
    <dialog id="photo-dialog"><button class="lightbox-close" aria-label="Close photo">×</button><img alt="Esther and Johnmark"/><div class="lightbox-controls"><button data-move="-1">← PREVIOUS</button><span id="photo-count"></span><button data-move="1">NEXT →</button></div></dialog>
    <div id="toast" role="status" aria-live="polite"></div>
    <audio id="theme-song" src="/assets/wedding-song.mp3" loop preload="none"></audio>`;
  bind(); animate(); updateCountdown(); setInterval(updateCountdown, 30000); if (variant === 2) initThree();
}

function bind() {
  audio = document.querySelector('#theme-song');
  const music = document.querySelector('.music-button');
  music.addEventListener('click', async () => {
    if (audio.paused) { try { await audio.play(); music.classList.add('playing'); music.setAttribute('aria-label','Pause theme song'); music.setAttribute('aria-pressed','true'); music.querySelector('.music-label').textContent='PAUSE OUR SONG'; } catch { toast('Your browser could not play the song.'); } }
    else { audio.pause(); music.classList.remove('playing'); music.setAttribute('aria-label','Play theme song'); music.setAttribute('aria-pressed','false'); music.querySelector('.music-label').textContent='PLAY OUR SONG'; }
  });
  document.querySelectorAll('[data-copy]').forEach(btn => btn.addEventListener('click', async () => { try { await navigator.clipboard.writeText(btn.dataset.copy); toast('Account number copied'); } catch { toast('Select the number to copy it'); } }));
  const dialog = document.querySelector('#photo-dialog'); let activePhoto = 0;
  function showPhoto(i) { activePhoto = (i + images.length) % images.length; dialog.querySelector('img').src = images[activePhoto]; dialog.querySelector('#photo-count').textContent = `0${activePhoto+1} / 0${images.length}`; }
  document.querySelectorAll('[data-photo]').forEach(btn => btn.addEventListener('click', () => { showPhoto(Number(btn.dataset.photo)); dialog.showModal(); }));
  dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
  dialog.querySelectorAll('[data-move]').forEach(btn => btn.addEventListener('click', () => showPhoto(activePhoto + Number(btn.dataset.move))));
  dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
  document.addEventListener('keydown', e => { if (dialog.open) { if (e.key === 'ArrowRight') showPhoto(activePhoto+1); if (e.key === 'ArrowLeft') showPhoto(activePhoto-1); return; } if (e.key >= '1' && e.key <= '3' && !e.altKey && !e.metaKey && !e.ctrlKey) location.href = `?design=${Number(e.key)-1}`; });
}

function toast(message) { const el = document.querySelector('#toast'); el.textContent = message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer = setTimeout(() => el.classList.remove('show'), 2500); }
function updateCountdown() { const diff = Math.max(0, new Date('2026-10-30T12:00:00+01:00') - new Date()); const day = Math.floor(diff/86400000), hour = Math.floor(diff/3600000)%24, minute = Math.floor(diff/60000)%60; [['days',day],['hours',hour],['minutes',minute]].forEach(([id,value]) => { const el = document.getElementById(id); if (el) el.textContent=String(value).padStart(2,'0'); }); }

function animate() {
  if (reduceMotion) return;
  gsap.from('.hero-reveal', { y: 40, opacity: 0, duration: 1.2, stagger: .13, ease: 'power3.out', delay: .2 });
  if (variant === 1) gsap.from('.paper-image-wrap', { clipPath: 'inset(0 100% 0 0)', duration: 1.5, ease: 'power3.inOut', delay: .25 });
  if (variant === 2) gsap.from('.cosmic-photo', { scale: .82, opacity: 0, rotate: -8, duration: 1.8, ease: 'power3.out', delay: .15 });
  gsap.utils.toArray('.reveal-section').forEach(section => {
    const targets = section.querySelectorAll('h2, .overline, .story-body, .date-card, .venue-line, .venue-place, .gallery-item, .palette-card, .gift-accounts, .quote-panel');
    gsap.from(targets, { y: 44, opacity: 0, duration: .85, stagger: .08, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 82%', once: true } });
  });
  if (variant === 0) gsap.to('.film-photo', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '.film-hero', start: 'top top', end: 'bottom top', scrub: true } });
}

async function initThree() {
  let THREE;
  try { THREE = await import('three'); } catch { return; }
  const canvas = document.querySelector('#starfield');
  const scene = new THREE.Scene(); const camera = new THREE.PerspectiveCamera(55, 1, .1, 100); camera.position.z = 9;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true }); } catch { return; }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
  const count = 340; const positions = new Float32Array(count*3);
  for (let i=0;i<count;i++) { const angle=Math.random()*Math.PI*2, radius=2.2+Math.random()*6; positions[i*3]=Math.cos(angle)*radius; positions[i*3+1]=Math.sin(angle)*radius*.78; positions[i*3+2]=(Math.random()-.5)*3; }
  const geometry = new THREE.BufferGeometry(); geometry.setAttribute('position', new THREE.BufferAttribute(positions,3));
  const points = new THREE.Points(geometry,new THREE.PointsMaterial({ color:0xe7c693,size:.032,transparent:true,opacity:.72,sizeAttenuation:true })); scene.add(points);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(3.25,.008,4,160),new THREE.MeshBasicMaterial({color:0xb28a61,transparent:true,opacity:.34})); ring.rotation.x=.35; ring.rotation.y=-.22; scene.add(ring);
  function resize(){ const h=canvas.clientHeight,w=canvas.clientWidth;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix(); } resize(); window.addEventListener('resize',resize);
  let frame; function tick(){ if (!reduceMotion) { points.rotation.z += .00018; ring.rotation.z -= .00012; } renderer.render(scene,camera); frame=requestAnimationFrame(tick); } tick();
}

render();
