# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.1] - 2024-12-19

### Added
- Initial release of Zelda UI component library
- **@zelda/core** - Core UI components package
  - Button component with variants (primary, secondary, tertiary, link)
  - Input component with validation and styling options
  - Select component with dropdown functionality
  - Modal component with overlay and keyboard navigation
  - Alert component with closable notifications
  - Checkbox component with labels and error states
  - Radio and RadioButton components with group support
  - Avatar component with image fallbacks and initials
  - Typography component with semantic variants
  - Slider component for range inputs
  - Toast notification system with auto-dismiss
  - Tooltip component for contextual information
  - Badge and Card components for content display
  - Divider component for visual separation
- **@zelda/icons** - Comprehensive icon library
  - 500+ SVG icons with consistent styling
  - Tree-shakable imports for optimal bundle size
  - TypeScript support with proper types
- **@zelda/theme** - Design system and theming
  - CSS custom properties for consistent styling
  - Dark mode support with automatic theme switching
  - Vanilla Extract CSS-in-JS integration
  - Utility classes for rapid development
  - Triforce Gold and Mystic Purple color schemes
- React 18 and 19 compatibility
- TypeScript support with full type definitions
- Comprehensive test suite with 32 passing tests
- Storybook documentation and component playground
- Accessibility features following WCAG 2.1 guidelines

### Technical Features
- Monorepo architecture with Turbo build orchestration
- Rollup bundling for optimized package distribution
- Vitest and React Testing Library for testing
- Vanilla Extract for type-safe CSS-in-JS
- ESLint and Biome for code quality
- Lefthook for pre-commit quality gates
- Playwright for visual regression testing

### Documentation
- Complete Storybook documentation site
- Component API documentation
- Usage examples and integration guides
- Accessibility testing utilities
- Package READMEs with installation instructions

[0.0.1]: https://github.com/goodcallmike/zelda-ui/releases/tag/v0.0.1