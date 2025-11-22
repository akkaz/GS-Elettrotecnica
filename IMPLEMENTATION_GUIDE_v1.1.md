# 🛠️ Implementation Guide - v1.1

Detailed technical guide for implementing each feature in the v1.1 roadmap.

---

## Week 1: Critical Fixes

### 1. Security - Remove API Key Exposure

**Files to modify:**
- `.env.example` (create)
- `README.md` (update)
- Vercel dashboard (configure)

**Steps:**
1. Create `.env.example`:
```bash
# Email Configuration
RESEND_API_KEY=your_resend_api_key_here
RESEND_TO_EMAIL=info@elettrotecnicags.it
```

2. Update README with environment setup instructions

3. In Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add `RESEND_API_KEY` with new key
   - Add `RESEND_TO_EMAIL`
   - Redeploy

4. Rotate the exposed key at resend.com

**Verification:**
- `.env` is in `.gitignore` ✓
- No secrets in git history
- Production deployment works

---

### 2. Error Boundaries

**Files to create:**
- `src/components/ErrorBoundary.jsx`

**Implementation:**
```jsx
import React from 'react';
import { AlertTriangle } from 'lucide-react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // TODO: Send to error tracking service (Sentry)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
          <div className="text-center max-w-md">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-slate-900 mb-2">
              Qualcosa è andato storto
            </h1>
            <p className="text-slate-600 mb-6">
              Ci scusiamo per l'inconveniente. Ricarica la pagina o torna alla home.
            </p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700"
            >
              Torna alla Home
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

**Update `src/App.jsx`:**
```jsx
import ErrorBoundary from './components/ErrorBoundary';

function App() {
  return (
    <ErrorBoundary>
      <Router>
        {/* existing code */}
      </Router>
    </ErrorBoundary>
  );
}
```

---

### 3. 404 Page

**Files to create:**
- `src/pages/NotFoundPage.jsx`

**Implementation:**
```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-2xl"
      >
        <div className="text-9xl font-bold text-brand-600 mb-4">404</div>
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Pagina non trovata
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-brand-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-brand-700 transition"
          >
            <Home className="w-5 h-5" />
            Torna alla Home
          </Link>
          <Link
            to="/contatti"
            className="inline-flex items-center gap-2 bg-white text-slate-700 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition border border-slate-200"
          >
            Contattaci
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-sm text-slate-500 mb-4">Link utili:</p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link to="/servizi" className="text-brand-600 hover:underline">Servizi</Link>
            <Link to="/chi-siamo" className="text-brand-600 hover:underline">Chi Siamo</Link>
            <Link to="/contatti" className="text-brand-600 hover:underline">Contatti</Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
```

**Update `src/App.jsx`:**
```jsx
import NotFoundPage from './pages/NotFoundPage';

// Add as last route
<Route path="*" element={<NotFoundPage />} />
```

---

### 4. Image Lazy Loading

**Files to create:**
- `src/components/ui/OptimizedImage.jsx`

**Implementation:**
```jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function OptimizedImage({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  aspectRatio = 'auto'
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ aspectRatio }}>
      {/* Blur placeholder */}
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      
      {/* Actual image */}
      <motion.img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      />
      
      {/* Error fallback */}
      {error && (
        <div className="absolute inset-0 bg-slate-100 flex items-center justify-center">
          <span className="text-slate-400 text-sm">Immagine non disponibile</span>
        </div>
      )}
    </div>
  );
}
```

**Usage:** Replace `<img>` tags with `<OptimizedImage>` in all pages.

---

### 5. Code Splitting

**Update `src/App.jsx`:**
```jsx
import React, { Suspense, lazy } from 'react';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const ChiSiamoPage = lazy(() => import('./pages/ChiSiamoPage'));
const ServiziPage = lazy(() => import('./pages/ServiziPage'));
const ContattiPage = lazy(() => import('./pages/ContattiPage'));
const ImpiantiElettriciPage = lazy(() => import('./pages/services/ImpiantiElettriciPage'));
// ... other service pages

function AnimatedRoutes() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        {/* routes */}
      </Routes>
    </Suspense>
  );
}
```

**Create `src/components/LoadingSpinner.jsx`:**
```jsx
import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <motion.div
        className="w-16 h-16 border-4 border-brand-200 border-t-brand-600 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
    </div>
  );
}
```

---

### 6. SEO - robots.txt

**Create `public/robots.txt`:**
```
User-agent: *
Allow: /

Sitemap: https://www.elettrotecnicags.it/sitemap.xml
```

---

### 7. SEO - sitemap.xml

**Create `public/sitemap.xml`:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.elettrotecnicags.it/</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/chi-siamo</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/contatti</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi/impianti-elettrici</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi/automazione-industriale</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi/quadri-elettrici</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi/energie-rinnovabili</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi/revamping</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.elettrotecnicags.it/servizi/servizi-aggiuntivi</loc>
    <lastmod>2024-11-22</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
</urlset>
```

---

### 8. Structured Data

**Create `src/utils/structuredData.js`:**
```js
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "GS Elettrotecnica Automazioni Industriali Srl",
  "url": "https://www.elettrotecnicags.it",
  "logo": "https://www.elettrotecnicags.it/logo.png",
  "description": "Oltre 30 anni di eccellenza nell'impiantistica elettrica e automazione industriale in Valle Camonica",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via delle Cave, 17",
    "addressLocality": "Cividate Camuno",
    "addressRegion": "BS",
    "postalCode": "25040",
    "addressCountry": "IT"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+39-0364-341038",
    "contactType": "customer service",
    "email": "info@elettrotecnicags.it",
    "availableLanguage": ["Italian"]
  },
  "sameAs": [
    // Add social media URLs when available
  ]
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "GS Elettrotecnica",
  "image": "https://www.elettrotecnicags.it/logo.png",
  "@id": "https://www.elettrotecnicags.it",
  "url": "https://www.elettrotecnicags.it",
  "telephone": "+39-0364-341038",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via delle Cave, 17",
    "addressLocality": "Cividate Camuno",
    "postalCode": "25040",
    "addressCountry": "IT"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 45.9333,
    "longitude": 10.2833
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "08:00",
    "closes": "18:00"
  }
};

export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title,
    "provider": {
      "@type": "Organization",
      "name": "GS Elettrotecnica"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Valle Camonica, Brescia, Lombardia"
    },
    "description": service.description
  };
}
```

**Add to pages:**
```jsx
import { Head } from '@unhead/react';
import { organizationSchema, localBusinessSchema } from '../utils/structuredData';

// In component
<Head>
  <script type="application/ld+json">
    {JSON.stringify(organizationSchema)}
  </script>
  <script type="application/ld+json">
    {JSON.stringify(localBusinessSchema)}
  </script>
</Head>
```

---

## Week 2: High Priority

### 9. Skip to Content Link

**Create `src/components/SkipLink.jsx`:**
```jsx
export default function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] bg-brand-600 text-white px-4 py-2 rounded-lg font-semibold"
    >
      Salta al contenuto
    </a>
  );
}
```

**Add to `src/App.jsx`:**
```jsx
<SkipLink />
<Navigation />
<main id="main-content">
  <AnimatedRoutes />
</main>
```

---

### 10. Cookie Consent Banner

**Create `src/components/CookieConsent.jsx`:**
```jsx
import React, { useState, useEffect } from 'react';
import { X, Cookie } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShow(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShow(false);
    // Initialize analytics here
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-[150] bg-white dark:bg-slate-900 border-t-2 border-brand-600 shadow-2xl"
        >
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <Cookie className="w-6 h-6 text-brand-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">
                    Utilizziamo i cookie
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Utilizziamo cookie per migliorare la tua esperienza di navigazione. 
                    Continuando a navigare accetti la nostra{' '}
                    <Link to="/privacy-policy" className="text-brand-600 hover:underline">
                      Privacy Policy
                    </Link>
                    {' '}e{' '}
                    <Link to="/cookie-policy" className="text-brand-600 hover:underline">
                      Cookie Policy
                    </Link>.
                  </p>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button
                  onClick={declineCookies}
                  className="flex-1 md:flex-none px-4 py-2 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition"
                >
                  Rifiuta
                </button>
                <button
                  onClick={acceptCookies}
                  className="flex-1 md:flex-none px-6 py-2 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition font-semibold"
                >
                  Accetta
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
```

---

### 11. Enhanced Form Validation

**Create `src/utils/validation.js`:**
```js
export function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateItalianPhone(phone) {
  // Italian phone format: +39 xxx xxx xxxx or 0xx xxx xxxx
  const re = /^(\+39)?[\s]?([0-9]{2,4})[\s]?([0-9]{6,8})$/;
  return re.test(phone.replace(/\s/g, ''));
}

export function sanitizeInput(input) {
  return input.trim().replace(/<[^>]*>/g, '');
}

export function validateForm(formData) {
  const errors = {};

  if (!formData.nome || formData.nome.length < 2) {
    errors.nome = 'Il nome deve contenere almeno 2 caratteri';
  }

  if (!formData.cognome || formData.cognome.length < 2) {
    errors.cognome = 'Il cognome deve contenere almeno 2 caratteri';
  }

  if (!validateEmail(formData.email)) {
    errors.email = 'Inserisci un indirizzo email valido';
  }

  if (formData.telefono && !validateItalianPhone(formData.telefono)) {
    errors.telefono = 'Inserisci un numero di telefono valido';
  }

  if (!formData.messaggio || formData.messaggio.length < 10) {
    errors.messaggio = 'Il messaggio deve contenere almeno 10 caratteri';
  }

  if (!formData.privacy) {
    errors.privacy = 'Devi accettare la privacy policy';
  }

  return errors;
}
```

---

## Week 3: Medium Priority

### 12. WhatsApp Button

**Create `src/components/WhatsAppButton.jsx`:**
```jsx
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phoneNumber = '393123456789'; // Replace with actual number
  const message = 'Ciao! Vorrei informazioni sui vostri servizi.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1 }}
    >
      <MessageCircle className="w-6 h-6" />
      <span className="sr-only">Contattaci su WhatsApp</span>
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Scrivici su WhatsApp
      </span>
    </motion.a>
  );
}
```

---

### 13. FAQ Page

**Create `src/components/ui/Accordion.jsx`:**
```jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition"
          >
            <span className="font-semibold text-slate-900 dark:text-white pr-4">
              {item.question}
            </span>
            <ChevronDown
              className={`w-5 h-5 text-brand-600 flex-shrink-0 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: 'auto' }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-4 text-slate-600 dark:text-slate-400">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
```

---

## Testing Checklist

### Manual Testing
- [ ] Test all forms with invalid data
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test keyboard navigation
- [ ] Test with screen reader
- [ ] Test slow 3G connection
- [ ] Test error scenarios

### Automated Testing
- [ ] Lighthouse audit (all pages)
- [ ] WAVE accessibility check
- [ ] Google Mobile-Friendly Test
- [ ] PageSpeed Insights
- [ ] Structured Data Testing Tool

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari iOS
- [ ] Chrome Android

---

## Deployment Checklist

- [ ] Update environment variables in Vercel
- [ ] Test production build locally
- [ ] Run lighthouse on production URL
- [ ] Submit sitemap to Google Search Console
- [ ] Test contact form on production
- [ ] Verify analytics tracking
- [ ] Check all external links
- [ ] Verify SSL certificate
- [ ] Test 404 page
- [ ] Check robots.txt is accessible

---

**Last Updated**: 2024-11-22
