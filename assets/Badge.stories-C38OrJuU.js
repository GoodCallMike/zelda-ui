import{j as e}from"./jsx-runtime-Cihbe4BQ.js";import{C as l,A as m,X as v,a as o,M as p}from"./XIcon-CZdcAhEp.js";import{T as c}from"./Typography-9lRHdsZv.js";import{B as a}from"./Badge-CRde4N6t.js";import"./iframe-CzqNFs5z.js";import"./preload-helper-BXl3LOEh.js";import"./index-BDV_RS0N.js";const B={title:"Data Display/Badge",component:a,parameters:{layout:"centered",docs:{description:{component:`Compact status indicators and labels for displaying metadata, counts, and state information.

\`\`\`tsx
import { Badge } from '@zelda/core';

// Basic status indicator
<Badge variant="success">Active</Badge>

// Notification count
<Badge variant="primary">3</Badge>
\`\`\`

## Variants
- **primary** - Important status or new items (blue/purple theme)
- **success** - Positive states and completed actions (green)
- **warning** - Caution states requiring attention (orange)
- **error** - Critical issues and failures (red)
- **default** - Neutral information (gray)

## Accessibility & Testing
- Uses semantic span element with proper text content
- Supports aria-label for additional context (especially for count badges)
- Not focusable by default (display element)

\`\`\`tsx
// Testing approach
const badge = screen.getByTestId('status-badge');
expect(badge).toHaveTextContent('Active');
\`\`\``}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","primary","success","warning","error"],description:"Visual style and semantic meaning",table:{type:{summary:"string"},defaultValue:{summary:"default"}}},size:{control:"select",options:["small","medium","large"],description:"Badge size for different contexts",table:{type:{summary:"string"},defaultValue:{summary:"medium"}}},children:{control:"text",description:"Badge content (text, numbers, or icons)",table:{type:{summary:"ReactNode"}}},testId:{control:"text",description:"Test identifier for automated testing",table:{type:{summary:"string"}}},className:{table:{disable:!0}}}},s={args:{children:"New",variant:"primary"}},r={render:()=>e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"})]}),parameters:{docs:{description:{story:"All available badge variants showing different semantic meanings and visual styles."}}}},i={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"small",variant:"primary",children:"Small"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Compact"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"medium",variant:"primary",children:"Medium"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Default"})]}),e.jsxs("div",{className:"text-center",children:[e.jsx(a,{size:"large",variant:"primary",children:"Large"}),e.jsx("div",{className:"text-xs mt-1 text-gray-600",children:"Prominent"})]})]}),parameters:{docs:{description:{story:"Badge sizes for different interface contexts and visual hierarchy needs."}}}},t={render:()=>e.jsxs("div",{className:"flex items-center gap-4 flex-wrap",children:[e.jsxs(a,{variant:"success",children:[e.jsx(l,{className:"w-3 h-3 mr-1"}),"Complete"]}),e.jsxs(a,{variant:"warning",children:[e.jsx(m,{className:"w-3 h-3 mr-1"}),"Pending"]}),e.jsxs(a,{variant:"error",children:[e.jsx(v,{className:"w-3 h-3 mr-1"}),"Failed"]}),e.jsxs(a,{variant:"primary",children:[e.jsx(o,{className:"w-3 h-3 mr-1"}),"Featured"]}),e.jsx(a,{variant:"primary",size:"small",children:e.jsx(p,{className:"w-3 h-3"})})]}),parameters:{docs:{description:{story:"Badges with icons for enhanced visual communication and status indication."}}}},n={render:()=>e.jsxs("div",{className:"space-y-8 max-w-2xl",children:[e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx(c,{variant:"h6",className:"mb-4",children:"User Profile Status"}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gray-200 rounded-full"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium",children:"Sarah Johnson"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsx(a,{variant:"success",size:"small",children:"Online"}),e.jsx(a,{variant:"primary",size:"small",children:"Pro"})]})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx(c,{variant:"h6",className:"mb-4",children:"Project Tasks"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Design System Updates"}),e.jsxs(a,{variant:"success",children:[e.jsx(l,{className:"w-3 h-3 mr-1"}),"Complete"]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"API Integration"}),e.jsx(a,{variant:"warning",children:"In Progress"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"User Testing"}),e.jsx(a,{variant:"error",children:"Blocked"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{children:"Documentation"}),e.jsx(a,{variant:"primary",children:"New"})]})]})]}),e.jsxs("div",{className:"p-4 border rounded-lg",children:[e.jsx(c,{variant:"h6",className:"mb-4",children:"Notifications"}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(p,{className:"w-4 h-4 text-gray-500"}),e.jsx("span",{children:"Messages"})]}),e.jsx(a,{variant:"primary","aria-label":"5 unread messages",children:"5"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{className:"w-4 h-4 text-gray-500"}),e.jsx("span",{children:"System Alerts"})]}),e.jsx(a,{variant:"error","aria-label":"2 critical alerts",children:"2"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(o,{className:"w-4 h-4 text-gray-500"}),e.jsx("span",{children:"Updates"})]}),e.jsx(a,{variant:"success","aria-label":"12 feature updates",children:"12"})]})]})]})]}),parameters:{docs:{description:{story:"Real-world examples showing badges in user profiles, task management, and notification systems."}}}},d={parameters:{backgrounds:{default:"dark"},docs:{description:{story:"Badge appearance in dark mode with proper contrast and theme adaptation."}}},decorators:[g=>e.jsx("div",{className:"dark p-6 bg-gray-900",children:e.jsx(g,{})})],render:()=>e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"flex gap-4 flex-wrap",children:[e.jsx(a,{variant:"default",children:"Default"}),e.jsx(a,{variant:"primary",children:"Primary"}),e.jsx(a,{variant:"success",children:"Success"}),e.jsx(a,{variant:"warning",children:"Warning"}),e.jsx(a,{variant:"error",children:"Error"})]}),e.jsx("div",{className:"p-4 border border-gray-700 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-10 h-10 bg-gray-700 rounded-full"}),e.jsxs("div",{children:[e.jsx("div",{className:"font-medium text-white",children:"Alex Chen"}),e.jsxs("div",{className:"flex items-center gap-2 mt-1",children:[e.jsxs(a,{variant:"success",size:"small",children:[e.jsx(l,{className:"w-3 h-3 mr-1"}),"Available"]}),e.jsx(a,{variant:"primary",size:"small",children:"Admin"})]})]})]})})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'New',
    variant: 'primary'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex gap-4 flex-wrap">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="error">Error</Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'All available badge variants showing different semantic meanings and visual styles.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="text-center">
        <Badge size="small" variant="primary">
          Small
        </Badge>
        <div className="text-xs mt-1 text-gray-600">Compact</div>
      </div>
      <div className="text-center">
        <Badge size="medium" variant="primary">
          Medium
        </Badge>
        <div className="text-xs mt-1 text-gray-600">Default</div>
      </div>
      <div className="text-center">
        <Badge size="large" variant="primary">
          Large
        </Badge>
        <div className="text-xs mt-1 text-gray-600">Prominent</div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badge sizes for different interface contexts and visual hierarchy needs.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-4 flex-wrap">
      <Badge variant="success">
        <CheckIcon className="w-3 h-3 mr-1" />
        Complete
      </Badge>
      <Badge variant="warning">
        <AlertTriangleIcon className="w-3 h-3 mr-1" />
        Pending
      </Badge>
      <Badge variant="error">
        <XIcon className="w-3 h-3 mr-1" />
        Failed
      </Badge>
      <Badge variant="primary">
        <Star01Icon className="w-3 h-3 mr-1" />
        Featured
      </Badge>
      <Badge variant="primary" size="small">
        <Mail01Icon className="w-3 h-3" />
      </Badge>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Badges with icons for enhanced visual communication and status indication.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="space-y-8 max-w-2xl">
      {/* User Profile Status */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" className="mb-4">
          User Profile Status
        </Typography>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
          <div>
            <div className="font-medium">Sarah Johnson</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="success" size="small">
                Online
              </Badge>
              <Badge variant="primary" size="small">
                Pro
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Task Management */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" className="mb-4">
          Project Tasks
        </Typography>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span>Design System Updates</span>
            <Badge variant="success">
              <CheckIcon className="w-3 h-3 mr-1" />
              Complete
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>API Integration</span>
            <Badge variant="warning">In Progress</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>User Testing</span>
            <Badge variant="error">Blocked</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span>Documentation</span>
            <Badge variant="primary">New</Badge>
          </div>
        </div>
      </div>

      {/* Notification Center */}
      <div className="p-4 border rounded-lg">
        <Typography variant="h6" className="mb-4">
          Notifications
        </Typography>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Mail01Icon className="w-4 h-4 text-gray-500" />
              <span>Messages</span>
            </div>
            <Badge variant="primary" aria-label="5 unread messages">
              5
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AlertTriangleIcon className="w-4 h-4 text-gray-500" />
              <span>System Alerts</span>
            </div>
            <Badge variant="error" aria-label="2 critical alerts">
              2
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Star01Icon className="w-4 h-4 text-gray-500" />
              <span>Updates</span>
            </div>
            <Badge variant="success" aria-label="12 feature updates">
              12
            </Badge>
          </div>
        </div>
      </div>
    </div>,
  parameters: {
    docs: {
      description: {
        story: 'Real-world examples showing badges in user profiles, task management, and notification systems.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: 'dark'
    },
    docs: {
      description: {
        story: 'Badge appearance in dark mode with proper contrast and theme adaptation.'
      }
    }
  },
  decorators: [Story => <div className="dark p-6 bg-gray-900">
        <Story />
      </div>],
  render: () => <div className="space-y-6">
      <div className="flex gap-4 flex-wrap">
        <Badge variant="default">Default</Badge>
        <Badge variant="primary">Primary</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </div>

      <div className="p-4 border border-gray-700 rounded-lg">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div>
            <div className="font-medium text-white">Alex Chen</div>
            <div className="flex items-center gap-2 mt-1">
              <Badge variant="success" size="small">
                <CheckIcon className="w-3 h-3 mr-1" />
                Available
              </Badge>
              <Badge variant="primary" size="small">
                Admin
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
}`,...d.parameters?.docs?.source}}};const w=["Default","Variants","Sizes","WithIcons","Examples","DarkMode"];export{d as DarkMode,s as Default,n as Examples,i as Sizes,r as Variants,t as WithIcons,w as __namedExportsOrder,B as default};
