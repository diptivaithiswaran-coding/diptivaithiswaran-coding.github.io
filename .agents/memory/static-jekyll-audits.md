---
name: Static Jekyll audits
description: Keep audit tooling separate from the root-only static-site deliverable.
---

Use temporary, isolated browser-audit tooling rather than adding application packages or a separate preview application to this repository. Keep the built-in Jekyll preview available through a Replit workflow.

**Why:** The user explicitly requires a publish-ready Jekyll repository, not a separate preview application. Removing the Jekyll preview workflow during cleanup prevented the user from viewing the site in Replit.

**How to apply:** Keep audit dependencies and reports outside the repository, and restore any temporary audit runtime configuration. Preserve a workflow using Jekyll's built-in server for the user's preview; it does not change the static GitHub Pages architecture. Do not preserve Node manifests, framework scaffolding, or generated output as site source.