import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{T as a}from"./Typography-9lRHdsZv.js";import{D as i}from"./Divider-BkIFKrrr.js";import"./iframe-CzqNFs5z.js";import"./preload-helper-BXl3LOEh.js";import"./index-BDV_RS0N.js";const m={title:"Layout/Divider",component:i,parameters:{layout:"padded",docs:{description:{component:`Visual separators that organize content into distinct sections with clear hierarchy and spacing.

\`\`\`tsx
import { Divider } from '@zelda/core';

// Essential separation
<Divider />

// Enhanced visual divider
<Divider variant="magical" />

// With section label
<Divider>Settings</Divider>
\`\`\`

## Variants
- **solid** - Clean line for basic content separation
- **dashed** - Subtle pattern for softer visual breaks
- **magical** - Enhanced styling with gradient effects

## Orientations
- **horizontal** - Default for vertical content flow
- **vertical** - For side-by-side content separation

## Accessibility & Testing
- Uses semantic \`role="separator"\` for screen readers
- Maintains proper contrast ratios in all variants
- Text labels are announced appropriately

> **Your Responsibility**: Use dividers to create logical content sections. This component provides semantic separation and visual hierarchy.

\`\`\`tsx
// Testing approach
const divider = screen.getByRole('separator');
expect(divider).toBeInTheDocument();
\`\`\``}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","dashed","magical"],description:"Visual style and emphasis level",table:{type:{summary:"string"},defaultValue:{summary:"solid"}}},orientation:{control:"select",options:["horizontal","vertical"],description:"Divider orientation",table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}}},textAlign:{control:"select",options:["left","center","right"],description:"Text alignment for labeled dividers",table:{type:{summary:"string"},defaultValue:{summary:"center"}}},children:{control:"text",description:"Optional text label for the divider",table:{type:{summary:"ReactNode"}}}}},r={args:{}},t={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"h4",className:"mb-4",children:"Solid"}),e.jsx(i,{variant:"solid"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h4",className:"mb-4",children:"Dashed"}),e.jsx(i,{variant:"dashed"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"h4",className:"mb-4",children:"Magical"}),e.jsx(i,{variant:"magical"})]})]}),parameters:{docs:{description:{story:"All divider variants showing different visual emphasis levels."}}}},s={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"body1",children:"Content above the divider"}),e.jsx(i,{children:"Section Break"}),e.jsx(a,{variant:"body1",children:"Content below the divider"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"body1",children:"Project Overview"}),e.jsx(i,{variant:"magical",children:"Active Tasks"}),e.jsx(a,{variant:"body1",children:"• Complete user interface design"}),e.jsx(a,{variant:"body1",children:"• Implement authentication system"})]})]}),parameters:{docs:{description:{story:"Dividers with text labels for section headings and content organization."}}}},n={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsx(i,{textAlign:"left",children:"Left Aligned"}),e.jsx(i,{textAlign:"center",children:"Center Aligned"}),e.jsx(i,{textAlign:"right",children:"Right Aligned"})]}),parameters:{docs:{description:{story:"Text can be aligned to the left, center, or right of the divider."}}}},o={render:()=>e.jsxs("div",{className:"flex items-center gap-6 h-32",children:[e.jsx(a,{variant:"body1",children:"Left Content"}),e.jsx(i,{orientation:"vertical"}),e.jsx(a,{variant:"body1",children:"Middle Content"}),e.jsx(i,{orientation:"vertical",variant:"magical"}),e.jsx(a,{variant:"body1",children:"Right Content"})]}),parameters:{docs:{description:{story:"Vertical dividers for separating content horizontally."}}}},d={render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(a,{variant:"body1",children:"Basic content separation"}),e.jsx(i,{variant:"solid"}),e.jsx(a,{variant:"body1",children:"Clean visual hierarchy"})]}),e.jsxs("div",{children:[e.jsx(a,{variant:"body1",children:"Enhanced section breaks"}),e.jsx(i,{variant:"magical",children:"Important Section"}),e.jsx(a,{variant:"body1",children:"Emphasized content areas"})]}),e.jsxs("div",{className:"flex items-center gap-4 h-16",children:[e.jsx(a,{variant:"body1",children:"Left"}),e.jsx(i,{orientation:"vertical"}),e.jsx(a,{variant:"body1",children:"Center"}),e.jsx(i,{orientation:"vertical",variant:"dashed"}),e.jsx(a,{variant:"body1",children:"Right"})]})]}),parameters:{docs:{description:{story:"Practical examples showing different divider variants and orientations."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <Typography variant="h4" className="mb-4">
          Solid
        </Typography>
        <Divider variant="solid" />
      </div>
      <div>
        <Typography variant="h4" className="mb-4">
          Dashed
        </Typography>
        <Divider variant="dashed" />
      </div>
      <div>
        <Typography variant="h4" className="mb-4">
          Magical
        </Typography>
        <Divider variant="magical" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All divider variants showing different visual emphasis levels.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <Typography variant="body1">Content above the divider</Typography>
        <Divider>Section Break</Divider>
        <Typography variant="body1">Content below the divider</Typography>
      </div>
      <div>
        <Typography variant="body1">Project Overview</Typography>
        <Divider variant="magical">Active Tasks</Divider>
        <Typography variant="body1">
          • Complete user interface design
        </Typography>
        <Typography variant="body1">
          • Implement authentication system
        </Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Dividers with text labels for section headings and content organization.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <Divider textAlign="left">Left Aligned</Divider>
      <Divider textAlign="center">Center Aligned</Divider>
      <Divider textAlign="right">Right Aligned</Divider>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Text can be aligned to the left, center, or right of the divider.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 h-32">
      <Typography variant="body1">Left Content</Typography>
      <Divider orientation="vertical" />
      <Typography variant="body1">Middle Content</Typography>
      <Divider orientation="vertical" variant="magical" />
      <Typography variant="body1">Right Content</Typography>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Vertical dividers for separating content horizontally.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      <div>
        <Typography variant="body1">Basic content separation</Typography>
        <Divider variant="solid" />
        <Typography variant="body1">Clean visual hierarchy</Typography>
      </div>
      <div>
        <Typography variant="body1">Enhanced section breaks</Typography>
        <Divider variant="magical">Important Section</Divider>
        <Typography variant="body1">Emphasized content areas</Typography>
      </div>
      <div className="flex items-center gap-4 h-16">
        <Typography variant="body1">Left</Typography>
        <Divider orientation="vertical" />
        <Typography variant="body1">Center</Typography>
        <Divider orientation="vertical" variant="dashed" />
        <Typography variant="body1">Right</Typography>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Practical examples showing different divider variants and orientations.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};const g=["Default","Variants","WithText","TextAlignment","Vertical","Examples"];export{r as Default,d as Examples,n as TextAlignment,t as Variants,o as Vertical,s as WithText,g as __namedExportsOrder,m as default};
