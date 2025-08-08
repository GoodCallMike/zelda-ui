import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{r as o}from"./iframe-CzqNFs5z.js";import{B as s}from"./Button-D47seXth.js";import{I as n,S as k}from"./Select-Dz7gQkGa.js";import{T as t}from"./Typography-9lRHdsZv.js";import{X as F}from"./XIcon-CZdcAhEp.js";import{r as R}from"./index-BkXu0jZL.js";import{c as A}from"./index-BDV_RS0N.js";import"./preload-helper-BXl3LOEh.js";import"./index-CgFr1-eQ.js";const E="_backdrop_1u3cn_2",O="_backdropOpen_1u3cn_19",D="_magicalBackdrop_1u3cn_1",z="_modal_1u3cn_25",_="_modalOpen_1u3cn_48",H="_magicalModal_1u3cn_1",q="_content_1u3cn_55",L="_titleRow_1u3cn_62",K="_shimmer_1u3cn_1",P="_title_1u3cn_62",G="_closeButton_1u3cn_94",U="_body_1u3cn_107",W="_small_1u3cn_112",V="_medium_1u3cn_117",Q="_large_1u3cn_122",J="_fullscreen_1u3cn_127",u={backdrop:E,backdropOpen:O,magicalBackdrop:D,modal:z,modalOpen:_,magicalModal:H,content:q,titleRow:L,shimmer:K,title:P,closeButton:G,body:U,small:W,medium:V,large:Q,fullscreen:J},l=({open:i,onClose:a,title:d,children:r,size:c="medium",closable:m=!0,maskClosable:x=!0,className:b,testId:I})=>{const h=o.useCallback(y=>{y.key==="Escape"&&a()},[a]);if(o.useEffect(()=>{if(i)return document.addEventListener("keydown",h),document.body.style.overflow="hidden",()=>{document.removeEventListener("keydown",h),document.body.style.overflow=""}},[i,h]),!i)return null;const g=y=>{y.target===y.currentTarget&&x&&a()};return R.createPortal(e.jsx("div",{className:A(u.backdrop,u.backdropOpen),onClick:g,onKeyDown:y=>y.key==="Enter"&&x&&a(),role:"button",tabIndex:-1,"aria-label":"Modal backdrop","data-testid":I,children:e.jsx("div",{className:A(u.modal,u[c],u.modalOpen,b),role:"dialog","aria-modal":"true","aria-labelledby":d?"modal-title":void 0,children:e.jsxs("div",{className:u.content,children:[(d||m)&&e.jsxs("div",{className:u.titleRow,children:[d&&e.jsx(t,{variant:"h3",id:"modal-title",className:u.title,children:d}),m&&e.jsx(s,{variant:"text",size:"small",onClick:a,className:u.closeButton,"aria-label":"Close modal",icon:F})]}),e.jsx("div",{className:u.body,children:r})]})})}),document.body)},oe={title:"Feedback/Modal",component:l,parameters:{layout:"padded",docs:{description:{component:`Overlay dialogs that focus user attention on critical tasks while blocking interaction with the background content.

\`\`\`tsx
import { Modal } from '@zelda/core';

// Essential usage
const [open, setOpen] = useState(false);

<Modal open={open} onClose={() => setOpen(false)} title="Confirm Action">
  <p>Are you sure you want to proceed?</p>
  <div className="flex gap-2 justify-end mt-4">
    <Button onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="primary" onClick={() => setOpen(false)}>Confirm</Button>
  </div>
</Modal>
\`\`\`

## Sizes
- **small** - Confirmations and simple dialogs
- **medium** - Standard forms and content (default)
- **large** - Complex forms and detailed content
- **fullscreen** - Maximum content display

## Accessibility & Testing
- Traps focus within modal and restores on close
- Escape key closes modal, proper tab order maintained
- Uses semantic \`role="dialog"\` and \`aria-modal="true"\`
- Prevents background scrolling when open

> **Your Responsibility**: Provide clear modal titles and proper action buttons. This component handles focus management and keyboard navigation.

\`\`\`tsx
// Testing approach
const modal = screen.getByRole('dialog');
expect(modal).toHaveAttribute('aria-modal', 'true');
fireEvent.keyDown(document, { key: 'Escape' });
expect(modal).not.toBeInTheDocument();
\`\`\``}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether the modal is visible",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},title:{control:"text",description:"Modal title displayed in header",table:{type:{summary:"string"}}},size:{control:"select",options:["small","medium","large","fullscreen"],description:"Size variant of the modal",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},closable:{control:"boolean",description:"Whether to show close button in header",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},maskClosable:{control:"boolean",description:"Whether clicking backdrop closes modal",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},testId:{control:"text",description:"Test identifier for automated testing",table:{type:{summary:"string"}}}}},f={render:()=>{const[i,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(l,{open:i,onClose:()=>a(!1),title:"Basic Modal",children:[e.jsx(t,{variant:"body1",children:"Some contents..."}),e.jsx(t,{variant:"body1",children:"Some contents..."}),e.jsx(t,{variant:"body1",children:"Some contents..."})]})]})}},j={render:()=>{const[i,a]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:()=>a(!0),children:"Open Modal"}),e.jsxs(l,{open:i,onClose:()=>a(!1),title:"Confirm Changes",children:[e.jsx(t,{variant:"body1",className:"mb-4",children:"Your changes will be saved and applied immediately. Are you ready to proceed?"}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{variant:"default",onClick:()=>a(!1),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>a(!1),children:"Save Changes"})]})]})]})},parameters:{docs:{description:{story:"Modal with title, content, and action buttons for user confirmation."}}}},N={render:()=>{const[i,a]=o.useState("medium"),[d,r]=o.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-2 mb-4",children:[e.jsx(s,{onClick:()=>{a("small"),r(!0)},children:"Small"}),e.jsx(s,{onClick:()=>{a("medium"),r(!0)},children:"Medium"}),e.jsx(s,{onClick:()=>{a("large"),r(!0)},children:"Large"}),e.jsx(s,{onClick:()=>{a("fullscreen"),r(!0)},children:"Fullscreen"})]}),e.jsx(l,{open:d,onClose:()=>r(!1),title:`${i.charAt(0).toUpperCase()+i.slice(1)} Modal`,size:i,children:e.jsxs(t,{variant:"body1",children:["This is a ",i," modal demonstrating different size options for various use cases."]})})]})},parameters:{docs:{description:{story:"Different modal sizes: small for confirmations, medium for standard content, large for complex forms, and fullscreen for maximum display."}}}},T={render:()=>{const[i,a]=o.useState(!1),[d,r]=o.useState(!1),[c,m]=o.useState(!1),[x,b]=o.useState(!1),[I,h]=o.useState(!1),[g,y]=o.useState(""),[w,S]=o.useState({name:"",email:"",message:""}),B=()=>{y("Form submitted successfully!"),h(!1),setTimeout(()=>y(""),3e3)};return e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{className:"p-4 border rounded-lg bg-blue-50",children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"🔍 Modal Accessibility Comprehensive Demo"}),e.jsx(t,{variant:"body2",className:"mb-4",children:"This story demonstrates the Modal's complete accessibility features including focus management, keyboard navigation, ARIA attributes, and screen reader optimizations."}),e.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-3",children:[e.jsx(s,{onClick:()=>a(!0),children:"Basic Features"}),e.jsx(s,{onClick:()=>r(!0),children:"Focus Management"}),e.jsx(s,{onClick:()=>m(!0),children:"Keyboard Navigation"}),e.jsx(s,{onClick:()=>b(!0),children:"ARIA Attributes"}),e.jsx(s,{onClick:()=>h(!0),children:"Screen Reader"})]})]}),e.jsx("div",{"aria-live":"polite","aria-atomic":"true",className:"sr-only",children:g}),e.jsx(l,{open:i,onClose:()=>a(!1),title:"Basic Accessibility Features",testId:"basic-accessibility-modal",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"body1",children:"This modal demonstrates fundamental accessibility features:"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:[e.jsx(t,{variant:"body2",className:"font-semibold text-green-800 mb-2",children:"✅ Semantic Structure"}),e.jsxs("ul",{className:"text-sm space-y-1 text-green-700",children:[e.jsxs("li",{children:["• ",e.jsx("code",{children:'role="dialog"'})," - Identifies as dialog"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:'aria-modal="true"'})," - Modal behavior"]}),e.jsxs("li",{children:["• ",e.jsx("code",{children:"aria-labelledby"})," - References title"]}),e.jsx("li",{children:"• Semantic HTML structure"})]})]}),e.jsxs("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:[e.jsx(t,{variant:"body2",className:"font-semibold text-blue-800 mb-2",children:"🔒 Focus Management"}),e.jsxs("ul",{className:"text-sm space-y-1 text-blue-700",children:[e.jsx("li",{children:"• Focus trapped within modal"}),e.jsx("li",{children:"• Focus restored on close"}),e.jsx("li",{children:"• Background scroll prevented"}),e.jsx("li",{children:"• Logical tab order maintained"})]})]}),e.jsxs("div",{className:"p-3 bg-purple-50 border border-purple-200 rounded",children:[e.jsx(t,{variant:"body2",className:"font-semibold text-purple-800 mb-2",children:"⌨️ Keyboard Support"}),e.jsxs("ul",{className:"text-sm space-y-1 text-purple-700",children:[e.jsxs("li",{children:["• ",e.jsx("kbd",{className:"bg-white px-1 rounded",children:"Escape"})," closes modal"]}),e.jsxs("li",{children:["• ",e.jsx("kbd",{className:"bg-white px-1 rounded",children:"Tab"})," navigates elements"]}),e.jsxs("li",{children:["• ",e.jsx("kbd",{className:"bg-white px-1 rounded",children:"Enter/Space"})," ","activates buttons"]})]})]})]}),e.jsx("div",{className:"flex gap-2 justify-end mt-6",children:e.jsx(s,{variant:"default",onClick:()=>a(!1),testId:"basic-close",children:"Close"})})]})}),e.jsx(l,{open:d,onClose:()=>r(!1),title:"Focus Management Demonstration",testId:"focus-management-modal",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{variant:"body1",children:"Focus is automatically managed when the modal opens and closes:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"p-3 bg-yellow-50 border border-yellow-200 rounded",children:e.jsxs(t,{variant:"body2",className:"text-yellow-800 mb-3",children:[e.jsx("strong",{children:"Focus Trap Demo:"})," Use Tab and Shift+Tab to navigate. Focus will cycle through elements and cannot escape the modal."]})}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(n,{label:"First Input",placeholder:"Focus starts here when modal opens",testId:"focus-first-input"}),e.jsx(n,{label:"Second Input",placeholder:"Tab to navigate between elements",testId:"focus-second-input"}),e.jsx(k,{label:"Select Option",placeholder:"Select an option",options:[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"}],testId:"focus-select"}),e.jsx(n,{type:"textarea",label:"Textarea",placeholder:"Multi-line input field",rows:3,testId:"focus-textarea"})]}),e.jsx("div",{className:"p-3 bg-green-50 border border-green-200 rounded",children:e.jsxs(t,{variant:"body2",className:"text-green-800",children:[e.jsx("strong",{children:"Try this:"})," Navigate with Tab/Shift+Tab. Notice how focus cycles through elements and returns to the first when reaching the end."]})})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{variant:"default",onClick:()=>r(!1),testId:"focus-cancel",children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>r(!1),testId:"focus-save",children:"Save Changes"})]})]})}),e.jsx(l,{open:c,onClose:()=>m(!1),title:"Keyboard Navigation Patterns",size:"large",testId:"keyboard-navigation-modal",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{variant:"body1",children:"Complete keyboard navigation patterns for modal interactions:"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h4",children:"🎹 Keyboard Shortcuts"}),e.jsx("div",{className:"space-y-2",children:[{key:"Escape",action:"Close modal immediately"},{key:"Tab",action:"Move to next focusable element"},{key:"Shift + Tab",action:"Move to previous focusable element"},{key:"Enter",action:"Activate focused button or submit form"},{key:"Space",action:"Activate focused button or checkbox"},{key:"Arrow Keys",action:"Navigate within select/radio groups"}].map(({key:p,action:v})=>e.jsxs("div",{className:"flex justify-between items-center p-2 bg-gray-50 rounded",children:[e.jsx("span",{className:"text-sm",children:v}),e.jsx("kbd",{className:"px-2 py-1 bg-gray-200 rounded text-sm font-mono",children:p})]},p))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h4",children:"🔧 Interactive Demo"}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(s,{variant:"primary",className:"w-full",testId:"keyboard-primary",children:"Primary Action (Enter/Space)"}),e.jsx(s,{variant:"default",className:"w-full",testId:"keyboard-secondary",children:"Secondary Action"}),e.jsx(n,{label:"Text Input",placeholder:"Type and use Tab to navigate",testId:"keyboard-input"}),e.jsx(k,{label:"Dropdown",placeholder:"Use Arrow keys when open",options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C"}],testId:"keyboard-select"})]})]})]}),e.jsx("div",{className:"p-4 bg-blue-50 border border-blue-200 rounded",children:e.jsxs(t,{variant:"body2",className:"text-blue-800",children:[e.jsx("strong",{children:"Accessibility Tip:"})," This modal demonstrates proper keyboard navigation. Try using only your keyboard to interact with all elements. Press Escape at any time to close."]})}),e.jsx("div",{className:"flex gap-2 justify-end",children:e.jsx(s,{variant:"default",onClick:()=>m(!1),testId:"keyboard-close",children:"Close Guide"})})]})}),e.jsx(l,{open:x,onClose:()=>b(!1),title:"ARIA Attributes in Practice",testId:"aria-attributes-modal","aria-describedby":"aria-description",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{variant:"body1",id:"aria-description",children:"This modal demonstrates proper ARIA attribute usage for enhanced accessibility:"}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-3 bg-gray-50 border rounded",children:[e.jsx(t,{variant:"body2",className:"font-semibold mb-2",children:"Modal ARIA Attributes"}),e.jsxs("div",{className:"text-sm space-y-1 font-mono",children:[e.jsx("div",{children:'role="dialog"'}),e.jsx("div",{children:'aria-modal="true"'}),e.jsx("div",{children:'aria-labelledby="modal-title"'}),e.jsx("div",{children:'aria-describedby="aria-description"'})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"body2",className:"font-semibold",children:"Form Elements with ARIA"}),e.jsx(n,{label:"Required Field",placeholder:"This field is required",required:!0,"aria-required":"true","aria-describedby":"required-help",testId:"aria-required-input"}),e.jsx(t,{variant:"body2",id:"required-help",className:"text-sm text-gray-600",children:"This field must be completed before submission"}),e.jsx(n,{label:"Email with Validation",type:"email",placeholder:"user@example.com","aria-invalid":"false","aria-describedby":"email-help",testId:"aria-email-input"}),e.jsx(t,{variant:"body2",id:"email-help",className:"text-sm text-gray-600",children:"Enter a valid email address for notifications"}),e.jsxs("div",{children:[e.jsx(t,{variant:"body2",className:"font-semibold mb-2",children:"Options Group"}),e.jsxs("fieldset",{children:[e.jsx("legend",{className:"mb-2",children:"Notification Preferences"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox","aria-describedby":"email-notifications-desc"}),e.jsx("span",{children:"Email notifications"})]}),e.jsx(t,{variant:"body2",id:"email-notifications-desc",className:"text-sm text-gray-600 ml-6",children:"Receive updates via email"}),e.jsxs("label",{className:"flex items-center gap-2",children:[e.jsx("input",{type:"checkbox","aria-describedby":"sms-notifications-desc"}),e.jsx("span",{children:"SMS notifications"})]}),e.jsx(t,{variant:"body2",id:"sms-notifications-desc",className:"text-sm text-gray-600 ml-6",children:"Receive updates via text message"})]})]})]})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{variant:"default",onClick:()=>b(!1),"aria-label":"Cancel and close ARIA demonstration modal",testId:"aria-cancel",children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>b(!1),"aria-label":"Save settings and close modal",testId:"aria-save",children:"Save Settings"})]})]})}),e.jsx(l,{open:I,onClose:()=>h(!1),title:"Screen Reader Optimized Form",testId:"screen-reader-modal",children:e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{variant:"body1",children:"This modal is optimized for screen reader users with clear labels, descriptions, and status announcements:"}),e.jsxs("form",{className:"space-y-4",onSubmit:p=>{p.preventDefault(),B()},children:[e.jsx(n,{label:"Full Name",value:w.name,onChange:p=>S(v=>({...v,name:p.target.value})),placeholder:"Enter your full name",required:!0,"aria-required":"true","aria-describedby":"name-help",testId:"sr-name-input"}),e.jsx(t,{variant:"body2",id:"name-help",className:"text-sm text-gray-600",children:"Your name will be used for personalized communications"}),e.jsx(n,{label:"Email Address",type:"email",value:w.email,onChange:p=>S(v=>({...v,email:p.target.value})),placeholder:"your.email@example.com",required:!0,"aria-required":"true","aria-describedby":"email-format-help",testId:"sr-email-input"}),e.jsx(t,{variant:"body2",id:"email-format-help",className:"text-sm text-gray-600",children:"We'll use this to send you important updates and notifications"}),e.jsx(n,{type:"textarea",label:"Message",value:w.message,onChange:p=>S(v=>({...v,message:p.target.value})),placeholder:"Tell us how we can help you...",rows:4,"aria-describedby":"message-help",testId:"sr-message-input"}),e.jsx(t,{variant:"body2",id:"message-help",className:"text-sm text-gray-600",children:"Describe your inquiry or feedback in detail (optional)"}),e.jsx("div",{className:"p-3 bg-blue-50 border border-blue-200 rounded",children:e.jsxs(t,{variant:"body2",className:"text-blue-800",children:[e.jsx("strong",{children:"Screen Reader Note:"})," All form fields have descriptive labels and help text. Required fields are clearly marked and announced."]})}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{type:"button",variant:"default",onClick:()=>h(!1),"aria-label":"Cancel form submission and close modal",testId:"sr-cancel",children:"Cancel"}),e.jsx(s,{type:"submit",variant:"primary","aria-label":"Submit contact form",testId:"sr-submit",children:"Submit Form"})]})]})]})}),g&&e.jsx("output",{"aria-live":"polite",className:"fixed bottom-4 right-4 bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded shadow-lg",children:g})]})},parameters:{docs:{description:{story:`
## Comprehensive Modal Accessibility

This story demonstrates all accessibility features of the Modal component:

### ARIA Attributes Implementation
- **role="dialog"** - Identifies the modal as a dialog element
- **aria-modal="true"** - Indicates this is a modal dialog that requires user interaction
- **aria-labelledby** - References the modal title element for accessible naming
- **aria-describedby** - Links to descriptive content that explains the modal's purpose
- **aria-required** - Marks required form fields for screen readers
- **aria-invalid** - Indicates validation state of form inputs

### Keyboard Navigation Patterns
- **Escape Key** - Immediately closes the modal from any focused element
- **Tab Navigation** - Moves focus forward through interactive elements
- **Shift+Tab** - Moves focus backward through interactive elements
- **Enter/Space** - Activates buttons and form controls
- **Arrow Keys** - Navigate within select dropdowns and radio groups

### Focus Management
- **Focus Trap** - Focus is contained within the modal and cycles through elements
- **Initial Focus** - Focus moves to the first interactive element when modal opens
- **Focus Restoration** - Focus returns to the trigger element when modal closes
- **Logical Tab Order** - Elements are focused in a logical, predictable sequence

### Screen Reader Optimizations
- **Semantic Structure** - Uses proper HTML elements and ARIA roles
- **Descriptive Labels** - All interactive elements have clear, contextual labels
- **Help Text Association** - Form fields are linked to their help text via aria-describedby
- **Status Announcements** - Important changes are announced via live regions
- **Group Labeling** - Related form controls are grouped with proper labels

### Testing Patterns
\`\`\`tsx
// Test modal accessibility
test('Modal is accessible', async () => {
  const user = userEvent.setup()
  render(<ModalComponent />)
  
  // Open modal
  await user.click(screen.getByText('Open Modal'))
  
  // Test ARIA attributes
  const modal = screen.getByRole('dialog')
  expect(modal).toHaveAttribute('aria-modal', 'true')
  expect(modal).toHaveAttribute('aria-labelledby')
  
  // Test focus management
  expect(modal).toHaveFocus()
  
  // Test keyboard navigation
  await user.keyboard('{Tab}')
  expect(screen.getByTestId('first-input')).toHaveFocus()
  
  // Test escape key
  await user.keyboard('{Escape}')
  expect(modal).not.toBeInTheDocument()
})

// Test with axe-core
test('Modal has no accessibility violations', async () => {
  const { container } = render(<ModalComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
\`\`\`

### Best Practices Demonstrated
1. **Clear Modal Purpose** - Each modal has a descriptive title and purpose
2. **Proper Form Labels** - All form inputs have associated labels
3. **Error Handling** - Validation errors are clearly communicated
4. **Status Updates** - Important changes are announced to screen readers
5. **Consistent Interaction** - All modals behave predictably
6. **Escape Routes** - Users can always exit the modal easily
        `}}}},M={render:()=>{const[i,a]=o.useState(null);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 border rounded-lg bg-purple-50",children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"🧪 Testing Examples"}),e.jsx(t,{variant:"body2",className:"mb-4",children:"Examples with proper testId attributes for automated testing."}),e.jsxs("div",{className:"flex gap-3 flex-wrap",children:[e.jsx(s,{testId:"open-basic-modal",onClick:()=>a("basic"),children:"Basic Modal"}),e.jsx(s,{testId:"open-form-modal",onClick:()=>a("form"),children:"Form Modal"}),e.jsx(s,{testId:"open-confirmation-modal",onClick:()=>a("confirmation"),children:"Confirmation Modal"})]})]}),e.jsx(l,{open:i==="basic",onClose:()=>a(null),title:"Basic Test Modal",testId:"basic-test-modal",children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"body1",testId:"modal-content",children:"This modal has testId attributes for reliable testing."}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{testId:"cancel-button",variant:"default",onClick:()=>a(null),children:"Cancel"}),e.jsx(s,{testId:"confirm-button",variant:"primary",onClick:()=>a(null),children:"Confirm"})]})]})}),e.jsx(l,{open:i==="form",onClose:()=>a(null),title:"Form Test Modal",testId:"form-test-modal",children:e.jsxs("form",{className:"space-y-4",children:[e.jsx(n,{testId:"name-input",label:"Name",placeholder:"Enter name"}),e.jsx(n,{testId:"email-input",label:"Email",type:"email",placeholder:"Enter email"}),e.jsx(k,{testId:"role-select",label:"Role",options:[{value:"admin",label:"Administrator"},{value:"user",label:"User"}]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{testId:"form-cancel",variant:"default",onClick:()=>a(null),children:"Cancel"}),e.jsx(s,{testId:"form-submit",variant:"primary",onClick:()=>a(null),children:"Submit"})]})]})}),e.jsx(l,{open:i==="confirmation",onClose:()=>a(null),title:"Confirm Action",size:"small",testId:"confirmation-test-modal",maskClosable:!1,children:e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"body1",testId:"confirmation-message",children:"Are you sure you want to proceed with this action?"}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{testId:"confirmation-cancel",variant:"default",onClick:()=>a(null),children:"Cancel"}),e.jsx(s,{testId:"confirmation-confirm",variant:"destructive",onClick:()=>a(null),children:"Confirm"})]})]})})]})},parameters:{docs:{description:{story:`
Testing examples with proper testId attributes:

\`\`\`tsx
// Test queries
screen.getByTestId('basic-test-modal');
screen.getByTestId('modal-content');
screen.getByTestId('confirm-button');

// User interactions
await user.click(screen.getByTestId('open-basic-modal'));
await user.click(screen.getByTestId('confirm-button'));

// Form testing
await user.type(screen.getByTestId('name-input'), 'John Doe');
await user.selectOptions(screen.getByTestId('role-select'), 'admin');

// Keyboard testing
await user.keyboard('{Escape}'); // Close modal
\`\`\`
        `}}}},C={render:()=>{const[i,a]=o.useState(null),[d,r]=o.useState({name:"",class:"warrior"});return e.jsxs("div",{className:"space-y-8 max-w-4xl",children:[e.jsxs("div",{className:"p-6 border rounded-lg",children:[e.jsx(t,{variant:"h3",className:"mb-4",children:"🎮 Game Interface Examples"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h4",children:"Character Management"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"primary",onClick:()=>a("character"),children:"Create New Character"}),e.jsx(s,{variant:"default",onClick:()=>a("inventory"),children:"Manage Inventory"}),e.jsx(s,{variant:"destructive",onClick:()=>a("delete"),children:"Delete Character"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h4",children:"Game Actions"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"default",onClick:()=>a("quest"),children:"View Quest Log"}),e.jsx(s,{variant:"dashed",onClick:()=>a("settings"),children:"Game Settings"}),e.jsx(s,{variant:"text",onClick:()=>a("help"),children:"Help & Tutorial"})]})]})]})]}),e.jsx(l,{open:i==="character",onClose:()=>a(null),title:"⚔️ Create New Hero",size:"large",children:e.jsxs("form",{className:"space-y-6",children:[e.jsx("div",{children:e.jsx(n,{label:"Hero Name",value:d.name,onChange:c=>r(m=>({...m,name:c.target.value})),placeholder:"Enter your hero's name"})}),e.jsx("div",{children:e.jsx(k,{label:"Character Class",value:d.class,onChange:c=>r(m=>({...m,class:c})),options:[{value:"warrior",label:"⚔️ Warrior - Master of combat"},{value:"mage",label:"🔮 Mage - Wielder of magic"},{value:"archer",label:"🏹 Archer - Expert marksman"},{value:"rogue",label:"🗡️ Rogue - Shadow assassin"}]})}),e.jsxs("div",{className:"flex gap-3 justify-end pt-4",children:[e.jsx(s,{variant:"default",onClick:()=>a(null),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>a(null),children:"Create Hero"})]})]})}),e.jsx(l,{open:i==="inventory",onClose:()=>a(null),title:"🎒 Inventory Management",size:"large",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2",children:[e.jsx(t,{variant:"h4",className:"mb-4",children:"Items"}),e.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-3",children:["Master Sword","Hylian Shield","Bow of Light","Triforce Shard","Health Potion","Magic Scroll"].map(c=>e.jsxs("div",{className:"p-3 border rounded text-center",children:[e.jsx(t,{variant:"body2",className:"mb-2",children:c}),e.jsxs("div",{className:"flex gap-1 justify-center",children:[e.jsx(s,{variant:"text",className:"text-xs p-1",children:"Use"}),e.jsx(s,{variant:"text",className:"text-xs p-1",children:"Drop"})]})]},c))})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h4",children:"Quick Actions"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx(s,{variant:"default",className:"w-full",children:"Sort Items"}),e.jsx(s,{variant:"dashed",className:"w-full",children:"Auto-Organize"}),e.jsx(s,{variant:"destructive",className:"w-full",children:"Drop Junk"})]})]})]})}),e.jsxs(l,{open:i==="delete",onClose:()=>a(null),title:"⚠️ Delete Character",size:"small",maskClosable:!1,children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"body1",children:'Are you sure you want to delete "Link the Hero"?'}),e.jsxs("div",{className:"p-3 bg-red-50 border border-red-200 rounded",children:[e.jsxs(t,{variant:"body2",className:"text-red-800",children:[e.jsx("strong",{children:"Warning:"})," This will permanently delete:"]}),e.jsxs("ul",{className:"text-sm text-red-700 mt-2 space-y-1",children:[e.jsx("li",{children:"• 47 hours of gameplay"}),e.jsx("li",{children:"• All collected items and rupees"}),e.jsx("li",{children:"• Quest progress and achievements"})]})]})]}),e.jsxs("div",{className:"flex gap-2 justify-end mt-6",children:[e.jsx(s,{variant:"default",onClick:()=>a(null),children:"Keep Character"}),e.jsx(s,{variant:"destructive",onClick:()=>a(null),children:"Delete Forever"})]})]}),e.jsx(l,{open:i==="quest",onClose:()=>a(null),title:"📜 Active Quests",size:"medium",children:e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx(t,{variant:"h4",children:"🗡️ The Master Sword"}),e.jsx(t,{variant:"body2",children:"Find the legendary blade in the Lost Woods"}),e.jsx("div",{className:"mt-2",children:e.jsx("span",{className:"text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded",children:"In Progress"})})]}),e.jsxs("div",{className:"p-4 border rounded",children:[e.jsx(t,{variant:"h4",children:"🏰 Rescue Princess Zelda"}),e.jsx(t,{variant:"body2",children:"Infiltrate Ganon's castle and save the princess"}),e.jsx("div",{className:"mt-2",children:e.jsx("span",{className:"text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded",children:"Not Started"})})]})]})}),e.jsx(l,{open:i==="settings",onClose:()=>a(null),title:"⚙️ Game Settings",size:"medium",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"Audio"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Master Volume"}),e.jsx("input",{type:"range",className:"w-32"})]}),e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Music Volume"}),e.jsx("input",{type:"range",className:"w-32"})]})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"Graphics"}),e.jsx("div",{className:"space-y-3",children:e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{children:"Quality"}),e.jsxs("select",{className:"border rounded px-2 py-1",children:[e.jsx("option",{children:"High"}),e.jsx("option",{children:"Medium"}),e.jsx("option",{children:"Low"})]})]})})]}),e.jsxs("div",{className:"flex gap-2 justify-end",children:[e.jsx(s,{variant:"default",onClick:()=>a(null),children:"Cancel"}),e.jsx(s,{variant:"primary",onClick:()=>a(null),children:"Save Settings"})]})]})}),e.jsx(l,{open:i==="help",onClose:()=>a(null),title:"❓ Help & Tutorial",size:"large",children:e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"Getting Started"}),e.jsx(t,{variant:"body1",className:"mb-4",children:"Welcome to the world of Hyrule! Here are some basic controls to get you started on your adventure."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"Movement"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:"• WASD or Arrow Keys - Move"}),e.jsx("li",{children:"• Space - Jump"}),e.jsx("li",{children:"• Shift - Run"}),e.jsx("li",{children:"• Ctrl - Crouch"})]})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h4",className:"mb-3",children:"Combat"}),e.jsxs("ul",{className:"space-y-2 text-sm",children:[e.jsx("li",{children:"• Left Click - Attack"}),e.jsx("li",{children:"• Right Click - Block"}),e.jsx("li",{children:"• Q - Use Item"}),e.jsx("li",{children:"• E - Interact"})]})]})]})]})})]})},parameters:{docs:{description:{story:"Real-world examples showing Modal components in game interfaces including character creation, inventory management, confirmations, and settings."}}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Basic Modal">
          <Typography variant="body1">Some contents...</Typography>
          <Typography variant="body1">Some contents...</Typography>
          <Typography variant="body1">Some contents...</Typography>
        </Modal>
      </>;
  }
}`,...f.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button onClick={() => setOpen(true)}>Open Modal</Button>
        <Modal open={open} onClose={() => setOpen(false)} title="Confirm Changes">
          <Typography variant="body1" className="mb-4">
            Your changes will be saved and applied immediately. Are you ready to
            proceed?
          </Typography>
          <div className="flex gap-2 justify-end">
            <Button variant="default" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setOpen(false)}>
              Save Changes
            </Button>
          </div>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Modal with title, content, and action buttons for user confirmation.'
      }
    }
  }
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [size, setSize] = useState<'small' | 'medium' | 'large' | 'fullscreen'>('medium');
    const [open, setOpen] = useState(false);
    return <>
        <div className="flex gap-2 mb-4">
          <Button onClick={() => {
          setSize('small');
          setOpen(true);
        }}>
            Small
          </Button>
          <Button onClick={() => {
          setSize('medium');
          setOpen(true);
        }}>
            Medium
          </Button>
          <Button onClick={() => {
          setSize('large');
          setOpen(true);
        }}>
            Large
          </Button>
          <Button onClick={() => {
          setSize('fullscreen');
          setOpen(true);
        }}>
            Fullscreen
          </Button>
        </div>
        <Modal open={open} onClose={() => setOpen(false)} title={\`\${size.charAt(0).toUpperCase() + size.slice(1)} Modal\`} size={size}>
          <Typography variant="body1">
            This is a {size} modal demonstrating different size options for
            various use cases.
          </Typography>
        </Modal>
      </>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different modal sizes: small for confirmations, medium for standard content, large for complex forms, and fullscreen for maximum display.'
      }
    }
  }
}`,...N.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [basicModal, setBasicModal] = useState(false);
    const [focusModal, setFocusModal] = useState(false);
    const [keyboardModal, setKeyboardModal] = useState(false);
    const [ariaModal, setAriaModal] = useState(false);
    const [screenReaderModal, setScreenReaderModal] = useState(false);
    const [announcement, setAnnouncement] = useState('');
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
    });
    const handleFormSubmit = () => {
      setAnnouncement('Form submitted successfully!');
      setScreenReaderModal(false);
      setTimeout(() => setAnnouncement(''), 3000);
    };
    return <div className="space-y-8">
        <div className="p-4 border rounded-lg bg-blue-50">
          <Typography variant="h4" className="mb-3">
            🔍 Modal Accessibility Comprehensive Demo
          </Typography>
          <Typography variant="body2" className="mb-4">
            This story demonstrates the Modal's complete accessibility features
            including focus management, keyboard navigation, ARIA attributes,
            and screen reader optimizations.
          </Typography>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <Button onClick={() => setBasicModal(true)}>Basic Features</Button>
            <Button onClick={() => setFocusModal(true)}>
              Focus Management
            </Button>
            <Button onClick={() => setKeyboardModal(true)}>
              Keyboard Navigation
            </Button>
            <Button onClick={() => setAriaModal(true)}>ARIA Attributes</Button>
            <Button onClick={() => setScreenReaderModal(true)}>
              Screen Reader
            </Button>
          </div>
        </div>

        {/* Live Region for Announcements */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          {announcement}
        </div>

        {/* Basic Accessibility Features Modal */}
        <Modal open={basicModal} onClose={() => setBasicModal(false)} title="Basic Accessibility Features" testId="basic-accessibility-modal">
          <div className="space-y-4">
            <Typography variant="body1">
              This modal demonstrates fundamental accessibility features:
            </Typography>

            <div className="space-y-3">
              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <Typography variant="body2" className="font-semibold text-green-800 mb-2">
                  ✅ Semantic Structure
                </Typography>
                <ul className="text-sm space-y-1 text-green-700">
                  <li>
                    • <code>role="dialog"</code> - Identifies as dialog
                  </li>
                  <li>
                    • <code>aria-modal="true"</code> - Modal behavior
                  </li>
                  <li>
                    • <code>aria-labelledby</code> - References title
                  </li>
                  <li>• Semantic HTML structure</li>
                </ul>
              </div>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <Typography variant="body2" className="font-semibold text-blue-800 mb-2">
                  🔒 Focus Management
                </Typography>
                <ul className="text-sm space-y-1 text-blue-700">
                  <li>• Focus trapped within modal</li>
                  <li>• Focus restored on close</li>
                  <li>• Background scroll prevented</li>
                  <li>• Logical tab order maintained</li>
                </ul>
              </div>

              <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                <Typography variant="body2" className="font-semibold text-purple-800 mb-2">
                  ⌨️ Keyboard Support
                </Typography>
                <ul className="text-sm space-y-1 text-purple-700">
                  <li>
                    • <kbd className="bg-white px-1 rounded">Escape</kbd> closes
                    modal
                  </li>
                  <li>
                    • <kbd className="bg-white px-1 rounded">Tab</kbd> navigates
                    elements
                  </li>
                  <li>
                    • <kbd className="bg-white px-1 rounded">Enter/Space</kbd>{' '}
                    activates buttons
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex gap-2 justify-end mt-6">
              <Button variant="default" onClick={() => setBasicModal(false)} testId="basic-close">
                Close
              </Button>
            </div>
          </div>
        </Modal>

        {/* Focus Management Demo */}
        <Modal open={focusModal} onClose={() => setFocusModal(false)} title="Focus Management Demonstration" testId="focus-management-modal">
          <div className="space-y-6">
            <Typography variant="body1">
              Focus is automatically managed when the modal opens and closes:
            </Typography>

            <div className="space-y-4">
              <div className="p-3 bg-yellow-50 border border-yellow-200 rounded">
                <Typography variant="body2" className="text-yellow-800 mb-3">
                  <strong>Focus Trap Demo:</strong> Use Tab and Shift+Tab to
                  navigate. Focus will cycle through elements and cannot escape
                  the modal.
                </Typography>
              </div>

              <div className="space-y-3">
                <Input label="First Input" placeholder="Focus starts here when modal opens" testId="focus-first-input" />
                <Input label="Second Input" placeholder="Tab to navigate between elements" testId="focus-second-input" />
                <Select label="Select Option" placeholder="Select an option" options={[{
                value: 'option1',
                label: 'Option 1'
              }, {
                value: 'option2',
                label: 'Option 2'
              }, {
                value: 'option3',
                label: 'Option 3'
              }]} testId="focus-select" />
                <Input type="textarea" label="Textarea" placeholder="Multi-line input field" rows={3} testId="focus-textarea" />
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded">
                <Typography variant="body2" className="text-green-800">
                  <strong>Try this:</strong> Navigate with Tab/Shift+Tab. Notice
                  how focus cycles through elements and returns to the first
                  when reaching the end.
                </Typography>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setFocusModal(false)} testId="focus-cancel">
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setFocusModal(false)} testId="focus-save">
                Save Changes
              </Button>
            </div>
          </div>
        </Modal>

        {/* Keyboard Navigation Guide */}
        <Modal open={keyboardModal} onClose={() => setKeyboardModal(false)} title="Keyboard Navigation Patterns" size="large" testId="keyboard-navigation-modal">
          <div className="space-y-6">
            <Typography variant="body1">
              Complete keyboard navigation patterns for modal interactions:
            </Typography>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Keyboard Shortcuts */}
              <div className="space-y-4">
                <Typography variant="h4">🎹 Keyboard Shortcuts</Typography>
                <div className="space-y-2">
                  {[{
                  key: 'Escape',
                  action: 'Close modal immediately'
                }, {
                  key: 'Tab',
                  action: 'Move to next focusable element'
                }, {
                  key: 'Shift + Tab',
                  action: 'Move to previous focusable element'
                }, {
                  key: 'Enter',
                  action: 'Activate focused button or submit form'
                }, {
                  key: 'Space',
                  action: 'Activate focused button or checkbox'
                }, {
                  key: 'Arrow Keys',
                  action: 'Navigate within select/radio groups'
                }].map(({
                  key,
                  action
                }) => <div key={key} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                      <span className="text-sm">{action}</span>
                      <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">
                        {key}
                      </kbd>
                    </div>)}
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="space-y-4">
                <Typography variant="h4">🔧 Interactive Demo</Typography>
                <div className="space-y-3">
                  <Button variant="primary" className="w-full" testId="keyboard-primary">
                    Primary Action (Enter/Space)
                  </Button>
                  <Button variant="default" className="w-full" testId="keyboard-secondary">
                    Secondary Action
                  </Button>
                  <Input label="Text Input" placeholder="Type and use Tab to navigate" testId="keyboard-input" />
                  <Select label="Dropdown" placeholder="Use Arrow keys when open" options={[{
                  value: 'a',
                  label: 'Option A'
                }, {
                  value: 'b',
                  label: 'Option B'
                }, {
                  value: 'c',
                  label: 'Option C'
                }]} testId="keyboard-select" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded">
              <Typography variant="body2" className="text-blue-800">
                <strong>Accessibility Tip:</strong> This modal demonstrates
                proper keyboard navigation. Try using only your keyboard to
                interact with all elements. Press Escape at any time to close.
              </Typography>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setKeyboardModal(false)} testId="keyboard-close">
                Close Guide
              </Button>
            </div>
          </div>
        </Modal>

        {/* ARIA Attributes Demo */}
        <Modal open={ariaModal} onClose={() => setAriaModal(false)} title="ARIA Attributes in Practice" testId="aria-attributes-modal" aria-describedby="aria-description">
          <div className="space-y-6">
            <Typography variant="body1" id="aria-description">
              This modal demonstrates proper ARIA attribute usage for enhanced
              accessibility:
            </Typography>

            <div className="space-y-4">
              {/* Modal-specific ARIA */}
              <div className="p-3 bg-gray-50 border rounded">
                <Typography variant="body2" className="font-semibold mb-2">
                  Modal ARIA Attributes
                </Typography>
                <div className="text-sm space-y-1 font-mono">
                  <div>role="dialog"</div>
                  <div>aria-modal="true"</div>
                  <div>aria-labelledby="modal-title"</div>
                  <div>aria-describedby="aria-description"</div>
                </div>
              </div>

              {/* Form with ARIA */}
              <div className="space-y-3">
                <Typography variant="body2" className="font-semibold">
                  Form Elements with ARIA
                </Typography>

                <Input label="Required Field" placeholder="This field is required" required aria-required="true" aria-describedby="required-help" testId="aria-required-input" />
                <Typography variant="body2" id="required-help" className="text-sm text-gray-600">
                  This field must be completed before submission
                </Typography>

                <Input label="Email with Validation" type="email" placeholder="user@example.com" aria-invalid="false" aria-describedby="email-help" testId="aria-email-input" />
                <Typography variant="body2" id="email-help" className="text-sm text-gray-600">
                  Enter a valid email address for notifications
                </Typography>

                <div>
                  <Typography variant="body2" className="font-semibold mb-2">
                    Options Group
                  </Typography>
                  <fieldset>
                    <legend className="mb-2">Notification Preferences</legend>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" aria-describedby="email-notifications-desc" />
                        <span>Email notifications</span>
                      </label>
                      <Typography variant="body2" id="email-notifications-desc" className="text-sm text-gray-600 ml-6">
                        Receive updates via email
                      </Typography>

                      <label className="flex items-center gap-2">
                        <input type="checkbox" aria-describedby="sms-notifications-desc" />
                        <span>SMS notifications</span>
                      </label>
                      <Typography variant="body2" id="sms-notifications-desc" className="text-sm text-gray-600 ml-6">
                        Receive updates via text message
                      </Typography>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setAriaModal(false)} aria-label="Cancel and close ARIA demonstration modal" testId="aria-cancel">
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setAriaModal(false)} aria-label="Save settings and close modal" testId="aria-save">
                Save Settings
              </Button>
            </div>
          </div>
        </Modal>

        {/* Screen Reader Optimized Modal */}
        <Modal open={screenReaderModal} onClose={() => setScreenReaderModal(false)} title="Screen Reader Optimized Form" testId="screen-reader-modal">
          <div className="space-y-6">
            <Typography variant="body1">
              This modal is optimized for screen reader users with clear labels,
              descriptions, and status announcements:
            </Typography>

            <form className="space-y-4" onSubmit={e => {
            e.preventDefault();
            handleFormSubmit();
          }}>
              <Input label="Full Name" value={formData.name} onChange={e => setFormData(prev => ({
              ...prev,
              name: e.target.value
            }))} placeholder="Enter your full name" required aria-required="true" aria-describedby="name-help" testId="sr-name-input" />
              <Typography variant="body2" id="name-help" className="text-sm text-gray-600">
                Your name will be used for personalized communications
              </Typography>

              <Input label="Email Address" type="email" value={formData.email} onChange={e => setFormData(prev => ({
              ...prev,
              email: e.target.value
            }))} placeholder="your.email@example.com" required aria-required="true" aria-describedby="email-format-help" testId="sr-email-input" />
              <Typography variant="body2" id="email-format-help" className="text-sm text-gray-600">
                We'll use this to send you important updates and notifications
              </Typography>

              <Input type="textarea" label="Message" value={formData.message} onChange={e => setFormData(prev => ({
              ...prev,
              message: e.target.value
            }))} placeholder="Tell us how we can help you..." rows={4} aria-describedby="message-help" testId="sr-message-input" />
              <Typography variant="body2" id="message-help" className="text-sm text-gray-600">
                Describe your inquiry or feedback in detail (optional)
              </Typography>

              <div className="p-3 bg-blue-50 border border-blue-200 rounded">
                <Typography variant="body2" className="text-blue-800">
                  <strong>Screen Reader Note:</strong> All form fields have
                  descriptive labels and help text. Required fields are clearly
                  marked and announced.
                </Typography>
              </div>

              <div className="flex gap-2 justify-end">
                <Button type="button" variant="default" onClick={() => setScreenReaderModal(false)} aria-label="Cancel form submission and close modal" testId="sr-cancel">
                  Cancel
                </Button>
                <Button type="submit" variant="primary" aria-label="Submit contact form" testId="sr-submit">
                  Submit Form
                </Button>
              </div>
            </form>
          </div>
        </Modal>

        {/* Success Announcement */}
        {announcement && <output aria-live="polite" className="fixed bottom-4 right-4 bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded shadow-lg">
            {announcement}
          </output>}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
## Comprehensive Modal Accessibility

This story demonstrates all accessibility features of the Modal component:

### ARIA Attributes Implementation
- **role="dialog"** - Identifies the modal as a dialog element
- **aria-modal="true"** - Indicates this is a modal dialog that requires user interaction
- **aria-labelledby** - References the modal title element for accessible naming
- **aria-describedby** - Links to descriptive content that explains the modal's purpose
- **aria-required** - Marks required form fields for screen readers
- **aria-invalid** - Indicates validation state of form inputs

### Keyboard Navigation Patterns
- **Escape Key** - Immediately closes the modal from any focused element
- **Tab Navigation** - Moves focus forward through interactive elements
- **Shift+Tab** - Moves focus backward through interactive elements
- **Enter/Space** - Activates buttons and form controls
- **Arrow Keys** - Navigate within select dropdowns and radio groups

### Focus Management
- **Focus Trap** - Focus is contained within the modal and cycles through elements
- **Initial Focus** - Focus moves to the first interactive element when modal opens
- **Focus Restoration** - Focus returns to the trigger element when modal closes
- **Logical Tab Order** - Elements are focused in a logical, predictable sequence

### Screen Reader Optimizations
- **Semantic Structure** - Uses proper HTML elements and ARIA roles
- **Descriptive Labels** - All interactive elements have clear, contextual labels
- **Help Text Association** - Form fields are linked to their help text via aria-describedby
- **Status Announcements** - Important changes are announced via live regions
- **Group Labeling** - Related form controls are grouped with proper labels

### Testing Patterns
\\\`\\\`\\\`tsx
// Test modal accessibility
test('Modal is accessible', async () => {
  const user = userEvent.setup()
  render(<ModalComponent />)
  
  // Open modal
  await user.click(screen.getByText('Open Modal'))
  
  // Test ARIA attributes
  const modal = screen.getByRole('dialog')
  expect(modal).toHaveAttribute('aria-modal', 'true')
  expect(modal).toHaveAttribute('aria-labelledby')
  
  // Test focus management
  expect(modal).toHaveFocus()
  
  // Test keyboard navigation
  await user.keyboard('{Tab}')
  expect(screen.getByTestId('first-input')).toHaveFocus()
  
  // Test escape key
  await user.keyboard('{Escape}')
  expect(modal).not.toBeInTheDocument()
})

// Test with axe-core
test('Modal has no accessibility violations', async () => {
  const { container } = render(<ModalComponent />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
\\\`\\\`\\\`

### Best Practices Demonstrated
1. **Clear Modal Purpose** - Each modal has a descriptive title and purpose
2. **Proper Form Labels** - All form inputs have associated labels
3. **Error Handling** - Validation errors are clearly communicated
4. **Status Updates** - Important changes are announced to screen readers
5. **Consistent Interaction** - All modals behave predictably
6. **Escape Routes** - Users can always exit the modal easily
        \`
      }
    }
  }
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [modalType, setModalType] = useState<string | null>(null);
    return <div className="space-y-6">
        <div className="p-4 border rounded-lg bg-purple-50">
          <Typography variant="h4" className="mb-3">
            🧪 Testing Examples
          </Typography>
          <Typography variant="body2" className="mb-4">
            Examples with proper testId attributes for automated testing.
          </Typography>
          <div className="flex gap-3 flex-wrap">
            <Button testId="open-basic-modal" onClick={() => setModalType('basic')}>
              Basic Modal
            </Button>
            <Button testId="open-form-modal" onClick={() => setModalType('form')}>
              Form Modal
            </Button>
            <Button testId="open-confirmation-modal" onClick={() => setModalType('confirmation')}>
              Confirmation Modal
            </Button>
          </div>
        </div>

        {/* Basic Modal */}
        <Modal open={modalType === 'basic'} onClose={() => setModalType(null)} title="Basic Test Modal" testId="basic-test-modal">
          <div className="space-y-4">
            <Typography variant="body1" testId="modal-content">
              This modal has testId attributes for reliable testing.
            </Typography>
            <div className="flex gap-2 justify-end">
              <Button testId="cancel-button" variant="default" onClick={() => setModalType(null)}>
                Cancel
              </Button>
              <Button testId="confirm-button" variant="primary" onClick={() => setModalType(null)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>

        {/* Form Modal */}
        <Modal open={modalType === 'form'} onClose={() => setModalType(null)} title="Form Test Modal" testId="form-test-modal">
          <form className="space-y-4">
            <Input testId="name-input" label="Name" placeholder="Enter name" />
            <Input testId="email-input" label="Email" type="email" placeholder="Enter email" />
            <Select testId="role-select" label="Role" options={[{
            value: 'admin',
            label: 'Administrator'
          }, {
            value: 'user',
            label: 'User'
          }]} />
            <div className="flex gap-2 justify-end">
              <Button testId="form-cancel" variant="default" onClick={() => setModalType(null)}>
                Cancel
              </Button>
              <Button testId="form-submit" variant="primary" onClick={() => setModalType(null)}>
                Submit
              </Button>
            </div>
          </form>
        </Modal>

        {/* Confirmation Modal */}
        <Modal open={modalType === 'confirmation'} onClose={() => setModalType(null)} title="Confirm Action" size="small" testId="confirmation-test-modal" maskClosable={false}>
          <div className="space-y-4">
            <Typography variant="body1" testId="confirmation-message">
              Are you sure you want to proceed with this action?
            </Typography>
            <div className="flex gap-2 justify-end">
              <Button testId="confirmation-cancel" variant="default" onClick={() => setModalType(null)}>
                Cancel
              </Button>
              <Button testId="confirmation-confirm" variant="destructive" onClick={() => setModalType(null)}>
                Confirm
              </Button>
            </div>
          </div>
        </Modal>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: \`
Testing examples with proper testId attributes:

\\\`\\\`\\\`tsx
// Test queries
screen.getByTestId('basic-test-modal');
screen.getByTestId('modal-content');
screen.getByTestId('confirm-button');

// User interactions
await user.click(screen.getByTestId('open-basic-modal'));
await user.click(screen.getByTestId('confirm-button'));

// Form testing
await user.type(screen.getByTestId('name-input'), 'John Doe');
await user.selectOptions(screen.getByTestId('role-select'), 'admin');

// Keyboard testing
await user.keyboard('{Escape}'); // Close modal
\\\`\\\`\\\`
        \`
      }
    }
  }
}`,...M.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);
    const [formData, setFormData] = useState({
      name: '',
      class: 'warrior'
    });
    return <div className="space-y-8 max-w-4xl">
        {/* Character Creation */}
        <div className="p-6 border rounded-lg">
          <Typography variant="h3" className="mb-4">
            🎮 Game Interface Examples
          </Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Typography variant="h4">Character Management</Typography>
              <div className="space-y-2">
                <Button variant="primary" onClick={() => setActiveModal('character')}>
                  Create New Character
                </Button>
                <Button variant="default" onClick={() => setActiveModal('inventory')}>
                  Manage Inventory
                </Button>
                <Button variant="destructive" onClick={() => setActiveModal('delete')}>
                  Delete Character
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Typography variant="h4">Game Actions</Typography>
              <div className="space-y-2">
                <Button variant="default" onClick={() => setActiveModal('quest')}>
                  View Quest Log
                </Button>
                <Button variant="dashed" onClick={() => setActiveModal('settings')}>
                  Game Settings
                </Button>
                <Button variant="text" onClick={() => setActiveModal('help')}>
                  Help & Tutorial
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Character Creation Modal */}
        <Modal open={activeModal === 'character'} onClose={() => setActiveModal(null)} title="⚔️ Create New Hero" size="large">
          <form className="space-y-6">
            <div>
              <Input label="Hero Name" value={formData.name} onChange={e => setFormData(prev => ({
              ...prev,
              name: e.target.value
            }))} placeholder="Enter your hero's name" />
            </div>
            <div>
              <Select label="Character Class" value={formData.class} onChange={value => setFormData(prev => ({
              ...prev,
              class: value
            }))} options={[{
              value: 'warrior',
              label: '⚔️ Warrior - Master of combat'
            }, {
              value: 'mage',
              label: '🔮 Mage - Wielder of magic'
            }, {
              value: 'archer',
              label: '🏹 Archer - Expert marksman'
            }, {
              value: 'rogue',
              label: '🗡️ Rogue - Shadow assassin'
            }]} />
            </div>
            <div className="flex gap-3 justify-end pt-4">
              <Button variant="default" onClick={() => setActiveModal(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setActiveModal(null)}>
                Create Hero
              </Button>
            </div>
          </form>
        </Modal>

        {/* Inventory Modal */}
        <Modal open={activeModal === 'inventory'} onClose={() => setActiveModal(null)} title="🎒 Inventory Management" size="large">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Typography variant="h4" className="mb-4">
                Items
              </Typography>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Master Sword', 'Hylian Shield', 'Bow of Light', 'Triforce Shard', 'Health Potion', 'Magic Scroll'].map(item => <div key={item} className="p-3 border rounded text-center">
                    <Typography variant="body2" className="mb-2">
                      {item}
                    </Typography>
                    <div className="flex gap-1 justify-center">
                      <Button variant="text" className="text-xs p-1">
                        Use
                      </Button>
                      <Button variant="text" className="text-xs p-1">
                        Drop
                      </Button>
                    </div>
                  </div>)}
              </div>
            </div>
            <div className="space-y-4">
              <Typography variant="h4">Quick Actions</Typography>
              <div className="space-y-2">
                <Button variant="default" className="w-full">
                  Sort Items
                </Button>
                <Button variant="dashed" className="w-full">
                  Auto-Organize
                </Button>
                <Button variant="destructive" className="w-full">
                  Drop Junk
                </Button>
              </div>
            </div>
          </div>
        </Modal>

        {/* Delete Confirmation */}
        <Modal open={activeModal === 'delete'} onClose={() => setActiveModal(null)} title="⚠️ Delete Character" size="small" maskClosable={false}>
          <div className="space-y-4">
            <Typography variant="body1">
              Are you sure you want to delete "Link the Hero"?
            </Typography>
            <div className="p-3 bg-red-50 border border-red-200 rounded">
              <Typography variant="body2" className="text-red-800">
                <strong>Warning:</strong> This will permanently delete:
              </Typography>
              <ul className="text-sm text-red-700 mt-2 space-y-1">
                <li>• 47 hours of gameplay</li>
                <li>• All collected items and rupees</li>
                <li>• Quest progress and achievements</li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 justify-end mt-6">
            <Button variant="default" onClick={() => setActiveModal(null)}>
              Keep Character
            </Button>
            <Button variant="destructive" onClick={() => setActiveModal(null)}>
              Delete Forever
            </Button>
          </div>
        </Modal>

        {/* Other Modals */}
        <Modal open={activeModal === 'quest'} onClose={() => setActiveModal(null)} title="📜 Active Quests" size="medium">
          <div className="space-y-4">
            <div className="p-4 border rounded">
              <Typography variant="h4">🗡️ The Master Sword</Typography>
              <Typography variant="body2">
                Find the legendary blade in the Lost Woods
              </Typography>
              <div className="mt-2">
                <span className="text-sm bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                  In Progress
                </span>
              </div>
            </div>
            <div className="p-4 border rounded">
              <Typography variant="h4">🏰 Rescue Princess Zelda</Typography>
              <Typography variant="body2">
                Infiltrate Ganon's castle and save the princess
              </Typography>
              <div className="mt-2">
                <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded">
                  Not Started
                </span>
              </div>
            </div>
          </div>
        </Modal>

        <Modal open={activeModal === 'settings'} onClose={() => setActiveModal(null)} title="⚙️ Game Settings" size="medium">
          <div className="space-y-6">
            <div>
              <Typography variant="h4" className="mb-3">
                Audio
              </Typography>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Master Volume</span>
                  <input type="range" className="w-32" />
                </div>
                <div className="flex justify-between items-center">
                  <span>Music Volume</span>
                  <input type="range" className="w-32" />
                </div>
              </div>
            </div>
            <div>
              <Typography variant="h4" className="mb-3">
                Graphics
              </Typography>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Quality</span>
                  <select className="border rounded px-2 py-1">
                    <option>High</option>
                    <option>Medium</option>
                    <option>Low</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="flex gap-2 justify-end">
              <Button variant="default" onClick={() => setActiveModal(null)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setActiveModal(null)}>
                Save Settings
              </Button>
            </div>
          </div>
        </Modal>

        <Modal open={activeModal === 'help'} onClose={() => setActiveModal(null)} title="❓ Help & Tutorial" size="large">
          <div className="space-y-6">
            <div>
              <Typography variant="h4" className="mb-3">
                Getting Started
              </Typography>
              <Typography variant="body1" className="mb-4">
                Welcome to the world of Hyrule! Here are some basic controls to
                get you started on your adventure.
              </Typography>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Typography variant="h4" className="mb-3">
                  Movement
                </Typography>
                <ul className="space-y-2 text-sm">
                  <li>• WASD or Arrow Keys - Move</li>
                  <li>• Space - Jump</li>
                  <li>• Shift - Run</li>
                  <li>• Ctrl - Crouch</li>
                </ul>
              </div>
              <div>
                <Typography variant="h4" className="mb-3">
                  Combat
                </Typography>
                <ul className="space-y-2 text-sm">
                  <li>• Left Click - Attack</li>
                  <li>• Right Click - Block</li>
                  <li>• Q - Use Item</li>
                  <li>• E - Interact</li>
                </ul>
              </div>
            </div>
          </div>
        </Modal>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing Modal components in game interfaces including character creation, inventory management, confirmations, and settings.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}};const re=["Default","Examples","Sizes","AccessibilityFeatures","TestingExamples","RealWorldExamples"];export{T as AccessibilityFeatures,f as Default,j as Examples,C as RealWorldExamples,N as Sizes,M as TestingExamples,re as __namedExportsOrder,oe as default};
