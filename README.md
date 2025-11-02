# SyncPay Landing Page 🇨🇦

A modern, conversion-focused landing page for SyncPay - automated payment reconciliation software for Canadian freelancers and consultants using Harvest.

## Features

- **Modern Design**: Clean, professional design with a trustworthy blue color scheme
- **Fully Responsive**: Optimized for all devices from mobile to desktop
- **Smooth Animations**: Scroll-triggered fade-in animations for engaging UX
- **Interactive Components**:
  - FAQ accordion
  - Language toggle (EN/FR framework ready)
  - Dual email capture forms (hero + detailed waitlist)
- **Form Validation**: Client-side validation with user-friendly error messages
- **No Dependencies**: Pure HTML, CSS, and vanilla JavaScript - no frameworks needed
- **GitHub Pages Ready**: Zero-config deployment

## Tech Stack

- **HTML5**: Semantic markup for SEO and accessibility
- **CSS3**: Modern CSS with CSS Grid, Flexbox, and custom properties
- **Vanilla JavaScript**: ES6+ for form handling and interactions
- **Google Fonts**: Inter font family for professional typography

## Project Structure

```
syncpay.ca/
├── index.html          # Main HTML file with semantic structure
├── styles.css          # All styling with responsive design
├── script.js           # Interactive functionality and form handling
└── README.md           # This file
```

## Quick Start

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/syncpay.ca.git
   cd syncpay.ca
   ```

2. Open `index.html` in your browser:
   ```bash
   # macOS
   open index.html

   # Linux
   xdg-open index.html

   # Windows
   start index.html
   ```

   Or use a local server (recommended):
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (npx)
   npx serve
   ```

   Then visit `http://localhost:8000`

## GitHub Pages Deployment

### Method 1: Deploy from Main Branch (Recommended)

1. **Create a new GitHub repository**:
   - Go to [GitHub](https://github.com/new)
   - Name it `syncpay.ca` (or your preferred name)
   - Keep it public
   - Don't initialize with README (we already have one)

2. **Push your code**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SyncPay landing page"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/syncpay.ca.git
   git push -u origin main
   ```

3. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (in the sidebar)
   - Under "Source", select **main** branch
   - Select **/ (root)** as the folder
   - Click **Save**

4. **Access your site**:
   - Your site will be live at: `https://YOUR_USERNAME.github.io/syncpay.ca/`
   - It may take 1-2 minutes for the initial deployment

### Method 2: Deploy from gh-pages Branch

1. Create and push to a `gh-pages` branch:
   ```bash
   git checkout -b gh-pages
   git push -u origin gh-pages
   ```

2. In GitHub Settings → Pages, select `gh-pages` branch instead

### Using a Custom Domain

1. **Add your custom domain**:
   - In Settings → Pages, enter your custom domain (e.g., `syncpay.ca`)
   - Click **Save**

2. **Configure DNS**:

   For an apex domain (`syncpay.ca`):
   ```
   A Record: 185.199.108.153
   A Record: 185.199.109.153
   A Record: 185.199.110.153
   A Record: 185.199.111.153
   ```

   For a subdomain (`www.syncpay.ca`):
   ```
   CNAME Record: YOUR_USERNAME.github.io
   ```

3. **Add CNAME file** (GitHub will do this automatically, but you can also do it manually):
   ```bash
   echo "syncpay.ca" > CNAME
   git add CNAME
   git commit -m "Add custom domain"
   git push
   ```

4. **Enable HTTPS**:
   - Wait for DNS to propagate (can take up to 24 hours)
   - In Settings → Pages, check "Enforce HTTPS"

## Form Integration

### Current Setup

Forms currently log submissions to the browser console. To collect real submissions:

### Option 1: Formspree (Recommended for MVP)

1. Sign up at [Formspree.io](https://formspree.io/)
2. Create a new form and get your form ID
3. Update `script.js`:
   ```javascript
   // Find this section around line 140 and uncomment:
   const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
       method: 'POST',
       body: formData,
       headers: {
           'Accept': 'application/json'
       }
   });
   ```
4. Replace `YOUR_FORM_ID` with your actual Formspree form ID

### Option 2: Google Sheets (Free)

1. Use [SheetDB](https://sheetdb.io/) or [Google Apps Script](https://developers.google.com/apps-script)
2. Update the fetch URL in `script.js`

### Option 3: Your Own Backend

Update the form submission endpoints in `script.js` to point to your API.

## Customization Guide

### Colors

Edit CSS variables in `styles.css` (lines 15-20):

```css
:root {
    --primary-color: #2563eb;      /* Main blue */
    --primary-dark: #1e40af;       /* Darker blue for hovers */
    --primary-light: #3b82f6;      /* Lighter blue */
    /* ... */
}
```

### Copy/Content

All text content is in `index.html`. Update the following sections:
- Hero title and subtitle (lines 32-34)
- Problem cards (lines 43-62)
- How it works steps (lines 71-89)
- Features (lines 98-133)
- FAQ questions and answers (lines 142-178)

### Fonts

To change the font, update the Google Fonts link in `index.html` (line 9) and the CSS variable in `styles.css`:

```css
--font-family: 'Your-Font-Name', sans-serif;
```

### Adding Analytics

Add your analytics script before the closing `</body>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Or use Plausible, Fathom, or other privacy-focused alternatives.

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 12+)
- Chrome Mobile (Android 8+)

## Performance

- **Lighthouse Score Target**: 90+ across all metrics
- **No external dependencies**: Except Google Fonts
- **Optimized animations**: Using CSS transforms for 60fps
- **Lazy loading ready**: Infrastructure in place for images

## SEO Checklist

- [x] Semantic HTML5 elements
- [x] Meta description
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [ ] Add Open Graph tags for social sharing
- [ ] Add Twitter Card tags
- [ ] Create `sitemap.xml`
- [ ] Add `robots.txt`
- [ ] Add favicon

### Adding Open Graph Tags

Add to `<head>` in `index.html`:

```html
<meta property="og:title" content="SyncPay - Automated Payment Reconciliation">
<meta property="og:description" content="Stop wasting hours matching payments to Harvest invoices">
<meta property="og:image" content="https://syncpay.ca/og-image.png">
<meta property="og:url" content="https://syncpay.ca">
<meta name="twitter:card" content="summary_large_image">
```

## Accessibility

- Semantic HTML for screen readers
- Proper ARIA labels where needed
- Keyboard navigation support
- Sufficient color contrast ratios
- Focus states on interactive elements

## Future Enhancements

- [ ] Add French translations (framework already in place)
- [ ] Implement actual language switching
- [ ] Add testimonials section
- [ ] Add pricing tiers page
- [ ] Integrate with email marketing platform (Mailchimp, ConvertKit)
- [ ] A/B testing setup
- [ ] Add blog section
- [ ] Create terms of service and privacy policy pages

## Troubleshooting

### GitHub Pages not updating?

1. Check GitHub Actions tab for build errors
2. Hard refresh your browser (Ctrl+Shift+R or Cmd+Shift+R)
3. Clear GitHub Pages cache by pushing a new commit
4. Verify your source branch is correct in Settings

### Forms not submitting?

1. Check browser console for errors (F12)
2. Verify Formspree endpoint is correct
3. Check CORS settings if using custom backend

### Custom domain not working?

1. Wait 24-48 hours for DNS propagation
2. Verify DNS records with `dig syncpay.ca` or `nslookup syncpay.ca`
3. Check GitHub Pages settings show "DNS check successful"

## Contributing

Found a bug or want to suggest an improvement? Please open an issue!

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

Questions? Reach out at hello@syncpay.ca

---

**Built with ❤️ in Canada 🇨🇦**
