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
  { cat: 'Frontend',      items: [['React', 50], ['JavaScript', 80], ['HTML & CSS', 95]] },
  { cat: 'Backend',       items: [['Node.js', 56], ['Express.js',45]] },
  { cat: 'Database',      items: [['MongoDB', 72], ['MongoDB Atlas', 68]] },
  { cat: 'Tools & DevOps',items: [['Git & GitHub', 80],['VS Code', 95]] },
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
    emoji: '✅',

    bg: 'linear-gradient(135deg,#0e2a1e,#1d9e75)',

    title: 'To-Do List App',

    desc:
    'Modern animated task manager with colorful task cards, smooth animations, responsive design, and dynamic task handling.',

    tags: ['HTML', 'CSS', 'JavaScript'],

    live:
    'https://molletigirijarani-bit.github.io/to-do-list/',

  },

  {
    emoji: '📝',

    bg: 'linear-gradient(135deg,#1e0e2a,#8b5cf6)',

    title: 'Notes App',

    desc:
    'Stylish notes mini app with glassmorphism UI, colorful note cards, animations, and responsive design.',

    tags: ['HTML', 'CSS', 'JavaScript'],

    live:
    'https://molletigirijarani-bit.github.io/Notes-App/',

  },

  {
    emoji: '🎯',

    bg: 'linear-gradient(135deg,#0f2744,#185fa5)',

    title: 'Number Guessing Game',

    desc:
    'Interactive guessing game with modern UI, smooth animations, responsive design, and score tracking.',

    tags: ['HTML', 'CSS', 'JavaScript'],

    live:
    'https://molletigirijarani-bit.github.io/guessing-Number/',

  }
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
        <a href="${p.live}" target="_blank" class="proj-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
      </div>
    </div>`;
  projectsGrid.appendChild(card);
});

/* ── Contact form ── */
emailjs.init("U0NoB1uZGk5m4tw6V");

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const message = document.querySelector("#message").value;

  emailjs.send(
    "service_evdungs",
    "template_73rtdad",
    {
      name: name,
      email: email,
      message: message,
    }
  )
  .then(() => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch((error) => {
    alert("Failed to send message.");
    console.log(error);
  });
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
