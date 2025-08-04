import React from 'react';

interface AccessibilitySectionProps {
  title: string;
  children: React.ReactNode;
  variant?: 'default' | 'interactive' | 'warning' | 'success' | 'info';
  className?: string;
}

const variantStyles = {
  default: 'bg-gray-50 border-gray-200',
  interactive: 'bg-green-50 border-green-200',
  warning: 'bg-yellow-50 border-yellow-200',
  success: 'bg-emerald-50 border-emerald-200',
  info: 'bg-blue-50 border-blue-200',
};

const titleStyles = {
  default: 'text-gray-800',
  interactive: 'text-green-800',
  warning: 'text-yellow-800',
  success: 'text-emerald-800',
  info: 'text-blue-800',
};

export const AccessibilitySection: React.FC<AccessibilitySectionProps> = ({
  title,
  children,
  variant = 'default',
  className = '',
}) => {
  return (
    <div className="space-y-4">
      <h4 className={`text-lg font-semibold ${titleStyles[variant]}`}>
        {title}
      </h4>
      <div className={`p-4 border rounded-lg ${variantStyles[variant]} ${className}`}>
        {children}
      </div>
    </div>
  );
};

interface KeyboardShortcutProps {
  shortcuts: Array<{ key: string; action: string }>;
}

export const KeyboardShortcutTable: React.FC<KeyboardShortcutProps> = ({ shortcuts }) => {
  return (
    <div className="space-y-2">
      {shortcuts.map(({ key, action }) => (
        <div key={key} className="flex justify-between items-center p-2 bg-white border rounded">
          <span className="text-sm">{action}</span>
          <kbd className="px-2 py-1 bg-gray-200 rounded text-sm font-mono">
            {key}
          </kbd>
        </div>
      ))}
    </div>
  );
};

interface ARIAAttributeProps {
  attributes: Array<{
    name: string;
    purpose: string;
    example: string;
  }>;
}

export const ARIAAttributeList: React.FC<ARIAAttributeProps> = ({ attributes }) => {
  return (
    <div className="space-y-3">
      {attributes.map(({ name, purpose, example }) => (
        <div key={name} className="p-3 bg-white border rounded">
          <div className="flex items-center gap-2 mb-2">
            <code className="px-2 py-1 bg-gray-100 rounded text-sm font-mono">
              {name}
            </code>
            <span className="text-sm text-gray-600">{purpose}</span>
          </div>
          <code className="text-xs text-gray-500 block">
            {example}
          </code>
        </div>
      ))}
    </div>
  );
};

interface TestingExampleProps {
  title: string;
  code: string;
  description?: string;
}

export const TestingExample: React.FC<TestingExampleProps> = ({
  title,
  code,
  description,
}) => {
  return (
    <div className="space-y-2">
      <h5 className="font-semibold text-sm">{title}</h5>
      {description && (
        <p className="text-sm text-gray-600">{description}</p>
      )}
      <pre className="p-3 bg-gray-900 text-gray-100 rounded text-xs overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

interface AccessibilityTipProps {
  children: React.ReactNode;
  type?: 'tip' | 'warning' | 'info';
}

export const AccessibilityTip: React.FC<AccessibilityTipProps> = ({
  children,
  type = 'tip',
}) => {
  const styles = {
    tip: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-gray-50 border-gray-200 text-gray-800',
  };

  const icons = {
    tip: '💡',
    warning: '⚠️',
    info: 'ℹ️',
  };

  return (
    <div className={`p-3 border rounded ${styles[type]}`}>
      <div className="flex items-start gap-2">
        <span className="text-lg">{icons[type]}</span>
        <div className="text-sm">{children}</div>
      </div>
    </div>
  );
};

interface FocusIndicatorDemoProps {
  children: React.ReactNode;
  instructions?: string;
}

export const FocusIndicatorDemo: React.FC<FocusIndicatorDemoProps> = ({
  children,
  instructions = "Use Tab to navigate between elements and observe the focus indicators.",
}) => {
  return (
    <AccessibilitySection title="🎯 Focus Indicators" variant="warning">
      <AccessibilityTip type="tip">
        <strong>Try this:</strong> {instructions}
      </AccessibilityTip>
      <div className="mt-4">
        {children}
      </div>
    </AccessibilitySection>
  );
};

interface ScreenReaderDemoProps {
  children: React.ReactNode;
  description?: string;
}

export const ScreenReaderDemo: React.FC<ScreenReaderDemoProps> = ({
  children,
  description = "These examples are optimized for screen reader users with proper labeling and descriptions.",
}) => {
  return (
    <AccessibilitySection title="📢 Screen Reader Support" variant="info">
      <AccessibilityTip type="info">
        <strong>Screen Reader Note:</strong> {description}
      </AccessibilityTip>
      <div className="mt-4 space-y-4">
        {children}
      </div>
    </AccessibilitySection>
  );
};

// Utility component for creating consistent accessibility demos
interface AccessibilityDemoProps {
  title: string;
  description: string;
  children: React.ReactNode;
  keyboardShortcuts?: Array<{ key: string; action: string }>;
  ariaAttributes?: Array<{ name: string; purpose: string; example: string }>;
  testingExamples?: Array<{ title: string; code: string; description?: string }>;
}

export const AccessibilityDemo: React.FC<AccessibilityDemoProps> = ({
  title,
  description,
  children,
  keyboardShortcuts,
  ariaAttributes,
  testingExamples,
}) => {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <AccessibilitySection title={title} variant="info">
        <p className="text-sm">{description}</p>
      </AccessibilitySection>

      {/* Interactive Demo */}
      <AccessibilitySection title="🔧 Interactive Demo" variant="interactive">
        {children}
      </AccessibilitySection>

      {/* Keyboard Shortcuts */}
      {keyboardShortcuts && (
        <AccessibilitySection title="⌨️ Keyboard Shortcuts">
          <KeyboardShortcutTable shortcuts={keyboardShortcuts} />
        </AccessibilitySection>
      )}

      {/* ARIA Attributes */}
      {ariaAttributes && (
        <AccessibilitySection title="🏷️ ARIA Attributes">
          <ARIAAttributeList attributes={ariaAttributes} />
        </AccessibilitySection>
      )}

      {/* Testing Examples */}
      {testingExamples && (
        <AccessibilitySection title="🧪 Testing Examples">
          <div className="space-y-4">
            {testingExamples.map((example, index) => (
              <TestingExample
                key={index}
                title={example.title}
                code={example.code}
                description={example.description}
              />
            ))}
          </div>
        </AccessibilitySection>
      )}
    </div>
  );
};