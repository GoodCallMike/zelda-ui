# 🗡️ Zelda UI - Documentation Site Content

## Site Structure

```
docs/
├── index.html                 # Landing page
├── getting-started/           # Quick start guide
├── components/               # Component documentation
│   ├── button/              # Button examples & API
│   ├── input/               # Input examples & API
│   ├── modal/               # Modal examples & API
│   └── ...                  # Other components
├── examples/                # Real-world examples
│   ├── adventure-interface/ # Game menu examples
│   ├── forms/              # Form patterns
│   ├── dashboards/         # Dashboard layouts
│   └── mobile/             # Mobile-first designs
├── theming/                # Theming guide
├── accessibility/          # A11y guidelines
└── migration/              # Migration guides
```

## Landing Page Content

### Hero Section
```html
<section class="hero">
  <div class="hero-content">
    <h1>🏰 Zelda UI</h1>
    <p class="hero-subtitle">
      A modern React component library inspired by The Legend of Zelda, 
      featuring accessible components with beautiful adventure theming.
    </p>
    
    <div class="hero-actions">
      <a href="/getting-started" class="btn btn-primary">
        ⚔️ Start Your Adventure
      </a>
      <a href="/storybook" class="btn btn-secondary">
        📚 View Components
      </a>
      <a href="https://github.com/goodcallmike/zelda-ui" class="btn btn-outline">
        <svg>GitHub icon</svg> View on GitHub
      </a>
    </div>
    
    <div class="hero-stats">
      <div class="stat">
        <strong>15+</strong>
        <span>Components</span>
      </div>
      <div class="stat">
        <strong>100%</strong>
        <span>Accessible</span>
      </div>
      <div class="stat">
        <strong>TypeScript</strong>
        <span>First</span>
      </div>
    </div>
  </div>
  
  <div class="hero-demo">
    <!-- Interactive component preview -->
    <div class="demo-container">
      <div class="demo-controls">
        <button class="demo-btn primary">Start Adventure</button>
        <button class="demo-btn secondary">View Inventory</button>
        <button class="demo-btn destructive">Delete Save</button>
      </div>
      <div class="demo-theme-toggle">
        <button onclick="toggleTheme()">🌙 Toggle Dark Mode</button>
      </div>
    </div>
  </div>
</section>
```

### Features Section
```html
<section class="features">
  <div class="container">
    <h2>✨ Why Choose Zelda UI?</h2>
    
    <div class="features-grid">
      <div class="feature">
        <div class="feature-icon">♿</div>
        <h3>Accessibility First</h3>
        <p>WCAG 2.1 AA compliant with full keyboard navigation, screen reader support, and focus management.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">🎨</div>
        <h3>Adventure Theming</h3>
        <p>Beautiful Zelda-inspired design system with automatic dark mode that transforms gold to mystical purple.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">⚡</div>
        <h3>Developer Experience</h3>
        <p>TypeScript-first with excellent IntelliSense, comprehensive testing utilities, and detailed documentation.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">📱</div>
        <h3>Mobile Ready</h3>
        <p>Responsive components that work beautifully on all devices with touch-friendly interactions.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">🧪</div>
        <h3>Testing Built-in</h3>
        <p>Every component includes testId props and follows testing best practices for reliable automation.</p>
      </div>
      
      <div class="feature">
        <div class="feature-icon">🎯</div>
        <h3>Performance Focused</h3>
        <p>Tree-shakeable imports, optimized bundle size, and efficient rendering for smooth user experiences.</p>
      </div>
    </div>
  </div>
</section>
```

### Quick Start Section
```html
<section class="quick-start">
  <div class="container">
    <h2>🚀 Get Started in Minutes</h2>
    
    <div class="quick-start-steps">
      <div class="step">
        <div class="step-number">1</div>
        <h3>Install</h3>
        <pre><code>npm install @zelda/core @zelda/icons @zelda/theme</code></pre>
      </div>
      
      <div class="step">
        <div class="step-number">2</div>
        <h3>Import</h3>
        <pre><code>import '@zelda/theme/styles.css';
import { Button } from '@zelda/core';</code></pre>
      </div>
      
      <div class="step">
        <div class="step-number">3</div>
        <h3>Use</h3>
        <pre><code>&lt;Button variant="primary"&gt;
  Start Adventure
&lt;/Button&gt;</code></pre>
      </div>
    </div>
    
    <div class="quick-start-result">
      <p>Result:</p>
      <button class="demo-result">Start Adventure</button>
    </div>
  </div>
</section>
```

### Component Showcase
```html
<section class="component-showcase">
  <div class="container">
    <h2>🎮 Component Gallery</h2>
    
    <div class="showcase-tabs">
      <button class="tab active" data-tab="forms">Forms</button>
      <button class="tab" data-tab="navigation">Navigation</button>
      <button class="tab" data-tab="feedback">Feedback</button>
      <button class="tab" data-tab="layout">Layout</button>
    </div>
    
    <div class="showcase-content">
      <div class="tab-content active" id="forms">
        <div class="component-preview">
          <!-- Interactive form components -->
          <div class="form-example">
            <h4>🏰 Hero Registration</h4>
            <div class="form-group">
              <label>Hero Name</label>
              <input type="text" placeholder="Enter your hero's name" />
            </div>
            <div class="form-group">
              <label>Character Class</label>
              <select>
                <option>⚔️ Warrior</option>
                <option>🔮 Mage</option>
                <option>🏹 Archer</option>
              </select>
            </div>
            <button class="btn primary">Create Hero</button>
          </div>
        </div>
      </div>
      
      <!-- Other tab contents -->
    </div>
  </div>
</section>
```

## Component Documentation Pages

### Button Documentation Template
```markdown
# 🗡️ Button Component

## Overview
The Button component provides interactive actions with authentic Zelda-inspired styling and comprehensive accessibility support.

## Live Examples

### Basic Usage
[Interactive CodePen embed]

### All Variants
[Interactive demo showing all button variants]

### With Icons
[Demo with icon combinations]

### Loading States
[Interactive loading demo]

## API Reference

### Props
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| variant | string | 'primary' | Visual style variant |
| size | string | 'medium' | Button size |
| disabled | boolean | false | Disabled state |
| icon | Component | - | Icon component |
| iconPosition | string | 'left' | Icon position |

### Variants
- **primary** - Main actions (Triforce Gold)
- **default** - Secondary actions (Outlined)
- **destructive** - Dangerous actions (Ganon Red)
- **text** - Subtle actions
- **link** - Navigation actions

## Usage Examples

### Adventure Interface
```tsx
<div className="adventure-menu">
  <Button variant="primary" size="large">
    Start New Game
  </Button>
  <Button variant="default" size="large">
    Continue Adventure
  </Button>
  <Button variant="text">
    Settings
  </Button>
</div>
```

### Form Actions
```tsx
<div className="form-actions">
  <Button variant="default" onClick={onCancel}>
    Cancel
  </Button>
  <Button variant="primary" type="submit">
    Save Character
  </Button>
</div>
```

## Accessibility
- Full keyboard navigation support
- Screen reader compatible
- WCAG 2.1 AA compliant
- Proper focus management

## Testing
```tsx
// Test example
const button = screen.getByTestId('adventure-button');
fireEvent.click(button);
expect(mockHandler).toHaveBeenCalled();
```
```

## Interactive Examples

### CodePen Templates

#### Basic Button Example
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="https://unpkg.com/@zelda/theme/dist/styles.css">
</head>
<body>
  <div id="root"></div>
  
  <script type="module">
    import { Button } from 'https://unpkg.com/@zelda/core';
    import { createRoot } from 'https://unpkg.com/react-dom/client';
    
    function App() {
      return (
        <div style={{ padding: '2rem' }}>
          <h2>🏰 Adventure Buttons</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button variant="primary">Start Adventure</Button>
            <Button variant="default">View Inventory</Button>
            <Button variant="destructive">Delete Save</Button>
          </div>
        </div>
      );
    }
    
    createRoot(document.getElementById('root')).render(<App />);
  </script>
</body>
</html>
```

#### Dark Mode Toggle Example
```html
<script type="module">
  function DarkModeDemo() {
    const [isDark, setIsDark] = React.useState(false);
    
    React.useEffect(() => {
      document.documentElement.classList.toggle('dark', isDark);
    }, [isDark]);
    
    return (
      <div style={{ padding: '2rem', minHeight: '100vh' }}>
        <div style={{ marginBottom: '2rem' }}>
          <Button 
            variant="text" 
            onClick={() => setIsDark(!isDark)}
          >
            {isDark ? '☀️' : '🌙'} Toggle Theme
          </Button>
        </div>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button variant="primary">Primary</Button>
          <Button variant="default">Default</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>
    );
  }
</script>
```

## SEO & Meta Tags

### HTML Head Template
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Primary Meta Tags -->
  <title>Zelda UI - Adventure-Themed React Component Library</title>
  <meta name="title" content="Zelda UI - Adventure-Themed React Component Library">
  <meta name="description" content="A modern React component library inspired by The Legend of Zelda, featuring accessible components with beautiful adventure theming and dark mode support.">
  <meta name="keywords" content="React, Components, UI Library, Zelda, Accessibility, TypeScript, Dark Mode">
  
  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://goodcallmike.github.io/zelda-ui/">
  <meta property="og:title" content="Zelda UI - Adventure-Themed React Component Library">
  <meta property="og:description" content="Build legendary interfaces with Zelda-inspired React components. Accessible, beautiful, and adventure-ready.">
  <meta property="og:image" content="https://goodcallmike.github.io/zelda-ui/og-image.png">
  
  <!-- Twitter -->
  <meta property="twitter:card" content="summary_large_image">
  <meta property="twitter:url" content="https://goodcallmike.github.io/zelda-ui/">
  <meta property="twitter:title" content="Zelda UI - Adventure-Themed React Component Library">
  <meta property="twitter:description" content="Build legendary interfaces with Zelda-inspired React components. Accessible, beautiful, and adventure-ready.">
  <meta property="twitter:image" content="https://goodcallmike.github.io/zelda-ui/twitter-image.png">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="icon" type="image/png" href="/favicon.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  
  <!-- Styles -->
  <link rel="stylesheet" href="/styles/main.css">
</head>
```

## Analytics & Tracking

### Google Analytics Setup
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
  
  // Track component usage
  function trackComponentUsage(componentName, action) {
    gtag('event', 'component_interaction', {
      component_name: componentName,
      action: action,
      page_location: window.location.href
    });
  }
</script>
```

## Performance Optimization

### Critical CSS
```css
/* Above-the-fold styles */
.hero { /* Hero section styles */ }
.btn { /* Button base styles */ }
.container { /* Layout styles */ }

/* Load non-critical styles async */
<link rel="preload" href="/styles/components.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### Image Optimization
```html
<!-- Responsive images -->
<picture>
  <source media="(min-width: 768px)" srcset="/images/hero-desktop.webp">
  <source media="(min-width: 480px)" srcset="/images/hero-tablet.webp">
  <img src="/images/hero-mobile.webp" alt="Zelda UI Components" loading="lazy">
</picture>
```

## Deployment Checklist

### Pre-deployment
- [ ] All links work correctly
- [ ] Interactive examples function properly
- [ ] Dark mode toggle works
- [ ] Mobile responsive design
- [ ] Accessibility audit passed
- [ ] Performance audit passed
- [ ] SEO meta tags configured
- [ ] Analytics tracking setup

### Post-deployment
- [ ] Test all pages on different devices
- [ ] Verify search engine indexing
- [ ] Monitor analytics for user behavior
- [ ] Check for broken links
- [ ] Validate HTML/CSS
- [ ] Test loading performance

This comprehensive documentation site will provide users with everything they need to successfully use Zelda UI, from quick start guides to detailed API references and real-world examples.