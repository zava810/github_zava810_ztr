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
  [hscii](//gitlab.com/hscii)
* auto transliterate page on load
* offline [requires no internet to transliterate]
* options page has a transliterator tool for manual text

## development setup

* clone
* `npm install`
* `npm run dev:firefox` to start the development server for firefox addon
* `npm run build:firefox` to build `.xpi`

indiAn bhasaye -> unicase . so [install](https://github.com/Font77/unicase_phonts/blob/master/hao_tu_install.md) custom delius unicase phonts (by natalia raices)

my dev setup :

* os : `linux mint 19 [ubuntu 18.04 lts]`
* node : `14.17.0`
* npm : `6.14.13`

but it'll work on majority others too.
