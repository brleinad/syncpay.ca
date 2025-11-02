# Deployment Checklist 📋

Use this checklist when deploying your SyncPay landing page.

## Pre-Deployment

### 1. Content Review
- [ ] Review all English copy in `index.html`
- [ ] Review all French copy in `index-fr.html`
- [ ] Update waitlist count (currently "100+" in both versions)
- [ ] Verify all links in footer work
- [ ] Check that email placeholders are appropriate

### 2. Forms Setup
- [ ] Sign up for Formspree (or alternative form service)
- [ ] Get form endpoint ID
- [ ] Update `script.js` line ~129 with your Formspree ID
- [ ] Test form submission on both English and French pages
- [ ] Verify language tracking works (check console logs)

### 3. Analytics Setup (Optional but Recommended)
- [ ] Choose analytics platform (Plausible, Google Analytics, Fathom, etc.)
- [ ] Add tracking code to both `index.html` and `index-fr.html`
- [ ] Set up goals/events for:
  - Email form submissions
  - Waitlist form submissions
  - Language switches
  - FAQ interactions

### 4. SEO Optimization
- [ ] Add favicon (create `favicon.png` or `favicon.ico`)
- [ ] Add Open Graph tags to both HTML files
- [ ] Add Twitter Card tags
- [ ] Update meta descriptions if needed
- [ ] Add hreflang tags (see BILINGUAL_GUIDE.md)
- [ ] Create `robots.txt`
- [ ] Create `sitemap.xml`

### 5. Testing Checklist
- [ ] Test on Chrome/Edge
- [ ] Test on Firefox
- [ ] Test on Safari
- [ ] Test on mobile device (iOS)
- [ ] Test on mobile device (Android)
- [ ] Test all forms (hero + waitlist on both pages)
- [ ] Test FAQ accordion on both pages
- [ ] Test language toggle (EN ↔ FR)
- [ ] Verify all animations work
- [ ] Check responsive design at different screen sizes
- [ ] Test with slow internet connection

## GitHub Pages Deployment

### Step 1: Create Repository
```bash
# Go to https://github.com/new
# Repository name: syncpay.ca (or your preferred name)
# Public repository
# Don't initialize with README (you already have one)
```

### Step 2: Initialize and Push
```bash
cd /Users/danielrb/sandbox/syncpay.ca

# Initialize git
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Bilingual SyncPay landing page

- English version (index.html)
- French version (index-fr.html)
- Responsive design with animations
- Form validation and submission handling
- FAQ accordion
- Language toggle between EN/FR"

# Set main branch
git branch -M main

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/syncpay.ca.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

Your site will be live at:
- **English**: `https://YOUR_USERNAME.github.io/syncpay.ca/`
- **French**: `https://YOUR_USERNAME.github.io/syncpay.ca/index-fr.html`

## Post-Deployment

### 1. Verify Deployment
- [ ] Visit English page
- [ ] Visit French page
- [ ] Test language toggle works
- [ ] Submit test form (both versions)
- [ ] Check browser console for errors
- [ ] Test on mobile device

### 2. Custom Domain (Optional)
If you own `syncpay.ca`:

#### DNS Configuration
Add these A records at your registrar:
```
A    @    185.199.108.153
A    @    185.199.109.153
A    @    185.199.110.153
A    @    185.199.111.153
```

For www subdomain:
```
CNAME    www    YOUR_USERNAME.github.io
```

#### GitHub Configuration
1. Go to Settings → Pages
2. Add custom domain: `syncpay.ca`
3. Wait 24-48 hours for DNS propagation
4. Enable "Enforce HTTPS"

#### Update Links
After custom domain is active, update:
- [ ] hreflang tags in both HTML files
- [ ] Canonical URLs
- [ ] Open Graph URLs

### 3. Set Up Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, StatusCake, etc.)
- [ ] Configure email alerts for downtime
- [ ] Monitor form submissions
- [ ] Track conversion rates

### 4. Marketing Setup
- [ ] Share links on social media
- [ ] Test social media previews (Twitter, LinkedIn, Facebook)
- [ ] Set up email autoresponder for waitlist
- [ ] Create welcome email template (EN + FR versions)

## Optional Enhancements

### Immediate (Post-Launch)
- [ ] Add Google Search Console
- [ ] Submit sitemap to search engines
- [ ] Set up email marketing integration (Mailchimp, ConvertKit)
- [ ] Create thank you page after form submission

### Short-term (Within 1 month)
- [ ] Add testimonials section (when you have them)
- [ ] Create blog section
- [ ] Add video demo/explainer
- [ ] Set up A/B testing for headlines

### Long-term
- [ ] Add live chat support
- [ ] Create demo/sandbox environment
- [ ] Build email drip campaign
- [ ] Add referral program

## Troubleshooting

### Forms not submitting?
1. Check browser console for errors
2. Verify Formspree endpoint is correct
3. Check network tab to see if request is sent
4. Test with different email addresses

### Page not loading?
1. Check GitHub Pages status (Settings → Pages)
2. Clear browser cache (Cmd+Shift+R / Ctrl+Shift+R)
3. Wait a few minutes and try again
4. Check GitHub Actions for build errors

### Language toggle not working?
1. Verify both HTML files are deployed
2. Check file paths are correct
3. Clear browser cache

### Styles not loading?
1. Verify `styles.css` is in the root directory
2. Check file paths in HTML
3. Clear browser cache
4. Check browser console for 404 errors

## Success Metrics to Track

Week 1:
- [ ] Number of page visits
- [ ] Email signup rate
- [ ] Bounce rate
- [ ] EN vs FR traffic ratio

Month 1:
- [ ] Total waitlist signups
- [ ] Traffic sources
- [ ] Most common industry
- [ ] Most common invoice volume
- [ ] Payment type distribution

Ongoing:
- [ ] Conversion rate optimization
- [ ] A/B test results
- [ ] User feedback
- [ ] Social media engagement

## Support Resources

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Formspree Docs**: https://help.formspree.io/
- **Google Search Console**: https://search.google.com/search-console
- **Web.dev**: https://web.dev/measure/ (Performance testing)

---

**Ready to launch? Check off each item and deploy with confidence!** 🚀🇨🇦
