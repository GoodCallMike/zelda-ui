import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{C as t}from"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import{B as p}from"./Button-D47seXth.js";import{C as k}from"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import"./Select-Dz7gQkGa.js";import"./XIcon-CZdcAhEp.js";import{r as m}from"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import{T as r}from"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const U={title:"Data Entry/Checkbox",component:t,parameters:{layout:"padded",docs:{description:{component:`Checkbox component provides multi-choice selection with comprehensive accessibility support.

\`\`\`tsx
import { Checkbox } from '@zelda/core';

// Primary usage pattern
<Checkbox label="Accept terms" />

// Key variant
<Checkbox label="Enable notifications" defaultChecked />
\`\`\`

## States
- **default** - Unchecked state (empty checkbox)
- **checked** - Selected state (checkmark visible)
- **error** - Validation error (red styling)
- **disabled** - Non-interactive (grayed out)

## Accessibility & Testing
- Uses semantic checkbox input with proper labeling
- Supports Space/Enter activation and Tab navigation
- Maintains WCAG AA contrast ratios in all themes

\`\`\`tsx
// Testing approach
const checkbox = screen.getByTestId('terms-checkbox');
expect(checkbox).toBeEnabled();
await user.click(checkbox);
\`\`\``}}},tags:["autodocs"],argTypes:{disabled:{control:"boolean",description:"Prevents user interaction",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},error:{control:"text",description:"Error message to display",table:{type:{summary:"string"}}},testId:{control:"text",description:"Test identifier for automated testing"},className:{table:{disable:!0}},onChange:{table:{disable:!0}},label:{table:{disable:!0}}}},i={args:{label:"Accept terms and conditions",testId:"terms-checkbox"}},d={render:()=>e.jsx("div",{className:"space-y-4 p-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Default unchecked",testId:"variant-default"}),e.jsx(t,{label:"Default checked",defaultChecked:!0,testId:"variant-checked"}),e.jsx(t,{label:"Error state",error:"This field is required",testId:"variant-error"}),e.jsx(t,{label:"Disabled unchecked",disabled:!0,testId:"variant-disabled"}),e.jsx(t,{label:"Disabled checked",disabled:!0,defaultChecked:!0,testId:"variant-disabled-checked"})]})}),parameters:{docs:{description:{story:"All checkbox states showing default, checked, error, and disabled variations."}}}},n={render:()=>{const[c,o]=m.useState({notifications:!0,newsletter:!1,analytics:!1,terms:!1}),[h,b]=m.useState({}),u=()=>{const s={};c.terms||(s.terms="You must accept the terms to continue"),b(s)};return e.jsxs("div",{className:"space-y-8 max-w-2xl p-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h1",color:"primary",testId:"settings-title",children:"Account Preferences"}),e.jsx(r,{variant:"body",testId:"settings-description",children:"Customize your account settings and notification preferences."})]}),e.jsxs(k,{children:[e.jsx(r,{variant:"h2",className:"mb-4",testId:"form-title",children:"Notification Settings"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(r,{variant:"label",className:"block mb-3",testId:"notifications-label",children:"Email Preferences"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Push notifications",checked:c.notifications,onChange:s=>o(a=>({...a,notifications:s})),testId:"notifications-checkbox"}),e.jsx(t,{label:"Weekly newsletter",checked:c.newsletter,onChange:s=>o(a=>({...a,newsletter:s})),testId:"newsletter-checkbox"}),e.jsx(t,{label:"Usage analytics",checked:c.analytics,onChange:s=>o(a=>({...a,analytics:s})),testId:"analytics-checkbox"})]})]}),e.jsx("div",{className:"pt-4 border-t",children:e.jsx(t,{label:"I accept the terms of service and privacy policy",checked:c.terms,onChange:s=>{o(a=>({...a,terms:s})),s&&h.terms&&b(a=>({...a,terms:""}))},error:h.terms,testId:"terms-checkbox"})}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(p,{variant:"primary",onClick:u,testId:"save-button",children:"Save Preferences"}),e.jsx(p,{variant:"default",testId:"cancel-button",children:"Cancel"})]})]})]}),e.jsxs("div",{className:"p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded",children:[e.jsx(r,{variant:"h3",color:"success",className:"mb-2",testId:"success-title",children:"Settings Saved"}),e.jsx(r,{variant:"body",color:"success",testId:"success-message",children:"Your preferences have been successfully updated and will take effect immediately."})]})]})},parameters:{docs:{description:{story:"Checkbox components integrated with other components in realistic form scenarios."}}}},l={render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h3",testId:"states-title",children:"Interactive States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{label:"Normal state",testId:"normal-checkbox"}),e.jsx(t,{label:"Checked state",defaultChecked:!0,testId:"checked-checkbox"}),e.jsx(t,{label:"Disabled state",disabled:!0,testId:"disabled-checkbox"}),e.jsx(t,{label:"Disabled checked",disabled:!0,defaultChecked:!0,testId:"disabled-checked-checkbox"}),e.jsx(t,{label:"Error state",error:"This field is required",testId:"error-checkbox"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h3",testId:"keyboard-title",children:"Keyboard Navigation"}),e.jsxs(k,{children:[e.jsxs(r,{variant:"body2",className:"mb-3",testId:"keyboard-instructions",children:[e.jsx("strong",{children:"Try this:"})," Use Tab to navigate between checkboxes, Space or Enter to toggle them."]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{label:"First checkbox (Tab order 1)",testId:"keyboard-1"}),e.jsx(t,{label:"Second checkbox (Tab order 2)",testId:"keyboard-2"}),e.jsx(t,{label:"Third checkbox (Tab order 3)",testId:"keyboard-3"})]})]})]})]}),parameters:{docs:{description:{story:"Checkbox states and keyboard navigation demonstration."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Accept terms and conditions',
    testId: 'terms-checkbox'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="space-y-3">
        <Checkbox label="Default unchecked" testId="variant-default" />
        <Checkbox label="Default checked" defaultChecked testId="variant-checked" />
        <Checkbox label="Error state" error="This field is required" testId="variant-error" />
        <Checkbox label="Disabled unchecked" disabled testId="variant-disabled" />
        <Checkbox label="Disabled checked" disabled defaultChecked testId="variant-disabled-checked" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All checkbox states showing default, checked, error, and disabled variations.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [preferences, setPreferences] = useState({
      notifications: true,
      newsletter: false,
      analytics: false,
      terms: false
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!preferences.terms) {
        newErrors.terms = 'You must accept the terms to continue';
      }
      setErrors(newErrors);
    };
    return <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="settings-title">
            Account Preferences
          </Typography>
          <Typography variant="body" testId="settings-description">
            Customize your account settings and notification preferences.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="form-title">
            Notification Settings
          </Typography>
          <div className="space-y-4">
            <div>
              <Typography variant="label" className="block mb-3" testId="notifications-label">
                Email Preferences
              </Typography>
              <div className="space-y-3">
                <Checkbox label="Push notifications" checked={preferences.notifications} onChange={checked => setPreferences(prev => ({
                ...prev,
                notifications: checked
              }))} testId="notifications-checkbox" />
                <Checkbox label="Weekly newsletter" checked={preferences.newsletter} onChange={checked => setPreferences(prev => ({
                ...prev,
                newsletter: checked
              }))} testId="newsletter-checkbox" />
                <Checkbox label="Usage analytics" checked={preferences.analytics} onChange={checked => setPreferences(prev => ({
                ...prev,
                analytics: checked
              }))} testId="analytics-checkbox" />
              </div>
            </div>

            <div className="pt-4 border-t">
              <Checkbox label="I accept the terms of service and privacy policy" checked={preferences.terms} onChange={checked => {
              setPreferences(prev => ({
                ...prev,
                terms: checked
              }));
              if (checked && errors.terms) {
                setErrors(prev => ({
                  ...prev,
                  terms: ''
                }));
              }
            }} error={errors.terms} testId="terms-checkbox" />
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="primary" onClick={handleSubmit} testId="save-button">
                Save Preferences
              </Button>
              <Button variant="default" testId="cancel-button">
                Cancel
              </Button>
            </div>
          </div>
        </Card>

        <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
          <Typography variant="h3" color="success" className="mb-2" testId="success-title">
            Settings Saved
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Your preferences have been successfully updated and will take effect
            immediately.
          </Typography>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox components integrated with other components in realistic form scenarios.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="states-title">
          Interactive States
        </Typography>
        <div className="space-y-3">
          <Checkbox label="Normal state" testId="normal-checkbox" />
          <Checkbox label="Checked state" defaultChecked testId="checked-checkbox" />
          <Checkbox label="Disabled state" disabled testId="disabled-checkbox" />
          <Checkbox label="Disabled checked" disabled defaultChecked testId="disabled-checked-checkbox" />
          <Checkbox label="Error state" error="This field is required" testId="error-checkbox" />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="keyboard-title">
          Keyboard Navigation
        </Typography>
        <Card>
          <Typography variant="body2" className="mb-3" testId="keyboard-instructions">
            <strong>Try this:</strong> Use Tab to navigate between checkboxes,
            Space or Enter to toggle them.
          </Typography>
          <div className="space-y-2">
            <Checkbox label="First checkbox (Tab order 1)" testId="keyboard-1" />
            <Checkbox label="Second checkbox (Tab order 2)" testId="keyboard-2" />
            <Checkbox label="Third checkbox (Tab order 3)" testId="keyboard-3" />
          </div>
        </Card>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Checkbox states and keyboard navigation demonstration.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const q=["Default","Variants","Examples","States"];export{i as Default,n as Examples,l as States,d as Variants,q as __namedExportsOrder,U as default};
