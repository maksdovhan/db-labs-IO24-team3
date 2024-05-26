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
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "32cf0359b616d5efedafae04f4bd3eb4"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.e06f978d.css",
    "revision": "5ed20f2d620cc087c653dbc676061214"
  },
  {
    "url": "assets/img/addrole.906a3580.png",
    "revision": "906a35804905ee3a44855a56a29984a6"
  },
  {
    "url": "assets/img/allmedia1.681ac439.png",
    "revision": "681ac4397f53fa1a772e6d257753c2be"
  },
  {
    "url": "assets/img/allmedia2.840da13b.png",
    "revision": "840da13b76efdf0592cdfdeba93d210e"
  },
  {
    "url": "assets/img/allroles.98f6768d.png",
    "revision": "98f6768d37c5573faa35ec69f4346a60"
  },
  {
    "url": "assets/img/allroles1.375e48ee.png",
    "revision": "375e48ee44aee99d756d033b4a419aae"
  },
  {
    "url": "assets/img/deletemedia.a21d6a25.png",
    "revision": "a21d6a25fd082e399dd0b9bae2c14346"
  },
  {
    "url": "assets/img/media1.43556092.png",
    "revision": "43556092ac6b136e292e15298b8f6c28"
  },
  {
    "url": "assets/img/media1new.4be108a8.png",
    "revision": "4be108a88f7a12dd070fc544124fea49"
  },
  {
    "url": "assets/img/newrole2.c3ea95e7.png",
    "revision": "c3ea95e70549dec2ef916b221efe498f"
  },
  {
    "url": "assets/img/relayshema.e5a2192d.png",
    "revision": "e5a2192d15b9948462f4d71eea65120f"
  },
  {
    "url": "assets/img/role1.d6590b90.png",
    "revision": "d6590b90438cd41c0d1b0cbc5a717288"
  },
  {
    "url": "assets/img/role2.c7b42fab.png",
    "revision": "c7b42fabed200371ae0c3c9d0541a66d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/updatemedia1.20fdd556.png",
    "revision": "20fdd55654f702f6e507ca1eb685c1db"
  },
  {
    "url": "assets/img/updaterole2.2900e323.png",
    "revision": "2900e32336fdff3ec3856f38c034ec50"
  },
  {
    "url": "assets/js/1.16f5137b.js",
    "revision": "7492593b4eb660326218d89b4379c0b6"
  },
  {
    "url": "assets/js/10.300a4899.js",
    "revision": "9f1c87b874beef3a41426822c2000507"
  },
  {
    "url": "assets/js/13.43f38958.js",
    "revision": "66ae9f15bfa96f8a7c88f800d8d1c5a2"
  },
  {
    "url": "assets/js/14.6f8f05c1.js",
    "revision": "a4cb7516e4d079fc85b95f56e8ccbbae"
  },
  {
    "url": "assets/js/15.41c247f3.js",
    "revision": "ebde6a07f4b669760ceb23097066115a"
  },
  {
    "url": "assets/js/16.2bc577d7.js",
    "revision": "18e9a7b58be1e7e5f75822bfa14c22e0"
  },
  {
    "url": "assets/js/17.03bea183.js",
    "revision": "142c003fec3c5fe266dce087d7c4bb4b"
  },
  {
    "url": "assets/js/18.bbb3bd3c.js",
    "revision": "0f8fcc5459702246f890a0e38ffafda6"
  },
  {
    "url": "assets/js/19.9b8f087f.js",
    "revision": "324990ca660d7ed766a310931c2b5664"
  },
  {
    "url": "assets/js/2.2db45d58.js",
    "revision": "5ff97bdd43b0cff9dfe8ba3a66b617e1"
  },
  {
    "url": "assets/js/20.af45f57b.js",
    "revision": "fc03e25f8d3a7aeb24d78189434a0df2"
  },
  {
    "url": "assets/js/21.0233abe4.js",
    "revision": "d2f1718a96166ad02d5dabac21facd89"
  },
  {
    "url": "assets/js/22.d2077878.js",
    "revision": "9f6e9904ba0cfa4dc7bc50e47142a6e3"
  },
  {
    "url": "assets/js/23.3ec6ef11.js",
    "revision": "d0e91598f11e346698d9855ebb1cde0b"
  },
  {
    "url": "assets/js/24.a9f22cc2.js",
    "revision": "95ae5959fdc4db7565c02b3a53c9ded4"
  },
  {
    "url": "assets/js/25.9b82b3b9.js",
    "revision": "2e9bc8583fc2d0dfe0e546a919f8359a"
  },
  {
    "url": "assets/js/26.e5459862.js",
    "revision": "dc642be34991c45b3789d4655eeeed48"
  },
  {
    "url": "assets/js/27.82273840.js",
    "revision": "71f0804ba7e4bb9de95f7188d5605109"
  },
  {
    "url": "assets/js/28.53b01dd5.js",
    "revision": "d874692aa1d2010679f9a96d2d7accf2"
  },
  {
    "url": "assets/js/29.0f027b3a.js",
    "revision": "24591ff2410c79551419409f8f0edf9b"
  },
  {
    "url": "assets/js/3.3a389e6a.js",
    "revision": "54c2d66a75926ab0b7e2caed46600a3e"
  },
  {
    "url": "assets/js/30.72c1915b.js",
    "revision": "1a2e0d6e76460e54e95da7b28b0af5b7"
  },
  {
    "url": "assets/js/31.3702b60d.js",
    "revision": "078943eaa46d1e14e5b8fc2b8a349e4f"
  },
  {
    "url": "assets/js/32.64477f5e.js",
    "revision": "58797fe9791ccc19eaf46c3138eaf7dc"
  },
  {
    "url": "assets/js/33.a021eaef.js",
    "revision": "9a0fc17958521705fe05b23cb5331bc6"
  },
  {
    "url": "assets/js/34.d3207739.js",
    "revision": "c7f74cb93e1553a2ff603362940cb460"
  },
  {
    "url": "assets/js/35.325767c0.js",
    "revision": "bd3eafc175924a644b31e2bc86dcb039"
  },
  {
    "url": "assets/js/36.eede629b.js",
    "revision": "f3e050d4f267dfd52fac5e1e4c94cfd3"
  },
  {
    "url": "assets/js/37.486f13f0.js",
    "revision": "7f762f64d76acc72e47051868a56418e"
  },
  {
    "url": "assets/js/38.81a8712d.js",
    "revision": "2bb739a374c1dcf49a74a782e2d94c68"
  },
  {
    "url": "assets/js/39.a74f2287.js",
    "revision": "ada835c6f58608a9853cbf74b6652d8b"
  },
  {
    "url": "assets/js/4.b09078d3.js",
    "revision": "ace42227b0d1aadd502e4c53df23fb91"
  },
  {
    "url": "assets/js/41.e16fbfde.js",
    "revision": "aeffda24886b51c5458301234e1778e9"
  },
  {
    "url": "assets/js/5.c2806c21.js",
    "revision": "9b902fcd29df1abb9e066783faac3292"
  },
  {
    "url": "assets/js/6.e4200f3f.js",
    "revision": "39f22c218599adc4f6cd5d6cce31e6e4"
  },
  {
    "url": "assets/js/7.09b986e7.js",
    "revision": "c56edd603d19580bb78af4a9f99c6b5f"
  },
  {
    "url": "assets/js/8.d86237d5.js",
    "revision": "cd353fe1326ed329056965811eb36b5e"
  },
  {
    "url": "assets/js/9.a032969c.js",
    "revision": "053e8bc1e15890032d6d3866278ed63d"
  },
  {
    "url": "assets/js/app.162858ce.js",
    "revision": "422146c48342f7cfe692edf68ed70f03"
  },
  {
    "url": "assets/js/vendors~docsearch.8644e795.js",
    "revision": "16a84ce5ba6d1d5ec9cea7b74e6fe3e0"
  },
  {
    "url": "conclusion/index.html",
    "revision": "a0c946a73e40cb34a05aabb5bb970a1a"
  },
  {
    "url": "design/index.html",
    "revision": "c047721bc86a88e03d6f90f0bee96b38"
  },
  {
    "url": "index.html",
    "revision": "c4a17160b93fceb4d3a5604e2eced217"
  },
  {
    "url": "intro/index.html",
    "revision": "652e88967508e80b559cd5acc381feb5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "de8385bfc245c29435617758280dfbf0"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "70ce9e4b4264cb2da413fa80454bb1cc"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1013e743038564ace442da231dd763d3"
  },
  {
    "url": "software/index.html",
    "revision": "d4a03cd1f5aa87b38a36c62cd332e337"
  },
  {
    "url": "test/index.html",
    "revision": "8354ac577713068c7f734ec30882e6fe"
  },
  {
    "url": "use cases/index.html",
    "revision": "be09d82a83406035d08f7d21fc331f4b"
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
