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

### In Replit

Click **Run** to start the **Preview portfolio** workflow, then open **Preview**. It uses Jekyll's built-in server on port 5000; no separate application is needed.

### On your computer

Install Ruby and Bundler if needed, then install the local preview dependencies:

```sh
gem install bundler
bundle install
```

From the repository root, run:

```sh
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`. To generate the static output without starting a server, run `bundle exec jekyll build`; the generated files appear in `_site/`. GitHub Pages manages the Jekyll version used for its own build.

## Publish with GitHub Pages

Use the repository name `diptivaithiswaran-coding.github.io` for this GitHub user site. In the repository’s Pages settings, select deployment from the `main` branch and the `/` (root) folder. Keep `baseurl` empty in `_config.yml`. GitHub Pages builds the Jekyll site directly from the repository; no separate app or manual build step is required.

## Run Lighthouse

1. Start the local preview with `bundle exec jekyll serve`.
2. Open the site in Chrome at `http://127.0.0.1:4000`.
3. In Chrome DevTools, open **Lighthouse**, select Performance, Accessibility, Best Practices, and SEO, and run an audit. Repeat with a mobile viewport.

The completed local build scored **100 in Performance, Accessibility, Best Practices, and SEO** on all four pages in both mobile and desktop Lighthouse audits. Navigation and theme persistence were also checked at 375px and 1280px widths. Re-run the audit after content, CSS, or metadata changes and after publishing, since the hosting environment can affect scores.

## Technical choices and assumptions

- Native Jekyll URL filters keep links correct for an empty user-site `baseurl`.
- SEO tags and the Liquid-generated sitemap do not require third-party Jekyll plugins.
- System font stacks avoid external font requests, and the only JavaScript switches the light/dark theme.
- Only the pasted résumé was used. No information was fetched from LinkedIn.
- Missing Creator Platform attribution remains visibly marked as a placeholder rather than inferred.