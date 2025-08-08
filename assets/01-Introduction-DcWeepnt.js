import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{useMDXComponents as r}from"./index-ByewsRmS.js";import"./iframe-CzqNFs5z.js";import"./preload-helper-BXl3LOEh.js";function s(i){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...r(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"title-getting-startedintroduction",children:"title: Getting Started/Introduction"}),`
`,e.jsx(n.h1,{id:"zelda-ui",children:"Zelda UI"}),`
`,e.jsx(n.p,{children:"A modern React component library built with TypeScript, featuring accessible components with beautiful design."}),`
`,e.jsx(n.h2,{id:"-quick-start",children:"🚀 Quick Start"}),`
`,e.jsx(n.h3,{id:"installation",children:"Installation"}),`
`,e.jsx(n.p,{children:"Install the packages you need:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`# Core components and theme (required)
npm install @zelda/core @zelda/theme

# Icons (optional)
npm install @zelda/icons
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { Button, Input } from '@zelda/core';
import { SearchLgIcon } from '@zelda/icons';
import '@zelda/theme/dist/theme.css';

function App() {
  return (
    <div>
      <Button variant="primary" icon={SearchLgIcon}>
        Search
      </Button>
      <Input placeholder="Enter your quest..." />
    </div>
  );
}
`})}),`
`,e.jsx(n.h2,{id:"-packages",children:"📦 Packages"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@zelda/core"})," - Core UI components (Button, Input, Modal, etc.)"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@zelda/icons"})," - 500+ SVG icons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"@zelda/theme"})," - Design system and CSS variables"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-design-system",children:"🎨 Design System"}),`
`,e.jsx(n.p,{children:"Zelda UI uses a cohesive design system with:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Primary colors"})," that adapt automatically in dark mode"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Secondary colors"})," for success states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tertiary colors"})," for information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Destructive colors"})," for errors"]}),`
`,e.jsx(n.li,{children:"Premium typography with carefully selected font families"}),`
`,e.jsx(n.li,{children:"Consistent spacing, shadows, and border radius scales"}),`
`]}),`
`,e.jsx(n.h2,{id:"-accessibility",children:"♿ Accessibility"}),`
`,e.jsx(n.p,{children:"All components are built with accessibility as a core principle:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"WCAG 2.1 AA compliance"}),`
`,e.jsx(n.li,{children:"Keyboard navigation support"}),`
`,e.jsx(n.li,{children:"Screen reader compatibility"}),`
`,e.jsx(n.li,{children:"Focus management"}),`
`,e.jsx(n.li,{children:"High contrast support"}),`
`]}),`
`,e.jsx(n.h2,{id:"-dark-mode",children:"🌙 Dark Mode"}),`
`,e.jsxs(n.p,{children:["Dark mode is supported out of the box. Add the ",e.jsx(n.code,{children:"dark"})," class to your root element:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<html className="dark">
  {/* Your app */}
</html>
`})}),`
`,e.jsx(n.h2,{id:"-testing",children:"🧪 Testing"}),`
`,e.jsx(n.p,{children:"Zelda UI includes comprehensive testing utilities:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { quickA11yTest, runAccessibilityTestSuite } from '@zelda/core/utils';

// Quick accessibility test
await quickA11yTest(<YourComponent />);

// Comprehensive testing
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});
`})}),`
`,e.jsx(n.h2,{id:"-documentation",children:"📚 Documentation"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Component Gallery"})," - Browse all available components"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"API Reference"})," - Detailed prop documentation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Examples"})," - Real-world usage patterns"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility Guide"})," - Implementation best practices"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-links",children:"🔗 Links"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://github.com/goodcallmike/zelda-ui",rel:"nofollow",children:"GitHub Repository"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://www.npmjs.com/search?q=%40zelda",rel:"nofollow",children:"NPM Packages"})}),`
`,e.jsx(n.li,{children:e.jsx(n.a,{href:"https://goodcallmike.github.io/zelda-ui/",rel:"nofollow",children:"Documentation Site"})}),`
`]}),`
`,e.jsx(n.h2,{id:"-support",children:"🆘 Support"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Create an issue on ",e.jsx(n.a,{href:"https://github.com/goodcallmike/zelda-ui/issues",rel:"nofollow",children:"GitHub"})]}),`
`,e.jsxs(n.li,{children:["Check the ",e.jsx(n.a,{href:"https://goodcallmike.github.io/zelda-ui/",rel:"nofollow",children:"documentation"})]}),`
`,e.jsx(n.li,{children:"Review component examples in this Storybook"}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Version:"})," 0.0.1 (Pre-release)",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"License:"})," MIT",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"React Support:"})," 18.x, 19.x"]})]})}function a(i={}){const{wrapper:n}={...r(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{a as default};
