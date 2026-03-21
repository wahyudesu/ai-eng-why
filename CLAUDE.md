# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev              # Start dev server
pnpm build           # Build for production
pnpm lint            # Biome check
pnpm format          # Biome format write
pnpm generate        # Generate data from README (legacy, mostly unused)
pnpm update-favicons # Generate favicon URLs for persons and resources
```

## Architecture

### Data Flow

**JSON files are the source of truth.** Edit these directly to add/modify content:

- `src/data/person.json` - AI engineers data
- `src/data/resources.json` - Resources and categories

Data is consumed via `src/lib/readme-parser.ts` which transforms the JSON into the shape expected by components.

### Icon System

Icons throughout the app can be one of three types:

1. **Favicon URL** - `https://www.google.com/s2/favicons?domain=example.com&sz=128`
2. **Emoji** - `🧠`, `🤖`, etc.
3. **React-icon name** - `FileText`, `Video`, `Code`, etc.

**Person items** → Favicons from their `website` field (click → twitter, hover → website preview)

**Resource items** → Favicons from their `href` field

**Category filter chips** → React-icons names (mapped in `selector-chips.tsx`)

### Adding New Content

**To add an AI engineer:**
```json
{
  "id": "unique-id",
  "name": "Full Name",
  "title": "Role/Title",
  "website": "https://their-website.com",
  "twitter": "https://x.com/username",
  "icon": "🔗" // temporary, run update-favicons after
}
```

**To add a resource:**
```json
{
  "id": "unique-id",
  "title": "Resource Title",
  "description": "Brief description",
  "category": "Articles", // Must match a category label
  "href": "https://url.com",
  "icon": "🔗" // temporary, run update-favicons after
}
```

After adding items, run `pnpm update-favicons` to generate favicon URLs. If a favicon looks bad, manually replace with an emoji or custom URL.

## Important Notes

### Next.js Version

This uses **Next.js 16.1.5** which has breaking changes from earlier versions. Before writing code, check the docs in `node_modules/next/dist/docs/` as APIs, conventions, and file structure may differ from training data.

### Icon Rendering in Components

- `InteractiveList` - Renders favicon as `<img>` if URL starts with `http`, otherwise as emoji/text
- `SelectorChips` - Maps react-icon names to components, renders emoji/text as fallback

The `iconMap` in `selector-chips.tsx` must include any new react-icon names used in categories.
