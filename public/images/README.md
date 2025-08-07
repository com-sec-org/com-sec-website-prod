# Com-Sec Website Image Management

## Image Organization Structure

```
public/images/
├── logo/
│   ├── com-sec-logo.svg          # Main logo (vector)
│   ├── com-sec-logo.png          # Main logo (PNG)
│   └── com-sec-favicon.ico       # Favicon
├── team/
│   ├── farbod-fakhrai.webp       # Team member photos
│   ├── bojan-trifunovic.webp
│   ├── win-raguini.webp
│   ├── jayush-chawla.webp
│   ├── christian-manala.webp
│   ├── manoj-kumar.webp
│   ├── banu-priya.webp
│   └── samuel-soto.webp
├── blog/
│   ├── iso-27001-guide.jpg       # Blog post images
│   ├── soc2-small-companies.jpg
│   ├── pentesting-comparison.jpg
│   └── compliance-overview.jpg
├── services/
│   ├── soc-support.jpg           # Service page images
│   ├── penetration-testing.jpg
│   ├── cloud-security.jpg
│   └── compliance-audit.jpg
├── frameworks/
│   ├── soc2-framework.jpg        # Framework page images
│   ├── iso27001-framework.jpg
│   ├── hipaa-framework.jpg
│   └── pci-dss-framework.jpg
├── partners/
│   ├── vanta-logo.svg            # Partner logos
│   ├── drata-logo.svg
│   ├── sprinto-logo.svg
│   └── prescient-logo.svg
└── general/
    ├── hero-background.jpg       # General website images
    ├── contact-team.jpg
    └── about-office.jpg
```

## Current Image Sources & Migration Plan

### 1. STOCK PHOTOS (Currently from Pexels.com)

**Status**: ✅ FREE TO USE - No licensing issues
**Recommendation**: Can keep using Pexels URLs OR download locally

**Pexels Images Currently Used:**

- Blog post images: ~20 images
- Service page images: ~8 images
- Framework page images: ~8 images
- Contact page images: ~2 images

### 2. LOGO & BRANDING (Currently from Builder.io CDN)

**Status**: ⚠️ NEEDS MIGRATION for client independence
**Action Required**: Download and save locally

### 3. TEAM PHOTOS (Currently placeholders)

**Status**: 📸 NEEDS ACTUAL PHOTOS
**Action Required**: Client to provide team photos

## Hosting Options for Client

### Option 1: Local Hosting (Recommended)

- Store all images in `public/images/` folder
- Images served from client's own domain
- Complete control and independence
- Faster loading (same server)

### Option 2: CDN Solution

- AWS CloudFront + S3
- Cloudflare Images
- Vercel/Netlify built-in CDN
- Better global performance

### Option 3: Image Management Service

- Cloudinary (paid)
- ImageKit (paid)
- Automatic optimization and resizing

## Migration Steps

1. **Download all Pexels images** to local folders
2. **Save Com-Sec logo** locally from Builder.io
3. **Update all image paths** in components
4. **Add team member photos** when provided
5. **Optimize images** for web (WebP format)

## File Naming Convention

- Use kebab-case: `manoj-kumar.webp`
- Include descriptive names: `soc2-compliance-guide.jpg`
- Use appropriate extensions: `.webp` for photos, `.svg` for logos
- Keep file sizes under 500KB for photos

## Legal Considerations

✅ **Pexels Images**: Free for commercial use, no attribution required
✅ **Custom Logo**: Owned by Com-Sec
❌ **Stock Photos**: Avoid Getty Images, Shutterstock without license
✅ **Team Photos**: Owned by company (with employee consent)
