!function(e){if(e.cookieChoices)return e.cookieChoices;var t=e.document,n="textContent"in document.body,i=function(){var e="displayCookieNotice",i="cookieChoiceInfo",o="cookie-choices-info",a="cookie-choices-inner",c="cookie-choices-text",r="cookie-choices-buttons",l="cookie-choices-button",p="singleton-element",d="cookieChoiceDismiss";function s(e,n,s,m){e&&e.replace&&(e=e.replace(/<[^>]*>/g,""));var f=t.createElement("div");f.className=a,f.appendChild(function(e){var n=t.createElement("span");return h(n,e),n.className=c,n}(e));var g=t.createElement("span");g.className=r,f.appendChild(g),s&&m&&g.appendChild(function(e,n){var i=t.createElement("a");return h(i,e),i.href=n,i.target="_blank",i.className=l,i}(s,m)),g.appendChild(function(e){var n=t.createElement("a");return h(n,e),n.id=d,n.href="#",n.className=l,n}(n));var u=t.createElement("div");return u.id=i,u.className=o+" "+p,u.appendChild(f),u}function h(e,t){n?e.textContent=t:e.innerText=t}function m(n){var i;return(i=new Date).setFullYear(i.getFullYear()+1),t.cookie=e+"=y; path=/; expires="+i.toGMTString(),f(),n.stopPropagation&&n.stopPropagation(),n.cancelBubble=!0,!1}function f(){var e=t.getElementById(i);null!=e&&e.parentNode.removeChild(e)}var g={};return g.showCookieConsentBar=function(n,i,g,u){if(!t.cookie.match(new RegExp(e+"=([^;]+)"))){f(),(C=t.createElement("style")).className=p,C.type="text/css",h(C,"."+o+" { position:fixed;width:100%;background-color:#666;margin:0;left:0;top:0;padding:0;z-index:4000;text-align:center;color:#fff;line-height:140%;padding:10px 0;font-family:roboto,Arial; } ."+o+" ."+a+" { position:relative;width:initial;margin:0;left:0;top:0; } ."+o+" ."+c+" { display:inline-block;vertical-align:middle;font-size:16px;margin:10px 20px;color:#ccc;max-width:800px;text-align:left; }."+o+" ."+r+" { display:inline-block;vertical-align:middle;white-space:nowrap;margin:0 10px; } ."+o+" ."+l+":hover {  color: #fff; } ."+o+" ."+l+" { font-weight:bold;text-transform:UPPERCASE;white-space:nowrap;color:#eee;margin-left:8px;padding:0 6px; text-decoration:none; }"),t.getElementsByTagName("head")[0].appendChild(C);var x=s(n,i,g,u),v=t.createDocumentFragment();v.appendChild(x),document.body.appendChild(v.cloneNode(!0)),t.getElementById(d).onclick=m}var C},g}();e.cookieChoices=i}(this);
