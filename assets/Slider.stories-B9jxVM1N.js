import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{S as t}from"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import{B as u}from"./Button-D47seXth.js";import{C as v}from"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import"./Select-Dz7gQkGa.js";import"./XIcon-CZdcAhEp.js";import{r as m}from"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import{T as s}from"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const M={title:"Data Entry/Slider",component:t,parameters:{layout:"padded",docs:{description:{component:`Slider component provides intuitive numeric value selection with comprehensive accessibility support.

\`\`\`tsx
import { Slider } from '@zelda/core';

// Primary usage pattern
<Slider defaultValue={50} />

// Key variant
<Slider 
  value={value} 
  onChange={setValue}
  min={0}
  max={100}
/>
\`\`\`

## Features
- **Range Selection** - Configurable min/max values with custom steps
- **Controlled/Uncontrolled** - Supports both controlled and uncontrolled usage
- **Keyboard Navigation** - Arrow keys, Home, End, Page Up/Down support
- **Visual Feedback** - Clear track, thumb, and hover states

## Accessibility & Testing
- Uses semantic range input with proper ARIA attributes
- Supports full keyboard navigation and screen readers
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const slider = screen.getByTestId('volume-slider');
fireEvent.change(slider, { target: { value: '75' } });
expect(slider).toHaveValue('75');
\`\`\``}}},tags:["autodocs"],argTypes:{value:{control:"number",description:"Current value (controlled)",table:{type:{summary:"number"}}},defaultValue:{control:"number",description:"Default value (uncontrolled)",table:{type:{summary:"number"},defaultValue:{summary:"50"}}},min:{control:"number",description:"Minimum value",table:{type:{summary:"number"},defaultValue:{summary:"0"}}},max:{control:"number",description:"Maximum value",table:{type:{summary:"number"},defaultValue:{summary:"100"}}},step:{control:"number",description:"Step increment",table:{type:{summary:"number"},defaultValue:{summary:"1"}}},disabled:{control:"boolean",description:"Whether slider is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},testId:{control:"text",description:"Test identifier for automated testing"},className:{table:{disable:!0}},onChange:{table:{disable:!0}}}},n={args:{defaultValue:50,testId:"default-slider"}},d={render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"h3",testId:"ranges-title",children:"Different Ranges"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Volume (0-10)"}),e.jsx(t,{min:0,max:10,defaultValue:7,step:1,testId:"volume-slider"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Temperature (-20°C to 40°C)"}),e.jsx(t,{min:-20,max:40,defaultValue:22,step:.5,testId:"temperature-slider"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Percentage (0% to 100%)"}),e.jsx(t,{min:0,max:100,defaultValue:75,step:5,testId:"percentage-slider"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"h3",testId:"states-title",children:"States"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Normal"}),e.jsx(t,{defaultValue:50,testId:"normal-slider"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Disabled"}),e.jsx(t,{defaultValue:60,disabled:!0,testId:"disabled-slider"})]})]})]})]}),parameters:{docs:{description:{story:"Slider variants showing different ranges, steps, and states."}}}},o={render:()=>{const[a,l]=m.useState({volume:75,brightness:60,quality:3,sensitivity:25}),[p,y]=m.useState({}),h=()=>{const r={};a.volume<10&&(r.volume="Volume too low for optimal experience"),y(r)};return e.jsxs("div",{className:"space-y-8 max-w-2xl p-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"h1",color:"primary",testId:"settings-title",children:"System Settings"}),e.jsx(s,{variant:"body",testId:"settings-description",children:"Adjust your system preferences using the sliders below."})]}),e.jsxs(v,{children:[e.jsx(s,{variant:"h2",className:"mb-4",testId:"audio-title",children:"Audio Settings"}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx(s,{variant:"label",testId:"volume-label",children:"Master Volume"}),e.jsxs(s,{variant:"body2",className:"text-gray-600",testId:"volume-value",children:[a.volume,"%"]})]}),e.jsx(t,{value:a.volume,onChange:r=>l(i=>({...i,volume:r})),min:0,max:100,testId:"volume-slider"}),p.volume&&e.jsx(s,{variant:"caption",color:"danger",testId:"volume-error",children:p.volume})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx(s,{variant:"label",testId:"brightness-label",children:"Screen Brightness"}),e.jsxs(s,{variant:"body2",className:"text-gray-600",testId:"brightness-value",children:[a.brightness,"%"]})]}),e.jsx(t,{value:a.brightness,onChange:r=>l(i=>({...i,brightness:r})),min:0,max:100,step:5,testId:"brightness-slider"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx(s,{variant:"label",testId:"quality-label",children:"Graphics Quality"}),e.jsx(s,{variant:"body2",className:"text-gray-600",testId:"quality-value",children:["Low","Medium","High","Ultra","Maximum"][a.quality-1]})]}),e.jsx(t,{value:a.quality,onChange:r=>l(i=>({...i,quality:r})),min:1,max:5,step:1,testId:"quality-slider"})]}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between items-center mb-2",children:[e.jsx(s,{variant:"label",testId:"sensitivity-label",children:"Mouse Sensitivity"}),e.jsx(s,{variant:"body2",className:"text-gray-600",testId:"sensitivity-value",children:(a.sensitivity/10).toFixed(1)})]}),e.jsx(t,{value:a.sensitivity,onChange:r=>l(i=>({...i,sensitivity:r})),min:1,max:50,step:1,testId:"sensitivity-slider"})]}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(u,{variant:"primary",onClick:h,testId:"save-button",children:"Save Settings"}),e.jsx(u,{variant:"default",testId:"reset-button",children:"Reset to Default"})]})]})]}),e.jsxs("div",{className:"p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded",children:[e.jsx(s,{variant:"h3",color:"success",className:"mb-2",testId:"success-title",children:"Settings Saved"}),e.jsx(s,{variant:"body",color:"success",testId:"success-message",children:"Your preferences have been saved and will take effect immediately."})]})]})},parameters:{docs:{description:{story:"Slider components integrated with other components in realistic settings form scenarios."}}}},c={render:()=>{const[a,l]=m.useState(25);return e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"h3",testId:"controlled-title",children:"Controlled Slider"}),e.jsxs("div",{children:[e.jsxs(s,{variant:"body",className:"mb-2",testId:"controlled-description",children:["Current value: ",e.jsx("strong",{children:a})]}),e.jsx(t,{value:a,onChange:l,testId:"controlled-slider"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"h3",testId:"step-values-title",children:"Step Values"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Fine Control (step: 0.1)"}),e.jsx(t,{min:0,max:10,step:.1,defaultValue:5.5,testId:"fine-slider"})]}),e.jsxs("div",{children:[e.jsx(s,{variant:"label",className:"block mb-2",children:"Coarse Control (step: 10)"}),e.jsx(t,{min:0,max:100,step:10,defaultValue:50,testId:"coarse-slider"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{variant:"h3",testId:"keyboard-title",children:"Keyboard Navigation"}),e.jsxs(v,{children:[e.jsxs(s,{variant:"body2",className:"mb-3",testId:"keyboard-instructions",children:[e.jsx("strong",{children:"Try this:"})," Focus the slider and use Arrow keys, Home, End, Page Up/Down to navigate."]}),e.jsx(t,{defaultValue:50,testId:"keyboard-slider"})]})]})]})},parameters:{docs:{description:{story:"Slider states including controlled usage, step values, and keyboard navigation demonstration."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: 50,
    testId: 'default-slider'
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="ranges-title">
          Different Ranges
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Volume (0-10)
            </Typography>
            <Slider min={0} max={10} defaultValue={7} step={1} testId="volume-slider" />
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Temperature (-20°C to 40°C)
            </Typography>
            <Slider min={-20} max={40} defaultValue={22} step={0.5} testId="temperature-slider" />
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Percentage (0% to 100%)
            </Typography>
            <Slider min={0} max={100} defaultValue={75} step={5} testId="percentage-slider" />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="states-title">
          States
        </Typography>
        <div className="space-y-4">
          <div>
            <Typography variant="label" className="block mb-2">
              Normal
            </Typography>
            <Slider defaultValue={50} testId="normal-slider" />
          </div>
          <div>
            <Typography variant="label" className="block mb-2">
              Disabled
            </Typography>
            <Slider defaultValue={60} disabled testId="disabled-slider" />
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Slider variants showing different ranges, steps, and states.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [settings, setSettings] = useState({
      volume: 75,
      brightness: 60,
      quality: 3,
      sensitivity: 25
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const handleSave = () => {
      const newErrors: Record<string, string> = {};
      if (settings.volume < 10) {
        newErrors.volume = 'Volume too low for optimal experience';
      }
      setErrors(newErrors);
    };
    return <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="settings-title">
            System Settings
          </Typography>
          <Typography variant="body" testId="settings-description">
            Adjust your system preferences using the sliders below.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="audio-title">
            Audio Settings
          </Typography>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="volume-label">
                  Master Volume
                </Typography>
                <Typography variant="body2" className="text-gray-600" testId="volume-value">
                  {settings.volume}%
                </Typography>
              </div>
              <Slider value={settings.volume} onChange={value => setSettings(prev => ({
              ...prev,
              volume: value
            }))} min={0} max={100} testId="volume-slider" />
              {errors.volume && <Typography variant="caption" color="danger" testId="volume-error">
                  {errors.volume}
                </Typography>}
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="brightness-label">
                  Screen Brightness
                </Typography>
                <Typography variant="body2" className="text-gray-600" testId="brightness-value">
                  {settings.brightness}%
                </Typography>
              </div>
              <Slider value={settings.brightness} onChange={value => setSettings(prev => ({
              ...prev,
              brightness: value
            }))} min={0} max={100} step={5} testId="brightness-slider" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="quality-label">
                  Graphics Quality
                </Typography>
                <Typography variant="body2" className="text-gray-600" testId="quality-value">
                  {['Low', 'Medium', 'High', 'Ultra', 'Maximum'][settings.quality - 1]}
                </Typography>
              </div>
              <Slider value={settings.quality} onChange={value => setSettings(prev => ({
              ...prev,
              quality: value
            }))} min={1} max={5} step={1} testId="quality-slider" />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <Typography variant="label" testId="sensitivity-label">
                  Mouse Sensitivity
                </Typography>
                <Typography variant="body2" className="text-gray-600" testId="sensitivity-value">
                  {(settings.sensitivity / 10).toFixed(1)}
                </Typography>
              </div>
              <Slider value={settings.sensitivity} onChange={value => setSettings(prev => ({
              ...prev,
              sensitivity: value
            }))} min={1} max={50} step={1} testId="sensitivity-slider" />
            </div>

            <div className="flex gap-2 pt-4">
              <Button variant="primary" onClick={handleSave} testId="save-button">
                Save Settings
              </Button>
              <Button variant="default" testId="reset-button">
                Reset to Default
              </Button>
            </div>
          </div>
        </Card>

        <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
          <Typography variant="h3" color="success" className="mb-2" testId="success-title">
            Settings Saved
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Your preferences have been saved and will take effect immediately.
          </Typography>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider components integrated with other components in realistic settings form scenarios.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [controlledValue, setControlledValue] = useState(25);
    return <div className="space-y-6 p-4">
        <div className="space-y-4">
          <Typography variant="h3" testId="controlled-title">
            Controlled Slider
          </Typography>
          <div>
            <Typography variant="body" className="mb-2" testId="controlled-description">
              Current value: <strong>{controlledValue}</strong>
            </Typography>
            <Slider value={controlledValue} onChange={setControlledValue} testId="controlled-slider" />
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" testId="step-values-title">
            Step Values
          </Typography>
          <div className="space-y-4">
            <div>
              <Typography variant="label" className="block mb-2">
                Fine Control (step: 0.1)
              </Typography>
              <Slider min={0} max={10} step={0.1} defaultValue={5.5} testId="fine-slider" />
            </div>
            <div>
              <Typography variant="label" className="block mb-2">
                Coarse Control (step: 10)
              </Typography>
              <Slider min={0} max={100} step={10} defaultValue={50} testId="coarse-slider" />
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <Typography variant="h3" testId="keyboard-title">
            Keyboard Navigation
          </Typography>
          <Card>
            <Typography variant="body2" className="mb-3" testId="keyboard-instructions">
              <strong>Try this:</strong> Focus the slider and use Arrow keys,
              Home, End, Page Up/Down to navigate.
            </Typography>
            <Slider defaultValue={50} testId="keyboard-slider" />
          </Card>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Slider states including controlled usage, step values, and keyboard navigation demonstration.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const B=["Default","Variants","Examples","States"];export{n as Default,o as Examples,c as States,d as Variants,B as __namedExportsOrder,M as default};
