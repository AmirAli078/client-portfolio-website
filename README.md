# ⚖️ Lawyer Portfolio Website

Ek professional aur responsive portfolio website, jo lawyers aur law firms ke liye banayi gayi hai. Is mein practice areas, case highlights, certificates, testimonials, FAQs aur WhatsApp consultation form shamil hain.

Yeh project **HTML, CSS aur JavaScript** mein hai. Koi framework ya backend zaroori nahi, is liye kisi bhi hosting par asaani se chalta hai.

## ✨ Features

- Hero section ke saath consultation aur WhatsApp buttons
- Animated statistics counter (cases, experience, clients)
- About section aur practice areas (Family, Criminal, Property, Corporate, Civil, Banking)
- Case highlights aur services
- Certificates gallery (click karne par bari tasveer khulti hai)
- Client testimonials aur FAQs (accordion)
- Consultation form: submit karne par message seedha WhatsApp par khulta hai
- Contact section: office address, phone, email, timings aur map
- Social links: WhatsApp, Facebook, Instagram, LinkedIn
- Floating WhatsApp button
- Mobile friendly design

## 🛠️ Tech Stack

- HTML5
- CSS3 (CSS variables, Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Cormorant Garamond, Mulish)

## 📁 Project Structure

```
lawyer-portfolio/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── images/
│   ├── profile.svg
│   ├── favicon.svg
│   ├── cert-llb.svg
│   ├── cert-barcouncil.svg
│   ├── cert-training.svg
│   ├── cert-award.svg
│   └── case-1.svg ... case-3.svg
└── README.md
```

## 🚀 Run Karne Ka Tareeqa

**Option 1: IntelliJ IDEA**
1. Repository clone karein ya zip download karke extract karein
2. IntelliJ mein `File > Open` se folder select karein
3. `index.html` par right-click karein, phir `Open in > Browser`

**Option 2: Browser mein seedha**
1. Project download karein
2. `index.html` ko double-click karke browser mein kholein

**Option 3: Git se clone**
```bash
git clone https://github.com/your-username/lawyer-portfolio.git
cd lawyer-portfolio
```

## ✏️ Customize Kaise Karein

| Kya badalna hai | Kahan badalna hai |
|---|---|
| Naam, text, phone, email | `index.html` |
| WhatsApp number | `js/script.js` (`WHATSAPP_NUMBER`) aur `index.html` mein `923001234567` replace karein |
| Facebook / Instagram / LinkedIn | `index.html` mein `yourpage` aur `yourprofile` replace karein |
| Profile photo | `images/profile.svg` ko apni photo se replace karein |
| Certificates | `images/cert-*.svg` ko asli scans se replace karein |
| Colors aur fonts | `css/style.css` ke top par `:root` variables |

> Note: Agar `.jpg` ya `.png` images use karein to `index.html` mein image ka path bhi update karein.

## 🌐 Deploy Karna (Free)

**GitHub Pages**
1. Repository ki `Settings > Pages` mein jayein
2. Source mein `main` branch aur `/ (root)` chunein
3. Save karein. Kuch der mein site live ho jayegi

Aap **Netlify** ya **Vercel** par bhi folder drag and drop karke deploy kar sakte hain.

## 📌 Note

Is project mein maujood naam, phone number, certificates aur images **dummy data** hain. Live karne se pehle client ki asli maloomat se replace kar lein.

## 📄 License

Yeh project personal aur commercial dono tarah ke kaam ke liye use kiya ja sakta hai.

---

Made with ❤️ for legal professionals
