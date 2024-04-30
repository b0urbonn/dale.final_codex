import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

const initialUsers = [
  {
    "id": 0,
    "name": "Grace Moore",
    "company": "H.B. Fuller Company",
    "email": "zam@ofu.bh",
    "avatar": "//www.gravatar.com/avatar/2d1ff14fb315c1edad471450b712993c"
  },
  {
    "id": 1,
    "name": "Josie Paul",
    "company": "Prudential Financial Inc.",
    "email": "zo@buc.ca",
    "avatar": "//www.gravatar.com/avatar/93f602c3a407ef12f83f45cd7cb00da6"
  },
  {
    "id": 2,
    "name": "Kenneth Meyer",
    "company": "H.B. Fuller Company",
    "email": "lupgacub@daceze.pk",
    "avatar": "//www.gravatar.com/avatar/87201a35e9d213de3d6cce00a68645b4"
  },
  {
    "id": 3,
    "name": "Eleanor Higgins",
    "company": "Kellogg Company",
    "email": "dil@nujiapa.hu",
    "avatar": "//www.gravatar.com/avatar/ac7872ccb1d37b8c396d51a14edc0810"
  },
  {
    "id": 4,
    "name": "Wayne Lloyd",
    "company": "AMR Corporation",
    "email": "johto@mo.ae",
    "avatar": "//www.gravatar.com/avatar/981d3c1e36f9a8c0d1a84999d46c085d"
  },
  {
    "id": 5,
    "name": "Joel Steele",
    "company": "MDU Resources Group Inc.",
    "email": "upgeluwa@dejmakzit.pg",
    "avatar": "//www.gravatar.com/avatar/83adde3b9eee1aa68ac9b32eb39df641"
  },
  {
    "id": 6,
    "name": "Clayton Gray",
    "company": "L-3 Communications Holdings Inc.",
    "email": "obi@jiwug.be",
    "avatar": "//www.gravatar.com/avatar/199696126b6fafb6897e6d3de22ea2f1"
  },
  {
    "id": 7,
    "name": "Calvin Goodwin",
    "company": "Hormel Foods Corp.",
    "email": "cokwij@vewu.sy",
    "avatar": "//www.gravatar.com/avatar/3b759e81934aeb2de0976ab03b71093a"
  },
  {
    "id": 8,
    "name": "Matilda Hunter",
    "company": "CellStar Corp.",
    "email": "da@upias.km",
    "avatar": "//www.gravatar.com/avatar/d064a2649a11825dc4865896fb68a3c9"
  },
  {
    "id": 9,
    "name": "Barbara Hart",
    "company": "Maxtor Corporation",
    "email": "og@wopno.ao",
    "avatar": "//www.gravatar.com/avatar/b5b14c046e4f19b6cebb42e0b72ce6ef"
  },
  {
    "id": 10,
    "name": "Kevin Conner",
    "company": "Sysco Corp",
    "email": "ilvolpe@difirpus.tt",
    "avatar": "//www.gravatar.com/avatar/d3aa22ff7ccf1c5d081e1fe2a3b6dbb7"
  },
  {
    "id": 11,
    "name": "Lola Burgess",
    "company": "Merck & Co., Inc.",
    "email": "nol@dulipa.as",
    "avatar": "//www.gravatar.com/avatar/9e4bd877f7ca3119cea98a8bbc834a5c"
  },
  {
    "id": 12,
    "name": "Ola Fleming",
    "company": "North Fork Bancorporation Inc",
    "email": "okihag@pit.bz",
    "avatar": "//www.gravatar.com/avatar/cfd2633e1466706e0164e5e450e43268"
  },
  {
    "id": 13,
    "name": "Clifford Singleton",
    "company": "MGIC Investment Corporation",
    "email": "za@odakair.nr",
    "avatar": "//www.gravatar.com/avatar/74d014aa6f4a39ab4d3c56235ca85d7e"
  },
  {
    "id": 14,
    "name": "Katie Cook",
    "company": "Progress Energy Inc",
    "email": "se@pikpiso.gf",
    "avatar": "//www.gravatar.com/avatar/ab63da6f49be4523a29d3e865919e6ca"
  },
  {
    "id": 15,
    "name": "Beatrice Carroll",
    "company": "Universal Health Services Inc",
    "email": "ujobiz@pobzihhur.lk",
    "avatar": "//www.gravatar.com/avatar/9b1a5942336275c4260df15cdacf0127"
  },
  {
    "id": 16,
    "name": "Lydia Kelley",
    "company": "AnnTaylor Inc.",
    "email": "gano@ebucerat.md",
    "avatar": "//www.gravatar.com/avatar/7ee38e8814c8901a281fc824c7e8ad9c"
  },
  {
    "id": 17,
    "name": "Curtis Sparks",
    "company": "Cendant Corp",
    "email": "sojbo@bundecpus.la",
    "avatar": "//www.gravatar.com/avatar/7f081822f1f86ae0d25102fb6ab49e17"
  },
  {
    "id": 18,
    "name": "Trevor Martin",
    "company": "OfficeMax Inc",
    "email": "le@fihus.sb",
    "avatar": "//www.gravatar.com/avatar/683960bb2e78f78ea406a994b3b26e26"
  },
  {
    "id": 19,
    "name": "Nathan Jackson",
    "company": "SunGard Data Systems Inc.",
    "email": "mu@vudso.bo",
    "avatar": "//www.gravatar.com/avatar/cb078df37d14e9b535fa2b49812658ed"
  },
  {
    "id": 20,
    "name": "Brent Gibbs",
    "company": "Ashland Inc.",
    "email": "ifi@nor.cd",
    "avatar": "//www.gravatar.com/avatar/59df2d7f211312437b1024564d8a4a08"
  },
  {
    "id": 21,
    "name": "Lizzie Gill",
    "company": "Ryder System Inc",
    "email": "uvdo@tugpu.pg",
    "avatar": "//www.gravatar.com/avatar/896f1d80c89c5df87816d707497572cf"
  },
  {
    "id": 22,
    "name": "Randall Reed",
    "company": "GenCorp Inc.",
    "email": "cepni@gus.mo",
    "avatar": "//www.gravatar.com/avatar/9eb509aceb12c8ccc92f1142a68d4082"
  },
  {
    "id": 23,
    "name": "Robert Gibson",
    "company": "Starwood Hotels & Resorts Worldwide Inc",
    "email": "zinwokoz@fu.hr",
    "avatar": "//www.gravatar.com/avatar/de17478876ba580bafbf1e0809d9f774"
  },
  {
    "id": 24,
    "name": "Estella Wolfe",
    "company": "Metaldyne Corporation",
    "email": "pukone@vade.lc",
    "avatar": "//www.gravatar.com/avatar/169a090940cf065f57689f71a8418bfa"
  },
  {
    "id": 25,
    "name": "Lillian Pratt",
    "company": "Halliburton Co.",
    "email": "ko@ru.dk",
    "avatar": "//www.gravatar.com/avatar/a96ba2fb3d3cfad377e0c2b5f01a2782"
  },
  {
    "id": 26,
    "name": "Mae Alvarez",
    "company": "Charming Shoppes Inc.",
    "email": "meeno@havis.ee",
    "avatar": "//www.gravatar.com/avatar/dc175450e4ff5a6bba36e0b0b501ac5e"
  },
  {
    "id": 27,
    "name": "Adele Hoffman",
    "company": "Henry Schein Inc.",
    "email": "ku@wedkok.co",
    "avatar": "//www.gravatar.com/avatar/d2bbe1b139c0888823e8fa8c5dccfbf3"
  },
  {
    "id": 28,
    "name": "Jeffrey Warren",
    "company": "Tyson Foods Inc",
    "email": "kod@ig.pr",
    "avatar": "//www.gravatar.com/avatar/f6a7c8ec32ec813e07310a33f552a9be"
  },
  {
    "id": 29,
    "name": "Ollie Adkins",
    "company": "International Flavors & Fragrances Inc.",
    "email": "mo@ba.ma",
    "avatar": "//www.gravatar.com/avatar/13798149dc80f8c348ac3430de18189b"
  },
  {
    "id": 30,
    "name": "Douglas Jones",
    "company": "Longs Drug Stores Corporation",
    "email": "guko@utezo.cz",
    "avatar": "//www.gravatar.com/avatar/c87e557ff1f341b822c014b83e0814fc"
  },
  {
    "id": 31,
    "name": "Ethan Christensen",
    "company": "Alcoa Inc.",
    "email": "wocicad@ahhi.mh",
    "avatar": "//www.gravatar.com/avatar/3d2bbbab319eb4c55382ad206829bfd0"
  },
  {
    "id": 32,
    "name": "Jonathan Maxwell",
    "company": "Kimball International Inc.",
    "email": "sefcijnav@jutdatow.as",
    "avatar": "//www.gravatar.com/avatar/a2e89aea7baa0539a5da9e892725e43a"
  },
  {
    "id": 33,
    "name": "Ida Neal",
    "company": "Schering-Plough Corp",
    "email": "daesa@wakoeva.cl",
    "avatar": "//www.gravatar.com/avatar/321da113b6dd1929160d19b89f1516f3"
  },
  {
    "id": 34,
    "name": "Nathaniel Doyle",
    "company": "Rock-Tenn Co",
    "email": "ugse@lagut.bh",
    "avatar": "//www.gravatar.com/avatar/5cdd165e18ad18c9302cc5bcd8879a71"
  },
  {
    "id": 35,
    "name": "Violet Gomez",
    "company": "Ciena Corp.",
    "email": "hap@ivwur.sd",
    "avatar": "//www.gravatar.com/avatar/0f42031a5ee2201ac644b2588dd54fca"
  },
  {
    "id": 36,
    "name": "Clayton Stone",
    "company": "Mohawk Industries Inc.",
    "email": "etanifrir@daw.td",
    "avatar": "//www.gravatar.com/avatar/01c184212473e56eebc531c69ed65042"
  },
  {
    "id": 37,
    "name": "Kathryn Castro",
    "company": "NorthWestern Corporation",
    "email": "kovib@ewhikeme.ac",
    "avatar": "//www.gravatar.com/avatar/9c93df6d2e7f52d8683cb3858703114b"
  },
  {
    "id": 38,
    "name": "Essie Myers",
    "company": "Airborne, Inc.",
    "email": "lubirif@rut.ne",
    "avatar": "//www.gravatar.com/avatar/1cef878782510c0bccb9a175138fb428"
  },
  {
    "id": 39,
    "name": "Timothy West",
    "company": "Tenet Healthcare Corporation",
    "email": "com@tohdewni.mo",
    "avatar": "//www.gravatar.com/avatar/d9385e687d65971e7c6bd4ba9d2d4c9e"
  },
  {
    "id": 40,
    "name": "Jesse Owens",
    "company": "Microsoft Corporation",
    "email": "ih@hakwalcub.al",
    "avatar": "//www.gravatar.com/avatar/cc86f4f988901aef293aa864d9e6cf45"
  },
  {
    "id": 41,
    "name": "Troy Valdez",
    "company": "Hollywood Entertainment Corp.",
    "email": "bal@lopwevned.re",
    "avatar": "//www.gravatar.com/avatar/0e5c28a59aa20f995dc847d88437a300"
  },
  {
    "id": 42,
    "name": "Leo Quinn",
    "company": "Fifth Third Bancorp",
    "email": "ec@isjog.kn",
    "avatar": "//www.gravatar.com/avatar/efebbbf0a00226d8618e5fb863211030"
  },
  {
    "id": 43,
    "name": "Theresa Casey",
    "company": "Cenex Harvest States Cooperatives",
    "email": "ze@opaazu.mv",
    "avatar": "//www.gravatar.com/avatar/c17bd1184e6509b2cda212f0a8ffe7f8"
  },
  {
    "id": 44,
    "name": "Henrietta Abbott",
    "company": "Texas Instruments Incorporated",
    "email": "atiope@kuh.edu",
    "avatar": "//www.gravatar.com/avatar/7cfba3c197df4f20dd0579305f31c2d7"
  },
  {
    "id": 45,
    "name": "Katherine Drake",
    "company": "Bausch & Lomb Incorporated",
    "email": "nivu@cahbuc.rw",
    "avatar": "//www.gravatar.com/avatar/817527719d0c73f16902223ef8a35bf3"
  },
  {
    "id": 46,
    "name": "Bruce Pierce",
    "company": "Allegheny Technologies Incorporated",
    "email": "jig@up.mm",
    "avatar": "//www.gravatar.com/avatar/8ca5d6b95c3731ef361b32a41070abae"
  },
  {
    "id": 47,
    "name": "Lily Goodwin",
    "company": "Comcast Corp.",
    "email": "voh@ec.lv",
    "avatar": "//www.gravatar.com/avatar/e1f48beeb00286cc8dbb0ce087b56b2e"
  },
  {
    "id": 48,
    "name": "Hettie Greene",
    "company": "United Stationers Inc",
    "email": "ge@bavupiug.fk",
    "avatar": "//www.gravatar.com/avatar/7b55265713a6e8809497cf9e5d94ded7"
  },
  {
    "id": 49,
    "name": "Jerry Griffin",
    "company": "Valspar Corporation",
    "email": "vigcurow@imujeom.mw",
    "avatar": "//www.gravatar.com/avatar/099951f36be2ad034519999241f10690"
  },
  {
    "id": 50,
    "name": "Lester Martinez",
    "company": "Georgia Gulf Corporation",
    "email": "izoreneg@afaloiza.mg",
    "avatar": "//www.gravatar.com/avatar/74620a1f3ffc73da7ab1c863bab5d19e"
  },
  {
    "id": 51,
    "name": "Edith Beck",
    "company": "Lands' End Inc.",
    "email": "jabsegihe@robsugses.tf",
    "avatar": "//www.gravatar.com/avatar/0fc7b9116913da06a9e3d9b181cc1735"
  },
  {
    "id": 52,
    "name": "Andre Norton",
    "company": "Anadarko Petroleum Corporation",
    "email": "acaubiipi@sukakeb.me",
    "avatar": "//www.gravatar.com/avatar/10fc40d410f2ea02164ef74a7fe0ea9e"
  },
  {
    "id": 53,
    "name": "Jean Fox",
    "company": "Petco Animal Supplies Inc.",
    "email": "andewis@gijtilu.org",
    "avatar": "//www.gravatar.com/avatar/ada44a78e0405f760269606f241c9bf3"
  },
  {
    "id": 54,
    "name": "Keith Bishop",
    "company": "AutoZone, Inc.",
    "email": "va@ta.nl",
    "avatar": "//www.gravatar.com/avatar/e21dff7d2a3718a81032404b12044cca"
  },
  {
    "id": 55,
    "name": "Terry Gregory",
    "company": "Expeditors International of Washington Inc.",
    "email": "ko@ratsoz.gy",
    "avatar": "//www.gravatar.com/avatar/29014ce7da6062778bd789a2e17498a9"
  },
  {
    "id": 56,
    "name": "Marvin Hansen",
    "company": "Murphy Oil Corporation",
    "email": "datbitda@tuz.us",
    "avatar": "//www.gravatar.com/avatar/36d88f742a821be170d0dd71f70d5818"
  },
  {
    "id": 57,
    "name": "Rosa Williamson",
    "company": "Merrill Lynch & Co. Inc.",
    "email": "afa@ped.ps",
    "avatar": "//www.gravatar.com/avatar/61a4e194ead5105230622ddbf2077cc0"
  },
  {
    "id": 58,
    "name": "Gussie Mason",
    "company": "USG Corporation",
    "email": "mor@ivtino.mw",
    "avatar": "//www.gravatar.com/avatar/3fce56559ceefd3ca03147da1e592575"
  },
  {
    "id": 59,
    "name": "Daniel Graham",
    "company": "UGI Corporation",
    "email": "uggiwo@awozug.la",
    "avatar": "//www.gravatar.com/avatar/71be04184c3d00a3b182d4b1a86c4747"
  },
  {
    "id": 60,
    "name": "James Alvarez",
    "company": "Ashland Inc.",
    "email": "esgu@alewukme.jo",
    "avatar": "//www.gravatar.com/avatar/b68aa0c4cd7aa5962ca35667d6bba543"
  },
  {
    "id": 61,
    "name": "Ricardo Medina",
    "company": "Halliburton Co.",
    "email": "vatibur@rikara.eu",
    "avatar": "//www.gravatar.com/avatar/94d21651fecd13bd7242fe18d82b23be"
  },
  {
    "id": 62,
    "name": "Marvin Day",
    "company": "Adams Resources & Energy, Inc.",
    "email": "dovi@oduwakzo.nc",
    "avatar": "//www.gravatar.com/avatar/39ccb42d5509b67f3b5c1c2453c1f1a6"
  },
  {
    "id": 63,
    "name": "Craig Bell",
    "company": "Champion Enterprises Inc.",
    "email": "hanijag@keev.id",
    "avatar": "//www.gravatar.com/avatar/cd23b1b011995c345d566402bc207fe8"
  },
  {
    "id": 64,
    "name": "Marian Fields",
    "company": "Affiliated Computer Services, Inc.",
    "email": "ruvbo@ebbib.gy",
    "avatar": "//www.gravatar.com/avatar/14e557a1368daaba26d33ca423745562"
  },
  {
    "id": 65,
    "name": "Mitchell Dunn",
    "company": "Deluxe Corporation",
    "email": "oda@bewul.cf",
    "avatar": "//www.gravatar.com/avatar/429ada4c16794f3e1787bfbd264f667e"
  },
  {
    "id": 66,
    "name": "Glenn Valdez",
    "company": "PNM Resources Inc",
    "email": "to@tuba.be",
    "avatar": "//www.gravatar.com/avatar/e764ad331c6ef647f7f50135ea494d6a"
  },
  {
    "id": 67,
    "name": "Jorge Hughes",
    "company": "Solutia Inc",
    "email": "gik@ro.fi",
    "avatar": "//www.gravatar.com/avatar/66aae885f4691642dec4d427289bccc6"
  },
  {
    "id": 68,
    "name": "Ada Steele",
    "company": "Occidental Petroleum Corp",
    "email": "jozwih@ec.zw",
    "avatar": "//www.gravatar.com/avatar/52b3dcac9fbe3ab5416a6532df0af9be"
  },
  {
    "id": 69,
    "name": "Lenora Craig",
    "company": "Washington Post Co.",
    "email": "gojemuka@ejale.fk",
    "avatar": "//www.gravatar.com/avatar/8de5ac26bbb8670650f6e0ccaabc25c5"
  },
  {
    "id": 70,
    "name": "Chad Horton",
    "company": "Brightpoint, Inc.",
    "email": "upitodan@riewho.bd",
    "avatar": "//www.gravatar.com/avatar/7d9ba770e1a4a9c91c8a69fc0a67a57b"
  },
  {
    "id": 71,
    "name": "Violet Cook",
    "company": "AFLAC Incorporated",
    "email": "fug@garajraf.hk",
    "avatar": "//www.gravatar.com/avatar/0b72692498273e576e54eb8cca39e181"
  },
  {
    "id": 72,
    "name": "Charlie Manning",
    "company": "Sovereign Bancorp Inc.",
    "email": "rod@guza.com",
    "avatar": "//www.gravatar.com/avatar/c65ee56cea966d7c3e9fcf747289aa98"
  },
  {
    "id": 73,
    "name": "Charles McGee",
    "company": "UAL Corporation",
    "email": "itzahnir@ato.cw",
    "avatar": "//www.gravatar.com/avatar/4e933797dc3a07039534189a47af590b"
  },
  {
    "id": 74,
    "name": "Jackson Santiago",
    "company": "EGL Inc.",
    "email": "vame@dubbu.sz",
    "avatar": "//www.gravatar.com/avatar/6db7188b2156783ef54457f1e122d64f"
  },
  {
    "id": 75,
    "name": "Anne Benson",
    "company": "Stewart & Stevenson Services Inc",
    "email": "jiazeazu@omi.pk",
    "avatar": "//www.gravatar.com/avatar/e0a36b63fe02d7782bc9acfef4dc11d7"
  },
  {
    "id": 76,
    "name": "Lenora Bishop",
    "company": "Ceridian Corp.",
    "email": "ne@kidpa.qa",
    "avatar": "//www.gravatar.com/avatar/33e0fa0e2132edbd90ead3588d8f02ac"
  },
  {
    "id": 77,
    "name": "Winifred Becker",
    "company": "Hercules Inc.",
    "email": "setem@we.th",
    "avatar": "//www.gravatar.com/avatar/47aa6f478570855d1f995b2b130616d0"
  },
  {
    "id": 78,
    "name": "Chris Powers",
    "company": "Valero Energy Corporation",
    "email": "capijo@tew.lt",
    "avatar": "//www.gravatar.com/avatar/5e86f3f157eec514b8fd348647e2d571"
  },
  {
    "id": 79,
    "name": "Nicholas Castro",
    "company": "Shopko Stores Inc",
    "email": "dafbando@cir.tj",
    "avatar": "//www.gravatar.com/avatar/3f25882e089c1d3a3ea04dfe05bb48a1"
  },
  {
    "id": 80,
    "name": "Frederick Ward",
    "company": "Belo Corp.",
    "email": "wemuz@ukdemdo.bm",
    "avatar": "//www.gravatar.com/avatar/3ad5fbe9b4b53f79463db9284546db4f"
  },
  {
    "id": 81,
    "name": "May McBride",
    "company": "Energy East Corporation",
    "email": "sez@ziansi.tf",
    "avatar": "//www.gravatar.com/avatar/90c6ae23d3a05a940d0dea259afc6183"
  },
  {
    "id": 82,
    "name": "Kyle George",
    "company": "Radio Shack Corporation",
    "email": "muzhalev@uzoan.cz",
    "avatar": "//www.gravatar.com/avatar/f5d07786a7406ab3ba747bdecc353571"
  },
  {
    "id": 83,
    "name": "Micheal James",
    "company": "Spartan Stores Inc",
    "email": "dujkuckas@latgekob.cz",
    "avatar": "//www.gravatar.com/avatar/5a24572499432f161702298f6da5a47f"
  },
  {
    "id": 84,
    "name": "Jerome Hansen",
    "company": "Public Service Enterprise Group Inc.",
    "email": "sarol@kevsej.lv",
    "avatar": "//www.gravatar.com/avatar/58a0dbf14928bdba187782042f64df6f"
  },
  {
    "id": 85,
    "name": "Jane Rodgers",
    "company": "The MONY Group Inc.",
    "email": "ca@sittuz.su",
    "avatar": "//www.gravatar.com/avatar/a40982dc6e99acd5f0053fae10662651"
  },
  {
    "id": 86,
    "name": "Betty McKinney",
    "company": "Lam Research Corporation",
    "email": "suet@jap.tv",
    "avatar": "//www.gravatar.com/avatar/3ca4ed438886da3ac3576df5a7d75b14"
  },
  {
    "id": 87,
    "name": "Viola Edwards",
    "company": "Waste Management Inc",
    "email": "vihdo@bonu.vg",
    "avatar": "//www.gravatar.com/avatar/f862d50317348b2502eb725b87553742"
  },
  {
    "id": 88,
    "name": "Myrtie Russell",
    "company": "Service Corp. International",
    "email": "be@im.ma",
    "avatar": "//www.gravatar.com/avatar/3f43fba7b87318c5ad1e8151cf8ed8af"
  },
  {
    "id": 89,
    "name": "Sally Vargas",
    "company": "Polo Ralph Lauren Corp",
    "email": "fagcezo@ifhapur.ax",
    "avatar": "//www.gravatar.com/avatar/b3d9def59f55c16b0a0465311738800a"
  },
  {
    "id": 90,
    "name": "Isabel Bryan",
    "company": "Penn Traffic Co.",
    "email": "he@elsa.sn",
    "avatar": "//www.gravatar.com/avatar/b67842f6832fcce270a176202aec213b"
  },
  {
    "id": 91,
    "name": "Jesus Diaz",
    "company": "Affiliated Computer Services, Inc.",
    "email": "denuado@na.zm",
    "avatar": "//www.gravatar.com/avatar/84f396e441cb73906a7bc0539d51a6ad"
  },
  {
    "id": 92,
    "name": "Virginia Mason",
    "company": "Stilwell Financial Inc",
    "email": "panawinu@be.ga",
    "avatar": "//www.gravatar.com/avatar/c4e1dd4bbbcf7e8062c94841f1f96a94"
  },
  {
    "id": 93,
    "name": "Milton Patrick",
    "company": "Crane Co.",
    "email": "bosi@nidlez.ao",
    "avatar": "//www.gravatar.com/avatar/164a8151ec1ba35d393985530ecc51a0"
  },
  {
    "id": 94,
    "name": "Frank Todd",
    "company": "Corn Products International Inc.",
    "email": "hak@puowolis.co.uk",
    "avatar": "//www.gravatar.com/avatar/8aec71de1b70aefbabb89acdf16c8328"
  },
  {
    "id": 95,
    "name": "Gene Lowe",
    "company": "UnumProvident Corporation",
    "email": "giim@ice.sg",
    "avatar": "//www.gravatar.com/avatar/b5e4ffca3b9b054ab834f7c414d86d1e"
  },
  {
    "id": 96,
    "name": "Jeffery Newton",
    "company": "Cigna Corp",
    "email": "ohlese@odehickef.fm",
    "avatar": "//www.gravatar.com/avatar/b1d6afce52d7f9c5c45ecea3af0b3086"
  },
  {
    "id": 97,
    "name": "Kathryn Grant",
    "company": "L-3 Communications Holdings Inc.",
    "email": "bicaal@cub.th",
    "avatar": "//www.gravatar.com/avatar/380865682aa0891cb1d69179c812c41a"
  },
  {
    "id": 98,
    "name": "Luella Hines",
    "company": "General Electric Company",
    "email": "kimiknoz@ki.tf",
    "avatar": "//www.gravatar.com/avatar/b9dbfca758920128a242e8d0e914a2b6"
  },
  {
    "id": 99,
    "name": "Alan Romero",
    "company": "Weyerhauser Company",
    "email": "titjamo@peca.pa",
    "avatar": "//www.gravatar.com/avatar/76c7eafef6ed45ad9cca8f5510b63355"
  },
  {
    "id": 100,
    "name": "Eunice McCarthy",
    "company": "Stewart & Stevenson Services Inc",
    "email": "hijosceb@sainegu.do",
    "avatar": "//www.gravatar.com/avatar/f44109dc5ba3ba6076ac2cb25fcbdf4e"
  },
  {
    "id": 101,
    "name": "Lester Collins",
    "company": "Emcor Group Inc.",
    "email": "kugisre@tekukim.tl",
    "avatar": "//www.gravatar.com/avatar/97d2241a2824b0389c4b817ce04716fc"
  },
  {
    "id": 102,
    "name": "Cole Holloway",
    "company": "UnitedHealth Group Incorporated",
    "email": "wam@nasnol.kw",
    "avatar": "//www.gravatar.com/avatar/26705bcd8ebccb0f3fe03d5870db6fd2"
  },
  {
    "id": 103,
    "name": "Brandon Stephens",
    "company": "Dana Corporation",
    "email": "da@ihuso.ne",
    "avatar": "//www.gravatar.com/avatar/305e9f33eebf0219756e19290ecf7c15"
  },
  {
    "id": 104,
    "name": "Alberta Austin",
    "company": "On Semiconductor Corp",
    "email": "vo@gamuhe.mg",
    "avatar": "//www.gravatar.com/avatar/6646753ca2283a8236349660926eca4b"
  },
  {
    "id": 105,
    "name": "Ray Munoz",
    "company": "Anheuser-Busch Companies, Inc.",
    "email": "juegoep@welaco.pe",
    "avatar": "//www.gravatar.com/avatar/d1b8fb7bde9e4639505addb7d03ca2e6"
  },
  {
    "id": 106,
    "name": "Don Caldwell",
    "company": "Intel Corporation",
    "email": "nejeze@da.mq",
    "avatar": "//www.gravatar.com/avatar/f8bfa0b7b761fce89481b29598e143ed"
  },
  {
    "id": 107,
    "name": "Glenn May",
    "company": "Supervalu Inc",
    "email": "wow@malvo.jm",
    "avatar": "//www.gravatar.com/avatar/b34b4fc7ce1addcdc4a303ebb77a1e46"
  },
  {
    "id": 108,
    "name": "Jim Anderson",
    "company": "WestPoint Stevens Inc",
    "email": "wavev@uvo.km",
    "avatar": "//www.gravatar.com/avatar/b256db26cda19f5012b737c517f9eb62"
  },
  {
    "id": 109,
    "name": "Cornelia Vasquez",
    "company": "Kohl's Corp.",
    "email": "acaik@og.zw",
    "avatar": "//www.gravatar.com/avatar/760945cff6c2a8be21a03a203e99c8ba"
  },
  {
    "id": 110,
    "name": "Zachary Singleton",
    "company": "W.R. Grace & Co",
    "email": "miva@awjek.mx",
    "avatar": "//www.gravatar.com/avatar/1eb5d3296d066d903a910223d36119b7"
  },
  {
    "id": 111,
    "name": "Lucinda Jones",
    "company": "Toll Brothers Inc",
    "email": "bepgefnov@zintic.mc",
    "avatar": "//www.gravatar.com/avatar/618272932a5fbd48444b8a861676d442"
  },
  {
    "id": 112,
    "name": "Lloyd Long",
    "company": "Electronic Arts Inc.",
    "email": "diwpulok@gucfe.gr",
    "avatar": "//www.gravatar.com/avatar/b24a95647e8c5beff5f2dc43c27c31f2"
  },
  {
    "id": 113,
    "name": "Milton Houston",
    "company": "Allegheny Technologies Incorporated",
    "email": "sidrow@pasiriipo.jm",
    "avatar": "//www.gravatar.com/avatar/34fccbc8d869a8da2e63479fb4831633"
  },
  {
    "id": 114,
    "name": "Stella Yates",
    "company": "Capital One Financial Corp.",
    "email": "tuj@butmobgop.py",
    "avatar": "//www.gravatar.com/avatar/e782a38af4503ce56f3d2a17c6f0fadc"
  },
  {
    "id": 115,
    "name": "Lois Blake",
    "company": "Mohawk Industries Inc.",
    "email": "rum@eppi.ch",
    "avatar": "//www.gravatar.com/avatar/004aea090ee628d44d81d5b9a99d7208"
  },
  {
    "id": 116,
    "name": "Isaac Hart",
    "company": "Hartford Financial Services Group Inc.",
    "email": "uwfo@po.np",
    "avatar": "//www.gravatar.com/avatar/03eb20c3e35766f5a63fe9db276b27f7"
  },
  {
    "id": 117,
    "name": "Victoria Walsh",
    "company": "ACT Manufacturing Inc.",
    "email": "tumun@wevfa.je",
    "avatar": "//www.gravatar.com/avatar/1550b3a98d7c91a7463407dfb77f425f"
  },
  {
    "id": 118,
    "name": "Caroline Garcia",
    "company": "America West Holdings Corporation",
    "email": "ravpuzneg@rebgo.gov",
    "avatar": "//www.gravatar.com/avatar/285ce3d0bf0d510169ac9668f2ebac76"
  },
  {
    "id": 119,
    "name": "Isabel Harvey",
    "company": "St. Paul Cos.",
    "email": "woheco@wupagbip.li",
    "avatar": "//www.gravatar.com/avatar/464abf34b2b0446582b93a12a500ad9d"
  },
  {
    "id": 120,
    "name": "Glen Vargas",
    "company": "Charter Communications Inc.",
    "email": "metvipo@ek.gw",
    "avatar": "//www.gravatar.com/avatar/6059a8f17a6829442771457579f79653"
  },
  {
    "id": 121,
    "name": "Lily Mullins",
    "company": "Varco International Inc",
    "email": "nucunire@nosihuc.sv",
    "avatar": "//www.gravatar.com/avatar/b93a22969a8bf8b541dba75e1682f673"
  },
  {
    "id": 122,
    "name": "Bill Cooper",
    "company": "Tyson Foods Inc",
    "email": "iweda@wedsichis.mp",
    "avatar": "//www.gravatar.com/avatar/45215c5ad6ab1f737f0a3e539ce625b4"
  },
  {
    "id": 123,
    "name": "Vincent Keller",
    "company": "Fiserv Inc.",
    "email": "ide@woiv.sa",
    "avatar": "//www.gravatar.com/avatar/0e91a2fcdfbca6e3d3a6268a5a942afa"
  },
  {
    "id": 124,
    "name": "Phoebe Gomez",
    "company": "International Flavors & Fragrances Inc.",
    "email": "kutluc@vid.li",
    "avatar": "//www.gravatar.com/avatar/5ae609d75185b61cb4b1198ae438d079"
  },
  {
    "id": 125,
    "name": "Edith Austin",
    "company": "Unocal Corporation",
    "email": "fac@hokihi.vc",
    "avatar": "//www.gravatar.com/avatar/31084c0856ab23fa80139f696679fd8f"
  },
  {
    "id": 126,
    "name": "Stella Cook",
    "company": "Hewlett-Packard Company",
    "email": "oji@laem.tc",
    "avatar": "//www.gravatar.com/avatar/20a924988f1b9ba1f5c77a901650d9c3"
  },
  {
    "id": 127,
    "name": "Alice Patterson",
    "company": "Safeguard Scientifics Inc.",
    "email": "memi@tu.gu",
    "avatar": "//www.gravatar.com/avatar/6045509062bd1cc4f985b2b3585c8720"
  },
  {
    "id": 128,
    "name": "Leon Burke",
    "company": "Pennzoil-Quaker State Company",
    "email": "katagica@fi.lb",
    "avatar": "//www.gravatar.com/avatar/cfd9b2567dfb65fd0c6b216f09b8ef05"
  },
  {
    "id": 129,
    "name": "Lucy Delgado",
    "company": "Sears Roebuck & Co",
    "email": "hup@piju.id",
    "avatar": "//www.gravatar.com/avatar/0079aaa5e540fbb021206c1a8c8a733c"
  },
  {
    "id": 130,
    "name": "Isabelle Mitchell",
    "company": "Bank of America Corporation",
    "email": "masubo@rehzepcih.cm",
    "avatar": "//www.gravatar.com/avatar/144fc4082b17a31e0234598c10cef87d"
  },
  {
    "id": 131,
    "name": "Carlos Pena",
    "company": "First Tennessee National Corp.",
    "email": "razuspu@nouj.mx",
    "avatar": "//www.gravatar.com/avatar/4371cf859a1034e47cb0b95d217706ea"
  },
  {
    "id": 132,
    "name": "Jessie Gutierrez",
    "company": "URS Corporation",
    "email": "be@musolpow.sk",
    "avatar": "//www.gravatar.com/avatar/74ff81ac23f548262525ba7f0121d52a"
  },
  {
    "id": 133,
    "name": "Norman Sullivan",
    "company": "Alberto-Culver Company",
    "email": "gulogiva@gibjeufa.je",
    "avatar": "//www.gravatar.com/avatar/d73b3799aa1428fb34a348ee1567ce89"
  },
  {
    "id": 134,
    "name": "Dollie Weaver",
    "company": "BB&T Corporation",
    "email": "zeh@siriivo.tr",
    "avatar": "//www.gravatar.com/avatar/2a0c0a2a67ba4667b97c016dda0a839f"
  },
  {
    "id": 135,
    "name": "Birdie Mullins",
    "company": "ITT Industries Inc.",
    "email": "gesazug@ejuru.cy",
    "avatar": "//www.gravatar.com/avatar/642f67d24e2711eab7c517ec4042381b"
  },
  {
    "id": 136,
    "name": "Allie Powell",
    "company": "Sonic Automotive Inc.",
    "email": "pazec@walis.ag",
    "avatar": "//www.gravatar.com/avatar/0aa4ce0c312698b93f903737a604228d"
  },
  {
    "id": 137,
    "name": "Marian Garcia",
    "company": "The Boeing Company",
    "email": "bovombi@mek.gw",
    "avatar": "//www.gravatar.com/avatar/d7d6e51b29669d5348abdd86b2e67df8"
  },
  {
    "id": 138,
    "name": "Joshua Cruz",
    "company": "Cytec Industries Inc.",
    "email": "erogi@bok.to",
    "avatar": "//www.gravatar.com/avatar/27f5f2a3e58a6faa3689197cd526db14"
  },
  {
    "id": 139,
    "name": "Jason Hudson",
    "company": "SLM Corporation",
    "email": "pubonucib@padfibas.mz",
    "avatar": "//www.gravatar.com/avatar/08633ceb108a78822fd6cede3be482b6"
  },
  {
    "id": 140,
    "name": "Cameron Austin",
    "company": "Pfizer Inc",
    "email": "zesiz@cimzoh.md",
    "avatar": "//www.gravatar.com/avatar/31298e6d82ca1a7838ffb888242fa259"
  },
  {
    "id": 141,
    "name": "Cody Chavez",
    "company": "Ryland Group Inc.",
    "email": "lumu@ja.it",
    "avatar": "//www.gravatar.com/avatar/677c0ae0d4ef54e510038d79ee05960b"
  },
  {
    "id": 142,
    "name": "Brett Hughes",
    "company": "Polo Ralph Lauren Corp",
    "email": "pe@ol.wf",
    "avatar": "//www.gravatar.com/avatar/5c56144fef53e6afdaa592e53e03873f"
  },
  {
    "id": 143,
    "name": "Owen Harrison",
    "company": "Puget Energy Inc.",
    "email": "riuwsi@dipopfa.eg",
    "avatar": "//www.gravatar.com/avatar/3abc7d0cc5ca2e17d0cea1c244ddf6da"
  },
  {
    "id": 144,
    "name": "Willie Long",
    "company": "Valspar Corporation",
    "email": "nu@sebmih.fi",
    "avatar": "//www.gravatar.com/avatar/2dabed57767b1e687eb494cde9c1ddb1"
  },
  {
    "id": 145,
    "name": "Lester Sims",
    "company": "Universal Forest Products Inc",
    "email": "gonokud@somhe.tv",
    "avatar": "//www.gravatar.com/avatar/47128b06d486c9ebad65eebcad13c564"
  },
  {
    "id": 146,
    "name": "Alex Bailey",
    "company": "AFLAC Incorporated",
    "email": "amli@en.ge",
    "avatar": "//www.gravatar.com/avatar/1d6ceed4aaed4425315dc96873787b9f"
  },
  {
    "id": 147,
    "name": "Chester Parker",
    "company": "Ross Stores Inc",
    "email": "ovcu@hitoh.br",
    "avatar": "//www.gravatar.com/avatar/d294b7597e0d175a58bffd3893a258f5"
  },
  {
    "id": 148,
    "name": "Joel Powers",
    "company": "Guidant Corporation",
    "email": "cuwo@fe.ag",
    "avatar": "//www.gravatar.com/avatar/a382ae4baea18cd706be05d56c76d2ca"
  },
  {
    "id": 149,
    "name": "Virgie Cole",
    "company": "Advance Auto Parts, Inc.",
    "email": "umo@ecgeg.gg",
    "avatar": "//www.gravatar.com/avatar/6fcb9f7f76277a02e679a6315a0f8263"
  },
  {
    "id": 150,
    "name": "Mark Mathis",
    "company": "Tower Automotive Inc.",
    "email": "ogoroawe@tak.nf",
    "avatar": "//www.gravatar.com/avatar/11717448421b4a4b988e7756533c3e56"
  },
  {
    "id": 151,
    "name": "Rosetta Hale",
    "company": "MPS Group Inc.",
    "email": "kar@refur.mt",
    "avatar": "//www.gravatar.com/avatar/ef64e828bdb6c4add4caf842e60a5ddc"
  },
  {
    "id": 152,
    "name": "Emma Hicks",
    "company": "W.R. Berkley Corporation",
    "email": "ehadu@boke.pl",
    "avatar": "//www.gravatar.com/avatar/c412068f7814e48776d3330c0828aad8"
  },
  {
    "id": 153,
    "name": "Stanley Barker",
    "company": "Dreyer's Grand Ice Cream, Inc.",
    "email": "etiluude@onipa.mp",
    "avatar": "//www.gravatar.com/avatar/4212bbbc1b9bceb9aaa21cfefda8be74"
  },
  {
    "id": 154,
    "name": "Matthew Hogan",
    "company": "MasTec Inc.",
    "email": "zoguz@aso.pr",
    "avatar": "//www.gravatar.com/avatar/a70a2d46cfe066ddb75d8b0945d728e6"
  },
  {
    "id": 155,
    "name": "Julia Welch",
    "company": "Procter & Gamble Co.",
    "email": "venuwwor@cuvmodo.eh",
    "avatar": "//www.gravatar.com/avatar/50177b0fc96d8391c1dda36ea14c368f"
  },
  {
    "id": 156,
    "name": "Christina Sanchez",
    "company": "Eastman Chemical Company",
    "email": "cuisunu@dubfepaz.so",
    "avatar": "//www.gravatar.com/avatar/1af4a9e3959a70624346511eb213db4e"
  },
  {
    "id": 157,
    "name": "Milton Bowers",
    "company": "Adolph Coors Company",
    "email": "boho@ajuona.ls",
    "avatar": "//www.gravatar.com/avatar/0f1e00771e082853baafb45bd5941d56"
  },
  {
    "id": 158,
    "name": "Angel Newman",
    "company": "Payless Shoesource Inc",
    "email": "kasap@cel.do",
    "avatar": "//www.gravatar.com/avatar/b969cb4216b78753a21158134226f209"
  },
  {
    "id": 159,
    "name": "Blake Hughes",
    "company": "The MONY Group Inc.",
    "email": "jibozunib@set.tv",
    "avatar": "//www.gravatar.com/avatar/7f9925406f4f2e6164b0939dc68bd23f"
  },
  {
    "id": 160,
    "name": "Johnny Chambers",
    "company": "Safeguard Scientifics Inc.",
    "email": "bicze@ko.eg",
    "avatar": "//www.gravatar.com/avatar/861d98f72ad6c2f51ce5509b27568208"
  },
  {
    "id": 161,
    "name": "Bettie Ray",
    "company": "CH2M Hill Cos. Ltd.",
    "email": "jimbug@ko.ax",
    "avatar": "//www.gravatar.com/avatar/251e8df7ff869a2013af24ee321c8300"
  },
  {
    "id": 162,
    "name": "Allen Martinez",
    "company": "Pitney Bowes Inc.",
    "email": "im@zeowunak.bj",
    "avatar": "//www.gravatar.com/avatar/b313a8d5118cf673048884b50676590c"
  },
  {
    "id": 163,
    "name": "Linnie Cooper",
    "company": "Newell Rubbermaid Inc",
    "email": "doakivo@moda.dm",
    "avatar": "//www.gravatar.com/avatar/b30de8be5032ac91cd4c974d4c792999"
  },
  {
    "id": 164,
    "name": "Rosetta Pena",
    "company": "PacifiCare Health Systems Inc",
    "email": "dagku@cu.tg",
    "avatar": "//www.gravatar.com/avatar/cf3d692d8cc4ded99efb601dc1dd3020"
  },
  {
    "id": 165,
    "name": "Frank McKinney",
    "company": "Hon Industries Inc.",
    "email": "opuruz@gegosgi.mn",
    "avatar": "//www.gravatar.com/avatar/fb63aadee27ef0a1664758316dbf947c"
  },
  {
    "id": 166,
    "name": "Patrick Jackson",
    "company": "Praxair Inc",
    "email": "gaw@erupoid.na",
    "avatar": "//www.gravatar.com/avatar/c73259588e9050d531472b411faf4879"
  },
  {
    "id": 167,
    "name": "Nancy Weber",
    "company": "Pantry Inc",
    "email": "disvuiw@purem.kw",
    "avatar": "//www.gravatar.com/avatar/608ec1e2ad3d556dd9e1e38ea785b11f"
  },
  {
    "id": 168,
    "name": "Betty Montgomery",
    "company": "JDS Uniphase Corp.",
    "email": "razar@efwafki.kh",
    "avatar": "//www.gravatar.com/avatar/9ea71c9e0bcc2071087d5f41581f940c"
  },
  {
    "id": 169,
    "name": "Luis Curtis",
    "company": "Lennar Corporation",
    "email": "nari@duwpesilo.gn",
    "avatar": "//www.gravatar.com/avatar/c9435016649579e570f5d256ec37bd25"
  },
  {
    "id": 170,
    "name": "Olivia Lindsey",
    "company": "Household International Corp.",
    "email": "fu@biame.ua",
    "avatar": "//www.gravatar.com/avatar/26d55cef28ffd7a4fe2a8948dee0c1d3"
  },
  {
    "id": 171,
    "name": "Dale Burton",
    "company": "Corning Inc.",
    "email": "macofcir@kagdilhuz.tt",
    "avatar": "//www.gravatar.com/avatar/1138d9c556ed6ea6f58d3dc0b720c779"
  },
  {
    "id": 172,
    "name": "Leonard Lewis",
    "company": "Nacco Industries Inc",
    "email": "fubag@owobahab.io",
    "avatar": "//www.gravatar.com/avatar/6ab52baa9c2bff69559386f2bd516406"
  },
  {
    "id": 173,
    "name": "Marc Roberts",
    "company": "Shopko Stores Inc",
    "email": "sefini@sotmaw.sm",
    "avatar": "//www.gravatar.com/avatar/66d5255eb8b97e1a8621edb35ea05ce1"
  },
  {
    "id": 174,
    "name": "Adele Tran",
    "company": "Fairchild Semiconductor International Inc.",
    "email": "fudefla@ibizoffoz.cw",
    "avatar": "//www.gravatar.com/avatar/0493d073c4782347ed6458c32d007224"
  },
  {
    "id": 175,
    "name": "Catherine Stevens",
    "company": "Solutia Inc",
    "email": "udmazja@ruj.ve",
    "avatar": "//www.gravatar.com/avatar/4d670ab0752d926b4ab5bde8c9c7b109"
  },
  {
    "id": 176,
    "name": "Nettie Owens",
    "company": "PolyOne Corp",
    "email": "dojat@lumfot.bv",
    "avatar": "//www.gravatar.com/avatar/aaad73685b8547d94fadfe20613e2de2"
  },
  {
    "id": 177,
    "name": "Roger Doyle",
    "company": "Belk, Inc.",
    "email": "fa@mah.so",
    "avatar": "//www.gravatar.com/avatar/544abbcc6bff1e76609593ead65f67f8"
  },
  {
    "id": 178,
    "name": "Jay James",
    "company": "Cytec Industries Inc.",
    "email": "mebresji@oh.hn",
    "avatar": "//www.gravatar.com/avatar/754fb202fe89002aa66a7d7c4461b1e5"
  },
  {
    "id": 179,
    "name": "Sara Ford",
    "company": "Burlington Coat Factory Warehouse Corporation",
    "email": "ebi@ceve.sh",
    "avatar": "//www.gravatar.com/avatar/0b28e6514d7747a601799fafd586a9f3"
  },
  {
    "id": 180,
    "name": "Steven Diaz",
    "company": "3Com Corp",
    "email": "bu@sudechak.il",
    "avatar": "//www.gravatar.com/avatar/8627d552dfba88332542b22bfe68b999"
  },
  {
    "id": 181,
    "name": "Rachel Rios",
    "company": "Sempra Energy",
    "email": "vetuk@epeun.kh",
    "avatar": "//www.gravatar.com/avatar/105b2536afa6e5379c8ffc32f84c5ecb"
  },
  {
    "id": 182,
    "name": "Tony Miles",
    "company": "Burlington Northern Santa Fe Corporation",
    "email": "wa@ofaos.za",
    "avatar": "//www.gravatar.com/avatar/5a0ea9e78778b2789560f462b0676224"
  },
  {
    "id": 183,
    "name": "Luke Bass",
    "company": "Silicon Graphics Inc",
    "email": "gupso@diw.gd",
    "avatar": "//www.gravatar.com/avatar/db4bb9219d220651754d81342498dfe0"
  },
  {
    "id": 184,
    "name": "Charlotte Poole",
    "company": "Citigroup, Inc",
    "email": "fepcaro@wahmer.iq",
    "avatar": "//www.gravatar.com/avatar/d4ca73c5ade0ebd17bf8b7e1061b3e2f"
  },
  {
    "id": 185,
    "name": "Phoebe Boyd",
    "company": "Johnson Controls Inc.",
    "email": "era@sor.vn",
    "avatar": "//www.gravatar.com/avatar/b08629da007c38e5e9861b16051a8db0"
  },
  {
    "id": 186,
    "name": "Harold Sparks",
    "company": "Scientific-Atlanta Inc",
    "email": "rurohul@het.gn",
    "avatar": "//www.gravatar.com/avatar/3dcbef588da1a8f992807f74a4a085d2"
  },
  {
    "id": 187,
    "name": "Frances Barnett",
    "company": "L-3 Communications Holdings Inc.",
    "email": "of@gapoz.am",
    "avatar": "//www.gravatar.com/avatar/eaff13c53bd866e69a38379507ad7792"
  },
  {
    "id": 188,
    "name": "Ann Malone",
    "company": "AdvancePCS, Inc.",
    "email": "ad@vi.my",
    "avatar": "//www.gravatar.com/avatar/5d737fe0d12a1b6794ed2582d795f0bc"
  },
  {
    "id": 189,
    "name": "Frank Kelly",
    "company": "Northeast Utilities System",
    "email": "zewbe@wa.cx",
    "avatar": "//www.gravatar.com/avatar/9aee57678583da5814629fada75f1864"
  },
  {
    "id": 190,
    "name": "Derrick Gibbs",
    "company": "Phelps Dodge Corp.",
    "email": "hiwo@rudgos.tc",
    "avatar": "//www.gravatar.com/avatar/7e420d0e976adf00e0521bd0828e530d"
  },
  {
    "id": 191,
    "name": "Ophelia Norton",
    "company": "Cadence Design Systems, Inc.",
    "email": "lekahlet@vuj.io",
    "avatar": "//www.gravatar.com/avatar/0cf961477aebfe62d239f394d6c74b67"
  },
  {
    "id": 192,
    "name": "Micheal Burgess",
    "company": "Frontier Oil Corp",
    "email": "elkunav@pev.dj",
    "avatar": "//www.gravatar.com/avatar/2060707afd943ed3eed98e7c4c6e4a32"
  },
  {
    "id": 193,
    "name": "Laura Ortega",
    "company": "Emcor Group Inc.",
    "email": "nooraziw@kowul.dm",
    "avatar": "//www.gravatar.com/avatar/939221127103a3b2a1d51bf30cd29856"
  },
  {
    "id": 194,
    "name": "Johanna Kelley",
    "company": "Vulcan Materials Company",
    "email": "ol@tog.gy",
    "avatar": "//www.gravatar.com/avatar/0dbc82ff49c65614ad655c3c585779f9"
  },
  {
    "id": 195,
    "name": "Matthew Day",
    "company": "Philip Morris Companies Inc.",
    "email": "avva@bovobha.mg",
    "avatar": "//www.gravatar.com/avatar/18618a02b6cb65edb56e245ca3cbf0fa"
  },
  {
    "id": 196,
    "name": "Dale Butler",
    "company": "Apache Corporation",
    "email": "lopge@pufa.za",
    "avatar": "//www.gravatar.com/avatar/39799e75af85a500e2cad9d62c47c095"
  },
  {
    "id": 197,
    "name": "Blake Fuller",
    "company": "Casey's General Stores Inc.",
    "email": "cic@aw.vn",
    "avatar": "//www.gravatar.com/avatar/b6bb5ac41e35c430eafe2f0302be19ee"
  },
  {
    "id": 198,
    "name": "Allie Phillips",
    "company": "Campbell Soup Co.",
    "email": "loweti@se.ba",
    "avatar": "//www.gravatar.com/avatar/0ccc09bce0ddcd548fc9a26829e58df5"
  },
  {
    "id": 199,
    "name": "Ethan Marsh",
    "company": "Textron Inc",
    "email": "ce@vavbugug.km",
    "avatar": "//www.gravatar.com/avatar/f5bd54993798ac91f04578ff70800bc4"
  },
  {
    "id": 200,
    "name": "Duane Gross",
    "company": "FMC Corp",
    "email": "oku@olehivkob.tv",
    "avatar": "//www.gravatar.com/avatar/6812208069372824bdb162f80c7a7547"
  },
  {
    "id": 201,
    "name": "Seth Vasquez",
    "company": "Footstar Inc.",
    "email": "otenepoc@ji.cw",
    "avatar": "//www.gravatar.com/avatar/e1add11a98e7991de0d527dd0b7f831a"
  },
  {
    "id": 202,
    "name": "Oscar Wells",
    "company": "Fidelity National Financial Inc.",
    "email": "fogobu@degcilim.ar",
    "avatar": "//www.gravatar.com/avatar/2d45524a0be8f50ef3fee90dd29ecc7e"
  },
  {
    "id": 203,
    "name": "Sally Todd",
    "company": "Millennium Chemicals Inc.",
    "email": "ubkeb@no.si",
    "avatar": "//www.gravatar.com/avatar/43b2c7f5954565f2fd0562eae01cc491"
  },
  {
    "id": 204,
    "name": "Jeff Long",
    "company": "Comerica Inc.",
    "email": "jowdit@vujivhu.ml",
    "avatar": "//www.gravatar.com/avatar/dc3443c504da5951bf1cfa941db9b2d5"
  },
  {
    "id": 205,
    "name": "Essie Padilla",
    "company": "Circuit City Stores Inc.",
    "email": "ebofi@pa.ca",
    "avatar": "//www.gravatar.com/avatar/52cd5efe0812ceb31ee8b2320284616c"
  },
  {
    "id": 206,
    "name": "Carrie Matthews",
    "company": "Dillard's Inc.",
    "email": "bol@zigjew.es",
    "avatar": "//www.gravatar.com/avatar/8e4232033da3f5103727628c07d6d08d"
  },
  {
    "id": 207,
    "name": "Dennis Burke",
    "company": "Anixter International Inc.",
    "email": "min@cubitepin.mx",
    "avatar": "//www.gravatar.com/avatar/e79737b49cf8a0f5b3c8a9bd5d924a3b"
  },
  {
    "id": 208,
    "name": "Mary Norman",
    "company": "Unocal Corporation",
    "email": "zebikogec@gim.nf",
    "avatar": "//www.gravatar.com/avatar/8ca97d0da70554186f6a651084d47dec"
  },
  {
    "id": 209,
    "name": "Bernard Salazar",
    "company": "Enterprise Products Partners L.P.",
    "email": "ne@avce.ye",
    "avatar": "//www.gravatar.com/avatar/726781914fdd21c5a4d5b7a8099d2030"
  },
  {
    "id": 210,
    "name": "Eugenia Morales",
    "company": "National Semiconductor Corporation",
    "email": "topmuki@bizavso.kn",
    "avatar": "//www.gravatar.com/avatar/16d513f7e95b5d2f4a3db3f0cb2b713e"
  },
  {
    "id": 211,
    "name": "Adele Atkins",
    "company": "Kelly Services Inc.",
    "email": "pazlikedi@locuppat.th",
    "avatar": "//www.gravatar.com/avatar/8fdf90e8b1ee6870257aec8384ab1be8"
  },
  {
    "id": 212,
    "name": "Patrick Morris",
    "company": "Oglethorpe Power Corp.",
    "email": "furodo@loc.mg",
    "avatar": "//www.gravatar.com/avatar/dd44479d783a6a260a4053e7ffa88f4e"
  },
  {
    "id": 213,
    "name": "Gregory Wong",
    "company": "Del Monte Foods Co",
    "email": "piz@huwtu.at",
    "avatar": "//www.gravatar.com/avatar/00764f29f9bd6a1eb26a2a4b54153d1d"
  },
  {
    "id": 214,
    "name": "Amy Haynes",
    "company": "Enron Corp.",
    "email": "tosusak@noted.ps",
    "avatar": "//www.gravatar.com/avatar/61e87d9040a3aa673340e13408b36dce"
  },
  {
    "id": 215,
    "name": "Melvin Perry",
    "company": "New York Times Company",
    "email": "zanus@lofuwol.eu",
    "avatar": "//www.gravatar.com/avatar/bb555636b4be668c8c96efddeddc8863"
  },
  {
    "id": 216,
    "name": "Clayton Hicks",
    "company": "Enterprise Products Partners L.P.",
    "email": "dob@ici.ir",
    "avatar": "//www.gravatar.com/avatar/6524ddde0197c5df315d2c23f4f65cba"
  },
  {
    "id": 217,
    "name": "Jared Lynch",
    "company": "Tower Automotive Inc.",
    "email": "imu@hi.mn",
    "avatar": "//www.gravatar.com/avatar/ac616d20f5d6584bc62a8d41f8c2abac"
  },
  {
    "id": 218,
    "name": "Nathaniel Flores",
    "company": "Potomac Electric Power Co.",
    "email": "uguelarem@jazmowrat.va",
    "avatar": "//www.gravatar.com/avatar/7097e64d61c720bafb2798bd5c5e7179"
  },
  {
    "id": 219,
    "name": "Mamie Black",
    "company": "Automatic Data Processing, Inc.",
    "email": "donohofe@tapku.ai",
    "avatar": "//www.gravatar.com/avatar/68a81088cb05deaecc4fc4a4fd7e2df6"
  },
  {
    "id": 220,
    "name": "Olive Hicks",
    "company": "Integrated Electrical Services Inc.",
    "email": "kilo@zih.tm",
    "avatar": "//www.gravatar.com/avatar/904d06a93caac2a8807d3d69ff445723"
  },
  {
    "id": 221,
    "name": "Philip Taylor",
    "company": "Progress Energy Inc",
    "email": "egasezu@gebjo.gr",
    "avatar": "//www.gravatar.com/avatar/d5fca487ca01759e1fb731fd3da51d3b"
  },
  {
    "id": 222,
    "name": "Elsie Reid",
    "company": "Affiliated Computer Services, Inc.",
    "email": "uheotur@veolo.tf",
    "avatar": "//www.gravatar.com/avatar/209557849fa6897bc0802da7b56ea79b"
  },
  {
    "id": 223,
    "name": "Gussie Guzman",
    "company": "Calpine Corp.",
    "email": "tek@vo.bs",
    "avatar": "//www.gravatar.com/avatar/0b4dcb85d0a9d4e6115af195251b451d"
  },
  {
    "id": 224,
    "name": "Brian Wood",
    "company": "Stewart & Stevenson Services Inc",
    "email": "busudvi@rozfumes.kp",
    "avatar": "//www.gravatar.com/avatar/8cb9d108b614d02aa64978211af3b9b8"
  },
  {
    "id": 225,
    "name": "Mittie Walton",
    "company": "CenturyTel Inc.",
    "email": "dic@sovweiwa.tr",
    "avatar": "//www.gravatar.com/avatar/fc8ef5dbcf3ec011b818b5c210441247"
  },
  {
    "id": 226,
    "name": "Corey Ferguson",
    "company": "Bemis Company, Inc.",
    "email": "cozipig@rud.pl",
    "avatar": "//www.gravatar.com/avatar/8966016139ccd67a96077aade234e37f"
  },
  {
    "id": 227,
    "name": "Marion Kennedy",
    "company": "Tesoro Petroleum Corp.",
    "email": "ku@dog.mw",
    "avatar": "//www.gravatar.com/avatar/9fa714b9e49fd882a70b790bce4e962e"
  },
  {
    "id": 228,
    "name": "Esther Roberts",
    "company": "Unova Inc",
    "email": "mo@vundemvus.kh",
    "avatar": "//www.gravatar.com/avatar/f031e6203bddaf46b3dcc2a54b92b4cd"
  },
  {
    "id": 229,
    "name": "Matilda Adams",
    "company": "Pantry Inc",
    "email": "wor@hunnomor.bm",
    "avatar": "//www.gravatar.com/avatar/929fbbef4047f3d6b42270ef5502a86e"
  },
  {
    "id": 230,
    "name": "Alma Garcia",
    "company": "Autoliv, Inc.",
    "email": "zi@ju.bf",
    "avatar": "//www.gravatar.com/avatar/0731bcae7b78f71d2e1f082cd7685188"
  },
  {
    "id": 231,
    "name": "Hester Carpenter",
    "company": "Marathon Oil Corporation",
    "email": "pobohuc@elino.cz",
    "avatar": "//www.gravatar.com/avatar/4374e5c3cae09d3788171a2a86cce38e"
  },
  {
    "id": 232,
    "name": "Mattie Oliver",
    "company": "Beazer Homes USA, Inc.",
    "email": "bisan@utoga.mh",
    "avatar": "//www.gravatar.com/avatar/f523768aa6a14ac0510cdf222eea378e"
  },
  {
    "id": 233,
    "name": "Matthew Hubbard",
    "company": "United Technologies Corporation",
    "email": "cafoduas@hel.eg",
    "avatar": "//www.gravatar.com/avatar/607c455d64ca69d49e85bd43a8b94a9d"
  },
  {
    "id": 234,
    "name": "Lucy Crawford",
    "company": "The McGraw-Hill Companies Inc.",
    "email": "fizouzi@zov.lk",
    "avatar": "//www.gravatar.com/avatar/cd1c7a81138ae64c86ec19d615a5dfb3"
  },
  {
    "id": 235,
    "name": "Teresa Barrett",
    "company": "Pitney Bowes Inc.",
    "email": "nofkuep@folbactuh.vg",
    "avatar": "//www.gravatar.com/avatar/89b6dff00e9dfb95bf9870adb30a6d00"
  },
  {
    "id": 236,
    "name": "Ophelia Sanders",
    "company": "Peoples Energy Corp.",
    "email": "erojij@fioti.sa",
    "avatar": "//www.gravatar.com/avatar/10fa7ebd0456578b0306e51205f95d47"
  },
  {
    "id": 237,
    "name": "Susie Hale",
    "company": "Federal Mogul Corp.",
    "email": "lad@rijesez.sg",
    "avatar": "//www.gravatar.com/avatar/9e9fa2c016ea42d98ae46c756a410a83"
  },
  {
    "id": 238,
    "name": "Mina Delgado",
    "company": "Oracle Corp",
    "email": "ace@eze.gp",
    "avatar": "//www.gravatar.com/avatar/8c0b747f2988d9d0d55fe38b50b607f7"
  },
  {
    "id": 239,
    "name": "Luis May",
    "company": "Entergy Corporation",
    "email": "wulbovpi@tipfagnog.mh",
    "avatar": "//www.gravatar.com/avatar/04f92f2a65e76aea5fae471865104e6b"
  },
  {
    "id": 240,
    "name": "Caroline Ballard",
    "company": "Staff Leasing Inc.",
    "email": "diluij@orva.io",
    "avatar": "//www.gravatar.com/avatar/7717961aba2035c3184cec6f0f999bee"
  },
  {
    "id": 241,
    "name": "Aaron Estrada",
    "company": "Fleetwood Enterprises Inc.",
    "email": "fenbessa@du.bs",
    "avatar": "//www.gravatar.com/avatar/58fda2afe1847839aaead8297c42fd97"
  },
  {
    "id": 242,
    "name": "Lydia Powell",
    "company": "Bank of America Corporation",
    "email": "ces@riarawun.ky",
    "avatar": "//www.gravatar.com/avatar/8f0aca2e34de59fa3117e47d35fee174"
  },
  {
    "id": 243,
    "name": "Jared Vasquez",
    "company": "Gannett Co., Inc.",
    "email": "evave@gos.lt",
    "avatar": "//www.gravatar.com/avatar/55c8e0a11cb6039b3a7be7b3ef9a449f"
  },
  {
    "id": 244,
    "name": "Gene Thornton",
    "company": "Weis Markets Inc.",
    "email": "bansopzac@bonbobube.tp",
    "avatar": "//www.gravatar.com/avatar/16d66a803641d8f07557988074c9a9da"
  },
  {
    "id": 245,
    "name": "Blake Powell",
    "company": "RGS Energy Group Inc",
    "email": "dutti@obafil.cr",
    "avatar": "//www.gravatar.com/avatar/e88d1d67b77ee1a40039d96426e25e23"
  },
  {
    "id": 246,
    "name": "Nathaniel Adkins",
    "company": "Lyondell Chemical Company",
    "email": "abupinho@odjimze.mx",
    "avatar": "//www.gravatar.com/avatar/e3b01b9cf848192fead30d7da430ef10"
  },
  {
    "id": 247,
    "name": "Virginia Castillo",
    "company": "Dole Food Company, Inc.",
    "email": "gicozvum@daw.ug",
    "avatar": "//www.gravatar.com/avatar/27a9399fc35d50b87f6f19f2b09206d5"
  },
  {
    "id": 248,
    "name": "Ada Sharp",
    "company": "Domino's Pizza LLC",
    "email": "efoduv@uf.sn",
    "avatar": "//www.gravatar.com/avatar/f8f139adfccd5837df70f700dc597f8b"
  },
];

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredUsers, setFilteredUsers] = useState(initialUsers);

  const handleSearch = () => {
    const filtered = initialUsers.filter((user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  const handleClear = () => {
    setFilteredUsers(initialUsers);
    setSearchQuery('');
  };

  return (
    <div className="App">
      <h1>Avatar Codex</h1>
      <SearchBar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        handleClear={handleClear}
      />
      <div className="user-list">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id} className="user-card">
              <img src={user.avatar} alt={user.name} />
              <div>
                <h3>{user.name}</h3>
                <p>{user.company}</p>
                <p>{user.email}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="no-records">No records found</p>
        )}
      </div>
    </div>
  );
}

export default App;
