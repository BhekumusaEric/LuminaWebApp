# Managing Insights & Events via Google Sheets

The site owner can add, edit, or remove **Insights articles** and **Upcoming events** without touching any code — just by editing a shared Google Sheet.

Rows appear on the live site within seconds of saving the sheet (the site fetches fresh data every time a visitor loads the page).

---

## 1. Create the Google Sheet

1. Open [sheets.google.com](https://sheets.google.com) and create a new blank sheet
2. Name it something like **"Lumina Site Content"**
3. Create **two tabs** (worksheets) at the bottom of the sheet:
   - **Articles** — for the Insights page
   - **Events** — for the Community page's "Upcoming Events" section

You can rename the tabs however you like — the names don't matter, only the tab IDs (see step 4).

---

## 2. Set up the columns

Copy these headers into **row 1** of each tab **exactly as shown** (case-sensitive, no spaces around the words).

### Articles tab

| Column | Required | Example |
|---|---|---|
| `id` | Yes | `1` |
| `slug` | No (auto from title) | `leading-with-clarity` |
| `category` | No | `Leadership` |
| `title` | **Yes** | `Leading With Clarity In Uncertain Times` |
| `summary` | Yes | `A short paragraph shown on the card and the featured hero.` |
| `readingTime` | No | `6 min read` |
| `publishDate` | No | `15 Nov 2026` |
| `image` | No | `https://images.unsplash.com/photo-...` |
| `featured` | No | `true` |
| `link` | Yes | `https://www.linkedin.com/pulse/leading-with-clarity...` |

Notes:
- **`featured`** accepts `true`, `1`, `yes`, or `y` (anything else = not featured). Only mark **one** article as featured — it appears as the big hero card at the top of Insights.
- **`link`** is where the "Read article" button goes. Point it at the full article — this can be your LinkedIn post, Medium article, your own blog, etc. If left empty, the card still shows on the site but isn't clickable.
- **`image`** should be a **direct URL to the image file** (must end in `.jpg`, `.png`, or `.webp`). Unsplash, your own hosting, or a public Google Drive link all work. Leave empty for a solid dark card background.

### Events tab

| Column | Required | Example |
|---|---|---|
| `id` | Yes | `1` |
| `title` | **Yes** | `Career Clarity Workshop` |
| `date` | Yes | `15 November 2026` |
| `time` | No | `18:00 – 20:00 SAST` |
| `location` | No | `Online (Zoom)` |
| `description` | Yes | `A 90-minute workshop on defining your next career move with intention.` |
| `link` | Yes | `https://forms.gle/your-rsvp-form` |
| `image` | No | `https://images.unsplash.com/photo-...` |

Notes:
- **`link`** powers the "RSVP" button. Use a Google Form, Eventbrite, WhatsApp deep link, or Calendly URL.
- **`date`** is free-text — write it however you want it displayed.

---

## 3. Share the sheet

1. Click the **Share** button in the top-right of Google Sheets
2. Under "General access", change the dropdown from **"Restricted"** to **"Anyone with the link"**
3. Make sure the role next to it is **"Viewer"** (not Editor)
4. Click **Done**

That's it — the site can now read the sheet. No "Publish to Web" step is needed.

---

## 4. Connect the sheet to the site

You only need to do this once — after that, you just edit the sheet and the site updates automatically.

Open `lumina-advisory/src/lib/data.ts` and find this block near the top:

```ts
googleSheets: {
  spreadsheetId: "...",
  articlesGid: "0",
  eventsGid: "",
},
```

### Finding your `spreadsheetId`

Look at your Google Sheet's URL — it looks like this:

```
https://docs.google.com/spreadsheets/d/1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890/edit#gid=0
                                       └───────────── this is the ID ──────────────┘
```

Copy the part between `/d/` and `/edit` and paste it as `spreadsheetId`.

### Finding each tab's `gid`

Click on the **Articles** tab at the bottom of the sheet. Look at the URL again:

```
https://docs.google.com/spreadsheets/d/1AbC.../edit#gid=0
                                                        └─ this is the gid
```

Copy the number after `gid=` and paste it as `articlesGid`.

Now click the **Events** tab and do the same — paste that number as `eventsGid`.

Example filled-in config:

```ts
googleSheets: {
  spreadsheetId: "1AbCdEfGhIjKlMnOpQrStUvWxYz1234567890",
  articlesGid: "0",
  eventsGid: "845672190",
},
```

Save the file, then re-deploy the site (see the deploy notes at the bottom).

---

## 5. Adding, editing, and removing content

Once connected, day-to-day updates are just spreadsheet edits:

- **Add** — new row at the bottom
- **Edit** — change any cell
- **Remove** — delete the row (or clear the `title` cell)
- **Reorder** — cut and paste rows into a different order

Save the sheet (Google Sheets saves automatically) and refresh the site. Changes appear immediately.

---

## Troubleshooting

**"Articles Coming Soon" is still showing after I added a row.**
- Confirm the sheet is shared as "Anyone with the link — Viewer" (step 3)
- Confirm `spreadsheetId` and `articlesGid` in `data.ts` match your sheet's URL exactly
- Open your browser's dev tools (F12) → Console tab. If there's a red error mentioning "googleSheets", it will tell you what's wrong.

**Nothing shows for events.**
- The Events section is hidden gracefully until `eventsGid` is filled in. If it's still empty, that's why. Add the gid from your Events tab URL.

**Images from Google Drive don't load.**
- Google Drive's "share" links don't return the image file directly. Use one of:
  - Unsplash direct URLs (`https://images.unsplash.com/photo-...`)
  - An image host like [imgur.com](https://imgur.com) — right-click the uploaded image → "Copy image address"
  - Upload the image into `lumina-advisory/public/images/` and reference it as `/images/your-file.jpg`

---

## Deploying updates to `data.ts`

After changing the `data.ts` config, the site needs a fresh build & deploy:

```powershell
cd lumina-advisory
npm run build
```

Then push to GitHub, and in cPanel: **Git Version Control → Manage → Pull or Deploy → Update from Remote → Deploy HEAD Commit**.

**Editing rows in the sheet does not require any redeploy** — only the initial `spreadsheetId` / `gid` connection does.
