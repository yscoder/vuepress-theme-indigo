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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2f085b4ff2abb5ee6da89bca5641d0b6"
  },
  {
    "url": "assets/css/8.styles.6aaa9962.css",
    "revision": "47f9a87dfeb4e6077d9b26f6226eec65"
  },
  {
    "url": "assets/fonts/fa-brands-400.9404b3cb.woff2",
    "revision": "9404b3cb62fa977e95ceb5b53044f192"
  },
  {
    "url": "assets/fonts/fa-brands-400.c601db56.ttf",
    "revision": "c601db56ffa80d05739b42d9c9788c31"
  },
  {
    "url": "assets/fonts/fa-brands-400.cc6aff50.woff",
    "revision": "cc6aff5040868e4b27fdcfdaa4647746"
  },
  {
    "url": "assets/fonts/fa-brands-400.e2a7835b.eot",
    "revision": "e2a7835b2b25aab252c3506cfdfd6507"
  },
  {
    "url": "assets/fonts/fa-regular-400.0b697cf4.ttf",
    "revision": "0b697cf43612b2764c55b3ed9eae0934"
  },
  {
    "url": "assets/fonts/fa-regular-400.28ec6d38.woff2",
    "revision": "28ec6d38ccb96288be39293dae9ba767"
  },
  {
    "url": "assets/fonts/fa-regular-400.8c986198.woff",
    "revision": "8c98619845ad2a91084e0b881e0671e4"
  },
  {
    "url": "assets/fonts/fa-regular-400.e07d72d7.eot",
    "revision": "e07d72d705d882694ab4a4efce9f7104"
  },
  {
    "url": "assets/fonts/fa-solid-900.24f9359f.eot",
    "revision": "24f9359f2b036d41c1aa739942f86024"
  },
  {
    "url": "assets/fonts/fa-solid-900.4ff89f93.woff",
    "revision": "4ff89f9329d4a4c28f58dd5ef7f08651"
  },
  {
    "url": "assets/fonts/fa-solid-900.9c39a8a4.woff2",
    "revision": "9c39a8a45df792adb54b794182b5dba2"
  },
  {
    "url": "assets/fonts/fa-solid-900.af4698a4.ttf",
    "revision": "af4698a4a8ea6baa01c4c8bc3969f8e2"
  },
  {
    "url": "assets/fonts/Roboto-Bold.39b2c303.woff2",
    "revision": "39b2c3031be6b4ea96e2e3e95d307814"
  },
  {
    "url": "assets/fonts/Roboto-Bold.dc81817d.woff",
    "revision": "dc81817def276b4f21395f7ea5e88dcd"
  },
  {
    "url": "assets/fonts/Roboto-Bold.e31fcf18.ttf",
    "revision": "e31fcf1885e371e19f5786c2bdfeae1b"
  },
  {
    "url": "assets/fonts/Roboto-Light.3b813c2a.woff",
    "revision": "3b813c2ae0d04909a33a18d792912ee7"
  },
  {
    "url": "assets/fonts/Roboto-Light.46e48ce0.ttf",
    "revision": "46e48ce0628835f68a7369d0254e4283"
  },
  {
    "url": "assets/fonts/Roboto-Light.69f8a061.woff2",
    "revision": "69f8a0617ac472f78e45841323a3df9e"
  },
  {
    "url": "assets/fonts/Roboto-Medium.574fd0b5.woff2",
    "revision": "574fd0b50367f886d359e8264938fc37"
  },
  {
    "url": "assets/fonts/Roboto-Medium.894a2ede.ttf",
    "revision": "894a2ede85a483bf9bedefd4db45cdb9"
  },
  {
    "url": "assets/fonts/Roboto-Medium.fc78759e.woff",
    "revision": "fc78759e93a6cac50458610e3d9d63a0"
  },
  {
    "url": "assets/fonts/Roboto-Regular.2751ee43.woff2",
    "revision": "2751ee43015f9884c3642f103b7f70c9"
  },
  {
    "url": "assets/fonts/Roboto-Regular.ba3dcd89.woff",
    "revision": "ba3dcd8903e3d0af5de7792777f8ae0d"
  },
  {
    "url": "assets/fonts/Roboto-Regular.df7b648c.ttf",
    "revision": "df7b648ce5356ea1ebce435b3459fd60"
  },
  {
    "url": "assets/fonts/Roboto-Thin.7500519d.woff",
    "revision": "7500519de3d82e33d1587f8042e2afcb"
  },
  {
    "url": "assets/fonts/Roboto-Thin.94998475.ttf",
    "revision": "94998475f6aea65f558494802416c1cf"
  },
  {
    "url": "assets/fonts/Roboto-Thin.954bbdeb.woff2",
    "revision": "954bbdeb86483e4ffea00c4591530ece"
  },
  {
    "url": "assets/img/brand.734f817b.jpg",
    "revision": "734f817bbb181d0180d7b37749769cc0"
  },
  {
    "url": "assets/img/fa-brands-400.087008e7.svg",
    "revision": "087008e7107335199638d65287e3c344"
  },
  {
    "url": "assets/img/fa-regular-400.e5e78f19.svg",
    "revision": "e5e78f190eed0ab29a60f9ebfc613f27"
  },
  {
    "url": "assets/img/fa-solid-900.7407dd0e.svg",
    "revision": "7407dd0eab45462a3e36bb3822d8edc9"
  },
  {
    "url": "assets/img/face.55c9d89d.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "assets/js/0.66cca5b9.js",
    "revision": "4ea73f65aac8379a1a68ac389f2bc5cf"
  },
  {
    "url": "assets/js/1.8cb983ee.js",
    "revision": "cd45d81b78c2dde67f5995e7a0e432b7"
  },
  {
    "url": "assets/js/2.6a18da5d.js",
    "revision": "839b346eb0c339205d00d6aa048309a1"
  },
  {
    "url": "assets/js/3.cd3276b5.js",
    "revision": "0416ad8c4bfa3df6cbea55ca1fe61904"
  },
  {
    "url": "assets/js/4.a64048d8.js",
    "revision": "c303b18ceaec2e3089c5deeb077d06d1"
  },
  {
    "url": "assets/js/5.9c11547d.js",
    "revision": "e0b385c20e2efab4148a9d10b48699c6"
  },
  {
    "url": "assets/js/6.009f572a.js",
    "revision": "b2e1a6b9383f943fa5c6b440290a4c31"
  },
  {
    "url": "assets/js/7.37118fa8.js",
    "revision": "4218346486301c4620c515dae16307cf"
  },
  {
    "url": "assets/js/app.d08bffb0.js",
    "revision": "e6fbdc8a636c70f7f261d21d35de5ae7"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "favicon.png",
    "revision": "cfa97d05be7622e0f57799d7149b93f0"
  },
  {
    "url": "index.html",
    "revision": "cdeb0499a64200285b8c512d83a1ef23"
  },
  {
    "url": "posts/cursor-offset-at-input.html",
    "revision": "30168a3138c83c8d08d91586586974d5"
  },
  {
    "url": "posts/test-markdown.html",
    "revision": "0a8824d3ecb21d71ebd88cc1ac733a84"
  },
  {
    "url": "posts/text-truncation.html",
    "revision": "ca39fb02edd1f9f441d80dbdfe260cdd"
  },
  {
    "url": "posts/vue-best-practices.html",
    "revision": "fa19f8efb0ec3285088512eaab3f5185"
  },
  {
    "url": "posts/webpack-use-lodash.html",
    "revision": "1a0df79922f47995d9f5e402715ce734"
  },
  {
    "url": "posts/write-good-front-end-component.html",
    "revision": "1e90d2a066f0d85a0900ae52241067f9"
  },
  {
    "url": "tags/index.html",
    "revision": "ba5595bc482f7b4252e274f6494c1011"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
