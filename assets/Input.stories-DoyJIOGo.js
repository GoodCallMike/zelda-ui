import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import"./index-BO_-okRC.js";import"./Badge-CRde4N6t.js";import{B as y}from"./Button-D47seXth.js";import{C as v}from"./Card-wdOfiPjM.js";import"./Divider-BkIFKrrr.js";import{I as a}from"./Select-Dz7gQkGa.js";import{U as g,M as w,E as I,b as x}from"./XIcon-CZdcAhEp.js";import{r as b}from"./iframe-CzqNFs5z.js";import"./index-BkXu0jZL.js";import{T as r}from"./Typography-9lRHdsZv.js";import"./ToastManager-Du0hjtWX.js";import"./Tooltip-CFiTsKeH.js";import"./index-BDV_RS0N.js";import"./index-CgFr1-eQ.js";import"./client-ByRAcdkp.js";import"./preload-helper-BXl3LOEh.js";const U={title:"Data Entry/Input",component:a,parameters:{layout:"padded",docs:{description:{component:`Input component provides versatile text input functionality with comprehensive accessibility support.

\`\`\`tsx
import { Input } from '@zelda/core';

// Primary usage pattern
<Input placeholder="Enter text..." />

// Key variant
<Input variant="filled" label="Full Name" />
\`\`\`

## Variants
- **default** - Standard border styling (most common)
- **filled** - Background filled styling for forms
- **borderless** - Clean minimal styling for search/filters

## Sizes
- **small** - Compact inputs for dense layouts
- **medium** - Standard size for most use cases (default)
- **large** - Prominent inputs for key actions

## Features
- **Clear Button** - Optional clear functionality with allowClear
- **Character Count** - Live character counting with showCount
- **Prefix/Suffix** - Icons and text inside input borders
- **Addons** - Connected elements outside input borders
- **Textarea Mode** - Multi-line text input with type="textarea"

## Accessibility & Testing
- Uses semantic HTML input elements with proper labeling
- Supports full keyboard navigation and screen readers
- Maintains WCAG AA contrast ratios in all themes
- Comprehensive testId support for automated testing

\`\`\`tsx
// Testing approach
const input = screen.getByTestId('email-input');
await user.type(input, 'user@example.com');
expect(input).toHaveValue('user@example.com');
\`\`\``}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","search","url","tel","number","textarea"],description:'Input type - use "textarea" for multiline input',table:{type:{summary:"string"},defaultValue:{summary:"text"}}},variant:{control:"select",options:["default","filled","borderless"],description:"Visual variant of the input",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"Size of the input",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},status:{control:"select",options:[void 0,"error","warning"],description:"Status state for validation feedback",table:{type:{summary:"string"}}},disabled:{control:"boolean",description:"Whether the input is disabled",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},allowClear:{control:"boolean",description:"Show clear button when input has value",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},showCount:{control:"boolean",description:"Show character count",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},testId:{control:"text",description:"Test identifier for automated testing"},className:{table:{disable:!0}},onChange:{table:{disable:!0}},label:{table:{disable:!0}},placeholder:{table:{disable:!0}},maxLength:{table:{disable:!0}},addonBefore:{table:{disable:!0}},addonAfter:{table:{disable:!0}}}},d={args:{placeholder:"Enter text...",testId:"default-input"}},c={render:()=>e.jsx("div",{className:"space-y-4 p-4",children:e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{variant:"default",label:"Default",placeholder:"Standard border styling",testId:"variant-default"}),e.jsx(a,{variant:"filled",label:"Filled",placeholder:"Background filled styling",testId:"variant-filled"}),e.jsx(a,{variant:"borderless",label:"Borderless",placeholder:"Clean minimal styling",testId:"variant-borderless"})]})}),parameters:{docs:{description:{story:"Input variants showing different visual styles for various use cases."}}}},u={render:()=>{const[i,n]=b.useState({email:"",password:"",website:"",bio:""}),[o,m]=b.useState({}),h=(s,t)=>{const l={...o};switch(s){case"email":t&&!t.includes("@")?l.email="Please enter a valid email address":delete l.email;break;case"password":t.length>0&&t.length<8?l.password="Password must be at least 8 characters":delete l.password;break}m(l)},f=()=>{const s={};i.email||(s.email="Email is required"),i.password||(s.password="Password is required"),m(s)};return e.jsxs("div",{className:"space-y-8 max-w-2xl p-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h1",color:"primary",testId:"form-title",children:"User Registration"}),e.jsx(r,{variant:"body",testId:"form-description",children:"Create your account with the information below."})]}),e.jsxs(v,{children:[e.jsx(r,{variant:"h2",className:"mb-4",testId:"account-title",children:"Account Information"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(a,{label:"Full Name",prefix:e.jsx(g,{className:"w-4 h-4"}),placeholder:"Enter your full name",testId:"name-input"}),e.jsx(a,{label:"Email Address",type:"email",prefix:e.jsx(w,{className:"w-4 h-4"}),placeholder:"Enter your email",value:i.email,onChange:s=>{const t=s.target.value;n(l=>({...l,email:t})),h("email",t)},status:o.email?"error":void 0,testId:"email-input"}),o.email&&e.jsx(r,{variant:"caption",color:"danger",testId:"email-error",children:o.email}),e.jsx(a,{label:"Password",type:"password",prefix:e.jsx(I,{className:"w-4 h-4"}),placeholder:"Create a secure password",value:i.password,onChange:s=>{const t=s.target.value;n(l=>({...l,password:t})),h("password",t)},status:o.password?"error":void 0,showCount:!0,maxLength:50,testId:"password-input"}),o.password&&e.jsx(r,{variant:"caption",color:"danger",testId:"password-error",children:o.password}),e.jsx(a,{label:"Website",addonBefore:"https://",addonAfter:".com",placeholder:"your-website",value:i.website,onChange:s=>n(t=>({...t,website:s.target.value})),testId:"website-input"}),e.jsx(a,{type:"textarea",label:"Bio",placeholder:"Tell us about yourself...",rows:4,showCount:!0,maxLength:200,allowClear:!0,value:i.bio,onChange:s=>n(t=>({...t,bio:s.target.value})),testId:"bio-input"}),e.jsxs("div",{className:"flex gap-2 pt-4",children:[e.jsx(y,{variant:"primary",onClick:f,testId:"submit-button",children:"Create Account"}),e.jsx(y,{variant:"default",testId:"cancel-button",children:"Cancel"})]})]})]}),e.jsxs("div",{className:"p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded",children:[e.jsx(r,{variant:"h3",color:"success",className:"mb-2",testId:"success-title",children:"Account Created Successfully"}),e.jsx(r,{variant:"body",color:"success",testId:"success-message",children:"Welcome! Your account has been created and you can now access all features."})]})]})},parameters:{docs:{description:{story:"Input components integrated with other components in realistic form scenarios."}}}},p={render:()=>e.jsxs("div",{className:"space-y-6 p-4",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h3",testId:"sizes-title",children:"Sizes"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{size:"small",label:"Small",placeholder:"Small input",testId:"small-input"}),e.jsx(a,{size:"medium",label:"Medium",placeholder:"Medium input (default)",testId:"medium-input"}),e.jsx(a,{size:"large",label:"Large",placeholder:"Large input",testId:"large-input"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h3",testId:"status-title",children:"Status States"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"Normal",placeholder:"Normal state",testId:"normal-input"}),e.jsx(a,{label:"Warning",status:"warning",defaultValue:"Warning value",testId:"warning-input"}),e.jsx(a,{label:"Error",status:"error",defaultValue:"Invalid value",testId:"error-input"}),e.jsx(a,{label:"Disabled",disabled:!0,placeholder:"Disabled input",testId:"disabled-input"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(r,{variant:"h3",testId:"features-title",children:"Features"}),e.jsxs(v,{children:[e.jsxs(r,{variant:"body2",className:"mb-3",testId:"features-description",children:[e.jsx("strong",{children:"Interactive Features:"})," Try the clear button and character counting."]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(a,{label:"With Clear Button",placeholder:"Type something...",allowClear:!0,defaultValue:"Clear me!",testId:"clear-input"}),e.jsx(a,{label:"Character Count",placeholder:"Max 50 characters",showCount:!0,maxLength:50,defaultValue:"Count characters",testId:"count-input"}),e.jsx(a,{label:"Search with Prefix",prefix:e.jsx(x,{className:"w-4 h-4"}),placeholder:"Search items...",allowClear:!0,testId:"search-input"})]})]})]})]}),parameters:{docs:{description:{story:"Input sizes, status states, and interactive features demonstration."}}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Enter text...',
    testId: 'default-input'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 p-4">
      <div className="space-y-3">
        <Input variant="default" label="Default" placeholder="Standard border styling" testId="variant-default" />
        <Input variant="filled" label="Filled" placeholder="Background filled styling" testId="variant-filled" />
        <Input variant="borderless" label="Borderless" placeholder="Clean minimal styling" testId="variant-borderless" />
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input variants showing different visual styles for various use cases.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
      website: '',
      bio: ''
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const validateField = (field: string, value: string) => {
      const newErrors = {
        ...errors
      };
      switch (field) {
        case 'email':
          if (value && !value.includes('@')) {
            newErrors.email = 'Please enter a valid email address';
          } else {
            delete newErrors.email;
          }
          break;
        case 'password':
          if (value.length > 0 && value.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
          } else {
            delete newErrors.password;
          }
          break;
      }
      setErrors(newErrors);
    };
    const handleSubmit = () => {
      const newErrors: Record<string, string> = {};
      if (!formData.email) newErrors.email = 'Email is required';
      if (!formData.password) newErrors.password = 'Password is required';
      setErrors(newErrors);
    };
    return <div className="space-y-8 max-w-2xl p-6">
        <div className="space-y-4">
          <Typography variant="h1" color="primary" testId="form-title">
            User Registration
          </Typography>
          <Typography variant="body" testId="form-description">
            Create your account with the information below.
          </Typography>
        </div>

        <Card>
          <Typography variant="h2" className="mb-4" testId="account-title">
            Account Information
          </Typography>
          <div className="space-y-4">
            <Input label="Full Name" prefix={<User01Icon className="w-4 h-4" />} placeholder="Enter your full name" testId="name-input" />

            <Input label="Email Address" type="email" prefix={<Mail01Icon className="w-4 h-4" />} placeholder="Enter your email" value={formData.email} onChange={e => {
            const value = e.target.value;
            setFormData(prev => ({
              ...prev,
              email: value
            }));
            validateField('email', value);
          }} status={errors.email ? 'error' : undefined} testId="email-input" />
            {errors.email && <Typography variant="caption" color="danger" testId="email-error">
                {errors.email}
              </Typography>}

            <Input label="Password" type="password" prefix={<EyeIcon className="w-4 h-4" />} placeholder="Create a secure password" value={formData.password} onChange={e => {
            const value = e.target.value;
            setFormData(prev => ({
              ...prev,
              password: value
            }));
            validateField('password', value);
          }} status={errors.password ? 'error' : undefined} showCount maxLength={50} testId="password-input" />
            {errors.password && <Typography variant="caption" color="danger" testId="password-error">
                {errors.password}
              </Typography>}

            <Input label="Website" addonBefore="https://" addonAfter=".com" placeholder="your-website" value={formData.website} onChange={e => setFormData(prev => ({
            ...prev,
            website: e.target.value
          }))} testId="website-input" />

            <Input type="textarea" label="Bio" placeholder="Tell us about yourself..." rows={4} showCount maxLength={200} allowClear value={formData.bio} onChange={e => setFormData(prev => ({
            ...prev,
            bio: e.target.value
          }))} testId="bio-input" />

            <div className="flex gap-2 pt-4">
              <Button variant="primary" onClick={handleSubmit} testId="submit-button">
                Create Account
              </Button>
              <Button variant="default" testId="cancel-button">
                Cancel
              </Button>
            </div>
          </div>
        </Card>

        <div className="p-4 bg-rupee-50 dark:bg-rupee-900/20 border-rupee-200 dark:border-rupee-600 border rounded">
          <Typography variant="h3" color="success" className="mb-2" testId="success-title">
            Account Created Successfully
          </Typography>
          <Typography variant="body" color="success" testId="success-message">
            Welcome! Your account has been created and you can now access all
            features.
          </Typography>
        </div>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Input components integrated with other components in realistic form scenarios.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 p-4">
      <div className="space-y-4">
        <Typography variant="h3" testId="sizes-title">
          Sizes
        </Typography>
        <div className="space-y-3">
          <Input size="small" label="Small" placeholder="Small input" testId="small-input" />
          <Input size="medium" label="Medium" placeholder="Medium input (default)" testId="medium-input" />
          <Input size="large" label="Large" placeholder="Large input" testId="large-input" />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="status-title">
          Status States
        </Typography>
        <div className="space-y-3">
          <Input label="Normal" placeholder="Normal state" testId="normal-input" />
          <Input label="Warning" status="warning" defaultValue="Warning value" testId="warning-input" />
          <Input label="Error" status="error" defaultValue="Invalid value" testId="error-input" />
          <Input label="Disabled" disabled placeholder="Disabled input" testId="disabled-input" />
        </div>
      </div>

      <div className="space-y-4">
        <Typography variant="h3" testId="features-title">
          Features
        </Typography>
        <Card>
          <Typography variant="body2" className="mb-3" testId="features-description">
            <strong>Interactive Features:</strong> Try the clear button and
            character counting.
          </Typography>
          <div className="space-y-3">
            <Input label="With Clear Button" placeholder="Type something..." allowClear defaultValue="Clear me!" testId="clear-input" />
            <Input label="Character Count" placeholder="Max 50 characters" showCount maxLength={50} defaultValue="Count characters" testId="count-input" />
            <Input label="Search with Prefix" prefix={<SearchLgIcon className="w-4 h-4" />} placeholder="Search items..." allowClear testId="search-input" />
          </div>
        </Card>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Input sizes, status states, and interactive features demonstration.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const R=["Default","Variants","Examples","States"];export{d as Default,u as Examples,p as States,c as Variants,R as __namedExportsOrder,U as default};
