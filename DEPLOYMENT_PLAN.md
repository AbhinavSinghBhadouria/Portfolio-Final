# Portfolio Deployment Plan - Railway Migration

## Issue Analysis
- **Root Cause**: Two conflicting `vercel.json` files with different version numbers
  - Root: `"version": 2`
  - Nested: `"version": 1` ← **This causes the error**
- **Error**: "Invalid request: `version` should be >= 2"

## Solution Plan

### Phase 1: Fix Version Conflict
1. Remove the conflicting nested `vercel.json` file
2. Keep only the root `vercel.json` with proper configuration
3. Update build commands to work from the correct directory

### Phase 2: Railway Deployment Preparation
1. Create `railway.json` configuration
2. Update `package.json` scripts for Railway
3. Create `Dockerfile` for Railway (optional but recommended)
4. Update environment variables setup
5. Test local build process

### Phase 3: Deployment
1. Remove Vercel-specific configurations
2. Deploy to Railway
3. Configure environment variables on Railway
4. Test the deployed application

## Current Project Structure
```
Portfolio-Final/
├── vercel.json (root - keep, fix version)
├── portfolio-website/ (Next.js app)
│   ├── vercel.json (remove - conflicts)
│   ├── package.json
│   ├── app/
│   └── ...
└── DEPLOYMENT_PLAN.md (this file)
```

## Files to Modify
1. **Remove**: `/portfolio-website/vercel.json`
2. **Update**: `/vercel.json` (if keeping Vercel as backup)
3. **Create**: `/railway.json`
4. **Update**: `/portfolio-website/package.json`
5. **Create**: `/portfolio-website/Dockerfile` (optional)

## Next Steps
- Fix version conflict immediately
- Create Railway configuration
- Test build process
- Deploy to Railway
