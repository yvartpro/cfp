# GitHub Pages Deployment Guide

This project is configured to be deployed on GitHub Pages with the base path `/cfp`.

## Configuration

The application automatically detects whether it's running locally or on GitHub Pages:

- **Local Development**: Uses base path `/`
- **GitHub Pages**: Uses base path `/cfp`

## Deployment Steps

### 1. Push to GitHub

```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to main branch
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings**
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

### 3. Access Your Site

Your site will be available at:
```
https://YOUR_USERNAME.github.io/cfp
```

## How It Works

### Base Path Handling

The application uses a configuration file (`src/config.js`) that automatically sets the base path:

```javascript
export const BASE_PATH = window.location.hostname === 'localhost' 
  ? '' 
  : '/cfp';
```

### SPA Routing on GitHub Pages

GitHub Pages doesn't natively support client-side routing. We've implemented a workaround:

1. **404.html**: Catches all non-existent routes and redirects to index.html with the path as a query parameter
2. **index.html**: Reads the query parameter and restores the correct route
3. **.nojekyll**: Prevents Jekyll processing which can interfere with files starting with underscore

### Router Updates

The router (`src/core/router.js`) has been updated to:
- Strip the base path when matching routes
- Add the base path when navigating to new routes
- Handle both local and production environments seamlessly

## Testing Locally

To test the production configuration locally:

```bash
# Serve the application
npx serve .

# Visit http://localhost:3000
# The app will use base path '/' for local development
```

## Troubleshooting

### Routes not working on GitHub Pages

1. Make sure `.nojekyll` file exists in the root
2. Verify `404.html` is present
3. Check that GitHub Pages is enabled in repository settings
4. Wait a few minutes after pushing - GitHub Pages can take time to update

### Assets not loading

1. Check that all asset paths are relative (not starting with `/`)
2. The `<base>` tag in index.html handles path resolution
3. Verify the base path in `src/config.js` matches your repository structure

### API calls failing

The API base URL is configured in `src/config.js`:
```javascript
export const API_BASE_URL = 'https://capbio.bi/cfp/api';
```

Update this if your API endpoint changes.

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file in the root with your domain name
2. Update `src/config.js` to handle your custom domain:

```javascript
export const BASE_PATH = window.location.hostname === 'yourdomain.com' 
  ? '' 
  : '/cfp';
```

## Files Modified for GitHub Pages

- `src/config.js` - Base path and API configuration
- `src/core/router.js` - Router with base path support
- `src/core/api.js` - API client using centralized config
- `index.html` - Dynamic base tag and redirect handler
- `404.html` - SPA redirect for GitHub Pages
- `.nojekyll` - Disable Jekyll processing
