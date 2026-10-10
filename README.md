# Sarvasetty Revanth Kumar — Personal Portfolio

**Live site:** https://sarvasetty-revanth-kumar-portfolio.vercel.app/  
**GitHub:** https://github.com/Revanth6699  
**LinkedIn:** https://www.linkedin.com/in/revanth-kumar-sarvasetty-8168772b8/

A recruiter-facing portfolio highlighting my work across machine learning, data analytics, financial time-series modelling, and backend systems—along with student leadership and event coordination experience.

## At a glance

- **Education:** B.Tech, Computer Science and Engineering (Data Science), Mohan Babu University, 2022–2026
- **CGPA:** 8.15 / 10
- **Focus areas:** Machine Learning Engineering, Data Science, Data Analytics, Software Engineering, Backend Engineering, and financial-risk analytics
- **Languages and data:** Python, SQL, NumPy, Pandas, SciPy
- **ML / modelling:** Scikit-learn, XGBoost, PyTorch, Transformers / RoBERTa, EWMA, GJR-GARCH, HMM, VaR and Expected Shortfall
- **Application stack:** FastAPI, PostgreSQL, Redpanda, WebSockets, Docker, React, Streamlit, Git and GitHub

## Featured work

### Adaptive Volatility Forecasting, Tail-Risk & Portfolio Decision Engine (AVF-TRPDE)
A financial time-series project combining EWMA, GJR-GARCH, HMM and regime-aware XGBoost for volatility and regime analysis. It includes VaR / Expected Shortfall, Kupiec and Christoffersen backtesting, stress testing and risk-targeted portfolio evaluation.

[Source code](https://github.com/Revanth6699/AVF-TRPDE)

### Multimodal Cyberbullying Detection
A content-classification workflow for text, image, audio and video inputs. The implementation brings together a fine-tuned RoBERTa model, media extraction and speech-to-text processing, with an application interface for inference.

[Source code](https://github.com/Revanth6699/Multimodal-Cyberbullying-Detection-Over-Social-Media-Platforms)

### Real-Time Trade Settlement Risk Monitoring
A streaming-oriented monitoring platform for settlement states and risk indicators, using APIs, a database, event streaming and live dashboard updates.

[Source code](https://github.com/Revanth6699/Real-Time-Trade-Settlement-Risk-Monitoring-System)

### Idempotent Payment Processing & Reconciliation
A payment workflow designed around idempotent requests, transaction states and reconciliation, making repeated requests safer to process and easier to check.

[Source code](https://github.com/Revanth6699/idempotent-payment-engine)

More projects: [github.com/Revanth6699](https://github.com/Revanth6699)

## Leadership and campus contributions

### Technical Association of Information Technology (TAIT) — Data Science Department
- **Coordinator (2024):** Helped conduct technical and non-technical events with guidance from seniors and faculty; worked with student teams and participants.
- **Social Media Coordinator (2024–2025):** Managed the club's social media page, captured event moments, supported documentation and helped promote activities across departments.
- **Secretary (2025–2026):** Guided junior coordinators, supported communication between students, seniors and faculty, and helped maintain continuity across technical and non-technical events.

### Kalakshetra Committee — Mohan Mantra (2024)
Worked as a core committee member for Mohan Babu University's major techno-cultural event, supporting a campus-wide programme.

## What this portfolio includes

- Featured projects with direct repository links
- Technical skills grouped by how they're used
- A visual timeline of TAIT leadership progression
- Campus-event contribution and an event photo
- Education and interests
- Separate Machine Learning / Data and Software Engineering resume options
- Email, phone, LinkedIn and GitHub links
- Responsive layout, scroll progress, reduced-motion support and subtle hover/reveal interactions

## Run locally

Requirements: Node.js and npm.

```bash
npm install
npm run dev
```

Open the local URL Vite prints in the terminal.

## Production build

```bash
npm run build
npm run preview
```

Vite writes the production site to `dist/`. Resume PDFs are kept in `public/resume/`, so Vite copies them to `dist/resume/` during the production build.

## Project structure

```text
revanth_portfolio/
├── index.html
├── styles.css
├── script.js
├── package.json
├── package-lock.json
├── vite.config.js
├── public/
│   └── resume/
│       ├── Sarvasetty_Revanth_Kumar_Machine_Learning_Resume.pdf
│       └── Sarvasetty_Revanth_Kumar_Software_Engineer_Resume.pdf
└── assets/
    ├── professional-headshot.png
    ├── leadership/
    │   └── tait-event-collaboration.jpg
    └── projects/
        ├── avf-trpde.jpg
        ├── cyberbullying.jpg
        ├── trade-settlement.jpg
        └── idempotent-payment.jpg
```

## Deployment

The site is deployed on Vercel and connected to the GitHub repository. After committing updates to `main`, check the Vercel deployment and test the production URL, project links and both resume downloads.

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Live portfolio:** https://sarvasetty-revanth-kumar-portfolio.vercel.app/

## Contact

- **Email:** sarvasettyrevanth.66@gmail.com
- **Phone:** +91 7416476715
- **LinkedIn:** https://www.linkedin.com/in/revanth-kumar-sarvasetty-8168772b8/
- **GitHub:** https://github.com/Revanth6699
