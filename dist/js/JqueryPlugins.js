/*! jQuery v3.4.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],E=C.document,r=Object.getPrototypeOf,s=t.slice,g=t.concat,u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},x=function(e){return null!=e&&e===e.window},c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.4.1",k=function(e,t){return new k.fn.init(e,t)},p=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function d(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}k.fn=k.prototype={jquery:f,constructor:k,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=k.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return k.each(this,e)},map:function(n){return this.pushStack(k.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},k.extend=k.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(k.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||k.isPlainObject(n)?n:{},i=!1,a[t]=k.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},k.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t){b(e,{nonce:t&&t.nonce})},each:function(e,t){var n,r=0;if(d(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(p,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(d(Object(e))?k.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(d(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g.apply([],a)},guid:1,support:y}),"function"==typeof Symbol&&(k.fn[Symbol.iterator]=t[Symbol.iterator]),k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var h=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,k="sizzle"+1*new Date,m=n.document,S=0,r=0,p=ue(),x=ue(),N=ue(),A=ue(),D=function(e,t){return e===t&&(l=!0),0},j={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",$=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp($),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+$),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ne=function(e,t,n){var r="0x"+t-65536;return r!=r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(m.childNodes),m.childNodes),t[m.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&((e?e.ownerDocument||e:m)!==C&&T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!A[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&U.test(t)){(s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=k),o=(l=h(t)).length;while(o--)l[o]="#"+s+" "+xe(l[o]);c=l.join(","),f=ee.test(t)&&ye(e.parentNode)||e}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){A(t,!0)}finally{s===k&&e.removeAttribute("id")}}}return g(t.replace(B,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[k]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:m;return r!==C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),m!==C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=k,!C.getElementsByName||!C.getElementsByName(k).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){a.appendChild(e).innerHTML="<a id='"+k+"'></a><select id='"+k+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+k+"-]").length||v.push("~="),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+k+"+*").length||v.push(".#.+[+~]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",$)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e===C||e.ownerDocument===m&&y(m,e)?-1:t===C||t.ownerDocument===m&&y(m,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===C?-1:t===C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]===m?-1:s[r]===m?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if((e.ownerDocument||e)!==C&&T(e),d.matchesSelector&&E&&!A[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){A(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!==C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!==C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&j.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(D),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=p[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&p(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(F," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[S,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===S&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[k]||(a[k]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[S,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[k]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace(B,"$1"));return s[k]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[S,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[k]||(e[k]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===S&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[k]&&(v=Ce(v)),y&&!y[k]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[k]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(B,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(B," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=N[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[k]?i.push(a):o.push(a);(a=N(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=S+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t===C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument===C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(S=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(S=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=k.split("").sort(D).join("")===k,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);k.find=h,k.expr=h.selectors,k.expr[":"]=k.expr.pseudos,k.uniqueSort=k.unique=h.uniqueSort,k.text=h.getText,k.isXMLDoc=h.isXML,k.contains=h.contains,k.escapeSelector=h.escape;var T=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&k(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},N=k.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var D=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?k.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?k.grep(e,function(e){return e===n!==r}):"string"!=typeof n?k.grep(e,function(e){return-1<i.call(n,e)!==r}):k.filter(n,e,r)}k.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?k.find.matchesSelector(r,e)?[r]:[]:k.find.matches(e,k.grep(t,function(e){return 1===e.nodeType}))},k.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(k(e).filter(function(){for(t=0;t<r;t++)if(k.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)k.find(e,i[t],n);return 1<r?k.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&N.test(e)?k(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(k.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:L.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof k?t[0]:t,k.merge(this,k.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),D.test(r[1])&&k.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(k):k.makeArray(e,this)}).prototype=k.fn,q=k(E);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}k.fn.extend({has:function(e){var t=k(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(k.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&k(e);if(!N.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&k.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?k.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(k(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(k.uniqueSort(k.merge(this.get(),k(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),k.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return T(e,"parentNode")},parentsUntil:function(e,t,n){return T(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return T(e,"nextSibling")},prevAll:function(e){return T(e,"previousSibling")},nextUntil:function(e,t,n){return T(e,"nextSibling",n)},prevUntil:function(e,t,n){return T(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return"undefined"!=typeof e.contentDocument?e.contentDocument:(A(e,"template")&&(e=e.content||e),k.merge([],e.childNodes))}},function(r,i){k.fn[r]=function(e,t){var n=k.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=k.filter(t,n)),1<this.length&&(O[r]||k.uniqueSort(n),H.test(r)&&n.reverse()),this.pushStack(n)}});var R=/[^\x20\t\r\n\f]+/g;function M(e){return e}function I(e){throw e}function W(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}k.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},k.each(e.match(R)||[],function(e,t){n[t]=!0}),n):k.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){k.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return k.each(arguments,function(e,t){var n;while(-1<(n=k.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<k.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},k.extend({Deferred:function(e){var o=[["notify","progress",k.Callbacks("memory"),k.Callbacks("memory"),2],["resolve","done",k.Callbacks("once memory"),k.Callbacks("once memory"),0,"resolved"],["reject","fail",k.Callbacks("once memory"),k.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return k.Deferred(function(r){k.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,M,s),l(u,o,I,s)):(u++,t.call(e,l(u,o,M,s),l(u,o,I,s),l(u,o,M,o.notifyWith))):(a!==M&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){k.Deferred.exceptionHook&&k.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==I&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(k.Deferred.getStackHook&&(t.stackTrace=k.Deferred.getStackHook()),C.setTimeout(t))}}return k.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:M,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:M)),o[2][3].add(l(0,e,m(n)?n:I))}).promise()},promise:function(e){return null!=e?k.extend(e,a):a}},s={};return k.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=k.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(W(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)W(i[t],a(t),o.reject);return o.promise()}});var $=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;k.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&$.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},k.readyException=function(e){C.setTimeout(function(){throw e})};var F=k.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),k.ready()}k.fn.ready=function(e){return F.then(e)["catch"](function(e){k.readyException(e)}),this},k.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--k.readyWait:k.isReady)||(k.isReady=!0)!==e&&0<--k.readyWait||F.resolveWith(E,[k])}}),k.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(k.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var _=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)_(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(k(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},z=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function V(e){return e.replace(z,"ms-").replace(U,X)}var G=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Y(){this.expando=k.expando+Y.uid++}Y.uid=1,Y.prototype={cache:function(e){var t=e[this.expando];return t||(t={},G(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[V(t)]=n;else for(r in t)i[V(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][V(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(V):(t=V(t))in r?[t]:t.match(R)||[]).length;while(n--)delete r[t[n]]}(void 0===t||k.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!k.isEmptyObject(t)}};var Q=new Y,J=new Y,K=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function ee(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Z,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:K.test(i)?JSON.parse(i):i)}catch(e){}J.set(e,t,n)}else n=void 0;return n}k.extend({hasData:function(e){return J.hasData(e)||Q.hasData(e)},data:function(e,t,n){return J.access(e,t,n)},removeData:function(e,t){J.remove(e,t)},_data:function(e,t,n){return Q.access(e,t,n)},_removeData:function(e,t){Q.remove(e,t)}}),k.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=J.get(o),1===o.nodeType&&!Q.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=V(r.slice(5)),ee(o,r,i[r]));Q.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){J.set(this,n)}):_(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=J.get(o,n))?t:void 0!==(t=ee(o,n))?t:void 0;this.each(function(){J.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){J.remove(this,e)})}}),k.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Q.get(e,t),n&&(!r||Array.isArray(n)?r=Q.access(e,t,k.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=k.queue(e,t),r=n.length,i=n.shift(),o=k._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){k.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Q.get(e,n)||Q.access(e,n,{empty:k.Callbacks("once memory").add(function(){Q.remove(e,[t+"queue",n])})})}}),k.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?k.queue(this[0],t):void 0===n?this:this.each(function(){var e=k.queue(this,t,n);k._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&k.dequeue(this,t)})},dequeue:function(e){return this.each(function(){k.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=k.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Q.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),re=["Top","Right","Bottom","Left"],ie=E.documentElement,oe=function(e){return k.contains(e.ownerDocument,e)},ae={composed:!0};ie.getRootNode&&(oe=function(e){return k.contains(e.ownerDocument,e)||e.getRootNode(ae)===e.ownerDocument});var se=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&oe(e)&&"none"===k.css(e,"display")},ue=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];for(o in i=n.apply(e,r||[]),t)e.style[o]=a[o];return i};function le(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return k.css(e,t,"")},u=s(),l=n&&n[3]||(k.cssNumber[t]?"":"px"),c=e.nodeType&&(k.cssNumber[t]||"px"!==l&&+u)&&ne.exec(k.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)k.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,k.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ce={};function fe(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Q.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&se(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ce[s])||(o=a.body.appendChild(a.createElement(s)),u=k.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ce[s]=u)))):"none"!==n&&(l[c]="none",Q.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}k.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?k(this).show():k(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?k.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Q.set(e[n],"globalEval",!t||Q.get(t[n],"globalEval"))}ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;var me,xe,be=/<|&#?\w+;/;function we(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))k.merge(p,o.nodeType?[o]:o);else if(be.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+k.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;k.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<k.inArray(o,r))i&&i.push(o);else if(l=oe(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}me=E.createDocumentFragment().appendChild(E.createElement("div")),(xe=E.createElement("input")).setAttribute("type","radio"),xe.setAttribute("checked","checked"),xe.setAttribute("name","t"),me.appendChild(xe),y.checkClone=me.cloneNode(!0).cloneNode(!0).lastChild.checked,me.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!me.cloneNode(!0).lastChild.defaultValue;var Te=/^key/,Ce=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ee=/^([^.]*)(?:\.(.+)|)/;function ke(){return!0}function Se(){return!1}function Ne(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ae(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ae(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Se;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return k().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=k.guid++)),e.each(function(){k.event.add(this,t,i,r,n)})}function De(e,i,o){o?(Q.set(e,i,!1),k.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Q.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(k.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Q.set(this,i,r),t=o(this,i),this[i](),r!==(n=Q.get(this,i))||t?Q.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n.value}else r.length&&(Q.set(this,i,{value:k.event.trigger(k.extend(r[0],k.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Q.get(e,i)&&k.event.add(e,i,ke)}k.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.get(t);if(v){n.handler&&(n=(o=n).handler,i=o.selector),i&&k.find.matchesSelector(ie,i),n.guid||(n.guid=k.guid++),(u=v.events)||(u=v.events={}),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof k&&k.event.triggered!==e.type?k.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(R)||[""]).length;while(l--)d=g=(s=Ee.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=k.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=k.event.special[d]||{},c=k.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&k.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),k.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Q.hasData(e)&&Q.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(R)||[""]).length;while(l--)if(d=g=(s=Ee.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=k.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||k.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)k.event.remove(e,d+t[l],n,r,!0);k.isEmptyObject(u)&&Q.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=k.event.fix(e),u=new Array(arguments.length),l=(Q.get(this,"events")||{})[s.type]||[],c=k.event.special[s.type]||{};for(u[0]=s,t=1;t<arguments.length;t++)u[t]=arguments[t];if(s.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,s)){a=k.event.handlers.call(this,s,l),t=0;while((i=a[t++])&&!s.isPropagationStopped()){s.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!s.isImmediatePropagationStopped())s.rnamespace&&!1!==o.namespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,void 0!==(r=((k.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u))&&!1===(s.result=r)&&(s.preventDefault(),s.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<k(i,this).index(l):k.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(k.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[k.expando]?e:new k.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click",ke),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&De(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Q.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},k.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},k.Event=function(e,t){if(!(this instanceof k.Event))return new k.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?ke:Se,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&k.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[k.expando]=!0},k.Event.prototype={constructor:k.Event,isDefaultPrevented:Se,isPropagationStopped:Se,isImmediatePropagationStopped:Se,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=ke,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=ke,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=ke,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},k.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&Te.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ce.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},k.event.addProp),k.each({focus:"focusin",blur:"focusout"},function(e,t){k.event.special[e]={setup:function(){return De(this,e,Ne),!1},trigger:function(){return De(this,e),!0},delegateType:t}}),k.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){k.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||k.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),k.fn.extend({on:function(e,t,n,r){return Ae(this,e,t,n,r)},one:function(e,t,n,r){return Ae(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,k(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Se),this.each(function(){k.event.remove(this,e,n,t)})}});var je=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,qe=/<script|<style|<link/i,Le=/checked\s*(?:[^=]|=\s*.checked.)/i,He=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Oe(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&k(e).children("tbody")[0]||e}function Pe(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Re(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Me(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(Q.hasData(e)&&(o=Q.access(e),a=Q.set(t,o),l=o.events))for(i in delete a.handle,a.events={},l)for(n=0,r=l[i].length;n<r;n++)k.event.add(t,i,l[i][n]);J.hasData(e)&&(s=J.access(e),u=k.extend({},s),J.set(t,u))}}function Ie(n,r,i,o){r=g.apply([],r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Le.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),Ie(t,r,i,o)});if(f&&(t=(e=we(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=k.map(ve(e,"script"),Pe)).length;c<f;c++)u=e,c!==p&&(u=k.clone(u,!0,!0),s&&k.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,k.map(a,Re),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Q.access(u,"globalEval")&&k.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?k._evalUrl&&!u.noModule&&k._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")}):b(u.textContent.replace(He,""),u,l))}return n}function We(e,t,n){for(var r,i=t?k.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||k.cleanData(ve(r)),r.parentNode&&(n&&oe(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}k.extend({htmlPrefilter:function(e){return e.replace(je,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=oe(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||k.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Me(o[r],a[r]);else Me(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=k.event.special,o=0;void 0!==(n=e[o]);o++)if(G(n)){if(t=n[Q.expando]){if(t.events)for(r in t.events)i[r]?k.event.remove(n,r):k.removeEvent(n,r,t.handle);n[Q.expando]=void 0}n[J.expando]&&(n[J.expando]=void 0)}}}),k.fn.extend({detach:function(e){return We(this,e,!0)},remove:function(e){return We(this,e)},text:function(e){return _(this,function(e){return void 0===e?k.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Ie(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Oe(this,e).appendChild(e)})},prepend:function(){return Ie(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Oe(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Ie(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(k.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return k.clone(this,e,t)})},html:function(e){return _(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!qe.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=k.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(k.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Ie(this,arguments,function(e){var t=this.parentNode;k.inArray(this,n)<0&&(k.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),k.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){k.fn[e]=function(e){for(var t,n=[],r=k(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),k(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var $e=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Fe=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Be=new RegExp(re.join("|"),"i");function _e(e,t,n){var r,i,o,a,s=e.style;return(n=n||Fe(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||oe(e)||(a=k.style(e,t)),!y.pixelBoxStyles()&&$e.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function ze(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(u){s.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",u.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",ie.appendChild(s).appendChild(u);var e=C.getComputedStyle(u);n="1%"!==e.top,a=12===t(e.marginLeft),u.style.right="60%",o=36===t(e.right),r=36===t(e.width),u.style.position="absolute",i=12===t(u.offsetWidth/3),ie.removeChild(s),u=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s=E.createElement("div"),u=E.createElement("div");u.style&&(u.style.backgroundClip="content-box",u.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===u.style.backgroundClip,k.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),a},scrollboxSize:function(){return e(),i}}))}();var Ue=["Webkit","Moz","ms"],Xe=E.createElement("div").style,Ve={};function Ge(e){var t=k.cssProps[e]||Ve[e];return t||(e in Xe?e:Ve[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Ue.length;while(n--)if((e=Ue[n]+t)in Xe)return e}(e)||e)}var Ye=/^(none|table(?!-c[ea]).+)/,Qe=/^--/,Je={position:"absolute",visibility:"hidden",display:"block"},Ke={letterSpacing:"0",fontWeight:"400"};function Ze(e,t,n){var r=ne.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function et(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=k.css(e,n+re[a],!0,i)),r?("content"===n&&(u-=k.css(e,"padding"+re[a],!0,i)),"margin"!==n&&(u-=k.css(e,"border"+re[a]+"Width",!0,i))):(u+=k.css(e,"padding"+re[a],!0,i),"padding"!==n?u+=k.css(e,"border"+re[a]+"Width",!0,i):s+=k.css(e,"border"+re[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function tt(e,t,n){var r=Fe(e),i=(!y.boxSizingReliable()||n)&&"border-box"===k.css(e,"boxSizing",!1,r),o=i,a=_e(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if($e.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||"auto"===a||!parseFloat(a)&&"inline"===k.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===k.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+et(e,t,n||(i?"border":"content"),o,r,a)+"px"}function nt(e,t,n,r,i){return new nt.prototype.init(e,t,n,r,i)}k.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=_e(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=V(t),u=Qe.test(t),l=e.style;if(u||(t=Ge(s)),a=k.cssHooks[t]||k.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=ne.exec(n))&&i[1]&&(n=le(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(k.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=V(t);return Qe.test(t)||(t=Ge(s)),(a=k.cssHooks[t]||k.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=_e(e,t,r)),"normal"===i&&t in Ke&&(i=Ke[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),k.each(["height","width"],function(e,u){k.cssHooks[u]={get:function(e,t,n){if(t)return!Ye.test(k.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tt(e,u,n):ue(e,Je,function(){return tt(e,u,n)})},set:function(e,t,n){var r,i=Fe(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===k.css(e,"boxSizing",!1,i),s=n?et(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-et(e,u,"border",!1,i)-.5)),s&&(r=ne.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=k.css(e,u)),Ze(0,t,s)}}}),k.cssHooks.marginLeft=ze(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(_e(e,"marginLeft"))||e.getBoundingClientRect().left-ue(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),k.each({margin:"",padding:"",border:"Width"},function(i,o){k.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+re[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(k.cssHooks[i+o].set=Ze)}),k.fn.extend({css:function(e,t){return _(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Fe(e),i=t.length;a<i;a++)o[t[a]]=k.css(e,t[a],!1,r);return o}return void 0!==n?k.style(e,t,n):k.css(e,t)},e,t,1<arguments.length)}}),((k.Tween=nt).prototype={constructor:nt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||k.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(k.cssNumber[n]?"":"px")},cur:function(){var e=nt.propHooks[this.prop];return e&&e.get?e.get(this):nt.propHooks._default.get(this)},run:function(e){var t,n=nt.propHooks[this.prop];return this.options.duration?this.pos=t=k.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):nt.propHooks._default.set(this),this}}).init.prototype=nt.prototype,(nt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=k.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){k.fx.step[e.prop]?k.fx.step[e.prop](e):1!==e.elem.nodeType||!k.cssHooks[e.prop]&&null==e.elem.style[Ge(e.prop)]?e.elem[e.prop]=e.now:k.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=nt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},k.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},k.fx=nt.prototype.init,k.fx.step={};var rt,it,ot,at,st=/^(?:toggle|show|hide)$/,ut=/queueHooks$/;function lt(){it&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(lt):C.setTimeout(lt,k.fx.interval),k.fx.tick())}function ct(){return C.setTimeout(function(){rt=void 0}),rt=Date.now()}function ft(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=re[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function pt(e,t,n){for(var r,i=(dt.tweeners[t]||[]).concat(dt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function dt(o,e,t){var n,a,r=0,i=dt.prefilters.length,s=k.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=rt||ct(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:k.extend({},e),opts:k.extend(!0,{specialEasing:{},easing:k.easing._default},t),originalProperties:e,originalOptions:t,startTime:rt||ct(),duration:t.duration,tweens:[],createTween:function(e,t){var n=k.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=V(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=k.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=dt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(k._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return k.map(c,pt,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),k.fx.timer(k.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}k.Animation=k.extend(dt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return le(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(R);for(var n,r=0,i=e.length;r<i;r++)n=e[r],dt.tweeners[n]=dt.tweeners[n]||[],dt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&se(e),v=Q.get(e,"fxshow");for(r in n.queue||(null==(a=k._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,k.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],st.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||k.style(e,r)}if((u=!k.isEmptyObject(t))||!k.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Q.get(e,"display")),"none"===(c=k.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=k.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===k.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Q.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&fe([e],!0),p.done(function(){for(r in g||fe([e]),Q.remove(e,"fxshow"),d)k.style(e,r,d[r])})),u=pt(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?dt.prefilters.unshift(e):dt.prefilters.push(e)}}),k.speed=function(e,t,n){var r=e&&"object"==typeof e?k.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return k.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in k.fx.speeds?r.duration=k.fx.speeds[r.duration]:r.duration=k.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&k.dequeue(this,r.queue)},r},k.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=k.isEmptyObject(t),o=k.speed(e,n,r),a=function(){var e=dt(this,k.extend({},t),o);(i||Q.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&!1!==i&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=k.timers,r=Q.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&ut.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||k.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Q.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=k.timers,o=n?n.length:0;for(t.finish=!0,k.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),k.each(["toggle","show","hide"],function(e,r){var i=k.fn[r];k.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(ft(r,!0),e,t,n)}}),k.each({slideDown:ft("show"),slideUp:ft("hide"),slideToggle:ft("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){k.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),k.timers=[],k.fx.tick=function(){var e,t=0,n=k.timers;for(rt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||k.fx.stop(),rt=void 0},k.fx.timer=function(e){k.timers.push(e),k.fx.start()},k.fx.interval=13,k.fx.start=function(){it||(it=!0,lt())},k.fx.stop=function(){it=null},k.fx.speeds={slow:600,fast:200,_default:400},k.fn.delay=function(r,e){return r=k.fx&&k.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},ot=E.createElement("input"),at=E.createElement("select").appendChild(E.createElement("option")),ot.type="checkbox",y.checkOn=""!==ot.value,y.optSelected=at.selected,(ot=E.createElement("input")).value="t",ot.type="radio",y.radioValue="t"===ot.value;var ht,gt=k.expr.attrHandle;k.fn.extend({attr:function(e,t){return _(this,k.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){k.removeAttr(this,e)})}}),k.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?k.prop(e,t,n):(1===o&&k.isXMLDoc(e)||(i=k.attrHooks[t.toLowerCase()]||(k.expr.match.bool.test(t)?ht:void 0)),void 0!==n?null===n?void k.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=k.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(R);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ht={set:function(e,t,n){return!1===t?k.removeAttr(e,n):e.setAttribute(n,n),n}},k.each(k.expr.match.bool.source.match(/\w+/g),function(e,t){var a=gt[t]||k.find.attr;gt[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=gt[o],gt[o]=r,r=null!=a(e,t,n)?o:null,gt[o]=i),r}});var vt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;function mt(e){return(e.match(R)||[]).join(" ")}function xt(e){return e.getAttribute&&e.getAttribute("class")||""}function bt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(R)||[]}k.fn.extend({prop:function(e,t){return _(this,k.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[k.propFix[e]||e]})}}),k.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&k.isXMLDoc(e)||(t=k.propFix[t]||t,i=k.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=k.find.attr(e,"tabindex");return t?parseInt(t,10):vt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(k.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),k.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){k.propFix[this.toLowerCase()]=this}),k.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).addClass(t.call(this,e,xt(this)))});if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){k(this).removeClass(t.call(this,e,xt(this)))});if(!arguments.length)return this.attr("class","");if((e=bt(t)).length)while(n=this[u++])if(i=xt(n),r=1===n.nodeType&&" "+mt(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=mt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){k(this).toggleClass(i.call(this,e,xt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=k(this),r=bt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=xt(this))&&Q.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Q.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+mt(xt(n))+" ").indexOf(t))return!0;return!1}});var wt=/\r/g;k.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,k(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=k.map(t,function(e){return null==e?"":e+""})),(r=k.valHooks[this.type]||k.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=k.valHooks[t.type]||k.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(wt,""):null==e?"":e:void 0}}),k.extend({valHooks:{option:{get:function(e){var t=k.find.attr(e,"value");return null!=t?t:mt(k.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=k(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=k.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<k.inArray(k.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k.each(["radio","checkbox"],function(){k.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<k.inArray(k(e).val(),t)}},y.checkOn||(k.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var Tt=/^(?:focusinfocus|focusoutblur)$/,Ct=function(e){e.stopPropagation()};k.extend(k.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!Tt.test(d+k.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[k.expando]?e:new k.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:k.makeArray(t,[e]),c=k.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,Tt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Q.get(o,"events")||{})[e.type]&&Q.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&G(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!G(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),k.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,Ct),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,Ct),k.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=k.extend(new k.Event,n,{type:e,isSimulated:!0});k.event.trigger(r,null,t)}}),k.fn.extend({trigger:function(e,t){return this.each(function(){k.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return k.event.trigger(e,t,n,!0)}}),y.focusin||k.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){k.event.simulate(r,e.target,k.event.fix(e))};k.event.special[r]={setup:function(){var e=this.ownerDocument||this,t=Q.access(e,r);t||e.addEventListener(n,i,!0),Q.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=Q.access(e,r)-1;t?Q.access(e,r,t):(e.removeEventListener(n,i,!0),Q.remove(e,r))}}});var Et=C.location,kt=Date.now(),St=/\?/;k.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||k.error("Invalid XML: "+e),t};var Nt=/\[\]$/,At=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i;function qt(n,e,r,i){var t;if(Array.isArray(e))k.each(e,function(e,t){r||Nt.test(n)?i(n,t):qt(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)qt(n+"["+t+"]",e[t],r,i)}k.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!k.isPlainObject(e))k.each(e,function(){i(this.name,this.value)});else for(n in e)qt(n,e[n],t,i);return r.join("&")},k.fn.extend({serialize:function(){return k.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=k.prop(this,"elements");return e?k.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!k(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=k(this).val();return null==n?null:Array.isArray(n)?k.map(n,function(e){return{name:t.name,value:e.replace(At,"\r\n")}}):{name:t.name,value:n.replace(At,"\r\n")}}).get()}});var Lt=/%20/g,Ht=/#.*$/,Ot=/([?&])_=[^&]*/,Pt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Rt=/^(?:GET|HEAD)$/,Mt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Ft=E.createElement("a");function Bt(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(R)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function _t(t,i,o,a){var s={},u=t===Wt;function l(e){var r;return s[e]=!0,k.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function zt(e,t){var n,r,i=k.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&k.extend(!0,e,r),e}Ft.href=Et.href,k.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":k.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,k.ajaxSettings),t):zt(k.ajaxSettings,e)},ajaxPrefilter:Bt(It),ajaxTransport:Bt(Wt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=k.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?k(y):k.event,x=k.Deferred(),b=k.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=Pt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||Et.href)+"").replace(Mt,Et.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(R)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Ft.protocol+"//"+Ft.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=k.param(v.data,v.traditional)),_t(It,v,t,T),h)return T;for(i in(g=k.event&&v.global)&&0==k.active++&&k.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Rt.test(v.type),f=v.url.replace(Ht,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Lt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(St.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Ot,"$1"),o=(St.test(f)?"&":"?")+"_="+kt+++o),v.url=f+o),v.ifModified&&(k.lastModified[f]&&T.setRequestHeader("If-Modified-Since",k.lastModified[f]),k.etag[f]&&T.setRequestHeader("If-None-Match",k.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+$t+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=_t(Wt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(k.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(k.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--k.active||k.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return k.get(e,t,n,"json")},getScript:function(e,t){return k.get(e,void 0,t,"script")}}),k.each(["get","post"],function(e,i){k[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),k.ajax(k.extend({url:e,type:i,dataType:r,data:t,success:n},k.isPlainObject(e)&&e))}}),k._evalUrl=function(e,t){return k.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){k.globalEval(e,t)}})},k.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=k(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){k(this).wrapInner(n.call(this,e))}):this.each(function(){var e=k(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){k(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){k(this).replaceWith(this.childNodes)}),this}}),k.expr.pseudos.hidden=function(e){return!k.expr.pseudos.visible(e)},k.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},k.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Ut={0:200,1223:204},Xt=k.ajaxSettings.xhr();y.cors=!!Xt&&"withCredentials"in Xt,y.ajax=Xt=!!Xt,k.ajaxTransport(function(i){var o,a;if(y.cors||Xt&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Ut[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),k.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),k.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return k.globalEval(e),e}}}),k.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),k.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=k("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var Vt,Gt=[],Yt=/(=)\?(?=&|$)|\?\?/;k.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Gt.pop()||k.expando+"_"+kt++;return this[e]=!0,e}}),k.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Yt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Yt.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Yt,"$1"+r):!1!==e.jsonp&&(e.url+=(St.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||k.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?k(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,Gt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((Vt=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Vt.childNodes.length),k.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=D.exec(e))?[t.createElement(i[1])]:(i=we([e],t,o),o&&o.length&&k(o).remove(),k.merge([],i.childNodes)));var r,i,o},k.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=mt(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&k.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?k("<div>").append(k.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},k.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){k.fn[t]=function(e){return this.on(t,e)}}),k.expr.pseudos.animated=function(t){return k.grep(k.timers,function(e){return t===e.elem}).length},k.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=k.css(e,"position"),c=k(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=k.css(e,"top"),u=k.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,k.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},k.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){k.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===k.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===k.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=k(e).offset()).top+=k.css(e,"borderTopWidth",!0),i.left+=k.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-k.css(r,"marginTop",!0),left:t.left-i.left-k.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===k.css(e,"position"))e=e.offsetParent;return e||ie})}}),k.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;k.fn[t]=function(e){return _(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),k.each(["top","left"],function(e,n){k.cssHooks[n]=ze(y.pixelPosition,function(e,t){if(t)return t=_e(e,n),$e.test(t)?k(e).position()[n]+"px":t})}),k.each({Height:"height",Width:"width"},function(a,s){k.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){k.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return _(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?k.css(e,t,i):k.style(e,t,n,i)},s,n?e:void 0,n)}})}),k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){k.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),k.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),k.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),k.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||k.guid++,i},k.holdReady=function(e){e?k.readyWait++:k.ready(!0)},k.isArray=Array.isArray,k.parseJSON=JSON.parse,k.nodeName=A,k.isFunction=m,k.isWindow=x,k.camelCase=V,k.type=w,k.now=Date.now,k.isNumeric=function(e){var t=k.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return k});var Qt=C.jQuery,Jt=C.$;return k.noConflict=function(e){return C.$===k&&(C.$=Jt),e&&C.jQuery===k&&(C.jQuery=Qt),k},e||(C.jQuery=C.$=k),k});


//Start slider Slick
!function(i){"use strict";"function"==typeof define&&define.amd?define(["jquery"],i):"undefined"!=typeof exports?module.exports=i(require("jquery")):i(jQuery)}(function(i){"use strict";var e=window.Slick||{};(e=function(){var e=0;return function(t,o){var s,n=this;n.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:i(t),appendDots:i(t),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return i('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},n.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},i.extend(n,n.initials),n.activeBreakpoint=null,n.animType=null,n.animProp=null,n.breakpoints=[],n.breakpointSettings=[],n.cssTransitions=!1,n.focussed=!1,n.interrupted=!1,n.hidden="hidden",n.paused=!0,n.positionProp=null,n.respondTo=null,n.rowCount=1,n.shouldClick=!0,n.$slider=i(t),n.$slidesCache=null,n.transformType=null,n.transitionType=null,n.visibilityChange="visibilitychange",n.windowWidth=0,n.windowTimer=null,s=i(t).data("slick")||{},n.options=i.extend({},n.defaults,o,s),n.currentSlide=n.options.initialSlide,n.originalSettings=n.options,void 0!==document.mozHidden?(n.hidden="mozHidden",n.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(n.hidden="webkitHidden",n.visibilityChange="webkitvisibilitychange"),n.autoPlay=i.proxy(n.autoPlay,n),n.autoPlayClear=i.proxy(n.autoPlayClear,n),n.autoPlayIterator=i.proxy(n.autoPlayIterator,n),n.changeSlide=i.proxy(n.changeSlide,n),n.clickHandler=i.proxy(n.clickHandler,n),n.selectHandler=i.proxy(n.selectHandler,n),n.setPosition=i.proxy(n.setPosition,n),n.swipeHandler=i.proxy(n.swipeHandler,n),n.dragHandler=i.proxy(n.dragHandler,n),n.keyHandler=i.proxy(n.keyHandler,n),n.instanceUid=e++,n.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,n.registerBreakpoints(),n.init(!0)}}()).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},e.prototype.addSlide=e.prototype.slickAdd=function(e,t,o){var s=this;if("boolean"==typeof t)o=t,t=null;else if(t<0||t>=s.slideCount)return!1;s.unload(),"number"==typeof t?0===t&&0===s.$slides.length?i(e).appendTo(s.$slideTrack):o?i(e).insertBefore(s.$slides.eq(t)):i(e).insertAfter(s.$slides.eq(t)):!0===o?i(e).prependTo(s.$slideTrack):i(e).appendTo(s.$slideTrack),s.$slides=s.$slideTrack.children(this.options.slide),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.append(s.$slides),s.$slides.each(function(e,t){i(t).attr("data-slick-index",e)}),s.$slidesCache=s.$slides,s.reinit()},e.prototype.animateHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.animate({height:e},i.options.speed)}},e.prototype.animateSlide=function(e,t){var o={},s=this;s.animateHeight(),!0===s.options.rtl&&!1===s.options.vertical&&(e=-e),!1===s.transformsEnabled?!1===s.options.vertical?s.$slideTrack.animate({left:e},s.options.speed,s.options.easing,t):s.$slideTrack.animate({top:e},s.options.speed,s.options.easing,t):!1===s.cssTransitions?(!0===s.options.rtl&&(s.currentLeft=-s.currentLeft),i({animStart:s.currentLeft}).animate({animStart:e},{duration:s.options.speed,easing:s.options.easing,step:function(i){i=Math.ceil(i),!1===s.options.vertical?(o[s.animType]="translate("+i+"px, 0px)",s.$slideTrack.css(o)):(o[s.animType]="translate(0px,"+i+"px)",s.$slideTrack.css(o))},complete:function(){t&&t.call()}})):(s.applyTransition(),e=Math.ceil(e),!1===s.options.vertical?o[s.animType]="translate3d("+e+"px, 0px, 0px)":o[s.animType]="translate3d(0px,"+e+"px, 0px)",s.$slideTrack.css(o),t&&setTimeout(function(){s.disableTransition(),t.call()},s.options.speed))},e.prototype.getNavTarget=function(){var e=this,t=e.options.asNavFor;return t&&null!==t&&(t=i(t).not(e.$slider)),t},e.prototype.asNavFor=function(e){var t=this.getNavTarget();null!==t&&"object"==typeof t&&t.each(function(){var t=i(this).slick("getSlick");t.unslicked||t.slideHandler(e,!0)})},e.prototype.applyTransition=function(i){var e=this,t={};!1===e.options.fade?t[e.transitionType]=e.transformType+" "+e.options.speed+"ms "+e.options.cssEase:t[e.transitionType]="opacity "+e.options.speed+"ms "+e.options.cssEase,!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.autoPlay=function(){var i=this;i.autoPlayClear(),i.slideCount>i.options.slidesToShow&&(i.autoPlayTimer=setInterval(i.autoPlayIterator,i.options.autoplaySpeed))},e.prototype.autoPlayClear=function(){var i=this;i.autoPlayTimer&&clearInterval(i.autoPlayTimer)},e.prototype.autoPlayIterator=function(){var i=this,e=i.currentSlide+i.options.slidesToScroll;i.paused||i.interrupted||i.focussed||(!1===i.options.infinite&&(1===i.direction&&i.currentSlide+1===i.slideCount-1?i.direction=0:0===i.direction&&(e=i.currentSlide-i.options.slidesToScroll,i.currentSlide-1==0&&(i.direction=1))),i.slideHandler(e))},e.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=i(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=i(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},e.prototype.buildDots=function(){var e,t,o=this;if(!0===o.options.dots){for(o.$slider.addClass("slick-dotted"),t=i("<ul />").addClass(o.options.dotsClass),e=0;e<=o.getDotCount();e+=1)t.append(i("<li />").append(o.options.customPaging.call(this,o,e)));o.$dots=t.appendTo(o.options.appendDots),o.$dots.find("li").first().addClass("slick-active")}},e.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){i(t).attr("data-slick-index",e).data("originalStyling",i(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?i('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),i("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},e.prototype.buildRows=function(){var i,e,t,o,s,n,r,l=this;if(o=document.createDocumentFragment(),n=l.$slider.children(),l.options.rows>1){for(r=l.options.slidesPerRow*l.options.rows,s=Math.ceil(n.length/r),i=0;i<s;i++){var d=document.createElement("div");for(e=0;e<l.options.rows;e++){var a=document.createElement("div");for(t=0;t<l.options.slidesPerRow;t++){var c=i*r+(e*l.options.slidesPerRow+t);n.get(c)&&a.appendChild(n.get(c))}d.appendChild(a)}o.appendChild(d)}l.$slider.empty().append(o),l.$slider.children().children().children().css({width:100/l.options.slidesPerRow+"%",display:"inline-block"})}},e.prototype.checkResponsive=function(e,t){var o,s,n,r=this,l=!1,d=r.$slider.width(),a=window.innerWidth||i(window).width();if("window"===r.respondTo?n=a:"slider"===r.respondTo?n=d:"min"===r.respondTo&&(n=Math.min(a,d)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){s=null;for(o in r.breakpoints)r.breakpoints.hasOwnProperty(o)&&(!1===r.originalSettings.mobileFirst?n<r.breakpoints[o]&&(s=r.breakpoints[o]):n>r.breakpoints[o]&&(s=r.breakpoints[o]));null!==s?null!==r.activeBreakpoint?(s!==r.activeBreakpoint||t)&&(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):(r.activeBreakpoint=s,"unslick"===r.breakpointSettings[s]?r.unslick(s):(r.options=i.extend({},r.originalSettings,r.breakpointSettings[s]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),l=s):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),l=s),e||!1===l||r.$slider.trigger("breakpoint",[r,l])}},e.prototype.changeSlide=function(e,t){var o,s,n,r=this,l=i(e.currentTarget);switch(l.is("a")&&e.preventDefault(),l.is("li")||(l=l.closest("li")),n=r.slideCount%r.options.slidesToScroll!=0,o=n?0:(r.slideCount-r.currentSlide)%r.options.slidesToScroll,e.data.message){case"previous":s=0===o?r.options.slidesToScroll:r.options.slidesToShow-o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide-s,!1,t);break;case"next":s=0===o?r.options.slidesToScroll:o,r.slideCount>r.options.slidesToShow&&r.slideHandler(r.currentSlide+s,!1,t);break;case"index":var d=0===e.data.index?0:e.data.index||l.index()*r.options.slidesToScroll;r.slideHandler(r.checkNavigable(d),!1,t),l.children().trigger("focus");break;default:return}},e.prototype.checkNavigable=function(i){var e,t;if(e=this.getNavigableIndexes(),t=0,i>e[e.length-1])i=e[e.length-1];else for(var o in e){if(i<e[o]){i=t;break}t=e[o]}return i},e.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(i("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",i.proxy(e.interrupt,e,!0)).off("mouseleave.slick",i.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),i(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().off("click.slick",e.selectHandler),i(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),i(window).off("resize.slick.slick-"+e.instanceUid,e.resize),i("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),i(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},e.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.cleanUpRows=function(){var i,e=this;e.options.rows>1&&((i=e.$slides.children().children()).removeAttr("style"),e.$slider.empty().append(i))},e.prototype.clickHandler=function(i){!1===this.shouldClick&&(i.stopImmediatePropagation(),i.stopPropagation(),i.preventDefault())},e.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),i(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){i(this).attr("style",i(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},e.prototype.disableTransition=function(i){var e=this,t={};t[e.transitionType]="",!1===e.options.fade?e.$slideTrack.css(t):e.$slides.eq(i).css(t)},e.prototype.fadeSlide=function(i,e){var t=this;!1===t.cssTransitions?(t.$slides.eq(i).css({zIndex:t.options.zIndex}),t.$slides.eq(i).animate({opacity:1},t.options.speed,t.options.easing,e)):(t.applyTransition(i),t.$slides.eq(i).css({opacity:1,zIndex:t.options.zIndex}),e&&setTimeout(function(){t.disableTransition(i),e.call()},t.options.speed))},e.prototype.fadeSlideOut=function(i){var e=this;!1===e.cssTransitions?e.$slides.eq(i).animate({opacity:0,zIndex:e.options.zIndex-2},e.options.speed,e.options.easing):(e.applyTransition(i),e.$slides.eq(i).css({opacity:0,zIndex:e.options.zIndex-2}))},e.prototype.filterSlides=e.prototype.slickFilter=function(i){var e=this;null!==i&&(e.$slidesCache=e.$slides,e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.filter(i).appendTo(e.$slideTrack),e.reinit())},e.prototype.focusHandler=function(){var e=this;e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(t){t.stopImmediatePropagation();var o=i(this);setTimeout(function(){e.options.pauseOnFocus&&(e.focussed=o.is(":focus"),e.autoPlay())},0)})},e.prototype.getCurrent=e.prototype.slickCurrentSlide=function(){return this.currentSlide},e.prototype.getDotCount=function(){var i=this,e=0,t=0,o=0;if(!0===i.options.infinite)if(i.slideCount<=i.options.slidesToShow)++o;else for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else if(!0===i.options.centerMode)o=i.slideCount;else if(i.options.asNavFor)for(;e<i.slideCount;)++o,e=t+i.options.slidesToScroll,t+=i.options.slidesToScroll<=i.options.slidesToShow?i.options.slidesToScroll:i.options.slidesToShow;else o=1+Math.ceil((i.slideCount-i.options.slidesToShow)/i.options.slidesToScroll);return o-1},e.prototype.getLeft=function(i){var e,t,o,s,n=this,r=0;return n.slideOffset=0,t=n.$slides.first().outerHeight(!0),!0===n.options.infinite?(n.slideCount>n.options.slidesToShow&&(n.slideOffset=n.slideWidth*n.options.slidesToShow*-1,s=-1,!0===n.options.vertical&&!0===n.options.centerMode&&(2===n.options.slidesToShow?s=-1.5:1===n.options.slidesToShow&&(s=-2)),r=t*n.options.slidesToShow*s),n.slideCount%n.options.slidesToScroll!=0&&i+n.options.slidesToScroll>n.slideCount&&n.slideCount>n.options.slidesToShow&&(i>n.slideCount?(n.slideOffset=(n.options.slidesToShow-(i-n.slideCount))*n.slideWidth*-1,r=(n.options.slidesToShow-(i-n.slideCount))*t*-1):(n.slideOffset=n.slideCount%n.options.slidesToScroll*n.slideWidth*-1,r=n.slideCount%n.options.slidesToScroll*t*-1))):i+n.options.slidesToShow>n.slideCount&&(n.slideOffset=(i+n.options.slidesToShow-n.slideCount)*n.slideWidth,r=(i+n.options.slidesToShow-n.slideCount)*t),n.slideCount<=n.options.slidesToShow&&(n.slideOffset=0,r=0),!0===n.options.centerMode&&n.slideCount<=n.options.slidesToShow?n.slideOffset=n.slideWidth*Math.floor(n.options.slidesToShow)/2-n.slideWidth*n.slideCount/2:!0===n.options.centerMode&&!0===n.options.infinite?n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)-n.slideWidth:!0===n.options.centerMode&&(n.slideOffset=0,n.slideOffset+=n.slideWidth*Math.floor(n.options.slidesToShow/2)),e=!1===n.options.vertical?i*n.slideWidth*-1+n.slideOffset:i*t*-1+r,!0===n.options.variableWidth&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,!0===n.options.centerMode&&(o=n.slideCount<=n.options.slidesToShow||!1===n.options.infinite?n.$slideTrack.children(".slick-slide").eq(i):n.$slideTrack.children(".slick-slide").eq(i+n.options.slidesToShow+1),e=!0===n.options.rtl?o[0]?-1*(n.$slideTrack.width()-o[0].offsetLeft-o.width()):0:o[0]?-1*o[0].offsetLeft:0,e+=(n.$list.width()-o.outerWidth())/2)),e},e.prototype.getOption=e.prototype.slickGetOption=function(i){return this.options[i]},e.prototype.getNavigableIndexes=function(){var i,e=this,t=0,o=0,s=[];for(!1===e.options.infinite?i=e.slideCount:(t=-1*e.options.slidesToScroll,o=-1*e.options.slidesToScroll,i=2*e.slideCount);t<i;)s.push(t),t=o+e.options.slidesToScroll,o+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return s},e.prototype.getSlick=function(){return this},e.prototype.getSlideCount=function(){var e,t,o=this;return t=!0===o.options.centerMode?o.slideWidth*Math.floor(o.options.slidesToShow/2):0,!0===o.options.swipeToSlide?(o.$slideTrack.find(".slick-slide").each(function(s,n){if(n.offsetLeft-t+i(n).outerWidth()/2>-1*o.swipeLeft)return e=n,!1}),Math.abs(i(e).attr("data-slick-index")-o.currentSlide)||1):o.options.slidesToScroll},e.prototype.goTo=e.prototype.slickGoTo=function(i,e){this.changeSlide({data:{message:"index",index:parseInt(i)}},e)},e.prototype.init=function(e){var t=this;i(t.$slider).hasClass("slick-initialized")||(i(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},e.prototype.initADA=function(){var e=this,t=Math.ceil(e.slideCount/e.options.slidesToShow),o=e.getNavigableIndexes().filter(function(i){return i>=0&&i<e.slideCount});e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==e.$dots&&(e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function(t){var s=o.indexOf(t);i(this).attr({role:"tabpanel",id:"slick-slide"+e.instanceUid+t,tabindex:-1}),-1!==s&&i(this).attr({"aria-describedby":"slick-slide-control"+e.instanceUid+s})}),e.$dots.attr("role","tablist").find("li").each(function(s){var n=o[s];i(this).attr({role:"presentation"}),i(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+e.instanceUid+s,"aria-controls":"slick-slide"+e.instanceUid+n,"aria-label":s+1+" of "+t,"aria-selected":null,tabindex:"-1"})}).eq(e.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var s=e.currentSlide,n=s+e.options.slidesToShow;s<n;s++)e.$slides.eq(s).attr("tabindex",0);e.activateADA()},e.prototype.initArrowEvents=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},i.changeSlide),i.$nextArrow.off("click.slick").on("click.slick",{message:"next"},i.changeSlide),!0===i.options.accessibility&&(i.$prevArrow.on("keydown.slick",i.keyHandler),i.$nextArrow.on("keydown.slick",i.keyHandler)))},e.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(i("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&i("li",e.$dots).on("mouseenter.slick",i.proxy(e.interrupt,e,!0)).on("mouseleave.slick",i.proxy(e.interrupt,e,!1))},e.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",i.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",i.proxy(e.interrupt,e,!1)))},e.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),i(document).on(e.visibilityChange,i.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),i(window).on("orientationchange.slick.slick-"+e.instanceUid,i.proxy(e.orientationChange,e)),i(window).on("resize.slick.slick-"+e.instanceUid,i.proxy(e.resize,e)),i("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),i(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),i(e.setPosition)},e.prototype.initUI=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.show(),i.$nextArrow.show()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.show()},e.prototype.keyHandler=function(i){var e=this;i.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===i.keyCode&&!0===e.options.accessibility?e.changeSlide({data:{message:!0===e.options.rtl?"next":"previous"}}):39===i.keyCode&&!0===e.options.accessibility&&e.changeSlide({data:{message:!0===e.options.rtl?"previous":"next"}}))},e.prototype.lazyLoad=function(){function e(e){i("img[data-lazy]",e).each(function(){var e=i(this),t=i(this).attr("data-lazy"),o=i(this).attr("data-srcset"),s=i(this).attr("data-sizes")||n.$slider.attr("data-sizes"),r=document.createElement("img");r.onload=function(){e.animate({opacity:0},100,function(){o&&(e.attr("srcset",o),s&&e.attr("sizes",s)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,e,t])})},r.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,e,t])},r.src=t})}var t,o,s,n=this;if(!0===n.options.centerMode?!0===n.options.infinite?s=(o=n.currentSlide+(n.options.slidesToShow/2+1))+n.options.slidesToShow+2:(o=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),s=n.options.slidesToShow/2+1+2+n.currentSlide):(o=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,s=Math.ceil(o+n.options.slidesToShow),!0===n.options.fade&&(o>0&&o--,s<=n.slideCount&&s++)),t=n.$slider.find(".slick-slide").slice(o,s),"anticipated"===n.options.lazyLoad)for(var r=o-1,l=s,d=n.$slider.find(".slick-slide"),a=0;a<n.options.slidesToScroll;a++)r<0&&(r=n.slideCount-1),t=(t=t.add(d.eq(r))).add(d.eq(l)),r--,l++;e(t),n.slideCount<=n.options.slidesToShow?e(n.$slider.find(".slick-slide")):n.currentSlide>=n.slideCount-n.options.slidesToShow?e(n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow)):0===n.currentSlide&&e(n.$slider.find(".slick-cloned").slice(-1*n.options.slidesToShow))},e.prototype.loadSlider=function(){var i=this;i.setPosition(),i.$slideTrack.css({opacity:1}),i.$slider.removeClass("slick-loading"),i.initUI(),"progressive"===i.options.lazyLoad&&i.progressiveLazyLoad()},e.prototype.next=e.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},e.prototype.orientationChange=function(){var i=this;i.checkResponsive(),i.setPosition()},e.prototype.pause=e.prototype.slickPause=function(){var i=this;i.autoPlayClear(),i.paused=!0},e.prototype.play=e.prototype.slickPlay=function(){var i=this;i.autoPlay(),i.options.autoplay=!0,i.paused=!1,i.focussed=!1,i.interrupted=!1},e.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&i(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},e.prototype.prev=e.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},e.prototype.preventDefault=function(i){i.preventDefault()},e.prototype.progressiveLazyLoad=function(e){e=e||1;var t,o,s,n,r,l=this,d=i("img[data-lazy]",l.$slider);d.length?(t=d.first(),o=t.attr("data-lazy"),s=t.attr("data-srcset"),n=t.attr("data-sizes")||l.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){s&&(t.attr("srcset",s),n&&t.attr("sizes",n)),t.attr("src",o).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===l.options.adaptiveHeight&&l.setPosition(),l.$slider.trigger("lazyLoaded",[l,t,o]),l.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){l.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),l.$slider.trigger("lazyLoadError",[l,t,o]),l.progressiveLazyLoad())},r.src=o):l.$slider.trigger("allImagesLoaded",[l])},e.prototype.refresh=function(e){var t,o,s=this;o=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>o&&(s.currentSlide=o),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),t=s.currentSlide,s.destroy(!0),i.extend(s,s.initials,{currentSlide:t}),s.init(),e||s.changeSlide({data:{message:"index",index:t}},!1)},e.prototype.registerBreakpoints=function(){var e,t,o,s=this,n=s.options.responsive||null;if("array"===i.type(n)&&n.length){s.respondTo=s.options.respondTo||"window";for(e in n)if(o=s.breakpoints.length-1,n.hasOwnProperty(e)){for(t=n[e].breakpoint;o>=0;)s.breakpoints[o]&&s.breakpoints[o]===t&&s.breakpoints.splice(o,1),o--;s.breakpoints.push(t),s.breakpointSettings[t]=n[e].settings}s.breakpoints.sort(function(i,e){return s.options.mobileFirst?i-e:e-i})}},e.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&i(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},e.prototype.resize=function(){var e=this;i(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=i(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},e.prototype.removeSlide=e.prototype.slickRemove=function(i,e,t){var o=this;if(i="boolean"==typeof i?!0===(e=i)?0:o.slideCount-1:!0===e?--i:i,o.slideCount<1||i<0||i>o.slideCount-1)return!1;o.unload(),!0===t?o.$slideTrack.children().remove():o.$slideTrack.children(this.options.slide).eq(i).remove(),o.$slides=o.$slideTrack.children(this.options.slide),o.$slideTrack.children(this.options.slide).detach(),o.$slideTrack.append(o.$slides),o.$slidesCache=o.$slides,o.reinit()},e.prototype.setCSS=function(i){var e,t,o=this,s={};!0===o.options.rtl&&(i=-i),e="left"==o.positionProp?Math.ceil(i)+"px":"0px",t="top"==o.positionProp?Math.ceil(i)+"px":"0px",s[o.positionProp]=i,!1===o.transformsEnabled?o.$slideTrack.css(s):(s={},!1===o.cssTransitions?(s[o.animType]="translate("+e+", "+t+")",o.$slideTrack.css(s)):(s[o.animType]="translate3d("+e+", "+t+", 0px)",o.$slideTrack.css(s)))},e.prototype.setDimensions=function(){var i=this;!1===i.options.vertical?!0===i.options.centerMode&&i.$list.css({padding:"0px "+i.options.centerPadding}):(i.$list.height(i.$slides.first().outerHeight(!0)*i.options.slidesToShow),!0===i.options.centerMode&&i.$list.css({padding:i.options.centerPadding+" 0px"})),i.listWidth=i.$list.width(),i.listHeight=i.$list.height(),!1===i.options.vertical&&!1===i.options.variableWidth?(i.slideWidth=Math.ceil(i.listWidth/i.options.slidesToShow),i.$slideTrack.width(Math.ceil(i.slideWidth*i.$slideTrack.children(".slick-slide").length))):!0===i.options.variableWidth?i.$slideTrack.width(5e3*i.slideCount):(i.slideWidth=Math.ceil(i.listWidth),i.$slideTrack.height(Math.ceil(i.$slides.first().outerHeight(!0)*i.$slideTrack.children(".slick-slide").length)));var e=i.$slides.first().outerWidth(!0)-i.$slides.first().width();!1===i.options.variableWidth&&i.$slideTrack.children(".slick-slide").width(i.slideWidth-e)},e.prototype.setFade=function(){var e,t=this;t.$slides.each(function(o,s){e=t.slideWidth*o*-1,!0===t.options.rtl?i(s).css({position:"relative",right:e,top:0,zIndex:t.options.zIndex-2,opacity:0}):i(s).css({position:"relative",left:e,top:0,zIndex:t.options.zIndex-2,opacity:0})}),t.$slides.eq(t.currentSlide).css({zIndex:t.options.zIndex-1,opacity:1})},e.prototype.setHeight=function(){var i=this;if(1===i.options.slidesToShow&&!0===i.options.adaptiveHeight&&!1===i.options.vertical){var e=i.$slides.eq(i.currentSlide).outerHeight(!0);i.$list.css("height",e)}},e.prototype.setOption=e.prototype.slickSetOption=function(){var e,t,o,s,n,r=this,l=!1;if("object"===i.type(arguments[0])?(o=arguments[0],l=arguments[1],n="multiple"):"string"===i.type(arguments[0])&&(o=arguments[0],s=arguments[1],l=arguments[2],"responsive"===arguments[0]&&"array"===i.type(arguments[1])?n="responsive":void 0!==arguments[1]&&(n="single")),"single"===n)r.options[o]=s;else if("multiple"===n)i.each(o,function(i,e){r.options[i]=e});else if("responsive"===n)for(t in s)if("array"!==i.type(r.options.responsive))r.options.responsive=[s[t]];else{for(e=r.options.responsive.length-1;e>=0;)r.options.responsive[e].breakpoint===s[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(s[t])}l&&(r.unload(),r.reinit())},e.prototype.setPosition=function(){var i=this;i.setDimensions(),i.setHeight(),!1===i.options.fade?i.setCSS(i.getLeft(i.currentSlide)):i.setFade(),i.$slider.trigger("setPosition",[i])},e.prototype.setProps=function(){var i=this,e=document.body.style;i.positionProp=!0===i.options.vertical?"top":"left","top"===i.positionProp?i.$slider.addClass("slick-vertical"):i.$slider.removeClass("slick-vertical"),void 0===e.WebkitTransition&&void 0===e.MozTransition&&void 0===e.msTransition||!0===i.options.useCSS&&(i.cssTransitions=!0),i.options.fade&&("number"==typeof i.options.zIndex?i.options.zIndex<3&&(i.options.zIndex=3):i.options.zIndex=i.defaults.zIndex),void 0!==e.OTransform&&(i.animType="OTransform",i.transformType="-o-transform",i.transitionType="OTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.MozTransform&&(i.animType="MozTransform",i.transformType="-moz-transform",i.transitionType="MozTransition",void 0===e.perspectiveProperty&&void 0===e.MozPerspective&&(i.animType=!1)),void 0!==e.webkitTransform&&(i.animType="webkitTransform",i.transformType="-webkit-transform",i.transitionType="webkitTransition",void 0===e.perspectiveProperty&&void 0===e.webkitPerspective&&(i.animType=!1)),void 0!==e.msTransform&&(i.animType="msTransform",i.transformType="-ms-transform",i.transitionType="msTransition",void 0===e.msTransform&&(i.animType=!1)),void 0!==e.transform&&!1!==i.animType&&(i.animType="transform",i.transformType="transform",i.transitionType="transition"),i.transformsEnabled=i.options.useTransform&&null!==i.animType&&!1!==i.animType},e.prototype.setSlideClasses=function(i){var e,t,o,s,n=this;if(t=n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),n.$slides.eq(i).addClass("slick-current"),!0===n.options.centerMode){var r=n.options.slidesToShow%2==0?1:0;e=Math.floor(n.options.slidesToShow/2),!0===n.options.infinite&&(i>=e&&i<=n.slideCount-1-e?n.$slides.slice(i-e+r,i+e+1).addClass("slick-active").attr("aria-hidden","false"):(o=n.options.slidesToShow+i,t.slice(o-e+1+r,o+e+2).addClass("slick-active").attr("aria-hidden","false")),0===i?t.eq(t.length-1-n.options.slidesToShow).addClass("slick-center"):i===n.slideCount-1&&t.eq(n.options.slidesToShow).addClass("slick-center")),n.$slides.eq(i).addClass("slick-center")}else i>=0&&i<=n.slideCount-n.options.slidesToShow?n.$slides.slice(i,i+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):t.length<=n.options.slidesToShow?t.addClass("slick-active").attr("aria-hidden","false"):(s=n.slideCount%n.options.slidesToShow,o=!0===n.options.infinite?n.options.slidesToShow+i:i,n.options.slidesToShow==n.options.slidesToScroll&&n.slideCount-i<n.options.slidesToShow?t.slice(o-(n.options.slidesToShow-s),o+s).addClass("slick-active").attr("aria-hidden","false"):t.slice(o,o+n.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));"ondemand"!==n.options.lazyLoad&&"anticipated"!==n.options.lazyLoad||n.lazyLoad()},e.prototype.setupInfinite=function(){var e,t,o,s=this;if(!0===s.options.fade&&(s.options.centerMode=!1),!0===s.options.infinite&&!1===s.options.fade&&(t=null,s.slideCount>s.options.slidesToShow)){for(o=!0===s.options.centerMode?s.options.slidesToShow+1:s.options.slidesToShow,e=s.slideCount;e>s.slideCount-o;e-=1)t=e-1,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-s.slideCount).prependTo(s.$slideTrack).addClass("slick-cloned");for(e=0;e<o+s.slideCount;e+=1)t=e,i(s.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+s.slideCount).appendTo(s.$slideTrack).addClass("slick-cloned");s.$slideTrack.find(".slick-cloned").find("[id]").each(function(){i(this).attr("id","")})}},e.prototype.interrupt=function(i){var e=this;i||e.autoPlay(),e.interrupted=i},e.prototype.selectHandler=function(e){var t=this,o=i(e.target).is(".slick-slide")?i(e.target):i(e.target).parents(".slick-slide"),s=parseInt(o.attr("data-slick-index"));s||(s=0),t.slideCount<=t.options.slidesToShow?t.slideHandler(s,!1,!0):t.slideHandler(s)},e.prototype.slideHandler=function(i,e,t){var o,s,n,r,l,d=null,a=this;if(e=e||!1,!(!0===a.animating&&!0===a.options.waitForAnimate||!0===a.options.fade&&a.currentSlide===i))if(!1===e&&a.asNavFor(i),o=i,d=a.getLeft(o),r=a.getLeft(a.currentSlide),a.currentLeft=null===a.swipeLeft?r:a.swipeLeft,!1===a.options.infinite&&!1===a.options.centerMode&&(i<0||i>a.getDotCount()*a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else if(!1===a.options.infinite&&!0===a.options.centerMode&&(i<0||i>a.slideCount-a.options.slidesToScroll))!1===a.options.fade&&(o=a.currentSlide,!0!==t?a.animateSlide(r,function(){a.postSlide(o)}):a.postSlide(o));else{if(a.options.autoplay&&clearInterval(a.autoPlayTimer),s=o<0?a.slideCount%a.options.slidesToScroll!=0?a.slideCount-a.slideCount%a.options.slidesToScroll:a.slideCount+o:o>=a.slideCount?a.slideCount%a.options.slidesToScroll!=0?0:o-a.slideCount:o,a.animating=!0,a.$slider.trigger("beforeChange",[a,a.currentSlide,s]),n=a.currentSlide,a.currentSlide=s,a.setSlideClasses(a.currentSlide),a.options.asNavFor&&(l=(l=a.getNavTarget()).slick("getSlick")).slideCount<=l.options.slidesToShow&&l.setSlideClasses(a.currentSlide),a.updateDots(),a.updateArrows(),!0===a.options.fade)return!0!==t?(a.fadeSlideOut(n),a.fadeSlide(s,function(){a.postSlide(s)})):a.postSlide(s),void a.animateHeight();!0!==t?a.animateSlide(d,function(){a.postSlide(s)}):a.postSlide(s)}},e.prototype.startLoad=function(){var i=this;!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&(i.$prevArrow.hide(),i.$nextArrow.hide()),!0===i.options.dots&&i.slideCount>i.options.slidesToShow&&i.$dots.hide(),i.$slider.addClass("slick-loading")},e.prototype.swipeDirection=function(){var i,e,t,o,s=this;return i=s.touchObject.startX-s.touchObject.curX,e=s.touchObject.startY-s.touchObject.curY,t=Math.atan2(e,i),(o=Math.round(180*t/Math.PI))<0&&(o=360-Math.abs(o)),o<=45&&o>=0?!1===s.options.rtl?"left":"right":o<=360&&o>=315?!1===s.options.rtl?"left":"right":o>=135&&o<=225?!1===s.options.rtl?"right":"left":!0===s.options.verticalSwiping?o>=35&&o<=135?"down":"up":"vertical"},e.prototype.swipeEnd=function(i){var e,t,o=this;if(o.dragging=!1,o.swiping=!1,o.scrolling)return o.scrolling=!1,!1;if(o.interrupted=!1,o.shouldClick=!(o.touchObject.swipeLength>10),void 0===o.touchObject.curX)return!1;if(!0===o.touchObject.edgeHit&&o.$slider.trigger("edge",[o,o.swipeDirection()]),o.touchObject.swipeLength>=o.touchObject.minSwipe){switch(t=o.swipeDirection()){case"left":case"down":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide+o.getSlideCount()):o.currentSlide+o.getSlideCount(),o.currentDirection=0;break;case"right":case"up":e=o.options.swipeToSlide?o.checkNavigable(o.currentSlide-o.getSlideCount()):o.currentSlide-o.getSlideCount(),o.currentDirection=1}"vertical"!=t&&(o.slideHandler(e),o.touchObject={},o.$slider.trigger("swipe",[o,t]))}else o.touchObject.startX!==o.touchObject.curX&&(o.slideHandler(o.currentSlide),o.touchObject={})},e.prototype.swipeHandler=function(i){var e=this;if(!(!1===e.options.swipe||"ontouchend"in document&&!1===e.options.swipe||!1===e.options.draggable&&-1!==i.type.indexOf("mouse")))switch(e.touchObject.fingerCount=i.originalEvent&&void 0!==i.originalEvent.touches?i.originalEvent.touches.length:1,e.touchObject.minSwipe=e.listWidth/e.options.touchThreshold,!0===e.options.verticalSwiping&&(e.touchObject.minSwipe=e.listHeight/e.options.touchThreshold),i.data.action){case"start":e.swipeStart(i);break;case"move":e.swipeMove(i);break;case"end":e.swipeEnd(i)}},e.prototype.swipeMove=function(i){var e,t,o,s,n,r,l=this;return n=void 0!==i.originalEvent?i.originalEvent.touches:null,!(!l.dragging||l.scrolling||n&&1!==n.length)&&(e=l.getLeft(l.currentSlide),l.touchObject.curX=void 0!==n?n[0].pageX:i.clientX,l.touchObject.curY=void 0!==n?n[0].pageY:i.clientY,l.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(l.touchObject.curX-l.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(l.touchObject.curY-l.touchObject.startY,2))),!l.options.verticalSwiping&&!l.swiping&&r>4?(l.scrolling=!0,!1):(!0===l.options.verticalSwiping&&(l.touchObject.swipeLength=r),t=l.swipeDirection(),void 0!==i.originalEvent&&l.touchObject.swipeLength>4&&(l.swiping=!0,i.preventDefault()),s=(!1===l.options.rtl?1:-1)*(l.touchObject.curX>l.touchObject.startX?1:-1),!0===l.options.verticalSwiping&&(s=l.touchObject.curY>l.touchObject.startY?1:-1),o=l.touchObject.swipeLength,l.touchObject.edgeHit=!1,!1===l.options.infinite&&(0===l.currentSlide&&"right"===t||l.currentSlide>=l.getDotCount()&&"left"===t)&&(o=l.touchObject.swipeLength*l.options.edgeFriction,l.touchObject.edgeHit=!0),!1===l.options.vertical?l.swipeLeft=e+o*s:l.swipeLeft=e+o*(l.$list.height()/l.listWidth)*s,!0===l.options.verticalSwiping&&(l.swipeLeft=e+o*s),!0!==l.options.fade&&!1!==l.options.touchMove&&(!0===l.animating?(l.swipeLeft=null,!1):void l.setCSS(l.swipeLeft))))},e.prototype.swipeStart=function(i){var e,t=this;if(t.interrupted=!0,1!==t.touchObject.fingerCount||t.slideCount<=t.options.slidesToShow)return t.touchObject={},!1;void 0!==i.originalEvent&&void 0!==i.originalEvent.touches&&(e=i.originalEvent.touches[0]),t.touchObject.startX=t.touchObject.curX=void 0!==e?e.pageX:i.clientX,t.touchObject.startY=t.touchObject.curY=void 0!==e?e.pageY:i.clientY,t.dragging=!0},e.prototype.unfilterSlides=e.prototype.slickUnfilter=function(){var i=this;null!==i.$slidesCache&&(i.unload(),i.$slideTrack.children(this.options.slide).detach(),i.$slidesCache.appendTo(i.$slideTrack),i.reinit())},e.prototype.unload=function(){var e=this;i(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},e.prototype.unslick=function(i){var e=this;e.$slider.trigger("unslick",[e,i]),e.destroy()},e.prototype.updateArrows=function(){var i=this;Math.floor(i.options.slidesToShow/2),!0===i.options.arrows&&i.slideCount>i.options.slidesToShow&&!i.options.infinite&&(i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===i.currentSlide?(i.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-i.options.slidesToShow&&!1===i.options.centerMode?(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")):i.currentSlide>=i.slideCount-1&&!0===i.options.centerMode&&(i.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),i.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},e.prototype.updateDots=function(){var i=this;null!==i.$dots&&(i.$dots.find("li").removeClass("slick-active").end(),i.$dots.find("li").eq(Math.floor(i.currentSlide/i.options.slidesToScroll)).addClass("slick-active"))},e.prototype.visibility=function(){var i=this;i.options.autoplay&&(document[i.hidden]?i.interrupted=!0:i.interrupted=!1)},i.fn.slick=function(){var i,t,o=this,s=arguments[0],n=Array.prototype.slice.call(arguments,1),r=o.length;for(i=0;i<r;i++)if("object"==typeof s||void 0===s?o[i].slick=new e(o[i],s):t=o[i].slick[s].apply(o[i].slick,n),void 0!==t)return t;return o}});

// Start Metis
/*!
* metismenu https://github.com/onokumus/metismenu#readme
* A jQuery menu plugin
* @version 3.0.4
* @author Osman Nuri Okumus <onokumus@gmail.com> (https://github.com/onokumus)
* @license: MIT
*/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("jquery")):"function"==typeof define&&define.amd?define(["jquery"],n):(e=e||self).metisMenu=n(e.jQuery)}(this,function(o){"use strict";function s(){return(s=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}var a=function(i){var n="transitionend",r={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(e){i(e).trigger(n)},supportsTransitionEnd:function(){return Boolean(n)}};function e(e){var n=this,t=!1;return i(this).one(r.TRANSITION_END,function(){t=!0}),setTimeout(function(){t||r.triggerTransitionEnd(n)},e),this}return i.fn.mmEmulateTransitionEnd=e,i.event.special[r.TRANSITION_END]={bindType:n,delegateType:n,handle:function(e){if(i(e.target).is(this))return e.handleObj.handler.apply(this,arguments)}},r}(o=o&&o.hasOwnProperty("default")?o.default:o),e="metisMenu",g="metisMenu",n="."+g,t=o.fn[e],h={toggle:!0,preventDefault:!0,triggerElement:"a",parentTrigger:"li",subMenu:"ul"},l={SHOW:"show"+n,SHOWN:"shown"+n,HIDE:"hide"+n,HIDDEN:"hidden"+n,CLICK_DATA_API:"click"+n+".data-api"},i="metismenu",f="mm-active",u="mm-show",d="mm-collapse",c="mm-collapsing",r=function(){function r(e,n){this.element=e,this.config=s({},h,n),this.transitioning=null,this.init()}var e=r.prototype;return e.init=function(){var s=this,a=this.config,e=o(this.element);e.addClass(i),e.find(a.parentTrigger+"."+f).children(a.triggerElement).attr("aria-expanded","true"),e.find(a.parentTrigger+"."+f).parents(a.parentTrigger).addClass(f),e.find(a.parentTrigger+"."+f).parents(a.parentTrigger).children(a.triggerElement).attr("aria-expanded","true"),e.find(a.parentTrigger+"."+f).has(a.subMenu).children(a.subMenu).addClass(d+" "+u),e.find(a.parentTrigger).not("."+f).has(a.subMenu).children(a.subMenu).addClass(d),e.find(a.parentTrigger).children(a.triggerElement).on(l.CLICK_DATA_API,function(e){var n=o(this);if("true"!==n.attr("aria-disabled")){a.preventDefault&&"#"===n.attr("href")&&e.preventDefault();var t=n.parent(a.parentTrigger),i=t.siblings(a.parentTrigger),r=i.children(a.triggerElement);t.hasClass(f)?(n.attr("aria-expanded","false"),s.removeActive(t)):(n.attr("aria-expanded","true"),s.setActive(t),a.toggle&&(s.removeActive(i),r.attr("aria-expanded","false"))),a.onTransitionStart&&a.onTransitionStart(e)}})},e.setActive=function(e){o(e).addClass(f);var n=o(e).children(this.config.subMenu);0<n.length&&!n.hasClass(u)&&this.show(n)},e.removeActive=function(e){o(e).removeClass(f);var n=o(e).children(this.config.subMenu+"."+u);0<n.length&&this.hide(n)},e.show=function(e){var n=this;if(!this.transitioning&&!o(e).hasClass(c)){var t=o(e),i=o.Event(l.SHOW);if(t.trigger(i),!i.isDefaultPrevented()){if(t.parent(this.config.parentTrigger).addClass(f),this.config.toggle){var r=t.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+u);this.hide(r)}t.removeClass(d).addClass(c).height(0),this.setTransitioning(!0);t.height(e[0].scrollHeight).one(a.TRANSITION_END,function(){n.config&&n.element&&(t.removeClass(c).addClass(d+" "+u).height(""),n.setTransitioning(!1),t.trigger(l.SHOWN))}).mmEmulateTransitionEnd(350)}}},e.hide=function(e){var n=this;if(!this.transitioning&&o(e).hasClass(u)){var t=o(e),i=o.Event(l.HIDE);if(t.trigger(i),!i.isDefaultPrevented()){t.parent(this.config.parentTrigger).removeClass(f),t.height(t.height())[0].offsetHeight,t.addClass(c).removeClass(d).removeClass(u),this.setTransitioning(!0);var r=function(){n.config&&n.element&&(n.transitioning&&n.config.onTransitionEnd&&n.config.onTransitionEnd(),n.setTransitioning(!1),t.trigger(l.HIDDEN),t.removeClass(c).addClass(d))};0===t.height()||"none"===t.css("display")?r():t.height(0).one(a.TRANSITION_END,r).mmEmulateTransitionEnd(350)}}},e.setTransitioning=function(e){this.transitioning=e},e.dispose=function(){o.removeData(this.element,g),o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},r.jQueryInterface=function(i){return this.each(function(){var e=o(this),n=e.data(g),t=s({},h,e.data(),"object"==typeof i&&i?i:{});if(n||(n=new r(this,t),e.data(g,n)),"string"==typeof i){if(void 0===n[i])throw new Error('No method named "'+i+'"');n[i]()}})},r}();return o.fn[e]=r.jQueryInterface,o.fn[e].Constructor=r,o.fn[e].noConflict=function(){return o.fn[e]=t,r.jQueryInterface},r});
//# sourceMappingURL=metisMenu.min.js.map

//Start tabs
/*
 * jQuery EasyTabs plugin 3.2.0
 *
 * Copyright (c) 2010-2011 Steve Schwartz (JangoSteve)
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 * Date: Thu May 09 17:30:00 2013 -0500
 */
(function (a) {
  a.easytabs = function (j, e) {
    var f = this, q = a(j), i = {
      animate: true,
      panelActiveClass: "active",
      tabActiveClass: "active",
      defaultTab: "li:first-child",
      animationSpeed: "normal",
      tabs: "> ul > li",
      updateHash: true,
      cycle: false,
      collapsible: false,
      collapsedClass: "collapsed",
      collapsedByDefault: true,
      uiTabs: false,
      transitionIn: "fadeIn",
      transitionOut: "fadeOut",
      transitionInEasing: "swing",
      transitionOutEasing: "swing",
      transitionCollapse: "slideUp",
      transitionUncollapse: "slideDown",
      transitionCollapseEasing: "swing",
      transitionUncollapseEasing: "swing",
      containerClass: "",
      tabsClass: "",
      tabClass: "",
      panelClass: "",
      cache: true,
      event: "click",
      panelContext: q
    }, h, l, v, m, d, t = {fast: 200, normal: 400, slow: 600}, r;
    f.init = function () {
      f.settings = r = a.extend({}, i, e);
      r.bind_str = r.event + ".easytabs";
      if (r.uiTabs) {
        r.tabActiveClass = "ui-tabs-selected";
        r.containerClass = "ui-tabs ui-widget ui-widget-content ui-corner-all";
        r.tabsClass = "ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all";
        r.tabClass = "ui-state-default ui-corner-top";
        r.panelClass = "ui-tabs-panel ui-widget-content ui-corner-bottom"
      }
      if (r.collapsible && e.defaultTab !== undefined && e.collpasedByDefault === undefined) {
        r.collapsedByDefault = false
      }
      if (typeof (r.animationSpeed) === "string") {
        r.animationSpeed = t[r.animationSpeed]
      }
      a("a.anchor").remove().prependTo("body");
      q.data("easytabs", {});
      f.setTransitions();
      f.getTabs();
      b();
      g();
      w();
      n();
      c();
      q.attr("data-easytabs", true)
    };
    f.setTransitions = function () {
      v = (r.animate) ? {
        show: r.transitionIn,
        hide: r.transitionOut,
        speed: r.animationSpeed,
        collapse: r.transitionCollapse,
        uncollapse: r.transitionUncollapse,
        halfSpeed: r.animationSpeed / 2
      } : {show: "show", hide: "hide", speed: 0, collapse: "hide", uncollapse: "show", halfSpeed: 0}
    };
    f.getTabs = function () {
      var x;
      f.tabs = q.find(r.tabs), f.panels = a(), f.tabs.each(function () {
        var A = a(this), z = A.children("a"), y = A.children("a").data("target");
        A.data("easytabs", {});
        if (y !== undefined && y !== null) {
          A.data("easytabs").ajax = z.attr("href")
        } else {
          y = z.attr("href")
        }
        y = y.match(/#([^\?]+)/)[1];
        x = r.panelContext.find("#" + y);
        if (x.length) {
          x.data("easytabs", {position: x.css("position"), visibility: x.css("visibility")});
          x.not(r.panelActiveClass).hide();
          f.panels = f.panels.add(x);
          A.data("easytabs").panel = x
        } else {
          f.tabs = f.tabs.not(A);
          if ("console" in window) {
            console.warn("Warning: tab without matching panel for selector '#" + y + "' removed from set")
          }
        }
      })
    };
    f.selectTab = function (x, C) {
      var y = window.location, B = y.hash.match(/^[^\?]*/)[0], z = x.parent().data("easytabs").panel, A = x.parent().data("easytabs").ajax;
      if (r.collapsible && !d && (x.hasClass(r.tabActiveClass) || x.hasClass(r.collapsedClass))) {
        f.toggleTabCollapse(x, z, A, C)
      } else {
        if (!x.hasClass(r.tabActiveClass) || !z.hasClass(r.panelActiveClass)) {
          o(x, z, A, C)
        } else {
          if (!r.cache) {
            o(x, z, A, C)
          }
        }
      }
    };
    f.toggleTabCollapse = function (x, y, z, A) {
      f.panels.stop(true, true);
      if (u(q, "easytabs:before", [x, y, r])) {
        f.tabs.filter("." + r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);
        if (x.hasClass(r.collapsedClass)) {
          if (z && (!r.cache || !x.parent().data("easytabs").cached)) {
            q.trigger("easytabs:ajax:beforeSend", [x, y]);
            y.load(z, function (C, B, D) {
              x.parent().data("easytabs").cached = true;
              q.trigger("easytabs:ajax:complete", [x, y, C, B, D])
            })
          }
          x.parent().removeClass(r.collapsedClass).addClass(r.tabActiveClass).children().removeClass(r.collapsedClass).addClass(r.tabActiveClass);
          y.addClass(r.panelActiveClass)[v.uncollapse](v.speed, r.transitionUncollapseEasing, function () {
            q.trigger("easytabs:midTransition", [x, y, r]);
            if (typeof A == "function") {
              A()
            }
          })
        } else {
          x.addClass(r.collapsedClass).parent().addClass(r.collapsedClass);
          y.removeClass(r.panelActiveClass)[v.collapse](v.speed, r.transitionCollapseEasing, function () {
            q.trigger("easytabs:midTransition", [x, y, r]);
            if (typeof A == "function") {
              A()
            }
          })
        }
      }
    };
    f.matchTab = function (x) {
      return f.tabs.find("[href='" + x + "'],[data-target='" + x + "']").first()
    };
    f.matchInPanel = function (x) {
      return (x && f.validId(x) ? f.panels.filter(":has(" + x + ")").first() : [])
    };
    f.validId = function (x) {
      return x.substr(1).match(/^[A-Za-z]+[A-Za-z0-9\-_:\.].$/)
    };
    f.selectTabFromHashChange = function () {
      var y = window.location.hash.match(/^[^\?]*/)[0], x = f.matchTab(y), z;
      if (r.updateHash) {
        if (x.length) {
          d = true;
          f.selectTab(x)
        } else {
          z = f.matchInPanel(y);
          if (z.length) {
            y = "#" + z.attr("id");
            x = f.matchTab(y);
            d = true;
            f.selectTab(x)
          } else {
            if (!h.hasClass(r.tabActiveClass) && !r.cycle) {
              if (y === "" || f.matchTab(m).length || q.closest(y).length) {
                d = true;
                f.selectTab(l)
              }
            }
          }
        }
      }
    };
    f.cycleTabs = function (x) {
      if (r.cycle) {
        x = x % f.tabs.length;
        $tab = a(f.tabs[x]).children("a").first();
        d = true;
        f.selectTab($tab, function () {
          setTimeout(function () {
            f.cycleTabs(x + 1)
          }, r.cycle)
        })
      }
    };
    f.publicMethods = {
      select: function (x) {
        var y;
        if ((y = f.tabs.filter(x)).length === 0) {
          if ((y = f.tabs.find("a[href='" + x + "']")).length === 0) {
            if ((y = f.tabs.find("a" + x)).length === 0) {
              if ((y = f.tabs.find("[data-target='" + x + "']")).length === 0) {
                if ((y = f.tabs.find("a[href$='" + x + "']")).length === 0) {
                  a.error("Tab '" + x + "' does not exist in tab set")
                }
              }
            }
          }
        } else {
          y = y.children("a").first()
        }
        f.selectTab(y)
      }
    };
    var u = function (A, x, z) {
      var y = a.Event(x);
      A.trigger(y, z);
      return y.result !== false
    };
    var b = function () {
      q.addClass(r.containerClass);
      f.tabs.parent().addClass(r.tabsClass);
      f.tabs.addClass(r.tabClass);
      f.panels.addClass(r.panelClass)
    };
    var g = function () {
      var y = window.location.hash.match(/^[^\?]*/)[0], x = f.matchTab(y).parent(), z;
      if (x.length === 1) {
        h = x;
        r.cycle = false
      } else {
        z = f.matchInPanel(y);
        if (z.length) {
          y = "#" + z.attr("id");
          h = f.matchTab(y).parent()
        } else {
          h = f.tabs.parent().find(r.defaultTab);
          if (h.length === 0) {
            a.error("The specified default tab ('" + r.defaultTab + "') could not be found in the tab set ('" + r.tabs + "') out of " + f.tabs.length + " tabs.")
          }
        }
      }
      l = h.children("a").first();
      p(x)
    };
    var p = function (z) {
      var y, x;
      if (r.collapsible && z.length === 0 && r.collapsedByDefault) {
        h.addClass(r.collapsedClass).children().addClass(r.collapsedClass)
      } else {
        y = a(h.data("easytabs").panel);
        x = h.data("easytabs").ajax;
        if (x && (!r.cache || !h.data("easytabs").cached)) {
          q.trigger("easytabs:ajax:beforeSend", [l, y]);
          y.load(x, function (B, A, C) {
            h.data("easytabs").cached = true;
            q.trigger("easytabs:ajax:complete", [l, y, B, A, C])
          })
        }
        h.data("easytabs").panel.show().addClass(r.panelActiveClass);
        h.addClass(r.tabActiveClass).children().addClass(r.tabActiveClass)
      }
      q.trigger("easytabs:initialised", [l, y])
    };
    var w = function () {
      f.tabs.children("a").bind(r.bind_str, function (x) {
        r.cycle = false;
        d = false;
        f.selectTab(a(this));
        x.preventDefault ? x.preventDefault() : x.returnValue = false
      })
    };
    var o = function (z, D, E, H) {
      f.panels.stop(true, true);
      if (u(q, "easytabs:before", [z, D, r])) {
        var A = f.panels.filter(":visible"), y = D.parent(), F, x, C, G, B = window.location.hash.match(/^[^\?]*/)[0];
        if (r.animate) {
          F = s(D);
          x = A.length ? k(A) : 0;
          C = F - x
        }
        m = B;
        G = function () {
          q.trigger("easytabs:midTransition", [z, D, r]);
          if (r.animate && r.transitionIn == "fadeIn") {
            if (C < 0) {
              y.animate({height: y.height() + C}, v.halfSpeed).css({"min-height": ""})
            }
          }
          if (r.updateHash && !d) {
            window.location.hash = "#" + D.attr("id")
          } else {
            d = false
          }
          D[v.show](v.speed, r.transitionInEasing, function () {
            y.css({height: "", "min-height": ""});
            q.trigger("easytabs:after", [z, D, r]);
            if (typeof H == "function") {
              H()
            }
          })
        };
        if (E && (!r.cache || !z.parent().data("easytabs").cached)) {
          q.trigger("easytabs:ajax:beforeSend", [z, D]);
          D.load(E, function (J, I, K) {
            z.parent().data("easytabs").cached = true;
            q.trigger("easytabs:ajax:complete", [z, D, J, I, K])
          })
        }
        if (r.animate && r.transitionOut == "fadeOut") {
          if (C > 0) {
            y.animate({height: (y.height() + C)}, v.halfSpeed)
          } else {
            y.css({"min-height": y.height()})
          }
        }
        f.tabs.filter("." + r.tabActiveClass).removeClass(r.tabActiveClass).children().removeClass(r.tabActiveClass);
        f.tabs.filter("." + r.collapsedClass).removeClass(r.collapsedClass).children().removeClass(r.collapsedClass);
        z.parent().addClass(r.tabActiveClass).children().addClass(r.tabActiveClass);
        f.panels.filter("." + r.panelActiveClass).removeClass(r.panelActiveClass);
        D.addClass(r.panelActiveClass);
        if (A.length) {
          A[v.hide](v.speed, r.transitionOutEasing, G)
        } else {
          D[v.uncollapse](v.speed, r.transitionUncollapseEasing, G)
        }
      }
    };
    var s = function (z) {
      if (z.data("easytabs") && z.data("easytabs").lastHeight) {
        return z.data("easytabs").lastHeight
      }
      var B = z.css("display"), y, x;
      try {
        y = a("<div></div>", {position: "absolute", visibility: "hidden", overflow: "hidden"})
      } catch (A) {
        y = a("<div></div>", {visibility: "hidden", overflow: "hidden"})
      }
      x = z.wrap(y).css({position: "relative", visibility: "hidden", display: "block"}).outerHeight();
      z.unwrap();
      z.css({position: z.data("easytabs").position, visibility: z.data("easytabs").visibility, display: B});
      z.data("easytabs").lastHeight = x;
      return x
    };
    var k = function (y) {
      var x = y.outerHeight();
      if (y.data("easytabs")) {
        y.data("easytabs").lastHeight = x
      } else {
        y.data("easytabs", {lastHeight: x})
      }
      return x
    };
    var n = function () {
      if (typeof a(window).hashchange === "function") {
        a(window).hashchange(function () {
          f.selectTabFromHashChange()
        })
      } else {
        if (a.address && typeof a.address.change === "function") {
          a.address.change(function () {
            f.selectTabFromHashChange()
          })
        }
      }
    };
    var c = function () {
      var x;
      if (r.cycle) {
        x = f.tabs.index(h);
        setTimeout(function () {
          f.cycleTabs(x + 1)
        }, r.cycle)
      }
    };
    f.init()
  };
  a.fn.easytabs = function (c) {
    var b = arguments;
    return this.each(function () {
      var e = a(this), d = e.data("easytabs");
      if (undefined === d) {
        d = new a.easytabs(this, c);
        e.data("easytabs", d)
      }
      if (d.publicMethods[c]) {
        return d.publicMethods[c](Array.prototype.slice.call(b, 1))
      }
    })
  }
})(jQuery);

// Start migrate
/*! jQuery Migrate v3.4.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined"==typeof jQuery.migrateMute&&(jQuery.migrateMute=!0),function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(e){return t(e,window)}):"object"==typeof module&&module.exports?module.exports=t(require("jquery"),window):t(jQuery,window)}(function(s,n){"use strict";function e(e){return 0<=function(e,t){for(var r=/^(\d+)\.(\d+)\.(\d+)/,n=r.exec(e)||[],o=r.exec(t)||[],a=1;a<=3;a++){if(+n[a]>+o[a])return 1;if(+n[a]<+o[a])return-1}return 0}(s.fn.jquery,e)}s.migrateVersion="3.4.0";var t=Object.create(null),o=(s.migrateDisablePatches=function(){for(var e=0;e<arguments.length;e++)t[arguments[e]]=!0},s.migrateEnablePatches=function(){for(var e=0;e<arguments.length;e++)delete t[arguments[e]]},s.migrateIsPatchEnabled=function(e){return!t[e]},n.console&&n.console.log&&(s&&e("3.0.0")||n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),s.migrateWarnings&&n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),n.console.log("JQMIGRATE: Migrate is installed"+(s.migrateMute?"":" with logging active")+", version "+s.migrateVersion)),{});function i(e,t){var r=n.console;!s.migrateIsPatchEnabled(e)||s.migrateDeduplicateWarnings&&o[t]||(o[t]=!0,s.migrateWarnings.push(t+" ["+e+"]"),r&&r.warn&&!s.migrateMute&&(r.warn("JQMIGRATE: "+t),s.migrateTrace&&r.trace&&r.trace()))}function r(e,t,r,n,o){Object.defineProperty(e,t,{configurable:!0,enumerable:!0,get:function(){return i(n,o),r},set:function(e){i(n,o),r=e}})}function a(e,t,r,n,o){var a=e[t];e[t]=function(){return o&&i(n,o),(s.migrateIsPatchEnabled(n)?r:a||s.noop).apply(this,arguments)}}function u(e,t,r,n,o){if(!o)throw new Error("No warning message provided");a(e,t,r,n,o)}function d(e,t,r,n){a(e,t,r,n)}s.migrateDeduplicateWarnings=!0,s.migrateWarnings=[],void 0===s.migrateTrace&&(s.migrateTrace=!0),s.migrateReset=function(){o={},s.migrateWarnings.length=0},"BackCompat"===n.document.compatMode&&i("quirks","jQuery is not compatible with Quirks Mode");var c,l,p,f={},m=s.fn.init,y=s.find,h=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,g=/\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,v=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;for(c in d(s.fn,"init",function(e){var t=Array.prototype.slice.call(arguments);return s.migrateIsPatchEnabled("selector-empty-id")&&"string"==typeof e&&"#"===e&&(i("selector-empty-id","jQuery( '#' ) is not a valid selector"),t[0]=[]),m.apply(this,t)},"selector-empty-id"),s.fn.init.prototype=s.fn,d(s,"find",function(t){var r=Array.prototype.slice.call(arguments);if("string"==typeof t&&h.test(t))try{n.document.querySelector(t)}catch(e){t=t.replace(g,function(e,t,r,n){return"["+t+r+'"'+n+'"]'});try{n.document.querySelector(t),i("selector-hash","Attribute selector with '#' must be quoted: "+r[0]),r[0]=t}catch(e){i("selector-hash","Attribute selector with '#' was not fixed: "+r[0])}}return y.apply(this,r)},"selector-hash"),y)Object.prototype.hasOwnProperty.call(y,c)&&(s.find[c]=y[c]);u(s.fn,"size",function(){return this.length},"size","jQuery.fn.size() is deprecated and removed; use the .length property"),u(s,"parseJSON",function(){return JSON.parse.apply(null,arguments)},"parseJSON","jQuery.parseJSON is deprecated; use JSON.parse"),u(s,"holdReady",s.holdReady,"holdReady","jQuery.holdReady is deprecated"),u(s,"unique",s.uniqueSort,"unique","jQuery.unique is deprecated; use jQuery.uniqueSort"),r(s.expr,"filters",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),r(s.expr,":",s.expr.pseudos,"expr-pre-pseudos","jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),e("3.1.1")&&u(s,"trim",function(e){return null==e?"":(e+"").replace(v,"")},"trim","jQuery.trim is deprecated; use String.prototype.trim"),e("3.2.0")&&(u(s,"nodeName",function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},"nodeName","jQuery.nodeName is deprecated"),u(s,"isArray",Array.isArray,"isArray","jQuery.isArray is deprecated; use Array.isArray")),e("3.3.0")&&(u(s,"isNumeric",function(e){var t=typeof e;return("number"==t||"string"==t)&&!isNaN(e-parseFloat(e))},"isNumeric","jQuery.isNumeric() is deprecated"),s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){f["[object "+t+"]"]=t.toLowerCase()}),u(s,"type",function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?f[Object.prototype.toString.call(e)]||"object":typeof e},"type","jQuery.type is deprecated"),u(s,"isFunction",function(e){return"function"==typeof e},"isFunction","jQuery.isFunction() is deprecated"),u(s,"isWindow",function(e){return null!=e&&e===e.window},"isWindow","jQuery.isWindow() is deprecated")),s.ajax&&(l=s.ajax,p=/(=)\?(?=&|$)|\?\?/,d(s,"ajax",function(){var e=l.apply(this,arguments);return e.promise&&(u(e,"success",e.done,"jqXHR-methods","jQXHR.success is deprecated and removed"),u(e,"error",e.fail,"jqXHR-methods","jQXHR.error is deprecated and removed"),u(e,"complete",e.always,"jqXHR-methods","jQXHR.complete is deprecated and removed")),e},"jqXHR-methods"),e("4.0.0")||s.ajaxPrefilter("+json",function(e){!1!==e.jsonp&&(p.test(e.url)||"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&p.test(e.data))&&i("jsonp-promotion","JSON-to-JSONP auto-promotion is deprecated")}));var j=s.fn.removeAttr,b=s.fn.toggleClass,w=/\S+/g;function Q(e){return e.replace(/-([a-z])/g,function(e,t){return t.toUpperCase()})}d(s.fn,"removeAttr",function(e){var r=this;return s.each(e.match(w),function(e,t){s.expr.match.bool.test(t)&&(i("removeAttr-bool","jQuery.fn.removeAttr no longer sets boolean properties: "+t),r.prop(t,!1))}),j.apply(this,arguments)},"removeAttr-bool"),d(s.fn,"toggleClass",function(t){return void 0!==t&&"boolean"!=typeof t?b.apply(this,arguments):(i("toggleClass-bool","jQuery.fn.toggleClass( boolean ) is deprecated"),this.each(function(){var e=this.getAttribute&&this.getAttribute("class")||"";e&&s.data(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==t&&s.data(this,"__className__")||"")}))},"toggleClass-bool");var x,A=!1,R=/^[a-z]/,T=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;s.swap&&s.each(["height","width","reliableMarginRight"],function(e,t){var r=s.cssHooks[t]&&s.cssHooks[t].get;r&&(s.cssHooks[t].get=function(){var e;return A=!0,e=r.apply(this,arguments),A=!1,e})}),d(s,"swap",function(e,t,r,n){var o,a={};for(o in A||i("swap","jQuery.swap() is undocumented and deprecated"),t)a[o]=e.style[o],e.style[o]=t[o];for(o in r=r.apply(e,n||[]),t)e.style[o]=a[o];return r},"swap"),e("3.4.0")&&"undefined"!=typeof Proxy&&(s.cssProps=new Proxy(s.cssProps||{},{set:function(){return i("cssProps","jQuery.cssProps is deprecated"),Reflect.set.apply(this,arguments)}})),e("4.0.0")&&"undefined"!=typeof Proxy&&(s.cssNumber=new Proxy({animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},{get:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.get.apply(this,arguments)},set:function(){return i("css-number","jQuery.cssNumber is deprecated"),Reflect.set.apply(this,arguments)}})),x=s.fn.css,d(s.fn,"css",function(e,t){var r,n=this;return e&&"object"==typeof e&&!Array.isArray(e)?(s.each(e,function(e,t){s.fn.css.call(n,e,t)}),this):("number"==typeof t&&(t=Q(e),r=t,R.test(r)&&T.test(r[0].toUpperCase()+r.slice(1))||s.cssNumber[t]||i("css-number",'Number-typed values are deprecated for jQuery.fn.css( "'+e+'", value )')),x.apply(this,arguments))},"css-number");function C(e){var t=n.document.implementation.createHTMLDocument("");return t.body.innerHTML=e,t.body&&t.body.innerHTML}var S,N,P,k,H,E,M,q=s.data,D=(d(s,"data",function(e,t,r){var n,o,a;if(t&&"object"==typeof t&&2===arguments.length){for(a in n=s.hasData(e)&&q.call(this,e),o={},t)a!==Q(a)?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+a),n[a]=t[a]):o[a]=t[a];return q.call(this,e,o),t}return t&&"string"==typeof t&&t!==Q(t)&&(n=s.hasData(e)&&q.call(this,e))&&t in n?(i("data-camelCase","jQuery.data() always sets/gets camelCased names: "+t),2<arguments.length&&(n[t]=r),n[t]):q.apply(this,arguments)},"data-camelCase"),s.fx&&(P=s.Tween.prototype.run,k=function(e){return e},d(s.Tween.prototype,"run",function(){1<s.easing[this.easing].length&&(i("easing-one-arg","'jQuery.easing."+this.easing.toString()+"' should use only one argument"),s.easing[this.easing]=k),P.apply(this,arguments)},"easing-one-arg"),S=s.fx.interval,N="jQuery.fx.interval is deprecated",n.requestAnimationFrame&&Object.defineProperty(s.fx,"interval",{configurable:!0,enumerable:!0,get:function(){return n.document.hidden||i("fx-interval",N),s.migrateIsPatchEnabled("fx-interval")&&void 0===S?13:S},set:function(e){i("fx-interval",N),S=e}})),s.fn.load),F=s.event.add,W=s.event.fix,O=(s.event.props=[],s.event.fixHooks={},r(s.event.props,"concat",s.event.props.concat,"event-old-patch","jQuery.event.props.concat() is deprecated and removed"),d(s.event,"fix",function(e){var t=e.type,r=this.fixHooks[t],n=s.event.props;if(n.length){i("event-old-patch","jQuery.event.props are deprecated and removed: "+n.join());while(n.length)s.event.addProp(n.pop())}if(r&&!r._migrated_&&(r._migrated_=!0,i("event-old-patch","jQuery.event.fixHooks are deprecated and removed: "+t),(n=r.props)&&n.length))while(n.length)s.event.addProp(n.pop());return t=W.call(this,e),r&&r.filter?r.filter(t,e):t},"event-old-patch"),d(s.event,"add",function(e,t){return e===n&&"load"===t&&"complete"===n.document.readyState&&i("load-after-event","jQuery(window).on('load'...) called after load event occurred"),F.apply(this,arguments)},"load-after-event"),s.each(["load","unload","error"],function(e,t){d(s.fn,t,function(){var e=Array.prototype.slice.call(arguments,0);return"load"===t&&"string"==typeof e[0]?D.apply(this,e):(i("shorthand-removed-v3","jQuery.fn."+t+"() is deprecated"),e.splice(0,0,t),arguments.length?this.on.apply(this,e):(this.triggerHandler.apply(this,e),this))},"shorthand-removed-v3")}),s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,r){u(s.fn,r,function(e,t){return 0<arguments.length?this.on(r,null,e,t):this.trigger(r)},"shorthand-deprecated-v3","jQuery.fn."+r+"() event shorthand is deprecated")}),s(function(){s(n.document).triggerHandler("ready")}),s.event.special.ready={setup:function(){this===n.document&&i("ready-event","'ready' event is deprecated")}},u(s.fn,"bind",function(e,t,r){return this.on(e,null,t,r)},"pre-on-methods","jQuery.fn.bind() is deprecated"),u(s.fn,"unbind",function(e,t){return this.off(e,null,t)},"pre-on-methods","jQuery.fn.unbind() is deprecated"),u(s.fn,"delegate",function(e,t,r,n){return this.on(t,e,r,n)},"pre-on-methods","jQuery.fn.delegate() is deprecated"),u(s.fn,"undelegate",function(e,t,r){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",r)},"pre-on-methods","jQuery.fn.undelegate() is deprecated"),u(s.fn,"hover",function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)},"pre-on-methods","jQuery.fn.hover() is deprecated"),/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi),_=(s.UNSAFE_restoreLegacyHtmlPrefilter=function(){s.migrateEnablePatches("self-closed-tags")},d(s,"htmlPrefilter",function(e){var t,r;return(r=(t=e).replace(O,"<$1></$2>"))!==t&&C(t)!==C(r)&&i("self-closed-tags","HTML tags must be properly nested and closed: "+t),e.replace(O,"<$1></$2>")},"self-closed-tags"),s.migrateDisablePatches("self-closed-tags"),s.fn.offset);return d(s.fn,"offset",function(){var e=this[0];return!e||e.nodeType&&e.getBoundingClientRect?_.apply(this,arguments):(i("offset-valid-elem","jQuery.fn.offset() requires a valid DOM element"),arguments.length?this:void 0)},"offset-valid-elem"),s.ajax&&(H=s.param,d(s,"param",function(e,t){var r=s.ajaxSettings&&s.ajaxSettings.traditional;return void 0===t&&r&&(i("param-ajax-traditional","jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),t=r),H.call(this,e,t)},"param-ajax-traditional")),u(s.fn,"andSelf",s.fn.addBack,"andSelf","jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),s.Deferred&&(E=s.Deferred,M=[["resolve","done",s.Callbacks("once memory"),s.Callbacks("once memory"),"resolved"],["reject","fail",s.Callbacks("once memory"),s.Callbacks("once memory"),"rejected"],["notify","progress",s.Callbacks("memory"),s.Callbacks("memory")]],d(s,"Deferred",function(e){var a=E(),i=a.promise();function t(){var o=arguments;return s.Deferred(function(n){s.each(M,function(e,t){var r="function"==typeof o[e]&&o[e];a[t[1]](function(){var e=r&&r.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[t[0]+"With"](this===i?n.promise():this,r?[e]:arguments)})}),o=null}).promise()}return u(a,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),u(i,"pipe",t,"deferred-pipe","deferred.pipe() is deprecated"),e&&e.call(a,a),a},"deferred-pipe"),s.Deferred.exceptionHook=E.exceptionHook),s});


/*
International Telephone Input v3.6.1
https://github.com/Bluefieldscom/intl-tel-input.git
*/
// wrap in UMD - see https://github.com/umdjs/umd/blob/master/jqueryPlugin.js
(function(factory) {
  if (typeof define === "function" && define.amd) {
    define([ "jquery" ], function($) {
      factory($, window, document);
    });
  } else {
    factory(jQuery, window, document);
  }
})(function($, window, document, undefined) {
  "use strict";
  var pluginName = "intlTelInput", id = 1, // give each instance it's own id for namespaced event handling
    defaults = {
      // automatically format the number according to the selected country
      autoFormat: true,
      // if there is just a dial code in the input: remove it on blur, and re-add it on focus
      autoHideDialCode: true,
      // default country
      defaultCountry: "",
      // don't insert international dial codes
      nationalMode: false,
      // number type to use for placeholders
      numberType: "",
      // display only these countries
      onlyCountries: [],
      // the countries at the top of the list. defaults to united states and united kingdom
      preferredCountries: [ "ru" ],
      // make the dropdown the same width as the input
      responsiveDropdown: false,
      // specify the path to the libphonenumber script to enable validation/formatting
      utilsScript: ""
    }, keys = {
      UP: 38,
      DOWN: 40,
      ENTER: 13,
      ESC: 27,
      PLUS: 43,
      A: 65,
      Z: 90,
      ZERO: 48,
      NINE: 57,
      SPACE: 32,
      BSPACE: 8,
      DEL: 46,
      CTRL: 17,
      CMD1: 91,
      // Chrome
      CMD2: 224
    }, windowLoaded = false;
  // keep track of if the window.load event has fired as impossible to check after the fact
  $(window).load(function() {
    windowLoaded = true;
  });
  function Plugin(element, options) {
    this.element = element;
    this.options = $.extend({}, defaults, options);
    this._defaults = defaults;
    // event namespace
    this.ns = "." + pluginName + id++;
    // Chrome, FF, Safari, IE9+
    this.isGoodBrowser = Boolean(element.setSelectionRange);
    this.hadInitialPlaceholder = Boolean($(element).attr("placeholder"));
    this._name = pluginName;
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var that = this;
      // if defaultCountry is set to "auto", we must do a lookup first
      if (this.options.defaultCountry == "auto") {
        $.get("http://ipinfo.io", function(response) {
          that.options.defaultCountry = response && response.country ? response.country.toLowerCase() : "";
          that.ready();
        }, "jsonp");
      } else {
        this.ready();
      }
    },
    ready: function() {
      // if in nationalMode, disable options relating to dial codes
      if (this.options.nationalMode) {
        this.options.autoHideDialCode = false;
      }
      // IE Mobile and Chrome for Android have issues with key events (see issues 56 and 68) which make autoFormat impossible
      if (navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/Android/i) && navigator.userAgent.match(/Chrome/i)) {
        this.options.autoFormat = false;
      }
      // auto enable responsiveDropdown mode on small screens (dropdown is currently set to 430px in CSS)
      if (window.innerWidth < 500) {
        this.options.responsiveDropdown = true;
      }
      // process all the data: onlyCounties, preferredCountries, defaultCountry etc
      this._processCountryData();
      // generate the markup
      this._generateMarkup();
      // set the initial state of the input value and the selected flag
      this._setInitialState();
      // start all of the event listeners: autoHideDialCode, input keydown, selectedFlag click
      this._initListeners();
    },
    /********************
     *  PRIVATE METHODS
     ********************/
    // prepare all of the country data, including onlyCountries, preferredCountries and
    // defaultCountry options
    _processCountryData: function() {
      // set the instances country data objects
      this._setInstanceCountryData();
      // set the preferredCountries property
      this._setPreferredCountries();
    },
    // add a country code to this.countryCodes
    _addCountryCode: function(iso2, dialCode, priority) {
      if (!(dialCode in this.countryCodes)) {
        this.countryCodes[dialCode] = [];
      }
      var index = priority || 0;
      this.countryCodes[dialCode][index] = iso2;
    },
    // process onlyCountries array if present, and generate the countryCodes map
    _setInstanceCountryData: function() {
      var i;
      // process onlyCountries option
      if (this.options.onlyCountries.length) {
        this.countries = [];
        for (i = 0; i < this.options.onlyCountries.length; i++) {
          var countryData = this._getCountryData(this.options.onlyCountries[i], true, false);
          if (countryData) {
            this.countries.push(countryData);
          }
        }
      } else {
        this.countries = allCountries;
      }
      // generate countryCodes map
      this.countryCodes = {};
      for (i = 0; i < this.countries.length; i++) {
        var c = this.countries[i];
        this._addCountryCode(c.iso2, c.dialCode, c.priority);
        // area codes
        if (c.areaCodes) {
          for (var j = 0; j < c.areaCodes.length; j++) {
            // full dial code is country code + dial code
            this._addCountryCode(c.iso2, c.dialCode + c.areaCodes[j]);
          }
        }
      }
    },
    // process preferred countries - iterate through the preferences,
    // fetching the country data for each one
    _setPreferredCountries: function() {
      this.preferredCountries = [];
      for (var i = 0; i < this.options.preferredCountries.length; i++) {
        var countryCode = this.options.preferredCountries[i], countryData = this._getCountryData(countryCode, false, true);
        if (countryData) {
          this.preferredCountries.push(countryData);
        }
      }
    },
    // generate all of the markup for the plugin: the selected flag overlay, and the dropdown
    _generateMarkup: function() {
      // telephone input
      this.telInput = $(this.element);
      // containers (mostly for positioning)
      this.telInput.wrap($("<div>", {
        "class": "intl-tel-input"
      }));
      var flagsContainer = $("<div>", {
        "class": "flag-dropdown"
      }).insertAfter(this.telInput);
      // currently selected flag (displayed to left of input)
      var selectedFlag = $("<div>", {
        "class": "selected-flag"
      }).appendTo(flagsContainer);
      this.selectedFlagInner = $("<div>", {
        "class": "flag"
      }).appendTo(selectedFlag);
      // CSS triangle
      $("<div>", {
        "class": "arrow"
      }).appendTo(this.selectedFlagInner);
      // country list contains: preferred countries, then divider, then all countries
      this.countryList = $("<ul>", {
        "class": "country-list v-hide"
      }).appendTo(flagsContainer);
      if (this.preferredCountries.length) {
        this._appendListItems(this.preferredCountries, "preferred");
        $("<li>", {
          "class": "divider"
        }).appendTo(this.countryList);
      }
      this._appendListItems(this.countries, "");
      // now we can grab the dropdown height, and hide it properly
      this.dropdownHeight = this.countryList.outerHeight();
      this.countryList.removeClass("v-hide").addClass("hide");
      // and set the width
      if (this.options.responsiveDropdown) {
        this.countryList.outerWidth(this.telInput.outerWidth());
      }
      // this is useful in lots of places
      this.countryListItems = this.countryList.children(".country");
    },
    // add a country <li> to the countryList <ul> container
    _appendListItems: function(countries, className) {
      // we create so many DOM elements, I decided it was faster to build a temp string
      // and then add everything to the DOM in one go at the end
      var tmp = "";
      // for each country
      for (var i = 0; i < countries.length; i++) {
        var c = countries[i];
        // open the list item
        tmp += "<li class='country " + className + "' data-dial-code='" + c.dialCode + "' data-country-code='" + c.iso2 + "'>";
        // add the flag
        tmp += "<div class='flag " + c.iso2 + "'></div>";
        // and the country name and dial code
        tmp += "<span class='country-name'>" + c.name + "</span>";
        tmp += "<span class='dial-code'>+" + c.dialCode + "</span>";
        // close the list item
        tmp += "</li>";
      }
      this.countryList.append(tmp);
    },
    // set the initial state of the input value and the selected flag
    _setInitialState: function() {
      var val = this.telInput.val();
      // if there is a number, and it's valid, we can go ahead and set the flag, else fall back to default
      if (this._getDialCode(val)) {
        this._updateFlagFromNumber(val);
      } else {
        var defaultCountry;
        // check the defaultCountry option, else fall back to the first in the list
        if (this.options.defaultCountry) {
          defaultCountry = this._getCountryData(this.options.defaultCountry, false, false);
        } else {
          defaultCountry = this.preferredCountries.length ? this.preferredCountries[0] : this.countries[0];
        }
        this._selectFlag(defaultCountry.iso2);
        // if empty, insert the default dial code (this function will check !nationalMode and !autoHideDialCode)
        if (!val) {
          this._updateDialCode(defaultCountry.dialCode, false);
        }
      }
      // format
      if (val) {
        // this wont be run after _updateDialCode as that's only called if no val
        this._updateVal(val, false);
      }
    },
    // initialise the main event listeners: input keyup, and click selected flag
    _initListeners: function() {
      var that = this;
      this._initKeyListeners();
      // autoFormat prevents the change event from firing, so we need to check for changes between focus and blur in order to manually trigger it
      if (this.options.autoHideDialCode || this.options.autoFormat) {
        this._initFocusListeners();
      }
      // hack for input nested inside label: clicking the selected-flag to open the dropdown would then automatically trigger a 2nd click on the input which would close it again
      var label = this.telInput.closest("label");
      if (label.length) {
        label.on("click" + this.ns, function(e) {
          // if the dropdown is closed, then focus the input, else ignore the click
          if (that.countryList.hasClass("hide")) {
            that.telInput.focus();
          } else {
            e.preventDefault();
          }
        });
      }
      // toggle country dropdown on click
      var selectedFlag = this.selectedFlagInner.parent();
      selectedFlag.on("click" + this.ns, function(e) {
        // only intercept this event if we're opening the dropdown
        // else let it bubble up to the top ("click-off-to-close" listener)
        // we cannot just stopPropagation as it may be needed to close another instance
        if (that.countryList.hasClass("hide") && !that.telInput.prop("disabled")) {
          that._showDropdown();
        }
      });
      // if the user has specified the path to the utils script, fetch it on window.load
      if (this.options.utilsScript) {
        // if the plugin is being initialised after the window.load event has already been fired
        if (windowLoaded) {
          this.loadUtils();
        } else {
          // wait until the load event so we don't block any other requests e.g. the flags image
          $(window).load(function() {
            that.loadUtils();
          });
        }
      }
    },
    _initKeyListeners: function() {
      var that = this;
      if (this.options.autoFormat) {
        // format number and update flag on keypress
        // use keypress event as we want to ignore all input except for a select few keys,
        // but we dont want to ignore the navigation keys like the arrows etc.
        // NOTE: no point in refactoring this to only bind these listeners on focus/blur because then you would need to have those 2 listeners running the whole time anyway...
        this.telInput.on("keypress" + this.ns, function(e) {
          // 32 is space, and after that it's all chars (not meta/nav keys)
          // this fix is needed for Firefox, which triggers keypress event for some meta/nav keys
          // Update: also ignore if this is a metaKey e.g. FF and Safari trigger keypress on the v of Ctrl+v
          if (e.which >= keys.SPACE && !e.metaKey) {
            e.preventDefault();
            // allowed keys are just numeric keys and plus
            // we must allow plus for the case where the user does select-all and then hits plus to start typing a new number. we could refine this logic to first check that the selection contains a plus, but that wont work in old browsers, and I think it's overkill anyway
            var isAllowedKey = e.which >= keys.ZERO && e.which <= keys.NINE || e.which == keys.PLUS, input = that.telInput[0], noSelection = that.isGoodBrowser && input.selectionStart == input.selectionEnd, max = that.telInput.attr("maxlength"), // assumes that if max exists, it is >0
              isBelowMax = max ? that.telInput.val().length < max : true;
            // first: ensure we dont go over maxlength. we must do this here to prevent adding digits in the middle of the number
            // still reformat even if not an allowed key as they could by typing a formatting char, but ignore if there's a selection as doesn't make sense to replace selection with illegal char and then immediately remove it
            if (isBelowMax && (isAllowedKey || noSelection)) {
              var newChar = isAllowedKey ? String.fromCharCode(e.which) : null;
              that._handleInputKey(newChar, true);
            }
            if (!isAllowedKey) {
              that.telInput.trigger("invalidkey");
            }
          }
        });
      }
      // handle keyup event
      // for autoFormat: we use keyup to catch delete events after the fact
      this.telInput.on("keyup" + this.ns, function(e) {
        // the "enter" key event from selecting a dropdown item is triggered here on the input, because the document.keydown handler that initially handles that event triggers a focus on the input, and so the keyup for that same key event gets triggered here. weird, but just make sure we dont bother doing any re-formatting in this case (we've already done preventDefault in the keydown handler, so it wont actually submit the form or anything).
        if (e.which == keys.ENTER) {} else if (that.options.autoFormat) {
          var isCtrl = e.which == keys.CTRL || e.which == keys.CMD1 || e.which == keys.CMD2, input = that.telInput[0], // noSelection defaults to false for bad browsers, else would be reformatting on all ctrl keys e.g. select-all/copy
            noSelection = that.isGoodBrowser && input.selectionStart == input.selectionEnd, // cursorAtEnd defaults to false for bad browsers else they would never get a reformat on delete
            cursorAtEnd = that.isGoodBrowser && input.selectionStart == that.telInput.val().length;
          // if delete in the middle: reformat with no suffix (no need to reformat if delete at end)
          // if backspace: reformat with no suffix (need to reformat if at end to remove any lingering suffix - this is a feature)
          // if ctrl and no selection (i.e. could have just been a paste): reformat (if cursorAtEnd: add suffix)
          if (e.which == keys.DEL && !cursorAtEnd || e.which == keys.BSPACE || isCtrl && noSelection) {
            // important to remember never to add suffix on any delete key as can fuck up in ie8 so you can never delete a formatting char at the end
            that._handleInputKey(null, isCtrl && cursorAtEnd);
          }
          // prevent deleting the plus (if not in nationalMode)
          if (!that.options.nationalMode) {
            var val = that.telInput.val();
            if (val.substr(0, 1) != "+") {
              // newCursorPos is current pos + 1 to account for the plus we are about to add
              var newCursorPos = that.isGoodBrowser ? input.selectionStart + 1 : 0;
              that.telInput.val("+" + val);
              if (that.isGoodBrowser) {
                input.setSelectionRange(newCursorPos, newCursorPos);
              }
            }
          }
        } else {
          // if no autoFormat, just update flag
          that._updateFlagFromNumber(that.telInput.val());
        }
      });
    },
    // when autoFormat is enabled: handle various key events on the input: the 2 main situations are 1) adding a new number character, which will replace any selection, reformat, and try to preserve the cursor position. and 2) reformatting on backspace, or paste event
    _handleInputKey: function(newNumericChar, addSuffix) {
      var val = this.telInput.val(), newCursor = null, cursorAtEnd = false, // raw DOM element
        input = this.telInput[0];
      if (this.isGoodBrowser) {
        var selectionEnd = input.selectionEnd, originalLen = val.length;
        cursorAtEnd = selectionEnd == originalLen;
        // if handling a new number character: insert it in the right place and calculate the new cursor position
        if (newNumericChar) {
          // replace any selection they may have made with the new char
          val = val.substr(0, input.selectionStart) + newNumericChar + val.substring(selectionEnd, originalLen);
          // if the cursor was not at the end then calculate it's new pos
          if (!cursorAtEnd) {
            newCursor = selectionEnd + (val.length - originalLen);
          }
        } else {
          // here we're not handling a new char, we're just doing a re-format, but we still need to maintain the cursor position
          newCursor = input.selectionStart;
        }
      } else if (newNumericChar) {
        val += newNumericChar;
      }
      // update the number and flag
      this.setNumber(val, addSuffix);
      // update the cursor position
      if (this.isGoodBrowser) {
        // if it was at the end, keep it there
        if (cursorAtEnd) {
          newCursor = this.telInput.val().length;
        }
        input.setSelectionRange(newCursor, newCursor);
      }
    },
    // listen for focus and blur
    _initFocusListeners: function() {
      var that = this;
      if (this.options.autoHideDialCode) {
        // mousedown decides where the cursor goes, so if we're focusing we must preventDefault as we'll be inserting the dial code, and we want the cursor to be at the end no matter where they click
        this.telInput.on("mousedown" + this.ns, function(e) {
          if (!that.telInput.is(":focus") && !that.telInput.val()) {
            e.preventDefault();
            // but this also cancels the focus, so we must trigger that manually
            that.telInput.focus();
          }
        });
      }
      this.telInput.on("focus" + this.ns, function() {
        var value = that.telInput.val();
        // save this to compare on blur
        that.telInput.data("focusVal", value);
        if (that.options.autoHideDialCode) {
          // on focus: if empty, insert the dial code for the currently selected flag
          if (!value) {
            that._updateVal("+" + that.selectedCountryData.dialCode, true);
            // after auto-inserting a dial code, if the first key they hit is '+' then assume they are entering a new number, so remove the dial code. use keypress instead of keydown because keydown gets triggered for the shift key (required to hit the + key), and instead of keyup because that shows the new '+' before removing the old one
            that.telInput.one("keypress.plus" + that.ns, function(e) {
              if (e.which == keys.PLUS) {
                // if autoFormat is enabled, this key event will have already have been handled by another keypress listener (hence we need to add the "+"). if disabled, it will be handled after this by a keyup listener (hence no need to add the "+").
                var newVal = that.options.autoFormat ? "+" : "";
                that.telInput.val(newVal);
              }
            });
            // after tabbing in, make sure the cursor is at the end we must use setTimeout to get outside of the focus handler as it seems the selection happens after that
            setTimeout(function() {
              var input = that.telInput[0];
              if (that.isGoodBrowser) {
                var len = that.telInput.val().length;
                input.setSelectionRange(len, len);
              }
            });
          }
        }
      });
      this.telInput.on("blur" + this.ns, function() {
        if (that.options.autoHideDialCode) {
          // on blur: if just a dial code then remove it
          var value = that.telInput.val(), startsPlus = value.substr(0, 1) == "+";
          if (startsPlus) {
            var numeric = that._getNumeric(value);
            // if just a plus, or if just a dial code
            if (!numeric || that.selectedCountryData.dialCode == numeric) {
              that.telInput.val("");
            }
          }
          // remove the keypress listener we added on focus
          that.telInput.off("keypress.plus" + that.ns);
        }
        // manually trigger change event if value has changed
        if (that.options.autoFormat && that.telInput.val() != that.telInput.data("focusVal")) {
          that.telInput.trigger("change");
        }
      });
    },
    // extract the numeric digits from the given string
    _getNumeric: function(s) {
      return s.replace(/\D/g, "");
    },
    // show the dropdown
    _showDropdown: function() {
      this._setDropdownPosition();
      // update highlighting and scroll to active list item
      var activeListItem = this.countryList.children(".active");
      this._highlightListItem(activeListItem);
      // show it
      this.countryList.removeClass("hide");
      this._scrollTo(activeListItem);
      // bind all the dropdown-related listeners: mouseover, click, click-off, keydown
      this._bindDropdownListeners();
      // update the arrow
      this.selectedFlagInner.children(".arrow").addClass("up");
    },
    // decide where to position dropdown (depends on position within viewport, and scroll)
    _setDropdownPosition: function() {
      var inputTop = this.telInput.offset().top, windowTop = $(window).scrollTop(), // dropdownFitsBelow = (dropdownBottom < windowBottom)
        dropdownFitsBelow = inputTop + this.telInput.outerHeight() + this.dropdownHeight < windowTop + $(window).height(), dropdownFitsAbove = inputTop - this.dropdownHeight > windowTop;
      // dropdownHeight - 1 for border
      var cssTop = !dropdownFitsBelow && dropdownFitsAbove ? "-" + (this.dropdownHeight - 1) + "px" : "";
      this.countryList.css("top", cssTop);
    },
    // we only bind dropdown listeners when the dropdown is open
    _bindDropdownListeners: function() {
      var that = this;
      // when mouse over a list item, just highlight that one
      // we add the class "highlight", so if they hit "enter" we know which one to select
      this.countryList.on("mouseover" + this.ns, ".country", function(e) {
        that._highlightListItem($(this));
      });
      // listen for country selection
      this.countryList.on("click" + this.ns, ".country", function(e) {
        that._selectListItem($(this));
      });
      // click off to close
      // (except when this initial opening click is bubbling up)
      // we cannot just stopPropagation as it may be needed to close another instance
      var isOpening = true;
      $("html").on("click" + this.ns, function(e) {
        if (!isOpening) {
          that._closeDropdown();
        }
        isOpening = false;
      });
      // listen for up/down scrolling, enter to select, or letters to jump to country name.
      // use keydown as keypress doesn't fire for non-char keys and we want to catch if they
      // just hit down and hold it to scroll down (no keyup event).
      // listen on the document because that's where key events are triggered if no input has focus
      var query = "", queryTimer = null;
      $(document).on("keydown" + this.ns, function(e) {
        // prevent down key from scrolling the whole page,
        // and enter key from submitting a form etc
        e.preventDefault();
        if (e.which == keys.UP || e.which == keys.DOWN) {
          // up and down to navigate
          that._handleUpDownKey(e.which);
        } else if (e.which == keys.ENTER) {
          // enter to select
          that._handleEnterKey();
        } else if (e.which == keys.ESC) {
          // esc to close
          that._closeDropdown();
        } else if (e.which >= keys.A && e.which <= keys.Z || e.which == keys.SPACE) {
          // upper case letters (note: keyup/keydown only return upper case letters)
          // jump to countries that start with the query string
          if (queryTimer) {
            clearTimeout(queryTimer);
          }
          query += String.fromCharCode(e.which);
          that._searchForCountry(query);
          // if the timer hits 1 second, reset the query
          queryTimer = setTimeout(function() {
            query = "";
          }, 1e3);
        }
      });
    },
    // highlight the next/prev item in the list (and ensure it is visible)
    _handleUpDownKey: function(key) {
      var current = this.countryList.children(".highlight").first();
      var next = key == keys.UP ? current.prev() : current.next();
      if (next.length) {
        // skip the divider
        if (next.hasClass("divider")) {
          next = key == keys.UP ? next.prev() : next.next();
        }
        this._highlightListItem(next);
        this._scrollTo(next);
      }
    },
    // select the currently highlighted item
    _handleEnterKey: function() {
      var currentCountry = this.countryList.children(".highlight").first();
      if (currentCountry.length) {
        this._selectListItem(currentCountry);
      }
    },
    // find the first list item whose name starts with the query string
    _searchForCountry: function(query) {
      for (var i = 0; i < this.countries.length; i++) {
        if (this._startsWith(this.countries[i].name, query)) {
          var listItem = this.countryList.children("[data-country-code=" + this.countries[i].iso2 + "]").not(".preferred");
          // update highlighting and scroll
          this._highlightListItem(listItem);
          this._scrollTo(listItem, true);
          break;
        }
      }
    },
    // check if (uppercase) string a starts with string b
    _startsWith: function(a, b) {
      return a.substr(0, b.length).toUpperCase() == b;
    },
    // update the input's value to the given val
    // if autoFormat=true, format it first according to the country-specific formatting rules
    _updateVal: function(val, addSuffix) {
      var formatted;
      if (this.options.autoFormat && window.intlTelInputUtils) {
        formatted = intlTelInputUtils.formatNumber(val, this.selectedCountryData.iso2, addSuffix);
        // ensure we dont go over maxlength. we must do this here to truncate any formatting suffix, and also handle paste events
        var max = this.telInput.attr("maxlength");
        if (max && formatted.length > max) {
          formatted = formatted.substr(0, max);
        }
      } else {
        // no autoFormat, so just insert the original value
        formatted = val;
      }
      this.telInput.val(formatted);
    },
    // check if need to select a new flag based on the given number
    _updateFlagFromNumber: function(number) {
      // if we're in nationalMode and we're on US/Canada, make sure the number starts with a +1 so _getDialCode will be able to extract the area code
      // update: if we dont yet have selectedCountryData, but we're here (trying to update the flag from the number), that means we're initialising the plugin with a number that already has a dial code, so fine to ignore this bit
      if (this.options.nationalMode && this.selectedCountryData && this.selectedCountryData.dialCode == "1" && number.substr(0, 1) != "+") {
        number = "+1" + number;
      }
      // try and extract valid dial code from input
      var dialCode = this._getDialCode(number);
      if (dialCode) {
        // check if one of the matching countries is already selected
        var countryCodes = this.countryCodes[this._getNumeric(dialCode)], alreadySelected = false;
        if (this.selectedCountryData) {
          for (var i = 0; i < countryCodes.length; i++) {
            if (countryCodes[i] == this.selectedCountryData.iso2) {
              alreadySelected = true;
            }
          }
        }
        // if a matching country is not already selected (or this is an unknown NANP area code): choose the first in the list
        if (!alreadySelected || this._isUnknownNanp(number, dialCode)) {
          // if using onlyCountries option, countryCodes[0] may be empty, so we must find the first non-empty index
          for (var j = 0; j < countryCodes.length; j++) {
            if (countryCodes[j]) {
              this._selectFlag(countryCodes[j]);
              break;
            }
          }
        }
      }
    },
    // check if the given number contains an unknown area code from the North American Numbering Plan i.e. the only dialCode that could be extracted was +1 but the actual number's length is >=4
    _isUnknownNanp: function(number, dialCode) {
      return dialCode == "+1" && this._getNumeric(number).length >= 4;
    },
    // remove highlighting from other list items and highlight the given item
    _highlightListItem: function(listItem) {
      this.countryListItems.removeClass("highlight");
      listItem.addClass("highlight");
    },
    // find the country data for the given country code
    // the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
    _getCountryData: function(countryCode, ignoreOnlyCountriesOption, allowFail) {
      var countryList = ignoreOnlyCountriesOption ? allCountries : this.countries;
      for (var i = 0; i < countryList.length; i++) {
        if (countryList[i].iso2 == countryCode) {
          return countryList[i];
        }
      }
      if (allowFail) {
        return null;
      } else {
        throw new Error("No country data for '" + countryCode + "'");
      }
    },
    // select the given flag, update the placeholder and the active list item
    _selectFlag: function(countryCode) {
      // do this first as it will throw an error and stop if countryCode is invalid
      this.selectedCountryData = this._getCountryData(countryCode, false, false);
      this.selectedFlagInner.attr("class", "flag " + countryCode);
      // update the selected country's title attribute
      var title = this.selectedCountryData.name + ": +" + this.selectedCountryData.dialCode;
      this.selectedFlagInner.parent().attr("title", title);
      // and the input's placeholder
      this._updatePlaceholder();
      // update the active list item
      var listItem = this.countryListItems.children(".flag." + countryCode).first().parent();
      this.countryListItems.removeClass("active");
      listItem.addClass("active");
    },
    // update the input placeholder to an example number from the currently selected country
    _updatePlaceholder: function() {
      if (window.intlTelInputUtils && !this.hadInitialPlaceholder) {
        var iso2 = this.selectedCountryData.iso2, numberType = this.options.numberType ? intlTelInputUtils.numberType[this.options.numberType] : intlTelInputUtils.numberType.FIXED_LINE, placeholder = intlTelInputUtils.getExampleNumber(iso2, this.options.nationalMode, numberType);
        this.telInput.attr("placeholder", placeholder);
      }
    },
    // called when the user selects a list item from the dropdown
    _selectListItem: function(listItem) {
      // update selected flag and active list item
      var countryCode = listItem.attr("data-country-code");
      this._selectFlag(countryCode);
      this._closeDropdown();
      this._updateDialCode(listItem.attr("data-dial-code"), true);
      // always fire the change event as even if nationalMode=true (and we haven't updated the input val), the system as a whole has still changed - see country-sync example. think of it as making a selection from a select element.
      this.telInput.trigger("change");
      // focus the input
      this.telInput.focus();
    },
    // close the dropdown and unbind any listeners
    _closeDropdown: function() {
      this.countryList.addClass("hide");
      // update the arrow
      this.selectedFlagInner.children(".arrow").removeClass("up");
      // unbind key events
      $(document).off(this.ns);
      // unbind click-off-to-close
      $("html").off(this.ns);
      // unbind hover and click listeners
      this.countryList.off(this.ns);
    },
    // check if an element is visible within it's container, else scroll until it is
    _scrollTo: function(element, middle) {
      var container = this.countryList, containerHeight = container.height(), containerTop = container.offset().top, containerBottom = containerTop + containerHeight, elementHeight = element.outerHeight(), elementTop = element.offset().top, elementBottom = elementTop + elementHeight, newScrollTop = elementTop - containerTop + container.scrollTop(), middleOffset = containerHeight / 2 - elementHeight / 2;
      if (elementTop < containerTop) {
        // scroll up
        if (middle) {
          newScrollTop -= middleOffset;
        }
        container.scrollTop(newScrollTop);
      } else if (elementBottom > containerBottom) {
        // scroll down
        if (middle) {
          newScrollTop += middleOffset;
        }
        var heightDifference = containerHeight - elementHeight;
        container.scrollTop(newScrollTop - heightDifference);
      }
    },
    // replace any existing dial code with the new one (if not in nationalMode)
    // also we need to know if we're focusing for a couple of reasons e.g. if so, we want to add any formatting suffix, also if the input is empty and we're not in nationalMode, then we want to insert the dial code
    _updateDialCode: function(newDialCode, focusing) {
      var inputVal = this.telInput.val(), newNumber;
      // save having to pass this every time
      newDialCode = "+" + newDialCode;
      if (this.options.nationalMode && inputVal.substr(0, 1) != "+") {
        // if nationalMode, we just want to re-format
        newNumber = inputVal;
      } else if (inputVal) {
        // if the previous number contained a valid dial code, replace it
        // (if more than just a plus character)
        var prevDialCode = this._getDialCode(inputVal);
        if (prevDialCode.length > 1) {
          newNumber = inputVal.replace(prevDialCode, newDialCode);
        } else {
          // if the previous number didn't contain a dial code, we should persist it
          var existingNumber = inputVal.substr(0, 1) != "+" ? $.trim(inputVal) : "";
          newNumber = newDialCode + existingNumber;
        }
      } else {
        newNumber = !this.options.autoHideDialCode || focusing ? newDialCode : "";
      }
      this._updateVal(newNumber, focusing);
    },
    // try and extract a valid international dial code from a full telephone number
    // Note: returns the raw string inc plus character and any whitespace/dots etc
    _getDialCode: function(number) {
      var dialCode = "";
      // only interested in international numbers (starting with a plus)
      if (number.charAt(0) == "+") {
        var numericChars = "";
        // iterate over chars
        for (var i = 0; i < number.length; i++) {
          var c = number.charAt(i);
          // if char is number
          if ($.isNumeric(c)) {
            numericChars += c;
            // if current numericChars make a valid dial code
            if (this.countryCodes[numericChars]) {
              // store the actual raw string (useful for matching later)
              dialCode = number.substr(0, i + 1);
            }
            // longest dial code is 4 chars
            if (numericChars.length == 4) {
              break;
            }
          }
        }
      }
      return dialCode;
    },
    /********************
     *  PUBLIC METHODS
     ********************/
    // remove plugin
    destroy: function() {
      // make sure the dropdown is closed (and unbind listeners)
      this._closeDropdown();
      // key events, and focus/blur events if autoHideDialCode=true
      this.telInput.off(this.ns);
      // click event to open dropdown
      this.selectedFlagInner.parent().off(this.ns);
      // label click hack
      this.telInput.closest("label").off(this.ns);
      // remove markup
      var container = this.telInput.parent();
      container.before(this.telInput).remove();
    },
    // format the number to E164
    getCleanNumber: function() {
      if (window.intlTelInputUtils) {
        return intlTelInputUtils.formatNumberE164(this.telInput.val(), this.selectedCountryData.iso2);
      }
      return "";
    },
    // get the type of the entered number e.g. landline/mobile
    getNumberType: function() {
      if (window.intlTelInputUtils) {
        return intlTelInputUtils.getNumberType(this.telInput.val(), this.selectedCountryData.iso2);
      }
      return -99;
    },
    // get the country data for the currently selected flag
    getSelectedCountryData: function() {
      // if this is undefined, the plugin will return it's instance instead, so in that case an empty object makes more sense
      return this.selectedCountryData || {};
    },
    // get the validation error
    getValidationError: function() {
      if (window.intlTelInputUtils) {
        return intlTelInputUtils.getValidationError(this.telInput.val(), this.selectedCountryData.iso2);
      }
      return -99;
    },
    // validate the input val - assumes the global function isValidNumber (from utilsScript)
    isValidNumber: function() {
      var val = $.trim(this.telInput.val()), countryCode = this.options.nationalMode ? this.selectedCountryData.iso2 : "", // libphonenumber allows alpha chars, but in order to allow that, we'd need a method to retrieve the processed number, with letters replaced with numbers
        containsAlpha = /[a-zA-Z]/.test(val);
      if (!containsAlpha && window.intlTelInputUtils) {
        return intlTelInputUtils.isValidNumber(val, countryCode);
      }
      return false;
    },
    // load the utils script
    loadUtils: function(path) {
      var utilsScript = path || this.options.utilsScript;
      if (!$.fn[pluginName].loadedUtilsScript && utilsScript) {
        // don't do this twice! (dont just check if the global intlTelInputUtils exists as if init plugin multiple times in quick succession, it may not have finished loading yet)
        $.fn[pluginName].loadedUtilsScript = true;
        // dont use $.getScript as it prevents caching
        $.ajax({
          url: utilsScript,
          success: function() {
            // tell all instances the utils are ready
            $(".intl-tel-input input").intlTelInput("utilsLoaded");
          },
          dataType: "script",
          cache: true
        });
      }
    },
    // update the selected flag, and update the input val accordingly
    selectCountry: function(countryCode) {
      // check if already selected
      if (!this.selectedFlagInner.hasClass(countryCode)) {
        this._selectFlag(countryCode);
        this._updateDialCode(this.selectedCountryData.dialCode, false);
      }
    },
    // set the input value and update the flag
    setNumber: function(number, addSuffix) {
      // ensure starts with plus
      if (!this.options.nationalMode && number.substr(0, 1) != "+") {
        number = "+" + number;
      }
      // we must update the flag first, which updates this.selectedCountryData, which is used later for formatting the number before displaying it
      this._updateFlagFromNumber(number);
      this._updateVal(number, addSuffix);
    },
    // this is called when the utils are ready
    utilsLoaded: function() {
      // if autoFormat is enabled and there's an initial value in the input, then format it
      if (this.options.autoFormat && this.telInput.val()) {
        this._updateVal(this.telInput.val());
      }
      this._updatePlaceholder();
    }
  };
  // adapted to allow public functions
  // using https://github.com/jquery-boilerplate/jquery-boilerplate/wiki/Extending-jQuery-Boilerplate
  $.fn[pluginName] = function(options) {
    var args = arguments;
    // Is the first parameter an object (options), or was omitted,
    // instantiate a new instance of the plugin.
    if (options === undefined || typeof options === "object") {
      return this.each(function() {
        if (!$.data(this, "plugin_" + pluginName)) {
          $.data(this, "plugin_" + pluginName, new Plugin(this, options));
        }
      });
    } else if (typeof options === "string" && options[0] !== "_" && options !== "init") {
      // If the first parameter is a string and it doesn't start
      // with an underscore or "contains" the `init`-function,
      // treat this as a call to a public method.
      // Cache the method call to make it possible to return a value
      var returns;
      this.each(function() {
        var instance = $.data(this, "plugin_" + pluginName);
        // Tests that there's already a plugin-instance
        // and checks that the requested public method exists
        if (instance instanceof Plugin && typeof instance[options] === "function") {
          // Call the method of our plugin instance,
          // and pass it the supplied arguments.
          returns = instance[options].apply(instance, Array.prototype.slice.call(args, 1));
        }
        // Allow instances to be destroyed via the 'destroy' method
        if (options === "destroy") {
          $.data(this, "plugin_" + pluginName, null);
        }
      });
      // If the earlier cached method gives a value back return the value,
      // otherwise return this to preserve chainability.
      return returns !== undefined ? returns : this;
    }
  };
  /********************
   *  STATIC METHODS
   ********************/
  // get the country data object
  $.fn[pluginName].getCountryData = function() {
    return allCountries;
  };
  // set the country data object
  $.fn[pluginName].setCountryData = function(obj) {
    allCountries = obj;
  };
  // Tell JSHint to ignore this warning: "character may get silently deleted by one or more browsers"
  // jshint -W100
  // Array of country objects for the flag dropdown.
  // Each contains a name, country code (ISO 3166-1 alpha-2) and dial code.
  // Originally from https://github.com/mledoze/countries
  // then modified using the following JavaScript (NOW OUT OF DATE):
  /*
var result = [];
_.each(countries, function(c) {
// ignore countries without a dial code
if (c.callingCode[0].length) {
  result.push({
    // var locals contains country names with localised versions in brackets
    n: _.findWhere(locals, {
      countryCode: c.cca2
    }).name,
    i: c.cca2.toLowerCase(),
    d: c.callingCode[0]
  });
}
});
JSON.stringify(result);
*/
  // then with a couple of manual re-arrangements to be alphabetical
  // then changed Kazakhstan from +76 to +7
  // and Vatican City from +379 to +39 (see issue 50)
  // and Caribean Netherlands from +5997 to +599
  // and Curacao from +5999 to +599
  // Removed: Г…land Islands, Christmas Island, Cocos Islands, Guernsey, Isle of Man, Jersey, Kosovo, Mayotte, Pitcairn Islands, South Georgia, Svalbard, Western Sahara
  // Update: converted objects to arrays to save bytes!
  // Update: added "priority" for countries with the same dialCode as others
  // Update: added array of area codes for countries with the same dialCode as others
  // So each country array has the following information:
  // [
  //    Country name,
  //    iso2 code,
  //    International dial code,
  //    Order (if >1 country with same dial code),
  //    Area codes (if >1 country with same dial code)
  // ]
  var allCountries = [ ["Afghanistan (‫افغانستان‬‎)", "af", "93"], ["Albania (Shqipëri)", "al", "355"], ["Algeria (‫الجزائر‬‎)", "dz", "213"], ["American Samoa", "as", "1", 5, ["684"]], ["Andorra", "ad", "376"], ["Angola", "ao", "244"], ["Anguilla", "ai", "1", 6, ["264"]], ["Antigua and Barbuda", "ag", "1", 7, ["268"]], ["Argentina", "ar", "54"], ["Armenia (Հայաստան)", "am", "374"], ["Aruba", "aw", "297"], ["Ascension Island", "ac", "247"], ["Australia", "au", "61", 0], ["Austria (Österreich)", "at", "43"], ["Azerbaijan (Azərbaycan)", "az", "994"], ["Bahamas", "bs", "1", 8, ["242"]], ["Bahrain (‫البحرين‬‎)", "bh", "973"], ["Bangladesh (বাংলাদেশ)", "bd", "880"], ["Barbados", "bb", "1", 9, ["246"]], ["Belarus (Беларусь)", "by", "375"], ["Belgium (België)", "be", "32"], ["Belize", "bz", "501"], ["Benin (Bénin)", "bj", "229"], ["Bermuda", "bm", "1", 10, ["441"]], ["Bhutan (འབྲུག)", "bt", "975"], ["Bolivia", "bo", "591"], ["Bosnia and Herzegovina (Босна и Херцеговина)", "ba", "387"], ["Botswana", "bw", "267"], ["Brazil (Brasil)", "br", "55"], ["British Indian Ocean Territory", "io", "246"], ["British Virgin Islands", "vg", "1", 11, ["284"]], ["Brunei", "bn", "673"], ["Bulgaria (България)", "bg", "359"], ["Burkina Faso", "bf", "226"], ["Burundi (Uburundi)", "bi", "257"], ["Cambodia (កម្ពុជា)", "kh", "855"], ["Cameroon (Cameroun)", "cm", "237"], ["Canada", "ca", "1", 1, ["204", "226", "236", "249", "250", "263", "289", "306", "343", "354", "365", "367", "368", "382", "387", "403", "416", "418", "428", "431", "437", "438", "450", "584", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "902", "905"]], ["Cape Verde (Kabu Verdi)", "cv", "238"], ["Caribbean Netherlands", "bq", "599", 1, ["3", "4", "7"]], ["Cayman Islands", "ky", "1", 12, ["345"]], ["Central African Republic (République centrafricaine)", "cf", "236"], ["Chad (Tchad)", "td", "235"], ["Chile", "cl", "56"], ["China (中国)", "cn", "86"], ["Christmas Island", "cx", "61", 2, ["89164"]], ["Cocos (Keeling) Islands", "cc", "61", 1, ["89162"]], ["Colombia", "co", "57"], ["Comoros (‫جزر القمر‬‎)", "km", "269"], ["Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)", "cd", "243"], ["Congo (Republic) (Congo-Brazzaville)", "cg", "242"], ["Cook Islands", "ck", "682"], ["Costa Rica", "cr", "506"], ["Côte d’Ivoire", "ci", "225"], ["Croatia (Hrvatska)", "hr", "385"], ["Cuba", "cu", "53"], ["Curaçao", "cw", "599", 0], ["Cyprus (Κύπρος)", "cy", "357"], ["Czech Republic (Česká republika)", "cz", "420"], ["Denmark (Danmark)", "dk", "45"], ["Djibouti", "dj", "253"], ["Dominica", "dm", "1", 13, ["767"]], ["Dominican Republic (República Dominicana)", "do", "1", 2, ["809", "829", "849"]], ["Ecuador", "ec", "593"], ["Egypt (‫مصر‬‎)", "eg", "20"], ["El Salvador", "sv", "503"], ["Equatorial Guinea (Guinea Ecuatorial)", "gq", "240"], ["Eritrea", "er", "291"], ["Estonia (Eesti)", "ee", "372"], ["Eswatini", "sz", "268"], ["Ethiopia", "et", "251"], ["Falkland Islands (Islas Malvinas)", "fk", "500"], ["Faroe Islands (Føroyar)", "fo", "298"], ["Fiji", "fj", "679"], ["Finland (Suomi)", "fi", "358", 0], ["France", "fr", "33"], ["French Guiana (Guyane française)", "gf", "594"], ["French Polynesia (Polynésie française)", "pf", "689"], ["Gabon", "ga", "241"], ["Gambia", "gm", "220"], ["Georgia (საქართველო)", "ge", "995"], ["Germany (Deutschland)", "de", "49"], ["Ghana (Gaana)", "gh", "233"], ["Gibraltar", "gi", "350"], ["Greece (Ελλάδα)", "gr", "30"], ["Greenland (Kalaallit Nunaat)", "gl", "299"], ["Grenada", "gd", "1", 14, ["473"]], ["Guadeloupe", "gp", "590", 0], ["Guam", "gu", "1", 15, ["671"]], ["Guatemala", "gt", "502"], ["Guernsey", "gg", "44", 1, ["1481", "7781", "7839", "7911"]], ["Guinea (Guinée)", "gn", "224"], ["Guinea-Bissau (Guiné Bissau)", "gw", "245"], ["Guyana", "gy", "592"], ["Haiti", "ht", "509"], ["Honduras", "hn", "504"], ["Hong Kong (香港)", "hk", "852"], ["Hungary (Magyarország)", "hu", "36"], ["Iceland (Ísland)", "is", "354"], ["India (भारत)", "in", "91"], ["Indonesia", "id", "62"], ["Iran (‫ایران‬‎)", "ir", "98"], ["Iraq (‫العراق‬‎)", "iq", "964"], ["Ireland", "ie", "353"], ["Isle of Man", "im", "44", 2, ["1624", "74576", "7524", "7924", "7624"]], ["Israel (‫ישראל‬‎)", "il", "972"], ["Italy (Italia)", "it", "39", 0], ["Jamaica", "jm", "1", 4, ["876", "658"]], ["Japan (日本)", "jp", "81"], ["Jersey", "je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"]], ["Jordan (‫الأردن‬‎)", "jo", "962"], ["Kazakhstan (Казахстан)", "kz", "7", 1, ["33", "7"]], ["Kenya", "ke", "254"], ["Kiribati", "ki", "686"], ["Kosovo", "xk", "383"], ["Kuwait (‫الكويت‬‎)", "kw", "965"], ["Kyrgyzstan (Кыргызстан)", "kg", "996"], ["Laos (ລາວ)", "la", "856"], ["Latvia (Latvija)", "lv", "371"], ["Lebanon (‫لبنان‬‎)", "lb", "961"], ["Lesotho", "ls", "266"], ["Liberia", "lr", "231"], ["Libya (‫ليبيا‬‎)", "ly", "218"], ["Liechtenstein", "li", "423"], ["Lithuania (Lietuva)", "lt", "370"], ["Luxembourg", "lu", "352"], ["Macau (澳門)", "mo", "853"], ["Madagascar (Madagasikara)", "mg", "261"], ["Malawi", "mw", "265"], ["Malaysia", "my", "60"], ["Maldives", "mv", "960"], ["Mali", "ml", "223"], ["Malta", "mt", "356"], ["Marshall Islands", "mh", "692"], ["Martinique", "mq", "596"], ["Mauritania (‫موريتانيا‬‎)", "mr", "222"], ["Mauritius (Moris)", "mu", "230"], ["Mayotte", "yt", "262", 1, ["269", "639"]], ["Mexico (México)", "mx", "52"], ["Micronesia", "fm", "691"], ["Moldova (Republica Moldova)", "md", "373"], ["Monaco", "mc", "377"], ["Mongolia (Монгол)", "mn", "976"], ["Montenegro (Crna Gora)", "me", "382"], ["Montserrat", "ms", "1", 16, ["664"]], ["Morocco (‫المغرب‬‎)", "ma", "212", 0], ["Mozambique (Moçambique)", "mz", "258"], ["Myanmar (Burma) (မြန်မာ)", "mm", "95"], ["Namibia (Namibië)", "na", "264"], ["Nauru", "nr", "674"], ["Nepal (नेपाल)", "np", "977"], ["Netherlands (Nederland)", "nl", "31"], ["New Caledonia (Nouvelle-Calédonie)", "nc", "687"], ["New Zealand", "nz", "64"], ["Nicaragua", "ni", "505"], ["Niger (Nijar)", "ne", "227"], ["Nigeria", "ng", "234"], ["Niue", "nu", "683"], ["Norfolk Island", "nf", "672"], ["North Korea (조선 민주주의 인민 공화국)", "kp", "850"], ["North Macedonia (Северна Македонија)", "mk", "389"], ["Northern Mariana Islands", "mp", "1", 17, ["670"]], ["Norway (Norge)", "no", "47", 0], ["Oman (‫عُمان‬‎)", "om", "968"], ["Pakistan (‫پاکستان‬‎)", "pk", "92"], ["Palau", "pw", "680"], ["Palestine (‫فلسطين‬‎)", "ps", "970"], ["Panama (Panamá)", "pa", "507"], ["Papua New Guinea", "pg", "675"], ["Paraguay", "py", "595"], ["Peru (Perú)", "pe", "51"], ["Philippines", "ph", "63"], ["Poland (Polska)", "pl", "48"], ["Portugal", "pt", "351"], ["Puerto Rico", "pr", "1", 3, ["787", "939"]], ["Qatar (‫قطر‬‎)", "qa", "974"], ["Réunion (La Réunion)", "re", "262", 0], ["Romania (România)", "ro", "40"], ["Russia (Россия)", "ru", "7", 0], ["Rwanda", "rw", "250"], ["Saint Barthélemy", "bl", "590", 1], ["Saint Helena", "sh", "290"], ["Saint Kitts and Nevis", "kn", "1", 18, ["869"]], ["Saint Lucia", "lc", "1", 19, ["758"]], ["Saint Martin (Saint-Martin (partie française))", "mf", "590", 2], ["Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)", "pm", "508"], ["Saint Vincent and the Grenadines", "vc", "1", 20, ["784"]], ["Samoa", "ws", "685"], ["San Marino", "sm", "378"], ["São Tomé and Príncipe (São Tomé e Príncipe)", "st", "239"], ["Saudi Arabia (‫المملكة العربية السعودية‬‎)", "sa", "966"], ["Senegal (Sénégal)", "sn", "221"], ["Serbia (Србија)", "rs", "381"], ["Seychelles", "sc", "248"], ["Sierra Leone", "sl", "232"], ["Singapore", "sg", "65"], ["Sint Maarten", "sx", "1", 21, ["721"]], ["Slovakia (Slovensko)", "sk", "421"], ["Slovenia (Slovenija)", "si", "386"], ["Solomon Islands", "sb", "677"], ["Somalia (Soomaaliya)", "so", "252"], ["South Africa", "za", "27"], ["South Korea (대한민국)", "kr", "82"], ["South Sudan (‫جنوب السودان‬‎)", "ss", "211"], ["Spain (España)", "es", "34"], ["Sri Lanka (ශ්‍රී ලංකාව)", "lk", "94"], ["Sudan (‫السودان‬‎)", "sd", "249"], ["Suriname", "sr", "597"], ["Svalbard and Jan Mayen", "sj", "47", 1, ["79"]], ["Sweden (Sverige)", "se", "46"], ["Switzerland (Schweiz)", "ch", "41"], ["Syria (‫سوريا‬‎)", "sy", "963"], ["Taiwan (台灣)", "tw", "886"], ["Tajikistan", "tj", "992"], ["Tanzania", "tz", "255"], ["Thailand (ไทย)", "th", "66"], ["Timor-Leste", "tl", "670"], ["Togo", "tg", "228"], ["Tokelau", "tk", "690"], ["Tonga", "to", "676"], ["Trinidad and Tobago", "tt", "1", 22, ["868"]], ["Tunisia (‫تونس‬‎)", "tn", "216"], ["Turkey (Türkiye)", "tr", "90"], ["Turkmenistan", "tm", "993"], ["Turks and Caicos Islands", "tc", "1", 23, ["649"]], ["Tuvalu", "tv", "688"], ["U.S. Virgin Islands", "vi", "1", 24, ["340"]], ["Uganda", "ug", "256"], ["Ukraine (Україна)", "ua", "380"], ["United Arab Emirates (‫الإمارات العربية المتحدة‬‎)", "ae", "971"], ["United Kingdom", "gb", "44", 0], ["United States", "us", "1", 0], ["Uruguay", "uy", "598"], ["Uzbekistan (Oʻzbekiston)", "uz", "998"], ["Vanuatu", "vu", "678"], ["Vatican City (Città del Vaticano)", "va", "39", 1, ["06698"]], ["Venezuela", "ve", "58"], ["Vietnam (Việt Nam)", "vn", "84"], ["Wallis and Futuna (Wallis-et-Futuna)", "wf", "681"], ["Western Sahara (‫الصحراء الغربية‬‎)", "eh", "212", 1, ["5288", "5289"]], ["Yemen (‫اليمن‬‎)", "ye", "967"], ["Zambia", "zm", "260"], ["Zimbabwe", "zw", "263"], ["Åland Islands", "ax", "358", 1, ["18"]] ];
  // loop over all of the countries above
  for (var i = 0; i < allCountries.length; i++) {
    var c = allCountries[i];
    allCountries[i] = {
      name: c[0],
      iso2: c[1],
      dialCode: c[2],
      priority: c[3] || 0,
      areaCodes: c[4] || null
    };
  }
});








// Start calendar
/*! jQuery UI - v1.12.1 - 2021-07-11
* http://jqueryui.com
* Includes: widget.js, position.js, data.js, disable-selection.js, focusable.js, form-reset-mixin.js, jquery-1-7.js, keycode.js, labels.js, scroll-parent.js, tabbable.js, unique-id.js, widgets/datepicker.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function( factory ) {
  if ( typeof define === "function" && define.amd ) {

    // AMD. Register as an anonymous module.
    define([ "jquery" ], factory );
  } else {

    // Browser globals
    factory( jQuery );
  }
}(function( $ ) {

  $.ui = $.ui || {};

  var version = $.ui.version = "1.12.1";


  /*!
 * jQuery UI Widget 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Widget
//>>group: Core
//>>description: Provides a factory for creating stateful widgets with a common API.
//>>docs: http://api.jqueryui.com/jQuery.widget/
//>>demos: http://jqueryui.com/widget/



  var widgetUuid = 0;
  var widgetSlice = Array.prototype.slice;

  $.cleanData = ( function( orig ) {
    return function( elems ) {
      var events, elem, i;
      for ( i = 0; ( elem = elems[ i ] ) != null; i++ ) {
        try {

          // Only trigger remove when necessary to save time
          events = $._data( elem, "events" );
          if ( events && events.remove ) {
            $( elem ).triggerHandler( "remove" );
          }

          // Http://bugs.jquery.com/ticket/8235
        } catch ( e ) {}
      }
      orig( elems );
    };
  } )( $.cleanData );

  $.widget = function( name, base, prototype ) {
    var existingConstructor, constructor, basePrototype;

    // ProxiedPrototype allows the provided prototype to remain unmodified
    // so that it can be used as a mixin for multiple widgets (#8876)
    var proxiedPrototype = {};

    var namespace = name.split( "." )[ 0 ];
    name = name.split( "." )[ 1 ];
    var fullName = namespace + "-" + name;

    if ( !prototype ) {
      prototype = base;
      base = $.Widget;
    }

    if ( $.isArray( prototype ) ) {
      prototype = $.extend.apply( null, [ {} ].concat( prototype ) );
    }

    // Create selector for plugin
    $.expr[ ":" ][ fullName.toLowerCase() ] = function( elem ) {
      return !!$.data( elem, fullName );
    };

    $[ namespace ] = $[ namespace ] || {};
    existingConstructor = $[ namespace ][ name ];
    constructor = $[ namespace ][ name ] = function( options, element ) {

      // Allow instantiation without "new" keyword
      if ( !this._createWidget ) {
        return new constructor( options, element );
      }

      // Allow instantiation without initializing for simple inheritance
      // must use "new" keyword (the code above always passes args)
      if ( arguments.length ) {
        this._createWidget( options, element );
      }
    };

    // Extend with the existing constructor to carry over any static properties
    $.extend( constructor, existingConstructor, {
      version: prototype.version,

      // Copy the object used to create the prototype in case we need to
      // redefine the widget later
      _proto: $.extend( {}, prototype ),

      // Track widgets that inherit from this widget in case this widget is
      // redefined after a widget inherits from it
      _childConstructors: []
    } );

    basePrototype = new base();

    // We need to make the options hash a property directly on the new instance
    // otherwise we'll modify the options hash on the prototype that we're
    // inheriting from
    basePrototype.options = $.widget.extend( {}, basePrototype.options );
    $.each( prototype, function( prop, value ) {
      if ( !$.isFunction( value ) ) {
        proxiedPrototype[ prop ] = value;
        return;
      }
      proxiedPrototype[ prop ] = ( function() {
        function _super() {
          return base.prototype[ prop ].apply( this, arguments );
        }

        function _superApply( args ) {
          return base.prototype[ prop ].apply( this, args );
        }

        return function() {
          var __super = this._super;
          var __superApply = this._superApply;
          var returnValue;

          this._super = _super;
          this._superApply = _superApply;

          returnValue = value.apply( this, arguments );

          this._super = __super;
          this._superApply = __superApply;

          return returnValue;
        };
      } )();
    } );
    constructor.prototype = $.widget.extend( basePrototype, {

      // TODO: remove support for widgetEventPrefix
      // always use the name + a colon as the prefix, e.g., draggable:start
      // don't prefix for widgets that aren't DOM-based
      widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
    }, proxiedPrototype, {
      constructor: constructor,
      namespace: namespace,
      widgetName: name,
      widgetFullName: fullName
    } );

    // If this widget is being redefined then we need to find all widgets that
    // are inheriting from it and redefine all of them so that they inherit from
    // the new version of this widget. We're essentially trying to replace one
    // level in the prototype chain.
    if ( existingConstructor ) {
      $.each( existingConstructor._childConstructors, function( i, child ) {
        var childPrototype = child.prototype;

        // Redefine the child widget using the same prototype that was
        // originally used, but inherit from the new version of the base
        $.widget( childPrototype.namespace + "." + childPrototype.widgetName, constructor,
          child._proto );
      } );

      // Remove the list of existing child constructors from the old constructor
      // so the old child constructors can be garbage collected
      delete existingConstructor._childConstructors;
    } else {
      base._childConstructors.push( constructor );
    }

    $.widget.bridge( name, constructor );

    return constructor;
  };

  $.widget.extend = function( target ) {
    var input = widgetSlice.call( arguments, 1 );
    var inputIndex = 0;
    var inputLength = input.length;
    var key;
    var value;

    for ( ; inputIndex < inputLength; inputIndex++ ) {
      for ( key in input[ inputIndex ] ) {
        value = input[ inputIndex ][ key ];
        if ( input[ inputIndex ].hasOwnProperty( key ) && value !== undefined ) {

          // Clone objects
          if ( $.isPlainObject( value ) ) {
            target[ key ] = $.isPlainObject( target[ key ] ) ?
              $.widget.extend( {}, target[ key ], value ) :

              // Don't extend strings, arrays, etc. with objects
              $.widget.extend( {}, value );

            // Copy everything else by reference
          } else {
            target[ key ] = value;
          }
        }
      }
    }
    return target;
  };

  $.widget.bridge = function( name, object ) {
    var fullName = object.prototype.widgetFullName || name;
    $.fn[ name ] = function( options ) {
      var isMethodCall = typeof options === "string";
      var args = widgetSlice.call( arguments, 1 );
      var returnValue = this;

      if ( isMethodCall ) {

        // If this is an empty collection, we need to have the instance method
        // return undefined instead of the jQuery instance
        if ( !this.length && options === "instance" ) {
          returnValue = undefined;
        } else {
          this.each( function() {
            var methodValue;
            var instance = $.data( this, fullName );

            if ( options === "instance" ) {
              returnValue = instance;
              return false;
            }

            if ( !instance ) {
              return $.error( "cannot call methods on " + name +
                " prior to initialization; " +
                "attempted to call method '" + options + "'" );
            }

            if ( !$.isFunction( instance[ options ] ) || options.charAt( 0 ) === "_" ) {
              return $.error( "no such method '" + options + "' for " + name +
                " widget instance" );
            }

            methodValue = instance[ options ].apply( instance, args );

            if ( methodValue !== instance && methodValue !== undefined ) {
              returnValue = methodValue && methodValue.jquery ?
                returnValue.pushStack( methodValue.get() ) :
                methodValue;
              return false;
            }
          } );
        }
      } else {

        // Allow multiple hashes to be passed on init
        if ( args.length ) {
          options = $.widget.extend.apply( null, [ options ].concat( args ) );
        }

        this.each( function() {
          var instance = $.data( this, fullName );
          if ( instance ) {
            instance.option( options || {} );
            if ( instance._init ) {
              instance._init();
            }
          } else {
            $.data( this, fullName, new object( options, this ) );
          }
        } );
      }

      return returnValue;
    };
  };

  $.Widget = function( /* options, element */ ) {};
  $.Widget._childConstructors = [];

  $.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",

    options: {
      classes: {},
      disabled: false,

      // Callbacks
      create: null
    },

    _createWidget: function( options, element ) {
      element = $( element || this.defaultElement || this )[ 0 ];
      this.element = $( element );
      this.uuid = widgetUuid++;
      this.eventNamespace = "." + this.widgetName + this.uuid;

      this.bindings = $();
      this.hoverable = $();
      this.focusable = $();
      this.classesElementLookup = {};

      if ( element !== this ) {
        $.data( element, this.widgetFullName, this );
        this._on( true, this.element, {
          remove: function( event ) {
            if ( event.target === element ) {
              this.destroy();
            }
          }
        } );
        this.document = $( element.style ?

          // Element within the document
          element.ownerDocument :

          // Element is window or document
          element.document || element );
        this.window = $( this.document[ 0 ].defaultView || this.document[ 0 ].parentWindow );
      }

      this.options = $.widget.extend( {},
        this.options,
        this._getCreateOptions(),
        options );

      this._create();

      if ( this.options.disabled ) {
        this._setOptionDisabled( this.options.disabled );
      }

      this._trigger( "create", null, this._getCreateEventData() );
      this._init();
    },

    _getCreateOptions: function() {
      return {};
    },

    _getCreateEventData: $.noop,

    _create: $.noop,

    _init: $.noop,

    destroy: function() {
      var that = this;

      this._destroy();
      $.each( this.classesElementLookup, function( key, value ) {
        that._removeClass( value, key );
      } );

      // We can probably remove the unbind calls in 2.0
      // all event bindings should go through this._on()
      this.element
        .off( this.eventNamespace )
        .removeData( this.widgetFullName );
      this.widget()
        .off( this.eventNamespace )
        .removeAttr( "aria-disabled" );

      // Clean up events and states
      this.bindings.off( this.eventNamespace );
    },

    _destroy: $.noop,

    widget: function() {
      return this.element;
    },

    option: function( key, value ) {
      var options = key;
      var parts;
      var curOption;
      var i;

      if ( arguments.length === 0 ) {

        // Don't return a reference to the internal hash
        return $.widget.extend( {}, this.options );
      }

      if ( typeof key === "string" ) {

        // Handle nested keys, e.g., "foo.bar" => { foo: { bar: ___ } }
        options = {};
        parts = key.split( "." );
        key = parts.shift();
        if ( parts.length ) {
          curOption = options[ key ] = $.widget.extend( {}, this.options[ key ] );
          for ( i = 0; i < parts.length - 1; i++ ) {
            curOption[ parts[ i ] ] = curOption[ parts[ i ] ] || {};
            curOption = curOption[ parts[ i ] ];
          }
          key = parts.pop();
          if ( arguments.length === 1 ) {
            return curOption[ key ] === undefined ? null : curOption[ key ];
          }
          curOption[ key ] = value;
        } else {
          if ( arguments.length === 1 ) {
            return this.options[ key ] === undefined ? null : this.options[ key ];
          }
          options[ key ] = value;
        }
      }

      this._setOptions( options );

      return this;
    },

    _setOptions: function( options ) {
      var key;

      for ( key in options ) {
        this._setOption( key, options[ key ] );
      }

      return this;
    },

    _setOption: function( key, value ) {
      if ( key === "classes" ) {
        this._setOptionClasses( value );
      }

      this.options[ key ] = value;

      if ( key === "disabled" ) {
        this._setOptionDisabled( value );
      }

      return this;
    },

    _setOptionClasses: function( value ) {
      var classKey, elements, currentElements;

      for ( classKey in value ) {
        currentElements = this.classesElementLookup[ classKey ];
        if ( value[ classKey ] === this.options.classes[ classKey ] ||
          !currentElements ||
          !currentElements.length ) {
          continue;
        }

        // We are doing this to create a new jQuery object because the _removeClass() call
        // on the next line is going to destroy the reference to the current elements being
        // tracked. We need to save a copy of this collection so that we can add the new classes
        // below.
        elements = $( currentElements.get() );
        this._removeClass( currentElements, classKey );

        // We don't use _addClass() here, because that uses this.options.classes
        // for generating the string of classes. We want to use the value passed in from
        // _setOption(), this is the new value of the classes option which was passed to
        // _setOption(). We pass this value directly to _classes().
        elements.addClass( this._classes( {
          element: elements,
          keys: classKey,
          classes: value,
          add: true
        } ) );
      }
    },

    _setOptionDisabled: function( value ) {
      this._toggleClass( this.widget(), this.widgetFullName + "-disabled", null, !!value );

      // If the widget is becoming disabled, then nothing is interactive
      if ( value ) {
        this._removeClass( this.hoverable, null, "ui-state-hover" );
        this._removeClass( this.focusable, null, "ui-state-focus" );
      }
    },

    enable: function() {
      return this._setOptions( { disabled: false } );
    },

    disable: function() {
      return this._setOptions( { disabled: true } );
    },

    _classes: function( options ) {
      var full = [];
      var that = this;

      options = $.extend( {
        element: this.element,
        classes: this.options.classes || {}
      }, options );

      function processClassString( classes, checkOption ) {
        var current, i;
        for ( i = 0; i < classes.length; i++ ) {
          current = that.classesElementLookup[ classes[ i ] ] || $();
          if ( options.add ) {
            current = $( $.unique( current.get().concat( options.element.get() ) ) );
          } else {
            current = $( current.not( options.element ).get() );
          }
          that.classesElementLookup[ classes[ i ] ] = current;
          full.push( classes[ i ] );
          if ( checkOption && options.classes[ classes[ i ] ] ) {
            full.push( options.classes[ classes[ i ] ] );
          }
        }
      }

      this._on( options.element, {
        "remove": "_untrackClassesElement"
      } );

      if ( options.keys ) {
        processClassString( options.keys.match( /\S+/g ) || [], true );
      }
      if ( options.extra ) {
        processClassString( options.extra.match( /\S+/g ) || [] );
      }

      return full.join( " " );
    },

    _untrackClassesElement: function( event ) {
      var that = this;
      $.each( that.classesElementLookup, function( key, value ) {
        if ( $.inArray( event.target, value ) !== -1 ) {
          that.classesElementLookup[ key ] = $( value.not( event.target ).get() );
        }
      } );
    },

    _removeClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, false );
    },

    _addClass: function( element, keys, extra ) {
      return this._toggleClass( element, keys, extra, true );
    },

    _toggleClass: function( element, keys, extra, add ) {
      add = ( typeof add === "boolean" ) ? add : extra;
      var shift = ( typeof element === "string" || element === null ),
        options = {
          extra: shift ? keys : extra,
          keys: shift ? element : keys,
          element: shift ? this.element : element,
          add: add
        };
      options.element.toggleClass( this._classes( options ), add );
      return this;
    },

    _on: function( suppressDisabledCheck, element, handlers ) {
      var delegateElement;
      var instance = this;

      // No suppressDisabledCheck flag, shuffle arguments
      if ( typeof suppressDisabledCheck !== "boolean" ) {
        handlers = element;
        element = suppressDisabledCheck;
        suppressDisabledCheck = false;
      }

      // No element argument, shuffle and use this.element
      if ( !handlers ) {
        handlers = element;
        element = this.element;
        delegateElement = this.widget();
      } else {
        element = delegateElement = $( element );
        this.bindings = this.bindings.add( element );
      }

      $.each( handlers, function( event, handler ) {
        function handlerProxy() {

          // Allow widgets to customize the disabled handling
          // - disabled as an array instead of boolean
          // - disabled class as method for disabling individual parts
          if ( !suppressDisabledCheck &&
            ( instance.options.disabled === true ||
              $( this ).hasClass( "ui-state-disabled" ) ) ) {
            return;
          }
          return ( typeof handler === "string" ? instance[ handler ] : handler )
            .apply( instance, arguments );
        }

        // Copy the guid so direct unbinding works
        if ( typeof handler !== "string" ) {
          handlerProxy.guid = handler.guid =
            handler.guid || handlerProxy.guid || $.guid++;
        }

        var match = event.match( /^([\w:-]*)\s*(.*)$/ );
        var eventName = match[ 1 ] + instance.eventNamespace;
        var selector = match[ 2 ];

        if ( selector ) {
          delegateElement.on( eventName, selector, handlerProxy );
        } else {
          element.on( eventName, handlerProxy );
        }
      } );
    },

    _off: function( element, eventName ) {
      eventName = ( eventName || "" ).split( " " ).join( this.eventNamespace + " " ) +
        this.eventNamespace;
      element.off( eventName ).off( eventName );

      // Clear the stack to avoid memory leaks (#10056)
      this.bindings = $( this.bindings.not( element ).get() );
      this.focusable = $( this.focusable.not( element ).get() );
      this.hoverable = $( this.hoverable.not( element ).get() );
    },

    _delay: function( handler, delay ) {
      function handlerProxy() {
        return ( typeof handler === "string" ? instance[ handler ] : handler )
          .apply( instance, arguments );
      }
      var instance = this;
      return setTimeout( handlerProxy, delay || 0 );
    },

    _hoverable: function( element ) {
      this.hoverable = this.hoverable.add( element );
      this._on( element, {
        mouseenter: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-hover" );
        },
        mouseleave: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-hover" );
        }
      } );
    },

    _focusable: function( element ) {
      this.focusable = this.focusable.add( element );
      this._on( element, {
        focusin: function( event ) {
          this._addClass( $( event.currentTarget ), null, "ui-state-focus" );
        },
        focusout: function( event ) {
          this._removeClass( $( event.currentTarget ), null, "ui-state-focus" );
        }
      } );
    },

    _trigger: function( type, event, data ) {
      var prop, orig;
      var callback = this.options[ type ];

      data = data || {};
      event = $.Event( event );
      event.type = ( type === this.widgetEventPrefix ?
        type :
        this.widgetEventPrefix + type ).toLowerCase();

      // The original event may come from any element
      // so we need to reset the target on the new event
      event.target = this.element[ 0 ];

      // Copy original event properties over to the new event
      orig = event.originalEvent;
      if ( orig ) {
        for ( prop in orig ) {
          if ( !( prop in event ) ) {
            event[ prop ] = orig[ prop ];
          }
        }
      }

      this.element.trigger( event, data );
      return !( $.isFunction( callback ) &&
        callback.apply( this.element[ 0 ], [ event ].concat( data ) ) === false ||
        event.isDefaultPrevented() );
    }
  };

  $.each( { show: "fadeIn", hide: "fadeOut" }, function( method, defaultEffect ) {
    $.Widget.prototype[ "_" + method ] = function( element, options, callback ) {
      if ( typeof options === "string" ) {
        options = { effect: options };
      }

      var hasOptions;
      var effectName = !options ?
        method :
        options === true || typeof options === "number" ?
          defaultEffect :
          options.effect || defaultEffect;

      options = options || {};
      if ( typeof options === "number" ) {
        options = { duration: options };
      }

      hasOptions = !$.isEmptyObject( options );
      options.complete = callback;

      if ( options.delay ) {
        element.delay( options.delay );
      }

      if ( hasOptions && $.effects && $.effects.effect[ effectName ] ) {
        element[ method ]( options );
      } else if ( effectName !== method && element[ effectName ] ) {
        element[ effectName ]( options.duration, options.easing, callback );
      } else {
        element.queue( function( next ) {
          $( this )[ method ]();
          if ( callback ) {
            callback.call( element[ 0 ] );
          }
          next();
        } );
      }
    };
  } );

  var widget = $.widget;


  /*!
 * jQuery UI Position 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/position/
 */

//>>label: Position
//>>group: Core
//>>description: Positions elements relative to other elements.
//>>docs: http://api.jqueryui.com/position/
//>>demos: http://jqueryui.com/position/


  ( function() {
    var cachedScrollbarWidth,
      max = Math.max,
      abs = Math.abs,
      rhorizontal = /left|center|right/,
      rvertical = /top|center|bottom/,
      roffset = /[\+\-]\d+(\.[\d]+)?%?/,
      rposition = /^\w+/,
      rpercent = /%$/,
      _position = $.fn.position;

    function getOffsets( offsets, width, height ) {
      return [
        parseFloat( offsets[ 0 ] ) * ( rpercent.test( offsets[ 0 ] ) ? width / 100 : 1 ),
        parseFloat( offsets[ 1 ] ) * ( rpercent.test( offsets[ 1 ] ) ? height / 100 : 1 )
      ];
    }

    function parseCss( element, property ) {
      return parseInt( $.css( element, property ), 10 ) || 0;
    }

    function getDimensions( elem ) {
      var raw = elem[ 0 ];
      if ( raw.nodeType === 9 ) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: { top: 0, left: 0 }
        };
      }
      if ( $.isWindow( raw ) ) {
        return {
          width: elem.width(),
          height: elem.height(),
          offset: { top: elem.scrollTop(), left: elem.scrollLeft() }
        };
      }
      if ( raw.preventDefault ) {
        return {
          width: 0,
          height: 0,
          offset: { top: raw.pageY, left: raw.pageX }
        };
      }
      return {
        width: elem.outerWidth(),
        height: elem.outerHeight(),
        offset: elem.offset()
      };
    }

    $.position = {
      scrollbarWidth: function() {
        if ( cachedScrollbarWidth !== undefined ) {
          return cachedScrollbarWidth;
        }
        var w1, w2,
          div = $( "<div " +
            "style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'>" +
            "<div style='height:100px;width:auto;'></div></div>" ),
          innerDiv = div.children()[ 0 ];

        $( "body" ).append( div );
        w1 = innerDiv.offsetWidth;
        div.css( "overflow", "scroll" );

        w2 = innerDiv.offsetWidth;

        if ( w1 === w2 ) {
          w2 = div[ 0 ].clientWidth;
        }

        div.remove();

        return ( cachedScrollbarWidth = w1 - w2 );
      },
      getScrollInfo: function( within ) {
        var overflowX = within.isWindow || within.isDocument ? "" :
            within.element.css( "overflow-x" ),
          overflowY = within.isWindow || within.isDocument ? "" :
            within.element.css( "overflow-y" ),
          hasOverflowX = overflowX === "scroll" ||
            ( overflowX === "auto" && within.width < within.element[ 0 ].scrollWidth ),
          hasOverflowY = overflowY === "scroll" ||
            ( overflowY === "auto" && within.height < within.element[ 0 ].scrollHeight );
        return {
          width: hasOverflowY ? $.position.scrollbarWidth() : 0,
          height: hasOverflowX ? $.position.scrollbarWidth() : 0
        };
      },
      getWithinInfo: function( element ) {
        var withinElement = $( element || window ),
          isWindow = $.isWindow( withinElement[ 0 ] ),
          isDocument = !!withinElement[ 0 ] && withinElement[ 0 ].nodeType === 9,
          hasOffset = !isWindow && !isDocument;
        return {
          element: withinElement,
          isWindow: isWindow,
          isDocument: isDocument,
          offset: hasOffset ? $( element ).offset() : { left: 0, top: 0 },
          scrollLeft: withinElement.scrollLeft(),
          scrollTop: withinElement.scrollTop(),
          width: withinElement.outerWidth(),
          height: withinElement.outerHeight()
        };
      }
    };

    $.fn.position = function( options ) {
      if ( !options || !options.of ) {
        return _position.apply( this, arguments );
      }

      // Make a copy, we don't want to modify arguments
      options = $.extend( {}, options );

      var atOffset, targetWidth, targetHeight, targetOffset, basePosition, dimensions,
        target = $( options.of ),
        within = $.position.getWithinInfo( options.within ),
        scrollInfo = $.position.getScrollInfo( within ),
        collision = ( options.collision || "flip" ).split( " " ),
        offsets = {};

      dimensions = getDimensions( target );
      if ( target[ 0 ].preventDefault ) {

        // Force left top to allow flipping
        options.at = "left top";
      }
      targetWidth = dimensions.width;
      targetHeight = dimensions.height;
      targetOffset = dimensions.offset;

      // Clone to reuse original targetOffset later
      basePosition = $.extend( {}, targetOffset );

      // Force my and at to have valid horizontal and vertical positions
      // if a value is missing or invalid, it will be converted to center
      $.each( [ "my", "at" ], function() {
        var pos = ( options[ this ] || "" ).split( " " ),
          horizontalOffset,
          verticalOffset;

        if ( pos.length === 1 ) {
          pos = rhorizontal.test( pos[ 0 ] ) ?
            pos.concat( [ "center" ] ) :
            rvertical.test( pos[ 0 ] ) ?
              [ "center" ].concat( pos ) :
              [ "center", "center" ];
        }
        pos[ 0 ] = rhorizontal.test( pos[ 0 ] ) ? pos[ 0 ] : "center";
        pos[ 1 ] = rvertical.test( pos[ 1 ] ) ? pos[ 1 ] : "center";

        // Calculate offsets
        horizontalOffset = roffset.exec( pos[ 0 ] );
        verticalOffset = roffset.exec( pos[ 1 ] );
        offsets[ this ] = [
          horizontalOffset ? horizontalOffset[ 0 ] : 0,
          verticalOffset ? verticalOffset[ 0 ] : 0
        ];

        // Reduce to just the positions without the offsets
        options[ this ] = [
          rposition.exec( pos[ 0 ] )[ 0 ],
          rposition.exec( pos[ 1 ] )[ 0 ]
        ];
      } );

      // Normalize collision option
      if ( collision.length === 1 ) {
        collision[ 1 ] = collision[ 0 ];
      }

      if ( options.at[ 0 ] === "right" ) {
        basePosition.left += targetWidth;
      } else if ( options.at[ 0 ] === "center" ) {
        basePosition.left += targetWidth / 2;
      }

      if ( options.at[ 1 ] === "bottom" ) {
        basePosition.top += targetHeight;
      } else if ( options.at[ 1 ] === "center" ) {
        basePosition.top += targetHeight / 2;
      }

      atOffset = getOffsets( offsets.at, targetWidth, targetHeight );
      basePosition.left += atOffset[ 0 ];
      basePosition.top += atOffset[ 1 ];

      return this.each( function() {
        var collisionPosition, using,
          elem = $( this ),
          elemWidth = elem.outerWidth(),
          elemHeight = elem.outerHeight(),
          marginLeft = parseCss( this, "marginLeft" ),
          marginTop = parseCss( this, "marginTop" ),
          collisionWidth = elemWidth + marginLeft + parseCss( this, "marginRight" ) +
            scrollInfo.width,
          collisionHeight = elemHeight + marginTop + parseCss( this, "marginBottom" ) +
            scrollInfo.height,
          position = $.extend( {}, basePosition ),
          myOffset = getOffsets( offsets.my, elem.outerWidth(), elem.outerHeight() );

        if ( options.my[ 0 ] === "right" ) {
          position.left -= elemWidth;
        } else if ( options.my[ 0 ] === "center" ) {
          position.left -= elemWidth / 2;
        }

        if ( options.my[ 1 ] === "bottom" ) {
          position.top -= elemHeight;
        } else if ( options.my[ 1 ] === "center" ) {
          position.top -= elemHeight / 2;
        }

        position.left += myOffset[ 0 ];
        position.top += myOffset[ 1 ];

        collisionPosition = {
          marginLeft: marginLeft,
          marginTop: marginTop
        };

        $.each( [ "left", "top" ], function( i, dir ) {
          if ( $.ui.position[ collision[ i ] ] ) {
            $.ui.position[ collision[ i ] ][ dir ]( position, {
              targetWidth: targetWidth,
              targetHeight: targetHeight,
              elemWidth: elemWidth,
              elemHeight: elemHeight,
              collisionPosition: collisionPosition,
              collisionWidth: collisionWidth,
              collisionHeight: collisionHeight,
              offset: [ atOffset[ 0 ] + myOffset[ 0 ], atOffset [ 1 ] + myOffset[ 1 ] ],
              my: options.my,
              at: options.at,
              within: within,
              elem: elem
            } );
          }
        } );

        if ( options.using ) {

          // Adds feedback as second argument to using callback, if present
          using = function( props ) {
            var left = targetOffset.left - position.left,
              right = left + targetWidth - elemWidth,
              top = targetOffset.top - position.top,
              bottom = top + targetHeight - elemHeight,
              feedback = {
                target: {
                  element: target,
                  left: targetOffset.left,
                  top: targetOffset.top,
                  width: targetWidth,
                  height: targetHeight
                },
                element: {
                  element: elem,
                  left: position.left,
                  top: position.top,
                  width: elemWidth,
                  height: elemHeight
                },
                horizontal: right < 0 ? "left" : left > 0 ? "right" : "center",
                vertical: bottom < 0 ? "top" : top > 0 ? "bottom" : "middle"
              };
            if ( targetWidth < elemWidth && abs( left + right ) < targetWidth ) {
              feedback.horizontal = "center";
            }
            if ( targetHeight < elemHeight && abs( top + bottom ) < targetHeight ) {
              feedback.vertical = "middle";
            }
            if ( max( abs( left ), abs( right ) ) > max( abs( top ), abs( bottom ) ) ) {
              feedback.important = "horizontal";
            } else {
              feedback.important = "vertical";
            }
            options.using.call( this, props, feedback );
          };
        }

        elem.offset( $.extend( position, { using: using } ) );
      } );
    };

    $.ui.position = {
      fit: {
        left: function( position, data ) {
          var within = data.within,
            withinOffset = within.isWindow ? within.scrollLeft : within.offset.left,
            outerWidth = within.width,
            collisionPosLeft = position.left - data.collisionPosition.marginLeft,
            overLeft = withinOffset - collisionPosLeft,
            overRight = collisionPosLeft + data.collisionWidth - outerWidth - withinOffset,
            newOverRight;

          // Element is wider than within
          if ( data.collisionWidth > outerWidth ) {

            // Element is initially over the left side of within
            if ( overLeft > 0 && overRight <= 0 ) {
              newOverRight = position.left + overLeft + data.collisionWidth - outerWidth -
                withinOffset;
              position.left += overLeft - newOverRight;

              // Element is initially over right side of within
            } else if ( overRight > 0 && overLeft <= 0 ) {
              position.left = withinOffset;

              // Element is initially over both left and right sides of within
            } else {
              if ( overLeft > overRight ) {
                position.left = withinOffset + outerWidth - data.collisionWidth;
              } else {
                position.left = withinOffset;
              }
            }

            // Too far left -> align with left edge
          } else if ( overLeft > 0 ) {
            position.left += overLeft;

            // Too far right -> align with right edge
          } else if ( overRight > 0 ) {
            position.left -= overRight;

            // Adjust based on position and margin
          } else {
            position.left = max( position.left - collisionPosLeft, position.left );
          }
        },
        top: function( position, data ) {
          var within = data.within,
            withinOffset = within.isWindow ? within.scrollTop : within.offset.top,
            outerHeight = data.within.height,
            collisionPosTop = position.top - data.collisionPosition.marginTop,
            overTop = withinOffset - collisionPosTop,
            overBottom = collisionPosTop + data.collisionHeight - outerHeight - withinOffset,
            newOverBottom;

          // Element is taller than within
          if ( data.collisionHeight > outerHeight ) {

            // Element is initially over the top of within
            if ( overTop > 0 && overBottom <= 0 ) {
              newOverBottom = position.top + overTop + data.collisionHeight - outerHeight -
                withinOffset;
              position.top += overTop - newOverBottom;

              // Element is initially over bottom of within
            } else if ( overBottom > 0 && overTop <= 0 ) {
              position.top = withinOffset;

              // Element is initially over both top and bottom of within
            } else {
              if ( overTop > overBottom ) {
                position.top = withinOffset + outerHeight - data.collisionHeight;
              } else {
                position.top = withinOffset;
              }
            }

            // Too far up -> align with top
          } else if ( overTop > 0 ) {
            position.top += overTop;

            // Too far down -> align with bottom edge
          } else if ( overBottom > 0 ) {
            position.top -= overBottom;

            // Adjust based on position and margin
          } else {
            position.top = max( position.top - collisionPosTop, position.top );
          }
        }
      },
      flip: {
        left: function( position, data ) {
          var within = data.within,
            withinOffset = within.offset.left + within.scrollLeft,
            outerWidth = within.width,
            offsetLeft = within.isWindow ? within.scrollLeft : within.offset.left,
            collisionPosLeft = position.left - data.collisionPosition.marginLeft,
            overLeft = collisionPosLeft - offsetLeft,
            overRight = collisionPosLeft + data.collisionWidth - outerWidth - offsetLeft,
            myOffset = data.my[ 0 ] === "left" ?
              -data.elemWidth :
              data.my[ 0 ] === "right" ?
                data.elemWidth :
                0,
            atOffset = data.at[ 0 ] === "left" ?
              data.targetWidth :
              data.at[ 0 ] === "right" ?
                -data.targetWidth :
                0,
            offset = -2 * data.offset[ 0 ],
            newOverRight,
            newOverLeft;

          if ( overLeft < 0 ) {
            newOverRight = position.left + myOffset + atOffset + offset + data.collisionWidth -
              outerWidth - withinOffset;
            if ( newOverRight < 0 || newOverRight < abs( overLeft ) ) {
              position.left += myOffset + atOffset + offset;
            }
          } else if ( overRight > 0 ) {
            newOverLeft = position.left - data.collisionPosition.marginLeft + myOffset +
              atOffset + offset - offsetLeft;
            if ( newOverLeft > 0 || abs( newOverLeft ) < overRight ) {
              position.left += myOffset + atOffset + offset;
            }
          }
        },
        top: function( position, data ) {
          var within = data.within,
            withinOffset = within.offset.top + within.scrollTop,
            outerHeight = within.height,
            offsetTop = within.isWindow ? within.scrollTop : within.offset.top,
            collisionPosTop = position.top - data.collisionPosition.marginTop,
            overTop = collisionPosTop - offsetTop,
            overBottom = collisionPosTop + data.collisionHeight - outerHeight - offsetTop,
            top = data.my[ 1 ] === "top",
            myOffset = top ?
              -data.elemHeight :
              data.my[ 1 ] === "bottom" ?
                data.elemHeight :
                0,
            atOffset = data.at[ 1 ] === "top" ?
              data.targetHeight :
              data.at[ 1 ] === "bottom" ?
                -data.targetHeight :
                0,
            offset = -2 * data.offset[ 1 ],
            newOverTop,
            newOverBottom;
          if ( overTop < 0 ) {
            newOverBottom = position.top + myOffset + atOffset + offset + data.collisionHeight -
              outerHeight - withinOffset;
            if ( newOverBottom < 0 || newOverBottom < abs( overTop ) ) {
              position.top += myOffset + atOffset + offset;
            }
          } else if ( overBottom > 0 ) {
            newOverTop = position.top - data.collisionPosition.marginTop + myOffset + atOffset +
              offset - offsetTop;
            if ( newOverTop > 0 || abs( newOverTop ) < overBottom ) {
              position.top += myOffset + atOffset + offset;
            }
          }
        }
      },
      flipfit: {
        left: function() {
          $.ui.position.flip.left.apply( this, arguments );
          $.ui.position.fit.left.apply( this, arguments );
        },
        top: function() {
          $.ui.position.flip.top.apply( this, arguments );
          $.ui.position.fit.top.apply( this, arguments );
        }
      }
    };

  } )();

  var position = $.ui.position;


  /*!
 * jQuery UI :data 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :data Selector
//>>group: Core
//>>description: Selects elements which have data stored under the specified key.
//>>docs: http://api.jqueryui.com/data-selector/


  var data = $.extend( $.expr[ ":" ], {
    data: $.expr.createPseudo ?
      $.expr.createPseudo( function( dataName ) {
        return function( elem ) {
          return !!$.data( elem, dataName );
        };
      } ) :

      // Support: jQuery <1.8
      function( elem, i, match ) {
        return !!$.data( elem, match[ 3 ] );
      }
  } );

  /*!
 * jQuery UI Disable Selection 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: disableSelection
//>>group: Core
//>>description: Disable selection of text content within the set of matched elements.
//>>docs: http://api.jqueryui.com/disableSelection/

// This file is deprecated


  var disableSelection = $.fn.extend( {
    disableSelection: ( function() {
      var eventType = "onselectstart" in document.createElement( "div" ) ?
        "selectstart" :
        "mousedown";

      return function() {
        return this.on( eventType + ".ui-disableSelection", function( event ) {
          event.preventDefault();
        } );
      };
    } )(),

    enableSelection: function() {
      return this.off( ".ui-disableSelection" );
    }
  } );


  /*!
 * jQuery UI Focusable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :focusable Selector
//>>group: Core
//>>description: Selects elements which can be focused.
//>>docs: http://api.jqueryui.com/focusable-selector/



// Selectors
  $.ui.focusable = function( element, hasTabindex ) {
    var map, mapName, img, focusableIfVisible, fieldset,
      nodeName = element.nodeName.toLowerCase();

    if ( "area" === nodeName ) {
      map = element.parentNode;
      mapName = map.name;
      if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
        return false;
      }
      img = $( "img[usemap='#" + mapName + "']" );
      return img.length > 0 && img.is( ":visible" );
    }

    if ( /^(input|select|textarea|button|object)$/.test( nodeName ) ) {
      focusableIfVisible = !element.disabled;

      if ( focusableIfVisible ) {

        // Form controls within a disabled fieldset are disabled.
        // However, controls within the fieldset's legend do not get disabled.
        // Since controls generally aren't placed inside legends, we skip
        // this portion of the check.
        fieldset = $( element ).closest( "fieldset" )[ 0 ];
        if ( fieldset ) {
          focusableIfVisible = !fieldset.disabled;
        }
      }
    } else if ( "a" === nodeName ) {
      focusableIfVisible = element.href || hasTabindex;
    } else {
      focusableIfVisible = hasTabindex;
    }

    return focusableIfVisible && $( element ).is( ":visible" ) && visible( $( element ) );
  };

// Support: IE 8 only
// IE 8 doesn't resolve inherit to visible/hidden for computed values
  function visible( element ) {
    var visibility = element.css( "visibility" );
    while ( visibility === "inherit" ) {
      element = element.parent();
      visibility = element.css( "visibility" );
    }
    return visibility !== "hidden";
  }

  $.extend( $.expr[ ":" ], {
    focusable: function( element ) {
      return $.ui.focusable( element, $.attr( element, "tabindex" ) != null );
    }
  } );

  var focusable = $.ui.focusable;




// Support: IE8 Only
// IE8 does not support the form attribute and when it is supplied. It overwrites the form prop
// with a string, so we need to find the proper form.
  var form = $.fn.form = function() {
    return typeof this[ 0 ].form === "string" ? this.closest( "form" ) : $( this[ 0 ].form );
  };


  /*!
 * jQuery UI Form Reset Mixin 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Form Reset Mixin
//>>group: Core
//>>description: Refresh input widgets when their form is reset
//>>docs: http://api.jqueryui.com/form-reset-mixin/



  var formResetMixin = $.ui.formResetMixin = {
    _formResetHandler: function() {
      var form = $( this );

      // Wait for the form reset to actually happen before refreshing
      setTimeout( function() {
        var instances = form.data( "ui-form-reset-instances" );
        $.each( instances, function() {
          this.refresh();
        } );
      } );
    },

    _bindFormResetHandler: function() {
      this.form = this.element.form();
      if ( !this.form.length ) {
        return;
      }

      var instances = this.form.data( "ui-form-reset-instances" ) || [];
      if ( !instances.length ) {

        // We don't use _on() here because we use a single event handler per form
        this.form.on( "reset.ui-form-reset", this._formResetHandler );
      }
      instances.push( this );
      this.form.data( "ui-form-reset-instances", instances );
    },

    _unbindFormResetHandler: function() {
      if ( !this.form.length ) {
        return;
      }

      var instances = this.form.data( "ui-form-reset-instances" );
      instances.splice( $.inArray( this, instances ), 1 );
      if ( instances.length ) {
        this.form.data( "ui-form-reset-instances", instances );
      } else {
        this.form
          .removeData( "ui-form-reset-instances" )
          .off( "reset.ui-form-reset" );
      }
    }
  };


  /*!
 * jQuery UI Support for jQuery core 1.7.x 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 */

//>>label: jQuery 1.7 Support
//>>group: Core
//>>description: Support version 1.7.x of jQuery core



// Support: jQuery 1.7 only
// Not a great way to check versions, but since we only support 1.7+ and only
// need to detect <1.8, this is a simple check that should suffice. Checking
// for "1.7." would be a bit safer, but the version string is 1.7, not 1.7.0
// and we'll never reach 1.70.0 (if we do, we certainly won't be supporting
// 1.7 anymore). See #11197 for why we're not using feature detection.
  if ( $.fn.jquery.substring( 0, 3 ) === "1.7" ) {

    // Setters for .innerWidth(), .innerHeight(), .outerWidth(), .outerHeight()
    // Unlike jQuery Core 1.8+, these only support numeric values to set the
    // dimensions in pixels
    $.each( [ "Width", "Height" ], function( i, name ) {
      var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
        type = name.toLowerCase(),
        orig = {
          innerWidth: $.fn.innerWidth,
          innerHeight: $.fn.innerHeight,
          outerWidth: $.fn.outerWidth,
          outerHeight: $.fn.outerHeight
        };

      function reduce( elem, size, border, margin ) {
        $.each( side, function() {
          size -= parseFloat( $.css( elem, "padding" + this ) ) || 0;
          if ( border ) {
            size -= parseFloat( $.css( elem, "border" + this + "Width" ) ) || 0;
          }
          if ( margin ) {
            size -= parseFloat( $.css( elem, "margin" + this ) ) || 0;
          }
        } );
        return size;
      }

      $.fn[ "inner" + name ] = function( size ) {
        if ( size === undefined ) {
          return orig[ "inner" + name ].call( this );
        }

        return this.each( function() {
          $( this ).css( type, reduce( this, size ) + "px" );
        } );
      };

      $.fn[ "outer" + name ] = function( size, margin ) {
        if ( typeof size !== "number" ) {
          return orig[ "outer" + name ].call( this, size );
        }

        return this.each( function() {
          $( this ).css( type, reduce( this, size, true, margin ) + "px" );
        } );
      };
    } );

    $.fn.addBack = function( selector ) {
      return this.add( selector == null ?
        this.prevObject : this.prevObject.filter( selector )
      );
    };
  }

  ;
  /*!
 * jQuery UI Keycode 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Keycode
//>>group: Core
//>>description: Provide keycodes as keynames
//>>docs: http://api.jqueryui.com/jQuery.ui.keyCode/


  var keycode = $.ui.keyCode = {
    BACKSPACE: 8,
    COMMA: 188,
    DELETE: 46,
    DOWN: 40,
    END: 35,
    ENTER: 13,
    ESCAPE: 27,
    HOME: 36,
    LEFT: 37,
    PAGE_DOWN: 34,
    PAGE_UP: 33,
    PERIOD: 190,
    RIGHT: 39,
    SPACE: 32,
    TAB: 9,
    UP: 38
  };




// Internal use only
  var escapeSelector = $.ui.escapeSelector = ( function() {
    var selectorEscape = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;
    return function( selector ) {
      return selector.replace( selectorEscape, "\\$1" );
    };
  } )();


  /*!
 * jQuery UI Labels 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: labels
//>>group: Core
//>>description: Find all the labels associated with a given input
//>>docs: http://api.jqueryui.com/labels/



  var labels = $.fn.labels = function() {
    var ancestor, selector, id, labels, ancestors;

    // Check control.labels first
    if ( this[ 0 ].labels && this[ 0 ].labels.length ) {
      return this.pushStack( this[ 0 ].labels );
    }

    // Support: IE <= 11, FF <= 37, Android <= 2.3 only
    // Above browsers do not support control.labels. Everything below is to support them
    // as well as document fragments. control.labels does not work on document fragments
    labels = this.eq( 0 ).parents( "label" );

    // Look for the label based on the id
    id = this.attr( "id" );
    if ( id ) {

      // We don't search against the document in case the element
      // is disconnected from the DOM
      ancestor = this.eq( 0 ).parents().last();

      // Get a full set of top level ancestors
      ancestors = ancestor.add( ancestor.length ? ancestor.siblings() : this.siblings() );

      // Create a selector for the label based on the id
      selector = "label[for='" + $.ui.escapeSelector( id ) + "']";

      labels = labels.add( ancestors.find( selector ).addBack( selector ) );

    }

    // Return whatever we have found for labels
    return this.pushStack( labels );
  };


  /*!
 * jQuery UI Scroll Parent 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: scrollParent
//>>group: Core
//>>description: Get the closest ancestor element that is scrollable.
//>>docs: http://api.jqueryui.com/scrollParent/



  var scrollParent = $.fn.scrollParent = function( includeHidden ) {
    var position = this.css( "position" ),
      excludeStaticParent = position === "absolute",
      overflowRegex = includeHidden ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
      scrollParent = this.parents().filter( function() {
        var parent = $( this );
        if ( excludeStaticParent && parent.css( "position" ) === "static" ) {
          return false;
        }
        return overflowRegex.test( parent.css( "overflow" ) + parent.css( "overflow-y" ) +
          parent.css( "overflow-x" ) );
      } ).eq( 0 );

    return position === "fixed" || !scrollParent.length ?
      $( this[ 0 ].ownerDocument || document ) :
      scrollParent;
  };


  /*!
 * jQuery UI Tabbable 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: :tabbable Selector
//>>group: Core
//>>description: Selects elements which can be tabbed to.
//>>docs: http://api.jqueryui.com/tabbable-selector/



  var tabbable = $.extend( $.expr[ ":" ], {
    tabbable: function( element ) {
      var tabIndex = $.attr( element, "tabindex" ),
        hasTabindex = tabIndex != null;
      return ( !hasTabindex || tabIndex >= 0 ) && $.ui.focusable( element, hasTabindex );
    }
  } );


  /*!
 * jQuery UI Unique ID 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: uniqueId
//>>group: Core
//>>description: Functions to generate and remove uniqueId's
//>>docs: http://api.jqueryui.com/uniqueId/



  var uniqueId = $.fn.extend( {
    uniqueId: ( function() {
      var uuid = 0;

      return function() {
        return this.each( function() {
          if ( !this.id ) {
            this.id = "ui-id-" + ( ++uuid );
          }
        } );
      };
    } )(),

    removeUniqueId: function() {
      return this.each( function() {
        if ( /^ui-id-\d+$/.test( this.id ) ) {
          $( this ).removeAttr( "id" );
        }
      } );
    }
  } );


// jscs:disable maximumLineLength
  /* jscs:disable requireCamelCaseOrUpperCaseIdentifiers */
  /*!
 * jQuery UI Datepicker 1.12.1
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 */

//>>label: Datepicker
//>>group: Widgets
//>>description: Displays a calendar from an input or inline for selecting dates.
//>>docs: http://api.jqueryui.com/datepicker/
//>>demos: http://jqueryui.com/datepicker/
//>>css.structure: ../../themes/base/core.css
//>>css.structure: ../../themes/base/datepicker.css
//>>css.theme: ../../themes/base/theme.css



  $.extend( $.ui, { datepicker: { version: "1.12.1" } } );

  var datepicker_instActive;

  function datepicker_getZindex( elem ) {
    var position, value;
    while ( elem.length && elem[ 0 ] !== document ) {

      // Ignore z-index if position is set to a value where z-index is ignored by the browser
      // This makes behavior of this function consistent across browsers
      // WebKit always returns auto if the element is positioned
      position = elem.css( "position" );
      if ( position === "absolute" || position === "relative" || position === "fixed" ) {

        // IE returns 0 when zIndex is not specified
        // other browsers return a string
        // we ignore the case of nested elements with an explicit value of 0
        // <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
        value = parseInt( elem.css( "zIndex" ), 10 );
        if ( !isNaN( value ) && value !== 0 ) {
          return value;
        }
      }
      elem = elem.parent();
    }

    return 0;
  }
  /* Date picker manager.
   Use the singleton instance of this class, $.datepicker, to interact with the date picker.
   Settings for (groups of) date pickers are maintained in an instance object,
   allowing multiple different settings on the same page. */

  function Datepicker() {
    this._curInst = null; // The current instance in use
    this._keyEvent = false; // If the last event was a key event
    this._disabledInputs = []; // List of date picker inputs that have been disabled
    this._datepickerShowing = false; // True if the popup picker is showing , false if not
    this._inDialog = false; // True if showing within a "dialog", false if not
    this._mainDivId = "ui-datepicker-div"; // The ID of the main datepicker division
    this._inlineClass = "ui-datepicker-inline"; // The name of the inline marker class
    this._appendClass = "ui-datepicker-append"; // The name of the append marker class
    this._triggerClass = "ui-datepicker-trigger"; // The name of the trigger marker class
    this._dialogClass = "ui-datepicker-dialog"; // The name of the dialog marker class
    this._disableClass = "ui-datepicker-disabled"; // The name of the disabled covering marker class
    this._unselectableClass = "ui-datepicker-unselectable"; // The name of the unselectable cell marker class
    this._currentClass = "ui-datepicker-current-day"; // The name of the current day marker class
    this._dayOverClass = "ui-datepicker-days-cell-over"; // The name of the day hover marker class
    this.regional = []; // Available regional settings, indexed by language code
    this.regional[ "" ] = { // Default regional settings
      closeText: "Done", // Display text for close link
      prevText: "Prev", // Display text for previous month link
      nextText: "Next", // Display text for next month link
      currentText: "Today", // Display text for current month link
      monthNames: [ "January","February","March","April","May","June",
        "July","August","September","October","November","December" ], // Names of months for drop-down and formatting
      monthNamesShort: [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ], // For formatting
      dayNames: [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ], // For formatting
      dayNamesShort: [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ], // For formatting
      dayNamesMin: [ "Su","Mo","Tu","We","Th","Fr","Sa" ], // Column headings for days starting at Sunday
      weekHeader: "Wk", // Column header for week of the year
      dateFormat: "mm/dd/yy", // See format options on parseDate
      firstDay: 0, // The first day of the week, Sun = 0, Mon = 1, ...
      isRTL: false, // True if right-to-left language, false if left-to-right
      showMonthAfterYear: false, // True if the year select precedes month, false for month then year
      yearSuffix: "" // Additional text to append to the year in the month headers
    };
    this._defaults = { // Global defaults for all the date picker instances
      showOn: "focus", // "focus" for popup on focus,
      // "button" for trigger button, or "both" for either
      showAnim: "fadeIn", // Name of jQuery animation for popup
      showOptions: {}, // Options for enhanced animations
      defaultDate: null, // Used when field is blank: actual date,
      // +/-number for offset from today, null for today
      appendText: "", // Display text following the input box, e.g. showing the format
      buttonText: "...", // Text for trigger button
      buttonImage: "", // URL for trigger button image
      buttonImageOnly: false, // True if the image appears alone, false if it appears on a button
      hideIfNoPrevNext: false, // True to hide next/previous month links
      // if not applicable, false to just disable them
      navigationAsDateFormat: false, // True if date formatting applied to prev/today/next links
      gotoCurrent: false, // True if today link goes back to current selection instead
      changeMonth: false, // True if month can be selected directly, false if only prev/next
      changeYear: false, // True if year can be selected directly, false if only prev/next
      yearRange: "c-10:c+10", // Range of years to display in drop-down,
      // either relative to today's year (-nn:+nn), relative to currently displayed year
      // (c-nn:c+nn), absolute (nnnn:nnnn), or a combination of the above (nnnn:-n)
      showOtherMonths: false, // True to show dates in other months, false to leave blank
      selectOtherMonths: false, // True to allow selection of dates in other months, false for unselectable
      showWeek: false, // True to show week of the year, false to not show it
      calculateWeek: this.iso8601Week, // How to calculate the week of the year,
      // takes a Date and returns the number of the week for it
      shortYearCutoff: "+10", // Short year values < this are in the current century,
      // > this are in the previous century,
      // string value starting with "+" for current year + value
      minDate: null, // The earliest selectable date, or null for no limit
      maxDate: null, // The latest selectable date, or null for no limit
      duration: "fast", // Duration of display/closure
      beforeShowDay: null, // Function that takes a date and returns an array with
      // [0] = true if selectable, false if not, [1] = custom CSS class name(s) or "",
      // [2] = cell title (optional), e.g. $.datepicker.noWeekends
      beforeShow: null, // Function that takes an input field and
      // returns a set of custom settings for the date picker
      onSelect: null, // Define a callback function when a date is selected
      onChangeMonthYear: null, // Define a callback function when the month or year is changed
      onClose: null, // Define a callback function when the datepicker is closed
      numberOfMonths: 1, // Number of months to show at a time
      showCurrentAtPos: 0, // The position in multipe months at which to show the current month (starting at 0)
      stepMonths: 1, // Number of months to step back/forward
      stepBigMonths: 12, // Number of months to step back/forward for the big links
      altField: "", // Selector for an alternate field to store selected dates into
      altFormat: "", // The date format to use for the alternate field
      constrainInput: true, // The input is constrained by the current date format
      showButtonPanel: false, // True to show button panel, false to not show it
      autoSize: false, // True to size the input for the date format, false to leave as is
      disabled: false // The initial disabled state
    };
    $.extend( this._defaults, this.regional[ "" ] );
    this.regional.en = $.extend( true, {}, this.regional[ "" ] );
    this.regional[ "en-US" ] = $.extend( true, {}, this.regional.en );
    this.dpDiv = datepicker_bindHover( $( "<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) );
  }

  $.extend( Datepicker.prototype, {
    /* Class name added to elements to indicate already configured with a date picker. */
    markerClassName: "hasDatepicker",

    //Keep track of the maximum number of rows displayed (see #7043)
    maxRows: 4,

    // TODO rename to "widget" when switching to widget factory
    _widgetDatepicker: function() {
      return this.dpDiv;
    },

    /* Override the default settings for all instances of the date picker.
	 * @param  settings  object - the new settings to use as defaults (anonymous object)
	 * @return the manager object
	 */
    setDefaults: function( settings ) {
      datepicker_extendRemove( this._defaults, settings || {} );
      return this;
    },

    /* Attach the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 * @param  settings  object - the new settings to use for this date picker instance (anonymous)
	 */
    _attachDatepicker: function( target, settings ) {
      var nodeName, inline, inst;
      nodeName = target.nodeName.toLowerCase();
      inline = ( nodeName === "div" || nodeName === "span" );
      if ( !target.id ) {
        this.uuid += 1;
        target.id = "dp" + this.uuid;
      }
      inst = this._newInst( $( target ), inline );
      inst.settings = $.extend( {}, settings || {} );
      if ( nodeName === "input" ) {
        this._connectDatepicker( target, inst );
      } else if ( inline ) {
        this._inlineDatepicker( target, inst );
      }
    },

    /* Create a new instance object. */
    _newInst: function( target, inline ) {
      var id = target[ 0 ].id.replace( /([^A-Za-z0-9_\-])/g, "\\\\$1" ); // escape jQuery meta chars
      return { id: id, input: target, // associated target
        selectedDay: 0, selectedMonth: 0, selectedYear: 0, // current selection
        drawMonth: 0, drawYear: 0, // month being drawn
        inline: inline, // is datepicker inline or not
        dpDiv: ( !inline ? this.dpDiv : // presentation div
          datepicker_bindHover( $( "<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>" ) ) ) };
    },

    /* Attach the date picker to an input field. */
    _connectDatepicker: function( target, inst ) {
      var input = $( target );
      inst.append = $( [] );
      inst.trigger = $( [] );
      if ( input.hasClass( this.markerClassName ) ) {
        return;
      }
      this._attachments( input, inst );
      input.addClass( this.markerClassName ).on( "keydown", this._doKeyDown ).
      on( "keypress", this._doKeyPress ).on( "keyup", this._doKeyUp );
      this._autoSize( inst );
      $.data( target, "datepicker", inst );

      //If disabled option is true, disable the datepicker once it has been attached to the input (see ticket #5665)
      if ( inst.settings.disabled ) {
        this._disableDatepicker( target );
      }
    },

    /* Make attachments based on settings. */
    _attachments: function( input, inst ) {
      var showOn, buttonText, buttonImage,
        appendText = this._get( inst, "appendText" ),
        isRTL = this._get( inst, "isRTL" );

      if ( inst.append ) {
        inst.append.remove();
      }
      if ( appendText ) {
        inst.append = $( "<span class='" + this._appendClass + "'>" + appendText + "</span>" );
        input[ isRTL ? "before" : "after" ]( inst.append );
      }

      input.off( "focus", this._showDatepicker );

      if ( inst.trigger ) {
        inst.trigger.remove();
      }

      showOn = this._get( inst, "showOn" );
      if ( showOn === "focus" || showOn === "both" ) { // pop-up date picker when in the marked field
        input.on( "focus", this._showDatepicker );
      }
      if ( showOn === "button" || showOn === "both" ) { // pop-up date picker when button clicked
        buttonText = this._get( inst, "buttonText" );
        buttonImage = this._get( inst, "buttonImage" );
        inst.trigger = $( this._get( inst, "buttonImageOnly" ) ?
          $( "<img/>" ).addClass( this._triggerClass ).
          attr( { src: buttonImage, alt: buttonText, title: buttonText } ) :
          $( "<button type='button'></button>" ).addClass( this._triggerClass ).
          html( !buttonImage ? buttonText : $( "<img/>" ).attr(
            { src:buttonImage, alt:buttonText, title:buttonText } ) ) );
        input[ isRTL ? "before" : "after" ]( inst.trigger );
        inst.trigger.on( "click", function() {
          if ( $.datepicker._datepickerShowing && $.datepicker._lastInput === input[ 0 ] ) {
            $.datepicker._hideDatepicker();
          } else if ( $.datepicker._datepickerShowing && $.datepicker._lastInput !== input[ 0 ] ) {
            $.datepicker._hideDatepicker();
            $.datepicker._showDatepicker( input[ 0 ] );
          } else {
            $.datepicker._showDatepicker( input[ 0 ] );
          }
          return false;
        } );
      }
    },

    /* Apply the maximum length for the date format. */
    _autoSize: function( inst ) {
      if ( this._get( inst, "autoSize" ) && !inst.inline ) {
        var findMax, max, maxI, i,
          date = new Date( 2009, 12 - 1, 20 ), // Ensure double digits
          dateFormat = this._get( inst, "dateFormat" );

        if ( dateFormat.match( /[DM]/ ) ) {
          findMax = function( names ) {
            max = 0;
            maxI = 0;
            for ( i = 0; i < names.length; i++ ) {
              if ( names[ i ].length > max ) {
                max = names[ i ].length;
                maxI = i;
              }
            }
            return maxI;
          };
          date.setMonth( findMax( this._get( inst, ( dateFormat.match( /MM/ ) ?
            "monthNames" : "monthNamesShort" ) ) ) );
          date.setDate( findMax( this._get( inst, ( dateFormat.match( /DD/ ) ?
            "dayNames" : "dayNamesShort" ) ) ) + 20 - date.getDay() );
        }
        inst.input.attr( "size", this._formatDate( inst, date ).length );
      }
    },

    /* Attach an inline date picker to a div. */
    _inlineDatepicker: function( target, inst ) {
      var divSpan = $( target );
      if ( divSpan.hasClass( this.markerClassName ) ) {
        return;
      }
      divSpan.addClass( this.markerClassName ).append( inst.dpDiv );
      $.data( target, "datepicker", inst );
      this._setDate( inst, this._getDefaultDate( inst ), true );
      this._updateDatepicker( inst );
      this._updateAlternate( inst );

      //If disabled option is true, disable the datepicker before showing it (see ticket #5665)
      if ( inst.settings.disabled ) {
        this._disableDatepicker( target );
      }

      // Set display:block in place of inst.dpDiv.show() which won't work on disconnected elements
      // http://bugs.jqueryui.com/ticket/7552 - A Datepicker created on a detached div has zero height
      inst.dpDiv.css( "display", "block" );
    },

    /* Pop-up the date picker in a "dialog" box.
	 * @param  input element - ignored
	 * @param  date	string or Date - the initial date to display
	 * @param  onSelect  function - the function to call when a date is selected
	 * @param  settings  object - update the dialog date picker instance's settings (anonymous object)
	 * @param  pos int[2] - coordinates for the dialog's position within the screen or
	 *					event - with x/y coordinates or
	 *					leave empty for default (screen centre)
	 * @return the manager object
	 */
    _dialogDatepicker: function( input, date, onSelect, settings, pos ) {
      var id, browserWidth, browserHeight, scrollX, scrollY,
        inst = this._dialogInst; // internal instance

      if ( !inst ) {
        this.uuid += 1;
        id = "dp" + this.uuid;
        this._dialogInput = $( "<input type='text' id='" + id +
          "' style='position: absolute; top: -100px; width: 0px;'/>" );
        this._dialogInput.on( "keydown", this._doKeyDown );
        $( "body" ).append( this._dialogInput );
        inst = this._dialogInst = this._newInst( this._dialogInput, false );
        inst.settings = {};
        $.data( this._dialogInput[ 0 ], "datepicker", inst );
      }
      datepicker_extendRemove( inst.settings, settings || {} );
      date = ( date && date.constructor === Date ? this._formatDate( inst, date ) : date );
      this._dialogInput.val( date );

      this._pos = ( pos ? ( pos.length ? pos : [ pos.pageX, pos.pageY ] ) : null );
      if ( !this._pos ) {
        browserWidth = document.documentElement.clientWidth;
        browserHeight = document.documentElement.clientHeight;
        scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
        scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        this._pos = // should use actual width/height below
          [ ( browserWidth / 2 ) - 100 + scrollX, ( browserHeight / 2 ) - 150 + scrollY ];
      }

      // Move input on screen for focus, but hidden behind dialog
      this._dialogInput.css( "left", ( this._pos[ 0 ] + 20 ) + "px" ).css( "top", this._pos[ 1 ] + "px" );
      inst.settings.onSelect = onSelect;
      this._inDialog = true;
      this.dpDiv.addClass( this._dialogClass );
      this._showDatepicker( this._dialogInput[ 0 ] );
      if ( $.blockUI ) {
        $.blockUI( this.dpDiv );
      }
      $.data( this._dialogInput[ 0 ], "datepicker", inst );
      return this;
    },

    /* Detach a datepicker from its control.
	 * @param  target	element - the target input field or division or span
	 */
    _destroyDatepicker: function( target ) {
      var nodeName,
        $target = $( target ),
        inst = $.data( target, "datepicker" );

      if ( !$target.hasClass( this.markerClassName ) ) {
        return;
      }

      nodeName = target.nodeName.toLowerCase();
      $.removeData( target, "datepicker" );
      if ( nodeName === "input" ) {
        inst.append.remove();
        inst.trigger.remove();
        $target.removeClass( this.markerClassName ).
        off( "focus", this._showDatepicker ).
        off( "keydown", this._doKeyDown ).
        off( "keypress", this._doKeyPress ).
        off( "keyup", this._doKeyUp );
      } else if ( nodeName === "div" || nodeName === "span" ) {
        $target.removeClass( this.markerClassName ).empty();
      }

      if ( datepicker_instActive === inst ) {
        datepicker_instActive = null;
      }
    },

    /* Enable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
    _enableDatepicker: function( target ) {
      var nodeName, inline,
        $target = $( target ),
        inst = $.data( target, "datepicker" );

      if ( !$target.hasClass( this.markerClassName ) ) {
        return;
      }

      nodeName = target.nodeName.toLowerCase();
      if ( nodeName === "input" ) {
        target.disabled = false;
        inst.trigger.filter( "button" ).
        each( function() { this.disabled = false; } ).end().
        filter( "img" ).css( { opacity: "1.0", cursor: "" } );
      } else if ( nodeName === "div" || nodeName === "span" ) {
        inline = $target.children( "." + this._inlineClass );
        inline.children().removeClass( "ui-state-disabled" );
        inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
        prop( "disabled", false );
      }
      this._disabledInputs = $.map( this._disabledInputs,
        function( value ) { return ( value === target ? null : value ); } ); // delete entry
    },

    /* Disable the date picker to a jQuery selection.
	 * @param  target	element - the target input field or division or span
	 */
    _disableDatepicker: function( target ) {
      var nodeName, inline,
        $target = $( target ),
        inst = $.data( target, "datepicker" );

      if ( !$target.hasClass( this.markerClassName ) ) {
        return;
      }

      nodeName = target.nodeName.toLowerCase();
      if ( nodeName === "input" ) {
        target.disabled = true;
        inst.trigger.filter( "button" ).
        each( function() { this.disabled = true; } ).end().
        filter( "img" ).css( { opacity: "0.5", cursor: "default" } );
      } else if ( nodeName === "div" || nodeName === "span" ) {
        inline = $target.children( "." + this._inlineClass );
        inline.children().addClass( "ui-state-disabled" );
        inline.find( "select.ui-datepicker-month, select.ui-datepicker-year" ).
        prop( "disabled", true );
      }
      this._disabledInputs = $.map( this._disabledInputs,
        function( value ) { return ( value === target ? null : value ); } ); // delete entry
      this._disabledInputs[ this._disabledInputs.length ] = target;
    },

    /* Is the first field in a jQuery collection disabled as a datepicker?
	 * @param  target	element - the target input field or division or span
	 * @return boolean - true if disabled, false if enabled
	 */
    _isDisabledDatepicker: function( target ) {
      if ( !target ) {
        return false;
      }
      for ( var i = 0; i < this._disabledInputs.length; i++ ) {
        if ( this._disabledInputs[ i ] === target ) {
          return true;
        }
      }
      return false;
    },

    /* Retrieve the instance data for the target control.
	 * @param  target  element - the target input field or division or span
	 * @return  object - the associated instance data
	 * @throws  error if a jQuery problem getting data
	 */
    _getInst: function( target ) {
      try {
        return $.data( target, "datepicker" );
      }
      catch ( err ) {
        throw "Missing instance data for this datepicker";
      }
    },

    /* Update or retrieve the settings for a date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 * @param  name	object - the new settings to update or
	 *				string - the name of the setting to change or retrieve,
	 *				when retrieving also "all" for all instance settings or
	 *				"defaults" for all global defaults
	 * @param  value   any - the new value for the setting
	 *				(omit if above is an object or to retrieve a value)
	 */
    _optionDatepicker: function( target, name, value ) {
      var settings, date, minDate, maxDate,
        inst = this._getInst( target );

      if ( arguments.length === 2 && typeof name === "string" ) {
        return ( name === "defaults" ? $.extend( {}, $.datepicker._defaults ) :
          ( inst ? ( name === "all" ? $.extend( {}, inst.settings ) :
            this._get( inst, name ) ) : null ) );
      }

      settings = name || {};
      if ( typeof name === "string" ) {
        settings = {};
        settings[ name ] = value;
      }

      if ( inst ) {
        if ( this._curInst === inst ) {
          this._hideDatepicker();
        }

        date = this._getDateDatepicker( target, true );
        minDate = this._getMinMaxDate( inst, "min" );
        maxDate = this._getMinMaxDate( inst, "max" );
        datepicker_extendRemove( inst.settings, settings );

        // reformat the old minDate/maxDate values if dateFormat changes and a new minDate/maxDate isn't provided
        if ( minDate !== null && settings.dateFormat !== undefined && settings.minDate === undefined ) {
          inst.settings.minDate = this._formatDate( inst, minDate );
        }
        if ( maxDate !== null && settings.dateFormat !== undefined && settings.maxDate === undefined ) {
          inst.settings.maxDate = this._formatDate( inst, maxDate );
        }
        if ( "disabled" in settings ) {
          if ( settings.disabled ) {
            this._disableDatepicker( target );
          } else {
            this._enableDatepicker( target );
          }
        }
        this._attachments( $( target ), inst );
        this._autoSize( inst );
        this._setDate( inst, date );
        this._updateAlternate( inst );
        this._updateDatepicker( inst );
      }
    },

    // Change method deprecated
    _changeDatepicker: function( target, name, value ) {
      this._optionDatepicker( target, name, value );
    },

    /* Redraw the date picker attached to an input field or division.
	 * @param  target  element - the target input field or division or span
	 */
    _refreshDatepicker: function( target ) {
      var inst = this._getInst( target );
      if ( inst ) {
        this._updateDatepicker( inst );
      }
    },

    /* Set the dates for a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  date	Date - the new date
	 */
    _setDateDatepicker: function( target, date ) {
      var inst = this._getInst( target );
      if ( inst ) {
        this._setDate( inst, date );
        this._updateDatepicker( inst );
        this._updateAlternate( inst );
      }
    },

    /* Get the date(s) for the first entry in a jQuery selection.
	 * @param  target element - the target input field or division or span
	 * @param  noDefault boolean - true if no default date is to be used
	 * @return Date - the current date
	 */
    _getDateDatepicker: function( target, noDefault ) {
      var inst = this._getInst( target );
      if ( inst && !inst.inline ) {
        this._setDateFromField( inst, noDefault );
      }
      return ( inst ? this._getDate( inst ) : null );
    },

    /* Handle keystrokes. */
    _doKeyDown: function( event ) {
      var onSelect, dateStr, sel,
        inst = $.datepicker._getInst( event.target ),
        handled = true,
        isRTL = inst.dpDiv.is( ".ui-datepicker-rtl" );

      inst._keyEvent = true;
      if ( $.datepicker._datepickerShowing ) {
        switch ( event.keyCode ) {
          case 9: $.datepicker._hideDatepicker();
            handled = false;
            break; // hide on tab out
          case 13: sel = $( "td." + $.datepicker._dayOverClass + ":not(." +
            $.datepicker._currentClass + ")", inst.dpDiv );
            if ( sel[ 0 ] ) {
              $.datepicker._selectDay( event.target, inst.selectedMonth, inst.selectedYear, sel[ 0 ] );
            }

            onSelect = $.datepicker._get( inst, "onSelect" );
            if ( onSelect ) {
              dateStr = $.datepicker._formatDate( inst );

              // Trigger custom callback
              onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );
            } else {
              $.datepicker._hideDatepicker();
            }

            return false; // don't submit the form
          case 27: $.datepicker._hideDatepicker();
            break; // hide on escape
          case 33: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
            -$.datepicker._get( inst, "stepBigMonths" ) :
            -$.datepicker._get( inst, "stepMonths" ) ), "M" );
            break; // previous month/year on page up/+ ctrl
          case 34: $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
            +$.datepicker._get( inst, "stepBigMonths" ) :
            +$.datepicker._get( inst, "stepMonths" ) ), "M" );
            break; // next month/year on page down/+ ctrl
          case 35: if ( event.ctrlKey || event.metaKey ) {
            $.datepicker._clearDate( event.target );
          }
            handled = event.ctrlKey || event.metaKey;
            break; // clear on ctrl or command +end
          case 36: if ( event.ctrlKey || event.metaKey ) {
            $.datepicker._gotoToday( event.target );
          }
            handled = event.ctrlKey || event.metaKey;
            break; // current on ctrl or command +home
          case 37: if ( event.ctrlKey || event.metaKey ) {
            $.datepicker._adjustDate( event.target, ( isRTL ? +1 : -1 ), "D" );
          }
            handled = event.ctrlKey || event.metaKey;

            // -1 day on ctrl or command +left
            if ( event.originalEvent.altKey ) {
              $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
                -$.datepicker._get( inst, "stepBigMonths" ) :
                -$.datepicker._get( inst, "stepMonths" ) ), "M" );
            }

            // next month/year on alt +left on Mac
            break;
          case 38: if ( event.ctrlKey || event.metaKey ) {
            $.datepicker._adjustDate( event.target, -7, "D" );
          }
            handled = event.ctrlKey || event.metaKey;
            break; // -1 week on ctrl or command +up
          case 39: if ( event.ctrlKey || event.metaKey ) {
            $.datepicker._adjustDate( event.target, ( isRTL ? -1 : +1 ), "D" );
          }
            handled = event.ctrlKey || event.metaKey;

            // +1 day on ctrl or command +right
            if ( event.originalEvent.altKey ) {
              $.datepicker._adjustDate( event.target, ( event.ctrlKey ?
                +$.datepicker._get( inst, "stepBigMonths" ) :
                +$.datepicker._get( inst, "stepMonths" ) ), "M" );
            }

            // next month/year on alt +right
            break;
          case 40: if ( event.ctrlKey || event.metaKey ) {
            $.datepicker._adjustDate( event.target, +7, "D" );
          }
            handled = event.ctrlKey || event.metaKey;
            break; // +1 week on ctrl or command +down
          default: handled = false;
        }
      } else if ( event.keyCode === 36 && event.ctrlKey ) { // display the date picker on ctrl+home
        $.datepicker._showDatepicker( this );
      } else {
        handled = false;
      }

      if ( handled ) {
        event.preventDefault();
        event.stopPropagation();
      }
    },

    /* Filter entered characters - based on date format. */
    _doKeyPress: function( event ) {
      var chars, chr,
        inst = $.datepicker._getInst( event.target );

      if ( $.datepicker._get( inst, "constrainInput" ) ) {
        chars = $.datepicker._possibleChars( $.datepicker._get( inst, "dateFormat" ) );
        chr = String.fromCharCode( event.charCode == null ? event.keyCode : event.charCode );
        return event.ctrlKey || event.metaKey || ( chr < " " || !chars || chars.indexOf( chr ) > -1 );
      }
    },

    /* Synchronise manual entry and field/alternate field. */
    _doKeyUp: function( event ) {
      var date,
        inst = $.datepicker._getInst( event.target );

      if ( inst.input.val() !== inst.lastVal ) {
        try {
          date = $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
            ( inst.input ? inst.input.val() : null ),
            $.datepicker._getFormatConfig( inst ) );

          if ( date ) { // only if valid
            $.datepicker._setDateFromField( inst );
            $.datepicker._updateAlternate( inst );
            $.datepicker._updateDatepicker( inst );
          }
        }
        catch ( err ) {
        }
      }
      return true;
    },

    /* Pop-up the date picker for a given input field.
	 * If false returned from beforeShow event handler do not show.
	 * @param  input  element - the input field attached to the date picker or
	 *					event - if triggered by focus
	 */
    _showDatepicker: function( input ) {
      input = input.target || input;
      if ( input.nodeName.toLowerCase() !== "input" ) { // find from button/image trigger
        input = $( "input", input.parentNode )[ 0 ];
      }

      if ( $.datepicker._isDisabledDatepicker( input ) || $.datepicker._lastInput === input ) { // already here
        return;
      }

      var inst, beforeShow, beforeShowSettings, isFixed,
        offset, showAnim, duration;

      inst = $.datepicker._getInst( input );
      if ( $.datepicker._curInst && $.datepicker._curInst !== inst ) {
        $.datepicker._curInst.dpDiv.stop( true, true );
        if ( inst && $.datepicker._datepickerShowing ) {
          $.datepicker._hideDatepicker( $.datepicker._curInst.input[ 0 ] );
        }
      }

      beforeShow = $.datepicker._get( inst, "beforeShow" );
      beforeShowSettings = beforeShow ? beforeShow.apply( input, [ input, inst ] ) : {};
      if ( beforeShowSettings === false ) {
        return;
      }
      datepicker_extendRemove( inst.settings, beforeShowSettings );

      inst.lastVal = null;
      $.datepicker._lastInput = input;
      $.datepicker._setDateFromField( inst );

      if ( $.datepicker._inDialog ) { // hide cursor
        input.value = "";
      }
      if ( !$.datepicker._pos ) { // position below input
        $.datepicker._pos = $.datepicker._findPos( input );
        $.datepicker._pos[ 1 ] += input.offsetHeight; // add the height
      }

      isFixed = false;
      $( input ).parents().each( function() {
        isFixed |= $( this ).css( "position" ) === "fixed";
        return !isFixed;
      } );

      offset = { left: $.datepicker._pos[ 0 ], top: $.datepicker._pos[ 1 ] };
      $.datepicker._pos = null;

      //to avoid flashes on Firefox
      inst.dpDiv.empty();

      // determine sizing offscreen
      inst.dpDiv.css( { position: "absolute", display: "block", top: "-1000px" } );
      $.datepicker._updateDatepicker( inst );

      // fix width for dynamic number of date pickers
      // and adjust position before showing
      offset = $.datepicker._checkOffset( inst, offset, isFixed );
      inst.dpDiv.css( { position: ( $.datepicker._inDialog && $.blockUI ?
          "static" : ( isFixed ? "fixed" : "absolute" ) ), display: "none",
        left: offset.left + "px", top: offset.top + "px" } );

      if ( !inst.inline ) {
        showAnim = $.datepicker._get( inst, "showAnim" );
        duration = $.datepicker._get( inst, "duration" );
        inst.dpDiv.css( "z-index", datepicker_getZindex( $( input ) ) + 1 );
        $.datepicker._datepickerShowing = true;

        if ( $.effects && $.effects.effect[ showAnim ] ) {
          inst.dpDiv.show( showAnim, $.datepicker._get( inst, "showOptions" ), duration );
        } else {
          inst.dpDiv[ showAnim || "show" ]( showAnim ? duration : null );
        }

        if ( $.datepicker._shouldFocusInput( inst ) ) {
          inst.input.trigger( "focus" );
        }

        $.datepicker._curInst = inst;
      }
    },

    /* Generate the date picker content. */
    _updateDatepicker: function( inst ) {
      this.maxRows = 4; //Reset the max number of rows being displayed (see #7043)
      datepicker_instActive = inst; // for delegate hover events
      inst.dpDiv.empty().append( this._generateHTML( inst ) );
      this._attachHandlers( inst );

      var origyearshtml,
        numMonths = this._getNumberOfMonths( inst ),
        cols = numMonths[ 1 ],
        width = 17,
        activeCell = inst.dpDiv.find( "." + this._dayOverClass + " a" );

      if ( activeCell.length > 0 ) {
        datepicker_handleMouseover.apply( activeCell.get( 0 ) );
      }

      inst.dpDiv.removeClass( "ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4" ).width( "" );
      if ( cols > 1 ) {
        inst.dpDiv.addClass( "ui-datepicker-multi-" + cols ).css( "width", ( width * cols ) + "em" );
      }
      inst.dpDiv[ ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ? "add" : "remove" ) +
      "Class" ]( "ui-datepicker-multi" );
      inst.dpDiv[ ( this._get( inst, "isRTL" ) ? "add" : "remove" ) +
      "Class" ]( "ui-datepicker-rtl" );

      if ( inst === $.datepicker._curInst && $.datepicker._datepickerShowing && $.datepicker._shouldFocusInput( inst ) ) {
        inst.input.trigger( "focus" );
      }

      // Deffered render of the years select (to avoid flashes on Firefox)
      if ( inst.yearshtml ) {
        origyearshtml = inst.yearshtml;
        setTimeout( function() {

          //assure that inst.yearshtml didn't change.
          if ( origyearshtml === inst.yearshtml && inst.yearshtml ) {
            inst.dpDiv.find( "select.ui-datepicker-year:first" ).replaceWith( inst.yearshtml );
          }
          origyearshtml = inst.yearshtml = null;
        }, 0 );
      }
    },

    // #6694 - don't focus the input if it's already focused
    // this breaks the change event in IE
    // Support: IE and jQuery <1.9
    _shouldFocusInput: function( inst ) {
      return inst.input && inst.input.is( ":visible" ) && !inst.input.is( ":disabled" ) && !inst.input.is( ":focus" );
    },

    /* Check positioning to remain on screen. */
    _checkOffset: function( inst, offset, isFixed ) {
      var dpWidth = inst.dpDiv.outerWidth(),
        dpHeight = inst.dpDiv.outerHeight(),
        inputWidth = inst.input ? inst.input.outerWidth() : 0,
        inputHeight = inst.input ? inst.input.outerHeight() : 0,
        viewWidth = document.documentElement.clientWidth + ( isFixed ? 0 : $( document ).scrollLeft() ),
        viewHeight = document.documentElement.clientHeight + ( isFixed ? 0 : $( document ).scrollTop() );

      offset.left -= ( this._get( inst, "isRTL" ) ? ( dpWidth - inputWidth ) : 0 );
      offset.left -= ( isFixed && offset.left === inst.input.offset().left ) ? $( document ).scrollLeft() : 0;
      offset.top -= ( isFixed && offset.top === ( inst.input.offset().top + inputHeight ) ) ? $( document ).scrollTop() : 0;

      // Now check if datepicker is showing outside window viewport - move to a better place if so.
      offset.left -= Math.min( offset.left, ( offset.left + dpWidth > viewWidth && viewWidth > dpWidth ) ?
        Math.abs( offset.left + dpWidth - viewWidth ) : 0 );
      offset.top -= Math.min( offset.top, ( offset.top + dpHeight > viewHeight && viewHeight > dpHeight ) ?
        Math.abs( dpHeight + inputHeight ) : 0 );

      return offset;
    },

    /* Find an object's position on the screen. */
    _findPos: function( obj ) {
      var position,
        inst = this._getInst( obj ),
        isRTL = this._get( inst, "isRTL" );

      while ( obj && ( obj.type === "hidden" || obj.nodeType !== 1 || $.expr.filters.hidden( obj ) ) ) {
        obj = obj[ isRTL ? "previousSibling" : "nextSibling" ];
      }

      position = $( obj ).offset();
      return [ position.left, position.top ];
    },

    /* Hide the date picker from view.
	 * @param  input  element - the input field attached to the date picker
	 */
    _hideDatepicker: function( input ) {
      var showAnim, duration, postProcess, onClose,
        inst = this._curInst;

      if ( !inst || ( input && inst !== $.data( input, "datepicker" ) ) ) {
        return;
      }

      if ( this._datepickerShowing ) {
        showAnim = this._get( inst, "showAnim" );
        duration = this._get( inst, "duration" );
        postProcess = function() {
          $.datepicker._tidyDialog( inst );
        };

        // DEPRECATED: after BC for 1.8.x $.effects[ showAnim ] is not needed
        if ( $.effects && ( $.effects.effect[ showAnim ] || $.effects[ showAnim ] ) ) {
          inst.dpDiv.hide( showAnim, $.datepicker._get( inst, "showOptions" ), duration, postProcess );
        } else {
          inst.dpDiv[ ( showAnim === "slideDown" ? "slideUp" :
            ( showAnim === "fadeIn" ? "fadeOut" : "hide" ) ) ]( ( showAnim ? duration : null ), postProcess );
        }

        if ( !showAnim ) {
          postProcess();
        }
        this._datepickerShowing = false;

        onClose = this._get( inst, "onClose" );
        if ( onClose ) {
          onClose.apply( ( inst.input ? inst.input[ 0 ] : null ), [ ( inst.input ? inst.input.val() : "" ), inst ] );
        }

        this._lastInput = null;
        if ( this._inDialog ) {
          this._dialogInput.css( { position: "absolute", left: "0", top: "-100px" } );
          if ( $.blockUI ) {
            $.unblockUI();
            $( "body" ).append( this.dpDiv );
          }
        }
        this._inDialog = false;
      }
    },

    /* Tidy up after a dialog display. */
    _tidyDialog: function( inst ) {
      inst.dpDiv.removeClass( this._dialogClass ).off( ".ui-datepicker-calendar" );
    },

    /* Close date picker if clicked elsewhere. */
    _checkExternalClick: function( event ) {
      if ( !$.datepicker._curInst ) {
        return;
      }

      var $target = $( event.target ),
        inst = $.datepicker._getInst( $target[ 0 ] );

      if ( ( ( $target[ 0 ].id !== $.datepicker._mainDivId &&
          $target.parents( "#" + $.datepicker._mainDivId ).length === 0 &&
          !$target.hasClass( $.datepicker.markerClassName ) &&
          !$target.closest( "." + $.datepicker._triggerClass ).length &&
          $.datepicker._datepickerShowing && !( $.datepicker._inDialog && $.blockUI ) ) ) ||
        ( $target.hasClass( $.datepicker.markerClassName ) && $.datepicker._curInst !== inst ) ) {
        $.datepicker._hideDatepicker();
      }
    },

    /* Adjust one of the date sub-fields. */
    _adjustDate: function( id, offset, period ) {
      var target = $( id ),
        inst = this._getInst( target[ 0 ] );

      if ( this._isDisabledDatepicker( target[ 0 ] ) ) {
        return;
      }
      this._adjustInstDate( inst, offset +
        ( period === "M" ? this._get( inst, "showCurrentAtPos" ) : 0 ), // undo positioning
        period );
      this._updateDatepicker( inst );
    },

    /* Action for current link. */
    _gotoToday: function( id ) {
      var date,
        target = $( id ),
        inst = this._getInst( target[ 0 ] );

      if ( this._get( inst, "gotoCurrent" ) && inst.currentDay ) {
        inst.selectedDay = inst.currentDay;
        inst.drawMonth = inst.selectedMonth = inst.currentMonth;
        inst.drawYear = inst.selectedYear = inst.currentYear;
      } else {
        date = new Date();
        inst.selectedDay = date.getDate();
        inst.drawMonth = inst.selectedMonth = date.getMonth();
        inst.drawYear = inst.selectedYear = date.getFullYear();
      }
      this._notifyChange( inst );
      this._adjustDate( target );
    },

    /* Action for selecting a new month/year. */
    _selectMonthYear: function( id, select, period ) {
      var target = $( id ),
        inst = this._getInst( target[ 0 ] );

      inst[ "selected" + ( period === "M" ? "Month" : "Year" ) ] =
        inst[ "draw" + ( period === "M" ? "Month" : "Year" ) ] =
          parseInt( select.options[ select.selectedIndex ].value, 10 );

      this._notifyChange( inst );
      this._adjustDate( target );
    },

    /* Action for selecting a day. */
    _selectDay: function( id, month, year, td ) {
      var inst,
        target = $( id );

      if ( $( td ).hasClass( this._unselectableClass ) || this._isDisabledDatepicker( target[ 0 ] ) ) {
        return;
      }

      inst = this._getInst( target[ 0 ] );
      inst.selectedDay = inst.currentDay = $( "a", td ).html();
      inst.selectedMonth = inst.currentMonth = month;
      inst.selectedYear = inst.currentYear = year;
      this._selectDate( id, this._formatDate( inst,
        inst.currentDay, inst.currentMonth, inst.currentYear ) );
    },

    /* Erase the input field and hide the date picker. */
    _clearDate: function( id ) {
      var target = $( id );
      this._selectDate( target, "" );
    },

    /* Update the input field with the selected date. */
    _selectDate: function( id, dateStr ) {
      var onSelect,
        target = $( id ),
        inst = this._getInst( target[ 0 ] );

      dateStr = ( dateStr != null ? dateStr : this._formatDate( inst ) );
      if ( inst.input ) {
        inst.input.val( dateStr );
      }
      this._updateAlternate( inst );

      onSelect = this._get( inst, "onSelect" );
      if ( onSelect ) {
        onSelect.apply( ( inst.input ? inst.input[ 0 ] : null ), [ dateStr, inst ] );  // trigger custom callback
      } else if ( inst.input ) {
        inst.input.trigger( "change" ); // fire the change event
      }

      if ( inst.inline ) {
        this._updateDatepicker( inst );
      } else {
        this._hideDatepicker();
        this._lastInput = inst.input[ 0 ];
        if ( typeof( inst.input[ 0 ] ) !== "object" ) {
          inst.input.trigger( "focus" ); // restore focus
        }
        this._lastInput = null;
      }
    },

    /* Update any alternate field to synchronise with the main field. */
    _updateAlternate: function( inst ) {
      var altFormat, date, dateStr,
        altField = this._get( inst, "altField" );

      if ( altField ) { // update alternate field too
        altFormat = this._get( inst, "altFormat" ) || this._get( inst, "dateFormat" );
        date = this._getDate( inst );
        dateStr = this.formatDate( altFormat, date, this._getFormatConfig( inst ) );
        $( altField ).val( dateStr );
      }
    },

    /* Set as beforeShowDay function to prevent selection of weekends.
	 * @param  date  Date - the date to customise
	 * @return [boolean, string] - is this date selectable?, what is its CSS class?
	 */
    noWeekends: function( date ) {
      var day = date.getDay();
      return [ ( day > 0 && day < 6 ), "" ];
    },

    /* Set as calculateWeek to determine the week of the year based on the ISO 8601 definition.
	 * @param  date  Date - the date to get the week for
	 * @return  number - the number of the week within the year that contains this date
	 */
    iso8601Week: function( date ) {
      var time,
        checkDate = new Date( date.getTime() );

      // Find Thursday of this week starting on Monday
      checkDate.setDate( checkDate.getDate() + 4 - ( checkDate.getDay() || 7 ) );

      time = checkDate.getTime();
      checkDate.setMonth( 0 ); // Compare with Jan 1
      checkDate.setDate( 1 );
      return Math.floor( Math.round( ( time - checkDate ) / 86400000 ) / 7 ) + 1;
    },

    /* Parse a string value into a date object.
	 * See formatDate below for the possible formats.
	 *
	 * @param  format string - the expected format of the date
	 * @param  value string - the date in the above format
	 * @param  settings Object - attributes include:
	 *					shortYearCutoff  number - the cutoff year for determining the century (optional)
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  Date - the extracted date value or null if value is blank
	 */
    parseDate: function( format, value, settings ) {
      if ( format == null || value == null ) {
        throw "Invalid arguments";
      }

      value = ( typeof value === "object" ? value.toString() : value + "" );
      if ( value === "" ) {
        return null;
      }

      var iFormat, dim, extra,
        iValue = 0,
        shortYearCutoffTemp = ( settings ? settings.shortYearCutoff : null ) || this._defaults.shortYearCutoff,
        shortYearCutoff = ( typeof shortYearCutoffTemp !== "string" ? shortYearCutoffTemp :
          new Date().getFullYear() % 100 + parseInt( shortYearCutoffTemp, 10 ) ),
        dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
        dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
        monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
        monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,
        year = -1,
        month = -1,
        day = -1,
        doy = -1,
        literal = false,
        date,

        // Check whether a format character is doubled
        lookAhead = function( match ) {
          var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
          if ( matches ) {
            iFormat++;
          }
          return matches;
        },

        // Extract a number from the string value
        getNumber = function( match ) {
          var isDoubled = lookAhead( match ),
            size = ( match === "@" ? 14 : ( match === "!" ? 20 :
              ( match === "y" && isDoubled ? 4 : ( match === "o" ? 3 : 2 ) ) ) ),
            minSize = ( match === "y" ? size : 1 ),
            digits = new RegExp( "^\\d{" + minSize + "," + size + "}" ),
            num = value.substring( iValue ).match( digits );
          if ( !num ) {
            throw "Missing number at position " + iValue;
          }
          iValue += num[ 0 ].length;
          return parseInt( num[ 0 ], 10 );
        },

        // Extract a name from the string value and convert to an index
        getName = function( match, shortNames, longNames ) {
          var index = -1,
            names = $.map( lookAhead( match ) ? longNames : shortNames, function( v, k ) {
              return [ [ k, v ] ];
            } ).sort( function( a, b ) {
              return -( a[ 1 ].length - b[ 1 ].length );
            } );

          $.each( names, function( i, pair ) {
            var name = pair[ 1 ];
            if ( value.substr( iValue, name.length ).toLowerCase() === name.toLowerCase() ) {
              index = pair[ 0 ];
              iValue += name.length;
              return false;
            }
          } );
          if ( index !== -1 ) {
            return index + 1;
          } else {
            throw "Unknown name at position " + iValue;
          }
        },

        // Confirm that a literal character matches the string value
        checkLiteral = function() {
          if ( value.charAt( iValue ) !== format.charAt( iFormat ) ) {
            throw "Unexpected literal at position " + iValue;
          }
          iValue++;
        };

      for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
        if ( literal ) {
          if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
            literal = false;
          } else {
            checkLiteral();
          }
        } else {
          switch ( format.charAt( iFormat ) ) {
            case "d":
              day = getNumber( "d" );
              break;
            case "D":
              getName( "D", dayNamesShort, dayNames );
              break;
            case "o":
              doy = getNumber( "o" );
              break;
            case "m":
              month = getNumber( "m" );
              break;
            case "M":
              month = getName( "M", monthNamesShort, monthNames );
              break;
            case "y":
              year = getNumber( "y" );
              break;
            case "@":
              date = new Date( getNumber( "@" ) );
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case "!":
              date = new Date( ( getNumber( "!" ) - this._ticksTo1970 ) / 10000 );
              year = date.getFullYear();
              month = date.getMonth() + 1;
              day = date.getDate();
              break;
            case "'":
              if ( lookAhead( "'" ) ) {
                checkLiteral();
              } else {
                literal = true;
              }
              break;
            default:
              checkLiteral();
          }
        }
      }

      if ( iValue < value.length ) {
        extra = value.substr( iValue );
        if ( !/^\s+/.test( extra ) ) {
          throw "Extra/unparsed characters found in date: " + extra;
        }
      }

      if ( year === -1 ) {
        year = new Date().getFullYear();
      } else if ( year < 100 ) {
        year += new Date().getFullYear() - new Date().getFullYear() % 100 +
          ( year <= shortYearCutoff ? 0 : -100 );
      }

      if ( doy > -1 ) {
        month = 1;
        day = doy;
        do {
          dim = this._getDaysInMonth( year, month - 1 );
          if ( day <= dim ) {
            break;
          }
          month++;
          day -= dim;
        } while ( true );
      }

      date = this._daylightSavingAdjust( new Date( year, month - 1, day ) );
      if ( date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day ) {
        throw "Invalid date"; // E.g. 31/02/00
      }
      return date;
    },

    /* Standard date formats. */
    ATOM: "yy-mm-dd", // RFC 3339 (ISO 8601)
    COOKIE: "D, dd M yy",
    ISO_8601: "yy-mm-dd",
    RFC_822: "D, d M y",
    RFC_850: "DD, dd-M-y",
    RFC_1036: "D, d M y",
    RFC_1123: "D, d M yy",
    RFC_2822: "D, d M yy",
    RSS: "D, d M y", // RFC 822
    TICKS: "!",
    TIMESTAMP: "@",
    W3C: "yy-mm-dd", // ISO 8601

    _ticksTo1970: ( ( ( 1970 - 1 ) * 365 + Math.floor( 1970 / 4 ) - Math.floor( 1970 / 100 ) +
      Math.floor( 1970 / 400 ) ) * 24 * 60 * 60 * 10000000 ),

    /* Format a date object into a string value.
	 * The format can be combinations of the following:
	 * d  - day of month (no leading zero)
	 * dd - day of month (two digit)
	 * o  - day of year (no leading zeros)
	 * oo - day of year (three digit)
	 * D  - day name short
	 * DD - day name long
	 * m  - month of year (no leading zero)
	 * mm - month of year (two digit)
	 * M  - month name short
	 * MM - month name long
	 * y  - year (two digit)
	 * yy - year (four digit)
	 * @ - Unix timestamp (ms since 01/01/1970)
	 * ! - Windows ticks (100ns since 01/01/0001)
	 * "..." - literal text
	 * '' - single quote
	 *
	 * @param  format string - the desired format of the date
	 * @param  date Date - the date value to format
	 * @param  settings Object - attributes include:
	 *					dayNamesShort	string[7] - abbreviated names of the days from Sunday (optional)
	 *					dayNames		string[7] - names of the days from Sunday (optional)
	 *					monthNamesShort string[12] - abbreviated names of the months (optional)
	 *					monthNames		string[12] - names of the months (optional)
	 * @return  string - the date in the above format
	 */
    formatDate: function( format, date, settings ) {
      if ( !date ) {
        return "";
      }

      var iFormat,
        dayNamesShort = ( settings ? settings.dayNamesShort : null ) || this._defaults.dayNamesShort,
        dayNames = ( settings ? settings.dayNames : null ) || this._defaults.dayNames,
        monthNamesShort = ( settings ? settings.monthNamesShort : null ) || this._defaults.monthNamesShort,
        monthNames = ( settings ? settings.monthNames : null ) || this._defaults.monthNames,

        // Check whether a format character is doubled
        lookAhead = function( match ) {
          var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
          if ( matches ) {
            iFormat++;
          }
          return matches;
        },

        // Format a number, with leading zero if necessary
        formatNumber = function( match, value, len ) {
          var num = "" + value;
          if ( lookAhead( match ) ) {
            while ( num.length < len ) {
              num = "0" + num;
            }
          }
          return num;
        },

        // Format a name, short or long as requested
        formatName = function( match, value, shortNames, longNames ) {
          return ( lookAhead( match ) ? longNames[ value ] : shortNames[ value ] );
        },
        output = "",
        literal = false;

      if ( date ) {
        for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
          if ( literal ) {
            if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
              literal = false;
            } else {
              output += format.charAt( iFormat );
            }
          } else {
            switch ( format.charAt( iFormat ) ) {
              case "d":
                output += formatNumber( "d", date.getDate(), 2 );
                break;
              case "D":
                output += formatName( "D", date.getDay(), dayNamesShort, dayNames );
                break;
              case "o":
                output += formatNumber( "o",
                  Math.round( ( new Date( date.getFullYear(), date.getMonth(), date.getDate() ).getTime() - new Date( date.getFullYear(), 0, 0 ).getTime() ) / 86400000 ), 3 );
                break;
              case "m":
                output += formatNumber( "m", date.getMonth() + 1, 2 );
                break;
              case "M":
                output += formatName( "M", date.getMonth(), monthNamesShort, monthNames );
                break;
              case "y":
                output += ( lookAhead( "y" ) ? date.getFullYear() :
                  ( date.getFullYear() % 100 < 10 ? "0" : "" ) + date.getFullYear() % 100 );
                break;
              case "@":
                output += date.getTime();
                break;
              case "!":
                output += date.getTime() * 10000 + this._ticksTo1970;
                break;
              case "'":
                if ( lookAhead( "'" ) ) {
                  output += "'";
                } else {
                  literal = true;
                }
                break;
              default:
                output += format.charAt( iFormat );
            }
          }
        }
      }
      return output;
    },

    /* Extract all possible characters from the date format. */
    _possibleChars: function( format ) {
      var iFormat,
        chars = "",
        literal = false,

        // Check whether a format character is doubled
        lookAhead = function( match ) {
          var matches = ( iFormat + 1 < format.length && format.charAt( iFormat + 1 ) === match );
          if ( matches ) {
            iFormat++;
          }
          return matches;
        };

      for ( iFormat = 0; iFormat < format.length; iFormat++ ) {
        if ( literal ) {
          if ( format.charAt( iFormat ) === "'" && !lookAhead( "'" ) ) {
            literal = false;
          } else {
            chars += format.charAt( iFormat );
          }
        } else {
          switch ( format.charAt( iFormat ) ) {
            case "d": case "m": case "y": case "@":
              chars += "0123456789";
              break;
            case "D": case "M":
              return null; // Accept anything
            case "'":
              if ( lookAhead( "'" ) ) {
                chars += "'";
              } else {
                literal = true;
              }
              break;
            default:
              chars += format.charAt( iFormat );
          }
        }
      }
      return chars;
    },

    /* Get a setting value, defaulting if necessary. */
    _get: function( inst, name ) {
      return inst.settings[ name ] !== undefined ?
        inst.settings[ name ] : this._defaults[ name ];
    },

    /* Parse existing date and initialise date picker. */
    _setDateFromField: function( inst, noDefault ) {
      if ( inst.input.val() === inst.lastVal ) {
        return;
      }

      var dateFormat = this._get( inst, "dateFormat" ),
        dates = inst.lastVal = inst.input ? inst.input.val() : null,
        defaultDate = this._getDefaultDate( inst ),
        date = defaultDate,
        settings = this._getFormatConfig( inst );

      try {
        date = this.parseDate( dateFormat, dates, settings ) || defaultDate;
      } catch ( event ) {
        dates = ( noDefault ? "" : dates );
      }
      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      inst.currentDay = ( dates ? date.getDate() : 0 );
      inst.currentMonth = ( dates ? date.getMonth() : 0 );
      inst.currentYear = ( dates ? date.getFullYear() : 0 );
      this._adjustInstDate( inst );
    },

    /* Retrieve the default date shown on opening. */
    _getDefaultDate: function( inst ) {
      return this._restrictMinMax( inst,
        this._determineDate( inst, this._get( inst, "defaultDate" ), new Date() ) );
    },

    /* A date may be specified as an exact value or a relative one. */
    _determineDate: function( inst, date, defaultDate ) {
      var offsetNumeric = function( offset ) {
          var date = new Date();
          date.setDate( date.getDate() + offset );
          return date;
        },
        offsetString = function( offset ) {
          try {
            return $.datepicker.parseDate( $.datepicker._get( inst, "dateFormat" ),
              offset, $.datepicker._getFormatConfig( inst ) );
          }
          catch ( e ) {

            // Ignore
          }

          var date = ( offset.toLowerCase().match( /^c/ ) ?
              $.datepicker._getDate( inst ) : null ) || new Date(),
            year = date.getFullYear(),
            month = date.getMonth(),
            day = date.getDate(),
            pattern = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g,
            matches = pattern.exec( offset );

          while ( matches ) {
            switch ( matches[ 2 ] || "d" ) {
              case "d" : case "D" :
                day += parseInt( matches[ 1 ], 10 ); break;
              case "w" : case "W" :
                day += parseInt( matches[ 1 ], 10 ) * 7; break;
              case "m" : case "M" :
                month += parseInt( matches[ 1 ], 10 );
                day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
                break;
              case "y": case "Y" :
                year += parseInt( matches[ 1 ], 10 );
                day = Math.min( day, $.datepicker._getDaysInMonth( year, month ) );
                break;
            }
            matches = pattern.exec( offset );
          }
          return new Date( year, month, day );
        },
        newDate = ( date == null || date === "" ? defaultDate : ( typeof date === "string" ? offsetString( date ) :
          ( typeof date === "number" ? ( isNaN( date ) ? defaultDate : offsetNumeric( date ) ) : new Date( date.getTime() ) ) ) );

      newDate = ( newDate && newDate.toString() === "Invalid Date" ? defaultDate : newDate );
      if ( newDate ) {
        newDate.setHours( 0 );
        newDate.setMinutes( 0 );
        newDate.setSeconds( 0 );
        newDate.setMilliseconds( 0 );
      }
      return this._daylightSavingAdjust( newDate );
    },

    /* Handle switch to/from daylight saving.
	 * Hours may be non-zero on daylight saving cut-over:
	 * > 12 when midnight changeover, but then cannot generate
	 * midnight datetime, so jump to 1AM, otherwise reset.
	 * @param  date  (Date) the date to check
	 * @return  (Date) the corrected date
	 */
    _daylightSavingAdjust: function( date ) {
      if ( !date ) {
        return null;
      }
      date.setHours( date.getHours() > 12 ? date.getHours() + 2 : 0 );
      return date;
    },

    /* Set the date(s) directly. */
    _setDate: function( inst, date, noChange ) {
      var clear = !date,
        origMonth = inst.selectedMonth,
        origYear = inst.selectedYear,
        newDate = this._restrictMinMax( inst, this._determineDate( inst, date, new Date() ) );

      inst.selectedDay = inst.currentDay = newDate.getDate();
      inst.drawMonth = inst.selectedMonth = inst.currentMonth = newDate.getMonth();
      inst.drawYear = inst.selectedYear = inst.currentYear = newDate.getFullYear();
      if ( ( origMonth !== inst.selectedMonth || origYear !== inst.selectedYear ) && !noChange ) {
        this._notifyChange( inst );
      }
      this._adjustInstDate( inst );
      if ( inst.input ) {
        inst.input.val( clear ? "" : this._formatDate( inst ) );
      }
    },

    /* Retrieve the date(s) directly. */
    _getDate: function( inst ) {
      var startDate = ( !inst.currentYear || ( inst.input && inst.input.val() === "" ) ? null :
        this._daylightSavingAdjust( new Date(
          inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
      return startDate;
    },

    /* Attach the onxxx handlers.  These are declared statically so
	 * they work with static code transformers like Caja.
	 */
    _attachHandlers: function( inst ) {
      var stepMonths = this._get( inst, "stepMonths" ),
        id = "#" + inst.id.replace( /\\\\/g, "\\" );
      inst.dpDiv.find( "[data-handler]" ).map( function() {
        var handler = {
          prev: function() {
            $.datepicker._adjustDate( id, -stepMonths, "M" );
          },
          next: function() {
            $.datepicker._adjustDate( id, +stepMonths, "M" );
          },
          hide: function() {
            $.datepicker._hideDatepicker();
          },
          today: function() {
            $.datepicker._gotoToday( id );
          },
          selectDay: function() {
            $.datepicker._selectDay( id, +this.getAttribute( "data-month" ), +this.getAttribute( "data-year" ), this );
            return false;
          },
          selectMonth: function() {
            $.datepicker._selectMonthYear( id, this, "M" );
            return false;
          },
          selectYear: function() {
            $.datepicker._selectMonthYear( id, this, "Y" );
            return false;
          }
        };
        $( this ).on( this.getAttribute( "data-event" ), handler[ this.getAttribute( "data-handler" ) ] );
      } );
    },

    /* Generate the HTML for the current state of the date picker. */
    _generateHTML: function( inst ) {
      var maxDraw, prevText, prev, nextText, next, currentText, gotoDate,
        controls, buttonPanel, firstDay, showWeek, dayNames, dayNamesMin,
        monthNames, monthNamesShort, beforeShowDay, showOtherMonths,
        selectOtherMonths, defaultDate, html, dow, row, group, col, selectedDate,
        cornerClass, calender, thead, day, daysInMonth, leadDays, curRows, numRows,
        printDate, dRow, tbody, daySettings, otherMonth, unselectable,
        tempDate = new Date(),
        today = this._daylightSavingAdjust(
          new Date( tempDate.getFullYear(), tempDate.getMonth(), tempDate.getDate() ) ), // clear time
        isRTL = this._get( inst, "isRTL" ),
        showButtonPanel = this._get( inst, "showButtonPanel" ),
        hideIfNoPrevNext = this._get( inst, "hideIfNoPrevNext" ),
        navigationAsDateFormat = this._get( inst, "navigationAsDateFormat" ),
        numMonths = this._getNumberOfMonths( inst ),
        showCurrentAtPos = this._get( inst, "showCurrentAtPos" ),
        stepMonths = this._get( inst, "stepMonths" ),
        isMultiMonth = ( numMonths[ 0 ] !== 1 || numMonths[ 1 ] !== 1 ),
        currentDate = this._daylightSavingAdjust( ( !inst.currentDay ? new Date( 9999, 9, 9 ) :
          new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) ),
        minDate = this._getMinMaxDate( inst, "min" ),
        maxDate = this._getMinMaxDate( inst, "max" ),
        drawMonth = inst.drawMonth - showCurrentAtPos,
        drawYear = inst.drawYear;

      if ( drawMonth < 0 ) {
        drawMonth += 12;
        drawYear--;
      }
      if ( maxDate ) {
        maxDraw = this._daylightSavingAdjust( new Date( maxDate.getFullYear(),
          maxDate.getMonth() - ( numMonths[ 0 ] * numMonths[ 1 ] ) + 1, maxDate.getDate() ) );
        maxDraw = ( minDate && maxDraw < minDate ? minDate : maxDraw );
        while ( this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 ) ) > maxDraw ) {
          drawMonth--;
          if ( drawMonth < 0 ) {
            drawMonth = 11;
            drawYear--;
          }
        }
      }
      inst.drawMonth = drawMonth;
      inst.drawYear = drawYear;

      prevText = this._get( inst, "prevText" );
      prevText = ( !navigationAsDateFormat ? prevText : this.formatDate( prevText,
        this._daylightSavingAdjust( new Date( drawYear, drawMonth - stepMonths, 1 ) ),
        this._getFormatConfig( inst ) ) );

      prev = ( this._canAdjustMonth( inst, -1, drawYear, drawMonth ) ?
        "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click'" +
        " title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" :
        ( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + prevText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "e" : "w" ) + "'>" + prevText + "</span></a>" ) );

      nextText = this._get( inst, "nextText" );
      nextText = ( !navigationAsDateFormat ? nextText : this.formatDate( nextText,
        this._daylightSavingAdjust( new Date( drawYear, drawMonth + stepMonths, 1 ) ),
        this._getFormatConfig( inst ) ) );

      next = ( this._canAdjustMonth( inst, +1, drawYear, drawMonth ) ?
        "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click'" +
        " title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" :
        ( hideIfNoPrevNext ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + nextText + "'><span class='ui-icon ui-icon-circle-triangle-" + ( isRTL ? "w" : "e" ) + "'>" + nextText + "</span></a>" ) );

      currentText = this._get( inst, "currentText" );
      gotoDate = ( this._get( inst, "gotoCurrent" ) && inst.currentDay ? currentDate : today );
      currentText = ( !navigationAsDateFormat ? currentText :
        this.formatDate( currentText, gotoDate, this._getFormatConfig( inst ) ) );

      controls = ( !inst.inline ? "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" +
        this._get( inst, "closeText" ) + "</button>" : "" );

      buttonPanel = ( showButtonPanel ) ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + ( isRTL ? controls : "" ) +
        ( this._isInRange( inst, gotoDate ) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'" +
          ">" + currentText + "</button>" : "" ) + ( isRTL ? "" : controls ) + "</div>" : "";

      firstDay = parseInt( this._get( inst, "firstDay" ), 10 );
      firstDay = ( isNaN( firstDay ) ? 0 : firstDay );

      showWeek = this._get( inst, "showWeek" );
      dayNames = this._get( inst, "dayNames" );
      dayNamesMin = this._get( inst, "dayNamesMin" );
      monthNames = this._get( inst, "monthNames" );
      monthNamesShort = this._get( inst, "monthNamesShort" );
      beforeShowDay = this._get( inst, "beforeShowDay" );
      showOtherMonths = this._get( inst, "showOtherMonths" );
      selectOtherMonths = this._get( inst, "selectOtherMonths" );
      defaultDate = this._getDefaultDate( inst );
      html = "";

      for ( row = 0; row < numMonths[ 0 ]; row++ ) {
        group = "";
        this.maxRows = 4;
        for ( col = 0; col < numMonths[ 1 ]; col++ ) {
          selectedDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, inst.selectedDay ) );
          cornerClass = " ui-corner-all";
          calender = "";
          if ( isMultiMonth ) {
            calender += "<div class='ui-datepicker-group";
            if ( numMonths[ 1 ] > 1 ) {
              switch ( col ) {
                case 0: calender += " ui-datepicker-group-first";
                  cornerClass = " ui-corner-" + ( isRTL ? "right" : "left" ); break;
                case numMonths[ 1 ] - 1: calender += " ui-datepicker-group-last";
                  cornerClass = " ui-corner-" + ( isRTL ? "left" : "right" ); break;
                default: calender += " ui-datepicker-group-middle"; cornerClass = ""; break;
              }
            }
            calender += "'>";
          }
          calender += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + cornerClass + "'>" +
            ( /all|left/.test( cornerClass ) && row === 0 ? ( isRTL ? next : prev ) : "" ) +
            ( /all|right/.test( cornerClass ) && row === 0 ? ( isRTL ? prev : next ) : "" ) +
            this._generateMonthYearHeader( inst, drawMonth, drawYear, minDate, maxDate,
              row > 0 || col > 0, monthNames, monthNamesShort ) + // draw month headers
            "</div><table class='ui-datepicker-calendar'><thead>" +
            "<tr>";
          thead = ( showWeek ? "<th class='ui-datepicker-week-col'>" + this._get( inst, "weekHeader" ) + "</th>" : "" );
          for ( dow = 0; dow < 7; dow++ ) { // days of the week
            day = ( dow + firstDay ) % 7;
            thead += "<th scope='col'" + ( ( dow + firstDay + 6 ) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "" ) + ">" +
              "<span title='" + dayNames[ day ] + "'>" + dayNamesMin[ day ] + "</span></th>";
          }
          calender += thead + "</tr></thead><tbody>";
          daysInMonth = this._getDaysInMonth( drawYear, drawMonth );
          if ( drawYear === inst.selectedYear && drawMonth === inst.selectedMonth ) {
            inst.selectedDay = Math.min( inst.selectedDay, daysInMonth );
          }
          leadDays = ( this._getFirstDayOfMonth( drawYear, drawMonth ) - firstDay + 7 ) % 7;
          curRows = Math.ceil( ( leadDays + daysInMonth ) / 7 ); // calculate the number of rows to generate
          numRows = ( isMultiMonth ? this.maxRows > curRows ? this.maxRows : curRows : curRows ); //If multiple months, use the higher number of rows (see #7043)
          this.maxRows = numRows;
          printDate = this._daylightSavingAdjust( new Date( drawYear, drawMonth, 1 - leadDays ) );
          for ( dRow = 0; dRow < numRows; dRow++ ) { // create date picker rows
            calender += "<tr>";
            tbody = ( !showWeek ? "" : "<td class='ui-datepicker-week-col'>" +
              this._get( inst, "calculateWeek" )( printDate ) + "</td>" );
            for ( dow = 0; dow < 7; dow++ ) { // create date picker days
              daySettings = ( beforeShowDay ?
                beforeShowDay.apply( ( inst.input ? inst.input[ 0 ] : null ), [ printDate ] ) : [ true, "" ] );
              otherMonth = ( printDate.getMonth() !== drawMonth );
              unselectable = ( otherMonth && !selectOtherMonths ) || !daySettings[ 0 ] ||
                ( minDate && printDate < minDate ) || ( maxDate && printDate > maxDate );
              tbody += "<td class='" +
                ( ( dow + firstDay + 6 ) % 7 >= 5 ? " ui-datepicker-week-end" : "" ) + // highlight weekends
                ( otherMonth ? " ui-datepicker-other-month" : "" ) + // highlight days from other months
                ( ( printDate.getTime() === selectedDate.getTime() && drawMonth === inst.selectedMonth && inst._keyEvent ) || // user pressed key
                ( defaultDate.getTime() === printDate.getTime() && defaultDate.getTime() === selectedDate.getTime() ) ?

                  // or defaultDate is current printedDate and defaultDate is selectedDate
                  " " + this._dayOverClass : "" ) + // highlight selected day
                ( unselectable ? " " + this._unselectableClass + " ui-state-disabled" : "" ) +  // highlight unselectable days
                ( otherMonth && !showOtherMonths ? "" : " " + daySettings[ 1 ] + // highlight custom dates
                  ( printDate.getTime() === currentDate.getTime() ? " " + this._currentClass : "" ) + // highlight selected day
                  ( printDate.getTime() === today.getTime() ? " ui-datepicker-today" : "" ) ) + "'" + // highlight today (if different)
                ( ( !otherMonth || showOtherMonths ) && daySettings[ 2 ] ? " title='" + daySettings[ 2 ].replace( /'/g, "&#39;" ) + "'" : "" ) + // cell title
                ( unselectable ? "" : " data-handler='selectDay' data-event='click' data-month='" + printDate.getMonth() + "' data-year='" + printDate.getFullYear() + "'" ) + ">" + // actions
                ( otherMonth && !showOtherMonths ? "&#xa0;" : // display for other months
                  ( unselectable ? "<span class='ui-state-default'>" + printDate.getDate() + "</span>" : "<a class='ui-state-default" +
                    ( printDate.getTime() === today.getTime() ? " ui-state-highlight" : "" ) +
                    ( printDate.getTime() === currentDate.getTime() ? " ui-state-active" : "" ) + // highlight selected day
                    ( otherMonth ? " ui-priority-secondary" : "" ) + // distinguish dates from other months
                    "' href='#'>" + printDate.getDate() + "</a>" ) ) + "</td>"; // display selectable date
              printDate.setDate( printDate.getDate() + 1 );
              printDate = this._daylightSavingAdjust( printDate );
            }
            calender += tbody + "</tr>";
          }
          drawMonth++;
          if ( drawMonth > 11 ) {
            drawMonth = 0;
            drawYear++;
          }
          calender += "</tbody></table>" + ( isMultiMonth ? "</div>" +
            ( ( numMonths[ 0 ] > 0 && col === numMonths[ 1 ] - 1 ) ? "<div class='ui-datepicker-row-break'></div>" : "" ) : "" );
          group += calender;
        }
        html += group;
      }
      html += buttonPanel;
      inst._keyEvent = false;
      return html;
    },

    /* Generate the month and year header. */
    _generateMonthYearHeader: function( inst, drawMonth, drawYear, minDate, maxDate,
                                        secondary, monthNames, monthNamesShort ) {

      var inMinYear, inMaxYear, month, years, thisYear, determineYear, year, endYear,
        changeMonth = this._get( inst, "changeMonth" ),
        changeYear = this._get( inst, "changeYear" ),
        showMonthAfterYear = this._get( inst, "showMonthAfterYear" ),
        html = "<div class='ui-datepicker-title'>",
        monthHtml = "";

      // Month selection
      if ( secondary || !changeMonth ) {
        monthHtml += "<span class='ui-datepicker-month'>" + monthNames[ drawMonth ] + "</span>";
      } else {
        inMinYear = ( minDate && minDate.getFullYear() === drawYear );
        inMaxYear = ( maxDate && maxDate.getFullYear() === drawYear );
        monthHtml += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>";
        for ( month = 0; month < 12; month++ ) {
          if ( ( !inMinYear || month >= minDate.getMonth() ) && ( !inMaxYear || month <= maxDate.getMonth() ) ) {
            monthHtml += "<option value='" + month + "'" +
              ( month === drawMonth ? " selected='selected'" : "" ) +
              ">" + monthNamesShort[ month ] + "</option>";
          }
        }
        monthHtml += "</select>";
      }

      if ( !showMonthAfterYear ) {
        html += monthHtml + ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" );
      }

      // Year selection
      if ( !inst.yearshtml ) {
        inst.yearshtml = "";
        if ( secondary || !changeYear ) {
          html += "<span class='ui-datepicker-year'>" + drawYear + "</span>";
        } else {

          // determine range of years to display
          years = this._get( inst, "yearRange" ).split( ":" );
          thisYear = new Date().getFullYear();
          determineYear = function( value ) {
            var year = ( value.match( /c[+\-].*/ ) ? drawYear + parseInt( value.substring( 1 ), 10 ) :
              ( value.match( /[+\-].*/ ) ? thisYear + parseInt( value, 10 ) :
                parseInt( value, 10 ) ) );
            return ( isNaN( year ) ? thisYear : year );
          };
          year = determineYear( years[ 0 ] );
          endYear = Math.max( year, determineYear( years[ 1 ] || "" ) );
          year = ( minDate ? Math.max( year, minDate.getFullYear() ) : year );
          endYear = ( maxDate ? Math.min( endYear, maxDate.getFullYear() ) : endYear );
          inst.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>";
          for ( ; year <= endYear; year++ ) {
            inst.yearshtml += "<option value='" + year + "'" +
              ( year === drawYear ? " selected='selected'" : "" ) +
              ">" + year + "</option>";
          }
          inst.yearshtml += "</select>";

          html += inst.yearshtml;
          inst.yearshtml = null;
        }
      }

      html += this._get( inst, "yearSuffix" );
      if ( showMonthAfterYear ) {
        html += ( secondary || !( changeMonth && changeYear ) ? "&#xa0;" : "" ) + monthHtml;
      }
      html += "</div>"; // Close datepicker_header
      return html;
    },

    /* Adjust one of the date sub-fields. */
    _adjustInstDate: function( inst, offset, period ) {
      var year = inst.selectedYear + ( period === "Y" ? offset : 0 ),
        month = inst.selectedMonth + ( period === "M" ? offset : 0 ),
        day = Math.min( inst.selectedDay, this._getDaysInMonth( year, month ) ) + ( period === "D" ? offset : 0 ),
        date = this._restrictMinMax( inst, this._daylightSavingAdjust( new Date( year, month, day ) ) );

      inst.selectedDay = date.getDate();
      inst.drawMonth = inst.selectedMonth = date.getMonth();
      inst.drawYear = inst.selectedYear = date.getFullYear();
      if ( period === "M" || period === "Y" ) {
        this._notifyChange( inst );
      }
    },

    /* Ensure a date is within any min/max bounds. */
    _restrictMinMax: function( inst, date ) {
      var minDate = this._getMinMaxDate( inst, "min" ),
        maxDate = this._getMinMaxDate( inst, "max" ),
        newDate = ( minDate && date < minDate ? minDate : date );
      return ( maxDate && newDate > maxDate ? maxDate : newDate );
    },

    /* Notify change of month/year. */
    _notifyChange: function( inst ) {
      var onChange = this._get( inst, "onChangeMonthYear" );
      if ( onChange ) {
        onChange.apply( ( inst.input ? inst.input[ 0 ] : null ),
          [ inst.selectedYear, inst.selectedMonth + 1, inst ] );
      }
    },

    /* Determine the number of months to show. */
    _getNumberOfMonths: function( inst ) {
      var numMonths = this._get( inst, "numberOfMonths" );
      return ( numMonths == null ? [ 1, 1 ] : ( typeof numMonths === "number" ? [ 1, numMonths ] : numMonths ) );
    },

    /* Determine the current maximum date - ensure no time components are set. */
    _getMinMaxDate: function( inst, minMax ) {
      return this._determineDate( inst, this._get( inst, minMax + "Date" ), null );
    },

    /* Find the number of days in a given month. */
    _getDaysInMonth: function( year, month ) {
      return 32 - this._daylightSavingAdjust( new Date( year, month, 32 ) ).getDate();
    },

    /* Find the day of the week of the first of a month. */
    _getFirstDayOfMonth: function( year, month ) {
      return new Date( year, month, 1 ).getDay();
    },

    /* Determines if we should allow a "next/prev" month display change. */
    _canAdjustMonth: function( inst, offset, curYear, curMonth ) {
      var numMonths = this._getNumberOfMonths( inst ),
        date = this._daylightSavingAdjust( new Date( curYear,
          curMonth + ( offset < 0 ? offset : numMonths[ 0 ] * numMonths[ 1 ] ), 1 ) );

      if ( offset < 0 ) {
        date.setDate( this._getDaysInMonth( date.getFullYear(), date.getMonth() ) );
      }
      return this._isInRange( inst, date );
    },

    /* Is the given date in the accepted range? */
    _isInRange: function( inst, date ) {
      var yearSplit, currentYear,
        minDate = this._getMinMaxDate( inst, "min" ),
        maxDate = this._getMinMaxDate( inst, "max" ),
        minYear = null,
        maxYear = null,
        years = this._get( inst, "yearRange" );
      if ( years ) {
        yearSplit = years.split( ":" );
        currentYear = new Date().getFullYear();
        minYear = parseInt( yearSplit[ 0 ], 10 );
        maxYear = parseInt( yearSplit[ 1 ], 10 );
        if ( yearSplit[ 0 ].match( /[+\-].*/ ) ) {
          minYear += currentYear;
        }
        if ( yearSplit[ 1 ].match( /[+\-].*/ ) ) {
          maxYear += currentYear;
        }
      }

      return ( ( !minDate || date.getTime() >= minDate.getTime() ) &&
        ( !maxDate || date.getTime() <= maxDate.getTime() ) &&
        ( !minYear || date.getFullYear() >= minYear ) &&
        ( !maxYear || date.getFullYear() <= maxYear ) );
    },

    /* Provide the configuration settings for formatting/parsing. */
    _getFormatConfig: function( inst ) {
      var shortYearCutoff = this._get( inst, "shortYearCutoff" );
      shortYearCutoff = ( typeof shortYearCutoff !== "string" ? shortYearCutoff :
        new Date().getFullYear() % 100 + parseInt( shortYearCutoff, 10 ) );
      return { shortYearCutoff: shortYearCutoff,
        dayNamesShort: this._get( inst, "dayNamesShort" ), dayNames: this._get( inst, "dayNames" ),
        monthNamesShort: this._get( inst, "monthNamesShort" ), monthNames: this._get( inst, "monthNames" ) };
    },

    /* Format the given date for display. */
    _formatDate: function( inst, day, month, year ) {
      if ( !day ) {
        inst.currentDay = inst.selectedDay;
        inst.currentMonth = inst.selectedMonth;
        inst.currentYear = inst.selectedYear;
      }
      var date = ( day ? ( typeof day === "object" ? day :
          this._daylightSavingAdjust( new Date( year, month, day ) ) ) :
        this._daylightSavingAdjust( new Date( inst.currentYear, inst.currentMonth, inst.currentDay ) ) );
      return this.formatDate( this._get( inst, "dateFormat" ), date, this._getFormatConfig( inst ) );
    }
  } );

  /*
 * Bind hover events for datepicker elements.
 * Done via delegate so the binding only occurs once in the lifetime of the parent div.
 * Global datepicker_instActive, set by _updateDatepicker allows the handlers to find their way back to the active picker.
 */
  function datepicker_bindHover( dpDiv ) {
    var selector = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
    return dpDiv.on( "mouseout", selector, function() {
      $( this ).removeClass( "ui-state-hover" );
      if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
        $( this ).removeClass( "ui-datepicker-prev-hover" );
      }
      if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
        $( this ).removeClass( "ui-datepicker-next-hover" );
      }
    } )
      .on( "mouseover", selector, datepicker_handleMouseover );
  }

  function datepicker_handleMouseover() {
    if ( !$.datepicker._isDisabledDatepicker( datepicker_instActive.inline ? datepicker_instActive.dpDiv.parent()[ 0 ] : datepicker_instActive.input[ 0 ] ) ) {
      $( this ).parents( ".ui-datepicker-calendar" ).find( "a" ).removeClass( "ui-state-hover" );
      $( this ).addClass( "ui-state-hover" );
      if ( this.className.indexOf( "ui-datepicker-prev" ) !== -1 ) {
        $( this ).addClass( "ui-datepicker-prev-hover" );
      }
      if ( this.className.indexOf( "ui-datepicker-next" ) !== -1 ) {
        $( this ).addClass( "ui-datepicker-next-hover" );
      }
    }
  }

  /* jQuery extend now ignores nulls! */
  function datepicker_extendRemove( target, props ) {
    $.extend( target, props );
    for ( var name in props ) {
      if ( props[ name ] == null ) {
        target[ name ] = props[ name ];
      }
    }
    return target;
  }

  /* Invoke the datepicker functionality.
   @param  options  string - a command, optionally followed by additional parameters or
					Object - settings for attaching new datepicker functionality
   @return  jQuery object */
  $.fn.datepicker = function( options ) {

    /* Verify an empty collection wasn't passed - Fixes #6976 */
    if ( !this.length ) {
      return this;
    }

    /* Initialise the date picker. */
    if ( !$.datepicker.initialized ) {
      $( document ).on( "mousedown", $.datepicker._checkExternalClick );
      $.datepicker.initialized = true;
    }

    /* Append datepicker main container to body if not exist. */
    if ( $( "#" + $.datepicker._mainDivId ).length === 0 ) {
      $( "body" ).append( $.datepicker.dpDiv );
    }

    var otherArgs = Array.prototype.slice.call( arguments, 1 );
    if ( typeof options === "string" && ( options === "isDisabled" || options === "getDate" || options === "widget" ) ) {
      return $.datepicker[ "_" + options + "Datepicker" ].
      apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
    }
    if ( options === "option" && arguments.length === 2 && typeof arguments[ 1 ] === "string" ) {
      return $.datepicker[ "_" + options + "Datepicker" ].
      apply( $.datepicker, [ this[ 0 ] ].concat( otherArgs ) );
    }
    return this.each( function() {
      typeof options === "string" ?
        $.datepicker[ "_" + options + "Datepicker" ].
        apply( $.datepicker, [ this ].concat( otherArgs ) ) :
        $.datepicker._attachDatepicker( this, options );
    } );
  };

  $.datepicker = new Datepicker(); // singleton instance
  $.datepicker.initialized = false;
  $.datepicker.uuid = new Date().getTime();
  $.datepicker.version = "1.12.1";

  var widgetsDatepicker = $.datepicker;




}));
