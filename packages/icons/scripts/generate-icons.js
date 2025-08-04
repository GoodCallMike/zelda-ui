#!/usr/bin/env node

import { readdir, readFile, stat, writeFile } from 'node:fs/promises';
import { basename, extname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const assetsDir = join(__dirname, '../assets/svg');
const srcDir = join(__dirname, '../src');

// Convert kebab-case to PascalCase
function toPascalCase(str) {
  return str
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Convert SVG attributes to React camelCase
function convertSvgAttributes(svgContent) {
  return svgContent
    .replace(/fill-rule=/g, 'fillRule=')
    .replace(/clip-rule=/g, 'clipRule=')
    .replace(/stroke-width=/g, 'strokeWidth=')
    .replace(/stroke-linecap=/g, 'strokeLinecap=')
    .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
    .replace(/stroke-dasharray=/g, 'strokeDasharray=')
    .replace(/stroke-dashoffset=/g, 'strokeDashoffset=')
    .replace(/stroke-miterlimit=/g, 'strokeMiterlimit=')
    .replace(/stroke-opacity=/g, 'strokeOpacity=')
    .replace(/fill-opacity=/g, 'fillOpacity=')
    .replace(/font-family=/g, 'fontFamily=')
    .replace(/font-size=/g, 'fontSize=')
    .replace(/font-weight=/g, 'fontWeight=')
    .replace(/text-anchor=/g, 'textAnchor=')
    .replace(/dominant-baseline=/g, 'dominantBaseline=');
}

// Generate React component from SVG
function generateComponent(name, svgContent) {
  const componentName = `${toPascalCase(name)}Icon`;

  // Extract SVG attributes and content
  const svgMatch = svgContent.match(/<svg[^>]*>(.*?)<\/svg>/s);
  if (!svgMatch) {
    throw new Error(`Invalid SVG content for ${name}`);
  }

  const svgInner = convertSvgAttributes(svgMatch[1].trim());
  const iconName = name.replace(/-/g, ' ');

  return `import type { SVGProps } from 'react';

export const ${componentName} = ({ className = 'size-4', ...props }: SVGProps<SVGSVGElement>) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-label="${iconName} icon"
    {...props}
  >
    ${svgInner}
  </svg>
);
`;
}

// Recursively find all SVG files
async function findSvgFiles(dir, files = []) {
  const entries = await readdir(dir);

  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const stats = await stat(fullPath);

    if (stats.isDirectory()) {
      await findSvgFiles(fullPath, files);
    } else if (extname(entry) === '.svg') {
      files.push(fullPath);
    }
  }

  return files;
}

async function generateIcons() {
  try {
    // Find all SVG files recursively
    const svgFiles = await findSvgFiles(assetsDir);

    if (svgFiles.length === 0) {
      console.log('No SVG files found in assets/svg directory');
      return;
    }

    const exports = [];
    const componentNames = new Set();

    // Generate component for each SVG
    for (const svgPath of svgFiles) {
      const relativePath = relative(assetsDir, svgPath);
      const name = basename(svgPath, '.svg');
      const componentName = `${toPascalCase(name)}Icon`;

      // Skip duplicates
      if (componentNames.has(componentName)) {
        console.log(`Skipping duplicate ${componentName} from ${relativePath}`);
        continue;
      }

      componentNames.add(componentName);
      const componentPath = join(srcDir, `${componentName}.tsx`);

      console.log(`Generating ${componentName} from ${relativePath}`);

      const svgContent = await readFile(svgPath, 'utf-8');
      const componentCode = generateComponent(name, svgContent);

      await writeFile(componentPath, componentCode);
      exports.push(`export { ${componentName} } from './${componentName}';`);
    }

    // Update index.ts
    const indexContent = `${exports.join('\n')}\n`;
    await writeFile(join(srcDir, 'index.ts'), indexContent);

    console.log(`Generated ${svgFiles.length} icon components`);
  } catch (error) {
    console.error('Error generating icons:', error);
    process.exit(1);
  }
}

generateIcons();
