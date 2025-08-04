# Level up Love

En modern dejtingsida byggd med ren HTML, CSS och JavaScript. Sidan är optimerad för deployment på Vercel.

## 🚀 Live Demo

[Din webbsida kommer att vara tillgänglig här efter deployment]

## 📋 Funktioner

- **Responsiv design** - Fungerar perfekt på alla enheter
- **Modern UI** - Gradient bakgrund och glassmorphism effekter
- **Formulärvalidering** - Validerar användarinput på klientsidan
- **Smooth animations** - Subtila hover-effekter och transitions
- **Navigation** - Redo för framtida sidor (FAQ, Register, About us)

## 🛠️ Teknologier

- HTML5
- CSS3 (Flexbox, Grid, CSS Variables)
- Vanilla JavaScript (ES6+)
- Responsive Design

## 📁 Projektstruktur

```
level-up-love/
├── index.html          # Huvudsida
├── style.css           # All styling
├── script.js           # JavaScript funktionalitet
└── README.md          # Denna fil
```

## 🚀 Deployment

Denna sida är redo för deployment på Vercel:

1. Pusha koden till GitHub
2. Logga in på [Vercel](https://vercel.com)
3. Importera ditt GitHub repository
4. Vercel kommer automatiskt att känna igen det som en statisk sida
5. Klicka "Deploy"

### Vercel Inställningar

Inga speciella build-kommandon behövs eftersom detta är en statisk sida. Vercel kommer automatiskt att:
- Servera `index.html` som startsida
- Hantera alla statiska assets
- Tillhandahålla HTTPS automatiskt
- Optimera för snabb laddning

## 🔧 Lokal Utveckling

För att köra lokalt:

1. Klona repositoryt
```bash
git clone [your-repo-url]
cd level-up-love
```

2. Öppna `index.html` i din webbläsare eller använd en lokal server:
```bash
# Med Python
python -m http.server 8000

# Med Node.js (om du har http-server installerat)
npx http-server

# Med Live Server i VS Code
# Installera Live Server extension och högerklicka på index.html
```

## 📝 Formulärfält

Registreringsformuläret innehåller:
- LinkedIn profil (URL validation)
- Namn (obligatoriskt)
- Telefonnummer (svensk validering)
- Ålder (18-100 år)
- Kön man söker (dropdown)
- Längd i cm (100-250 cm)

## 🎨 Design Features

- **Gradient bakgrund** - Vacker lila/blå gradient
- **Glassmorphism** - Genomskinliga element med blur-effekt
- **Hover-animationer** - Smooth transitions på alla interaktiva element
- **Responsive navigation** - Anpassar sig för mobila enheter
- **Form feedback** - Visuell feedback för formulärvalidering

## 🔮 Framtida Utveckling

- Backend integration för formulärhantering
- Användarautentisering
- Matchningsalgoritm
- Chat-funktionalitet
- Profilsidor
- FAQ, Register och About us sidor

## 🤝 Bidrag

Denna sida är under aktiv utveckling. Suggestions och förbättringar är välkomna!

## 📄 Licens

MIT License - se LICENSE fil för detaljer.

---

Byggd med ❤️ för att hjälpa människor hitta kärlek.
