# ThermoBuild Systems — Website

A complete, multi-page, SEO-optimised business website matching your brand's
visual style (blue/orange palette, Montserrat + Inter type system). Plain
HTML/CSS/JS — no build tools or frameworks required.

## 1. What's included

```
index.html                     Home
about.html                     About Us
services.html                  Services overview (hub)
services/*.html                6 individual service pages (SEO landing pages)
projects.html                  Portfolio gallery (filterable)
projects/*.html                8 individual project pages (5 completed, 3 in progress)
contact.html                   Contact + detailed quote request form
faq.html                       FAQ (accordion, grouped by category)
testimonials.html              Client testimonials
careers.html                   Careers / current openings
privacy-policy.html            Privacy Policy (GDPR)
terms-conditions.html          Terms & Conditions
cookie-policy.html             Cookie Policy (+ cookie consent banner site-wide)
sitemap.xml                    XML sitemap (all 25 pages)
robots.txt                     Search engine crawl rules
assets/css/style.css           Shared stylesheet (single file, whole site)
assets/js/main.js              Shared JS (nav, FAQ, filters, form, cookies)
assets/img/                    Logo, favicon, OG cover, project & service photos
```

Every page shares the same header, navigation, footer and cookie banner, and
pulls from one stylesheet — update `assets/css/style.css` once and the change
applies everywhere. All internal links and asset paths are relative, so the
site works correctly whether you open it straight from the unzipped folder,
host it in a subfolder, or deploy it at your domain root.

## 2. Real photos, logo & banner — what was added

Your uploaded project photos, logo and banner have been integrated:

- **Logo**: `assets/img/logo-icon.png` (icon only, transparent background, used
  in the nav bar and footer) and `assets/img/logo-full.png` (full circular logo
  with wordmark, transparent background — handy for letterheads, quotes,
  signage, etc.). Also used to generate `assets/img/favicon.ico`.
- **Project photos**: each of your 8 supplied photos was optimised and placed at
  `assets/img/projects/<slug>.jpg`, and is now used as that project's card
  thumbnail, portfolio grid image, and project detail hero photo.
- **Service photos**: 4 of your 6 service pages (EWI Render, Stonewool Cavity
  Wall, Soffit, Floor Insulation) use photos cropped from your `Thermo_Cover.jpeg`
  banner. Rigid Brick Cavity Wall Insulation reuses the same cavity-wall photo
  (same material, still accurate). Internal Wall Insulation — the one service
  with no matching photo in your banner — uses an original cross-section diagram
  (`assets/img/services/internal-wall-insulation.svg`) instead of a stock photo,
  to avoid using unlicensed internet images on a commercial site.
- **Banner**: the full `Thermo_Cover.jpeg` banner shows an old address
  (Kentstown) and email (thermobuildsystems@gmail.com), so rather than use it
  as-is, only the logo + tagline portion was cropped (no contact details) and
  placed on the About page. The banner's 4 photo strips were reused for the
  services above.
- **Project descriptions**: each of the 8 projects now includes real,
  researched background (developer, location, scale) alongside ThermoBuild's
  stated scope of works, rather than generic placeholder text. Double-check
  these against your own records, since they're compiled from public planning
  and news sources, not from you directly.

If you get dedicated photography for Internal Wall Insulation or Rigid Brick
Cavity Wall Insulation in future, drop the file into `assets/img/services/`
and swap the `<img src="...">` in that service's HTML file.

## 3. Adding a new project (Portfolio) — no structural changes needed

The portfolio was built so you can keep adding projects indefinitely:

1. Duplicate any file in `/projects/` (e.g. `projects/slx-dublin.html`) and
   rename it to a new slug, e.g. `projects/my-new-project.html`.
2. Update inside that file: title, H1, description, services provided,
   location, project type, status (Completed / In Progress), completion date,
   and swap in the real photo (`<img src="../assets/img/projects/your-photo.jpg">`).
3. Add one new `<a class="project-card">` block to `projects.html`
   (`#projectsGrid`) — copy an existing card and update its `href`, image,
   label, status and text. The `data-cat` and `data-status` attributes drive
   the filter buttons (`residential` / `commercial` / `mixed`,
   `completed` / `in-progress`).
4. Add the new URL to `sitemap.xml`.

No template, CSS or JavaScript changes are required — the gallery, filters
and detail-page layout already support unlimited projects.

## 4. Adding a new service

1. Duplicate a file in `/services/`, update its content, meta tags and photo.
2. Add a matching card to `services.html` and a footer link.
3. Add the URL to `sitemap.xml`.

## 5. The quote request form

`contact.html` contains a full quote request form (name, company, email,
phone, project address, service required, project type, project size,
budget, preferred start date, message, file upload for drawings/photos).

**Important:** the form currently only validates and shows a "thank you"
message client-side (see `assets/js/main.js`) — it does **not** yet send an
email or save data anywhere. Before launch, connect it to:
- A backend endpoint / serverless function, or
- A hosted form service (e.g. Formspree, Netlify Forms, Basin), or
- A simple `mailto:`/PHP mail script on your hosting provider.

The GDPR consent checkbox and Privacy Policy link are already wired in.

## 6. SEO features already implemented

- Unique, keyword-targeted `<title>` and meta description on every page
- Single, correct H1 → H2 → H3 heading hierarchy throughout
- Clean, descriptive URLs (`/services/ewi-render-systems.html`, etc.)
- Internal linking between Home ⇄ Services ⇄ Service detail ⇄ Projects ⇄
  Project detail ⇄ Contact, plus a "related services"/"related projects"
  module on every detail page
- Schema.org JSON-LD structured data on every page:
  - `GeneralContractor`/`LocalBusiness` (with NAP, geo-coordinates, opening
    hours, social profiles) — site-wide
  - `BreadcrumbList` — every page
  - `Service` — each service page
  - `FAQPage` — faq.html
  - Reviews/`AggregateRating` — testimonials.html
  - `ItemList` — projects.html
- Open Graph + Twitter Card tags on every page (real logo-based cover image)
- Canonical URLs on every page
- Visible breadcrumb navigation (matches the schema) on every inner page
- `sitemap.xml` and `robots.txt`
- Mobile-first, responsive layout down to small phones
- Real photos with descriptive, unique `alt` text and `loading="lazy"`
- `prefers-reduced-motion` respected; visible keyboard focus states
- Semantic HTML5 (`<nav>`, `<main>`, `<footer>`, `<section>`, skip-to-content link)

### Still to do for full SEO readiness
- Verify and submit the site in Google Search Console & Bing Webmaster Tools
- Set up and verify a Google Business Profile for ThermoBuild Systems and
  link it to the site
- Connect the contact form to a real email/CRM endpoint
- Double-check the researched project facts (developer names, unit counts,
  completion dates) against your own project records before publishing
- Run the finished, hosted site through PageSpeed Insights / Lighthouse once
  it's live on its real domain

## 7. Deployment

This is a static site — upload the entire contents of this folder to any
standard web host, or a static host such as Netlify, Vercel or GitHub Pages.
Because all links are relative, it will work at your domain root or in a
subfolder without any changes. No server-side runtime is required except for
whatever you connect the contact form to.

Domain assumed throughout (canonical URLs, sitemap, schema): `https://www.thermobuild.ie`
— update every occurrence of this domain if the live domain differs.
