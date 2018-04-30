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
    "revision": "dadea94c2792f45e772d7d45501071d1"
  },
  {
    "url": "assets/css/8.styles.7a1efded.css",
    "revision": "e98fdff131396776f585d142f3018e47"
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
    "url": "assets/js/0.1dea69ed.js",
    "revision": "58dc3949b6de40040f2e16c314b82c59"
  },
  {
    "url": "assets/js/1.9f3090f9.js",
    "revision": "4942e2c53d036e47e9e6e1ddea2646d3"
  },
  {
    "url": "assets/js/2.0f95574c.js",
    "revision": "4406be0998c65025136ea67503546d33"
  },
  {
    "url": "assets/js/3.e32cdc76.js",
    "revision": "9b1dd7ea1f4a313dc80a900c7799a5d4"
  },
  {
    "url": "assets/js/4.ffd2664e.js",
    "revision": "dd39e511cfa984ea905ae3a269671053"
  },
  {
    "url": "assets/js/5.162622aa.js",
    "revision": "157bf9b0fc611c87a565cf15ed09041a"
  },
  {
    "url": "assets/js/6.4fa749e3.js",
    "revision": "b3c747ad2b9b7b3898a3196bdad21b4b"
  },
  {
    "url": "assets/js/7.064aacd4.js",
    "revision": "8eb27a2328aff3330c27a12023d66855"
  },
  {
    "url": "assets/js/app.abc12198.js",
    "revision": "c24bdacd8100c1280c5b8bb2d5f84771"
  },
  {
    "url": "face.jpg",
    "revision": "55c9d89de66c7f697ead1b3ac10b008e"
  },
  {
    "url": "icons/192.png",
    "revision": "68bb209813d9962fe145b690d1838fc8"
  },
  {
    "url": "icons/512.png",
    "revision": "3987835f3e7dfed8d78e559e34c49596"
  },
  {
    "url": "icons/favicon.png",
    "revision": "cfa97d05be7622e0f57799d7149b93f0"
  },
  {
    "url": "index.html",
    "revision": "2d1fc6be61031d32f9866992602cff5e"
  },
  {
    "url": "posts/cursor-offset-at-input.html",
    "revision": "63c7ea6fcb134814db9e9505bc314cd8"
  },
  {
    "url": "posts/test-markdown.html",
    "revision": "4a7a8973fe301efe8a2b44621dfb5c7b"
  },
  {
    "url": "posts/text-truncation.html",
    "revision": "95f663956b199c5411bbfac0026bfddc"
  },
  {
    "url": "posts/vue-best-practices.html",
    "revision": "5304675aad8281b9513fa92414ef2cae"
  },
  {
    "url": "posts/webpack-use-lodash.html",
    "revision": "7ba8f8ae9d42b20114e0b3ce3f11ee02"
  },
  {
    "url": "posts/write-good-front-end-component.html",
    "revision": "9baef92b140aecc08f1a34f06183d5d9"
  },
  {
    "url": "tags/index.html",
    "revision": "0845742089b7995b713ae513d71e5e72"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
