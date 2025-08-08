import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{r as i}from"./iframe-CzqNFs5z.js";import{B as o}from"./Button-D47seXth.js";import{T as u,a as v,b,u as x}from"./ToastManager-Du0hjtWX.js";import"./preload-helper-BXl3LOEh.js";import"./index-BDV_RS0N.js";import"./XIcon-CZdcAhEp.js";import"./Typography-9lRHdsZv.js";import"./index-BkXu0jZL.js";import"./index-CgFr1-eQ.js";const E={title:"Feedback/Toast",component:u,parameters:{layout:"padded",docs:{description:{component:`Temporary notifications that provide immediate feedback without interrupting the user's workflow.

\`\`\`tsx
import { Toast } from '@zelda/core';

// Essential feedback
<Toast message="Changes saved successfully" type="success" />

// Auto-dismiss notification
<Toast 
  message="Settings updated" 
  type="success" 
  duration={3000}
  onClose={() => console.log('Toast closed')}
/>
\`\`\`

## Types
- **success** - Positive outcomes and confirmations
- **error** - Problems requiring attention
- **warning** - Cautions and important notices
- **info** - Neutral information and updates

## Positions
- **top-right** - Default position (recommended)
- **top-left**, **top-center** - Alternative top positions
- **bottom-right**, **bottom-left**, **bottom-center** - Bottom positions

## Accessibility & Testing
- Auto-dismisses after configurable duration or manual close
- Close button accessible via keyboard navigation
- Uses semantic \`role="alert"\` for immediate screen reader announcement
- Portal rendering ensures proper z-index layering

> **Your Responsibility**: Provide clear, concise message text. This component handles timing and accessibility announcements.

\`\`\`tsx
// Testing approach
const toast = screen.getByRole('alert');
expect(toast).toHaveTextContent('Changes saved');
fireEvent.click(screen.getByRole('button', { name: /close/i }));
\`\`\``}}},tags:["autodocs"],argTypes:{type:{control:"select",options:["success","error","warning","info"],description:"Toast semantic type and visual style",table:{type:{summary:"string"},defaultValue:{summary:"info"}}},message:{control:"text",description:"Toast message content",table:{type:{summary:"string"}}},duration:{control:{type:"number",min:0,max:1e4,step:500},description:"Auto-dismiss duration in milliseconds (0 to disable)",table:{type:{summary:"number"},defaultValue:{summary:"5000"}}},position:{control:"select",options:["top-right","top-left","bottom-right","bottom-left","top-center","bottom-center"],description:"Toast position on screen",table:{type:{summary:"string"},defaultValue:{summary:"top-right"}}},visible:{control:"boolean",description:"Whether toast is visible",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}}}},p={args:{message:"Changes saved successfully",type:"success",duration:5e3,visible:!0}},m={render:()=>{const[a,s]=i.useState([]),r=i.useRef(1),n=i.useCallback((t,l)=>{const d=r.current++;s(T=>[...T,{id:d,type:t,message:l}])},[]),c=i.useCallback(t=>{s(l=>l.filter(d=>d.id!==t))},[]);return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(o,{onClick:()=>n("success","Operation completed successfully"),children:"Success Toast"}),e.jsx(o,{onClick:()=>n("error","Failed to save changes"),children:"Error Toast"}),e.jsx(o,{onClick:()=>n("warning","Storage space low"),children:"Warning Toast"}),e.jsx(o,{onClick:()=>n("info","New feature available"),children:"Info Toast"})]}),e.jsx(v,{position:"top-right",children:a.map(t=>e.jsx(u,{message:t.message,type:t.type,visible:!0,onClose:()=>c(t.id),duration:4e3},t.id))})]})},parameters:{docs:{description:{story:"Different toast types with appropriate colors and icons for various message contexts."}}}},g={render:()=>{const[a,s]=i.useState(null),r=[{key:"top-left",label:"Top Left"},{key:"top-center",label:"Top Center"},{key:"top-right",label:"Top Right"},{key:"bottom-left",label:"Bottom Left"},{key:"bottom-center",label:"Bottom Center"},{key:"bottom-right",label:"Bottom Right"}],n=c=>{s(c),setTimeout(()=>s(null),3e3)};return e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-3 gap-2",children:r.map(c=>e.jsx(o,{onClick:()=>n(c.key),size:"small",children:c.label},c.key))}),e.jsx(v,{position:a,children:a&&e.jsx(u,{message:`Toast positioned at ${a}`,type:"info",visible:!0,onClose:()=>s(null)})})]})},parameters:{docs:{description:{story:"Toast can be positioned in six different locations on the screen."}}}},f={render:()=>{const[a,s]=i.useState(null),r=n=>{s({visible:!0,duration:n})};return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx(o,{onClick:()=>r(2e3),children:"2 Second Toast"}),e.jsx(o,{onClick:()=>r(5e3),children:"5 Second Toast"}),e.jsx(o,{onClick:()=>r(0),children:"Manual Close Only"})]}),a&&e.jsx(u,{message:`Auto-dismiss in ${a.duration===0?"manual close only":`${a.duration/1e3} seconds`}`,type:"success",visible:a.visible,duration:a.duration,onClose:()=>s(null)})]})},parameters:{docs:{description:{story:"Toasts can auto-dismiss after a specified duration or require manual closing."}}}},y={render:()=>{const[a,s]=i.useState([]),r=i.useRef(1),n=i.useCallback((t,l)=>{const d=r.current++;s(T=>[...T,{id:d,type:t,message:l}])},[]),c=i.useCallback(t=>{s(l=>l.filter(d=>d.id!==t))},[]);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(o,{onClick:()=>n("success","Profile updated successfully"),children:"Success"}),e.jsx(o,{onClick:()=>n("error","Connection failed"),children:"Error"}),e.jsx(o,{onClick:()=>n("warning","Storage limit reached"),children:"Warning"}),e.jsx(o,{onClick:()=>n("info","New update available"),children:"Info"})]}),e.jsx(v,{position:"top-right",children:a.map(t=>e.jsx(u,{message:t.message,type:t.type,visible:!0,onClose:()=>c(t.id),duration:4e3},t.id))})]})},parameters:{docs:{description:{story:"Practical examples showing different toast types with professional messaging."}}}},h={render:()=>{const a=()=>{const{showToast:s}=x();return e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex gap-2 flex-wrap",children:[e.jsx(o,{onClick:()=>s({message:"✅ Success toast!",type:"success",duration:3e3}),children:"Success"}),e.jsx(o,{onClick:()=>s({message:"❌ Error toast!",type:"error",duration:4e3}),children:"Error"}),e.jsx(o,{onClick:()=>s({message:"⚠️ Warning toast!",type:"warning",duration:5e3}),children:"Warning"}),e.jsx(o,{onClick:()=>s({message:"ℹ️ Info toast!",type:"info",duration:2e3}),children:"Info"})]}),e.jsx(o,{onClick:()=>s({message:"File uploaded successfully! What would you like to do next?",type:"success",duration:0,actions:[{label:"View File",onClick:()=>alert("Viewing file...")},{label:"Share",onClick:()=>alert("Sharing file...")}]}),variant:"outline",children:"Toast with Actions"})]})};return e.jsx(b,{position:"top-right",maxToasts:3,children:e.jsx(a,{})})},parameters:{docs:{description:{story:"Using ToastProvider for proper toast management with independent timers."}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    message: 'Changes saved successfully',
    type: 'success',
    duration: 5000,
    visible: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
    }>>([]);
    const nextIdRef = useRef(1);
    const showToast = useCallback((type: 'success' | 'error' | 'warning' | 'info', message: string) => {
      const id = nextIdRef.current++;
      setToasts(prev => [...prev, {
        id,
        type,
        message
      }]);
    }, []);
    const hideToast = useCallback((id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    return <div className="space-y-4">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => showToast('success', 'Operation completed successfully')}>
            Success Toast
          </Button>
          <Button onClick={() => showToast('error', 'Failed to save changes')}>
            Error Toast
          </Button>
          <Button onClick={() => showToast('warning', 'Storage space low')}>
            Warning Toast
          </Button>
          <Button onClick={() => showToast('info', 'New feature available')}>
            Info Toast
          </Button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map(toast => <Toast key={toast.id} message={toast.message} type={toast.type} visible={true} onClose={() => hideToast(toast.id)} duration={4000} />)}
        </ToastContainer>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Different toast types with appropriate colors and icons for various message contexts.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [activePosition, setActivePosition] = useState<string | null>(null);
    const positions = [{
      key: 'top-left',
      label: 'Top Left'
    }, {
      key: 'top-center',
      label: 'Top Center'
    }, {
      key: 'top-right',
      label: 'Top Right'
    }, {
      key: 'bottom-left',
      label: 'Bottom Left'
    }, {
      key: 'bottom-center',
      label: 'Bottom Center'
    }, {
      key: 'bottom-right',
      label: 'Bottom Right'
    }];
    const showToast = (position: string) => {
      setActivePosition(position);
      setTimeout(() => setActivePosition(null), 3000);
    };
    return <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2">
          {positions.map(pos => <Button key={pos.key} onClick={() => showToast(pos.key)} size="small">
              {pos.label}
            </Button>)}
        </div>

        <ToastContainer position={activePosition as 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center' | null}>
          {activePosition && <Toast message={\`Toast positioned at \${activePosition}\`} type="info" visible={true} onClose={() => setActivePosition(null)} />}
        </ToastContainer>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast can be positioned in six different locations on the screen.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toast, setToast] = useState<{
      visible: boolean;
      duration: number;
    } | null>(null);
    const showToast = (duration: number) => {
      setToast({
        visible: true,
        duration
      });
    };
    return <div className="space-y-4">
        <div className="flex gap-2">
          <Button onClick={() => showToast(2000)}>2 Second Toast</Button>
          <Button onClick={() => showToast(5000)}>5 Second Toast</Button>
          <Button onClick={() => showToast(0)}>Manual Close Only</Button>
        </div>

        {toast && <Toast message={\`Auto-dismiss in \${toast.duration === 0 ? 'manual close only' : \`\${toast.duration / 1000} seconds\`}\`} type="success" visible={toast.visible} duration={toast.duration} onClose={() => setToast(null)} />}
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Toasts can auto-dismiss after a specified duration or require manual closing.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [toasts, setToasts] = useState<Array<{
      id: number;
      type: 'success' | 'error' | 'warning' | 'info';
      message: string;
    }>>([]);
    const nextIdRef = useRef(1);
    const showToast = useCallback((type: 'success' | 'error' | 'warning' | 'info', message: string) => {
      const id = nextIdRef.current++;
      setToasts(prev => [...prev, {
        id,
        type,
        message
      }]);
    }, []);
    const hideToast = useCallback((id: number) => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, []);
    return <div className="space-y-6">
        <div className="flex gap-2 flex-wrap">
          <Button onClick={() => showToast('success', 'Profile updated successfully')}>
            Success
          </Button>
          <Button onClick={() => showToast('error', 'Connection failed')}>
            Error
          </Button>
          <Button onClick={() => showToast('warning', 'Storage limit reached')}>
            Warning
          </Button>
          <Button onClick={() => showToast('info', 'New update available')}>
            Info
          </Button>
        </div>

        <ToastContainer position="top-right">
          {toasts.map(toast => <Toast key={toast.id} message={toast.message} type={toast.type} visible={true} onClose={() => hideToast(toast.id)} duration={4000} />)}
        </ToastContainer>
      </div>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Practical examples showing different toast types with professional messaging.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const TestComponent = () => {
      const {
        showToast
      } = useToast();
      return <div className="space-y-4">
          <div className="flex gap-2 flex-wrap">
            <Button onClick={() => showToast({
            message: '✅ Success toast!',
            type: 'success',
            duration: 3000
          })}>
              Success
            </Button>
            <Button onClick={() => showToast({
            message: '❌ Error toast!',
            type: 'error',
            duration: 4000
          })}>
              Error
            </Button>
            <Button onClick={() => showToast({
            message: '⚠️ Warning toast!',
            type: 'warning',
            duration: 5000
          })}>
              Warning
            </Button>
            <Button onClick={() => showToast({
            message: 'ℹ️ Info toast!',
            type: 'info',
            duration: 2000
          })}>
              Info
            </Button>
          </div>
          <Button onClick={() => showToast({
          message: 'File uploaded successfully! What would you like to do next?',
          type: 'success',
          duration: 0,
          actions: [{
            label: 'View File',
            onClick: () => alert('Viewing file...')
          }, {
            label: 'Share',
            onClick: () => alert('Sharing file...')
          }]
        })} variant="outline">
            Toast with Actions
          </Button>
        </div>;
    };
    return <ToastProvider position="top-right" maxToasts={3}>
        <TestComponent />
      </ToastProvider>;
  },
  parameters: {
    docs: {
      description: {
        story: 'Using ToastProvider for proper toast management with independent timers.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};const I=["Default","Types","Positions","AutoDismiss","Examples","WithProvider"];export{f as AutoDismiss,p as Default,y as Examples,g as Positions,m as Types,h as WithProvider,I as __namedExportsOrder,E as default};
