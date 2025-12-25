# Docker Multi-Stage Build Fix Plan

## Problem Analysis
- **Current Issue**: Dockerfile uses `npm ci --only=production` which excludes dev dependencies
- **Root Cause**: TypeScript (dev dependency) is needed for building `next.config.ts`
- **Error**: "Cannot find module 'typescript'" during build process

## Solution: Multi-Stage Docker Build

### Stage 1 (Builder Stage)
- Use Node.js 20.9.0-alpine base image
- Install ALL dependencies (including dev dependencies)
- Build the Next.js application
- Generate optimized production build

### Stage 2 (Production Stage)  
- Use lightweight Node.js 20.9.0-alpine base image
- Copy only production files from Stage 1
- Set up runtime environment
- Start the application

## Implementation Steps

### 1. Create Multi-Stage Dockerfile
- Replace current single-stage Dockerfile
- Implement proper stage separation
- Optimize layer caching

### 2. Add .dockerignore File
- Prevent unnecessary files from being copied
- Reduce build context size
- Improve build performance

### 3. Update Package.json Scripts (if needed)
- Ensure build script works in Docker environment
- Verify start script for production

### 4. Test Locally
- Build Docker image locally
- Verify build process completes successfully
- Test container functionality

### 5. Deploy and Monitor
- Push changes to GitHub
- Monitor Railway deployment logs
- Verify successful deployment

## Expected Benefits
- ✅ Fixes TypeScript dependency issue
- ✅ Reduces final image size
- ✅ Follows Docker best practices
- ✅ Improves build cache efficiency
- ✅ Separates build and runtime concerns

## Timeline
- **Implementation**: 10-15 minutes
- **Testing**: 5-10 minutes  
- **Deployment**: 10-15 minutes
- **Total**: ~30-40 minutes
