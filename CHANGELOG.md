# Changelog

All notable changes to Zelda UI will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.1.0-alpha.1] - 2024-01-15 (Ready for Publishing)

### 🎉 Initial Release

First alpha release of Zelda UI - a modern React component library built with TypeScript, featuring accessible components with beautiful design.

**Status**: Built and ready for NPM publishing (requires 2FA authentication)

### ✨ Added

#### Core Components
- **Button** - Primary, outline, destructive, and ghost variants with full accessibility
- **Input** - Text input with label, error states, and validation support
- **Select** - Dropdown selection with keyboard navigation
- **Checkbox** - Accessible checkbox with indeterminate state
- **Radio** - Radio button groups with proper ARIA implementation
- **Slider** - Range input with customizable min/max values
- **Typography** - Semantic text components (h1-h6, body, caption)

#### Layout Components
- **Card** - Flexible container with consistent spacing
- **Divider** - Horizontal and vertical separators
- **Modal** - Accessible dialog with focus management
- **Avatar** - User profile images with fallback initials

#### Feedback Components
- **Alert** - Success, warning, error, and info notifications
- **Badge** - Status indicators and labels
- **Toast** - Temporary notifications with auto-dismiss
- **Tooltip** - Contextual help text on hover/focus

#### Packages Published
- **zelda-ui-core@0.1.0-alpha.1** - Core component library
- **zelda-ui-icons@0.1.0-alpha.1** - Icon library with common UI icons
- **zelda-ui-theme@0.1.0-alpha.1** - Design tokens and theming system

### 🎨 Features

#### Accessibility First
- WCAG 2.1 AA compliance for all components
- Full keyboard navigation support
- Screen reader optimized with proper ARIA attributes
- Focus management and visual indicators
- High contrast mode support

#### Developer Experience
- **TypeScript** - Full type safety with comprehensive interfaces
- **Storybook** - Interactive documentation and component playground
- **Testing** - Unit tests with React Testing Library
- **ESM/CJS** - Dual package format support
- **Tree Shaking** - Optimized bundle sizes

#### Theming System
- CSS-in-JS with Vanilla Extract
- Design tokens for consistent spacing, colors, and typography
- Dark/light mode support
- Customizable theme provider
- Responsive design utilities

#### Documentation
- Comprehensive Storybook documentation
- Real-world usage examples
- Integration guides for common patterns
- Accessibility testing utilities
- Quick start guide

### 📦 Package Information

```bash
# Install core components
npm install zelda-ui-core

# Install icons (optional)
npm install zelda-ui-icons

# Install theme system (optional)
npm install zelda-ui-theme
```

### 🔗 Links

- [Documentation](https://goodcallmike.github.io/zelda-ui/)
- [NPM Package](https://www.npmjs.com/package/zelda-ui-core)
- [GitHub Repository](https://github.com/goodcallmike/zelda-ui)

---

## Versioning Strategy

Zelda UI follows [Semantic Versioning](https://semver.org/) (SemVer):

### Version Format: `MAJOR.MINOR.PATCH[-PRERELEASE]`

#### MAJOR (Breaking Changes)
- API changes that break backward compatibility
- Removal of deprecated features
- Significant architectural changes
- Component prop interface changes

**Examples:**
- Removing a component prop
- Changing default behavior
- Renaming components or exports

#### MINOR (New Features)
- New components or features
- New component variants or props
- Enhanced functionality (backward compatible)
- Performance improvements

**Examples:**
- Adding new components
- Adding new props to existing components
- New theme tokens or design system updates

#### PATCH (Bug Fixes)
- Bug fixes and small improvements
- Documentation updates
- Dependency updates (non-breaking)
- Accessibility improvements

**Examples:**
- Fixing component rendering issues
- Correcting TypeScript types
- Updating documentation

#### PRERELEASE (Alpha/Beta/RC)
- **Alpha** (`-alpha.x`) - Early development, API may change
- **Beta** (`-beta.x`) - Feature complete, testing phase
- **RC** (`-rc.x`) - Release candidate, final testing

### Release Schedule

- **Major releases**: Quarterly (with migration guides)
- **Minor releases**: Monthly (new features)
- **Patch releases**: As needed (bug fixes)
- **Prerelease**: Continuous (development builds)

### Breaking Change Policy

- Breaking changes only in major versions
- Deprecation warnings in minor versions before removal
- Migration guides provided for all breaking changes
- Minimum 3-month deprecation period for public APIs

### Supported Versions

- **Current major version**: Full support (new features + bug fixes)
- **Previous major version**: Security fixes only (6 months)
- **Older versions**: Community support only

### Changelog Categories

Each release includes changes organized by:

- 🎉 **Added** - New features and components
- 🔄 **Changed** - Changes to existing functionality
- 🗑️ **Deprecated** - Features marked for removal
- 🚫 **Removed** - Deleted features (breaking changes)
- 🐛 **Fixed** - Bug fixes and corrections
- 🔒 **Security** - Security vulnerability fixes

---

*For questions about versioning or releases, please [open an issue](https://github.com/goodcallmike/zelda-ui/issues) or start a [discussion](https://github.com/goodcallmike/zelda-ui/discussions).*