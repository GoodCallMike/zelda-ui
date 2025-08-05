#!/usr/bin/env node

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CORE_PATH = join(__dirname, '../packages/core/src');

function toPascalCase(str) {
  return str.replace(/(?:^|-)([a-z])/g, (_, char) => char.toUpperCase());
}

function toCamelCase(str) {
  return str.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
}

function toKebabCase(str) {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

function generateComponent(name) {
  const pascalName = toPascalCase(name);
  const camelName = toCamelCase(name);
  const kebabName = toKebabCase(pascalName);
  const componentDir = join(CORE_PATH, pascalName);

  if (existsSync(componentDir)) {
    console.error(`Component ${pascalName} already exists!`);
    process.exit(1);
  }

  mkdirSync(componentDir, { recursive: true });

  // Component file
  const componentContent = `import type { ReactNode } from 'react';
import * as React from 'react';
import { cn } from '../styles';
import styles from './${pascalName}.module.css';

export interface ${pascalName}Props extends React.HTMLAttributes<HTMLDivElement> {
  /** ${pascalName} content */
  children?: ReactNode;
  /** ${pascalName} variant */
  variant?: 'default' | 'primary' | 'secondary';
  /** ${pascalName} size */
  size?: 'small' | 'medium' | 'large';
  /** Whether ${pascalName} is disabled */
  disabled?: boolean;
  /** Test identifier */
  testId?: string;
}

export const ${pascalName} = ({
  children,
  variant = 'default',
  size = 'medium',
  disabled = false,
  className,
  testId,
  ...props
}: ${pascalName}Props) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center',
        styles.${camelName},
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        className,
      )}
      data-testid={testId}
      {...props}
    >
      {children}
    </div>
  );
};
`;

  // CSS Module
  const cssContent = `.${camelName} {
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.1s ease-linear;
}

.default {
  background-color: var(--gray-100);
  color: var(--gray-900);
}

.primary {
  background-color: var(--triforce-600);
  color: white;
}

.secondary {
  background-color: var(--hyrule-600);
  color: white;
}

.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.medium {
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
}

.large {
  padding: 0.75rem 1rem;
  font-size: 1rem;
}

.disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}

:global(.dark) .default {
  background-color: var(--gray-800);
  color: var(--gray-100);
}
`;

  // Stories
  const storiesContent = `import type { Meta, StoryObj } from '@storybook/react';
import { ${pascalName} } from './${pascalName}';

const meta: Meta<typeof ${pascalName}> = {
  title: 'Components/${pascalName}',
  component: ${pascalName},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
    disabled: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '${pascalName}',
  },
};

export const Variants: Story = {
  render: () => (
    <div className="flex gap-4">
      <${pascalName} variant="default">Default</${pascalName}>
      <${pascalName} variant="primary">Primary</${pascalName}>
      <${pascalName} variant="secondary">Secondary</${pascalName}>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <${pascalName} size="small">Small</${pascalName}>
      <${pascalName} size="medium">Medium</${pascalName}>
      <${pascalName} size="large">Large</${pascalName}>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: 'Disabled ${pascalName}',
    disabled: true,
  },
};
`;

  // Tests
  const testContent = `import { render, screen } from '@testing-library/react';
import { ${pascalName} } from './${pascalName}';
import styles from './${pascalName}.module.css';

describe('${pascalName}', () => {
  it('renders children correctly', () => {
    render(<${pascalName}>Test content</${pascalName}>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies variant classes correctly', () => {
    render(<${pascalName} variant="primary" testId="${kebabName}">Content</${pascalName}>);
    const element = screen.getByTestId('${kebabName}');
    expect(element).toHaveClass(styles.primary);
  });

  it('applies size classes correctly', () => {
    render(<${pascalName} size="large" testId="${kebabName}">Content</${pascalName}>);
    const element = screen.getByTestId('${kebabName}');
    expect(element).toHaveClass(styles.large);
  });

  it('applies disabled state correctly', () => {
    render(<${pascalName} disabled testId="${kebabName}">Content</${pascalName}>);
    const element = screen.getByTestId('${kebabName}');
    expect(element).toHaveClass(styles.disabled);
  });

  it('forwards additional props', () => {
    render(<${pascalName} data-custom="test" testId="${kebabName}">Content</${pascalName}>);
    const element = screen.getByTestId('${kebabName}');
    expect(element).toHaveAttribute('data-custom', 'test');
  });

  it('applies custom className', () => {
    render(<${pascalName} className="custom-class" testId="${kebabName}">Content</${pascalName}>);
    const element = screen.getByTestId('${kebabName}');
    expect(element).toHaveClass('custom-class');
  });
});
`;

  // Index file
  const indexContent = `export { ${pascalName} } from './${pascalName}';
export type { ${pascalName}Props } from './${pascalName}';
`;

  // Write files
  writeFileSync(join(componentDir, `${pascalName}.tsx`), componentContent);
  writeFileSync(join(componentDir, `${pascalName}.module.css`), cssContent);
  writeFileSync(
    join(componentDir, `${pascalName}.stories.tsx`),
    storiesContent,
  );
  writeFileSync(join(componentDir, `${pascalName}.test.tsx`), testContent);
  writeFileSync(join(componentDir, 'index.ts'), indexContent);

  // Update core index.ts
  const coreIndexPath = join(CORE_PATH, 'index.ts');
  const coreIndexContent = readFileSync(coreIndexPath, 'utf8');
  const newExports = `export type { ${pascalName}Props } from './${pascalName}/${pascalName}';
export { ${pascalName} } from './${pascalName}/${pascalName}';
`;

  const updatedCoreIndex = coreIndexContent + newExports;
  writeFileSync(coreIndexPath, updatedCoreIndex);

  console.log(`✅ Generated ${pascalName} component successfully!`);
  console.log(`📁 Files created in: packages/core/src/${pascalName}/`);
  console.log(`📝 Updated: packages/core/src/index.ts`);
  console.log(`\n🚀 Next steps:`);
  console.log(`   1. Customize the component implementation`);
  console.log(`   2. Update CSS styles as needed`);
  console.log(`   3. Add accessibility tests if required`);
  console.log(`   4. Run: pnpm test to verify everything works`);
}

// CLI
const componentName = process.argv[2];
if (!componentName) {
  console.error('Usage: node generate-component.js <component-name>');
  console.error('Example: node generate-component.js badge');
  process.exit(1);
}

generateComponent(componentName);
