# Kreatiko Documentation

Official documentation site for [Kreatiko](https://kreatiko.com) - a platform that allows you to customize user profiles using CSS to create unique, visually appealing designs.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- Bun or npm/yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd docs

# Install dependencies
bun install
# or npm install

# Start development server
bun dev
# or npm run dev
```

The documentation site will be available at `http://localhost:3001`

## 📚 Project Structure

```
docs/
├── src/app/
│   ├── page.mdx                    # Homepage
│   ├── getting-started/            # Getting started guide
│   ├── blocks/                     # Profile block components
│   │   ├── profile/               # Profile styling
│   │   ├── bio/                   # Bio section
│   │   ├── tracks/                # Music tracks
│   │   ├── blogs/                 # Blog posts
│   │   └── friends/               # Friends list
│   ├── global/                     # Global styling
│   │   ├── navbar/                # Navigation styling
│   │   ├── footer/                # Footer styling
│   │   └── comments/              # Comments section
│   └── advanced/                   # Advanced features
│       ├── cursors/               # Custom cursors
│       └── youtube-music/         # YouTube Music integration
├── public/                         # Static assets
└── mdx-components.tsx             # Custom MDX components
```

## 🛠️ Making Updates

### Adding New Documentation Pages

1. **Create a new MDX file** in the appropriate directory:

   ```bash
   # For a new block component
   mkdir src/app/blocks/new-component
   echo "# New Component\n\nDocumentation content here..." > src/app/blocks/new-component/page.mdx
   ```

2. **Update the meta file** to include your new page:
   ```typescript
   // src/app/blocks/_meta.ts
   export default {
     profile: "Profile",
     bio: "Bio",
     tracks: "Tracks",
     blogs: "Blogs",
     friends: "Friends",
     "new-component": "New Component", // Add this line
   };
   ```

### Editing Existing Content

Simply edit the `.mdx` files directly:

- Use Markdown syntax for content
- Add React components using JSX
- Include code blocks with syntax highlighting

### Adding New Sections

1. **Create the directory structure**:

   ```bash
   mkdir src/app/new-section
   touch src/app/new-section/_meta.ts
   touch src/app/new-section/page.mdx
   ```

2. **Configure the meta file**:

   ```typescript
   // src/app/new-section/_meta.ts
   export default {
     index: "Overview",
     // Add subsections here
   };
   ```

3. **Update the main meta file**:
   ```typescript
   // src/app/_meta.ts
   export default {
     index: "Introduction",
     "getting-started": "Getting Started",
     blocks: "Blocks",
     global: "Global",
     advanced: "Advanced",
     "new-section": "New Section", // Add this
   };
   ```

### Content Guidelines

- **Code Examples**: Use fenced code blocks with language specification

  ```css
  .profile-container {
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    border-radius: 12px;
  }
  ```

- **Callouts**: Use Nextra's built-in callout components

  ```mdx
  import { Callout } from "nextra/components";

  <Callout type="warning">
    Remember to test your CSS in Kreatiko's preview mode!
  </Callout>
  ```

- **Images**: Place in `public/` and reference with `/image.png`

## 🔧 Available Scripts

```bash
# Development
bun dev              # Start dev server on port 3001
bun build            # Build for production
bun start            # Start production server
bun lint             # Run ESLint

# Search Integration
bun postbuild        # Generate search index (runs after build)
```

## 🏗️ Tech Stack

- **Framework**: Next.js 15.4.6 with Turbopack
- **Documentation**: Nextra 4.3.0 with docs theme
- **Styling**: Tailwind CSS 4.0
- **Search**: Pagefind for static search
- **Language**: TypeScript 5

## 📝 Writing Tips

1. **Be Visual**: Include plenty of CSS examples and screenshots
2. **Test Everything**: Ensure all code examples work in Kreatiko
3. **Cross-Reference**: Link related sections liberally
4. **Keep It Updated**: Sync with Kreatiko platform changes
