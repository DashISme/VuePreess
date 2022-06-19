/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "82b7eec6c6099c461452d2ae3d2e7dd0"
  },
  {
    "url": "about.html",
    "revision": "b7c3c8b51b8644c53b4c341b799cc02a"
  },
  {
    "url": "about1.html",
    "revision": "2acc06320d57ab476e4d6abc79a7baf1"
  },
  {
    "url": "assets/css/0.styles.694f3f6f.css",
    "revision": "ae42aa586e5b973d5a00bb108022620c"
  },
  {
    "url": "assets/img/logo.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0839b7c5.js",
    "revision": "3c68d0f6c983066fae5c0522d4a39da1"
  },
  {
    "url": "assets/js/11.d3bf0afb.js",
    "revision": "d7e132a25a081491a4ea8a5e8895cdf2"
  },
  {
    "url": "assets/js/12.202d8fc5.js",
    "revision": "e01046ac20b502860c145e6da2e7486f"
  },
  {
    "url": "assets/js/13.eb1d8a25.js",
    "revision": "81e75de88a9362b4a5d3822df070c1ed"
  },
  {
    "url": "assets/js/14.f5146dfb.js",
    "revision": "f223c6748639e8f6ba750a1f36b76ac5"
  },
  {
    "url": "assets/js/15.836469d1.js",
    "revision": "f0572cb3f5070eee6412a4d50f465579"
  },
  {
    "url": "assets/js/16.8e444ad7.js",
    "revision": "7242cda262ac426a35a84677b1e7e1bc"
  },
  {
    "url": "assets/js/17.4e4bda18.js",
    "revision": "757ae407556f3452d84b1b9342b88e2a"
  },
  {
    "url": "assets/js/18.9ece21ba.js",
    "revision": "e70a4437002af70980907a22f4cb9df3"
  },
  {
    "url": "assets/js/19.b70e68a6.js",
    "revision": "ddfe1f6795f8e8d8b813f5b19922b7ac"
  },
  {
    "url": "assets/js/2.9aa203a9.js",
    "revision": "b18d1cd99bcf5dc1a44f6f83d03df50b"
  },
  {
    "url": "assets/js/20.8128ebe8.js",
    "revision": "130e87ce0da0c85affd7c658d7792373"
  },
  {
    "url": "assets/js/3.42dcfc76.js",
    "revision": "f6d3cca122935406f973eff8cb3333b4"
  },
  {
    "url": "assets/js/4.679ffd8a.js",
    "revision": "1e3e6b625026cc962cd11189058f8b22"
  },
  {
    "url": "assets/js/5.21882a83.js",
    "revision": "51b84598c4f0f364b8a268f5006986fb"
  },
  {
    "url": "assets/js/6.267fd814.js",
    "revision": "5427869e97aa7411af1a903521878a99"
  },
  {
    "url": "assets/js/7.afd71667.js",
    "revision": "4a2a3f91fefd1e0d419cdf2eebd9a7bd"
  },
  {
    "url": "assets/js/8.c4121b8f.js",
    "revision": "78d2a776adba28ae07f3326753e1ac8f"
  },
  {
    "url": "assets/js/9.8b7a6928.js",
    "revision": "5259792996346f2c1a35e269cf6acdc9"
  },
  {
    "url": "assets/js/app.5ce1561b.js",
    "revision": "826cd29c0da4f92fef18fc1a2b6ae93d"
  },
  {
    "url": "css/c-aaa.html",
    "revision": "88c972502fdb45d7a7e76bd1bcaa4d3b"
  },
  {
    "url": "css/c-bbb.html",
    "revision": "2b8e2766a01eff7008f3d8dbc64c983b"
  },
  {
    "url": "css/c-ccc.html",
    "revision": "abb0eb682a37eb7a72a7b5cf19687a2a"
  },
  {
    "url": "css/index.html",
    "revision": "58c92c4d1e9bb699cfeb78fdb4b35abe"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "719f1894ba9acd1647825e009e933b9a"
  },
  {
    "url": "javascirpt/index.html",
    "revision": "ba18a284812b02fbadad800892134338"
  },
  {
    "url": "javascirpt/j-aaa.html",
    "revision": "2e1a5dc8bacee3005897baea6801944e"
  },
  {
    "url": "javascirpt/j-bbb.html",
    "revision": "964027e4a5668cd688bebb3bfcd92386"
  },
  {
    "url": "javascirpt/j-ccc.html",
    "revision": "04119bfb24f1eca3a907ba741f5079ef"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
