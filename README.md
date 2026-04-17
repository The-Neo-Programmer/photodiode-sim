# Luma: Photodiode Explainer

Luma is a premium, minimalist interactive educational web application designed to visually explain how a photodiode converts incident light into an electrical signal. Built as a continuous cinematic explainer demo rather than a traditional section-based website, Luma offers a guided scroll-linked narrative that explores semiconductor structure, reverse bias physics, and the generation of photocurrent.

## Learning Objectives

By progressing through the Luma experience, users will understand:
1. **Device Structure**: The internal layers of a p-n junction (p-type, n-type, and the central depletion region).
2. **Reverse Bias Operation**: Why photodiodes are operated in reverse bias (to widen the active region and improve response speed).
3. **Photogeneration**: How incident photons generate electron-hole pairs inside the depletion region.
4. **Photocurrent Relationship**: How increasing light intensity directly boosts the resulting photocurrent, while remaining distinct from the minimal dark current.
5. **Optical Signal Detection**: The translation of a pulsed optical data stream into a synchronized electrical waveform.
6. **Real-world Applications**: How these concepts apply to modern technologies like fiber-optic communication arrays, smoke detectors, and IR receivers.

## Features

- **Seamless Cinematic Progression**: A scroll-linked transition engine powered by Framer Motion, blending 9 different scientific scenes without abrupt layout shifts.
- **Pseudo-3D Visualizations**: Highly optimized 2.5D layered semiconductor cutaways utilizing CSS depth and parallax instead of heavy WebGL.
- **Interactive Control Panel**: A restrained utility sidebar allowing users to empirically test the effects of varying light intensity, reverse bias voltage, and operational mode (continuous vs. pulsed).
- **Responsive & Accessible**: Optimized for robust viewing on single-page browser experiences across devices.
- **Premium Acoustic Design**: Optional ambient background tone generated with Howler.js strictly bound to user interaction loops.

## Deployment

Luma is optimized for instant deployment via **Vercel** and builds atop the Next.js `app` router system.

```bash
# Install dependencies
npm install

# Run the local development server
npm run dev

# Build for production
npm run build
```

*Built with Next.js, React, Tailwind CSS v4, Zustand, and Framer Motion.*
