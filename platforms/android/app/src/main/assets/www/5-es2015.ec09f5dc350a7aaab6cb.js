(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"+2g3":function(e,t,i){"use strict";i.r(t),i.d(t,"KEYBOARD_DID_CLOSE",(function(){return o})),i.d(t,"KEYBOARD_DID_OPEN",(function(){return n})),i.d(t,"copyLayoutViewport",(function(){return K})),i.d(t,"copyVisualViewport",(function(){return E})),i.d(t,"keyboardDidClose",(function(){return y})),i.d(t,"keyboardDidOpen",(function(){return g})),i.d(t,"keyboardDidResize",(function(){return b})),i.d(t,"resetKeyboardAssist",(function(){return u})),i.d(t,"setKeyboardClose",(function(){return w})),i.d(t,"setKeyboardOpen",(function(){return f})),i.d(t,"startKeyboardAssist",(function(){return c})),i.d(t,"trackViewportChanges",(function(){return v}));const n="ionKeyboardDidShow",o="ionKeyboardDidHide";let r={},d={},s={},a={},h=!1;const u=()=>{r={},d={},s={},a={},h=!1},c=e=>{p(e),e.visualViewport&&(d=E(e.visualViewport),a=K(e),e.visualViewport.onresize=()=>{v(e),g()||b(e)?f(e):y(e)&&w(e)})},p=e=>{e.addEventListener("keyboardDidShow",t=>f(e,t)),e.addEventListener("keyboardDidHide",()=>w(e))},f=(e,t)=>{l(e,t),h=!0},w=e=>{k(e),h=!1},g=()=>!h&&r.width===d.width&&(r.height-d.height)*d.scale>150&&!D(),b=e=>h&&!y(e),y=e=>h&&d.height===e.innerHeight,D=()=>a.width!==s.width||a.height!==s.height,l=(e,t)=>{const i=new CustomEvent(n,{detail:{keyboardHeight:t?t.keyboardHeight:e.innerHeight-d.height}});e.dispatchEvent(i)},k=e=>{const t=new CustomEvent(o);e.dispatchEvent(t)},v=e=>{r=Object.assign({},d),d=E(e.visualViewport),s=Object.assign({},a),a=K(e)},E=e=>({width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}),K=e=>({width:e.innerWidth,height:e.innerHeight})}}]);