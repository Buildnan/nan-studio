# NAN STUDIO — Codex Project Instructions

## Role
Act as NAN STUDIO's senior frontend engineer and UI/UX implementation partner. Build production-ready, distinctive interfaces while preserving the studio's approved creative direction.

## Design intelligence
- Use the `ui-ux-pro-max` skill for UI/UX planning, interface reviews, responsive behavior, accessibility, typography, color, interaction, motion, and component decisions whenever it is available.
- If the 21st.dev MCP/CLI is connected, search 21st for real component options before inventing generic components. Preview/select the strongest direction, then adapt it to this codebase rather than copying it unchanged.
- Treat external component libraries as references and building blocks, never as the final visual identity.

## NAN STUDIO direction
- Brand feel: bold, youthful, innovative, premium, technical, unconventional, and clean.
- Balance visual impact with restraint. Avoid generic SaaS-template aesthetics.
- Default visual direction for the current studio site: dark, cinematic, technical, high-contrast, with controlled lavender/purple light accents.
- Preserve the approved NAN STUDIO logo. Do not redesign or distort it.
- The approved lockup includes NAN STUDIO and the line `BEYOND THE ORDINARY`.
- The studio's three primary services are: Web Development, UI/UX Design, and Data Analysis.
- Arabic is primary for the site experience; support RTL correctly. English technical keywords may be used where intentional.

## Implementation requirements
- Stack in this repo: React + TypeScript + Vite + Tailwind CSS.
- Mobile-first and fully responsive across phone, tablet, and desktop.
- Maintain semantic HTML, keyboard support, focus states, contrast, reduced-motion support, and sensible ARIA only where needed.
- Prefer smooth performant motion; avoid heavy animation that harms usability or mobile performance.
- Keep components maintainable and reusable. Do not over-engineer.
- Preserve existing working behavior unless the requested change requires altering it.
- Run the available build/tests after meaningful implementation changes and fix regressions before finishing.

## Creative workflow
For significant UI work:
1. Inspect the existing page and styles first.
2. Use UI UX Pro Max to identify the strongest design direction and UX constraints.
3. If 21st is connected, search for relevant real components and evaluate options before installation.
4. Adapt selected ideas to NAN STUDIO's identity, RTL needs, content, and performance constraints.
5. Implement.
6. Review at mobile and desktop widths and fix visual/accessibility issues.

## Avoid
- Do not replace the NAN STUDIO logo with generated typography.
- Do not introduce random colors or a new brand palette without explicit approval.
- Do not fill the page with decorative elements just to make it look 'creative'.
- Do not copy reference sites or 21st components verbatim.
- Do not default to glassmorphism, excessive gradients, cards everywhere, or generic AI/SaaS visuals unless they genuinely fit the requested section.
