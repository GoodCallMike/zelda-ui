# 📚 Zelda UI Documentation

This folder contains context files and templates for maintaining consistency across the Zelda UI design system.

## Quick Reference Guide

**Building a new component?** → [COMPONENT_DEVELOPMENT.md](./COMPONENT_DEVELOPMENT.md)  
**Need to know what colors to use?** → [THEME_CONTEXT.md](./THEME_CONTEXT.md)  
**Confused about CSS/styling approach?** → [STYLING_CONTEXT.md](./STYLING_CONTEXT.md)  
**Looking for icons?** → [ICONS_CONTEXT.md](./ICONS_CONTEXT.md)  
**Writing component documentation?** → [doc-template.md](./doc-template.md)

## Context Files

### ⚛️ [COMPONENT_DEVELOPMENT.md](./COMPONENT_DEVELOPMENT.md)
**When to use:** Building new components, following best practices

Comprehensive guide for creating Zelda UI components:
- Styling strategy (utilities first, CSS modules last)
- Component structure templates and patterns
- Dark mode implementation approaches
- Accessibility requirements and testing
- Performance optimization and quality checklist

### 🎨 [THEME_CONTEXT.md](./THEME_CONTEXT.md)
**When to use:** Creating components, implementing dark mode, choosing colors

Comprehensive reference for the Zelda UI theme system:
- Light/dark mode color transformations
- Component styling patterns with code examples
- Dark mode purple palette specifications
- Connected button group techniques
- Font system and accessibility guidelines

### 🛠️ [STYLING_CONTEXT.md](./STYLING_CONTEXT.md)
**When to use:** Writing CSS, avoiding Tailwind mistakes, implementing styles

Styling architecture and implementation guide:
- Vanilla Extract usage (NOT Tailwind CSS)
- CSS modules and custom properties patterns
- Dark mode implementation with `.dark` class
- Common styling mistakes and how to avoid them
- File structure and build process

### 🎯 [ICONS_CONTEXT.md](./ICONS_CONTEXT.md)
**When to use:** Adding icons to components, finding the right icon names

Comprehensive icon reference and usage guide:
- Common icons organized by category (search, user, actions, etc.)
- Correct icon names and import patterns
- Icon sizing guidelines and usage patterns
- Common mistakes and how to avoid them

### 📝 [doc-template.md](./doc-template.md)
**When to use:** Writing Storybook stories, documenting components

Template for consistent component documentation:
- Component description structure
- Required Storybook stories (Default, Variants, Dark Mode, Real World Examples)
- ArgTypes templates with proper descriptions
- Zelda color palette reference

## When to Reference Each File

| Task | Primary Reference | Secondary Reference |
|------|------------------|--------------------|
| **Creating new component** | COMPONENT_DEVELOPMENT.md | THEME_CONTEXT.md |
| **Implementing dark mode** | THEME_CONTEXT.md | STYLING_CONTEXT.md |
| **Writing component styles** | STYLING_CONTEXT.md | THEME_CONTEXT.md |
| **Choosing colors/themes** | THEME_CONTEXT.md | - |
| **Adding icons to components** | ICONS_CONTEXT.md | - |
| **Writing Storybook docs** | doc-template.md | THEME_CONTEXT.md |
| **Debugging CSS issues** | STYLING_CONTEXT.md | - |
| **Understanding theme system** | THEME_CONTEXT.md | - |