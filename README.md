# Girijarani Molleti — Portfolio Website

A modern, responsive personal portfolio built with **HTML, CSS & JavaScript** — no build tools required. Deployable directly to GitHub Pages.

## 🚀 Live Demo
[https://molletigirijarani-bit.github.io](https://molletigirijarani-bit.github.io)

## 📁 Project Structure
```
girijarani-portfolio/
├── index.html      # Main HTML — all sections
├── style.css       # Complete stylesheet (CSS variables, responsive)
├── script.js       # Typing effect, skill bars, project cards, form
├── assets/
│   ├── img/        # Place your profile photo here (e.g. profile.jpg)
│   └── icons/      # Any custom icons
└── README.md
```

## ✨ Features
- Dark professional theme with glassmorphism cards
- Typing animation cycling through roles
- Animated skill progress bars (scroll-triggered)
- Dynamically rendered project cards
- Education & experience timeline
- Contact form with validation
- Responsive mobile design + hamburger menu
- Smooth scroll reveal animations
- Active nav link highlighting
- SEO meta tags + Open Graph

## 🛠️ Tech Stack
- HTML5, CSS3, Vanilla JavaScript
- Google Fonts (Space Mono + Sora)
- Font Awesome 6 (icons)
- No frameworks, no npm, no build step

## 📦 Deploy to GitHub Pages

1. Create a repo named `molletigirijarani-bit.github.io`
2. Upload all files to the root of that repo
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be live at `https://molletigirijarani-bit.github.io`

## ✏️ Customization

### Update projects
Edit the `projects` array in `script.js` — add your real GitHub repo links and live demo URLs.

### Add contact backend
Replace the form submit block in `script.js` with [EmailJS](https://www.emailjs.com/) for free email sending without a backend:
```js
emailjs.send('service_id', 'template_id', { name, email, message });
```

### Add your profile photo
Place your photo at `assets/img/profile.jpg` and add this to the Hero section in `index.html`:
```html
<img src="assets/img/profile.jpg" alt="Girijarani Molleti" class="hero-photo" />
```

## 📄 License
MIT — free to use and modify.
