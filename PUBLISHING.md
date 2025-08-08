# 📦 Publishing Guide

Instructions for publishing Zelda UI packages to NPM.

## Prerequisites

1. **NPM Account**: Ensure you're logged in to NPM
   ```bash
   npm whoami
   npm login
   ```

2. **2FA Setup**: NPM requires two-factor authentication for publishing
3. **Build Packages**: Ensure all packages are built
   ```bash
   pnpm build
   ```

## Publishing Commands

### Core Package
```bash
cd packages/core
npm publish --access public --tag alpha --otp=<your-2fa-code>
```

### Icons Package
```bash
cd packages/icons
npm publish --access public --tag alpha --otp=<your-2fa-code>
```

### Theme Package
```bash
cd packages/theme
npm publish --access public --tag alpha --otp=<your-2fa-code>
```

## Verification

After publishing, verify packages are available:

```bash
npm view zelda-ui-core@alpha
npm view zelda-ui-icons@alpha
npm view zelda-ui-theme@alpha
```

## Test Installation

Create a test project and install:

```bash
mkdir test-zelda-ui
cd test-zelda-ui
npm init -y
npm install zelda-ui-core@alpha
```

## Update Documentation

After successful publishing:

1. Update CHANGELOG.md to mark as published
2. Update README badges (they'll show correct version)
3. Redeploy documentation site

## Troubleshooting

- **2FA Issues**: Ensure your authenticator app is synced
- **Permission Errors**: Verify you have publish rights to the package names
- **Build Errors**: Run `pnpm build` to ensure clean builds

## Next Release

For future releases:
- Update version in package.json files
- Run `pnpm build`
- Follow same publishing process
- Use appropriate tags (alpha, beta, latest)