---
name: Static Jekyll audits
description: Keep audit tooling separate from the root-only static-site deliverable.
---

Use temporary, isolated browser-audit tooling rather than adding application packages or a permanent preview service to this repository.

**Why:** The user explicitly requires a publish-ready Jekyll repository, not a separate preview application. Verification can need tools that are not part of the website.

**How to apply:** Keep audit dependencies and reports outside the repository. A temporary built-in Jekyll preview is for verification only; stop it afterward and restore any temporary runtime configuration. Do not preserve Node manifests, framework scaffolding, or generated output as site source.