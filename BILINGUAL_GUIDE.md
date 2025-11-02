# Guide bilingue / Bilingual Guide 🇨🇦

## English / Anglais

### What You Have

You now have a **fully bilingual landing page** with:

- **English version**: `index.html`
- **French version**: `index-fr.html`
- Shared CSS and JavaScript files
- Language toggle in the header (works via page switching)

### File Structure

```
syncpay.ca/
├── index.html              # English landing page
├── index-fr.html           # French landing page (Page d'accueil française)
├── styles.css              # Shared styles for both languages
├── script.js               # Shared JavaScript for both pages
├── README.md               # Full documentation
├── GETTING_STARTED.md      # Quick start guide
└── BILINGUAL_GUIDE.md      # This file
```

### How Language Switching Works

1. User clicks **EN** or **FR** in the header
2. Browser navigates to the appropriate HTML file:
   - `EN` → `index.html`
   - `FR` → `index-fr.html`
3. The active language is highlighted automatically based on which page is loaded

### Testing Both Versions

```bash
# English version
open index.html

# French version
open index-fr.html

# Or with local server
python -m http.server 8000
# Visit http://localhost:8000/index.html (English)
# Visit http://localhost:8000/index-fr.html (French)
```

### Deployment Notes

Both files will be deployed together to GitHub Pages:

- **English**: `https://yourusername.github.io/syncpay.ca/`
- **French**: `https://yourusername.github.io/syncpay.ca/index-fr.html`

**Tip**: You can set up redirects based on browser language using a small script, or use a custom domain with language detection.

### What's Different Between English and French Versions

| Section | English | French |
|---------|---------|--------|
| Hero Title | "Stop Wasting Hours..." | "Arrêtez de perdre des heures..." |
| CTA Button | "Join the Waitlist" | "Rejoindre la liste d'attente" |
| Form Fields | English labels | French labels (Courriel, etc.) |
| FAQ | 4 questions | 5 questions (added timing question) |
| Footer | "Built in Canada..." | "Conçu au Canada..." |
| Industry Options | Standard + Other | Added "Comptabilité" (Accounting) |
| Email Placeholder | "you@example.com" | "vous@exemple.com" |

### SEO Considerations

Add to each page's `<head>` section:

**English (index.html)**:
```html
<link rel="alternate" hreflang="fr" href="https://syncpay.ca/index-fr.html">
<link rel="alternate" hreflang="en" href="https://syncpay.ca/">
<link rel="alternate" hreflang="x-default" href="https://syncpay.ca/">
```

**French (index-fr.html)**:
```html
<link rel="alternate" hreflang="fr" href="https://syncpay.ca/index-fr.html">
<link rel="alternate" hreflang="en" href="https://syncpay.ca/">
<link rel="alternate" hreflang="x-default" href="https://syncpay.ca/">
```

---

## Français / French

### Ce que vous avez

Vous avez maintenant une **page d'accueil entièrement bilingue** avec :

- **Version anglaise** : `index.html`
- **Version française** : `index-fr.html`
- Fichiers CSS et JavaScript partagés
- Sélecteur de langue dans l'en-tête (fonctionne par changement de page)

### Structure des fichiers

```
syncpay.ca/
├── index.html              # Page d'accueil anglaise
├── index-fr.html           # Page d'accueil française
├── styles.css              # Styles partagés pour les deux langues
├── script.js               # JavaScript partagé pour les deux pages
├── README.md               # Documentation complète
├── GETTING_STARTED.md      # Guide de démarrage rapide
└── BILINGUAL_GUIDE.md      # Ce fichier
```

### Comment fonctionne le changement de langue

1. L'utilisateur clique sur **EN** ou **FR** dans l'en-tête
2. Le navigateur navigue vers le fichier HTML approprié :
   - `EN` → `index.html`
   - `FR` → `index-fr.html`
3. La langue active est mise en surbrillance automatiquement selon la page chargée

### Tester les deux versions

```bash
# Version anglaise
open index.html

# Version française
open index-fr.html

# Ou avec un serveur local
python -m http.server 8000
# Visitez http://localhost:8000/index.html (Anglais)
# Visitez http://localhost:8000/index-fr.html (Français)
```

### Notes de déploiement

Les deux fichiers seront déployés ensemble sur GitHub Pages :

- **Anglais** : `https://votreusername.github.io/syncpay.ca/`
- **Français** : `https://votreusername.github.io/syncpay.ca/index-fr.html`

**Astuce** : Vous pouvez configurer des redirections basées sur la langue du navigateur avec un petit script, ou utiliser un domaine personnalisé avec détection de langue.

### Différences entre les versions anglaise et française

| Section | Anglais | Français |
|---------|---------|----------|
| Titre héros | "Stop Wasting Hours..." | "Arrêtez de perdre des heures..." |
| Bouton CTA | "Join the Waitlist" | "Rejoindre la liste d'attente" |
| Champs de formulaire | Étiquettes anglaises | Étiquettes françaises (Courriel, etc.) |
| FAQ | 4 questions | 5 questions (question sur le temps ajoutée) |
| Pied de page | "Built in Canada..." | "Conçu au Canada..." |
| Options d'industrie | Standard + Autre | Ajout de "Comptabilité" |
| Placeholder courriel | "you@example.com" | "vous@exemple.com" |

### Considérations SEO

Ajoutez dans la section `<head>` de chaque page :

**Anglais (index.html)** :
```html
<link rel="alternate" hreflang="fr" href="https://syncpay.ca/index-fr.html">
<link rel="alternate" hreflang="en" href="https://syncpay.ca/">
<link rel="alternate" hreflang="x-default" href="https://syncpay.ca/">
```

**Français (index-fr.html)** :
```html
<link rel="alternate" hreflang="fr" href="https://syncpay.ca/index-fr.html">
<link rel="alternate" hreflang="en" href="https://syncpay.ca/">
<link rel="alternate" hreflang="x-default" href="https://syncpay.ca/">
```

---

## Advanced: Automatic Language Detection

If you want to automatically redirect users based on their browser language:

### Option 1: JavaScript Detection (Client-side)

Create a new `redirect.js` file and add to the homepage:

```javascript
// Only run on the main page
if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
    const userLang = navigator.language || navigator.userLanguage;

    // Check if French
    if (userLang.startsWith('fr')) {
        // Only redirect if not already on French page
        window.location.href = '/index-fr.html';
    }
}
```

### Option 2: Server-side Detection (If using custom server)

With Node.js/Express:

```javascript
app.get('/', (req, res) => {
    const acceptLanguage = req.headers['accept-language'];
    if (acceptLanguage && acceptLanguage.includes('fr')) {
        res.redirect('/index-fr.html');
    } else {
        res.sendFile('index.html');
    }
});
```

---

## Form Submission Notes

Both forms submit to the same backend. The form includes a language indicator:

- Forms add `language: 'en'` or `language: 'fr'` to submissions
- You can segment your waitlist by language
- Send follow-up emails in the appropriate language

---

**Questions?** Check the main README.md or GETTING_STARTED.md files.
