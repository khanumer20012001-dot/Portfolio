# Comprehensive Portfolio Website Specification (Task 2 Blueprint)

## 1. Project Overview & Compliance Checklist
This document serves as the master blueprint for building a fully responsive, semantic, single-page portfolio web application. 
* **Task 2 Requirements Addressed:**
  * Semantic HTML5 structural blocks (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
  * Modern CSS Grid and Flexbox layout systems.
  * Mobile-first responsive fluid design using CSS media queries.
  * Interactive mobile navigation (hamburger menu).
  * High-end visual aesthetic derived from professional UI layouts.

---

## 2. Design System & Color Palette

### Color Palette (Monochrome & High Contrast)
* **Primary Dark (Charcoal/Black):** `#111111` (Used for dark containers, footer, text accents)
* **Secondary Dark (Graphite):** `#1a1a1a` (Used for background cards and hover states)
* **Primary Light (Off-White/Silver):** `#f4f4f4` (Used for primary section backgrounds)
* **Pure White:** `#ffffff` (Used for text on dark backgrounds and card surfaces)
* **Border/Accent Lines:** `#222222` (Dark mode borders) and `#dcdcdc` (Light mode borders)

### Typography
* **Font Family:** `Inter`, `Montserrat`, or system-ui sans-serif stack.
* **Heading Style:** Uppercase, tracked/spaced letter-spacing (`letter-spacing: 2px`).

---

## 3. Structural Wireframe & HTML5 Layout

### Section 1: Navigation Bar (`<header>` & `<nav>`)
* **Layout:** Flexbox (space-between), fixed or sticky positioning.
* **Content:**
  * Logo: Monogram text `[ U ]`
  * Links: `About me`, `Skills`, `Portfolio`, `Contact Me` (Button style)
* **Mobile Behavior:** Collapses into a hamburger icon (`☰`) that opens a slide-out mobile menu using CSS/JS toggles.

### Section 2: Hero Section (`<section id="hero">`)
* **Layout:** CSS Grid (2 columns on desktop, 1 column stacked on mobile).
* **Left Container (Light Theme `#f4f4f4`):**
  * Small Subtitle: "Hi, I am"
  * Main Heading (`<h1>`): **Umer Ali Khan Lodhi**
  * Sub-headline: **Software Developer / React & React Native Specialist**
  * Social Icons (Email, GitHub, LinkedIn).
* **Right Container (Dark Theme `#111111`):**
  * Professional portrait image placeholder.
  * Action Button: `CONTACT ME` (Scrolls to contact section).

### Section 3: Highlight Banner (`<section id="banner">`)
* **Layout:** Dark full-width banner block using Flexbox.
* **Content:**
  * Title: **IT BERRIES / SOFTWARE DEVELOPMENT**
  * Description: Final-year BS Computer Science student at Sir Syed University of Engineering and Technology (SSUET) with hands-on industry experience in React Native mobile development.
  * Action link: `READ MORE`

### Section 4: About Me & Services (`<section id="about">`)
* **Layout:** Centered header, followed by a 3-column CSS Grid for service blocks.
* **Content Cards:**
  1. **DESIGN:** Creating UI components and clean layouts inspired by Figma design specifications.
  2. **DEVELOPMENT:** Building responsive web apps and cross-platform mobile apps using React and React Native.
  3. **MAINTENANCE:** Version control management with Git, bug fixing, and agile workflows.

### Section 5: Skills Section (`<section id="skills">`)
* **Layout:** CSS Grid container for skill cards/badges.
* **Sub-categories:**
  * **USING NOW:** HTML5, CSS3, JavaScript, React, React Native, MySQL, Git, Figma.
  * **CS FUNDAMENTALS:** Data Structures, Object-Oriented Programming (OOP).
  * **LANGUAGES:** English (Professional), Urdu (Native).

### Section 6: Portfolio / Experience Showcase (`<section id="portfolio">`)
* **Layout:** Filter tabs (`ALL` | `EXPERIENCE` | `PROJECTS`) with a responsive CSS Grid layout for project cards.
* **Cards Content:**
  * **React Native Front-End Trainee @ 360Xpert Solutions** (Mar 2026 – Present): Built and maintained reusable UI components, collaborated with backend engineers, and applied Git-based version control.
  * **Education:** BS Computer Science (BSCS) at Sir Syed University of Engineering and Technology (SSUET) — Expected 2026.

### Section 7: Contact Section (`<section id="contact">`)
* **Layout:** Single-column centered form layout using Flexbox.
* **Form Fields (Semantic `<form>`):**
  * `ENTER YOUR NAME` (Text input)
  * `ENTER YOUR EMAIL` (Email input)
  * `PHONE NUMBER` (Tel input)
  * `YOUR MESSAGE` (Textarea)
  * Submit Button (`SUBMIT`)

### Section 8: Footer (`<footer>`)
* **Content:**
  * `BACK TO TOP` anchor link.
  * Social media icons.
  * Copyright notice: `© 2026 Umer Ali Khan Lodhi. All Rights Reserved.`

---

## 4. Responsive Design & Media Query Rules

Implement mobile-first design scaling via CSS media queries:

* **Mobile Devices (Default / max-width: 768px):**
  * Stack grid layouts into single-column flows (`grid-template-columns: 1fr`).
  * Hide standard navigation links behind an interactive mobile drawer menu toggle.
  * Adjust padding and font-sizes for smaller viewports.
* **Tablets & Desktops (min-width: 769px):**
  * Expand grid layouts to 2 or 3 columns.
  * Display full horizontal navigation bar.
  * Enable multi-column split layout for the Hero section.