

// ============ 1. DARK MODE ============
function toggleDark() {
  document.body.classList.toggle('dark');
}

// ============ 2. PAUSE / PLAY ANIMATION ============//
let paused = false;

function togglePause() {
  paused = !paused;
  const bg = document.querySelector('.bg-anim');
  const btn = document.getElementById('pauseBtn');

  if (bg) bg.style.animationPlayState = paused ? 'paused' : 'running';
  if (btn) btn.innerText = paused ? '▶ Play' : '⏸ Pause';
}

// ============ 3. NAVBAR TOGGLE (MOBILE) ============
function toggleMenu() {
  const menu = document.getElementById("navLinks");
  if (!menu) return;
  menu.classList.toggle("hidden");
  menu.classList.toggle("flex");
}

// Link dabate hi Mobile menu auto band ho jaye
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("navLinks");
    if (menu && window.innerWidth < 768) {
      menu.classList.add("hidden");
      menu.classList.remove("flex");
    }
  });
});

// ============ 4. RESUME & SCROLL ============
function downloadCV() {
  alert('yes-  your Resuming will be Downloaded hold on... (Demo)');
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============ 5. SHOP - CART & SIZE ============
let cart = 0;

function buyNow() {
  alert('Order Placed! Shukriya - Shoes By Abdullah\'s');
}

function addCart() {
  cart++;
  const count = document.getElementById('cartCount');
  if (count) count.innerText = cart;
  alert('Added to Cart! Total: ' + cart);
}

function selectSize(btn) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

// ============ 6. CONTACT FORM ============
function sendMsg(e) {
  e.preventDefault();
  alert('Message Sent Abdullah ko! Main jald reply karu ga.');
  e.target.reset();
}

// ============ 7. FILTER PROJECTS ============
function filterProjects(cat) {
  document.querySelectorAll('#projectsGrid .project-card').forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? 'block' : 'none';
  });
}

// ============ 8. TYPING EFFECT ============
const words = ["Web Developer", "Frontend Developer", "UI Designer", "Freelancer"];
let wi = 0, ci = 0, deleting = false;

function type() {
  const el = document.getElementById('typing');
  if (!el) return;

  const word = words[wi];

  if (!deleting) {
    ci++;
    el.innerText = word.slice(0, ci);
    if (ci === word.length) {
      deleting = true;
      setTimeout(type, 1200);
      return;
    }
  } else {
    ci--;
    el.innerText = word.slice(0, ci);
    if (ci === 0) {
      deleting = false;
      wi = (wi + 1) % words.length;
    }
  }
  setTimeout(type, deleting ? 50 : 100);
}
type();

// ============ 9. COUNTER ANIMATION ============
document.querySelectorAll('.counter').forEach(c => {
  const target = +c.dataset.target;
  let cur = 0;
  const timer = setInterval(() => {
    cur += 2;
    if (cur >= target) {
      cur = target;
      clearInterval(timer);
    }
    c.innerText = cur;
  }, 20);
});

// ============ 10. PARTICLES  ============
const canvas = document.getElementById('particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let W, H, parts = [];

  function resize() {
    W = canvas.width = innerWidth;
    H = canvas.height = innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  for (let i = 0; i < 90; i++) {
    parts.push({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 3 + 1,
      sx: (Math.random() - .5) * .7,
      sy: (Math.random() - .5) * .7
    });
  }

  function draw() {
    if (!paused) {
      ctx.clearRect(0, 0, W, H);
      ctx.fillStyle = '#ff7a18';
      parts.forEach(p => {
        p.x += p.sx;
        p.y += p.sy;
        if (p.x < 0 || p.x > W) p.sx *= -1;
        if (p.y < 0 || p.y > H) p.sy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ============ 11. CURSOR GLOW ============
document.addEventListener('mousemove', e => {
  const g = document.getElementById('cursorGlow');
  if (g) {
    g.style.left = e.clientX + 'px';
    g.style.top = e.clientY + 'px';
  }
});