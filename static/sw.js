importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "hidenseek",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.889c232b71150f777701.js",
    "revision": "3e468020452ed27ba00088915d15de9e"
  },
  {
    "url": "/_nuxt/layouts_default.a2333ff69bc45d272d19.js",
    "revision": "f2b59ca28ea699df9d209a3b48fee91f"
  },
  {
    "url": "/_nuxt/manifest.8f8f67238ac5b55b26b2.js",
    "revision": "9b5c06235fb914a78c739b6278624561"
  },
  {
    "url": "/_nuxt/pages_admin.ea525cd4267b2433bcea.js",
    "revision": "09f974344140c3e22c1ed311bb5c9f65"
  },
  {
    "url": "/_nuxt/pages_api.371fcfd5f075e8401cac.js",
    "revision": "037db67984c4a9c0421e7d66a058aa7a"
  },
  {
    "url": "/_nuxt/pages_index.e8d5b12e326dff882396.js",
    "revision": "4bbe1830c918a6240aa7747e4622b0e9"
  },
  {
    "url": "/_nuxt/pages_user.6127ff45de848dcaf532.js",
    "revision": "8596ea02a6705be08ecb85003a191ed0"
  },
  {
    "url": "/_nuxt/vendor.be2c4703d9dcfc204352.js",
    "revision": "1e2ca68136c636edb76b6c503a18b877"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

