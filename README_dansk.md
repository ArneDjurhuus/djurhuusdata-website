# Djurhuus Data Website

En professionel hjemmeside bygget med React, Vite og Tailwind CSS. Hjemmesiden er fuldt på dansk og inkluderer tilgængelighed features som aria-labels, semantisk HTML og responsivt design.

## 🚀 Funktioner

- **Responsivt design** - Fungerer på alle enheder
- **Tilgængelighed** - WCAG-kompatibel med aria-labels og semantisk HTML
- **SEO-optimeret** - Meta tags og struktureret indhold
- **Performance** - Hurtig indlæsning med Vite
- **Moderne design** - Professionelt udseende med Tailwind CSS

## 📋 Sektioner

- **Hjem** - Hero sektion med velkomstbesked
- **Om mig** - Detaljeret information om baggrund og kompetencer
- **Projekter** - Portfolio af udvalgte projekter
- **Kontakt** - Kontaktformular og kontaktinformation
- **Footer** - Virksomhedsinformation og links

## 🛠️ Tech Stack

- **React 18** - UI bibliotek
- **Vite** - Build tool og development server
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **Responsivt design** - Mobile-first approach

## 📦 Installation

1. **Clone repository:**
   ```bash
   git clone https://github.com/ArneDjurhuus/djurhuusdata-website.git
   cd djurhuusdata-website
   ```

2. **Installer dependencies:**
   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Åbn browser** og naviger til `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build til produktion
- `npm run preview` - Preview production build lokalt
- `npm run lint` - Kør ESLint for at tjekke kode

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navigation.jsx     # Responsive navigation med mobile menu
│   ├── Hero.jsx          # Hero sektion med call-to-action
│   ├── AboutMe.jsx       # Om mig sektion med kompetencer
│   ├── Projects.jsx      # Portfolio med projekter
│   ├── Contact.jsx       # Kontaktformular og info
│   └── Footer.jsx        # Footer med virksomhedsinfo
├── App.jsx               # Main App component
├── main.jsx             # Entry point
└── index.css            # Global styles med Tailwind imports
```

## ♿ Tilgængelighed Features

- **Semantisk HTML** - Korrekt brug af HTML5 elementer
- **ARIA labels** - Beskrivende labels for screen readers
- **Keyboard navigation** - Fuld tilgængelighed via keyboard
- **Focus management** - Synlige focus indicators
- **Alt text** - Beskrivende tekst for billeder
- **Color contrast** - WCAG AA standard
- **Screen reader friendly** - Optimeret for hjælpeteknologi

## 🎨 Customization

### Farver
Rediger Tailwind config (`tailwind.config.js`) for at tilpasse farver:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Dine primære farver
      }
    }
  }
}
```

### Indhold
- **Kontaktinfo**: Opdater i `Contact.jsx` og `Footer.jsx`
- **Projekter**: Rediger projekter array i `Projects.jsx`
- **Om mig**: Opdater indhold i `AboutMe.jsx`
- **Billeder**: Tilføj billeder i `public/` mappen

### SEO
Opdater meta tags i `index.html`:
- Title
- Description
- Keywords
- Open Graph tags

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Deployment

### Build til produktion:
```bash
npm run build
```

### Deploy til Netlify:
1. Forbind GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Deploy til Vercel:
1. Import GitHub repository
2. Vercel detecterer automatisk Vite setup

## 📧 Support

For spørgsmål eller support, kontakt:
- **Email**: arne@djurhuusdata.dk
- **Telefon**: +45 12 34 56 78

## 📄 License

Dette projekt er privat og proprietært.

---

Bygget med ❤️ af Arne Djurhuus
