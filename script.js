/* ============================================================
   GIRIJARANI MOLLETI — PORTFOLIO SCRIPT
   ============================================================ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── Typing effect ── */
const roles    = ['Full Stack Developer.', 'CSE Undergraduate @ GITAM.', 'Open Source Enthusiast.', 'Problem Solver.'];
let roleIdx    = 0, charIdx = 0, deleting = false;
const typingEl = document.getElementById('typing-text');

function type() {
  const current = roles[roleIdx];
  typingEl.textContent = deleting ? current.slice(0, charIdx - 1) : current.slice(0, charIdx + 1);
  deleting ? charIdx-- : charIdx++;
  if (!deleting && charIdx === current.length) { deleting = true; setTimeout(type, 1600); return; }
  if (deleting && charIdx === 0)               { deleting = false; roleIdx = (roleIdx + 1) % roles.length; }
  setTimeout(type, deleting ? 55 : 90);
}
type();

/* ── Scroll reveal ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Skills data & render ── */
const skills = [
  { cat: 'Frontend',      items: [['React', 85], ['JavaScript', 88], ['HTML & CSS', 95], ['Tailwind CSS', 80]] },
  { cat: 'Backend',       items: [['Node.js', 76], ['Express.js', 74], ['REST APIs', 80], ['JWT Auth', 68]] },
  { cat: 'Database',      items: [['MongoDB', 72], ['Mongoose', 70], ['MongoDB Atlas', 68]] },
  { cat: 'Tools & DevOps',items: [['Git & GitHub', 90], ['Vercel', 78], ['Render', 72], ['VS Code', 95]] },
];

const skillsGrid = document.getElementById('skills-grid');
skills.forEach(cat => {
  const div = document.createElement('div');
  div.className = 'skill-cat';
  div.innerHTML = `<div class="skill-cat-title">${cat.cat}</div>` +
    cat.items.map(([name, pct]) => `
      <div class="skill-item">
        <div class="skill-row"><span>${name}</span><span class="skill-pct">${pct}%</span></div>
        <div class="bar-bg"><div class="bar-fill" data-pct="${pct}"></div></div>
      </div>`).join('');
  skillsGrid.appendChild(div);
});

/* Animate bars on scroll */
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.pct + '%';
      });
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skill-cat').forEach(el => barObserver.observe(el));

/* ── Projects data & render ── */
const GH = 'https://github.com/molletigirijarani-bit';
const projects = [
  {
    emoji: '🌤️',
    bg: 'linear-gradient(135deg,#0f2744,#185fa5)',
    title: 'Weather App',
    desc: 'Real-time weather using OpenWeatherMap API with city search, temperature unit toggle, and a 5-day forecast display.',
    tags: ['React', 'API', 'CSS3'],
    github: GH + '/weather-app',
    live: '#'
  },
  {
    emoji: '✅',
    bg: 'linear-gradient(135deg,#0e2a1e,#1d9e75)',
    title: 'Full Stack To-Do App',
    desc: 'Task manager with user authentication, full CRUD operations, and persistent MongoDB storage via Express REST API.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: GH + '/todo-app',
    live: '#'
  },
  {
    emoji: '📝',
    bg: 'linear-gradient(135deg,#1e0e2a,#8b5cf6)',
    title: 'Notes App',
    desc: 'Clean note-taking app with markdown support, category filtering, live search, and local persistence.',
    tags: ['React', 'Express', 'MongoDB'],
    github: GH + '/notes-app',
    live: '#'
  },
  {
    emoji: '🌐',
    bg: 'linear-gradient(135deg,#1e1a0a,#ba7517)',
    title: 'Portfolio Website',
    desc: 'This portfolio — built from scratch with smooth animations, dark theme, typing effect, and full responsiveness.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    github: GH + '/portfolio',
    live: 'https://molletigirijarani-bit.github.io'
  },
  {
    emoji: '💬',
    bg: 'linear-gradient(135deg,#1e0a0a,#d85a30)',
    title: 'Real-time Chat App',
    desc: 'Live chat with Socket.io, room support, typing indicators, and persistent message history via MongoDB.',
    tags: ['React', 'Socket.io', 'Node.js'],
    github: GH + '/chat-app',
    live: '#'
  },
  {
    emoji: '🔐',
    bg: 'linear-gradient(135deg,#0a1a1e,#38bdf8)',
    title: 'Auth System',
    desc: 'Complete JWT-based authentication with refresh tokens, protected routes, and role-based access control.',
    tags: ['Node.js', 'JWT', 'MongoDB'],
    github: GH + '/auth-system',
    live: '#'
  },
];

const projectsGrid = document.getElementById('projects-grid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'proj-card';
  card.innerHTML = `
    <div class="proj-thumb" style="background:${p.bg}">${p.emoji}</div>
    <div class="proj-body">
      <div class="proj-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
      <div class="proj-title">${p.title}</div>
      <div class="proj-desc">${p.desc}</div>
      <div class="proj-links">
        <a href="${p.github}" target="_blank" class="proj-link"><i class="fab fa-github"></i> GitHub</a>
        <a href="${p.live}" target="_blank" class="proj-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
      </div>
    </div>`;
  projectsGrid.appendChild(card);
});

/* ── Contact form ── */
const form    = document.getElementById('contact-form');
const success = document.getElementById('form-success');
const error   = document.getElementById('form-error');

form.addEventListener('submit', e => {
  e.preventDefault();
  success.style.display = 'none';
  error.style.display   = 'none';

  const name    = form.name.value.trim();
  const email   = form.email.value.trim();
  const message = form.message.value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !emailOk || !message) {
    error.style.display = 'block';
    return;
  }

  /* Replace this block with EmailJS or your backend endpoint */
  success.style.display = 'block';
  form.reset();
});

/* ── Active nav link on scroll ── */
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navAnchors.forEach(a => {
    a.style.color = a.getAttribute('href') === '#' + current ? 'var(--sky)' : '';
  });
});
