# Sasi Kumar Reddy Siddala — Developer Portfolio

A fully rebuilt, production-grade portfolio site for **Sasi Kumar Reddy Siddala** — Mainframe Developer · Java & Spring Boot Backend · AI Engineer.

## 🚀 Live Site
[https://sasisiddala.github.io/Portfolio/](https://sasisiddala.github.io/Portfolio/)

---

## 📋 Setup — Before Pushing to GitHub

### 1. Add your Resume PDF
Place your resume file in the `assets/` folder:
```
assets/Sasi_Kumar_Reddy_Siddala_Resume.pdf
```
The download buttons in the hero and nav are already wired to this path.

### 2. Update the Contact Form (optional)
To enable the contact form, create a free account at [formspree.io](https://formspree.io), create a form, and replace `YOUR_FORM_ID` in `index.html`:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

### 3. Add OG Thumbnail (optional)
For social link previews, add a `1200×630` image to:
```
assets/og-thumbnail.png
```

---

## 🗂 File Structure
```
sasi-portfolio/
├── index.html              ← Main single-page HTML
├── css/
│   ├── main.css            ← Design system, components
│   ├── animations.css      ← Keyframes, scroll-reveal
│   └── responsive.css      ← Breakpoints (320–1920px)
├── js/
│   └── main.js             ← Nav, typewriter, scroll, reveal
├── assets/
│   ├── Sasi_Kumar_Reddy_Siddala_Resume.pdf  ← ADD THIS FILE
│   └── og-thumbnail.png                      ← Optional
└── README.md
```

---

## 🌐 Deploy to GitHub Pages

1. Push all files to the `main` branch of your repo:
   ```bash
   git add .
   git commit -m "Portfolio v1.0 — full rebuild"
   git push origin main
   ```
2. In your GitHub repo, go to **Settings → Pages**
3. Set Source to **Deploy from a branch** → `main` / `/ (root)`
4. Your site will be live at `https://sasisiddala.github.io/Portfolio/`

---

## ✨ Features
- Dark professional theme (near-black + cyan accent)
- Mainframe Technologies (COBOL/JCL/DB2/CICS) prominently featured
- Typewriter hero: AI Engineer → Backend Developer → Mainframe Developer
- Frosted-glass sticky nav with scroll progress bar
- Scroll-reveal animations (IntersectionObserver)
- Responsive: 320px → 1920px
- One-click resume download from hero + nav
- Vanilla JS only — no external JS dependencies
