# Component QA Testing Template

## File Structure
```
ComponentName/
├── ComponentName.test.tsx          # Unit test suite
├── ComponentName-qa-results.md     # Detailed QA report
└── QAResults.stories.tsx          # Visual QA report in Storybook
```

## Test Categories (45+ tests minimum)

### 1. Rendering (5 tests)
- Basic rendering with required props
- Rendering with optional props
- Rendering without props
- Conditional rendering scenarios
- Error boundaries

### 2. States (5 tests)
- Default state verification
- State transitions
- Controlled vs uncontrolled behavior
- State persistence
- Complex state combinations

### 3. Interactions (6 tests)
- Click interactions
- Keyboard navigation
- Focus management
- Hover states
- Touch interactions
- Event handler calls

### 4. Accessibility (6 tests)
- WCAG 2.1 AA compliance (jest-axe)
- ARIA attributes verification
- Screen reader compatibility
- Keyboard navigation
- Focus indicators
- Color contrast

### 5. Props & API (5 tests)
- Required props validation
- Optional props behavior
- Default values
- Edge case prop values
- Type validation

### 6. Form Integration (3 tests)
- Form submission
- Validation integration
- Field value handling

### 7. Test ID Support (2 tests)
- testId prop functionality
- Element targeting

### 8. Edge Cases (5 tests)
- Missing/undefined props
- Empty strings
- Special characters
- Long content
- Invalid data types

### 9. Performance (2 tests)
- Render performance
- Memory leaks

### 10. Styling (3 tests)
- CSS class application
- Theme support
- Custom styling props

## QA Report Structure

### Visual Report Components
1. **Status Banner** - Pass/fail summary with badges
2. **Metrics Grid** - Key performance indicators
3. **Test Categories** - Detailed breakdown by category
4. **Coverage Details** - Code coverage metrics
5. **Accessibility Compliance** - WCAG 2.1 AA details
6. **QA Approval** - Production readiness sign-off
7. **Recommendations** - Developer and QA guidelines

### Markdown Report Sections
1. Executive Summary
2. Test Categories Overview (table format)
3. Detailed Test Results
4. Accessibility Compliance
5. Performance Metrics
6. Browser Compatibility
7. Security Considerations
8. Recommendations
9. Testing Coverage

## Quality Standards
- **90%+ code coverage** (statements, branches, functions, lines)
- **100% accessibility compliance** (WCAG 2.1 AA)
- **All user interactions tested**
- **All props and states covered**
- **Edge cases handled**