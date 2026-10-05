# Portfolio Site Plan

## Goal

Create Dipti Vaithiswaran’s personal portfolio as a static Jekyll site for the GitHub Pages user-site address `diptivaithiswaran-coding.github.io`. The complete publishable site will live directly in the repository root and publish from the `main` branch and `/` (root).

## Pages and content

- **Home** — a concise introduction and links to the other pages.
- **About** — MBA education, product strategy and management background, interests, and a short professional summary based only on the supplied résumé.
- **Work Experience** — Visa experience (2020–2025), content creation (2022–present), and supplied Creator Platform work. Any missing employer, role, or date for the newer Creator Platform material will be labeled as a placeholder, not inferred.
- **Contact** — the supplied email address as a public `mailto:` link, as requested. Do not publish the résumé’s phone number.
- Shared navigation and footer on every page.

## Visual and interaction direction

- Responsive, accessible, single-column layout for phone and desktop widths.
- Warm, human-feeling typography; no reference sites were provided.
- Light and dark themes, with a small accessible theme control and minimal JavaScript.
- Semantic HTML and readable color contrast.

## Technical approach

- Use Jekyll with Markdown pages and YAML front matter.
- Keep all site content and files at the repository root: `_config.yml`, `index.md`, page Markdown, `_layouts/`, `_includes/`, `assets/`, and supporting site files.
- Use reusable layouts and includes to keep content separate from presentation.
- Configure an empty `baseurl` for the GitHub user site and use Jekyll URL filters for site links.
- Include SEO metadata, a sitemap, and a favicon using GitHub Pages-compatible Jekyll features.
- Add a README with content-editing guidance, local preview steps, and Lighthouse instructions.
- No application framework, backend, database, blog, CMS, contact form service, animation system, unnecessary dependencies, or third-party trackers.

## Verification

- Confirm the repository root contains the complete Jekyll site and no separate app or nested website folder.
- Check all page and navigation links, GitHub Pages configuration, and sitemap/SEO output.
- Inspect the rendered site at 375px and 1280px widths.
- Run Lighthouse and target scores of at least 90 for Performance, Accessibility, Best Practices, and SEO; document any limitation if a score depends on the publishing environment.

## Assumptions and content boundaries

- The résumé text pasted in chat is the source of truth; do not fetch or otherwise use the LinkedIn URL.
- Include only achievements, employers, clients, metrics, and projects present in the supplied text.
- The Creator Platform material is supplied, but its employer, role, and dates are not identified. Keep any missing attribution visibly marked as a placeholder rather than assigning it to Visa or inventing a new employer or title.
- The selected GitHub Pages username is `diptivaithiswaran-coding`.
- The email address is intentionally public; the phone number is not.
- No reference websites were supplied.

## Approval gate

The user approved this plan before implementation.