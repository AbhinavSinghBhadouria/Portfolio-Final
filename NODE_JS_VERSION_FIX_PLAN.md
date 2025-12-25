# Node.js Version Fix Plan

## Problem Analysis
- **Current Issue**: Docker build fails with Node.js 18.20.5
- **Required Version**: Node.js >=20.9.0 (specified in package.json)
- **Error**: "You are using Node.js 18.20.5. For Next.js, Node.js version '>=20.9.0' is required"

## Root Cause
The Docker build process is using an outdated Node.js version instead of the version specified in:
- `package.json`: `"engines": { "node": ">=20.9.0" }`
- `nixpacks.toml`: `node = "20.9.0"`

## Solution Steps

### Step 1: Update nixpacks.toml
- Ensure it explicitly specifies Node.js 20.9.0
- Add build and start phases
- Include environment variables for proper Next.js deployment

### Step 2: Create Dockerfile
- Use official Node.js 20.9.0-alpine base image
- Copy package files and install dependencies
- Run build command
- Configure proper start command for Railway

### Step 3: Update package.json Scripts
- Ensure scripts work correctly for Railway deployment
- Add proper build and start commands
- Update PORT environment variable handling

### Step 4: Test Build Process
- Verify Node.js version in build container
- Test npm run build locally
- Ensure Railway deployment works

## Expected Outcome
- Docker build uses Node.js 20.9.0
- `npm run build` completes successfully
- Railway deployment works without Node.js version errors

## Files to Modify
1. `/Users/abhinavbhadoriya/Documents/Portfolio-Final/nixpacks.toml`
2. `/Users/abhinavbhadoriya/Documents/Portfolio-Final/Dockerfile` (new file)
3. `/Users/abhinavbhadoriya/Documents/Portfolio-Final/package.json` (scripts update if needed)
