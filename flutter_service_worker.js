'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "479d60fc68c0ceed1eddd79c1dc2fda0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "1a91f2b2b5bcaad4bc3e00379d770a54",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9651639fdb5928c22efe35ad9635282a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cd1aabf9916606b97a81762e82aa2823",
".git/logs/refs/heads/main": "fdc1e2b94ad87de6c4ff870acfbc82d7",
".git/logs/refs/remotes/origin/main": "48451b170a01f041071f983c24e2f9c2",
".git/objects/01/d0d52d690d11c5502c6c05edf8e6527b817813": "dff91b7445bd228c01606f00b11a5b24",
".git/objects/03/359bc51b71b9052b5dd9a12ca2d890adcdcd45": "15e4d983e4607f7447e5eda255c0d1a1",
".git/objects/04/20b2b6989b8e8dbb7a3679d8b3c94132ddd823": "5e13eacd2292a3de55b92cf9fc54d6a7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/06/a5d4703a56c4e4e79d8b7277bc54c2dc96521f": "6c52101ebad4924713a979811937a9b2",
".git/objects/07/24b6c0c1af459392ac459dbde0b9289592d993": "7dda567dad47112b47ca7b0580ff2908",
".git/objects/08/939b41299067cdcc25771183eed26b06267af1": "4373d99c8adcbeb41f03f02230d5cbe0",
".git/objects/09/7cbf751a86e052a5853f5316b8d44d14285199": "60c56e344e015749100141f5b0f1d1f9",
".git/objects/0c/61af4a7113bf91b108ac466e377228c78c1b1f": "c7664bf31e2a22ae295e08db4cbc14ac",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/11/a1047e1538861026713529eab12c27ff3a16da": "4bb35f64e69496c65f7c1bba2a4b3e01",
".git/objects/1e/dc4358134f7597cb829a3ec8c032eaf4caafdf": "c34d52b6569b7c5beb69784631539a47",
".git/objects/1f/31eeeca600ba353dbdfd91a89f5264bea863ba": "daf748a8720c8532c7d72735e4bf9046",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/0987c2dd13c7a0312ff664d8db0d4d63e07170": "817cb91ac2789cbd5d76c5c584ddd533",
".git/objects/2a/c4a2104d5156ae17afae47fc28d001cc64005a": "dca9d7683a5a3ca4e7c14d09a4defb31",
".git/objects/2b/cafdc765914b7f19034cd7d9f6ce664c329db9": "107c48632b97844e2c3c6c0a5b5fa946",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/32/d4c7933de5cdca709fa6daed760ddd58a912a8": "97bef28fa82024be5a44e9a6b0ffcbaf",
".git/objects/32/edf0dcb5203562e32505755a87b5b1bc0991f8": "f36447d17f4bc8df6d49b39b7dda52c5",
".git/objects/34/b421022dd4d08bfe3de2c4737c739d783c0627": "08985924c13e998e022082bd17cbb264",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/39/4a171f9483652ea1c85f7e41a20b0b6faca70e": "a6246c7e339fb99ab42af8aad27e6968",
".git/objects/39/fd136b4f050b15dc69683e673a9ae1a3657e24": "221f435ee2cd67360cda049d7d117c2b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/4413f3fffeeb5222486b1349d81d594e5ac41e": "a756bd4d19b1068e12fc078f8e8c641c",
".git/objects/3b/ea4d8b83428c3de28792057a0825a6d9b3e1ec": "784ff0d920caba0deecb6385b9f0db5b",
".git/objects/3d/2c97e7fab503111c34401b356e6501415f0575": "bc75b032b9a3112af94b31ade0f9c88d",
".git/objects/3f/222c5fe80239301497f0da4b3421fd7313fbc8": "aac1e35e4fca4585bf3b4366fd4e224a",
".git/objects/41/dd972772498a9bd180248e1099d2526d0a2b44": "6dee0cc24d62937dfa24fe43db82bbbd",
".git/objects/43/2c4ae55f3d01b36358124fc415a64f0ea4ec42": "9aeb3365e8c69cacd0bbbea14f75aee6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/45/c5c2d601aae13dafb2ef8091bb93513d1777cf": "542843c9bb18d6379df155c39ac3efaa",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/7616a6230358e85aaed39ad64b13dbaf6e024f": "66847c929201185ae39c4a8f8736560c",
".git/objects/4d/fdc667ff45012cda87637b1d80fb6d7807d411": "43f5b1871d5967e4a30fa585b7ff54a1",
".git/objects/4f/a1e8bb2e7c790f62bf41d8e4bf211b3b899c13": "319ecaf0783298279d8efc18e14f8740",
".git/objects/51/609ec726331f2129401cd5392bc4d6c9de19d7": "8317f0cc83e52810c9391a047893f23b",
".git/objects/52/9ff2a69faa50be1c597074a61001dc0622ead2": "9ec317a7e5faf64025a2c68e9bf8c817",
".git/objects/52/b57771ad798a6913654979827f83df77de657f": "caf1bb0665bb460b2c29ffe60a8a82db",
".git/objects/53/1ec0165e0318de3691f33489cd1efd9baf7251": "701f912b580b9672fdfc2ef9a9ee7982",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/56/78e753c8a09023d9a7a6c62e4cca853e632c88": "50577de69ac899f6f0389e41e1c7c73c",
".git/objects/57/292bb8a89a502434a14aaf7a765edfdc8ff362": "fa8d2f5529135b8faa109a38971c0207",
".git/objects/57/d64d66b8cd0ec9fc25a68621704ecadc9a82fc": "992fb9ef07622fe689327a20f5a53e4e",
".git/objects/5c/57cf8585f9ae4bddcc7b7a0dc455a572d215ee": "ad5fb9d1ab2785fcf3d05d5c48779511",
".git/objects/5c/f13f4ef648486541bd5d93254f227a6ba957bb": "a4f4551ef2c735d253082493316162da",
".git/objects/5d/19942d71b6d57d4be8565c4fa2991336a22088": "567a5b5ced3c204c47e8d70abe6a57f4",
".git/objects/5d/6b7d5bdab4837e8b0802846f3e0724c16a4579": "ab44ac82c1e6c0fd2bf676a38109808c",
".git/objects/5f/b1ddb3d86d53ed2c1a9b05cc803a54b26ae1b4": "ab4e764eb985e7a42c9de5d8becade48",
".git/objects/60/31c5e53791e52691436c957849d6dee405545c": "e158d4b87b022441392caee605fb60da",
".git/objects/62/04ee450ad9faeaf94274d4563c0620938c56f1": "fa0da0ca71244d198db8d72aac0b8f7c",
".git/objects/69/b287f7ee1f60925eb9920ec55801ca04a81770": "491efa5acab3806c862172b28359b656",
".git/objects/6c/80525b64998ac13e2acdf1795e0eb9f5e21ae9": "0870ef1830ba4c1c5d38b9b7c7307ea4",
".git/objects/6c/8fd107fbc18978e7a57bbd943a32cae1c0a357": "7ff9af8767f7309cd1541f2e9ce32956",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/72/c26c75200d49648f61120c4c8362b647e0171a": "e2d1b2d19fe45dfeea527d338e1ed6a0",
".git/objects/73/a593ab2e46a290502620519a7f49660f9d50fb": "c9cd8a6efcfcf0a8a08144f9896af9aa",
".git/objects/78/1c5d952834a4792e462125afe5f486eae080ed": "dc44af0666ab2ee2ee8c2c206d63c598",
".git/objects/78/282e3614fbbffd2613ddef08ae8f112863d216": "e228aec6e483822d4170302107f173f0",
".git/objects/7b/88b311bd8901f64e13e2525e43ddb5f1946336": "e955ba550eda2732ed79255c80b2fda3",
".git/objects/7e/a76ab6416760b3943471566d99935e20651a30": "5801dbb45628e2a415062c802b475f3c",
".git/objects/80/2ffb37b0c498dcc59e49aa7687e62bc2768b61": "fd9377a6dcc12ab5a341f61f523327d6",
".git/objects/82/60709e4555bd391a6d94f93b5da7feebdda064": "0e321951ed3d2b24b7fe9958ea36f59a",
".git/objects/85/a3c838cda9e6f854950743c7e18d961456864a": "56e2e79437f61d636625747ae3a66a74",
".git/objects/87/b76751e491f085f8a603f2ee1de86b7a5513d7": "ca2086bd179550a842545cb6aefbeee6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/95845bdec4b2321388e81e590abfecf075684d": "1cd901a6e1fa7c5108be83fab7847b41",
".git/objects/8b/a8bec8ea637ae20e07706e46522fa232117fa8": "0e5b08f9e2f86a834472d0ffc09431b4",
".git/objects/8c/de2fd1de1f8f9779c8401eb08a0cf7d2fa5b85": "2bd6dcd4b105c2370372d19f3a4da8ed",
".git/objects/8d/309bdea2283d97178a512fbf0f6223e9e3dbb6": "396916ca8b008a18d908e29a2ac52994",
".git/objects/8d/fc50a07e0a5c4d87efe610b39f5a04f8d0220d": "1a5e9c55ac1491c38b386e9f7db68f4e",
".git/objects/8f/226e61162cdd937245e4a5c02e273839e4f379": "eaa58d043221c7ccb61250a4967b9e5f",
".git/objects/91/c4338addbf58b051c814d9ec37a4160cab3725": "aff74e80e9a0e1412046da05905d29e5",
".git/objects/93/8d4bcb77c979015186a6adadde2f63af14f413": "f92b513b0c143fa0b2e16bbc48d352cd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/a8845f23401e9c7c04e523dfbedc9d6bff41ff": "393ca55b2cbad60d8ac1bc01c5021994",
".git/objects/97/35523aa239ca6c61582e7c740cdcf62899181f": "fe223d6aa20919e008fb76d396618a3c",
".git/objects/97/923a7a2bb3e38c85dcbfa2b630a7e76cca2703": "147f15f01e954db4f5477ac5547ac25c",
".git/objects/97/f1091b4a5367112c410efd34dd5568131d0363": "00ae87087ddc446e504cb538f44f2bfd",
".git/objects/99/bd2fc8ce45d38a0f7389089d1dc2a52681eb70": "314168a58a96ae8b31c08e07eaffb1ea",
".git/objects/9c/b59e381f4002bda7af2b397da0c2e0b8e96adf": "9481f86163c5071a70c4e602dcdb6b4d",
".git/objects/9d/d14b6102e261282a2d4d2b0b96cb1bd43a4bd6": "dd3260a9a484a3a54421e295007853d1",
".git/objects/a0/2be8eb19644c0ef72b9a3f11ca030359dc37e0": "164784fe55f542ebb4eb289cb4f0be11",
".git/objects/a1/e1898a22c8c357d23f5343bea4064ad5d73f30": "f5139d478210323716795313aff7e298",
".git/objects/a7/74b22d894ad1339af4a4873eb3e3b16901cbdf": "995d1aa59ec1eb1e826addd9edab4ccf",
".git/objects/aa/afbdd17933e8e75c5bcec22ee7cb563d38dbb6": "6dd3b7caeeac2b51076e9d37b38aac13",
".git/objects/ae/29e96c3c77022a3502731106d90db10fc45da3": "0135d16837f2971388e7371f9b344636",
".git/objects/b0/c7aa480b6f54428cf073e92c17bd212f8b3a28": "0ecf9c4d0b3830057126d77d9a57351d",
".git/objects/b1/10f3a2314c17437728e054b0db87448f24edbb": "49371c80b40578ac2f9b4fb7494f4a24",
".git/objects/b1/ee41f5788463b8ef2dc0f2ff5968b34895e5b8": "1733c9f61708231a8e955dcab8161736",
".git/objects/b5/1f021fa8823fd09db12166b0469dc21f5a3ef9": "01d68f687d1185851839572820939a9f",
".git/objects/b6/7ae79037a531e3f55e5397c73e7c7e8d8ce6be": "522d9628faad56a454a55ea9c14209b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fa51d85ebf62f01499f3c50efe277dbfd5db6b": "0262d062042df99ee26fe07cb9cd06bd",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/a2c913092b8fd6329242a52e990eed6c0ba6ce": "3c04171546fa1c9c752af79a01ddb625",
".git/objects/c2/0a40e397c00daf2ce273c1c8769b8644377c9f": "c8a1870afc78229a93abe1ff5374bc95",
".git/objects/c2/47c163720eeffe41d2c046119798b50c6f451d": "d96f39e735106d859bb1a755e3fdf9b0",
".git/objects/c7/6d06e8ce255c24a044c046a9c1045af9191159": "5f18c7ee0b0892e3604ab37014c2d94a",
".git/objects/cc/8609fb28233761dcb8e5b907cdaffda9441434": "f0c536fc8c3ebe414937213261b387e8",
".git/objects/cc/d5260798e8f3c275e23e19e372e1c65d489ce3": "08f2d1cd4b53d3adf74244a5487df0c2",
".git/objects/cd/7ccc1ff30f99131ca5aa2b14e34e9fac5df484": "230a5ec4e7120099630150f66706e1c2",
".git/objects/d0/37aaa5483bf487e5aaae9db31775912550a586": "d65eb490959eb6f88d6055b46e36fee0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c7af814da7dc7109e67eabd791749d7f8547ea": "16e893130c5d970ad20e31d3c2b81de6",
".git/objects/d6/cd43513b65ab8173ce51181bc3d63179a54a15": "b011feebe71c2e41113767e75fcdf652",
".git/objects/d6/e9f1296c7e14b83876b5e611b2fc7007a922b0": "d26ecf11157d69258e62580f7a852a64",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/dd/cee8c3f14005f49f5790f56a853efa418bba7b": "eb6737a64f1a4d455e435eddc15f79dd",
".git/objects/de/a49cf562184e4c24e4ef056b90be76e130a3f1": "7a73cef92be3f337f3b25c26a1922ecb",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/84921e1e5351da19dd92ac596b4d2a4cda2582": "1967d3d83a3f54656223b0b31fc2caa6",
".git/objects/e4/cb9f10039b263597b619aed62c4d63825fdc3b": "d23238e1571980fc9da36b056367541f",
".git/objects/e5/6313115ab71ca3fd5276247eb65a1276ae4ff4": "3dc79048e24461566564dc1b6a6e1d0e",
".git/objects/e5/b2d8fb0951a8ccb7299113e8c045a49c298266": "4244086a1c99ecfc06713c9e9ea6d5a2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/486c3b1db184ba22311e483b90e13c6fa3b4f0": "90c007e4b051a4cd25a23e50c7563281",
".git/objects/ea/560af3bf02a8849ca9887c5cd59da588e1e84c": "d1814a4c376683242e207d4e3100305e",
".git/objects/ea/cb620b8e16347298988b1021ca20ed9a1ef871": "b2557bc2e118bd397c72e3ef508a2ae5",
".git/objects/eb/97597a81bad9823cdcbe6502e5279b5cf3c8e2": "bade151d6ddfcc11747b1035091b6646",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/d84c56e9d5be3160ade8680bac1026047d4c5a": "d52d42b9acae39b4af48be6425541b8f",
".git/objects/f0/9e047b1ed6e89e7d9ab17a88878fbdd2458682": "1ee8a91a9233e90272f9ad6dc84e8eea",
".git/objects/f1/98dba02e795c0c7a8281eef970cf5c6496cd31": "96586571dd52bfaeab08fdd226124641",
".git/objects/f2/f600bb41b1cbe3d7a6bccfd2351711a18e2e53": "084cc97d0dc8d910b56c3d917de017af",
".git/objects/f3/26041d57f331a6c8bc21b1281091b0e3945870": "8bdac84c1ba58a69b311b3fbb255ca16",
".git/objects/f8/d204e4ec36d68ef1f2d7de3b8b4fb17c3cfeb5": "5afa7a62b7ea95d35e5bbaa897999da6",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/2ab09a81e8a873a7a99b92e6aeeaf3f52dd0e2": "d58f50885ba1085b1f77dc596632950d",
".git/objects/fc/c6b10b7939dc0582a8f9e983d2cef54d9c7d5f": "2a5ea8b7e11e3e1ae3dd60a587ecf771",
".git/objects/fe/1e92481f9716bf491a53199836cac1a31af72f": "a2d8c656aa069536c065fa3f76f29288",
".git/objects/fe/aa7966af684411bf9640f5547e90517d04de88": "e3bd66f5e6eddb6814db5c405c5a66c2",
".git/ORIG_HEAD": "8eaef983e832273670ed346e566fe796",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "87bcf9b07d1709c75656d5f2d777a7be",
".git/refs/remotes/origin/main": "87bcf9b07d1709c75656d5f2d777a7be",
"assets/AssetManifest.bin": "3b9805433902edae5f09315875736f06",
"assets/AssetManifest.bin.json": "ad6742c7d861fb82e2c81bdc7689d60f",
"assets/AssetManifest.json": "bab5675794ae45dcc8a2e9ee84efd2c1",
"assets/assets/images/1.png": "31bf39928e4d0b1beb5fe048b951eaae",
"assets/assets/images/background.png": "4ceda28033e3c4e87fdf86e839263811",
"assets/assets/images/Background1.png": "67f0b53facdd538dcf12ccfb54f478ea",
"assets/assets/images/bow.png": "5f933014fcf5d34161012f755f243ca6",
"assets/assets/images/dhanush.png": "53360f84d0349d622684d12750d5ad1e",
"assets/assets/images/item_0.png": "33e18b9a5655b10248e61df444094498",
"assets/assets/images/item_1.png": "b632c8b26618d74b3c903506d598a4d1",
"assets/assets/images/item_2.png": "f02e2094c3545291abc1b9983905ba32",
"assets/assets/images/item_3.png": "e0840d1a6479dc24dd62ec8c1a7dd0d2",
"assets/assets/images/item_4.png": "287179a4186ca514927c98223f190f7b",
"assets/assets/images/item_5.png": "2442d47cb5c2399ee787fbd0e9e8ba16",
"assets/assets/images/item_6.png": "f4450db8a08408bddeb07ded85acde5a",
"assets/assets/images/logo.jpg": "fd7e71c507c412cfdae9b63a50fc427a",
"assets/assets/images/mala.png": "27b51e9135625620b8d4967f4032c360",
"assets/assets/images/mandir.png": "f07825c40b60bbb7b5b26098538ed160",
"assets/assets/images/mukut.png": "47168efb8cc4f0ec0fb1902940d32751",
"assets/assets/images/ram%2520splash.jpg": "ff3efa31f4be12d57f3f31988c9e2af2",
"assets/assets/images/ram1.jpg": "c0c8c84d4735424be2f81f8beb9ea7e0",
"assets/assets/images/ramji.png": "9cc7e84337a56550c55b7645e990e434",
"assets/assets/images/ramji1.png": "11d037b06e9be44a88900571d8b8738c",
"assets/assets/images/rudrakash.png": "efca3283ae7522c905ecd8bc9d1f94d6",
"assets/assets/images/splash.png": "9ef25f77f81be1ce36176675dc7765b7",
"assets/assets/images/tilak.png": "ece0234572a3a2a3cb94d35a84e439c1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "d35f6dd11b9736e26ec2c74d4b8c186b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa0ae7f13a056c427a67c72931e2d1f5",
"/": "fa0ae7f13a056c427a67c72931e2d1f5",
"main.dart.js": "60f296d05e41e4727cf77772ca5e538a",
"manifest.json": "ffc7a96083998f09b675fb6ebf8454f2",
"version.json": "ff6ac57128c2eeed94cd801244441182"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
