import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{A as s}from"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import"./Button-D47seXth.js";import"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import"./Select-Dz7gQkGa.js";import{H as o,S as i}from"./XIcon-CZdcAhEp.js";import"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const N={title:"Feedback/Alert",component:s,parameters:{layout:"padded",docs:{description:{component:`Prominent messages that communicate important information and require user attention.

\`\`\`tsx
import { Alert } from '@zelda/core';

// Essential feedback
<Alert message="Operation completed successfully" type="success" />

// Detailed information
<Alert 
  message="Upload failed"
  description="Unable to upload file. Check your connection and try again."
  type="error"
  closable
/>
\`\`\`

## Types
- **success** - Positive outcomes and confirmations
- **info** - Neutral information and updates
- **warning** - Cautions that need attention
- **error** - Problems requiring immediate action

## Accessibility & Testing
- Uses semantic \`role="alert"\` for immediate screen reader announcement
- Close button accessible via keyboard (Tab + Enter/Space)
- Automatically focuses when dynamically added

> **Your Responsibility**: Provide clear, actionable message text. This component handles ARIA announcements and keyboard navigation.

\`\`\`tsx
// Testing approach
const alert = screen.getByRole('alert');
expect(alert).toHaveTextContent('Operation completed');
fireEvent.click(screen.getByRole('button', { name: /close/i }));
\`\`\``}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["success","info","warning","error"],description:"Alert semantic type and visual style",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},message:{control:"text",description:"Primary alert message",table:{type:{summary:"string"}}},description:{control:"text",description:"Optional detailed description",table:{type:{summary:"string"}}},closable:{control:"boolean",description:"Enable dismiss functionality",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showIcon:{control:"boolean",description:"Display type-specific icon",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},testId:{control:"text",description:"Test identifier for automated testing",table:{type:{summary:"string"}}},icon:{table:{disable:!0}},closeText:{table:{disable:!0}},onClose:{table:{disable:!0}},className:{table:{disable:!0}}}},a={args:{message:"Changes saved successfully",type:"success",description:"Your changes have been saved and are now live",closable:!0}},t={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{message:"Operation completed successfully",type:"success"}),e.jsx(s,{message:"New feature available",type:"info"}),e.jsx(s,{message:"Storage space running low",type:"warning"}),e.jsx(s,{message:"Connection failed",type:"error"})]}),parameters:{docs:{description:{story:"All alert types showing semantic meaning and visual hierarchy."}}}},r={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{message:"Profile updated successfully",description:"Your profile changes have been saved and are now visible.",type:"success",closable:!0}),e.jsx(s,{message:"New update available",description:"Version 2.1.0 includes bug fixes and new features.",type:"info"}),e.jsx(s,{message:"Storage limit reached",description:"You're using 95% of your storage. Consider upgrading your plan.",type:"warning",closable:!0}),e.jsx(s,{message:"Upload failed",description:"Unable to upload file. Check your connection and try again.",type:"error",closable:!0})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{message:"Backup completed",description:"Your data has been successfully backed up.",type:"success",icon:e.jsx(o,{className:"w-4 h-4"})}),e.jsx(s,{message:"Security enabled",type:"info",icon:e.jsx(i,{className:"w-4 h-4"}),showIcon:!0}),e.jsx(s,{message:"System maintenance",description:"This alert has no icon.",type:"warning",showIcon:!1})]})]}),parameters:{docs:{description:{story:"Practical examples showing descriptions, dismissible alerts, and custom icons."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Changes saved successfully',
    type: 'success',
    description: 'Your changes have been saved and are now live',
    closable: true
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert message="Operation completed successfully" type="success" />
      <Alert message="New feature available" type="info" />
      <Alert message="Storage space running low" type="warning" />
      <Alert message="Connection failed" type="error" />
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All alert types showing semantic meaning and visual hierarchy.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div className="space-y-4">
        <Alert message="Profile updated successfully" description="Your profile changes have been saved and are now visible." type="success" closable />
        <Alert message="New update available" description="Version 2.1.0 includes bug fixes and new features." type="info" />
        <Alert message="Storage limit reached" description="You're using 95% of your storage. Consider upgrading your plan." type="warning" closable />
        <Alert message="Upload failed" description="Unable to upload file. Check your connection and try again." type="error" closable />
      </div>

      <div className="space-y-4">
        <Alert message="Backup completed" description="Your data has been successfully backed up." type="success" icon={<HeartIcon className="w-4 h-4" />} />
        <Alert message="Security enabled" type="info" icon={<ShieldTickIcon className="w-4 h-4" />} showIcon={true} />
        <Alert message="System maintenance" description="This alert has no icon." type="warning" showIcon={false} />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Practical examples showing descriptions, dismissible alerts, and custom icons.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const S=["Default","Variants","Examples"];export{a as Default,r as Examples,t as Variants,S as __namedExportsOrder,N as default};
