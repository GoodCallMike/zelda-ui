import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import{B as i}from"./Button-D47seXth.js";import{C as n}from"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import{I as d}from"./Select-Dz7gQkGa.js";import"./XIcon-CZdcAhEp.js";import"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import{T as a}from"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const w={title:"General/Typography",component:a,parameters:{layout:"padded",docs:{description:{component:`Typography component provides consistent text styling with semantic variants and theme-aware colors.

\`\`\`tsx
import { Typography } from '@zelda/core';

// Primary usage pattern
<Typography>Welcome to our platform</Typography>

// Key variant
<Typography variant="h1" color="primary">Dashboard Overview</Typography>
\`\`\`

## Variants
- **h1-h6** - Semantic headings with proper hierarchy (larger, bolder)
- **body** - Standard paragraph text (default)
- **body2** - Smaller body text for secondary content
- **caption** - Smaller descriptive text (metadata, timestamps)
- **label** - Form labels and UI text (medium weight)

## Colors
- **primary** - Primary brand color (golden yellow)
- **secondary** - Secondary theme color (blue)
- **success** - Success states (green)
- **danger** - Error and destructive actions (red)
- **muted** - Secondary text (gray)

## Accessibility & Testing
- Uses semantic HTML elements (h1-h6, p)
- Maintains WCAG AA contrast ratios in all themes
- Supports screen readers with proper heading hierarchy

\`\`\`tsx
// Testing approach
const heading = screen.getByRole('heading', { level: 1 });
expect(heading).toHaveTextContent('Dashboard Overview');
\`\`\``}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body","body2","caption","label"],description:"Semantic variant for text hierarchy and styling",table:{type:{summary:"string"},defaultValue:{summary:"body"}}},color:{control:"select",options:["default","muted","primary","secondary","success","danger"],description:"Theme-aware color variants",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},testId:{control:"text",description:"Test identifier for automated testing"},className:{table:{disable:!0}},id:{table:{disable:!0}},children:{table:{disable:!0}}}},r={args:{children:"Welcome to our platform",testId:"welcome-text"}},t={render:()=>e.jsxs("div",{className:"space-y-4 p-4",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{variant:"h1",testId:"heading-1",children:"Heading 1 - Page Title"}),e.jsx(a,{variant:"h2",testId:"heading-2",children:"Heading 2 - Section Title"}),e.jsx(a,{variant:"h3",testId:"heading-3",children:"Heading 3 - Subsection"}),e.jsx(a,{variant:"h4",testId:"heading-4",children:"Heading 4 - Sub-subsection"}),e.jsx(a,{variant:"h5",testId:"heading-5",children:"Heading 5 - Minor heading"}),e.jsx(a,{variant:"h6",testId:"heading-6",children:"Heading 6 - Smallest heading"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{variant:"body",testId:"body-text",children:"Body text for paragraphs and content"}),e.jsx(a,{variant:"body2",testId:"body2-text",children:"Body 2 - Smaller body text"}),e.jsx(a,{variant:"caption",testId:"caption-text",children:"Caption text for metadata"}),e.jsx(a,{variant:"label",testId:"label-text",children:"Label text for forms"})]})]}),parameters:{docs:{description:{story:"Complete range of typography variants showing text hierarchy."}}}},s={render:()=>e.jsxs("div",{className:"space-y-8 max-w-4xl p-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{variant:"h1",color:"primary",testId:"dashboard-title",children:"Dashboard Overview"}),e.jsx(a,{variant:"body",testId:"dashboard-description",children:"Monitor your application performance, user engagement, and system health from this central hub."})]}),e.jsxs(n,{children:[e.jsx(a,{variant:"h2",className:"mb-4",testId:"form-title",children:"Account Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"label",className:"block mb-2",testId:"email-label",children:"Email Address"}),e.jsx(d,{placeholder:"Enter your email",testId:"email-input"}),e.jsx(a,{variant:"caption",color:"muted",testId:"email-help",children:"We'll never share your email with third parties"})]}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(i,{variant:"primary",testId:"save-button",children:"Save Changes"}),e.jsx(i,{variant:"default",testId:"cancel-button",children:"Cancel"})]})]})]}),e.jsxs("div",{className:"p-4 bg-ganon-50 dark:bg-ganon-900/20 border-ganon-200 dark:border-ganon-600 border rounded",children:[e.jsx(a,{variant:"h3",color:"danger",className:"mb-2",testId:"error-title",children:"Action Required"}),e.jsx(a,{variant:"body",color:"danger",testId:"error-message",children:"Your subscription expires in 3 days. Please update your payment method to continue using our services."}),e.jsx(a,{variant:"caption",color:"danger",className:"mt-2 block",testId:"error-details",children:"Last payment failed on December 15, 2024"})]}),e.jsxs("div",{className:"p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded",children:[e.jsx(a,{variant:"h3",color:"success",className:"mb-2",testId:"success-title",children:"Deployment Successful"}),e.jsx(a,{variant:"body",color:"success",testId:"success-message",children:"Your application has been successfully deployed to production environment."}),e.jsx(a,{variant:"caption",color:"success",className:"mt-2 block",testId:"success-details",children:"Build #1247 completed in 2m 34s"})]})]}),parameters:{docs:{description:{story:"Typography integrated with other components in realistic interface scenarios."}}}},o={render:()=>e.jsx("div",{className:"space-y-4 p-4",children:e.jsxs("div",{className:"space-y-2",children:[e.jsx(a,{variant:"h3",testId:"colors-title",children:"Color Variants"}),e.jsx(a,{color:"primary",testId:"primary-text",children:"Primary - Brand color (golden yellow)"}),e.jsx(a,{color:"secondary",testId:"secondary-text",children:"Secondary - Theme color (blue)"}),e.jsx(a,{color:"success",testId:"success-text",children:"Success - Positive actions (green)"}),e.jsx(a,{color:"danger",testId:"danger-text",children:"Danger - Errors and warnings (red)"}),e.jsx(a,{color:"muted",testId:"muted-text",children:"Muted - Secondary information"})]})}),parameters:{docs:{description:{story:"Typography color variants for different semantic meanings."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Welcome to our platform',
    testId: 'welcome-text'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Typography variant="h1" testId="heading-1">
          Heading 1 - Page Title
        </Typography>
        <Typography variant="h2" testId="heading-2">
          Heading 2 - Section Title
        </Typography>
        <Typography variant="h3" testId="heading-3">
          Heading 3 - Subsection
        </Typography>
        <Typography variant="h4" testId="heading-4">
          Heading 4 - Sub-subsection
        </Typography>
        <Typography variant="h5" testId="heading-5">
          Heading 5 - Minor heading
        </Typography>
        <Typography variant="h6" testId="heading-6">
          Heading 6 - Smallest heading
        </Typography>
      </div>
      <div className="space-y-2">
        <Typography variant="body" testId="body-text">
          Body text for paragraphs and content
        </Typography>
        <Typography variant="body2" testId="body2-text">
          Body 2 - Smaller body text
        </Typography>
        <Typography variant="caption" testId="caption-text">
          Caption text for metadata
        </Typography>
        <Typography variant="label" testId="label-text">
          Label text for forms
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete range of typography variants showing text hierarchy.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 max-w-4xl p-6">
      <div className="space-y-4">
        <Typography variant="h1" color="primary" testId="dashboard-title">
          Dashboard Overview
        </Typography>
        <Typography variant="body" testId="dashboard-description">
          Monitor your application performance, user engagement, and system
          health from this central hub.
        </Typography>
      </div>

      <Card>
        <Typography variant="h2" className="mb-4" testId="form-title">
          Account Settings
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2" testId="email-label">
              Email Address
            </Typography>
            <Input placeholder="Enter your email" testId="email-input" />
            <Typography variant="caption" color="muted" testId="email-help">
              We'll never share your email with third parties
            </Typography>
          </div>
          <div className="flex gap-2 pt-4">
            <Button variant="primary" testId="save-button">
              Save Changes
            </Button>
            <Button variant="default" testId="cancel-button">
              Cancel
            </Button>
          </div>
        </div>
      </Card>

      <div className="p-4 bg-ganon-50 dark:bg-ganon-900/20 border-ganon-200 dark:border-ganon-600 border rounded">
        <Typography variant="h3" color="danger" className="mb-2" testId="error-title">
          Action Required
        </Typography>
        <Typography variant="body" color="danger" testId="error-message">
          Your subscription expires in 3 days. Please update your payment method
          to continue using our services.
        </Typography>
        <Typography variant="caption" color="danger" className="mt-2 block" testId="error-details">
          Last payment failed on December 15, 2024
        </Typography>
      </div>

      <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
        <Typography variant="h3" color="success" className="mb-2" testId="success-title">
          Deployment Successful
        </Typography>
        <Typography variant="body" color="success" testId="success-message">
          Your application has been successfully deployed to production
          environment.
        </Typography>
        <Typography variant="caption" color="success" className="mt-2 block" testId="success-details">
          Build #1247 completed in 2m 34s
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography integrated with other components in realistic interface scenarios.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="space-y-2">
        <Typography variant="h3" testId="colors-title">
          Color Variants
        </Typography>
        <Typography color="primary" testId="primary-text">
          Primary - Brand color (golden yellow)
        </Typography>
        <Typography color="secondary" testId="secondary-text">
          Secondary - Theme color (blue)
        </Typography>
        <Typography color="success" testId="success-text">
          Success - Positive actions (green)
        </Typography>
        <Typography color="danger" testId="danger-text">
          Danger - Errors and warnings (red)
        </Typography>
        <Typography color="muted" testId="muted-text">
          Muted - Secondary information
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Typography color variants for different semantic meanings.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};const C=["Default","Variants","Examples","States"];export{r as Default,s as Examples,o as States,t as Variants,C as __namedExportsOrder,w as default};
