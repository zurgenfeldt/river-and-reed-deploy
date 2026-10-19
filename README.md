# River & Reed deployment

Built public website assets for the Guadalupe trout / Texas redfish map. This repository contains only the already-public deployment files, not browser catch journals, GPS positions, credentials, source screenshots, or ChatGPT hosting configuration.

## DigitalOcean App Platform

This app spec creates one **static site**, with no Droplet, service, database, or paid compute component. Deploy with `doctl apps create --spec .do/app.yaml`. Check `doctl apps list` before creating another app. Save the returned app ID and use `doctl apps update APP_ID --spec .do/app.yaml --update-sources` for subsequent releases. The plain Git source does not automatically redeploy when pushed.

DigitalOcean provides three free static-only apps per account with 1 GiB monthly outbound transfer per app; extra transfer costs $0.02/GiB. Account pricing and eligibility can change; check DigitalOcean pricing before creating or scaling resources.

## iPhone offline use

Open the deployed HTTPS link on **each phone**, tap **Save map for offline**, and wait for **Saved on this phone**. Test a reload in airplane mode before the river trip. Offline downloads belong to each browser/app origin: a download from the previous chatgpt.site URL does not transfer to the DigitalOcean URL. Allow Location Services for GPS. Flow and stocking show saved information when disconnected.

## Updates

Replace `public/` with the tested Vite `dist/` output from the River & Reed source workspace. Commit and push, then create a new DigitalOcean deployment with updated sources. Preserve the app ID; do not create duplicate apps. The asset manifest, service worker, worker bundle, data, and all referenced hashed assets must be updated together.

## Attribution and data rights

MapLibre GL JS is BSD-3-Clause; Lucide is ISC; application code is MIT. OSM-derived river/roads/labels are © OpenStreetMap contributors, ODbL-1.0, with the derived database and provenance in `public/data/guad-offline-map.geojson`. Public seed records retain source licenses and provenance in `public/data/seed.json`. Screenshot-derived heat locations are user-supplied, approximate, and undated; no open license or verified catch status is asserted. The original screenshot is not distributed. Fonts DM Sans and Libre Caslon Text are OFL.
