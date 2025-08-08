import{j as t}from"./jsx-runtime-Cihbe4BQ.js";import"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import{B as a}from"./Button-D47seXth.js";import"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import"./Select-Dz7gQkGa.js";import{b as o,P as d,T as c,c as l}from"./XIcon-CZdcAhEp.js";import"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import{T as n}from"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const k={title:"General/Button",component:a,parameters:{layout:"padded",docs:{description:{component:`Versatile button component for triggering actions and navigation with comprehensive accessibility support.

\`\`\`tsx
import { Button } from '@zelda/core';

// Primary usage pattern
<Button>Save Changes</Button>

// Key variant
<Button variant="primary">Create Account</Button>
\`\`\`

## Variants
- **primary** - Main actions (golden yellow styling)
- **default** - Secondary actions (outlined appearance)
- **destructive** - Dangerous actions (red warning styling)
- **text** - Minimal emphasis (text-only)
- **link** - Navigation actions (link styling)
- **dashed** - Add/upload actions (dashed border)

## Accessibility & Testing
- Uses semantic button element with proper ARIA
- Supports Enter/Space activation and Tab navigation
- Maintains WCAG AA contrast ratios in all themes

\`\`\`tsx
// Testing approach
const button = screen.getByTestId('save-button');
expect(button).toBeEnabled();
await user.click(button);
\`\`\``}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","default","dashed","text","link","destructive"],description:"Visual style and semantic meaning",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},disabled:{control:"boolean",description:"Prevents user interaction"},icon:{control:!1,description:"Icon component to display"},iconPosition:{control:"select",options:["left","right"],description:"Icon position relative to text"},testId:{control:"text",description:"Test identifier for automated testing"},className:{table:{disable:!0}},onClick:{table:{disable:!0}},children:{table:{disable:!0}}}},e={args:{children:"Save Changes",testId:"save-button"}},r={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-3 p-4",children:[t.jsx(a,{variant:"primary",testId:"variant-primary",children:"Primary"}),t.jsx(a,{variant:"default",testId:"variant-default",children:"Default"}),t.jsx(a,{variant:"dashed",testId:"variant-dashed",children:"Dashed"}),t.jsx(a,{variant:"text",testId:"variant-text",children:"Text"}),t.jsx(a,{variant:"link",testId:"variant-link",children:"Link"}),t.jsx(a,{variant:"destructive",testId:"variant-destructive",children:"Destructive"})]}),parameters:{docs:{description:{story:"Complete range of button variants showing functional hierarchy from high to low emphasis."}}}},s={render:()=>t.jsxs("div",{className:"space-y-6 p-6",children:[t.jsxs("div",{className:"space-y-3",children:[t.jsx(n,{variant:"h3",children:"Form Actions"}),t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(a,{variant:"primary",testId:"submit-form",children:"Submit"}),t.jsx(a,{variant:"default",testId:"save-draft",children:"Save Draft"}),t.jsx(a,{variant:"text",testId:"cancel-form",children:"Cancel"})]})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(n,{variant:"h3",children:"Data Actions"}),t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(a,{variant:"default",icon:o,testId:"search-data",children:"Search"}),t.jsx(a,{variant:"dashed",icon:d,testId:"add-item",children:"Add New"}),t.jsx(a,{variant:"destructive",icon:c,testId:"delete-item",children:"Delete"})]})]}),t.jsxs("div",{className:"space-y-3",children:[t.jsx(n,{variant:"h3",children:"Navigation"}),t.jsxs("div",{className:"flex flex-wrap gap-3",children:[t.jsx(a,{variant:"text",testId:"go-back",children:"Back"}),t.jsx(a,{variant:"primary",icon:l,iconPosition:"right",testId:"continue",children:"Continue"})]})]})]}),parameters:{docs:{description:{story:"Real-world integration scenarios showing buttons working with other components."}}}},i={render:()=>t.jsxs("div",{className:"flex flex-wrap gap-3 p-4",children:[t.jsx(a,{testId:"normal-button",children:"Normal"}),t.jsx(a,{disabled:!0,testId:"disabled-button",children:"Disabled"})]}),parameters:{docs:{description:{story:"Button states showing normal and disabled appearances."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Save Changes',
    testId: 'save-button'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 p-4">
      <Button variant="primary" testId="variant-primary">
        Primary
      </Button>
      <Button variant="default" testId="variant-default">
        Default
      </Button>
      <Button variant="dashed" testId="variant-dashed">
        Dashed
      </Button>
      <Button variant="text" testId="variant-text">
        Text
      </Button>
      <Button variant="link" testId="variant-link">
        Link
      </Button>
      <Button variant="destructive" testId="variant-destructive">
        Destructive
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Complete range of button variants showing functional hierarchy from high to low emphasis.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-6">
      <div className="space-y-3">
        <Typography variant="h3">Form Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="primary" testId="submit-form">
            Submit
          </Button>
          <Button variant="default" testId="save-draft">
            Save Draft
          </Button>
          <Button variant="text" testId="cancel-form">
            Cancel
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Data Actions</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="default" icon={SearchLgIcon} testId="search-data">
            Search
          </Button>
          <Button variant="dashed" icon={PlusIcon} testId="add-item">
            Add New
          </Button>
          <Button variant="destructive" icon={Trash01Icon} testId="delete-item">
            Delete
          </Button>
        </div>
      </div>

      <div className="space-y-3">
        <Typography variant="h3">Navigation</Typography>
        <div className="flex flex-wrap gap-3">
          <Button variant="text" testId="go-back">
            Back
          </Button>
          <Button variant="primary" icon={ArrowRightIcon} iconPosition="right" testId="continue">
            Continue
          </Button>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world integration scenarios showing buttons working with other components.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex flex-wrap gap-3 p-4">
      <Button testId="normal-button">Normal</Button>
      <Button disabled testId="disabled-button">
        Disabled
      </Button>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Button states showing normal and disabled appearances.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};const D=["Default","Variants","Examples","States"];export{e as Default,s as Examples,i as States,r as Variants,D as __namedExportsOrder,k as default};
