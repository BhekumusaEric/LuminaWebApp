This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Third-Party Integrations & Configuration

This website uses several external services for forms, scheduling, and community engagement. All static settings and integration endpoints are configured in [`src/lib/data.ts`](file:///c:/Users/F8887986/OneDrive%20-%20FRG/Documents/GitHub/LuminaWebApp/lumina-advisory/src/lib/data.ts).

### 1. Web3Forms (Contact Form Submission)
The contact form submits inquiries directly to your email without needing a custom server or backend.
* **How it works:** It POSTs form data to the Web3Forms API using an access key.
* **Configuration:**
  1. Go to [web3forms.com](https://web3forms.com) and enter your email address to generate a free Access Key.
  2. Open [`src/lib/data.ts`](file:///c:/Users/F8887986/OneDrive%20-%20FRG/Documents/GitHub/LuminaWebApp/lumina-advisory/src/lib/data.ts).
  3. Replace the empty string in `SITE.web3forms.accessKey` with your new access key:
     ```typescript
     web3forms: {
       accessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
     }
     ```

### 2. WhatsApp (Chat & Community)
Provides instant communication links for users to reach out directly or join a WhatsApp community.
* **Configuration:**
  1. Open [`src/lib/data.ts`](file:///c:/Users/F8887986/OneDrive%20-%20FRG/Documents/GitHub/LuminaWebApp/lumina-advisory/src/lib/data.ts).
  2. Update the phone number in the pre-filled message URL in `SITE.whatsapp.link`.
  3. Add the WhatsApp community invite link to `SITE.whatsapp.communityLink`:
     ```typescript
     whatsapp: {
       link: "https://wa.me/YOUR_PHONE_NUMBER?text=Your%20Pre-filled%20Text",
       communityLink: "https://chat.whatsapp.com/YOUR_COMMUNITY_CODE",
     }
     ```

### 3. Calendly (Appointment Booking)
Allows clients to book advisory sessions directly from the website.
* **Configuration:**
  1. Open [`src/lib/data.ts`](file:///c:/Users/F8887986/OneDrive%20-%20FRG/Documents/GitHub/LuminaWebApp/lumina-advisory/src/lib/data.ts).
  2. Replace the placeholder `#` with your actual Calendly booking URL in `SITE.calendly`:
     ```typescript
     calendly: "https://calendly.com/YOUR_USERNAME/YOUR_EVENT",
     ```

### 4. Google Sheets (Content Management for Articles & Events)
The website dynamically fetches articles and events from a public Google Sheet, allowing Yolandi to manage content without code changes.

#### A. Set up the Google Sheet:
1. Create a Google Spreadsheet with two tabs (sheets): **Articles** and **Events**.
2. **Articles Tab** should have these exact headers in row 1:
   `id`, `slug`, `category`, `title`, `summary`, `readingTime`, `publishDate`, `image`, `featured`
   * *`slug`* should be url-friendly (e.g. `guide-to-leadership`).
   * *`featured`* should be `true` for exactly one article to highlight it on top, and `false` for others.
   * *`image`* can be a URL to a hosted image or a path.
3. **Events Tab** should have these exact headers in row 1:
   `id`, `title`, `date`, `time`, `location`, `description`, `link`
   * *`link`* is the RSVP page (e.g. event website or Calendly booking). If left blank, it defaults to the WhatsApp Community link.

#### B. Publish to the Web:
1. In Google Sheets, go to **File** > **Share** > **Publish to web**.
2. Under the *Link* tab, choose **Entire Document** and select **Comma-separated values (.csv)** as the format.
3. Click **Publish** and copy the published link.
4. From the published link, find the **Spreadsheet ID** (the long string of letters and numbers between `/d/e/` and `/pub?`). E.g. in `https://docs.google.com/spreadsheets/d/e/2PACX-1vQ.../pub?output=csv`, the ID is `2PACX-1vQ...`.

#### C. Find the tab GIDs:
* The first sheet (usually Articles) will have `gid=0`.
* For the second sheet (Events), switch to that tab in Google Sheets and look at the URL in your browser address bar. Copy the number after `gid=` (e.g., `gid=123456789`).

#### D. Configure the website:
1. Open [`src/lib/data.ts`](file:///c:/Users/F8887986/OneDrive%20-%20FRG/Documents/GitHub/LuminaWebApp/lumina-advisory/src/lib/data.ts).
2. Enter your Spreadsheet ID and GIDs in the `SITE.googleSheets` configuration object:
   ```typescript
   googleSheets: {
     spreadsheetId: "YOUR_SPREADSHEET_ID_HERE",
     articlesGid: "0",     // GID of the Articles tab (usually 0)
     eventsGid: "YOUR_EVENTS_TAB_GID",
   }
   ```

---

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

