# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2024-12-19

### Added
- **Accessibility Enhancements**: Comprehensive WCAG 2.1 AA compliance improvements
  - Added `role="img"` and dynamic `aria-label` support to all 500+ icons
  - Enhanced Modal component with proper ARIA attributes and focus management
  - Improved Select component with `role="listbox"`, `aria-required`, and keyboard navigation
  - Enhanced Slider component with `aria-disabled` and proper keyboard controls
  - Fixed Button component accessibility with proper ARIA states

### Fixed
- **Biome Linting**: Resolved 1184 biome errors and 25 warnings
  - Replaced banned `Function` types with proper function signatures
  - Replaced banned `{}` types with `Record<string, never>`
  - Removed `any` type casting and non-null assertions
  - Fixed array index keys and accessibility violations
  - Enhanced type safety across all components

### Changed
- **Icons Package**: Updated all icon components with accessibility attributes
- **Test Suite**: Fixed test failures caused by accessibility improvements (139/139 tests passing)
- **Code Quality**: Improved TypeScript strict mode compliance

## [1.0.0] - 2024-12-18

### Added
- Initial release of Zelda UI component library
- Core components: Button, Input, Select, Modal, Slider, Toast, etc.
- Icon library with 500+ SVG icons
- TypeScript support with strict type checking
- Storybook documentation
- Comprehensive test suite with Vitest