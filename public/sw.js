const APP_CACHE='river-reed-app-v4';
const PACK_PREFIX='river-reed-trip-v1-';
const CORE=['/','/manifest.webmanifest','/apple-touch-icon.png','/icon.svg','/data/seed.json','/data/guad-image-points.json','/data/guad-river.geojson','/data/guad-offline-map.geojson','/data/stocking-status.json'];
self.addEventListener('install',event=>event.waitUntil((async()=>{const response=await fetch('/asset-manifest.json',{cache:'no-store'});if(!response.ok)throw Error('Missing asset list');const assets=await response.json();const cache=await caches.open(APP_CACHE);await cache.addAll([...CORE,...assets]);await self.skipWaiting();})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const name of await caches.keys())if((/^river-reed-v\d/.test(name)||name.startsWith('river-reed-app-'))&&name!==APP_CACHE)await caches.delete(name);await self.clients.claim();})()));
async function savedResponse(request){const current=await caches.open(APP_CACHE);const hit=await current.match(request);if(hit)return hit;const names=(await caches.keys()).filter(n=>n.startsWith(PACK_PREFIX)).sort().reverse();for(const name of names){const cache=await caches.open(name);if(!await cache.match('/offline-ready.json'))continue;const r=await cache.match(request);if(r)return r;}}
self.addEventListener('fetch',event=>{const request=event.request;if(request.method!=='GET'||new URL(request.url).origin!==self.location.origin)return;
 event.respondWith((async()=>{const navigation=request.mode==='navigate';try{
  // Reload requests are the explicit trip download: fetch fresh bytes and fail honestly.
  if(request.cache==='reload'||request.cache==='no-store')return await fetch(request);
  if(!navigation){const saved=await savedResponse(request);if(saved)return saved;}
  const response=await fetch(request,{signal:AbortSignal.timeout(3500)});if(response.ok)return response;throw Error('Unavailable');
 }catch{const saved=await savedResponse(navigation?'/':request);if(saved)return saved;return Response.error();}})());
});
self.addEventListener('message',event=>{if(event.data?.type==='TRIP_CACHE_SUPPORTED')event.ports[0]?.postMessage({version:4});});
