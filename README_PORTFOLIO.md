# 🚀 Zarif's Portfolio Website

A modern, visually stunning portfolio website featuring a futuristic dark theme with terminal-style aesthetics, geometric animations, and interactive elements. Built with pure HTML, CSS, and JavaScript.

## ✨ Features

### 🎨 Design
- **Dark Theme**: Sophisticated dark color scheme with cyan and purple accents
- **Terminal Aesthetics**: Code-style terminal windows and monospace fonts
- **Geometric Patterns**: Animated shapes and particle systems
- **Gradient Overlays**: Smooth color transitions and glowing effects
- **Responsive Design**: Fully responsive across all devices

### 🎭 Animations
- **Glitch Text Effect**: Eye-catching title animation
- **Particle System**: Interactive canvas-based particle animation
- **Smooth Transitions**: Butter-smooth page transitions and hover effects
- **Scroll Animations**: Elements fade in as you scroll
- **Loading Screen**: Professional preloader with progress bar
- **Typing Effect**: Realistic terminal typing animation

### 🎯 Interactive Elements
- **Custom Cursor**: Unique cursor design for desktop (pointer with ring)
- **Smooth Scrolling**: Seamless navigation between sections
- **Animated Stats**: Counter animation for statistics
- **Skill Bars**: Animated progress bars showing skill levels
- **Contact Form**: Fully functional with validation
- **Mobile Menu**: Responsive hamburger menu

### 📱 Sections
1. **Hero Section**: Eye-catching introduction with glitch effects
2. **About Section**: Personal information with code-style presentation
3. **Projects Section**: Showcase of 3 featured projects with hover effects
4. **Skills Section**: Technology stack with animated progress bars
5. **Contact Section**: Multiple contact methods and working form
6. **Footer**: Social links and additional information

## 🛠️ Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript (ES6+)**: Interactive features and DOM manipulation
- **Google Fonts**: IBM Plex Mono & Space Grotesk
- **Canvas API**: Particle animation system

## 🚀 Quick Start

1. **Clone or Download** the repository
2. **Open** `index.html` in your browser
3. **That's it!** No build process or dependencies required

```bash
# If using a local server
python -m http.server 8000
# or
npx serve
```

## 📂 File Structure

```
Portfolio/
│
├── index.html          # Main HTML file
├── styles.css          # All styling (organized with comments)
├── script.js           # Interactive features and animations
├── cv.md              # Original CV content
├── README.md          # This file
│
└── resources/         # Inspiration resources folder
    └── kprverse.com/  # Design inspiration
```

## 🎨 Color Palette

```css
--color-primary: #00f5ff      /* Cyan - Primary accent */
--color-secondary: #7b2ff7    /* Purple - Secondary accent */
--color-accent: #c0fb50       /* Lime - Highlight accent */
--color-bg-dark: #0a0a0a      /* Main background */
--color-bg-darker: #050505    /* Darker background */
--color-bg-light: #1a1a1a     /* Light background */
```

## 🎯 Key Features Breakdown

### Custom Cursor
- Only active on desktop (1024px+)
- Smooth following with easing
- Expands on interactive elements

### Particle System
- 80 particles with connection lines
- Smooth canvas animation
- Responsive to window resize

### Navigation
- Auto-hide on scroll down
- Progress bar showing scroll position
- Active section highlighting
- Mobile-responsive hamburger menu

### Scroll Animations
- Intersection Observer API
- Fade and slide up effects
- Smooth transitions

### Contact Form
- Real-time validation
- Success/error notifications
- Disabled state during submission

## 📱 Responsive Breakpoints

- **Desktop**: 1024px and above
- **Tablet**: 768px - 1023px
- **Mobile**: Below 768px

## 🎮 Easter Eggs

Try the **Konami Code**: ↑ ↑ ↓ ↓ ← → ← → B A

## ⚡ Performance Optimizations

- Lazy loading for images
- Throttled scroll events
- Debounced resize handlers
- Reduced motion support
- Efficient DOM manipulation
- RequestAnimationFrame for smooth animations

## 🔧 Customization

### Updating Personal Information

1. **Hero Section**: Edit the title and subtitle in `index.html`
2. **About Section**: Modify the text blocks and code window
3. **Projects**: Update project cards with your own projects
4. **Skills**: Add/remove skills and adjust progress percentages
5. **Contact**: Update email and social media links

### Changing Colors

Edit CSS variables in `:root` selector in `styles.css`:

```css
:root {
    --color-primary: #your-color;
    --color-secondary: #your-color;
    --color-accent: #your-color;
}
```

### Adding Projects

Copy and paste a project card in `index.html` and update:
- Project number
- Project title
- Project description
- Tech tags
- Project links

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Opera

## 📝 TODO / Future Enhancements

- [ ] Add actual project images
- [ ] Integrate with backend for contact form
- [ ] Add blog section
- [ ] Implement dark/light theme toggle
- [ ] Add more interactive 3D elements
- [ ] Integrate with CMS for easy content updates
- [ ] Add analytics integration
- [ ] Implement PWA features

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📄 License

This project is open source and available for personal and commercial use.

## 👨‍💻 Author

**Zarif**
- CSE Undergraduate
- Passionate Developer
- Problem Solver

## 🙏 Acknowledgments

- Inspired by [kprverse.com](https://kprverse.com) for design aesthetics
- Fonts from Google Fonts (IBM Plex Mono & Space Grotesk)
- Icons and design patterns from modern web design trends

## 📬 Contact

- Email: zarif@example.com (update with your email)
- GitHub: @zarif (update with your username)
- LinkedIn: Zarif (update with your profile)

---

**Built with ❤️ and lots of ☕ by Zarif**

*"CSE undergraduate with an eye for building things that actually work and a habit of taking on projects that should probably be classified as cardio."*
