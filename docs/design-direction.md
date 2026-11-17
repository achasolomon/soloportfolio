# Portfolio direction

## Visual direction

Follow the user's supplied portfolio mockup: near-black backgrounds, teal accents, serif display headings, a prominent portrait, visual selected work, compact About/capabilities/stack columns, a connected process, and a contact banner. Use the user's recent photos: `me.png` for the hero and `me2.png` on About.

## Project presentation

The featured screenshot-led projects are exactly **Vetandpay**, **Streams of Joy**, and **Spicedchildcare**. Both Streams of Joy and Spicedchildcare use Laravel. Their visible platform features are described separately from individual engineering ownership, which has not been fully specified.

Additional engagements are shown on the homepage, Work, and Experience pages:

- **Nobzo:** volunteer frontend/mobile contribution in 2025, React Native. Not an Algoteam contract.
- **ONSA Document Management:** client work through Algoteam; detailed stack not claimed.
- **ECOWAS Passport & Biometric System at Euphoria Press:** through Algoteam; C#/.NET, WPF, OpenCV; facial alignment, capture, and recognition.
- **EFCC Eagle App:** mobile application contribution through Algoteam; the user supplied mobile screenshots. No unconfirmed mobile framework is attributed.
- **Providus Banking Backend:** a six-month contract through Algoteam in 2021; Java/Spring Boot; backend only. The user-supplied Banking_Technology_Capability.pdf supplies banking-domain context. No proprietary implementation is reproduced.

Budgetflow and School Management are excluded from project selection. The confirmed Lightgate/Budgetflow role remains employment history. Forum and Shedam remain excluded. The older passport case has been replaced by the correctly attributed ECOWAS biometric engagement and confirmed stack.

Project cards use actual user-supplied screenshots. Each available screenshot pair has thumbnails, an enlargeable dialog, keyboard navigation, and Escape close. Portrait phone screenshots use contain sizing so the full screen remains readable. No invented concept screenshots are used.

## Identity and CV

`components/BrandMark.jsx` uses the generated portrait emblem from the user's recent photo. The favicon and Apple icon are derived from that image. See `docs/portrait-logo.md` for the exact prompt and export paths.

The CV source is `docs/Acha-Solomon-Ona-CV.md`; `scripts/export_cv.py` exports the Word download. The CV includes the newly confirmed client engagements, volunteering, Java/Spring Boot, C#/.NET, WPF, OpenCV, and React Native.

## Technical notes

Project data lives in `lib/portfolio.js` as `featuredProjects`, `additionalProjects`, and their combined `projects` list. The dynamic project route handles both screenshot projects and text-only private engagements.

`PORTFOLIO_BUILD_DIR=.next-preview` isolates production verification from a concurrent Turbopack development server. Normal commands retain the default `.next` directory. To validate this isolated build, use the same environment variable for build and start. `.next-preview/` is ignored.

The repeatable browser check is `scripts/check-preview.mjs`, expecting a production server on port 3218 and an isolated Chrome debugging session on port 9333. Verification includes the three featured projects, five additional engagements, screenshot interaction, downloads, branding assets, removed project 404s, and viewport checks. Final results are reported in the task response.


## Latest content refinements

The user supplied individual contribution details for Nobzo, ONSA, Euphoria/ECOWAS, and Streams of Joy. Their 35%, 25%, and 500+ results are user-provided statements, not derived from screenshot counters or independently measured by this project. These now appear in the relevant case studies and CV. Streams of Joy is listed as a dated remote lead role (January-April 2026). Spicedchildcare is presented as lead software engineering, with duties drafted from the supplied project scope and no invented metrics. Nobzo uses React Native/Expo and Google OAuth. The banking backend uses Java/Spring Boot; biometrics uses C#/.NET/WPF/OpenCV with React/Node.js/AWS components. The logo is portrait-based, and the actual screenshot galleries replace all earlier illustrative previews.


## Verification outcome

The isolated production build passed compilation, lint, type checks, and static generation. Browser checks passed on all thirteen page routes at 1440px, 1024px, 390px, and 320px. The three featured screenshot projects and five additional engagements were verified. Screenshot selection, enlargement, next navigation, Escape close, mobile menu, email copy, CV download, favicon/Apple icon/logo routes, removed-project 404s, and services redirect passed. Desktop and mobile screenshots were inspected. A narrow-screen gallery min-content issue was corrected. Wide card previews use contain sizing so supplied screenshots are not cropped.


## Current identity and experience revision

The user-selected public name is **Solomon Ona**. The current CV source is `docs/Solomon-Ona-CV.md` and its download is `public/assets/resume/Solomon-Ona-CV.docx`. Old download URLs serve the updated document for compatibility. The public site and current CV omit Algoteam employment rows and attribution; historical research notes retain the original provenance. The engagements are presented as standalone contract projects, not as newly asserted direct employment. Kwildigital is a short 2026 contract as Software & AI Expert, during which Solomon designed a bank support system. No bank-support AI functionality has been specified, so chatbot, LLM, model-training, or automation claims are not added. AI/computer-vision integration is explicitly described in the confirmed OpenCV biometric work. About, experience summaries, project narratives, and CV copy have been expanded around supplied contributions and results.


The identity/experience revision passed the isolated production build, including lint and type checks. All thirteen page routes passed browser checks at 1440px, 1024px, 390px, and 320px. Checks explicitly verified the Solomon Ona title/name, absence of old visible attribution, Kwildigital role, the current CV URL, gallery interactions, icons, redirects, and 404 behaviour. About desktop and Experience mobile screenshots were inspected.


## Contact and Kwildigital visibility update

Current contact email: `solomoneyen@gmail.com`. LinkedIn links and references are removed from the public site and current CV, including footer, contact page, reusable social links, and clipboard payload. Kwildigital now has a standalone bank-support case study and appears as the first additional engagement on the homepage and Work page. The header includes an Experience link. This increases additional engagements from five to six, while retaining the same three featured screenshot projects. The short 2026 contract and Canada location remain unchanged; no specific bank-support AI functionality or implementation stack is invented.


Lightgate Solutions Limited now has a visible homepage/Work engagement and a dedicated case study at `/work/lightgate-solutions`, covering the confirmed Budgetflow requirements, stakeholder follow-up, design validation, and UAT work. This follows the user request to make Lightgate visible; the legacy `/work/budgetflow` URL remains removed. Kwildigital displays a Canada badge in engagement lists, rather than relying on detail-page metadata. There are now seven additional engagements and three featured screenshot projects. The user subsequently confirmed account-issue reporting, AI-automated support, and ticket handling for Kwildigital. Those capabilities are included; no specific AI model, provider, or implementation stack is invented.


The latest Kwildigital narrative now explicitly covers customer account-related concerns, automated AI assistance, and structured ticket handling. The role remains a short 2026 Canada-based contract and the contribution is described as system design.


The contact/visibility revision passed the isolated production build and browser checks on all fifteen page routes at 1440px, 1024px, 390px, and 320px. The checks verify three featured projects plus seven additional engagements, visible Lightgate and Kwildigital entries, the Kwildigital Canada badge, no old email/LinkedIn links, and the exact new clipboard email payload. Screenshot galleries, CV and brand downloads, redirects, and removed-project 404s passed.
