# Getting Started with SyncPay Landing Page

## What You Have

A complete, modern landing page with:
- **Hero section** with email capture and trust badges
- **Problem section** with 4 pain points + customer testimonial
- **How it works** with 3-step process
- **Feature callouts** (4 checkmarks)
- **Pricing teaser** section
- **FAQ accordion** (4 questions)
- **Waitlist form** with all requested fields
- **Bilingual footer**
- **Mobile-responsive design**
- **Smooth scroll animations**

## Quick Start (Local Testing)

Open the page in your browser:

```bash
# Option 1: Direct open
open index.html

# Option 2: Local server (recommended)
python -m http.server 8000
# Then visit http://localhost:8000
```

## Deploy to GitHub Pages (5 minutes)

### Step 1: Create GitHub Repository

Go to https://github.com/new and create a new repository named `syncpay.ca`

### Step 2: Push Your Code

```bash
cd /Users/danielrb/sandbox/syncpay.ca
git init
git add .
git commit -m "Initial commit: SyncPay landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/syncpay.ca.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Select **/ (root)** folder
5. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/syncpay.ca/`

## Next Steps

### 1. Integrate Form Submissions (Formspree)

1. Sign up at https://formspree.io/
2. Create a new form
3. Get your form ID
4. Update `script.js` around line 140:
   - Uncomment the fetch code
   - Replace `YOUR_FORM_ID` with your actual ID

### 2. Add Analytics

Add before `</body>` in `index.html`:

```html
<!-- Plausible Analytics (Privacy-friendly) -->
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>
```

Or use Google Analytics, Fathom, etc.

### 3. Custom Domain (Optional)

If you own `syncpay.ca`:

1. In GitHub Settings → Pages, add custom domain: `syncpay.ca`
2. Configure DNS with your registrar:
   ```
   A Record → 185.199.108.153
   A Record → 185.199.109.153
   A Record → 185.199.110.153
   A Record → 185.199.111.153
   ```
3. Wait 24-48 hours for propagation
4. Enable HTTPS in GitHub Pages settings

### 4. SEO Enhancements

Add to `<head>` in `index.html`:

```html
<!-- Open Graph for social sharing -->
<meta property="og:title" content="SyncPay - Stop Wasting Hours on Payment Reconciliation">
<meta property="og:description" content="Automatically reconcile bank payments with Harvest invoices">
<meta property="og:image" content="https://syncpay.ca/og-image.png">
<meta property="og:url" content="https://syncpay.ca">
<meta name="twitter:card" content="summary_large_image">

<!-- Favicon -->
<link rel="icon" type="image/png" href="/favicon.png">
```

## Customization Guide

### Change Colors

Edit `styles.css` lines 12-14:

```css
--primary-color: #2563eb;      /* Your brand blue */
--primary-dark: #1e40af;       /* Darker for hovers */
--primary-light: #3b82f6;      /* Lighter shade */
```

### Update Copy

All text is in `index.html` - search for sections and update directly.

### Adjust Waitlist Count

Line 188 in `index.html`: Change "100+" to your actual number

## Testing Checklist

- [ ] Open on desktop browser
- [ ] Open on mobile device (or use browser dev tools)
- [ ] Test email form in hero section
- [ ] Test full waitlist form
- [ ] Click through FAQ accordion
- [ ] Test language toggle (shows toast for now)
- [ ] Check all links in footer
- [ ] Verify scroll animations work

## Support

Questions? Check:
- `README.md` - Comprehensive documentation
- GitHub Issues (if you encounter bugs)
- Formspree docs: https://help.formspree.io/

## Files Overview

```
syncpay.ca/
├── index.html          # Main page structure
├── styles.css          # All styling
├── script.js           # Forms + interactions
├── README.md           # Full documentation
├── GETTING_STARTED.md  # This file
└── .gitignore          # Git ignore rules
```

---

**Ready to launch!** 🚀🇨🇦
