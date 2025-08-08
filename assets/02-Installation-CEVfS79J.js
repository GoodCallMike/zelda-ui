import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{useMDXComponents as i}from"./index-ByewsRmS.js";import"./iframe-CzqNFs5z.js";import"./preload-helper-BXl3LOEh.js";function r(t){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"title-getting-startedinstallation",children:"title: Getting Started/Installation"}),`
`,e.jsx(n.h1,{id:"installation-guide",children:"Installation Guide"}),`
`,e.jsx(n.h2,{id:"prerequisites",children:"Prerequisites"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Node.js"})," 18+ or 20+"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"React"})," 18.0.0+ or 19.0.0+"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TypeScript"})," 5.0+ (optional but recommended)"]}),`
`]}),`
`,e.jsx(n.h2,{id:"package-installation",children:"Package Installation"}),`
`,e.jsx(n.h3,{id:"core-setup-required",children:"Core Setup (Required)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Using npm
npm install @zelda/core @zelda/theme

# Using pnpm
pnpm add @zelda/core @zelda/theme

# Using yarn
yarn add @zelda/core @zelda/theme
`})}),`
`,e.jsx(n.h3,{id:"icons-optional",children:"Icons (Optional)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Using npm
npm install @zelda/icons

# Using pnpm  
pnpm add @zelda/icons

# Using yarn
yarn add @zelda/icons
`})}),`
`,e.jsx(n.h2,{id:"css-import",children:"CSS Import"}),`
`,e.jsx(n.p,{children:"Import the theme CSS in your app's root file:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// In your main App.tsx or index.tsx
import '@zelda/theme/dist/theme.css';
`})}),`
`,e.jsx(n.h2,{id:"typescript-setup",children:"TypeScript Setup"}),`
`,e.jsx(n.p,{children:"If using TypeScript, the types are included automatically. No additional setup required."}),`
`,e.jsx(n.h2,{id:"framework-integration",children:"Framework Integration"}),`
`,e.jsx(n.h3,{id:"nextjs",children:"Next.js"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// pages/_app.tsx or app/layout.tsx
import '@zelda/theme/dist/theme.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
`})}),`
`,e.jsx(n.h3,{id:"vite",children:"Vite"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@zelda/theme/dist/theme.css';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`})}),`
`,e.jsx(n.h3,{id:"create-react-app",children:"Create React App"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// src/index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import '@zelda/theme/dist/theme.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);
`})}),`
`,e.jsx(n.h2,{id:"dark-mode-setup",children:"Dark Mode Setup"}),`
`,e.jsxs(n.p,{children:["Add dark mode support by toggling the ",e.jsx(n.code,{children:"dark"})," class:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Toggle dark mode
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Set initial theme based on user preference
useEffect(() => {
  const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDark) {
    document.documentElement.classList.add('dark');
  }
}, []);
`})}),`
`,e.jsx(n.h2,{id:"bundle-size-optimization",children:"Bundle Size Optimization"}),`
`,e.jsx(n.h3,{id:"tree-shaking",children:"Tree Shaking"}),`
`,e.jsx(n.p,{children:"Import only what you need:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ✅ Good - tree-shakable
import { Button, Input } from '@zelda/core';
import { SearchLgIcon, User01Icon } from '@zelda/icons';

// ❌ Avoid - imports everything
import * as ZeldaCore from '@zelda/core';
`})}),`
`,e.jsx(n.h3,{id:"icon-optimization",children:"Icon Optimization"}),`
`,e.jsx(n.p,{children:"Icons are automatically tree-shaken when imported individually:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// ✅ Only includes the icons you import
import { 
  SearchLgIcon, 
  User01Icon, 
  Mail01Icon 
} from '@zelda/icons';
`})}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsx(n.h3,{id:"css-not-loading",children:"CSS Not Loading"}),`
`,e.jsx(n.p,{children:"Make sure you've imported the theme CSS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import '@zelda/theme/dist/theme.css';
`})}),`
`,e.jsx(n.h3,{id:"typescript-errors",children:"TypeScript Errors"}),`
`,e.jsx(n.p,{children:"Ensure you have compatible React types:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install --save-dev @types/react @types/react-dom
`})}),`
`,e.jsx(n.h3,{id:"build-errors",children:"Build Errors"}),`
`,e.jsx(n.p,{children:"Check that your bundler supports CSS imports. Most modern bundlers (Vite, Next.js, CRA) support this by default."}),`
`,e.jsx(n.h2,{id:"verification",children:"Verification"}),`
`,e.jsx(n.p,{children:"Test your installation with a simple component:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button } from '@zelda/core';
import { CheckIcon } from '@zelda/icons';

function TestComponent() {
  return (
    <Button variant="primary" icon={CheckIcon}>
      Installation Complete!
    </Button>
  );
}
`})}),`
`,e.jsx(n.p,{children:"If the button renders with proper styling, your installation is successful! 🎉"})]})}function c(t={}){const{wrapper:n}={...i(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{c as default};
