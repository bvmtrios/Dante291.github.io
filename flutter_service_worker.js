'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "479d60fc68c0ceed1eddd79c1dc2fda0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "171be898f849c5305cd2a61281801ebc",
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
".git/index": "11aa5dc225d13c78fde1ee39847a0e9f",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1a9ca6ea684433c6e424e089b4b4c5c6",
".git/logs/refs/heads/main": "0fb3676ebd0acf6a72ddda7c3fba39f1",
".git/logs/refs/remotes/origin/main": "88b2d7f7642946e656200f49f2e508c4",
".git/objects/01/d0d52d690d11c5502c6c05edf8e6527b817813": "dff91b7445bd228c01606f00b11a5b24",
".git/objects/03/359bc51b71b9052b5dd9a12ca2d890adcdcd45": "15e4d983e4607f7447e5eda255c0d1a1",
".git/objects/03/c713a005928e3b85687cb7564a2359359ab26f": "66d74011e53afeb995df8782dda7297b",
".git/objects/04/20b2b6989b8e8dbb7a3679d8b3c94132ddd823": "5e13eacd2292a3de55b92cf9fc54d6a7",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/4d04b1d9003b6df3513f247cf505bc8567d44f": "0043e985275906b963a7f885f07b36d6",
".git/objects/05/92147ba2b1eac1e5612b1dcc1b731ceba82c41": "a5b0665bd3c81a560eca1a3d516ce988",
".git/objects/06/8e20b9eb5f8a72ffa1b99d776bec444783f293": "7ec54495df4dd70a2018d031e59a7312",
".git/objects/06/a5d4703a56c4e4e79d8b7277bc54c2dc96521f": "6c52101ebad4924713a979811937a9b2",
".git/objects/06/a75658e83d19a94b0dfedec25127aaf1973d7a": "5edd8d16e91da7517f566c400e4be504",
".git/objects/07/24b6c0c1af459392ac459dbde0b9289592d993": "7dda567dad47112b47ca7b0580ff2908",
".git/objects/08/1dc0a1eb5031f9c75c4b4f474591d9ba3e99da": "e41c99dbf3ab852e4ee1a82dd86adcd3",
".git/objects/08/939b41299067cdcc25771183eed26b06267af1": "4373d99c8adcbeb41f03f02230d5cbe0",
".git/objects/08/bcace7e419396dca5c4fe6a678f197b0a99d5e": "03abcfcedf538658e3d3fed5ecaef6f2",
".git/objects/09/7cbf751a86e052a5853f5316b8d44d14285199": "60c56e344e015749100141f5b0f1d1f9",
".git/objects/0a/f47d28cbf900d4c68e797212ec7ce12e38ba48": "f33594513340d1ad6f7072437871084d",
".git/objects/0c/55c5fb014f4cdfe7cbbf71f54d20a819518480": "79f1823381517c7c57e9f9ac39a4025c",
".git/objects/0c/61af4a7113bf91b108ac466e377228c78c1b1f": "c7664bf31e2a22ae295e08db4cbc14ac",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/7eb2a4dd5e05cc2e956b9edf2f64b989f7368f": "e25d61ac95010c5e9c75227443426b9d",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/0f/4946d4dee250a7f695c1a787c1f5ef3a09ce19": "83d6678eee77fef5a70c11cb6e7acec1",
".git/objects/10/0346ec0ce907364d8caf0fa3b7af60ede1d08e": "fdc66ee4ecd46ba85af3f171cb31c60a",
".git/objects/10/35f679a2395d88a31a059150d6525ee961e656": "57eecda66532c099efc0e45e56dd4459",
".git/objects/11/07446d44c05ff367537334b88efcf60022c9d6": "e5958e9c9f71f9988c95e86b0d803546",
".git/objects/11/a1047e1538861026713529eab12c27ff3a16da": "4bb35f64e69496c65f7c1bba2a4b3e01",
".git/objects/14/d19bc7fd3cb47da12aedc0b9f6074a6129dca9": "118ec1e2653928caefb878a86de18953",
".git/objects/16/015cae9676b270f44141ac28bf471d437fc9e4": "239bc6da8bc9e4cc4c43c5ad45950590",
".git/objects/1a/a4522c769f74c0fa953845824547482cf7ab5d": "03b79e17cb272cc41d76e5f20d870004",
".git/objects/1b/40776c6fb4d0c718b5f97e8a93648382be7314": "a57e31bc568c945749036f14042fecaf",
".git/objects/1d/6ea10508f00b94ce1969f3d299d0aa822581ba": "835e280b0bcf7b89c7e8989efc5b8e57",
".git/objects/1e/11eb4e01a4fab72ad1d4f01d817e271f3a1c54": "5f25ba18a1a1df29c9476cbf28e7e700",
".git/objects/1e/dc4358134f7597cb829a3ec8c032eaf4caafdf": "c34d52b6569b7c5beb69784631539a47",
".git/objects/1e/e1b2a502b4c0c8cd8e8f96ca09d03e93770c76": "7b1affca2557a00f811c6825c56f5480",
".git/objects/1f/31eeeca600ba353dbdfd91a89f5264bea863ba": "daf748a8720c8532c7d72735e4bf9046",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/21/27b380734e15b7502cb85ae4cfd9af0105856a": "798e1d774c3a99d163b8785dacf9519e",
".git/objects/21/38690d3d1936fa8bbc4eb3ccc91ebfcc669ceb": "5848b9fa0d449313e15df93606a3edee",
".git/objects/22/0987c2dd13c7a0312ff664d8db0d4d63e07170": "817cb91ac2789cbd5d76c5c584ddd533",
".git/objects/26/0d48be1b7c826b73e276a63a21fad86e11c350": "4d0ff69f6f0ab6404c50bb1c1210cd70",
".git/objects/26/39e795bada8f464366b2272ee8ac57b142e526": "a2496df986278340c3ab8f39bf85c3cd",
".git/objects/26/c7f4a9715f23538a25b4174af6272ac61b11ca": "59202a91915ebe621d45c9b295c13f71",
".git/objects/26/e8d5e4fbeea69b59afac42368ade88d5a17815": "8ea5354333bae1579c386a5f6e22d89f",
".git/objects/27/b54f02f0bc462caa1c99aa1d9981b8c8d687c4": "a7680bf0be3726b5d6ffda05f4368700",
".git/objects/28/af3cbaf4a5e21d4f40267a4b948892922fc220": "5fbf5dfade8f5f6a7da5c6a338aa5cfb",
".git/objects/2a/c4a2104d5156ae17afae47fc28d001cc64005a": "dca9d7683a5a3ca4e7c14d09a4defb31",
".git/objects/2b/1fdd09e42e78466f0552b4673e7e4e64b0dc76": "2ad869dd48837a8a274c7b7e51d272df",
".git/objects/2b/cafdc765914b7f19034cd7d9f6ce664c329db9": "107c48632b97844e2c3c6c0a5b5fa946",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/31/9bf7c06063c40045b87ecba3583fcf16cdd030": "d80449eeed890416926f10fea1c9c7c2",
".git/objects/32/d4c7933de5cdca709fa6daed760ddd58a912a8": "97bef28fa82024be5a44e9a6b0ffcbaf",
".git/objects/32/edf0dcb5203562e32505755a87b5b1bc0991f8": "f36447d17f4bc8df6d49b39b7dda52c5",
".git/objects/34/b421022dd4d08bfe3de2c4737c739d783c0627": "08985924c13e998e022082bd17cbb264",
".git/objects/36/6a87440e285bbc4b3fa20d2f4d05644e68bd74": "b2da53437b82d64fe0a3b3b4aafffd0a",
".git/objects/37/16ee12007bbc262155b934a145a3f30bda8a66": "18ca0eb58f6693d30c63d2da0f2c7cfa",
".git/objects/38/e6e78068af546ef4d0beca7e0de4e910314f23": "52869e48ea5b39a2999370aab2346d69",
".git/objects/39/2db17644cf994c4e4c6235e39858ca30f875bb": "5ecf0727016e1026160000dec2ba86e6",
".git/objects/39/4a171f9483652ea1c85f7e41a20b0b6faca70e": "a6246c7e339fb99ab42af8aad27e6968",
".git/objects/39/d039aa9d7f66f4a84a8e06e8d4525c134b57bf": "69862fe9e79aaa0a3a45c6e0b28b5384",
".git/objects/39/d7704490a14b4388a7d68ff1b1f298dc0cde18": "3ccc1461e76b79e675c4418cb14cd33e",
".git/objects/39/fd136b4f050b15dc69683e673a9ae1a3657e24": "221f435ee2cd67360cda049d7d117c2b",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3b/4413f3fffeeb5222486b1349d81d594e5ac41e": "a756bd4d19b1068e12fc078f8e8c641c",
".git/objects/3b/ea4d8b83428c3de28792057a0825a6d9b3e1ec": "784ff0d920caba0deecb6385b9f0db5b",
".git/objects/3d/2c97e7fab503111c34401b356e6501415f0575": "bc75b032b9a3112af94b31ade0f9c88d",
".git/objects/3e/75fa67eff253dc01ee2b6829f5eee674ed6b71": "59ec2af76ac745eabe20adb235b3fbbd",
".git/objects/3f/222c5fe80239301497f0da4b3421fd7313fbc8": "aac1e35e4fca4585bf3b4366fd4e224a",
".git/objects/40/bccf0c35ce7761157e00fbb22d3d828a0ccb4b": "31e676632f010d8c65314bfdb783f345",
".git/objects/41/646d624c2f9086bd7acf224198d9164f513fb2": "5d040f6e57a62030759efb389901cfef",
".git/objects/41/dd972772498a9bd180248e1099d2526d0a2b44": "6dee0cc24d62937dfa24fe43db82bbbd",
".git/objects/42/05a21cd3472979f6e3fda8ce558da4ab1e2b92": "d8c354067a44ef68539a1a4a94299669",
".git/objects/43/2c4ae55f3d01b36358124fc415a64f0ea4ec42": "9aeb3365e8c69cacd0bbbea14f75aee6",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/0df1596bca5fd4152329c6ee940e8b03b3741d": "c43db3c938e3f0f4cb5c3d2c91d66d8b",
".git/objects/45/7e9b437ff688e843b6739109167a34b260758d": "90edf8b7a349e78eb3a05ce275569be1",
".git/objects/45/c5c2d601aae13dafb2ef8091bb93513d1777cf": "542843c9bb18d6379df155c39ac3efaa",
".git/objects/46/1fb0a32c9c0460f4ce751ffc9918a4e95ed822": "68316e93ec471de6c2d08e8906ea5a6f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b82a736bccb346b80f37eb814c2bd6f5edf799": "c5cad140f29c5964fef8b6465ef96887",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/49/9281fc1d96d75c2e2b3366f1061cd8eebbdee7": "14e0f5bb13effc28b8e2a9d82fdee54e",
".git/objects/4c/d1da0bae121f5e2fdb407965dc212a17e20f9b": "55630965f47b46f5305bc77f515f33cd",
".git/objects/4d/59538709e558c5f3aad5fb44988d1bde4b5e40": "d5fd6dd4f599d2d38731f14ce9f43206",
".git/objects/4d/7616a6230358e85aaed39ad64b13dbaf6e024f": "66847c929201185ae39c4a8f8736560c",
".git/objects/4d/fdc667ff45012cda87637b1d80fb6d7807d411": "43f5b1871d5967e4a30fa585b7ff54a1",
".git/objects/4f/a1e8bb2e7c790f62bf41d8e4bf211b3b899c13": "319ecaf0783298279d8efc18e14f8740",
".git/objects/51/609ec726331f2129401cd5392bc4d6c9de19d7": "8317f0cc83e52810c9391a047893f23b",
".git/objects/51/7bb6a8c15154362946f4eaa72bfa84a7410085": "70569d46f20e4c6c5c7ccf997d2fbb8b",
".git/objects/52/9ff2a69faa50be1c597074a61001dc0622ead2": "9ec317a7e5faf64025a2c68e9bf8c817",
".git/objects/52/b57771ad798a6913654979827f83df77de657f": "caf1bb0665bb460b2c29ffe60a8a82db",
".git/objects/53/17eb4e101c0f556073ecbed0dc1a760bbcea29": "b77799a6b2c8b2e166ee304bb6db6230",
".git/objects/53/1ec0165e0318de3691f33489cd1efd9baf7251": "701f912b580b9672fdfc2ef9a9ee7982",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/53/b1d911c0de496a8dd026740393d1493683d9f6": "4d02544aa3ff2148c318603d4d6a54c1",
".git/objects/53/c3aec6b420c84375dcf6d9f0d9537fb6791a01": "90d9315d06ad7693296a87c7ca079d5e",
".git/objects/54/1a8edf98f103d75e3c7b3382c394407bdc1d05": "ab79ecb49cef8471e9a32b0ea9962be2",
".git/objects/56/78e753c8a09023d9a7a6c62e4cca853e632c88": "50577de69ac899f6f0389e41e1c7c73c",
".git/objects/57/292bb8a89a502434a14aaf7a765edfdc8ff362": "fa8d2f5529135b8faa109a38971c0207",
".git/objects/57/d64d66b8cd0ec9fc25a68621704ecadc9a82fc": "992fb9ef07622fe689327a20f5a53e4e",
".git/objects/59/246f5a16cfe031205b0eb632e537dc70d72e09": "7c7449f884ac6296d557400b8e8f9a8d",
".git/objects/59/479ef595723a551056dd1b3dd057975a3e9494": "6e1c55e337b5b22bdb3e1e055655986c",
".git/objects/5c/57cf8585f9ae4bddcc7b7a0dc455a572d215ee": "ad5fb9d1ab2785fcf3d05d5c48779511",
".git/objects/5c/f13f4ef648486541bd5d93254f227a6ba957bb": "a4f4551ef2c735d253082493316162da",
".git/objects/5d/19942d71b6d57d4be8565c4fa2991336a22088": "567a5b5ced3c204c47e8d70abe6a57f4",
".git/objects/5d/6b7d5bdab4837e8b0802846f3e0724c16a4579": "ab44ac82c1e6c0fd2bf676a38109808c",
".git/objects/5e/be279d3aa1b418fe6dadf99c558d3afe837dea": "098e91584c15963e4f9c2023e42b7ab6",
".git/objects/5f/b1ddb3d86d53ed2c1a9b05cc803a54b26ae1b4": "ab4e764eb985e7a42c9de5d8becade48",
".git/objects/60/31c5e53791e52691436c957849d6dee405545c": "e158d4b87b022441392caee605fb60da",
".git/objects/61/072ef97be41d1eec4ad78d589332f2752ef4bc": "c28b9a73ea9f90429ef36342661d1199",
".git/objects/62/04ee450ad9faeaf94274d4563c0620938c56f1": "fa0da0ca71244d198db8d72aac0b8f7c",
".git/objects/63/6a7d5cbbf9346812a0cf006beafa6e2861de1e": "d82bc83cb643abecb6f25c8f8a2ad3c2",
".git/objects/64/c9c823cade7c39093008869a1b2a530248b641": "14a5a075e92ac44b281e9353a8d7e51d",
".git/objects/67/1002ec0b6b37e9b1bf2523221235ca05b84030": "7753d6eac6baac762407a6c114407cb4",
".git/objects/67/99eac9a484995d29b9e292ecb6d511565afa8b": "228361598ccdbf725cdbe69c80ab9401",
".git/objects/67/ace1a925d15359289f247ba88a2e4fa7e7fb72": "58cb34a8fb2cdf9dc180175d4c47409b",
".git/objects/69/b287f7ee1f60925eb9920ec55801ca04a81770": "491efa5acab3806c862172b28359b656",
".git/objects/6a/2370e32c56cab440dccebde53839fcf9662c14": "1aa37d2276df5b6ddf48e08e0ff6f0cf",
".git/objects/6b/f0f602b6fcebdb5fd9d6b5515b9c3fbcbef715": "1e70a10f70eecae15e43550c608acdc0",
".git/objects/6c/80525b64998ac13e2acdf1795e0eb9f5e21ae9": "0870ef1830ba4c1c5d38b9b7c7307ea4",
".git/objects/6c/8fd107fbc18978e7a57bbd943a32cae1c0a357": "7ff9af8767f7309cd1541f2e9ce32956",
".git/objects/6e/61d5eded0351da7015a6c70c26b54bfbd8f0a3": "21d76b2c8c6089f6ccd138fc7b46b864",
".git/objects/6f/b4772011ba8ce85545179bd5bf680c5f65ae89": "a8408e67d0ad0f05c21090de323a99aa",
".git/objects/71/f85df76c0a6550064a919cff2b930645c5aa36": "33ea84f1e6d65af35ad20a69b762f310",
".git/objects/72/bd2ed7fd3da448ff535261c512c784ee9b433e": "db3348cba4af3dfbf53bb80bda689567",
".git/objects/72/c26c75200d49648f61120c4c8362b647e0171a": "e2d1b2d19fe45dfeea527d338e1ed6a0",
".git/objects/73/a593ab2e46a290502620519a7f49660f9d50fb": "c9cd8a6efcfcf0a8a08144f9896af9aa",
".git/objects/74/84692b32d9588928ebb0ef0d04e741f41653fa": "af8401c37220e581c88443b19fad915e",
".git/objects/74/a35425f42d8a14f605ef9e75245640fc0a0239": "c58a529b10da29b6160275dc28c14f52",
".git/objects/75/0b7d85ac4de25a8d1b3f073e3f700abaf0c1b4": "e6c35f15992bbdfa2f1849ef5553c578",
".git/objects/75/0ce9d24e602e2282d8af0abaa51aa46122e493": "3ef35e41e18fa598c63157847971f9b7",
".git/objects/76/44db1b8010a17f45a94eb72b0eb1f4baa63c85": "b9a86d323475ac3bbdddfe6bc2028057",
".git/objects/78/1c5d952834a4792e462125afe5f486eae080ed": "dc44af0666ab2ee2ee8c2c206d63c598",
".git/objects/78/282e3614fbbffd2613ddef08ae8f112863d216": "e228aec6e483822d4170302107f173f0",
".git/objects/7b/88b311bd8901f64e13e2525e43ddb5f1946336": "e955ba550eda2732ed79255c80b2fda3",
".git/objects/7e/48cb63d7a904e743e13a1e981da3e9c363e55f": "dda484d983ab7c8f62006557b673c036",
".git/objects/7e/a76ab6416760b3943471566d99935e20651a30": "5801dbb45628e2a415062c802b475f3c",
".git/objects/80/23170776fbd523959b8dad8f6fe0099d177590": "405ec6d316ce48d89e5a2801982f8c11",
".git/objects/80/2ffb37b0c498dcc59e49aa7687e62bc2768b61": "fd9377a6dcc12ab5a341f61f523327d6",
".git/objects/80/f6de49f86cd1b6bb32484fd4680838bf3199ba": "25929343fec00a46aba1df82f22bea83",
".git/objects/81/bb8ddb67c4e844a08a8f0ccbf74f52ae850116": "ae59c9fdd58da11565cf13c66e233e07",
".git/objects/82/60709e4555bd391a6d94f93b5da7feebdda064": "0e321951ed3d2b24b7fe9958ea36f59a",
".git/objects/83/1d1b11a4e5413f24ec1f34e528e4ba96a32910": "e53c8b05334ac811014fd81c549ed61d",
".git/objects/85/a3c838cda9e6f854950743c7e18d961456864a": "56e2e79437f61d636625747ae3a66a74",
".git/objects/87/b76751e491f085f8a603f2ee1de86b7a5513d7": "ca2086bd179550a842545cb6aefbeee6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/473028449bdd23c52ae6744d8b006692370b06": "22e914100dba9956a4470f29dea1bfdf",
".git/objects/8a/1ddc26847c3cc524992c26a52631886b807787": "25f5b69d6e6bf8d3b4336521f6dc4784",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/8b/8a42f95c02eaa4e862ef179fe95828ec1bef1f": "fe7cae02fc1308b1cfad5fec9dcd5343",
".git/objects/8b/95845bdec4b2321388e81e590abfecf075684d": "1cd901a6e1fa7c5108be83fab7847b41",
".git/objects/8b/a8bec8ea637ae20e07706e46522fa232117fa8": "0e5b08f9e2f86a834472d0ffc09431b4",
".git/objects/8b/f6202849f172c029513679bc7b145972e90624": "0a5887f0c06cb305cdfe980b53729338",
".git/objects/8c/de2fd1de1f8f9779c8401eb08a0cf7d2fa5b85": "2bd6dcd4b105c2370372d19f3a4da8ed",
".git/objects/8c/defdf55fad709176a41c2939200d6803138ae7": "fa5979a57b285850c6a316c54af40cfe",
".git/objects/8d/309bdea2283d97178a512fbf0f6223e9e3dbb6": "396916ca8b008a18d908e29a2ac52994",
".git/objects/8d/fc50a07e0a5c4d87efe610b39f5a04f8d0220d": "1a5e9c55ac1491c38b386e9f7db68f4e",
".git/objects/8f/226e61162cdd937245e4a5c02e273839e4f379": "eaa58d043221c7ccb61250a4967b9e5f",
".git/objects/8f/954b5396f1254f01773a2d6e2f2735f66ae058": "375784ef80bb86dfc2deaf5358aff059",
".git/objects/90/49b190de9a3a31a473a76f5866439b7a77c2dc": "30885d118e02bff1f6374b216f561061",
".git/objects/90/bd8740e6bc2d7ffe1d37eb240cca5dfd59a1c2": "90320bf3b32b71da961c14d9b52cb382",
".git/objects/91/c4338addbf58b051c814d9ec37a4160cab3725": "aff74e80e9a0e1412046da05905d29e5",
".git/objects/92/0422b6c5525784ecd031aa06d234c52f90b478": "091ffbb5f3c90e72bf817ae25268cc06",
".git/objects/92/645546703017eda5c1d855ae2f05239d785708": "3cef22130828557121b93e6ee4c0a7b5",
".git/objects/92/a619c11deb97d17bdaefc53a540b99696c2322": "4bf6cc7742b2458bf263b790586488f2",
".git/objects/93/8d4bcb77c979015186a6adadde2f63af14f413": "f92b513b0c143fa0b2e16bbc48d352cd",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/95/0cec536fc91f4525f0d14e69ef3b7c785b29f1": "cec4c0c40c30ba1e5bfb1e50f2d352b3",
".git/objects/95/a8845f23401e9c7c04e523dfbedc9d6bff41ff": "393ca55b2cbad60d8ac1bc01c5021994",
".git/objects/95/db1acfd9a3de64cae1978377c9a701d1dd9bae": "de4d99f1aaeec1852639ad0e9c8d3d43",
".git/objects/96/6e105cb8bdff4c17d69ce4de09155b74677e94": "3c5e0ac0c66ae895b91fc9e1d1714a0c",
".git/objects/97/35523aa239ca6c61582e7c740cdcf62899181f": "fe223d6aa20919e008fb76d396618a3c",
".git/objects/97/923a7a2bb3e38c85dcbfa2b630a7e76cca2703": "147f15f01e954db4f5477ac5547ac25c",
".git/objects/97/f1091b4a5367112c410efd34dd5568131d0363": "00ae87087ddc446e504cb538f44f2bfd",
".git/objects/98/b4e22fed88812cbf7525f1171ed35d1f3bb114": "48c934f2d4efd93a31d0051684c7dca4",
".git/objects/99/bd2fc8ce45d38a0f7389089d1dc2a52681eb70": "314168a58a96ae8b31c08e07eaffb1ea",
".git/objects/9a/41016228da898887f8332e372d203e9206bedb": "7418854eef172657a79c65fabee67ce7",
".git/objects/9a/599a4b3463114fe6988020c0f30daaa0ca7c3e": "4f37f4e15709a0ecd4ca520c2c832e89",
".git/objects/9c/b59e381f4002bda7af2b397da0c2e0b8e96adf": "9481f86163c5071a70c4e602dcdb6b4d",
".git/objects/9d/d14b6102e261282a2d4d2b0b96cb1bd43a4bd6": "dd3260a9a484a3a54421e295007853d1",
".git/objects/9e/968e55a15191b0cd5c00b944d4d4752f71b588": "8bc8a645321a5c0e3385a260a3bea587",
".git/objects/a0/2be8eb19644c0ef72b9a3f11ca030359dc37e0": "164784fe55f542ebb4eb289cb4f0be11",
".git/objects/a1/e1898a22c8c357d23f5343bea4064ad5d73f30": "f5139d478210323716795313aff7e298",
".git/objects/a2/12736ccc3a7025b3d295a4c719f4498ab57b03": "ea14b787e9f1565e82a13ed09b35715f",
".git/objects/a3/d9c7be2b5453c68a0dbed507d46f1dea3584d3": "f843bcfae0b6449b80b0285f276ffdc8",
".git/objects/a4/97ca57ffab2695cee790e18cc4eb61b3905c9f": "ae045054d6c4f3ac7510cf9867f1153d",
".git/objects/a5/fdedff2f217114a3e053260006f971b29cf80e": "bff585510d1a65c7219fabb577fb4e64",
".git/objects/a7/74b22d894ad1339af4a4873eb3e3b16901cbdf": "995d1aa59ec1eb1e826addd9edab4ccf",
".git/objects/aa/974a4f6e4cac5374f48844028f29946a48c781": "862addda707e6cae816c5dc2943409b2",
".git/objects/aa/afbdd17933e8e75c5bcec22ee7cb563d38dbb6": "6dd3b7caeeac2b51076e9d37b38aac13",
".git/objects/ab/ca5277f701427e75f4ef43d14c1fe17fda7bf2": "fa1a92c937458617edee00f54a3cca68",
".git/objects/ab/d9636b62f564b1f4126493e20341babfe52c8d": "198180ad23e4a604b45c2ee6c3f9d764",
".git/objects/ac/53f2ab34de6b7a9b73a9d0b1a6398a69090ff7": "ae1e64790dc2b682af7b020020e24963",
".git/objects/ac/7a6f2642125c55e23beefd02319b90941a0da0": "dba61e34f16208ed0680bda9df4d01bf",
".git/objects/ac/a294a72dfbb1eec71edbd0e5ef85bdf76426ba": "31a68dba2ff815f96df68a2ecc4ee6cc",
".git/objects/ad/d2a3b51905bb2cc4b55cafd66cce8a81cac3f6": "2069455ea1119f3577356f3da1072f0b",
".git/objects/ad/f3dcfcbff3f237d103b59de12611fb0d0b08e7": "c0f0bde512e2b8803e49803300e6fc84",
".git/objects/ae/29e96c3c77022a3502731106d90db10fc45da3": "0135d16837f2971388e7371f9b344636",
".git/objects/af/2fda2962ab505a1b4109df01d79b30b7b6ed5f": "6358c8a723faeab169245bbe91f49494",
".git/objects/b0/c7aa480b6f54428cf073e92c17bd212f8b3a28": "0ecf9c4d0b3830057126d77d9a57351d",
".git/objects/b1/10f3a2314c17437728e054b0db87448f24edbb": "49371c80b40578ac2f9b4fb7494f4a24",
".git/objects/b1/ee41f5788463b8ef2dc0f2ff5968b34895e5b8": "1733c9f61708231a8e955dcab8161736",
".git/objects/b3/b863d43bb493c3a0b236c77a84f73be0b174d8": "df68007685d2e4dbff8c2634f054d51e",
".git/objects/b5/1f021fa8823fd09db12166b0469dc21f5a3ef9": "01d68f687d1185851839572820939a9f",
".git/objects/b5/37f963b8d5ce7e832d8e5c682e94bcdd87733e": "903c374a6680f800421781ae979b41fe",
".git/objects/b6/7ae79037a531e3f55e5397c73e7c7e8d8ce6be": "522d9628faad56a454a55ea9c14209b8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fa51d85ebf62f01499f3c50efe277dbfd5db6b": "0262d062042df99ee26fe07cb9cd06bd",
".git/objects/b8/946fc5e6924a1516e2cbb78f24c4c2370aab1a": "c34bd4d6998221e6fd75e757fb2604b5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/ba/ccabac7f7b07b0b11c88e37a4dacef2f49900f": "393e95a51e6f8709ee1b991c6e7a626f",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/bc/0c981fa0ab0b00c63c86d2c3bbde4fe4fdaeab": "8e24192efdbec4d44adcab1de0b046d2",
".git/objects/bc/194d0acaea17ddf18645090b07b292fe8ad36c": "b38705ad9ff48abf4641ba62891c8de7",
".git/objects/bc/22c6181f00b5e2884d2a5cec6096b3bdd53a3e": "40f36f5d9423cd4924ba2b179ec60335",
".git/objects/bc/5fb0827911bd8807085473e93099c9e1b79912": "63d167dfef83900ae2daded340aa1f7f",
".git/objects/bc/8c243659c6c327d9a12e8640db478f1e37a4cf": "8405128c9d68582758924c62a895b56f",
".git/objects/bc/a2c913092b8fd6329242a52e990eed6c0ba6ce": "3c04171546fa1c9c752af79a01ddb625",
".git/objects/be/fb15a9bf73d49061aae648045c484dbec626af": "a9bd2f5d8923cec7b5c624f99665c34f",
".git/objects/bf/01549f3877c0484625d113a72356b77d9b4df4": "73db0ea08d7ff6a47eed62146cb091b0",
".git/objects/bf/6813ffe3dbb0643f27d09b37c3eabe7271ea87": "05dccb70d70d33bf0a5954cf23e4ee91",
".git/objects/c1/c98b9d8807345ee819f2abd7cbdc3dd049df3b": "138f40d9f6e33380d0974cf8b74f15d5",
".git/objects/c2/0a40e397c00daf2ce273c1c8769b8644377c9f": "c8a1870afc78229a93abe1ff5374bc95",
".git/objects/c2/47c163720eeffe41d2c046119798b50c6f451d": "d96f39e735106d859bb1a755e3fdf9b0",
".git/objects/c7/6d06e8ce255c24a044c046a9c1045af9191159": "5f18c7ee0b0892e3604ab37014c2d94a",
".git/objects/c7/b055e2d5b56859dfbfbf906ea03e2fe35dad89": "4e5257eff2e4cefec3b2e7a5718c615f",
".git/objects/ca/1058f28c2b9ad6af656b00f6caba87e8c3eba7": "25e3a8c4b08deb7129acd1651b6531cf",
".git/objects/cb/5c2c11a7c6ea1758de5dc65e2c67890712a6e3": "3eb7f03149f762bdc99d356bb8bafbfb",
".git/objects/cb/9a79a09b5b470a0181f950d358aa0410609eca": "a6fcedc847a08580e207607114cd53ed",
".git/objects/cc/133c7a5b84331c1c3f5e03e968cce6a7665c2f": "ad9e1ac9ed4273d4409673279f27ea37",
".git/objects/cc/8609fb28233761dcb8e5b907cdaffda9441434": "f0c536fc8c3ebe414937213261b387e8",
".git/objects/cc/d5260798e8f3c275e23e19e372e1c65d489ce3": "08f2d1cd4b53d3adf74244a5487df0c2",
".git/objects/cd/7ccc1ff30f99131ca5aa2b14e34e9fac5df484": "230a5ec4e7120099630150f66706e1c2",
".git/objects/cf/6d07ffd321cbafa403567b8a43c0399414ae47": "dfbdca62b3dababce82e38a88ebd4789",
".git/objects/cf/7934fde70f47c43db15a53e0a2fd58cfd47e40": "7500303744546030ae19388b22892e41",
".git/objects/cf/820b14b8fb84859c0fe8b11077cc8fa33bb2d7": "4f16b139dd2e2c71e1d25085186dbf84",
".git/objects/d0/37aaa5483bf487e5aaae9db31775912550a586": "d65eb490959eb6f88d6055b46e36fee0",
".git/objects/d2/74b8f82597d1eda0bacae42b66128c9d4eca3d": "29e0d589d32186c40d04a371e6378de6",
".git/objects/d3/bdb3526057837a407e43b9eafd987ceba692c1": "f361498a9b9c7315ee59079e03aa3546",
".git/objects/d4/369238f917c7ff2120aeb684206b17be2a2d83": "aa1ac39ac1a6a5f8aaa02f6fc0676eb8",
".git/objects/d5/dca5e5bdbb7ceb4c2afb866f6b1344d37a32ea": "a1f780dd34961e69cf8f111eeb45bd54",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/c7af814da7dc7109e67eabd791749d7f8547ea": "16e893130c5d970ad20e31d3c2b81de6",
".git/objects/d6/cd43513b65ab8173ce51181bc3d63179a54a15": "b011feebe71c2e41113767e75fcdf652",
".git/objects/d6/e9f1296c7e14b83876b5e611b2fc7007a922b0": "d26ecf11157d69258e62580f7a852a64",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/db0ec42fd8478ed0331141f8eb181e4f2d7e45": "2b3347d870d7ea51d6192ca9baa35298",
".git/objects/d9/0e473fd4e8c01a732d82fc20346bc9a8022f46": "bc161fbe5a67734d0e32d53ae0d32413",
".git/objects/db/5f92abbdaab81d8e2f4449edc60b2869bae7df": "7c1a8a9ed36c0f3b2121ad4e3b415fb4",
".git/objects/dd/cee8c3f14005f49f5790f56a853efa418bba7b": "eb6737a64f1a4d455e435eddc15f79dd",
".git/objects/de/a49cf562184e4c24e4ef056b90be76e130a3f1": "7a73cef92be3f337f3b25c26a1922ecb",
".git/objects/de/a535d3680b41edeb8623055acc57e403c6ed58": "a42c0dfb3365e971d07e98f529871c9b",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e3/84921e1e5351da19dd92ac596b4d2a4cda2582": "1967d3d83a3f54656223b0b31fc2caa6",
".git/objects/e3/c78963b18d0dd16ca3f853c6aa358a06046354": "75c26ccdd145c9f17281cf3bc6ed68ca",
".git/objects/e4/cb9f10039b263597b619aed62c4d63825fdc3b": "d23238e1571980fc9da36b056367541f",
".git/objects/e5/6313115ab71ca3fd5276247eb65a1276ae4ff4": "3dc79048e24461566564dc1b6a6e1d0e",
".git/objects/e5/b2d8fb0951a8ccb7299113e8c045a49c298266": "4244086a1c99ecfc06713c9e9ea6d5a2",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e9/26ded51d9e6471ddaf90a0a5f88167f2bcec4d": "e6effcaf745c3366215927932fca7850",
".git/objects/e9/486c3b1db184ba22311e483b90e13c6fa3b4f0": "90c007e4b051a4cd25a23e50c7563281",
".git/objects/e9/f9d6a52873a2a67749ccda81a0b2e61ed68bd4": "772d257c5fb65cf19e8c4c36d1d741f5",
".git/objects/ea/560af3bf02a8849ca9887c5cd59da588e1e84c": "d1814a4c376683242e207d4e3100305e",
".git/objects/ea/7d09861d024b6aac1e992eba763e9be66bd6da": "2719275341bd0a557c7c6e83d953a03c",
".git/objects/ea/cb620b8e16347298988b1021ca20ed9a1ef871": "b2557bc2e118bd397c72e3ef508a2ae5",
".git/objects/eb/97597a81bad9823cdcbe6502e5279b5cf3c8e2": "bade151d6ddfcc11747b1035091b6646",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/e862754840852aa7acf6832a6d02bf8ee0ca76": "9f6a52a3001f87fdc1c95ee2c794b61a",
".git/objects/ed/5b77f17d5db10a7ecb72e0d5cc4a513df276d5": "f8c6e1a83fa685e8434c5344c8126039",
".git/objects/ed/beb8d239c3300e6bd0d8f044f80f20fd1a3ba5": "209b0b7c2afe9983897d1b89b2786deb",
".git/objects/ef/1c0aa9aa17174cce69cdb4e786bedf1d9ba97f": "dd22fe0b663b89147dc03dfc20587fc1",
".git/objects/ef/6f70fed0158d3e99b37d8059549b66b9421bb0": "0489003c36ca52de5efca0d64a97175a",
".git/objects/ef/d84c56e9d5be3160ade8680bac1026047d4c5a": "d52d42b9acae39b4af48be6425541b8f",
".git/objects/f0/9e047b1ed6e89e7d9ab17a88878fbdd2458682": "1ee8a91a9233e90272f9ad6dc84e8eea",
".git/objects/f0/b3839a79f71ba116144b60bd27f4d4ada5e36f": "66862ddedbca421633450cd13bb4d7c9",
".git/objects/f0/ff930a1c1586ecb7d0dc9a3fb29db45ee6a608": "590bbd0794e17a427c8ea187c7b6b414",
".git/objects/f1/98dba02e795c0c7a8281eef970cf5c6496cd31": "96586571dd52bfaeab08fdd226124641",
".git/objects/f1/a0c29d8c2a905e0171d63ddfa291aa87ceebf1": "f017aa3299649e8700edeedb29825198",
".git/objects/f2/23bf5dad8a4e87bd60f14a01942ac81ce08868": "bdd1f0db3dd2206efff9b59432efec8b",
".git/objects/f2/b80032249e699c258085db9f33328867c8c918": "19fe6ba3c62d44871e1bd11cf39de3dd",
".git/objects/f2/f600bb41b1cbe3d7a6bccfd2351711a18e2e53": "084cc97d0dc8d910b56c3d917de017af",
".git/objects/f3/26041d57f331a6c8bc21b1281091b0e3945870": "8bdac84c1ba58a69b311b3fbb255ca16",
".git/objects/f3/48d073a6cd1bab89fb6c7dfb42b79a855309a5": "7e4c2ace0ec634d49e7a93ac83025245",
".git/objects/f7/20394400cba58bba08f8889d5e3c47f74ee9a1": "a62dc42324a28ec0023facacf51de6c9",
".git/objects/f8/d204e4ec36d68ef1f2d7de3b8b4fb17c3cfeb5": "5afa7a62b7ea95d35e5bbaa897999da6",
".git/objects/f9/1137156aa3b0dfd0c19851f6bae14853e72080": "6db5497f316bae29658bc3c7bff30c38",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fb/2ab09a81e8a873a7a99b92e6aeeaf3f52dd0e2": "d58f50885ba1085b1f77dc596632950d",
".git/objects/fc/c6b10b7939dc0582a8f9e983d2cef54d9c7d5f": "2a5ea8b7e11e3e1ae3dd60a587ecf771",
".git/objects/fd/a47d307ad077e91b8cd8f79925b4221ea672a6": "45c88fd463d6a6d5353e69febc3a8f83",
".git/objects/fd/af7afe9a7421bc0633fbcadfdcb5f96c5e7036": "5594817d273579e227f9e5a38d44b4cf",
".git/objects/fe/1e92481f9716bf491a53199836cac1a31af72f": "a2d8c656aa069536c065fa3f76f29288",
".git/objects/fe/aa7966af684411bf9640f5547e90517d04de88": "e3bd66f5e6eddb6814db5c405c5a66c2",
".git/ORIG_HEAD": "8eaef983e832273670ed346e566fe796",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "535412860ef6994260f3f56c5a370a65",
".git/refs/remotes/origin/main": "535412860ef6994260f3f56c5a370a65",
"assets/AssetManifest.bin": "db4f5cd4f99d4f06d62673b73a54fd9e",
"assets/AssetManifest.bin.json": "8f0f4da291b4fd34785d3581f115b171",
"assets/AssetManifest.json": "983eb6749887a3aca7be021077cdb094",
"assets/assets/images/appopener.ico": "2c93df07c2ebd8bb67c9589c9d07778d",
"assets/assets/images/background.jpg": "fc88e965d765f7b848bfced46d40b16f",
"assets/assets/images/Background1.png": "463fa65a7f098f099c5e735c0440c6b9",
"assets/assets/images/BackGround2.jpg": "6762036addd39470f57a7127f7e5a07f",
"assets/assets/images/bow.png": "5f933014fcf5d34161012f755f243ca6",
"assets/assets/images/dhanush.png": "7cdc665926393ebe87c5d95101821d68",
"assets/assets/images/item_0.png": "33e18b9a5655b10248e61df444094498",
"assets/assets/images/item_1.png": "b632c8b26618d74b3c903506d598a4d1",
"assets/assets/images/item_2.png": "f02e2094c3545291abc1b9983905ba32",
"assets/assets/images/item_3.png": "e0840d1a6479dc24dd62ec8c1a7dd0d2",
"assets/assets/images/item_4.png": "287179a4186ca514927c98223f190f7b",
"assets/assets/images/item_5.png": "2442d47cb5c2399ee787fbd0e9e8ba16",
"assets/assets/images/item_6.png": "f4450db8a08408bddeb07ded85acde5a",
"assets/assets/images/mala.png": "27b51e9135625620b8d4967f4032c360",
"assets/assets/images/mandir.png": "7497826381f3cda09c0ff3cfa32760c9",
"assets/assets/images/mukut.png": "0555b64cc076470de00c85e6ba028fc2",
"assets/assets/images/ram%2520splash.jpg": "beb904181c7d0392d3d924cba2ed19e6",
"assets/assets/images/ram1.jpg": "c0c8c84d4735424be2f81f8beb9ea7e0",
"assets/assets/images/ramji.png": "9cc7e84337a56550c55b7645e990e434",
"assets/assets/images/ramji1.png": "11d037b06e9be44a88900571d8b8738c",
"assets/assets/images/rudrakash.png": "efca3283ae7522c905ecd8bc9d1f94d6",
"assets/assets/images/splash.png": "5d29dd31fb1bef447509b197cf7f007e",
"assets/assets/images/tilak.png": "ece0234572a3a2a3cb94d35a84e439c1",
"assets/assets/images/vidhi.jpg": "dca26cfc053640b08c823b8ca4ec0d5e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "f3c5ae5dacfbb1f616c4632cb5de767d",
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
"index.html": "ec4195814e81dd4902989f2f42614601",
"/": "ec4195814e81dd4902989f2f42614601",
"main.dart.js": "0f954dd76990c2ee4c1b588b14c4de74",
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
