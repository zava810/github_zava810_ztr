# ztr

a simple webextension to transliterate webpages from indic script (malayalam, hindi, kannada) to english/latin/roman script (manglish, hinglish, kanglish).

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
