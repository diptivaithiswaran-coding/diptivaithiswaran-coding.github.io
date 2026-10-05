# Dipti Vaithiswaran — Portfolio

A static Jekyll site for the GitHub Pages user-site address `diptivaithiswaran-coding.github.io`. The pages are written in Markdown with YAML front matter and use reusable HTML layouts and includes.

## Update the site

- Edit `index.md`, `about.md`, `work-experience.md`, and `contact.md` to change page content.
- Each page’s front matter controls its title, description, and permalink.
- Edit `_config.yml` to update site-wide information or the navigation labels and URLs.
- Edit `assets/css/site.css` for presentation. The theme supports both light and dark appearances; the visitor can choose a theme, and the choice is stored in their browser when available.
- Edit `assets/js/theme.js` only for theme-switching behavior.
- Replace `assets/favicon.svg` to change the browser icon.
- The Creator Platform entry intentionally labels missing employer, role, and dates as placeholders. Replace that note once those details are available.
- The email address on the Contact page is public. The phone number from the source résumé is not included.

## Preview locally

Install Ruby and Jekyll if needed:

```sh
gem install jekyll
```

From the repository root, run:

```sh
jekyll serve
```

Open `http://127.0.0.1:4000`. To generate the static output without starting a server, run `jekyll build`; the generated files appear in `_site/`. GitHub Pages manages the Jekyll version used for its own build.

## Publish with GitHub Pages

This is a GitHub user site. In the repository’s Pages settings, select deployment from the `main` branch and the `/` (root) folder. Keep `baseurl` empty in `_config.yml`. GitHub Pages builds the Jekyll site directly from the repository; no separate app or manual build step is required.

## Run Lighthouse

1. Start the local preview with `jekyll serve`.
2. Open the site in Chrome at `http://127.0.0.1:4000`.
3. In Chrome DevTools, open **Lighthouse**, select Performance, Accessibility, Best Practices, and SEO, and run an audit. Repeat with a mobile viewport.

The design is intended to score at least 90 in each category. Re-run the audit after content, CSS, or metadata changes.