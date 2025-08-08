import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{R as a,b as i,c as l}from"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import{B as b}from"./Button-D47seXth.js";import{C as y}from"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import"./Select-Dz7gQkGa.js";import"./XIcon-CZdcAhEp.js";import{r as v}from"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import{T as t}from"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const P={title:"Data Entry/Radio",component:a,parameters:{layout:"padded",docs:{description:{component:`Radio component provides single-choice selection with comprehensive accessibility support.

\`\`\`tsx
import { Radio, RadioGroup } from '@zelda/core';

// Primary usage pattern
<Radio label="Option 1" value="option1" />

// Key variant
<RadioGroup defaultValue="option1">
  <Radio label="Option 1" value="option1" />
  <Radio label="Option 2" value="option2" />
</RadioGroup>
\`\`\`

## Components
- **Radio** - Individual radio button with label
- **RadioGroup** - Container for managing radio button groups
- **RadioButton** - Button-style radio for compact layouts

## Sizes
- **small** - Compact radio buttons for dense layouts
- **middle** - Standard size for most use cases (default)
- **large** - Prominent radio buttons for key selections

## Accessibility & Testing
- Uses semantic radio input elements with proper labeling
- Supports arrow key navigation within groups, Tab between groups
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const radio = screen.getByLabelText('Option 1');
expect(radio).not.toBeChecked();
await user.click(radio);
expect(radio).toBeChecked();
\`\`\``}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["small","middle","large"],description:"Radio size variant",table:{type:{summary:"string"},defaultValue:{summary:"middle"}}},disabled:{control:"boolean",description:"Whether the radio is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},error:{control:"boolean",description:"Whether the radio has error state",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},testId:{control:"text",description:"Test identifier for automated testing"},className:{table:{disable:!0}},onChange:{table:{disable:!0}},label:{table:{disable:!0}},value:{table:{disable:!0}},name:{table:{disable:!0}}}},d={args:{label:"Select this option",value:"option1",name:"default-radio",testId:"default-radio"}},n={render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h3",testId:"radio-variants-title",children:"Radio Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Default radio",value:"default",name:"variants",testId:"variant-default"}),e.jsx(a,{label:"Checked radio",value:"checked",name:"variants",defaultChecked:!0,testId:"variant-checked"}),e.jsx(a,{label:"Disabled radio",value:"disabled",name:"variants",disabled:!0,testId:"variant-disabled"}),e.jsx(a,{label:"Error radio",value:"error",name:"variants",error:!0,testId:"variant-error"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h3",testId:"button-variants-title",children:"Button Style Variants"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex",children:[e.jsx(i,{name:"button-outline",value:"option1",testId:"button-outline-1",children:"Option 1"}),e.jsx(i,{name:"button-outline",value:"option2",defaultChecked:!0,testId:"button-outline-2",children:"Option 2"}),e.jsx(i,{name:"button-outline",value:"option3",testId:"button-outline-3",children:"Option 3"})]}),e.jsxs("div",{className:"flex",children:[e.jsx(i,{name:"button-solid",value:"solid1",buttonStyle:"solid",testId:"button-solid-1",children:"Solid 1"}),e.jsx(i,{name:"button-solid",value:"solid2",buttonStyle:"solid",defaultChecked:!0,testId:"button-solid-2",children:"Solid 2"}),e.jsx(i,{name:"button-solid",value:"solid3",buttonStyle:"solid",testId:"button-solid-3",children:"Solid 3"})]})]})]})]}),parameters:{docs:{description:{story:"Radio variants showing different styles including standard radios and button-style options."}}}},c={render:()=>{const[o,r]=v.useState({plan:"standard",billing:"monthly",support:"email"}),[m,h]=v.useState({}),g=()=>{const s={};o.plan||(s.plan="Please select a plan"),o.billing||(s.billing="Please select billing frequency"),h(s)};return e.jsxs("div",{className:"space-y-8 max-w-2xl p-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h1",color:"primary",testId:"subscription-title",children:"Choose Your Plan"}),e.jsx(t,{variant:"body",testId:"subscription-description",children:"Select the plan that best fits your needs."})]}),e.jsxs(y,{children:[e.jsx(t,{variant:"h2",className:"mb-4",testId:"plan-selection-title",children:"Plan Selection"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"label",className:"block mb-3",testId:"plan-label",children:"Choose Plan"}),e.jsxs(l,{value:o.plan,onChange:s=>r(u=>({...u,plan:s})),children:[e.jsx(a,{label:"Basic - $9/month - Essential features",value:"basic",testId:"plan-basic"}),e.jsx(a,{label:"Standard - $19/month - Most popular choice",value:"standard",testId:"plan-standard"}),e.jsx(a,{label:"Premium - $39/month - All features included",value:"premium",testId:"plan-premium"})]}),m.plan&&e.jsx(t,{variant:"caption",color:"danger",testId:"plan-error",children:m.plan})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"label",className:"block mb-3",testId:"billing-label",children:"Billing Frequency"}),e.jsxs("div",{className:"flex",children:[e.jsx(i,{name:"billing",value:"monthly",checked:o.billing==="monthly",onChange:()=>r(s=>({...s,billing:"monthly"})),testId:"billing-monthly",children:"Monthly"}),e.jsx(i,{name:"billing",value:"yearly",checked:o.billing==="yearly",onChange:()=>r(s=>({...s,billing:"yearly"})),testId:"billing-yearly",children:"Yearly (Save 20%)"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"label",className:"block mb-3",testId:"support-label",children:"Support Level"}),e.jsxs(l,{value:o.support,onChange:s=>r(u=>({...u,support:s})),children:[e.jsx(a,{label:"Email support",value:"email",testId:"support-email"}),e.jsx(a,{label:"Priority support",value:"priority",testId:"support-priority"}),e.jsx(a,{label:"Dedicated support",value:"dedicated",testId:"support-dedicated"})]})]}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(b,{variant:"primary",onClick:g,testId:"subscribe-button",children:"Subscribe Now"}),e.jsx(b,{variant:"default",testId:"cancel-button",children:"Cancel"})]})]})]}),e.jsxs("div",{className:"p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded",children:[e.jsx(t,{variant:"h3",color:"success",className:"mb-2",testId:"success-title",children:"Subscription Confirmed"}),e.jsx(t,{variant:"body",color:"success",testId:"success-message",children:"Welcome! Your subscription has been activated and you now have access to all features."})]})]})},parameters:{docs:{description:{story:"Radio components integrated with other components in realistic subscription form scenarios."}}}},p={render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h3",testId:"sizes-title",children:"Sizes"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"label",className:"block mb-2",children:"Small"}),e.jsxs(l,{size:"small",defaultValue:"small2",children:[e.jsx(a,{label:"Small option 1",value:"small1",testId:"small-1"}),e.jsx(a,{label:"Small option 2",value:"small2",testId:"small-2"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"label",className:"block mb-2",children:"Middle (Default)"}),e.jsxs(l,{size:"middle",defaultValue:"middle2",children:[e.jsx(a,{label:"Middle option 1",value:"middle1",testId:"middle-1"}),e.jsx(a,{label:"Middle option 2",value:"middle2",testId:"middle-2"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"label",className:"block mb-2",children:"Large"}),e.jsxs(l,{size:"large",defaultValue:"large2",children:[e.jsx(a,{label:"Large option 1",value:"large1",testId:"large-1"}),e.jsx(a,{label:"Large option 2",value:"large2",testId:"large-2"})]})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h3",testId:"interactive-title",children:"Interactive States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Normal state",value:"normal",name:"states",testId:"normal-radio"}),e.jsx(a,{label:"Checked state",value:"checked",name:"states",defaultChecked:!0,testId:"checked-radio"}),e.jsx(a,{label:"Disabled state",value:"disabled",name:"states",disabled:!0,testId:"disabled-radio"}),e.jsx(a,{label:"Error state",value:"error",name:"states",error:!0,testId:"error-radio"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h3",testId:"keyboard-title",children:"Keyboard Navigation"}),e.jsxs(y,{children:[e.jsxs(t,{variant:"body2",className:"mb-3",testId:"keyboard-instructions",children:[e.jsx("strong",{children:"Try this:"})," Use Tab to focus the group, then Arrow keys to navigate between options."]}),e.jsxs(l,{defaultValue:"option2",children:[e.jsx(a,{label:"First option (Arrow key navigation)",value:"option1",testId:"keyboard-1"}),e.jsx(a,{label:"Second option (Arrow key navigation)",value:"option2",testId:"keyboard-2"}),e.jsx(a,{label:"Third option (Arrow key navigation)",value:"option3",testId:"keyboard-3"})]})]})]})]}),parameters:{docs:{description:{story:"Radio sizes, interactive states, and keyboard navigation demonstration."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Select this option',
    value: 'option1',
    name: 'default-radio',
    testId: 'default-radio'
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="radio-variants-title">
          Radio Variants
        </Typography>
        <div className="space-y-3">
          <Radio label="Default radio" value="default" name="variants" testId="variant-default" />
          <Radio label="Checked radio" value="checked" name="variants" defaultChecked testId="variant-checked" />
          <Radio label="Disabled radio" value="disabled" name="variants" disabled testId="variant-disabled" />
          <Radio label="Error radio" value="error" name="variants" error testId="variant-error" />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="button-variants-title">
          Button Style Variants
        </Typography>
        <div className="space-y-3">
          <div className="flex">
            <RadioButton name="button-outline" value="option1" testId="button-outline-1">
              Option 1
            </RadioButton>
            <RadioButton name="button-outline" value="option2" defaultChecked testId="button-outline-2">
              Option 2
            </RadioButton>
            <RadioButton name="button-outline" value="option3" testId="button-outline-3">
              Option 3
            </RadioButton>
          </div>
          <div className="flex">
            <RadioButton name="button-solid" value="solid1" buttonStyle="solid" testId="button-solid-1">
              Solid 1
            </RadioButton>
            <RadioButton name="button-solid" value="solid2" buttonStyle="solid" defaultChecked testId="button-solid-2">
              Solid 2
            </RadioButton>
            <RadioButton name="button-solid" value="solid3" buttonStyle="solid" testId="button-solid-3">
              Solid 3
            </RadioButton>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio variants showing different styles including standard radios and button-style options.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      plan: 'standard',
      billing: 'monthly',
      support: 'email'
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.plan) newErrors.plan = 'Please select a plan';
      if (!formData.billing) newErrors.billing = 'Please select billing frequency';
      setErrors(newErrors);
    };
    return <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="subscription-title">
            Choose Your Plan
          </Typography>
          <Typography variant="body" testId="subscription-description">
            Select the plan that best fits your needs.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="plan-selection-title">
            Plan Selection
          </Typography>
          <div className="space-y-6">
            <div>
              <Typography variant="label" className="block mb-3" testId="plan-label">
                Choose Plan
              </Typography>
              <RadioGroup value={formData.plan} onChange={value => setFormData(prev => ({
              ...prev,
              plan: value
            }))}>
                <Radio label="Basic - $9/month - Essential features" value="basic" testId="plan-basic" />
                <Radio label="Standard - $19/month - Most popular choice" value="standard" testId="plan-standard" />
                <Radio label="Premium - $39/month - All features included" value="premium" testId="plan-premium" />
              </RadioGroup>
              {errors.plan && <Typography variant="caption" color="danger" testId="plan-error">
                  {errors.plan}
                </Typography>}
            </div>

            <div>
              <Typography variant="label" className="block mb-3" testId="billing-label">
                Billing Frequency
              </Typography>
              <div className="flex">
                <RadioButton name="billing" value="monthly" checked={formData.billing === 'monthly'} onChange={() => setFormData(prev => ({
                ...prev,
                billing: 'monthly'
              }))} testId="billing-monthly">
                  Monthly
                </RadioButton>
                <RadioButton name="billing" value="yearly" checked={formData.billing === 'yearly'} onChange={() => setFormData(prev => ({
                ...prev,
                billing: 'yearly'
              }))} testId="billing-yearly">
                  Yearly (Save 20%)
                </RadioButton>
              </div>
            </div>

            <div>
              <Typography variant="label" className="block mb-3" testId="support-label">
                Support Level
              </Typography>
              <RadioGroup value={formData.support} onChange={value => setFormData(prev => ({
              ...prev,
              support: value
            }))}>
                <Radio label="Email support" value="email" testId="support-email" />
                <Radio label="Priority support" value="priority" testId="support-priority" />
                <Radio label="Dedicated support" value="dedicated" testId="support-dedicated" />
              </RadioGroup>
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="primary" onClick={handleSubmit} testId="subscribe-button">
                Subscribe Now
              </Button>
              <Button variant="default" testId="cancel-button">
                Cancel
              </Button>
            </div>
          </div>
        </Card>

        <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
          <Typography variant="h3" color="success" className="mb-2" testId="success-title">
            Subscription Confirmed
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Welcome! Your subscription has been activated and you now have
            access to all features.
          </Typography>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Radio components integrated with other components in realistic subscription form scenarios.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="sizes-title">
          Sizes
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Small
            </Typography>
            <RadioGroup size="small" defaultValue="small2">
              <Radio label="Small option 1" value="small1" testId="small-1" />
              <Radio label="Small option 2" value="small2" testId="small-2" />
            </RadioGroup>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Middle (Default)
            </Typography>
            <RadioGroup size="middle" defaultValue="middle2">
              <Radio label="Middle option 1" value="middle1" testId="middle-1" />
              <Radio label="Middle option 2" value="middle2" testId="middle-2" />
            </RadioGroup>
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Large
            </Typography>
            <RadioGroup size="large" defaultValue="large2">
              <Radio label="Large option 1" value="large1" testId="large-1" />
              <Radio label="Large option 2" value="large2" testId="large-2" />
            </RadioGroup>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="interactive-title">
          Interactive States
        </Typography>
        <div className="space-y-3">
          <Radio label="Normal state" value="normal" name="states" testId="normal-radio" />
          <Radio label="Checked state" value="checked" name="states" defaultChecked testId="checked-radio" />
          <Radio label="Disabled state" value="disabled" name="states" disabled testId="disabled-radio" />
          <Radio label="Error state" value="error" name="states" error testId="error-radio" />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="keyboard-title">
          Keyboard Navigation
        </Typography>
        <Card>
          <Typography variant="body2" className="mb-3" testId="keyboard-instructions">
            <strong>Try this:</strong> Use Tab to focus the group, then Arrow
            keys to navigate between options.
          </Typography>
          <RadioGroup defaultValue="option2">
            <Radio label="First option (Arrow key navigation)" value="option1" testId="keyboard-1" />
            <Radio label="Second option (Arrow key navigation)" value="option2" testId="keyboard-2" />
            <Radio label="Third option (Arrow key navigation)" value="option3" testId="keyboard-3" />
          </RadioGroup>
        </Card>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Radio sizes, interactive states, and keyboard navigation demonstration.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const A=["Default","Variants","Examples","States"];export{d as Default,c as Examples,p as States,n as Variants,A as __namedExportsOrder,P as default};
