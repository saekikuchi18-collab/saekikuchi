# Clarity PR — Portfolio Website

Your personal PR portfolio site. This guide explains how to update content, add projects, and deploy — no coding knowledge needed.

---

## Quick Reference

| I want to…              | Edit this file              |
| ----------------------- | --------------------------- |
| Add/edit a project      | `/content/projects.ts`      |
| Change my bio/contact   | `/content/site.ts`          |
| Add a project image     | Drop file in `/public/projects/` |
| Preview locally         | Run `pnpm dev`              |
| Build for deployment    | Run `pnpm build`            |

---

## 1. Adding a New Project

1. Open the file `content/projects.ts` in any text editor (VS Code, TextEdit, Notepad — anything works)
2. Scroll down to the list of projects (you'll see blocks that start with `{` and end with `},`)
3. Copy this template and paste it **before** the very last `];` line:

```ts
  {
    id: "your-project-name",
    title: "Your Project Title",
    client: "Client Name",
    category: "Brand Launch",
    year: 2024,
    featured: true,
    coverImage: "/projects/your-image.jpg",
    summary: "One sentence about this project.",
    description: "Full description here.\n\nSecond paragraph here.",
    results: ["First stat", "Second stat", "Third stat"],
    tags: ["Tag One", "Tag Two"],
    link: "https://example.com/press-coverage",
  },
```

4. Replace the placeholder text with your project details
5. Save the file

**Important notes:**
- The `id` must be unique, lowercase, with hyphens instead of spaces (e.g., `"summer-campaign-2024"`)
- `category` must be exactly one of: `"Brand Launch"`, `"Crisis Comms"`, `"Campaign"`, `"Event"`, `"Media Relations"`
- Set `featured: true` to show it on the homepage, `false` for archive only
- For multiple paragraphs in description, put `\n\n` between them
- If there's no press link, delete the entire `link: "..."` line
- Don't forget the comma after the closing `}`!

---

## 2. Adding or Replacing Images

1. Name your image file with lowercase letters and hyphens (e.g., `summer-campaign.jpg`)
2. Drop the file into the `public/projects/` folder
3. In your project entry, set `coverImage` to `/projects/your-filename.jpg`

**Tips:**
- Use landscape images (wider than tall) — 1600×1200 pixels works great
- JPG or WebP format, under 500KB for fast loading
- The filename you use here must exactly match the file in the folder

---

## 3. Changing Contact Info, Bio, or Social Links

1. Open `content/site.ts`
2. Find the text you want to change (it's all clearly labelled)
3. Edit the text between the quote marks `" "`
4. Save

For example, to change your email:
- Find the line that says `email: "hello@claritypr.co",`
- Replace the email address between the quotes

To add/remove a social link, add or delete a line in the `socials` section.

---

## 4. Previewing Your Site Locally

You'll need Node.js installed on your computer ([download here](https://nodejs.org)). Then:

1. Open Terminal (Mac) or Command Prompt (Windows)
2. Navigate to your project folder:
   ```
   cd path/to/your/project
   ```
3. First time only — install dependencies:
   ```
   pnpm install
   ```
4. Start the preview:
   ```
   pnpm dev
   ```
5. Open your browser and go to `http://localhost:3000`
6. Press `Ctrl+C` in the terminal to stop

---

## 5. Building for Deployment

Run this command to create the production files:

```
pnpm build
```

This creates an `out/` folder with your finished website files.

---

## 6. Deploying to Netlify (Drag & Drop)

1. Run `pnpm build` (see above)
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag your entire `out/` folder onto the page
4. Done! Netlify gives you a live URL immediately

To update your site later, just run `pnpm build` again and drag the new `out/` folder.

---

## 7. Deploying to Vercel (Automatic)

1. Push your project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in with GitHub
3. Click "Import Project" and select your repo
4. Click "Deploy" — no configuration needed
5. Every time you push changes to GitHub, the site updates automatically

---

## Troubleshooting

**"I made a change but the site looks broken"**
- Check that all quotes are straight `"` not curly `""`
- Make sure every `{` has a matching `}`
- Make sure the `category` is spelled exactly as listed above
- The terminal will show an error message pointing to the problem

**"My image isn't showing"**
- Check the filename matches exactly (it's case-sensitive)
- Make sure the file is in `public/projects/`
- Make sure the path starts with `/projects/` (not `public/projects/`)

---

## Tech Stack (for developers)

- Next.js 15 (App Router, static export)
- Tailwind CSS v4
- shadcn/ui + Radix UI
- Framer Motion v11
- TypeScript with Zod validation
