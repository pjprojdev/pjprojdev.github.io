# Textile Portfolio Website for GitHub Pages

A clean, static portfolio site for a textile designer. It is ready to publish on GitHub Pages.

## Files

- `index.html` — main page
- `assets/styles.css` — styling
- `assets/script.js` — portfolio filtering

## How to publish on GitHub Pages

1. Create a new GitHub repository.
2. Upload all files from this folder to the repository root.
3. Commit and push.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose:
   - **Source:** Deploy from a branch
   - **Branch:** `main` / `(root)`
6. Save.
7. Your site will be published at your GitHub Pages URL.

## How to customize

### 1. Change the site name
Edit this text in `index.html`:
- `Warp & Weave`

### 2. Change project text
Search for these sample project titles and replace them:
- `Structure Study`
- `Botanical Repeat Series`
- `Pleat & Texture Lab`
- `City Grid`
- `Summer Forecast`
- `Fiber Fusion`

### 3. Replace placeholder project images
Right now the cards use gradient backgrounds.
To use your own images:

- Add your images to an `assets/` or `images/` folder
- Replace each `.project-image` block with an `<img>` tag, for example:

```html
<div class="project-image">
  <img src="assets/project-1.jpg" alt="Woven textile sample in neutral tones" />
</div>
```

Then remove the gradient helper classes like `image-1`, `image-2`, etc.

### 4. Update contact links
Replace:
- `hello@yourname.com`
- Instagram URL
- LinkedIn URL

### 5. Add more sections
You can easily add:
- CV / resume
- downloadable PDF portfolio
- client list
- exhibitions
- awards
- shop link

## Best next upgrade ideas

- add a dedicated project detail page for each collection
- include real textile photography and close-up swatch images
- add a lightbox gallery
- add a downloadable PDF portfolio
- connect a custom domain
