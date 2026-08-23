# Adding Background Video to Hero Section

## Overview
The hero section now supports background video with automatic fallback to the SVG graphic. When you add a video file, it will display automatically.

## Video Requirements

### Recommended Specifications
- **Theme**: Growth metaphor (tree growing, plant germinating, organic growth)
- **Duration**: 10-30 seconds (will loop automatically)
- **Resolution**: 1920x1080 (Full HD) minimum
- **Aspect Ratio**: 16:9
- **File Size**: Under 10MB for optimal loading
- **Format**: MP4 (H.264 codec) and/or WebM

### Video Settings
- Should be suitable for background use (not too distracting)
- Natural, subtle movement works best
- Consider using a muted color palette that complements the dark overlay

## How to Add Your Video

### Step 1: Prepare Your Video Files
1. Create or obtain a growth-themed video (tree growing, seed sprouting, etc.)
2. Optimize the video for web:
   - **MP4 format**: H.264 codec, 30fps, 5-8 Mbps bitrate
   - **WebM format** (optional, for better browser support): VP9 codec

### Step 2: Place Video Files
Copy your video files to the public folder:
```
lumina-advisory/public/videos/growth-tree.mp4
lumina-advisory/public/videos/growth-tree.webm  (optional but recommended)
```

### Step 3: Video Behavior
Once the files are in place:
- ✅ Video will autoplay on page load
- ✅ Video will loop continuously
- ✅ Video will be muted (no sound)
- ✅ Video will display at 32% opacity with dark overlay
- ✅ Falls back to SVG graphic if video fails to load

## Finding or Creating Growth Videos

### Free Stock Video Sources
1. **Pexels Videos** (https://www.pexels.com/videos/)
   - Search: "tree growing timelapse", "plant growth", "seed germination"
   
2. **Pixabay Videos** (https://pixabay.com/videos/)
   - Search: "plant growth", "nature timelapse", "tree time lapse"
   
3. **Unsplash** (https://unsplash.com/backgrounds/video)
   - High-quality nature and growth videos

### Custom Video Option
If you want a custom video created:
- Commission a timelapse video
- Use AI video generation tools
- Work with a videographer for branded content

## Alternative Video Names
If you want to use a different filename, update line 20-21 in:
```
src/components/sections/HeroSection.tsx
```

Change from:
```typescript
<source src="/videos/growth-tree.mp4" type="video/mp4" />
<source src="/videos/growth-tree.webm" type="video/webm" />
```

To your preferred filename:
```typescript
<source src="/videos/your-video-name.mp4" type="video/mp4" />
```

## Testing
After adding the video:
1. Refresh the website (hard refresh: Ctrl+Shift+R)
2. Check browser console for any errors
3. Verify video plays smoothly
4. Test on mobile devices for performance

## Current Status
✅ Video support implemented with fallback
⏳ Waiting for video file to be added to `/public/videos/`

When no video is present, the system automatically uses the SVG graphic as a beautiful fallback.
