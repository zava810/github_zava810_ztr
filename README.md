# ztr (git clone cmd : git clone https://gitlab.com/zava810/ztr.git)

a simple webextension to transliterate webpages from indic script (malayalam, hindi, kannada, tamil, telugu, punzabi, guzrati, marathi, bengali/baNgla/oriya) to zabc (hscii810).

### hou to 1.clone 2.install 3.build 4.run 5.test steps :
1. in cmd prompt run belou git clone command. it vill zenerate ztr folder vith **.git** folder inside.
   > git clone https://gitlab.com/zava810/ztr.git
2. install [nvm->node->npm](https://github.com/nvm-sh/nvm) & run npm install command. it vill zenerate ztr/**node_modules** folder.
   > npm install
3. build firefox extension by running belou **build** command. it vill zenerate ztr/**extension/[firefox , firefox.xpi]** folder tree.
   > npm run build:firefox
4: open firefox & type url **about:debugging#/runtime/this-firefox**
5. click **load temporary add-on** button & select
6. **ztr/extension/firefox/manifest.json** file.
7. in firefox open [zee hindi](https://zeenews.india.com/hindi) in neu table
8. in firefox extension bar click **ztr(z icon)**
9. click **transliterate button** & check/test if translierated in zabc properply. [pliiz ping](https://linkedin.com/in/viml) phur changes needed in [libindik-transliteration](https://www.npmjs.com/package/libindik-transliteration) library.
10. install **[u5cdot](https://github.com/Font77/unicase_phonts)** in your system(android/windows/linux/firefox)
10. in firefox open [about:preferences](about:preferences) -&--> search fonts
11. set default font **u5cdot & size 12**
12. in advanced do same for :
  1. other vriting systems
  2. latin
  3. hindi , malayalam , tamil , telugu etc ...
13. **uncheck "Allow pages to select" checkbox**
10. belou is list phur good sites to test phur languages:
  1. [hinDi_mrathi_punzabi_guzraTi](https://zeenews.india.com/hindi)
  1. [Tmil_niyuz](https://www.dinamalar.com/)
  1. [mlyalm niyuz](https://www.manoramaonline.com/home.html)
  2. [hindi food recepies](https://nishamadhulika.com/category/355-puri-recipe.html)
  3. [bbc hindi](https://www.bbc.com/hindi)
  4. [pnzabi_gurumukhi niyuz](https://jagbani.punjabkesari.in/)
  5. [Telugu niyuz](https://telugu.oneindia.com/)
  5. [kannada niyuz](https://kannada.oneindia.com)
  6. [bNgali_baNgla](https://bengali.oneindia.com)
  7. [guzraTi niyuz](https://gujarati.oneindia.com)
  8. [urriya niyuz](https://odia.oneindia.com)


made with help of the awesome [web-extension-starter](https://github.com/abhijithvijayan/web-extension-starter).

## usage

install the extension and you'll see ztr icon on your browser toolbar. click on it and simply click "transliterate".

### features

* supports :
  1. mlyalm
  2. hinDi/Devanagri
  3. knrra/Tullu
  4. Tmil
  5. Telugu
  6. mrathi
  7. guzraTi
  8. pnzabi/gurumukhi
  9. bNgali/baNgla
  [ztr](//gitlab.com/zava810/ztr)
* auto transliterate page on load
* offline [requires no internet to transliterate]
* options page has a transliterator tool for manual text

## development setup

* clone
* `npm install`
* `npm run dev:firefox` to start the development server for firefox addon
* `npm run build:firefox` to build `.xpi`

this ekstension is actually developed by [subin|akshay](https://subinsb.com).
in ztr , i ekstended it to 7 other indian languages as listed above.
also it needs u5cdot phont to vieu transliterated tekst to read.
as in betveen vord caps ADHNT does not look good. so unicase.
in unicase all are oph same height.

in indian languages ve use only 1 case . so only unicase phont is needed to read transliterated page.
please install u5cdot phont phrom [hao to install u5cdot phont](https://github.com/Font77/unicase_phonts/blob/master/hao_tu_install.md).
**[u5cdot unicase phonts](https://github.com/Font77/unicase_phonts)**

are derived/customized phrom actual [delius unicase](https://www.fontsquirrel.com/fonts/delius-unicase) phonts vhich

are designed (by [natalia raices](https://www.linkedin.com/in/nataliaraices/) .

my dev setup :

* os : `linux mint 19 [ubuntu 18.04 lts]`
* node : `14.17.0` & npm : `6.14.13`
* node : `12.14.0` & npm : `7.14.0`

but it'll work on majority others too.
