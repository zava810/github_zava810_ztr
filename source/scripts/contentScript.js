import browser from 'webextension-polyfill';
import transliterator from 'libindik-transliteration';
import Tooltip from './tooltip.js';
import '../styles/contentStyle.scss';
console.log("aa");
var t, transliterated_webpage = false, observer = null, overlay = false;
function transliterate(input) { return t.transliterate_indik_abc(input); }
function transliterate_elem_content(elem) {
  var nodes = [], text = "", node,
    nodeIterator = elem.ownerDocument.createNodeIterator( elem, NodeFilter.SHOW_TEXT,
      {
        acceptNode: function(node) { if (node.parentNode && node.parentNode.nodeName !== 'SCRIPT') { return NodeFilter.FILTER_ACCEPT; } }
      },
      false
    );
  while (node = nodeIterator.nextNode()) { nodes.push({ textNode: node, start: text.length }); text += node.nodeValue }
  if (!nodes.length) return;
  for (var i = 0; i < nodes.length; ++i) { node = nodes[i];
    var spanNode = document.createElement("span");
    spanNode.className = "yunikes";
    spanNode.dataset.oriznl_yunikod = node.textNode.textContent
    node.textNode.parentNode.replaceChild(spanNode, node.textNode);
    spanNode.appendChild(node.textNode);
  }
  nodes = elem.getElementsByClassName('yunikes')
  for (var i = 0; i < nodes.length; ++i) { node = nodes[i]; node.textContent = transliterate(node.textContent) }
}
function detectMob() {
  const toMatch = [ /Android/i, /webOS/i, /iPhone/i, /iPad/i, /iPod/i, /BlackBerry/i, /Windows Phone/i ];
  return toMatch.some((toMatchItem) => { return navigator.userAgent.match(toMatchItem); });
}
function transliterate_webpage() {
  t = new transliterator();
  transliterate_elem_content(document.body);
  if (overlay && !detectMob()) {
    let onMouseOver = async (e) => { Tooltip.init('oriznl_yunikod'); document.removeEventListener('mouseover', onMouseOver); }
    document.addEventListener('mouseover', onMouseOver);
  }
  transliterated_webpage = true
}
function untransliterate_webpage() {
  Tooltip.destroy()
  if (observer) observer.disconnect()
  var nodes = document.getElementsByClassName('yunikes'), node;
  for (let i = 0;i < nodes.length;i++) {
    node = nodes[i];
    node.innerText = node.dataset.oriznl_yunikod;
  }
  transliterated_webpage = false
}
function init() {
  browser.storage.sync.get({ auto: false, overlay: true }).then((result) => {
    var lang = result.lang; overlay = result.overlay;
    if (result.auto) {
      transliterate_webpage(lang);
      observer = new MutationObserver(mutationsList => {
        for (let mutation of mutationsList) {
          if (
            mutation.type === 'childList' && mutation.target.className !== 'yunikes' && mutation.target.parentNode &&
            mutation.target.parentNode.className.indexOf('ztr-tooltip-container') === -1
          ) { for (let elem of mutation.addedNodes) { transliterate_elem_content(elem); } }
        }
      });
      observer.observe( document.body, { characterData: false, attributes: false, childList: true, subtree: true } );
    }
  }, (err) => { console.log(err); });
}
browser.runtime.onMessage.addListener(request => {
  if (request.lang) { init(); transliterate_webpage(); } else if (request.untransliterate) { untransliterate_webpage(); } else { return Promise.resolve(transliterated_webpage); }
}); // On popup button click
init()
