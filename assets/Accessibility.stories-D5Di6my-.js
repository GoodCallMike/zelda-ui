import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import"./iframe-CzqNFs5z.js";import"./preload-helper-BXl3LOEh.js";const a={title:"Getting Started/Accessibility",tags:["autodocs"],parameters:{docs:{description:{component:`
# Accessibility Guide

Zelda UI is built with accessibility as a core principle. All components follow WCAG 2.1 guidelines and include comprehensive testing utilities.

## 🚀 Quick Setup

### Testing Utilities
\`\`\`typescript
import { 
  quickA11yTest,
  runAccessibilityTestSuite,
  testKeyboardNavigation,
  testFormAccessibility 
} from '@zelda/core/utils';

// Quick accessibility test
await quickA11yTest(<YourComponent />);

// Comprehensive testing
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});
\`\`\`

### Development Commands
\`\`\`bash
# Lint accessibility issues
pnpm lint:a11y

# Run accessibility tests
pnpm test:a11y

# Fix auto-fixable issues
pnpm lint:fix
\`\`\`

## ✅ Essential Checklist

### HTML Structure
- ✅ Use semantic HTML elements
- ✅ Proper heading hierarchy (h1 → h2 → h3)
- ✅ Form labels and fieldsets
- ✅ Alt text for images

### ARIA
- ✅ \`aria-label\` for unlabeled elements
- ✅ \`aria-describedby\` for additional context
- ✅ \`role\` attributes when needed
- ✅ \`aria-live\` for dynamic content

### Keyboard
- ✅ All interactive elements focusable
- ✅ Logical tab order
- ✅ Visible focus indicators
- ✅ Enter/Space key support

## 🎨 Design Standards

### Color Contrast
- **Normal text**: 4.5:1 minimum
- **Large text**: 3:1 minimum
- **UI components**: 3:1 minimum

### Touch Targets
- **Minimum size**: 44px × 44px
- **Spacing**: 8px between targets

## 📚 Complete Documentation

For comprehensive guides and detailed implementation examples:

- **[Developer Guide](https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_DEVELOPER_GUIDE.md)** - Complete development guide
- **[Quick Reference](https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_QUICK_REFERENCE.md)** - Essential cheat sheet
- **[Best Practices](https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_BEST_PRACTICES.md)** - Implementation guidelines
        `}}}},s={render:()=>e.jsxs("div",{className:"p-6 max-w-4xl",children:[e.jsx("h1",{className:"text-3xl font-bold mb-6",children:"🔍 Accessibility Guide"}),e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🚀 Quick Setup"}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Testing Utilities"}),e.jsx("pre",{className:"bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto",children:`import { 
  quickA11yTest,
  runAccessibilityTestSuite 
} from '@zelda/core/utils';

// Quick test
await quickA11yTest(<YourComponent />);

// Comprehensive test
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});`})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"✅ Essential Checklist"}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"HTML Structure"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsx("li",{children:"✅ Use semantic HTML elements"}),e.jsx("li",{children:"✅ Proper heading hierarchy (h1 → h2 → h3)"}),e.jsx("li",{children:"✅ Form labels and fieldsets"}),e.jsx("li",{children:"✅ Alt text for images"})]})]}),e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-3",children:"ARIA"}),e.jsxs("ul",{className:"space-y-1 text-sm",children:[e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"aria-label"})," for unlabeled elements"]}),e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"aria-describedby"})," for context"]}),e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"role"})," attributes when needed"]}),e.jsxs("li",{children:["✅ ",e.jsx("code",{children:"aria-live"})," for dynamic content"]})]})]})]})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"🎨 Design Standards"}),e.jsx("div",{className:"bg-yellow-50 p-4 rounded-lg",children:e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Color Contrast"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Normal text:"})," 4.5:1 minimum"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Large text:"})," 3:1 minimum"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"UI components:"})," 3:1 minimum"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Touch Targets"}),e.jsxs("ul",{className:"text-sm space-y-1",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Minimum size:"})," 44px × 44px"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Spacing:"})," 8px between targets"]})]})]})]})})]}),e.jsxs("section",{children:[e.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"📚 Documentation Links"}),e.jsxs("div",{className:"grid md:grid-cols-3 gap-4",children:[e.jsxs("a",{href:"https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_DEVELOPER_GUIDE.md",className:"block p-4 bg-purple-50 rounded-lg hover:bg-purple-100",children:[e.jsx("h3",{className:"font-semibold",children:"Developer Guide"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Complete development guide"})]}),e.jsxs("a",{href:"https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_QUICK_REFERENCE.md",className:"block p-4 bg-purple-50 rounded-lg hover:bg-purple-100",children:[e.jsx("h3",{className:"font-semibold",children:"Quick Reference"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Essential cheat sheet"})]}),e.jsxs("a",{href:"https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_BEST_PRACTICES.md",className:"block p-4 bg-purple-50 rounded-lg hover:bg-purple-100",children:[e.jsx("h3",{className:"font-semibold",children:"Best Practices"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Implementation guidelines"})]})]})]})]})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="p-6 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">🔍 Accessibility Guide</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">🚀 Quick Setup</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Testing Utilities</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
              {\`import { 
  quickA11yTest,
  runAccessibilityTestSuite 
} from '@zelda/core/utils';

// Quick test
await quickA11yTest(<YourComponent />);

// Comprehensive test
await runAccessibilityTestSuite(<YourComponent />, {
  expectedFocusableElements: 2,
  ariaAttributes: { 'button': 'Submit form' },
});\`}
            </pre>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            ✅ Essential Checklist
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">HTML Structure</h3>
              <ul className="space-y-1 text-sm">
                <li>✅ Use semantic HTML elements</li>
                <li>✅ Proper heading hierarchy (h1 → h2 → h3)</li>
                <li>✅ Form labels and fieldsets</li>
                <li>✅ Alt text for images</li>
              </ul>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">ARIA</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  ✅ <code>aria-label</code> for unlabeled elements
                </li>
                <li>
                  ✅ <code>aria-describedby</code> for context
                </li>
                <li>
                  ✅ <code>role</code> attributes when needed
                </li>
                <li>
                  ✅ <code>aria-live</code> for dynamic content
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">🎨 Design Standards</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Color Contrast</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>Normal text:</strong> 4.5:1 minimum
                  </li>
                  <li>
                    <strong>Large text:</strong> 3:1 minimum
                  </li>
                  <li>
                    <strong>UI components:</strong> 3:1 minimum
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Touch Targets</h3>
                <ul className="text-sm space-y-1">
                  <li>
                    <strong>Minimum size:</strong> 44px × 44px
                  </li>
                  <li>
                    <strong>Spacing:</strong> 8px between targets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            📚 Documentation Links
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <a href="https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_DEVELOPER_GUIDE.md" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100">
              <h3 className="font-semibold">Developer Guide</h3>
              <p className="text-sm text-gray-600">
                Complete development guide
              </p>
            </a>
            <a href="https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_QUICK_REFERENCE.md" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100">
              <h3 className="font-semibold">Quick Reference</h3>
              <p className="text-sm text-gray-600">Essential cheat sheet</p>
            </a>
            <a href="https://github.com/goodcallmike/zelda-ui/blob/main/docs/ACCESSIBILITY_BEST_PRACTICES.md" className="block p-4 bg-purple-50 rounded-lg hover:bg-purple-100">
              <h3 className="font-semibold">Best Practices</h3>
              <p className="text-sm text-gray-600">Implementation guidelines</p>
            </a>
          </div>
        </section>
      </div>
    </div>
}`,...s.parameters?.docs?.source}}};const o=["Guide"];export{s as Guide,o as __namedExportsOrder,a as default};
